import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Data ---
        const products = [
            { id: 1, name: "Sony WH-1000XM5 Wireless Headphones", category: "Accessories", price: 26990, original: 29990, rating: 4.8, reviews: 3400, image: "solar:headphones-round-sound-linear", specs: ["Noise Cancelling", "30H Battery", "Multipoint Connection"], desc: "Industry-leading noise cancellation with two processors controlling eight microphones." },
            { id: 2, name: "Philips Digital Air Fryer HD9252", category: "Kitchen", price: 8999, original: 12999, rating: 4.6, reviews: 8500, image: "solar:chef-hat-heart-linear", specs: ["4.1L Capacity", "Rapid Air Tech", "Touch Screen"], desc: "Great tasting fries with up to 90% less fat. 7 presets for easy cooking." },
            { id: 3, name: "Apple Watch Series 9", category: "Gadgets", price: 41900, original: 45000, rating: 4.9, reviews: 1200, image: "solar:watch-square-linear", specs: ["S9 SiP", "Double Tap", "Always-On Retina"], desc: "A healthier, fitter, and more connected life is within reach." },
            { id: 4, name: "Samsung Galaxy Tab S9", category: "Gadgets", price: 72999, original: 81999, rating: 4.7, reviews: 540, image: "solar:tablet-linear", specs: ["Snapdragon 8 Gen 2", "Dynamic AMOLED 2X", "S Pen Included"], desc: "Crystal clear viewing experience with Dynamic AMOLED 2X display." },
            { id: 5, name: "Wonderchef Nutri-Blend Mixer", category: "Kitchen", price: 2699, original: 5500, rating: 4.3, reviews: 15400, image: "solar:cup-hot-linear", specs: ["400W Motor", "2 Jars", "22000 RPM"], desc: "India's favorite mixer-grinder-blender, the perfect combination of performance and style." },
            { id: 6, name: "OnePlus Power Bank 10000mAh", category: "Accessories", price: 1099, original: 1999, rating: 4.4, reviews: 6200, image: "solar:battery-full-linear", specs: ["18W Fast Charge", "Dual USB Output", "12-Layer Protection"], desc: "Fast charging power bank with premium build quality." },
            { id: 7, name: "Logitech MX Master 3S Mouse", category: "Gadgets", price: 9495, original: 10995, rating: 4.8, reviews: 2100, image: "solar:mouse-linear", specs: ["8K DPI Sensor", "Quiet Clicks", "MagSpeed Scroll"], desc: "An icon remastered. Feel every moment of your workflow with even more precision." },
            { id: 8, name: "Pigeon Electric Kettle 1.5L", category: "Kitchen", price: 599, original: 1299, rating: 4.1, reviews: 45000, image: "solar:tea-cup-linear", specs: ["1500W Power", "Stainless Steel", "Auto Shut-off"], desc: "Boil water instantly for tea, coffee, or instant noodles." },
            { id: 9, name: "Spigen Armor Case for iPhone 15", category: "Accessories", price: 1599, original: 2499, rating: 4.7, reviews: 3000, image: "solar:smartphone-linear", specs: ["Air Cushion Tech", "Carbon Fiber", "Matte Finish"], desc: "Rugged armor case providing ultimate protection with style." },
            { id: 10, name: "Fujifilm Instax Mini 12", category: "Gadgets", price: 6499, original: 8499, rating: 4.6, reviews: 1100, image: "solar:camera-linear", specs: ["Auto Exposure", "Selfie Mode", "Built-in Flash"], desc: "Bright photos with automatic exposure. Perfect for capturing moments." }
        ];

        let cart = [];
        let currentProduct = null;

        // --- Core Functions ---

        function init() {
            renderProducts(products);
        }

        // View Router
        function router(viewName) {
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => {
                    if(!el.classList.contains('active')) el.style.display = 'none';
                }, 300);
            });
            
            const target = document.getElementById(viewName + '-view') || document.getElementById(viewName);
            if(target) {
                target.style.display = 'block';
                // Trigger reflow
                void target.offsetWidth; 
                target.classList.add('active');
            }
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // Render Home Grid
        function renderProducts(list) {
            const grid = document.getElementById('product-grid');
            grid.innerHTML = list.map(p => {
                const discount = Math.round(((p.original - p.price) / p.original) * 100);
                return `
                <div onclick="openProduct(${p.id})" class="bg-white border border-neutral-100 rounded-lg p-3 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between h-full">
                    <div class="relative aspect-square flex items-center justify-center bg-neutral-50 rounded-lg mb-3 overflow-hidden">
                        <iconify-icon icon="${p.image}" class="text-6xl text-neutral-400 group-hover:scale-110 transition-transform duration-300"></iconify-icon>
                        <button class="absolute top-2 right-2 text-neutral-300 hover:text-red-500 z-10"><iconify-icon icon="solar:heart-linear"></iconify-icon></button>
                    </div>
                    <div>
                        <h3 class="text-sm font-medium text-neutral-900 line-clamp-2 mb-1 group-hover:text-blue-600">${p.name}</h3>
                        <div class="flex items-center gap-2 mb-2">
                            <span class="bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">${p.rating} <iconify-icon icon="solar:star-bold" width="8"></iconify-icon></span>
                            <span class="text-xs text-neutral-400">(${p.reviews})</span>
                        </div>
                        <div class="flex items-baseline gap-2">
                            <span class="font-bold text-base">₹${p.price.toLocaleString()}</span>
                            <span class="text-xs text-neutral-400 line-through">₹${p.original.toLocaleString()}</span>
                            <span class="text-xs text-green-600 font-bold">${discount}% off</span>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        }

        // Product Details Logic
        function openProduct(id) {
            currentProduct = products.find(p => p.id === id);
            if (!currentProduct) return;

            document.getElementById('pdp-image').setAttribute('icon', currentProduct.image);
            document.getElementById('pdp-title').textContent = currentProduct.name;
            document.getElementById('pdp-rating').textContent = currentProduct.rating;
            document.getElementById('pdp-reviews').textContent = currentProduct.reviews.toLocaleString();
            document.getElementById('pdp-price').textContent = currentProduct.price.toLocaleString();
            document.getElementById('pdp-original').textContent = currentProduct.original.toLocaleString();
            document.getElementById('pdp-category-crumb').textContent = currentProduct.category;
            
            const discount = Math.round(((currentProduct.original - currentProduct.price) / currentProduct.original) * 100);
            document.getElementById('pdp-discount').textContent = `${discount}% off`;
            
            document.getElementById('pdp-desc').textContent = currentProduct.desc;
            
            const specsContainer = document.getElementById('pdp-specs');
            specsContainer.innerHTML = currentProduct.specs.map(s => 
                `<div class="flex items-center gap-2 text-neutral-600"><iconify-icon icon="solar:point-on-map-linear" class="text-neutral-400"></iconify-icon> ${s}</div>`
            ).join('');

            router('product');
        }

        // Search Logic
        function handleSearch(query) {
            const dropdown = document.getElementById('search-results');
            if (!query) {
                dropdown.classList.add('hidden');
                if(window.innerWidth < 768) renderProducts(products); // Reset mobile list
                return;
            }

            const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
            
            // For Desktop Dropdown
            if(window.innerWidth >= 768) {
                dropdown.classList.remove('hidden');
                dropdown.innerHTML = filtered.length ? filtered.map(p => `
                    <div onclick="openProduct(${p.id}); document.getElementById('search-results').classList.add('hidden')" class="p-3 hover:bg-neutral-50 cursor-pointer flex items-center gap-3 border-b border-neutral-50 last:border-0">
                        <div class="w-10 h-10 bg-neutral-100 rounded flex items-center justify-center text-neutral-500"><iconify-icon icon="${p.image}"></iconify-icon></div>
                        <div class="text-sm font-medium text-neutral-800">${p.name}</div>
                    </div>
                `).join('') : `<div class="p-4 text-sm text-neutral-500">No results found</div>`;
            } else {
                // For Mobile: Filter main grid
                renderProducts(filtered);
            }
        }

        function filterCategory(cat) {
            const filtered = products.filter(p => p.category === cat);
            renderProducts(filtered);
            document.getElementById('products-section').scrollIntoView({behavior:'smooth'});
        }

        function resetFilters() {
            renderProducts(products);
        }

        // Cart Logic
        function addToCart(id, redirect = false) {
            // Check if exists
            const existing = cart.find(item => item.id === id);
            if (existing) {
                existing.qty++;
            } else {
                const prod = products.find(p => p.id === id);
                cart.push({ ...prod, qty: 1 });
            }
            updateCartUI();
            
            // Animation for Badge
            const badge = document.getElementById('cart-badge');
            badge.classList.remove('opacity-0');
            badge.classList.add('pop-anim');
            setTimeout(() => badge.classList.remove('pop-anim'), 200);
            
            if(redirect) {
                router('cart');
            } else {
                // Simple toast if NOT redirecting
                // In PDP we set redirect=true, so this only happens if we call it from elsewhere in future
                alert("Added to cart!");
            }
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
        }

        function updateQty(id, change) {
            const item = cart.find(i => i.id === id);
            if (item) {
                item.qty += change;
                if (item.qty <= 0) removeFromCart(id);
                else updateCartUI();
            }
        }

        function updateCartUI() {
            document.getElementById('cart-badge').textContent = cart.length;
            
            // Calculations
            let total = 0;
            let originalTotal = 0;
            let count = 0;

            const container = document.getElementById('cart-items-container');
            if (cart.length === 0) {
                container.innerHTML = `<div class="flex flex-col items-center justify-center py-12">
                    <iconify-icon icon="solar:cart-large-linear" class="text-6xl text-neutral-200 mb-4"></iconify-icon>
                    <p class="text-neutral-500">Your cart is empty!</p>
                    <button onclick="router('home')" class="mt-4 bg-[#2874f0] text-white px-6 py-2 text-sm font-medium rounded shadow-sm">Shop Now</button>
                </div>`;
                document.getElementById('place-order-btn').classList.add('hidden');
            } else {
                document.getElementById('place-order-btn').classList.remove('hidden');
                container.innerHTML = cart.map(item => {
                    total += item.price * item.qty;
                    originalTotal += item.original * item.qty;
                    count += item.qty;
                    const discount = Math.round(((item.original - item.price) / item.original) * 100);
                    
                    return `
                    <div class="p-4 flex gap-4 bg-white hover:bg-neutral-50/50 transition-colors">
                        <div class="w-20 h-20 bg-neutral-100 rounded flex items-center justify-center flex-shrink-0">
                            <iconify-icon icon="${item.image}" class="text-3xl text-neutral-500"></iconify-icon>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-sm font-medium text-neutral-900 line-clamp-2">${item.name}</h3>
                            <div class="text-xs text-neutral-500 mt-1">Seller: RetailNet</div>
                            <div class="flex items-baseline gap-2 mt-2">
                                <span class="font-bold text-lg">₹${item.price.toLocaleString()}</span>
                                <span class="text-xs text-neutral-400 line-through">₹${item.original.toLocaleString()}</span>
                                <span class="text-xs text-green-600 font-bold">${discount}% off</span>
                            </div>
                            <div class="flex items-center gap-4 mt-3">
                                <div class="flex items-center gap-2">
                                    <button onclick="updateQty(${item.id}, -1)" class="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-800 disabled:opacity-50">-</button>
                                    <span class="text-sm font-medium w-8 text-center border border-neutral-200 py-1 bg-white">${item.qty}</span>
                                    <button onclick="updateQty(${item.id}, 1)" class="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-800">+</button>
                                </div>
                                <button onclick="removeFromCart(${item.id})" class="text-sm font-semibold text-neutral-900 hover:text-red-600 uppercase">Remove</button>
                            </div>
                        </div>
                    </div>
                    `;
                }).join('');
            }

            // Update Price Details
            document.getElementById('cart-qty-total').textContent = count;
            document.getElementById('cart-price-total').textContent = originalTotal.toLocaleString();
            document.getElementById('cart-discount-total').textContent = (originalTotal - total).toLocaleString();
            document.getElementById('cart-final-total').textContent = total.toLocaleString();
            document.getElementById('cart-savings').textContent = (originalTotal - total).toLocaleString();
        }

        // Checkout & Buy Now
        function buyNow(id) {
            // "Buy Now" adds to cart and immediately goes to checkout
            const inCart = cart.find(i => i.id === id);
            if(!inCart) {
                // Add silently (no redirect to cart, because we go to checkout)
                addToCart(id, false);
            }
            router('checkout');
        }

        function confirmOrder() {
            if(cart.length === 0) {
                alert("Cart is empty!");
                return;
            }
            router('order-success');
            cart = [];
            updateCartUI();
        }

        // Login Modal
        function toggleLogin() {
            const modal = document.getElementById('login-modal');
            modal.classList.toggle('hidden');
            modal.classList.toggle('flex');
        }

        // Initialize
        init();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white shadow-sm border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

<a className="flex flex-col items-start min-w-fit cursor-pointer group" href="javascript:void(0)" onclick="router('home')">
<div className="flex items-center gap-1">
<span className="text-xl font-bold tracking-tighter text-blue-600 italic">VK Mart</span>
<div className="h-2 w-2 bg-yellow-400 rounded-full mt-1"></div>
</div>
<span className="text-[10px] font-medium text-neutral-400 -mt-1 hover:underline">Explore <span className="text-yellow-500 font-bold">Plus</span></span>
</a>

<div className="flex-1 max-w-2xl relative hidden md:block">
<div className="relative w-full">
<input className="w-full bg-blue-50/50 border border-blue-100 text-sm rounded-lg pl-4 pr-10 py-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-shadow" id="desktop-search" oninput="handleSearch(this.value)" placeholder="Search for products, brands and more" type="text"/>
<button className="absolute right-3 top-2.5 text-blue-600">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>

<div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg border-x border-b border-neutral-100 hidden max-h-96 overflow-y-auto z-50" id="search-results"></div>
</div>
</div>

<button className="md:hidden text-neutral-600" onclick="document.getElementById('mobile-search').classList.toggle('hidden')">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</button>

<div className="flex items-center gap-6 font-medium text-sm">
<button className="hidden md:flex items-center gap-1 hover:text-blue-600 px-4 py-1.5 bg-white border border-neutral-200 rounded hover:border-blue-200 transition-colors" onclick="toggleLogin()">
                    Login
                </button>
<div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-blue-600">
<iconify-icon icon="solar:shop-linear" width="20"></iconify-icon>
<span>Become a Seller</span>
</div>
<div className="relative cursor-pointer" onclick="router('cart')">
<div className="flex items-center gap-1.5 hover:text-blue-600">
<iconify-icon icon="solar:cart-large-linear" width="22"></iconify-icon>
<span className="hidden md:inline">Cart</span>
</div>
<span className="absolute -top-1.5 -right-1 h-4 w-4 bg-red-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full opacity-0 transition-opacity" id="cart-badge">0</span>
</div>
</div>
</div>

<div className="hidden px-4 pb-3 md:hidden border-t border-neutral-100 bg-white" id="mobile-search">
<div className="relative mt-3">
<input className="w-full bg-neutral-100 border-none text-sm rounded-lg pl-10 pr-4 py-2.5" oninput="handleSearch(this.value)" placeholder="Search products..." type="text"/>
<iconify-icon className="absolute left-3 top-2.5 text-neutral-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
</div>
</header>

<main className="min-h-screen" id="app">

<div className="view-section active" id="home-view">

<div className="bg-white shadow-sm mb-4">
<div className="max-w-7xl mx-auto px-4 py-3">
<div className="flex justify-between md:justify-center gap-8 md:gap-20 overflow-x-auto no-scrollbar">
<div className="flex flex-col items-center gap-1.5 min-w-[64px] cursor-pointer group" onclick="filterCategory('Gadgets')">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
<iconify-icon className="md:w-8 md:h-8" icon="solar:devices-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-700 group-hover:text-blue-600">Gadgets</span>
</div>
<div className="flex flex-col items-center gap-1.5 min-w-[64px] cursor-pointer group" onclick="filterCategory('Kitchen')">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-105 transition-transform">
<iconify-icon className="md:w-8 md:h-8" icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-700 group-hover:text-blue-600">Kitchen</span>
</div>
<div className="flex flex-col items-center gap-1.5 min-w-[64px] cursor-pointer group" onclick="filterCategory('Accessories')">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform">
<iconify-icon className="md:w-8 md:h-8" icon="solar:headphones-round-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-700 group-hover:text-blue-600">Mobile Acc.</span>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-2 md:px-4 space-y-4">

<div className="relative w-full h-[180px] md:h-[320px] bg-neutral-900 rounded-lg overflow-hidden flex items-center">
<div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 opacity-90"></div>
<div className="relative z-10 px-6 md:px-16 w-full flex flex-col items-start justify-center h-full">
<span className="bg-yellow-400 text-black text-[10px] md:text-xs font-bold px-2 py-0.5 rounded mb-3">BIG SALE IS LIVE</span>
<h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 tracking-tight">Next Gen <br/> Tech Store</h2>
<p className="text-blue-100 text-xs md:text-base mb-6 max-w-lg">Get up to 40% off on latest Gadgets and Kitchen Appliances. Limited time offer.</p>
<button className="bg-white text-blue-700 px-6 py-2.5 rounded shadow-lg text-sm font-semibold hover:bg-neutral-50 transition-colors" onclick="document.getElementById('products-section').scrollIntoView({behavior:'smooth'})">Shop Now</button>
</div>
<iconify-icon className="absolute -right-10 -bottom-10 text-white opacity-10 text-[12rem] md:text-[20rem] rotate-12" icon="solar:gamepad-linear"></iconify-icon>
</div>

<div className="bg-white p-4 md:p-6 rounded-lg shadow-sm" id="products-section">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg md:text-xl font-semibold text-neutral-800">Best of Electronics &amp; Kitchen</h3>
<button className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 md:hidden" onclick="resetFilters()">
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6" id="product-grid">

</div>
</div>
</div>
</div>

<div className="view-section bg-white min-h-screen pb-24 md:pb-0" id="product-view">
<div className="max-w-7xl mx-auto px-0 md:px-4 py-0 md:py-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 bg-white md:rounded-lg">

<div className="md:col-span-5 p-4 md:p-0 relative">

<div className="aspect-square border border-neutral-200 rounded-lg flex items-center justify-center p-8 bg-white relative overflow-hidden group">
<iconify-icon className="text-8xl md:text-9xl text-neutral-700 transition-transform duration-500 group-hover:scale-110" icon="" id="pdp-image"></iconify-icon>
<div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow border border-neutral-100 text-neutral-400 hover:text-red-500 cursor-pointer">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</div>
</div>

<div className="hidden md:grid grid-cols-2 gap-3 mt-4">

<button className="py-4 bg-[#ff9f00] text-white font-bold rounded-sm shadow-sm hover:bg-[#f39700] uppercase text-sm flex items-center justify-center gap-2 transform active:scale-95 transition-transform" onclick="addToCart(currentProduct.id, true)">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon> Add to Cart
                            </button>

<button className="py-4 bg-[#fb641b] text-white font-bold rounded-sm shadow-sm hover:bg-[#f05e16] uppercase text-sm flex items-center justify-center gap-2 transform active:scale-95 transition-transform" onclick="buyNow(currentProduct.id)">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon> Buy Now
                            </button>
</div>
</div>

<div className="md:col-span-7 p-4 pt-0 md:pt-0">

<div className="text-xs text-neutral-500 mb-2 flex items-center gap-1">
<span className="cursor-pointer hover:text-blue-600" onclick="router('home')">Home</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="10"></iconify-icon>
<span id="pdp-category-crumb">Category</span>
</div>
<h1 className="text-lg md:text-xl font-medium text-neutral-900 mb-2" id="pdp-title">Product Name</h1>
<div className="flex items-center gap-2 mb-4">
<span className="bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
<span id="pdp-rating">4.5</span> <iconify-icon icon="solar:star-bold" width="8"></iconify-icon>
</span>
<span className="text-neutral-500 text-xs font-medium"><span id="pdp-reviews">1,200</span> Ratings &amp; Reviews</span>
</div>
<div className="flex items-baseline gap-3 mb-4">
<span className="text-2xl font-bold text-neutral-900">₹<span id="pdp-price">999</span></span>
<span className="text-sm text-neutral-500 line-through">₹<span id="pdp-original">1999</span></span>
<span className="text-sm text-green-600 font-bold" id="pdp-discount">50% off</span>
</div>

<div className="space-y-2 mb-6">
<h4 className="text-xs font-bold text-neutral-900 mb-1">Available Offers</h4>
<div className="flex items-start gap-2 text-sm text-neutral-700">
<iconify-icon className="text-green-600 mt-0.5 flex-shrink-0" icon="solar:tag-linear"></iconify-icon>
<span className="text-xs">Bank Offer 5% Cashback on Flipkart Axis Bank Card</span>
</div>
<div className="flex items-start gap-2 text-sm text-neutral-700">
<iconify-icon className="text-green-600 mt-0.5 flex-shrink-0" icon="solar:tag-linear"></iconify-icon>
<span className="text-xs">Special Price Get extra 10% off (price inclusive of cashback/coupon)</span>
</div>
</div>

<div className="border border-neutral-200 rounded-lg p-4 mb-6">
<h4 className="text-sm font-semibold text-neutral-900 mb-3">Specifications</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-xs md:text-sm" id="pdp-specs">

</div>
</div>

<div className="mb-6">
<h4 className="text-sm font-semibold text-neutral-900 mb-2">Product Description</h4>
<p className="text-xs md:text-sm text-neutral-600 leading-relaxed" id="pdp-desc">
                                Description here.
                            </p>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] flex md:hidden z-40">

<button className="flex-1 py-4 bg-white text-neutral-900 font-bold text-sm border-t border-neutral-200 flex items-center justify-center gap-2" onclick="addToCart(currentProduct.id, true)">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon> Add to Cart
                </button>

<button className="flex-1 py-4 bg-[#fb641b] text-white font-bold text-sm flex items-center justify-center gap-2" onclick="buyNow(currentProduct.id)">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Buy Now
                </button>
</div>
</div>

<div className="view-section max-w-7xl mx-auto px-0 md:px-4 py-4 md:py-6" id="cart-view">
<div className="flex flex-col lg:flex-row gap-4">

<div className="flex-1 bg-white shadow-sm rounded-sm overflow-hidden">
<div className="p-4 border-b border-neutral-200 bg-white flex justify-between items-center">
<h2 className="text-lg font-medium">My Cart</h2>
<button className="text-blue-600 text-sm font-medium hover:underline" onclick="router('home')">Shop More</button>
</div>
<div className="divide-y divide-neutral-100" id="cart-items-container">

</div>
<div className="p-4 bg-white border-t border-neutral-200 flex justify-end shadow-[0_-2px_10px_rgba(0,0,0,0.05)] sticky bottom-0 md:static">
<button className="bg-[#fb641b] text-white px-8 md:px-16 py-3 font-semibold text-sm rounded-sm shadow-sm uppercase hidden" id="place-order-btn" onclick="router('checkout')">
                            Place Order
                        </button>
</div>
</div>

<div className="w-full lg:w-[360px] h-fit bg-white shadow-sm rounded-sm p-4 sticky top-20">
<h3 className="text-neutral-500 font-medium text-sm border-b border-neutral-200 pb-3 mb-4 uppercase">Price Details</h3>
<div className="space-y-3 text-sm mb-4 border-b border-neutral-200 pb-4 border-dashed">
<div className="flex justify-between">
<span className="text-neutral-900">Price (<span id="cart-qty-total">0</span> items)</span>
<span className="text-neutral-900">₹<span id="cart-price-total">0</span></span>
</div>
<div className="flex justify-between text-green-600">
<span>Discount</span>
<span>− ₹<span id="cart-discount-total">0</span></span>
</div>
<div className="flex justify-between text-green-600">
<span>Delivery Charges</span>
<span>Free</span>
</div>
</div>
<div className="flex justify-between font-bold text-lg text-neutral-900 mb-4">
<span>Total Amount</span>
<span>₹<span id="cart-final-total">0</span></span>
</div>
<p className="text-green-600 text-xs font-medium">You will save ₹<span id="cart-savings">0</span> on this order</p>
</div>
</div>
</div>

<div className="view-section max-w-4xl mx-auto px-0 md:px-4 py-4 md:py-6" id="checkout-view">
<div className="space-y-4">

<div className="bg-white shadow-sm p-4 rounded-sm flex items-center justify-between">
<div className="flex items-start gap-4">
<span className="bg-neutral-100 text-blue-600 px-2 py-0.5 text-xs font-bold rounded">1</span>
<div>
<h3 className="text-neutral-500 text-sm font-medium uppercase">Login</h3>
<p className="text-neutral-900 font-medium text-sm mt-1">+91 9876543210 <span className="text-blue-600 ml-2 text-xs cursor-pointer">Change</span></p>
</div>
</div>
</div>

<div className="bg-white shadow-sm rounded-sm overflow-hidden">
<div className="bg-[#2874f0] p-4 flex items-center gap-4">
<span className="bg-white text-blue-600 px-2 py-0.5 text-xs font-bold rounded">2</span>
<h3 className="text-white text-sm font-medium uppercase">Delivery Address</h3>
</div>
<div className="p-4 md:p-6 bg-blue-50">
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('payment-step').classList.remove('opacity-50', 'pointer-events-none');">
<div className="grid grid-cols-2 gap-4">
<input className="w-full p-3 border border-neutral-300 rounded text-sm focus:border-blue-500 outline-none" placeholder="Name" required="" type="text"/>
<input className="w-full p-3 border border-neutral-300 rounded text-sm focus:border-blue-500 outline-none" placeholder="10-digit mobile number" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<input className="w-full p-3 border border-neutral-300 rounded text-sm focus:border-blue-500 outline-none" placeholder="Pincode" required="" type="text"/>
<input className="w-full p-3 border border-neutral-300 rounded text-sm focus:border-blue-500 outline-none" placeholder="Locality" required="" type="text"/>
</div>
<textarea className="w-full p-3 border border-neutral-300 rounded text-sm focus:border-blue-500 outline-none h-20" placeholder="Address (Area and Street)" required=""></textarea>
<button className="bg-[#fb641b] text-white px-8 py-3 font-semibold text-sm rounded-sm shadow-sm uppercase">Deliver Here</button>
</form>
</div>
</div>

<div className="bg-white shadow-sm rounded-sm opacity-50 pointer-events-none transition-opacity" id="payment-step">
<div className="bg-neutral-50 p-4 border-b border-neutral-200">
<div className="flex items-center gap-4">
<span className="bg-neutral-200 text-neutral-600 px-2 py-0.5 text-xs font-bold rounded">3</span>
<h3 className="text-neutral-500 text-sm font-medium uppercase">Payment Options</h3>
</div>
</div>
<div className="p-4 space-y-3">
<label className="flex items-center gap-3 p-3 border border-neutral-200 rounded cursor-pointer hover:bg-blue-50">
<input className="w-4 h-4 text-blue-600" name="payment" type="radio"/>
<span className="text-sm font-medium">UPI / Wallet</span>
</label>
<label className="flex items-center gap-3 p-3 border border-neutral-200 rounded cursor-pointer hover:bg-blue-50">
<input className="w-4 h-4 text-blue-600" name="payment" type="radio"/>
<span className="text-sm font-medium">Credit / Debit / ATM Card</span>
</label>
<label className="flex items-center gap-3 p-3 border border-neutral-200 rounded cursor-pointer hover:bg-blue-50">
<input checked="" className="w-4 h-4 text-blue-600" name="payment" type="radio"/>
<span className="text-sm font-medium">Cash on Delivery</span>
</label>
<button className="mt-4 w-full bg-[#fb641b] text-white py-3 font-bold text-sm rounded-sm shadow-sm uppercase hover:bg-[#f05e16]" onclick="confirmOrder()">Confirm Order</button>
</div>
</div>
</div>
</div>

<div className="view-section h-[80vh] flex flex-col items-center justify-center text-center px-4" id="order-success">
<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
<iconify-icon icon="solar:verified-check-bold" width="40"></iconify-icon>
</div>
<h2 className="text-2xl font-bold text-neutral-900 mb-2">Order Placed Successfully!</h2>
<p className="text-neutral-500 mb-8 max-w-sm">Thank you for shopping with VK Mart. Your order #VK88293 has been confirmed.</p>
<button className="bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700" onclick="router('home')">Continue Shopping</button>
</div>
</main>

<div className="fixed inset-0 z-[100] bg-black/60 hidden items-center justify-center p-4 backdrop-blur-sm" id="login-modal">
<div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl flex overflow-hidden min-h-[400px] relative">
<button className="absolute top-4 right-4 text-white md:text-neutral-400 z-10" onclick="toggleLogin()"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>

<div className="hidden md:flex bg-[#2874f0] w-2/5 p-8 flex-col justify-between text-white">
<div>
<h2 className="text-2xl font-semibold mb-4">Login</h2>
<p className="text-blue-100 text-sm leading-relaxed">Get access to your Orders, Wishlist and Recommendations</p>
</div>
<iconify-icon className="text-8xl opacity-30 self-center" icon="solar:cart-check-linear"></iconify-icon>
</div>

<div className="flex-1 p-8 flex flex-col justify-center">
<div className="space-y-4">
<input className="w-full border-b border-neutral-300 py-2 focus:border-blue-600 focus:outline-none text-sm transition-colors" placeholder="Enter Email/Mobile number" type="text"/>
<p className="text-xs text-neutral-400">By continuing, you agree to VK Mart's <a className="text-blue-600" href="#">Terms of Use</a> and <a className="text-blue-600" href="#">Privacy Policy</a>.</p>
<button className="w-full bg-[#fb641b] text-white py-3 rounded-sm font-semibold text-sm shadow hover:bg-[#f05e16]" onclick="toggleLogin(); alert('Logged In Successfully!')">Request OTP</button>
<div className="text-center mt-8">
<a className="text-blue-600 text-sm font-medium" href="#">New to VK Mart? Create an account</a>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-neutral-900 text-white py-12 text-sm border-t-4 border-yellow-400 mt-8">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<h4 className="text-neutral-500 mb-4 text-xs font-bold uppercase tracking-wider">About</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:underline" href="#">Contact Us</a></li>
<li><a className="hover:underline" href="#">About Us</a></li>
</ul>
</div>
<div>
<h4 className="text-neutral-500 mb-4 text-xs font-bold uppercase tracking-wider">Help</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:underline" href="#">Payments</a></li>
<li><a className="hover:underline" href="#">Shipping</a></li>
</ul>
</div>
<div>
<h4 className="text-neutral-500 mb-4 text-xs font-bold uppercase tracking-wider">Policy</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:underline" href="#">Return Policy</a></li>
<li><a className="hover:underline" href="#">Terms of Use</a></li>
</ul>
</div>
<div className="border-l border-neutral-700 pl-8">
<h4 className="text-neutral-500 mb-4 text-xs font-bold uppercase tracking-wider">Mail Us:</h4>
<p className="text-xs leading-relaxed text-neutral-300">
                    VK Mart Private Limited,<br/>
                    Bengaluru, Karnataka, India
                </p>
</div>
</div>
</footer>


    </>
  );
}
