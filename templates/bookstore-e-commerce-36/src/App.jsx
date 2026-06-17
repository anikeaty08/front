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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="tracking-tighter font-medium text-lg" href="#">
                    B K S T R
                </a>

<div className="hidden md:flex items-center relative w-64">
<iconify-icon className="absolute left-3 text-gray-400" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full pl-9 pr-3 py-1.5 bg-gray-100/50 border border-transparent rounded-md text-sm focus:bg-white focus:border-gray-200 focus:outline-none transition-all placeholder:text-gray-400 font-light" placeholder="Search books, authors..." type="text"/>
</div>
</div>

<div className="flex items-center gap-5">
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors hidden sm:block" href="#">Storefront</a>
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors hidden sm:block" href="#admin">Admin</a>
<div className="w-px h-4 bg-gray-200 mx-1 hidden sm:block"></div>
<button className="relative flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1 -right-1.5 bg-black text-white text-[10px] font-medium h-4 w-4 flex items-center justify-center rounded-full" style={{lineHeight: '1'}}>2</span>
</button>
<button className="flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 py-10">

<div className="flex flex-col lg:flex-row gap-10">

<div className="flex-1">
<header className="mb-8">
<h1 className="text-3xl font-medium tracking-tight">Explore collection</h1>
<p className="text-sm font-light text-gray-500 mt-2">Discover our latest arrivals and bestsellers.</p>
</header>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-2 transition-all hover:border-gray-300 shadow-sm hover:shadow">
<div className="aspect-[3/4] w-full bg-gray-50 rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
<iconify-icon className="text-4xl text-gray-300" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-sm font-medium tracking-tight text-gray-900 line-clamp-1">The Pragmatic Programmer</h3>
<p className="text-xs font-light text-gray-500 mt-1">David Thomas</p>
<div className="mt-auto pt-4 flex items-center justify-between">
<span className="text-sm font-medium">$39.99</span>
<button className="flex items-center justify-center bg-white border border-gray-200 text-gray-900 rounded-lg h-8 w-8 hover:bg-black hover:text-white hover:border-black transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-2 transition-all hover:border-gray-300 shadow-sm hover:shadow">
<div className="aspect-[3/4] w-full bg-gray-50 rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
<iconify-icon className="text-4xl text-gray-300" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-sm font-medium tracking-tight text-gray-900 line-clamp-1">Design Data-Intensive Apps</h3>
<p className="text-xs font-light text-gray-500 mt-1">Martin Kleppmann</p>
<div className="mt-auto pt-4 flex items-center justify-between">
<span className="text-sm font-medium">$45.00</span>
<button className="flex items-center justify-center bg-white border border-gray-200 text-gray-900 rounded-lg h-8 w-8 hover:bg-black hover:text-white hover:border-black transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-2 transition-all hover:border-gray-300 shadow-sm hover:shadow">
<div className="aspect-[3/4] w-full bg-gray-50 rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
<iconify-icon className="text-4xl text-gray-300" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-sm font-medium tracking-tight text-gray-900 line-clamp-1">Clean Architecture</h3>
<p className="text-xs font-light text-gray-500 mt-1">Robert C. Martin</p>
<div className="mt-auto pt-4 flex items-center justify-between">
<span className="text-sm font-medium">$34.50</span>
<button className="flex items-center justify-center bg-white border border-gray-200 text-gray-900 rounded-lg h-8 w-8 hover:bg-black hover:text-white hover:border-black transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-96 flex-shrink-0">
<div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
<h2 className="text-lg font-medium tracking-tight mb-6">Order Summary</h2>

<div className="space-y-4 mb-6">
<div className="flex gap-4">
<div className="h-16 w-12 bg-gray-100 rounded border border-gray-200 flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-gray-400 text-xs" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-gray-900 line-clamp-1">The Pragmatic Programmer</h4>
<button className="text-gray-400 hover:text-red-500 transition-colors">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xs font-light text-gray-500">Qty: 1</span>
<span className="text-sm font-medium">$39.99</span>
</div>
</div>
</div>
<div className="flex gap-4">
<div className="h-16 w-12 bg-gray-100 rounded border border-gray-200 flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-gray-400 text-xs" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-gray-900 line-clamp-1">Clean Architecture</h4>
<button className="text-gray-400 hover:text-red-500 transition-colors">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xs font-light text-gray-500">Qty: 1</span>
<span className="text-sm font-medium">$34.50</span>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-100 pt-4 mb-6 space-y-2">
<div className="flex justify-between text-sm font-light text-gray-500">
<span>Subtotal</span>
<span>$74.49</span>
</div>
<div className="flex justify-between text-sm font-light text-gray-500">
<span>Taxes</span>
<span>$3.72</span>
</div>
<div className="flex justify-between text-base font-medium text-gray-900 pt-2 border-t border-gray-100 mt-2">
<span>Total</span>
<span>$78.21</span>
</div>
</div>

<form className="space-y-4">
<div>
<label className="block text-xs font-light text-gray-500 mb-1.5">Email address</label>
<input className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:border-gray-400 focus:ring-0 focus:outline-none transition-colors" readonly="" type="email" value="user@example.com"/>
</div>
<div>
<label className="block text-xs font-light text-gray-500 mb-1.5">Card details</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-gray-400" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:border-gray-400 focus:ring-0 focus:outline-none transition-colors font-light" placeholder="0000 0000 0000 0000" type="text"/>
</div>
</div>
<div className="flex items-center gap-2 pt-2">
<button className="w-full bg-black text-white rounded-lg py-2.5 text-sm font-medium hover:bg-gray-800 transition-all active:scale-[0.98] flex justify-center items-center gap-2" type="button">
<iconify-icon icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
                                Pay $78.21
                            </button>
</div>
</form>
</div>
</div>
</div>
<hr className="border-gray-200 my-16" id="admin"/>

<div>
<header className="mb-8 flex items-end justify-between">
<div>
<h2 className="text-2xl font-medium tracking-tight">Admin workspace</h2>
<p className="text-sm font-light text-gray-500 mt-2">Manage inventory, monitor orders, and handle customer details.</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-white border border-gray-200 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
                        Add Book
                    </button>
</div>
</header>

<div className="border-b border-gray-200 mb-6">
<nav className="flex gap-6">
<button className="pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">Inventory</button>
<button className="pb-3 text-sm font-light text-gray-500 hover:text-gray-900 transition-colors border-b-2 border-transparent">Orders</button>
<button className="pb-3 text-sm font-light text-gray-500 hover:text-gray-900 transition-colors border-b-2 border-transparent">Customers</button>
</nav>
</div>

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="px-4 py-3 text-xs font-medium text-gray-500 w-8">

<div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center bg-white cursor-pointer hover:border-gray-400 transition-colors"></div>
</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500">Book Title</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500">Author</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500">Price</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500">Stock</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-4 py-3">
<div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center bg-white cursor-pointer group-hover:border-gray-400 transition-colors"></div>
</td>
<td className="px-4 py-3 text-sm font-medium text-gray-900">The Pragmatic Programmer</td>
<td className="px-4 py-3 text-sm font-light text-gray-500">David Thomas</td>
<td className="px-4 py-3 text-sm font-light text-gray-600">$39.99</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">42 units</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon className="text-base" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon></button>
<button className="p-1 text-gray-400 hover:text-red-500 transition-colors"><iconify-icon className="text-base" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-4 py-3">
<div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center bg-white cursor-pointer group-hover:border-gray-400 transition-colors"></div>
</td>
<td className="px-4 py-3 text-sm font-medium text-gray-900">Design Data-Intensive Apps</td>
<td className="px-4 py-3 text-sm font-light text-gray-500">Martin Kleppmann</td>
<td className="px-4 py-3 text-sm font-light text-gray-600">$45.00</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">18 units</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon className="text-base" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon></button>
<button className="p-1 text-gray-400 hover:text-red-500 transition-colors"><iconify-icon className="text-base" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-4 py-3">
<div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center bg-white cursor-pointer group-hover:border-gray-400 transition-colors"></div>
</td>
<td className="px-4 py-3 text-sm font-medium text-gray-900">Clean Architecture</td>
<td className="px-4 py-3 text-sm font-light text-gray-500">Robert C. Martin</td>
<td className="px-4 py-3 text-sm font-light text-gray-600">$34.50</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700">Out of stock</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon className="text-base" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon></button>
<button className="p-1 text-gray-400 hover:text-red-500 transition-colors"><iconify-icon className="text-base" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-4 py-3 border-t border-gray-200 bg-gray-50/30 flex items-center justify-between">
<span className="text-xs font-light text-gray-500">Showing 1 to 3 of 120 books</span>
<div className="flex items-center gap-1">
<button className="p-1 border border-gray-200 bg-white rounded text-gray-400 hover:text-gray-900 transition-colors disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="p-1 border border-gray-200 bg-white rounded text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
