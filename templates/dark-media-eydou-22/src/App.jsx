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
      
<div className="flex h-screen w-full">

<aside className="hidden md:flex w-64 flex-col border-r border-white/5 bg-zinc-900/30 backdrop-blur-xl">
<div className="p-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="lucide:aperture" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white">GALLERY</span>
</div>
</div>
<nav className="flex-1 px-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-zinc-100 text-sm font-medium transition-colors" href="#">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="18"></iconify-icon>
                    Tous les médias
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="lucide:image" strokeWidth="1.5" width="18"></iconify-icon>
                    Photos
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="lucide:video" strokeWidth="1.5" width="18"></iconify-icon>
                    Vidéos
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="18"></iconify-icon>
                    Favoris
                </a>
<div className="pt-6 pb-2 px-3">
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Albums</span>
</div>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="lucide:folder" strokeWidth="1.5" width="18"></iconify-icon>
                        Voyages
                    </div>
<span className="text-xs text-zinc-600">24</span>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-400" icon="lucide:folder" strokeWidth="1.5" width="18"></iconify-icon>
                        Design
                    </div>
<span className="text-xs text-zinc-600">12</span>
</a>
</nav>
<div className="p-4 border-t border-white/5">
<div className="bg-zinc-900 rounded-lg p-3 border border-white/5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-400">Stockage</span>
<span className="text-xs text-zinc-500">75%</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-zinc-100 rounded-full"></div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-zinc-950 relative">

<header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<h1 className="text-lg font-medium tracking-tight text-white">Récents</h1>
</div>
<div className="flex items-center gap-4">
<div className="relative group hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-zinc-300" icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
<input className="h-9 w-64 bg-zinc-900 border border-white/5 rounded-full pl-9 pr-4 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-700 placeholder:text-zinc-600 transition-all" placeholder="Rechercher..." type="text"/>
</div>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:list-filter" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-medium ring-2 ring-zinc-950 ring-offset-2 ring-offset-zinc-800">
                        JS
                    </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-2 sm:p-6">

<div className="mb-8">
<div className="sticky top-0 z-10 py-3 bg-zinc-950/90 backdrop-blur flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-white">Aujourd'hui</span>
<span className="text-xs text-zinc-500">14 Mars</span>
</div>
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-1">

<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Mountain" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="absolute bottom-2 left-2 flex items-center gap-1">
<iconify-icon className="text-white fill-white" icon="lucide:play" width="12"></iconify-icon>
</div>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-sm text-[10px] font-medium text-white border border-white/10">
                                0:42
                            </div>

<div className="absolute top-2 right-2 h-5 w-5 rounded-full border-2 border-white/30 bg-black/20 opacity-0 group-hover:opacity-100 transition-all hover:bg-indigo-500 hover:border-transparent flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:check" width="12"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Landscape" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute top-2 right-2 h-5 w-5 rounded-full border-2 border-white/30 bg-black/20 opacity-0 group-hover:opacity-100 transition-all"></div>
</div>

<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Portrait" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 h-5 w-5 rounded-full border-2 border-white/30 bg-black/20 opacity-0 group-hover:opacity-100 transition-all"></div>
</div>

<div className="group relative col-span-2 row-span-2 aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="City" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-3 left-3 text-white">
<p className="text-xs font-medium tracking-tight">Voyage à Tokyo</p>
<p className="text-[10px] text-zinc-300 opacity-80">Il y a 2 heures</p>
</div>
<div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-white/20 backdrop-blur-md text-xs font-medium text-white border border-white/10 flex items-center gap-1.5">
<iconify-icon className="fill-current" icon="lucide:play" width="10"></iconify-icon>
                                3:15
                            </div>
</div>

<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Nature" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1501854140884-074cf2b2c3af?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>

<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Nature" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>

<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Forest" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>

<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Ocean" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="mb-8">
<div className="sticky top-0 z-10 py-3 bg-zinc-950/90 backdrop-blur flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-white">Hier</span>
<span className="text-xs text-zinc-500">13 Mars</span>
</div>
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-1">

<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Abstract" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Architecture" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Abstract" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>

<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Landscape" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-sm text-[10px] font-medium text-white border border-white/10">
                                1:20
                            </div>
</div>
<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Camera" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Focus" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
<img alt="Dark" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 md:hidden">
<button className="h-14 w-14 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 flex items-center justify-center hover:bg-indigo-400 transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>
</main>
</div>

    </>
  );
}
