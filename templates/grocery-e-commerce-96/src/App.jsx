import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#ff8c00] text-white py-2 px-4 flex justify-between items-center">
<div className="flex items-center gap-2 max-w-7xl mx-auto w-full px-0 md:px-4 justify-center md:justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="package" strokeWidth="1.5"></i>
<span className="font-light text-sm">Free delivery in Kigali for orders over 50,000 RWF</span>
</div>
<div className="hidden md:flex items-center gap-4 font-light text-orange-50 text-sm">
<a className="hover:text-white transition-colors" href="#">Store Locator</a>
<a className="hover:text-white transition-colors" href="#">Help</a>
</div>
</div>
</div>

<header className="bg-white border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
<div className="flex items-center justify-between gap-4 md:gap-8">

<a className="flex items-center gap-3 flex-shrink-0 group" href="#">
<div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center p-1 shadow-sm group-hover:border-[#ff8c00]/50 transition-colors">
<div className="w-full h-full rounded-full border border-[#ff8c00] flex items-center justify-center border-dashed">
<i className="text-[#ff8c00] w-5 h-5" data-lucide="paw-print" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex flex-col">
<span className="text-xl md:text-2xl font-normal tracking-tight text-[#ff8c00] leading-none mb-1">Simba Supermarket</span>
<span className="text-sm text-slate-500 font-light leading-none hidden md:block">Online Shopping</span>
</div>
</a>

<div className="hidden md:flex flex-1 max-w-2xl group">
<div className="flex w-full bg-gray-50 border border-gray-200 rounded-full overflow-hidden focus-within:border-[#ff8c00]/50 focus-within:ring-2 focus-within:ring-[#ff8c00]/10 transition-all">
<button className="flex items-center gap-1 pl-4 pr-3 py-2.5 text-base text-slate-500 hover:text-slate-800 bg-gray-50 border-r border-gray-200 transition-colors">
<span>All Depts</span>
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<input className="flex-1 bg-transparent px-4 text-base outline-none placeholder:text-slate-400" placeholder="Search groceries, essentials..." type="text"/>
<button className="bg-[#ff8c00] text-white px-6 flex items-center justify-center hover:bg-[#e67e00] transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
<div className="hidden md:flex items-center gap-1 text-base text-slate-600 cursor-pointer hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i>
<span className="font-normal">EN</span>
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</a>
<a className="relative text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2" href="#">
<div className="relative">
<i className="w-6 h-6" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="absolute -top-1.5 -right-1.5 bg-[#ff8c00] text-white text-xs font-normal h-4 w-4 rounded-full flex items-center justify-center border-2 border-white box-content">3</span>
</div>
<span className="hidden md:block text-base font-normal text-slate-800">12,450 RWF</span>
</a>
</div>
</div>

<div className="mt-4 md:hidden">
<div className="flex w-full bg-gray-50 border border-gray-200 rounded-full overflow-hidden focus-within:border-[#ff8c00]/50 transition-all">
<input className="flex-1 bg-transparent px-4 py-2.5 text-base outline-none placeholder:text-slate-400" placeholder="Search groceries..." type="text"/>
<button className="text-[#ff8c00] px-4 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:block border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4">
<ul className="flex items-center gap-8 text-base font-normal text-slate-600 overflow-x-auto py-3 no-scrollbar">
<li><a className="text-[#ff8c00] whitespace-nowrap" href="#">Special Offers</a></li>
<li><a className="hover:text-[#ff8c00] whitespace-nowrap transition-colors" href="#">Fresh Produce</a></li>
<li><a className="hover:text-[#ff8c00] whitespace-nowrap transition-colors" href="#">Meat &amp; Seafood</a></li>
<li><a className="hover:text-[#ff8c00] whitespace-nowrap transition-colors" href="#">Dairy &amp; Eggs</a></li>
<li><a className="hover:text-[#ff8c00] whitespace-nowrap transition-colors" href="#">Beverages</a></li>
<li><a className="hover:text-[#ff8c00] whitespace-nowrap transition-colors" href="#">Household</a></li>
<li><a className="hover:text-[#ff8c00] whitespace-nowrap transition-colors" href="#">Made in Rwanda</a></li>
</ul>
</div>
</div>
</header>
<main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 md:py-8 flex flex-col gap-10">

<section className="relative bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden flex items-center min-h-[200px] md:min-h-[300px]">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, #ff8c00 0%, transparent 50%), radial-gradient(circle at 80% 80%, #ffffff 0%, transparent 40%)'}}></div>
<div className="relative z-10 p-6 md:p-12 md:w-2/3">
<span className="inline-block px-3 py-1 bg-[#ff8c00]/20 text-[#ff8c00] text-sm font-normal rounded-full mb-4 border border-[#ff8c00]/30 backdrop-blur-sm">Fast Delivery</span>
<h1 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-4 leading-tight">Fresh Groceries.<br/>Delivered Fast.</h1>
<p className="text-slate-300 text-base md:text-lg mb-6 max-w-md font-light">Stock up on your daily essentials and fresh local produce, ready for seamless checkout with Mobile Money.</p>
<button className="bg-[#ff8c00] hover:bg-[#e67e00] text-white px-6 py-3 rounded-full text-base font-normal transition-colors inline-flex items-center gap-2">
                    Shop Now
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-5 md:mb-6">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-slate-900">Daily Essentials</h2>
<a className="text-base font-normal text-[#ff8c00] hover:underline flex items-center gap-1" href="#">View All <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i></a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">

<div className="bg-white rounded-xl border border-gray-200/60 p-3 hover:shadow-md transition-shadow group flex flex-col">
<div className="aspect-square bg-gray-50 rounded-lg mb-3 relative overflow-hidden flex items-center justify-center">
<i className="text-gray-300 w-10 h-10" data-lucide="milk" strokeWidth="1.5"></i>
<span className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-xs font-normal text-slate-600 border border-gray-100">Dairy</span>
</div>
<div className="flex-1 flex flex-col">
<h3 className="text-base font-normal text-slate-800 mb-1 leading-snug group-hover:text-[#ff8c00] transition-colors line-clamp-2">Inyange Fresh Milk Whole 1L</h3>
<p className="text-sm text-slate-500 mb-3 font-light">1 Liter</p>
<div className="mt-auto flex flex-col gap-2.5">
<span className="text-lg font-medium text-[#ff8c00] tracking-tight">1,200 <span className="text-sm font-normal text-slate-500">RWF</span></span>
<button aria-label="Add to cart" className="w-full bg-[#ff8c00] text-white py-2.5 rounded-lg text-sm font-normal hover:bg-[#e67e00] transition-colors flex items-center justify-center gap-1.5">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
                                Add to Cart
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200/60 p-3 hover:shadow-md transition-shadow group flex flex-col">
<div className="aspect-square bg-gray-50 rounded-lg mb-3 relative overflow-hidden flex items-center justify-center">
<i className="text-gray-300 w-10 h-10" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div className="flex-1 flex flex-col">
<h3 className="text-base font-normal text-slate-800 mb-1 leading-snug group-hover:text-[#ff8c00] transition-colors line-clamp-2">Rwanda Premium Rice</h3>
<p className="text-sm text-slate-500 mb-3 font-light">5 Kg Bag</p>
<div className="mt-auto flex flex-col gap-2.5">
<span className="text-lg font-medium text-[#ff8c00] tracking-tight">6,500 <span className="text-sm font-normal text-slate-500">RWF</span></span>
<button aria-label="Add to cart" className="w-full bg-[#ff8c00] text-white py-2.5 rounded-lg text-sm font-normal hover:bg-[#e67e00] transition-colors flex items-center justify-center gap-1.5">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
                                Add to Cart
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200/60 p-3 hover:shadow-md transition-shadow group flex flex-col">
<div className="aspect-square bg-gray-50 rounded-lg mb-3 relative overflow-hidden flex items-center justify-center">
<i className="text-gray-300 w-10 h-10" data-lucide="coffee" strokeWidth="1.5"></i>
<span className="absolute top-2 left-2 bg-[#ff8c00] px-2 py-0.5 rounded text-xs font-normal text-white shadow-sm">-10%</span>
</div>
<div className="flex-1 flex flex-col">
<h3 className="text-base font-normal text-slate-800 mb-1 leading-snug group-hover:text-[#ff8c00] transition-colors line-clamp-2">Gorilla's Coffee Medium Roast</h3>
<p className="text-sm text-slate-500 mb-3 font-light">250g</p>
<div className="mt-auto flex flex-col gap-2.5">
<div className="flex flex-col">
<span className="text-xs text-slate-400 line-through">4,000 RWF</span>
<span className="text-lg font-medium text-[#ff8c00] tracking-tight">3,600 <span className="text-sm font-normal text-slate-500">RWF</span></span>
</div>
<button aria-label="Add to cart" className="w-full bg-[#ff8c00] text-white py-2.5 rounded-lg text-sm font-normal hover:bg-[#e67e00] transition-colors flex items-center justify-center gap-1.5">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
                                Add to Cart
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200/60 p-3 hover:shadow-md transition-shadow group flex flex-col">
<div className="aspect-square bg-gray-50 rounded-lg mb-3 relative overflow-hidden flex items-center justify-center">
<i className="text-gray-300 w-10 h-10" data-lucide="apple" strokeWidth="1.5"></i>
<span className="absolute top-2 left-2 bg-green-100 px-2 py-0.5 rounded text-xs font-normal text-green-700 border border-green-200">Fresh</span>
</div>
<div className="flex-1 flex flex-col">
<h3 className="text-base font-normal text-slate-800 mb-1 leading-snug group-hover:text-[#ff8c00] transition-colors line-clamp-2">Fresh Local Tomatoes</h3>
<p className="text-sm text-slate-500 mb-3 font-light">1 Kg</p>
<div className="mt-auto flex flex-col gap-2.5">
<span className="text-lg font-medium text-[#ff8c00] tracking-tight">850 <span className="text-sm font-normal text-slate-500">RWF</span></span>
<button aria-label="Add to cart" className="w-full bg-[#ff8c00] text-white py-2.5 rounded-lg text-sm font-normal hover:bg-[#e67e00] transition-colors flex items-center justify-center gap-1.5">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
                                Add to Cart
                            </button>
</div>
</div>
</div>

<div className="hidden lg:flex bg-white rounded-xl border border-gray-200/60 p-3 hover:shadow-md transition-shadow group flex-col">
<div className="aspect-square bg-gray-50 rounded-lg mb-3 relative overflow-hidden flex items-center justify-center">
<i className="text-gray-300 w-10 h-10" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<div className="flex-1 flex flex-col">
<h3 className="text-base font-normal text-slate-800 mb-1 leading-snug group-hover:text-[#ff8c00] transition-colors line-clamp-2">Mutzig Premium Beer</h3>
<p className="text-sm text-slate-500 mb-3 font-light">6 x 33cl Pack</p>
<div className="mt-auto flex flex-col gap-2.5">
<span className="text-lg font-medium text-[#ff8c00] tracking-tight">4,800 <span className="text-sm font-normal text-slate-500">RWF</span></span>
<button aria-label="Add to cart" className="w-full bg-[#ff8c00] text-white py-2.5 rounded-lg text-sm font-normal hover:bg-[#e67e00] transition-colors flex items-center justify-center gap-1.5">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
                                Add to Cart
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#ff8c00]/5 rounded-2xl md:rounded-3xl p-5 md:p-8 border border-[#ff8c00]/10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-slate-900 mb-1">Made in Rwanda</h2>
<p className="text-base text-slate-500 font-light">Support local producers with the finest quality products.</p>
</div>
<a className="inline-flex bg-white border border-gray-200 text-base font-normal text-slate-700 px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors w-max" href="#">Shop Local</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">

<div className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow group flex flex-col border border-transparent hover:border-gray-200/60">
<div className="aspect-[4/3] bg-gray-50 rounded-lg mb-3 relative overflow-hidden flex items-center justify-center border border-gray-100">
<i className="text-gray-300 w-8 h-8" data-lucide="droplet" strokeWidth="1.5"></i>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<span className="absolute bottom-2 right-2 flex items-center gap-1 text-xs font-normal text-white bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded">
                            Local
                        </span>
</div>
<h3 className="text-base font-normal text-slate-800 mb-2 leading-snug truncate">Akabanga Chili Oil</h3>
<div className="mt-auto flex flex-col gap-2">
<span className="text-base font-medium text-[#ff8c00] tracking-tight">1,500 <span className="text-sm font-normal text-slate-500">RWF</span></span>
<button className="w-full bg-white border border-[#ff8c00] text-[#ff8c00] py-2 rounded-lg text-sm font-normal hover:bg-[#ff8c00] hover:text-white transition-colors flex items-center justify-center">Add to Cart</button>
</div>
</div>

<div className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow group flex flex-col border border-transparent hover:border-gray-200/60">
<div className="aspect-[4/3] bg-gray-50 rounded-lg mb-3 relative overflow-hidden flex items-center justify-center border border-gray-100">
<i className="text-gray-300 w-8 h-8" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-normal text-slate-800 mb-2 leading-snug truncate">Sorwathe Green Tea</h3>
<div className="mt-auto flex flex-col gap-2">
<span className="text-base font-medium text-[#ff8c00] tracking-tight">2,200 <span className="text-sm font-normal text-slate-500">RWF</span></span>
<button className="w-full bg-white border border-[#ff8c00] text-[#ff8c00] py-2 rounded-lg text-sm font-normal hover:bg-[#ff8c00] hover:text-white transition-colors flex items-center justify-center">Add to Cart</button>
</div>
</div>

<div className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow group flex flex-col border border-transparent hover:border-gray-200/60">
<div className="aspect-[4/3] bg-gray-50 rounded-lg mb-3 relative overflow-hidden flex items-center justify-center border border-gray-100">
<i className="text-gray-300 w-8 h-8" data-lucide="drumstick" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-normal text-slate-800 mb-2 leading-snug truncate">Urwibutso Sausages</h3>
<div className="mt-auto flex flex-col gap-2">
<span className="text-base font-medium text-[#ff8c00] tracking-tight">3,500 <span className="text-sm font-normal text-slate-500">RWF</span></span>
<button className="w-full bg-white border border-[#ff8c00] text-[#ff8c00] py-2 rounded-lg text-sm font-normal hover:bg-[#ff8c00] hover:text-white transition-colors flex items-center justify-center">Add to Cart</button>
</div>
</div>

<div className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow group flex flex-col hidden md:flex border border-transparent hover:border-gray-200/60">
<div className="aspect-[4/3] bg-gray-50 rounded-lg mb-3 relative overflow-hidden flex items-center justify-center border border-gray-100">
<i className="text-gray-300 w-8 h-8" data-lucide="cookie" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-normal text-slate-800 mb-2 leading-snug truncate">Kinazi Cassava Flour</h3>
<div className="mt-auto flex flex-col gap-2">
<span className="text-base font-medium text-[#ff8c00] tracking-tight">2,800 <span className="text-sm font-normal text-slate-500">RWF</span></span>
<button className="w-full bg-white border border-[#ff8c00] text-[#ff8c00] py-2 rounded-lg text-sm font-normal hover:bg-[#ff8c00] hover:text-white transition-colors flex items-center justify-center">Add to Cart</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white mt-auto flex flex-col">
<div className="max-w-7xl mx-auto px-4 py-10 md:py-16 w-full">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center p-0.5">
<div className="w-full h-full rounded-full border border-[#ff8c00] flex items-center justify-center border-dashed">
<i className="text-[#ff8c00] w-4 h-4" data-lucide="paw-print" strokeWidth="1.5"></i>
</div>
</div>
<span className="text-2xl font-normal tracking-tight text-[#ff8c00]">Simba</span>
</div>
<p className="text-base text-slate-500 font-light mb-6">Rwanda's leading grocery retailer, delivering freshness and quality to your door.</p>
<div className="flex md:hidden items-center gap-2 mb-6">
<select className="bg-gray-50 border border-gray-200 text-base rounded-lg px-3 py-2 outline-none focus:border-[#ff8c00]">
<option value="en">English (EN)</option>
<option value="fr">Français (FR)</option>
<option value="rw">Kinyarwanda (RW)</option>
</select>
</div>
</div>
<div>
<h4 className="font-normal text-slate-900 mb-4 text-base tracking-tight">Shop</h4>
<ul className="space-y-3 text-base text-slate-500 font-light">
<li><a className="hover:text-[#ff8c00] transition-colors" href="#">All Categories</a></li>
<li><a className="hover:text-[#ff8c00] transition-colors" href="#">Made in Rwanda</a></li>
<li><a className="hover:text-[#ff8c00] transition-colors" href="#">Special Offers</a></li>
<li><a className="hover:text-[#ff8c00] transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-normal text-slate-900 mb-4 text-base tracking-tight">Customer Service</h4>
<ul className="space-y-3 text-base text-slate-500 font-light">
<li><a className="hover:text-[#ff8c00] transition-colors" href="#">Store Locator</a></li>
<li><a className="hover:text-[#ff8c00] transition-colors" href="#">Delivery Information</a></li>
<li><a className="hover:text-[#ff8c00] transition-colors" href="#">Returns &amp; Refunds</a></li>
<li><a className="hover:text-[#ff8c00] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col justify-center">
<h4 className="font-normal text-slate-900 mb-2 text-base tracking-tight">Seamless Checkout</h4>
<p className="text-sm text-slate-500 mb-4 font-light">Pay easily online or on delivery.</p>
<div className="flex items-center gap-3">
<div className="h-8 w-12 bg-yellow-400 rounded-md flex items-center justify-center font-semibold text-slate-900 text-xs tracking-tight border border-yellow-500">MoMo</div>
<div className="h-8 w-12 bg-[#ff8c00] rounded-md flex items-center justify-center font-semibold text-white text-xs tracking-tight border border-[#e67e00]">Airtel</div>
<div className="h-8 w-12 bg-slate-800 rounded-md flex items-center justify-center font-semibold text-white text-xs tracking-tight border border-slate-900">Card</div>
</div>
</div>
</div>
</div>

<div className="bg-[#0891b2] text-white py-4 mt-auto w-full">
<div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm font-normal">
<span>© Simba Supermarket Ltd · Home</span>
<a className="hover:text-cyan-100 transition-colors" href="#">Back to top</a>
</div>
</div>
</footer>


    </>
  );
}
