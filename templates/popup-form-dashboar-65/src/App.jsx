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



        lucide.createIcons();
    
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
      
<div className="max-w-6xl mx-auto">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-xl font-medium tracking-tight">Pop up templates</h1>
<p className="text-sm text-gray-500 mt-1">Manage and track all your forms from here</p>
</div>
<button className="bg-[#0052CC] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="plus"></i>
                Create New Form
            </button>
</div>

<div className="mb-10">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Industry Templates</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow">

<div className="relative h-48 bg-gradient-to-br from-[#F0F6FF] to-[#E0ECFF] flex items-center justify-center p-4">
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/50">
<i className="w-3.5 h-3.5 text-blue-600" data-lucide="monitor"></i>
<span className="text-xs font-medium text-blue-600">EdTech</span>
</div>

<div className="bg-white rounded-lg shadow-lg border border-gray-100 w-44 overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
<div className="bg-blue-600 px-3 py-2 flex items-center">
<div className="h-2 w-16 bg-white/80 rounded"></div>
</div>
<div className="p-3 space-y-2.5">
<div className="flex gap-2">
<div className="h-1.5 w-1/2 bg-gray-100 rounded"></div>
<div className="h-1.5 w-1/2 bg-gray-100 rounded"></div>
</div>
<div className="h-1.5 w-3/4 bg-gray-100 rounded"></div>
<div className="h-1.5 w-full bg-gray-100 rounded"></div>
<div className="h-6 w-full bg-blue-600 rounded mt-3"></div>
</div>
</div>
</div>

<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-base font-medium">EdTech Student Form</h3>
<span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded font-medium">EdTech</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-4">Age-gated signup with parental consent for under-18s. Profession field for adult upskilling segmentation.</p>

<div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
<span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md font-medium">phone*</span>
<span className="bg-amber-50 text-amber-600 text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1">dateOfBirth<i className="w-3 h-3 fill-amber-500 text-amber-500" data-lucide="star"></i></span>
<span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md font-medium">email*</span>
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">profession</span>
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">consent</span>
</div>

<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="bg-emerald-50 text-emerald-600 text-xs px-2.5 py-1 rounded-md font-medium">Published</span>
<button className="bg-[#0052CC] hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">Configure</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow">
<div className="relative h-48 bg-gradient-to-br from-[#E6F9EE] to-[#CFF1DE] flex items-center justify-center p-4">
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/50">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="play"></i>
<span className="text-xs font-medium text-emerald-600">Adventure</span>
</div>
<div className="bg-white rounded-lg shadow-lg border border-gray-100 w-44 overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
<div className="bg-emerald-50 px-3 py-2 border-b border-emerald-100 flex items-center">
<div className="h-2 w-20 bg-emerald-600 rounded"></div>
</div>
<div className="p-3 space-y-2.5">
<div className="h-1.5 w-full bg-gray-100 rounded"></div>
<div className="h-1.5 w-5/6 bg-gray-100 rounded"></div>
<div className="h-1.5 w-4/6 bg-gray-100 rounded"></div>
<div className="h-6 w-full bg-emerald-600 rounded mt-3"></div>
</div>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-base font-medium">Adventure Park Ticketing</h3>
<span className="bg-emerald-50 text-emerald-600 text-xs px-2 py-0.5 rounded font-medium">Adventure</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-4">Minimal form optimised for ticketing counters. DOB gates ride eligibility; consent doubles as liability waiver.</p>
<div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
<span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md font-medium">phone*</span>
<span className="bg-amber-50 text-amber-600 text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1">dateOfBirth<i className="w-3 h-3 fill-amber-500 text-amber-500" data-lucide="star"></i></span>
<span className="bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1">emergencyContact<i className="w-3 h-3" data-lucide="plus"></i></span>
<span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md font-medium">consent*</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="bg-emerald-50 text-emerald-600 text-xs px-2.5 py-1 rounded-md font-medium">Published</span>
<button className="bg-[#0052CC] hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">Configure</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow">
<div className="relative h-48 bg-gradient-to-br from-[#F5F3FF] to-[#E9E1FE] flex items-center justify-center p-4">
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/50">
<i className="w-3.5 h-3.5 text-purple-600" data-lucide="heart"></i>
<span className="text-xs font-medium text-purple-600">Membership</span>
</div>
<div className="bg-white rounded-lg shadow-lg border border-gray-100 w-44 overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
<div className="bg-purple-50 px-3 py-2 border-b border-purple-100 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-purple-200"></div>
<div className="h-2 w-16 bg-purple-600 rounded"></div>
</div>
<div className="p-3 space-y-2.5">
<div className="h-1.5 w-full bg-gray-100 rounded"></div>
<div className="h-1.5 w-full bg-gray-100 rounded"></div>
<div className="h-1.5 w-2/3 bg-gray-100 rounded"></div>
<div className="h-6 w-full bg-purple-600 rounded mt-3"></div>
</div>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-base font-medium">Gym &amp; Spa Membership</h3>
<span className="bg-purple-50 text-purple-600 text-xs px-2 py-0.5 rounded font-medium">Membership</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-4">Full address auto-fills from saved profile post-OTP. Anniversary date for loyalty campaigns and couples packages.</p>
<div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
<span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md font-medium">phone*</span>
<span className="bg-amber-50 text-amber-600 text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1">address (auto-fill)<i className="w-3 h-3 fill-amber-500 text-amber-500" data-lucide="star"></i></span>
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">city</span>
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">pincode</span>
<span className="bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1">anniversaryDate<i className="w-3 h-3" data-lucide="plus"></i></span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="bg-amber-50 text-amber-600 text-xs px-2.5 py-1 rounded-md font-medium">Draft</span>
<button className="bg-[#0052CC] hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">Configure</button>
</div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Login Popups</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow">
<div className="relative h-48 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] flex items-center justify-center p-4">
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/50">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-gray-700">Live</span>
</div>
<div className="bg-white rounded-lg shadow-lg border border-gray-100 w-44 overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
<div className="h-10 bg-slate-50 border-b border-gray-100 flex items-center justify-center">
<div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-blue-600" data-lucide="user"></i>
</div>
</div>
<div className="p-3 space-y-2.5">
<div className="h-2 w-20 bg-gray-200 rounded mx-auto mb-3"></div>
<div className="h-6 w-full bg-gray-50 border border-gray-100 rounded"></div>
<div className="h-6 w-full bg-gray-900 rounded mt-3"></div>
</div>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-base font-medium">Checkout Login Form</h3>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Opens at checkout — captures login &amp; drives conversion</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="bg-emerald-50 text-emerald-600 text-xs px-2.5 py-1 rounded-md font-medium">Published</span>
<button className="bg-[#0052CC] hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">Configure</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow">
<div className="relative h-48 bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] flex items-center justify-center p-4">
<div className="bg-white rounded-lg shadow-lg border border-gray-100 w-44 overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
<div className="bg-amber-400 h-2 w-full"></div>
<div className="p-4 space-y-3">
<div className="h-2 w-24 bg-gray-800 rounded mb-2"></div>
<div className="h-1.5 w-full bg-gray-100 rounded"></div>
<div className="h-1.5 w-4/5 bg-gray-100 rounded"></div>
<div className="h-6 w-full bg-amber-400 rounded mt-4"></div>
</div>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-base font-medium">Lead Capture Form</h3>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Collect leads &amp; newsletter signups with custom fields</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="bg-amber-50 text-amber-600 text-xs px-2.5 py-1 rounded-md font-medium">Draft</span>
<button className="bg-[#0052CC] hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">Configure</button>
</div>
</div>
</div>
</div>
</div>
</div>




    </>
  );
}
