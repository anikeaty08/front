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
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#020203',
surface: '#0C0C0E',
border: '#1E1E22',
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'beam': 'beam 2s linear infinite',
},
keyframes: {
beam: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
}
}
}
}
}



        // --- System State ---
        let isLoggedIn = false;
        let isAdmin = false;
        
        // --- Admin Secret Logic ---
        document.addEventListener('keydown', function(e) {
            // Secret Shortcut: Ctrl + Shift + L
            if (e.ctrlKey && e.shiftKey && e.code === 'KeyL') {
                e.preventDefault();
                showAdminLogin();
            }
        });

        // Hash listener for direct URL access
        window.addEventListener('hashchange', checkHash);
        window.addEventListener('load', checkHash);

        function checkHash() {
            if (window.location.hash === '#admin-access') {
                showAdminLogin();
            }
        }

        function showAdminLogin() {
            navigateTo('admin-login');
        }

        function verifyAdmin() {
            const id = document.getElementById('admin-id').value;
            const key = document.getElementById('admin-key').value;
            const errorMsg = document.getElementById('admin-error');

            if (id === 'admin@core.system' && key === 'root') {
                isAdmin = true;
                errorMsg.classList.add('hidden');
                document.getElementById('admin-login').style.display = 'none';
                document.getElementById('admin-dashboard').style.display = 'flex';
                document.getElementById('admin-dashboard').classList.remove('hidden');
                startAdminSimulations();
            } else {
                errorMsg.classList.remove('hidden');
                // Shake effect logic would go here
            }
        }

        function logoutAdmin() {
            isAdmin = false;
            document.getElementById('admin-dashboard').style.display = 'none';
            navigateTo('home');
            window.location.hash = '';
        }

        // --- Navigation Logic ---
        function navigateTo(viewId) {
            // Hide all standard views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
                if(el.id !== 'admin-dashboard') {
                    setTimeout(() => {
                        if (!el.classList.contains('active')) el.style.display = 'none';
                    }, 400);
                }
            });

            // Special Admin Handling
            if(viewId !== 'admin-dashboard' && viewId !== 'admin-login') {
                document.getElementById('admin-dashboard').style.display = 'none';
                document.getElementById('admin-login').style.display = 'none';
            }

            // Show target
            const target = document.getElementById(viewId);
            if (target) {
                target.style.display = (viewId === 'dashboard' || viewId === 'home') ? 'flex' : (viewId === 'admin-dashboard' ? 'flex' : 'flex');
                
                // Allow display flex to apply before opacity transition
                requestAnimationFrame(() => {
                    target.classList.add('active');
                });
            }

            // UI Cleanup
            document.getElementById('dropdown').classList.add('opacity-0', 'pointer-events-none', 'scale-95');
        }

        // --- User Auth Logic ---
        function loginUser() {
            // Simulate API call
            const btn = event.target;
            const originalText = btn.innerText;
            btn.innerText = "Encrypting...";
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            
            setTimeout(() => {
                isLoggedIn = true;
                btn.innerText = originalText;
                btn.classList.remove('opacity-75', 'cursor-not-allowed');
                updateAuthUI();
                navigateTo('dashboard');
            }, 1000);
        }

        function logout() {
            isLoggedIn = false;
            updateAuthUI();
            navigateTo('home');
        }

        function updateAuthUI() {
            const authBtns = document.getElementById('auth-buttons');
            const userMenu = document.getElementById('user-menu');
            
            if (isLoggedIn) {
                authBtns.classList.add('hidden');
                userMenu.classList.remove('hidden');
                userMenu.classList.add('flex');
            } else {
                authBtns.classList.remove('hidden');
                userMenu.classList.add('hidden');
                userMenu.classList.remove('flex');
            }
        }

        function toggleUserMenu() {
            const menu = document.getElementById('dropdown');
            menu.classList.toggle('opacity-0');
            menu.classList.toggle('pointer-events-none');
            menu.classList.toggle('scale-95');
        }

        // --- Real-time Simulations ---
        
        // 1. Live Latency
        setInterval(() => {
            const ms = Math.floor(Math.random() * (45 - 15) + 15);
            document.getElementById('live-latency').innerText = `${ms}ms`;
        }, 2000);

        // 2. Homepage Stats
        setInterval(() => {
            const users = document.getElementById('stat-online');
            const created = document.getElementById('stat-created');
            if(users) users.innerText = parseInt(users.innerText.replace(/,/g, '')) + Math.floor(Math.random() * 3 - 1);
            if(created && Math.random() > 0.7) created.innerText = (parseInt(created.innerText.replace(/,/g, '')) + 1).toLocaleString();
        }, 3000);

        // 3. Admin Simulations
        function startAdminSimulations() {
            if (!isAdmin) return;

            const feed = document.getElementById('activity-feed');
            const miniLog = document.getElementById('mini-log');
            
            const actions = [
                { type: 'login', text: 'User logged in', color: 'text-green-400' },
                { type: 'create', text: 'New website generated', color: 'text-blue-400' },
                { type: 'view', text: 'Page view recorded', color: 'text-zinc-500' },
                { type: 'edit', text: 'User edited project', color: 'text-yellow-400' },
                { type: 'logout', text: 'User logged out', color: 'text-zinc-600' }
            ];

            const ips = ['192.168.1.4', '10.0.0.5', '172.16.0.2', '45.22.11.90'];

            setInterval(() => {
                if (!isAdmin) return;
                
                // Update Counters
                const activeUsers = document.getElementById('admin-live-users');
                const load = document.getElementById('admin-server-load');
                
                activeUsers.innerText = parseInt(activeUsers.innerText) + Math.floor(Math.random() * 5 - 2);
                load.innerText = Math.floor(Math.random() * (60 - 20) + 20) + "%";
                document.querySelector('#admin-server-load + div').style.width = load.innerText;

                // Add Log Entry
                const action = actions[Math.floor(Math.random() * actions.length)];
                const ip = ips[Math.floor(Math.random() * ips.length)];
                const time = new Date().toLocaleTimeString('en-US', {hour12: false});
                
                const entry = document.createElement('div');
                entry.className = "flex gap-3 text-[10px] border-b border-zinc-800/50 pb-1 animate-fade-in";
                entry.innerHTML = `
                    <span class="text-zinc-600 w-12">${time}</span>
                    <span class="${action.color} font-bold w-20">[${action.type.toUpperCase()}]</span>
                    <span class="text-zinc-400 flex-1">${action.text} <span class="text-zinc-600">(${ip})</span></span>
                `;
                
                if (feed) {
                    feed.prepend(entry);
                    if (feed.children.length > 20) feed.lastChild.remove();
                }

                // Mini Log update
                if (miniLog) {
                    const line = document.createElement('div');
                    line.innerText = `> ${time}: ${action.text}`;
                    miniLog.prepend(line);
                }

            }, 1500);
        }

        function handleGenerate() {
            if(!isLoggedIn) {
                navigateTo('login');
                return;
            }
            // Mock generator logic
            alert("Starting AI Generation Engine...");
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
      

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass h-14 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigateTo('home')">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<iconify-icon icon="solar:command-linear" width="14"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-white text-sm">Nexus<span className="text-zinc-500">AI</span></span>
</div>
<div className="hidden md:flex items-center gap-6">
<button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" onclick="navigateTo('home')">Platform</button>
<button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" onclick="navigateTo('home')">Showcase</button>
<button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" onclick="navigateTo('home')">Pricing</button>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-3" id="auth-buttons">
<button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" onclick="navigateTo('login')">Log In</button>
<button className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-zinc-200 transition-colors" onclick="navigateTo('signup')">Start Building</button>
</div>
<div className="hidden items-center gap-3" id="user-menu">
<div className="flex flex-col items-end mr-2">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Live</span>
<div className="flex items-center gap-1.5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
<span className="text-xs text-zinc-300" id="live-latency">24ms</span>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white relative" onclick="toggleUserMenu()">
<span className="text-xs font-medium">JD</span>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed top-16 right-6 w-48 glass-panel rounded-lg shadow-2xl transform scale-95 opacity-0 pointer-events-none transition-all duration-200 z-50 flex flex-col p-1" id="dropdown">
<button className="text-left px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-white/5 rounded transition-colors flex items-center gap-2" onclick="navigateTo('dashboard')">
<iconify-icon icon="solar:widget-linear"></iconify-icon> Dashboard
        </button>
<button className="text-left px-3 py-2 text-xs text-red-400 hover:text-red-300 hover:bg-white/5 rounded transition-colors flex items-center gap-2" onclick="logout()">
<iconify-icon icon="solar:logout-linear"></iconify-icon> Disconnect
        </button>
</div>

<main className="flex-1 relative pt-14 flex flex-col min-h-screen">

<section className="view-section active flex-col items-center justify-center min-h-[calc(100vh-56px)] px-6 relative" id="home">
<div className="text-center max-w-3xl z-10 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 backdrop-blur-sm">
<iconify-icon className="text-indigo-400" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-[10px] font-medium text-indigo-300 tracking-wide uppercase">Generative UI Engine 2.0</span>
</div>
<h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-[1.1]">
                    Dream it. <br/>
<span className="font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">Code it. Ship it.</span>
</h1>
<p className="text-sm md:text-base text-zinc-500 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                    The prompt-to-production platform. Generate full-stack React applications in seconds with our advanced neural architecture.
                </p>

<div className="max-w-xl mx-auto relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative flex items-center bg-[#0C0C0E] border border-white/10 rounded-xl p-1.5 shadow-2xl">
<div className="pl-3 pr-2 text-zinc-500">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<input className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-zinc-600 h-10 w-full font-light" placeholder="Describe a SaaS dashboard for crypto..." type="text"/>
<button className="h-9 px-4 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="handleGenerate()">
                            Generate
                        </button>
</div>
</div>

<div className="mt-20 flex items-center justify-center gap-12 text-zinc-600">
<div className="flex flex-col items-center">
<span className="text-lg font-medium text-white" id="stat-created">12,402</span>
<span className="text-[10px] uppercase tracking-widest">Sites Created</span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="flex flex-col items-center">
<span className="text-lg font-medium text-white" id="stat-online">843</span>
<span className="text-[10px] uppercase tracking-widest">Builders Online</span>
</div>
</div>
</div>
</section>

<section className="view-section min-h-[calc(100vh-56px)] flex items-center justify-center p-6 relative z-10" id="login">
<div className="w-full max-w-[360px] animate-slide-up">
<div className="glass p-8 rounded-2xl border border-white/5">
<h2 className="text-xl font-medium text-white mb-1 text-center">Welcome back</h2>
<p className="text-xs text-zinc-500 mb-6 text-center">Enter your credentials to access the workspace</p>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Email</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-zinc-500" icon="solar:letter-linear"></iconify-icon>
<input className="w-full input-premium rounded-lg pl-9 pr-3 py-2 text-xs" id="login-email" placeholder="name@company.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Password</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-zinc-500" icon="solar:lock-password-linear"></iconify-icon>
<input className="w-full input-premium rounded-lg pl-9 pr-3 py-2 text-xs" id="login-pass" placeholder="••••••••" type="password"/>
</div>
</div>
<button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium py-2.5 rounded-lg text-xs hover:opacity-90 transition-all shadow-lg shadow-indigo-900/20 mt-2" onclick="loginUser()">
                            Authenticate
                        </button>
</div>
</div>
<p className="text-center mt-6 text-xs text-zinc-600">
<span className="cursor-pointer hover:text-zinc-400 transition-colors" onclick="navigateTo('signup')">Create an account</span>
</p>
</div>
</section>

<section className="view-section min-h-[calc(100vh-56px)] flex items-center justify-center p-6 relative z-10" id="signup">
<div className="w-full max-w-[360px]">
<div className="glass p-8 rounded-2xl border border-white/5">
<h2 className="text-xl font-medium text-white mb-1 text-center">Initialize Account</h2>
<p className="text-xs text-zinc-500 mb-6 text-center">Join the next generation of builders</p>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Full Name</label>
<input className="w-full input-premium rounded-lg px-3 py-2 text-xs" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Email</label>
<input className="w-full input-premium rounded-lg px-3 py-2 text-xs" placeholder="name@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Password</label>
<input className="w-full input-premium rounded-lg px-3 py-2 text-xs" placeholder="Create strong password" type="password"/>
</div>
<button className="w-full bg-white text-black font-medium py-2.5 rounded-lg text-xs hover:bg-zinc-200 transition-all mt-2" onclick="loginUser()">
                            Create Account
                        </button>
</div>
</div>
<p className="text-center mt-6 text-xs text-zinc-600">
<span className="cursor-pointer hover:text-zinc-400 transition-colors" onclick="navigateTo('login')">Return to Login</span>
</p>
</div>
</section>


<section className="view-section min-h-[calc(100vh-56px)] flex items-center justify-center p-6 bg-black/90 z-50 fixed inset-0" id="admin-login">
<div className="w-full max-w-[400px] relative">

<div className="absolute -inset-1 bg-red-900/30 rounded-xl blur-xl animate-pulse"></div>
<div className="bg-[#050505] p-8 rounded-xl border border-red-900/30 relative z-10 font-mono shadow-2xl">
<div className="flex items-center gap-3 text-red-500 mb-6 border-b border-red-900/30 pb-4">
<iconify-icon icon="solar:shield-warning-bold-duotone" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest uppercase">Restricted Access</span>
</div>
<div className="hidden text-[10px] text-red-400 bg-red-900/10 p-2 rounded mb-4 border border-red-900/20" id="admin-error">
                        ACCESS DENIED: Invalid credentials. Incident logged.
                    </div>
<div className="space-y-5">
<div className="space-y-1">
<label className="text-[10px] text-zinc-500">SYSTEM ID</label>
<input className="w-full bg-black border border-red-900/20 rounded px-3 py-2 text-sm text-red-100 focus:border-red-600 focus:outline-none placeholder-zinc-800 transition-colors" id="admin-id" type="email" value="admin@core.system"/>
</div>
<div className="space-y-1">
<label className="text-[10px] text-zinc-500">ACCESS KEY</label>
<input className="w-full bg-black border border-red-900/20 rounded px-3 py-2 text-sm text-red-100 focus:border-red-600 focus:outline-none placeholder-zinc-800 transition-colors" id="admin-key" type="password" value="root"/>
</div>
<button className="w-full bg-red-900/20 hover:bg-red-900/40 text-red-500 border border-red-900/50 py-2 rounded text-xs font-bold tracking-wider transition-all uppercase mt-2" onclick="verifyAdmin()">
                            Verify Identity
                        </button>
</div>
<div className="mt-6 pt-4 border-t border-red-900/10 flex justify-between items-center">
<span className="text-[10px] text-zinc-700">IP: 192.168.0.1 (Masked)</span>
<button className="text-[10px] text-zinc-600 hover:text-zinc-400" onclick="navigateTo('home')">Abort</button>
</div>
</div>
</div>
</section>

<section className="view-section flex-col min-h-[calc(100vh-56px)] max-w-7xl mx-auto px-6 py-8 w-full z-10" id="dashboard">

<div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
<div>
<h1 className="text-2xl font-light text-white">Dashboard</h1>
<p className="text-xs text-zinc-500 mt-1">Manage your deployed instances.</p>
</div>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 shadow-lg shadow-indigo-900/20" onclick="handleGenerate()">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    New Project
                </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
<div className="glass p-4 rounded-xl">
<div className="flex items-center gap-2 text-zinc-500 mb-2">
<iconify-icon icon="solar:folder-open-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider">Projects</span>
</div>
<span className="text-xl text-white font-medium">3</span>
</div>
<div className="glass p-4 rounded-xl">
<div className="flex items-center gap-2 text-zinc-500 mb-2">
<iconify-icon icon="solar:eye-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider">Total Views</span>
</div>
<span className="text-xl text-white font-medium">2.4k</span>
</div>
<div className="glass p-4 rounded-xl">
<div className="flex items-center gap-2 text-zinc-500 mb-2">
<iconify-icon icon="solar:server-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider">Status</span>
</div>
<span className="text-xl text-green-400 font-medium">Online</span>
</div>
<div className="glass p-4 rounded-xl">
<div className="flex items-center gap-2 text-zinc-500 mb-2">
<iconify-icon icon="solar:bill-list-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider">Plan</span>
</div>
<span className="text-xl text-indigo-400 font-medium">Pro</span>
</div>
</div>

<h3 className="text-sm font-medium text-zinc-400 mb-4">Your Projects</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glass rounded-xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all cursor-pointer">
<div className="h-32 bg-zinc-900 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm">
<button className="text-xs bg-white text-black px-3 py-1.5 rounded font-medium">Edit Site</button>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm text-white font-medium">Portfolio V1</h4>
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
</div>
<p className="text-[10px] text-zinc-500 mb-3">Last updated 2 hours ago</p>
<div className="flex items-center gap-2">
<button className="text-[10px] text-zinc-400 hover:text-white border border-white/10 px-2 py-1 rounded">Analytics</button>
<button className="text-[10px] text-red-400 hover:text-red-300 ml-auto"><iconify-icon icon="solar:trash-bin-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="group glass rounded-xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all cursor-pointer">
<div className="h-32 bg-zinc-900 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm">
<button className="text-xs bg-white text-black px-3 py-1.5 rounded font-medium">Edit Site</button>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm text-white font-medium">Crypto Dashboard</h4>
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
</div>
<p className="text-[10px] text-zinc-500 mb-3">Last updated 1 day ago</p>
<div className="flex items-center gap-2">
<button className="text-[10px] text-zinc-400 hover:text-white border border-white/10 px-2 py-1 rounded">Analytics</button>
<button className="text-[10px] text-red-400 hover:text-red-300 ml-auto"><iconify-icon icon="solar:trash-bin-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</section>

<section className="view-section flex-col h-screen w-full bg-black fixed inset-0 z-[100] font-mono overflow-hidden hidden" id="admin-dashboard">

<header className="h-12 border-b border-zinc-800 flex items-center justify-between px-4 bg-zinc-900/50">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-red-500">
<iconify-icon icon="solar:shield-warning-bold"></iconify-icon>
<span className="text-xs font-bold tracking-widest">ADMIN ROOT</span>
</div>
<span className="h-4 w-px bg-zinc-800"></span>
<span className="text-[10px] text-zinc-500" id="admin-time">SESSION: SECURE</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-[10px]">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-green-500">SYSTEM STABLE</span>
</div>
<button className="text-[10px] bg-red-900/20 text-red-400 border border-red-900/30 px-3 py-1 rounded hover:bg-red-900/40" onclick="logoutAdmin()">TERMINATE SESSION</button>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="w-64 border-r border-zinc-800 bg-zinc-900/30 flex flex-col p-4">
<div className="space-y-1">
<div className="px-3 py-2 text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Monitor</div>
<button className="w-full text-left px-3 py-2 text-xs text-white bg-white/5 rounded border border-white/5 flex items-center justify-between">
                            Overview <span className="text-[10px] text-green-400">●</span>
</button>
<button className="w-full text-left px-3 py-2 text-xs text-zinc-400 hover:bg-white/5 hover:text-white rounded flex items-center justify-between">
                            Users <span className="text-[10px] text-zinc-600">8.4k</span>
</button>
<button className="w-full text-left px-3 py-2 text-xs text-zinc-400 hover:bg-white/5 hover:text-white rounded flex items-center justify-between">
                            Sites <span className="text-[10px] text-zinc-600">24k</span>
</button>
</div>
<div className="mt-8 space-y-1">
<div className="px-3 py-2 text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Logs</div>
<div className="h-32 bg-black rounded border border-zinc-800 p-2 overflow-y-auto text-[10px] font-mono text-zinc-500 space-y-1" id="mini-log">

</div>
</div>
</aside>

<main className="flex-1 p-6 overflow-y-auto bg-black">

<div className="grid grid-cols-4 gap-4 mb-6">
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded relative overflow-hidden">
<div className="text-[10px] text-zinc-500 uppercase mb-1">Live Users</div>
<div className="text-2xl text-white font-bold" id="admin-live-users">843</div>
<div className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-500" style={{width: '45%'}}></div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded relative overflow-hidden">
<div className="text-[10px] text-zinc-500 uppercase mb-1">Sites Created</div>
<div className="text-2xl text-white font-bold" id="admin-total-sites">12,402</div>
<div className="absolute bottom-0 left-0 h-1 bg-purple-500 transition-all duration-500" style={{width: '75%'}}></div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded relative overflow-hidden">
<div className="text-[10px] text-zinc-500 uppercase mb-1">Server Load</div>
<div className="text-2xl text-white font-bold" id="admin-server-load">34%</div>
<div className="absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-500" style={{width: '34%'}}></div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded relative overflow-hidden">
<div className="text-[10px] text-zinc-500 uppercase mb-1">Spam Blocked</div>
<div className="text-2xl text-red-400 font-bold">129</div>
<div className="absolute bottom-0 left-0 h-1 bg-red-500 transition-all duration-500" style={{width: '12%'}}></div>
</div>
</div>
<div className="grid grid-cols-3 gap-6 h-[400px]">

<div className="col-span-2 bg-zinc-900/30 border border-zinc-800 rounded flex flex-col">
<div className="px-4 py-3 border-b border-zinc-800 flex justify-between items-center">
<span className="text-xs text-zinc-300 font-bold uppercase">Real-Time Event Stream</span>
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
</div>
<div className="flex-1 p-0 overflow-hidden relative">
<div className="absolute inset-0 overflow-y-auto p-4 space-y-2 font-mono" id="activity-feed">

</div>
</div>
</div>

<div className="col-span-1 bg-zinc-900/30 border border-zinc-800 rounded flex flex-col">
<div className="px-4 py-3 border-b border-zinc-800">
<span className="text-xs text-zinc-300 font-bold uppercase">Alerts</span>
</div>
<div className="flex-1 p-4 space-y-3 overflow-y-auto">
<div className="bg-red-900/10 border-l-2 border-red-500 p-2 text-[10px]">
<span className="text-red-400 font-bold block mb-1">Failed Login Attempt</span>
<span className="text-zinc-500">IP 45.23.11.22 tried root access.</span>
</div>
<div className="bg-blue-900/10 border-l-2 border-blue-500 p-2 text-[10px]">
<span className="text-blue-400 font-bold block mb-1">New Premium Sub</span>
<span className="text-zinc-500">User ID #992 upgraded to Pro.</span>
</div>
<div className="bg-green-900/10 border-l-2 border-green-500 p-2 text-[10px]">
<span className="text-green-400 font-bold block mb-1">Backup Complete</span>
<span className="text-zinc-500">Database snapshot saved.</span>
</div>
</div>
</div>
</div>
</main>
</div>
</section>
</main>


    </>
  );
}
