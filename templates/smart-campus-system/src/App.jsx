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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
display: ['"Outfit"', 'sans-serif'],
},
colors: {
deep: '#030712',
surface: '#0f172a',
surface2: '#1e293b',
accent: '#6366f1', // Indigo
accent2: '#14b8a6', // Teal
accent3: '#f43f5e', // Rose
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // --- State Management ---
        const state = {
            user: null, // { name, role, email }
            currentView: 'home',
            lostFoundItems: [
                { id: 1, type: 'lost', name: 'Blue Water Bottle', brand: 'Milton', color: 'Blue', location: 'Library', remark: 'Left on table 4', owner: 'Alice', phone: '1234567890', date: new Date().toISOString() },
                { id: 2, type: 'found', name: 'Calculus Textbook', brand: 'Pearson', color: 'Red', location: 'Canteen', remark: 'Found near counter', finder: 'Bob', phone: '0987654321', date: new Date(Date.now() - 86400000).toISOString() }
            ],
            resources: [
                { id: 1, name: 'Data Structures Notes', course: 'B.Tech', subject: 'CS', uploader: 'Senior Dev', link: '#' },
                { id: 2, name: 'Physics PYQ 2023', course: 'B.Sc', subject: 'Physics', uploader: 'Einstein Jr', link: '#' }
            ],
            complaints: [
                { id: 1, item: 'Projector', class: 'CS-A', dept: 'CSE', floor: '2nd', desc: 'Bulb not working', status: 'In Progress', date: new Date().toISOString() }
            ]
        };

        // --- Auth Functions ---
        const loginForm = document.getElementById('login-form');
        
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const pass = document.getElementById('login-pass').value;

            // Simple Auth Simulation
            if (email === 'admin@college.edu' && pass === 'admin123') {
                authenticateUser({ name: 'Admin User', email, role: 'admin' });
            } else if (email.includes('@') && pass.length > 0) {
                authenticateUser({ name: email.split('@')[0], email, role: 'user' });
            } else {
                showToast('Error', 'Invalid credentials');
            }
        });

        function authenticateUser(userObj) {
            state.user = userObj;
            document.getElementById('auth-view').classList.add('hidden-el');
            const app = document.getElementById('app-layout');
            app.classList.remove('hidden-el');
            requestAnimationFrame(() => app.classList.remove('opacity-0'));
            
            // Update Sidebar
            document.getElementById('user-name').innerText = userObj.name;
            document.getElementById('user-role').innerText = userObj.role.toUpperCase();
            document.getElementById('user-avatar').innerText = userObj.name.charAt(0).toUpperCase();

            router('home');
        }

        function logout() {
            state.user = null;
            location.reload();
        }

        // --- Routing & Rendering ---
        function router(view) {
            state.currentView = view;
            
            // Update active state in sidebar
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('bg-white/5', 'text-white');
                if(btn.innerText.toLowerCase().includes(view.replace('-', ' '))) {
                    btn.classList.add('bg-white/5', 'text-white');
                }
            });

            const container = document.getElementById('content-container');
            container.innerHTML = ''; // Clear content
            
            // Render specific view
            switch(view) {
                case 'home': renderHome(container); break;
                case 'lost-found': renderLostFound(container); break;
                case 'resources': renderResources(container); break;
                case 'complaints': renderComplaints(container); break;
                case 'contact': renderContact(container); break;
                case 'about': renderAbout(container); break;
            }
        }

        function mobileNav(view) {
            document.getElementById('mobile-menu').classList.add('hidden-el');
            router(view);
        }

        // --- Views ---

        function renderHome(container) {
            container.innerHTML = `
                <div class="animate-slide-up">
                    <h1 class="font-display text-3xl md:text-4xl font-bold mb-2">Welcome back, <span class="text-accent">${state.user.name}</span></h1>
                    <p class="text-gray-400 mb-8">Here's what's happening on campus today.</p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Card 1 -->
                        <div onclick="router('lost-found')" class="glass-card p-6 rounded-2xl cursor-pointer hover:border-accent2/50 transition-colors group stagger-1 animate-slide-up">
                            <div class="w-12 h-12 bg-accent2/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <iconify-icon icon="solar:object-scan-linear" class="text-accent2 text-2xl"></iconify-icon>
                            </div>
                            <h3 class="font-bold text-lg mb-1">Lost & Found</h3>
                            <p class="text-sm text-gray-400">Report items or find what you've lost.</p>
                        </div>
                        
                        <!-- Card 2 -->
                        <div onclick="router('resources')" class="glass-card p-6 rounded-2xl cursor-pointer hover:border-accent/50 transition-colors group stagger-2 animate-slide-up">
                            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <iconify-icon icon="solar:library-linear" class="text-accent text-2xl"></iconify-icon>
                            </div>
                            <h3 class="font-bold text-lg mb-1">Resource Exchange</h3>
                            <p class="text-sm text-gray-400">Share notes and access PYQs.</p>
                        </div>

                         <!-- Card 3 -->
                        <div onclick="router('complaints')" class="glass-card p-6 rounded-2xl cursor-pointer hover:border-accent3/50 transition-colors group stagger-3 animate-slide-up">
                            <div class="w-12 h-12 bg-accent3/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <iconify-icon icon="solar:buildings-linear" class="text-accent3 text-2xl"></iconify-icon>
                            </div>
                            <h3 class="font-bold text-lg mb-1">Infrastructure</h3>
                            <p class="text-sm text-gray-400">Report broken items or issues.</p>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderLostFound(container) {
            // Find Matches Logic
            const matches = [];
            const lostItems = state.lostFoundItems.filter(i => i.type === 'lost');
            const foundItems = state.lostFoundItems.filter(i => i.type === 'found');

            lostItems.forEach(l => {
                foundItems.forEach(f => {
                    // Simple matching: Brand + Name match
                    if(l.brand.toLowerCase() === f.brand.toLowerCase() || l.name.toLowerCase().includes(f.name.toLowerCase())) {
                        matches.push({ lost: l, found: f });
                    }
                })
            })

            container.innerHTML = `
                <div class="animate-slide-up space-y-6">
                    <div class="flex justify-between items-end">
                        <div>
                            <h2 class="font-display text-3xl font-bold">Lost & Found</h2>
                            <p class="text-gray-400 text-sm">Report items or browse the list.</p>
                        </div>
                        <div class="flex gap-2">
                             <button onclick="switchTab('lost-form')" class="bg-accent/10 text-accent hover:bg-accent hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-accent/20">Report Lost</button>
                             <button onclick="switchTab('found-form')" class="bg-accent2/10 text-accent2 hover:bg-accent2 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-accent2/20">Report Found</button>
                        </div>
                    </div>

                    <!-- Matches Alert -->
                    ${matches.length > 0 ? `
                    <div class="glass-card p-4 rounded-xl border-l-4 border-green-500 bg-green-500/5">
                        <h3 class="text-green-400 font-bold flex items-center gap-2"><iconify-icon icon="solar:check-circle-bold"></iconify-icon> ${matches.length} Potential Match(es) Found!</h3>
                        <p class="text-xs text-gray-400 mt-1">Please check the items below closely.</p>
                        <div class="mt-2 space-y-2">
                            ${matches.map(m => `
                                <div class="text-sm bg-black/20 p-2 rounded border border-white/5 flex justify-between items-center">
                                    <span>${m.lost.name} (${m.lost.color}) matched with Found item by ${m.found.finder}</span>
                                    <button class="text-xs bg-white/10 px-2 py-1 rounded hover:bg-white/20">Contact ${m.found.phone}</button>
                                </div>
                            `).join('')}
                        </div>
                    </div>` : ''}

                    <!-- Forms (Hidden by default) -->
                    <div id="lost-form" class="hidden-el glass-card p-6 rounded-2xl border border-accent/30">
                        <h3 class="text-lg font-bold mb-4 text-accent">Report Lost Item</h3>
                        <form onsubmit="handleLostFoundSubmit(event, 'lost')" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Item Name" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Brand (Optional)" class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Color" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Location Lost" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Your Name" value="${state.user.name}" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Phone Number" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Remark" class="col-span-1 md:col-span-2 w-full px-4 py-2 rounded-lg text-sm">
                            <div class="col-span-1 md:col-span-2">
                                <label class="text-xs text-gray-500 block mb-1">Upload Image (Optional)</label>
                                <input type="file" class="text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20">
                            </div>
                            <button type="submit" class="col-span-1 md:col-span-2 bg-accent text-white py-2 rounded-lg font-medium hover:bg-indigo-600 transition">Submit Lost Report</button>
                        </form>
                    </div>

                    <div id="found-form" class="hidden-el glass-card p-6 rounded-2xl border border-accent2/30">
                        <h3 class="text-lg font-bold mb-4 text-accent2">Report Found Item</h3>
                        <form onsubmit="handleLostFoundSubmit(event, 'found')" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Item Name" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Brand (Optional)" class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Color" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Location Found" class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Finder Name" value="${state.user.name}" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Phone Number" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <button type="submit" class="col-span-1 md:col-span-2 bg-accent2 text-white py-2 rounded-lg font-medium hover:bg-teal-600 transition">Submit Found Report</button>
                        </form>
                    </div>

                    <!-- Items Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="font-bold mb-3 text-red-400 flex items-center gap-2"><iconify-icon icon="solar:sad-circle-linear"></iconify-icon> Lost Items</h3>
                            <div class="space-y-3">
                                ${state.lostFoundItems.filter(i => i.type === 'lost').map(item => `
                                    <div class="glass p-4 rounded-xl border-l-2 border-red-500 hover:bg-white/5 transition">
                                        <div class="flex justify-between items-start">
                                            <h4 class="font-bold text-sm">${item.name}</h4>
                                            <span class="text-[10px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded-full">${item.brand || 'Generic'}</span>
                                        </div>
                                        <p class="text-xs text-gray-400 mt-1">Color: ${item.color} • Loc: ${item.location}</p>
                                        <p class="text-xs text-gray-500 mt-2">Owner: ${item.owner}</p>
                                        ${state.user.role === 'admin' ? `<button onclick="deleteItem(${item.id})" class="text-[10px] text-red-500 mt-2 underline">Delete (Admin)</button>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h3 class="font-bold mb-3 text-emerald-400 flex items-center gap-2"><iconify-icon icon="solar:smile-circle-linear"></iconify-icon> Found Items</h3>
                             <div class="space-y-3">
                                ${state.lostFoundItems.filter(i => i.type === 'found').map(item => `
                                    <div class="glass p-4 rounded-xl border-l-2 border-emerald-500 hover:bg-white/5 transition">
                                        <div class="flex justify-between items-start">
                                            <h4 class="font-bold text-sm">${item.name}</h4>
                                            <span class="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">${item.brand || 'Generic'}</span>
                                        </div>
                                        <p class="text-xs text-gray-400 mt-1">Color: ${item.color} • Found @ ${item.location || 'Unknown'}</p>
                                        <p class="text-xs text-gray-500 mt-2">Finder: ${item.finder}</p>
                                        ${state.user.role === 'admin' ? `<button onclick="deleteItem(${item.id})" class="text-[10px] text-red-500 mt-2 underline">Delete (Admin)</button>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function switchTab(id) {
            document.querySelectorAll('#lost-form, #found-form').forEach(el => el.classList.add('hidden-el'));
            document.getElementById(id).classList.remove('hidden-el');
        }

        function handleLostFoundSubmit(e, type) {
            e.preventDefault();
            const inputs = e.target.querySelectorAll('input');
            const newItem = {
                id: Date.now(),
                type: type,
                name: inputs[0].value,
                brand: inputs[1].value,
                color: inputs[2].value,
                location: inputs[3].value,
                owner: type === 'lost' ? inputs[4].value : undefined,
                finder: type === 'found' ? inputs[4].value : undefined,
                phone: inputs[5].value,
                date: new Date().toISOString()
            };
            
            state.lostFoundItems.unshift(newItem);
            showToast('Success', `${type === 'lost' ? 'Lost' : 'Found'} item reported.`);
            switchTab('none'); // hide form
            router('lost-found'); // refresh
        }

        function deleteItem(id) {
            if(!confirm('Delete this item?')) return;
            state.lostFoundItems = state.lostFoundItems.filter(i => i.id !== id);
            router('lost-found');
        }

        function renderResources(container) {
            container.innerHTML = `
                 <div class="animate-slide-up">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                        <div>
                            <h2 class="font-display text-3xl font-bold">Resource Exchange</h2>
                            <p class="text-gray-400 text-sm">Share knowledge, notes, and previous year questions.</p>
                        </div>
                        <button onclick="document.getElementById('res-form').classList.toggle('hidden-el')" class="bg-accent hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2">
                            <iconify-icon icon="solar:upload-minimalistic-linear"></iconify-icon> Upload Resource
                        </button>
                    </div>

                    <!-- Upload Form -->
                    <div id="res-form" class="hidden-el glass-card p-6 rounded-2xl mb-8 border border-accent/20">
                        <form onsubmit="handleResourceSubmit(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Resource Name (e.g., Physics Notes)" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Course Name" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="text" placeholder="Subject Name" required class="w-full px-4 py-2 rounded-lg text-sm">
                            <input type="file" accept=".pdf" required class="w-full text-sm text-gray-400 file:bg-white/10 file:border-0 file:rounded-full file:mr-4 file:py-1 file:px-3 file:text-white">
                            <input type="text" placeholder="Tips for juniors (Optional)" class="col-span-1 md:col-span-2 w-full px-4 py-2 rounded-lg text-sm">
                            <button type="submit" class="col-span-1 md:col-span-2 bg-white text-black font-bold py-2 rounded-lg hover:bg-gray-200">Upload PDF</button>
                        </form>
                    </div>

                    <!-- Resource Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${state.resources.map((res, index) => `
                            <div class="glass-card p-5 rounded-xl hover:border-accent/40 transition-all group animate-slide-up" style="animation-delay: ${index * 100}ms">
                                <div class="flex justify-between items-start mb-3">
                                    <div class="bg-red-500/20 text-red-400 w-10 h-10 rounded-lg flex items-center justify-center">
                                        <iconify-icon icon="solar:file-text-bold" class="text-xl"></iconify-icon>
                                    </div>
                                    <span class="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-400">${res.course}</span>
                                </div>
                                <h4 class="font-bold text-lg mb-1 truncate">${res.name}</h4>
                                <p class="text-xs text-gray-400 mb-4">${res.subject} • By ${res.uploader}</p>
                                <button class="w-full py-2 rounded-lg border border-white/10 hover:bg-white/10 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                    <iconify-icon icon="solar:download-minimalistic-linear"></iconify-icon> Download PDF
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function handleResourceSubmit(e) {
            e.preventDefault();
            const inputs = e.target.querySelectorAll('input');
            state.resources.unshift({
                id: Date.now(),
                name: inputs[0].value,
                course: inputs[1].value,
                subject: inputs[2].value,
                uploader: state.user.name,
                link: '#'
            });
            showToast('Success', 'Resource uploaded successfully.');
            document.getElementById('res-form').classList.add('hidden-el');
            router('resources');
        }

        function renderComplaints(container) {
            container.innerHTML = `
                <div class="animate-slide-up">
                    <h2 class="font-display text-3xl font-bold mb-2">Infrastructure Complaints</h2>
                    <p class="text-gray-400 text-sm mb-6">Track and report campus facility issues.</p>

                     <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <!-- Complaint Form -->
                        <div class="glass-card p-6 rounded-2xl h-fit">
                            <h3 class="font-bold text-lg mb-4 text-accent3">File a Complaint</h3>
                            <form onsubmit="handleComplaintSubmit(event)" class="space-y-4">
                                <input type="text" placeholder="Item Name (e.g. Fan, Desk)" required class="w-full px-4 py-2 rounded-lg text-sm">
                                <div class="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="Class Name" required class="w-full px-4 py-2 rounded-lg text-sm">
                                    <input type="text" placeholder="Floor" required class="w-full px-4 py-2 rounded-lg text-sm">
                                </div>
                                <input type="text" placeholder="Department" required class="w-full px-4 py-2 rounded-lg text-sm">
                                <textarea placeholder="Description of the issue..." required class="w-full px-4 py-2 rounded-lg text-sm h-24 bg-deep/50 resize-none"></textarea>
                                <button type="submit" class="w-full bg-accent3 hover:bg-rose-600 text-white font-bold py-2.5 rounded-lg shadow-lg shadow-rose-500/20 transition">Submit Complaint</button>
                            </form>
                        </div>

                        <!-- Status List -->
                        <div class="lg:col-span-2 space-y-4">
                            <h3 class="font-bold text-lg">Recent Reports</h3>
                            ${state.complaints.map(c => `
                                <div class="glass p-5 rounded-xl border-l-4 ${c.status === 'Resolved' ? 'border-green-500' : 'border-yellow-500'} flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <div class="flex items-center gap-3 mb-1">
                                            <h4 class="font-bold text-base">${c.item}</h4>
                                            <span class="text-[10px] px-2 py-0.5 rounded-full ${c.status === 'Resolved' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}">${c.status}</span>
                                        </div>
                                        <p class="text-xs text-gray-400">${c.dept} • ${c.class} • ${c.floor}</p>
                                        <p class="text-sm text-gray-300 mt-2">"${c.desc}"</p>
                                    </div>
                                    ${state.user.role === 'admin' ? `
                                        <div class="flex gap-2">
                                            <button onclick="updateStatus(${c.id}, 'In Progress')" class="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded hover:bg-yellow-500/30">WIP</button>
                                            <button onclick="updateStatus(${c.id}, 'Resolved')" class="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded hover:bg-green-500/30">Done</button>
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        function handleComplaintSubmit(e) {
            e.preventDefault();
            const inputs = e.target.querySelectorAll('input, textarea');
            state.complaints.unshift({
                id: Date.now(),
                item: inputs[0].value,
                class: inputs[1].value,
                floor: inputs[2].value,
                dept: inputs[3].value,
                desc: inputs[4].value,
                status: 'In Progress',
                date: new Date().toISOString()
            });
            showToast('Success', 'Complaint submitted to Admin.');
            router('complaints');
        }

        function updateStatus(id, newStatus) {
            const item = state.complaints.find(c => c.id === id);
            if(item) {
                item.status = newStatus;
                router('complaints');
                showToast('Updated', `Status changed to ${newStatus}`);
            }
        }

        function renderContact(container) {
            container.innerHTML = `
                <div class="animate-slide-up max-w-2xl mx-auto text-center pt-10">
                    <h2 class="font-display text-4xl font-bold mb-4">Get in Touch</h2>
                    <p class="text-gray-400 mb-10">We are here to help you. Choose a platform to reach us.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a href="mailto:sachinpanwarpay@gmail.com" target="_blank" class="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
                            <div class="w-16 h-16 bg-red-500/10 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors text-red-500">
                                <iconify-icon icon="solar:letter-linear" class="text-3xl"></iconify-icon>
                            </div>
                            <h3 class="font-bold text-lg">Email</h3>
                            <p class="text-xs text-gray-500 mt-2">sachinpanwarpay@gmail.com</p>
                        </a>

                         <a href="https://wa.me/917017394367" target="_blank" class="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
                            <div class="w-16 h-16 bg-green-500/10 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors text-green-500">
                                <iconify-icon icon="logos:whatsapp-icon" class="text-3xl grayscale group-hover:grayscale-0 transition-all"></iconify-icon>
                            </div>
                            <h3 class="font-bold text-lg">WhatsApp</h3>
                            <p class="text-xs text-gray-500 mt-2">+91 7017394367</p>
                        </a>

                         <a href="https://www.instagram.com/isachin.panwar?igsh=MXIxeGFxcXR2dThuYw==" target="_blank" class="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
                            <div class="w-16 h-16 bg-pink-500/10 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors text-pink-500">
                                <iconify-icon icon="logos:instagram-icon" class="text-3xl grayscale group-hover:grayscale-0 transition-all"></iconify-icon>
                            </div>
                            <h3 class="font-bold text-lg">Instagram</h3>
                            <p class="text-xs text-gray-500 mt-2">@isachin.panwar</p>
                        </a>
                    </div>
                </div>
            `;
        }

        function renderAbout(container) {
            container.innerHTML = `
                <div class="animate-slide-up max-w-4xl mx-auto">
                    <div class="glass-card p-8 md:p-12 rounded-3xl text-center mb-8 relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-accent2 to-accent3"></div>
                        <h2 class="font-display text-3xl md:text-5xl font-bold mb-6">Smart Student Utility System</h2>
                        <p class="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            A comprehensive digital ecosystem designed to bridge the gap between students, administration, and campus resources. 
                            Our platform unifies lost & found reporting, resource sharing, and facility management into a single, intuitive interface.
                        </p>
                        <div class="flex flex-wrap justify-center gap-4">
                            <span class="px-4 py-2 bg-white/5 rounded-full text-xs font-mono text-accent border border-accent/20">v1.0.0</span>
                            <span class="px-4 py-2 bg-white/5 rounded-full text-xs font-mono text-gray-400 border border-white/10">React/Tailwind Architecture</span>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 border border-white/5 rounded-xl">
                            <h3 class="font-bold text-white mb-2">Our Mission</h3>
                            <p class="text-sm text-gray-400">To create a seamless, paperless campus environment where technology solves everyday student hurdles efficiently.</p>
                        </div>
                        <div class="p-6 border border-white/5 rounded-xl">
                            <h3 class="font-bold text-white mb-2">Modules</h3>
                            <p class="text-sm text-gray-400">Featuring Lost & Found matching algorithms, centralized academic resource repositories, and real-time infrastructure complaint tracking.</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // --- Utilities ---
        function showToast(title, msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-title').innerText = title;
            document.getElementById('toast-msg').innerText = msg;
            toast.classList.remove('translate-x-full');
            setTimeout(() => {
                toast.classList.add('translate-x-full');
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
      
<div className="bg-noise"></div>

<div className="fixed top-5 right-5 z-[100] translate-x-full transition-transform duration-500 max-w-sm w-full" id="toast">
<div className="glass-card p-4 rounded-xl border-l-4 border-accent flex items-start gap-3 shadow-2xl">
<div className="text-accent mt-1">
<iconify-icon icon="solar:info-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-white text-sm" id="toast-title">Notification</h4>
<p className="text-xs text-gray-400 mt-1" id="toast-msg">Message content goes here.</p>
</div>
</div>
</div>

<section className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep" id="auth-view">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="glass-card w-full max-w-md p-8 rounded-2xl relative z-10 animate-slide-up">
<div className="text-center mb-8">
<div className="w-12 h-12 mx-auto bg-gradient-to-tr from-accent to-accent2 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
<iconify-icon className="text-white text-2xl" icon="solar:atom-linear"></iconify-icon>
</div>
<h1 className="font-display text-3xl font-bold tracking-tight text-white mb-2">Smart Campus</h1>
<p className="text-sm text-gray-400">Student Utility System</p>
</div>

<form className="space-y-4" id="login-form">
<div>
<label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Email</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-gray-500" icon="solar:letter-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm" id="login-email" placeholder="student@college.edu" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Password</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-gray-500" icon="solar:lock-keyhole-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm" id="login-pass" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<button className="w-full bg-accent hover:bg-indigo-600 text-white font-semibold py-2.5 rounded-lg shadow-lg shadow-indigo-500/20 transition-all text-sm" type="submit">
                    Sign In
                </button>
</form>
<p className="text-center text-xs text-gray-500 mt-6">
                Don't have an account? <a className="text-accent hover:underline" href="#" onclick="alert('Registration simulates automatic approval for this demo.')">Register</a>
</p>
<div className="mt-4 text-center">
<p className="text-[10px] text-gray-600">Demo Admin: admin@college.edu | admin123</p>
<p className="text-[10px] text-gray-600">Demo User: user@college.edu | user123</p>
</div>
</div>
</section>

<div className="flex h-screen hidden-el opacity-0 transition-opacity duration-500" id="app-layout">

<aside className="w-64 glass border-r border-white/5 flex-col hidden md:flex z-20">
<div className="p-6 border-b border-white/5 flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-accent to-purple-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:atom-bold"></iconify-icon>
</div>
<span className="font-display font-bold text-lg tracking-tight">Smart Campus</span>
</div>
<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
<button className="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors group active-nav" onclick="router('home')">
<iconify-icon className="text-lg group-hover:text-accent transition-colors" icon="solar:home-smile-linear"></iconify-icon>
                    Home
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors group" onclick="router('lost-found')">
<iconify-icon className="text-lg group-hover:text-accent2 transition-colors" icon="solar:object-scan-linear"></iconify-icon>
                    Lost &amp; Found
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors group" onclick="router('resources')">
<iconify-icon className="text-lg group-hover:text-accent transition-colors" icon="solar:library-linear"></iconify-icon>
                    Resource Exchange
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors group" onclick="router('complaints')">
<iconify-icon className="text-lg group-hover:text-accent3 transition-colors" icon="solar:buildings-linear"></iconify-icon>
                    Infrastructure
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors group" onclick="router('contact')">
<iconify-icon className="text-lg group-hover:text-white transition-colors" icon="solar:chat-round-call-linear"></iconify-icon>
                    Contact Us
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors group" onclick="router('about')">
<iconify-icon className="text-lg group-hover:text-white transition-colors" icon="solar:info-square-linear"></iconify-icon>
                    About Us
                </button>
</nav>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center text-xs font-bold" id="user-avatar">
                        U
                    </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-white" id="user-name">User Name</p>
<p className="text-xs text-gray-400 truncate" id="user-role">Student</p>
</div>
<button className="text-gray-400 hover:text-red-400 transition-colors" onclick="logout()">
<iconify-icon icon="solar:logout-2-linear"></iconify-icon>
</button>
</div>
</div>
</aside>

<header className="md:hidden fixed top-0 w-full z-40 glass border-b border-white/5 h-16 flex items-center justify-between px-4">
<span className="font-display font-bold text-lg">Smart Campus</span>
<button className="text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden-el')">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</header>

<div className="hidden-el fixed inset-0 z-50 bg-deep/95 backdrop-blur-xl p-6 flex flex-col justify-center gap-6 text-center md:hidden" id="mobile-menu">
<button className="text-xl font-medium" onclick="mobileNav('home')">Home</button>
<button className="text-xl font-medium" onclick="mobileNav('lost-found')">Lost &amp; Found</button>
<button className="text-xl font-medium" onclick="mobileNav('resources')">Resources</button>
<button className="text-xl font-medium" onclick="mobileNav('complaints')">Complaints</button>
<button className="text-xl font-medium" onclick="mobileNav('contact')">Contact</button>
<button className="text-xl font-medium" onclick="mobileNav('about')">About</button>
<button className="text-red-400 mt-4" onclick="logout()">Logout</button>
<button className="absolute top-4 right-4 text-2xl" onclick="document.getElementById('mobile-menu').classList.add('hidden-el')">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<main className="flex-1 overflow-y-auto relative pt-16 md:pt-0">
<div className="p-4 md:p-8 max-w-7xl mx-auto min-h-full pb-20" id="content-container">

</div>

<footer className="mt-auto py-6 text-center border-t border-white/5 bg-deep">
<p className="text-xs text-gray-500 mb-2">Developed by Sachin Panwar</p>
<div className="flex justify-center gap-4 text-gray-400">
<a className="hover:text-accent transition-colors" href="mailto:sachinpanwarpay@gmail.com"><iconify-icon icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-green-500 transition-colors" href="https://wa.me/917017394367"><iconify-icon icon="logos:whatsapp-icon" width="16"></iconify-icon></a>
<a className="hover:text-pink-500 transition-colors" href="https://www.instagram.com/isachin.panwar?igsh=MXIxeGFxcXR2dThuYw=="><iconify-icon icon="logos:instagram-icon" width="16"></iconify-icon></a>
</div>
</footer>
</main>
</div>



    </>
  );
}
