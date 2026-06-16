import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // STATE MANAGEMENT
        let currentView = 'catalog'; // catalog, login, admin
        let currentAdminTab = 'products'; // products, categories
        
        // Initial Data
        let categories = [
            { id: 'cat_1', name: 'Exterior' },
            { id: 'cat_2', name: 'Interior' },
            { id: 'cat_3', name: 'Performance' },
            { id: 'cat_4', name: 'Suspension' }
        ];

        let products = [
            { id: 'p1', sku: 'TRK-001', name: 'Carbon Fiber Diffuser', price: 450.00, categoryId: 'cat_1', image: 'lucide:wind' },
            { id: 'p2', sku: 'INT-045', name: 'Alloy Shift Knob', price: 85.00, categoryId: 'cat_2', image: 'lucide:settings-2' },
            { id: 'p3', sku: 'EXT-202', name: 'LED Fog Light Kit', price: 210.00, categoryId: 'cat_1', image: 'lucide:lightbulb' },
            { id: 'p4', sku: 'SUS-900', name: 'Coilover Suspension', price: 1250.00, categoryId: 'cat_4', image: 'lucide:activity' }
        ];

        // EDITING STATE
        let editingId = null;
        let modalType = null; // 'product' or 'category'

        // INITIALIZATION
        document.addEventListener('DOMContentLoaded', () => {
            renderCatalog();
            renderAdminProducts();
            renderAdminCategories();
            updateFilterDropdown();
        });

        // VIEW SWITCHING
        function switchView(view) {
            document.getElementById('catalogView').classList.add('hidden');
            document.getElementById('loginView').classList.add('hidden');
            document.getElementById('adminView').classList.add('hidden');
            
            document.getElementById('loginBtn').classList.toggle('hidden', view !== 'catalog');
            document.getElementById('adminControls').classList.toggle('hidden', view !== 'admin');
            
            if (view === 'admin') document.getElementById('adminControls').classList.add('flex'); // Fix flex display

            document.getElementById(view + 'View').classList.remove('hidden');
            currentView = view;
        }

        function switchAdminTab(tab) {
            currentAdminTab = tab;
            
            const pTab = document.getElementById('tabProducts');
            const cTab = document.getElementById('tabCategories');
            const pPanel = document.getElementById('adminProductsPanel');
            const cPanel = document.getElementById('adminCategoriesPanel');

            if (tab === 'products') {
                pTab.classList.replace('border-transparent', 'border-slate-900');
                pTab.classList.replace('text-slate-500', 'text-slate-900');
                cTab.classList.replace('border-slate-900', 'border-transparent');
                cTab.classList.replace('text-slate-900', 'text-slate-500');
                
                pPanel.classList.remove('hidden');
                cPanel.classList.add('hidden');
            } else {
                cTab.classList.replace('border-transparent', 'border-slate-900');
                cTab.classList.replace('text-slate-500', 'text-slate-900');
                pTab.classList.replace('border-slate-900', 'border-transparent');
                pTab.classList.replace('text-slate-900', 'text-slate-500');

                cPanel.classList.remove('hidden');
                pPanel.classList.add('hidden');
            }
        }

        // RENDERING FUNCTIONS
        function renderImageContent(imageSource, isCard = true) {
            // Check if string is a lucide icon
            if (imageSource && imageSource.startsWith('lucide:')) {
                const width = isCard ? '48' : '16';
                return `<iconify-icon icon="${imageSource}" width="${width}" stroke-width="1"></iconify-icon>`;
            } 
            // Assume it's an image URL (base64 or http)
            else if (imageSource) {
                return `<img src="${imageSource}" class="h-full w-full object-cover" alt="Product Image">`;
            }
            return '';
        }

        function renderCatalog() {
            const grid = document.getElementById('catalogGrid');
            const search = document.getElementById('searchInput').value.toLowerCase();
            const filter = document.getElementById('catalogFilter').value;
            grid.innerHTML = '';

            let hasProducts = false;

            products.forEach(p => {
                const catName = categories.find(c => c.id === p.categoryId)?.name || 'Uncategorized';
                
                // Filter Logic
                if (filter !== 'all' && p.categoryId !== filter) return;
                if (search && !p.name.toLowerCase().includes(search) && !p.sku.toLowerCase().includes(search)) return;

                hasProducts = true;
                const imageContent = renderImageContent(p.image, true);
                
                const card = `
                <div class="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 fade-in">
                    <div class="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 flex items-center justify-center text-slate-300">
                        ${imageContent}
                        <div class="absolute right-3 top-3 rounded bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600 backdrop-blur-sm shadow-sm border border-slate-200/50">${p.sku}</div>
                    </div>
                    <div class="flex flex-1 flex-col p-4">
                        <div class="text-[10px] font-semibold uppercase text-blue-600 mb-1 tracking-tight">${catName}</div>
                        <h3 class="text-base font-medium text-slate-900">${p.name}</h3>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-sm font-semibold text-slate-900">$${p.price.toFixed(2)}</span>
                            <button class="rounded-full bg-slate-900 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-blue-600">
                                <iconify-icon icon="lucide:shopping-bag" width="16" stroke-width="1.5"></iconify-icon>
                            </button>
                        </div>
                    </div>
                </div>`;
                grid.innerHTML += card;
            });

            document.getElementById('catalogEmpty').classList.toggle('flex', !hasProducts);
            document.getElementById('catalogEmpty').classList.toggle('hidden', hasProducts);
        }

        function renderAdminProducts() {
            const tbody = document.getElementById('adminProductTable');
            tbody.innerHTML = '';
            
            products.forEach(p => {
                const catName = categories.find(c => c.id === p.categoryId)?.name || 'Uncategorized';
                const imageContent = renderImageContent(p.image, false);

                tbody.innerHTML += `
                <tr class="group hover:bg-slate-50/50 border-b border-slate-100 last:border-0">
                    <td class="px-6 py-3">
                        <div class="flex items-center gap-3">
                            <div class="h-8 w-8 overflow-hidden rounded bg-slate-100 flex items-center justify-center text-slate-400">
                                ${imageContent}
                            </div>
                            <div>
                                <div class="font-medium text-slate-900">${p.name}</div>
                                <div class="font-mono text-[10px] text-slate-400">${p.sku}</div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-3 text-xs text-slate-500"><span class="bg-slate-100 px-2 py-1 rounded text-slate-600">${catName}</span></td>
                    <td class="px-6 py-3 text-xs font-medium text-slate-900">$${p.price.toFixed(2)}</td>
                    <td class="px-6 py-3 text-right">
                        <div class="flex items-center justify-end gap-2">
                            <button onclick="openProductModal('${p.id}')" class="rounded p-1.5 text-slate-400 hover:bg-white hover:text-blue-600 hover:shadow-sm border border-transparent hover:border-slate-200 transition">
                                <iconify-icon icon="lucide:pencil" width="16" stroke-width="1.5"></iconify-icon>
                            </button>
                            <button onclick="deleteProduct('${p.id}')" class="rounded p-1.5 text-slate-400 hover:bg-white hover:text-red-600 hover:shadow-sm border border-transparent hover:border-slate-200 transition">
                                <iconify-icon icon="lucide:trash-2" width="16" stroke-width="1.5"></iconify-icon>
                            </button>
                        </div>
                    </td>
                </tr>`;
            });
        }

        function renderAdminCategories() {
            const tbody = document.getElementById('adminCategoryTable');
            tbody.innerHTML = '';

            categories.forEach(c => {
                const count = products.filter(p => p.categoryId === c.id).length;

                tbody.innerHTML += `
                <tr class="group hover:bg-slate-50/50 border-b border-slate-100 last:border-0">
                    <td class="px-6 py-3 font-medium text-slate-900">${c.name}</td>
                    <td class="px-6 py-3 text-right text-xs text-slate-500">${count} products</td>
                    <td class="px-6 py-3 text-right">
                        <div class="flex items-center justify-end gap-2">
                            <button onclick="openCategoryModal('${c.id}')" class="rounded p-1.5 text-slate-400 hover:bg-white hover:text-blue-600 hover:shadow-sm border border-transparent hover:border-slate-200 transition">
                                <iconify-icon icon="lucide:pencil" width="16" stroke-width="1.5"></iconify-icon>
                            </button>
                            <button onclick="deleteCategory('${c.id}')" class="rounded p-1.5 text-slate-400 hover:bg-white hover:text-red-600 hover:shadow-sm border border-transparent hover:border-slate-200 transition">
                                <iconify-icon icon="lucide:trash-2" width="16" stroke-width="1.5"></iconify-icon>
                            </button>
                        </div>
                    </td>
                </tr>`;
            });
        }

        function updateFilterDropdown() {
            const select = document.getElementById('catalogFilter');
            const currentVal = select.value;
            select.innerHTML = '<option value="all">All Categories</option>';
            categories.forEach(c => {
                select.innerHTML += `<option value="${c.id}">${c.name}</option>`;
            });
            select.value = currentVal; 
        }

        // CRUD ACTIONS
        function deleteProduct(id) {
            if(confirm('Are you sure you want to delete this product?')) {
                products = products.filter(p => p.id !== id);
                renderCatalog();
                renderAdminProducts();
                renderAdminCategories(); 
            }
        }

        function deleteCategory(id) {
            const used = products.some(p => p.categoryId === id);
            if(used) {
                if(!confirm('This category contains products. Deleting it will leave products uncategorized. Continue?')) return;
                products = products.map(p => p.categoryId === id ? {...p, categoryId: null} : p);
            } else {
                if(!confirm('Delete this category?')) return;
            }
            
            categories = categories.filter(c => c.id !== id);
            renderAdminCategories();
            renderCatalog();
            renderAdminProducts();
            updateFilterDropdown();
        }

        // IMAGE HANDLING
        function handleImageUpload(input) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Update hidden input
                    document.getElementById('imageInput').value = e.target.result;
                    // Update preview
                    const preview = document.getElementById('imagePreview');
                    preview.innerHTML = `<img src="${e.target.result}" class="h-full w-full object-cover">`;
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        // MODAL LOGIC
        function closeModal() {
            document.getElementById('modalOverlay').classList.add('hidden');
            editingId = null;
            modalType = null;
        }

        function openProductModal(id = null) {
            modalType = 'product';
            editingId = id;
            const modal = document.getElementById('modalOverlay');
            const title = document.getElementById('modalTitle');
            const content = document.getElementById('modalContent');
            
            title.innerText = id ? 'Edit Product' : 'Add New Product';
            
            let p = id ? products.find(x => x.id === id) : { sku: '', name: '', price: '', categoryId: '', image: 'lucide:box' };
            
            // Build Category Options
            let catOptions = `<option value="">Select Category</option>`;
            categories.forEach(c => {
                const selected = p.categoryId === c.id ? 'selected' : '';
                catOptions += `<option value="${c.id}" ${selected}>${c.name}</option>`;
            });

            // Determine preview content
            let previewContent = '';
            if (p.image.startsWith('lucide:')) {
                previewContent = `<iconify-icon icon="${p.image}" width="24" stroke-width="1.5"></iconify-icon>`;
            } else {
                previewContent = `<img src="${p.image}" class="h-full w-full object-cover">`;
            }

            content.innerHTML = `
                <div>
                    <label class="mb-1 block text-xs font-medium text-slate-700">Product Image</label>
                    <div class="flex items-center gap-4">
                        <div id="imagePreview" class="h-14 w-14 overflow-hidden rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-400">
                            ${previewContent}
                        </div>
                        <label class="cursor-pointer flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition shadow-sm hover:text-slate-900">
                            <iconify-icon icon="lucide:upload" width="14"></iconify-icon>
                            Upload Photo
                            <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this)">
                        </label>
                    </div>
                    <input type="hidden" name="image" id="imageInput" value="${p.image}">
                </div>
                <div>
                    <label class="mb-1 block text-xs font-medium text-slate-700">Product Name</label>
                    <input name="name" type="text" value="${p.name}" required class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none placeholder-slate-400">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="mb-1 block text-xs font-medium text-slate-700">SKU</label>
                        <input name="sku" type="text" value="${p.sku}" required class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none font-mono placeholder-slate-400">
                    </div>
                    <div>
                        <label class="mb-1 block text-xs font-medium text-slate-700">Price ($)</label>
                        <input name="price" type="number" step="0.01" value="${p.price}" required class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none placeholder-slate-400">
                    </div>
                </div>
                <div>
                    <label class="mb-1 block text-xs font-medium text-slate-700">Category</label>
                    <select name="categoryId" class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none bg-white text-slate-700">
                        ${catOptions}
                    </select>
                </div>
            `;
            modal.classList.remove('hidden');
        }

        function openCategoryModal(id = null) {
            modalType = 'category';
            editingId = id;
            const modal = document.getElementById('modalOverlay');
            const title = document.getElementById('modalTitle');
            const content = document.getElementById('modalContent');

            title.innerText = id ? 'Edit Category' : 'Add New Category';
            
            let c = id ? categories.find(x => x.id === id) : { name: '' };

            content.innerHTML = `
                <div>
                    <label class="mb-1 block text-xs font-medium text-slate-700">Category Name</label>
                    <input name="name" type="text" value="${c.name}" required class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none placeholder-slate-400" placeholder="e.g., Electronics">
                </div>
            `;
            modal.classList.remove('hidden');
        }

        function handleModalSubmit(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            
            if (modalType === 'product') {
                const newData = {
                    id: editingId || 'p_' + Date.now(),
                    sku: formData.get('sku'),
                    name: formData.get('name'),
                    price: parseFloat(formData.get('price')),
                    categoryId: formData.get('categoryId'),
                    image: formData.get('image') // Now gets value from hidden input
                };

                if (editingId) {
                    products = products.map(p => p.id === editingId ? { ...p, ...newData } : p);
                } else {
                    products.push(newData);
                }
                renderAdminProducts();
                renderCatalog();
                renderAdminCategories(); 
            } 
            else if (modalType === 'category') {
                const newName = formData.get('name');
                if (editingId) {
                    categories = categories.map(c => c.id === editingId ? { ...c, name: newName } : c);
                } else {
                    categories.push({ id: 'cat_' + Date.now(), name: newName });
                }
                renderAdminCategories();
                renderAdminProducts();
                renderCatalog(); 
                updateFilterDropdown();
            }

            closeModal();
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2 cursor-pointer" onclick="switchView('catalog')">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">AERO<span className="font-light text-slate-500">DYN</span></span>
</div>
<div className="hidden items-center gap-6 md:flex">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900" onclick="switchView('catalog')">Catalog</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900">New Arrivals</button>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900" id="loginBtn" onclick="switchView('login')">
<iconify-icon icon="lucide:lock" strokeWidth="1.5" width="14"></iconify-icon>
                    Admin Access
                </button>
<div className="hidden items-center gap-3" id="adminControls">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900" onclick="switchView('catalog')">Exit Admin</button>
<div className="h-4 w-px bg-slate-200"></div>
<span className="flex items-center gap-1.5 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
<span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        Logged In
                    </span>
</div>
</div>
</div>
</nav>

<main className="mx-auto min-h-screen max-w-7xl px-6 py-12">

<div className="hidden fade-in mx-auto mt-20 max-w-sm rounded-xl border border-slate-200 bg-white p-8 shadow-sm" id="loginView">
<div className="mb-6 text-center">
<h2 className="text-xl font-medium tracking-tight text-slate-900">Admin Login</h2>
<p className="mt-2 text-sm text-slate-500">Enter credentials to manage inventory.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); switchView('admin');">
<div>
<label className="mb-1.5 block text-xs font-medium text-slate-700">Email Address</label>
<input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" type="email" value="admin@aerodyn.com"/>
</div>
<div>
<label className="mb-1.5 block text-xs font-medium text-slate-700">Password</label>
<input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" type="password" value="password"/>
</div>
<button className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition" type="submit">Sign In</button>
</form>
<button className="mt-4 w-full text-center text-xs text-slate-400 hover:text-slate-600" onclick="switchView('catalog')">Back to Catalog</button>
</div>

<div className="fade-in block" id="catalogView">
<div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div>
<h1 className="text-3xl font-medium tracking-tight text-slate-900">Performance Parts</h1>
<p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-500">Premium aftermarket accessories. Engineered for durability and aerodynamic efficiency.</p>
</div>
<div className="flex items-center gap-3">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600" icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
<input className="h-10 rounded-lg border border-slate-200 bg-white pl-9 pr-4 text-sm text-slate-900 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-100 w-48 sm:w-64" id="searchInput" onkeyup="renderCatalog()" placeholder="Search..." type="text"/>
</div>

<select className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 outline-none hover:bg-slate-50 focus:border-blue-500" id="catalogFilter" onchange="renderCatalog()">
<option value="all">All Categories</option>

</select>
</div>
</div>

<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" id="catalogGrid">

</div>

<div className="hidden flex-col items-center justify-center py-20 text-center" id="catalogEmpty">
<div className="mb-3 rounded-full bg-slate-100 p-4 text-slate-400">
<iconify-icon icon="lucide:package-open" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">No products found</h3>
<p className="text-xs text-slate-500">Try adjusting your search or filter.</p>
</div>
</div>

<div className="hidden fade-in" id="adminView">

<div className="mb-8 border-b border-slate-200 pb-0">
<div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-1">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Dashboard</h2>
<p className="mt-1 text-sm text-slate-500">Manage your product inventory and categories.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 shadow-sm transition" onclick="openProductModal()">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="16"></iconify-icon>
                            Add Product
                        </button>
</div>
</div>

<div className="flex gap-6">
<button className="border-b-2 border-slate-900 px-1 pb-3 text-sm font-medium text-slate-900 transition-colors" id="tabProducts" onclick="switchAdminTab('products')">Products</button>
<button className="border-b-2 border-transparent px-1 pb-3 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors" id="tabCategories" onclick="switchAdminTab('categories')">Categories</button>
</div>
</div>

<div className="block animate-in fade-in slide-in-from-bottom-2 duration-300" id="adminProductsPanel">
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
<tr>
<th className="px-6 py-3 font-medium">Product</th>
<th className="px-6 py-3 font-medium">Category</th>
<th className="px-6 py-3 font-medium">Price</th>
<th className="px-6 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100" id="adminProductTable">

</tbody>
</table>
</div>
</div>
</div>

<div className="hidden animate-in fade-in slide-in-from-bottom-2 duration-300" id="adminCategoriesPanel">
<div className="mb-6 flex items-center justify-between rounded-lg border border-slate-200 bg-blue-50/30 p-4">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="lucide:info" width="18"></iconify-icon>
<span className="text-xs sm:text-sm">Manage product categories here. Deleting a category will uncategorize associated products.</span>
</div>
<button className="whitespace-nowrap rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition shadow-sm" onclick="openCategoryModal()">
                        + New Category
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
<tr>
<th className="px-6 py-3 font-medium">Category Name</th>
<th className="px-6 py-3 font-medium text-right">Items</th>
<th className="px-6 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100" id="adminCategoryTable">

</tbody>
</table>
</div>
</div>
</div>
</div>
</main>

<div className="modal-backdrop fixed inset-0 z-50 hidden flex items-center justify-center p-4" id="modalOverlay">
<div className="w-full max-w-md transform overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-2xl transition-all fade-in">
<div className="flex items-center justify-between mb-5">
<h3 className="text-lg font-semibold text-slate-900" id="modalTitle">Edit Item</h3>
<button className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition" onclick="closeModal()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
<form id="modalForm" onsubmit="handleModalSubmit(event)">
<div className="space-y-4" id="modalContent">

</div>
<div className="mt-6 flex justify-end gap-3">
<button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 transition" onclick="closeModal()" type="button">Cancel</button>
<button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition" type="submit">Save Changes</button>
</div>
</form>
</div>
</div>


    </>
  );
}
