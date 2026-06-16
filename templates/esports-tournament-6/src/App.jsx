import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- DATA & STATE ---
        const state = {
            role: 'user', 
            user: null,
            noticeText: "Welcome to AH Battle! Official tournaments are live. Join via code or direct entry. Use fair play only.",
            tournaments: [],
            withdrawals: []
        };

        // --- INIT ---
        window.onload = () => {
            setTimeout(() => {
                document.getElementById('splash-screen').style.display = 'none';
                document.getElementById('auth-screen').classList.remove('hidden');
            }, 2000);
        };

        // --- AUTH LOGIC ---
        function toggleAuthMode() {
            const login = document.getElementById('login-container');
            const signup = document.getElementById('signup-container');
            if(login.classList.contains('hidden')) {
                login.classList.remove('hidden');
                signup.classList.add('hidden');
            } else {
                login.classList.add('hidden');
                signup.classList.remove('hidden');
            }
        }

        function handleLogin() {
            const id = document.getElementById('login-id').value;
            if(id) {
                state.role = id.toLowerCase().includes('admin') ? 'admin' : 'user';
                
                state.user = {
                    name: id.split('@')[0],
                    id: 'AH-' + Math.floor(Math.random() * 10000),
                    balance: 1500, // Dummy balance for demo
                    winnings: 0
                };
                
                if(state.role === 'admin') {
                    state.user.name = "Admin User";
                }

                document.getElementById('auth-screen').classList.add('hidden');
                document.getElementById('app-container').classList.remove('hidden');
                initApp();
            } else {
                showToast('Please enter email');
            }
        }

        function handleSignup() {
            showToast('Account Created! Please Login.');
            toggleAuthMode();
        }

        function handleLogout() {
            window.location.reload();
        }

        // --- APP NAVIGATION ---
        function initApp() {
            // Update User Info
            document.getElementById('user-role-badge').innerText = state.role.toUpperCase();
            document.getElementById('profile-name').innerText = state.user.name;
            document.getElementById('my-referral-code').innerText = `AH-${state.user.name.toUpperCase().slice(0,4)}`;
            
            // Set Wallet
            document.getElementById('wallet-total').innerText = state.user.balance;

            // Set Notice Text
            document.getElementById('startup-notice-text').innerText = state.noticeText;

            // Show Startup Notice Modal
            setTimeout(() => {
                document.getElementById('notice-modal').classList.remove('hidden');
            }, 500);

            // Admin Button Visibility
            if(state.role === 'admin') {
                document.getElementById('admin-panel-btn').classList.remove('hidden');
                document.getElementById('admin-panel-btn').classList.add('flex');
            }

            switchPage('home');
        }

        function closeNotice() {
            document.getElementById('notice-modal').classList.add('hidden');
        }

        function switchPage(pageId) {
            document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
            document.getElementById(`page-${pageId}`).classList.add('active');
            
            // Update Bottom Nav Styling
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-orange-500');
                btn.classList.add('text-slate-600');
                if(btn.onclick.toString().includes(pageId)) {
                    btn.classList.add('text-orange-500');
                    btn.classList.remove('text-slate-600');
                }
            });

            // Hide nav on Admin page
            if(pageId === 'admin') {
                document.getElementById('bottom-nav').classList.add('hidden');
                renderAdminData();
            } else {
                document.getElementById('bottom-nav').classList.remove('hidden');
            }
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').innerText = msg;
            toast.classList.remove('-translate-y-32');
            setTimeout(() => toast.classList.add('-translate-y-32'), 3000);
        }

        // --- MODALS ---
        function showModal(type) {
            const modal = document.getElementById('modal-overlay');
            const content = document.getElementById('modal-content');
            modal.classList.remove('hidden');
            
            let html = '';
            
            if(type === 'deposit') {
                html = `
                    <h3 class="text-xl font-bold text-white mb-6 text-center">Deposit Funds</h3>
                    <div class="mb-6">
                        <label class="block text-xs text-slate-400 mb-2 font-bold uppercase">Transaction Code</label>
                        <input type="text" placeholder="Enter Deposit Code" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:border-orange-500 outline-none">
                    </div>
                    <div class="bg-slate-900 rounded-xl p-4 mb-6 border border-slate-800 flex items-center gap-4">
                        <div class="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 shrink-0">
                            <iconify-icon icon="lucide:message-circle" width="24"></iconify-icon>
                        </div>
                        <div>
                            <p class="text-xs text-slate-400">Contact Admin for Code</p>
                            <p class="text-sm font-bold text-white tracking-wide">+92 300 1234567</p>
                        </div>
                    </div>
                    <button onclick="closeModal(); showToast('Code Submitted for Review')" class="w-full py-4 bg-orange-600 hover:bg-orange-500 rounded-xl font-bold text-white shadow-lg shadow-orange-500/20 transition-all">Submit Code</button>
                `;
            } 
            else if (type === 'withdraw') {
                html = `
                    <h3 class="text-xl font-bold text-white mb-6 text-center">Withdraw Funds</h3>
                    <div class="space-y-4">
                         <div>
                            <label class="text-xs text-slate-500 mb-1 block">Account Name</label>
                            <input id="wd-name" type="text" placeholder="EasyPaisa/JazzCash Name" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-orange-500">
                         </div>
                         <div>
                            <label class="text-xs text-slate-500 mb-1 block">Account Number</label>
                            <input id="wd-num" type="number" placeholder="03XXXXXXXXX" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-orange-500">
                         </div>
                         <div>
                            <label class="text-xs text-slate-500 mb-1 block">Amount</label>
                            <input id="wd-amount" type="number" placeholder="Min: 50" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-orange-500">
                         </div>
                    </div>
                    <button onclick="submitWithdraw()" class="w-full py-4 mt-6 bg-green-600 hover:bg-green-500 rounded-xl font-bold text-white shadow-lg shadow-green-600/20 transition-all">Request Withdraw</button>
                `;
            } 
            else if (type === 'redeem') {
                html = `
                    <h3 class="text-xl font-bold text-white mb-6 text-center">Redeem Promo</h3>
                    <input type="text" placeholder="Enter Promo Code" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white mb-6 outline-none focus:border-blue-500">
                    <button onclick="closeModal(); showToast('Code Invalid')" class="w-full py-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg shadow-blue-600/20">Claim Reward</button>
                `;
            }
            content.innerHTML = html;
        }

        function showAdminModal(type) {
            const modal = document.getElementById('modal-overlay');
            const content = document.getElementById('modal-content');
            modal.classList.remove('hidden');

            if(type === 'create-match') {
                content.innerHTML = `
                    <h3 class="text-lg font-bold text-white mb-4">Create Tournament</h3>
                    <div class="space-y-3">
                        <input id="new-match-title" type="text" placeholder="Match Title" class="w-full bg-slate-900 border border-slate-700 p-3 rounded-lg text-white">
                        <select id="new-match-type" class="w-full bg-slate-900 border border-slate-700 p-3 rounded-lg text-slate-300">
                            <option value="Solo">Solo</option>
                            <option value="Duo">Duo</option>
                            <option value="Squad">Squad</option>
                        </select>
                        <div class="flex gap-2">
                            <input id="new-match-fee" type="number" placeholder="Entry Fee" class="w-1/2 bg-slate-900 border border-slate-700 p-3 rounded-lg text-white">
                            <input id="new-match-prize" type="number" placeholder="Prize" class="w-1/2 bg-slate-900 border border-slate-700 p-3 rounded-lg text-white">
                        </div>
                        <button onclick="createMatch()" class="w-full py-3 bg-orange-600 rounded-lg font-bold text-white mt-2">Publish Match</button>
                    </div>
                `;
            } else if (type === 'notice') {
                content.innerHTML = `
                    <h3 class="text-lg font-bold text-white mb-4">Edit Startup Notice</h3>
                    <textarea id="edit-notice-text" rows="4" class="w-full bg-slate-900 border border-slate-700 p-3 rounded-lg text-white mb-4">${state.noticeText}</textarea>
                    <button onclick="saveNotice()" class="w-full py-3 bg-blue-600 rounded-lg font-bold text-white">Save Notice</button>
                `;
            }
        }

        function closeModal() {
            document.getElementById('modal-overlay').classList.add('hidden');
        }

        // --- WITHDRAW LOGIC ---
        function submitWithdraw() {
            const name = document.getElementById('wd-name').value;
            const num = document.getElementById('wd-num').value;
            const amount = document.getElementById('wd-amount').value;

            if(!name || !num || !amount) {
                showToast('Please fill all fields');
                return;
            }
            if(amount > state.user.balance) {
                showToast('Insufficient Balance');
                return;
            }

            // Add to state
            state.withdrawals.push({
                id: Math.floor(Math.random()*1000),
                name, num, amount,
                time: new Date().toLocaleTimeString()
            });

            // Deduct balance (mock)
            state.user.balance -= amount;
            document.getElementById('wallet-total').innerText = state.user.balance;

            closeModal();
            showToast('Request Sent to Admin!');
        }

        // --- ADMIN LOGIC ---
        function saveNotice() {
            state.noticeText = document.getElementById('edit-notice-text').value;
            document.getElementById('startup-notice-text').innerText = state.noticeText;
            closeModal();
            showToast('Notice Updated');
        }

        function createMatch() {
            const title = document.getElementById('new-match-title').value;
            const fee = document.getElementById('new-match-fee').value;
            const prize = document.getElementById('new-match-prize').value;
            const type = document.getElementById('new-match-type').value;

            if(!title || !fee) { showToast('Fill all fields'); return; }

            const match = { id: Math.floor(Math.random() * 1000), title, fee, prize, type, joined: 0, max: 100 };
            state.tournaments.push(match);
            renderTournaments();
            renderAdminData(); // Update admin list too
            closeModal();
            showToast('Tournament Published!');
        }

        function switchAdminTab(tab) {
            document.querySelectorAll('.admin-view').forEach(el => el.classList.add('hidden'));
            document.getElementById(`admin-view-${tab}`).classList.remove('hidden');
            
            // Style Tabs
            const matchesBtn = document.getElementById('tab-matches');
            const wdBtn = document.getElementById('tab-withdrawals');
            
            if(tab === 'matches') {
                matchesBtn.classList.add('bg-slate-800', 'text-white', 'shadow');
                matchesBtn.classList.remove('text-slate-500');
                wdBtn.classList.remove('bg-slate-800', 'text-white', 'shadow');
                wdBtn.classList.add('text-slate-500');
            } else {
                wdBtn.classList.add('bg-slate-800', 'text-white', 'shadow');
                wdBtn.classList.remove('text-slate-500');
                matchesBtn.classList.remove('bg-slate-800', 'text-white', 'shadow');
                matchesBtn.classList.add('text-slate-500');
            }
        }

        function renderAdminData() {
            // Render Matches in Admin
            const adminMatchList = document.getElementById('admin-match-list');
            if(state.tournaments.length > 0) {
                adminMatchList.innerHTML = state.tournaments.map(t => `
                    <div class="bg-slate-900 p-4 rounded-xl flex justify-between items-center border border-slate-800">
                        <div>
                            <p class="font-bold text-sm text-white">#${t.id} - ${t.title}</p>
                            <p class="text-xs text-slate-500">Entry: ${t.fee} | Prize: ${t.prize}</p>
                        </div>
                        <button class="h-8 w-8 bg-red-500/10 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                            <iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
                        </button>
                    </div>
                `).join('');
            }

            // Render Withdrawals in Admin
            const adminWdList = document.getElementById('admin-withdraw-list');
            if(state.withdrawals.length > 0) {
                adminWdList.innerHTML = state.withdrawals.map(w => `
                    <div class="bg-slate-900 p-4 rounded-xl border border-slate-800 relative">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <p class="font-bold text-white text-sm">${w.name}</p>
                                <p class="text-xs text-slate-400 font-mono">${w.num}</p>
                            </div>
                            <span class="text-orange-500 font-bold text-lg">${w.amount}</span>
                        </div>
                        <div class="flex gap-2 mt-3">
                            <button onclick="showToast('Marked as Paid')" class="flex-1 py-1.5 bg-green-600 rounded-lg text-xs font-bold text-white">Approve</button>
                            <button onclick="showToast('Request Rejected')" class="flex-1 py-1.5 bg-red-600 rounded-lg text-xs font-bold text-white">Reject</button>
                        </div>
                    </div>
                `).join('');
            } else {
                adminWdList.innerHTML = `<p class="text-xs text-slate-600 text-center py-8 border border-dashed border-slate-800 rounded-xl">No pending withdrawal requests.</p>`;
            }
        }

        function renderTournaments() {
            const list = document.getElementById('tournament-list');
            if(state.tournaments.length === 0) return;

            let html = '';
            state.tournaments.forEach(t => {
                html += `
                <div class="glass-panel rounded-2xl overflow-hidden border border-slate-800 animate-fade-in group mb-4">
                    <div class="h-32 bg-slate-900 relative">
                         <img src="https://images.unsplash.com/photo-1593305841991-05c29736ce77?auto=format&fit=crop&q=80" class="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity">
                        <div class="absolute top-3 left-3 flex gap-2">
                             <span class="px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] text-white font-bold uppercase border border-white/10">ID: #${t.id}</span>
                             <span class="px-2 py-1 bg-orange-600 rounded-md text-[10px] text-white font-bold uppercase shadow-lg">${t.type}</span>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="font-bold text-white text-base leading-tight w-2/3">${t.title}</h3>
                            <div class="text-right">
                                <p class="text-[10px] text-slate-500 font-bold uppercase">Prize Pool</p>
                                <p class="text-base font-bold text-yellow-500">${t.prize} <span class="text-[10px] text-yellow-500/70">PKR</span></p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center bg-slate-950/50 p-3 rounded-xl border border-slate-800/50 mb-4">
                            <div>
                                <p class="text-[10px] text-slate-500 font-bold uppercase">Entry</p>
                                <p class="text-sm font-bold text-white flex items-center gap-1"><iconify-icon icon="lucide:gem" class="text-blue-500" width="14"></iconify-icon> ${t.fee}</p>
                            </div>
                            <div class="w-px h-8 bg-slate-800"></div>
                            <div class="text-right">
                                <p class="text-[10px] text-slate-500 font-bold uppercase">Spots</p>
                                <p class="text-sm font-bold text-white">${t.joined}/<span class="text-slate-500">${t.max}</span></p>
                            </div>
                        </div>
                        <button class="w-full py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-orange-600 hover:text-white transition-all border border-slate-700 hover:border-orange-500">JOIN MATCH</button>
                    </div>
                </div>`;
            });
            list.innerHTML = html;
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed z-[60] flex flex-col bg-black top-0 right-0 bottom-0 left-0 items-center justify-center" id="splash-screen" style={{display: 'none'}}>
<div className="relative mb-8">

<div className="h-32 w-32 rounded-2xl flex items-center justify-center relative overflow-hidden">
<img alt="AH Tournament" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" src="https://i.ibb.co/3k8y26z/ah-logo-placeholder.png"/>
</div>
</div>
<div className="loader"></div>
<p className="mt-6 text-xs tracking-widest text-slate-500 uppercase font-medium">Loading AH Battle...</p>
</div>

<div className="fixed top-4 left-4 right-4 z-[70] transform -translate-y-32 transition-transform duration-300" id="toast">
<div className="glass-panel p-4 rounded-xl flex items-center gap-3 shadow-2xl border-l-4 border-orange-500 bg-black">
<div className="h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-200" id="toast-title">Notification</h4>
<p className="text-xs text-slate-400" id="toast-msg">Message content here</p>
</div>
</div>
</div>

<div className="fixed inset-0 z-[55] hidden flex items-center justify-center animate-fade-in p-6 bg-black/80" id="notice-modal">
<div className="w-full max-w-sm rounded-xl p-6 relative shadow-2xl border bg-slate-900 text-slate-200 border-slate-800">
<button className="absolute top-3 right-3 hover:text-red-500 text-slate-400" onclick="closeNotice()">
<iconify-icon icon="lucide:x-circle" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-orange-600" icon="lucide:megaphone" width="24"></iconify-icon>
<h2 className="text-lg font-bold uppercase tracking-tight text-white">Announcement</h2>
</div>
<div className="p-4 rounded-lg border mb-4 min-h-[100px] bg-black border-slate-800">
<p className="text-sm font-medium leading-relaxed text-slate-400" id="startup-notice-text">
                    Welcome to AH Battle! Join our premium tournaments. Cheating leads to a permanent ban.
                </p>
</div>
<button className="w-full py-3 font-bold rounded-lg shadow-lg shadow-orange-500/30 active:scale-95 transition-transform bg-orange-600 text-white" onclick="closeNotice()">
                I Understand
            </button>
</div>
</div>

<div className="min-h-screen flex flex-col bg-black pt-6 pr-6 pb-6 pl-6 relative justify-center" id="auth-screen">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-20 right-0 w-72 h-72 rounded-full blur-[100px] bg-orange-600/10"></div>
<div className="absolute bottom-0 -left-10 w-64 h-64 rounded-full blur-[80px] bg-blue-600/5"></div>
</div>
<div className="w-full max-w-md mx-auto animate-fade-in" id="login-container">

<div className="flex flex-col mb-10 items-center">
<div className="w-32 h-32 mb-4 relative drop-shadow-2xl">

<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d4ea76d-c8b8-4416-bf42-36f802dee6ad_320w.png"/>
</div>
<h1 className="text-3xl font-bold mb-1 text-white">Login</h1>
<p className="text-slate-500 text-sm">Sign in to start battling</p>
<p className="text-xs mt-2 text-slate-600">(Use 'admin' in email for admin panel)</p>
</div>

<div className="space-y-4">
<div className="custom-input relative border rounded-xl transition-all duration-300 bg-slate-900 border-slate-800">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-orange-500" icon="lucide:mail" width="20"></iconify-icon>
</div>
<input className="w-full bg-transparent py-4 pl-12 pr-4 placeholder-slate-600 outline-none rounded-xl text-white" id="login-id" placeholder="Email Address" type="text"/>
</div>
<div className="custom-input relative border rounded-xl transition-all duration-300 bg-slate-900 border-slate-800">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-500" icon="lucide:lock" width="20"></iconify-icon>
</div>
<input className="w-full bg-transparent py-4 pl-12 pr-4 placeholder-slate-600 outline-none rounded-xl text-white" id="login-pass" placeholder="Password" type="password"/>
</div>
<button className="w-full py-4 rounded-full bg-gradient-to-r from-orange-500 font-bold text-base shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all mt-4 to-orange-600 text-white" onclick="handleLogin()">
                    Login
                </button>
<div className="relative flex py-3 items-center">
<div className="flex-grow border-t border-slate-800"></div>
<span className="flex-shrink-0 mx-4 text-xs text-slate-600">OR</span>
<div className="flex-grow border-t border-slate-800"></div>
</div>
<button className="w-full py-4 rounded-full border font-bold text-base active:scale-[0.98] transition-all bg-slate-900 border-slate-800 hover:bg-slate-800 text-white" onclick="toggleAuthMode()">
                    Create a New Account
                </button>
</div>
</div>

<div className="w-full max-w-md mx-auto hidden animate-fade-in" id="signup-container">
<div className="flex flex-col items-center mb-8">
<div className="w-20 h-20 mb-2">
<img className="w-full h-full object-contain opacity-80" src="https://i.ibb.co/3k8y26z/ah-logo-placeholder.png"/>
</div>
<h1 className="text-3xl font-bold mb-1 text-white">Register</h1>
<p className="text-slate-500 text-sm">Join the battleground today</p>
</div>
<div className="space-y-3">
<div className="custom-input relative border rounded-xl bg-slate-900 border-slate-800">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><iconify-icon className="text-slate-500" icon="lucide:user"></iconify-icon></div>
<input className="w-full bg-transparent py-3.5 pl-12 pr-4 placeholder-slate-600 outline-none rounded-xl text-white" id="reg-name" placeholder="Full Name" type="text"/>
</div>
<div className="custom-input relative border rounded-xl bg-slate-900 border-slate-800">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><iconify-icon className="text-slate-500" icon="lucide:at-sign"></iconify-icon></div>
<input className="w-full bg-transparent py-3.5 pl-12 pr-4 placeholder-slate-600 outline-none rounded-xl text-white" id="reg-user" placeholder="Username" type="text"/>
</div>
<div className="custom-input relative border rounded-xl bg-slate-900 border-slate-800">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><iconify-icon className="text-slate-500" icon="lucide:mail"></iconify-icon></div>
<input className="w-full bg-transparent py-3.5 pl-12 pr-4 placeholder-slate-600 outline-none rounded-xl text-white" id="reg-email" placeholder="Email Address" type="email"/>
</div>
<div className="custom-input relative border rounded-xl bg-slate-900 border-slate-800">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><iconify-icon className="text-slate-500" icon="lucide:lock"></iconify-icon></div>
<input className="w-full bg-transparent py-3.5 pl-12 pr-4 placeholder-slate-600 outline-none rounded-xl text-white" id="reg-pass" placeholder="Password" type="password"/>
</div>
<button className="w-full py-4 rounded-full bg-gradient-to-r from-orange-500 font-bold text-base shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all mt-4 to-orange-600 text-white" onclick="handleSignup()">
                    Register
                </button>
<button className="w-full py-3 text-sm font-medium text-slate-400 hover:text-white" onclick="toggleAuthMode()">
                    Back to Login
                </button>
</div>
</div>
</div>

<div className="hidden relative min-h-screen pb-20 bg-black" id="app-container">

<header className="fixed top-0 w-full z-40 glass-panel border-b px-4 py-3 flex items-center justify-between border-white/5 bg-black/80">
<div className="flex items-center gap-3">
<div className="h-9 w-9 flex items-center justify-center">
<img className="w-full h-full object-contain" src="https://i.ibb.co/3k8y26z/ah-logo-placeholder.png"/>
</div>
<div>
<h1 className="font-bold text-sm leading-tight text-white">AH Battle</h1>
<p className="text-[10px] font-medium text-slate-400" id="user-role-badge">PLAYER</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 border rounded-full pl-2 pr-3 py-1 bg-slate-900 border-slate-700/50">
<iconify-icon className="text-blue-400" icon="lucide:gem" width="14"></iconify-icon>
<span className="text-xs font-bold text-white" id="header-diamonds">0</span>
</div>
<button className="relative text-slate-400 hover:text-white" onclick="showToast('No new notifications')">
<iconify-icon icon="lucide:bell" width="20"></iconify-icon>
<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
</button>
</div>
</header>

<main className="pt-20 px-4">

<section className="page-section active" id="page-home">

<div className="w-full h-44 rounded-2xl overflow-hidden relative mb-6 group border shadow-2xl border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/40"></div>
<div className="absolute bottom-5 left-5">
<span className="px-2 py-0.5 rounded text-[10px] font-bold mb-2 inline-block shadow-lg bg-red-600 text-white">LIVE NOW</span>
<h2 className="text-xl font-bold leading-tight text-white">AH Elite Series<br/><span className="text-orange-500">Season 1</span></h2>
</div>
</div>

<div className="glass-panel p-2 rounded-lg flex items-center gap-3 mb-6 overflow-hidden border-l-2 border-orange-500 bg-slate-900/30">
<iconify-icon className="text-orange-500 flex-shrink-0" icon="lucide:volume-2" width="18"></iconify-icon>
<div className="whitespace-nowrap overflow-hidden w-full">
<p className="text-xs font-medium animate-[marquee_12s_linear_infinite] text-slate-300">Welcome to AH Battle! Official tournaments are live. Join via code or direct entry. Use fair play only.</p>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<h3 className="font-bold text-base flex items-center gap-2 text-white">
<iconify-icon className="text-yellow-500" icon="lucide:trophy"></iconify-icon>
                        Upcoming Matches
                    </h3>
</div>
<div className="space-y-4" id="tournament-list">

<div className="text-center py-12 glass-panel rounded-2xl border-dashed border-2 border-slate-800">
<iconify-icon className="mb-3 text-slate-700" icon="lucide:gamepad-2" width="40"></iconify-icon>
<p className="text-slate-500 font-medium">No matches available yet.</p>
</div>
</div>
</section>

<section className="page-section" id="page-wallet">

<div className="glass-panel p-6 rounded-3xl border border-orange-500/30 mb-6 relative overflow-hidden bg-gradient-to-br from-slate-900 to-black">
<div className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl bg-orange-600/20"></div>
<p className="text-xs font-medium mb-1 uppercase tracking-wider text-slate-400">Available Balance</p>
<h2 className="text-4xl font-extrabold tracking-tight flex items-baseline gap-1 text-white">
<span id="wallet-total">0</span> <span className="text-sm font-bold text-orange-500">PKR</span>
</h2>
<div className="grid grid-cols-2 gap-4 mt-6">
<div className="p-3 rounded-2xl border bg-black/60 border-white/5">
<p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Deposited</p>
<p className="text-sm font-bold mt-1 text-white" id="wallet-deposited">0</p>
</div>
<div className="p-3 rounded-2xl border bg-black/60 border-white/5">
<p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Winnings</p>
<p className="text-sm font-bold mt-1 text-green-400" id="wallet-winning">0</p>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 mb-8">
<button className="group flex flex-col items-center justify-center gap-3 p-4 glass-panel rounded-2xl active:bg-slate-800 border hover:border-orange-500/50 transition-all border-slate-800" onclick="showModal('deposit')">
<div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-colors">
<iconify-icon icon="lucide:download" width="20"></iconify-icon>
</div>
<span className="text-xs font-bold text-slate-300">Deposit</span>
</button>
<button className="group flex flex-col items-center justify-center gap-3 p-4 glass-panel rounded-2xl active:bg-slate-800 border hover:border-orange-500/50 transition-all border-slate-800" onclick="showModal('withdraw')">
<div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:upload" width="20"></iconify-icon>
</div>
<span className="text-xs font-bold text-slate-300">Withdraw</span>
</button>
<button className="group flex flex-col items-center justify-center gap-3 p-4 glass-panel rounded-2xl active:bg-slate-800 border hover:border-orange-500/50 transition-all border-slate-800" onclick="showModal('redeem')">
<div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:gift" width="20"></iconify-icon>
</div>
<span className="text-xs font-bold text-slate-300">Redeem</span>
</button>
</div>
<h3 className="font-bold mb-4 text-sm px-1 text-slate-200">Recent Transactions</h3>
<div className="space-y-3" id="transaction-list">

<div className="flex flex-col items-center py-8 opacity-50">
<iconify-icon className="mb-2 text-slate-800" icon="lucide:receipt" width="32"></iconify-icon>
<p className="text-xs font-medium text-slate-600">No recent transactions.</p>
</div>
</div>
</section>

<section className="page-section" id="page-refer">
<div className="text-center mb-8 pt-4">
<div className="w-24 h-24 bg-gradient-to-tr from-orange-500 to-yellow-500 rounded-full mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.3)] mb-5">
<iconify-icon className="text-white" icon="lucide:users" width="40"></iconify-icon>
</div>
<h2 className="text-2xl font-bold mb-2 text-white">Refer &amp; Earn</h2>
<p className="text-xs px-6 leading-relaxed text-slate-400">Invite your friends to AH Battle using your unique code and earn rewards when they join their first match.</p>
</div>
<div className="glass-panel p-5 rounded-2xl mb-6 border border-slate-800 bg-slate-900/50">
<p className="text-[10px] text-slate-500 mb-3 text-center uppercase tracking-widest font-bold">Your Referral Code</p>
<div className="border border-dashed rounded-xl p-4 flex justify-between items-center group cursor-pointer hover:border-orange-500/50 transition-colors bg-black border-slate-800" onclick="copyReferral()">
<span className="text-xl font-mono font-bold tracking-widest text-orange-400" id="my-referral-code">AH-USER</span>
<button className="text-slate-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:copy" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="page-section" id="page-leaderboard">

<div className="grid grid-cols-3 gap-3 items-end mb-10 px-2 mt-8">
<div className="flex flex-col items-center">
<div className="h-14 w-14 rounded-full border-2 mb-2 overflow-hidden shadow-lg border-slate-700 bg-slate-800">
<img className="w-full h-full" src="https://ui-avatars.com/api/?name=P2&amp;background=334155&amp;color=fff"/>
</div>
<span className="text-xs font-bold text-slate-300">Killer7</span>
<span className="text-[10px] font-bold mt-0.5 text-orange-400">2nd</span>
</div>
<div className="flex flex-col items-center relative z-10">
<iconify-icon className="absolute -top-6 animate-bounce text-yellow-400" icon="lucide:crown" width="24"></iconify-icon>
<div className="h-20 w-20 rounded-full border-2 border-yellow-500 mb-2 shadow-[0_0_20px_rgba(234,179,8,0.4)] overflow-hidden bg-slate-800">
<img className="w-full h-full" src="https://ui-avatars.com/api/?name=P1&amp;background=eab308&amp;color=000"/>
</div>
<span className="text-sm font-bold text-white">ProMaster</span>
<span className="text-[10px] text-yellow-500 font-bold mt-0.5">1st</span>
</div>
<div className="flex flex-col items-center">
<div className="h-14 w-14 rounded-full border-2 mb-2 overflow-hidden shadow-lg border-slate-700 bg-slate-800">
<img className="w-full h-full" src="https://ui-avatars.com/api/?name=P3&amp;background=334155&amp;color=fff"/>
</div>
<span className="text-xs font-bold text-slate-300">SniperX</span>
<span className="text-[10px] font-bold mt-0.5 text-orange-700">3rd</span>
</div>
</div>
<div className="space-y-3 px-1">
<div className="glass-panel p-4 rounded-xl flex items-center justify-between border-slate-800">
<div className="flex items-center gap-4">
<span className="text-slate-500 font-mono text-sm font-bold w-4">4</span>
<div className="h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold bg-slate-800 text-slate-400">P4</div>
<div>
<p className="text-sm font-bold text-white">GhostRider</p>
<p className="text-[10px] text-slate-500">Tier: Gold</p>
</div>
</div>
<span className="text-xs font-mono font-bold bg-orange-500/10 px-2 py-1 rounded text-orange-400">1240 Wins</span>
</div>
</div>
</section>

<section className="page-section" id="page-profile">
<div className="glass-panel p-6 rounded-3xl text-center mb-6 border bg-gradient-to-b border-slate-800 from-slate-900 to-black">
<div className="h-24 w-24 rounded-full bg-gradient-to-br mx-auto mb-4 flex items-center justify-center text-3xl font-bold border-2 border-orange-500 shadow-xl text-orange-500 overflow-hidden from-slate-800 to-slate-900">
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=User&amp;background=0f172a&amp;color=f97316"/>
</div>
<h2 className="text-xl font-bold text-white" id="profile-name">Username</h2>
<div className="inline-block px-3 py-1 rounded-full mt-2 mb-6 bg-slate-800">
<p className="text-[10px] font-bold tracking-wider text-slate-400" id="profile-ign">ID: NOT SET</p>
</div>
<div className="flex justify-center gap-0 divide-x rounded-xl p-4 border divide-slate-800 bg-slate-900/30 border-slate-800">
<div className="px-6">
<p className="text-lg font-bold text-white">0</p>
<p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Matches</p>
</div>
<div className="px-6">
<p className="text-lg font-bold text-white">0</p>
<p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Kills</p>
</div>
<div className="px-6">
<p className="text-lg font-bold text-white">0</p>
<p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Wins</p>
</div>
</div>
</div>
<div className="space-y-2">
<button className="hidden w-full p-4 glass-panel rounded-2xl items-center justify-between border-orange-500/30 mb-4 hover:border-orange-500 transition-all bg-orange-900/20" id="admin-panel-btn" onclick="switchPage('admin')">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
<iconify-icon icon="lucide:shield"></iconify-icon>
</div>
<span className="text-sm font-bold text-orange-500">Open Admin Panel</span>
</div>
<iconify-icon className="text-orange-500" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="w-full p-4 glass-panel rounded-2xl flex items-center justify-between transition-all group hover:bg-slate-800 hover:border-slate-700" onclick="showToast('Feature coming soon')">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:user"></iconify-icon>
</div>
<span className="text-sm font-medium group-hover:text-white text-slate-300">Account Details</span>
</div>
<iconify-icon className="text-slate-600" icon="lucide:chevron-right"></iconify-icon>
</button>
<button className="w-full p-4 glass-panel rounded-2xl flex items-center justify-between transition-all group hover:bg-slate-800 hover:border-slate-700" onclick="showToast('No history available')">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:history"></iconify-icon>
</div>
<span className="text-sm font-medium group-hover:text-white text-slate-300">Match History</span>
</div>
<iconify-icon className="text-slate-600" icon="lucide:chevron-right"></iconify-icon>
</button>
<button className="w-full p-4 glass-panel rounded-2xl flex items-center justify-between mt-8 group hover:bg-red-900/10 border-red-900/20" onclick="handleLogout()">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:log-out"></iconify-icon>
</div>
<span className="text-sm font-bold text-red-500 group-hover:text-red-400">Logout Account</span>
</div>
</button>
</div>
</section>

<section className="page-section" id="page-admin">

<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-bold text-white">Admin Panel</h2>
<button className="text-xs font-bold text-slate-500 flex items-center gap-1 hover:text-white" onclick="switchPage('home')">
<iconify-icon icon="lucide:arrow-left"></iconify-icon> Exit
                    </button>
</div>

<div className="glass-panel p-5 rounded-2xl border mb-6 flex justify-between items-center shadow-lg bg-black border-slate-800">
<div>
<p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Status</p>
<p className="text-lg font-bold text-green-500 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Online
                        </p>
</div>
<div className="text-right">
<p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Users</p>
<p className="text-lg font-bold text-white" id="admin-user-count">1</p>
</div>
</div>

<div className="flex p-1 rounded-xl mb-6 border bg-slate-900/50 border-slate-800">
<button className="flex-1 py-2 rounded-lg text-xs font-bold shadow transition-all text-white bg-slate-800" id="tab-matches" onclick="switchAdminTab('matches')">Matches</button>
<button className="flex-1 py-2 rounded-lg text-xs font-bold text-slate-500 transition-all hover:text-white" id="tab-withdrawals" onclick="switchAdminTab('withdrawals')">Withdrawals</button>
</div>

<div className="admin-view block" id="admin-view-matches">
<button className="w-full py-4 border border-orange-500 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-500 transition-all mb-4 shadow-lg bg-orange-600 shadow-orange-900/20" onclick="showAdminModal('create-match')">
<iconify-icon className="text-white" icon="lucide:plus-circle" width="20"></iconify-icon>
<span className="text-sm font-bold text-white">Create New Match</span>
</button>
<button className="w-full py-3 border rounded-xl flex items-center justify-center gap-2 transition-all mb-6 bg-slate-900 border-slate-800 hover:border-slate-600" onclick="showAdminModal('notice')">
<iconify-icon className="text-slate-400" icon="lucide:file-edit" width="18"></iconify-icon>
<span className="text-xs font-bold text-slate-300">Edit Startup Notice</span>
</button>
<h3 className="font-bold mb-3 text-xs uppercase tracking-wider px-1 text-slate-400">Active Matches</h3>
<div className="space-y-3" id="admin-match-list">
<p className="text-xs text-center py-8 border border-dashed rounded-xl text-slate-600 border-slate-800">No active tournaments.</p>
</div>
</div>

<div className="admin-view hidden" id="admin-view-withdrawals">
<h3 className="font-bold mb-3 text-xs uppercase tracking-wider px-1 text-slate-400">Pending Requests</h3>
<div className="space-y-3" id="admin-withdraw-list">
<p className="text-xs text-center py-8 border border-dashed rounded-xl text-slate-600 border-slate-800">No pending withdrawal requests.</p>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 w-full glass-panel border-t pb-safe px-6 py-2 flex justify-between items-end z-40 backdrop-blur-xl h-20 border-white/5 bg-black/90" id="bottom-nav">
<button className="nav-btn active flex flex-col items-center gap-1.5 transition-colors mb-2 w-12 text-slate-600" onclick="switchPage('home')">
<iconify-icon icon="lucide:home" width="22"></iconify-icon>
<span className="text-[10px] font-bold">Home</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 transition-colors mb-2 w-12 text-slate-600" onclick="switchPage('wallet')">
<iconify-icon icon="lucide:wallet" width="22"></iconify-icon>
<span className="text-[10px] font-bold">Wallet</span>
</button>
<div className="relative -top-8 group">
<button className="h-14 w-14 rounded-full bg-gradient-to-t to-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)] border-4 group-active:scale-95 transition-transform from-orange-600 text-white border-black" onclick="switchPage('home')">
<iconify-icon icon="lucide:gamepad-2" width="26"></iconify-icon>
</button>
</div>
<button className="nav-btn flex flex-col items-center gap-1.5 transition-colors mb-2 w-12 text-slate-600" onclick="switchPage('leaderboard')">
<iconify-icon icon="lucide:bar-chart-2" width="22"></iconify-icon>
<span className="text-[10px] font-bold">Rank</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 transition-colors mb-2 w-12 text-slate-600" onclick="switchPage('profile')">
<iconify-icon icon="lucide:user" width="22"></iconify-icon>
<span className="text-[10px] font-bold">Profile</span>
</button>
</nav>
</div>

<div className="fixed inset-0 z-[60] hidden flex items-center justify-center animate-fade-in p-4 backdrop-blur-sm bg-black/90" id="modal-overlay">
<div className="w-full max-w-sm rounded-2xl p-6 relative border shadow-2xl bg-black border-slate-800">
<button className="absolute top-4 right-4 text-slate-500 hover:text-white" onclick="closeModal()"><iconify-icon icon="lucide:x-circle" width="24"></iconify-icon></button>
<div id="modal-content"></div>
</div>
</div>


    </>
  );
}
