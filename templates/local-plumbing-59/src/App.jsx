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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
window.initInViewAnimations = function () {
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
observer.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');

        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                mobileMenu.classList.add('hidden'); // Close menu on click
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
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
      

<div className="fixed inset-0 z-0 pointer-events-none h-32 bg-gradient-to-b from-white to-transparent"></div>

<header className="fixed top-0 left-0 right-0 z-50 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="inline-flex items-center gap-3 font-semibold text-lg tracking-tight text-slate-900" href="#">
<div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
<path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0a9 9 0 0 1-9 9 9 9 0 0 1-9-9v0a2 2 0 0 1 2-2v0a3 3 0 0 0 3-3V3.34"></path>
</svg>
</div>
<div>
<span className="block leading-none">Grant Goltz</span>
<span className="text-xs text-slate-500 font-normal">Plumbing Pty Ltd</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium" href="#services">Services</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium" href="#about">About</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-medium transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20" href="tel:0407376602">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
                    0407 376 602
                </a>

<button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors" id="hamburger">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>

<div className="md:hidden hidden bg-white border-t border-slate-100 absolute w-full shadow-xl" id="mobile-menu">
<div className="px-6 py-4 space-y-4">
<a className="block text-sm font-medium text-slate-600" href="#services">Services</a>
<a className="block text-sm font-medium text-slate-600" href="#about">About</a>
<a className="block text-sm font-medium text-slate-600" href="#contact">Contact</a>
<a className="block w-full text-center rounded-lg bg-slate-900 text-white px-4 py-3 text-sm font-medium" href="tel:0407376602">
                    Call 0407 376 602
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-16 lg:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 mb-6 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            Servicing North Rockhampton &amp; Surrounds
                        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                            Reliable plumbing solutions, 
                            <span className="text-slate-500">done right the first time.</span>
</h1>
<p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
                            Grant Goltz Plumbing Pty Ltd provides practical, honest, and high-quality plumbing and gas fitting services for residential and small commercial properties.
                        </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-8 py-3.5 text-sm font-medium transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20" href="tel:0407376602">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
                                Call 0407 376 602
                            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-700 ring-1 ring-slate-200 px-8 py-3.5 text-sm font-medium transition-all hover:bg-slate-50 hover:shadow-sm" href="#services">
                                View Services
                            </a>
</div>
</div>

<div className="lg:col-span-5 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 ring-1 ring-slate-200 aspect-[4/3] lg:aspect-square">
<img alt="Professional Plumbing" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg ring-1 ring-slate-200/50 flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Locally Owned</div>
<div className="text-xs text-slate-500">Operating in North Rockhampton</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Our Services</h2>
<p className="mt-4 text-slate-600 text-lg">Comprehensive plumbing and gas fitting for your home or business. No job is too small.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll">

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">General Maintenance</h3>
<p className="text-sm text-slate-600 leading-relaxed">Fixing leaks, tap washers, toilet repairs, and general upkeep to keep your plumbing running smoothly.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 12a4 4 0 0 1 8 0"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Blocked Drains</h3>
<p className="text-sm text-slate-600 leading-relaxed">Fast and effective clearing of blocked sinks, toilets, and stormwater drains.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9a4 4 0 0 0-2 7.5"></path>
<path d="M12 3v2"></path>
<path d="M6.6 18.4a9 9 0 1 1 10.8 0"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Hot Water Systems</h3>
<p className="text-sm text-slate-600 leading-relaxed">Installation, repairs, and replacement of electric and gas hot water units.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.246-3.646-3-4.685C5.438 3.328 6.476 3 8 3c4.418 0 8 3.582 8 8 0 3.866-3.134 7-7 7-1.307 0-2.527-.362-3.568-.994a4.872 4.872 0 0 0-1.294-.658A2.5 2.5 0 0 1 8.5 14.5Z"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Gas Fitting</h3>
<p className="text-sm text-slate-600 leading-relaxed">Licensed gas fitting for new appliances, lines, and leak detection services.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21h18"></path>
<path d="M5 21V7l8-4 8 4v14"></path>
<path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Roof &amp; Gutter</h3>
<p className="text-sm text-slate-600 leading-relaxed">Repairing leaks, gutter replacements, and downpipe installations to protect your home.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10v6M2 10v6M12 2v2M12 20v2M5.6 5.6l1.4 1.4M18.4 5.6l-1.4 1.4M5.6 18.4l1.4-1.4M18.4 18.4l-1.4-1.4"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Drainage Repairs</h3>
<p className="text-sm text-slate-600 leading-relaxed">Expert diagnosis and repair of drainage issues for residential and small commercial sites.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="about">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-slate-800/50 blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-slate-800/50 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="[animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Locally owned and operated in North Rockhampton.</h2>
<div className="mt-6 space-y-6 text-slate-400 text-lg">
<p>
                                Grant Goltz Plumbing is a local business built on a reputation for reliability. We don't believe in sales hype or exaggerated claims—just honest advice and practical solutions that work.
                            </p>
<p>
                                Whether you're a homeowner dealing with a leaking tap or a small business needing gas compliance work, you deal directly with a professional who knows the local area and regulations.
                            </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6">
<div className="border-l-2 border-slate-700 pl-4">
<div className="text-white font-semibold">Service Area</div>
<div className="text-sm text-slate-500 mt-1">North Rockhampton &amp; Surrounds</div>
</div>
<div className="border-l-2 border-slate-700 pl-4">
<div className="text-white font-semibold">Focus</div>
<div className="text-sm text-slate-500 mt-1">Residential &amp; Small Commercial</div>
</div>
</div>
</div>
<div className="relative [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll">
<div className="aspect-video w-full rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center">

<div className="w-full h-full bg-slate-800 relative opacity-50">
<svg className="absolute inset-0 w-full h-full text-slate-700" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3">
<div className="bg-emerald-500 w-3 h-3 rounded-full animate-pulse"></div>
<span className="text-white font-medium text-sm">Based in North Rockhampton</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-3xl mx-auto px-6 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
<div className="p-8 sm:p-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Need a plumber?</h2>
<p className="mt-3 text-slate-600">Contact us for enquiries or to book a job.</p>
<div className="mt-8 mb-10">
<a className="inline-flex items-center gap-3 text-3xl sm:text-4xl font-bold text-slate-900 hover:text-slate-700 transition-colors" href="tel:0407376602">
<svg className="text-slate-900" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
                                0407 376 602
                            </a>
<p className="text-sm text-slate-500 mt-2 font-medium">Available for North Rockhampton and surrounds</p>
</div>
<div className="border-t border-slate-100 pt-10">
<p className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Send a message</p>
<form className="space-y-4 max-w-md mx-auto" onsubmit="event.preventDefault(); alert('Thank you for your enquiry. We will call you shortly.');">
<div>
<label className="sr-only" htmlFor="name">Name</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all" id="name" placeholder="Your Name" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Phone</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all" id="phone" placeholder="Phone Number" required="" type="tel"/>
</div>
<div>
<label className="sr-only" htmlFor="service">Service Needed</label>
<select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all appearance-none" id="service">
<option disabled="" selected="" value="">Type of Service...</option>
<option value="maintenance">General Maintenance</option>
<option value="blocked_drains">Blocked Drains</option>
<option value="hot_water">Hot Water System</option>
<option value="gas">Gas Fitting</option>
<option value="roof">Roof/Gutter</option>
<option value="other">Other</option>
</select>
</div>
<button className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" type="submit">
                                    Request Callback
                                </button>
</form>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-1">
<span className="font-bold text-lg text-slate-900">Grant Goltz Plumbing</span>
<p className="text-sm text-slate-500 mt-2">Pty Ltd</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-3">Location</h4>
<p className="text-sm text-slate-600">North Rockhampton, QLD</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-3">Contact</h4>
<p className="text-sm text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="tel:0407376602">0407 376 602</a>
</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-3">Services</h4>
<ul className="text-sm text-slate-600 space-y-1">
<li>Maintenance</li>
<li>Blocked Drains</li>
<li>Hot Water</li>
<li>Gas Fitting</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Grant Goltz Plumbing Pty Ltd. All rights reserved.</p>
<div className="text-xs text-slate-400">Locally Owned &amp; Operated</div>
</div>
</div>
</footer>


    </>
  );
}
