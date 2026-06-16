import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let cart = [];

        function toggleCart() {
            const sidebar = document.getElementById('cart-sidebar');
            const overlay = document.getElementById('cart-overlay');
            sidebar.classList.toggle('cart-open');
            overlay.classList.toggle('cart-overlay-open');
        }

        function addToCart(name, price, image) {
            cart.push({ name, price, image });
            updateCartUI();
            
            // Show cart briefly
            const sidebar = document.getElementById('cart-sidebar');
            if (!sidebar.classList.contains('cart-open')) {
                toggleCart();
            }
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        function updateCartUI() {
            const cartItems = document.getElementById('cart-items');
            const cartEmpty = document.getElementById('cart-empty');
            const cartCount = document.getElementById('cart-count');
            const cartBadge = document.getElementById('cart-badge-container');
            const cartTotal = document.getElementById('cart-total');

            // Update Badge
            cartCount.innerText = cart.length;
            if (cart.length > 0) {
                cartBadge.classList.remove('opacity-0');
            } else {
                cartBadge.classList.add('opacity-0');
            }

            // Update List
            if (cart.length === 0) {
                cartItems.innerHTML = '';
                cartItems.appendChild(cartEmpty);
                cartEmpty.style.display = 'flex';
                cartTotal.innerText = '$0.00';
            } else {
                cartEmpty.style.display = 'none';
                cartItems.innerHTML = '';
                let total = 0;

                cart.forEach((item, index) => {
                    total += item.price;
                    const itemEl = document.createElement('div');
                    itemEl.className = 'flex gap-4 items-center bg-stone-50/50 p-3 rounded-xl border border-stone-100';
                    itemEl.innerHTML = `
                        <img src="${item.image}" class="h-14 w-14 rounded-lg object-cover" alt="${item.name}">
                        <div class="flex-1 min-w-0">
                            <h5 class="text-sm font-medium text-stone-900 truncate">${item.name}</h5>
                            <p class="text-xs text-stone-500">$${item.price.toFixed(2)}</p>
                        </div>
                        <button onclick="removeFromCart(${index})" class="text-stone-400 hover:text-red-500 transition-colors p-1">
                            <iconify-icon icon="solar:trash-bin-linear" width="18"></iconify-icon>
                        </button>
                    `;
                    cartItems.appendChild(itemEl);
                });

                cartTotal.innerText = '$' + total.toFixed(2);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter text-stone-900" href="#">FLOUR&amp;WATER.</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#locations">Locations</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative text-stone-500 hover:text-stone-900 transition-colors group" onclick="toggleCart()">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 opacity-0 transition-opacity duration-300" id="cart-badge-container">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500 text-[8px] text-white font-bold items-center justify-center" id="cart-count">0</span>
</span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="cart-overlay" onclick="toggleCart()"></div>

<div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl transform translate-x-full flex flex-col border-l border-stone-200" id="cart-sidebar">
<div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
<h2 className="text-lg font-medium text-stone-900">Your Cart</h2>
<button className="text-stone-400 hover:text-stone-900 transition-colors" onclick="toggleCart()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-4" id="cart-items">

<div className="h-full flex flex-col items-center justify-center text-center opacity-100" id="cart-empty">
<div className="h-16 w-16 bg-stone-50 rounded-full flex items-center justify-center mb-4 text-stone-300">
<iconify-icon icon="solar:bag-3-linear" width="32"></iconify-icon>
</div>
<p className="text-stone-500 font-medium">Your cart is empty</p>
<p className="text-stone-400 text-sm mt-1">Add some fresh bakes to get started.</p>
</div>
</div>
<div className="p-6 border-t border-stone-100 bg-stone-50/30">
<div className="flex items-center justify-between mb-4">
<span className="text-stone-500">Subtotal</span>
<span className="font-semibold text-stone-900" id="cart-total">$0.00</span>
</div>
<button className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium text-sm transition-colors shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2">
                Checkout
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-stone-600 tracking-wide uppercase">Open until 4 PM</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-stone-900 leading-[1.1] mb-6">
                    Essential mornings start with <span className="text-stone-400">slow fermentation.</span>
</h1>
<p className="text-lg text-stone-500 max-w-md leading-relaxed mb-8">
                    Handcrafted sourdough and pastries, baked fresh daily in minimal batches using organic, locally milled grains.
                </p>
<div className="flex items-center gap-4">
<button className="h-10 px-6 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10 flex items-center gap-2" onclick="document.getElementById('menu').scrollIntoView({behavior: 'smooth'})">
                        Order Pickup
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-lg bg-white border border-stone-200 text-stone-600 text-sm font-medium hover:bg-stone-50 transition-colors" onclick="document.getElementById('menu').scrollIntoView({behavior: 'smooth'})">
                        View Menu
                    </button>
</div>
</div>
<div className="relative lg:h-[600px] w-full">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-100 to-transparent rounded-2xl"></div>
<div className="grid grid-cols-2 gap-4 h-full">
<div className="space-y-4 pt-12">
<img alt="Bread" className="rounded-xl object-cover h-64 w-full shadow-sm hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Croissant" className="rounded-xl object-cover h-48 w-full shadow-sm hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4">
<img alt="Baker" className="rounded-xl object-cover h-48 w-full shadow-sm hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Dough" className="rounded-xl object-cover h-64 w-full shadow-sm hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl font-medium tracking-tight text-stone-900 mb-2">The Process</h2>
<p className="text-stone-500">Simple ingredients, complex flavors.</p>
</div>
<div className="flex items-center gap-2">
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-stone-300 appearance-none cursor-pointer transition-all duration-300 ease-out" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-stone-200 cursor-pointer" htmlFor="toggle"></label>
</div>
<span className="text-xs font-medium text-stone-500">Show nutritional info</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group p-8 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 mb-6">
<iconify-icon icon="solar:wheat-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Organic Heritage Grains</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        We source exclusively from local mills that stone-grind ancient grains, preserving the germ and nutrients.
                    </p>
</div>
<div className="group p-8 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
<iconify-icon icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">36-Hour Fermentation</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Our natural levain works its magic over three days, breaking down gluten and maximizing flavor depth.
                    </p>
</div>
<div className="group p-8 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 mb-6">
<iconify-icon icon="solar:hand-heart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Hand-Shaped Daily</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        No automation. Every loaf and pastry is shaped by the hands of bakers who care about the craft.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-y border-stone-200" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<div>
<h2 className="text-2xl font-medium tracking-tight text-stone-900 mb-2">Menu</h2>
<p className="text-stone-500 text-sm">Select items to add to your order.</p>
</div>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-8">
<div className="h-8 w-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
<iconify-icon icon="solar:wheat-linear" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">Artisan Breads</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Sourdough" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1585476644391-9311a3b86036?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('Sourdough Loaf', 8.00, 'https://images.unsplash.com/photo-1585476644391-9311a3b86036?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">Sourdough Loaf</h4>
<span className="text-sm font-semibold text-stone-900">$8.00</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">Classic country white sourdough with a crispy crust and chewy interior.</p>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Multigrain" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1598373182133-52452f7691f4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('Multigrain Bread', 7.50, 'https://images.unsplash.com/photo-1598373182133-52452f7691f4?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">Multigrain Bread</h4>
<span className="text-sm font-semibold text-stone-900">$7.50</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">Packed with sunflower seeds, flax, and oats for a nutty flavor.</p>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Baguette" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1627308594190-a051c5009b96?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('French Baguette', 4.00, 'https://images.unsplash.com/photo-1627308594190-a051c5009b96?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">French Baguette</h4>
<span className="text-sm font-semibold text-stone-900">$4.00</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">Traditional long loaf with a crisp crust, perfect for sandwiches.</p>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Burger Buns" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1627923769975-f094df9f899b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('Brioche Buns (4pk)', 6.00, 'https://images.unsplash.com/photo-1627923769975-f094df9f899b?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">Brioche Buns (4pk)</h4>
<span className="text-sm font-semibold text-stone-900">$6.00</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">Soft, buttery brioche buns, ideal for gourmet burgers.</p>
</div>
</div>
</div>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-8">
<div className="h-8 w-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center">
<iconify-icon icon="solar:croissant-linear" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">Pastries</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Butter Croissant" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('Butter Croissant', 4.50, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">Butter Croissant</h4>
<span className="text-sm font-semibold text-stone-900">$4.50</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">Layers of flaky, buttery goodness made with French butter.</p>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Pain au Chocolat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1626809837920-d3dc9686ce88?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('Pain au Chocolat', 5.00, 'https://images.unsplash.com/photo-1626809837920-d3dc9686ce88?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">Pain au Chocolat</h4>
<span className="text-sm font-semibold text-stone-900">$5.00</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">A classic croissant filled with two batons of dark chocolate.</p>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Danish" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('Cheese Danish', 5.50, 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">Cheese Danish</h4>
<span className="text-sm font-semibold text-stone-900">$5.50</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">Sweet cream cheese filling nestled in flaky pastry dough.</p>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Apple Turnover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1621236378699-8597fcf40008?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('Apple Turnover', 4.75, 'https://images.unsplash.com/photo-1621236378699-8597fcf40008?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">Apple Turnover</h4>
<span className="text-sm font-semibold text-stone-900">$4.75</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">Folded puff pastry filled with spiced apple compote.</p>
</div>
</div>
</div>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-8">
<div className="h-8 w-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center">
<iconify-icon icon="solar:cake-linear" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">Sweet Treats</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Cupcake" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('Red Velvet Cupcake', 3.75, 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">Red Velvet Cupcake</h4>
<span className="text-sm font-semibold text-stone-900">$3.75</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">Moist red velvet sponge topped with cream cheese frosting.</p>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Cookies" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1499636138143-bd649043ea52?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('Choco Chip Cookie', 2.50, 'https://images.unsplash.com/photo-1499636138143-bd649043ea52?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">Choco Chip Cookie</h4>
<span className="text-sm font-semibold text-stone-900">$2.50</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">Chewy center, crispy edges, loaded with chocolate chunks.</p>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Muffin" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('Blueberry Muffin', 4.00, 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">Blueberry Muffin</h4>
<span className="text-sm font-semibold text-stone-900">$4.00</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">Bursting with fresh blueberries and topped with crumble.</p>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col">
<div className="aspect-square w-full overflow-hidden bg-stone-100 relative">
<img alt="Donut" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-stone-900 shadow-md flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors" onclick="addToCart('Glazed Donut', 3.00, 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-stone-900">Glazed Donut</h4>
<span className="text-sm font-semibold text-stone-900">$3.00</span>
</div>
<p className="text-xs text-stone-500 line-clamp-2 mb-4">Classic raised yeast donut with a sweet vanilla glaze.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-stone-400 mb-6" icon="solar:shop-linear" width="32"></iconify-icon>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Visit our storefront</h2>
<p className="text-stone-500 mb-8">
                1242 Market Street, San Francisco<br/>
                Tue-Sun, 7am - 4pm
            </p>
<form className="flex max-w-sm mx-auto gap-2" onsubmit="event.preventDefault();">
<input className="flex-1 bg-white border border-stone-200 rounded-lg px-4 text-sm outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-200 transition-all placeholder:text-stone-400 text-stone-800" placeholder="Join the newsletter" type="email"/>
<button className="bg-stone-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div>
<h4 className="font-medium text-stone-900 mb-4">Shop</h4>
<ul className="space-y-2">
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Bread</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Pastry</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Coffee</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Pantry</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">About</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Careers</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Wholesale</h4>
<ul className="space-y-2">
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Partner with us</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Corporate Orders</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Social</h4>
<ul className="space-y-2">
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Instagram</a></li>
<li><a className="text-xs text-stone-500 hover:text-stone-900" href="#">Twitter</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-stone-100 pt-8">
<p className="text-xs text-stone-400">© 2024 Flour &amp; Water Bakery. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-xs text-stone-400 hover:text-stone-600" href="#">Privacy</a>
<a className="text-xs text-stone-400 hover:text-stone-600" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
