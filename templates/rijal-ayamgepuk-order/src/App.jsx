import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
brand: {
orange: '#FF5A1F',
red: '#E11D48',
yellow: '#FBBF24'
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.4s ease-out forwards',
},
keyframes: {
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } }
}
}
}
}



      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
      import { getFirestore, collection, addDoc, doc, onSnapshot, updateDoc, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
      import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

      // CONFIG
      const firebaseConfig = {
          apiKey: "AIzaSyAuiyiY3OoR2RZxWGbTsxbQHxU-3v3f0O4",
          authDomain: "nasi-ayam-gepuk.firebaseapp.com",
          projectId: "nasi-ayam-gepuk",
          storageBucket: "nasi-ayam-gepuk.firebasestorage.app",
          messagingSenderId: "83893131442",
          appId: "1:83893131442:web:bf4aee74ad2834839091ab",
          measurementId: "G-6S12LNFRH0"
      };

      const firebaseApp = initializeApp(firebaseConfig);
      const analytics = getAnalytics(firebaseApp);
      const db = getFirestore(firebaseApp);
      const auth = getAuth(firebaseApp);

      // --- STATE & DATA ---
      const prices = {
          base: 12.00,
          addons: { tempeh: 0.50, tauhu: 0.50, rice: 0.50 },
          cabbage: { fresh: 0.50, fried: 1.00 }
      };

      let cart = {
          spice: 'Biasa',
          cabbage: 'none',
          addons: { tempeh: false, tauhu: false, rice: false },
          total: 12.00
      };

      let listenerUnsub = null;

      // --- ROUTER ---
      window.router = {
          to: (viewId) => {
              document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
              document.getElementById(`view-${viewId}`).classList.remove('hidden');
          }
      };

      // --- UI RENDERING ---
      function renderCustomization() {
          // Spice
          const spices = ['Manja', 'Biasa', 'Up Sikit', 'Pedas Giler'];
          document.getElementById('opt-spice').innerHTML = spices.map(s => `
              <label class="cursor-pointer group">
                  <input type="radio" name="spice" value="${s}" ${s === 'Biasa' ? 'checked' : ''} onchange="app.updateCart('spice', '${s}')" class="peer hidden">
                  <div class="h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-xs font-medium text-slate-600 transition-all peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-700 peer-checked:shadow-sm">
                      ${s}
                  </div>
              </label>
          `).join('');

          // Cabbage
          const cabs = [
              { id: 'none', lbl: 'No Cabbage', p: 0 },
              { id: 'fresh', lbl: 'Fresh Cabbage', p: 0.5 },
              { id: 'fried', lbl: 'Fried Cabbage', p: 1.0 }
          ];
          document.getElementById('opt-cabbage').innerHTML = cabs.map(c => `
              <label class="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white cursor-pointer transition-all has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50/50">
                  <div class="flex items-center gap-3">
                      <input type="radio" name="cabbage" value="${c.id}" ${c.id === 'none' ? 'checked' : ''} onchange="app.updateCart('cabbage', '${c.id}')" class="peer w-4 h-4 text-orange-600 focus:ring-orange-500">
                      <span class="text-sm font-medium text-slate-700">${c.lbl}</span>
                  </div>
                  ${c.p > 0 ? `<span class="text-xs font-bold text-orange-600">+RM ${c.p.toFixed(2)}</span>` : ''}
              </label>
          `).join('');

          // Addons
          const adds = [
              { id: 'tempeh', lbl: 'Add Tempeh', p: 0.5 },
              { id: 'tauhu', lbl: 'Add Tauhu', p: 0.5 },
              { id: 'rice', lbl: 'Extra Rice', p: 0.5 }
          ];
          document.getElementById('opt-addons').innerHTML = adds.map(a => `
              <label class="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white cursor-pointer transition-all has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50/50">
                  <div class="flex items-center gap-3">
                      <input type="checkbox" onchange="app.updateCart('addon', '${a.id}', this.checked)" class="w-4 h-4 rounded text-orange-600 focus:ring-orange-500 border-slate-300">
                      <span class="text-sm font-medium text-slate-700">${a.lbl}</span>
                  </div>
                  <span class="text-xs font-bold text-orange-600">+RM ${a.p.toFixed(2)}</span>
              </label>
          `).join('');
      }

      // --- MAIN APP LOGIC ---
      window.app = {
          updateCart: (type, key, val) => {
              if (type === 'spice') cart.spice = key;
              if (type === 'cabbage') cart.cabbage = key;
              if (type === 'addon') cart.addons[key] = val;

              // Calc Total
              let t = prices.base;
              if(cart.cabbage === 'fresh') t += prices.cabbage.fresh;
              if(cart.cabbage === 'fried') t += prices.cabbage.fried;
              if(cart.addons.tempeh) t += prices.addons.tempeh;
              if(cart.addons.tauhu) t += prices.addons.tauhu;
              if(cart.addons.rice) t += prices.addons.rice;

              cart.total = t;
              document.getElementById('display-total').innerText = `RM ${t.toFixed(2)}`;
          },

          submitOrder: async () => {
              const name = document.getElementById('inp-name').value.trim();
              const phone = document.getElementById('inp-phone').value.trim();
              const addr = document.getElementById('inp-addr').value.trim();
              const pay = document.querySelector('input[name="payment"]:checked').value;

              if(!name || !phone || !addr) return alert('Please fill in all details.');

              const orderData = {
                  customer: { name, phone, addr },
                  details: cart,
                  payment: pay,
                  status: 'pending',
                  timestamp: serverTimestamp()
              };

              try {
                  const docRef = await addDoc(collection(db, "orders"), orderData);
                  // Persist
                  localStorage.setItem('nag_active_id', docRef.id);
                  localStorage.setItem('nag_active_phone', phone);

                  window.app.trackOrder(docRef.id);
              } catch (e) {
                  console.error(e);
                  alert("Order failed: " + e.message);
              }
          },

          trackOrder: (id) => {
              router.to('status');
              document.getElementById('st-id').innerText = id.slice(-4).toUpperCase();

              const savedPhone = localStorage.getItem('nag_active_phone');
              if(savedPhone) document.getElementById('st-phone').innerText = savedPhone;

              if(listenerUnsub) listenerUnsub();

              listenerUnsub = onSnapshot(doc(db, "orders", id), (docSnap) => {
                  if (docSnap.exists()) {
                      const data = docSnap.data();
                      window.app.updateStatusUI(data.status);
                  } else {
                      window.app.clearSession();
                  }
              });
          },

          updateStatusUI: (status) => {
              const icon = document.getElementById('status-icon');
              const anim = document.getElementById('status-animation');
              const txt = document.getElementById('st-text');
              const desc = document.getElementById('st-desc');

              anim.className = "w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-500 relative";

              if(status === 'pending') {
                  anim.classList.add('bg-slate-100', 'text-slate-400');
                  icon.setAttribute('icon', 'solar:hourglass-linear');
                  txt.innerText = "Order Pending";
                  txt.className = "text-xl font-bold text-slate-700 mb-1";
                  desc.innerText = "We are receiving your order details.";
              } else if(status === 'cooking') {
                  anim.classList.add('bg-orange-100', 'text-orange-600');
                  icon.setAttribute('icon', 'solar:chef-hat-linear');
                  txt.innerText = "Preparing Food";
                  txt.className = "text-xl font-bold text-orange-600 mb-1";
                  desc.innerText = "The kitchen is firing up your Gepuk!";
              } else if(status === 'shipping') {
                  anim.classList.add('bg-blue-100', 'text-blue-600');
                  icon.setAttribute('icon', 'solar:moped-linear');
                  txt.innerText = "Out for Delivery";
                  txt.className = "text-xl font-bold text-blue-600 mb-1";
                  desc.innerText = "Rider is on the way to your location.";
              } else if(status === 'delivered') {
                  anim.classList.add('bg-green-100', 'text-green-600');
                  icon.setAttribute('icon', 'solar:check-circle-linear');
                  txt.innerText = "Delivered";
                  txt.className = "text-xl font-bold text-green-600 mb-1";
                  desc.innerText = "Enjoy your meal! Terima kasih.";
              }
          },

          clearSession: () => {
              if(confirm("Start new order?")) {
                  localStorage.removeItem('nag_active_id');
                  localStorage.removeItem('nag_active_phone');
                  if(listenerUnsub) listenerUnsub();
                  window.location.reload();
              }
          }
      };

      // --- ADMIN LOGIC ---
      window.admin = {
          login: () => {
              const e = document.getElementById('adm-email').value;
              const p = document.getElementById('adm-pass').value;
              signInWithEmailAndPassword(auth, e, p)
                  .then(() => router.to('admin-dashboard'))
                  .catch(e => alert(e.message));
          },
          logout: () => signOut(auth).then(() => router.to('landing')),

          setStatus: async (id, status) => {
              const ref = doc(db, "orders", id);
              await updateDoc(ref, { status: status });
          }
      };

      // --- INIT & PERSISTENCE ---
      renderCustomization();

      onAuthStateChanged(auth, (user) => {
          if(user) {
              router.to('admin-dashboard');
              startAdminListener();
          }
      });

      const activeId = localStorage.getItem('nag_active_id');
      if(activeId) {
          window.app.trackOrder(activeId);
      }

      function startAdminListener() {
          const q = query(collection(db, "orders"), orderBy("timestamp", "desc"));
          onSnapshot(q, (snapshot) => {
              const cont = document.getElementById('admin-list');
              cont.innerHTML = "";
              snapshot.forEach(docSnap => {
                  const d = docSnap.data();
                  const id = docSnap.id;
                  const date = d.timestamp ? d.timestamp.toDate().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) : 'Just now';

                  let adds = [];
                  if(d.details.addons.tempeh) adds.push('Tempeh');
                  if(d.details.addons.tauhu) adds.push('Tauhu');
                  if(d.details.addons.rice) adds.push('Rice');
                  const addStr = adds.length ? adds.join(', ') : 'None';
                  const cabStr = d.details.cabbage === 'none' ? 'No Veg' : d.details.cabbage;

                  const card = document.createElement('div');
                  card.className = "bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 relative overflow-hidden";
                  card.innerHTML = `
                      <div class="flex justify-between items-start z-10">
                          <div>
                              <h3 class="font-bold text-slate-900">${d.customer.name}</h3>
                              <div class="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                                  <iconify-icon icon="solar:clock-circle-linear"></iconify-icon> ${date}
                              </div>
                          </div>
                          <span class="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-lg">RM ${d.details.total.toFixed(2)}</span>
                      </div>

                      <div class="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl space-y-1">
                          <div class="flex justify-between"><span class="text-slate-400">Spice:</span> <span class="font-semibold text-orange-600">${d.details.spice}</span></div>
                          <div class="flex justify-between"><span class="text-slate-400">Cabbage:</span> <span>${cabStr}</span></div>
                          <div class="flex justify-between"><span class="text-slate-400">Addons:</span> <span>${addStr}</span></div>
                          <div class="border-t border-slate-200 my-1 pt-1"></div>
                          <div class="flex gap-2 items-start"><iconify-icon icon="solar:map-point-linear" class="mt-0.5 text-slate-400"></iconify-icon> <span class="line-clamp-2">${d.customer.addr}</span></div>
                          <div class="flex gap-2 items-center"><iconify-icon icon="solar:phone-linear" class="text-slate-400"></iconify-icon> <a href="https://wa.me/${d.customer.phone}" target="_blank" class="hover:text-green-600 hover:underline">${d.customer.phone}</a></div>
                          <div class="flex gap-2 items-center"><iconify-icon icon="solar:wallet-linear" class="text-slate-400"></iconify-icon> <span>${d.payment}</span></div>
                      </div>

                      <div class="grid grid-cols-4 gap-1 mt-auto pt-2">
                          <button onclick="admin.setStatus('${id}', 'pending')" class="py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider ${d.status==='pending'?'bg-slate-200 text-slate-700':'text-slate-300 hover:bg-slate-50'}">Pend</button>
                          <button onclick="admin.setStatus('${id}', 'cooking')" class="py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider ${d.status==='cooking'?'bg-orange-100 text-orange-600':'text-slate-300 hover:bg-slate-50'}">Cook</button>
                          <button onclick="admin.setStatus('${id}', 'shipping')" class="py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider ${d.status==='shipping'?'bg-blue-100 text-blue-600':'text-slate-300 hover:bg-slate-50'}">Ship</button>
                          <button onclick="admin.setStatus('${id}', 'delivered')" class="py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider ${d.status==='delivered'?'bg-green-100 text-green-600':'text-slate-300 hover:bg-slate-50'}">Done</button>
                      </div>
                  `;
                  cont.appendChild(card);
              });
          });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full h-screen flex flex-col md:items-center md:justify-center" id="app">

<div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none">
<div className="glass px-4 py-2 rounded-full shadow-lg pointer-events-auto flex items-center gap-2">
<iconify-icon className="text-orange-600 text-lg" icon="solar:fire-bold"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase text-slate-800">
            Gepuk.AI
          </span>
</div>
<button className="pointer-events-auto text-white/60 hover:text-white transition-colors" onclick="router.to('admin-login')">
<iconify-icon className="text-xl" icon="solar:shield-user-linear"></iconify-icon>
</button>
</div>

<div className="view-section w-full h-full md:h-auto md:w-[480px] md:aspect-[9/16] md:max-h-[850px] md:rounded-[2.5rem] glass shadow-2xl flex flex-col items-center justify-center p-8 relative animate-fade-in" id="view-landing">
<div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white/90 rounded-[2.5rem] pointer-events-none"></div>
<div className="relative z-10 text-center space-y-6">
<div className="w-32 h-32 bg-gradient-to-tr from-orange-100 to-red-50 rounded-full flex items-center justify-center mx-auto shadow-inner mb-4">
<iconify-icon className="text-6xl text-orange-600" icon="solar:chef-hat-heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-5xl font-semibold tracking-tighter text-slate-900 leading-[0.9]">
            Spicy.
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Authentic.
            </span>
<br/>
            Gepuk.
          </h1>
<p className="text-sm text-slate-500 font-medium max-w-[200px] mx-auto leading-relaxed">
            The legendary Nasi Ayam Gepuk. Crafted for heat lovers.
          </p>
<div className="pt-8 w-full max-w-xs mx-auto">
<button className="group relative w-full h-14 bg-slate-900 text-white rounded-2xl font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-orange-900/20" onclick="router.to('customize')">
<span>Order Now</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="mt-4 text-[10px] text-slate-400 font-medium tracking-wide uppercase">
              Only RM 12.00 Base
            </p>
</div>
</div>
</div>

<div className="view-section hidden w-full h-full md:h-[80vh] md:w-[580px] md:rounded-[2.5rem] glass shadow-2xl flex flex-col relative animate-slide-up overflow-hidden" id="view-customize">

<div className="px-6 py-5 border-b border-slate-100/50 flex items-center justify-between bg-white/60 backdrop-blur-md z-20">
<button className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors text-slate-600" onclick="router.to('landing')">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h2 className="text-sm font-semibold tracking-tight">Customize Bowl</h2>
<div className="w-10"></div>
</div>

<div className="flex-1 overflow-y-auto p-6 pb-52 space-y-8 scroll-smooth">

<div className="aspect-video bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl flex items-center justify-center border border-orange-100">
<iconify-icon className="text-6xl text-orange-500/50" icon="solar:fire-square-linear"></iconify-icon>
</div>

<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Nasi Ayam Gepuk Special
              </h3>
<span className="text-lg font-bold text-orange-600">RM 12.00</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
              Includes fragrant rice, crushed chicken, signature sambal, and
              cucumber slices.
            </p>
</div>

<div className="space-y-4">
<label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Spiciness Level (Required)
            </label>
<div className="grid grid-cols-2 gap-3" id="opt-spice">

</div>
</div>

<div className="space-y-4">
<label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Cabbage Options
            </label>
<div className="space-y-2" id="opt-cabbage">

</div>
</div>

<div className="space-y-4">
<label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Extra Add-ons
            </label>
<div className="space-y-2" id="opt-addons">

</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 bg-white/80 backdrop-blur-xl border-t border-slate-100 z-20">
<div className="flex justify-between items-end mb-4 px-1">
<span className="text-xs font-medium text-slate-500">Total Amount</span>
<span className="text-2xl font-semibold tracking-tight text-slate-900" id="display-total">
              RM 12.00
            </span>
</div>
<button className="w-full h-12 bg-slate-900 text-white rounded-xl font-medium text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2" onclick="router.to('shipping')">
            Continue
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="view-section hidden w-full h-full md:h-[80vh] md:w-[480px] md:rounded-[2.5rem] glass shadow-2xl flex flex-col relative animate-slide-up" id="view-shipping">
<div className="px-6 py-5 border-b border-slate-100/50 flex items-center justify-between bg-white/60 backdrop-blur-md z-20">
<button className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors text-slate-600" onclick="router.to('customize')">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h2 className="text-sm font-semibold tracking-tight">
            Details &amp; Payment
          </h2>
<div className="w-10"></div>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                Full Name
              </label>
<input className="w-full h-12 rounded-xl border border-slate-200 bg-white/50 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" id="inp-name" placeholder="e.g. Ali Baba" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                WhatsApp Number
              </label>
<input className="w-full h-12 rounded-xl border border-slate-200 bg-white/50 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" id="inp-phone" placeholder="012 345 6789" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                Delivery Address
              </label>
<textarea className="w-full rounded-xl border border-slate-200 bg-white/50 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none" id="inp-addr" placeholder="Unit, Block, Street..." rows="3"></textarea>
</div>
</div>

<div className="space-y-3 pt-2">
<label className="text-xs font-medium text-slate-700 ml-1">
              Payment Method
            </label>
<div className="grid grid-cols-1 gap-2">
<label className="flex items-center gap-3 p-3.5 border border-slate-200 rounded-xl bg-white/50 cursor-pointer has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50/50 transition-all">
<input checked="" className="peer sr-only" name="payment" type="radio" value="TnG"/>
<iconify-icon className="text-xl text-slate-400 peer-checked:text-orange-600" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 font-medium">
                  TnG eWallet
                </span>
<div className="ml-auto w-4 h-4 rounded-full border border-slate-300 peer-checked:border-orange-500 peer-checked:bg-orange-500"></div>
</label>
<label className="flex items-center gap-3 p-3.5 border border-slate-200 rounded-xl bg-white/50 cursor-pointer has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50/50 transition-all">
<input className="peer sr-only" name="payment" type="radio" value="Online Banking"/>
<iconify-icon className="text-xl text-slate-400 peer-checked:text-orange-600" icon="solar:card-transfer-linear"></iconify-icon>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 font-medium">
                  Online Banking
                </span>
<div className="ml-auto w-4 h-4 rounded-full border border-slate-300 peer-checked:border-orange-500 peer-checked:bg-orange-500"></div>
</label>
<label className="flex items-center gap-3 p-3.5 border border-slate-200 rounded-xl bg-white/50 cursor-pointer has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50/50 transition-all">
<input className="peer sr-only" name="payment" type="radio" value="COD"/>
<iconify-icon className="text-xl text-slate-400 peer-checked:text-orange-600" icon="solar:hand-money-linear"></iconify-icon>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 font-medium">
                  Cash on Delivery
                </span>
<div className="ml-auto w-4 h-4 rounded-full border border-slate-300 peer-checked:border-orange-500 peer-checked:bg-orange-500"></div>
</label>
</div>
</div>
</div>
<div className="p-6 bg-white/80 backdrop-blur-xl border-t border-slate-100 z-20">
<button className="w-full h-12 bg-slate-900 text-white rounded-xl font-medium text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2" onclick="app.submitOrder()">
            Place Order
          </button>
</div>
</div>

<div className="view-section hidden w-full h-full md:h-[80vh] md:w-[480px] md:rounded-[2.5rem] glass shadow-2xl flex flex-col items-center justify-center p-8 relative animate-fade-in text-center" id="view-status">
<div className="absolute top-6 right-6">
<button className="text-[10px] text-red-500 hover:text-red-600 font-medium uppercase tracking-wide" onclick="app.clearSession()">
            New Order
          </button>
</div>
<div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-6 text-slate-400 transition-all duration-500 relative" id="status-animation">
<div className="absolute inset-0 rounded-full border-2 border-dashed border-current animate-spin-slow opacity-20"></div>
<iconify-icon className="text-4xl" icon="solar:hourglass-linear" id="status-icon"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">
          Order #
          <span id="st-id">...</span>
</h2>
<p className="text-lg font-medium text-orange-600 mb-1" id="st-text">
          Pending Confirmation
        </p>
<p className="text-sm text-slate-500 mb-8 max-w-[250px] mx-auto" id="st-desc">
          We are receiving your details.
        </p>
<div className="w-full bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-left flex gap-3">
<iconify-icon className="text-yellow-600 text-lg flex-shrink-0 mt-0.5" icon="solar:info-circle-bold"></iconify-icon>
<div>
<p className="text-xs font-bold text-yellow-800 uppercase tracking-wide mb-1">
              Next Step
            </p>
<p className="text-xs text-yellow-700 leading-relaxed">
              We will WhatsApp you shortly at
              <span className="font-semibold" id="st-phone">...</span>
              to confirm payment and delivery. Please keep your phone nearby.
            </p>
</div>
</div>
</div>

<div className="view-section hidden w-full h-full md:h-auto md:w-[400px] md:rounded-[2rem] glass shadow-2xl flex flex-col p-8 relative animate-slide-up" id="view-admin-login">
<div className="mb-8">
<button className="text-slate-400 hover:text-slate-600 mb-4 block" onclick="router.to('landing')">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Admin Portal
          </h2>
</div>
<div className="space-y-4">
<input className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" id="adm-email" placeholder="Email" type="email"/>
<input className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" id="adm-pass" placeholder="Password" type="password"/>
<button className="w-full h-12 bg-slate-900 text-white rounded-xl font-medium text-sm hover:bg-slate-800" onclick="admin.login()">
            Secure Login
          </button>
</div>
</div>

<div className="view-section hidden w-full h-full bg-slate-50 flex flex-col relative animate-fade-in" id="view-admin-dashboard">
<div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm z-10 sticky top-0">
<div>
<h2 className="font-bold tracking-tight text-slate-900">
              Kitchen Dashboard
            </h2>
<p className="text-[10px] text-slate-500 uppercase tracking-wide">
              Live Orders
            </p>
</div>
<button className="text-xs text-red-600 font-medium bg-red-50 px-3 py-1.5 rounded-lg" onclick="admin.logout()">
            Logout
          </button>
</div>
<div className="flex-1 overflow-y-auto p-4 md:p-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto" id="admin-list">

<div className="col-span-full text-center py-12 text-slate-400 text-sm">
              Waiting for data...
            </div>
</div>
</div>
</div>
</div>



    </>
  );
}
