import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // --- STATE MANAGEMENT ---
        const DB_KEYS = {
            USERS: 'ah_users',
            TOURNAMENTS: 'ah_tournaments',
            NOTICES: 'ah_notices',
            CODES: 'ah_deposit_codes',
            WITHDRAWALS: 'ah_withdrawals',
            SETTINGS: 'ah_settings',
            SESSION: 'ah_session'
        };

        let currentUser = null;

        // Initialize DB
        function initDB() {
            if (!localStorage.getItem(DB_KEYS.USERS)) localStorage.setItem(DB_KEYS.USERS, JSON.stringify([]));
            if (!localStorage.getItem(DB_KEYS.TOURNAMENTS)) localStorage.setItem(DB_KEYS.TOURNAMENTS, JSON.stringify([]));
            if (!localStorage.getItem(DB_KEYS.NOTICES)) localStorage.setItem(DB_KEYS.NOTICES, JSON.stringify([]));
            if (!localStorage.getItem(DB_KEYS.CODES)) localStorage.setItem(DB_KEYS.CODES, JSON.stringify([]));
            if (!localStorage.getItem(DB_KEYS.WITHDRAWALS)) localStorage.setItem(DB_KEYS.WITHDRAWALS, JSON.stringify([]));
            if (!localStorage.getItem(DB_KEYS.SETTINGS)) localStorage.setItem(DB_KEYS.SETTINGS, JSON.stringify({ contact: "+92 000 0000000" }));
        }

        // Helper: Get/Set Data
        const getCheck = (key) => JSON.parse(localStorage.getItem(key) || '[]');
        const setCheck = (key, data) => localStorage.setItem(key, JSON.stringify(data));

        // Toast Notification
        function toast(msg, type = 'info') {
            const container = document.getElementById('toast-container');
            const el = document.createElement('div');
            const colors = type === 'error' ? 'bg-red-600' : type === 'success' ? 'bg-green-600' : 'bg-blue-600';
            el.className = `${colors} text-white px-4 py-3 rounded-lg shadow-lg text-sm font-medium animate-slide-up flex items-center gap-2`;
            el.innerHTML = `<span>${msg}</span>`;
            container.appendChild(el);
            setTimeout(() => { el.remove(); }, 3000);
        }

        // Navigation
        function nav(screenId) {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            document.getElementById(screenId).classList.add('active');
            
            if(screenId === 'screen-dashboard') {
                loadUserDashboard();
            }
        }

        // --- AUTH LOGIC ---

        // Sign Up
        document.getElementById('signup-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('reg-name').value;
            const ign = document.getElementById('reg-ign').value;
            const uid = document.getElementById('reg-uid').value;
            const phone = document.getElementById('reg-phone').value;
            const email = document.getElementById('reg-email').value;
            const pass = document.getElementById('reg-pass').value;
            const confirm = document.getElementById('reg-confirm').value;

            if (pass !== confirm) return toast('Passwords do not match', 'error');
            
            const users = getCheck(DB_KEYS.USERS);
            if (users.find(u => u.email === email)) return toast('Email already exists', 'error');

            const newUser = {
                id: Date.now().toString(),
                name, ign, uid, phone, email, pass,
                diamonds: 10, // Sign up bonus
                joinedTournaments: []
            };

            users.push(newUser);
            setCheck(DB_KEYS.USERS, users);
            
            toast('Account created! +10 Diamonds added.', 'success');
            // Auto Login
            currentUser = newUser;
            localStorage.setItem(DB_KEYS.SESSION, newUser.id);
            document.getElementById('signup-form').reset();
            nav('screen-dashboard');
        });

        // Sign In
        document.getElementById('signin-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const pass = document.getElementById('login-pass').value;

            const users = getCheck(DB_KEYS.USERS);
            const user = users.find(u => u.email === email && u.pass === pass);

            if (user) {
                currentUser = user;
                localStorage.setItem(DB_KEYS.SESSION, user.id);
                document.getElementById('signin-form').reset();
                nav('screen-dashboard');
                toast('Welcome back!', 'success');
            } else {
                toast('Invalid credentials', 'error');
            }
        });

        // Admin Login
        document.getElementById('admin-login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('admin-email').value;
            const pass = document.getElementById('admin-pass').value;

            if (email === 'ayanking3536@gmail.com' && pass === '123456ul') {
                document.getElementById('admin-login-form').reset();
                loadAdminDashboard();
                nav('screen-admin-dashboard');
                toast('Admin Access Granted', 'success');
            } else {
                toast('Invalid admin credentials', 'error');
            }
        });

        // Logout
        function logout() {
            currentUser = null;
            localStorage.removeItem(DB_KEYS.SESSION);
            nav('screen-start');
        }

        function logoutAdmin() {
            nav('screen-start');
        }

        // --- USER DASHBOARD LOGIC ---

        function loadUserDashboard() {
            if(!currentUser) {
                // Check session
                const sid = localStorage.getItem(DB_KEYS.SESSION);
                const users = getCheck(DB_KEYS.USERS);
                const user = users.find(u => u.id === sid);
                if(user) currentUser = user;
                else return nav('screen-signin');
            }

            // Update Header
            document.getElementById('user-welcome-name').innerText = currentUser.ign;
            document.getElementById('user-diamond-display').innerText = currentUser.diamonds;
            document.getElementById('wallet-balance').innerText = currentUser.diamonds;
            
            // Update Profile
            document.getElementById('profile-name').innerText = currentUser.name;
            document.getElementById('profile-ign').innerText = `IGN: ${currentUser.ign}`;
            document.getElementById('profile-id').innerText = `ID: ${currentUser.id}`;

            // Load Contact
            const settings = JSON.parse(localStorage.getItem(DB_KEYS.SETTINGS));
            document.getElementById('admin-contact-display').innerText = settings.contact;

            renderNotices();
            renderTournaments();
            switchTab('home');
        }

        function renderNotices() {
            const notices = getCheck(DB_KEYS.NOTICES);
            const container = document.getElementById('notice-list');
            container.innerHTML = '';
            
            if (notices.length === 0) {
                container.innerHTML = `<div class="bg-zinc-900 rounded-lg p-4 text-center text-sm text-zinc-500 border border-zinc-800 border-dashed">No notices available</div>`;
                return;
            }

            notices.reverse().forEach(n => {
                const html = `
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-sm relative overflow-hidden">
                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                    <p class="text-xs text-zinc-500 mb-1">${n.date}</p>
                    <p class="text-sm text-zinc-200 font-medium">${n.text}</p>
                </div>`;
                container.innerHTML += html;
            });
        }

        function renderTournaments() {
            const list = getCheck(DB_KEYS.TOURNAMENTS);
            const container = document.getElementById('tournament-list');
            container.innerHTML = '';

            if (list.length === 0) {
                container.innerHTML = `<div class="bg-zinc-900 rounded-lg p-6 text-center text-sm text-zinc-500 border border-zinc-800 border-dashed">No tournaments available</div>`;
                return;
            }

            // Sort: Live/Upcoming first
            list.sort((a,b) => (a.status === 'Completed' ? 1 : -1));

            list.forEach(t => {
                const isJoined = currentUser.joinedTournaments.includes(t.id);
                const isFull = t.players.length >= 48; // Simple cap
                
                let btnHtml = '';
                if (t.status === 'Completed') {
                    btnHtml = `<button disabled class="w-full bg-zinc-800 text-zinc-500 py-2 rounded-lg text-xs font-bold uppercase">Completed</button>`;
                } else if (isJoined) {
                    btnHtml = `
                    <div class="space-y-2">
                         <div class="bg-blue-900/20 border border-blue-900/50 p-2 rounded text-center">
                            <p class="text-[10px] text-blue-400 uppercase">Room ID</p>
                            <p class="font-mono text-white select-all">${t.roomId || 'Wait...'}</p>
                        </div>
                        <div class="bg-blue-900/20 border border-blue-900/50 p-2 rounded text-center">
                            <p class="text-[10px] text-blue-400 uppercase">Password</p>
                            <p class="font-mono text-white select-all">${t.roomPass || 'Wait...'}</p>
                        </div>
                        <button disabled class="w-full bg-green-600/20 text-green-500 border border-green-600/50 py-2 rounded-lg text-xs font-bold uppercase">Joined</button>
                    </div>`;
                } else {
                    btnHtml = `<button onclick="joinTournament('${t.id}')" class="w-full bg-white text-black hover:bg-zinc-200 py-2.5 rounded-lg text-xs font-bold uppercase transition-colors">Join • ${t.fee} <i class="w-3 h-3 inline pb-0.5" data-lucide="gem"></i></button>`;
                }

                const html = `
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-sm">
                    <div class="bg-zinc-800/50 px-4 py-2 flex justify-between items-center border-b border-zinc-800">
                        <span class="text-xs font-bold text-zinc-400 uppercase tracking-wider">${t.type} Match</span>
                        <span class="text-[10px] px-2 py-0.5 rounded ${t.status === 'Live' ? 'bg-red-500 text-white animate-pulse' : 'bg-zinc-700 text-zinc-300'}">${t.status}</span>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between mb-4">
                            <div>
                                <p class="text-xs text-zinc-500">Prize Pool</p>
                                <p class="text-lg font-bold text-yellow-400 flex items-center">${t.prize} <i data-lucide="gem" class="w-3.5 h-3.5 ml-1"></i></p>
                            </div>
                            <div class="text-right">
                                <p class="text-xs text-zinc-500">Entry Fee</p>
                                <p class="text-lg font-bold text-white flex items-center justify-end">${t.fee} <i data-lucide="gem" class="w-3.5 h-3.5 ml-1"></i></p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 text-xs text-zinc-300 mb-4 bg-zinc-950 p-3 rounded-lg border border-zinc-800/50">
                            <div><span class="text-zinc-500">Time:</span> ${t.time}</div>
                            <div><span class="text-zinc-500">Date:</span> ${t.date}</div>
                            <div class="col-span-2"><span class="text-zinc-500">Players:</span> ${t.players.length}/48</div>
                        </div>
                        ${btnHtml}
                    </div>
                </div>`;
                container.innerHTML += html;
            });
            lucide.createIcons();
        }

        function joinTournament(tId) {
            const tours = getCheck(DB_KEYS.TOURNAMENTS);
            const tIndex = tours.findIndex(t => t.id === tId);
            const t = tours[tIndex];

            // 1. Balance Check
            if (currentUser.diamonds < parseInt(t.fee)) {
                toast('Insufficient diamonds! Please deposit.', 'error');
                switchTab('wallet');
                return;
            }

            // 2. Deduct
            currentUser.diamonds -= parseInt(t.fee);
            
            // 3. Add to User Joined List
            currentUser.joinedTournaments.push(tId);
            
            // 4. Add Player to Tournament
            t.players.push({
                uid: currentUser.id,
                name: currentUser.name,
                ign: currentUser.ign
            });

            // 5. Save everything
            updateUser(currentUser);
            tours[tIndex] = t;
            setCheck(DB_KEYS.TOURNAMENTS, tours);

            toast('Joined successfully!', 'success');
            loadUserDashboard(); // refresh UI
        }

        function redeemCode() {
            const input = document.getElementById('redeem-input');
            const codeVal = input.value.trim().toUpperCase();
            if(!codeVal) return;

            const codes = getCheck(DB_KEYS.CODES);
            const codeObj = codes.find(c => c.code === codeVal && c.status === 'active');

            if(codeObj) {
                // Credit User
                currentUser.diamonds += parseInt(codeObj.amount);
                updateUser(currentUser);
                
                // Mark Used
                codeObj.status = 'used';
                codeObj.usedBy = currentUser.id;
                setCheck(DB_KEYS.CODES, codes);

                toast(`Success! ${codeObj.amount} diamonds added.`, 'success');
                input.value = '';
                loadUserDashboard();
            } else {
                toast('Invalid or used code.', 'error');
            }
        }

        function requestWithdraw() {
            const method = document.getElementById('withdraw-method').value;
            const name = document.getElementById('withdraw-name').value;
            const number = document.getElementById('withdraw-number').value;
            const amount = parseInt(document.getElementById('withdraw-amount').value);

            if(!name || !number || !amount) return toast('Fill all fields', 'error');
            if(amount > currentUser.diamonds) return toast('Insufficient balance', 'error');
            if(amount < 50) return toast('Minimum withdrawal is 50 diamonds', 'error');

            const req = {
                id: Date.now().toString(),
                userId: currentUser.id,
                ign: currentUser.ign,
                method, name, number, amount,
                status: 'Pending'
            };

            const w = getCheck(DB_KEYS.WITHDRAWALS);
            w.push(req);
            setCheck(DB_KEYS.WITHDRAWALS, w);
            
            // Deduct immediately (hold funds)
            currentUser.diamonds -= amount;
            updateUser(currentUser);
            loadUserDashboard();

            toast('Withdrawal requested successfully', 'success');
            document.getElementById('withdraw-name').value = '';
            document.getElementById('withdraw-number').value = '';
            document.getElementById('withdraw-amount').value = '';
        }

        function updateUser(u) {
            const users = getCheck(DB_KEYS.USERS);
            const idx = users.findIndex(us => us.id === u.id);
            if(idx > -1) {
                users[idx] = u;
                setCheck(DB_KEYS.USERS, users);
            }
        }

        function switchTab(tab) {
            document.getElementById('notice-section').style.display = tab === 'home' ? 'block' : 'none';
            document.getElementById('tournament-section').style.display = tab === 'home' ? 'block' : 'none';
            document.getElementById('wallet-section').style.display = tab === 'wallet' ? 'block' : 'none';
            document.getElementById('profile-section').style.display = tab === 'profile' ? 'block' : 'none';
            
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('text-white'));
            // Highlight active tab icon would go here simply by index logic, kept simple for now
        }


        // --- ADMIN DASHBOARD LOGIC ---

        function loadAdminDashboard() {
            renderAdminTournaments();
            renderAdminWithdrawals();
            
            // Load current contact
            const s = JSON.parse(localStorage.getItem(DB_KEYS.SETTINGS));
            document.getElementById('adm-contact-num').value = s.contact;
        }

        // 1. Create Tournament
        document.getElementById('create-tourney-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const type = document.getElementById('adm-t-type').value;
            const date = document.getElementById('adm-t-date').value;
            const time = document.getElementById('adm-t-time').value;
            const fee = document.getElementById('adm-t-fee').value;
            const prize = document.getElementById('adm-t-prize').value;

            const t = {
                id: Date.now().toString(),
                type, date, time, fee, prize,
                status: 'Upcoming',
                roomId: '',
                roomPass: '',
                players: []
            };

            const list = getCheck(DB_KEYS.TOURNAMENTS);
            list.push(t);
            setCheck(DB_KEYS.TOURNAMENTS, list);
            
            toast('Tournament Created!', 'success');
            document.getElementById('create-tourney-form').reset();
            renderAdminTournaments();
        });

        // 2. Render Admin Tournaments
        function renderAdminTournaments() {
            const list = getCheck(DB_KEYS.TOURNAMENTS);
            const div = document.getElementById('admin-tourney-list');
            div.innerHTML = '';

            list.reverse().forEach(t => {
                const html = `
                <div class="bg-zinc-900 border border-zinc-800 p-3 rounded-lg text-sm">
                    <div class="flex justify-between mb-2">
                        <span class="font-bold text-white">${t.type} - ${t.time}</span>
                        <button onclick="adminDeleteTourney('${t.id}')" class="text-red-500 text-xs hover:underline">Delete</button>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mb-2">
                        <input type="text" placeholder="Room ID" value="${t.roomId}" id="rid-${t.id}" class="bg-zinc-950 border border-zinc-700 p-1 rounded text-xs text-white">
                        <input type="text" placeholder="Pass" value="${t.roomPass}" id="rpass-${t.id}" class="bg-zinc-950 border border-zinc-700 p-1 rounded text-xs text-white">
                    </div>
                    <div class="flex gap-2">
                         <button onclick="adminUpdateRoom('${t.id}')" class="flex-1 bg-blue-600 text-white text-xs py-1 rounded">Update Room</button>
                         <button onclick="adminToggleStatus('${t.id}')" class="flex-1 ${t.status === 'Upcoming' ? 'bg-zinc-700' : t.status === 'Live' ? 'bg-red-600' : 'bg-green-600'} text-white text-xs py-1 rounded">${t.status}</button>
                    </div>
                    <div class="mt-2 text-xs text-zinc-500">Players Joined: ${t.players.length}</div>
                </div>`;
                div.innerHTML += html;
            });
        }

        window.adminUpdateRoom = (id) => {
            const rid = document.getElementById(`rid-${id}`).value;
            const rpass = document.getElementById(`rpass-${id}`).value;
            
            const list = getCheck(DB_KEYS.TOURNAMENTS);
            const idx = list.findIndex(t => t.id === id);
            if(idx > -1) {
                list[idx].roomId = rid;
                list[idx].roomPass = rpass;
                setCheck(DB_KEYS.TOURNAMENTS, list);
                toast('Room details updated', 'success');
            }
        };

        window.adminToggleStatus = (id) => {
            const list = getCheck(DB_KEYS.TOURNAMENTS);
            const t = list.find(x => x.id === id);
            if(t.status === 'Upcoming') t.status = 'Live';
            else if(t.status === 'Live') t.status = 'Completed';
            else t.status = 'Upcoming'; // loop
            
            setCheck(DB_KEYS.TOURNAMENTS, list);
            renderAdminTournaments();
        };

        window.adminDeleteTourney = (id) => {
            if(!confirm('Delete this tournament?')) return;
            let list = getCheck(DB_KEYS.TOURNAMENTS);
            list = list.filter(t => t.id !== id);
            setCheck(DB_KEYS.TOURNAMENTS, list);
            renderAdminTournaments();
        };

        // 3. Generate Code
        function adminGenerateCode() {
            const amt = document.getElementById('adm-code-amount').value;
            if(!amt) return toast('Enter amount', 'error');

            const code = 'AH-' + Math.random().toString(36).substring(2, 6).toUpperCase();
            
            const codes = getCheck(DB_KEYS.CODES);
            codes.push({ code, amount: amt, status: 'active' });
            setCheck(DB_KEYS.CODES, codes);

            document.getElementById('generated-code-display').classList.remove('hidden');
            document.getElementById('gen-code-text').innerText = code;
        }

        // 4. Gift Diamonds
        function adminGiftDiamonds() {
            const name = document.getElementById('gift-username').value.trim();
            const amt = parseInt(document.getElementById('gift-amount').value);

            if(!name || !amt) return toast('Invalid input', 'error');

            const users = getCheck(DB_KEYS.USERS);
            const user = users.find(u => u.name === name || u.ign === name); // Search by Name or IGN

            if(user) {
                user.diamonds += amt;
                setCheck(DB_KEYS.USERS, users);
                toast(`Sent ${amt} diamonds to ${user.name}`, 'success');
                document.getElementById('gift-username').value = '';
                document.getElementById('gift-amount').value = '';
            } else {
                toast('User not found. Check exact name/IGN.', 'error');
            }
        }

        // 5. Notices
        function adminAddNotice() {
            const txt = document.getElementById('adm-notice-text').value;
            if(!txt) return;
            
            const notices = getCheck(DB_KEYS.NOTICES);
            notices.push({
                id: Date.now(),
                text: txt,
                date: new Date().toLocaleDateString()
            });
            setCheck(DB_KEYS.NOTICES, notices);
            toast('Notice added', 'success');
            document.getElementById('adm-notice-text').value = '';
        }

        function adminClearNotices() {
            setCheck(DB_KEYS.NOTICES, []);
            toast('Notices cleared', 'success');
        }

        // 6. Settings
        function adminSaveSettings() {
            const num = document.getElementById('adm-contact-num').value;
            localStorage.setItem(DB_KEYS.SETTINGS, JSON.stringify({ contact: num }));
            toast('Contact updated', 'success');
        }

        // 7. Withdrawals
        function renderAdminWithdrawals() {
            const list = getCheck(DB_KEYS.WITHDRAWALS);
            const div = document.getElementById('admin-withdraw-list');
            div.innerHTML = '';
            
            const pending = list.filter(w => w.status === 'Pending');

            if(pending.length === 0) {
                div.innerHTML = '<div class="text-xs text-zinc-500">No pending withdrawals</div>';
                return;
            }

            pending.forEach(w => {
                const html = `
                <div class="bg-zinc-900 border border-zinc-800 p-3 rounded-lg text-sm">
                    <p class="font-bold text-white mb-1">${w.ign} <span class="text-zinc-500 font-normal">(${w.amount} Diamonds)</span></p>
                    <p class="text-xs text-zinc-400 font-mono">${w.method}: ${w.number} (${w.name})</p>
                    <div class="flex gap-2 mt-2">
                        <button onclick="wAction('${w.id}', 'Approve')" class="bg-green-600 text-white text-xs px-2 py-1 rounded">Approve</button>
                        <button onclick="wAction('${w.id}', 'Reject')" class="bg-red-600 text-white text-xs px-2 py-1 rounded">Reject</button>
                    </div>
                </div>`;
                div.innerHTML += html;
            });
        }

        window.wAction = (id, action) => {
            const list = getCheck(DB_KEYS.WITHDRAWALS);
            const wIdx = list.findIndex(x => x.id === id);
            
            if(wIdx > -1) {
                const w = list[wIdx];
                if(action === 'Reject') {
                    // Refund
                    const users = getCheck(DB_KEYS.USERS);
                    const u = users.find(user => user.id === w.userId);
                    if(u) {
                        u.diamonds += parseInt(w.amount);
                        setCheck(DB_KEYS.USERS, users);
                    }
                    w.status = 'Rejected';
                } else {
                    w.status = 'Approved';
                }
                list[wIdx] = w;
                setCheck(DB_KEYS.WITHDRAWALS, list);
                renderAdminWithdrawals();
                toast(`Withdrawal ${action}d`, 'success');
            }
        };

        // --- INIT ---
        initDB();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-5 right-5 z-50 flex flex-col gap-2" id="toast-container"></div>

<div className="screen active w-full max-w-md p-6 flex flex-col items-center justify-center min-h-screen" id="screen-start">
<div className="mb-10 text-center animate-slide-up">
<div className="w-24 h-24 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl mx-auto flex items-center justify-center shadow-2xl mb-6 transform rotate-3">
<i className="w-12 h-12 text-white" data-lucide="trophy"></i>
</div>
<h1 className="text-3xl font-bold tracking-tight text-white mb-2">AH TOURNAMENT</h1>
<p className="text-zinc-500 text-sm">Professional Esports Platform</p>
</div>
<div className="w-full space-y-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
<button className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-semibold py-3.5 rounded-xl transition-all active:scale-95 shadow-lg" onclick="nav('screen-signin')">
                Sign In
            </button>
<button className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-100 font-semibold py-3.5 rounded-xl transition-all active:scale-95" onclick="nav('screen-signup')">
                Create Account
            </button>
<div className="relative py-4">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800"></div></div>
<div className="relative flex justify-center text-xs uppercase"><span className="bg-zinc-950 px-2 text-zinc-600">Admin Access</span></div>
</div>
<button className="w-full bg-red-950/30 border border-red-900/50 text-red-500 hover:bg-red-900/40 font-medium py-3 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2" onclick="nav('screen-admin-login')">
<i className="w-4 h-4" data-lucide="shield-alert"></i> Admin Panel
            </button>
</div>
</div>

<div className="screen w-full max-w-md min-h-screen bg-zinc-950 p-6 overflow-y-auto" id="screen-signup">
<div className="mb-6">
<button className="text-zinc-500 hover:text-white mb-4" onclick="nav('screen-start')"><i data-lucide="arrow-left"></i></button>
<h2 className="text-2xl font-bold text-orange-500 mb-1">Register</h2>
<p className="text-zinc-500 text-sm">Please sign up to continue</p>
</div>
<form className="space-y-4" id="signup-form">
<div className="bg-zinc-900 rounded-xl p-3 flex items-center border border-zinc-800 focus-within:border-orange-500/50 transition-colors">
<i className="text-orange-500 w-5 h-5 mr-3" data-lucide="user"></i>
<input className="bg-transparent w-full outline-none text-sm placeholder-zinc-500" id="reg-name" placeholder="Full Name" required="" type="text"/>
</div>
<div className="bg-zinc-900 rounded-xl p-3 flex items-center border border-zinc-800 focus-within:border-orange-500/50 transition-colors">
<i className="text-orange-500 w-5 h-5 mr-3" data-lucide="gamepad-2"></i>
<input className="bg-transparent w-full outline-none text-sm placeholder-zinc-500" id="reg-ign" placeholder="In-Game Name (IGN)" required="" type="text"/>
</div>
<div className="bg-zinc-900 rounded-xl p-3 flex items-center border border-zinc-800 focus-within:border-orange-500/50 transition-colors">
<i className="text-orange-500 w-5 h-5 mr-3" data-lucide="hash"></i>
<input className="bg-transparent w-full outline-none text-sm placeholder-zinc-500" id="reg-uid" placeholder="Free Fire UID" required="" type="number"/>
</div>
<div className="flex gap-2">
<div className="bg-zinc-900 rounded-xl p-3 flex items-center justify-center border border-zinc-800 w-24">
<span className="text-sm text-zinc-300">🇵🇰 +92</span>
</div>
<div className="bg-zinc-900 rounded-xl p-3 flex-1 flex items-center border border-zinc-800 focus-within:border-orange-500/50 transition-colors">
<input className="bg-transparent w-full outline-none text-sm placeholder-zinc-500" id="reg-phone" placeholder="Mobile No." required="" type="number"/>
</div>
</div>
<div className="bg-zinc-900 rounded-xl p-3 flex items-center border border-zinc-800 focus-within:border-orange-500/50 transition-colors">
<i className="text-orange-500 w-5 h-5 mr-3" data-lucide="mail"></i>
<input className="bg-transparent w-full outline-none text-sm placeholder-zinc-500" id="reg-email" placeholder="Email Address" required="" type="email"/>
</div>
<div className="bg-zinc-900 rounded-xl p-3 flex items-center border border-zinc-800 focus-within:border-orange-500/50 transition-colors">
<i className="text-orange-500 w-5 h-5 mr-3" data-lucide="lock"></i>
<input className="bg-transparent w-full outline-none text-sm placeholder-zinc-500" id="reg-pass" placeholder="Password" required="" type="password"/>
</div>
<div className="bg-zinc-900 rounded-xl p-3 flex items-center border border-zinc-800 focus-within:border-orange-500/50 transition-colors">
<i className="text-orange-500 w-5 h-5 mr-3" data-lucide="lock"></i>
<input className="bg-transparent w-full outline-none text-sm placeholder-zinc-500" id="reg-confirm" placeholder="Confirm Password" required="" type="password"/>
</div>
<button className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-3.5 rounded-xl mt-4 transition-all active:scale-95 shadow-lg shadow-red-900/20" type="submit">Sign Up</button>
<div className="text-center mt-6">
<span className="text-zinc-500 text-xs">Already have an account? </span>
<button className="text-blue-500 text-xs font-semibold hover:underline" onclick="nav('screen-signin')" type="button">Sign In</button>
</div>
</form>
</div>

<div className="screen w-full max-w-md min-h-screen bg-zinc-950 p-6 flex flex-col justify-center" id="screen-signin">
<div className="mb-8 text-center">
<h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
<p className="text-zinc-500 text-sm">Sign in to access tournaments</p>
</div>
<form className="space-y-4" id="signin-form">
<div className="bg-zinc-900 rounded-xl p-3.5 flex items-center border border-zinc-800 focus-within:border-blue-500/50 transition-colors">
<i className="text-blue-500 w-5 h-5 mr-3" data-lucide="mail"></i>
<input className="bg-transparent w-full outline-none text-sm placeholder-zinc-500" id="login-email" placeholder="Email Address" required="" type="email"/>
</div>
<div className="bg-zinc-900 rounded-xl p-3.5 flex items-center border border-zinc-800 focus-within:border-blue-500/50 transition-colors">
<i className="text-blue-500 w-5 h-5 mr-3" data-lucide="lock"></i>
<input className="bg-transparent w-full outline-none text-sm placeholder-zinc-500" id="login-pass" placeholder="Password" required="" type="password"/>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-900/20" type="submit">Sign In</button>
</form>
<button className="mt-6 text-zinc-500 text-sm hover:text-white w-full text-center" onclick="nav('screen-start')">Back to Home</button>
</div>

<div className="screen w-full max-w-md min-h-screen bg-zinc-950 p-6 flex flex-col justify-center border-x border-red-900/10" id="screen-admin-login">
<div className="mb-8 text-center">
<div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-red-500" data-lucide="shield-check"></i>
</div>
<h2 className="text-2xl font-bold text-red-500 mb-2">Admin Panel</h2>
<p className="text-zinc-500 text-sm">Restricted Access Only</p>
</div>
<form className="space-y-4" id="admin-login-form">
<div className="bg-zinc-900 rounded-xl p-3.5 flex items-center border border-zinc-800 focus-within:border-red-500/50 transition-colors">
<i className="text-red-500 w-5 h-5 mr-3" data-lucide="user-check"></i>
<input className="bg-transparent w-full outline-none text-sm placeholder-zinc-500" id="admin-email" placeholder="Admin Email" required="" type="email"/>
</div>
<div className="bg-zinc-900 rounded-xl p-3.5 flex items-center border border-zinc-800 focus-within:border-red-500/50 transition-colors">
<i className="text-red-500 w-5 h-5 mr-3" data-lucide="key"></i>
<input className="bg-transparent w-full outline-none text-sm placeholder-zinc-500" id="admin-pass" placeholder="Password" required="" type="password"/>
</div>
<button className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-3.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-red-900/20" type="submit">Access Dashboard</button>
</form>
<button className="mt-6 text-zinc-500 text-sm hover:text-white w-full text-center" onclick="nav('screen-start')">Exit</button>
</div>

<div className="screen w-full max-w-md min-h-screen bg-zinc-950 flex flex-col pb-20" id="screen-dashboard">

<div className="sticky top-0 z-20 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
<div>
<h1 className="font-bold text-lg tracking-tight">AH TOURNAMENT</h1>
<p className="text-xs text-zinc-500" id="user-welcome-name">Player</p>
</div>
<div className="flex items-center bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
<i className="w-3.5 h-3.5 text-cyan-400 mr-2 fill-cyan-400/20" data-lucide="gem"></i>
<span className="text-sm font-semibold" id="user-diamond-display">0</span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div id="notice-section">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-orange-500" data-lucide="bell"></i>
<h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Notice Board</h3>
</div>
<div className="space-y-3" id="notice-list">

</div>
</div>

<div id="tournament-section">
<div className="flex items-center gap-2 mb-3 mt-6">
<i className="w-4 h-4 text-blue-500" data-lucide="swords"></i>
<h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Tournaments</h3>
</div>
<div className="space-y-4" id="tournament-list">

</div>
</div>

<div className="hidden" id="wallet-section">
<div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 mb-6">
<h2 className="text-zinc-400 text-xs uppercase mb-1">Total Balance</h2>
<div className="flex items-center">
<i className="w-6 h-6 text-cyan-400 mr-2" data-lucide="gem"></i>
<span className="text-3xl font-bold text-white" id="wallet-balance">0</span>
</div>
</div>

<div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 mb-6">
<h3 className="font-semibold text-white mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-green-500" data-lucide="ticket"></i> Redeem Code
                    </h3>
<p className="text-xs text-zinc-500 mb-3">Enter the deposit code provided by admin to get diamonds instantly.</p>
<div className="flex gap-2">
<input className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm focus:border-green-500 outline-none uppercase" id="redeem-input" placeholder="Enter Code (e.g. AH-X9Y2)" type="text"/>
<button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium" onclick="redeemCode()">Redeem</button>
</div>
</div>

<div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 mb-6">
<h3 className="font-semibold text-white mb-3">Contact Admin</h3>
<p className="text-xs text-zinc-500 mb-4">Contact on WhatsApp to buy deposit codes.</p>
<div className="flex items-center justify-between bg-zinc-950 p-3 rounded-lg border border-zinc-800">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-green-500" data-lucide="phone"></i>
<div>
<p className="text-xs text-zinc-500">WhatsApp</p>
<p className="text-sm font-mono font-medium" id="admin-contact-display">Not Set</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">
<h3 className="font-semibold text-white mb-3">Withdraw Winnings</h3>
<div className="space-y-3">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-300" id="withdraw-method">
<option value="easypaisa">Easypaisa</option>
<option value="jazzcash">JazzCash</option>
</select>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm outline-none" id="withdraw-name" placeholder="Account Name" type="text"/>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm outline-none" id="withdraw-number" placeholder="Account Number" type="number"/>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm outline-none" id="withdraw-amount" placeholder="Diamonds to Withdraw" type="number"/>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg text-sm" onclick="requestWithdraw()">Submit Request</button>
</div>
</div>
</div>

<div className="hidden text-center pt-8" id="profile-section">
<div className="w-20 h-20 bg-zinc-800 rounded-full mx-auto flex items-center justify-center mb-4">
<i className="w-10 h-10 text-zinc-500" data-lucide="user"></i>
</div>
<h2 className="text-xl font-bold text-white" id="profile-name">User Name</h2>
<p className="text-zinc-500 text-sm mb-1" id="profile-ign">IGN: -</p>
<div className="bg-zinc-900 inline-block px-3 py-1 rounded text-xs text-zinc-400 font-mono mb-6" id="profile-id">ID: -</div>
<button className="w-full bg-zinc-900 border border-red-900/30 text-red-500 py-3 rounded-xl font-medium hover:bg-red-900/10" onclick="logout()">Sign Out</button>
</div>
</div>

<div className="fixed bottom-0 w-full max-w-md bg-zinc-950 border-t border-zinc-800 flex justify-around py-3 px-2 z-30">
<button className="nav-btn active flex flex-col items-center gap-1 text-zinc-500 hover:text-white w-16" onclick="switchTab('home')">
<i className="w-5 h-5" data-lucide="home"></i><span className="text-[10px]">Home</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-zinc-500 hover:text-white w-16" onclick="switchTab('wallet')">
<i className="w-5 h-5" data-lucide="wallet"></i><span className="text-[10px]">Wallet</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-zinc-500 hover:text-white w-16" onclick="switchTab('profile')">
<i className="w-5 h-5" data-lucide="user"></i><span className="text-[10px]">Profile</span>
</button>
</div>
</div>

<div className="screen w-full max-w-md min-h-screen bg-zinc-950 flex flex-col pb-6" id="screen-admin-dashboard">
<div className="sticky top-0 z-20 bg-red-950/20 backdrop-blur-md border-b border-red-900/30 px-6 py-4 flex justify-between items-center">
<h1 className="font-bold text-lg tracking-tight text-red-500">ADMIN PANEL</h1>
<button className="text-xs bg-red-900/30 text-red-400 px-3 py-1 rounded border border-red-900/50" onclick="logoutAdmin()">Logout</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-8">

<div className="space-y-3">
<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2">Create Tournament</h3>
<form className="space-y-3 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800" id="create-tourney-form">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-sm text-zinc-300" id="adm-t-type">
<option value="Solo">Solo</option>
<option value="Duo">Duo</option>
<option value="Squad">Squad</option>
</select>
<div className="grid grid-cols-2 gap-2">
<input className="bg-zinc-950 border border-zinc-800 rounded p-2 text-sm" id="adm-t-date" placeholder="Date (DD/MM)" required="" type="text"/>
<input className="bg-zinc-950 border border-zinc-800 rounded p-2 text-sm" id="adm-t-time" placeholder="Time (e.g. 8:00 PM)" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-2">
<input className="bg-zinc-950 border border-zinc-800 rounded p-2 text-sm" id="adm-t-fee" placeholder="Entry Fee" required="" type="number"/>
<input className="bg-zinc-950 border border-zinc-800 rounded p-2 text-sm" id="adm-t-prize" placeholder="Prize Pool" required="" type="number"/>
</div>
<button className="w-full bg-white text-black font-semibold py-2 rounded text-sm hover:bg-zinc-200" type="submit">Publish Tournament</button>
</form>
</div>

<div className="space-y-3">
<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2">Manage Active Tournaments</h3>
<div className="space-y-3" id="admin-tourney-list">

</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2">Generate Deposit Code</h3>
<div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 space-y-3">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-sm" id="adm-code-amount" placeholder="Amount of Diamonds" type="number"/>
<button className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded text-sm" onclick="adminGenerateCode()">Generate Code</button>
<div className="hidden bg-black p-3 rounded text-center border border-dashed border-zinc-700" id="generated-code-display">
<span className="text-zinc-400 text-xs block mb-1">Copy this code:</span>
<span className="text-xl font-mono text-green-400 font-bold tracking-widest select-all" id="gen-code-text"></span>
</div>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2">Gift Diamonds</h3>
<div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 space-y-3">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-sm" id="gift-username" placeholder="Exact User Name" type="text"/>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-sm" id="gift-amount" placeholder="Amount" type="number"/>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded text-sm" onclick="adminGiftDiamonds()">Send Diamonds</button>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2">Notices</h3>
<div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 space-y-2">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-sm" id="adm-notice-text" placeholder="Enter notice text..." type="text"/>
<button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 rounded text-sm" onclick="adminAddNotice()">Post Notice</button>
<button className="w-full border border-red-900 text-red-500 py-1.5 rounded text-xs" onclick="adminClearNotices()">Clear All Notices</button>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2">Settings</h3>
<div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 space-y-2">
<label className="text-xs text-zinc-500">WhatsApp Contact Number</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-sm" id="adm-contact-num" placeholder="+92..." type="text"/>
<button className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 rounded text-sm" onclick="adminSaveSettings()">Save Contact</button>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2">Pending Withdrawals</h3>
<div className="space-y-2" id="admin-withdraw-list">

</div>
</div>
</div>
</div>



    </>
  );
}
