import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State
        let currentUserRole = 'user'; // 'user', 'staff', 'admin'
        let tournaments = []; // Starts empty
        let userDiamonds = 0;

        // Init Icons
        lucide.createIcons();

        // Role Logic (Simulated)
        function setRole(role) {
            currentUserRole = role;
            const buttons = document.querySelectorAll('.role-btn');
            buttons.forEach(btn => btn.classList.remove('text-orange-500', 'font-medium'));
            buttons.forEach(btn => {
                if(btn.textContent.toLowerCase() === role) btn.classList.add('text-orange-500', 'font-medium');
            });
        }

        // Login Handler
        function handleLogin() {
            // Simple validation simulation
            const btn = document.querySelector('#view-login button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span class="animate-pulse">Signing in...</span>';
            btn.disabled = true;

            setTimeout(() => {
                document.getElementById('view-login').classList.add('hidden');
                document.getElementById('view-home').classList.remove('hidden');
                document.getElementById('view-home').classList.add('flex');
                document.getElementById('bottom-nav').classList.remove('hidden');
                
                updateUIForRole();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1000); // 1s Fake delay
        }

        function handleLogout() {
            document.getElementById('view-home').classList.add('hidden');
            document.getElementById('view-home').classList.remove('flex');
            document.getElementById('view-wallet').classList.add('hidden');
            document.getElementById('view-wallet').classList.remove('flex');
            document.getElementById('view-profile').classList.add('hidden');
            document.getElementById('view-profile').classList.remove('flex');
            document.getElementById('bottom-nav').classList.add('hidden');
            
            document.getElementById('view-login').classList.remove('hidden');
        }

        function updateUIForRole() {
            const adminActions = document.getElementById('admin-actions');
            const usernameDisplay = document.getElementById('username-display');
            const roleBadge = document.getElementById('role-badge');

            roleBadge.textContent = currentUserRole.toUpperCase();
            usernameDisplay.textContent = currentUserRole === 'user' ? 'Gamer123' : (currentUserRole === 'admin' ? 'Super Admin' : 'Staff Member');

            if (currentUserRole === 'admin' || currentUserRole === 'staff') {
                adminActions.classList.remove('hidden');
                adminActions.classList.add('grid');
                roleBadge.classList.add(currentUserRole === 'admin' ? 'text-red-500' : 'text-blue-500');
            } else {
                adminActions.classList.add('hidden');
                adminActions.classList.remove('grid');
            }
        }

        // View Switcher
        function switchView(viewName) {
            const views = ['home', 'wallet', 'profile'];
            views.forEach(v => {
                const el = document.getElementById(`view-${v}`);
                if (v === viewName) {
                    el.classList.remove('hidden');
                    el.classList.add('flex');
                } else {
                    el.classList.add('hidden');
                    el.classList.remove('flex');
                }
            });

            // Update Nav Icons color
            const navBtns = document.querySelectorAll('.nav-btn');
            navBtns.forEach(btn => {
                if(btn.querySelector('span').textContent.toLowerCase() === viewName) {
                    btn.classList.add('text-orange-500');
                    btn.classList.remove('text-zinc-500');
                } else {
                    btn.classList.remove('text-orange-500');
                    btn.classList.add('text-zinc-500');
                }
            });
        }

        // Modal Logic
        function openModal(id) {
            document.getElementById(id).classList.remove('hidden');
        }
        function closeModal(id) {
            document.getElementById(id).classList.add('hidden');
        }

        // Tournament Logic
        function handleCreateTournament(e) {
            e.preventDefault();
            
            const newTourney = {
                id: Date.now(),
                title: document.getElementById('t-title').value,
                map: document.getElementById('t-map').value,
                type: document.getElementById('t-type').value,
                entry: document.getElementById('t-entry').value,
                kill: document.getElementById('t-kill').value,
                pool: document.getElementById('t-pool').value,
                time: document.getElementById('t-time').value
            };

            tournaments.unshift(newTourney); // Add to top
            renderTournaments();
            closeModal('create-tournament-modal');
            e.target.reset();
            
            // Send mock push notification
            showNotification(`New ${newTourney.title} Match Added!`);
        }

        function renderTournaments() {
            const container = document.getElementById('tournaments-container');
            container.innerHTML = '';

            if (tournaments.length === 0) {
                 container.innerHTML = `
                    <div class="flex flex-col items-center justify-center py-12 border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30">
                        <div class="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                            <i data-lucide="gamepad-2" class="w-8 h-8 text-zinc-600"></i>
                        </div>
                        <h4 class="text-zinc-400 font-medium">No Matches Available</h4>
                        <p class="text-zinc-600 text-xs mt-1">Check back later for new tournaments</p>
                    </div>`;
                    lucide.createIcons();
                return;
            }

            tournaments.forEach(t => {
                const date = new Date(t.time).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'});
                
                const card = document.createElement('div');
                card.className = 'bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg animate-enter';
                card.innerHTML = `
                    <div class="relative h-28 bg-zinc-800">
                         <!-- Banner Placeholder -->
                        <div class="absolute inset-0 bg-gradient-to-r from-orange-900/40 to-black"></div>
                        <div class="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10">ID: #${t.id.toString().slice(-4)}</div>
                        <div class="absolute top-3 right-3 flex space-x-2">
                             <span class="px-2 py-1 rounded text-[10px] font-bold bg-blue-600 text-white">${t.type}</span>
                             <span class="px-2 py-1 rounded text-[10px] font-bold bg-zinc-700 text-zinc-300">${t.map}</span>
                        </div>
                        <div class="absolute bottom-3 left-3">
                            <h3 class="font-bold text-white text-lg tracking-tight leading-none">${t.title}</h3>
                            <p class="text-xs text-orange-400 mt-1 flex items-center gap-1">
                                <i data-lucide="calendar" class="w-3 h-3"></i> ${date}
                            </p>
                        </div>
                    </div>
                    
                    <div class="p-4">
                        <div class="grid grid-cols-3 gap-2 mb-4">
                            <div class="text-center p-2 bg-black rounded-lg border border-zinc-800">
                                <div class="text-[10px] text-zinc-500 uppercase">Prize Pool</div>
                                <div class="text-sm font-bold text-white flex items-center justify-center gap-1">
                                    <i data-lucide="diamond" class="w-3 h-3 text-blue-400"></i> ${t.pool}
                                </div>
                            </div>
                            <div class="text-center p-2 bg-black rounded-lg border border-zinc-800">
                                <div class="text-[10px] text-zinc-500 uppercase">Per Kill</div>
                                <div class="text-sm font-bold text-white flex items-center justify-center gap-1">
                                    <i data-lucide="diamond" class="w-3 h-3 text-blue-400"></i> ${t.kill}
                                </div>
                            </div>
                            <div class="text-center p-2 bg-black rounded-lg border border-zinc-800">
                                <div class="text-[10px] text-zinc-500 uppercase">Entry</div>
                                <div class="text-sm font-bold text-orange-500 flex items-center justify-center gap-1">
                                    <i data-lucide="diamond" class="w-3 h-3 text-orange-500"></i> ${t.entry}
                                </div>
                            </div>
                        </div>
                        
                        <div class="w-full bg-zinc-800 h-2 rounded-full mb-2 overflow-hidden">
                            <div class="bg-orange-500 h-full w-[15%]"></div>
                        </div>
                        <div class="flex justify-between text-xs text-zinc-500 mb-4">
                            <span>12/48 Joined</span>
                            <span>Filling fast</span>
                        </div>

                        <button onclick="joinMatch(${t.entry})" class="w-full py-3 bg-zinc-100 hover:bg-white text-black font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                            Join Now
                        </button>
                    </div>
                `;
                container.appendChild(card);
            });
            lucide.createIcons();
        }

        function joinMatch(cost) {
            if(userDiamonds < cost) {
                alert("Insufficient Diamonds! Please deposit.");
            } else {
                alert("Joined Successfully!");
            }
        }

        // Mock Notification System
        function showNotification(msg) {
            // In a real app this would use the Notifications API
            const notif = document.createElement('div');
            notif.className = 'fixed top-4 left-4 right-4 bg-zinc-800 border border-orange-500/50 text-white p-4 rounded-xl shadow-2xl z-50 animate-enter flex items-center gap-3';
            notif.innerHTML = `<i data-lucide="bell" class="text-orange-500"></i> <div><h4 class="font-bold text-sm">Alert</h4><p class="text-xs text-zinc-300">${msg}</p></div>`;
            document.body.appendChild(notif);
            lucide.createIcons();
            
            setTimeout(() => {
                notif.remove();
            }, 3000);
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full h-full max-w-md mx-auto relative flex flex-col min-h-screen bg-black shadow-2xl overflow-y-auto" id="app">

<div className="flex flex-col justify-center items-center px-6 min-h-screen z-50 bg-black" id="view-login">

<div className="mb-6 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative w-28 h-28 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center overflow-hidden shadow-2xl">

<img alt="Logo" className="w-full h-full object-cover opacity-80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=SJBattle&amp;backgroundColor=b6e3f4"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<span className="absolute bottom-1 font-bold italic tracking-tighter text-orange-500 text-lg drop-shadow-md">SJ BATTLE</span>
</div>
</div>

<h1 className="text-3xl font-bold tracking-tight text-orange-500 mb-2">Login</h1>
<p className="text-zinc-400 text-sm mb-8 font-light">Please sign in to continue</p>

<div className="w-full mb-4 flex justify-center space-x-4 text-xs text-zinc-600">
<button className="role-btn text-orange-500 font-medium" onclick="setRole('user')">User</button>
<button className="role-btn hover:text-zinc-300" onclick="setRole('staff')">Staff</button>
<button className="role-btn hover:text-zinc-300" onclick="setRole('admin')">Admin</button>
</div>

<div className="w-full space-y-4">

<div className="input-group relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors duration-200">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="mail"></i>
</div>
<input className="w-full bg-zinc-800/50 border border-zinc-700 text-zinc-100 text-sm rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-0 transition-all duration-200 placeholder:text-zinc-600" placeholder="Email Address" type="email"/>
</div>

<div className="input-group relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors duration-200">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="lock"></i>
</div>
<input className="w-full bg-zinc-800/50 border border-zinc-700 text-zinc-100 text-sm rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-0 transition-all duration-200 placeholder:text-zinc-600" placeholder="Password" type="password"/>
</div>

<label className="custom-checkbox flex items-center space-x-3 cursor-pointer mt-2">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded-full border border-zinc-600 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-white stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-zinc-400 text-sm font-light">Stay Logged In</span>
</label>

<button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-medium py-4 rounded-xl shadow-lg shadow-orange-900/20 active:scale-[0.98] transition-transform duration-200 mt-4" onclick="handleLogin()">
                    Login
                </button>

<div className="relative py-4">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-zinc-800"></div>
</div>
<div className="relative flex justify-center text-xs">
<span className="px-4 bg-black text-zinc-500">OR</span>
</div>
</div>

<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 rounded-xl shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-transform duration-200">
                    Create a New Account
                </button>

<div className="flex items-center justify-center space-x-2 mt-6 cursor-pointer opacity-80 hover:opacity-100">
<i className="w-4 h-4 text-orange-500 stroke-[1.5]" data-lucide="message-square"></i>
<span className="text-orange-500 text-sm">Click here to contact admin</span>
</div>
</div>
<div className="text-red-500 text-xs mt-4 h-4 text-center w-full" id="login-msg"></div>
</div>

<div className="hidden flex-col h-screen pb-20" id="view-home">

<header className="bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 p-5 sticky top-0 z-30">
<div className="flex justify-between items-center">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
<i className="w-5 h-5 text-zinc-400" data-lucide="user"></i>
</div>
<div>
<h2 className="text-sm font-semibold text-white leading-tight" id="username-display">Player</h2>
<p className="text-xs text-orange-500 font-medium tracking-wide" id="role-badge">USER</p>
</div>
</div>
<div className="flex items-center space-x-1 bg-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-700">
<i className="w-4 h-4 text-blue-400 fill-blue-400/20" data-lucide="diamond"></i>
<span className="text-sm font-bold text-white" id="diamond-balance">0</span>
</div>
</div>
</header>

<div className="p-5 pb-0">
<div className="grid grid-cols-3 gap-3">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-col items-center">
<span className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Matches</span>
<span className="text-lg font-bold text-white">0</span>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-col items-center">
<span className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Wins</span>
<span className="text-orange-500 text-lg font-bold">0</span>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-col items-center">
<span className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Earnings</span>
<span className="text-blue-400 text-lg font-bold">0</span>
</div>
</div>
</div>

<div className="px-5 mt-6 hidden" id="announcement-section">
<div className="bg-gradient-to-r from-orange-900/20 to-zinc-900 border border-orange-900/50 rounded-xl p-4 flex items-start space-x-3">
<i className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" data-lucide="bell"></i>
<div>
<h3 className="text-sm font-semibold text-orange-400 mb-1">Announcement</h3>
<p className="text-xs text-zinc-300 leading-relaxed">Welcome to SJ Battle! Join tournaments to win diamonds.</p>
</div>
</div>
</div>

<div className="px-5 mt-6 hidden grid-cols-2 gap-3" id="admin-actions">
<button className="bg-zinc-800 border border-zinc-700 p-4 rounded-xl flex items-center justify-center space-x-2 active:bg-zinc-700" onclick="openModal('create-tournament-modal')">
<i className="w-5 h-5 text-green-500" data-lucide="plus-circle"></i>
<span className="text-sm font-medium">Add Match</span>
</button>
<button className="bg-zinc-800 border border-zinc-700 p-4 rounded-xl flex items-center justify-center space-x-2 active:bg-zinc-700" onclick="openModal('manage-users-modal')">
<i className="w-5 h-5 text-blue-500" data-lucide="users"></i>
<span className="text-sm font-medium">Users</span>
</button>
</div>

<div className="p-5">
<div className="flex justify-between items-end mb-4">
<h3 className="text-lg font-semibold tracking-tight text-white">Upcoming Matches</h3>
<span className="text-xs text-zinc-500">Live Updates</span>
</div>
<div className="space-y-4" id="tournaments-container">

<div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30">
<div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
<i className="w-8 h-8 text-zinc-600" data-lucide="gamepad-2"></i>
</div>
<h4 className="text-zinc-400 font-medium">No Matches Available</h4>
<p className="text-zinc-600 text-xs mt-1">Check back later for new tournaments</p>
</div>
</div>
</div>
</div>

<div className="hidden flex-col h-screen pb-20" id="view-wallet">
<header className="bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 p-5 sticky top-0 z-30">
<h2 className="text-lg font-semibold tracking-tight">My Wallet</h2>
</header>
<div className="p-5">

<div className="bg-gradient-to-br from-zinc-800 to-black border border-zinc-700 rounded-2xl p-6 mb-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-32 h-32 text-blue-500" data-lucide="diamond"></i>
</div>
<p className="text-zinc-400 text-sm mb-1">Total Balance</p>
<div className="flex items-end space-x-2">
<i className="w-8 h-8 text-blue-500 fill-blue-500/20 mb-1" data-lucide="diamond"></i>
<span className="text-4xl font-bold text-white tracking-tight" id="wallet-balance">0</span>
</div>
</div>

<div className="flex p-1 bg-zinc-900 rounded-xl mb-6 border border-zinc-800">
<button className="flex-1 py-2 text-sm font-medium rounded-lg bg-zinc-700 text-white shadow-sm">Withdraw</button>
<button className="flex-1 py-2 text-sm font-medium text-zinc-500">Deposit</button>
</div>

<div className="space-y-4">
<div>
<label className="text-xs text-zinc-400 block mb-2">Select Method</label>
<div className="grid grid-cols-2 gap-3">
<button className="p-3 border border-orange-500/50 bg-orange-500/10 rounded-xl text-sm text-orange-500 font-medium flex items-center justify-center">Easypaisa</button>
<button className="p-3 border border-zinc-700 bg-zinc-800 rounded-xl text-sm text-zinc-400 font-medium flex items-center justify-center">JazzCash</button>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-400">Account Number</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm focus:border-orange-500 focus:outline-none transition-colors" placeholder="03XXXXXXXXX" type="number"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-400">Account Title</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm focus:border-orange-500 focus:outline-none transition-colors" placeholder="Name on account" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-400">Amount (Diamonds)</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm focus:border-orange-500 focus:outline-none transition-colors" placeholder="Min 100" type="number"/>
</div>
<button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium py-3 rounded-xl mt-4 active:scale-[0.98] transition-all">
                        Request Withdrawal
                    </button>
</div>
</div>
</div>

<div className="hidden flex-col h-screen pb-20" id="view-profile">
<header className="p-5 pb-8 bg-zinc-900 border-b border-zinc-800">
<div className="flex flex-col items-center">
<div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center mb-3">
<i className="w-10 h-10 text-zinc-400" data-lucide="user"></i>
</div>
<h2 className="text-xl font-bold text-white">PlayerOne</h2>
<p className="text-xs text-zinc-500 font-mono mt-1">UID: 83920192</p>
</div>
</header>
<div className="p-5 space-y-3">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-4 hover:bg-zinc-800/50">
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-zinc-400" data-lucide="ticket"></i>
<span className="text-sm">Redeem Code</span>
</div>
<i className="w-4 h-4 text-zinc-600" data-lucide="chevron-right"></i>
</button>
<div className="w-full h-px bg-zinc-800"></div>
<button className="w-full flex items-center justify-between p-4 hover:bg-zinc-800/50">
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-zinc-400" data-lucide="share-2"></i>
<span className="text-sm">Refer &amp; Earn</span>
</div>
<i className="w-4 h-4 text-zinc-600" data-lucide="chevron-right"></i>
</button>
<div className="w-full h-px bg-zinc-800"></div>
<button className="w-full flex items-center justify-between p-4 hover:bg-zinc-800/50" onclick="handleLogout()">
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-red-500" data-lucide="log-out"></i>
<span className="text-sm text-red-500">Logout</span>
</div>
</button>
</div>
</div>
</div>

<nav className="hidden fixed bottom-0 max-w-md w-full bg-black/90 backdrop-blur-lg border-t border-zinc-800 pb-safe z-40" id="bottom-nav">
<div className="grid grid-cols-4 h-16">
<button className="nav-btn flex flex-col items-center justify-center space-y-1 text-orange-500" onclick="switchView('home')">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="home"></i>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="nav-btn flex flex-col items-center justify-center space-y-1 text-zinc-500 hover:text-zinc-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="trophy"></i>
<span className="text-[10px] font-medium">Results</span>
</button>
<button className="nav-btn flex flex-col items-center justify-center space-y-1 text-zinc-500 hover:text-zinc-300" onclick="switchView('wallet')">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="wallet"></i>
<span className="text-[10px] font-medium">Wallet</span>
</button>
<button className="nav-btn flex flex-col items-center justify-center space-y-1 text-zinc-500 hover:text-zinc-300" onclick="switchView('profile')">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="user"></i>
<span className="text-[10px] font-medium">Profile</span>
</button>
</div>
</nav>

<div className="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center" id="create-tournament-modal">
<div className="bg-zinc-900 w-full max-w-md rounded-t-2xl sm:rounded-2xl border border-zinc-800 p-5 animate-enter">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-bold text-white">Create Tournament</h3>
<button className="text-zinc-500" onclick="closeModal('create-tournament-modal')"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<form className="space-y-3" id="create-tournament-form" onsubmit="handleCreateTournament(event)">
<input className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-sm focus:border-orange-500 focus:outline-none" id="t-title" placeholder="Match Title (e.g. BR Squad)" required="" type="text"/>
<div className="grid grid-cols-2 gap-3">
<input className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-sm" id="t-map" placeholder="Map (Bermuda)" required="" type="text"/>
<select className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-sm text-zinc-300" id="t-type">
<option value="Solo">Solo</option>
<option value="Duo">Duo</option>
<option value="Squad">Squad</option>
</select>
</div>
<div className="grid grid-cols-3 gap-3">
<div>
<label className="text-[10px] text-zinc-500 uppercase">Entry</label>
<input className="w-full bg-black border border-zinc-700 rounded-lg p-2 text-sm" id="t-entry" placeholder="0" required="" type="number"/>
</div>
<div>
<label className="text-[10px] text-zinc-500 uppercase">Per Kill</label>
<input className="w-full bg-black border border-zinc-700 rounded-lg p-2 text-sm" id="t-kill" placeholder="0" required="" type="number"/>
</div>
<div>
<label className="text-[10px] text-zinc-500 uppercase">Pool</label>
<input className="w-full bg-black border border-zinc-700 rounded-lg p-2 text-sm" id="t-pool" placeholder="0" required="" type="number"/>
</div>
</div>
<div>
<label className="text-[10px] text-zinc-500 uppercase">Start Time</label>
<input className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-sm text-zinc-300" id="t-time" required="" type="datetime-local"/>
</div>
<button className="w-full bg-orange-600 text-white font-semibold py-3 rounded-xl mt-2" type="submit">Publish Match</button>
</form>
</div>
</div>
</div>



    </>
  );
}
