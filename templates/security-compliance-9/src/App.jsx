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
      

<aside className="w-20 bg-[#1e232e] flex flex-col items-center py-6 gap-6 flex-shrink-0 z-20 border-r border-gray-800 shadow-xl">

<div className="h-10 w-10 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-xl flex items-center justify-center text-white shadow-lg mb-4 ring-1 ring-white/10">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>

<nav className="flex flex-col gap-5 w-full px-3">
<button className="group w-full aspect-square flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200">
<iconify-icon className="group-hover:scale-105 transition-transform" height="24" icon="solar:widget-2-linear" width="24"></iconify-icon>
</button>
<button className="w-full aspect-square flex items-center justify-center bg-white text-slate-900 shadow-lg shadow-black/20 rounded-xl transition-all relative">
<iconify-icon height="24" icon="solar:settings-linear" width="24"></iconify-icon>
</button>
<button className="group w-full aspect-square flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200">
<iconify-icon className="group-hover:scale-105 transition-transform" height="24" icon="solar:folder-linear" width="24"></iconify-icon>
</button>
<button className="group w-full aspect-square flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200">
<iconify-icon className="group-hover:scale-105 transition-transform" height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</button>
<button className="group w-full aspect-square flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200">
<iconify-icon className="group-hover:scale-105 transition-transform" height="24" icon="solar:accessibility-linear" width="24"></iconify-icon>
</button>
</nav>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-gray-50/50">

<div className="flex-1 overflow-y-auto overflow-x-hidden p-8 lg:p-10">

<div className="max-w-[1600px] mx-auto">
<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Framework Cross-Mapping</h1>
<p className="text-base text-gray-500 mt-2 font-medium">Compliance controls mapped across security frameworks</p>
</div>

<div className="relative mb-8 max-w-2xl">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-base placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-300 shadow-sm transition-all" placeholder="Search by control ID or name..." type="text"/>
</div>

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8 ring-1 ring-black/5">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead>
<tr className="border-b border-gray-100 bg-gray-50/80">
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 w-[20%]">ISO/IEC 27001</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 w-[20%]">NIS2</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 w-[20%]">Cyber Fundamentals</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 w-[20%]">FedRAMP</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 w-[15%]">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50/80 transition-colors duration-150">
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900 group-hover:text-black">A.5.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Information Security Policies</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">NIS2-1.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Information Security Governance</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">CF-GOV-01</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Governance Framework</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">AC-1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Access Control Policy</div>
</td>
<td className="py-5 px-6 align-top">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                            Mapped
                                        </span>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 transition-colors duration-150">
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">A.6.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Internal Organization</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">NIS2-1.2</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Organizational Structure</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">CF-GOV-02</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Roles and Responsibilities</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">AC-2</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Account Management</div>
</td>
<td className="py-5 px-6 align-top">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                            Mapped
                                        </span>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 transition-colors duration-150">
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">A.7.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Human Resource Security</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">NIS2-2.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Personnel Security</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-gray-300 font-normal text-xl select-none">—</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">PS-1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Personnel Security Policy</div>
</td>
<td className="py-5 px-6 align-top">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 shadow-sm">
<iconify-icon height="14" icon="solar:danger-circle-linear" width="14"></iconify-icon>
                                            Partially Mapped
                                        </span>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 transition-colors duration-150">
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">A.8.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Asset Management</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">NIS2-3.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Asset Inventory</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">CF-ASSET-01</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Asset Management</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">CM-2</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Baseline Configuration</div>
</td>
<td className="py-5 px-6 align-top">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                            Mapped
                                        </span>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 transition-colors duration-150">
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">A.9.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Access Control</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">NIS2-4.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Access Rights Management</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">CF-IAM-01</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Identity Management</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">AC-3</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Access Enforcement</div>
</td>
<td className="py-5 px-6 align-top">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                            Mapped
                                        </span>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 transition-colors duration-150">
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">A.10.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Cryptography</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">NIS2-5.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Encryption Standards</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">CF-CRYPTO-01</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Cryptographic Controls</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-gray-300 font-normal text-xl select-none">—</div>
</td>
<td className="py-5 px-6 align-top">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 shadow-sm">
<iconify-icon height="14" icon="solar:danger-circle-linear" width="14"></iconify-icon>
                                            Partially Mapped
                                        </span>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 transition-colors duration-150 border-b-0">
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">A.12.1</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Compliance Monitoring</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-gray-300 font-normal text-xl select-none">—</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">CF-MON-01</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Monitoring &amp; Logging</div>
</td>
<td className="py-5 px-6 align-top">
<div className="text-base font-semibold text-gray-900">CA-7</div>
<div className="text-sm text-gray-500 mt-1 font-medium">Continuous Monitoring</div>
</td>
<td className="py-5 px-6 align-top">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 shadow-sm">
<iconify-icon height="14" icon="solar:danger-circle-linear" width="14"></iconify-icon>
                                            Partially Mapped
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center justify-between shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
<iconify-icon height="96" icon="solar:pie-chart-2-linear" width="96"></iconify-icon>
</div>
<div className="flex flex-col gap-1 z-10">
<span className="text-sm font-medium text-gray-500">Overall Coverage</span>
<div className="text-4xl font-semibold text-gray-900 tracking-tight mt-1">58%</div>
<span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-md w-fit mt-1 flex items-center gap-1">
<iconify-icon height="12" icon="solar:graph-up-linear" width="12"></iconify-icon> +2.4%
                            </span>
</div>
<div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<defs>
<lineargradient id="progressGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#10b981"></stop>
<stop offset="100%" stop-color="#059669"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="1.5"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<circle cx="50" cy="50" fill="none" r="42" stroke="#f1f5f9" strokeWidth="6"></circle>

<circle className="animate-progress drop-shadow-sm" cx="50" cy="50" fill="none" r="42" stroke="url(#progressGradient)" stroke-dasharray="263.89" stroke-dashoffset="110.83" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
<div className="flex items-start justify-between mb-2">
<div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-100 transition-colors">
<iconify-icon height="24" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<span className="text-sm font-medium text-gray-500">Total Controls</span>
<div className="flex items-end justify-between mt-1">
<div className="text-3xl font-semibold text-gray-900 tracking-tight">7</div>
<div className="w-16 h-8">
<svg className="w-full h-full overflow-visible" viewbox="0 0 60 25">
<path className="opacity-50 group-hover:opacity-100 transition-opacity" d="M0 20 L10 18 L20 12 L30 15 L40 8 L50 10 L60 2" fill="none" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="60" cy="2" fill="#6366f1" r="2"></circle>
</svg>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
<div className="flex items-start justify-between mb-2">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-100 transition-colors">
<iconify-icon height="24" icon="solar:check-read-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<span className="text-sm font-medium text-gray-500">Mapped Controls</span>
<div className="flex items-end justify-between mt-1">
<div className="text-3xl font-semibold text-gray-900 tracking-tight">4</div>
<div className="w-16 h-8">
<svg className="w-full h-full overflow-visible" viewbox="0 0 60 25">
<path className="opacity-50 group-hover:opacity-100 transition-opacity" d="M0 22 L10 19 L20 20 L30 14 L40 10 L50 8 L60 4" fill="none" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="60" cy="4" fill="#10b981" r="2"></circle>
</svg>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
<div className="flex items-start justify-between mb-2">
<div className="p-2 bg-amber-50 text-amber-600 rounded-xl group-hover:bg-amber-100 transition-colors">
<iconify-icon height="24" icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<span className="text-sm font-medium text-gray-500">Partial Coverage</span>
<div className="flex items-end justify-between mt-1">
<div className="text-3xl font-semibold text-gray-900 tracking-tight">3</div>
<div className="w-16 h-8">
<svg className="w-full h-full overflow-visible" viewbox="0 0 60 25">
<path className="opacity-50 group-hover:opacity-100 transition-opacity" d="M0 15 L10 18 L20 14 L30 16 L40 12 L50 14 L60 8" fill="none" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="60" cy="8" fill="#d97706" r="2"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="h-10"></div>
</div>
</main>

    </>
  );
}
