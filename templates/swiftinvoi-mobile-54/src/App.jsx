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



        const $ = (id) => document.getElementById(id);
        const uuid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);
        const formatMoney = (n) => '₦' + parseFloat(n).toLocaleString('en-NG', {minimumFractionDigits: 0, maximumFractionDigits: 2});
        
        const toast = (msg) => {
            const t = $('toast');
            $('toast-msg').innerText = msg;
            t.classList.remove('-translate-y-24', 'opacity-0');
            setTimeout(() => t.classList.add('-translate-y-24', 'opacity-0'), 3000);
        };

        // --- DATA STORE ---
        const store = {
            data: {
                user: null,
                invoices: [],
                products: [], // {id, name, price}
                customers: [], // {id, name, phone, email}
                session: false
            },
            load: () => {
                const s = localStorage.getItem('swiftInvoice_v2_data');
                if (s) store.data = JSON.parse(s);
            },
            save: () => {
                localStorage.setItem('swiftInvoice_v2_data', JSON.stringify(store.data));
            }
        };

        // --- ROUTER ---
        const router = {
            history: [],
            navigate: (viewId) => {
                // Handle overlays (create/preview) vs Main Views
                const isOverlay = ['create-invoice', 'edit-invoice', 'preview'].includes(viewId);
                const isAuth = ['login', 'signup'].includes(viewId);

                if(isAuth) {
                    $('bottom-nav').classList.add('hidden');
                    document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
                    $(`view-${viewId}`).classList.remove('hidden');
                } else if(isOverlay) {
                    if(viewId === 'edit-invoice') viewId = 'create-invoice'; // Alias
                    $(`view-${viewId}`).classList.remove('hidden');
                    $(`view-${viewId}`).classList.add('fade-in');
                } else {
                    // Main Tab Navigation
                    $('bottom-nav').classList.remove('hidden');
                    document.querySelectorAll('.view').forEach(el => {
                         if(!['create-invoice', 'preview', 'view-login', 'view-signup'].includes(el.id)) el.classList.add('hidden');
                    });
                    $(`view-${viewId}`).classList.remove('hidden');
                    $(`view-${viewId}`).classList.add('fade-in');
                    
                    // Update Tab Active State
                    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
                    const activeBtn = document.querySelector(`.nav-btn[data-target="${viewId}"]`);
                    if(activeBtn) activeBtn.classList.add('active');

                    if (viewId === 'dashboard') dashboard.render();
                    if (viewId === 'settings') settings.render();
                    if (viewId === 'products') productManager.render();
                    if (viewId === 'customers') customerManager.render();
                }

                router.history.push(viewId);
            },
            back: () => {
                // Simple logic: if overlay open, close it.
                const overlays = ['view-create-invoice', 'view-preview'];
                let closed = false;
                overlays.forEach(id => {
                    if(!$(`${id}`).classList.contains('hidden')) {
                        $(`${id}`).classList.add('hidden');
                        closed = true;
                    }
                });
                if(!closed) {
                   // Default fallback if functionality expands
                   router.navigate('dashboard');
                }
            }
        };

        // --- AUTH ---
        const auth = {
            init: () => {
                store.load();
                if (store.data.session && store.data.user) {
                    router.navigate('dashboard');
                    $('dash-initials').innerText = store.data.user.name.substring(0,2).toUpperCase();
                } else {
                    router.navigate('login');
                }
            },
            signup: (e) => {
                e.preventDefault();
                const user = {
                    name: $('signup-name').value,
                    phone: $('signup-phone').value,
                    bank: {
                        name: $('signup-bank-name').value,
                        accNum: $('signup-account-num').value,
                        accName: $('signup-account-name').value
                    },
                    password: $('signup-pass').value
                };
                store.data.user = user;
                store.data.session = true;
                store.save();
                auth.init();
            },
            login: (e) => {
                e.preventDefault();
                const id = $('login-id').value;
                const pass = $('login-pass').value;
                const u = store.data.user;
                if (u && u.phone === id && pass === u.password) {
                    store.data.session = true;
                    store.save();
                    auth.init();
                } else {
                    toast('Invalid credentials');
                }
            },
            logout: () => {
                store.data.session = false;
                store.save();
                location.reload();
            },
            updateProfile: () => {
                const u = store.data.user;
                u.name = $('set-name').value;
                u.phone = $('set-phone').value;
                u.bank.name = $('set-bank').value;
                u.bank.accNum = $('set-acc-num').value;
                u.bank.accName = $('set-acc-name').value;
                store.save();
                toast('Settings saved');
            }
        };

        // --- DASHBOARD ---
        const dashboard = {
            render: () => {
                $('dash-date').innerText = new Date().toLocaleDateString('en-GB', {weekday: 'long', day: 'numeric', month: 'long'});
                const list = $('invoice-list');
                list.innerHTML = '';
                
                let totalRev = 0;
                let pendingCount = 0;

                const sorted = [...store.data.invoices].sort((a,b) => new Date(b.date) - new Date(a.date));

                if (sorted.length === 0) {
                    $('empty-state').classList.remove('hidden');
                } else {
                    $('empty-state').classList.add('hidden');
                    sorted.forEach(inv => {
                        totalRev += inv.total;
                        if(!inv.paid) pendingCount++;

                        const div = document.createElement('div');
                        div.className = 'bg-white p-4 rounded-xl border border-gray-100 flex justify-between items-center cursor-pointer active:bg-gray-50 transition-colors';
                        div.onclick = () => invoiceManager.load(inv.id);
                        div.innerHTML = `
                            <div class="flex items-center gap-3">
                                <div class="h-10 w-10 rounded-full ${inv.paid ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'} flex items-center justify-center">
                                    <iconify-icon icon="${inv.paid ? 'solar:check-circle-linear' : 'solar:clock-circle-linear'}" width="20"></iconify-icon>
                                </div>
                                <div>
                                    <h3 class="text-sm font-semibold text-gray-900 leading-tight">${inv.customer}</h3>
                                    <p class="text-xs text-gray-400">#${inv.number} • ${inv.date}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="text-sm font-bold text-gray-900">${formatMoney(inv.total)}</p>
                            </div>
                        `;
                        list.appendChild(div);
                    });
                }
                $('dash-total-rev').innerText = formatMoney(totalRev);
                $('dash-pending').innerText = pendingCount;
            }
        };

        // --- PRODUCT MANAGER ---
        const productManager = {
            render: () => {
                const list = $('product-list');
                list.innerHTML = '';
                if(store.data.products.length === 0) {
                    $('products-empty').classList.remove('hidden');
                    return;
                }
                $('products-empty').classList.add('hidden');
                store.data.products.forEach((p, idx) => {
                    const div = document.createElement('div');
                    div.className = 'bg-white p-4 rounded-xl border border-gray-100 flex justify-between items-center';
                    div.innerHTML = `
                        <div>
                            <p class="font-semibold text-sm">${p.name}</p>
                            <p class="text-xs text-gray-500">${formatMoney(p.price)}</p>
                        </div>
                        <button onclick="productManager.delete(${idx})" class="text-red-400 p-2"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
                    `;
                    list.appendChild(div);
                });
            },
            add: () => {
                const name = prompt("Product Name:");
                if(!name) return;
                const price = prompt("Price (₦):");
                if(!price) return;
                store.data.products.push({name, price: parseFloat(price)});
                store.save();
                productManager.render();
                toast('Product added');
            },
            delete: (idx) => {
                if(confirm('Delete product?')) {
                    store.data.products.splice(idx, 1);
                    store.save();
                    productManager.render();
                }
            }
        };

        // --- CUSTOMER MANAGER ---
        const customerManager = {
            render: () => {
                const list = $('customer-list');
                list.innerHTML = '';
                if(store.data.customers.length === 0) {
                    $('customers-empty').classList.remove('hidden');
                    return;
                }
                $('customers-empty').classList.add('hidden');
                store.data.customers.forEach((c, idx) => {
                    const div = document.createElement('div');
                    div.className = 'bg-white p-4 rounded-xl border border-gray-100 flex justify-between items-center';
                    div.innerHTML = `
                        <div>
                            <p class="font-semibold text-sm">${c.name}</p>
                            <p class="text-xs text-gray-500">${c.phone || 'No phone'}</p>
                        </div>
                        <button onclick="customerManager.delete(${idx})" class="text-red-400 p-2"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
                    `;
                    list.appendChild(div);
                });
            },
            add: () => {
                const name = prompt("Customer Name:");
                if(!name) return;
                const phone = prompt("Phone:");
                store.data.customers.push({name, phone});
                store.save();
                customerManager.render();
                toast('Customer saved');
            },
            delete: (idx) => {
                if(confirm('Delete customer?')) {
                    store.data.customers.splice(idx, 1);
                    store.save();
                    customerManager.render();
                }
            }
        };

        // --- INVOICE MANAGER ---
        let currentInvoiceId = null;
        let tempItems = [];

        const invoiceManager = {
            // Populate Datalists
            populateDataLists: () => {
                const custDl = $('dl-customers');
                custDl.innerHTML = '';
                store.data.customers.forEach(c => {
                    const opt = document.createElement('option');
                    opt.value = c.name;
                    custDl.appendChild(opt);
                });

                const prodDl = $('dl-products');
                prodDl.innerHTML = '';
                store.data.products.forEach(p => {
                    const opt = document.createElement('option');
                    opt.value = p.name;
                    opt.setAttribute('data-price', p.price);
                    prodDl.appendChild(opt);
                });
            },
            autoFillCustomer: (val) => {
                const c = store.data.customers.find(cx => cx.name === val);
                if(c) {
                    $('inv-cust-phone').value = c.phone || '';
                    $('cust-details-expand').classList.remove('hidden');
                } else {
                    $('cust-details-expand').classList.remove('hidden');
                }
            },
            autoFillProduct: (idx, val) => {
                const p = store.data.products.find(px => px.name === val);
                if(p) {
                    tempItems[idx].name = p.name;
                    tempItems[idx].price = p.price;
                    invoiceManager.renderItems();
                } else {
                    tempItems[idx].name = val;
                }
            },
            resetForm: () => {
                currentInvoiceId = null;
                tempItems = [{name: '', qty: 1, price: 0}];
                $('inv-number').value = 'INV-' + Math.floor(100000 + Math.random() * 900000);
                $('inv-date').valueAsDate = new Date();
                $('inv-cust-name').value = '';
                $('inv-cust-phone').value = '';
                $('inv-cust-email').value = '';
                $('inv-delivery').value = 0;
                $('inv-discount').value = 0;
                $('inv-status').checked = false;
                $('inv-notes').value = '';
                $('cust-details-expand').classList.add('hidden');
                invoiceManager.populateDataLists();
                invoiceManager.renderItems();
            },
            addItem: () => {
                tempItems.push({name: '', qty: 1, price: 0});
                invoiceManager.renderItems();
            },
            removeItem: (idx) => {
                if(tempItems.length > 1) {
                    tempItems.splice(idx, 1);
                    invoiceManager.renderItems();
                }
            },
            renderItems: () => {
                const con = $('inv-items-container');
                con.innerHTML = '';
                tempItems.forEach((item, idx) => {
                    const row = document.createElement('div');
                    row.className = 'bg-gray-50 p-3 rounded-lg border border-gray-100 relative group animate-fade';
                    row.innerHTML = `
                        <div class="mb-2">
                            <input type="text" list="dl-products" placeholder="Item Name" class="w-full h-8 bg-transparent border-b border-gray-200 text-sm focus:border-gray-900 transition-colors" 
                            value="${item.name}" onchange="invoiceManager.autoFillProduct(${idx}, this.value)">
                        </div>
                        <div class="flex gap-3">
                            <div class="w-16">
                                <label class="text-[10px] text-gray-400">Qty</label>
                                <input type="number" class="w-full h-8 bg-white rounded border border-gray-200 px-2 text-sm" 
                                value="${item.qty}" min="1" oninput="tempItems[${idx}].qty = this.value; invoiceManager.calculateTotals()">
                            </div>
                            <div class="flex-1">
                                <label class="text-[10px] text-gray-400">Price</label>
                                <input type="number" class="w-full h-8 bg-white rounded border border-gray-200 px-2 text-sm" 
                                value="${item.price}" oninput="tempItems[${idx}].price = this.value; invoiceManager.calculateTotals()">
                            </div>
                             <div class="w-16 text-right">
                                <label class="text-[10px] text-gray-400">Total</label>
                                <p class="text-sm font-semibold mt-1.5">${formatMoney(item.qty * item.price).replace('₦','')}</p>
                            </div>
                        </div>
                        <button onclick="invoiceManager.removeItem(${idx})" class="absolute top-2 right-2 text-gray-300 hover:text-red-500">
                            <iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
                        </button>
                    `;
                    con.appendChild(row);
                });
                invoiceManager.calculateTotals();
            },
            calculateTotals: () => {
                const sub = tempItems.reduce((sum, i) => sum + (i.qty * i.price), 0);
                const del = parseFloat($('inv-delivery').value) || 0;
                const disc = parseFloat($('inv-discount').value) || 0;
                $('inv-total-display').innerText = formatMoney(sub + del - disc);
            },
            saveInvoice: () => {
                if (!$('inv-cust-name').value) return toast('Customer name required');
                
                // Save customer if new
                const cName = $('inv-cust-name').value;
                if(!store.data.customers.find(c => c.name === cName)) {
                     store.data.customers.push({name: cName, phone: $('inv-cust-phone').value});
                }

                const sub = tempItems.reduce((sum, i) => sum + (i.qty * i.price), 0);
                const del = parseFloat($('inv-delivery').value) || 0;
                const disc = parseFloat($('inv-discount').value) || 0;

                const inv = {
                    id: currentInvoiceId || uuid(),
                    number: $('inv-number').value,
                    date: $('inv-date').value,
                    customer: cName,
                    custPhone: $('inv-cust-phone').value,
                    custEmail: $('inv-cust-email').value,
                    items: tempItems.filter(i => i.name),
                    delivery: del,
                    discount: disc,
                    total: sub + del - disc,
                    paid: $('inv-status').checked,
                    notes: $('inv-notes').value,
                    style: currentStyle
                };

                if (currentInvoiceId) {
                    const idx = store.data.invoices.findIndex(i => i.id === currentInvoiceId);
                    store.data.invoices[idx] = inv;
                } else {
                    store.data.invoices.push(inv);
                    currentInvoiceId = inv.id;
                }
                store.save();
                toast('Invoice Saved');
                invoiceManager.load(inv.id, true); // Load preview
            },
            load: (id, isPreview = false) => {
                const inv = store.data.invoices.find(i => i.id === id);
                currentInvoiceId = id;
                tempItems = JSON.parse(JSON.stringify(inv.items));
                
                $('inv-number').value = inv.number;
                $('inv-date').value = inv.date;
                $('inv-cust-name').value = inv.customer;
                $('inv-cust-phone').value = inv.custPhone;
                $('inv-cust-email').value = inv.custEmail;
                $('inv-delivery').value = inv.delivery;
                $('inv-discount').value = inv.discount;
                $('inv-status').checked = inv.paid;
                $('inv-notes').value = inv.notes;
                
                if (isPreview) {
                    templateManager.render(inv);
                    router.navigate('preview');
                } else {
                    invoiceManager.populateDataLists();
                    invoiceManager.renderItems();
                    invoiceManager.calculateTotals();
                    router.navigate('create-invoice');
                }
            }
        };

        // --- SETTINGS ---
        const settings = {
            render: () => {
                const u = store.data.user;
                $('set-name').value = u.name;
                $('set-phone').value = u.phone;
                $('set-bank').value = u.bank.name;
                $('set-acc-num').value = u.bank.accNum;
                $('set-acc-name').value = u.bank.accName;
            }
        };

        // --- TEMPLATES (Preview) ---
        let currentStyle = 'minimal';
        const templateManager = {
            cycle: () => {
                const styles = ['minimal', 'bold', 'modern'];
                currentStyle = styles[(styles.indexOf(currentStyle) + 1) % styles.length];
                const inv = store.data.invoices.find(i => i.id === currentInvoiceId);
                templateManager.render(inv);
            },
            render: (inv) => {
                const user = store.data.user;
                const area = $('invoice-preview-area');
                
                // Helper blocks
                const itemsRows = inv.items.map(i => `
                    <tr class="border-b border-gray-100 last:border-0">
                        <td class="py-2 text-left">${i.name}</td>
                        <td class="py-2 text-center text-gray-500">${i.qty}</td>
                        <td class="py-2 text-right text-gray-500">${i.price}</td>
                        <td class="py-2 text-right font-medium">${i.qty * i.price}</td>
                    </tr>
                `).join('');

                const commonTotals = `
                    <div class="space-y-1 text-xs text-gray-500">
                        <div class="flex justify-between"><span>Subtotal</span><span>${formatMoney(inv.items.reduce((s,i)=>s+i.qty*i.price,0))}</span></div>
                        ${inv.delivery ? `<div class="flex justify-between"><span>Delivery</span><span>${formatMoney(inv.delivery)}</span></div>` : ''}
                        ${inv.discount ? `<div class="flex justify-between text-green-600"><span>Discount</span><span>-${formatMoney(inv.discount)}</span></div>` : ''}
                        <div class="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t border-gray-100 mt-2"><span>Total</span><span>${formatMoney(inv.total)}</span></div>
                    </div>
                `;

                if(currentStyle === 'minimal') {
                    area.innerHTML = `
                        <div class="flex justify-between items-start mb-8">
                            <div><h1 class="font-bold text-lg tracking-tight">${user.name}</h1><p class="text-xs text-gray-500">${user.phone}</p></div>
                            <div class="text-right"><p class="font-mono text-sm bg-gray-100 px-2 py-1 rounded">#${inv.number}</p><p class="text-[10px] text-gray-400 mt-1">${inv.date}</p></div>
                        </div>
                        <div class="mb-8"><p class="text-[10px] uppercase font-bold text-gray-400 mb-1">Bill To</p><p class="font-medium">${inv.customer}</p><p class="text-xs text-gray-500">${inv.custPhone}</p></div>
                        <table class="w-full text-xs mb-6">
                            <thead class="text-gray-400 border-b border-gray-200"><tr><th class="text-left py-2">Item</th><th class="text-center w-8">Qt</th><th class="text-right w-16">Pr</th><th class="text-right w-16">Tot</th></tr></thead>
                            <tbody>${itemsRows}</tbody>
                        </table>
                        <div class="flex justify-end mb-8">${commonTotals}</div>
                        <div class="bg-gray-50 p-3 rounded-lg text-[10px] text-gray-500">
                            <p class="font-bold text-gray-900 mb-1">Bank Details</p><p>${user.bank.name} • ${user.bank.accNum}</p><p>${user.bank.accName}</p>
                        </div>
                    `;
                } else if (currentStyle === 'bold') {
                    area.innerHTML = `
                        <div class="bg-gray-900 text-white p-6 -m-6 mb-6">
                            <div class="flex justify-between">
                                <h1 class="font-bold text-xl uppercase">${user.name}</h1>
                                <div class="text-right"><p class="text-xs opacity-60">TOTAL DUE</p><p class="text-xl font-bold">${formatMoney(inv.total)}</p></div>
                            </div>
                        </div>
                        <div class="flex justify-between text-xs mb-6 pb-4 border-b border-gray-100">
                            <div><p class="text-gray-400">To:</p><p class="font-bold text-base">${inv.customer}</p></div>
                            <div class="text-right"><p class="text-gray-400">Date:</p><p class="font-bold">${inv.date}</p></div>
                        </div>
                        <table class="w-full text-xs mb-6">
                            <thead class="bg-gray-100 font-bold"><tr><th class="text-left p-2 rounded-l">Item</th><th class="text-right p-2 rounded-r">Total</th></tr></thead>
                            <tbody>${inv.items.map(i=>`<tr><td class="p-2 border-b border-gray-100">${i.name} <span class="text-gray-400">x${i.qty}</span></td><td class="p-2 text-right border-b border-gray-100">${i.qty*i.price}</td></tr>`).join('')}</tbody>
                        </table>
                        <div class="flex justify-end mb-6 text-right">${commonTotals}</div>
                         <div class="text-[10px] text-center text-gray-400 mt-4 border-t border-gray-100 pt-4"><p>Pay to: ${user.bank.accNum} (${user.bank.name})</p></div>
                    `;
                } else {
                     area.innerHTML = `
                        <div class="text-center mb-8 pb-4 border-b border-gray-100">
                            <h1 class="font-serif italic text-2xl text-gray-800">${user.name}</h1>
                            <p class="text-[10px] tracking-widest uppercase text-gray-400 mt-1">Invoice #${inv.number}</p>
                        </div>
                        <div class="text-xs text-center mb-6 text-gray-600"><p>Billed to <span class="font-bold text-gray-900">${inv.customer}</span></p></div>
                        <table class="w-full text-xs mb-6">
                             <thead class="text-gray-400 border-b border-gray-200"><tr><th class="text-left py-2 font-normal italic">Description</th><th class="text-right w-16 font-normal italic">Amount</th></tr></thead>
                             <tbody>${inv.items.map(i=>`<tr><td class="py-3 border-b border-dashed border-gray-200">${i.name} x ${i.qty}</td><td class="py-3 text-right border-b border-dashed border-gray-200">${i.qty*i.price}</td></tr>`).join('')}</tbody>
                        </table>
                        <div class="flex justify-center mb-8 text-center w-full">${commonTotals}</div>
                        <p class="text-center font-serif italic text-xs text-gray-400">Thank you!</p>
                    `;
                }
            }
        };

        const exportManager = {
            whatsapp: () => {
                const inv = store.data.invoices.find(i => i.id === currentInvoiceId);
                const text = `Invoice from ${store.data.user.name}\nTotal: ${formatMoney(inv.total)}\nLink: https://swiftinvoice.app/view/${inv.id}`; // Fake link for demo
                const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
                window.open(url, '_blank');
            },
            print: () => window.print()
        };

        // --- INIT ---
        $('signup-form').onsubmit = auth.signup;
        $('login-form').onsubmit = auth.login;
        // Hook into create button from nav
        document.querySelectorAll('button[onclick="router.navigate(\'create-invoice\')"]').forEach(b => {
            b.onclick = () => invoiceManager.resetForm() || router.navigate('create-invoice');
        });

        auth.init();

    
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
      

<div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] transform transition-all duration-300 -translate-y-24 opacity-0 bg-gray-900 text-white px-4 py-2 rounded-full shadow-xl text-xs font-medium flex items-center gap-2" id="toast">
<iconify-icon className="text-white" icon="solar:info-circle-linear"></iconify-icon>
<span id="toast-msg">Notification</span>
</div>

<main className="w-full h-full sm:h-[850px] sm:max-w-[400px] bg-white sm:rounded-[32px] sm:shadow-2xl relative overflow-hidden flex flex-col border border-gray-200/50" id="app-container">

<section className="view hidden h-full overflow-y-auto p-8 flex flex-col justify-center bg-white z-20" id="view-signup">
<div className="mb-10">
<div className="h-12 w-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-900/20">
<iconify-icon icon="solar:bill-check-linear" width="24"></iconify-icon>
</div>
<h1 className="text-2xl font-bold tracking-tight text-gray-900">Get Started</h1>
<p className="text-sm text-gray-500 mt-2">Create your business profile to send invoices in seconds.</p>
</div>
<form className="space-y-4" id="signup-form">
<div>
<label className="block text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-wider">Business Info</label>
<input className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-gray-900 transition-colors text-sm placeholder-gray-400 mb-3" id="signup-name" placeholder="Business Name" required="" type="text"/>
<input className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-gray-900 transition-colors text-sm placeholder-gray-400" id="signup-phone" placeholder="Phone Number" required="" type="tel"/>
</div>
<div className="pt-2">
<label className="block text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-wider">Bank Details (For receiving payments)</label>
<div className="grid grid-cols-2 gap-3 mb-3">
<input className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-gray-50 text-sm placeholder-gray-400" id="signup-bank-name" placeholder="Bank Name" type="text"/>
<input className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-gray-50 text-sm placeholder-gray-400" id="signup-account-num" placeholder="Account No" type="text"/>
</div>
<input className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-gray-50 text-sm placeholder-gray-400" id="signup-account-name" placeholder="Account Name" type="text"/>
</div>
<div className="pt-2">
<label className="block text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-wider">Security</label>
<input className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-gray-900 transition-colors text-sm" id="signup-pass" placeholder="Create Password" required="" type="password"/>
</div>
<button className="w-full h-12 mt-4 bg-gray-900 hover:bg-black text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-gray-900/10" type="submit">Create Account</button>
</form>
<p className="text-center text-xs text-gray-500 mt-8">Already have an account? <button className="text-gray-900 font-semibold hover:underline" onclick="router.navigate('login')">Login</button></p>
</section>

<section className="view hidden h-full overflow-y-auto p-8 flex flex-col justify-center bg-white z-20" id="view-login">
<div className="mb-10">
<div className="h-12 w-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-900/20">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<h1 className="text-2xl font-bold tracking-tight text-gray-900">Welcome Back</h1>
<p className="text-sm text-gray-500 mt-2">Enter your details to access your dashboard.</p>
</div>
<form className="space-y-4" id="login-form">
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Phone Number</label>
<input className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-gray-900 transition-colors text-sm" id="login-id" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Password</label>
<input className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-gray-900 transition-colors text-sm" id="login-pass" required="" type="password"/>
</div>
<button className="w-full h-12 mt-4 bg-gray-900 hover:bg-black text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-gray-900/10" type="submit">Sign In</button>
</form>
<p className="text-center text-xs text-gray-500 mt-8">New here? <button className="text-gray-900 font-semibold hover:underline" onclick="router.navigate('signup')">Create Account</button></p>
</section>

<section className="view hidden h-full flex flex-col bg-gray-50" id="view-dashboard">
<header className="bg-white px-5 py-4 flex justify-between items-center sticky top-0 z-10 border-b border-gray-100">
<div>
<h2 className="text-lg font-bold text-gray-900 tracking-tight">Overview</h2>
<p className="text-xs text-gray-400 font-medium" id="dash-date"></p>
</div>
<div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
<span className="text-xs font-bold" id="dash-initials"></span>
</div>
</header>
<div className="p-5 space-y-6 overflow-y-auto pb-24">

<div className="grid grid-cols-2 gap-3">
<div className="bg-gray-900 text-white p-4 rounded-2xl shadow-lg shadow-gray-900/10">
<p className="text-[10px] opacity-70 mb-1 uppercase tracking-wider">Total Revenue</p>
<h3 className="text-lg font-bold" id="dash-total-rev">₦0.00</h3>
</div>
<div className="bg-white border border-gray-200 p-4 rounded-2xl">
<p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Pending</p>
<h3 className="text-lg font-bold text-gray-900" id="dash-pending">0</h3>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-sm font-bold text-gray-900">Recent Invoices</h3>
<button className="text-xs text-gray-500 font-medium flex items-center hover:text-gray-900" onclick="router.navigate('create-invoice')">
                            Create New <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="space-y-3" id="invoice-list">

</div>
<div className="hidden py-10 flex flex-col items-center justify-center text-center" id="empty-state">
<div className="bg-gray-100 p-4 rounded-full mb-3">
<iconify-icon className="text-gray-400" icon="solar:documents-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-gray-600">No invoices yet</p>
<p className="text-xs text-gray-400 mt-1">Tap the + button to create one.</p>
</div>
</div>
</div>
</section>

<section className="view hidden h-full flex flex-col bg-gray-50" id="view-products">
<header className="bg-white px-5 py-4 flex justify-between items-center sticky top-0 z-10 border-b border-gray-100">
<h2 className="text-lg font-bold text-gray-900 tracking-tight">Products</h2>
<button className="h-8 w-8 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors" onclick="productManager.add()">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</button>
</header>
<div className="p-5 space-y-3 overflow-y-auto pb-24" id="product-list">

</div>
<div className="hidden flex-1 flex flex-col items-center justify-center text-gray-400 pb-20" id="products-empty">
<p className="text-xs">No saved products yet.</p>
</div>
</section>

<section className="view hidden h-full flex flex-col bg-gray-50" id="view-customers">
<header className="bg-white px-5 py-4 flex justify-between items-center sticky top-0 z-10 border-b border-gray-100">
<h2 className="text-lg font-bold text-gray-900 tracking-tight">Customers</h2>
<button className="h-8 w-8 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors" onclick="customerManager.add()">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</button>
</header>
<div className="p-5 space-y-3 overflow-y-auto pb-24" id="customer-list">

</div>
<div className="hidden flex-1 flex flex-col items-center justify-center text-gray-400 pb-20" id="customers-empty">
<p className="text-xs">No saved customers yet.</p>
</div>
</section>

<section className="view hidden h-full flex flex-col bg-gray-50" id="view-settings">
<header className="bg-white px-5 py-4 sticky top-0 z-10 border-b border-gray-100">
<h2 className="text-lg font-bold text-gray-900 tracking-tight">Settings</h2>
</header>
<div className="p-5 space-y-6 overflow-y-auto pb-24">
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
<h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Business Profile</h3>
<div className="space-y-3">
<input className="w-full h-10 px-0 border-b border-gray-100 text-sm focus:border-gray-900 transition-colors" id="set-name" placeholder="Business Name" type="text"/>
<input className="w-full h-10 px-0 border-b border-gray-100 text-sm focus:border-gray-900 transition-colors" id="set-phone" placeholder="Phone" type="tel"/>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
<h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Bank Details</h3>
<div className="space-y-3">
<input className="w-full h-10 px-0 border-b border-gray-100 text-sm focus:border-gray-900 transition-colors" id="set-bank" placeholder="Bank Name" type="text"/>
<input className="w-full h-10 px-0 border-b border-gray-100 text-sm focus:border-gray-900 transition-colors" id="set-acc-num" placeholder="Account Number" type="text"/>
<input className="w-full h-10 px-0 border-b border-gray-100 text-sm focus:border-gray-900 transition-colors" id="set-acc-name" placeholder="Account Name" type="text"/>
</div>
</div>
<div className="pt-4 space-y-3">
<button className="w-full h-11 bg-gray-900 text-white rounded-lg text-sm font-medium shadow-lg shadow-gray-900/10" onclick="auth.updateProfile()">Save Changes</button>
<button className="w-full h-11 bg-white border border-gray-200 text-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors" onclick="auth.logout()">Sign Out</button>
</div>
</div>
</section>

<section className="view hidden absolute inset-0 bg-white z-30 flex flex-col" id="view-create-invoice">
<header className="border-b border-gray-100 px-4 py-3 flex items-center justify-between bg-white z-10">
<button className="flex items-center text-sm text-gray-500 hover:text-gray-900 p-2 -ml-2" onclick="router.back()">
<iconify-icon className="mr-1" icon="solar:arrow-left-linear" width="20"></iconify-icon> Cancel
                </button>
<h2 className="text-sm font-semibold">New Invoice</h2>
<div className="w-16 flex justify-end">
<button className="text-sm font-semibold text-blue-600" onclick="invoiceManager.saveInvoice()">Save</button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Invoice #</label>
<input className="w-full h-10 px-3 rounded-lg border border-gray-200 bg-gray-50 text-sm font-mono text-gray-500" id="inv-number" readonly="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Date</label>
<input className="w-full h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm" id="inv-date" type="date"/>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Customer</p>
</div>

<input className="w-full h-11 px-3 rounded-lg border border-gray-200 text-sm bg-gray-50 focus:bg-white focus:border-gray-900 transition-colors" id="inv-cust-name" list="dl-customers" onchange="invoiceManager.autoFillCustomer(this.value)" placeholder="Search or Enter Name *"/>
<datalist id="dl-customers"></datalist>
<div className="grid grid-cols-2 gap-3 hidden" id="cust-details-expand">
<input className="w-full h-10 px-3 rounded-lg border border-gray-200 text-sm bg-gray-50" id="inv-cust-phone" placeholder="Phone" type="tel"/>
<input className="w-full h-10 px-3 rounded-lg border border-gray-200 text-sm bg-gray-50" id="inv-cust-email" placeholder="Email" type="email"/>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Items</p>
<button className="text-xs text-blue-600 font-medium flex items-center" onclick="invoiceManager.addItem()">
                            + Add Item
                        </button>
</div>
<div className="space-y-4" id="inv-items-container"></div>
<datalist id="dl-products"></datalist>
</div>

<div className="bg-gray-50 rounded-xl p-4 space-y-3">
<div className="flex items-center justify-between">
<label className="text-xs text-gray-500">Delivery Fee</label>
<input className="w-20 h-8 px-2 text-right rounded border border-gray-200 text-sm bg-white" id="inv-delivery" min="0" oninput="invoiceManager.calculateTotals()" type="number" value="0"/>
</div>
<div className="flex items-center justify-between">
<label className="text-xs text-gray-500">Discount</label>
<input className="w-20 h-8 px-2 text-right rounded border border-gray-200 text-sm bg-white" id="inv-discount" min="0" oninput="invoiceManager.calculateTotals()" type="number" value="0"/>
</div>
<div className="border-t border-gray-200 pt-3 flex items-center justify-between">
<label className="text-sm font-bold text-gray-900">Total Amount</label>
<span className="text-lg font-bold text-gray-900" id="inv-total-display">₦0.00</span>
</div>
</div>

<div className="space-y-3 pb-10">
<div className="flex items-center gap-3">
<input className="w-5 h-5 accent-gray-900 rounded" id="inv-status" type="checkbox"/>
<label className="text-sm text-gray-700" htmlFor="inv-status">Mark as Paid</label>
</div>
<textarea className="w-full p-3 rounded-lg border border-gray-200 text-sm resize-none" id="inv-notes" placeholder="Notes (e.g. Thanks for patronage)" rows="2"></textarea>
</div>
</div>
</section>

<section className="view hidden absolute inset-0 bg-gray-100 z-40 flex flex-col" id="view-preview">
<header className="bg-white px-4 py-3 flex items-center justify-between shadow-sm z-10 sticky top-0">
<button className="flex items-center text-sm text-gray-500 hover:text-gray-900" onclick="router.navigate('dashboard')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="flex gap-2">
<button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700" onclick="templateManager.cycle()">
<iconify-icon icon="solar:palette-linear"></iconify-icon> Theme
                     </button>
<button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700" onclick="router.navigate('edit-invoice')">
<iconify-icon icon="solar:pen-linear"></iconify-icon> Edit
                     </button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-4 flex justify-center items-start">
<div className="bg-white w-full max-w-[360px] min-h-[500px] shadow-sm rounded-none sm:rounded-md p-6 relative text-sm transition-all duration-300 transform scale-[0.95] origin-top sm:scale-100" id="invoice-preview-area">

</div>
</div>
<div className="bg-white p-4 border-t border-gray-200 grid grid-cols-2 gap-3 no-print pb-8 sm:pb-4">
<button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20" onclick="exportManager.whatsapp()">
<iconify-icon icon="solar:brand-whatsapp-bold" width="20"></iconify-icon>
<span className="text-sm font-semibold">Share</span>
</button>
<button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition-colors shadow-lg shadow-gray-900/20" onclick="exportManager.print()">
<iconify-icon icon="solar:printer-bold" width="20"></iconify-icon>
<span className="text-sm font-semibold">Print PDF</span>
</button>
</div>
</section>

<nav className="hidden absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 h-[70px] px-6 flex justify-between items-start pt-3 z-10 pb-4" id="bottom-nav">
<button className="nav-btn text-gray-400 flex flex-col items-center gap-1 w-16" data-target="dashboard" onclick="router.navigate('dashboard')">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="nav-btn text-gray-400 flex flex-col items-center gap-1 w-16" data-target="products" onclick="router.navigate('products')">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Items</span>
</button>

<div className="relative -top-8">
<button className="h-14 w-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-xl shadow-gray-900/30 hover:scale-105 transition-transform" onclick="router.navigate('create-invoice')">
<iconify-icon icon="solar:add-linear" width="28"></iconify-icon>
</button>
</div>
<button className="nav-btn text-gray-400 flex flex-col items-center gap-1 w-16" data-target="customers" onclick="router.navigate('customers')">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Clients</span>
</button>
<button className="nav-btn text-gray-400 flex flex-col items-center gap-1 w-16" data-target="settings" onclick="router.navigate('settings')">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</button>
</nav>
</main>



    </>
  );
}
