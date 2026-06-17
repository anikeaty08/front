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
      

<div className="bg-noise"></div>

<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

<div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-orange-200/20 rounded-full blur-[100px] mix-blend-multiply animate-float-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-green-200/20 rounded-full blur-[100px] mix-blend-multiply animate-float-slow" style={{animationDelay: '-2s'}}></div>

<img alt="Orange" className="absolute top-[15%] left-[5%] w-24 h-24 object-cover rounded-full opacity-40 blur-[1px] animate-float-medium" src="https://images.unsplash.com/photo-1615485925694-a6dd9951cd82?q=80&amp;w=300&amp;auto=format&amp;fit=crop" style={{mixBlendMode: 'overlay'}}/>
<img alt="Kiwi" className="absolute bottom-[20%] left-[10%] w-32 h-32 object-cover rounded-full opacity-30 blur-[2px] animate-float-slow" src="https://images.unsplash.com/photo-1591796079433-7f41b45eb95c?q=80&amp;w=300&amp;auto=format&amp;fit=crop" style={{mixBlendMode: 'overlay'}}/>
<img alt="Banana" className="absolute top-[10%] right-[10%] w-20 h-20 object-cover rounded-full opacity-40 blur-[1px] animate-float-medium" src="https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&amp;w=300&amp;auto=format&amp;fit=crop" style={{animationDelay: '-1s', mixBlendMode: 'overlay'}}/>
</div>

<nav className="fixed top-4 z-50 w-full max-w-5xl animate-reveal">
<div className="glass-panel mx-auto rounded-full px-2 py-2 flex justify-between items-center pl-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-yellow-400 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
<iconify-icon icon="solar:leaf-bold" width="18"></iconify-icon>
</div>
<span className="font-display font-semibold text-stone-800 tracking-tight text-lg">Juice<span className="text-orange-500">OS</span></span>
</div>
<div className="hidden md:flex items-center gap-1 p-1 bg-stone-100/50 rounded-full border border-stone-200/50">
<a className="px-5 py-1.5 rounded-full bg-white text-stone-800 text-sm font-medium shadow-sm border border-stone-200/50 transition-all" href="#">Market</a>
<a className="px-5 py-1.5 rounded-full text-stone-500 hover:text-stone-800 text-sm font-medium transition-colors" href="#">Origins</a>
<a className="px-5 py-1.5 rounded-full text-stone-500 hover:text-stone-800 text-sm font-medium transition-colors" href="#">Stories</a>
</div>
<div className="flex items-center gap-3 pr-2">
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors relative group">
<iconify-icon className="text-stone-600 group-hover:text-orange-600 transition-colors" icon="solar:bag-3-linear" width="22"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border border-white"></span>
</button>
<button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md cursor-pointer transition-transform hover:scale-105">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</button>
</div>
</div>
</nav>

<main className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 mt-24 mb-10">

<div className="md:col-span-3 flex flex-col gap-5 h-full animate-reveal delay-100">

<div className="glass-panel rounded-[2rem] p-6 relative overflow-hidden group h-72 flex flex-col justify-end transition-all duration-500 hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1">

<div className="absolute inset-0 z-0">
<img alt="Fresh Apples" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent"></div>
</div>
<div className="absolute top-4 right-4 z-10">
<span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1 rounded-full">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                        3m ago
                    </span>
</div>
<div className="relative z-10 text-white">
<div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 text-white border border-white/30">
<iconify-icon icon="solar:leaf-bold" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold tracking-tight leading-tight">Morning Harvest</h3>
<p className="mt-1 text-sm text-stone-200 font-light">Organic Fiji Apples just arrived at the hub.</p>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-6 flex flex-col justify-center items-center text-center relative overflow-hidden flex-grow bg-white/80">
<div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
<div className="relative z-10">
<h3 className="text-5xl font-display font-semibold text-stone-800 tracking-tighter mb-1">12k<span className="text-orange-500 text-3xl">+</span></h3>
<p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-6">Community Members</p>
<div className="flex -space-x-3 justify-center mb-5">
<img alt="User" className="w-11 h-11 rounded-full border-[3px] border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
<img alt="User" className="w-11 h-11 rounded-full border-[3px] border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
<img alt="User" className="w-11 h-11 rounded-full border-[3px] border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
</img></img></img></div>
<button className="text-xs font-medium text-stone-500 flex items-center gap-1 hover:text-orange-600 transition-colors mx-auto">
                        Join the club 
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:col-span-6 flex flex-col gap-5 animate-reveal delay-200">

<div className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[520px] bg-gradient-to-b from-white to-orange-50/30">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-gradient-to-r from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl mix-blend-multiply filter animate-pulse"></div>

<div className="absolute top-10 right-10 opacity-20 rotate-12">
<iconify-icon className="text-orange-400" icon="solar:star-fall-minimalistic-linear" width="40"></iconify-icon>
</div>
<div className="absolute bottom-10 left-10 opacity-20 -rotate-12">
<iconify-icon className="text-green-400" icon="solar:leaf-linear" width="40"></iconify-icon>
</div>
</div>
<div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/60 shadow-sm mb-6 backdrop-blur-sm hover:scale-105 transition-transform cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-semibold text-stone-600 uppercase tracking-wider">Delivery within 15 mins</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-stone-800 tracking-tight leading-[1] mb-6">
                        Nature's <br/>
<span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
                            Sweetest
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 z-[-1]" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span>
</h1>
<p className="text-lg text-stone-500 font-normal mb-8 max-w-sm mx-auto leading-relaxed">
                        Hand-picked daily from local organic farms. Experience the vibrant taste of real fruit.
                    </p>

<div className="relative w-full h-64 mb-10 flex items-center justify-center pointer-events-none select-none">

<div className="absolute w-48 h-48 bg-orange-400/20 rounded-full blur-2xl"></div>

<div className="relative w-56 h-56 animate-float-medium">

<div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-orange-500/10">
<img alt="Fruit Bowl" className="w-full h-full object-cover scale-110" src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>

<div className="absolute -top-6 -right-2 bg-white p-3 rounded-2xl shadow-lg animate-bounce" style={{animationDuration: '3s'}}>
<img alt="Berry" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1596363505729-41905a9a17a6?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="absolute top-1/2 -left-8 bg-white p-2.5 rounded-2xl shadow-lg animate-float-slow">
<iconify-icon className="text-green-500 text-xl" icon="solar:leaf-bold"></iconify-icon>
</div>
<div className="absolute -bottom-4 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-white/50 animate-float-slow" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-bold text-stone-700">100% Bio</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full relative z-20">

<button className="group relative overflow-hidden rounded-2xl bg-stone-900 px-8 py-4 text-white shadow-xl shadow-orange-900/10 transition-all hover:shadow-orange-900/20 active:scale-95 w-full sm:w-auto">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-stone-800 to-stone-900 transition-transform group-hover:scale-105"></div>

<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="relative flex items-center justify-center gap-3 font-semibold tracking-wide">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
<span>Start Shopping</span>
</div>
</button>

<button className="relative rounded-2xl bg-white px-8 py-4 text-stone-600 shadow-lg shadow-stone-200/40 transition-all hover:bg-stone-50 active:scale-95 w-full sm:w-auto border border-stone-100 group">
<div className="flex items-center justify-center gap-2 font-medium">
<span>View Producers</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-5">

<div className="glass-panel rounded-[2rem] p-6 relative overflow-hidden group hover:bg-orange-50/50 transition-colors duration-300">
<div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-orange-500 -rotate-12" icon="solar:bottle-bold" width="80"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[140px]">
<div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
<iconify-icon icon="solar:bottle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-display font-semibold text-stone-800 mb-1">Cold Pressed</h3>
<p className="text-xs text-stone-500 leading-relaxed">Never heated, retaining 100% nutrients.</p>
</div>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-6 relative overflow-hidden group hover:bg-blue-50/50 transition-colors duration-300">
<div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-blue-500 -rotate-12" icon="solar:scooter-bold" width="80"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[140px]">
<div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:scooter-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-display font-semibold text-stone-800 mb-1">Eco Delivery</h3>
<p className="text-xs text-stone-500 leading-relaxed">Electric scooters within city limits.</p>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 flex flex-col gap-5 h-full animate-reveal delay-300">

<div className="glass-panel-dark rounded-[2rem] p-6 relative overflow-hidden text-white group transition-transform hover:-translate-y-1 duration-300">

<div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-black z-0"></div>
<div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-orange-500/40 rounded-full blur-[50px] group-hover:bg-orange-500/60 transition-colors duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
<div className="flex justify-between items-start">
<div className="p-2.5 bg-white/10 rounded-full backdrop-blur-md border border-white/10">
<iconify-icon className="text-yellow-400" icon="solar:crown-star-bold" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold tracking-widest uppercase text-white/40">Premium</span>
</div>
<div>
<h3 className="text-3xl font-display font-bold tracking-tight mb-2">Free Trial</h3>
<p className="text-sm text-stone-400 leading-relaxed mb-4">Get 2 weeks of free delivery with JuiceOS+ membership.</p>
</div>
<button className="w-full py-3 rounded-xl bg-white text-stone-900 text-sm font-semibold hover:bg-stone-200 transition-colors flex items-center justify-center gap-2">
                        Claim Offer
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-5 flex-grow flex flex-col bg-white/60">
<div className="flex justify-between items-end mb-6">
<h4 className="text-sm font-bold text-stone-800">Trending Now</h4>
<a className="text-[10px] font-semibold text-stone-400 hover:text-stone-600 transition-colors" href="#">View All</a>
</div>
<div className="space-y-3">

<div className="group flex items-center gap-3 p-2 hover:bg-white rounded-2xl transition-all cursor-pointer border border-transparent hover:border-stone-100 hover:shadow-sm">
<div className="w-12 h-12 rounded-xl overflow-hidden relative">
<img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-stone-800">Citrus Blast</div>
<div className="text-[10px] text-stone-500">Orange, Lemon, Ginger</div>
</div>
<button className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>

<div className="group flex items-center gap-3 p-2 hover:bg-white rounded-2xl transition-all cursor-pointer border border-transparent hover:border-stone-100 hover:shadow-sm">
<div className="w-12 h-12 rounded-xl overflow-hidden relative">
<img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1590848805607-b35cb4df89ce?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-stone-800">Avocado Glow</div>
<div className="text-[10px] text-stone-500">Avocado, Spinach, Apple</div>
</div>
<button className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>

<div className="group flex items-center gap-3 p-2 hover:bg-white rounded-2xl transition-all cursor-pointer border border-transparent hover:border-stone-100 hover:shadow-sm">
<div className="w-12 h-12 rounded-xl overflow-hidden relative">
<img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1576021182211-9ea8dced3690?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-stone-800">Red Berry</div>
<div className="text-[10px] text-stone-500">Strawberry, Raspberry</div>
</div>
<button className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto mb-12 animate-reveal delay-300">
<div className="relative w-full overflow-hidden rounded-[2.5rem] bg-[#F4A261] px-6 py-16 md:px-16 shadow-2xl shadow-orange-500/20 group">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px'}}></div>

<div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-[80px] opacity-40 mix-blend-overlay group-hover:scale-125 transition-transform duration-1000"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full blur-[80px] opacity-40 mix-blend-overlay group-hover:scale-125 transition-transform duration-1000"></div>

<div className="absolute top-10 left-10 animate-float-slow opacity-90">
<iconify-icon icon="noto:lemon" width="56"></iconify-icon>
</div>
<div className="absolute bottom-10 right-20 animate-float-medium opacity-90" style={{animationDelay: '1s'}}>
<iconify-icon icon="noto:red-apple" width="64"></iconify-icon>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-4">
                        Limited Edition
                    </div>
<h2 className="font-display text-5xl md:text-7xl text-white font-bold leading-[0.9] drop-shadow-sm">
                        FEEL THE <br/>
<span className="text-yellow-200">ENERGY</span>
</h2>
<p className="mt-4 text-white/90 text-lg font-medium max-w-md">Join the juice revolution. Sustainably sourced, delivered with love.</p>
</div>
<div className="relative">
<button className="relative z-10 inline-flex items-center justify-center px-10 py-5 bg-white rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 group/btn">
<span className="font-display text-xl text-stone-900 font-bold tracking-tight group-hover/btn:text-orange-500 transition-colors">GRAB A BOTTLE</span>
<div className="w-8 h-8 ml-4 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover/btn:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</button>

<div className="absolute inset-0 bg-white blur-xl opacity-30 scale-110 z-0 animate-pulse"></div>
</div>
</div>
</div>
</section>

    </>
  );
}
