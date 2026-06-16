import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: "#2563EB",
}
}
}
}



        const state = {
            currentUser: null,
            users: [{ id: 1, fullName: 'Admin User', email: 'admin@sakani.com', passwordHash: 'admin123', phone: '+966500000001', role: 'admin', profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' }],
            payments: [],
            listings: generateListings(20),
            roommates: generateRoommates(6),
            bookings: [],
            activeFilter: null,
            selectedProperty: null
        };

        const router = {
            navigate: (viewId) => {
                window.scrollTo(0,0);
                // Auth checks
                if (['dashboard', 'profile', 'booking'].includes(viewId) && !state.currentUser) return router.navigate('login');
                if (viewId === 'admin' && state.currentUser?.role !== 'admin') return router.navigate('home');
                
                document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
                const target = document.getElementById(`view-${viewId}`);
                if (target) {
                    target.classList.remove('hidden');
                    if(viewId === 'search') renderSearch();
                    if(viewId === 'dashboard') loadDashboardData();
                    if(viewId === 'profile') loadProfileData();
                    if(viewId === 'admin') loadAdminData();
                    if(viewId === 'ai') focusAIInput();
                    if(viewId === 'roommates') renderRoommates();
                }
            }
        };

        // --- Data Generators ---
        function generateListings(n) {
            const types = ['Apartment', 'Villa', 'Studio'];
            const locs = ['Riyadh, Olaya', 'Jeddah, Cornish', 'Dammam', 'Khobar'];
            const images = ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80'];
            return Array.from({length: n}, (_, i) => ({ id: i+1, title: `Modern ${types[i%3]} in ${locs[i%4]}`, location: locs[i%4], type: types[i%3], price: 2500 + (i*150), img: images[i%3], beds: (i%3)+1, baths: 1, sqm: 85+(i*10), description: "Experience luxury living in a prime location.", status: 'active' }));
        }

        function generateRoommates(n) {
            const names = ['Khalid', 'Sarah', 'Omar', 'Noura', 'Ahmed', 'Layla'];
            const traits = [['Non-smoker', 'Quiet'], ['Pet Friendly', 'Social'], ['Professional', 'Early Bird'], ['Student', 'Night Owl'], ['Clean', 'Gamer'], ['Fitness', 'Healthy']];
            return Array.from({length: n}, (_, i) => ({
                id: i+1,
                name: names[i],
                age: 22 + i,
                budget: 1500 + (i*200),
                match: 85 + (i*2),
                tags: traits[i],
                img: `https://i.pravatar.cc/150?u=${names[i]}`
            }));
        }

        const sampleReviews = [
            { user: 'Mohammed A.', rating: 5, date: '2 days ago', text: 'Absolutely stunning apartment. The view of Riyadh at night is breathtaking. The host was very professional.' },
            { user: 'Sara K.', rating: 4, date: '1 week ago', text: 'Great location near the metro. The furniture is modern and comfortable. Only issue was slight noise from the street.' },
            { user: 'Fahad', rating: 5, date: '2 weeks ago', text: 'Seamless digital contract process. I moved in within 24 hours just as promised.' }
        ];

        // --- Core Logic ---

        function toggleMapView() {
            const listContainer = document.getElementById('list-view-container');
            const mapContainer = document.getElementById('map-view-container');
            const btn = document.getElementById('map-toggle-btn');
            
            if (mapContainer.classList.contains('hidden')) {
                listContainer.classList.add('hidden');
                mapContainer.classList.remove('hidden');
                btn.innerHTML = '<span class="iconify" data-icon="lucide:list" data-width="14"></span> Show List';
            } else {
                mapContainer.classList.add('hidden');
                listContainer.classList.remove('hidden');
                btn.innerHTML = '<span class="iconify" data-icon="lucide:map" data-width="14"></span> Show Map';
            }
        }

        function renderRoommates() {
            const grid = document.getElementById('roommate-grid');
            grid.innerHTML = state.roommates.map(p => `
                <div class="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 p-6 relative group hover:border-indigo-500 transition-all">
                    <div class="absolute top-4 right-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">${p.match}% Match</div>
                    <div class="flex items-center gap-4 mb-4">
                        <img src="${p.img}" class="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-800">
                        <div>
                            <h3 class="font-semibold text-lg text-gray-900 dark:text-white">${p.name}, ${p.age}</h3>
                            <p class="text-sm text-gray-500">Budget: SAR ${p.budget}</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${p.tags.map(t => `<span class="bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-[10px] px-2 py-1 rounded font-medium">${t}</span>`).join('')}
                    </div>
                    <button class="w-full bg-[#171717] dark:bg-[#EDEDED] dark:text-black text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Connect</button>
                </div>
            `).join('');
        }

        function viewPropertyDetails(id) {
            state.selectedProperty = state.listings.find(l => l.id === id);
            const p = state.selectedProperty;
            
            // Render Main Details
            document.getElementById('property-details-content').innerHTML = `
                <div class="grid md:grid-cols-2 gap-0 md:gap-8">
                    <div class="h-72 md:h-full bg-gray-100 relative group">
                        <img src="${p.img}" class="w-full h-full object-cover">
                        <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold shadow-sm">Verified Listing</div>
                    </div>
                    <div class="p-6 md:p-8 flex flex-col justify-center">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">${p.title}</h1>
                                <p class="text-sm text-gray-500 flex items-center gap-1"><span class="iconify" data-icon="lucide:map-pin" data-width="12"></span> ${p.location}</p>
                            </div>
                            <div class="text-right">
                                <div class="text-xl font-bold text-gray-900 dark:text-white">SAR ${p.price}</div>
                                <div class="text-xs text-gray-500">/ month</div>
                            </div>
                        </div>
                        
                        <div class="flex gap-4 border-y border-gray-100 dark:border-white/5 py-4 my-6">
                            <div class="text-center"><div class="font-semibold text-gray-900 dark:text-white">${p.beds}</div><div class="text-[10px] uppercase text-gray-400">Beds</div></div>
                            <div class="w-px bg-gray-200 dark:bg-white/10"></div>
                            <div class="text-center"><div class="font-semibold text-gray-900 dark:text-white">${p.baths}</div><div class="text-[10px] uppercase text-gray-400">Baths</div></div>
                            <div class="w-px bg-gray-200 dark:bg-white/10"></div>
                            <div class="text-center"><div class="font-semibold text-gray-900 dark:text-white">${p.sqm}</div><div class="text-[10px] uppercase text-gray-400">m²</div></div>
                        </div>

                        <div class="mb-8">
                            <h3 class="text-sm font-semibold mb-2">About this place</h3>
                            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                This spacious ${p.sqm}m² apartment offers a perfect blend of comfort and style. Featuring a sunlit living room with floor-to-ceiling windows facing North, it captures beautiful city views. The kitchen is fully equipped with smart appliances including a dishwasher and energy-saving refrigerator. 
                                <br><br>
                                Located in the heart of ${p.location.split(',')[1] || 'the city'}, you are walking distance from premium coffee shops and the metro station. Ideal for professionals seeking a quiet, high-end residence.
                            </p>
                        </div>

                        <div class="flex gap-3 mt-auto">
                            <button onclick="bookProperty(${id})" class="flex-1 bg-[#171717] dark:bg-[#EDEDED] dark:text-black text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">Book Now</button>
                            <button class="px-4 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"><span class="iconify" data-icon="lucide:heart" data-width="20"></span></button>
                        </div>
                    </div>
                </div>
            `;

            // Render Reviews
            const reviewsHtml = sampleReviews.map(r => `
                <div class="border-b border-gray-100 dark:border-white/5 last:border-0 pb-6 last:pb-0">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-xs font-bold">${r.user.charAt(0)}</div>
                            <span class="text-sm font-medium text-gray-900 dark:text-white">${r.user}</span>
                        </div>
                        <span class="text-xs text-gray-400">${r.date}</span>
                    </div>
                    <div class="flex text-yellow-400 text-xs mb-2">
                        ${Array(r.rating).fill('<span class="iconify" data-icon="lucide:star" data-fill="currentColor"></span>').join('')}
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">${r.text}</p>
                </div>
            `).join('');
            document.getElementById('reviews-list').innerHTML = reviewsHtml;

            router.navigate('property-details');
        }

        // --- Standard Logic (Minimally touched) ---
        async function handleLogin(e) { e.preventDefault(); const fd = new FormData(e.target); const u = state.users.find(u => u.email === fd.get('email')); if(u) { state.currentUser = u; updateNav(); showNotification('Welcome back'); router.navigate('dashboard'); } else { showNotification('Invalid credentials'); } }
        async function handleRegister(e) { e.preventDefault(); const fd = new FormData(e.target); const u = { id: Date.now(), ...Object.fromEntries(fd), profileImage: 'https://ui-avatars.com/api/?name='+fd.get('fullName') }; state.users.push(u); state.currentUser = u; updateNav(); showNotification('Account created'); router.navigate('dashboard'); }
        
        function updateNav() {
            const user = state.currentUser;
            document.getElementById('nav-guest').classList.toggle('hidden', !!user);
            document.getElementById('nav-user').classList.toggle('hidden', !user);
            if(user) { document.getElementById('nav-user-name').textContent = user.fullName.split(' ')[0]; document.getElementById('nav-user-avatar').src = user.profileImage; if(user.role === 'admin') document.getElementById('nav-admin-btn').classList.remove('hidden'); }
        }

        function loadDashboardData() {
            if(!state.currentUser) return;
            document.getElementById('dash-name').textContent = state.currentUser.fullName;
            document.getElementById('dash-email').textContent = state.currentUser.email;
            document.getElementById('dash-avatar').src = state.currentUser.profileImage;
            renderPayments(); renderBookingHistory();
        }

        function renderPayments() { document.getElementById('payment-list').innerHTML = state.payments.map(c => `<div class="flex justify-between p-3 border rounded bg-gray-50"><span class="text-xs">•••• ${c.cardLast4}</span></div>`).join('') || '<div class="text-center text-xs text-gray-400 py-4">No cards added.</div>'; }
        function renderBookingHistory() { document.getElementById('booking-history').innerHTML = state.bookings.map(b => `<div class="text-xs mb-2">Booking #${b.id}</div>`).join('') || '<div class="text-center text-xs text-gray-400 py-4">No recent bookings.</div>'; }

        let searchTimeout;
        function debounceSearch() { clearTimeout(searchTimeout); searchTimeout = setTimeout(renderSearch, 200); }
        function setFilter(t) { state.activeFilter = state.activeFilter === t ? null : t; renderSearch(); }
        function renderSearch() {
            const term = document.getElementById('search-input').value.toLowerCase();
            const filtered = state.listings.filter(l => (l.title.toLowerCase().includes(term) || l.location.toLowerCase().includes(term)) && (!state.activeFilter || l.type === state.activeFilter));
            document.getElementById('results-count').textContent = filtered.length;
            document.getElementById('search-grid').innerHTML = filtered.map(item => `<div class="group cursor-pointer" onclick="viewPropertyDetails(${item.id})"><div class="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 relative mb-3"><img src="${item.img}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></div><div><h3 class="font-medium text-gray-900 dark:text-white text-sm truncate">${item.title}</h3><p class="text-xs text-gray-500">${item.location}</p><div class="flex items-baseline gap-1 mt-2"><span class="font-semibold text-gray-900 dark:text-white text-sm">SAR ${item.price}</span></div></div></div>`).join('');
        }

        function bookProperty(id) { if(!state.currentUser) return router.navigate('login'); document.getElementById('booking-total').textContent = `SAR ${state.listings.find(l=>l.id===id).price}`; router.navigate('booking'); }
        async function handleBookingSubmit(e) { e.preventDefault(); state.bookings.push({ id: Date.now(), guestId: state.currentUser.id, listingId: state.selectedProperty.id, status: 'pending' }); showNotification('Booking Confirmed!'); router.navigate('dashboard'); }
        
        function loadAdminData() { document.getElementById('admin-total-users').textContent = state.users.length; }
        function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
        function openPaymentModal() { document.getElementById('payment-modal').classList.remove('hidden'); }
        async function handleAddPayment(e) { e.preventDefault(); state.payments.push({ id: Date.now(), userId: state.currentUser.id, cardLast4: '4242' }); closeModal('payment-modal'); loadDashboardData(); }
        async function handleProfileUpdate(e) { e.preventDefault(); state.currentUser.fullName = document.getElementById('edit-fullname').value; showNotification('Saved'); updateNav(); }
        function handleAvatarChange(e) { const f = e.target.files[0]; if(f) { const r = new FileReader(); r.onload = (e) => document.getElementById('edit-avatar-preview').src = e.target.result; r.readAsDataURL(f); } }
        function showNotification(msg) { const n = document.getElementById('notification'); document.getElementById('notification-text').textContent = msg; n.classList.remove('hidden'); setTimeout(() => n.classList.add('hidden'), 3000); }
        function toggleDarkMode() { document.documentElement.classList.toggle('dark'); }

        // AI Functions
        function focusAIInput() { setTimeout(() => document.getElementById('ai-input').focus(), 100); }
        function handleAISuggestion(text) { document.getElementById('ai-input').value = text; handleAISubmit({ preventDefault: () => {} }); }
        async function handleAISubmit(e) { e.preventDefault(); const input = document.getElementById('ai-input'); const text = input.value.trim(); if (!text) return; document.getElementById('ai-chat-feed').classList.remove('hidden'); document.getElementById('ai-intro').classList.add('hidden'); document.getElementById('ai-chat-feed').classList.add('flex'); addAIMessage(text, 'user'); input.value = ''; setTimeout(() => { let response = "I'm learning."; if(text.toLowerCase().includes('apartment')) response = "I found 3 apartments in Olaya matching your criteria."; addAIMessage(response, 'ai'); }, 1000); }
        function addAIMessage(text, sender) { const feed = document.getElementById('ai-chat-feed'); const div = document.createElement('div'); div.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'} animate-enter`; div.innerHTML = `<div class="chat-bubble ${sender === 'ai' ? 'ai' : 'own'} px-4 py-3 text-sm rounded-xl leading-relaxed shadow-sm">${text}</div>`; feed.appendChild(div); }

        updateNav();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-gray-200/60 dark:border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-14 items-center">

<div className="flex items-center cursor-pointer group" onclick="router.navigate('home')">
<span className="text-lg font-bold tracking-tighter text-[#171717] dark:text-white group-hover:opacity-80 transition-opacity">SAKANI</span>
</div>

<div className="hidden md:flex items-center gap-6">
<button className="text-xs font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors" onclick="router.navigate('search')">Find a Home</button>

<button className="text-xs font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1.5" onclick="router.navigate('roommates')">
                        Roommates <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] px-1.5 py-0.5 rounded font-bold">New</span>
</button>
<button className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded-md" onclick="router.navigate('ai')">
<span className="iconify" data-icon="lucide:sparkles" data-width="12"></span> AI Assistant
                    </button>
<button className="text-xs font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors" id="nav-dashboard-btn" onclick="router.navigate('dashboard')">Dashboard</button>
<button className="hidden text-xs font-medium text-red-600 dark:text-red-400 hover:text-red-500 transition-colors" id="nav-admin-btn" onclick="router.navigate('admin')">Admin</button>
</div>

<div className="flex items-center gap-3">
<button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-gray-400" onclick="toggleDarkMode()">
<span className="iconify" data-icon="lucide:moon" data-width="16" id="theme-icon"></span>
</button>
<div className="flex items-center gap-3" id="nav-guest">
<button className="text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" onclick="router.navigate('login')">Log in</button>
<button className="bg-[#171717] dark:bg-[#EDEDED] dark:text-black hover:bg-black/80 dark:hover:bg-white text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-all shadow-sm" onclick="router.navigate('register')">
                            Sign Up
                        </button>
</div>
<div className="hidden flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-white/10" id="nav-user">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onclick="router.navigate('profile')">
<span className="text-xs font-medium hidden sm:block" id="nav-user-name">User</span>
<img className="w-6 h-6 rounded-full object-cover bg-gray-100 dark:bg-white/10" id="nav-user-avatar" src=""/>
</div>
</div>
</div>
</div>
</div>
</nav>

<main className="pt-14 min-h-screen" id="app-content">

<div className="view-section animate-enter" id="view-home">
<section className="relative h-[550px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Interior" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] dark:from-[#050505] via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-white/10 dark:bg-black/40 backdrop-blur-[1px]"></div>
</div>
<div className="relative z-10 max-w-2xl w-full px-6 text-center mt-8">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md border border-gray-200/50 dark:border-white/10 mb-6 mx-auto">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-[10px] font-medium tracking-wide uppercase text-gray-600 dark:text-gray-300">Simplified Rentals</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-gray-900 dark:text-white mb-6 drop-shadow-sm">
                        Find your place.<br/>
<span className="text-gray-500 dark:text-gray-400">Live your life.</span>
</h1>
<p className="text-sm md:text-base text-gray-700 dark:text-gray-200 mb-8 font-medium max-w-lg mx-auto leading-relaxed">
                        The modern standard for long-term rentals. Verified listings, digital contracts, and automated payments in one platform.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<button className="w-full sm:w-auto bg-[#171717] dark:bg-[#EDEDED] dark:text-black hover:opacity-90 text-white font-medium py-2.5 px-6 rounded-lg transition-all text-sm flex items-center justify-center gap-2" onclick="router.navigate('search')">
                            Browse Listings <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
<button className="w-full sm:w-auto bg-white/80 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/20 text-gray-900 dark:text-white font-medium py-2.5 px-6 rounded-lg transition-all text-sm flex items-center justify-center gap-2" onclick="router.navigate('roommates')">
                             Find Roommate <span className="iconify text-green-500" data-icon="lucide:users" data-width="14"></span>
</button>
</div>
</div>
</section>

<section className="py-12 px-4 border-b border-gray-200 dark:border-white/5">
<div className="max-w-6xl mx-auto">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold tracking-tight">Exclusive Offers</h2>
<a className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline" href="#" onclick="router.navigate('search')">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 shadow-lg">
<div className="absolute top-0 right-0 p-4 opacity-10"><span className="iconify" data-icon="lucide:percent" data-width="100"></span></div>
<div className="relative z-10">
<span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">New User</span>
<h3 className="text-xl font-bold mt-3 mb-1">First Month Free</h3>
<p className="text-white/80 text-xs mb-4">On select properties in Riyadh when you sign a 12-month contract.</p>
<button className="bg-white text-indigo-600 text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors" onclick="router.navigate('search')">Use Code: SAKANI24</button>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 p-6 group cursor-pointer hover:border-indigo-500 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600"><span className="iconify" data-icon="lucide:home" data-width="20"></span></div>
<span className="text-xs font-medium text-gray-500">Expires soon</span>
</div>
<h3 className="text-base font-semibold text-gray-900 dark:text-white">Summer Villa Sale</h3>
<p className="text-xs text-gray-500 mt-1">Get 15% off service fees on all villa rentals.</p>
</div>

<div className="relative overflow-hidden rounded-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 p-6 group cursor-pointer hover:border-indigo-500 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600"><span className="iconify" data-icon="lucide:users" data-width="20"></span></div>
<span className="text-xs font-medium text-gray-500">Roommate Special</span>
</div>
<h3 className="text-base font-semibold text-gray-900 dark:text-white">Refer a Roommate</h3>
<p className="text-xs text-gray-500 mt-1">Both get 500 SAR credit when you match and rent together.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group p-6 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300">
<div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/10 flex items-center justify-center mb-4 text-gray-900 dark:text-white">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Verified Integrity</h3>
<p className="text-sm text-gray-500 leading-relaxed">Every property is physically inspected. What you see in photos is exactly what you get.</p>
</div>
<div className="group p-6 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300">
<div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/10 flex items-center justify-center mb-4 text-gray-900 dark:text-white">
<span className="iconify" data-icon="lucide:zap" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Instant Leasing</h3>
<p className="text-sm text-gray-500 leading-relaxed">Sign Ejar contracts digitally. Move from viewing to moving in within 24 hours.</p>
</div>
<div className="group p-6 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300">
<div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/10 flex items-center justify-center mb-4 text-gray-900 dark:text-white">
<span className="iconify" data-icon="lucide:wallet" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Smart Payments</h3>
<p className="text-sm text-gray-500 leading-relaxed">Automated monthly payments via card or Apple Pay. Split bills easily.</p>
</div>
</div>
</div>
</section>
</div>

<div className="view-section hidden bg-[#FAFAFA] dark:bg-[#050505] min-h-[calc(100vh-3.5rem)] flex flex-col relative" id="view-ai">
<div className="max-w-3xl w-full mx-auto flex-1 flex flex-col px-4 pb-20 pt-8 animate-enter">
<div className="flex flex-col items-center justify-center flex-1 space-y-8 my-auto py-10" id="ai-intro">
<div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 ai-pulse">
<span className="iconify text-white" data-icon="lucide:bot" data-width="40"></span>
</div>
<div className="text-center space-y-3 max-w-md">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                            How can I help you?
                        </h1>
<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            I can help you find apartments, explain contracts, or schedule viewings.
                        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
<button className="text-left p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500/50 hover:shadow-sm transition-all group" onclick="handleAISuggestion('Find affordable apartments in Olaya')">
<span className="iconify text-indigo-500 mb-2 group-hover:scale-110 transition-transform" data-icon="lucide:search" data-width="18"></span>
<div className="text-sm font-medium text-gray-900 dark:text-white">Find apartments</div>
<div className="text-xs text-gray-500 mt-0.5">Under 25,000 SAR in Olaya</div>
</button>
<button className="text-left p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500/50 hover:shadow-sm transition-all group" onclick="handleAISuggestion('How does the Ejar contract work?')">
<span className="iconify text-purple-500 mb-2 group-hover:scale-110 transition-transform" data-icon="lucide:file-text" data-width="18"></span>
<div className="text-sm font-medium text-gray-900 dark:text-white">Ejar Contracts</div>
<div className="text-xs text-gray-500 mt-0.5">Explain the legal process</div>
</button>
</div>
</div>
<div className="hidden flex-col gap-4 pb-4" id="ai-chat-feed"></div>
</div>
<div className="fixed bottom-0 left-0 w-full glass border-t border-gray-200 dark:border-white/10 z-20">
<div className="max-w-3xl mx-auto px-4 py-3">
<form className="relative flex items-end gap-2 bg-gray-100 dark:bg-[#1A1A1A] border border-transparent focus-within:border-gray-300 dark:focus-within:border-white/20 rounded-xl p-2 transition-colors" onsubmit="handleAISubmit(event)">
<button className="p-2 text-gray-400 hover:text-indigo-500 transition-colors" type="button">
<span className="iconify" data-icon="lucide:paperclip" data-width="18"></span>
</button>
<textarea className="w-full bg-transparent border-none focus:ring-0 text-sm text-gray-900 dark:text-white placeholder-gray-500 resize-none py-2 max-h-32" id="ai-input" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" placeholder="Ask Sakani AI..." rows="1"></textarea>
<button className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-sm" type="submit">
<span className="iconify" data-icon="lucide:arrow-up" data-width="18"></span>
</button>
</form>
<div className="text-center mt-2">
<p className="text-[10px] text-gray-400">AI can make mistakes. Please verify important info.</p>
</div>
</div>
</div>
</div>

<div className="view-section hidden bg-[#FAFAFA] dark:bg-[#050505] min-h-screen" id="view-search">
<div className="sticky top-14 z-30 glass border-b border-gray-200 dark:border-white/5 px-4 py-3">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
<div className="flex flex-1 gap-4 w-full md:w-auto items-center">
<div className="relative w-full md:w-80 group">
<span className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-indigo-500 transition-colors"><span className="iconify" data-icon="lucide:search" data-width="14"></span></span>
<input className="w-full pl-9 pr-4 py-2 bg-gray-100/50 dark:bg-white/5 border border-transparent focus:border-gray-200 dark:focus:border-white/10 rounded-md text-sm text-gray-900 dark:text-white focus:ring-0 outline-none placeholder-gray-500 transition-all" id="search-input" oninput="debounceSearch()" placeholder="City, neighborhood..." type="text"/>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="filter-btn px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors whitespace-nowrap bg-white dark:bg-transparent" onclick="setFilter('Apartment')">Apartment</button>
<button className="filter-btn px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors whitespace-nowrap bg-white dark:bg-transparent" onclick="setFilter('Villa')">Villa</button>
</div>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-[#171717] dark:bg-[#EDEDED] text-white dark:text-black rounded-lg text-xs font-medium hover:opacity-90 transition-opacity" id="map-toggle-btn" onclick="toggleMapView()">
<span className="iconify" data-icon="lucide:map" data-width="14"></span> Show Map
                    </button>
</div>
</div>
<div className="relative w-full h-[calc(100vh-8rem)]">

<div className="max-w-7xl mx-auto px-4 py-6 overflow-y-auto h-full" id="list-view-container">
<div className="flex justify-between items-end mb-4">
<h2 className="text-xs font-medium text-gray-500"><span id="results-count">0</span> Results</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-enter" id="search-grid"></div>
</div>

<div className="hidden w-full h-full bg-gray-100 dark:bg-[#111] bg-grid-pattern relative overflow-hidden" id="map-view-container">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
<h1 className="text-9xl font-bold tracking-tighter">MAP VIEW</h1>
</div>

<div className="absolute top-1/4 left-1/4 group cursor-pointer" onclick="viewPropertyDetails(1)">
<div className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg hover:scale-110 transition-transform">SAR 2,500</div>
<div className="w-2 h-2 bg-indigo-600 rotate-45 mx-auto -mt-1"></div>
</div>
<div className="absolute top-1/2 left-1/2 group cursor-pointer" onclick="viewPropertyDetails(2)">
<div className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg hover:scale-110 transition-transform">SAR 3,800</div>
<div className="w-2 h-2 bg-indigo-600 rotate-45 mx-auto -mt-1"></div>
</div>
<div className="absolute bottom-1/3 right-1/4 group cursor-pointer" onclick="viewPropertyDetails(3)">
<div className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg hover:scale-110 transition-transform">SAR 2,900</div>
<div className="w-2 h-2 bg-indigo-600 rotate-45 mx-auto -mt-1"></div>
</div>
<button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full shadow-lg text-xs font-medium flex items-center gap-2 border border-gray-200 dark:border-white/10 hover:bg-gray-50 z-10" onclick="toggleMapView()">
<span className="iconify" data-icon="lucide:list" data-width="14"></span> Show List
                    </button>
</div>
</div>
</div>

<div className="view-section hidden bg-[#FAFAFA] dark:bg-[#050505] min-h-screen" id="view-roommates">
<div className="max-w-7xl mx-auto px-4 py-8 animate-enter">
<div className="mb-8 text-center max-w-2xl mx-auto">
<h1 className="text-3xl font-bold tracking-tight mb-3">Find Compatible Roommates</h1>
<p className="text-gray-500 dark:text-gray-400 text-sm">Based on your habits, budget, and location preferences, we found people who match your lifestyle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="roommate-grid">

</div>
</div>
</div>

<div className="view-section hidden bg-[#FAFAFA] dark:bg-[#050505] min-h-screen py-8" id="view-property-details">
<div className="max-w-5xl mx-auto px-4 animate-enter">
<button className="mb-6 text-xs font-medium text-gray-500 hover:text-black dark:hover:text-white flex items-center transition-colors" onclick="router.navigate('search')"><span className="iconify mr-1" data-icon="lucide:arrow-left" data-width="14"></span> Back</button>
<div className="bg-white dark:bg-[#0F0F0F] rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm overflow-hidden mb-8" id="property-details-content">

</div>

<div className="bg-white dark:bg-[#0F0F0F] rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm overflow-hidden p-6 md:p-8">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold tracking-tight">Reviews &amp; Ratings</h3>
<div className="flex items-center gap-2 mt-1">
<div className="flex text-yellow-400 text-sm">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star-half"></span>
</div>
<span className="text-sm font-medium">4.5</span>
<span className="text-xs text-gray-500">(12 reviews)</span>
</div>
</div>
<button className="text-xs font-medium bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 px-3 py-2 rounded-lg transition-colors">Write a Review</button>
</div>
<div className="space-y-6" id="reviews-list">

</div>
</div>
</div>
</div>

<div className="view-section hidden flex items-center justify-center min-h-[calc(100vh-3.5rem)] p-4" id="view-login">
<div className="w-full max-w-sm bg-white dark:bg-[#0A0A0A] rounded-xl shadow-sm border border-gray-200 dark:border-white/10 p-8 animate-enter">
<div className="mb-6"><h2 className="text-lg font-semibold tracking-tight">Welcome back</h2><p className="text-gray-500 text-xs mt-1">Enter your email to access your account</p></div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-transparent focus:outline-none focus:border-indigo-500" name="email" placeholder="Email address" required="" type="email"/>
<input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-transparent focus:outline-none focus:border-indigo-500" name="password" placeholder="Password" required="" type="password"/>
<button className="w-full bg-[#171717] dark:bg-[#EDEDED] dark:text-black hover:opacity-90 text-white font-medium py-2 rounded-md text-sm transition-all" type="submit">Sign In</button>
</form>
<div className="mt-6 text-center text-xs text-gray-500">New here? <button className="text-gray-900 dark:text-white font-medium hover:underline" onclick="router.navigate('register')">Create account</button></div>
</div>
</div>
<div className="view-section hidden flex items-center justify-center min-h-[calc(100vh-3.5rem)] p-4" id="view-register">
<div className="w-full max-w-sm bg-white dark:bg-[#0A0A0A] rounded-xl shadow-sm border border-gray-200 dark:border-white/10 p-8 animate-enter">
<div className="mb-6"><h2 className="text-lg font-semibold tracking-tight">Create account</h2></div>
<form className="space-y-3" onsubmit="handleRegister(event)">
<input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-transparent outline-none" name="fullName" placeholder="Full Name" required="" type="text"/>
<input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-transparent outline-none" name="email" placeholder="Email Address" required="" type="email"/>
<input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-transparent outline-none" name="password" placeholder="Password" required="" type="password"/>
<button className="w-full bg-[#171717] dark:bg-[#EDEDED] dark:text-black hover:opacity-90 text-white font-medium py-2 rounded-md text-sm mt-2" type="submit">Create Account</button>
</form>
<div className="mt-6 text-center text-xs text-gray-500">Have an account? <button className="text-gray-900 dark:text-white font-medium hover:underline" onclick="router.navigate('login')">Log in</button></div>
</div>
</div>

<div className="view-section hidden bg-[#FAFAFA] dark:bg-[#050505] min-h-screen pb-12" id="view-dashboard">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-enter">
<div className="flex items-end justify-between mb-8 border-b border-gray-200 dark:border-white/5 pb-4">
<div><h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Dashboard</h1><p className="text-xs text-gray-500 mt-1">Manage your rentals and account.</p></div>
</div>
<div className="dashboard-content" id="guest-dashboard">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/5 flex items-center space-x-4"><img className="w-12 h-12 rounded-full object-cover bg-gray-100" id="dash-avatar" src=""/><div className="overflow-hidden"><h3 className="font-medium text-gray-900 dark:text-white text-sm truncate" id="dash-name">User</h3><p className="text-xs text-gray-500 truncate" id="dash-email">user@example.com</p><button className="text-xs text-indigo-600 dark:text-indigo-400 mt-1 hover:underline" onclick="router.navigate('profile')">Settings</button></div></div>
<div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/5"><div className="text-gray-500 text-xs font-medium mb-1">Active Applications</div><div className="flex items-baseline gap-2"><div className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">2</div><span className="text-[10px] text-green-600 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded">In review</span></div></div>
<div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/5"><div className="text-gray-500 text-xs font-medium mb-1">Saved Homes</div><div className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">14</div></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200 dark:border-white/5 flex justify-between items-center bg-gray-50/50 dark:bg-white/[0.02]"><h3 className="text-sm font-medium text-gray-900 dark:text-white">Cards</h3><button className="text-xs text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 px-2 py-1 rounded hover:bg-white transition-colors" onclick="openPaymentModal()">+ Add</button></div>
<div className="p-6 grid gap-3" id="payment-list"></div>
</div>
<div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]"><h3 className="text-sm font-medium text-gray-900 dark:text-white">Recent Bookings</h3></div>
<div className="p-6" id="booking-history"></div>
</div>
</div>
</div>
</div>
</div>
<div className="view-section hidden bg-[#FAFAFA] dark:bg-[#050505] min-h-screen py-8" id="view-profile">
<div className="max-w-xl mx-auto px-4 animate-enter">
<button className="mb-6 text-xs text-gray-500 hover:text-black flex items-center" onclick="router.navigate('dashboard')"><span className="iconify mr-1" data-icon="lucide:arrow-left" data-width="14"></span> Dashboard</button>
<div className="bg-white dark:bg-[#0A0A0A] rounded-xl border border-gray-200 dark:border-white/5 p-8">
<h1 className="text-lg font-semibold tracking-tight mb-6">Settings</h1>
<form className="space-y-5" onsubmit="handleProfileUpdate(event)">
<div className="flex items-center gap-4"><img className="w-16 h-16 rounded-full object-cover bg-gray-100" id="edit-avatar-preview" src=""/><label className="cursor-pointer bg-gray-50 dark:bg-white/5 hover:bg-gray-100 border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-md text-xs font-medium transition-colors">Change Photo<input className="hidden" onchange="handleAvatarChange(event)" type="file"/></label></div>
<div className="grid gap-4">
<div><label className="block text-xs font-medium text-gray-500 mb-1.5">Full Name</label><input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-transparent outline-none" id="edit-fullname" type="text"/></div>
<div><label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label><input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-400 cursor-not-allowed" disabled="" id="edit-email" type="email"/></div>
</div>
<div className="pt-2"><button className="bg-[#171717] dark:bg-[#EDEDED] dark:text-black text-white px-4 py-2 rounded-md text-sm font-medium" type="submit">Save Changes</button></div>
</form>
</div>
</div>
</div>

<div className="view-section hidden bg-[#FAFAFA] dark:bg-[#050505] min-h-screen py-8" id="view-booking">
<div className="max-w-4xl mx-auto px-4 animate-enter">
<button className="mb-6 text-xs text-gray-500 flex items-center hover:text-black" onclick="history.back()"><span className="iconify mr-1" data-icon="lucide:arrow-left" data-width="14"></span> Back</button>
<h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">Confirm Booking</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-white dark:bg-[#0A0A0A] rounded-xl border border-gray-200 dark:border-white/5 p-6 h-fit">
<h2 className="text-sm font-medium mb-4">Trip Details</h2>
<form className="space-y-4" onsubmit="handleBookingSubmit(event)">
<div className="grid grid-cols-2 gap-3">
<div><label className="block text-xs text-gray-500 mb-1">Check-in</label><input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-transparent outline-none" name="checkin" required="" type="date"/></div>
<div><label className="block text-xs text-gray-500 mb-1">Check-out</label><input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-transparent outline-none" name="checkout" required="" type="date"/></div>
</div>
<div className="pt-2">
<label className="block text-xs text-gray-500 mb-1">Promo Code</label>
<div className="flex gap-2">
<input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-transparent outline-none" placeholder="SAKANI24" type="text"/>
<button className="bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 px-3 py-2 rounded-md text-xs font-medium" type="button">Apply</button>
</div>
</div>
<button className="w-full bg-[#171717] dark:bg-[#EDEDED] dark:text-black text-white py-2.5 rounded-md text-sm font-medium mt-2" type="submit">Confirm &amp; Pay</button>
</form>
</div>
<div className="bg-white dark:bg-[#0A0A0A] rounded-xl border border-gray-200 dark:border-white/5 p-6 h-fit">
<div id="booking-property-summary"></div>
<div className="border-t border-dashed border-gray-200 dark:border-white/10 my-4 pt-4 space-y-2"><div className="flex justify-between text-sm"><span className="text-gray-500">Total</span> <span className="font-semibold" id="booking-total"></span></div></div>
</div>
</div>
</div>
</div>

<div className="view-section hidden bg-[#FAFAFA] dark:bg-[#050505] min-h-screen p-8" id="view-admin">
<div className="max-w-6xl mx-auto animate-enter">
<div className="flex justify-between items-center mb-8"><h1 className="text-xl font-semibold tracking-tight">Admin Console</h1><button className="text-xs font-medium text-gray-500 hover:text-black" onclick="router.navigate('home')">Exit</button></div>
<div className="grid grid-cols-4 gap-4 mb-8">
<div className="bg-white dark:bg-white/5 p-4 rounded-lg border border-gray-200 dark:border-white/5"><div className="text-xs text-gray-500">Users</div><div className="text-xl font-semibold" id="admin-total-users">0</div></div>
<div className="bg-white dark:bg-white/5 p-4 rounded-lg border border-gray-200 dark:border-white/5"><div className="text-xs text-gray-500">Listings</div><div className="text-xl font-semibold" id="admin-total-listings">0</div></div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-[60] hidden" id="payment-modal"><div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-sm" onclick="closeModal('payment-modal')"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#0A0A0A] w-full max-w-sm rounded-xl shadow-lg border border-gray-200 dark:border-white/10 p-6 animate-enter"><h3 className="text-sm font-semibold mb-4">Add Card</h3><form className="space-y-3" onsubmit="handleAddPayment(event)"><input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-transparent outline-none" name="cardHolder" placeholder="Cardholder Name" required="" type="text"/><input className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-white/10 bg-transparent outline-none font-mono" placeholder="0000 0000 0000 0000" type="text"/><button className="w-full bg-[#171717] dark:bg-[#EDEDED] dark:text-black text-white py-2 rounded-md text-sm font-medium mt-2" type="submit">Save</button></form></div></div>
<div className="fixed bottom-6 right-6 hidden z-[100]" id="notification"><div className="bg-[#171717] dark:bg-white text-white dark:text-black px-4 py-2.5 rounded-lg shadow-lg text-xs font-medium flex items-center gap-2 animate-enter"><span className="iconify" data-icon="lucide:check-circle" data-width="14"></span><span id="notification-text">Success</span></div></div>


    </>
  );
}
