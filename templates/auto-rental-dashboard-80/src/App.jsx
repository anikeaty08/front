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
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-20">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 19h20L12 2zm0 3l7.5 13h-15L12 5z"></path></svg>
</div>
<span className="font-bold text-lg tracking-tight leading-none">AUTO<br/><span className="font-normal text-gray-500 text-sm">ULTIMATE</span></span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-sm font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-900 bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="car"></i>
<span className="text-sm font-medium">Vehicles</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="clipboard-list"></i>
<span className="text-sm font-medium">Notes</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="heart"></i>
<span className="text-sm font-medium">Favourites</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="clock"></i>
<span className="text-sm font-medium">Recents</span>
</a>
<div className="pt-6 pb-2">
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="text-sm font-medium">Notifications</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-square"></i>
<span className="text-sm font-medium">Chat</span>
</a>
</div>
</nav>

<div className="p-4 border-t border-gray-100 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="file-text"></i>
<span className="text-sm font-medium">License</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="life-buoy"></i>
<span className="text-sm font-medium">Support</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="log-out"></i>
<span className="text-sm font-medium">Logout</span>
</a>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
<div className="flex items-center gap-6 text-gray-500 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>01:48 PM (UTC -7)</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>San Francisco, US</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-black text-white px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 hover:bg-gray-800 transition">
<i className="w-3 h-3" data-lucide="crown"></i>
                    PRO features
                </button>
<img alt="Profile" className="w-9 h-9 rounded-full border border-gray-200" src="https://i.pravatar.cc/150?img=32"/>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<aside className="w-80 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto">
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-semibold text-gray-900">Filter by</h2>
<button className="text-xs text-gray-400 hover:text-gray-900">Reset all ×</button>
</div>

<div className="mb-8">
<label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">Rental Type</label>
<div className="flex gap-2">
<button className="px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-600 hover:border-gray-400">Any</button>
<button className="px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-600 hover:border-gray-400">Per day</button>
<button className="px-3 py-1.5 border border-gray-900 bg-gray-50 rounded text-sm text-gray-900 font-medium">Per hour</button>
</div>
</div>

<div className="mb-8 flex items-center justify-between">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Available now only</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="peer absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle" name="toggle" type="checkbox"/>
<label className="block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer peer-checked:bg-black peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" htmlFor="toggle"></label>
</div>
</div>

<div className="mb-8 border-b border-gray-100 pb-8">
<div className="flex items-center justify-between mb-4">
<label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Price Range / Hour</label>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-up"></i>
</div>

<div className="flex items-end gap-[2px] h-12 mb-2 px-1">
<div className="w-full bg-gray-100 rounded-t-sm h-2"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-4"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-3"></div>
<div className="w-full bg-gray-800 rounded-t-sm h-5"></div>
<div className="w-full bg-gray-800 rounded-t-sm h-8"></div>
<div className="w-full bg-gray-800 rounded-t-sm h-6"></div>
<div className="w-full bg-gray-800 rounded-t-sm h-10"></div>
<div className="w-full bg-gray-800 rounded-t-sm h-12"></div> 
<div className="w-full bg-gray-800 rounded-t-sm h-7"></div>
<div className="w-full bg-gray-800 rounded-t-sm h-4"></div>
<div className="w-full bg-black rounded-t-sm h-4 relative">
<div className="absolute -top-1 right-0 w-3 h-3 bg-black rounded-full border-2 border-white"></div>
</div> 
<div className="w-full bg-gray-100 rounded-t-sm h-3"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-5"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-2"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-4"></div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center border border-gray-200 rounded px-2 py-1.5 w-full bg-gray-50">
<span className="text-xs text-gray-400 mr-1">FROM</span>
<span className="text-sm font-medium text-gray-900">$19.00</span>
</div>
<div className="flex items-center border border-gray-200 rounded px-2 py-1.5 w-full bg-white">
<span className="text-xs text-gray-400 mr-1">TO</span>
<span className="text-sm font-medium text-gray-900">$98.50</span>
</div>
</div>
</div>

<div className="mb-4 py-2 border-b border-gray-100">
<div className="flex items-center justify-between cursor-pointer">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Car Brand</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</div>
</div>

<div className="mb-4 py-2 border-b border-gray-100">
<div className="flex items-center justify-between cursor-pointer">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Car Model &amp; Year</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</div>
</div>

<div className="mb-8 pt-2">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Body Type</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-up"></i>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-sm text-gray-700">Sedan</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-sm text-gray-700">Wagon</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-sm text-gray-700">Coupe</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-sm text-gray-700">Hatchback</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-sm text-gray-700">Pickup</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-sm text-gray-700">Sport coupe</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-sm text-gray-700">Crossover</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-sm text-gray-700">Van</span>
</label>
</div>
</div>

<div className="mb-8 pt-2 border-t border-gray-100">
<div className="flex items-center justify-between mb-4 mt-4">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Transmission</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-up"></i>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 border border-gray-400 rounded text-sm text-gray-900 bg-white font-medium">Any</button>
<button className="px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-500 hover:border-gray-400">Automatic</button>
<button className="px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-500 hover:border-gray-400">Manual</button>
</div>
</div>

<div className="mb-8 pt-2 border-t border-gray-100">
<div className="flex items-center justify-between mb-4 mt-4">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Fuel Type</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-up"></i>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded" type="checkbox"/>
<span className="text-sm text-gray-700">Gasoline</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded" type="checkbox"/>
<span className="text-sm text-gray-700">Flex Fuel (E85)</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded" type="checkbox"/>
<span className="text-sm text-gray-700">Diesel</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded" type="checkbox"/>
<span className="text-sm text-gray-700">Hybrid</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="custom-checkbox appearance-none h-4 w-4 border border-gray-300 rounded" type="checkbox"/>
<span className="text-sm text-gray-700">Electric</span>
</label>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-gray-50 p-6 md:p-8">

<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">48 vehicles to rent</h1>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm text-gray-600">
<span>Closest to me</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</div>
<button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
<span>Show map</span>
<i className="w-4 h-4" data-lucide="map"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-gray-200 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4 text-xs text-gray-500">
<div className="flex gap-4">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="user"></i> 120m (4 min)</span>
<span className="flex items-center gap-1 text-yellow-500 font-medium"><i className="w-3 h-3 fill-current" data-lucide="star"></i> 4.7 <span className="text-gray-400 font-normal">(109)</span></span>
</div>
<i className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer" data-lucide="heart"></i>
</div>
<div className="h-32 mb-4 flex items-center justify-center">
<img alt="Audi A4" className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="mb-1 flex justify-between items-end">
<div>
<h3 className="font-semibold text-gray-900">Audi A4</h3>
<p className="text-xs text-gray-400">2.0 TFSI Sport (249 hp, Quattro)</p>
</div>
<div className="text-right">
<span className="text-base font-semibold text-gray-900">$24.59</span>
<span className="text-xs text-gray-400"> / hour</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4 text-xs text-gray-500">
<div className="flex gap-4">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="user"></i> 250m (8 min)</span>
<span className="flex items-center gap-1 text-yellow-500 font-medium"><i className="w-3 h-3 fill-current" data-lucide="star"></i> 4.0 <span className="text-gray-400 font-normal">(87)</span></span>
</div>
<i className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer" data-lucide="heart"></i>
</div>
<div className="h-32 mb-4 flex items-center justify-center">
<img alt="Opel Insignia" className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="mb-1 flex justify-between items-end">
<div>
<h3 className="font-semibold text-gray-900">Opel Insignia</h3>
<p className="text-xs text-gray-400">2.0 Turbo Grand Sport (230 hp, AWD)</p>
</div>
<div className="text-right">
<span className="text-base font-semibold text-gray-900">$19.99</span>
<span className="text-xs text-gray-400"> / hour</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4 text-xs text-gray-500">
<div className="flex gap-4">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="user"></i> 180m (5 min)</span>
<span className="flex items-center gap-1 text-yellow-500 font-medium"><i className="w-3 h-3 fill-current" data-lucide="star"></i> 4.9 <span className="text-gray-400 font-normal">(142)</span></span>
</div>
<i className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer" data-lucide="heart"></i>
</div>
<div className="h-32 mb-4 flex items-center justify-center">
<img alt="Mini Countryman" className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="mb-1 flex justify-between items-end">
<div>
<h3 className="font-semibold text-gray-900">Mini Countryman</h3>
<p className="text-xs text-gray-400">Cooper S ALL4 (189 hp, AWD)</p>
</div>
<div className="text-right">
<span className="text-base font-semibold text-gray-900">$28.50</span>
<span className="text-xs text-gray-400"> / hour</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4 text-xs text-gray-500">
<div className="flex gap-4">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="user"></i> 90m (3 min)</span>
<span className="flex items-center gap-1 text-yellow-500 font-medium"><i className="w-3 h-3 fill-current" data-lucide="star"></i> 5.0 <span className="text-gray-400 font-normal">(766)</span></span>
</div>
<i className="w-4 h-4 text-red-500 fill-current cursor-pointer" data-lucide="heart"></i>
</div>
<div className="h-32 mb-4 flex items-center justify-center">
<img alt="Mazda 6" className="h-full object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mb-1 flex justify-between items-end">
<div>
<h3 className="font-semibold text-gray-900">Mazda 6</h3>
<p className="text-xs text-gray-400">2.5 Turbo Premium (250 hp, AWD)</p>
</div>
<div className="text-right">
<span className="text-base font-semibold text-gray-900">$22.99</span>
<span className="text-xs text-gray-400"> / hour</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4 text-xs text-gray-500">
<div className="flex gap-4">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="user"></i> 320m (10 min)</span>
<span className="flex items-center gap-1 text-yellow-500 font-medium"><i className="w-3 h-3 fill-current" data-lucide="star"></i> 4.6 <span className="text-gray-400 font-normal">(64)</span></span>
</div>
<i className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer" data-lucide="heart"></i>
</div>
<div className="h-32 mb-4 flex items-center justify-center">
<img alt="Cadillac Escalade" className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="mb-1 flex justify-between items-end">
<div>
<h3 className="font-semibold text-gray-900">Cadillac Escalade</h3>
<p className="text-xs text-gray-400">6.2L V8 Platinum (420 hp, 4WD)</p>
</div>
<div className="text-right">
<span className="text-base font-semibold text-gray-900">$24.00</span>
<span className="text-xs text-gray-400"> / hour</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4 text-xs text-gray-500">
<div className="flex gap-4">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="user"></i> 140m (5 min)</span>
<span className="flex items-center gap-1 text-yellow-500 font-medium"><i className="w-3 h-3 fill-current" data-lucide="star"></i> 4.7 <span className="text-gray-400 font-normal">(156)</span></span>
</div>
<i className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer" data-lucide="heart"></i>
</div>
<div className="h-32 mb-4 flex items-center justify-center">
<img alt="Ford Focus ST" className="h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="mb-1 flex justify-between items-end">
<div>
<h3 className="font-semibold text-gray-900">Ford Focus ST</h3>
<p className="text-xs text-gray-400">2.3 EcoBoost (280 hp, FWD)</p>
</div>
<div className="text-right">
<span className="text-base font-semibold text-gray-900">$26.75</span>
<span className="text-xs text-gray-400"> / hour</span>
</div>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
