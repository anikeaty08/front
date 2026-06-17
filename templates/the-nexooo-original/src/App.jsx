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
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
brand: { 50: '#f9fafb', 900: '#111827' },
accent: { 500: '#2563eb' }
},
animation: {
'fade-in': 'fadeIn 0.4s ease-out',
'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
'slide-in-right': 'slideInRight 0.3s ease-out',
},
keyframes: {
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
slideInRight: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(0)' } }
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
      

<div className="fixed top-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<div className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm hidden flex items-center justify-center" id="razorpay-modal">
<div className="bg-white rounded-lg w-full max-w-sm shadow-2xl overflow-hidden animate-slide-up">
<div className="bg-[#2b84ea] p-4 flex justify-between items-center text-white">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center font-bold">R</div>
<span className="font-medium">Razorpay Trusted</span>
</div>
<button className="hover:bg-white/10 p-1 rounded" onclick="payment.close()"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="p-6">
<div className="flex justify-between items-center mb-6">
<div className="text-neutral-500">Total Payable</div>
<div className="text-xl font-bold" id="rzp-amount">₹0.00</div>
</div>
<div className="space-y-3">
<button className="w-full border border-neutral-200 p-3 rounded flex items-center gap-3 hover:bg-neutral-50 transition-colors" onclick="payment.process('upi')">
<div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center"><i className="w-4 h-4 text-green-600" data-lucide="smartphone"></i></div>
<div className="text-left"><div className="font-medium">UPI</div><div className="text-xs text-neutral-500">Google Pay, PhonePe, Paytm</div></div>
</button>
<button className="w-full border border-neutral-200 p-3 rounded flex items-center gap-3 hover:bg-neutral-50 transition-colors" onclick="payment.process('card')">
<div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center"><i className="w-4 h-4 text-blue-600" data-lucide="credit-card"></i></div>
<div className="text-left"><div className="font-medium">Card</div><div className="text-xs text-neutral-500">Visa, Mastercard, RuPay</div></div>
</button>
</div>
</div>
<div className="bg-neutral-50 p-3 text-center text-xs text-neutral-400 border-t border-neutral-100">Secured by Razorpay</div>
</div>
</div>

<div className="min-h-screen flex flex-col" id="app">

<header className="fixed top-0 w-full z-40 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">

<button className="lg:hidden p-2 -ml-2"><i className="w-5 h-5" data-lucide="menu"></i></button>

<div className="flex items-center gap-12">
<a className="cursor-pointer text-xl font-bold tracking-tighter" onclick="router.go('home')">AETHER</a>
<nav className="hidden lg:flex gap-6 text-neutral-500 font-medium text-xs tracking-wide">
<a className="hover:text-black cursor-pointer uppercase" onclick="router.go('collection', 'new')">New Arrivals</a>
<a className="hover:text-black cursor-pointer uppercase" onclick="router.go('collection', 'men')">Men</a>
<a className="hover:text-black cursor-pointer uppercase" onclick="router.go('collection', 'women')">Women</a>
<a className="text-red-600 hover:text-red-700 cursor-pointer uppercase" onclick="router.go('collection', 'sale')">Sale</a>
</nav>
</div>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center bg-neutral-100 rounded-full px-3 py-1.5 w-64 focus-within:ring-1 ring-black transition-all">
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-xs ml-2 w-full placeholder:text-neutral-400" placeholder="Search products..." type="text"/>
</div>
<button className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative" onclick="router.go('wishlist')">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="heart"></i>
</button>
<button className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative" onclick="cart.toggle()">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shopping-bag"></i>
<span className="absolute top-1 right-0 w-2 h-2 bg-red-600 rounded-full hidden" id="cart-badge"></span>
</button>
<button className="p-2 hover:bg-neutral-100 rounded-full transition-colors" id="auth-btn" onclick="router.go('auth')">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="user"></i>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 z-50 pointer-events-none" id="cart-drawer">
<div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300" id="cart-overlay" onclick="cart.toggle()"></div>
<div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col pointer-events-auto" id="cart-panel">
<div className="p-6 border-b border-neutral-100 flex justify-between items-center">
<h2 className="text-lg font-medium">Shopping Bag</h2>
<button onclick="cart.toggle()"><i className="w-5 h-5 text-neutral-400 hover:text-black" data-lucide="x"></i></button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6" id="cart-items">

</div>
<div className="p-6 bg-neutral-50 border-t border-neutral-100 space-y-4">
<div className="space-y-2 text-xs text-neutral-500">
<div className="flex justify-between"><span>Subtotal</span><span className="text-black font-medium" id="cart-subtotal">₹0</span></div>
<div className="flex justify-between"><span>GST (18%)</span><span className="text-black font-medium" id="cart-gst">₹0</span></div>
<div className="flex justify-between"><span>Shipping</span><span className="text-green-600 font-medium">FREE</span></div>
</div>
<div className="flex justify-between text-base font-medium border-t border-neutral-200 pt-4">
<span>Total</span>
<span id="cart-total">₹0</span>
</div>
<button className="w-full bg-black text-white py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors" onclick="router.go('checkout')">Proceed to Checkout</button>
</div>
</div>
</div>

<main className="pt-16 flex-1 relative" id="main-content">

<section className="page-view animate-fade-in" id="view-home">

<div className="relative h-[85vh] w-full overflow-hidden bg-neutral-900 flex items-center justify-center">
<img className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="relative z-10 text-center text-white space-y-6 px-4">
<span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-300">Spring Summer 2024</span>
<h1 className="md:text-7xl text-5xl font-semibold tracking-tighter">THE N3XO</h1>
<div className="flex gap-4 justify-center pt-4">
<button className="bg-white text-black px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors" onclick="router.go('collection', 'men')">Shop Men</button>
<button className="border border-white text-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors" onclick="router.go('collection', 'women')">Shop Women</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 py-24">
<div className="flex justify-between items-end mb-8">
<h2 className="text-2xl font-semibold tracking-tight">Curated Collections</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">
<div className="group relative h-96 overflow-hidden cursor-pointer" onclick="router.go('collection', 'outerwear')">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-xl font-medium">Outerwear</h3>
<p className="text-xs text-neutral-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Shop Now →</p>
</div>
</div>
<div className="group relative h-96 overflow-hidden cursor-pointer" onclick="router.go('collection', 'essentials')">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-xl font-medium">Essentials</h3>
<p className="text-xs text-neutral-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Shop Now →</p>
</div>
</div>
<div className="group relative h-96 overflow-hidden cursor-pointer" onclick="router.go('collection', 'accessories')">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-xl font-medium">Accessories</h3>
<p className="text-xs text-neutral-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Shop Now →</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-50 py-24 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight mb-2">Weekly Best Sellers</h2>
<p className="text-neutral-500">Discover what's trending right now.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12" id="home-products">

</div>
</div>
</div>
</section>

<section className="page-view hidden animate-slide-up" id="view-product">
<div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
<div className="space-y-4">
<div className="aspect-[3/4] bg-neutral-100 overflow-hidden rounded-sm relative group">
<img className="w-full h-full object-cover" id="p-image" src=""/>
<button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:text-red-600" onclick="wishlist.toggleCurrent()"><i className="w-5 h-5" data-lucide="heart"></i></button>
</div>
<div className="grid grid-cols-4 gap-4" id="p-gallery"></div>
</div>
<div className="flex flex-col h-full">
<div className="mb-auto">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 bg-neutral-100 text-[10px] font-bold tracking-wider rounded">NEW SEASON</span>
<span className="text-xs text-green-600 font-medium flex items-center gap-1"><i className="w-3 h-3" data-lucide="check-circle"></i> In Stock</span>
</div>
<h1 className="text-4xl font-medium tracking-tight mb-2" id="p-title"></h1>
<div className="flex items-center gap-4 mb-8">
<span className="text-2xl font-light text-neutral-900" id="p-price"></span>
<div className="flex text-yellow-500 text-xs">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star-half"></i>
<span className="text-neutral-400 ml-2">(42 reviews)</span>
</div>
</div>
<p className="text-neutral-500 leading-relaxed text-sm mb-8" id="p-desc"></p>
<div className="space-y-6 border-t border-neutral-100 pt-8">
<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-bold text-neutral-900">COLOR</label>
<span className="text-xs text-neutral-400" id="p-selected-color">Black</span>
</div>
<div className="flex gap-3" id="p-colors"></div>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-bold text-neutral-900">SIZE</label>
<button className="text-xs text-neutral-500 underline" onclick="ui.modal('size-guide')">Size Guide</button>
</div>
<div className="grid grid-cols-5 gap-2" id="p-sizes"></div>
</div>
</div>
</div>
<div className="mt-8 space-y-3 pt-8 border-t border-neutral-100">
<div className="flex gap-4">
<div className="flex items-center border border-neutral-200 rounded w-32">
<button className="px-3 py-3 hover:bg-neutral-50" onclick="product.qty(-1)"><i className="w-3 h-3" data-lucide="minus"></i></button>
<input className="w-full text-center text-sm outline-none" id="p-qty" readonly="" type="number" value="1"/>
<button className="px-3 py-3 hover:bg-neutral-50" onclick="product.qty(1)"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
<button className="flex-1 bg-black text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-all active:scale-[0.98]" onclick="cart.addCurrent()">Add to Cart</button>
</div>
<button className="w-full bg-blue-600 text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-blue-700 transition-colors" onclick="cart.buyNow()">Buy it Now</button>
</div>
<div className="grid grid-cols-3 gap-4 mt-8 text-center text-[10px] text-neutral-500 font-medium">
<div className="flex flex-col items-center gap-2"><i className="w-5 h-5" data-lucide="truck"></i><span>Free Shipping</span></div>
<div className="flex flex-col items-center gap-2"><i className="w-5 h-5" data-lucide="shield-check"></i><span>Secure Checkout</span></div>
<div className="flex flex-col items-center gap-2"><i className="w-5 h-5" data-lucide="refresh-cw"></i><span>30-Day Returns</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden bg-neutral-50 min-h-screen" id="view-checkout">
<div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
</div></section></main></div>
    </>
  );
}
