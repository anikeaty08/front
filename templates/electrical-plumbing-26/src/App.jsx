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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
<span className="font-semibold tracking-tighter text-sm">E&amp;P</span>
</div>
<span className="text-sm font-medium text-slate-900 tracking-tight group-hover:text-slate-600 transition-colors">Store</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#details">Location</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#stock">Check Stock</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-medium transition-all shadow-sm hover:shadow-md" href="tel:0590200704">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>059 020 0704</span>
</a>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="relative pt-32 pb-16 px-6 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto">

<div className="flex justify-center md:justify-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50/80 backdrop-blur-sm border border-orange-100 mb-6 shadow-sm">
<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
<span className="text-xs font-medium text-orange-700">Closed now · Opens at 7:00 AM</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

<div className="lg:col-span-2">
<h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm text-center md:text-left">
                        Electrical And Plumbing Store
                    </h1>
<p className="text-lg text-slate-600 font-light mb-8 leading-relaxed text-center md:text-left">
                        Premium building materials for professionals and homeowners in As Sulamaniyah, Riyadh.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 hover:translate-y-[-1px]">
<iconify-icon icon="solar:map-arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Get Directions
                        </button>
<button className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all">
<iconify-icon icon="solar:chat-line-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Inquire Product
                        </button>
</div>

<div className="mt-8 flex items-center justify-center md:justify-start gap-3">
<div className="flex text-yellow-500">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<div className="h-4 w-px bg-slate-300"></div>
<span className="text-sm font-medium text-slate-900">4.5</span>
<span className="text-sm text-slate-500">(19 reviews)</span>
</div>
</div>

<div className="lg:col-span-3 w-full">
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 h-full min-h-[400px]">

<div className="col-span-2 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group border border-slate-200 shadow-sm cursor-pointer">
<img alt="Electrical Wiring" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5">
<div className="flex items-center gap-2 text-white mb-1">
<iconify-icon icon="solar:bolt-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider text-indigo-200">Featured</span>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">Electrical Supplies</h3>
<p className="text-slate-300 text-xs mt-1 font-light">Cables, Panels, Switches &amp; Lighting</p>
</div>
</div>

<div className="col-span-1 md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden group border border-slate-200 shadow-sm cursor-pointer">
<img alt="Plumbing Pipes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-4">
<h3 className="text-white font-medium text-sm tracking-tight">Plumbing</h3>
</div>
</div>

<div className="col-span-1 md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden group border border-slate-200 shadow-sm cursor-pointer">
<img alt="Construction Tools" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&amp;w=1924&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-4">
<h3 className="text-white font-medium text-sm tracking-tight">Hardware</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="px-6 pb-8">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4" id="details">

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all">
<div className="flex items-start gap-4">
<div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Location</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Prince Sultan Bin Abdulaziz St, Building No. 3256, As Sulamaniyah, Riyadh 12234
                        </p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all" id="services">
<div className="flex items-start gap-4">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<iconify-icon icon="solar:bag-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="w-full">
<h3 className="text-sm font-semibold text-slate-900 mb-3">Available Services</h3>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                In-store shopping
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                In-store pick-up
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                Delivery
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white py-16 px-6 relative z-10">
<div className="max-w-5xl mx-auto">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">How can we help you today?</h2>
<a className="text-sm text-indigo-600 hover:text-indigo-700 font-medium hidden md:inline-block" href="#">View Catalog →</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer">
<div className="mb-4 text-slate-400 group-hover:text-indigo-600 transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Write a review</h3>
<p className="text-xs text-slate-500">Share your experience with us.</p>
</div>

<div className="group relative p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer">
<div className="mb-4 text-slate-400 group-hover:text-indigo-600 transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" id="stock" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Check Stock</h3>
<p className="text-xs text-slate-500">Electrical &amp; plumbing supplies.</p>
</div>

<div className="group relative p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer">
<div className="mb-4 text-slate-400 group-hover:text-indigo-600 transition-colors">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Draft Message</h3>
<p className="text-xs text-slate-500">Inquire about specific products.</p>
</div>

<div className="group relative p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer">
<div className="mb-4 text-slate-400 group-hover:text-indigo-600 transition-colors">
<iconify-icon icon="solar:shop-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Compare</h3>
<p className="text-xs text-slate-500">See how we compare to nearby.</p>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-slate-50 relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-[0.03]">
<svg className="h-full w-full" height="100%" preserveaspectratio="none" viewbox="0 0 40 40" width="100%">
<path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
</svg>
</div>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-10">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">Check Availability</h2>
<p className="text-sm text-slate-500 mt-2">Find out if we have what you need before you visit.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault()">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow shadow-sm" placeholder="e.g., 20mm PVC pipe, Copper wire 4mm..." type="text"/>
</div>

<div className="relative">
<select className="appearance-none block w-full pl-3 pr-10 py-3 border border-slate-200 rounded-lg leading-5 bg-white text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm cursor-pointer">
<option>Electrical Supplies</option>
<option>Plumbing Supplies</option>
<option>Tools &amp; Hardware</option>
<option>Lighting</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-between py-2">
<span className="text-sm text-slate-600">Notify me when available</span>
<button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-indigo-600" role="switch" type="button">
<span aria-hidden="true" className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<button className="w-full bg-slate-900 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 mt-2">
                    Check Stock Status
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="font-bold tracking-tighter text-xs">E&amp;P</span>
</div>
<span className="text-sm text-slate-500">© 2023 Electrical And Plumbing Store</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Sitemap</a>
</div>
</div>
</footer>

    </>
  );
}
