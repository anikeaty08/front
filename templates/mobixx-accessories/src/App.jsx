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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-black font-semibold tracking-tighter">
                    MA
                </div>
<span className="group-hover:text-neutral-200 transition-colors font-medium text-white tracking-tight">MOBIXX</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#parts">Parts</a>
<a className="hover:text-white transition-colors" href="#accessories">Accessories</a>
<a className="hover:text-white transition-colors" href="#repair">Repair Service</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon className="" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="relative group cursor-pointer">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
</div>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
<div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Now offering same-day screen repairs
                </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tighter">
                    Revive. Protect. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Upgrade.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-md leading-relaxed">
                    Premium spare parts for DIY enthusiasts, curated accessories for everyday carry, and expert repair services delivered to your door.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="h-12 px-8 rounded-full bg-white text-black font-medium flex items-center justify-center hover:bg-neutral-200 transition-colors" href="#shop">
                        Shop Components
                    </a>
<a className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm" href="#repair">
                        Book Repair
                    </a>
</div>
</div>
<div className="relative">
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10">

<img alt="Mobile Internals" className="w-full h-[500px] object-cover opacity-80 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1592434134753-a70baf7979d5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-green-400">
<iconify-icon icon="lucide:check-circle" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">iPhone 14 Pro Max</p>
<p className="text-xs text-neutral-400">Display Replacement Kit</p>
</div>
</div>
<span className="text-sm font-medium text-white">$129.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5" id="parts">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight">Our Ecosystem</h2>
<p className="text-neutral-400 mt-2">Everything your device needs in one place.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300" href="#">
                    View all categories <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-2 relative group rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="Spare Parts" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-0 p-8">
<div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:cpu" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight">Genuine Parts</h3>
<p className="text-neutral-400 mt-2 max-w-md text-sm">OEM grade screens, batteries, and logic boards for Apple, Samsung, and Pixel devices. Includes toolkit.</p>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="flex-1 relative group rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="Accessories" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-0 p-6">
<h3 className="text-xl font-medium text-white tracking-tight">Accessories</h3>
<p className="text-neutral-400 text-xs mt-1">Cases, Chargers &amp; MagSafe.</p>
</div>
</div>

<div className="flex-1 relative group rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="Repair" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-0 p-6 flex justify-between items-end">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">Repair Labs</h3>
<p className="text-neutral-400 text-xs mt-1">Expert technicians.</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="accessories">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12">Trending Essentials</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group">
<div className="relative aspect-square rounded-xl bg-neutral-900 border border-white/5 overflow-hidden mb-4">
<div className="absolute top-3 left-3 bg-indigo-500/20 text-indigo-300 text-[10px] font-semibold px-2 py-1 rounded border border-indigo-500/20">NEW</div>
<img alt="Case" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-white">Carbon Fiber Case</h3>
<p className="text-xs text-neutral-500 mt-1">iPhone 15 Pro</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-sm text-neutral-200">$45.00</span>
</div>
</div>

<div className="group">
<div className="relative aspect-square rounded-xl bg-neutral-900 border border-white/5 overflow-hidden mb-4">
<img alt="Charger" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1585338447937-7082f8fc763d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-white">GaN Fast Charger 65W</h3>
<p className="text-xs text-neutral-500 mt-1">Universal USB-C</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-sm text-neutral-200">$39.00</span>
<span className="text-xs text-neutral-600 line-through">$59.00</span>
</div>
</div>

<div className="group">
<div className="relative aspect-square rounded-xl bg-neutral-900 border border-white/5 overflow-hidden mb-4">
<img alt="Screen" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute bottom-3 right-3 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-white">OLED Replacement Kit</h3>
<p className="text-xs text-neutral-500 mt-1">Samsung S23</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-sm text-neutral-200">$189.00</span>
</div>
</div>

<div className="group">
<div className="relative aspect-square rounded-xl bg-neutral-900 border border-white/5 overflow-hidden mb-4">
<img alt="Headphones" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-white">Wireless Buds Pro</h3>
<p className="text-xs text-neutral-500 mt-1">Noise Cancelling</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-sm text-neutral-200">$129.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 relative" id="repair">
<div className="absolute inset-0 bg-neutral-900/30"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<span className="text-indigo-400 font-medium tracking-tight text-sm uppercase">Concierge Service</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mt-4 mb-6">Expert Repair. <br/> Without the wait.</h2>
<p className="text-neutral-400 max-w-lg mx-auto mb-10">Select your device and issue. We'll send a courier to collect your phone, repair it in our clean room, and return it the same day.</p>
<div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl text-left">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Device Model</label>
<div className="relative">
<select className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-indigo-500 transition-colors text-sm">
<option>Select Model...</option>
<option>iPhone 15 Pro Max</option>
<option>iPhone 14 Series</option>
<option>Samsung S24 Ultra</option>
<option>Google Pixel 8</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-neutral-500 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Problem Type</label>
<div className="relative">
<select className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-indigo-500 transition-colors text-sm">
<option>Select Issue...</option>
<option>Cracked Screen</option>
<option>Battery Replacement</option>
<option>Water Damage</option>
<option>Charging Port</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-neutral-500 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-6">
<div className="flex items-center gap-4 text-sm text-neutral-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="lucide:shield-check"></iconify-icon>
<span>1 Year Warranty</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="lucide:clock"></iconify-icon>
<span>Avg. 2h Turnaround</span>
</div>
</div>
<button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                        Get Estimate <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="flex flex-col items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-white border border-white/10">
<iconify-icon icon="lucide:truck" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Global Shipping</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Free delivery on orders over $100. Tracked, insured, and delivered in eco-friendly packaging.</p>
</div>
<div className="flex flex-col items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-white border border-white/10">
<iconify-icon icon="lucide:award" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Genuine Parts</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Sourced directly from OEM manufacturers. Rigorously tested before shipping to ensure quality.</p>
</div>
<div className="flex flex-col items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-white border border-white/10">
<iconify-icon icon="lucide:headphones" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">24/7 Tech Support</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Stuck on a repair? Video chat with our certified technicians to guide you through the process.</p>
</div>
</div>
</section>

<footer className="bg-neutral-950 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black font-semibold text-xs tracking-tighter">MA</div>
<span className="text-lg font-medium text-white tracking-tight" style={{}}>MOBIXX</span>
</a>
<p className="text-neutral-500 text-sm max-w-xs">
                        Empowering you to fix, protect, and enhance the technology you use every day.
                    </p>
</div>
<div className="">
<h4 className="text-white font-medium mb-4 text-sm">Shop</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">Parts</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">Tools</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">Accessories</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">New Arrivals</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Book a Repair</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Trade-In</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Business</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2024 Mobile Accessories Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
