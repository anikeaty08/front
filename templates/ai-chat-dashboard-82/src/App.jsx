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



        lucide.createIcons();
    
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
      

<aside className="w-[280px] h-full flex flex-col justify-between border-r border-gray-100 bg-white p-5 flex-shrink-0">

<div className="space-y-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-7 h-7 grid grid-cols-3 gap-0.5">
<div className="bg-slate-900 rounded-full w-full h-full"></div><div className="bg-slate-900 rounded-full w-full h-full"></div><div className="bg-slate-300 rounded-full w-full h-full"></div>
<div className="bg-slate-900 rounded-full w-full h-full"></div><div className="bg-slate-300 rounded-full w-full h-full"></div><div className="bg-slate-900 rounded-full w-full h-full"></div>
<div className="bg-slate-300 rounded-full w-full h-full"></div><div className="bg-slate-900 rounded-full w-full h-full"></div><div className="bg-slate-900 rounded-full w-full h-full"></div>
</div>
<span className="text-xl font-semibold tracking-tight">Script</span>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-5 h-5" data-lucide="panel-left"></i>
</button>
</div>

<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full bg-gray-50 border border-gray-100 text-sm py-2.5 pl-9 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-400" placeholder="Search" type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-xs text-gray-400 font-medium font-mono">
<span className="text-base">⌘</span><span>K</span>
</div>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gray-50 text-slate-900 font-medium" href="#">
<div className="bg-blue-600 text-white p-1 rounded-md">
<i className="w-4 h-4 fill-current" data-lucide="sparkles"></i>
</div>
<span>AI Chat</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-5 h-5 stroke-gray-400 group-hover:stroke-slate-600" data-lucide="folder"></i>
<span className="font-medium">Projects</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-5 h-5 stroke-gray-400 group-hover:stroke-slate-600" data-lucide="layout-template"></i>
<span className="font-medium">Templates</span>
</a>
<div className="relative group">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5 stroke-gray-400 group-hover:stroke-slate-600" data-lucide="file-text"></i>
<span className="font-medium">Documents</span>
</a>
<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 w-6 h-6 flex items-center justify-center rounded-full text-gray-500">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
<a className="flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5 stroke-gray-400 group-hover:stroke-slate-600" data-lucide="users"></i>
<span className="font-medium">Community</span>
</div>
<span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md tracking-wide">NEW</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-5 h-5 stroke-gray-400 group-hover:stroke-slate-600" data-lucide="history"></i>
<span className="font-medium">History</span>
</a>
</nav>
</div>

<div className="space-y-6">

<div className="space-y-1">
<p className="px-3 text-xs font-semibold text-gray-400 mb-2">Settings &amp; Help</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5 stroke-gray-400" data-lucide="settings"></i>
<span className="font-medium">Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5 stroke-gray-400" data-lucide="help-circle"></i>
<span className="font-medium">Help</span>
</a>
</div>

<div className="bg-gray-100 p-1 rounded-full flex relative">
<button className="flex-1 flex items-center justify-center gap-2 py-1.5 rounded-full bg-white shadow-sm text-sm font-medium text-slate-900 z-10">
<i className="w-4 h-4" data-lucide="sun"></i>
                    Light
                </button>
<button className="flex-1 flex items-center justify-center gap-2 py-1.5 rounded-full text-sm font-medium text-gray-500 hover:text-gray-700">
<i className="w-4 h-4" data-lucide="moon"></i>
                    Dark
                </button>
</div>

<div className="flex items-center gap-3 px-1">
<img alt="User" className="w-10 h-10 rounded-full object-cover border border-gray-200" src="https://i.pravatar.cc/150?img=5"/>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">Emilia Caitlin</span>
<span className="text-xs text-gray-500">hey@unspace.agency</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative">

<header className="h-20 flex-shrink-0 flex items-center justify-between px-8">
<h1 className="text-xl font-semibold tracking-tight text-slate-900">AI Chat</h1>
<div className="flex items-center gap-5">
<button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm transition-colors">
<i className="w-4 h-4 fill-yellow-400 stroke-yellow-400" data-lucide="zap"></i>
                    Upgrade
                </button>
<button className="text-gray-400 hover:text-slate-900">
<i className="w-6 h-6" data-lucide="help-circle"></i>
</button>
<button className="text-gray-400 hover:text-slate-900 relative">
<i className="w-6 h-6" data-lucide="gift"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="relative">
<img alt="Profile" className="w-9 h-9 rounded-full border border-gray-200" src="https://i.pravatar.cc/150?img=5"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto w-full">
<div className="max-w-3xl mx-auto pt-12 pb-48 px-6 flex flex-col items-center text-center">

<h2 className="text-5xl font-semibold text-slate-900 tracking-tight mb-4">Welcome to Script</h2>
<p className="text-lg text-gray-500 mb-12 max-w-2xl">
                    Get started by Script a task and Chat can do the rest. Not sure where to start?
                </p>

<div className="grid grid-cols-2 gap-4 w-full">

<button className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-200 transition-all text-left">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 border border-amber-100">
<i className="w-5 h-5" data-lucide="clipboard-pen"></i>
</div>
<span className="font-semibold text-slate-800">Write copy</span>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-gray-300 group-hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</button>

<button className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-200 transition-all text-left">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 border border-blue-100">
<i className="w-5 h-5" data-lucide="wand-2"></i>
</div>
<span className="font-semibold text-slate-800">Image generation</span>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-gray-300 group-hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</button>

<button className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-200 transition-all text-left">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 border border-green-100">
<i className="w-5 h-5 fill-current" data-lucide="user"></i>
</div>
<span className="font-semibold text-slate-800">Create avatar</span>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-gray-300 group-hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</button>

<button className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-200 transition-all text-left">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 border border-pink-100">
<i className="w-5 h-5" data-lucide="terminal-square"></i>
</div>
<span className="font-semibold text-slate-800">Write code</span>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-gray-300 group-hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 pb-8 pt-4 px-8 bg-gradient-to-t from-white via-white to-transparent">
<div className="max-w-3xl mx-auto space-y-3">

<div className="relative bg-white rounded-2xl border border-blue-200 shadow-[0_0_15px_-3px_rgba(59,130,246,0.1)] focus-within:ring-1 focus-within:ring-blue-300 transition-all">

<div className="p-4 pb-2">
<textarea className="w-full resize-none outline-none text-slate-800 placeholder:text-gray-400 text-lg bg-transparent" placeholder="" rows="1">Summarize the latest|</textarea>
<button className="absolute top-4 right-4 text-slate-800 hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="send-horizontal"></i>
</button>
</div>

<div className="flex items-center justify-between px-3 pb-3 pt-1">
<div className="flex items-center gap-1">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors">
<i className="w-4 h-4 text-gray-500" data-lucide="paperclip"></i>
                                Attach
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors">
<div className="flex items-end gap-0.5 h-3.5 pb-0.5">
<div className="w-0.5 h-1.5 bg-slate-800 rounded-full"></div>
<div className="w-0.5 h-2.5 bg-slate-800 rounded-full"></div>
<div className="w-0.5 h-3 bg-slate-800 rounded-full"></div>
<div className="w-0.5 h-1.5 bg-slate-800 rounded-full"></div>
</div>
                                Voice Message
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors">
<i className="w-4 h-4 text-gray-500" data-lucide="layout-grid"></i>
                                Browse Prompts
                            </button>
</div>
<div className="text-xs font-medium text-gray-400 px-2">
                            20 / 3,000
                        </div>
</div>
</div>

<p className="text-center text-xs text-gray-400 font-medium">
                    Script may generate inaccurate information about people, places, or facts. Model: Script AI v1.3
                </p>
</div>
</div>
</main>

<aside className="w-[320px] h-full flex flex-col border-l border-gray-100 bg-white pt-6 pb-6 px-4 flex-shrink-0 relative">

<div className="flex items-center justify-between mb-6 px-1">
<h3 className="font-semibold text-slate-900">Projects <span className="text-gray-400 font-normal ml-0.5">(7)</span></h3>
<button className="text-gray-400 hover:text-slate-900">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto space-y-3 -mx-2 px-2 pb-20">

<div className="p-4 rounded-xl bg-slate-50 border border-dashed border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<h4 className="font-semibold text-slate-900 text-sm">New Project</h4>
<div className="w-4 h-4 border border-gray-300 rounded bg-white group-hover:border-blue-300 transition-colors"></div>
</div>
<p className="text-xs text-gray-400">...</p>
</div>

<div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-1 gap-2">
<h4 className="font-semibold text-slate-800 text-sm leading-tight">Learning From 100 Years o...</h4>
<div className="w-4 h-4 border border-gray-200 rounded-md bg-white flex-shrink-0 mt-0.5 group-hover:border-gray-300"></div>
</div>
<p className="text-xs text-gray-500 leading-relaxed line-clamp-1">For athletes, high altitude prod...</p>
</div>

<div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-1 gap-2">
<h4 className="font-semibold text-slate-800 text-sm leading-tight">Research officiants</h4>
<div className="w-4 h-4 border border-gray-200 rounded-md bg-white flex-shrink-0 mt-0.5 group-hover:border-gray-300"></div>
</div>
<p className="text-xs text-gray-500 leading-relaxed line-clamp-1">Maxwell's equations—the foun...</p>
</div>

<div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-1 gap-2">
<h4 className="font-semibold text-slate-800 text-sm leading-tight">What does a senior lead de...</h4>
<div className="w-4 h-4 border border-gray-200 rounded-md bg-white flex-shrink-0 mt-0.5 group-hover:border-gray-300"></div>
</div>
<p className="text-xs text-gray-500 leading-relaxed line-clamp-1">Physiological respiration involv...</p>
</div>

<div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-1 gap-2">
<h4 className="font-semibold text-slate-800 text-sm leading-tight">Write a sweet note to your...</h4>
<div className="w-4 h-4 border border-gray-200 rounded-md bg-white flex-shrink-0 mt-0.5 group-hover:border-gray-300"></div>
</div>
<p className="text-xs text-gray-500 leading-relaxed line-clamp-1">In the eighteenth century the G...</p>
</div>

<div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-1 gap-2">
<h4 className="font-semibold text-slate-800 text-sm leading-tight">Meet with cake bakers</h4>
<div className="w-4 h-4 border border-gray-200 rounded-md bg-white flex-shrink-0 mt-0.5 group-hover:border-gray-300"></div>
</div>
<p className="text-xs text-gray-500 leading-relaxed line-clamp-1">Physical space is often conceiv...</p>
</div>

<div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-1 gap-2">
<h4 className="font-semibold text-slate-800 text-sm leading-tight">Meet with cake bakers</h4>
<div className="w-4 h-4 border border-gray-200 rounded-md bg-white flex-shrink-0 mt-0.5 group-hover:border-gray-300"></div>
</div>
<p className="text-xs text-gray-500 leading-relaxed line-clamp-1">Physical space is often conceiv...</p>
</div>
</div>

<button className="absolute bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center text-white hover:scale-105 transition-transform">
<div className="w-5 h-5 bg-white rounded-full"></div>
<div className="absolute w-2 h-2 bg-blue-600 rounded-full"></div>
</button>
</aside>


    </>
  );
}
