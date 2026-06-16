import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
medical: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6', // Teal
600: '#0d9488',
900: '#134e4a',
},
slate: {
850: '#1e293b', // Custom dark
}
},
animation: {
'fade-in': 'fadeIn 0.3s ease-out forwards',
'slide-up': 'slideUp 0.4s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // State
        const state = {
            products: [
                { id: 1, name: 'Panadol Extra', category: 'Tablets', price: 35, stock: 450, ai_tag: 'Fever' },
                { id: 2, name: 'Brufen 400mg', category: 'Tablets', price: 45, stock: 120, ai_tag: 'Pain' },
                { id: 3, name: 'Arinac Forte', category: 'Tablets', price: 60, stock: 80, ai_tag: 'Cold' },
                { id: 4, name: 'Pyodine Solution', category: 'First Aid', price: 120, stock: 3, ai_tag: 'Antiseptic' },
                { id: 5, name: 'Pampers (S)', category: 'Baby Care', price: 450, stock: 50, ai_tag: 'Baby' },
            ],
            cart: [],
            adminLoggedIn: false,
            currentUser: null,
            admins: [
                { email: 'admin@store.com', password: 'admin', name: 'Dr. Shair' } // Default mock user
            ]
        };

        // DOM Elements
        const views = {
            store: document.getElementById('view-store'),
            auth: document.getElementById('view-admin-auth'),
            dashboard: document.getElementById('view-admin-dashboard')
        };
        
        const authForms = {
            login: document.getElementById('form-login'),
            signup: document.getElementById('form-signup')
        };

        // --- INIT ---
        window.addEventListener('DOMContentLoaded', () => {
            renderStore();
            updateCartUI();
        });

        // --- NAVIGATION & VIEWS ---
        function switchView(viewName) {
            // Reset visibility
            Object.values(views).forEach(el => el.classList.add('hidden'));
            document.getElementById('nav-search').classList.add('hidden');
            
            if (viewName === 'store') {
                views.store.classList.remove('hidden');
                document.getElementById('nav-search').classList.remove('hidden');
            } else if (viewName === 'auth') {
                views.auth.classList.remove('hidden');
            } else if (viewName === 'dashboard') {
                views.dashboard.classList.remove('hidden');
                renderAdminDashboard();
            }
            window.scrollTo(0,0);
        }

        function handleAdminClick() {
            if (state.adminLoggedIn) {
                switchView('dashboard');
            } else {
                switchView('auth');
            }
        }

        // --- AUTHENTICATION LOGIC ---
        let isSignupMode = false;

        function toggleAuthMode() {
            isSignupMode = !isSignupMode;
            if(isSignupMode) {
                authForms.login.classList.add('hidden');
                authForms.signup.classList.remove('hidden');
                document.getElementById('auth-title').innerText = 'Create Admin Account';
                document.getElementById('auth-subtitle').innerText = 'Join the team to manage store inventory.';
                document.getElementById('auth-footer-text').innerText = 'Already have an account?';
                document.getElementById('auth-toggle-btn').innerText = 'Sign in here';
            } else {
                authForms.signup.classList.add('hidden');
                authForms.login.classList.remove('hidden');
                document.getElementById('auth-title').innerText = 'Admin Login';
                document.getElementById('auth-subtitle').innerText = 'Enter your credentials to manage store inventory.';
                document.getElementById('auth-footer-text').innerText = "Don't have an admin account?";
                document.getElementById('auth-toggle-btn').innerText = 'Sign up here';
            }
        }

        function handleAuthSubmit(e, type) {
            e.preventDefault();
            const inputs = e.target.querySelectorAll('input');
            
            if (type === 'login') {
                const email = inputs[0].value;
                const password = inputs[1].value;
                const admin = state.admins.find(u => u.email === email && u.password === password);
                
                if (admin) {
                    state.adminLoggedIn = true;
                    state.currentUser = admin;
                    document.getElementById('admin-link-text').innerText = 'Dashboard';
                    switchView('dashboard');
                } else {
                    alert('Invalid credentials. (Try: admin@store.com / admin)');
                }
            } else {
                // Mock Signup
                const name = inputs[0].value;
                const email = inputs[1].value;
                const password = inputs[2].value;
                const key = inputs[3].value;

                if(key !== 'STORE123') return alert("Invalid Store Key. Ask owner for permission.");

                state.admins.push({ name, email, password });
                state.adminLoggedIn = true;
                state.currentUser = { name, email };
                document.getElementById('admin-link-text').innerText = 'Dashboard';
                alert('Account Created Successfully!');
                switchView('dashboard');
            }
        }

        function logoutAdmin() {
            state.adminLoggedIn = false;
            state.currentUser = null;
            document.getElementById('admin-link-text').innerText = 'Admin Login';
            // Reset Auth Form
            authForms.login.reset();
            authForms.signup.reset();
            if(isSignupMode) toggleAuthMode(); // Reset to login view
            switchView('store');
        }

        // --- ADMIN DASHBOARD LOGIC ---
        function renderAdminDashboard() {
            document.getElementById('admin-name-display').innerText = state.currentUser.name;
            
            // Stats
            document.getElementById('total-inventory-count').innerText = state.products.reduce((acc, p) => acc + parseInt(p.stock), 0);
            const value = state.products.reduce((acc, p) => acc + (p.price * p.stock), 0);
            document.getElementById('total-inventory-value').innerText = `PKR ${value.toLocaleString()}`;

            // Table
            const tbody = document.getElementById('admin-table-body');
            tbody.innerHTML = state.products.map(p => `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="px-6 py-3 font-medium text-slate-900">${p.name}</td>
                    <td class="px-6 py-3"><span class="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs border border-slate-200">${p.category}</span></td>
                    <td class="px-6 py-3 text-slate-600">PKR ${p.price}</td>
                    <td class="px-6 py-3 ${p.stock < 10 ? 'text-red-500 font-bold' : 'text-emerald-600 font-medium'}">${p.stock < 10 ? `Low Stock (${p.stock})` : `In Stock (${p.stock})`}</td>
                    <td class="px-6 py-3 text-right">
                        <button class="text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon icon="lucide:edit-3" width="16"></iconify-icon></button>
                    </td>
                </tr>
            `).join('');
        }

        function toggleAddProductModal() {
            const modal = document.getElementById('add-product-modal');
            modal.classList.toggle('hidden');
        }

        function submitNewProduct(e) {
            e.preventDefault();
            const form = e.target;
            const newProduct = {
                id: Date.now(), // simple unique id
                name: form.name.value,
                category: form.category.value,
                ai_tag: form.tag.value || 'General',
                price: parseFloat(form.price.value),
                stock: parseInt(form.stock.value)
            };

            state.products.push(newProduct);
            
            // Refresh Views
            renderStore();
            renderAdminDashboard();
            
            // Close & Reset
            form.reset();
            toggleAddProductModal();
            alert('Product Added Successfully');
        }

        // --- STORE LOGIC ---
        function renderStore() {
            const grid = document.getElementById('product-grid');
            grid.innerHTML = state.products.map(product => `
                <div class="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group relative">
                    <div class="aspect-square bg-slate-100 overflow-hidden relative flex items-center justify-center">
                         <div class="text-slate-300"><iconify-icon icon="lucide:image" width="48"></iconify-icon></div>
                         <div class="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-medium text-indigo-600 flex items-center gap-1 border border-indigo-100">
                            <iconify-icon icon="lucide:sparkles" width="10"></iconify-icon> ${product.ai_tag}
                         </div>
                    </div>
                    <div class="p-4">
                        <div class="text-[10px] text-slate-500 uppercase tracking-wider font-medium mb-1">${product.category}</div>
                        <h3 class="font-semibold text-slate-900 mb-2 truncate text-sm">${product.name}</h3>
                        <div class="flex items-center justify-between mt-3">
                            <span class="text-sm font-bold text-slate-900">PKR ${product.price}</span>
                            <button onclick="addToCart(${product.id})" class="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                                <iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // --- CART LOGIC ---
        function addToCart(id) {
            const product = state.products.find(p => p.id === id);
            state.cart.push(product);
            updateCartUI();
        }

        function updateCartUI() {
            const container = document.getElementById('cart-items');
            const totalEl = document.getElementById('cart-total');
            const badge = document.getElementById('cart-badge');

            badge.innerText = state.cart.length;
            if(state.cart.length > 0) badge.classList.remove('opacity-0', 'scale-75');
            else badge.classList.add('opacity-0', 'scale-75');

            if(state.cart.length === 0) {
                container.innerHTML = `<div class="text-center text-slate-400 py-12"><p class="text-sm">Your cart is empty.</p></div>`;
                totalEl.innerText = "PKR 0.00";
                return;
            }

            let total = 0;
            container.innerHTML = state.cart.map((item, idx) => {
                total += item.price;
                return `
                    <div class="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div class="flex-1 min-w-0">
                            <h4 class="text-sm font-medium text-slate-900 truncate">${item.name}</h4>
                            <p class="text-xs text-slate-500">PKR ${item.price}</p>
                        </div>
                        <button onclick="state.cart.splice(${idx}, 1); updateCartUI()" class="text-slate-400 hover:text-red-500"><iconify-icon icon="lucide:trash-2" width="16"></iconify-icon></button>
                    </div>`;
            }).join('');
            totalEl.innerText = `PKR ${total.toFixed(2)}`;
        }

        function toggleCart() {
            const sidebar = document.getElementById('cart-sidebar');
            sidebar.classList.toggle('translate-x-full');
        }

        function generateInvoice() {
            if(state.cart.length === 0) return;
            let total = 0;
            const list = document.getElementById('invoice-items-list');
            list.innerHTML = state.cart.map(item => {
                total += item.price;
                return `<tr><td class="py-2 px-2 text-slate-700">${item.name}</td><td class="py-2 px-2 text-right font-medium">PKR ${item.price}</td></tr>`;
            }).join('');
            document.getElementById('invoice-total').innerText = `PKR ${total.toFixed(2)}`;
            document.getElementById('invoice-overlay').classList.remove('hidden');
            toggleCart();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col" id="app">

<nav className="fixed w-full z-50 glass top-0 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex items-center gap-2 cursor-pointer" onclick="switchView('store')">
<div className="bg-medical-50 text-medical-600 p-1.5 rounded-lg border border-medical-100">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-display font-semibold text-sm tracking-tight leading-none text-slate-900">Shair Muhammad Bhutta</span>
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium mt-0.5">Medical Store</span>
</div>
</div>

<div className="hidden md:flex flex-1 max-w-lg mx-8 relative group" id="nav-search">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-medical-500" icon="lucide:sparkles" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-medical-500 focus:border-medical-500 sm:text-sm transition-all" placeholder="Ask AI to find medicines..." type="text"/>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" id="admin-link-text" onclick="handleAdminClick()">
                            Admin Login
                        </button>
<button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors" id="cart-btn" onclick="toggleCart()">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1 right-0.5 bg-medical-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full opacity-0 transform scale-75 transition-all" id="cart-badge">0</span>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">

<div className="space-y-10 animate-fade-in block" id="view-store">

<div className="relative rounded-2xl bg-slate-900 overflow-hidden shadow-xl">
<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&amp;w=2079&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
<div className="relative p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center h-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-500/20 border border-medical-500/30 text-medical-300 text-xs font-medium mb-6">
<iconify-icon icon="lucide:bot" width="14"></iconify-icon>
                            AI-Powered Health Assistant
                        </div>
<h1 className="text-3xl md:text-5xl font-display font-semibold text-white tracking-tight mb-4">
                            Your Health,<br/>Intelligently Managed.
                        </h1>
<p className="text-slate-400 max-w-lg text-sm md:text-base leading-relaxed mb-8">
                            Welcome to <span className="text-white font-medium">Shair Muhammad Bhutta Medical Store</span>. Experience the future of pharmacy with AI-driven recommendations.
                        </p>
<div className="flex flex-wrap gap-3">
<a className="bg-white text-slate-900 hover:bg-slate-50 px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg flex items-center gap-2" href="https://wa.me/923174668451" target="_blank">
                                Order via WhatsApp
                                <iconify-icon icon="lucide:message-circle" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="space-y-4">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Available Medicines</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="product-grid">

</div>
</div>
</div>

<div className="hidden animate-slide-up max-w-md mx-auto pt-10" id="view-admin-auth">
<div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
<div className="p-8">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-medical-50 text-medical-600 mb-4">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-display font-semibold text-slate-900" id="auth-title">Admin Login</h2>
<p className="text-sm text-slate-500 mt-2" id="auth-subtitle">Enter your credentials to manage store inventory.</p>
</div>

<form className="space-y-4" id="form-login" onsubmit="handleAuthSubmit(event, 'login')">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500" placeholder="admin@store.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Password</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" type="submit">
                                Sign In
                            </button>
</form>

<form className="space-y-4 hidden" id="form-signup" onsubmit="handleAuthSubmit(event, 'signup')">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500" placeholder="Shair Muhammad" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500" placeholder="admin@store.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Create Password</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500" placeholder="••••••••" required="" type="password"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Store Key (Security)</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500" placeholder="Enter Store Verification Code" required="" type="text"/>
</div>
<button className="w-full bg-medical-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-medical-500 transition-colors shadow-lg shadow-medical-500/20" type="submit">
                                Create Admin Account
                            </button>
</form>
<div className="mt-6 pt-6 border-t border-slate-100 text-center">
<p className="text-xs text-slate-500" id="auth-footer-text">Don't have an admin account?</p>
<button className="text-xs font-semibold text-medical-600 hover:text-medical-700 mt-1" id="auth-toggle-btn" onclick="toggleAuthMode()">Sign up here</button>
</div>
</div>
</div>
</div>

<div className="hidden space-y-8 animate-fade-in" id="view-admin-dashboard">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-1">
<h2 className="text-2xl font-display font-semibold tracking-tight text-slate-900">Dashboard</h2>
<span className="bg-medical-50 text-medical-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-medical-100">ADMIN</span>
</div>
<p className="text-sm text-slate-500">Welcome back, <span className="font-medium text-slate-900" id="admin-name-display">Admin</span></p>
</div>
<div className="flex gap-3">
<button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2 rounded-lg text-xs font-medium transition-all" onclick="logoutAdmin()">
                            Log Out
                        </button>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-medium transition-all shadow-lg flex items-center gap-2" onclick="toggleAddProductModal()">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Add Medicine
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Inventory</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1" id="total-inventory-count">0</h3>
</div>
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><iconify-icon icon="lucide:package" width="20"></iconify-icon></div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Items Value</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1" id="total-inventory-value">PKR 0</h3>
</div>
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><iconify-icon icon="lucide:dollar-sign" width="20"></iconify-icon></div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
<h3 className="font-semibold text-sm text-slate-900">Current Stock</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-slate-500 font-medium">
<tr>
<th className="px-6 py-3">Product Name</th>
<th className="px-6 py-3">Category</th>
<th className="px-6 py-3">Price</th>
<th className="px-6 py-3">Stock</th>
<th className="px-6 py-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-slate-700" id="admin-table-body">

</tbody>
</table>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Shair Muhammad Bhutta Medical Store.</p>
<div className="flex gap-4">
<iconify-icon className="text-slate-400 hover:text-blue-600 cursor-pointer" icon="lucide:facebook" width="16"></iconify-icon>
<iconify-icon className="text-slate-400 hover:text-pink-600 cursor-pointer" icon="lucide:instagram" width="16"></iconify-icon>
</div>
</div>
</footer>


<div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] hidden flex items-center justify-center p-4" id="add-product-modal">
<div className="bg-white w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-slide-up">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
<h3 className="font-semibold text-slate-900">Add New Medicine</h3>
<button className="text-slate-400 hover:text-slate-900" onclick="toggleAddProductModal()"><iconify-icon icon="lucide:x" width="18"></iconify-icon></button>
</div>
<form className="p-6 space-y-4" onsubmit="submitNewProduct(event)">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Medicine Name</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500" name="name" placeholder="e.g. Disprin Soluble" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Category</label>
<select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-medical-500" name="category">
<option>Tablets</option>
<option>Syrups</option>
<option>Injections</option>
<option>First Aid</option>
<option>Baby Care</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">AI Tag</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-medical-500" name="tag" placeholder="e.g. Headache" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Price (PKR)</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-medical-500" name="price" placeholder="0.00" required="" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Stock Quantity</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-medical-500" name="stock" placeholder="0" required="" type="number"/>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex justify-center items-center gap-2" type="submit">
<iconify-icon icon="lucide:save" width="16"></iconify-icon> Save to Inventory
                        </button>
</div>
</form>
</div>
</div>

<div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out border-l border-slate-100 flex flex-col" id="cart-sidebar">
<div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<h2 className="text-lg font-semibold text-slate-900">Your Cart</h2>
<button className="text-slate-400 hover:text-slate-900" onclick="toggleCart()"><iconify-icon icon="lucide:x" width="20"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-4" id="cart-items"></div>
<div className="p-6 border-t border-slate-100 bg-slate-50">
<div className="flex justify-between items-center mb-4">
<span className="text-slate-500">Total</span>
<span className="text-xl font-bold text-slate-900" id="cart-total">PKR 0.00</span>
</div>
<button className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors flex justify-center items-center gap-2" onclick="generateInvoice()">
                    Checkout &amp; Print
                    <iconify-icon icon="lucide:printer" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] hidden flex items-center justify-center p-4" id="invoice-overlay">
<div className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden" id="invoice-modal">
<div className="p-8">
<div className="flex justify-between items-start mb-8 border-b border-slate-100 pb-6">
<div>
<h1 className="text-xl font-bold text-slate-900 uppercase tracking-widest">Invoice</h1>
<p className="text-sm text-slate-500 mt-1">#INV-2024-001</p>
</div>
<div className="text-right">
<h2 className="font-bold text-slate-900">Shair Muhammad Bhutta<br/>Medical Store</h2>
</div>
</div>
<table className="w-full text-sm mb-6">
<thead className="bg-slate-50 text-slate-500">
<tr><th className="py-2 px-2 text-left">Item</th><th className="py-2 px-2 text-right">Price</th></tr>
</thead>
<tbody className="divide-y divide-slate-100" id="invoice-items-list"></tbody>
</table>
<div className="flex justify-between items-center border-t-2 border-slate-900 pt-4">
<span className="font-bold text-lg">Total</span>
<span className="font-bold text-xl" id="invoice-total">PKR 0.00</span>
</div>
</div>
<div className="bg-slate-50 px-8 py-4 flex justify-end gap-3 no-print border-t border-slate-200">
<button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900" onclick="document.getElementById('invoice-overlay').classList.add('hidden')">Close</button>
<button className="px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 flex items-center gap-2" onclick="window.print()"><iconify-icon icon="lucide:printer" width="16"></iconify-icon> Print</button>
</div>
</div>
</div>
</div>



    </>
  );
}
