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



    lucide.createIcons({ strokeWidth: 1.5 });
  
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
      

<section className="relative overflow-hidden">
<img alt="Happy dog at daycare" className="absolute inset-0 w-full h-full object-cover brightness-90" src="https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&auto=format&fit=crop&w=1950" />
<div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
<h1 className="text-[44px] md:text-[56px] font-semibold tracking-tight text-white drop-shadow-md mb-4 animate-fadeIn" style={{animationDelay: `0.15s`}}>Paws & Play</h1>
<p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 animate-fadeIn" style={{animationDelay: `0.3s`}}>Brooklyn’s friendliest dog daycare & grooming studio—where every tail wags a little harder.</p>
<a className="inline-flex items-center gap-2 bg-pink-300/90 hover:bg-pink-400 text-slate-800 font-medium px-6 py-3 rounded-lg ring-1 ring-pink-400/40 shadow-lg transition animate-fadeIn" href="#booking" style={{animationDelay: `0.45s`}}>
<span>Book Now</span>
<i className="w-5 h-5" data-lucide="calendar"></i>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">What We Do Best</h2>
<div className="grid md:grid-cols-2 gap-12">

<div className="flex flex-col gap-6">
<div className="flex gap-4 items-start">
<div className="p-3 rounded-lg bg-teal-100 ring-1 ring-teal-200/50">
<i className="w-6 h-6 text-teal-600" data-lucide="sun"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-1">Daycare</h3>
<p className="text-sm leading-6">Safe supervised play, socialization, and unlimited zoomies from dawn till dusk.</p>
</div>
</div>
<img alt="Dogs playing" className="rounded-xl shadow-md ring-1 ring-slate-100 object-cover h-60 w-full" src="https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&auto=format&fit=crop&w=900" />
</div>

<div className="flex flex-col gap-6">
<div className="flex gap-4 items-start">
<div className="p-3 rounded-lg bg-yellow-100 ring-1 ring-yellow-200/50">
<i className="w-6 h-6 text-yellow-600" data-lucide="scissors"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-1">Spa & Grooming</h3>
<p className="text-sm leading-6">Pamper your pup with full-service baths, blowouts, trims, and nail care.</p>
</div>
</div>
<img alt="Dog grooming" className="rounded-xl shadow-md ring-1 ring-slate-100 object-cover h-60 w-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>
</section>

<section className="bg-gradient-to-b from-[#fdf6f8] to-[#fcfbfa] py-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">Happy Tails</h2>
<div className="grid sm:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
<img alt="Dog face" className="w-16 h-16 rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&auto=format&fit=crop&w=200" />
<p className="text-sm mb-4">“My corgi, Waffles, drags me to the door every morning. Staff treats her like royalty!”</p>
<p className="text-xs text-slate-500 font-medium">— Alex R.</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
<img alt="Dog face" className="w-16 h-16 rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&auto=format&fit=crop&w=200" />
<p className="text-sm mb-4">“Their groomers are miracle workers. Stella has never looked or smelled better.”</p>
<p className="text-xs text-slate-500 font-medium">— Dana W.</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
<img alt="Dog face" className="w-16 h-16 rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<p className="text-sm mb-4">“Love the transparency—webcams, updates, and a super easy online booking flow.”</p>
<p className="text-xs text-slate-500 font-medium">— Jordan K.</p>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-24" id="booking">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10">Reserve Your Spot</h2>
<form className="bg-white px-8 py-10 rounded-2xl shadow-lg ring-1 ring-slate-100 space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-2">Pet Name</label>
<input className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:ring-2 focus:ring-pink-300 outline-none transition" placeholder="Waffles" type="text" />
</div>
<div>
<label className="block text-sm font-medium mb-2">Size</label>
<select className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:ring-2 focus:ring-pink-300 outline-none transition">
<option>Small</option>
<option>Medium</option>
<option>Large</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2">Service</label>
<select className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:ring-2 focus:ring-pink-300 outline-none transition">
<option>Daycare</option>
<option>Grooming</option>
<option>Daycare + Grooming</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2">Date</label>
<input className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:ring-2 focus:ring-pink-300 outline-none transition" type="date" />
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-2">Owner Name</label>
<input className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:ring-2 focus:ring-pink-300 outline-none transition" placeholder="Alex Rivera" type="text" />
</div>
<div>
<label className="block text-sm font-medium mb-2">Phone</label>
<input className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:ring-2 focus:ring-pink-300 outline-none transition" placeholder="(718) 555-0199" type="tel" />
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2">Email</label>
<input className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:ring-2 focus:ring-pink-300 outline-none transition" placeholder="alex@email.com" type="email" />
</div>
<button className="w-full flex justify-center items-center gap-2 bg-pink-300 hover:bg-pink-400 text-slate-800 font-medium px-6 py-4 rounded-lg ring-1 ring-pink-400/40 shadow-md transition" type="submit">
<span>Reserve Spot</span>
<i className="w-5 h-5" data-lucide="paw-print"></i>
</button>
<p className="text-xs text-center text-slate-500">We will confirm your booking via email or phone within 24 hours.</p>
</form>
</section>

<footer className="bg-[#faf6f7]">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div className="flex items-center gap-3">
<div className="text-lg font-semibold tracking-tight text-slate-800">P&P</div>
<span className="text-xs text-slate-400">© 2024 Paws & Play. All rights reserved.</span>
</div>
<nav className="flex gap-6 text-sm">
<a className="text-slate-500 hover:text-slate-800 transition" href="#">Instagram</a>
<a className="text-slate-500 hover:text-slate-800 transition" href="#">Facebook</a>
<a className="text-slate-500 hover:text-slate-800 transition" href="#">Contact</a>
</nav>
</div>
</footer>




    </>
  );
}
