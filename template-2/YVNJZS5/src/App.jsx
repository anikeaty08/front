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
      

<header className="sticky top-0 z-50 backdrop-blur bg-zinc-900/70 border-b border-zinc-800">
<div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4">
<h1 className="text-lg font-semibold tracking-tight">AW</h1>
<nav className="hidden md:flex gap-8 text-sm">
<a className="text-indigo-400" href="#">Discover</a>
<a className="hover:text-indigo-400 transition-colors" href="#">Library</a>
<a className="hover:text-indigo-400 transition-colors" href="#">Categories</a>
</nav>
<div className="flex items-center gap-4">
<div className="relative">
<input className="w-40 md:w-64 bg-zinc-800 rounded-md pl-10 pr-3 py-2 text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all" placeholder="Search audiobooks" type="text" />
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" data-lucide="search" strokeWidth="1.5"></i>
</div>
<button className="p-2 rounded-md hover:bg-zinc-800 transition-colors" id="themeToggle">
<i className="w-5 h-5" data-lucide="moon" strokeWidth="1.5"></i>
</button>
<button className="md:hidden p-2 rounded-md hover:bg-zinc-800 transition-colors">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="mx-auto max-w-7xl px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
<div className="flex-1 space-y-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight opacity-0 translate-y-4 transition-all duration-700" style={{transitionDelay: `150ms`}}>Discover your next adventure.</h2>
<p className="text-zinc-400 max-w-md opacity-0 translate-y-4 transition-all duration-700" style={{transitionDelay: `300ms`}}>
        Browse curated collections, top charts, and personalized picks designed to keep you listening.
      </p>
</div>
<div className="flex-1 opacity-0 translate-y-4 transition-all duration-700" style={{transitionDelay: `450ms`}}>
<img alt="Discover" className="rounded-xl shadow-2xl w-full object-cover h-80 md:h-96" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-semibold tracking-tight">Curated Collections</h3>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">

<div className="group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-indigo-600 transition-all cursor-pointer">
<img alt="Collection" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80" />
<div className="p-4">
<h4 className="text-sm font-semibold tracking-tight">Best of 2023</h4>
<p className="text-xs text-zinc-500 mt-1">Award-winning titles</p>
</div>
</div>
<div className="group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-indigo-600 transition-all cursor-pointer">
<img alt="Collection" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="p-4">
<h4 className="text-sm font-semibold tracking-tight">Feel-Good Fiction</h4>
<p className="text-xs text-zinc-500 mt-1">Stories to warm the heart</p>
</div>
</div>
<div className="group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-indigo-600 transition-all cursor-pointer">
<img alt="Collection" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80" />
<div className="p-4">
<h4 className="text-sm font-semibold tracking-tight">Mind-Expanding</h4>
<p className="text-xs text-zinc-500 mt-1">Big ideas, bigger minds</p>
</div>
</div>
<div className="group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-indigo-600 transition-all cursor-pointer">
<img alt="Collection" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="p-4">
<h4 className="text-sm font-semibold tracking-tight">Edge-of-Seat Thrillers</h4>
<p className="text-xs text-zinc-500 mt-1">Adrenaline guaranteed</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 border-t border-zinc-800">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-semibold tracking-tight">New & Noteworthy</h3>
<a className="text-sm text-indigo-400 hover:underline" href="#">View all</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">

<div className="group bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-indigo-600 transition-all cursor-pointer">
<img alt="Book cover" className="w-full h-48 object-cover rounded" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="mt-4 space-y-1">
<h4 className="text-sm font-semibold tracking-tight">Tomorrow, and Tomorrow, and Tomorrow</h4>
<p className="text-xs text-zinc-500">Gabrielle Zevin • 13h 28m</p>
</div>
</div>
<div className="group bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-indigo-600 transition-all cursor-pointer">
<img alt="Book cover" className="w-full h-48 object-cover rounded" src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80" />
<div className="mt-4 space-y-1">
<h4 className="text-sm font-semibold tracking-tight">The Creative Act</h4>
<p className="text-xs text-zinc-500">Rick Rubin • 6h 16m</p>
</div>
</div>
<div className="group bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-indigo-600 transition-all cursor-pointer">
<img alt="Book cover" className="w-full h-48 object-cover rounded" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="mt-4 space-y-1">
<h4 className="text-sm font-semibold tracking-tight">Bloodmarked</h4>
<p className="text-xs text-zinc-500">Tracy Deonn • 18h 24m</p>
</div>
</div>
<div className="group bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-indigo-600 transition-all cursor-pointer">
<img alt="Book cover" className="w-full h-48 object-cover rounded" src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=500&q=80" />
<div className="mt-4 space-y-1">
<h4 className="text-sm font-semibold tracking-tight">Babel</h4>
<p className="text-xs text-zinc-500">R.F. Kuang • 21h 43m</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 border-t border-zinc-800">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-semibold tracking-tight">Top Charts</h3>
<a className="text-sm text-indigo-400 hover:underline" href="#">View all</a>
</div>
<div className="grid gap-6 mt-8">

</div></section>
    </>
  );
}
