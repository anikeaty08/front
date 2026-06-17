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
      

<div className="w-full max-w-5xl flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-medium tracking-tighter">
                PR
            </div>
<h1 className="text-xl md:text-2xl font-medium tracking-tight">Products Data</h1>
</div>
</div>

<section className="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">

<div className="border-b border-gray-200 bg-gray-50/50 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-lg font-medium tracking-tight">Import Products</h2>
<p className="text-sm text-gray-500 mt-1">Map your file columns to system fields.</p>
</div>

<nav className="flex items-center gap-2 text-sm">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="hidden sm:inline">Upload</span>
</div>
<div className="w-4 h-[1px] bg-gray-300"></div>
<div className="flex items-center gap-2 text-gray-900 font-medium">
<span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">2</span>
<span>Map Fields</span>
</div>
<div className="w-4 h-[1px] bg-gray-300"></div>
<div className="flex items-center gap-2 text-gray-400">
<span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs">3</span>
<span className="hidden sm:inline">Review</span>
</div>
</nav>
</div>

<div className="px-6 py-3 bg-white border-b border-gray-100 flex items-center justify-between text-sm">
<div className="flex items-center gap-3 text-gray-600">
<iconify-icon className="text-gray-400 text-lg" icon="solar:document-text-linear"></iconify-icon>
<span>Source: <span className="font-medium text-gray-900">inventory_update_v2.csv</span></span>
</div>
<button className="text-gray-500 hover:text-black transition-colors flex items-center gap-1">
<iconify-icon icon="solar:pen-linear"></iconify-icon> Change file
            </button>
</div>

<div className="flex-1 overflow-x-auto">
<div className="min-w-[800px] px-6 py-4">

<div className="grid grid-cols-12 gap-4 pb-3 border-b border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider">
<div className="col-span-4 flex items-center gap-2">File Column</div>
<div className="col-span-4">Sample Data</div>
<div className="col-span-4">Maps To</div>
</div>

<div className="flex flex-col gap-2 mt-3">

<div className="grid grid-cols-12 gap-4 items-center py-2 group hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
<div className="col-span-4 flex items-center gap-2 text-sm font-medium text-gray-900">
<iconify-icon className="text-gray-400" icon="solar:key-minimalistic-linear"></iconify-icon>
                            SKU
                        </div>
<div className="col-span-4 text-sm text-gray-500 truncate font-mono text-xs">
                            PROD-A-001, PROD-B-002...
                        </div>
<div className="col-span-4 relative">
<div className="w-full flex items-center justify-between border border-green-200 bg-green-50/50 rounded-lg px-3 py-2 text-sm text-green-800">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                                    SKU (Required)
                                </div>
<iconify-icon className="text-green-600/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-4 items-center py-2 group hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
<div className="col-span-4 flex items-center gap-2 text-sm font-medium text-gray-900">
<iconify-icon className="text-gray-400" icon="solar:text-field-linear"></iconify-icon>
                            Item Title
                        </div>
<div className="col-span-4 text-sm text-gray-500 truncate">
                            Wireless Headphones Black...
                        </div>
<div className="col-span-4 relative">
<div className="w-full flex items-center justify-between border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm text-gray-900 shadow-sm cursor-pointer hover:border-gray-300">
<span>Product Name</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-4 items-start py-2 group rounded-lg px-2 -mx-2">
<div className="col-span-4 flex items-center gap-2 text-sm font-medium text-gray-900 pt-2">
<iconify-icon className="text-gray-400" icon="solar:wad-of-money-linear"></iconify-icon>
                            Purchase Cost
                        </div>
<div className="col-span-4 text-sm text-gray-500 truncate pt-2">
                            12.50, 15.00, 8.99...
                        </div>
<div className="col-span-4 relative z-10">

<div className="w-full flex items-center justify-between border border-blue-500 ring-1 ring-blue-500/20 bg-white rounded-lg px-3 py-2 text-sm text-gray-900 shadow-sm cursor-pointer">
<span>Select field...</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>

<div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-md py-1 overflow-hidden z-20">
<div className="px-2 pb-1 border-b border-gray-100">
<input className="w-full text-sm py-1.5 px-2 outline-none placeholder-gray-400" placeholder="Search fields..." type="text"/>
</div>
<div className="max-h-40 overflow-y-auto custom-scrollbar">
<div className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Sale Price</div>
<div className="px-3 py-2 text-sm text-gray-900 bg-blue-50 flex items-center justify-between cursor-pointer">
                                        Cost Price <iconify-icon className="text-blue-600" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Compare at Price</div>
<div className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Tax Rate</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-4 items-center py-2 group hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
<div className="col-span-4 flex items-center gap-2 text-sm font-medium text-gray-900 opacity-60">
<iconify-icon className="text-gray-400" icon="solar:notes-linear"></iconify-icon>
                            Internal Notes
                        </div>
<div className="col-span-4 text-sm text-gray-400 truncate">
                            Legacy ID 8472, N/A...
                        </div>
<div className="col-span-4 relative">
<div className="w-full flex items-center justify-between border border-transparent bg-gray-100/50 rounded-lg px-3 py-2 text-sm text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors">
<span>Ignore column</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-200 bg-gray-50/50 px-6 py-4 flex items-center justify-between">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Cancel
            </button>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                    Back
                </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-black border border-black rounded-lg hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-2">
                    Continue to Review
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<div className="w-full max-w-5xl flex flex-col gap-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest pl-2">Background Job State</span>
<section className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col gap-4 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
<div className="flex items-start justify-between relative z-10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon className="text-xl animate-spin" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Importing Products</h3>
<p className="text-xs text-gray-500 mt-0.5">Creating new records and updating existing inventory...</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-gray-900">68%</span>
<p className="text-xs text-gray-500 mt-0.5">~1m 12s remaining</p>
</div>
</div>

<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden relative z-10">
<div className="h-full bg-black rounded-full transition-all duration-500 ease-out" style={{width: '68%'}}></div>
</div>
<div className="flex justify-between items-center text-xs text-gray-500 relative z-10">
<span>Processing row 3,400 of 5,000</span>
<button className="text-red-600 hover:text-red-700 font-medium">Cancel Import</button>
</div>
</section>
</div>

<div className="w-full max-w-5xl flex flex-col gap-2 mt-8">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest pl-2">Export Configuration</span>
<section className="w-full md:w-[480px] bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
<div className="p-5 border-b border-gray-200">
<h3 className="text-lg font-medium tracking-tight">Export Products</h3>
<p className="text-sm text-gray-500 mt-1">Select and reorder fields for your CSV export.</p>
</div>

<div className="p-5 flex flex-col gap-4">

<div className="flex items-center justify-between">
<span className="text-sm font-medium text-gray-700">Format</span>
<div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200">
<button className="px-3 py-1 text-xs font-medium bg-white shadow-sm rounded-md text-gray-900">CSV</button>
<button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900">Excel</button>
</div>
</div>
<div className="w-full h-[1px] bg-gray-100"></div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-gray-700">Fields</span>
<div className="flex gap-3 text-xs">
<button className="text-blue-600 font-medium hover:underline">Select Visible Only</button>
<span className="text-gray-300">|</span>
<button className="text-gray-500 hover:text-gray-900">Clear All</button>
</div>
</div>

<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all placeholder-gray-400 shadow-sm" placeholder="Search fields..." type="text"/>
</div>

<div className="flex flex-col gap-2 max-h-60 overflow-y-auto custom-scrollbar pr-2 mt-2">

<div className="flex items-center justify-between group p-2 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-colors cursor-grab active:cursor-grabbing">
<label className="flex items-center gap-3 cursor-pointer flex-1">
<div className="relative flex items-center justify-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-black peer-checked:border-black transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-900 font-medium">SKU</span>
</label>
<iconify-icon className="text-gray-300 group-hover:text-gray-500" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="flex items-center justify-between group p-2 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-colors cursor-grab active:cursor-grabbing">
<label className="flex items-center gap-3 cursor-pointer flex-1">
<div className="relative flex items-center justify-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-black peer-checked:border-black transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-900 font-medium">Product Title</span>
</label>
<iconify-icon className="text-gray-300 group-hover:text-gray-500" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="flex items-center justify-between group p-2 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-colors cursor-grab active:cursor-grabbing">
<label className="flex items-center gap-3 cursor-pointer flex-1">
<div className="relative flex items-center justify-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-black peer-checked:border-black transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-900 font-medium">Available Quantity</span>
</label>
<iconify-icon className="text-gray-300 group-hover:text-gray-500" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="flex items-center justify-between group p-2 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-colors cursor-grab active:cursor-grabbing">
<label className="flex items-center gap-3 cursor-pointer flex-1">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-black peer-checked:border-black transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Cost Price</span>
</label>
<iconify-icon className="text-gray-300 group-hover:text-gray-500" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="flex items-center justify-between group p-2 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-colors cursor-grab active:cursor-grabbing">
<label className="flex items-center gap-3 cursor-pointer flex-1">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-black peer-checked:border-black transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Vendor</span>
</label>
<iconify-icon className="text-gray-300 group-hover:text-gray-500" icon="solar:menu-dots-linear"></iconify-icon>
</div>
</div>
</div>

<div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400 text-lg" icon="solar:cloud-file-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Export to Google Sheets</span>
<span className="text-xs text-gray-500">Connect account to export directly</span>
</div>
</div>
<button className="text-xs font-medium text-black border border-gray-300 bg-white rounded-md px-3 py-1.5 shadow-sm hover:bg-gray-50 transition-colors">
                        Connect
                    </button>
</div>
</div>

<div className="p-5 border-t border-gray-200 bg-gray-50/50 flex justify-end gap-3 rounded-b-2xl">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-black border border-black rounded-lg hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:export-linear"></iconify-icon>
                    Generate Export
                </button>
</div>
</section>
</div>
<style>
        @keyframes shimmer {
            100% {
                transform: translateX(100%);
            }
        }
    </style>

    </>
  );
}
