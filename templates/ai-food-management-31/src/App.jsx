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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00ff88] rounded-full blur-[150px] opacity-[0.08]"></div>
<div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600 rounded-full blur-[150px] opacity-[0.06]"></div>
</div>
<div className="flex flex-col lg:flex-row h-screen overflow-hidden">

<aside className="w-full lg:w-72 h-auto lg:h-full glass-panel lg:rounded-r-3xl z-20 flex flex-col justify-between shrink-0 relative lg:static border-b lg:border-b-0 lg:border-r border-white/5">
<div className="p-8">

<div className="flex items-center gap-3 mb-12 cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-[#00ff88] flex items-center justify-center text-[#050a08] neon-glow group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:leaf" strokeWidth="2.5" width="18"></iconify-icon>
</div>
<span className="text-2xl font-medium tracking-tighter text-white">VERDE</span>
</div>

<nav className="space-y-2">
<a className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20 transition-all duration-300" href="#">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/5 text-gray-400 hover:text-white transition-all duration-300 group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:refrigerator" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">My Fridge</span>
<span className="ml-auto w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/5 text-gray-400 hover:text-white transition-all duration-300 group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:chef-hat" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Chef Verde</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/5 text-gray-400 hover:text-white transition-all duration-300 group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:bookmark" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Recipe Box</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/5 text-gray-400 hover:text-white transition-all duration-300 group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:bar-chart-2" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Eco Impact</span>
</a>
</nav>
</div>

<div className="p-6 border-t border-white/5">
<div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-colors">
<img alt="User" className="w-10 h-10 rounded-full border border-white/10" src="https://i.pravatar.cc/150?img=33"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Alex Morgan</span>
<span className="text-xs text-gray-500">Zero Waste Hero</span>
</div>
<iconify-icon className="ml-auto text-gray-600" icon="lucide:chevron-right" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">

<header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h1 className="text-3xl font-medium tracking-tight text-white mb-1">Good evening, Alex.</h1>
<p className="text-sm text-gray-400">You have 3 items expiring soon. Let's cook.</p>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
<iconify-icon icon="lucide:search" width="18"></iconify-icon>
</div>
<input className="glass-input pl-10 pr-4 py-2.5 rounded-full text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#00ff88]/50 w-64 transition-all" placeholder="Search ingredients..." type="text"/>
</div>
<button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors relative">
<iconify-icon className="text-white" icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-[#00ff88] rounded-full"></span>
</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-8">

<div className="lg:col-span-4 glass-panel rounded-3xl p-6 flex flex-col justify-between group hover:border-[#00ff88]/30 transition-colors duration-500">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:dollar-sign" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-[#00ff88] bg-[#00ff88]/10 px-2.5 py-1 rounded-full">+12% this month</span>
</div>
<div className="mt-4">
<span className="text-sm text-gray-400 block mb-1">Money Saved</span>
<h2 className="text-3xl font-medium tracking-tight text-white">$428.50</h2>
</div>
</div>

<div className="lg:col-span-4 glass-panel rounded-3xl p-6 flex flex-col justify-between group hover:border-emerald-500/30 transition-colors duration-500">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:leaf" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">High Impact</span>
</div>
<div className="mt-4">
<span className="text-sm text-gray-400 block mb-1">CO₂ Avoided</span>
<h2 className="text-3xl font-medium tracking-tight text-white">14.2 kg</h2>
</div>
</div>

<div className="lg:col-span-4 glass-panel rounded-3xl p-6 flex flex-col justify-between group hover:border-blue-500/30 transition-colors duration-500">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:trash-2" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400">Target: 0</span>
</div>
<div className="mt-4">
<span className="text-sm text-gray-400 block mb-1">Items Wasted</span>
<h2 className="text-3xl font-medium tracking-tight text-white">0</h2>
</div>
</div>

<div className="lg:col-span-7 glass-panel rounded-3xl p-6 md:p-8 flex flex-col h-[500px]">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<h3 className="text-xl font-medium tracking-tight text-white">Smart Fridge</h3>
<span className="bg-white/10 text-xs px-2 py-0.5 rounded text-gray-300">12 Items</span>
</div>
<button className="text-xs font-medium text-[#00ff88] hover:text-white transition-colors flex items-center gap-1">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Add Item
                        </button>
</div>

<div className="grid grid-cols-12 text-xs text-gray-500 uppercase tracking-wider font-medium mb-3 px-2">
<div className="col-span-6">Ingredient</div>
<div className="col-span-3">Status</div>
<div className="col-span-3 text-right">Added</div>
</div>

<div className="flex-1 overflow-y-auto space-y-2 pr-2">

<div className="group grid grid-cols-12 items-center p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
<div className="col-span-6 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-xl shadow-inner">🥑</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-[#00ff88] transition-colors">Avocados</p>
<p className="text-xs text-gray-500">2 units</p>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                    Expires Today
                                </span>
</div>
<div className="col-span-3 text-right text-xs text-gray-500">
                                4 days ago
                            </div>
</div>

<div className="group grid grid-cols-12 items-center p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
<div className="col-span-6 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-xl shadow-inner">🥛</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-[#00ff88] transition-colors">Oat Milk</p>
<p className="text-xs text-gray-500">0.5 Liters</p>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                    1 Day Left
                                </span>
</div>
<div className="col-span-3 text-right text-xs text-gray-500">
                                6 days ago
                            </div>
</div>

<div className="group grid grid-cols-12 items-center p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
<div className="col-span-6 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-xl shadow-inner">🫐</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-[#00ff88] transition-colors">Blueberries</p>
<p className="text-xs text-gray-500">1 Punnet</p>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20">
<span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></span>
                                    Fresh
                                </span>
</div>
<div className="col-span-3 text-right text-xs text-gray-500">
                                Today
                            </div>
</div>

<div className="group grid grid-cols-12 items-center p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
<div className="col-span-6 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-xl shadow-inner">🥦</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-[#00ff88] transition-colors">Broccoli</p>
<p className="text-xs text-gray-500">1 Head</p>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20">
<span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></span>
                                    Fresh
                                </span>
</div>
<div className="col-span-3 text-right text-xs text-gray-500">
                                Yesterday
                            </div>
</div>

<div className="group grid grid-cols-12 items-center p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
<div className="col-span-6 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-xl shadow-inner">🥚</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-[#00ff88] transition-colors">Free Range Eggs</p>
<p className="text-xs text-gray-500">6 count</p>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20">
<span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></span>
                                    Fresh
                                </span>
</div>
<div className="col-span-3 text-right text-xs text-gray-500">
                                2 days ago
                            </div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">
<div className="glass-panel rounded-3xl p-6 flex-1 flex flex-col relative overflow-hidden">

<div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-[#00ff88] rounded-full blur-[80px] opacity-[0.15]"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00ff88] to-emerald-600 flex items-center justify-center text-black">
<iconify-icon icon="lucide:sparkles" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white">Chef Verde</h3>
<p className="text-xs text-[#00ff88]">Powered by Gemini 1.5</p>
</div>
</div>
<button className="text-gray-500 hover:text-white transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 space-y-4 mb-4 overflow-y-auto pr-2">

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-[#00ff88]" icon="lucide:bot" width="16"></iconify-icon>
</div>
<div className="glass-input p-4 rounded-2xl rounded-tl-none border-transparent bg-white/5 text-sm leading-relaxed text-gray-200">
<p>I noticed your <b>Avocados</b> and <b>Oat Milk</b> are expiring soon! 🚨</p>
<p className="mt-2">Would you like a recipe for a <b>Creamy Avocado Smoothie</b> or perhaps <b>Avocado Toast with Poached Eggs</b>?</p>
</div>
</div>

<div className="flex gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=33"/>
</div>
<div className="bg-[#00ff88] p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed text-[#050a08] font-medium shadow-[0_0_15px_rgba(0,255,136,0.3)]">
<p>The smoothie sounds great. Can we make it high protein?</p>
</div>
</div>
</div>

<div className="relative z-10 mt-auto">
<input className="w-full glass-input pl-4 pr-12 py-3 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88]/50 transition-colors" placeholder="Ask Chef Verde..." type="text"/>
<button className="absolute right-2 top-2 w-8 h-8 rounded-lg bg-[#00ff88] flex items-center justify-center text-[#050a08] hover:scale-105 transition-transform">
<iconify-icon icon="lucide:arrow-up" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:col-span-12">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium tracking-tight text-white">Generated For You</h3>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-0 rounded-3xl overflow-hidden group cursor-pointer relative hover:-translate-y-1 transition-transform duration-300">
<div className="h-32 bg-gray-800 relative overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-medium text-[#00ff88] border border-[#00ff88]/20 flex items-center gap-1">
<iconify-icon icon="lucide:clock" width="12"></iconify-icon> 5 min
                                </div>
</div>
<div className="p-5">
<h4 className="text-lg font-medium text-white mb-1">Zero-Waste Avo Smoothie</h4>
<p className="text-xs text-gray-400 mb-4 line-clamp-2">Uses expiring Avocados and Oat Milk. High protein boost included.</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-[#2a2a2a] border border-[#050a08] flex items-center justify-center text-xs">🥑</div>
<div className="w-6 h-6 rounded-full bg-[#2a2a2a] border border-[#050a08] flex items-center justify-center text-xs">🥛</div>
</div>
<button className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-[#00ff88] transition-colors">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="glass-panel p-0 rounded-3xl overflow-hidden group cursor-pointer relative hover:-translate-y-1 transition-transform duration-300">
<div className="h-32 bg-gray-800 relative overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-medium text-[#00ff88] border border-[#00ff88]/20 flex items-center gap-1">
<iconify-icon icon="lucide:clock" width="12"></iconify-icon> 15 min
                                </div>
</div>
<div className="p-5">
<h4 className="text-lg font-medium text-white mb-1">Crispy Kale Chips</h4>
<p className="text-xs text-gray-400 mb-4 line-clamp-2">Don't toss those stems! Perfect crunchy snack alternative.</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-[#2a2a2a] border border-[#050a08] flex items-center justify-center text-xs">🥬</div>
</div>
<button className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-[#00ff88] transition-colors">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="glass-panel p-0 rounded-3xl overflow-hidden group cursor-pointer relative hover:-translate-y-1 transition-transform duration-300">
<div className="h-32 bg-gray-800 relative overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-medium text-[#00ff88] border border-[#00ff88]/20 flex items-center gap-1">
<iconify-icon icon="lucide:clock" width="12"></iconify-icon> 25 min
                                </div>
</div>
<div className="p-5">
<h4 className="text-lg font-medium text-white mb-1">Leftover Veggie Stir-fry</h4>
<p className="text-xs text-gray-400 mb-4 line-clamp-2">Clear the fridge with this savory, easy-to-make sauce base.</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-[#2a2a2a] border border-[#050a08] flex items-center justify-center text-xs">🥦</div>
<div className="w-6 h-6 rounded-full bg-[#2a2a2a] border border-[#050a08] flex items-center justify-center text-xs">🥕</div>
<div className="w-6 h-6 rounded-full bg-[#2a2a2a] border border-[#050a08] flex items-center justify-center text-xs">🧅</div>
</div>
<button className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-[#00ff88] transition-colors">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
