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



        // --- 🏗 DATA STATE & PERSISTENCE ---
        const defaultState = {
            products: [
                { id: 1, name: 'Mutton Biryani', price: 350, stock: 20, discount: '10% OFF', cat: 'Biryani', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80', delivery: 40 },
                { id: 2, name: 'Chicken Chaap', price: 180, stock: 15, discount: '5% OFF', cat: 'Curry', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80', delivery: 30 },
                { id: 3, name: 'Rosogolla (6pcs)', price: 120, stock: 50, discount: '', cat: 'Sweets', img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500&q=80', delivery: 20 },
                { id: 4, name: 'Fish Fry', price: 150, stock: 0, discount: '', cat: 'Snacks', img: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80', delivery: 30 },
                { id: 5, name: 'Paneer Butter Masala', price: 220, stock: 10, discount: 'Veg Special', cat: 'Veg', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80', delivery: 30 },
            ],
            categories: [
                { id: 'all', name: 'All', img: '' },
                { id: 'Biryani', name: 'Biryani', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=100' },
                { id: 'Sweets', name: 'Sweets', img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=100' },
                { id: 'Snacks', name: 'Snacks', img: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=100' },
                { id: 'Curry', name: 'Curry', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=100' }
            ],
            cart: [],
            orders: [], 
            currentCategory: 'all',
            selectedProduct: null,
            paymentMethod: 'cod',
            adminQr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=7908387739@upi&pn=AharerSwad'
        };

        // Load state from localStorage or use default
        let state = JSON.parse(localStorage.getItem('aharerSwadState')) || defaultState;

        function saveState() {
            localStorage.setItem('aharerSwadState', JSON.stringify(state));
        }

        // --- 🔄 INITIALIZATION ---
        window.onload = () => {
            // Re-bind methods lost during JSON serialization if necessary (none here currently)
            renderCategories();
            renderProducts();
            
            // Check if user has items in cart
            updateCartCount();

            // Splash Screen Logic
            setTimeout(() => {
                document.getElementById('view-splash').classList.add('hidden');
                nav('view-dashboard');
            }, 2000);
        };

        // --- 🧭 NAVIGATION ---
        function nav(viewId) {
            document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
            const target = document.getElementById(viewId);
            if(target) target.classList.remove('hidden');
            
            // Bottom Nav State
            const isUserPage = ['view-dashboard', 'view-cart', 'view-account'].includes(viewId);
            const navEl = document.getElementById('bottom-nav');
            if (isUserPage) {
                navEl.classList.remove('hidden');
            } else {
                navEl.classList.add('hidden');
            }

            document.querySelectorAll('.nav-btn').forEach(btn => {
                if(btn.dataset.target === viewId) {
                    btn.classList.add('text-orange-600');
                    btn.classList.remove('text-zinc-400');
                } else {
                    btn.classList.remove('text-orange-600');
                    btn.classList.add('text-zinc-400');
                }
            });

            if (viewId === 'view-cart') renderCart();
            if (viewId === 'view-orders') renderUserOrders();
            window.scrollTo(0,0);
        }

        function goBack() {
            if (!document.getElementById('view-product').classList.contains('hidden')) nav('view-dashboard');
            else if (!document.getElementById('view-checkout').classList.contains('hidden')) nav('view-cart');
            else if (!document.getElementById('view-orders').classList.contains('hidden')) nav('view-account');
            else nav('view-dashboard');
        }

        // --- 🏠 DASHBOARD LOGIC ---
        function renderCategories() {
            const container = document.getElementById('category-list');
            container.innerHTML = state.categories.map(c => `
                <div onclick="filterCategory('${c.id}')" class="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer group">
                    <div class="w-14 h-14 rounded-full bg-zinc-100 overflow-hidden border-2 ${state.currentCategory === c.id ? 'border-orange-500' : 'border-transparent'} transition-colors">
                        ${c.img ? `<img src="${c.img}" class="w-full h-full object-cover">` : '<div class="w-full h-full flex items-center justify-center text-xs font-bold text-zinc-400">ALL</div>'}
                    </div>
                    <span class="text-[10px] font-medium text-zinc-600 group-hover:text-orange-600 transition-colors">${c.name}</span>
                </div>
            `).join('');
        }

        function filterCategory(catId) {
            state.currentCategory = catId;
            renderCategories();
            renderProducts();
        }

        function renderProducts(searchTerm = '') {
            const list = document.getElementById('product-list');
            let filtered = state.products;

            if (state.currentCategory !== 'all') {
                filtered = filtered.filter(p => p.cat === state.currentCategory);
            }
            if (searchTerm) {
                filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
            }

            list.innerHTML = filtered.map(p => `
                <div onclick="openProduct(${p.id})" class="bg-white rounded-xl border border-zinc-100 shadow-sm overflow-hidden active:scale-[0.98] transition-transform cursor-pointer">
                    <div class="relative h-32 bg-zinc-100">
                        <img src="${p.img}" class="w-full h-full object-cover">
                        ${p.stock === 0 ? '<div class="absolute inset-0 bg-white/60 flex items-center justify-center text-xs font-bold text-red-600 backdrop-blur-sm">OUT OF STOCK</div>' : ''}
                        ${p.discount && p.stock > 0 ? `<div class="absolute top-2 right-2 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow">${p.discount}</div>` : ''}
                    </div>
                    <div class="p-3">
                        <div class="text-sm font-semibold text-zinc-900 leading-tight mb-1 truncate">${p.name}</div>
                        <div class="flex justify-between items-center">
                            <span class="text-xs font-semibold text-zinc-500">₹${p.price}</span>
                            <button class="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900"><iconify-icon icon="lucide:plus" width="14"></iconify-icon></button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function filterProducts() {
            const term = document.getElementById('search-input').value;
            renderProducts(term);
        }

        // --- 📦 PRODUCT DETAILS ---
        function openProduct(id) {
            const p = state.products.find(x => x.id === id);
            state.selectedProduct = p;
            
            document.getElementById('p-detail-img').src = p.img;
            document.getElementById('p-detail-name').innerText = p.name;
            document.getElementById('p-detail-price').innerText = '₹' + p.price;
            document.getElementById('p-detail-discount').innerText = p.discount || 'Best Price';
            document.getElementById('p-detail-delivery').innerText = p.delivery;
            
            const btn = document.getElementById('btn-add-cart');
            const stockBadge = document.getElementById('p-detail-stock-badge');

            if (p.stock === 0) {
                btn.disabled = true;
                btn.innerText = 'Out of Stock';
                btn.classList.add('bg-zinc-300', 'cursor-not-allowed');
                btn.classList.remove('bg-zinc-900');
                stockBadge.className = 'px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700';
                stockBadge.innerText = 'Sold Out';
            } else {
                btn.disabled = false;
                btn.innerHTML = '<iconify-icon icon="lucide:shopping-bag" width="18"></iconify-icon> Add to Cart';
                btn.classList.remove('bg-zinc-300', 'cursor-not-allowed');
                btn.classList.add('bg-zinc-900');
                stockBadge.className = 'px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700';
                stockBadge.innerText = 'In Stock';
            }

            nav('view-product');
        }

        function addToCart() {
            if (!state.selectedProduct || state.selectedProduct.stock <= 0) return;
            
            const existing = state.cart.find(item => item.id === state.selectedProduct.id);
            if (existing) {
                existing.qty++;
            } else {
                state.cart.push({ ...state.selectedProduct, qty: 1 });
            }
            
            saveState();
            updateCartCount();
            // Just a small feedback, not a full alert
            const btn = document.getElementById('btn-add-cart');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="lucide:check" width="18"></iconify-icon> Added';
            setTimeout(() => { btn.innerHTML = originalText; }, 1000);
        }

        // --- 🛒 CART LOGIC ---
        function updateCartCount() {
            const count = state.cart.reduce((a, b) => a + b.qty, 0);
            const badge = document.getElementById('nav-cart-count');
            badge.innerText = count;
            badge.classList.toggle('hidden', count === 0);
        }

        function renderCart() {
            const container = document.getElementById('cart-items');
            const empty = document.getElementById('empty-cart');
            const summary = document.getElementById('cart-summary');

            if (state.cart.length === 0) {
                container.innerHTML = '';
                empty.classList.remove('hidden');
                summary.classList.add('hidden');
                return;
            }

            empty.classList.add('hidden');
            summary.classList.remove('hidden');

            container.innerHTML = state.cart.map(item => `
                <div class="bg-white p-3 rounded-xl border border-zinc-100 flex gap-3 items-center shadow-sm">
                    <img src="${item.img}" class="w-16 h-16 rounded-lg object-cover bg-zinc-100">
                    <div class="flex-1">
                        <div class="text-sm font-semibold text-zinc-900">${item.name}</div>
                        <div class="text-xs text-zinc-500">Delivery: ₹${item.delivery}</div>
                        <div class="font-medium text-sm mt-1">₹${item.price}</div>
                    </div>
                    <div class="flex items-center gap-2 bg-zinc-50 rounded-lg p-1">
                        <button onclick="changeQty(${item.id}, -1)" class="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-zinc-600 hover:text-black">-</button>
                        <span class="text-xs font-semibold w-4 text-center">${item.qty}</span>
                        <button onclick="changeQty(${item.id}, 1)" class="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-zinc-600 hover:text-black">+</button>
                    </div>
                </div>
            `).join('');

            calculateTotal();
        }

        function changeQty(id, delta) {
            const item = state.cart.find(x => x.id === id);
            if (!item) return;
            item.qty += delta;
            if (item.qty <= 0) {
                state.cart = state.cart.filter(x => x.id !== id);
            }
            saveState();
            updateCartCount();
            renderCart();
        }

        function calculateTotal() {
            const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const delivery = state.cart.reduce((sum, item) => sum + item.delivery, 0); 
            const total = subtotal + delivery;

            document.getElementById('cart-subtotal').innerText = subtotal;
            document.getElementById('cart-delivery').innerText = delivery;
            document.getElementById('cart-total').innerText = total;
            return total;
        }

        function setPayment(method) {
            state.paymentMethod = method;
            const btnCod = document.getElementById('btn-cod');
            const btnOnline = document.getElementById('btn-online');
            const onlineSection = document.getElementById('online-payment-section');

            if (method === 'cod') {
                btnCod.classList.add('border-orange-500', 'bg-orange-50', 'text-orange-700');
                btnOnline.classList.remove('border-orange-500', 'bg-orange-50', 'text-orange-700');
                onlineSection.classList.add('hidden');
            } else {
                btnOnline.classList.add('border-orange-500', 'bg-orange-50', 'text-orange-700');
                btnCod.classList.remove('border-orange-500', 'bg-orange-50', 'text-orange-700');
                onlineSection.classList.remove('hidden');
                document.getElementById('qr-display').src = state.adminQr;
            }
        }

        function proceedToCheckout() {
            if (state.cart.length === 0) {
                alert('Your cart is empty');
                return;
            }

            if (state.paymentMethod === 'online') {
                const file = document.getElementById('payment-screenshot').files[0];
                if (!file) {
                    alert('Please upload payment screenshot for online payment.');
                    return;
                }
            }
            
            const total = calculateTotal();
            document.getElementById('checkout-total-display').innerText = total;
            document.getElementById('checkout-method').innerText = state.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment';
            nav('view-checkout');
        }

        // --- 🧾 ORDER PLACEMENT FIX ---
        function placeOrder(e) {
            e.preventDefault(); // Stop default form submit
            
            const name = document.getElementById('c-name').value;
            const mobile = document.getElementById('c-mobile').value;
            const address = document.getElementById('c-address').value;

            if(!name || !mobile || !address) {
                alert('Please fill all required fields');
                return;
            }
            
            const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
            const total = calculateTotal(); 

            const newOrder = {
                id: orderId,
                userDetails: { name, mobile, address },
                items: JSON.parse(JSON.stringify(state.cart)), // Deep copy items
                total: total,
                status: 'Pending',
                date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                method: state.paymentMethod
            };

            state.orders.unshift(newOrder); // Add to beginning of array
            state.cart = []; // Clear cart
            
            saveState(); // Save to local storage
            updateCartCount();

            // Show Success Modal instead of Alert
            document.getElementById('modal-success').classList.remove('hidden');
        }

        function closeSuccessModal() {
            document.getElementById('modal-success').classList.add('hidden');
            nav('view-orders');
        }

        function renderUserOrders() {
            const list = document.getElementById('orders-list');
            if (state.orders.length === 0) {
                list.innerHTML = '<div class="text-center text-zinc-400 mt-10 text-sm">No orders yet. Start shopping!</div>';
                return;
            }

            list.innerHTML = state.orders.map(o => `
                <div class="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm transition-all hover:shadow-md">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-xs font-bold text-zinc-900">#${o.id}</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${getStatusColor(o.status)}">${o.status}</span>
                    </div>
                    <div class="text-xs text-zinc-500 mb-2 leading-relaxed">${o.items.map(i => `${i.qty}x ${i.name}`).join(', ')}</div>
                    <div class="flex justify-between items-center pt-2 border-t border-zinc-50">
                        <span class="text-[10px] text-zinc-400">${o.date}</span>
                        <span class="text-sm font-semibold text-zinc-900">₹${o.total}</span>
                    </div>
                    ${o.method === 'online' ? '<div class="mt-2 text-[10px] text-zinc-400 flex items-center gap-1"><iconify-icon icon="lucide:qr-code" width="12"></iconify-icon> Online Payment Verified</div>' : ''}
                </div>
            `).join('');
        }

        function getStatusColor(status) {
            if (status === 'Pending') return 'bg-yellow-50 text-yellow-600 border border-yellow-100';
            if (status === 'Accepted') return 'bg-blue-50 text-blue-600 border border-blue-100';
            if (status === 'Delivered') return 'bg-green-50 text-green-600 border border-green-100';
            if (status === 'Rejected') return 'bg-red-50 text-red-600 border border-red-100';
            return 'bg-zinc-100 text-zinc-500';
        }

        function saveProfile() {
            // Logic to save profile details locally if needed
            alert('Profile details saved locally.');
        }

        // --- 🔐 ADMIN SYSTEM FIX ---
        function adminLogin(e) {
            e.preventDefault();
            const u = document.getElementById('admin-user').value;
            const p = document.getElementById('admin-pass').value;

            // Secure Admin Credentials
            if (u === 'AMTEILKOUN' && p === 'MATIRKG786E') {
                nav('view-admin-panel');
                loadAdminStats();
            } else {
                alert('Invalid Credentials. Access Denied.');
            }
        }

        function adminLogout() {
            document.getElementById('admin-user').value = '';
            document.getElementById('admin-pass').value = '';
            nav('view-admin-login');
        }

        function loadAdminStats() {
            // Stats Calculation
            const revenue = state.orders.filter(o => o.status !== 'Rejected' && o.status !== 'Cancelled').reduce((sum, o) => sum + parseInt(o.total), 0);
            const pending = state.orders.filter(o => o.status === 'Pending').length;
            
            document.getElementById('admin-revenue').innerText = revenue;
            document.getElementById('admin-pending-count').innerText = pending;

            renderAdminOrders();
            renderAdminProducts();
        }

        function switchAdminTab(tab) {
            ['orders', 'products', 'qr'].forEach(t => {
                document.getElementById(`admin-tab-${t}`).classList.add('hidden');
                document.getElementById(`tab-btn-${t}`).classList.remove('bg-white', 'shadow', 'text-zinc-900');
                document.getElementById(`tab-btn-${t}`).classList.add('text-zinc-500');
            });
            document.getElementById(`admin-tab-${tab}`).classList.remove('hidden');
            document.getElementById(`tab-btn-${tab}`).classList.add('bg-white', 'shadow', 'text-zinc-900');
            document.getElementById(`tab-btn-${tab}`).classList.remove('text-zinc-500');
        }

        // --- 🛡️ ADMIN ORDER CONTROL ---
        function renderAdminOrders() {
            const container = document.getElementById('admin-orders-list');
            if(state.orders.length === 0) {
                container.innerHTML = '<p class="text-xs text-zinc-400 text-center py-4">No active orders found.</p>';
                return;
            }

            container.innerHTML = state.orders.map((o, idx) => `
                <div class="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm text-xs">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <span class="font-bold text-zinc-900 block mb-0.5">${o.id}</span>
                            <span class="text-zinc-400 text-[10px]">${o.date}</span>
                        </div>
                        <span class="${getStatusColor(o.status)} px-2 py-0.5 rounded font-bold uppercase">${o.status}</span>
                    </div>
                    <div class="bg-zinc-50 p-2 rounded border border-zinc-100 mb-2">
                        <div class="font-semibold text-zinc-700 mb-0.5">${o.userDetails.name}</div>
                        <div class="text-zinc-500 mb-0.5">${o.userDetails.mobile}</div>
                        <div class="text-zinc-500 italic">${o.userDetails.address}</div>
                    </div>
                    <div class="text-zinc-800 font-medium mb-3 pb-2 border-b border-zinc-100">
                        ${o.items.map(i => `${i.qty} x ${i.name}`).join(', ')}
                        <div class="mt-1 text-right text-orange-600 font-bold">Total: ₹${o.total}</div>
                    </div>
                    
                    <div class="flex gap-2 justify-end">
                        ${o.status === 'Pending' ? `
                            <button onclick="updateOrderStatus(${idx}, 'Accepted')" class="bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1">
                                <iconify-icon icon="lucide:check" width="14"></iconify-icon> Accept
                            </button>
                            <button onclick="updateOrderStatus(${idx}, 'Rejected')" class="bg-red-50 text-red-600 border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors flex items-center gap-1">
                                <iconify-icon icon="lucide:x" width="14"></iconify-icon> Reject
                            </button>
                        ` : ''}
                         ${o.status === 'Accepted' ? `
                            <button onclick="updateOrderStatus(${idx}, 'Delivered')" class="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1">
                                <iconify-icon icon="lucide:truck" width="14"></iconify-icon> Delivered
                            </button>
                        ` : ''}
                        <button onclick="deleteOrder(${idx})" class="text-zinc-400 hover:text-red-500 px-2 py-1.5 transition-colors" title="Delete Order">
                            <iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function updateOrderStatus(idx, status) {
            state.orders[idx].status = status;
            saveState();
            loadAdminStats();
        }

        function deleteOrder(idx) {
            if(confirm('Are you sure you want to permanently delete this order record?')) {
                state.orders.splice(idx, 1);
                saveState();
                loadAdminStats();
            }
        }

        function adminAddProduct(e) {
            e.preventDefault();
            const name = document.getElementById('new-p-name').value;
            const price = document.getElementById('new-p-price').value;
            const stock = document.getElementById('new-p-stock').value;
            const cat = document.getElementById('new-p-cat').value;
            const img = document.getElementById('new-p-img').value || 'https://via.placeholder.com/150';

            const newId = state.products.length + 1;
            state.products.push({
                id: newId, name, price, stock: parseInt(stock), cat, img, delivery: 30, discount: ''
            });

            // Update categories if new
            if(!state.categories.find(c => c.id === cat)) {
                state.categories.push({ id: cat, name: cat, img: '' });
                renderCategories();
            }

            saveState();
            e.target.reset();
            renderAdminProducts();
            renderProducts(); // Update user view
            alert('Product Launched!');
        }

        function renderAdminProducts() {
            const list = document.getElementById('admin-product-list');
            list.innerHTML = state.products.map((p, idx) => `
                <div class="flex justify-between items-center bg-white p-2 border border-zinc-100 rounded-lg shadow-sm">
                    <div class="flex items-center gap-2">
                        <img src="${p.img}" class="w-8 h-8 rounded bg-zinc-100 object-cover">
                        <div class="text-xs">
                            <div class="font-medium">${p.name}</div>
                            <div class="text-zinc-400">Stock: ${p.stock}</div>
                        </div>
                    </div>
                    <button onclick="toggleProductStock(${idx})" class="text-xs px-2 py-1 rounded transition-colors ${p.stock > 0 ? 'bg-zinc-100 hover:bg-zinc-200' : 'bg-red-100 text-red-600'}">
                        ${p.stock > 0 ? 'Disable' : 'Enable'}
                    </button>
                </div>
            `).join('');
        }

        function toggleProductStock(idx) {
            state.products[idx].stock = state.products[idx].stock > 0 ? 0 : 10;
            saveState();
            renderAdminProducts();
            renderProducts();
        }

        function updateQRCode() {
            const url = document.getElementById('new-qr-url').value;
            if(url) {
                state.adminQr = url;
                saveState();
                alert('QR Code Updated');
            }
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
      

<div className="relative flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-20" id="app">

<div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center" id="view-splash">
<div className="text-3xl font-semibold tracking-tighter text-orange-600 mb-2">AHARER SWAD</div>
<div className="text-zinc-400 text-xs tracking-widest uppercase mb-8">Authentic Indian Taste</div>
<div className="splash-loader"></div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop hidden fade-in px-6" id="modal-success">
<div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
<iconify-icon icon="lucide:check" width="32"></iconify-icon>
</div>
<h2 className="text-lg font-semibold tracking-tight mb-2">Order Placed!</h2>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                    Your order is pending. Admin will confirm it soon.
                </p>
<button className="w-full bg-zinc-900 text-white py-3.5 rounded-xl font-medium active:scale-95 transition-transform" onclick="closeSuccessModal()">
                    Go to My Orders
                </button>
</div>
</div>

<div className="view hidden fade-in px-4 pt-4" id="view-dashboard">

<div className="flex justify-between items-center mb-6">
<div>
<h1 className="text-lg font-semibold tracking-tight text-orange-600">Aharer Swad</h1>
<p className="text-xs text-zinc-500">Deliciousness delivered.</p>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 transition-colors hover:bg-zinc-200" onclick="nav('view-account')">
<iconify-icon icon="lucide:user" width="16"></iconify-icon>
</button>
</div>

<div className="relative mb-6">
<iconify-icon className="absolute left-3 top-3 text-zinc-400" icon="lucide:search" width="18"></iconify-icon>
<input className="w-full bg-white border border-zinc-200 rounded-xl py-2.5 pl-10 pr-4 text-sm placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all shadow-sm" id="search-input" oninput="filterProducts()" placeholder="Search biryani, sweets..." type="text"/>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm font-semibold tracking-tight">Categories</h2>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x" id="category-list">

</div>
</div>

<div>
<h2 className="text-sm font-semibold tracking-tight mb-3">Popular Items</h2>
<div className="grid grid-cols-2 gap-4 pb-4" id="product-list">

</div>
</div>
</div>

<div className="view hidden fade-in bg-white min-h-full" id="view-product">
<div className="relative h-72 bg-zinc-100">
<img className="w-full h-full object-cover" id="p-detail-img" src=""/>
<button className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm active:scale-95 transition-transform" onclick="goBack()">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
</div>
<div className="p-6 -mt-6 bg-white rounded-t-3xl relative shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<div className="flex justify-between items-start mb-2">
<h1 className="text-xl font-semibold tracking-tight" id="p-detail-name"></h1>
<span className="text-lg font-semibold text-orange-600" id="p-detail-price"></span>
</div>
<div className="flex gap-2 mb-6">
<span className="px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700" id="p-detail-stock-badge">In Stock</span>
<span className="px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-700" id="p-detail-discount"></span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-8">
                    Authentic Indian cuisine made with fresh ingredients. Delivery charges apply based on location.
                </p>
<div className="border-t border-zinc-100 pt-6">
<div className="flex justify-between text-sm mb-4">
<span className="text-zinc-500">Delivery</span>
<span className="font-medium">₹<span id="p-detail-delivery"></span></span>
</div>
<button className="w-full bg-zinc-900 text-white py-3.5 rounded-xl font-medium active:scale-95 transition-transform flex items-center justify-center gap-2 hover:bg-zinc-800" id="btn-add-cart" onclick="addToCart()">
<iconify-icon icon="lucide:shopping-bag" width="18"></iconify-icon>
                        Add to Cart
                    </button>
</div>
</div>
</div>

<div className="view hidden fade-in px-4 pt-4 min-h-full bg-zinc-50" id="view-cart">
<h1 className="text-lg font-semibold tracking-tight mb-6">My Cart</h1>
<div className="space-y-4 mb-6" id="cart-items">

</div>

<div className="hidden flex-col items-center justify-center pt-20 text-zinc-400" id="empty-cart">
<iconify-icon className="mb-4 opacity-20" icon="lucide:shopping-cart" width="48"></iconify-icon>
<p className="text-sm">Your cart is empty</p>
<button className="mt-4 text-orange-600 text-sm font-medium hover:underline" onclick="nav('view-dashboard')">Browse Menu</button>
</div>

<div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100 mb-20" id="cart-summary">
<div className="flex justify-between text-sm mb-2">
<span className="text-zinc-500">Subtotal</span>
<span className="font-medium">₹<span id="cart-subtotal">0</span></span>
</div>
<div className="flex justify-between text-sm mb-4">
<span className="text-zinc-500">Delivery</span>
<span className="font-medium">₹<span id="cart-delivery">0</span></span>
</div>
<div className="border-t border-zinc-100 pt-4 flex justify-between items-center mb-6">
<span className="font-semibold text-base">Total</span>
<span className="font-semibold text-lg text-orange-600">₹<span id="cart-total">0</span></span>
</div>

<div className="mb-6">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">Payment Method</label>
<div className="grid grid-cols-2 gap-3">
<button className="border border-zinc-200 rounded-lg p-3 text-sm text-center font-medium transition-colors bg-white hover:bg-zinc-50 focus:ring-2 focus:ring-orange-500 focus:border-transparent" id="btn-cod" onclick="setPayment('cod')">Cash on Delivery</button>
<button className="border border-zinc-200 rounded-lg p-3 text-sm text-center font-medium transition-colors bg-white hover:bg-zinc-50 focus:ring-2 focus:ring-orange-500 focus:border-transparent" id="btn-online" onclick="setPayment('online')">Online (QR)</button>
</div>
</div>

<div className="hidden mb-6 p-4 bg-zinc-50 rounded-lg border border-zinc-200" id="online-payment-section">
<div className="flex flex-col items-center mb-4">
<p className="text-xs text-zinc-500 mb-2">Scan to Pay</p>
<img className="w-32 h-32 bg-white p-2 rounded-lg mb-4" id="qr-display" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Upload Payment Screenshot</label>
<input className="block w-full text-xs text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" id="payment-screenshot" type="file" />
</input></div>
<button className="w-full bg-zinc-900 text-white py-3.5 rounded-xl font-medium shadow-lg shadow-zinc-200/50 active:scale-95 transition-transform hover:bg-zinc-800" onclick="proceedToCheckout()">
                     Checkout
                 </button>
</div>
</div>

<div className="view hidden fade-in px-4 pt-4 pb-20" id="view-checkout">
<div className="flex items-center gap-3 mb-6">
<button className="p-2 -ml-2 rounded-full hover:bg-zinc-100" onclick="goBack()"><iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon></button>
<h1 className="text-lg font-semibold tracking-tight">Shipping Details</h1>
</div>
<form className="space-y-4" id="checkout-form" onsubmit="placeOrder(event)">
<div>
<label className="text-xs font-medium text-zinc-500 mb-1 block">Full Name</label>
<input className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white placeholder-zinc-300" id="c-name" required="" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-zinc-500 mb-1 block">Mobile Number (Primary)</label>
<input className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white placeholder-zinc-300" id="c-mobile" pattern="[0-9]{10}" required="" type="tel"/>
</div>
<div>
<label className="text-xs font-medium text-zinc-500 mb-1 block">Alternative Mobile</label>
<input className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white placeholder-zinc-300" id="c-alt-mobile" type="tel"/>
</div>
<div>
<label className="text-xs font-medium text-zinc-500 mb-1 block">Full Address</label>
<textarea className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white placeholder-zinc-300" id="c-address" required="" rows="3"></textarea>
</div>
<div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mt-6">
<h3 className="text-sm font-semibold text-orange-800 mb-1">Order Summary</h3>
<p className="text-xs text-orange-700">Total Amount: ₹<span id="checkout-total-display">0</span></p>
<p className="text-xs text-orange-700 mt-1">Method: <span className="uppercase" id="checkout-method"></span></p>
</div>

<button className="w-full bg-zinc-900 text-white py-3.5 rounded-xl font-medium mt-4 shadow-lg active:scale-95 transition-transform hover:bg-zinc-800" type="submit">
                    Order Confirm
                </button>
</form>
</div>

<div className="view hidden fade-in px-4 pt-4 pb-20" id="view-account">
<h1 className="text-xl font-semibold tracking-tight mb-1">My Account</h1>
<p className="text-sm text-zinc-500 mb-8">Manage your orders and details.</p>
<div className="space-y-3">

<div className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Profile</h3>
<input className="w-full text-sm border-b border-zinc-100 py-2 mb-2 outline-none focus:border-orange-500 transition-colors bg-transparent" id="profile-name" placeholder="Your Name" type="text"/>
<input className="w-full text-sm border-b border-zinc-100 py-2 outline-none focus:border-orange-500 transition-colors bg-transparent" id="profile-mobile" placeholder="Mobile Number" type="tel"/>
<button className="text-xs text-orange-600 font-medium mt-3 hover:text-orange-700" onclick="saveProfile()">Save Changes</button>
</div>
<button className="w-full bg-white border border-zinc-200 rounded-xl p-4 flex items-center justify-between shadow-sm active:bg-zinc-50 transition-colors" onclick="nav('view-orders')">
<span className="text-sm font-medium">My Orders</span>
<iconify-icon className="text-zinc-400" icon="lucide:package"></iconify-icon>
</button>
<a className="w-full bg-white border border-zinc-200 rounded-xl p-4 flex items-center justify-between shadow-sm active:bg-zinc-50 transition-colors" href="tel:7908387739">
<div className="flex flex-col items-start">
<span className="text-sm font-medium">Contact Support</span>
<span className="text-xs text-zinc-400">7908387739</span>
</div>
<iconify-icon className="text-green-600" icon="lucide:phone"></iconify-icon>
</a>

<button className="w-full mt-8 py-3 text-xs text-zinc-400 font-medium text-center hover:text-zinc-600 transition-colors" onclick="nav('view-admin-login')">
<span className="flex items-center justify-center gap-1"><iconify-icon icon="lucide:lock" width="12"></iconify-icon> Admin Panel Access</span>
</button>
</div>
</div>

<div className="view hidden fade-in px-4 pt-4 pb-20 bg-zinc-50 min-h-full" id="view-orders">
<div className="flex items-center gap-3 mb-6">
<button className="p-2 -ml-2 rounded-full hover:bg-zinc-100" onclick="nav('view-account')"><iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon></button>
<h1 className="text-lg font-semibold tracking-tight">Order History</h1>
</div>
<div className="space-y-4" id="orders-list">

</div>
</div>

<div className="view hidden fade-in px-6 pt-20 flex flex-col items-center" id="view-admin-login">
<div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-zinc-200">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight mb-1">Admin Access</h2>
<p className="text-sm text-zinc-500 mb-8 text-center">Enter your secure credentials to manage the application.</p>
<form className="w-full max-w-sm space-y-4" onsubmit="adminLogin(event)">
<input className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-zinc-900 outline-none transition-shadow bg-white" id="admin-user" placeholder="Username" type="text"/>
<input className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-zinc-900 outline-none transition-shadow bg-white" id="admin-pass" placeholder="Password" type="password"/>
<button className="w-full bg-zinc-900 text-white py-3.5 rounded-xl font-medium shadow-md hover:bg-zinc-800 transition-colors" type="submit">Access Panel</button>
</form>
<button className="mt-6 text-sm text-zinc-400 hover:text-zinc-600" onclick="nav('view-account')">Cancel</button>
</div>

<div className="view hidden fade-in bg-zinc-50 min-h-full pb-20" id="view-admin-panel">

<div className="bg-white border-b border-zinc-200 px-4 py-4 flex justify-between items-center sticky top-0 z-30">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<h1 className="font-semibold text-sm tracking-tight">Admin Dashboard</h1>
</div>
<button className="text-xs font-medium text-red-600 hover:text-red-700 bg-red-50 px-3 py-1.5 rounded-lg transition-colors" onclick="adminLogout()">Logout</button>
</div>
<div className="p-4 space-y-6">

<div className="grid grid-cols-2 gap-3">
<div className="bg-white p-3 rounded-xl border border-zinc-100 shadow-sm">
<span className="text-zinc-400 text-xs uppercase font-medium">Revenue</span>
<div className="text-lg font-semibold text-zinc-900 mt-1">₹<span id="admin-revenue">0</span></div>
</div>
<div className="bg-white p-3 rounded-xl border border-zinc-100 shadow-sm">
<span className="text-zinc-400 text-xs uppercase font-medium">Pending</span>
<div className="text-lg font-semibold text-orange-600 mt-1" id="admin-pending-count">0</div>
</div>
</div>

<div className="flex space-x-1 bg-zinc-200/50 p-1 rounded-lg">
<button className="flex-1 py-1.5 text-xs font-medium rounded-md bg-white shadow text-zinc-900 transition-all" id="tab-btn-orders" onclick="switchAdminTab('orders')">Orders</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-900 transition-all" id="tab-btn-products" onclick="switchAdminTab('products')">Products</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-900 transition-all" id="tab-btn-qr" onclick="switchAdminTab('qr')">QR Code</button>
</div>

<div className="space-y-4" id="admin-tab-orders">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Order Requests</h3>
<div className="space-y-3" id="admin-orders-list">

</div>
</div>

<div className="hidden space-y-4" id="admin-tab-products">
<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<h3 className="text-sm font-semibold mb-3">Add New Product</h3>
<form className="space-y-3" onsubmit="adminAddProduct(event)">
<input className="w-full border border-zinc-200 rounded-lg p-2.5 text-xs outline-none focus:border-zinc-900" id="new-p-name" placeholder="Product Name" required=""/>
<div className="grid grid-cols-2 gap-2">
<input className="w-full border border-zinc-200 rounded-lg p-2.5 text-xs outline-none focus:border-zinc-900" id="new-p-price" placeholder="Price" required="" type="number"/>
<input className="w-full border border-zinc-200 rounded-lg p-2.5 text-xs outline-none focus:border-zinc-900" id="new-p-stock" placeholder="Stock" required="" type="number"/>
</div>
<input className="w-full border border-zinc-200 rounded-lg p-2.5 text-xs outline-none focus:border-zinc-900" id="new-p-cat" placeholder="Category (e.g. Sweets)" required=""/>
<input className="w-full border border-zinc-200 rounded-lg p-2.5 text-xs outline-none focus:border-zinc-900" id="new-p-img" placeholder="Image URL"/>
<button className="w-full bg-zinc-900 text-white py-2.5 rounded-lg text-xs font-medium hover:bg-zinc-800" type="submit">Launch Product</button>
</form>
</div>
<div className="space-y-2" id="admin-product-list">

</div>
</div>

<div className="hidden space-y-4" id="admin-tab-qr">
<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<h3 className="text-sm font-semibold mb-2">Update UPI QR Code</h3>
<input className="w-full border border-zinc-200 rounded-lg p-2.5 text-xs mb-2 outline-none focus:border-zinc-900" id="new-qr-url" placeholder="Paste New QR Image URL"/>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-xs font-medium w-full hover:bg-zinc-800" onclick="updateQRCode()">Update QR</button>
</div>
</div>
</div>
</div>
</div>

<nav className="fixed bottom-0 w-full bg-white/95 backdrop-blur border-t border-zinc-100 flex justify-around py-3 z-40 hidden shadow-[0_-1px_3px_rgba(0,0,0,0.05)]" id="bottom-nav">
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-orange-600 transition-colors nav-btn" data-target="view-dashboard" onclick="nav('view-dashboard')">
<iconify-icon icon="lucide:home" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="relative flex flex-col items-center gap-1 text-zinc-400 hover:text-orange-600 transition-colors nav-btn" data-target="view-cart" onclick="nav('view-cart')">
<div className="relative">
<iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
<span className="absolute -top-1 -right-2 bg-orange-600 text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full hidden" id="nav-cart-count">0</span>
</div>
<span className="text-[10px] font-medium">Cart</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-orange-600 transition-colors nav-btn" data-target="view-account" onclick="nav('view-account')">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Account</span>
</button>
</nav>


    </>
  );
}
