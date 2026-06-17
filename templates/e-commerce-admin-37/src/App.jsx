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
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full shrink-0 z-20 relative shadow-[1px_0_2px_rgba(0,0,0,0.02)]">
<div className="p-6 flex items-center h-20 border-b border-gray-100">
<span className="text-xl font-semibold tracking-tighter text-gray-900">KOLI</span>
<span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-500 uppercase tracking-widest">Admin</span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
                Orders
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
                Products
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                Customers
            </a>
<div className="pt-4 pb-2">
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Content</p>
</div>

<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-purple-700 bg-purple-50 font-medium transition-colors" href="#">
<iconify-icon className="text-lg text-purple-600" icon="solar:gallery-wide-linear" strokeWidth="1.5"></iconify-icon>
                Inspiration Catalog
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:megaphone-linear" strokeWidth="1.5"></iconify-icon>
                Campaigns
            </a>
<div className="pt-4 pb-2">
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider">System</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                Analytics
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                Settings
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3 px-3 py-2">
<img alt="Admin" className="w-8 h-8 rounded-full bg-gray-200" src="https://i.pravatar.cc/150?u=admin"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Jane Doe</span>
<span className="text-xs text-gray-500">Admin</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full min-w-0 bg-white">

<header className="h-20 flex items-center justify-between px-8 border-b border-gray-200 bg-white shrink-0">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Inspiration &amp; Home Manager</h1>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm shadow-orange-500/20 transition-all flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                Create New Collection/Post
            </button>
</header>

<div className="flex-1 flex overflow-hidden">

<section className="w-[420px] bg-gray-50/50 border-r border-gray-200 p-8 flex flex-col items-center overflow-y-auto relative z-10 shrink-0 hidden lg:flex shadow-[inset_-1px_0_4px_rgba(0,0,0,0.02)]">
<div className="w-full flex justify-between items-center mb-6">
<h2 className="text-xs font-medium text-gray-500 uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Live App Preview
                    </h2>
<span className="text-xs text-gray-400 border border-gray-200 bg-white px-2 py-1 rounded">iOS Build 4.2</span>
</div>

<div className="w-[320px] h-[693px] bg-white rounded-[44px] shadow-2xl border-[8px] border-gray-900 relative overflow-hidden flex flex-col shrink-0 ring-1 ring-gray-200/50">

<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50 pt-2">
<div className="w-24 h-5 bg-gray-900 rounded-full"></div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar bg-gray-50 pt-10 pb-20 relative">

<div className="px-5 py-2 flex justify-between items-center bg-white sticky top-0 z-40 border-b border-gray-100">
<span className="text-lg font-semibold tracking-tighter">KOLI</span>
<div className="flex gap-3 text-gray-600">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
</div>
</div>

<div className="p-4">
<div className="w-full h-32 rounded-xl bg-gray-200 overflow-hidden relative shadow-sm">
<img alt="Winter Collection" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
<span className="text-white text-xs font-medium uppercase tracking-wider mb-1">New Arrivals</span>
<span className="text-white text-base font-semibold">Winter Collection '24</span>
</div>
</div>
</div>

<div className="px-4 pb-4">
<div className="flex gap-4 overflow-x-auto no-scrollbar">
<div className="flex flex-col items-center gap-1.5 shrink-0">
<div className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-700">
<iconify-icon className="text-2xl" icon="solar:sneaker-linear"></iconify-icon>
</div>
<span className="text-[10px] text-gray-600 font-medium">Sneakers</span>
</div>
<div className="flex flex-col items-center gap-1.5 shrink-0">
<div className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-700">
<iconify-icon className="text-2xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<span className="text-[10px] text-gray-600 font-medium">Tech</span>
</div>
<div className="flex flex-col items-center gap-1.5 shrink-0">
<div className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-700">
<iconify-icon className="text-2xl" icon="solar:bag-heart-linear"></iconify-icon>
</div>
<span className="text-[10px] text-gray-600 font-medium">Bags</span>
</div>
<div className="flex flex-col items-center gap-1.5 shrink-0">
<div className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-700">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<span className="text-[10px] text-gray-600 font-medium">Home</span>
</div>
</div>
</div>

<div className="px-4 pb-6 flex gap-3">
<div className="w-1/2 flex flex-col gap-3">
<div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
<img className="w-full h-40 object-cover rounded mb-2" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<span className="text-[11px] font-medium text-gray-900 leading-tight block">Minimalist Spring Lookbook</span>
<span className="text-[9px] text-gray-500 mt-1 block">12 items</span>
</div>
<div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
<img className="w-full h-28 object-cover rounded mb-2" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<span className="text-[11px] font-medium text-gray-900 leading-tight block">Desktop Setup</span>
</div>
</div>
<div className="w-1/2 flex flex-col gap-3">
<div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
<img className="w-full h-32 object-cover rounded mb-2" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<span className="text-[11px] font-medium text-gray-900 leading-tight block">Cozy Studio Vibe</span>
</div>
<div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
<img className="w-full h-36 object-cover rounded mb-2" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<span className="text-[11px] font-medium text-gray-900 leading-tight block">Streetwear Essentials</span>
<span className="text-[9px] text-gray-500 mt-1 block">8 items</span>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4 z-40">
<iconify-icon className="text-2xl text-purple-600" icon="solar:home-2-bold"></iconify-icon>
<iconify-icon className="text-2xl text-gray-400" icon="solar:layers-linear"></iconify-icon>
<div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center -mt-6 border-4 border-gray-50 shadow-md">
<iconify-icon className="text-white text-lg" icon="solar:scan-linear"></iconify-icon>
</div>
<iconify-icon className="text-2xl text-gray-400" icon="solar:cart-linear"></iconify-icon>
<iconify-icon className="text-2xl text-gray-400" icon="solar:user-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="flex-1 flex flex-col relative bg-white h-full overflow-hidden">

<div className="flex-1 overflow-y-auto p-8 space-y-12">

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-purple-600 text-lg" icon="solar:gallery-bold-duotone"></iconify-icon>
                                Hero Banners
                            </h3>
<button className="text-xs font-medium text-purple-600 hover:text-purple-700">Manage All</button>
</div>
<div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

<div className="group border border-gray-200 rounded-xl bg-white p-3 flex gap-4 items-center shadow-sm hover:border-purple-200 transition-colors">
<div className="w-32 h-20 rounded-lg overflow-hidden bg-gray-100 shrink-0 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-medium">Live</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-gray-900 truncate">Winter Collection '24</h4>
<p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Exp: Jan 31, 2024
                                    </p>
<div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-xs text-gray-600 hover:text-gray-900 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border border-gray-200">
<iconify-icon icon="solar:pen-linear"></iconify-icon> Edit
                                        </button>
<button className="text-xs text-gray-600 hover:text-gray-900 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border border-gray-200">
<iconify-icon icon="solar:link-linear"></iconify-icon> Link
                                        </button>
</div>
</div>
<div className="px-2">
<iconify-icon className="text-gray-400 cursor-grab hover:text-gray-600 text-xl" icon="solar:menu-dots-bold"></iconify-icon>
</div>
</div>

<div className="group border border-gray-200 rounded-xl bg-white p-3 flex gap-4 items-center shadow-sm hover:border-purple-200 transition-colors">
<div className="w-32 h-20 rounded-lg overflow-hidden bg-gray-100 shrink-0 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-1.5 left-1.5 bg-orange-500 text-white px-2 py-0.5 rounded text-[10px] font-medium">Scheduled</div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-gray-900 truncate">48H Flash Sale</h4>
<p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Starts: Nov 25, 00:00
                                    </p>
<div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-xs text-gray-600 hover:text-gray-900 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border border-gray-200">
<iconify-icon icon="solar:pen-linear"></iconify-icon> Edit
                                        </button>
<button className="text-xs text-gray-600 hover:text-gray-900 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border border-gray-200">
<iconify-icon icon="solar:link-linear"></iconify-icon> Link
                                        </button>
</div>
</div>
<div className="px-2">
<iconify-icon className="text-gray-400 cursor-grab hover:text-gray-600 text-xl" icon="solar:menu-dots-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center mb-4 gap-2">
<h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-purple-600 text-lg" icon="solar:star-fall-minimalistic-2-bold-duotone"></iconify-icon>
                                Trending Categories
                            </h3>
<span className="text-[11px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Drag to reorder</span>
</div>
<div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">

<div className="flex items-center gap-2.5 bg-white border border-gray-200 shadow-sm pl-2 pr-4 py-2 rounded-full cursor-grab hover:border-gray-300 transition-colors shrink-0">
<iconify-icon className="text-gray-400 text-lg" icon="solar:menu-dots-bold"></iconify-icon>
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
<iconify-icon className="text-sm" icon="solar:sneaker-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Sneakers</span>
</div>

<div className="flex items-center gap-2.5 bg-white border border-gray-200 shadow-sm pl-2 pr-4 py-2 rounded-full cursor-grab hover:border-gray-300 transition-colors shrink-0">
<iconify-icon className="text-gray-400 text-lg" icon="solar:menu-dots-bold"></iconify-icon>
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
<iconify-icon className="text-sm" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Tech</span>
</div>

<div className="flex items-center gap-2.5 bg-white border border-gray-200 shadow-sm pl-2 pr-4 py-2 rounded-full cursor-grab hover:border-gray-300 transition-colors shrink-0">
<iconify-icon className="text-gray-400 text-lg" icon="solar:menu-dots-bold"></iconify-icon>
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
<iconify-icon className="text-sm" icon="solar:bag-heart-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Handbags</span>
</div>

<div className="flex items-center gap-2.5 bg-white border border-gray-200 shadow-sm pl-2 pr-4 py-2 rounded-full cursor-grab hover:border-gray-300 transition-colors shrink-0">
<iconify-icon className="text-gray-400 text-lg" icon="solar:menu-dots-bold"></iconify-icon>
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
<iconify-icon className="text-sm" icon="solar:home-smile-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Home Decor</span>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-dashed border-gray-300 text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors shrink-0 bg-gray-50">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>

<div className="pb-10">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-purple-600 text-lg" icon="solar:widget-3-bold-duotone"></iconify-icon>
                                The Feed (Inspiration Posts)
                            </h3>
<div className="flex gap-2">
<button className="text-xs text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-50 flex items-center gap-1.5">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filter
                                </button>
</div>
</div>

<div className="columns-2 xl:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-white border-2 border-purple-100 rounded-xl overflow-hidden shadow-sm group relative">
<div className="absolute top-3 left-3 z-10 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow text-purple-600 border border-gray-100" title="Pinned to top">
<iconify-icon className="text-sm" icon="solar:pin-bold"></iconify-icon>
</div>
<div className="relative overflow-hidden bg-gray-100">
<img className="w-full h-auto min-h-[160px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-4 bg-white">
<h4 className="text-sm font-medium text-gray-900 leading-tight mb-1">Minimalist Spring Lookbook</h4>
<a className="text-[11px] text-gray-500 hover:text-purple-600 flex items-center gap-1 truncate mb-4" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon> shein.com/campaign/spring-mini...
                                    </a>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-gray-700">Active</span>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-600"></div>
</label>
</div>
<button className="text-gray-400 hover:text-gray-600">
<iconify-icon className="text-xl" icon="solar:menu-dots-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
<div className="absolute top-3 left-3 z-10 w-7 h-7 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-purple-600 cursor-pointer opacity-0 group-hover:opacity-100 transition-all" title="Pin post">
<iconify-icon className="text-sm" icon="solar:pin-linear"></iconify-icon>
</div>
<div className="relative overflow-hidden bg-gray-100">
<img className="w-full h-auto min-h-[120px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-4 bg-white">
<h4 className="text-sm font-medium text-gray-900 leading-tight mb-1">Minimal Desktop Setup</h4>
<a className="text-[11px] text-gray-500 hover:text-purple-600 flex items-center gap-1 truncate mb-4" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon> alibaba.com/product/desk-mat...
                                    </a>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-gray-700">Active</span>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-600"></div>
</label>
</div>
<button className="text-gray-400 hover:text-gray-600">
<iconify-icon className="text-xl" icon="solar:menu-dots-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="break-inside-avoid bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
<div className="absolute top-3 left-3 z-10 w-7 h-7 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-purple-600 cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon className="text-sm" icon="solar:pin-linear"></iconify-icon>
</div>
<div className="relative overflow-hidden bg-gray-200 opacity-60 grayscale-[50%]">
<img className="w-full h-auto min-h-[140px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-4 bg-gray-50">
<h4 className="text-sm font-medium text-gray-500 leading-tight mb-1">Cozy Studio Vibe</h4>
<a className="text-[11px] text-gray-400 hover:text-purple-600 flex items-center gap-1 truncate mb-4" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon> shein.com/home/decor-light...
                                    </a>
<div className="flex items-center justify-between pt-3 border-t border-gray-200">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-gray-500">Draft</span>

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-600"></div>
</label>
</div>
<button className="text-gray-400 hover:text-gray-600">
<iconify-icon className="text-xl" icon="solar:menu-dots-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
<div className="absolute top-3 left-3 z-10 w-7 h-7 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-purple-600 cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon className="text-sm" icon="solar:pin-linear"></iconify-icon>
</div>
<div className="relative overflow-hidden bg-gray-100">
<img className="w-full h-auto min-h-[180px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-4 bg-white">
<h4 className="text-sm font-medium text-gray-900 leading-tight mb-1">Streetwear Essentials</h4>
<a className="text-[11px] text-gray-500 hover:text-purple-600 flex items-center gap-1 truncate mb-4" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon> alibaba.com/collection/street...
                                    </a>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-gray-700">Active</span>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-600"></div>
</label>
</div>
<button className="text-gray-400 hover:text-gray-600">
<iconify-icon className="text-xl" icon="solar:menu-dots-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky bottom-0 inset-x-0 bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 px-8 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)] z-20">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
<span>Schedule Publish...</span>
</div>
<span className="text-xs text-gray-400 italic hidden xl:inline-block">Changes saved automatically</span>
</div>
<div className="flex items-center gap-3">
<button className="text-sm font-medium text-gray-600 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">Discard Draft</button>
<button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2.5 rounded-lg text-sm font-medium shadow-sm shadow-purple-600/20 transition-all flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:plain-2-linear"></iconify-icon>
                            Post to App
                        </button>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
