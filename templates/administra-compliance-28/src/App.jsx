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
      

<main className="bg-white max-w-4xl w-full shadow-sm border border-slate-200 p-6 sm:p-12 lg:p-16 relative overflow-hidden rounded-sm">

<header className="flex flex-col sm:flex-row sm:items-start justify-between mb-10 pb-6 border-b border-slate-200 gap-6">
<div className="flex items-center gap-4">
<div className="text-slate-800 bg-slate-100 p-2.5 rounded shadow-sm border border-slate-200 flex items-center justify-center">
<iconify-icon height="32" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div>
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 uppercase tracking-widest">NMEX</h1>
<p className="text-xs font-medium text-slate-600 uppercase tracking-wide mt-1">Verification &amp; Authorization Services</p>
<p className="text-xs text-slate-500 mt-0.5">Administrative Access &amp; Release Command Division</p>
</div>
</div>
<div className="flex items-center sm:items-end flex-col justify-center bg-slate-50 px-4 py-2 border border-slate-100 rounded">
<span className="text-xs text-slate-400 uppercase tracking-widest mb-1">Status</span>
<span className="text-sm font-semibold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-red-600 block"></span> Revoked
                </span>
</div>
</header>

<div className="mb-10 text-center px-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 uppercase">Administrative Compliance <br className="hidden sm:block"/> &amp; Re-Verification Notice</h2>
<div className="h-px w-24 bg-slate-800 mx-auto mt-6"></div>
</div>

<section className="bg-slate-50 rounded border border-slate-100 p-6 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div>
<p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Reference File</p>
<p className="text-sm font-semibold text-slate-900 font-mono tracking-tight">Nmex-RA-72639-AX</p>
</div>
<div>
<p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Issue Date</p>
<p className="text-sm font-medium text-slate-900">March 4, 2026</p>
</div>
<div className="lg:col-span-2">
<p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Facility Details</p>
<p className="text-sm font-medium text-slate-900">Evertrack Auto Logistics Holding Facility <span className="text-slate-400 mx-1">|</span> Lot 410901 — Zone 5</p>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

<div className="border border-slate-200 p-6 rounded relative">
<div className="absolute -top-3 left-4 bg-white px-2">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:user-id-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                        Client Information
                    </h3>
</div>
<div className="space-y-4 text-sm mt-2">
<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
<span className="text-slate-500 w-20 text-xs uppercase tracking-wider">Name</span>
<span className="font-medium text-slate-900">Sharday Charley Stacy</span>
</div>
<div className="w-full h-px bg-slate-50"></div>
<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
<span className="text-slate-500 w-20 text-xs uppercase tracking-wider">Location</span>
<span className="font-medium text-slate-900">Albuquerque, NM</span>
</div>
</div>
</div>

<div className="border border-slate-200 p-6 rounded relative">
<div className="absolute -top-3 left-4 bg-white px-2">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:car-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                        Vehicle Information
                    </h3>
</div>
<div className="space-y-4 text-sm mt-2">
<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
<span className="text-slate-500 w-20 text-xs uppercase tracking-wider">Vehicle</span>
<span className="font-medium text-slate-900">2022 Chevrolet Silverado 1500 RST</span>
</div>
<div className="w-full h-px bg-slate-50"></div>
<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
<span className="text-slate-500 w-20 text-xs uppercase tracking-wider">Details</span>
<span className="font-medium text-slate-900">Red</span>
</div>
<div className="w-full h-px bg-slate-50"></div>
<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
<span className="text-slate-500 w-20 text-xs uppercase tracking-wider">VIN</span>
<span className="font-mono text-xs font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 tracking-tight">3GCPYBEK0NG123456</span>
</div>
</div>
</div>
</section>

<section className="mb-10">
<div className="border-l-2 border-slate-800 bg-slate-50/80 p-6 rounded-r space-y-4 text-sm leading-relaxed text-slate-700">
<p className="flex items-center gap-2">
<iconify-icon className="text-slate-400" height="18" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<strong className="font-semibold text-slate-900">Release Authorization Issued:</strong>
<span className="font-medium">February 24, 2026</span>
</p>
<p>During routine NMEX facility monitoring conducted on March 4, 2026, the vehicle remained registered within the Evertrack Auto Logistics controlled holding compound beyond the operational removal window associated with the previously issued release authorization.</p>
<p>As a result, the NMEX system initiated an administrative compliance review and the previously issued <span className="font-semibold text-slate-900">Main Gate Processing &amp; Base Identification Activation</span> authorization has been <span className="text-red-700 font-semibold bg-red-50 px-1 rounded">revoked</span> within the NMEX facility access control system.</p>
<p className="text-slate-600 italic mt-2">To restore removal authorization for the vehicle, the file requires administrative re-verification and re-issuance of gate authorization credentials.</p>
</div>
</section>

<section className="mb-10">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Outstanding Charges Summary</h3>
<div className="border border-slate-200 rounded overflow-hidden">
<table className="w-full text-sm text-left text-slate-600">
<thead className="text-xs uppercase tracking-wider bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-5 py-3.5 font-medium text-slate-500" scope="col">Description</th>
<th className="px-5 py-3.5 font-medium text-slate-500 text-right w-32" scope="col">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="bg-white">
<td className="px-5 py-3.5">Yard Occupancy – March 3</td>
<td className="px-5 py-3.5 text-right font-medium text-slate-900">$70.00</td>
</tr>
<tr className="bg-white">
<td className="px-5 py-3.5">Yard Occupancy – March 4</td>
<td className="px-5 py-3.5 text-right font-medium text-slate-900">$70.00</td>
</tr>
<tr className="bg-slate-50/50">
<td className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Subtotal</td>
<td className="px-5 py-3.5 text-right font-semibold text-slate-900">$140.00</td>
</tr>
<tr className="bg-white">
<td className="px-5 py-4">Gate Authorization Re-Activation Fee</td>
<td className="px-5 py-4 text-right font-medium text-slate-900">$500.00</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="mb-12 flex justify-end">
<div className="bg-slate-900 text-white p-6 rounded-md min-w-[300px] flex items-center justify-between shadow-md border border-slate-800">
<span className="text-xs font-medium uppercase tracking-widest text-slate-300">Total Balance Due</span>
<span className="text-2xl font-semibold tracking-tight">$640.00</span>
</div>
</section>

<footer className="border-t border-slate-200 pt-10 mt-auto">
<div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-8 mb-8">

<div className="space-y-5 w-full md:w-auto">
<div className="flex items-center gap-3 text-slate-700 bg-slate-50 px-3 py-2 border border-slate-200 inline-flex rounded">
<iconify-icon className="text-green-600" height="20" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-800">Digital Administrative Validation</span>
</div>

<div className="flex flex-col gap-2 w-full md:w-56 opacity-80">
<div className="h-10 flex gap-1 w-full overflow-hidden">
<div className="w-1.5 bg-slate-800 h-full"></div>
<div className="w-3 bg-slate-800 h-full"></div>
<div className="w-0.5 bg-slate-800 h-full"></div>
<div className="w-4 bg-slate-800 h-full"></div>
<div className="w-1 bg-slate-800 h-full"></div>
<div className="w-2 bg-slate-800 h-full"></div>
<div className="w-0.5 bg-slate-800 h-full"></div>
<div className="w-3 bg-slate-800 h-full"></div>
<div className="w-1.5 bg-slate-800 h-full"></div>
<div className="w-4 bg-slate-800 h-full"></div>
<div className="w-0.5 bg-slate-800 h-full"></div>
<div className="w-3 bg-slate-800 h-full"></div>
<div className="w-1 bg-slate-800 h-full"></div>
<div className="w-2.5 bg-slate-800 h-full"></div>
<div className="w-1 bg-slate-800 h-full"></div>
<div className="w-3 bg-slate-800 h-full"></div>
</div>
<span className="text-xs font-mono font-medium tracking-widest text-slate-500 uppercase">NMEX-SECURE-VAL-029X</span>
</div>
</div>

<div className="md:text-right space-y-1 w-full md:w-auto pt-4 border-t border-slate-100 md:border-none md:pt-0">
<p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">NMEX</p>
<p className="text-xs text-slate-500 font-medium">Verification &amp; Compliance Department</p>
<p className="text-xs text-slate-400">Gate Operations &amp; Base Identification Unit</p>
</div>
</div>

<div className="text-center pt-6 border-t border-slate-100 px-4">
<p className="text-xs text-slate-400">
                    This document confirms the administrative compliance review status and authorization update within the NMEX internal clearance system. Do not duplicate or alter.
                </p>
</div>
</footer>
</main>

    </>
  );
}
