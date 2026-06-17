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
      

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">

<div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col p-6 md:p-8 relative min-h-[420px]">
<div className="w-full text-left mb-6 flex items-center justify-between">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">01. Create</span>
<iconify-icon className="text-gray-400 text-lg" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="flex-1 w-full border border-gray-200 rounded-xl overflow-hidden flex bg-gray-50 shadow-inner">

<div className="w-1/3 bg-white border-r border-gray-200 flex flex-col p-3 z-10">
<span className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider ml-1">Elements</span>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 p-2 rounded-lg border border-gray-100 bg-white shadow-sm cursor-move hover:border-blue-300 hover:text-blue-600 transition-colors group">
<iconify-icon className="text-gray-400 group-hover:text-blue-600" icon="solar:text-field-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Text Input</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg border border-gray-100 bg-white shadow-sm cursor-move hover:border-blue-300 hover:text-blue-600 transition-colors group">
<iconify-icon className="text-gray-400 group-hover:text-blue-600" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Email</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg border border-gray-100 bg-white shadow-sm cursor-move hover:border-blue-300 hover:text-blue-600 transition-colors group">
<iconify-icon className="text-gray-400 group-hover:text-blue-600" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Checkbox</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg border border-transparent bg-gray-50 cursor-move opacity-60">
<iconify-icon className="text-gray-400" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-gray-500">Date Picker</span>
</div>
</div>
</div>

<div className="w-2/3 p-4 flex flex-col items-center overflow-y-auto no-scrollbar relative">
<div className="w-full max-w-[14rem] bg-white border border-gray-200 shadow-sm rounded-xl p-4 flex flex-col gap-4 relative z-10">

<div className="group relative">
<div className="absolute -left-2 -top-2 -right-2 -bottom-2 border border-transparent group-hover:border-blue-200 rounded-lg transition-colors z-0"></div>
<div className="relative z-10">
<label className="text-xs font-semibold text-gray-700 block mb-1.5">Full Name</label>
<div className="w-full h-8 border border-gray-200 rounded-lg bg-gray-50 flex items-center px-2.5">
<span className="text-xs text-gray-400">e.g. Jane Doe</span>
</div>
</div>
</div>

<div className="group relative">
<div className="absolute -left-2 -top-2 -right-2 -bottom-2 border border-blue-400 bg-blue-50/30 rounded-lg transition-colors z-0"></div>
<div className="relative z-10">
<label className="text-xs font-semibold text-blue-700 block mb-1.5 flex justify-between items-center">
                                    Email Address
                                    <iconify-icon className="text-blue-400 cursor-pointer" icon="solar:settings-linear"></iconify-icon>
</label>
<div className="w-full h-8 border border-blue-300 rounded-lg bg-white flex items-center px-2.5 shadow-sm">
<span className="text-xs text-gray-900">jane@company.com</span>
</div>
</div>
</div>

<div className="group relative">
<div className="absolute -left-2 -top-2 -right-2 -bottom-2 border border-transparent group-hover:border-blue-200 rounded-lg transition-colors z-0"></div>
<div className="relative z-10">
<label className="text-xs font-semibold text-gray-700 block mb-1.5">Company Name</label>
<div className="w-full h-8 border border-gray-200 rounded-lg bg-gray-50 flex items-center px-2.5">
<span className="text-xs text-gray-400">Acme Corp</span>
</div>
</div>
</div>
</div>

<div className="w-full max-w-[14rem] mt-3 border-2 border-dashed border-gray-200 rounded-xl p-3 flex items-center justify-center text-gray-400 bg-gray-50/50">
<span className="text-xs font-medium">Drag component here</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center p-6 md:p-8 relative min-h-[420px]">
<div className="w-full text-left mb-6 flex items-center justify-between">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">02. Submit</span>
<iconify-icon className="text-gray-400 text-lg" icon="solar:tablet-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="w-[18rem] md:w-[20rem] h-[22rem] rounded-[1.5rem] border-[10px] border-gray-900 bg-white relative shadow-2xl shadow-gray-200/50 flex flex-col overflow-hidden shrink-0 mt-auto">

<div className="absolute top-0 left-0 w-full h-4 flex justify-center items-center z-20 bg-gray-900">
<div className="w-1.5 h-1.5 bg-gray-700 rounded-full border border-gray-800"></div>
</div>

<div className="w-full h-full bg-gray-50 flex flex-col pt-4">

<div className="bg-white px-5 pt-6 pb-4 border-b border-gray-100 flex flex-col items-center text-center shrink-0">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-sm border border-blue-100">
<iconify-icon className="text-xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-900">Join the Waitlist</h3>
<p className="text-xs text-gray-500 mt-1">Get early access to our platform.</p>
</div>

<div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4 no-scrollbar bg-gray-50/50">
<div>
<label className="block text-xs font-semibold text-gray-700 mb-1.5 ml-0.5">Full Name</label>
<input className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-700 mb-1.5 ml-0.5">Work Email</label>
<input className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-700 mb-1.5 ml-0.5">Company Size</label>
<div className="relative">
<select className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg pl-3 pr-8 py-2.5 outline-none appearance-none shadow-sm cursor-pointer">
<option>1-50 employees</option>
<option>51-200 employees</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-gray-100 shrink-0 flex flex-col gap-3">
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors shadow-md shadow-blue-600/20">
                            Submit Details
                        </button>
<p className="text-xs text-center text-gray-400 flex items-center justify-center gap-1">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> Secure submission
                        </p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col p-6 md:p-8 relative min-h-[420px]">
<div className="w-full text-left mb-6 flex items-center justify-between">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">03. Save</span>
<iconify-icon className="text-gray-400 text-lg" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="flex items-center justify-between mb-4 mt-2">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Lead Directory</h3>
<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold py-2 px-3 rounded-lg shadow-sm transition-all hover:shadow">
                    Export to CSV
                    <iconify-icon className="text-gray-500" icon="solar:download-minimalistic-linear" strokeWidth="2"></iconify-icon>
</button>
</div>

<div className="flex-1 w-full border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col">

<div className="flex items-center bg-gray-50 border-b border-gray-200 px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
<div className="w-8 shrink-0 flex items-center justify-center">
<div className="w-3.5 h-3.5 rounded border border-gray-300 bg-white"></div>
</div>
<div className="flex-1">Contact</div>
<div className="w-24 shrink-0 text-right">Status</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar flex flex-col">

<div className="flex items-center px-4 py-3 border-b border-gray-100 group hover:bg-gray-50 transition-colors cursor-pointer">
<div className="w-8 shrink-0 flex items-center justify-center">

<div className="w-3.5 h-3.5 rounded bg-blue-600 border border-blue-600 flex items-center justify-center">
<iconify-icon className="text-white text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-semibold shrink-0">ER</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">Elena Rodriguez</p>
<p className="text-xs text-gray-500 truncate">elena@designsys.com</p>
</div>
</div>
<div className="w-24 shrink-0 flex justify-end">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                Qualified
                            </span>
</div>
</div>

<div className="flex items-center px-4 py-3 border-b border-gray-100 group hover:bg-gray-50 transition-colors cursor-pointer bg-blue-50/20">
<div className="w-8 shrink-0 flex items-center justify-center">
<div className="w-3.5 h-3.5 rounded border border-gray-300 bg-white"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 text-gray-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">Marcus Chen</p>
<p className="text-xs text-gray-500 truncate">m.chen@techlead.io</p>
</div>
</div>
<div className="w-24 shrink-0 flex justify-end">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                                New
                            </span>
</div>
</div>

<div className="flex items-center px-4 py-3 border-b border-gray-100 group hover:bg-gray-50 transition-colors cursor-pointer">
<div className="w-8 shrink-0 flex items-center justify-center">
<div className="w-3.5 h-3.5 rounded border border-gray-300 bg-white"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold shrink-0">SJ</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">Sarah Jenkins</p>
<p className="text-xs text-gray-500 truncate">sarah.j@acme.co</p>
</div>
</div>
<div className="w-24 shrink-0 flex justify-end">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-pink-50 text-pink-700 border border-pink-100">
                                Contacted
                            </span>
</div>
</div>

<div className="flex items-center px-4 py-3 group hover:bg-gray-50 transition-colors cursor-pointer opacity-70">
<div className="w-8 shrink-0 flex items-center justify-center">
<div className="w-3.5 h-3.5 rounded border border-gray-300 bg-white"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 text-gray-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">David Wright</p>
<p className="text-xs text-gray-500 truncate">dwright@startup.net</p>
</div>
</div>
<div className="w-24 shrink-0 flex justify-end">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                                New
                            </span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col p-6 md:p-8 relative min-h-[420px]">
<div className="w-full text-left mb-6 flex items-center justify-between">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">04. Analyze</span>
<iconify-icon className="text-gray-400 text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 flex flex-col gap-6 w-full">

<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex items-start justify-between w-full">
<div>
<p className="text-sm font-semibold text-gray-500 mb-2">Total Leads</p>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900">845</h2>
</div>
<div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-100 shadow-sm">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="2"></iconify-icon>
                            +18.2%
                        </div>
</div>
</div>

<div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-end">
<div className="flex items-center justify-between mb-auto">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Leads Collected</h3>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-blue-600"></div>
<span className="text-xs text-gray-500 font-medium">Organic</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-pink-400"></div>
<span className="text-xs text-gray-500 font-medium">Direct</span>
</div>
</div>
</div>

<div className="h-32 w-full flex items-end justify-between gap-2 px-1 relative border-b border-gray-100 pb-2 mt-6">

<div className="absolute w-full h-px bg-gray-50 top-0 left-0"></div>
<div className="absolute w-full h-px bg-gray-50 top-1/2 left-0"></div>

<div className="w-full h-full flex flex-col justify-end group cursor-crosshair relative z-10">
<div className="w-full bg-pink-400 rounded-t-sm h-[20%] transition-all opacity-90 group-hover:opacity-100"></div>
<div className="w-full bg-blue-600 rounded-b-sm h-[30%] transition-all opacity-90 group-hover:opacity-100 mt-[1px]"></div>
</div>
<div className="w-full h-full flex flex-col justify-end group cursor-crosshair relative z-10">
<div className="w-full bg-pink-400 rounded-t-sm h-[35%] transition-all opacity-90 group-hover:opacity-100"></div>
<div className="w-full bg-blue-600 rounded-b-sm h-[45%] transition-all opacity-90 group-hover:opacity-100 mt-[1px]"></div>
</div>
<div className="w-full h-full flex flex-col justify-end group cursor-crosshair relative z-10">
<div className="w-full bg-pink-400 rounded-t-sm h-[15%] transition-all opacity-90 group-hover:opacity-100"></div>
<div className="w-full bg-blue-600 rounded-b-sm h-[65%] transition-all opacity-90 group-hover:opacity-100 mt-[1px]"></div>
</div>
<div className="w-full h-full flex flex-col justify-end group cursor-crosshair relative z-10">

<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 font-medium shadow-md">
                                Thu: 124
                            </div>
<div className="w-full bg-pink-400 rounded-t-sm h-[40%] transition-all opacity-90 group-hover:opacity-100"></div>
<div className="w-full bg-blue-600 rounded-b-sm h-[55%] transition-all opacity-90 group-hover:opacity-100 mt-[1px]"></div>
</div>
<div className="w-full h-full flex flex-col justify-end group cursor-crosshair relative z-10">
<div className="w-full bg-pink-400 rounded-t-sm h-[25%] transition-all opacity-90 group-hover:opacity-100"></div>
<div className="w-full bg-blue-600 rounded-b-sm h-[40%] transition-all opacity-90 group-hover:opacity-100 mt-[1px]"></div>
</div>
<div className="w-full h-full flex flex-col justify-end group cursor-crosshair relative z-10">
<div className="w-full bg-pink-400 rounded-t-sm h-[10%] transition-all opacity-90 group-hover:opacity-100"></div>
<div className="w-full bg-blue-600 rounded-b-sm h-[80%] transition-all opacity-90 group-hover:opacity-100 mt-[1px]"></div>
</div>
</div>

<div className="flex justify-between px-1 mt-2 text-[10px] font-semibold text-gray-400 uppercase">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
