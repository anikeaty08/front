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



        function selectShoe(name) {
            alert(`Selected: ${name}`);
        }
    
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
      
<div className="max-w-2xl mx-auto min-h-screen flex flex-col">

<header className="sticky top-0 z-50 bg-gray-50/80 backdrop-blur-md border-b border-gray-200/50 px-6 py-4 flex items-center justify-between">
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Shoe Store</h1>
<button className="w-10 h-10 rounded-full hover:bg-gray-200/50 flex items-center justify-center transition-colors text-gray-500 hover:text-gray-900">
<iconify-icon icon="solar:bag-3-linear" width="24"></iconify-icon>
</button>
</header>

<main className="flex-1 p-6">

<div className="grid grid-cols-2 gap-4">

<button className="group text-left bg-white p-3 rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400" onclick="selectShoe('Running Sneakers')">
<div className="aspect-square w-full rounded-xl overflow-hidden bg-gray-100 relative mb-3">
<img alt="Running Sneakers" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-gray-900">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<h2 className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors">Running Sneakers</h2>
<p className="text-xs text-gray-500 font-medium">$99.00</p>
</div>
</button>

<button className="group text-left bg-white p-3 rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400" onclick="selectShoe('Casual Loafers')">
<div className="aspect-square w-full rounded-xl overflow-hidden bg-gray-100 relative mb-3">
<img alt="Casual Loafers" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1616406432452-07bc59280ad9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-gray-900">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<h2 className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors">Casual Loafers</h2>
<p className="text-xs text-gray-500 font-medium">$79.00</p>
</div>
</button>

<button className="group text-left bg-white p-3 rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400" onclick="selectShoe('High Heels')">
<div className="aspect-square w-full rounded-xl overflow-hidden bg-gray-100 relative mb-3">
<img alt="High Heels" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-gray-900">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<h2 className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors">High Heels</h2>
<p className="text-xs text-gray-500 font-medium">$129.00</p>
</div>
</button>

<button className="group text-left bg-white p-3 rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400" onclick="selectShoe('Sport Runners')">
<div className="aspect-square w-full rounded-xl overflow-hidden bg-gray-100 relative mb-3">
<img alt="Sport Runners" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-gray-900">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<h2 className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors">Sport Runners</h2>
<p className="text-xs text-gray-500 font-medium">$110.00</p>
</div>
</button>
</div>
</main>

<div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center text-xs text-gray-500 font-medium">
<button className="flex flex-col items-center gap-1 text-gray-900">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
<span>Home</span>
</button>
<button className="flex flex-col items-center gap-1 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
<span>Search</span>
</button>
<button className="flex flex-col items-center gap-1 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
<span>Profile</span>
</button>
</div>
</div>


    </>
  );
}
