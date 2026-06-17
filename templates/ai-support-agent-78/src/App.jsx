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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    
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
      

<aside className="w-64 border-r border-zinc-200 bg-white hidden md:flex flex-col flex-shrink-0 z-20">
<div className="h-14 flex items-center px-6 border-b border-zinc-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<span className="font-medium text-xs tracking-tighter">R</span>
</div>
<span className="font-semibold text-sm tracking-tight text-zinc-900">RAVEN</span>
</div>
</div>
<div className="p-3 space-y-1 overflow-y-auto flex-1">
<div className="px-3 py-2">
<p className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Platform</p>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="layout-grid"></i>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4 text-zinc-900" data-lucide="bot"></i>
                        Agents
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="settings"></i>
                        Settings
                    </a>
</nav>
</div>
<div className="px-3 py-2">
<p className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Current Agent: Support</p>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="sliders"></i>
                        Configuration
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="book"></i>
                        Resources
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg transition-colors" href="#">
<i className="w-4 h-4 text-zinc-900" data-lucide="flask-conical"></i>
                        Test Agent
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="history"></i>
                        History
                    </a>
</nav>
</div>
</div>
<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 border border-zinc-300"></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">Jane Doe</span>
<span className="text-xs text-zinc-500">Admin Workspace</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full min-w-0">

<header className="h-14 border-b border-zinc-200 bg-white flex items-center justify-between px-6 sticky top-0 z-10">
<div className="flex items-center gap-4">
<nav className="flex items-center text-sm text-zinc-500">
<span className="hover:text-zinc-800 transition-colors cursor-pointer">Agents</span>
<i className="w-4 h-4 mx-2 text-zinc-300" data-lucide="chevron-right"></i>
<span className="hover:text-zinc-800 transition-colors cursor-pointer">Customer Support</span>
<i className="w-4 h-4 mx-2 text-zinc-300" data-lucide="chevron-right"></i>
<span className="text-zinc-900 font-medium">Test</span>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="flex bg-zinc-100 p-0.5 rounded-lg border border-zinc-200">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 rounded-md transition-all">View Mode</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-900 bg-white shadow-sm rounded-md ring-1 ring-zinc-200">Edit Mode</button>
</div>
<div className="h-4 w-px bg-zinc-200 mx-1"></div>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Discard</button>
<button className="px-3 py-1.5 text-xs font-medium bg-zinc-900 text-white rounded-md shadow-sm hover:bg-zinc-800 transition-colors tracking-wide">Publish Changes</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-zinc-50/50 p-6 md:p-8">
<div className="max-w-6xl mx-auto space-y-6">

<div>
<h1 className="text-xl font-semibold tracking-tight text-zinc-900">Test AI Agent</h1>
<p className="text-sm text-zinc-500 mt-1">Compare how your unpublished edits perform against your live AI agent.</p>
</div>

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-1.5 focus-within:ring-2 focus-within:ring-zinc-200 focus-within:border-zinc-300 transition-all">
<div className="relative">
<textarea className="w-full text-sm text-zinc-900 placeholder:text-zinc-400 bg-transparent border-none focus:ring-0 resize-none p-3" placeholder="Type a test question here (e.g. 'How do I reset my API key?')" rows="2">How do I reset my API key?</textarea>
<div className="flex items-center justify-between px-3 pb-2 pt-1">
<div className="flex gap-2">
<button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="image"></i>
</button>
<button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
</button>
</div>
<button className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all shadow-sm">
                                Send
                                <i className="w-3.5 h-3.5" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-zinc-200 rounded-xl shadow-sm divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 overflow-hidden min-h-[500px]">

<div className="flex flex-col h-full">
<div className="px-5 py-4 border-b border-zinc-100 bg-zinc-50/30 flex items-center justify-between sticky top-0 backdrop-blur-sm">
<div className="flex items-center gap-2.5">
<span className="text-sm font-medium text-zinc-900">Edited Version</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20">
                                    Draft
                                </span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-zinc-400 font-mono">v2.1-draft</span>
</div>
</div>

<div className="p-5 flex-1 space-y-6">

<div className="flex justify-end">
<div className="bg-zinc-100 text-zinc-900 px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%] leading-relaxed">
                                    How do I reset my API key?
                                </div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
</div>
<div className="flex flex-col gap-2 max-w-[90%]">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-900">Raven</span>
<span className="text-[10px] text-zinc-400">Just now</span>
</div>
<div className="text-sm text-zinc-600 leading-relaxed space-y-3">
<p>To reset your API key, please follow these steps:</p>
<ol className="list-decimal pl-4 space-y-1">
<li>Navigate to <strong>Settings</strong> &gt; <strong>Developer</strong>.</li>
<li>Locate the "API Keys" section.</li>
<li>Click the <span className="bg-zinc-100 px-1 py-0.5 rounded border border-zinc-200 text-xs font-mono text-zinc-700">Rotate Key</span> button next to the key you wish to reset.</li>
</ol>
<p>Please note that this will immediately invalidate your old key. Make sure to update your applications.</p>
</div>

<div className="mt-2 flex gap-2">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm">
<i className="w-3 h-3" data-lucide="link"></i>
                                            Go to Developer Settings
                                        </button>
</div>
<div className="mt-2 flex items-center gap-2">
<button className="p-1 text-zinc-300 hover:text-zinc-500 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="thumbs-up"></i>
</button>
<button className="p-1 text-zinc-300 hover:text-zinc-500 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="thumbs-down"></i>
</button>
<button className="p-1 text-zinc-300 hover:text-zinc-500 transition-colors ml-auto">
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col h-full bg-zinc-50/30">
<div className="px-5 py-4 border-b border-zinc-100 bg-white/50 flex items-center justify-between sticky top-0 backdrop-blur-sm">
<div className="flex items-center gap-2.5">
<span className="text-sm font-medium text-zinc-900">Live Version</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                                    Published
                                </span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-zinc-400 font-mono">v2.0</span>
</div>
</div>

<div className="p-5 flex-1 space-y-6">

<div className="flex justify-end opacity-60">
<div className="bg-zinc-200 text-zinc-900 px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%] leading-relaxed grayscale">
                                    How do I reset my API key?
                                </div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
<i className="w-4 h-4 text-zinc-400" data-lucide="bot"></i>
</div>
<div className="flex flex-col gap-2 max-w-[90%]">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-500">Raven (Live)</span>
<span className="text-[10px] text-zinc-400">Just now</span>
</div>
<div className="text-sm text-zinc-500 leading-relaxed space-y-3">
<p>You can manage your API keys in your dashboard settings.</p>
<p>If you need to reset a key, please contact our support team at <a className="text-blue-600 hover:underline" href="#">support@raven.com</a> and we will process the request for security purposes. This usually takes 24 hours.</p>
</div>
<div className="mt-2 flex items-center gap-2">
<button className="p-1 text-zinc-300 hover:text-zinc-500 transition-colors ml-auto">
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-xs text-zinc-400 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span>Systems Operational</span>
</div>
<span>Latency: 124ms</span>
</div>
</div>
</div>
</main>


    </>
  );
}
