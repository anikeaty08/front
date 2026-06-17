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
      

<nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="h-6 w-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-strokeWidth="2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<span className="text-sm font-semibold tracking-tighter text-zinc-900">TRACE</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Product</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Developers</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Log in</a>
<a className="text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-md hover:bg-zinc-800 transition-colors shadow-sm ring-1 ring-zinc-900/10" href="#">Track Shipment</a>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col sm:px-6 pt-12 pr-4 pb-24 pl-4 items-center">

<div className="w-full max-w-3xl text-center mb-12 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600">System Operational</span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
                Track your shipment<br className="hidden sm:block"/> in real-time.
            </h1>
<div className="relative max-w-lg mx-auto w-full group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<input className="block placeholder-zinc-400 focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-400 transition-all text-sm font-medium text-zinc-900 bg-white w-full border-zinc-200 border rounded-xl pt-3 pr-24 pb-3 pl-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]" placeholder="Tracking number (e.g. TRK-1234)" type="text" value="TRK-8492-ZLA-01"/>
<div className="absolute inset-y-1 right-1">
<button className="h-full px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-lg transition-colors shadow-sm flex items-center gap-2">
                        Track
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="w-full max-w-5xl bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-3">

<div className="col-span-1 lg:col-span-1 border-b lg:border-b-0 lg:border-r border-zinc-200 p-6 flex flex-col h-full">

<div className="mb-8">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:truck" data-strokeWidth="1.5" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
                            In Transit
                        </span>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Arriving Tomorrow</h2>
<p className="text-sm text-zinc-500 mt-1">Expected by 8:00 PM</p>
</div>

<div className="mb-8">
<div className="flex justify-between text-xs font-medium text-zinc-500 mb-2">
<span>San Francisco</span>
<span>New York</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-900 w-[75%] rounded-full"></div>
</div>
</div>

<div className="flex-grow relative">
<div className="absolute top-2 bottom-0 left-[15px] w-px bg-zinc-200"></div>
<ul className="space-y-8 relative">

<li className="relative flex gap-4">
<div className="relative z-10 flex-none h-8 w-8 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center">
<div className="h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse"></div>
</div>
<div className="pt-1">
<p className="text-sm font-medium text-zinc-900 leading-none">Departed Facility</p>
<p className="text-xs text-zinc-500 mt-1">Chicago, IL • 4:23 AM</p>
</div>
</li>

<li className="relative flex gap-4">
<div className="relative z-10 flex-none h-8 w-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check" data-strokeWidth="2" data-width="14" fill="none" height="14" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(161, 161, 170)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="pt-1">
<p className="text-sm text-zinc-600 leading-none">Arrived at Hub</p>
<p className="text-xs text-zinc-400 mt-1">Chicago, IL • Oct 24</p>
</div>
</li>

<li className="relative flex gap-4">
<div className="relative z-10 flex-none h-8 w-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:check" data-strokeWidth="2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="pt-1">
<p className="text-sm text-zinc-600 leading-none">Picked Up</p>
<p className="text-xs text-zinc-400 mt-1">San Francisco, CA • Oct 22</p>
</div>
</li>
</ul>
</div>

<div className="mt-8 pt-6 border-t border-zinc-100 flex items-center gap-3">
<div className="h-10 w-10 bg-zinc-50 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-900">
<span className="font-bold tracking-tighter text-xs">FDX</span>
</div>
<div className="">
<p className="text-sm font-medium text-zinc-900">FedEx Express</p>
<p className="text-xs text-zinc-500">Standard Overnight</p>
</div>
<button className="ml-auto text-zinc-400 hover:text-zinc-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:more-horizontal" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</button>
</div>
</div>

<div className="col-span-1 lg:col-span-2 relative bg-zinc-50 overflow-hidden min-h-[400px]">

<div className="absolute inset-0 bg-grid-pattern opacity-[0.6]"></div>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent pointer-events-none"></div>

<div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
<button className="h-8 w-8 bg-white border border-zinc-200 rounded-md shadow-sm flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-8 w-8 bg-white border border-zinc-200 rounded-md shadow-sm flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:minus" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur border border-zinc-200 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:map" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium text-zinc-700">Live View</span>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">


<path d="M100 250 C 150 250, 200 180, 300 160 C 400 140, 450 180, 500 150" stroke="#d4d4d8" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M100 250 C 150 250, 200 180, 300 160" stroke="#18181b" strokeWidth="2"></path>

<circle cx="100" cy="250" fill="white" r="4" stroke="#a1a1aa" strokeWidth="2"></circle>

<g>
<circle cx="300" cy="160" fill="#3b82f6" fillOpacity="0.2" r="16">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="6;20"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="1;0"></animate>
</circle>
<circle cx="300" cy="160" fill="#3b82f6" r="6" stroke="white" strokeWidth="2"></circle>
</g>

<circle cx="500" cy="150" fill="white" r="4" stroke="#18181b" strokeWidth="2"></circle>

<foreignobject height="50" width="120" x="260" y="100">
<div className="flex justify-center" xmlns="http://www.w3.org/1999/xhtml">
<div className="bg-zinc-900 text-white text-[10px] font-medium py-1 px-2 rounded shadow-lg transform translate-y-2">
                                    Chicago, IL
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-zinc-900"></div>
</div>
</div>
</foreignobject>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mt-6">
<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors cursor-pointer group">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 rounded-md bg-zinc-100 text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-medium text-zinc-900">Notifications</span>
</div>
<p className="text-xs text-zinc-500">Get updates via SMS or Email.</p>
<div className="mt-3 flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900 peer-checked:after:border-white"></div>
<span className="ml-2 text-xs font-medium text-zinc-600">On</span>
</label>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors cursor-pointer group">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 rounded-md bg-zinc-100 text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package-open" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"></path><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"></path><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z"></path></g></svg>
</div>
<span className="text-sm font-medium text-zinc-900">Delivery Instructions</span>
</div>
<p className="text-xs text-zinc-500">Leave at front door.</p>
<button className="mt-3 text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline">Edit instructions</button>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors cursor-pointer group">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 rounded-md bg-zinc-100 text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:headset" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></g></svg>
</div>
<span className="text-sm font-medium text-zinc-900">Support</span>
</div>
<p className="text-xs text-zinc-500">Report an issue with this package.</p>
<button className="mt-3 text-xs font-medium text-zinc-600 hover:text-zinc-900 flex items-center gap-1">
                    Contact Agent <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</main>

<footer className="border-t border-zinc-200 bg-white">
<div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="h-5 w-5 bg-zinc-200 rounded-md flex items-center justify-center text-zinc-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-strokeWidth="2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<span className="text-xs font-medium text-zinc-500">© 2024 Trace Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-zinc-400 hover:text-zinc-900" href="#">Terms</a>
<a className="text-xs text-zinc-400 hover:text-zinc-900" href="#">Privacy</a>
<a className="text-xs text-zinc-400 hover:text-zinc-900" href="#">Cookies</a>
</div>
</div>
</footer>

    </>
  );
}
