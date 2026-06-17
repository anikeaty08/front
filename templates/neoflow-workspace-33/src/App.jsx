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
      

<div className="w-full max-w-[1400px] h-[90vh] min-h-[800px] bg-white rounded-[32px] shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_24px_48px_-12px_rgba(0,0,0,0.08)] overflow-hidden animate-enter border border-zinc-200/60 flex relative">

<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 h-full">

<aside className="hidden lg:col-span-3 lg:flex flex-col gap-6 bg-[#09090b] text-zinc-300 p-5 dark-scroll border-r border-zinc-800/50">

<div className="flex items-center justify-between px-2 pt-1">
<div className="flex items-center gap-3 text-white">
<div className="w-8 h-8 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center text-zinc-950 shadow-lg shadow-emerald-500/20">
<iconify-icon icon="solar:stars-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight font-heading">Nova Sales</span>
</div>
<button className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:keyboard-linear" width="20"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-2 gap-2.5">
<div className="bg-white/5 rounded-2xl p-3.5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300">Worklist</span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">6</div>
</div>
<div className="bg-white/5 rounded-2xl p-3.5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300">New leads</span>
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]"></span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">27</div>
</div>
<div className="bg-white/5 rounded-2xl p-3.5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300">Updates</span>
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]"></span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">22</div>
</div>
<div className="bg-white/5 rounded-2xl p-3.5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300">Assigned</span>
<span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]"></span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">3</div>
</div>
</div>

<nav className="space-y-1">
<div className="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">Menu</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/10 text-white font-medium text-sm border border-white/5" href="#">
<iconify-icon icon="solar:home-linear" width="20"></iconify-icon>
                        Home
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 font-medium text-sm transition-all" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                        Leads
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 font-medium text-sm transition-all" href="#">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
                        Calendar
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 font-medium text-sm transition-all" href="#">
<iconify-icon icon="solar:mailbox-linear" width="20"></iconify-icon>
                        Inbox
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 font-medium text-sm transition-all" href="#">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
                        Settings
                    </a>
</nav>

<div className="flex-1 overflow-hidden flex flex-col min-h-0">
<div className="flex items-center justify-between px-2 mb-3">
<div className="flex items-center gap-2 text-zinc-200">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="18"></iconify-icon>
<h3 className="text-sm font-medium">Worklist</h3>
</div>
<button className="text-[11px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors">View all</button>
</div>
<div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar flex-1">

<div className="p-3 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-900/20 group cursor-pointer relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-400" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/94f325d2-00ce-48ec-9c3d-a87ff77bb836_320w.jpg"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-semibold text-zinc-900 truncate">Avery Nolan</div>
<div className="text-[10px] font-medium text-emerald-900/70 truncate">Nordbyte</div>
</div>
<span className="px-2 py-0.5 bg-white/90 text-emerald-900 text-[10px] font-semibold rounded-full shadow-sm">High</span>
</div>
<div className="mt-2 text-[11px] font-medium text-emerald-900/80">Awaiting proposal</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
</div>

<div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4d72eb51-d86e-431b-ad62-97cdf574a592_320w.jpg"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-zinc-300 truncate">Maya Chen</div>
<div className="text-[10px] text-zinc-500 truncate">Lunatech</div>
</div>
<span className="px-2 py-0.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-medium rounded-full">High</span>
</div>
</div>

<div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d72202a6-6f82-40bf-84db-846e9adc396a_320w.jpg"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-zinc-300 truncate">Leo Kramer</div>
<div className="text-[10px] text-zinc-500 truncate">Orbital</div>
</div>
<span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-medium rounded-full">Mid</span>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/5 mt-auto">
<img className="w-8 h-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b42a4dfd-8458-407e-a755-f3d75cdd369b_320w.jpg"/>
<div className="flex-1 min-w-0">
<div className="text-xs font-semibold text-white">Jordan Lake</div>
<div className="text-[10px] text-zinc-500">Account Executive</div>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:logout-linear" width="18"></iconify-icon>
</button>
</div>
</aside>

<main className="col-span-1 lg:col-span-6 flex flex-col bg-white overflow-y-auto overflow-x-hidden relative z-0">

<div className="p-6 sticky top-0 bg-white/90 backdrop-blur-md z-20 border-b border-zinc-100">
<div className="flex items-start gap-5">
<div className="relative">
<img className="w-16 h-16 rounded-full object-cover ring-4 ring-zinc-50 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2d84440c-f8f5-4db9-aa0b-0b4e3512a162_320w.jpg"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-[3px] border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0 pt-1">
<div className="flex flex-wrap items-center gap-3">
<h1 className="text-2xl font-bold tracking-tight text-zinc-900">Avery Nolan</h1>
<span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-orange-50 text-orange-600 border border-orange-100">High Priority</span>
<span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-50 text-cyan-600 border border-cyan-100">Warm</span>
</div>
<div className="mt-2 flex flex-wrap gap-y-1 gap-x-4 text-xs text-zinc-500 font-medium">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="solar:case-linear"></iconify-icon>
                                    Product Manager • Nordbyte
                                </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon>
                                    Boise, ID
                                </div>
</div>
</div>
<div className="flex gap-2">
<button className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-black transition-all shadow-lg shadow-zinc-200">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="mt-8 flex flex-wrap items-center gap-2">
<button className="btn-beam px-4 py-1.5 bg-zinc-900 text-white text-xs font-semibold rounded-full shadow-lg shadow-zinc-200">
                            Timeline
                        </button>
<button className="px-4 py-1.5 text-zinc-600 hover:bg-zinc-100 text-xs font-medium rounded-full transition-colors">Deal #A-239462</button>
<button className="px-4 py-1.5 text-zinc-600 hover:bg-zinc-100 text-xs font-medium rounded-full transition-colors">Documents</button>
<button className="px-4 py-1.5 text-zinc-600 hover:bg-zinc-100 text-xs font-medium rounded-full transition-colors">Notes</button>
<div className="ml-auto flex items-center gap-2 pl-2 border-l border-zinc-200">
<div className="relative group">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-600 transition-colors" icon="solar:magnifer-linear" width="14"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 bg-zinc-50 border-none rounded-full text-xs font-medium text-zinc-900 w-32 focus:w-48 transition-all focus:ring-2 focus:ring-zinc-100 outline-none placeholder-zinc-400" placeholder="Search" type="text"/>
</div>
</div>
</div>
</div>

<div className="p-6 space-y-4 bg-zinc-50/50 flex-1">

<div className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm flex gap-5 group hover:shadow-md transition-all duration-300">
<div className="flex flex-col items-center gap-2 pt-1 w-12 shrink-0">
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wide">Today</span>
<div className="w-8 h-8 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center ring-4 ring-white">
<iconify-icon icon="solar:chat-line-linear" width="16"></iconify-icon>
</div>
<div className="w-px h-full bg-zinc-100 group-last:hidden"></div>
</div>
<div className="flex-1 pb-4">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-semibold text-zinc-900">Proposal Sent</h3>
<button className="text-zinc-300 hover:text-zinc-600 transition-colors"><iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon></button>
</div>
<p className="text-xs text-zinc-500 leading-relaxed mb-3">Shared the updated comparison matrix and product overview as requested during the call.</p>
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full ring-2 ring-white" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b42a4dfd-8458-407e-a755-f3d75cdd369b_320w.jpg"/>
<span className="text-[11px] font-medium text-zinc-600">Jordan Lake</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-[10px] font-medium text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full">Discovery Stage</span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm flex gap-5 group hover:shadow-md transition-all duration-300">
<div className="flex flex-col items-center gap-2 pt-1 w-12 shrink-0">
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wide">May 15</span>
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center ring-4 ring-white">
<iconify-icon icon="solar:hand-shake-linear" width="16"></iconify-icon>
</div>
<div className="w-px h-full bg-zinc-100 group-last:hidden"></div>
</div>
<div className="flex-1 pb-4">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-semibold text-zinc-900">Requirements Gathering</h3>
<button className="text-zinc-300 hover:text-zinc-600 transition-colors"><iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon></button>
</div>
<p className="text-xs text-zinc-500 leading-relaxed mb-3">Client is considering the enterprise team plan. Waiting on internal approval for budget expansion.</p>
<div className="flex items-center gap-2">
<span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Negotiation</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden mt-4">
<div className="p-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-8 h-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2d84440c-f8f5-4db9-aa0b-0b4e3512a162_320w.jpg"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div>
<div className="text-xs font-semibold text-zinc-900">Live Chat</div>
<div className="text-[10px] text-zinc-400">Online now</div>
</div>
</div>
<div className="flex gap-1">
<button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-lg"><iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon></button>
<button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-lg"><iconify-icon icon="solar:videocamera-linear" width="16"></iconify-icon></button>
</div>
</div>
<div className="p-4 space-y-3 bg-zinc-50/30">
<div className="flex gap-3">
<div className="bg-white border border-zinc-100 p-3 rounded-2xl rounded-tl-none text-xs text-zinc-600 shadow-sm max-w-[80%]">
                                    Hey Jordan, did you get a chance to look at the draft?
                                    <div className="mt-1 text-[10px] text-zinc-400">9:20 am</div>
</div>
</div>
<div className="flex gap-3 justify-end">
<div className="bg-zinc-900 text-white p-3 rounded-2xl rounded-tr-none text-xs shadow-md max-w-[80%]">
                                    Yes! Reviewing the notes now. Sending the revised proposal in 5 mins.
                                    <div className="mt-1 text-[10px] text-white/50">9:22 am</div>
</div>
</div>
</div>
<div className="p-3 bg-white border-t border-zinc-100">
<div className="flex items-center gap-2 bg-zinc-50 rounded-xl px-3 py-2 border border-zinc-100 focus-within:ring-2 focus-within:ring-zinc-100 focus-within:border-zinc-300 transition-all">
<button className="text-zinc-400 hover:text-zinc-600"><iconify-icon icon="solar:paperclip-linear" width="18"></iconify-icon></button>
<input className="flex-1 bg-transparent border-none outline-none text-xs text-zinc-900 placeholder-zinc-400 h-full" placeholder="Type a message..." type="text"/>
<button className="w-7 h-7 bg-emerald-500 text-white rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-sm">
<iconify-icon className="ml-0.5" icon="solar:plain-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden lg:col-span-3 lg:flex flex-col gap-4 bg-white border-l border-zinc-100 p-5 overflow-y-auto">

<div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[24px] p-5 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-50"><iconify-icon className="text-white/20 rotate-12" icon="solar:cup-linear" width="60"></iconify-icon></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-semibold text-base tracking-tight">AeroPress Kit</h3>
<p className="text-xs text-orange-100 font-medium">Brew bundle + filters</p>
</div>
<button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-colors">
<iconify-icon icon="solar:bookmark-linear" width="16"></iconify-icon>
</button>
</div>
<div className="flex bg-black/10 backdrop-blur-sm p-1 rounded-full mb-5">
<button className="flex-1 py-1.5 text-[11px] font-semibold bg-white text-orange-600 rounded-full shadow-sm">Negotiation</button>
<button className="flex-1 py-1.5 text-[11px] font-medium text-white/80 hover:text-white transition-colors">Closed</button>
</div>
<div>
<div className="text-[10px] font-semibold text-orange-100 uppercase tracking-wider">Potential Value</div>
<div className="text-3xl font-light tracking-tight mt-0.5 font-heading">$23,500</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center gap-2 text-xs font-medium text-orange-50">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                Client fit confirmed
                            </div>
<div className="flex items-center gap-2 text-xs font-medium text-orange-50">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                Budget approved
                            </div>
</div>
</div>
</div>

<div className="bg-cyan-50 rounded-[24px] p-5 border border-cyan-100">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-semibold text-sm text-zinc-900">Next Task</h3>
<p className="text-xs text-zinc-500 mt-0.5">Prepare contract</p>
</div>
<div className="w-8 h-8 rounded-full bg-white text-cyan-600 shadow-sm border border-cyan-100 flex items-center justify-center">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="16"></iconify-icon>
</div>
</div>
<div className="bg-white rounded-xl p-3 border border-cyan-100 shadow-sm mb-4">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold text-zinc-900">Due Today</span>
<span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold rounded-full uppercase tracking-wide">Urgent</span>
</div>
<div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-cyan-500 h-full w-[70%]"></div>
</div>
</div>
<div className="space-y-2">
<div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Comparison</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-white p-3 rounded-xl border border-zinc-100 shadow-sm">
<div className="text-xs font-bold text-zinc-900 mb-1">Us</div>
<div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
<iconify-icon className="text-orange-400" icon="solar:star-linear" width="12"></iconify-icon>
                                    Premium
                                </div>
</div>
<div className="bg-white/50 p-3 rounded-xl border border-zinc-100">
<div className="text-xs font-semibold text-zinc-500 mb-1">AltBrew</div>
<div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
<iconify-icon icon="solar:info-circle-linear" width="12"></iconify-icon>
                                    Budget
                                </div>
</div>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white py-2.5 rounded-xl text-xs font-semibold shadow-lg shadow-zinc-200 flex items-center justify-center gap-2 transition-all">
<iconify-icon icon="solar:send-square-linear" width="16"></iconify-icon>
                            Send
                        </button>
<button className="w-10 h-10 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-600 hover:bg-zinc-50 transition-all">
<iconify-icon icon="solar:paperclip-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="mt-auto rounded-2xl overflow-hidden h-32 relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/256139c9-e118-4ca1-b76d-9cb35137e5c0_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
<span className="text-white text-xs font-medium">Inspiration Board</span>
</div>
</div>
</aside>
</div>
</div>

    </>
  );
}
