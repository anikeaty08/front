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



        // Toggle Cart Drawer
        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            const backdrop = document.getElementById('cart-backdrop');
            
            if (drawer.classList.contains('translate-x-full')) {
                drawer.classList.remove('translate-x-full');
                backdrop.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                drawer.classList.add('translate-x-full');
                backdrop.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        // Product Modal Logic
        function openProductModal() {
            const modal = document.getElementById('product-modal');
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.querySelector('div').classList.remove('scale-95');
            modal.querySelector('div').classList.add('scale-100');
        }

        function closeProductModal() {
            const modal = document.getElementById('product-modal');
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.querySelector('div').classList.remove('scale-100');
            modal.querySelector('div').classList.add('scale-95');
        }

        function addToCartAndClose() {
            closeProductModal();
            setTimeout(() => {
                toggleCart();
            }, 300);
        }

        // Storefront & Discovery Switching
        function openStorefront(storeName) {
            document.getElementById('discovery-view').classList.add('discovery-hidden');
            document.getElementById('storefront-view').classList.remove('hidden');
            document.getElementById('store-name').innerText = storeName || "The Burger Lab";
            window.scrollTo(0,0);
        }

        function showDiscovery() {
            document.getElementById('storefront-view').classList.add('hidden');
            document.getElementById('discovery-view').classList.remove('discovery-hidden');
            window.scrollTo(0,0);
        }

        // Simple Tab Highlight Logic (Visual only)
        function filterVendors(type) {
            const buttons = document.getElementById('category-nav').getElementsByTagName('button');
            for(let btn of buttons) {
                btn.classList.remove('bg-[#111827]', 'text-white');
                btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
            }
            // In a real app we would target the specific button, here we just reset visually for the demo
            // and assume the user clicked 'All' or another category.
            // Highlight the clicked button (event target would be used here usually)
            event.target.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
            event.target.classList.add('bg-[#111827]', 'text-white', 'border-transparent');
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
      

<nav className="fixed top-0 left-0 right-0 z-40 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="showDiscovery()">
<div className="w-8 h-8 rounded-lg bg-[#111827] text-white flex items-center justify-center">
<span className="iconify text-lg" data-icon="lucide:box"></span>
</div>
<span className="text-lg font-semibold tracking-tighter text-[#111827] group-hover:text-[#FF5A1F] transition-colors">Sarelo.</span>
</a>
<div className="hidden md:flex items-center gap-6">
<button className="text-sm font-medium text-[#111827]" onclick="showDiscovery()">Marketplace</button>
<a className="text-sm font-medium text-gray-500 hover:text-[#111827] transition-colors" href="#">Orders</a>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<span className="absolute left-3 top-2.5 text-gray-400"><span className="iconify" data-icon="lucide:search"></span></span>
<input className="pl-9 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-gray-200 border rounded-full text-xs w-48 transition-all focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/10" placeholder="Search..." type="text"/>
</div>
<button className="flex items-center justify-center w-9 h-9 rounded-full text-gray-600 hover:bg-gray-100 transition-colors relative" onclick="toggleCart()">
<span className="iconify text-lg" data-icon="lucide:shopping-bag"></span>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#FF5A1F] rounded-full border border-white"></span>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-20 pb-20 px-6">
<div className="max-w-7xl mx-auto">

<div className="animate-fade-in" id="discovery-view">

<div className="sticky top-16 z-30 bg-[#F9FAFB]/95 backdrop-blur-sm pt-4 pb-6 mb-2">
<div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1" id="category-nav">

<button className="whitespace-nowrap px-4 py-2 rounded-full bg-[#111827] text-white text-xs font-medium transition-transform active:scale-95 shadow-sm" onclick="filterVendors('all')">
                            All
                        </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-medium hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-all active:scale-95 shadow-sm" onclick="filterVendors('restaurant')">
                            Restaurants
                        </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-medium hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-all active:scale-95 shadow-sm" onclick="filterVendors('supermarket')">
                            Supermarkets
                        </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-medium hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-all active:scale-95 shadow-sm" onclick="filterVendors('electronics')">
                            Electronics
                        </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-medium hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-all active:scale-95 shadow-sm" onclick="filterVendors('pharmacy')">
                            Pharmacy
                        </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-medium hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-all active:scale-95 shadow-sm" onclick="filterVendors('bakery')">
                            Bakery
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col gap-4 cursor-pointer" onclick="openStorefront('Burger Lab')">
<div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
<img alt="Burger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
<span className="iconify text-yellow-500 text-xs" data-icon="lucide:star"></span>
<span className="text-xs font-semibold">4.8</span>
</div>
<div className="absolute bottom-3 left-3 flex gap-2">
<span className="px-2 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-medium text-gray-700">20-30 min</span>
</div>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold tracking-tight text-[#111827] group-hover:text-[#FF5A1F] transition-colors">The Burger Lab</h3>
<span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">Free Delivery</span>
</div>
<p className="text-sm text-gray-500 line-clamp-1 mb-3">Handcrafted gourmet burgers &amp; artisan fries</p>

<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-[6px] bg-gray-100 text-[10px] font-medium text-gray-500 border border-transparent hover:border-gray-200 transition-colors">Fast Food</span>
<span className="px-2 py-1 rounded-[6px] bg-gray-100 text-[10px] font-medium text-gray-500 border border-transparent hover:border-gray-200 transition-colors">American</span>
<span className="px-2 py-1 rounded-[6px] bg-gray-100 text-[10px] font-medium text-gray-500 border border-transparent hover:border-gray-200 transition-colors">Lunch</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-4 cursor-pointer" onclick="openStorefront('Fresh Market')">
<div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
<img alt="Grocery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
<span className="iconify text-yellow-500 text-xs" data-icon="lucide:star"></span>
<span className="text-xs font-semibold">4.9</span>
</div>
<div className="absolute bottom-3 left-3 flex gap-2">
<span className="px-2 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-medium text-gray-700">45 min</span>
</div>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold tracking-tight text-[#111827] group-hover:text-[#FF5A1F] transition-colors">Whole Fresh Market</h3>
<span className="text-xs text-gray-500 font-medium">$3.99 Delivery</span>
</div>
<p className="text-sm text-gray-500 line-clamp-1 mb-3">Organic produce, pantry staples &amp; flowers</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-[6px] bg-gray-100 text-[10px] font-medium text-gray-500 border border-transparent hover:border-gray-200 transition-colors">Groceries</span>
<span className="px-2 py-1 rounded-[6px] bg-gray-100 text-[10px] font-medium text-gray-500 border border-transparent hover:border-gray-200 transition-colors">Organic</span>
<span className="px-2 py-1 rounded-[6px] bg-gray-100 text-[10px] font-medium text-gray-500 border border-transparent hover:border-gray-200 transition-colors">Household</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-4 cursor-pointer" onclick="openStorefront('Tech Hub')">
<div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
<img alt="Tech" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
<span className="iconify text-yellow-500 text-xs" data-icon="lucide:star"></span>
<span className="text-xs font-semibold">4.5</span>
</div>
<div className="absolute bottom-3 left-3 flex gap-2">
<span className="px-2 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-medium text-gray-700">Same Day</span>
</div>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold tracking-tight text-[#111827] group-hover:text-[#FF5A1F] transition-colors">Tech Hub Central</h3>
<span className="text-xs text-gray-500 font-medium">$5.00 Delivery</span>
</div>
<p className="text-sm text-gray-500 line-clamp-1 mb-3">Latest gadgets, cables, and accessories</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-[6px] bg-gray-100 text-[10px] font-medium text-gray-500 border border-transparent hover:border-gray-200 transition-colors">Electronics</span>
<span className="px-2 py-1 rounded-[6px] bg-gray-100 text-[10px] font-medium text-gray-500 border border-transparent hover:border-gray-200 transition-colors">Gaming</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-4 cursor-pointer" onclick="openStorefront('Sushi Zen')">
<div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
<img alt="Sushi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
<span className="iconify text-yellow-500 text-xs" data-icon="lucide:star"></span>
<span className="text-xs font-semibold">4.9</span>
</div>
<div className="absolute bottom-3 left-3 flex gap-2">
<span className="px-2 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-medium text-gray-700">35 min</span>
</div>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold tracking-tight text-[#111827] group-hover:text-[#FF5A1F] transition-colors">Sushi Zen</h3>
<span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">Free Delivery</span>
</div>
<p className="text-sm text-gray-500 line-clamp-1 mb-3">Authentic Omakase and rolls</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-[6px] bg-gray-100 text-[10px] font-medium text-gray-500 border border-transparent hover:border-gray-200 transition-colors">Japanese</span>
<span className="px-2 py-1 rounded-[6px] bg-gray-100 text-[10px] font-medium text-gray-500 border border-transparent hover:border-gray-200 transition-colors">Seafood</span>
<span className="px-2 py-1 rounded-[6px] bg-gray-100 text-[10px] font-medium text-gray-500 border border-transparent hover:border-gray-200 transition-colors">Dinner</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden animate-fade-in" id="storefront-view">

<div className="mb-8">
<button className="mb-6 flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-[#111827] transition-colors" onclick="showDiscovery()">
<span className="iconify" data-icon="lucide:arrow-left"></span> Back to Discovery
                    </button>
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-20 h-20 rounded-[16px] bg-gray-100 overflow-hidden shrink-0 border border-gray-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<h1 className="text-3xl font-semibold tracking-tight text-[#111827] mb-2" id="store-name">The Burger Lab</h1>
<div className="flex items-center gap-4 text-sm text-gray-500">
<span className="flex items-center gap-1"><span className="iconify text-yellow-500" data-icon="lucide:star"></span> 4.8 (1.2k)</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span>$$ • Burgers • American</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="text-green-600 font-medium">Open until 11:00 PM</span>
</div>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
<span className="iconify" data-icon="lucide:share"></span>
</button>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
<span className="iconify" data-icon="lucide:heart"></span>
</button>
</div>
</div>
</div>

<div className="sticky top-16 z-30 bg-[#F9FAFB]/95 backdrop-blur-sm border-b border-gray-200 mb-8">
<div className="flex gap-8 overflow-x-auto no-scrollbar">
<button className="pb-3 text-sm font-medium text-[#FF5A1F] border-b-2 border-[#FF5A1F]">Popular</button>
<button className="pb-3 text-sm font-medium text-gray-500 hover:text-[#111827] transition-colors">Signature Burgers</button>
<button className="pb-3 text-sm font-medium text-gray-500 hover:text-[#111827] transition-colors">Sides</button>
<button className="pb-3 text-sm font-medium text-gray-500 hover:text-[#111827] transition-colors">Drinks</button>
<button className="pb-3 text-sm font-medium text-gray-500 hover:text-[#111827] transition-colors">Desserts</button>
</div>
</div>

<div className="space-y-8">
<div>
<h2 className="text-xl font-semibold tracking-tight mb-4">Popular Items</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-white p-4 rounded-[16px] border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex justify-between gap-4" onclick="openProductModal()">
<div className="flex flex-col justify-between">
<div>
<h3 className="font-medium text-[#111827]">Double Truffle Burger</h3>
<p className="text-xs text-gray-500 mt-1 line-clamp-2">Double beef patty, truffle mayo, caramelized onions, swiss cheese.</p>
</div>
<span className="text-sm font-medium text-[#111827] mt-3">$14.50</span>
</div>
<div className="w-24 h-24 rounded-[12px] bg-gray-100 overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-white p-4 rounded-[16px] border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex justify-between gap-4" onclick="openProductModal()">
<div className="flex flex-col justify-between">
<div>
<h3 className="font-medium text-[#111827]">Classic Cheeseburger</h3>
<p className="text-xs text-gray-500 mt-1 line-clamp-2">Angus beef, cheddar, lettuce, tomato, house sauce.</p>
</div>
<span className="text-sm font-medium text-[#111827] mt-3">$11.00</span>
</div>
<div className="w-24 h-24 rounded-[12px] bg-gray-100 overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-xl font-semibold tracking-tight mb-4">Sides</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-white p-4 rounded-[16px] border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex justify-between gap-4" onclick="openProductModal()">
<div className="flex flex-col justify-between">
<div>
<h3 className="font-medium text-[#111827]">Rustic Fries</h3>
<p className="text-xs text-gray-500 mt-1 line-clamp-2">Hand-cut potatoes with sea salt and rosemary.</p>
</div>
<span className="text-sm font-medium text-[#111827] mt-3">$5.00</span>
</div>
<div className="w-24 h-24 rounded-[12px] bg-gray-100 overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1630384060421-a4c0d5d8d94c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="product-modal">
<div className="bg-white w-full max-w-2xl rounded-[20px] shadow-2xl overflow-hidden m-4 transform scale-95 transition-transform duration-300 relative flex flex-col md:flex-row h-[80vh] md:h-auto">
<button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-colors" onclick="closeProductModal()">
<span className="iconify" data-icon="lucide:x"></span>
</button>
<div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-1/2 p-8 flex flex-col h-full overflow-y-auto">
<div className="flex-grow">
<h2 className="text-2xl font-semibold tracking-tight text-[#111827] mb-2">Double Truffle Burger</h2>
<p className="text-xl font-medium text-[#111827] mb-4">$14.50</p>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Our signature double beef patty burger, topped with premium truffle mayonnaise, caramelized onions aged in balsamic vinegar, and melted swiss cheese. Served on a toasted brioche bun.
                    </p>
<div className="mb-6">
<h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-3">Options</h4>
<label className="flex items-center justify-between p-3 border border-gray-200 rounded-[12px] mb-2 cursor-pointer hover:border-gray-300 transition-colors">
<span className="text-sm text-gray-700">Extra Cheese</span>
<div className="flex items-center gap-3">
<span className="text-sm text-gray-500">+$1.50</span>
<input className="w-4 h-4 accent-[#FF5A1F] rounded border-gray-300" type="checkbox"/>
</div>
</label>
<label className="flex items-center justify-between p-3 border border-gray-200 rounded-[12px] cursor-pointer hover:border-gray-300 transition-colors">
<span className="text-sm text-gray-700">Add Bacon</span>
<div className="flex items-center gap-3">
<span className="text-sm text-gray-500">+$2.00</span>
<input className="w-4 h-4 accent-[#FF5A1F] rounded border-gray-300" type="checkbox"/>
</div>
</label>
</div>
</div>
<div className="pt-4 border-t border-gray-100 flex gap-4 items-center">
<div className="flex items-center border border-gray-200 rounded-[12px] h-12 px-2">
<button className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-[#111827]"><span className="iconify" data-icon="lucide:minus"></span></button>
<span className="w-8 text-center text-sm font-medium">1</span>
<button className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-[#111827]"><span className="iconify" data-icon="lucide:plus"></span></button>
</div>
<button className="flex-1 bg-[#111827] hover:bg-black text-white h-12 rounded-[12px] text-sm font-medium flex items-center justify-center gap-2 transition-colors" onclick="addToCartAndClose()">
                        Add to Cart
                        <span className="w-1 h-1 rounded-full bg-white/40"></span>
<span>$14.50</span>
</button>
</div>
</div>
</div>
</div>


<div className="fixed inset-0 z-50 bg-[#111827]/20 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="cart-backdrop" onclick="toggleCart()"></div>

<div className="fixed inset-y-0 right-0 z-50 w-full max-w-[400px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col" id="cart-drawer">

<div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
<h2 className="text-lg font-semibold tracking-tight">Your Order</h2>
<button className="text-gray-400 hover:text-[#111827] transition-colors" onclick="toggleCart()">
<span className="iconify text-xl" data-icon="lucide:x"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="mb-2">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">The Burger Lab</h3>

<div className="flex gap-4 mb-6">
<div className="w-16 h-16 bg-gray-100 rounded-[10px] overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-[#111827]">Double Truffle Burger</h4>
<span className="text-sm font-medium text-[#111827]">$14.50</span>
</div>
<p className="text-xs text-gray-500 mb-3">Extra Cheese</p>
<div className="flex items-center gap-3">
<div className="flex items-center border border-gray-200 rounded-[8px] h-7 px-1">
<button className="w-6 h-full flex items-center justify-center text-gray-400 hover:text-[#111827]"><span className="iconify text-xs" data-icon="lucide:minus"></span></button>
<span className="w-6 text-center text-xs font-medium">1</span>
<button className="w-6 h-full flex items-center justify-center text-gray-400 hover:text-[#111827]"><span className="iconify text-xs" data-icon="lucide:plus"></span></button>
</div>
<button className="text-xs text-gray-400 hover:text-red-500 transition-colors">Remove</button>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-16 h-16 bg-gray-100 rounded-[10px] overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1630384060421-a4c0d5d8d94c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-[#111827]">Rustic Fries</h4>
<span className="text-sm font-medium text-[#111827]">$5.00</span>
</div>
<p className="text-xs text-gray-500 mb-3">Standard</p>
<div className="flex items-center gap-3">
<div className="flex items-center border border-gray-200 rounded-[8px] h-7 px-1">
<button className="w-6 h-full flex items-center justify-center text-gray-400 hover:text-[#111827]"><span className="iconify text-xs" data-icon="lucide:minus"></span></button>
<span className="w-6 text-center text-xs font-medium">1</span>
<button className="w-6 h-full flex items-center justify-center text-gray-400 hover:text-[#111827]"><span className="iconify text-xs" data-icon="lucide:plus"></span></button>
</div>
<button className="text-xs text-gray-400 hover:text-red-500 transition-colors">Remove</button>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 border-t border-gray-100 bg-gray-50/50">
<div className="space-y-2 mb-4">
<div className="flex justify-between text-sm text-gray-500">
<span>Subtotal</span>
<span>$19.50</span>
</div>
<div className="flex justify-between text-sm text-gray-500">
<span>Delivery Fee</span>
<span>$2.00</span>
</div>
<div className="flex justify-between text-base font-semibold text-[#111827] pt-2">
<span>Total</span>
<span>$21.50</span>
</div>
</div>
<button className="w-full bg-[#111827] hover:bg-black text-white py-3.5 rounded-[12px] text-sm font-medium transition-colors shadow-lg shadow-gray-200">
                Proceed to Checkout
            </button>
</div>
</div>

<footer className="bg-white border-t border-gray-200 py-12 px-6 mt-auto">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-[#111827] text-white flex items-center justify-center">
<span className="iconify text-xs" data-icon="lucide:box"></span>
</div>
<span className="text-sm font-semibold tracking-tighter text-[#111827]">Sarelo.</span>
</div>
<p className="text-xs text-gray-400">© 2024 Sarelo Inc.</p>
</div>
</footer>



    </>
  );
}
