import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let cart = [];

        // Initialize cart on page load
        document.addEventListener('DOMContentLoaded', () => {
            updateCartUI();
        });

        function toggleLogin() {
            const modal = document.getElementById('login-modal');
            modal.classList.toggle('hidden');
        }

        function toggleCart() {
            const modal = document.getElementById('cart-modal');
            modal.classList.toggle('hidden');
        }

        function scrollToMenu(e) {
            e.preventDefault();
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Custom Toast Helper
        function showToast(msg, icon) {
            const toast = document.getElementById('toast');
            toast.innerHTML = `
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <iconify-icon icon="${icon}" width="16" height="16"></iconify-icon>
                </div>
                <p class="text-sm font-medium tracking-wide">${msg}</p>
            `;
            toast.classList.remove('translate-y-10', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-10', 'opacity-0');
            }, 2500);
        }

        // Handle Login Simulation
        function handleLogin(e) {
            e.preventDefault();
            toggleLogin();
            
            const loginBtn = document.getElementById('login-btn');
            if(loginBtn) {
                loginBtn.innerHTML = `
                    <div class="w-6 h-6 rounded-full bg-stone-700 flex items-center justify-center text-white text-[0.65rem] font-semibold mr-2 border border-stone-600 shadow-sm">JD</div>
                    John D.
                `;
                loginBtn.classList.replace('px-4', 'pr-3');
                loginBtn.classList.add('pl-1.5');
                loginBtn.onclick = null; // Remove the popup toggle
            }
            
            showToast('Logged in successfully!', 'solar:user-check-bold');
        }

        // Dynamic Cart logic
        function addToCart(btn) {
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            const price = parseInt(btn.getAttribute('data-price'));
            const image = btn.getAttribute('data-image');

            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                cart.push({ id, name, price, image, qty: 1 });
            }

            updateCartUI();

            // Button visual feedback
            const originalContent = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Added to Cart`;
            btn.classList.replace('text-stone-700', 'text-emerald-800');
            btn.classList.replace('bg-stone-50', 'bg-emerald-50');
            btn.classList.replace('border-stone-200', 'border-emerald-200');
            
            showToast('Added to cart successfully!', 'solar:check-circle-bold');
            
            setTimeout(() => {
                // Revert button
                btn.innerHTML = originalContent;
                btn.classList.replace('text-emerald-800', 'text-stone-700');
                btn.classList.replace('bg-emerald-50', 'bg-stone-50');
                btn.classList.replace('border-emerald-200', 'border-stone-200');
            }, 2000);
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
        }

        function updateCartUI() {
            const container = document.getElementById('cart-items-container');
            const subtotalEl = document.getElementById('cart-subtotal');
            const badge = document.getElementById('cart-badge');

            container.innerHTML = '';
            let subtotal = 0;
            let totalItems = 0;

            if (cart.length === 0) {
                container.innerHTML = '<div class="flex h-full items-center justify-center text-sm text-stone-500 pb-10">Your cart is empty</div>';
                badge.classList.add('hidden');
                badge.innerText = '0';
            } else {
                cart.forEach(item => {
                    subtotal += item.price * item.qty;
                    totalItems += item.qty;

                    container.innerHTML += `
                        <div class="flex py-4 mb-4 border-b border-stone-50">
                            <div class="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-stone-100 bg-stone-50">
                                <img src="${item.image}" alt="${item.name}" class="h-full w-full object-cover object-center">
                            </div>
                            <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div class="flex justify-between text-sm font-medium text-stone-900">
                                        <h3 class="tracking-tight">${item.name}</h3>
                                        <p class="ml-4">₹${item.price * item.qty}</p>
                                    </div>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                    <p class="text-stone-500">Qty ${item.qty}</p>
                                    <button type="button" onclick="removeFromCart('${item.id}')" class="font-medium text-red-600 hover:text-red-500 transition-colors">Remove</button>
                                </div>
                            </div>
                        </div>
                    `;
                });
                
                badge.innerText = totalItems;
                badge.classList.remove('hidden');
                
                // Add slight pop animation to badge
                badge.classList.add('scale-125');
                setTimeout(() => badge.classList.remove('scale-125'), 200);
            }

            subtotalEl.innerText = `₹${subtotal}`;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<a className="flex flex-col" href="#">
<span className="text-xl font-semibold tracking-tighter text-stone-900 leading-none">CAFE RESTO</span>
<span className="text-xs text-stone-500 font-medium tracking-wide">కేఫ్ రెస్టో</span>
</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<button className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-100 group" onclick="toggleCart()">
<iconify-icon height="24" icon="solar:cart-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-1 right-1 hidden h-4 w-4 items-center justify-center rounded-full bg-emerald-700 text-[0.65rem] text-white font-medium ring-2 ring-white transition-all duration-300" id="cart-badge">0</span>
</button>
<button className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-all shadow-sm" id="login-btn" onclick="toggleLogin()">
                        Log in
                    </button>
</div>
</div>
</div>
</header>

<section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden min-h-[90vh] flex items-center">

<div className="absolute inset-0 z-0">
<img alt="Restaurant Background" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-900/20 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
<iconify-icon className="text-amber-400" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-wide">4.1 Rating (205 Reviews)</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-4 drop-shadow-sm">
                Taste the Tradition at <br className="hidden md:block"/>
<span className="text-emerald-400">Cafe Resto</span>
</h1>
<p className="mt-4 text-lg md:text-xl text-stone-200 max-w-2xl font-medium tracking-wide drop-shadow-sm">
                Delicious Food. Cozy Ambience. Memorable Moments. Experience authentic Andhra cuisine right in the heart of Hyderabad.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-all shadow-sm ring-1 ring-emerald-700/50" href="#menu" onclick="scrollToMenu(event)">
                    Order Now
                </a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all shadow-sm" href="#about">
                    View Menu
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-6">A Culinary Journey of Flavor</h2>
<p className="text-base text-stone-600 mb-6 leading-relaxed">
                        Cafe Resto is a popular Andhra-style restaurant offering a variety of delicious dishes, including authentic biryanis, flavorful Chinese items, and fresh seafood. Known for its cozy ambience and friendly service, it's a great place for families and friends to gather and create lasting memories.
                    </p>
<p className="text-base text-stone-600 mb-10 leading-relaxed">
                        Whether you are looking for a quick bite or a relaxed dining experience, our curated menu and warm hospitality ensure every visit is special.
                    </p>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="flex flex-col items-start p-4 rounded-xl bg-stone-50 border border-stone-100">
<div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 mb-3">
<iconify-icon height="24" icon="solar:shop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-stone-900 mb-1">Dine-in</h3>
<p className="text-xs text-stone-500">Cozy &amp; relaxed seating</p>
</div>
<div className="flex flex-col items-start p-4 rounded-xl bg-stone-50 border border-stone-100">
<div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-3">
<iconify-icon height="24" icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-stone-900 mb-1">Takeaway</h3>
<p className="text-xs text-stone-500">Quick &amp; convenient</p>
</div>
<div className="flex flex-col items-start p-4 rounded-xl bg-stone-50 border border-stone-100">
<div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-3">
<iconify-icon height="24" icon="solar:routing-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-stone-900 mb-1">Delivery</h3>
<p className="text-xs text-stone-500">Hot food to your door</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100">
<img alt="Restaurant Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 w-48 h-48 bg-stone-50 rounded-2xl p-2 shadow-sm border border-stone-100 hidden sm:block">
<img alt="Biryani" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-3">Our Signature Menu</h2>
<p className="text-base text-stone-500 max-w-2xl">Handpicked delicacies crafted to perfection. Price range: ₹200–₹400 per person.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-sm font-medium rounded-full bg-emerald-700 text-white shadow-sm">All</button>
<button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-stone-600 border border-stone-200 hover:bg-stone-50 transition-colors">Veg</button>
<button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-stone-600 border border-stone-200 hover:bg-stone-50 transition-colors">Non-Veg</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
<div className="relative h-48 bg-stone-100 overflow-hidden">
<img alt="Chicken Majestic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 bg-white rounded-sm shadow-sm">
<div className="w-3 h-3 rounded-full bg-red-600"></div>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Chicken Majestic</h3>
<span className="text-base font-semibold text-emerald-700">₹280</span>
</div>
<p className="text-sm text-stone-500 mb-6 flex-grow">Spicy, tangy, and crispy dry chicken starter tossed with regional spices and yogurt.</p>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-700 bg-stone-50 border border-stone-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-colors" data-id="1" data-image="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&amp;w=200&amp;auto=format&amp;fit=crop" data-name="Chicken Majestic" data-price="280" onclick="addToCart(this)">
<iconify-icon height="18" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
<div className="relative h-48 bg-stone-100 overflow-hidden">
<img alt="Veg Biryani" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 bg-white rounded-sm shadow-sm border border-green-600">
<div className="w-3 h-3 rounded-full bg-green-600"></div>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Veg Biryani</h3>
<span className="text-base font-semibold text-emerald-700">₹220</span>
</div>
<p className="text-sm text-stone-500 mb-6 flex-grow">Aromatic basmati rice cooked with mixed vegetables, herbs, and special biryani masala.</p>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-700 bg-stone-50 border border-stone-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-colors" data-id="2" data-image="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&amp;w=200&amp;auto=format&amp;fit=crop" data-name="Veg Biryani" data-price="220" onclick="addToCart(this)">
<iconify-icon height="18" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
<div className="relative h-48 bg-stone-100 overflow-hidden">
<img alt="Chicken Noodles" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 bg-white rounded-sm shadow-sm border border-red-600">
<div className="w-3 h-3 rounded-full bg-red-600"></div>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Chicken Noodles</h3>
<span className="text-base font-semibold text-emerald-700">₹240</span>
</div>
<p className="text-sm text-stone-500 mb-6 flex-grow">Stir-fried noodles with tender chicken chunks, fresh veggies, and savory sauces.</p>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-700 bg-stone-50 border border-stone-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-colors" data-id="3" data-image="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&amp;w=200&amp;auto=format&amp;fit=crop" data-name="Chicken Noodles" data-price="240" onclick="addToCart(this)">
<iconify-icon height="18" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
<div className="relative h-48 bg-stone-100 overflow-hidden">
<img alt="Full Roast Fish" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 bg-white rounded-sm shadow-sm border border-red-600">
<div className="w-3 h-3 rounded-full bg-red-600"></div>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Full Roast Fish</h3>
<span className="text-base font-semibold text-emerald-700">₹350</span>
</div>
<p className="text-sm text-stone-500 mb-6 flex-grow">Whole fish marinated in authentic Andhra spices and perfectly pan-roasted.</p>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-700 bg-stone-50 border border-stone-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-colors" data-id="4" data-image="https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&amp;w=200&amp;auto=format&amp;fit=crop" data-name="Full Roast Fish" data-price="350" onclick="addToCart(this)">
<iconify-icon height="18" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
<div className="relative h-48 bg-stone-100 overflow-hidden">
<img alt="BBQ Paneer Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 bg-white rounded-sm shadow-sm border border-green-600">
<div className="w-3 h-3 rounded-full bg-green-600"></div>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">BBQ Paneer Pizza</h3>
<span className="text-base font-semibold text-emerald-700">₹290</span>
</div>
<p className="text-sm text-stone-500 mb-6 flex-grow">Fusion delight! Thin crust topped with BBQ marinated paneer cubes, onions, and cheese.</p>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-700 bg-stone-50 border border-stone-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-colors" data-id="5" data-image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=200&amp;auto=format&amp;fit=crop" data-name="BBQ Paneer Pizza" data-price="290" onclick="addToCart(this)">
<iconify-icon height="18" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-4">Loved by our Customers</h2>
<div className="flex items-center gap-3">
<div className="flex text-amber-400">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium text-stone-900">4.1</span>
<span className="text-sm text-stone-500">(205 reviews on Google)</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 flex flex-col">
<div className="flex text-amber-400 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-stone-700 mb-6 flex-grow italic">"Nice place to eat with a lot of varieties and delicious food. The Biryani was perfectly spiced."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-semibold">RK</div>
<span className="text-xs font-medium text-stone-900">Rahul K.</span>
</div>
</div>

<div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 flex flex-col">
<div className="flex text-amber-400 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-stone-700 mb-6 flex-grow italic">"Pleasant location with nice dining experience. The staff is very courteous and quick."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-semibold">SA</div>
<span className="text-xs font-medium text-stone-900">Sita A.</span>
</div>
</div>

<div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 flex flex-col">
<div className="flex text-amber-400 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-stone-700 mb-6 flex-grow italic">"Fabulous food and very nice ambience. Chicken Majestic is a must-try here!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-xs font-semibold">MD</div>
<span className="text-xs font-medium text-stone-900">Mohammed D.</span>
</div>
</div>

<div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 flex flex-col">
<div className="flex text-amber-400 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-stone-700 mb-6 flex-grow italic">"Food was okay, but the delivery took much longer than expected on a weekend night."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 text-xs font-semibold">VN</div>
<span className="text-xs font-medium text-stone-900">Vijay N.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-10 text-center">A Glimpse of Cafe Resto</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden bg-stone-200">
<img alt="Restaurant Seating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden bg-stone-200 aspect-square">
<img alt="Indian Dish" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden bg-stone-200 aspect-square">
<img alt="Restaurant Vibes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden bg-stone-200 aspect-square">
<img alt="Appetizers" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden bg-stone-200 aspect-square">
<img alt="Open Seating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-4">Get in Touch</h2>
<p className="text-sm text-stone-500 mb-8">Have a question or want to make a bulk order? Drop us a message.</p>
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-colors" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-colors" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-colors resize-none" id="message" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-all shadow-sm" type="button">
                            Send Message
                        </button>
</form>
</div>

<div className="flex flex-col h-full">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-emerald-700" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-1">Visit Us</h4>
<p className="text-sm text-stone-600 leading-relaxed">Plot No. 222, Venkatramnagar,<br/>Suraram, Hyderabad,<br/>Telangana 500055</p>
</div>
</div>
<div className="flex flex-col gap-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-emerald-700" height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-1">Call Us</h4>
<p className="text-sm text-stone-600">097018 95118</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-emerald-700" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-1">Timings</h4>
<p className="text-sm text-stone-600">6:00 AM to 12:00 AM<br/>Open Every Day</p>
</div>
</div>
</div>
</div>

<div className="flex-grow w-full min-h-[250px] bg-stone-100 rounded-2xl border border-stone-200 overflow-hidden relative group">
<img alt="Map View" className="w-full h-full object-cover opacity-50 grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="flex flex-col items-center">
<iconify-icon className="text-red-500 drop-shadow-md" height="32" icon="solar:map-point-bold" width="32"></iconify-icon>
<span className="mt-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold shadow-sm text-stone-800">Cafe Resto</span>
</div>
</div>
<button className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/5 backdrop-blur-[1px] transition-all flex items-center justify-center">
<span className="px-4 py-2 bg-white text-stone-900 text-sm font-medium rounded-lg shadow-sm border border-stone-200">Open in Google Maps</span>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-xl font-semibold tracking-tighter text-white leading-none">CAFE RESTO</span>
<span className="text-xs text-stone-400 font-medium tracking-wide">కేఫ్ రెస్టో</span>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-sm hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm hover:text-white transition-colors" href="#menu">Menu</a>
<a className="text-sm hover:text-white transition-colors" href="#contact">Contact</a>
<a className="text-sm hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition-colors text-white" href="#">
<iconify-icon height="18" icon="solar:global-linear" width="18"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition-colors text-white" href="#">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-500">
                    © 2023 Cafe Resto. All rights reserved.
                </p>
<a className="text-xs text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-1" href="#">
<iconify-icon height="14" icon="solar:lock-password-linear" width="14"></iconify-icon>
                    Admin Dashboard
                </a>
</div>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="relative z-[100] hidden" id="login-modal" role="dialog">
<div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity" onclick="toggleLogin()"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-sm border border-stone-200">
<div className="px-6 py-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Log in to your account</h3>
<button className="text-stone-400 hover:text-stone-600 transition-colors" onclick="toggleLogin()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">Email</label>
<input className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-colors" placeholder="name@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">Password</label>
<input className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-colors" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full mt-2 flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-all shadow-sm" type="submit">
                                Sign In
                            </button>
</form>
<p className="mt-6 text-center text-xs text-stone-500">
                            Don't have an account? <a className="font-medium text-emerald-700 hover:text-emerald-600" href="#">Sign up</a>
</p>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="slide-over-title" aria-modal="true" className="relative z-[100] hidden" id="cart-modal" role="dialog">
<div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity" onclick="toggleCart()"></div>
<div className="fixed inset-0 overflow-hidden">
<div className="absolute inset-0 overflow-hidden">
<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
<div className="pointer-events-auto w-screen max-w-md transform transition-all flex h-full flex-col bg-white shadow-2xl border-l border-stone-200">
<div className="flex items-center justify-between px-6 py-6 border-b border-stone-100">
<h2 className="text-lg font-semibold text-stone-900 tracking-tight" id="slide-over-title">Your Order</h2>
<button className="text-stone-400 hover:text-stone-600 transition-colors" onclick="toggleCart()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto px-6 py-6" id="cart-items-container">

</div>
<div className="border-t border-stone-100 px-6 py-6 bg-stone-50/50">
<div className="flex justify-between text-base font-semibold text-stone-900 tracking-tight">
<p>Subtotal</p>
<p id="cart-subtotal">₹0</p>
</div>
<p className="mt-1 text-xs text-stone-500">Taxes and delivery calculated at checkout.</p>
<div className="mt-6">
<button className="w-full flex items-center justify-center rounded-lg border border-transparent bg-emerald-700 px-6 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-800 transition-colors" onclick="toggleCart();">Proceed to Checkout</button>
</div>
<div className="mt-4 flex justify-center text-center text-sm text-stone-500">
<p>
                                    or
                                    <button className="font-medium text-emerald-700 hover:text-emerald-600" onclick="toggleCart()" type="button">
                                        Continue browsing
                                        <span aria-hidden="true"> →</span>
</button>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-[100] transform transition-all duration-300 translate-y-10 opacity-0 pointer-events-none flex items-center gap-3 px-4 py-3 bg-stone-900 text-white rounded-xl shadow-lg border border-stone-800" id="toast">

</div>



    </>
  );
}
