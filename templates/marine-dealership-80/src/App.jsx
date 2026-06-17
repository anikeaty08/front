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
      

<div className="bg-slate-900 text-slate-400 text-xs border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
<span className="hidden sm:inline font-medium">Connect With Us</span>
<div className="flex items-center gap-6 ml-auto sm:ml-0">
<a className="hover:text-white transition-colors flex items-center gap-2" href="tel:951-928-4180">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
<span>951-928-4180</span>
</a>
<span className="text-slate-700">|</span>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-md group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="lucide:anchor" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-semibold tracking-tighter leading-none text-sm uppercase">Inland</span>
<span className="text-slate-500 font-medium tracking-tight text-[10px] uppercase">Auto &amp; Boat</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="text-slate-900" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">Inventory</a>
<a className="hover:text-slate-900 transition-colors" href="#">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#">About Us</a>
<a className="hover:text-slate-900 transition-colors" href="#">We Buy Boats!</a>
</div>
<div className="hidden md:block">
<a className="text-xs font-semibold bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-all shadow-sm" href="#">
                    Contact Us
                </a>
</div>

<button className="md:hidden text-slate-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-grow">
<div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-8 space-y-8">

<div className="flex flex-wrap gap-6 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-8">
<div className="flex items-center gap-2 text-slate-800 font-bold tracking-tighter text-lg">
<iconify-icon icon="lucide:waves" strokeWidth="1.5" width="24"></iconify-icon> MERCURY
                        </div>
<div className="h-4 w-px bg-slate-300"></div>
<div className="flex items-center gap-2 text-slate-800 font-bold tracking-tighter text-lg">
                            VOLVO PENTA
                        </div>
<div className="h-4 w-px bg-slate-300"></div>
<div className="flex items-center gap-2 text-slate-800 font-bold tracking-tighter text-lg">
                            YAMAHA
                        </div>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                        Lake Elsinore's Premium Marine Destination
                    </h1>
<p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                        Since 1980, we’ve provided top-rated boat sales, expert marine services, and a vast selection of boat parts and accessories. Inland Boat Center specializes in New &amp; Used boats for sale in Lake Elsinore.
                    </p>
<p className="text-sm text-slate-500 leading-relaxed max-w-2xl border-l-2 border-slate-200 pl-4">
                        Whether you’re looking to buy a wakeboard boat, pontoon, fishing boat, or cruiser, we offer unbeatable prices and financing options. Serving customers nationwide, we make boat ownership easy with trade-ins, repairs, and transport assistance.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200" href="#">
                            View More Boats
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-5 py-2.5 rounded-md text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all" href="#">
<iconify-icon icon="lucide:clipboard-check" strokeWidth="1.5" width="16"></iconify-icon>
                            Need a marine survey?
                        </a>
</div>
</div>

<div className="lg:col-span-4 space-y-6">
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-2 mb-6 text-slate-900">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="18"></iconify-icon>
<h3 className="font-semibold tracking-tight">Business Hours</h3>
</div>
<ul className="space-y-3 text-sm">
<li className="flex justify-between">
<span className="text-slate-500">Monday</span>
<span className="text-slate-900 font-medium">8am - 5pm</span>
</li>
<li className="flex justify-between">
<span className="text-slate-500">Tuesday</span>
<span className="text-slate-900 font-medium">8am - 5pm</span>
</li>
<li className="flex justify-between">
<span className="text-slate-500">Wednesday</span>
<span className="text-slate-900 font-medium">8am - 5pm</span>
</li>
<li className="flex justify-between">
<span className="text-slate-500">Thursday</span>
<span className="text-slate-900 font-medium">8am - 5pm</span>
</li>
<li className="flex justify-between">
<span className="text-slate-500">Friday</span>
<span className="text-slate-900 font-medium">8am - 5pm</span>
</li>
<li className="flex justify-between">
<span className="text-slate-500">Saturday</span>
<span className="text-slate-900 font-medium">8am - 5pm</span>
</li>
<li className="flex justify-between pt-3 border-t border-slate-100">
<span className="text-slate-500">Sunday</span>
<span className="text-slate-900 font-medium">11am - 5pm</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Featured Boats</h2>
<p className="text-sm text-slate-500 mt-1">Explore our latest arrivals and boat show specials.</p>
</div>
<a className="hidden sm:flex text-sm text-blue-600 font-medium hover:text-blue-700 items-center gap-1" href="#">
                        View Full Inventory <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<span className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur text-blue-600 text-[10px] font-semibold px-2 py-1 rounded border border-blue-100 shadow-sm uppercase tracking-wide">
                                Boat Show Pricing!
                            </span>

<img alt="Black 2024 Manitou Pontoon with Tower" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/800x600/0f172a/f8fafc?text=2024+Manitou+Black+Edition"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="font-medium text-slate-900 truncate">2024 Manitou</h3>
<p className="text-sm text-slate-500 mb-3">23 XT RFXW Black Edition</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">$140,500</span>
<span className="text-[10px] text-slate-400 flex items-center gap-1">
<iconify-icon icon="lucide:map-pin" width="10"></iconify-icon> CA
                                </span>
</div>
</div>
</div>

<div className="group flex flex-col border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<span className="absolute top-3 left-3 z-10 bg-slate-900/90 backdrop-blur text-white text-[10px] font-semibold px-2 py-1 rounded shadow-sm uppercase tracking-wide">
                                Bold &amp; Powerful
                            </span>
<img alt="Center Console" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="font-medium text-slate-900 truncate">2022 Sportsman</h3>
<p className="text-sm text-slate-500 mb-3">Heritage 241 Center Console</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">$82,500</span>
<span className="text-[10px] text-slate-400 flex items-center gap-1">
<iconify-icon icon="lucide:map-pin" width="10"></iconify-icon> CA
                                </span>
</div>
</div>
</div>

<div className="group flex flex-col border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<span className="absolute top-3 left-3 z-10 bg-teal-600/90 backdrop-blur text-white text-[10px] font-semibold px-2 py-1 rounded shadow-sm uppercase tracking-wide">
                                Wake Heaven
                            </span>
<img alt="Wake Boat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="font-medium text-slate-900 truncate">2015 Centurion</h3>
<p className="text-sm text-slate-500 mb-3">Enzo FS33</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">$67,500</span>
<span className="text-[10px] text-slate-400 flex items-center gap-1">
<iconify-icon icon="lucide:map-pin" width="10"></iconify-icon> CA
                                </span>
</div>
</div>
</div>

<div className="group flex flex-col border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<span className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur text-slate-900 text-[10px] font-semibold px-2 py-1 rounded border border-slate-200 shadow-sm uppercase tracking-wide">
                                New Arrival
                            </span>
<img alt="Chris Craft" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="font-medium text-slate-900 truncate">2013 Chris-Craft</h3>
<p className="text-sm text-slate-500 mb-3">Launch 22</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">$59,500</span>
<span className="text-[10px] text-slate-400 flex items-center gap-1">
<iconify-icon icon="lucide:map-pin" width="10"></iconify-icon> CA
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="space-y-4">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="bg-white text-slate-900 w-6 h-6 flex items-center justify-center rounded-sm">
<iconify-icon icon="lucide:anchor" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white font-semibold tracking-tighter leading-none text-xs uppercase">Inland</span>
<span className="text-slate-500 font-medium tracking-tight text-[8px] uppercase">Auto &amp; Boat</span>
</div>
</a>
<div className="flex flex-col gap-2">
<p>31700 Grape St.</p>
<p>Lake Elsinore, California, USA</p>
<p>92532</p>
</div>
<a className="block text-white hover:text-blue-400 transition-colors mt-2" href="tel:951-928-4180">
                        951-928-4180
                    </a>
</div>

<div>
<h4 className="text-white font-medium mb-4">Site Map</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">Inventory</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4 opacity-0 md:opacity-100">More</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">We Buy Boats!</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4">Stay Connected</h4>
<p className="text-xs mb-4 text-slate-500">Subscribe for the latest arrivals and marine news.</p>
<div className="flex gap-2">
<input className="bg-slate-800 border-none rounded px-3 py-2 w-full text-white placeholder:text-slate-600 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Email address" type="email"/>
<button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-500 transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2024 Inland Boat Center. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-400" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="hover:text-slate-400" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="hover:text-slate-400" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
