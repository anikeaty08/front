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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg group-hover:bg-slate-800 transition-colors">
<span className="font-medium text-sm tracking-tighter">CE</span>
</div>
<span className="font-semibold tracking-tight text-sm text-slate-900">Cleaning Expert NY</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#signin">Sign in</a>
<a className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm shadow-slate-200" href="#book">Book now</a>
</div>
</div>
</nav>

<main className="pt-32 pb-16 sm:pt-40 sm:pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

<div className="flex-1 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-500 tracking-tight">Available for NYC Bookings Today</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-slate-900 mb-8 leading-[1.1]">
                        The new standard for <span className="text-slate-400">clean living.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg font-normal">
                        Experience hotel-grade cleaning for your NYC apartment. Vetted professionals, eco-friendly products, and seamless booking in under 60 seconds.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<div className="relative w-full sm:w-auto">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full sm:w-64 pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-100 focus:border-slate-300 transition-all placeholder:text-slate-400" placeholder="Enter NYC Zip Code" type="text"/>
</div>
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200/50">
                            Get Started
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="mt-12 flex items-center gap-6 text-slate-400">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Bonded &amp; Insured</span>
<div className="h-4 w-px bg-slate-200"></div>
<iconify-icon icon="solar:star-circle-linear" width="24"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">5.0 Star Rating</span>
</div>
</div>

<div className="flex-1 w-full lg:w-auto">
<div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Instant Estimate</h3>
<span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">Live Quote</span>
</div>

<div className="mb-8">
<label className="block text-xs font-medium text-slate-500 mb-3 uppercase tracking-wide">Home Size</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="size" type="radio"/>
<div className="text-center py-3 border border-slate-200 rounded-lg bg-white text-slate-600 text-sm font-medium transition-all peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white hover:border-slate-300">
                                            Studio
                                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="text-center py-3 border border-slate-200 rounded-lg bg-white text-slate-600 text-sm font-medium transition-all peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white hover:border-slate-300">
                                            1 Bed
                                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="text-center py-3 border border-slate-200 rounded-lg bg-white text-slate-600 text-sm font-medium transition-all peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white hover:border-slate-300">
                                            2+ Bed
                                        </div>
</label>
</div>
</div>

<div className="space-y-4 mb-8">
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-slate-100 transition-colors">
<iconify-icon icon="solar:fridge-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-700 font-medium">Inside Fridge</span>
</div>
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-slate-100 transition-colors">
<iconify-icon icon="solar:chef-hat-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-700 font-medium">Inside Oven</span>
</div>
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
</div>
</label>
</div>

<div className="border-t border-slate-100 pt-6 mt-6">
<div className="flex items-end justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Estimated Total</span>
<span className="text-3xl font-semibold tracking-tight text-slate-900">$149<span className="text-lg text-slate-400 font-normal">.00</span></span>
</div>
<button className="bg-slate-50 text-slate-900 border border-slate-200 px-4 py-2 rounded-md text-xs font-medium hover:bg-white hover:border-slate-300 transition-all">
                                        View Breakdown
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-slate-100 py-10 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Trusted by residents at</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-60">

<span className="text-lg font-semibold tracking-tighter text-slate-800">Related</span>
<span className="text-lg font-semibold tracking-tighter text-slate-800 italic">Extell</span>
<span className="text-lg font-bold tracking-tight text-slate-800">TF<span className="font-light">Cornerstone</span></span>
<span className="text-lg font-semibold tracking-widest text-slate-800 uppercase">Glenwood</span>
<span className="text-lg font-serif italic text-slate-800">Brodsky</span>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Cleaning perfected.</h2>
<p className="text-slate-500 text-lg">We've stripped away the hassle of traditional cleaning services. No phone tag, no cash payments, just clean.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Eco-Friendly &amp; Safe</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        We use only non-toxic, hypoallergenic products safe for pets and children. Sustainable cleaning that doesn't compromise on power.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Vetted Experts</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Every cleaner undergoes a strict background check, in-person interview, and rigorous training program before entering your home.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Seamless Management</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Book, reschedule, and tip entirely online. Receive real-time updates when your cleaner arrives and finishes the job.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Every corner, covered.</h2>
<p className="text-slate-500 mb-10">Our standardized checklist ensures consistency across every visit. From baseboards to ceiling fans, we don't miss a spot.</p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-slate-900">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Living Areas &amp; Bedrooms</h4>
<p className="text-xs text-slate-500 mt-1">Dusting surfaces, vacuuming/mopping floors, making beds, emptying trash.</p>
</div>
</div>
<div className="w-full h-px bg-slate-200"></div>
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-slate-900">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Kitchen</h4>
<p className="text-xs text-slate-500 mt-1">Countertops, stovetop, exterior of appliances, microwave interior, sink polished.</p>
</div>
</div>
<div className="w-full h-px bg-slate-200"></div>
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-slate-900">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Bathrooms</h4>
<p className="text-xs text-slate-500 mt-1">Toilets, showers, tubs scrubbed. Mirrors cleaned. Fixtures shined.</p>
</div>
</div>
</div>
</div>

<div className="relative h-96 bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col justify-between overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-slate-900"></div>
<div className="space-y-6 opacity-40 blur-[1px] select-none pointer-events-none">
<div className="h-4 bg-slate-100 rounded w-3/4"></div>
<div className="h-4 bg-slate-100 rounded w-1/2"></div>
<div className="h-4 bg-slate-100 rounded w-5/6"></div>
</div>
<div className="z-10 bg-white/80 backdrop-blur-xl border border-slate-200 p-6 rounded-xl shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4">
<div className="flex items-center gap-3 mb-4">
<div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Cleaning Complete</div>
<div className="text-xs text-slate-500">10:42 AM • 450 W 42nd St</div>
</div>
</div>
<div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Simple, transparent pricing.</h2>
<p className="text-slate-500 mb-12">Save up to 20% with recurring cleanings. No contracts, cancel anytime.</p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors text-left">
<div className="text-sm font-medium text-slate-900 mb-1">One-Time</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Standard</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Flexible scheduling
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 100% Satisfaction Guarantee
                        </li>
</ul>
<button className="w-full py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Select</button>
</div>

<div className="p-6 rounded-xl border border-slate-900 bg-slate-900 text-white text-left relative shadow-xl">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-slate-900 border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Most Popular</div>
<div className="text-sm font-medium text-slate-300 mb-1">Bi-Weekly</div>
<div className="text-2xl font-semibold tracking-tight text-white mb-4">Save 15%</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Consistent cleaner
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Priority support
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Automated billing
                        </li>
</ul>
<button className="w-full py-2 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">Select</button>
</div>

<div className="p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors text-left">
<div className="text-sm font-medium text-slate-900 mb-1">Weekly</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Save 20%</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Always fresh home
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Same day &amp; time
                        </li>
</ul>
<button className="w-full py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Select</button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded-md">
<span className="font-medium text-xs tracking-tighter">CE</span>
</div>
<span className="font-semibold tracking-tight text-sm text-slate-900">Cleaning Expert NY</span>
</div>
<p className="text-sm text-slate-500 max-w-xs">
                        Refining the residential cleaning experience in New York City.
                    </p>
</div>
<div className="flex gap-12 sm:gap-24">
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Company</h4>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">About</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Careers</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Blog</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Legal</h4>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Cookies</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Contact</h4>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">support@cleaningexpertny.com</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">1-800-CLEAN-NY</a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<span className="text-xs text-slate-400">© 2023 Cleaning Expert NY Inc. All rights reserved.</span>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
