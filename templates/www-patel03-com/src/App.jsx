import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="h-6 w-6 bg-gray-900 rounded-full flex items-center justify-center text-white">
<span className="text-xs font-medium">L</span>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">LUMINA</span>
</div>

<div className="hidden md:flex flex-1 max-w-md mx-8">
<div className="relative w-full group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-gray-900 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-200 focus:border-gray-400 transition-all text-sm" placeholder="Search products, categories..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
<span className="text-gray-400 text-xs border border-gray-200 rounded px-1.5 py-0.5">⌘K</span>
</div>
</div>
</div>

<div className="flex items-center gap-1 sm:gap-4">
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors relative">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors relative group">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>

<div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right p-4 z-50">
<h3 className="text-sm font-medium mb-3">Shopping Cart (2)</h3>
<div className="space-y-3">
<div className="flex gap-3">
<div className="h-12 w-12 bg-gray-100 rounded-md"></div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Minimalist Lamp</p>
<p className="text-xs text-gray-500">$120.00</p>
</div>
</div>
<div className="flex gap-3">
<div className="h-12 w-12 bg-gray-100 rounded-md"></div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Ceramic Vase</p>
<p className="text-xs text-gray-500">$45.00</p>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-gray-100">
<div className="flex justify-between text-sm font-medium mb-3">
<span>Total</span>
<span>$165.00</span>
</div>
<button className="w-full bg-gray-900 text-white text-sm py-2 rounded-lg hover:bg-gray-800 transition-colors">Checkout</button>
</div>
</div>
</button>
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

<div className="relative bg-gray-50 rounded-2xl overflow-hidden mb-12">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80')] bg-cover bg-center opacity-90 grayscale-[20%]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-transparent"></div>
<div className="relative px-8 py-20 sm:py-32 max-w-2xl">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
                    Curated essentials for <br/>modern living.
                </h1>
<p className="text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
                    Experience seamless shopping with personalized recommendations and secure, instant checkout.
                </p>
<div className="flex gap-4">
<button className="bg-white text-gray-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors shadow-sm">
                        Shop Collection
                    </button>
<button className="bg-gray-900/30 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-900/40 transition-colors">
                        View Analytics
                    </button>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-10">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">

<div>
<h3 className="text-sm font-medium text-gray-900 mb-4 tracking-tight">Categories</h3>
<div className="space-y-2.5">
<label className="flex items-center group cursor-pointer">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-gray-300 rounded bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-all"></div>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Electronics</span>
</label>
<label className="flex items-center group cursor-pointer">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-gray-300 rounded bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-all"></div>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Home &amp; Living</span>
</label>
<label className="flex items-center group cursor-pointer">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-gray-300 rounded bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-all"></div>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Accessories</span>
</label>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-gray-900 tracking-tight">Price Range</h3>
<span className="text-xs text-gray-500">$0 - $500</span>
</div>
<div className="relative h-1 w-full bg-gray-200 rounded-full mb-4">
<div className="absolute h-full bg-gray-900 rounded-full" style={{width: '60%'}}></div>
<input className="absolute inset-0 w-full opacity-0 cursor-pointer" max="1000" min="0" type="range"/>
<div className="absolute top-1/2 -mt-2 h-4 w-4 bg-white border border-gray-200 shadow-md rounded-full cursor-grab left-[60%] hover:scale-110 transition-transform"></div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-gray-900 mb-4 tracking-tight">Rating</h3>
<div className="space-y-2">
<label className="flex items-center group cursor-pointer">
<div className="relative flex items-center">
<input className="peer sr-only" name="rating" type="radio"/>
<div className="h-4 w-4 border border-gray-300 rounded-full bg-white peer-checked:border-gray-900 peer-checked:border-4 transition-all"></div>
</div>
<div className="ml-3 flex items-center gap-1 text-yellow-500">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-gray-300" icon="lucide:star" width="14"></iconify-icon>
<span className="ml-1 text-xs text-gray-500">&amp; Up</span>
</div>
</label>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex justify-between items-center mb-6">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Recommended for You</h2>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-500">Sort by:</span>
<div className="relative group">
<button className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600">
                                Best Selling
                                <iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100 relative mb-4 border border-gray-100">

<div className="absolute inset-0 flex items-center justify-center text-gray-300">
<iconify-icon icon="lucide:image" strokeWidth="1" width="48"></iconify-icon>
</div>

<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>

<button className="absolute bottom-3 left-3 right-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Smart Audio Speaker</h3>
<p className="text-xs text-gray-500 mt-1">High fidelity sound</p>
</div>
<p className="text-sm font-medium text-gray-900">$299</p>
</div>
<div className="mt-2 flex items-center gap-1">
<iconify-icon className="text-yellow-500" fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs text-gray-500 font-medium">4.8 (120)</span>
</div>
</div>

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100 relative mb-4 border border-gray-100">
<div className="absolute inset-0 flex items-center justify-center text-gray-300">
<iconify-icon icon="lucide:armchair" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wider uppercase text-gray-900 shadow-sm">New</div>
<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="absolute bottom-3 left-3 right-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Lounge Chair</h3>
<p className="text-xs text-gray-500 mt-1">Ergonomic design</p>
</div>
<p className="text-sm font-medium text-gray-900">$550</p>
</div>
<div className="mt-2 flex items-center gap-1">
<iconify-icon className="text-yellow-500" fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs text-gray-500 font-medium">4.9 (45)</span>
</div>
</div>

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100 relative mb-4 border border-gray-100">
<div className="absolute inset-0 flex items-center justify-center text-gray-300">
<iconify-icon icon="lucide:lamp" strokeWidth="1" width="48"></iconify-icon>
</div>
<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-red-500 hover:text-red-500 hover:bg-white transition-all shadow-sm opacity-100">
<iconify-icon fill="currentColor" icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="absolute bottom-3 left-3 right-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Desk Lamp</h3>
<p className="text-xs text-gray-500 mt-1">Adjustable brightness</p>
</div>
<p className="text-sm font-medium text-gray-900">$85</p>
</div>
<div className="mt-2 flex items-center gap-1">
<iconify-icon className="text-yellow-500" fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs text-gray-500 font-medium">4.7 (89)</span>
</div>
</div>

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100 relative mb-4 border border-gray-100">
<div className="absolute inset-0 flex items-center justify-center text-gray-300">
<iconify-icon icon="lucide:watch" strokeWidth="1" width="48"></iconify-icon>
</div>
<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="absolute bottom-3 left-3 right-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Add to Cart
                            </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900">Analog Watch</h3>
<p className="text-xs text-gray-500 mt-1">Minimalist face</p>
</div>
<p className="text-sm font-medium text-gray-900">$199</p>
</div>
<div className="mt-2 flex items-center gap-1">
<iconify-icon className="text-yellow-500" fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs text-gray-500 font-medium">5.0 (12)</span>
</div>
</div>
</div>

<div className="mt-12 flex justify-center">
<nav className="flex items-center gap-2">
<button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-400 disabled:opacity-50">
<iconify-icon icon="lucide:chevron-left" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-medium">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-600 text-sm font-medium">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-600 text-sm font-medium">3</button>
<button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
<iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
</nav>
</div>
</div>
</div>

<section className="mt-24 border-t border-gray-100 pt-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="flex flex-col items-start gap-3">
<div className="h-10 w-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">Secure Payments</h3>
<p className="text-xs text-gray-500 leading-relaxed">Encrypted transactions compliant with global security standards.</p>
</div>
<div className="flex flex-col items-start gap-3">
<div className="h-10 w-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900">
<iconify-icon icon="lucide:truck" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">Fast Shipping</h3>
<p className="text-xs text-gray-500 leading-relaxed">Real-time order tracking and expedited delivery options.</p>
</div>
<div className="flex flex-col items-start gap-3">
<div className="h-10 w-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900">
<iconify-icon icon="lucide:refresh-ccw" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">Easy Returns</h3>
<p className="text-xs text-gray-500 leading-relaxed">Hassle-free return policy within 30 days of purchase.</p>
</div>
<div className="flex flex-col items-start gap-3">
<div className="h-10 w-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900">
<iconify-icon icon="lucide:headphones" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">24/7 Support</h3>
<p className="text-xs text-gray-500 leading-relaxed">Expert customer service via chat and email round the clock.</p>
</div>
</div>
</section>
</main>

<div className="fixed bottom-6 right-6 z-40">
<button className="h-14 w-14 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center relative group">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></span>

<span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Chat with support
            </span>
</button>
</div>

<footer className="bg-gray-50 mt-20 pt-16 pb-8 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-gray-900 rounded-full flex items-center justify-center text-white">
<span className="text-xs font-medium">L</span>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">LUMINA</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Redefining modern commerce with a focus on design, speed, and seamless customer experiences.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Shop</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Categories</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Sale</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Support</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Order Status</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Stay Updated</h4>
<form className="flex gap-2">
<input className="bg-white border border-gray-200 text-sm rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-300" placeholder="Enter your email" type="email"/>
<button className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
<div className="flex gap-4 mt-6">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2023 Lumina Commerce Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-gray-500">
<a className="hover:text-gray-900" href="#">Privacy Policy</a>
<a className="hover:text-gray-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
