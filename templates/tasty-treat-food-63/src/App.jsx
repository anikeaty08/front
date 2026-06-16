import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
},
colors: {
brand: {
50: '#fff7ed',
100: '#ffedd5',
200: '#fed7aa',
300: '#fdba74',
400: '#fb923c', // Primary Orange
500: '#f97316',
600: '#ea580c',
900: '#7c2d12',
},
dark: '#1c1917',
surface: '#fafaf9',
}
}
}
}



        // --- DATA ---
        const categories = [
            { id: 'burger', name: 'Burger', icon: '🍔' },
            { id: 'pizza', name: 'Pizza', icon: '🍕' },
            { id: 'noodles', name: 'Noodles', icon: '🍜' },
            { id: 'healthy', name: 'Healthy', icon: '🥗' },
            { id: 'dessert', name: 'Donut', icon: '🍩' },
            { id: 'drink', name: 'Drink', icon: '🥤' }
        ];

        const products = [
            { id: 1, name: 'Double Cheeseburger', price: 12.99, rating: 4.8, time: '20 min', cals: '650', cat: 'burger', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60', desc: 'Two juicy beef patties with melted cheddar, lettuce, tomato, and house sauce.' },
            { id: 2, name: 'Pepperoni Pizza', price: 15.50, rating: 4.7, time: '30 min', cals: '800', cat: 'pizza', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=60', desc: 'Classic pepperoni with mozzarella and tomato sauce on a thin crust.' },
            { id: 3, name: 'Spicy Ramen', price: 14.00, rating: 4.9, time: '25 min', cals: '450', cat: 'noodles', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=60', desc: 'Rich pork broth with chili oil, chashu pork, egg, and spring onions.' },
            { id: 4, name: 'Avocado Salad', price: 11.20, rating: 4.6, time: '15 min', cals: '250', cat: 'healthy', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60', desc: 'Fresh greens, avocado, cherry tomatoes, and lemon vinaigrette.' },
            { id: 5, name: 'Salmon Sushi', price: 18.00, rating: 4.8, time: '35 min', cals: '320', cat: 'asian', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=60', desc: 'Fresh salmon nigiri and sashimi platter.' },
            { id: 6, name: 'Chocolate Donut', price: 4.50, rating: 4.5, time: '10 min', cals: '300', cat: 'dessert', img: 'https://images.unsplash.com/photo-1551024601-562963525607?auto=format&fit=crop&w=500&q=60', desc: 'Glazed donut topped with rich dark chocolate.' }
        ];

        let cart = []; // { id, qty }
        let currentDetailId = null;
        let detailQty = 1;

        // --- CORE FUNCTIONS ---

        function init() {
            renderHomeCategories();
            renderHomeTrending();
            renderMenu('all');
        }

        // Navigation Router
        function router(screenId) {
            // Hide all screens
            document.querySelectorAll('.screen').forEach(el => {
                el.classList.remove('active');
                // Optional: reset scroll
                if(el.id !== 'screen-details') el.scrollTop = 0; 
            });

            // Show target
            const target = document.getElementById(`screen-${screenId}`);
            if (target) {
                target.classList.add('active');
            }

            // Handle Bottom Nav Visibility
            const nav = document.getElementById('bottom-nav');
            const noNavScreens = ['onboarding', 'login', 'details', 'checkout', 'tracking'];
            if (noNavScreens.includes(screenId)) {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
                updateNavActiveState(screenId);
            }

            // Specific refresh logic
            if (screenId === 'cart') renderCart();
        }

        function updateNavActiveState(screenId) {
            document.querySelectorAll('.nav-btn').forEach(btn => {
                const icon = btn.querySelector('.iconify');
                if (btn.dataset.target === screenId) {
                    btn.classList.add('text-brand-500');
                    btn.classList.remove('text-stone-400');
                } else {
                    btn.classList.remove('text-brand-500');
                    btn.classList.add('text-stone-400');
                }
            });
        }

        function goBack() {
            // Simple history logic simulation
            const active = document.querySelector('.screen.active').id;
            if(active === 'screen-details') router('menu'); // or home
            else if(active === 'screen-cart') router('menu');
            else if(active === 'screen-checkout') router('cart');
            else if(active === 'screen-login') router('onboarding');
            else router('home');
        }

        function simulateLogin() {
            const btn = document.getElementById('login-btn');
            const originalText = btn.innerText;
            btn.innerHTML = '<div class="loader"></div>';
            setTimeout(() => {
                btn.innerText = originalText;
                router('home');
            }, 1500);
        }

        // --- RENDERERS ---

        function renderHomeCategories() {
            const container = document.getElementById('home-categories');
            container.innerHTML = categories.map(c => `
                <div onclick="filterCategory('${c.id}')" class="flex flex-col items-center gap-2 cursor-pointer min-w-[70px]">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-stone-100 card-hover">${c.icon}</div>
                    <span class="text-xs font-medium text-stone-600">${c.name}</span>
                </div>
            `).join('');
        }

        function renderHomeTrending() {
            const container = document.getElementById('home-trending');
            container.innerHTML = products.slice(0, 4).map(p => createProductCard(p)).join('');
        }

        function renderMenu(category) {
            const container = document.getElementById('menu-grid');
            const filtered = category === 'all' ? products : products.filter(p => p.cat === category);
            container.innerHTML = filtered.map(p => createProductCardHorizontal(p)).join('');
        }

        function createProductCard(p) {
            return `
                <div onclick="openProduct(${p.id})" class="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 card-hover cursor-pointer">
                    <div class="h-32 w-full rounded-xl bg-stone-100 overflow-hidden mb-3 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover">
                        <div class="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-lg text-xs font-bold shadow-sm">$${p.price}</div>
                    </div>
                    <h4 class="font-medium text-sm text-stone-800 truncate mb-1">${p.name}</h4>
                    <div class="flex items-center gap-1 text-xs text-stone-400">
                        <span class="iconify text-yellow-400" data-icon="lucide:star" data-width="12"></span> ${p.rating} • ${p.time}
                    </div>
                </div>
            `;
        }

        function createProductCardHorizontal(p) {
            return `
                 <div onclick="openProduct(${p.id})" class="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 flex gap-4 card-hover cursor-pointer">
                    <div class="w-24 h-24 rounded-xl bg-stone-100 overflow-hidden shrink-0">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                        <h4 class="font-medium text-stone-800 mb-1">${p.name}</h4>
                        <p class="text-xs text-stone-400 mb-2 truncate">${p.desc}</p>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold text-brand-500">$${p.price}</span>
                            <button class="w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center btn-press">
                                <span class="iconify" data-icon="lucide:plus" data-width="14"></span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // --- PRODUCT DETAILS ---

        function openProduct(id) {
            const p = products.find(x => x.id === id);
            currentDetailId = id;
            detailQty = 1;

            document.getElementById('detail-img').src = p.img;
            document.getElementById('detail-title').innerText = p.name;
            document.getElementById('detail-price').innerText = `$${p.price}`;
            document.getElementById('detail-rating').innerText = p.rating;
            document.getElementById('detail-time').innerText = p.time;
            document.getElementById('detail-cals').innerText = p.cals + ' kcal';
            document.getElementById('detail-desc').innerText = p.desc;
            document.getElementById('detail-qty').innerText = 1;

            router('details');
        }

        function adjustDetailQty(delta) {
            detailQty += delta;
            if (detailQty < 1) detailQty = 1;
            document.getElementById('detail-qty').innerText = detailQty;
        }

        function addToCartFromDetail() {
            addToCart(currentDetailId, detailQty);
            router('menu'); // or go back to where they were
        }

        // --- CART LOGIC ---

        function addToCart(id, qty) {
            const existing = cart.find(x => x.id === id);
            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({ id, qty });
            }
            updateCartCount();
        }

        function updateCartCount() {
            const count = cart.reduce((acc, item) => acc + item.qty, 0);
            const badge = document.getElementById('nav-cart-count');
            badge.innerText = count;
            badge.classList.toggle('hidden', count === 0);
        }

        function renderCart() {
            const container = document.getElementById('cart-items-container');
            const emptyMsg = document.getElementById('empty-cart-msg');
            const bill = document.getElementById('cart-bill');

            if (cart.length === 0) {
                container.innerHTML = '';
                emptyMsg.classList.remove('hidden');
                bill.classList.add('hidden');
                return;
            }

            emptyMsg.classList.add('hidden');
            bill.classList.remove('hidden');

            let subtotal = 0;

            container.innerHTML = cart.map(item => {
                const p = products.find(x => x.id === item.id);
                subtotal += p.price * item.qty;
                return `
                    <div class="flex items-center gap-4 bg-white p-3 rounded-2xl border border-stone-100">
                        <div class="w-16 h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-1">
                            <h4 class="font-medium text-sm text-stone-800">${p.name}</h4>
                            <p class="text-xs text-brand-500 font-medium mt-1">$${(p.price * item.qty).toFixed(2)}</p>
                        </div>
                        <div class="flex items-center gap-3 bg-stone-50 rounded-lg px-2 py-1">
                            <button onclick="updateCartItem(${item.id}, -1)" class="text-stone-400 text-lg">-</button>
                            <span class="text-sm font-medium w-4 text-center">${item.qty}</span>
                            <button onclick="updateCartItem(${item.id}, 1)" class="text-stone-800 text-lg">+</button>
                        </div>
                    </div>
                `;
            }).join('');

            const delivery = 2.00;
            const total = subtotal + delivery;

            document.getElementById('bill-subtotal').innerText = `$${subtotal.toFixed(2)}`;
            document.getElementById('bill-delivery').innerText = `$${delivery.toFixed(2)}`;
            document.getElementById('bill-total').innerText = `$${total.toFixed(2)}`;
            document.getElementById('btn-total-price').innerText = `$${total.toFixed(2)}`;
        }

        function updateCartItem(id, change) {
            const item = cart.find(x => x.id === id);
            if (item) {
                item.qty += change;
                if (item.qty <= 0) {
                    cart = cart.filter(x => x.id !== id);
                }
                updateCartCount();
                renderCart();
            }
        }

        function processPayment() {
            const btn = document.querySelector('#screen-checkout button');
            const oldText = btn.innerText;
            btn.innerHTML = '<div class="loader"></div>';
            
            setTimeout(() => {
                btn.innerText = oldText;
                cart = []; // clear cart
                updateCartCount();
                router('tracking');
            }, 2000);
        }

        // --- FILTER ---
        
        function filterCategory(cat) {
            // Update tabs
            document.querySelectorAll('.filter-tab').forEach(t => {
                if(t.dataset.cat === cat) {
                    t.classList.add('bg-brand-500', 'text-white');
                    t.classList.remove('bg-white', 'text-stone-500');
                } else {
                    t.classList.remove('bg-brand-500', 'text-white');
                    t.classList.add('bg-white', 'text-stone-500');
                }
            });
            
            // Switch screen if not already
            if(!document.getElementById('screen-menu').classList.contains('active')) {
                router('menu');
            }
            
            renderMenu(cat);
        }
        
        // Add event listeners for menu tabs
        document.querySelectorAll('.filter-tab').forEach(btn => {
            btn.addEventListener('click', (e) => filterCategory(e.target.dataset.cat));
        });

        // Init
        init();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full h-full max-w-md bg-surface shadow-2xl overflow-hidden sm:rounded-3xl sm:h-[95vh] sm:border-[8px] sm:border-stone-900 flex flex-col" id="app-container">

<div className="screen active flex-col h-full w-full bg-brand-50 relative z-50" id="screen-onboarding">
<div className="flex-1 flex flex-col justify-end p-8 pb-12">
<div className="w-full h-64 absolute top-20 left-0 flex justify-center items-center opacity-20">
<span className="iconify text-[200px] text-brand-300" data-icon="lucide:utensils-crossed"></span>
</div>
<div className="relative z-10">
<span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-brand-600 tracking-wide mb-4 inline-block shadow-sm">TASTY TREAT</span>
<h1 className="text-4xl font-medium tracking-tight text-stone-900 leading-[1.1] mb-4">
                        Order your<br/>favorite food <br/><span className="text-brand-500">instantly.</span>
</h1>
<p className="text-stone-500 text-sm mb-8 leading-relaxed font-normal">
                        Fresh meals delivered to your doorstep. Experience the taste of quality with our premium delivery service.
                    </p>
<button className="w-full bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-2xl font-medium text-sm tracking-wide shadow-lg shadow-brand-200 btn-press transition-all flex items-center justify-center gap-2" onclick="router('login')">
                        Get Started <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</div>

<div className="screen flex-col h-full w-full bg-white p-6 pt-12 z-40" id="screen-login">
<button className="absolute top-6 left-6 p-2 rounded-full bg-stone-50 text-stone-600 btn-press" onclick="router('onboarding')">
<span className="iconify" data-icon="lucide:chevron-left"></span>
</button>
<div className="mt-8">
<h2 className="text-2xl font-medium tracking-tight mb-2">Login Account</h2>
<p className="text-stone-400 text-sm mb-8">Enter your mobile number to continue.</p>
<div className="space-y-4">
<div className="bg-stone-50 rounded-xl px-4 py-3 border border-stone-100 focus-within:border-brand-300 transition-colors flex items-center gap-3">
<span className="iconify text-stone-400" data-icon="lucide:smartphone"></span>
<input className="bg-transparent w-full outline-none text-stone-800 placeholder-stone-400 font-medium" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<button className="w-full bg-stone-900 text-white py-4 rounded-xl font-medium text-sm shadow-lg btn-press flex justify-center items-center" id="login-btn" onclick="simulateLogin()">
                        Send Code
                    </button>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="h-[1px] bg-stone-100 flex-1"></div>
<span className="text-xs text-stone-400 uppercase tracking-widest">Or</span>
<div className="h-[1px] bg-stone-100 flex-1"></div>
</div>
<div className="flex gap-4 mt-6 justify-center">
<button className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center btn-press"><span className="iconify text-xl" data-icon="logos:google-icon"></span></button>
<button className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center btn-press"><span className="iconify text-xl" data-icon="logos:apple"></span></button>
</div>
</div>
</div>

<div className="screen flex-col h-full w-full bg-surface pb-24 overflow-y-auto hide-scroll" id="screen-home">

<header className="p-6 pb-2 flex justify-between items-center sticky top-0 bg-surface/90 backdrop-blur-md z-20">
<div className="flex flex-col">
<span className="text-xs text-stone-400 font-medium">Deliver to</span>
<div className="flex items-center gap-1 text-brand-600 font-medium text-sm cursor-pointer">
                        Home, 124 West Ave <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden border-2 border-white shadow-sm cursor-pointer" onclick="router('profile')">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</header>

<div className="px-6 py-4">
<div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-sm border border-stone-100">
<span className="iconify text-stone-400" data-icon="lucide:search"></span>
<input className="bg-transparent w-full outline-none text-sm placeholder-stone-400" placeholder="What are you craving?" type="text"/>
<span className="iconify text-brand-500 border-l pl-2 border-stone-100 w-8" data-icon="lucide:mic"></span>
</div>
</div>

<div className="px-6 mb-6">
<div className="bg-brand-500 rounded-3xl p-5 text-white relative overflow-hidden shadow-lg shadow-brand-200">
<div className="absolute -right-4 -bottom-4 opacity-20 rotate-12">
<span className="iconify text-[120px]" data-icon="lucide:cloud-rain"></span>
</div>
<div className="relative z-10">
<span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase mb-2 inline-block">AI Recommendation</span>
<h3 className="text-lg font-medium tracking-tight mb-1">It's rainy outside 🌧️</h3>
<p className="text-brand-100 text-xs mb-3">Perfect weather for hot Ramen.</p>
<button className="bg-white text-brand-600 px-4 py-2 rounded-xl text-xs font-medium btn-press" onclick="filterCategory('noodles')">Order Ramen</button>
</div>
</div>
</div>

<div className="mb-6">
<div className="px-6 flex justify-between items-end mb-3">
<h3 className="text-base font-medium text-stone-800">Categories</h3>
<span className="text-xs text-brand-500 font-medium cursor-pointer" onclick="router('menu')">See all</span>
</div>
<div className="flex gap-4 overflow-x-auto px-6 hide-scroll pb-2" id="home-categories">

</div>
</div>

<div className="px-6 pb-4">
<h3 className="text-base font-medium text-stone-800 mb-4">Trending Now 🔥</h3>
<div className="grid grid-cols-2 gap-4" id="home-trending">

</div>
</div>
</div>

<div className="screen flex-col h-full w-full bg-surface pb-24 overflow-y-auto hide-scroll" id="screen-menu">
<header className="p-6 sticky top-0 bg-surface/95 backdrop-blur z-20">
<h2 className="text-xl font-medium tracking-tight">Full Menu</h2>

<div className="flex gap-2 mt-4 overflow-x-auto hide-scroll">
<button className="filter-tab active bg-brand-500 text-white px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors" data-cat="all">All</button>
<button className="filter-tab bg-white text-stone-500 border border-stone-100 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap" data-cat="burger">Burgers</button>
<button className="filter-tab bg-white text-stone-500 border border-stone-100 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap" data-cat="pizza">Pizza</button>
<button className="filter-tab bg-white text-stone-500 border border-stone-100 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap" data-cat="healthy">Healthy</button>
<button className="filter-tab bg-white text-stone-500 border border-stone-100 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap" data-cat="asian">Asian</button>
</div>
</header>
<div className="px-6 grid grid-cols-1 gap-4" id="menu-grid">

</div>
</div>

<div className="screen flex-col h-full w-full bg-white z-50 overflow-y-auto hide-scroll pb-24" id="screen-details">
<div className="relative h-80 w-full bg-stone-100">
<img className="w-full h-full object-cover" id="detail-img" src=""/>
<button className="absolute top-6 left-6 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm btn-press" onclick="goBack()">
<span className="iconify" data-icon="lucide:arrow-left"></span>
</button>
<button className="absolute top-6 right-6 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm btn-press text-red-500">
<span className="iconify" data-icon="lucide:heart"></span>
</button>
</div>
<div className="px-6 py-6 -mt-8 bg-white rounded-t-3xl relative z-10 min-h-[50vh]">
<div className="w-12 h-1 bg-stone-200 rounded-full mx-auto mb-6"></div>
<div className="flex justify-between items-start mb-2">
<h1 className="text-2xl font-medium tracking-tight text-stone-900 w-3/4" id="detail-title">Product Name</h1>
<span className="text-xl font-semibold text-brand-500" id="detail-price">$0.00</span>
</div>
<div className="flex items-center gap-4 mb-6 text-sm text-stone-500">
<div className="flex items-center gap-1"><span className="iconify text-yellow-400" data-icon="lucide:star" data-inline="false"></span> <span className="font-medium text-stone-800" id="detail-rating">4.5</span></div>
<div className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock"></span> <span id="detail-time">20 min</span></div>
<div className="flex items-center gap-1"><span className="iconify" data-icon="lucide:flame"></span> <span id="detail-cals">350 kcal</span></div>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-6" id="detail-desc">
                    Description goes here.
                </p>
<h3 className="font-medium text-stone-800 mb-3">Add-ons</h3>
<div className="space-y-3 mb-8">
<label className="flex items-center justify-between p-3 border border-stone-100 rounded-xl cursor-pointer hover:bg-stone-50">
<div className="flex items-center gap-3">
<input className="w-4 h-4 accent-brand-500 rounded" type="checkbox"/>
<span className="text-sm text-stone-600">Extra Cheese</span>
</div>
<span className="text-sm text-stone-400">+$1.50</span>
</label>
<label className="flex items-center justify-between p-3 border border-stone-100 rounded-xl cursor-pointer hover:bg-stone-50">
<div className="flex items-center gap-3">
<input className="w-4 h-4 accent-brand-500 rounded" type="checkbox"/>
<span className="text-sm text-stone-600">Spicy Sauce</span>
</div>
<span className="text-sm text-stone-400">+$0.50</span>
</label>
</div>

<div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-stone-100 flex items-center gap-4 max-w-md mx-auto sm:rounded-b-3xl">
<div className="flex items-center bg-stone-100 rounded-xl px-2">
<button className="p-3 text-stone-500 btn-press" onclick="adjustDetailQty(-1)"><span className="iconify" data-icon="lucide:minus" data-width="16"></span></button>
<span className="text-base font-medium w-6 text-center" id="detail-qty">1</span>
<button className="p-3 text-stone-800 btn-press" onclick="adjustDetailQty(1)"><span className="iconify" data-icon="lucide:plus" data-width="16"></span></button>
</div>
<button className="flex-1 bg-brand-500 text-white py-4 rounded-xl font-medium text-sm shadow-lg shadow-brand-200 btn-press" onclick="addToCartFromDetail()">
                        Add to Cart
                    </button>
</div>
</div>
</div>

<div className="screen flex-col h-full w-full bg-surface pb-24 overflow-y-auto hide-scroll z-30" id="screen-cart">
<header className="p-6 flex items-center gap-4 sticky top-0 bg-surface/90 backdrop-blur z-20">
<button className="p-2 -ml-2 rounded-full hover:bg-stone-200" onclick="goBack()"><span className="iconify" data-icon="lucide:arrow-left"></span></button>
<h2 className="text-xl font-medium tracking-tight">My Cart</h2>
</header>
<div className="px-6 space-y-4 mb-6" id="cart-items-container">

</div>
<div className="hidden flex flex-col items-center justify-center mt-20 px-6 text-center" id="empty-cart-msg">
<span className="iconify text-stone-200 text-6xl mb-4" data-icon="lucide:shopping-bag"></span>
<p className="text-stone-400">Your cart is empty.</p>
<button className="mt-4 text-brand-500 font-medium text-sm" onclick="router('menu')">Browse Menu</button>
</div>

<div className="px-6 mt-4" id="cart-bill">
<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
<div className="flex justify-between mb-2 text-sm text-stone-500">
<span>Subtotal</span>
<span id="bill-subtotal">$0.00</span>
</div>
<div className="flex justify-between mb-2 text-sm text-stone-500">
<span>Delivery Fee</span>
<span id="bill-delivery">$2.00</span>
</div>
<div className="border-t border-stone-100 my-3"></div>
<div className="flex justify-between text-base font-medium text-stone-800">
<span>Total</span>
<span id="bill-total">$0.00</span>
</div>
</div>
<button className="w-full mt-6 bg-stone-900 text-white py-4 rounded-xl font-medium text-sm shadow-lg btn-press flex justify-between px-6 items-center" onclick="router('checkout')">
<span>Checkout</span>
<span id="btn-total-price">$0.00</span>
</button>
</div>
</div>

<div className="screen flex-col h-full w-full bg-surface z-40 overflow-y-auto hide-scroll" id="screen-checkout">
<header className="p-6 flex items-center gap-4 sticky top-0 bg-surface/90 backdrop-blur z-20">
<button className="p-2 -ml-2 rounded-full hover:bg-stone-200" onclick="goBack()"><span className="iconify" data-icon="lucide:arrow-left"></span></button>
<h2 className="text-xl font-medium tracking-tight">Checkout</h2>
</header>
<div className="px-6 space-y-6 pb-24">

<div className="bg-white p-5 rounded-2xl border border-stone-100">
<div className="flex justify-between items-center mb-3">
<h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider">Deliver To</h3>
<span className="text-brand-500 text-xs font-medium cursor-pointer">Edit</span>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 shrink-0">
<span className="iconify" data-icon="lucide:map-pin"></span>
</div>
<div>
<p className="font-medium text-stone-800 text-sm">Home</p>
<p className="text-stone-400 text-xs leading-relaxed">124 West Ave, Apartment 4B<br/>New York, NY 10012</p>
</div>
</div>

<div className="mt-4 h-24 w-full bg-stone-100 rounded-xl overflow-hidden relative opacity-80">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#d6d3d1 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-brand-600">
<span className="iconify" data-icon="lucide:map-pin" data-width="24"></span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-stone-100">
<div className="flex justify-between items-center mb-3">
<h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider">Payment Method</h3>
</div>
<div className="flex items-center gap-3 mb-3 p-3 border border-brand-200 bg-brand-50 rounded-xl cursor-pointer">
<span className="iconify text-2xl" data-icon="logos:mastercard"></span>
<div className="flex-1">
<p className="text-sm font-medium text-stone-800">MasterCard</p>
<p className="text-xs text-stone-400">**** 4582</p>
</div>
<div className="w-5 h-5 rounded-full border-4 border-brand-500"></div>
</div>
<div className="flex items-center gap-3 p-3 border border-stone-100 rounded-xl cursor-pointer opacity-60">
<span className="iconify text-xl" data-icon="logos:apple-pay"></span>
<div className="flex-1">
<p className="text-sm font-medium text-stone-800">Apple Pay</p>
</div>
<div className="w-5 h-5 rounded-full border border-stone-300"></div>
</div>
</div>
<button className="w-full bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-xl font-medium text-sm shadow-lg shadow-brand-200 btn-press" onclick="processPayment()">
                    Pay &amp; Order
                </button>
</div>
</div>

<div className="screen flex-col h-full w-full bg-stone-100 z-50" id="screen-tracking">

<div className="absolute inset-0 z-0 bg-stone-200 flex items-center justify-center overflow-hidden">
<div className="w-full h-full opacity-30" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #d6d3d1 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #d6d3d1 20px)'}}></div>
<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-16 h-16 bg-brand-500/20 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-brand-500 rounded-full border-2 border-white relative z-10 shadow-lg"></div>
</div>
</div>

<div className="absolute top-6 left-6 right-6 bg-white p-4 rounded-2xl shadow-lg z-10 flex justify-between items-center">
<div className="p-2 bg-stone-100 rounded-full cursor-pointer" onclick="router('home')"><span className="iconify" data-icon="lucide:x"></span></div>
<div className="text-center">
<p className="text-xs text-stone-400">Estimated Delivery</p>
<p className="text-lg font-medium text-stone-800">15-20 Mins</p>
</div>
<div className="p-2 text-transparent">X</div>
</div>

<div className="absolute bottom-0 w-full bg-white rounded-t-3xl p-6 pb-8 z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
<div className="w-12 h-1 bg-stone-200 rounded-full mx-auto mb-6"></div>
<h3 className="text-lg font-medium tracking-tight mb-6 text-center">Your order is on the way!</h3>

<div className="flex items-start gap-4 mb-8">
<div className="flex flex-col items-center gap-1 mt-1">
<div className="w-2 h-2 bg-brand-500 rounded-full"></div>
<div className="w-0.5 h-8 bg-brand-500"></div>
<div className="w-2 h-2 bg-brand-500 rounded-full"></div>
<div className="w-0.5 h-8 bg-stone-200"></div>
<div className="w-2 h-2 bg-stone-300 rounded-full"></div>
</div>
<div className="flex flex-col gap-5 pt-0">
<div>
<p className="text-sm font-medium text-stone-800">Order Confirmed</p>
<p className="text-xs text-stone-400">Your order has been received.</p>
</div>
<div>
<p className="text-sm font-medium text-stone-800">Picked Up</p>
<p className="text-xs text-stone-400">Driver is heading to you.</p>
</div>
<div>
<p className="text-sm font-medium text-stone-400">Delivered</p>
</div>
</div>
</div>

<div className="flex items-center gap-4 border-t border-stone-100 pt-6">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex-1">
<p className="font-medium text-sm">Michael R.</p>
<p className="text-xs text-stone-400">ID: #8929 • 4.9 ★</p>
</div>
<button className="w-10 h-10 bg-brand-50 rounded-full text-brand-500 flex items-center justify-center btn-press"><span className="iconify" data-icon="lucide:phone"></span></button>
</div>
</div>
</div>

<div className="screen flex-col h-full w-full bg-surface pb-24 overflow-y-auto hide-scroll z-20" id="screen-profile">
<header className="p-6 pb-2">
<h2 className="text-2xl font-medium tracking-tight mb-6">Profile</h2>
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<h3 className="font-medium text-lg">Jane Doe</h3>
<p className="text-stone-400 text-sm">jane.doe@example.com</p>
</div>
<button className="ml-auto text-brand-500 font-medium text-sm">Edit</button>
</div>
</header>
<div className="px-6 space-y-2">
<div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm btn-press cursor-pointer">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center"><span className="iconify" data-icon="lucide:shopping-bag"></span></div>
<div className="flex-1 font-medium text-sm">Order History</div>
<span className="iconify text-stone-300" data-icon="lucide:chevron-right"></span>
</div>
<div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm btn-press cursor-pointer">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><span className="iconify" data-icon="lucide:credit-card"></span></div>
<div className="flex-1 font-medium text-sm">Payment Methods</div>
<span className="iconify text-stone-300" data-icon="lucide:chevron-right"></span>
</div>
<div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm btn-press cursor-pointer">
<div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center"><span className="iconify" data-icon="lucide:map-pin"></span></div>
<div className="flex-1 font-medium text-sm">Addresses</div>
<span className="iconify text-stone-300" data-icon="lucide:chevron-right"></span>
</div>
<div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm btn-press cursor-pointer">
<div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center"><span className="iconify" data-icon="lucide:gift"></span></div>
<div className="flex-1 font-medium text-sm">My Vouchers</div>
<span className="iconify text-stone-300" data-icon="lucide:chevron-right"></span>
</div>
</div>
<div className="px-6 mt-8">
<button className="w-full text-stone-400 font-medium text-sm py-4 bg-stone-100 rounded-xl" onclick="router('onboarding')">Log Out</button>
</div>
</div>

<div className="screen flex-col h-full w-full bg-surface pb-24 overflow-y-auto hide-scroll z-20" id="screen-offers">
<header className="p-6">
<h2 className="text-2xl font-medium tracking-tight mb-2">Special Offers</h2>
<p className="text-stone-400 text-sm">Coupons just for you.</p>
</header>
<div className="px-6 space-y-4">
<div className="bg-gradient-to-r from-orange-400 to-brand-600 rounded-2xl p-5 text-white shadow-lg shadow-orange-200 relative overflow-hidden">
<div className="absolute right-0 top-0 opacity-10 w-32 h-32 bg-white rounded-full -mr-10 -mt-10"></div>
<div className="relative z-10">
<div className="text-xs font-bold bg-white/20 inline-block px-2 py-1 rounded mb-2">PROMO50</div>
<h3 className="text-2xl font-bold mb-1">50% OFF</h3>
<p className="text-orange-100 text-xs mb-3">On your first 3 orders over $20</p>
<button className="bg-white text-brand-600 px-4 py-2 rounded-lg text-xs font-bold shadow-sm active:scale-95 transition-transform">Claim Now</button>
</div>
</div>
<div className="bg-white rounded-2xl p-4 flex gap-4 border border-stone-100 shadow-sm border-l-4 border-l-green-500">
<div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center text-green-600 shrink-0">
<span className="iconify" data-icon="lucide:truck"></span>
</div>
<div>
<h4 className="font-medium text-stone-800">Free Delivery</h4>
<p className="text-xs text-stone-400 mb-2">Valid on all weekend orders.</p>
<span className="text-[10px] text-stone-300 font-mono bg-stone-100 px-2 py-1 rounded">FREESHIP</span>
</div>
</div>
</div>
</div>

<nav className="absolute bottom-6 left-6 right-6 h-16 glass-nav rounded-2xl flex justify-between items-center px-6 shadow-xl shadow-stone-200/50 z-50 hidden" id="bottom-nav">
<button className="nav-btn active flex flex-col items-center gap-1 text-stone-400 transition-colors hover:text-brand-500 w-12" data-target="home" onclick="router('home')">
<span className="iconify text-2xl" data-icon="lucide:home"></span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-stone-400 transition-colors hover:text-brand-500 w-12" data-target="menu" onclick="router('menu')">
<span className="iconify text-2xl" data-icon="lucide:grid"></span>
</button>

<button className="relative -top-6 bg-brand-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-brand-200 btn-press border-4 border-surface" onclick="router('cart')">
<span className="iconify text-2xl" data-icon="lucide:shopping-bag"></span>
<span className="absolute top-0 right-0 bg-stone-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white transform translate-x-1 -translate-y-1 hidden" id="nav-cart-count">0</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-stone-400 transition-colors hover:text-brand-500 w-12" data-target="offers" onclick="router('offers')">
<span className="iconify text-2xl" data-icon="lucide:ticket"></span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-stone-400 transition-colors hover:text-brand-500 w-12" data-target="profile" onclick="router('profile')">
<span className="iconify text-2xl" data-icon="lucide:user"></span>
</button>
</nav>
</div>



    </>
  );
}
