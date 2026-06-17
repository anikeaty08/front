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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="fixed w-full top-0 z-50 bg-[#0f131a]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex flex-col items-center justify-center text-white group hover:opacity-80 transition-opacity" href="#">
<svg className="h-6 w-auto mb-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 100 50">
<path d="M10 50 H90"></path>
<path d="M15 50 V35 H20 V25 H25 V50"></path>
<path d="M28 50 V20 H36 V50"></path>
<path d="M36 50 V20 L44 0 L52 20 V50"></path>
<path d="M52 50 V25 H56 V10 M56 25 H60 V50"></path>
<path d="M63 50 V30 H68 V20 H75 V50"></path>
<path d="M78 50 V35 H85 V50"></path>
</svg>
<span className="text-xl font-['Playfair_Display',serif] font-normal tracking-wider leading-none">SJR</span>
<span className="text-xs font-['Inter',sans-serif] font-normal tracking-[0.3em] mt-1 text-slate-300">PROPERTY</span>
</a>

<div className="hidden md:flex items-center space-x-8 text-base font-extralight text-slate-400">
<a className="hover:text-white transition-colors" href="#">Properties</a>
<a className="hover:text-white transition-colors" href="#">Neighborhoods</a>
<a className="hover:text-white transition-colors" href="#">Agents</a>
<a className="hover:text-white transition-colors" href="#">Journal</a>
</div>

<div className="hidden md:flex items-center space-x-6">
<button className="text-white hover:text-slate-300 transition-colors flex items-center">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<a className="text-sm font-normal uppercase tracking-widest border-b border-white/30 pb-0.5 text-white hover:text-slate-300 hover:border-slate-300 transition-all" href="#">
                    Contact Us
                </a>
</div>

<button className="md:hidden text-white hover:text-slate-300 transition-colors">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-56 md:pb-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl">
<h1 className="text-5xl md:text-7xl font-['Playfair_Display',serif] font-light tracking-tight text-white leading-tight">
                    Curated living spaces for the modern aesthete.
                </h1>
<p className="mt-6 text-xl md:text-2xl text-slate-400 font-extralight max-w-xl leading-relaxed">
                    Discover extraordinary properties in the world's most sought-after neighborhoods, tailored to elevate your lifestyle.
                </p>

<div className="mt-12 max-w-2xl bg-[#1a1f2b] rounded-2xl p-2 flex flex-col sm:flex-row items-center border border-white/10 shadow-2xl">
<div className="flex-1 w-full px-4 py-3 border-b sm:border-b-0 sm:border-r border-white/5 flex items-center">
<i className="w-5 h-5 text-slate-400 mr-3" data-lucide="map-pin" strokeWidth="1.5"></i>
<input className="w-full text-base font-extralight text-white placeholder-slate-500 bg-transparent outline-none" placeholder="Location, neighborhood, or zip" type="text"/>
</div>

<div className="w-full sm:w-auto px-4 py-3 relative flex items-center border-b sm:border-b-0 sm:border-r border-white/5">
<select className="w-full sm:w-36 appearance-none bg-transparent text-base font-extralight text-slate-300 outline-none cursor-pointer pr-6 [&amp;&gt;option]:bg-[#1a1f2b] [&amp;&gt;option]:text-white">
<option value="">Property Type</option>
<option value="house">House</option>
<option value="condo">Condominium</option>
<option value="estate">Estate</option>
</select>
<i className="absolute right-4 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<button className="w-full sm:w-auto mt-2 sm:mt-0 ml-0 sm:ml-2 px-8 py-3.5 bg-white text-[#0f131a] text-base font-normal rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center">
                        Search
                    </button>
</div>
</div>
</div>
</section>

<section className="px-6 mb-24 md:mb-32">
<div className="max-w-7xl mx-auto h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden relative group border border-white/5">
<img alt="Luxury Home Exterior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-[#0f131a]/30"></div>
<div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-[#1a1f2b]/95 backdrop-blur-md p-8 rounded-2xl max-w-md border border-white/10">
<span className="text-xs font-normal uppercase tracking-widest text-slate-400 block mb-3">Featured Listing</span>
<h3 className="text-2xl font-['Playfair_Display',serif] font-light tracking-tight text-white">The Glass House Estate</h3>
<p className="text-base font-extralight text-slate-400 mt-2">Beverly Hills, California</p>
<div className="mt-6 flex items-center justify-between">
<span className="text-xl font-normal text-white">$12,500,000</span>
<a className="text-sm font-normal flex items-center text-white hover:text-slate-300 transition-colors" href="#">
                        View Details <i className="ml-2 w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-transparent border-t border-white/5 relative">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
<div>
<h2 className="text-4xl font-['Playfair_Display',serif] font-light tracking-tight text-white">Exclusive Collections</h2>
<p className="mt-3 text-base text-slate-400 font-extralight max-w-lg leading-relaxed">Explore our handpicked selection of premium real estate, representing the pinnacle of design and location.</p>
</div>
<div className="mt-8 md:mt-0 flex items-center space-x-4">

<label className="flex items-center cursor-pointer group">
<div className="relative">
<input className="sr-only" type="checkbox"/>
<div className="block bg-[#1a1f2b] w-12 h-7 rounded-full border border-white/10 transition-colors group-hover:border-white/20"></div>
<div className="dot absolute left-1 top-1 bg-slate-400 w-5 h-5 rounded-full transition-transform duration-300 ease-in-out shadow-sm"></div>
</div>
<div className="ml-4 text-sm font-normal text-slate-400 uppercase tracking-wider group-hover:text-slate-300 transition-colors">Map View</div>
</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 border border-white/5">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-[#1a1f2b]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-normal text-white border border-white/10">
                            New
                        </div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-['Playfair_Display',serif] font-light tracking-tight text-white group-hover:text-slate-300 transition-colors">Oakwood Residence</h4>
<p className="text-base text-slate-400 font-extralight mt-1">West Hollywood, CA</p>
</div>
<span className="text-lg font-normal text-white">$4,250,000</span>
</div>
<div className="flex items-center space-x-5 mt-4 pt-4 border-t border-white/5 text-sm text-slate-400 font-extralight">
<div className="flex items-center"><i className="mr-2 w-4 h-4" data-lucide="bed" strokeWidth="1.5"></i> 4 Beds</div>
<div className="flex items-center"><i className="mr-2 w-4 h-4" data-lucide="bath" strokeWidth="1.5"></i> 3.5 Baths</div>
<div className="flex items-center"><i className="mr-2 w-4 h-4" data-lucide="ruler" strokeWidth="1.5"></i> 3,200 Sqft</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 border border-white/5">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-['Playfair_Display',serif] font-light tracking-tight text-white group-hover:text-slate-300 transition-colors">Minimalist Penthouse</h4>
<p className="text-base text-slate-400 font-extralight mt-1">Tribeca, New York</p>
</div>
<span className="text-lg font-normal text-white">$8,900,000</span>
</div>
<div className="flex items-center space-x-5 mt-4 pt-4 border-t border-white/5 text-sm text-slate-400 font-extralight">
<div className="flex items-center"><i className="mr-2 w-4 h-4" data-lucide="bed" strokeWidth="1.5"></i> 3 Beds</div>
<div className="flex items-center"><i className="mr-2 w-4 h-4" data-lucide="bath" strokeWidth="1.5"></i> 3 Baths</div>
<div className="flex items-center"><i className="mr-2 w-4 h-4" data-lucide="ruler" strokeWidth="1.5"></i> 4,100 Sqft</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 border border-white/5">
<img alt="Exterior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-['Playfair_Display',serif] font-light tracking-tight text-white group-hover:text-slate-300 transition-colors">Modernist Villa</h4>
<p className="text-base text-slate-400 font-extralight mt-1">Malibu, California</p>
</div>
<span className="text-lg font-normal text-white">$15,200,000</span>
</div>
<div className="flex items-center space-x-5 mt-4 pt-4 border-t border-white/5 text-sm text-slate-400 font-extralight">
<div className="flex items-center"><i className="mr-2 w-4 h-4" data-lucide="bed" strokeWidth="1.5"></i> 6 Beds</div>
<div className="flex items-center"><i className="mr-2 w-4 h-4" data-lucide="bath" strokeWidth="1.5"></i> 7 Baths</div>
<div className="flex items-center"><i className="mr-2 w-4 h-4" data-lucide="ruler" strokeWidth="1.5"></i> 8,500 Sqft</div>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center justify-center px-10 py-4 border border-white/10 text-base font-normal rounded-full text-white hover:bg-[#1a1f2b] hover:border-white/20 transition-all" href="#">
                    View All Properties
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 md:py-32 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
<div className="w-full md:w-1/2">
<div className="aspect-[3/4] rounded-3xl overflow-hidden relative border border-white/5">
<img alt="Architecture Detail" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-[#0f131a]/10 mix-blend-multiply"></div>
</div>
</div>
<div className="w-full md:w-1/2">
<span className="text-xs font-normal uppercase tracking-widest text-slate-400 mb-6 block">Our Ethos</span>
<h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-light tracking-tight text-white leading-tight mb-8">
                    Redefining the narrative of luxury real estate.
                </h2>
<div className="space-y-6 text-base md:text-lg text-slate-400 font-extralight leading-relaxed">
<p>
                        At SJR PROPERTY, we believe that a home is more than a physical space; it is the ultimate expression of personal aesthetics and lifestyle. We curate properties that possess architectural significance and timeless appeal.
                    </p>
<p>
                        Our approach is highly personalized, combining deep market intelligence with a discerning eye for design. We act as discreet advisors to clients seeking extraordinary living experiences.
                    </p>
</div>
<div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 gap-8">
<div>
<span className="block text-4xl font-['Playfair_Display',serif] font-light text-white mb-2">$2B+</span>
<span className="text-sm text-slate-400 uppercase tracking-widest font-normal">Sales Volume</span>
</div>
<div>
<span className="block text-4xl font-['Playfair_Display',serif] font-light text-white mb-2">15</span>
<span className="text-sm text-slate-400 uppercase tracking-widest font-normal">Years Experience</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0b0e14] border-t border-white/5 pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-20">
<div className="md:col-span-1">
<a className="flex flex-col items-start justify-center text-white mb-8 group hover:opacity-80 transition-opacity w-max" href="#">
<svg className="h-8 w-auto mb-2 text-slate-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 100 50">
<path d="M10 50 H90"></path>
<path d="M15 50 V35 H20 V25 H25 V50"></path>
<path d="M28 50 V20 H36 V50"></path>
<path d="M36 50 V20 L44 0 L52 20 V50"></path>
<path d="M52 50 V25 H56 V10 M56 25 H60 V50"></path>
<path d="M63 50 V30 H68 V20 H75 V50"></path>
<path d="M78 50 V35 H85 V50"></path>
</svg>
<span className="text-3xl font-['Playfair_Display',serif] font-normal tracking-wider leading-none">SJR</span>
<span className="text-xs font-['Inter',sans-serif] font-normal tracking-[0.4em] mt-1.5 text-slate-400">PROPERTY</span>
</a>
<p className="text-base text-slate-400 font-extralight leading-relaxed max-w-xs">
                        Curators of exceptional living spaces. Elevated real estate advisory for the modern client.
                    </p>
</div>
<div>
<h4 className="text-sm font-normal uppercase tracking-widest text-white mb-8">Explore</h4>
<ul className="space-y-4 text-base font-extralight text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Featured Properties</a></li>
<li><a className="hover:text-white transition-colors" href="#">Off-Market Exclusives</a></li>
<li><a className="hover:text-white transition-colors" href="#">Neighborhood Guides</a></li>
<li><a className="hover:text-white transition-colors" href="#">The Journal</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-normal uppercase tracking-widest text-white mb-8">Company</h4>
<ul className="space-y-4 text-base font-extralight text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-normal uppercase tracking-widest text-white mb-8">Connect</h4>
<ul className="space-y-4 text-base font-extralight text-slate-400 mb-8">
<li><a className="hover:text-white transition-colors" href="mailto:hello@sjrproperty.com">hello@sjrproperty.com</a></li>
<li><a className="hover:text-white transition-colors" href="tel:+13105550123">+1 (310) 555-0123</a></li>
</ul>
<div className="flex space-x-6 text-slate-400">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-slate-500 font-extralight">
<p>© 2024 SJR PROPERTY. All rights reserved.</p>
<div className="flex space-x-8 mt-6 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
