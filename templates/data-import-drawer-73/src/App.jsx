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



        // Drawer Toggle Logic
        function toggleDrawer(show) {
            const drawer = document.getElementById('drawer');
            const backdrop = document.getElementById('backdrop');
            
            if (show) {
                // Show
                backdrop.classList.remove('pointer-events-none', 'opacity-0');
                backdrop.classList.add('opacity-100');
                
                drawer.classList.remove('translate-x-full');
                drawer.classList.add('translate-x-0');
            } else {
                // Hide
                backdrop.classList.remove('opacity-100');
                backdrop.classList.add('opacity-0', 'pointer-events-none');
                
                drawer.classList.remove('translate-x-0');
                drawer.classList.add('translate-x-full');
            }
        }

        // Accordion/Collapse Logic
        function toggleAccordion(contentId, btn) {
            const content = document.getElementById(contentId);
            const icon = btn.querySelector('[data-icon="lucide:chevron-down"]');
            
            // Toggle Hidden State
            if (content.classList.contains('hidden')) {
                // Open
                content.classList.remove('hidden');
                // Rotate Icon
                icon.style.transform = 'rotate(180deg)';
            } else {
                // Close
                content.classList.add('hidden');
                // Reset Icon
                icon.style.transform = 'rotate(0deg)';
            }
        }
    
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
      

<div className="text-center space-y-4">
<h1 className="text-2xl font-medium tracking-tight text-zinc-900">System Files</h1>
<p className="text-zinc-500 text-sm max-w-md mx-auto">Click the button below to view the file processing logs and detailed data exports in the inspector.</p>
<button className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors shadow-sm ring-1 ring-zinc-900/5" onclick="toggleDrawer(true)">
<span className="iconify" data-icon="lucide:panel-right-open"></span>
            Open Data Inspector
        </button>
</div>

<div className="fixed inset-0 bg-zinc-950/20 backdrop-blur-[2px] z-40 transition-opacity duration-300 opacity-100" id="backdrop" onclick="toggleDrawer(false)"></div>

<div className="fixed top-0 right-0 h-full w-full max-w-3xl bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-x-0 flex flex-col border-l border-zinc-200" id="drawer">

<header className="flex-none px-6 py-5 border-b border-zinc-100 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
<div>
<h2 className="text-lg font-medium tracking-tight text-zinc-900 flex items-center gap-2">
<span className="iconify text-zinc-400" data-icon="lucide:folder-git-2"></span>
                    File Imports
                </h2>
<p className="text-xs text-zinc-500 mt-1">Manage uploaded datasets and inspect row-level data.</p>
</div>
<div className="flex items-center gap-2">

<button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-all" onclick="toggleDrawer(false)">
<span className="iconify w-5 h-5" data-icon="lucide:x"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scroll bg-white">
<div className="flex flex-col">

<div className="group border-b border-zinc-100 last:border-0">
<button className="w-full flex items-center justify-between p-4 pl-6 hover:bg-zinc-50 transition-colors text-left" onclick="toggleAccordion('file-1', this)">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded border border-zinc-200 bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-zinc-500">
<span className="iconify" data-icon="lucide:file-spreadsheet"></span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900">finance_q3_report.csv</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-xs text-zinc-500 font-mono">2023-10-24</span>
<span className="w-0.5 h-0.5 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500">count = 0</span>
</div>
</div>
</div>
<div className="flex items-center">

<span className="iconify w-4 h-4 text-zinc-400 transition-transform duration-300" data-icon="lucide:chevron-down"></span>
</div>
</button>

<div className="hidden bg-zinc-50/50 border-t border-zinc-100 inner-content" id="file-1">

<div className="p-2">
<div className="border border-zinc-200 rounded-lg bg-white overflow-hidden shadow-sm">
<table className="w-full text-left text-xs">
<thead className="bg-zinc-50 border-b border-zinc-100 text-zinc-500 font-medium">
<tr>
<th className="py-2.5 px-4 font-medium">Transaction ID</th>
<th className="py-2.5 px-4 font-medium">Date</th>
<th className="py-2.5 px-4 font-medium text-right">Amount</th>
<th className="py-2.5 px-4 font-medium">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100 text-zinc-700">
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="py-2.5 px-4 font-mono text-zinc-500">#TRX-9982</td>
<td className="py-2.5 px-4">Oct 24, 2023</td>
<td className="py-2.5 px-4 text-right font-medium">$1,240.00</td>
<td className="py-2.5 px-4"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="py-2.5 px-4 font-mono text-zinc-500">#TRX-9983</td>
<td className="py-2.5 px-4">Oct 24, 2023</td>
<td className="py-2.5 px-4 text-right font-medium">$342.50</td>
<td className="py-2.5 px-4"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="py-2.5 px-4 font-mono text-zinc-500">#TRX-9984</td>
<td className="py-2.5 px-4">Oct 25, 2023</td>
<td className="py-2.5 px-4 text-right font-medium">$2,100.00</td>
<td className="py-2.5 px-4"><div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div></td>
</tr>
</tbody>
</table>

<div className="bg-zinc-50 border-t border-zinc-100 px-3 py-2 flex items-center justify-between">
<span className="text-[10px] text-zinc-500">Showing 3 of 128 rows</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded hover:bg-white hover:shadow-sm hover:border-zinc-200 border border-transparent transition-all disabled:opacity-50 text-zinc-500">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:chevron-left"></span>
</button>
<span className="text-[10px] font-medium text-zinc-700 px-1">1</span>
<button className="p-1 rounded hover:bg-white hover:shadow-sm hover:border-zinc-200 border border-transparent transition-all text-zinc-500">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:chevron-right"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group border-b border-zinc-100 last:border-0">
<button className="w-full flex items-center justify-between p-4 pl-6 hover:bg-zinc-50 transition-colors text-left" onclick="toggleAccordion('file-2', this)">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded border border-zinc-200 bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-zinc-500">
<span className="iconify" data-icon="lucide:users"></span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900">customers_export_v2.json</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-xs text-zinc-500 font-mono">2023-10-25</span>
<span className="w-0.5 h-0.5 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500">count = 7</span>
</div>
</div>
</div>
<div className="flex items-center">

<span className="iconify w-4 h-4 text-zinc-400 transition-transform duration-300 rotate-180" data-icon="lucide:chevron-down"></span>
</div>
</button>

<div className="bg-zinc-50/50 border-t border-zinc-100 inner-content" id="file-2">

<div className="p-2">
<div className="border border-zinc-200 rounded-lg bg-white overflow-hidden shadow-sm">
<table className="w-full text-left text-xs">
<thead className="bg-zinc-50 border-b border-zinc-100 text-zinc-500 font-medium">
<tr>
<th className="py-2.5 px-4 font-medium w-8">
<input className="rounded border-zinc-300 text-zinc-900 focus:ring-0 focus:ring-offset-0 w-3 h-3 align-middle bg-white" type="checkbox"/>
</th>
<th className="py-2.5 px-4 font-medium">Customer</th>
<th className="py-2.5 px-4 font-medium">Email</th>
<th className="py-2.5 px-4 font-medium">Segment</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100 text-zinc-700">
<tr className="hover:bg-zinc-50/50 transition-colors group/row">
<td className="py-2.5 px-4"><input className="rounded border-zinc-300 text-zinc-900 focus:ring-0 focus:ring-offset-0 w-3 h-3 align-middle bg-white" type="checkbox"/></td>
<td className="py-2.5 px-4 font-medium text-zinc-900">Alex Morgan</td>
<td className="py-2.5 px-4 text-zinc-500">alex.m@example.com</td>
<td className="py-2.5 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-zinc-100 text-zinc-600">Enterprise</span></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors group/row">
<td className="py-2.5 px-4"><input className="rounded border-zinc-300 text-zinc-900 focus:ring-0 focus:ring-offset-0 w-3 h-3 align-middle bg-white" type="checkbox"/></td>
<td className="py-2.5 px-4 font-medium text-zinc-900">Jordan Lee</td>
<td className="py-2.5 px-4 text-zinc-500">jordan.l@company.net</td>
<td className="py-2.5 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-zinc-100 text-zinc-600">SMB</span></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors group/row">
<td className="py-2.5 px-4"><input className="rounded border-zinc-300 text-zinc-900 focus:ring-0 focus:ring-offset-0 w-3 h-3 align-middle bg-white" type="checkbox"/></td>
<td className="py-2.5 px-4 font-medium text-zinc-900">Casey Smith</td>
<td className="py-2.5 px-4 text-zinc-500">casey@studio.io</td>
<td className="py-2.5 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-zinc-100 text-zinc-600">Freelance</span></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors group/row">
<td className="py-2.5 px-4"><input className="rounded border-zinc-300 text-zinc-900 focus:ring-0 focus:ring-offset-0 w-3 h-3 align-middle bg-white" type="checkbox"/></td>
<td className="py-2.5 px-4 font-medium text-zinc-900">Taylor Reed</td>
<td className="py-2.5 px-4 text-zinc-500">taylor@reed.co</td>
<td className="py-2.5 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-zinc-100 text-zinc-600">Enterprise</span></td>
</tr>
</tbody>
</table>

<div className="bg-zinc-50 border-t border-zinc-100 px-3 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[10px] text-zinc-500">Page 1 of 8</span>
</div>
<div className="flex items-center">
<button className="h-6 w-6 flex items-center justify-center rounded hover:bg-white hover:shadow-sm hover:border-zinc-200 border border-transparent transition-all disabled:opacity-50 text-zinc-400 hover:text-zinc-700">
<span className="iconify w-3 h-3" data-icon="lucide:chevrons-left"></span>
</button>
<button className="h-6 w-6 flex items-center justify-center rounded hover:bg-white hover:shadow-sm hover:border-zinc-200 border border-transparent transition-all disabled:opacity-50 text-zinc-400 hover:text-zinc-700">
<span className="iconify w-3 h-3" data-icon="lucide:chevron-left"></span>
</button>
<span className="text-[10px] font-medium text-zinc-700 px-2">1</span>
<button className="h-6 w-6 flex items-center justify-center rounded hover:bg-white hover:shadow-sm hover:border-zinc-200 border border-transparent transition-all text-zinc-500 hover:text-zinc-900">
<span className="iconify w-3 h-3" data-icon="lucide:chevron-right"></span>
</button>
<button className="h-6 w-6 flex items-center justify-center rounded hover:bg-white hover:shadow-sm hover:border-zinc-200 border border-transparent transition-all text-zinc-500 hover:text-zinc-900">
<span className="iconify w-3 h-3" data-icon="lucide:chevrons-right"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group border-b border-zinc-100 last:border-0">
<button className="w-full flex items-center justify-between p-4 pl-6 hover:bg-zinc-50 transition-colors text-left" onclick="toggleAccordion('file-3', this)">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded border border-zinc-200 bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-zinc-500">
<span className="iconify" data-icon="lucide:file-code-2"></span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900">app_logs_error.txt</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-xs text-zinc-500 font-mono">2023-10-23</span>
<span className="w-0.5 h-0.5 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500">count = 24</span>
</div>
</div>
</div>
<div className="flex items-center">

<span className="iconify w-4 h-4 text-zinc-400 transition-transform duration-300" data-icon="lucide:chevron-down"></span>
</div>
</button>
<div className="hidden bg-zinc-50/50 border-t border-zinc-100 inner-content" id="file-3">
<div className="p-4 text-center">
<p className="text-xs text-zinc-400">Log data preview not available in table format.</p>
</div>
</div>
</div>

<div className="group border-b border-zinc-100 last:border-0">
<button className="w-full flex items-center justify-between p-4 pl-6 hover:bg-zinc-50 transition-colors text-left" onclick="toggleAccordion('file-4', this)">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded border border-zinc-200 bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-zinc-500">
<span className="iconify" data-icon="lucide:image"></span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900">assets_manifest.yaml</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-xs text-zinc-500 font-mono">2023-10-21</span>
<span className="w-0.5 h-0.5 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500">count = 0</span>
</div>
</div>
</div>
<div className="flex items-center">

<span className="iconify w-4 h-4 text-zinc-400 transition-transform duration-300" data-icon="lucide:chevron-down"></span>
</div>
</button>
<div className="hidden bg-zinc-50/50 border-t border-zinc-100 inner-content" id="file-4">
<div className="p-4 text-center">
<p className="text-xs text-zinc-400">Loading preview...</p>
</div>
</div>
</div>
</div>
</div>

<footer className="flex-none p-4 border-t border-zinc-100 bg-white z-10">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-500">Displaying 4 of 24 files</span>
<nav className="flex items-center gap-1">
<button className="px-2 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors disabled:opacity-50" disabled="">
                        Previous
                    </button>
<button className="w-7 h-7 flex items-center justify-center rounded-md text-xs font-medium bg-zinc-100 text-zinc-900 shadow-sm ring-1 ring-zinc-200/50">1</button>
<button className="w-7 h-7 flex items-center justify-center rounded-md text-xs font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors">2</button>
<button className="w-7 h-7 flex items-center justify-center rounded-md text-xs font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors">3</button>
<span className="text-zinc-300 text-xs px-1">...</span>
<button className="w-7 h-7 flex items-center justify-center rounded-md text-xs font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors">6</button>
<button className="px-2 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors">
                        Next
                    </button>
</nav>
</div>
</footer>
</div>


    </>
  );
}
