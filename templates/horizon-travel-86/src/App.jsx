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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f1f22',
}
}
}
}
}

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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-height="14" data-icon="lucide:compass" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tight">HORIZON</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Destinations</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Flights</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Experiences</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Membership</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-xs font-medium text-zinc-500 hover:text-zinc-900">Sign in</button>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-sm">
                    Book Trip
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="mx-auto max-w-6xl relative z-10 grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-zinc-600">New season bookings open</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-zinc-900">
                    Curated journeys<br/>
<span className="text-zinc-400">for the modern soul.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-md leading-relaxed">
                    Experience travel designed with precision. We curate hotels, flights, and experiences that align with your aesthetic and pace.
                </p>
<div className="flex items-center gap-6 pt-4">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-600">+2k</div>
</div>
<span className="text-sm font-medium text-zinc-600">Happy travelers this month</span>
</div>
</div>

<div className="relative">

<div className="absolute -top-12 -right-12 w-64 h-64 bg-zinc-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute -bottom-8 -left-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

<div className="relative bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50 rounded-2xl p-6 backdrop-blur-xl">

<div className="flex border-b border-zinc-100 pb-4 mb-6 gap-6">
<button className="text-sm font-medium text-zinc-900 border-b-2 border-zinc-900 pb-4 -mb-4.5">Stays</button>
<button className="text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">Flights</button>
<button className="text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">Cars</button>
</div>

<div className="space-y-4">
<div className="group relative">
<label className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 mb-1 block">Location</label>
<div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 bg-zinc-50 group-focus-within:border-zinc-400 group-focus-within:bg-white transition-all">
<span className="iconify text-zinc-400" data-icon="lucide:map-pin" data-width="18"></span>
<input className="bg-transparent w-full outline-none text-sm font-medium placeholder:text-zinc-400 text-zinc-900" placeholder="Where to?" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="group relative">
<label className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 mb-1 block">Check-in</label>
<div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 bg-zinc-50 group-focus-within:border-zinc-400 group-focus-within:bg-white transition-all">
<span className="iconify text-zinc-400" data-icon="lucide:calendar" data-width="18"></span>
<input className="bg-transparent w-full outline-none text-sm font-medium placeholder:text-zinc-400 text-zinc-900" placeholder="Add date" type="text"/>
</div>
</div>
<div className="group relative">
<label className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 mb-1 block">Guests</label>
<div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 bg-zinc-50 group-focus-within:border-zinc-400 group-focus-within:bg-white transition-all">
<span className="iconify text-zinc-400" data-icon="lucide:users" data-width="18"></span>
<input className="bg-transparent w-full outline-none text-sm font-medium placeholder:text-zinc-400 text-zinc-900" placeholder="2 guests" type="number"/>
</div>
</div>
</div>

<div className="flex items-center justify-between py-2">
<span className="text-xs font-medium text-zinc-500">Add flight connection</span>
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
</div>
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm py-3.5 rounded-lg shadow-lg shadow-zinc-900/10 flex items-center justify-center gap-2 transition-all">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
                            Search Availability
                        </button>
</div>
</div>
</div>
</div>
</header>

<section className="py-20 px-6 border-t border-zinc-200 bg-white">
<div className="mx-auto max-w-6xl">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Trending Destinations</h2>
<p className="text-sm text-zinc-500 mt-2">Places capturing the imagination of our community.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                    View all <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-zinc-100 aspect-[4/3]">
<img alt="Swiss Alps" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-zinc-900">
                            Popular
                        </div>
</div>
<div className="pt-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold text-zinc-900 text-sm tracking-tight">Zermatt, Switzerland</h3>
<p className="text-xs text-zinc-500 mt-1">Alpine serenity &amp; skiing</p>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-900">
<span className="iconify text-yellow-500" data-icon="lucide:star" data-width="12"></span> 4.9
                            </div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3">
<span className="text-xs text-zinc-400">7 days from</span>
<span className="text-sm font-semibold text-zinc-900">$2,400</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-zinc-100 aspect-[4/3]">
<img alt="Cinque Terre" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="pt-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold text-zinc-900 text-sm tracking-tight">Cinque Terre, Italy</h3>
<p className="text-xs text-zinc-500 mt-1">Coastal hiking &amp; dining</p>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-900">
<span className="iconify text-yellow-500" data-icon="lucide:star" data-width="12"></span> 4.8
                            </div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3">
<span className="text-xs text-zinc-400">5 days from</span>
<span className="text-sm font-semibold text-zinc-900">$1,850</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-zinc-100 aspect-[4/3]">
<img alt="Kyoto" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-zinc-900/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-white">
                            New
                        </div>
</div>
<div className="pt-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold text-zinc-900 text-sm tracking-tight">Kyoto, Japan</h3>
<p className="text-xs text-zinc-500 mt-1">Cultural immersion &amp; nature</p>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-900">
<span className="iconify text-yellow-500" data-icon="lucide:star" data-width="12"></span> 5.0
                            </div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3">
<span className="text-xs text-zinc-400">10 days from</span>
<span className="text-sm font-semibold text-zinc-900">$3,200</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
<div className="mx-auto max-w-4xl">
<div className="text-center mb-16">
<span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Design System</span>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mt-3">Smart filters for smarter travel</h2>
<p className="text-sm text-zinc-500 mt-2">Precision controls to fine-tune your itinerary.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h4 className="text-sm font-medium text-zinc-900">Budget Range</h4>
<span className="text-xs text-zinc-500 font-mono">$1.2k - $5k</span>
</div>
<div className="relative h-1 bg-zinc-100 rounded-full mb-6">
<div className="absolute left-[20%] right-[30%] top-0 bottom-0 bg-zinc-900 rounded-full"></div>
<div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-zinc-300 rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
<div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-zinc-300 rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-400 font-medium uppercase tracking-wider">
<span>Economy</span>
<span>Luxury</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<h4 className="text-sm font-medium text-zinc-900 mb-4">Required Amenities</h4>
<div className="space-y-3">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 flex items-center justify-center transition-colors group-hover:border-zinc-400 bg-white">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-xs text-zinc-600 group-hover:text-zinc-900 transition-colors">High-speed WiFi</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 flex items-center justify-center transition-colors group-hover:border-zinc-400 bg-white">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-xs text-zinc-600 group-hover:text-zinc-900 transition-colors">Workspace with view</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 flex items-center justify-center transition-colors group-hover:border-zinc-400 bg-white">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-xs text-zinc-600 group-hover:text-zinc-900 transition-colors">24/7 Concierge</span>
</label>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-t border-zinc-200">
<div className="mx-auto max-w-6xl">
<div className="grid md:grid-cols-3 gap-12">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center">
<span className="iconify text-zinc-900" data-icon="lucide:globe" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Global Access</h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Access to over 2,000 exclusive properties worldwide, vetted for design, comfort, and service quality.
                    </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center">
<span className="iconify text-zinc-900" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Secure Booking</h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Bank-level encryption and travel insurance options integrated directly into your booking flow.
                    </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center">
<span className="iconify text-zinc-900" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Instant Confirmation</h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                        No waiting periods. Real-time availability checks mean your reservation is confirmed instantly.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-12 px-6">
<div className="mx-auto max-w-6xl">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="h-5 w-5 bg-zinc-900 rounded flex items-center justify-center text-white">
<span className="iconify" data-height="12" data-icon="lucide:compass" data-width="12"></span>
</div>
<span className="text-xs font-bold tracking-tight text-zinc-900">HORIZON</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
                        Redefining modern travel through design, technology, and curation.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Flights</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Stays</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Car Rental</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Mobile App</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Legal</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-200">
<span className="text-[10px] text-zinc-400">© 2024 Horizon Inc. All rights reserved.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-[10px] text-zinc-400 hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="text-[10px] text-zinc-400 hover:text-zinc-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
