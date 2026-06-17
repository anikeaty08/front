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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-b-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:utensils-crossed" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m16 2l-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8m-7 7L3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0zm0 0l7 7m-19.9-.2l6.4-6.3M19 5l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-lg font-medium text-white tracking-tight">MADDY's Resto &amp; Bar</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#amenities">Amenities</a>
<a className="hover:text-white transition-colors" href="#location">Location</a>
</div>
<a className="hidden sm:flex items-center gap-2 bg-white text-zinc-950 px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors" href="#reservation">
<span className="">Reserve Table</span>
<svg aria-hidden="true" data-icon="lucide:arrow-down-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m7 7l10 10m0-10v10H7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</nav>


<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div><header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                Open Daily 11 AM – 11 PM
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">
                Culinary Excellence in <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500" style={{}}>Lucknow</span>
</h1>
<p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Experience the finest flavors at Saffron. A cozy, romantic atmosphere offering an all-you-can-eat experience, late-night bites, and exceptional desserts.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full text-sm font-medium transition-all shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)]" href="#reservation">
<svg aria-hidden="true" data-icon="lucide:calendar-check" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18M9 16l2 2l4-4"></path></g></svg>
                    Book a Table
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 px-8 py-3 rounded-full text-sm font-medium transition-all" href="#location">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                    Visit Us
                </a>
</div>
</div>
</header>


<section className="py-24 px-6 bg-zinc-900/20 border-y border-white/5" id="menu">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Delicious Choices</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mt-2">Our Menu</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

<div className="space-y-12">

<div>
<h3 className="text-xl font-medium text-amber-500 mb-6 flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:utensils" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Thali Specials
                        </h3>
<div className="space-y-5">
<div className="flex justify-between items-baseline group">
<div className="pr-8">
<h4 className="text-zinc-200 font-medium group-hover:text-white transition-colors">Standard Thali</h4>
<p className="text-xs text-zinc-500 mt-0.5">Dal Fry, Jeera Rice, Roti (4), Salad</p>
</div>
<div className="text-amber-500 font-medium whitespace-nowrap">₹ 150</div>
</div>
<div className="flex justify-between items-baseline group">
<div className="pr-8">
<h4 className="text-zinc-200 font-medium group-hover:text-white transition-colors">Deluxe Thali</h4>
<p className="text-xs text-zinc-500 mt-0.5">Dal Makhani, Mix Veg, Jeera Rice, Butter Roti, Salad, Raita, Sweet</p>
</div>
<div className="text-amber-500 font-medium whitespace-nowrap">₹ 200</div>
</div>
<div className="flex justify-between items-baseline group">
<div className="pr-8">
<h4 className="text-zinc-200 font-medium group-hover:text-white transition-colors">Special Thali</h4>
<p className="text-xs text-zinc-500 mt-0.5">Paneer Butter Masala, Mix Veg, Dal Makhani, Jeera Rice, Butter Naan, Salad, Raita, Sweet</p>
</div>
<div className="text-amber-500 font-medium whitespace-nowrap">₹ 240</div>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-medium text-amber-500 mb-6 flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:chef-hat" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589a5 5 0 0 0-9.186 0a4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Main Course
                        </h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline border-b border-zinc-800/50 pb-2">
<span className="text-zinc-300">Paneer Butter Masala</span>
<span className="text-zinc-400 text-sm">₹ 160</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-800/50 pb-2">
<span className="text-zinc-300">Kadai Paneer</span>
<span className="text-zinc-400 text-sm">₹ 160</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-800/50 pb-2">
<span className="text-zinc-300">Shahi Paneer</span>
<span className="text-zinc-400 text-sm">₹ 170</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-800/50 pb-2">
<span className="text-zinc-300">Dal Makhani</span>
<span className="text-zinc-400 text-sm">₹ 120</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-800/50 pb-2">
<span className="text-zinc-300">Yellow Dal</span>
<span className="text-zinc-400 text-sm">₹ 90</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-800/50 pb-2">
<span className="text-zinc-300">Mix Veg</span>
<span className="text-zinc-400 text-sm">₹ 120</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-800/50 pb-2">
<span className="text-zinc-300">Malai Kofta</span>
<span className="text-zinc-400 text-sm">₹ 140</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-800/50 pb-2">
<span className="text-zinc-300">Chana Masala</span>
<span className="text-zinc-400 text-sm">₹ 110</span>
</div>
</div>
</div>
</div>

<div className="space-y-12">

<div>
<h3 className="text-xl font-medium text-amber-500 mb-6 flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:croissant" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97a11 11 0 0 1 .132-6.487M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352a11 11 0 0 0-6.486.132"></path><path d="M18 5a4 3 0 0 1 4 3a2 2 0 0 1-2 2a10 10 0 0 0-5.139 1.42M5 18a3 4 0 0 0 3 4a2 2 0 0 0 2-2a10 10 0 0 1 1.42-5.14"></path><path d="M8.709 2.554a10 10 0 0 0-6.155 6.155a1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676"></path></g></svg>
                            Indian Breads
                        </h3>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-300">Tandoori Roti</span>
<span className="text-zinc-500 border-b border-zinc-800 flex-1 mx-4"></span>
<span className="text-zinc-400">₹ 10</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-300">Butter Roti</span>
<span className="text-zinc-500 border-b border-zinc-800 flex-1 mx-4"></span>
<span className="text-zinc-400">₹ 12</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-300">Butter Naan</span>
<span className="text-zinc-500 border-b border-zinc-800 flex-1 mx-4"></span>
<span className="text-zinc-400">₹ 25</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-300">Garlic Naan</span>
<span className="text-zinc-500 border-b border-zinc-800 flex-1 mx-4"></span>
<span className="text-zinc-400">₹ 35</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-300">Stuffed Naan</span>
<span className="text-zinc-500 border-b border-zinc-800 flex-1 mx-4"></span>
<span className="text-zinc-400">₹ 45</span>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-medium text-amber-500 mb-6 flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:soup" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9m-5 0h10m2.5-9L22 6m-5.75-3c.27.1.8.53.75 1.36c-.06.83-.93 1.2-1 2.02c-.05.78.34 1.24.73 1.62m-5.48-5c.27.1.8.53.74 1.36c-.05.83-.93 1.2-.98 2.02c-.06.78.33 1.24.72 1.62M6.25 3c.27.1.8.53.75 1.36c-.06.83-.93 1.2-1 2.02c-.05.78.34 1.24.74 1.62" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Rice &amp; Raita
                        </h3>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-300">Jeera Rice</span>
<span className="text-zinc-500 border-b border-zinc-800 flex-1 mx-4"></span>
<span className="text-zinc-400">₹ 90</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-300">Veg Pulao</span>
<span className="text-zinc-500 border-b border-zinc-800 flex-1 mx-4"></span>
<span className="text-zinc-400">₹ 110</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-300">Mix Veg Raita</span>
<span className="text-zinc-500 border-b border-zinc-800 flex-1 mx-4"></span>
<span className="text-zinc-400">₹ 70</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-300">Boondi Raita</span>
<span className="text-zinc-500 border-b border-zinc-800 flex-1 mx-4"></span>
<span className="text-zinc-400">₹ 60</span>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-medium text-amber-500 mb-6 flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:cup-soda" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m6 8l1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8M5 8h14"></path><path d="M7 15a6.47 6.47 0 0 1 5 0a6.47 6.47 0 0 0 5 0m-5-7l1-6h2"></path></g></svg>
                            Beverages &amp; Desserts
                        </h3>
<div className="grid grid-cols-2 gap-x-8 gap-y-3">
<div className="flex justify-between text-sm">
<span className="text-zinc-300">Tea</span>
<span className="text-zinc-400">₹ 20</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-300">Coffee</span>
<span className="text-zinc-400">₹ 40</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-300">Lassi</span>
<span className="text-zinc-400">₹ 60</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-300">Mango Lassi</span>
<span className="text-zinc-400">₹ 80</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-300">Fresh Lime Soda</span>
<span className="text-zinc-400">₹ 50</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-300">Gulab Jamun (2pc)</span>
<span className="text-zinc-400">₹ 50</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-xs text-zinc-500 italic">* Prices are subject to change. Government taxes extra as applicable.</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5" id="amenities">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div>
<div className="flex items-center gap-3 mb-4 text-white">
<svg aria-hidden="true" data-icon="lucide:accessibility" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="16" cy="4" r="1"></circle><path d="m18 19l1-7l-6 1M5 8l3-3l5.5 3l-2.36 3.5m-6.9 3a5 5 0 0 0 6.88 6"></path><path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path></g></svg>
<h4 className="font-medium">Accessibility</h4>
</div>
<ul className="space-y-2 text-sm text-zinc-500">
<li>Wheelchair-accessible toilet</li>
<li>Wheelchair-accessible seating</li>
</ul>
</div>

<div>
<div className="flex items-center gap-3 mb-4 text-white">
<svg aria-hidden="true" data-icon="lucide:users" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<h4 className="font-medium">Crowd &amp; Kids</h4>
</div>
<ul className="space-y-2 text-sm text-zinc-500">
<li>Good for groups</li>
<li>Good for kids</li>
</ul>
</div>

<div>
<div className="flex items-center gap-3 mb-4 text-white">
<svg aria-hidden="true" data-icon="lucide:car" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
<h4 className="font-medium">Parking</h4>
</div>
<ul className="space-y-2 text-sm text-zinc-500">
<li>Free parking lot</li>
<li>Free street parking</li>
</ul>
</div>

<div>
<div className="flex items-center gap-3 mb-4 text-white">
<svg aria-hidden="true" data-icon="lucide:credit-card" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
<h4 className="font-medium">Payments</h4>
</div>
<ul className="space-y-2 text-sm text-zinc-500">
<li>Credit cards</li>
<li>Debit cards</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="reservation">

<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-5 flex flex-col justify-center">
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase mb-3">Reservations</span>
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">Secure Your Table</h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                         Avoid the wait. Book your table online for an intimate dining experience. For parties larger than 10, please contact us directly.
                     </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-amber-500 flex-shrink-0">
<svg aria-hidden="true" data-icon="lucide:phone-call" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-white font-medium text-sm">Direct Booking Line</h4>
<p className="text-zinc-500 text-sm mt-1">Available 11 AM - 11 PM</p>
<a className="text-zinc-300 hover:text-white transition-colors text-sm mt-1 block font-medium" href="tel:+9109540267171">+91 09540267171</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-amber-500 flex-shrink-0">
<svg aria-hidden="true" data-icon="lucide:calendar-clock" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
</div>
<div>
<h4 className="text-white font-medium text-sm">Policy</h4>
<p className="text-zinc-500 text-sm mt-1">We hold tables for 15 minutes past the reservation time.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative">
<form className="space-y-6">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Date</label>
<div className="relative">
<input className="w-full bg-zinc-900/50 border border-zinc-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 block p-3 appearance-none transition-all placeholder-zinc-500" required="" type="date"/>
<svg aria-hidden="true" data-icon="lucide:calendar" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Guests</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-zinc-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 block p-3 appearance-none transition-all cursor-pointer">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5 People</option>
<option>6 People</option>
<option>8+ People</option>
</select>
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Select Time</label>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-lg text-sm bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all border border-transparent focus:border-amber-500 focus:text-amber-500" type="button">12:30 PM</button>
<button className="px-4 py-2 rounded-lg text-sm bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all border border-transparent focus:border-amber-500 focus:text-amber-500" type="button">1:00 PM</button>
<button className="px-4 py-2 rounded-lg text-sm bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all border border-transparent focus:border-amber-500 focus:text-amber-500" type="button">1:30 PM</button>
<button className="px-4 py-2 rounded-lg text-sm bg-amber-500/10 text-amber-500 border border-amber-500/50" type="button">7:00 PM</button>
<button className="px-4 py-2 rounded-lg text-sm bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all border border-transparent focus:border-amber-500 focus:text-amber-500" type="button">7:30 PM</button>
<button className="px-4 py-2 rounded-lg text-sm bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all border border-transparent focus:border-amber-500 focus:text-amber-500" type="button">8:00 PM</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Full Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 block p-3 transition-all placeholder-zinc-600" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Phone Number</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 block p-3 transition-all placeholder-zinc-600" placeholder="+91 98765 43210" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Special Requests (Optional)</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 block p-3 transition-all placeholder-zinc-600 resize-none" placeholder="Birthday, Anniversary, Allergies..." rows="2"></textarea>
</div>
<button className="w-full bg-white text-black hover:bg-zinc-200 font-medium rounded-lg text-sm px-5 py-3.5 text-center transition-all mt-2" type="button">
                                 Confirm Reservation
                             </button>
</form>
</div>
</div>
</div>
</div>
</section><section className="pt-24 pr-6 pb-24 pl-6 relative" id="about">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4" style={{}}>Why Maddy?</h2>
<p className="text-zinc-400 max-w-2xl">A perfect blend of atmosphere, taste, and convenience located in Gamma 1, Greater Noida.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass-panel p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:text-amber-500 transition-colors">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Atmosphere</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">Casual</span>
<span className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">Cozy</span>
<span className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">Romantic</span>
<span className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">Quiet</span>
<span className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">Trendy</span>
</div>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:text-amber-500 transition-colors">
<svg aria-hidden="true" data-icon="lucide:concierge-bell" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Zm17-4a8 8 0 1 0-16 0m8-12v4m-2-4h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Service Options</h3>
<ul className="space-y-2 text-sm text-zinc-400">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Dine-in &amp; Table Service</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> No-contact delivery</li>
</ul>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:text-amber-500 transition-colors">
<svg aria-hidden="true" data-icon="lucide:coffee" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Offerings</h3>
<p className="text-sm text-zinc-400 mb-4">Known for great desserts, coffee, and late-night food.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">All you can eat</span>
<span className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">Small plates</span>
<span className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">Quick bite</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="location">
<div className="max-w-7xl mx-auto bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden flex flex-col lg:flex-row">

<div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
<h2 className="text-3xl font-medium tracking-tight text-white mb-8">Visit Saffron</h2>
<div className="space-y-8">

<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h5 className="text-white font-medium mb-1">Address</h5>
<p className="text-zinc-400 text-sm leading-relaxed">
                                1st floor, Shri Amrit Plaza, Jagat Farm,<br/>
                                Block E, Chandila, Gamma 1,<br/>
                                Greater Noida, Uttar Pradesh 201310
                            </p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:clock" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<h5 className="text-white font-medium mb-1">Opening Hours</h5>
<div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-zinc-400">
<span>Monday</span><span className="text-zinc-200">11 am – 11 pm</span>
<span>Tuesday</span><span className="text-zinc-200">11 am – 11 pm</span>
<span>Wednesday</span><span className="text-zinc-200">11 am – 11 pm</span>
<span>Thursday</span><span className="text-zinc-200">11 am – 11 pm</span>
<span>Friday</span><span className="text-zinc-200">11 am – 11 pm</span>
<span>Saturday</span><span className="text-zinc-200">11 am – 11 pm</span>
<span>Sunday</span><span className="text-zinc-200">11 am – 11 pm</span>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:phone" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h5 className="text-white font-medium mb-1">Contact</h5>
<a className="text-amber-500 hover:text-amber-400 transition-colors text-sm font-medium" href="tel:+9109540267171">
                                +91 09540267171
                            </a>
</div>
</div>
</div>
</div>

<div className="relative lg:w-1/2 min-h-[400px] bg-zinc-800/50">

<img alt="Restaurant Interior" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<a className="block w-full text-center bg-white text-black py-3 rounded-xl font-medium text-sm hover:bg-zinc-200 transition-colors" href="https://maps.google.com/?q=Saffron+The+Restaurant+Amritpuram" target="_blank">
                        Open in Google Maps
                     </a>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-1">
<span className="text-lg font-medium tracking-tight text-white">SAFFRON</span>
<span className="text-xs text-zinc-500">Amritpuram, Greater Noida</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:facebook" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<p className="text-xs text-zinc-600">
                © 2024 Saffron The Restaurant. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
