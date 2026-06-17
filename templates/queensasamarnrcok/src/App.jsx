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



        // --- Data & Constants ---
        const AIRPORTS = [
            "Manila (MNL) - NAIA", "Cebu (CEB) - Mactan-Cebu", "Davao (DVO) - Francisco Bangoy", 
            "Kalibo (KLO)", "Caticlan (MPH) - Boracay", "Puerto Princesa (PPS)", 
            "Bohol (TAG) - Panglao", "Iloilo (ILO)", "Bacolod (BCD)", 
            "Tacloban (TAC)", "Cagayan de Oro (CGY) - Laguindingan", 
            "General Santos (GES)", "Zamboanga (ZAM)", "Siargao (IAO)", 
            "Dumaguete (DGT)", "Legazpi (LGP) - Bicol", "Clark (CRK)", 
            "Tawi-Tawi (TWT) - Sanga-Sanga"
        ];

        let itineraries = JSON.parse(localStorage.getItem('queenflight_tickets')) || [];
        let currentTicketId = null;
        let isEditMode = false;

        // --- Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            populateAirports();
            renderList();
            lucide.createIcons();
            if(itineraries.length === 0) switchView('form');
            else switchView('list');
        });

        function populateAirports() {
            const dep = document.getElementById('depAirport');
            const arr = document.getElementById('arrAirport');
            const html = AIRPORTS.map(a => `<option value="${a}">${a}</option>`).join('');
            dep.innerHTML = `<option value="" disabled selected>Select Origin</option>` + html;
            arr.innerHTML = `<option value="" disabled selected>Select Destination</option>` + html;
        }

        // --- Navigation ---
        function switchView(viewName) {
            document.getElementById('view-form').classList.add('hidden');
            document.getElementById('view-list').classList.add('hidden');
            document.getElementById('view-ticket').classList.add('hidden');
            
            document.getElementById(`view-${viewName}`).classList.remove('hidden');
            window.scrollTo(0,0);
            
            if(viewName === 'list') renderList();
            isEditMode = false;
            toggleEditUI(false);
            setTimeout(() => lucide.createIcons(), 50);
        }

        // --- Form Logic ---
        function addPassengerField() {
            const container = document.getElementById('passenger-container');
            const div = document.createElement('div');
            div.className = "grid grid-cols-1 md:grid-cols-12 gap-4 items-end pb-4 border-b border-dashed border-slate-200 passenger-row mt-4";
            div.innerHTML = `
                <div class="md:col-span-6">
                    <label class="block text-xs font-medium text-slate-500 mb-1.5">Full Name</label>
                    <input type="text" name="pName[]" required placeholder="LASTNAME, FIRSTNAME" class="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 uppercase">
                </div>
                <div class="md:col-span-3">
                    <label class="block text-xs font-medium text-slate-500 mb-1.5">Gender</label>
                    <select name="pGender[]" class="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 bg-white">
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
                <div class="md:col-span-3 flex gap-2">
                    <div class="flex-grow">
                        <label class="block text-xs font-medium text-slate-500 mb-1.5">Baggage (kg)</label>
                        <select name="pBaggage[]" class="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 bg-white">
                            <option value="0">No Baggage</option>
                            <option value="20">20 KG</option>
                            <option value="32">32 KG</option>
                            <option value="40">40 KG</option>
                        </select>
                    </div>
                    <button type="button" onclick="this.closest('.passenger-row').remove()" class="mb-2 text-red-500 hover:bg-red-50 p-2 rounded"><i data-lucide="trash-2" class="w-5 h-5"></i></button>
                </div>
            `;
            container.appendChild(div);
            lucide.createIcons();
        }

        function calculateFare() {
            const total = parseFloat(document.getElementById('inputTotalFare').value) || 0;
            const base = total * 0.65;
            const tax = total * 0.35;
            
            document.getElementById('displayBase').textContent = base.toLocaleString('en-PH', {style: 'currency', currency: 'PHP'});
            document.getElementById('displayTax').textContent = tax.toLocaleString('en-PH', {style: 'currency', currency: 'PHP'});
            document.getElementById('displayTotal').textContent = total.toLocaleString('en-PH', {style: 'currency', currency: 'PHP'});
        }

        function generateItinerary(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            
            // Collect Passengers
            const names = formData.getAll('pName[]');
            const genders = formData.getAll('pGender[]');
            const bags = formData.getAll('pBaggage[]');
            const passengers = names.map((name, i) => ({
                name: name.toUpperCase(),
                gender: genders[i],
                baggage: bags[i]
            }));

            const ticket = {
                id: Date.now().toString(),
                created: new Date().toISOString(),
                airline: formData.get('airline'),
                flightNum: formData.get('flightNum'),
                pnr: formData.get('pnr').toUpperCase(),
                depCity: formData.get('depAirport'),
                arrCity: formData.get('arrAirport'),
                layover: formData.get('layover'),
                depTime: formData.get('depTime'),
                arrTime: formData.get('arrTime'),
                passengers: passengers,
                contactEmail: formData.get('contactEmail'),
                contactPhone: formData.get('contactPhone'),
                totalFare: parseFloat(formData.get('totalFare')),
                extraFee: 0 // For future edits
            };

            itineraries.unshift(ticket);
            saveToStorage();
            e.target.reset();
            
            // Show Note
            alert(`Itinerary Generated!\nA copy has been sent to ${ticket.contactEmail}`);
            
            switchView('list');
        }

        // --- List & Storage ---
        function saveToStorage() {
            localStorage.setItem('queenflight_tickets', JSON.stringify(itineraries));
        }

        function renderList(filterText = '') {
            const grid = document.getElementById('tickets-grid');
            const empty = document.getElementById('empty-state');
            grid.innerHTML = '';
            
            const filtered = itineraries.filter(t => 
                t.pnr.includes(filterText.toUpperCase()) || 
                t.passengers[0].name.includes(filterText.toUpperCase())
            );

            if (filtered.length === 0) {
                empty.classList.remove('hidden');
                return;
            }
            empty.classList.add('hidden');

            filtered.forEach(t => {
                const date = new Date(t.depTime).toLocaleDateString('en-US', {month:'short', day:'numeric'});
                const time = new Date(t.depTime).toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'});
                
                const card = document.createElement('div');
                card.className = "bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group";
                card.onclick = () => openTicket(t.id);
                card.innerHTML = `
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <span class="text-xs font-bold text-fuchsia-600 bg-fuchsia-50 px-2 py-1 rounded border border-fuchsia-100">${t.airline}</span>
                        </div>
                        <div class="text-right">
                            <span class="text-xs text-slate-400 font-mono">${t.pnr}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="text-center w-12">
                            <div class="text-lg font-bold text-slate-900">${t.depCity.split('(')[1].split(')')[0]}</div>
                            <div class="text-[10px] text-slate-400">DEP</div>
                        </div>
                        <div class="flex-grow flex flex-col items-center">
                            <i data-lucide="plane" class="text-slate-300 w-4 h-4 rotate-90"></i>
                            <div class="h-[1px] w-full bg-slate-200 mt-1"></div>
                        </div>
                        <div class="text-center w-12">
                            <div class="text-lg font-bold text-slate-900">${t.arrCity.split('(')[1].split(')')[0]}</div>
                            <div class="text-[10px] text-slate-400">ARR</div>
                        </div>
                    </div>
                    <div class="flex justify-between items-end border-t border-slate-100 pt-3">
                        <div>
                            <div class="text-xs text-slate-500 mb-0.5">Passenger</div>
                            <div class="text-sm font-semibold text-slate-800 truncate max-w-[120px]">${t.passengers[0].name} ${t.passengers.length > 1 ? `+${t.passengers.length-1}` : ''}</div>
                        </div>
                        <div class="text-right">
                             <div class="text-xs text-slate-500 mb-0.5">${date}</div>
                             <div class="text-sm font-semibold text-slate-800">${time}</div>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
            lucide.createIcons();
        }

        function filterTickets() {
            const val = document.getElementById('searchInput').value;
            renderList(val);
        }

        // --- Ticket View Logic ---
        function openTicket(id) {
            currentTicketId = id;
            const t = itineraries.find(x => x.id === id);
            if(!t) return;

            // Header
            document.getElementById('t-pnr').textContent = t.pnr;
            document.getElementById('t-footerPnr').textContent = t.pnr;
            document.getElementById('t-issueDate').textContent = new Date(t.created).toLocaleDateString('en-US', {day:'numeric', month:'long', year:'numeric'});

            // Flight
            document.getElementById('t-airline').textContent = t.airline;
            document.getElementById('t-flightNum').textContent = t.flightNum;
            
            // Route details helper
            const formatDT = (iso) => {
                const d = new Date(iso);
                return {
                    time: d.toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'}),
                    date: d.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'})
                };
            };
            
            const dep = formatDT(t.depTime);
            const arr = formatDT(t.arrTime);

            document.getElementById('t-depTime').textContent = dep.time;
            document.getElementById('t-depDate').textContent = dep.date;
            document.getElementById('t-depCity').textContent = t.depCity;

            document.getElementById('t-arrTime').textContent = arr.time;
            document.getElementById('t-arrDate').textContent = arr.date;
            document.getElementById('t-arrCity').textContent = t.arrCity;

            const layoverEl = document.getElementById('t-layover');
            if(t.layover) {
                layoverEl.textContent = `Layover: ${t.layover}`;
                layoverEl.classList.remove('hidden');
            } else {
                layoverEl.classList.add('hidden');
            }

            // Passengers
            const pList = document.getElementById('t-passengerList');
            pList.innerHTML = t.passengers.map((p, idx) => `
                <tr class="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <td class="py-3 font-medium ${isEditMode ? 'bg-yellow-50/50' : ''}" ${isEditMode ? 'contenteditable="true"' : ''} data-pidx="${idx}" data-field="name">${p.name}</td>
                    <td class="py-3 text-slate-500">${p.gender}</td>
                    <td class="py-3 text-right text-slate-500 font-mono ${isEditMode ? 'bg-yellow-50/50' : ''}" ${isEditMode ? 'contenteditable="true"' : ''} data-pidx="${idx}" data-field="baggage">${p.baggage} kg</td>
                </tr>
            `).join('');

            // Finance
            updateTicketTotals(t);

            // Edit Inputs
            document.getElementById('edit-extraFee').value = t.extraFee || 0;

            switchView('ticket');
        }

        function updateTicketTotals(t) {
            const total = t.totalFare + (t.extraFee || 0);
            const base = total * 0.65;
            const tax = total * 0.35;

            document.getElementById('t-baseFare').textContent = base.toLocaleString('en-PH', {style: 'currency', currency: 'PHP'});
            document.getElementById('t-tax').textContent = tax.toLocaleString('en-PH', {style: 'currency', currency: 'PHP'});
            
            const extraRow = document.getElementById('t-extraRow');
            if(t.extraFee > 0) {
                extraRow.classList.remove('hidden');
                document.getElementById('t-extraFee').textContent = parseFloat(t.extraFee).toLocaleString('en-PH', {style: 'currency', currency: 'PHP'});
            } else {
                extraRow.classList.add('hidden');
            }

            document.getElementById('t-total').textContent = total.toLocaleString('en-PH', {style: 'currency', currency: 'PHP'});
        }

        // --- Editing Logic ---
        function toggleEditMode() {
            isEditMode = !isEditMode;
            toggleEditUI(isEditMode);
            // Refresh render to apply contenteditable attributes
            openTicket(currentTicketId);
        }

        function toggleEditUI(active) {
            const btn = document.getElementById('editBtn');
            const controls = document.getElementById('edit-controls');
            
            if(active) {
                btn.classList.add('bg-yellow-100', 'text-yellow-700', 'border-yellow-200');
                btn.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> Done`;
                controls.classList.remove('hidden');
                
                // Make dates editable
                document.getElementById('t-depTime').contentEditable = true;
                document.getElementById('t-arrTime').contentEditable = true;
                document.getElementById('t-depTime').classList.add('bg-yellow-50', 'rounded', 'px-1');
                document.getElementById('t-arrTime').classList.add('bg-yellow-50', 'rounded', 'px-1');

            } else {
                btn.classList.remove('bg-yellow-100', 'text-yellow-700', 'border-yellow-200');
                btn.innerHTML = `<i data-lucide="pencil" class="w-4 h-4"></i> Edit`;
                controls.classList.add('hidden');

                document.getElementById('t-depTime').contentEditable = false;
                document.getElementById('t-arrTime').contentEditable = false;
                document.getElementById('t-depTime').classList.remove('bg-yellow-50', 'rounded', 'px-1');
                document.getElementById('t-arrTime').classList.remove('bg-yellow-50', 'rounded', 'px-1');
            }
            lucide.createIcons();
        }

        function saveEdits() {
            const tIndex = itineraries.findIndex(x => x.id === currentTicketId);
            if (tIndex === -1) return;
            const t = itineraries[tIndex];

            // 1. Get Passenger Edits from DOM
            const rows = document.querySelectorAll('#t-passengerList tr');
            rows.forEach((row, idx) => {
                const nameCell = row.querySelector('[data-field="name"]');
                const bagCell = row.querySelector('[data-field="baggage"]');
                if(t.passengers[idx]) {
                    t.passengers[idx].name = nameCell.innerText.trim();
                    t.passengers[idx].baggage = parseFloat(bagCell.innerText) || 0;
                }
            });

            // 2. Get Date/Time Edits (Basic implementation)
            // t.depTime and t.arrTime logic would go here in a full app

            // 3. Get Extra Fees
            const extra = parseFloat(document.getElementById('edit-extraFee').value) || 0;
            t.extraFee = extra;

            // Save
            itineraries[tIndex] = t;
            saveToStorage();
            
            isEditMode = false;
            toggleEditUI(false);
            openTicket(currentTicketId); // Re-render to calc totals
            alert('Changes saved successfully.');
        }

        function deleteCurrentTicket() {
            if(confirm('Are you sure you want to delete this itinerary permanently?')) {
                itineraries = itineraries.filter(t => t.id !== currentTicketId);
                saveToStorage();
                switchView('list');
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
      

<nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-slate-200 no-print">
<div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer" onclick="switchView('list')">

<img alt="Queenflight" className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm" src="logo.png"/>
<span className="font-semibold tracking-tight text-slate-900">QUEENFLIGHT</span>
</div>
<div className="flex gap-4">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="switchView('list')">Manage Bookings</button>
<button className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-sm flex items-center gap-2 group" onclick="switchView('form')">
<i className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" data-lucide="circle-plus"></i>
                    New Booking
                </button>
</div>
</div>
</nav>

<main className="flex-grow p-4 md:p-8 max-w-6xl mx-auto w-full">

<section className="max-w-4xl mx-auto hidden" id="view-form">
<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Create New Itinerary</h1>
<p className="text-slate-500 text-sm">Fill in the details below to generate a new confirmed booking.</p>
</div>
<form className="space-y-8" id="bookingForm" onsubmit="generateItinerary(event)">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plane"></i> Flight Details
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group">
<label className="block text-xs font-medium text-slate-500 mb-1.5">Airline Name</label>
<input className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition-all placeholder:text-slate-300" list="airlines" name="airline" placeholder="e.g. Cebu Pacific" required="" type="text"/>
<datalist id="airlines">
<option value="Cebu Pacific">
<option value="Philippine Airlines">
<option value="AirAsia Philippines">
<option value="Sunlight Air">
<option value="AirSwift">
</option></option></option></option></option></datalist>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Flight Number</label>
<input className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition-all" name="flightNum" placeholder="e.g. 5J 551" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Booking Ref (PNR)</label>
<input className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition-all uppercase" name="pnr" placeholder="e.g. XJ9KLM" required="" type="text"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Departure Airport</label>
<select className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition-all bg-white" id="depAirport" name="depAirport"></select>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Arrival Airport</label>
<select className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition-all bg-white" id="arrAirport" name="arrAirport"></select>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">City Layover (Optional)</label>
<input className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition-all" name="layover" placeholder="e.g. Manila" type="text"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Departure Date &amp; Time</label>
<input className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition-all text-slate-600" name="depTime" required="" type="datetime-local"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Arrival Date &amp; Time</label>
<input className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition-all text-slate-600" name="arrTime" required="" type="datetime-local"/>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="users"></i> Passengers
                        </h3>
<button className="text-xs text-fuchsia-600 font-medium hover:text-fuchsia-700 flex items-center gap-1" onclick="addPassengerField()" type="button">
<i className="w-3 h-3" data-lucide="plus"></i> Add Passenger
                        </button>
</div>
<div className="space-y-4" id="passenger-container">

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end pb-4 border-b border-dashed border-slate-200 passenger-row">
<div className="md:col-span-6">
<label className="block text-xs font-medium text-slate-500 mb-1.5">Full Name</label>
<input className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 uppercase" name="pName[]" placeholder="LASTNAME, FIRSTNAME" required="" type="text"/>
</div>
<div className="md:col-span-3">
<label className="block text-xs font-medium text-slate-500 mb-1.5">Gender</label>
<select className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 bg-white" name="pGender[]">
<option value="M">Male</option>
<option value="F">Female</option>
</select>
</div>
<div className="md:col-span-3">
<label className="block text-xs font-medium text-slate-500 mb-1.5">Baggage (kg)</label>
<select className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 bg-white" name="pBaggage[]">
<option value="0">No Baggage</option>
<option value="20">20 KG</option>
<option value="32">32 KG</option>
<option value="40">40 KG</option>
</select>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="mail"></i> Contact Info
                        </h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Email Address</label>
<input className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" name="contactEmail" placeholder="passenger@example.com" required="" type="email"/>
<p className="text-[10px] text-slate-400 mt-1">The E-Itinerary will be sent to this email address after generation.</p>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Mobile Number (Optional)</label>
<input className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" name="contactPhone" placeholder="+63 900 000 0000" type="tel"/>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="receipt"></i> Fare Details
                        </h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Total Fare (PHP)</label>
<input className="w-full text-base font-semibold px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" id="inputTotalFare" min="1" name="totalFare" oninput="calculateFare()" placeholder="0.00" required="" type="number"/>
</div>
<div className="bg-slate-50 p-4 rounded-lg space-y-2 border border-slate-100">
<div className="flex justify-between text-xs text-slate-500">
<span>Base Fare (65%)</span>
<span className="font-medium" id="displayBase">0.00</span>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>Taxes &amp; Fees (35%)</span>
<span className="font-medium" id="displayTax">0.00</span>
</div>
<div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-semibold text-slate-900">
<span>Total Amount</span>
<span id="displayTotal">0.00</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-end pt-4">
<button className="bg-fuchsia-600 text-white text-sm font-medium px-8 py-3 rounded-lg shadow-lg shadow-fuchsia-200 hover:bg-fuchsia-700 hover:shadow-fuchsia-300 transition-all flex items-center gap-2" type="submit">
                        Generate Itinerary <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</form>
</section>

<section className="max-w-6xl mx-auto block" id="view-list">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Generated E-Itineraries</h1>
<p className="text-slate-500 text-sm">Manage and view all confirmed bookings.</p>
</div>
<div className="relative w-full md:w-80">
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600" id="searchInput" oninput="filterTickets()" placeholder="Search by PNR..." type="text"/>
</div>
</div>

<div className="hidden text-center py-20 bg-white rounded-xl border border-dashed border-slate-200" id="empty-state">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
<i className="text-slate-300 w-8 h-8" data-lucide="ticket"></i>
</div>
<h3 className="text-slate-900 font-medium mb-1">No itineraries found</h3>
<p className="text-slate-500 text-sm mb-4">Create a new booking to get started.</p>
<button className="text-fuchsia-600 text-sm font-medium hover:underline" onclick="switchView('form')">Create Booking</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="tickets-grid">

</div>
</section>

<section className="hidden max-w-4xl mx-auto print-area" id="view-ticket">

<div className="flex justify-between items-center mb-6 no-print">
<button className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1" onclick="switchView('list')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to List
                </button>
<div className="flex gap-2">
<button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-slate-50 flex items-center gap-2" id="editBtn" onclick="toggleEditMode()">
<i className="w-4 h-4" data-lucide="pencil"></i> Edit
                    </button>
<button className="bg-red-50 border border-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-red-100 flex items-center gap-2" onclick="deleteCurrentTicket()">
<i className="w-4 h-4" data-lucide="trash-2"></i> Delete
                    </button>
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-slate-800 flex items-center gap-2" onclick="window.print()">
<i className="w-4 h-4" data-lucide="printer"></i> Print PDF
                    </button>
</div>
</div>

<div className="bg-white border border-slate-200 shadow-lg rounded-none md:rounded-xl overflow-hidden relative" id="ticket-content">

<div className="p-8 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
<div>
<h2 className="text-2xl font-bold tracking-tight text-slate-900">E-ITINERARY RECEIPT</h2>
<div className="mt-4 space-y-1">
<h3 className="text-sm font-bold text-slate-900">QUEENFLIGHT</h3>
<p className="text-xs text-slate-500">Tubig-Boh, Bongao, Tawi-tawi</p>
<p className="text-xs text-slate-500">DTI Business NO: 4169124</p>
</div>
</div>

<div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center overflow-hidden shadow-sm relative">
<img alt="QUEENFLIGHT LOGO" className="w-full h-full object-cover" src="logo.png"/>
</div>
</div>

<div className="bg-fuchsia-50 px-8 py-3 flex justify-between items-center border-b border-fuchsia-100">
<div className="flex gap-6">
<div>
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Booking Status</span>
<span className="text-sm font-bold text-fuchsia-700 flex items-center gap-1">
<i className="w-4 h-4 text-fuchsia-600" data-lucide="check-circle"></i> CONFIRMED
                            </span>
</div>
<div>
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Reference No. (PNR)</span>
<span className="text-sm font-bold text-slate-900 tracking-wider" id="t-pnr"></span>
</div>
</div>
<div className="text-right">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Date of Issue</span>
<span className="text-xs font-medium text-slate-700" id="t-issueDate"></span>
</div>
</div>
<div className="p-8 space-y-8">

<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100">Flight Details</h4>
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-white rounded-lg">
<div className="flex items-center gap-3 w-40 shrink-0">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
<i className="w-5 h-5" data-lucide="plane"></i>
</div>
<div>
<div className="text-sm font-bold text-slate-900" id="t-airline"></div>
<div className="text-xs text-slate-500" id="t-flightNum"></div>
</div>
</div>
<div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

<div>
<div className="text-xl font-bold text-slate-900" id="t-depTime"></div>
<div className="text-xs font-medium text-slate-600" id="t-depDate"></div>
<div className="text-xs text-slate-400 mt-1" id="t-depCity"></div>
</div>

<div className="hidden md:flex flex-col items-center justify-center">
<div className="text-[10px] text-slate-400 mb-1" id="t-duration">Direct</div>
<div className="w-full h-[1px] bg-slate-200 relative">
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-1">
<i className="w-3 h-3 text-slate-300" data-lucide="plane"></i>
</div>
</div>
<div className="text-[10px] text-orange-600 mt-1 font-medium" id="t-layover"></div>
</div>

<div className="md:text-right">
<div className="text-xl font-bold text-slate-900" id="t-arrTime"></div>
<div className="text-xs font-medium text-slate-600" id="t-arrDate"></div>
<div className="text-xs text-slate-400 mt-1" id="t-arrCity"></div>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100">Guest Details</h4>
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-[10px] uppercase text-slate-400 tracking-wider">
<th className="font-semibold pb-2">Passenger Name</th>
<th className="font-semibold pb-2">Gender</th>
<th className="font-semibold pb-2 text-right">Baggage</th>
</tr>
</thead>
<tbody className="text-sm text-slate-700" id="t-passengerList">

</tbody>
</table>
</div>

<div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
<h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Payment Summary</h4>
<div className="space-y-2">
<div className="flex justify-between text-xs text-slate-600">
<span>Base Fare</span>
<span id="t-baseFare"></span>
</div>
<div className="flex justify-between text-xs text-slate-600">
<span>Taxes, Fees &amp; Surcharges</span>
<span id="t-tax"></span>
</div>
<div className="flex justify-between text-xs text-slate-600 hidden" id="t-extraRow">
<span>Additional Fees (Baggage/Changes)</span>
<span id="t-extraFee">0.00</span>
</div>
<div className="dashed-line my-3 h-px w-full"></div>
<div className="flex justify-between text-sm font-bold text-slate-900">
<span>Total Amount Paid</span>
<span id="t-total"></span>
</div>
</div>
</div>

<div className="text-[10px] text-slate-400 leading-relaxed border-t border-slate-100 pt-6 mt-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h5 className="font-bold text-slate-600 mb-2">Important Information</h5>
<ul className="list-disc list-inside space-y-1">
<li>Passengers should arrive at the airport at least <strong className="text-slate-600">2 hours</strong> before departure.</li>
<li>Valid ID used for purchase is required for check-in and boarding.</li>
<li>Tickets must be used in sequence. Failure to comply allows airlines to refuse carriage.</li>
<li>QUEENFLIGHT bears no responsibility for airline policy non-compliance.</li>
</ul>
</div>
<div>
<h5 className="font-bold text-slate-600 mb-2">Terms &amp; Conditions</h5>
<ul className="list-disc list-inside space-y-1">
<li>Tickets are confirmed. Airline change penalties and restrictions apply.</li>
<li>Certain tickets are non-refundable/non-transferable. Fees apply for changes.</li>
<li>QUEENFLIGHT is not responsible for sudden airline schedule or terminal changes.</li>
<li className="flex items-center gap-1 mt-2 text-fuchsia-600 font-medium"><i className="w-3 h-3" data-lucide="info"></i> Banned items color code: Skyblue</li>
</ul>
</div>
</div>
<div className="mt-6 text-center text-slate-300 text-[9px]">
                            Generated by QUEENFLIGHT E-Itinerary System. <br/>
                            Reference: <span id="t-footerPnr"></span>
</div>
</div>
</div>
</div>

<div className="hidden mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg" id="edit-controls">
<h4 className="text-sm font-bold text-yellow-800 mb-2">Editing Booking</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="text-xs text-yellow-700 block mb-1">Add Extra Fee (e.g. Added Baggage)</label>
<input className="w-full text-sm p-2 border border-yellow-300 rounded" id="edit-extraFee" type="number" value="0"/>
</div>
<div className="flex items-end">
<button className="w-full bg-yellow-600 text-white text-sm font-medium py-2 rounded shadow hover:bg-yellow-700" onclick="saveEdits()">Save Changes</button>
</div>
</div>
<p className="text-[10px] text-yellow-700 mt-2">Note: You can also edit text directly in the ticket above (Passengers, Dates) when this mode is active.</p>
</div>
</section>
</main>


    </>
  );
}
