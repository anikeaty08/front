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
      

<header className="bg-white border-b border-slate-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-3">
<div className="bg-blue-600 text-white p-1.5 rounded">
<svg className="lucide lucide-wrench w-5 h-5" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Autorizen</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#">Dashboard</a>
<a className="text-slate-900" href="#">Inspection</a>
<a className="hover:text-blue-600 transition-colors" href="#">History</a>
<a className="hover:text-blue-600 transition-colors" href="#">Technicians</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:block text-right">
<p className="text-sm font-medium text-slate-900">Wayne Crosby</p>
<p className="text-xs text-slate-500">Senior Technician</p>
</div>
<div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</div>
</div>
</header>

<main className="pb-24">

<div className="bg-slate-900 text-white pt-12 pb-24 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 opacity-10 -skew-x-12 transform origin-bottom-right"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded px-2.5 py-1 mb-4">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-wider text-slate-300">New Inspection</span>
</div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Vehicle Health Report</h1>
<p className="text-slate-400 text-lg max-w-2xl">Complete 150-point safety and performance evaluation.</p>
</div>
<div className="flex gap-3">
<button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-2.5 rounded text-sm font-medium transition-colors flex items-center gap-2">
<svg className="lucide lucide-save w-4 h-4" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg> Save Draft
                        </button>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded text-sm font-medium shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2">
<svg className="lucide lucide-printer w-4 h-4" data-lucide="printer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></svg> Print Report
                        </button>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<h2 className="text-lg font-medium text-slate-900 flex items-center gap-2">
<svg className="lucide lucide-car w-5 h-5 text-blue-600" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
                                Vehicle Information
                            </h2>
<span className="text-xs font-mono text-slate-400">#REF-8821</span>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-medium uppercase tracking-wide text-slate-500">Owner Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded text-slate-900 text-sm px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" type="text" value="Gregory Nickels"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium uppercase tracking-wide text-slate-500">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded text-slate-900 text-sm px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" type="tel" value="+1 (555) 987-6543"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium uppercase tracking-wide text-slate-500">Vehicle Make/Model</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded text-slate-900 text-sm px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="e.g. 2021 Toyota Camry" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium uppercase tracking-wide text-slate-500">Mileage</label>
<div className="relative">
<input className="w-full bg-slate-50 border border-slate-200 rounded text-slate-900 text-sm pl-3 pr-8 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" type="number"/>
<span className="absolute right-3 top-2.5 text-xs text-slate-400">mi</span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium uppercase tracking-wide text-slate-500">License Plate</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded text-slate-900 text-sm px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all uppercase" type="text"/>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<h2 className="text-lg font-medium text-slate-900 flex items-center gap-2">
<svg className="lucide lucide-gauge w-5 h-5 text-blue-600" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
                                Under Hood &amp; Fluids
                            </h2>
<div className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">4/6 Checked</div>
</div>
<div className="divide-y divide-slate-100">

<div className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Engine Oil Level &amp; Condition</p>
<p className="text-xs text-slate-500 mt-0.5">Check for leaks, color, and proper fill level.</p>
</div>
<div className="flex items-center gap-2 bg-slate-100 p-1 rounded-md">
<label className="cursor-pointer">
<input className="hidden custom-radio" name="oil_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Pass</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-warn" name="oil_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Warn</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-fail" name="oil_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Fail</div>
</label>
</div>
</div>

<div className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Coolant / Antifreeze</p>
<p className="text-xs text-slate-500 mt-0.5">Freezing point and level check.</p>
</div>
<div className="flex items-center gap-2 bg-slate-100 p-1 rounded-md">
<label className="cursor-pointer">
<input checked="" className="hidden custom-radio" name="coolant_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Pass</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-warn" name="coolant_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Warn</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-fail" name="coolant_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Fail</div>
</label>
</div>
</div>

<div className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:bg-slate-50/50 transition-colors">
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Drive Belts</p>
<p className="text-xs text-slate-500 mt-0.5">Inspect for cracks, fraying, or looseness.</p>

<div className="mt-3">
<textarea className="w-full text-sm bg-yellow-50 border border-yellow-200 rounded p-2 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-yellow-400" placeholder="Add technician notes..." rows="2">Serpentine belt showing signs of minor cracking. Recommend replacement soon.</textarea>
</div>
</div>
<div className="flex items-center gap-2 bg-slate-100 p-1 rounded-md h-fit">
<label className="cursor-pointer">
<input className="hidden custom-radio" name="belt_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Pass</div>
</label>
<label className="cursor-pointer">
<input checked="" className="hidden custom-radio-warn" name="belt_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Warn</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-fail" name="belt_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Fail</div>
</label>
</div>
</div>

<div className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Battery Health</p>
<p className="text-xs text-slate-500 mt-0.5">Terminal corrosion and voltage load test.</p>
</div>
<div className="flex items-center gap-2 bg-slate-100 p-1 rounded-md">
<label className="cursor-pointer">
<input checked="" className="hidden custom-radio" name="battery_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Pass</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-warn" name="battery_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Warn</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-fail" name="battery_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Fail</div>
</label>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<h2 className="text-lg font-medium text-slate-900 flex items-center gap-2">
<svg className="lucide lucide-zap w-5 h-5 text-blue-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                Exterior &amp; Electronics
                            </h2>
<div className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-medium">Pending</div>
</div>
<div className="divide-y divide-slate-100">

<div className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
<div className="flex-1 flex items-start gap-3">
<div className="mt-0.5 text-slate-400">
<svg className="lucide lucide-lightbulb w-5 h-5" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Headlights &amp; High Beams</p>
<p className="text-xs text-slate-500 mt-0.5">Functionality and lens clarity check.</p>
</div>
</div>
<div className="flex items-center gap-2 bg-slate-100 p-1 rounded-md">
<label className="cursor-pointer">
<input className="hidden custom-radio" name="lights_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Pass</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-warn" name="lights_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Warn</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-fail" name="lights_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Fail</div>
</label>
</div>
</div>

<div className="p-4 sm:px-6 hover:bg-slate-50/50 transition-colors">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div className="flex-1 flex items-start gap-3">
<div className="mt-0.5 text-slate-400">
<svg className="lucide lucide-cloud-rain w-5 h-5" data-lucide="cloud-rain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Windshield Wipers</p>
<p className="text-xs text-slate-500 mt-0.5">Blade condition and fluid spray pattern.</p>

<div className="mt-4 flex gap-3">
<div className="relative group cursor-pointer w-20 h-20 rounded-lg border border-slate-200 overflow-hidden bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col items-center justify-center text-slate-400 hover:text-blue-500">
<svg className="lucide lucide-camera w-6 h-6 mb-1" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="text-[10px] font-medium">Add Photo</span>
</div>
<div className="relative group w-20 h-20 rounded-lg border border-slate-200 overflow-hidden bg-slate-900">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&amp;w=200&amp;h=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-white hover:text-red-400"><svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-2 bg-slate-100 p-1 rounded-md h-fit">
<label className="cursor-pointer">
<input className="hidden custom-radio" name="wipers_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Pass</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-warn" name="wipers_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Warn</div>
</label>
<label className="cursor-pointer">
<input checked="" className="hidden custom-radio-fail" name="wipers_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Fail</div>
</label>
</div>
</div>
</div>

<div className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
<div className="flex-1 flex items-start gap-3">
<div className="mt-0.5 text-slate-400">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Body &amp; Paint Condition</p>
<p className="text-xs text-slate-500 mt-0.5">Dents, scratches, rust or panel alignment.</p>
</div>
</div>
<div className="flex items-center gap-2 bg-slate-100 p-1 rounded-md">
<label className="cursor-pointer">
<input className="hidden custom-radio" name="body_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Pass</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-warn" name="body_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Warn</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-radio-fail" name="body_status" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs font-medium text-slate-500 hover:text-slate-700 transition-all border border-transparent">Fail</div>
</label>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<h2 className="text-lg font-medium text-slate-900 flex items-center gap-2">
<svg className="lucide lucide-circle-dashed w-5 h-5 text-blue-600" data-lucide="circle-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path><path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path><path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path></svg>
                                Tires &amp; Brakes
                            </h2>
<div className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-medium">Pending</div>
</div>
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative bg-slate-50 rounded border border-slate-100 p-4">
<p className="text-xs font-semibold uppercase text-slate-400 mb-4 text-center">Tire Pressure (PSI)</p>
<div className="grid grid-cols-2 gap-8 relative z-10">
<div className="text-center">
<input className="w-16 h-10 text-center border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="32" type="number"/>
<p className="text-xs text-slate-400 mt-1">Front Left</p>
</div>
<div className="text-center">
<input className="w-16 h-10 text-center border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="32" type="number"/>
<p className="text-xs text-slate-400 mt-1">Front Right</p>
</div>
<div className="text-center">
<input className="w-16 h-10 text-center border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="32" type="number"/>
<p className="text-xs text-slate-400 mt-1">Rear Left</p>
</div>
<div className="text-center">
<input className="w-16 h-10 text-center border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="32" type="number"/>
<p className="text-xs text-slate-400 mt-1">Rear Right</p>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
<svg className="lucide lucide-car w-32 h-32" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
</div>
</div>

<div className="space-y-4">
<p className="text-xs font-semibold uppercase text-slate-400 mb-2">Brake Pad Thickness</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-slate-700">Front Pads</span>
<span className="text-slate-900 font-medium">8mm <span className="text-green-600 text-xs ml-1">(Good)</span></span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-slate-700">Rear Pads</span>
<span className="text-slate-900 font-medium">3mm <span className="text-red-500 text-xs ml-1">(Replace)</span></span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-red-500 h-2 rounded-full" style={{width: '30%'}}></div>
</div>
</div>
<div className="flex items-start gap-2 mt-4">
<input className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" id="brake_service" type="checkbox"/>
<label className="text-sm text-slate-600" htmlFor="brake_service">Recommend brake fluid flush</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6">

<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Inspection Summary</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-green-50 border border-green-100 rounded-md">
<div className="flex items-center gap-2">
<div className="bg-green-100 p-1 rounded-full">
<svg className="lucide lucide-check w-3 h-3 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm font-medium text-slate-700">Passed</span>
</div>
<span className="text-sm font-semibold text-slate-900">12 Items</span>
</div>
<div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-100 rounded-md">
<div className="flex items-center gap-2">
<div className="bg-yellow-100 p-1 rounded-full">
<svg className="lucide lucide-alert-triangle w-3 h-3 text-yellow-600" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<span className="text-sm font-medium text-slate-700">Warnings</span>
</div>
<span className="text-sm font-semibold text-slate-900">2 Items</span>
</div>
<div className="flex items-center justify-between p-3 bg-red-50 border border-red-100 rounded-md">
<div className="flex items-center gap-2">
<div className="bg-red-100 p-1 rounded-full">
<svg className="lucide lucide-x w-3 h-3 text-red-600" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<span className="text-sm font-medium text-slate-700">Failed</span>
</div>
<span className="text-sm font-semibold text-slate-900">1 Item</span>
</div>
</div>
<div className="space-y-3">
<label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Overall Condition</label>
<select className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-md px-3 py-2.5 focus:ring-blue-500 focus:border-blue-500">
<option>Excellent</option>
<option selected="">Good (Maintenance Required)</option>
<option>Fair</option>
<option>Poor / Unsafe</option>
</select>
</div>
</div>

<div className="bg-slate-900 rounded-lg shadow-lg shadow-slate-900/10 p-6 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
<h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4 relative z-10">Service Estimate</h3>
<div className="space-y-3 relative z-10">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-300">Drive Belt Replacement</span>
<span className="font-medium">$120.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-300">Rear Brake Pads</span>
<span className="font-medium">$185.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-300">Shop Supplies</span>
<span className="font-medium">$15.00</span>
</div>
<div className="pt-3 mt-3 border-t border-slate-700 flex justify-between items-center">
<span className="font-semibold text-lg">Total</span>
<span className="font-semibold text-lg text-blue-400">$320.00</span>
</div>
</div>
<button className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded shadow-lg shadow-blue-900/50 transition-all flex justify-center items-center gap-2">
                            Send Quote to Client
                            <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>

<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 text-center">
<div className="border-2 border-dashed border-slate-200 rounded-md p-4 mb-2 hover:border-blue-400 hover:bg-blue-50/50 transition-colors cursor-pointer group">
<svg className="lucide lucide-pen-tool w-6 h-6 text-slate-300 mx-auto mb-2 group-hover:text-blue-500" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<p className="text-xs text-slate-500">Click to sign as <span className="text-slate-900 font-medium">Wayne Crosby</span></p>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-wrench w-4 h-4 text-blue-600" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<span className="text-sm font-medium text-slate-200">Autorizen</span>
</div>
<p className="text-xs">© 2024 Autorizen Car Services. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
