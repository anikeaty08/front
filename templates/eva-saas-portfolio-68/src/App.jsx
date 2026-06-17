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
      

<div className="w-full max-w-[1200px] aspect-[16/10] bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/5 relative">

<div className="h-10 bg-zinc-900/90 border-b border-zinc-800 flex items-center px-4 space-x-4 z-20">
<div className="flex space-x-2 group">
<div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors border border-red-500/30"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors border border-yellow-500/30"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors border border-green-500/30"></div>
</div>

<div className="flex-1 flex justify-center">
<div className="bg-zinc-950/50 border border-zinc-800/50 rounded-md py-0.5 px-3 flex items-center space-x-2 text-xs text-zinc-500 w-64 hover:border-zinc-700 transition-colors cursor-text">
<i className="w-3 h-3" data-lucide="lock"></i>
<span className="tracking-tight">eva.ai/portfolio</span>
</div>
</div>
<div className="flex items-center space-x-3">
<i className="w-4 h-4 text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer" data-lucide="layout-grid"></i>
<i className="w-4 h-4 text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer" data-lucide="plus"></i>
</div>
</div>

<div className="flex-1 bg-zinc-950 overflow-y-auto relative">

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 h-full w-full">

<div className="relative group overflow-hidden border-r border-b border-zinc-800/50">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-blue-950/30"></div>

<div className="relative h-full flex flex-col justify-between p-8 md:p-12 z-10">

<div className="flex justify-between items-center opacity-70">
<span className="text-white font-semibold text-lg tracking-tight">.eva</span>
<div className="hidden sm:flex space-x-4 text-xs font-medium text-zinc-300">
<span className="hover:text-white cursor-pointer transition-colors">Manifesto</span>
<span className="hover:text-white cursor-pointer transition-colors">OS 2.0</span>
</div>
</div>

<div className="mt-8 mb-auto flex flex-col items-center justify-center text-center h-full space-y-6">
<h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1]">
                                Your digital partner,<br/>
                                achieving <span className="font-[Playfair_Display] italic text-blue-400">peak</span> productivity
                            </h1>
<p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
                                .eva is an Operating System designed to assist you at all times in anything you do digitally.
                            </p>
<button className="mt-4 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md text-white text-xs font-medium transition-all hover:scale-105 flex items-center space-x-2">
<span>Join Beta</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="relative bg-zinc-950 p-8 md:p-12 flex flex-col justify-center border-b border-zinc-800/50 overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="mb-8 flex items-center justify-between">
<div>
<h2 className="text-xl font-medium text-white tracking-tight">System Core</h2>
<p className="text-xs text-zinc-500 mt-1">Real-time optimization</p>
</div>
<div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
<i className="w-4 h-4" data-lucide="cpu"></i>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4 ios-blur hover:bg-zinc-900 transition-colors">
<div className="flex justify-between items-start mb-4">
<i className="w-4 h-4 text-yellow-400" data-lucide="zap"></i>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Efficiency</span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">98%</div>
<div className="w-full bg-zinc-800 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-yellow-400 w-[98%] h-full rounded-full"></div>
</div>
</div>

<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4 ios-blur hover:bg-zinc-900 transition-colors">
<div className="flex justify-between items-start mb-4">
<i className="w-4 h-4 text-emerald-400" data-lucide="shield-check"></i>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Security</span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">Active</div>
<div className="flex items-center space-x-1 mt-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] text-emerald-500/80">Scanning</span>
</div>
</div>

<div className="col-span-2 bg-blue-600 rounded-2xl p-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
<div className="relative z-10 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
<i className="w-4 h-4 text-white" data-lucide="cloud"></i>
</div>
<div>
<div className="text-sm font-medium text-white">Cloud Sync</div>
<div className="text-xs text-blue-200">Up to date</div>
</div>
</div>
<div className="relative w-10 h-6 bg-blue-900/30 rounded-full border border-blue-400/30 cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-950 border-r border-zinc-800/50 p-8 md:p-12 relative overflow-hidden flex flex-col">
<div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>
<h3 className="text-lg font-medium text-white mb-6 tracking-tight relative z-10">Integration Hub</h3>
<div className="space-y-3 relative z-10 flex-1">

<div className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center space-x-4">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<i className="w-4 h-4 text-zinc-400 group-hover:text-white" data-lucide="slack"></i>
</div>
<div>
<div className="text-sm text-zinc-200 group-hover:text-white">Workspace</div>
<div className="text-[10px] text-zinc-500">Connected</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
</div>

<div className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center space-x-4">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<i className="w-4 h-4 text-zinc-400 group-hover:text-white" data-lucide="figma"></i>
</div>
<div>
<div className="text-sm text-zinc-200 group-hover:text-white">Design System</div>
<div className="text-[10px] text-zinc-500">Syncing...</div>
</div>
</div>
<i className="w-3.5 h-3.5 text-zinc-600 animate-spin" data-lucide="loader-2"></i>
</div>

<div className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center space-x-4">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<i className="w-4 h-4 text-zinc-400 group-hover:text-white" data-lucide="github"></i>
</div>
<div>
<div className="text-sm text-zinc-200 group-hover:text-white">Repository</div>
<div className="text-[10px] text-zinc-500">Last commit 2m ago</div>
</div>
</div>
<i className="w-4 h-4 text-zinc-700 group-hover:text-zinc-500" data-lucide="chevron-right"></i>
</div>
</div>

<div className="mt-auto pt-6 border-t border-zinc-900 relative z-10">
<div className="flex justify-between text-xs text-zinc-500 mb-2">
<span>Storage</span>
<span>240GB / 1TB</span>
</div>
<div className="h-1.5 bg-zinc-900 rounded-full w-full relative">
<div className="absolute left-0 top-0 h-full w-[24%] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
</div>

<div className="bg-zinc-950 p-8 md:p-12 flex flex-col relative overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#27272a 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.3'}}></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-center justify-between mb-8">
<span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-semibold tracking-wide uppercase">Beta Access</span>
<i className="text-zinc-600 cursor-pointer hover:text-white transition-colors" data-lucide="more-horizontal"></i>
</div>
<div className="flex-1 flex items-end space-x-2 pb-6 border-b border-dashed border-zinc-800">

<div className="w-1/5 bg-zinc-800 rounded-t-sm h-[40%] hover:bg-zinc-700 transition-colors"></div>
<div className="w-1/5 bg-zinc-800 rounded-t-sm h-[65%] hover:bg-zinc-700 transition-colors"></div>
<div className="w-1/5 bg-zinc-800 rounded-t-sm h-[50%] hover:bg-zinc-700 transition-colors"></div>
<div className="w-1/5 bg-zinc-800 rounded-t-sm h-[80%] hover:bg-zinc-700 transition-colors"></div>
<div className="w-1/5 bg-blue-500 rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(59,130,246,0.3)] relative group cursor-pointer">

<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                     +145% Growth
                                 </div>
</div>
</div>
<div className="mt-6 flex flex-col items-start">
<h4 className="text-white font-medium mb-1">Scale your output</h4>
<p className="text-xs text-zinc-500 mb-4">Unlock the full potential of your digital workflow.</p>
<a className="w-full group rounded-lg bg-zinc-100 text-zinc-950 py-2.5 px-4 text-xs font-semibold flex items-center justify-center space-x-2 hover:bg-white transition-colors" href="#">
<span>Start free trial</span>
<i className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
