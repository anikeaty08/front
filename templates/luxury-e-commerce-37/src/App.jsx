import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Switch Page
        function switchPage(pageId) {
            document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-[var(--bg-soft)]', 'text-[var(--accent)]');
                el.classList.add('text-[var(--text-muted)]');
            });
            const activeNav = document.getElementById('nav-' + pageId);
            if(activeNav) {
                activeNav.classList.remove('text-[var(--text-muted)]');
                activeNav.classList.add('bg-[var(--bg-soft)]', 'text-[var(--accent)]');
            }
        }

        // Toggle Popups
        function togglePopup(id) {
            const popup = document.getElementById(id);
            popup.classList.toggle('hidden');
        }

        function saveDraft() {
            const btn = document.querySelector('button[onclick="saveDraft()"]');
            const originalText = btn.innerText;
            btn.innerText = "Saved!";
            setTimeout(() => {
                btn.innerText = originalText;
                switchPage('products');
                toggleProductTab('drafts');
                document.getElementById('draft-badge').classList.remove('hidden');
            }, 800);
        }

        function toggleProductTab(tab) {
            const activeView = document.getElementById('products-active-view');
            const draftsView = document.getElementById('products-drafts-view');
            const activeTab = document.getElementById('tab-prod-active');
            const draftsTab = document.getElementById('tab-prod-drafts');

            if(tab === 'active') {
                activeView.classList.remove('hidden');
                draftsView.classList.add('hidden');
                activeTab.className = "px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--bg-soft)] text-[var(--accent)] transition";
                draftsTab.className = "px-4 py-2 rounded-lg text-xs font-semibold text-[var(--text-muted)] hover:bg-gray-50 transition relative";
            } else {
                activeView.classList.add('hidden');
                draftsView.classList.remove('hidden');
                draftsTab.className = "px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--bg-soft)] text-[var(--accent)] transition relative";
                activeTab.className = "px-4 py-2 rounded-lg text-xs font-semibold text-[var(--text-muted)] hover:bg-gray-50 transition";
            }
        }

        // Add Product Variant Row dynamically
        function addVariantRow() {
            const container = document.getElementById('variants-container');
            const rowHTML = `
                <div class="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-200 animation-fadeIn">
                    <div class="flex-1">
                        <input type="text" placeholder="Variant Name" class="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[var(--accent)]">
                    </div>
                    <div class="w-32">
                        <input type="number" placeholder="Price (₹)" class="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[var(--accent)]">
                    </div>
                    <button type="button" onclick="this.parentElement.remove()" class="text-gray-400 hover:text-red-500 transition p-2">
                        <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
                    </button>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', rowHTML);
        }

        // Toggle Customization Form
        function toggleCustomizationForm() {
            const form = document.getElementById('new-customization-card');
            form.classList.toggle('hidden');
        }

        // Add Customization Step dynamically
        let stepCount = 1;
        function addCustomizationStep() {
            stepCount++;
            const container = document.getElementById('customization-steps-container');
            const stepHTML = `
                <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 relative group animation-fadeIn">
                    <span class="absolute -top-3 left-4 bg-white px-2 text-[10px] font-bold text-gray-400 uppercase tracking-wide border border-gray-200 rounded-md">Step ${stepCount}</span>
                    <button type="button" onclick="this.parentElement.remove()" class="absolute top-3 right-3 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition">
                        <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
                    </button>
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label class="block text-xs text-gray-500 mb-1">Step Name</label>
                            <input type="text" placeholder="e.g. Add Engraving Text" class="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[var(--accent)]">
                        </div>
                        <div>
                            <label class="block text-xs text-gray-500 mb-1">Input Type</label>
                            <select class="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[var(--accent)] text-gray-600">
                                <option value="dropdown">Dropdown Selection</option>
                                <option value="text">Text Input</option>
                                <option value="image">Image Upload</option>
                            </select>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', stepHTML);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden w-72 flex-col border-r border-[var(--border)] bg-[var(--card-bg)] lg:flex z-40">

<div className="flex h-20 items-center px-8 border-b border-[var(--border)]">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-white shadow-lg shadow-rose-200">
<iconify-icon icon="solar:gift-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<span className="font-serif text-2xl tracking-tight font-semibold text-[var(--primary)]">Presto.</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">

<button className="nav-item w-full group flex items-center gap-3 rounded-2xl bg-[var(--bg-soft)] px-4 py-3 text-[var(--accent)] font-medium transition-all" id="nav-dashboard" onclick="switchPage('dashboard')">
<iconify-icon icon="solar:widget-2-linear"></iconify-icon>
                Dashboard
            </button>

<div className="mt-6 mb-2 px-4 text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">Commerce</div>
<button className="nav-item w-full group flex items-center gap-3 rounded-2xl px-4 py-3 text-[var(--text-muted)] hover:bg-gray-50 hover:text-[var(--text-main)] transition-all" id="nav-orders" onclick="switchPage('orders')">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                Orders
            </button>
<button className="nav-item w-full group flex items-center gap-3 rounded-2xl px-4 py-3 text-[var(--text-muted)] hover:bg-gray-50 hover:text-[var(--text-main)] transition-all" id="nav-products" onclick="switchPage('products')">
<iconify-icon icon="solar:box-linear"></iconify-icon>
                Products
            </button>

<button className="nav-item w-full group flex items-center gap-3 rounded-2xl px-4 py-3 text-[var(--text-muted)] hover:bg-gray-50 hover:text-[var(--text-main)] transition-all" id="nav-catalog" onclick="switchPage('catalog')">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon>
                Catalog
            </button>
<button className="nav-item w-full group flex items-center gap-3 rounded-2xl px-4 py-3 text-[var(--text-muted)] hover:bg-gray-50 hover:text-[var(--text-main)] transition-all" id="nav-inventory" onclick="switchPage('inventory')">
<iconify-icon icon="solar:clipboard-list-linear"></iconify-icon>
                Inventory
            </button>
<button className="nav-item w-full group flex items-center gap-3 rounded-2xl px-4 py-3 text-[var(--text-muted)] hover:bg-gray-50 hover:text-[var(--text-main)] transition-all" id="nav-customers" onclick="switchPage('customers')">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
                Customers
            </button>

<div className="mt-6 mb-2 px-4 text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">Hamper Engine</div>
<button className="nav-item w-full group flex items-center gap-3 rounded-2xl px-4 py-3 text-[var(--text-muted)] hover:bg-gray-50 hover:text-[var(--text-main)] transition-all" id="nav-hamper-build" onclick="switchPage('hamper-build')">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                Hamper Build
            </button>
<button className="nav-item w-full group flex items-center gap-3 rounded-2xl px-4 py-3 text-[var(--text-muted)] hover:bg-gray-50 hover:text-[var(--text-main)] transition-all" id="nav-customization" onclick="switchPage('customization')">
<iconify-icon icon="solar:pallete-2-linear"></iconify-icon>
                Customization
            </button>

<div className="mt-6 mb-2 px-4 text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">Insights</div>
<button className="nav-item w-full group flex items-center gap-3 rounded-2xl px-4 py-3 text-[var(--text-muted)] hover:bg-gray-50 hover:text-[var(--text-main)] transition-all" id="nav-analytics" onclick="switchPage('analytics')">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon>
                Analytics
            </button>
<button className="nav-item w-full group flex items-center gap-3 rounded-2xl px-4 py-3 text-[var(--text-muted)] hover:bg-gray-50 hover:text-[var(--text-main)] transition-all" id="nav-settings" onclick="switchPage('settings')">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
                Settings
            </button>
</nav>

<div className="border-t border-[var(--border)] p-6">
<div className="flex items-center gap-3 cursor-pointer rounded-2xl p-2 hover:bg-gray-50 transition">
<img alt="Admin" className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[var(--text-main)]">Sophia R.</span>
<span className="text-xs text-[var(--text-muted)]">Store Manager</span>
</div>
</div>
</div>
</aside>

<main className="relative flex flex-1 flex-col overflow-hidden">

<header className="glass flex h-20 items-center justify-between border-b border-[var(--border)] px-8 z-30">
<div className="relative w-96">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full rounded-full border-none bg-white py-2.5 pl-12 pr-4 text-sm text-[var(--text-main)] shadow-[0_2px_10px_rgba(0,0,0,0.03)] outline-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[var(--accent)] placeholder:text-gray-400" placeholder="Search orders, customers, inventory..." type="text"/>
</div>
<div className="flex items-center gap-4">

<div className="relative">
<button className="relative rounded-full bg-white p-2.5 text-gray-500 shadow-sm ring-1 ring-gray-100 hover:text-[var(--accent)] transition" onclick="togglePopup('notification-popup')">
<iconify-icon icon="solar:bell-linear"></iconify-icon>
<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--accent)]"></span>
</button>

<div className="hidden absolute right-0 mt-3 w-80 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-gray-100 z-50" id="notification-popup">
<div className="px-4 py-3 border-b border-gray-50">
<h4 className="font-semibold text-[var(--primary)]">Notifications</h4>
</div>
<div className="max-h-64 overflow-y-auto">
<div className="flex gap-3 p-3 hover:bg-rose-50/50 rounded-xl transition cursor-pointer">
<div className="h-8 w-8 rounded-full bg-rose-100 text-[var(--accent)] flex items-center justify-center shrink-0"><iconify-icon icon="solar:bag-check-linear"></iconify-icon></div>
<div>
<p className="text-xs font-medium text-gray-900">New Order #ORD-921</p>
<p className="text-[10px] text-gray-500">2 min ago • ₹4,500</p>
</div>
</div>
<div className="flex gap-3 p-3 hover:bg-rose-50/50 rounded-xl transition cursor-pointer">
<div className="h-8 w-8 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0"><iconify-icon icon="solar:danger-circle-linear"></iconify-icon></div>
<div>
<p className="text-xs font-medium text-gray-900">Low Stock: Velvet Ribbon</p>
<p className="text-[10px] text-gray-500">1 hour ago • 5 units left</p>
</div>
</div>
</div>
<div className="p-2 text-center border-t border-gray-50">
<button className="text-xs font-medium text-[var(--accent)]">Mark all read</button>
</div>
</div>
</div>
<div className="h-8 w-px bg-gray-200"></div>
<button className="font-medium text-[var(--primary)] text-xs hover:underline" onclick="switchPage('help-support')">Help &amp; Support</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-[var(--bg-soft)] p-8">
<div className="mx-auto max-w-7xl">

<section className="page-section active space-y-8" id="dashboard">

<div className="flex items-end justify-between">
<div>
<h2 className="font-serif text-3xl font-medium tracking-tight text-[var(--primary)]">Good Morning, Sophia</h2>
<p className="mt-1 text-[var(--text-muted)]">Here's what's happening with Presto today.</p>
</div>
<div className="relative">
<div className="flex gap-3">
<span className="text-xs font-medium text-[var(--text-muted)] self-center">Last 7 Days</span>
<button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-[var(--text-main)] shadow-sm border border-[var(--border)] hover:bg-gray-50" onclick="togglePopup('filter-popup')">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filter
                                </button>
</div>

<div className="hidden absolute right-0 mt-2 w-64 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-100 z-20" id="filter-popup">
<h4 className="text-xs font-semibold uppercase text-[var(--text-muted)] mb-3">Filter By</h4>
<div className="space-y-3">
<label className="flex items-center gap-2 text-xs cursor-pointer">
<input checked="" className="accent-[var(--accent)] rounded" type="checkbox"/> Date Range: This Month
                                    </label>
<label className="flex items-center gap-2 text-xs cursor-pointer">
<input checked="" className="accent-[var(--accent)] rounded" type="checkbox"/> Status: Completed
                                    </label>
<label className="flex items-center gap-2 text-xs cursor-pointer">
<input className="accent-[var(--accent)] rounded" type="checkbox"/> Channel: Online Store
                                    </label>
</div>
<div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
<button className="bg-[var(--primary)] text-white text-xs px-3 py-1.5 rounded-lg" onclick="togglePopup('filter-popup')">Apply</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
<div className="relative overflow-hidden rounded-[20px] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-[var(--text-muted)]">Total Revenue</p>
<h3 className="mt-2 text-2xl font-semibold text-[var(--text-main)]">₹124,592</h3>
</div>
<div className="rounded-xl bg-[var(--bg-soft)] p-2 text-[var(--accent)]"><iconify-icon icon="solar:wad-of-money-linear"></iconify-icon></div>
</div>
<p className="mt-4 text-xs font-medium text-emerald-600 flex items-center gap-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> +12.5% vs last week</p>
</div>
<div className="relative overflow-hidden rounded-[20px] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-[var(--text-muted)]">Active Orders</p>
<h3 className="mt-2 text-2xl font-semibold text-[var(--text-main)]">48</h3>
</div>
<div className="rounded-xl bg-[var(--bg-soft)] p-2 text-[var(--accent)]"><iconify-icon icon="solar:bag-3-linear"></iconify-icon></div>
</div>
<p className="mt-4 text-xs font-medium text-emerald-600 flex items-center gap-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> +8% new orders</p>
</div>
<div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[var(--primary)] to-[#6a1b1b] p-6 text-white shadow-lg shadow-rose-200">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-rose-100">Hampers Built</p>
<h3 className="mt-2 text-2xl font-semibold">342</h3>
</div>
<div className="rounded-xl bg-white/10 p-2 text-white"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon></div>
</div>
<button className="mt-4 text-xs font-medium bg-white/20 px-3 py-1 rounded-lg hover:bg-white/30 transition" onclick="switchPage('hamper-build')">Create Hamper →</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 rounded-[24px] bg-white border border-[var(--border)] shadow-sm relative overflow-hidden">
<div className="bg-rose-50/50 px-6 py-4 border-b border-[var(--border)] flex justify-between items-center">
<h3 className="font-serif text-lg text-[var(--primary)]">Quick Product Add</h3>
<div className="flex gap-2">
<button className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide hover:text-[var(--primary)]" onclick="saveDraft()">Save Draft</button>
</div>
</div>
<div className="p-6 grid grid-cols-2 gap-6">
<div className="space-y-4">
<input className="w-full rounded-xl border-0 bg-[var(--bg-soft)] p-3 text-sm shadow-inner focus:ring-1 focus:ring-[var(--accent)] outline-none" placeholder="Product Name" type="text"/>
<div className="flex gap-4">
<input className="w-full rounded-xl border-0 bg-[var(--bg-soft)] p-3 text-sm shadow-inner outline-none" placeholder="Price" type="number"/>
<select className="w-full rounded-xl border-0 bg-[var(--bg-soft)] p-3 text-sm shadow-inner text-gray-500 outline-none">
<option>Category</option>
<option>Candles</option>
</select>
</div>
</div>
<div className="rounded-xl border-2 border-dashed border-[var(--border)] bg-gray-50 flex flex-col items-center justify-center text-[var(--text-muted)] cursor-pointer hover:border-[var(--accent)] transition h-32">
<iconify-icon className="mb-2" icon="solar:camera-linear"></iconify-icon>
<span className="text-xs">Upload Image</span>
</div>
</div>
</div>
<div className="rounded-[24px] bg-white p-6 shadow-sm border border-[var(--border)]">
<h3 className="font-serif text-lg text-[var(--primary)] mb-4">Top Sellers</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gray-100 bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&amp'}}></div>
<div className="flex-1">
<p className="text-sm font-medium">Soy Wax Candle</p>
<p className="text-xs text-[var(--text-muted)]">₹899</p>
</div>
<span className="text-xs font-semibold text-emerald-600">342 sold</span>
</div>
</div>
</div>
</div>
</section>

<section className="page-section space-y-6" id="catalog">
<div className="flex flex-col gap-2">
<h2 className="font-serif text-3xl tracking-tight text-[var(--primary)]">Catalog &amp; Products</h2>
<p className="text-sm text-[var(--text-muted)]">Manage your product catalogs and inventory items.</p>
</div>

<div className="relative w-full max-w-xl">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full rounded-xl border border-[var(--border)] bg-white py-3 pl-12 pr-4 text-sm shadow-sm outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]" placeholder="Search products by name..." type="text"/>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-4 space-y-6">
<div className="bg-white rounded-[24px] p-6 border border-[var(--border)] shadow-sm">
<h3 className="font-serif text-xl text-[var(--primary)] mb-4">Add Category</h3>
<form className="space-y-4">
<div>
<label className="block text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Category Name</label>
<input className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:border-[var(--accent)] outline-none bg-[var(--bg-soft)]" placeholder="e.g. Scented Candles" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Description</label>
<textarea className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:border-[var(--accent)] outline-none bg-[var(--bg-soft)] resize-none" placeholder="Brief description of the category..." rows="3"></textarea>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Category Image</label>
<div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-[var(--accent)] transition h-24">
<iconify-icon className="mb-1" icon="solar:upload-linear"></iconify-icon>
<span className="text-xs font-medium">Click to upload</span>
</div>
</div>
<button className="w-full bg-[var(--primary)] text-white py-3 rounded-xl text-sm font-medium hover:opacity-90 transition" type="button">Save Category</button>
</form>
</div>
</div>

<div className="lg:col-span-8 space-y-6">
<div className="bg-white rounded-[24px] border border-[var(--border)] shadow-sm overflow-hidden">
<div className="bg-rose-50/50 px-6 py-4 border-b border-[var(--border)]">
<h3 className="font-serif text-xl text-[var(--primary)]">Add New Product</h3>
</div>
<div className="p-6">
<form className="space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
<div>
<label className="block text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Product Name</label>
<input className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:border-[var(--accent)] outline-none bg-[var(--bg-soft)]" placeholder="e.g. Vanilla Bean Candle" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Category</label>
<select className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:border-[var(--accent)] outline-none bg-[var(--bg-soft)] text-gray-600">
<option value="">Select a Category</option>
<option value="1">Candles</option>
<option value="2">Packaging</option>
<option value="3">Chocolates</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Stock Status</label>
<select className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:border-[var(--accent)] outline-none bg-[var(--bg-soft)] text-gray-600">
<option value="in_stock">In Stock</option>
<option value="out_of_stock">Out of Stock</option>
</select>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Description</label>
<textarea className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:border-[var(--accent)] outline-none bg-[var(--bg-soft)] resize-none" placeholder="Product details..." rows="4"></textarea>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Product Image</label>
<div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 cursor-pointer hover:border-[var(--accent)] transition h-16">
<iconify-icon className="mr-2" icon="solar:camera-linear"></iconify-icon>
<span className="text-xs font-medium">Upload Media</span>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-100 pt-6">
<div className="flex justify-between items-center mb-4">
<div>
<h4 className="text-sm font-semibold text-[var(--text-main)]">Product Variants</h4>
<p className="text-xs text-[var(--text-muted)]">Add sizes, colors, or other variations.</p>
</div>
<button className="flex items-center gap-1 bg-[var(--bg-soft)] text-[var(--accent)] px-3 py-1.5 rounded-lg text-xs font-medium border border-rose-100 hover:bg-rose-50 transition" onclick="addVariantRow()" type="button">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Variant
                                                </button>
</div>
<div className="space-y-3" id="variants-container">

<div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-200">
<div className="flex-1">
<input className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[var(--accent)]" placeholder="Variant Name (e.g. Small - 100g)" type="text"/>
</div>
<div className="w-32">
<input className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[var(--accent)]" placeholder="Price (₹)" type="number"/>
</div>
<button className="text-gray-400 hover:text-red-500 transition p-2" onclick="this.parentElement.remove()" type="button">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-200">
<div className="flex-1">
<input className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[var(--accent)]" placeholder="Variant Name (e.g. Large - 250g)" type="text"/>
</div>
<div className="w-32">
<input className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[var(--accent)]" placeholder="Price (₹)" type="number"/>
</div>
<button className="text-gray-400 hover:text-red-500 transition p-2" onclick="this.parentElement.remove()" type="button">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-gray-100 pt-6 flex justify-end">
<button className="bg-[var(--primary)] text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg shadow-rose-100 hover:opacity-90 transition" type="button">Save Product</button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="page-section space-y-6" id="customization">
<div className="flex justify-between items-center border-b border-[var(--border)] pb-4">
<div>
<h2 className="font-serif text-3xl tracking-tight text-[var(--primary)]">Customizations</h2>
<p className="text-sm text-[var(--text-muted)] mt-1">Manage global customization rules or build specific flows.</p>
</div>
<button className="bg-[var(--primary)] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 flex items-center gap-2 transition shadow-lg shadow-rose-100" onclick="toggleCustomizationForm()">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Create New Customization
                        </button>
</div>

<div className="hidden bg-white rounded-[24px] border border-[var(--accent)] shadow-sm overflow-hidden mb-8 transition-all" id="new-customization-card">
<div className="bg-rose-50/50 px-6 py-4 border-b border-[var(--border)] flex justify-between items-center">
<h3 className="font-serif text-xl text-[var(--primary)]">New Customization Flow</h3>
<button className="text-gray-400 hover:text-[var(--text-main)]" onclick="toggleCustomizationForm()"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="p-6">
<div className="max-w-3xl space-y-6">
<div>
<label className="block text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Select Target Product</label>
<select className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:border-[var(--accent)] outline-none bg-[var(--bg-soft)] text-[var(--text-main)]">
<option value="">Choose a product to apply these steps...</option>
<option value="p1">Premium Hamper Box</option>
<option value="p2">Custom Engraved Pen</option>
</select>
</div>
<div className="border-t border-gray-100 pt-6">
<div className="flex justify-between items-center mb-4">
<h4 className="text-sm font-semibold text-[var(--text-main)]">Customization Steps</h4>
<button className="text-[var(--accent)] text-xs font-medium hover:underline flex items-center gap-1" onclick="addCustomizationStep()" type="button">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Step
                                        </button>
</div>
<div className="space-y-4" id="customization-steps-container">

<div className="bg-gray-50 border border-gray-200 rounded-xl p-4 relative group">
<span className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-bold text-gray-400 uppercase tracking-wide border border-gray-200 rounded-md">Step 1</span>
<button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition" onclick="this.parentElement.remove()" type="button">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
<div className="grid grid-cols-2 gap-4 mt-2">
<div>
<label className="block text-xs text-gray-500 mb-1">Step Name (e.g. Choose Ribbon)</label>
<input className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[var(--accent)]" type="text"/>
</div>
<div>
<label className="block text-xs text-gray-500 mb-1">Input Type</label>
<select className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[var(--accent)] text-gray-600">
<option value="dropdown">Dropdown Selection</option>
<option value="text">Text Input</option>
<option value="image">Image Upload</option>
</select>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-end pt-4">
<button className="bg-[var(--primary)] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition shadow-md shadow-rose-100" type="button">Save Customization Flow</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-[24px] p-6 border border-[var(--border)]">
<div className="flex justify-between mb-4">
<h4 className="font-medium text-[var(--primary)]">Global Box Styles</h4>
<button className="text-[var(--accent)] text-xs"><iconify-icon icon="solar:add-circle-bold"></iconify-icon></button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-lg bg-black"></div>
<div><p className="text-sm font-medium">Matte Black</p><p className="text-xs text-gray-400">Premium</p></div>
<div className="ml-auto"><input checked="" className="toggle-checkbox accent-[var(--accent)]" type="checkbox"/></div>
</div>
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-lg bg-pink-200"></div>
<div><p className="text-sm font-medium">Baby Pink</p><p className="text-xs text-gray-400">Standard</p></div>
<div className="ml-auto"><input checked="" className="toggle-checkbox accent-[var(--accent)]" type="checkbox"/></div>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] p-6 border border-[var(--border)]">
<div className="flex justify-between mb-4">
<h4 className="font-medium text-[var(--primary)]">Global Ribbons</h4>
<button className="text-[var(--accent)] text-xs"><iconify-icon icon="solar:add-circle-bold"></iconify-icon></button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="h-4 w-12 rounded bg-red-800"></div>
<div><p className="text-sm font-medium">Satin Burgundy</p></div>
<div className="ml-auto"><input checked="" className="toggle-checkbox accent-[var(--accent)]" type="checkbox"/></div>
</div>
<div className="flex items-center gap-3">
<div className="h-4 w-12 rounded bg-yellow-400"></div>
<div><p className="text-sm font-medium">Gold Silk</p></div>
<div className="ml-auto"><input checked="" className="toggle-checkbox accent-[var(--accent)]" type="checkbox"/></div>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] p-6 border border-[var(--border)]">
<h4 className="font-medium text-[var(--primary)] mb-4">Card Settings</h4>
<div className="space-y-4">
<div>
<label className="text-xs font-semibold text-gray-500">Character Limit</label>
<input className="w-full mt-1 border-gray-200 rounded-lg text-sm bg-gray-50 p-2 outline-none" type="number" value="250"/>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-700">Allow Handwritten Font</span>
<div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:border-[var(--accent)]" id="font-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer" htmlFor="font-toggle"></label>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="page-section space-y-6" id="orders">
<div className="flex justify-between items-center">
<h2 className="font-serif text-3xl tracking-tight text-[var(--primary)]">Order Management</h2>
<button className="bg-[var(--primary)] text-white px-4 py-2 rounded-xl text-xs font-medium hover:opacity-90">Export CSV</button>
</div>
<div className="flex gap-6 border-b border-[var(--border)] text-sm font-medium text-[var(--text-muted)]">
<button className="pb-3 border-b-2 border-[var(--primary)] text-[var(--primary)]">All Orders</button>
<button className="pb-3 hover:text-[var(--primary)] transition">Pending</button>
<button className="pb-3 hover:text-[var(--primary)] transition">Dispatched</button>
<button className="pb-3 hover:text-[var(--primary)] transition">Returns</button>
</div>
<div className="rounded-[24px] bg-white shadow-sm border border-[var(--border)] overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-[var(--bg-soft)] text-xs uppercase text-[var(--text-muted)]">
<tr>
<th className="px-6 py-4 font-semibold">Order ID</th>
<th className="px-6 py-4 font-semibold">Customer</th>
<th className="px-6 py-4 font-semibold">Date</th>
<th className="px-6 py-4 font-semibold">Status</th>
<th className="px-6 py-4 font-semibold text-right">Total</th>
<th className="px-6 py-4"></th>
</tr>
</thead>
<tbody className="divide-y divide-[var(--border)]">
<tr className="hover:bg-gray-50 transition">
<td className="px-6 py-4 font-medium">#ORD-9082</td>
<td className="px-6 py-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-rose-200 text-[var(--primary)] flex items-center justify-center text-[10px] font-bold">AS</div> Ananya S.
                                    </td>
<td className="px-6 py-4 text-[var(--text-muted)]">Oct 24, 2023</td>
<td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs font-semibold">Processing</span></td>
<td className="px-6 py-4 text-right font-medium">₹2,499</td>
<td className="px-6 py-4 text-right text-gray-400 cursor-pointer hover:text-[var(--primary)]"><iconify-icon icon="solar:eye-linear"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</section>
<section className="page-section space-y-6" id="products">
<div className="flex justify-between items-center">
<h2 className="font-serif text-3xl tracking-tight text-[var(--primary)]">Products Overview</h2>
<button className="bg-[var(--primary)] text-white px-4 py-2 rounded-xl text-xs font-medium hover:opacity-90" onclick="switchPage('catalog')">Go to Catalog</button>
</div>
<div className="flex gap-2 p-1 bg-white rounded-xl w-fit border border-[var(--border)]">
<button className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--bg-soft)] text-[var(--accent)] transition" id="tab-prod-active" onclick="toggleProductTab('active')">Active Products</button>
<button className="px-4 py-2 rounded-lg text-xs font-semibold text-[var(--text-muted)] hover:bg-gray-50 transition relative" id="tab-prod-drafts" onclick="toggleProductTab('drafts')">
                            Drafts <span className="hidden absolute top-1 right-1 h-2 w-2 rounded-full bg-[var(--accent)]" id="draft-badge"></span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" id="products-active-view">
<div className="bg-white rounded-[20px] p-4 shadow-sm border border-[var(--border)] group hover:-translate-y-1 transition">
<div className="h-40 rounded-xl bg-gray-100 mb-4 overflow-hidden relative">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1602143407151-011141957516?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<h4 className="font-medium text-[var(--text-main)]">Lavender Mist Candle</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-xs text-[var(--text-muted)]">Stock: 45</span>
<span className="font-semibold text-[var(--primary)]">₹1,200</span>
</div>
</div>
</div>
<div className="hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" id="products-drafts-view">
<div className="bg-gray-50 rounded-[20px] p-4 shadow-sm border border-[var(--border)] border-dashed relative">
<span className="absolute top-4 left-4 bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Draft</span>
<div className="h-40 rounded-xl bg-white mb-4 flex items-center justify-center text-gray-300">
<iconify-icon icon="solar:gallery-linear" style={{fontSize: '32px'}}></iconify-icon>
</div>
<h4 className="font-medium text-gray-600">Untitled Product (Draft)</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-xs text-[var(--text-muted)]">Edited 2m ago</span>
<button className="text-xs text-[var(--accent)] font-semibold">Resume →</button>
</div>
</div>
</div>
</section>
<section className="page-section space-y-6" id="inventory">
<h2 className="font-serif text-3xl tracking-tight text-[var(--primary)]">Inventory Status</h2>
<div className="rounded-[24px] bg-white shadow-sm border border-[var(--border)] p-6">
<table className="w-full text-left text-sm">
<thead className="text-xs uppercase text-[var(--text-muted)] border-b border-[var(--border)]">
<tr>
<th className="py-3">Item Name</th>
<th className="py-3">Stock Level</th>
<th className="py-3">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-[var(--border)]">
<tr>
<td className="py-4 font-medium">Red Velvet Ribbon (2m)</td>
<td className="py-4">
<div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="bg-red-500 h-full w-[10%]"></div></div>
</td>
<td className="py-4"><span className="bg-red-50 text-red-600 px-2 py-1 rounded-md text-xs font-semibold">Low Stock</span></td>
</tr>
</tbody>
</table>
</div>
</section>
<section className="page-section space-y-6" id="hamper-build">
<h2 className="font-serif text-3xl tracking-tight text-[var(--primary)]">Hamper Build</h2>
<div className="col-span-8 bg-white rounded-[24px] border border-[var(--border)] p-8 shadow-inner flex items-center justify-center h-[400px]">
<p className="text-[var(--text-muted)]">Drag and drop engine...</p>
</div>
</section>
<section className="page-section space-y-6" id="analytics">
<h2 className="font-serif text-3xl tracking-tight text-[var(--primary)]">Performance</h2>
<div className="rounded-[24px] bg-white p-8 shadow-sm border border-[var(--border)] h-96 flex justify-center items-center text-gray-400">
<p>Analytics View</p>
</div>
</section>
<section className="page-section space-y-6" id="settings">
<h2 className="font-serif text-3xl tracking-tight text-[var(--primary)]">Store Settings</h2>
<div className="bg-white rounded-[24px] border border-[var(--border)] p-8 max-w-3xl">
<p className="text-gray-400">Settings form...</p>
</div>
</section>
<section className="page-section space-y-6" id="customers">
<h2 className="font-serif text-3xl tracking-tight text-[var(--primary)]">Customers</h2>
<div className="rounded-[24px] bg-white shadow-sm border border-[var(--border)] overflow-hidden p-6">
<p className="text-gray-400">Customer table...</p>
</div>
</section>
<section className="page-section space-y-6" id="help-support">
<h2 className="font-serif text-3xl tracking-tight text-[var(--primary)]">Help &amp; Support</h2>
<div className="bg-white rounded-[24px] p-8 border border-[var(--border)]"><p className="text-gray-400">Support options...</p></div>
</section>
</div>
<div className="h-12"></div>
</div>
</main>



    </>
  );
}
