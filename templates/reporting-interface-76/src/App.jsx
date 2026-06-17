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



        // Initialize Lucide icons with 1.5 stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40"></div>

<div className="bg-white rounded-2xl shadow-2xl w-full max-w-[56rem] max-h-[90vh] flex flex-col z-50 relative overflow-hidden">

<div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between bg-white/80 backdrop-blur-md z-10 sticky top-0">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Add Test Type Report</h2>
<button className="text-gray-400 hover:text-gray-700 transition-colors p-2 -mr-2 rounded-lg hover:bg-gray-100" type="button">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>

<div className="p-8 overflow-y-auto no-scrollbar flex flex-col gap-10">

<div className="flex flex-col gap-3">
<label className="text-base font-medium text-gray-800">Reports Schedule</label>
<div className="flex flex-wrap items-center gap-6">
<label className="flex items-center gap-2.5 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer sr-only" name="schedule" type="radio"/>
<div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-gray-400 peer-checked:border-gray-900 peer-checked:border-[6px] transition-all bg-white"></div>
</div>
<span className="text-base text-gray-600 group-hover:text-gray-900 select-none">Monthly</span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer sr-only" name="schedule" type="radio"/>
<div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-gray-400 peer-checked:border-gray-900 peer-checked:border-[6px] transition-all bg-white"></div>
</div>
<span className="text-base text-gray-600 group-hover:text-gray-900 select-none">Weekly</span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer sr-only" name="schedule" type="radio"/>
<div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-gray-400 peer-checked:border-gray-900 peer-checked:border-[6px] transition-all bg-white"></div>
</div>
<span className="text-base text-gray-600 group-hover:text-gray-900 select-none">Daily</span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5">
<input checked="" className="peer sr-only" name="schedule" type="radio"/>
<div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-gray-400 peer-checked:border-emerald-600 peer-checked:border-[6px] transition-all bg-white"></div>
</div>
<span className="text-base font-medium text-gray-900 select-none">Quarterly</span>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">

<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-800">Start Date <span className="text-red-500">*</span></label>
<div className="relative">
<input className="w-full rounded-xl border-0 py-3 pl-4 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 text-base sm:leading-6 transition-all bg-gray-50/50 hover:bg-gray-50" placeholder="Select Start Date" type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<i className="h-5 w-5 text-gray-400" data-lucide="calendar"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-800">End Date</label>
<div className="relative">
<input className="w-full rounded-xl border-0 py-3 pl-4 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 text-base sm:leading-6 transition-all bg-gray-50/50 hover:bg-gray-50" placeholder="Select End Date" type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<i className="h-5 w-5 text-gray-400" data-lucide="calendar"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-800">Time <span className="text-red-500">*</span></label>
<div className="relative">
<input className="w-full rounded-xl border-0 py-3 pl-4 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 text-base sm:leading-6 transition-all bg-gray-50/50 hover:bg-gray-50" placeholder="Select Time" type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<i className="h-5 w-5 text-gray-400" data-lucide="clock"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-2 md:col-span-1">
<label className="text-base font-medium text-gray-800">Timezone <span className="text-red-500">*</span></label>
<div className="relative cursor-pointer">
<div className="w-full rounded-xl border-0 py-3 pl-4 pr-10 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-200 bg-gray-50/50 hover:bg-gray-50 text-base sm:leading-6 transition-all flex items-center">
                            Select Timezone
                        </div>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<i className="h-5 w-5 text-gray-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-2 md:col-span-2">
<label className="text-base font-medium text-gray-800">Export Format <span className="text-red-500">*</span></label>
<div className="relative cursor-pointer">
<div className="w-full rounded-xl border-0 py-2 pl-2 pr-10 min-h-[50px] shadow-sm ring-1 ring-inset ring-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all flex items-center gap-2">

<span className="inline-flex items-center gap-x-1.5 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 shadow-sm">
                                HTML
                                <button className="group -mr-1 h-4 w-4 rounded-full hover:bg-gray-100 flex items-center justify-center" type="button">
<i className="h-3 w-3 text-gray-400 group-hover:text-gray-600" data-lucide="x"></i>
</button>
</span>
</div>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<i className="h-5 w-5 text-gray-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6 flex flex-col gap-5">
<div className="flex items-baseline justify-between">
<h3 className="text-base font-medium text-emerald-900">Quarterly Settings <span className="text-red-500">*</span></h3>
<span className="text-sm text-gray-500">Quarters:</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<label className="relative flex cursor-pointer rounded-xl bg-white p-4 shadow-sm ring-1 ring-inset ring-gray-200 focus:outline-none has-[:checked]:ring-2 has-[:checked]:ring-inset has-[:checked]:ring-emerald-500 transition-all hover:ring-gray-300">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="flex w-full flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-base font-medium text-gray-900">Q1</span>
<i className="h-5 w-5 text-emerald-500 opacity-0 peer-checked:opacity-100 transition-opacity fill-emerald-50" data-lucide="check-circle-2"></i>
</div>
<span className="text-sm text-gray-500">Jan - Mar</span>
</div>
</label>

<label className="relative flex cursor-pointer rounded-xl bg-white p-4 shadow-sm ring-1 ring-inset ring-gray-200 focus:outline-none has-[:checked]:ring-2 has-[:checked]:ring-inset has-[:checked]:ring-emerald-500 transition-all hover:ring-gray-300">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="flex w-full flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-base font-medium text-gray-900">Q2</span>
<i className="h-5 w-5 text-emerald-500 opacity-0 peer-checked:opacity-100 transition-opacity fill-emerald-50" data-lucide="check-circle-2"></i>
</div>
<span className="text-sm text-gray-500">Apr - Jun</span>
</div>
</label>

<label className="relative flex cursor-pointer rounded-xl bg-white p-4 shadow-sm ring-1 ring-inset ring-gray-200 focus:outline-none has-[:checked]:ring-2 has-[:checked]:ring-inset has-[:checked]:ring-emerald-500 transition-all hover:ring-gray-300">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="flex w-full flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-base font-medium text-gray-900">Q3</span>
<i className="h-5 w-5 text-emerald-500 opacity-0 peer-checked:opacity-100 transition-opacity fill-emerald-50" data-lucide="check-circle-2"></i>
</div>
<span className="text-sm text-gray-500">Jul - Sep</span>
</div>
</label>

<label className="relative flex cursor-pointer rounded-xl bg-white p-4 shadow-sm ring-1 ring-inset ring-gray-200 focus:outline-none has-[:checked]:ring-2 has-[:checked]:ring-inset has-[:checked]:ring-emerald-500 transition-all hover:ring-gray-300">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="flex w-full flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-base font-medium text-gray-900">Q4</span>
<i className="h-5 w-5 text-emerald-500 opacity-0 peer-checked:opacity-100 transition-opacity fill-emerald-50" data-lucide="check-circle-2"></i>
</div>
<span className="text-sm text-gray-500">Oct - Dec</span>
</div>
</label>
</div>
<div className="flex items-start gap-3 mt-1 bg-emerald-50/50 p-3 rounded-lg text-emerald-800">
<i className="h-5 w-5 shrink-0 mt-0.5" data-lucide="info"></i>
<p className="text-base leading-relaxed">Reports will be generated after the selected quarter ends and delivered on the first day of the next quarter.</p>
</div>
</div>

<div className="w-full h-px bg-gray-100"></div>

<div className="flex flex-col gap-6">
<h3 className="text-base font-medium text-gray-900">Email Recipients :</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col gap-2">
<div className="flex items-center gap-1.5">
<label className="text-base font-medium text-gray-800">To <span className="text-red-500">*</span></label>
<i className="h-4 w-4 text-gray-400 cursor-help hover:text-gray-600" data-lucide="info"></i>
</div>
<textarea className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 text-base sm:leading-6 resize-none bg-gray-50/50 hover:bg-gray-50 transition-all" placeholder="email@address.com" rows="3"></textarea>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center gap-1.5">
<label className="text-base font-medium text-gray-800">CC</label>
<i className="h-4 w-4 text-gray-400 cursor-help hover:text-gray-600" data-lucide="info"></i>
</div>
<textarea className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 text-base sm:leading-6 resize-none bg-gray-50/50 hover:bg-gray-50 transition-all" placeholder="email@address.com" rows="3"></textarea>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center gap-1.5">
<label className="text-base font-medium text-gray-800">BCC</label>
<i className="h-4 w-4 text-gray-400 cursor-help hover:text-gray-600" data-lucide="info"></i>
</div>
<textarea className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 text-base sm:leading-6 resize-none bg-gray-50/50 hover:bg-gray-50 transition-all" placeholder="email@address.com" rows="3"></textarea>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-800">Subject</label>
<input className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 text-base sm:leading-6 bg-gray-50/50 hover:bg-gray-50 transition-all" placeholder="Enter Subject" type="text"/>
</div>

<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-800">Body</label>
<div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-transparent transition-all">

<div className="bg-gray-50/80 border-b border-gray-200 p-2 flex flex-wrap gap-1 items-center">

<div className="flex items-center gap-0.5">
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="bold"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="italic"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="underline"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="strikethrough"></i></button>
</div>
<div className="w-px h-5 bg-gray-300 mx-1"></div>

<div className="flex items-center gap-0.5">
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="subscript"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="superscript"></i></button>
</div>
<div className="w-px h-5 bg-gray-300 mx-1"></div>

<div className="flex items-center gap-0.5">
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="align-left"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="align-center"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="align-right"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="align-justify"></i></button>
</div>
<div className="w-px h-5 bg-gray-300 mx-1"></div>

<div className="flex items-center gap-1.5 px-1">
<button className="flex items-center gap-1 px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button">
                                    Size <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-1 px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button">
                                    Formats <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
</div>
<div className="w-px h-5 bg-gray-300 mx-1"></div>

<div className="flex items-center gap-0.5">
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="baseline"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="paint-bucket"></i></button>
</div>
<div className="w-px h-5 bg-gray-300 mx-1"></div>

<div className="flex items-center gap-0.5">
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="list"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="list-ordered"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="outdent"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="indent"></i></button>
</div>
<div className="w-px h-5 bg-gray-300 mx-1"></div>

<div className="flex items-center gap-0.5">
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="link"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="image"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="code"></i></button>
<button className="p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="printer"></i></button>
</div>
</div>

<div className="bg-gray-50/50 border-b border-gray-200 p-2 flex flex-wrap gap-1 items-center">
<button className="p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="undo"></i></button>
<button className="p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-colors" type="button"><i className="w-4 h-4" data-lucide="redo"></i></button>
</div>

<textarea className="w-full min-h-[160px] p-4 text-base text-gray-900 border-none focus:ring-0 resize-y outline-none bg-white"></textarea>
</div>
</div>
</div>
</div>

<div className="px-8 py-5 border-t border-gray-100 bg-gray-50 flex items-center justify-end gap-3 z-10 sticky bottom-0 rounded-b-2xl">
<button className="px-5 py-2.5 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors shadow-sm" type="button">
                Cancel
            </button>
<button className="px-6 py-2.5 text-base font-medium text-white bg-emerald-600 border border-transparent rounded-xl hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors shadow-sm" type="submit">
                Create
            </button>
</div>
</div>


    </>
  );
}
