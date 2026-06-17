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
      

<header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon height="18" icon="solar:wrench-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<span className="font-semibold text-base tracking-tight text-slate-900">Jay's Auto</span>
</a>

<nav className="hidden md:flex gap-8 items-center">
<div className="relative group">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 py-2">
                        Services <iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>

<div className="absolute left-0 top-full pt-1 opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50 w-48">
<div className="bg-white border border-slate-200 rounded-lg shadow-lg p-1.5 flex flex-col">
<a className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">Diagnostics</a>
<a className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">Routine Service</a>
<a className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">Brakes &amp; Suspension</a>
<a className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">Major Repairs</a>
</div>
</div>
</div>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors py-2" href="#">Diagnostics</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors py-2" href="#">About</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="tel:5165550198">
                    (516) 555-0198
                </a>
<a className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors shadow-sm" href="#">
                    Book Service
                </a>
</div>

<button className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 focus:outline-none" onclick="document.getElementById('mobile-nav').classList.toggle('hidden')">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>

<div className="hidden border-t border-slate-200 bg-white absolute w-full left-0 top-full shadow-lg" id="mobile-nav">
<div className="flex flex-col p-4 space-y-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Diagnostics</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">About</a>
<div className="h-px bg-slate-100 my-2"></div>
<a className="text-sm font-medium text-slate-600 flex items-center gap-2" href="tel:5165550198">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon> (516) 555-0198
                </a>
<a className="inline-flex items-center justify-center h-10 w-full text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800" href="#">
                    Book Service
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-24 pb-32 overflow-hidden">

<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 relative flex items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
</span>
                    Accepting new vehicles on Long Island
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl">
                    Masterful auto repair.<br/>
<span className="text-slate-500">Without the runaround.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed">
                    Precision diagnostics and reliable repairs for both foreign and domestic vehicles. Experience dealership-level expertise with local garage honesty.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors shadow-sm w-full sm:w-auto" href="#">
                        Schedule an Appointment
                    </a>
<a className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors shadow-sm w-full sm:w-auto gap-2" href="#">
                        View our Services
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Care</h2>
<p className="text-base text-slate-500 max-w-xl">From routine maintenance to complex engine rebuilds, our facility is equipped with modern tools to handle it all.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm relative overflow-hidden flex flex-col justify-between group min-h-[28rem] md:min-h-[24rem]">
<div className="relative z-10">
<div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-6">
<iconify-icon icon="solar:laptop-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2 tracking-tight">Advanced Diagnostics</h3>
<p className="text-sm text-slate-500 max-w-sm">We don't guess. We utilize state-of-the-art scanning tools to pinpoint exact issues, saving you time and money on unnecessary parts.</p>
</div>

<div className="relative z-10 w-full max-w-md mt-8 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
<span className="text-xs font-medium text-slate-600">OBD-II System Scan</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live
                                </span>
</div>
<div className="p-4 space-y-5">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="font-medium text-slate-700">Powertrain Control</span>
<span className="text-slate-500">Scanning...</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[65%] rounded-full relative">
<div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite] -translate-x-full"></div>
</div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="font-medium text-slate-700">Fuel Trim Values</span>
<span className="text-slate-500">Optimal</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col hover:border-slate-300 transition-colors min-h-[24rem]">
<div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-6">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2 tracking-tight">Routine Service</h3>
<p className="text-sm text-slate-500 mb-8">Oil changes, fluid flushes, and scheduled factory maintenance to keep your warranty intact.</p>
<div className="mt-auto space-y-3">
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Synthetic Oil Changes
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Filter Replacements
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Multi-point Inspections
                            </div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col hover:border-slate-300 transition-colors min-h-[24rem]">
<div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-6">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2 tracking-tight">Brakes &amp; Suspension</h3>
<p className="text-sm text-slate-500">Complete brake jobs, rotor turning, strut replacement, and suspension tuning for a safe, comfortable ride.</p>
<div className="mt-auto">
<a className="inline-flex items-center justify-center h-9 px-4 w-full text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-md hover:bg-slate-100 transition-colors" href="#">
                                View Pricing
                            </a>
</div>
</div>

<div className="md:col-span-2 bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-sm relative overflow-hidden flex flex-col justify-center min-h-[24rem]">
<div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
<div className="relative z-10 max-w-md">
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white mb-6 border border-white/10">
<iconify-icon icon="solar:engine-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Major Mechanical Repairs</h3>
<p className="text-sm text-slate-400 mb-8">Engine replacements, transmission rebuilds, and complex drivability issues. Our master technicians handle the jobs other shops turn away.</p>
<a className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-slate-900 bg-white rounded-md hover:bg-slate-50 transition-colors shadow-sm" href="tel:5165550198">
                                Call to Discuss
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">The local alternative to the dealership.</h2>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                            We built our shop on a simple premise: provide dealership-quality service without the aggressive upselling or bloated hourly rates. When you bring your car to Jay's, you deal directly with the people working on it.
                        </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 shrink-0">
<iconify-icon icon="solar:tag-price-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Transparent Pricing</h4>
<p className="text-sm text-slate-500 mt-1">Detailed, itemized quotes before any work begins. No surprises on your final bill.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 shrink-0">
<iconify-icon icon="solar:diploma-verified-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Certified Technicians</h4>
<p className="text-sm text-slate-500 mt-1">Our staff undergoes continuous training on the latest automotive systems and hybrid technologies.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-100 rounded-2xl relative overflow-hidden shadow-sm aspect-square sm:aspect-[4/3]">

<img alt="Professional mechanic working in modern auto shop" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full p-8 sm:p-10">
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-4xl font-semibold tracking-tight text-white mb-1">20+</div>
<div className="text-sm font-medium text-slate-300">Years in Business</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-white mb-1">10k</div>
<div className="text-sm font-medium text-slate-300">Vehicles Serviced</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-5">
<a className="flex items-center gap-2 group mb-4" href="#">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:wrench-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<span className="font-semibold text-base tracking-tight text-slate-900">Jay's Auto</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                        Providing Long Island with uncompromising quality in automotive repair and maintenance. Honest work, fair prices, guaranteed.
                    </p>
</div>
<div className="md:col-span-2 md:col-start-7">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Services</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Diagnostics</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Brakes &amp; Rotors</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Oil &amp; Filters</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Engine Repair</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Company</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Testimonials</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Legal</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Warranty Info</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                    © 2023 Jay's Foreign &amp; Domestic. All rights reserved.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">Social</span>
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
