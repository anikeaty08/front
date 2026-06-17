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



        function navigate(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.remove('block');
                el.classList.add('hidden');
            });
            // Show targeted page
            const target = document.getElementById('page-' + pageId);
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('block');
            }
            // Scroll to top to simulate new page load
            window.scrollTo({ top: 0, behavior: 'auto' });
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
      

<nav className="fixed top-0 left-0 w-full h-16 bg-[#FFFFFF] border-b border-[#E0E0E0] z-50 flex items-center">
<div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">

<button className="tracking-tighter font-medium text-xl text-[#000000] focus:outline-none" onclick="navigate('home')">
                E L V T
            </button>

<div className="hidden md:flex items-center gap-8 text-sm">
<button className="hover:text-[#000000] transition-colors" onclick="navigate('listing')">Men</button>
<button className="hover:text-[#000000] transition-colors" onclick="navigate('listing')">Women</button>
<button className="hover:text-[#000000] transition-colors" onclick="navigate('listing')">Objects</button>
<button className="hover:text-[#000000] transition-colors" onclick="navigate('listing')">Electronics</button>
</div>

<div className="flex items-center gap-6">
<button className="text-[#333333] hover:text-[#000000] transition-colors flex">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-[#333333] hover:text-[#000000] transition-colors flex relative" onclick="navigate('cart')">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#000000]"></span>
</button>
<button className="text-[#333333] hover:text-[#000000] transition-colors flex hidden sm:flex">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="pt-16 pb-24 min-h-screen">

<div className="page-view block" id="page-home">

<section className="max-w-[1200px] mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[50vh]">
<div className="flex flex-col items-start gap-6">
<h1 className="text-4xl md:text-5xl font-medium text-[#000000] tracking-tight leading-tight">
                            Elevate your <br/>everyday carry.
                        </h1>
<p className="text-base text-[#666666] max-w-sm">
                            Discover our new collection of minimalist essentials designed for modern life.
                        </p>
<button className="h-12 px-8 bg-[#000000] text-[#FFFFFF] rounded-lg text-sm font-normal hover:bg-[#1a1a1a] transition-all duration-200" onclick="navigate('listing')">
                            Shop Now
                        </button>
</div>
<div className="w-full aspect-square md:aspect-[4/3] bg-[#F5F5F5] rounded-lg overflow-hidden">
<img alt="Hero Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;sat=-100"/>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-12 border-t border-[#E0E0E0]">
<h2 className="text-2xl font-medium text-[#000000] tracking-tight mb-8">Shop by Category</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="h-[120px] bg-[#F5F5F5] rounded-lg flex items-center justify-center cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-200 group" onclick="navigate('listing')">
<span className="text-lg font-medium text-[#000000] group-hover:scale-[1.02] transition-transform">Apparel</span>
</div>
<div className="h-[120px] bg-[#F5F5F5] rounded-lg flex items-center justify-center cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-200 group" onclick="navigate('listing')">
<span className="text-lg font-medium text-[#000000] group-hover:scale-[1.02] transition-transform">Accessories</span>
</div>
<div className="h-[120px] bg-[#F5F5F5] rounded-lg flex items-center justify-center cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-200 group" onclick="navigate('listing')">
<span className="text-lg font-medium text-[#000000] group-hover:scale-[1.02] transition-transform">Footwear</span>
</div>
<div className="h-[120px] bg-[#F5F5F5] rounded-lg flex items-center justify-center cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-200 group" onclick="navigate('listing')">
<span className="text-lg font-medium text-[#000000] group-hover:scale-[1.02] transition-transform">Objects</span>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-12">
<h2 className="text-2xl font-medium text-[#000000] tracking-tight mb-8">Trending Now</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col gap-4" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;w=600&amp;q=80&amp;sat=-100"/>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Minimalist Watch</h3>
<p className="text-sm text-[#333333]">$145.00</p>
<div className="flex items-center gap-1 mt-1 text-[#666666]">
<iconify-icon className="text-[#000000]" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-xs">4.8 (124)</span>
</div>
</div>
</div>

<div className="bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col gap-4" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;w=600&amp;q=80&amp;sat=-100"/>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Studio Headphones</h3>
<p className="text-sm text-[#333333]">$299.00</p>
<div className="flex items-center gap-1 mt-1 text-[#666666]">
<iconify-icon className="text-[#000000]" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-xs">4.9 (89)</span>
</div>
</div>
</div>

<div className="bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col gap-4" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;w=600&amp;q=80&amp;sat=-100"/>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Essential Cotton Tee</h3>
<p className="text-sm text-[#333333]">$35.00</p>
<div className="flex items-center gap-1 mt-1 text-[#666666]">
<iconify-icon className="text-[#000000]" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-xs">4.7 (210)</span>
</div>
</div>
</div>

<div className="bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col gap-4" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&amp;fit=crop&amp;w=600&amp;q=80&amp;sat=-100"/>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Lounge Chair</h3>
<p className="text-sm text-[#333333]">$850.00</p>
<div className="flex items-center gap-1 mt-1 text-[#666666]">
<iconify-icon className="text-[#000000]" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-xs">5.0 (12)</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-16">
<div className="w-full bg-[#F5F5F5] rounded-lg p-12 flex flex-col items-center justify-center text-center gap-6">
<h2 className="text-3xl font-medium text-[#000000] tracking-tight">Focus on the essentials.</h2>
<p className="text-sm text-[#666666] max-w-md">Remove the noise and keep only what matters. Our new collection is strictly built on this philosophy.</p>
<button className="h-10 px-6 border border-[#E0E0E0] text-[#000000] rounded-lg text-sm font-normal hover:border-[#000000] bg-[#FFFFFF] transition-all duration-200" onclick="navigate('listing')">
                        Explore Collection
                    </button>
</div>
</section>
</div>

<div className="page-view hidden" id="page-listing">
<div className="max-w-[1200px] mx-auto px-6 py-8">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
<h1 className="text-3xl font-medium text-[#000000] tracking-tight">All Products</h1>
<div className="relative w-full sm:w-auto">
<select className="appearance-none w-full sm:w-48 h-10 px-4 pr-10 border border-[#E0E0E0] rounded-lg text-sm bg-[#FFFFFF] focus:outline-none focus:border-[#000000] cursor-pointer">
<option>Sort by: Featured</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Top Rated</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#666666]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-3 flex flex-col gap-8">

<div className="flex flex-col gap-4">
<h3 className="text-sm font-medium text-[#000000]">Price Range</h3>
<input max="1000" min="0" type="range" value="500"/>
<div className="flex justify-between text-xs text-[#666666]">
<span>$0</span>
<span>$500+</span>
</div>
</div>
<hr className="border-[#E0E0E0]"/>

<div className="flex flex-col gap-4">
<h3 className="text-sm font-medium text-[#000000]">Category</h3>
<div className="flex flex-col gap-3">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-[#E0E0E0] rounded-[4px] flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-[#FFFFFF] hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-sm text-[#333333] group-hover:text-[#000000]">Apparel</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-[#E0E0E0] rounded-[4px] flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-[#FFFFFF] hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-sm text-[#333333] group-hover:text-[#000000]">Accessories</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-[#E0E0E0] rounded-[4px] flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-[#FFFFFF] hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-sm text-[#333333] group-hover:text-[#000000]">Electronics</span>
</label>
</div>
</div>
<hr className="border-[#E0E0E0]"/>

<div className="flex flex-col gap-4">
<h3 className="text-sm font-medium text-[#000000]">Rating</h3>
<div className="flex flex-col gap-3">
<label className="custom-radio flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden" name="rating" type="radio"/>
<div className="w-4 h-4 border border-[#E0E0E0] rounded-full flex items-center justify-center transition-colors">
<div className="w-2 h-2 rounded-full bg-transparent transform scale-0 transition-transform"></div>
</div>
<span className="text-sm text-[#333333] group-hover:text-[#000000]">4 Stars &amp; Up</span>
</label>
<label className="custom-radio flex items-center gap-3 cursor-pointer group">
<input className="hidden" name="rating" type="radio"/>
<div className="w-4 h-4 border border-[#E0E0E0] rounded-full flex items-center justify-center transition-colors">
<div className="w-2 h-2 rounded-full bg-transparent transform scale-0 transition-transform"></div>
</div>
<span className="text-sm text-[#333333] group-hover:text-[#000000]">3 Stars &amp; Up</span>
</label>
</div>
</div>
</div>

<div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 self-start">

<div className="bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col gap-4 group" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;w=600&amp;q=80&amp;sat=-100"/>
<div className="absolute inset-0 bg-[#000000]/5 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="h-10 px-6 bg-[#000000] text-[#FFFFFF] rounded-lg text-xs font-normal shadow-lg">View Details</button>
</div>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Minimalist Watch</h3>
<p className="text-sm text-[#333333]">$145.00</p>
</div>
</div>

<div className="bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col gap-4 group" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;w=600&amp;q=80&amp;sat=-100"/>
<div className="absolute inset-0 bg-[#000000]/5 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="h-10 px-6 bg-[#000000] text-[#FFFFFF] rounded-lg text-xs font-normal shadow-lg">View Details</button>
</div>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Studio Headphones</h3>
<p className="text-sm text-[#333333]">$299.00</p>
</div>
</div>

<div className="bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col gap-4 group" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;w=600&amp;q=80&amp;sat=-100"/>
<div className="absolute inset-0 bg-[#000000]/5 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="h-10 px-6 bg-[#000000] text-[#FFFFFF] rounded-lg text-xs font-normal shadow-lg">View Details</button>
</div>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Essential Cotton Tee</h3>
<p className="text-sm text-[#333333]">$35.00</p>
</div>
</div>

<div className="bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col gap-4 group" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&amp;fit=crop&amp;w=600&amp;q=80&amp;sat=-100"/>
<div className="absolute inset-0 bg-[#000000]/5 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="h-10 px-6 bg-[#000000] text-[#FFFFFF] rounded-lg text-xs font-normal shadow-lg">View Details</button>
</div>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Lounge Chair</h3>
<p className="text-sm text-[#333333]">$850.00</p>
</div>
</div>

<div className="bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col gap-4 group" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&amp;fit=crop&amp;w=600&amp;q=80&amp;sat=-100"/>
<div className="absolute inset-0 bg-[#000000]/5 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="h-10 px-6 bg-[#000000] text-[#FFFFFF] rounded-lg text-xs font-normal shadow-lg">View Details</button>
</div>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Ceramic Mug</h3>
<p className="text-sm text-[#333333]">$24.00</p>
</div>
</div>

<div className="bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col gap-4 group" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&amp;fit=crop&amp;w=600&amp;q=80&amp;sat=-100"/>
<div className="absolute inset-0 bg-[#000000]/5 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="h-10 px-6 bg-[#000000] text-[#FFFFFF] rounded-lg text-xs font-normal shadow-lg">View Details</button>
</div>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Leather Tote</h3>
<p className="text-sm text-[#333333]">$180.00</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden" id="page-detail">
<div className="max-w-[1200px] mx-auto px-6 py-8">

<div className="text-xs text-[#666666] mb-8 flex items-center gap-2">
<button className="hover:text-[#000000]" onclick="navigate('home')">Home</button>
<span>/</span>
<button className="hover:text-[#000000]" onclick="navigate('listing')">Electronics</button>
<span>/</span>
<span className="text-[#000000]">Studio Headphones</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

<div className="flex flex-col gap-4">
<div className="w-full aspect-square bg-[#F5F5F5] rounded-lg overflow-hidden">
<img alt="Product Main" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;sat=-100"/>
</div>
<div className="grid grid-cols-4 gap-4">
<button className="aspect-square bg-[#F5F5F5] rounded-lg border-2 border-[#000000] overflow-hidden">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;w=200&amp;q=80&amp;sat=-100"/>
</button>
<button className="aspect-square bg-[#F5F5F5] rounded-lg border border-transparent hover:border-[#E0E0E0] transition-colors overflow-hidden">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&amp;fit=crop&amp;w=200&amp;q=80&amp;sat=-100"/>
</button>
<button className="aspect-square bg-[#F5F5F5] rounded-lg border border-transparent hover:border-[#E0E0E0] transition-colors overflow-hidden">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&amp;fit=crop&amp;w=200&amp;q=80&amp;sat=-100"/>
</button>
<button className="aspect-square bg-[#F5F5F5] rounded-lg border border-transparent hover:border-[#E0E0E0] transition-colors overflow-hidden flex items-center justify-center text-[#666666] text-xs">
                                +2
                            </button>
</div>
</div>

<div className="flex flex-col gap-8">

<div className="flex flex-col gap-2">
<h1 className="text-3xl font-medium text-[#000000] tracking-tight">Studio Headphones</h1>
<div className="flex items-center gap-4">
<p className="text-xl font-medium text-[#000000]">$299.00</p>
<div className="flex items-center gap-1 text-[#666666] border-l border-[#E0E0E0] pl-4">
<iconify-icon className="text-[#000000]" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-sm">4.9 (89 reviews)</span>
</div>
</div>
</div>

<p className="text-sm text-[#666666] leading-relaxed">
                            Experience unparalleled audio clarity with our minimalist over-ear studio headphones. Designed with premium materials for maximum comfort and durability, featuring active noise cancellation and an impressive 30-hour battery life.
                        </p>

<div className="flex flex-col gap-4 border-y border-[#E0E0E0] py-6">
<h3 className="text-sm font-medium text-[#000000]">Select Style</h3>
<div className="flex gap-4">
<button className="px-6 py-2 border-2 border-[#000000] rounded-lg text-sm font-medium text-[#000000]">Matte Black</button>
<button className="px-6 py-2 border border-[#E0E0E0] rounded-lg text-sm text-[#666666] hover:border-[#000000] hover:text-[#000000] transition-colors">Graphite</button>
</div>
</div>

<div className="flex flex-col gap-4">
<button className="w-full h-12 bg-[#000000] text-[#FFFFFF] rounded-lg text-base font-normal hover:bg-[#1a1a1a] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-200" onclick="navigate('cart')">
                                Add to Cart
                            </button>
<p className="text-xs text-[#666666] text-center flex items-center justify-center gap-2">
<iconify-icon icon="solar:box-linear"></iconify-icon> Free shipping on orders over $150
                            </p>
</div>

<div className="flex flex-col mt-4">
<div className="border-b border-[#E0E0E0]">
<button className="w-full py-4 flex items-center justify-between text-sm font-medium text-[#000000]">
                                    Details &amp; Specs
                                    <iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
<div className="pb-4 text-sm text-[#666666] flex flex-col gap-2">
<p>• 40mm dynamic drivers</p>
<p>• Active Noise Cancellation (ANC)</p>
<p>• USB-C Fast Charging</p>
<p>• Weight: 245g</p>
</div>
</div>
<div className="border-b border-[#E0E0E0]">
<button className="w-full py-4 flex items-center justify-between text-sm font-medium text-[#000000]">
                                    Shipping &amp; Returns
                                    <iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="mt-24">
<h2 className="text-xl font-medium text-[#000000] tracking-tight mb-8">You Might Also Like</h2>
<div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x">
<div className="min-w-[240px] bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 snap-start flex flex-col gap-3" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;w=400&amp;q=80&amp;sat=-100"/>
</div>
<div>
<h3 className="text-sm font-medium text-[#000000]">Minimalist Watch</h3>
<p className="text-sm text-[#333333]">$145.00</p>
</div>
</div>
<div className="min-w-[240px] bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 snap-start flex flex-col gap-3" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&amp;fit=crop&amp;w=400&amp;q=80&amp;sat=-100"/>
</div>
<div>
<h3 className="text-sm font-medium text-[#000000]">Leather Tote</h3>
<p className="text-sm text-[#333333]">$180.00</p>
</div>
</div>
<div className="min-w-[240px] bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 snap-start flex flex-col gap-3" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&amp;fit=crop&amp;w=400&amp;q=80&amp;sat=-100"/>
</div>
<div>
<h3 className="text-sm font-medium text-[#000000]">Ceramic Mug</h3>
<p className="text-sm text-[#333333]">$24.00</p>
</div>
</div>
<div className="min-w-[240px] bg-[#F5F5F5] p-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 snap-start flex flex-col gap-3" onclick="navigate('detail')">
<div className="aspect-square bg-[#FFFFFF] rounded overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;w=400&amp;q=80&amp;sat=-100"/>
</div>
<div>
<h3 className="text-sm font-medium text-[#000000]">Essential Cotton Tee</h3>
<p className="text-sm text-[#333333]">$35.00</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden" id="page-cart">
<div className="max-w-[1200px] mx-auto px-6 py-8">
<h1 className="text-3xl font-medium text-[#000000] tracking-tight mb-8">Your Cart</h1>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-[#E0E0E0] text-xs font-medium text-[#666666] uppercase tracking-wider">
<div className="col-span-6">Product</div>
<div className="col-span-3 text-center">Quantity</div>
<div className="col-span-3 text-right">Total</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center py-4 border-b border-[#E0E0E0]">
<div className="col-span-1 sm:col-span-6 flex items-center gap-4">
<div className="w-20 h-20 bg-[#F5F5F5] rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;w=200&amp;q=80&amp;sat=-100"/>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Studio Headphones</h3>
<p className="text-xs text-[#666666]">Style: Matte Black</p>
<button className="text-xs text-[#666666] underline hover:text-[#000000] w-fit mt-1 text-left">Remove</button>
</div>
</div>
<div className="col-span-1 sm:col-span-3 flex sm:justify-center mt-2 sm:mt-0">
<div className="flex items-center border border-[#E0E0E0] rounded-lg h-10 w-24">
<button className="w-8 h-full flex items-center justify-center text-[#666666] hover:text-[#000000] hover:bg-[#F5F5F5] transition-colors rounded-l-lg">-</button>
<span className="w-8 text-center text-sm font-medium">1</span>
<button className="w-8 h-full flex items-center justify-center text-[#666666] hover:text-[#000000] hover:bg-[#F5F5F5] transition-colors rounded-r-lg">+</button>
</div>
</div>
<div className="col-span-1 sm:col-span-3 flex sm:justify-end text-sm font-medium text-[#000000]">
                                $299.00
                            </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center py-4 border-b border-[#E0E0E0]">
<div className="col-span-1 sm:col-span-6 flex items-center gap-4">
<div className="w-20 h-20 bg-[#F5F5F5] rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;w=200&amp;q=80&amp;sat=-100"/>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-sm font-medium text-[#000000]">Essential Cotton Tee</h3>
<p className="text-xs text-[#666666]">Size: L</p>
<button className="text-xs text-[#666666] underline hover:text-[#000000] w-fit mt-1 text-left">Remove</button>
</div>
</div>
<div className="col-span-1 sm:col-span-3 flex sm:justify-center mt-2 sm:mt-0">
<div className="flex items-center border border-[#E0E0E0] rounded-lg h-10 w-24">
<button className="w-8 h-full flex items-center justify-center text-[#666666] hover:text-[#000000] hover:bg-[#F5F5F5] transition-colors rounded-l-lg">-</button>
<span className="w-8 text-center text-sm font-medium">2</span>
<button className="w-8 h-full flex items-center justify-center text-[#666666] hover:text-[#000000] hover:bg-[#F5F5F5] transition-colors rounded-r-lg">+</button>
</div>
</div>
<div className="col-span-1 sm:col-span-3 flex sm:justify-end text-sm font-medium text-[#000000]">
                                $70.00
                            </div>
</div>
</div>

<div className="lg:col-span-4">
<div className="bg-[#F5F5F5] rounded-lg p-6 flex flex-col gap-6 sticky top-24">
<h2 className="text-lg font-medium text-[#000000]">Order Summary</h2>
<div className="flex flex-col gap-3 text-sm text-[#333333]">
<div className="flex justify-between">
<span>Subtotal</span>
<span>$369.00</span>
</div>
<div className="flex justify-between">
<span>Shipping</span>
<span>Free</span>
</div>
<div className="flex justify-between">
<span>Tax (Estimated)</span>
<span>$29.52</span>
</div>
</div>
<hr className="border-[#E0E0E0]"/>
<div className="flex justify-between text-base font-medium text-[#000000]">
<span>Total</span>
<span>$398.52</span>
</div>
<button className="h-12 w-full bg-[#000000] text-[#FFFFFF] rounded-lg text-base font-normal hover:bg-[#1a1a1a] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-200 mt-2" onclick="navigate('checkout')">
                                Proceed to Checkout
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden" id="page-checkout">
<div className="max-w-[1200px] mx-auto px-6 py-8">

<button className="text-sm text-[#666666] hover:text-[#000000] mb-6 flex items-center gap-2" onclick="navigate('cart')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Return to Cart
                </button>
<h1 className="text-3xl font-medium text-[#000000] tracking-tight mb-8">Checkout</h1>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-col-reverse lg:flex-row">

<div className="lg:col-span-7 flex flex-col gap-10 order-2 lg:order-1">

<div className="flex flex-col gap-6">
<h2 className="text-xl font-medium text-[#000000] tracking-tight border-b border-[#E0E0E0] pb-4">Contact Information</h2>
<div className="grid grid-cols-1 gap-4">
<input className="h-10 px-4 w-full border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:border-[#000000] transition-colors placeholder-[#666666]" placeholder="Email Address" type="email"/>
</div>
</div>

<div className="flex flex-col gap-6">
<h2 className="text-xl font-medium text-[#000000] tracking-tight border-b border-[#E0E0E0] pb-4">Shipping Address</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="h-10 px-4 w-full border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:border-[#000000] transition-colors placeholder-[#666666]" placeholder="First Name" type="text"/>
<input className="h-10 px-4 w-full border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:border-[#000000] transition-colors placeholder-[#666666]" placeholder="Last Name" type="text"/>
<input className="h-10 px-4 w-full border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:border-[#000000] transition-colors placeholder-[#666666] md:col-span-2" placeholder="Address" type="text"/>
<input className="h-10 px-4 w-full border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:border-[#000000] transition-colors placeholder-[#666666]" placeholder="City" type="text"/>
<input className="h-10 px-4 w-full border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:border-[#000000] transition-colors placeholder-[#666666]" placeholder="Postal Code" type="text"/>
</div>
</div>

<div className="flex flex-col gap-6">
<h2 className="text-xl font-medium text-[#000000] tracking-tight border-b border-[#E0E0E0] pb-4">Payment Method</h2>
<div className="flex flex-col border border-[#E0E0E0] rounded-lg overflow-hidden">
<label className="custom-radio flex items-center p-4 border-b border-[#E0E0E0] cursor-pointer group bg-[#F5F5F5]">
<input checked="" className="hidden" name="payment" type="radio"/>
<div className="w-4 h-4 border border-[#000000] rounded-full flex items-center justify-center transition-colors mr-3 shrink-0 bg-[#FFFFFF]">
<div className="w-2 h-2 rounded-full bg-[#000000] transform scale-1 transition-transform"></div>
</div>
<span className="text-sm font-medium text-[#000000]">Credit / Debit Card</span>
</label>

<div className="p-4 bg-[#FFFFFF] flex flex-col gap-4 border-b border-[#E0E0E0]">
<input className="h-10 px-4 w-full border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:border-[#000000] transition-colors placeholder-[#666666]" placeholder="Card Number" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="h-10 px-4 w-full border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:border-[#000000] transition-colors placeholder-[#666666]" placeholder="MM / YY" type="text"/>
<input className="h-10 px-4 w-full border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:border-[#000000] transition-colors placeholder-[#666666]" placeholder="CVC" type="text"/>
</div>
</div>
<label className="custom-radio flex items-center p-4 border-b border-[#E0E0E0] cursor-pointer group hover:bg-[#F5F5F5] transition-colors bg-[#FFFFFF]">
<input className="hidden" name="payment" type="radio"/>
<div className="w-4 h-4 border border-[#E0E0E0] rounded-full flex items-center justify-center transition-colors mr-3 shrink-0 bg-[#FFFFFF]">
<div className="w-2 h-2 rounded-full bg-transparent transform scale-0 transition-transform"></div>
</div>
<span className="text-sm font-medium text-[#333333] group-hover:text-[#000000]">UPI / Wallet</span>
</label>
<label className="custom-radio flex items-center p-4 cursor-pointer group hover:bg-[#F5F5F5] transition-colors bg-[#FFFFFF]">
<input className="hidden" name="payment" type="radio"/>
<div className="w-4 h-4 border border-[#E0E0E0] rounded-full flex items-center justify-center transition-colors mr-3 shrink-0 bg-[#FFFFFF]">
<div className="w-2 h-2 rounded-full bg-transparent transform scale-0 transition-transform"></div>
</div>
<span className="text-sm font-medium text-[#333333] group-hover:text-[#000000]">Cash on Delivery</span>
</label>
</div>
<button className="h-12 w-full bg-[#000000] text-[#FFFFFF] rounded-lg text-base font-normal hover:bg-[#1a1a1a] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-200 mt-4" onclick="navigate('home')">
                                Place Order
                            </button>
</div>
</div>

<div className="lg:col-span-5 order-1 lg:order-2">
<div className="bg-[#F5F5F5] rounded-lg p-6 flex flex-col gap-6 sticky top-24">

<div className="flex flex-col gap-4 border-b border-[#E0E0E0] pb-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-[#FFFFFF] rounded border border-[#E0E0E0] overflow-hidden shrink-0 relative">
<span className="absolute -top-2 -right-2 w-5 h-5 bg-[#666666] text-[#FFFFFF] text-[10px] flex items-center justify-center rounded-full z-10">1</span>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;w=150&amp;q=80&amp;sat=-100"/>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-[#000000]">Studio Headphones</h3>
<p className="text-xs text-[#666666]">Matte Black</p>
</div>
<span className="text-sm text-[#000000]">$299.00</span>
</div>
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-[#FFFFFF] rounded border border-[#E0E0E0] overflow-hidden shrink-0 relative">
<div className="absolute -top-1 -right-1 w-4 h-4 bg-[#666666] text-[#FFFFFF] text-[10px] flex items-center justify-center rounded-full z-10">2</div>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;w=150&amp;q=80&amp;sat=-100"/>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-[#000000]">Essential Cotton Tee</h3>
<p className="text-xs text-[#666666]">Size L</p>
</div>
<span className="text-sm text-[#000000]">$70.00</span>
</div>
</div>

<div className="flex flex-col gap-3 text-sm text-[#333333]">
<div className="flex justify-between">
<span>Subtotal</span>
<span>$369.00</span>
</div>
<div className="flex justify-between">
<span>Shipping</span>
<span>Free</span>
</div>
<div className="flex justify-between">
<span>Tax</span>
<span>$29.52</span>
</div>
</div>
<div className="border-t border-[#E0E0E0] pt-4 flex justify-between items-center text-lg font-medium text-[#000000]">
<span>Total</span>
<span>$398.52</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-[#FFFFFF] border-t border-[#E0E0E0] py-16 text-sm text-[#666666]">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-4">
<span className="tracking-tighter font-medium text-lg text-[#000000]">E L V T</span>
<p className="text-xs max-w-xs">Minimalist gear designed for the modern lifestyle. Keep only what matters.</p>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-medium text-[#000000]">Shop</h4>
<a className="hover:text-[#000000] transition-colors" href="#" onclick="navigate('listing'); return false;">Apparel</a>
<a className="hover:text-[#000000] transition-colors" href="#" onclick="navigate('listing'); return false;">Accessories</a>
<a className="hover:text-[#000000] transition-colors" href="#" onclick="navigate('listing'); return false;">Electronics</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-medium text-[#000000]">Support</h4>
<a className="hover:text-[#000000] transition-colors" href="#">FAQ</a>
<a className="hover:text-[#000000] transition-colors" href="#">Shipping</a>
<a className="hover:text-[#000000] transition-colors" href="#">Returns</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-medium text-[#000000]">Legal</h4>
<a className="hover:text-[#000000] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#000000] transition-colors" href="#">Terms of Service</a>
</div>
</div>
<div className="max-w-[1200px] mx-auto px-6 mt-16 pt-8 border-t border-[#E0E0E0] text-xs flex justify-between items-center">
<span>© 2024 ELVT. All rights reserved.</span>
<div className="flex gap-4">
<a className="hover:text-[#000000] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-[#000000] transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
