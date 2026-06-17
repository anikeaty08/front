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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



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
      

<div className="relative transition-transform duration-700 ease-out transform rotate-x-6 scale-95 hover:scale-100 hover:rotate-x-0" style={{transformStyle: 'preserve-3d', transform: 'rotateX(2deg) scale(0.95)'}}>

<div className="relative bg-zinc-900 rounded-xl p-3 shadow-2xl ring-1 ring-white/10 w-[1200px] h-[750px] mx-auto flex flex-col">

<div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full ring-1 ring-zinc-700 z-50"></div>
<div className="absolute top-1.5 left-[calc(50%+8px)] w-0.5 h-0.5 bg-zinc-600 rounded-full z-50"></div>

<div className="relative flex-1 bg-zinc-800 overflow-hidden rounded-md matte-screen flex flex-col">


<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(to bottom right, #1e3a8a, #0f172a)'}}></div>

<div className="relative z-10 flex flex-col flex-1 mx-2 mt-2 mb-10 bg-gray-100 rounded-t-lg shadow-xl overflow-hidden border border-gray-700/30">

<div className="h-9 bg-gray-200 flex items-center px-2 space-x-2 border-b border-gray-300 select-none">

<div className="flex items-center space-x-1 flex-1 overflow-hidden">
<div className="bg-white px-3 py-1.5 rounded-t-md text-xs font-medium text-gray-700 flex items-center shadow-sm w-48 border-t border-x border-gray-300 relative top-1">
<iconify-icon className="mr-2 text-blue-600" icon="solar:shield-check-linear"></iconify-icon>
<span className="truncate">NMEX Verification Console</span>
<iconify-icon className="ml-auto text-gray-400 text-sm hover:text-gray-600" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-200/50 rounded-t-md cursor-default">
                                Compliance Logs
                            </div>
<iconify-icon className="text-gray-400 text-lg" icon="solar:add-circle-linear"></iconify-icon>
</div>

<div className="flex items-center space-x-4 px-2">
<div className="w-2.5 h-px bg-gray-500"></div>
<div className="w-2.5 h-2.5 border border-gray-500 rounded-sm"></div>
<iconify-icon className="text-gray-500 text-lg hover:text-red-500" icon="solar:close-square-linear"></iconify-icon>
</div>
</div>

<div className="h-10 bg-white border-b border-gray-200 flex items-center px-3 space-x-3">
<div className="flex items-center space-x-2 text-gray-400 text-lg">
<iconify-icon className="hover:text-gray-600" icon="solar:arrow-left-linear"></iconify-icon>
<iconify-icon className="hover:text-gray-600" icon="solar:arrow-right-linear"></iconify-icon>
<iconify-icon className="hover:text-gray-600 text-base" icon="solar:refresh-linear"></iconify-icon>
</div>
<div className="flex-1 bg-gray-100 rounded px-3 py-1.5 text-xs text-gray-600 flex items-center border border-transparent focus-within:border-blue-300 focus-within:bg-white transition-colors">
<iconify-icon className="mr-2 text-green-600 text-xs" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="text-gray-400 mr-0.5">nmex-internal://</span>verification/console/records/review
                        </div>
<div className="flex items-center space-x-3 text-gray-500">
<iconify-icon className="text-lg" icon="solar:user-circle-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 flex overflow-hidden bg-gray-50 font-sans">

<aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
<div className="h-14 flex items-center px-5 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded text-xs font-bold tracking-tighter">N</div>
<div className="flex flex-col">
<span className="text-xs font-semibold tracking-tight text-slate-800 uppercase leading-none">NMEX Global</span>
<span className="text-[0.6rem] text-slate-400 tracking-wide uppercase leading-none mt-0.5">Authority</span>
</div>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 space-y-0.5">
<a className="flex items-center px-5 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 group" href="#">
<iconify-icon className="mr-3 text-base text-gray-400 group-hover:text-gray-600" icon="solar:widget-2-linear"></iconify-icon>
                                    Dashboard
                                </a>
<a className="flex items-center px-5 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 group" href="#">
<iconify-icon className="mr-3 text-base text-gray-400 group-hover:text-gray-600" icon="solar:folder-with-files-linear"></iconify-icon>
                                    Registry Records
                                </a>
<a className="flex items-center px-5 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 group" href="#">
<iconify-icon className="mr-3 text-base text-gray-400 group-hover:text-gray-600" icon="solar:box-linear"></iconify-icon>
                                    Shipment Clearance
                                </a>

<a className="flex items-center px-5 py-2 text-xs font-medium text-blue-700 bg-blue-50 border-r-2 border-blue-600" href="#">
<iconify-icon className="mr-3 text-base text-blue-600" icon="solar:user-id-linear"></iconify-icon>
                                    Identity Verification
                                </a>
<a className="flex items-center px-5 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 group" href="#">
<iconify-icon className="mr-3 text-base text-gray-400 group-hover:text-gray-600" icon="solar:flag-linear"></iconify-icon>
                                    Compliance Flags
                                </a>
<a className="flex items-center px-5 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 group" href="#">
<iconify-icon className="mr-3 text-base text-gray-400 group-hover:text-gray-600" icon="solar:clipboard-list-linear"></iconify-icon>
                                    Audit Logs
                                </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-700">Officer K. Miller</span>
<span className="text-[0.6rem] text-gray-400">Logistics Div. 4</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-gray-50/50 p-8">

<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-xl font-medium tracking-tight text-gray-900">Client Registry Record — Clearance Review</h1>
<p className="text-xs text-gray-500 mt-1">Case #8992-A • Automated Pre-Screening • <span className="text-orange-600">Action Required</span></p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-medium text-gray-600 rounded shadow-sm hover:bg-gray-50">Escalate Case</button>
<button className="px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded shadow-sm hover:bg-slate-800">Save Progress</button>
</div>
</div>

<div className="grid grid-cols-12 gap-6">

<div className="col-span-4 space-y-4">

<div className="bg-white border border-gray-200 rounded shadow-sm p-4">
<div className="flex items-start justify-between mb-3">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Profile</h3>
<span className="inline-flex items-center rounded-full bg-orange-50 px-2 py-0.5 text-[0.6rem] font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20">Verification Required</span>
</div>
<div className="space-y-3">
<div>
<div className="text-[0.65rem] text-gray-400 uppercase tracking-wide">Legal Name</div>
<div className="text-sm text-gray-800 font-medium">Sharday Charley SW</div>
</div>
<div>
<div className="text-[0.65rem] text-gray-400 uppercase tracking-wide">Location</div>
<div className="text-sm text-gray-600">Albuquerque, New Mexico 87121</div>
</div>
<div>
<div className="text-[0.65rem] text-gray-400 uppercase tracking-wide">Reference ID</div>
<div className="text-sm text-gray-600 font-mono">MMX-REG-8829</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded shadow-sm p-4">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Shipment Record</h3>
<div className="space-y-3">
<div className="flex justify-between py-1 border-b border-gray-50 last:border-0">
<span className="text-xs text-gray-500">Package Category</span>
<span className="text-xs text-gray-800 font-medium">Registered Cargo</span>
</div>
<div className="flex justify-between py-1 border-b border-gray-50 last:border-0">
<span className="text-xs text-gray-500">Clearance Type</span>
<span className="text-xs text-gray-800 font-medium">Recipient Authorization</span>
</div>
<div className="flex justify-between py-1 border-b border-gray-50 last:border-0">
<span className="text-xs text-gray-500">Registry Stage</span>
<span className="text-xs text-yellow-600 font-medium">Pending Identity Confirmation</span>
</div>
</div>
</div>
</div>

<div className="col-span-8 space-y-4">

<div className="bg-white border border-gray-200 rounded shadow-sm p-0 overflow-hidden flex flex-col h-full">
<div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-gray-400 text-sm" icon="solar:card-id-linear"></iconify-icon>
                                                Identity Document Upload
                                            </h3>
<span className="text-[0.65rem] text-gray-400">Upload Time: 09:42:11 MST</span>
</div>
<div className="p-8 flex flex-col items-center justify-center bg-gray-50/50 relative">

<div className="relative w-80 h-48 rounded-lg shadow-md overflow-hidden border border-gray-200 transform rotate-1 transition-transform">

<div className="absolute inset-0 id-card-blur"></div>

<div className="absolute top-4 left-4 w-20 h-24 bg-gray-800/20 rounded opacity-50 blur-sm"></div> 
<div className="absolute top-4 right-4 w-40 h-4 bg-gray-800/10 rounded opacity-50 blur-sm"></div> 
<div className="absolute top-10 right-4 w-32 h-2 bg-gray-800/10 rounded opacity-50 blur-sm"></div>
<div className="absolute top-14 right-4 w-36 h-2 bg-gray-800/10 rounded opacity-50 blur-sm"></div>
<div className="absolute bottom-4 left-4 right-4 h-8 bg-white/20 blur-sm"></div>

<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="border-[3px] border-red-600 p-2 transform -rotate-12 stamp-box opacity-90 mix-blend-multiply bg-white/10 backdrop-blur-[1px]">
<span className="text-red-700 font-bold text-lg tracking-[0.2em] uppercase whitespace-nowrap">Identity Image Rejected</span>
</div>
</div>
</div>

<div className="mt-6 flex items-start gap-3 max-w-md bg-red-50 border border-red-100 p-3 rounded">
<iconify-icon className="text-red-600 text-lg flex-shrink-0 mt-0.5" icon="solar:danger-triangle-linear"></iconify-icon>
<div>
<h4 className="text-xs font-semibold text-red-800">Authentication Failure</h4>
<p className="text-xs text-red-700 mt-1 leading-relaxed">
                                                        The submitted identification image does not meet registry authenticity standards. Photographic copies are not accepted. Live verification required.
                                                    </p>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded shadow-sm p-4">
<div className="flex items-start gap-4">
<div className="p-2 bg-blue-50 rounded text-blue-600">
<iconify-icon className="text-xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-xs font-semibold text-gray-900">Biometric Registry Requirement</h3>
<p className="text-xs text-gray-500 mt-1 mb-3">To proceed with clearance, the recipient must complete biometric registry verification to link identity with shipment authorization.</p>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 border border-green-100 rounded text-xs text-green-700 font-medium">
<iconify-icon icon="solar:link-circle-linear"></iconify-icon>
                                                        Verification Link Generated
                                                    </div>
</div>
<div className="mt-3 pt-3 border-t border-gray-100">
<p className="text-[0.65rem] text-gray-400 uppercase tracking-wide mb-1">Officer Notes</p>
<p className="text-xs text-gray-500 italic">System flagged submission as non-physical ID capture. Automated verification required.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center text-[0.65rem] text-gray-400">
<div>NMEX Global Internal System v4.9.2</div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                                    Registry Sync: Awaiting Client Verification
                                </div>
</div>
</main>
</div>
</div>

<div className="h-10 bg-slate-900/95 backdrop-blur flex items-center justify-between px-3 z-50 border-t border-slate-700/50">
<div className="flex items-center gap-4 h-full">

<div className="text-blue-400 hover:text-blue-300 transition-colors">
<iconify-icon className="text-xl" icon="solar:windows-linear"></iconify-icon>
</div>

<div className="bg-slate-800/50 h-7 w-32 rounded-sm flex items-center px-2 text-slate-400 text-xs border-b-2 border-transparent hover:bg-slate-800 transition-colors">
<iconify-icon className="mr-2" icon="solar:magnifer-linear"></iconify-icon>
                            Search
                        </div>

<div className="flex items-center gap-1 h-full pt-1">
<div className="h-full px-2 flex items-center justify-center hover:bg-slate-800 rounded-sm group relative">
<iconify-icon className="text-slate-400 text-xl group-hover:text-white" icon="solar:folder-linear"></iconify-icon>
</div>
<div className="h-full px-2 flex items-center justify-center bg-slate-800/80 border-b-2 border-blue-400 rounded-sm">
<iconify-icon className="text-blue-400 text-xl" icon="solar:globe-linear"></iconify-icon>
</div>
<div className="h-full px-2 flex items-center justify-center hover:bg-slate-800 rounded-sm">
<iconify-icon className="text-slate-400 text-xl group-hover:text-white" icon="solar:document-text-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center gap-3 text-white text-xs">
<iconify-icon className="text-sm" icon="solar:wifi-square-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:volume-loud-linear"></iconify-icon>
<div className="flex flex-col items-end leading-none">
<span>09:44 AM</span>
<span className="text-[0.6rem] text-slate-400">10/24/2023</span>
</div>
<iconify-icon className="text-sm ml-1" icon="solar:bell-linear"></iconify-icon>
</div>
</div>
</div>

<div className="mt-0.5 h-3 bg-zinc-800 rounded-b-md mx-4 border-t border-black/50 shadow-inner opacity-80"></div>
</div>
</div>

    </>
  );
}
