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
      

<div className="w-full max-w-6xl aspect-square md:aspect-auto md:h-[800px] border border-stone-800 rounded-xl bg-gray-900 shadow-md flex flex-col relative overflow-hidden group">

<div className="h-12 border-b border-stone-800 bg-gray-900/90 backdrop-blur-sm flex items-center px-4 space-x-3 z-20 shrink-0">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-stone-700/50"></div>
<div className="w-3 h-3 rounded-full bg-stone-700/50"></div>
<div className="w-3 h-3 rounded-full bg-stone-700/50"></div>
</div>

<div className="flex-1 max-w-lg mx-auto h-7 bg-stone-900 border border-stone-800 rounded flex items-center justify-center">
<div className="flex items-center space-x-1 opacity-50">
<iconify-icon className="text-stone-400" icon="solar:lock-password-linear" width="12"></iconify-icon>
<span className="text-xs font-manrope tracking-tight text-stone-500">platform.dashboard.com</span>
</div>
</div>

<div className="ml-auto">
<span className="heading-font font-bold tracking-tighter text-lg text-white">NEXUS</span>
</div>
</div>

<div className="flex-1 grid grid-cols-1 md:grid-cols-2 grid-rows-2 h-full">

<div className="border-b border-stone-800 md:border-r p-8 md:p-12 flex flex-col justify-between animate-3d-sequence" style={{animationDelay: '0ms'}}>
<div className="space-y-6">
<div className="w-12 h-12 rounded-lg border border-stone-800 bg-stone-900/50 flex items-center justify-center text-indigo-500 shadow-sm">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h2 className="heading-font text-4xl text-white font-normal tracking-tight mb-2">Analytics</h2>
<p className="font-manrope text-lg text-gray-400 font-light leading-relaxed">
                            Real-time data processing with sub-millisecond latency for instant insights.
                        </p>
</div>
</div>

<div className="mt-8 h-32 flex items-end justify-between gap-2 px-1">
<div className="w-full bg-indigo-500/10 border-t border-indigo-500/30 h-[40%] rounded-t-sm relative group/bar">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-indigo-400 opacity-0 group-hover/bar:opacity-100 transition-opacity">40%</div>
</div>
<div className="w-full bg-indigo-500/20 border-t border-indigo-500/40 h-[65%] rounded-t-sm relative group/bar">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-indigo-400 opacity-0 group-hover/bar:opacity-100 transition-opacity">65%</div>
</div>
<div className="w-full bg-indigo-500/10 border-t border-indigo-500/30 h-[50%] rounded-t-sm relative group/bar">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-indigo-400 opacity-0 group-hover/bar:opacity-100 transition-opacity">50%</div>
</div>
<div className="w-full bg-indigo-500/40 border-t border-indigo-500/60 h-[85%] rounded-t-sm relative group/bar">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-indigo-400 opacity-0 group-hover/bar:opacity-100 transition-opacity">85%</div>
</div>
<div className="w-full bg-indigo-500/80 border-t border-indigo-500 h-[75%] rounded-t-sm shadow-[0_0_15px_rgba(99,102,241,0.3)] relative group/bar">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-indigo-300 opacity-100">75%</div>
</div>
</div>
</div>

<div className="md:p-12 flex flex-col animate-3d-sequence border-stone-800 border-b pt-8 pr-8 pb-8 pl-8" style={{animationDelay: '150ms'}}>
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 rounded-lg border border-stone-800 bg-stone-900/50 flex items-center justify-center text-indigo-500 shadow-sm">
<iconify-icon className="" icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>

<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="peer-focus:outline-none peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500 bg-stone-800 w-11 h-6 rounded-full relative"></div>
</label>
</div>
<h2 className="heading-font text-4xl text-white font-normal tracking-tight mb-2">Workflow</h2>
<p className="font-manrope text-lg text-gray-400 font-light leading-relaxed mb-8">
                    Automate deployment pipelines with conditional logic gates.
                </p>

<div className="space-y-4 mt-auto">
<div className="flex items-center gap-4 p-3 rounded-lg border border-stone-800/50 bg-stone-900/30 hover:border-indigo-500/30 transition-colors group/item">
<div className="flex items-center justify-center w-8 h-8 rounded-full border border-stone-700 text-stone-400 group-hover/item:text-indigo-400 group-hover/item:border-indigo-500/50 transition-colors">
<iconify-icon icon="solar:git-branch-linear" width="16"></iconify-icon>
</div>
<span className="text-base text-gray-300 font-light">Branch Protection</span>
<div className="ml-auto w-2 h-2 rounded-full bg-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg border border-stone-800/50 bg-stone-900/30 hover:border-indigo-500/30 transition-colors group/item">
<div className="flex items-center justify-center w-8 h-8 rounded-full border border-stone-700 text-stone-400 group-hover/item:text-indigo-400 group-hover/item:border-indigo-500/50 transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<span className="text-base text-gray-300 font-light">Security Scan</span>
<div className="ml-auto w-2 h-2 rounded-full bg-indigo-500/50 shadow-[0_0_8px_rgba(99,102,241,0.4)]"></div>
</div>
</div>
</div>

<div className="md:border-b-0 md:border-r md:p-12 animate-3d-sequence border-stone-800 border-b pt-8 pr-8 pb-8 pl-8" style={{animationDelay: '300ms'}}>
<div className="w-12 h-12 rounded-lg border border-stone-800 bg-stone-900/50 flex items-center justify-center text-indigo-500 shadow-sm mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="heading-font text-2xl text-white font-normal tracking-tight mb-2">Team Access</h3>
<p className="font-manrope text-lg text-gray-400 font-light leading-relaxed mb-8">
                    Manage roles and permissions across your organization.
                </p>

<div className="flex items-center -space-x-3 mb-8">
<div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-stone-800 flex items-center justify-center text-xs text-white">JD</div>
<div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-indigo-900 flex items-center justify-center text-xs text-white">AS</div>
<div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-stone-700 flex items-center justify-center text-xs text-white">MR</div>
<div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-stone-800 flex items-center justify-center text-xs text-stone-400 border-dashed border-stone-600">+4</div>
</div>
<button className="group flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium tracking-wide uppercase">
                    Manage Members
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="p-8 md:p-12 animate-3d-sequence" style={{animationDelay: '450ms'}}>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-lg border border-stone-800 bg-stone-900/50 flex items-center justify-center text-indigo-500 shadow-sm">
<iconify-icon icon="solar:rocket-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 rounded border border-green-500/20 bg-green-500/10 text-green-400 text-xs tracking-wide uppercase font-semibold">Active</span>
</div>
<h3 className="heading-font text-2xl text-white font-normal tracking-tight mb-2">Deployments</h3>
<p className="font-manrope text-lg text-gray-400 font-light leading-relaxed mb-6">
                    Zero-downtime rollouts with instant rollback capabilities.
                </p>

<div className="space-y-4">
<div className="flex items-center justify-between text-sm">
<span className="text-stone-400 font-light">Production</span>
<span className="text-white font-mono">v2.4.0</span>
</div>

<div className="relative w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full w-2/3 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="flex items-center justify-between text-xs text-stone-500 pt-1">
<span>US-East-1</span>
<span>32ms</span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
