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
      

<div className="w-full max-w-7xl h-full max-h-[900px] bg-slate-50 rounded-xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10 relative">

<div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 space-x-2 shrink-0">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400"></div>
</div>
<div className="flex-1 flex justify-center px-20">
<div className="bg-white border border-slate-200 text-slate-400 text-xs py-1 px-3 rounded-md w-full max-w-lg flex items-center justify-center space-x-2">
<iconify-icon className="text-slate-400" icon="solar:lock-keyhole-linear"></iconify-icon>
<span>secure.nmex-gov.internal/console/v4/verification/case-8829</span>
</div>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<nav className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 border-r border-slate-800">
<div className="p-6">
<div className="flex items-center space-x-2 text-white mb-1">
<div className="font-semibold tracking-tighter text-lg leading-none">NMEX</div>
</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Internal Authority</div>
</div>
<div className="flex-1 px-3 space-y-1 overflow-y-auto">
<a className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors group" href="#">
<iconify-icon className="text-slate-500 group-hover:text-white" icon="solar:widget-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-md bg-slate-800 text-white shadow-sm ring-1 ring-white/5" href="#">
<iconify-icon className="text-blue-400" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Registry Records</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors group" href="#">
<iconify-icon className="text-slate-500 group-hover:text-white" icon="solar:box-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Shipment Clearance</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors group" href="#">
<iconify-icon className="text-slate-500 group-hover:text-white" icon="solar:user-id-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Identity Verification</span>
</a>
<div className="pt-4 pb-2 px-3">
<div className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Monitoring</div>
</div>
<a className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors group" href="#">
<iconify-icon className="text-slate-500 group-hover:text-white" icon="solar:shield-warning-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Compliance Flags</span>
<span className="ml-auto bg-red-500/20 text-red-400 text-xs py-0.5 px-2 rounded-full font-medium">3</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors group" href="#">
<iconify-icon className="text-slate-500 group-hover:text-white" icon="solar:history-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Audit Logs</span>
</a>
</div>
<div className="p-4 border-t border-slate-800">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-xs font-medium text-white">
                            JS
                        </div>
<div>
<div className="text-xs font-medium text-white">Officer J. Stevens</div>
<div className="text-xs text-slate-500">ID: NM-992-OPS</div>
</div>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-hidden">

<header className="bg-white border-b border-slate-200 h-16 px-8 flex items-center justify-between shrink-0">
<div>
<nav className="flex text-xs text-slate-500 mb-1 space-x-2">
<span>Registry</span>
<span>/</span>
<span>Cases</span>
<span>/</span>
<span className="text-slate-900 font-medium">MMX-REG-8829</span>
</nav>
<h1 className="text-lg font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                            Registry Record — Clearance Review
                        </h1>
</div>
<div className="flex items-center space-x-3">
<button className="flex items-center space-x-2 px-3 py-1.5 rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-xs font-medium shadow-sm">
<iconify-icon icon="solar:printer-linear" width="14"></iconify-icon>
<span>Export Report</span>
</button>
<button className="flex items-center space-x-2 px-3 py-1.5 rounded bg-slate-900 text-white hover:bg-slate-800 transition-colors text-xs font-medium shadow-sm">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
<span>Mark Resolved</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-5xl mx-auto space-y-6">

<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Sharday Charley SW</h2>
<div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span>Albuquerque, New Mexico 87121</span>
</div>
</div>
<div className="text-xs text-slate-400 mt-1 font-mono">Reference ID: MMX-REG-8829</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium">
<iconify-icon icon="solar:shield-warning-linear" width="14"></iconify-icon>
                                    Verification Required
                                </div>
<div className="text-xs text-slate-400">Created: Oct 24, 2023</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="space-y-6">

<div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
<div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
<h3 className="text-sm font-semibold text-slate-900">Shipment Record</h3>
<iconify-icon className="text-slate-400" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="p-5 space-y-4">
<div>
<div className="text-xs text-slate-500 mb-1">Package Category</div>
<div className="text-sm font-medium text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:tag-linear" width="14"></iconify-icon>
                                                Registered Cargo
                                            </div>
</div>
<div className="h-px bg-slate-100"></div>
<div>
<div className="text-xs text-slate-500 mb-1">Clearance Type</div>
<div className="text-sm font-medium text-slate-900">Recipient Authorization</div>
</div>
<div className="h-px bg-slate-100"></div>
<div>
<div className="text-xs text-slate-500 mb-1">Registry Stage</div>
<div className="text-sm font-medium text-slate-900 text-orange-600">Pending Identity Confirmation</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-slate-200">
<div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50">
<h3 className="text-sm font-semibold text-slate-900">Officer Notes</h3>
</div>
<div className="p-5">
<p className="text-xs leading-relaxed text-slate-500">
                                            System flagged submission as non-physical ID capture during automated intake. Source metadata indicates screen capture of a secondary device. Manual override disabled until live biometric link is established.
                                        </p>
<div className="mt-3 text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
<span>Logged by SysAdmin_Auto • 14:02 PM</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
<div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
<h3 className="text-sm font-semibold text-slate-900">Identity Verification Asset</h3>
<span className="text-xs font-mono text-slate-400">ID-IMG-RAW-004</span>
</div>
<div className="p-8 bg-slate-50 flex flex-col items-center justify-center">

<div className="relative w-full max-w-sm aspect-[1.586] bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden select-none group">

<div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-100"></div>

<div className="absolute top-0 w-full h-1/4 bg-teal-600/80 blur-sm"></div>

<div className="absolute top-8 left-4 right-4 h-2 bg-white/50 blur-sm rounded"></div>
<div className="absolute top-16 left-32 right-8 space-y-3">
<div className="h-3 bg-slate-800/20 rounded blur-sm w-3/4"></div>
<div className="h-2 bg-slate-800/10 rounded blur-sm w-1/2"></div>
<div className="h-2 bg-slate-800/10 rounded blur-sm w-2/3"></div>
</div>

<div className="absolute top-14 left-4 w-24 h-32 bg-slate-300 rounded shadow-inner blur-md"></div>

<div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-yellow-400/30 blur-md"></div>

<div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

<div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
<div className="border-[3px] border-red-600 text-red-600 px-6 py-2 rounded-sm transform -rotate-12 bg-red-50/10 backdrop-blur-none mix-blend-multiply shadow-sm">
<span className="block text-xl font-bold tracking-[0.2em] uppercase whitespace-nowrap opacity-90 font-mono">Identity Image Rejected</span>
</div>
</div>
</div>

<div className="mt-6 w-full max-w-lg bg-red-50 border border-red-100 rounded-md p-3 flex items-start gap-3">
<iconify-icon className="text-red-600 shrink-0 mt-0.5" icon="solar:danger-triangle-linear" width="16"></iconify-icon>
<div className="text-xs text-red-800">
<span className="font-semibold block mb-0.5">Authenticity Check Failed</span>
                                                The submitted identification image does not meet registry authenticity standards. Photographic copies are not accepted. Live verification required.
                                            </div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
<div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
<iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Biometric Link Required</h3>
<p className="text-xs text-slate-500 mt-1 max-w-md">
                                                    To proceed with clearance, the recipient must complete biometric registry verification to link identity with shipment authorization.
                                                </p>
</div>
</div>
<div className="flex flex-col items-end gap-2 shrink-0">
<div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-100">
<iconify-icon icon="solar:link-circle-linear" width="14"></iconify-icon>
                                                Verification Link Generated
                                            </div>
<button className="text-xs text-slate-400 underline hover:text-slate-600">Resend Notification</button>
</div>
</div>
<div className="bg-slate-50 border-t border-slate-200 px-6 py-2 flex justify-between items-center">
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:server-linear" width="12"></iconify-icon>
<span>Registry Sync: Awaiting Client Verification</span>
</div>
<div className="text-xs font-mono text-slate-400">LAT: 32ms</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
