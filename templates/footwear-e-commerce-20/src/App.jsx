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



        // View Switcher logic (for demo)
        function switchView(view) {
            const store = document.getElementById('store-view');
            const admin = document.getElementById('admin-view');
            
            if (view === 'store') {
                store.classList.remove('hidden');
                admin.classList.add('hidden');
                document.body.classList.add('pb-20'); // Space for bottom nav
            } else {
                store.classList.add('hidden');
                admin.classList.remove('hidden');
                document.body.classList.remove('pb-20');
            }
        }

        // WhatsApp Logic
        function buyOnWhatsApp(name, category, price, discount) {
            // Calculate final price if not already done, though display price is usually final.
            // Assuming 'price' passed is the discounted final price for simplicity in this demo function.
            // If price is MRP, logic: const finalPrice = Math.round(price - (price * (discount/100)));
            
            const message = `Hello Shoe Box 👟%0AI want to order this shoe:%0AProduct: ${name}%0ACategory: ${category}%0APrice: ₹${price}%0ADiscount: ${discount > 0 ? discount + '%' : 'None'}`;
            const url = `https://wa.me/9624487284?text=${message}`;
            window.open(url, '_blank');
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
      

<div className="fixed top-20 right-4 z-50 flex flex-col gap-2 opacity-20 hover:opacity-100 transition-opacity">
<button className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs shadow-lg" onclick="switchView('store')">S</button>
<button className="w-8 h-8 rounded-full bg-white text-slate-900 border border-slate-200 flex items-center justify-center text-xs shadow-lg" onclick="switchView('admin')">A</button>
</div>

<a className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300" href="https://wa.me/9624487284" target="_blank">
<iconify-icon className="text-3xl" icon="solar:chat-round-dots-bold"></iconify-icon>
</a>

<div className="flex flex-col min-h-screen transition-opacity duration-300" id="store-view">

<div className="md:hidden sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200 px-4 h-14 flex items-center justify-between">
<span className="text-lg font-bold tracking-tighter text-slate-900 flex items-center gap-1">
<iconify-icon className="text-indigo-600" icon="solar:box-minimalistic-linear"></iconify-icon>
                Shoe Box
            </span>
<div className="flex items-center gap-3">
<button className="p-1"><iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon></button>
<button className="p-1"><iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon></button>
</div>
</div>

<nav className="hidden md:block sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-bold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<iconify-icon className="text-indigo-600 text-2xl" icon="solar:box-minimalistic-bold-duotone"></iconify-icon>
                        Shoe Box
                    </a>
<div className="flex gap-6 text-sm text-slate-500 font-medium">
<a className="text-slate-900" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">Categories</a>
<a className="hover:text-slate-900 transition-colors" href="#">New Arrivals</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center bg-slate-100 rounded-lg px-3 py-1.5">
<iconify-icon className="text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm ml-2 w-48 placeholder-slate-400 text-slate-700" placeholder="Search shoes..." type="text"/>
</div>
<button className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 transition">Login</button>
</div>
</div>
</nav>

<header className="bg-white border-b border-slate-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20 grid md:grid-cols-2 gap-8 items-center">
<div className="space-y-4 md:space-y-6 text-center md:text-left">
<span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] md:text-xs font-bold tracking-wide uppercase border border-indigo-100">Premium Collection</span>
<h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Step into <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Comfort.</span>
</h1>
<p className="text-sm md:text-lg text-slate-500 font-light max-w-md mx-auto md:mx-0 leading-relaxed">
                        Discover the finest selection of Sneakers, Formal shoes, and everyday comfort. Authentic Indian craftsmanship.
                    </p>
<div className="flex gap-3 justify-center md:justify-start pt-2">
<button className="px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition shadow-lg shadow-slate-200">Shop Now</button>
<button className="px-6 py-3 bg-white text-slate-900 border border-slate-200 text-sm font-medium rounded-xl hover:bg-slate-50 transition">View Categories</button>
</div>
</div>
<div className="relative group mt-6 md:mt-0">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-orange-50 rounded-full md:rounded-3xl transform scale-90 md:scale-100"></div>
<img alt="Shoe" className="relative z-10 w-full drop-shadow-2xl rounded-2xl transform transition hover:-translate-y-2 duration-500" src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row gap-8 md:gap-12">

<div className="md:hidden w-full overflow-x-auto no-scrollbar pb-2">
<div className="flex gap-3 min-w-max">
<button className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-medium shadow-md">All</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium">Sneakers</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium">Formal</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium">Sliders</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium">Crocs</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium">Sports</button>
</div>
</div>

<aside className="hidden md:block w-64 space-y-8 flex-shrink-0 sticky top-24 h-fit">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight flex items-center gap-2">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear"></iconify-icon> Categories
                    </h3>
<ul className="space-y-1 text-sm text-slate-500">
<li className="flex items-center justify-between p-2 rounded-lg bg-slate-100 text-slate-900 font-medium cursor-pointer">
<span>All Shoes</span>
<span className="text-xs bg-white px-2 py-0.5 rounded text-slate-400">42</span>
</li>
<li className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition"><span>Sneakers</span></li>
<li className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition"><span>Formal Shoes</span></li>
<li className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition"><span>Sliders</span></li>
<li className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition"><span>Crocs</span></li>
<li className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition"><span>Sports Shoes</span></li>
</ul>
</div>
<div className="h-px bg-slate-200 w-full"></div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Price Range</h3>
<div className="space-y-4 px-1">
<input className="w-full appearance-none bg-transparent" max="10000" min="0" type="range"/>
<div className="flex justify-between text-xs text-slate-500 font-medium">
<span>₹0</span>
<span>₹10,000+</span>
</div>
</div>
</div>
</aside>

<div className="flex-1">
<div className="hidden md:flex justify-between items-end mb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Featured Products</h2>
<div className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer hover:text-slate-900 bg-white px-3 py-1 border border-slate-200 rounded-lg shadow-sm">
<span>Sort by: Popular</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">

<div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-slate-50">
<span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded">20% OFF</span>
<img alt="Nike Red" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="font-semibold text-slate-900 text-base">Air Force Red</h3>
<iconify-icon className="text-slate-400 text-xl cursor-pointer hover:text-red-500 transition" icon="solar:heart-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mb-3">Sneakers</p>
<div className="mt-auto flex items-center justify-between">
<div>
<span className="block text-xs text-slate-400 line-through">₹4,999</span>
<span className="block text-lg font-bold text-slate-900">₹3,999</span>
</div>
<button className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1 transition shadow-md hover:shadow-green-200" onclick="buyOnWhatsApp('Air Force Red', 'Sneakers', 3999, 20)">
                                    Buy Now
                                </button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-slate-50">
<img alt="Formal" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1614252369475-531eba835eb1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="font-semibold text-slate-900 text-base">Classic Oxford</h3>
<iconify-icon className="text-slate-400 text-xl cursor-pointer hover:text-red-500 transition" icon="solar:heart-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mb-3">Formal Shoes</p>
<div className="mt-auto flex items-center justify-between">
<div>
<span className="block text-lg font-bold text-slate-900">₹2,499</span>
</div>
<button className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1 transition shadow-md hover:shadow-green-200" onclick="buyOnWhatsApp('Classic Oxford', 'Formal Shoes', 2499, 0)">
                                    Buy Now
                                </button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-slate-50">
<span className="absolute top-3 left-3 bg-indigo-500 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded">New</span>
<img alt="Sports" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="font-semibold text-slate-900 text-base">Zoom Runner X</h3>
<iconify-icon className="text-slate-400 text-xl cursor-pointer hover:text-red-500 transition" icon="solar:heart-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mb-3">Sports Shoes</p>
<div className="mt-auto flex items-center justify-between">
<div>
<span className="block text-lg font-bold text-slate-900">₹5,999</span>
</div>
<button className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1 transition shadow-md hover:shadow-green-200" onclick="buyOnWhatsApp('Zoom Runner X', 'Sports Shoes', 5999, 0)">
                                    Buy Now
                                </button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-slate-50">
<img alt="Slider" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="font-semibold text-slate-900 text-base">Comfort Sliders</h3>
<iconify-icon className="text-slate-400 text-xl cursor-pointer hover:text-red-500 transition" icon="solar:heart-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mb-3">Sliders</p>
<div className="mt-auto flex items-center justify-between">
<div>
<span className="block text-xs text-slate-400 line-through">₹999</span>
<span className="block text-lg font-bold text-slate-900">₹799</span>
</div>
<button className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1 transition shadow-md hover:shadow-green-200" onclick="buyOnWhatsApp('Comfort Sliders', 'Sliders', 799, 20)">
                                    Buy Now
                                </button>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 flex justify-around items-center py-3 z-50 pb-safe">
<button className="flex flex-col items-center gap-1 text-indigo-600">
<iconify-icon className="text-2xl" icon="solar:home-smile-bold"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-indigo-600">
<iconify-icon className="text-2xl" icon="solar:grid-view-linear"></iconify-icon>
<span className="text-[10px] font-medium">Categories</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-indigo-600" onclick="window.open('https://wa.me/9624487284', '_blank')">
<iconify-icon className="text-2xl" icon="solar:chat-round-dots-linear"></iconify-icon>
<span className="text-[10px] font-medium">WhatsApp</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-indigo-600">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>
</div>
<footer className="hidden md:block border-t border-slate-200 bg-white py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-500 mb-2">© 2023 Shoe Box India. All rights reserved.</p>
<div className="flex justify-center gap-4 text-slate-400 text-sm">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</footer>
</div>

<div className="hidden h-screen bg-slate-50 overflow-hidden flex" id="admin-view">

<aside className="w-64 bg-slate-900 flex flex-col border-r border-slate-800 flex-shrink-0">
<div className="h-16 flex items-center px-6 border-b border-slate-800 gap-2">
<iconify-icon className="text-indigo-500 text-xl" icon="solar:box-minimalistic-bold-duotone"></iconify-icon>
<span className="text-white text-lg font-bold tracking-tight">Shoe Box <span className="text-slate-500 text-xs font-normal ml-1">Admin</span></span>
</div>
<div className="p-4 space-y-1 flex-1 overflow-y-auto">
<p className="px-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-2">Management</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/10 rounded-lg" href="#">
<iconify-icon className="text-lg" icon="solar:widget-2-linear"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
                    Products
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-linear"></iconify-icon>
                    WhatsApp Orders
                    <span className="ml-auto bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                    Users
                </a>
<p className="px-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-6">System</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
                    Settings
                </a>
</div>
<div className="p-4 border-t border-slate-800">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-medium text-white">AD</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Super Admin</span>
<span className="text-xs text-slate-500">9624487284</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative">
<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20">
<h2 className="text-sm font-medium text-slate-500">Dashboard / Overview</h2>
<div className="flex items-center gap-4">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-500 transition">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</button>
</div>
</header>
<div className="p-6 md:p-8 max-w-6xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-slate-500">WhatsApp Clicks</span>
<span className="p-1 bg-green-50 text-green-600 rounded text-xs flex items-center gap-1">+12%</span>
</div>
<h3 className="text-3xl font-bold tracking-tight text-slate-900">1,240</h3>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-slate-500">Top Category</span>
</div>
<h3 className="text-3xl font-bold tracking-tight text-slate-900">Sneakers</h3>
<p className="text-xs text-slate-400 mt-1">45% of total interest</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-slate-500">Active Products</span>
</div>
<h3 className="text-3xl font-bold tracking-tight text-slate-900">86</h3>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h3 className="text-base font-bold text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-indigo-600 text-lg" icon="solar:add-circle-linear"></iconify-icon>
                            Add New Shoe
                        </h3>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Shoe Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="e.g. Nike Air Max" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Category</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500">
<option>Sneakers</option>
<option>Formal Shoes</option>
<option>Sliders</option>
<option>Crocs</option>
<option>Sports Shoes</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Price (INR)</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-400 text-sm">₹</span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-7 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" placeholder="2999" type="number"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Discount (%)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" placeholder="e.g. 10" type="number"/>
</div>
<div className="flex items-center justify-between pt-6 px-1">
<span className="text-sm font-medium text-slate-700">Calculated Price:</span>
<span className="text-lg font-bold text-slate-900">₹0</span>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Main Image</label>
<div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-slate-400 hover:border-indigo-500 hover:text-indigo-500 transition cursor-pointer bg-slate-50">
<iconify-icon className="text-3xl mb-2" icon="solar:upload-minimalistic-linear"></iconify-icon>
<span className="text-xs">Click to upload image</span>
</div>
</div>
<button className="w-full bg-slate-900 text-white font-bold text-sm py-3 rounded-xl hover:bg-slate-800 transition shadow-lg shadow-slate-200">
                                Save Product
                            </button>
</form>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h3 className="text-base font-bold text-slate-900 mb-4">Recent Users</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">JD</div>
<div>
<p className="text-sm font-medium text-slate-900">John Doe</p>
<p className="text-[10px] text-slate-400">john@example.com</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-900"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">AS</div>
<div>
<p className="text-sm font-medium text-slate-900">Amit Singh</p>
<p className="text-[10px] text-slate-400">amit@test.com</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-900"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</div>
</div>
<button className="w-full mt-6 border border-slate-200 text-slate-600 text-xs font-medium py-2 rounded-lg hover:bg-slate-50">View All Users</button>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
