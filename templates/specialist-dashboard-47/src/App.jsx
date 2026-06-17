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
      

<div className="w-full max-w-[1400px] h-[90vh] bg-neutral-900 rounded-xl border border-neutral-800 shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/5 relative">

<div className="h-10 border-b border-neutral-800 flex items-center px-4 gap-2 bg-neutral-900 z-20 shrink-0">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto w-1/3 h-6 bg-neutral-800/50 rounded flex items-center justify-center text-[10px] text-neutral-500 tracking-wide font-medium">
                platform.specialist.io
            </div>
</div>

<div className="flex flex-1 overflow-hidden">

<aside className="w-20 lg:w-64 border-r border-neutral-800 flex flex-col justify-between py-6 bg-neutral-900 shrink-0">
<div className="px-4 lg:px-6">

<div className="flex items-center gap-3 mb-10 text-white">
<div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="hidden lg:block font-medium tracking-tight">WorkSpace</span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-neutral-800/50 border border-neutral-700/50 text-white group" href="#">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Main</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/30 transition-colors" href="#">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Profile</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/30 transition-colors" href="#">
<iconify-icon icon="solar:case-round-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Projects</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/30 transition-colors" href="#">
<iconify-icon icon="solar:chat-line-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Messages</span>
<span className="hidden lg:flex w-1.5 h-1.5 bg-blue-500 rounded-full ml-auto"></span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/30 transition-colors" href="#">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Finance</span>
</a>
</nav>
</div>
<div className="px-4 lg:px-6">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/30 transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Settings</span>
</a>
</div>
</aside>

<main className="flex-1 overflow-y-auto p-6 lg:p-10">
<div className="max-w-5xl mx-auto space-y-8">

<section className="border border-neutral-800 bg-neutral-900/50 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="relative mt-1">
<div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
<div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
</div>
<div>
<h2 className="text-white text-sm font-medium leading-none mb-1.5">Available for projects</h2>
<p className="text-xs text-neutral-500 font-normal">You are visible in search. We are matching your profile.</p>
</div>
</div>
<div className="flex items-center gap-3">
<label className="relative inline-flex items-center cursor-pointer group">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500/20 peer-checked:after:bg-blue-500"></div>
</label>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Action Required</h3>
</div>

<div className="group relative bg-neutral-900 border border-neutral-700 hover:border-blue-500/50 transition-all duration-300 rounded-xl p-6 lg:p-8 shadow-lg shadow-black/20">
<div className="absolute top-0 right-0 p-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    New Offer
                                </span>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-white text-black flex items-center justify-center font-bold text-lg">
<iconify-icon icon="solar:infinity-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm text-neutral-400 mb-0.5">Stripe Inc.</div>
<div className="text-xs text-neutral-500">Fintech • San Francisco</div>
</div>
</div>
<div>
<h1 className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-2">Senior Frontend Engineer</h1>
<div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-neutral-400">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-neutral-500" icon="solar:clock-circle-linear"></iconify-icon>
                                            Long-term
                                        </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-neutral-500" icon="solar:dollar-minimalistic-linear"></iconify-icon>
                                            $85 - $110 / hr
                                        </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-neutral-500" icon="solar:globe-linear"></iconify-icon>
                                            Remote
                                        </span>
</div>
</div>
<div className="flex items-center gap-3 pt-2">
<button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                                        View Project Details
                                    </button>
<button className="text-neutral-400 hover:text-white text-sm font-medium px-5 py-2.5 transition-colors">
                                        Decline
                                    </button>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col">
<span className="text-neutral-500 text-xs mb-2">Offers (30d)</span>
<span className="text-2xl font-normal text-white tracking-tight">2</span>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col">
<span className="text-neutral-500 text-xs mb-2">Profile Views</span>
<span className="text-2xl font-normal text-white tracking-tight">142</span>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col">
<span className="text-neutral-500 text-xs mb-2">Client Matches</span>
<span className="text-2xl font-normal text-white tracking-tight">8</span>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col">
<span className="text-neutral-500 text-xs mb-2">Active Dialogs</span>
<span className="text-2xl font-normal text-white tracking-tight">3</span>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Active Project</h3>
</div>
<div className="border border-neutral-800 bg-neutral-900 rounded-lg p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-neutral-700 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center text-white border border-neutral-700">
<span className="font-medium text-sm">R</span>
</div>
<div>
<h4 className="text-white text-sm font-medium">Revolut Design System</h4>
<p className="text-xs text-neutral-500 mt-0.5">Product Designer • Part-time</p>
</div>
</div>
<div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
<div className="text-right">
<div className="text-[10px] text-neutral-500 uppercase tracking-wide">Next Payout</div>
<div className="text-xs text-neutral-300">Oct 15</div>
</div>
<div className="px-2.5 py-1 rounded-full border border-green-900/50 bg-green-900/10 text-green-500 text-[10px] font-medium uppercase tracking-wide">
                                        Active
                                    </div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Finance</h3>
</div>
<div className="border border-neutral-800 bg-neutral-900 rounded-lg p-5 h-auto lg:h-[88px] flex items-center justify-between">
<div>
<div className="text-xs text-neutral-500 mb-1">Earned this month</div>
<div className="text-lg font-medium text-white tracking-tight">$4,250.00</div>
</div>
<a className="w-8 h-8 rounded hover:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<section className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Priority Messages</h3>
</div>
<div className="border-t border-neutral-800">

<div className="flex items-center justify-between py-4 border-b border-neutral-800/50 group hover:bg-neutral-900/50 -mx-4 px-4 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:shield-user-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-neutral-300 font-medium group-hover:text-white">Alex (Manager)</div>
<div className="text-xs text-neutral-500 truncate max-w-[200px] sm:max-w-md">Please upload the signed NDA for the Stripe project.</div>
</div>
</div>
<span className="text-xs text-neutral-600 whitespace-nowrap">2h ago</span>
</div>

<div className="flex items-center justify-between py-4 border-b border-neutral-800/50 group hover:bg-neutral-900/50 -mx-4 px-4 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400 flex items-center justify-center shrink-0">
<span className="text-xs font-medium">S</span>
</div>
<div>
<div className="text-sm text-neutral-300 group-hover:text-white">Stripe Hiring Team</div>
<div className="text-xs text-neutral-500 truncate max-w-[200px] sm:max-w-md">Interview invitation: Technical Screen</div>
</div>
</div>
<span className="text-xs text-neutral-600 whitespace-nowrap">1d ago</span>
</div>
</div>
</section>
</div>
</main>
</div>
</div>

    </>
  );
}
