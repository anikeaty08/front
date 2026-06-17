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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="flex h-20 max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-12">
<a className="font-display text-xl tracking-tight font-bold flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    Vintner's
                </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-500 transition-colors" href="#">Stay</a>
<a className="hover:text-blue-500 transition-colors" href="#">Dine</a>
<a className="text-blue-600" href="#">Services</a>
</div>
</div>
<div className="flex items-center gap-6">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:search" width="18"></iconify-icon>
<span>Search</span>
</button>
<button className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-md shadow-slate-200">
                    My Account
                </button>
</div>
</div>
</nav>

<header className="pt-40 pb-20 px-6 md:px-12 max-w-screen-2xl mx-auto text-center">
<div className="animate-fade-in opacity-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Concierge &amp; Amenities
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-slate-900 tracking-tight mb-8 leading-[1.1]">
                Effortless <span className="text-slate-400">Living.</span>
</h1>
<p className="max-w-2xl mx-auto text-slate-500 text-lg font-light leading-relaxed font-pt-serif">
                From private aviation arrangements to sommelier-led cellar tours, our dedicated team ensures every moment of your stay is curated to perfection.
            </p>
</div>
</header>

<div className="px-6 md:px-12 pb-24 max-w-screen-2xl mx-auto">
<div className="relative w-full h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden bg-slate-100 shadow-sm animate-fade-in delay-100 opacity-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">Featured Service</p>
<h3 className="text-2xl font-display font-medium">In-Room Dining Experience</h3>
</div>
</div>
</div>

<section className="py-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors">
<iconify-icon icon="lucide:car" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-slate-900 mb-3">Transportation</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Private chauffeur services, airport transfers via luxury SUV, and valet parking for personal vehicles.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors" href="#">
                    Request Ride <iconify-icon className="ml-2 w-4" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors">
<iconify-icon icon="lucide:utensils" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-slate-900 mb-3">Culinary Concierge</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Reservations at Michelin-starred venues, private chef bookings, and picnic basket preparation.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors" href="#">
                    View Options <iconify-icon className="ml-2 w-4" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors">
<iconify-icon icon="lucide:shirt" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-slate-900 mb-3">Valet &amp; Laundry</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Same-day dry cleaning, shoe shine services, and unpacking/packing assistance upon request.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors" href="#">
                    Schedule <iconify-icon className="ml-2 w-4" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors">
<iconify-icon icon="lucide:wine" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-slate-900 mb-3">Sommelier Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Private tastings in our cellar, wine pairing guidance, and shipping of estate wines to your home.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors" href="#">
                    Book Tasting <iconify-icon className="ml-2 w-4" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors">
<iconify-icon icon="lucide:baby" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-slate-900 mb-3">Family Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Certified childcare, kid's activity planning, and pet-sitting services for furry companions.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors" href="#">
                    Inquire <iconify-icon className="ml-2 w-4" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors">
<iconify-icon icon="lucide:flower" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-slate-900 mb-3">Special Occasions</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Floral arrangements, room decoration, photography sessions, and event planning support.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors" href="#">
                    Plan Event <iconify-icon className="ml-2 w-4" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-b border-slate-200">
<div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2 block">Wellness</span>
<h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 tracking-tight">The Spa Menu</h2>
</div>

<div className="flex items-center gap-3">
<span className="text-sm font-medium text-slate-500">Treatments</span>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-200 transition-all duration-300 z-10 top-0 left-0" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
<span className="text-sm font-medium text-slate-900">Packages</span>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">

<div className="flex flex-col md:flex-row items-center p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<div className="w-full md:w-3/4 pr-0 md:pr-8">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-display font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Vineyard Clay Wrap</h4>
<span className="md:hidden font-semibold text-slate-900">$240</span>
</div>
<p className="text-sm text-slate-500 font-light">A detoxifying full-body wrap using mineral-rich clay harvested from our estate soils, infused with grapeseed oil.</p>
</div>
<div className="w-full md:w-1/4 mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6">
<span className="text-xs font-bold uppercase tracking-wider text-slate-400">90 Min</span>
<span className="hidden md:block font-semibold text-slate-900">$240</span>
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col md:flex-row items-center p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<div className="w-full md:w-3/4 pr-0 md:pr-8">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-display font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Deep Tissue Restoration</h4>
<span className="md:hidden font-semibold text-slate-900">$190</span>
</div>
<p className="text-sm text-slate-500 font-light">Targeted muscle relief utilizing therapeutic techniques and warm stones to release tension.</p>
</div>
<div className="w-full md:w-1/4 mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6">
<span className="text-xs font-bold uppercase tracking-wider text-slate-400">60 Min</span>
<span className="hidden md:block font-semibold text-slate-900">$190</span>
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col md:flex-row items-center p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<div className="w-full md:w-3/4 pr-0 md:pr-8">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-display font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Botanical Facial</h4>
<span className="md:hidden font-semibold text-slate-900">$210</span>
</div>
<p className="text-sm text-slate-500 font-light">Customized skincare treatment using organic botanical extracts to hydrate and revitalize.</p>
</div>
<div className="w-full md:w-1/4 mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6">
<span className="text-xs font-bold uppercase tracking-wider text-slate-400">75 Min</span>
<span className="hidden md:block font-semibold text-slate-900">$210</span>
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col md:flex-row items-center p-6 hover:bg-slate-50 transition-colors group">
<div className="w-full md:w-3/4 pr-0 md:pr-8">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-display font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Couple's Retreat</h4>
<span className="md:hidden font-semibold text-slate-900">$480</span>
</div>
<p className="text-sm text-slate-500 font-light">Private suite usage, side-by-side massages, and a sparkling wine soak.</p>
</div>
<div className="w-full md:w-1/4 mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6">
<span className="text-xs font-bold uppercase tracking-wider text-slate-400">120 Min</span>
<span className="hidden md:block font-semibold text-slate-900">$480</span>
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4">
<h2 className="text-3xl font-display font-medium text-slate-900 tracking-tight mb-6">Concierge <br/><span className="text-slate-400">Request.</span></h2>
<p className="text-slate-500 leading-relaxed mb-8 text-sm">
                    Allow us to arrange your itinerary before you arrive. Fill out the request form and our concierge team will reach out to confirm details.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-sm text-slate-600">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
</div>
<span>+1 (707) 555-0123</span>
</div>
<div className="flex items-center gap-4 text-sm text-slate-600">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
<iconify-icon icon="lucide:mail" width="14"></iconify-icon>
</div>
<span>concierge@vintnersestate.com</span>
</div>
</div>
</div>
<div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Guest Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 text-slate-900" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Confirmation Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 text-slate-900" placeholder="#VE-8821" type="text"/>
</div>
</div>
<div>
<label className="block text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Service Type</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 cursor-pointer">
<option>General Inquiry</option>
<option>Spa Reservation</option>
<option>Dining Reservation</option>
<option>Transportation Request</option>
<option>Special Occasion</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div>
<label className="block text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Details</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 text-slate-900" placeholder="Please describe your request..." rows="4"></textarea>
</div>
<div className="flex items-center gap-3">
<div className="relative w-4 h-4 flex items-center justify-center">
<input className="custom-checkbox appearance-none w-4 h-4 border border-slate-300 rounded transition-colors cursor-pointer z-10" type="checkbox"/>
<iconify-icon className="absolute text-white w-3 pointer-events-none opacity-0 transition-opacity z-0" icon="lucide:check"></iconify-icon>
</div>
<span className="text-xs text-slate-500">I agree to the privacy policy and terms of service.</span>
</div>
<div className="pt-4">
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/10 flex items-center gap-2" type="button">
                            Submit Request
                            <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-20 pb-10 px-6 md:px-12 border-t border-slate-200">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="font-display text-xl tracking-tight font-bold block mb-6" href="#">Vintner's Estate</a>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                    A place where time slows down, allowing you to reconnect with nature and yourself.
                </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-blue-500 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-blue-500 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="hover:text-blue-500 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Explore</h5>
<ul className="space-y-3 text-sm text-slate-600">
<li><a className="hover:text-blue-500 transition-colors" href="#">Accommodations</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Dining</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Wellness</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Events</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Visit</h5>
<ul className="space-y-3 text-sm text-slate-600">
<li><a className="hover:text-blue-500 transition-colors" href="#">Getting Here</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Concierge</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Gift Cards</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Weather</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4">Newsletter</h5>
<div className="flex gap-2">
<input className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="Email Address" type="email"/>
<button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors">Go</button>
</div>
</div>
</div>
<div className="max-w-screen-2xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<span>© 2023 Vintner's Estate. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
