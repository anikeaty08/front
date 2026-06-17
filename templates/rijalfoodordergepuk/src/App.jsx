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
red: '#DC2626',
orange: '#F97316',
yellow: '#FBBF24',
}
}
}
}
}



        // ----------------- FIREBASE SETUP -----------------
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
        import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
        import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

        const firebaseConfig = {
            apiKey: "AIzaSyAuiyiY3OoR2RZxWGbTsxbQHxU-3v3f0O4",
            authDomain: "nasi-ayam-gepuk.firebaseapp.com",
            projectId: "nasi-ayam-gepuk",
            storageBucket: "nasi-ayam-gepuk.firebasestorage.app",
            messagingSenderId: "83893131442",
            appId: "1:83893131442:web:bf4aee74ad2834839091ab",
            measurementId: "G-6S12LNFRH0"
        };

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth(app);

        // ----------------- STATE & VARIABLES -----------------
        let cart = {
            basePrice: 12.00,
            total: 12.00
        };
        let currentOrderId = null;

        // ----------------- GLOBAL FUNCTIONS -----------------
        window.navigateTo = (pageId) => {
            document.querySelectorAll('.page').forEach(el => el.classList.add('hidden'));
            document.getElementById(pageId).classList.remove('hidden');
            // Reset scroll on navigation
            const container = document.getElementById('main-content');
            container.scrollTop = 0;
            window.scrollTo(0,0);
        };

        window.calculateTotal = () => {
            let total = cart.basePrice;

            // Addons
            if (document.getElementById('add-tempeh').checked) total += 0.50;
            if (document.getElementById('add-tauhu').checked) total += 0.50;
            if (document.getElementById('add-rice').checked) total += 0.50;

            // Cabbage
            const cabbageVal = document.querySelector('input[name="cabbage"]:checked').value;
            if (cabbageVal === 'fresh') total += 0.50;
            if (cabbageVal === 'fried') total += 1.00;

            cart.total = total;
            document.getElementById('total-price-display').innerText = `RM ${total.toFixed(2)}`;
        };

        // ----------------- ORDER SUBMISSION -----------------
        window.submitOrder = async (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn-submit');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<div class="loader border-white border-t-transparent"></div>';
            btn.disabled = true;

            const name = document.getElementById('input-name').value;
            const phone = document.getElementById('input-phone').value;
            const address = document.getElementById('input-address').value;
            const payment = document.querySelector('input[name="payment"]:checked').value;
            
            // Get Food Details
            const spiciness = document.querySelector('input[name="spiciness"]:checked').value;
            const cabbage = document.querySelector('input[name="cabbage"]:checked').value;
            const extras = [];
            if(document.getElementById('add-tempeh').checked) extras.push("Tempeh");
            if(document.getElementById('add-tauhu').checked) extras.push("Tauhu");
            if(document.getElementById('add-rice').checked) extras.push("Extra Rice");

            const orderData = {
                customer: { name, phone, address },
                order: {
                    item: "Nasi Ayam Gepuk",
                    spiciness,
                    cabbage,
                    extras,
                    total: cart.total
                },
                paymentMethod: payment,
                status: "pending", 
                timestamp: serverTimestamp()
            };

            try {
                const docRef = await addDoc(collection(db, "orders"), orderData);
                currentOrderId = docRef.id;
                
                trackOrderStatus(currentOrderId);
                
                document.getElementById('display-order-id').innerText = `#${currentOrderId.slice(-6).toUpperCase()}`;
                document.getElementById('display-total').innerText = `RM ${cart.total.toFixed(2)}`;
                navigateTo('page-status');
            } catch (err) {
                alert("Error placing order: " + err.message);
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        };

        // ----------------- CUSTOMER STATUS TRACKING -----------------
        function trackOrderStatus(orderId) {
            onSnapshot(doc(db, "orders", orderId), (doc) => {
                if(doc.exists()) {
                    const data = doc.data();
                    updateStatusUI(data.status);
                }
            });
        }

        function updateStatusUI(status) {
            const statusText = document.getElementById('display-status-text');
            const message = document.getElementById('status-message');
            const iconContainer = document.getElementById('status-icon-container');
            
            statusText.innerText = status.charAt(0).toUpperCase() + status.slice(1);
            
            // Reset styles
            statusText.className = "text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide";

            if (status === 'pending') {
                statusText.classList.add('text-orange-600', 'bg-orange-100');
                message.innerText = "Order received. Please wait for payment instructions via WhatsApp.";
                iconContainer.innerHTML = '<div class="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shadow-xl ring-4 ring-white animate-pulse"><iconify-icon icon="solar:clock-circle-bold-duotone" width="48"></iconify-icon></div>';
            } else if (status === 'cooking') {
                statusText.classList.add('text-blue-600', 'bg-blue-100');
                message.innerText = "We are preparing your Nasi Ayam Gepuk. It smells good!";
                iconContainer.innerHTML = '<div class="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shadow-xl ring-4 ring-white animate-bounce"><iconify-icon icon="solar:chef-hat-bold-duotone" width="48"></iconify-icon></div>';
            } else if (status === 'shipping') {
                statusText.classList.add('text-indigo-600', 'bg-indigo-100');
                message.innerText = "Your order is on the way to your location.";
                iconContainer.innerHTML = '<div class="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 shadow-xl ring-4 ring-white"><iconify-icon icon="solar:scooter-bold-duotone" width="48"></iconify-icon></div>';
            } else if (status === 'delivered') {
                statusText.classList.add('text-green-600', 'bg-green-100');
                message.innerText = "Enjoy your meal! Terima kasih.";
                iconContainer.innerHTML = '<div class="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 shadow-xl ring-4 ring-white"><iconify-icon icon="solar:bag-check-bold-duotone" width="48"></iconify-icon></div>';
            }
        }

        // ----------------- ADMIN LOGIC -----------------
        
        window.checkAdmin = () => {
            if(auth.currentUser) {
                navigateTo('page-admin-dashboard');
            } else {
                navigateTo('page-admin-login');
            }
        }

        window.handleAdminLogin = async (e) => {
            e.preventDefault();
            const email = document.getElementById('admin-email').value;
            const pass = document.getElementById('admin-pass').value;
            try {
                await signInWithEmailAndPassword(auth, email, pass);
                navigateTo('page-admin-dashboard');
                loadAdminOrders();
            } catch (err) {
                alert("Login Failed: " + err.message);
            }
        }

        window.logoutAdmin = () => {
            signOut(auth).then(() => navigateTo('page-landing'));
        }

        window.updateOrderStatus = async (id, newStatus) => {
            try {
                await updateDoc(doc(db, "orders", id), { status: newStatus });
            } catch(e) {
                console.error(e);
            }
        }

        function loadAdminOrders() {
            const q = query(collection(db, "orders"), orderBy("timestamp", "desc"));
            const list = document.getElementById('admin-orders-list');
            
            onSnapshot(q, (snapshot) => {
                list.innerHTML = "";
                if(snapshot.empty) {
                    list.innerHTML = "<div class='col-span-full text-center py-20 text-gray-400'>No orders yet.</div>";
                    return;
                }

                snapshot.forEach((docSnap) => {
                    const data = docSnap.data();
                    const id = docSnap.id;
                    const date = data.timestamp ? new Date(data.timestamp.seconds * 1000).toLocaleString() : 'Just now';
                    
                    let borderClass = 'border-l-4 border-l-gray-300';
                    if(data.status === 'cooking') borderClass = 'border-l-4 border-l-blue-500 bg-blue-50/20';
                    if(data.status === 'shipping') borderClass = 'border-l-4 border-l-indigo-500 bg-indigo-50/20';
                    if(data.status === 'delivered') borderClass = 'border-l-4 border-l-green-500 bg-green-50/20';

                    const html = `
                    <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 ${borderClass} hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-3">
                            <div>
                                <h3 class="font-bold text-gray-900 text-lg">${data.customer.name}</h3>
                                <p class="text-xs text-gray-400 font-medium">${date}</p>
                            </div>
                            <div class="text-right">
                                <span class="font-mono font-bold text-gray-900 block text-lg">RM ${data.order.total.toFixed(2)}</span>
                                <span class="text-[10px] text-gray-500 uppercase tracking-wider font-semibold bg-gray-100 px-2 py-1 rounded">${data.paymentMethod}</span>
                            </div>
                        </div>
                        
                        <div class="text-sm text-gray-600 mb-4 space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <div class="flex gap-2"><span class="font-semibold w-16 text-gray-400 text-xs uppercase">Spicy</span> ${data.order.spiciness}</div>
                            <div class="flex gap-2"><span class="font-semibold w-16 text-gray-400 text-xs uppercase">Kob</span> ${data.order.cabbage}</div>
                            <div class="flex gap-2"><span class="font-semibold w-16 text-gray-400 text-xs uppercase">Extras</span> ${data.order.extras.length ? data.order.extras.join(', ') : '-'}</div>
                        </div>

                        <div class="flex flex-col gap-2 mb-4 text-xs">
                             <a href="https://wa.me/6${data.customer.phone}?text=Hi%20${data.customer.name},%20payment%20details%20for%20Ayam%20Gepuk:%20Total%20RM${data.order.total.toFixed(2)}" target="_blank" class="flex items-center gap-2 text-green-600 font-medium hover:underline p-2 bg-green-50 rounded-lg">
                                <iconify-icon icon="solar:phone-calling-bold"></iconify-icon>
                                WhatsApp ${data.customer.phone}
                            </a>
                            <div class="flex items-start gap-2 text-gray-500 p-2 bg-gray-50 rounded-lg">
                                <iconify-icon icon="solar:map-point-bold" class="mt-0.5"></iconify-icon>
                                <span class="truncate">${data.customer.address}</span>
                            </div>
                        </div>

                        <div class="pt-3 border-t border-gray-100">
                            <div class="flex justify-between items-center gap-2">
                                <button onclick="updateOrderStatus('${id}', 'pending')" class="${data.status === 'pending' ? 'bg-orange-500 text-white shadow-orange-200' : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'} flex-1 py-2 text-xs font-semibold rounded-lg shadow-sm transition-all">Pending</button>
                                <button onclick="updateOrderStatus('${id}', 'cooking')" class="${data.status === 'cooking' ? 'bg-blue-500 text-white shadow-blue-200' : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'} flex-1 py-2 text-xs font-semibold rounded-lg shadow-sm transition-all">Cooking</button>
                                <button onclick="updateOrderStatus('${id}', 'shipping')" class="${data.status === 'shipping' ? 'bg-indigo-500 text-white shadow-indigo-200' : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'} flex-1 py-2 text-xs font-semibold rounded-lg shadow-sm transition-all">Ship</button>
                                <button onclick="updateOrderStatus('${id}', 'delivered')" class="${data.status === 'delivered' ? 'bg-green-500 text-white shadow-green-200' : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'} flex-1 py-2 text-xs font-semibold rounded-lg shadow-sm transition-all">Done</button>
                            </div>
                        </div>
                    </div>
                    `;
                    list.insertAdjacentHTML('beforeend', html);
                });
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
      


<div className="w-full min-h-screen md:min-h-[800px] md:h-[85vh] md:max-w-6xl bg-white md:rounded-3xl shadow-2xl relative flex flex-col overflow-hidden" id="app">

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 px-6 py-4 flex justify-between items-center shrink-0">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold tracking-tighter shadow-lg shadow-orange-500/30">
                    AG
                </div>
<h1 className="font-semibold tracking-tight text-gray-900 text-lg">Ayam Gepuk</h1>
</div>
<div className="flex items-center gap-4">
<button className="text-xs text-gray-400 hover:text-orange-600 transition-colors flex items-center gap-1 font-medium group" onclick="checkAdmin()">
<iconify-icon className="group-hover:text-orange-500" icon="solar:shield-user-linear" width="18"></iconify-icon>
<span className="hidden md:inline">Admin</span>
</button>
</div>
</nav>

<div className="flex-1 overflow-y-auto relative scroll-smooth bg-white" id="main-content">

<section className="page h-full flex flex-col md:flex-row" id="page-landing">

<div className="relative w-full md:w-1/2 h-64 md:h-full bg-gray-100 order-1 md:order-1">
<img alt="Nasi Ayam Gepuk" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10"></div>
</div>

<div className="flex-1 flex flex-col justify-center items-center p-8 md:p-16 text-center md:text-left order-2 md:order-2 bg-white">
<div className="max-w-md">
<span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold tracking-wide mb-4 border border-orange-100">AUTHENTIC INDONESIAN TASTE</span>
<h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
                            Pedas. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Rangup.</span> <br/>
                            Padu.
                        </h2>
<p className="text-gray-500 text-base leading-relaxed mb-10 md:pr-10">
                            Experience the sensation of freshly smashed chicken topped with our signature spicy sambal. Served hot with rice, fried cabbage, tofu and tempeh.
                        </p>
<div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
<button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium shadow-xl shadow-gray-200 hover:shadow-gray-400 hover:bg-black transform active:scale-95 transition-all flex items-center justify-center gap-3" onclick="navigateTo('page-customize')">
<span className="text-lg">Order Now</span>
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
<div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-gray-400 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:verified-check-linear"></iconify-icon> Halal
                             </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:clock-circle-linear"></iconify-icon> 20 Mins
                             </div>
</div>
</div>
</div>
</section>


<section className="page hidden min-h-full" id="page-customize">
<div className="flex flex-col md:flex-row h-full">

<div className="w-full md:w-5/12 h-56 md:h-auto relative bg-gray-100 md:sticky md:top-0">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
<div className="absolute bottom-4 left-4 text-white md:hidden">
<h2 className="text-2xl font-bold tracking-tight">Ayam Gepuk Special</h2>
<p className="text-sm opacity-90">Customize your meal</p>
</div>
</div>

<div className="flex-1 bg-white relative pb-32 md:pb-24">
<div className="p-6 md:p-10 max-w-2xl mx-auto">

<div className="hidden md:block mb-8">
<div className="flex justify-between items-start mb-2">
<h2 className="text-3xl font-bold tracking-tight text-gray-900">Nasi Ayam Gepuk Special</h2>
<span className="bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full">RM 12.00</span>
</div>
<p className="text-gray-500 leading-relaxed">
                                    Fragrant white rice served with smashed fried chicken, cucumber slices, and our signature addictive spicy sambal.
                                </p>
</div>

<div className="md:hidden mb-6 mt-2">
<div className="flex justify-between items-center">
<h3 className="text-lg font-semibold text-gray-900">Base Price</h3>
<span className="text-lg font-bold text-orange-600">RM 12.00</span>
</div>
</div>

<hr className="border-gray-100 mb-8"/>

<div className="space-y-10">

<div>
<h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
<div className="p-1.5 rounded-lg bg-red-100 text-red-500">
<iconify-icon icon="solar:flame-linear" width="18"></iconify-icon>
</div>
                                        Spice Level
                                    </h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer group relative">
<input className="peer hidden" name="spiciness" onchange="calculateTotal()" type="radio" value="Manja"/>
<div className="p-4 rounded-2xl border-2 border-gray-100 bg-white hover:border-orange-200 peer-checked:border-red-500 peer-checked:bg-red-50/50 peer-checked:text-red-700 transition-all text-center h-full flex flex-col justify-center items-center">
<span className="block font-semibold mb-1">Manja</span>
<span className="text-xs text-gray-400">Mild</span>
</div>
<div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-red-500 transition-opacity">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>
<label className="cursor-pointer group relative">
<input checked="" className="peer hidden" name="spiciness" onchange="calculateTotal()" type="radio" value="Biasa"/>
<div className="p-4 rounded-2xl border-2 border-gray-100 bg-white hover:border-orange-200 peer-checked:border-red-500 peer-checked:bg-red-50/50 peer-checked:text-red-700 transition-all text-center h-full flex flex-col justify-center items-center">
<span className="block font-semibold mb-1">Biasa</span>
<span className="text-xs text-gray-400">Normal</span>
</div>
<div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-red-500 transition-opacity">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer hidden" name="spiciness" onchange="calculateTotal()" type="radio" value="Up Sikit"/>
<div className="p-4 rounded-2xl border-2 border-gray-100 bg-white hover:border-orange-200 peer-checked:border-red-500 peer-checked:bg-red-50/50 peer-checked:text-red-700 transition-all text-center h-full flex flex-col justify-center items-center">
<span className="block font-semibold mb-1">Up Sikit</span>
<span className="text-xs text-gray-400">Hot</span>
</div>
<div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-red-500 transition-opacity">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer hidden" name="spiciness" onchange="calculateTotal()" type="radio" value="Pedas Giler"/>
<div className="p-4 rounded-2xl border-2 border-gray-100 bg-white hover:border-orange-200 peer-checked:border-red-500 peer-checked:bg-red-50/50 peer-checked:text-red-700 transition-all text-center h-full flex flex-col justify-center items-center">
<span className="block font-semibold mb-1">Giler</span>
<span className="text-xs text-gray-400">Extreme</span>
</div>
<div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-red-500 transition-opacity">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>
</div>
</div>

<div>
<h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
<div className="p-1.5 rounded-lg bg-orange-100 text-orange-500">
<iconify-icon icon="solar:chef-hat-heart-linear" width="18"></iconify-icon>
</div>
                                        Extras
                                    </h3>
<div className="space-y-3">
<label className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white hover:border-orange-300 has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50/30 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="relative flex items-center">
<input className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded checked:bg-orange-500 checked:border-orange-500 transition-colors" id="add-tempeh" onchange="calculateTotal()" type="checkbox"/>
<iconify-icon className="absolute text-white pointer-events-none opacity-0 peer-checked:opacity-100 inset-0 m-auto" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tempeh</span>
</div>
<span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-md">+RM 0.50</span>
</label>
<label className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white hover:border-orange-300 has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50/30 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="relative flex items-center">
<input className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded checked:bg-orange-500 checked:border-orange-500 transition-colors" id="add-tauhu" onchange="calculateTotal()" type="checkbox"/>
<iconify-icon className="absolute text-white pointer-events-none opacity-0 peer-checked:opacity-100 inset-0 m-auto" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tauhu</span>
</div>
<span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-md">+RM 0.50</span>
</label>
<label className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white hover:border-orange-300 has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50/30 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="relative flex items-center">
<input className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded checked:bg-orange-500 checked:border-orange-500 transition-colors" id="add-rice" onchange="calculateTotal()" type="checkbox"/>
<iconify-icon className="absolute text-white pointer-events-none opacity-0 peer-checked:opacity-100 inset-0 m-auto" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Extra Rice</span>
</div>
<span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-md">+RM 0.50</span>
</label>
</div>
</div>

<div>
<h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
<div className="p-1.5 rounded-lg bg-green-100 text-green-600">
<iconify-icon icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
                                        Cabbage Style
                                    </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer hidden" name="cabbage" onchange="calculateTotal()" type="radio" value="none"/>
<div className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-700 transition-all flex flex-col items-center justify-center gap-1 h-20">
<span className="text-sm font-medium">None</span>
<span className="text-[10px] text-gray-400">Standard</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="cabbage" onchange="calculateTotal()" type="radio" value="fresh"/>
<div className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-700 transition-all flex flex-col items-center justify-center gap-1 h-20">
<span className="text-sm font-medium">Fresh</span>
<span className="text-[10px] font-bold text-green-600">+RM 0.50</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="cabbage" onchange="calculateTotal()" type="radio" value="fried"/>
<div className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-700 transition-all flex flex-col items-center justify-center gap-1 h-20">
<span className="text-sm font-medium">Fried (Goreng)</span>
<span className="text-[10px] font-bold text-green-600">+RM 1.00</span>
</div>
</label>
</div>
</div>
</div>
</div>

<div className="fixed md:absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-white/95 backdrop-blur border-t border-gray-100 z-40">
<div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
<div className="flex flex-col">
<span className="text-xs text-gray-500 uppercase tracking-wide">Total Amount</span>
<span className="text-2xl font-bold text-gray-900 tracking-tight" id="total-price-display">RM 12.00</span>
</div>
<button className="flex-1 max-w-[200px] bg-gradient-to-r from-red-600 to-orange-500 text-white py-3.5 rounded-xl font-medium shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 active:scale-[0.98] transition-all flex items-center justify-center gap-2" onclick="navigateTo('page-shipping')">
                                    Next
                                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="page hidden p-6 pb-24 md:p-16 fade-in max-w-2xl mx-auto" id="page-shipping">
<button className="text-sm text-gray-400 hover:text-gray-900 mb-8 flex items-center gap-2 group transition-colors" onclick="navigateTo('page-customize')">
<div className="p-1 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</div>
                    Back to customization
                </button>
<h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Delivery Details</h2>
<p className="text-gray-500 mb-10">Where should we send your delicious meal?</p>
<form className="space-y-6" id="order-form" onsubmit="submitOrder(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-gray-700 ml-1 uppercase tracking-wide">Full Name</label>
<input className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white transition-all text-sm font-medium" id="input-name" placeholder="e.g. Ali Abu" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-gray-700 ml-1 uppercase tracking-wide">WhatsApp Number</label>
<input className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white transition-all text-sm font-medium" id="input-phone" placeholder="0123456789" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-gray-700 ml-1 uppercase tracking-wide">Delivery Address</label>
<textarea className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white transition-all text-sm font-medium resize-none" id="input-address" placeholder="Unit, Building, Street, Area..." required="" rows="3"></textarea>
</div>
<div className="space-y-4 pt-4">
<label className="text-xs font-semibold text-gray-700 ml-1 uppercase tracking-wide">Payment Method</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer hidden" name="payment" type="radio" value="TNG"/>
<div className="p-4 border border-gray-200 rounded-xl flex items-center gap-3 peer-checked:border-blue-500 peer-checked:bg-blue-50/50 transition-all">
<div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-sm font-medium text-gray-800">TNG eWallet</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="payment" type="radio" value="Online Banking"/>
<div className="p-4 border border-gray-200 rounded-xl flex items-center gap-3 peer-checked:border-blue-500 peer-checked:bg-blue-50/50 transition-all">
<div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-sm font-medium text-gray-800">Transfer</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="payment" type="radio" value="COD"/>
<div className="p-4 border border-gray-200 rounded-xl flex items-center gap-3 peer-checked:border-blue-500 peer-checked:bg-blue-50/50 transition-all">
<div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-sm font-medium text-gray-800">COD</span>
</div>
</label>
</div>
</div>
<button className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-medium shadow-xl mt-8 flex items-center justify-center gap-3 transition-all transform active:scale-[0.99]" id="btn-submit" type="submit">
<span className="text-lg">Place Order</span>
<iconify-icon icon="solar:bag-check-bold" width="22"></iconify-icon>
</button>
<p className="text-center text-xs text-gray-400 mt-4">By placing an order, you agree to pay via WhatsApp instructions.</p>
</form>
</section>

<section className="page hidden p-6 min-h-full flex flex-col justify-center items-center text-center fade-in bg-white" id="page-status">
<div className="max-w-md w-full">
<div className="mb-8 relative flex justify-center" id="status-icon-container">
<div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shadow-xl shadow-orange-100 ring-4 ring-white">
<iconify-icon icon="solar:clock-circle-bold-duotone" width="48"></iconify-icon>
</div>
</div>
<h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">Order Received!</h2>
<p className="text-gray-500 text-base leading-relaxed mb-10" id="status-message">
                        We've got your details. Please wait for a WhatsApp message from us to complete your payment.
                    </p>
<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-left mb-8 shadow-sm">
<div className="flex justify-between mb-4 pb-4 border-b border-gray-200 border-dashed">
<span className="text-sm text-gray-500">Order ID</span>
<span className="text-sm font-mono font-bold text-gray-900 tracking-wider" id="display-order-id">#----</span>
</div>
<div className="flex justify-between mb-2">
<span className="text-sm text-gray-500">Status</span>
<span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full uppercase tracking-wide" id="display-status-text">Pending</span>
</div>
<div className="flex justify-between items-center mt-4">
<span className="text-sm text-gray-500">Total Amount</span>
<span className="text-xl font-bold text-gray-900" id="display-total">RM --.--</span>
</div>
</div>
<button className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-orange-600 transition-colors" onclick="location.reload()">
<iconify-icon icon="solar:refresh-circle-linear" width="18"></iconify-icon>
                        Order Another Meal
                    </button>
</div>
</section>

<section className="page hidden p-8 h-full flex flex-col justify-center items-center fade-in" id="page-admin-login">
<div className="max-w-xs w-full">
<div className="text-center mb-8">
<div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
<iconify-icon icon="solar:shield-user-bold" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-bold tracking-tight text-gray-900">Admin Login</h2>
<p className="text-sm text-gray-500">Authorized personnel only.</p>
</div>
<form className="space-y-4" onsubmit="handleAdminLogin(event)">
<div className="space-y-1">
<input className="w-full p-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-900 transition-colors" id="admin-email" placeholder="Email Address" required="" type="email"/>
</div>
<div className="space-y-1">
<input className="w-full p-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-900 transition-colors" id="admin-pass" placeholder="Password" required="" type="password"/>
</div>
<button className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-medium hover:bg-black transition-colors shadow-lg" type="submit">Login Dashboard</button>
</form>
<button className="w-full mt-6 text-xs text-center text-gray-400 hover:text-gray-600" onclick="navigateTo('page-landing')">Back to Store</button>
</div>
</section>

<section className="page hidden p-6 pb-24 md:p-10 fade-in bg-gray-50 min-h-full" id="page-admin-dashboard">
<div className="max-w-4xl mx-auto">
<div className="flex justify-between items-center mb-8">
<div>
<h2 className="text-2xl font-bold text-gray-900">Live Orders</h2>
<p className="text-sm text-gray-500">Manage incoming orders</p>
</div>
<button className="px-4 py-2 bg-white border border-gray-200 text-red-500 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors" onclick="logoutAdmin()">Logout</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="admin-orders-list">

<div className="col-span-full text-center py-20 text-gray-400">
<div className="loader mx-auto mb-4"></div>
                            Loading data...
                        </div>
</div>
</div>
</section>
</div>
</div>



    </>
  );
}
