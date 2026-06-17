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
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-purple-900/10"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] rounded-full blur-[100px] bg-blue-900/10"></div>
</div>

<aside className="hidden md:flex flex-col glass-sidebar flex-shrink-0 transition-all duration-300 z-50 w-20 h-full pt-6 pb-4 items-center justify-between">
<div className="flex flex-col items-center gap-8 w-full">

<div className="text-2xl font-semibold tracking-tighter text-white/90">A</div>

<nav className="flex flex-col gap-6 w-full items-center">
<button className="group flex text-slate-50 bg-slate-50/95 w-10 h-10 rounded-xl relative shadow-[0_0_15px_rgba(45,212,191,0.2)] items-center justify-center">
<iconify-icon className="" height="22" icon="solar:bag-heart-linear" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)'}} width="22"></iconify-icon>
<div className="absolute left-12 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border whitespace-nowrap pointer-events-none bg-gray-900 text-white border-white/10">Store</div>
</button>
<button className="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all text-gray-400 hover:text-white hover:bg-white/5">
<iconify-icon className="" icon="solar:gamepad-linear" strokeWidth="1.5" width="22"></iconify-icon>
<div className="absolute left-12 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border whitespace-nowrap pointer-events-none bg-gray-900 text-white border-white/10">Library</div>
</button>
<button className="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all text-gray-400 hover:text-white hover:bg-white/5">
<iconify-icon className="" height="22" icon="solar:users-group-rounded-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="22"></iconify-icon>
<div className="absolute left-12 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border whitespace-nowrap pointer-events-none bg-gray-900 text-white border-white/10">Community</div>
</button>
<button className="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all text-gray-400 hover:text-white hover:bg-white/5">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</nav>
</div>
<div className="flex flex-col items-center gap-6 mb-2">
<button className="group flex bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] w-10 h-10 rounded-full relative shadow-lg items-center justify-center text-white from-blue-400 to-blue-600">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="absolute left-12 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border whitespace-nowrap pointer-events-none bg-gray-900 text-white border-white/10">Arcadia+</div>
</button>
<div className="w-8 h-8 rounded-full border overflow-hidden relative group cursor-pointer bg-gray-700 border-white/20">
<img alt="User" className="group-hover:opacity-100 transition-opacity opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9368425c-6609-4a76-9cc6-9cdebedac331_320w.jpg"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0a0a0b]"></div>
</div>
<button className="text-gray-500 transition-colors hover:text-white">
<iconify-icon className="" icon="solar:settings-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto scroll-smooth h-full z-10 relative">

<header className="sticky flex bg-[#0a0a0b]/80 z-40 border-white/5 border-b pt-4 pr-6 pb-4 pl-6 top-0 backdrop-blur-xl gap-x-6 gap-y-x-6 items-center justify-between">
<div className="flex gap-6 gap-x-6 gap-y-x-6 items-center">
<div className="flex text-sm text-gray-400 gap-x-6 gap-y-x-6 items-center">
<span className="cursor-pointer transition-colors hover:text-blue-400 font-medium text-white">Discover</span>
<span className="cursor-pointer transition-colors hover:text-white">Browse</span>
<span className="cursor-pointer transition-colors hover:text-white">Sale</span>
<span className="cursor-pointer transition-colors hover:text-white">News</span>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="border rounded-full py-1.5 pl-10 pr-4 text-xs focus:outline-none focus:bg-white/10 w-48 transition-all focus:w-64 focus:border-blue-500/50 bg-white/5 border-white/10 text-gray-300" placeholder="Search store..." type="text"/>
</div>
<button className="hover:text-white text-gray-400 relative flex flex-col">
<iconify-icon className="" height="20" icon="solar:bell-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full border-2 border-[#0a0a0b] bg-blue-500"></span>
</button>
</div>
</header>
<div className="md:p-8 max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 space-y-10">

<section className="fade-in relative w-full h-[65vh] md:h-[500px] rounded-2xl overflow-hidden group shadow-2xl border shadow-black/50 border-white/5">

<img alt="Cyberpunk 2077" className="transition-transform duration-[2s] group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent"></div>
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3c0bdd6-1728-4436-aa1c-ba763a2ee97c_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 brightness-50">
</div>

<div className="md:p-12 md:w-2/3 flex flex-col gap-4 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 gap-x-4 gap-y-4 items-start">
<div className="flex gap-2 mb-2 gap-x-2 gap-y-2 items-center">
<div className="flex text-xs text-white/80 bg-black/40 border-white/10 border rounded pt-0.5 pr-2 pb-0.5 pl-2 backdrop-blur-md gap-x-1.5 gap-y-1.5 items-center">
<iconify-icon className="" height="12" icon="solar:star-fall-linear" style={{color: 'rgb(255, 255, 255)'}} width="12"></iconify-icon>
<span className="tracking-tight font-mono">Special Offer</span>
</div>
</div>
<h1 className="md:text-6xl leading-[0.9] text-4xl font-bold text-white tracking-tighter drop-shadow-lg">
                    CYBERPUNK 2077</h1>
<p className="text-sm md:text-base line-clamp-2 max-w-lg drop-shadow-md font-medium leading-relaxed text-gray-300">
                    Phantom Liberty is a new spy-thriller adventure. Return as cyber-enhanced mercenary V and embark on
                    a high-stakes mission of espionage and intrigue.
                </p>
<div className="flex flex-wrap gap-3 mt-4 gap-x-3 gap-y-3 items-center">
<button className="relative overflow-hidden transition-colors px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 group/btn bg-white text-black hover:bg-blue-50">
<span className="relative z-10">Buy Now</span>
<div className="animate-shimmer group-hover/btn:opacity-80 transition-opacity opacity-0 rounded absolute top-0 right-0 bottom-0 left-0"></div>
</button>
<button className="glass-panel transition-colors flex hover:bg-white/10 text-white rounded-lg pt-3 pr-3 pb-3 pl-3 backdrop-blur items-center justify-center">
<iconify-icon className="" height="20" icon="solar:heart-outline" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="fade-in delay-100">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium tracking-tight text-white">Featured &amp; Recommended</h2>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border flex items-center justify-center border-white/10 hover:bg-white/5"><iconify-icon className="text-gray-400" icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-8 h-8 rounded-full border flex items-center justify-center border-white/10 hover:bg-white/5"><iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto,auto,auto] md:grid-rows-[250px,250px] gap-4">

<div className="col-span-1 md:col-span-2 md:row-span-2 glass-panel rounded-xl overflow-hidden relative group game-card cursor-pointer">
<img alt="Apex Legends" className="card-bg absolute inset-0 w-full h-full object-cover transition-transform duration-500" src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="video-preview absolute inset-0 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center bg-black/40">
<iconify-icon className="text-5xl drop-shadow-lg text-white" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c840ab80-ebe7-4bb0-943b-a1bf9f94ddc5_1600w.jpg)] bg-contain absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute top-4 left-4">
<span className="text-[10px] uppercase font-semibold text-white tracking-wide bg-blue-500/90 rounded px-2 py-1 shadow-lg">Free to Play</span>
</div>
<div className="bg-gradient-to-b w-full px-6 py-6 absolute bottom-0 from-black/0 to-black/95">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1" style={{}}>ARC Raiders</h3>
<div className="flex items-end justify-between">
<div className="flex gap-2 text-gray-400">
<iconify-icon className="" height="14" icon="bi:windows" style={{color: 'rgb(156, 163, 175)'}} width="14"></iconify-icon>
<iconify-icon className="" height="16" icon="bi:playstation" style={{color: 'rgb(156, 163, 175)'}} width="16"></iconify-icon>
</div>
<button className="transition-colors hover:bg-white/80 text-xs font-bold text-black bg-slate-50 border-slate-950/10 border rounded-md pt-2 pr-4 pb-2 pl-4 backdrop-blur-md">Play Now</button>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 md:row-span-2 glass-panel rounded-xl overflow-hidden relative group game-card cursor-pointer">
<img alt="Elden Ring" className="card-bg absolute inset-0 w-full h-full object-cover transition-transform duration-500" src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-gradient-to-t via-transparent to-transparent from-black/90 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b96dc795-daf2-48dc-b386-bab8704d909c_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="text-[10px] font-bold text-white bg-lime-600/90 rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5 absolute top-3 right-3">
                        -10%</div>
<div className="bg-gradient-to-b w-full px-4 py-4 absolute bottom-0 from-black/0 via-black/0 to-black/95">
<h3 className="text-lg font-semibold tracking-tight leading-tight text-white">Elden Ring</h3>
<div className="flex items-center gap-2 mt-2">
<span className="text-sm font-bold text-slate-50">$53.99</span>
<span className="text-gray-500 text-xs line-through">$59.99</span>
</div>
<div className="group-hover:h-8 overflow-hidden transition-all duration-300 group-hover:mt-3 h-0 mt-0">
<button className="transition-colors hover:bg-white/80 text-xs font-bold text-black bg-white w-full rounded-md pt-1.5 pb-1.5">Add to Cart</button>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 md:row-span-2 glass-panel rounded-xl overflow-hidden relative group game-card cursor-pointer">
<img alt="Call of Duty" className="card-bg absolute inset-0 w-full h-full object-cover transition-transform duration-500" src="https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&amp;w=2544&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-gradient-to-t via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/723203e2-b99b-496b-8a6f-875fd139ac35_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 from-black/90">
</div>
<div className="absolute bottom-0 p-4 w-full">
<h3 className="leading-tight text-lg font-semibold tracking-tight text-white" style={{}}>Battlefield 6
                        </h3>
<div className="flex items-center gap-2 mt-2">
<span className="font-bold text-sm text-white">$69.99</span>
</div>
<div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300 mt-0 group-hover:mt-3">
<button className="transition-colors hover:bg-gray-200 text-xs font-bold text-black bg-white w-full rounded-md pt-1.5 pb-1.5">Add to Cart</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">

<div className="glass-panel rounded-lg p-3 flex items-center gap-3 transition-colors cursor-pointer group hover:bg-white/5">
<img alt="DLC" className="bg-gray-800 w-16 h-16 object-cover rounded" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21bc7444-3d4b-4e8a-8157-71adf9a16c97_320w.jpg"/>
<div className="flex flex-col">
<span className="uppercase text-xs font-bold text-blue-400 tracking-wide mb-1">DLC</span>
<span className="text-sm font-medium leading-tight group-hover:text-blue-200 text-white">Phantom Liberty</span>
<span className="text-xs text-gray-500 mt-1">$29.99</span>
</div>
</div>

<div className="glass-panel rounded-lg p-3 flex items-center gap-3 transition-colors cursor-pointer group hover:bg-white/5">
<img alt="DLC" className="bg-gray-800 w-16 h-16 object-cover rounded" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04535946-b9ff-43f0-aa4f-4805181b0c86_320w.jpg"/>
<div className="flex flex-col">
<span className="uppercase text-xs font-bold text-purple-400 tracking-wide mb-1">Expansion</span>
<span className="leading-tight group-hover:text-purple-200 text-sm font-medium text-white" style={{}}>The Final Shape</span>
<span className="text-xs text-gray-500 mt-1">$49.99</span>
</div>
</div>

<div className="glass-panel flex gap-3 transition-colors cursor-pointer group hover:bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<img alt="DLC" className="bg-gray-800 w-16 h-16 object-cover rounded" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a28ff216-0a17-418d-8d35-e2005377abaf_320w.webp"/>
<div className="flex flex-col">
<span className="uppercase text-xs font-bold text-blue-400 tracking-wide mb-1">Add-on</span>
<span className="leading-tight group-hover:text-blue-200 text-sm font-medium text-white">Red Dead Redemption</span>
<span className="text-xs text-gray-500 mt-1">$39.99</span>
</div>
</div>

<div className="glass-panel flex gap-3 transition-colors cursor-pointer group hover:bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<div className="flex transition-colors group-hover:border-blue-500/50 bg-gradient-to-br from-gray-800 to-gray-900 w-16 h-16 border-white/10 border rounded items-center justify-center">
<iconify-icon className="group-hover:text-white text-gray-400" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="leading-tight text-sm font-bold text-white">Browse All Games</span>
<span className="text-xs text-gray-300 mt-1">1,000+ Items</span>
</div>
</div>
</div>
</section>
</div>

<div className="h-20 md:h-0"></div>
</main>

<aside className="hidden lg:flex flex-col w-72 h-full glass-sidebar border-l z-40 bg-[#0a0a0b]/40 border-white/5">
<div className="flex border-white/5 border-b pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight text-gray-300">Activity Feed</h3>
<button className="text-gray-500 flex flex-col hover:text-white"><iconify-icon className="" height="18" icon="solar:users-group-rounded-linear" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto pt-4 pr-4 pb-4 pl-4 space-y-6">

<div className="group">
<div className="flex items-center gap-3 mb-2">
<div className="relative">
<img alt="Friend" className="w-9 h-9 rounded-full border border-white/10" src="https://i.pravatar.cc/150?img=60"/>
<div className="w-2.5 h-2.5 bg-green-500 border-[#0a0a0b] border-2 rounded-full absolute right-0 bottom-0"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium transition-colors group-hover:text-blue-400 text-white">GhostRyder</span>
<span className="text-[10px] uppercase font-bold text-green-500 tracking-wide">Playing Valorant</span>
</div>
</div>
<div className="pl-12">
<button className="flex items-center gap-2 w-full border text-xs py-1.5 px-3 rounded transition-colors bg-white/5 hover:bg-white/10 border-white/5 text-gray-300">
<iconify-icon className="" icon="solar:login-2-linear" width="14"></iconify-icon>
                        Join Party
                    </button>
</div>
</div>

<div className="group">
<div className="flex items-center gap-3 mb-2">
<div className="relative">
<img alt="Friend" className="w-9 h-9 rounded-full border border-white/10" src="https://i.pravatar.cc/150?img=33"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-[#0a0a0b]"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium transition-colors group-hover:text-blue-400 text-white">NeonViper</span>
<span className="text-[10px] uppercase font-bold text-blue-400 tracking-wide" style={{}}>online</span>
</div>
</div>
</div>

<div className="group">
<div className="flex items-center gap-3 mb-2">
<div className="relative">
<img alt="Friend" className="w-9 h-9 rounded-full border grayscale opacity-60 border-white/10" src="https://i.pravatar.cc/150?img=12"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-gray-500 rounded-full border-2 border-[#0a0a0b]"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-500">Kora_99</span>
<span className="text-[10px] uppercase font-bold tracking-wide text-gray-600">Last seen 2h ago</span>
</div>
</div>
</div>

<div className="pt-4 border-t border-white/5">
<h4 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">Updates</h4>
<div className="glass-panel transition-colors cursor-pointer hover:border-blue-500/30 rounded-lg pt-3 pr-3 pb-3 pl-3">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded flex-shrink-0 flex items-center justify-center bg-indigo-900/50 text-indigo-400">
<iconify-icon className="" icon="solar:confetti-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="leading-snug text-xs text-white mb-1">ARCADIA Summer Sale is live! Up to 75% off.</p>
<span className="text-[10px] text-gray-500">10 mins ago</span>
</div>
</div>
</div>
</div>
</div>
</aside>

<nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0a0a0b]/90 backdrop-blur-xl border-t z-50 flex items-center justify-around px-2 border-white/10">
<a className="flex flex-col items-center gap-1 p-2 text-blue-400" href="#">
<iconify-icon icon="solar:bag-heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Store</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-white" href="#">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Library</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-white" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Social</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-white" href="#">
<div className="w-6 h-6 rounded-full overflow-hidden bg-gray-700">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<span className="text-[10px] font-medium">Profile</span>
</a>
</nav>

    </>
  );
}
