import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // ================= STATE MANAGEMENT =================
        const DEFAULT_DB = {
            apps: [
                { id: 1, name: "Chamet", earn: "₹20,000 - ₹1,00,000", req: "Female, Fluent English", desc: "Global #1 video chat platform. High traffic, weekly payments, strict policy.", traffic: "High" },
                { id: 2, name: "Poppo Live", earn: "₹15,000 - ₹80,000", req: "Female, 18+", desc: "Task-based earning system. Ideal for beginners. Daily withdrawals available.", traffic: "Med" },
                { id: 3, name: "Eloelo", earn: "₹10,000 - ₹50,000", req: "Talent, Any Gender", desc: "India's homegrown live app. Host games, chat, and showcase talent.", traffic: "High" }
            ],
            partners: [
                { id: 1, name: "Star Talent", role: "Sub-Agency", phone: "919876543210" },
                { id: 2, name: "Moon Media", role: "Recruitment", phone: "919876543210" }
            ],
            reviews: [
                { id: 1, user: "Priya Sharma", role: "Chamet Host", text: "I started with zero experience. Shark Agency guided me perfectly. Now I earn 50k monthly from home.", stars: 5 },
                { id: 2, user: "Rahul Verma", role: "Sub-Agent", text: "Best agency for settlement. Payments are always on time. Very professional behavior.", stars: 5 }
            ],
            contact: {
                phone: "917808724651",
                email: "insharkagency@gmail.com"
            }
        };

        let db = { ...DEFAULT_DB };
        let isAdmin = false;

        // Initialize
        window.addEventListener('DOMContentLoaded', () => {
            loadData();
            checkSession();
            // Handle URL routing based on hash or default to home
            const hash = window.location.hash.replace('#', '') || 'home';
            navigate(hash);
        });

        // ================= ROUTING & RENDERING =================
        function navigate(page) {
            const root = document.getElementById('app-root');
            window.location.hash = page;
            window.scrollTo(0, 0);
            
            // Render specific page
            let content = '';
            switch(page) {
                case 'home': content = renderHome(); break;
                case 'apps': content = renderApps(); break;
                case 'partners': content = renderPartners(); break;
                case 'reviews': content = renderReviews(); break;
                case 'about': content = renderAbout(); break;
                case 'contact': content = renderContact(); break;
                default: content = renderHome();
            }

            // Animate transition
            root.innerHTML = `<div class="fade-in">${content}</div>`;
        }

        // --- PAGE COMPONENTS ---

        function renderHome() {
            return `
                <section class="text-center py-12 md:py-24">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
                        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Live Recruitment 2025
                    </div>
                    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tighter-custom">
                        Monetize Your <br class="hidden md:block" />
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Social Presence</span>
                    </h1>
                    <p class="text-slate-400 max-w-2xl mx-auto text-base md:text-xl mb-10 leading-relaxed font-light">
                        Join India's fastest-growing agency for live streaming apps. We provide direct IDs, training, and 24/7 support for hosts and sub-agencies.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onclick="navigate('apps')" class="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-cyan-50 transition shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 text-sm">
                            View Opportunities <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>
                        </button>
                        <button onclick="navigate('contact')" class="glass text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition flex items-center justify-center gap-2 border border-white/10 text-sm">
                            <iconify-icon icon="solar:chat-round-line-duotone" class="text-xl text-green-400"></iconify-icon> Chat on WhatsApp
                        </button>
                    </div>

                    <!-- Stats -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
                        ${renderStat('5,000+', 'Active Hosts')}
                        ${renderStat('₹1 Crore+', 'Paid Monthly')}
                        ${renderStat('Weekly', 'Settlements')}
                        ${renderStat('24/7', 'Support Team')}
                    </div>
                </section>
            `;
        }

        function renderStat(val, label) {
            return `
                <div class="glass-card p-6 rounded-2xl">
                    <h3 class="text-3xl font-bold text-white mb-1 tracking-tight">${val}</h3>
                    <p class="text-xs text-slate-400 uppercase tracking-wider font-medium">${label}</p>
                </div>
            `;
        }

        function renderApps() {
            let html = `
                <div class="mb-10 text-center md:text-left">
                    <h2 class="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tighter-custom">Available Apps</h2>
                    <p class="text-slate-400">Choose a platform that suits your skills. Tap apply to start earning.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            `;

            db.apps.forEach(app => {
                html += `
                    <div class="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition duration-300 relative">
                        ${getAdminControls('app', app.id)}
                        <div class="flex justify-between items-start mb-4">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white border border-white/5">
                                <span class="font-bold text-lg">${app.name[0]}</span>
                            </div>
                            <span class="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-green-500/20">Verified</span>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-1">${app.name}</h3>
                        <p class="text-cyan-400 text-sm font-semibold mb-3">${app.earn}/month</p>
                        <p class="text-slate-400 text-sm mb-6 min-h-[48px] leading-relaxed">${app.desc}</p>
                        
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center gap-2 text-xs text-slate-300">
                                <iconify-icon icon="solar:user-circle-linear" class="text-slate-500 text-base"></iconify-icon>
                                ${app.req}
                            </div>
                             <div class="flex items-center gap-2 text-xs text-slate-300">
                                <iconify-icon icon="solar:graph-up-linear" class="text-slate-500 text-base"></iconify-icon>
                                Traffic: <span class="text-white">${app.traffic}</span>
                            </div>
                        </div>

                        <a href="https://wa.me/${db.contact.phone}?text=Hi, I want to join ${app.name}" target="_blank" class="flex items-center justify-center w-full py-3 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black font-semibold text-sm transition border border-white/10">
                            Apply for ${app.name}
                        </a>
                    </div>
                `;
            });
            html += `</div>`;
            return html;
        }

        function renderPartners() {
            let html = `
                <div class="mb-10 text-center md:text-left">
                    <h2 class="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tighter-custom">Trusted Partners</h2>
                    <p class="text-slate-400">Top performing sub-agencies working with SHARK.</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            `;
            db.partners.forEach(p => {
                html += `
                    <div class="glass-card p-6 rounded-2xl flex flex-col items-center text-center relative hover:bg-white/[0.02] transition">
                        ${getAdminControls('partner', p.id)}
                        <div class="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-2xl font-bold text-white mb-4">
                            ${p.name[0]}
                        </div>
                        <h3 class="text-lg font-bold text-white">${p.name}</h3>
                        <p class="text-cyan-500 text-xs font-medium uppercase tracking-wider mb-4">${p.role}</p>
                        <a href="https://wa.me/${p.phone}" class="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition">
                            <iconify-icon icon="solar:chat-round-line-linear"></iconify-icon> Message Partner
                        </a>
                    </div>
                `;
            });
            html += `</div>`;
            return html;
        }

        function renderReviews() {
            let html = `
                <div class="mb-10 text-center md:text-left">
                    <h2 class="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tighter-custom">Success Stories</h2>
                    <p class="text-slate-400">Hear from our community of hosts and agents.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            `;
            db.reviews.forEach(r => {
                html += `
                    <div class="glass-card p-8 rounded-2xl relative">
                        ${getAdminControls('review', r.id)}
                        <div class="flex gap-1 text-yellow-500 mb-4 text-sm">
                            ${Array(5).fill(0).map((_,i) => `<iconify-icon icon="${i < r.stars ? 'solar:star-bold' : 'solar:star-linear'}"></iconify-icon>`).join('')}
                        </div>
                        <p class="text-slate-200 text-lg leading-relaxed mb-6">"${r.text}"</p>
                        <div class="flex items-center gap-3 border-t border-white/5 pt-4">
                            <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                                ${r.user[0]}
                            </div>
                            <div>
                                <h4 class="text-white text-sm font-bold">${r.user}</h4>
                                <p class="text-slate-500 text-xs">${r.role}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += `</div>
                <div class="glass-card p-8 rounded-2xl max-w-2xl mx-auto text-center border-t-2 border-cyan-500/50">
                    <h3 class="text-xl font-bold text-white mb-2">Share Your Experience</h3>
                    <p class="text-slate-400 text-sm mb-6">We value your feedback.</p>
                    <form onsubmit="submitReview(event)" class="flex flex-col gap-4">
                        <div class="flex gap-4">
                            <input type="text" name="name" placeholder="Your Name" required class="w-1/2 glass-input px-4 py-3 rounded-xl text-sm">
                            <input type="text" name="role" placeholder="Role (e.g. Host)" required class="w-1/2 glass-input px-4 py-3 rounded-xl text-sm">
                        </div>
                        <textarea name="text" placeholder="Your review..." rows="3" required class="w-full glass-input px-4 py-3 rounded-xl text-sm"></textarea>
                        <button type="submit" class="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-xl shadow-lg transition">SUBMIT REVIEW</button>
                    </form>
                </div>
            `;
            return html;
        }

        function renderAbout() {
            return `
                 <div class="max-w-4xl mx-auto py-10">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter-custom">About <span class="text-cyan-400">SHARK</span></h2>
                        <p class="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            Established in 2020, Shark Agency has grown to become India's most trusted partner for live streaming applications. We bridge the gap between talented individuals and global platforms.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div class="glass-card p-8 rounded-2xl border-l-4 border-cyan-500">
                            <h3 class="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p class="text-slate-400 leading-relaxed">
                                To provide financial independence to women and youth across India by offering legitimate, safe, and high-paying work-from-home opportunities in the digital entertainment sector.
                            </p>
                        </div>
                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 rounded-full bg-cyan-900/30 text-cyan-400 flex items-center justify-center flex-shrink-0">
                                    <iconify-icon icon="solar:shield-check-bold" class="text-xl"></iconify-icon>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-1">100% Verified Apps</h4>
                                    <p class="text-slate-400 text-sm">We only work with platforms that guarantee payments and user safety.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 rounded-full bg-cyan-900/30 text-cyan-400 flex items-center justify-center flex-shrink-0">
                                    <iconify-icon icon="solar:wallet-money-bold" class="text-xl"></iconify-icon>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-1">On-Time Payments</h4>
                                    <p class="text-slate-400 text-sm">Weekly settlement directly to your bank account with complete transparency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderContact() {
            return `
                <div class="max-w-xl mx-auto py-8">
                    <div class="glass-card p-8 md:p-10 rounded-3xl border-t border-white/10 shadow-2xl">
                        <div class="text-center mb-8">
                            <h2 class="text-3xl font-bold text-white mb-2">Join Our Team</h2>
                            <p class="text-slate-400">Fill the form to connect directly via WhatsApp.</p>
                        </div>
                        
                        <form onsubmit="handleContact(event)" class="space-y-5">
                            <div>
                                <label class="text-xs font-bold text-slate-500 uppercase ml-1 mb-1 block">Full Name</label>
                                <input type="text" id="contact-name" required class="w-full glass-input px-5 py-4 rounded-xl text-base placeholder-slate-600" placeholder="e.g. Anjali Singh">
                            </div>
                            
                            <div>
                                <label class="text-xs font-bold text-slate-500 uppercase ml-1 mb-1 block">City</label>
                                <input type="text" id="contact-city" required class="w-full glass-input px-5 py-4 rounded-xl text-base placeholder-slate-600" placeholder="e.g. Delhi">
                            </div>

                            <div>
                                <label class="text-xs font-bold text-slate-500 uppercase ml-1 mb-1 block">Interested In</label>
                                <select id="contact-app" class="w-full glass-input px-5 py-4 rounded-xl text-base bg-slate-900 text-slate-300 appearance-none">
                                    <option value="" disabled selected>Select an option</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    ${db.apps.map(a => `<option value="${a.name}">Applying for ${a.name}</option>`).join('')}
                                    <option value="Sub-Agency">Starting an Agency</option>
                                </select>
                            </div>
                            
                            <button type="submit" class="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-900/30 transition transform hover:-translate-y-1 mt-4">
                                <iconify-icon icon="solar:chat-round-dots-bold" class="text-xl"></iconify-icon>
                                CONTINUE TO WHATSAPP
                            </button>
                            <p class="text-center text-[10px] text-slate-500 mt-4">
                                By clicking above, you will be redirected to WhatsApp to chat with our official recruitment number.
                            </p>
                        </form>
                    </div>
                </div>
            `;
        }


        // ================= ADMIN FUNCTIONS =================

        function checkSession() {
            if (sessionStorage.getItem('sharkAdmin') === 'true') {
                isAdmin = true;
                document.body.classList.add('is-admin');
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const u = document.getElementById('username').value;
            const p = document.getElementById('password').value;
            
            if (u === 'Shark2025' && p === '182219Shark') {
                sessionStorage.setItem('sharkAdmin', 'true');
                isAdmin = true;
                document.body.classList.add('is-admin');
                closeModal('login-modal');
                showToast('Welcome back, Owner!');
                // Re-render current page to show edit controls
                navigate(window.location.hash.replace('#', '') || 'home');
            } else {
                alert('Invalid Credentials');
            }
        }

        function logout() {
            if(confirm('Logout of Admin Panel?')) {
                sessionStorage.removeItem('sharkAdmin');
                isAdmin = false;
                document.body.classList.remove('is-admin');
                navigate('home');
                showToast('Logged out successfully');
            }
        }

        function getAdminControls(type, id) {
            if (!isAdmin) return '';
            const listKey = type + 's'; // apps, partners, reviews
            return `
                <div class="absolute top-4 right-4 flex gap-2 z-10">
                    <button onclick="openEditor('${type}', ${id})" class="bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white p-2 rounded-lg backdrop-blur-md transition">
                        <iconify-icon icon="solar:pen-bold"></iconify-icon>
                    </button>
                    <button onclick="deleteItem('${listKey}', ${id})" class="bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white p-2 rounded-lg backdrop-blur-md transition">
                        <iconify-icon icon="solar:trash-bin-trash-bold"></iconify-icon>
                    </button>
                </div>
            `;
        }

        function openEditor(type, id = null) {
            const modal = document.getElementById('editor-modal');
            const title = document.getElementById('modal-title');
            const fields = document.getElementById('dynamic-fields');
            const typeInput = document.getElementById('edit-type');
            const idInput = document.getElementById('edit-id');
            
            typeInput.value = type;
            idInput.value = id || '';
            title.innerText = id ? `Edit ${type.charAt(0).toUpperCase() + type.slice(1)}` : `Add New ${type.charAt(0).toUpperCase() + type.slice(1)}`;
            fields.innerHTML = ''; // Clear previous

            // Find data if editing
            let data = {};
            if (id) {
                const list = type === 'app' ? db.apps : (type === 'partner' ? db.partners : db.reviews);
                data = list.find(i => i.id === id) || {};
            }

            // Generate Inputs
            if (type === 'app') {
                fields.innerHTML = `
                    <input type="text" name="name" placeholder="App Name" value="${data.name || ''}" required class="w-full glass-input px-4 py-3 rounded-xl">
                    <input type="text" name="earn" placeholder="Earnings Range" value="${data.earn || ''}" required class="w-full glass-input px-4 py-3 rounded-xl">
                    <input type="text" name="req" placeholder="Requirements" value="${data.req || ''}" required class="w-full glass-input px-4 py-3 rounded-xl">
                    <input type="text" name="traffic" placeholder="Traffic (High/Med)" value="${data.traffic || ''}" required class="w-full glass-input px-4 py-3 rounded-xl">
                    <textarea name="desc" placeholder="Description" rows="3" required class="w-full glass-input px-4 py-3 rounded-xl">${data.desc || ''}</textarea>
                `;
            } else if (type === 'partner') {
                fields.innerHTML = `
                    <input type="text" name="name" placeholder="Partner Name" value="${data.name || ''}" required class="w-full glass-input px-4 py-3 rounded-xl">
                    <input type="text" name="role" placeholder="Role (e.g. Sub-Agency)" value="${data.role || ''}" required class="w-full glass-input px-4 py-3 rounded-xl">
                    <input type="number" name="phone" placeholder="Phone (91...)" value="${data.phone || ''}" required class="w-full glass-input px-4 py-3 rounded-xl">
                `;
            }

            modal.classList.remove('hidden');
        }

        function handleSaveContent(e) {
            e.preventDefault();
            const type = document.getElementById('edit-type').value;
            const id = document.getElementById('edit-id').value;
            const formData = new FormData(e.target);
            const listKey = type + 's'; // apps, partners

            const newItem = {};
            formData.forEach((value, key) => newItem[key] = value);
            
            if (id) {
                // Update
                const idx = db[listKey].findIndex(i => i.id == id);
                if (idx > -1) db[listKey][idx] = { ...db[listKey][idx], ...newItem };
            } else {
                // Add
                newItem.id = Date.now();
                db[listKey].push(newItem);
            }

            closeModal('editor-modal');
            navigate(listKey === 'apps' ? 'apps' : 'partners');
            showToast('Changes saved locally. Remember to Publish!');
        }

        function deleteItem(listKey, id) {
            if (confirm('Are you sure you want to delete this item?')) {
                db[listKey] = db[listKey].filter(i => i.id !== id);
                navigate(listKey === 'apps' ? 'apps' : (listKey === 'partners' ? 'partners' : 'reviews'));
                showToast('Item deleted.');
            }
        }

        // ================= DATA PERSISTENCE =================
        const STORE_KEY = 'shark_agency_data_v1';

        function loadData() {
            const saved = localStorage.getItem(STORE_KEY);
            if (saved) {
                try {
                    db = JSON.parse(saved);
                } catch(e) { console.error('Data load error', e); }
            }
        }

        function saveChanges() {
            // In a real app, this would push to a server/database.
            // Here we act as "Real" as possible for a static file by persisting to device storage
            // and simulating a network request delay.
            
            const btn = document.querySelector('button[onclick="saveChanges()"]');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="line-md:loading-loop" class="text-xl animate-spin"></iconify-icon>`;
            
            setTimeout(() => {
                localStorage.setItem(STORE_KEY, JSON.stringify(db));
                btn.innerHTML = originalHTML;
                showToast('Website Updated Successfully!');
            }, 1000);
        }

        // ================= PUBLIC INTERACTION =================
        function handleContact(e) {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const city = document.getElementById('contact-city').value;
            const app = document.getElementById('contact-app').value;
            
            if (!app) { alert('Please select an interest'); return; }

            const text = `Hello Shark Agency! 👋%0A%0AMy name is *${name}* from *${city}*.%0AI am interested in: *${app}*.%0APlease guide me further.`;
            
            // Open WhatsApp
            window.open(`https://wa.me/${db.contact.phone}?text=${text}`, '_blank');
        }

        function submitReview(e) {
            e.preventDefault();
            const form = e.target;
            const newReview = {
                id: Date.now(),
                user: form.name.value,
                role: form.role.value,
                text: form.text.value,
                stars: 5
            };
            
            db.reviews.unshift(newReview); // Add to top
            saveChanges(); // Auto save user interactions
            navigate('reviews'); // Refresh
            showToast('Thank you for your review!');
        }

        // ================= UTILS =================
        function openModal(id) {
            document.getElementById(id).classList.remove('hidden');
        }
        function closeModal(id) {
            document.getElementById(id).classList.add('hidden');
        }
        function toggleMobileMenu() {
            const m = document.getElementById('mobile-menu');
            if (m.classList.contains('hidden')) {
                m.classList.remove('hidden');
                setTimeout(() => m.classList.remove('opacity-0'), 10);
            } else {
                m.classList.add('opacity-0');
                setTimeout(() => m.classList.add('hidden'), 300);
            }
        }
        function showToast(msg) {
            const t = document.getElementById('toast');
            document.getElementById('toast-msg').innerText = msg;
            t.classList.remove('translate-x-full', 'opacity-0');
            setTimeout(() => t.classList.add('translate-x-full', 'opacity-0'), 3000);
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 lg:h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#" onclick="navigate('home')">
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xl font-bold tracking-tight text-white leading-none">SHARK <span className="text-cyan-400">AGENCY</span></span>
<span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-0.5">Recruitment Partner</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<button className="nav-link text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="navigate('home')">Home</button>
<button className="nav-link text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="navigate('apps')">Opportunities</button>
<button className="nav-link text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="navigate('partners')">Partners</button>
<button className="nav-link text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="navigate('reviews')">Reviews</button>
<button className="nav-link text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="navigate('about')">About</button>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:flex bg-white text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide hover:bg-cyan-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:-translate-y-0.5" onclick="navigate('contact')">
                    Apply Now
                </button>

<button className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition" onclick="toggleMobileMenu()">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl hidden flex-col items-center justify-center gap-8 opacity-0 transition-opacity duration-300" id="mobile-menu">
<button className="absolute top-6 right-6 text-slate-400 hover:text-white p-2" onclick="toggleMobileMenu()">
<iconify-icon className="text-4xl" icon="solar:close-circle-bold"></iconify-icon>
</button>
<button className="text-2xl font-light text-white tracking-tight hover:text-cyan-400 transition" onclick="navigate('home'); toggleMobileMenu()">Home</button>
<button className="text-2xl font-light text-white tracking-tight hover:text-cyan-400 transition" onclick="navigate('apps'); toggleMobileMenu()">Opportunities</button>
<button className="text-2xl font-light text-white tracking-tight hover:text-cyan-400 transition" onclick="navigate('partners'); toggleMobileMenu()">Partners</button>
<button className="text-2xl font-light text-white tracking-tight hover:text-cyan-400 transition" onclick="navigate('reviews'); toggleMobileMenu()">Success Stories</button>
<button className="text-2xl font-light text-white tracking-tight hover:text-cyan-400 transition" onclick="navigate('contact'); toggleMobileMenu()">Contact Us</button>
<button className="mt-8 text-xs font-bold text-slate-500 uppercase tracking-widest border border-slate-800 px-6 py-2 rounded-full hover:border-cyan-500 hover:text-cyan-500 transition" onclick="openModal('login-modal')">Owner Login</button>
</div>

<main className="flex-grow pt-24 pb-16 px-4 md:px-6 max-w-7xl mx-auto w-full min-h-[80vh]" id="app-root">

</main>

<footer className="border-t border-slate-800/60 bg-slate-950/30 backdrop-blur-sm mt-auto">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2 space-y-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-500 text-xl" icon="solar:star-bold"></iconify-icon>
<span className="text-xl font-bold text-white tracking-tight">SHARK AGENCY</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        Empowering talent across India with secure, high-paying live streaming opportunities. Join the revolution of digital creators today.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-slate-400 hover:text-white transition" href="#"><iconify-icon icon="brandico:facebook" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition" href="#"><iconify-icon icon="brandico:instagram" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6 tracking-tight">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><button className="hover:text-cyan-400 transition" onclick="navigate('about')">About Us</button></li>
<li><button className="hover:text-cyan-400 transition" onclick="navigate('apps')">Apps &amp; Earnings</button></li>
<li><button className="hover:text-cyan-400 transition" onclick="navigate('partners')">Agency Partners</button></li>
<li><button className="hover:text-cyan-400 transition" onclick="navigate('contact')">Join Team</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 tracking-tight">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:phone-calling-linear"></iconify-icon>
<span>+91 78087 24651</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:letter-linear"></iconify-icon>
<span>insharkagency@gmail.com</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:map-point-linear"></iconify-icon>
<span>Mumbai, India</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2025 Shark Agency. All rights reserved.</p>
<button className="text-xs text-slate-700 hover:text-cyan-600 transition" onclick="openModal('login-modal')">Admin Access</button>
</div>
</div>
</footer>

<div className="admin-only fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 glass px-2 py-2 rounded-full shadow-2xl border border-white/10 flex items-center gap-2" id="admin-dock">
<div className="px-4 text-xs font-bold text-cyan-400 uppercase tracking-wider hidden md:block">Admin Mode</div>
<div className="h-4 w-px bg-white/10 hidden md:block"></div>
<button className="p-3 rounded-full hover:bg-white/10 text-white tooltip-trigger relative group" onclick="openEditor('app')">
<iconify-icon className="text-xl" icon="solar:smartphone-add-linear"></iconify-icon>
<span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Add App</span>
</button>
<button className="p-3 rounded-full hover:bg-white/10 text-white tooltip-trigger relative group" onclick="openEditor('partner')">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Add Partner</span>
</button>
<div className="h-4 w-px bg-white/10"></div>
<button className="p-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 relative group" onclick="saveChanges()">
<iconify-icon className="text-xl" icon="solar:cloud-upload-bold"></iconify-icon>
<span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Publish Live</span>
</button>
<button className="p-3 rounded-full hover:bg-red-500/20 text-red-400 hover:text-red-300 relative group" onclick="logout()">
<iconify-icon className="text-xl" icon="solar:logout-2-linear"></iconify-icon>
</button>
</div>

<div className="fixed top-24 right-6 z-[60] transform translate-x-full opacity-0 transition-all duration-300" id="toast">
<div className="glass-card pl-4 pr-6 py-3 rounded-lg border-l-4 border-cyan-500 flex items-center gap-3 shadow-2xl">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<div>
<h6 className="text-white text-sm font-semibold">Success</h6>
<p className="text-slate-400 text-xs" id="toast-msg">Action completed successfully.</p>
</div>
</div>
</div>


<div className="fixed inset-0 z-[100] hidden bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" id="login-modal">
<div className="glass-card w-full max-w-sm p-8 rounded-2xl relative animate-up">
<button className="absolute top-4 right-4 text-slate-500 hover:text-white" onclick="closeModal('login-modal')"><iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon></button>
<div className="text-center mb-6">
<div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-500">
<iconify-icon className="text-3xl" icon="solar:shield-user-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white">Owner Access</h3>
<p className="text-slate-400 text-sm mt-1">Authorized personnel only.</p>
</div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<input className="w-full glass-input px-4 py-3 rounded-xl text-sm" id="username" placeholder="Username" type="text"/>
<input className="w-full glass-input px-4 py-3 rounded-xl text-sm" id="password" placeholder="Password" type="password"/>
<button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-900/50 transition mt-2" type="submit">LOGIN DASHBOARD</button>
</form>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" id="editor-modal">
<div className="glass-card w-full max-w-lg p-6 rounded-2xl relative max-h-[90vh] overflow-y-auto">
<button className="absolute top-4 right-4 text-slate-500 hover:text-white" onclick="closeModal('editor-modal')"><iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon></button>
<h3 className="text-xl font-bold text-white mb-6" id="modal-title">Edit Item</h3>
<form className="space-y-4" id="editor-form" onsubmit="handleSaveContent(event)">
<input id="edit-type" type="hidden"/>
<input id="edit-id" type="hidden"/>
<div className="space-y-4" id="dynamic-fields">

</div>
<div className="pt-4">
<button className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-cyan-50 transition" type="submit">SAVE CHANGES</button>
</div>
</form>
</div>
</div>



    </>
  );
}
