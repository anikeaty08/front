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
      

<div className="laptop-chassis">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-black rounded-b-lg z-50"></div>
<div className="screen-bezel">

<div className="reflection-overlay"></div>

<div className="screen-content flex">

<aside className="w-64 bg-slate-900 text-slate-400 flex flex-col border-r border-slate-800 shrink-0 h-full">
<div className="p-6 pb-8 border-b border-slate-800">
<div className="flex items-center gap-2 text-white mb-1">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
<span className="font-bold text-[10px] tracking-tighter">NX</span>
</div>
<h1 className="font-semibold text-sm tracking-tight text-slate-200">NMEX <span className="text-slate-500">AUTHORITY</span></h1>
</div>
<p className="text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-medium">Internal Console</p>
</div>
<nav className="flex-1 px-3 py-6 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-slate-800 hover:text-slate-200 transition-colors group" href="#">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md bg-slate-800 text-white shadow-sm ring-1 ring-white/10" href="#">
<iconify-icon className="text-blue-400" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Registry Records</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-slate-800 hover:text-slate-200 transition-colors" href="#">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Shipment Clearance</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-slate-800 hover:text-slate-200 transition-colors" href="#">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Identity Verification</span>
</a>
<div className="pt-4 pb-2 px-3">
<p className="text-[10px] uppercase tracking-widest text-slate-600 font-semibold">Monitoring</p>
</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-slate-800 hover:text-slate-200 transition-colors" href="#">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Compliance Flags</span>
<span className="ml-auto bg-red-500/20 text-red-400 text-[10px] px-1.5 py-0.5 rounded font-medium">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-slate-800 hover:text-slate-200 transition-colors" href="#">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Audit Logs</span>
</a>
</nav>
<div className="p-4 border-t border-slate-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs text-slate-300 font-medium">
                                DO
                            </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200">Officer D. Ortega</span>
<span className="text-[10px] text-slate-500">Logistics Div • L4</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-slate-50/50">

<header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
<div className="flex items-center gap-2 text-slate-500 text-xs">
<span>Registry</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span>Client Verification</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-slate-800 font-medium bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">MMX-REG-8829</span>
</div>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                SECURE CONNECTION
                            </span>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
</div>
</header>
<div className="flex-1 p-8 overflow-y-auto">
<div className="max-w-5xl mx-auto space-y-6">

<div className="flex items-start justify-between">
<div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Client Registry Record — Clearance Review</h2>
<p className="text-xs text-slate-500 mt-1">NMEX Global Processing &amp; Clearance Authority • Albuquerque Logistics Hub</p>
</div>
<div className="flex gap-2">
<button className="bg-white border border-slate-300 text-slate-700 text-xs font-medium px-3 py-2 rounded-md hover:bg-slate-50 shadow-sm">Export Report</button>
<button className="bg-white border border-slate-300 text-slate-700 text-xs font-medium px-3 py-2 rounded-md hover:bg-slate-50 shadow-sm">Flag Account</button>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5">
<div className="grid grid-cols-4 gap-6">
<div className="col-span-1">
<p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Client Name</p>
<p className="text-sm font-semibold text-slate-900">Sharday Charley SW</p>
</div>
<div className="col-span-1">
<p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Registered Location</p>
<div className="flex items-center gap-1">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear" width="14"></iconify-icon>
<p className="text-sm text-slate-700">Albuquerque, NM 87121</p>
</div>
</div>
<div className="col-span-1">
<p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Reference ID</p>
<p className="text-sm font-mono text-slate-600 bg-slate-50 inline-block px-1.5 py-0.5 rounded border border-slate-100">MMX‑REG‑8829</p>
</div>
<div className="col-span-1 text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 shadow-sm">
<iconify-icon icon="solar:danger-circle-linear" width="14"></iconify-icon>
                                            Verification Required
                                        </span>
</div>
</div>
</div>
<div className="grid grid-cols-12 gap-6">

<div className="col-span-5 space-y-4">
<div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden h-full">
<div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<h3 className="text-xs font-semibold text-slate-800 uppercase tracking-wide">Shipment Record</h3>
<iconify-icon className="text-slate-400" icon="solar:box-minimalistic-linear" width="16"></iconify-icon>
</div>
<div className="p-5 space-y-5">
<div>
<p className="text-[10px] text-slate-500 mb-1">Package Category</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<p className="text-sm text-slate-700 font-medium">Registered Cargo</p>
</div>
</div>
<div>
<p className="text-[10px] text-slate-500 mb-1">Clearance Type</p>
<p className="text-sm text-slate-700 font-medium">Recipient Authorization</p>
</div>
<div>
<p className="text-[10px] text-slate-500 mb-1">Registry Stage</p>
<div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-md">
<div className="w-4 h-4 rounded-full border-2 border-slate-300 border-t-blue-600 animate-spin"></div>
<p className="text-xs text-slate-600">Pending Identity Confirmation</p>
</div>
</div>
<div className="pt-2 border-t border-slate-100">
<div className="flex justify-between items-center">
<span className="text-[10px] text-slate-400">System Code</span>
<span className="text-[10px] font-mono text-slate-400">LOG-099-AX</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-7 space-y-4">
<div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
<div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<h3 className="text-xs font-semibold text-slate-800 uppercase tracking-wide">Identity Verification</h3>
<span className="text-[10px] text-slate-400">Submission #49221</span>
</div>
<div className="p-6">
<div className="flex gap-6">

<div className="relative group">
<div className="w-48 h-32 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 shadow-sm relative overflow-hidden">

<div className="absolute inset-0 filter blur-[3px] opacity-80 pointer-events-none">
<div className="absolute top-3 left-3 w-12 h-16 bg-slate-300 rounded-sm"></div>
<div className="absolute top-3 left-16 right-3 h-3 bg-slate-400 rounded-sm w-20"></div>
<div className="absolute top-8 left-16 right-3 h-2 bg-slate-300 rounded-sm w-16"></div>
<div className="absolute top-12 left-16 h-2 bg-slate-300 rounded-sm w-24"></div>
<div className="absolute bottom-[-10px] right-[-10px] w-16 h-16 rounded-full border-4 border-yellow-400/50"></div>
<div className="absolute bottom-2 left-3 w-full h-2 bg-slate-300 w-32"></div>
</div>

<div className="h-4 bg-teal-600 w-full opacity-40"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-12 z-20 pointer-events-none">
<div className="border-[3px] border-red-600 text-red-600 px-2 py-1 text-center opacity-90 mix-blend-multiply">
<p className="text-xs font-bold uppercase tracking-widest leading-tight whitespace-nowrap">Identity Image</p>
<p className="text-xl font-black uppercase tracking-widest leading-none stamp-text">REJECTED</p>
</div>
</div>
</div>

<div className="flex-1 space-y-3">
<div className="flex items-start gap-2">
<iconify-icon className="text-red-500 mt-0.5" icon="solar:file-remove-linear" width="18"></iconify-icon>
<div>
<p className="text-xs font-medium text-red-700">Authenticity Check Failed</p>
<p className="text-[11px] text-red-600/80 leading-relaxed mt-1">
                                                                The submitted identification image does not meet registry authenticity standards. Photographic copies are not accepted. Live verification required.
                                                            </p>
</div>
</div>
<div className="bg-slate-50 rounded border border-slate-200 p-3 mt-2">
<p className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Detected Issue</p>
<p className="text-xs text-slate-700 font-medium">Non-physical capture (Screen glare detected)</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-blue-50/50 rounded-lg border border-blue-100 p-5 flex justify-between items-center shadow-sm">
<div className="max-w-md">
<h4 className="text-xs font-semibold text-blue-900 mb-1">Compliance Action Required</h4>
<p className="text-xs text-blue-800/80 leading-relaxed">
                                                To proceed with clearance, the recipient must complete biometric registry verification to link identity with shipment authorization.
                                            </p>
<div className="flex items-center gap-2 mt-3">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-[11px] font-medium text-blue-700">Verification Link Generated</span>
</div>
</div>
<button className="bg-blue-600 text-white text-xs font-medium px-4 py-2.5 rounded-md shadow hover:bg-blue-700 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:plain-linear" width="16"></iconify-icon>
                                            Send Notice
                                        </button>
</div>

<div className="bg-slate-50 rounded-lg border border-slate-200/60 border-dashed p-3">
<div className="flex gap-2">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:notes-linear" width="14"></iconify-icon>
<p className="text-[11px] text-slate-500 italic">
<span className="font-semibold not-italic text-slate-600">Officer Note:</span> System flagged submission as non-physical ID capture. Automated verification required. Manual override disabled per protocol 7A.
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="h-8 border-t border-slate-200 bg-white flex items-center justify-between px-8 text-[10px] text-slate-400 shrink-0">
<div className="flex items-center gap-4">
<span>NMEX Internal Verification Console v4.2.0</span>
<span className="w-px h-3 bg-slate-200"></span>
<span>Server: US-WEST-SECURE-04</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="font-medium text-slate-600">Registry Sync: Awaiting Client Verification</span>
<span className="ml-2 font-mono">14:02:44 MST</span>
</div>
</footer>
</main>
</div>
</div>

<div className="absolute -bottom-2 left-4 right-4 h-4 bg-[#1a1a1a] rounded-b-xl -z-10 shadow-xl"></div>
</div>

    </>
  );
}
