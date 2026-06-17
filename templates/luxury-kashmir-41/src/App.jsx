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



        function shopData() {
            return {
                view: 'home', // home, shop, product, cart
                isAdmin: false,
                currentProduct: null,
                showAddModal: false,
                cart: [],
                newProduct: { name: '', price: '', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop' },
                products: [
                    {
                        id: 1,
                        name: 'Classic Black Jinnah Cape',
                        price: 2499,
                        stock: 12,
                        image: 'https://images.unsplash.com/photo-1572495675626-f778fb980998?q=80&w=987&auto=format&fit=crop',
                        desc: 'The epitome of traditional elegance. This classic black cape is crafted from high-density wool blend, perfect for formal gatherings and evening wear. Features a structured fit that retains shape.'
                    },
                    {
                        id: 2,
                        name: 'Premium Wool Jinnah Cape',
                        price: 3999,
                        stock: 4,
                        image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1095&auto=format&fit=crop',
                        desc: 'Luxurious comfort meets heritage style. Made from 100% premium Merino wool, this cape offers superior warmth without the weight. A soft texture that speaks of quality.'
                    },
                    {
                        id: 3,
                        name: 'Traditional Kashmiri Jinnah Cape',
                        price: 3499,
                        stock: 8,
                        image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?q=80&w=1065&auto=format&fit=crop',
                        desc: 'Inspired by the artisans of Srinagar. This cape features subtle embroidery details along the collar and a lining of soft Pashmina blend fabric.'
                    },
                    {
                        id: 4,
                        name: 'Winter Special Heavy Jinnah Cape',
                        price: 4599,
                        stock: 15,
                        image: 'https://images.unsplash.com/photo-1534349762913-961123f16eb8?q=80&w=1036&auto=format&fit=crop',
                        desc: 'Designed for the harshest winters. Double-layered wool construction ensures maximum insulation while maintaining a sharp, dignified silhouette.'
                    }
                ],

                init() {
                    // Pre-load logic if needed
                },

                setView(viewName) {
                    this.view = viewName;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                },

                openProduct(product) {
                    this.currentProduct = product;
                    this.setView('product');
                },

                addToCart(product) {
                    this.cart.push(product);
                    // Simple toast notification simulation could go here
                },

                removeFromCart(index) {
                    this.cart.splice(index, 1);
                },

                get cartTotal() {
                    return this.cart.reduce((sum, item) => sum + item.price, 0);
                },

                formatPrice(price) {
                    return price.toLocaleString('en-IN');
                },

                toggleAdmin() {
                    this.isAdmin = !this.isAdmin;
                },

                deleteProduct(id) {
                    if(confirm('Delete this product?')) {
                        this.products = this.products.filter(p => p.id !== id);
                    }
                },

                addNewProduct() {
                    if(this.newProduct.name && this.newProduct.price) {
                        this.products.push({
                            id: Date.now(),
                            name: this.newProduct.name,
                            price: parseInt(this.newProduct.price),
                            stock: 10,
                            desc: 'New arrival.',
                            image: this.newProduct.image
                        });
                        this.showAddModal = false;
                        this.newProduct = { name: '', price: '', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop' };
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a @click.prevent="setView('home')" className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg">
<span className="font-serif italic text-lg leading-none pt-1">K</span>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 group-hover:opacity-70 transition-opacity">Kashmir Cape House</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a :className="view === 'home' ? 'text-slate-900' : 'hover:text-slate-800 transition-colors'" @click.prevent="setView('home')" className="text-slate-900" href="#">Home</a>
<a :className="view === 'shop' ? 'text-slate-900' : 'hover:text-slate-800 transition-colors'" @click.prevent="setView('shop')" className="hover:text-slate-800 transition-colors" href="#">Collection</a>
<a className="hover:text-slate-800 transition-colors" href="#">Our Story</a>
</div>

<div className="flex items-center gap-4">
<button @click="toggleAdmin()" className="text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-wider hidden md:block">
<span x-text="isAdmin ? 'Exit Admin' : 'Admin Panel'">Admin Panel</span>
</button>
<button @click="setView('cart')" className="text-slate-600 hover:text-slate-900 transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 h-4 w-4 bg-slate-900 text-white text-[10px] flex items-center justify-center rounded-full" style={{display: 'none'}} x-show="cart.length &gt; 0" x-text="cart.length">0</span>
</button>
<button className="md:hidden text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="pt-24 min-h-screen pb-20">

<div className="" x-show="view === 'home'" x-transition.opacity.duration.500ms="">

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
<span className="w-2 h-2 rounded-full bg-orange-700"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wider">Heritage Collection 2024</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-slate-900 tracking-tight">
                            Elegance Woven <br/> <span className="italic text-slate-500">in Tradition.</span>
</h1>
<p className="text-lg text-slate-500 font-light max-w-md leading-relaxed">
                            Handcrafted Jinnah Capes inspired by the valleys of Kashmir. Experience premium wool and timeless artistry.
                        </p>
<div className="pt-4 flex gap-4">
<button @click="setView('shop')" className="px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                Shop Collection
                            </button>
<button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-all duration-300">
                                View Lookbook
                            </button>
</div>
</div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 shadow-xl group">
<img alt="Kashmiri Texture" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec6b4c60-e6b5-48c9-9f6e-754499c19420_1600w.jpg"/>
<div className="bg-gradient-to-t from-slate-900/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<div className="">
<h2 className="text-2xl font-serif text-slate-900 mb-2">Signature Pieces</h2>
<p className="text-sm text-slate-500 font-light">Curated selection for the season.</p>
</div>
<button @click="setView('shop')" className="text-sm font-medium text-slate-900 hover:opacity-70 flex items-center gap-1">
                        View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
<div @click="openProduct(product)" className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-100">
<img :alt="product.name" :src="product.image" alt="" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src=""/>
<button @click.stop="addToCart(product)" className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-900 hover:text-white shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1" x-text="product.name"></h3>
<div className="flex justify-between items-center">
<p className="text-sm text-slate-500 font-light">INR <span x-text="formatPrice(product.price)"></span></p>
</div>
</div><div @click="openProduct(product)" className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-100">
<img :alt="product.name" :src="product.image" alt="" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://static-01.daraz.pk/p/c938a140d2878e6f9c016996f086c2af.jpg?w=800&amp;q=80"/>
<button @click.stop="addToCart(product)" className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-900 hover:text-white shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1" x-text="product.name"></h3>
<div className="flex justify-between items-center">
<p className="text-sm text-slate-500 font-light">INR <span x-text="formatPrice(product.price)"></span></p>
</div>
</div><div @click="openProduct(product)" className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-100">
<img :alt="product.name" :src="product.image" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src=""/>
<button @click.stop="addToCart(product)" className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-900 hover:text-white shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1" x-text="product.name"></h3>
<div className="flex justify-between items-center">
<p className="text-sm text-slate-500 font-light">INR <span x-text="formatPrice(product.price)"></span></p>
</div>
</div><div @click="openProduct(product)" className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-100">
<img :alt="product.name" :src="product.image" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src=""/>
<button @click.stop="addToCart(product)" className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-900 hover:text-white shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1" x-text="product.name"></h3>
<div className="flex justify-between items-center">
<p className="text-sm text-slate-500 font-light">INR <span x-text="formatPrice(product.price)"></span></p>
</div>
</div>
</div>
</section>
</div>

<div className="max-w-7xl mx-auto px-6" style={{display: 'none'}} x-show="view === 'shop'" x-transition.opacity="">
<div className="py-8 border-b border-slate-200/60 mb-8">
<h2 className="text-3xl font-serif text-slate-900">All Collections</h2>
<p className="text-slate-500 font-light mt-2">Discover the warmth of Kashmir.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
<template :key="product.id" x-htmlFor="product in products"></template><div @click="openProduct(product)" className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-100">
<span className="absolute top-3 left-3 bg-rose-500/10 text-rose-600 px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wide" style={{display: 'none'}} x-show="product.stock &lt; 5">Low Stock</span>
<img :alt="product.name" :src="product.image" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src=""/>
<button @click.stop="addToCart(product)" className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-900 hover:text-white shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1" x-text="product.name"></h3>
<p className="text-sm text-slate-500 font-light">INR <span x-text="formatPrice(product.price)"></span></p>
</div><div @click="openProduct(product)" className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-100">
<span className="absolute top-3 left-3 bg-rose-500/10 text-rose-600 px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wide" style={{display: 'none'}} x-show="product.stock &lt; 5">Low Stock</span>
<img :alt="product.name" :src="product.image" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src=""/>
<button @click.stop="addToCart(product)" className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-900 hover:text-white shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1" x-text="product.name"></h3>
<p className="text-sm text-slate-500 font-light">INR <span x-text="formatPrice(product.price)"></span></p>
</div><div @click="openProduct(product)" className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-100">
<span className="absolute top-3 left-3 bg-rose-500/10 text-rose-600 px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wide" style={{display: 'none'}} x-show="product.stock &lt; 5">Low Stock</span>
<img :alt="product.name" :src="product.image" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src=""/>
<button @click.stop="addToCart(product)" className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-900 hover:text-white shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1" x-text="product.name"></h3>
<p className="text-sm text-slate-500 font-light">INR <span x-text="formatPrice(product.price)"></span></p>
</div><div @click="openProduct(product)" className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-100">
<span className="absolute top-3 left-3 bg-rose-500/10 text-rose-600 px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wide" style={{display: 'none'}} x-show="product.stock &lt; 5">Low Stock</span>
<img :alt="product.name" :src="product.image" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src=""/>
<button @click.stop="addToCart(product)" className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-900 hover:text-white shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1" x-text="product.name"></h3>
<p className="text-sm text-slate-500 font-light">INR <span x-text="formatPrice(product.price)"></span></p>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6" style={{display: 'none'}} x-show="view === 'product'" x-transition.opacity="">
<button @click="view = 'shop'" className="mb-8 text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Shop
            </button>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16" x-data="{ selectedProduct: currentProduct }">
<div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/5] border border-slate-200/50">
<img :src="selectedProduct?.image" alt="" className="w-full h-full object-cover" src=""/>
</div>
<div className="flex flex-col justify-center">
<div className="mb-6">
<span className="text-orange-700 text-xs font-medium tracking-widest uppercase mb-2 block">Premium Series</span>
<h1 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4" x-text="selectedProduct?.name"></h1>
<p className="text-2xl text-slate-900 font-light">₹<span x-text="formatPrice(selectedProduct?.price)"></span></p>
</div>
<div className="h-px w-full bg-slate-200 my-6"></div>
<p className="text-slate-500 leading-relaxed font-light mb-8" x-text="selectedProduct?.desc"></p>
<div className="space-y-4">
<div className="flex gap-4">
<button @click="addToCart(selectedProduct)" className="flex-1 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-plus-linear" width="20"></iconify-icon> Add to Cart
                            </button>
<button className="w-14 h-14 border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 hover:border-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
</div>
<button className="w-full py-4 bg-white border border-slate-200 text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                            Buy Now
                        </button>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-1" icon="solar:shield-check-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Authentic</h4>
<p className="text-xs text-slate-500">100% Kashmiri Wool</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-1" icon="solar:box-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Free Shipping</h4>
<p className="text-xs text-slate-500">Across India</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto px-6" style={{display: 'none'}} x-show="view === 'cart'" x-transition.opacity="">
<h2 className="text-2xl font-serif text-slate-900 mb-8 border-b border-slate-200 pb-4">Your Shopping Cart</h2>
<div className="text-center py-20" x-show="cart.length === 0">
<div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
<iconify-icon icon="solar:bag-linear" width="32"></iconify-icon>
</div>
<p className="text-slate-500 mb-4">Your cart is empty.</p>
<button @click="setView('shop')" className="text-slate-900 font-medium border-b border-slate-900 pb-0.5 hover:opacity-70">Start Shopping</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{display: 'none'}} x-show="cart.length &gt; 0">
<div className="md:col-span-2 space-y-6">
</div>
<div className="md:col-span-1">
<div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm sticky top-24">
<h3 className="font-medium text-slate-900 mb-4">Summary</h3>
<div className="flex justify-between text-sm text-slate-500 mb-2">
<span>Subtotal</span>
<span>₹<span x-text="formatPrice(cartTotal)">0</span></span>
</div>
<div className="flex justify-between text-sm text-slate-500 mb-4">
<span>Shipping</span>
<span className="text-green-600">Free</span>
</div>
<div className="border-t border-slate-100 pt-4 flex justify-between font-medium text-slate-900 text-lg mb-6">
<span>Total</span>
<span>₹<span x-text="formatPrice(cartTotal)">0</span></span>
</div>
<button className="w-full py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium">Proceed to Checkout</button>
<div className="mt-4 text-xs text-slate-400 text-center flex items-center justify-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> Secure Payment
                         </div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] bg-white flex" style={{display: 'none'}} x-show="isAdmin" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-4">

<div className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col p-6">
<div className="mb-10 flex items-center gap-2">
<div className="w-6 h-6 bg-orange-700 rounded-md flex items-center justify-center text-white text-xs">A</div>
<span className="font-medium text-slate-900 tracking-tight">Admin Dashboard</span>
</div>
<nav className="space-y-1 flex-1">
<a className="flex items-center gap-3 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-900 shadow-sm" href="#">
<iconify-icon icon="solar:box-linear"></iconify-icon> Products
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:cart-linear"></iconify-icon> Orders
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Customers
                    </a>
</nav>
<button @click="toggleAdmin()" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 px-3">
<iconify-icon icon="solar:logout-linear"></iconify-icon> Back to Store
                </button>
</div>

<div className="flex-1 overflow-y-auto p-10 bg-[#FAFAFA]">
<div className="flex justify-between items-center mb-8">
<h2 className="text-2xl font-serif text-slate-900">Product Management</h2>
<button @click="showAddModal = true" className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Product
                    </button>
</div>

<div className="grid grid-cols-3 gap-6 mb-8">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total Products</p>
<p className="text-2xl font-medium text-slate-900" x-text="products.length">4</p>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Active Orders</p>
<p className="text-2xl font-medium text-slate-900">12</p>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total Revenue</p>
<p className="text-2xl font-medium text-slate-900">₹42,500</p>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<table className="w-full text-left">
<thead>
<tr className="bg-slate-50 border-b border-slate-200">
<th className="px-6 py-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Product</th>
<th className="px-6 py-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Price (INR)</th>
<th className="px-6 py-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-4 text-xs font-medium text-slate-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img :src="p.image" alt="" className="w-10 h-10 rounded object-cover bg-slate-100" src=""/>
<span className="text-sm font-medium text-slate-900" x-text="p.name"></span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600">₹<span x-text="formatPrice(p.price)"></span></td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                            In Stock
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-slate-400 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
</button>
<button @click="deleteProduct(p.id)" className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</td>
</tr><tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img :src="p.image" alt="" className="w-10 h-10 rounded object-cover bg-slate-100" src=""/>
<span className="text-sm font-medium text-slate-900" x-text="p.name"></span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600">₹<span x-text="formatPrice(p.price)"></span></td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                            In Stock
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-slate-400 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
</button>
<button @click="deleteProduct(p.id)" className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</td>
</tr><tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img :src="p.image" alt="" className="w-10 h-10 rounded object-cover bg-slate-100" src=""/>
<span className="text-sm font-medium text-slate-900" x-text="p.name"></span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600">₹<span x-text="formatPrice(p.price)"></span></td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                            In Stock
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-slate-400 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
</button>
<button @click="deleteProduct(p.id)" className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</td>
</tr><tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img :src="p.image" alt="" className="w-10 h-10 rounded object-cover bg-slate-100" src=""/>
<span className="text-sm font-medium text-slate-900" x-text="p.name"></span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600">₹<span x-text="formatPrice(p.price)"></span></td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                            In Stock
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-slate-400 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
</button>
<button @click="deleteProduct(p.id)" className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="fixed inset-0 z-[70] bg-slate-900/20 backdrop-blur-sm flex items-center justify-center p-4" style={{display: 'none'}} x-show="showAddModal">
<div @click.away="showAddModal = false" className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
<h3 className="text-lg font-serif mb-4">Add New Product</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Product Name</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-900 transition-colors" type="text" x-model="newProduct.name"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Price (INR)</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-900 transition-colors" type="number" x-model="newProduct.price"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Image URL</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-900 transition-colors" type="text" x-model="newProduct.image"/>
</div>
<div className="flex gap-3 pt-2">
<button @click="showAddModal = false" className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</button>
<button @click="addNewProduct()" className="flex-1 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800">Add Product</button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200/60 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded text-xs">K</div>
<span className="font-medium text-slate-900 tracking-tight">Kashmir Cape House</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                        Bringing the royal heritage of Kashmir to the modern world. Authenticity guaranteed.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Shop</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-slate-900" href="#">New Arrivals</a></li>
<li><a className="hover:text-slate-900" href="#">Best Sellers</a></li>
<li><a className="hover:text-slate-900" href="#">Winter Collection</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Support</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-slate-900" href="#">Contact Us</a></li>
<li><a className="hover:text-slate-900" href="#">Shipping Policy</a></li>
<li><a className="hover:text-slate-900" href="#">Returns</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Newsletter</h4>
<div className="flex gap-2">
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-400" placeholder="Enter your email" type="email"/>
<button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-800">Subscribe</button>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Kashmir Cape House. All rights reserved.</p>
<div className="flex gap-4">
<span>Privacy Policy</span>
<span>Terms of Service</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
