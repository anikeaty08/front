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
      

<div className="w-full max-w-[480px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200 flex flex-col overflow-hidden">

<div className="flex border-gray-100 border-b pt-4 pr-5 pb-4 pl-5 items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-blue-600" icon="solar:branching-paths-up-linear"></iconify-icon>
<h2 className="text-2xl font-normal text-gray-900 tracking-tight">Select Branch</h2>
</div>
<div className="flex items-center gap-1">
<button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100/80 rounded-lg transition-colors outline-none focus:ring-2 focus:ring-gray-200 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
</button>
<button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100/80 rounded-lg transition-colors outline-none focus:ring-2 focus:ring-gray-200 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:list-linear"></iconify-icon>
</button>
</div>
</div>

<div className="p-4 border-b border-gray-100 bg-gray-50/50">
<div className="relative flex items-center bg-white rounded-xl px-3.5 py-2.5 border border-gray-200 shadow-sm focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all">
<iconify-icon className="text-lg text-gray-400 shrink-0" icon="solar:magnifer-linear"></iconify-icon>
<input className="outline-none placeholder-gray-400 text-base font-normal text-gray-900 bg-transparent w-full ml-3" placeholder="Filter branches by path..." type="text"/>
</div>
</div>

<div className="overflow-y-auto max-h-[480px] pb-3">

<div className="px-5 pt-5 pb-3 flex items-center justify-between">
<span className="uppercase text-xs font-medium text-gray-400 tracking-widest">UNMERGED Branches</span>
<span className="text-xs font-medium text-gray-400">7 items</span>
</div>
<div className="space-y-1">

<div className="mx-2 px-3 py-3 bg-blue-50 rounded-xl flex items-start gap-3.5 relative group transition-colors cursor-default">
<iconify-icon className="text-xl text-blue-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div className="flex-1 min-w-0 pr-8">
<div className="text-base font-normal text-blue-900 truncate">origin/main</div>
<div className="flex gap-2 text-sm font-normal text-blue-600/70 mt-1 gap-x-2 gap-y-2 items-center">
<span className="truncate">Compiled 1hr ago</span>
</div>
</div>
<button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-blue-600/60 hover:text-blue-600 hover:bg-blue-100/60 rounded-lg opacity-0 group-hover:opacity-100 transition-all outline-none focus:opacity-100 focus:ring-2 focus:ring-blue-200 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:restart-linear"></iconify-icon>
</button>
</div>

<div className="mx-2 px-3 py-3 hover:bg-gray-50 rounded-xl flex items-start gap-3.5 cursor-pointer group transition-colors">
<iconify-icon className="text-xl text-gray-400 mt-0.5 shrink-0 group-hover:text-gray-500 transition-colors" icon="solar:question-circle-linear"></iconify-icon>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-gray-900 truncate">origin/feature/inline-edit</div>
<div className="truncate text-sm font-normal text-gray-500 mt-1">Not compiled yet</div>
</div>
</div>

<div className="mx-2 px-3 py-3 hover:bg-red-50/50 rounded-xl flex items-start gap-3.5 cursor-pointer group transition-colors">
<iconify-icon className="text-xl text-red-500 mt-0.5 shrink-0 group-hover:text-red-600 transition-colors" icon="solar:close-circle-linear"></iconify-icon>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-gray-900 truncate">origin/hotfix/api-v2-auth</div>
<div className="truncate text-sm font-normal text-red-600 mt-1">Failed 3hr ago</div>
</div>
</div>

<div className="hover:bg-gray-50 flex gap-3.5 cursor-pointer group transition-colors rounded-xl mr-2 ml-2 pt-3 pr-3 pb-3 pl-3 gap-x-3.5 gap-y-3.5 items-start">
<iconify-icon className="text-xl text-gray-400 mt-0.5 shrink-0 group-hover:text-green-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon>
<div className="flex-1 min-w-0">
<div className="truncate text-base font-normal text-gray-900">origin/release/v1.3.0-rc</div>
<div className="truncate text-sm font-normal text-gray-500 mt-1">Compiled 2 days ago</div>
</div>
</div><div className="hover:bg-gray-50 flex gap-3.5 cursor-pointer group transition-colors opacity-75 rounded-xl mr-2 ml-2 pt-3 pr-3 pb-3 pl-3 gap-x-3.5 gap-y-3.5 items-start">
<iconify-icon className="shrink-0 group-hover:text-gray-500 transition-colors text-xl text-gray-400 mt-0.5" height="20" icon="solar:ghost-linear" style={{color: 'rgb(107, 114, 128)'}} width="20"></iconify-icon>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-gray-500 line-through truncate">origin/feature/old-experiment</div>
<div className="mt-1 text-sm text-gray-400 truncate font-normal">Branch missing from remote</div>
</div>
</div>


<div className="hover:bg-gray-50 flex gap-3.5 cursor-pointer group transition-colors rounded-xl mr-2 ml-2 pt-3 pr-3 pb-3 pl-3 gap-x-3.5 gap-y-3.5 items-start">
<iconify-icon className="text-xl text-gray-400 mt-0.5 shrink-0 group-hover:text-gray-500 transition-colors" icon="solar:question-circle-linear"></iconify-icon>
<div className="flex-1 min-w-0">
<div className="truncate text-base font-normal text-gray-900">origin/feature/dark-mode-palette</div>
<div className="truncate text-sm font-normal text-gray-500 mt-1">Not compiled yet</div>
</div>
</div><div className="hover:bg-gray-50 flex gap-3.5 cursor-pointer group transition-colors rounded-xl mr-2 ml-2 pt-3 pr-3 pb-3 pl-3 gap-x-3.5 gap-y-3.5 items-start">
<iconify-icon className="text-xl text-gray-400 mt-0.5 shrink-0 group-hover:text-gray-500 transition-colors" icon="solar:question-circle-linear"></iconify-icon>
<div className="flex-1 min-w-0">
<div className="truncate text-base font-normal text-gray-900">origin/feature/dark-mode-palette</div>
<div className="truncate text-sm font-normal text-gray-500 mt-1">Not compiled yet</div>
</div>
</div><div className="hover:bg-gray-50 flex gap-3.5 cursor-pointer group transition-colors rounded-xl mr-2 ml-2 pt-3 pr-3 pb-3 pl-3 gap-x-3.5 gap-y-3.5 items-start">
<iconify-icon className="text-xl text-gray-400 mt-0.5 shrink-0 group-hover:text-gray-500 transition-colors" icon="solar:question-circle-linear"></iconify-icon>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-gray-900 truncate">origin/feature/dark-mode-palette</div>
<div className="truncate text-sm font-normal text-gray-500 mt-1">Not compiled yet</div>
</div>
</div>

<div className="mx-2 px-3 py-3 hover:bg-red-50/50 rounded-xl flex items-start gap-3.5 cursor-pointer group transition-colors">
<iconify-icon className="text-xl text-red-500 mt-0.5 shrink-0 group-hover:text-red-600 transition-colors" icon="solar:close-circle-linear"></iconify-icon>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-gray-900 truncate">origin/dependabot/npm-packages</div>
<div className="truncate text-sm font-normal text-red-600 mt-1">Failed 5 days ago</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
