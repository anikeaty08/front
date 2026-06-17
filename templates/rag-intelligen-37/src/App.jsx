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
      

<nav className="w-16 lg:w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 transition-all duration-300">
<div>

<div className="h-14 flex items-center px-4 lg:px-6 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="lucide:layers" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900 hidden lg:block">NEXUS RAG</span>
</div>
</div>

<div className="p-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-md group" href="#">
<iconify-icon icon="lucide:sparkles" width="18"></iconify-icon>
<span className="hidden lg:block">Query &amp; Chat</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<iconify-icon icon="lucide:files" width="18"></iconify-icon>
<span className="hidden lg:block">Documents</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<iconify-icon icon="lucide:history" width="18"></iconify-icon>
<span className="hidden lg:block">History</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<iconify-icon icon="lucide:settings-2" width="18"></iconify-icon>
<span className="hidden lg:block">Configuration</span>
</a>
</div>
</div>

<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs font-medium">JD</div>
<div className="hidden lg:block">
<p className="text-xs font-medium text-slate-900">John Doe</p>
<p className="text-xs text-slate-400">Engineering</p>
</div>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-14 border-b border-slate-200 flex items-center justify-between px-6 bg-white/80 backdrop-blur-sm z-10 sticky top-0">
<div className="flex items-center gap-2 text-sm">
<span className="text-slate-400">Workspace</span>
<iconify-icon className="text-slate-300" icon="lucide:chevron-right" width="14"></iconify-icon>
<span className="font-medium text-slate-900">Project Alpha</span>
<span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-medium border border-green-100 uppercase tracking-wide ml-2">Active</span>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 rounded-md transition-all shadow-sm">
<iconify-icon icon="lucide:share" width="14"></iconify-icon>
                    Share Session
                </button>
</div>
</header>

<div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

<div className="w-full lg:w-5/12 border-r border-slate-200 flex flex-col bg-slate-50/50">

<div className="p-6 border-b border-slate-200 bg-white">
<h2 className="text-sm font-semibold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
<iconify-icon icon="lucide:database" width="16"></iconify-icon>
                        Knowledge Base
                    </h2>
<div className="group relative w-full h-24 rounded-lg border-2 border-dashed border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all flex flex-col items-center justify-center cursor-pointer mb-6">
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file"/>
<iconify-icon className="text-slate-400 group-hover:text-slate-600 mb-2" icon="lucide:upload-cloud" width="20"></iconify-icon>
<p className="text-xs text-slate-500 font-medium">Drop PDF documents here to embed</p>
<p className="text-[10px] text-slate-400 mt-1">Max 25MB per file</p>
</div>

<div className="space-y-3">

<div className="bg-white border border-slate-200 rounded-md p-3 shadow-sm relative overflow-hidden">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-blue-50 text-blue-600 rounded">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-900 truncate max-w-[140px]">Q3_Financial_Risks.pdf</p>
<p className="text-[10px] text-slate-400">2.4 MB</p>
</div>
</div>
<span className="text-[10px] font-medium text-blue-600 flex items-center gap-1">
<span className="animate-pulse w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    Embedding...
                                </span>
</div>

<div className="flex items-center gap-1 mt-2">
<div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-full rounded-full"></div>
</div>
<div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-full rounded-full"></div>
</div>
<div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-3/4 rounded-full animate-pulse"></div>
</div>
<div className="h-1 flex-1 bg-slate-100 rounded-full"></div>
</div>
<div className="flex justify-between text-[9px] text-slate-400 mt-1 font-medium">
<span>Queued</span>
<span>Extract</span>
<span className="text-blue-600">Embed</span>
<span>Ready</span>
</div>
</div>

<div className="bg-white border border-red-200 rounded-md p-3 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-red-50 text-red-600 rounded">
<iconify-icon icon="lucide:alert-circle" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-900">Technical_Spec_v9.pdf</p>
<p className="text-[10px] text-red-500">File exceeds token limit</p>
</div>
</div>
<button className="text-[10px] font-medium text-slate-600 hover:text-slate-900 underline">Auto-summarize</button>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Library</h3>
<div className="flex items-center gap-2">
<button className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded">
<iconify-icon icon="lucide:filter" width="14"></iconify-icon>
</button>
<button className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded">
<iconify-icon icon="lucide:arrow-down-wide-narrow" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-slate-900 text-white text-[10px] font-medium rounded-full cursor-pointer">All Docs</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-slate-600 hover:border-slate-300 text-[10px] font-medium rounded-full cursor-pointer transition-colors">#finance</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-slate-600 hover:border-slate-300 text-[10px] font-medium rounded-full cursor-pointer transition-colors">#legal</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-slate-600 hover:border-slate-300 text-[10px] font-medium rounded-full cursor-pointer transition-colors">#engineering</span>
</div>

<div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 border-b border-slate-200">
<th className="py-2 px-4 text-[10px] font-semibold text-slate-500 uppercase tracking-wider w-8">
<label className="custom-checkbox cursor-pointer flex items-center justify-center">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-slate-300 rounded flex items-center justify-center transition-colors">
<iconify-icon className="text-white hidden" icon="lucide:check" width="10"></iconify-icon>
</div>
</label>
</th>
<th className="py-2 px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Name</th>
<th className="py-2 px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider text-right">Vectors</th>
<th className="py-2 px-4 text-[10px] font-semibold text-slate-500 uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="group hover:bg-slate-50 transition-colors cursor-pointer">
<td className="py-2.5 px-4">
<label className="custom-checkbox cursor-pointer flex items-center justify-center">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-slate-300 rounded group-hover:border-slate-400 flex items-center justify-center">
<iconify-icon className="text-white hidden" icon="lucide:check" width="10"></iconify-icon>
</div>
</label>
</td>
<td className="py-2.5 px-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:file-text" width="14"></iconify-icon>
<div>
<p className="text-xs font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Annual_Report_2022.pdf</p>
<p className="text-[10px] text-slate-400">Oct 24 • #finance</p>
</div>
</div>
</td>
<td className="py-2.5 px-2 text-right">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-700">1,204</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-900 transition-all">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors cursor-pointer">
<td className="py-2.5 px-4">
<label className="custom-checkbox cursor-pointer flex items-center justify-center">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-slate-300 rounded group-hover:border-slate-400 flex items-center justify-center">
<iconify-icon className="text-white hidden" icon="lucide:check" width="10"></iconify-icon>
</div>
</label>
</td>
<td className="py-2.5 px-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:file-text" width="14"></iconify-icon>
<div>
<p className="text-xs font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Compliance_Guide.pdf</p>
<p className="text-[10px] text-slate-400">Oct 22 • #legal</p>
</div>
</div>
</td>
<td className="py-2.5 px-2 text-right">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-700">845</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-900 transition-all">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="w-full lg:w-7/12 flex flex-col h-full relative">

<div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8 scroll-smooth" id="chat-container">

<div className="flex justify-center">
<span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Today, 10:23 AM</span>
</div>

<div className="flex flex-col items-end gap-2">
<div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-2xl rounded-tr-none max-w-[85%] text-sm leading-relaxed">
                            What are the primary financial risks identified in Q3 regarding supply chain disruptions?
                        </div>
<span className="text-[10px] text-slate-400 pr-1">You</span>
</div>

<div className="flex flex-col items-start gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
</div>
<span className="text-[10px] font-semibold text-slate-900">Nexus AI</span>
</div>
<div className="w-full max-w-[95%]">

<div className="text-sm leading-relaxed text-slate-800 mb-4 typing-cursor">
                                Based on the <strong>Annual_Report_2022.pdf</strong> and the recent <strong>Q3_Financial_Risks.pdf</strong>, the primary risks involve semiconductor shortages affecting production timelines. Specifically, section 4.2 highlights a 15% increase in procurement costs due to logistical bottlenecks in the APAC region. Additionally, there is a noted volatility in raw material pricing which may impact gross margins by approximately 200 basis points if not hedged effectively.
                            </div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">

<div className="bg-white border border-slate-200 rounded-lg p-3 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer group">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400 group-hover:text-indigo-500" icon="lucide:file-text" width="14"></iconify-icon>
<span className="text-xs font-medium text-slate-900 truncate">Q3_Financial_Risks.pdf</span>
</div>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-green-50 text-green-700 border border-green-100">92% Match</span>
</div>
<p className="text-[10px] text-slate-500 line-clamp-2 leading-snug font-mono bg-slate-50 p-1.5 rounded border border-slate-100">
                                        "...procurement costs increased by 15% due to logistical bottlenecks..."
                                    </p>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-3 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer group">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400 group-hover:text-indigo-500" icon="lucide:file-text" width="14"></iconify-icon>
<span className="text-xs font-medium text-slate-900 truncate">Annual_Report_2022.pdf</span>
</div>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-yellow-50 text-yellow-700 border border-yellow-100">78% Match</span>
</div>
<p className="text-[10px] text-slate-500 line-clamp-2 leading-snug font-mono bg-slate-50 p-1.5 rounded border border-slate-100">
                                        "...hedging strategies for raw materials are critical to maintaining margins..."
                                    </p>
</div>
</div>

<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400 hover:text-slate-700 transition-colors">
<iconify-icon icon="lucide:thumbs-up" width="12"></iconify-icon>
                                    Helpful
                                </button>
<button className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400 hover:text-slate-700 transition-colors">
<iconify-icon icon="lucide:thumbs-down" width="12"></iconify-icon>
                                    Not helpful
                                </button>
<button className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400 hover:text-slate-700 transition-colors ml-auto">
<iconify-icon icon="lucide:copy" width="12"></iconify-icon>
                                    Copy
                                </button>
</div>
</div>
</div>
</div>

<div className="p-6 bg-white border-t border-slate-200 sticky bottom-0 z-20">
<div className="relative group">

<div className="absolute -top-10 right-0 flex items-center gap-2">
<div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] text-slate-500 font-medium">
<span>Top-k: 3</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] text-slate-500 font-medium">
<span>Model: GPT-4o</span>
</div>
</div>
<div className="w-full bg-white border border-slate-300 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all flex flex-col p-2">
<textarea className="w-full resize-none bg-transparent border-none focus:ring-0 text-sm p-2 min-h-[50px] max-h-[120px] placeholder:text-slate-400" placeholder="Ask a question about your documents..."></textarea>
<div className="flex items-center justify-between px-2 pt-2 border-t border-slate-100 mt-1">
<div className="flex items-center gap-2">
<button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors" title="Attach">
<iconify-icon icon="lucide:paperclip" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors" title="Prompt Library">
<iconify-icon icon="lucide:terminal" width="16"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-slate-400 hidden sm:inline">Use <kbd className="font-sans border border-slate-200 rounded px-1 bg-slate-50">Shift + Enter</kbd> for new line</span>
<button className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg p-2 flex items-center justify-center transition-colors shadow-sm">
<iconify-icon icon="lucide:arrow-up" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="text-center mt-3">
<p className="text-[10px] text-slate-400">AI responses can be inaccurate. Verify with source documents.</p>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
