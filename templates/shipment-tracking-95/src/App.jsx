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
      
<main className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">

<header className="px-8 py-8 sm:px-10 sm:py-10 border-b border-zinc-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-white" data-lucide="package" strokeWidth="1.5"></i>
</div>
<div>
<h1 className="text-2xl font-medium tracking-tight text-zinc-900">Tracking Report</h1>
<p className="text-sm text-zinc-500 mt-1 flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="calendar" strokeWidth="1.5"></i>
                        Generated on Nov 26, 2025
                    </p>
</div>
</div>
<div className="text-left sm:text-right">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Tracking Number</p>
<p className="text-xl font-medium tracking-tight text-zinc-900">AC-2055-892</p>
</div>
</header>
<div className="p-8 sm:p-10">

<div className="mb-14">
<div className="relative flex justify-between items-center w-full max-w-2xl mx-auto mt-2">

<div className="absolute left-0 top-4 w-full h-[2px] bg-emerald-500 -z-10 rounded-full"></div>

<div className="flex flex-col items-center gap-3 bg-white px-2">
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white ring-4 ring-white shadow-sm">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-xs font-medium text-zinc-900">Info Received</span>
</div>

<div className="flex flex-col items-center gap-3 bg-white px-2">
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white ring-4 ring-white shadow-sm">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-xs font-medium text-zinc-900">Picked Up</span>
</div>

<div className="flex flex-col items-center gap-3 bg-white px-2">
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white ring-4 ring-white shadow-sm">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-xs font-medium text-zinc-900">In Transit</span>
</div>

<div className="flex flex-col items-center gap-3 bg-white px-2">
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white ring-4 ring-white shadow-sm">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-xs font-medium text-zinc-900">Out for Delivery</span>
</div>

<div className="flex flex-col items-center gap-3 bg-white px-2">
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white ring-4 ring-white shadow-sm">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-xs font-medium text-emerald-600">Delivered</span>
</div>
</div>
</div>

<section className="mb-12">
<h2 className="text-lg font-medium tracking-tight text-zinc-900 mb-5 flex items-center gap-2">
<i className="w-5 h-5 text-zinc-400" data-lucide="layout-grid" strokeWidth="1.5"></i>
                    Tracking Overview
                </h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8 p-6 rounded-xl border border-zinc-200 bg-zinc-50/50">
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5">Origin</p>
<p className="text-sm font-medium text-zinc-900">Leeds, United Kingdom</p>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5">Destination</p>
<p className="text-sm font-medium text-zinc-900">Gujarat, India</p>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5">Payment Status</p>
<p className="text-sm font-medium text-zinc-900 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span> Paid
                        </p>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5">Delivery Date</p>
<p className="text-sm font-medium text-zinc-900">03 Dec 2025</p>
</div>
<div className="col-span-2 lg:col-span-4 border-t border-zinc-200/80 pt-6 mt-2">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5">Current Status</p>
<p className="text-base font-medium text-emerald-600">EPOD COPY RECEIVED</p>
</div>
<div className="sm:text-right">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5">Last Updated</p>
<p className="text-sm font-medium text-zinc-900">Nov 24, 2025, 03:08 PM</p>
</div>
</div>
</div>
</div>
</section>

<section className="mb-12">
<h2 className="text-lg font-medium tracking-tight text-zinc-900 mb-5 flex items-center gap-2">
<i className="w-5 h-5 text-zinc-400" data-lucide="users" strokeWidth="1.5"></i>
                    Party Details
                </h2>
<div className="flex flex-col md:flex-row rounded-xl border border-zinc-200 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-zinc-200">

<div className="flex-1 p-6 bg-white">
<h3 className="text-sm font-medium text-zinc-900 flex items-center gap-2 mb-4">
<div className="p-1.5 bg-zinc-100 rounded-md">
<i className="w-3.5 h-3.5 text-zinc-600" data-lucide="arrow-up-right" strokeWidth="2"></i>
</div>
                            Sender Details
                        </h3>
<div className="space-y-4">
<div>
<p className="text-xs text-zinc-500 mb-1">Name</p>
<p className="text-sm font-medium text-zinc-900">Logistics Corp Ltd.</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Address</p>
<p className="text-sm text-zinc-700 leading-relaxed">
                                    58 Commercial Park, 205 Clarendon Road<br/>
                                    Leeds, LS2 9DU, United Kingdom
                                </p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Contact</p>
<p className="text-sm text-zinc-700">+44 7365 190 637<br/>operations@example.com</p>
</div>
</div>
</div>

<div className="flex-1 p-6 bg-white">
<h3 className="text-sm font-medium text-zinc-900 flex items-center gap-2 mb-4">
<div className="p-1.5 bg-zinc-100 rounded-md">
<i className="w-3.5 h-3.5 text-zinc-600" data-lucide="arrow-down-right" strokeWidth="2"></i>
</div>
                            Receiver Details
                        </h3>
<div className="space-y-4">
<div>
<p className="text-xs text-zinc-500 mb-1">Name</p>
<p className="text-sm font-medium text-zinc-900">Vipul Kumar</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Address</p>
<p className="text-sm text-zinc-700 leading-relaxed">
                                    A-104, Business Center, Near Cross Road<br/>
                                    Gandhinagar, Gujarat 382421, India
                                </p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Contact</p>
<p className="text-sm text-zinc-700">+91 7096 231 571<br/>contact.vk@example.com</p>
</div>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-lg font-medium tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-zinc-400" data-lucide="route" strokeWidth="1.5"></i>
                    Shipment Journey
                </h2>
<div className="ml-2 pl-6 border-l-2 border-zinc-100 space-y-8 pb-4 relative">

<div className="relative">
<div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-white"></div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
<p className="text-xs text-zinc-500 w-32 shrink-0 font-medium">Nov 24, 2025<br/>03:08 PM</p>
<div>
<p className="text-sm font-medium text-zinc-900">EPOD COPY RECEIVED</p>
<p className="text-sm text-zinc-600 mt-1">Proof of delivery document has been securely uploaded and verified.</p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-white"></div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
<p className="text-xs text-zinc-500 w-32 shrink-0">Nov 20, 2025<br/>08:14 AM</p>
<div>
<p className="text-sm font-medium text-zinc-900">Delivered to Recipient</p>
<p className="text-sm text-zinc-600 mt-1">Package received by recipient at destination address. Signature acquired.</p>
<p className="text-xs text-zinc-500 mt-1.5 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Gandhinagar, Gujarat 382006, India
                                </p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-white"></div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
<p className="text-xs text-zinc-500 w-32 shrink-0">Nov 20, 2025<br/>07:20 AM</p>
<div>
<p className="text-sm font-medium text-zinc-900">Out for Delivery</p>
<p className="text-sm text-zinc-600 mt-1">Shipment is out for delivery with local courier.</p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-white"></div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
<p className="text-xs text-zinc-500 w-32 shrink-0">Nov 20, 2025<br/>05:03 AM</p>
<div>
<p className="text-sm font-medium text-zinc-900">Unloaded at Delivery Branch</p>
<p className="text-sm text-zinc-600 mt-1">Shipment processed at final delivery center.</p>
<p className="text-xs text-zinc-500 mt-1.5 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Gandhinagar, Gujarat
                                </p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-white"></div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
<p className="text-xs text-zinc-500 w-32 shrink-0">Nov 20, 2025<br/>02:24 AM</p>
<div>
<p className="text-sm font-medium text-zinc-900">Arrived at Regional Hub</p>
<p className="text-sm text-zinc-600 mt-1">Shipment arrived at regional sorting facility.</p>
<p className="text-xs text-zinc-500 mt-1.5 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Ahmedabad, Gujarat, India
                                </p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
