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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-slate-900 tracking-tighter" style={{}}>197-03 McLaughlin Ave</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#property">What's Special</a>
<a className="hover:text-slate-900 transition-colors" href="#details">Facts &amp; Features</a>
<a className="hover:text-slate-900 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>

<header className="relative w-full h-[85vh] min-h-[600px] flex items-end">
<div className="absolute inset-0 z-0">
<img alt="197-03 McLaughlin Ave" className="w-full h-full object-cover" src="https://photos.zillowstatic.com/fp/8c8174b27401cf048a97417889d834dd-cc_ft_576.jpg"/>
</div>
<div className="md:pb-16 w-full max-w-7xl z-10 border-[#faf9f9] mr-auto ml-auto pr-6 pb-12 pl-6 relative">
<div className="animate-fade-in-up max-w-4xl">
<div className="flex items-center gap-3 text-white/90 mb-6">
<span className="px-2.5 py-1 bg-white/10 border border-white/20 rounded text-[10px] backdrop-blur-md uppercase tracking-widest font-semibold">Resale</span>
<span className="text-[10px] tracking-widest uppercase font-semibold">Hollis, NY 11423</span>
</div>
<h1 className="md:text-7xl leading-[1] text-5xl font-medium text-white tracking-tight mb-8">197-03<br/>McLaughlin Ave</h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white bg-neutral-900/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
<div>
<p className="text-[11px] uppercase font-semibold text-neutral-300 tracking-widest mb-2">Living Area</p>
<p className="text-2xl font-normal tracking-tight text-white">1,316 Sq Ft</p>
</div>
<div>
<p className="text-[11px] uppercase font-semibold text-neutral-300 tracking-widest mb-2">Layout</p>
<p className="text-2xl font-normal tracking-tight text-white flex items-center gap-2">
            3 Bed <span className="text-white/30">/</span> 2 Bath
        </p>
</div>
<div>
<p className="text-[11px] uppercase font-semibold text-neutral-300 tracking-widest mb-2">Year Built</p>
<p className="text-2xl font-normal tracking-tight text-white">1950</p>
</div>
<div>
<p className="text-[11px] uppercase font-semibold text-neutral-300 tracking-widest mb-2">Type</p>
<p className="text-2xl font-normal tracking-tight text-white">Single Family</p>
</div>
</div>
</div>
</div>
</header>

<section className="bg-white pt-20 pb-20" id="property">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-4">
<h2 className="leading-tight text-3xl font-medium text-slate-900 tracking-tight mb-8" style={{}}>Property Description</h2>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600">Beautifully landscaped backyard</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600">Fully finished basement</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600">Sleek appliances</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600">Comfortable bedrooms</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600">Well-appointed bathrooms</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600">Flexible space</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600">Cozy dining area</span>
</div>
</div>
<div className="lg:col-span-8">
<p className="text-base text-slate-600 font-light leading-relaxed mb-6">
                        Discover this charming single-family home on an 8,677 square foot lot nestled in the heart of Holliswood, offering 3 bedrooms and 2 full bathrooms. Step into a bright and spacious living room filled with ample natural light—ideal for both everyday living and entertaining. The modern kitchen features sleek appliances, generous counter space, and a cozy dining area overlooking the beautifully landscaped backyard.
                    </p>
<p className="text-base text-slate-600 font-light leading-relaxed mb-6">
                        Upstairs, you’ll find three comfortable bedrooms and two well-appointed bathrooms. The fully finished basement provides flexible space for a recreation room, home office, or extra storage, while the attic offers even more possibilities. An attached garage adds everyday convenience. The backyard is impressively large—perfect for hosting summer gatherings, creating a garden oasis, or simply enjoying the outdoors. Fully fenced and private, it’s a rare find in the neighborhood.
                    </p>
<p className="text-base text-slate-600 font-light leading-relaxed">
                        Conveniently located near shops, restaurants, public transportation, and more—this home blends suburban comfort with city accessibility. Sold 'as-is'.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100" id="details">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 border-b border-slate-200 pb-6">
<h3 className="text-2xl font-medium tracking-tight text-slate-900">Facts &amp; Features</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

<div className="">
<div className="flex items-center gap-2 mb-6 text-slate-900">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Interior</h4>
</div>
<ul className="space-y-4">
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Bedrooms</span>
<span className="font-medium text-slate-900">3</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Bathrooms</span>
<span className="font-medium text-slate-900">2 Full</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Living Area</span>
<span className="font-medium text-slate-900">1,316 Sq Ft</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Flooring</span>
<span className="font-medium text-slate-900">Hardwood</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Appliances</span>
<span className="font-medium text-slate-900">Washer/Dryer</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Rooms</span>
<span className="font-medium text-slate-900">Childrens Playroom</span>
</li>
</ul>
</div>

<div className="">
<div className="flex items-center gap-2 mb-6 text-slate-900">
<iconify-icon icon="solar:buildings-linear" width="20"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Property &amp; Construction</h4>
</div>
<ul className="space-y-4">
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Year Built</span>
<span className="font-medium text-slate-900">1950</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Home Type</span>
<span className="font-medium text-slate-900">Single Family Residence</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Parking</span>
<span className="font-medium text-slate-900">Garage</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Heating</span>
<span className="font-medium text-slate-900">Natural Gas</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Exterior</span>
<span className="font-medium text-slate-900">Courtyard, Balcony, Garden</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Patio/Porch</span>
<span className="font-medium text-slate-900">Other</span>
</li>
</ul>
</div>

<div className="">
<div className="flex items-center gap-2 mb-6 text-slate-900">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Location &amp; Community</h4>
</div>
<ul className="space-y-4">
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Region</span>
<span className="font-medium text-slate-900">Hollis</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Subdivision</span>
<span className="font-medium text-slate-900">Jamaica Estates</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">HOA</span>
<span className="font-medium text-slate-900">Yes</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">School District</span>
<span className="font-medium text-slate-900">Queens 29</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Elementary</span>
<span className="font-medium text-slate-900">The Bellaire School</span>
</li>
<li className="flex justify-between text-sm pb-2 border-b border-slate-200/60">
<span className="text-slate-500">Middle School</span>
<span className="font-medium text-slate-900">Jean Nuzzi Intermediate</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-2 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-8 pt-12">
<h3 className="text-xl font-medium tracking-tight">Gallery</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 md:px-0">
<div className="group overflow-hidden h-[400px] relative">
<img alt="" className="" src="https://photos.zillowstatic.com/fp/2f3178d46a60b64c31c3074e6e0ff624-cc_ft_576.jpg"/>
<img alt="" className="" src="https://photos.zillowstatic.com/fp/2f3178d46a60b64c31c3074e6e0ff624-cc_ft_576.jpg"/>
</div>
<div className="relative group h-[400px] overflow-hidden">
<img alt="" className="" src="https://photos.zillowstatic.com/fp/3d0112636e0c4252ab5479a849ced137-cc_ft_576.jpg"/><img alt="Property View 2" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://photos.zillowstatic.com/fp/8c8174b27401cf048a97417889d834dd-cc_ft_576.jpg"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 px-2 md:px-0">
<div className="relative group h-[300px] overflow-hidden">
<img alt="" className="" src="https://photos.zillowstatic.com/fp/59a55bded180d731b12a1ce01d06967f-cc_ft_576.jpg"/>
</div>
<div className="relative group h-[300px] overflow-hidden">
<img alt="" className="" src="https://photos.zillowstatic.com/fp/e799bc5bdb36f83696d52e08c1fe0171-cc_ft_960.jpg"/>
</div>
<div className="relative group h-[300px] overflow-hidden">
<img alt="" className="" src="https://photos.zillowstatic.com/fp/d045d1d0d7a5924c7b0cad77c72226b5-cc_ft_576.jpg"/>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="">
<h2 className="text-2xl font-medium tracking-tight mb-2">Schedule a Viewing</h2>
<p className="text-slate-500 font-light mb-8 text-sm">
                        Interested in 197-03 McLaughlin Ave? Contact the listing agent.
                    </p>
<form className="text-left space-y-4">
<div className="">
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-slate-900 transition-colors" placeholder="Email Address" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-slate-900 transition-colors" placeholder="Name" type="text"/>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-slate-900 transition-colors" placeholder="Phone" type="tel"/>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-sm py-3.5 rounded-lg hover:bg-slate-800 transition-colors" type="button">
                            Request Appointment
                        </button>
</form>
</div>

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex flex-col justify-center">
<div className="mb-6">
<span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Listing Agent</span>
<h3 className="text-xl font-medium tracking-tight mt-1 text-slate-900">Benjamin Timlichman</h3>
<p className="text-slate-500 text-sm mt-1">Licensed Real Estate Agent</p>
</div>
<div className="space-y-4">
<a className="flex items-center gap-3 text-sm text-slate-700 hover:text-slate-900 transition-colors p-3 bg-white rounded-lg border border-slate-200/50" href="mailto:ben@timlichman.com">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
<span>ben@timlichman.com</span>
</a>
<div className="flex items-center gap-3 text-sm text-slate-700 p-3 bg-white rounded-lg border border-slate-200/50">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<div className="flex gap-4">
<span>P: (718) 551-7770</span>
<span className="text-slate-300">|</span>
<span>O: (718) 551-7770</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-slate-100 text-[10px] text-slate-400 uppercase tracking-widest">
<p>197-03 McLaughlin Ave, Hollis NY 11423</p>
<p>© 2023 All Rights Reserved</p></div></div></footer>
    </>
  );
}
