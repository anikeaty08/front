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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316',
600: '#ea580c',
700: '#c2410c',
900: '#7c2d12',
}
}
}
}
}



        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
        import { getFirestore, collection, addDoc, doc, onSnapshot, updateDoc, query, orderBy, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
        import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

        // Firebase Configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAuiyiY3OoR2RZxWGbTsxbQHxU-3v3f0O4",
            authDomain: "nasi-ayam-gepuk.firebaseapp.com",
            projectId: "nasi-ayam-gepuk",
            storageBucket: "nasi-ayam-gepuk.firebasestorage.app",
            messagingSenderId: "83893131442",
            appId: "1:83893131442:web:bf4aee74ad2834839091ab",
            measurementId: "G-6S12LNFRH0"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth(app);

        // --- APP STATE ---
        const state = {
            basePrice: 12.00,
            spiciness: 'Biasa',
            cabbage: 'none', // none, fresh, fried
            addons: {
                tempeh: false,
                tauhu: false,
                rice: false
            },
            total: 12.00
        };

        const prices = {
            tempeh: 0.50,
            tauhu: 0.50,
            rice: 0.50,
            cabbage: {
                none: 0,
                fresh: 0.50,
                fried: 1.00
            }
        };

        // --- DOM ELEMENTS ---
        const views = document.querySelectorAll('.view-section');

        // --- ROUTING ---
        window.router = {
            navigate: (viewId) => {
                views.forEach(el => el.classList.add('hidden'));
                document.getElementById(`view-${viewId}`).classList.remove('hidden');
            }
        };

        // --- INITIALIZATION ---
        window.onload = () => {
            renderOptions();
            updateTotal();
            
            // Check Persistence
            const savedOrderId = localStorage.getItem('nag_active_order');
            if (savedOrderId) {
                // Try to fetch to see if valid
                checkOrderStatus(savedOrderId);
            } else {
                router.navigate('landing');
            }
        };

        // --- RENDER CUSTOMIZATION ---
        function renderOptions() {
            // Spiciness
            const levels = ['Manja', 'Biasa', 'Up Sikit', 'Pedas Giler'];
            const spiceContainer = document.getElementById('spiciness-options');
            spiceContainer.innerHTML = levels.map(level => `
                <label class="cursor-pointer">
                    <input type="radio" name="spice" value="${level}" class="peer hidden" ${level === 'Biasa' ? 'checked' : ''} onchange="updateState('spice', '${level}')">
                    <div class="h-12 border border-slate-200 rounded-xl flex items-center justify-center text-sm text-slate-600 hover:bg-slate-50 transition-all peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-700 peer-checked:font-medium">
                        ${level}
                    </div>
                </label>
            `).join('');

            // Cabbage
            const cabOptions = [
                {id: 'none', label: 'No Cabbage', price: 0},
                {id: 'fresh', label: 'Fresh Cabbage', price: 0.5},
                {id: 'fried', label: 'Fried Cabbage', price: 1.0},
            ];
            const cabContainer = document.getElementById('cabbage-options');
            cabContainer.innerHTML = cabOptions.map(opt => `
                <label class="flex items-center justify-between p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-all has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50">
                    <div class="flex items-center gap-3">
                        <input type="radio" name="cabbage" value="${opt.id}" class="peer w-4 h-4 text-orange-600 focus:ring-orange-500" ${opt.id === 'none' ? 'checked' : ''} onchange="updateState('cabbage', '${opt.id}')">
                        <span class="text-sm font-medium text-slate-700">${opt.label}</span>
                    </div>
                    ${opt.price > 0 ? `<span class="text-xs text-orange-600 font-medium">+ RM ${opt.price.toFixed(2)}</span>` : ''}
                </label>
            `).join('');

            // Addons
            const addons = [
                {key: 'tempeh', label: 'Extra Tempeh', price: 0.50},
                {key: 'tauhu', label: 'Extra Tauhu', price: 0.50},
                {key: 'rice', label: 'Extra Rice', price: 0.50},
            ];
            const addContainer = document.getElementById('addons-options');
            addContainer.innerHTML = addons.map(add => `
                 <label class="flex items-center justify-between p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-all has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50">
                    <div class="flex items-center gap-3">
                        <input type="checkbox" onchange="updateState('addon', '${add.key}', this.checked)" class="w-4 h-4 text-orange-600 rounded focus:ring-orange-500 border-slate-300">
                        <span class="text-sm font-medium text-slate-700">${add.label}</span>
                    </div>
                    <span class="text-xs text-orange-600 font-medium">+ RM ${add.price.toFixed(2)}</span>
                </label>
            `).join('');
        }

        // --- STATE LOGIC ---
        window.updateState = (type, value, checked) => {
            if(type === 'spice') state.spiciness = value;
            if(type === 'cabbage') state.cabbage = value;
            if(type === 'addon') state.addons[value] = checked;
            updateTotal();
        }

        function updateTotal() {
            let t = state.basePrice;
            t += prices.cabbage[state.cabbage];
            if(state.addons.tempeh) t += prices.tempeh;
            if(state.addons.tauhu) t += prices.tauhu;
            if(state.addons.rice) t += prices.rice;
            state.total = t;
            document.getElementById('total-price-display').innerText = `RM ${t.toFixed(2)}`;
        }

        // --- ORDER SUBMISSION ---
        window.submitOrder = async () => {
            const name = document.getElementById('inp-name').value;
            const phone = document.getElementById('inp-phone').value;
            const address = document.getElementById('inp-address').value;
            const payment = document.querySelector('input[name="payment"]:checked').value;

            if(!name || !phone || !address) {
                alert("Please fill in all details");
                return;
            }

            // Prepare Data
            const orderData = {
                customer: { name, phone, address },
                order: {
                    base: 'Nasi Ayam Gepuk',
                    spiciness: state.spiciness,
                    cabbage: state.cabbage,
                    addons: state.addons,
                    total: state.total
                },
                paymentMethod: payment,
                status: 'pending', // pending, cooking, shipping, delivered
                createdAt: new Date()
            };

            try {
                const docRef = await addDoc(collection(db, "orders"), orderData);
                // Save ID to local storage for persistence
                localStorage.setItem('nag_active_order', docRef.id);
                localStorage.setItem('nag_phone', phone); // Backup
                
                // Go to status
                monitorOrder(docRef.id);
                router.navigate('status');
            } catch (e) {
                console.error("Error adding document: ", e);
                alert("Error placing order. Please try again.");
            }
        }

        // --- STATUS MONITORING ---
        let statusUnsub = null;

        function checkOrderStatus(orderId) {
             // If navigating directly (refresh), we need to set up listener
             monitorOrder(orderId);
             // Also need to fill phone for display if possible
             const phone = localStorage.getItem('nag_phone');
             if(phone) document.getElementById('display-phone').innerText = phone;
             router.navigate('status');
        }

        function monitorOrder(orderId) {
            document.getElementById('display-order-id').innerText = orderId.slice(-6).toUpperCase();
            
            // Unsubscribe previous listener if any
            if(statusUnsub) statusUnsub();

            statusUnsub = onSnapshot(doc(db, "orders", orderId), (doc) => {
                if (doc.exists()) {
                    const data = doc.data();
                    updateStatusUI(data.status);
                    document.getElementById('display-phone').innerText = data.customer.phone;
                } else {
                    // Order deleted or invalid
                    localStorage.removeItem('nag_active_order');
                    router.navigate('landing');
                }
            });
        }

        function updateStatusUI(status) {
            const iconEl = document.getElementById('status-icon');
            const containerEl = document.getElementById('status-icon-container');
            const textEl = document.getElementById('status-text');
            const descEl = document.getElementById('status-desc');

            // Reset classes
            containerEl.className = "w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 transition-colors duration-500";

            switch(status) {
                case 'pending':
                    containerEl.classList.add('bg-slate-100', 'text-slate-500');
                    iconEl.setAttribute('icon', 'solar:hourglass-linear');
                    textEl.innerText = "Order Pending";
                    textEl.className = "text-slate-900 font-medium text-lg mb-1";
                    descEl.innerText = "We are reviewing your order.";
                    break;
                case 'cooking':
                    containerEl.classList.add('bg-orange-100', 'text-orange-600');
                    iconEl.setAttribute('icon', 'solar:chef-hat-linear');
                    textEl.innerText = "We are Cooking!";
                    textEl.className = "text-orange-600 font-medium text-lg mb-1";
                    descEl.innerText = "Your Ayam Gepuk is being prepared with love.";
                    break;
                case 'shipping':
                    containerEl.classList.add('bg-blue-100', 'text-blue-600');
                    iconEl.setAttribute('icon', 'solar:moped-linear');
                    textEl.innerText = "Out for Delivery";
                    textEl.className = "text-blue-600 font-medium text-lg mb-1";
                    descEl.innerText = "Our rider is on the way to you.";
                    break;
                case 'delivered':
                    containerEl.classList.add('bg-green-100', 'text-green-600');
                    iconEl.setAttribute('icon', 'solar:check-circle-linear');
                    textEl.innerText = "Delivered";
                    textEl.className = "text-green-600 font-medium text-lg mb-1";
                    descEl.innerText = "Enjoy your meal! Terima kasih.";
                    break;
            }
        }

        window.clearOrder = () => {
            if(confirm("Start a new order? This will clear current tracking.")) {
                localStorage.removeItem('nag_active_order');
                if(statusUnsub) statusUnsub();
                // Reset form state visually if needed
                state.addons = {tempeh: false, tauhu: false, rice: false};
                state.spiciness = 'Biasa';
                state.cabbage = 'none';
                renderOptions();
                updateTotal();
                router.navigate('landing');
            }
        }

        // --- ADMIN FUNCTIONS ---
        
        window.adminLogin = () => {
            const email = document.getElementById('admin-email').value;
            const pass = document.getElementById('admin-pass').value;
            
            signInWithEmailAndPassword(auth, email, pass)
                .then((userCredential) => {
                    // Signed in 
                    startAdminListener();
                    router.navigate('admin-dashboard');
                })
                .catch((error) => {
                    alert("Login failed: " + error.message);
                });
        }

        window.logout = () => {
            signOut(auth).then(() => {
                router.navigate('landing');
            });
        }

        function startAdminListener() {
            const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
            onSnapshot(q, (snapshot) => {
                const list = document.getElementById('orders-list');
                list.innerHTML = "";
                
                snapshot.forEach((doc) => {
                    const d = doc.data();
                    const id = doc.id;
                    const date = d.createdAt.toDate().toLocaleString();
                    
                    // Format Addons
                    let addonStr = [];
                    if(d.order.addons.tempeh) addonStr.push("Tempeh");
                    if(d.order.addons.tauhu) addonStr.push("Tauhu");
                    if(d.order.addons.rice) addonStr.push("Extra Rice");
                    
                    let cabStr = d.order.cabbage === 'none' ? 'No Cab' : d.order.cabbage + ' Cab';
                    
                    const el = document.createElement('div');
                    el.className = "bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3";
                    el.innerHTML = `
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-semibold text-slate-900">${d.customer.name}</h3>
                                <p class="text-xs text-slate-500">${date}</p>
                            </div>
                            <span class="text-sm font-bold text-orange-600">RM ${d.order.total.toFixed(2)}</span>
                        </div>
                        <div class="text-xs text-slate-700 space-y-1 bg-slate-50 p-2 rounded-lg">
                            <p><strong>Spice:</strong> ${d.order.spiciness}</p>
                            <p><strong>Veg:</strong> ${cabStr}</p>
                            <p><strong>Addons:</strong> ${addonStr.length ? addonStr.join(', ') : '-'}</p>
                            <p class="mt-2 pt-2 border-t border-slate-200"><strong>Addr:</strong> ${d.customer.address}</p>
                            <p><strong>Phone:</strong> ${d.customer.phone}</p>
                            <p><strong>Pay:</strong> ${d.paymentMethod}</p>
                        </div>
                        <div class="mt-auto pt-2">
                             <label class="text-xs font-medium text-slate-500 block mb-1">Set Status</label>
                             <div class="flex gap-1 bg-slate-100 p-1 rounded-lg">
                                ${['pending', 'cooking', 'shipping', 'delivered'].map(s => `
                                    <button onclick="updateOrderStatus('${id}', '${s}')" class="flex-1 py-1.5 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all ${d.status === s ? getStatusColor(s) : 'text-slate-400 hover:bg-white'}">
                                        ${s.charAt(0)}
                                    </button>
                                `).join('')}
                             </div>
                        </div>
                    `;
                    list.appendChild(el);
                });
            });
        }

        function getStatusColor(s) {
            if(s === 'pending') return 'bg-white text-slate-700 shadow-sm';
            if(s === 'cooking') return 'bg-orange-500 text-white shadow-sm';
            if(s === 'shipping') return 'bg-blue-500 text-white shadow-sm';
            if(s === 'delivered') return 'bg-green-500 text-white shadow-sm';
            return '';
        }

        window.updateOrderStatus = async (id, status) => {
            const orderRef = doc(db, "orders", id);
            await updateDoc(orderRef, {
                status: status
            });
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
      

<div className="relative w-full h-screen overflow-hidden flex flex-col md:items-center md:justify-center p-0 md:p-6" id="app">

<div className="absolute top-6 left-0 w-full md:w-auto md:left-8 z-50 flex justify-center md:justify-start pointer-events-none">
<div className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg pointer-events-auto">
<span className="font-semibold tracking-tight text-orange-600 text-sm">NASI AYAM GEPUK</span>
</div>
</div>

<div className="view-section w-full h-full md:h-auto md:w-[450px] md:rounded-3xl glass-panel flex flex-col items-center justify-center p-8 relative fade-in" id="view-landing">
<div className="text-center space-y-6">
<div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-orange-600 mb-4 shadow-inner">
<iconify-icon icon="solar:chef-hat-heart-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-tight">
                    Taste the <br/>
<span className="text-orange-600">Explosion.</span>
</h1>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                    Authentic Nasi Ayam Gepuk prepared fresh. Choose your heat, pick your sides, and enjoy the crunch.
                </p>
<button className="group relative w-full bg-slate-900 text-white h-14 rounded-xl font-medium tracking-tight text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-orange-900/20 mt-8" onclick="router.navigate('customize')">
                    Start Order
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="absolute bottom-4 w-full text-center">
<button className="text-[10px] text-slate-400 hover:text-slate-600 uppercase tracking-widest" onclick="router.navigate('admin-login')">Staff Access</button>
</div>
</div>

<div className="view-section hidden w-full h-full md:h-[80vh] md:max-h-[800px] md:w-[500px] md:rounded-3xl glass-panel flex flex-col relative fade-in" id="view-customize">

<div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white/50 md:rounded-t-3xl backdrop-blur-md z-10">
<button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500" onclick="router.navigate('landing')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<h2 className="text-sm font-semibold tracking-tight">Customize Plate</h2>
<div className="w-8"></div> 
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8 pb-32">

<div className="flex gap-4 items-start">
<div className="w-20 h-20 bg-orange-100 rounded-lg flex-shrink-0 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:fire-square-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 tracking-tight text-lg">Nasi Ayam Gepuk</h3>
<p className="text-slate-500 text-xs mt-1">Includes Rice, Gepuk Chicken, Sambal, Cucumber.</p>
<p className="text-orange-600 font-medium text-sm mt-2">RM 12.00</p>
</div>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Sambal Level (Required)</h4>
<div className="grid grid-cols-2 gap-3" id="spiciness-options">

</div>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Cabbage Preference</h4>
<div className="space-y-3" id="cabbage-options">

</div>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Add-ons</h4>
<div className="space-y-3" id="addons-options">

</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-100 p-6 md:rounded-b-3xl">
<div className="flex justify-between items-end mb-4">
<span className="text-slate-500 text-sm">Total</span>
<span className="text-2xl font-semibold tracking-tight text-slate-900" id="total-price-display">RM 12.00</span>
</div>
<button className="w-full bg-slate-900 text-white h-12 rounded-xl font-medium text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2" onclick="router.navigate('shipping')">
                    Checkout
                </button>
</div>
</div>

<div className="view-section hidden w-full h-full md:h-auto md:w-[450px] md:rounded-3xl glass-panel flex flex-col p-0 relative fade-in" id="view-shipping">
<div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
<button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500" onclick="router.navigate('customize')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<h2 className="text-sm font-semibold tracking-tight">Details &amp; Payment</h2>
<div className="w-8"></div>
</div>
<div className="p-6 space-y-5 overflow-y-auto max-h-[70vh]">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400" id="inp-name" placeholder="e.g. Ali Bin Abu" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">WhatsApp Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400" id="inp-phone" placeholder="0123456789" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Delivery Address</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400 resize-none" id="inp-address" placeholder="Unit, Building, Street, Area..." rows="3"></textarea>
</div>
<div className="space-y-2 pt-2">
<label className="text-xs font-medium text-slate-700 ml-1">Payment Method</label>
<div className="grid grid-cols-1 gap-2">
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50">
<input checked="" className="peer w-4 h-4 text-orange-600 focus:ring-orange-500" name="payment" type="radio" value="TNG"/>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">TnG eWallet</span>
</div>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50">
<input className="peer w-4 h-4 text-orange-600 focus:ring-orange-500" name="payment" type="radio" value="Online Banking"/>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:card-transfer-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Online Banking</span>
</div>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50">
<input className="peer w-4 h-4 text-orange-600 focus:ring-orange-500" name="payment" type="radio" value="COD"/>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:hand-money-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Cash on Delivery</span>
</div>
</label>
</div>
</div>
</div>
<div className="p-6 border-t border-slate-100 md:rounded-b-3xl bg-white">
<button className="w-full bg-slate-900 text-white h-12 rounded-xl font-medium text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2" onclick="submitOrder()">
                    Place Order
                </button>
</div>
</div>

<div className="view-section hidden w-full h-full md:h-auto md:w-[450px] md:rounded-3xl glass-panel flex flex-col p-8 relative fade-in text-center" id="view-status">
<div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 bg-slate-100 text-slate-500 transition-colors duration-500" id="status-icon-container">
<iconify-icon icon="solar:hourglass-linear" id="status-icon" width="40"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Order #<span id="display-order-id">...</span></h2>
<p className="text-orange-600 font-medium text-lg mb-1" id="status-text">Pending Confirmation</p>
<p className="text-slate-500 text-sm" id="status-desc">We are checking your order.</p>
<div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-yellow-100 text-left">
<p className="text-xs text-yellow-800 font-medium flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear" width="16"></iconify-icon>
                    Payment Instructions
                </p>
<p className="text-xs text-yellow-700 mt-2 leading-relaxed">
                    We will WhatsApp you shortly at <span className="font-semibold" id="display-phone"></span> for payment details. Please stay tuned.
                </p>
</div>
<div className="mt-8 flex justify-center">
<button className="text-xs text-slate-400 hover:text-slate-600 underline" onclick="clearOrder()">Start New Order</button>
</div>
</div>

<div className="view-section hidden w-full h-full md:h-auto md:w-[400px] md:rounded-3xl glass-panel flex flex-col p-8 relative fade-in" id="view-admin-login">
<div className="mb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Admin Login</h2>
<p className="text-xs text-slate-500 mt-1">Authorized personnel only.</p>
</div>
<div className="space-y-4">
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" id="admin-email" placeholder="Email" type="email"/>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" id="admin-pass" placeholder="Password" type="password"/>
<button className="w-full bg-slate-900 text-white h-12 rounded-xl font-medium text-sm hover:bg-slate-800 transition-all" onclick="adminLogin()">Login</button>
</div>
<button className="mt-6 text-center text-xs text-slate-400 hover:text-slate-600 w-full" onclick="router.navigate('landing')">Back to Home</button>
</div>

<div className="view-section hidden w-full h-full bg-slate-50 flex flex-col relative fade-in overflow-hidden" id="view-admin-dashboard">
<div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm z-10">
<div>
<h2 className="font-semibold tracking-tight text-slate-900">Orders Dashboard</h2>
<p className="text-xs text-slate-500">Manage incoming orders</p>
</div>
<button className="text-xs font-medium text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors" onclick="logout()">Logout</button>
</div>
<div className="flex-1 overflow-y-auto p-4 md:p-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto" id="orders-list">

<div className="col-span-full text-center py-10 text-slate-400 text-sm">Loading orders...</div>
</div>
</div>
</div>
</div>



    </>
  );
}
