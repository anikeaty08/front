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
      

<nav className="w-64 flex flex-col border-r border-zinc-200 bg-zinc-50/50 h-full flex-shrink-0 relative z-20">

<div className="h-16 flex items-center px-6 border-b border-zinc-200/50">
<span className="text-lg font-bold tracking-tight text-zinc-900" style={{}}>VIDORENA</span>
<span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#ccff00] text-black border border-[#b3e600]" style={{}}>BUSINESS</span>
</div>

<div className="px-4 py-6">
<div className="p-1 bg-zinc-200/50 rounded-lg border border-zinc-200 flex relative">
<button className="flex-1 hover:text-zinc-600 transition-colors text-xs font-medium text-zinc-500 z-10 pt-1.5 pb-1.5">Creator</button>
<button className="flex-1 py-1.5 text-xs font-semibold text-black bg-white rounded shadow-sm z-10 ring-1 ring-black/5" style={{}}>Business</button>
</div>
<p className="mt-3 text-[10px] text-zinc-500 text-center" style={{}}>Outcome-driven workflows enabled</p>
</div>

<div className="flex-1 px-3 space-y-1 overflow-y-auto">
<p className="px-3 pt-4 pb-2 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider" style={{}}>Platform</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md active-nav-item group transition-all" href="#" style={{}}>
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
                Overview
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-md transition-all group" href="#" style={{}}>
<svg aria-hidden="true" className="iconify text-zinc-400 group-hover:text-zinc-600 transition-colors iconify--lucide" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
                Workflows
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-md transition-all group" href="#" style={{}}>
<svg aria-hidden="true" className="iconify text-zinc-400 group-hover:text-zinc-600 transition-colors iconify--lucide" data-icon="lucide:library" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m16 6l4 14M12 6v14M8 8v12M4 4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Assets
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-md transition-all group" href="#" style={{}}>
<svg aria-hidden="true" className="iconify text-zinc-400 group-hover:text-zinc-600 transition-colors iconify--lucide" data-icon="lucide:calendar-clock" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
                Distribution
            </a>
<p className="px-3 pt-6 pb-2 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider" style={{}}>Management</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-md transition-all group" href="#" style={{}}>
<svg aria-hidden="true" className="iconify text-zinc-400 group-hover:text-zinc-600 transition-colors iconify--lucide" data-icon="lucide:users" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                Team
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-md transition-all group" href="#" style={{}}>
<svg aria-hidden="true" className="iconify text-zinc-400 group-hover:text-zinc-600 transition-colors iconify--lucide" data-icon="lucide:palette" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
                Brand Kits
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-md transition-all group" href="#" style={{}}>
<svg aria-hidden="true" className="iconify text-zinc-400 group-hover:text-zinc-600 transition-colors iconify--lucide" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Analytics
            </a>
</div>

<div className="p-4 border-t border-zinc-200 bg-zinc-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center text-xs font-bold text-zinc-800 border border-zinc-200" style={{}}>AC</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-zinc-900 truncate" style={{}}>Acme Corp</p>
<p className="text-[10px] text-zinc-500 truncate" style={{}}>Business Pro Plan</p>
</div>
<svg aria-hidden="true" className="iconify text-zinc-400 hover:text-zinc-700 cursor-pointer iconify--lucide" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 17H5M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></g></svg>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-white">

<div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" style={{backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<header className="flex glass-panel z-10 sticky h-16 pr-8 pl-8 top-0 items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-800 cursor-pointer" style={{}}>Home</span>
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:chevron-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-zinc-900 font-medium" style={{}}>Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<svg aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 iconify text-zinc-400 group-focus-within:text-zinc-600 transition-colors iconify--lucide" data-icon="lucide:search" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle className="" cx="11" cy="11" r="8"></circle></g></svg>
<input className="bg-white border border-zinc-200 rounded-md pl-9 pr-3 py-1.5 text-xs text-zinc-900 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] w-64 transition-all placeholder:text-zinc-400 shadow-sm" placeholder="Search assets..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
</div>
</div>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors relative">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="absolute top-0 right-0 w-2 h-2 bg-[#ccff00] rounded-full border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto z-10 p-8 pb-20">

<div className="max-w-5xl mx-auto mb-12">
<div className="flex justify-between items-end mb-6">
<div className="">
<h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2" style={{}}>Turn content into business outcomes.</h1>
<p className="text-zinc-500 text-sm max-w-lg" style={{}}>Create once. Automatically repurpose and publish across every platform your business needs.</p>
</div>
<button className="bg-[#ccff00] hover:bg-[#badd00] text-black text-sm font-bold px-4 py-2 rounded-md shadow-sm border border-[#b3e600] flex items-center gap-2 transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Create Business Video
                    </button>
</div>

<h2 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4" style={{}}>Start a Workflow</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group hover:border-[#ccff00] hover:shadow-md transition-all cursor-pointer bg-white border border-zinc-200 rounded-xl pt-5 pr-5 pb-5 pl-5 relative shadow-sm">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-neon-subtle flex items-center justify-center border border-[#ccff00] mb-4 group-hover:scale-105 transition-transform">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:megaphone" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path></g></svg>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-1" style={{}}>Marketing Campaign</h3>
<p className="text-xs text-zinc-500 leading-relaxed" style={{}}>Turn long-form video into a multi-channel asset pack.</p>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl p-5 hover:border-[#ccff00] hover:shadow-md transition-all cursor-pointer shadow-sm">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-neon-subtle flex items-center justify-center border border-[#ccff00] mb-4 group-hover:scale-105 transition-transform">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-1" style={{}}>Sales Prospecting</h3>
<p className="text-xs text-zinc-500 leading-relaxed" style={{}}>Generate personalized outreach videos from scripts.</p>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl p-5 hover:border-[#ccff00] hover:shadow-md transition-all cursor-pointer shadow-sm">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-neon-subtle flex items-center justify-center border border-[#ccff00] mb-4 group-hover:scale-105 transition-transform">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:graduation-cap" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-1" style={{}}>Training &amp; SOPs</h3>
<p className="text-xs text-zinc-500 leading-relaxed" style={{}}>Convert documents and slides into narrated videos.</p>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl p-5 hover:border-[#ccff00] hover:shadow-md transition-all cursor-pointer shadow-sm">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-neon-subtle flex items-center justify-center border border-[#ccff00] mb-4 group-hover:scale-105 transition-transform">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-1" style={{}}>Ecommerce Product</h3>
<p className="text-xs text-zinc-500 leading-relaxed" style={{}}>Create listing videos optimized for conversion.</p>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xs font-bold text-zinc-500 uppercase tracking-wider" style={{}}>Recent Activity</h2>
<button className="text-xs text-zinc-500 hover:text-black transition-colors flex items-center gap-1" style={{}}>
                        View all <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm">
<table className="w-full text-left border-collapse">
<thead className="bg-zinc-50 text-xs font-semibold text-zinc-500">
<tr>
<th className="px-6 py-3 font-semibold border-b border-zinc-200" style={{}}>Asset Name</th>
<th className="px-6 py-3 font-semibold border-b border-zinc-200" style={{}}>Workflow</th>
<th className="px-6 py-3 font-semibold border-b border-zinc-200" style={{}}>Distribution</th>
<th className="px-6 py-3 font-semibold border-b border-zinc-200" style={{}}>Status</th>
<th className="px-6 py-3 font-semibold border-b border-zinc-200 text-right" style={{}}>Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">

<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-100 border border-zinc-200 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:video" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
</div>
<div>
<p className="text-sm text-zinc-900 font-medium" style={{}}>Q3 Townhall Recap</p>
<p className="text-[10px] text-zinc-500" style={{}}>Updated 2m ago</p>
</div>
</div>
</td>
<td className="px-6 py-3.5">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium bg-zinc-100 border border-zinc-200 text-zinc-600" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scissors" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g></svg>
                                        Repurposing
                                    </span>
</td>
<td className="px-6 py-3.5">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-white border border-zinc-200 flex items-center justify-center z-10 shadow-sm">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--simple-icons" data-icon="simple-icons:linkedin" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor"></path></svg>
</div>
<div className="w-5 h-5 rounded-full bg-white border border-zinc-200 flex items-center justify-center z-0 shadow-sm">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--simple-icons" data-icon="simple-icons:youtube" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z" fill="currentColor"></path></svg>
</div>
</div>
</td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-neon"></div>
<span className="text-xs text-zinc-700 font-medium" style={{}}>Ready</span>
</div>
</td>
<td className="px-6 py-3.5 text-right">
<button className="text-zinc-400 hover:text-black transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:more-horizontal" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</button>
</td>
</tr>

<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-100 border border-zinc-200 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:file-text" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div>
<p className="text-sm text-zinc-900 font-medium" style={{}}>Outbound Sales - Real Estate</p>
<p className="text-[10px] text-zinc-500" style={{}}>Updated 2h ago</p>
</div>
</div>
</td>
<td className="px-6 py-3.5">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium bg-zinc-100 border border-zinc-200 text-zinc-600" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                                        Personalized Msg
                                    </span>
</td>
<td className="px-6 py-3.5">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:mail" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
</div>
</td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
<span className="text-xs text-zinc-500" style={{}}>Processing</span>
</div>
</td>
<td className="px-6 py-3.5 text-right">
<button className="text-zinc-400 hover:text-black transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:more-horizontal" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</button>
</td>
</tr>

<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-100 border border-zinc-200 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:link" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></g></svg>
</div>
<div>
<p className="text-sm text-zinc-900 font-medium" style={{}}>New Feature Walkthrough</p>
<p className="text-[10px] text-zinc-500" style={{}}>Updated 1d ago</p>
</div>
</div>
</td>
<td className="px-6 py-3.5">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium bg-zinc-100 border border-zinc-200 text-zinc-600" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:presentation" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20m-1 0v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3m4 18l5-5l5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        Presentation
                                    </span>
</td>
<td className="px-6 py-3.5">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--simple-icons" data-icon="simple-icons:youtube" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z" fill="currentColor"></path></svg>
</div>
<div className="w-5 h-5 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--simple-icons" data-icon="simple-icons:twitter" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M21.543 7.104c.015.211.015.423.015.636c0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041a4.93 4.93 0 0 1-4.6-3.42a4.9 4.9 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.9 4.9 0 0 0 2.235.616A4.93 4.93 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144a4.929 4.929 0 0 1 8.39-4.49a9.9 9.9 0 0 0 3.128-1.196a4.94 4.94 0 0 1-2.165 2.724A9.8 9.8 0 0 0 24 4.555a10 10 0 0 1-2.457 2.549" fill="currentColor"></path></svg>
</div>
</div>
</td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
<span className="text-xs text-zinc-500" style={{}}>Scheduled</span>
</div>
</td>
<td className="px-6 py-3.5 text-right">
<button className="text-zinc-400 hover:text-black transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:more-horizontal" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

<div className="fixed bottom-8 right-8 z-50">
<button className="h-14 w-14 rounded-full bg-[#ccff00] text-black shadow-lg shadow-lime-500/20 flex items-center justify-center hover:scale-105 transition-transform border-2 border-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

    </>
  );
}
