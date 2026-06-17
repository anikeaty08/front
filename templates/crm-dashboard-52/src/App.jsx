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
      

<aside className="w-64 bg-[#FAFAFA] border-r border-gray-200 flex flex-col hidden md:flex shrink-0">

<div className="h-14 flex items-center px-6 border-b border-gray-200 shrink-0">
<span className="text-lg font-semibold tracking-tighter text-gray-900">NEXUS</span>
</div>

<div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
<div className="px-3 mb-2">
<p className="text-xs font-medium text-gray-400 tracking-wider uppercase">Workspace</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-gray-400 text-lg" icon="solar:widget-linear"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-900 transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-500 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                    CRM &amp; Clients
                </div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400 text-lg" icon="solar:folder-with-files-linear"></iconify-icon>
                    Projects &amp; Folders
                </div>
<span className="text-xs py-0.5 px-2 bg-gray-200 text-gray-600 rounded-full font-medium">12</span>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400 text-lg" icon="solar:inbox-linear"></iconify-icon>
                    Inbox
                </div>
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-gray-400 text-lg" icon="solar:calendar-linear"></iconify-icon>
                Calendar &amp; Booking
            </a>
<div className="px-3 mt-6 mb-2">
<p className="text-xs font-medium text-gray-400 tracking-wider uppercase">Business</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-gray-400 text-lg" icon="solar:wallet-money-linear"></iconify-icon>
                Invoices &amp; Estimates
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-gray-400 text-lg" icon="solar:shop-linear"></iconify-icon>
                Services Catalog
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-gray-400 text-lg" icon="solar:document-text-linear"></iconify-icon>
                Intake Forms
            </a>
</div>

<div className="p-4 border-t border-gray-200 shrink-0 flex flex-col gap-2">
<button className="w-full flex items-center justify-center gap-2 bg-gradient-to-b from-indigo-50 to-indigo-100/50 hover:from-indigo-100 hover:to-indigo-200/50 border border-indigo-200 text-indigo-700 text-sm font-medium py-2 px-4 rounded-xl shadow-sm transition-all group">
<iconify-icon className="text-indigo-500 text-lg group-hover:scale-110 transition-transform" icon="solar:magic-stick-3-linear"></iconify-icon>
                Nexus AI Assistant
            </button>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors mt-2" href="#">
<iconify-icon className="text-gray-400 text-lg" icon="solar:help-linear"></iconify-icon>
                Support &amp; Settings
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative bg-white rounded-l-2xl md:border-l border-gray-200 md:shadow-[-4px_0_24px_-12px_rgba(0,0,0,0.1)] overflow-hidden">

<header className="h-14 flex items-center justify-between px-6 border-b border-gray-100 shrink-0 bg-white/80 backdrop-blur-md z-10">

<button className="md:hidden text-gray-500 hover:text-gray-900 mr-4">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<div className="flex-1 max-w-md relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-indigo-500 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-indigo-200 focus:ring-4 focus:ring-indigo-50 text-sm font-medium rounded-xl py-1.5 pl-10 pr-4 outline-none transition-all placeholder:text-gray-400 placeholder:font-normal" placeholder="Search clients, files, invoices..." type="text"/>
</div>

<div className="flex items-center gap-4 ml-4">
<button className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded-md hover:bg-gray-50 border border-gray-200 shadow-sm">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                    New Request
                </button>
<button className="relative text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 border border-indigo-200 flex items-center justify-center text-sm font-semibold text-indigo-700 cursor-pointer">
                    JS
                </div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">

<div className="w-full h-40 md:h-52 rounded-2xl bg-cover bg-center relative mb-8 overflow-hidden" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1 text-white">Client Directory</h1>
<p className="text-gray-300 text-sm md:text-base font-normal max-w-lg">Manage your client relationships, track interactions, and monitor project statuses across your entire pipeline.</p>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
<div className="flex items-center gap-2 text-gray-500 mb-2">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-xs font-medium uppercase tracking-wider">Total Clients</h3>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">142</span>
<span className="text-xs font-medium text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded mb-1">+12%</span>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
<div className="flex items-center gap-2 text-gray-500 mb-2">
<iconify-icon className="text-lg" icon="solar:target-linear"></iconify-icon>
<h3 className="text-xs font-medium uppercase tracking-wider">Active Leads</h3>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">28</span>
<span className="text-xs font-medium text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded mb-1">+4</span>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
<div className="flex items-center gap-2 text-gray-500 mb-2">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-xs font-medium uppercase tracking-wider">In Review</h3>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">7</span>
<span className="text-xs font-medium text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded mb-1">-2</span>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
<div className="flex items-center gap-2 text-gray-500 mb-2">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-xs font-medium uppercase tracking-wider">MRR Value</h3>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">$42.5k</span>
<span className="text-xs font-medium text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded mb-1">+8%</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">

<div className="flex items-center p-1 bg-gray-100 rounded-lg">
<button className="px-3 py-1.5 text-sm font-medium bg-white text-gray-900 rounded-md shadow-sm transition-all">All Clients</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 rounded-md transition-all">Active</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 rounded-md transition-all">Leads</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 rounded-md transition-all hidden md:block">Archived</button>
</div>

<div className="flex items-center gap-2 w-full sm:w-auto">
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
                            Filter
                        </button>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors shadow-sm ml-auto sm:ml-0">
<iconify-icon icon="solar:user-plus-rounded-linear"></iconify-icon>
                        Add Client
                    </button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-8">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="py-3 px-4 w-8">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded bg-white border border-gray-300 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center transition-colors shadow-sm">
<svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Company / Client</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
<th className="py-3 px-4 w-12"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded bg-white border border-gray-300 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center transition-colors shadow-sm">
<svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold shrink-0">A</div>
<div>
<p className="text-sm font-semibold text-gray-900">Acme Corp</p>
<p className="text-xs font-normal text-gray-500">Alice Johnson</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-700">alice@acme.com</p>
<p className="text-xs font-normal text-gray-500">+1 (555) 123-4567</p>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Active
                                    </span>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-900">$12,500</p>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-700">2 hours ago</p>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity p-1">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded bg-white border border-gray-300 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center transition-colors shadow-sm">
<svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-semibold shrink-0">S</div>
<div>
<p className="text-sm font-semibold text-gray-900">Stark Industries</p>
<p className="text-xs font-normal text-gray-500">Tony Stark</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-700">t.stark@stark.com</p>
<p className="text-xs font-normal text-gray-500">+1 (555) 987-6543</p>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> In Review
                                    </span>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-900">$8,200</p>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-700">Yesterday</p>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity p-1">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded bg-white border border-gray-300 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center transition-colors shadow-sm">
<svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-xs font-semibold shrink-0">W</div>
<div>
<p className="text-sm font-semibold text-gray-900">Wayne Enterprises</p>
<p className="text-xs font-normal text-gray-500">Bruce Wayne</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-700">bruce@wayne.com</p>
<p className="text-xs font-normal text-gray-500">+1 (555) 246-8101</p>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Lead
                                    </span>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-900">$24,000 <span className="text-xs text-gray-400 font-normal ml-1">Est.</span></p>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-700">Oct 24, 2023</p>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity p-1">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded bg-white border border-gray-300 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center transition-colors shadow-sm">
<svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-semibold shrink-0">O</div>
<div>
<p className="text-sm font-semibold text-gray-900">Oscorp</p>
<p className="text-xs font-normal text-gray-500">Norman Osborn</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-700">norman@oscorp.com</p>
<p className="text-xs font-normal text-gray-500">+1 (555) 369-2580</p>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Archived
                                    </span>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-900">$3,400</p>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-700">Sep 12, 2023</p>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity p-1">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded bg-white border border-gray-300 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center transition-colors shadow-sm">
<svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-semibold shrink-0">D</div>
<div>
<p className="text-sm font-semibold text-gray-900">Daily Bugle</p>
<p className="text-xs font-normal text-gray-500">J. Jonah Jameson</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-700">jjj@dailybugle.com</p>
<p className="text-xs font-normal text-gray-500">+1 (555) 741-8520</p>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Active
                                    </span>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-900">$5,000</p>
</td>
<td className="py-3 px-4">
<p className="text-sm font-medium text-gray-700">5 hours ago</p>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity p-1">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between px-4 py-3 bg-gray-50/50 border-t border-gray-200">
<p className="text-xs font-medium text-gray-500">Showing <span className="font-semibold text-gray-900">1</span> to <span className="font-semibold text-gray-900">5</span> of <span className="font-semibold text-gray-900">142</span> clients</p>
<div className="flex items-center gap-1">
<button className="px-2 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors disabled:opacity-50" disabled="">Previous</button>
<button className="px-2 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">Next</button>
</div>
</div>
</div>

<div className="h-12"></div>
</div>
</main>

    </>
  );
}
