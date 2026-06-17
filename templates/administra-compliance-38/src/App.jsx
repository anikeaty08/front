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
      
<div className="max-w-5xl mx-auto bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden">

<div className="bg-blue-950 text-slate-100 text-xs py-2 px-8 flex justify-between items-center uppercase tracking-widest font-medium">
<span>Sys-Ref: NMEX-AARC-SYS-0992-B</span>
<span className="flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> 
                Encrypted &amp; Verified
            </span>
</div>

<div className="px-8 py-10 border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<h1 className="text-4xl font-semibold tracking-tighter text-blue-950 mb-2 uppercase">NMEX</h1>
<p className="text-sm font-medium text-slate-600 uppercase tracking-widest mb-1">Verification &amp; Authorization Services</p>
<p className="text-xs font-light text-slate-400 uppercase tracking-widest">Administrative Access &amp; Release Command Division</p>
</div>
<div className="flex items-center gap-8">

<div className="border border-blue-900 text-blue-900 rounded-full w-28 h-28 flex flex-col items-center justify-center opacity-80 transform -rotate-12 bg-blue-50/30">
<span className="text-xs font-medium tracking-widest uppercase mb-1">Validated</span>
<iconify-icon className="text-2xl mb-1" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-xs font-mono-custom font-medium">03.04.2026</span>
</div>

<div className="flex flex-col items-end hidden md:flex">
<div className="flex gap-1 h-12 items-end opacity-80">
<div className="w-1 bg-blue-950 h-full"></div>
<div className="w-2 bg-blue-950 h-full"></div>
<div className="w-1 bg-blue-950 h-5/6"></div>
<div className="w-0.5 bg-blue-950 h-full"></div>
<div className="w-3 bg-blue-950 h-full"></div>
<div className="w-1 bg-blue-950 h-4/6"></div>
<div className="w-2 bg-blue-950 h-full"></div>
<div className="w-0.5 bg-blue-950 h-full"></div>
<div className="w-1 bg-blue-950 h-full"></div>
<div className="w-2 bg-blue-950 h-5/6"></div>
<div className="w-1 bg-blue-950 h-full"></div>
</div>
<span className="text-xs font-mono-custom text-slate-400 mt-2 tracking-widest uppercase">ID-72639-AX</span>
</div>
</div>
</div>

<div className="bg-slate-50 border-b border-slate-200 px-8 py-6 flex items-center gap-4">
<iconify-icon className="text-blue-900 text-2xl" icon="solar:document-text-linear"></iconify-icon>
<h2 className="text-xl font-medium text-blue-950 tracking-tight uppercase">Administrative Compliance &amp; Re-Verification Notice</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-200 bg-white">

<div className="p-8 border-b md:border-b-0 md:border-r border-slate-200">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Document Information</h3>
<div className="space-y-5">
<div>
<p className="text-xs font-light text-slate-500 uppercase tracking-wider mb-1">Reference File</p>
<p className="text-sm font-medium text-slate-800">Nmex-RA-72639-AX</p>
</div>
<div>
<p className="text-xs font-light text-slate-500 uppercase tracking-wider mb-1">Issue Date</p>
<p className="text-sm font-medium text-slate-800">March 4, 2026</p>
</div>
<div>
<p className="text-xs font-light text-slate-500 uppercase tracking-wider mb-1">Facility</p>
<p className="text-sm font-medium text-slate-800">Evertrack Auto Logistics Holding Facility</p>
</div>
<div>
<p className="text-xs font-light text-slate-500 uppercase tracking-wider mb-1">Lot</p>
<p className="text-sm font-medium text-slate-800">410901 — Zone 5</p>
</div>
</div>
</div>

<div className="p-8 border-b md:border-b-0 md:border-r border-slate-200">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Client Information</h3>
<div className="space-y-5">
<div>
<p className="text-xs font-light text-slate-500 uppercase tracking-wider mb-1">Name</p>
<p className="text-sm font-medium text-slate-800">Sharday Charley Stacy</p>
</div>
<div>
<p className="text-xs font-light text-slate-500 uppercase tracking-wider mb-1">Location</p>
<p className="text-sm font-medium text-slate-800">Albuquerque, NM</p>
</div>
</div>
</div>

<div className="p-8">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Vehicle Information</h3>
<div className="space-y-5">
<div>
<p className="text-xs font-light text-slate-500 uppercase tracking-wider mb-1">Vehicle</p>
<p className="text-sm font-medium text-slate-800">2022 Chevrolet Silverado 1500 RST</p>
</div>
<div>
<p className="text-xs font-light text-slate-500 uppercase tracking-wider mb-1">Color</p>
<p className="text-sm font-medium text-slate-800">Red</p>
</div>
<div>
<p className="text-xs font-light text-slate-500 uppercase tracking-wider mb-1">VIN</p>
<p className="text-sm font-medium font-mono-custom text-slate-800 tracking-wider">3GCPYBEK0NG123456</p>
</div>
</div>
</div>
</div>

<div className="p-8 border-b border-slate-200">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:danger-triangle-linear"></iconify-icon>
                Compliance Update
            </h3>
<div className="max-w-3xl">
<div className="bg-blue-50/50 border border-blue-100/50 rounded-sm p-4 mb-6 flex justify-between items-center">
<span className="text-sm text-blue-900 font-light uppercase tracking-wider">Release Authorization Issued</span>
<span className="text-sm text-blue-950 font-medium">February 24, 2026</span>
</div>
<div className="space-y-5 text-sm text-slate-600 font-light leading-relaxed">
<p>During routine NMEX facility monitoring conducted on March 4, 2026, the vehicle remained registered within the Evertrack Auto Logistics controlled holding compound beyond the operational removal window associated with the original release authorization.</p>
<p>As a result, the NMEX system initiated an administrative compliance review and the previously issued Main Gate Processing &amp; Base Identification Activation authorization has been revoked within the NMEX facility access system.</p>
<p className="font-medium text-blue-950">To restore removal authorization for the vehicle, the file requires administrative re-verification and re-issuance of gate authorization credentials.</p>
</div>
</div>
</div>

<div className="p-8 border-b border-slate-200 bg-slate-50/50">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:bill-list-linear"></iconify-icon>
                Outstanding Charges Summary
            </h3>
<div className="max-w-3xl bg-white border border-slate-200 rounded-sm">

<div className="px-6 py-4 border-b border-slate-100 bg-slate-50/80">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Yard Occupancy Charges</p>
</div>
<div className="px-6 py-4 flex justify-between items-center text-sm font-light text-slate-600 border-b border-slate-100">
<span>March 3</span>
<span className="font-mono-custom font-medium text-slate-800">$70</span>
</div>
<div className="px-6 py-4 flex justify-between items-center text-sm font-light text-slate-600 border-b border-slate-200">
<span>March 4</span>
<span className="font-mono-custom font-medium text-slate-800">$70</span>
</div>
<div className="px-6 py-4 flex justify-between items-center border-b border-slate-200 bg-slate-50/50">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Subtotal</span>
<span className="text-sm font-mono-custom font-medium text-slate-800">$140</span>
</div>

<div className="px-6 py-4 border-b border-slate-100 bg-slate-50/80">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Gate Authorization Re-Activation</p>
</div>
<div className="px-6 py-4 flex justify-between items-center text-sm font-light text-slate-600 border-b border-slate-200">
<span>Administrative Processing Fee</span>
<span className="font-mono-custom font-medium text-slate-800">$500</span>
</div>

<div className="px-6 py-5 flex justify-between items-center bg-blue-950 text-white rounded-b-sm">
<span className="text-xs font-medium uppercase tracking-widest">Total Balance Due</span>
<span className="text-xl font-mono-custom font-medium tracking-tight">$640</span>
</div>
</div>
</div>

<div className="px-8 py-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 bg-white">
<div>
<p className="text-xs font-medium text-slate-800 uppercase tracking-widest mb-1.5">NMEX Verification &amp; Compliance Department</p>
<p className="text-xs font-light text-slate-500 uppercase tracking-widest">Gate Operations &amp; Base Identification Unit</p>
<div className="mt-8 flex items-center gap-2 text-xs text-slate-400 tracking-widest uppercase font-medium">
<iconify-icon className="text-sm" icon="solar:lock-keyhole-linear"></iconify-icon>
                    Confidential &amp; Restricted Access
                </div>
</div>
<div className="flex flex-col items-start md:items-end w-full md:w-auto">
<p className="text-xs font-light text-slate-500 uppercase tracking-widest mb-3">
                    Auth Code: <span className="font-mono-custom font-medium text-slate-800 ml-2">AUTH-99-821</span>
</p>

<div className="flex gap-0.5 h-6 opacity-30 w-full md:w-auto justify-start md:justify-end">
<div className="w-1 bg-slate-800 h-full"></div>
<div className="w-0.5 bg-slate-800 h-full"></div>
<div className="w-2 bg-slate-800 h-full"></div>
<div className="w-0.5 bg-slate-800 h-full"></div>
<div className="w-1.5 bg-slate-800 h-full"></div>
<div className="w-0.5 bg-slate-800 h-full"></div>
<div className="w-2 bg-slate-800 h-full"></div>
<div className="w-1 bg-slate-800 h-full"></div>
<div className="w-0.5 bg-slate-800 h-full"></div>
<div className="w-1 bg-slate-800 h-full"></div>
<div className="w-2 bg-slate-800 h-full"></div>
</div>
</div>
</div>
</div>

    </>
  );
}
