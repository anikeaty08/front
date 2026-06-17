import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State
        let lineItems = [];
        let currentId = 0;

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            addLineItem('manpower'); // Default first item
        });

        // Navigation
        function showPage(pageId) {
            const pages = ['list', 'create', 'preview'];
            pages.forEach(id => {
                document.getElementById(`page-${id}`).classList.add('hidden');
            });
            document.getElementById(`page-${pageId}`).classList.remove('hidden');
            
            if(pageId === 'preview') updatePreview();
        }

        // Logic to Add Line Item
        function addLineItem(type) {
            currentId++;
            const newItem = {
                id: currentId,
                type: type,
                subtype: getDefaultSubtype(type), // Helper for selects
                desc: '',
                qty: 1,
                rate: 0,
                total: 0
            };
            lineItems.push(newItem);
            renderLineItem(newItem);
            lucide.createIcons();
            calculateTotals();
        }

        function getDefaultSubtype(type) {
            const defaults = {
                'manpower': 'Internal',
                'materials': 'Raw Material',
                'measurement': 'Energy',
                'milieu': 'Sustainability'
            };
            return defaults[type] || '';
        }

        // Render HTML for a Line Item
        function renderLineItem(item) {
            const container = document.getElementById('line-items-container');
            const div = document.createElement('div');
            div.id = `item-${item.id}`;
            div.className = "group border border-gray-200 rounded-lg p-4 bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all relative";
            
            let inputsHtml = '';
            
            // Common inputs generation based on type
            if (item.type === 'manpower') {
                inputsHtml = `
                    <div class="grid grid-cols-12 gap-3 mt-3">
                        <div class="col-span-3">
                             <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Source</label>
                             <select onchange="updateItem(${item.id}, 'subtype', this.value)" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                                <option value="Internal">Internal</option>
                                <option value="External">External</option>
                             </select>
                        </div>
                        <div class="col-span-3">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Role</label>
                            <input type="text" oninput="updateItem(${item.id}, 'desc', this.value)" placeholder="e.g. Engineer" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Hours</label>
                            <input type="number" oninput="updateItem(${item.id}, 'qty', this.value)" value="1" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Rate</label>
                            <input type="number" oninput="updateItem(${item.id}, 'rate', this.value)" placeholder="0.00" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2 flex flex-col justify-end">
                            <div class="text-right font-medium text-gray-900 text-sm py-1.5 item-total">$0.00</div>
                        </div>
                    </div>
                `;
            } else if (item.type === 'materials') {
                inputsHtml = `
                    <div class="grid grid-cols-12 gap-3 mt-3">
                        <div class="col-span-3">
                             <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Type</label>
                             <select onchange="updateItem(${item.id}, 'subtype', this.value)" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                                <option value="Raw Material">Raw Material</option>
                                <option value="Product">Product</option>
                                <option value="Service">Service</option>
                             </select>
                        </div>
                        <div class="col-span-3">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Name</label>
                            <input type="text" oninput="updateItem(${item.id}, 'desc', this.value)" placeholder="Item Name" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Qty</label>
                            <input type="number" oninput="updateItem(${item.id}, 'qty', this.value)" value="1" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Cost</label>
                            <input type="number" oninput="updateItem(${item.id}, 'rate', this.value)" placeholder="0.00" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2 flex flex-col justify-end">
                            <div class="text-right font-medium text-gray-900 text-sm py-1.5 item-total">$0.00</div>
                        </div>
                    </div>
                `;
            } else if (item.type === 'measurement') {
                inputsHtml = `
                    <div class="grid grid-cols-12 gap-3 mt-3">
                        <div class="col-span-3">
                             <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Category</label>
                             <select onchange="updateItem(${item.id}, 'subtype', this.value)" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                                <option value="Energy">Energy</option>
                                <option value="Fuel">Fuel</option>
                                <option value="Consumables">Consumables</option>
                             </select>
                        </div>
                        <div class="col-span-3">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Unit</label>
                            <input type="text" oninput="updateItem(${item.id}, 'desc', this.value)" placeholder="e.g. kWh/Liters" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Qty</label>
                            <input type="number" oninput="updateItem(${item.id}, 'qty', this.value)" value="1" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Cost/Unit</label>
                            <input type="number" oninput="updateItem(${item.id}, 'rate', this.value)" placeholder="0.00" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2 flex flex-col justify-end">
                            <div class="text-right font-medium text-gray-900 text-sm py-1.5 item-total">$0.00</div>
                        </div>
                    </div>
                `;
            } else if (item.type === 'milieu') {
                inputsHtml = `
                    <div class="grid grid-cols-12 gap-3 mt-3">
                        <div class="col-span-4">
                             <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Category</label>
                             <select onchange="updateItem(${item.id}, 'subtype', this.value)" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                                <option value="Carbon Credits">Carbon Credits</option>
                                <option value="Sustainability">Sustainability</option>
                                <option value="Workplace Safety">Workplace Safety</option>
                             </select>
                        </div>
                        <div class="col-span-6">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Description</label>
                            <input type="text" oninput="updateItem(${item.id}, 'desc', this.value)" placeholder="Compliance or Offset description" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Cost</label>
                            <input type="number" oninput="updateItem(${item.id}, 'rate', this.value)" placeholder="0.00" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                         <div class="hidden">
                            <input type="hidden" oninput="updateItem(${item.id}, 'qty', this.value)" value="1">
                        </div>
                    </div>
                `;
            } else if (['machinery', 'minutes', 'mileage', 'middlemen'].includes(item.type)) {
                // Rate x Qty Types
                inputsHtml = `
                    <div class="grid grid-cols-12 gap-3 mt-3">
                        <div class="col-span-6">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Description</label>
                            <input type="text" oninput="updateItem(${item.id}, 'desc', this.value)" placeholder="Details..." class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">
                                ${item.type === 'minutes' ? 'Minutes' : item.type === 'mileage' ? 'Distance' : 'Qty'}
                            </label>
                            <input type="number" oninput="updateItem(${item.id}, 'qty', this.value)" value="1" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Rate</label>
                            <input type="number" oninput="updateItem(${item.id}, 'rate', this.value)" placeholder="0.00" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2 flex flex-col justify-end">
                            <div class="text-right font-medium text-gray-900 text-sm py-1.5 item-total">$0.00</div>
                        </div>
                    </div>
                `;
            } else {
                // Flat Fee Types (Money, Method, Management, Morale, Marketing, Maintenance, Mission, Mitigation)
                 inputsHtml = `
                    <div class="grid grid-cols-12 gap-3 mt-3">
                        <div class="col-span-10">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Description</label>
                            <input type="text" oninput="updateItem(${item.id}, 'desc', this.value)" placeholder="Details..." class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-[10px] uppercase text-gray-400 font-medium mb-1">Amount</label>
                            <input type="number" oninput="updateItem(${item.id}, 'rate', this.value)" placeholder="0.00" class="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none">
                        </div>
                        <div class="hidden">
                            <input type="hidden" oninput="updateItem(${item.id}, 'qty', this.value)" value="1">
                        </div>
                    </div>
                `;
            }

            // Common Wrapper
            div.innerHTML = `
                <div class="flex justify-between items-center mb-1">
                    <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-500">
                             <i data-lucide="${getTypeIcon(item.type)}" class="w-3.5 h-3.5"></i>
                        </div>
                        <span class="text-xs font-medium text-gray-700 capitalize">${item.type}</span>
                    </div>
                    <button onclick="removeLineItem(${item.id})" class="text-gray-300 hover:text-red-500 transition-colors">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
                ${inputsHtml}
            `;
            container.appendChild(div);
        }

        function getTypeIcon(type) {
            const map = { 
                manpower: 'users', 
                materials: 'package', 
                machinery: 'settings-2', 
                money: 'banknote', 
                method: 'git-merge', 
                management: 'briefcase', 
                minutes: 'clock', 
                mileage: 'map-pin', 
                measurement: 'gauge', 
                morale: 'smile', 
                marketing: 'megaphone', 
                milieu: 'leaf', 
                maintenance: 'wrench', 
                mission: 'target', 
                mitigation: 'shield-check', 
                middlemen: 'user-plus' 
            };
            return map[type] || 'circle';
        }

        // Calculations
        function updateItem(id, field, value) {
            const item = lineItems.find(i => i.id === id);
            if (!item) return;

            if (field === 'desc' || field === 'subtype') {
                item[field] = value;
            } else {
                item[field] = parseFloat(value) || 0;
            }

            // Calc Logic
            if(item.type === 'milieu' || ['money', 'method', 'management', 'morale', 'marketing', 'maintenance', 'mission', 'mitigation'].includes(item.type)) {
                // Flat fee logic (Qty usually 1 hidden)
                item.total = item.rate; 
            } else {
                // Standard logic: qty * rate
                item.total = item.qty * item.rate;
            }

            // Update DOM Item Total
            const totalEl = document.querySelector(`#item-${id} .item-total`);
            if (totalEl) totalEl.innerText = formatMoney(item.total);

            calculateTotals();
        }

        function removeLineItem(id) {
            lineItems = lineItems.filter(i => i.id !== id);
            document.getElementById(`item-${id}`).remove();
            calculateTotals();
        }

        function calculateTotals() {
            const subtotal = lineItems.reduce((acc, curr) => acc + curr.total, 0);
            const taxRate = parseFloat(document.getElementById('tax-rate').value) || 0;
            const discount = parseFloat(document.getElementById('discount-val').value) || 0;

            const taxAmount = subtotal * (taxRate / 100);
            const grandTotal = (subtotal + taxAmount) - discount;

            document.getElementById('summary-subtotal').innerText = formatMoney(subtotal);
            document.getElementById('summary-tax').innerText = formatMoney(taxAmount);
            document.getElementById('summary-total').innerText = formatMoney(grandTotal);
        }

        function updatePreview() {
            // Update Title from Name Input
            const nameInput = document.getElementById('estimation-name-input').value;
            const idInput = document.getElementById('estimation-id-input').value;
            
            document.getElementById('preview-title').innerText = nameInput ? nameInput : 'ESTIMATE';
            document.getElementById('preview-id').innerText = idInput ? '#' + idInput.replace('#', '') : '#';

            const tbody = document.getElementById('preview-tbody');
            tbody.innerHTML = '';
            
            lineItems.forEach(item => {
                const tr = document.createElement('tr');
                tr.className = "border-b border-gray-50 text-xs text-gray-700";
                
                let title = item.type.charAt(0).toUpperCase() + item.type.slice(1);
                let detail = item.desc || '';
                
                if (item.subtype) {
                    title += ` (${item.subtype})`;
                }

                tr.innerHTML = `
                    <td class="py-3 font-medium">
                        <span class="block text-gray-900">${title}</span>
                        <span class="text-gray-500 text-[10px]">${detail}</span>
                    </td>
                    <td class="py-3 text-right text-gray-500 capitalize">${item.type}</td>
                    <td class="py-3 text-right font-medium text-gray-900">${formatMoney(item.total)}</td>
                `;
                tbody.appendChild(tr);
            });

            // Sync totals
            document.getElementById('preview-subtotal').innerText = document.getElementById('summary-subtotal').innerText;
            document.getElementById('preview-tax').innerText = document.getElementById('summary-tax').innerText;
            document.getElementById('preview-discount').innerText = '-' + formatMoney(parseFloat(document.getElementById('discount-val').value) || 0);
            document.getElementById('preview-total').innerText = document.getElementById('summary-total').innerText;
        }

        function formatMoney(amount) {
            return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex shrink-0 z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 font-semibold tracking-tight text-gray-900">
<div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center text-white text-xs">F</div>
<span>FinStack</span>
</div>
</div>
<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 bg-gray-100 text-gray-900 font-medium rounded-md transition-colors" href="#" onclick="showPage('list')">
<i className="w-4 h-4" data-lucide="file-text"></i>
                Estimations
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="receipt"></i>
                Invoices
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                Clients
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-semibold">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900">John Doe</span>
<span className="text-[10px] text-gray-400">Admin</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-gray-50 h-full relative">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 shrink-0 z-10">
<div className="flex items-center gap-4 lg:hidden">
<button className="text-gray-500 hover:text-gray-700">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<span className="font-semibold text-gray-900">Estimations</span>
</div>
<div className="flex-1 max-w-lg hidden lg:block">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-gray-400" placeholder="Search estimations..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4 ml-auto">
<button className="relative text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto relative" id="content-area">

<div className="p-6 max-w-7xl mx-auto w-full" id="page-list">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div>
<h1 className="text-xl font-medium tracking-tight text-gray-900">Estimations</h1>
<p className="text-gray-500 mt-1">Manage and track all your client estimates.</p>
</div>
<button className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-all shadow-sm active:scale-95 text-xs font-medium" onclick="showPage('create')">
<i className="w-4 h-4" data-lucide="plus"></i>
                        Create Estimation
                    </button>
</div>

<div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
<div className="flex bg-white border border-gray-200 rounded-md shadow-sm p-1">
<button className="px-3 py-1 rounded text-xs font-medium bg-gray-100 text-gray-900">All</button>
<button className="px-3 py-1 rounded text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Draft</button>
<button className="px-3 py-1 rounded text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Sent</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<table className="w-full text-left">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Estimate Name</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100" id="list-tbody">
<tr className="group hover:bg-gray-50 transition-colors cursor-pointer" onclick="showPage('create')">
<td className="px-6 py-4 font-mono text-xs text-gray-500">EST-2024-001</td>
<td className="px-6 py-4 font-medium text-gray-900">Website Redesign 2024</td>
<td className="px-6 py-4">Acme Corp</td>
<td className="px-6 py-4 text-gray-500">Oct 24, 2023</td>
<td className="px-6 py-4 text-gray-900">$4,250.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-700 border border-green-200">Accepted</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden h-full flex flex-col lg:flex-row overflow-hidden" id="page-create">

<div className="flex-1 overflow-y-auto p-6 lg:p-10 border-r border-gray-200 bg-white">
<div className="mb-8 flex items-center gap-2 text-gray-500 text-xs">
<button className="hover:text-gray-900" onclick="showPage('list')">Estimations</button>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">New Estimate</span>
</div>

<div className="grid grid-cols-12 gap-6 mb-10">

<div className="col-span-12 sm:col-span-8">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Estimation Name</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 placeholder:text-gray-400 transition-shadow" id="estimation-name-input" placeholder="e.g. Q4 Marketing Campaign" type="text"/>
</div>

<div className="col-span-12 sm:col-span-4">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Estimation ID</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs select-none">#</span>
<input className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-md text-sm font-mono text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-shadow" id="estimation-id-input" placeholder="EST-001" type="text" value="EST-2024-002"/>
</div>
</div>

<div className="col-span-12">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Client</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="building-2"></i>
<input className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors" placeholder="Search client..." type="text" value="Acme Corp"/>
</div>
</div>

<div className="col-span-6">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Estimate Date</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-gray-600" type="date"/>
</div>
<div className="col-span-6">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Expiry Date</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-gray-600" type="date"/>
</div>
</div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Estimation Parameters</h2>
<div className="relative group">
<button className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-xs bg-indigo-50 px-3 py-1.5 rounded-md transition-colors border border-indigo-100">
<i className="w-3.5 h-3.5" data-lucide="plus-circle"></i> Add Item
                            </button>

<div className="absolute right-0 top-full mt-1 w-64 bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden hidden group-hover:block z-50 max-h-96 overflow-y-auto">
<div className="grid grid-cols-1 divide-y divide-gray-100">
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('manpower')">
<i className="w-4 h-4 text-indigo-500" data-lucide="users"></i> Manpower
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('materials')">
<i className="w-4 h-4 text-blue-500" data-lucide="package"></i> Materials
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('machinery')">
<i className="w-4 h-4 text-gray-500" data-lucide="settings-2"></i> Machinery
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('money')">
<i className="w-4 h-4 text-green-500" data-lucide="banknote"></i> Money
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('method')">
<i className="w-4 h-4 text-purple-500" data-lucide="git-merge"></i> Method
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('management')">
<i className="w-4 h-4 text-gray-600" data-lucide="briefcase"></i> Management
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('minutes')">
<i className="w-4 h-4 text-amber-500" data-lucide="clock"></i> Minutes
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('mileage')">
<i className="w-4 h-4 text-red-500" data-lucide="map-pin"></i> Mileage
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('measurement')">
<i className="w-4 h-4 text-cyan-500" data-lucide="gauge"></i> Measurement
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('morale')">
<i className="w-4 h-4 text-pink-500" data-lucide="smile"></i> Morale
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('marketing')">
<i className="w-4 h-4 text-orange-500" data-lucide="megaphone"></i> Marketing
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('milieu')">
<i className="w-4 h-4 text-emerald-500" data-lucide="leaf"></i> Milieu
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('maintenance')">
<i className="w-4 h-4 text-gray-500" data-lucide="wrench"></i> Maintenance
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('mission')">
<i className="w-4 h-4 text-red-600" data-lucide="target"></i> Mission
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('mitigation')">
<i className="w-4 h-4 text-blue-600" data-lucide="shield-check"></i> Mitigation
                                    </button>
<button className="text-left px-4 py-2.5 text-xs hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="addLineItem('middlemen')">
<i className="w-4 h-4 text-indigo-400" data-lucide="user-plus"></i> Middlemen
                                    </button>
</div>
</div>
</div>
</div>

<div className="space-y-4 mb-10" id="line-items-container">

</div>

<div className="mb-10">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Notes &amp; Terms</label>
<textarea className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 min-h-[100px] placeholder:text-gray-400" placeholder="Add terms, bank details, or project scope notes..."></textarea>
</div>
<div className="h-20"></div> 
</div>

<div className="w-full lg:w-96 bg-gray-50 lg:border-l border-t lg:border-t-0 border-gray-200 p-6 flex flex-col justify-between shrink-0">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-6">Summary</h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between text-gray-600">
<span>Subtotal</span>
<span className="font-medium text-gray-900" id="summary-subtotal">$0.00</span>
</div>
<div className="flex items-center justify-between text-gray-600">
<div className="flex items-center gap-2">
<span>Tax</span>
<input className="w-12 text-right p-0.5 bg-transparent border-b border-gray-300 focus:border-indigo-500 text-xs focus:outline-none" id="tax-rate" oninput="calculateTotals()" type="number" value="5"/>
<span>%</span>
</div>
<span className="font-medium text-gray-900" id="summary-tax">$0.00</span>
</div>
<div className="flex items-center justify-between text-gray-600">
<div className="flex items-center gap-2">
<span>Discount</span>
</div>
<div className="flex items-center gap-1">
<span className="text-gray-400 text-xs">-</span>
<input className="w-16 text-right p-0.5 bg-transparent border-b border-gray-300 focus:border-indigo-500 text-xs focus:outline-none" id="discount-val" oninput="calculateTotals()" placeholder="0" type="number" value="0"/>
</div>
</div>
<div className="border-t border-gray-200 my-4 pt-4 flex justify-between items-end">
<span className="font-semibold text-gray-900">Total</span>
<div className="text-right">
<span className="block text-2xl font-semibold tracking-tight text-gray-900" id="summary-total">$0.00</span>
<span className="text-[10px] text-gray-500 uppercase">USD</span>
</div>
</div>
</div>
</div>

<div className="mt-8 space-y-3">
<button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-md text-sm font-medium shadow-sm transition-all active:scale-[0.98]" onclick="showPage('preview')">
                            Preview &amp; Send
                        </button>
<div className="grid grid-cols-2 gap-3">
<button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2 rounded-md text-xs font-medium transition-colors">
                                Save Draft
                            </button>
<button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2 rounded-md text-xs font-medium transition-colors">
                                Convert to Invoice
                            </button>
</div>
</div>
</div>
</div>

<div className="hidden p-6 lg:p-12 min-h-full flex flex-col items-center justify-center bg-gray-100" id="page-preview">
<div className="w-full max-w-3xl mb-4 flex justify-between items-center">
<button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-xs font-medium transition-colors" onclick="showPage('create')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Edit
                    </button>
<div className="flex gap-2">
<button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium shadow-sm hover:bg-gray-50">
<i className="w-3.5 h-3.5" data-lucide="download"></i> PDF
                        </button>
<button className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-md text-xs font-medium shadow-sm hover:bg-indigo-700">
<i className="w-3.5 h-3.5" data-lucide="send"></i> Send to Client
                        </button>
</div>
</div>
<div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
<div className="p-8 sm:p-12">

<div className="flex justify-between items-start mb-10">
<div>
<div className="flex items-center gap-2 font-semibold tracking-tight text-gray-900 text-lg mb-4">
<div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center text-white text-xs">F</div>
<span>FinStack</span>
</div>
<div className="text-xs text-gray-500 space-y-1">
<p>123 Business Rd</p>
<p>Tech City, TC 90210</p>
<p>billing@finstack.com</p>
</div>
</div>
<div className="text-right max-w-xs">
<h1 className="text-2xl font-light text-gray-900 tracking-tight break-words" id="preview-title">ESTIMATE</h1>
<p className="text-gray-500 text-sm mt-1 font-mono" id="preview-id">#EST-NEW</p>
<div className="mt-4 text-xs text-gray-500 space-y-1">
<p>Date: <span className="text-gray-900 font-medium">Oct 29, 2023</span></p>
<p>Expires: <span className="text-gray-900 font-medium">Nov 29, 2023</span></p>
</div>
</div>
</div>

<div className="mb-10 border-t border-gray-100 pt-6">
<p className="text-xs text-gray-400 uppercase font-medium mb-2">Bill To</p>
<h3 className="text-gray-900 font-medium">Acme Corporation</h3>
</div>

<div className="mb-8">
<table className="w-full text-left">
<thead>
<tr className="border-b border-gray-200">
<th className="py-2 text-xs font-medium text-gray-500 uppercase w-1/2">Description</th>
<th className="py-2 text-xs font-medium text-gray-500 uppercase text-right">Category</th>
<th className="py-2 text-xs font-medium text-gray-500 uppercase text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100" id="preview-tbody">

</tbody>
</table>
</div>

<div className="flex justify-end border-t border-gray-100 pt-6">
<div className="w-1/2 sm:w-1/3 space-y-2">
<div className="flex justify-between text-xs text-gray-500">
<span>Subtotal</span>
<span className="text-gray-900 font-medium" id="preview-subtotal">$0.00</span>
</div>
<div className="flex justify-between text-xs text-gray-500">
<span>Tax (5%)</span>
<span className="text-gray-900 font-medium" id="preview-tax">$0.00</span>
</div>
<div className="flex justify-between text-xs text-gray-500">
<span>Discount</span>
<span className="text-gray-900 font-medium" id="preview-discount">-$0.00</span>
</div>
<div className="flex justify-between text-base font-semibold text-gray-900 pt-2 border-t border-gray-200 mt-2">
<span>Total</span>
<span id="preview-total">$0.00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
