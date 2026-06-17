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
      

<nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-zinc-100 z-50 transition-all duration-300">
<div className="max-w-[1920px] mx-auto px-4 h-20 flex items-center gap-4">

<a className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-100 transition-colors" href="#">
<span className="font-semibold tracking-tighter text-xl text-red-600">M</span>
</a>

<div className="hidden md:flex gap-1">
<button className="px-5 py-3 rounded-full bg-zinc-900 text-white font-medium text-sm transition-transform active:scale-95">Home</button>
<button className="px-5 py-3 rounded-full hover:bg-zinc-100 font-medium text-sm transition-colors text-zinc-600">Create</button>
</div>

<div className="flex-1 relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-800 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full bg-zinc-100 h-12 rounded-full pl-12 pr-4 text-sm font-medium placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:bg-white transition-all hover:bg-zinc-200/50" placeholder="Search for inspiration..." type="text"/>
</div>

<div className="flex items-center gap-1 sm:gap-2 text-zinc-500">
<button className="p-3 rounded-full hover:bg-zinc-100 transition-colors relative group hidden sm:block">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="p-3 rounded-full hover:bg-zinc-100 transition-colors hidden sm:block">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-zinc-100 ml-2 overflow-hidden hover:opacity-80 transition-opacity border border-zinc-200">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</button>
<button className="p-2 rounded-full hover:bg-zinc-100 transition-colors sm:hidden">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="px-4 pb-3 pt-1 flex items-center gap-2 overflow-x-auto no-scrollbar max-w-[1920px] mx-auto">
<button className="p-2 rounded-lg hover:bg-zinc-100 transition-colors flex-shrink-0">
<iconify-icon icon="lucide:sliders-horizontal" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="h-6 w-[1px] bg-zinc-200 mx-1 flex-shrink-0"></div>

<button className="px-4 py-2 rounded-lg bg-zinc-900 text-white text-sm font-medium flex-shrink-0 transition-transform active:scale-95">All</button>
<button className="px-4 py-2 rounded-lg hover:bg-zinc-100 text-zinc-600 text-sm font-medium flex-shrink-0 transition-colors">UI Design</button>
<button className="px-4 py-2 rounded-lg hover:bg-zinc-100 text-zinc-600 text-sm font-medium flex-shrink-0 transition-colors">Architecture</button>
<button className="px-4 py-2 rounded-lg hover:bg-zinc-100 text-zinc-600 text-sm font-medium flex-shrink-0 transition-colors">Typography</button>
<button className="px-4 py-2 rounded-lg hover:bg-zinc-100 text-zinc-600 text-sm font-medium flex-shrink-0 transition-colors">Photography</button>
<button className="px-4 py-2 rounded-lg hover:bg-zinc-100 text-zinc-600 text-sm font-medium flex-shrink-0 transition-colors">Interior</button>
<button className="px-4 py-2 rounded-lg hover:bg-zinc-100 text-zinc-600 text-sm font-medium flex-shrink-0 transition-colors">Minimalism</button>
<button className="px-4 py-2 rounded-lg hover:bg-zinc-100 text-zinc-600 text-sm font-medium flex-shrink-0 transition-colors">Illustration</button>
<button className="px-4 py-2 rounded-lg hover:bg-zinc-100 text-zinc-600 text-sm font-medium flex-shrink-0 transition-colors">Fashion</button>
</div>
</nav>

<main className="pt-36 px-4 pb-20 max-w-[1920px] mx-auto">
<div className="masonry-grid gap-4 space-y-4">

<div className="break-inside-avoid group relative mb-4">
<div className="relative overflow-hidden rounded-2xl cursor-zoom-in">
<img alt="Interior" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-end">
<button className="bg-red-600 text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg">Save</button>
</div>
<div className="flex justify-end gap-2">
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:share" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:more-horizontal" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 flex justify-between items-start gap-2 px-1">
<p className="text-sm font-medium text-zinc-800 line-clamp-2 leading-tight">Minimalist Scandinavian Interior Living Room</p>
<button className="text-zinc-400 hover:text-zinc-800">
<iconify-icon icon="lucide:more-vertical" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="mt-1 flex items-center gap-2 px-1">
<img className="w-6 h-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<span className="text-xs text-zinc-500 font-medium">Sarah Design</span>
</div>
</div>

<div className="break-inside-avoid group relative mb-4">
<div className="relative overflow-hidden rounded-2xl cursor-zoom-in">
<img alt="Abstract Art" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-end">
<button className="bg-red-600 text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg">Save</button>
</div>
<div className="flex justify-end gap-2">
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:share" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 px-1">
<p className="text-sm font-medium text-zinc-800 leading-tight">Fluid Abstract Shapes</p>
</div>
<div className="mt-1 flex items-center gap-2 px-1">
<img className="w-6 h-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<span className="text-xs text-zinc-500 font-medium">Art Collective</span>
</div>
</div>

<div className="break-inside-avoid group relative mb-4">
<div className="relative overflow-hidden rounded-2xl cursor-zoom-in">
<img alt="Office" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-end">
<button className="bg-red-600 text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg">Save</button>
</div>
<div className="flex justify-end gap-2">
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 px-1">
<p className="text-sm font-medium text-zinc-800 leading-tight">Workspace Setup 2024</p>
</div>
<div className="mt-1 flex items-center gap-2 px-1">
<div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">WS</div>
<span className="text-xs text-zinc-500 font-medium">Work Station</span>
</div>
</div>

<div className="break-inside-avoid group relative mb-4">
<div className="relative overflow-hidden rounded-2xl cursor-zoom-in">
<img alt="Architecture" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-end">
<button className="bg-red-600 text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg">Save</button>
</div>
<div className="flex justify-end gap-2">
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:share" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 px-1">
<p className="text-sm font-medium text-zinc-800 leading-tight">Brutalist Concrete Structures</p>
</div>
<div className="mt-1 flex items-center gap-2 px-1">
<img className="w-6 h-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/12.jpg"/>
<span className="text-xs text-zinc-500 font-medium">Arch Digest</span>
</div>
</div>

<div className="break-inside-avoid group relative mb-4">
<div className="relative overflow-hidden rounded-2xl cursor-zoom-in">
<img alt="Furniture" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-end">
<button className="bg-red-600 text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg">Save</button>
</div>
<div className="flex justify-end gap-2">
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:share" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 px-1">
<p className="text-sm font-medium text-zinc-800 leading-tight">Modern Chair Concept</p>
</div>
</div>

<div className="break-inside-avoid group relative mb-4">
<div className="relative overflow-hidden rounded-2xl cursor-zoom-in">
<img alt="Travel" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-end">
<button className="bg-red-600 text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg">Save</button>
</div>
<div className="flex justify-end gap-2">
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:share" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 px-1">
<p className="text-sm font-medium text-zinc-800 leading-tight">Summer Beach Vibes</p>
</div>
<div className="mt-1 flex items-center gap-2 px-1">
<img className="w-6 h-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/22.jpg"/>
<span className="text-xs text-zinc-500 font-medium">Traveler Ben</span>
</div>
</div>

<div className="break-inside-avoid group relative mb-4">
<div className="relative overflow-hidden rounded-2xl cursor-zoom-in">
<img alt="Technology" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-end">
<button className="bg-red-600 text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg">Save</button>
</div>
<div className="flex justify-end gap-2">
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:share" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 px-1">
<p className="text-sm font-medium text-zinc-800 leading-tight">Retro Synthwave Aesthetics</p>
</div>
<div className="mt-1 flex items-center gap-2 px-1">
<img className="w-6 h-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/65.jpg"/>
<span className="text-xs text-zinc-500 font-medium">Neon Dreams</span>
</div>
</div>

<div className="break-inside-avoid group relative mb-4">
<div className="relative overflow-hidden rounded-2xl cursor-zoom-in bg-zinc-100">
<img alt="Typography" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-end">
<button className="bg-red-600 text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg">Save</button>
</div>
<div className="flex justify-end gap-2">
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:share" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 px-1">
<p className="text-sm font-medium text-zinc-800 leading-tight">Swiss Style Poster</p>
</div>
</div>

<div className="break-inside-avoid group relative mb-4">
<div className="relative overflow-hidden rounded-2xl cursor-zoom-in">
<img alt="Food" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-end">
<button className="bg-red-600 text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg">Save</button>
</div>
<div className="flex justify-end gap-2">
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:share" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 px-1">
<p className="text-sm font-medium text-zinc-800 leading-tight">Dark Food Photography</p>
</div>
<div className="mt-1 flex items-center gap-2 px-1">
<img className="w-6 h-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/50.jpg"/>
<span className="text-xs text-zinc-500 font-medium">Chef John</span>
</div>
</div>

<div className="break-inside-avoid group relative mb-4">
<div className="relative overflow-hidden rounded-2xl cursor-zoom-in">
<img alt="3D" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-end">
<button className="bg-red-600 text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg">Save</button>
</div>
<div className="flex justify-end gap-2">
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:share" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 px-1">
<p className="text-sm font-medium text-zinc-800 leading-tight">3D Pastel Composition</p>
</div>
</div>

<div className="break-inside-avoid group relative mb-4">
<div className="relative overflow-hidden rounded-2xl cursor-zoom-in">
<img alt="Gold" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-end">
<button className="bg-red-600 text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg">Save</button>
</div>
<div className="flex justify-end gap-2">
<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white text-zinc-900 transition-colors shadow-sm">
<iconify-icon icon="lucide:share" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 px-1">
<p className="text-sm font-medium text-zinc-800 leading-tight">Minimal Gold Texture</p>
</div>
</div>
</div>

<div className="py-10 flex justify-center">
<iconify-icon className="animate-spin text-zinc-400" icon="lucide:loader-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</main>

<button className="fixed bottom-24 right-4 z-40 bg-zinc-900 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center sm:hidden hover:scale-105 transition-transform active:scale-95">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="28"></iconify-icon>
</button>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-100 flex justify-around items-center p-4 pb-6 z-50 sm:hidden">
<button className="text-zinc-900 flex flex-col items-center gap-1">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-800 flex flex-col items-center gap-1 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-800 flex flex-col items-center gap-1 transition-colors">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="rounded-full overflow-hidden border border-zinc-200 w-7 h-7">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</button>
</div>

    </>
  );
}
