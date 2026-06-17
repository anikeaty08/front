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
      

<div className="grain-overlay"></div>

<div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#a855f7] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#bef264] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

<main className="overflow-hidden flex flex-col z-10 bg-slate-50 w-full h-[850px] max-w-[400px] border-white/10 border rounded-[3rem] relative shadow-2xl">

<div className="flex bg-stone-900 pt-6 pb-2 items-center justify-between">
<span className="text-xs font-medium text-white/40">9:41</span>
<div className="flex gap-1.5 gap-x-1.5 gap-y-1.5">
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="w-4 h-4 rounded-full border border-white/20"></div>
<div className="w-4 h-4 rounded-full bg-white/20"></div>
</div>
</div>

<header className="flex justify-between items-center px-6 py-4 sticky top-0 z-30 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
<div className="flex items-center gap-1">
<h1 className="text-3xl font-bold tracking-tighter italic">
                    VIBE<span className="text-[#bef264]">.</span>
</h1>
</div>
<div className="relative">
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition">
<iconify-icon className="text-white" icon="solar:bell-bing-linear" width="20"></iconify-icon>
</button>
<span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#bef264] rounded-full border-2 border-[#0A0A0A]"></span>
</div>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar pb-32 relative">

<section className="bg-[conic-gradient(from_210deg,var(--tw-gradient-stops))] from-zinc-400 via-zinc-600 to-zinc-400 border-white/5 border-b pt-4 pr-6 pb-4 pl-6">
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 gap-x-4 gap-y-4">

<div className="flex flex-col items-center gap-2 flex-shrink-0">
<div className="w-[4.5rem] h-[4.5rem] relative">
<div className="border-dashed animate-spin-slow bg-gradient-to-b from-green-400 via-[#1ded3f] to-green-600 border-white/30 border-2 rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex overflow-hidden bg-zinc-800 border-white/10 border rounded-full absolute top-1 right-1 bottom-1 left-1 items-center justify-center">
<iconify-icon className="text-white/50" icon="solar:user-plus-linear" width="28"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 w-6 h-6 bg-[#bef264] rounded-full flex items-center justify-center text-black border-2 border-[#0A0A0A]">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon>
</div>
</div>
<span className="text-xs font-medium text-white/60">You</span>
</div>

<div className="flex flex-col items-center gap-2 flex-shrink-0">
<div className="w-[4.5rem] h-[4.5rem] rounded-full p-[3px] bg-gradient-to-tr from-[#a855f7] to-[#bef264]">
<div className="w-full h-full rounded-full border-2 border-[#0A0A0A] overflow-hidden bg-zinc-800 relative">
<img alt="User" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
<span className="text-xs font-medium">chloe_z</span>
</div>

<div className="flex flex-col items-center gap-2 flex-shrink-0">
<div className="w-[4.5rem] h-[4.5rem] rounded-full p-[3px] bg-gradient-to-bl from-[#bef264] to-transparent">
<div className="w-full h-full rounded-full border-2 border-[#0A0A0A] overflow-hidden bg-zinc-800 relative">
<img alt="User" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
<span className="text-xs font-medium">sara.img</span>
</div>
</div>
</section>

<section className="bg-neutral-400 pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-end justify-between">
<h2 className="text-lg font-semibold text-white/90 tracking-tight bg-neutral-400">Trending Now</h2>
<iconify-icon className="text-white/40" height="16" icon="solar:arrow-right-linear" style={{color: 'rgb(255, 255, 255)'}} width="16"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="col-span-2 clay-card rounded-[2rem] p-5 relative overflow-hidden group min-h-[14rem]">
<img alt="Bg" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 bg-[#bef264] text-black text-xs font-bold px-3 py-1.5 rounded-full rotate-6 shadow-lg border border-black/10">
                            #VIRAL
                        </div>
<div className="absolute bottom-5 left-5 right-5">
<div className="flex items-center gap-2 mb-2">
<span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-semibold border border-white/10">MUSIC</span>
</div>
<h3 className="text-xl font-semibold leading-tight mb-1">Neon Nights</h3>
<p className="text-sm text-white/60 line-clamp-1">Tokyo Drift Remix...</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-400 mb-10 px-6">
<h2 className="text-lg font-semibold tracking-tight mb-4 text-white/90">Your Feed</h2>
<div className="clay-card rounded-[2.5rem] p-5 border border-white/5 relative">

<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="">
<h4 className="text-sm font-semibold">Alex Rivera</h4>
<span className="text-xs text-white/40">@arivera • NYC</span>
</div>
</div>
<button className="text-white/40 hover:text-white">
<iconify-icon className="" icon="solar:menu-dots-linear" width="24"></iconify-icon>
</button>
</div>

<div className="relative w-full aspect-[4/5] rounded-[1.8rem] overflow-hidden mb-4 group">
<img alt="Post" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 right-6 -rotate-12 transform group-hover:rotate-0 transition duration-300">
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="flex items-center gap-1.5 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#d8b4fe]/20 group-hover:text-[#d8b4fe] transition">
<iconify-icon icon="solar:heart-linear" width="22"></iconify-icon>
</div>
</button>
<button className="flex items-center gap-1.5 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition">
<iconify-icon icon="solar:chat-round-line-linear" width="22"></iconify-icon>
</div>
</button>
</div>
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#bef264]/20 hover:text-[#bef264] transition">
<iconify-icon className="" icon="solar:bookmark-linear" width="22"></iconify-icon>
</button>
</div>
</div>
</section>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] z-40">
<nav className="flex bg-slate-600/90 w-full border-white/10 border rounded-[2.5rem] pt-1 pr-1 pb-1 pl-1 relative shadow-2xl backdrop-blur-xl items-center justify-between">

<a className="w-16 h-16 flex flex-col items-center justify-center rounded-full text-white nav-active transition" href="#">
<iconify-icon icon="solar:home-smile-linear" width="26"></iconify-icon>
</a>

<a className="w-16 h-16 flex flex-col items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/5 transition" href="#">
<iconify-icon icon="solar:magnifer-linear" width="26"></iconify-icon>
</a>

<button className="clay-btn flex -translate-y-6 z-50 text-black bg-gray-50 w-14 h-14 border-[#0A0A0A] border-4 rounded-full mr-1 ml-1 shadow-[0_8px_20px_rgba(190,242,100,0.25)] items-center justify-center">
<iconify-icon className="" icon="solar:clapperboard-play-linear" width="28"></iconify-icon>
</button>

<a className="w-16 h-16 flex flex-col items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/5 transition" href="#">
<iconify-icon className="" icon="solar:chat-round-dots-linear" width="26"></iconify-icon>
<span className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full border border-[#121212]"></span>
</a>

<a className="w-16 h-16 flex flex-col items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/5 transition" href="#">
<iconify-icon className="" icon="solar:user-circle-linear" width="26"></iconify-icon>
</a>
</nav>
</div>
</main>

    </>
  );
}
