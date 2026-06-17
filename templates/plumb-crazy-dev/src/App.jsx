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
      

<nav className="fixed z-50 glass-nav w-full border-slate-200/60 border-b top-0">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:water-drop-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-lg group-hover:opacity-80 transition-opacity">PLUMB CRAZY</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">

<div className="relative group h-16 flex items-center">
<button className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer">
                        Services
                        <iconify-icon className="" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>

<div className="dropdown-content absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
<div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden p-2 flex flex-col gap-1">
<a className="block px-4 py-2.5 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors text-slate-600 text-sm" href="#">
<span className="block text-slate-900 font-medium">Drain Cleaning</span>
<span className="text-xs text-slate-400 font-normal">Clogs &amp; blockages</span>
</a>
<a className="block px-4 py-2.5 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors text-slate-600 text-sm" href="#">
<span className="block text-slate-900 font-medium">Sewer Services</span>
<span className="text-xs text-slate-400 font-normal">Repair &amp; inspection</span>
</a>
<a className="block px-4 py-2.5 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors text-slate-600 text-sm" href="#">
<span className="block text-slate-900 font-medium">Water Heaters</span>
<span className="text-xs text-slate-400 font-normal">Tank &amp; tankless</span>
</a>
<a className="block px-4 py-2.5 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors text-slate-600 text-sm" href="#">
<span className="block text-slate-900 font-medium">Sump Pumps</span>
<span className="text-xs text-slate-400 font-normal">Basement protection</span>
</a>
</div>
</div>
</div>
<a className="hover:text-blue-600 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-blue-600 transition-colors" href="#work">Our Work</a>
<a className="hover:text-blue-600 transition-colors" href="#contact">Contact</a>
</div>

<a className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all shadow-sm ring-1 ring-slate-900" href="tel:3168713006">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<span>(316) 871-3006</span>
</a>
</div>
</nav>

<section className="overflow-hidden min-h-[600px] flex pt-32 pb-24 relative items-center">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Plumber working under sink" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4c43275-d9ad-472a-a522-442111d82fec_3840w.jpg"/>
<div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white mb-8 animate-fade-in-up">
<div className="flex items-center gap-0.5 text-yellow-400">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-wide">5-Star Google Reviews</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                Don’t let plumbing drive you crazy. <span className="text-blue-400">Let us handle it.</span>
</h1>
<p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Trusted Wichita plumbers for residential, commercial &amp; rental properties. Funny name, serious plumbing. No upselling, just honest work.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2 font-medium transition-all shadow-lg shadow-blue-600/20 border border-transparent" href="tel:3168713006">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Call or Text Now
                </a>
<a className="w-full sm:w-auto h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-lg flex items-center justify-center gap-2 font-medium transition-all" href="#contact">
                    Request a Quote
                </a>
</div>

<div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Fully Licensed</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:tag-price-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Fair Pricing</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Local Wichita</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Family Owned</span>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-2xl mb-12">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Complete Plumbing Solutions</h2>
<p className="text-slate-500">From clogged drains to full sewer replacements, we handle it all with precision and care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-200 bg-slate-50/50 hover:bg-blue-50/30 transition-all duration-300 block" href="#">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:water-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium text-slate-900">Drain Cleaning</h3>
<iconify-icon className="text-slate-300 group-hover:text-blue-600 transition-colors" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Fast and effective clearing of kitchen, bathroom, and utility drains.</p>
</a>

<a className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-200 bg-slate-50/50 hover:bg-blue-50/30 transition-all duration-300 block" href="#">
<div className="flex group-hover:scale-110 transition-transform text-blue-600 bg-white w-10 h-10 border-slate-200 border rounded-lg mb-4 items-center justify-center">
<iconify-icon icon="solar:tunnel-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium text-slate-900">Sewer Services</h3>
<iconify-icon className="text-slate-300 group-hover:text-blue-600 transition-colors" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Camera inspections, cleaning, and line replacements.</p>
</a>

<a className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-200 bg-slate-50/50 hover:bg-blue-50/30 transition-all duration-300 block" href="#">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium text-slate-900">Water Heaters</h3>
<iconify-icon className="text-slate-300 group-hover:text-blue-600 transition-colors" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Installation of traditional and tankless water systems.</p>
</a>

<a className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-200 bg-slate-50/50 hover:bg-blue-50/30 transition-all duration-300 block" href="#">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:umbrella-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium text-slate-900">Sump Pumps</h3>
<iconify-icon className="text-slate-300 group-hover:text-blue-600 transition-colors" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Keep your basement dry with reliable pump systems.</p>
</a>

<a className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-200 bg-slate-50/50 hover:bg-blue-50/30 transition-all duration-300 block" href="#">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium text-slate-900">Commercial</h3>
<iconify-icon className="text-slate-300 group-hover:text-blue-600 transition-colors" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Maintenance for businesses and rental properties.</p>
</a>

<a className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-200 bg-slate-50/50 hover:bg-blue-50/30 transition-all duration-300 block" href="#">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wrench-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium text-slate-900">General Repairs</h3>
<iconify-icon className="text-slate-300 group-hover:text-blue-600 transition-colors" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Leaks, toilets, faucets—we fix the small things.</p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="work">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div className="max-w-xl">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Clean Work, Every Time</h2>
<p className="text-slate-500">We take pride in leaving your home cleaner than we found it. Here are some of our recent installations and repairs in Wichita.</p>
</div>
<a className="text-blue-600 text-sm font-medium hover:text-blue-700 inline-flex items-center gap-1" href="#">
                    View Gallery <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="relative group rounded-xl overflow-hidden aspect-[4/5]">
<img alt="Clean pipe installation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="text-white text-sm font-medium">Water Heater Install</span>
<p className="text-slate-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">East Wichita</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden aspect-[4/5]">
<img alt="Faucet repair" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1637939157381-fe0d03755314?w=800&amp;q=80"/>
<div className="group-hover:translate-y-0 transition-transform bg-gradient-to-t from-slate-900/90 to-transparent pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4">
<span className="text-white text-sm font-medium">Fixture Replacement</span>
<p className="text-slate-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Riverside</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden aspect-[4/5]">
<img alt="Drain cleaning" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="text-white text-sm font-medium">Sewer Line Repair</span>
<p className="text-slate-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">College Hill</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden aspect-[4/5]">
<img alt="Pipe welding" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="text-white text-sm font-medium">Piping Update</span>
<p className="text-slate-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Derby, KS</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-4">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
                    Community Trusted
                </div>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">What Your Neighbors Are Saying</h2>
<div className="flex items-center justify-center gap-2 mb-2">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<span className="text-slate-900 font-bold">5.0</span>
</div>
<p className="text-slate-500 text-sm">Based on 120+ Verified Google Reviews</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 leading-relaxed text-sm">"Absolutely the best plumbing experience I've had. They came out same-day when my water heater died. No sales pitch, just fixed it fast."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">S</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Sarah Jenkins</h4>
<p className="text-xs text-slate-500">Local Guide</p>
</div>
<iconify-icon className="ml-auto opacity-50" icon="logos:google-icon" width="16"></iconify-icon>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 leading-relaxed text-sm">"Called Plumb Crazy for a sewer line backup. They were professional, clean, and the price was exactly what they quoted upfront."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">M</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Mike Thompson</h4>
<p className="text-xs text-slate-500">Homeowner</p>
</div>
<iconify-icon className="ml-auto opacity-50" icon="logos:google-icon" width="16"></iconify-icon>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 leading-relaxed text-sm">"Finally a plumber who cleans up after themselves! The technician was polite and explained everything clearly. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">D</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">David Wilson</h4>
<p className="text-xs text-slate-500">Business Owner</p>
</div>
<iconify-icon className="ml-auto opacity-50" icon="logos:google-icon" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-slate-200 bg-slate-50">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-16">
<div className="lg:w-1/2">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-6">Fair, Professional,No Funny Business.</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                    We believe plumbing shouldn't be a hassle. Plumb Crazy was built on the idea that you deserve honest work at a fair price, without the high-pressure sales tactics used by the big franchises.
                </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 text-sm">Transparent Pricing</h4>
<p className="text-xs text-slate-500 mt-1">No hidden fees or surprise costs at the end of the job.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 text-sm">Wichita Focused</h4>
<p className="text-xs text-slate-500 mt-1">We live here, we work here. Our reputation matters locally.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 text-sm">No Upselling</h4>
<p className="text-xs text-slate-500 mt-1">We fix what needs fixing. We won't sell you what you don't need.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-6">How We Work</h3>
<div className="relative">
<div className="absolute left-3 top-2 bottom-4 w-px bg-slate-100"></div>
<div className="relative flex gap-5 mb-8">
<div className="relative z-10 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-medium flex items-center justify-center shrink-0">1</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Call or Text</h4>
<p className="text-xs text-slate-500 mt-1">(316) 871-3006. We respond quickly to schedule your visit.</p>
</div>
</div>
<div className="relative flex gap-5 mb-8">
<div className="relative z-10 w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-medium flex items-center justify-center shrink-0">2</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">On-Site Assessment</h4>
<p className="text-xs text-slate-500 mt-1">We diagnose the issue and explain the solution clearly.</p>
</div>
</div>
<div className="relative flex gap-5">
<div className="relative z-10 w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-medium flex items-center justify-center shrink-0">3</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Job Done Right</h4>
<p className="text-xs text-slate-500 mt-1">Professional repair with a clean workspace left behind.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-20" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<div className="flex items-center gap-2 text-white mb-6">
<iconify-icon className="text-blue-500" icon="solar:water-drop-linear" width="24"></iconify-icon>
<span className="font-semibold tracking-tight text-xl">PLUMB CRAZY</span>
</div>
<p className="text-slate-400 mb-8 max-w-sm">
                        Dependable plumbing services for Wichita, KS and a 30-mile radius including Sedgwick County.
                    </p>
<div className="space-y-4">
<a className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors" href="tel:3168713006">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
</div>
<span className="font-medium">(316) 871-3006</span>
</a>
<div className="flex items-center gap-3 text-slate-400">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
</div>
<span className="text-sm">Wichita, KS &amp; Surrounding Areas</span>
</div>
<div className="flex items-center gap-3 text-slate-400">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-sm">Mon - Fri: 8am - 5pm</span>
</div>
</div>
</div>

<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
<h3 className="text-white font-medium mb-4">Request a Service</h3>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! This is a demo form.');">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Full Name</label>
<input className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Phone Number</label>
<input className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="(316) 555-0123" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">What do you need help with?</label>
<select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all">
<option>General Repair</option>
<option>Drain Cleaning</option>
<option>Water Heater</option>
<option>Sewer Line</option>
<option>Other</option>
</select>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-colors mt-2 text-sm shadow-lg shadow-blue-900/20">
                            Submit Request
                        </button>
</form>
</div>
</div>
<div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 Plumb Crazy. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-300" href="#">Privacy Policy</a>
<a className="hover:text-slate-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
