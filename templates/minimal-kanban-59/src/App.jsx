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
      

<header className="h-12 border-b border-[#1f1f1f] bg-[#050505] flex items-center justify-between px-4 shrink-0 z-20">
<div className="flex items-center gap-4">
<span className="text-gray-100 font-medium tracking-[0.2em] text-xs uppercase">Olejra</span>
<span className="text-[#262626] h-4 border-l border-[#262626]"></span>

<div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
<span className="hover:text-gray-300 cursor-pointer transition-colors">engineering</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-gray-200">platform-migration</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 text-[10px] font-mono text-gray-600">
<span className="w-2 h-2 rounded-full bg-green-900 border border-green-700/50"></span>
                ONLINE
            </div>
<button className="hover:text-white transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="16"></span>
</button>
<div className="w-5 h-5 bg-[#1f1f1f] flex items-center justify-center text-[10px] text-gray-300 font-medium">
                K
            </div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="w-14 border-r border-[#1f1f1f] flex flex-col items-center py-4 gap-6 bg-[#050505] shrink-0 z-10">
<button className="text-gray-500 hover:text-white transition-colors group relative">
<span className="iconify" data-height="18" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="18"></span>
<div className="absolute left-10 top-1/2 -translate-y-1/2 bg-[#1f1f1f] text-gray-300 text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-[#333]">Projects</div>
</button>
<button className="text-blue-500 relative">
<span className="iconify" data-height="18" data-icon="lucide:kanban" data-strokeWidth="1.5" data-width="18"></span>
<span className="absolute -left-[18px] top-1/2 -translate-y-1/2 h-8 w-[2px] bg-blue-500"></span>
</button>
<button className="text-gray-500 hover:text-white transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:list" data-strokeWidth="1.5" data-width="18"></span>
</button>
<div className="flex-1"></div>
<button className="text-gray-500 hover:text-white transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="18"></span>
</button>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#050505]">

<div className="h-14 flex items-center justify-between px-6 border-b border-[#1f1f1f] shrink-0">
<div className="flex items-center gap-3">
<h1 className="text-gray-100 text-lg font-medium tracking-tight">Platform Migration</h1>
<span className="text-[10px] px-1.5 py-0.5 border border-[#262626] text-gray-500 font-mono">v2.4.0</span>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">

<div className="w-6 h-6 border border-[#050505] bg-[#1a1a1a] flex items-center justify-center text-[9px]">A</div>
<div className="w-6 h-6 border border-[#050505] bg-[#1a1a1a] flex items-center justify-center text-[9px]">M</div>
</div>
<span className="h-4 w-px bg-[#1f1f1f]"></span>
<button className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-200 transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:filter" data-strokeWidth="1.5" data-width="14"></span>
<span>Filter</span>
</button>
</div>
</div>

<div className="flex-1 p-6 overflow-hidden">
<div className="grid grid-cols-4 gap-4 h-full w-full">

<div className="flex flex-col h-full min-h-0">
<div className="flex items-center justify-between mb-4 px-1">
<h3 className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-500">Backlog <span className="ml-1 text-[#333]">4</span></h3>
<button className="text-[#333] hover:text-gray-400 transition-colors">
<span className="iconify" data-height="14" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="14"></span>
</button>
</div>
<div className="flex-1 overflow-y-auto pr-1 space-y-2">

<div className="task-card group bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] p-3 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="font-mono text-[9px] text-gray-600">PM-102</span>
</div>
<p className="text-xs text-gray-300 leading-snug mb-3">Define database schema for user profiles v2</p>
<div className="flex items-center gap-2">
<span className="text-[9px] border border-[#1f1f1f] text-gray-500 px-1 py-0.5">Backend</span>
</div>
</div>

<div className="task-card group bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] p-3 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="font-mono text-[9px] text-gray-600">PM-104</span>
</div>
<p className="text-xs text-gray-300 leading-snug mb-3">Audit current API rate limits</p>
</div>

<div className="task-card group bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] p-3 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="font-mono text-[9px] text-gray-600">PM-118</span>
</div>
<p className="text-xs text-gray-300 leading-snug mb-3">Setup staging environment variables</p>
<div className="flex items-center gap-2">
<span className="text-[9px] border border-[#1f1f1f] text-gray-500 px-1 py-0.5">DevOps</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col h-full min-h-0">
<div className="flex items-center justify-between mb-4 px-1">
<h3 className="text-[10px] font-mono uppercase tracking-[0.15em] text-blue-500/80">Active <span className="ml-1 text-blue-900/50">2</span></h3>
</div>
<div className="flex-1 overflow-y-auto pr-1 space-y-2">

<div className="task-card group bg-[#0e0e0e] border border-blue-900/30 hover:border-blue-800/50 p-3 cursor-grab active:cursor-grabbing relative">
<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-blue-600"></div>
<div className="flex justify-between items-start mb-2 pl-1">
<span className="font-mono text-[9px] text-blue-400/60">PM-099</span>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500/20 animate-pulse"></div>
</div>
<p className="text-xs text-gray-100 leading-snug mb-3 pl-1">Implement OAuth2 authentication flow</p>
<div className="flex items-center gap-2 pl-1">
<span className="text-[9px] border border-[#262626] text-gray-400 px-1 py-0.5">Security</span>
</div>
</div>

<div className="task-card group bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] p-3 cursor-grab active:cursor-grabbing">
<div className="flex justify-between items-start mb-2">
<span className="font-mono text-[9px] text-gray-600">PM-112</span>
</div>
<p className="text-xs text-gray-300 leading-snug mb-3">Refactor user session middleware</p>
</div>
</div>
</div>

<div className="flex flex-col h-full min-h-0">
<div className="flex items-center justify-between mb-4 px-1">
<h3 className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-500">Review <span className="ml-1 text-[#333]">3</span></h3>
</div>
<div className="flex-1 overflow-y-auto pr-1 space-y-2">

<div className="task-card group bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] p-3 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="font-mono text-[9px] text-gray-600">PM-088</span>
</div>
<p className="text-xs text-gray-300 leading-snug mb-3">Unit tests for payment gateway integration</p>
<div className="flex items-center justify-between w-full">
<span className="text-[9px] border border-[#1f1f1f] text-gray-500 px-1 py-0.5">QA</span>
<span className="iconify text-gray-600" data-height="12" data-icon="lucide:git-pull-request" data-width="12"></span>
</div>
</div>

<div className="task-card group bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] p-3 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="font-mono text-[9px] text-gray-600">PM-092</span>
</div>
<p className="text-xs text-gray-300 leading-snug mb-3">Update dependency documentation</p>
</div>
</div>
</div>

<div className="flex flex-col h-full min-h-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
<div className="flex items-center justify-between mb-4 px-1">
<h3 className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-600">Done <span className="ml-1 text-[#222]">12</span></h3>
</div>
<div className="flex-1 overflow-y-auto pr-1 space-y-2 grayscale">

<div className="bg-[#080808] border border-[#1a1a1a] p-3">
<div className="flex justify-between items-start mb-2">
<span className="font-mono text-[9px] text-gray-700 line-through">PM-045</span>
</div>
<p className="text-xs text-gray-500 leading-snug mb-2 line-through decoration-gray-700">Initial server provisioning</p>
</div>

<div className="bg-[#080808] border border-[#1a1a1a] p-3">
<div className="flex justify-between items-start mb-2">
<span className="font-mono text-[9px] text-gray-700 line-through">PM-062</span>
</div>
<p className="text-xs text-gray-500 leading-snug mb-2 line-through decoration-gray-700">Configure DNS records</p>
</div>

<div className="bg-[#080808] border border-[#1a1a1a] p-3">
<div className="flex justify-between items-start mb-2">
<span className="font-mono text-[9px] text-gray-700 line-through">PM-070</span>
</div>
<p className="text-xs text-gray-500 leading-snug mb-2 line-through decoration-gray-700">Setup Redis cluster</p>
</div>
</div>
</div>
</div>
</div>

<div className="h-8 border-t border-[#1f1f1f] bg-[#050505] flex items-center justify-between px-4 shrink-0 text-[10px] font-mono text-gray-600">
<div className="flex items-center gap-4">
<span>master</span>
<span className="flex items-center gap-1"><span className="iconify" data-height="10" data-icon="lucide:git-commit" data-width="10"></span> a4f91b</span>
</div>
<div className="flex items-center gap-4">
<span>UTF-8</span>
<span>Spaces: 4</span>
</div>
</div>
</main>
</div>

    </>
  );
}
