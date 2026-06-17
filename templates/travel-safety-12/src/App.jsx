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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl tracking-tighter font-semibold text-slate-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white text-xs">S</div>
                SafeZones
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-slate-900 transition-colors" href="#use-cases">Use cases</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
</div>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 text-xs font-medium text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 shadow-sm hover:shadow-md" href="#get-access">
                Get Early Access
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Beta access now open
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Book the right neighborhood. <span className="text-slate-400">Feel safe anywhere.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-md">
                    We analyze neighborhoods, not just hotels — so you know where it’s safe before you travel. Data-backed peace of mind.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-12 px-6 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2">
                        Check safe neighborhoods
                        <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="h-12 px-6 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
                        See how it works
                    </button>
</div>
<div className="mt-8 flex items-center gap-4 text-xs text-slate-400 font-medium">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-slate-500">JM</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-slate-600">AL</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-slate-400">+2k</div>
</div>
<p>Travelers joined this month</p>
</div>
</div>

<div className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto">

<div className="absolute inset-0 bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-1/2 left-0 w-full h-3 bg-slate-100 -rotate-12 transform origin-left"></div>
<div className="absolute top-0 right-1/3 h-full w-4 bg-slate-100 rotate-12 transform origin-top"></div>


<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
<div className="absolute top-1/4 left-1/4 transform translate-x-4 translate-y-4">
<div className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-emerald-100 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 pin-ring relative"></div>
<span className="text-xs font-medium text-slate-700">Recommended</span>
</div>
</div>

<div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
<div className="absolute bottom-1/3 right-1/4 transform">
<div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-white shadow-sm"></div>
</div>

<div className="absolute bottom-10 left-1/3 w-20 h-20 bg-red-500/5 rounded-full blur-xl"></div>
<div className="absolute bottom-12 left-1/3 transform">
<div className="w-3 h-3 rounded-full bg-red-400 border-2 border-white shadow-sm"></div>
</div>

<div className="absolute bottom-6 right-6 left-6 glass-panel p-4 rounded-2xl border border-white/50 shadow-lg">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:city-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Safety Analysis</h3>
<p className="text-xs text-slate-500">Scanning neighborhood data...</p>
</div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-3/4 rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-400 font-medium">
<span>Risk Level</span>
<span className="text-emerald-600">Low (92/100)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-4">Booking a place is easy.<br/>Choosing the right area isn’t.</h2>
<p className="text-slate-500">Most travel platforms show you beautiful rooms but hide the reality of the street outside.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-4 shadow-sm">
<iconify-icon icon="solar:home-smile-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Great hotel, bad location</h3>
<p className="text-sm text-slate-500 leading-relaxed">Photos show the interior, but not the unlit street or noisy bar next door that keeps you up all night.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-4 shadow-sm">
<iconify-icon icon="solar:chat-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Conflicting advice</h3>
<p className="text-sm text-slate-500 leading-relaxed">Forums are outdated. What was safe 5 years ago might be a hotspot for petty crime today.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-4 shadow-sm">
<iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Too late to change</h3>
<p className="text-sm text-slate-500 leading-relaxed">You typically only realize the neighborhood feels unsafe after you've unpacked your bags.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="how-it-works">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-16">
<span className="text-emerald-600 font-medium tracking-wide text-xs uppercase mb-2 block">How it works</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900">We rank neighborhoods by <br/>safety and comfort</h2>
</div>
<div className="grid lg:grid-cols-3 gap-12 relative">

<div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-slate-200 z-0"></div>

<div className="relative z-10">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="solar:database-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">1. Aggregate Data</h3>
<p className="text-sm text-slate-500 leading-relaxed">We collect millions of data points, traveler reviews, crime statistics, and lighting conditions.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="solar:filters-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">2. Context Analysis</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our engine filters out noise to understand context: Is it dangerous, or just gritty? Is it quiet, or desolate?</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="solar:map-point-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">3. Smart Match</h3>
<p className="text-sm text-slate-500 leading-relaxed">We recommend specific zones that match your comfort level, from "Family Friendly" to "Lively Nightlife".</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-1/3">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Real-time insights for any city</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Search any destination and get an immediate breakdown of the best areas to stay. Avoid the red zones, book in the green zones.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Street-level safety scores
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Walkability index
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Noise level predictions
                        </li>
</ul>
</div>

<div className="lg:w-2/3 w-full">
<div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden">

<div className="border-b border-slate-100 p-4 flex items-center gap-4 bg-slate-50/50">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>
<div className="flex-1 bg-white border border-slate-200 h-8 rounded-lg flex items-center px-3 text-xs text-slate-400 gap-2">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
                                Berlin, Germany
                            </div>
</div>

<div className="flex h-[400px]">

<div className="w-1/2 border-r border-slate-100 p-4 space-y-3 overflow-y-auto">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Top Recommendations</div>

<div className="p-3 rounded-xl border border-emerald-100 bg-emerald-50/30 hover:bg-emerald-50/60 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<h4 className="font-medium text-slate-900 text-sm">Prenzlauer Berg</h4>
<span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-medium">Safe</span>
</div>
<p className="text-[11px] text-slate-500 line-clamp-2">Family friendly, wide streets, excellent lighting at night.</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                                        9.8 Safety Score
                                    </div>
</div>

<div className="p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-1">
<h4 className="font-medium text-slate-900 text-sm">Charlottenburg</h4>
<span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-medium">Safe</span>
</div>
<p className="text-[11px] text-slate-500 line-clamp-2">Upscale, quiet, very safe but further from nightlife.</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
                                        9.5 Safety Score
                                    </div>
</div>

<div className="p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer opacity-75">
<div className="flex justify-between items-start mb-1">
<h4 className="font-medium text-slate-900 text-sm">Neukölln North</h4>
<span className="bg-yellow-100 text-yellow-700 text-[10px] px-2 py-0.5 rounded font-medium">Moderate</span>
</div>
<p className="text-[11px] text-slate-500 line-clamp-2">Trendy but gritty. Be aware of surroundings at night.</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-yellow-600">
                                        7.2 Safety Score
                                    </div>
</div>
</div>

<div className="w-1/2 bg-slate-50 relative">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>

<div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
</div>

<div className="absolute bottom-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
<iconify-icon icon="solar:danger-circle-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="use-cases">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">Built for every traveler</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="text-emerald-600 mb-4">
<iconify-icon icon="solar:user-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Solo Travelers</h3>
<p className="text-xs text-slate-500 leading-relaxed">Navigate new cities with confidence knowing you're in a secure zone.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="text-emerald-600 mb-4">
<iconify-icon icon="solar:map-arrow-up-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">First-time Visitors</h3>
<p className="text-xs text-slate-500 leading-relaxed">Avoid the "tourist traps" that are actually hotspots for pickpockets.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="text-emerald-600 mb-4">
<iconify-icon icon="solar:moon-stars-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Late Arrivals</h3>
<p className="text-xs text-slate-500 leading-relaxed">Arriving at night? Ensure your walk from the station to the hotel is well-lit.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="text-emerald-600 mb-4">
<iconify-icon icon="solar:laptop-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Digital Nomads</h3>
<p className="text-xs text-slate-500 leading-relaxed">Find short-term rental areas that are quiet, safe, and connected.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-slate-300 text-4xl mb-6" icon="solar:quote-up-linear"></iconify-icon>
<h2 className="text-2xl md:text-3xl font-medium text-slate-900 mb-8 leading-relaxed">
                "I wish I had this before my trip to Paris. I booked a great Airbnb, but didn't realize until I arrived that the street felt unsafe at night. This tool would have saved me so much stress."
            </h2>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm">S</div>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">Solo Traveler • London</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="get-access">
<div className="absolute inset-0 bg-slate-900"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, #10b981 0, transparent 50%)'}}></div>
<div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Travel smarter. Stay safer.</h2>
<p className="text-slate-400 mb-10 text-lg">Join the waitlist to get early access to our safety maps for over 500 cities worldwide.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 h-12 px-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm transition-all hover:bg-white/15" placeholder="Enter your email" type="email"/>
<button className="h-12 px-6 rounded-xl bg-white text-slate-900 font-medium text-sm hover:bg-emerald-50 transition-colors whitespace-nowrap" type="button">
                    Get early access
                </button>
</form>
<p className="mt-4 text-xs text-slate-500">No spam. Early access invites only.</p>
</div>
</section>

<footer className="bg-slate-900 text-slate-500 py-12 border-t border-white/10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white font-semibold">
<div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center text-slate-900 text-[10px]">S</div>
                SafeZones
            </div>
<div className="text-xs">
                © 2023 SafeZones Inc. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
