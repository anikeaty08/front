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
      
<main className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm ring-1 ring-gray-200 overflow-hidden">

<div className="p-6 sm:p-10 md:p-14 space-y-10">

<header className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
<div>
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">VERIFICATION SUMMARY RECORD</h1>
<p className="text-sm text-gray-500 mt-1.5">NMEX Verification &amp; Compliance Department</p>
</div>
<div className="shrink-0 rounded-lg border border-gray-200 bg-gray-50/50 p-4 text-xs w-full md:w-auto">
<div className="flex flex-col gap-2 text-gray-500">
<div className="flex justify-between gap-6">
<span>Reference Record:</span>
<span className="font-medium text-gray-900">Nmex-RA-72639-AX</span>
</div>
<div className="flex justify-between gap-6">
<span>Document Type:</span>
<span className="font-medium text-gray-900">Verification Review Summary</span>
</div>
</div>
</div>
</header>
<hr className="border-t border-gray-100"/>

<section className="space-y-5">
<h2 className="text-base font-semibold tracking-tight text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:car-linear" width="18"></iconify-icon>
                    Vehicle Information
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
<div>
<span className="block text-gray-500 mb-1 text-xs">Vehicle</span>
<span className="font-medium text-gray-900">2022 Chevrolet Silverado 1500 RST</span>
</div>
<div>
<span className="block text-gray-500 mb-1 text-xs">Color</span>
<span className="font-medium text-gray-900">Red</span>
</div>
<div>
<span className="block text-gray-500 mb-1 text-xs">VIN</span>
<span className="font-medium text-gray-900 tracking-wide">3GCPYBEK0NG123456</span>
</div>
</div>
</section>
<hr className="border-t border-gray-100"/>

<section className="space-y-5">
<h2 className="text-base font-semibold tracking-tight text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:buildings-linear" width="18"></iconify-icon>
                    Facility Location
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm bg-gray-50/80 p-5 rounded-lg ring-1 ring-inset ring-gray-200/50">
<div>
<span className="block text-gray-500 mb-1 text-xs">Facility</span>
<span className="font-medium text-gray-900">N.MEX Holding Facility</span>
</div>
<div>
<span className="block text-gray-500 mb-1 text-xs">Lot</span>
<span className="font-medium text-gray-900">410901</span>
</div>
<div>
<span className="block text-gray-500 mb-1 text-xs">Zone</span>
<span className="font-medium text-gray-900">5</span>
</div>
</div>
</section>
<hr className="border-t border-gray-100"/>

<section className="space-y-4 text-sm leading-relaxed text-gray-600">
<h2 className="text-base font-semibold tracking-tight text-gray-900 mb-5 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:document-text-linear" width="18"></iconify-icon>
                    Administrative Context
                </h2>
<p>This record has been prepared in relation to the vehicle file registered under the NMEX reference record <span className="font-medium text-gray-900">Nmex-RA-72639-AX</span>.</p>
<p>The purpose of this document is to summarize the verification procedures conducted in connection with the identification review of the individual presenting as the designated pickup agent associated with the vehicle record listed above.</p>
<p>NMEX regulated holding facilities operate under controlled access procedures designed to maintain accurate authorization records and facility access integrity. When a vehicle remains registered within a controlled holding facility pending release authorization, verification procedures may be conducted to confirm the identity of the individual designated to collect the vehicle.</p>
<p>The verification procedures summarized in this record were completed as part of the administrative review process prior to the release stage.</p>
</section>
<hr className="border-t border-gray-100"/>

<section className="space-y-6">
<h2 className="text-base font-semibold tracking-tight text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:clipboard-list-linear" width="18"></iconify-icon>
                    Verification Procedures Conducted
                </h2>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
<li className="flex items-start gap-3">
<div className="mt-0.5 text-gray-400 shrink-0">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<div className="text-sm">
<span className="block font-medium text-gray-900 mb-1">Verification Capture</span>
<span className="text-gray-500 leading-relaxed">A visual capture record documenting the individual presenting as the pickup agent.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-gray-400 shrink-0">
<iconify-icon icon="solar:fingerprint-linear" width="20"></iconify-icon>
</div>
<div className="text-sm">
<span className="block font-medium text-gray-900 mb-1">Thumbprint Verification</span>
<span className="text-gray-500 leading-relaxed">A biometric thumbprint reference recorded during the verification stage.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-gray-400 shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div className="text-sm">
<span className="block font-medium text-gray-900 mb-1">Confirmation of Information</span>
<span className="text-gray-500 leading-relaxed">Identification information reviewed against the existing vehicle file.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-gray-400 shrink-0">
<iconify-icon icon="solar:folder-open-linear" width="20"></iconify-icon>
</div>
<div className="text-sm">
<span className="block font-medium text-gray-900 mb-1">Administrative Record Review</span>
<span className="text-gray-500 leading-relaxed">Vehicle reference records reviewed for consistency with the registered file.</span>
</div>
</li>
</ul>
</section>
<hr className="border-t border-gray-100"/>

<section className="space-y-5">
<h2 className="text-base font-semibold tracking-tight text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:info-circle-linear" width="18"></iconify-icon>
                    Verification Status
                </h2>
<div className="bg-gray-50 text-gray-600 text-sm leading-relaxed p-5 rounded-lg ring-1 ring-inset ring-gray-200 border-l-4 border-l-gray-400">
                    Following completion of the above procedures, the verification record has been compiled and the capture documentation has been attached to this summary for confirmation review.
                </div>
</section>
<hr className="border-t border-gray-100"/>

<section className="space-y-5">
<h2 className="text-base font-semibold tracking-tight text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:user-id-linear" width="18"></iconify-icon>
                    Screening Record
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
<div>
<span className="block text-gray-500 mb-1.5 text-xs uppercase tracking-wider font-medium">Screening Conducted By</span>
<span className="font-medium text-gray-900">NMEX Verification &amp; Compliance Unit</span>
</div>
<div>
<span className="block text-gray-500 mb-1.5 text-xs uppercase tracking-wider font-medium">Screening Status</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                            Verification completed &amp; recorded
                        </span>
</div>
</div>
</section>
<hr className="border-t border-gray-100"/>

<section className="space-y-5 text-sm leading-relaxed">
<h2 className="text-base font-semibold tracking-tight text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:question-circle-linear" width="18"></iconify-icon>
                    Confirmation Request
                </h2>
<p>Kindly review the attached verification capture documentation and confirm whether the individual presented corresponds with the authorized pickup agent associated with the vehicle file referenced above.</p>
<p>Confirmation may be provided by replying with one of the following responses:</p>
<div className="mt-6 flex flex-col gap-3">
<div className="flex items-start sm:items-center gap-3 p-4 rounded-lg ring-1 ring-gray-200 bg-white">
<div className="mt-0.5 sm:mt-0 h-4 w-4 shrink-0 rounded-full border border-gray-300 flex items-center justify-center"></div>
<div className="flex flex-col sm:flex-row sm:gap-2">
<span className="font-medium text-gray-900">Confirmed</span>
<span className="text-gray-500 hidden sm:inline">–</span>
<span className="text-gray-500">Identity corresponds with the authorized pickup record</span>
</div>
</div>
<div className="flex items-start sm:items-center gap-3 p-4 rounded-lg ring-1 ring-gray-200 bg-white">
<div className="mt-0.5 sm:mt-0 h-4 w-4 shrink-0 rounded-full border border-gray-300 flex items-center justify-center"></div>
<div className="flex flex-col sm:flex-row sm:gap-2">
<span className="font-medium text-gray-900">Not Confirmed</span>
<span className="text-gray-500 hidden sm:inline">–</span>
<span className="text-gray-500">Identity does not correspond with the authorized pickup record</span>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
