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



        // --- 1. MOCK DATABASE (Stored in LocalStorage) ---
        const DEFAULT_PROPERTIES = [
            { id: 1, title: "The Glass Pavilion", price: "$24,500,000", location: "Montecito, CA", details: "12,000 SQ FT", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg", tag: "Off Market" },
            { id: 2, title: "Kyoto Stone House", price: "Price on Request", location: "Kyoto, Japan", details: "6,500 SQ FT", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2600&auto=format&fit=crop" },
            { id: 3, title: "Alpine Brutalist", price: "₣18,200,000", location: "Zermatt, Switzerland", details: "Ski-in / Ski-out", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2600&auto=format&fit=crop" },
            { id: 4, title: "Penthouse One", price: "$32,000,000", location: "Tribeca, New York", details: "Private Terrace", image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2600&auto=format&fit=crop" }
        ];

        const mockDB = {
            getProperties: () => JSON.parse(localStorage.getItem('svrn_properties')) || DEFAULT_PROPERTIES,
            saveProperties: (props) => localStorage.setItem('svrn_properties', JSON.stringify(props)),
            getLeads: () => JSON.parse(localStorage.getItem('svrn_leads')) || [],
            saveLead: (lead) => {
                const leads = mockDB.getLeads();
                leads.unshift({ ...lead, id: Date.now(), date: new Date().toLocaleDateString() });
                localStorage.setItem('svrn_leads', JSON.stringify(leads));
            }
        };

        // Initialize if empty
        if (!localStorage.getItem('svrn_properties')) {
            mockDB.saveProperties(DEFAULT_PROPERTIES);
        }

        // --- 2. STATE MANAGEMENT ---
        const state = {
            user: null, // { email, role: 'admin' | 'visitor' }
            properties: [],
            leads: []
        };

        // --- 3. API LAYER (Mock Fetch) ---
        async function mockApi(endpoint, method, data) {
            // Simulate network delay
            await new Promise(r => setTimeout(r, 600));

            if (endpoint === '/api/login' && method === 'POST') {
                if (data.email === 'admin@svrn.com' && data.password === 'admin') {
                    return { success: true, user: { email: data.email, role: 'admin', name: 'Admin User' } };
                }
                throw new Error('Invalid credentials');
            }

            if (endpoint === '/api/properties' && method === 'GET') {
                return mockDB.getProperties();
            }

            if (endpoint === '/api/properties' && method === 'POST') {
                const props = mockDB.getProperties();
                const newProp = { ...data, id: Date.now() };
                props.unshift(newProp);
                mockDB.saveProperties(props);
                return newProp;
            }

            if (endpoint === '/api/properties' && method === 'DELETE') {
                let props = mockDB.getProperties();
                props = props.filter(p => p.id !== data.id);
                mockDB.saveProperties(props);
                return { success: true };
            }

            if (endpoint === '/api/contact' && method === 'POST') {
                mockDB.saveLead(data);
                return { success: true, message: "Inquiry received" };
            }

            if (endpoint === '/api/leads' && method === 'GET') {
                return mockDB.getLeads();
            }
        }

        // --- 4. APP CONTROLLER ---
        
        // Render Properties to Grid
        function renderProperties() {
            const grid = document.getElementById('propertyGrid');
            grid.innerHTML = '';
            
            state.properties.forEach((prop, index) => {
                const isOffset = index % 2 !== 0; // Simple layout logic
                const html = `
                    <div class="group cursor-pointer ${isOffset ? 'md:mt-24' : ''} reveal-text visible">
                        <div class="reveal-image-wrapper aspect-[4/3] w-full bg-gray-900 mb-6 relative overflow-hidden">
                            <img src="${prop.image}" alt="${prop.title}" class="w-full h-full object-cover grayscale-[20%] opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 reveal-image">
                            ${prop.tag ? `<div class="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 text-xs text-white border border-white/10">${prop.tag}</div>` : ''}
                        </div>
                        <div class="flex justify-between items-start border-t border-white/10 pt-4">
                            <div>
                                <h3 class="text-xl font-light tracking-tight mb-1 text-white">${prop.title}</h3>
                                <p class="text-sm text-gray-500">${prop.location}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-light text-white">${prop.price}</p>
                                <p class="text-xs text-gray-500 mt-1">${prop.details}</p>
                            </div>
                        </div>
                    </div>
                `;
                grid.innerHTML += html;
            });
        }

        // Render Admin Tables
        function renderAdminData() {
            // Properties Table
            const propList = document.getElementById('adminPropertiesList');
            propList.innerHTML = state.properties.map(p => `
                <tr class="hover:bg-white/5 transition-colors">
                    <td class="py-4 pr-4">
                        <div class="flex items-center gap-3">
                            <img src="${p.image}" class="w-10 h-10 object-cover bg-gray-800">
                            <span class="text-white">${p.title}</span>
                        </div>
                    </td>
                    <td class="py-4 text-gray-400">${p.location}</td>
                    <td class="py-4 text-gray-400">${p.price}</td>
                    <td class="py-4 text-right">
                        <button onclick="deleteProperty(${p.id})" class="text-red-400 hover:text-white transition-colors text-xs uppercase tracking-widest">Delete</button>
                    </td>
                </tr>
            `).join('');

            // Leads List
            const leadList = document.getElementById('adminLeadsList');
            document.getElementById('leadCountBadge').innerText = state.leads.length;
            
            if(state.leads.length === 0) {
                leadList.innerHTML = '<div class="text-gray-500 italic">No inquiries yet.</div>';
            } else {
                leadList.innerHTML = state.leads.map(l => `
                    <div class="bg-[#111] p-6 border border-white/5 flex flex-col md:flex-row justify-between gap-4">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <span class="text-white font-medium">${l.firstName} ${l.lastName}</span>
                                <span class="text-xs text-gray-500 bg-gray-900 px-2 py-0.5 rounded">${l.budget ? 'Budget: $' + (l.budget/1000000).toFixed(1) + 'M' : 'No Budget'}</span>
                            </div>
                            <a href="mailto:${l.email}" class="text-sm text-blue-400 hover:underline mb-2 block">${l.email}</a>
                            <p class="text-sm text-gray-400 font-light">"${l.message}"</p>
                        </div>
                        <div class="text-right text-xs text-gray-600 uppercase tracking-widest whitespace-nowrap">
                            ${l.date}
                        </div>
                    </div>
                `).join('');
            }
        }

        // Init App
        async function init() {
            try {
                // Fetch Properties
                state.properties = await mockApi('/api/properties', 'GET');
                renderProperties();
                
                // Animation observer re-trigger for dynamic content
                setTimeout(() => {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) entry.target.classList.add('visible');
                        });
                    }, { threshold: 0.1 });
                    document.querySelectorAll('.reveal-text, .reveal-image').forEach(el => observer.observe(el));
                }, 100);

            } catch (e) {
                console.error("Init error", e);
            }
        }

        // Auth Logic
        document.getElementById('authBtn').addEventListener('click', () => {
            if (state.user) {
                openModal('adminModal');
                refreshAdminData();
            } else {
                openModal('loginModal');
            }
        });

        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const pass = document.getElementById('loginPass').value;
            
            try {
                const response = await mockApi('/api/login', 'POST', { email, pass });
                state.user = response.user;
                closeModal('loginModal');
                showToast(`Welcome back, ${state.user.name}`);
                document.getElementById('authBtn').innerText = 'Dashboard';
                openModal('adminModal');
                refreshAdminData();
            } catch (err) {
                showToast('Invalid Credentials', true);
            }
        });

        function logout() {
            state.user = null;
            document.getElementById('authBtn').innerText = 'Member Login';
            closeModal('adminModal');
            showToast('Logged out successfully');
        }

        // Lead Form Logic
        document.getElementById('leadForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Sending...';
            
            await mockApi('/api/contact', 'POST', data);
            
            btn.innerHTML = originalText;
            e.target.reset();
            showToast('Inquiry Sent. We will be in touch.');
        });

        // Admin Actions
        async function refreshAdminData() {
            if(!state.user) return;
            state.leads = await mockApi('/api/leads', 'GET');
            renderAdminData();
        }

        async function deleteProperty(id) {
            if(confirm('Are you sure you want to remove this listing?')) {
                await mockApi('/api/properties', 'DELETE', { id });
                state.properties = await mockApi('/api/properties', 'GET'); // Refresh local
                renderProperties(); // Update frontend
                renderAdminData(); // Update admin
                showToast('Property Removed');
            }
        }

        document.getElementById('addPropertyForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            
            await mockApi('/api/properties', 'POST', data);
            state.properties = await mockApi('/api/properties', 'GET');
            
            renderProperties();
            renderAdminData();
            closeModal('addPropModal');
            e.target.reset();
            showToast('Property Listed Successfully');
        });

        // UI Utilities
        function openModal(id) { document.getElementById(id).classList.add('active'); }
        function closeModal(id) { document.getElementById(id).classList.remove('active'); }
        function openAddPropertyModal() { openModal('addPropModal'); }
        
        function switchAdminTab(tabName) {
            document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.add('hidden'));
            document.getElementById(`tab-${tabName}`).classList.remove('hidden');
            
            // Update active state style on buttons (simplified)
            document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.add('text-gray-500'));
            // In a real framework we'd bind classes better, here we trust the click interaction
        }

        function showToast(msg, isError = false) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMsg').innerText = msg;
            toast.classList.remove('translate-x-full');
            if(isError) toast.classList.add('border-red-500', 'border-l-4');
            else toast.classList.remove('border-red-500', 'border-l-4');
            
            setTimeout(() => toast.classList.add('translate-x-full'), 3000);
        }

        // Start
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
      

<nav className="fixed top-0 w-full z-40 mix-blend-difference px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-gradient-to-b from-[#0A0A0A]/90 to-transparent backdrop-blur-[2px]">
<a className="text-xl font-medium tracking-tighter uppercase z-50" href="#">SVRN.</a>
<div className="hidden md:flex gap-12 text-sm font-medium tracking-wide items-center">
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#philosophy">Philosophy</a>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#properties">Residences</a>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#expertise">Expertise</a>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#contact">Contact</a>

<button className="border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors uppercase text-xs tracking-widest" id="authBtn">
                Member Login
            </button>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<div className="fixed top-24 right-6 z-50 transform translate-x-full transition-transform duration-500 bg-white text-black px-6 py-4 flex items-center gap-3 shadow-2xl" id="toast">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="text-sm font-medium" id="toastMsg">Notification</span>
</div>

<div className="modal fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" id="loginModal">
<div className="bg-[#111] border border-white/10 p-12 max-w-md w-full relative">
<button className="absolute top-6 right-6 text-gray-500 hover:text-white" onclick="closeModal('loginModal')"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
<h2 className="text-2xl font-light tracking-tight mb-8">Member Access</h2>
<form className="space-y-6" id="loginForm">
<div>
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Email</label>
<input className="w-full bg-transparent text-white py-2 input-underline font-light" id="loginEmail" placeholder="admin@svrn.com" type="email" value="admin@svrn.com"/>
</div>
<div>
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Password</label>
<input className="w-full bg-transparent text-white py-2 input-underline font-light" id="loginPass" placeholder="admin" type="password" value="admin"/>
</div>
<button className="w-full py-4 bg-white text-black hover:bg-gray-200 transition-colors uppercase text-xs tracking-widest mt-4" type="submit">
                    Sign In
                </button>
<p className="text-center text-xs text-gray-600 mt-4">Demo: admin@svrn.com / admin</p>
</form>
</div>
</div>

<div className="modal fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md overflow-y-auto py-12" id="adminModal">
<div className="bg-[#0A0A0A] border border-white/10 w-full max-w-6xl min-h-[80vh] relative flex flex-col md:flex-row">
<button className="absolute top-6 right-6 text-gray-500 hover:text-white z-50" onclick="closeModal('adminModal')"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>

<div className="w-full md:w-64 border-r border-white/10 p-8 flex flex-col">
<div className="mb-12">
<h3 className="text-xl font-light tracking-tight">SVRN.<br/><span className="text-xs text-gray-500 uppercase tracking-widest">Admin Panel</span></h3>
</div>
<nav className="space-y-6 flex-1">
<button className="admin-tab-btn w-full text-left text-sm uppercase tracking-widest hover:text-white text-white transition-colors flex items-center gap-3" onclick="switchAdminTab('listings')">
<iconify-icon icon="solar:buildings-linear"></iconify-icon> Listings
                    </button>
<button className="admin-tab-btn w-full text-left text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-3" onclick="switchAdminTab('leads')">
<iconify-icon icon="solar:inbox-linear"></iconify-icon> Leads <span className="ml-auto bg-white text-black text-[10px] px-1.5 py-0.5 rounded-full" id="leadCountBadge">0</span>
</button>
<button className="w-full text-left text-sm uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors mt-auto pt-12 flex items-center gap-3" onclick="logout()">
<iconify-icon icon="solar:logout-linear"></iconify-icon> Logout
                    </button>
</nav>
</div>

<div className="flex-1 p-8 md:p-12 overflow-y-auto">

<div className="admin-tab-content" id="tab-listings">
<div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
<h2 className="text-3xl font-light">Property Inventory</h2>
<button className="bg-white text-black px-4 py-2 text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-2" onclick="openAddPropertyModal()">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon> Add Property
                        </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="text-xs text-gray-500 uppercase tracking-widest border-b border-white/10">
<tr>
<th className="pb-4 font-normal">Property</th>
<th className="pb-4 font-normal">Location</th>
<th className="pb-4 font-normal">Price</th>
<th className="pb-4 font-normal text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5" id="adminPropertiesList">

</tbody>
</table>
</div>
</div>

<div className="admin-tab-content hidden" id="tab-leads">
<div className="mb-8 border-b border-white/10 pb-6">
<h2 className="text-3xl font-light">Inquiries</h2>
</div>
<div className="space-y-4" id="adminLeadsList">

</div>
</div>
</div>
</div>
</div>

<div className="modal fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm" id="addPropModal">
<div className="bg-[#111] border border-white/10 p-12 max-w-lg w-full relative">
<button className="absolute top-6 right-6 text-gray-500 hover:text-white" onclick="closeModal('addPropModal')"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
<h2 className="text-xl font-light mb-8">New Listing</h2>
<form className="space-y-6" id="addPropertyForm">
<div>
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Title</label>
<input className="w-full bg-transparent text-white py-2 input-underline font-light" name="title" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Location</label>
<input className="w-full bg-transparent text-white py-2 input-underline font-light" name="location" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Price</label>
<input className="w-full bg-transparent text-white py-2 input-underline font-light" name="price" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Details (Sq Ft / Beds)</label>
<input className="w-full bg-transparent text-white py-2 input-underline font-light" name="details" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Image URL</label>
<input className="w-full bg-transparent text-white py-2 input-underline font-light" name="image" placeholder="https://..." required="" type="url"/>
</div>
<button className="w-full py-4 bg-white text-black hover:bg-gray-200 transition-colors uppercase text-xs tracking-widest mt-4" type="submit">
                    Publish Listing
                </button>
</form>
</div>
</div>


<header className="relative w-full h-screen flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Architecture" className="w-full h-full object-cover opacity-60 grayscale-[30%] brightness-[0.7]" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
<div className="col-span-1 md:col-span-8">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9] text-white reveal-text">
                    ARCHITECTURE.<br/>VALUE.<br/>LEGACY.
                </h1>
</div>
<div className="col-span-1 md:col-span-4 flex flex-col justify-end items-start md:items-end mb-2">
<p className="text-sm md:text-base text-gray-300 font-light max-w-xs md:text-right leading-relaxed reveal-text" style={{transitionDelay: '100ms'}}>
                    Curating the world's most exceptional properties for the discerning few.
                </p>
<a className="mt-8 group flex items-center gap-3 text-sm tracking-widest uppercase hover:text-white transition-colors reveal-text" href="#properties" style={{transitionDelay: '200ms'}}>
                    View Collection
                    <iconify-icon className="group-hover:translate-x-2 transition-transform duration-500" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-24 md:py-40 px-6 md:px-12 bg-[#0A0A0A]" id="philosophy">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
<div className="col-span-1 md:col-span-3">
<span className="text-xs uppercase tracking-[0.2em] text-gray-500 border-t border-gray-800 pt-4 block w-fit reveal-text">The Philosophy</span>
</div>
<div className="col-span-1 md:col-span-9">
<h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-[#CCCCCC] reveal-text">
                    We believe true luxury is silent. It is defined by space, light, and materiality. Our portfolio represents a curated selection of architectural masterpieces designed to stand the test of time.
                </h2>
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="reveal-text" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-gray-400 mb-6" icon="solar:shield-check-linear" strokeWidth="1" width="32"></iconify-icon>
<h3 className="text-lg font-normal mb-2">Uncompromising Privacy</h3>
<p className="text-sm text-gray-500 leading-relaxed">Secure estates designed for complete solitude and peace of mind.</p>
</div>
<div className="reveal-text" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-gray-400 mb-6" icon="solar:ruler-pen-linear" strokeWidth="1" width="32"></iconify-icon>
<h3 className="text-lg font-normal mb-2">Architectural Merit</h3>
<p className="text-sm text-gray-500 leading-relaxed">Properties selected for their design significance and structural integrity.</p>
</div>
<div className="reveal-text" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-gray-400 mb-6" icon="solar:graph-up-linear" strokeWidth="1" width="32"></iconify-icon>
<h3 className="text-lg font-normal mb-2">Enduring Value</h3>
<p className="text-sm text-gray-500 leading-relaxed">Assets that appreciate through scarcity and location desirability.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 md:px-12 bg-[#0A0A0A]" id="properties">
<div className="max-w-7xl mx-auto mb-16 flex justify-between items-end border-b border-white/10 pb-6 reveal-text">
<h2 className="text-3xl md:text-4xl font-light tracking-tight">Selected Residences</h2>
<div className="flex gap-4">

<button className="text-xs uppercase tracking-widest text-white border-b border-white">All</button>
<button className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Europe</button>
<button className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Americas</button>
</div>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24" id="propertyGrid">

<div className="text-white text-center w-full col-span-2 py-12">Loading inventory...</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#0B0B0B] border-t border-white/5" id="expertise">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal-text">
<h2 className="text-3xl md:text-5xl font-light tracking-tighter mb-8 text-white">
                        Global Reach.<br/>Local Nuance.
                    </h2>
<p className="text-gray-400 font-light mb-8 max-w-md">
                        Our expertise spans continents. We navigate complex international markets with the precision of a financial institution.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-sm text-gray-300">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Off-market acquisition
                        </li>
<li className="flex items-center gap-4 text-sm text-gray-300">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Architectural consultancy
                        </li>
<li className="flex items-center gap-4 text-sm text-gray-300">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Investment analysis
                        </li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-[#111] p-8 aspect-square flex flex-col justify-between border border-white/5 hover:border-white/20 transition-colors duration-500 reveal-text">
<iconify-icon className="text-gray-400" icon="solar:buildings-linear" strokeWidth="1" width="32"></iconify-icon>
<div><span className="text-2xl font-light block mb-1">50+</span><span className="text-xs text-gray-500 uppercase tracking-widest">Global Cities</span></div>
</div>
<div className="bg-[#111] p-8 aspect-square flex flex-col justify-between border border-white/5 hover:border-white/20 transition-colors duration-500 reveal-text" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-gray-400" icon="solar:wallet-linear" strokeWidth="1" width="32"></iconify-icon>
<div><span className="text-2xl font-light block mb-1">$4B+</span><span className="text-xs text-gray-500 uppercase tracking-widest">In Sales</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-5xl mx-auto text-center reveal-text">
<iconify-icon className="text-gray-700 mb-8 mx-auto" icon="solar:quote-up-linear" strokeWidth="1" width="40"></iconify-icon>
<p className="text-2xl md:text-4xl font-light italic leading-snug text-gray-200 mb-8">
                "SVRN does not just sell properties; they curate lifestyles. The attention to architectural detail and the discretion of their service is unmatched."
            </p>
<div className="flex flex-col items-center">
<span className="text-sm font-medium tracking-wide text-white">Alexander V.</span>
<span className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Managing Partner, Zurich</span>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#080808]" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="reveal-text">
<h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-6">Inquire.</h2>
<p className="text-gray-400 font-light mb-12 max-w-sm">Connect with our private office to discuss buying or selling significant assets.</p>
<div className="space-y-6">
<div>
<span className="text-xs text-gray-600 uppercase tracking-widest block mb-1">Global HQ</span>
<p className="text-sm text-gray-300">Bahnhofstrasse 21, 8001 Zurich</p>
</div>
<div>
<span className="text-xs text-gray-600 uppercase tracking-widest block mb-1">Americas</span>
<p className="text-sm text-gray-300">432 Park Avenue, New York, NY</p>
</div>
<div className="pt-8">
<a className="text-lg text-white hover:text-gray-400 transition-colors border-b border-white/20 pb-1" href="mailto:private@svrn.com">private@svrn.com</a>
</div>
</div>
</div>
<form className="space-y-12 mt-8 md:mt-0 reveal-text" id="leadForm" style={{transitionDelay: '200ms'}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-hover:text-gray-300 transition-colors">First Name</label>
<input className="w-full bg-transparent text-white py-2 input-underline font-light" name="firstName" required="" type="text"/>
</div>
<div className="group">
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-hover:text-gray-300 transition-colors">Last Name</label>
<input className="w-full bg-transparent text-white py-2 input-underline font-light" name="lastName" required="" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-hover:text-gray-300 transition-colors">Email Address</label>
<input className="w-full bg-transparent text-white py-2 input-underline font-light" name="email" required="" type="email"/>
</div>
<div className="group">
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-hover:text-gray-300 transition-colors">Budget (USD)</label>
<input className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer" max="50000000" min="1000000" name="budget" type="range"/>
<div className="flex justify-between mt-3 text-xs text-gray-500 font-mono">
<span>$1M</span>
<span>$50M+</span>
</div>
</div>
<div className="group">
<label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-hover:text-gray-300 transition-colors">Message</label>
<textarea className="w-full bg-transparent text-white py-2 input-underline font-light resize-none" name="message" rows="4"></textarea>
</div>
<button className="group flex items-center justify-between w-full py-4 border-b border-white hover:bg-white hover:text-black transition-all duration-300" type="submit">
<span className="text-sm uppercase tracking-widest">Send Inquiry</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="py-12 px-6 md:px-12 bg-[#050505] border-t border-white/5 text-gray-600">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs tracking-widest uppercase">© 2024 SVRN Estates.</div>
<div className="flex gap-8">
<a className="text-xs tracking-widest uppercase hover:text-white transition-colors" href="#">Legal</a>
<a className="text-xs tracking-widest uppercase hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs tracking-widest uppercase hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</footer>



    </>
  );
}
