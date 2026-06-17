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



        const app = {
            state: {
                page: 'home',
                cart: [],
                products: [
                    { id: 1, name: "Sony XM5", price: 348.00, category: "Tech", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=300", desc: "Industry-leading noise cancellation with two processors controlling 8 microphones." },
                    { id: 2, name: "Nike Air Max", price: 120.00, category: "Fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300", desc: "The Nike Air Max delivers comfortable style for everyday use." },
                    { id: 3, name: "Apple Watch", price: 399.00, category: "Tech", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=300", desc: "The ultimate device for a healthy life. Available in three models." },
                    { id: 4, name: "Travel Pack", price: 85.00, category: "Fashion", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300", desc: "Durable, water-resistant backpack perfect for daily commutes." },
                    { id: 5, name: "Smart Lamp", price: 45.00, category: "Home", image: "https://images.unsplash.com/photo-1507473888900-52e1ad14592d?auto=format&fit=crop&q=80&w=300", desc: "Control your lighting with voice or app. 16 million colors." },
                    { id: 6, name: "Yoga Mat", price: 29.99, category: "Sports", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=300", desc: "Non-slip surface with excellent cushioning for all types of yoga." }
                ],
                currentProduct: null
            },

            init() {
                this.renderProducts('All');
                this.router('home');
            },

            // Navigation
            router(page) {
                // Hide all sections
                document.querySelectorAll('section').forEach(el => el.classList.add('hidden'));
                window.scrollTo(0,0);
                
                // Show requested page
                const target = document.getElementById(`page-${page}`);
                target.classList.remove('hidden');
                
                // Update State
                this.state.page = page;
                
                // Update UI elements based on page
                this.updateUI(page);
            },

            updateUI(page) {
                const title = document.getElementById('page-title');
                const bottomNav = document.getElementById('bottom-nav');
                const backBtn = document.getElementById('back-btn');
                const fab = document.getElementById('fab-container');
                const productBar = document.getElementById('action-bar-product');

                // Bottom Nav Active State
                document.querySelectorAll('.nav-item').forEach(btn => {
                    const indicator = btn.querySelector('.indicator');
                    const icon = btn.querySelector('.iconify');
                    const text = btn.querySelector('span:last-child');
                    
                    if(btn.dataset.target === page && page !== 'product') {
                        indicator.classList.remove('bg-transparent');
                        indicator.classList.add('bg-[#e8def8]');
                        icon.classList.remove('text-[#49454f]');
                        icon.classList.add('text-[#1d192b]');
                        text.classList.add('font-bold');
                    } else {
                        indicator.classList.add('bg-transparent');
                        indicator.classList.remove('bg-[#e8def8]');
                        icon.classList.add('text-[#49454f]');
                        icon.classList.remove('text-[#1d192b]');
                        text.classList.remove('font-bold');
                    }
                });

                // Visibility logic
                if(page === 'product') {
                    bottomNav.classList.add('hidden');
                    productBar.classList.remove('hidden');
                    backBtn.classList.remove('hidden');
                    fab.classList.add('hidden');
                    fab.classList.remove('scale-100');
                    title.textContent = '';
                } else if (page === 'cart') {
                    bottomNav.classList.remove('hidden');
                    productBar.classList.add('hidden');
                    backBtn.classList.remove('hidden');
                    title.textContent = 'Shopping Cart';
                    
                    if(this.state.cart.length > 0) {
                        fab.classList.remove('hidden');
                        setTimeout(() => fab.classList.add('scale-100'), 100);
                    } else {
                        fab.classList.add('hidden');
                        fab.classList.remove('scale-100');
                    }
                    this.renderCart();
                } else { // Home, Favorites
                    bottomNav.classList.remove('hidden');
                    productBar.classList.add('hidden');
                    backBtn.classList.add('hidden');
                    fab.classList.add('hidden');
                    fab.classList.remove('scale-100');
                    title.textContent = page === 'favorites' ? 'Saved' : 'Discover';
                }
            },

            goBack() {
                if(this.state.page === 'product' || this.state.page === 'cart') {
                    this.router('home');
                } else {
                    this.router('home');
                }
            },

            // Product Logic
            renderProducts(filter) {
                const grid = document.getElementById('product-grid');
                grid.innerHTML = '';
                
                const filtered = filter === 'All' 
                    ? this.state.products 
                    : this.state.products.filter(p => p.category === filter);

                filtered.forEach(p => {
                    const el = document.createElement('div');
                    el.className = 'bg-[#f3f3fa] rounded-2xl p-3 pb-4 ripple cursor-pointer hover:shadow-md transition-all';
                    el.onclick = () => this.showProduct(p);
                    el.innerHTML = `
                        <div class="bg-white rounded-xl h-32 w-full mb-3 flex items-center justify-center overflow-hidden">
                            <img src="${p.image}" class="h-24 object-contain mix-blend-multiply" alt="${p.name}">
                        </div>
                        <h4 class="text-sm font-medium text-[#1b1b1f] truncate">${p.name}</h4>
                        <p class="text-xs text-[#44474f] mb-2">${p.category}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-semibold text-[#1b1b1f]">$${p.price.toFixed(0)}</span>
                            <button class="w-8 h-8 rounded-full bg-white text-[#1b1b1f] flex items-center justify-center shadow-sm">
                                <span class="iconify" data-icon="lucide:plus" data-width="16"></span>
                            </button>
                        </div>
                    `;
                    grid.appendChild(el);
                });
            },

            filter(category, btn) {
                // Visual toggle
                document.querySelectorAll('.category-chip').forEach(b => {
                    b.classList.remove('bg-[#e8def8]', 'text-[#1d192b]', 'border-transparent');
                    b.classList.add('bg-white', 'border-[#79747e]', 'text-[#49454f]');
                });
                btn.classList.remove('bg-white', 'border-[#79747e]', 'text-[#49454f]');
                btn.classList.add('bg-[#e8def8]', 'text-[#1d192b]', 'border-transparent');
                
                this.renderProducts(category);
            },

            showProduct(product) {
                this.state.currentProduct = product;
                
                document.getElementById('detail-img').src = product.image;
                document.getElementById('detail-title').textContent = product.name;
                document.getElementById('detail-price').textContent = '$' + product.price.toFixed(2);
                document.getElementById('detail-desc').textContent = product.desc;
                document.getElementById('bar-price').textContent = '$' + product.price.toFixed(2);
                
                this.router('product');
            },

            // Cart Logic
            addToCart() {
                const product = this.state.currentProduct;
                const existing = this.state.cart.find(item => item.id === product.id);
                
                if(existing) {
                    existing.qty++;
                } else {
                    this.state.cart.push({ ...product, qty: 1 });
                }
                
                this.showToast('Added to cart');
                this.updateCartCount();
                this.goBack(); // Optional: go back to shop after adding
            },

            removeFromCart(id) {
                this.state.cart = this.state.cart.filter(item => item.id !== id);
                this.renderCart();
                this.updateCartCount();
                if(this.state.cart.length === 0) {
                    document.getElementById('fab-container').classList.add('hidden');
                }
            },

            updateQty(id, change) {
                const item = this.state.cart.find(i => i.id === id);
                if(item) {
                    item.qty += change;
                    if(item.qty <= 0) this.removeFromCart(id);
                    else this.renderCart();
                }
            },

            renderCart() {
                const container = document.getElementById('cart-items');
                const summary = document.getElementById('cart-summary');
                const empty = document.getElementById('empty-cart');
                
                container.innerHTML = '';
                
                if(this.state.cart.length === 0) {
                    container.classList.add('hidden');
                    summary.classList.add('hidden');
                    empty.classList.remove('hidden');
                    return;
                }

                container.classList.remove('hidden');
                summary.classList.remove('hidden');
                empty.classList.add('hidden');

                let total = 0;

                this.state.cart.forEach(item => {
                    total += item.price * item.qty;
                    const el = document.createElement('div');
                    el.className = 'flex gap-4 bg-white p-3 rounded-2xl shadow-sm border border-slate-100';
                    el.innerHTML = `
                        <div class="w-20 h-20 bg-[#f3f3fa] rounded-xl flex items-center justify-center flex-shrink-0">
                            <img src="${item.image}" class="w-16 h-16 object-contain mix-blend-multiply" alt="">
                        </div>
                        <div class="flex-1 flex flex-col justify-between py-1">
                            <div class="flex justify-between items-start">
                                <h4 class="font-medium text-[#1b1b1f] text-sm">${item.name}</h4>
                                <button onclick="app.removeFromCart(${item.id})" class="text-[#8e9199]">
                                    <span class="iconify" data-icon="lucide:x" data-width="16"></span>
                                </button>
                            </div>
                            <div class="flex justify-between items-end">
                                <span class="font-semibold text-[#1b1b1f]">$${(item.price * item.qty).toFixed(2)}</span>
                                <div class="flex items-center gap-3 bg-[#f3f3fa] rounded-full px-2 py-1">
                                    <button onclick="app.updateQty(${item.id}, -1)" class="w-5 h-5 flex items-center justify-center text-[#44474f]"><span class="iconify" data-icon="lucide:minus" data-width="12"></span></button>
                                    <span class="text-xs font-medium w-3 text-center">${item.qty}</span>
                                    <button onclick="app.updateQty(${item.id}, 1)" class="w-5 h-5 flex items-center justify-center text-[#44474f]"><span class="iconify" data-icon="lucide:plus" data-width="12"></span></button>
                                </div>
                            </div>
                        </div>
                    `;
                    container.appendChild(el);
                });

                document.getElementById('cart-subtotal').textContent = '$' + total.toFixed(2);
                document.getElementById('cart-total').textContent = '$' + total.toFixed(2);
            },

            updateCartCount() {
                const badge = document.getElementById('cart-badge');
                const count = this.state.cart.reduce((acc, item) => acc + item.qty, 0);
                
                if(count > 0) {
                    badge.classList.remove('hidden');
                } else {
                    badge.classList.add('hidden');
                }
            },

            showToast(msg) {
                const toast = document.getElementById('toast');
                toast.textContent = msg;
                toast.classList.remove('opacity-0');
                setTimeout(() => toast.classList.add('opacity-0'), 2000);
            },
            
            showPromo() {
                this.filter('Fashion', document.querySelectorAll('.category-chip')[2]);
                window.scrollTo({top: 400, behavior: 'smooth'});
            },

            checkout() {
                this.showToast('Processing Payment...');
                setTimeout(() => {
                    this.state.cart = [];
                    this.updateCartCount();
                    this.router('home');
                    this.showToast('Order Placed Successfully!');
                }, 1500);
            }
        };

        // Initialize App
        window.addEventListener('DOMContentLoaded', () => app.init());
    
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
      

<header className="h-16 px-4 flex items-center justify-between bg-[#fdfcff] sticky top-0 z-20 transition-shadow" id="top-bar">
<div className="flex items-center gap-4">
<button className="hidden p-2 rounded-full hover:bg-slate-100 transition-colors" id="back-btn" onclick="app.goBack()">
<span className="iconify" data-icon="lucide:arrow-left" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-[22px] font-normal tracking-normal text-[#1b1b1f]" id="page-title">Discover</h1>
</div>
<div className="flex items-center gap-2">
<button className="p-3 rounded-full hover:bg-slate-100 transition-colors relative" onclick="app.router('cart')">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="hidden absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" id="cart-badge"></span>
</button>
<button className="p-3 rounded-full hover:bg-slate-100 transition-colors">
<span className="iconify" data-icon="lucide:more-vertical" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-24 relative" id="main-container">

<section className="page-transition min-h-full" id="page-home">

<div className="px-4 mb-6 pt-2">
<div className="bg-[#ece6f0] h-14 rounded-full flex items-center px-4 gap-3 text-[#44474f]">
<span className="iconify" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-base tracking-wide flex-1">Search products...</span>
<span className="iconify" data-icon="lucide:mic" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>

<div className="flex gap-3 overflow-x-auto px-4 pb-6 no-scrollbar">
<button className="category-chip whitespace-nowrap px-6 py-2 rounded-lg text-sm font-medium bg-[#e8def8] text-[#1d192b] border border-transparent transition-all" onclick="app.filter('All', this)">All</button>
<button className="category-chip whitespace-nowrap px-6 py-2 rounded-lg text-sm font-medium bg-white border border-[#79747e] text-[#49454f] transition-all" onclick="app.filter('Tech', this)">Tech</button>
<button className="category-chip whitespace-nowrap px-6 py-2 rounded-lg text-sm font-medium bg-white border border-[#79747e] text-[#49454f] transition-all" onclick="app.filter('Fashion', this)">Fashion</button>
<button className="category-chip whitespace-nowrap px-6 py-2 rounded-lg text-sm font-medium bg-white border border-[#79747e] text-[#49454f] transition-all" onclick="app.filter('Home', this)">Home</button>
<button className="category-chip whitespace-nowrap px-6 py-2 rounded-lg text-sm font-medium bg-white border border-[#79747e] text-[#49454f] transition-all" onclick="app.filter('Sports', this)">Sports</button>
</div>

<div className="px-4 mb-8">
<div className="relative w-full h-48 bg-[#6750a4] rounded-3xl overflow-hidden flex items-center justify-between p-6 text-white shadow-md ripple cursor-pointer" onclick="app.showPromo()">
<div className="z-10">
<span className="text-xs font-medium tracking-wider uppercase opacity-80 mb-1 block">New Arrival</span>
<h2 className="text-2xl font-normal mb-3">Summer<br/>Collection</h2>
<button className="bg-white text-[#6750a4] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">Shop Now</button>
</div>
<div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/10 to-transparent"></div>
<span className="iconify absolute -bottom-4 -right-4 text-white/20 rotate-12" data-icon="lucide:sun" data-width="140" style={{strokeWidth: '1'}}></span>
</div>
</div>

<div className="px-4">
<h3 className="text-lg font-medium text-[#1b1b1f] mb-4">Popular Items</h3>
<div className="grid grid-cols-2 gap-4 pb-4" id="product-grid">

</div>
</div>
</section>

<section className="hidden min-h-full bg-[#fdfcff] pb-24" id="page-product">
<div className="w-full h-80 bg-[#f3f3fa] rounded-b-[2rem] relative overflow-hidden flex items-center justify-center mb-4">
<img alt="Product" className="w-48 h-48 object-contain mix-blend-multiply transition-transform duration-500 hover:scale-110" id="detail-img" src=""/>
</div>
<div className="px-6">
<div className="flex justify-between items-start mb-2">
<h2 className="text-2xl font-normal text-[#1b1b1f]" id="detail-title">Product Name</h2>
<span className="text-xl font-medium text-[#6750a4]" id="detail-price">$0.00</span>
</div>
<div className="flex items-center gap-1 mb-6">
<span className="iconify text-[#e2b93b]" data-icon="lucide:star" data-width="16" style={{strokeWidth: '2'}}></span>
<span className="text-sm text-[#44474f] font-medium">4.8</span>
<span className="text-sm text-[#8e9199] ml-1">(124 reviews)</span>
</div>
<div className="mb-6">
<h3 className="text-sm font-medium text-[#1b1b1f] mb-3">Description</h3>
<p className="text-[#44474f] text-sm leading-relaxed tracking-wide" id="detail-desc">
                        Detailed product description goes here.
                    </p>
</div>
<div className="mb-8">
<h3 className="text-sm font-medium text-[#1b1b1f] mb-3">Color</h3>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full bg-[#1b1b1f] border-2 border-[#6750a4] flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</button>
<button className="w-10 h-10 rounded-full bg-[#5c5c5c]"></button>
<button className="w-10 h-10 rounded-full bg-[#e3e3e3]"></button>
</div>
</div>
</div>
</section>

<section className="hidden min-h-full px-4 pt-4" id="page-cart">
<div className="space-y-4" id="cart-items">

</div>
<div className="hidden flex flex-col items-center justify-center h-64 text-center" id="empty-cart">
<div className="w-20 h-20 bg-[#f3f3fa] rounded-full flex items-center justify-center mb-4">
<span className="iconify text-[#8e9199]" data-icon="lucide:shopping-cart" data-width="32"></span>
</div>
<p className="text-[#1b1b1f] text-lg font-medium">Your cart is empty</p>
<p className="text-[#44474f] text-sm mt-1">Looks like you haven't added anything yet.</p>
<button className="mt-6 text-[#6750a4] font-medium text-sm" onclick="app.router('home')">Start Shopping</button>
</div>

<div className="mt-8 bg-[#f3f3fa] rounded-2xl p-5 mb-24" id="cart-summary">
<div className="flex justify-between mb-3 text-sm">
<span className="text-[#44474f]">Subtotal</span>
<span className="font-medium" id="cart-subtotal">$0.00</span>
</div>
<div className="flex justify-between mb-4 text-sm">
<span className="text-[#44474f]">Shipping</span>
<span className="font-medium text-green-600">Free</span>
</div>
<div className="h-px bg-slate-200 w-full mb-4"></div>
<div className="flex justify-between items-center">
<span className="text-base font-medium text-[#1b1b1f]">Total</span>
<span className="text-xl font-bold text-[#1b1b1f]" id="cart-total">$0.00</span>
</div>
</div>
</section>

<section className="hidden min-h-full flex items-center justify-center" id="page-favorites">
<div className="text-center p-8">
<span className="iconify mx-auto mb-4 text-[#e8def8] text-6xl" data-icon="lucide:heart"></span>
<h3 className="text-lg font-medium text-[#1b1b1f]">Your Favorites</h3>
<p className="text-[#44474f] text-sm mt-2">Save items you want to see later here.</p>
</div>
</section>
</main>

<div className="fixed bottom-24 right-4 z-20 hidden scale-0 transition-transform duration-300" id="fab-container">
<button className="h-14 bg-[#6750a4] hover:bg-[#7d64c2] text-white px-6 rounded-2xl shadow-lg shadow-[#6750a4]/30 flex items-center gap-2 ripple" onclick="app.checkout()">
<span className="iconify" data-icon="lucide:credit-card" data-width="20"></span>
<span className="font-medium text-sm tracking-wide">Checkout</span>
</button>
</div>

<div className="fixed bottom-0 left-0 w-full bg-[#fdfcff] border-t border-[#e7e0ec] p-4 pb-6 hidden z-30 slide-up" id="action-bar-product">
<div className="flex justify-between items-center gap-4 max-w-md mx-auto">
<div className="flex flex-col">
<span className="text-xs text-[#44474f]">Total Price</span>
<span className="text-xl font-bold text-[#1b1b1f]" id="bar-price">$0.00</span>
</div>
<button className="flex-1 h-12 bg-[#6750a4] text-white rounded-full font-medium text-sm tracking-wide shadow-md ripple flex items-center justify-center gap-2" onclick="app.addToCart()">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="18"></span>
                Add to Cart
            </button>
</div>
</div>

<nav className="fixed bottom-0 w-full bg-[#f0f4f8] h-20 pb-2 z-30 flex justify-around items-center border-t border-transparent" id="bottom-nav">
<button className="nav-item group flex flex-col items-center w-16 gap-1" data-target="home" onclick="app.router('home')">
<div className="indicator w-16 h-8 rounded-full flex items-center justify-center transition-colors bg-[#e8def8]">
<span className="iconify text-[#1d192b]" data-icon="lucide:home" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-xs font-medium text-[#1d192b] group-hover:text-black">Home</span>
</button>
<button className="nav-item group flex flex-col items-center w-16 gap-1" data-target="favorites" onclick="app.router('favorites')">
<div className="indicator w-16 h-8 rounded-full flex items-center justify-center transition-colors bg-transparent">
<span className="iconify text-[#49454f]" data-icon="lucide:heart" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-xs font-medium text-[#49454f] group-hover:text-black">Saved</span>
</button>
<button className="nav-item group flex flex-col items-center w-16 gap-1" data-target="cart" onclick="app.router('cart')">
<div className="indicator w-16 h-8 rounded-full flex items-center justify-center transition-colors bg-transparent">
<span className="iconify text-[#49454f]" data-icon="lucide:shopping-cart" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-xs font-medium text-[#49454f] group-hover:text-black">Cart</span>
</button>
</nav>

<div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-[#322f35] text-[#f4eff4] px-4 py-3 rounded-lg shadow-lg text-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300 min-w-[200px] text-center" id="toast">
        Item added to cart
    </div>


    </>
  );
}
