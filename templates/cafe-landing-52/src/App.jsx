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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
coffee: {
50: '#fdf8f6',
100: '#f2e8e5',
200: '#eaddd7',
300: '#e0cec7',
800: '#4a3b32',
900: '#2d241e',
}
}
}
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-stone-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<div className="h-8 w-8 bg-stone-900 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold text-lg">A</span>
</div>
<span className="self-center text-lg font-semibold whitespace-nowrap tracking-tighter text-stone-900 group-hover:text-stone-600 transition-colors">ANNAPURNA BREWS</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-stone-900 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all" type="button">Order Online</button>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-500 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-stone-100 rounded-lg bg-stone-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-stone-900 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-stone-600 md:p-0 transition-colors" href="#about">About</a>
</li>
<li>
<a className="block py-2 px-3 text-stone-900 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-stone-600 md:p-0 transition-colors" href="#menu">Menu</a>
</li>
<li>
<a className="block py-2 px-3 text-stone-900 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-stone-600 md:p-0 transition-colors" href="#reviews">Reviews</a>
</li>
<li className="">
<a className="block py-2 px-3 text-stone-900 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-stone-600 md:p-0 transition-colors" href="#location">Location</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-800 text-xs font-medium mb-6 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Now Serving in Surat
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 mb-6 leading-[1.1]">
                    Surat’s Most Loved <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-600 to-stone-900">Café Experience</span>
</h1>
<p className="text-lg text-stone-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Fresh, flavorful, and made with love. Taste that feels like home in the heart of the Textile Market.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2 group" href="#menu">
                        View Menu
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 font-medium rounded-full transition-all hover:bg-stone-50 flex items-center justify-center gap-2" href="#location">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="18"></iconify-icon>
                        Get Directions
                    </a>
</div>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 opacity-90">
<div className="space-y-4 md:space-y-6 translate-y-8">
<img alt="Coffee Latte" className="w-full h-64 object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 grayscale-[20%] hover:grayscale-0" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4 md:space-y-6">
<img alt="Cafe Interior" className="w-full h-48 object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 grayscale-[20%] hover:grayscale-0" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Coffee Shop Vibes" className="w-full h-64 object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 grayscale-[20%] hover:grayscale-0" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4 md:space-y-6 translate-y-12">
<img alt="Fresh Pastry" className="w-full h-64 object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 grayscale-[20%] hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="space-y-4 md:space-y-6">
<img alt="Coffee Beans" className="w-full h-64 object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 grayscale-[20%] hover:grayscale-0" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Latte Art" className="w-full h-48 object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 grayscale-[20%] hover:grayscale-0" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-white via-transparent to-transparent -z-10"></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 -z-10"></div>
<div className="absolute top-40 -left-20 w-72 h-72 bg-stone-200 rounded-full blur-3xl opacity-30 -z-10"></div>
</section>

<section className="py-10 border-y border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 select-none group">
<div className="w-6 h-6 border-2 border-stone-900 rounded-full"></div>
<span className="text-xl font-bold tracking-tighter text-stone-900">ANNAPURNA</span>
</div>

<div className="flex items-center gap-2 select-none group">
<span className="text-lg font-mono tracking-widest text-stone-900 border-b border-stone-900 pb-0.5">annapurna.brews</span>
</div>

<div className="flex flex-col items-center leading-none select-none group">
<span className="text-xs font-semibold tracking-[0.3em] text-stone-900">ANNAPURNA</span>
<span className="text-lg font-light tracking-widest text-stone-600">CAFÉ</span>
</div>

<div className="flex items-center select-none group">
<span className="bg-stone-900 text-white px-2 py-1 text-sm font-semibold tracking-tight">AB</span>
<span className="border border-l-0 border-stone-900 px-2 py-1 text-sm font-medium text-stone-900">ANNAPURNA</span>
</div>
</div>
</section>

<section className="bg-stone-100 py-6">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-evenly gap-6 text-sm font-medium text-stone-600">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-800" icon="lucide:utensils"></iconify-icon>
<span>Premium Dine-in</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-800" icon="lucide:car"></iconify-icon>
<span>Quick Drive-through</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-800" icon="lucide:package-check"></iconify-icon>
<span>No-contact Delivery</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-800" icon="lucide:wifi"></iconify-icon>
<span>Free High-speed WiFi</span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="about">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute inset-0 bg-stone-200 rounded-2xl rotate-3 transform transition-transform group-hover:rotate-6"></div>
<img alt="Cafe Ambience" className="relative rounded-2xl shadow-lg border border-white w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-stone-100 max-w-xs">
<p className="text-stone-900 font-medium text-sm">"Superb Taste of Surat"</p>
<div className="flex text-yellow-400 gap-0.5 mt-1 text-xs">
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
</div>
</div>
</div>
<div>
<h2 className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-3">About Us</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6 tracking-tight">The Best Coffee &amp;Vibes in Salabatpura</h3>
<p className="text-stone-600 leading-relaxed mb-6">
                    Nestled near the bustling Textile Markets, Annapurna Brews has quickly become a sanctuary for flavor seekers. We are loved for our yummy, fresh, and unique flavors that bring a modern twist to the superb taste of Surat.
                </p>
<p className="text-stone-600 leading-relaxed mb-8">
                    Whether you're taking a break from shopping or meeting friends, our clean, comfortable ambience and friendly staff ensure every visit feels special.
                </p>
<div className="grid grid-cols-2 gap-6">
<div className="border-l-2 border-stone-200 pl-4">
<h4 className="text-2xl font-semibold text-stone-900">8+</h4>
<p className="text-sm text-stone-500">Years of Experience</p>
</div>
<div className="border-l-2 border-stone-200 pl-4">
<h4 className="text-2xl font-semibold text-stone-900">5.0</h4>
<p className="text-sm text-stone-500">Google Rating</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-stone-100 border-t pt-24 pb-24" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight mb-4">Our Favorites</h2>
<p className="text-stone-500 max-w-lg mx-auto">Explore our curated menu of beverages, snacks, and wholesome meals made fresh on order.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all bg-stone-50/50">
<div className="flex justify-between items-start mb-4">
<div className="bg-white p-2 rounded-lg border border-stone-100 shadow-sm">
<iconify-icon className="text-stone-700" icon="lucide:coffee" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-stone-900">₹149</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Hazelnut Cold Coffee</h3>
<p className="text-sm text-stone-500 mb-4">Rich espresso blended with creamy milk and premium hazelnut syrup, topped with ice.</p>
<button className="text-xs font-medium text-stone-900 underline decoration-stone-300 hover:decoration-stone-900 underline-offset-4 transition-all">Add to order</button>
</div>

<div className="group p-6 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all bg-stone-50/50">
<div className="flex justify-between items-start mb-4">
<div className="bg-white p-2 rounded-lg border border-stone-100 shadow-sm">
<iconify-icon className="text-stone-700" icon="lucide:sandwich" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-stone-900">₹129</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Bombay Masala Grill</h3>
<p className="text-sm text-stone-500 mb-4">Spiced potato filling, cucumber, tomato, and cheese grilled to perfection in jumbo bread.</p>
<button className="text-xs font-medium text-stone-900 underline decoration-stone-300 hover:decoration-stone-900 underline-offset-4 transition-all">Add to order</button>
</div>

<div className="group p-6 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all bg-stone-50/50">
<div className="flex justify-between items-start mb-4">
<div className="bg-white p-2 rounded-lg border border-stone-100 shadow-sm">
<iconify-icon className="text-stone-700" icon="lucide:pizza" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-stone-900">₹199</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Peri Peri Paneer Pizza</h3>
<p className="text-sm text-stone-500 mb-4">Thin crust topped with spicy peri peri sauce, marinated paneer cubes, and mozzarella.</p>
<button className="text-xs font-medium text-stone-900 underline decoration-stone-300 hover:decoration-stone-900 underline-offset-4 transition-all">Add to order</button>
</div>

<div className="group p-6 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all bg-stone-50/50">
<div className="flex justify-between items-start mb-4">
<div className="bg-white p-2 rounded-lg border border-stone-100 shadow-sm">
<iconify-icon className="text-stone-700" icon="lucide:cup-soda" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-stone-900">₹99</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Blue Lagoon Mojito</h3>
<p className="text-sm text-stone-500 mb-4">Refreshing curacao syrup, lemon, mint leaves and sparkling soda.</p>
<button className="text-xs font-medium text-stone-900 underline decoration-stone-300 hover:decoration-stone-900 underline-offset-4 transition-all">Add to order</button>
</div>

<div className="group p-6 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all bg-stone-50/50">
<div className="flex justify-between items-start mb-4">
<div className="bg-white border-stone-100 border rounded-lg pt-2 pr-2 pb-2 pl-2 shadow-sm">
<iconify-icon className="text-stone-700" icon="lucide:croissant" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-stone-900">₹60</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Bun Maska</h3>
<p className="text-sm text-stone-500 mb-4">Fresh soft bun laden with generous amounts of butter. A classic companion for tea.</p>
<button className="text-xs font-medium text-stone-900 underline decoration-stone-300 hover:decoration-stone-900 underline-offset-4 transition-all">Add to order</button>
</div>

<div className="group p-6 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all bg-stone-50/50">
<div className="flex justify-between items-start mb-4">
<div className="bg-white p-2 rounded-lg border border-stone-100 shadow-sm">
<iconify-icon className="text-stone-700" icon="lucide:ice-cream" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-stone-900">₹110</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Brownie with Ice Cream</h3>
<p className="text-sm text-stone-500 mb-4">Warm walnut brownie served with a scoop of vanilla and hot chocolate fudge.</p>
<button className="text-xs font-medium text-stone-900 underline decoration-stone-300 hover:decoration-stone-900 underline-offset-4 transition-all">Add to order</button>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors" href="#">
                    View Full Menu
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight mb-12 text-center">Loved by Surat</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
<div className="flex text-yellow-500 mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-700 mb-6 leading-relaxed">"Superb taste of Surat 🥰. The ambience is perfect for a quick meeting or chilling with friends."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-xs">NB</div>
<div>
<h4 className="text-sm font-semibold text-stone-900">Nilesh Borse</h4>
<span className="text-xs text-stone-400">Local Guide</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
<div className="flex text-yellow-500 mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-700 mb-6 leading-relaxed">"Wow, yummy taste 😋. Probably the best sandwich I've had in the textile market area. Highly recommended!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-xs">LB</div>
<div>
<h4 className="text-sm font-semibold text-stone-900">Lalji Bhai</h4>
<span className="text-xs text-stone-400">Customer</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
<div className="flex text-yellow-500 mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-700 mb-6 leading-relaxed">"Taste Something Best 😜🤤. The cold coffee is thick and delicious. Friendly staff too."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-xs">MA</div>
<div>
<h4 className="text-sm font-semibold text-stone-900">Makrani Azim</h4>
<span className="text-xs text-stone-400">Foodie</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-0 grid md:grid-cols-2" id="location">
<div className="bg-white p-12 md:p-24 flex flex-col justify-center border-t border-r border-stone-200">
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-8">Visit Us</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0 text-stone-900">
<iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-900 mb-1">Address</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                            P9 Annapurna Textile Market, Kamela Darwaja,
                            Beside Universal Textile Market, Ring Road,
                            Opposite Millennium Textile Market,
                            Salabatpura, Surat, Gujarat 395003
                        </p>
<p className="text-stone-400 text-xs mt-2 font-mono">Plus Code: 5RQR+P2 Surat, Gujarat</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0 text-stone-900">
<iconify-icon icon="lucide:clock" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-900 mb-1">Opening Hours</h3>
<p className="text-stone-600 text-sm flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Open Now · Closes 9 PM
                        </p>
<p className="text-stone-500 text-xs mt-1">Monday - Sunday</p>
</div>
</div>
<div className="flex gap-4 pt-4">
<button className="px-6 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon> Call Now
                    </button>
<button className="px-6 py-2.5 bg-white border border-stone-200 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors">
                        Get Directions
                    </button>
</div>
</div>
</div>
<div className="h-96 md:h-auto bg-stone-200 relative">
<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.033663737568!2d72.8397!3d21.1860!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSalabatpura%2C%20Surat%2C%20Gujarat%20395002!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) contrast(1.2)'}} width="100%">
</iframe>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center space-x-2 mb-4" href="#">
<div className="h-6 w-6 bg-stone-900 rounded flex items-center justify-center text-white">
<span className="font-semibold text-xs">A</span>
</div>
<span className="text-md font-semibold tracking-tighter text-stone-900">ANNAPURNA BREWS</span>
</a>
<p className="text-stone-500 text-sm max-w-sm leading-relaxed">
                        Surat's favorite spot for freshly brewed coffee, delicious snacks, and moments that matter. Located in the heart of the textile hub.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Our Menu</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Connect</h4>
<div className="flex space-x-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2024 Annapurna Brews. All rights reserved.</p>
<p className="text-xs text-stone-400 flex items-center gap-1">
                    Made with <iconify-icon className="text-red-400" icon="lucide:heart" width="10"></iconify-icon> in Surat
                </p>
</div>
</div>
</footer>

    </>
  );
}
