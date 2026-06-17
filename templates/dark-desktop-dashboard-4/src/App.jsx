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
      

<aside className="w-64 bg-[#09090b] border-r border-white/5 flex flex-col flex-shrink-0">

<div className="h-14 flex items-center px-5 border-b border-white/5">
<div className="flex items-center gap-3 text-white font-medium tracking-tight">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black shadow-[0_0_10px_rgba(255,255,255,0.2)]">
<iconify-icon icon="lucide:ghost" strokeWidth="2" width="14"></iconify-icon>
</div>
                PHANTOM
            </div>
</div>

<nav className="flex-1 overflow-y-auto p-3 space-y-6 flex flex-col">

<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-all group">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:layout-grid" strokeWidth="1.5" width="16"></iconify-icon>
<span className="font-medium">Dashboard</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 bg-white/5 text-white rounded-md transition-all phantom-border">
<iconify-icon className="text-white" icon="lucide:folder-open" strokeWidth="1.5" width="16"></iconify-icon>
<span className="font-medium">Documents</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-all group">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:clock" strokeWidth="1.5" width="16"></iconify-icon>
<span className="font-medium">Recents</span>
</button>
</div>

<div>
<h3 className="px-3 text-[10px] font-semibold text-neutral-600 uppercase tracking-widest mb-3">Timeline</h3>
<div className="space-y-1">

<div className="space-y-1">
<button className="w-full flex items-center justify-between px-3 py-1.5 text-neutral-300 hover:bg-white/5 rounded-md group transition-colors">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-600 group-hover:text-neutral-400" icon="lucide:chevron-down" width="14"></iconify-icon>
<span className="font-medium text-xs">2023</span>
</div>
</button>

<div className="relative pl-3 ml-4 space-y-0.5">
<div className="absolute left-0 top-1 bottom-1 w-px bg-white/5"></div>
<button className="w-full text-left px-3 py-1.5 text-neutral-500 hover:text-white hover:bg-white/5 rounded-md text-xs font-medium flex justify-between items-center group transition-colors">
                                October
                                <span className="hidden group-hover:block text-[10px] bg-white/10 text-white px-1.5 py-0.5 rounded">12</span>
</button>
<button className="w-full text-left px-3 py-1.5 text-white bg-white/5 rounded-md text-xs font-medium flex justify-between items-center phantom-border">
                                November
                                <span className="text-[10px] bg-white text-black px-1.5 py-0.5 rounded font-bold">45</span>
</button>
<button className="w-full text-left px-3 py-1.5 text-neutral-500 hover:text-white hover:bg-white/5 rounded-md text-xs font-medium flex justify-between items-center group transition-colors">
                                December
                                <span className="hidden group-hover:block text-[10px] bg-white/10 text-white px-1.5 py-0.5 rounded">8</span>
</button>
</div>
</div>
</div>
</div>

<div>
<h3 className="px-3 text-[10px] font-semibold text-neutral-600 uppercase tracking-widest mb-3">Labels</h3>
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-xs">Finance</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
<span className="text-xs">Contracts</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.4)]"></div>
<span className="text-xs">Legal</span>
</button>
</div>
</div>

<div className="mt-auto px-1 pt-4">
<button className="w-full group flex items-center gap-3 px-3 py-3 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-lg hover:border-white/20 transition-all">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white border border-white/5 group-hover:scale-105 transition-transform">
<iconify-icon icon="lucide:monitor-down" width="16"></iconify-icon>
</div>
<div className="flex flex-col items-start">
<span className="text-xs font-medium text-white">Install App</span>
<span className="text-[10px] text-neutral-500">PC / Mac Version</span>
</div>
</button>
</div>
</nav>

<div className="p-4 border-t border-white/5">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500">Storage</span>
<span className="text-xs text-white font-medium">75%</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
<div className="bg-white h-1 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]" style={{width: '75%'}}></div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#09090b]">

<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-10 bg-[#09090b]/80 backdrop-blur-md">

<div className="flex items-center gap-2 text-neutral-500 text-xs">
<span className="hover:text-white cursor-pointer transition-colors">Archives</span>
<iconify-icon className="text-neutral-700" icon="lucide:chevron-right" width="12"></iconify-icon>
<span className="hover:text-white cursor-pointer transition-colors">2023</span>
<iconify-icon className="text-neutral-700" icon="lucide:chevron-right" width="12"></iconify-icon>
<span className="font-medium text-white bg-white/5 px-2 py-0.5 rounded border border-white/5">November</span>
</div>

<div className="flex-1 max-w-lg mx-6 relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-white transition-colors" icon="lucide:search" width="14"></iconify-icon>
<input className="w-full phantom-input text-white text-xs rounded-md pl-9 pr-4 py-2 focus:outline-none placeholder:text-neutral-600 transition-all" placeholder="Search files, context, tags..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
<kbd className="hidden sm:inline-block border border-white/10 bg-white/5 rounded px-1.5 py-0.5 text-[10px] text-neutral-500 font-sans group-focus-within:text-neutral-300">⌘K</kbd>
</div>
</div>

<div className="flex items-center gap-3">
<button className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
<iconify-icon icon="lucide:sliders-horizontal" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<div className="h-4 w-px bg-white/10"></div>
<button className="flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)]">
<iconify-icon icon="lucide:arrow-up-circle" width="14"></iconify-icon>
                    Upload
                </button>
</div>
</header>

<div className="px-6 py-5 flex items-center justify-between">
<h1 className="text-lg font-medium text-white tracking-tight">Documents</h1>
<div className="flex items-center gap-2">
<div className="flex bg-white/5 p-0.5 rounded-lg border border-white/5">
<button className="p-1.5 bg-white/10 rounded-md text-white shadow-sm border border-white/5">
<iconify-icon icon="lucide:list" width="14"></iconify-icon>
</button>
<button className="p-1.5 text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="lucide:layout-grid" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 pb-6">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<th className="py-3 pl-2 w-10">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-neutral-700 rounded bg-transparent flex items-center justify-center transition-all hover:border-neutral-500">
<svg className="w-2.5 h-2.5 text-black hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path></svg>
</div>
</label>
</th>
<th className="py-3 font-medium">Name</th>
<th className="py-3 font-medium">Date</th>
<th className="py-3 font-medium">Format</th>
<th className="py-3 font-medium">Size</th>
<th className="py-3 font-medium text-right"></th>
</tr>
</thead>
<tbody className="text-sm text-neutral-300">

<tr className="group hover:bg-white/[0.02] border-b border-white/5 transition-colors relative">
<td className="py-3 pl-2 relative">

<div className="absolute left-0 top-3 bottom-3 w-0.5 bg-white rounded-r"></div>
<label className="custom-checkbox flex items-center cursor-pointer">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-neutral-700 rounded bg-transparent flex items-center justify-center transition-all">
<svg className="w-2.5 h-2.5 text-black hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path></svg>
</div>
</label>
</td>
<td className="py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-red-400 shadow-sm group-hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
</div>
<div>
<div className="font-medium text-white">Financial_Report_Q3.pdf</div>
<div className="text-[10px] text-neutral-500 flex gap-2 mt-0.5">
<span>v2.4</span>
<span className="w-px h-3 bg-white/10"></span>
<span className="text-blue-400">3 matches</span>
</div>
</div>
</div>
</td>
<td className="py-3 text-xs text-neutral-500">14 Nov 2023</td>
<td className="py-3"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/5 text-neutral-400 border border-white/5">PDF</span></td>
<td className="py-3 text-xs text-neutral-500 font-mono">2.4 MB</td>
<td className="py-3 text-right pr-2">
<button className="text-neutral-500 hover:text-white p-1 rounded-md hover:bg-white/5 transition-all">
<iconify-icon icon="lucide:more-vertical" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] border-b border-white/5 transition-colors">
<td className="py-3 pl-2">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-neutral-700 rounded bg-transparent flex items-center justify-center transition-all hover:border-neutral-500">
<svg className="w-2.5 h-2.5 text-black hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path></svg>
</div>
</label>
</td>
<td className="py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shadow-sm group-hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:file-code-2" width="16"></iconify-icon>
</div>
<span className="font-medium text-neutral-300 group-hover:text-white transition-colors">Contract_Alpha_v2.docx</span>
</div>
</td>
<td className="py-3 text-xs text-neutral-500">12 Nov 2023</td>
<td className="py-3"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/5 text-neutral-400 border border-white/5">DOCX</span></td>
<td className="py-3 text-xs text-neutral-500 font-mono">845 KB</td>
<td className="py-3 text-right pr-2">
<button className="text-neutral-500 hover:text-white p-1 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="lucide:more-vertical" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] border-b border-white/5 transition-colors">
<td className="py-3 pl-2">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-neutral-700 rounded bg-transparent flex items-center justify-center transition-all hover:border-neutral-500">
<svg className="w-2.5 h-2.5 text-black hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path></svg>
</div>
</label>
</td>
<td className="py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shadow-sm group-hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:table-2" width="16"></iconify-icon>
</div>
<span className="font-medium text-neutral-300 group-hover:text-white transition-colors">Marketing_Budget_2024.xlsx</span>
</div>
</td>
<td className="py-3 text-xs text-neutral-500">10 Nov 2023</td>
<td className="py-3"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/5 text-neutral-400 border border-white/5">XLSX</span></td>
<td className="py-3 text-xs text-neutral-500 font-mono">1.2 MB</td>
<td className="py-3 text-right pr-2">
<button className="text-neutral-500 hover:text-white p-1 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="lucide:more-vertical" width="16"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</main>

<aside className="w-80 bg-[#09090b] border-l border-white/5 flex flex-col flex-shrink-0 z-20">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-5">
<span className="font-medium text-neutral-200">Inspector</span>
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="lucide:x" width="16"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-5">

<div className="phantom-card rounded-xl p-6 mb-6 flex flex-col items-center group relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/5 blur-[40px] rounded-full pointer-events-none"></div>
<div className="relative w-16 h-16 bg-[#18181b] rounded-xl shadow-lg border border-white/10 flex items-center justify-center text-red-400 mb-4 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="lucide:file-text" strokeWidth="1" width="32"></iconify-icon>
</div>
<h2 className="relative font-medium text-white text-center leading-tight mb-1">Financial_Report_Q3.pdf</h2>
<span className="relative text-xs text-neutral-500 font-mono">PDF • 2.4 MB</span>
<div className="relative flex gap-2 mt-5 w-full">
<button className="flex-1 bg-white text-black py-1.5 rounded-md text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-lg">Open</button>
<button className="flex-1 bg-white/5 border border-white/10 text-neutral-300 py-1.5 rounded-md text-xs font-medium hover:bg-white/10 hover:text-white transition-colors">Share</button>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-3">
<h3 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest">In-File Context</h3>
<span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded font-medium">3 found</span>
</div>
<div className="relative mb-4">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500" icon="lucide:search" width="12"></iconify-icon>
<input className="w-full bg-[#121214] border border-white/10 text-white text-xs rounded-md pl-8 pr-2 py-1.5 focus:outline-none focus:border-white/20 shadow-inner" type="text" value="revenue stream"/>
</div>
<div className="space-y-3">

<div className="p-3 rounded-lg border border-blue-500/20 bg-blue-500/5 cursor-pointer hover:bg-blue-500/10 transition-colors group">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-medium text-blue-400 flex items-center gap-1">
<iconify-icon icon="lucide:file" width="10"></iconify-icon>
                                Page 4
                            </span>
<span className="text-[10px] text-neutral-600">Para 2</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                            ...the global <span className="text-white bg-blue-500/20 px-0.5 rounded">revenue stream</span> has increased by 12% compared to...
                        </p>
</div>

<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors cursor-pointer group">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-medium text-neutral-500 flex items-center gap-1">
<iconify-icon icon="lucide:file" width="10"></iconify-icon>
                                Page 12
                            </span>
<span className="text-[10px] text-neutral-600">Table 3</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                            Detailed analysis of <span className="text-white bg-white/10 px-0.5 rounded">revenue stream</span> by region...
                        </p>
</div>
</div>
</div>

<div>
<h3 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mb-4">Properties</h3>
<div className="space-y-4">
<div className="flex justify-between items-center pb-2 border-b border-white/5">
<span className="text-xs text-neutral-500">Author</span>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-neutral-700"></div>
<span className="text-xs text-neutral-300 font-medium">Jean Dupont</span>
</div>
</div>
<div className="flex justify-between items-center pb-2 border-b border-white/5">
<span className="text-xs text-neutral-500">Modified</span>
<span className="text-xs text-neutral-300 font-medium font-mono">14 Nov, 10:45</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-500">Tags</span>
<div className="flex gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.3)]"></span>
<span className="w-2 h-2 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.3)]"></span>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-[#09090b]">
<button className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/5 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400 text-neutral-400 py-2 rounded-md text-xs font-medium transition-all group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:trash-2" width="14"></iconify-icon>
                Archive Document
            </button>
</div>
</aside>

    </>
  );
}
