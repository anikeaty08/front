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

        function toggleView(viewId) {
            const views = ['view-public', 'view-admin-login', 'view-admin-dashboard'];
            
            // Hide all
            views.forEach(id => {
                const el = document.getElementById(id);
                if(el) el.classList.add('hidden');
            });

            // Show target
            const target = document.getElementById(viewId);
            if(target) {
                target.classList.remove('hidden');
            }

            // Scroll to top
            window.scrollTo(0, 0);

            // Re-render icons in case they were hidden
            setTimeout(() => lucide.createIcons(), 50);

            // Update URL hash (simulated routing)
            if(viewId === 'view-admin-login') history.pushState(null, null, '#administrator');
            if(viewId === 'view-public') history.pushState(null, null, ' ');
        }

        // Check hash on load to simulate /administrator route
        window.addEventListener('load', () => {
            if(window.location.hash === '#administrator') {
                toggleView('view-admin-login');
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
      

<div id="view-public">

<nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="mountain-snow"></i>
</div>
<span className="text-xl font-semibold tracking-tight">Just Nihon</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="text-slate-900 hover:text-indigo-600 transition-colors" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">Destinations</a>
<a className="hover:text-slate-900 transition-colors" href="#">Packages</a>
<a className="hover:text-slate-900 transition-colors" href="#">Blog</a>
<a className="hover:text-slate-900 transition-colors" href="#">About Us</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2.5 w-64">
<i className="w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-sm ml-2 w-full placeholder:text-slate-400" placeholder="Search places / 場所を検索..." type="text"/>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-slate-200">
                    Book Now
                </button>
</div>
</nav>

<header className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
<div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
<img alt="Japan Landscape" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
<h1 className="text-white text-[120px] leading-none font-semibold opacity-20 tracking-tighter select-none hidden md:block scale-y-110">
                        NIHON
                    </h1>
<div className="md:-mt-16 z-10 relative">
<h2 className="text-4xl md:text-6xl text-white font-semibold tracking-tight mb-4 drop-shadow-lg">
                            Discover the Spirit of Japan <br/>
<span className="text-2xl md:text-3xl font-normal opacity-90 mt-2 block">日本の心を発見する旅へ</span>
</h2>
<p className="text-slate-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium drop-shadow-md">
                            Curated experiences from neon streets to ancient temples. Plan your perfect Nihon getaway tailored to your dreams.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                Plan Your Trip
                                <i className="w-4 h-4" data-lucide="map"></i>
</button>
<button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/30 transition-colors">
                                Explore Destinations
                            </button>
</div>
</div>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 py-16">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="space-y-4">
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
                            Why Thousands Choose <br/> Just Nihon Travel
                            <span className="block text-lg font-normal text-slate-400 mt-1">選ばれる理由</span>
</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                            From navigating the Shinkansen to booking exclusive ryokans, we remove the language barrier and complexity. Experience Japan like a local with our expert-crafted itineraries.
                            <br/><span className="text-sm text-slate-400 block mt-2">新幹線の手配から高級旅館の予約まで、言葉の壁を取り払い、ローカルのような体験を提供します。</span>
</p>
</div>
<div className="flex gap-4 text-slate-900">
<div className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"><i className="w-5 h-5" data-lucide="instagram"></i></div>
<div className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"><i className="w-5 h-5" data-lucide="twitter"></i></div>
<div className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"><i className="w-5 h-5" data-lucide="facebook"></i></div>
</div>
<div className="grid grid-cols-3 gap-8 border-t border-slate-100 pt-8">
<div className="text-center">
<div className="bg-slate-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-indigo-500/20">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
<div className="text-2xl font-semibold text-slate-900">15k+</div>
<div className="text-sm text-slate-500 font-medium">Happy Travelers</div>
</div>
<div className="text-center">
<div className="bg-slate-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-indigo-500/20">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<div className="text-2xl font-semibold text-slate-900">12yrs</div>
<div className="text-sm text-slate-500 font-medium">Experience</div>
</div>
<div className="text-center">
<div className="bg-slate-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-indigo-500/20">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div className="text-2xl font-semibold text-slate-900">47</div>
<div className="text-sm text-slate-500 font-medium">Prefectures</div>
</div>
</div>
</div>
<div className="flex flex-col gap-5">
<div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 shrink-0">
<i className="w-8 h-8" data-lucide="users"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Local Expertise / 現地の知識</h4>
<p className="text-base text-slate-500 mt-1">Our bilingual guides share insider knowledge you won't find in guidebooks.</p>
</div>
</div>
<div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-200">
<div className="bg-slate-700/50 p-3 rounded-xl text-indigo-300 shrink-0">
<i className="w-8 h-8" data-lucide="calendar-check"></i>
</div>
<div>
<h4 className="text-lg font-semibold">Seamless Booking / 簡単予約</h4>
<p className="text-base text-slate-300 mt-1">Hotels, JR Passes, and activities all in one place. Instant confirmation.</p>
</div>
</div>
<div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 shrink-0">
<i className="w-8 h-8" data-lucide="headphones"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">24/7 Support / サポート</h4>
<p className="text-base text-slate-500 mt-1">We are here anytime via LINE or WhatsApp during your trip.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">Top Destinations</h3>
<p className="text-lg text-slate-500 mt-2">Discover where your next journey begins. <span className="text-sm">人気の旅行先</span></p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white transition-colors">
<i className="w-5 h-5 text-slate-600" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Tokyo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&amp;w=1994&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-800">starts at ¥120,000</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="text-xl font-semibold">Tokyo / 東京</h4>
<div className="flex items-center gap-2 mt-1 text-sm text-slate-200">
<i className="w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<span>4.9 (2.4k)</span>
</div>
<div className="flex items-center gap-1 mt-2 text-xs text-slate-300">
<i className="w-3 h-3" data-lucide="map-pin"></i> Kanto Region
                            </div>
</div>
</div>
<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Kyoto" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-800">starts at ¥98,000</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="text-xl font-semibold">Kyoto / 京都</h4>
<div className="flex items-center gap-2 mt-1 text-sm text-slate-200">
<i className="w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<span>4.8 (3.1k)</span>
</div>
<div className="flex items-center gap-1 mt-2 text-xs text-slate-300">
<i className="w-3 h-3" data-lucide="map-pin"></i> Kansai Region
                            </div>
</div>
</div>
<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Shibuya" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-800">starts at ¥110,000</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="text-xl font-semibold">Osaka / 大阪</h4>
<div className="flex items-center gap-2 mt-1 text-sm text-slate-200">
<i className="w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<span>4.7 (1.8k)</span>
</div>
<div className="flex items-center gap-1 mt-2 text-xs text-slate-300">
<i className="w-3 h-3" data-lucide="map-pin"></i> Kansai Region
                            </div>
</div>
</div>
<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Hokkaido" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=2094&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-800">starts at ¥145,000</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="text-xl font-semibold">Hokkaido / 北海道</h4>
<div className="flex items-center gap-2 mt-1 text-sm text-slate-200">
<i className="w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<span>4.9 (950)</span>
</div>
<div className="flex items-center gap-1 mt-2 text-xs text-slate-300">
<i className="w-3 h-3" data-lucide="map-pin"></i> Northern Region
                            </div>
</div>
</div>
</div>
<div className="mt-8">
<button className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                        View more locations
                     </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-slate-900 rounded-3xl p-8 flex flex-col justify-between text-white shadow-2xl shadow-slate-200 min-h-[400px]">
<div>
<h3 className="text-3xl font-semibold tracking-tight">Tour Packages <br/><span className="text-lg font-normal text-slate-400">ツアーパッケージ</span></h3>
<p className="mt-4 text-slate-300 text-lg leading-relaxed">
                            Affordable, customizable, and unforgettable adventures across the archipelago.
                        </p>
</div>
<button className="w-fit bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
                        Browse all packages
                    </button>
</div>
<div className="relative group rounded-3xl overflow-hidden min-h-[400px]">
<img alt="Temple" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
<i className="w-5 h-5" data-lucide="camera"></i>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h4 className="text-xl font-semibold text-white">Classic Golden Route</h4>
<p className="text-slate-300 text-sm mt-2 line-clamp-2">Experience the perfect blend of modern Tokyo and traditional Kyoto in 7 days.</p>
<div className="mt-4 flex gap-2">
<span className="text-xs bg-white/20 backdrop-blur text-white px-2 py-1 rounded">7 Days</span>
<span className="text-xs bg-white/20 backdrop-blur text-white px-2 py-1 rounded">Guided</span>
</div>
</div>
</div>
<div className="relative group rounded-3xl overflow-hidden min-h-[400px]">
<img alt="Cherry Blossom" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
<i className="w-5 h-5" data-lucide="utensils"></i>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h4 className="text-xl font-semibold text-white">Culinary Deep Dive</h4>
<p className="text-slate-300 text-sm mt-2 line-clamp-2">From street food in Osaka to Kaiseki in Kanazawa. A foodies dream trip.</p>
<div className="mt-4 flex gap-2">
<span className="text-xs bg-white/20 backdrop-blur text-white px-2 py-1 rounded">10 Days</span>
<span className="text-xs bg-white/20 backdrop-blur text-white px-2 py-1 rounded">Food</span>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 pb-20 pt-10 border-t border-slate-100">
<h4 className="text-xl font-semibold text-slate-900 mb-8">Booking made as easy as 1-2-3.</h4>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 font-semibold">1</div>
<div>
<div className="font-medium text-slate-900">Pick Destination</div>
<div className="text-sm text-slate-500">目的地を選ぶ</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 font-semibold">2</div>
<div>
<div className="font-medium text-slate-900">Customize Tour</div>
<div className="text-sm text-slate-500">ツアーをカスタマイズ</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 font-semibold">3</div>
<div>
<div className="font-medium text-slate-900">Confirm &amp; Travel</div>
<div className="text-sm text-slate-500">予約確定・出発</div>
</div>
</div>
</div>
</div>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-950">
<i className="w-5 h-5" data-lucide="mountain-snow"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">Just Nihon</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                            Your trusted partner for authentic Japanese travel experiences. We bridge the gap between cultures.
                        </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>

<div>
<h5 className="text-white font-medium mb-4">Explore</h5>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">All Destinations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tour Packages</a></li>
<li><a className="hover:text-white transition-colors" href="#">Travel Guides / ガイド</a></li>
<li><a className="hover:text-white transition-colors" href="#">JR Pass Info</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-medium mb-4">Company</h5>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers / 採用情報</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Support</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-medium mb-4">Stay Updated</h5>
<p className="text-sm mb-4">Get the latest travel tips and hidden gem alerts.</p>
<form className="flex flex-col gap-2">
<input className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-700 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-white text-slate-950 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors" type="button">Subscribe</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<div>© 2024 Just Nihon Travel KK. All rights reserved.</div>
<div className="flex gap-6 items-center">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors text-slate-600" href="javascript:void(0)" onclick="toggleView('view-admin-login')">Staff Login</a>
</div>
</div>
</div>
</footer>
</div>

<div className="hidden min-h-screen bg-slate-50 flex items-center justify-center p-6 fade-in" id="view-admin-login">
<div className="w-full max-w-md">
<div className="text-center mb-8">
<div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white mx-auto shadow-lg shadow-indigo-500/20">
<i className="w-6 h-6" data-lucide="mountain-snow"></i>
</div>
<h2 className="mt-4 text-2xl font-semibold text-slate-900 tracking-tight">Staff Portal</h2>
<p className="mt-2 text-sm text-slate-500">Sign in to manage bookings and tours</p>
</div>
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 p-8">
<form className="space-y-4" onsubmit="event.preventDefault(); toggleView('view-admin-dashboard');">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-slate-900 placeholder:text-slate-400" type="email" value="admin@justnihon.com"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Password</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-slate-900" type="password" value="password123"/>
</div>
<div className="flex items-center justify-between text-sm">
<label className="flex items-center gap-2 text-slate-500 cursor-pointer">
<input className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<span>Remember me</span>
</label>
<a className="text-indigo-600 hover:text-indigo-500 font-medium" href="#">Forgot?</a>
</div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200" type="submit">
                        Sign In
                    </button>
</form>
</div>
<div className="mt-8 text-center">
<a className="text-sm text-slate-400 hover:text-slate-600 flex items-center justify-center gap-2 transition-colors" href="javascript:void(0)" onclick="toggleView('view-public')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Website
                </a>
</div>
</div>
</div>

<div className="hidden min-h-screen bg-slate-50 flex fade-in" id="view-admin-dashboard">

<aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col fixed inset-y-0 z-50">
<div className="p-6 flex items-center gap-2 border-b border-slate-50">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="mountain-snow"></i>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">Just Nihon</span>
</div>
<div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto no-scrollbar">
<div className="text-xs font-semibold text-slate-400 px-3 mb-2 uppercase tracking-wider">Overview</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-lg" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i> Bookings
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users"></i> Travelers
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="map"></i> Tours
                </a>
<div className="text-xs font-semibold text-slate-400 px-3 mb-2 mt-6 uppercase tracking-wider">Management</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i> Invoices
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings"></i> Settings
                </a>
</div>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
<img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Admin+User&amp;background=0f172a&amp;color=fff"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Kenji T.</p>
<p className="text-xs text-slate-500 truncate">Administrator</p>
</div>
<button className="text-slate-400 hover:text-slate-600" onclick="toggleView('view-public')"><i className="w-4 h-4" data-lucide="log-out"></i></button>
</div>
</div>
</aside>

<main className="flex-1 md:ml-64 p-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Dashboard</h1>
<p className="text-sm text-slate-500 mt-1">Welcome back, here's what's happening today.</p>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i> Create Booking
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="text-sm font-medium text-slate-500">Total Revenue (Month)</div>
<div className="p-2 bg-green-50 text-green-600 rounded-lg"><i className="w-4 h-4" data-lucide="japanese-yen"></i></div>
</div>
<div className="text-3xl font-semibold text-slate-900">¥4,250,000</div>
<div className="text-xs text-green-600 mt-2 flex items-center font-medium">
<i className="w-3 h-3 mr-1" data-lucide="trending-up"></i> +12.5% from last month
                    </div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="text-sm font-medium text-slate-500">Active Bookings</div>
<div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><i className="w-4 h-4" data-lucide="calendar-check"></i></div>
</div>
<div className="text-3xl font-semibold text-slate-900">42</div>
<div className="text-xs text-indigo-600 mt-2 flex items-center font-medium">
<i className="w-3 h-3 mr-1" data-lucide="users"></i> 8 arriving this week
                    </div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="text-sm font-medium text-slate-500">Pending Inquiries</div>
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><i className="w-4 h-4" data-lucide="mail"></i></div>
</div>
<div className="text-3xl font-semibold text-slate-900">15</div>
<div className="text-xs text-orange-600 mt-2 flex items-center font-medium">
<i className="w-3 h-3 mr-1" data-lucide="clock"></i> Needs attention
                    </div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
<h3 className="font-semibold text-slate-900">Recent Bookings</h3>
<button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-slate-500 uppercase bg-slate-50/50 border-b border-slate-100">
<tr>
<th className="px-6 py-3 font-medium">Customer</th>
<th className="px-6 py-3 font-medium">Package</th>
<th className="px-6 py-3 font-medium">Dates</th>
<th className="px-6 py-3 font-medium">Amount</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">Sarah Johnson</td>
<td className="px-6 py-4 text-slate-600">Golden Route (7 Days)</td>
<td className="px-6 py-4 text-slate-500">Apr 10 - Apr 17</td>
<td className="px-6 py-4 font-medium text-slate-900">¥240,000</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Confirmed</span></td>
<td className="px-6 py-4 text-right"><button className="text-slate-400 hover:text-slate-600"><i className="w-4 h-4 ml-auto" data-lucide="more-horizontal"></i></button></td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">Michael Chen</td>
<td className="px-6 py-4 text-slate-600">Hokkaido Ski</td>
<td className="px-6 py-4 text-slate-500">Feb 15 - Feb 20</td>
<td className="px-6 py-4 font-medium text-slate-900">¥180,000</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Pending</span></td>
<td className="px-6 py-4 text-right"><button className="text-slate-400 hover:text-slate-600"><i className="w-4 h-4 ml-auto" data-lucide="more-horizontal"></i></button></td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">Emma Watson</td>
<td className="px-6 py-4 text-slate-600">Kyoto Private Tour</td>
<td className="px-6 py-4 text-slate-500">May 01 - May 03</td>
<td className="px-6 py-4 font-medium text-slate-900">¥125,000</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Confirmed</span></td>
<td className="px-6 py-4 text-right"><button className="text-slate-400 hover:text-slate-600"><i className="w-4 h-4 ml-auto" data-lucide="more-horizontal"></i></button></td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">Liam Smith</td>
<td className="px-6 py-4 text-slate-600">Tokyo Food Walk</td>
<td className="px-6 py-4 text-slate-500">Mar 12</td>
<td className="px-6 py-4 font-medium text-slate-900">¥15,000</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">Completed</span></td>
<td className="px-6 py-4 text-right"><button className="text-slate-400 hover:text-slate-600"><i className="w-4 h-4 ml-auto" data-lucide="more-horizontal"></i></button></td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>


    </>
  );
}
