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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
<span className="font-['Playfair_Display'] italic font-medium text-lg">V</span>
</div>
<span className="text-slate-900 font-medium tracking-tighter text-lg">VOYAGEUR</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Destinations</a>
<a className="hover:text-slate-900 transition-colors" href="#">Curated Trips</a>
<a className="hover:text-slate-900 transition-colors" href="#">Journal</a>
<a className="hover:text-slate-900 transition-colors" href="#">Membership</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
<span>Sign in</span>
</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-slate-900/20 flex items-center gap-2">
<span>Plan Trip</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-indigo-50/50 to-transparent rounded-[100%] blur-3xl opacity-60"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">New Summer Collection 2024</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
                    Discover the <br className="hidden md:block"/>
<span className="font-['Playfair_Display'] italic text-slate-500">art of</span> getting lost.
                </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 font-light leading-relaxed delay-100 animate-fade-in opacity-0 fill-mode-forwards">
                    We curate exceptional journeys for the modern traveler. Experience the world through a lens of design, comfort, and authenticity.
                </p>

<div className="w-full max-w-3xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 p-2 flex flex-col md:flex-row gap-2 animate-fade-in delay-200 opacity-0 fill-mode-forwards">
<div className="flex-1 relative group">
<div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer h-full">
<i className="w-5 h-5 text-slate-400" data-lucide="map-pin"></i>
<div className="flex flex-col items-start">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Where</span>
<input className="bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm w-full font-medium" placeholder="Search destinations" type="text"/>
</div>
</div>
</div>
<div className="w-px bg-slate-100 my-2 hidden md:block"></div>
<div className="flex-1 relative group">
<div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer h-full">
<i className="w-5 h-5 text-slate-400" data-lucide="calendar"></i>
<div className="flex flex-col items-start">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">When</span>
<input className="bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm w-full font-medium" placeholder="Add dates" type="text"/>
</div>
</div>
</div>
<div className="w-px bg-slate-100 my-2 hidden md:block"></div>
<div className="flex-1 relative group">
<div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer h-full">
<i className="w-5 h-5 text-slate-400" data-lucide="users"></i>
<div className="flex flex-col items-start">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Who</span>
<span className="text-slate-900 text-sm font-medium">2 Travelers</span>
</div>
</div>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-xl transition-colors flex items-center justify-center md:w-auto w-full shadow-lg shadow-slate-900/10">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="shield-check"></i>
<span className="font-semibold tracking-tight">SafeTravel</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="globe"></i>
<span className="font-semibold tracking-tight">GlobalPass</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="compass"></i>
<span className="font-semibold tracking-tight">NorthStar</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="award"></i>
<span className="font-semibold tracking-tight">LuxeLife</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Curated Collections</h2>
<p className="text-slate-500 font-light max-w-md">Handpicked destinations designed for deep immersion and unforgettable memories.</p>
</div>
<a className="text-sm font-medium text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors pb-0.5 flex items-center gap-1" href="#">
                    View all collections <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 h-[400px] md:h-full relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Switzerland" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<span className="text-xs font-medium text-white/80 uppercase tracking-widest mb-2 block">High Altitude</span>
<h3 className="text-2xl font-medium text-white tracking-tight">Swiss Alps Expedition</h3>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                                $3,400 / person
                            </div>
</div>
</div>
</div>
<div className="flex flex-col gap-6 h-full">

<div className="flex-1 relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Kyoto" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&amp;w=2038&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm">
<i className="w-4 h-4 text-slate-400 hover:text-red-500 hover:fill-red-500 transition-colors" data-lucide="heart"></i>
</div>
<div className="absolute bottom-6 left-6">
<h3 className="text-lg font-medium text-white tracking-tight">Kyoto Temples</h3>
<p className="text-white/80 text-xs mt-1">Cultural Immersion</p>
</div>
</div>

<div className="flex-1 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer group">
<div className="flex justify-between items-start">
<div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
<i className="w-6 h-6" data-lucide="plane"></i>
</div>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors -rotate-45 group-hover:rotate-0 transform duration-300" data-lucide="arrow-right"></i>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-2">Custom Itinerary</h3>
<p className="text-slate-500 text-sm leading-relaxed">Let our experts craft a journey tailored specifically to your tastes.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="group">
<div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-indigo-200 group-hover:bg-indigo-50">
<i className="w-6 h-6 text-slate-900 group-hover:text-indigo-600 transition-colors" data-lucide="compass"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Expert Guidance</h3>
<p className="text-slate-500 text-sm leading-relaxed">Access to local experts who know the hidden gems that aren't in the guidebooks.</p>
</div>
<div className="group">
<div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-teal-200 group-hover:bg-teal-50">
<i className="w-6 h-6 text-slate-900 group-hover:text-teal-600 transition-colors" data-lucide="badge-check"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Vetted Stays</h3>
<p className="text-slate-500 text-sm leading-relaxed">Every hotel and villa is personally inspected to ensure the highest standards of quality.</p>
</div>
<div className="group">
<div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-rose-200 group-hover:bg-rose-50">
<i className="w-6 h-6 text-slate-900 group-hover:text-rose-600 transition-colors" data-lucide="clock"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">24/7 Concierge</h3>
<p className="text-slate-500 text-sm leading-relaxed">Peace of mind around the clock. We handle the unexpected so you can focus on the experience.</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Trending Now</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-slate-900 transition-colors">
<i className="w-5 h-5 text-slate-900" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-slate-900 transition-colors">
<i className="w-5 h-5 text-slate-900" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto no-scrollbar px-6 pb-12 max-w-[1600px] mx-auto">

<div className="min-w-[300px] md:min-w-[340px] group">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
<img alt="Cinque Terre" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&amp;w=1886&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-900">
                        Italy
                    </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">Cinque Terre Coast</h3>
<div className="flex items-center gap-1 text-slate-500 text-xs">
<i className="w-3 h-3 fill-slate-400 text-slate-400" data-lucide="star"></i>
<span>4.9 (128 reviews)</span>
</div>
</div>
<span className="text-sm font-medium text-slate-900">$2,100</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] group">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
<img alt="Iceland" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-900">
                        Iceland
                    </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">Northern Lights Hunt</h3>
<div className="flex items-center gap-1 text-slate-500 text-xs">
<i className="w-3 h-3 fill-slate-400 text-slate-400" data-lucide="star"></i>
<span>5.0 (84 reviews)</span>
</div>
</div>
<span className="text-sm font-medium text-slate-900">$1,850</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] group">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
<img alt="Santorini" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-900">
                        Greece
                    </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">Santorini Sunset</h3>
<div className="flex items-center gap-1 text-slate-500 text-xs">
<i className="w-3 h-3 fill-slate-400 text-slate-400" data-lucide="star"></i>
<span>4.8 (210 reviews)</span>
</div>
</div>
<span className="text-sm font-medium text-slate-900">$2,400</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] group">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
<img alt="Bali" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-900">
                        Indonesia
                    </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">Ubud Retreat</h3>
<div className="flex items-center gap-1 text-slate-500 text-xs">
<i className="w-3 h-3 fill-slate-400 text-slate-400" data-lucide="star"></i>
<span>4.9 (156 reviews)</span>
</div>
</div>
<span className="text-sm font-medium text-slate-900">$1,200</span>
</div>
</div>
</div>
</section>

<section className="py-4 px-4">
<div className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] px-6 py-20 md:px-20 md:py-28 relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to write your next chapter?</h2>
<p className="text-slate-400 max-w-xl mx-auto text-lg mb-10 font-light">Join our exclusive membership for early access to bespoke itineraries and priority booking.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<input className="px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-white/20 transition-all w-full sm:w-80" placeholder="Enter your email" type="email"/>
<button className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors">
                        Join Voyageur
                    </button>
</div>
<p className="text-xs text-slate-500 mt-6">No spam, just adventures.</p>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="font-['Playfair_Display'] italic font-medium text-xs">V</span>
</div>
<span className="text-slate-900 font-medium tracking-tighter">VOYAGEUR</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                        Crafting journeys that inspire, connect, and transform. The world is waiting for you.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Support</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Safety</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Cancellation</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Cookies</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Social</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Voyageur Inc. All rights reserved.</p>
<div className="flex gap-6">
<div className="flex items-center gap-2 text-slate-400 text-xs">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
                        System Operational
                    </div>
</div>
</div>
</div>
</footer>


    </>
  );
}
