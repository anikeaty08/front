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
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
<a className="flex items-center gap-2 text-xl text-slate-900 tracking-tight font-medium" href="#">
<span className="text-sky-600">
<svg className="lucide lucide-waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1"></path></svg>
</span>
                Metamorfosi Rentals
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-sky-600 transition-colors" href="#location">Location</a>
<a className="hover:text-sky-600 transition-colors" href="#properties">Apartments</a>
<a className="hover:text-sky-600 transition-colors" href="#amenities">Amenities</a>
<a className="hover:text-sky-600 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden sm:inline-flex bg-slate-900 text-white px-5 py-2.5 text-xs font-medium rounded-full hover:bg-sky-600 transition-colors duration-300 shadow-sm hover:shadow-md" href="#contact">
                Book Direct
            </a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599955373307-e03a9366d6d8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>

<div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-slate-900/40"></div>
<div className="relative z-10 text-center max-w-3xl px-6 fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-medium tracking-wide uppercase mb-6">
<span className="w-2 h-2 rounded-full bg-lime-400"></span> Halkidiki, Greece
            </div>
<h1 className="text-5xl md:text-7xl leading-[1.1] font-medium text-white tracking-tight mb-6">
                Your Family Home in <br/>Metamorfosi
            </h1>
<p className="text-white/90 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
                Cozy apartments steps away from the beach and pine forests. Experience the authentic Greek summer.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-sky-600 text-white px-8 py-3.5 text-sm font-medium rounded-lg hover:bg-sky-500 transition-all duration-300 shadow-lg shadow-sky-900/20" href="#contact">
                    Check Availability
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 text-sm font-medium rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300" href="https://wa.me/1234567890" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-strokeWidth="1.5"></span>
                    Chat on WhatsApp
                </a>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-white" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="space-y-8 order-2 lg:order-1">
<span className="text-sky-600 text-xs uppercase tracking-widest font-semibold block">The Location</span>
<h2 className="text-4xl md:text-5xl text-slate-900 leading-[1.1] tracking-tight font-medium">
                        Where pine forest <br/>meets the azure sea.
                    </h2>
<div className="space-y-6 text-slate-500 font-normal leading-relaxed text-lg">
<p>
                            Metamorfosi Rentals offers the perfect balance of convenience and nature. Our properties are located in the center of Metamorfosi, right next to the lush municipal park and fragrant pine forests.
                        </p>
<p>
                            Forget the car—you are just 30-100 meters from the sandy-pebble beach. Fresh bakeries, traditional taverns, and local shops are all within a short stroll from your doorstep.
                        </p>
</div>
<div className="pt-4 flex gap-6 text-sm font-medium text-slate-900">
<div className="flex items-center gap-2">
<span className="p-2 bg-sky-50 text-sky-600 rounded-full">
<span className="iconify" data-icon="lucide:map-pin" data-strokeWidth="1.5"></span>
</span>
                            Center of Village
                        </div>
<div className="flex items-center gap-2">
<span className="p-2 bg-lime-50 text-lime-600 rounded-full">
<span className="iconify" data-icon="lucide:trees" data-strokeWidth="1.5"></span>
</span>
                            Next to Park
                        </div>
</div>
</div>
<div className="relative order-1 lg:order-2">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 relative group">
<img alt="Greek Coastline" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
<div className="flex items-center gap-3 mb-2">
<span className="text-sky-500 iconify w-5 h-5" data-icon="lucide:waves" data-strokeWidth="1.5"></span>
<span className="text-sm font-semibold text-slate-900">30m from Sea</span>
</div>
<p className="text-xs text-slate-500">Walk to the beach in <br/>less than 2 minutes.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="properties">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<span className="text-lime-600 text-xs uppercase tracking-widest font-semibold block mb-4">Accommodation</span>
<h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight font-medium">Featured Properties</h2>
</div>
<p className="max-w-md text-slate-500 leading-relaxed text-sm md:text-base">
                    Choose between a garden retreat steps from the park or a sea-view apartment in the heart of the village.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-[16/10] overflow-hidden relative">
<img alt="Juliya House Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-slate-900 rounded-full">
                            Ground Floor
                        </div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-medium text-slate-900">Juliya House</h3>
<span className="flex items-center gap-1 text-sm text-slate-500">
<span className="iconify" data-icon="lucide:users" data-strokeWidth="1.5"></span> 4-5 Guests
                            </span>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Located amidst greenery near the park. Ideal for families seeking easy access and quiet. Apartments No. 2 &amp; 3 offer direct garden access.
                        </p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-sky-500" data-icon="lucide:bed-double" data-strokeWidth="1.5"></span> 2 Bedrooms
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-sky-500" data-icon="lucide:refrigerator" data-strokeWidth="1.5"></span> Full Kitchen
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-sky-500" data-icon="lucide:flower-2" data-strokeWidth="1.5"></span> Garden View
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-sky-500" data-icon="lucide:washing-machine" data-strokeWidth="1.5"></span> Washing Machine
                            </div>
</div>
<a className="inline-flex w-full items-center justify-center py-3 px-4 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors" href="#contact">
                            Request Price
                        </a>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-[16/10] overflow-hidden relative">
<img alt="Dimitris House Balcony" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-sky-500/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white rounded-full">
                            Sea View
                        </div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-medium text-slate-900">Dimitris House</h3>
<span className="flex items-center gap-1 text-sm text-slate-500">
<span className="iconify" data-icon="lucide:users" data-strokeWidth="1.5"></span> Up to 5 Adults
                            </span>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Located in the heart of the village on the 2nd floor. Just 30m from the beach, featuring a large covered balcony perfect for evening relaxation.
                        </p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-sky-500" data-icon="lucide:bed-double" data-strokeWidth="1.5"></span> 2 Bedrooms
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-sky-500" data-icon="lucide:utensils-crossed" data-strokeWidth="1.5"></span> Separate Kitchen
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-sky-500" data-icon="lucide:waves" data-strokeWidth="1.5"></span> Sea View Balcony
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-sky-500" data-icon="lucide:bath" data-strokeWidth="1.5"></span> Bathtub
                            </div>
</div>
<a className="inline-flex w-full items-center justify-center py-3 px-4 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors" href="#contact">
                            Request Price
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="amenities">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-sky-600 text-xs uppercase tracking-widest font-semibold block mb-4">Everything you need</span>
<h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight font-medium mb-6">
                    Designed for comfort.
                </h2>
<p className="text-slate-500 font-light leading-relaxed">
                    We provide all the essentials for a carefree family holiday, so you can pack light and enjoy Metamorfosi.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
<span className="iconify" data-icon="lucide:wifi" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h4 className="font-medium text-slate-900 mb-1">Free WiFi</h4>
<p className="text-xs text-slate-500">Stay connected</p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
<span className="iconify" data-icon="lucide:snowflake" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h4 className="font-medium text-slate-900 mb-1">Air Conditioning</h4>
<p className="text-xs text-slate-500">Cool &amp; Comfortable</p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
<span className="iconify" data-icon="lucide:chef-hat" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h4 className="font-medium text-slate-900 mb-1">Equipped Kitchen</h4>
<p className="text-xs text-slate-500">Cook family meals</p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
<span className="iconify" data-icon="lucide:baby" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h4 className="font-medium text-slate-900 mb-1">Family Friendly</h4>
<p className="text-xs text-slate-500">Safe for kids</p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h4 className="font-medium text-slate-900 mb-1">Mosquito Nets</h4>
<p className="text-xs text-slate-500">Peaceful sleep</p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
<span className="iconify" data-icon="lucide:washing-machine" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h4 className="font-medium text-slate-900 mb-1">Washing Machine</h4>
<p className="text-xs text-slate-500">Laundry available</p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
<span className="iconify" data-icon="lucide:footprints" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h4 className="font-medium text-slate-900 mb-1">Beach Access</h4>
<p className="text-xs text-slate-500">Walking distance</p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-lime-50 border border-lime-100">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-lime-600 mb-4">
<span className="iconify" data-icon="lucide:car" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h4 className="font-medium text-slate-900 mb-1">Parking</h4>
<p className="text-xs text-slate-500">Public shade parking</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white border-t border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/3">
<span className="text-sky-400 text-xs uppercase tracking-widest font-semibold block mb-4">Reservation</span>
<h2 className="text-4xl text-white leading-[1.1] tracking-tight font-medium mb-6">
                        Ready for your <br/>Greek getaway?
                    </h2>
<p className="text-slate-400 font-light leading-relaxed mb-8">
                        Book direct for the best rates. Availability is limited during peak summer months. 
                    </p>
<div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
<h4 className="text-sm font-semibold text-white mb-2">Price on Request</h4>
<p className="text-xs text-slate-400 mb-4">Rates vary by season and duration of stay.</p>
<a className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition-colors" href="https://wa.me/1234567890" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="18"></span>
                            Contact via WhatsApp
                        </a>
</div>
</div>

<div className="lg:w-2/3 bg-white text-slate-900 p-8 md:p-10 rounded-3xl">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Check-in</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Check-out</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" placeholder="I am interested in Juliya House for 2 adults and 2 children..." rows="4"></textarea>
</div>
<button className="w-full bg-sky-600 text-white font-medium py-4 rounded-lg hover:bg-sky-500 transition-colors shadow-lg shadow-sky-900/10" type="button">
                            Check Availability
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<h3 className="text-xl font-medium mb-4 tracking-tight text-slate-900">Metamorfosi Rentals</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
                        Family-owned vacation homes in the beautiful village of Metamorfosi, Halkidiki. Experience authentic Greek hospitality.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
</div>
</div>
<div className="col-span-1">
<h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-slate-900">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 text-sky-600" data-icon="lucide:map-pin" data-width="16"></span>
                            Metamorfosi, Sithonia<br/>Halkidiki, Greece
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-sky-600" data-icon="lucide:phone" data-width="16"></span>
                            +30 690 000 0000
                        </li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-slate-900">Site</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-sky-600 transition-colors" href="#location">Location</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#properties">Properties</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#amenities">Amenities</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-xs">© 2024 Metamorfosi Rentals. All rights reserved.</p>
<div className="flex gap-6 text-slate-400 text-xs">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
