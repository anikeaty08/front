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
      

<nav className="flex items-center justify-between px-6 md:px-12 py-6 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="text-xl font-bold tracking-tight text-blue-600">DentistFinder</div>
<div className="hidden md:flex space-x-8 text-sm">
<a className="hover:text-blue-500 transition" href="#">Home</a>
<a className="hover:text-blue-500 transition" href="#">Find Dentists</a>
<a className="hover:text-blue-500 transition" href="#">Insurance Info</a>
<a className="hover:text-blue-500 transition" href="#">Testimonials</a>
<a className="hover:text-blue-500 transition" href="#">Contact</a>
</div>

<div className="md:hidden">
<button aria-label="Open menu">
<svg className="h-6 w-6 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</nav>

<header className="px-6 md:px-0 pt-20 pb-12 md:py-28 bg-white flex flex-col items-center">
<span className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-blue-100 to-slate-100 mb-6 shadow-sm">
<span className="text-4xl md:text-5xl">🦷</span>
</span>
<h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-4">
      Find Your Local Dentist Today
    </h1>
<p className="max-w-xl mx-auto text-lg text-slate-500 text-center mb-4">
      Search for trusted dentists by location, services, and accepted insurance. <br/>
      Modern care for your brightest smile.
    </p>
<div className="flex space-x-3 items-center justify-center mt-4">
<a className="inline-block rounded-lg bg-blue-600 text-white font-semibold px-6 py-3 shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600" href="#">Get Started</a>
<a className="inline-block rounded-lg border border-blue-600 text-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600" href="#">Learn More</a>
</div>
</header>

<section className="w-full px-4 md:px-0 max-w-3xl mx-auto">
<div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0 md:justify-center">
<select className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition">
<option>Location</option>
<option>Smile City</option>
<option>Oceanview</option>
</select>
<select className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition">
<option>Insurance</option>
<option>Aetna</option>
<option>Cigna</option>
<option>Blue Cross</option>
</select>
<select className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition">
<option>Specialty</option>
<option>General</option>
<option>Orthodontist</option>
<option>Pediatric</option>
</select>
</div>
</section>

<section className="max-w-5xl mx-auto mt-12 px-4 md:px-0">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center p-5 group transition hover:shadow-md">
<div className="flex-shrink-0 mr-6">
<span className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-3xl transition group-hover:bg-blue-100">👩‍⚕️</span>
</div>
<div>
<div className="font-semibold text-lg text-slate-800">Dr. Elara Voss</div>
<div className="text-slate-500 text-sm mt-0.5">Accepts Aetna, Cigna, Delta Dental</div>
<div className="font-bold text-blue-600 text-sm mt-2">Consultation: $50</div>
<div className="mt-4 flex space-x-2">
<button className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700 transition">Book</button>
<button className="rounded-md border border-blue-600 text-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition">Info</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center p-5 group transition hover:shadow-md">
<div className="flex-shrink-0 mr-6">
<span className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-sky-50 text-3xl transition group-hover:bg-sky-100">👨‍⚕️</span>
</div>
<div>
<div className="font-semibold text-lg text-slate-800">Dr. Orion Vega</div>
<div className="text-slate-500 text-sm mt-0.5">Accepts Blue Cross, Humana</div>
<div className="font-bold text-blue-600 text-sm mt-2">Consultation: $60</div>
<div className="mt-4 flex space-x-2">
<button className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700 transition">Book</button>
<button className="rounded-md border border-blue-600 text-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition">Info</button>
</div>
</div>
</div>

</div>
</section>

<div className="flex justify-center mt-12 mb-20 space-x-1">
<button className="w-9 h-9 rounded-lg text-blue-600 bg-white border border-slate-200 hover:bg-blue-50 transition font-semibold">1</button>
<button className="w-9 h-9 rounded-lg text-slate-500 bg-white border border-slate-200 hover:bg-blue-50 transition">2</button>
<button className="w-9 h-9 rounded-lg text-slate-500 bg-white border border-slate-200 hover:bg-blue-50 transition">3</button>
<button className="w-9 h-9 rounded-lg text-slate-500 bg-white border border-slate-200 hover:bg-blue-50 transition">Next</button>
</div>

<footer className="border-t border-slate-100 bg-white/90 py-10 px-6 md:px-0 mt-8">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-0">
<div className="flex items-center space-x-3">
<img alt="Facebook" className="h-5 w-5 opacity-60 hover:opacity-100 transition" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"/>
<img alt="Instagram" className="h-5 w-5 opacity-60 hover:opacity-100 transition" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"/>
<img alt="Yelp" className="h-5 w-5 opacity-60 hover:opacity-100 transition" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/yelp.svg"/>
</div>
<form className="flex space-x-2">
<input className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none bg-slate-50" placeholder="Subscribe" type="email"/>
<button className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm transition hover:bg-blue-700" type="submit">Subscribe</button>
</form>
<div className="text-xs text-slate-400 text-center md:text-right">
        123 Dental Ave, Smile City, USA<br/>
        contact@dentistfinder.com
      </div>
</div>
</footer>

    </>
  );
}
