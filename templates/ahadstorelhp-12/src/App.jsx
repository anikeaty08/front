import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // State
        let cart = [];
        let basePrice = 2400;
        let bundlePrice = 1800;
        let currentShade = 'Joy (Warm Peachy Pink)';

        // Utils
        const formatPrice = (p) => p.toLocaleString('en-IN');
        
        // --- Core UI Functions ---

        function changeImage(el, src) {
            const mainImg = document.getElementById('main-image');
            mainImg.style.opacity = '0.5';
            setTimeout(() => {
                mainImg.src = src;
                mainImg.style.opacity = '1';
            }, 150);
            document.querySelectorAll('.thumb-btn').forEach(btn => btn.classList.remove('ring-2', 'ring-gray-900', 'ring-offset-2'));
            el.classList.add('ring-2', 'ring-gray-900', 'ring-offset-2');
        }

        function updateShade(name) {
            currentShade = name;
            const label = document.getElementById('shade-name');
            label.style.opacity = '0';
            setTimeout(() => {
                label.innerText = name;
                label.style.opacity = '1';
            }, 150);
        }

        function adjustQty(change) {
            const input = document.getElementById('qty-input');
            let val = parseInt(input.value) + change;
            if(val < 1) val = 1;
            if(val > 5) val = 5;
            input.value = val;
            updateButtonPrice();
        }

        // --- Bundle & Price Logic ---

        const bundleCheck = document.getElementById('bundle-check');
        bundleCheck.addEventListener('change', updateButtonPrice);

        function updateButtonPrice() {
            const qty = parseInt(document.getElementById('qty-input').value);
            let total = basePrice * qty;
            if (bundleCheck.checked) {
                total += bundlePrice;
            }
            document.getElementById('total-price').innerText = formatPrice(total);
        }

        // --- Cart Logic ---

        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            const overlay = document.getElementById('cart-overlay');
            const isClosed = drawer.classList.contains('translate-x-full');

            if (isClosed) {
                // Open
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
                drawer.classList.remove('translate-x-full');
            } else {
                // Close
                drawer.classList.add('translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }

        function renderCart() {
            const container = document.getElementById('cart-items');
            const emptyState = document.getElementById('cart-empty');
            const footer = document.getElementById('cart-footer');
            const badge = document.getElementById('cart-badge');

            // Update Badge
            const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
            badge.innerText = totalItems;
            badge.style.opacity = totalItems > 0 ? '1' : '0';

            // Empty State Toggle
            if (cart.length === 0) {
                container.innerHTML = '';
                emptyState.classList.remove('hidden');
                footer.classList.add('hidden');
                document.getElementById('cart-subtotal').innerText = '₹0';
                return;
            }

            emptyState.classList.add('hidden');
            footer.classList.remove('hidden');

            // Render Items
            let html = '';
            let subtotal = 0;

            cart.forEach((item, index) => {
                subtotal += item.price * item.qty;
                html += `
                    <div class="flex gap-4 animate-enter" style="animation-delay: ${index * 50}ms">
                        <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img src="${item.img}" alt="${item.name}" class="h-full w-full object-cover object-center">
                        </div>
                        <div class="flex flex-1 flex-col">
                            <div>
                                <div class="flex justify-between text-sm font-medium text-gray-900">
                                    <h3>${item.name}</h3>
                                    <p class="ml-4">₹${formatPrice(item.price * item.qty)}</p>
                                </div>
                                <p class="mt-1 text-xs text-gray-500">${item.variant}</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-xs">
                                <p class="text-gray-500">Qty ${item.qty}</p>
                                <button type="button" onclick="removeFromCart(${index})" class="font-medium text-red-500 hover:text-red-400">Remove</button>
                            </div>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = html;
            document.getElementById('cart-subtotal').innerText = '₹' + formatPrice(subtotal);
        }

        function addToCart() {
            const qty = parseInt(document.getElementById('qty-input').value);
            
            // Add Main Product
            cart.push({
                name: 'Soft Pinch Liquid Blush',
                variant: currentShade,
                price: basePrice,
                qty: qty,
                img: document.getElementById('main-image').src
            });

            // Add Bundle Product if checked
            if (bundleCheck.checked) {
                cart.push({
                    name: 'Soft Pinch Blush Brush',
                    variant: 'Synthetic Bristles',
                    price: bundlePrice,
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80'
                });
                // Reset checkbox
                bundleCheck.checked = false;
                updateButtonPrice();
            }

            renderCart();
            toggleCart();
        }

        // Add from Trending Section
        function addRelatedToCart(name, price, img) {
            cart.push({
                name: name,
                variant: 'Standard Size',
                price: price,
                qty: 1,
                img: img
            });
            renderCart();
            toggleCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            renderCart();
        }

        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.tab-btn').forEach(el => {
                el.classList.remove('border-gray-900', 'text-gray-900');
                el.classList.add('border-transparent', 'text-gray-500');
            });
            document.getElementById('tab-content-' + tabId).classList.remove('hidden');
            const activeBtn = document.getElementById('tab-btn-' + tabId);
            activeBtn.classList.remove('border-transparent', 'text-gray-500');
            activeBtn.classList.add('border-gray-900', 'text-gray-900');
        }
        
        // Initial render
        renderCart();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-40 h-14 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-8">
<a className="font-semibold tracking-tight text-lg" href="#">Sephora</a>
<nav className="hidden md:flex items-center gap-6 text-sm text-gray-500 font-medium">
<a className="hover:text-gray-900 transition-colors" href="#">Makeup</a>
<a className="hover:text-gray-900 transition-colors" href="#">Jewelry</a>
<a className="hover:text-gray-900 transition-colors" href="#">Brands</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<button className="relative text-gray-500 hover:text-gray-900 transition-colors" onclick="toggleCart()">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] text-white font-medium opacity-0 transition-opacity" id="cart-badge">0</span>
</button>
</div>
</header>

<div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300" id="cart-overlay" onclick="toggleCart()"></div>
<div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col" id="cart-drawer">
<div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
<h2 className="text-lg font-semibold tracking-tight">Shopping Bag</h2>
<button className="text-gray-500 hover:text-gray-900 p-2 hover:bg-gray-50 rounded-full transition-colors" onclick="toggleCart()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 flex flex-col items-center justify-center text-center p-8 hidden" id="cart-empty">
<div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
<i className="w-8 h-8 text-gray-300" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-sm font-medium text-gray-900">Your bag is empty</h3>
<p className="text-xs text-gray-500 mt-1">Looks like you haven't added anything yet.</p>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6" id="cart-items">

</div>

<div className="border-t border-gray-100 p-6 bg-gray-50/50" id="cart-footer">
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-gray-600">Subtotal</span>
<span className="text-sm font-medium text-gray-900" id="cart-subtotal">₹0</span>
</div>
<div className="flex justify-between items-center mb-6">
<span className="text-sm text-gray-600">Shipping</span>
<span className="text-sm font-medium text-green-600">Free</span>
</div>
<button className="w-full bg-gray-900 text-white font-medium text-sm py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 active:scale-[0.98]">
                Checkout
            </button>
</div>
</div>

<main className="max-w-7xl mx-auto pt-24 px-6 lg:px-8">

<nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 animate-enter">
<a className="hover:text-gray-900 transition-colors" href="#">Home</a>
<i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
<a className="hover:text-gray-900 transition-colors" href="#">Makeup</a>
<i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-gray-900 font-medium">Soft Pinch Liquid Blush</span>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-7 flex flex-col gap-6 animate-enter delay-100">
<div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-[4/3] group cursor-zoom-in">
<img alt="Product Image" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" id="main-image" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&amp;q=90"/>
</div>
<div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
<button className="thumb-btn active ring-2 ring-gray-900 ring-offset-2 relative flex-none w-20 h-20 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 transition-all" onclick="changeImage(this, 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&amp;q=90')">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&amp;q=80"/>
</button>
<button className="thumb-btn relative flex-none w-20 h-20 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 transition-all hover:border-gray-300" onclick="changeImage(this, 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e80d5b8-e4bd-4100-8caf-278d09d3a953_3840w.jpg')">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e80d5b8-e4bd-4100-8caf-278d09d3a953_3840w.jpg"/>
</button>
<button className="thumb-btn relative flex-none w-20 h-20 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 transition-all hover:border-gray-300" onclick="changeImage(this, 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc8e09b4-f7e4-4778-bb01-2600e5f66527_320w.jpg')">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc8e09b4-f7e4-4778-bb01-2600e5f66527_320w.jpg"/>
</button>
<button className="thumb-btn relative flex-none w-20 h-20 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 transition-all hover:border-gray-300" onclick="changeImage(this, 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=320&amp;q=80')">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=320&amp;q=80"/>
</button>
</div>
</div>

<div className="lg:col-span-5 flex flex-col animate-enter delay-200">
<div className="border-b border-gray-100 pb-6 mb-6">
<div className="flex justify-between items-start mb-2">
<h2 className="text-sm font-medium text-gray-500">Rare Beauty by Selena Gomez</h2>
<div className="flex items-center gap-1 text-yellow-500 text-xs">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-gray-900 font-medium ml-1">4.6</span>
<span className="text-gray-400 font-normal">(8,247)</span>
</div>
</div>
<h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Soft Pinch Liquid Blush</h1>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-2xl font-medium tracking-tight">₹2,400</span>
<span className="text-base text-gray-400 line-through">₹2,800</span>
<span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">Save 15%</span>
</div>
<p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                        A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Available in matte and dewy finishes.
                    </p>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-medium text-gray-900">Shade</span>
<span className="text-sm text-gray-500" id="shade-name">Joy (Warm Peachy Pink)</span>
</div>
<div className="flex flex-wrap gap-3">
<div className="relative">
<input checked="" className="color-radio sr-only" id="shade-joy" name="shade" onchange="updateShade('Joy (Warm Peachy Pink)')" type="radio"/>
<label className="block w-10 h-10 rounded-full bg-[#FB9283] cursor-pointer hover:opacity-90 transition-opacity" htmlFor="shade-joy"></label>
</div>
<div className="relative">
<input className="color-radio sr-only" id="shade-hope" name="shade" onchange="updateShade('Hope (Nude Mauve)')" type="radio"/>
<label className="block w-10 h-10 rounded-full bg-[#D68A8A] cursor-pointer hover:opacity-90 transition-opacity" htmlFor="shade-hope"></label>
</div>
<div className="relative">
<input className="color-radio sr-only" id="shade-happy" name="shade" onchange="updateShade('Happy (Cool Pink)')" type="radio"/>
<label className="block w-10 h-10 rounded-full bg-[#E56B8F] cursor-pointer hover:opacity-90 transition-opacity" htmlFor="shade-happy"></label>
</div>
<div className="relative">
<input className="color-radio sr-only" id="shade-bliss" name="shade" onchange="updateShade('Bliss (Matte Pink)')" type="radio"/>
<label className="block w-10 h-10 rounded-full bg-[#F4A49B] cursor-pointer hover:opacity-90 transition-opacity" htmlFor="shade-bliss"></label>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-100">
<h3 className="text-sm font-semibold text-gray-900 mb-3">Complete the Look</h3>
<div className="flex items-start gap-3">
<div className="relative flex items-center h-5 mt-1">
<input className="custom-checkbox h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 transition-colors cursor-pointer" id="bundle-check" type="checkbox"/>
</div>
<div className="flex-1">
<label className="flex gap-3 cursor-pointer select-none" htmlFor="bundle-check">
<img className="w-12 h-12 rounded-lg object-cover border border-gray-200 bg-white" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&amp;q=80"/>
<div>
<span className="block text-sm font-medium text-gray-900">Soft Pinch Blush Brush</span>
<span className="text-xs text-gray-500 block mt-0.5">Add for <span className="font-medium text-gray-900">₹1,800</span></span>
</div>
</label>
</div>
</div>
</div>

<div className="flex flex-col gap-4 mb-8">
<div className="flex gap-4">
<div className="flex items-center border border-gray-200 rounded-lg w-32 px-3 hover:border-gray-300 transition-colors">
<button className="text-gray-500 hover:text-gray-900 p-2" onclick="adjustQty(-1)">
<i className="w-4 h-4" data-lucide="minus" strokeWidth="1.5"></i>
</button>
<input className="w-full text-center text-sm font-medium border-none focus:ring-0 bg-transparent py-3" id="qty-input" max="5" min="1" type="number" value="1"/>
<button className="text-gray-500 hover:text-gray-900 p-2" onclick="adjustQty(1)">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
<button className="flex-1 bg-gray-900 text-white font-medium text-sm rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:transform active:scale-[0.98]" onclick="addToCart()">
<i className="w-4 h-4" data-lucide="shopping-bag" strokeWidth="1.5"></i>
                            Add to Cart - ₹<span id="total-price">2,400</span>
</button>
<button className="p-3 border border-gray-200 rounded-lg text-gray-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> In stock, ready to ship
                    </div>
</div>

<div className="grid grid-cols-3 gap-2 text-center border-t border-gray-100 pt-6">
<div className="p-3">
<div className="mx-auto w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mb-2">
<i className="w-4 h-4 text-gray-900" data-lucide="truck"></i>
</div>
<span className="block text-xs font-medium">Free Shipping</span>
</div>
<div className="p-3 border-l border-gray-100">
<div className="mx-auto w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mb-2">
<i className="w-4 h-4 text-gray-900" data-lucide="rotate-ccw"></i>
</div>
<span className="block text-xs font-medium">Free Returns</span>
</div>
<div className="p-3 border-l border-gray-100">
<div className="mx-auto w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mb-2">
<i className="w-4 h-4 text-gray-900" data-lucide="shield-check"></i>
</div>
<span className="block text-xs font-medium">Authentic</span>
</div>
</div>
</div>
</div>

<div className="mt-24 mb-12 animate-enter delay-300">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Trending Now</h2>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1" href="#">
                    View all <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative bg-gray-50 rounded-xl overflow-hidden aspect-[4/5] mb-3">
<img alt="Lip Glow Oil" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&amp;q=80"/>
<button className="absolute bottom-3 right-3 h-8 w-8 bg-white/90 backdrop-blur-md rounded-full text-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" onclick="addRelatedToCart('Dior Lip Glow Oil', 3800, 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&amp;q=80')">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
<h3 className="text-sm font-medium text-gray-900">Dior Lip Glow Oil</h3>
<p className="text-xs text-gray-500 mb-2">Cherry 015</p>
<div className="flex items-center justify-between">
<span className="text-sm font-semibold">₹3,800</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-gray-50 rounded-xl overflow-hidden aspect-[4/5] mb-3">
<img alt="Gold Hoops" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase">Bestseller</div>
<button className="absolute bottom-3 right-3 h-8 w-8 bg-white/90 backdrop-blur-md rounded-full text-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" onclick="addRelatedToCart('Chunky Gold Hoops', 1450, 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&amp;q=80')">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
<h3 className="text-sm font-medium text-gray-900">Chunky Gold Hoops</h3>
<p className="text-xs text-gray-500 mb-2">18k Gold Plated</p>
<div className="flex items-center justify-between">
<span className="text-sm font-semibold">₹1,450</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-gray-50 rounded-xl overflow-hidden aspect-[4/5] mb-3">
<img alt="Flawless Filter" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&amp;q=80"/>
<button className="absolute bottom-3 right-3 h-8 w-8 bg-white/90 backdrop-blur-md rounded-full text-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" onclick="addRelatedToCart('Flawless Filter', 4100, 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&amp;q=80')">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
<h3 className="text-sm font-medium text-gray-900">Flawless Filter</h3>
<p className="text-xs text-gray-500 mb-2">Fair 2.5</p>
<div className="flex items-center justify-between">
<span className="text-sm font-semibold">₹4,100</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-gray-50 rounded-xl overflow-hidden aspect-[4/5] mb-3">
<img alt="Pearl Necklace" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-3 right-3 h-8 w-8 bg-white/90 backdrop-blur-md rounded-full text-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" onclick="addRelatedToCart('Freshwater Pearl Necklace', 2800, 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg')">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
<h3 className="text-sm font-medium text-gray-900">Freshwater Pearl Necklace</h3>
<p className="text-xs text-gray-500 mb-2">Genuine Pearls</p>
<div className="flex items-center justify-between">
<span className="text-sm font-semibold">₹2,800</span>
</div>
</div>
</div>
</div>

<div className="mt-16 max-w-4xl mx-auto border-t border-gray-100 pt-16">
<div className="border-b border-gray-200">
<nav aria-label="Tabs" className="-mb-px flex space-x-8">
<button className="tab-btn border-gray-900 text-gray-900 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors" id="tab-btn-details" onclick="switchTab('details')">Details</button>
<button className="tab-btn border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors" id="tab-btn-ingredients" onclick="switchTab('ingredients')">Ingredients</button>
<button className="tab-btn border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors" id="tab-btn-reviews" onclick="switchTab('reviews')">Reviews</button>
</nav>
</div>
<div className="py-8">
<div className="tab-content block" id="tab-content-details">
<h3 className="text-lg font-medium text-gray-900 mb-4">Product Overview</h3>
<p className="text-gray-600 text-sm leading-7 mb-6">Get a soft pinch of long-lasting color with this weightless, buildable liquid blush. The true-to-color formula blends effortlessly.</p>
</div>
<div className="tab-content hidden" id="tab-content-ingredients">
<p className="text-gray-600 text-sm leading-7 bg-gray-50 p-6 rounded-xl border border-gray-100 font-mono">Water/Aqua/Eau, Dimethicone, Isododecane, Alcohol Denat., Butylene Glycol.</p>
</div>
<div className="tab-content hidden" id="tab-content-reviews">
<p className="text-gray-600 text-sm">Review section content...</p>
</div>
</div>
</div>
</main>


    </>
  );
}
