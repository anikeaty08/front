import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Data
        const products = [
            { id: 1, name: 'Neon Runner X', price: 145.00, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600', category: 'Footwear' },
            { id: 2, name: 'Cyberpunk Hoodie', price: 89.00, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600', category: 'Apparel' },
            { id: 3, name: 'Tech Pack V2', price: 120.00, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600', category: 'Accessories' },
            { id: 4, name: 'Urban Glide', price: 110.00, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=600', category: 'Footwear' },
            { id: 5, name: 'Minimal Watch', price: 250.00, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600', category: 'Accessories' },
            { id: 6, name: 'Street Layer', price: 65.00, image: 'https://images.unsplash.com/photo-1551488852-7a30d80e7cf3?auto=format&fit=crop&q=80&w=600', category: 'Apparel' },
            { id: 7, name: 'Obsidian Cap', price: 35.00, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600', category: 'Accessories' },
            { id: 8, name: 'Future Walk', price: 160.00, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=600', category: 'Footwear' },
        ];

        let cart = [];

        // Initialization
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts();
            updateCartUI();
        });

        // Navigation
        function navigate(page) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            const home = document.getElementById('home-section');
            const shop = document.getElementById('shop-section');
            const checkout = document.getElementById('checkout-section');
            
            // Hide all first
            home.classList.add('hidden', 'opacity-0');
            shop.classList.add('hidden', 'opacity-0');
            checkout.classList.add('hidden', 'opacity-0');
            home.classList.remove('opacity-100');
            shop.classList.remove('opacity-100');
            checkout.classList.remove('opacity-100');

            // Show selected
            setTimeout(() => {
                if(page === 'home') {
                    home.classList.remove('hidden');
                    setTimeout(() => home.classList.add('opacity-100'), 50);
                } else if(page === 'shop') {
                    shop.classList.remove('hidden');
                    setTimeout(() => shop.classList.add('opacity-100'), 50);
                } else if(page === 'checkout') {
                    checkout.classList.remove('hidden');
                    renderCheckout();
                    setTimeout(() => checkout.classList.add('opacity-100'), 50);
                }
            }, 300);
        }

        // Render Products
        function renderProducts() {
            const grid = document.getElementById('product-grid');
            grid.innerHTML = products.map(product => `
                <div class="group relative bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                    <div class="aspect-square bg-neutral-900 overflow-hidden relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                        <button onclick="addToCart(${product.id})" class="absolute bottom-4 right-4 h-10 w-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg translate-y-14 group-hover:translate-y-0 transition-transform duration-300 hover:scale-110">
                            <iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
                        </button>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <p class="text-xs text-neutral-400 mb-1">${product.category}</p>
                                <h3 class="text-sm font-medium text-white">${product.name}</h3>
                            </div>
                            <p class="text-sm font-semibold text-white">$${product.price}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Cart Logic
        function toggleCart() {
            const overlay = document.getElementById('cart-overlay');
            const panel = document.getElementById('cart-panel');
            
            if (panel.classList.contains('translate-x-full')) {
                overlay.style.display = 'block';
                // Trigger reflow
                overlay.offsetHeight;
                overlay.classList.remove('opacity-0');
                panel.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                overlay.classList.add('opacity-0');
                panel.classList.add('translate-x-full');
                setTimeout(() => { overlay.style.display = 'none'; }, 300);
                document.body.style.overflow = '';
            }
        }

        function addToCart(id) {
            const product = products.find(p => p.id === id);
            const existing = cart.find(item => item.id === id);
            
            if (existing) {
                existing.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartUI();
            showToast(`Added ${product.name} to cart`);
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
            if (document.getElementById('checkout-section').classList.contains('opacity-100')) {
                renderCheckout();
            }
        }

        function updateQuantity(id, change) {
            const item = cart.find(item => item.id === id);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) removeFromCart(id);
                else updateCartUI();
            }
            if (document.getElementById('checkout-section').classList.contains('opacity-100')) {
                renderCheckout();
            }
        }

        function updateCartUI() {
            const container = document.getElementById('cart-items-container');
            const badge = document.getElementById('cart-badge');
            const totalDisplay = document.getElementById('cart-total-display');
            
            const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
            const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

            // Update Badge
            badge.innerText = totalCount;
            badge.style.opacity = totalCount > 0 ? '1' : '0';

            // Update Total
            totalDisplay.innerText = `$${totalPrice.toFixed(2)}`;

            // Render Items
            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-center space-y-4">
                        <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-neutral-500">
                            <iconify-icon icon="solar:cart-large-minimalistic-linear" width="32"></iconify-icon>
                        </div>
                        <p class="text-neutral-400">Your cart is empty.</p>
                        <button onclick="toggleCart(); navigate('shop')" class="text-sm text-indigo-400 hover:text-indigo-300">Start Shopping</button>
                    </div>`;
            } else {
                container.innerHTML = cart.map(item => `
                    <div class="flex gap-4">
                        <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-white/5 border border-white/5">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="${item.name}" class="h-full w-full object-cover">
                        </div>
                        <div class="flex flex-1 flex-col justify-between py-1">
                            <div>
                                <div class="flex justify-between text-sm font-medium text-white">
                                    <h3>${item.name}</h3>
                                    <p class="ml-4">$${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <p class="mt-1 text-xs text-neutral-400">${item.category}</p>
                            </div>
                            <div class="flex items-center justify-between text-sm">
                                <div class="flex items-center gap-3 border border-white/10 rounded-lg px-2 py-1">
                                    <button onclick="updateQuantity(${item.id}, -1)" class="text-neutral-400 hover:text-white">-</button>
                                    <span class="text-white text-xs w-4 text-center">${item.quantity}</span>
                                    <button onclick="updateQuantity(${item.id}, 1)" class="text-neutral-400 hover:text-white">+</button>
                                </div>
                                <button type="button" onclick="removeFromCart(${item.id})" class="font-medium text-indigo-400 hover:text-indigo-300 text-xs">Remove</button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }

        // Checkout Render
        function renderCheckout() {
            const container = document.getElementById('checkout-items');
            const subtotalEl = document.getElementById('checkout-subtotal');
            const totalEl = document.getElementById('checkout-total');
            const payAmount = document.getElementById('pay-amount');

            const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

            subtotalEl.innerText = `$${totalPrice.toFixed(2)}`;
            totalEl.innerText = `$${totalPrice.toFixed(2)}`;
            payAmount.innerText = `$${totalPrice.toFixed(2)}`;

            if (cart.length === 0) {
                container.innerHTML = '<p class="text-sm text-neutral-500">No items in cart.</p>';
            } else {
                container.innerHTML = cart.map(item => `
                    <div class="flex items-center gap-4">
                        <div class="relative h-12 w-12 rounded bg-neutral-800">
                             <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" class="h-full w-full object-cover rounded">
                             <span class="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-neutral-500 text-black text-[10px] font-bold flex items-center justify-center border border-black">${item.quantity}</span>
                        </div>
                        <div class="flex-1">
                            <p class="text-sm text-white">${item.name}</p>
                            <p class="text-xs text-neutral-500">${item.category}</p>
                        </div>
                        <p class="text-sm text-white">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                `).join('');
            }
        }

        function processCheckout() {
            if (cart.length === 0) {
                showToast("Cart is empty");
                return;
            }
            const btn = document.querySelector('#checkout-section button[onclick="processCheckout()"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<div class="loader border-neutral-900 border-l-white"></div>';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                showToast("Order placed successfully!");
                cart = [];
                updateCartUI();
                navigate('home');
            }, 2000);
        }

        // UI Helpers
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = message;
            toast.classList.remove('translate-y-20', 'opacity-0');
            
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        // 3D Tilt Effect
        document.addEventListener('mousemove', (e) => {
            const card = document.getElementById('hero-card');
            if(!card) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Only apply if mouse is somewhat near center of screen for performance
            if (window.innerWidth > 768) {
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                const rotateX = ((e.clientY - centerY) / centerY) * -10;
                const rotateY = ((e.clientX - centerX) / centerX) * 10;

                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 cursor-pointer" onclick="navigate('home')">
<span className="text-xl tracking-tighter font-semibold text-white">FASHUNING</span>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<button className="hover:text-white transition-colors text-sm font-medium" onclick="navigate('home')">Home</button>
<button className="hover:text-white transition-colors text-sm font-medium" onclick="navigate('shop')">Collections</button>
<button className="hover:text-white transition-colors text-sm font-medium" onclick="navigate('shop')">New Arrivals</button>
<button className="hover:text-white transition-colors text-sm font-medium" href="#">Affiliates</button>
</div>
</div>

<div className="flex items-center gap-4">
<button className="p-2 text-neutral-400 hover:text-white transition-colors relative group">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 text-neutral-400 hover:text-white transition-colors relative" onclick="toggleCart()">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1 right-0 bg-white text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center opacity-0 transition-opacity" id="cart-badge">0</span>
</button>
<button className="md:hidden p-2 text-neutral-400 hover:text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden glass border-b border-white/5" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
<button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5" onclick="navigate('home'); toggleMobileMenu()">Home</button>
<button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5" onclick="navigate('shop'); toggleMobileMenu()">Shop</button>
</div>
</div>
</nav>

<main className="pt-16 min-h-screen relative" id="main-content">

<section className="fade-in-section opacity-100 transition-opacity duration-500" id="home-section">
<div className="relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24 flex flex-col lg:flex-row items-center">

<div className="w-full lg:w-1/2 z-10 text-center lg:text-left mb-12 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium tracking-wide text-neutral-300 uppercase">Fall Collection 2024</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                            Redefine <br/>
<span className="text-neutral-500">Your Reality.</span>
</h1>
<p className="text-lg text-neutral-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Experience the fusion of digital art and street fashion. Fashuning brings you curated aesthetics for the modern affiliate marketer.
                        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="group relative px-6 py-3 rounded-full bg-white text-black font-medium text-sm transition-transform active:scale-95 overflow-hidden" onclick="navigate('shop')">
<div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center gap-2">
                                    Shop Now
                                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
<button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium text-sm transition-colors active:scale-95">
                                View Lookbook
                            </button>
</div>
</div>

<div className="w-full lg:w-1/2 flex justify-center items-center relative perspective-1000 z-0">

<div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="relative w-72 h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center transform preserve-3d animate-float cursor-pointer hover:shadow-indigo-500/20 transition-shadow" id="hero-card">
<div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-[2px] rounded-2xl z-0"></div>

<img alt="Shoe" className="absolute w-64 drop-shadow-2xl z-20 transform translate-z-10 -rotate-12 hover:rotate-0 transition-all duration-500 rounded-lg" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-6 left-6 z-10">
<p className="text-xs text-indigo-400 font-mono mb-1">LIMITED EDITION</p>
<p className="text-xl font-semibold text-white tracking-tight">Nike Air Retro</p>
<p className="text-sm text-neutral-400 mt-1">$129.00</p>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">Global Shipping</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Direct to your door, anywhere in the world with tracked premium logistics.</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">Secure Checkout</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Powered by Stripe-style security protocols ensuring your data is safe.</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">Affiliate Program</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Join our partner network and earn commissions on high-converting products.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 hidden opacity-0 transition-opacity duration-500" id="shop-section">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Latest Drops</h2>
<p className="text-neutral-400 text-sm">Exclusive gear for the digital nomad.</p>
</div>

<div className="flex items-center gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
<button className="px-4 py-2 rounded-lg text-xs font-medium bg-white text-black">All</button>
<button className="px-4 py-2 rounded-lg text-xs font-medium bg-white/5 text-neutral-400 hover:text-white border border-white/5 hover:bg-white/10 transition-all">Footwear</button>
<button className="px-4 py-2 rounded-lg text-xs font-medium bg-white/5 text-neutral-400 hover:text-white border border-white/5 hover:bg-white/10 transition-all">Apparel</button>
<button className="px-4 py-2 rounded-lg text-xs font-medium bg-white/5 text-neutral-400 hover:text-white border border-white/5 hover:bg-white/10 transition-all">Accessories</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="product-grid">

</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 hidden opacity-0 transition-opacity duration-500" id="checkout-section">
<div className="max-w-3xl mx-auto">
<button className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white mb-8 transition-colors" onclick="navigate('shop')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                    Back to shopping
                </button>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-8">Checkout</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 space-y-6">

<div className="p-6 rounded-2xl border border-white/10 bg-white/5">
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:user-linear"></iconify-icon>
                                Contact Information
                            </h3>
<div className="space-y-4">
<div className="custom-input relative rounded-lg border border-white/10 bg-black/20 transition-colors">
<input className="block w-full px-4 py-3 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none" id="email" placeholder="Email address" type="email"/>
</div>
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-indigo-500 focus:ring-offset-neutral-900 focus:ring-indigo-500" id="newsletter" type="checkbox"/>
<label className="text-xs text-neutral-400" htmlFor="newsletter">Email me with news and offers</label>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-white/5">
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:map-point-linear"></iconify-icon>
                                Shipping Address
                            </h3>
<div className="grid grid-cols-2 gap-4">
<div className="custom-input col-span-1 rounded-lg border border-white/10 bg-black/20">
<input className="w-full px-4 py-3 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none" placeholder="First name" type="text"/>
</div>
<div className="custom-input col-span-1 rounded-lg border border-white/10 bg-black/20">
<input className="w-full px-4 py-3 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none" placeholder="Last name" type="text"/>
</div>
<div className="custom-input col-span-2 rounded-lg border border-white/10 bg-black/20">
<input className="w-full px-4 py-3 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none" placeholder="Address" type="text"/>
</div>
<div className="custom-input col-span-1 rounded-lg border border-white/10 bg-black/20">
<input className="w-full px-4 py-3 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none" placeholder="City" type="text"/>
</div>
<div className="custom-input col-span-1 rounded-lg border border-white/10 bg-black/20">
<input className="w-full px-4 py-3 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none" placeholder="Postal Code" type="text"/>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-white/5">
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:card-linear"></iconify-icon>
                                Payment
                            </h3>
<div className="p-4 rounded-lg border border-indigo-500/30 bg-indigo-500/5 text-indigo-200 text-xs mb-4">
                                This is a demo. No payment will be processed.
                            </div>
<div className="custom-input rounded-lg border border-white/10 bg-black/20">
<input className="w-full px-4 py-3 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none" placeholder="Card number" type="text"/>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" onclick="processCheckout()">
<span>Pay Now</span>
<span id="pay-amount"></span>
</button>
</div>

<div className="md:col-span-1">
<div className="sticky top-24">
<h3 className="text-sm font-medium text-neutral-400 mb-4">Order Summary</h3>
<div className="space-y-4 mb-6" id="checkout-items">

</div>
<div className="pt-4 border-t border-white/10 space-y-2">
<div className="flex justify-between text-sm text-neutral-400">
<span>Subtotal</span>
<span id="checkout-subtotal">$0.00</span>
</div>
<div className="flex justify-between text-sm text-neutral-400">
<span>Shipping</span>
<span>Free</span>
</div>
<div className="flex justify-between text-base font-medium text-white pt-2">
<span>Total</span>
<span id="checkout-total">$0.00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black py-12 mt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
<span className="text-lg tracking-tight font-semibold text-white">FASHUNING</span>
<p className="text-neutral-500 text-xs mt-1">© 2024 Fashuning Inc. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] pointer-events-none" id="cart-sidebar">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300 pointer-events-auto" id="cart-overlay" onclick="toggleCart()" style={{display: 'none'}}></div>

<div className="absolute right-0 top-0 h-full w-full max-w-md bg-neutral-900 border-l border-white/10 shadow-2xl transform translate-x-full transition-transform duration-300 pointer-events-auto flex flex-col" id="cart-panel">

<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
<h2 className="text-lg font-medium text-white">Your Cart</h2>
<button className="text-neutral-400 hover:text-white" onclick="toggleCart()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6" id="cart-items-container">

<div className="flex flex-col items-center justify-center h-full text-center space-y-4">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-neutral-500">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="32"></iconify-icon>
</div>
<p className="text-neutral-400">Your cart is empty.</p>
<button className="text-sm text-indigo-400 hover:text-indigo-300" onclick="toggleCart(); navigate('shop')">Start Shopping</button>
</div>
</div>

<div className="p-6 border-t border-white/5 bg-neutral-900 z-10">
<div className="flex justify-between items-center mb-4">
<span className="text-neutral-400 text-sm">Subtotal</span>
<span className="text-white font-medium text-lg" id="cart-total-display">$0.00</span>
</div>
<button className="w-full py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors" onclick="toggleCart(); navigate('checkout')">
                    Checkout
                </button>
</div>
</div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] bg-white text-black px-4 py-2 rounded-full shadow-xl flex items-center gap-2 translate-y-20 opacity-0 transition-all duration-300" id="toast">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium" id="toast-message">Item added to cart</span>
</div>



    </>
  );
}
