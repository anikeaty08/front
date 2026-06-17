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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>

<main className="relative z-10 mx-auto max-w-[1400px] px-6 py-12 lg:py-20">
<div className="grid gap-12 lg:grid-cols-3 items-start justify-items-center">

<div className="relative w-full max-w-[360px] h-[780px] bg-neutral-900 rounded-[48px] border-[8px] border-neutral-800 shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10 group">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-50"></div>

<div className="h-12 w-full flex items-end justify-between px-6 pb-2 text-xs font-medium text-white select-none z-40">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:signal-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" width="16"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-hidden flex flex-col relative bg-neutral-900">

<div className="px-5 pt-4 pb-2">
<div className="relative group/search">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-neutral-500">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-neutral-800/50 text-sm text-white placeholder-neutral-500 rounded-full py-2.5 pl-10 pr-4 outline-none focus:ring-1 focus:ring-pink-500/50 transition-all" placeholder="Search" type="text"/>
</div>
</div>

<div className="mt-4 px-5">
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">

<div className="flex flex-col items-center gap-1.5 min-w-[64px] cursor-pointer">
<div className="w-16 h-16 rounded-full border-2 border-neutral-800 border-dashed flex items-center justify-center text-neutral-400 hover:text-white transition-colors bg-neutral-800/30">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-xs text-neutral-400 font-medium">You</span>
</div>

<div className="flex flex-col items-center gap-1.5 min-w-[64px] cursor-pointer">
<div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 to-purple-600">
<img alt="Story" className="w-full h-full rounded-full object-cover border-2 border-neutral-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<span className="text-xs text-neutral-300 font-medium">Sarah</span>
</div>

<div className="flex flex-col items-center gap-1.5 min-w-[64px] cursor-pointer">
<div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 to-purple-600">
<img alt="Story" className="w-full h-full rounded-full object-cover border-2 border-neutral-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<span className="text-xs text-neutral-300 font-medium">Elara</span>
</div>

<div className="flex flex-col items-center gap-1.5 min-w-[64px] cursor-pointer">
<div className="w-16 h-16 rounded-full p-[2px] bg-neutral-800">
<img alt="Story" className="w-full h-full rounded-full object-cover border-2 border-neutral-900 opacity-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<span className="text-xs text-neutral-500 font-medium">Kate</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto mt-2 px-3 pb-24 no-scrollbar">
<h2 className="px-3 text-xl font-medium tracking-tight mb-3 mt-2 text-white">Messages</h2>
<div className="space-y-1">

<div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-colors group/msg">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-neutral-900 rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-medium text-white group-hover/msg:text-pink-400 transition-colors">Samantha</h3>
<span className="text-xs text-neutral-500">2m</span>
</div>
<p className="text-xs text-white truncate">That sounds amazing! When are you free?</p>
</div>
<div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center text-[10px] font-medium">1</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-colors">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-medium text-neutral-300">Jessie</h3>
<span className="text-xs text-neutral-500">1h</span>
</div>
<p className="text-xs text-neutral-500 truncate">Sent a photo</p>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-colors">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-medium text-white">Maya</h3>
<span className="text-xs text-neutral-500">3h</span>
</div>
<p className="text-xs text-neutral-400 truncate">Haha, exactly! 😂</p>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-colors">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-medium text-white">Chloe</h3>
<span className="text-xs text-neutral-500">Yesterday</span>
</div>
<p className="text-xs text-neutral-400 truncate">See you there.</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-4 right-4 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-2 flex justify-between items-center z-50 shadow-2xl">
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:home-smile-linear" width="24"></iconify-icon>
</button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</button>
<button className="p-3 text-white bg-pink-600 rounded-2xl shadow-lg shadow-pink-900/20">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
</div>

<div className="relative w-full max-w-[360px] h-[780px] bg-neutral-900 rounded-[48px] border-[8px] border-neutral-800 shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-50"></div>

<div className="h-12 w-full flex items-end justify-between px-6 pb-2 text-xs font-medium text-white select-none z-40">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:signal-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col relative bg-neutral-900 px-3 pt-2">

<div className="flex items-center justify-between mb-4 px-2">
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition">
<iconify-icon icon="solar:tuning-2-linear" width="20"></iconify-icon>
</button>
<div className="flex p-1 bg-white/5 rounded-full">
<button className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition">Nearby</button>
<button className="px-4 py-1.5 text-xs font-medium bg-white text-black rounded-full shadow-sm">For You</button>
</div>
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>

<div className="relative flex-1 rounded-[32px] overflow-hidden bg-neutral-800 shadow-xl mx-1 mb-24 group/card">
<img alt="Profile" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90"></div>

<div className="absolute bottom-0 left-0 right-0 p-6 pt-12">
<div className="flex items-end justify-between mb-2">
<div>
<div className="flex items-center gap-2 mb-1">
<h2 className="text-3xl font-medium tracking-tight text-white">Elena, 24</h2>
<iconify-icon className="text-blue-400" icon="solar:verified-check-bold" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span>2 miles away</span>
</div>
</div>
<div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                    Online
                                </div>
</div>

<div className="flex flex-wrap gap-2 mt-4 opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300">
<span className="px-3 py-1 bg-black/40 backdrop-blur rounded-full text-xs text-white border border-white/10">Photography</span>
<span className="px-3 py-1 bg-black/40 backdrop-blur rounded-full text-xs text-white border border-white/10">Travel</span>
<span className="px-3 py-1 bg-black/40 backdrop-blur rounded-full text-xs text-white border border-white/10">Design</span>
</div>
</div>
</div>

<div className="absolute bottom-28 left-0 right-0 flex justify-center gap-6 items-center">
<button className="w-14 h-14 rounded-full bg-neutral-900/80 backdrop-blur border border-neutral-700 flex items-center justify-center text-red-500 hover:scale-110 transition-transform hover:bg-neutral-800">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-neutral-900/80 backdrop-blur border border-neutral-700 flex items-center justify-center text-yellow-400 hover:scale-110 transition-transform hover:bg-neutral-800">
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
</button>
<button className="w-14 h-14 rounded-full bg-pink-600 flex items-center justify-center text-white hover:scale-110 hover:bg-pink-500 transition-transform shadow-lg shadow-pink-900/40">
<iconify-icon icon="solar:heart-bold" width="28"></iconify-icon>
</button>
</div>

<div className="absolute bottom-6 left-4 right-4 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-2 flex justify-between items-center z-50 shadow-2xl">
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:home-smile-linear" width="24"></iconify-icon>
</button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</button>

<button className="p-3 text-white bg-pink-600 rounded-2xl shadow-lg shadow-pink-900/20">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
</div>

<div className="relative w-full max-w-[360px] h-[780px] bg-neutral-900 rounded-[48px] border-[8px] border-neutral-800 shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-50"></div>

<div className="h-12 w-full flex items-end justify-between px-6 pb-2 text-xs font-medium text-white select-none z-40">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:signal-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col relative bg-neutral-900 px-1">

<div className="px-5 pt-4 pb-2">
<div className="flex justify-between items-center mb-4">
<div>
<h2 className="text-2xl font-medium tracking-tight text-white">Discover</h2>
<p className="text-xs text-neutral-400 mt-0.5">Recommended for you</p>
</div>
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition border border-white/5">
<iconify-icon icon="solar:sort-vertical-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex gap-2 overflow-x-auto no-scrollbar mb-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-pink-600/20 text-pink-400 rounded-full text-xs font-medium border border-pink-500/30 whitespace-nowrap">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
                                Match %
                            </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 text-neutral-300 rounded-full text-xs font-medium border border-white/10 whitespace-nowrap hover:bg-white/10 transition">
                                Nearby
                            </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 text-neutral-300 rounded-full text-xs font-medium border border-white/10 whitespace-nowrap hover:bg-white/10 transition">
                                New
                            </button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 pb-28 no-scrollbar">
<div className="grid grid-cols-2 gap-3">

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3">
<p className="text-sm font-medium text-white">Sophie, 21</p>
<div className="flex items-center gap-1 text-[10px] text-neutral-300">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                        Online
                                    </div>
</div>
<div className="absolute top-2 right-2 p-1.5 bg-black/20 backdrop-blur rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</div>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3">
<p className="text-sm font-medium text-white">Anna, 23</p>
<div className="flex items-center gap-1 text-[10px] text-neutral-300">
<iconify-icon icon="solar:map-point-linear" width="10"></iconify-icon>
                                        1.2 mi
                                    </div>
</div>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3">
<p className="text-sm font-medium text-white">Ria, 20</p>
</div>
<div className="absolute top-2 left-2 px-2 py-0.5 bg-pink-600 rounded text-[10px] font-semibold text-white">NEW</div>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3">
<p className="text-sm font-medium text-white">Jade, 25</p>
</div>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3">
<p className="text-sm font-medium text-white">Mila, 22</p>
</div>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3">
<p className="text-sm font-medium text-white">Sara, 24</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-4 right-4 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-2 flex justify-between items-center z-50 shadow-2xl">
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all group relative">

<iconify-icon className="group-hover:text-pink-400 transition-colors" icon="solar:home-smile-linear" width="24"></iconify-icon>
</button>
<button className="p-3 text-white bg-pink-600 rounded-2xl shadow-lg shadow-pink-900/20">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
</div>
</div>
</main>

    </>
  );
}
