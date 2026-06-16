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
},
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
}
},
animation: {
'fade-in': 'fadeIn 0.3s ease-out forwards',
'slide-up': 'slideUp 0.4s ease-out forwards',
'pulse-soft': 'pulseSoft 0.6s ease-out',
'scale-pop': 'scalePop 0.35s ease-out',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
pulseSoft: {
'0%': { transform: 'scale(1)', opacity: '1' },
'50%': { transform: 'scale(1.06)', opacity: '0.9' },
'100%': { transform: 'scale(1)', opacity: '1' },
},
scalePop: {
'0%': { transform: 'scale(0.85)', opacity: '0' },
'60%': { transform: 'scale(1.05)', opacity: '1' },
'100%': { transform: 'scale(1)', opacity: '1' },
}
}
}
}
}



        // Data & State
        const adminName = 'Vijay';

        const prices = { 
            cutting: { adult: 100, young: 80 }, 
            shaving: 50, 
            color: 150, 
            massage: 100 
        };

        let shopState = {
            isOpen: true,
            openTime: '09:00',
            closeTime: '21:00'
        };

        let state = {
            ageGroup: 'adult',
            selectedSeat: null,
            occupiedSeats: [], // all empty in starting
            totalPrice: 100,
            quantities: {
                cutting: 1,
                shaving: 0,
                color: 0,
                massage: 0
            },
            bookings: [], // list of all current bookings
            extraServices: [] // {id,name,price}
        };

        // Utility: simple unique ID
        function uid() {
            return 'b_' + Math.random().toString(36).slice(2,9);
        }

        // Navigation
        function navigate(view) {
            ['page-booking', 'page-payment', 'page-success', 'page-admin'].forEach(id => {
                const el = document.getElementById(id);
                el.classList.add('hidden');
                el.classList.remove('animate-fade-in', 'animate-slide-up');
            });

            if (view === 'home') {
                document.getElementById('page-booking').classList.remove('hidden');
                document.getElementById('page-booking').classList.add('animate-fade-in');
                state.selectedSeat = null;
                renderSeats();
                updateShopStatusUI();
            } else if (view === 'payment') {
                document.getElementById('page-payment').classList.remove('hidden');
                document.getElementById('page-payment').classList.add('animate-slide-up');
            } else if (view === 'success') {
                document.getElementById('page-success').classList.remove('hidden');
                document.getElementById('page-success').classList.add('animate-fade-in');
            } else if (view === 'admin') {
                document.getElementById('page-admin').classList.remove('hidden');
                document.getElementById('admin-login-view').classList.remove('hidden');
                document.getElementById('admin-dash-view').classList.add('hidden');
                document.getElementById('page-admin').classList.add('animate-fade-in');
            }
        }

        // --- BOOKING LOGIC ---

        function setAge(group) {
            state.ageGroup = group;
            const btnAdult = document.getElementById('btn-adult');
            const btnYoung = document.getElementById('btn-young');
            const priceLabel = document.getElementById('price-cutting');

            if (group === 'adult') {
                btnAdult.className = "px-3 py-1 rounded-md text-xs font-medium bg-white shadow-sm text-slate-900 transition-all border border-slate-100";
                btnYoung.className = "px-3 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-700 transition-all";
                priceLabel.innerText = prices.cutting.adult;
            } else {
                btnYoung.className = "px-3 py-1 rounded-md text-xs font-medium bg-white shadow-sm text-slate-900 transition-all border border-slate-100";
                btnAdult.className = "px-3 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-700 transition-all";
                priceLabel.innerText = prices.cutting.young;
            }
            calculateTotal();
        }

        function changeQty(service, delta) {
            const q = state.quantities;
            const current = q[service] || 0;
            let next = current + delta;
            if (next < 0) next = 0;
            // ensure at least 1 cutting
            if (service === 'cutting' && next < 1) next = 1;
            q[service] = next;

            document.getElementById('qty-' + service).innerText = next;

            // toggle checkbox based on qty (for optional services)
            if (service !== 'cutting') {
                const checkbox = document.getElementById('svc-' + service);
                checkbox.checked = next > 0;
            }

            calculateTotal();
        }

        function calculateTotal() {
            let total = 0;
            const q = state.quantities;

            // cutting based on age
            const cutPrice = (state.ageGroup === 'adult' ? prices.cutting.adult : prices.cutting.young);
            total += cutPrice * q.cutting;

            if (q.shaving > 0) total += (prices.shaving || 0) * q.shaving;
            if (q.color > 0) total += (prices.color || 0) * q.color;
            if (q.massage > 0) total += (prices.massage || 0) * q.massage;

            // extra services
            state.extraServices.forEach(svc => {
                if (svc.qty && svc.qty > 0) {
                    total += svc.price * svc.qty;
                }
            });
            
            state.totalPrice = total;
            document.getElementById('summary-preview-total').innerText = '₹' + total;
        }

        function renderSeats() {
            const grid = document.getElementById('seat-grid');
            grid.innerHTML = '';
            
            for (let i = 1; i <= 10; i++) {
                const isOccupied = state.occupiedSeats.includes(i);
                const isSelected = state.selectedSeat === i;
                
                const div = document.createElement('div');
                let className = "h-9 rounded text-xs font-medium flex items-center justify-center transition-all cursor-pointer border ";
                
                if (isOccupied) {
                    className += "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed";
                } else if (isSelected) {
                    className += "bg-slate-900 border-slate-900 text-white shadow-md transform scale-105";
                } else {
                    className += "bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900";
                }
                
                div.className = className;
                div.innerText = i;
                
                if (!isOccupied) {
                    div.onclick = () => {
                        state.selectedSeat = i;
                        document.getElementById('seat-error').classList.add('hidden');
                        renderSeats();
                    };
                }
                grid.appendChild(div);
            }
        }

        function getSelectedServicesText() {
            const parts = [];
            const q = state.quantities;
            if (q.cutting > 0) parts.push(q.cutting + "x Cutting");
            if (q.shaving > 0) parts.push(q.shaving + "x Shaving");
            if (q.color > 0) parts.push(q.color + "x Hair Color");
            if (q.massage > 0) parts.push(q.massage + "x Massage");
            state.extraServices.forEach(svc => {
                if (svc.qty && svc.qty > 0) {
                    parts.push(svc.qty + "x " + svc.name);
                }
            });
            return parts.join(", ");
        }

        function goToPayment() {
            if (!state.selectedSeat) {
                document.getElementById('seat-error').classList.remove('hidden');
                return;
            }
            
            const name = document.getElementById('cust-name').value || 'Guest';
            const phone = document.getElementById('cust-phone').value || 'Not provided';
            const timeVal = document.getElementById('cust-time').value;
            const time = timeVal || 'Walk-in';

            document.getElementById('conf-name').innerText = name;
            document.getElementById('conf-phone').innerText = phone;
            document.getElementById('conf-time').innerText = timeVal ? formatTime(timeVal) : time;
            document.getElementById('conf-seat').innerText = state.selectedSeat;
            document.getElementById('conf-total').innerText = '₹' + state.totalPrice;

            const servicesText = getSelectedServicesText() || 'Cutting';
            document.getElementById('conf-services').innerText = servicesText;

            navigate('payment');
        }

        function formatTime(timeStr) {
            if (!timeStr || timeStr === 'Not specified') return 'Walk-in';
            const [hours, minutes] = timeStr.split(':');
            const h = parseInt(hours, 10);
            const ampm = h >= 12 ? 'PM' : 'AM';
            const h12 = h % 12 || 12;
            return `${h12}:${minutes} ${ampm}`;
        }

        function confirmBooking() {
            const btn = document.getElementById('confirm-booking-btn');
            const originalHTML = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = `<iconify-icon icon="lucide:loader-2" class="animate-spin" width="16"></iconify-icon> Sending...`;
            
            setTimeout(() => {
                // Add seat as occupied (avoid duplicates)
                if (state.selectedSeat && !state.occupiedSeats.includes(state.selectedSeat)) {
                    state.occupiedSeats.push(state.selectedSeat);
                }

                // Create booking object for admin
                const booking = {
                    id: uid(),
                    seat: state.selectedSeat,
                    name: document.getElementById('cust-name').value || 'Guest',
                    phone: document.getElementById('cust-phone').value || 'Not provided',
                    time: document.getElementById('cust-time').value || null,
                    services: getSelectedServicesText() || 'Cutting',
                    total: state.totalPrice
                };
                state.bookings.push(booking);

                // "Message" for admin (visible in dashboard header)
                lastAdminMessage = `New booking: Seat ${booking.seat} - ${booking.name}, ${booking.phone}`;

                // Clear selection but keep occupied status
                state.selectedSeat = null;

                // Clear form inputs and quantities
                document.getElementById('cust-name').value = '';
                document.getElementById('cust-time').value = '';
                document.getElementById('cust-phone').value = '';
                state.quantities = { cutting: 1, shaving: 0, color: 0, massage: 0 };
                document.getElementById('qty-cutting').innerText = 1;
                document.getElementById('qty-shaving').innerText = 0;
                document.getElementById('qty-color').innerText = 0;
                document.getElementById('qty-massage').innerText = 0;
                ['svc-shaving','svc-color','svc-massage'].forEach(id => {
                    const cb = document.getElementById(id);
                    if (cb) cb.checked = false;
                });
                state.extraServices.forEach(s => { s.qty = 0; });
                calculateTotal();
                renderSeats();

                // Update admin view data if logged in
                if (!document.getElementById('admin-login-view').classList.contains('hidden')) {
                    // not logged in
                } else {
                    renderAdminSeats();
                    renderAdminNotification();
                }

                navigate('success');
                btn.innerHTML = originalHTML;
                btn.disabled = false;
            }, 800);
        }

        // --- ADMIN LOGIC ---

        let lastAdminMessage = '';

        function loginAdmin() {
            const nameInput = document.getElementById('admin-name').value.trim();
            if (nameInput === adminName) {
                document.getElementById('admin-login-view').classList.add('hidden');
                document.getElementById('admin-dash-view').classList.remove('hidden');

                // initialise timings UI
                document.getElementById('shop-open-time').value = shopState.openTime;
                document.getElementById('shop-close-time').value = shopState.closeTime;

                renderAdminSeats();
                renderAdminPrices();
                renderAdminNotification();
                updateShopStatusUI();
            } else {
                alert('Access Denied');
            }
        }

        function renderAdminNotification() {
            let container = document.getElementById('admin-notification');
            if (!container) {
                const header = document.querySelector('#admin-dash-view > div');
                if (!header) return;
                container = document.createElement('div');
                container.id = 'admin-notification';
                container.className = "mt-2 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-1 inline-flex items-center gap-1 animate-pulse-soft";
                header.appendChild(container);
            }
            if (lastAdminMessage) {
                container.innerHTML = `<iconify-icon icon="lucide:bell-ring" width="12"></iconify-icon><span>${lastAdminMessage}</span>`;
            } else {
                container.innerHTML = '';
            }
        }

        function renderAdminSeats() {
            const list = document.getElementById('admin-seat-list');
            list.innerHTML = '';

            const active = state.bookings.filter(b => state.occupiedSeats.includes(b.seat));
            document.getElementById('admin-occupied-count').innerText = active.length;

            if (active.length === 0) {
                list.innerHTML = `<div class="p-8 text-center text-xs text-slate-400">All seats are currently free.</div>`;
                return;
            }

            active
                .slice()
                .sort((a,b) => a.seat - b.seat)
                .forEach(booking => {
                    const seatNum = booking.seat;
                    const row = document.createElement('div');
                    row.className = "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 bg-white hover:bg-slate-50 transition-colors";
                    row.innerHTML = `
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">${seatNum}</div>
                            <div class="space-y-0.5">
                                <div class="text-sm font-medium text-slate-900">${booking.name}</div>
                                <div class="text-[10px] text-slate-500">Phone: ${booking.phone}</div>
                                <div class="text-[10px] text-slate-500">Time: ${booking.time ? formatTime(booking.time) : 'Walk-in'}</div>
                                <div class="text-[10px] text-slate-500">Services: ${booking.services}</div>
                                <div class="text-[10px] text-slate-900 font-medium">Total: ₹${booking.total}</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="markCompleted(${seatNum})" class="bg-white border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-200 text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-all flex items-center gap-1.5">
                                <iconify-icon icon="lucide:check" width="12"></iconify-icon>
                                Complete
                            </button>
                            <button onclick="denySeat(${seatNum})" class="bg-white border border-red-200 text-red-600 hover:bg-red-50 text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-all flex items-center gap-1.5">
                                <iconify-icon icon="lucide:x" width="12"></iconify-icon>
                                Cancel
                            </button>
                        </div>
                    `;
                    list.appendChild(row);
                });
        }

        function markCompleted(seatNum) {
            if (!confirm(`Mark Seat ${seatNum} as completed? This will free the seat.`)) return;

            // remove booking and free seat
            state.occupiedSeats = state.occupiedSeats.filter(s => s !== seatNum);
            state.bookings = state.bookings.filter(b => b.seat !== seatNum);

            renderAdminSeats();
            renderSeats();

            // completion animation on success card if visible
            const successPage = document.getElementById('page-success');
            if (!successPage.classList.contains('hidden')) {
                successPage.classList.add('animate-pulse-soft');
                setTimeout(() => successPage.classList.remove('animate-pulse-soft'), 600);
            }
        }

        function denySeat(seatNum) {
            if (!confirm(`Deny booking and free Seat ${seatNum}?`)) return;

            state.occupiedSeats = state.occupiedSeats.filter(s => s !== seatNum);
            state.bookings = state.bookings.filter(b => b.seat !== seatNum);

            renderAdminSeats();
            renderSeats();
        }

        function updateAdminPrice(service, age, value) {
            const v = parseInt(value, 10) || 0;
            if (service === 'cutting') {
                if (age === 'adult') prices.cutting.adult = v;
                if (age === 'young') prices.cutting.young = v;
            } else {
                prices[service] = v;
            }
            // Update front card price text if needed
            if (service === 'cutting' && age === state.ageGroup) {
                document.getElementById('price-cutting').innerText = v;
            }
            calculateTotal();
        }

        function addNewService() {
            const id = uid();
            const name = prompt('Service Name');
            if (!name) return;
            const priceVal = parseInt(prompt('Price (₹)'), 10);
            const price = isNaN(priceVal) ? 0 : priceVal;

            const svc = { id, name, price, qty: 0 };
            state.extraServices.push(svc);

            const container = document.getElementById('extra-services');
            const row = document.createElement('div');
            row.className = "flex items-center gap-2";
            row.id = 'extra-' + id;
            row.innerHTML = `
                <span class="w-20 text-slate-500 truncate">${name}</span>
                <input type="number" min="0" value="${price}" class="w-20 bg-white border border-slate-200 rounded px-1.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900" onchange="updateExtraPrice('${id}', this.value)">
            `;
            container.appendChild(row);

            // booking side doesn't show these separately, but included in services text & total
        }

        function updateExtraPrice(id, value) {
            const v = parseInt(value, 10) || 0;
            const svc = state.extraServices.find(s => s.id === id);
            if (svc) {
                svc.price = v;
                calculateTotal();
            }
        }

        function renderAdminPrices() {
            document.getElementById('price-input-cutting-adult').value = prices.cutting.adult;
            document.getElementById('price-input-cutting-young').value = prices.cutting.young;
            document.getElementById('price-input-shaving').value = prices.shaving;
            document.getElementById('price-input-color').value = prices.color;
            document.getElementById('price-input-massage').value = prices.massage;
        }

        // Shop status controls (open/closed + timings)

        function updateShopStatusUI() {
            const pill = document.getElementById('shop-status-pill');
            const dot = document.getElementById('shop-status-dot');
            const text = document.getElementById('shop-status-text');
            const banner = document.getElementById('shop-closed-banner');

            if (!pill || !dot || !text) return;

            pill.classList.remove('hidden');
            const openLabel = document.getElementById('shop-open-label');
            const closedLabel = document.getElementById('shop-closed-label');
            const toggleBtn = document.getElementById('toggle-shop-btn');

            const openStr = shopState.openTime ? formatTime(shopState.openTime) : '';
            const closeStr = shopState.closeTime ? formatTime(shopState.closeTime) : '';
            text.textContent = shopState.isOpen ? `Open ${openStr} - ${closeStr}` : `Closed ${openStr} - ${closeStr}`;

            if (shopState.isOpen) {
                dot.className = "w-2 h-2 rounded-full bg-emerald-500 animate-pulse";
                if (banner) banner.classList.add('hidden');
                if (openLabel && closedLabel && toggleBtn) {
                    openLabel.classList.remove('hidden');
                    closedLabel.classList.add('hidden');
                    toggleBtn.textContent = 'Close Shop';
                }
            } else {
                dot.className = "w-2 h-2 rounded-full bg-red-500 animate-pulse";
                if (banner) banner.classList.remove('hidden');
                if (openLabel && closedLabel && toggleBtn) {
                    openLabel.classList.add('hidden');
                    closedLabel.classList.remove('hidden');
                    toggleBtn.textContent = 'Open Shop';
                }
            }
        }

        function toggleShopStatus() {
            shopState.isOpen = !shopState.isOpen;
            // store current input times
            const openInput = document.getElementById('shop-open-time');
            const closeInput = document.getElementById('shop-close-time');
            if (openInput && openInput.value) shopState.openTime = openInput.value;
            if (closeInput && closeInput.value) shopState.closeTime = closeInput.value;

            updateShopStatusUI();
        }

        // Init
        renderSeats();
        calculateTotal();
        updateShopStatusUI();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<button className="flex items-center gap-2 group" onclick="navigate('home')">
<div className="w-8 h-8 bg-slate-900 text-white rounded flex items-center justify-center font-medium tracking-tighter transition-transform group-hover:scale-95">YS</div>
<h1 className="text-sm font-medium tracking-tight text-slate-900">YOUNG STAR</h1>
</button>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded text-xs font-medium text-slate-600 border border-slate-200" id="shop-status-pill">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" id="shop-status-dot"></span>
<span id="shop-status-text">Open 9:00 AM - 9:00 PM</span>
</div>
<button className="hover:text-slate-900 transition-colors text-xs font-medium text-slate-500" onclick="navigate('admin')">Owner Login</button>
</div>
</div>
</nav>
<main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full relative">

<div className="animate-fade-in space-y-8" id="page-booking">
<div className="flex flex-col gap-1 mb-8">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Book an Appointment</h2>
<p className="text-sm text-slate-500">Select your services and preferred time.</p>
<p className="hidden mt-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-2" id="shop-closed-banner">
                    Shop is currently closed. You can still register, but service will start when shop opens.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<div className="md:col-span-7 space-y-8">

<section className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-xs font-medium text-slate-500 mb-1.5">Full Name</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 placeholder:text-slate-300 transition-all" id="cust-name" placeholder="John Doe" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-slate-500 mb-1.5">Phone Number</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-sm text-slate-400 font-medium">+91</span>
<input className="w-full bg-white border border-slate-200 rounded pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 placeholder:text-slate-300 transition-all" id="cust-phone" placeholder="98765 43210" type="tel"/>
</div>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-slate-500 mb-1.5 flex items-center gap-1">
                                    Preferred Time 
                                    <iconify-icon className="text-slate-400" icon="lucide:clock" width="12"></iconify-icon>
</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 text-slate-900 transition-all" id="cust-time" type="time"/>
</div>
</div>
</section>

<section>
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-slate-900">Services</h3>

<div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
<button className="px-3 py-1 rounded-md text-xs font-medium bg-white shadow-sm text-slate-900 transition-all border border-slate-100" id="btn-adult" onclick="setAge('adult')">Adult</button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-700 transition-all" id="btn-young" onclick="setAge('young')">Child</button>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-6">

<div className="relative group select-none border border-slate-200 rounded-lg p-3 hover:border-slate-300 transition-all bg-slate-50 h-full flex flex-col justify-between">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-medium text-slate-900">Cutting</span>
</div>
<div className="flex justify-between items-end mt-2">
<span className="text-xs text-slate-500">Standard</span>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 border border-slate-200 rounded px-1.5 py-0.5">
<button className="text-xs text-slate-500 hover:text-slate-900 px-1" onclick="changeQty('cutting', -1)" type="button">-</button>
<span className="text-xs font-medium text-slate-900 min-w-[1.25rem] text-center" id="qty-cutting">1</span>
<button className="text-xs text-slate-500 hover:text-slate-900 px-1" onclick="changeQty('cutting', 1)" type="button">+</button>
</div>
<span className="text-sm font-medium text-slate-900">₹<span id="price-cutting">100</span></span>
</div>
</div>
</div>
<label className="cursor-pointer relative group select-none">
<input className="service-checkbox hidden" id="svc-shaving" onchange="calculateTotal()" type="checkbox"/>
<div className="border border-slate-200 rounded-lg p-3 hover:border-slate-300 transition-all h-full flex flex-col justify-between">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-medium text-slate-900">Shaving</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-400" icon="lucide:plus" width="16"></iconify-icon>
</div>
<div className="flex justify-between items-end mt-2">
<span className="text-xs text-slate-500">Beard Trim</span>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 border border-slate-200 rounded px-1.5 py-0.5">
<button className="text-xs text-slate-500 hover:text-slate-900 px-1" onclick="changeQty('shaving', -1)" type="button">-</button>
<span className="text-xs font-medium text-slate-900 min-w-[1.25rem] text-center" id="qty-shaving">0</span>
<button className="text-xs text-slate-500 hover:text-slate-900 px-1" onclick="changeQty('shaving', 1)" type="button">+</button>
</div>
<span className="text-sm font-medium text-slate-900">₹50</span>
</div>
</div>
</div>
</label>
<label className="cursor-pointer relative group select-none">
<input className="service-checkbox hidden" id="svc-color" onchange="calculateTotal()" type="checkbox"/>
<div className="border border-slate-200 rounded-lg p-3 hover:border-slate-300 transition-all h-full flex flex-col justify-between">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-medium text-slate-900">Hair Color</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-400" icon="lucide:plus" width="16"></iconify-icon>
</div>
<div className="flex justify-between items-end mt-2">
<span className="text-xs text-slate-500">Premium</span>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 border border-slate-200 rounded px-1.5 py-0.5">
<button className="text-xs text-slate-500 hover:text-slate-900 px-1" onclick="changeQty('color', -1)" type="button">-</button>
<span className="text-xs font-medium text-slate-900 min-w-[1.25rem] text-center" id="qty-color">0</span>
<button className="text-xs text-slate-500 hover:text-slate-900 px-1" onclick="changeQty('color', 1)" type="button">+</button>
</div>
<span className="text-sm font-medium text-slate-900">₹150</span>
</div>
</div>
</div>
</label>
<label className="cursor-pointer relative group select-none">
<input className="service-checkbox hidden" id="svc-massage" onchange="calculateTotal()" type="checkbox"/>
<div className="border border-slate-200 rounded-lg p-3 hover:border-slate-300 transition-all h-full flex flex-col justify-between">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-medium text-slate-900">Massage</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-400" icon="lucide:plus" width="16"></iconify-icon>
</div>
<div className="flex justify-between items-end mt-2">
<span className="text-xs text-slate-500">Head</span>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 border border-slate-200 rounded px-1.5 py-0.5">
<button className="text-xs text-slate-500 hover:text-slate-900 px-1" onclick="changeQty('massage', -1)" type="button">-</button>
<span className="text-xs font-medium text-slate-900 min-w-[1.25rem] text-center" id="qty-massage">0</span>
<button className="text-xs text-slate-500 hover:text-slate-900 px-1" onclick="changeQty('massage', 1)" type="button">+</button>
</div>
<span className="text-sm font-medium text-slate-900">₹100</span>
</div>
</div>
</div>
</label>
</div>
</section>
</div>

<div className="md:col-span-5">
<div className="sticky top-20 bg-white border border-slate-200 rounded-lg p-5 shadow-sm space-y-6">
<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-slate-900">Select Seat</h3>
<div className="flex gap-2">
<span className="flex items-center gap-1 text-[10px] text-slate-500"><div className="w-2 h-2 bg-slate-900 rounded-full"></div> You</span>
<span className="flex items-center gap-1 text-[10px] text-slate-500"><div className="w-2 h-2 bg-slate-100 border border-slate-200 rounded-full"></div> Busy</span>
</div>
</div>
<div className="grid grid-cols-5 gap-2" id="seat-grid"></div>
<p className="text-xs text-red-500 mt-2 hidden" id="seat-error">Please select a seat</p>
</div>
<div className="pt-4 border-t border-slate-100">
<div className="flex justify-between items-baseline mb-4">
<span className="text-xs text-slate-500">Estimated Total</span>
<span className="text-lg font-medium text-slate-900" id="summary-preview-total">₹100</span>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-3 rounded-md shadow-sm transition-all flex justify-center items-center gap-2" onclick="goToPayment()">
<span>Register Booking</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden animate-slide-up max-w-lg mx-auto" id="page-payment">
<button className="mb-6 text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1" onclick="navigate('home')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon> Back to Booking
            </button>
<div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
<div className="p-6 border-b border-slate-100">
<h2 className="text-lg font-medium text-slate-900 tracking-tight mb-1">Confirm Details</h2>
<p className="text-xs text-slate-500">Review your appointment. Payment will be done at shop.</p>
</div>
<div className="p-6 space-y-6">

<div className="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-3">
<div className="flex justify-between text-sm">
<span className="text-slate-500">Customer</span>
<span className="font-medium text-slate-900" id="conf-name">--</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Phone</span>
<span className="font-medium text-slate-900" id="conf-phone">--</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Time</span>
<span className="font-medium text-slate-900" id="conf-time">--</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Seat No.</span>
<span className="font-medium text-slate-900" id="conf-seat">--</span>
</div>
<div className="text-sm">
<span className="text-slate-500">Services</span>
<div className="mt-1 text-slate-900 text-xs" id="conf-services"></div>
</div>
<div className="pt-3 border-t border-slate-200 flex justify-between items-center">
<span className="text-sm font-medium text-slate-900">Total Amount</span>
<span className="text-xl font-semibold text-slate-900 tracking-tight" id="conf-total">₹0</span>
</div>
</div>

<div className="text-[10px] text-slate-500 flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="lucide:info" width="12"></iconify-icon>
<span>Payment can be made in cash or any digital method directly at the saloon after your service is completed.</span>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-3 rounded-md shadow-lg shadow-slate-200 transition-all flex justify-center items-center gap-2" id="confirm-booking-btn" onclick="confirmBooking()">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
<span>Confirm Booking &amp; Notify Admin</span>
</button>
<p className="text-[10px] text-center text-slate-400">Admin will receive a new booking notification.</p>
</div>
</div>
</div>

<div className="hidden max-w-md mx-auto text-center pt-12" id="page-success">
<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-pop">
<iconify-icon icon="lucide:check" strokeWidth="2" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-medium text-slate-900 tracking-tight mb-2">Booking Registered</h2>
<p className="text-sm text-slate-500 mb-4">Your details have been sent to the owner.</p>
<p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-3 py-2 inline-flex items-center gap-2 mb-8 animate-pulse-soft">
<iconify-icon icon="lucide:bell" width="14"></iconify-icon>
<span>Admin has received your booking message.</span>
</p>
<button className="bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 text-sm font-medium px-6 py-2 rounded-md transition-all" onclick="navigate('home')">
                Book Another
            </button>
</div>

<div className="hidden animate-fade-in max-w-4xl mx-auto" id="page-admin">

<div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm max-w-lg mx-auto" id="admin-login-view">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-slate-900">
<iconify-icon icon="lucide:shield-lock" width="16"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-slate-900">Owner Access</h2>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Owner Name</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900" id="admin-name" placeholder="Enter owner name" type="text"/>
</div>
<button className="w-full bg-slate-900 text-white text-sm font-medium py-2.5 rounded-md hover:bg-slate-800 transition-all" onclick="loginAdmin()">
                        Verify &amp; Login
                    </button>
<button className="w-full text-xs text-slate-400 hover:text-slate-600 mt-2" onclick="navigate('home')">Cancel</button>
</div>
</div>

<div className="hidden space-y-6" id="admin-dash-view">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<h2 className="text-lg font-medium text-slate-900 tracking-tight">Shop Dashboard</h2>
<p className="text-xs text-slate-500">Manage active seats, bookings and pricing.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-1.5 bg-white">
<div className="flex items-center gap-1 text-xs">
<span className="text-slate-500">Status:</span>
<span className="font-medium text-emerald-600" id="shop-open-label">Open</span>
<span className="hidden font-medium text-red-500" id="shop-closed-label">Closed</span>
</div>
<button className="ml-2 text-xs font-medium px-2.5 py-1 rounded bg-slate-900 text-white hover:bg-slate-800 transition-all" id="toggle-shop-btn" onclick="toggleShopStatus()">
                                Close Shop
                            </button>
</div>
<button className="text-xs text-slate-500 hover:text-red-600 font-medium px-3 py-1.5 border border-slate-200 rounded bg-white" onclick="navigate('home')">Logout</button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider">Shop Timings</h3>
</div>
<div className="grid grid-cols-2 gap-4 items-end">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Opens At</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900" id="shop-open-time" type="time"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Closes At</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900" id="shop-close-time" type="time"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider">Seat Management</h3>
<span className="text-[10px] text-slate-400">Live Bookings</span>
</div>
<div className="divide-y divide-slate-100" id="admin-seat-list">

</div>
</div>

<div className="space-y-4">
<div className="bg-white border border-slate-200 rounded-lg p-4">
<div className="text-xs text-slate-500 mb-1">Seats Occupied</div>
<div className="text-xl font-medium text-slate-900 tracking-tight" id="admin-occupied-count">0</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4 space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider">Service Prices</h3>
<button className="text-[10px] px-2 py-1 rounded border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center gap-1" onclick="addNewService()">
<iconify-icon icon="lucide:plus" width="10"></iconify-icon>
                                    Add
                                </button>
</div>
<div className="space-y-2 text-xs" id="price-editor">
<div className="flex items-center gap-2">
<span className="w-20 text-slate-500">Cutting A</span>
<input className="w-20 bg-white border border-slate-200 rounded px-1.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900" id="price-input-cutting-adult" min="0" onchange="updateAdminPrice('cutting','adult',this.value)" type="number" value="100"/>
<span className="text-slate-400">Adult</span>
</div>
<div className="flex items-center gap-2">
<span className="w-20 text-slate-500">Cutting C</span>
<input className="w-20 bg-white border border-slate-200 rounded px-1.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900" id="price-input-cutting-young" min="0" onchange="updateAdminPrice('cutting','young',this.value)" type="number" value="80"/>
<span className="text-slate-400">Child</span>
</div>
<div className="flex items-center gap-2">
<span className="w-20 text-slate-500">Shaving</span>
<input className="w-20 bg-white border border-slate-200 rounded px-1.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900" id="price-input-shaving" min="0" onchange="updateAdminPrice('shaving',null,this.value)" type="number" value="50"/>
</div>
<div className="flex items-center gap-2">
<span className="w-20 text-slate-500">Color</span>
<input className="w-20 bg-white border border-slate-200 rounded px-1.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900" id="price-input-color" min="0" onchange="updateAdminPrice('color',null,this.value)" type="number" value="150"/>
</div>
<div className="flex items-center gap-2">
<span className="w-20 text-slate-500">Massage</span>
<input className="w-20 bg-white border border-slate-200 rounded px-1.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900" id="price-input-massage" min="0" onchange="updateAdminPrice('massage',null,this.value)" type="number" value="100"/>
</div>
<div className="space-y-2" id="extra-services"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="border-t border-slate-200 bg-white py-6 mt-auto">
<div className="max-w-4xl mx-auto px-4 text-center">
<p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">© 2023 Young Star Saloon</p>
</div>
</footer>


    </>
  );
}
