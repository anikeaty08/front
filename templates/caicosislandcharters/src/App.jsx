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
      

<nav className="fixed top-0 z-50 w-full glass border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="bg-slate-900 text-white p-1 rounded-md group-hover:bg-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">CAICOS<span className="text-slate-400 font-medium">CHARTERS</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#tours">Tours</a>
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#process">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#location">Location</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-lg shadow-slate-900/10 items-center gap-2" href="#book">
                    Book Now <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white"></div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-70"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="fade-in-up max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Accepting bookings for 2024 Season
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                        Explore the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Unseen Waters.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-md">
                        Premium private boat charters in Turks &amp; Caicos. Experience Grace Bay, hidden reefs, and sunset horizons in unparalleled comfort.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10">
                            View All Tours <i className="w-4 h-4" data-lucide="compass"></i>
</button>
<button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                            Contact Crew
                        </button>
</div>
<div className="mt-10 flex items-center gap-4 text-xs font-medium text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<p>Trusted by 500+ travelers this month</p>
</div>
</div>
<div className="fade-in-up delay-200 relative lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
<img alt="Turks and Caicos Ocean" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-sm font-medium opacity-90 mb-1">Grace Bay</p>
<p className="text-2xl font-semibold tracking-tight">The Crystal Blue</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Why Sail With Us?</h2>
<p className="text-slate-500">We don't just rent boats; we curate experiences tailored to your desires on the open water.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<i className="w-5 h-5" data-lucide="anchor"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Modern Fleet</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our boats are maintained to the highest safety and luxury standards, ensuring a smooth ride.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Expert Local Crew</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our captains and guides are locals who know every hidden gem, reef, and secluded beach.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<i className="w-5 h-5" data-lucide="glass-water"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">All-Inclusive</h3>
<p className="text-sm text-slate-500 leading-relaxed">Snorkel gear, gourmet snacks, and premium beverages are included in every charter.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="tours">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-2">Curated Tours</h2>
<p className="text-slate-500">Choose your perfect day on the water.</p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                    See full schedule <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Full Day" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1590523741831-ab7f0b1f794d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-2 py-1 rounded">
                            MOST POPULAR
                        </div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold text-slate-900">Full Day Adventure</h3>
<div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
<i className="w-3 h-3" data-lucide="clock"></i> 7 Hours
                                </div>
</div>
<span className="text-lg font-bold text-slate-900">$1,800</span>
</div>
<ul className="space-y-2 mb-6 flex-grow">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Beach BBQ Lunch
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Snorkeling &amp; Gear
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Iguana Island
                            </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors">
                            View Details
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Half Day" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold text-slate-900">Half Day Snorkel</h3>
<div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
<i className="w-3 h-3" data-lucide="clock"></i> 4 Hours
                                </div>
</div>
<span className="text-lg font-bold text-slate-900">$1,100</span>
</div>
<ul className="space-y-2 mb-6 flex-grow">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Barrier Reef
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Drinks &amp; Fruit
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Flexible Timing
                            </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors">
                            View Details
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Sunset" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold text-slate-900">Sunset Cruise</h3>
<div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
<i className="w-3 h-3" data-lucide="clock"></i> 2.5 Hours
                                </div>
</div>
<span className="text-lg font-bold text-slate-900">$900</span>
</div>
<ul className="space-y-2 mb-6 flex-grow">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Champagne Toast
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Gourmet Appetizers
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Romantic Setting
                            </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors">
                            View Details
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">How it works</h2>
<p className="text-slate-500 max-w-xl">Booking your private charter is simple and transparent.</p>
</div>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block z-0"></div>
<div className="grid md:grid-cols-4 gap-8 relative z-10">

<div className="bg-white p-6 rounded-xl border border-slate-200 text-center md:text-left">
<div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm mb-4 mx-auto md:mx-0">1</div>
<h4 className="font-semibold text-slate-900 mb-2">Select Your Tour</h4>
<p className="text-xs text-slate-500">Browse our curated experiences or request a custom itinerary.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 text-center md:text-left">
<div className="w-8 h-8 bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm mb-4 mx-auto md:mx-0">2</div>
<h4 className="font-semibold text-slate-900 mb-2">Pick a Date</h4>
<p className="text-xs text-slate-500">Our live calendar shows up-to-date availability for all vessels.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 text-center md:text-left">
<div className="w-8 h-8 bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm mb-4 mx-auto md:mx-0">3</div>
<h4 className="font-semibold text-slate-900 mb-2">Confirm Details</h4>
<p className="text-xs text-slate-500">Secure your booking with a deposit. We accept all major cards.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 text-center md:text-left">
<div className="w-8 h-8 bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm mb-4 mx-auto md:mx-0">4</div>
<h4 className="font-semibold text-slate-900 mb-2">Set Sail</h4>
<p className="text-xs text-slate-500">Meet us at the marina. We handle the gear, food, and fun.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative bg-slate-100 rounded-3xl overflow-hidden aspect-square lg:aspect-[4/3]">

<div className="absolute inset-0 bg-blue-50 opacity-50"></div>

<svg className="w-full h-full opacity-30" viewbox="0 0 400 300">
<path d="M50,150 Q150,50 250,150 T450,150" fill="none" stroke="#3b82f6" strokeWidth="2"></path>
<circle cx="250" cy="150" fill="#ef4444" r="4"></circle>
<circle cx="250" cy="150" fill="#ef4444" fillOpacity="0.2" r="15">
<animate attributename="r" dur="1.5s" from="10" repeatcount="indefinite" to="25"></animate>
<animate attributename="opacity" dur="1.5s" from="0.4" repeatcount="indefinite" to="0"></animate>
</circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white p-5 rounded-2xl shadow-xl max-w-xs">
<div className="flex items-center gap-3 mb-3">
<div className="bg-blue-100 p-2 rounded-full text-blue-600">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-xs font-bold text-slate-900 uppercase">Meeting Point</p>
<p className="text-xs text-slate-500">Blue Haven Marina, Leeward</p>
</div>
</div>
<div className="h-1 w-full bg-slate-100 rounded-full mb-3 overflow-hidden">
<div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
</div>
<p className="text-[10px] text-slate-400">15 min from most Grace Bay resorts.</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Located in the Heart of Paradise</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                        We operate out of the pristine Blue Haven Marina in the Leeward Settlement. This strategic location gives us immediate access to the cays, keeping travel time short and exploration time long.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex gap-4">
<i className="w-5 h-5 text-slate-400 mt-1" data-lucide="car"></i>
<div>
<h4 className="text-sm font-semibold text-slate-900">Complimentary Transport</h4>
<p className="text-sm text-slate-500">We arrange pick-up and drop-off from any major resort in Grace Bay.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-5 h-5 text-slate-400 mt-1" data-lucide="coffee"></i>
<div>
<h4 className="text-sm font-semibold text-slate-900">Pre-Departure Lounge</h4>
<p className="text-sm text-slate-500">Arrive early and enjoy a coffee or drink at the marina market.</p>
</div>
</div>
</div>
<a className="text-blue-600 font-medium text-sm hover:underline" href="#">Get Directions →</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Traveler Stories</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Highlight of our trip! Captain James was amazing with the kids, and the beach BBQ was better than our hotel food. Unforgettable."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">S</div>
<div>
<p className="text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-slate-500">New York, USA</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"We booked the sunset cruise for our anniversary. The boat was pristine and the crew was incredibly attentive but gave us privacy."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">M</div>
<div>
<p className="text-sm font-medium text-white">Mark &amp; Lisa</p>
<p className="text-xs text-slate-500">London, UK</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"The snorkeling spots they took us to were untouched. We saw turtles, rays, and sharks. Highly professional operation."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-xs font-bold">D</div>
<div>
<p className="text-sm font-medium text-white">David Chen</p>
<p className="text-xs text-slate-500">Toronto, CA</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Ready to get your feet wet?</h2>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">Availability for the upcoming season is limited. Reserve your private charter today and pay later.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-blue-600/20 text-lg">
                    Book Your Adventure
                </button>
<button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-medium transition-all text-lg">
                    Download Brochure
                </button>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-slate-900" data-lucide="waves"></i>
<span className="text-lg font-bold tracking-tight text-slate-900">CAICOS<span className="text-slate-400 font-medium">CHARTERS</span></span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Providing luxury private boat charters in the Turks and Caicos Islands since 2010.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Explore</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Our Fleet</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Destinations</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Special Events</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Stay Updated</h4>
<form className="flex gap-2">
<input className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Email address" type="email"/>
<button className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800 transition-colors" type="button">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Caicos Island Charters. All rights reserved.</p>
<div className="flex gap-6 text-slate-400">
<i className="w-4 h-4 hover:text-slate-900 cursor-pointer transition-colors" data-lucide="instagram"></i>
<i className="w-4 h-4 hover:text-slate-900 cursor-pointer transition-colors" data-lucide="facebook"></i>
<i className="w-4 h-4 hover:text-slate-900 cursor-pointer transition-colors" data-lucide="twitter"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
