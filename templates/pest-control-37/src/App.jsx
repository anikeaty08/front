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
50: '#f0fdf4',
100: '#dcfce7',
200: '#bbf7d0',
500: '#22c55e',
600: '#16a34a',
900: '#14532d',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Mock Database ---
        const DB_KEY = 'cpc_leads_db_v2';
        
        const initialData = [
            { id: 16981234, name: "Rahul Sharma", phone: "+91 98765 12345", service: "Termite Control", status: "pending", date: "2023-10-24", amount: 5000 },
            { id: 16981235, name: "Priya Patel", phone: "+91 99887 76655", service: "Sanitization", status: "completed", date: "2023-10-23", amount: 2500 },
            { id: 16981236, name: "Amit Kumar", phone: "+91 88776 65544", service: "General Pest", status: "processing", date: "2023-10-22", amount: 1800 },
            { id: 16981237, name: "Suresh Singh", phone: "+91 77665 54433", service: "Bed Bugs", status: "pending", date: "2023-10-21", amount: 3000 },
            { id: 16981238, name: "Anita Roy", phone: "+91 66554 43322", service: "Mosquito Control", status: "completed", date: "2023-10-20", amount: 4500 },
            { id: 16981239, name: "Vikram Malhotra", phone: "+91 91234 56789", service: "Rodent Control", status: "processing", date: "2023-10-19", amount: 2200 }
        ];

        class MockAPI {
            static init() {
                if (!localStorage.getItem(DB_KEY)) {
                    localStorage.setItem(DB_KEY, JSON.stringify(initialData));
                }
            }

            static getLeads() {
                return JSON.parse(localStorage.getItem(DB_KEY) || '[]');
            }

            static addLead(leadData) {
                const currentData = this.getLeads();
                let estAmount = 2000;
                if(leadData.service.includes('Termite')) estAmount = 5000;
                if(leadData.service.includes('Mosquito')) estAmount = 3500;
                
                const newLead = {
                    id: Date.now(),
                    ...leadData,
                    status: 'pending',
                    date: new Date().toISOString().split('T')[0],
                    amount: estAmount
                };
                
                currentData.unshift(newLead);
                localStorage.setItem(DB_KEY, JSON.stringify(currentData));
                return newLead;
            }

            static updateStatus(id, newStatus) {
                const currentData = this.getLeads();
                const index = currentData.findIndex(l => l.id == id);
                if (index !== -1) {
                    currentData[index].status = newStatus;
                    localStorage.setItem(DB_KEY, JSON.stringify(currentData));
                    return true;
                }
                return false;
            }

            static deleteLead(id) {
                const currentData = this.getLeads();
                const newData = currentData.filter(l => l.id != id);
                localStorage.setItem(DB_KEY, JSON.stringify(newData));
                return true;
            }

            static addRandomLead() {
                const names = ["Neha Gupta", "Karan Johar", "Rohan Das", "Meera Reddy", "Arjun Singh"];
                const services = ["Termite Control", "Sanitization", "Rodent Control", "Bed Bugs"];
                const name = names[Math.floor(Math.random() * names.length)];
                
                this.addLead({
                    name: name,
                    phone: "+91 " + Math.floor(1000000000 + Math.random() * 9000000000),
                    service: services[Math.floor(Math.random() * services.length)]
                });
                refreshAdminData();
                showToast(`New simulated lead added: ${name}`);
            }
        }

        MockAPI.init();

        // --- Application Routing ---
        let currentAdminTab = 'overview';
        let searchQuery = '';
        let statusFilter = 'all';

        function switchAppView(viewName) {
            const frontend = document.getElementById('frontend-view');
            const backend = document.getElementById('backend-view');
            
            if (viewName === 'backend') {
                frontend.classList.add('hidden');
                backend.classList.remove('hidden');
                refreshAdminData();
            } else {
                backend.classList.add('hidden');
                frontend.classList.remove('hidden');
            }
            window.scrollTo(0,0);
        }

        function navigateAdmin(tabId) {
            currentAdminTab = tabId;
            
            // Hide all tabs
            document.querySelectorAll('.admin-tab').forEach(el => el.classList.add('hidden'));
            document.getElementById('tab-' + tabId).classList.remove('hidden');
            
            // Update sidebar styles
            document.querySelectorAll('.admin-nav-btn').forEach(btn => {
                btn.className = "w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors admin-nav-btn border border-transparent";
            });
            const activeBtn = document.getElementById('nav-' + tabId);
            if(activeBtn) {
                activeBtn.className = "w-full flex items-center gap-3 px-3 py-2 bg-slate-50 text-slate-900 rounded-lg text-sm font-medium transition-colors border border-slate-200 shadow-sm admin-nav-btn";
            }

            // Update Header
            const titles = { 'overview': 'Dashboard', 'leads': 'Leads Database', 'schedule': 'Schedule' };
            document.getElementById('header-title').innerText = titles[tabId];

            refreshAdminData();
        }

        // --- Data Rendering ---
        function refreshAdminData() {
            const leads = MockAPI.getLeads();
            
            if(currentAdminTab === 'overview') {
                renderOverview(leads);
            } else if (currentAdminTab === 'leads') {
                renderLeadsDB(leads);
            } else if (currentAdminTab === 'schedule') {
                renderSchedule(leads);
            }
        }

        function formatCurrency(amount) {
            return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
        }

        function getStatusStyle(status) {
            const styles = {
                pending: 'bg-amber-50 text-amber-700 border-amber-200',
                processing: 'bg-blue-50 text-blue-700 border-blue-200',
                completed: 'bg-green-50 text-green-700 border-green-200'
            };
            return styles[status] || 'bg-slate-50 text-slate-700 border-slate-200';
        }

        function renderOverview(leads) {
            const total = leads.length;
            const active = leads.filter(l => l.status === 'processing').length;
            const pending = leads.filter(l => l.status === 'pending').length;
            const revenue = leads.filter(l => l.status === 'completed').reduce((sum, lead) => sum + (lead.amount || 0), 0);
            
            document.getElementById('stat-total-leads').innerText = total;
            document.getElementById('stat-active-services').innerText = active;
            document.getElementById('stat-pending-count').innerText = `${pending} pending`;
            document.getElementById('stat-revenue').innerText = formatCurrency(revenue);

            const tbody = document.getElementById('overview-table-body');
            tbody.innerHTML = '';
            
            leads.slice(0, 5).forEach(lead => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-50/50 transition-colors';
                tr.innerHTML = `
                    <td class="px-6 py-3.5 font-medium text-slate-900">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-medium uppercase border border-slate-200">
                                ${lead.name.charAt(0)}
                            </div>
                            <div class="flex flex-col">
                                <span class="text-sm tracking-tight">${lead.name}</span>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-3.5 text-sm">${lead.service}</td>
                    <td class="px-6 py-3.5">
                        <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border ${getStatusStyle(lead.status)} capitalize">
                            ${lead.status}
                        </span>
                    </td>
                    <td class="px-6 py-3.5 text-right text-slate-400 font-light text-sm">${lead.date}</td>
                `;
                tbody.appendChild(tr);
            });
        }

        function renderLeadsDB(leads) {
            let filtered = leads;
            
            if (statusFilter !== 'all') {
                filtered = filtered.filter(l => l.status === statusFilter);
            }
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                filtered = filtered.filter(l => l.name.toLowerCase().includes(q) || l.phone.includes(q));
            }

            document.getElementById('table-showing-text').innerText = `Showing ${filtered.length} of ${leads.length} leads`;

            const tbody = document.getElementById('leads-table-body');
            tbody.innerHTML = '';

            if (filtered.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="px-6 py-12 text-center text-slate-400 text-sm font-light">No records found matching criteria.</td></tr>`;
                return;
            }

            filtered.forEach(lead => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-50/80 transition-colors group';
                tr.innerHTML = `
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-medium uppercase border border-slate-200 shrink-0">
                                ${lead.name.charAt(0)}
                            </div>
                            <div>
                                <div class="font-medium text-slate-900 text-sm">${lead.name}</div>
                                <div class="text-xs text-slate-400 font-light mt-0.5">${lead.phone}</div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-sm">${lead.service}</td>
                    <td class="px-6 py-4">
                        <button onclick="cycleStatus(${lead.id}, '${lead.status}')" class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${getStatusStyle(lead.status)} capitalize hover:opacity-80 transition shadow-sm">
                            ${lead.status} <iconify-icon icon="solar:refresh-linear" class="ml-1 opacity-50"></iconify-icon>
                        </button>
                    </td>
                    <td class="px-6 py-4 text-sm font-medium text-slate-700">${formatCurrency(lead.amount)}</td>
                    <td class="px-6 py-4 text-slate-400 font-light text-sm">${lead.date}</td>
                    <td class="px-6 py-4 text-right">
                        <button onclick="deleteLead(${lead.id})" class="text-slate-400 hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-red-50 inline-flex items-center justify-center">
                            <iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
                        </button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        function renderSchedule(leads) {
            const activeLeads = leads.filter(l => l.status === 'pending' || l.status === 'processing');
            const grid = document.getElementById('schedule-grid');
            grid.innerHTML = '';

            if (activeLeads.length === 0) {
                grid.innerHTML = `<div class="col-span-full py-12 text-center text-slate-400 text-sm font-light">No upcoming scheduled services.</div>`;
                return;
            }

            activeLeads.sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(lead => {
                const card = document.createElement('div');
                card.className = 'bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-brand-200 transition-colors flex flex-col gap-4 relative overflow-hidden';
                
                const statusDot = lead.status === 'processing' ? 'bg-blue-500' : 'bg-amber-400';
                
                card.innerHTML = `
                    <div class="absolute top-0 left-0 w-1 h-full ${statusDot}"></div>
                    <div class="flex justify-between items-start">
                        <div>
                            <span class="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1 block">${lead.date}</span>
                            <h4 class="font-medium text-slate-900 text-lg tracking-tight">${lead.name}</h4>
                        </div>
                        <span class="px-2 py-0.5 rounded-md text-[10px] font-medium uppercase tracking-wider border ${getStatusStyle(lead.status)}">
                            ${lead.status}
                        </span>
                    </div>
                    
                    <div class="space-y-2 text-sm text-slate-600 font-light flex-1">
                        <div class="flex items-center gap-2"><iconify-icon icon="solar:bug-linear" class="text-slate-400"></iconify-icon> ${lead.service}</div>
                        <div class="flex items-center gap-2"><iconify-icon icon="solar:phone-linear" class="text-slate-400"></iconify-icon> ${lead.phone}</div>
                    </div>
                    
                    <div class="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <span class="text-sm font-medium text-slate-900">${formatCurrency(lead.amount)}</span>
                        <button onclick="cycleStatus(${lead.id}, '${lead.status}')" class="text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-md transition-colors shadow-sm">
                            Update Status
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // --- Interaction Logic ---
        function cycleStatus(id, currentStatus) {
            const flow = { 'pending': 'processing', 'processing': 'completed', 'completed': 'pending' };
            MockAPI.updateStatus(id, flow[currentStatus]);
            refreshAdminData();
            showToast('Status updated successfully');
        }

        function deleteLead(id) {
            if(confirm('Delete this record permanently?')) {
                MockAPI.deleteLead(id);
                refreshAdminData();
                showToast('Record deleted');
            }
        }

        function deleteDatabase() {
            if(confirm('Warning: This will permanently wipe all system data. Continue?')) {
                localStorage.removeItem(DB_KEY);
                localStorage.setItem(DB_KEY, '[]'); 
                refreshAdminData();
                showToast('Database wiped successfully');
            }
        }

        // Setup Event Listeners
        document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('lead-search');
            const filterSelect = document.getElementById('lead-filter');
            
            if(searchInput) {
                searchInput.addEventListener('input', (e) => {
                    searchQuery = e.target.value;
                    if(currentAdminTab === 'leads') refreshAdminData();
                });
            }
            if(filterSelect) {
                filterSelect.addEventListener('change', (e) => {
                    statusFilter = e.target.value;
                    if(currentAdminTab === 'leads') refreshAdminData();
                });
            }
        });

        // --- Frontend Modal Logic ---
        function openModal() {
            const modal = document.getElementById('contact-modal');
            modal.classList.remove('hidden');
            modal.classList.add('fade-in');
        }

        function closeModal() {
            const modal = document.getElementById('contact-modal');
            modal.classList.add('hidden');
            document.getElementById('lead-form').reset();
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            
            const leadData = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                service: formData.get('service')
            };
            
            MockAPI.addLead(leadData);
            
            const businessPhone = "919988222605";
            const message = `Hello, I need a quote.\n\n*Name:* ${leadData.name}\n*Phone:* ${leadData.phone}\n*Service:* ${leadData.service}\n\nPlease contact me back.`;
            const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            closeModal();
            showToast("Quote requested successfully!");
            if(!document.getElementById('backend-view').classList.contains('hidden')) {
                refreshAdminData();
            }
        }

        function showToast(message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-sm font-medium mb-3 fade-in transform transition-all duration-300';
            toast.innerHTML = `
                <iconify-icon icon="solar:check-circle-linear" class="text-green-400" width="20"></iconify-icon>
                <span>${message}</span>
            `;
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(10px)';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
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
      
<div id="app-container">

<div className="fade-in" id="frontend-view">
<nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/60 transition-all duration-300">
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900 hidden sm:block">CPCS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#certifications">Certifications</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex flex-col items-end text-xs font-medium text-slate-600">
<a className="hover:text-brand-600 transition-colors flex items-center gap-1" href="tel:+919988222605">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
                                +91 99882 22605
                            </a>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2.5 sm:px-5 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-slate-900/10" onclick="openModal()">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
<span className="hidden sm:inline">Get Quote</span>
<span className="sm:hidden">Quote</span>
</button>
</div>
</div>
</nav>
<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 z-10">
<div className="absolute inset-0 -z-10 flex justify-center items-center">
<div className="absolute top-20 w-3/4 max-w-3xl h-96 bg-green-400/20 rounded-full blur-[100px] pointer-events-none"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-slate-500 tracking-wide uppercase">Creative Pest Control Services</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                        Advanced Hygiene &amp; <br className="hidden md:block"/>
<span className="text-slate-400 font-light">Pest Management Solutions.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        ISO certified professional pest control services. Protecting homes and businesses with eco-friendly, integrated pest solutions across India.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 hover:scale-105 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10 text-sm" onclick="openModal()">
                            Call Now
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm" href="#services">
                            View Services
                        </a>
</div>
<div className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-24 border-t border-slate-200 pt-12 max-w-4xl mx-auto w-full">
<div className="text-center shrink-0">
<div className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight">GST</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Registered</div>
</div>
<div className="text-center shrink-0">
<div className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight">MSME</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Registered</div>
</div>
<div className="text-center shrink-0">
<div className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight">IPSA</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Member</div>
</div>
<div className="text-center shrink-0">
<div className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight">24/7</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Support</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white relative z-20" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Our Services</h2>
<p className="font-light text-slate-500 text-lg">A comprehensive range of pest management solutions designed for residential, commercial, and industrial environments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 p-6 transition-all duration-300 group cursor-pointer" onclick="openModal()">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 group-hover:text-brand-600 transition-all shadow-sm">
<iconify-icon icon="solar:bug-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-slate-900 tracking-tight mb-2">Termite Treatment</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Pre-construction and post-construction soil treatments to protect structural integrity.</p>
</div>

<div className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 p-6 transition-all duration-300 group cursor-pointer" onclick="openModal()">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 group-hover:text-brand-600 transition-all shadow-sm">
<iconify-icon icon="solar:virus-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-slate-900 tracking-tight mb-2">Sanitization Services</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Professional disinfection using certified chemicals to neutralize viruses and bacteria.</p>
</div>

<div className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 p-6 transition-all duration-300 group cursor-pointer" onclick="openModal()">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 group-hover:text-brand-600 transition-all shadow-sm">
<iconify-icon icon="solar:moon-fog-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-slate-900 tracking-tight mb-2">Mosquito Management</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Effective fogging and larvicidal treatments to control mosquito breeding.</p>
</div>

<div className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 p-6 transition-all duration-300 group cursor-pointer" onclick="openModal()">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 group-hover:text-brand-600 transition-all shadow-sm">
<iconify-icon icon="solar:ghost-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-slate-900 tracking-tight mb-2">Bed Bugs Service</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Targeted treatment of mattresses and furniture to eliminate bed bug infestations.</p>
</div>

<div className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 p-6 transition-all duration-300 group cursor-pointer" onclick="openModal()">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 group-hover:text-brand-600 transition-all shadow-sm">
<iconify-icon icon="solar:danger-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-slate-900 tracking-tight mb-2">Rodent Control</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Integrated trapping and baiting systems for commercial and residential spaces.</p>
</div>

<div className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 p-6 transition-all duration-300 group cursor-pointer" onclick="openModal()">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 group-hover:text-brand-600 transition-all shadow-sm">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-slate-900 tracking-tight mb-2">General Pest Control</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Comprehensive management of ants, spiders, lizards, and general household pests.</p>
</div>
</div>
</div>
</section>
<section className="py-20 bg-slate-50 border-y border-slate-200" id="certifications">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-12">Accreditations &amp; Licenses</h2>
<div className="flex flex-wrap justify-center gap-6">
<div className="flex items-center gap-4 px-8 py-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
<iconify-icon className="text-green-600" icon="solar:diploma-linear" width="28"></iconify-icon>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">GST Certificate</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Government Registration</div>
</div>
</div>
<div className="flex items-center gap-4 px-8 py-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:verified-check-linear" width="28"></iconify-icon>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">MSME Registration</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Small Business Certified</div>
</div>
</div>
<div className="flex items-center gap-4 px-8 py-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
<iconify-icon className="text-indigo-600" icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">IPSA Membership</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Association Member</div>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-slate-950 text-slate-400 py-16" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-6 text-white">
<div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="font-medium tracking-tighter text-lg">CPCS</span>
</div>
<p className="text-sm font-light leading-relaxed mb-6">
<strong className="text-slate-300 font-medium">Creative Pest Control Services</strong><br/>
                                Providing world-class pest management services with a focus on safety, hygiene, and customer satisfaction.
                            </p>
</div>
<div className="col-span-1 lg:col-span-2">
<h4 className="text-white font-medium mb-6 tracking-tight">Contact Details</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex gap-3">
<iconify-icon className="mt-1 text-slate-500 shrink-0" icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-sm font-light">B-31-1136/213/40, New Sunder Nagar, Bhamian Kalan, Ludhiana</span>
</div>
<div className="space-y-4">
<a className="flex gap-3 items-center hover:text-white transition group" href="tel:+919988222605">
<iconify-icon className="text-slate-500 group-hover:text-brand-500 transition-colors" icon="solar:phone-linear" width="20"></iconify-icon>
<span className="text-sm font-light">+91 99882 22605</span>
</a>
</div>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6 tracking-tight">System</h4>
<ul className="space-y-3 text-sm font-light">
<li><button className="hover:text-white transition flex items-center gap-2" onclick="switchAppView('backend')">Admin Dashboard <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-600">
<p>© 2024 Creative Pest Control Services. All rights reserved.</p>
</div>
</div>
</footer>
</div>

<div className="hidden min-h-screen bg-slate-50 flex" id="backend-view">

<aside className="w-64 bg-white border-r border-slate-200 fixed h-full z-10 hidden md:flex flex-col">
<div className="h-16 flex items-center px-6 border-b border-slate-100 shrink-0">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="text-slate-900 font-medium tracking-tight text-sm">CPC<span className="font-light text-slate-400">Admin</span></span>
</div>
</div>
<div className="p-4 space-y-1 flex-1">
<button className="w-full flex items-center gap-3 px-3 py-2 bg-slate-50 text-slate-900 rounded-lg text-sm font-medium transition-colors border border-slate-200 admin-nav-btn" id="nav-overview" onclick="navigateAdmin('overview')">
<iconify-icon icon="solar:widget-2-linear" width="20"></iconify-icon>
                        Overview
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors admin-nav-btn border border-transparent" id="nav-leads" onclick="navigateAdmin('leads')">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                        Leads Database
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors admin-nav-btn border border-transparent" id="nav-schedule" onclick="navigateAdmin('schedule')">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
                        Schedule
                    </button>
</div>
<div className="p-4 border-t border-slate-100 space-y-1 shrink-0">
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors" onclick="deleteDatabase()">
<iconify-icon icon="solar:trash-bin-trash-linear" width="20"></iconify-icon>
                        Wipe Data
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors" onclick="switchAppView('frontend')">
<iconify-icon icon="solar:logout-2-linear" width="20"></iconify-icon>
                        Exit Admin
                    </button>
</div>
</aside>

<main className="flex-1 md:ml-64 flex flex-col min-h-screen relative">
<header className="h-16 bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-20 px-8 flex items-center justify-between shrink-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500" onclick="alert('Mobile menu toggle')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h2 className="font-medium text-slate-800 tracking-tight" id="header-title">Dashboard</h2>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-xs font-medium bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors items-center gap-2 shadow-sm" onclick="MockAPI.addRandomLead()">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Simulate Lead
                        </button>
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200 cursor-pointer">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-medium shadow-sm">A</div>
</div>
</header>
<div className="p-6 md:p-8 max-w-7xl mx-auto w-full flex-1">

<div className="admin-tab space-y-8 fade-in" id="tab-overview">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between mb-4">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Total Leads</p>
<h3 className="text-3xl font-semibold text-slate-900 mt-2 tracking-tight" id="stat-total-leads">0</h3>
</div>
<div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-green-600 font-medium bg-green-50 w-fit px-2 py-1 rounded-md">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span>All time</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between mb-4">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Active Jobs</p>
<h3 className="text-3xl font-semibold text-slate-900 mt-2 tracking-tight" id="stat-active-services">0</h3>
</div>
<div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-600">
<iconify-icon icon="solar:clipboard-check-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-amber-600 font-medium bg-amber-50 w-fit px-2 py-1 rounded-md">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span id="stat-pending-count">0 pending</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between mb-4">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Est. Value</p>
<h3 className="text-3xl font-semibold text-slate-900 mt-2 tracking-tight" id="stat-revenue">₹0</h3>
</div>
<div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-600">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-blue-600 font-medium bg-blue-50 w-fit px-2 py-1 rounded-md">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
<span>From completed</span>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
<h3 className="font-medium text-slate-900 tracking-tight">Recent Enquiries</h3>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors" onclick="navigateAdmin('leads')">
                                    View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="text-xs font-medium text-slate-500 uppercase tracking-wide border-b border-slate-100">
<th className="px-6 py-4">Customer</th>
<th className="px-6 py-4">Service Type</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4 text-right">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm text-slate-600" id="overview-table-body">

</tbody>
</table>
</div>
</div>
</div>

<div className="admin-tab hidden space-y-6 fade-in flex flex-col h-[calc(100vh-8rem)]" id="tab-leads">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
<div className="relative w-full sm:w-96">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-shadow placeholder:text-slate-400 shadow-sm" id="lead-search" placeholder="Search name or phone..." type="text"/>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<select className="w-full sm:w-auto px-4 py-2 text-sm text-slate-700 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:border-slate-300" id="lead-filter">
<option value="all">All Status</option>
<option value="pending">Pending</option>
<option value="processing">Processing</option>
<option value="completed">Completed</option>
</select>
<button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors flex items-center gap-2 shrink-0">
<iconify-icon icon="solar:export-linear"></iconify-icon> <span className="hidden sm:inline">Export</span>
</button>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col flex-1 overflow-hidden">
<div className="overflow-x-auto flex-1">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead className="bg-slate-50/80 sticky top-0 z-10 backdrop-blur">
<tr className="text-xs font-medium text-slate-500 uppercase tracking-wide border-b border-slate-200">
<th className="px-6 py-4">Customer</th>
<th className="px-6 py-4">Service Type</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Amount</th>
<th className="px-6 py-4">Date</th>
<th className="px-6 py-4 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm text-slate-600 bg-white" id="leads-table-body">

</tbody>
</table>
</div>
<div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50/50 shrink-0">
<span id="table-showing-text">Showing entries</span>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 transition-colors shadow-sm" disabled="">Previous</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-sm">Next</button>
</div>
</div>
</div>
</div>

<div className="admin-tab hidden space-y-6 fade-in" id="tab-schedule">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Active Appointments</h3>
<div className="flex gap-2">
<button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 shadow-sm hover:bg-slate-50 transition-colors"><iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon></button>
<button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 shadow-sm hover:bg-slate-50 transition-colors"><iconify-icon icon="solar:list-linear" width="20"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="schedule-grid">

</div>
</div>
</div>
</main>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="contact-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform transition-all scale-100 opacity-100 border border-slate-100">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 hover:bg-slate-100 p-1.5 rounded-full" onclick="closeModal()">
<iconify-icon icon="solar:close-linear" width="20"></iconify-icon>
</button>
<div className="mb-8">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Request a Quote</h3>
<p className="text-sm text-slate-500 mt-1 font-light">Enter details to connect instantly via WhatsApp.</p>
</div>
<form className="space-y-5" id="lead-form" onsubmit="handleFormSubmit(event)">
<div>
<label className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 outline-none transition-all text-sm placeholder:text-slate-400 bg-slate-50/50 focus:bg-white" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 outline-none transition-all text-sm placeholder:text-slate-400 bg-slate-50/50 focus:bg-white" name="phone" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">Service Required</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white text-slate-700" name="service">
<option value="Termite Control">Termite Control</option>
<option value="Sanitization">Sanitization</option>
<option value="Mosquito Control">Mosquito Control</option>
<option value="Bed Bugs">Bed Bugs</option>
<option value="Rodent Control">Rodent Control</option>
<option value="General Pest">General Pest Control</option>
</select>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 text-sm" type="submit">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
<span>Connect on WhatsApp</span>
</button>
</div>
</form>
</div>
</div>
<div id="toast-container"></div>


    </>
  );
}
