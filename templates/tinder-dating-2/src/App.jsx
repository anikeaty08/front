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
      

<div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>

<header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="flex items-center gap-8">
<div className="text-lg font-medium tracking-tighter uppercase text-zinc-100 flex items-center gap-2">
<iconify-icon className="text-white" height="24" icon="solar:fire-linear" width="24"></iconify-icon>
                AURA
            </div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-white transition-colors" href="#">Discover</a>
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Safety</a>
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Support</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-all text-amber-500 text-xs font-medium">
<iconify-icon height="16" icon="solar:crown-star-linear" width="16"></iconify-icon>
                Get Premium
            </button>
<div className="w-px h-4 bg-white/10 hidden sm:block mx-2"></div>
<button className="p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
<iconify-icon height="20" icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 hover:border-white/30 transition-colors">
<img alt="My Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</button>
</div>
</header>

<div className="flex-1 relative z-10 flex w-full max-w-7xl mx-auto overflow-hidden">

<aside className="hidden lg:flex flex-col w-80 border-r border-white/5 overflow-y-auto bg-zinc-950/50">

<div className="p-4 mx-4 mt-6 rounded-xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex flex-col gap-2 relative overflow-hidden group cursor-pointer hover:border-amber-500/30 transition-all">
<div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-amber-500" icon="solar:crown-star-linear" width="64"></iconify-icon>
</div>
<div className="flex items-center gap-2 relative z-10">
<iconify-icon className="text-amber-500" icon="solar:crown-star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-amber-500">Aura Gold</span>
</div>
<p className="text-xs text-amber-500/70 relative z-10 leading-relaxed">See who already liked you and match instantly.</p>
</div>

<div className="flex border-b border-white/5 px-4 mt-6">
<button className="flex-1 pb-3 text-sm font-medium text-white border-b-2 border-white text-center">Matches</button>
<button className="flex-1 pb-3 text-sm font-medium text-zinc-500 hover:text-zinc-300 text-center transition-colors">Messages</button>
</div>
<div className="p-4 flex-1 overflow-y-auto">

<div className="mb-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xs font-medium tracking-tight text-zinc-500 uppercase">Likes You (4)</h2>
<span className="text-xs font-medium text-amber-500 cursor-pointer hover:text-amber-400">See All</span>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="aspect-[3/4] rounded-xl bg-zinc-900 border border-white/5 relative overflow-hidden flex items-center justify-center cursor-pointer group">
<img alt="Blurred Like" className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60 group-hover:opacity-80 transition-opacity scale-110" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors"></div>
<div className="relative z-10 w-10 h-10 rounded-full bg-zinc-950/60 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-xl">
<iconify-icon className="text-white" icon="solar:heart-linear" width="20"></iconify-icon>
</div>
</div>

<div className="aspect-[3/4] rounded-xl bg-zinc-900 border border-white/5 relative overflow-hidden flex items-center justify-center cursor-pointer group">
<img alt="Blurred Like" className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60 group-hover:opacity-80 transition-opacity scale-110" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors"></div>
<div className="relative z-10 w-10 h-10 rounded-full bg-amber-500/20 backdrop-blur-md flex items-center justify-center border border-amber-500/30 shadow-xl">
<iconify-icon className="text-amber-400" icon="solar:lock-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-xs font-medium tracking-tight text-zinc-500 uppercase mb-3">Messages</h2>
<div className="flex flex-col gap-4">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
<img alt="Elena" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-zinc-950"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">Elena</p>
<p className="text-xs text-white font-medium truncate flex items-center gap-1">
<iconify-icon className="text-zinc-500" icon="solar:pen-linear" width="12"></iconify-icon> Typing...
                                </p>
</div>
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
</div>

<div className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 opacity-70 group-hover:opacity-100 transition-opacity">
<img alt="Sarah" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">Sarah</p>
<p className="text-xs text-zinc-500 truncate">Coffee this weekend?</p>
</div>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 relative">

<button className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white transition-colors rounded-full hover:bg-white/5 lg:hidden z-20">
<iconify-icon height="24" icon="solar:tuning-linear" width="24"></iconify-icon>
</button>

<div className="relative w-full max-w-sm aspect-[4/5] sm:aspect-[3/4]">

<div className="absolute inset-x-4 -bottom-4 top-4 rounded-3xl bg-zinc-900 border border-white/5 opacity-50 scale-95 z-0 transition-transform"></div>

<div className="relative w-full h-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl z-10 group cursor-grab active:cursor-grabbing">

<img alt="Profile" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent"></div>

<div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-zinc-950/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
<span className="text-xs font-medium text-zinc-200">2 miles away</span>
</div>

<div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-zinc-950/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
<span className="text-xs font-medium text-zinc-200">Recently Active</span>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col gap-3">
<div className="flex items-end gap-3">
<h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-white leading-none">Maya</h1>
<span className="text-xl sm:text-2xl font-normal text-zinc-300 leading-none pb-0.5">26</span>
<iconify-icon className="text-indigo-400 mb-1" icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>

<div className="flex flex-wrap gap-2 mt-1">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/5 text-xs text-zinc-200">
<iconify-icon height="14" icon="solar:case-minimalistic-linear" width="14"></iconify-icon>
                                Product Designer
                            </div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/5 text-xs text-zinc-200">
<iconify-icon height="14" icon="solar:ruler-linear" width="14"></iconify-icon>
                                5'8"
                            </div>
</div>

<p className="text-sm text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                            Coffee addict by day, amateur pasta chef by night. Looking for someone to explore hidden art galleries and debate the best slice in the city.
                        </p>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-3 sm:gap-5 mt-8 z-20">

<button className="w-12 h-12 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-amber-500 hover:text-amber-400 hover:bg-zinc-800 hover:border-amber-500/30 transition-all shadow-lg hover:scale-105 active:scale-95">
<iconify-icon height="20" icon="solar:history-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>

<button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-rose-500 hover:text-rose-400 hover:bg-zinc-800 hover:border-rose-500/30 transition-all shadow-lg hover:scale-105 active:scale-95">
<iconify-icon height="32" icon="solar:close-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>

<button className="w-12 h-12 rounded-full bg-zinc-900/80 backdrop-blur-md border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all shadow-lg hover:scale-105 active:scale-95">
<iconify-icon height="20" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>

<button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-950 hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95">
<iconify-icon height="32" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>

<button className="w-12 h-12 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-purple-400 hover:text-purple-300 hover:bg-zinc-800 hover:border-purple-400/30 transition-all shadow-lg hover:scale-105 active:scale-95 relative overflow-hidden group">
<div className="absolute inset-0 bg-purple-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<iconify-icon className="relative z-10" height="20" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</main>
</div>

<nav className="md:hidden flex items-center justify-around p-4 border-t border-white/5 bg-zinc-950/90 backdrop-blur-md relative z-20 pb-safe">
<a className="text-white flex flex-col items-center gap-1" href="#">
<iconify-icon height="24" icon="solar:fire-linear" width="24"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-amber-500 transition-colors flex flex-col items-center gap-1" href="#">
<iconify-icon height="24" icon="solar:crown-star-linear" width="24"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors flex flex-col items-center gap-1 relative" href="#">
<iconify-icon height="24" icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-amber-500 border border-zinc-950"></span>
</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors flex flex-col items-center gap-1" href="#">
<iconify-icon height="24" icon="solar:user-circle-linear" width="24"></iconify-icon>
</a>
</nav>

    </>
  );
}
