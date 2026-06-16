import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
}
}
}
}



        // Set today's date automatically
        const dateElement = document.getElementById('current-date');
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="print-container relative w-full max-w-3xl bg-white shadow-sm border border-gray-200 mx-auto overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
<h1 className="text-9xl font-bold text-gray-900 select-none tracking-tighter" style={{opacity: '0.05', fontSize: '15rem', transform: 'rotate(-15deg)'}}>NMEX</h1>
</div>

<div className="relative z-10 p-8 md:p-12 flex flex-col gap-8 h-full">

<header className="flex justify-between items-start border-b border-gray-100 pb-8">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-gray-900">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter">NMEX</span>
</div>
<span className="text-xs text-gray-400 font-mono tracking-wide">DOC-REL-2024-AUTH</span>
</div>
<div className="text-right">
<h1 className="text-xl font-medium tracking-tight text-gray-900">Vehicle Release Authorization</h1>
<p className="text-xs text-gray-500 mt-1">Official Verification Document</p>
</div>
</header>

<section className="bg-gray-50/50 border border-gray-100 p-6 rounded-sm">
<div className="flex gap-4">
<iconify-icon className="text-gray-400 shrink-0 mt-0.5" height="20" icon="solar:info-circle-linear" width="20"></iconify-icon>
<p className="text-sm text-gray-600 leading-relaxed text-justify">
                        The vehicle identified in this document has successfully completed the NMEX review and verification process. Authorization for release is hereby granted. This authorization is valid only upon presentation of this physical document together with the verified release PIN provided below.
                    </p>
</div>
</section>

<section>
<div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
<iconify-icon className="text-gray-400" height="18" icon="solar:car-linear" width="18"></iconify-icon>
<h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">Vehicle Information</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-400 uppercase tracking-wide">Vehicle Make</span>
<span className="text-base font-medium text-gray-900">Chevrolet</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-400 uppercase tracking-wide">Vehicle Model</span>
<span className="text-base font-medium text-gray-900">Silverado 1500 RST</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-400 uppercase tracking-wide">Vehicle Year</span>
<span className="text-base font-medium text-gray-900">2022</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-400 uppercase tracking-wide">Vehicle Identification Number (VIN)</span>
<span className="text-base font-medium text-gray-900 font-mono tracking-tight">3GCPYBEK0NG123456</span>
</div>
</div>
</section>

<section className="mt-4">
<div className="border border-gray-200 rounded-sm p-6 flex flex-col md:flex-row gap-8 items-center justify-between">
<div className="w-full md:w-2/3">
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-tight mb-6">Authorized Release PIN</h3>

<div className="relative w-full">
<div className="w-full border-b-2 border-gray-200 h-8"></div>
<p className="text-xs text-gray-400 mt-2 italic">Enter 6-digit verified PIN manually above</p>
</div>
</div>

<div className="flex flex-col items-center gap-2 shrink-0 border-l border-gray-100 pl-0 md:pl-8 w-full md:w-auto">
<div className="w-24 h-24 bg-gray-900 flex items-center justify-center text-white">

<div className="grid grid-cols-4 gap-1 p-2 w-full h-full opacity-90">
<div className="bg-white col-span-2 row-span-2"></div>
<div className="bg-white"></div>
<div className="bg-white"></div>
<div className="bg-white"></div>
<div className="bg-white col-span-2 row-span-2 col-start-3 row-start-3"></div>
<div className="bg-white row-start-3"></div>
<div className="bg-white row-start-4"></div>
</div>
</div>
<span className="text-xs font-medium text-gray-500">Scan to view PIN</span>
</div>
</div>
</section>

<section className="mt-8 pt-8 border-t border-gray-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="flex flex-col">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Authorized NMEX Release Officer</span>

<div className="h-16 flex items-end pb-2">
<span className="signature-font text-3xl text-gray-800 transform -rotate-2">Jonathan Sterling</span>
</div>
<div className="border-t border-gray-300 w-full mb-2"></div>
<span className="text-sm font-medium text-gray-900">Jonathan A. Sterling</span>
<span className="text-xs text-gray-500 mt-0.5">Senior Verification Director</span>
<span className="text-xs text-gray-500 mt-2" id="current-date"></span>
</div>

<div className="flex flex-col">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Vehicle Owner Authorization</span>

<div className="h-16 flex items-end">

</div>
<div className="border-t border-gray-300 w-full mb-2"></div>
<span className="text-xs text-gray-400 mb-6">Signature</span>

<div className="border-b border-gray-200 w-full h-8 mb-1"></div>
<span className="text-xs text-gray-400 mb-6">Name</span>

<div className="border-b border-gray-200 w-full h-8 mb-1"></div>
<span className="text-xs text-gray-400">Date</span>
</div>
</div>
</section>

<footer className="mt-auto pt-8 flex justify-between items-end">
<div className="flex items-center gap-1 text-gray-300">
<iconify-icon icon="solar:copyright-linear" width="12"></iconify-icon>
<span className="text-xs tracking-tight">NMEX Verification Services</span>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-gray-200"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-400"></div>
</div>
</footer>
</div>
</div>


    </>
  );
}
