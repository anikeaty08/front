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
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-stone-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-3 h-3 rounded-full bg-red-600 group-hover:scale-110 transition-transform duration-300"></div>
<span className="text-xl font-medium tracking-tight text-stone-900">Just Nihon</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-red-600 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-stone-500 hover:text-red-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-stone-500 hover:text-red-600 transition-colors" href="#destinations">Destinations</a>
<a className="text-sm font-medium text-stone-500 hover:text-red-600 transition-colors" href="#services">Services</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-2 px-3 py-2 bg-stone-50 rounded-full border border-stone-200">
<i className="w-4 h-4 text-stone-400" data-lucide="search"></i>
<input className="bg-transparent text-sm border-none outline-none w-48 text-stone-600 placeholder-stone-400" placeholder="Search destinations..." type="text"/>
</div>
<button className="bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors duration-300">
                    Book Trip
                </button>
</div>
</div>
</nav>

<header className="pt-28 pb-12 px-4 md:px-6 max-w-7xl mx-auto">
<div className="relative h-[650px] w-full rounded-[2rem] overflow-hidden group">

<img alt="Mount Fuji Landscape" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
<div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6">
<span className="text-white text-sm font-medium tracking-wide uppercase">Discover Authentic Japan</span>
</div>
<h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-6">
                    EXPERIENCE THE<br/>TRUE SOUL
                </h1>
<p className="text-stone-200 text-lg md:text-xl max-w-2xl font-light mb-10 leading-relaxed">
                    Immerse yourself in a land where ancient traditions meet modern innovation. 
                    From the neon lights of Tokyo to the quiet temples of Kyoto.
                </p>
<div className="flex flex-col md:flex-row gap-4">
<button className="bg-white text-stone-900 px-8 py-3.5 rounded-full text-base font-medium hover:bg-stone-100 transition-all flex items-center gap-2">
                        Plan Your Trip
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-white/30 transition-all">
                        Explore Destinations
                    </button>
</div>
</div>
</div>
</header>

<section className="py-20 px-6 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6">
                    Why Travelers Choose <br/>
<span className="text-stone-400">Just Nihon</span> for their Adventure
                </h2>
<p className="text-lg text-stone-500 leading-relaxed mb-8">
                    We don't just book flights; we curate memories. As specialists in Japanese travel, we bridge the gap between you and the authentic local culture, offering exclusive access to experiences often missed by standard tours.
                </p>

<div className="flex items-center gap-4 mb-10">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<span className="text-stone-600 font-medium">Rated 4.9/5 by global travelers</span>
</div>

<div className="flex gap-10">
<div>
<div className="flex items-center gap-2 mb-1">
<div className="p-2 bg-red-50 text-red-600 rounded-full">
<i className="w-5 h-5" data-lucide="smile"></i>
</div>
<span className="text-2xl font-semibold tracking-tight">15k+</span>
</div>
<span className="text-sm text-stone-500">Happy Travelers</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="p-2 bg-stone-100 text-stone-600 rounded-full">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<span className="text-2xl font-semibold tracking-tight">47</span>
</div>
<span className="text-sm text-stone-500">Prefectures Covered</span>
</div>
</div>
</div>

<div className="space-y-4">
<div className="group p-6 rounded-2xl bg-stone-50 hover:bg-white border border-transparent hover:border-stone-200 hover:shadow-lg transition-all duration-300 flex gap-4 cursor-default">
<div className="w-12 h-12 rounded-xl bg-stone-900 text-white flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="map"></i>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Local Expertise</h3>
<p className="text-stone-500 text-base">Our team consists of Japan locals and experts who know the hidden gems beyond the guidebooks.</p>
</div>
</div>
<div className="group p-6 rounded-2xl bg-stone-50 hover:bg-white border border-transparent hover:border-stone-200 hover:shadow-lg transition-all duration-300 flex gap-4 cursor-default">
<div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="calendar-check"></i>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Seamless Booking</h3>
<p className="text-stone-500 text-base">From Shinkansen tickets to Ryokan reservations, we handle all logistics for a stress-free journey.</p>
</div>
</div>
<div className="group p-6 rounded-2xl bg-stone-50 hover:bg-white border border-transparent hover:border-stone-200 hover:shadow-lg transition-all duration-300 flex gap-4 cursor-default">
<div className="w-12 h-12 rounded-xl bg-stone-200 text-stone-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="headphones"></i>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">24/7 Support</h3>
<p className="text-stone-500 text-base">Travel with peace of mind knowing our support team is available anytime via WhatsApp or Line.</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 md:px-6 max-w-7xl mx-auto mb-24" id="destinations">
<div className="bg-stone-100 rounded-[2.5rem] p-8 md:p-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-2">Curated Destinations</h2>
<p className="text-lg text-stone-500">From island escapes to mountain towns, discover where your next journey will take you.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-white transition-colors">
<i className="w-5 h-5 text-stone-600" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-white transition-colors">
<i className="w-5 h-5 text-stone-600" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Kyoto" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<div className="flex items-center gap-1 mb-1 text-red-300">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="text-xs font-semibold uppercase tracking-wide">Heritage</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-1">Kyoto</h3>
<p className="text-sm text-stone-300">The cultural heart of Japan</p>
</div>
</div>

<div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Tokyo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&amp;w=1994&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<div className="flex items-center gap-1 mb-1 text-blue-300">
<i className="w-3 h-3 fill-current" data-lucide="zap"></i>
<span className="text-xs font-semibold uppercase tracking-wide">Modern</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-1">Tokyo</h3>
<p className="text-sm text-stone-300">Neon lights &amp; endless energy</p>
</div>
</div>

<div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Osaka" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&amp;w=2160&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<div className="flex items-center gap-1 mb-1 text-orange-300">
<i className="w-3 h-3 fill-current" data-lucide="utensils"></i>
<span className="text-xs font-semibold uppercase tracking-wide">Culinary</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-1">Osaka</h3>
<p className="text-sm text-stone-300">Japan's kitchen &amp; nightlife</p>
</div>
</div>

<div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Hokkaido" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<div className="flex items-center gap-1 mb-1 text-emerald-300">
<i className="w-3 h-3 fill-current" data-lucide="mountain"></i>
<span className="text-xs font-semibold uppercase tracking-wide">Nature</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-1">Hokkaido</h3>
<p className="text-sm text-stone-300">Wild wilderness &amp; snow</p>
</div>
</div>
</div>
<div className="mt-10 text-center md:text-left">
<button className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
                    View All Destinations
                </button>
</div>
</div>
</section>

<section className="px-6 max-w-7xl mx-auto mb-24" id="services">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-stone-900 rounded-3xl p-10 flex flex-col justify-between h-[450px]">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Our Premium Services</h2>
<p className="text-stone-400 text-lg leading-relaxed">
                        We offer affordable, customizable, and unforgettable adventures tailored to your specific interests and pace.
                    </p>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-stone-300">
<i className="w-5 h-5 text-red-500" data-lucide="check-circle-2"></i>
                            Private &amp; Group Tours
                        </li>
<li className="flex items-center gap-3 text-stone-300">
<i className="w-5 h-5 text-red-500" data-lucide="check-circle-2"></i>
                            Custom Itineraries
                        </li>
<li className="flex items-center gap-3 text-stone-300">
<i className="w-5 h-5 text-red-500" data-lucide="check-circle-2"></i>
                            Transport Assistance
                        </li>
</ul>
</div>
<button className="w-fit border border-stone-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-stone-900 transition-colors">
                    Browse Packages
                </button>
</div>

<div className="relative rounded-3xl overflow-hidden h-[450px] group">
<img alt="Tea Ceremony" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4 text-white">
<i className="w-5 h-5" data-lucide="coffee"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Cultural Experiences</h3>
<p className="text-stone-300 text-sm leading-relaxed">Tea ceremonies, kimono wearing, and sumo stable visits.</p>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden h-[450px] group">
<img alt="City View" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4 text-white">
<i className="w-5 h-5" data-lucide="train"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Urban Exploration</h3>
<p className="text-stone-300 text-sm leading-relaxed">Guided street food tours and hidden alleyway discoveries.</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-stone-100 mb-16">
<div className="max-w-4xl mx-auto px-6">
<h3 className="text-center text-lg font-medium mb-10 text-stone-900">Booking made as easy as 1-2-3</h3>
<div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center">
<div className="flex flex-col items-center gap-3 group">
<div className="w-16 h-16 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-red-600 group-hover:border-red-200 transition-colors">
<i className="w-7 h-7" data-lucide="map-pin"></i>
</div>
<span className="font-medium text-stone-800">1. Pick Destination</span>
</div>
<div className="hidden md:block w-24 h-[1px] bg-stone-200"></div>
<div className="flex flex-col items-center gap-3 group">
<div className="w-16 h-16 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-red-600 group-hover:border-red-200 transition-colors">
<i className="w-7 h-7" data-lucide="sliders"></i>
</div>
<span className="font-medium text-stone-800">2. Customize Tour</span>
</div>
<div className="hidden md:block w-24 h-[1px] bg-stone-200"></div>
<div className="flex flex-col items-center gap-3 group">
<div className="w-16 h-16 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-red-600 group-hover:border-red-200 transition-colors">
<i className="w-7 h-7" data-lucide="check"></i>
</div>
<span className="font-medium text-stone-800">3. Confirm &amp; Travel</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24" id="contact">
<div className="bg-stone-50 rounded-[2.5rem] p-6 md:p-12 flex flex-col lg:flex-row gap-12 overflow-hidden relative">
<div className="flex-1 z-10">
<div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">Contact Us</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6">Ready to start your journey?</h2>
<p className="text-lg text-stone-500 mb-10 max-w-md">Let's craft your perfect Japanese itinerary. Fill out the form and our specialists will be in touch shortly.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-600 shadow-sm">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<span className="text-stone-600 font-medium">hello@justnihon.com</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-600 shadow-sm">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<span className="text-stone-600 font-medium">+81 90-1234-5678</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-600 shadow-sm">
<i className="w-5 h-5" data-lucide="instagram"></i>
</div>
<span className="text-stone-600 font-medium">@JustNihonTravel</span>
</div>
</div>
</div>
<div className="flex-1 z-10">
<form className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-stone-700">First Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all" placeholder="John" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-stone-700">Last Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2 mb-6">
<label className="text-sm font-medium text-stone-700">Email Address</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="flex flex-col gap-2 mb-6">
<label className="text-sm font-medium text-stone-700">Message</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none" placeholder="Tell us about your dream trip..." rows="4"></textarea>
</div>
<button className="w-full bg-stone-900 text-white font-medium py-3.5 rounded-lg hover:bg-red-700 transition-colors" type="button">
                        Send Inquiry
                    </button>
</form>
</div>

<div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-600"></div>
<span className="text-lg font-medium tracking-tight text-stone-900">Just Nihon</span>
</div>
<div className="flex gap-8 text-sm text-stone-500">
<a className="hover:text-red-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-red-600 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-red-600 transition-colors" href="#">Cookies</a>
</div>
<div className="text-sm text-stone-400">
                    © 2023 Just Nihon Travel. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
