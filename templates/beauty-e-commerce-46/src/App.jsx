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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<span className="tracking-tighter font-semibold text-xl">BB</span>
<span className="text-xs text-gray-500 font-medium hidden sm:block border-l border-gray-300 pl-2 ml-1">CATALOGUE</span>
</div>

<div className="flex-1 max-w-md mx-8 hidden md:block">
<div className="relative relative flex items-center">
<iconify-icon className="absolute left-3 text-gray-400" height="18" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<input className="w-full bg-gray-100/50 border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all" placeholder="Search products..." type="text"/>
</div>
</div>

<div className="flex items-center gap-5">
<button className="text-gray-600 hover:text-gray-900 transition-colors md:hidden">
<iconify-icon height="22" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="text-gray-600 hover:text-gray-900 transition-colors relative">
<iconify-icon height="22" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-gray-900 text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full min-w-[16px] text-center" style={{fontSize: '0.65rem'}}>3</span>
</button>
<button className="text-gray-600 hover:text-gray-900 transition-colors">
<iconify-icon height="22" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-64 flex-shrink-0">
<div className="sticky top-24 space-y-8">

<div>
<h3 className="text-sm font-semibold tracking-tight text-gray-900 mb-4 uppercase">Categories</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox" />
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-colors group-hover:border-gray-400"></div>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 pointer-events-none flex items-center justify-center" height="14" icon="solar:check-read-linear" style={{strokeWidth: '2', paddingTop: '1px', paddingLeft: '1px'}} width="14"></iconify-icon>
</input></div>
<span className="text-sm text-gray-600 peer-checked:text-gray-900 font-medium transition-colors">All Products</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-colors group-hover:border-gray-400"></div>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 pointer-events-none flex items-center justify-center" height="14" icon="solar:check-read-linear" style={{strokeWidth: '2', paddingTop: '1px', paddingLeft: '1px'}} width="14"></iconify-icon>
</div>
<span className="text-sm text-gray-600 peer-checked:text-gray-900 font-medium transition-colors">Skincare</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-colors group-hover:border-gray-400"></div>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 pointer-events-none flex items-center justify-center" height="14" icon="solar:check-read-linear" style={{strokeWidth: '2', paddingTop: '1px', paddingLeft: '1px'}} width="14"></iconify-icon>
</div>
<span className="text-sm text-gray-600 peer-checked:text-gray-900 font-medium transition-colors">Fragrance</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-colors group-hover:border-gray-400"></div>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 pointer-events-none flex items-center justify-center" height="14" icon="solar:check-read-linear" style={{strokeWidth: '2', paddingTop: '1px', paddingLeft: '1px'}} width="14"></iconify-icon>
</div>
<span className="text-sm text-gray-600 peer-checked:text-gray-900 font-medium transition-colors">Homeware</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-colors group-hover:border-gray-400"></div>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 pointer-events-none flex items-center justify-center" height="14" icon="solar:check-read-linear" style={{strokeWidth: '2', paddingTop: '1px', paddingLeft: '1px'}} width="14"></iconify-icon>
</div>
<span className="text-sm text-gray-600 peer-checked:text-gray-900 font-medium transition-colors">Fashion &amp; Bags</span>
</label>
</div>
</div>

<div className="pt-6 border-t border-gray-200">
<h3 className="text-sm font-semibold tracking-tight text-gray-900 mb-4 uppercase">Status</h3>
<div className="space-y-4">
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-gray-600 group-hover:text-gray-900 font-medium transition-colors">In Stock</span>
<div className="relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-gray-600 group-hover:text-gray-900 font-medium transition-colors">New Arrivals</span>
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
</div>
</label>
</div>
</div>
</div>
</aside>

<div className="flex-1">

<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Discover Collection</h1>
<p className="text-sm text-gray-500 mt-1">Showing 6 products</p>
</div>

<div className="relative inline-block text-left group">
<button className="inline-flex justify-center items-center gap-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition-colors" type="button">
                        Sort by: Featured
                        <iconify-icon height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>

<div className="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 border border-gray-100">
<div aria-orientation="vertical" className="py-1" role="menu">
<a className="block px-4 py-2 text-sm text-gray-900 bg-gray-50 font-medium" href="#" role="menuitem">Featured</a>
<a className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#" role="menuitem">Newest</a>
<a className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#" role="menuitem">Price: Low to High</a>
<a className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#" role="menuitem">Price: High to Low</a>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

<div className="group flex flex-col relative">
<div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/60 relative">
<img alt="Advanced Radiance Cream" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 left-3">
<span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded-md border border-gray-200">Bestseller</span>
</div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-900 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white border border-gray-200">
<iconify-icon height="20" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="mt-4 flex flex-col flex-1">
<p className="text-xs text-gray-500 mb-1 font-medium tracking-wide">SKINCARE</p>
<h3 className="text-base font-medium text-gray-900 tracking-tight">Advanced Radiance Cream</h3>
<p className="mt-1 text-sm font-semibold text-gray-900">R 450.00</p>
</div>
</div>

<div className="group flex flex-col relative">
<div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/60 relative">
<img alt="Velvet Rose Eau de Parfum" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-900 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white border border-gray-200">
<iconify-icon height="20" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="mt-4 flex flex-col flex-1">
<p className="text-xs text-gray-500 mb-1 font-medium tracking-wide">FRAGRANCE</p>
<h3 className="text-base font-medium text-gray-900 tracking-tight">Velvet Rose Eau de Parfum</h3>
<p className="mt-1 text-sm font-semibold text-gray-900">R 650.00</p>
</div>
</div>

<div className="group flex flex-col relative">
<div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/60 relative">
<img alt="Signature Tote Bag" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 left-3">
<span className="bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded-md">New</span>
</div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-900 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white border border-gray-200">
<iconify-icon height="20" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="mt-4 flex flex-col flex-1">
<p className="text-xs text-gray-500 mb-1 font-medium tracking-wide">FASHION</p>
<h3 className="text-base font-medium text-gray-900 tracking-tight">Signature Everyday Tote</h3>
<p className="mt-1 text-sm font-semibold text-gray-900">R 899.00</p>
</div>
</div>

<div className="group flex flex-col relative">
<div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/60 relative">
<img alt="Plush Cotton Towel Set" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-900 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white border border-gray-200">
<iconify-icon height="20" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="mt-4 flex flex-col flex-1">
<p className="text-xs text-gray-500 mb-1 font-medium tracking-wide">HOMEWARE</p>
<h3 className="text-base font-medium text-gray-900 tracking-tight">Plush Cotton Towel Set</h3>
<p className="mt-1 text-sm font-semibold text-gray-900">R 320.00</p>
</div>
</div>

<div className="group flex flex-col relative">
<div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/60 relative">
<img alt="Botanical Body Wash" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-900 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white border border-gray-200">
<iconify-icon height="20" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="mt-4 flex flex-col flex-1">
<p className="text-xs text-gray-500 mb-1 font-medium tracking-wide">SKINCARE</p>
<h3 className="text-base font-medium text-gray-900 tracking-tight">Botanical Body Wash</h3>
<p className="mt-1 text-sm font-semibold text-gray-900">R 150.00</p>
</div>
</div>

<div className="group flex flex-col relative">
<div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/60 relative">
<img alt="Linen Reed Diffuser" className="h-full w-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1602928321679-560bb453f190?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex items-center justify-center">
<span className="bg-white/90 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-900 shadow-sm border border-gray-200">Out of Stock</span>
</div>
</div>
<div className="mt-4 flex flex-col flex-1 opacity-60">
<p className="text-xs text-gray-500 mb-1 font-medium tracking-wide">HOMEWARE</p>
<h3 className="text-base font-medium text-gray-900 tracking-tight">Linen Reed Diffuser</h3>
<p className="mt-1 text-sm font-semibold text-gray-900">R 290.00</p>
</div>
</div>
</div>

<div className="mt-12 flex items-center justify-center gap-2 border-t border-gray-200 pt-8">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50">
<iconify-icon height="20" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 text-white font-medium text-sm">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium text-sm">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium text-sm">3</button>
<span className="px-2 text-gray-400">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
<iconify-icon height="20" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
</main>

<footer className="border-t border-gray-200 bg-white mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="tracking-tighter font-semibold text-lg text-gray-400">BB</span>
<span className="text-sm text-gray-500">© 2024 Botle Buhle. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Terms</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Privacy</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
