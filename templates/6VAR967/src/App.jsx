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
      
<div className="max-w-md w-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white/70 border-white/20 border rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">

<div className="mb-6 flex justify-center">
<div className="w-28 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-inner flex items-center justify-center">
<svg className="w-16 h-16 text-blue-600" fill="currentColor" viewbox="0 0 24 24">
<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z">
</path>
</svg>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-slate-800 font-medium text-xl tracking-tight">Team Workspace</h3>
<div className="text-right">
<div className="uppercase text-xs font-light text-slate-400 tracking-wider">Usage</div>
<div className="text-xs font-light text-slate-600">127.4 GB of 500 GB</div>
</div>
</div>
<div className="flex items-center gap-6 text-xs font-light text-slate-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="">348 Items</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="">12 Members</span>
</div>
</div>
</div>

<div className="mb-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<div className="relative mb-6">
<div className="w-full h-3 flex rounded-full overflow-hidden shadow-inner bg-slate-100">
<div className="bg-gradient-to-r from-rose-400 to-rose-500" style={{width: '18%'}}></div>
<div className="bg-gradient-to-r from-orange-400 to-amber-500" style={{width: '16%'}}></div>
<div className="bg-gradient-to-r from-yellow-400 to-yellow-500" style={{width: '8%'}}></div>
<div className="bg-gradient-to-r from-emerald-400 to-emerald-500" style={{width: '22%'}}></div>
<div className="bg-gradient-to-r from-blue-400 to-blue-500" style={{width: '14%'}}></div>
<div className="bg-gradient-to-r from-slate-200 to-slate-300" style={{width: '22%'}}></div>
</div>
<div className="absolute -top-1 left-0 w-full h-5 bg-gradient-to-r from-white/40 to-transparent rounded-full opacity-60"></div>
</div>

<div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8 text-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="block w-3 h-3 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 shadow-sm"></span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-palette w-3 h-3 text-slate-400" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-slate-600 font-light">Design</span>
</div>
</div>
<span className="text-slate-400 font-light">23.1 GB</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="block w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 shadow-sm"></span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-image w-3 h-3 text-slate-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-slate-600 font-light">Media</span>
</div>
</div>
<span className="text-slate-400 font-light">20.4 GB</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="block w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-sm"></span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-presentation w-3 h-3 text-slate-400" data-lucide="presentation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-slate-600 font-light">Slides</span>
</div>
</div>
<span className="text-slate-400 font-light">10.2 GB</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="block w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-sm"></span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-code w-3 h-3 text-slate-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-slate-600 font-light">Code</span>
</div>
</div>
<span className="text-slate-400 font-light">28.0 GB</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="block w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-sm"></span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-table w-3 h-3 text-slate-400" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-slate-600 font-light">Data</span>
</div>
</div>
<span className="text-slate-400 font-light">17.8 GB</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="block w-3 h-3 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 shadow-sm"></span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-archive w-3 h-3 text-slate-400" data-lucide="archive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-slate-600 font-light">Archive</span>
</div>
</div>
<span className="text-slate-400 font-light">27.9 GB</span>
</div>
</div>

<div className="mb-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<div className="">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-users-2 w-4 h-4 text-slate-600" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<h4 className="text-slate-800 font-medium tracking-tight">Active Collaborators</h4>
</div>
<div className="flex items-center gap-1 text-xs text-slate-400 font-light">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span>2h ago</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg border-3 border-white flex items-center justify-center text-white text-sm font-medium transform hover:scale-105 transition-transform">ES</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg border-3 border-white flex items-center justify-center text-white text-sm font-medium transform hover:scale-105 transition-transform">MJ</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg border-3 border-white flex items-center justify-center text-white text-sm font-medium transform hover:scale-105 transition-transform">AL</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 shadow-lg border-3 border-white flex items-center justify-center text-white text-sm font-medium transform hover:scale-105 transition-transform">KR</div>
<div className="w-10 h-10 flex items-center justify-center transform hover:scale-105 transition-transform text-xs font-medium text-slate-700 bg-gradient-to-br from-slate-300 to-slate-400 border-white border-3 rounded-full shadow-lg">+8</div>
</div>
<button className="shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.12)] hover:border-slate-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 text-xs font-light text-slate-700 bg-gradient-to-r from-slate-50 to-white border-slate-200/50 border rounded-full pt-2 pr-4 pb-2 pl-4 flex items-center gap-1">
<svg className="lucide lucide-settings w-3 h-3" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Manage</span>
</button>
</div>
</div>
</div>


    </>
  );
}
