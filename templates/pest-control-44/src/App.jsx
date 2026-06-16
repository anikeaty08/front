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
brand: {
50: '#f0fdf4',
100: '#dcfce7',
500: '#22c55e',
600: '#16a34a',
900: '#14532d',
}
}
}
}
}



        // --- Mock Database (LocalStorage Persistence) ---
        const DB_KEY = 'cpc_leads_db_v1';
        
        const initialData = [
            { id: 16981234, name: "Rahul Sharma", phone: "+91 98765 12345", service: "Termite Control", status: "pending", date: "2023-10-24", amount: 5000 },
            { id: 16981235, name: "Priya Patel", phone: "+91 99887 76655", service: "Sanitization", status: "completed", date: "2023-10-23", amount: 2500 },
            { id: 16981236, name: "Amit Kumar", phone: "+91 88776 65544", service: "Cockroach Control", status: "processing", date: "2023-10-22", amount: 1800 },
            { id: 16981237, name: "Suresh Singh", phone: "+91 77665 54433", service: "Bed Bugs", status: "pending", date: "2023-10-21", amount: 3000 },
            { id: 16981238, name: "Anita Roy", phone: "+91 66554 43322", service: "Mosquito Control", status: "completed", date: "2023-10-20", amount: 4500 }
        ];

        // --- Mock API Class ---
        class MockAPI {
            static init() {
                if (!localStorage.getItem(DB_KEY)) {
                    localStorage.setItem(DB_KEY, JSON.stringify(initialData));
                }
            }

            static async getLeads() {
                // Simulate network delay
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const data = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
                        resolve(data);
                    }, 300);
                });
            }

            static async addLead(leadData) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const currentData = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
                        
                        // Estimate cost based on service type (Mock logic)
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
                        resolve(newLead);
                    }, 500);
                });
            }

            static async updateStatus(id, newStatus) {
                const currentData = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
                const index = currentData.findIndex(l => l.id == id);
                if (index !== -1) {
                    currentData[index].status = newStatus;
                    localStorage.setItem(DB_KEY, JSON.stringify(currentData));
                    return true;
                }
                return false;
            }

            static async deleteLead(id) {
                const currentData = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
                const newData = currentData.filter(l => l.id != id);
                localStorage.setItem(DB_KEY, JSON.stringify(newData));
                return true;
            }

            static async addRandomLead() {
                const names = ["Vikram Malhotra", "Sneha Gupta", "Rajesh Koothrappali", "Meera Reddy"];
                const services = ["Termite Control", "Sanitization", "Cockroach Control"];
                const randomName = names[Math.floor(Math.random() * names.length)];
                const randomService = services[Math.floor(Math.random() * services.length)];
                
                await this.addLead({
                    name: randomName,
                    phone: "+91 90000 00000",
                    service: randomService
                });
                renderDashboard();
                showToast(`New lead simulated: ${randomName}`);
            }
        }

        // Initialize DB
        MockAPI.init();

        // --- Application Logic ---
        
        let currentFilter = 'all';

        function switchView(viewName) {
            const frontend = document.getElementById('frontend-view');
            const backend = document.getElementById('backend-view');
            
            if (viewName === 'backend') {
                frontend.classList.add('hidden');
                backend.classList.remove('hidden');
                renderDashboard();
            } else {
                backend.classList.add('hidden');
                frontend.classList.remove('hidden');
            }
            window.scrollTo(0,0);
        }

        // --- Dashboard Rendering ---
        async function renderDashboard() {
            const leads = await MockAPI.getLeads();
            
            // Calculate Stats
            const total = leads.length;
            const active = leads.filter(l => l.status === 'processing').length;
            const pending = leads.filter(l => l.status === 'pending').length;
            const completed = leads.filter(l => l.status === 'completed');
            
            // Calculate Revenue (sum of completed jobs amounts)
            const revenue = completed.reduce((sum, lead) => sum + (lead.amount || 0), 0);
            
            // Update UI Stats
            document.getElementById('stat-total-leads').innerText = total;
            document.getElementById('stat-active-services').innerText = active;
            document.getElementById('stat-pending-count').innerText = `${pending} pending scheduled`;
            
            // Format currency
            const formatter = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumSignificantDigits: 3
            });
            document.getElementById('stat-revenue').innerText = formatter.format(revenue);

            // Render Table
            renderTable(leads);
        }

        function renderTable(leads) {
            const tbody = document.getElementById('leads-table-body');
            tbody.innerHTML = '';

            const filteredLeads = currentFilter === 'all' 
                ? leads 
                : leads.filter(l => l.status === currentFilter);

            document.getElementById('table-showing-text').innerText = `Showing ${filteredLeads.length} of ${leads.length} entries`;

            if (filteredLeads.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="5" class="px-6 py-8 text-center text-slate-400">
                            <div class="flex flex-col items-center justify-center gap-2">
                                <iconify-icon icon="solar:inbox-line-linear" width="32"></iconify-icon>
                                <span>No data available</span>
                            </div>
                        </td>
                    </tr>
                `;
                return;
            }

            const statusStyles = {
                pending: 'bg-amber-50 text-amber-700 border-amber-100',
                completed: 'bg-green-50 text-green-700 border-green-100',
                processing: 'bg-blue-50 text-blue-700 border-blue-100'
            };

            filteredLeads.forEach(lead => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-50/80 transition-colors group';
                tr.innerHTML = `
                    <td class="px-6 py-4 font-medium text-slate-900">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold uppercase">
                                ${lead.name.charAt(0)}
                            </div>
                            <div>
                                ${lead.name}
                                <div class="text-xs text-slate-400 font-light">${lead.phone}</div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4">${lead.service}</td>
                    <td class="px-6 py-4">
                        <button onclick="cycleStatus(${lead.id}, '${lead.status}')" class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusStyles[lead.status]} capitalize cursor-pointer hover:opacity-80 transition">
                            ${lead.status}
                        </button>
                    </td>
                    <td class="px-6 py-4 text-slate-400 font-light">${lead.date}</td>
                    <td class="px-6 py-4 text-right">
                        <button onclick="deleteLead(${lead.id})" class="text-slate-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50">
                            <iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
                        </button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        // --- Actions ---

        function filterTable(status) {
            currentFilter = status;
            renderDashboard();
        }

        async function cycleStatus(id, currentStatus) {
            const flow = { 'pending': 'processing', 'processing': 'completed', 'completed': 'pending' };
            const nextStatus = flow[currentStatus];
            await MockAPI.updateStatus(id, nextStatus);
            renderDashboard();
            showToast(`Status updated to ${nextStatus}`);
        }

        async function deleteLead(id) {
            if(confirm('Are you sure you want to delete this record?')) {
                await MockAPI.deleteLead(id);
                renderDashboard();
                showToast('Record deleted successfully');
            }
        }

        function deleteDatabase() {
            if(confirm('Warning: This will permanently delete ALL data. Are you sure?')) {
                localStorage.removeItem(DB_KEY);
                // We set an empty array immediately so MockAPI doesn't reload init data
                localStorage.setItem(DB_KEY, '[]'); 
                renderDashboard();
                showToast('Database wiped completely');
            }
        }

        function exportData() {
            alert("This would download a .csv file in a real application.");
        }

        // --- Frontend Form Logic ---
        function openModal() {
            const modal = document.getElementById('contact-modal');
            modal.classList.remove('hidden');
            modal.classList.add('fade-in');
        }

        function closeModal() {
            const modal = document.getElementById('contact-modal');
            modal.classList.add('hidden');
        }

        async function handleFormSubmit(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            
            const leadData = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                service: formData.get('service')
            };
            
            // 1. WhatsApp Redirection (Uses first primary number)
            const businessPhone = "919988222605";
            const message = `Hello, I would like a quote.\n\n*Name:* ${leadData.name}\n*Phone:* ${leadData.phone}\n*Service:* ${leadData.service}\n\nPlease get back to me.`;
            const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            // 2. Save to Mock DB (Backend)
            await MockAPI.addLead(leadData);
            
            // 3. UI Feedback
            closeModal();
            e.target.reset();
            showToast("Quote request sent & saved!");
        }

        // --- Toast Notification System ---
        function showToast(message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-sm font-medium mb-3 fade-in transform transition-all duration-300 translate-y-0';
            toast.innerHTML = `
                <iconify-icon icon="solar:check-circle-linear" class="text-green-400" width="20"></iconify-icon>
                <span>${message}</span>
            `;
            
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="app-container">

<div id="frontend-view">

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tighter text-lg group-hover:opacity-80 transition-opacity hidden sm:block">
                            CREATIVE<span className="font-light text-slate-500">PEST CONTROL</span>
</span>
<span className="text-slate-900 font-semibold tracking-tighter text-lg sm:hidden">CPC<span className="font-light text-slate-500">S</span></span>
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
<a className="hover:text-brand-600 transition-colors text-slate-400" href="tel:+919988222965">
                                +91 99882 22965
                            </a>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-slate-900/10" onclick="openModal()">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
<span>Get Quote</span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="flex h-2 w-2 relative">
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
<button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10" onclick="openModal()">
                            Call Now
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-xl font-medium transition-all flex items-center justify-center gap-2" href="#services">
                            View Services
                        </a>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-12 max-w-4xl mx-auto">
<div className="text-center">
<div className="text-2xl font-semibold text-slate-900 tracking-tight">ISO</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Certified</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-slate-900 tracking-tight">MSME</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Registered</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-slate-900 tracking-tight">IPSA</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Member</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-slate-900 tracking-tight">24/7</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Support</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-xl mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Comprehensive Solutions</h2>
<p className="font-light text-slate-500">We offer specialized treatments for residential and commercial properties using government-approved chemicals and advanced techniques.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="service-card group border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 rounded-2xl p-2 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/40 flex flex-col">
<div className="h-48 rounded-xl bg-slate-200 overflow-hidden relative">
<img alt="Sanitization" className="group-hover:scale-105 transition-transform duration-500 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="text-xs font-medium text-slate-800 bg-white/90 rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-3 left-3 backdrop-blur">Popular</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-start justify-between mb-3">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Sanitization Services</h3>
<iconify-icon className="service-icon text-slate-400 transition-colors" icon="solar:virus-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-4">Professional disinfection against viruses and bacteria for homes and offices.</p>
</div>
</div>

<div className="service-card group hover:bg-white hover:border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/40 flex flex-col bg-slate-50 border-slate-100 border rounded-2xl pt-2 pr-2 pb-2 pl-2">
<div className="h-48 rounded-xl bg-slate-200 overflow-hidden relative">
<img alt="Termite" className="group-hover:scale-105 transition-transform duration-500 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="text-xs font-medium text-slate-800 bg-white/90 rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-3 left-3 backdrop-blur">Popular</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-start justify-between mb-3">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Anti Termite Treatment</h3>
<iconify-icon className="service-icon text-slate-400 transition-colors" icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-4">Pre-construction and post-construction termite control to protect structural integrity.</p>
</div>
</div>

<div className="service-card group border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 rounded-2xl p-2 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/40 flex flex-col">
<div className="h-48 rounded-xl bg-slate-200 overflow-hidden relative">
<img alt="Cockroach" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-start justify-between mb-3">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Mosquito Management</h3>
<iconify-icon className="service-icon text-slate-400 transition-colors" icon="solar:bug-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-4">Larvicidal treatments and fogging to control mosquito breeding and spread.</p>
</div>
</div>
<div className="service-card group border border-slate-100 bg-white hover:border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
<div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center mb-4 text-brand-600">
<iconify-icon icon="solar:danger-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Flies Management</h3>
<p className="text-xs text-slate-500 leading-relaxed">Control of house flies and fruit flies using traps and chemical treatments to prevent food contamination.</p>
</div>
<div className="service-card group hover:border-slate-200 transition-all duration-300 hover:shadow-lg bg-white border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mb-4 text-amber-600">
<iconify-icon icon="solar:cloud-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Fumigation Service</h3>
<p className="text-xs text-slate-500 leading-relaxed">Gas treatment for stored products and containers to eliminate pests at all life stages.</p>
</div>
<div className="service-card group border border-slate-100 bg-white hover:border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-600">
<iconify-icon icon="solar:maximize-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Spider Management</h3>
<p className="text-xs text-slate-500 leading-relaxed">Removal of webs and treatment of cracks/crevices to prevent spider infestation.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200" id="certifications">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-12">Accreditations &amp; Licenses</h2>
<div className="flex flex-wrap justify-center gap-6">
<div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm">
<iconify-icon className="text-brand-600" icon="solar:verified-check-linear" width="24"></iconify-icon>
<div className="text-left">
<div className="text-sm font-semibold text-slate-900">ISO Certified</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide">Quality Standards</div>
</div>
</div>
<div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:diploma-linear" width="24"></iconify-icon>
<div className="text-left">
<div className="text-sm font-semibold text-slate-900">GST Registered</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide">Govt. Compliant</div>
</div>
</div>
<div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm">
<iconify-icon className="text-indigo-600" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
<div className="text-left">
<div className="text-sm font-semibold text-slate-900">IPSA Member</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide">Association</div>
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
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="font-semibold tracking-tighter text-lg">CREATIVE<span className="font-light text-slate-500">PEST</span></span>
</div>
<p className="text-sm font-light leading-relaxed mb-6">
<strong className="text-slate-300">Creative Pest Control Services</strong><br/>
                                Providing world-class pest management services with a focus on safety, hygiene, and customer satisfaction.
                            </p>
</div>

<div className="col-span-1 lg:col-span-2">
<h4 className="text-white font-medium mb-6 tracking-tight">Contact Details</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex gap-3">
<iconify-icon className="mt-1 text-slate-500" icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-sm font-light">B-31-1136/213/40, New Sunder Nagar, Bhamian Kalan, Ludhiana</span>
</div>
<div className="space-y-4">
<a className="flex gap-3 items-center hover:text-white transition group" href="tel:+919988222605">
<iconify-icon className="text-slate-500 group-hover:text-brand-500 transition-colors" icon="solar:phone-linear" width="20"></iconify-icon>
<span className="text-sm font-light">+91 99882 22605</span>
</a>
<a className="flex gap-3 items-center hover:text-white transition group" href="tel:+919988222965">
<iconify-icon className="text-slate-500 group-hover:text-brand-500 transition-colors" icon="solar:phone-linear" width="20"></iconify-icon>
<span className="text-sm font-light">+91 99882 22965</span>
</a>
</div>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6 tracking-tight">Company</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition" href="#">About Us</a></li>
<li><a className="hover:text-white transition" href="#services">Services</a></li>
<li><a className="hover:text-white transition cursor-pointer" href="javascript:void(0)" onclick="switchView('backend')">Staff Login</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-600">
<p>© 2023 Creative Pest Control Services. All rights reserved.</p>
</div>
</div>
</footer>
</div>

<div className="hidden min-h-screen bg-slate-50 flex" id="backend-view">

<aside className="w-64 bg-white border-r border-slate-200 fixed h-full z-10 hidden md:block">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-sm">CPC<span className="font-light text-slate-400">Admin</span></span>
</div>
</div>
<div className="p-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 bg-slate-50 text-slate-900 rounded-lg text-sm font-medium transition-colors border border-slate-100" onclick="renderDashboard()">
<iconify-icon icon="solar:widget-2-linear" width="20"></iconify-icon>
                        Overview
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                        Leads Database
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
                        Schedule
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors" onclick="deleteDatabase()">
<iconify-icon icon="solar:trash-bin-trash-linear" width="20"></iconify-icon>
                        Delete Database
                    </button>
</div>
<div className="absolute bottom-4 left-0 w-full px-4">
<button className="w-full flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors" onclick="switchView('frontend')">
<iconify-icon icon="solar:logout-2-linear" width="20"></iconify-icon>
                        Logout
                    </button>
</div>
</aside>

<main className="flex-1 md:ml-64 min-h-screen">

<header className="h-16 bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-20 px-8 flex items-center justify-between">
<h2 className="font-semibold text-slate-800">Dashboard</h2>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-xs font-medium bg-slate-900 text-white px-3 py-1.5 rounded-lg hover:bg-slate-800" onclick="MockAPI.addRandomLead()">
                            + Simulate Lead
                        </button>
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-500 to-green-300 text-white flex items-center justify-center text-xs font-bold">A</div>
</div>
</header>
<div className="p-8 max-w-6xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Total Leads</p>
<h3 className="text-2xl font-bold text-slate-900 mt-1" id="stat-total-leads">0</h3>
</div>
<div className="p-2 bg-slate-50 rounded-lg text-slate-600">
<iconify-icon icon="solar:user-speak-linear" width="24"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-1 text-xs text-green-600 font-medium">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon>
<span>Updated just now</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Active Services</p>
<h3 className="text-2xl font-bold text-slate-900 mt-1" id="stat-active-services">0</h3>
</div>
<div className="p-2 bg-slate-50 rounded-lg text-slate-600">
<iconify-icon icon="solar:clipboard-check-linear" width="24"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
<span id="stat-pending-count">0 pending scheduled</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Revenue (Est)</p>
<h3 className="text-2xl font-bold text-slate-900 mt-1" id="stat-revenue">₹0</h3>
</div>
<div className="p-2 bg-slate-50 rounded-lg text-slate-600">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-1 text-xs text-green-600 font-medium">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon>
<span>Based on completed</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-100 flex items-center justify-between">
<h3 className="font-semibold text-slate-900">Recent Enquiries</h3>
<div className="flex gap-2">
<select className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors focus:outline-none" onchange="filterTable(this.value)">
<option value="all">All Status</option>
<option value="pending">Pending</option>
<option value="processing">Processing</option>
<option value="completed">Completed</option>
</select>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2" onclick="exportData()">
<iconify-icon icon="solar:export-linear"></iconify-icon> Export
                                </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50 text-xs font-medium text-slate-500 uppercase tracking-wide border-b border-slate-100">
<th className="px-6 py-4">Customer</th>
<th className="px-6 py-4">Service Type</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Date</th>
<th className="px-6 py-4 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm text-slate-600" id="leads-table-body">

</tbody>
</table>
</div>
<div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
<span id="table-showing-text">Showing entries</span>
<div className="flex gap-2">
<button className="px-3 py-1 rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-50" disabled="">Prev</button>
<button className="px-3 py-1 rounded border border-slate-200 hover:bg-slate-50" disabled="">Next</button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="contact-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform transition-all scale-100 opacity-100">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="mb-6">
<h3 className="text-xl font-semibold text-slate-900">Get a Free Quote</h3>
<p className="text-sm text-slate-500 mt-1">Connect with us on WhatsApp for instant assistance.</p>
</div>
<form className="space-y-4" id="lead-form" onsubmit="handleFormSubmit(event)">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Full Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm placeholder:text-slate-400" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Phone Number</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm placeholder:text-slate-400" name="phone" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Service Required</label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm appearance-none bg-white text-slate-600" name="service">
<option value="Termite Control">Termite Control</option>
<option value="Cockroach Control">Cockroach Control</option>
<option value="Sanitization">Sanitization</option>
<option value="Mosquito Control">Mosquito Control</option>
<option value="Bed Bugs">Bed Bugs</option>
<option value="General Pest">Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 rounded-xl transition-colors mt-2 shadow-lg shadow-green-500/20 flex items-center justify-center gap-2" type="submit">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
<span>Send via WhatsApp</span>
</button>
</form>
</div>
</div>

<div id="toast-container"></div>



    </>
  );
}
