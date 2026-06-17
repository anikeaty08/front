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
      

<div className="bg-white w-full h-[100dvh] sm:h-[932px] max-w-[430px] relative flex flex-col sm:rounded-[40px] sm:shadow-2xl overflow-hidden sm:border-[8px] sm:border-gray-900 ring-1 ring-gray-100">

<div className="h-12 w-full flex justify-between items-center px-6 pt-2 shrink-0">
<span className="text-sm font-medium text-gray-900 tracking-tight">9:41</span>
<div className="flex items-center gap-1.5 text-gray-900">
<iconify-icon className="text-sm" icon="solar:cellular-line-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wi-fi-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-between px-4 py-3 shrink-0">
<button className="text-base font-medium text-purple-600 hover:text-purple-700 transition-colors">
                Cancel
            </button>
<h1 className="text-lg font-semibold text-gray-900 tracking-tight">
                New Group
            </h1>
<button className="text-base font-medium text-purple-300 cursor-not-allowed">
                Create
            </button>
</div>

<div className="flex items-center gap-4 px-4 py-5 border-b border-gray-100 shrink-0">
<button className="w-[60px] h-[60px] rounded-full bg-gray-50 border border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors shrink-0">
<iconify-icon className="text-xl mb-0.5" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex-1">
<input className="w-full text-base font-medium text-gray-900 placeholder-gray-400 bg-transparent border-none focus:ring-0 p-0" placeholder="Group Name (e.g., Family)" type="text"/>
</div>
</div>

<div className="flex flex-col flex-1 overflow-hidden">

<div className="px-4 py-4 shrink-0">
<div className="bg-gray-100/80 rounded-2xl flex items-center px-3.5 py-2.5 gap-2.5">
<iconify-icon className="text-lg text-gray-500 shrink-0" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent border-none focus:ring-0 text-sm text-gray-900 placeholder-gray-500 p-0" placeholder="Search by name or number" type="text"/>
</div>
</div>

<div className="px-4 pb-4 flex gap-3 overflow-x-auto no-scrollbar shrink-0 border-b border-gray-50">

<div className="relative shrink-0 flex flex-col items-center gap-1">
<div className="relative w-[52px] h-[52px]">
<img alt="Sarah" className="w-full h-full rounded-full object-cover ring-2 ring-white" src="https://i.pravatar.cc/150?img=47"/>
<button className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center text-white ring-2 ring-white hover:bg-gray-900">
<iconify-icon className="text-xs" icon="solar:close-linear"></iconify-icon>
</button>
</div>
<span className="text-xs font-medium text-gray-600 truncate w-12 text-center">Sarah</span>
</div>

<div className="relative shrink-0 flex flex-col items-center gap-1">
<div className="relative w-[52px] h-[52px]">
<img alt="Michael" className="w-full h-full rounded-full object-cover ring-2 ring-white" src="https://i.pravatar.cc/150?img=11"/>
<button className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center text-white ring-2 ring-white hover:bg-gray-900">
<iconify-icon className="text-xs" icon="solar:close-linear"></iconify-icon>
</button>
</div>
<span className="text-xs font-medium text-gray-600 truncate w-12 text-center">Michael</span>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-12">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-4 mb-3 px-1">Suggested Contacts</h2>
<div className="flex flex-col">

<label className="flex items-center justify-between py-3.5 px-1 cursor-pointer group active:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3.5">
<img alt="Alex Rivera" className="w-[46px] h-[46px] rounded-full object-cover bg-gray-100" src="https://i.pravatar.cc/150?img=68"/>
<div>
<p className="text-base font-medium text-gray-900">Alex Rivera</p>
<p className="text-xs text-gray-500 mt-0.5">Mobile</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border-[1.5px] border-gray-300 flex items-center justify-center group-hover:border-purple-300 transition-colors"></div>
</label>

<label className="flex items-center justify-between py-3.5 px-1 cursor-pointer group active:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3.5">
<img alt="Sarah Chen" className="w-[46px] h-[46px] rounded-full object-cover bg-gray-100" src="https://i.pravatar.cc/150?img=47"/>
<div>
<p className="text-base font-medium text-gray-900">Sarah Chen</p>
<p className="text-xs text-gray-500 mt-0.5">Koli App</p>
</div>
</div>
<div className="w-6 h-6 rounded-full bg-purple-600 border border-purple-600 flex items-center justify-center shadow-sm">
<iconify-icon className="text-white text-sm" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
</label>

<label className="flex items-center justify-between py-3.5 px-1 cursor-pointer group active:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3.5">
<div className="w-[46px] h-[46px] rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-lg font-medium">
                                D
                            </div>
<div>
<p className="text-base font-medium text-gray-900">David Kim</p>
<p className="text-xs text-gray-500 mt-0.5">Mobile</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border-[1.5px] border-gray-300 flex items-center justify-center group-hover:border-purple-300 transition-colors"></div>
</label>

<label className="flex items-center justify-between py-3.5 px-1 cursor-pointer group active:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3.5">
<img alt="Michael Scott" className="w-[46px] h-[46px] rounded-full object-cover bg-gray-100" src="https://i.pravatar.cc/150?img=11"/>
<div>
<p className="text-base font-medium text-gray-900">Michael Scott</p>
<p className="text-xs text-gray-500 mt-0.5">Work</p>
</div>
</div>
<div className="w-6 h-6 rounded-full bg-purple-600 border border-purple-600 flex items-center justify-center shadow-sm">
<iconify-icon className="text-white text-sm" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
</label>

<label className="flex items-center justify-between py-3.5 px-1 cursor-pointer group active:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3.5">
<img alt="Emma Wilson" className="w-[46px] h-[46px] rounded-full object-cover bg-gray-100" src="https://i.pravatar.cc/150?img=32"/>
<div>
<p className="text-base font-medium text-gray-900">Emma Wilson</p>
<p className="text-xs text-gray-500 mt-0.5">Koli App</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border-[1.5px] border-gray-300 flex items-center justify-center group-hover:border-purple-300 transition-colors"></div>
</label>
</div>
</div>

<div className="h-[34px] w-full flex items-center justify-center shrink-0 bg-white">
<div className="w-[134px] h-[5px] bg-gray-900 rounded-full"></div>
</div>
</div>
</div>

    </>
  );
}
