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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-semibold text-slate-900 tracking-tighter text-lg uppercase">CINCY’S 1ST PAINTING</span>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#estimate">
                Get an Estimate
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

<div className="space-y-8">

<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800">
<div className="flex text-amber-500">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<span>5/5 Google Rating</span>
</div>
<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                        Tired of Faded, Outdated Paint?
                        <span className="text-slate-400 block mt-2">We Paint Cincinnati Homes Right — The First Time</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed font-light">
                        Interior &amp; exterior painting for homeowners who want clean lines, lasting finishes, and a stress-free experience.
                    </p>
</div>

<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-900">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
                        Locally Owned &amp; Operated
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-900">
<iconify-icon icon="solar:paint-roller-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
                        Interior &amp; Exterior Painting Experts
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-900">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
                        Clean Crews • On-Time Completion
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-900">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
                        Respect for Your Home — Always
                    </li>
</ul>

<a className="lg:hidden inline-flex w-full justify-center items-center h-12 rounded-lg bg-slate-900 text-white font-medium text-sm" href="#estimate">
                    Get My Free Estimate
                </a>
</div>

<div className="relative" id="estimate">
<div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl blur opacity-50"></div>
<div className="relative bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">

<div className="mb-6 pb-6 border-b border-slate-100">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-900 text-xs font-semibold uppercase tracking-wide rounded-full mb-3">
<iconify-icon icon="solar:tag-price-linear" width="14"></iconify-icon>
                            Limited-Time Offer
                        </div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Get Up to $750 OFF</h3>
<p className="text-xs text-slate-500 mt-1">Available for homeowners near Ehrman Ave, Clifton, Hyde Park, and surrounding areas.</p>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Get Your Free Painting Estimate</h4>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">Name</label>
<input className="w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder:text-slate-300" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">Phone</label>
<input className="w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder:text-slate-300" placeholder="(513) 555-0123" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">Email</label>
<input className="w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder:text-slate-300" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">Address</label>
<input className="w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder:text-slate-300" placeholder="123 Main St, Cincinnati" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500">Type of Project</label>
<div className="grid grid-cols-3 gap-2">
<label className="cursor-pointer">
<input checked="" className="project-radio hidden" name="project_type" type="radio" value="interior"/>
<div className="flex flex-col items-center justify-center py-3 border border-slate-200 rounded-lg text-slate-500 hover:border-slate-300 transition-all">
<iconify-icon className="mb-1" icon="solar:sofa-linear" width="20"></iconify-icon>
<span className="text-[10px] font-medium uppercase tracking-wide">Interior</span>
</div>
</label>
<label className="cursor-pointer">
<input className="project-radio hidden" name="project_type" type="radio" value="exterior"/>
<div className="flex flex-col items-center justify-center py-3 border border-slate-200 rounded-lg text-slate-500 hover:border-slate-300 transition-all">
<iconify-icon className="mb-1" icon="solar:home-linear" width="20"></iconify-icon>
<span className="text-[10px] font-medium uppercase tracking-wide">Exterior</span>
</div>
</label>
<label className="cursor-pointer">
<input className="project-radio hidden" name="project_type" type="radio" value="both"/>
<div className="flex flex-col items-center justify-center py-3 border border-slate-200 rounded-lg text-slate-500 hover:border-slate-300 transition-all">
<iconify-icon className="mb-1" icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
<span className="text-[10px] font-medium uppercase tracking-wide">Both</span>
</div>
</label>
</div>
</div>
<button className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 mt-2" type="button">
                            Get My Free Estimate
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-center text-slate-400 mt-3">
                            No obligation. No pushy sales. Just honest pricing.
                        </p>
</form>
</div>
</div>
</div>
</header>

<section className="bg-slate-50 py-20 px-4 sm:px-6">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Your Home Deserves Better Than Worn-Out Paint</h2>
<p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
                    Peeling exterior paint, outdated colors, and sloppy lines make even beautiful homes feel neglected. Worse — rushed paint jobs don’t last, costing you more in the long run.
                </p>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-12 shadow-sm">
<div className="flex flex-col md:flex-row gap-8 md:gap-12">
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:shield-check-linear" width="20"></iconify-icon>
                            Our Solution
                        </h3>
<p className="text-sm text-slate-600 mb-6">At Cincy’s 1st Painting, we focus on doing the job right — not fast.</p>
</div>
<div className="flex-1 grid grid-cols-1 gap-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-900 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600">Proper prep before painting starts</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-900 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600">Premium materials for long-lasting results</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-900 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600">Clean, straight lines with zero shortcuts</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-900 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600">A finished look you’ll actually be proud of</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">We Specialize In</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:paint-roller-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Interior Painting</h3>
<p className="text-xs text-slate-500 leading-relaxed">Full room refreshes, color changes, and detailed wall preparation.</p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Exterior Painting</h3>
<p className="text-xs text-slate-500 leading-relaxed">Siding, stucco, and brick painting that withstands Cincinnati weather.</p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bath-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Bathrooms &amp; Kitchens</h3>
<p className="text-xs text-slate-500 leading-relaxed">Moisture-resistant paints and specialty finishes for high-traffic areas.</p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:ruler-pen-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Trim, Doors &amp; Accents</h3>
<p className="text-xs text-slate-500 leading-relaxed">Precision painting for baseboards, crown molding, and statement walls.</p>
</div>
</div>
<p className="text-center text-sm text-slate-400 mt-10">Whether it’s one room or your entire home, we handle it with care and precision.</p>
</section>

<section className="border-t border-slate-100 bg-slate-50/50 py-20 px-4 sm:px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-6">Trusted by Cincinnati Homeowners</h2>
<p className="text-slate-600 text-sm leading-relaxed mb-10">
                Owned and operated by Josue, Cincy’s 1st Painting proudly serves homeowners across 
                <span className="font-medium text-slate-900">Clifton, Hyde Park, Mt. Adams</span>, and nearby neighborhoods.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
<div className="bg-white p-5 rounded-lg border border-slate-200 flex gap-4 items-start">
<div className="text-slate-900 mt-0.5">
<iconify-icon icon="solar:star-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">5-Star Reputation</h4>
<p className="text-xs text-slate-500 mt-1">Consistent top ratings on Google for reliability.</p>
</div>
</div>
<div className="bg-white p-5 rounded-lg border border-slate-200 flex gap-4 items-start">
<div className="text-slate-900 mt-0.5">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Reliable Scheduling</h4>
<p className="text-xs text-slate-500 mt-1">Showing up when we say we will. No guessing games.</p>
</div>
</div>
<div className="bg-white p-5 rounded-lg border border-slate-200 flex gap-4 items-start">
<div className="text-slate-900 mt-0.5">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Respectful Care</h4>
<p className="text-xs text-slate-500 mt-1">Treating your home like our own from start to cleanup.</p>
</div>
</div>
<div className="bg-white p-5 rounded-lg border border-slate-200 flex gap-4 items-start">
<div className="text-slate-900 mt-0.5">
<iconify-icon icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Perfect Results</h4>
<p className="text-xs text-slate-500 mt-1">Delivering flawless finishes—every time.</p>
</div>
</div>
</div>
<p className="text-xs text-slate-400 mt-8 italic">When you hire us, there are no surprises — just great work.</p>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-20 px-4 sm:px-6">
<div className="max-w-4xl mx-auto text-center space-y-8">
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Let’s Refresh Your Home — The Right Way</h2>
<p className="text-slate-400 text-base max-w-xl mx-auto">
                If your paint looks tired, now is the perfect time to upgrade.
            </p>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-white/90">
<span className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Fast, free estimate
                </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Expert color guidance
                </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Clear project plan
                </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Up to $750 OFF
                </span>
</div>
<div className="pt-6">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-slate-900 font-medium text-sm hover:bg-slate-100 transition-colors" href="#estimate">
                    Request My Free Estimate
                </a>
</div>
<div className="pt-12 border-t border-white/10 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<span className="uppercase tracking-widest">CINCY’S 1ST PAINTING</span>
<span>© 2024. All rights reserved.</span>
</div>
</div>
</footer>

    </>
  );
}
