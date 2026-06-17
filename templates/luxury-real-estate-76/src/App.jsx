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
      

<nav className="fixed w-full top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:buildings-linear" strokeWidth="1.5" style={{color: 'white'}}></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tighter text-zinc-900">E.A.</span>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Properties</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Neighborhoods</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Journal</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About</a>
</div>

<div className="hidden md:flex">
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-zinc-900 hover:bg-zinc-800 shadow-sm transition-all" href="#contact">
                        Contact Agent
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-zinc-500 hover:text-zinc-900 focus:outline-none">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/60 text-xs font-medium text-zinc-600 mb-6">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        Accepting new clients in Beverly Hills
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-6">
                        Curating exceptional spaces for discerning lives.
                    </h1>
<p className="text-lg text-zinc-500 mb-8 max-w-lg leading-relaxed">
                        I represent the finest residential properties with absolute discretion, utilizing a data-driven approach and an unparalleled network.
                    </p>

<div className="bg-white p-2 rounded-2xl border border-zinc-200 shadow-sm flex flex-col sm:flex-row gap-2 max-w-xl relative">
<div className="flex-1 flex items-center px-4 py-2 hover:bg-zinc-50 rounded-xl transition-colors cursor-text">
<iconify-icon className="text-zinc-400 text-lg mr-3" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col w-full">
<span className="text-xs font-medium text-zinc-400">Location</span>
<input className="bg-transparent border-none outline-none text-sm font-medium text-zinc-900 placeholder-zinc-300 w-full p-0" placeholder="Los Angeles, CA" type="text"/>
</div>
</div>
<div className="hidden sm:block w-px bg-zinc-100 my-2"></div>
<div className="flex-1 flex items-center px-4 py-2 hover:bg-zinc-50 rounded-xl transition-colors cursor-pointer group">
<iconify-icon className="text-zinc-400 text-lg mr-3 group-hover:text-zinc-600 transition-colors" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col w-full">
<span className="text-xs font-medium text-zinc-400">Property Type</span>
<span className="text-sm font-medium text-zinc-900">All Residential</span>
</div>
<iconify-icon className="text-zinc-400 text-sm ml-auto" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<button className="bg-zinc-900 text-white rounded-xl px-6 py-3 sm:py-0 text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                            Search
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="relative lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/50">
<img alt="Modern luxury home" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-lg flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center border border-zinc-200">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900 tracking-tight">Top 1% Agent</p>
<p className="text-xs text-zinc-500">Nationwide Volume 2023</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-white py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-100">
<div className="flex flex-col items-center justify-center">
<span className="text-3xl font-semibold tracking-tighter text-zinc-900">$250M+</span>
<span className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-medium">Sales Volume</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-3xl font-semibold tracking-tighter text-zinc-900">12</span>
<span className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-medium">Years Active</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-3xl font-semibold tracking-tighter text-zinc-900">45</span>
<span className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-medium">Avg Days on Market</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-3xl font-semibold tracking-tighter text-zinc-900">100%</span>
<span className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-medium">Client Satisfaction</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Exclusive Listings</h2>
<p className="text-sm text-zinc-500">A curated selection of available properties.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                    View all properties
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300 cursor-pointer flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight text-zinc-900 border border-zinc-100 shadow-sm">
                            Just Listed
                        </div>
<button className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-zinc-400 hover:text-red-500 transition-colors shadow-sm">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<p className="text-2xl font-semibold tracking-tight text-zinc-900 mb-1">$4,850,000</p>
<p className="text-sm text-zinc-500 truncate">1204 Palisades Beach Rd, Santa Monica</p>
</div>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between text-zinc-600">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bed-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">4</span>
</div>
<div className="w-px h-4 bg-zinc-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bath-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">5.5</span>
</div>
<div className="w-px h-4 bg-zinc-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:ruler-angular-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">4,200 sqft</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300 cursor-pointer flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<p className="text-2xl font-semibold tracking-tight text-zinc-900 mb-1">$2,195,000</p>
<p className="text-sm text-zinc-500 truncate">8911 Sunset Blvd Penthouse, West Hollywood</p>
</div>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between text-zinc-600">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bed-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">2</span>
</div>
<div className="w-px h-4 bg-zinc-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bath-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">2.5</span>
</div>
<div className="w-px h-4 bg-zinc-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:ruler-angular-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">2,100 sqft</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300 cursor-pointer flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight text-white border border-zinc-700 shadow-sm">
                            Under Contract
                        </div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<p className="text-2xl font-semibold tracking-tight text-zinc-900 mb-1">$8,900,000</p>
<p className="text-sm text-zinc-500 truncate">10294 Bel Air Rd, Bel Air</p>
</div>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between text-zinc-600">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bed-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">6</span>
</div>
<div className="w-px h-4 bg-zinc-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bath-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">8</span>
</div>
<div className="w-px h-4 bg-zinc-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:ruler-angular-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">8,500 sqft</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-10 sm:hidden flex justify-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                    View all properties
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white rounded-[2.5rem] mx-4 sm:mx-6 lg:mx-8 mb-24 overflow-hidden relative">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-zinc-800/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter mb-6">A modern approach to legacy real estate.</h2>
<p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-md">
                        Whether buying your first architectural gem or managing a multi-property portfolio, the strategy is bespoke, analytical, and uncompromisingly focused on your goals.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
<iconify-icon className="text-xl text-zinc-300" icon="solar:chart-line-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight mb-1">Data-Driven Pricing</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Leveraging proprietary market analytics to ensure you never overpay and always maximize return on sale.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
<iconify-icon className="text-xl text-zinc-300" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight mb-1">Global Network</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Access to off-market listings and international buyers through exclusive partnerships and syndicates.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
<iconify-icon className="text-xl text-zinc-300" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight mb-1">Absolute Discretion</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Operating with the highest level of privacy, utilizing NDAs and secure transaction protocols for high-profile clients.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] lg:h-[650px] w-full rounded-2xl overflow-hidden border border-zinc-700/50">
<img alt="Agent portrait" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<p className="text-2xl font-semibold tracking-tight text-white mb-1">Elias Archer</p>
<p className="text-sm text-zinc-300 font-medium">Principal Agent &amp; Founder</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Start the conversation.</h2>
<p className="text-zinc-500 mb-10 text-lg">Schedule a private consultation to discuss your real estate objectives.</p>
<form className="space-y-4 text-left max-w-xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 ml-1">First Name</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 ml-1">Last Name</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 ml-1">Email Address</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 ml-1">Inquiry Type</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all text-zinc-900">
<option>Looking to Buy</option>
<option>Looking to Sell</option>
<option>Market Evaluation</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 ml-1">Message</label>
<textarea className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all resize-none" placeholder="Tell me about your goals..." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm" type="button">
                        Submit Inquiry
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-center text-xs text-zinc-400 mt-4">By submitting, you agree to our privacy policy and terms of service.</p>
</div>
</form>
</div>
</section>

<footer className="bg-[#FAFAFA] pt-16 pb-8 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center">
<iconify-icon className="text-xs" icon="solar:buildings-linear" strokeWidth="1.5" style={{color: 'white'}}></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-zinc-900">E.A. Real Estate</span>
</div>
<div className="flex space-x-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon className="text-xl" icon="solar:camera-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-200/60 text-xs text-zinc-500 font-medium">
<p>© 2024 Elias Archer Real Estate. All rights reserved.</p>
<div className="flex space-x-4">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-zinc-900 transition-colors" href="#">DRE #01234567</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
