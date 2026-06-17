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
      

<div className="max-w-7xl mx-auto mb-12">
<h1 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">User Flow Wireframe</h1>
<p className="text-gray-500 max-w-2xl">Low-fidelity mockups for an AI Content Creation application. Focus on structure, hierarchy, and navigation paths.</p>
</div>

<div className="max-w-7xl mx-auto flex flex-wrap justify-center xl:justify-start gap-12">

<div className="flex flex-col gap-4">
<span className="text-xs font-medium uppercase tracking-widest text-gray-400">01. Welcome Screen</span>

<div className="w-[320px] h-[640px] bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden relative flex flex-col">

<div className="h-6 w-full flex justify-between items-center px-6 mt-3">
<div className="w-8 h-3 bg-gray-200 rounded-full"></div>
<div className="flex gap-1">
<div className="w-3 h-3 bg-gray-200 rounded-full"></div>
<div className="w-3 h-3 bg-gray-200 rounded-full"></div>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center p-8 text-center">

<div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-8 border border-dashed border-gray-300">
<iconify-icon className="text-gray-400 text-3xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="w-full space-y-3 mb-12">

<div className="h-6 bg-gray-900 rounded-md w-3/4 mx-auto"></div>
<div className="h-6 bg-gray-900 rounded-md w-1/2 mx-auto"></div>
<div className="h-3 bg-gray-100 rounded w-full mt-6"></div>
<div className="h-3 bg-gray-100 rounded w-5/6 mx-auto"></div>
</div>
</div>

<div className="p-8 pb-12 w-full">
<button className="w-full h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-medium text-sm tracking-wide">
                        Get Started
                    </button>
<div className="mt-4 flex justify-center">
<div className="h-3 w-1/3 bg-gray-100 rounded"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="text-xs font-medium uppercase tracking-widest text-gray-400">02. Authentication</span>
<div className="w-[320px] h-[640px] bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden relative flex flex-col p-8">

<div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center mb-8">
<iconify-icon className="text-gray-400" icon="solar:arrow-left-linear"></iconify-icon>
</div>

<div className="mb-8">
<div className="h-6 w-1/2 bg-gray-900 rounded mb-3"></div>
<div className="h-3 w-3/4 bg-gray-100 rounded"></div>
</div>

<div className="space-y-6">

<div className="space-y-2">
<div className="h-3 w-16 bg-gray-200 rounded"></div>
<div className="h-12 w-full border border-gray-200 rounded-lg bg-gray-50 flex items-center px-4">
<div className="h-2 w-1/3 bg-gray-200 rounded"></div>
</div>
</div>

<div className="space-y-2">
<div className="h-3 w-20 bg-gray-200 rounded"></div>
<div className="h-12 w-full border border-gray-200 rounded-lg bg-gray-50 flex items-center px-4 justify-between">
<div className="h-2 w-1/4 bg-gray-200 rounded"></div>
<iconify-icon className="text-gray-300" icon="solar:eye-closed-linear"></iconify-icon>
</div>
</div>
</div>

<div className="mt-8 space-y-4">
<button className="w-full h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-medium text-sm tracking-wide">
                        Sign In
                    </button>
<div className="flex items-center justify-center gap-2 py-2">
<div className="h-px bg-gray-200 w-full"></div>
<span className="text-xs text-gray-300 px-2">OR</span>
<div className="h-px bg-gray-200 w-full"></div>
</div>
<button className="w-full h-12 border border-gray-200 rounded-lg flex items-center justify-center gap-2">
<div className="w-4 h-4 rounded-full bg-gray-300"></div>
<div className="h-2 w-24 bg-gray-200 rounded"></div>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="text-xs font-medium uppercase tracking-widest text-gray-400">03. Templates Dashboard</span>
<div className="w-[320px] h-[640px] bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden relative flex flex-col">

<div className="px-6 pt-6 pb-2 flex justify-between items-center">
<div className="flex flex-col gap-1">
<div className="h-3 w-24 bg-gray-200 rounded"></div>
<div className="h-5 w-32 bg-gray-900 rounded"></div>
</div>
<div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200"></div>
</div>

<div className="px-6 py-4">
<div className="h-10 w-full bg-gray-50 border border-gray-200 rounded-lg flex items-center px-3 gap-2">
<iconify-icon className="text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
<div className="h-2 w-1/3 bg-gray-200 rounded"></div>
</div>
</div>

<div className="px-6 flex gap-3 overflow-x-hidden pb-4 border-b border-gray-50">
<div className="px-4 py-1.5 bg-gray-900 rounded-full min-w-max">
<div className="h-2 w-8 bg-white/20 rounded"></div>
</div>
<div className="px-4 py-1.5 border border-gray-200 rounded-full min-w-max">
<div className="h-2 w-12 bg-gray-200 rounded"></div>
</div>
<div className="px-4 py-1.5 border border-gray-200 rounded-full min-w-max">
<div className="h-2 w-10 bg-gray-200 rounded"></div>
</div>
</div>

<div className="flex-1 overflow-y-hidden px-6 py-4">
<div className="grid grid-cols-2 gap-4">

<div className="aspect-square border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:border-gray-400 transition-colors cursor-pointer">
<div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
<iconify-icon className="text-gray-400" icon="solar:document-add-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-3 w-3/4 bg-gray-800 rounded"></div>
<div className="h-2 w-full bg-gray-100 rounded"></div>
</div>
</div>

<div className="aspect-square border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
<div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
<iconify-icon className="text-gray-400" icon="solar:mention-circle-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-3 w-1/2 bg-gray-800 rounded"></div>
<div className="h-2 w-full bg-gray-100 rounded"></div>
</div>
</div>

<div className="aspect-square border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
<div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
<iconify-icon className="text-gray-400" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-3 w-2/3 bg-gray-800 rounded"></div>
<div className="h-2 w-full bg-gray-100 rounded"></div>
</div>
</div>

<div className="aspect-square border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
<div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
<iconify-icon className="text-gray-400" icon="solar:tag-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-3 w-3/4 bg-gray-800 rounded"></div>
<div className="h-2 w-full bg-gray-100 rounded"></div>
</div>
</div>
</div>
</div>

<div className="h-16 border-t border-gray-100 flex justify-around items-center px-4">
<iconify-icon className="text-gray-900 text-xl" icon="solar:home-2-linear"></iconify-icon>
<iconify-icon className="text-gray-300 text-xl" icon="solar:folder-linear"></iconify-icon>
<iconify-icon className="text-gray-300 text-xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="text-xs font-medium uppercase tracking-widest text-gray-400">04. Input Configuration</span>
<div className="w-[320px] h-[640px] bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden relative flex flex-col">

<div className="px-6 py-6 flex items-center gap-4 border-b border-gray-50">
<iconify-icon className="text-gray-500 text-lg" icon="solar:arrow-left-linear"></iconify-icon>
<div className="h-4 w-32 bg-gray-900 rounded"></div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="space-y-2">
<div className="flex justify-between">
<div className="h-3 w-12 bg-gray-300 rounded"></div>
</div>
<div className="h-10 w-full border border-gray-200 rounded-lg bg-gray-50"></div>
</div>

<div className="space-y-2">
<div className="h-3 w-16 bg-gray-300 rounded"></div>
<div className="h-24 w-full border border-gray-200 rounded-lg bg-gray-50 p-2">
<div className="h-2 w-4 bg-gray-300 rounded"></div>
</div>
</div>

<div className="space-y-2">
<div className="h-3 w-10 bg-gray-300 rounded"></div>
<div className="h-10 w-full border border-gray-200 rounded-lg flex items-center justify-between px-3">
<div className="h-2 w-20 bg-gray-200 rounded"></div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="space-y-4 pt-2">
<div className="flex justify-between items-center">
<div className="h-3 w-14 bg-gray-300 rounded"></div>
<div className="h-3 w-8 bg-gray-200 rounded"></div>
</div>
<div className="relative h-6 flex items-center">
<div className="w-full h-1 bg-gray-100 rounded-full"></div>
<div className="absolute left-0 h-1 w-2/3 bg-gray-900 rounded-full"></div>
<div className="absolute left-2/3 w-5 h-5 bg-white border-2 border-gray-900 rounded-full shadow-sm -ml-2.5"></div>
</div>
</div>
</div>

<div className="p-6 border-t border-gray-50">
<button className="w-full h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-gray-200">
<iconify-icon className="text-lg" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-sm font-medium tracking-wide">Generate Content</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="text-xs font-medium uppercase tracking-widest text-gray-400">05. Output Result</span>
<div className="w-[320px] h-[640px] bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden relative flex flex-col">

<div className="px-6 py-6 flex items-center justify-between border-b border-gray-50">
<iconify-icon className="text-gray-400 text-xl" icon="solar:close-linear"></iconify-icon>
<div className="flex gap-4">
<iconify-icon className="text-gray-400 text-xl" icon="solar:bookmark-linear"></iconify-icon>
<iconify-icon className="text-gray-400 text-xl" icon="solar:menu-dots-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 p-6 overflow-y-auto no-scrollbar">

<div className="h-5 w-3/4 bg-gray-900 rounded mb-6"></div>

<div className="space-y-3 mb-8">
<div className="h-2 w-full bg-gray-200 rounded"></div>
<div className="h-2 w-full bg-gray-200 rounded"></div>
<div className="h-2 w-5/6 bg-gray-200 rounded"></div>
<div className="h-2 w-full bg-gray-200 rounded"></div>
<div className="h-2 w-4/5 bg-gray-200 rounded"></div>
</div>
<div className="space-y-3 mb-8">
<div className="h-2 w-11/12 bg-gray-200 rounded"></div>
<div className="h-2 w-full bg-gray-200 rounded"></div>
<div className="h-2 w-full bg-gray-200 rounded"></div>
<div className="h-2 w-3/4 bg-gray-200 rounded"></div>
</div>

<div className="flex gap-4 mt-8">
<div className="px-3 py-1 border border-gray-200 rounded text-xs text-gray-400">720 words</div>
<div className="px-3 py-1 border border-gray-200 rounded text-xs text-gray-400">Reading: 2m</div>
</div>
</div>

<div className="p-6">
<div className="flex gap-3">
<button className="flex-1 h-12 border border-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
<iconify-icon className="text-gray-600" icon="solar:copy-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-600">Copy</span>
</button>
<button className="flex-1 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center gap-2">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon>
<span className="text-sm font-medium">Edit</span>
</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
