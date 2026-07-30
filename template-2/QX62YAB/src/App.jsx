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
      
<div className="flex min-h-screen">

<aside className="w-16 bg-gray-100 flex flex-col items-center py-4">
<div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center mb-2">

<svg className="w-5 h-5" fill="#0993cc" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>
</div>
<div className="bg-transparent rounded-xl w-16 h-16 flex items-center justify-center mb-2">
<span className="mdi mdi-cog text-gray-400 text-2xl">󰒗</span>
</div>
<div className="bg-transparent rounded-xl w-16 h-16 flex items-center justify-center mb-2"></div>
<div className="bg-transparent rounded-xl w-16 h-16 flex items-center justify-center"></div>
</aside>

<main className="flex-1 flex flex-col">

<div className="flex w-full items-center bg-gray-100 h-8 text-xs text-gray-600">
<div className="flex-1 flex items-center bg-white h-full px-8 py-2">
<span className="uppercase tracking-wide font-ibm-sans text-gray-500 text-[12px]">case id 1212202406</span>
</div>
<div className="flex gap-2 items-center px-4">
<svg className="w-4 h-4 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
<circle cx="10" cy="10" r="7"></circle>
</svg>
<svg className="w-4 h-4 text-sky-600" fill="currentColor" viewBox="0 0 14 14">
<circle cx="7" cy="7" r="6"></circle>
</svg>
</div>
<div className="px-4 text-xs text-gray-500">upload date</div>
<div className="px-2 text-xs text-gray-800 font-medium">12 DEC 2024</div>
<div className="px-4 text-xs text-gray-500">upload time</div>
<div className="pr-8 text-xs text-gray-800 font-medium">12:23:14</div>
</div>

<div className="flex justify-between bg-gray-50 px-8 py-4">
<div className="flex items-center gap-8 text-xs text-gray-500">
<span>utente</span>
<span>triageKP</span>
<span>profilo</span>
<span>Back Office-TRIAGE</span>
</div>
<div className="flex items-center gap-8 text-xs text-gray-500">
<span>ultima sessione</span>
<span className="text-gray-800">29/11/2024 12:45:51</span>
</div>
</div>

<div className="overflow-x-auto border-b border-gray-200">
<div className="flex items-center h-8 text-xs">
<div className="w-28 pl-8">28 NOV 2024</div>
<div className="w-32">17:28:01</div>
<div className="w-36">kp_job</div>
<div className="w-36">MANUAL</div>
<div className="flex-1">test 7 : Aggregation 14</div>
<div className="w-52 flex items-center gap-2 text-gray-500">
<svg className="w-3 h-3" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 16 16"><circle cx="8" cy="8" r="5"></circle></svg>
<span>Failed</span>
</div>
<div className="w-28 flex items-center">
<span className="border border-sky-600 text-sky-600 px-2 py-1 rounded-lg text-xs">Open</span>
</div>
<div className="w-16 flex items-center justify-center">
<div className="bg-gray-200 rounded-full p-1">
<svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 16 16">
<path d="M2 8h12M8 2v12" strokeWidth="1.5"></path>
</svg>
</div>
</div>
<div className="w-16 flex items-center justify-center">
<div className="bg-gray-200 rounded-full p-1">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 16 16">
<path d="M2 2l12 12M14 2L2 14" strokeWidth="1.5"></path>
</svg>
</div>
</div>
<div className="w-8 flex items-center justify-center">
<svg className="w-1 h-4 text-gray-300 rotate-90" fill="currentColor" viewBox="0 0 4 16">
<circle cx="2" cy="2" r="1.5"></circle><circle cx="2" cy="8" r="1.5"></circle><circle cx="2" cy="14" r="1.5"></circle>
</svg>
</div>
</div>
</div>

<div className="flex border-b border-gray-300 bg-white">
<div className="flex">
<div className="bg-gray-100 border-b border-gray-300 px-6 py-2 flex items-center gap-2 text-xs font-medium text-gray-600 cursor-pointer">
            Formal Check
            <span className="inline-block w-2 h-2 bg-green-600 rounded-full ml-2"></span>
</div>
<div className="bg-white border-b border-gray-300 px-6 py-2 flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
            technical check
            <span className="inline-block w-2 h-2 bg-green-600 rounded-full ml-2"></span>
</div>
<div className="bg-gray-100 border-b-0 border-x border-gray-300 px-6 py-2 flex items-center gap-2 text-xs text-black cursor-pointer">
            FWA check
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-2"></span>
</div>
<div className="bg-gray-100 px-6 py-2 flex items-center text-xs text-sky-600 cursor-pointer">
            Assign to
          </div>
</div>
<div className="flex-1"></div>
</div>

<section className="p-8">
<div className="bg-gray-50 border-b border-gray-300 py-2 px-6 uppercase text-xs font-medium text-gray-700">
          Auto-Triggered Criteria
        </div>
<div className="overflow-x-auto">
<table className="w-full text-xs">
<thead className="bg-white border-b border-gray-200">
<tr>
<th className="text-left py-2 px-6 text-gray-500 font-normal">score</th>
<th className="text-left py-2 px-6 text-gray-500 font-normal">category</th>
<th className="text-left py-2 px-6 text-gray-500 font-normal">criteria</th>
<th className="text-left py-2 px-6"></th>
</tr>
</thead>
<tbody>
<tr className="border-b">
<td className="py-2 px-6 text-gray-500">Medium</td>
<td className="py-2 px-6">
<span className="bg-gray-400 text-white rounded px-2 py-1">High Claim Frequency</span>
</td>
<td className="py-2 px-6">
<span>5 claims filed within 30 days.</span>
</td>
<td className="py-2 px-6"></td>
</tr>
<tr className="border-b">
<td className="py-2 px-6 text-red-500 font-semibold">High</td>
<td className="py-2 px-6">
<span className="bg-gray-400 text-white rounded px-2 py-1">Duplicate Claim</span>
</td>
<td className="py-2 px-6">
<span>Duplicate submitted on 2025-01-08.</span>
</td>
<td className="py-2 px-6"></td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="p-8 pt-0">
<div className="bg-gray-50 border-b border-gray-300 py-2 px-6 uppercase text-xs font-medium text-gray-700">
          central fwa Database
        </div>
<div className="overflow-x-auto">
<table className="w-full text-xs">
<tbody>
<tr className="border-b">
<td className="py-2 px-6 text-gray-600">No data received.</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="p-8 pt-0">
<div className="bg-gray-50 border-b border-gray-300 py-2 px-6 uppercase text-xs font-medium text-gray-700">
          DUPLICATE PHOTO DETECTION
        </div>
<div className="overflow-x-auto">
<table className="w-full text-xs">
<thead className="bg-white border-b border-gray-200">
<tr>
<th className="py-2 px-4 text-gray-500 font-normal">Photo</th>
<th className="py-2 px-4 text-gray-500 font-normal">file name</th>
<th className="py-2 px-4 text-gray-500 font-normal">Matching Case ID</th>
<th className="py-2 px-4 text-gray-500 font-normal">Case Date</th>
<th className="py-2 px-4 text-gray-500 font-normal">Match %</th>
<th className="py-2 px-4 text-gray-500 font-normal">Action</th>
</tr>
</thead>
<tbody>
<tr className="border-b">
<td className="py-2 px-4">
<div className="relative w-24 h-16 bg-gray-400 rounded border border-red-500 flex items-center justify-center">
<span className="absolute -top-2 left-2 bg-red-500 text-white text-[8px] uppercase rounded px-2 py-0.5">Duplicate</span>
<span className="text-xs text-gray-700">96 X 64</span>
</div>
</td>
<td className="py-2 px-4 text-gray-700">XRAY-2025.jpg</td>
<td className="py-2 px-4">
<span className="text-sky-600">00120239000</span>
</td>
<td className="py-2 px-4 text-gray-700">15/07/2024</td>
<td className="py-2 px-4 text-red-500 font-semibold">98 %</td>
<td className="py-2 px-4">
<a className="text-sky-600 hover:underline" href="#">View Comparison ›</a>
</td>
</tr>
<tr className="border-b">
<td className="py-2 px-4">
<div className="relative w-24 h-16 bg-gray-400 rounded border border-red-500 flex items-center justify-center">
<span className="absolute -top-2 left-2 bg-red-500 text-white text-[8px] uppercase rounded px-2 py-0.5">Duplicate</span>
<span className="text-xs text-gray-700">96 X 64</span>
</div>
</td>
<td className="py-2 px-4 text-gray-700">XRAY-2025.jpg</td>
<td className="py-2 px-4">
<span className="text-sky-600">00120210000</span>
</td>
<td className="py-2 px-4 text-gray-700">21/05/2024</td>
<td className="py-2 px-4 text-red-500 font-semibold">98 %</td>
<td className="py-2 px-4">
<a className="text-sky-600 hover:underline" href="#">View Comparison ›</a>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<div className="flex gap-4 p-8 pt-2">
<button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-xs">
<svg className="w-4 h-4" fill="white" viewBox="0 0 20 20"><rect height="2" rx="1" width="16" x="2" y="9"></rect></svg>
          Refuse Request
        </button>
<button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-xs">
<svg className="w-4 h-4" fill="white" viewBox="0 0 20 20"><rect height="2" rx="1" width="16" x="2" y="9"></rect></svg>
          Send for Payment
        </button>
</div>
</main>
</div>

    </>
  );
}
