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
      

<input className="hidden peer" id="sidebar-toggle" type="checkbox"/>

<label className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-30 hidden peer-checked:block lg:hidden transition-opacity cursor-pointer" htmlFor="sidebar-toggle"></label>

<aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-zinc-200/80 flex flex-col z-40 transform -translate-x-full peer-checked:translate-x-0 lg:static lg:translate-x-0 transition-transform duration-300 ease-out shrink-0">

<div className="h-14 flex items-center px-5 border-b border-zinc-200/80 shrink-0">
<span className="text-lg font-medium tracking-tighter text-zinc-900 uppercase">Nexuscore</span>
</div>

<div className="p-4 shrink-0">
<div className="relative flex items-center group">
<iconify-icon className="absolute left-3 text-base text-zinc-400 group-focus-within:text-zinc-600 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-3 py-1.5 bg-zinc-50/50 border border-transparent rounded-md text-sm font-normal text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100/50 transition-all" placeholder="Search..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto px-3 pb-6 space-y-8">

<div>
<h3 className="px-3 text-xs font-medium tracking-tight text-zinc-400 mb-2 uppercase">Account</h3>
<nav className="space-y-0.5">
<a className="flex items-center px-3 py-1.5 text-sm font-normal text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg mr-2.5 text-zinc-400" icon="solar:user-linear"></iconify-icon> Personal Info
                    </a>
<a className="flex items-center px-3 py-1.5 text-sm font-normal text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg mr-2.5 text-zinc-400" icon="solar:pallete-2-linear"></iconify-icon> Appearance
                    </a>
<a className="flex items-center px-3 py-1.5 text-sm font-normal text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg mr-2.5 text-zinc-400" icon="solar:letter-linear"></iconify-icon> Notifications
                    </a>
<a className="flex items-center px-3 py-1.5 text-sm font-normal text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg mr-2.5 text-zinc-400" icon="solar:server-square-linear"></iconify-icon> Vault Space
                    </a>
</nav>
</div>

<div>
<h3 className="px-3 text-xs font-medium tracking-tight text-zinc-400 mb-2 uppercase">Workspace</h3>
<nav className="space-y-0.5">
<a className="flex items-center px-3 py-1.5 text-sm font-normal text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg mr-2.5 text-zinc-400" icon="solar:pulse-2-linear"></iconify-icon> Telemetry
                    </a>
<a className="flex items-center px-3 py-1.5 text-sm font-medium text-zinc-900 bg-zinc-100/80 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg mr-2.5 text-zinc-900" icon="solar:cpu-linear"></iconify-icon> Nexus
                    </a>
<a className="flex items-center px-3 py-1.5 text-sm font-normal text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg mr-2.5 text-zinc-400" icon="solar:card-linear"></iconify-icon> Billing
                    </a>
<a className="flex items-center px-3 py-1.5 text-sm font-normal text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg mr-2.5 text-zinc-400" icon="solar:code-square-linear"></iconify-icon> Auth Tokens
                    </a>
<a className="flex items-center px-3 py-1.5 text-sm font-normal text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg mr-2.5 text-zinc-400" icon="solar:shield-check-linear"></iconify-icon> Permissions
                    </a>
<a className="flex items-center px-3 py-1.5 text-sm font-normal text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg mr-2.5 text-zinc-400" icon="solar:document-text-linear"></iconify-icon> Security Trail
                    </a>
</nav>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">

<header className="lg:hidden flex items-center justify-between h-14 px-4 bg-white border-b border-zinc-200/80 shrink-0">
<label className="p-1 -ml-1 text-zinc-500 hover:text-zinc-900 cursor-pointer transition-colors" htmlFor="sidebar-toggle">
<iconify-icon className="text-xl block" icon="solar:hamburger-menu-linear"></iconify-icon>
</label>
<span className="text-base font-medium tracking-tighter text-zinc-900 uppercase">Nexus</span>
<button className="p-1 -mr-1 text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl block" icon="solar:add-circle-linear"></iconify-icon>
</button>
</header>

<header className="hidden lg:flex h-14 bg-white border-b border-zinc-200/80 items-center justify-between px-8 shrink-0">
<div className="flex items-center text-sm font-medium text-zinc-500 space-x-2">
<span className="hover:text-zinc-900 cursor-pointer transition-colors text-xs uppercase tracking-wider">Workspace</span>
<span className="text-zinc-300">/</span>
<span className="text-zinc-900 text-xs uppercase tracking-wider">Nexus</span>
</div>
<button className="flex items-center px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900">
<iconify-icon className="text-base mr-1.5" icon="solar:add-circle-linear"></iconify-icon> New Token
            </button>
</header>

<main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-10">
<div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">

<div className="flex items-end justify-between">
<h1 className="text-2xl font-medium tracking-tight text-zinc-900">Nexus Overview</h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-white border border-zinc-200/80 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
<div className="flex flex-col h-full justify-between">
<div>
<div className="flex items-center text-sm font-medium text-zinc-500 mb-2">
<iconify-icon className="text-base mr-1.5" icon="solar:server-linear"></iconify-icon> Bandwidth Usage
                                </div>
<div className="text-2xl font-medium tracking-tight text-zinc-900">
                                    42,100<span className="text-sm font-normal text-zinc-400 ml-1">/50,000 GB</span>
</div>
</div>
<div className="mt-8">
<div className="w-full bg-zinc-100 rounded-full h-1 overflow-hidden">
<div className="bg-zinc-900 h-full rounded-full transition-all duration-500" style={{width: '84.2%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200/80 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
<div className="flex flex-col h-full justify-between">
<div>
<div className="flex items-center text-sm font-medium text-zinc-500 mb-2">
<iconify-icon className="text-base mr-1.5" icon="solar:calculator-linear"></iconify-icon> Estimated Run Rate
                                </div>
<div className="text-2xl font-medium tracking-tight text-zinc-900">
                                    $320.75
                                </div>
</div>
<div className="mt-8 flex items-center text-sm font-normal text-zinc-500">
<div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                                Next invoice on Nov 01, 2024
                            </div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200/80 rounded-xl p-5 sm:p-6 shadow-sm relative">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
<div>
<h2 className="text-base font-medium tracking-tight text-zinc-900">Network Throughput</h2>
<p className="text-sm font-normal text-zinc-500 mt-0.5">Aggregated data across all active nodes</p>
</div>
<button className="flex items-center px-3 py-1.5 border border-zinc-200 rounded-md text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors shadow-sm focus:outline-none">
                            Past 14 Days
                            <iconify-icon className="text-base ml-2 text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<div className="relative h-56 sm:h-64 mt-4 w-full">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full border-t border-zinc-100 flex items-start h-0"><span className="text-xs font-medium text-zinc-400 -mt-2 bg-white pr-3">50k</span></div>
<div className="w-full border-t border-zinc-100 flex items-start h-0"><span className="text-xs font-medium text-zinc-400 -mt-2 bg-white pr-3">37.5k</span></div>
<div className="w-full border-t border-zinc-100 flex items-start h-0"><span className="text-xs font-medium text-zinc-400 -mt-2 bg-white pr-3">25k</span></div>
<div className="w-full border-t border-zinc-100 flex items-start h-0"><span className="text-xs font-medium text-zinc-400 -mt-2 bg-white pr-3">12.5k</span></div>
<div className="w-full border-t border-zinc-100 flex items-start h-0"><span className="text-xs font-medium text-zinc-400 -mt-2 bg-white pr-3">0</span></div>
</div>

<div className="absolute inset-0 left-12 flex items-end justify-between pb-px h-full pt-4">

<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer group relative" style={{height: '12%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer" style={{height: '20%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer" style={{height: '48%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer" style={{height: '35%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer" style={{height: '28%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer" style={{height: '52%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer" style={{height: '15%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer hidden sm:block" style={{height: '8%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer hidden sm:block" style={{height: '42%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer hidden sm:block" style={{height: '60%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer hidden md:block" style={{height: '75%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer hidden md:block" style={{height: '35%'}}></div>
<div className="w-2 sm:w-4 lg:w-6 bg-zinc-200 hover:bg-zinc-300 transition-colors rounded-t-sm cursor-pointer hidden lg:block" style={{height: '85%'}}></div>

<div className="w-2 sm:w-4 lg:w-6 bg-zinc-900 rounded-t-sm cursor-pointer relative" style={{height: '98%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Today</div>
</div>
</div>
</div>

<div className="flex justify-between pl-12 mt-4 text-xs font-medium text-zinc-400">
<span>Oct 1</span>
<span>Oct 5</span>
<span>Oct 9</span>
<span className="hidden sm:block">Oct 11</span>
<span className="hidden md:block">Oct 13</span>
<span>Oct 15</span>
</div>
</div>

<div className="bg-white border border-zinc-200/80 rounded-xl overflow-hidden shadow-sm">
<div className="p-5 sm:p-6 border-b border-zinc-200/80 flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-900">Live Event Stream</h2>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr>
<th className="px-5 sm:px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-200/80 bg-zinc-50/50">Time</th>
<th className="px-5 sm:px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-200/80 bg-zinc-50/50">Resource</th>
<th className="px-5 sm:px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-200/80 bg-zinc-50/50">Channel</th>
<th className="px-5 sm:px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-200/80 bg-zinc-50/50 text-right">Ping</th>
<th className="px-5 sm:px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-200/80 bg-zinc-50/50 text-right">Size</th>
<th className="px-5 sm:px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-200/80 bg-zinc-50/50 text-right">State</th>
</tr>
</thead>
<tbody className="text-sm font-normal text-zinc-600">
<tr className="hover:bg-zinc-50/80 transition-colors border-b border-zinc-100 last:border-0 group">
<td className="px-5 sm:px-6 py-3.5 whitespace-nowrap text-zinc-500">Oct 20, 2:14 PM</td>
<td className="px-5 sm:px-6 py-3.5 text-zinc-900 font-medium">/core/auth/verify</td>
<td className="px-5 sm:px-6 py-3.5">WSS</td>
<td className="px-5 sm:px-6 py-3.5 text-right font-mono text-xs">82ms</td>
<td className="px-5 sm:px-6 py-3.5 text-right font-mono text-xs">1.4kb</td>
<td className="px-5 sm:px-6 py-3.5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">200 OK</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/80 transition-colors border-b border-zinc-100 last:border-0 group">
<td className="px-5 sm:px-6 py-3.5 whitespace-nowrap text-zinc-500">Oct 20, 2:10 PM</td>
<td className="px-5 sm:px-6 py-3.5 text-zinc-900 font-medium">/stream/data</td>
<td className="px-5 sm:px-6 py-3.5">gRPC</td>
<td className="px-5 sm:px-6 py-3.5 text-right font-mono text-xs">145ms</td>
<td className="px-5 sm:px-6 py-3.5 text-right font-mono text-xs">12.0kb</td>
<td className="px-5 sm:px-6 py-3.5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">200 OK</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/80 transition-colors border-b border-zinc-100 last:border-0 group">
<td className="px-5 sm:px-6 py-3.5 whitespace-nowrap text-zinc-500">Oct 20, 1:45 PM</td>
<td className="px-5 sm:px-6 py-3.5 text-zinc-900 font-medium">/billing/charge</td>
<td className="px-5 sm:px-6 py-3.5">REST</td>
<td className="px-5 sm:px-6 py-3.5 text-right font-mono text-xs">52ms</td>
<td className="px-5 sm:px-6 py-3.5 text-right font-mono text-xs">0.6kb</td>
<td className="px-5 sm:px-6 py-3.5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-200/60">500 ERR</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/80 transition-colors border-b border-zinc-100 last:border-0 group">
<td className="px-5 sm:px-6 py-3.5 whitespace-nowrap text-zinc-500">Oct 19, 10:30 AM</td>
<td className="px-5 sm:px-6 py-3.5 text-zinc-900 font-medium">/users/sync</td>
<td className="px-5 sm:px-6 py-3.5">REST</td>
<td className="px-5 sm:px-6 py-3.5 text-right font-mono text-xs">210ms</td>
<td className="px-5 sm:px-6 py-3.5 text-right font-mono text-xs">45.2kb</td>
<td className="px-5 sm:px-6 py-3.5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">200 OK</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/80 transition-colors border-b border-zinc-100 last:border-0 group">
<td className="px-5 sm:px-6 py-3.5 whitespace-nowrap text-zinc-500">Oct 18, 5:20 PM</td>
<td className="px-5 sm:px-6 py-3.5 text-zinc-900 font-medium">/reports/generate</td>
<td className="px-5 sm:px-6 py-3.5">REST</td>
<td className="px-5 sm:px-6 py-3.5 text-right font-mono text-xs">1850ms</td>
<td className="px-5 sm:px-6 py-3.5 text-right font-mono text-xs">250.4kb</td>
<td className="px-5 sm:px-6 py-3.5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/60">429 RATE</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
