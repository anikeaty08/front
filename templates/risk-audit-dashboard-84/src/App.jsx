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
      

<aside className="w-[260px] bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-20">

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="font-bold text-xs tracking-tighter">R</span>
</div>
<span className="font-bold text-sm tracking-tight">RISKOS</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-3 py-6 space-y-0.5 scrollbar-hide">
<div className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 group transition-all" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors text-lg" icon="solar:widget-linear"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 group transition-all" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors text-lg" icon="solar:folder-with-files-linear"></iconify-icon>
                Work Queue
                <span className="ml-auto bg-slate-100 text-slate-600 py-0.5 px-2 rounded-full text-[10px] font-semibold group-hover:bg-white group-hover:shadow-sm">12</span>
</a>
<div className="px-3 mt-8 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Audits</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 group transition-all" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors text-lg" icon="solar:clipboard-check-linear"></iconify-icon>
                Assignments
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-blue-50/50 text-blue-600 rounded-md ring-1 ring-blue-100/50" href="#">
<iconify-icon className="text-blue-500 text-lg" icon="solar:pen-new-square-linear"></iconify-icon>
                Update Audits
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 group transition-all" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors text-lg" icon="solar:graph-up-linear"></iconify-icon>
                Analytics
            </a>
<div className="px-3 mt-8 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Settings</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 group transition-all" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                Team Members
            </a>
</nav>

<div className="p-4 border-t border-slate-100">
<button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-lg transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 border border-slate-200"></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-slate-700 group-hover:text-slate-900 truncate">Alex Morgan</p>
<p className="text-[10px] text-slate-400 truncate">Senior Auditor</p>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#F8FAFC]">

<header className="bg-white border-b border-slate-200 px-8 h-20 flex-shrink-0 flex items-center justify-between z-10 sticky top-0">

<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="hover:text-slate-800 cursor-pointer transition-colors">Audits</span>
<iconify-icon className="text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="font-medium text-slate-900">Bulk Update</span>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center transition-colors">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700">Selection</span>
</div>
<div className="w-12 h-[1px] bg-slate-200 mx-3"></div>

<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-600 text-white shadow-sm shadow-blue-200 flex items-center justify-center ring-2 ring-blue-50 ring-offset-1">
<span className="text-[10px] font-bold">2</span>
</div>
<span className="text-xs font-semibold text-blue-700">Update Data</span>
</div>
<div className="w-12 h-[1px] bg-slate-200 mx-3"></div>

<div className="flex items-center gap-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center">
<span className="text-[10px] font-medium">3</span>
</div>
<span className="text-xs font-medium text-slate-500">Review</span>
</div>
</div>

<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:border-slate-300 rounded-md transition-all shadow-sm">
<iconify-icon className="text-slate-400 text-sm" icon="solar:question-circle-linear"></iconify-icon>
                    Help
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 pb-32">
<div className="max-w-5xl mx-auto space-y-8">

<div className="flex items-end justify-between">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Update Audit Records</h1>
<p className="text-sm text-slate-500 mt-1">Modifying 5 selected records. Changes will be staged for review.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-medium text-slate-500 relative z-10">OD</div>
<div className="w-7 h-7 rounded-full bg-blue-50 border border-white flex items-center justify-center text-[10px] font-medium text-blue-600 relative z-20">EP</div>
</div>
<span className="text-xs text-slate-400 pl-1">2 editors active</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] p-1.5 flex items-center gap-2">
<div className="px-4 flex flex-col justify-center border-r border-slate-100 pr-6">
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Bulk Action</span>
</div>
<div className="flex-1 flex items-center gap-4 px-2">
<div className="relative group flex-1 max-w-xs">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" icon="solar:tag-linear"></iconify-icon>
</div>
<select className="custom-select w-full h-9 pl-9 pr-8 text-sm bg-slate-50 hover:bg-slate-100 border border-transparent hover:border-slate-200 text-slate-600 rounded-lg focus:ring-0 focus:bg-white focus:border-blue-500/50 transition-all outline-none cursor-pointer">
<option disabled="" selected="" value="">Set Status for All...</option>
<option value="pending">Mark as Pending</option>
<option value="review">Send for Review</option>
<option value="approved">Approve</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="h-4 w-[1px] bg-slate-200"></div>
<div className="flex items-center gap-2">
<label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer select-none group">
<input className="custom-checkbox w-4 h-4 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500/20 text-blue-600 transition-colors" type="checkbox"/>
<span className="group-hover:text-slate-900 transition-colors">Flag for Priority</span>
</label>
</div>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-lg shadow-sm transition-all flex items-center gap-2">
                        Apply to All
                        <iconify-icon className="text-slate-400" icon="solar:magic-stick-3-linear"></iconify-icon>
</button>
</div>

<div className="space-y-4">

<div className="group bg-white rounded-xl border border-slate-200 hover:border-blue-300/50 hover:shadow-md hover:shadow-blue-900/5 transition-all duration-300">

<div className="flex items-center justify-between px-6 py-4 border-b border-slate-50 group-hover:border-blue-50/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-slate-900">AUD-2024-001</h3>
<span className="bg-yellow-50 text-yellow-700 text-[10px] font-medium px-2 py-0.5 rounded-full border border-yellow-100/50">In Progress</span>
</div>
<p className="text-xs text-slate-500 mt-0.5">Healthcare Partners Medical Group</p>
</div>
</div>
<button className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-md hover:bg-slate-50">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>

<div className="p-6 grid grid-cols-12 gap-6">

<div className="col-span-8 grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Audit Status</label>
<div className="relative">
<select className="custom-select w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm">
<option>Clinical Review</option>
<option>Pending Info</option>
<option>Completed</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 text-xs pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Project</label>
<div className="relative">
<select className="custom-select w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm">
<option>Q1 Compliance</option>
<option>Targeted Review</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 text-xs pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="col-span-2 grid grid-cols-3 gap-5 pt-2">
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Claim Amount</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
<input className="w-full h-10 pl-6 pr-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-all font-medium" type="text" value="2,500.00"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Identified</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
<input className="w-full h-10 pl-6 pr-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-all font-medium" type="text" value="1,200.00"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Error Code</label>
<div className="relative">
<select className="custom-select w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm">
<option>EC-102: Doc</option>
<option>EC-103: Coding</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 text-xs pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="col-span-4 pl-6 border-l border-slate-100 flex flex-col">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold mb-1.5 flex justify-between">
                                    Comments
                                    <span className="text-slate-400 font-normal normal-case">Optional</span>
</label>
<textarea className="flex-1 w-full p-3 border border-slate-200 rounded-lg text-sm text-slate-700 resize-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-all bg-slate-50/50 focus:bg-white placeholder:text-slate-400" placeholder="Add internal notes about this finding..."></textarea>
<div className="mt-2 flex justify-between items-center">
<div className="flex gap-2">
<button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors"><iconify-icon icon="solar:paperclip-linear"></iconify-icon></button>
<button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors"><iconify-icon icon="solar:history-linear"></iconify-icon></button>
</div>
<span className="text-[10px] text-slate-400">0/500</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 hover:border-blue-300/50 hover:shadow-md hover:shadow-blue-900/5 transition-all duration-300">

<div className="flex items-center justify-between px-6 py-4 border-b border-slate-50 group-hover:border-blue-50/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-slate-900">AUD-2024-005</h3>
<span className="bg-red-50 text-red-700 text-[10px] font-medium px-2 py-0.5 rounded-full border border-red-100/50">Disputed</span>
</div>
<p className="text-xs text-slate-500 mt-0.5">Central Medical Associates</p>
</div>
</div>
<button className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-md hover:bg-slate-50">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>

<div className="p-6 grid grid-cols-12 gap-6">

<div className="col-span-8 grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Audit Status</label>
<div className="relative">
<select className="custom-select w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm">
<option>Dispute Review</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 text-xs pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Project</label>
<div className="relative">
<select className="custom-select w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm">
<option>Annual Audit 24</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 text-xs pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="col-span-2 grid grid-cols-3 gap-5 pt-2">
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Claim Amount</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
<input className="w-full h-10 pl-6 pr-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-all font-medium" type="text" value="8,450.00"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Identified</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
<input className="w-full h-10 pl-6 pr-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-all font-medium" type="text" value="0.00"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Error Code</label>
<div className="relative">
<select className="custom-select w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm">
<option>None</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 text-xs pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="col-span-4 pl-6 border-l border-slate-100 flex flex-col">
<label className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold mb-1.5 flex justify-between">
                                    Comments
                                    <span className="text-slate-400 font-normal normal-case">Optional</span>
</label>
<textarea className="flex-1 w-full p-3 border border-slate-200 rounded-lg text-sm text-slate-700 resize-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-all bg-slate-50/50 focus:bg-white placeholder:text-slate-400" placeholder="Provider disputed finding on 01/22...">Provider disputed finding on 01/22. Documentation attached in portal.</textarea>
<div className="mt-2 flex justify-between items-center">
<div className="flex gap-2">
<button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors"><iconify-icon icon="solar:paperclip-linear"></iconify-icon></button>
<button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors"><iconify-icon icon="solar:history-linear"></iconify-icon></button>
</div>
<span className="text-[10px] text-slate-400">64/500</span>
</div>
</div>
</div>
</div>

<div className="text-center py-4">
<button className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center gap-1 mx-auto">
                            Load 3 more records
                            <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="h-[72px] bg-white border-t border-slate-200 flex items-center justify-between px-8 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-3">
<button className="px-4 py-2.5 rounded-lg border border-transparent text-sm font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors">
                    Save as Draft
                </button>
</div>
<div className="flex items-center gap-3">
<div className="text-xs text-slate-400 mr-2">Last saved 2m ago</div>
<button className="px-5 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                    Back
                </button>
<button className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-md shadow-blue-500/20 transition-all flex items-center gap-2">
                    Review Changes
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</main>

    </>
  );
}
