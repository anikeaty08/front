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
      

<div className="bg-emerald-700 text-white py-2 px-4 text-sm font-medium">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-4 text-xs md:text-sm opacity-90">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="phone"></i> +977 9841774591</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="mail"></i> info@touchplanettreks.com</span>
</div>
<div className="flex items-center gap-4 text-xs opacity-80">
<span>Registered No. 320061/080/081</span>
<span className="hidden md:inline">Save up to US$100 with Last-Minute Specials</span>
<button className="hover:text-white"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="bg-emerald-600 text-white p-1 rounded">
<i className="w-6 h-6" data-lucide="mountain"></i>
</div>
<div>
<h1 className="text-lg font-semibold tracking-tight text-slate-900 leading-none">TOUCH PLANET</h1>
<p className="text-xs tracking-widest text-slate-500 uppercase">Treks Pvt. Ltd.</p>
</div>
</div>

<nav className="hidden lg:flex space-x-8 items-center text-sm font-medium text-slate-600">
<a className="hover:text-emerald-600 transition flex items-center gap-1" href="#">Destinations <i className="w-3 h-3" data-lucide="chevron-down"></i></a>
<a className="hover:text-emerald-600 transition flex items-center gap-1" href="#">Trekking in Nepal <i className="w-3 h-3" data-lucide="chevron-down"></i></a>
<a className="hover:text-emerald-600 transition flex items-center gap-1" href="#">Travel Guides <i className="w-3 h-3" data-lucide="chevron-down"></i></a>
<a className="hover:text-emerald-600 transition" href="#">Company</a>
<a className="hover:text-emerald-600 transition" href="#">Blog</a>
<a className="hover:text-emerald-600 transition" href="#">Contact Us</a>
<button className="text-slate-400 hover:text-emerald-600"><i className="w-5 h-5" data-lucide="search"></i></button>
</nav>

<div className="hidden md:flex">
<a className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-5 py-2.5 rounded-full text-sm font-medium border border-emerald-200 transition-colors" href="#">
                        Plan Your Trip
                    </a>
</div>

<div className="lg:hidden">
<button className="text-slate-500"><i className="w-6 h-6" data-lucide="menu"></i></button>
</div>
</div>
</div>
</header>

<section className="relative bg-slate-50 overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30 mix-blend-multiply"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        Find Your Path, <br/>
<span className="text-emerald-600">Explore Mountains</span>
</h1>

<div className="bg-white p-2 rounded-full shadow-lg border border-slate-100 max-w-lg flex items-center">
<input className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-2 text-base text-slate-700 placeholder:text-slate-400 outline-none" placeholder="Find your dream trek..." type="text"/>
<button className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
</div>

<div className="flex items-center gap-6 pt-4">
<div className="flex items-center gap-2">
<div className="bg-[#34E0A1] rounded-full p-1"><i className="w-5 h-5 text-black" data-lucide="tripadvisor"></i></div>
<span className="text-lg font-semibold text-slate-900">Tripadvisor</span>
</div>
<div className="flex items-center gap-2">

<span className="font-semibold text-lg text-slate-500">Google <span className="font-normal text-slate-400">Reviews</span></span>
</div>
</div>
</div>

<div className="relative h-[400px] md:h-[500px]">

<div className="absolute top-0 right-10 w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
<img alt="Mountain" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-10 left-10 w-60 h-40 md:w-72 md:h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-30">
<img alt="Temple" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute top-10 right-0 w-full h-full z-10 opacity-20 text-slate-400">
<svg className="w-full h-full" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M45.7,-78.3C58.9,-69.3,69.1,-56.3,76.9,-42.6C84.7,-28.9,90.1,-14.4,88.4,-0.9C86.8,12.5,78.2,25,69.3,37.3C60.4,49.6,51.2,61.8,39.5,69.5C27.8,77.3,13.9,80.6,-0.5,81.4C-14.9,82.3,-29.8,80.7,-42.6,73.5C-55.4,66.3,-66.1,53.5,-73.8,39.4C-81.5,25.3,-86.2,9.9,-84.3,-4.6C-82.4,-19.1,-73.9,-32.7,-63.3,-43.3C-52.7,-53.9,-40,-61.5,-27.6,-70.9C-15.2,-80.3,-3,-91.5,10.6,-93.2C24.2,-94.9,48.4,-87,45.7,-78.3Z" fill="currentColor" transform="translate(100 100)"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-10">
<div className="flex items-center gap-2 text-emerald-600 mb-2">
<span className="h-px w-8 bg-emerald-600"></span>
<span className="text-sm font-medium uppercase tracking-wider">Unique and Exclusive</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Our Best Sellers for 2026</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Annapurna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-lime-400 text-lime-900 text-xs font-bold px-3 py-1 rounded-full">BEST SELLER TREK</span>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-xs font-medium px-2 py-1 rounded shadow flex items-center gap-1">
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i> 5 reviews
                        </div>
</div>
<div className="p-6">
<div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> 14 Days</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">Annapurna Base Camp Trek - 14 Days</h3>
<div className="flex items-end justify-between border-t border-slate-100 pt-4">
<div>
<p className="text-xs text-slate-400 mb-1">Price from</p>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-emerald-600">US$1050</span>
<span className="text-sm text-slate-400 line-through">US$1495</span>
</div>
</div>
<a className="text-sm font-medium text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">Explore <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Everest" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">BUDGET EVEREST TREK</span>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-xs font-medium px-2 py-1 rounded shadow flex items-center gap-1">
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i> 2 reviews
                        </div>
</div>
<div className="p-6">
<div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> 13 Days</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">Everest Base Camp Budget Trek - 13 Days</h3>
<div className="flex items-end justify-between border-t border-slate-100 pt-4">
<div>
<p className="text-xs text-slate-400 mb-1">Price from</p>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-emerald-600">US$1190</span>

</div>
</div>
<a className="text-sm font-medium text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">Explore <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Ghorepani" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="absolute top-4 left-4 bg-sky-400 text-sky-900 text-xs font-bold px-3 py-1 rounded-full">BEST SHORT TREKKING</span>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-xs font-medium px-2 py-1 rounded shadow flex items-center gap-1">
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i> 5 reviews
                        </div>
</div>
<div className="p-6">
<div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> 9 Days</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">Ghorepani Poon Hill Trek - 9 Days</h3>
<div className="flex items-end justify-between border-t border-slate-100 pt-4">
<div>
<p className="text-xs text-slate-400 mb-1">Price from</p>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-emerald-600">US$685</span>
<span className="text-sm text-slate-400 line-through">US$740</span>
</div>
</div>
<a className="text-sm font-medium text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">Explore <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Everest" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-xs font-medium px-2 py-1 rounded shadow flex items-center gap-1">
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i> 5 reviews
                        </div>
</div>
<div className="p-6">
<div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> 16 Days</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">Everest Base Camp Trek - 16 Days</h3>
<div className="flex items-end justify-between border-t border-slate-100 pt-4">
<div>
<p className="text-xs text-slate-400 mb-1">Price from</p>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-emerald-600">US$1495</span>
<span className="text-sm text-slate-400 line-through">US$1599</span>
</div>
</div>
<a className="text-sm font-medium text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">Explore <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Mera Peak" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-xs font-medium px-2 py-1 rounded shadow flex items-center gap-1">
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i> 3 reviews
                        </div>
</div>
<div className="p-6">
<div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> 17 Days</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">Mera Peak Climbing - 17 Days</h3>
<div className="flex items-end justify-between border-t border-slate-100 pt-4">
<div>
<p className="text-xs text-slate-400 mb-1">Price from</p>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-emerald-600">US$2265</span>
<span className="text-sm text-slate-400 line-through">US$2445</span>
</div>
</div>
<a className="text-sm font-medium text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">Explore <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Manaslu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-xs font-medium px-2 py-1 rounded shadow flex items-center gap-1">
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i> 4 reviews
                        </div>
</div>
<div className="p-6">
<div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
<div className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> 15 Days</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">Manaslu Circuit Trek - 15 Days</h3>
<div className="flex items-end justify-between border-t border-slate-100 pt-4">
<div>
<p className="text-xs text-slate-400 mb-1">Price from</p>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-emerald-600">US$1290</span>
<span className="text-sm text-slate-400 line-through">US$1395</span>
</div>
</div>
<a className="text-sm font-medium text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">Explore <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20" href="#">
                    View All Packages <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="flex flex-col items-start gap-4">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600 border border-slate-100">
<i className="w-8 h-8" data-lucide="users"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Specialized Leaders</h3>
<p className="text-base text-slate-500 leading-relaxed">Planet Treks Leaders have been carefully selected based on their experience and personality.</p>
<a className="text-sm font-medium text-emerald-600 mt-2 inline-block" href="#">read more +</a>
</div>
</div>

<div className="flex flex-col items-start gap-4">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600 border border-slate-100">
<i className="w-8 h-8" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Secure Online Pay</h3>
<p className="text-base text-slate-500 leading-relaxed">We prioritize the safety of our guests digitally as well as in the mountains.</p>
<a className="text-sm font-medium text-emerald-600 mt-2 inline-block" href="#">read more +</a>
</div>
</div>

<div className="flex flex-col items-start gap-4">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600 border border-slate-100">
<i className="w-8 h-8" data-lucide="tag"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Best Price</h3>
<p className="text-base text-slate-500 leading-relaxed">Touch Planet Treks would always have the best price for the travel and tour packages.</p>
<a className="text-sm font-medium text-emerald-600 mt-2 inline-block" href="#">read more +</a>
</div>
</div>

<div className="flex flex-col items-start gap-4">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600 border border-slate-100">
<i className="w-8 h-8" data-lucide="settings"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">100% Customize Trips</h3>
<p className="text-base text-slate-500 leading-relaxed">We have many travel and trekking menus and multiple options of packages.</p>
<a className="text-sm font-medium text-emerald-600 mt-2 inline-block" href="#">read more +</a>
</div>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20" href="#">
                    Know More <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-10">
<div className="flex items-center gap-2 text-emerald-600 mb-2">
<span className="h-px w-8 bg-emerald-600"></span>
<span className="text-sm font-medium uppercase tracking-wider">Travel Styles</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Things to Do in the Himalaya</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group flex flex-col items-center text-center p-6 border border-slate-100 rounded-2xl hover:border-emerald-200 hover:shadow-lg transition-all">
<div className="mb-4 text-emerald-600 opacity-80 group-hover:scale-110 transition-transform">
<i className="w-16 h-16 stroke-1" data-lucide="tent"></i>
</div>
<h4 className="font-medium text-slate-900">Jungle Safari</h4>
</div>

<div className="group flex flex-col items-center text-center p-6 border border-slate-100 rounded-2xl hover:border-emerald-200 hover:shadow-lg transition-all">
<div className="mb-4 text-emerald-600 opacity-80 group-hover:scale-110 transition-transform">
<i className="w-16 h-16 stroke-1" data-lucide="footprints"></i>
</div>
<h4 className="font-medium text-slate-900">Trekking in Nepal</h4>
</div>

<div className="group flex flex-col items-center text-center p-6 border border-slate-100 rounded-2xl hover:border-emerald-200 hover:shadow-lg transition-all">
<div className="mb-4 text-emerald-600 opacity-80 group-hover:scale-110 transition-transform">
<i className="w-16 h-16 stroke-1" data-lucide="camera"></i>
</div>
<h4 className="font-medium text-slate-900">Tour in Nepal</h4>
</div>

<div className="group flex flex-col items-center text-center p-6 border border-slate-100 rounded-2xl hover:border-emerald-200 hover:shadow-lg transition-all">
<div className="mb-4 text-emerald-600 opacity-80 group-hover:scale-110 transition-transform">
<i className="w-16 h-16 stroke-1" data-lucide="mountain-snow"></i>
</div>
<h4 className="font-medium text-slate-900">Peak Climbing</h4>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20" href="#">
                    View All Activities <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-20 bg-green-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-8">
<div className="flex items-center gap-2 text-emerald-600 mb-2">
<span className="h-px w-8 bg-emerald-600"></span>
<span className="text-sm font-medium uppercase tracking-wider">Guaranteed Departures</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Book with Last-Minute Specials</h2>
</div>

<div className="flex overflow-x-auto no-scrollbar gap-2 mb-6 pb-2">
<button className="bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap">Feb 2026</button>
<button className="bg-white text-slate-600 hover:bg-slate-100 px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-slate-200">Mar 2026</button>
<button className="bg-white text-slate-600 hover:bg-slate-100 px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-slate-200">Apr 2026</button>
<button className="bg-white text-slate-600 hover:bg-slate-100 px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-slate-200">May 2026</button>
<button className="bg-white text-slate-600 hover:bg-slate-100 px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-slate-200">Jun 2026</button>
</div>

<div className="hidden md:grid grid-cols-12 gap-4 bg-slate-700 text-white p-4 rounded-t-lg text-xs font-semibold uppercase tracking-wider">
<div className="col-span-5">Trip and Days</div>
<div className="col-span-3">Departure Date</div>
<div className="col-span-2">Status</div>
<div className="col-span-2 text-right">Price</div>
</div>

<div className="bg-white rounded-b-lg shadow-sm border border-slate-200 divide-y divide-slate-100">

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 items-center hover:bg-slate-50 transition">
<div className="col-span-5">
<h4 className="text-base font-semibold text-slate-900">Everest Base Camp Trek - 16 Days</h4>
<span className="text-sm text-slate-500">16 Days</span>
</div>
<div className="col-span-3 text-sm text-slate-600">
<div className="flex flex-col">
<span>Starts: Mar 05, 2026</span>
<span className="text-slate-400">Ends: Mar 20, 2026</span>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Guaranteed</span>
<div className="text-[10px] text-emerald-600 mt-1">Save up to $100</div>
</div>
<div className="col-span-2 flex flex-col items-end gap-2">
<div className="text-right">
<span className="block text-lg font-bold text-slate-900">US$1600</span>
<span className="block text-xs text-slate-400 line-through">US$1680</span>
</div>
<button className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-3 py-1 rounded text-xs font-medium transition">Join This Date</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 items-center hover:bg-slate-50 transition">
<div className="col-span-5">
<h4 className="text-base font-semibold text-slate-900">Everest Base Camp Trek - 16 Days</h4>
<span className="text-sm text-slate-500">16 Days</span>
</div>
<div className="col-span-3 text-sm text-slate-600">
<div className="flex flex-col">
<span>Starts: Mar 06, 2026</span>
<span className="text-slate-400">Ends: Mar 21, 2026</span>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Guaranteed</span>
<div className="text-[10px] text-emerald-600 mt-1">Save up to $100</div>
</div>
<div className="col-span-2 flex flex-col items-end gap-2">
<div className="text-right">
<span className="block text-lg font-bold text-slate-900">US$1600</span>
<span className="block text-xs text-slate-400 line-through">US$1680</span>
</div>
<button className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-3 py-1 rounded text-xs font-medium transition">Join This Date</button>
</div>
</div>
</div>

<div className="mt-8 bg-gradient-to-r from-emerald-600 to-green-500 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
<div className="flex items-center gap-6">
<div className="hidden md:block bg-white/20 p-4 rounded-xl text-white">
<i className="w-10 h-10" data-lucide="map"></i>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">Customize and Book Trip</h3>
<p className="text-emerald-100 text-sm max-w-lg">Embark on a journey of discovery with us; Touch Planet Treks curate an unforgettable holiday experience.</p>
</div>
</div>
<button className="bg-white text-emerald-700 hover:bg-slate-50 px-6 py-3 rounded-full font-medium shadow-md whitespace-nowrap">Plan Your Trip</button>
</div>
</div>
</section>

<section className="bg-slate-900 py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="text-white space-y-6">
<div className="flex items-center gap-2 text-emerald-400 mb-2">
<span className="h-px w-8 bg-emerald-400"></span>
<span className="text-sm font-medium uppercase tracking-wider">About Us</span>
</div>
<h2 className="text-4xl font-semibold tracking-tight">Touch Planet Treks</h2>
<p className="text-slate-300 leading-relaxed text-base">
                        Welcome to <strong className="text-white">Touch Planet Treks Pvt. Ltd.</strong> is the most customer-focused travel agency which is located at the heart of Kathmandu, Thamel. We are the best travel agency in Nepal. Touch Planet Treks provides services related to trekking, trekking, and all other travel-related services.
                    </p>
<p className="text-slate-300 leading-relaxed text-base">
                        We are offering complete traveling packages for Nepal and we also providing international tour packages for India, Bhutan, and Tibet. We always focus on your enjoyment through the travel.
                    </p>
<div className="pt-6">
<a className="inline-flex items-center justify-center px-6 py-3 border border-emerald-500/30 text-sm font-medium rounded-full text-emerald-400 bg-emerald-900/20 hover:bg-emerald-900/40 transition-colors" href="#">
                            Know More <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="relative hidden lg:block">

<svg className="absolute bottom-0 right-0 w-full text-slate-700" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 400 200">
<path d="M0 200 L100 100 L150 150 L250 50 L350 150 L400 100 V200 H0 Z" fill="currentColor" fillOpacity="0.1" stroke-opacity="0.3"></path>
<circle cx="300" cy="50" r="30" stroke="currentColor" stroke-opacity="0.2"></circle>
</svg>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<div className="flex items-center gap-2 text-emerald-600 mb-2">
<span className="h-px w-8 bg-emerald-600"></span>
<span className="text-sm font-medium uppercase tracking-wider">Traveler Reviews</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Discover Unfiltered Stories and Experiences</h2>
</div>
<div className="flex gap-2">
<button className="p-2 border border-slate-200 rounded hover:bg-slate-50"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="p-2 bg-slate-900 text-white rounded hover:bg-slate-800"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<div className="flex text-[#34E0A1]"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<span className="text-xs font-bold text-slate-900">Tripadvisor</span>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Best Recommended Himalayas trips</h4>
<p className="text-slate-500 text-sm mb-4 line-clamp-3">I just trekked back from the Kanchenjunga trek and Makalu trek guided by Ramjee Neo, he is an amazing trek guide, best services provided...</p>
<a className="text-xs font-medium text-emerald-600" href="#">read more +</a>
<div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-50">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-medium text-slate-900">Tom Van Thomas</p>
<p className="text-xs text-slate-400">Germany</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<div className="flex text-[#00b67a]"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<span className="text-xs font-bold text-slate-900">Trustpilot</span>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Highly Recommended</h4>
<p className="text-slate-500 text-sm mb-4 line-clamp-3">Highly Recommended for Touch Planet Treks. We had successfully climbed Mera Peak with Touch Planet Treks. The guides and crew were nice...</p>
<a className="text-xs font-medium text-emerald-600" href="#">read more +</a>
<div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-50">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-medium text-slate-900">Olivia James</p>
<p className="text-xs text-slate-400">United States</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<div className="flex text-[#34E0A1]"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<span className="text-xs font-bold text-slate-900">Tripadvisor</span>
</div>
<h4 className="font-semibold text-slate-900 mb-2">What an incredible journey!</h4>
<p className="text-slate-500 text-sm mb-4 line-clamp-3">I recently had an opportunity to embark on my Everest Base Camp trekking journey with Touch Planet Treks. Kathmandu, it was a fantastic trek...</p>
<a className="text-xs font-medium text-emerald-600" href="#">read more +</a>
<div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-50">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-medium text-slate-900">Benjamin</p>
<p className="text-xs text-slate-400">United States</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div>
<div className="flex items-center gap-2 text-emerald-600 mb-2">
<span className="h-px w-8 bg-emerald-600"></span>
<span className="text-sm font-medium uppercase tracking-wider">General FAQs</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Our FAQs can guide you as you dream up your ideal getaway.</h2>
<p className="text-sm text-slate-500 mb-6">Contact On-Trip Support</p>
<button className="bg-slate-800 text-white px-6 py-2 rounded-full text-sm font-medium">Contact Us <i className="inline w-4 h-4 ml-1" data-lucide="arrow-right"></i></button>
</div>
<div className="lg:col-span-2 space-y-4">
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Q1. How to get tourist visa in Nepal?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-slate-500 text-sm p-5 pt-0 leading-relaxed">
                            Tourist visas can obtained online from the Department of Immigration on the website or on arrival at the airport. The visa costs for 15 days are $30, for 30 days is $50, and for 90 days is $125.
                        </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Q2. Do I need visa to travel to Nepal?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-slate-500 text-sm p-5 pt-0 leading-relaxed">
                            Yes, most nationalities need a visa to enter Nepal.
                        </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Q3. What are the requirement to get Visit Visa for Nepal?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-slate-500 text-sm p-5 pt-0 leading-relaxed">
                           You need a valid passport with at least 6 months validity.
                        </div>
</details>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-10">
<div className="flex items-center gap-2 text-emerald-600 mb-2">
<span className="h-px w-8 bg-emerald-600"></span>
<span className="text-sm font-medium uppercase tracking-wider">Travel Blog</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Latest Travel Guides</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="group cursor-pointer">
<div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-4">
<img alt="Plants" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg text-center shadow-lg">
<span className="block text-2xl font-bold text-slate-900">10</span>
<span className="block text-xs uppercase text-slate-500">Feb</span>
</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition">Medicinal Plants in Nepal Treks</h3>
</div>

<div className="space-y-8">
<div className="flex gap-4 group cursor-pointer">
<div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Small 1" className="w-full h-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs text-slate-400 block mb-1">Jan 31, 2026</span>
<h4 className="text-base font-semibold text-slate-900 group-hover:text-emerald-600 transition">Manaslu Circuit Trek Guide</h4>
</div>
</div>
<div className="flex gap-4 group cursor-pointer">
<div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Small 2" className="w-full h-full object-cover group-hover:scale-105 transition" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<span className="text-xs text-slate-400 block mb-1">Jan 28, 2026</span>
<h4 className="text-base font-semibold text-slate-900 group-hover:text-emerald-600 transition">Pashupatinath Temple Tour</h4>
</div>
</div>
<div className="flex gap-4 group cursor-pointer">
<div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Small 3" className="w-full h-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs text-slate-400 block mb-1">Jan 15, 2026</span>
<h4 className="text-base font-semibold text-slate-900 group-hover:text-emerald-600 transition">Things to do in Kathmandu</h4>
</div>
</div>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20" href="#">
                    View All Posts <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2 text-emerald-600 mb-6">
<span className="h-px w-8 bg-emerald-600"></span>
<span className="text-sm font-medium uppercase tracking-wider">Get Expert Help, 24/7</span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 mb-10">Get in Touch with Us</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
<div className="flex items-center gap-3 mb-4">
<i className="w-6 h-6 text-emerald-600" data-lucide="phone"></i>
<h4 className="font-semibold text-lg text-slate-900">Call Us</h4>
</div>
<p className="text-emerald-600 font-semibold mb-2">+977 9841774591</p>
<p className="text-sm text-slate-500 mb-6">If you're on trip now and need assistance, contact our support team.</p>
<button className="text-xs font-medium bg-slate-800 text-white px-4 py-2 rounded-full">Call Now</button>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
<div className="flex items-center gap-3 mb-4">
<i className="w-6 h-6 text-emerald-600" data-lucide="mail"></i>
<h4 className="font-semibold text-lg text-slate-900">Send a Message</h4>
</div>
<p className="text-emerald-600 font-semibold mb-2">info@touchplanettreks.com</p>
<p className="text-sm text-slate-500 mb-6">Planning your next holiday? Message us for expert advice and personalized itinerary.</p>
<button className="text-xs font-medium bg-slate-800 text-white px-4 py-2 rounded-full">Email Now</button>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
<div className="flex items-center gap-3 mb-4">
<i className="w-6 h-6 text-emerald-600" data-lucide="message-circle"></i>
<h4 className="font-semibold text-lg text-slate-900">Chat with Us</h4>
</div>
<p className="text-emerald-600 font-semibold mb-2">+977 9841774591</p>
<p className="text-sm text-slate-500 mb-6">Have questions? Chat with our travel experts.</p>
<button className="text-xs font-medium bg-slate-800 text-white px-4 py-2 rounded-full">Chat Now</button>
</div>
</div>
</div>
</section>

<div className="w-full relative h-32 bg-slate-50 overflow-hidden">

<svg className="absolute bottom-0 left-0 w-full h-full text-green-200" preserveaspectratio="none" viewbox="0 0 1440 320">
<path d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z" fill="currentColor" fillOpacity="1"></path>
</svg>
<svg className="absolute bottom-0 left-0 w-full h-full text-green-300" preserveaspectratio="none" style={{opacity: '0.6'}} viewbox="0 0 1440 320">
<path d="M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,218.7C1120,235,1280,213,1360,202.7L1440,192V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z" fill="currentColor" fillOpacity="1"></path>
</svg>
</div>

<footer className="bg-green-100/50 pt-16 pb-8 border-t border-green-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

<div>
<h4 className="font-bold text-slate-900 mb-6">Touch Planet Treks Pvt. Ltd.</h4>
<div className="space-y-3 text-sm text-slate-600">
<p className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> Thamel Marg, Kathmandu, Nepal</p>
<p className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> info@touchplanettreks.com</p>
<p className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> +977 9841774591</p>
</div>
<div className="mt-6">
<p className="font-semibold text-sm mb-3">Stay Connected</p>
<div className="flex gap-2">
<a className="w-8 h-8 rounded-full border border-green-300 flex items-center justify-center text-green-700 hover:bg-green-200 transition" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-8 h-8 rounded-full border border-green-300 flex items-center justify-center text-green-700 hover:bg-green-200 transition" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full border border-green-300 flex items-center justify-center text-green-700 hover:bg-green-200 transition" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="w-8 h-8 rounded-full border border-green-300 flex items-center justify-center text-green-700 hover:bg-green-200 transition" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>

<div className="col-span-2">
<h4 className="font-bold text-slate-900 mb-6">Our Representatives</h4>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 bg-white/50 p-2 rounded">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden"></div>
<div>
<p className="text-xs font-bold text-slate-900">Ms. Helena Ortin</p>
<p className="text-[10px] text-slate-500 flex items-center gap-1">🇪🇸 Spain</p>
</div>
</div>
<div className="flex items-center gap-3 bg-white/50 p-2 rounded">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden"></div>
<div>
<p className="text-xs font-bold text-slate-900">Mr. Matthew PG</p>
<p className="text-[10px] text-slate-500 flex items-center gap-1">🇺🇸 USA</p>
</div>
</div>
<div className="flex items-center gap-3 bg-white/50 p-2 rounded">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden"></div>
<div>
<p className="text-xs font-bold text-slate-900">Santosh Bhattarai</p>
<p className="text-[10px] text-slate-500 flex items-center gap-1">🇵🇹 Portugal</p>
</div>
</div>
<div className="flex items-center gap-3 bg-white/50 p-2 rounded">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden"></div>
<div>
<p className="text-xs font-bold text-slate-900">Ms. Deepa Bhatta</p>
<p className="text-[10px] text-slate-500 flex items-center gap-1">🇦🇺 Australia</p>
</div>
</div>
</div>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Useful Links</h4>
<div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-600">
<a className="hover:text-emerald-600" href="#">Destinations</a>
<a className="hover:text-emerald-600" href="#">Travel Videos</a>
<a className="hover:text-emerald-600" href="#">Company</a>
<a className="hover:text-emerald-600" href="#">Customize Trip</a>
<a className="hover:text-emerald-600" href="#">Community Help CSR</a>
<a className="hover:text-emerald-600" href="#">Plan Your Trip</a>
<a className="hover:text-emerald-600" href="#">Travel Guides</a>
<a className="hover:text-emerald-600" href="#">Client Reviews</a>
<a className="hover:text-emerald-600" href="#">Photo Gallery</a>
<a className="hover:text-emerald-600" href="#">Write a Review</a>
<a className="hover:text-emerald-600" href="#">Terms and Conditions</a>
<a className="hover:text-emerald-600" href="#">Blog</a>
<a className="hover:text-emerald-600" href="#">General FAQs</a>
<a className="hover:text-emerald-600" href="#">Site Map</a>
<a className="hover:text-emerald-600" href="#">Contact Us</a>
</div>
</div>
</div>

<div className="border-t border-green-200 pt-10 pb-10 text-center">
<h4 className="font-bold text-slate-900 mb-4">Get Updates &amp; More</h4>
<div className="flex justify-center max-w-md mx-auto gap-2">
<input className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Your Name" type="text"/>
<input className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Enter Your Email" type="email"/>
<button className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-emerald-700">Subscribe →</button>
</div>
</div>

<div className="border-t border-green-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<div className="flex flex-col gap-2">
<span className="font-bold text-slate-900">We Accept</span>
<div className="flex gap-2">
<div className="h-6 w-10 bg-white rounded border border-slate-200 flex items-center justify-center font-bold italic text-blue-800">VISA</div>
<div className="h-6 w-10 bg-white rounded border border-slate-200 flex items-center justify-center font-bold text-red-600">MC</div>
<div className="h-6 w-10 bg-white rounded border border-slate-200 flex items-center justify-center font-bold text-blue-500">AMEX</div>
</div>
</div>
<div className="text-right">
<p>© 2026, Touch Planet Treks Pvt. Ltd. All Rights Reserved.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
