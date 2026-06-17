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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f1f22',
950: '#0a0a0b',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<div className="bg-zinc-900 text-white text-xs text-center py-2 tracking-wide font-medium">
        COMPLIMENTARY SHIPPING ON ALL ORDERS OVER $150
    </div>

<nav className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden p-1 text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Collection</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Editorial</a>
</div>

<a className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold tracking-tighter hover:opacity-70 transition-opacity" href="#">
                ZEN-Z
            </a>

<div className="flex items-center space-x-4 md:space-x-6">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hidden md:block text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors relative">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-zinc-900 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-medium">2</span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-[85vh] flex flex-col justify-end pb-24 px-6 md:px-12 overflow-hidden bg-zinc-50">

<div className="absolute inset-0 z-0">
<img alt="Hero background" className="w-full h-full object-cover opacity-90 grayscale brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto w-full">
<span className="inline-block px-3 py-1 mb-6 text-xs font-medium border border-zinc-300 rounded-full bg-white/50 backdrop-blur-sm tracking-wide text-zinc-600 uppercase">
                Fall / Winter 2024
            </span>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[0.9] reveal-text">
                SILENCE <br className="hidden md:block"/> IN CHAOS.
            </h1>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-8 border-t border-zinc-300 pt-8">
<p className="max-w-md text-base md:text-lg text-zinc-600 font-normal leading-relaxed mb-8 md:mb-0">
                    Engineered for the modern minimalist. High-fidelity fabrics meeting structural design.
                </p>
<a className="group flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all hover:pr-10" href="#">
                    Shop The Drop
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="border-y border-zinc-100 py-6 overflow-hidden bg-white">
<div className="flex whitespace-nowrap gap-16 md:gap-32 text-zinc-400 text-sm font-medium tracking-tight justify-center items-center opacity-70">
<span className="flex items-center gap-2"><iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon> SUSTAINABLE MATERIALS</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:box-linear" width="16"></iconify-icon> CARBON NEUTRAL SHIPPING</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon> LIFETIME GUARANTEE</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:globe-linear" width="16"></iconify-icon> WORLDWIDE DELIVERY</span>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Essential Layers</h2>
<p className="text-zinc-500 text-sm">Curated pieces for your daily uniform.</p>
</div>
<a className="text-sm font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-all" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-zinc-100 aspect-[3/4] mb-4">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] font-semibold tracking-wide uppercase">New</div>
<button className="absolute bottom-4 right-4 bg-white w-10 h-10 flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-lg">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Oversized Structure Tee</h3>
<p className="text-xs text-zinc-500 mt-1">Heavyweight Cotton</p>
</div>
<span className="text-sm font-medium text-zinc-900">$45.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-zinc-100 aspect-[3/4] mb-4">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white w-10 h-10 flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-lg">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Tech-Fleece Hoodie</h3>
<p className="text-xs text-zinc-500 mt-1">Storm Grey</p>
</div>
<span className="text-sm font-medium text-zinc-900">$120.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-zinc-100 aspect-[3/4] mb-4">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-zinc-900 text-white px-2 py-1 text-[10px] font-semibold tracking-wide uppercase">Sold Out</div>
<button className="absolute bottom-4 right-4 bg-white w-10 h-10 flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-lg cursor-not-allowed">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Utilitarian Cargo</h3>
<p className="text-xs text-zinc-500 mt-1">Water Resistant</p>
</div>
<span className="text-sm font-medium text-zinc-900">$140.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-zinc-100 aspect-[3/4] mb-4">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white w-10 h-10 flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-lg">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Merino Wool Beanie</h3>
<p className="text-xs text-zinc-500 mt-1">Black</p>
</div>
<span className="text-sm font-medium text-zinc-900">$35.00</span>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
<div className="relative h-96 lg:h-full overflow-hidden">
<img alt="Editorial" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center px-6 lg:px-24 py-16">
<div className="mb-6">
<iconify-icon className="text-zinc-400" icon="solar:stars-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-6">
                    AESTHETIC <br/> FUNCTIONALITY
                </h2>
<p className="text-zinc-600 leading-relaxed mb-10 text-sm md:text-base font-normal">
                    ZEN-Z sits at the intersection of Japanese minimalism and Western streetwear culture. We don't just make clothes; we engineer garments that remove the noise from your daily life. Every stitch serves a purpose.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-5 h-5 mt-0.5 text-zinc-900 flex-shrink-0">
<iconify-icon icon="solar:ruler-pen-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Precision Tailoring</h4>
<p className="text-xs text-zinc-500 mt-1">Cut for movement and structured silhouette.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-5 h-5 mt-0.5 text-zinc-900 flex-shrink-0">
<iconify-icon icon="solar:t-shirt-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Premium Fabrics</h4>
<p className="text-xs text-zinc-500 mt-1">Sourced from sustainable mills in Okayama.</p>
</div>
</div>
</div>
<div className="mt-12">
<button className="text-sm font-medium border-b border-zinc-900 pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-all">Read Our Philosophy</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-12 text-center">The Lookbook</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[100vh] md:h-[600px]">
<div className="md:col-span-8 relative rounded-sm overflow-hidden group">
<img alt="Lookbook 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" src="https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 text-white z-10">
<h3 className="text-lg font-medium">Urban Decay</h3>
<p className="text-xs opacity-80">Vol. 04</p>
</div>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="md:col-span-4 flex flex-col gap-4">
<div className="flex-1 relative rounded-sm overflow-hidden group">
<img alt="Lookbook 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 relative rounded-sm overflow-hidden group">
<img alt="Lookbook 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 text-white py-24 px-6">
<div className="max-w-3xl mx-auto text-center">
<iconify-icon className="text-zinc-400 mb-6 mx-auto" icon="solar:letter-linear" width="32"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">Join the Inner Circle</h2>
<p className="text-zinc-400 text-sm mb-10 font-normal">Early access to drops, exclusive archives, and private sales.</p>
<form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
<div className="flex-grow relative">
<input className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-white/20 focus:border-zinc-500 transition-all placeholder:text-zinc-500" placeholder="email@address.com" type="email"/>
</div>
<button className="bg-white text-zinc-900 px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap" type="button">
                    Subscribe
                </button>
</form>
<p className="text-zinc-600 text-[10px] mt-6">By subscribing you agree to our Privacy Policy. No spam, ever.</p>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter block mb-6" href="#">ZEN-Z</a>
<p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                        Redefining the modern silhouette through minimalist design and superior craftsmanship. 
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="brandico:instagram-filled" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="brandico:tiktok" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-sm mb-4">Shop</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4">Support</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Press</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-400 text-xs">© 2024 ZEN-Z Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-900" href="#">Privacy</a>
<a className="hover:text-zinc-900" href="#">Terms</a>
<a className="hover:text-zinc-900" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
