import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State
        let cart = [];
        
        // Elements
        const cartBtn = document.getElementById('cart-btn');
        const closeCartBtn = document.getElementById('close-cart');
        const cartOverlay = document.getElementById('cart-overlay');
        const cartPanel = document.getElementById('cart-panel');
        const cartBadge = document.getElementById('cart-badge');
        const cartItemsContainer = document.getElementById('cart-items');
        const emptyCartMsg = document.getElementById('empty-cart-msg');
        const cartSubtotal = document.getElementById('cart-subtotal');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        // Form Formatting Currency INR
        const formatINR = (amount) => {
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0
            }).format(amount);
        };

        // Mobile Menu Toggle
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Cart Toggle Logic
        const toggleCart = (open) => {
            if (open) {
                cartOverlay.classList.remove('hidden');
                setTimeout(() => cartOverlay.classList.remove('opacity-0'), 10);
                cartPanel.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                cartOverlay.classList.add('opacity-0');
                cartPanel.classList.add('translate-x-full');
                setTimeout(() => cartOverlay.classList.add('hidden'), 300);
                document.body.style.overflow = '';
            }
        };

        cartBtn.addEventListener('click', () => toggleCart(true));
        closeCartBtn.addEventListener('click', () => toggleCart(false));
        cartOverlay.addEventListener('click', () => toggleCart(false));

        // Core Cart Functions
        window.addToCart = (id, title, price, image) => {
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, title, price, image, quantity: 1 });
            }
            updateCartUI();
            toggleCart(true); 
        };

        window.buyNow = (id, title, price, image) => {
            addToCart(id, title, price, image);
            toggleCart(true);
        };

        window.updateQuantity = (id, change) => {
            const itemIndex = cart.findIndex(item => item.id === id);
            if (itemIndex > -1) {
                cart[itemIndex].quantity += change;
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                }
                updateCartUI();
            }
        };

        window.removeItem = (id) => {
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
        };

        window.checkout = () => {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            alert("Proceeding to secure checkout...");
            cart = [];
            updateCartUI();
            toggleCart(false);
        };

        // Render Cart UI
        const updateCartUI = () => {
            // Update Badge
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            if (totalItems > 0) {
                cartBadge.textContent = totalItems;
                cartBadge.classList.remove('hidden');
            } else {
                cartBadge.classList.add('hidden');
            }

            // Update Items
            cartItemsContainer.innerHTML = '';
            if (cart.length === 0) {
                cartItemsContainer.appendChild(emptyCartMsg);
                emptyCartMsg.classList.remove('hidden');
            } else {
                emptyCartMsg.classList.add('hidden');
                let subtotal = 0;

                cart.forEach(item => {
                    subtotal += item.price * item.quantity;
                    
                    const itemEl = document.createElement('div');
                    itemEl.className = 'flex gap-4 items-center';
                    itemEl.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" class="w-16 h-20 object-cover rounded-lg bg-gray-100">
                        <div class="flex-1">
                            <h4 class="text-sm font-medium text-gray-900">${item.title}</h4>
                            <p class="text-sm font-semibold text-gray-500 mt-1">${formatINR(item.price)}</p>
                            
                            <div class="flex items-center gap-3 mt-2">
                                <div class="flex items-center border border-gray-200 rounded-full">
                                    <button onclick="updateQuantity('${item.id}', -1)" class="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-black transition-colors"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
                                    <span class="text-xs font-medium w-4 text-center">${item.quantity}</span>
                                    <button onclick="updateQuantity('${item.id}', 1)" class="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-black transition-colors"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
                                </div>
                                <button onclick="removeItem('${item.id}')" class="text-xs font-medium text-red-500 hover:text-red-700 underline underline-offset-2">Remove</button>
                            </div>
                        </div>
                    `;
                    cartItemsContainer.appendChild(itemEl);
                });

                cartSubtotal.textContent = formatINR(subtotal);
            }
        };

        // Handle Newsletter Form
        document.getElementById('newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = e.target.querySelector('input[type="email"]');
            if(emailInput.value) {
                alert(`Thank you for subscribing with ${emailInput.value}!`);
                emailInput.value = '';
            }
        });

        // Category Filtering Logic
        const filterBtns = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state of buttons
                filterBtns.forEach(b => {
                    b.classList.remove('bg-black', 'text-white', 'border-black');
                    b.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
                });
                btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
                btn.classList.add('bg-black', 'text-white', 'border-black');

                // Filter items
                const filter = btn.dataset.filter;
                productCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Initialize UI
        updateCartUI();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-black text-white text-xs py-2 px-4 flex items-center justify-center gap-2">
<span className="font-medium tracking-wide">Sign Up for Exclusive Offers</span>
<a className="underline underline-offset-2 text-gray-300 hover:text-white transition-colors" href="#newsletter">Join Now</a>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden flex items-center text-gray-600" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<a className="tracking-tighter font-semibold text-lg uppercase flex-shrink-0" href="#">
                Fashion Fusion
            </a>

<nav className="absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent border-b md:border-none border-gray-100 hidden md:flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-0 shadow-lg md:shadow-none z-50" id="mobile-menu">
<a className="text-sm font-medium text-black w-full md:w-auto text-center" href="#home">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors w-full md:w-auto text-center" href="#products">Shop</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors w-full md:w-auto text-center" href="#categories">Categories</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors w-full md:w-auto text-center" href="#testimonials">Reviews</a>
</nav>

<div className="flex items-center gap-5 text-gray-700">
<button className="hover:text-black transition-colors flex items-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hover:text-black transition-colors flex items-center hidden sm:block">
<iconify-icon className="text-xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hover:text-black transition-colors flex items-center relative" id="cart-btn">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-black text-white flex items-center justify-center rounded-full text-[0.5rem] font-medium hidden" id="cart-badge">0</span>
</button>
</div>
</div>
</header>

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden" id="home">
<img alt="Stylish Models" className="absolute inset-0 w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=3270&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="relative z-10 text-center text-white px-6 max-w-3xl mt-20">
<h1 className="text-5xl md:text-7xl tracking-tight font-semibold mb-6 leading-[1.1]">
                Discover Your<br/>Unique Style
            </h1>
<p className="text-base md:text-lg text-gray-200 mb-10 font-medium tracking-wide max-w-xl mx-auto">
                Elevate your wardrobe with our premium collection of contemporary fashion. Designed for the modern individual.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center" href="#products">
                    Shop Now
                </a>
<a className="w-full sm:w-auto backdrop-blur-md bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/20 transition-colors text-center" href="#categories">
                    Explore Collections
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100" id="categories">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl tracking-tight font-semibold mb-12 text-center">Shop by Category</h2>
<div className="flex overflow-x-auto no-scrollbar gap-8 pb-4 snap-x justify-start md:justify-center">

<a className="group flex flex-col items-center gap-4 snap-center flex-shrink-0" href="#products">
<div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 relative">
<img alt="Women" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&amp;q=80"/>
</div>
<span className="text-sm font-medium tracking-wide">Women</span>
</a>

<a className="group flex flex-col items-center gap-4 snap-center flex-shrink-0" href="#products">
<div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 relative">
<img alt="Men" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&amp;q=80"/>
</div>
<span className="text-sm font-medium tracking-wide">Men</span>
</a>

<a className="group flex flex-col items-center gap-4 snap-center flex-shrink-0" href="#products">
<div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 relative">
<img alt="Kids" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=400&amp;q=80"/>
</div>
<span className="text-sm font-medium tracking-wide">Kids</span>
</a>

<a className="group flex flex-col items-center gap-4 snap-center flex-shrink-0" href="#products">
<div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 relative flex items-center justify-center bg-gray-50 border border-gray-200">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-black transition-colors" icon="solar:bag-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide">Accessories</span>
</a>

<a className="group flex flex-col items-center gap-4 snap-center flex-shrink-0" href="#products">
<div className="w-24 h-24 rounded-full overflow-hidden bg-red-50 relative flex items-center justify-center border border-red-100">
<iconify-icon className="text-3xl text-red-500" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide text-red-600">Sale</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
<div>
<h2 className="text-3xl tracking-tight font-semibold mb-2">Our Collection</h2>
<p className="text-sm text-gray-500 font-medium">Curated pieces for every wardrobe.</p>
</div>

<div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
<button className="filter-btn active px-6 py-2.5 rounded-full text-sm font-medium bg-black text-white border border-black transition-colors whitespace-nowrap" data-filter="all">View All</button>
<button className="filter-btn px-6 py-2.5 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-black hover:text-black transition-colors whitespace-nowrap" data-filter="women">Women</button>
<button className="filter-btn px-6 py-2.5 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-black hover:text-black transition-colors whitespace-nowrap" data-filter="men">Men</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12" id="product-grid">


<div className="product-card group flex flex-col gap-4" data-category="women">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Minimalist Silk Dress" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform tooltip" title="Quick View">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-md text-[0.65rem] font-medium tracking-widest uppercase shadow-sm">New</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Dress</p>
<h3 className="text-sm font-medium text-gray-900">Minimalist Silk Dress</h3>
<p className="text-sm text-gray-500 mb-2">₹14,999</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('w1', 'Minimalist Silk Dress', 14999, 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('w1', 'Minimalist Silk Dress', 14999, 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="women">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Ribbed Knit Top" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Top</p>
<h3 className="text-sm font-medium text-gray-900">Ribbed Knit Top</h3>
<p className="text-sm text-gray-500 mb-2">₹2,499</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('w2', 'Ribbed Knit Top', 2499, 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('w2', 'Ribbed Knit Top', 2499, 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="women">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Embroidered Cotton Kurti" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583391733958-d25e07fac0fa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Kurti</p>
<h3 className="text-sm font-medium text-gray-900">Embroidered Cotton Kurti</h3>
<p className="text-sm text-gray-500 mb-2">₹3,999</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('w3', 'Embroidered Cotton Kurti', 3999, 'https://images.unsplash.com/photo-1583391733958-d25e07fac0fa?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('w3', 'Embroidered Cotton Kurti', 3999, 'https://images.unsplash.com/photo-1583391733958-d25e07fac0fa?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="women">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Handloom Silk Saree" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Saree</p>
<h3 className="text-sm font-medium text-gray-900">Handloom Silk Saree</h3>
<p className="text-sm text-gray-500 mb-2">₹12,999</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('w4', 'Handloom Silk Saree', 12999, 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('w4', 'Handloom Silk Saree', 12999, 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="women">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Pleated Trousers" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Jeans &amp; Pants</p>
<h3 className="text-sm font-medium text-gray-900">Pleated Trousers</h3>
<p className="text-sm text-gray-500 mb-2">₹8,999</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('w5', 'Pleated Trousers', 8999, 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('w5', 'Pleated Trousers', 8999, 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="women">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Midi Slip Skirt" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Skirts</p>
<h3 className="text-sm font-medium text-gray-900">Midi Slip Skirt</h3>
<p className="text-sm text-gray-500 mb-2">₹4,499</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('w6', 'Midi Slip Skirt', 4499, 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('w6', 'Midi Slip Skirt', 4499, 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="women">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Oversized Wool Coat" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Hoodies &amp; Jackets</p>
<h3 className="text-sm font-medium text-gray-900">Oversized Wool Coat</h3>
<p className="text-sm text-gray-500 mb-2">₹25,999</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('w7', 'Oversized Wool Coat', 25999, 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('w7', 'Oversized Wool Coat', 25999, 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="women">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Strappy Block Heels" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Heels &amp; Flats</p>
<h3 className="text-sm font-medium text-gray-900">Strappy Block Heels</h3>
<p className="text-sm text-gray-500 mb-2">₹5,999</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('w8', 'Strappy Block Heels', 5999, 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('w8', 'Strappy Block Heels', 5999, 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="women">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Leather Crossbody Bag" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="absolute top-3 left-3 bg-red-50 text-red-600 px-2.5 py-1 rounded-md text-[0.65rem] font-medium tracking-widest uppercase shadow-sm">-20%</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Handbags</p>
<h3 className="text-sm font-medium text-gray-900">Leather Crossbody Bag</h3>
<div className="flex items-center gap-2 mb-2">
<p className="text-sm text-red-600 font-medium">₹11,999</p>
<p className="text-xs text-gray-400 line-through">₹14,999</p>
</div>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('w9', 'Leather Crossbody Bag', 11999, 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('w9', 'Leather Crossbody Bag', 11999, 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>


<div className="product-card group flex flex-col gap-4" data-category="men">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Classic Cotton T-Shirt" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">T-Shirts</p>
<h3 className="text-sm font-medium text-gray-900">Classic Cotton T-Shirt</h3>
<p className="text-sm text-gray-500 mb-2">₹1,499</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('m1', 'Classic Cotton T-Shirt', 1499, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('m1', 'Classic Cotton T-Shirt', 1499, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="men">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Formal Oxford Shirt" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Shirts</p>
<h3 className="text-sm font-medium text-gray-900">Formal Oxford Shirt</h3>
<p className="text-sm text-gray-500 mb-2">₹2,999</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('m2', 'Formal Oxford Shirt', 2999, 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('m2', 'Formal Oxford Shirt', 2999, 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="men">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Slim Fit Denim" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Jeans</p>
<h3 className="text-sm font-medium text-gray-900">Slim Fit Denim</h3>
<p className="text-sm text-gray-500 mb-2">₹3,499</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('m3', 'Slim Fit Denim', 3499, 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('m3', 'Slim Fit Denim', 3499, 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="men">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Chino Trousers" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Trousers</p>
<h3 className="text-sm font-medium text-gray-900">Chino Trousers</h3>
<p className="text-sm text-gray-500 mb-2">₹2,799</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('m4', 'Chino Trousers', 2799, 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('m4', 'Chino Trousers', 2799, 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="men">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Essential Pullover Hoodie" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Hoodies &amp; Sweatshirts</p>
<h3 className="text-sm font-medium text-gray-900">Essential Pullover Hoodie</h3>
<p className="text-sm text-gray-500 mb-2">₹4,999</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('m5', 'Essential Pullover Hoodie', 4999, 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('m5', 'Essential Pullover Hoodie', 4999, 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="men">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Leather Biker Jacket" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Jackets</p>
<h3 className="text-sm font-medium text-gray-900">Leather Biker Jacket</h3>
<p className="text-sm text-gray-500 mb-2">₹15,999</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('m6', 'Leather Biker Jacket', 15999, 'https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('m6', 'Leather Biker Jacket', 15999, 'https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="men">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Classic White Sneakers" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Shoes</p>
<h3 className="text-sm font-medium text-gray-900">Classic White Sneakers</h3>
<p className="text-sm text-gray-500 mb-2">₹6,499</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('m7', 'Classic White Sneakers', 6499, 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('m7', 'Classic White Sneakers', 6499, 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>

<div className="product-card group flex flex-col gap-4" data-category="men">
<div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<img alt="Chronograph Watch" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Accessories</p>
<h3 className="text-sm font-medium text-gray-900">Chronograph Watch</h3>
<p className="text-sm text-gray-500 mb-2">₹8,999</p>
<div className="grid grid-cols-2 gap-2 mt-1">
<button className="w-full py-2.5 border border-gray-200 rounded-full text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300" onclick="addToCart('m8', 'Chronograph Watch', 8999, 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Add to Cart
                            </button>
<button className="w-full py-2.5 bg-black border border-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300" onclick="buyNow('m8', 'Chronograph Watch', 8999, 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&amp;w=150&amp;auto=format&amp;fit=crop')">
                                Buy Now
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 overflow-hidden border-y border-gray-100" id="testimonials">
<div className="max-w-7xl mx-auto px-6 mb-10">
<h2 className="text-2xl tracking-tight font-semibold text-center">Loved by our customers</h2>
</div>
<div className="flex overflow-x-auto no-scrollbar gap-6 px-6 pb-8 snap-x">

<div className="snap-center shrink-0 w-[85vw] sm:w-[400px] bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-6">
<div className="flex items-center gap-1 text-black">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-gray-700 font-medium leading-relaxed">
                    "The quality is unmatched. I bought the oversized wool coat and it feels like a luxury piece that costs three times as much. Fast shipping too."
                </p>
<div className="mt-auto flex items-center gap-3">
<img alt="Sarah J." className="w-10 h-10 rounded-full object-cover bg-gray-100" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;q=80"/>
<div>
<p className="text-sm font-semibold text-gray-900">Sarah Jenkins</p>
<p className="text-xs text-gray-500">Verified Buyer</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[400px] bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-6">
<div className="flex items-center gap-1 text-black">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-gray-700 font-medium leading-relaxed">
                    "Fashion Fusion completely transformed my wardrobe. Their pieces are timeless yet modern. Customer service was also incredibly helpful."
                </p>
<div className="mt-auto flex items-center gap-3">
<img alt="Michael T." className="w-10 h-10 rounded-full object-cover bg-gray-100" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;q=80"/>
<div>
<p className="text-sm font-semibold text-gray-900">Michael Torres</p>
<p className="text-xs text-gray-500">Verified Buyer</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[400px] bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-6">
<div className="flex items-center gap-1 text-black">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-half-bold"></iconify-icon>
</div>
<p className="text-base text-gray-700 font-medium leading-relaxed">
                    "Love the minimalist aesthetic. The website is so easy to navigate, and the checkout process with Apple Pay was seamless."
                </p>
<div className="mt-auto flex items-center gap-3">
<img alt="Emma L." className="w-10 h-10 rounded-full object-cover bg-gray-100" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&amp;q=80"/>
<div>
<p className="text-sm font-semibold text-gray-900">Emma Lawson</p>
<p className="text-xs text-gray-500">Verified Buyer</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="newsletter">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-black text-white rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="relative z-10 max-w-lg mx-auto">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4">Join the club</h2>
<p className="text-sm text-gray-400 font-medium mb-8">
                        Subscribe for early access to new arrivals, exclusive discounts, and style inspiration.
                    </p>
<form className="flex flex-col sm:flex-row gap-3" id="newsletter-form">
<div className="relative flex-grow">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-full py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-white focus:bg-white/15 transition-all" placeholder="Email address" required="" type="email"/>
</div>
<button className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap" type="submit">
                            Subscribe
                        </button>
</form>
<p className="text-xs text-gray-500 mt-4">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="tracking-tighter font-semibold text-lg uppercase block mb-6" href="#">
                        Fashion Fusion
                    </a>
<p className="text-sm text-gray-500 mb-6 max-w-xs font-medium">
                        Redefining everyday elegance. Curated fashion for the modern minimalist.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:hashtag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-6">Shop</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#products">Women's Collection</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#products">Men's Collection</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#categories">Accessories</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#products">New Arrivals</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-6">Support</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#">FAQs</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#">Return Policy</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#">Shipping Info</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#">Track Order</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-6">Company</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#">About Us</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#">Careers</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors font-medium" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-4">
<p className="text-xs text-gray-500 font-medium">© 2023 Fashion Fusion. All rights reserved.</p>
<div className="flex items-center gap-3 text-gray-400">
<iconify-icon className="text-xl" icon="solar:card-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-xl" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</footer>

<button className="fixed bottom-6 right-6 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform z-30" onclick="alert('Chat support is currently offline. Please leave a message.')">
<iconify-icon className="text-2xl" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<div className="fixed inset-0 bg-black/40 z-50 hidden opacity-0 transition-opacity duration-300 backdrop-blur-sm" id="cart-overlay"></div>
<div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 transform translate-x-full transition-transform duration-300 shadow-2xl flex flex-col" id="cart-panel">

<div className="flex items-center justify-between p-6 border-b border-gray-100">
<h2 className="text-lg font-semibold tracking-tight">Shopping Cart</h2>
<button className="p-2 text-gray-400 hover:text-black transition-colors" id="close-cart">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6" id="cart-items">

<div className="flex flex-col items-center justify-center h-full text-gray-400" id="empty-cart-msg">
<iconify-icon className="text-5xl mb-4 opacity-50" icon="solar:cart-large-2-linear"></iconify-icon>
<p className="text-sm font-medium">Your cart is currently empty.</p>
</div>
</div>

<div className="p-6 border-t border-gray-100 bg-gray-50">
<div className="flex items-center justify-between mb-6">
<span className="text-sm font-medium text-gray-500">Subtotal</span>
<span className="text-lg font-semibold text-gray-900" id="cart-subtotal">₹0</span>
</div>
<p className="text-xs text-gray-500 mb-4">Taxes and shipping calculated at checkout.</p>
<button className="w-full bg-black text-white py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors" onclick="checkout()">
                Checkout Now
            </button>
</div>
</div>



    </>
  );
}
