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
mata: {
green: '#3e4c28', // Derived from background
olive: '#5e6e40', // Lighter green
orange: '#d9853b', // Button color
cream: '#f5f5f0', // Content bg equivalent
stone: '#1c1917',
}
}
}
}
}



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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-mata-green" href="#">
                Penzion MATA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-mata-orange transition-colors" href="#rooms">Rooms</a>
<a className="hover:text-mata-orange transition-colors" href="#amenities">Amenities</a>
<a className="hover:text-mata-orange transition-colors" href="#location">Location</a>
<a className="hover:text-mata-orange transition-colors" href="#contact">Contact</a>
</div>
<a className="bg-mata-orange hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm" href="#contact">
                Book your stay
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mata-green/10 text-mata-green text-xs font-medium uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-mata-green"></span>
                    Open year-round
                </div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-mata-green leading-[1.1]">
                    A quiet haven in Zlín – Malenovice.
                </h1>
<p className="text-xl text-stone-600 max-w-lg leading-relaxed">
                    Experience genuine Czech hospitality in a peaceful setting near the castle. Perfect for business travelers, couples, and families seeking comfort and convenience.
                </p>
<ul className="space-y-3 text-stone-700">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-mata-orange" data-lucide="check"></i>
<span>Free private parking on-site</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-mata-orange" data-lucide="check"></i>
<span>5 minutes drive to Zlín city center</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-mata-orange" data-lucide="check"></i>
<span>Private restaurant &amp; event space</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center px-6 py-3.5 bg-mata-green text-white font-medium rounded-lg hover:bg-mata-olive transition-colors shadow-sm w-full sm:w-auto" href="#contact">
                        Check availability
                    </a>
<a className="inline-flex justify-center items-center px-6 py-3.5 bg-white border border-stone-200 text-stone-700 font-medium rounded-lg hover:bg-stone-50 transition-colors w-full sm:w-auto" href="tel:+420725720497">
<i className="w-4 h-4 mr-2" data-lucide="phone"></i>
                        Call us
                    </a>
</div>
</div>

<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 shadow-xl ring-1 ring-stone-900/5">

<img alt="Comfortable room interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -z-10 top-10 -right-10 w-full h-full bg-mata-green/5 rounded-3xl"></div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100">
<div className="max-w-3xl mx-auto px-6 text-center space-y-6">
<h2 className="text-3xl font-semibold tracking-tight text-mata-green">Welcome to Penzion MATA</h2>
<p className="text-lg text-stone-600 leading-relaxed">
                Located in the quiet district of Zlín – Malenovice, our family-run guesthouse offers a respite from the city noise while keeping you connected. Whether you are visiting the nearby Gothic castle, attending a business meeting in Zlín, or simply passing through, we provide a clean, warm, and trustworthy environment for your stay.
            </p>
</div>
</section>

<section className="py-24 bg-stone-50" id="rooms">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900">Accommodation</h2>
<p className="text-stone-500 mt-2 text-lg">Clean, practical, and fully equipped.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-mata-orange/30 transition-all hover:shadow-lg">
<div className="aspect-video bg-stone-100 overflow-hidden relative">
<img alt="Double Room" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-stone-900 mb-2">Double Room</h3>
<p className="text-stone-600 mb-6">Comfortable accommodation ideal for couples or business travelers.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600">
<i className="w-4 h-4 text-mata-orange" data-lucide="bath"></i> Private bathroom
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<i className="w-4 h-4 text-mata-orange" data-lucide="tv"></i> TV included
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<i className="w-4 h-4 text-mata-orange" data-lucide="wifi"></i> Free Wi-Fi
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<i className="w-4 h-4 text-mata-orange" data-lucide="snowflake"></i> Refrigerator
                            </li>
</ul>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-mata-orange/30 transition-all hover:shadow-lg">
<div className="aspect-video bg-stone-100 overflow-hidden relative">
<img alt="Apartment" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-stone-900 mb-2">Apartment Suite</h3>
<p className="text-stone-600 mb-6">More space for small families or longer stays. Includes a fixed extra bed option.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600">
<i className="w-4 h-4 text-mata-orange" data-lucide="users"></i> Sleeps up to 3 guests
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<i className="w-4 h-4 text-mata-orange" data-lucide="bath"></i> Private bathroom
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<i className="w-4 h-4 text-mata-orange" data-lucide="wifi"></i> Free Wi-Fi
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<i className="w-4 h-4 text-mata-orange" data-lucide="layout-grid"></i> Enhanced living space
                            </li>
</ul>
</div>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-stone-500 text-sm">Long-term stay discounts may be available upon agreement.</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="amenities">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-mata-green">Everything you need</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-4 p-6 bg-stone-50 rounded-xl">
<i className="w-8 h-8 text-mata-orange stroke-1.5" data-lucide="car"></i>
<h3 className="font-medium text-stone-900">Free Parking</h3>
<p className="text-sm text-stone-500">Secure parking directly in front of the guesthouse.</p>
</div>
<div className="flex flex-col gap-4 p-6 bg-stone-50 rounded-xl">
<i className="w-8 h-8 text-mata-orange stroke-1.5" data-lucide="utensils"></i>
<h3 className="font-medium text-stone-900">On-site Restaurant</h3>
<p className="text-sm text-stone-500">Convenient dining available without leaving the property.</p>
</div>
<div className="flex flex-col gap-4 p-6 bg-stone-50 rounded-xl">
<i className="w-8 h-8 text-mata-orange stroke-1.5" data-lucide="trophy"></i>
<h3 className="font-medium text-stone-900">Tennis Court</h3>
<p className="text-sm text-stone-500">Active relaxation available on our private court.</p>
</div>
<div className="flex flex-col gap-4 p-6 bg-stone-50 rounded-xl">
<i className="w-8 h-8 text-mata-orange stroke-1.5" data-lucide="party-popper"></i>
<h3 className="font-medium text-stone-900">Events &amp; Trainings</h3>
<p className="text-sm text-stone-500">Facilities suitable for celebrations and small company events.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="location">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
<div className="space-y-8">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900">Location &amp; Transport</h2>
<p className="text-lg text-stone-600">
                    We are situated in a quiet residential area, yet incredibly connected. The historic Malenovice Castle is just a short walk away.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-mata-orange/10 flex items-center justify-center text-mata-orange">
<i className="w-5 h-5" data-lucide="bus"></i>
</div>
<div>
<h4 className="font-medium text-stone-900">Public Transport</h4>
<p className="text-stone-600 mt-1">Train stop: ~100m. Bus stop: ~150m. Easy access to Zlín without a car.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-mata-orange/10 flex items-center justify-center text-mata-orange">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-medium text-stone-900">Nearby Highlights</h4>
<ul className="text-stone-600 mt-1 space-y-1 text-sm">
<li>• Malenovice Castle (~500m)</li>
<li>• Zlín "Skyscraper" Baťa Building (~4.5km)</li>
<li>• Shoe Museum (~4.8km)</li>
</ul>
</div>
</div>
</div>
</div>
<div className="bg-stone-200 rounded-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Zl%C3%ADn%2C_Malenovice_-_hrad_%2801%29.jpg/640px-Zl%C3%ADn%2C_Malenovice_-_hrad_%2801%29.jpg')] bg-cover bg-center"></div>
<div className="relative bg-white p-6 rounded-lg shadow-xl max-w-xs text-center">
<p className="font-semibold text-stone-900">Penzion MATA</p>
<p className="text-sm text-stone-500 mt-1">Ireny Veselkové 270<br/>763 02 Zlín – Malenovice</p>
<a className="text-xs text-mata-orange font-medium mt-3 inline-block hover:underline" href="https://www.google.com/maps/search/?api=1&amp;query=49.208426,17.599219" target="_blank">View on Google Maps →</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-12">What our guests say</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-6 rounded-2xl bg-stone-50 text-left">
<div className="flex text-mata-orange mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-stone-700 italic">"The rooms were impeccably clean and the host was incredibly friendly. It's a great value stay near Zlín."</p>
</div>
<div className="p-6 rounded-2xl bg-stone-50 text-left">
<div className="flex text-mata-orange mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-stone-700 italic">"Very practical location with the train stop so close. The private parking was a huge bonus for us."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-10">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="bg-white p-6 rounded-xl border border-stone-200">
<h3 className="font-medium text-stone-900 mb-2">What are the check-in and check-out times?</h3>
<p className="text-stone-600 text-sm">Check-in is available from 14:00. Check-out is strictly by 10:00 to allow us to prepare for the next guests.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200">
<h3 className="font-medium text-stone-900 mb-2">Are pets allowed?</h3>
<p className="text-stone-600 text-sm">We maintain an allergen-free environment, so pets are unfortunately not allowed.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200">
<h3 className="font-medium text-stone-900 mb-2">Which payment cards do you accept?</h3>
<p className="text-stone-600 text-sm">We accept VISA, VISA Electron, MasterCard, MasterCard Electron, Diners Club, and JCB.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200">
<h3 className="font-medium text-stone-900 mb-2">How do I book?</h3>
<p className="text-stone-600 text-sm">The best way is to call us directly or send an email to confirm availability for your dates.</p>
</div>
</div>
</div>
</section>

<section className="bg-mata-green text-mata-cream py-24" id="contact">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl font-semibold tracking-tight mb-6">Ready to visit Zlín?</h2>
<p className="text-mata-cream/80 text-lg mb-8 max-w-md">
                    Contact us to book your room or ask any questions about your stay. We look forward to welcoming you.
                </p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-xl font-medium hover:text-white transition-colors" href="tel:+420725720497">
<i className="w-6 h-6 text-mata-orange" data-lucide="phone"></i>
                        +420 725 720 497
                    </a>
<a className="flex items-center gap-4 text-xl font-medium hover:text-white transition-colors" href="mailto:penzionmata@seznam.cz">
<i className="w-6 h-6 text-mata-orange" data-lucide="mail"></i>
                        penzionmata@seznam.cz
                    </a>
<div className="flex items-start gap-4 text-lg text-mata-cream/80">
<i className="w-6 h-6 text-mata-orange mt-1" data-lucide="map-pin"></i>
<span>
                            Ireny Veselkové 270<br/>
                            763 02 Zlín – Malenovice<br/>
                            Czech Republic
                        </span>
</div>
</div>
<div className="mt-12 pt-12 border-t border-mata-cream/10 text-sm text-mata-cream/50">
<p>© 2024 Penzion MATA. All rights reserved.</p>
<p className="mt-2">GPS: 49°12'30.336"N, 17°35'57.191"E</p>
</div>
</div>
<div className="bg-mata-olive/20 p-8 rounded-2xl border border-mata-cream/10 h-fit">
<h3 className="text-xl font-semibold mb-6">Reservation Inquiry</h3>
<p className="text-mata-cream/70 mb-6 text-sm">Alternative contact number: <span className="text-white">+420 577 102 850</span></p>
<div className="space-y-4">
<p className="text-sm text-mata-cream/70">Please call or email us directly for the fastest reservation confirmation.</p>
<a className="block w-full text-center py-4 bg-mata-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors" href="mailto:penzionmata@seznam.cz?subject=Booking Inquiry">
                        Send Email Inquiry
                    </a>
</div>
</div>
</div>
</section>




    </>
  );
}
