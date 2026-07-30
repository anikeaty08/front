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



      // Initialize Lucide with 1.5 stroke width as requested
      if (window.lucide && lucide.createIcons) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
      // Year
      document.getElementById('year').textContent = new Date().getFullYear();
    
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
      

<header className="w-full border-b border-slate-200/80 bg-white">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-slate-200 text-[11px] tracking-tight font-semibold text-white" style={{backgroundColor: `#002347`}}>
            DSR
          </div>
<div className="flex flex-col leading-none">
<span className="text-slate-800 text-[15px] font-medium tracking-tight">Dubai Sotheby’s Realty</span>
<span className="text-slate-500 text-[12px] font-normal">Luxury Property Specialists</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">Residences</a>
<a className="hover:text-slate-900 transition-colors" href="#">Amenities</a>
<a className="hover:text-slate-900 transition-colors" href="#">Location</a>
</nav>
<div className="hidden md:block">
<button className="rounded-md px-3.5 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 transition">
            Contact
          </button>
</div>
</div>
</header>

<section className="w-full">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-9 md:py-10">
<div className="flex flex-col items-center text-center gap-3">
<h1 className="font-serif tracking-tight text-[40px] leading-[1.15] sm:text-[48px] text-[#002347] font-normal">
            Eden House The Park
          </h1>
<p className="text-[18px] sm:text-[24px] leading-[1.5] text-[#002347] font-medium">
            Live Where Architecture Meets Waterfront Serenity
          </p>

<div className="mt-4 flex items-center gap-6">
<div className="flex items-center gap-1.5">
<i className="w-5 h-5 text-[#002347]" data-lucide="shield"></i>
<i className="w-5 h-5 text-[#002347]" data-lucide="shield"></i>
<i className="w-5 h-5 text-[#002347]" data-lucide="shield"></i>
</div>
<div className="h-5 w-px bg-slate-200"></div>
<p className="text-[15px] sm:text-[16px] text-slate-500 font-medium">
              Award-winning architectural design by DXB Lab
            </p>
</div>

<div className="mt-8 flex flex-col items-center gap-3">
<a className="inline-flex items-center justify-center gap-3 rounded-md px-6 py-3.5 text-white font-medium text-[16px] hover:shadow-md hover:shadow-slate-900/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#002347] focus-visible:ring-offset-white" href="#contact" style={{backgroundColor: `#002347`}}>
              Enquire Now
              <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<p className="text-[14px] text-slate-500 font-medium">
              ✓ No Obligation   |   ✓ Expert Guidance   |   ✓ Exclusive Access
            </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-slate-100">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-9 md:py-10">
<div className="flex flex-col items-center text-center gap-3">
<h2 className="font-serif tracking-tight text-[26px] sm:text-[32px] text-[#002347] font-normal">
            Why Eden House The Park?
          </h2>
<p className="text-[16px] text-slate-500 font-medium">
            Discover a sanctuary where world-class design, wellness, and waterfront living converge.
          </p>
</div>

<div className="mt-8 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center gap-3 rounded-md bg-white ring-1 ring-slate-200 px-4 py-3">
<i className="w-5 h-5 text-[#002347]" data-lucide="check"></i>
<span className="text-[16px] text-slate-600 font-medium">Exclusive waterfront location in Business Bay</span>
</div>
<div className="flex items-center gap-3 rounded-md bg-white ring-1 ring-slate-200 px-4 py-3">
<i className="w-5 h-5 text-[#002347]" data-lucide="check"></i>
<span className="text-[16px] text-slate-600 font-medium">Seven low-rise residences on Dubai Water Canal</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center gap-3 rounded-md bg-white ring-1 ring-slate-200 px-4 py-3">
<i className="w-5 h-5 text-[#002347]" data-lucide="check"></i>
<span className="text-[16px] text-slate-600 font-medium">10 minutes to Dubai Mall, 16 minutes to DIFC</span>
</div>
<div className="flex items-center gap-3 rounded-md bg-white ring-1 ring-slate-200 px-4 py-3">
<i className="w-5 h-5 text-[#002347]" data-lucide="check"></i>
<span className="text-[16px] text-slate-600 font-medium">Floor-to-ceiling windows with balconies</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center gap-3 rounded-md bg-white ring-1 ring-slate-200 px-4 py-3">
<i className="w-5 h-5 text-[#002347]" data-lucide="check"></i>
<span className="text-[16px] text-slate-600 font-medium">Concierge and 24/7 security services</span>
</div>
<div className="flex items-center gap-3 rounded-md bg-white ring-1 ring-slate-200 px-4 py-3">
<i className="w-5 h-5 text-[#002347]" data-lucide="check"></i>
<span className="text-[16px] text-slate-600 font-medium">Residents’ lounges and boutique outlets</span>
</div>
</div>
</div>

<div className="mt-10 flex flex-col items-center gap-6">
<p className="text-[20px] sm:text-[24px] font-medium text-[#002347] text-center">
            2, 3 & 4 Bedroom Apartments & Penthouses starting from $6.5M
          </p>
<a className="inline-flex items-center justify-center gap-3 rounded-md px-6 py-3.5 text-white font-medium text-[16px] hover:shadow-md hover:shadow-slate-900/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#002347] focus-visible:ring-offset-slate-100" href="#contact" style={{backgroundColor: `#002347`}}>
            Request Floor Plans
            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="w-full">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-9 md:py-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="aspect-[392/326] overflow-hidden rounded-md ring-1 ring-slate-200">
<img alt="Waterfront residence exterior" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="aspect-[392/326] overflow-hidden rounded-md ring-1 ring-slate-200">
<img alt="Residences interior lounge" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="aspect-[392/326] overflow-hidden rounded-md ring-1 ring-slate-200">
<img alt="Canal promenade near the residences" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1552324190-9e86fa095c4a?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>
<div className="mt-8 max-w-3xl mx-auto text-center">
<p className="text-[16px] text-slate-600 font-medium">
            At Eden House The Park, every detail is designed to inspire. Wake up to soft light reflecting off the canal, enjoy a stroll through manicured gardens, or unwind in spaces that blend natural beauty with architectural precision.
          </p>
<p className="mt-6 text-[16px] text-[#002347] font-medium">
            Positioned minutes from Downtown Dubai and DIFC, Eden House The Park offers the rare balance of city vibrance and serene retreat.
          </p>
</div>
</div>
</section>

<section className="w-full" id="contact" style={{backgroundColor: `#002347`}}>
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 md:py-12">
<h3 className="font-serif tracking-tight text-[26px] sm:text-[32px] text-white font-normal text-center">
          Contact Dubai Sotheby's Realty for further details
        </h3>

<div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-10 text-white">
<div className="flex items-center gap-2.5">
<i className="w-5 h-5" data-lucide="shield-check"></i>
<span className="text-[16px] font-medium">Private tour with luxury consultant</span>
</div>
<div className="flex items-center gap-2.5">
<i className="w-5 h-5" data-lucide="shield-check"></i>
<span className="text-[16px] font-medium">Exclusive floor plans & pricing</span>
</div>
<div className="flex items-center gap-2.5">
<i className="w-5 h-5" data-lucide="shield-check"></i>
<span className="text-[16px] font-medium">Priority unit selection</span>
</div>
</div>

<form className="mt-8 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<label className="block">
<div className="text-white text-[16px] font-medium mb-2">Full Name*</div>
<input className="w-full rounded-md bg-transparent text-white placeholder:text-slate-300 px-4 py-3.5 ring-1 ring-slate-400/50 focus:outline-none focus:ring-2 focus:ring-slate-100/90" name="fullName" placeholder="Enter your full name" required type="text" />
</label>

<label className="block">
<div className="text-white text-[16px] font-medium mb-2">Email Address*</div>
<input className="w-full rounded-md bg-transparent text-white placeholder:text-slate-300 px-4 py-3.5 ring-1 ring-slate-400/50 focus:outline-none focus:ring-2 focus:ring-slate-100/90" name="email" placeholder="name@example.com" required type="email" />
</label>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<label className="block">
<div className="text-white text-[16px] font-medium mb-2">Phone*</div>
<div className="flex">
<div className="flex items-center gap-2 rounded-l-md px-3 ring-1 ring-slate-400/50 bg-white/10 text-white">
<span className="text-sm font-medium">+971</span>
<i className="w-4 h-4 opacity-80" data-lucide="chevron-down"></i>
</div>
<input className="w-full rounded-r-md bg-transparent text-white placeholder:text-slate-300 px-4 py-3.5 ring-1 ring-l-0 ring-slate-400/50 focus:outline-none focus:ring-2 focus:ring-slate-100/90" name="phone" placeholder="5X XXX XXXX" required type="tel" />
</div>
</label>

<div className="block">
<div className="text-white text-[16px] font-medium mb-2">What is your preferred budget range? (AED)*</div>
<button className="w-full group inline-flex items-center justify-between rounded-md bg-transparent text-white px-4 py-3.5 ring-1 ring-slate-400/50 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-slate-100/90" type="button">
<span className="text-left text-slate-200 group-hover:text-white text-[15px]">Select a range</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="block">
<div className="text-white text-[16px] font-medium mb-2">Preferred number of bedrooms*</div>
<button className="w-full group inline-flex items-center justify-between rounded-md bg-transparent text-white px-4 py-3.5 ring-1 ring-slate-400/50 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-slate-100/90" type="button">
<span className="text-left text-slate-200 group-hover:text-white text-[15px]">Select bedrooms</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>

<div className="block">
<div className="text-white text-[16px] font-medium mb-3">Contact Preference:</div>
<div className="flex items-center gap-10">

<label className="inline-flex items-center gap-2 cursor-pointer select-none">
<input className="sr-only peer" name="prefPhone" type="checkbox" />
<span className="h-4 w-4 rounded-[4px] ring-1 ring-slate-300/80 bg-white/0 peer-checked:bg-white peer-checked:ring-white grid place-items-center transition">
<svg className="opacity-0 peer-checked:opacity-100 transition" fill="none" height="12" stroke="#002347" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-white text-[16px] font-medium">Phone</span>
</label>

<label className="inline-flex items-center gap-2 cursor-pointer select-none">
<input className="sr-only peer" name="prefEmail" type="checkbox" />
<span className="h-4 w-4 rounded-[4px] ring-1 ring-slate-300/80 bg-white/0 peer-checked:bg-white peer-checked:ring-white grid place-items-center transition">
<svg className="opacity-0 peer-checked:opacity-100 transition" fill="none" height="12" stroke="#002347" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-white text-[16px] font-medium">Email</span>
</label>
</div>
</div>
</div>

<div className="block">
<div className="text-white text-[16px] font-medium mb-2">Any Message or Special Request</div>
<textarea className="w-full rounded-md bg-transparent text-white placeholder:text-slate-300 px-4 py-3.5 ring-1 ring-slate-400/50 focus:outline-none focus:ring-2 focus:ring-slate-100/90" placeholder="Write your message..." rows="4"></textarea>
</div>
<div className="flex items-center justify-center pt-2">
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-[#002347] px-5 py-3.5 text-[16px] font-medium hover:bg-slate-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-[#002347]" type="submit">
              Book a Private Viewing
            </button>
</div>
</form>
<p className="mt-8 text-center text-[14px] text-white/90">
          For more details, visit our website
          <a className="underline text-sky-200 hover:text-white transition" href="https://sothebysrealty.ae/">www.sothebysrealty.ae</a>
</p>
</div>
</section>

<footer className="w-full border-t border-slate-200">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
<div>© <span id="year"></span> Dubai Sotheby’s Realty. All rights reserved.</div>
<div className="flex items-center gap-5">
<a className="hover:text-slate-700 transition" href="#">Privacy</a>
<a className="hover:text-slate-700 transition" href="#">Terms</a>
<a className="hover:text-slate-700 transition" href="#">Cookies</a>
</div>
</div>
</footer>




    </>
  );
}
