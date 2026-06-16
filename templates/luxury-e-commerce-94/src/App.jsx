import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Data Initialization
        const INITIAL_PRODUCTS = [
            { id: 1, name: "Lounge Chair 'Haze'", category: "Furniture", price: 890, stock: 4, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop" },
            { id: 2, name: "Ceramic Suspension", category: "Lighting", price: 245, stock: 12, image: "https://images.unsplash.com/photo-1513506003011-3b03c80165bd?q=80&w=800&auto=format&fit=crop" },
            { id: 3, name: "Sculptural Vase", category: "Accessory", price: 120, stock: 8, image: "https://images.unsplash.com/photo-1581783342308-f792ca93d468?q=80&w=800&auto=format&fit=crop" },
            { id: 4, name: "Noguchi Coffee Table", category: "Furniture", price: 1250, stock: 2, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop" },
            { id: 5, name: "Table Lamp 'Eclipse'", category: "Lighting", price: 340, stock: 15, image: "https://images.unsplash.com/photo-1507473888900-52e1ad14db4a?q=80&w=800&auto=format&fit=crop" },
            { id: 6, name: "Organic Mirror", category: "Accessory", price: 480, stock: 5, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop" },
            { id: 7, name: "Travertine Side Table", category: "Furniture", price: 650, stock: 3, image: "https://images.unsplash.com/photo-1620802051782-726fae1b9694?q=80&w=800&auto=format&fit=crop" }, // Demo Product Added
        ];

        let products = [...INITIAL_PRODUCTS];
        let cart = [];
        let isAdmin = false;

        // Credentials
        const ADMIN_EMAIL = "farhanmark50@gmail.com";
        const ADMIN_PASS = "farhan@76";

        // Initialization
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts();
            renderAdminProducts();
            lucide.createIcons();
            
            // Animation Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });

        // --- Render Functions ---

        function renderProducts() {
            const container = document.getElementById('store-products');
            container.innerHTML = products.map(p => `
                <div class="group cursor-pointer reveal">
                    <div class="aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone-200 relative mb-6">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                        <button onclick="addToCart(${p.id})" class="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-stone-900 w-10 h-10 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white shadow-lg">
                            <i data-lucide="plus" class="w-4 h-4"></i>
                        </button>
                    </div>
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-serif-text text-lg text-stone-900 group-hover:italic transition-all">${p.name}</h3>
                            <p class="text-xs text-stone-500 mt-1 font-light">${p.category}</p>
                        </div>
                        <span class="text-sm font-medium text-stone-900">$${p.price}</span>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        function renderAdminProducts() {
            const container = document.getElementById('admin-product-list');
            document.getElementById('admin-product-count').innerText = products.length;
            
            container.innerHTML = products.map(p => `
                <tr class="hover:bg-stone-50/50 transition-colors group">
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 rounded bg-stone-200 overflow-hidden">
                                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover">
                            </div>
                            <span class="text-sm font-medium text-stone-800">${p.name}</span>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-xs text-stone-500">${p.category}</td>
                    <td class="px-6 py-4 text-sm font-mono text-stone-600">$${p.price}</td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium ${p.stock < 5 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}">
                            ${p.stock} in stock
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <button onclick="deleteProduct(${p.id})" class="text-stone-400 hover:text-red-600 transition-colors">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
            lucide.createIcons();
        }

        // --- Cart Logic ---

        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            drawer.classList.toggle('translate-x-full');
            renderCart();
        }

        function addToCart(id) {
            const product = products.find(p => p.id === id);
            cart.push(product);
            
            // Update badge
            const badge = document.getElementById('cart-count');
            badge.innerText = cart.length;
            badge.classList.remove('opacity-0');
            
            // Show toast
            showToast(`Added: ${product.name}`);
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            const badge = document.getElementById('cart-count');
            badge.innerText = cart.length;
            if(cart.length === 0) badge.classList.add('opacity-0');
            renderCart();
        }

        function renderCart() {
            const container = document.getElementById('cart-items');
            const totalEl = document.getElementById('cart-total');
            
            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="h-full flex flex-col items-center justify-center text-center opacity-50">
                        <i data-lucide="shopping-basket" class="w-12 h-12 mb-4 stroke-[1]"></i>
                        <p class="text-sm font-light">Your cart is empty.</p>
                    </div>`;
                totalEl.innerText = "$0.00";
            } else {
                let total = 0;
                container.innerHTML = cart.map((item, index) => {
                    total += item.price;
                    return `
                    <div class="flex gap-4 items-center">
                        <div class="w-16 h-16 rounded bg-stone-100 overflow-hidden flex-shrink-0">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-grow">
                            <h4 class="font-serif-text text-sm text-stone-900">${item.name}</h4>
                            <p class="text-xs text-stone-500">$${item.price}</p>
                        </div>
                        <button onclick="removeFromCart(${index})" class="text-stone-300 hover:text-stone-900">
                            <i data-lucide="x-circle" class="w-4 h-4"></i>
                        </button>
                    </div>
                `}).join('');
                totalEl.innerText = "$" + total.toFixed(2);
            }
            lucide.createIcons();
        }

        // --- Admin Logic ---

        function toggleAdminPanel() {
            if (isAdmin) {
                // Already logged in, go to dashboard
                showSection('admin');
            } else {
                // Show Login Modal
                const modal = document.getElementById('modal-login');
                modal.classList.remove('hidden-section');
                // Small timeout for opacity transition
                setTimeout(() => modal.classList.remove('opacity-0'), 10);
            }
        }

        function closeAdminModal() {
            const modal = document.getElementById('modal-login');
            modal.classList.add('opacity-0');
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-24 right-6 z-50 transform translate-x-full transition-transform duration-500" id="toast">
<div className="bg-stone-900 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle"></i>
<span className="text-xs font-medium tracking-wide" id="toast-message">Action successful</span>
</div>
</div>

<nav className="fixed top-0 w-full z-40 transition-all duration-300 border-b border-stone-200/50 glass">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<div className="flex items-center gap-8">
<a className="text-stone-900 font-serif-text text-xl italic font-medium tracking-tight hover:opacity-70 transition-opacity" href="#" onclick="showSection('home')">
                    Être &amp; Maison
                </a>
<div className="hidden md:flex gap-6 text-[10px] uppercase tracking-widest text-stone-500 font-medium">
<a className="hover:text-stone-900 transition-colors" href="#" onclick="showSection('home')">Collection</a>
<a className="hover:text-stone-900 transition-colors" href="#">Design</a>
<a className="hover:text-stone-900 transition-colors" href="#">Journal</a>
</div>
</div>
<div className="flex items-center gap-6">

<button className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2" onclick="toggleAdminPanel()">
<span className="text-[10px] uppercase tracking-widest font-semibold hidden md:block" id="admin-status-text">Admin</span>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="shield-check"></i>
</button>

<button className="relative group" onclick="toggleCart()">
<i className="w-5 h-5 stroke-[1.5] text-stone-900 group-hover:scale-110 transition-transform" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-stone-900 text-white text-[8px] flex items-center justify-center rounded-full opacity-0 transition-opacity" id="cart-count">0</span>
</button>
</div>
</div>
</nav>

<main className="pt-20 min-h-screen relative">

<div className="transition-opacity duration-500" id="section-home">

<section className="relative h-[70vh] w-full overflow-hidden flex flex-col justify-center items-center text-center px-6">
<div className="absolute inset-0 -z-10">
<img alt="Interior" className="w-full h-full object-cover brightness-[0.85]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-white/90 text-[10px] tracking-[0.25em] uppercase font-medium mb-6 border border-white/20 px-4 py-1.5 rounded-full glass reveal active">New Collection</span>
<h1 className="text-5xl md:text-7xl text-white font-serif-display italic tracking-tight mb-8 reveal delay-100 active drop-shadow-sm">
                    Objects of Life.
                </h1>
<button className="bg-white text-stone-900 px-8 py-3 rounded-full text-xs font-semibold tracking-wide hover:bg-stone-100 transition-all transform hover:scale-105 reveal delay-200 active" onclick="document.getElementById('product-grid').scrollIntoView()">
                    Discover Catalogue
                </button>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="product-grid">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal active">
<div>
<h2 className="font-serif-display text-4xl text-stone-900 mb-2">The Selection</h2>
<p className="text-stone-500 text-sm font-light">Curated pieces for discerning interiors.</p>
</div>

<div className="flex gap-2 mt-4 md:mt-0">
<button className="px-4 py-2 rounded-full border border-stone-200 text-xs font-medium hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all">All</button>
<button className="px-4 py-2 rounded-full border border-stone-200 text-xs font-medium hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all text-stone-500">Furniture</button>
<button className="px-4 py-2 rounded-full border border-stone-200 text-xs font-medium hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all text-stone-500">Lighting</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16" id="store-products">

</div>
</section>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 backdrop-blur-sm hidden-section opacity-0 transition-opacity duration-300" id="modal-login">
<div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-md w-full mx-6 transform scale-95 transition-transform duration-300 relative">
<button className="absolute top-6 right-6 text-stone-400 hover:text-stone-900" onclick="closeAdminModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="text-center mb-8">
<div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-5 h-5 text-stone-900 stroke-[1.5]" data-lucide="lock"></i>
</div>
<h3 className="font-serif-display text-2xl text-stone-900">Administrator Access</h3>
<p className="text-xs text-stone-500 mt-2 font-light">Please identify yourself to manage the store.</p>
</div>
<form className="space-y-5" id="login-form" onsubmit="handleLogin(event)">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest font-semibold text-stone-500 ml-1">Email</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-stone-500 focus:bg-white transition-colors" id="email" placeholder="name@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest font-semibold text-stone-500 ml-1">Password</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-stone-500 focus:bg-white transition-colors" id="password" placeholder="••••••••" required="" type="password"/>
</div>
<p className="text-red-500 text-xs text-center hidden" id="login-error">Invalid credentials.</p>
<button className="w-full bg-stone-900 text-white rounded-lg py-3 text-sm font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10" type="submit">
                        Login
                    </button>
</form>
</div>
</div>

<div className="hidden-section min-h-screen bg-stone-100 pb-20" id="section-admin">
<div className="bg-white border-b border-stone-200 px-6 py-6 md:px-12 sticky top-20 z-30">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div>
<h2 className="font-serif-display text-3xl text-stone-900">Dashboard</h2>
<p className="text-xs text-stone-500 mt-1">Hello, Farhan Mark.</p>
</div>
<div className="flex gap-4">
<button className="bg-stone-900 text-white px-5 py-2 rounded-lg text-xs font-medium hover:bg-stone-800 flex items-center gap-2 transition-colors" onclick="openAddProductModal()">
<i className="w-4 h-4" data-lucide="plus"></i>
                            Add Product
                        </button>
<button className="border border-stone-200 text-stone-600 px-5 py-2 rounded-lg text-xs font-medium hover:bg-stone-50 hover:text-stone-900 transition-colors" onclick="logout()">
                            Logout
                        </button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 py-12">

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
<div className="bg-white p-6 rounded-xl border border-stone-200/60 shadow-sm">
<p className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-2">Total Revenue</p>
<p className="text-2xl font-serif-text font-medium text-stone-900">$12,450.00</p>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200/60 shadow-sm">
<p className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-2">Orders</p>
<p className="text-2xl font-serif-text font-medium text-stone-900">24</p>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200/60 shadow-sm">
<p className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-2">Products</p>
<p className="text-2xl font-serif-text font-medium text-stone-900" id="admin-product-count">0</p>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200/60 shadow-sm">
<p className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-2">Customers</p>
<p className="text-2xl font-serif-text font-medium text-stone-900">18</p>
</div>
</div>

<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
<h3 className="text-sm font-semibold text-stone-800">Inventory</h3>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-red-400"></span>
<span className="w-3 h-3 rounded-full bg-yellow-400"></span>
<span className="w-3 h-3 rounded-full bg-green-400"></span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-stone-100 text-[10px] uppercase tracking-widest text-stone-400 bg-stone-50/30">
<th className="px-6 py-4 font-semibold">Product</th>
<th className="px-6 py-4 font-semibold">Category</th>
<th className="px-6 py-4 font-semibold">Price</th>
<th className="px-6 py-4 font-semibold">Stock</th>
<th className="px-6 py-4 font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100" id="admin-product-list">

</tbody>
</table>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-y-0 right-0 z-50 w-full md:w-[400px] bg-white shadow-2xl transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col" id="cart-drawer">
<div className="p-6 border-b border-stone-100 flex justify-between items-center">
<h2 className="font-serif-display text-2xl text-stone-900">Your Cart</h2>
<button className="text-stone-400 hover:text-stone-900 transition-colors" onclick="toggleCart()">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6" id="cart-items">

<div className="h-full flex flex-col items-center justify-center text-center opacity-50">
<i className="w-12 h-12 mb-4 stroke-[1]" data-lucide="shopping-basket"></i>
<p className="text-sm font-light">Your cart is empty.</p>
</div>
</div>
<div className="p-6 border-t border-stone-100 bg-stone-50/50">
<div className="flex justify-between items-center mb-6">
<span className="text-xs uppercase tracking-widest font-semibold text-stone-500">Total</span>
<span className="font-serif-text text-xl font-medium text-stone-900" id="cart-total">$0.00</span>
</div>
<button className="w-full bg-stone-900 text-white py-4 rounded-xl text-xs font-semibold tracking-wide hover:bg-stone-800 transition-colors">
                Proceed to Checkout
            </button>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 backdrop-blur-sm hidden-section" id="modal-add-product">
<div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full mx-6 relative">
<button className="absolute top-6 right-6 text-stone-400 hover:text-stone-900" onclick="document.getElementById('modal-add-product').classList.add('hidden-section')">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<h3 className="font-serif-display text-2xl text-stone-900 mb-6">Add a Piece</h3>
<form className="space-y-4" onsubmit="addNewProduct(event)">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest font-semibold text-stone-500">Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-500" name="name" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest font-semibold text-stone-500">Price ($)</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-500" name="price" required="" type="number"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest font-semibold text-stone-500">Category</label>
<select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-500" name="category">
<option value="Furniture">Furniture</option>
<option value="Lighting">Lighting</option>
<option value="Accessory">Accessory</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest font-semibold text-stone-500">Image URL</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-500" name="image" placeholder="https://..." required="" type="url"/>
</div>
<button className="w-full mt-4 bg-stone-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors" type="submit">
                    Add to Catalogue
                </button>
</form>
</div>
</div>

<footer className="bg-stone-900 text-stone-400 py-16 px-6 border-t border-stone-800">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<h4 className="text-stone-100 font-serif-text text-xl italic mb-2">Être &amp; Maison</h4>
<p className="text-xs font-light max-w-xs">Harmony between aesthetics and function. A selection of objects for elevated living.</p>
</div>
<div className="flex gap-8 text-[10px] uppercase tracking-widest font-medium">
<a className="hover:text-white transition-colors" href="#">Legal</a>
<a className="hover:text-white transition-colors" href="#">Shipping</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-800/50 text-center text-[10px] text-stone-600 uppercase tracking-widest">
            © 2024 Être &amp; Maison. All rights reserved.
        </div>
</footer>


    </>
  );
}
