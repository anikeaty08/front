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



    const RAZORPAY_KEY = 'rzp_test_SDfMtnO1SCNssp';
    
    const menuItems = [
        { id: 1, name: 'Banana Power Blast', category: 'pre-workout', price: 149, desc: 'Banana, oats, peanut butter, honey — pure energy fuel.', img: 'https://images.unsplash.com/photo-1593094609558-a381177ebf21?w=600&h=400&fit=crop&q=80', tag: 'Popular' },
        { id: 2, name: 'Green Machine', category: 'pre-workout', price: 179, desc: 'Spinach, apple, ginger, lemon — clean pre-workout energy.', img: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&q=80', tag: '' },
        { id: 3, name: 'Mango Burst', category: 'pre-workout', price: 159, desc: 'Fresh mango, yogurt, chia seeds — tropical energy boost.', img: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&h=400&fit=crop&q=80', tag: '' },
        { id: 4, name: 'Berry Recovery', category: 'post-workout', price: 189, desc: 'Mixed berries, banana, protein — ideal post-training fuel.', img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=600&h=400&fit=crop&q=80', tag: 'Best Seller' },
        { id: 5, name: 'Peanut Butter Shake', category: 'post-workout', price: 199, desc: 'Peanut butter, banana, milk, oats — muscle recovery blend.', img: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&h=400&fit=crop&q=80', tag: '' },
        { id: 6, name: 'Choco Protein Shake', category: 'post-workout', price: 219, desc: 'Cocoa, banana, milk, dates — rich recovery fuel.', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop&q=80', tag: 'New' },
        { id: 7, name: 'Seasonal Fruit Bowl', category: 'fruit-bowl', price: 129, desc: 'Fresh seasonal fruits with honey drizzle and seeds.', img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&h=400&fit=crop&q=80', tag: '' },
        { id: 8, name: 'Acai Power Bowl', category: 'fruit-bowl', price: 249, desc: 'Acai base topped with banana, granola, and berries.', img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop&q=80', tag: 'Premium' },
        { id: 9, name: 'Tropical Paradise', category: 'fruit-bowl', price: 179, desc: 'Mango, papaya, pineapple with coconut and chia.', img: 'https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=600&h=400&fit=crop&q=80', tag: '' },
        { id: 13, name: 'Chia Seeds Pack', category: 'addons', price: 30, desc: 'Rich in omega-3 and fiber.', img: 'https://images.unsplash.com/photo-1616429533355-6b5d95d820d2?w=600&h=400&fit=crop&q=80', tag: '' },
        { id: 14, name: 'Flax Seeds Pack', category: 'addons', price: 25, desc: 'High in fiber and healthy fats.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=400&fit=crop&q=80', tag: '' },
        { id: 15, name: 'Oats Pack', category: 'addons', price: 20, desc: 'Complex carbs for sustained fuel.', img: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=600&h=400&fit=crop&q=80', tag: '' },
        { id: 16, name: 'Mixed Nuts Pack', category: 'addons', price: 40, desc: 'Almonds, cashews, walnuts.', img: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&h=400&fit=crop&q=80', tag: '' },
        { id: 17, name: 'Honey Bottle', category: 'addons', price: 15, desc: 'Natural sweetener.', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=400&fit=crop&q=80', tag: '' },
        { id: 18, name: 'Peanut Butter', category: 'addons', price: 35, desc: 'Protein-packed spread.', img: 'https://images.unsplash.com/photo-1612187209234-192a82313775?w=600&h=400&fit=crop&q=80', tag: '' },
    ];

    let inventory = JSON.parse(localStorage.getItem('pp_inventory')) || [
        { id: 'b1', name: 'Milk', category: 'base', price: 30, stock: 100, available: true },
        { id: 'b2', name: 'Yogurt', category: 'base', price: 35, stock: 80, available: true },
        { id: 'b3', name: 'Coconut Water', category: 'base', price: 40, stock: 50, available: true },
        { id: 'b4', name: 'Almond Milk', category: 'base', price: 50, stock: 40, available: true },
        { id: 'b5', name: 'Water', category: 'base', price: 0, stock: 999, available: true },
        { id: 'f1', name: 'Banana', category: 'fruit', price: 20, stock: 200, available: true },
        { id: 'f2', name: 'Mango', category: 'fruit', price: 30, stock: 150, available: true },
        { id: 'f3', name: 'Strawberry', category: 'fruit', price: 40, stock: 80, available: true },
        { id: 'f4', name: 'Blueberry', category: 'fruit', price: 50, stock: 60, available: true },
        { id: 'f5', name: 'Apple', category: 'fruit', price: 25, stock: 120, available: true },
        { id: 'f6', name: 'Papaya', category: 'fruit', price: 20, stock: 100, available: true },
        { id: 'f7', name: 'Pineapple', category: 'fruit', price: 30, stock: 90, available: true },
        { id: 'f8', name: 'Kiwi', category: 'fruit', price: 45, stock: 50, available: true },
        { id: 'bo1', name: 'Chia Seeds', category: 'booster', price: 20, stock: 100, available: true },
        { id: 'bo2', name: 'Flax Seeds', category: 'booster', price: 15, stock: 120, available: true },
        { id: 'bo3', name: 'Oats', category: 'booster', price: 10, stock: 200, available: true },
        { id: 'bo4', name: 'Protein Powder', category: 'booster', price: 40, stock: 60, available: true },
        { id: 'bo5', name: 'Peanut Butter', category: 'booster', price: 25, stock: 100, available: true },
        { id: 'bo6', name: 'Spinach', category: 'booster', price: 15, stock: 80, available: true },
        { id: 's1', name: 'Honey', category: 'sweetener', price: 15, stock: 150, available: true },
        { id: 's2', name: 'Dates', category: 'sweetener', price: 20, stock: 80, available: true },
        { id: 's3', name: 'Jaggery', category: 'sweetener', price: 10, stock: 100, available: true },
        { id: 's4', name: 'No Sweetener', category: 'sweetener', price: 0, stock: 999, available: true },
        { id: 't1', name: 'Almonds', category: 'topping', price: 30, stock: 80, available: true },
        { id: 't2', name: 'Granola', category: 'topping', price: 25, stock: 70, available: true },
        { id: 't3', name: 'Coconut Flakes', category: 'topping', price: 15, stock: 90, available: true },
        { id: 't4', name: 'Mixed Nuts', category: 'topping', price: 35, stock: 60, available: true },
    ];
    
    let cart = JSON.parse(localStorage.getItem('pp_cart')) || [];
    let orders = JSON.parse(localStorage.getItem('pp_orders')) || [];
    let customBlend = { base: null, fruits: [], boosters: [], sweetener: null, toppings: [], size: 'medium' };
    const sizePrices = { small: 99, regular: 129, medium: 149, large: 199 };

    function saveInventory() { localStorage.setItem('pp_inventory', JSON.stringify(inventory)); }
    function saveOrders() { localStorage.setItem('pp_orders', JSON.stringify(orders)); }
    function saveCart() { localStorage.setItem('pp_cart', JSON.stringify(cart)); }

    function showToast(msg) {
        const toast = document.getElementById('toast');
        document.getElementById('toast-msg').textContent = msg;
        toast.classList.remove('toast-exit');
        toast.classList.add('toast-enter');
        setTimeout(() => { toast.classList.remove('toast-enter'); toast.classList.add('toast-exit'); }, 3000);
    }

    function renderMenu(filter) {
        filter = filter || 'all';
        const grid = document.getElementById('menu-grid');
        const filtered = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);
        
        grid.innerHTML = filtered.map(item => `
            <div class="menu-item card-hover bg-white rounded-2xl border border-gray-100 overflow-hidden" data-category="${item.category}">
                <div class="relative cursor-pointer" onclick="openImageModal(${item.id})">
                    <img src="${item.img}" alt="${item.name}" class="w-full h-32 sm:h-48 object-cover" loading="lazy">
                    ${item.tag ? '<span class="absolute top-2 left-2 px-2 py-0.5 bg-white/90 backdrop-blur rounded-full text-xs font-medium text-gray-700">' + item.tag + '</span>' : ''}
                </div>
                <div class="p-3 sm:p-5">
                    <div class="flex items-start justify-between gap-2 mb-2">
                        <h3 class="font-medium text-sm sm:text-base text-gray-900 leading-tight">${item.name}</h3>
                        <span class="text-sm sm:text-base font-semibold text-green-600 whitespace-nowrap">₹${item.price}</span>
                    </div>
                    <p class="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2">${item.desc}</p>
                    <button onclick="event.stopPropagation(); addToCart({id:${item.id},name:'${item.name}',price:${item.price}})" class="w-full py-2 sm:py-2.5 bg-green-50 text-green-700 text-xs sm:text-sm font-medium rounded-lg hover:bg-green-100 transition flex items-center justify-center gap-2">
                        <iconify-icon icon="solar:cart-plus-linear" width="16" height="16"></iconify-icon>
                        Add to Cart
                    </button>
                </div>
            </div>`).join('');
    }
    
    function filterMenu(filter) {
        document.querySelectorAll('.menu-tab').forEach(tab => {
            if (tab.dataset.tab === filter) tab.className = 'menu-tab px-4 py-2 text-sm font-medium rounded-full bg-green-600 text-white transition whitespace-nowrap';
            else tab.className = 'menu-tab px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition whitespace-nowrap';
        });
        renderMenu(filter);
    }

    function toggleCart() {
        document.getElementById('cart-sidebar').classList.toggle('open');
        document.getElementById('cart-overlay').classList.toggle('hidden');
        if (document.getElementById('cart-sidebar').classList.contains('open')) renderCart();
    }
    
    function addToCart(item) {
        const existing = cart.find(c => c.id === item.id && !c.custom);
        if (existing) existing.qty++; else cart.push({ id: item.id, name: item.name, price: item.price, qty: 1, custom: false });
        updateCartCount(); saveCart(); showToast('Added to cart');
    }
    
    function updateCartCount() {
        const count = cart.reduce((s, i) => s + i.qty, 0);
        const el = document.getElementById('cart-count');
        if (count > 0) { el.textContent = count; el.classList.remove('hidden'); } else el.classList.add('hidden');
    }

    function renderCart() {
        const list = document.getElementById('cart-list');
        if (cart.length === 0) {
            list.classList.add('hidden'); document.getElementById('cart-empty').classList.remove('hidden'); document.getElementById('cart-footer').classList.add('hidden');
            return;
        }
        document.getElementById('cart-empty').classList.add('hidden'); list.classList.remove('hidden'); document.getElementById('cart-footer').classList.remove('hidden');
        list.innerHTML = cart.map((item, i) => `
            <div class="flex items-start gap-3 pb-4 border-b border-gray-100">
                <div class="flex-1">
                    <div class="text-sm font-medium text-gray-900">${item.name}</div>
                    <div class="flex items-center gap-3 mt-2">
                        <button onclick="changeQty(${i}, -1)" class="w-7 h-7 border rounded flex items-center justify-center text-gray-500 hover:bg-gray-50">−</button>
                        <span class="text-sm font-medium w-5 text-center">${item.qty}</span>
                        <button onclick="changeQty(${i}, 1)" class="w-7 h-7 border rounded flex items-center justify-center text-gray-500 hover:bg-gray-50">+</button>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-sm font-medium text-gray-900">₹${item.price * item.qty}</div>
                </div>
            </div>`).join('');
        document.getElementById('cart-total').textContent = '₹' + cart.reduce((s, i) => s + (i.price * i.qty), 0);
    }
    
    function changeQty(i, d) { cart[i].qty += d; if (cart[i].qty <= 0) cart.splice(i, 1); updateCartCount(); saveCart(); renderCart(); }

    function proceedToCheckout() {
        if (cart.length === 0) return;
        toggleCart();
        const itemsList = document.getElementById('checkout-items-list');
        const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
        itemsList.innerHTML = cart.map(i => `<div class="flex justify-between text-sm"><span class="text-gray-600">${i.name} × ${i.qty}</span><span class="font-medium">₹${i.price * i.qty}</span></div>`).join('') + 
        `<div class="flex justify-between text-sm font-semibold pt-2 border-t mt-2"><span>Total</span><span class="text-green-600">₹${total}</span></div>`;
        document.getElementById('checkout-total').textContent = '₹' + total;
        document.getElementById('checkout-modal').classList.remove('hidden');
        document.getElementById('checkout-modal').classList.add('flex');
    }
    
    function closeCheckout() { 
        document.getElementById('checkout-modal').classList.add('hidden'); 
        document.getElementById('checkout-modal').classList.remove('flex'); 
    }

    function handleCheckout() {
        const name = document.getElementById('checkout-name').value;
        const email = document.getElementById('checkout-email').value;
        const phone = document.getElementById('checkout-phone').value;
        const address = document.getElementById('checkout-address').value;
        const pincode = document.getElementById('checkout-pincode').value;

        if (!name || !email || !phone || !address || !pincode) { 
            showToast('Please fill all fields'); 
            return; 
        }

        if (!/^\d{10}$/.test(phone)) { 
            showToast('Phone must be 10 digits'); 
            return; 
        }

        if (!/^\d{6}$/.test(pincode)) { 
            showToast('Pincode must be 6 digits'); 
            return; 
        }

        const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
        const payBtn = document.getElementById('pay-btn');
        payBtn.disabled = true;
        payBtn.innerHTML = 'Processing...';

        const options = {
            key: RAZORPAY_KEY,
            amount: total * 100,
            currency: 'INR',
            name: 'PoshanPoint',
            description: 'Order Payment',
            handler: function(response) {
                const orderId = 'ORD-' + Date.now();
                orders.push({ id: orderId, customer: {name, email, phone, address, pincode}, items: [...cart], total, date: new Date().toISOString(), paymentId: response.razorpay_payment_id, status: 'Paid' });
                saveOrders();
                cart = []; updateCartCount(); saveCart();
                closeCheckout();
                
                document.getElementById('success-order-id').textContent = 'Order ID: ' + orderId;
                document.getElementById('success-payment-id').textContent = 'Payment ID: ' + response.razorpay_payment_id;
                document.getElementById('success-modal').classList.remove('hidden');
                document.getElementById('success-modal').classList.add('flex');
                
                payBtn.disabled = false;
                payBtn.innerHTML = '<iconify-icon icon="solar:card-linear" width="20" height="20"></iconify-icon> Pay with Razorpay';
            },
            prefill: { name, email, contact: phone },
            theme: { color: '#16a34a' },
            modal: {
                ondismiss: function() {
                    payBtn.disabled = false;
                    payBtn.innerHTML = '<iconify-icon icon="solar:card-linear" width="20" height="20"></iconify-icon> Pay with Razorpay';
                }
            }
        };

        try {
            const rzp = new Razorpay(options);
            rzp.on('payment.failed', function(response) {
                showToast('Payment failed');
                payBtn.disabled = false;
                payBtn.innerHTML = '<iconify-icon icon="solar:card-linear" width="20" height="20"></iconify-icon> Pay with Razorpay';
            });
            rzp.open();
        } catch (error) {
            showToast('Payment error');
            payBtn.disabled = false;
            payBtn.innerHTML = '<iconify-icon icon="solar:card-linear" width="20" height="20"></iconify-icon> Pay with Razorpay';
        }
    }

    function closeSuccessModal() { 
        document.getElementById('success-modal').classList.add('hidden'); 
        document.getElementById('success-modal').classList.remove('flex'); 
    }

    function renderCustomizer() {
        const getItems = (cat) => inventory.filter(i => i.category === cat && i.available && i.stock > 0);
        function renderChips(items, selVal, isMulti, fnName) {
            if(!items.length) return '<p class="text-xs text-gray-400 col-span-2">Unavailable</p>';
            return items.map(i => {
                const sel = isMulti ? selVal.includes(i.id) : selVal === i.id;
                return `<button onclick="${fnName}('${i.id}')" class="ingredient-chip ${sel ? 'selected' : ''} p-3 rounded-xl border-2 ${sel ? 'border-green-500 bg-green-50' : 'border-gray-200'} text-left relative transition">
                    <div class="chip-check absolute top-2 right-2 w-4 h-4 bg-green-600 rounded-full items-center justify-center ${sel ? 'flex' : ''}"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    <div class="text-sm font-medium text-gray-900">${i.name}</div>
                    <div class="text-xs text-gray-500">${i.price > 0 ? '+₹'+i.price : 'Free'}</div>
                </button>`;
            }).join('');
        }
        document.getElementById('base-options').innerHTML = renderChips(getItems('base'), customBlend.base, false, 'selectBase');
        document.getElementById('fruit-options').innerHTML = renderChips(getItems('fruit'), customBlend.fruits, true, 'toggleFruit');
        document.getElementById('booster-options').innerHTML = renderChips(getItems('booster'), customBlend.boosters, true, 'toggleBooster');
        document.getElementById('sweetener-options').innerHTML = renderChips(getItems('sweetener'), customBlend.sweetener, false, 'selectSweetener');
        document.getElementById('topping-options').innerHTML = renderChips(getItems('topping'), customBlend.toppings, true, 'toggleTopping');
        updateBlendSummary();
    }
    
    function selectBase(id) { customBlend.base = customBlend.base === id ? null : id; renderCustomizer(); }
    function selectSweetener(id) { customBlend.sweetener = customBlend.sweetener === id ? null : id; renderCustomizer(); }
    function toggleFruit(id) { const idx = customBlend.fruits.indexOf(id); if (idx > -1) customBlend.fruits.splice(idx, 1); else if (customBlend.fruits.length < 3) customBlend.fruits.push(id); else showToast('Max 3 fruits'); renderCustomizer(); }
    function toggleBooster(id) { const idx = customBlend.boosters.indexOf(id); if (idx > -1) customBlend.boosters.splice(idx, 1); else customBlend.boosters.push(id); renderCustomizer(); }
    function toggleTopping(id) { const idx = customBlend.toppings.indexOf(id); if (idx > -1) customBlend.toppings.splice(idx, 1); else if (customBlend.toppings.length < 3) customBlend.toppings.push(id); else showToast('Max 3 toppings'); renderCustomizer(); }
    function selectSize(s) { customBlend.size = s; updateBlendSummary(); document.querySelectorAll('.size-btn').forEach(b => { if(b.dataset.size === s) { b.classList.add('border-green-500','bg-green-50','text-green-700'); b.classList.remove('border-gray-200','text-gray-600'); } else { b.classList.remove('border-green-500','bg-green-50','text-green-700'); b.classList.add('border-gray-200','text-gray-600'); } }); }
    
    function updateBlendSummary() {
        let total = sizePrices[customBlend.size];
        let names = [];
        if (customBlend.base) { const i = inventory.find(x => x.id === customBlend.base); total += i.price; names.push(i.name); }
        [...customBlend.fruits, ...customBlend.boosters, ...customBlend.toppings].forEach(id => { const i = inventory.find(x => x.id === id); if(i) { total += i.price; names.push(i.name); } });
        if (customBlend.sweetener) { const i = inventory.find(x => x.id === customBlend.sweetener); total += i.price; names.push(i.name); }
        
        document.getElementById('blend-summary').textContent = names.length ? names.join(', ') : 'Select ingredients...';
        document.getElementById('blend-total').textContent = '₹' + total;
    }

    function addCustomBlendToCart() {
        if (!customBlend.base || !customBlend.fruits.length) { showToast('Select Base & Fruits'); return; }
        let total = parseInt(document.getElementById('blend-total').textContent.replace('₹',''));
        cart.push({ id: 'cust-'+Date.now(), name: 'Custom Blend ('+customBlend.size+')', price: total, qty: 1, custom: true });
        updateCartCount(); saveCart(); showToast('Custom blend added!');
    }

    function toggleMobileMenu() { 
        document.getElementById('mobile-menu').classList.toggle('open'); 
        document.getElementById('mobile-overlay').classList.toggle('hidden'); 
    }
    
    function handleContact() { 
        const name = document.getElementById('contact-name').value;
        const phone = document.getElementById('contact-phone').value;
        const message = document.getElementById('contact-message').value;
        if (!name || !phone || !message) { showToast('Please fill all fields'); return; }
        showToast('Message sent!'); 
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-phone').value = '';
        document.getElementById('contact-message').value = '';
    }
    
    function openImageModal(id) { 
        const i = menuItems.find(m => m.id === id); 
        if(!i) return; 
        document.getElementById('img-modal-src').src = i.img; 
        document.getElementById('img-modal-name').textContent = i.name; 
        document.getElementById('img-modal-price').textContent = '₹'+i.price; 
        document.getElementById('img-modal-desc').textContent = i.desc;
        document.getElementById('img-modal').classList.add('active'); 
        document.getElementById('img-modal-add-btn').onclick = () => { addToCart(i); closeImageModalForce(); }; 
    }
    
    function closeImageModalForce() { document.getElementById('img-modal').classList.remove('active'); }
    function closeImageModal(e) { if(e.target.id === 'img-modal') closeImageModalForce(); }

    function init() {
        renderMenu('all');
        renderCustomizer();
        updateCartCount();
    }
    init();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-white/80 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2" href="#home">
<div className="w-9 h-9 bg-gradient-to-br from-green-600 to-orange-500 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm">P</span>
</div>
<div className="flex flex-col leading-none">
<span className="font-semibold text-base tracking-tight text-gray-900">PoshanPoint</span>
<span className="text-xs text-gray-500 hidden sm:block">Daily Poshan, Better Performance</span>
</div>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-green-600 transition" href="#home">Home</a>
<a className="text-sm font-medium text-gray-600 hover:text-green-600 transition" href="#menu">Menu</a>
<a className="text-sm font-medium text-gray-600 hover:text-green-600 transition" href="#customize">Customize</a>
<a className="text-sm font-medium text-gray-600 hover:text-green-600 transition" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-gray-600 hover:text-green-600 transition" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition" href="#menu">
                        Order Now
                    </a>
<button className="relative p-2 text-gray-600 hover:text-green-600 transition" onclick="toggleCart()">
<iconify-icon height="22" icon="solar:bag-3-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center hidden" id="cart-count">0</span>
</button>
<button className="lg:hidden p-2 text-gray-600" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="mobile-menu fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl" id="mobile-menu">
<div className="p-6">
<div className="flex items-center justify-between mb-8">
<span className="font-semibold text-base">Menu</span>
<button className="p-2 text-gray-500" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-4">
<a className="text-base font-medium text-gray-700 hover:text-green-600 transition py-2" href="#home" onclick="toggleMobileMenu()">Home</a>
<a className="text-base font-medium text-gray-700 hover:text-green-600 transition py-2" href="#menu" onclick="toggleMobileMenu()">Menu</a>
<a className="text-base font-medium text-gray-700 hover:text-green-600 transition py-2" href="#customize" onclick="toggleMobileMenu()">Customize</a>
<a className="text-base font-medium text-gray-700 hover:text-green-600 transition py-2" href="#how-it-works" onclick="toggleMobileMenu()">How It Works</a>
<a className="text-base font-medium text-gray-700 hover:text-green-600 transition py-2" href="#contact" onclick="toggleMobileMenu()">Contact</a>
<a className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white text-sm font-medium rounded-lg" href="#menu" onclick="toggleMobileMenu()">
                    Order Now
                </a>
</div>
</div>
</div>
<div className="fixed inset-0 bg-black/30 z-40 hidden" id="mobile-overlay" onclick="toggleMobileMenu()"></div>

<div className="mobile-menu fixed top-0 right-0 bottom-0 w-80 sm:w-96 bg-white z-50 shadow-2xl" id="cart-sidebar">
<div className="flex flex-col h-full">
<div className="p-6 border-b border-gray-100">
<div className="flex items-center justify-between">
<span className="font-semibold text-base tracking-tight">Your Order</span>
<button className="p-2 text-gray-500" onclick="toggleCart()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6" id="cart-items">
<div className="flex flex-col items-center justify-center h-full text-gray-400" id="cart-empty">
<iconify-icon className="mb-3" height="48" icon="solar:bag-3-linear" width="48"></iconify-icon>
<p className="text-sm">Your cart is empty</p>
</div>
<div className="space-y-4 hidden" id="cart-list"></div>
</div>
<div className="p-6 border-t border-gray-100 hidden" id="cart-footer">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-gray-600">Total</span>
<span className="font-semibold text-lg" id="cart-total">₹0</span>
</div>
<button className="w-full py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition" onclick="proceedToCheckout()">
                    Proceed to Pay
                </button>
</div>
</div>
</div>
<div className="fixed inset-0 bg-black/30 z-40 hidden" id="cart-overlay" onclick="toggleCart()"></div>

<div className="img-modal-overlay" id="img-modal" onclick="closeImageModal(event)">
<div className="relative max-w-lg w-full mx-4" onclick="event.stopPropagation()">
<button className="absolute -top-12 right-0 text-white hover:text-gray-300 transition z-10" onclick="closeImageModalForce()">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<img alt="Preview" className="w-full rounded-2xl shadow-2xl" id="img-modal-src" src=""/>
<div className="mt-4 text-center">
<p className="text-white font-medium text-lg" id="img-modal-name"></p>
<p className="text-green-400 font-semibold text-base mt-1" id="img-modal-price"></p>
<p className="text-gray-300 text-sm mt-2" id="img-modal-desc"></p>
<button className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition" id="img-modal-add-btn">
<iconify-icon height="20" icon="solar:cart-plus-linear" width="20"></iconify-icon>
                    Add to Cart
                </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center bg-black/40" id="checkout-modal">
<div className="bg-white rounded-2xl max-w-md w-full mx-4 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
<div className="flex items-center justify-between mb-6">
<h3 className="font-semibold text-lg tracking-tight">Checkout</h3>
<button className="p-2 text-gray-400 hover:text-gray-600" onclick="closeCheckout()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="mb-6 bg-gray-50 rounded-xl p-4" id="checkout-items-summary">
<h4 className="text-sm font-medium text-gray-700 mb-3">Order Summary</h4>
<div className="space-y-2" id="checkout-items-list"></div>
</div>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
<input className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" id="checkout-name" placeholder="Rahul Sharma" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
<input className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" id="checkout-email" placeholder="rahul@email.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
<input className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" id="checkout-phone" maxlength="10" pattern="[0-9]{10}" placeholder="9876543210" type="tel"/>
<p className="text-xs text-gray-400 mt-1">10 digits only</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Delivery Address *</label>
<textarea className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none" id="checkout-address" placeholder="Full delivery address with pincode" rows="3"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Pincode *</label>
<input className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" id="checkout-pincode" pattern="[0-9]{6}" placeholder="110001" type="text"/>
</div>
<div className="pt-2">
<div className="flex items-center justify-between mb-3">
<span className="text-sm text-gray-600">Order Total</span>
<span className="font-semibold text-lg text-green-600" id="checkout-total">₹0</span>
</div>
<button className="w-full py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2" id="pay-btn" onclick="handleCheckout()">
<iconify-icon height="20" icon="solar:card-linear" width="20"></iconify-icon>
                        Pay with Razorpay
                    </button>
<p className="text-xs text-gray-400 text-center mt-2">Secure payment powered by Razorpay</p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[70] hidden items-center justify-center bg-black/40" id="success-modal">
<div className="bg-white rounded-2xl max-w-sm w-full mx-4 p-8 text-center">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-green-600" height="32" icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="font-semibold text-xl tracking-tight text-gray-900 mb-2">Order Placed! 🎉</h3>
<p className="text-sm text-gray-500 mb-2">Your payment was successful.</p>
<p className="text-xs text-gray-400 mb-1" id="success-order-id"></p>
<p className="text-xs text-gray-400 mb-6" id="success-payment-id"></p>
<button className="w-full py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition" onclick="closeSuccessModal()">
                Continue Shopping
            </button>
</div>
</div>

<section className="hero-gradient pt-16" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full mb-6">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
<span className="text-xs font-medium text-green-700">Fitness Food Brand</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
                        Smart <span className="gradient-text">Poshan</span> for Active Living.
                    </h1>
<p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Fuel your fitness journey with freshly prepared smoothies, fruit bowls, and fitness-friendly meals. Made with real ingredients, designed for real results.
                    </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 hover:bg-green-700 transition pulse-glow text-sm font-medium text-white bg-green-600 rounded-lg pt-3 pr-6 pb-3 pl-6" href="#menu">
                            Order Now
                            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition" href="#customize">
                            Customize Your Blend
                        </a>
</div>
<div className="flex items-center gap-8 mt-10 pt-8 border-t border-gray-200/60">
<div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">100%</div>
<div className="text-xs text-gray-500 mt-0.5">Fresh Ingredients</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">50+</div>
<div className="text-xs text-gray-500 mt-0.5">Menu Items</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">500+</div>
<div className="text-xs text-gray-500 mt-0.5">Happy Customers</div>
</div>
</div>
</div>
<div className="relative hidden lg:block">
<div className="relative aspect-square max-w-lg mx-auto">
<div className="absolute inset-0 bg-gradient-to-br from-green-200/40 to-orange-200/40 rounded-3xl rotate-6"></div>
<div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
<img alt="Fresh Smoothie Bowl" className="aspect-square w-full h-full object-cover" src="https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=600&amp;h=600&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Fuel Every Phase</h2>
<p className="text-base text-gray-500 max-w-2xl mx-auto">From pre-workout energy boosts to post-workout recovery.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<a className="card-hover group bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-4 sm:p-6 border border-orange-100 text-center sm:text-left" href="#menu" onclick="setTimeout(()=&gt;filterMenu('pre-workout'),100)">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:bg-orange-200 transition">
<iconify-icon className="text-orange-600" height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">Pre-Workout</h3>
<p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Energy-packed blends.</p>
</a>
<a className="card-hover group bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-4 sm:p-6 border border-green-100 text-center sm:text-left" href="#menu" onclick="setTimeout(()=&gt;filterMenu('post-workout'),100)">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:bg-green-200 transition">
<iconify-icon className="text-green-600" height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">Post-Workout</h3>
<p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Recovery fuel to rebuild.</p>
</a>
<a className="card-hover group bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-4 sm:p-6 border border-purple-100 text-center sm:text-left" href="#menu" onclick="setTimeout(()=&gt;filterMenu('fruit-bowl'),100)">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:bg-purple-200 transition">
<iconify-icon className="text-purple-600" height="24" icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">Fruit Bowls</h3>
<p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Fresh seasonal goodness.</p>
</a>
<a className="card-hover group bg-gradient-to-br from-sky-50 to-sky-100/50 rounded-2xl p-4 sm:p-6 border border-sky-100 text-center sm:text-left" href="#customize">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:bg-sky-200 transition">
<iconify-icon className="text-sky-600" height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">Custom</h3>
<p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Build your own blend.</p>
</a>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-gray-50/50" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-8 sm:mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-4">From Our Menu</h2>
<p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">Freshly prepared, fitness-friendly recipes.</p>
</div>
<div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full bg-green-600 text-white transition whitespace-nowrap" data-tab="all" onclick="filterMenu('all')">All</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition whitespace-nowrap" data-tab="pre-workout" onclick="filterMenu('pre-workout')">Pre-Workout</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition whitespace-nowrap" data-tab="post-workout" onclick="filterMenu('post-workout')">Post-Workout</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition whitespace-nowrap" data-tab="fruit-bowl" onclick="filterMenu('fruit-bowl')">Fruit Bowls</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition whitespace-nowrap" data-tab="addons" onclick="filterMenu('addons')">Add-ons</button>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6" id="menu-grid"></div>
</div>
</section>

<section className="py-16 sm:py-20 bg-white" id="customize">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Customize Your Blend</h2>
<p className="text-base text-gray-500 max-w-2xl mx-auto">Build the perfect smoothie with your choice of base, fruits, boosters, and size.</p>
</div>
<div className="max-w-4xl mx-auto">
<div className="bg-gray-50 rounded-2xl border border-gray-100 p-4 sm:p-8">
<div className="mb-8">
<h3 className="font-medium text-base text-gray-900 mb-1 flex items-center gap-2">
<span className="w-6 h-6 bg-green-600 text-white text-xs rounded-full flex items-center justify-center font-medium">1</span>
                            Choose Base
                        </h3>
<p className="text-xs text-gray-400 ml-8 mb-4">Select one liquid base</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3" id="base-options"></div>
</div>
<div className="mb-8">
<h3 className="font-medium text-base text-gray-900 mb-1 flex items-center gap-2">
<span className="w-6 h-6 bg-green-600 text-white text-xs rounded-full flex items-center justify-center font-medium">2</span>
                            Pick Fruits
                        </h3>
<p className="text-xs text-gray-400 ml-8 mb-4">Select up to 3 fruits</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3" id="fruit-options"></div>
</div>
<div className="mb-8">
<h3 className="font-medium text-base text-gray-900 mb-1 flex items-center gap-2">
<span className="w-6 h-6 bg-green-600 text-white text-xs rounded-full flex items-center justify-center font-medium">3</span>
                            Boosters
                        </h3>
<p className="text-xs text-gray-400 ml-8 mb-4">Add protein or superfoods</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3" id="booster-options"></div>
</div>
<div className="mb-8">
<h3 className="font-medium text-base text-gray-900 mb-1 flex items-center gap-2">
<span className="w-6 h-6 bg-green-600 text-white text-xs rounded-full flex items-center justify-center font-medium">4</span>
                            Sweetener
                        </h3>
<p className="text-xs text-gray-400 ml-8 mb-4">Optional</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3" id="sweetener-options"></div>
</div>
<div className="mb-8">
<h3 className="font-medium text-base text-gray-900 mb-1 flex items-center gap-2">
<span className="w-6 h-6 bg-green-600 text-white text-xs rounded-full flex items-center justify-center font-medium">5</span>
                            Toppings
                        </h3>
<p className="text-xs text-gray-400 ml-8 mb-4">Add some crunch</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3" id="topping-options"></div>
</div>
<div className="mb-8">
<h3 className="font-medium text-base text-gray-900 mb-1 flex items-center gap-2">
<span className="w-6 h-6 bg-green-600 text-white text-xs rounded-full flex items-center justify-center font-medium">6</span>
                            Size
                        </h3>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
<button className="size-btn py-3 rounded-xl border-2 border-gray-200 text-sm font-medium text-gray-600 hover:border-green-500 transition text-center" data-size="small" onclick="selectSize('small')">
<div className="text-sm font-medium">Small</div>
<div className="text-xs text-gray-500">250ml · ₹99</div>
</button>
<button className="size-btn py-3 rounded-xl border-2 border-gray-200 text-sm font-medium text-gray-600 hover:border-green-500 transition text-center" data-size="regular" onclick="selectSize('regular')">
<div className="text-sm font-medium">Regular</div>
<div className="text-xs text-gray-500">300ml · ₹129</div>
</button>
<button className="size-btn py-3 rounded-xl border-2 border-green-500 bg-green-50 text-sm font-medium text-green-700 transition text-center" data-size="medium" onclick="selectSize('medium')">
<div className="text-sm font-medium">Medium</div>
<div className="text-xs text-green-600">400ml · ₹149</div>
</button>
<button className="size-btn py-3 rounded-xl border-2 border-gray-200 text-sm font-medium text-gray-600 hover:border-green-500 transition text-center" data-size="large" onclick="selectSize('large')">
<div className="text-sm font-medium">Large</div>
<div className="text-xs text-gray-500">500ml · ₹199</div>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
<h4 className="font-medium text-sm text-gray-900 mb-3">Your Custom Blend</h4>
<div className="text-sm text-gray-500 mb-3" id="blend-summary">Select your ingredients...</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<span className="text-sm font-medium text-gray-700">Total</span>
<span className="text-lg font-semibold text-green-600" id="blend-total">₹149</span>
</div>
</div>
<button className="w-full py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2" onclick="addCustomBlendToCart()">
<iconify-icon height="20" icon="solar:cart-plus-linear" width="20"></iconify-icon>
                        Add Custom Blend
                    </button>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-gray-50/50" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">How It Works</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
<div className="text-center">
<div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
<iconify-icon className="text-green-600" height="32" icon="solar:checklist-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-lg tracking-tight text-gray-900 mb-2">1. Choose Blend</h3>
<p className="text-sm text-gray-500">Select from menu or customize.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
<iconify-icon className="text-orange-600" height="32" icon="solar:settings-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-lg tracking-tight text-gray-900 mb-2">2. Customize</h3>
<p className="text-sm text-gray-500">Add boosters, toppings &amp; size.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
<iconify-icon className="text-purple-600" height="32" icon="solar:box-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-lg tracking-tight text-gray-900 mb-2">3. Freshly Served</h3>
<p className="text-sm text-gray-500">Prepared fresh for your workout.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Get In Touch</h2>
</div>
<div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
<iconify-icon className="text-green-600" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-gray-900 mb-1">Location</h4>
<p className="text-sm text-gray-500">Kharegaon Naka, Kalwa, Thane</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-600" height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-gray-900 mb-1">Phone</h4>
<p className="text-sm text-gray-500">+91 9892790804</p>
</div>
</div>
</div>
<div>
<div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
<div className="space-y-4">
<input className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm" id="contact-name" placeholder="Your name" type="text"/>
<input className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm" id="contact-phone" placeholder="Phone" type="tel"/>
<textarea className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm resize-none" id="contact-message" placeholder="Message..." rows="3"></textarea>
<button className="w-full py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition" onclick="handleContact()">Send Message</button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-9 h-9 bg-gradient-to-br from-green-500 to-orange-500 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm">P</span>
</div>
<div>
<div className="font-semibold text-base tracking-tight">PoshanPoint</div>
<div className="text-xs text-gray-400">Daily Poshan</div>
</div>
</div>
</div>
<div>
<h4 className="font-medium text-sm text-white mb-4">Connect</h4>
<div className="flex gap-3 mb-4">
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition" href="https://wa.me/919892790804">
<iconify-icon height="20" icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">© 2025 PoshanPoint.</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-[100] bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-medium toast-exit transition-all duration-300 flex items-center gap-2 pointer-events-none" id="toast">
<iconify-icon className="text-green-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span id="toast-msg">Item added to cart</span>
</div>


    </>
  );
}
