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
      

<main className="w-full md:max-w-[414px] bg-white md:rounded-[2rem] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col h-[100vh] md:h-[880px] relative border-4 border-transparent md:border-white ring-1 ring-black/5">

<header className="flex items-center justify-between px-5 py-4 bg-white sticky top-0 z-30">
<button className="p-2 -ml-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
<iconify-icon icon="lucide:menu" strokeWidth="2" width="26"></iconify-icon>
</button>
<div className="flex items-center gap-3">
<button className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="2" width="24"></iconify-icon>
</button>
<button className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="2" width="22"></iconify-icon>
</button>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] cursor-pointer">
<img alt="Profile" className="w-full h-full rounded-full bg-white object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</header>

<div className="px-5 pb-2">
<div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
<button className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-amber-50 text-amber-500 hover:bg-amber-100 transition-colors">
<iconify-icon className="fill-current" icon="lucide:star" width="20"></iconify-icon>
</button>
<button className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-semibold tracking-wide shadow-lg shadow-slate-200">
                    Workspace
                </button>
<button className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 text-sm font-semibold hover:bg-slate-200 transition-colors">
                    My Tasks
                </button>
<button className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 text-sm font-semibold hover:bg-slate-200 transition-colors">
                    Inbox
                </button>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar bg-white relative">

<div className="px-5 pt-4 pb-2">
<div className="flex items-center justify-between mb-6">
<div className="flex flex-col">
<h1 className="text-2xl font-bold tracking-tight text-slate-900">Contacts</h1>
<span className="text-xs font-medium text-slate-400 mt-0.5">Lotus CRM / Leads</span>
</div>
<button className="flex items-center gap-2 px-4 py-2.5 bg-[#fbbf24] hover:bg-[#f59e0b] active:scale-95 transition-all text-slate-900 text-sm font-bold rounded-xl shadow-sm">
<iconify-icon icon="lucide:plus" strokeWidth="3" width="18"></iconify-icon>
                        Add New
                    </button>
</div>

<div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar">
<button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all whitespace-nowrap">
<iconify-icon icon="lucide:filter" width="14"></iconify-icon>
                        Filter
                    </button>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all whitespace-nowrap">
<iconify-icon icon="lucide:arrow-up-down" width="14"></iconify-icon>
                        Sort
                    </button>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all whitespace-nowrap">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
                        Export
                    </button>
<div className="h-6 w-px bg-slate-200 mx-1"></div>
<button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600">
<iconify-icon icon="lucide:layout-grid" width="18"></iconify-icon>
</button>
</div>

<div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">

<div className="flex items-center bg-slate-50 px-4 py-3 border-b border-slate-100">
<div className="w-8 shrink-0">
<div className="h-4 w-4 rounded border-2 border-slate-300"></div>
</div>
<div className="flex-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Name</div>
<div className="w-10 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">View</div>
</div>

<div className="divide-y divide-slate-50">

<div className="group flex items-center px-4 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-8 shrink-0 flex items-center">
<div className="w-1.5 h-8 rounded-full bg-emerald-400 mr-3"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">VK</div>
<div>
<div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Vishal Kumar</div>
<div className="text-[10px] text-slate-400">Lead • Online</div>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-amber-400 hover:bg-amber-50 hover:scale-110 transition-all">
<iconify-icon icon="lucide:eye" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>

<div className="group flex items-center px-4 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-8 shrink-0 flex items-center">
<div className="w-1.5 h-8 rounded-full bg-blue-400 mr-3"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<img className="w-8 h-8 rounded-full bg-blue-50" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Haps"/>
<div>
<div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Haps Kumar</div>
<div className="text-[10px] text-slate-400">Customer • Referral</div>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-amber-400 hover:bg-amber-50 hover:scale-110 transition-all">
<iconify-icon icon="lucide:eye" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>

<div className="group flex items-center px-4 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-8 shrink-0 flex items-center">
<div className="w-1.5 h-8 rounded-full bg-purple-400 mr-3"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">LJ</div>
<div>
<div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Liam Johnson</div>
<div className="text-[10px] text-slate-400">Partner • Active</div>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-amber-400 hover:bg-amber-50 hover:scale-110 transition-all">
<iconify-icon icon="lucide:eye" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>

<div className="group flex items-center px-4 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-8 shrink-0 flex items-center">
<div className="w-1.5 h-8 rounded-full bg-orange-400 mr-3"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<img className="w-8 h-8 rounded-full bg-orange-50" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky"/>
<div>
<div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Lucky Kumar</div>
<div className="text-[10px] text-slate-400">Lead • Pending</div>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-amber-400 hover:bg-amber-50 hover:scale-110 transition-all">
<iconify-icon icon="lucide:eye" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>

<div className="group flex items-center px-4 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-8 shrink-0 flex items-center">
<div className="w-1.5 h-8 rounded-full bg-slate-300 mr-3"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold">DK</div>
<div>
<div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Dinesh Kumar</div>
<div className="text-[10px] text-slate-400">Inactive</div>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-amber-400 hover:bg-amber-50 hover:scale-110 transition-all">
<iconify-icon icon="lucide:eye" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>

<div className="group flex items-center px-4 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-8 shrink-0 flex items-center">
<div className="w-1.5 h-8 rounded-full bg-pink-400 mr-3"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<img className="w-8 h-8 rounded-full bg-pink-50" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan"/>
<div>
<div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Rohan Das</div>
<div className="text-[10px] text-slate-400">VIP • Contract</div>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-amber-400 hover:bg-amber-50 hover:scale-110 transition-all">
<iconify-icon icon="lucide:eye" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>

<div className="group flex items-center px-4 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-8 shrink-0 flex items-center">
<div className="w-1.5 h-8 rounded-full bg-indigo-400 mr-3"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">SK</div>
<div>
<div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Sanju Kumar</div>
<div className="text-[10px] text-slate-400">Lead • New</div>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-amber-400 hover:bg-amber-50 hover:scale-110 transition-all">
<iconify-icon icon="lucide:eye" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>

<div className="group flex items-center px-4 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-8 shrink-0 flex items-center">
<div className="w-1.5 h-8 rounded-full bg-teal-400 mr-3"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold">KM</div>
<div>
<div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Karan Malhotra</div>
<div className="text-[10px] text-slate-400">Customer • Active</div>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-amber-400 hover:bg-amber-50 hover:scale-110 transition-all">
<iconify-icon icon="lucide:eye" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>

<div className="group flex items-center px-4 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-8 shrink-0 flex items-center">
<div className="w-1.5 h-8 rounded-full bg-cyan-400 mr-3"></div>
</div>
<div className="flex-1 flex items-center gap-3">
<img className="w-8 h-8 rounded-full bg-cyan-50" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ajit"/>
<div>
<div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Ajit Kumar</div>
<div className="text-[10px] text-slate-400">Reseller</div>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-amber-400 hover:bg-amber-50 hover:scale-110 transition-all">
<iconify-icon icon="lucide:eye" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="p-4 flex justify-center">
<div className="w-6 h-6 border-2 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
</div>
</div>
<div className="h-20"></div> 
</div>
</div>

<div className="absolute bottom-6 right-6 md:hidden">
<button className="w-14 h-14 bg-slate-900 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-105 transition-transform">
<iconify-icon icon="lucide:plus" strokeWidth="2" width="24"></iconify-icon>
</button>
</div>
</main>

    </>
  );
}
