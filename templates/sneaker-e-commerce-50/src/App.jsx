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
      

<div className="bg-gray-100 py-2 text-center">
<p className="text-xs font-medium tracking-wide">Free Shipping &amp; 60-Day Returns. <a className="underline underline-offset-2 decoration-gray-400 hover:decoration-black transition-all" href="#">Join Us.</a></p>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="lg:hidden">
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<a className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:left-0 group" href="#">
<span className="text-2xl font-bold italic tracking-tighter group-hover:opacity-70 transition-opacity">NIKE</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-black" href="#">All Shoes</a>
<a className="text-sm font-medium hover:text-gray-500 transition-colors" href="#">Men</a>
<a className="text-sm font-medium hover:text-gray-500 transition-colors" href="#">Women</a>
<a className="text-sm font-medium hover:text-gray-500 transition-colors" href="#">Kids</a>
<a className="text-sm font-medium hover:text-gray-500 transition-colors" href="#">Sale</a>
</div>
<div className="flex items-center gap-2">
<div className="hidden sm:flex relative group">
<input className="bg-gray-100 text-sm rounded-full py-2 pl-10 pr-4 w-40 hover:bg-gray-200 hover:w-60 focus:w-60 focus:bg-gray-100 outline-none transition-all duration-300 placeholder:text-gray-400" placeholder="Search" type="text"/>
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-2 right-1 w-2 h-2 bg-black rounded-full border border-white"></span>
</button>
</div>
</div>
</nav>

<main className="w-full">
<div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
<img alt="Hero Nike" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
<div className="max-w-4xl">
<p className="text-sm font-medium mb-2 tracking-wide text-gray-200 uppercase">New Arrivals</p>
<h1 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase mb-4 leading-[0.9]">
                        All Shoes
                    </h1>
<p className="max-w-lg text-base text-gray-200 font-light mb-6">
                        Explore the latest innovation and style across our entire footwear collection.
                    </p>
</div>
</div>
</div>
</main>

<section className="max-w-screen-2xl mx-auto px-6 py-12 border-b border-gray-100">
<div className="flex justify-between items-end mb-8">
<h2 className="text-xl font-medium tracking-tight">Trending This Week</h2>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
<div className="min-w-[280px] snap-start group cursor-pointer">
<div className="bg-gray-100 aspect-[4/5] relative rounded-md overflow-hidden mb-3">
<img alt="Shoe" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-medium tracking-tight text-sm">Nike Dunk Low Retro</h3>
<p className="text-gray-500 text-xs">$115</p>
</div>
<div className="min-w-[280px] snap-start group cursor-pointer">
<div className="bg-gray-100 aspect-[4/5] relative rounded-md overflow-hidden mb-3">
<img alt="Shoe" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded px-2 py-0.5 text-[10px] font-bold tracking-wide">NEW</div>
</div>
<h3 className="font-medium tracking-tight text-sm">Nike Free Run 5.0</h3>
<p className="text-gray-500 text-xs">$100</p>
</div>
<div className="min-w-[280px] snap-start group cursor-pointer">
<div className="bg-gray-100 aspect-[4/5] relative rounded-md overflow-hidden mb-3">
<img alt="Shoe" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-medium tracking-tight text-sm">Air Jordan 1 Low</h3>
<p className="text-gray-500 text-xs">$110</p>
</div>
</div>
</section>

<section className="max-w-screen-2xl mx-auto px-6 py-10" id="all-shoes">

<div className="sticky top-16 z-30 bg-white py-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all">
<div className="flex items-baseline gap-2">
<h2 className="text-2xl font-medium tracking-tight">All Shoes</h2>
<span className="text-gray-400 text-sm">(124)</span>
</div>
<div className="flex items-center justify-between w-full md:w-auto gap-6">
<button className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors">
<span>Hide Filters</span>
<iconify-icon icon="solar:tuning-2-linear" width="18"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors cursor-pointer group relative">
<span>Sort By</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="flex gap-10">

<aside className="hidden lg:block w-60 shrink-0 h-[calc(100vh-150px)] overflow-y-auto sticky top-32 no-scrollbar pr-4">
<div className="border-t border-gray-100 py-4">
<h3 className="font-medium text-sm mb-3">Gender</h3>
<div className="flex flex-col gap-2 text-sm text-gray-600">
<label className="flex items-center gap-2 cursor-pointer hover:text-black"><input className="accent-black rounded border-gray-300" type="checkbox"/> Men</label>
<label className="flex items-center gap-2 cursor-pointer hover:text-black"><input className="accent-black rounded border-gray-300" type="checkbox"/> Women</label>
<label className="flex items-center gap-2 cursor-pointer hover:text-black"><input className="accent-black rounded border-gray-300" type="checkbox"/> Unisex</label>
</div>
</div>
<div className="border-t border-gray-100 py-4">
<h3 className="font-medium text-sm mb-3">Shop By Price</h3>
<div className="flex flex-col gap-2 text-sm text-gray-600">
<label className="flex items-center gap-2 cursor-pointer hover:text-black"><input className="accent-black rounded border-gray-300" type="checkbox"/> Under $50</label>
<label className="flex items-center gap-2 cursor-pointer hover:text-black"><input className="accent-black rounded border-gray-300" type="checkbox"/> $50 - $100</label>
<label className="flex items-center gap-2 cursor-pointer hover:text-black"><input className="accent-black rounded border-gray-300" type="checkbox"/> $100 - $150</label>
<label className="flex items-center gap-2 cursor-pointer hover:text-black"><input className="accent-black rounded border-gray-300" type="checkbox"/> Over $150</label>
</div>
</div>
<div className="border-t border-gray-100 py-4">
<h3 className="font-medium text-sm mb-3">Color</h3>
<div className="grid grid-cols-4 gap-2">
<button className="w-6 h-6 rounded-full bg-black border border-gray-200"></button>
<button className="w-6 h-6 rounded-full bg-white border border-gray-200"></button>
<button className="w-6 h-6 rounded-full bg-red-600 border border-white"></button>
<button className="w-6 h-6 rounded-full bg-blue-600 border border-white"></button>
<button className="w-6 h-6 rounded-full bg-green-700 border border-white"></button>
<button className="w-6 h-6 rounded-full bg-yellow-400 border border-white"></button>
</div>
</div>
</aside>

<div className="flex-1">
<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-10">

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-square relative mb-3 overflow-hidden rounded-md">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-mens-shoes-jBrhbr.png"/>
<div className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wide">Best Seller</div>
</div>
<div className="flex flex-col gap-0.5">
<h3 className="font-medium text-sm text-gray-900 group-hover:underline decoration-1 underline-offset-4">Nike Air Force 1 '07</h3>
<p className="text-gray-500 text-xs font-light">Men's Shoes</p>
<p className="text-gray-500 text-xs font-light">2 Colors</p>
<p className="font-medium text-sm mt-1">$115</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-square relative mb-3 overflow-hidden rounded-md">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-low-retro-mens-shoes-dO2932.png"/>
</div>
<div className="flex flex-col gap-0.5">
<h3 className="font-medium text-sm text-gray-900 group-hover:underline decoration-1 underline-offset-4">Nike Dunk Low Retro</h3>
<p className="text-gray-500 text-xs font-light">Men's Shoes</p>
<p className="text-gray-500 text-xs font-light">4 Colors</p>
<p className="font-medium text-sm mt-1">$115</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-square relative mb-3 overflow-hidden rounded-md">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-max-270-mens-shoes-KkLcGR.png"/>
</div>
<div className="flex flex-col gap-0.5">
<h3 className="font-medium text-sm text-gray-900 group-hover:underline decoration-1 underline-offset-4">Nike Air Max 270</h3>
<p className="text-gray-500 text-xs font-light">Men's Shoes</p>
<p className="text-gray-500 text-xs font-light">8 Colors</p>
<p className="font-medium text-sm mt-1">$160</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-square relative mb-3 overflow-hidden rounded-md">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f4c78322-25e2-4bd5-9856-aa152771587a/air-jordan-1-mid-shoes-X5pM09.png"/>
<div className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-orange-600">Just In</div>
</div>
<div className="flex flex-col gap-0.5">
<h3 className="font-medium text-sm text-gray-900 group-hover:underline decoration-1 underline-offset-4">Air Jordan 1 Mid</h3>
<p className="text-gray-500 text-xs font-light">Shoes</p>
<p className="text-gray-500 text-xs font-light">1 Color</p>
<p className="font-medium text-sm mt-1">$125</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-square relative mb-3 overflow-hidden rounded-md">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9a9d2c20-3532-4753-9e45-21d331904b7c/blazer-mid-77-vintage-mens-shoes-nw30B2.png"/>
</div>
<div className="flex flex-col gap-0.5">
<h3 className="font-medium text-sm text-gray-900 group-hover:underline decoration-1 underline-offset-4">Nike Blazer Mid '77</h3>
<p className="text-gray-500 text-xs font-light">Men's Shoes</p>
<p className="text-gray-500 text-xs font-light">3 Colors</p>
<p className="font-medium text-sm mt-1">$105</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-square relative mb-3 overflow-hidden rounded-md">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-8c43093b-18f9-4b6e-827c-367f0f671131/air-max-90-mens-shoes-6n3vKB.png"/>
</div>
<div className="flex flex-col gap-0.5">
<h3 className="font-medium text-sm text-gray-900 group-hover:underline decoration-1 underline-offset-4">Nike Air Max 90</h3>
<p className="text-gray-500 text-xs font-light">Men's Shoes</p>
<p className="text-gray-500 text-xs font-light">6 Colors</p>
<p className="font-medium text-sm mt-1">$130</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-square relative mb-3 overflow-hidden rounded-md">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f153b6cb-a33c-444e-a1fb-27cb95a32b6e/invincible-3-mens-road-running-shoes-CLdFjq.png"/>
<div className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wide">Sustainable Materials</div>
</div>
<div className="flex flex-col gap-0.5">
<h3 className="font-medium text-sm text-gray-900 group-hover:underline decoration-1 underline-offset-4">Nike Invincible 3</h3>
<p className="text-gray-500 text-xs font-light">Road Running Shoes</p>
<p className="text-gray-500 text-xs font-light">5 Colors</p>
<p className="font-medium text-sm mt-1">$180</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-square relative mb-3 overflow-hidden rounded-md">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e8e60f77-5136-4076-8809-5a8286eb9346/metcon-9-mens-workout-shoes-lHbncQ.png"/>
</div>
<div className="flex flex-col gap-0.5">
<h3 className="font-medium text-sm text-gray-900 group-hover:underline decoration-1 underline-offset-4">Nike Metcon 9</h3>
<p className="text-gray-500 text-xs font-light">Workout Shoes</p>
<p className="text-gray-500 text-xs font-light">4 Colors</p>
<p className="font-medium text-sm mt-1">$150</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-square relative mb-3 overflow-hidden rounded-md">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/05963f2e-0a06-407c-a496-e3d6411516e8/pegasus-40-mens-road-running-shoes-TCcqBw.png"/>
</div>
<div className="flex flex-col gap-0.5">
<h3 className="font-medium text-sm text-gray-900 group-hover:underline decoration-1 underline-offset-4">Nike Pegasus 40</h3>
<p className="text-gray-500 text-xs font-light">Road Running Shoes</p>
<p className="text-gray-500 text-xs font-light">12 Colors</p>
<p className="font-medium text-sm mt-1">$130</p>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="px-8 py-3 rounded-full border border-gray-300 hover:border-black transition-colors text-sm font-medium active:scale-95">Load More</button>
</div>
</div>
</div>
</section>

<section className="bg-gray-100 py-20 px-6 text-center mt-20">
<div className="max-w-screen-lg mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Nike Membership</h2>
<p className="text-gray-600 max-w-md mx-auto mb-8 font-light">Join the greatest team in sports. Get early access to new drops, free shipping, and exclusive events.</p>
<div className="flex justify-center gap-3">
<button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-transform active:scale-95">Join Us</button>
<button className="bg-white border border-gray-300 text-black px-8 py-3 rounded-full text-sm font-medium hover:border-black transition-colors active:scale-95">Sign In</button>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-12">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">

<div className="col-span-2 lg:col-span-2">
<a className="inline-block text-2xl font-bold italic tracking-tighter mb-6" href="#">NIKE</a>
<p className="text-gray-400 text-sm font-light max-w-xs">
                        Innovation to inspire every athlete in the world.
                    </p>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-semibold text-sm tracking-tight">Find A Store</h4>
<ul className="flex flex-col gap-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-black transition-colors" href="#">Become A Member</a></li>
<li><a className="hover:text-black transition-colors" href="#">Student Discount</a></li>
<li><a className="hover:text-black transition-colors" href="#">Send Us Feedback</a></li>
</ul>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-semibold text-sm tracking-tight">Get Help</h4>
<ul className="flex flex-col gap-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-black transition-colors" href="#">Order Status</a></li>
<li><a className="hover:text-black transition-colors" href="#">Delivery</a></li>
<li><a className="hover:text-black transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-black transition-colors" href="#">Payment Options</a></li>
</ul>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-semibold text-sm tracking-tight">About Nike</h4>
<ul className="flex flex-col gap-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-black transition-colors" href="#">News</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Investors</a></li>
<li><a className="hover:text-black transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-400 font-light">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-black font-normal">United States</span>
<span>© 2023 Nike, Inc. All Rights Reserved</span>
</div>
<div className="flex gap-6">
<a className="hover:text-black transition-colors" href="#">Guides</a>
<a className="hover:text-black transition-colors" href="#">Terms of Sale</a>
<a className="hover:text-black transition-colors" href="#">Terms of Use</a>
<a className="hover:text-black transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
