import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- DATA STORE ---
        const categories = [
            { id: 1, name: "Rice", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=100&q=80" },
            { id: 2, name: "Spices", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=100&q=80" },
            { id: 3, name: "Oils", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=100&q=80" },
            { id: 4, name: "Dal", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=100&q=80" },
            { id: 5, name: "Snacks", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=100&q=80" },
        ];

        const products = [
            { id: 101, name: "Basmati Rice Premium", price: 120, discount: 10, delivery: 40, stock: 50, img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80", category: "Rice" },
            { id: 102, name: "Turmeric Powder 500g", price: 180, discount: 5, delivery: 20, stock: 20, img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80", category: "Spices" },
            { id: 103, name: "Mustard Oil 1L", price: 160, discount: 0, delivery: 30, stock: 0, img: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=400&q=80", category: "Oils" },
            { id: 104, name: "Masoor Dal 1kg", price: 90, discount: 15, delivery: 25, stock: 100, img: "https://images.unsplash.com/photo-1585996657175-9c17cc3905c8?auto=format&fit=crop&w=400&q=80", category: "Dal" },
        ];

        let cart = [];
        let orders = [];
        let currentProduct = null;
        let isCOD = false;

        // --- CORE NAVIGATION ---
        function initApp() {
            setTimeout(() => {
                document.getElementById('splash-screen').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('splash-screen').style.display = 'none';
                    document.getElementById('main-header').classList.remove('hidden');
                    document.getElementById('bottom-nav').classList.remove('hidden');
                    renderHome();
                }, 700);
            }, 2000); // 2 seconds splash
        }

        function navigateTo(pageId) {
            document.querySelectorAll('.page-view').forEach(p => p.classList.add('hidden'));
            document.getElementById(pageId).classList.remove('hidden');
            
            // Handle Header States
            const header = document.getElementById('main-header');
            const backBtn = document.getElementById('back-btn');
            const brand = document.getElementById('header-brand');
            
            if (['page-home', 'page-cart', 'page-account'].includes(pageId)) {
                backBtn.classList.add('hidden');
                brand.classList.remove('hidden');
            } else {
                backBtn.classList.remove('hidden');
                brand.classList.add('hidden');
            }

            // Specific page logic
            if(pageId === 'page-cart') renderCart();
        }

        function goBack() {
            // Simple history simulation
            navigateTo('page-home');
            setNavActive('nav-home');
        }

        function setNavActive(navId) {
            document.querySelectorAll('#bottom-nav button').forEach(b => {
                b.classList.remove('text-orange-600');
                b.classList.add('text-zinc-400');
            });
            const btn = document.getElementById(navId);
            btn.classList.remove('text-zinc-400');
            btn.classList.add('text-orange-600');
        }

        // --- RENDER FUNCTIONS ---
        function renderHome() {
            // Categories
            const catContainer = document.getElementById('category-list');
            catContainer.innerHTML = categories.map(c => `
                <div class="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer w-16" onclick="filterCategory('${c.name}')">
                    <div class="h-14 w-14 rounded-full overflow-hidden border border-zinc-200">
                        <img src="${c.img}" class="h-full w-full object-cover">
                    </div>
                    <span class="text-[10px] font-medium text-zinc-600">${c.name}</span>
                </div>
            `).join('');

            // Products
            const prodContainer = document.getElementById('product-list');
            prodContainer.innerHTML = products.map(p => `
                <div class="bg-white p-3 rounded-xl border border-zinc-100 shadow-sm active:scale-[0.98] transition-transform" onclick="openProduct(${p.id})">
                    <div class="aspect-square bg-zinc-100 rounded-lg mb-3 overflow-hidden relative">
                        <img src="${p.img}" class="w-full h-full object-cover">
                        ${p.stock === 0 ? '<div class="absolute inset-0 bg-white/60 flex items-center justify-center font-bold text-xs text-zinc-500">Out of Stock</div>' : ''}
                    </div>
                    <h3 class="text-sm font-medium text-zinc-900 truncate">${p.name}</h3>
                    <div class="flex items-center justify-between mt-1">
                        <span class="text-sm font-bold text-zinc-900">₹${p.price}</span>
                        ${p.discount > 0 ? `<span class="text-[10px] text-green-600 font-medium">${p.discount}% OFF</span>` : ''}
                    </div>
                </div>
            `).join('');
        }

        function openProduct(id) {
            currentProduct = products.find(p => p.id === id);
            if (!currentProduct) return;

            document.getElementById('pd-image').src = currentProduct.img;
            document.getElementById('pd-name').innerText = currentProduct.name;
            document.getElementById('pd-price').innerText = currentProduct.price;
            document.getElementById('pd-delivery').innerText = currentProduct.delivery;
            document.getElementById('pd-discount').innerText = `-${currentProduct.discount}%`;
            
            const btn = document.getElementById('btn-add-to-cart');
            const stockBadge = document.getElementById('pd-stock-badge');
            
            if (currentProduct.stock === 0) {
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
                btn.innerText = "Out of Stock";
                stockBadge.innerText = "Out of Stock";
                stockBadge.classList.replace('text-green-700', 'text-red-700');
                stockBadge.classList.replace('border-green-100', 'border-red-100');
            } else {
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                btn.innerHTML = `<span class="iconify" data-icon="lucide:shopping-bag"></span> Add to Cart`;
                stockBadge.innerText = "In Stock";
                stockBadge.classList.replace('text-red-700', 'text-green-700');
                stockBadge.classList.replace('border-red-100', 'border-green-100');
            }

            navigateTo('page-product-details');
        }

        // --- CART LOGIC ---
        function addToCartCurrent() {
            if (!currentProduct) return;
            const existing = cart.find(c => c.id === currentProduct.id);
            if (existing) {
                existing.qty++;
            } else {
                cart.push({ ...currentProduct, qty: 1 });
            }
            showNotification("Added to Cart!");
            updateCartCount();
        }

        function updateCartCount() {
            const dot = document.getElementById('nav-cart-count');
            if (cart.length > 0) dot.classList.remove('hidden');
            else dot.classList.add('hidden');
        }

        function renderCart() {
            const container = document.getElementById('cart-items');
            const summary = document.getElementById('cart-summary');
            
            if (cart.length === 0) {
                container.innerHTML = `<div class="flex flex-col items-center justify-center py-10 text-zinc-400"><span class="iconify text-4xl mb-2" data-icon="lucide:shopping-cart"></span><p class="text-sm">Your cart is empty</p></div>`;
                summary.classList.add('hidden');
                return;
            }

            let subtotal = 0;
            let delivery = 0;

            container.innerHTML = cart.map((item, idx) => {
                subtotal += item.price * item.qty;
                delivery = Math.max(delivery, item.delivery); // Simple logic: max delivery charge
                return `
                <div class="flex gap-3 bg-white p-3 rounded-xl border border-zinc-100">
                    <img src="${item.img}" class="h-20 w-20 object-cover rounded-lg bg-zinc-100">
                    <div class="flex-1 flex flex-col justify-between">
                        <div>
                            <h4 class="text-sm font-medium text-zinc-900 line-clamp-1">${item.name}</h4>
                            <p class="text-xs text-zinc-500">₹${item.price}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <button onclick="updateQty(${idx}, -1)" class="h-6 w-6 rounded border border-zinc-200 flex items-center justify-center text-zinc-600">-</button>
                            <span class="text-sm font-medium">${item.qty}</span>
                            <button onclick="updateQty(${idx}, 1)" class="h-6 w-6 rounded border border-zinc-200 flex items-center justify-center text-zinc-600">+</button>
                        </div>
                    </div>
                </div>`;
            }).join('');

            summary.classList.remove('hidden');
            document.getElementById('cart-subtotal').innerText = subtotal;
            document.getElementById('cart-delivery').innerText = delivery;
            document.getElementById('cart-total').innerText = subtotal + delivery;
        }

        function updateQty(idx, change) {
            if (cart[idx].qty + change <= 0) {
                cart.splice(idx, 1);
            } else {
                cart[idx].qty += change;
            }
            renderCart();
            updateCartCount();
        }

        // --- PAYMENT & ORDER ---
        function toggleCOD() {
            isCOD = !isCOD;
            const box = document.getElementById('cod-toggle');
            const check = box.querySelector('.iconify');
            if (isCOD) {
                box.classList.add('bg-green-500', 'border-green-500');
                check.classList.remove('hidden');
            } else {
                box.classList.remove('bg-green-500', 'border-green-500');
                check.classList.add('hidden');
            }
        }

        function handleFileUpload(input) {
            const name = input.files[0] ? input.files[0].name : "No file selected";
            document.getElementById('file-name').innerText = name;
        }

        function confirmOrder() {
            if (!isCOD && document.getElementById('file-name').innerText === "No file selected") {
                showNotification("Please upload payment proof or select COD.");
                return;
            }

            const orderId = "ORD-" + Math.floor(Math.random() * 1000000);
            const total = document.getElementById('cart-total').innerText;
            
            // Create Order
            const newOrder = {
                id: orderId,
                items: [...cart],
                total: total,
                status: "Order Confirmed",
                date: new Date().toLocaleDateString()
            };
            orders.unshift(newOrder);

            // Notify Admin Mock
            if(orders.length > 0) {
                // Admin gets notified logic here
                document.getElementById('adm-total-orders').innerText = orders.length;
                let rev = parseInt(document.getElementById('adm-revenue').innerText) + parseInt(total);
                document.getElementById('adm-revenue').innerText = rev;
                
                // Add to admin list
                const adminList = document.getElementById('admin-order-list');
                const p = document.createElement('div');
                p.className = "flex justify-between items-center p-3 bg-zinc-50 rounded-lg text-xs";
                p.innerHTML = `<span>${orderId}</span><span class="font-bold">₹${total}</span>`;
                if(adminList.innerText.includes("No orders")) adminList.innerHTML = "";
                adminList.prepend(p);
            }

            // Reset Cart
            cart = [];
            updateCartCount();

            // Show Confirmation
            document.getElementById('conf-order-id').innerText = orderId;
            navigateTo('page-confirmation');
            showNotification("Order Placed Successfully!");
            updateMyOrders();
        }

        // --- USER ACCOUNT & OTP ---
        function sendUserOTP() {
            const phone = document.getElementById('user-phone').value;
            if (phone.length < 10) {
                showNotification("Enter valid phone number");
                return;
            }
            document.getElementById('otp-container').classList.remove('hidden');
            showNotification(`OTP sent to ${phone}`);
        }

        function verifyUserOTP() {
            const otp = document.getElementById('user-otp').value;
            if (otp.length > 0) {
                document.getElementById('auth-section').classList.add('hidden');
                document.getElementById('profile-section').classList.remove('hidden');
                document.getElementById('display-phone').innerText = document.getElementById('user-phone').value;
                showNotification("Login Successful");
            } else {
                showNotification("Invalid OTP");
            }
        }

        function toggleSection(id) {
            const el = document.getElementById(id);
            el.classList.toggle('hidden');
        }

        function updateMyOrders() {
            const container = document.getElementById('my-orders');
            if (orders.length === 0) {
                container.innerHTML = '<p class="text-xs text-zinc-400">No recent orders.</p>';
                return;
            }
            container.innerHTML = orders.map(o => `
                <div class="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                    <div class="flex justify-between text-xs font-medium text-zinc-900">
                        <span>${o.id}</span>
                        <span>₹${o.total}</span>
                    </div>
                    <p class="text-[10px] text-green-600 mt-1">${o.status}</p>
                </div>
            `).join('');
        }

        // --- ADMIN LOGIC ---
        function adminLoginL1() {
            const u = document.getElementById('admin-user').value;
            const p = document.getElementById('admin-pass').value;

            // Secure Credential Check
            if (u === '@Milati+swati.swad' && p === 'Milgy@671.swad') {
                navigateTo('page-admin-otp');
                // Simulate SMS to admin
                setTimeout(() => showNotification("Admin OTP sent to **122"), 1000);
            } else {
                showNotification("Access Denied");
            }
        }

        function adminLoginL2() {
            // In real app, check specific OTP. Here we accept any 6 digit for flow.
            const otp = document.getElementById('admin-otp-input').value;
            if (otp.length === 6) {
                document.getElementById('page-admin-otp').classList.add('hidden');
                document.getElementById('page-admin-panel').classList.remove('hidden');
                showNotification("Admin Panel Unlocked");
            } else {
                showNotification("Invalid Admin OTP");
            }
        }

        function logoutAdmin() {
            document.getElementById('page-admin-panel').classList.add('hidden');
            document.getElementById('admin-user').value = '';
            document.getElementById('admin-pass').value = '';
            document.getElementById('admin-otp-input').value = '';
            navigateTo('page-account');
        }

        // --- UTILS ---
        function showNotification(msg) {
            const el = document.getElementById('notification');
            document.getElementById('notif-msg').innerText = msg;
            el.classList.remove('-translate-y-32');
            setTimeout(() => {
                el.classList.add('-translate-y-32');
            }, 3000);
        }

        // Start
        window.onload = initApp;

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md h-full bg-white relative shadow-2xl overflow-hidden flex flex-col" id="app-container">

<div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center transition-opacity duration-700" id="splash-screen">
<div className="flex flex-col items-center gap-4">
<div className="h-16 w-16 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
<span className="iconify text-white text-3xl" data-icon="lucide:utensils-crossed" data-strokeWidth="1.5"></span>
</div>
<h1 className="text-2xl font-semibold tracking-tighter text-zinc-900">Aharer Swad</h1>
</div>
</div>

<div className="absolute top-4 left-4 right-4 z-40 bg-zinc-900 text-white px-4 py-3 rounded-xl shadow-xl transform -translate-y-32 transition-transform duration-300 flex items-center gap-3" id="notification">
<span className="iconify text-orange-400" data-icon="lucide:bell" data-strokeWidth="1.5" id="notif-icon"></span>
<p className="text-sm font-medium" id="notif-msg">Notification</p>
</div>

<header className="px-5 pt-12 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-zinc-100 hidden" id="main-header">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2" id="header-brand">
<div className="h-8 w-8 bg-orange-600 rounded-lg flex items-center justify-center">
<span className="iconify text-white text-sm" data-icon="lucide:utensils-crossed"></span>
</div>
<span className="text-lg font-semibold tracking-tight">Aharer Swad</span>
</div>

<button className="hidden h-10 w-10 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 active:scale-95 transition-transform" id="back-btn" onclick="goBack()">
<span className="iconify text-zinc-600" data-icon="lucide:arrow-left"></span>
</button>
<div className="flex items-center gap-3">
<button className="relative p-1">
<span className="iconify text-zinc-600 text-xl" data-icon="lucide:bell"></span>
<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-zinc-50/50 relative" id="main-content">

<div className="page-view px-5 py-4 space-y-6 fade-in" id="page-home">

<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-600 transition-colors">
<span className="iconify" data-icon="lucide:search"></span>
</span>
<input className="w-full bg-white border border-zinc-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-zinc-400" placeholder="Search biryani, spices..." type="text"/>
</div>

<div>
<h2 className="text-sm font-semibold tracking-tight mb-3 text-zinc-800">Categories</h2>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2" id="category-list">

</div>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm font-semibold tracking-tight text-zinc-800">Popular Now</h2>
<button className="text-xs text-orange-600 font-medium hover:text-orange-700">See all</button>
</div>
<div className="grid grid-cols-2 gap-4" id="product-list">

</div>
</div>
</div>

<div className="page-view hidden bg-white min-h-full pb-10 fade-in" id="page-product-details">
<div className="h-64 bg-zinc-100 w-full overflow-hidden relative group" id="pd-image-container">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" id="pd-image" src=""/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-2 py-1 text-xs font-semibold text-green-700 border border-green-100 shadow-sm" id="pd-stock-badge">In Stock</div>
</div>
<div className="px-5 py-6 space-y-6">
<div>
<div className="flex justify-between items-start">
<h1 className="text-xl font-semibold tracking-tight text-zinc-900 w-3/4" id="pd-name">Product Name</h1>
<div className="bg-orange-50 text-orange-700 px-2 py-1 rounded-lg text-xs font-bold" id="pd-discount">-0%</div>
</div>
<p className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">₹<span id="pd-price">0</span></p>
<p className="text-xs text-zinc-500 mt-1">Delivery Charge: ₹<span id="pd-delivery">0</span></p>
</div>

<div className="pt-4 border-t border-zinc-100">
<button className="w-full py-3.5 bg-zinc-900 text-white rounded-xl font-medium shadow-lg shadow-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2" id="btn-add-to-cart" onclick="addToCartCurrent()">
<span className="iconify" data-icon="lucide:shopping-bag"></span>
                            Add to Cart
                        </button>
</div>
<div className="space-y-2">
<h3 className="text-sm font-semibold text-zinc-900">Description</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Authentic taste of India delivered to your doorstep. Sourced from the best farms and kitchens.</p>
</div>
</div>
</div>

<div className="page-view hidden px-5 py-4 space-y-6 fade-in" id="page-cart">
<h2 className="text-lg font-semibold tracking-tight">Your Cart</h2>
<div className="space-y-4" id="cart-items">

<div className="flex flex-col items-center justify-center py-10 text-zinc-400">
<span className="iconify text-4xl mb-2" data-icon="lucide:shopping-cart"></span>
<p className="text-sm">Your cart is empty</p>
</div>
</div>

<div className="hidden bg-white border border-zinc-100 rounded-xl p-4 shadow-sm space-y-3" id="cart-summary">
<div className="flex justify-between text-sm text-zinc-600">
<span>Subtotal</span>
<span>₹<span id="cart-subtotal">0</span></span>
</div>
<div className="flex justify-between text-sm text-zinc-600">
<span>Delivery</span>
<span>₹<span id="cart-delivery">0</span></span>
</div>
<div className="border-t border-zinc-100 pt-3 flex justify-between text-base font-semibold text-zinc-900">
<span>Total</span>
<span>₹<span id="cart-total">0</span></span>
</div>
<button className="w-full mt-2 py-3 bg-orange-600 text-white rounded-xl font-medium shadow-lg shadow-orange-200 active:scale-[0.98] transition-transform" onclick="navigateTo('page-payment')">
                        Order Now
                    </button>
</div>
</div>

<div className="page-view hidden px-5 py-4 space-y-6 fade-in" id="page-payment">
<h2 className="text-lg font-semibold tracking-tight">Payment</h2>
<div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex flex-col items-center space-y-4">
<p className="text-sm font-medium text-zinc-500">Scan to Pay</p>
<div className="h-48 w-48 bg-zinc-100 rounded-xl flex items-center justify-center overflow-hidden border-2 border-dashed border-zinc-300" id="payment-qr-container">

<img className="w-full h-full object-cover p-2" id="payment-qr" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=upi://pay?pa=aharerswad@upi&amp;pn=AharerSwad"/>
</div>
<p className="text-xs text-zinc-400 text-center">UPI ID: aharerswad@upi</p>
</div>

<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-zinc-100 cursor-pointer" onclick="toggleCOD()">
<div className="flex items-center gap-3">
<span className="iconify text-green-600" data-icon="lucide:banknote"></span>
<span className="text-sm font-medium">Cash on Delivery</span>
</div>
<div className="w-5 h-5 rounded border border-zinc-300 flex items-center justify-center" id="cod-toggle">
<span className="iconify text-white hidden text-xs" data-icon="lucide:check"></span>
</div>
</div>
<div className="space-y-3">
<label className="block text-sm font-medium text-zinc-700">Upload Payment Proof</label>
<div className="relative border border-zinc-200 rounded-xl bg-white p-3 flex items-center gap-3">
<span className="iconify text-zinc-400" data-icon="lucide:image"></span>
<span className="text-sm text-zinc-400 truncate" id="file-name">No file selected</span>
<input className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" id="proof-upload" onchange="handleFileUpload(this)" type="file"/>
</div>
<p className="text-[10px] text-zinc-400">Must include Order ID &amp; Date watermark.</p>
</div>
<button className="w-full py-3.5 bg-zinc-900 text-white rounded-xl font-medium active:scale-[0.98] transition-transform" onclick="confirmOrder()">
                    Confirm Order
                </button>
</div>

<div className="page-view hidden h-full flex flex-col items-center justify-center px-6 text-center space-y-6 fade-in bg-white" id="page-confirmation">
<div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-2">
<span className="iconify text-green-600 text-4xl" data-icon="lucide:check"></span>
</div>
<div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">Order Confirmed!</h2>
<p className="text-sm text-zinc-500 mt-2">Order ID: <span className="font-mono text-zinc-800" id="conf-order-id">#---</span></p>
</div>
<div className="bg-zinc-50 p-4 rounded-xl w-full border border-zinc-100">
<p className="text-xs text-zinc-500">We've sent a confirmation notification. You can track your order in the My Orders section.</p>
</div>
<button className="w-full py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium" onclick="navigateTo('page-home'); setNavActive('nav-home')">Back to Home</button>
</div>

<div className="page-view hidden px-5 py-4 space-y-6 fade-in" id="page-account">

<div className="space-y-6" id="auth-section">
<h2 className="text-xl font-semibold tracking-tight">Login</h2>
<div className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500">Phone Number</label>
<div className="flex gap-2">
<span className="flex items-center justify-center px-3 bg-zinc-100 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-600">+91</span>
<input className="flex-1 bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors" id="user-phone" placeholder="00000 00000" type="tel"/>
</div>
</div>
<button className="w-full py-3 bg-zinc-900 text-white rounded-xl font-medium text-sm" onclick="sendUserOTP()">Send OTP</button>
</div>

<div className="hidden space-y-4 pt-4 border-t border-zinc-100" id="otp-container">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500">Enter OTP</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm tracking-widest text-center focus:border-orange-500 focus:outline-none" id="user-otp" placeholder="• • • •" type="text"/>
</div>
<button className="w-full py-3 bg-orange-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-orange-100" onclick="verifyUserOTP()">Verify &amp; Login</button>
<p className="text-xs text-center text-zinc-400">Resend in <span id="timer">30</span>s</p>
</div>
</div>

<div className="hidden space-y-6" id="profile-section">
<div className="flex items-center gap-4">
<div className="h-16 w-16 bg-zinc-100 rounded-full flex items-center justify-center text-xl font-semibold text-zinc-400 border border-zinc-200">
<span className="iconify" data-icon="lucide:user"></span>
</div>
<div>
<h2 className="text-lg font-semibold tracking-tight">Welcome User</h2>
<p className="text-xs text-zinc-500">+91 <span id="display-phone"></span></p>
</div>
</div>
<div className="space-y-2">
<button className="w-full flex items-center justify-between p-4 bg-white border border-zinc-100 rounded-xl active:bg-zinc-50" onclick="toggleSection('my-orders')">
<span className="text-sm font-medium">My Orders</span>
<span className="iconify text-zinc-400" data-icon="lucide:chevron-right"></span>
</button>
<div className="hidden pl-4 pr-2 py-2 space-y-3 border-l-2 border-zinc-100 ml-4" id="my-orders">

<p className="text-xs text-zinc-400">No recent orders.</p>
</div>
<button className="w-full flex items-center justify-between p-4 bg-white border border-zinc-100 rounded-xl active:bg-zinc-50">
<span className="text-sm font-medium">Saved Addresses</span>
<span className="iconify text-zinc-400" data-icon="lucide:chevron-right"></span>
</button>
</div>
<div className="pt-6 border-t border-zinc-100">
<button className="text-xs font-medium text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-2" onclick="navigateTo('page-admin-login')">
<span className="iconify" data-icon="lucide:lock"></span> Admin Access
                        </button>
</div>
</div>
</div>

<div className="page-view hidden px-6 py-10 space-y-6 fade-in h-full bg-white z-50 absolute inset-0" id="page-admin-login">
<div className="flex items-center gap-2 mb-6">
<button className="p-2 -ml-2" onclick="navigateTo('page-account')"><span className="iconify" data-icon="lucide:arrow-left"></span></button>
<h2 className="text-xl font-bold tracking-tight">Admin Portal</h2>
</div>
<div className="space-y-4">
<div>
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Username</label>
<input className="w-full mt-1 border-b border-zinc-200 py-2 focus:border-zinc-900 focus:outline-none text-sm transition-colors" id="admin-user" placeholder="Enter username" type="text"/>
</div>
<div>
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Password</label>
<input className="w-full mt-1 border-b border-zinc-200 py-2 focus:border-zinc-900 focus:outline-none text-sm transition-colors" id="admin-pass" placeholder="Enter password" type="password"/>
</div>
<button className="w-full py-3 bg-zinc-900 text-white rounded-xl font-medium text-sm mt-4" onclick="adminLoginL1()">Authenticate</button>
</div>
</div>

<div className="page-view hidden px-6 py-10 space-y-6 fade-in h-full bg-white z-50 absolute inset-0" id="page-admin-otp">
<div className="text-center">
<h2 className="text-xl font-bold tracking-tight">Security Check</h2>
<p className="text-xs text-zinc-500 mt-2">OTP sent to admin mobile ending in **122</p>
</div>
<input className="w-full text-center text-2xl tracking-[0.5em] font-mono border-b-2 border-zinc-200 py-3 focus:border-orange-600 focus:outline-none" id="admin-otp-input" maxlength="6" type="text"/>
<button className="w-full py-3 bg-orange-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-orange-100" onclick="adminLoginL2()">Verify Access</button>
</div>

<div className="page-view hidden h-full bg-zinc-50 flex flex-col absolute inset-0 z-50" id="page-admin-panel">

<div className="bg-zinc-900 text-white px-5 py-4 flex justify-between items-center shadow-lg">
<div>
<h2 className="font-bold tracking-tight">Admin Dashboard</h2>
<p className="text-[10px] text-zinc-400">Session Active</p>
</div>
<button className="text-xs bg-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-700" onclick="logoutAdmin()">Logout</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100">
<p className="text-xs text-zinc-400">Total Orders</p>
<p className="text-xl font-bold text-zinc-900" id="adm-total-orders">0</p>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100">
<p className="text-xs text-zinc-400">Revenue</p>
<p className="text-xl font-bold text-green-600">₹<span id="adm-revenue">0</span></p>
</div>
</div>

<div className="space-y-4">
<div className="bg-white rounded-xl overflow-hidden border border-zinc-100 shadow-sm">
<div className="px-4 py-3 bg-zinc-50 border-b border-zinc-100 font-medium text-sm">Quick Actions</div>
<div className="divide-y divide-zinc-100">
<button className="w-full text-left px-4 py-3 text-sm flex justify-between items-center hover:bg-zinc-50" onclick="alert('Feature: Change Home Banner')">
<span>Manage Home Banner</span>
<span className="iconify text-zinc-400" data-icon="lucide:image"></span>
</button>
<button className="w-full text-left px-4 py-3 text-sm flex justify-between items-center hover:bg-zinc-50" onclick="alert('Feature: Update QR Code')">
<span>Update Payment QR</span>
<span className="iconify text-zinc-400" data-icon="lucide:qr-code"></span>
</button>
<button className="w-full text-left px-4 py-3 text-sm flex justify-between items-center hover:bg-zinc-50" onclick="alert('Feature: Manage Products')">
<span>Product Inventory</span>
<span className="iconify text-zinc-400" data-icon="lucide:package"></span>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-100 shadow-sm p-4">
<h3 className="text-sm font-semibold mb-3">Recent Orders</h3>
<div className="space-y-3" id="admin-order-list">
<p className="text-xs text-zinc-400 italic">No orders yet.</p>
</div>
</div>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-white border-t border-zinc-100 pb-safe z-40 hidden" id="bottom-nav">
<div className="grid grid-cols-3 h-16">
<button className="flex flex-col items-center justify-center gap-1 text-orange-600 transition-colors" id="nav-home" onclick="navigateTo('page-home'); setNavActive('nav-home')">
<span className="iconify text-xl" data-icon="lucide:home"></span>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors relative" id="nav-cart" onclick="navigateTo('page-cart'); setNavActive('nav-cart')">
<span className="iconify text-xl" data-icon="lucide:shopping-bag"></span>
<span className="text-[10px] font-medium">Cart</span>
<span className="absolute top-3 right-8 h-2 w-2 bg-red-500 rounded-full hidden" id="nav-cart-count"></span>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors" id="nav-account" onclick="navigateTo('page-account'); setNavActive('nav-account')">
<span className="iconify text-xl" data-icon="lucide:user"></span>
<span className="text-[10px] font-medium">Account</span>
</button>
</div>
</nav>
</div>



    </>
  );
}
