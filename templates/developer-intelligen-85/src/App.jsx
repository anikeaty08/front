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
      

<aside className="w-64 border-r border-zinc-800/60 bg-zinc-950/50 flex flex-col justify-between hidden md:flex shrink-0">
<div className="p-4 flex flex-col gap-6">

<div className="flex items-center justify-between px-2 pt-2">
<span className="text-lg font-semibold tracking-tighter text-zinc-100 uppercase">Oryxa</span>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>

<button className="flex items-center justify-between w-full px-3 py-2 bg-zinc-900/50 border border-zinc-800/80 rounded-lg hover:bg-zinc-900 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-md bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center border border-zinc-700">
<iconify-icon className="text-zinc-300" icon="solar:folder-with-files-linear" width="14"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">oryxa-core</span>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>

<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-900 text-zinc-100 font-medium" href="#">
<iconify-icon icon="solar:widget-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/50 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon icon="solar:chat-square-code-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Code Q&amp;A
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/50 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon icon="solar:microphone-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Meetings
                </a>
<a className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-zinc-900/50 hover:text-zinc-200 transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:checklist-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Tickets
                    </div>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-zinc-900/50 hover:text-zinc-200 transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Team Chat
                    </div>
<span className="bg-zinc-100 text-zinc-900 text-xs px-1.5 py-0.5 rounded-full font-medium">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/50 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Reports
                </a>
</nav>
</div>

<div className="p-4 flex flex-col gap-4 border-t border-zinc-800/60">

<div className="p-3 bg-zinc-900/40 border border-zinc-800/60 rounded-lg flex flex-col gap-2">
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-300">Credits Balance</span>
<span className="font-medium text-zinc-400">8,450</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 rounded-full w-[70%]"></div>
</div>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors mt-1 flex items-center gap-1" href="#">
                    Manage billing <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>

<button className="flex items-center gap-3 px-2 py-1.5 hover:bg-zinc-900/50 rounded-md transition-colors w-full text-left">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden shrink-0">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Hamdan&amp;backgroundColor=transparent"/>
</div>
<div className="flex flex-col overflow-hidden">
<span className="font-medium text-zinc-200 text-sm truncate">Hamdan Raza</span>
<span className="text-xs text-zinc-500 truncate">Admin</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none"></div>

<header className="h-16 border-b border-zinc-800/60 flex items-center justify-between px-6 shrink-0 relative z-10 bg-zinc-950/80 backdrop-blur-md">
<div className="flex items-center gap-2">
<span className="text-zinc-500">Projects</span>
<span className="text-zinc-700">/</span>
<span className="font-medium text-zinc-200">oryxa-core</span>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 text-zinc-950 rounded-md font-medium text-xs hover:bg-white transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:refresh-linear" style={{strokeWidth: '2'}} width="14"></iconify-icon>
                Sync Codebase
            </button>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 relative z-10">
<div className="max-w-6xl mx-auto flex flex-col gap-8">

<div className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon icon="solar:link-linear" width="16"></iconify-icon>
<span>Connected to <a className="text-zinc-200 hover:underline underline-offset-4 decoration-zinc-700" href="#">github.com/oryxa-ai/oryxa-core</a></span>
<span className="w-1 h-1 rounded-full bg-zinc-700 mx-2"></span>
<span className="flex items-center gap-1.5 text-emerald-500/80">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 relative flex items-center justify-center">
<span className="absolute w-full h-full rounded-full bg-emerald-500/50 animate-ping"></span>
</span>
                        Index up to date
                    </span>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center gap-3 relative z-10">
<div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 text-zinc-300">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</div>
<h2 className="text-base font-medium text-zinc-100 tracking-tight">Ask codebase</h2>
</div>
<p className="text-zinc-500 relative z-10">Query your architecture, locate bugs, or understand dependencies using natural language.</p>
<div className="relative mt-2 z-10">
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg pl-4 pr-10 py-3 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all text-sm shadow-inner" placeholder="e.g., Where is the AST parsing logic handled?" type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 rounded-md transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden group">
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 text-zinc-300">
<iconify-icon icon="solar:record-circle-linear" width="18"></iconify-icon>
</div>
<h2 className="text-base font-medium text-zinc-100 tracking-tight">Process meeting</h2>
</div>
</div>
<p className="text-zinc-500 relative z-10">Upload audio to generate transcripts, link context to code, and automatically create tickets.</p>
<button className="mt-2 w-full border border-dashed border-zinc-700 hover:border-zinc-500 bg-zinc-950/30 hover:bg-zinc-900/50 rounded-lg py-4 flex flex-col items-center justify-center gap-2 transition-all group-hover:border-zinc-600">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-400 transition-colors" icon="solar:upload-minimalistic-linear" width="20"></iconify-icon>
<span className="text-zinc-400 font-medium text-sm">Click to upload audio</span>
<span className="text-xs text-zinc-600">MP3, WAV up to 50MB</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Recent Commits</h3>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors">Fetch new</button>
<button className="text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-3 py-1.5 rounded-md transition-colors border border-zinc-700/50 flex items-center gap-1.5">
<iconify-icon icon="solar:stars-linear" width="14"></iconify-icon>
                                    Summarize Diff
                                </button>
</div>
</div>
<div className="flex flex-col border border-zinc-800/60 rounded-xl overflow-hidden bg-zinc-900/20">

<div className="p-4 border-b border-zinc-800/60 flex flex-col gap-3">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Ahmad"/>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-medium text-zinc-200 text-sm">Ahmad Raza</span>
<span className="text-zinc-600">·</span>
<span className="text-xs text-zinc-500 font-mono">#a7b82f9</span>
<span className="text-zinc-600">·</span>
<span className="text-xs text-zinc-500">2h ago</span>
</div>
<p className="text-zinc-300 mt-0.5">refactor: Implement Tree-sitter AST parsing for RAG pipeline</p>
</div>
</div>
<button className="text-zinc-500 hover:text-zinc-300">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="ml-9 pl-4 border-l-2 border-zinc-800">
<div className="flex items-center gap-1.5 mb-1 text-xs font-medium text-zinc-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="12"></iconify-icon> AI Insight
                                    </div>
<ul className="text-zinc-500 space-y-1 list-disc list-inside text-xs leading-relaxed">
<li>Switched semantic chunking logic to utilize Tree-sitter for context-aware boundaries.</li>
<li>Updated hierarchical embedding generation in <code className="bg-zinc-800/50 px-1 py-0.5 rounded text-zinc-400 font-mono text-[10px]">indexer.ts</code>.</li>
<li>Added unit tests for edge cases in nested function parsing.</li>
</ul>
</div>
</div>

<div className="p-4 flex flex-col gap-3">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Hamdan"/>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-medium text-zinc-200 text-sm">Hamdan Raza</span>
<span className="text-zinc-600">·</span>
<span className="text-xs text-zinc-500 font-mono">#c4f19d2</span>
<span className="text-zinc-600">·</span>
<span className="text-xs text-zinc-500">5h ago</span>
</div>
<p className="text-zinc-300 mt-0.5">feat: Real-time WebSocket integration for collaboration module</p>
</div>
</div>
<button className="text-zinc-500 hover:text-zinc-300">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Recent Meetings</h3>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" href="#">View all</a>
</div>
<div className="flex flex-col gap-3">

<div className="bg-zinc-900/40 border border-zinc-800/60 rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden">

<div className="absolute top-0 left-0 h-[2px] bg-zinc-800 w-full">
<div className="h-full bg-zinc-400 w-1/3 animate-[pulse_2s_ease-in-out_infinite]"></div>
</div>
<div className="flex items-start justify-between mt-1">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500 animate-pulse" icon="solar:record-circle-bold" width="14"></iconify-icon>
<span className="font-medium text-zinc-200 text-xs">Sprint Planning Q3</span>
</div>
<span className="text-[10px] font-medium px-1.5 py-0.5 bg-zinc-800/80 text-zinc-400 rounded-md border border-zinc-700/50">Processing</span>
</div>
<p className="text-xs text-zinc-500">Generating AST links &amp; creating Jira tickets...</p>
</div>

<div className="bg-zinc-900/20 border border-zinc-800/40 rounded-lg p-3 flex flex-col gap-3 group hover:border-zinc-700/60 transition-colors cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="font-medium text-zinc-300 text-xs group-hover:text-zinc-200 transition-colors">Backend Architecture Sync</span>
</div>
<span className="text-xs text-zinc-600">Yesterday</span>
</div>
<div className="flex gap-2">
<span className="text-[10px] flex items-center gap-1 text-zinc-400 bg-zinc-800/50 px-1.5 py-0.5 rounded border border-zinc-700/30">
<iconify-icon icon="solar:document-text-linear" width="10"></iconify-icon> Summary
                                    </span>
<span className="text-[10px] flex items-center gap-1 text-zinc-400 bg-zinc-800/50 px-1.5 py-0.5 rounded border border-zinc-700/30">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="10"></iconify-icon> 4 Tasks
                                    </span>
</div>
</div>

<div className="bg-zinc-900/20 border border-zinc-800/40 rounded-lg p-3 flex flex-col gap-3 group hover:border-zinc-700/60 transition-colors cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="font-medium text-zinc-300 text-xs group-hover:text-zinc-200 transition-colors">Supervisor Review #2</span>
</div>
<span className="text-xs text-zinc-600">Oct 12</span>
</div>
<div className="flex gap-2">
<span className="text-[10px] flex items-center gap-1 text-zinc-400 bg-zinc-800/50 px-1.5 py-0.5 rounded border border-zinc-700/30">
<iconify-icon icon="solar:document-text-linear" width="10"></iconify-icon> Summary
                                    </span>
<span className="text-[10px] flex items-center gap-1 text-zinc-400 bg-zinc-800/50 px-1.5 py-0.5 rounded border border-zinc-700/30">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="10"></iconify-icon> 1 Bug
                                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
