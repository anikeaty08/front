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



        lucide.createIcons();
    
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
      

<aside className="w-64 bg-stone-50 border-r border-stone-200 flex-col justify-between hidden md:flex">
<div>

<div className="h-16 flex items-center px-6 border-b border-stone-200/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-stone-900 rounded-md flex items-center justify-center text-white text-xs font-medium">N</div>
<span className="text-stone-900 font-semibold tracking-tight text-base">NYAY</span>
</div>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-900 bg-white rounded-md shadow-sm ring-1 ring-stone-200" href="#">
<i className="w-4 h-4 text-blue-500" data-lucide="layout-grid"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-500 hover:bg-stone-100 hover:text-stone-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                    Clients
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-500 hover:bg-stone-100 hover:text-stone-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="scale"></i>
                    Case Files
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-500 hover:bg-stone-100 hover:text-stone-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="files"></i>
                    Documents
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-500 hover:bg-stone-100 hover:text-stone-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i>
                    Hearings
                </a>
</nav>
<div className="px-6 py-4">
<h3 className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-3">Recent Matters</h3>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-xs font-medium text-stone-600 cursor-pointer hover:text-blue-500">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                        Sharma v. State
                    </li>
<li className="flex items-center gap-2 text-xs font-medium text-stone-600 cursor-pointer hover:text-blue-500">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        TechSolutions Merger
                    </li>
<li className="flex items-center gap-2 text-xs font-medium text-stone-600 cursor-pointer hover:text-blue-500">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Estate Planning - Verma
                    </li>
</ul>
</div>
</div>

<div className="p-4 border-t border-stone-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-600">AR</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-stone-900">Adv. A. Rao</span>
<span className="text-xs text-stone-400">High Court, Delhi</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-stone-50/30">

<header className="h-16 flex items-center justify-between px-8 border-b border-stone-200 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
<div>
<h1 className="text-lg font-semibold text-stone-900 tracking-tight">Dashboard Overview</h1>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" data-lucide="search"></i>
<input className="pl-9 pr-4 py-1.5 text-sm bg-stone-100 border border-transparent focus:bg-white focus:border-stone-300 rounded-md outline-none w-64 transition-all placeholder:text-stone-400" placeholder="Search cases, clients, citations..." type="text"/>
</div>
<button className="p-2 text-stone-500 hover:text-stone-900 rounded-md hover:bg-stone-100">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-stone-500">Pending Hearings</h3>
<span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">This Week</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-stone-900 tracking-tight">12</span>
<span className="text-xs text-stone-400">3 High Court</span>
</div>
</div>
<div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-stone-500">Active Cases</h3>
<i className="w-4 h-4 text-stone-300" data-lucide="briefcase"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-stone-900 tracking-tight">48</span>
<span className="text-xs text-emerald-600 font-medium">+4 new</span>
</div>
</div>
<div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-stone-500">Documents Review</h3>
<i className="w-4 h-4 text-stone-300" data-lucide="file-text"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-stone-900 tracking-tight">7</span>
<span className="text-xs text-orange-500 font-medium">Urgent</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold text-stone-900 tracking-tight">Active Matters</h2>
<button className="text-xs font-medium text-blue-500 hover:text-blue-600">View All</button>
</div>
<div className="bg-white border border-stone-200 rounded-lg shadow-sm overflow-hidden">
<table className="w-full text-left">
<thead className="bg-stone-50 border-b border-stone-200">
<tr>
<th className="px-6 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">Client / Case</th>
<th className="px-6 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">CNR / Ref</th>
<th className="px-6 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">Next Date</th>
<th className="px-6 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr className="hover:bg-stone-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-medium text-stone-900">Rajesh Kumar</span>
<span className="text-xs text-stone-400">vs State of Maharashtra</span>
</div>
</td>
<td className="px-6 py-4 text-xs text-stone-500 font-mono">MHC/2023/892</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-600">Arguments</span>
</td>
<td className="px-6 py-4 text-xs text-stone-600">14 Oct, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-stone-400 hover:text-stone-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
<tr className="hover:bg-stone-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-medium text-stone-900">TechSolutions Pvt Ltd</span>
<span className="text-xs text-stone-400">Merger &amp; Acquisition</span>
</div>
</td>
<td className="px-6 py-4 text-xs text-stone-500 font-mono">INTERNAL-04</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-600">Drafting</span>
</td>
<td className="px-6 py-4 text-xs text-stone-600">--</td>
<td className="px-6 py-4 text-right">
<button className="text-stone-400 hover:text-stone-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
<tr className="hover:bg-stone-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-medium text-stone-900">Amit &amp; Priya Singh</span>
<span className="text-xs text-stone-400">Property Dispute</span>
</div>
</td>
<td className="px-6 py-4 text-xs text-stone-500 font-mono">DL/civ/441</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-600">Evidence</span>
</td>
<td className="px-6 py-4 text-xs text-stone-600">16 Oct, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-stone-400 hover:text-stone-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
<tr className="hover:bg-stone-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-medium text-stone-900">Sundar Pichai (Proxy)</span>
<span className="text-xs text-stone-400">IPR Violation</span>
</div>
</td>
<td className="px-6 py-4 text-xs text-stone-500 font-mono">IPR/292/BLR</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-stone-100 text-stone-600">Filing</span>
</td>
<td className="px-6 py-4 text-xs text-stone-600">20 Oct, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-stone-400 hover:text-stone-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="pt-4">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-semibold text-stone-900 tracking-tight">Recent Documents</h2>
<div className="flex gap-2">
<button className="p-1.5 rounded-md hover:bg-stone-200 text-stone-500"><i className="w-4 h-4" data-lucide="grid"></i></button>
<button className="p-1.5 rounded-md hover:bg-stone-200 text-stone-500"><i className="w-4 h-4" data-lucide="list"></i></button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="group bg-white p-4 rounded-lg border border-stone-200 hover:border-blue-400 hover:shadow-sm cursor-pointer transition-all">
<div className="flex items-start justify-between mb-3">
<div className="p-2 bg-red-50 rounded-md">
<i className="w-5 h-5 text-red-500" data-lucide="file-text"></i>
</div>
<i className="w-4 h-4 text-stone-300 group-hover:text-stone-500" data-lucide="more-vertical"></i>
</div>
<h3 className="text-sm font-medium text-stone-900 mb-1 truncate">Vakalatnama_Sharma.pdf</h3>
<p className="text-xs text-stone-400">1.2 MB • Just now</p>
</div>
<div className="group bg-white p-4 rounded-lg border border-stone-200 hover:border-blue-400 hover:shadow-sm cursor-pointer transition-all">
<div className="flex items-start justify-between mb-3">
<div className="p-2 bg-blue-50 rounded-md">
<i className="w-5 h-5 text-blue-500" data-lucide="file"></i>
</div>
<i className="w-4 h-4 text-stone-300 group-hover:text-stone-500" data-lucide="more-vertical"></i>
</div>
<h3 className="text-sm font-medium text-stone-900 mb-1 truncate">Affidavit_Final_v2.docx</h3>
<p className="text-xs text-stone-400">450 KB • 2h ago</p>
</div>
<div className="group bg-white p-4 rounded-lg border border-stone-200 hover:border-blue-400 hover:shadow-sm cursor-pointer transition-all">
<div className="flex items-start justify-between mb-3">
<div className="p-2 bg-stone-100 rounded-md">
<i className="w-5 h-5 text-stone-600" data-lucide="image"></i>
</div>
<i className="w-4 h-4 text-stone-300 group-hover:text-stone-500" data-lucide="more-vertical"></i>
</div>
<h3 className="text-sm font-medium text-stone-900 mb-1 truncate">Site_Evidence_001.jpg</h3>
<p className="text-xs text-stone-400">3.4 MB • 5h ago</p>
</div>
<div className="group border border-stone-200 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-stone-50 transition-colors">
<i className="w-6 h-6 text-stone-300 mb-2" data-lucide="upload-cloud"></i>
<span className="text-xs font-medium text-stone-500">Upload New</span>
</div>
</div>
</div>
</div>


</div>
</div>
</main>

<aside className="w-80 bg-white border-l border-stone-200 flex flex-col hidden lg:flex shadow-[rgba(0,0,0,0.05)_-4px_0px_10px]">

<div className="h-16 flex items-center justify-between px-5 border-b border-stone-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="sparkles"></i>
<h2 className="text-sm font-semibold text-stone-900">Legal AI Assistant</h2>
</div>
<button className="text-stone-400 hover:text-stone-900"><i className="w-4 h-4" data-lucide="panel-right-close"></i></button>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
<h3 className="text-xs font-semibold text-blue-800 mb-2">Relevant Citations Found</h3>
<p className="text-xs text-stone-600 leading-relaxed mb-3">Based on your recent draft for <span className="font-medium text-stone-800">Section 138 NI Act</span>, I found 2 relevant Supreme Court judgments.</p>
<div className="space-y-2">
<a className="block bg-white p-2 rounded border border-blue-100 hover:border-blue-300 transition-colors" href="#">
<div className="text-xs font-medium text-stone-800">Dashrath Rupsingh Rathod vs. State</div>
<div className="text-[10px] text-stone-400 mt-1">Territorial Jurisdiction</div>
</a>
</div>
</div>

<div className="space-y-4">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-stone-200 flex-shrink-0 flex items-center justify-center text-[10px] font-medium text-stone-600">AR</div>
<div className="bg-stone-100 rounded-lg rounded-tl-none p-3 text-sm text-stone-700 leading-snug">
                        Can you summarize the limitation period for filing a civil suit for recovery?
                    </div>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex-shrink-0 flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="sparkles"></i>
</div>
<div className="flex flex-col gap-2 w-full">
<div className="text-sm text-stone-700 leading-relaxed">
<p>Under the <span className="font-medium">Limitation Act, 1963</span>, the period is generally <span className="font-medium">3 years</span> from the date the cause of action arises.</p>
</div>
<div className="flex gap-2 mt-1">
<span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-[10px] text-stone-500">Article 113</span>
<span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-[10px] text-stone-500">Section 3</span>
</div>
</div>
</div>
</div>

<div className="pt-4 border-t border-stone-100">
<h4 className="text-xs font-medium text-stone-400 mb-3 uppercase tracking-wider">Quick Tools</h4>
<div className="grid grid-cols-2 gap-2">
<button className="flex flex-col items-center justify-center p-3 bg-stone-50 hover:bg-white border border-stone-100 hover:border-stone-200 rounded-lg transition-all text-center">
<i className="w-4 h-4 text-stone-500 mb-1.5" data-lucide="book-open"></i>
<span className="text-xs font-medium text-stone-600">IPC Lookup</span>
</button>
<button className="flex flex-col items-center justify-center p-3 bg-stone-50 hover:bg-white border border-stone-100 hover:border-stone-200 rounded-lg transition-all text-center">
<i className="w-4 h-4 text-stone-500 mb-1.5" data-lucide="pen-tool"></i>
<span className="text-xs font-medium text-stone-600">Draft Notice</span>
</button>
</div>
</div>
</div>

<div className="p-4 border-t border-stone-200 bg-white">
<div className="relative">
<input className="w-full pl-3 pr-10 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-300 focus:bg-white transition-all placeholder:text-stone-400" placeholder="Ask Lexi..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-blue-500 rounded hover:bg-blue-600 transition-colors">
<i className="w-3 h-3 text-white" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</aside>


    </>
  );
}
