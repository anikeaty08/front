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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-200/50 rounded-full blur-[120px] mix-blend-multiply"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-rose-200/40 rounded-full blur-[120px] mix-blend-multiply"></div>
<div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-violet-200/40 rounded-full blur-[120px] mix-blend-multiply"></div>
<div className="absolute bottom-[20%] left-[20%] w-[50%] h-[50%] bg-amber-100/40 rounded-full blur-[120px] mix-blend-multiply"></div>
</div>

<aside className="w-full md:w-[400px] border-r border-white/60 bg-white/40 backdrop-blur-2xl z-20 shrink-0 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)]">

<div className="p-6 pb-2 border-b border-black/5">
<div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-100 border border-white shadow-sm group">
<img alt="AI Avatar" className="object-cover w-full h-full opacity-90 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
<span className="text-sm font-medium text-white drop-shadow-md">Maya AI</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">

<div className="flex justify-end">
<div className="bg-zinc-900 border border-zinc-800 text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-[85%] text-base shadow-md">
                    Tell me about custom pricing
                </div>
</div>

<div className="flex justify-start">
<div className="bg-white/80 backdrop-blur-md border border-white text-zinc-700 rounded-2xl rounded-tl-sm px-5 py-4 max-w-[90%] text-base leading-relaxed shadow-sm">
                    Okay, that's great! Let's dive right in. First, could you tell me what your biggest compliance challenge is right now?
                </div>
</div>

<div className="flex flex-col gap-2 mt-4">
<button className="w-full text-left px-5 py-3 rounded-xl border border-white shadow-sm bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-blue-200 text-blue-600 text-base transition-all duration-200">
                    Explore ISO470001 next?
                </button>
<button className="w-full text-left px-5 py-3 rounded-xl border border-white shadow-sm bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-blue-200 text-blue-600 text-base transition-all duration-200">
                    Tell me more about SOC-2
                </button>
<button className="w-full text-left px-5 py-3 rounded-xl border border-white shadow-sm bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-blue-200 text-blue-600 text-base transition-all duration-200">
                    What are your pricing options?
                </button>
</div>
</div>

<div className="p-6 pt-2">
<div className="relative flex items-center bg-white/60 backdrop-blur-md border border-white shadow-sm rounded-full px-2 py-2 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400/50 transition-all">
<input className="w-full bg-transparent border-none outline-none text-base text-zinc-800 placeholder-zinc-400 px-4" placeholder="Ask Maya anything..." type="text"/>
<button className="p-2 text-zinc-400 hover:text-zinc-600 transition-colors rounded-full hover:bg-black/5 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:microphone-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="p-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors ml-1 flex items-center justify-center shadow-md">
<iconify-icon className="text-base" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-center mt-4 px-2">
<button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors">
<iconify-icon className="text-base" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
                    Talk to human
                </button>
<button className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors border border-red-100">
<iconify-icon className="text-base" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative z-10">

<header className="h-16 border-b border-white/40 flex items-center justify-between px-8 shrink-0 relative z-10 bg-white/20 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-8">

<button className="flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-zinc-200 shadow-sm">
<span className="text-xs font-semibold">A</span>
</div>
                    Alicia Koch
                    <iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-zinc-900" href="#">Overview</a>
<a className="text-zinc-500 hover:text-zinc-800 transition-colors" href="#">Customers</a>
<a className="text-zinc-500 hover:text-zinc-800 transition-colors" href="#">Products</a>
<a className="text-zinc-500 hover:text-zinc-800 transition-colors" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center gap-6">

<div className="hidden lg:flex relative items-center">
<iconify-icon className="absolute left-3 text-zinc-400 text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="bg-white/50 backdrop-blur-sm border border-white shadow-sm rounded-full pl-9 pr-4 py-1.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 transition-all w-64" placeholder="Search..." type="text"/>
</div>

<button className="w-8 h-8 rounded-full bg-zinc-200 border border-white shadow-sm overflow-hidden hover:ring-2 hover:ring-blue-100 transition-all">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 relative z-10">
<div className="max-w-[1400px] mx-auto space-y-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-4">
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Dashboard</h1>

<div className="flex items-center gap-1 bg-white/40 backdrop-blur-md p-1 rounded-xl border border-white shadow-sm w-fit">
<button className="px-4 py-1.5 text-sm font-medium bg-white text-zinc-900 rounded-lg shadow-sm border border-zinc-100">Overview</button>
<button className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-800 transition-colors rounded-lg">Analytics</button>
<button className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-800 transition-colors rounded-lg">Reports</button>
<button className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-800 transition-colors rounded-lg">Notifications</button>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md border border-white shadow-sm rounded-xl text-sm font-medium text-zinc-700 hover:bg-white/80 transition-colors">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                            Jan 20, 2024 - Feb 09, 2024
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors shadow-md shadow-zinc-900/20">
                            Download
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">

<div className="md:col-span-12 lg:col-span-8 bg-white/40 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-white/50 transition-all duration-300">
<div className="flex justify-between items-start mb-12 relative z-10">
<div>
<span className="text-sm font-medium text-zinc-500 flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:dollar-linear" strokeWidth="1.5"></iconify-icon>
                                    Total Revenue
                                </span>
<h3 className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 leading-none">$45,231<span className="text-3xl lg:text-5xl text-zinc-400">.89</span></h3>
</div>
<div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium border border-emerald-100 shadow-sm flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
                                +20.1%
                            </div>
</div>

<div className="h-[180px] w-full flex items-end justify-between gap-3 relative z-10 pt-4">

<div className="absolute inset-0 border-b border-black/5"></div>

<div className="w-full bg-white/60 border border-white shadow-sm hover:bg-white/80 transition-colors rounded-t-xl h-[40%]"></div>
<div className="w-full bg-white/60 border border-white shadow-sm hover:bg-white/80 transition-colors rounded-t-xl h-[55%]"></div>
<div className="w-full bg-white/60 border border-white shadow-sm hover:bg-white/80 transition-colors rounded-t-xl h-[30%]"></div>
<div className="w-full bg-white/60 border border-white shadow-sm hover:bg-white/80 transition-colors rounded-t-xl h-[65%]"></div>
<div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 shadow-[0_4px_20px_rgba(59,130,246,0.3)] rounded-t-xl h-[90%] relative group/bar flex justify-center border border-blue-300">
<div className="absolute -top-10 bg-zinc-900 text-white text-xs py-1.5 px-3 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">May: $5,200</div>
</div>
<div className="w-full bg-white/60 border border-white shadow-sm hover:bg-white/80 transition-colors rounded-t-xl h-[45%]"></div>
<div className="w-full bg-white/60 border border-white shadow-sm hover:bg-white/80 transition-colors rounded-t-xl h-[70%]"></div>
<div className="w-full bg-white/60 border border-white shadow-sm hover:bg-white/80 transition-colors rounded-t-xl h-[85%]"></div>
</div>
</div>

<div className="md:col-span-12 sm:col-span-6 lg:col-span-4 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-white/50 transition-all duration-300 min-h-[300px]">
<div className="relative z-10">
<span className="text-sm font-medium text-zinc-600 flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                                Subscriptions
                            </span>
<h3 className="text-4xl font-semibold tracking-tight text-zinc-900">+2,350</h3>
<p className="text-sm text-zinc-500 mt-2">+180.1% from last month</p>
</div>

<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex -space-x-4 mt-auto pt-12">
<img alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="w-12 h-12 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-600 shadow-sm">+99</div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-4 bg-white/40 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-6 relative group hover:bg-white/50 transition-all duration-300 flex flex-col justify-center">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-white/60 border border-white rounded-2xl shadow-sm text-zinc-700">
<iconify-icon className="text-xl" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">+19%</span>
</div>
<span className="text-sm font-medium text-zinc-500">Sales</span>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900 mt-1">+12,234</h3>
</div>

<div className="md:col-span-6 lg:col-span-4 bg-white/40 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-6 relative group hover:bg-white/50 transition-all duration-300 flex flex-col justify-center">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-white/60 border border-white rounded-2xl shadow-sm text-zinc-700">
<iconify-icon className="text-xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg border border-blue-100">+201 hr</span>
</div>
<span className="text-sm font-medium text-zinc-500">Active now</span>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900 mt-1">+573</h3>
</div>

<div className="md:col-span-12 lg:col-span-4 bg-white/40 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 flex flex-col hover:bg-white/50 transition-all duration-300">
<div className="mb-8">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900">Recent Transactions</h3>
<p className="text-sm text-zinc-500 mt-1">265 sales this month.</p>
</div>
<div className="flex-1 flex flex-col gap-5">

<div className="flex items-center justify-between group/item">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-2xl bg-white border border-zinc-100 shadow-sm overflow-hidden shrink-0">
<img alt="Olivia" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-base font-semibold text-zinc-900 group-hover/item:text-blue-600 transition-colors">Olivia Martin</p>
<p className="text-xs text-zinc-500 mt-0.5">olivia.martin@email.com</p>
</div>
</div>
<div className="text-base font-semibold text-zinc-900">+$1,999.00</div>
</div>

<div className="flex items-center justify-between group/item">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-2xl bg-white border border-zinc-100 shadow-sm overflow-hidden shrink-0">
<img alt="Jackson" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-base font-semibold text-zinc-900 group-hover/item:text-blue-600 transition-colors">Jackson Lee</p>
<p className="text-xs text-zinc-500 mt-0.5">jackson.lee@email.com</p>
</div>
</div>
<div className="text-base font-semibold text-zinc-900">+$39.00</div>
</div>

<div className="flex items-center justify-between group/item">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-2xl bg-white border border-zinc-100 shadow-sm overflow-hidden shrink-0">
<img alt="Isabella" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-base font-semibold text-zinc-900 group-hover/item:text-blue-600 transition-colors">Isabella Nguyen</p>
<p className="text-xs text-zinc-500 mt-0.5">isabella.nguyen@email.com</p>
</div>
</div>
<div className="text-base font-semibold text-zinc-900">+$299.00</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
