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



tailwind.config = {
theme: {
extend: {
colors: {
border: "hsl(var(--border))",
input: "hsl(var(--input))",
ring: "hsl(var(--ring))",
background: "hsl(var(--background))",
foreground: "hsl(var(--foreground))",
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // View Management
        function switchView(viewId) {
            // Hide all views
            const views = document.querySelectorAll('.view-section');
            views.forEach(view => {
                view.classList.add('hidden');
            });

            // Show selected view
            const selectedView = document.getElementById(`view-${viewId}`);
            if(selectedView) {
                selectedView.classList.remove('hidden');
            }

            // Scroll to top
            window.scrollTo(0, 0);

            // Re-render icons if needed (sometimes dynamically shown content needs it)
            lucide.createIcons();
        }

        // Cart Drawer Toggle
        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            const content = document.getElementById('cart-content');
            
            if (drawer.classList.contains('hidden')) {
                drawer.classList.remove('hidden');
                // Small delay to allow transition
                setTimeout(() => {
                    content.classList.remove('translate-x-full');
                }, 10);
            } else {
                content.classList.add('translate-x-full');
                setTimeout(() => {
                    drawer.classList.add('hidden');
                }, 300);
            }
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
      

<div className="min-h-screen flex flex-col" id="app">

<nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tight flex items-center gap-2" href="#" onclick="switchView('home')">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
<span className="text-xs font-bold">C</span>
</div>
                            COMMERCE
                        </a>
<div className="hidden md:flex items-center gap-6 text-sm text-gray-500 font-medium">
<a className="hover:text-black transition-colors" href="#" onclick="switchView('home')">Home</a>
<a className="hover:text-black transition-colors" href="#" onclick="switchView('shop')">Shop</a>
<a className="hover:text-black transition-colors" href="#">Stories</a>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-gray-900 transition-colors" data-lucide="search"></i>
<input className="h-9 w-64 rounded-full bg-gray-100 border-none pl-10 pr-4 text-sm focus:ring-1 focus:ring-black placeholder:text-gray-400 transition-all outline-none" placeholder="Search products..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" onclick="toggleCart()">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shopping-bag"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-black rounded-full border border-white"></span>
</button>
<button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors ml-2" onclick="switchView('admin')">
                                Admin View
                            </button>
<button className="md:hidden p-2 text-gray-500">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</div>
</nav>

<main className="flex-1 view-section" id="view-home">

<div className="relative pt-20 pb-24 sm:pt-32 sm:pb-40 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-black mr-2"></span>
                        New Collection Available
                    </div>
<h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-gray-900 mb-6">
                        Minimalist Essentials<br className="hidden sm:block"/> for Modern Living.
                    </h1>
<p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto mb-10 font-light">
                        Discover a curated selection of premium goods designed with precision and simplicity. Elevate your everyday.
                    </p>
<div className="flex justify-center gap-4">
<button className="h-11 px-8 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all shadow-sm flex items-center gap-2" onclick="switchView('shop')">
                            Shop Now <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-11 px-8 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 transition-all">
                            View Lookbook
                        </button>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
<div className="absolute top-[20%] left-[10%] w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
<div className="absolute top-[30%] right-[10%] w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
</div>
</div>

<div className="border-t border-gray-100 bg-gray-50/50 py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Featured Categories</h2>
<p className="mt-1 text-sm text-gray-500">Curated specifically for you.</p>
</div>
<a className="text-sm font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1" href="#" onclick="switchView('shop')">Browse all <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 cursor-pointer" onclick="switchView('shop')">
<img alt="Apparel" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium">Apparel</h3>
<p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">Sustainable cotton blends</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 cursor-pointer" onclick="switchView('shop')">
<img alt="Accessories" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium">Accessories</h3>
<p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">Everyday carry essentials</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 cursor-pointer" onclick="switchView('shop')">
<img alt="Lifestyle" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium">Lifestyle</h3>
<p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">Home and workspace</p>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="hidden flex-1 view-section" id="view-shop">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-4">Categories</h3>
<div className="space-y-3">
<label className="flex items-center group cursor-pointer">
<input checked="" className="peer appearance-none w-4 h-4 border border-gray-300 rounded checked:bg-black checked:border-black transition-colors" type="checkbox"/>
<span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 peer-checked:text-black peer-checked:font-medium">All Products</span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="peer appearance-none w-4 h-4 border border-gray-300 rounded checked:bg-black checked:border-black transition-colors" type="checkbox"/>
<span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 peer-checked:text-black">Electronics</span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="peer appearance-none w-4 h-4 border border-gray-300 rounded checked:bg-black checked:border-black transition-colors" type="checkbox"/>
<span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 peer-checked:text-black">Clothing</span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="peer appearance-none w-4 h-4 border border-gray-300 rounded checked:bg-black checked:border-black transition-colors" type="checkbox"/>
<span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 peer-checked:text-black">Home</span>
</label>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 mb-4">Price Range</h3>
<input className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" max="1000" min="0" type="range"/>
<div className="flex justify-between text-xs text-gray-500 mt-2">
<span>$0</span>
<span>$1000+</span>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex justify-between items-center mb-6">
<span className="text-sm text-gray-500">Showing 4 results</span>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-500">Sort by:</span>
<select className="text-sm border-none bg-transparent font-medium text-gray-900 focus:ring-0 cursor-pointer">
<option>Newest</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">

<div className="group cursor-pointer" onclick="switchView('product')">
<div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 relative">
<img alt="Headphones" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 right-3">
<button className="bg-white/90 p-1.5 rounded-full shadow-sm hover:bg-white text-gray-500 hover:text-red-500 transition-colors">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-gray-900">Premium ANC Headphones</h3>
<p className="mt-1 text-sm text-gray-500">Electronics</p>
</div>
<p className="text-sm font-medium text-gray-900">$299</p>
</div>
</div>

<div className="group cursor-pointer" onclick="switchView('product')">
<div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 relative">
<img alt="Camera" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3">
<span className="bg-black text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Sale</span>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-gray-900">Analog Film Camera</h3>
<p className="mt-1 text-sm text-gray-500">Photography</p>
</div>
<p className="text-sm font-medium text-gray-900">$1,200</p>
</div>
</div>

<div className="group cursor-pointer" onclick="switchView('product')">
<div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 relative">
<img alt="Watch" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-gray-900">Minimalist Watch</h3>
<p className="mt-1 text-sm text-gray-500">Accessories</p>
</div>
<p className="text-sm font-medium text-gray-900">$185</p>
</div>
</div>

<div className="group cursor-pointer" onclick="switchView('product')">
<div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 relative">
<img alt="Shoes" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-gray-900">Urban Sneakers</h3>
<p className="mt-1 text-sm text-gray-500">Footwear</p>
</div>
<p className="text-sm font-medium text-gray-900">$140</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="hidden flex-1 view-section" id="view-product">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<a className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-8 transition-colors" href="#" onclick="switchView('shop')">
<i className="w-4 h-4 mr-2" data-lucide="arrow-left"></i> Back to Shop
                </a>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-4">
<div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer opacity-100 ring-2 ring-black">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-4">
<span className="bg-black text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">In Stock</span>
<div className="flex items-center text-yellow-400 text-xs">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star-half"></i>
<span className="text-gray-500 ml-1 font-medium">(128 reviews)</span>
</div>
</div>
<h1 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">Premium ANC Headphones</h1>
<p className="text-2xl font-normal text-gray-900 mb-6">$299.00</p>
<p className="text-gray-500 leading-relaxed mb-8">
                            Experience high-fidelity audio with our premium noise-cancelling headphones. 
                            Designed for comfort during long listening sessions, featuring a 30-hour battery life, 
                            quick charging, and seamless Bluetooth connectivity.
                        </p>
<div className="space-y-6 border-t border-b border-gray-100 py-6 mb-8">

<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
<div className="flex gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-black ring-2 ring-offset-2 ring-transparent peer-checked:ring-black transition-all"></div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-gray-200 ring-2 ring-offset-2 ring-transparent peer-checked:ring-gray-400 transition-all"></div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-blue-900 ring-2 ring-offset-2 ring-transparent peer-checked:ring-blue-900 transition-all"></div>
</label>
</div>
</div>
</div>
<div className="flex gap-4">
<button className="flex-1 h-12 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-sm flex items-center justify-center gap-2" onclick="toggleCart()">
<i className="w-4 h-4" data-lucide="shopping-bag"></i> Add to Cart
                            </button>
<button className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-500">
<i className="w-5 h-5" data-lucide="heart"></i>
</button>
</div>
</div>
</div>
</div>
</main>

<main className="hidden flex-1 flex bg-gray-50 h-[calc(100vh-64px)] overflow-hidden" id="view-admin">

<aside className="w-64 bg-white border-r border-gray-200 flex-col hidden lg:flex">
<div className="p-6">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Main</h2>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Overview
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="package"></i> Products
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="shopping-cart"></i> Orders
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users"></i> Customers
                        </a>
</nav>
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-4">Settings</h2>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings"></i> Configuration
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors" href="#" onclick="switchView('home')">
<i className="w-4 h-4" data-lucide="log-out"></i> Exit Admin
                        </a>
</nav>
</div>
</aside>

<div className="flex-1 overflow-auto p-8">
<div className="flex justify-between items-center mb-8">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Dashboard</h1>
<p className="text-sm text-gray-500">Overview of your store's performance.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Export</button>
<button className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i> Add Product
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-sm font-medium text-gray-500">Total Revenue</p>
<h3 className="text-2xl font-medium text-gray-900 mt-1">$48,294</h3>
</div>
<span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +12%
                            </span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-sm font-medium text-gray-500">Total Orders</p>
<h3 className="text-2xl font-medium text-gray-900 mt-1">1,429</h3>
</div>
<span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +8%
                            </span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-sm font-medium text-gray-500">Active Users</p>
<h3 className="text-2xl font-medium text-gray-900 mt-1">8,203</h3>
</div>
<span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                                0%
                            </span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-sm font-medium text-gray-500">Low Stock</p>
<h3 className="text-2xl font-medium text-gray-900 mt-1">12</h3>
</div>
<span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                                Alert
                            </span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
<h3 className="text-sm font-medium text-gray-900">Recent Orders</h3>
<a className="text-xs font-medium text-gray-500 hover:text-black" href="#">View All</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-gray-500 uppercase bg-gray-50">
<tr>
<th className="px-6 py-3 font-medium">Order ID</th>
<th className="px-6 py-3 font-medium">Customer</th>
<th className="px-6 py-3 font-medium">Product</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Amount</th>
<th className="px-6 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">#ORD-001</td>
<td className="px-6 py-4">Alex Johnson</td>
<td className="px-6 py-4 text-gray-500">Premium ANC Headphones</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                            Delivered
                                        </span>
</td>
<td className="px-6 py-4 font-medium">$299.00</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">#ORD-002</td>
<td className="px-6 py-4">Sarah Smith</td>
<td className="px-6 py-4 text-gray-500">Analog Film Camera</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                                            Pending
                                        </span>
</td>
<td className="px-6 py-4 font-medium">$1,200.00</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">#ORD-003</td>
<td className="px-6 py-4">Michael Brown</td>
<td className="px-6 py-4 text-gray-500">Minimalist Watch</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                            Shipped
                                        </span>
</td>
<td className="px-6 py-4 font-medium">$185.00</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-[60] hidden" id="cart-drawer">
<div className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity" onclick="toggleCart()"></div>
<div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 translate-x-full" id="cart-content">
<div className="flex h-full flex-col">
<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
<h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
<button className="text-gray-400 hover:text-gray-600" onclick="toggleCart()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

<div className="flex gap-4">
<div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
<img alt="Product" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="flex flex-1 flex-col">
<div>
<div className="flex justify-between text-sm font-medium text-gray-900">
<h3>ANC Headphones</h3>
<p>$299.00</p>
</div>
<p className="mt-1 text-xs text-gray-500">Black</p>
</div>
<div className="flex flex-1 items-end justify-between text-sm">
<div className="flex items-center border border-gray-200 rounded">
<button className="px-2 py-0.5 text-gray-600 hover:bg-gray-100">-</button>
<span className="px-2 py-0.5 text-xs font-medium">1</span>
<button className="px-2 py-0.5 text-gray-600 hover:bg-gray-100">+</button>
</div>
<button className="font-medium text-red-500 hover:text-red-400 text-xs" type="button">Remove</button>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-100 px-6 py-6">
<div className="flex justify-between text-base font-medium text-gray-900 mb-4">
<p>Subtotal</p>
<p>$299.00</p>
</div>
<p className="mt-0.5 text-xs text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
<button className="w-full h-11 flex items-center justify-center rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 shadow-sm transition-colors">
                            Checkout
                        </button>
<div className="mt-4 flex justify-center text-center text-xs text-gray-500">
<p>
                                or <button className="font-medium text-black hover:text-gray-800" onclick="toggleCart()">Continue Shopping</button>
</p>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
