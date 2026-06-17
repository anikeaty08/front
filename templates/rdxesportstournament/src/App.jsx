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
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
brand: {
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316',
600: '#ea580c',
900: '#7c2d12',
},
dark: {
950: '#050505',
900: '#0a0a0a',
800: '#171717',
700: '#262626',
600: '#404040',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'fade-in': 'fadeIn 0.4s ease-out forwards',
'slide-up': 'slideUp 0.5s ease-out forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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



        // State Management
        const views = ['home', 'login', 'dashboard'];
        const navLoginBtn = document.getElementById('nav-login-btn');
        const navLogoutBtn = document.getElementById('nav-logout-btn');

        // Navigation
        function navigateTo(viewId) {
            // Hide all views
            views.forEach(v => {
                document.getElementById(`view-${v}`).classList.add('hidden');
            });
            // Show target view
            document.getElementById(`view-${viewId}`).classList.remove('hidden');
            
            // Adjust body background slightly for dashboard if needed, or scroll top
            window.scrollTo(0,0);
        }

        // Login Logic
        function switchRole(role) {
            const btnMember = document.getElementById('tab-member');
            const btnAdmin = document.getElementById('tab-admin');
            const formMember = document.getElementById('form-member');
            const formAdmin = document.getElementById('form-admin');
            const adminError = document.getElementById('admin-error');

            adminError.classList.add('hidden'); // clear errors

            if(role === 'member') {
                btnMember.className = "text-xs font-medium py-2 rounded-md bg-dark-700 text-white shadow-sm transition-all";
                btnAdmin.className = "text-xs font-medium py-2 rounded-md text-slate-500 hover:text-white transition-all";
                formMember.classList.remove('hidden');
                formAdmin.classList.add('hidden');
            } else {
                btnAdmin.className = "text-xs font-medium py-2 rounded-md bg-dark-700 text-white shadow-sm transition-all";
                btnMember.className = "text-xs font-medium py-2 rounded-md text-slate-500 hover:text-white transition-all";
                formAdmin.classList.remove('hidden');
                formMember.classList.add('hidden');
            }
        }

        async function handleLogin(e, type) {
            e.preventDefault();
            
            // UI Loading State
            const btnText = document.getElementById(`btn-text-${type}`);
            const loader = document.getElementById(`loader-${type}`);
            const originalText = btnText.innerText;
            
            btnText.classList.add('hidden');
            loader.classList.remove('hidden');

            // Simulate Network Delay
            await new Promise(r => setTimeout(r, 1500));

            if (type === 'admin') {
                const id = document.getElementById('admin-id').value;
                const pass = document.getElementById('admin-pass').value;
                const errorBox = document.getElementById('admin-error');

                // CREDENTIAL CHECK
                if (id === 'rdxesports_001' && pass === 'SHOURYA@JAAT') {
                    // Success
                    accessGranted();
                } else {
                    // Fail
                    errorBox.classList.remove('hidden');
                    btnText.classList.remove('hidden');
                    loader.classList.add('hidden');
                    // Shake effect
                    const form = document.getElementById('form-admin');
                    form.classList.add('translate-x-[-5px]');
                    setTimeout(() => form.classList.remove('translate-x-[-5px]'), 100);
                }
            } else {
                // Member login (simulation - accept any for demo)
                // For a real app, verify UID here.
                accessGranted();
            }
        }

        function accessGranted() {
            // Reset Forms
            document.getElementById('admin-id').value = '';
            document.getElementById('admin-pass').value = '';
            
            // UI Transition
            navigateTo('dashboard');
            
            // Navbar Update
            navLoginBtn.classList.add('hidden');
            navLogoutBtn.classList.remove('hidden');

            // Reset buttons
            document.querySelectorAll('.loader').forEach(l => l.classList.add('hidden'));
            document.getElementById('btn-text-admin').classList.remove('hidden');
            document.getElementById('btn-text-member').classList.remove('hidden');
        }

        function logout() {
            navigateTo('home');
            navLoginBtn.classList.remove('hidden');
            navLogoutBtn.classList.add('hidden');
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.07]"></div>
<div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-600/10 blur-[120px] rounded-full"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-dark-950/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigateTo('home')">
<div className="relative">
<span className="absolute inset-0 bg-brand-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></span>
<span className="iconify text-brand-500 text-2xl relative z-10" data-icon="lucide:flame"></span>
</div>
<span className="font-display font-semibold text-lg tracking-tight text-white group-hover:text-brand-50 relative z-10 transition-colors">RDX<span className="text-brand-500">.</span>GG</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
<button className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 rounded-full transition-all shadow-sm" onclick="navigateTo('home')">Home</button>
<button className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-all">Tournaments</button>
<button className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-all">Leaderboard</button>
</div>
<div className="flex items-center gap-4">
<button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-lg bg-white px-5 font-medium text-dark-950 transition-all hover:bg-brand-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-dark-950 text-xs sm:text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]" id="nav-login-btn" onclick="navigateTo('login')">
<span className="mr-2">Login</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right"></span>
</button>

<button className="hidden text-xs text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1" id="nav-logout-btn" onclick="logout()">
<span className="iconify" data-icon="lucide:log-out"></span> Logout
                </button>
</div>
</div>
</nav>

<div className="flex-grow pt-16 relative">

<main className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center relative px-6 animate-fade-in" id="view-home">
<div className="text-center max-w-5xl mx-auto mt-10 sm:mt-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-500 text-[10px] sm:text-xs font-medium mb-8 uppercase tracking-wider">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500"></span>
</span>
                    Season 5 Registrations Open
                </div>
<h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                    DOMINATE<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-600">THE ARENA.</span>
</h1>
<p className="text-base sm:text-lg text-slate-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                    The premium esports ecosystem for elite players. Join <span className="text-white font-medium">RDX Esports</span> to compete, earn rewards, and build your legacy.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-8 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-medium transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-brand-900/40 text-sm" onclick="navigateTo('login')">
<span>Join Tournament</span>
<span className="iconify" data-icon="lucide:trophy"></span>
</button>
<button className="w-full sm:w-auto h-12 px-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-sm">
<span className="iconify" data-icon="lucide:users"></span>
                        Find Guild
                    </button>
</div>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="glass-card p-4 rounded-xl text-center">
<div className="text-2xl font-display font-bold text-white">₹1.2L</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Daily Pool</div>
</div>
<div className="glass-card p-4 rounded-xl text-center">
<div className="text-2xl font-display font-bold text-white">450+</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Squads</div>
</div>
<div className="glass-card p-4 rounded-xl text-center">
<div className="text-2xl font-display font-bold text-brand-500">LIVE</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Status</div>
</div>
<div className="glass-card p-4 rounded-xl text-center">
<div className="text-2xl font-display font-bold text-white">0.0ms</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Latency</div>
</div>
</div>
</main>

<main className="hidden min-h-[calc(100vh-64px)] flex items-center justify-center p-6 relative z-10" id="view-login">
<div className="w-full max-w-[400px] relative animate-slide-up">
<div className="glass-panel rounded-2xl p-8 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50"></div>
<div className="text-center mb-8">
<h2 className="text-2xl font-display font-bold text-white tracking-tight">System Access</h2>
<p className="text-slate-500 text-xs mt-2">Authenticate to access RDX Network</p>
</div>

<div className="grid grid-cols-2 gap-1 p-1 bg-dark-800/50 rounded-lg border border-white/5 mb-6">
<button className="text-xs font-medium py-2 rounded-md bg-dark-700 text-white shadow-sm transition-all" id="tab-member" onclick="switchRole('member')">Player</button>
<button className="text-xs font-medium py-2 rounded-md text-slate-500 hover:text-white transition-all" id="tab-admin" onclick="switchRole('admin')">Admin</button>
</div>

<form className="space-y-4 hidden" id="form-admin" onsubmit="handleLogin(event, 'admin')">
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider ml-1">Admin Identity</label>
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-500 transition-colors">
<span className="iconify" data-icon="lucide:shield"></span>
</span>
<input className="w-full bg-dark-800/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-500/50 focus:bg-dark-800 focus:ring-1 focus:ring-brand-500/50 transition-all placeholder:text-slate-700" id="admin-id" placeholder="rdxesports_001" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider ml-1">Secure Key</label>
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-500 transition-colors">
<span className="iconify" data-icon="lucide:lock"></span>
</span>
<input className="w-full bg-dark-800/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-500/50 focus:bg-dark-800 focus:ring-1 focus:ring-brand-500/50 transition-all placeholder:text-slate-700" id="admin-pass" placeholder="••••••••••••" type="password"/>
</div>
</div>

<div className="hidden items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 p-2.5 rounded-md" id="admin-error">
<span className="iconify" data-icon="lucide:alert-circle"></span>
<span>Invalid credentials. Access denied.</span>
</div>
<button className="w-full bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold py-2.5 rounded-lg hover:from-brand-500 hover:to-brand-400 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-brand-900/20 mt-2 text-sm" type="submit">
<span id="btn-text-admin">Access Dashboard</span>
<div className="loader hidden" id="loader-admin"></div>
</button>
</form>

<form className="space-y-4" id="form-member" onsubmit="handleLogin(event, 'member')">
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider ml-1">Username / UID</label>
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-white transition-colors">
<span className="iconify" data-icon="lucide:user"></span>
</span>
<input className="w-full bg-dark-800/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/20 focus:bg-dark-800 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-slate-700" placeholder="Enter ID" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between ml-1">
<label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Password</label>
</div>
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-white transition-colors">
<span className="iconify" data-icon="lucide:key"></span>
</span>
<input className="w-full bg-dark-800/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/20 focus:bg-dark-800 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-slate-700" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<button className="w-full bg-white text-dark-950 font-semibold py-2.5 rounded-lg hover:bg-slate-200 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-white/5 mt-2 text-sm" type="submit">
<span id="btn-text-member">Login</span>
<div className="loader border-dark-900 border-l-transparent hidden" id="loader-member"></div>
</button>
</form>
</div>
<p className="text-center text-[10px] text-slate-600 mt-6">
                    By logging in, you agree to RDX Esports <a className="text-slate-400 hover:text-white underline" href="#">Terms of Service</a>.
                </p>
</div>
</main>

<main className="hidden min-h-[calc(100vh-64px)] p-6 animate-fade-in" id="view-dashboard">
<div className="max-w-7xl mx-auto space-y-6">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-display font-bold text-white">Command Center</h1>
<p className="text-sm text-slate-400">Welcome back, <span className="text-brand-500">Administrator</span></p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-dark-800 border border-white/10 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-dark-700 flex items-center gap-2 transition-all">
<span className="iconify" data-icon="lucide:settings"></span> Settings
                        </button>
<button className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-lg text-xs font-medium flex items-center gap-2 shadow-lg shadow-brand-900/20 transition-all">
<span className="iconify" data-icon="lucide:plus"></span> New Tournament
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-panel p-5 rounded-xl border-l-2 border-l-brand-500 relative overflow-hidden group">
<div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-4xl text-brand-500" data-icon="lucide:users"></span>
</div>
<p className="text-slate-400 text-xs uppercase tracking-wider font-medium">Total Players</p>
<h3 className="text-2xl font-display font-bold text-white mt-1">12,405</h3>
<div className="flex items-center gap-1 mt-2 text-xs text-green-400">
<span className="iconify" data-icon="lucide:trending-up"></span>
<span>+12% this week</span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border-l-2 border-l-blue-500 relative overflow-hidden group">
<div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-4xl text-blue-500" data-icon="lucide:wallet"></span>
</div>
<p className="text-slate-400 text-xs uppercase tracking-wider font-medium">Revenue</p>
<h3 className="text-2xl font-display font-bold text-white mt-1">₹8.5L</h3>
<div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
<span>Pending Payouts: ₹1.2L</span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border-l-2 border-l-purple-500 relative overflow-hidden group">
<div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-4xl text-purple-500" data-icon="lucide:swords"></span>
</div>
<p className="text-slate-400 text-xs uppercase tracking-wider font-medium">Active Scrims</p>
<h3 className="text-2xl font-display font-bold text-white mt-1">24</h3>
<div className="flex items-center gap-1 mt-2 text-xs text-brand-500">
<span className="relative flex h-2 w-2 mr-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span>Live Now</span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border-l-2 border-l-red-500 relative overflow-hidden group">
<div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-4xl text-red-500" data-icon="lucide:alert-octagon"></span>
</div>
<p className="text-slate-400 text-xs uppercase tracking-wider font-medium">Reports</p>
<h3 className="text-2xl font-display font-bold text-white mt-1">3</h3>
<div className="flex items-center gap-1 mt-2 text-xs text-red-400 font-medium">
<span>Action Required</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass-panel rounded-xl overflow-hidden">
<div className="p-5 border-b border-white/5 flex justify-between items-center">
<h3 className="font-medium text-white text-sm">Recent Registrations</h3>
<button className="text-xs text-brand-500 hover:text-brand-400">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs">
<thead className="bg-white/5 text-slate-400 uppercase tracking-wider">
<tr>
<th className="px-5 py-3 font-medium">Player</th>
<th className="px-5 py-3 font-medium">UID</th>
<th className="px-5 py-3 font-medium">Status</th>
<th className="px-5 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-slate-300">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-3 font-medium text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                                            SHOURYA_YT
                                        </td>
<td className="px-5 py-3 font-mono text-slate-500">88392011</td>
<td className="px-5 py-3"><span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 text-[10px]">Verified</span></td>
<td className="px-5 py-3 text-right"><button className="text-slate-400 hover:text-white"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-3 font-medium text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-red-600"></div>
                                            RDX_KILLER
                                        </td>
<td className="px-5 py-3 font-mono text-slate-500">12093488</td>
<td className="px-5 py-3"><span className="px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-500 border border-brand-500/20 text-[10px]">Pro</span></td>
<td className="px-5 py-3 text-right"><button className="text-slate-400 hover:text-white"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-3 font-medium text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-600 to-slate-800"></div>
                                            Unknown_User
                                        </td>
<td className="px-5 py-3 font-mono text-slate-500">55432100</td>
<td className="px-5 py-3"><span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-[10px]">Pending</span></td>
<td className="px-5 py-3 text-right"><button className="text-slate-400 hover:text-white"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="glass-panel rounded-xl p-5 space-y-4">
<h3 className="font-medium text-white text-sm">Server Status</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-400">Mumbai Server</span>
<span className="text-green-500">Operational</span>
</div>
<div className="w-full bg-dark-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '98%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-400">Singapore Server</span>
<span className="text-green-500">Operational</span>
</div>
<div className="w-full bg-dark-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '94%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-400">Database Load</span>
<span className="text-brand-500">Heavy</span>
</div>
<div className="w-full bg-dark-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-brand-500 h-1.5 rounded-full animate-pulse" style={{width: '85%'}}></div>
</div>
</div>
</div>
<div className="pt-4 border-t border-white/5 mt-4">
<div className="p-3 bg-brand-500/10 border border-brand-500/20 rounded-lg flex items-start gap-3">
<span className="iconify text-brand-500 mt-0.5 flex-shrink-0" data-icon="lucide:info"></span>
<div className="text-xs text-slate-300">
<p className="font-medium text-brand-200">System Update</p>
<p className="mt-0.5 opacity-80">Maintenance scheduled for 03:00 AM IST.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
