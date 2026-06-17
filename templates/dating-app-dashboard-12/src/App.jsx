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
      

<header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#09090b]/80 backdrop-blur-xl">
<div className="sm:px-6 lg:px-8 flex h-16 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">

<div className="text-xl font-medium tracking-tighter flex items-center select-none">
<span className="text-zinc-100 font-geist-mono font-semibold">seductive</span><span className="text-rose-500 font-geist-mono font-semibold">Xx</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="text-zinc-50 transition-colors font-geist-mono" href="#">Discover</a>
<a className="hover:text-zinc-200 transition-colors flex items-center gap-2 font-geist-mono" href="#">
                    Matches 
                    <span className="bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs py-0.5 px-2 rounded-full font-medium font-geist-mono">3</span>
</a>
<a className="hover:text-zinc-200 transition-colors font-geist-mono" href="#">Messages</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden sm:flex p-2 text-zinc-400 hover:text-zinc-50 transition-colors relative">
<div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
<iconify-icon height="22" icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 overflow-hidden relative ring-2 ring-transparent hover:ring-white/20 transition-all cursor-pointer group">
<img alt="Profile" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#09090b] rounded-full"></div>
</button>
</div>
</div>
</header>

<main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-10">

<aside className="w-full lg:w-64 shrink-0 space-y-10 hidden md:block">
<div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
<h2 className="text-sm font-medium text-zinc-100 font-geist-mono">Filters</h2>
<button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-geist-mono">Reset</button>
</div>

<div className="space-y-4">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-widest font-geist-mono">Interested in</label>
<div className="flex flex-col gap-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-rose-500/50 bg-rose-500/10 flex items-center justify-center text-rose-500 transition-colors">
<iconify-icon height="12" icon="solar:check-linear" strokeWidth="2" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-200 font-medium font-geist-mono">Women</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/30 transition-colors"></div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors font-geist-mono">Men</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/30 transition-colors"></div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors font-geist-mono">Everyone</span>
</label>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-widest font-geist-mono">Distance</label>
<span className="text-xs text-zinc-300 font-medium font-geist-mono">15 mi</span>
</div>
<div className="cursor-pointer group bg-white/5 w-full h-1 rounded-full mt-2 relative">
<div className="absolute left-0 top-0 h-full bg-rose-500 rounded-full w-1/3"></div>
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-zinc-100 rounded-full shadow-sm border border-zinc-300 group-hover:scale-110 transition-transform"></div>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-widest font-geist-mono">Age Range</label>
<span className="text-xs text-zinc-300 font-medium font-geist-mono">21 - 32</span>
</div>
<div className="h-1 bg-white/5 rounded-full relative w-full mt-2 cursor-pointer group">
<div className="absolute left-1/5 top-0 h-full bg-rose-500 rounded-full w-[40%]"></div>
<div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-zinc-100 rounded-full shadow-sm border border-zinc-300 group-hover:scale-110 transition-transform"></div>
<div className="absolute left-[60%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-zinc-100 rounded-full shadow-sm border border-zinc-300 group-hover:scale-110 transition-transform"></div>
</div>
</div>

<div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
<label className="text-sm text-zinc-300 font-medium cursor-pointer font-geist-mono">Online Now</label>
<div className="w-8 h-4 bg-rose-500 rounded-full relative cursor-pointer flex items-center px-[2px] transition-colors">
<div className="w-3 h-3 bg-white rounded-full shadow-sm translate-x-[16px] transition-transform"></div>
</div>
</div>

<div className="flex items-center justify-between pb-4">
<label className="text-sm text-zinc-400 cursor-pointer hover:text-zinc-300 transition-colors font-geist-mono">Verified Profiles Only</label>
<div className="w-8 h-4 bg-white/10 rounded-full relative cursor-pointer flex items-center px-[2px] hover:bg-white/20 transition-colors">
<div className="w-3 h-3 bg-zinc-400 rounded-full shadow-sm translate-x-0 transition-transform"></div>
</div>
</div>
</aside>

<div className="flex-1 pb-24 md:pb-0">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
<div>
<h1 className="text-2xl tracking-tight text-zinc-100 mb-1 font-geist-mono font-semibold">Discover near you</h1>
<p className="text-sm text-zinc-500 font-geist-mono">Showing 42 online members</p>
</div>
<button className="text-xs font-medium text-zinc-400 flex items-center gap-1.5 hover:text-zinc-200 transition-colors px-3 py-1.5 rounded-md bg-white/5 border border-white/5 hover:bg-white/10 w-fit font-geist-mono">
<iconify-icon height="16" icon="solar:sort-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Sort: Active
                </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900 aspect-[3/4] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-sm">
<img alt="Profile" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
<div className="absolute top-4 left-4">
<div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded text-xs border border-white/10 text-white font-medium flex items-center gap-1.5 font-geist-mono">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Online
                        </div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
<div className="flex justify-between items-end mb-2">
<div>
<h3 className="text-xl tracking-tight text-white drop-shadow-sm flex items-center gap-2 font-geist-mono font-semibold">
                                    Elena, 24
                                    <iconify-icon className="text-rose-400" height="18" icon="solar:verified-check-linear" width="18"></iconify-icon>
</h3>
<p className="text-sm text-zinc-300 flex items-center gap-1.5 mt-0.5 font-geist-mono">
<iconify-icon height="14" icon="solar:map-point-linear" width="14"></iconify-icon>
                                    3 miles away
                                </p>
</div>
</div>

<div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10 mt-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
<button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
<iconify-icon height="20" icon="solar:close-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-rose-500 hover:bg-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)] flex items-center justify-center text-white transition-all hover:scale-105">
<iconify-icon height="24" icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
<iconify-icon height="20" icon="solar:chat-round-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900 aspect-[3/4] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-sm">
<img alt="Profile" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
<div className="absolute top-4 left-4">
<div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded text-xs border border-white/10 text-zinc-300 font-medium font-geist-mono">
                            2h ago
                        </div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
<div className="flex justify-between items-end mb-2">
<div>
<h3 className="text-xl tracking-tight text-white drop-shadow-sm flex items-center gap-2 font-geist-mono font-semibold">
                                    Sarah, 27
                                </h3>
<p className="text-sm text-zinc-300 flex items-center gap-1.5 mt-0.5 font-geist-mono">
<iconify-icon height="14" icon="solar:map-point-linear" width="14"></iconify-icon>
                                    12 miles away
                                </p>
</div>
<div className="text-xs font-medium text-rose-400 bg-rose-500/10 px-2 py-1 rounded border border-rose-500/20 font-geist-mono">
                                92% Match
                            </div>
</div>
<div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10 mt-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
<button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
<iconify-icon height="20" icon="solar:close-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-rose-500 hover:bg-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)] flex items-center justify-center text-white transition-all hover:scale-105">
<iconify-icon height="24" icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
<iconify-icon height="20" icon="solar:chat-round-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900 aspect-[3/4] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-sm">
<img alt="Profile" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
<div className="absolute top-4 left-4">
<div className="bg-rose-500/80 backdrop-blur-md px-2 py-1 rounded text-xs border border-rose-500/50 text-white font-medium flex items-center gap-1 font-geist-mono">
<iconify-icon height="12" icon="solar:star-linear" width="12"></iconify-icon> New
                        </div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
<div className="flex justify-between items-end mb-2">
<div>
<h3 className="text-xl tracking-tight text-white drop-shadow-sm flex items-center gap-2 font-geist-mono font-semibold">
                                    Maya, 22
                                    <iconify-icon className="text-rose-400" height="18" icon="solar:verified-check-linear" width="18"></iconify-icon>
</h3>
<p className="text-sm text-zinc-300 flex items-center gap-1.5 mt-0.5 font-geist-mono">
<iconify-icon height="14" icon="solar:map-point-linear" width="14"></iconify-icon>
                                    1 mile away
                                </p>
</div>
</div>
<div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10 mt-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
<button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
<iconify-icon height="20" icon="solar:close-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-rose-500 hover:bg-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)] flex items-center justify-center text-white transition-all hover:scale-105">
<iconify-icon height="24" icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
<iconify-icon height="20" icon="solar:chat-round-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-zinc-900 aspect-[3/4] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-sm hidden lg:block">
<img alt="Profile" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
<div className="absolute top-4 left-4">
<div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded text-xs border border-white/10 text-white font-medium flex items-center gap-1.5 font-geist-mono">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Online
                        </div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
<div className="flex justify-between items-end mb-2">
<div>
<h3 className="text-xl tracking-tight text-white drop-shadow-sm flex items-center gap-2 font-geist-mono font-semibold">
                                    Chloe, 25
                                </h3>
<p className="text-sm text-zinc-300 flex items-center gap-1.5 mt-0.5 font-geist-mono">
<iconify-icon height="14" icon="solar:map-point-linear" width="14"></iconify-icon>
                                    5 miles away
                                </p>
</div>
</div>
<div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10 mt-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
<button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
<iconify-icon height="20" icon="solar:close-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-rose-500 hover:bg-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)] flex items-center justify-center text-white transition-all hover:scale-105">
<iconify-icon height="24" icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
<iconify-icon height="20" icon="solar:chat-round-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center pb-8">
<button className="px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full text-sm font-medium text-zinc-300 hover:text-white transition-all flex items-center gap-2 font-geist-mono">
<iconify-icon height="16" icon="solar:refresh-linear" width="16"></iconify-icon>
                    Load More
                </button>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#09090b]/95 backdrop-blur-xl border-t border-white/[0.08] z-50" style={{paddingBottom: 'env(safe-area-inset-bottom)'}}>
<div className="flex justify-around items-center h-16 px-2">
<a className="flex flex-col items-center justify-center gap-1 w-full h-full text-rose-500" href="#">
<iconify-icon height="24" icon="solar:card-search-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium scale-90 font-geist-mono">Discover</span>
</a>
<a className="flex flex-col items-center justify-center gap-1 w-full h-full text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium scale-90 font-geist-mono">Matches</span>
</a>
<a className="flex flex-col items-center justify-center gap-1 w-full h-full text-zinc-500 hover:text-zinc-300 transition-colors relative" href="#">
<div className="absolute top-2 right-[25%] w-2 h-2 bg-rose-500 rounded-full border-2 border-[#09090b]"></div>
<iconify-icon height="24" icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium scale-90 font-geist-mono">Messages</span>
</a>
<a className="flex flex-col items-center justify-center gap-1 w-full h-full text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon height="24" icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium scale-90 font-geist-mono">Profile</span>
</a>
</div>
</nav>

    </>
  );
}
