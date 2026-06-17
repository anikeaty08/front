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



{
"@context": "https://schema.org",
"@type": "RealEstateAgent",
"name": "Royal Real Estate, Inc.",
"image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
"telephone": "+1 747-333-5511",
"address": {
"@type": "PostalAddress",
"addressLocality": "Los Angeles",
"addressRegion": "CA",
"addressCountry": "US"
},
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"
],
"opens": "08:00",
"closes": "21:00"
},
"areaServed": "Los Angeles County"
}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-indigo-950 text-white flex items-center justify-center font-serif text-lg rounded-sm">R</div>
<div className="flex flex-col">
<span className="font-serif text-lg tracking-tight text-slate-900 leading-none group-hover:text-indigo-900 transition-colors">ROYAL</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">Real Estate Inc.</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors" href="#listings">Listings</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors" href="#areas">Areas</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-indigo-950 border border-indigo-100 bg-indigo-50/50 hover:bg-indigo-50 px-4 py-2.5 rounded-sm transition-all duration-300 group" href="tel:+17473335511">
<svg aria-hidden="true" className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-sm font-medium tracking-wide">+1 747-333-5511</span>
</a>
<button className="lg:hidden text-slate-900">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Luxury Home Los Angeles" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<span className="inline-block py-1 px-3 border border-white/20 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs tracking-widest uppercase mb-6 font-medium">Los Angeles County Luxury</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1] tracking-tight">
                Your Trusted Real Estate <br className="hidden md:block"/> Partner in <span className="text-indigo-200 italic">Los Angeles</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Discover exclusive properties and experience world-class service with Royal Real Estate, Inc. We bring you home to luxury.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-950 font-medium tracking-wide rounded-sm hover:bg-indigo-50 transition-colors" href="#listings">
                    View Listings
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-white text-white font-medium tracking-wide rounded-sm hover:bg-white/10 transition-colors backdrop-blur-sm" href="#contact">
                    Contact Agent
                </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<svg aria-hidden="true" className="lucide lucide-arrow-down w-6 h-6" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</section>

<div className="bg-white border-b border-slate-100 relative z-20 -mt-1">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-10 pl-6 gap-x-8 gap-y-8">
<div className="text-center md:text-left">
<p className="text-3xl font-serif text-indigo-950 mb-1">15+</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">Years Experience</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl font-serif text-indigo-950 mb-1">$2B+</p>
<p className="uppercase text-xs text-slate-500 tracking-wider">Sales Volume</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl font-serif text-indigo-950 mb-1">850+</p>
<p className="uppercase text-xs text-slate-500 tracking-wider">Happy Clients</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl font-serif text-indigo-950 mb-1">LA</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">County Experts</p>
</div>
</div>
</div>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] bg-slate-100 overflow-hidden rounded-sm relative">
<img alt="Real Estate Agent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=1973&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white font-serif text-xl italic">"Excellence in every transaction."</p>
</div>
</div>

<div className="absolute -z-10 -top-6 -left-6 w-full h-full border border-indigo-100 rounded-sm"></div>
</div>
<div>
<h4 className="text-indigo-900 font-medium tracking-widest uppercase text-xs mb-4">About Royal Real Estate, Inc.</h4>
<h2 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6 tracking-tight">Defining Luxury in <span className="text-indigo-900/80">Los Angeles County</span></h2>
<p className="text-slate-600 mb-6 leading-relaxed font-light">
                        At Royal Real Estate, Inc., we believe a home is more than just a place to live—it is a sanctuary and a statement. Serving Los Angeles County and nearby prestigious areas, we combine local market mastery with white-glove service.
                    </p>
<p className="text-slate-600 mb-8 leading-relaxed font-light">
                        Whether you are buying a hillside estate in Hollywood Hills or a coastal retreat in Malibu, our dedicated team ensures your journey is seamless, private, and rewarding.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check-circle text-indigo-900 mt-1 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-slate-700">Deep expertise in LA's luxury neighborhoods.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check-circle text-indigo-900 mt-1 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-slate-700">Personalized marketing strategies for sellers.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check-circle text-indigo-900 mt-1 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-slate-700">Exclusive access to off-market listings.</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-indigo-950 font-medium hover:gap-4 transition-all" href="#contact">
                        Meet Our Team <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="listings">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-3 tracking-tight">Featured Properties</h2>
<p className="text-slate-500 font-light">Curated selection of premier homes in Los Angeles.</p>
</div>
<a className="px-6 py-3 border border-slate-200 bg-white text-slate-900 text-sm font-medium hover:border-indigo-900 transition-colors rounded-sm" href="#">
                    View All Inventory
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-sm overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-500 cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden">

<img alt="Grand Garden Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-indigo-950 text-xs font-semibold px-3 py-1 uppercase tracking-wide">For Sale</div>
</div>
<div className="p-6">
<p className="text-2xl font-serif text-indigo-950 mb-2">$4,250,000</p>

<h3 className="text-lg font-medium text-slate-900 mb-1">Grand Garden Estate</h3>
<p className="text-slate-500 text-sm mb-6 flex items-center gap-1">
<svg aria-hidden="true" className="lucide lucide-map-pin w-4 h-4 text-slate-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Beverly Hills, CA 90210
                        </p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<div className="flex gap-4">
<span className="flex items-center gap-1 text-xs text-slate-500"><svg aria-hidden="true" className="lucide lucide-bed w-4 h-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg> 4 Bed</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><svg aria-hidden="true" className="lucide lucide-bath w-4 h-4" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4 8 6"></path><path d="M17 19v2"></path><path d="M2 12h20"></path><path d="M7 19v2"></path><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path></svg> 3.5 Bath</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><svg aria-hidden="true" className="lucide lucide-ruler w-4 h-4" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg> 3,200 sqft</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-sm overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-500 cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Listing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-indigo-950 text-xs font-semibold px-3 py-1 uppercase tracking-wide">For Sale</div>
</div>
<div className="p-6">
<p className="text-2xl font-serif text-indigo-950 mb-2">$8,900,000</p>
<h3 className="text-lg font-medium text-slate-900 mb-1">Coastal Contemporary</h3>
<p className="text-slate-500 text-sm mb-6 flex items-center gap-1">
<svg aria-hidden="true" className="lucide lucide-map-pin w-4 h-4 text-slate-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Malibu, CA 90265
                        </p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<div className="flex gap-4">
<span className="flex items-center gap-1 text-xs text-slate-500"><svg aria-hidden="true" className="lucide lucide-bed w-4 h-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg> 5 Bed</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><svg aria-hidden="true" className="lucide lucide-bath w-4 h-4" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4 8 6"></path><path d="M17 19v2"></path><path d="M2 12h20"></path><path d="M7 19v2"></path><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path></svg> 6 Bath</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><svg aria-hidden="true" className="lucide lucide-ruler w-4 h-4" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg> 5,400 sqft</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-sm overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-500 cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Listing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-indigo-900 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">New Listing</div>
</div>
<div className="p-6">
<p className="text-2xl font-serif text-indigo-950 mb-2">$3,150,000</p>
<h3 className="text-lg font-medium text-slate-900 mb-1">Mid-Century Masterpiece</h3>
<p className="text-slate-500 text-sm mb-6 flex items-center gap-1">
<svg aria-hidden="true" className="lucide lucide-map-pin w-4 h-4 text-slate-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Silver Lake, Los Angeles
                        </p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<div className="flex gap-4">
<span className="flex items-center gap-1 text-xs text-slate-500"><svg aria-hidden="true" className="lucide lucide-bed w-4 h-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg> 3 Bed</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><svg aria-hidden="true" className="lucide lucide-bath w-4 h-4" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4 8 6"></path><path d="M17 19v2"></path><path d="M2 12h20"></path><path d="M7 19v2"></path><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path></svg> 2 Bath</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><svg aria-hidden="true" className="lucide lucide-ruler w-4 h-4" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg> 2,100 sqft</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="areas">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl font-serif text-slate-900 mb-4 tracking-tight">Areas We Serve</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Providing luxury real estate services across the most sought-after neighborhoods in Los Angeles County.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<a className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer" href="#">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90" src="https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
<span className="text-white font-serif text-lg tracking-wide border-b border-transparent group-hover:border-white transition-all pb-1">Beverly Hills</span>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer" href="#">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90" src="https://images.unsplash.com/photo-1544144433-d50aff500b91?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
<span className="text-white font-serif text-lg tracking-wide border-b border-transparent group-hover:border-white transition-all pb-1">Santa Monica</span>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer" href="#">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
<span className="text-white font-serif text-lg tracking-wide border-b border-transparent group-hover:border-white transition-all pb-1">Malibu</span>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer" href="#">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
<span className="text-white font-serif text-lg tracking-wide border-b border-transparent group-hover:border-white transition-all pb-1">West Hollywood</span>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer" href="#">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
<span className="text-white font-serif text-lg tracking-wide border-b border-transparent group-hover:border-white transition-all pb-1">Bel Air</span>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer bg-slate-900 flex items-center justify-center text-center p-4 hover:bg-indigo-900 transition-colors" href="#">
<div>
<span className="text-white/50 text-xs uppercase tracking-widest block mb-2">View All</span>
<span className="text-white font-serif text-lg">Nearby Areas</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-6 h-6 text-white block mx-auto mt-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100/50 hover:border-indigo-100 transition-colors">
<div className="w-12 h-12 bg-indigo-50 text-indigo-900 flex items-center justify-center rounded-sm mb-6">
<svg aria-hidden="true" className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-serif text-slate-900 mb-3">Trusted Integrity</h3>
<p className="text-slate-500 leading-relaxed font-light text-sm">We operate with complete transparency and unwavering ethics, ensuring your interests are always protected.</p>
</div>
<div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100/50 hover:border-indigo-100 transition-colors">
<div className="w-12 h-12 bg-indigo-50 text-indigo-900 flex items-center justify-center rounded-sm mb-6">
<svg aria-hidden="true" className="lucide lucide-building-2 w-6 h-6" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h3 className="text-xl font-serif text-slate-900 mb-3">Local Expertise</h3>
<p className="text-slate-500 leading-relaxed font-light text-sm">Our deep roots in Los Angeles County provide you with exclusive insights into market trends and hidden gems.</p>
</div>
<div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100/50 hover:border-indigo-100 transition-colors">
<div className="w-12 h-12 bg-indigo-50 text-indigo-900 flex items-center justify-center rounded-sm mb-6">
<svg aria-hidden="true" className="lucide lucide-star w-6 h-6" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h3 className="text-xl font-serif text-slate-900 mb-3">Premium Service</h3>
<p className="text-slate-500 leading-relaxed font-light text-sm">From staging to closing, we provide a white-glove concierge experience tailored to your unique lifestyle.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-200 rounded-sm overflow-hidden">

<div className="p-8 md:p-12 lg:p-16">
<h4 className="text-indigo-900 font-medium tracking-widest uppercase text-xs mb-2">Get in Touch</h4>
<h2 className="text-3xl font-serif text-slate-900 mb-6 tracking-tight">Start Your Journey</h2>
<p className="text-slate-500 mb-8 font-light">Contact Royal Real Estate, Inc. today to discuss your property goals in Los Angeles.</p>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-indigo-900 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Phone</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-indigo-900 transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Email</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-indigo-900 transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Message</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-indigo-900 transition-all resize-none" placeholder="I am interested in..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-indigo-950 text-white font-medium tracking-wide rounded-sm hover:bg-indigo-900 transition-colors flex items-center justify-center gap-2" type="button">
                            Send Inquiry
                        </button>
</form>
<div className="mt-10 pt-8 border-t border-slate-100">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-phone text-indigo-900 w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-slate-700 font-medium">+1 747-333-5511</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-clock text-indigo-900 w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-slate-500 text-sm">Mon - Sun: 8:00 AM – 9:00 PM</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-100 relative min-h-[400px]">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0'}}>
</iframe>
<div className="absolute bottom-6 left-6 bg-white p-4 rounded-sm shadow-lg max-w-xs">
<p className="font-serif text-indigo-900 text-lg">Royal Real Estate, Inc.</p>
<p className="text-xs text-slate-500">Serving Los Angeles County &amp; Nearby Areas</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6 text-white" href="#">
<div className="w-8 h-8 bg-white text-indigo-950 flex items-center justify-center font-serif text-lg rounded-sm">R</div>
<span className="font-serif text-lg tracking-tight">ROYAL REAL ESTATE</span>
</a>
<p className="text-slate-400 text-sm leading-relaxed max-w-md font-light">
                        Elevating the standard of luxury real estate in Los Angeles County. We connect exceptional people with exceptional properties.
                    </p>
</div>
<div>
<h5 className="text-white font-serif mb-6">Navigation</h5>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#listings">Listings</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-serif mb-6">Contact</h5>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-map-pin mt-0.5 text-indigo-300 w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Los Angeles County, CA
                        </li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-phone mt-0.5 text-indigo-300 w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<a className="hover:text-white" href="tel:+17473335511">+1 747-333-5511</a>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-mail mt-0.5 text-indigo-300 w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            info@royalrealestate.inc
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-light">
<p>© 2024 Royal Real Estate, Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
<a className="w-full bg-indigo-950 text-white py-4 rounded-sm shadow-lg flex items-center justify-center gap-2 font-medium" href="tel:+17473335511">
<svg aria-hidden="true" className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            Call Now: +1 747-333-5511
        </a>
</div>



    </>
  );
}
