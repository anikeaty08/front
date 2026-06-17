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
      

<div className="h-4 w-full confetti-pattern absolute top-0 left-0 z-0"></div>

<header className="bg-white shadow-sm sticky top-0 z-50 relative">
<div className="max-w-7xl mx-auto px-4 py-4 lg:px-8">
<div className="flex items-center justify-between gap-6">

<div className="flex-shrink-0 flex items-center gap-2">
<iconify-icon height="32" icon="logos:stripe" width="80"></iconify-icon>
</div>

<button className="hidden md:flex items-center gap-2 bg-[#70C05B] hover:bg-[#5da64b] text-white px-5 py-2.5 rounded-md transition-colors duration-200">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
<span className="font-medium text-base">Catalog</span>
</button>

<div className="flex-1 max-w-2xl relative">
<input className="w-full pl-4 pr-10 py-2.5 rounded-md border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-base placeholder:text-slate-400" placeholder="Search for products..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-6 text-slate-600">
<a className="flex flex-col items-center gap-1 hover:text-[#70C05B] group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:heart-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Favorites</span>
</a>
<a className="flex flex-col items-center gap-1 hover:text-[#70C05B] group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:box-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Orders</span>
</a>
<a className="flex flex-col items-center gap-1 hover:text-[#70C05B] group relative" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:cart-large-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Cart</span>
<span className="absolute -top-1 -right-1 bg-[#FF6633] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">1</span>
</a>

<div className="hidden lg:flex items-center gap-3 pl-4 border-l border-slate-200 cursor-pointer hover:opacity-80">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex items-center gap-2">
<span className="font-medium text-base">Alexey</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 py-10 lg:px-8 space-y-16">

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Promotions</h2>
<a className="flex items-center gap-1 text-base text-slate-500 hover:text-slate-800 font-medium group" href="#">
                    View all
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 relative flex flex-col h-full group">
<button className="absolute top-4 right-4 text-slate-300 hover:text-[#FF6633] z-10">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<div className="absolute top-4 left-4 bg-[#FF6633] text-white text-xs font-semibold px-2 py-1 rounded">-50%</div>
<div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden rounded-lg">
<img alt="Pancakes" className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-xl font-bold text-slate-900">44.50 $</div>
<div className="text-xs text-slate-400 line-through">50.50 $</div>
</div>
<iconify-icon className="opacity-70 grayscale hover:grayscale-0 transition-all" height="18" icon="logos:google" width="48"></iconify-icon>
</div>
<h3 className="text-base text-slate-700 leading-snug mb-2 font-medium">Frozen Pancakes with Meat, Premium Pack</h3>
<div className="flex items-center gap-1 text-[#FF6633] mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
</div>
<button className="mt-auto w-full py-2 border border-[#70C05B] text-[#70C05B] hover:bg-[#70C05B] hover:text-white rounded-md text-sm font-medium transition-colors">
                            Add to cart
                        </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 relative flex flex-col h-full group">
<button className="absolute top-4 right-4 text-slate-300 hover:text-[#FF6633] z-10">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<div className="absolute top-4 left-4 bg-[#FF6633] text-white text-xs font-semibold px-2 py-1 rounded">-25%</div>
<div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden rounded-lg">
<img alt="Milk" className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-xl font-bold text-slate-900">44.50 $</div>
<div className="text-xs text-slate-400 line-through">50.50 $</div>
</div>
<iconify-icon className="opacity-70 grayscale hover:grayscale-0 transition-all" height="18" icon="logos:openai" width="48"></iconify-icon>
</div>
<h3 className="text-base text-slate-700 leading-snug mb-2 font-medium">Whole Milk 3.5%, Pasteurized, 1L</h3>
<div className="flex items-center gap-1 text-[#FF6633] mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
</div>
<button className="mt-auto w-full py-2 border border-[#70C05B] text-[#70C05B] hover:bg-[#70C05B] hover:text-white rounded-md text-sm font-medium transition-colors">
                            Add to cart
                        </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 relative flex flex-col h-full group">
<button className="absolute top-4 right-4 text-slate-300 hover:text-[#FF6633] z-10">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<div className="absolute top-4 left-4 bg-[#FF6633] text-white text-xs font-semibold px-2 py-1 rounded">-15%</div>
<div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden rounded-lg">
<img alt="Sausage" className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-xl font-bold text-[#FF6633]">44.50 $</div>
<div className="text-xs text-slate-400 line-through">50.50 $</div>
</div>
<iconify-icon className="opacity-70 grayscale hover:grayscale-0 transition-all" height="18" icon="logos:microsoft" width="48"></iconify-icon>
</div>
<h3 className="text-base text-slate-700 leading-snug mb-2 font-medium">Smoked Salami "Tuscan", Premium Cut</h3>
<div className="flex items-center gap-1 text-[#FF6633] mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<button className="mt-auto w-full py-2 bg-[#FF6633] text-white border border-[#FF6633] hover:bg-[#e05a2b] rounded-md text-sm font-medium transition-colors">
                            In Cart
                        </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 relative flex flex-col h-full group">
<button className="absolute top-4 right-4 text-slate-300 hover:text-[#FF6633] z-10">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<div className="absolute top-4 left-4 bg-[#FF6633] text-white text-xs font-semibold px-2 py-1 rounded">-10%</div>
<div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden rounded-lg">
<img alt="Cheese" className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-xl font-bold text-slate-900">44.50 $</div>
<div className="text-xs text-slate-400 line-through">50.50 $</div>
</div>
<iconify-icon className="opacity-70 grayscale hover:grayscale-0 transition-all" height="18" icon="logos:anthropic" width="48"></iconify-icon>
</div>
<h3 className="text-base text-slate-700 leading-snug mb-2 font-medium">Sausages with Cheese, Natural Casing</h3>
<div className="flex items-center gap-1 text-[#FF6633] mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
</div>
<button className="mt-auto w-full py-2 border border-[#70C05B] text-[#70C05B] hover:bg-[#70C05B] hover:text-white rounded-md text-sm font-medium transition-colors">
                            Add to cart
                        </button>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">New Arrivals</h2>
<a className="flex items-center gap-1 text-base text-slate-500 hover:text-slate-800 font-medium group" href="#">
                    View all
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 relative flex flex-col h-full group">
<button className="absolute top-4 right-4 text-slate-300 hover:text-[#FF6633] z-10">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden rounded-lg">
<img alt="Salami" className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-xl font-bold text-slate-900">599.99 $</div>
</div>
<iconify-icon className="opacity-70 grayscale hover:grayscale-0 transition-all" height="18" icon="logos:vercel" width="48"></iconify-icon>
</div>
<h3 className="text-base text-slate-700 leading-snug mb-2 font-medium">Dry Cured Sausage "Venice" Style</h3>
<div className="flex items-center gap-1 text-[#FF6633] mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
</div>
<button className="mt-auto w-full py-2 border border-[#70C05B] text-[#70C05B] hover:bg-[#70C05B] hover:text-white rounded-md text-sm font-medium transition-colors">
                            Add to cart
                        </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 relative flex flex-col h-full group">
<button className="absolute top-4 right-4 text-slate-300 hover:text-[#FF6633] z-10">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden rounded-lg">
<img alt="Ham" className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-xl font-bold text-slate-900">44.50 $</div>
</div>
<iconify-icon className="opacity-70 grayscale hover:grayscale-0 transition-all" height="18" icon="logos:linear" width="48"></iconify-icon>
</div>
<h3 className="text-base text-slate-700 leading-snug mb-2 font-medium">Sliced Prosciutto, 200g Pack</h3>
<div className="flex items-center gap-1 text-[#FF6633] mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
</div>
<button className="mt-auto w-full py-2 bg-[#FF6633] text-white border border-[#FF6633] hover:bg-[#e05a2b] rounded-md text-sm font-medium transition-colors">
                            In Cart
                        </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 relative flex flex-col h-full group">
<button className="absolute top-4 right-4 text-slate-300 hover:text-[#FF6633] z-10">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden rounded-lg">
<img alt="Cheese" className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-xl font-bold text-slate-900">159.99 $</div>
</div>
<iconify-icon className="opacity-70 grayscale hover:grayscale-0 transition-all" height="18" icon="logos:notion" width="48"></iconify-icon>
</div>
<h3 className="text-base text-slate-700 leading-snug mb-2 font-medium">Aged Gouda Cheese Block</h3>
<div className="flex items-center gap-1 text-[#FF6633] mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
</div>
<button className="mt-auto w-full py-2 border border-[#70C05B] text-[#70C05B] hover:bg-[#70C05B] hover:text-white rounded-md text-sm font-medium transition-colors">
                            Add to cart
                        </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 relative flex flex-col h-full group">
<button className="absolute top-4 right-4 text-slate-300 hover:text-[#FF6633] z-10">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden rounded-lg">
<img alt="Yogurt" className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-xl font-bold text-slate-900">49.39 $</div>
</div>
<iconify-icon className="opacity-70 grayscale hover:grayscale-0 transition-all" height="18" icon="logos:cloudflare" width="48"></iconify-icon>
</div>
<h3 className="text-base text-slate-700 leading-snug mb-2 font-medium">Greek Yogurt, Plain, High Protein</h3>
<div className="flex items-center gap-1 text-[#FF6633] mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" width="14"></iconify-icon>
</div>
<button className="mt-auto w-full py-2 border border-[#70C05B] text-[#70C05B] hover:bg-[#70C05B] hover:text-white rounded-md text-sm font-medium transition-colors">
                            Add to cart
                        </button>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative bg-[#FCD5B5] rounded-2xl p-8 overflow-hidden h-64 flex items-center group cursor-pointer hover:shadow-lg transition-all">
<div className="z-10 max-w-xs">
<h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">Apply for the Stripe Loyalty Card</h3>
<p className="text-slate-700 text-base mb-0">Get 5% bonuses on every purchase online and in-store</p>
</div>
<div className="absolute right-0 bottom-0 h-full w-1/2">
<img alt="Card" className="h-full w-full object-cover opacity-90 mask-image-gradient" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black)'}}/>
</div>
</div>

<div className="relative bg-[#E5FFDE] rounded-2xl p-8 overflow-hidden h-64 flex items-center group cursor-pointer hover:shadow-lg transition-all">
<div className="z-10 max-w-xs">
<h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">Buy Featured Products Today</h3>
<p className="text-slate-700 text-base mb-0">And receive double points on your loyalty account</p>
</div>
<div className="absolute right-0 bottom-0 h-full w-1/2 flex items-center justify-center p-4">
<iconify-icon className="text-[#70C05B] opacity-40 rotate-12" icon="solar:cart-large-bold" width="160"></iconify-icon>
</div>
</div>
</section>

<section>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Our Store Locations</h2>
<div className="flex gap-2 mb-6">
<button className="px-4 py-2 bg-[#70C05B] text-white rounded-md text-sm font-medium">New York</button>
<button className="px-4 py-2 bg-slate-200 text-slate-600 hover:bg-slate-300 rounded-md text-sm font-medium transition-colors">London</button>
<button className="px-4 py-2 bg-slate-200 text-slate-600 hover:bg-slate-300 rounded-md text-sm font-medium transition-colors">Tokyo</button>
<button className="px-4 py-2 bg-slate-200 text-slate-600 hover:bg-slate-300 rounded-md text-sm font-medium transition-colors">Berlin</button>
</div>
<div className="w-full h-80 bg-slate-200 rounded-xl overflow-hidden relative border border-slate-300">
<iframe frameborder="0" height="100%" marginheight="0" marginwidth="0" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0084,40.7090,-73.9964,40.7130&amp;layer=mapnik" style={{filter: 'grayscale(0.5) contrast(1.1)'}} width="100%"></iframe>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<iconify-icon className="text-[#FF6633] drop-shadow-lg" icon="solar:map-point-bold" width="48"></iconify-icon>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Latest Articles</h2>
<a className="flex items-center gap-1 text-base text-slate-500 hover:text-slate-800 font-medium group" href="#">
                    All articles
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full group cursor-pointer hover:shadow-md transition-all">
<div className="h-48 overflow-hidden">
<img alt="Masks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-5 flex flex-col flex-1">
<span className="text-xs text-slate-400 mb-2">05.03.2024</span>
<h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">Hygiene protocols in our stores updated</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">Detailed information regarding the use of masks and gloves within the facility. We prioritize your safety above all else.</p>
<button className="mt-auto self-start px-4 py-2 bg-[#E5FFDE] text-[#70C05B] text-xs font-semibold rounded hover:bg-[#d0f5c6] transition-colors">Read More</button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full group cursor-pointer hover:shadow-md transition-all">
<div className="h-48 overflow-hidden">
<img alt="Spring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-5 flex flex-col flex-1">
<span className="text-xs text-slate-400 mb-2">08.03.2024</span>
<h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">Spring mood for everyone this season</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">March 8th is not just International Women's Day, it's a celebration of spring. Check out our floral arrangements.</p>
<button className="mt-auto self-start px-4 py-2 bg-[#70C05B] text-white text-xs font-semibold rounded hover:bg-[#5da64b] transition-colors">Read More</button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full group cursor-pointer hover:shadow-md transition-all">
<div className="h-48 overflow-hidden">
<img alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-5 flex flex-col flex-1">
<span className="text-xs text-slate-400 mb-2">22.02.2024</span>
<h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">Healthy eating or Fast Food? Your choice.</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">Vote for your favorite category and get 10% cashback on all items in that category next month.</p>
<button className="mt-auto self-start px-4 py-2 bg-[#E5FFDE] text-[#70C05B] text-xs font-semibold rounded hover:bg-[#d0f5c6] transition-colors">Read More</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#F9F4E2] pt-12 pb-8 relative border-t border-[#F0EAD6]">
<div className="h-4 w-full confetti-pattern absolute top-0 left-0 z-0 opacity-50"></div>
<div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="opacity-80" height="32" icon="logos:stripe" width="80"></iconify-icon>
</div>
<div className="flex gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#FF6633]" href="#">About Company</a>
<a className="hover:text-[#FF6633]" href="#">Contacts</a>
<a className="hover:text-[#FF6633]" href="#">Careers</a>
<a className="hover:text-[#FF6633]" href="#">Articles</a>
<a className="hover:text-[#FF6633]" href="#">Privacy Policy</a>
</div>
<div className="flex items-center gap-4">
<a className="text-[#FF6633] hover:scale-110 transition-transform" href="#"><iconify-icon icon="solar:camera-linear" width="24"></iconify-icon></a>
<a className="text-[#2aabee] hover:scale-110 transition-transform" href="#"><iconify-icon icon="logos:telegram" width="20"></iconify-icon></a>
<a className="text-[#1877f2] hover:scale-110 transition-transform" href="#"><iconify-icon icon="logos:facebook" width="20"></iconify-icon></a>
</div>
<div className="flex items-center gap-2 text-slate-800 font-medium">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span>8 800 777 33 33</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-200 flex justify-end">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span>Design by</span>
<iconify-icon className="opacity-50 grayscale" height="16" icon="logos:zasov" width="60"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
