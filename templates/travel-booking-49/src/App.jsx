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
      

<aside className="hidden md:flex flex-col w-64 border-r border-gray-200 bg-white z-20">
<div className="p-6">
<div className="text-xl font-semibold tracking-tighter">TRVL</div>
</div>
<nav className="flex-1 px-4 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-gray-100 rounded-lg text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:home-2-linear"></iconify-icon> Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon> Explore
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:ticket-linear"></iconify-icon> Bookings
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon> Saved
            </a>
</nav>
<div className="p-4 border-t border-gray-200">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon> Settings
            </a>
<div className="mt-4 flex items-center gap-3 px-3 py-2">
<img alt="Profile" className="w-8 h-8 rounded-full border border-gray-200 object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Alex Brown</span>
<span className="text-xs text-gray-500">Pro Member</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-y-auto relative">

<header className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">

<div className="flex items-center gap-3 md:hidden">
<button className="text-gray-500 hover:text-gray-900 focus:outline-none">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<div className="text-xl font-semibold tracking-tighter">TRVL</div>
</div>

<div className="hidden md:flex items-center relative w-96">
<iconify-icon className="absolute left-3 text-gray-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 border border-transparent rounded-lg focus:outline-none focus:border-gray-200 focus:bg-white transition-all placeholder-gray-400" placeholder="Search destinations, flights, hotels..." type="text"/>
</div>

<div className="flex items-center gap-4">
<button className="text-gray-500 hover:text-gray-900 relative focus:outline-none transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-gray-900 border-2 border-white rounded-full"></span>
</button>
<button className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
</div>
</header>

<div className="p-6 max-w-6xl mx-auto w-full space-y-10">

<div className="space-y-2">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Where to next, Alex?</h1>
<p className="text-sm font-medium text-gray-500">Discover exclusive deals and seamless bookings for your next adventure.</p>
</div>

<div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-3 sm:p-5">

<div className="flex items-center gap-2 mb-5 border-b border-gray-100 pb-3 px-1">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg shadow-sm transition-transform active:scale-95">
<iconify-icon className="text-lg" icon="solar:plane-linear"></iconify-icon> Flights
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
<iconify-icon className="text-lg" icon="solar:buildings-linear"></iconify-icon> Stays
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
<iconify-icon className="text-lg" icon="solar:car-linear"></iconify-icon> Cars
                    </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 px-1 pb-2">

<div className="col-span-1 border border-gray-200 rounded-xl p-3 hover:border-gray-300 transition-colors focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 group">
<label className="block text-xs font-medium text-gray-500 mb-1 group-focus-within:text-gray-900 transition-colors">From</label>
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-focus-within:text-gray-900 transition-colors" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full text-sm font-medium text-gray-900 bg-transparent focus:outline-none placeholder-gray-400 truncate" placeholder="City or airport" type="text" value="San Francisco (SFO)"/>
</div>
</div>

<div className="col-span-1 border border-gray-200 rounded-xl p-3 hover:border-gray-300 transition-colors focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 group">
<label className="block text-xs font-medium text-gray-500 mb-1 group-focus-within:text-gray-900 transition-colors">To</label>
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-focus-within:text-gray-900 transition-colors" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full text-sm font-medium text-gray-900 bg-transparent focus:outline-none placeholder-gray-400 truncate" placeholder="Where are you going?" type="text"/>
</div>
</div>

<div className="col-span-1 border border-gray-200 rounded-xl p-3 hover:border-gray-300 transition-colors focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 group">
<label className="block text-xs font-medium text-gray-500 mb-1 group-focus-within:text-gray-900 transition-colors">Departure</label>
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-focus-within:text-gray-900 transition-colors" icon="solar:calendar-linear"></iconify-icon>
<input className="w-full text-sm font-medium text-gray-900 bg-transparent focus:outline-none placeholder-gray-400 truncate" type="text" value="Oct 24, 2023"/>
</div>
</div>

<div className="col-span-1 border border-gray-200 rounded-xl p-3 hover:border-gray-300 transition-colors focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 group">
<label className="block text-xs font-medium text-gray-500 mb-1 group-focus-within:text-gray-900 transition-colors">Return</label>
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-focus-within:text-gray-900 transition-colors" icon="solar:calendar-linear"></iconify-icon>
<input className="w-full text-sm font-medium text-gray-900 bg-transparent focus:outline-none placeholder-gray-400 truncate" type="text" value="Nov 02, 2023"/>
</div>
</div>

<div className="col-span-1 border border-gray-200 rounded-xl p-3 hover:border-gray-300 transition-colors cursor-pointer group">
<label className="block text-xs font-medium text-gray-500 mb-1 group-hover:text-gray-900 transition-colors">Travelers</label>
<div className="flex items-center gap-2 justify-between">
<div className="flex items-center gap-2 overflow-hidden">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900 truncate">2 Adults, Economy</span>
</div>
<iconify-icon className="text-gray-400 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex justify-end px-1 pt-4">
<button className="w-full sm:w-auto px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2">
                        Search Flights <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-4">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Upcoming Trips</h2>
<div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm hover:border-gray-300 transition-colors group cursor-pointer">
<div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-2xl text-gray-900" icon="solar:plane-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 mb-1.5">
<span className="text-xs font-medium px-2 py-0.5 bg-gray-100 text-gray-900 border border-gray-200 rounded-md">Confirmed</span>
<span className="text-xs font-medium text-gray-500">Booking #TRV-892K</span>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight truncate">San Francisco (SFO) <span className="text-gray-400 mx-1">→</span> New York (JFK)</h3>
<p className="text-sm text-gray-500 mt-1">Delta Airlines • Mon, Aug 12 • 08:30 AM</p>
</div>
<div className="w-full sm:w-auto mt-2 sm:mt-0 shrink-0">
<button className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-sm font-medium text-gray-900 rounded-lg transition-colors">
                                View Details
                            </button>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-4">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Travel Wallet</h2>
<div className="bg-gray-900 rounded-2xl p-6 text-white shadow-sm relative overflow-hidden h-[124px] flex flex-col justify-between">

<div className="absolute -right-4 -top-10 opacity-10 pointer-events-none">
<iconify-icon icon="solar:wallet-linear" style={{fontSize: '9rem'}}></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-400 mb-1 uppercase tracking-widest">Available Miles</p>
<p className="text-3xl font-semibold tracking-tight">42,500</p>
</div>
<div className="flex items-center justify-between z-10">
<span className="text-sm font-medium text-gray-300">SkyTeam Alliance</span>
<button className="text-xs font-medium px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-md transition-colors border border-white/10">
                                Redeem
                            </button>
</div>
</div>
</div>
</div>

<div className="space-y-4 pb-12">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Trending Destinations</h2>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors" href="#">
                        See all <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-3 bg-gray-200">
<img alt="Paris" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all focus:outline-none">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start px-1">
<div>
<h3 className="text-base font-medium text-gray-900 tracking-tight">Paris, France</h3>
<p className="text-sm text-gray-500 mt-0.5">Oct 24 - Nov 02</p>
</div>
<div className="text-right">
<p className="text-base font-semibold text-gray-900">$584</p>
<div className="flex items-center justify-end gap-1 text-xs font-medium text-gray-500 mt-0.5">
<iconify-icon className="text-gray-900" icon="solar:star-linear"></iconify-icon> 4.8
                                </div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-3 bg-gray-200">
<img alt="Tokyo" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all focus:outline-none">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start px-1">
<div>
<h3 className="text-base font-medium text-gray-900 tracking-tight">Tokyo, Japan</h3>
<p className="text-sm text-gray-500 mt-0.5">Nov 10 - Nov 24</p>
</div>
<div className="text-right">
<p className="text-base font-semibold text-gray-900">$892</p>
<div className="flex items-center justify-end gap-1 text-xs font-medium text-gray-500 mt-0.5">
<iconify-icon className="text-gray-900" icon="solar:star-linear"></iconify-icon> 4.9
                                </div>
</div>
</div>
</div>

<div className="group cursor-pointer hidden sm:block">
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-3 bg-gray-200">
<img alt="Santorini" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all focus:outline-none">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start px-1">
<div>
<h3 className="text-base font-medium text-gray-900 tracking-tight">Santorini, Greece</h3>
<p className="text-sm text-gray-500 mt-0.5">Sep 15 - Sep 22</p>
</div>
<div className="text-right">
<p className="text-base font-semibold text-gray-900">$720</p>
<div className="flex items-center justify-end gap-1 text-xs font-medium text-gray-500 mt-0.5">
<iconify-icon className="text-gray-900" icon="solar:star-linear"></iconify-icon> 4.7
                                </div>
</div>
</div>
</div>

<div className="group cursor-pointer hidden lg:block">
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-3 bg-gray-200">
<img alt="Bali" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all focus:outline-none">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start px-1">
<div>
<h3 className="text-base font-medium text-gray-900 tracking-tight">Bali, Indonesia</h3>
<p className="text-sm text-gray-500 mt-0.5">Dec 01 - Dec 14</p>
</div>
<div className="text-right">
<p className="text-base font-semibold text-gray-900">$450</p>
<div className="flex items-center justify-end gap-1 text-xs font-medium text-gray-500 mt-0.5">
<iconify-icon className="text-gray-900" icon="solar:star-linear"></iconify-icon> 4.9
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
