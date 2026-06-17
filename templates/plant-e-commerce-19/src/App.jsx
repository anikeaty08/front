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
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
},
green: {
850: '#143828', // Custom deep forest green
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        function shop() {
            return {
                page: 'home',
                sortBy: 'featured',
                maxPrice: 200,
                selectedCategories: [],
                activeProduct: null,
                cart: [],
                
                products: [
                    {
                        id: 1,
                        name: "Monstera Deliciosa",
                        botanical: "Monstera deliciosa",
                        price: 45,
                        category: "Indoor",
                        description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its natural leaf holes. A statement piece for any room that brings a tropical vibe.",
                        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop",
                        detailImage1: "https://images.unsplash.com/photo-1599598425947-d352db937f35?q=80&w=1000&auto=format&fit=crop",
                        detailImage2: "https://images.unsplash.com/photo-1628126235206-526053ea64ea?q=80&w=1000&auto=format&fit=crop"
                    },
                    {
                        id: 2,
                        name: "Fiddle Leaf Fig",
                        botanical: "Ficus lyrata",
                        price: 120,
                        category: "Indoor",
                        description: "With its broad, violin-shaped leaves, the Fiddle Leaf Fig is a design favorite. It requires bright, filtered light to thrive and makes a stunning vertical accent.",
                        image: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000&auto=format&fit=crop",
                        detailImage1: "https://images.unsplash.com/photo-1597054707632-61db3a492815?q=80&w=1000&auto=format&fit=crop",
                        detailImage2: "https://images.unsplash.com/photo-1647494451006-25916053351d?q=80&w=1000&auto=format&fit=crop"
                    },
                    {
                        id: 3,
                        name: "Snake Plant",
                        botanical: "Sansevieria trifasciata",
                        price: 35,
                        category: "Succulent",
                        description: "Indestructible and architectural. The Snake Plant is perfect for beginners and low-light corners. Its vertical leaves add modern lines to any space.",
                        image: "https://images.unsplash.com/photo-1596547610738-4e3bb076722d?q=80&w=1000&auto=format&fit=crop",
                        detailImage1: "https://images.unsplash.com/photo-1572688484279-a21d57577884?q=80&w=1000&auto=format&fit=crop",
                        detailImage2: "https://images.unsplash.com/photo-1620126938222-262145e54d68?q=80&w=1000&auto=format&fit=crop"
                    },
                    {
                        id: 4,
                        name: "Peace Lily",
                        botanical: "Spathiphyllum",
                        price: 40,
                        category: "Pet Friendly",
                        description: "Known for its brilliant white blooms and air-purifying qualities. The Peace Lily is communicative—its leaves droop when it's thirsty.",
                        image: "https://images.unsplash.com/photo-1593691509543-c55ce32e0112?q=80&w=1000&auto=format&fit=crop",
                        detailImage1: "https://images.unsplash.com/photo-1616690248297-2a62372f8839?q=80&w=1000&auto=format&fit=crop",
                        detailImage2: "https://images.unsplash.com/photo-1512428813830-3449339e102f?q=80&w=1000&auto=format&fit=crop"
                    },
                    {
                        id: 5,
                        name: "Rubber Plant",
                        botanical: "Ficus elastica",
                        price: 65,
                        category: "Indoor",
                        description: "Glossy, dark burgundy leaves make the Rubber Plant a dramatic addition. It grows quickly and prefers bright indirect light.",
                        image: "https://images.unsplash.com/photo-1598880940080-ff9a29891ad4?q=80&w=1000&auto=format&fit=crop",
                        detailImage1: "https://images.unsplash.com/photo-1463320698377-82958b5e342a?q=80&w=1000&auto=format&fit=crop",
                        detailImage2: "https://images.unsplash.com/photo-1599026466981-9b7e71661642?q=80&w=1000&auto=format&fit=crop"
                    },
                    {
                        id: 6,
                        name: "Aloe Vera",
                        botanical: "Aloe barbadensis miller",
                        price: 25,
                        category: "Succulent",
                        description: "A functional succulent that is as useful as it is beautiful. Needs very little water and loves sunny spots.",
                        image: "https://images.unsplash.com/photo-1612361734250-d4644552431d?q=80&w=1000&auto=format&fit=crop",
                        detailImage1: "https://images.unsplash.com/photo-1596547610214-411a5416df08?q=80&w=1000&auto=format&fit=crop",
                        detailImage2: "https://images.unsplash.com/photo-1555037015-1498966f20ad?q=80&w=1000&auto=format&fit=crop"
                    }
                ],

                get categories() {
                    return [...new Set(this.products.map(p => p.category))];
                },

                get filteredProducts() {
                    let result = this.products.filter(p => {
                        let catMatch = this.selectedCategories.length === 0 || this.selectedCategories.includes(p.category);
                        let priceMatch = p.price <= this.maxPrice;
                        return catMatch && priceMatch;
                    });

                    if (this.sortBy === 'price-asc') {
                        result.sort((a, b) => a.price - b.price);
                    } else if (this.sortBy === 'price-desc') {
                        result.sort((a, b) => b.price - a.price);
                    }
                    return result;
                },

                get cartCount() {
                    return this.cart.reduce((acc, item) => acc + item.qty, 0);
                },

                get cartTotal() {
                    return this.cart.reduce((acc, item) => acc + (item.product.price * item.qty), 0);
                },

                initShop() {
                    // Pre-select logic if needed
                },

                navigate(page) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    this.page = page;
                },

                filterAndNavigate(category) {
                    this.selectedCategories = [category];
                    this.navigate('catalog');
                },

                viewProduct(product) {
                    this.activeProduct = product;
                    this.navigate('product');
                },

                addToCart(product, qty) {
                    let existing = this.cart.find(item => item.product.id === product.id);
                    if (existing) {
                        existing.qty += qty;
                    } else {
                        this.cart.push({ product: product, qty: qty });
                    }
                    // Simple toast notification logic could go here
                },

                updateQty(index, change) {
                    if (this.cart[index].qty + change > 0) {
                        this.cart[index].qty += change;
                    } else {
                        this.removeFromCart(index);
                    }
                },

                removeFromCart(index) {
                    this.cart.splice(index, 1);
                },

                placeOrder() {
                    // Simulate API call
                    setTimeout(() => {
                        this.navigate('success');
                        this.cart = [];
                    }, 1000);
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
      

<header className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden p-1 text-stone-600 hover:text-stone-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div @click="navigate('home')" className="cursor-pointer">
<span className="text-lg font-bold tracking-tighter uppercase text-stone-900">Botanica.</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a @click.prevent="navigate('home')" className="hover:text-stone-900 transition-colors" href="#">Home</a>
<a @click.prevent="navigate('catalog')" className="hover:text-stone-900 transition-colors" href="#">Shop</a>
<a className="hover:text-stone-900 transition-colors" href="#">Care Guide</a>
<a className="hover:text-stone-900 transition-colors" href="#">About</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden sm:block text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button @click="navigate('cart')" className="relative text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-stone-900 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold" x-show="cartCount &gt; 0" x-text="cartCount" x-transition=""></span>
</button>
</div>
</div>
</header>

<main className="pt-16 min-h-screen flex flex-col">

<div className="flex-grow" x-show="page === 'home'" x-transition.opacity.duration.300ms="">

<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Plant Hero" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/10"></div>
</div>
<div className="relative z-10 text-center text-white px-4 max-w-2xl">
<span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-wide mb-4 backdrop-blur-sm">NEW ARRIVALS SPRING '24</span>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 leading-tight">Bring the serenity of nature indoors.</h1>
<p className="text-stone-100 text-sm md:text-base font-light mb-8 max-w-lg mx-auto leading-relaxed">Curated selection of rare and low-maintenance plants for the modern home.</p>
<button @click="navigate('catalog')" className="bg-white text-stone-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors">
                        Shop Collection
                    </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="flex justify-between items-end mb-8">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Curated Categories</h2>
<button @click="navigate('catalog')" className="text-sm text-stone-500 hover:text-stone-900 flex items-center gap-1 group">
                        View all <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div @click="filterAndNavigate('Indoor')" className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-100 cursor-pointer">
<img alt="Large Plants" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
<h3 className="text-white text-lg font-medium tracking-tight">Large Indoor</h3>
</div>
</div>

<div @click="filterAndNavigate('Succulent')" className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-100 cursor-pointer">
<img alt="Succulents" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
<h3 className="text-white text-lg font-medium tracking-tight">Succulents</h3>
</div>
</div>

<div @click="filterAndNavigate('Pet Friendly')" className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-100 cursor-pointer">
<img alt="Pet Friendly" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
<h3 className="text-white text-lg font-medium tracking-tight">Pet Friendly</h3>
</div>
</div>
</div>
</section>
</div>

<div className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full" x-cloak="" x-show="page === 'catalog'">
<div className="flex flex-col md:flex-row gap-12">

<aside className="w-full md:w-64 flex-shrink-0 space-y-8">
<div>
<h3 className="text-sm font-semibold text-stone-900 mb-4 tracking-tight uppercase">Categories</h3>
<div className="space-y-2">
<template :key="cat" x-htmlFor="cat in categories">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input :value="cat" className="peer appearance-none w-4 h-4 border border-stone-300 rounded checked:bg-stone-900 checked:border-stone-900 transition-colors" type="checkbox" x-model="selectedCategories"/>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check" style={{margin: '1px'}} width="14"></iconify-icon>
</div>
<span className="text-sm text-stone-500 group-hover:text-stone-800 transition-colors" x-text="cat"></span>
</label>
</template>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-900 mb-4 tracking-tight uppercase">Price Range</h3>
<input className="w-full mb-2" max="200" min="0" step="10" type="range" x-model="maxPrice"/>
<div className="flex justify-between text-xs text-stone-500 font-medium">
<span>$0</span>
<span x-text="'$' + maxPrice"></span>
</div>
</div>
</aside>

<div className="flex-grow">
<div className="flex justify-between items-center mb-6">
<span className="text-sm text-stone-500" x-text="filteredProducts.length + ' products'"></span>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-stone-500 uppercase">Sort by</span>
<select className="bg-transparent border-none text-sm font-medium text-stone-900 focus:ring-0 cursor-pointer pr-8" x-model="sortBy">
<option value="featured">Featured</option>
<option value="price-asc">Price: Low to High</option>
<option value="price-desc">Price: High to Low</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
<template :key="product.id" x-htmlFor="product in filteredProducts">
<div @click="viewProduct(product)" className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-stone-100 rounded-lg overflow-hidden mb-4">
<img :alt="product.name" :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
<button @click.stop="addToCart(product, 1)" className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-900 tracking-tight" x-text="product.name"></h3>
<span className="text-sm text-stone-500 font-medium" x-text="'$' + product.price"></span>
</div>
<p className="text-xs text-stone-500 mt-1 italic" x-text="product.botanical"></p>
</div>
</div>
</template>
</div>
</div>
</div>
</div>

<div className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full" x-cloak="" x-show="page === 'product'">
<button @click="navigate('catalog')" className="mb-8 text-sm text-stone-500 hover:text-stone-900 flex items-center gap-2 transition-colors">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="16"></iconify-icon> Back to Shop
            </button>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20" x-data="{ qty: 1 }">

<div className="space-y-4">
<div className="aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="w-full h-full object-cover"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-square bg-stone-100 rounded-lg overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="w-full h-full object-cover"/>
</div>
<div className="aspect-square bg-stone-100 rounded-lg overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" className="w-full h-full object-cover"/>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<span className="text-xs font-semibold tracking-wider uppercase text-green-800 mb-2" x-text="activeProduct?.category"></span>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-2" x-text="activeProduct?.name"></h1>
<p className="text-lg text-stone-500 italic mb-6 font-serif" x-text="activeProduct?.botanical"></p>
<div className="text-2xl font-medium text-stone-900 mb-8" x-text="'$' + activeProduct?.price"></div>
<p className="text-stone-600 leading-relaxed mb-8 font-light" x-text="activeProduct?.description"></p>

<div className="grid grid-cols-3 gap-4 border-y border-stone-200 py-6 mb-8">
<div className="flex flex-col items-center text-center gap-2">
<iconify-icon className="text-stone-700" icon="lucide:sun" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-stone-500">Bright Indirect</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<iconify-icon className="text-stone-700" icon="lucide:droplets" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-stone-500">Weekly Water</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<iconify-icon className="text-stone-700" icon="lucide:thermometer" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-stone-500">65-85°F</span>
</div>
</div>

<div className="flex gap-4">
<div className="flex items-center border border-stone-300 rounded-lg h-12 w-32 px-3">
<button @click="qty &gt; 1 ? qty-- : null" className="w-8 h-full flex items-center justify-center text-stone-500 hover:text-stone-900">
<iconify-icon icon="lucide:minus" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<input className="w-full text-center bg-transparent border-none focus:ring-0 text-stone-900 font-medium" readonly="" type="number" x-model="qty"/>
<button @click="qty++" className="w-8 h-full flex items-center justify-center text-stone-500 hover:text-stone-900">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<button @click="addToCart(activeProduct, qty); qty = 1" className="flex-grow bg-stone-900 text-white h-12 rounded-lg font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                            Add to Cart
                        </button>
</div>
</div>
</div>
</div>

<div className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full" x-cloak="" x-show="page === 'cart'">
<h1 className="text-2xl font-semibold tracking-tight mb-8">Shopping Cart</h1>
<div className="text-center py-20 bg-stone-50 border border-stone-200 rounded-lg border-dashed" x-show="cart.length === 0">
<iconify-icon className="text-stone-300 mb-4" icon="lucide:shopping-bag" strokeWidth="1" width="48"></iconify-icon>
<p className="text-stone-500 mb-4">Your cart is currently empty.</p>
<button @click="navigate('catalog')" className="text-sm font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600">Start Shopping</button>
</div>
<div className="flex flex-col lg:flex-row gap-12" x-show="cart.length &gt; 0">

<div className="flex-grow space-y-6">
<template :key="index" x-htmlFor="(item, index) in cart">
<div className="flex gap-6 py-6 border-b border-stone-100 last:border-0">
<div className="w-24 h-24 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" className="w-full h-full object-cover"/>
</div>
<div className="flex-grow flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-stone-900" x-text="item.product.name"></h3>
<p className="text-sm text-stone-500" x-text="item.product.category"></p>
</div>
<span className="text-base font-medium text-stone-900" x-text="'$' + (item.product.price * item.qty)"></span>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center border border-stone-200 rounded-md h-8 w-24">
<button @click="updateQty(index, -1)" className="w-8 h-full flex items-center justify-center text-stone-400 hover:text-stone-900">
<iconify-icon icon="lucide:minus" strokeWidth="1.5" width="12"></iconify-icon>
</button>
<span className="flex-grow text-center text-xs font-medium text-stone-900" x-text="item.qty"></span>
<button @click="updateQty(index, 1)" className="w-8 h-full flex items-center justify-center text-stone-400 hover:text-stone-900">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="12"></iconify-icon>
</button>
</div>
<button @click="removeFromCart(index)" className="text-xs text-stone-400 hover:text-red-600 transition-colors underline">Remove</button>
</div>
</div>
</div>
</template>
</div>

<div className="w-full lg:w-96 flex-shrink-0">
<div className="bg-stone-100/50 p-6 rounded-lg border border-stone-200">
<h3 className="font-medium text-stone-900 mb-4">Order Summary</h3>
<div className="space-y-3 text-sm border-b border-stone-200 pb-4 mb-4">
<div className="flex justify-between text-stone-500">
<span>Subtotal</span>
<span className="text-stone-900" x-text="'$' + cartTotal"></span>
</div>
<div className="flex justify-between text-stone-500">
<span>Shipping estimate</span>
<span className="text-stone-900">$15.00</span>
</div>
<div className="flex justify-between text-stone-500">
<span>Tax</span>
<span className="text-stone-900" x-text="'$' + (cartTotal * 0.08).toFixed(2)"></span>
</div>
</div>
<div className="flex justify-between font-medium text-base text-stone-900 mb-6">
<span>Order Total</span>
<span x-text="'$' + (cartTotal + 15 + (cartTotal * 0.08)).toFixed(2)"></span>
</div>
<button @click="navigate('checkout')" className="w-full bg-stone-900 text-white py-3 rounded-md text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm">
                            Proceed to Checkout
                        </button>
</div>
</div>
</div>
</div>

<div className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full" x-cloak="" x-show="page === 'checkout'">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-lg font-semibold tracking-tight mb-6">Shipping Information</h2>
<form @submit.prevent="placeOrder" className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-stone-500 mb-1">First Name</label>
<input className="w-full bg-transparent border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-stone-900 focus:ring-0 transition-colors" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 mb-1">Last Name</label>
<input className="w-full bg-transparent border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-stone-900 focus:ring-0 transition-colors" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 mb-1">Email Address</label>
<input className="w-full bg-transparent border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-stone-900 focus:ring-0 transition-colors" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 mb-1">Address</label>
<input className="w-full bg-transparent border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-stone-900 focus:ring-0 transition-colors" required="" type="text"/>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="col-span-1">
<label className="block text-xs font-medium text-stone-500 mb-1">Zip Code</label>
<input className="w-full bg-transparent border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-stone-900 focus:ring-0 transition-colors" required="" type="text"/>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-stone-500 mb-1">City</label>
<input className="w-full bg-transparent border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-stone-900 focus:ring-0 transition-colors" required="" type="text"/>
</div>
</div>
<h2 className="text-lg font-semibold tracking-tight mt-10 mb-6">Payment Details</h2>
<div className="p-4 border border-stone-200 rounded-lg bg-stone-50/50 mb-4">
<div className="flex items-center gap-3 mb-4">
<div className="w-4 h-4 rounded-full border border-stone-400 bg-stone-900 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-sm font-medium">Credit Card</span>
<div className="flex gap-2 ml-auto text-stone-400">
<iconify-icon icon="lucide:credit-card" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<input className="w-full bg-white border border-stone-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-stone-900 focus:ring-0 transition-colors placeholder:text-stone-400" placeholder="Card Number" required="" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white border border-stone-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-stone-900 focus:ring-0 transition-colors placeholder:text-stone-400" placeholder="MM / YY" required="" type="text"/>
<input className="w-full bg-white border border-stone-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-stone-900 focus:ring-0 transition-colors placeholder:text-stone-400" placeholder="CVC" required="" type="text"/>
</div>
</div>
</div>
<button className="w-full bg-stone-900 text-white py-4 rounded-md text-sm font-medium hover:bg-stone-800 transition-colors mt-6 shadow-sm flex justify-center items-center gap-2" type="submit">
<span>Pay</span>
<span x-text="'$' + (cartTotal + 15 + (cartTotal * 0.08)).toFixed(2)"></span>
</button>
</form>
</div>

<div className="bg-stone-100/50 p-8 rounded-xl h-fit border border-stone-200">
<h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-6">In Your Bag</h3>
<div className="space-y-4 mb-8">
<template :key="item.product.id" x-htmlFor="item in cart">
<div className="flex gap-4">
<div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0 border border-stone-200">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" className="w-full h-full object-cover"/>
</div>
<div className="flex-grow">
<h4 className="text-sm font-medium text-stone-900" x-text="item.product.name"></h4>
<p className="text-xs text-stone-500">Qty: <span x-text="item.qty"></span></p>
</div>
<span className="text-sm font-medium text-stone-900" x-text="'$' + (item.product.price * item.qty)"></span>
</div>
</template>
</div>
<div className="border-t border-stone-200 pt-6 space-y-2">
<div className="flex justify-between text-sm text-stone-500">
<span>Subtotal</span>
<span className="text-stone-900" x-text="'$' + cartTotal"></span>
</div>
<div className="flex justify-between text-sm text-stone-500">
<span>Shipping</span>
<span className="text-stone-900">$15.00</span>
</div>
<div className="flex justify-between text-base font-medium text-stone-900 pt-2">
<span>Total</span>
<span x-text="'$' + (cartTotal + 15 + (cartTotal * 0.08)).toFixed(2)"></span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-grow flex items-center justify-center p-6" x-cloak="" x-show="page === 'success'">
<div className="max-w-md w-full text-center">
<div className="w-20 h-20 bg-green-50 text-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="lucide:check" strokeWidth="2" width="40"></iconify-icon>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-stone-900 mb-2">Order Confirmed!</h1>
<p className="text-stone-500 mb-8">Thank you for your purchase. Your green friends are getting ready for their journey home. Order #<span className="text-stone-900 font-mono">BOT-8834</span></p>
<div className="bg-stone-100 p-6 rounded-lg mb-8 text-left">
<p className="text-xs text-stone-500 uppercase tracking-wide mb-2">Shipping to</p>
<p className="text-sm font-medium text-stone-900">Jane Doe</p>
<p className="text-sm text-stone-600">123 Botany Lane, Garden City, NY 10012</p>
</div>
<button @click="navigate('home'); cart = []" className="bg-stone-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
                    Continue Shopping
                </button>
</div>
</div>
</main>

<footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800 mt-auto">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div>
<span className="text-white text-lg font-bold tracking-tighter uppercase block mb-4">Botanica.</span>
<p className="text-sm font-light leading-relaxed">Reconnecting people with nature through curated indoor plants and sustainable accessories.</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Shop</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Large Plants</a></li>
<li><a className="hover:text-white transition-colors" href="#">Succulents</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Care Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Newsletter</h4>
<div className="flex gap-2">
<input className="bg-stone-800 border-none rounded-md text-sm px-3 py-2 w-full focus:ring-1 focus:ring-white" placeholder="email@example.com" type="email"/>
<button className="bg-white text-stone-900 px-3 py-2 rounded-md text-sm font-medium">Sub</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 Botanica Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
