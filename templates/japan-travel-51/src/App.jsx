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
      

<nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tight">Just Nihon</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="text-slate-900 hover:text-slate-600 transition-colors" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">Destinations</a>
<a className="hover:text-slate-900 transition-colors" href="#">Packages</a>
<a className="hover:text-slate-900 transition-colors" href="#">Blog</a>
<a className="hover:text-slate-900 transition-colors" href="#">About Us</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2.5 w-64">
<i className="w-4 h-4 text-slate-400 mr-2" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-sm text-slate-600 placeholder:text-slate-400 w-full" placeholder="Search for Tokyo, Kyoto..." type="text"/>
</div>
<button className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors">
                Book now
            </button>
</div>
</nav>

<header className="mx-4 lg:mx-6 mt-2 relative h-[650px] rounded-3xl overflow-hidden group">

<img alt="Japan Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>

<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter mb-4 drop-shadow-sm">
                JUST NIHON
            </h1>
<p className="text-lg md:text-xl text-white/90 max-w-2xl font-medium mb-10 leading-relaxed drop-shadow-sm">
                Discover breathtaking destinations across Japan with curated tours, local insights, and hassle-free planning all in one platform.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-medium hover:bg-slate-100 transition-colors">
                    Plan Your Trip
                </button>
<button className="border border-white/60 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-colors">
                    Explore Destinations
                </button>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    Why Thousands of Travelers Choose Just Nihon for Their Japanese Adventures
                </h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                    From neon-lit streets of Tokyo to serene temples in Kyoto, we make exploring Japan easier, safer, and more exciting with expert-crafted itineraries and round-the-clock support.
                </p>
<div className="flex gap-4 mb-12">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>

<div className="flex gap-12 border-t border-slate-100 pt-8">
<div className="flex flex-col items-center text-center">
<div className="bg-slate-100 p-3 rounded-full mb-3">
<i className="w-6 h-6 text-slate-700" data-lucide="smile"></i>
</div>
<span className="text-lg font-semibold text-slate-900">12k</span>
<span className="text-xs text-slate-500 font-medium mt-1">Happy Travelers</span>
</div>
<div className="flex flex-col items-center text-center">
<div className="bg-slate-100 p-3 rounded-full mb-3">
<i className="w-6 h-6 text-slate-700" data-lucide="award"></i>
</div>
<span className="text-lg font-semibold text-slate-900">10yrs</span>
<span className="text-xs text-slate-500 font-medium mt-1">Travel Experience</span>
</div>
<div className="flex flex-col items-center text-center">
<div className="bg-slate-100 p-3 rounded-full mb-3">
<i className="w-6 h-6 text-slate-700" data-lucide="map-pin"></i>
</div>
<span className="text-lg font-semibold text-slate-900">50+</span>
<span className="text-xs text-slate-500 font-medium mt-1">Destinations</span>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-6 hover:bg-slate-100 transition-colors cursor-default">
<div className="bg-white p-3 rounded-xl shadow-sm shrink-0">
<i className="w-6 h-6 text-slate-700" data-lucide="map"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Local Expertise</h3>
<p className="text-slate-500 text-sm leading-relaxed">Our Japan-based experts craft unique experiences with insider knowledge you won't find in typical tours.</p>
</div>
</div>

<div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-6 hover:bg-slate-100 transition-colors cursor-default">
<div className="bg-white p-3 rounded-xl shadow-sm shrink-0">
<i className="w-6 h-6 text-slate-700" data-lucide="calendar-check"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">All-in-One Booking</h3>
<p className="text-slate-500 text-sm leading-relaxed">Book everything in one place—Shinkansen tickets, hotels, and guided tours—hassle-free.</p>
</div>
</div>

<div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-6 hover:bg-slate-100 transition-colors cursor-default">
<div className="bg-white p-3 rounded-xl shadow-sm shrink-0">
<i className="w-6 h-6 text-slate-700" data-lucide="headphones"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">24/7 Support</h3>
<p className="text-slate-500 text-sm leading-relaxed">We're here anytime, anywhere. Get real-time help anytime you need it before, during, or after your trip.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Top Destinations</h2>
<p className="text-lg text-slate-500 max-w-xl">From neon cityscapes to cool mountain towns, discover where your next journey will take you.</p>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all">
<i className="w-5 h-5 text-slate-600" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all">
<i className="w-5 h-5 text-slate-600" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&amp;w=1994&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                        starts at ¥150,000
                    </div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-semibold mb-1">Tokyo</h3>
<div className="flex items-center gap-2 text-xs font-medium text-white/80">
<span>Urban Paradise</span>
<span>•</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star"></i> 4.8 (12k)</span>
</div>
<div className="flex items-center gap-1 mt-2 text-xs text-white/60">
<i className="w-3 h-3" data-lucide="map-pin"></i> Kanto Region
                        </div>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                        starts at ¥120,000
                    </div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-semibold mb-1">Kyoto</h3>
<div className="flex items-center gap-2 text-xs font-medium text-white/80">
<span>Culture &amp; History</span>
<span>•</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star"></i> 4.9 (950)</span>
</div>
<div className="flex items-center gap-1 mt-2 text-xs text-white/60">
<i className="w-3 h-3" data-lucide="map-pin"></i> Kansai Region
                        </div>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                        starts at ¥135,000
                    </div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-semibold mb-1">Osaka</h3>
<div className="flex items-center gap-2 text-xs font-medium text-white/80">
<span>Food &amp; Fun</span>
<span>•</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star"></i> 4.7 (2k)</span>
</div>
<div className="flex items-center gap-1 mt-2 text-xs text-white/60">
<i className="w-3 h-3" data-lucide="map-pin"></i> Kansai Region
                        </div>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                        starts at ¥180,000
                    </div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-semibold mb-1">Hokkaido</h3>
<div className="flex items-center gap-2 text-xs font-medium text-white/80">
<span>Nature &amp; Snow</span>
<span>•</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star"></i> 4.9 (780)</span>
</div>
<div className="flex items-center gap-1 mt-2 text-xs text-white/60">
<i className="w-3 h-3" data-lucide="map-pin"></i> Northern Region
                        </div>
</div>
</div>
</div>
<div className="mt-8">
<button className="bg-slate-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-slate-800 transition-colors">
                    View more
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[450px]">

<div className="bg-slate-500 rounded-3xl p-10 flex flex-col justify-between text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Tour Packages</h2>
<p className="text-white/80 text-lg leading-relaxed">
                        Affordable, customizable, and unforgettable adventures tailored to your Japanese dream.
                    </p>
</div>
<div className="relative z-10 mt-8">
<button className="bg-slate-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-slate-800 transition-colors border border-slate-700/50">
                        Browse all packages
                    </button>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden group cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
<div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md w-10 h-10 flex items-center justify-center rounded-full text-white">
<i className="w-5 h-5" data-lucide="flower-2"></i>
</div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<h3 className="text-xl font-semibold mb-2">Sakura Chasers</h3>
<p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                        Hop from park to park in Tokyo and Kyoto with boat tours, guided hanami, and a sunset cruise.
                    </p>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden group cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
<div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md w-10 h-10 flex items-center justify-center rounded-full text-white">
<i className="w-5 h-5" data-lucide="mountain"></i>
</div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<h3 className="text-xl font-semibold mb-2">Northern Highland Escape</h3>
<p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                        Experience the cool breeze of Hokkaido and Sapporo with scenic views, food trips, and local art.
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-12">Booking made as easy as 1-2-3.</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-slate-600" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Pick Your Destination</h4>
<p className="text-slate-500 text-sm mt-1">Choose from our curated list of top Japanese spots.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-slate-600" data-lucide="sliders-horizontal"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Customize Your Tour</h4>
<p className="text-slate-500 text-sm mt-1">Select dates, hotels, and activities that fit you.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-slate-600" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Confirm &amp; Travel</h4>
<p className="text-slate-500 text-sm mt-1">Secure your booking and get ready to fly.</p>
</div>
</div>
</div>
</section>
<footer className="bg-slate-50 border-t border-slate-100 py-12 text-center text-slate-500 text-sm">
<p>© 2024 Just Nihon Travel. All rights reserved.</p>
</footer>


    </>
  );
}
