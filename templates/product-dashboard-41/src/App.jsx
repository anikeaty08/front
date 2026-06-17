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



        lucide.createIcons();
    
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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-8">
<div className="text-xl font-semibold tracking-tight">AURA</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-gray-900" href="#">Dashboard</a>
<a className="text-sm text-gray-600 hover:text-gray-900" href="#">Products</a>
<a className="text-sm text-gray-600 hover:text-gray-900" href="#">Analytics</a>
<a className="text-sm text-gray-600 hover:text-gray-900" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5 text-gray-600" data-lucide="search"></i>
</button>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5 text-gray-600" data-lucide="bell"></i>
</button>
<div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-medium">
                            A
                        </div>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">Products</h1>
<p className="text-gray-600">Manage your product inventory and listings</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-600">Total Products</span>
<i className="w-4 h-4 text-gray-400" data-lucide="package"></i>
</div>
<div className="text-3xl font-semibold tracking-tight text-gray-900 mb-1">2,847</div>
<div className="flex items-center gap-1 text-sm">
<span className="text-green-600 font-medium">+12.5%</span>
<span className="text-gray-600">from last month</span>
</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-600">In Stock</span>
<i className="w-4 h-4 text-gray-400" data-lucide="check-circle"></i>
</div>
<div className="text-3xl font-semibold tracking-tight text-gray-900 mb-1">2,154</div>
<div className="flex items-center gap-1 text-sm">
<span className="text-green-600 font-medium">+8.2%</span>
<span className="text-gray-600">from last month</span>
</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-600">Low Stock</span>
<i className="w-4 h-4 text-gray-400" data-lucide="alert-circle"></i>
</div>
<div className="text-3xl font-semibold tracking-tight text-gray-900 mb-1">342</div>
<div className="flex items-center gap-1 text-sm">
<span className="text-orange-600 font-medium">+5.4%</span>
<span className="text-gray-600">from last month</span>
</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-600">Out of Stock</span>
<i className="w-4 h-4 text-gray-400" data-lucide="x-circle"></i>
</div>
<div className="text-3xl font-semibold tracking-tight text-gray-900 mb-1">351</div>
<div className="flex items-center gap-1 text-sm">
<span className="text-red-600 font-medium">-2.3%</span>
<span className="text-gray-600">from last month</span>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-lg overflow-hidden">
<div className="bg-white px-6 py-4 border-b border-gray-200">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold text-gray-900">Product List</h2>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="filter"></i>
                                    Filter
                                </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i>
                                    Add Product
                                </button>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wide px-6 py-3">Product</th>
<th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wide px-6 py-3">Category</th>
<th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wide px-6 py-3">Price</th>
<th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wide px-6 py-3">Stock</th>
<th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wide px-6 py-3">Status</th>
<th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wide px-6 py-3">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200 bg-white">
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Product" className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&amp;h=80&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">Wireless Headphones</div>
<div className="text-sm text-gray-500">SKU: WH-2847</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-600">Electronics</td>
<td className="px-6 py-4 text-sm font-medium text-gray-900">$299.00</td>
<td className="px-6 py-4 text-sm text-gray-600">847 units</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">In Stock</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="pencil"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Product" className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&amp;h=80&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">Smart Watch</div>
<div className="text-sm text-gray-500">SKU: SW-1823</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-600">Electronics</td>
<td className="px-6 py-4 text-sm font-medium text-gray-900">$399.00</td>
<td className="px-6 py-4 text-sm text-gray-600">234 units</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">In Stock</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="pencil"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Product" className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=80&amp;h=80&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">Sunglasses</div>
<div className="text-sm text-gray-500">SKU: SG-9234</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-600">Accessories</td>
<td className="px-6 py-4 text-sm font-medium text-gray-900">$159.00</td>
<td className="px-6 py-4 text-sm text-gray-600">45 units</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Low Stock</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="pencil"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Product" className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=80&amp;h=80&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">Sneakers</div>
<div className="text-sm text-gray-500">SKU: SN-4521</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-600">Footwear</td>
<td className="px-6 py-4 text-sm font-medium text-gray-900">$129.00</td>
<td className="px-6 py-4 text-sm text-gray-600">0 units</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Out of Stock</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="pencil"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Product" className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=80&amp;h=80&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">Backpack</div>
<div className="text-sm text-gray-500">SKU: BP-7834</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-600">Accessories</td>
<td className="px-6 py-4 text-sm font-medium text-gray-900">$89.00</td>
<td className="px-6 py-4 text-sm text-gray-600">512 units</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">In Stock</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="pencil"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-white px-6 py-4 border-t border-gray-200">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">
                                Showing <span className="font-medium text-gray-900">1-5</span> of <span className="font-medium text-gray-900">2,847</span> products
                            </div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="">
                                    Previous
                                </button>
<button className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                                    1
                                </button>
<button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    2
                                </button>
<button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    3
                                </button>
<span className="px-3 py-2 text-sm text-gray-600">...</span>
<button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    570
                                </button>
<button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    Next
                                </button>
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
