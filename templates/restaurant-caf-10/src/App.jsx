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
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
}
}
}
}
}
function toggleModal(modalID) {
const modal = document.getElementById(modalID);
const backdrop = document.getElementById(modalID + '-backdrop');
if (modal.classList.contains('hidden')) {
modal.classList.remove('hidden');
backdrop.classList.remove('hidden');
document.body.style.overflow = 'hidden'; // Prevent scrolling
} else {
modal.classList.add('hidden');
backdrop.classList.add('hidden');
document.body.style.overflow = ''; // Restore scrolling
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
      

<nav className="fixed top-0 w-full z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase text-stone-900 flex items-center gap-2" href="#">
                Café Monse
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#story">Story</a>
<a className="hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="hover:text-stone-900 transition-colors" href="#details">Details</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-xs font-medium text-stone-600 px-4 py-2 hover:bg-stone-100 rounded-full transition-colors border border-transparent hover:border-stone-200" href="tel:+521234567890">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
                    Call Us
                </a>
<button className="text-xs font-medium bg-stone-900 text-stone-50 px-4 py-2 rounded-full hover:bg-stone-800 transition-all shadow-sm flex items-center gap-2 group" onclick="toggleModal('reservation-modal')">
<span>Reserve Table</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full w-fit">
<iconify-icon className="text-orange-500 text-sm" icon="lucide:star" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-orange-900">4.9 Star Rating (27 Reviews)</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.1]">
                    Restaurant <br/>
<span className="serif italic text-stone-600 font-normal">Café Monse</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 max-w-md leading-relaxed">
                    Where great coffee and homemade flavors bring people together. Open 24 hours.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="inline-flex items-center justify-center bg-stone-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-800 transition-all shadow-sm gap-2" onclick="toggleModal('reservation-modal')">
<iconify-icon icon="lucide:calendar-check" width="16"></iconify-icon>
                        Reserve Now
                    </button>
<a className="inline-flex items-center justify-center bg-white border border-stone-200 text-stone-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-50 hover:border-stone-300 transition-all" href="#menu">
                        View Menu
                    </a>
</div>
</div>

<div className="relative h-96 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
<img alt="Cozy Cafe Interior" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/10"></div>
</div>
</div>

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10"></div>
</header>

<div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50 hidden transition-opacity" id="reservation-modal-backdrop" onclick="toggleModal('reservation-modal')"></div>
<div className="fixed inset-0 z-[60] flex items-center justify-center p-4 hidden pointer-events-none" id="reservation-modal">
<div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto fade-in flex flex-col max-h-[90vh]">

<div className="px-6 py-4 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
<div>
<h3 className="text-lg font-semibold text-stone-900">Book a Table</h3>
<p className="text-xs text-stone-500">Instant confirmation via email</p>
</div>
<button className="text-stone-400 hover:text-stone-900 transition-colors" onclick="toggleModal('reservation-modal')">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>

<div className="p-6 overflow-y-auto modal-scroll">
<form className="space-y-4" onsubmit="event.preventDefault(); toggleModal('reservation-modal'); alert('Reservation request sent!');">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700">Date</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" icon="lucide:calendar" width="14"></iconify-icon>
<input className="w-full text-sm pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all" required="" type="date"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700">Time</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" icon="lucide:clock" width="14"></iconify-icon>
<select className="w-full text-sm pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all appearance-none" required="">
<option>08:00 AM</option>
<option>09:00 AM</option>
<option>10:00 AM</option>
<option>01:00 PM</option>
<option>02:00 PM</option>
<option>07:00 PM</option>
<option>08:00 PM</option>
<option>09:00 PM</option>
</select>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700">Guests</label>
<div className="grid grid-cols-4 gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="guests" type="radio" value="1"/>
<div className="text-sm text-center py-2 border border-stone-200 rounded-md peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 hover:bg-stone-50 transition-all">1</div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="guests" type="radio" value="2"/>
<div className="text-sm text-center py-2 border border-stone-200 rounded-md peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 hover:bg-stone-50 transition-all">2</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="guests" type="radio" value="3"/>
<div className="text-sm text-center py-2 border border-stone-200 rounded-md peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 hover:bg-stone-50 transition-all">3</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="guests" type="radio" value="4+"/>
<div className="text-sm text-center py-2 border border-stone-200 rounded-md peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 hover:bg-stone-50 transition-all">4+</div>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700">Full Name</label>
<input className="w-full text-sm px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700">Phone Number</label>
<input className="w-full text-sm px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all" placeholder="+52 ..." required="" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700">Special Requests</label>
<textarea className="w-full text-sm px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all resize-none" placeholder="Allergies, high chair needed, etc." rows="2"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-stone-900 text-white font-medium py-2.5 rounded-lg text-sm hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/20" type="submit">
                            Confirm Reservation
                        </button>
</div>
</form>
</div>
</div>
</div>

<section className="py-20 bg-white border-y border-stone-100" id="story">
<div className="max-w-3xl mx-auto px-6 text-center space-y-8">
<iconify-icon className="text-3xl text-stone-400" icon="lucide:coffee" strokeWidth="1.5"></iconify-icon>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900">More than just a café—it's home.</h2>
<div className="prose prose-stone prose-lg mx-auto text-stone-500 leading-relaxed">
<p>
                    Restaurant Café Monse was born from a simple passion: to create a space where good coffee and comforting, homemade desserts could be enjoyed without rushing. We believe in the power of the table—a place where the community gathers, stories are shared, and the noise of the world fades away.
                </p>
<p className="mt-4">
                    Whether you are an early riser looking for breakfast or a night owl needing a safe, warm haven, our doors are open 24 hours a day. With pride in our friendly service and quality ingredients, we invite you to relax and enjoy a meal that feels like it was made just for you.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-stone-100">
<div className="text-center">
<span className="block text-sm font-medium text-stone-900">Atmosphere</span>
<span className="text-xs text-stone-500">Cozy &amp; Trendy</span>
</div>
<div className="text-center">
<span className="block text-sm font-medium text-stone-900">Service</span>
<span className="text-xs text-stone-500">Table &amp; Takeaway</span>
</div>
<div className="text-center">
<span className="block text-sm font-medium text-stone-900">Audience</span>
<span className="text-xs text-stone-500">Locals &amp; Travelers</span>
</div>
<div className="text-center">
<span className="block text-sm font-medium text-stone-900">Hours</span>
<span className="text-xs text-stone-500">Open 24/7</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-stone-100 rounded-xl p-8 space-y-4 hover:bg-stone-200/50 transition-colors">
<div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
<iconify-icon className="text-stone-700" icon="lucide:cup-soda" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900">Coffee &amp; Desserts</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Expertly brewed coffee specialties and homemade sweet treats perfect for any time of day.
                    </p>
</div>

<div className="bg-stone-100 rounded-xl p-8 space-y-4 hover:bg-stone-200/50 transition-colors">
<div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
<iconify-icon className="text-stone-700" icon="lucide:users" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900">Family Friendly</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        A welcoming environment for groups, solo diners, and families. Spacious and comfortable.
                    </p>
</div>

<div className="bg-stone-100 rounded-xl p-8 space-y-4 hover:bg-stone-200/50 transition-colors">
<div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
<iconify-icon className="text-stone-700" icon="lucide:clock" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900">Always Open</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        From breakfast to late-night cravings, we are here 24 hours a day to serve you.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-900 text-stone-100" id="menu">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Our Menu</h2>
<p className="text-stone-400 max-w-sm text-sm">Comfort food, small plates, and artisanal coffee.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full border border-stone-700 text-xs text-stone-300">Breakfast</span>
<span className="px-3 py-1 rounded-full border border-stone-700 text-xs text-stone-300">Lunch</span>
<span className="px-3 py-1 rounded-full border border-stone-700 text-xs text-stone-300">Dinner</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="grid grid-cols-2 gap-4 h-full">
<div className="overflow-hidden rounded-lg">
<img alt="Coffee" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="overflow-hidden rounded-lg mt-8">
<img alt="Dessert" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="overflow-hidden rounded-lg -mt-8">
<img alt="Quick Bites" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="overflow-hidden rounded-lg">
<img alt="Coffee Art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="flex flex-col justify-center space-y-8">
<div className="space-y-2 border-b border-stone-800 pb-6">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="lucide:coffee"></iconify-icon> Coffee Specialties
                        </h3>
<p className="text-sm text-stone-400">Hand-crafted lattes, espressos, and cold brews using premium beans.</p>
</div>
<div className="space-y-2 border-b border-stone-800 pb-6">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="lucide:cake-slice"></iconify-icon> Homemade Desserts
                        </h3>
<p className="text-sm text-stone-400">Freshly baked cakes, pastries, and sweet treats made daily in-house.</p>
</div>
<div className="space-y-2 border-b border-stone-800 pb-6">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="lucide:utensils"></iconify-icon> Quick Bites &amp; Small Plates
                        </h3>
<p className="text-sm text-stone-400">Savory options ideal for a quick lunch or a relaxed dinner.</p>
</div>
<div className="pt-2">
<p className="text-xs text-stone-500 uppercase tracking-widest">Average Price</p>
<p className="text-xl text-white font-serif italic">$100 – $200 MXN <span className="text-sm font-sans not-italic text-stone-400">/ person</span></p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-stone-50" id="details">
<div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">

<div className="lg:col-span-2 space-y-10">
<div>
<h3 className="text-lg font-semibold text-stone-900 mb-6">Details &amp; Amenities</h3>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-1" icon="lucide:map-pin" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-stone-900">Address</p>
<p className="text-sm text-stone-500">RG57+J5, 78887 Pozas de Santa Ana, S.L.P., Mexico</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-1" icon="lucide:clock" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-stone-900">Hours</p>
<p className="text-sm text-stone-500">Open 24 Hours, Daily</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-1" icon="lucide:credit-card" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-stone-900">Payments</p>
<p className="text-sm text-stone-500">Cash &amp; Debit Cards Accepted</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-1" icon="lucide:car" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-stone-900">Parking</p>
<p className="text-sm text-stone-500">Free parking lot &amp; street parking available.</p>
</div>
</li>
</ul>
</div>

<div className="p-6 bg-white rounded-lg border border-stone-200 shadow-sm">
<div className="flex items-center gap-1 text-orange-400 mb-2">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<blockquote className="text-sm text-stone-600 mb-4">
                        "A hidden gem in Santa Ana! The atmosphere is incredibly cozy and the coffee is top tier. Love that it's open late."
                    </blockquote>
<a className="text-xs font-medium text-stone-900 underline decoration-stone-300 hover:decoration-stone-900 underline-offset-4" href="https://facebook.com" target="_blank">
                        Visit us on Facebook
                    </a>
</div>
</div>

<div className="lg:col-span-3 h-96 lg:h-auto min-h-[400px] rounded-xl overflow-hidden shadow-md border border-stone-200 map-filter relative group" id="location">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.123456789!2d-101.0!3d22.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUkc1NytKNSwgNzg4ODcgUG96YXMgZGUgU2FudGEgQW5hLCBTLkwuUC4sIE1leGljbw!5e0!3m2!1sen!2smx!4v1600000000000!5m2!1sen!2smx" style={{border: '0'}} title="Google Map Location" width="100%">
</iframe>
<div className="absolute bottom-6 left-6 z-10">
<a className="bg-stone-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-lg hover:bg-stone-800 transition-colors flex items-center gap-2" href="https://maps.google.com" target="_blank">
<iconify-icon icon="lucide:navigation" width="16"></iconify-icon>
                        Navigate
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 text-stone-400 py-12 px-6 border-t border-stone-900">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h4 className="text-white font-semibold tracking-tight text-lg mb-1">Restaurant Café Monse</h4>
<p className="text-sm">Pozas de Santa Ana, San Luis Potosí</p>
</div>
<div className="flex items-center gap-2 text-sm bg-stone-900 py-1 px-3 rounded-full border border-stone-800">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-stone-300">Open 24 Hours</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
<span className="sr-only">Facebook</span>
</a>
</div>
</div>
<div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-stone-900 text-center md:text-left text-xs text-stone-600">
            © 2023 Restaurant Café Monse. All rights reserved.
        </div>
</footer>

    </>
  );
}
