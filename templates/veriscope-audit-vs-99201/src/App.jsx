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
function gtag() {
dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-2M6V79H761");



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
      
<div className="max-w-[800px] w-full mx-auto bg-white border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col gap-5" id="root">

<header className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-slate-200 pb-4 gap-4">
<div>
<img alt="Veriscope Logo" className="h-8 w-auto object-contain mb-2" src="https://i.imgur.com/ejThHM2.png"/>
<p className="text-xs text-slate-500 uppercase tracking-widest">Verified Applicant Ranking</p>
</div>
<div className="text-base text-slate-600 space-y-0.5 sm:text-right">
<div>Property: <span className="text-[#2f1458]">Av. República 56, Lisboa</span></div>
<div>Target Rent: <span className="text-[#2f1458]">€1,800</span></div>
<div>Audit ID: <span className="text-[#2f1458]">VS-99201</span></div>
</div>
</header>

<div className="bg-[#2f1458]/5 border border-[#2f1458]/10 p-4 flex gap-3 items-start">
<i className="w-5 h-5 text-[#2f1458] shrink-0 mt-0.5" data-lucide="shield-check" strokeWidth="1.5"></i>
<div>
<h2 className="text-lg tracking-tight text-[#2f1458]">Applicant Pool Verification Complete</h2>
<p className="text-base text-slate-600 mt-1 leading-relaxed">
            All submitted applicant profiles have been cross-referenced against confirmed banking records, primary identity databases, and certified employment history. The following hierarchy represents the optimal tenant fit driven strictly by financial stability and authenticated data markers.
          </p>
</div>
</div>

<div className="flex flex-col gap-3">

<div className="border-2 border-[#2f1458] bg-white flex flex-col sm:flex-row shadow-sm">
<div className="p-3 sm:w-[35%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center gap-3 bg-[#2f1458]/5">
<div className="w-12 h-12 bg-slate-200 shrink-0 relative border border-[#2f1458]/20">
<img alt="Profile" className="w-full h-full object-cover grayscale opacity-90" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="absolute -top-2 -left-2 bg-[#a5ea2d] text-[#2f1458] text-xs px-1.5 py-0.5 shadow-sm">#1</div>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-0.5">
<h3 className="text-xl tracking-tight text-[#2f1458] truncate">Mark Sterling</h3>
<i className="w-4 h-4 text-[#2f1458] shrink-0" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-600 truncate">Regional Director</p>
</div>
</div>
<div className="p-3 sm:w-[50%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center justify-between gap-4 px-4 sm:px-6">
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Monthly Income</span>
<span className="text-xl tracking-tight text-slate-800">€8,000</span>
</div>
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Rent Ratio</span>
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight text-slate-800">22.5%</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#a5ea2d]/20 text-[#2f1458] text-xs">
<i className="w-3 h-3" data-lucide="check-circle-2" strokeWidth="1.5"></i> Optimal
                </span>
</div>
</div>
</div>
<div className="p-3 sm:w-[15%] flex flex-col items-center justify-center bg-[#2f1458]/5">
<span className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Score</span>
<span className="text-3xl tracking-tight text-[#2f1458]">96</span>
</div>
</div>

<div className="border border-slate-200 bg-white flex flex-col sm:flex-row">
<div className="p-3 sm:w-[35%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center gap-3">
<div className="w-12 h-12 bg-slate-100 shrink-0 relative border border-slate-200">
<img alt="Profile" className="w-full h-full object-cover grayscale opacity-90" src="https://randomuser.me/api/portraits/men/44.jpg"/>
<div className="absolute -top-2 -left-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs px-1.5 py-0.5">#2</div>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-0.5">
<h3 className="text-xl tracking-tight text-slate-800 truncate">Liam O’Connor</h3>
<i className="w-4 h-4 text-[#a5ea2d] shrink-0" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-500 truncate">Senior Engineer</p>
</div>
</div>
<div className="p-3 sm:w-[50%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center justify-between gap-4 px-4 sm:px-6">
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Monthly Income</span>
<span className="text-xl tracking-tight text-slate-800">€7,200</span>
</div>
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Rent Ratio</span>
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight text-slate-800">25.0%</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#a5ea2d]/20 text-[#2f1458] text-xs">
<i className="w-3 h-3" data-lucide="check-circle-2" strokeWidth="1.5"></i> Optimal
                </span>
</div>
</div>
</div>
<div className="p-3 sm:w-[15%] flex flex-col items-center justify-center">
<span className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Score</span>
<span className="text-3xl tracking-tight text-slate-800">93</span>
</div>
</div>

<div className="border border-slate-200 bg-white flex flex-col sm:flex-row">
<div className="p-3 sm:w-[35%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center gap-3">
<div className="w-12 h-12 bg-slate-100 shrink-0 relative border border-slate-200">
<img alt="Profile" className="w-full h-full object-cover grayscale opacity-90" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div className="absolute -top-2 -left-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs px-1.5 py-0.5">#3</div>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-0.5">
<h3 className="text-xl tracking-tight text-slate-800 truncate">Elena Fischer</h3>
<i className="w-4 h-4 text-[#a5ea2d] shrink-0" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-500 truncate">Marketing Manager</p>
</div>
</div>
<div className="p-3 sm:w-[50%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center justify-between gap-4 px-4 sm:px-6">
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Monthly Income</span>
<span className="text-xl tracking-tight text-slate-800">€6,500</span>
</div>
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Rent Ratio</span>
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight text-slate-800">27.7%</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#a5ea2d]/20 text-[#2f1458] text-xs">
<i className="w-3 h-3" data-lucide="check-circle-2" strokeWidth="1.5"></i> Optimal
                </span>
</div>
</div>
</div>
<div className="p-3 sm:w-[15%] flex flex-col items-center justify-center">
<span className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Score</span>
<span className="text-3xl tracking-tight text-slate-800">90</span>
</div>
</div>

<div className="border border-slate-200 bg-white flex flex-col sm:flex-row">
<div className="p-3 sm:w-[35%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center gap-3">
<div className="w-12 h-12 bg-slate-100 shrink-0 relative border border-slate-200">
<img alt="Profile" className="w-full h-full object-cover grayscale opacity-90" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div className="absolute -top-2 -left-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs px-1.5 py-0.5">#4</div>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-0.5">
<h3 className="text-xl tracking-tight text-slate-800 truncate">Sarah Jenkins</h3>
<i className="w-4 h-4 text-[#a5ea2d] shrink-0" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-500 truncate">Operations Lead</p>
</div>
</div>
<div className="p-3 sm:w-[50%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center justify-between gap-4 px-4 sm:px-6">
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Monthly Income</span>
<span className="text-xl tracking-tight text-slate-800">€5,800</span>
</div>
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Rent Ratio</span>
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight text-slate-800">31.0%</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-slate-100 text-slate-600 text-xs">
                  Standard
                </span>
</div>
</div>
</div>
<div className="p-3 sm:w-[15%] flex flex-col items-center justify-center">
<span className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Score</span>
<span className="text-3xl tracking-tight text-slate-800">88</span>
</div>
</div>

<div className="border border-slate-200 bg-white flex flex-col sm:flex-row">
<div className="p-3 sm:w-[35%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center gap-3">
<div className="w-12 h-12 bg-slate-100 shrink-0 relative border border-slate-200">
<img alt="Profile" className="w-full h-full object-cover grayscale opacity-90" src="https://randomuser.me/api/portraits/men/46.jpg"/>
<div className="absolute -top-2 -left-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs px-1.5 py-0.5">#5</div>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-0.5">
<h3 className="text-xl tracking-tight text-slate-800 truncate">João Pereira</h3>
<i className="w-4 h-4 text-[#a5ea2d] shrink-0" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-500 truncate">Financial Analyst</p>
</div>
</div>
<div className="p-3 sm:w-[50%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center justify-between gap-4 px-4 sm:px-6">
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Monthly Income</span>
<span className="text-xl tracking-tight text-slate-800">€4,900</span>
</div>
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Rent Ratio</span>
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight text-slate-800">36.7%</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-slate-100 text-slate-600 text-xs">
                  Elevated
                </span>
</div>
</div>
</div>
<div className="p-3 sm:w-[15%] flex flex-col items-center justify-center">
<span className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Score</span>
<span className="text-3xl tracking-tight text-slate-800">84</span>
</div>
</div>

<div className="border border-slate-200 bg-white flex flex-col sm:flex-row">
<div className="p-3 sm:w-[35%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center gap-3">
<div className="w-12 h-12 bg-slate-100 shrink-0 relative border border-slate-200">
<img alt="Profile" className="w-full h-full object-cover grayscale opacity-90" src="https://randomuser.me/api/portraits/women/32.jpg"/>
<div className="absolute -top-2 -left-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs px-1.5 py-0.5">#6</div>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-0.5">
<h3 className="text-xl tracking-tight text-slate-800 truncate">Ana Silva</h3>
<i className="w-4 h-4 text-[#a5ea2d] shrink-0" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-500 truncate">UX Designer</p>
</div>
</div>
<div className="p-3 sm:w-[50%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center justify-between gap-4 px-4 sm:px-6">
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Monthly Income</span>
<span className="text-xl tracking-tight text-slate-800">€4,500</span>
</div>
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Rent Ratio</span>
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight text-slate-800">40.0%</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-slate-100 text-slate-600 text-xs">
                  Review
                </span>
</div>
</div>
</div>
<div className="p-3 sm:w-[15%] flex flex-col items-center justify-center">
<span className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Score</span>
<span className="text-3xl tracking-tight text-slate-800">81</span>
</div>
</div>

<div className="border border-slate-200 bg-white flex flex-col sm:flex-row">
<div className="p-3 sm:w-[35%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center gap-3">
<div className="w-12 h-12 bg-slate-100 shrink-0 relative border border-slate-200">
<img alt="Profile" className="w-full h-full object-cover grayscale opacity-90" src="https://randomuser.me/api/portraits/women/12.jpg"/>
<div className="absolute -top-2 -left-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs px-1.5 py-0.5">#7</div>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-0.5">
<h3 className="text-xl tracking-tight text-slate-800 truncate">Sofia Santos</h3>
<i className="w-4 h-4 text-[#a5ea2d] shrink-0" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-500 truncate">Project Manager</p>
</div>
</div>
<div className="p-3 sm:w-[50%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center justify-between gap-4 px-4 sm:px-6">
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Monthly Income</span>
<span className="text-xl tracking-tight text-slate-800">€4,100</span>
</div>
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Rent Ratio</span>
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight text-slate-800">43.9%</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-slate-100 text-slate-600 text-xs">
                  Review
                </span>
</div>
</div>
</div>
<div className="p-3 sm:w-[15%] flex flex-col items-center justify-center">
<span className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Score</span>
<span className="text-3xl tracking-tight text-slate-800">77</span>
</div>
</div>

<div className="border border-slate-200 bg-white flex flex-col sm:flex-row">
<div className="p-3 sm:w-[35%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center gap-3">
<div className="w-12 h-12 bg-slate-100 shrink-0 relative border border-slate-200">
<img alt="Profile" className="w-full h-full object-cover grayscale opacity-90" src="https://randomuser.me/api/portraits/men/11.jpg"/>
<div className="absolute -top-2 -left-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs px-1.5 py-0.5">#8</div>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-0.5">
<h3 className="text-xl tracking-tight text-slate-800 truncate">Tiago Costa</h3>
<i className="w-4 h-4 text-[#a5ea2d] shrink-0" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-500 truncate">IT Consultant</p>
</div>
</div>
<div className="p-3 sm:w-[50%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center justify-between gap-4 px-4 sm:px-6">
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Monthly Income</span>
<span className="text-xl tracking-tight text-slate-800">€3,800</span>
</div>
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Rent Ratio</span>
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight text-slate-800">47.4%</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-slate-100 text-slate-600 text-xs">
                  Review
                </span>
</div>
</div>
</div>
<div className="p-3 sm:w-[15%] flex flex-col items-center justify-center">
<span className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Score</span>
<span className="text-3xl tracking-tight text-slate-800">72</span>
</div>
</div>

<div className="border border-slate-200 bg-white flex flex-col sm:flex-row">
<div className="p-3 sm:w-[35%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center gap-3">
<div className="w-12 h-12 bg-slate-100 shrink-0 relative border border-slate-200">
<img alt="Profile" className="w-full h-full object-cover grayscale opacity-90" src="https://randomuser.me/api/portraits/men/22.jpg"/>
<div className="absolute -top-2 -left-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs px-1.5 py-0.5">#9</div>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-0.5">
<h3 className="text-xl tracking-tight text-slate-800 truncate">David Mota</h3>
<i className="w-4 h-4 text-[#a5ea2d] shrink-0" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-500 truncate">Account Executive</p>
</div>
</div>
<div className="p-3 sm:w-[50%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center justify-between gap-4 px-4 sm:px-6">
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Monthly Income</span>
<span className="text-xl tracking-tight text-slate-800">€3,500</span>
</div>
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Rent Ratio</span>
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight text-slate-800">51.4%</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-slate-100 text-slate-600 text-xs">
                  High Risk
                </span>
</div>
</div>
</div>
<div className="p-3 sm:w-[15%] flex flex-col items-center justify-center">
<span className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Score</span>
<span className="text-3xl tracking-tight text-slate-800">69</span>
</div>
</div>

<div className="border border-slate-200 bg-white flex flex-col sm:flex-row">
<div className="p-3 sm:w-[35%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center gap-3">
<div className="w-12 h-12 bg-slate-100 shrink-0 relative border border-slate-200">
<img alt="Profile" className="w-full h-full object-cover grayscale opacity-90" src="https://randomuser.me/api/portraits/women/17.jpg"/>
<div className="absolute -top-2 -left-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs px-1.5 py-0.5">#10</div>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-0.5">
<h3 className="text-xl tracking-tight text-slate-800 truncate">Carla Dias</h3>
<i className="w-4 h-4 text-[#a5ea2d] shrink-0" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-500 truncate">Sales Representative</p>
</div>
</div>
<div className="p-3 sm:w-[50%] border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center justify-between gap-4 px-4 sm:px-6">
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Monthly Income</span>
<span className="text-xl tracking-tight text-slate-800">€3,200</span>
</div>
<div>
<span className="text-xs text-slate-500 uppercase tracking-widest block mb-0.5">Rent Ratio</span>
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight text-slate-800">56.3%</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-slate-100 text-slate-600 text-xs">
                  High Risk
                </span>
</div>
</div>
</div>
<div className="p-3 sm:w-[15%] flex flex-col items-center justify-center">
<span className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Score</span>
<span className="text-3xl tracking-tight text-slate-800">65</span>
</div>
</div>
</div>

<div className="mt-1 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-2 text-[#2f1458]/70">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
<span className="text-xs uppercase tracking-wider">End-to-End Encrypted &amp; Certified by Veriscope</span>
</div>
<div className="text-xs text-slate-400 tracking-wide">
          CONFIDENTIAL · DO NOT DISTRIBUTE
        </div>
</div>
</div>



    </>
  );
}
