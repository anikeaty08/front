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
      

<nav className="fixed w-full z-50 top-0 border-b border-zinc-100 glass">
<div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-600 rounded-lg text-white flex items-center justify-center">
<iconify-icon icon="solar:medical-kit-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-zinc-900 font-medium tracking-tight">Medicina Pharmacy</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-emerald-600 transition-colors" href="#">Home</a>
<a className="hover:text-emerald-600 transition-colors" href="#details">Details</a>
<a className="hover:text-emerald-600 transition-colors" href="#branches">Branches</a>
</div>
<a className="hidden sm:flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-800 transition-all" href="tel:0565203504">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                Call Now
            </a>
</div>
</nav>

<main className="pt-28 pb-20 px-6">
<div className="max-w-6xl mx-auto">

<div className="flex items-center gap-2 text-xs text-zinc-400 mb-6 overflow-x-auto whitespace-nowrap">
<a className="hover:text-zinc-800 transition-colors" href="#"><iconify-icon className="mb-0.5" icon="solar:home-linear" width="14"></iconify-icon></a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<a className="hover:text-zinc-800 transition-colors" href="#">Pharmacies</a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-800 font-medium">Al Shahba Branch</span>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-zinc-100 pb-12">
<div>
<div className="flex items-center gap-3 mb-3">
<span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Open Now
                        </span>
<span className="text-zinc-400 text-xs font-medium uppercase tracking-wider">Health Care</span>
</div>
<h1 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tight mb-2">Medicina Pharmacy</h1>
<p className="text-lg text-zinc-500 font-light">Al Shahba Branch, Mughaidir Suburb, Sharjah</p>
</div>
<div className="flex gap-3">
<a className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 text-zinc-600 hover:border-[#25D366] hover:text-[#25D366] transition-all bg-white shadow-sm" href="https://api.whatsapp.com/send?phone=0565203504">
<iconify-icon icon="solar:chat-round-linear" strokeWidth="1.5" width="22"></iconify-icon>
</a>
<a className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 text-zinc-600 hover:border-[#E1306C] hover:text-[#E1306C] transition-all bg-white shadow-sm" href="https://www.instagram.com/medicinapharmacies/">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="22"></iconify-icon>
</a>
<a className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 text-zinc-600 hover:border-[#1877F2] hover:text-[#1877F2] transition-all bg-white shadow-sm" href="https://www.facebook.com/medicina.pharmacies/">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12" id="details">

<div className="lg:col-span-2 space-y-8">

<div className="grid sm:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white transition-colors group">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 mb-4 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-colors">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">Mobile</p>
<a className="text-lg font-medium text-zinc-900 hover:text-emerald-600 transition-colors" href="tel:0565203504">056 520 3504</a>
</div>
<div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white transition-colors group">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 mb-4 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-colors">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">Landline</p>
<a className="text-lg font-medium text-zinc-900 hover:text-emerald-600 transition-colors" href="tel:065660741">06 566 0741</a>
</div>
</div>

<div className="border-t border-zinc-100 pt-8">
<h3 className="text-lg font-medium text-zinc-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:map-point-linear" width="20"></iconify-icon>
                            Location Details
                        </h3>
<div className="space-y-4">
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12 py-3 border-b border-zinc-50 hover:bg-zinc-50/50 rounded-lg px-2 transition-colors">
<span className="text-sm font-medium text-zinc-400 w-32 shrink-0">Address</span>
<span className="text-sm text-zinc-800">Wasit Street</span>
</div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12 py-3 border-b border-zinc-50 hover:bg-zinc-50/50 rounded-lg px-2 transition-colors">
<span className="text-sm font-medium text-zinc-400 w-32 shrink-0">Landmark</span>
<span className="text-sm text-zinc-800">Near Ajmal Perfumes</span>
</div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12 py-3 border-b border-zinc-50 hover:bg-zinc-50/50 rounded-lg px-2 transition-colors">
<span className="text-sm font-medium text-zinc-400 w-32 shrink-0">Area</span>
<a className="text-sm text-emerald-600 font-medium hover:underline" href="#">Mughaidir Suburb</a>
</div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12 py-3 border-b border-zinc-50 hover:bg-zinc-50/50 rounded-lg px-2 transition-colors">
<span className="text-sm font-medium text-zinc-400 w-32 shrink-0">City</span>
<a className="text-sm text-emerald-600 font-medium hover:underline" href="#">Sharjah</a>
</div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12 py-3 border-b border-zinc-50 hover:bg-zinc-50/50 rounded-lg px-2 transition-colors">
<span className="text-sm font-medium text-zinc-400 w-32 shrink-0">Website</span>
<a className="text-sm text-emerald-600 font-medium hover:underline flex items-center gap-1" href="http://medicina.ae/" rel="nofollow" target="_blank">
                                    medicina.ae
                                    <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="rounded-2xl overflow-hidden border border-zinc-200 h-64 relative group">
<div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Map Location" className="w-full h-full object-cover" src="//cc3.manta-r3.com/dist/ce50b5e2/img/company-map.jpg"/>
<button className="absolute bottom-4 right-4 z-20 bg-white text-zinc-900 px-4 py-2 rounded-lg text-xs font-medium shadow-lg hover:bg-zinc-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:map-linear" width="16"></iconify-icon>
                            Open in Maps
                        </button>
</div>
</div>

<div className="lg:col-span-1 space-y-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl font-medium text-zinc-900 tracking-tight">4.7</span>
<span className="text-sm text-zinc-400 mb-1.5">/ 5.0</span>
</div>
<div className="flex gap-1 text-emerald-500 mb-2">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
</div>
<p className="text-xs text-zinc-500">Based on 100 visitor reviews</p>
<button className="w-full mt-6 py-2.5 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 transition-all">
                            Write a Review
                        </button>
</div>

<div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<h3 className="text-sm font-medium uppercase tracking-widest text-white/50 mb-6">Opening Times</h3>
<div className="space-y-3">
<div className="flex justify-between text-sm items-center border-b border-white/10 pb-2">
<span className="text-white/80">Sunday</span>
<span className="text-emerald-400 font-medium">Open All Day</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-white/10 pb-2">
<span className="text-white/80">Monday</span>
<span className="text-emerald-400 font-medium">Open All Day</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-white/10 pb-2">
<span className="text-white/80">Tuesday</span>
<span className="text-emerald-400 font-medium">Open All Day</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-white/10 pb-2">
<span className="text-white/80">Wednesday</span>
<span className="text-emerald-400 font-medium">Open All Day</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-white/10 pb-2">
<span className="text-white/80">Thursday</span>
<span className="text-emerald-400 font-medium">Open All Day</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-white/10 pb-2">
<span className="text-white/80">Friday</span>
<span className="text-emerald-400 font-medium">Open All Day</span>
</div>
<div className="flex justify-between text-sm items-center border-b border-white/10 pb-2">
<span className="text-white/80">Saturday</span>
<span className="text-emerald-400 font-medium">Open All Day</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-12 border-t border-zinc-100" id="branches">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-2">Other Branches</h2>
<p className="text-sm text-zinc-500">Find Medicina Pharmacy locations across the Emirates.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">
                        View all locations
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="block group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300" href="#">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 text-zinc-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-semibold bg-zinc-100 text-zinc-500 px-2 py-1 rounded uppercase tracking-wider group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">Sharjah</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Industrial Area 1</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Ground floor, City Centre Sharjah, Al Wahda Road</p>
<div className="flex items-center gap-2 text-xs font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                            View Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="block group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300" href="#">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 text-zinc-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-semibold bg-zinc-100 text-zinc-500 px-2 py-1 rounded uppercase tracking-wider group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">Sharjah</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Al Nud Branch</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">CG Mall, Tufail Bin Al Hareeth Street, Al Qassimia</p>
<div className="flex items-center gap-2 text-xs font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                            View Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="block group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300" href="#">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 text-zinc-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-semibold bg-zinc-100 text-zinc-500 px-2 py-1 rounded uppercase tracking-wider group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">Ajman</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Al Rumailah 2</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Ajman Markets Cooperative Society, Sheikh Rashid Bin Humaid St</p>
<div className="flex items-center gap-2 text-xs font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                            View Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="block group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300" href="#">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 text-zinc-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-semibold bg-zinc-100 text-zinc-500 px-2 py-1 rounded uppercase tracking-wider group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">Sharjah</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Industrial Area 17</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Safeer Mall, Sheikh Khalifa Bin Zayed Al Nahyan Road</p>
<div className="flex items-center gap-2 text-xs font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                            View Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="block group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300" href="#">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 text-zinc-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-semibold bg-zinc-100 text-zinc-500 px-2 py-1 rounded uppercase tracking-wider group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">Ajman</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Al Tallah</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">City Life, Al Tallah, Sheikh Ammar Bin Humaid Street</p>
<div className="flex items-center gap-2 text-xs font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                            View Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</main>

<footer className="bg-zinc-50 border-t border-zinc-100 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2">
<iconify-icon className="text-zinc-400" icon="solar:medical-kit-linear" width="16"></iconify-icon>
<span className="text-zinc-900 font-medium text-sm">Medicina Pharmacy</span>
</div>
<p className="text-xs text-zinc-400">© 2026 Local Emirates Company. All Rights Reserved.</p>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-emerald-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Contact</a>
<a className="text-emerald-600 font-medium" href="#">عربى</a>
</div>
</div>
</footer>

    </>
  );
}
