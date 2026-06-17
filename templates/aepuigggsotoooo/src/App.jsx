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



        // Simple vanilla JS to toggle views
        const catalogView = document.getElementById('catalog-view');
        const detailView = document.getElementById('detail-view');

        function showDetail() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            catalogView.classList.add('hidden');
            detailView.classList.remove('hidden');
        }

        function showCatalog() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            detailView.classList.add('hidden');
            catalogView.classList.remove('hidden');
        }
    
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
      

<nav className="sticky top-0 z-50 w-full border-b backdrop-blur-md border-gray-200 bg-white/80" style={{}}>
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2 cursor-pointer" onclick="showCatalog()">
<div className="flex h-6 w-6 items-center justify-center rounded bg-gray-900 text-white" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<span className="text-sm font-semibold tracking-tight font-geist-mono text-gray-900" style={{}}>INVENTORY</span>
</div>
<div className="hidden gap-8 md:flex">
<a className="transition-colors hover:text-gray-900 text-xs font-medium text-gray-500 font-geist-mono" href="#">Products</a>
<a className="text-xs font-medium text-gray-500 transition-colors font-geist-mono hover:text-gray-900" href="#" style={{}}>Analytics</a>
<a className="text-xs font-medium text-gray-500 transition-colors font-geist-mono hover:text-gray-900" href="#" style={{}}>Settings</a>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-500 hover:text-gray-900" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<div className="h-8 w-8 overflow-hidden rounded-full border border-gray-200 bg-gray-100" style={{}}>
<img alt="Avatar" className="h-full w-full object-cover" src="https://ui-avatars.com/api/?name=Admin+User&amp;background=random&amp;color=fff"/>
</div>
</div>
</div>
</nav>

<main className="mx-auto max-w-7xl px-6 py-12 fade-in" id="catalog-view">
<div className="flex flex-col sm:flex-row sm:items-end mb-10 gap-x-6 gap-y-6 justify-between">
<div className="">
<h1 className="text-2xl tracking-tight font-geist-mono font-semibold text-gray-900" style={{}}>Workspace Collection</h1>
<p className="mt-2 text-sm text-gray-500 max-w-md font-geist-mono" style={{}}>Manage your product inventory, view details, and handle request inquiries directly from the catalog.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-medium transition-colors font-geist-mono border-gray-200 bg-white text-gray-700 hover:bg-gray-50" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:filter" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 3H2l8 9.46V19l4 2v-8.54z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Filter
                </button>
<button className="flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium transition-colors font-geist-mono bg-gray-900 text-white hover:bg-gray-800" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Add Product
                </button>
</div>
</div>
<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

<div className="group relative flex flex-col">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border cursor-pointer border-gray-100 bg-gray-50" onclick="showDetail()" style={{}}>
<img alt="Keyboard" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 transition-colors group-hover:bg-black/5 bg-black/0"></div>
</div>
<div className="mt-4 flex flex-col flex-1">
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-sm font-medium cursor-pointer hover:underline underline-offset-4 font-geist-mono text-gray-900" onclick="showDetail()" style={{}}>Mechanical Keypad</h3>
<p className="mt-1 text-xs text-gray-500 font-geist-mono" style={{}}>Accessories</p>
</div>
<p className="text-sm font-medium font-geist-mono text-gray-900" style={{}}>$149.00</p>
</div>
<div className="mt-4 pt-4 border-t flex items-center justify-between border-gray-100" style={{}}>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[10px] font-medium ring-1 ring-inset font-geist-mono bg-blue-50 text-blue-700 ring-blue-600/20" style={{}}>In Stock</span>
<button className="flex items-center gap-1.5 text-xs font-medium transition-colors font-geist-mono text-gray-600 hover:text-gray-900" style={{}}>
                            Request Info
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border cursor-pointer border-gray-100 bg-gray-50" onclick="showDetail()" style={{}}>
<img alt="Chair" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 transition-colors group-hover:bg-black/5 bg-black/0"></div>
</div>
<div className="mt-4 flex flex-col flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium cursor-pointer hover:underline underline-offset-4 font-geist-mono text-gray-900" onclick="showDetail()" style={{}}>Ergo Task Chair</h3>
<p className="mt-1 text-xs text-gray-500 font-geist-mono" style={{}}>Furniture</p>
</div>
<p className="text-sm font-medium font-geist-mono text-gray-900" style={{}}>$599.00</p>
</div>
<div className="mt-4 pt-4 border-t flex items-center justify-between border-gray-100" style={{}}>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[10px] font-medium ring-1 ring-inset font-geist-mono bg-purple-50 text-purple-700 ring-purple-600/20" style={{}}>Low Stock</span>
<button className="flex items-center gap-1.5 text-xs font-medium transition-colors font-geist-mono text-gray-600 hover:text-gray-900" style={{}}>
                            Request Info
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border cursor-pointer border-gray-100 bg-gray-50" onclick="showDetail()" style={{}}>
<img alt="Headphones" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 transition-colors group-hover:bg-black/5 bg-black/0"></div>
</div>
<div className="mt-4 flex flex-col flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium cursor-pointer hover:underline underline-offset-4 font-geist-mono text-gray-900" onclick="showDetail()" style={{}}>Sonic X Headphones</h3>
<p className="mt-1 text-xs text-gray-500 font-geist-mono" style={{}}>Audio</p>
</div>
<p className="text-sm font-medium font-geist-mono text-gray-900" style={{}}>$349.00</p>
</div>
<div className="mt-4 pt-4 border-t flex items-center justify-between border-gray-100" style={{}}>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[10px] font-medium ring-1 ring-inset font-geist-mono bg-blue-50 text-blue-700 ring-blue-600/20" style={{}}>In Stock</span>
<button className="flex items-center gap-1.5 text-xs font-medium transition-colors font-geist-mono text-gray-600 hover:text-gray-900" style={{}}>
                            Request Info
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border cursor-pointer border-gray-100 bg-gray-50" onclick="showDetail()" style={{}}>
<img alt="Lamp" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 transition-colors group-hover:bg-black/5 bg-black/0"></div>
</div>
<div className="mt-4 flex flex-col flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium cursor-pointer hover:underline underline-offset-4 font-geist-mono text-gray-900" onclick="showDetail()" style={{}}>Angle Desk Lamp</h3>
<p className="mt-1 text-xs text-gray-500 font-geist-mono" style={{}}>Lighting</p>
</div>
<p className="text-sm font-medium font-geist-mono text-gray-900" style={{}}>$120.00</p>
</div>
<div className="mt-4 pt-4 border-t flex items-center justify-between border-gray-100" style={{}}>
<span className="inline-flex items-center rounded-full px-2 py-1 text-[10px] font-medium ring-1 ring-inset ring-gray-500/10 font-geist-mono bg-gray-100 text-gray-600" style={{}}>Pre-order</span>
<button className="flex items-center gap-1.5 text-xs font-medium transition-colors font-geist-mono text-gray-600 hover:text-gray-900" style={{}}>
                            Request Info
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</main>

<main className="hidden mx-auto max-w-7xl px-6 py-8 fade-in" id="detail-view">

<div className="mb-8 flex items-center justify-between">
<nav className="flex items-center text-xs text-gray-500" style={{}}>
<span className="cursor-pointer transition-colors font-geist-mono hover:text-gray-900" onclick="showCatalog()" style={{}}>Inventory</span>
<span className="mx-2 font-geist-mono text-gray-300" style={{}}>/</span>
<span className="cursor-pointer transition-colors font-geist-mono hover:text-gray-900" onclick="showCatalog()" style={{}}>Accessories</span>
<span className="mx-2 font-geist-mono text-gray-300" style={{}}>/</span>
<span className="font-medium font-geist-mono text-gray-900" style={{}}>Mechanical Keypad</span>
</nav>
<div className="flex items-center gap-3">
<button className="rounded-md border px-3 py-1.5 text-xs font-medium transition-colors font-geist-mono border-gray-200 bg-white text-gray-700 hover:bg-gray-50" onclick="showCatalog()" style={{}}>
                    Back
                </button>
<button className="rounded-md px-3 py-1.5 text-xs font-medium transition-colors font-geist-mono bg-gray-900 text-white hover:bg-gray-800" style={{}}>
                    Save Changes
                </button>
</div>
</div>
<div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

<div className="lg:col-span-7">
<div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50" style={{}}>
<img alt="Main Product" className="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 flex gap-2">
<button className="flex h-8 w-8 items-center justify-center rounded-md border shadow-sm backdrop-blur border-gray-200 bg-white/90 hover:bg-white text-gray-600" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:maximize" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="mt-4 grid grid-cols-4 gap-4">
<div className="aspect-square cursor-pointer overflow-hidden rounded-md border ring-2 ring-offset-2 border-gray-900 ring-gray-900" style={{}}>
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square cursor-pointer overflow-hidden rounded-md border opacity-70 hover:opacity-100 transition-opacity border-gray-200" style={{}}>
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-square cursor-pointer overflow-hidden rounded-md border opacity-70 hover:opacity-100 transition-opacity border-gray-200" style={{}}>
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex aspect-square cursor-pointer items-center justify-center rounded-md border border-dashed transition-colors border-gray-300 bg-gray-50 text-gray-400 hover:border-gray-400 hover:text-gray-600" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="flex flex-col gap-8">

<div>
<div className="flex items-center justify-between">
<h1 className="text-3xl tracking-tight font-geist-mono font-semibold text-gray-900" style={{}}>Mechanical Keypad</h1>
<div className="flex items-center gap-2">
<span className="rounded-full px-2.5 py-1 text-xs font-medium border font-geist-mono bg-blue-50 text-blue-700 border-blue-100" style={{}}>Active</span>
</div>
</div>
<p className="mt-2 text-xl font-medium font-geist-mono text-gray-900" style={{}}>$149.00 <span className="text-sm font-normal text-gray-500 font-geist-mono" style={{}}>/ unit</span></p>
</div>

<div className="space-y-6">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-500 font-geist-mono" style={{}}>Description</label>
<p className="text-sm leading-relaxed font-geist-mono text-gray-700" style={{}}>
                                A compact, programmable mechanical keypad designed for efficiency. Featuring hot-swappable switches, QMK/VIA support, and a machined aluminum case for a premium typing feel. Perfect for creative workflows or gaming setups.
                            </p>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-500 font-geist-mono" style={{}}>Category</label>
<div className="flex items-center gap-2 text-sm font-geist-mono text-gray-900" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide text-neutral-400" data-icon="lucide:tag" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
                                    Accessories
                                </div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-500 font-geist-mono" style={{}}>SKU</label>
<div className="flex items-center gap-2 text-sm font-mono font-geist-mono text-gray-900" style={{}}>
                                    MK-84-PRO-V2
                                </div>
</div>
</div>
</div>
<div className="h-px w-full bg-gray-200" style={{}}></div>

<div>
<h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 font-geist-mono" style={{}}>Product Specifications</h3>
<div className="rounded-lg border p-4 border-gray-200 bg-gray-50/50" style={{}}>
<ul className="space-y-4">
<li className="flex items-center justify-between text-sm">
<span className="text-gray-500 font-geist-mono" style={{}}>Material</span>
<span className="font-medium font-geist-mono text-gray-900" style={{}}>Anodized Aluminum</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-gray-500 font-geist-mono" style={{}}>Connectivity</span>
<span className="font-medium font-geist-mono text-gray-900" style={{}}>USB-C, Bluetooth 5.0</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-gray-500 font-geist-mono" style={{}}>Battery Life</span>
<span className="font-medium font-geist-mono text-gray-900" style={{}}>~8 weeks</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-gray-500 font-geist-mono" style={{}}>Dimensions</span>
<span className="font-medium font-geist-mono text-gray-900" style={{}}>120 x 80 x 20 mm</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-gray-500 font-geist-mono" style={{}}>Weight</span>
<span className="font-medium font-geist-mono text-gray-900" style={{}}>340g</span>
</li>
</ul>
</div>
</div>

<div className="rounded-lg p-6 shadow-lg bg-gray-900 text-white shadow-gray-200" style={{}}>
<h3 className="text-sm font-semibold font-geist-mono">Interested in bulk orders?</h3>
<p className="mt-1 text-xs font-geist-mono text-gray-400" style={{}}>Request detailed information or a custom quote.</p>
<form className="mt-4 space-y-3">
<div>
<input className="w-full rounded border-transparent px-3 py-2 text-xs placeholder-gray-500 focus:border-gray-600 focus:bg-gray-800 focus:ring-0 bg-gray-800 text-white" placeholder="Work Email" style={{}} type="email"/>
</div>
<button className="flex w-full items-center justify-center gap-2 rounded px-3 py-2 text-xs font-medium transition-colors font-geist-mono bg-white text-gray-900 hover:bg-gray-100" style={{}} type="button">
                                Request Information
                                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
