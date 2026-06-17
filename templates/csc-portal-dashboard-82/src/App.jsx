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
      

<div className="text-center w-full max-w-4xl mb-12">
<h1 className="text-[36px] font-semibold tracking-tight text-neutral-900 mb-3">
            Digital Seva Portal
        </h1>
<p className="text-[22px] text-neutral-500 font-normal tracking-tight">
            Unified access point for Citizen Services
        </p>
</div>

<div className="w-full max-w-6xl bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden flex flex-col">

<div className="bg-neutral-50 border-b border-neutral-200 px-4 py-3 flex items-center gap-4">

<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>

<div className="flex-1 ml-4 bg-white border border-neutral-200 rounded-md h-8 flex items-center px-3 gap-2 shadow-sm">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:lock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
<span className="text-xs text-neutral-500 font-mono">https://services.csc.gov.in/dashboard</span>
</div>

<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-neutral-400 hover:text-neutral-600 cursor-pointer iconify--lucide" data-icon="lucide:rotate-cw" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></g></svg>
<svg aria-hidden="true" className="iconify text-neutral-400 hover:text-neutral-600 cursor-pointer iconify--lucide" data-icon="lucide:plus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-white">
<div className="flex items-center gap-3">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</span>
<input className="pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-xs font-mono text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64 placeholder:text-neutral-400" placeholder="Search services..." type="text"/>
</div>
<div className="flex gap-1 bg-neutral-50 p-1 rounded-lg border border-neutral-200">
<button className="px-3 py-1 bg-white shadow-sm border border-neutral-200 rounded text-xs font-medium text-neutral-700">All</button>
<button className="px-3 py-1 hover:bg-neutral-100 rounded text-xs font-medium text-neutral-500">G2C</button>
<button className="px-3 py-1 hover:bg-neutral-100 rounded text-xs font-medium text-neutral-500">B2C</button>
</div>
</div>
<button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                Export Data
            </button>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="">
<tr className="bg-neutral-50 border-b border-neutral-200">
<th className="py-3 px-6 text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium w-32">Service ID</th>
<th className="py-3 px-6 text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium">Service Name</th>
<th className="py-3 px-6 text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium">Category</th>
<th className="py-3 px-6 text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium">Availability</th>
<th className="py-3 px-6 text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium">Traffic</th>
<th className="py-3 px-6 text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-100 bg-white">

<tr className="group hover:bg-neutral-50/50 transition-colors animate-row delay-100">
<td className="py-4 px-6">
<span className="font-mono text-xs text-neutral-400 bg-neutral-100 px-2 py-1 rounded">UID-001</span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:fingerprint" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2"></path></g></svg>
</div>
<div className="">
<div className="text-[13px] font-medium text-neutral-900">Aadhaar Updates</div>
<div className="text-[11px] text-neutral-500">Biometric &amp; Demographic</div>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200">
                                G2C Service
                            </span>
</td>
<td className="py-4 px-6">

<div className="flex items-center gap-2">
<div className="relative w-2 h-2">
<div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
<div className="relative w-2 h-2 bg-green-500 rounded-full"></div>
</div>
<span className="text-xs text-neutral-600">Online</span>
</div>
</td>
<td className="py-4 px-6">

<div className="w-24">
<div className="flex justify-between text-[10px] text-neutral-400 mb-1 font-mono">
<span>Load</span>
<span>84%</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '84%'}}></div>
</div>
</div>
</td>
<td className="py-4 px-6 text-right">
<button className="text-neutral-400 hover:text-blue-500 transition-colors p-2 hover:bg-blue-50 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>

<tr className="group hover:bg-neutral-50/50 transition-colors animate-row delay-200">
<td className="py-4 px-6">
<span className="font-mono text-xs text-neutral-400 bg-neutral-100 px-2 py-1 rounded">FIN-204</span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:landmark" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<div className="text-[13px] font-medium text-neutral-900">Banking Correspondent</div>
<div className="text-[11px] text-neutral-500">Deposit &amp; Withdrawal</div>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200">
                                Financial
                            </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-xs text-neutral-600">Online</span>
</div>
</td>
<td className="py-4 px-6">
<div className="w-24">
<div className="flex justify-between text-[10px] text-neutral-400 mb-1 font-mono">
<span>Load</span>
<span>45%</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
</td>
<td className="py-4 px-6 text-right">
<button className="text-neutral-400 hover:text-blue-500 transition-colors p-2 hover:bg-blue-50 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>

<tr className="group hover:bg-neutral-50/50 transition-colors animate-row delay-300">
<td className="py-4 px-6">
<span className="font-mono text-xs text-neutral-400 bg-neutral-100 px-2 py-1 rounded">INS-099</span>
</td>
<td className="pt-4 pr-6 pb-4 pl-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div className="">
<div className="text-[13px] font-medium text-neutral-900">Crop Insurance</div>
<div className="text-[11px] text-neutral-500">Pradhan Mantri Fasal Bima</div>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200">
                                Insurance
                            </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
<span className="text-xs text-neutral-600">Maintenance</span>
</div>
</td>
<td className="py-4 px-6">
<div className="w-24">
<div className="flex justify-between text-[10px] text-neutral-400 mb-1 font-mono">
<span>Load</span>
<span>12%</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '12%'}}></div>
</div>
</div>
</td>
<td className="py-4 px-6 text-right">
<button className="text-neutral-400 hover:text-blue-500 transition-colors p-2 hover:bg-blue-50 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>

<tr className="group hover:bg-neutral-50/50 transition-colors animate-row delay-400">
<td className="py-4 px-6">
<span className="font-mono text-xs text-neutral-400 bg-neutral-100 px-2 py-1 rounded">TRV-882</span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plane" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-[13px] font-medium text-neutral-900">IRCTC Booking</div>
<div className="text-[11px] text-neutral-500">Railway Ticketing Agent</div>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200">
                                Travel
                            </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-xs text-neutral-600">Online</span>
</div>
</td>
<td className="py-4 px-6">
<div className="w-24">
<div className="flex justify-between text-[10px] text-neutral-400 mb-1 font-mono">
<span>Load</span>
<span>92%</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
</td>
<td className="py-4 px-6 text-right">
<button className="text-neutral-400 hover:text-blue-500 transition-colors p-2 hover:bg-blue-50 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>

<tr className="group hover:bg-neutral-50/50 transition-colors animate-row delay-500">
<td className="pt-4 pr-6 pb-4 pl-6">
<span className="font-mono text-xs text-neutral-400 bg-neutral-100 px-2 py-1 rounded">UTIL-55</span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-[13px] font-medium text-neutral-900">Bill Payments</div>
<div className="text-[11px] text-neutral-500">Electricity &amp; Water</div>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200">
                                Utilities
                            </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-xs text-neutral-600">Online</span>
</div>
</td>
<td className="py-4 px-6">
<div className="w-24">
<div className="flex justify-between text-[10px] text-neutral-400 mb-1 font-mono">
<span>Load</span>
<span>33%</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '33%'}}></div>
</div>
</div>
</td>
<td className="py-4 px-6 text-right">
<button className="text-neutral-400 hover:text-blue-500 transition-colors p-2 hover:bg-blue-50 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>

<tr className="group hover:bg-neutral-50/50 transition-colors animate-row delay-600">
<td className="py-4 px-6">
<span className="font-mono text-xs text-neutral-400 bg-neutral-100 px-2 py-1 rounded">DOC-112</span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div className="">
<div className="text-[13px] font-medium text-neutral-900">Passport Seva</div>
<div className="text-[11px] text-neutral-500">Application &amp; Appointment</div>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200">
                                Document
                            </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-red-500 rounded-full"></div>
<span className="text-xs text-neutral-600">Downtime</span>
</div>
</td>
<td className="py-4 px-6">
<div className="w-24">
<div className="flex justify-between text-[10px] text-neutral-400 mb-1 font-mono">
<span>Load</span>
<span>0%</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-500 h-1.5 rounded-full opacity-50" style={{width: '0%'}}></div>
</div>
</div>
</td>
<td className="py-4 px-6 text-right">
<button className="text-neutral-400 hover:text-blue-500 transition-colors p-2 hover:bg-blue-50 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-neutral-50 border-t border-neutral-200 px-6 py-4 flex items-center justify-between">
<span className="text-[10px] text-neutral-500 font-medium">Showing 6 of 142 Services</span>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-400 hover:text-neutral-600 hover:border-neutral-300 transition-all shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-left" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-400 hover:text-neutral-600 hover:border-neutral-300 transition-all shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

    </>
  );
}
