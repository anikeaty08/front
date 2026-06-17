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



        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.style.boxShadow = 'none';
                navbar.style.background = 'rgba(255, 255, 255, 0.85)';
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
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
      

<nav className="fixed w-full z-50 transition-all duration-300" id="navbar" style={{background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(226, 232, 240, 0.6)'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold text-lg tracking-tight">T</span>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Trevexis<span className="text-slate-400 font-normal">Elite</span></span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#tours">Packages</a>
<a className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#blog">Stories</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#contact">
                        Enquire Now
                    </a>
<button className="md:hidden text-slate-600 hover:text-slate-900 focus:outline-none" id="mobile-menu-btn">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div><div className="hidden md:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-20 shadow-xl" id="mobile-menu">
<div className="px-6 py-4 space-y-3 flex flex-col">
<a className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-orange-50" href="#home">Home</a>
<a className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-orange-50 hover:text-orange-600" href="#about">About</a>
<a className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-orange-50 hover:text-orange-600" href="#tours">Packages</a>
<a className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-orange-50 hover:text-orange-600" href="#gallery">Gallery</a>
<a className="mobile-link block pxd-md text-base font-medium text-white bg-orange-600 text-center shadow-md" href="#contact">Book Now</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
<div className="absolute inset-0 z-0">
<img alt="Jaisalmer Fort" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-slate-900/90"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="animate-fade-in-up">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-orange-200 text-xs font-medium uppercase tracking-wider mb-6" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                    Discover the Royal Heritage
                </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6">
                    Rajasthan <br/>
<span className="italic font-normal text-orange-200" style={{fontFamily: '\'Playfair Display\', serif'}}>Awaits Your Arrival</span>
</h1>
<p className="max-w-2xl mx-auto text-lg text-slate-200 mb-10 leading-relaxed font-light">
                    Experience the timeless beauty of golden desjestic forts, and vibrant culture with Trevexis Elite's curated luxury tours.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="px bg-orange-600 hover:bg-orange-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-orange-500/40 flex items-center gap-2" href="#tours">
                        Explore Packages <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="px-8 py-4 hover:bg-white/20 text-white rounded-full font-medium transition-all" href="#about" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
                        Learn More
                    </a>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
<span className="iconify" data-height="24" data-icon="lucide:chevron-down" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</section>

<div className="relative z-20 -mt-16 max-w-5xl mx-auto px-4 lg:px-8">
<div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 md:p-4 grid grid-cols-1 md:grid-cols-4 gap-2 md:divide-x md:divide-slate-100">
<div className="p-2">
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Destination</label>
<div className="flex items-center gap-2 text-slate-800">
<span className="iconify text-orange-500" data-height="16" data-icon="lucide:map-pin" data-width="16" style={{strokeWidth: '1.5'}}></span>
<select className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-medium cursor-pointer outline-none">
<optionall option="" rajasthan<="">
<option>Jaipur</option>
<option>Udaipur</option>
<option>Jaisalmer</option>
</optionall></select>
</div>
</div>
<div className="p-2">
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Date</label>
<div className="flex items-center gap-2 text-slate-800">
<span className="iconify text-orange-500" data-height="16" data-icon="lucide:calendar" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-medium text-slate-600 outline-none" type="date"/>
</div>
</div>
<div className="p-2">
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Guests</label>
<div className="flex items-center gap-2 text-slate-800">
<span className="iconify text-orange-500" data-height="16" data-icon="lucide:users" data-width="16" style={{strokeWidth: '1.5'}}></span>
<select className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-medium cursor-pointer outline-none">
<option>2 Adults</option>
<option>Family (4+)</option>
<option>Group (10+)</option>
</select>
</div>
</div>
<div className="p-2 flex items-center">
<button className="w-full h-full bg-slate-900 hover:bg-orange-600 text-white rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2 py-3 md:py-0">
<span className="iconify" data-height="16" data-icon="lucide:search" data-width="16" style={{strokeWidth: '1.5'}}></span>
                    Search
                </button>
</div>
</div>
</div>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-2"&gt;About Trevexis Elite
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Crafting Journeys, <br/>Creating Memories.</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Welcome to Trevexis Elite. We specialize in unveiling the majestic soul of Rajasthan. From the pink hues of Jaipur to the blue streets of Jodhpur and the golden sands of Jaisalmer, our tours are designed to immerse you in the royal heritage.
                    </p>
<p className="text-slate-600 mb-8 leading-relaxed">
                        Our team of local experts ensures that every trip is not just a vacation, but a story waiting to be told. We prioritize comfort, authenticity, and luxury.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
<div>
<p className="text-3xl font-semibold text-slate-900 mb-1">500+</p>
<p className="text-sm text-slate-500">Happy Travelers</p>
</div>
<div>
<p className="text-3xl font-semibold text-slate-900 mb-1">50+</p>
<p className="text-sm text-slate-500">Destinations</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
<img alt="Jaipur" className="rounded-2xl w-full h-64 object-cover mt-12 shadow-lg" src="https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<img alt="Architecture" className="rounded-2xl w-full h-64 object-cover shadow-lg" src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="tours">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Curated Rajasthan Packages</h2>
<p className="text-slate-600">Choose from our most popular itineraries, handpicked for the ultimate cultural experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Jaipur Hawa Mahal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                            5 Days / 4 Nights
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-slate-900">Royal Jaipur &amp; Agra</h3>
<div className="flex items-center gap-1 text-orange-500 text-sm font-medium">
<span className="iconify fill-current" data-height="14" data-icon="lucide:star" data-width="14" style={{strokeWidth: '1.5'}}></span> 4.9
                            </div>
</div>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">Visit the Pink City's forts, palaces, and the Taj Mahal in a single breathtaking trip.</p>
<div className="flex items-center gap-4 mb-6 text-sm text-slate-600">
<span className="flex items-center gap-1"><span className="iconify" data-height="16" data-icon="lucide:map" data-width="16" style={{strokeWidth: '1.5'}}></span> Sightseeing</span>
<span className="flex items-center gap-1"><span className="iconify" data-height="16" data-icon="lucide:utensils" data-width="16" style={{strokeWidth: '1.5'}}></span> Meals</span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-slate-100">
<div>
<span className="text-xs text-slate-400 block">Starting from</span>
<span className="text-lg font-semibold text-slate-900">$299</span>
</div>
<button className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1">
                                View Details <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Udaipur Lake" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                            4 Days / 3 Nights
                        </div>
<div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-slate-900">Romantic Udaipur</h3>
<div className="flex items-center gap-1 text-orange-500 text-sm font-medium">
<span className="iconify fill-current" data-height="14" data-icon="lucide:star" data-width="14" style={{strokeWidth: '1.5'}}></span> 5.0
                            </div>
</div>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">Boat rides on Lake Pichola and sunset dinners at the City Palace.</p>
<div className="flex items-center gap-4 mb-6 text-sm text-slate-600">
<span className="flex items-center gap-1"><span className="iconify" data-height="16" data-icon="lucide:sailboat" data-width="16" style={{strokeWidth: '1.5'}}></span> Boating</span>
<span className="flex items-center gap-1"><span className="iconify" data-height="16" data-icon="lucide:bed" data-width="16" style={{strokeWidth: '1.5'}}></span> Luxury Stay</span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-slate-100">
<div>
<span className="text-xs text-slate-400 block">Starting from</span>
<span className="text-lg font-semibold text-slate-900">$349</span>
</div>
<button className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1">
                                View Details <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style5;"=""></span>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Desert Safari" className="w-full h--500 group-hover:scale-105" src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&amp;w=2676&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                            3 Days / 2 Nights
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-slate-900">Jaisalmer Desert Safari</h3>
<div className="flex items-center gap-1 text-orange-500 text-sm font-medium">
<span className="iconify fill-current" data-height="14" data-icon="lucide:star" data-width="14" style={{strokeWidth: '1.5'}}></span> 4.8
                            </div>
</div>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">Sleep under the stars in luxury tents, camel rides, and folk dance.</p>
<div className="flex items-center gap-4 mb-6 text-sm text-slate-600">
<span className="flex items-center gap-1"><span className="iconify" data-height="16" data-icon="lucide:tent" data-width="16" style={{strokeWidth: '1.5'}}></span> Camping</span>
<span className="flex items-center gap-1"><span className="iconify" data-height="16" data-icon="lucide:music" data-width="16" style={{strokeWidth: '1.5'}}></span> Folk Art</span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-slate-100">
<div>
<span className="text-xs text-slate-400 block">Starting from</span>
<span className="text-lg font-semibold text-slate-900">$249</span>
</div>
<button className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1">
                                View Details <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 hover:border-slate-900 rounded-full text-sm font-medium text-slate-900 transition-colors bg-white" href="#">
                    View All Packages
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Captured Moments</h2>
<p className="text-slate-600">Glimpses of the vibrant colors of Rajasthan.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:chevron-left" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:chevron-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr" style={{gridTemplateRows: 'repeat(2, 200px)'}}>
<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
<img alt="Rajasthan Culture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium">Culture &amp; Heritage</p>
</div>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
<img alt="Camel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
<img alt="Fort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
<img alt="Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
<img alt="Lake Palace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="blog">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12">Travel Journals</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<article className="flex flex-col gap-4">
<div className="aspect-video rounded-xl overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Guides</span>
<h3 className="text-lg font-semibold text-slate-900 mt-1 mb-2 hover:text-orange-600 cursor-pointer transition-colors">Best time to visit Thar Desert</h3>
<p className="text-sm text-slate-500 line-clamp-2">Discover why winter is the golden season for desert adventures.</p>
</div>
</article>
<article className="flex flex-col gap-4">
<div className="aspect-video rounded-xl overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Food</span>
<h3 className="text-lg font-semibold text-slate-900 mt-1 mb-2 hover:text-orange-600 cursor-pointer transition-colors">Authentic Rajasthani Thali</h3>
<p className="text-sm text-slate-500 line-clamp-2">A culinary journey through spices, swories.</p>
</div>
</article>
<article className="flex flex-col gap-4">
<div className="aspect-video rounded-xl overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">History</span>
<h3 className="text-lg font-semibold text-slate-900 mt-1 mb-2 hover:text-orange-600 cursor-pointer transition-colors">Secrets of Amber Fort</h3>
<p className="text-sm text-slate-500 line-clamp-2">Uncovering the hidden passages and royal chambers of Jaipur.</p>
</div>
</article>
</div>
</div>
</section>

<section id="bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="textd text-slate-900 tracking-tight mb-6">Plan Your Royal Getaway</h2>
<p className="text-slate-600 mb-10">Fill out the form and our travel experts will design a custom itinerary just for you.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
<span className="iconify" data-height="20" data-icon="lucide:map-pin" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Head Office</h4>
<p className="text-sm text-slate-500 mt-1">123 Heritage Road, Civil Lines,<br/>Jaipur, Rajasthan 302006</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
<span className="iconify" data-height="20" data-icon="lucide:phone" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Phone</h4>
<p className="text-sm text-slate-500 mt-1">+91 987 654 3210</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
<span className="iconify" data-height="20" data-icon="lucide:mail" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Email</h4>
<p className="text-sm text-slate-500 mt-1">hello@trevexiselite.com</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you for your enquiry! We will contact you soon.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">First Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm placeholder:text-slate-400" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Last Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm placeholder:text-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Email Address</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm placeholder:text-slate-400" placeholder="john@example.com" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Phone</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm placeholder:text-slate-400" placeholder="+91" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Interest</label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm text-slate-600 appearance-none">
<option>Select Package</option>
<option>Jaipur &amp; Agra</option>
<option>Udaipur</option>
<option>Desert Safari</option>
<option>Custom Tour</option>
</select>
<span className="iconify absolute right-3 top-3 text-slate-400 pointer-events-none" data-height="16" data-icon="lucide:chev" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Message</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm placeholder:text-slate-400 resize-none" placeholder="Tell us about your travel dates and preferences..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-slate-900/10" type="submit">
                            Send Enquiry
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-semibold tracking-tight">T</div>
<span className="text-xl font-semibold text-white tracking-tight">Trevexis Elite</span>
</div>
<p className="text-sm text-slate-400 leading-relaxed">
                        Redefining luxury travel in Rajasthan. We curate experiences that linger in your memories forever.
                    </p>
</div>
<div>
<h5-white font-medium="" mb-4"="">Quick Links
<ul className="space-y-2 text-sm">
<li><a className="hover:text-orange-500 transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#tours">Packages</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#gallery">Gallery</a></li>
</ul>
</h5-white></div>
<div>
<h5 className="text-white font-medium mb-4">Support</h5>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-orange-500 transition-colors" href="#contact">Contact Us</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Newsletter</h5>
<p className="text-xs text-slate-400 mb-4">Subscribe for latest offers and travel stories</p>
<div className="flex gap-2">
<input className="bg-slate-800 border-none text-sm text-white px-3 py-2 rounded-md w-full focus:ring-1 focus:ring-orange-500 outline-none" placeholder="Email" type="email"/>
<button className="bg-orange-600 px-3 py-2 rounded-md hover:bg-orange-700 transition-colors text-white">
<span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2024 Trevexis Elite. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-height="20" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-height="20" data-icon="lucide:facebook" data-width="20" style={{strokeWidth: '1.5'}}></span></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-height="20" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
