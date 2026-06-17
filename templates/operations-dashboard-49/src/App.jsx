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
      

<div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 transition-opacity"></div>

<div className="bg-white rounded-xl shadow-2xl shadow-gray-200/50 border border-gray-200 w-full max-w-lg mx-auto z-50 overflow-hidden flex flex-col relative">

<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 shadow-sm">
<iconify-icon className="text-lg" icon="solar:bus-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Associate a Merchant Order</h2>
</div>
<button className="text-gray-400 hover:text-gray-900 transition-colors p-1 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200">
<iconify-icon className="text-xl" icon="solar:close-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="px-6 py-6 flex flex-col gap-5">

<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-gray-700">Enter Shein / Temu / Alibaba Order Number</label>
<input className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm" placeholder="Ex: SHEIN-123456789" type="text"/>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-gray-700">Select Related KOLI Orders</label>

<div className="w-full bg-gray-50/50 border border-gray-200 rounded-lg p-1.5 h-40 overflow-y-auto custom-scrollbar shadow-inner">
<div className="flex flex-col gap-1">

<div className="flex items-center gap-3 px-3 py-2 bg-blue-50/80 border border-blue-200/60 rounded-md cursor-pointer transition-colors">
<iconify-icon className="text-blue-600 text-base shrink-0" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-blue-900 tracking-tight">KOLI-8942 - Marie D. <span className="text-blue-600/70 font-normal">(3 Items)</span></span>
</div>

<div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer border border-transparent transition-colors">
<iconify-icon className="text-gray-400 text-base shrink-0" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-gray-700 tracking-tight">KOLI-8901 - Jean K. <span className="text-gray-400 font-normal">(1 Item)</span></span>
</div>
<div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer border border-transparent transition-colors">
<iconify-icon className="text-gray-400 text-base shrink-0" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-gray-700 tracking-tight">KOLI-8888 - Alice W. <span className="text-gray-400 font-normal">(3 Items)</span></span>
</div>
</div>
</div>

<p className="text-xs text-gray-400 mt-0.5">Hold Ctrl (Cmd) to select multiple</p>
</div>

<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 border border-transparent rounded-lg text-sm text-white shadow-sm shadow-blue-600/20 transition-all font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1 mt-1">
<iconify-icon className="text-lg text-blue-100" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
                Link Orders
            </button>
</div>

<div className="h-px w-full bg-gray-100"></div>

<div className="px-6 py-6 bg-gray-50/30 flex flex-col gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-gray-700">Search by Merchant Number <span className="text-gray-400 font-normal">(Cameroon Dispatch)</span></label>
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon className="text-base" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full pl-9 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all shadow-sm" placeholder="Enter a Shein Number..." type="text"/>
</div>

<button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-900 border border-transparent rounded-lg text-sm text-white shadow-sm transition-all font-medium focus:outline-none focus:ring-2 focus:ring-slate-800/50 focus:ring-offset-1 shrink-0">
<iconify-icon className="text-lg text-slate-300" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
                        View Details
                    </button>
</div>
</div>

<div className="flex items-start gap-2.5 px-4 py-3 bg-gray-100/80 border border-gray-200/60 rounded-lg text-sm text-gray-500">
<iconify-icon className="text-lg text-gray-400 shrink-0 mt-px" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="leading-relaxed">Enter a Number</p>
</div>
</div>
</div>

    </>
  );
}
