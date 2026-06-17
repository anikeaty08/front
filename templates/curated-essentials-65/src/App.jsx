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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
<span className="text-white tracking-tighter font-semibold text-sm">TRND</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Discover</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Tech</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Lifestyle</a>
</div>

<div className="flex items-center gap-5">
<button className="text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors relative">
<iconify-icon height="22" icon="solar:cart-large-minimalistic-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1.5 w-4 h-4 bg-gray-900 text-white rounded-full text-xs flex items-center justify-center font-medium">3</span>
</button>
<button className="md:hidden text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="py-20 md:py-32 px-6 relative overflow-hidden flex flex-col items-center text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gray-50 rounded-full blur-3xl -z-10 opacity-50"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600">New arrivals dropped today</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 max-w-4xl mb-6 leading-tight">
            Elevate your everyday with curated essentials.
        </h1>
<p className="text-base md:text-lg text-gray-500 max-w-2xl mb-10 font-normal">
            Discover a handpicked selection of highly-rated, trending products designed to seamlessly integrate into your modern lifestyle. Quality without the compromise.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
                Shop Trending Now
            </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-900 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:play-circle-linear" width="18"></iconify-icon>
                View Collections
            </button>
</div>
</section>

<section className="border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
<div className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
<iconify-icon className="text-gray-400" height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-gray-900">Free Shipping</h3>
<p className="text-xs text-gray-500 mt-0.5">On orders over $50</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
<iconify-icon className="text-gray-400" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-gray-900">Verified Quality</h3>
<p className="text-xs text-gray-500 mt-0.5">Top-rated selections</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
<iconify-icon className="text-gray-400" height="24" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-gray-900">Easy Returns</h3>
<p className="text-xs text-gray-500 mt-0.5">30-day return policy</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
<iconify-icon className="text-gray-400" height="24" icon="solar:headphones-round-sound-linear" width="24"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-gray-900">24/7 Support</h3>
<p className="text-xs text-gray-500 mt-0.5">We're here to help</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Trending Right Now</h2>
<p className="text-sm text-gray-500 mt-2">The most sought-after products this week.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group" href="#">
                View all <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-100">
<img alt="Noise Cancelling Earbuds" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm border border-gray-200 flex items-center gap-2 hover:bg-gray-50 w-[calc(100%-2rem)] justify-center">
<iconify-icon height="18" icon="solar:cart-plus-linear" width="18"></iconify-icon> Add to Cart
                    </button>

<div className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-md text-xs font-medium text-gray-900 shadow-sm border border-gray-100">Bestseller</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 line-clamp-1">Aura Studio ANC Headphones</h3>
<p className="text-xs text-gray-500 mt-1">Tech / Audio</p>
</div>
<p className="text-sm font-medium text-gray-900">$249</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-100">
<img alt="Ceramic Mug" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm border border-gray-200 flex items-center gap-2 hover:bg-gray-50 w-[calc(100%-2rem)] justify-center">
<iconify-icon height="18" icon="solar:cart-plus-linear" width="18"></iconify-icon> Add to Cart
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 line-clamp-1">Artisan Ceramic Dripper Set</h3>
<p className="text-xs text-gray-500 mt-1">Home / Kitchen</p>
</div>
<p className="text-sm font-medium text-gray-900">$45</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-100">
<img alt="Smart Watch" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm border border-gray-200 flex items-center gap-2 hover:bg-gray-50 w-[calc(100%-2rem)] justify-center">
<iconify-icon height="18" icon="solar:cart-plus-linear" width="18"></iconify-icon> Add to Cart
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 line-clamp-1">Titanium Smart Watch Band</h3>
<p className="text-xs text-gray-500 mt-1">Accessories</p>
</div>
<p className="text-sm font-medium text-gray-900">$89</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-100">
<img alt="Desk Organizer" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm border border-gray-200 flex items-center gap-2 hover:bg-gray-50 w-[calc(100%-2rem)] justify-center">
<iconify-icon height="18" icon="solar:cart-plus-linear" width="18"></iconify-icon> Add to Cart
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 line-clamp-1">Modular Desk Organizer</h3>
<p className="text-xs text-gray-500 mt-1">Office / Productivity</p>
</div>
<p className="text-sm font-medium text-gray-900">$65</p>
</div>
</div>

<div className="group cursor-pointer hidden md:block">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-100">
<img alt="Diffuser" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm border border-gray-200 flex items-center gap-2 hover:bg-gray-50 w-[calc(100%-2rem)] justify-center">
<iconify-icon height="18" icon="solar:cart-plus-linear" width="18"></iconify-icon> Add to Cart
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 line-clamp-1">Stone Essential Oil Diffuser</h3>
<p className="text-xs text-gray-500 mt-1">Home / Wellness</p>
</div>
<p className="text-sm font-medium text-gray-900">$110</p>
</div>
</div>

<div className="group cursor-pointer hidden md:block">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-100">
<img alt="Laptop Stand" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm border border-gray-200 flex items-center gap-2 hover:bg-gray-50 w-[calc(100%-2rem)] justify-center">
<iconify-icon height="18" icon="solar:cart-plus-linear" width="18"></iconify-icon> Add to Cart
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 line-clamp-1">Ergonomic Laptop Riser</h3>
<p className="text-xs text-gray-500 mt-1">Tech / Office</p>
</div>
<p className="text-sm font-medium text-gray-900">$55</p>
</div>
</div>

<div className="group cursor-pointer hidden lg:block">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-100">
<img alt="Water Bottle" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm border border-gray-200 flex items-center gap-2 hover:bg-gray-50 w-[calc(100%-2rem)] justify-center">
<iconify-icon height="18" icon="solar:cart-plus-linear" width="18"></iconify-icon> Add to Cart
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 line-clamp-1">Matte Thermal Flask</h3>
<p className="text-xs text-gray-500 mt-1">Lifestyle / Travel</p>
</div>
<p className="text-sm font-medium text-gray-900">$38</p>
</div>
</div>

<div className="group cursor-pointer hidden lg:block">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-100 bg-[url('https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm border border-gray-200 flex items-center gap-2 hover:bg-gray-50 w-[calc(100%-2rem)] justify-center">
<iconify-icon height="18" icon="solar:cart-plus-linear" width="18"></iconify-icon> Add to Cart
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 line-clamp-1">Wireless Charging Pad</h3>
<p className="text-xs text-gray-500 mt-1">Tech / Accessories</p>
</div>
<p className="text-sm font-medium text-gray-900">$42</p>
</div>
</div>
</div>
<div className="mt-12 flex justify-center sm:hidden">
<button className="px-6 py-3 border border-gray-200 text-gray-900 rounded-full text-sm font-medium w-full">View all products</button>
</div>
</section>

<section className="py-16 px-6 max-w-7xl mx-auto border-t border-gray-100">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-gray-50 rounded-3xl p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group border border-gray-100 cursor-pointer">
<img alt="Workspace" className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-medium rounded-full mb-4">Workspace Setup</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">The Minimalist Desk</h3>
<p className="text-sm text-gray-200 max-w-md mb-6">Upgrade your productivity with our curated collection of desk accessories designed for deep focus.</p>
<button className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
                        Explore Collection <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="bg-gray-50 rounded-3xl p-6 flex-1 relative overflow-hidden group border border-gray-100 cursor-pointer flex flex-col justify-end min-h-[200px]">
<img alt="Tech" className="absolute inset-0 w-full h-full object-cover object-center opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
<div className="relative z-10">
<h3 className="text-lg font-semibold tracking-tight text-white mb-1">Everyday Carry</h3>
<p className="text-xs text-gray-300">Pocket-sized essentials.</p>
</div>
</div>
<div className="bg-gray-50 rounded-3xl p-6 flex-1 relative overflow-hidden group border border-gray-100 cursor-pointer flex flex-col justify-end min-h-[200px]">
<img alt="Home" className="absolute inset-0 w-full h-full object-cover object-center opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
<div className="relative z-10">
<h3 className="text-lg font-semibold tracking-tight text-white mb-1">Modern Living</h3>
<p className="text-xs text-gray-300">Elevate your space.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-100 mt-12 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
<span className="text-white tracking-tighter font-semibold text-sm">TRND</span>
</div>
</a>
<p className="text-sm text-gray-500 mb-6 font-normal">Sourcing the best trending products so you don't have to. Quality guaranteed.</p>
<div className="flex items-center gap-4">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon height="20" icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">All Products</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Trending</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Track Order</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Stay in the loop</h4>
<p className="text-sm text-gray-500 mb-4 font-normal">Get early access to drops and exclusive discounts.</p>
<form className="flex flex-col gap-2">
<input className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-shadow" placeholder="Enter your email" type="email"/>
<button className="w-full px-4 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500 font-normal">© 2024 TRND Essentials. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
