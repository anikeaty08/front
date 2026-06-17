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
brand: {
50: '#fff1f2',
100: '#ffe4e6',
500: '#f43f5e',
600: '#e11d48',
900: '#881337',
}
}
}
}
}



        // State
        let cart = [];
        
        // Router System
        function router(pageId, sectionId = null) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Hide all pages
            const pages = document.querySelectorAll('.page-view');
            pages.forEach(page => {
                page.classList.remove('active');
                // slight delay to allow display:none to apply after opacity
                setTimeout(() => {
                    if(!page.classList.contains('active')) {
                       // page.style.display = 'none'; 
                    }
                }, 300);
            });

            // Show target page
            const target = document.getElementById(`page-${pageId}`);
            if (target) {
                target.classList.add('active');
                target.classList.add('fade-enter');
                setTimeout(() => target.classList.remove('fade-enter'), 400);
            }

            // Scroll to section if specified
            if (sectionId) {
                setTimeout(() => {
                    const section = document.getElementById(`${sectionId}-section`);
                    if(section) section.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }

        // Product Details Logic
        function openProduct(title, price, img) {
            // Populate PDP
            document.getElementById('pdp-title').innerText = title;
            document.getElementById('pdp-price').innerText = price;
            document.getElementById('pdp-price-old').innerText = parseInt(price) + 400;
            document.getElementById('pdp-image').src = img;
            
            // Navigate
            router('product');
        }

        // Cart Logic
        function addToCartFromPDP() {
            const countEl = document.getElementById('nav-cart-count');
            let count = parseInt(countEl.innerText);
            count++;
            countEl.innerText = count;
            
            showToast('Added to Cart Successfully', 'success');
        }

        function showToast(message, type = 'default') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            const bg = type === 'success' ? 'bg-green-600' : 'bg-slate-900';
            
            toast.className = `${bg} text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 text-sm font-medium transform transition-all duration-300 translate-y-10 opacity-0 pointer-events-auto min-w-[200px]`;
            toast.innerHTML = `<iconify-icon icon="lucide:check-circle" width="16"></iconify-icon> ${message}`;
            
            container.appendChild(toast);
            
            // Animate in
            requestAnimationFrame(() => {
                toast.classList.remove('translate-y-10', 'opacity-0');
            });

            // Remove
            setTimeout(() => {
                toast.classList.add('translate-y-10', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            // Initial animation
            document.getElementById('page-home').classList.add('active');
        });
    
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
      

<div className="bg-slate-900 text-slate-300 text-xs py-2">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex gap-4">
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="tel:+9192360992290">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon> +91 92360992290
                </a>
<span className="hidden sm:inline text-slate-700">|</span>
<span className="hidden sm:block">Free Shipping on orders above ₹999</span>
</div>
<div className="flex gap-4">
<button className="hover:text-white transition-colors" onclick="router('tracking')">Track Order</button>
<button className="hover:text-white transition-colors" onclick="router('admin')">Admin</button>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<button className="lg:hidden -ml-2 hover:bg-slate-100 text-slate-950 rounded-md pt-2 pr-2 pb-2 pl-2" style={{maskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)'}}>dfgdsg</button>

<button className="text-2xl font-semibold tracking-tighter text-slate-900 hover:opacity-80 transition-opacity" onclick="router('home')">
                NAWA
            </button>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
<button className="text-slate-900 hover:text-brand-600 transition-colors" onclick="router('home')">Home</button>
<button className="hover:text-brand-600 transition-colors" onclick="router('home', 'shop')">New Arrivals</button>
<button className="hover:text-brand-600 transition-colors" onclick="router('home', 'shop')">Girls</button>
<button className="hover:text-brand-600 transition-colors" onclick="router('home', 'shop')">Kids</button>
<button className="text-brand-600 font-semibold" onclick="router('home', 'shop')">Sale</button>
</div>

<div className="flex items-center gap-2">
<button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600" onclick="router('login')">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
</button>
<button className="relative p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 group" onclick="router('cart')">
<iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
<span className="absolute top-1 right-0.5 bg-brand-500 text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full group-hover:bg-brand-600 transition-colors" id="nav-cart-count">0</span>
</button>
</div>
</div>
</nav>

<main className="flex-grow">

<div className="page-view active" id="page-home">

<header className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 fade-enter">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                            Summer Collection 2024
                        </div>
<h1 className="lg:text-7xl text-5xl font-semibold text-slate-900 tracking-tight">
                            Playful style for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-purple-600">happy kids.</span>
</h1>
<p className="text-lg text-slate-500 max-w-md leading-relaxed">
                            Premium cotton clothing for girls and toddlers. Designed in Mau, worn with love everywhere.
                        </p>
<div className="flex pt-4 gap-x-4 gap-y-4">
<button className="h-10 px-8 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors" onclick="document.getElementById('shop-section').scrollIntoView({behavior: 'smooth'})">
                                Shop Now
                            </button>
</div>
</div>
<div className="relative lg:h-[500px]">
<img alt="Girl Fashion" className="w-full h-full object-cover rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500" src="https://images.unsplash.com/photo-1621452773781-0f992ee61918?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</header>

<section className="py-20 border-t border-slate-200 bg-white" id="shop-section">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Trending Now</h2>
<div className="flex gap-2">
<button className="px-3 py-1 text-sm bg-slate-900 text-white rounded-md">All</button>
<button className="px-3 py-1 text-sm text-slate-600 hover:bg-slate-100 rounded-md transition-colors">Girls</button>
<button className="px-3 py-1 text-sm text-slate-600 hover:bg-slate-100 rounded-md transition-colors">Toddlers</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer" onclick="openProduct('Summer Floral Dress', '1299', 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&amp;w=1921&amp;auto=format&amp;fit=crop')">
<div className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 mb-4 relative">
<img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&amp;w=1921&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
<button className="w-full bg-white/90 backdrop-blur py-2 rounded text-xs font-semibold uppercase tracking-wide text-slate-900">Quick View</button>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900">Summer Floral Dress</h3>
<p className="text-sm text-slate-500">₹1,299</p>
</div>

<div className="group cursor-pointer" onclick="openProduct('Denim Jacket', '1499', 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&amp;w=1972&amp;auto=format&amp;fit=crop')">
<div className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 mb-4 relative">
<img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&amp;w=1972&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
<button className="w-full bg-white/90 backdrop-blur py-2 rounded text-xs font-semibold uppercase tracking-wide text-slate-900">Quick View</button>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900">Classic Denim Jacket</h3>
<p className="text-sm text-slate-500">₹1,499</p>
</div>

<div className="group cursor-pointer" onclick="openProduct('Cotton Tee Set', '899', 'https://images.unsplash.com/photo-1519238263496-6343932a43f7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')">
<div className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 mb-4 relative">
<img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519238263496-6343932a43f7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
<button className="w-full bg-white/90 backdrop-blur py-2 rounded text-xs font-semibold uppercase tracking-wide text-slate-900">Quick View</button>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900">Cotton Tee Set</h3>
<p className="text-sm text-slate-500">₹899</p>
</div>

<div className="group cursor-pointer" onclick="openProduct('Party Frock', '2499', 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&amp;w=1956&amp;auto=format&amp;fit=crop')">
<div className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 mb-4 relative">
<img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&amp;w=1956&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
<button className="w-full bg-white/90 backdrop-blur py-2 rounded text-xs font-semibold uppercase tracking-wide text-slate-900">Quick View</button>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900">Velvet Party Frock</h3>
<p className="text-sm text-slate-500">₹2,499</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-view py-12" id="page-product">
<div className="max-w-7xl mx-auto px-6">

<button className="flex items-center gap-2 text-sm text-slate-500 mb-8 hover:text-slate-900" onclick="router('home')">
<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon> Back to Shopping
                </button>
<div className="grid md:grid-cols-2 gap-12 lg:gap-20">

<div className="space-y-4">
<div className="aspect-[3/4] bg-slate-100 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" id="pdp-image" src=""/>
</div>
</div>

<div className="flex flex-col">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900" id="pdp-title">Product Name</h1>
<p className="mt-2 text-xl font-medium text-slate-900">₹<span id="pdp-price">000</span> <span className="text-sm text-slate-400 font-normal line-through ml-2">₹<span id="pdp-price-old">000</span></span></p>
<div className="mt-8 space-y-4">
<div>
<label className="text-sm font-medium text-slate-900">Color</label>
<div className="flex gap-3 mt-2">
<button className="w-8 h-8 rounded-full bg-rose-400 ring-2 ring-offset-2 ring-slate-900"></button>
<button className="w-8 h-8 rounded-full bg-slate-200 hover:ring-2 hover:ring-offset-2 hover:ring-slate-300"></button>
<button className="w-8 h-8 rounded-full bg-indigo-400 hover:ring-2 hover:ring-offset-2 hover:ring-slate-300"></button>
</div>
</div>
<div>
<div className="flex justify-between">
<label className="text-sm font-medium text-slate-900">Size</label>
<button className="text-xs text-brand-600 underline">Size Chart</button>
</div>
<div className="grid grid-cols-4 gap-2 mt-2">
<button className="border border-slate-200 rounded-md py-2 text-sm font-medium hover:border-slate-900 transition-colors">3-4Y</button>
<button className="border border-slate-900 bg-slate-900 text-white rounded-md py-2 text-sm font-medium">5-6Y</button>
<button className="border border-slate-200 rounded-md py-2 text-sm font-medium hover:border-slate-900 transition-colors">7-8Y</button>
<button className="border border-slate-200 rounded-md py-2 text-sm font-medium text-slate-300 cursor-not-allowed">9-10Y</button>
</div>
</div>
</div>
<div className="mt-8 flex gap-4">
<button className="flex-1 bg-slate-900 text-white rounded-md py-3 font-medium hover:bg-slate-800 transition-colors" onclick="addToCartFromPDP()">Add to Cart</button>
<button className="p-3 border border-slate-200 rounded-md hover:border-rose-200 hover:text-rose-500 transition-colors">
<iconify-icon icon="lucide:heart" width="20"></iconify-icon>
</button>
</div>
<div className="mt-10 border-t border-slate-100 pt-6 space-y-4">
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:truck" width="18"></iconify-icon>
<span>Free shipping on orders over ₹999</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:shield-check" width="18"></iconify-icon>
<span>100% Cotton, Hypoallergenic</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-view py-12" id="page-cart">
<div className="max-w-4xl mx-auto px-6">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Shopping Cart</h1>
<div className="hidden text-center py-20 bg-slate-50 rounded-lg border border-slate-100 border-dashed" id="cart-empty">
<iconify-icon className="text-slate-300 mb-4" icon="lucide:shopping-bag" width="48"></iconify-icon>
<p className="text-slate-500">Your cart is empty.</p>
<button className="mt-4 text-brand-600 font-medium hover:underline" onclick="router('home')">Start Shopping</button>
</div>
<div className="grid lg:grid-cols-12 gap-10" id="cart-content">
<div className="lg:col-span-8 space-y-4">

<div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-lg">
<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-100">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&amp;w=1921&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col justify-between">
<div className="flex justify-between">
<div>
<h3 className="text-sm font-medium text-slate-900">Summer Floral Dress</h3>
<p className="text-xs text-slate-500 mt-1">Size: 5-6Y | Pink</p>
</div>
<p className="text-sm font-medium text-slate-900">₹1,299</p>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center border border-slate-200 rounded">
<button className="px-2 text-slate-500 hover:bg-slate-50">-</button>
<span className="text-xs px-2 font-medium">1</span>
<button className="px-2 text-slate-500 hover:bg-slate-50">+</button>
</div>
<button className="text-xs text-red-500 hover:text-red-600">Remove</button>
</div>
</div>
</div>

<div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-lg">
<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-100">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&amp;w=1972&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col justify-between">
<div className="flex justify-between">
<div>
<h3 className="text-sm font-medium text-slate-900">Classic Denim Jacket</h3>
<p className="text-xs text-slate-500 mt-1">Size: 4Y | Blue</p>
</div>
<p className="text-sm font-medium text-slate-900">₹1,499</p>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center border border-slate-200 rounded">
<button className="px-2 text-slate-500 hover:bg-slate-50">-</button>
<span className="text-xs px-2 font-medium">1</span>
<button className="px-2 text-slate-500 hover:bg-slate-50">+</button>
</div>
<button className="text-xs text-red-500 hover:text-red-600">Remove</button>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4">
<div className="bg-slate-50 rounded-lg p-6 border border-slate-200 h-fit sticky top-24">
<h2 className="text-sm font-medium text-slate-900 mb-4">Order Summary</h2>
<div className="space-y-3 text-sm">
<div className="flex justify-between text-slate-500">
<span>Subtotal</span>
<span>₹2,798</span>
</div>
<div className="flex justify-between text-slate-500">
<span>Shipping</span>
<span className="text-green-600">Free</span>
</div>
<div className="border-t border-slate-200 pt-3 flex justify-between font-medium text-slate-900">
<span>Total</span>
<span>₹2,798</span>
</div>
</div>
<button className="w-full mt-6 bg-slate-900 text-white py-3 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors" onclick="router('checkout')">
                                Checkout
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="page-view py-12" id="page-checkout">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
<span className="text-slate-900 font-medium">Cart</span>
<iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
<span className="text-slate-900 font-medium">Information</span>
<iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
<span>Payment</span>
</div>
<div className="grid md:grid-cols-1 gap-8">
<form className="space-y-6" onsubmit="event.preventDefault(); router('home'); showToast('Order Placed Successfully!', 'success')">
<section>
<h2 className="text-lg font-medium text-slate-900 mb-4">Contact Information</h2>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="Email address" type="email"/>
</section>
<section>
<h2 className="text-lg font-medium text-slate-900 mb-4">Shipping Address</h2>
<div className="grid grid-cols-2 gap-4">
<input className="rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="First name" type="text"/>
<input className="rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="Last name" type="text"/>
<input className="col-span-2 rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="Address" type="text"/>
<input className="col-span-2 rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="Apartment, suite, etc." type="text"/>
<input className="rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="City" type="text"/>
<input className="rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="PIN Code" type="text"/>
</div>
</section>
<div className="pt-4 flex items-center justify-between">
<button className="text-sm text-brand-600 hover:text-brand-700 font-medium" onclick="router('cart')" type="button">
                                &lt; Return to cart
                            </button>
<button className="bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200" type="submit">
                                Pay Now
                            </button>
</div>
</form>
</div>
</div>
</div>

<div className="page-view py-20" id="page-login">
<div className="max-w-md mx-auto px-6">
<div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
<div className="text-center mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Welcome back</h1>
<p className="text-sm text-slate-500 mt-2">Enter your email to sign in to your account</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-900 transition-colors" placeholder="name@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Password</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-900 transition-colors" type="password"/>
</div>
<button className="w-full bg-slate-900 text-white rounded-md py-2.5 text-sm font-medium hover:bg-slate-800 transition-colors" onclick="router('home'); showToast('Logged in successfully', 'success')" type="button">
                            Sign In
                        </button>
</form>
<div className="mt-6 text-center text-xs text-slate-500">
                        Don't have an account? <button className="text-brand-600 font-medium hover:underline">Sign up</button>
</div>
</div>
</div>
</div>

<div className="page-view py-20" id="page-tracking">
<div className="max-w-md mx-auto px-6 text-center">
<iconify-icon className="text-brand-500 mb-6" icon="lucide:package-search" width="48"></iconify-icon>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Track Your Order</h1>
<p className="text-sm text-slate-500 mt-2 mb-8">Enter your order ID to see the current status of your shipment.</p>
<div className="flex gap-2">
<input className="flex-1 rounded-md border border-slate-200 px-4 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="Order ID (e.g., #NAWA-1024)" type="text"/>
<button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800">Track</button>
</div>

<div className="mt-8 bg-slate-50 rounded-lg p-6 border border-slate-200 text-left hidden" id="track-result">
<div className="flex items-center gap-3 mb-4">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="font-medium text-slate-900">Out for Delivery</span>
</div>
<p className="text-xs text-slate-500">Estimated delivery by 6:00 PM today.</p>
</div>
</div>
</div>

<div className="page-view" id="page-admin">
<div className="flex min-h-[calc(100vh-100px)] bg-slate-900">

<aside className="w-64 bg-slate-950 border-r border-slate-800 hidden md:block">
<div className="p-6">
<span className="text-white font-bold tracking-tight">NAWA <span className="text-slate-500 font-normal">Admin</span></span>
</div>
<nav className="px-3 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-slate-900 text-white">
<iconify-icon icon="lucide:layout-dashboard" width="16"></iconify-icon> Overview
                        </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:text-white hover:bg-slate-900">
<iconify-icon icon="lucide:shopping-bag" width="16"></iconify-icon> Orders
                        </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:text-white hover:bg-slate-900">
<iconify-icon icon="lucide:package" width="16"></iconify-icon> Products
                        </button>
</nav>
</aside>

<div className="flex-1 p-8">
<div className="flex justify-between items-center mb-8">
<h2 className="text-2xl font-semibold text-white">Dashboard Overview</h2>
<button className="text-xs text-slate-400 hover:text-white" onclick="router('home')">Exit Admin</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
<p className="text-xs font-medium text-slate-400 uppercase">Total Revenue</p>
<h3 className="text-2xl font-semibold text-white mt-2">₹45,231</h3>
<span className="text-xs text-green-500 mt-1 block">+12.5% from last month</span>
</div>
<div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
<p className="text-xs font-medium text-slate-400 uppercase">Active Orders</p>
<h3 className="text-2xl font-semibold text-white mt-2">14</h3>
<span className="text-xs text-slate-500 mt-1 block">3 pending shipment</span>
</div>
<div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
<p className="text-xs font-medium text-slate-400 uppercase">Low Stock</p>
<h3 className="text-2xl font-semibold text-white mt-2">5</h3>
<span className="text-xs text-rose-500 mt-1 block">Items require restock</span>
</div>
</div>
<div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
<div className="px-6 py-4 border-b border-slate-800">
<h3 className="text-sm font-medium text-white">Recent Orders</h3>
</div>
<table className="w-full text-left text-sm text-slate-400">
<thead className="bg-slate-900/50 text-xs uppercase font-medium text-slate-500">
<tr>
<th className="px-6 py-3">Order</th>
<th className="px-6 py-3">Customer</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3 text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">
<tr className="hover:bg-slate-900 transition-colors">
<td className="px-6 py-4 font-mono text-white">#1024</td>
<td className="px-6 py-4">Amit Sharma</td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-[10px] bg-green-500/10 text-green-500 border border-green-500/20">Paid</span></td>
<td className="px-6 py-4 text-right">₹1,299</td>
</tr>
<tr className="hover:bg-slate-900 transition-colors">
<td className="px-6 py-4 font-mono text-white">#1023</td>
<td className="px-6 py-4">Priya Singh</td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-500 border border-amber-500/20">Pending</span></td>
<td className="px-6 py-4 text-right">₹2,450</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2 space-y-4">
<span className="text-xl font-bold tracking-tighter text-slate-900">NAWA</span>
<p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                        Quality clothing for kids and girls. Fashionable, comfortable, and made with love in India.
                    </p>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Shop</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li><button className="hover:text-brand-600" onclick="router('home')">New Arrivals</button></li>
<li><button className="hover:text-brand-600" onclick="router('home')">Girls</button></li>
<li><button className="hover:text-brand-600" onclick="router('home')">Kids</button></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Help</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li><button className="hover:text-brand-600" onclick="router('tracking')">Track Order</button></li>
<li><a className="hover:text-brand-600" href="#">Returns</a></li>
<li><a className="hover:text-brand-600" href="mailto:support@nawa.co.in">Contact Us</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 NAWA. All rights reserved.</p>
<p>Designed in Mau.</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none" id="toast-container"></div>


    </>
  );
}
