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



      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && window.lucide.createIcons) {
          window.lucide.createIcons();
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
      

<header className="fixed top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2.5">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-500">
<svg className="lucide lucide-flower-2 h-6 w-6" data-lucide="flower-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v18m9-9a3 3 0 1 1-3-3m3 3a3 3 0 1 0-3 3m3-3h-6m-3 3a3 3 0 1 1-3-3m3 3a3 3 0 1 0 3-3m-3 3H3m15 9a3 3 0 1 1-3-3m3 3a3 3 0 1 0-3 3m3-3h-6m-3 3a3 3 0 1 1-3-3m3 3a3 3 0 1 0 3-3m-3 3H3"></path></svg>
</span>
<span className="text-xl font-bold tracking-tight text-stone-900">Zara’s Lawns</span>
</div>
<div className="flex items-center gap-6">
<a className="hidden text-sm font-medium text-stone-500 hover:text-rose-600 sm:block transition-colors" href="#services">Services</a>
<a className="hidden text-sm font-medium text-stone-500 hover:text-rose-600 sm:block transition-colors" href="#contact">Service Area</a>
<a className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-rose-200 transition hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2" href="tel:0413578529">
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span className="hidden sm:inline">Call 0413 578 529</span>
<span className="sm:hidden">Call Now</span>
</a>
</div>
</div>
</header>

<section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Manicured lawn in Queensland" className="h-full w-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/50 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-rose-950/20 to-transparent"></div>
</div>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full bg-rose-500/20 px-4 py-1.5 text-sm font-medium text-rose-50 ring-1 ring-inset ring-rose-300/30 backdrop-blur-md mb-8">
<span className="flex h-1.5 w-1.5 rounded-full bg-rose-300"></span>
            Locally Owned &amp; Operated
          </div>
<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-[Inter]">
            Beautiful Gardens,<br/> Made Simple.
          </h1>
<p className="mt-6 text-lg leading-8 text-stone-100 font-light">
            Reliable mowing, gentle gardening, and property care for homes in Rockhampton. We treat your garden with the love it deserves.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 rounded-full bg-rose-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-rose-900/20 hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 transition-all transform hover:-translate-y-0.5" href="tel:0413578529">
<svg className="lucide lucide-heart-handshake h-5 w-5" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.28 3.6-1.28 5.14 0 1.66 1.39 1.66 3.92 0 5.31-1.66 1.39-4.32 1.39-5.98 0l-.33-.28c-.85-.72-2.18-.72-3.03 0l-.33.28c-1.66 1.39-4.32 1.39-5.98 0-1.66-1.39-1.66-3.92 0-5.31 1.54-1.28 3.65-1.28 5.14 0a3.99 3.99 0 0 0 5.37 0"></path><path d="M12 5a3 3 0 1 0-5.66 2A3 3 0 1 0 1 9.66"></path><path d="M23 9.66A3 3 0 1 0 17.66 7 3 3 0 1 0 12 5"></path></svg>
              Call for a Quote
            </a>
<a className="inline-flex justify-center items-center gap-2 rounded-full bg-white/10 px-8 py-3.5 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm" href="#services">
              Our Services
            </a>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-stone-100">
<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="flex items-center gap-4 rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-100/50">
<svg className="lucide lucide-map-pin h-6 w-6 text-rose-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="text-sm font-medium text-stone-700">Local Rockhampton</div>
</div>
<div className="flex items-center gap-4 rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-100/50">
<svg className="lucide lucide-clock h-6 w-6 text-rose-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<div className="text-sm font-medium text-stone-700">Always Punctual</div>
</div>
<div className="flex items-center gap-4 rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-100/50">
<svg className="lucide lucide-calendar-check h-6 w-6 text-rose-400" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="m9 16 2 2 4-4"></path></svg>
<div className="text-sm font-medium text-stone-700">Regular Visits</div>
</div>
<div className="flex items-center gap-4 rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-100/50">
<svg className="lucide lucide-home h-6 w-6 text-rose-400" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
<div className="text-sm font-medium text-stone-700">Rental Specialist</div>
</div>
</div>
</div>
</div>

<section className="py-16 sm:py-24" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Our Services</h2>
<p className="mt-4 text-lg text-stone-500 font-light">From standard lawn mowing to full property makeovers, we handle the hard work so you can relax.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-100 transition-all hover:shadow-lg hover:shadow-rose-100/50 hover:ring-rose-100">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 mb-5">
<svg className="lucide lucide-scissors h-6 w-6" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900">Lawn Mowing &amp; Edging</h3>
<p className="mt-2 text-stone-500 font-light leading-relaxed">Precision mowing and neat edging for a sharp, manicured finish every time.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-100 transition-all hover:shadow-lg hover:shadow-rose-100/50 hover:ring-rose-100">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 mb-5">
<svg className="lucide lucide-flower h-6 w-6" data-lucide="flower" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m4.5 3a4.5 4.5 0 1 1-4.5-4.5m4.5 4.5V15m-3-10.5A4.5 4.5 0 1 1 12 7.5"></path></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900">Garden Maintenance</h3>
<p className="mt-2 text-stone-500 font-light leading-relaxed">Weeding, mulching, planting, and gentle care to keep your garden thriving.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-100 transition-all hover:shadow-lg hover:shadow-rose-100/50 hover:ring-rose-100">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 mb-5">
<svg className="lucide lucide-sparkles h-6 w-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900">Property Clean-ups</h3>
<p className="mt-2 text-stone-500 font-light leading-relaxed">Pre-sale makeovers and end-of-lease bond clean-ups to satisfy agents and buyers.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-100 transition-all hover:shadow-lg hover:shadow-rose-100/50 hover:ring-rose-100">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 mb-5">
<svg className="lucide lucide-axe h-6 w-6" data-lucide="axe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"></path><path d="M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900">Tree &amp; Hedge Trimming</h3>
<p className="mt-2 text-stone-500 font-light leading-relaxed">Keeping your hedges neat and trees safely pruned back from structures.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-100 transition-all hover:shadow-lg hover:shadow-rose-100/50 hover:ring-rose-100">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 mb-5">
<svg className="lucide lucide-droplets h-6 w-6" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.8-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900">Pressure Washing</h3>
<p className="mt-2 text-stone-500 font-light leading-relaxed">Blast away dirt and grime from driveways, patios, and garden paths.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-100 transition-all hover:shadow-lg hover:shadow-rose-100/50 hover:ring-rose-100">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 mb-5">
<svg className="lucide lucide-trash-2 h-6 w-6" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900">Green Waste Removal</h3>
<p className="mt-2 text-stone-500 font-light leading-relaxed">We load up and haul away all garden clippings, branches, and rubbish.</p>
</div>
</div>
</div>
</section>

<section className="bg-stone-800 py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-2xl font-bold text-white mb-3">Service Area</h2>
<div className="flex flex-wrap justify-center items-center gap-3 text-stone-300">
<svg className="lucide lucide-map h-5 w-5 text-rose-300" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" x2="9" y1="3" y2="18"></line><line x1="15" x2="15" y1="6" y2="21"></line></svg>
<span className="text-lg font-light">Proudly serving <span className="text-white font-medium">Rockhampton</span> and surrounding suburbs</span>
</div>
</div>
</section>

<section className="relative py-16 sm:py-24 bg-rose-50/50 overflow-hidden" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

<div>
<h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Get a Free Quote</h2>
<p className="mt-4 text-lg text-stone-600 font-light">
              Ready to tidy up your yard? Call or text us today for a free, no-obligation estimate. We reply quickly!
            </p>
<div className="mt-10 space-y-8">
<div className="flex items-center gap-6">
<div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white text-rose-500 shadow-sm ring-1 ring-stone-100">
<svg className="lucide lucide-phone h-6 w-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-stone-500">Phone</div>
<div className="text-xl font-semibold text-stone-900">0413 578 529</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white text-rose-500 shadow-sm ring-1 ring-stone-100">
<svg className="lucide lucide-map-pin h-6 w-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<div className="text-sm font-medium text-stone-500">Location</div>
<div className="text-xl font-semibold text-stone-900">Rockhampton, QLD</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white text-rose-500 shadow-sm ring-1 ring-stone-100">
<svg className="lucide lucide-thumbs-up h-6 w-6" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-stone-500">Social</div>
<div className="text-xl font-semibold text-stone-900">Facebook page available</div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-white p-6 sm:p-10 ring-1 ring-stone-200 shadow-xl shadow-stone-200/50">
<form action="#" className="space-y-5" method="POST">
<div>
<label className="block text-sm font-medium leading-6 text-stone-900" htmlFor="name">Name</label>
<div className="mt-2">
<input className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 bg-stone-50/50" id="name" name="name" placeholder="Your full name" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium leading-6 text-stone-900" htmlFor="phone">Phone Number</label>
<div className="mt-2">
<input className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 bg-stone-50/50" id="phone" name="phone" placeholder="0400 000 000" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium leading-6 text-stone-900" htmlFor="message">Brief Message</label>
<div className="mt-2">
<textarea className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 bg-stone-50/50" id="message" name="message" placeholder="I need a quote for..." rows="4"></textarea>
</div>
</div>
<button className="block w-full rounded-full bg-rose-500 px-3.5 py-4 text-center text-sm font-bold text-white shadow-lg shadow-rose-200 hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 transition-all transform hover:-translate-y-0.5" type="submit">
                Send Request
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100">
<div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-12 lg:px-8">
<div className="flex justify-center items-center gap-2 mb-4">
<svg className="lucide lucide-flower-2 h-6 w-6 text-rose-500" data-lucide="flower-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v18m9-9a3 3 0 1 1-3-3m3 3a3 3 0 1 0-3 3m3-3h-6m-3 3a3 3 0 1 1-3-3m3 3a3 3 0 1 0 3-3m-3 3H3m15 9a3 3 0 1 1-3-3m3 3a3 3 0 1 0-3 3m3-3h-6m-3 3a3 3 0 1 1-3-3m3 3a3 3 0 1 0 3-3m-3 3H3"></path></svg>
<span className="text-stone-800 font-bold text-lg">Zara’s Lawns and Garden</span>
</div>
<p className="mt-2 text-center text-xs leading-5 text-stone-400">
          Rockhampton, QLD • 0413 578 529
        </p>
<p className="mt-2 text-center text-xs leading-5 text-stone-300">
          © 2024 Zara’s Lawns and Garden. All rights reserved.
        </p>
</div>
</footer>


    </>
  );
}
