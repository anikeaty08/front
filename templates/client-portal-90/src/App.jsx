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
      
<div className="flex h-full">

<aside className="w-[260px] flex-shrink-0 flex flex-col border-r border-white/5 bg-[#080808] p-4 gap-6">

<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 border border-white/10 flex items-center justify-center text-white font-semibold text-xs tracking-tighter">
                    AC
                </div>
<div className="text-left">
<div className="text-[10px] font-medium text-zinc-500">Client Portal</div>
<div className="text-sm font-semibold text-white tracking-tight">Acme Corp.</div>
</div>
</div>

<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white border border-white/5 transition-all text-sm font-medium" href="#">
<iconify-icon height="18" icon="solar:widget-linear" width="18"></iconify-icon>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-medium" href="#">
<iconify-icon height="18" icon="solar:folder-with-files-linear" width="18"></iconify-icon>
                    Projects
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-medium" href="#">
<iconify-icon height="18" icon="solar:bill-list-linear" width="18"></iconify-icon>
                    Invoices
                    <span className="ml-auto text-[10px] bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded border border-red-500/20">1 Due</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-medium" href="#">
<iconify-icon height="18" icon="solar:gallery-wide-linear" width="18"></iconify-icon>
                    Assets
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-medium" href="#">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
                    Contracts
                </a>
</nav>

<div className="bg-[#111] border border-white/5 rounded-xl p-4 space-y-3">
<div className="flex items-center gap-3">
<img alt="Account Manager" className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/100?img=12"/>
<div>
<div className="text-xs font-medium text-white">Alex Morgan</div>
<div className="text-[10px] text-zinc-500">Project Lead</div>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 text-xs text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg py-2 transition-colors">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
                    Book a call
                </button>
</div>

<div className="flex items-center justify-between px-2 pt-2 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">SM</div>
<div className="text-xs text-zinc-400">Sarah Miller</div>
</div>
<iconify-icon className="text-zinc-600 hover:text-zinc-400 cursor-pointer" icon="solar:settings-linear"></iconify-icon>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-[#050505] overflow-hidden">

<header className="px-8 py-6 flex-shrink-0 border-b border-white/5 bg-[#050505]/50 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
<span className="hover:text-zinc-300 cursor-pointer">Portal</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-300">Brand Rebrand 2024</span>
</div>
<h1 className="text-xl font-semibold text-white tracking-tight">Project Overview</h1>
</div>
<div className="flex items-center gap-3">
<span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                            Active
                        </span>
<div className="h-8 w-px bg-white/10 mx-1"></div>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-zinc-500 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#050505]"></span>
</button>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 max-w-7xl mx-auto">

<div className="space-y-8">

<div className="p-1 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10">
<div className="bg-[#0A0A0A] rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:verified-check-linear" width="100"></iconify-icon>
</div>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
<iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-white">Approval Required</h3>
<p className="text-sm text-zinc-500">Brand Identity Guidelines v3</p>
</div>
</div>
<span className="text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded border border-orange-400/20">Action Needed</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-xl">
                                    The team has finalized the typography and color palette based on your last feedback. Please review the attached PDF and approve to proceed to the Web Design phase.
                                </p>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-zinc-200 text-sm font-semibold rounded-lg transition-all">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
                                        Review Files
                                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/5 text-zinc-300 text-sm font-medium rounded-lg border border-white/10 transition-all">
                                        Download PDF
                                    </button>
</div>
</div>
</div>

<section>
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:sort-by-time-linear"></iconify-icon>
                                Project Progress
                            </h3>
<div className="border border-white/5 rounded-xl bg-[#0A0A0A] p-6">
<div className="relative">
<div className="absolute left-6 top-0 bottom-0 w-px bg-white/5"></div>

<div className="relative flex gap-6 pb-8">
<div className="relative z-10 w-12 flex-shrink-0 flex justify-center">
<div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-500">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
<div className="pt-0.5">
<div className="text-sm font-medium text-zinc-300">Discovery Phase</div>
<div className="text-xs text-zinc-600 mt-1">Completed on Aug 24</div>
</div>
</div>

<div className="relative flex gap-6 pb-8">
<div className="relative z-10 w-12 flex-shrink-0 flex justify-center">
<div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
</div>
</div>
<div className="pt-0.5 w-full">
<div className="flex justify-between items-center mb-2">
<div className="text-sm font-medium text-white">Brand Identity</div>
<span className="text-[10px] text-blue-400">In Progress</span>
</div>
<div className="w-full h-1.5 bg-[#161616] rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[85%] rounded-full"></div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="p-2 bg-[#111] rounded border border-white/5 text-center">
<div className="text-[10px] text-zinc-500">Concept</div>
<div className="text-xs text-green-400">Done</div>
</div>
<div className="p-2 bg-[#111] rounded border border-white/5 text-center">
<div className="text-[10px] text-zinc-500">Refinement</div>
<div className="text-xs text-green-400">Done</div>
</div>
<div className="p-2 bg-blue-500/5 rounded border border-blue-500/20 text-center">
<div className="text-[10px] text-blue-300">Guidelines</div>
<div className="text-xs text-white">Reviewing</div>
</div>
</div>
</div>
</div>

<div className="relative flex gap-6">
<div className="relative z-10 w-12 flex-shrink-0 flex justify-center">
<div className="w-6 h-6 rounded-full bg-[#161616] border border-white/10 flex items-center justify-center text-zinc-600">
<iconify-icon icon="solar:laptop-linear" width="12"></iconify-icon>
</div>
</div>
<div className="pt-0.5">
<div className="text-sm font-medium text-zinc-500">Web Design &amp; Dev</div>
<div className="text-xs text-zinc-700 mt-1">Scheduled Oct 01</div>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:folder-share-linear"></iconify-icon>
                                    Recent Deliverables
                                </h3>
<button className="text-xs text-zinc-500 hover:text-white transition-colors">View all files</button>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="group p-3 bg-[#0A0A0A] border border-white/5 rounded-xl hover:border-white/10 transition-all hover:bg-[#0F0F0F] cursor-pointer">
<div className="flex items-start justify-between mb-8">
<div className="w-10 h-10 rounded-lg bg-[#161616] border border-white/5 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:figma-file-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-600 hover:text-white" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-200 mb-1 group-hover:text-white">Logo_Source_Files.fig</h4>
<p className="text-[10px] text-zinc-600">Uploaded 2 days ago</p>
</div>
</div>

<div className="group p-3 bg-[#0A0A0A] border border-white/5 rounded-xl hover:border-white/10 transition-all hover:bg-[#0F0F0F] cursor-pointer">
<div className="flex items-start justify-between mb-8">
<div className="w-10 h-10 rounded-lg bg-[#161616] border border-white/5 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-600 hover:text-white" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-200 mb-1 group-hover:text-white">Strategy_Deck_v2.pdf</h4>
<p className="text-[10px] text-zinc-600">Uploaded 5 days ago</p>
</div>
</div>
</div>
</section>
</div>

<aside className="space-y-6">

<div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-4">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Financials</h3>
<div className="mb-4">
<div className="text-[10px] text-zinc-400 mb-1">Total Budget</div>
<div className="flex items-end gap-2">
<span className="text-xl font-semibold text-white tracking-tight">$24,500</span>
<span className="text-xs text-zinc-500 mb-1">USD</span>
</div>
</div>
<div className="p-3 bg-[#111] rounded-lg border border-white/5 mb-3">
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-zinc-300">Next Invoice</span>
<span className="text-[10px] px-1.5 py-0.5 bg-zinc-800 text-zinc-400 rounded">#INV-204</span>
</div>
<div className="flex justify-between items-end">
<span className="text-sm font-medium text-white">$5,000.00</span>
<span className="text-[10px] text-orange-400">Due in 3 days</span>
</div>
</div>
<button className="w-full py-2 text-xs font-medium text-zinc-400 hover:text-white border border-dashed border-white/10 hover:border-white/20 rounded-lg transition-all">
                                View all invoices
                            </button>
</div>

<div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-4">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Quick Actions</h3>
<div className="space-y-2">
<button className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#111] hover:bg-[#161616] border border-white/5 transition-colors group text-left">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500 group-hover:text-blue-400" icon="solar:upload-minimalistic-linear"></iconify-icon>
<span className="text-xs text-zinc-300 group-hover:text-white">Upload Assets</span>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-500" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#111] hover:bg-[#161616] border border-white/5 transition-colors group text-left">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500 group-hover:text-green-400" icon="solar:chat-line-linear"></iconify-icon>
<span className="text-xs text-zinc-300 group-hover:text-white">Send Message</span>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-500" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</button>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Shared Links</h3>
<div className="space-y-3">
<a className="flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-colors group" href="#">
<div className="w-6 h-6 rounded bg-[#161616] flex items-center justify-center border border-white/5 group-hover:border-white/20">
<iconify-icon icon="solar:link-linear" width="12"></iconify-icon>
</div>
                                    Live Staging Site
                                </a>
<a className="flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-colors group" href="#">
<div className="w-6 h-6 rounded bg-[#161616] flex items-center justify-center border border-white/5 group-hover:border-white/20">
<iconify-icon icon="solar:figma-file-linear" width="12"></iconify-icon>
</div>
                                    Figma Design File
                                </a>
</div>
</div>
</aside>
</div>
</div>
</main>
</div>
<response>
        I've completely refactored the interface into a Client Portal view. 
        
        Key changes:
        1.  **Sidebar:** Now displays "Client Portal" for Acme Corp, with navigation focused on Overview, Projects, Invoices, and Contracts. Added a "Support/Book a Call" card for easy access to the agency.
        2.  **Header:** Shows the specific active project ("Brand Rebrand 2024") with a clear "Active" status indicator.
        3.  **Main Content:** 
            *   **Action Required:** A prominent gradient card highlighting that the "Brand Identity Guidelines" need approval (a typical client task).
            *   **Project Progress:** A vertical timeline visually showing completed phases, the active phase with granular sub-tasks, and upcoming phases.
            *   **Deliverables:** A grid of recent files available for download.
        4.  **Right Sidebar:** Focuses on Financials (Total Budget, Next Invoice due) and Quick Actions (Upload Assets, Send Message).
        5.  **Icons:** Switched entirely to `Iconify Solar Linear` icons with 1.5 stroke width look and feel (via SVG/Iconify).
    </response>

    </>
  );
}
