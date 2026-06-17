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
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-gray-900 flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-gray-900 rounded-full"></div>
                AURA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#about">About</a>
<a className="hover:text-gray-900 transition-colors" href="#categories">Categories</a>
<a className="hover:text-gray-900 transition-colors" href="#products">Products</a>
<a className="hover:text-gray-900 transition-colors" href="#brands">Brands</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors" href="#contact">
                    Contact Us
                </a>
<button className="md:hidden text-gray-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="home">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Sustainable Sourcing 2024
                    </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 leading-[1.1]">
                        Essentials for <br/> <span className="text-gray-400">everyday living.</span>
</h1>
<p className="text-lg text-gray-500 leading-relaxed max-w-md">
                        We curate and distribute premium consumer goods that elevate daily routines. Pure ingredients, transparent supply chains, and timeless quality.
                    </p>
<div className="flex items-center gap-4 pt-4">
<a className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2" href="#products">
                            Browse Collection
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="px-6 py-3 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all" href="#about">
                            Our Philosophy
                        </a>
</div>
</div>
<div className="w-full md:w-1/2 relative">
<div className="aspect-[4/5] md:aspect-square bg-gray-50 rounded-2xl overflow-hidden relative group">
<img alt="FMCG Minimalist" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
</div>

<div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-6 rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 max-w-xs">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-900">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Eco-Certified</p>
<p className="text-xs text-gray-500">100% Recyclable Packaging</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-gray-50/50 py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-1">
<h3 className="text-3xl font-medium tracking-tight text-gray-900">2M+</h3>
<p className="text-sm text-gray-500">Units Distributed</p>
</div>
<div className="space-y-1">
<h3 className="text-3xl font-medium tracking-tight text-gray-900">15+</h3>
<p className="text-sm text-gray-500">Global Markets</p>
</div>
<div className="space-y-1">
<h3 className="text-3xl font-medium tracking-tight text-gray-900">500+</h3>
<p className="text-sm text-gray-500">Partner Brands</p>
</div>
<div className="space-y-1">
<h3 className="text-3xl font-medium tracking-tight text-gray-900">24h</h3>
<p className="text-sm text-gray-500">Logistics Turnaround</p>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="categories">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Curated Categories</h2>
<p className="text-gray-500 max-w-lg">Everything you need, nothing you don't. Our sectors are organized for efficiency and quality assurance.</p>
</div>
<a className="text-sm font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1 transition-colors" href="#">
                    View all sectors <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:apple" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Organic Foods</h3>
<p className="text-sm text-gray-500 leading-relaxed">Farm-to-table grains, produce, and pantry staples.</p>
</a>

<a className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Personal Care</h3>
<p className="text-sm text-gray-500 leading-relaxed">Dermatologically tested skincare and hygiene essentials.</p>
</a>

<a className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Home Care</h3>
<p className="text-sm text-gray-500 leading-relaxed">Eco-friendly cleaning solutions and household tools.</p>
</a>

<a className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:cup-soda" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Beverages</h3>
<p className="text-sm text-gray-500 leading-relaxed">Premium hydration, juices, and functional drinks.</p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2 block">New Arrivals</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Signature Collection</h2>
<p className="text-gray-500">Explore our highest rated products, distributed globally with care and precision.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200 mb-4">
<img alt="Product" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-gray-900">Mineral Spring Water</h3>
<p className="mt-1 text-sm text-gray-500">Beverages • 500ml</p>
</div>
<p className="text-sm font-medium text-gray-900">$2.50</p>
</div>
<button className="absolute bottom-20 right-4 p-2 bg-white rounded-full shadow-sm text-gray-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="group relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200 mb-4">
<img alt="Product" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-gray-900">Botanical Serum</h3>
<p className="mt-1 text-sm text-gray-500">Personal Care • 30ml</p>
</div>
<p className="text-sm font-medium text-gray-900">$24.00</p>
</div>
<button className="absolute bottom-20 right-4 p-2 bg-white rounded-full shadow-sm text-gray-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="group relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200 mb-4">
<img alt="Product" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-gray-900">Whole Grain Oats</h3>
<p className="mt-1 text-sm text-gray-500">Pantry • 1kg</p>
</div>
<p className="text-sm font-medium text-gray-900">$5.80</p>
</div>
<button className="absolute bottom-20 right-4 p-2 bg-white rounded-full shadow-sm text-gray-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-sm font-medium text-gray-900 border-b border-gray-300 pb-0.5 hover:border-gray-900 transition-colors">Load more products</button>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-100" id="brands">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-gray-400 mb-12">TRUSTED BY INNOVATIVE RETAILERS</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-gray-800">
<iconify-icon className="text-gray-900" icon="lucide:hexagon"></iconify-icon> ACME CORP
                </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-gray-800">
<iconify-icon className="text-gray-900" icon="lucide:triangle"></iconify-icon> VERIDIAN
                </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-gray-800">
<iconify-icon className="text-gray-900" icon="lucide:circle"></iconify-icon> ORBITAL
                </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-gray-800">
<iconify-icon className="text-gray-900" icon="lucide:square"></iconify-icon> NEXUS
                </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-gray-800">
<iconify-icon className="text-gray-900" icon="lucide:diamond"></iconify-icon> PRISMA
                </div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">Redefining the <br/>supply chain.</h2>
<div className="space-y-6 text-gray-500">
<p>
                             Founded with a vision to streamline the flow of high-quality consumer goods, Aura acts as the bridge between premium manufacturers and conscientious retailers.
                         </p>
<p>
                             We leverage data-driven logistics to ensure freshness and reduce waste, prioritizing partners who adhere to strict environmental and ethical standards.
                         </p>
<ul className="space-y-3 pt-4">
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-green-600" icon="lucide:check"></iconify-icon> Carbon-neutral logistics network
                             </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-green-600" icon="lucide:check"></iconify-icon> Direct-from-source procurement
                             </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-green-600" icon="lucide:check"></iconify-icon> 24/7 retailer support
                             </li>
</ul>
</div>
</div>
<div className="relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Warehouse" className="rounded-xl object-cover h-64 w-full bg-gray-100" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<img alt="Store" className="rounded-xl object-cover h-64 w-full bg-gray-100 translate-y-8" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Partner with us.</h2>
<p className="text-gray-400 mb-8 max-w-md">Whether you are a retailer looking to stock our products or a brand seeking distribution, we'd love to hear from you.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-gray-800 rounded-lg">
<iconify-icon className="text-gray-300" icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Headquarters</h4>
<p className="text-gray-400 text-sm mt-1">100 Innovation Dr, Suite 500<br/>Seattle, WA 98101</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-gray-800 rounded-lg">
<iconify-icon className="text-gray-300" icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Email</h4>
<p className="text-gray-400 text-sm mt-1">hello@aura-goods.com</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8 text-gray-900">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">First Name</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all text-sm" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">Last Name</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all text-sm" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">Email Address</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all text-sm" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">Inquiry Type</label>
<div className="relative">
<select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all text-sm appearance-none">
<option>Distribution Inquiry</option>
<option>Wholesale Order</option>
<option>Press</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-gray-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">Message</label>
<textarea className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all text-sm" rows="3"></textarea>
</div>
<button className="w-full py-3 bg-gray-900 text-white font-medium text-sm rounded-lg hover:bg-gray-800 transition-colors flex justify-center items-center gap-2" type="button">
                            Send Message <iconify-icon icon="lucide:send" width="14"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-gray-900 rounded-full"></div>
<span className="text-sm font-semibold tracking-tight text-gray-900">AURA</span>
</div>
<p className="text-sm text-gray-400">© 2024 Aura Goods Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
