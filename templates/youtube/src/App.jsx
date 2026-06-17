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
      

<div className="w-full max-w-[414px] bg-white h-[100dvh] flex flex-col relative sm:h-[800px] sm:rounded-3xl overflow-hidden shadow-2xl sm:border border-neutral-200/60 ring-1 ring-neutral-900/5">

<header className="flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-xl z-50 shrink-0 border-b border-neutral-100/50 relative">
<div className="text-xl font-semibold tracking-tighter select-none flex items-center gap-0.5">
                YT
            </div>
<div className="flex items-center gap-5 text-neutral-700">
<button className="hover:text-neutral-900 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:screencast-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="hover:text-neutral-900 transition-colors flex items-center justify-center relative">
<iconify-icon icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="hover:text-neutral-900 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
</header>

<div className="flex gap-2.5 overflow-x-auto px-4 py-2.5 shrink-0 bg-white/90 backdrop-blur-xl z-40 border-b border-neutral-100/50" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<button className="bg-neutral-900 text-white px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-transform active:scale-95">All</button>
<button className="bg-neutral-100/80 text-neutral-700 px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-neutral-200/80 transition-all active:scale-95">Design</button>
<button className="bg-neutral-100/80 text-neutral-700 px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-neutral-200/80 transition-all active:scale-95">Engineering</button>
<button className="bg-neutral-100/80 text-neutral-700 px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-neutral-200/80 transition-all active:scale-95">Podcasts</button>
<button className="bg-neutral-100/80 text-neutral-700 px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-neutral-200/80 transition-all active:scale-95">Live</button>
<button className="bg-neutral-100/80 text-neutral-700 px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-neutral-200/80 transition-all active:scale-95">Music</button>
</div>

<main className="flex-1 overflow-y-auto pb-20 bg-white" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>

<article className="flex flex-col mb-6 mt-2 group cursor-pointer">
<div className="relative w-full aspect-video bg-neutral-100 overflow-hidden sm:rounded-xl sm:mx-4 sm:w-auto">
<img alt="Thumbnail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<span className="absolute bottom-2 right-2 bg-neutral-900/80 backdrop-blur-md text-white text-xs px-1.5 py-0.5 rounded font-medium tracking-tight">14:05</span>
</div>
<div className="flex gap-3 px-4 pt-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover shrink-0 ring-1 ring-neutral-200/50" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="flex-1 flex flex-col pr-2">
<h3 className="text-sm font-semibold line-clamp-2 leading-snug group-hover:text-neutral-600 transition-colors">Building the Future of Web Interfaces: A Deep Dive into Modern CSS Architectures</h3>
<div className="text-xs text-neutral-500 mt-1 flex flex-wrap gap-x-1 items-center font-medium">
<span className="hover:text-neutral-800 transition-colors">Vercel</span>
<span>·</span>
<span>241K views</span>
<span>·</span>
<span>1 day ago</span>
</div>
</div>
<button className="shrink-0 text-neutral-400 hover:text-neutral-800 p-1 -mt-1 -mr-1 self-start rounded-full hover:bg-neutral-100 transition-colors flex items-center justify-center h-8 w-8">
<iconify-icon className="rotate-90" icon="solar:menu-dots-outline" width="18"></iconify-icon>
</button>
</div>
</article>

<article className="flex flex-col mb-6 group cursor-pointer">
<div className="relative w-full aspect-video bg-neutral-100 overflow-hidden sm:rounded-xl sm:mx-4 sm:w-auto">
<img alt="Thumbnail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<span className="absolute bottom-2 right-2 bg-neutral-900/80 backdrop-blur-md text-white text-xs px-1.5 py-0.5 rounded font-medium tracking-tight">8:22</span>
</div>
<div className="flex gap-3 px-4 pt-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover shrink-0 ring-1 ring-neutral-200/50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="flex-1 flex flex-col pr-2">
<h3 className="text-sm font-semibold line-clamp-2 leading-snug group-hover:text-neutral-600 transition-colors">Crafting Minimalist Experiences: The Philosophy Behind Linear's Design System</h3>
<div className="text-xs text-neutral-500 mt-1 flex flex-wrap gap-x-1 items-center font-medium">
<span className="hover:text-neutral-800 transition-colors">Design Studio</span>
<span>·</span>
<span>89K views</span>
<span>·</span>
<span>3 days ago</span>
</div>
</div>
<button className="shrink-0 text-neutral-400 hover:text-neutral-800 p-1 -mt-1 -mr-1 self-start rounded-full hover:bg-neutral-100 transition-colors flex items-center justify-center h-8 w-8">
<iconify-icon className="rotate-90" icon="solar:menu-dots-outline" width="18"></iconify-icon>
</button>
</div>
</article>

<article className="flex flex-col mb-6 group cursor-pointer">
<div className="relative w-full aspect-video bg-neutral-100 overflow-hidden sm:rounded-xl sm:mx-4 sm:w-auto">
<img alt="Thumbnail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<span className="absolute bottom-2 right-2 bg-neutral-900/80 backdrop-blur-md text-white text-xs px-1.5 py-0.5 rounded font-medium tracking-tight">45:10</span>
</div>
<div className="flex gap-3 px-4 pt-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover shrink-0 ring-1 ring-neutral-200/50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="flex-1 flex flex-col pr-2">
<h3 className="text-sm font-semibold line-clamp-2 leading-snug group-hover:text-neutral-600 transition-colors">Writing Clean React Code in 2024</h3>
<div className="text-xs text-neutral-500 mt-1 flex flex-wrap gap-x-1 items-center font-medium">
<span className="hover:text-neutral-800 transition-colors">Code Mastery</span>
<span>·</span>
<span>1.2M views</span>
<span>·</span>
<span>1 week ago</span>
</div>
</div>
<button className="shrink-0 text-neutral-400 hover:text-neutral-800 p-1 -mt-1 -mr-1 self-start rounded-full hover:bg-neutral-100 transition-colors flex items-center justify-center h-8 w-8">
<iconify-icon className="rotate-90" icon="solar:menu-dots-outline" width="18"></iconify-icon>
</button>
</div>
</article>
</main>

<nav className="absolute bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-neutral-100 flex justify-between items-center px-1 pb-[env(safe-area-inset-bottom,12px)] pt-1 shrink-0 z-50 sm:rounded-b-3xl">
<button className="flex flex-col items-center justify-center gap-1 p-2 w-[72px] text-neutral-900 transition-transform active:scale-95">
<iconify-icon className="text-neutral-900" icon="solar:home-smile-bold" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Home</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 p-2 w-[72px] text-neutral-500 hover:text-neutral-900 transition-all active:scale-95 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:play-stream-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Shorts</span>
</button>
<button className="flex items-center justify-center w-[72px] h-12 transition-transform active:scale-90 group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 text-neutral-800 group-hover:bg-neutral-50 transition-colors">
<iconify-icon icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="30"></iconify-icon>
</div>
</button>
<button className="flex flex-col items-center justify-center gap-1 p-2 w-[72px] text-neutral-500 hover:text-neutral-900 transition-all active:scale-95 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:video-library-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Subs</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 p-2 w-[72px] text-neutral-500 hover:text-neutral-900 transition-all active:scale-95 group">
<div className="w-6 h-6 rounded-full overflow-hidden border border-neutral-200 group-hover:border-neutral-400 transition-colors">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-xs font-medium tracking-tight">You</span>
</button>
</nav>
</div>

    </>
  );
}
