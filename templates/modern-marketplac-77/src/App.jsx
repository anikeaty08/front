import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function nav(viewId) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            // Show requested view
            const target = document.getElementById('view-' + viewId);
            if (target) {
                target.classList.remove('hidden');
                window.scrollTo(0,0);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky bg-white z-50 border-slate-200 border-b top-0">

<div className="border-b border-slate-100 hidden md:block bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-9 text-xs font-medium text-slate-500">
<div className="flex gap-4">

<button className="hover:text-teal-700" onclick="nav('home')">Home</button>
<button className="hover:text-teal-700" onclick="nav('category')">Category</button>
<button className="hover:text-teal-700" onclick="nav('product')">Product</button>
<button className="hover:text-teal-700" onclick="nav('dashboard')">Dashboard</button>
<button className="hover:text-teal-700" onclick="nav('create')">Create</button>
<button className="hover:text-teal-700" onclick="nav('chat')">Messages</button>
<button className="hover:text-teal-700" onclick="nav('auth')">Login</button>
</div>
<div className="flex items-center gap-4">
<span className="hover:text-slate-800 cursor-pointer">Help</span>
<span className="hover:text-slate-800 cursor-pointer">EN/EUR</span>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">

<a className="sm:text-2xl flex items-center gap-1 group text-xl font-bold text-slate-900 tracking-tight" href="/#" onclick="nav('home')">
<span className="text-teal-700">Market</span>place
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 group-hover:scale-125 transition-transform"></div>
</a>

<div className="flex-1 max-w-2xl relative hidden md:block">
<div className="flex">
<button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-r-0 border-slate-200 rounded-l-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors">
                        All <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="relative flex-1">
<iconify-icon className="absolute left-3 top-3 text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600/10 focus:border-teal-600 transition-all placeholder:text-slate-400 rounded-r-lg" placeholder="Search for items..." type="text"/>
</div>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-4">
<button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-sm" onclick="nav('create')">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                    Sell
                </button>
<button className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all relative" onclick="nav('dashboard')">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<button className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all relative" onclick="nav('chat')">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-teal-600 rounded-full border border-white"></span>
</button>
<button className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all" onclick="nav('auth')">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="border-t border-slate-100 hidden md:block">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-8 py-3 text-sm font-medium text-slate-600 overflow-x-auto no-scrollbar">
<a className="hover:text-teal-700 whitespace-nowrap" href="#" onclick="nav('category')">Fashion</a>
<a className="hover:text-teal-700 whitespace-nowrap" href="#" onclick="nav('category')">Home &amp; Living</a>
<a className="hover:text-teal-700 whitespace-nowrap" href="#" onclick="nav('category')">Electronics</a>
<a className="hover:text-teal-700 whitespace-nowrap" href="#" onclick="nav('category')">Watches</a>
<a className="hover:text-teal-700 whitespace-nowrap" href="#" onclick="nav('category')">Art</a>
<a className="hover:text-teal-700 whitespace-nowrap" href="#" onclick="nav('category')">Vehicles</a>
<a className="hover:text-teal-700 whitespace-nowrap text-orange-600" href="#" onclick="nav('category')">Deals %</a>
</div>
</div>
</div>
</header>

<main className="flex-grow">

<div className="view-section" id="view-home">

<div className="bg-white border-b border-slate-200">
<div className="sm:px-6 lg:px-8 md:py-20 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="max-w-3xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Buy &amp; Sell with <span className="text-teal-700">Confidence</span></h1>
<p className="text-lg text-slate-500 mb-8 font-light">The premium marketplace for unique finds, vintage treasures, and daily essentials.</p>
<div className="bg-white p-2 rounded-xl shadow-lg border border-slate-200 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
<div className="relative flex-1">
<iconify-icon className="absolute left-4 top-3.5 text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-100 text-slate-900 bg-slate-50 w-full h-12 rounded-lg pr-4 pl-12" placeholder="What are you looking for?" type="text"/>
</div>
<button className="h-12 px-8 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2" onclick="nav('category')">
                                Search
                            </button>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-semibold text-slate-900">Trending in Fashion</h2>
<button className="text-sm font-medium text-teal-700 hover:text-teal-800 flex items-center gap-1" onclick="nav('category')">View all <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer" onclick="nav('product')">
<div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full text-slate-500 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-slate-900 truncate">Vintage Black Shirt</h3>
<div className="mt-1 flex items-baseline justify-between">
<span className="text-base font-bold text-slate-900">$24.00</span>
<span className="text-xs text-slate-400 line-through">$45</span>
</div>
<div className="mt-2 text-xs text-orange-600 font-medium flex items-center gap-1">
<iconify-icon icon="solar:hourglass-linear"></iconify-icon> 2h left
                            </div>
</div>
</div>
<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer" onclick="nav('product')">
<div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute top-2 left-2 px-2 py-0.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider rounded">Sold</div>
</div>
<div className="p-3 opacity-60">
<h3 className="text-sm font-medium text-slate-900 truncate">Nike Air Max 270</h3>
<div className="mt-1 flex items-baseline justify-between">
<span className="text-base font-bold text-slate-900">$120.00</span>
</div>
<div className="mt-2 text-xs text-slate-500 font-medium">Ended</div>
</div>
</div>
<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer" onclick="nav('product')">
<div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full text-slate-500 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-slate-900 truncate">Leather Backpack</h3>
<div className="mt-1 flex items-baseline justify-between">
<span className="text-base font-bold text-slate-900">$85.00</span>
</div>
<div className="mt-2 text-xs text-slate-500 font-medium flex items-center gap-1">
                                Direct Purchase
                            </div>
</div>
</div>
<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer" onclick="nav('product')">
<div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full text-slate-500 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-slate-900 truncate">Minimalist Watch</h3>
<div className="mt-1 flex items-baseline justify-between">
<span className="text-base font-bold text-slate-900">$150.00</span>
</div>
<div className="mt-2 text-xs text-slate-500 font-medium flex items-center gap-1">
                                Direct Purchase
                            </div>
</div>
</div>
<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer" onclick="nav('product')">
<div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full text-slate-500 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-slate-900 truncate">Sony Headphones</h3>
<div className="mt-1 flex items-baseline justify-between">
<span className="text-base font-bold text-slate-900">$199.00</span>
</div>
<div className="mt-2 text-xs text-orange-600 font-medium flex items-center gap-1">
<iconify-icon icon="solar:fire-linear"></iconify-icon> Hot
                            </div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-category">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex items-baseline justify-between pb-6 border-b border-slate-200 mb-8">
<h1 className="text-2xl font-bold text-slate-900">Fashion &amp; Accessories</h1>
<div className="relative inline-block text-left">
<button className="group inline-flex justify-center text-sm font-medium text-slate-700 hover:text-slate-900">
                            Sort by: Newest
                            <iconify-icon className="ml-1 -mr-1 text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">

<form className="hidden lg:block space-y-8">
<div>
<h3 className="text-sm font-medium text-slate-900 mb-3">Price Range</h3>
<div className="flex items-center justify-between text-xs text-slate-500 mb-2">
<span>€0</span>
<span>€500+</span>
</div>
<input className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" type="range"/>
<div className="flex gap-3 mt-4">
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm" placeholder="Min" type="number"/>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm" placeholder="Max" type="number"/>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-3">Condition</h3>
<div className="space-y-2">
<label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
<input className="rounded text-teal-600 focus:ring-teal-500 border-slate-300" type="checkbox"/> New
                                </label>
<label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
<input className="rounded text-teal-600 focus:ring-teal-500 border-slate-300" type="checkbox"/> Like New
                                </label>
<label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
<input className="rounded text-teal-600 focus:ring-teal-500 border-slate-300" type="checkbox"/> Used
                                </label>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-3">Format</h3>
<div className="space-y-2">
<label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
<input className="text-teal-600 focus:ring-teal-500 border-slate-300" name="format" type="radio"/> All
                                </label>
<label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
<input className="text-teal-600 focus:ring-teal-500 border-slate-300" name="format" type="radio"/> Auction
                                </label>
<label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
<input className="text-teal-600 focus:ring-teal-500 border-slate-300" name="format" type="radio"/> Buy Now
                                </label>
</div>
</div>
</form>

<div className="lg:col-span-3">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">

<div className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer" onclick="nav('product')">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596568359553-a56de6970068?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-slate-900 truncate">Venetian Mask</h3>
<span className="block mt-1 text-sm font-bold text-slate-900">€45.00</span>
<div className="mt-2 text-xs text-slate-500">Ends in 2d 4h</div>
</div>
</div>
<div className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer" onclick="nav('product')">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-slate-900 truncate">Summer Hat</h3>
<span className="block mt-1 text-sm font-bold text-slate-900">€22.00</span>
<div className="mt-2 text-xs text-slate-500">Direct Purchase</div>
</div>
</div>
<div className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer" onclick="nav('product')">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-slate-900 truncate">Leather Bag</h3>
<span className="block mt-1 text-sm font-bold text-slate-900">€145.00</span>
<div className="mt-2 text-xs text-orange-600 font-medium">15 min left</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-product">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex items-center text-xs text-slate-500 mb-6 gap-2">
<span className="cursor-pointer hover:text-teal-700" onclick="nav('home')">Home</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="cursor-pointer hover:text-teal-700" onclick="nav('category')">Fashion</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-slate-900">Vintage Denim Jacket</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

<div className="space-y-4">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="grid grid-cols-4 gap-4">
<button className="aspect-square rounded-lg border-2 border-teal-600 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</button>
<button className="aspect-square rounded-lg border border-slate-200 overflow-hidden hover:border-slate-400">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</button>
<button className="aspect-square rounded-lg border border-slate-200 overflow-hidden hover:border-slate-400">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</button>
</div>
</div>

<div>
<h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Vintage 90s Denim Jacket</h1>
<div className="flex items-center gap-4 mb-6">
<span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">Used - Good Condition</span>
<span className="text-sm text-slate-500">Listed 2 days ago</span>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
<div className="flex items-end justify-between mb-4">
<div>
<p className="text-sm text-slate-500 mb-1">Current Bid</p>
<p className="text-3xl font-bold text-slate-900">€42.00</p>
</div>
<div className="text-right">
<p className="text-xs font-bold text-orange-600 flex items-center justify-end gap-1"><iconify-icon icon="solar:hourglass-linear"></iconify-icon> Ends in 4h 12m</p>
<p className="text-xs text-slate-500 mt-1">12 Bids</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 rounded-lg transition-colors">Place Bid</button>
<button className="px-4 border border-slate-200 rounded-lg hover:border-slate-400 text-slate-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<p className="text-xs text-slate-500 text-center mt-3">Reserve price not met</p>
</div>
<div className="prose prose-sm prose-slate mb-8">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Description</h3>
<p className="text-slate-600 leading-relaxed">Original vintage denim jacket from the 90s. Classic cut, slightly oversized fit. The denim has a beautiful wash and soft feel. No tears, buttons are all original.</p>
<ul className="list-disc pl-4 mt-2 text-slate-600 space-y-1">
<li>Size: L (Fits like XL)</li>
<li>Material: 100% Cotton</li>
<li>Brand: Levis</li>
</ul>
</div>

<div className="border-t border-slate-200 pt-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=33"/>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-slate-900">AlexVintage_99</h4>
<div className="flex items-center text-xs text-slate-500 mt-0.5">
<iconify-icon className="text-yellow-400 mr-1" icon="solar:star-bold"></iconify-icon>
                                        4.9 (128 reviews) • Berlin, DE
                                    </div>
</div>
<button className="text-sm font-medium text-teal-700 border border-teal-200 hover:bg-teal-50 px-4 py-2 rounded-lg transition-colors" onclick="nav('chat')">Contact</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-dashboard">
<div className="bg-slate-900 text-white pt-10 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-6">
<div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center text-3xl font-bold border-4 border-slate-800">
                            JD
                        </div>
<div>
<h1 className="text-2xl font-bold">John Doe</h1>
<p className="text-slate-400 text-sm mt-1">Member since 2021 • Verified Seller</p>
</div>
<div className="ml-auto hidden sm:block">
<button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Edit Profile</button>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-12">
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px]">
<div className="flex flex-col md:flex-row h-full">

<div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50/50 p-4">
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-white text-teal-700 rounded-lg shadow-sm border border-slate-200" href="#">
<iconify-icon className="text-lg" icon="solar:shop-linear"></iconify-icon> Active Listings
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:bag-check-linear"></iconify-icon> Sold Items
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon> Favorites
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon> Settings
                                </a>
</nav>
</div>

<div className="flex-1 p-6">
<div className="flex justify-between items-center mb-6">
<h2 className="text-lg font-semibold text-slate-900">Active Listings</h2>
<button className="text-sm bg-teal-700 text-white px-3 py-1.5 rounded-md hover:bg-teal-800 transition-colors" onclick="nav('create')">
                                    + New Listing
                                </button>
</div>
<div className="overflow-x-auto border border-slate-200 rounded-lg">
<table className="min-w-full divide-y divide-slate-200">
<thead className="bg-slate-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Item</th>
<th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Price</th>
<th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Views</th>
<th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-slate-200">
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="h-10 w-10 flex-shrink-0 bg-slate-100 rounded bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100\')'}}></div>
<div className="ml-4">
<div className="text-sm font-medium text-slate-900">Nike Air Max</div>
<div className="text-xs text-slate-500">Shoes</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">€120.00</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">342</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a className="text-teal-600 hover:text-teal-900 mr-3" href="#">Edit</a>
<a className="text-red-600 hover:text-red-900" href="#">Delete</a>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="h-10 w-10 flex-shrink-0 bg-slate-100 rounded bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=100\')'}}></div>
<div className="ml-4">
<div className="text-sm font-medium text-slate-900">Leather Backpack</div>
<div className="text-xs text-slate-500">Accessories</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">€85.00</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">128</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a className="text-teal-600 hover:text-teal-900 mr-3" href="#">Edit</a>
<a className="text-red-600 hover:text-red-900" href="#">Delete</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-create">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
<h1 className="text-2xl font-bold text-slate-900 mb-2">Create New Listing</h1>
<p className="text-sm text-slate-500 mb-8">Fill in the details to publish your item to the marketplace.</p>
<form className="space-y-6">

<div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:camera-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-900">Click to upload photos</p>
<p className="text-xs text-slate-500 mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
</div>

<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600" placeholder="e.g. Vintage Leather Jacket" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
<select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 bg-white">
<option>Select...</option>
<option>Fashion</option>
<option>Electronics</option>
<option>Home</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Condition</label>
<select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 bg-white">
<option>New</option>
<option>Used - Like New</option>
<option>Used - Good</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
<textarea className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600" rows="4"></textarea>
</div>
</div>

<div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Price Type</label>
<div className="flex gap-2">
<button className="flex-1 py-2 text-sm font-medium bg-teal-50 text-teal-700 border border-teal-200 rounded-lg" type="button">Fixed Price</button>
<button className="flex-1 py-2 text-sm font-medium bg-white text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50" type="button">Auction</button>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Price (€)</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600" placeholder="0.00" type="number"/>
</div>
</div>

<div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900" onclick="nav('dashboard')" type="button">Save Draft</button>
<button className="px-6 py-2 bg-teal-700 hover:bg-teal-800 text-white font-medium text-sm rounded-lg shadow-sm transition-colors" onclick="nav('product')" type="button">Publish Listing</button>
</div>
</form>
</div>
</div>
</div>

<div className="view-section hidden" id="view-auth">
<div className="min-h-[calc(100vh-140px)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-50">
<div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
<h2 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back</h2>
<p className="mt-2 text-sm text-slate-600">
                        Or <a className="font-medium text-teal-600 hover:text-teal-500" href="#">start selling for free today</a>
</p>
</div>
<div className="sm:mx-auto sm:w-full sm:max-w-[400px]">
<div className="bg-white py-8 px-4 shadow-sm border border-slate-200 sm:rounded-xl sm:px-10">
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="email">Email address</label>
<div className="mt-1">
<input autocomplete="email" className="block w-full appearance-none rounded-lg border border-slate-200 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm" id="email" name="email" required="" type="email"/>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<label className="block text-sm font-medium text-slate-700" htmlFor="password">Password</label>
<a className="text-xs font-medium text-teal-600 hover:text-teal-500" href="#">Forgot?</a>
</div>
<div>
<input autocomplete="current-password" className="block w-full appearance-none rounded-lg border border-slate-200 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm" id="password" name="password" required="" type="password"/>
</div>
</div>
<div>
<button className="flex w-full justify-center rounded-lg border border-transparent bg-teal-700 py-2.5 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all" onclick="nav('dashboard')" type="button">Sign in</button>
</div>
</form>
<div className="mt-6">
<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-200"></div>
</div>
<div className="relative flex justify-center text-sm">
<span className="bg-white px-2 text-slate-500">Or continue with</span>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3">
<button className="inline-flex w-full justify-center rounded-lg border border-slate-200 bg-white py-2 px-4 text-sm font-medium text-slate-500 shadow-sm hover:bg-slate-50" type="button">
<span className="sr-only">Sign in with Google</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>
</button>
<button className="inline-flex w-full justify-center rounded-lg border border-slate-200 bg-white py-2 px-4 text-sm font-medium text-slate-500 shadow-sm hover:bg-slate-50" type="button">
<span className="sr-only">Sign in with Facebook</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-chat">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-140px)]">
<div className="bg-white border border-slate-200 rounded-xl shadow-sm h-full flex overflow-hidden">

<div className="w-full sm:w-80 border-r border-slate-200 flex flex-col bg-slate-50/30">
<div className="p-4 border-b border-slate-200">
<h2 className="font-semibold text-slate-900 mb-3">Messages</h2>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500" placeholder="Search chats..." type="text"/>
</div>
</div>
<div className="overflow-y-auto flex-1">

<div className="p-4 border-b border-slate-100 bg-teal-50/50 cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex gap-3">
<div className="relative">
<div className="w-10 h-10 bg-slate-200 rounded-full bg-cover" style={{backgroundImage: 'url(\'https://i.pravatar.cc/150?img=33\')'}}></div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-sm font-semibold text-slate-900 truncate">AlexVintage_99</h3>
<span className="text-xs text-teal-600 font-medium">10:42 AM</span>
</div>
<p className="text-xs text-slate-600 truncate">Is the denim jacket still available?</p>
<div className="flex items-center gap-2 mt-1.5">
<img className="w-6 h-6 rounded object-cover border border-slate-200" src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=50"/>
<span className="text-[10px] text-slate-400">Vintage Denim...</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full bg-cover" style={{backgroundImage: 'url(\'https://i.pravatar.cc/150?img=12\')'}}></div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-sm font-semibold text-slate-900 truncate">SarahWalker</h3>
<span className="text-xs text-slate-400">Yesterday</span>
</div>
<p className="text-xs text-slate-500 truncate">Thanks for the quick shipping!</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col hidden sm:flex bg-white">

<div className="h-16 px-6 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<h3 className="font-semibold text-slate-900">AlexVintage_99</h3>
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
</div>
<div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
<img className="w-8 h-8 rounded object-cover" src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=50"/>
<div className="text-xs">
<p className="font-medium text-slate-900">Vintage Denim Jacket</p>
<p className="text-slate-500">€42.00</p>
</div>
</div>
</div>

<div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/30">
<div className="flex justify-start">
<div className="bg-white border border-slate-200 text-slate-700 py-2.5 px-4 rounded-2xl rounded-tl-none max-w-sm shadow-sm text-sm">
                                    Hi there! I saw your listing for the denim jacket.
                                </div>
</div>
<div className="flex justify-start">
<div className="bg-white border border-slate-200 text-slate-700 py-2.5 px-4 rounded-2xl rounded-tl-none max-w-sm shadow-sm text-sm">
                                    Is it true to size or does it run small?
                                </div>
</div>
<div className="flex justify-end">
<div className="bg-teal-600 text-white py-2.5 px-4 rounded-2xl rounded-tr-none max-w-sm shadow-sm text-sm">
                                    Hey! It's a vintage Large, so it fits a bit boxy and oversized. Very comfortable!
                                </div>
</div>
</div>

<div className="p-4 border-t border-slate-200">
<div className="flex gap-2">
<button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</button>
<input className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500" placeholder="Type a message..." type="text"/>
<button className="p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
<iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
<div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-slate-500">
<p>© 2023 Marketplace Inc.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
