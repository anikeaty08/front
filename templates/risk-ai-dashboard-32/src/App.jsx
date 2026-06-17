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
      

<aside className="w-64 flex-shrink-0 bg-zinc-950 flex flex-col h-full text-zinc-400 transition-all duration-300 hidden md:flex border-r border-zinc-900">

<div className="h-14 flex items-center px-5 gap-3 border-b border-zinc-900/80">
<span className="font-medium text-zinc-50 tracking-tighter text-lg">RiskAI</span>
<button className="ml-auto text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:sidebar-minimalistic-linear"></iconify-icon>
</button>
</div>

<div className="p-4">
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-500 text-sm" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-zinc-900/80 text-sm text-zinc-200 rounded-lg pl-9 pr-12 py-1.5 focus:outline-none focus:ring-1 focus:ring-zinc-700 placeholder-zinc-500 border border-transparent transition-all shadow-sm" placeholder="Search chats..." type="text"/>
<div className="absolute right-2 flex gap-1">
<kbd className="px-1.5 py-0.5 text-xs font-normal text-zinc-500 bg-zinc-950 border border-zinc-800 rounded">⌘</kbd>
<kbd className="px-1.5 py-0.5 text-xs font-normal text-zinc-500 bg-zinc-950 border border-zinc-800 rounded">K</kbd>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-3 space-y-6 dark-scrollbar">

<div>
<div className="flex items-center px-2 py-1 mb-1">
<iconify-icon className="text-zinc-600 text-xs mr-2" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-500 tracking-wider">AGENTS</span>
</div>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-normal hover:bg-zinc-900 hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-zinc-500 text-base" icon="solar:target-linear"></iconify-icon>
                            Agririsk AI
                        </a>
</li>
<li>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-normal hover:bg-zinc-900 hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-zinc-500 text-base" icon="solar:target-linear"></iconify-icon>
                            Heat AI
                        </a>
</li>
</ul>
</div>

<div>
<div className="flex items-center justify-between px-2 py-1 mb-1">
<div className="flex items-center">
<iconify-icon className="text-zinc-600 text-xs mr-2" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-500 tracking-wider">PROJECTS</span>
</div>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon className="text-sm" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-normal hover:bg-zinc-900 hover:text-zinc-100 transition-colors group" href="#">
<iconify-icon className="text-zinc-500 text-base group-hover:text-zinc-400 transition-colors" icon="solar:folder-with-files-linear"></iconify-icon>
                            Mission District
                            <iconify-icon className="text-sm ml-auto text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:menu-dots-bold"></iconify-icon>
<iconify-icon className="text-sm text-zinc-600" icon="solar:alt-arrow-up-linear"></iconify-icon>
</a>

<ul className="ml-5 mt-0.5 space-y-0.5 border-l border-zinc-800/50 pl-2">
<li>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-normal hover:bg-zinc-900 hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-zinc-600 text-sm" icon="solar:chat-round-line-linear"></iconify-icon>
                                    Initial Analysis
                                </a>
</li>
<li>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-normal bg-zinc-900 text-zinc-100 transition-colors group" href="#">
<iconify-icon className="text-zinc-400 text-sm" icon="solar:chat-round-line-linear"></iconify-icon>
                                    Flood Review
                                    <iconify-icon className="text-sm ml-auto text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:menu-dots-bold"></iconify-icon>
</a>
</li>
</ul>
</li>
<li>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-normal hover:bg-zinc-900 hover:text-zinc-100 transition-colors group" href="#">
<iconify-icon className="text-zinc-500 text-base group-hover:text-zinc-400 transition-colors" icon="solar:folder-with-files-linear"></iconify-icon>
                            Coastal Zone A
                        </a>
</li>
<li>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-normal hover:bg-zinc-900 hover:text-zinc-100 transition-colors group" href="#">
<iconify-icon className="text-zinc-500 text-base group-hover:text-zinc-400 transition-colors" icon="solar:folder-with-files-linear"></iconify-icon>
                            Seismic Retrofit B4
                        </a>
</li>
<li>
<button className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-normal text-zinc-500 hover:text-zinc-300 w-full text-left transition-colors mt-1">
<iconify-icon className="text-sm" icon="solar:menu-dots-bold"></iconify-icon>
                            Load more
                        </button>
</li>
</ul>
</div>

<div>
<div className="flex items-center justify-between px-2 py-1 mb-1">
<div className="flex items-center">
<iconify-icon className="text-zinc-600 text-xs mr-2" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-500 tracking-wider">CHATS</span>
</div>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon className="text-sm" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-normal hover:bg-zinc-900 hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-zinc-500 text-base" icon="solar:chat-round-call-linear"></iconify-icon>
                            New Chat
                        </a>
</li>
<li>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm font-normal hover:bg-zinc-900 hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-zinc-500 text-base" icon="solar:chat-round-line-linear"></iconify-icon>
                            Mission District Analysis
                        </a>
</li>
</ul>
</div>
</div>

<div className="p-4 mt-auto border-t border-zinc-900/80">
<div className="flex items-center justify-between group cursor-pointer hover:bg-zinc-900 p-2 -mx-2 rounded-lg transition-colors">
<div className="flex items-center gap-3 min-w-0">
<img alt="User" className="w-7 h-7 rounded-full border border-zinc-700" src="https://i.pravatar.cc/100?img=11"/>
<div className="min-w-0">
<p className="text-sm font-normal text-zinc-100 truncate">Arbin Paudel</p>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<p className="text-xs text-zinc-600 mt-4 text-center font-normal">© 2025 RiskAI</p>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-14 flex items-center px-8 border-b border-gray-100 flex-shrink-0">
<nav className="flex text-sm font-normal text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Projects</a>
<span className="mx-2 text-gray-300">/</span>
<span className="text-gray-900 font-medium">Mission District Analysis</span>
</nav>
</header>

<div className="flex-1 overflow-y-auto px-8 py-10 relative">
<div className="max-w-4xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Mission District Analysis</h1>
<p className="text-sm text-gray-500 mt-1 font-normal">4 previous chats found in this project.</p>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm font-normal border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-900/5 focus:border-gray-300 w-48 shadow-sm placeholder:text-gray-400 transition-all" placeholder="Search..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-sm transition-all focus:outline-none focus:ring-4 focus:ring-gray-900/5">
<iconify-icon className="text-gray-400 text-sm" icon="solar:sort-from-top-to-bottom-linear"></iconify-icon>
                            Newest first
                            <iconify-icon className="text-gray-400 text-xs ml-0.5" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-4">

<div className="p-5 border border-gray-200/80 rounded-2xl hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-gray-300 transition-all bg-white flex gap-4 items-start group cursor-pointer">
<div className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500 mt-0.5 group-hover:bg-white transition-colors">
<iconify-icon className="text-base" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-4 mb-1">
<h3 className="text-sm font-medium text-gray-900 truncate group-hover:text-black transition-colors">Historical flood records review</h3>
<span className="text-xs font-normal text-gray-400 flex-shrink-0">Today, 3:15 PM</span>
</div>
<p className="text-sm font-normal text-gray-500 leading-relaxed">Compared the 1998 and 2005 flood maps. The boundaries have shifted by 15% in the northern quadrant due to the new drainage system. Overall structural impact is negligible for the current site plan.</p>
</div>
</div>

<div className="p-5 border border-gray-200/80 rounded-2xl hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-gray-300 transition-all bg-white flex gap-4 items-start group cursor-pointer">
<div className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500 mt-0.5 group-hover:bg-white transition-colors">
<iconify-icon className="text-base" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-4 mb-1">
<h3 className="text-sm font-medium text-gray-900 truncate group-hover:text-black transition-colors">Historical flood records review</h3>
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon className="text-base" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<p className="text-sm font-normal text-gray-500 leading-relaxed">Compared the 1998 and 2005 flood maps. The boundaries have shifted by 15% in the northern quadrant due to the new drainage system. Overall structural impact is negligible for the current site plan.</p>
</div>
</div>

<div className="p-5 border border-gray-200/80 rounded-2xl hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-gray-300 transition-all bg-white flex gap-4 items-start group cursor-pointer">
<div className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500 mt-0.5 group-hover:bg-white transition-colors">
<iconify-icon className="text-base" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-4 mb-1">
<h3 className="text-sm font-medium text-gray-900 truncate group-hover:text-black transition-colors">Retrofit compliance check</h3>
<span className="text-xs font-normal text-gray-400 flex-shrink-0">Oct 12, 2023</span>
</div>
<p className="text-sm font-normal text-gray-500 leading-relaxed">Checked the local database for unreinforced masonry buildings in the immediate vicinity. Found 3 structures that require mandatory retrofitting within the next 5 years. Property values might be temporarily impacted.</p>
</div>
</div>
</div>
</div>

<div className="sticky bottom-0 left-0 right-0 pt-8 pb-4 bg-gradient-to-t from-white via-white to-transparent">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<button className="mb-4 flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:bg-gray-50 hover:text-gray-900 transition-all focus:outline-none focus:ring-4 focus:ring-gray-900/5 group">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors text-sm" icon="solar:stars-linear"></iconify-icon>
                        Generate report
                    </button>
<div className="relative w-full group">
<input className="w-full pl-5 pr-14 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm font-normal shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-4 focus:ring-gray-900/5 focus:border-gray-300 placeholder:text-gray-400 transition-all" placeholder="Message to RiskAI..." type="text"/>
<button className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors shadow-sm focus:outline-none focus:ring-4 focus:ring-gray-900/20">
<iconify-icon className="text-sm translate-x-0.5" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

<aside className="w-80 flex-shrink-0 flex flex-col border-l border-gray-200 bg-white hidden lg:flex z-10">

<div className="p-4 border-b border-gray-100">
<div className="flex p-0.5 bg-gray-100/80 rounded-lg">
<button className="flex-1 py-1.5 px-3 text-xs font-medium text-gray-900 bg-white rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-black/5 focus:outline-none">Sources</button>
<button className="flex-1 py-1.5 px-3 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors focus:outline-none">Report</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-8">

<div>
<h3 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-3 px-1">Sources</h3>
<div className="space-y-1">

<a className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200" href="#">
<div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 group-hover:border-gray-300 group-hover:text-gray-900 transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 py-0.5">
<p className="text-sm font-normal text-gray-900 truncate group-hover:text-black transition-colors">Global_Risk_Outlook.pdf</p>
<p className="text-xs font-normal text-gray-500 truncate mt-0.5">Internal Audit • Page 42</p>
</div>
</a>

<a className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200" href="#">
<div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 group-hover:border-gray-300 group-hover:text-gray-900 transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:link-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 py-0.5">
<p className="text-sm font-normal text-gray-900 truncate group-hover:text-black transition-colors">Kathmandu Market Data</p>
<p className="text-xs font-normal text-gray-500 truncate mt-0.5">Kathmandu.com/report</p>
</div>
</a>

<a className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200" href="#">
<div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 group-hover:border-gray-300 group-hover:text-gray-900 transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:document-add-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 py-0.5">
<p className="text-sm font-normal text-gray-900 truncate group-hover:text-black transition-colors">Q3_Financials_Final.xls</p>
<p className="text-xs font-normal text-gray-500 truncate mt-0.5">Data Sheet • Row 120-150</p>
</div>
</a>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-3 px-1">Custom Sources</h3>
<div className="space-y-1">

<a className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200" href="#">
<div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 group-hover:border-gray-300 group-hover:text-gray-900 transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 py-0.5">
<p className="text-sm font-normal text-gray-900 truncate group-hover:text-black transition-colors">Global_Risk_Outlook.pdf</p>
<p className="text-xs font-normal text-gray-500 truncate mt-0.5">Internal Audit • Page 42</p>
</div>
</a>

<a className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200" href="#">
<div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 group-hover:border-gray-300 group-hover:text-gray-900 transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:link-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 py-0.5">
<p className="text-sm font-normal text-gray-900 truncate group-hover:text-black transition-colors">Kathmandu Market Data</p>
<p className="text-xs font-normal text-gray-500 truncate mt-0.5">Kathmandu.com/report</p>
</div>
</a>

<a className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200" href="#">
<div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-500 group-hover:border-gray-300 group-hover:text-gray-900 transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:document-add-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 py-0.5">
<p className="text-sm font-normal text-gray-900 truncate group-hover:text-black transition-colors">Q3_Financials_Final.xls</p>
<p className="text-xs font-normal text-gray-500 truncate mt-0.5">Data Sheet • Row 120-150</p>
</div>
</a>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-gray-100 mt-auto">
<button className="group w-full flex items-center justify-center gap-2 py-2 px-4 bg-white border border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all focus:outline-none focus:ring-4 focus:ring-gray-900/5">
<iconify-icon className="text-gray-400 group-hover:text-gray-600 transition-colors text-base" icon="solar:upload-minimalistic-linear"></iconify-icon>
                Add Custom Source
            </button>
</div>
</aside>

    </>
  );
}
