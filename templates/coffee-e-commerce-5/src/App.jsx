import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 text-zinc-900 font-semibold tracking-tighter text-lg hover:text-black transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                AERO.BREW
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-900 hover:text-black transition-colors" href="#">Shop Coffee</a>
<a className="hover:text-zinc-900 transition-colors" href="#">About Us</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Subscribe</a>
</div>

<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="h-4 w-px bg-zinc-200 mx-1"></div>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center relative group">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-2 -right-2 bg-zinc-900 text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">2</span>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center ml-2">
<iconify-icon className="text-xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow">

<section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    Fresh stock arrived today
                </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-zinc-900 tracking-tighter max-w-4xl leading-tight mb-6">
                    Freshly Roasted Coffee <br className="hidden md:block"/>
                    Delivered to Your Door
                </h1>
<p className="text-base md:text-lg text-zinc-500 max-w-2xl mb-10 leading-relaxed">
                    Buy the best quality coffee beans online. We roast our beans daily and ship them directly to you so you can enjoy the perfect morning cup.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-6 py-3 bg-zinc-900 hover:bg-black text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:bag-4-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Shop Coffee Beans
                    </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
<h2 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight">Our Products</h2>
<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar w-full md:w-auto">
<button className="px-4 py-1.5 rounded-full bg-zinc-900 text-white text-sm font-medium whitespace-nowrap">All Items</button>
<button className="px-4 py-1.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 text-sm font-medium border border-zinc-200 whitespace-nowrap transition-colors">Light Roast</button>
<button className="px-4 py-1.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 text-sm font-medium border border-zinc-200 whitespace-nowrap transition-colors">Dark Roast</button>
<button className="px-4 py-1.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 text-sm font-medium border border-zinc-200 whitespace-nowrap transition-colors">Equipment</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white border border-zinc-200 rounded-2xl p-3 hover:shadow-md transition-all duration-300">
<div className="aspect-[4/3] rounded-xl bg-zinc-50 flex items-center justify-center relative overflow-hidden mb-4 border border-zinc-100">
<iconify-icon className="text-6xl text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300" icon="solar:bag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-2 left-2 flex gap-1">
<span className="px-2 py-0.5 rounded bg-white border border-zinc-200 text-xs font-medium text-zinc-600">250g Box</span>
</div>
</div>
<div className="px-1 pb-1 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base text-zinc-900 font-medium tracking-tight">Light Roast Beans</h3>
<span className="text-sm font-semibold text-zinc-900">$24</span>
</div>
<p className="text-xs text-zinc-500 mb-4 line-clamp-2 flex-grow">Sweet and fruity coffee beans. Perfect for black coffee and pour-over methods.</p>
<button className="w-full py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white border border-zinc-200 rounded-2xl p-3 hover:shadow-md transition-all duration-300">
<div className="aspect-[4/3] rounded-xl bg-zinc-50 flex items-center justify-center relative overflow-hidden mb-4 border border-zinc-100">
<iconify-icon className="text-6xl text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300" icon="solar:moon-stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-2 left-2 flex gap-1">
<span className="px-2 py-0.5 rounded bg-white border border-zinc-200 text-xs font-medium text-zinc-600">500g Bag</span>
</div>
</div>
<div className="px-1 pb-1 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base text-zinc-900 font-medium tracking-tight">Dark Roast Espresso</h3>
<span className="text-sm font-semibold text-zinc-900">$18</span>
</div>
<p className="text-xs text-zinc-500 mb-4 line-clamp-2 flex-grow">Strong, bold flavor with chocolate notes. Best used with milk or as espresso.</p>
<button className="w-full py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white border border-zinc-200 rounded-2xl p-3 hover:shadow-md transition-all duration-300">
<div className="aspect-[4/3] rounded-xl bg-zinc-50 flex items-center justify-center relative overflow-hidden mb-4 border border-zinc-100">
<iconify-icon className="text-6xl text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-2 left-2 flex gap-1">
<span className="px-2 py-0.5 rounded bg-white border border-zinc-200 text-xs font-medium text-zinc-600">250g Box</span>
</div>
</div>
<div className="px-1 pb-1 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base text-zinc-900 font-medium tracking-tight">Medium Roast Blend</h3>
<span className="text-sm font-semibold text-zinc-900">$32</span>
</div>
<p className="text-xs text-zinc-500 mb-4 line-clamp-2 flex-grow">A balanced, smooth daily coffee with caramel and nutty flavors. Great for everyone.</p>
<button className="w-full py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white border border-zinc-200 rounded-2xl p-3 hover:shadow-md transition-all duration-300">
<div className="aspect-[4/3] rounded-xl bg-zinc-50 flex items-center justify-center relative overflow-hidden mb-4 border border-zinc-100">
<iconify-icon className="text-6xl text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300" icon="solar:cup-paper-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-2 left-2 flex gap-1">
<span className="px-2 py-0.5 rounded bg-white border border-zinc-200 text-xs font-medium text-zinc-600">Equipment</span>
</div>
</div>
<div className="px-1 pb-1 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base text-zinc-900 font-medium tracking-tight">Travel Coffee Maker</h3>
<span className="text-sm font-semibold text-zinc-900">$39</span>
</div>
<p className="text-xs text-zinc-500 mb-4 line-clamp-2 flex-grow">A simple plastic tool to make great coffee anywhere. Easy to clean and carry.</p>
<button className="w-full py-2 bg-zinc-900 hover:bg-black text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-20">
<div className="rounded-3xl bg-white border border-zinc-200 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
<div className="max-w-xl text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight mb-4">Subscribe &amp; Save 20%</h2>
<p className="text-zinc-600 text-sm md:text-base mb-6">Never run out of coffee again. Get a fresh bag delivered to your house automatically every month.</p>
<ul className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6 text-sm text-zinc-700 font-medium mb-8 md:mb-0">
<li className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Free delivery
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Cancel anytime
                        </li>
</ul>
</div>
<div className="w-full md:w-auto flex flex-col items-center bg-zinc-50 p-6 rounded-2xl border border-zinc-200">

<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-zinc-500">Pay Monthly</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-300 appearance-none cursor-pointer z-10 transition-all duration-300 top-0 left-0" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-300 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
<span className="text-xs font-medium text-zinc-900 flex items-center gap-1">
                            Pay Yearly
                        </span>
</div>
<div className="flex items-end gap-1 mb-6">
<span className="text-3xl font-semibold text-zinc-900 tracking-tighter">$180</span>
<span className="text-xs text-zinc-500 mb-1">/year</span>
</div>
<button className="w-full px-8 py-3 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors">
                        Start Subscription
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 bg-white pt-16 pb-8 mt-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 text-zinc-900 font-semibold tracking-tighter text-lg mb-4" href="#">
<iconify-icon className="text-xl" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        AERO.BREW
                    </a>
<p className="text-sm text-zinc-500 max-w-xs mb-6">
                        Selling the best coffee beans online since 2024. Simple, fresh, and delicious.
                    </p>
</div>
<div>
<h4 className="text-zinc-900 text-sm font-medium mb-4">Customer Service</h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Return Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-900 text-sm font-medium mb-4">Company</h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex items-center justify-between pt-8 border-t border-zinc-100 text-xs text-zinc-400">
<p>© 2024 Aero Brew Coffee. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
