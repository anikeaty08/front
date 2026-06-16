import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let cart = [];
        
        // Cart functionality
        const cartBtn = document.getElementById('cartBtn');
        const cartSidebar = document.getElementById('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');
        const closeCart = document.getElementById('closeCart');
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        cartBtn.addEventListener('click', () => {
            cartSidebar.classList.remove('hidden');
        });

        closeCart.addEventListener('click', () => {
            cartSidebar.classList.add('hidden');
        });

        cartOverlay.addEventListener('click', () => {
            cartSidebar.classList.add('hidden');
        });

        // Add to cart
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const card = btn.closest('.product-card');
                const name = card.dataset.name;
                const price = parseInt(card.dataset.price);
                
                const existingItem = cart.find(item => item.name === name);
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({ name, price, quantity: 1 });
                }
                
                updateCart();
                cartSidebar.classList.remove('hidden');
            });
        });

        function updateCart() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `$${total}`;
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="text-sm text-neutral-500 text-center py-8">Your cart is empty</p>';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="flex gap-4 mb-4 pb-4 border-b border-neutral-100">
                        <div class="w-20 h-20 bg-neutral-100 rounded-xl"></div>
                        <div class="flex-1">
                            <h4 class="text-sm font-medium text-neutral-900">${item.name}</h4>
                            <p class="text-sm text-neutral-500">Qty: ${item.quantity}</p>
                            <p class="text-sm font-medium text-neutral-900 mt-1">$${item.price * item.quantity}</p>
                        </div>
                        <button class="remove-item text-neutral-400 hover:text-neutral-600" data-name="${item.name}">
                            <span class="iconify" data-icon="lucide:trash-2" data-width="16" data-height="16" style="stroke-width: 1.5;"></span>
                        </button>
                    </div>
                `).join('');
                
                document.querySelectorAll('.remove-item').forEach(btn => {
                    btn.addEventListener('click', () => {
                        cart = cart.filter(item => item.name !== btn.dataset.name);
                        updateCart();
                    });
                });
            }
        }

        // Filter functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('bg-neutral-900', 'text-white');
                    b.classList.add('bg-neutral-100', 'text-neutral-600');
                });
                btn.classList.remove('bg-neutral-100', 'text-neutral-600');
                btn.classList.add('bg-neutral-900', 'text-white');
                
                const filter = btn.dataset.filter;
                productCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Newsletter form
        document.getElementById('newsletterForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
            e.target.reset();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-neutral-900" href="#">STRIDE</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#">New Arrivals</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Men</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Women</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Collections</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors hidden sm:block">
<span className="iconify" data-height="20" data-icon="lucide:user" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors relative" id="cartBtn">
<span className="iconify" data-height="20" data-icon="lucide:shopping-bag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute -top-0 -right-0 w-4 h-4 bg-neutral-900 text-white text-xs rounded-full flex items-center justify-center" id="cartCount">0</span>
</button>
<button className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors md:hidden">
<span className="iconify" data-height="20" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</nav>

<section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<span className="inline-block text-xs font-medium tracking-wide text-neutral-500 uppercase">New Collection 2024</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
                        Step into<br/>
<span className="text-neutral-400">tomorrow.</span>
</h1>
<p className="text-base text-neutral-600 max-w-md leading-relaxed">
                        Discover our latest collection of premium footwear, crafted for comfort and designed for style.
                    </p>
<div className="flex flex-wrap gap-4 pt-2">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors" href="#products">
                            Shop Now
                            <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 text-sm font-medium rounded-full border border-neutral-200 hover:border-neutral-300 transition-colors" href="#">
                            View Lookbook
                        </a>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl overflow-hidden">
<img alt="Featured Shoe" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&amp;h=800&amp;fit=crop"/>
</div>
<div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-neutral-100">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
<span className="iconify text-neutral-600" data-height="20" data-icon="lucide:truck" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Free Shipping</p>
<p className="text-xs text-neutral-500">On orders over $100</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
<a className="group relative aspect-square rounded-2xl overflow-hidden" href="#">
<img alt="Running" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium">Running</p>
<p className="text-white/70 text-xs">48 products</p>
</div>
</a>
<a className="group relative aspect-square rounded-2xl overflow-hidden" href="#">
<img alt="Sneakers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium">Sneakers</p>
<p className="text-white/70 text-xs">124 products</p>
</div>
</a>
<a className="group relative aspect-square rounded-2xl overflow-hidden" href="#">
<img alt="Casual" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium">Casual</p>
<p className="text-white/70 text-xs">86 products</p>
</div>
</a>
<a className="group relative aspect-square rounded-2xl overflow-hidden" href="#">
<img alt="Formal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium">Formal</p>
<p className="text-white/70 text-xs">32 products</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-16 lg:py-24" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Featured Products</h2>
<p className="text-neutral-500 mt-2">Our most popular styles this season</p>
</div>
<div className="flex gap-2">
<button className="filter-btn px-4 py-2 text-sm font-medium rounded-full bg-neutral-900 text-white" data-filter="all">All</button>
<button className="filter-btn px-4 py-2 text-sm font-medium rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors" data-filter="men">Men</button>
<button className="filter-btn px-4 py-2 text-sm font-medium rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors" data-filter="women">Women</button>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" id="productGrid">

<div className="product-card group" data-category="men" data-name="Air Runner Pro" data-price="189">
<div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden mb-4">
<img alt="Air Runner Pro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&amp;h=400&amp;fit=crop"/>
<button className="add-to-cart absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-900 hover:text-white">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<span className="absolute top-3 left-3 px-2 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">New</span>
</div>
<h3 className="text-sm font-medium text-neutral-900">Air Runner Pro</h3>
<p className="text-sm text-neutral-500">Men's Running Shoe</p>
<p className="text-sm font-medium text-neutral-900 mt-1">$189</p>
</div>

<div className="product-card group" data-category="women" data-name="Cloud Walker" data-price="159">
<div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden mb-4">
<img alt="Cloud Walker" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&amp;h=400&amp;fit=crop"/>
<button className="add-to-cart absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-900 hover:text-white">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<h3 className="text-sm font-medium text-neutral-900">Cloud Walker</h3>
<p className="text-sm text-neutral-500">Women's Lifestyle</p>
<p className="text-sm font-medium text-neutral-900 mt-1">$159</p>
</div>

<div className="product-card group" data-category="men" data-name="Urban Elite" data-price="219">
<div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden mb-4">
<img alt="Urban Elite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&amp;h=400&amp;fit=crop"/>
<button className="add-to-cart absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-900 hover:text-white">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<span className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">-20%</span>
</div>
<h3 className="text-sm font-medium text-neutral-900">Urban Elite</h3>
<p className="text-sm text-neutral-500">Men's Sneaker</p>
<div className="flex items-center gap-2 mt-1">
<p className="text-sm font-medium text-neutral-900">$219</p>
<p className="text-sm text-neutral-400 line-through">$279</p>
</div>
</div>

<div className="product-card group" data-category="women" data-name="Flex Motion" data-price="179">
<div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden mb-4">
<img alt="Flex Motion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&amp;h=400&amp;fit=crop"/>
<button className="add-to-cart absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-900 hover:text-white">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<h3 className="text-sm font-medium text-neutral-900">Flex Motion</h3>
<p className="text-sm text-neutral-500">Women's Training</p>
<p className="text-sm font-medium text-neutral-900 mt-1">$179</p>
</div>

<div className="product-card group" data-category="men" data-name="Street Classic" data-price="249">
<div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden mb-4">
<img alt="Street Classic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&amp;h=400&amp;fit=crop"/>
<button className="add-to-cart absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-900 hover:text-white">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<h3 className="text-sm font-medium text-neutral-900">Street Classic</h3>
<p className="text-sm text-neutral-500">Men's Casual</p>
<p className="text-sm font-medium text-neutral-900 mt-1">$249</p>
</div>

<div className="product-card group" data-category="women" data-name="Aero Glide" data-price="199">
<div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden mb-4">
<img alt="Aero Glide" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&amp;h=400&amp;fit=crop"/>
<button className="add-to-cart absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-900 hover:text-white">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<span className="absolute top-3 left-3 px-2 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">Bestseller</span>
</div>
<h3 className="text-sm font-medium text-neutral-900">Aero Glide</h3>
<p className="text-sm text-neutral-500">Women's Running</p>
<p className="text-sm font-medium text-neutral-900 mt-1">$199</p>
</div>

<div className="product-card group" data-category="men" data-name="Metro Dash" data-price="169">
<div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden mb-4">
<img alt="Metro Dash" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=400&amp;h=400&amp;fit=crop"/>
<button className="add-to-cart absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-900 hover:text-white">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<h3 className="text-sm font-medium text-neutral-900">Metro Dash</h3>
<p className="text-sm text-neutral-500">Men's Lifestyle</p>
<p className="text-sm font-medium text-neutral-900 mt-1">$169</p>
</div>

<div className="product-card group" data-category="women" data-name="Zen Flow" data-price="189">
<div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden mb-4">
<img alt="Zen Flow" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&amp;h=400&amp;fit=crop"/>
<button className="add-to-cart absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-900 hover:text-white">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<h3 className="text-sm font-medium text-neutral-900">Zen Flow</h3>
<p className="text-sm text-neutral-500">Women's Casual</p>
<p className="text-sm font-medium text-neutral-900 mt-1">$189</p>
</div>
</div>
<div className="text-center mt-12">
<button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 text-sm font-medium rounded-full border border-neutral-200 hover:border-neutral-300 transition-colors">
                    View All Products
                    <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
<span className="iconify text-neutral-600" data-height="24" data-icon="lucide:truck" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-1">Free Shipping</h3>
<p className="text-sm text-neutral-500">On orders over $100</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
<span className="iconify text-neutral-600" data-height="24" data-icon="lucide:refresh-cw" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-1">Easy Returns</h3>
<p className="text-sm text-neutral-500">30-day return policy</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
<span className="iconify text-neutral-600" data-height="24" data-icon="lucide:shield-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-1">Secure Payment</h3>
<p className="text-sm text-neutral-500">100% secure checkout</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
<span className="iconify text-neutral-600" data-height="24" data-icon="lucide:headphones" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-1">24/7 Support</h3>
<p className="text-sm text-neutral-500">Dedicated support team</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-neutral-900 rounded-3xl p-8 lg:p-16 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">Stay in the loop</h2>
<p className="text-neutral-400 max-w-md mx-auto mb-8">Subscribe to our newsletter for exclusive deals, new arrivals, and style tips.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" id="newsletterForm">
<input className="flex-1 px-4 py-3 bg-white/10 border border-white/10 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 text-sm" placeholder="Enter your email" required="" type="email"/>
<button className="px-6 py-3 bg-white text-neutral-900 text-sm font-medium rounded-full hover:bg-neutral-100 transition-colors" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
<div className="col-span-2 lg:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-neutral-900" href="#">STRIDE</a>
<p className="text-sm text-neutral-500 mt-4 max-w-xs">Premium footwear crafted for comfort and designed for style.</p>
<div className="flex gap-4 mt-6">
<a className="text-neutral-400 hover:text-neutral-600 transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-neutral-400 hover:text-neutral-600 transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-neutral-400 hover:text-neutral-600 transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:facebook" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Men</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Women</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Sale</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Help</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">FAQs</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Shipping</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Returns</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Size Guide</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Press</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-neutral-500">© 2024 STRIDE. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Privacy</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Terms</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="cartSidebar">
<div className="absolute inset-0 bg-black/50" id="cartOverlay"></div>
<div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform" id="cartPanel">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between p-6 border-b border-neutral-200">
<h2 className="text-lg font-semibold text-neutral-900">Shopping Cart</h2>
<button className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors" id="closeCart">
<span className="iconify" data-height="20" data-icon="lucide:x" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6" id="cartItems">
<p className="text-sm text-neutral-500 text-center py-8">Your cart is empty</p>
</div>
<div className="border-t border-neutral-200 p-6">
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-neutral-600">Subtotal</span>
<span className="text-lg font-semibold text-neutral-900" id="cartTotal">$0</span>
</div>
<button className="w-full py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors">
                        Checkout
                    </button>
<p className="text-xs text-neutral-500 text-center mt-3">Shipping calculated at checkout</p>
</div>
</div>
</div>
</div>


    </>
  );
}
