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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<svg aria-hidden="true" className="iconify text-emerald-600 group-hover:rotate-12 transition-transform duration-300 iconify--lucide" data-height="20" data-icon="lucide:leaf" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
<span className="text-lg font-semibold text-zinc-900 tracking-tighter font-geist-mono" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>SaI VEGETABLE </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Shop</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Bundle Boxes</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Our Farms</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Stories</a>
</div>

<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:search" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<div className="relative group cursor-pointer">
<svg aria-hidden="true" className="iconify text-zinc-400 group-hover:text-zinc-900 transition-colors iconify--lucide" data-height="20" data-icon="lucide:shopping-bag" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white font-medium font-geist-mono">2</span>
</div>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6 font-geist-mono">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Fresh Harvest Delivered Daily
                </div>
<h1 className="text-5xl lg:text-6xl text-zinc-900 leading-[1.1] mb-6 tracking-widest font-geist-mono font-semibold" style={{}}>
                    Eat fresh, <br/>
<span className="font-semibold text-zinc-400 tracking-widest font-geist-mono">live better.</span>
</h1>
<p className="text-lg text-zinc-500 mb-8 max-w-md font-light leading-relaxed font-geist-mono">
                    Direct from local organic farms to your table within 24 hours. Experience the true taste of nature without the supermarket compromise.
                </p>
<div className="flex items-center gap-4">
<button className="h-10 px-6 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 font-geist-mono">
                        Start Shopping
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-10 px-6 rounded-md bg-white border border-zinc-200 text-zinc-700 text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all font-geist-mono">
                        View Producers
                    </button>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 to-transparent rounded-[2rem] transform rotate-3 scale-95"></div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 flex items-center gap-4 max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:carrot" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7M8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"></path><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9"></path><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2"></path></g></svg>
</div>
<div className="">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wide font-geist-mono">Seasonal Pick</p>
<p className="text-sm font-medium text-zinc-900 font-geist-mono">Organic Carrots</p>
</div>
<div className="ml-auto">
<span className="text-sm font-semibold text-emerald-600 font-geist-mono">$1.20</span>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
<div className="flex gap-4 items-start">
<div className="p-2 rounded-lg bg-white border border-zinc-200 shadow-sm text-emerald-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sprout" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="font-medium text-zinc-900 mb-1 font-geist-mono">100% Organic</h3>
<p className="text-sm text-zinc-500 font-light font-geist-mono">Certified organic produce without synthetic pesticides.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 rounded-lg bg-white border border-zinc-200 shadow-sm text-emerald-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:truck" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
</div>
<div className="">
<h3 className="font-medium text-zinc-900 font-geist-mono mb-1">Next Day Delivery</h3>
<p className="text-sm font-light text-zinc-500 font-geist-mono">Order by 4PM and get it delivered to your door tomorrow.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 rounded-lg bg-white border border-zinc-200 shadow-sm text-emerald-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart-handshake" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="font-medium text-zinc-900 mb-1 font-geist-mono">Fair Trade</h3>
<p className="text-sm font-light text-zinc-500 font-geist-mono">We pay our local farmers above market rates.</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
<div>
<h2 className="text-2xl text-zinc-900 tracking-widest font-geist-mono font-semibold" style={{}}>Seasonal Harvest</h2>
<p className="text-sm text-zinc-500 mt-1 font-geist-mono">Hand-picked selection for this week.</p>
</div>

<div className="flex p-1 bg-zinc-100 rounded-lg w-fit">
<button className="px-4 py-1.5 text-xs font-medium text-zinc-900 bg-white rounded shadow-sm transition-all font-geist-mono">All</button>
<button className="hover:text-zinc-900 transition-all text-xs font-medium text-zinc-500 font-geist-mono pt-1.5 pr-4 pb-1.5 pl-4">Leafy</button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-all font-geist-mono">Roots</button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-all font-geist-mono">Fruits</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group relative">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white text-zinc-900 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-sm hover:bg-emerald-600 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 font-geist-mono">Fresh Spinach</h3>
<span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-geist-mono">Organic</span>
</div>
<p className="text-sm text-zinc-500 font-light mb-2 font-geist-mono">Leafy Greens</p>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-zinc-900 font-geist-mono">$3.50</span>
<span className="text-xs text-zinc-400 font-geist-mono">/ bunch</span>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white text-zinc-900 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-sm hover:bg-emerald-600 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 font-geist-mono">Red Tomatoes</h3>
</div>
<p className="text-sm text-zinc-500 font-light mb-2 font-geist-mono">Vine Ripened</p>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-zinc-900 font-geist-mono">$4.20</span>
<span className="text-xs text-zinc-400 font-geist-mono">/ kg</span>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-zinc-900/80 backdrop-blur-sm rounded text-[10px] font-medium text-white font-geist-mono">Sale</div>
<button className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white text-zinc-900 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-sm hover:bg-emerald-600 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="">
<p className="text-sm text-zinc-500 font-light mb-2 font-geist-mono">Ready to eat</p>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-red-600 font-geist-mono">$1.80</span>
<span className="text-sm font-light text-zinc-400 line-through font-geist-mono">$2.50</span>
<span className="text-xs text-zinc-400 font-geist-mono">/ each</span>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white text-zinc-900 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-sm hover:bg-emerald-600 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 font-geist-mono">Broccoli</h3>
<span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-geist-mono">Organic</span>
</div>
<p className="text-sm text-zinc-500 font-light mb-2 font-geist-mono">Cruciferous</p>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-zinc-900 font-geist-mono">$2.90</span>
<span className="text-xs text-zinc-400 font-geist-mono">/ head</span>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white text-zinc-900 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-sm hover:bg-emerald-600 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 font-geist-mono">Bell Peppers</h3>
</div>
<p className="text-sm text-zinc-500 font-light mb-2 font-geist-mono">Mixed Colors</p>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-zinc-900 font-geist-mono">$1.50</span>
<span className="text-xs text-zinc-400 font-geist-mono">/ each</span>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white text-zinc-900 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-sm hover:bg-emerald-600 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 font-geist-mono">Sweet Potato</h3>
</div>
<p className="text-sm text-zinc-500 font-light mb-2 font-geist-mono">Root Vegetables</p>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-zinc-900 font-geist-mono">$2.00</span>
<span className="text-xs text-zinc-400 font-geist-mono">/ kg</span>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white text-zinc-900 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-sm hover:bg-emerald-600 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 font-geist-mono">Eggplant</h3>
<span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-geist-mono">Organic</span>
</div>
<p className="text-sm text-zinc-500 font-light mb-2 font-geist-mono">Nightshade</p>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-zinc-900 font-geist-mono">$3.00</span>
<span className="text-xs text-zinc-400 font-geist-mono">/ each</span>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[4/5] bg-emerald-900/5 rounded-xl overflow-hidden mb-4 border border-zinc-100 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-emerald-800 iconify--lucide" data-icon="lucide:package-open" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"></path><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"></path><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z"></path></g></svg>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent"></div>
<button className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white text-zinc-900 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-sm hover:bg-emerald-600 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 font-geist-mono">Weekly Mix Box</h3>
</div>
<p className="text-sm text-zinc-500 font-light mb-2 font-geist-mono">5kg Assorted</p>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-zinc-900 font-geist-mono">$25.00</span>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="hover:border-zinc-300 hover:bg-zinc-50 transition-all text-sm font-medium text-zinc-700 font-geist-mono bg-white h-10 border-zinc-200 border rounded-md pr-8 pl-8 shadow-sm">
                    Load More Products
                </button>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900 text-white overflow-hidden relative">
<div className="opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-xl mx-auto px-6 text-center relative z-10">
<svg aria-hidden="true" className="iconify mx-auto mb-4 text-emerald-400 iconify--lucide" data-icon="lucide:mail" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<h2 className="text-3xl mb-3 tracking-widest font-geist-mono font-semibold" style={{}}>Greens in your inbox</h2>
<p className="text-zinc-400 font-light mb-8 font-geist-mono">Subscribe to receive updates on seasonal availability, new farmers, and organic living tips.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
<input className="placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm text-white bg-zinc-800 w-full h-10 border-zinc-700 border rounded pr-3 pl-3" placeholder="email@address.com" type="email"/>
<button className="hover:bg-emerald-500 transition-colors whitespace-nowrap text-sm font-medium text-white font-geist-mono bg-emerald-600 h-10 rounded pr-4 pl-4" type="button">
                    Subscribe
                </button>
</form>
<p className="text-xs text-zinc-600 mt-4 font-geist-mono">No spam. Unsubscribe anytime.</p>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:leaf" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
<span className="text-zinc-900 font-semibold tracking-tighter text-lg font-geist-mono">VERDURE</span>
</a>
<p className="text-sm text-zinc-500 font-light max-w-xs font-geist-mono">Connecting conscious consumers with local organic growers for a healthier, sustainable future.</p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-1 font-geist-mono">Shop</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Vegetables</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Fruits</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Bundles</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">New Arrivals</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-1 font-geist-mono">Company</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">About</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Farmers</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Sustainability</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-1 font-geist-mono">Social</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Instagram</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Twitter</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-geist-mono" href="#">Facebook</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400 font-geist-mono">© 2023 Verdure Market Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-zinc-400 hover:text-zinc-600 font-geist-mono" href="#">Privacy</a>
<a className="text-xs text-zinc-400 hover:text-zinc-600 font-geist-mono" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
