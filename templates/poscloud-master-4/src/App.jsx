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



        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        function showTOTP() {
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('totpForm').classList.remove('hidden');
        }

        function login() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const totp = document.getElementById('totp').value;
            
            if (email === 'masteradmin@mypms.com' && password === 'Master@1234' && totp === '123456') {
                document.getElementById('loginScreen').classList.add('hidden');
                document.getElementById('adminPanel').classList.remove('hidden');
                lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            } else {
                alert('Invalid credentials. Use:\nEmail: masteradmin@mypms.com\nPassword: Master@1234\nTOTP: 123456');
            }
        }

        function logout() {
            document.getElementById('adminPanel').classList.add('hidden');
            document.getElementById('loginScreen').classList.remove('hidden');
            document.getElementById('loginForm').classList.remove('hidden');
            document.getElementById('totpForm').classList.add('hidden');
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            sidebar.classList.toggle('-translate-x-full');
            overlay.classList.toggle('hidden');
        }

        function showSection(section) {
            const sections = ['dashboard', 'tenants', 'superadmin', 'support', 'notifications', 'printer', 'rbac', 'approvals', 'auditlogs', 'tenantDetail'];
            sections.forEach(s => {
                const el = document.getElementById(s + 'Section');
                if (el) el.classList.add('hidden');
            });
            
            const targetSection = document.getElementById(section + 'Section');
            if (targetSection) targetSection.classList.remove('hidden');
            
            const titles = {
                dashboard: 'Dashboard',
                tenants: 'Tenant Management',
                superadmin: 'SuperAdmin Console',
                support: 'Support Tools',
                notifications: 'Notification Center',
                printer: 'Printer & ESC/POS Tester',
                rbac: 'RBAC & Access',
                approvals: 'Approvals Center',
                auditlogs: 'Audit Logs',
                tenantDetail: 'Tenant Details'
            };
            document.getElementById('pageTitle').textContent = titles[section] || 'Dashboard';
            
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('gradient-main', 'text-white');
                item.classList.add('text-slate-400', 'hover:text-white', 'hover:bg-slate-800/50');
            });
            
            if (window.innerWidth < 1024) {
                toggleSidebar();
            }
            
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        function showTenantDetail(name) {
            showSection('tenantDetail');
            document.getElementById('tenantDetailName').textContent = name + ' Restaurant';
        }

        function showTenantTab(tab) {
            const tabs = ['overview', 'menu', 'devices', 'inventory', 'staff', 'subscription', 'features'];
            tabs.forEach(t => {
                const el = document.getElementById('tenant' + t.charAt(0).toUpperCase() + t.slice(1));
                if (el) el.classList.add('hidden');
            });
            
            const targetTab = document.getElementById('tenant' + tab.charAt(0).toUpperCase() + tab.slice(1));
            if (targetTab) targetTab.classList.remove('hidden');
            
            document.querySelectorAll('.tenant-tab').forEach(btn => {
                btn.classList.remove('text-white', 'border-violet-500');
                btn.classList.add('text-slate-400', 'border-transparent');
            });
            event.target.classList.remove('text-slate-400', 'border-transparent');
            event.target.classList.add('text-white', 'border-violet-500');
        }

        function impersonateTenant(name) {
            document.getElementById('impersonationBanner').classList.remove('hidden');
            document.getElementById('impersonatedTenant').textContent = name + ' Restaurant';
        }

        function exitImpersonation() {
            document.getElementById('impersonationBanner').classList.add('hidden');
        }

        function showModal(id) {
            document.getElementById(id).classList.remove('hidden');
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        function hideModal(id) {
            document.getElementById(id).classList.add('hidden');
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
      

<div className="min-h-screen gradient-hero flex items-center justify-center p-4" id="loginScreen">
<div className="glass-card rounded-2xl p-8 w-full max-w-md">
<div className="text-center mb-8">
<div className="inline-flex items-center gap-2 mb-4">
<div className="w-10 h-10 gradient-main rounded-xl flex items-center justify-center animate-pulse-glow">
<span className="text-lg font-semibold tracking-tighter">P</span>
</div>
<span className="text-xl font-semibold tracking-tight">POSCLOUD</span>
</div>
<p className="text-slate-400 text-sm">Master Admin Panel</p>
<p className="gradient-text text-xs font-medium mt-1">by MyPMS Solutions</p>
</div>
<div id="loginForm">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Email</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-violet-500 transition-colors" id="email" type="email" value="masteradmin@mypms.com"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Password</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-violet-500 transition-colors" id="password" type="password" value="Master@1234"/>
</div>
<button className="w-full gradient-main text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity text-sm" onclick="showTOTP()">
                        Continue
                    </button>
</div>
</div>
<div className="hidden" id="totpForm">
<div className="space-y-4">
<div className="text-center">
<div className="w-16 h-16 mx-auto gradient-neon rounded-full flex items-center justify-center mb-4 animate-bounce-soft">
<i className="w-8 h-8" data-lucide="shield-check"></i>
</div>
<p className="text-sm text-slate-400">Enter your 6-digit TOTP code</p>
</div>
<div className="flex gap-2 justify-center">
<input className="w-32 bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-center text-xl tracking-widest focus:outline-none focus:border-violet-500 transition-colors" id="totp" maxlength="6" type="text" value="123456"/>
</div>
<button className="w-full gradient-main text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity text-sm" onclick="login()">
                        Verify &amp; Login
                    </button>
</div>
</div>
</div>
</div>

<div className="hidden" id="adminPanel">

<div className="hidden bg-red-600 text-white py-2 px-4 text-center text-sm font-medium" id="impersonationBanner">
<i className="w-4 h-4 inline mr-2" data-lucide="alert-triangle"></i>
            You are impersonating: <span className="font-semibold" id="impersonatedTenant">Spice Garden Restaurant</span>
<button className="ml-4 underline hover:no-underline" onclick="exitImpersonation()">Exit Impersonation</button>
</div>
<div className="flex min-h-screen">

<aside className="w-64 gradient-hero border-r border-slate-800 fixed h-full z-40 transform -translate-x-full lg:translate-x-0 transition-transform duration-300" id="sidebar">
<div className="p-4 border-b border-slate-800">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-main rounded-xl flex items-center justify-center animate-pulse-glow">
<span className="text-lg font-semibold tracking-tighter">P</span>
</div>
<div>
<h1 className="font-semibold tracking-tight">POSCLOUD</h1>
<p className="text-xs text-slate-400">Master Admin</p>
</div>
</div>
</div>
<nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-180px)]">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white gradient-main" onclick="showSection('dashboard')">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
                        Dashboard
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors" onclick="showSection('tenants')">
<i className="w-4 h-4" data-lucide="building-2"></i>
                        Tenants
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors" onclick="showSection('superadmin')">
<i className="w-4 h-4" data-lucide="crown"></i>
                        SuperAdmin Console
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors" onclick="showSection('support')">
<i className="w-4 h-4" data-lucide="headphones"></i>
                        Support Tools
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors" onclick="showSection('notifications')">
<i className="w-4 h-4" data-lucide="bell"></i>
                        Notifications
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors" onclick="showSection('printer')">
<i className="w-4 h-4" data-lucide="printer"></i>
                        Printer Tester
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors" onclick="showSection('rbac')">
<i className="w-4 h-4" data-lucide="shield"></i>
                        RBAC &amp; Access
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors" onclick="showSection('approvals')">
<i className="w-4 h-4" data-lucide="check-circle"></i>
                        Approvals
                        <span className="ml-auto gradient-sunset text-xs px-2 py-0.5 rounded-full">5</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors" onclick="showSection('auditlogs')">
<i className="w-4 h-4" data-lucide="scroll-text"></i>
                        Audit Logs
                    </button>
</nav>
<div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
<div className="flex items-center gap-3">
<div className="w-9 h-9 gradient-cyber rounded-full flex items-center justify-center">
<span className="text-sm font-semibold text-slate-900">MA</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Master Admin</p>
<p className="text-xs text-slate-400 truncate">masteradmin@mypms.com</p>
</div>
<button className="text-slate-400 hover:text-white" onclick="logout()">
<i className="w-4 h-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-64">

<header className="glass sticky top-0 z-30 border-b border-slate-800 px-4 lg:px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="lg:hidden text-slate-400 hover:text-white" onclick="toggleSidebar()">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<div className="hidden sm:block">
<h2 className="text-lg font-semibold tracking-tight" id="pageTitle">Dashboard</h2>
<p className="text-xs text-slate-400">Welcome back, Master Admin</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden md:block">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search"></i>
<input className="bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:border-violet-500" placeholder="Search tenants, users..." type="text"/>
</div>
<button className="relative p-2 text-slate-400 hover:text-white glass rounded-lg">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-1 right-1 w-2 h-2 gradient-fire rounded-full"></span>
</button>
<button className="p-2 text-slate-400 hover:text-white glass rounded-lg">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
</div>
</div>
</header>

<div className="p-4 lg:p-6">

<section className="space-y-6" id="dashboardSection">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-card rounded-xl p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 gradient-main opacity-20 rounded-full -mr-10 -mt-10"></div>
<div className="flex items-start justify-between">
<div>
<p className="text-xs text-slate-400 font-medium">Total Tenants</p>
<p className="text-2xl font-semibold tracking-tight mt-1">847</p>
<p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i>
                                            +12.5% this month
                                        </p>
</div>
<div className="w-10 h-10 gradient-main rounded-xl flex items-center justify-center">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
</div>
</div>
<div className="glass-card rounded-xl p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 gradient-neon opacity-20 rounded-full -mr-10 -mt-10"></div>
<div className="flex items-start justify-between">
<div>
<p className="text-xs text-slate-400 font-medium">Active Devices</p>
<p className="text-2xl font-semibold tracking-tight mt-1">2,341</p>
<p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i>
                                            +8.2% this week
                                        </p>
</div>
<div className="w-10 h-10 gradient-neon rounded-xl flex items-center justify-center">
<i className="w-5 h-5" data-lucide="tablet"></i>
</div>
</div>
</div>
<div className="glass-card rounded-xl p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 gradient-cyber opacity-20 rounded-full -mr-10 -mt-10"></div>
<div className="flex items-start justify-between">
<div>
<p className="text-xs text-slate-400 font-medium">Monthly Revenue</p>
<p className="text-2xl font-semibold tracking-tight mt-1">₹24.7L</p>
<p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i>
                                            +18.3% growth
                                        </p>
</div>
<div className="w-10 h-10 gradient-cyber rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-slate-900" data-lucide="indian-rupee"></i>
</div>
</div>
</div>
<div className="glass-card rounded-xl p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 gradient-aurora opacity-20 rounded-full -mr-10 -mt-10"></div>
<div className="flex items-start justify-between">
<div>
<p className="text-xs text-slate-400 font-medium">Pending Approvals</p>
<p className="text-2xl font-semibold tracking-tight mt-1">23</p>
<p className="text-xs text-amber-400 mt-2 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
                                            5 urgent
                                        </p>
</div>
<div className="w-10 h-10 gradient-aurora rounded-xl flex items-center justify-center">
<i className="w-5 h-5" data-lucide="check-circle"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 glass-card rounded-xl p-5">
<div className="flex items-center justify-between mb-6">
<h3 className="font-semibold tracking-tight">Revenue Trend</h3>
<select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs">
<option>Last 7 days</option>
<option>Last 30 days</option>
<option>Last 90 days</option>
</select>
</div>
<div className="h-64 flex items-end gap-2">
<div className="flex-1 gradient-main rounded-t-lg" style={{height: '45%'}}></div>
<div className="flex-1 gradient-main rounded-t-lg" style={{height: '65%'}}></div>
<div className="flex-1 gradient-main rounded-t-lg" style={{height: '55%'}}></div>
<div className="flex-1 gradient-main rounded-t-lg" style={{height: '80%'}}></div>
<div className="flex-1 gradient-main rounded-t-lg" style={{height: '70%'}}></div>
<div className="flex-1 gradient-main rounded-t-lg" style={{height: '90%'}}></div>
<div className="flex-1 gradient-neon rounded-t-lg animate-pulse-glow" style={{height: '100%'}}></div>
</div>
<div className="flex justify-between mt-4 text-xs text-slate-400">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
<div className="glass-card rounded-xl p-5">
<h3 className="font-semibold tracking-tight mb-6">Tenant Distribution</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-slate-400">Restaurants</span>
<span className="font-medium">412</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full gradient-main rounded-full" style={{width: '49%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-slate-400">Hotels</span>
<span className="font-medium">186</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full gradient-neon rounded-full" style={{width: '22%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-slate-400">Cafes</span>
<span className="font-medium">156</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full gradient-cyber rounded-full" style={{width: '18%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-slate-400">Dhabas</span>
<span className="font-medium">93</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full gradient-sunset rounded-full" style={{width: '11%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-5">
<div className="flex items-center justify-between mb-6">
<h3 className="font-semibold tracking-tight">Recent Activity</h3>
<button className="text-xs gradient-text font-medium">View All</button>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/30 transition-colors">
<div className="w-10 h-10 gradient-ocean rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5" data-lucide="user-plus"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium">New tenant registered</p>
<p className="text-xs text-slate-400">Spice Garden Restaurant - Mumbai</p>
</div>
<span className="text-xs text-slate-400 flex-shrink-0">2 min ago</span>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/30 transition-colors">
<div className="w-10 h-10 gradient-fire rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5" data-lucide="credit-card"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium">Subscription upgraded</p>
<p className="text-xs text-slate-400">Taj Kitchen - Pro Plan</p>
</div>
<span className="text-xs text-slate-400 flex-shrink-0">15 min ago</span>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/30 transition-colors">
<div className="w-10 h-10 gradient-aurora rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5" data-lucide="tablet"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium">Device activated</p>
<p className="text-xs text-slate-400">KOT Printer #3 - Highway Dhaba</p>
</div>
<span className="text-xs text-slate-400 flex-shrink-0">1 hour ago</span>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="tenantsSection">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Tenant Management</h3>
<p className="text-sm text-slate-400">Manage all POSCLOUD tenants</p>
</div>
<button className="gradient-main px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2" onclick="showModal('createTenantModal')">
<i className="w-4 h-4" data-lucide="plus"></i>
                                Add Tenant
                            </button>
</div>

<div className="glass-card rounded-xl p-4">
<div className="flex flex-wrap gap-3">
<input className="bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-sm flex-1 min-w-48 focus:outline-none focus:border-violet-500" placeholder="Search tenants..." type="text"/>
<select className="bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-sm">
<option>All Types</option>
<option>Restaurant</option>
<option>Hotel</option>
<option>Cafe</option>
<option>Dhaba</option>
</select>
<select className="bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-sm">
<option>All Status</option>
<option>Active</option>
<option>Trial</option>
<option>Suspended</option>
</select>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-slate-800/50">
<tr>
<th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Tenant</th>
<th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Type</th>
<th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Status</th>
<th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Plan</th>
<th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Devices</th>
<th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-ocean rounded-lg flex items-center justify-center">
<span className="text-sm font-semibold">SG</span>
</div>
<div>
<p className="text-sm font-medium">Spice Garden</p>
<p className="text-xs text-slate-400">Mumbai, MH</p>
</div>
</div>
</td>
<td className="px-4 py-4"><span className="text-sm">Restaurant</span></td>
<td className="px-4 py-4"><span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400">Active</span></td>
<td className="px-4 py-4"><span className="px-2 py-1 text-xs font-medium rounded-full gradient-main">Pro</span></td>
<td className="px-4 py-4"><span className="text-sm">8</span></td>
<td className="px-4 py-4">
<div className="flex items-center gap-2">
<button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors" onclick="showTenantDetail('Spice Garden')">
<i className="w-4 h-4" data-lucide="eye"></i>
</button>
<button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="edit"></i>
</button>
<button className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-colors" onclick="impersonateTenant('Spice Garden')">
<i className="w-4 h-4" data-lucide="user-cog"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-fire rounded-lg flex items-center justify-center">
<span className="text-sm font-semibold">TK</span>
</div>
<div>
<p className="text-sm font-medium">Taj Kitchen</p>
<p className="text-xs text-slate-400">Delhi, DL</p>
</div>
</div>
</td>
<td className="px-4 py-4"><span className="text-sm">Hotel</span></td>
<td className="px-4 py-4"><span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400">Active</span></td>
<td className="px-4 py-4"><span className="px-2 py-1 text-xs font-medium rounded-full gradient-royal">Enterprise</span></td>
<td className="px-4 py-4"><span className="text-sm">24</span></td>
<td className="px-4 py-4">
<div className="flex items-center gap-2">
<button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors" onclick="showTenantDetail('Taj Kitchen')">
<i className="w-4 h-4" data-lucide="eye"></i>
</button>
<button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="edit"></i>
</button>
<button className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-colors" onclick="impersonateTenant('Taj Kitchen')">
<i className="w-4 h-4" data-lucide="user-cog"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-sunset rounded-lg flex items-center justify-center">
<span className="text-sm font-semibold">CB</span>
</div>
<div>
<p className="text-sm font-medium">Coffee Bloom</p>
<p className="text-xs text-slate-400">Bangalore, KA</p>
</div>
</div>
</td>
<td className="px-4 py-4"><span className="text-sm">Cafe</span></td>
<td className="px-4 py-4"><span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-500/20 text-amber-400">Trial</span></td>
<td className="px-4 py-4"><span className="px-2 py-1 text-xs font-medium rounded-full gradient-aurora">Starter</span></td>
<td className="px-4 py-4"><span className="text-sm">3</span></td>
<td className="px-4 py-4">
<div className="flex items-center gap-2">
<button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors" onclick="showTenantDetail('Coffee Bloom')">
<i className="w-4 h-4" data-lucide="eye"></i>
</button>
<button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="edit"></i>
</button>
<button className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-colors" onclick="impersonateTenant('Coffee Bloom')">
<i className="w-4 h-4" data-lucide="user-cog"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-cyber rounded-lg flex items-center justify-center">
<span className="text-sm font-semibold text-slate-900">HD</span>
</div>
<div>
<p className="text-sm font-medium">Highway Dhaba</p>
<p className="text-xs text-slate-400">Punjab, PB</p>
</div>
</div>
</td>
<td className="px-4 py-4"><span className="text-sm">Dhaba</span></td>
<td className="px-4 py-4"><span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400">Active</span></td>
<td className="px-4 py-4"><span className="px-2 py-1 text-xs font-medium rounded-full gradient-neon">Basic</span></td>
<td className="px-4 py-4"><span className="text-sm">4</span></td>
<td className="px-4 py-4">
<div className="flex items-center gap-2">
<button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors" onclick="showTenantDetail('Highway Dhaba')">
<i className="w-4 h-4" data-lucide="eye"></i>
</button>
<button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="edit"></i>
</button>
<button className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-colors" onclick="impersonateTenant('Highway Dhaba')">
<i className="w-4 h-4" data-lucide="user-cog"></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="hidden space-y-6" id="superadminSection">
<div className="gradient-neon rounded-xl p-6 mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center animate-wiggle">
<i className="w-6 h-6" data-lucide="crown"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">SuperAdmin Console</h3>
<p className="text-sm text-white/80">Global administrative controls for all tenants</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="glass-card rounded-xl p-5 hover:border-violet-500/50 transition-colors cursor-pointer" onclick="impersonateTenant('Spice Garden')">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 gradient-ocean rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="user-cog"></i>
</div>
<div>
<h4 className="font-medium text-sm">Impersonate Tenant</h4>
<p className="text-xs text-slate-400">Access tenant as admin</p>
</div>
</div>
<p className="text-xs text-slate-400">Login as any tenant administrator to debug issues or assist with configuration.</p>
</div>
<div className="glass-card rounded-xl p-5 hover:border-violet-500/50 transition-colors cursor-pointer">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 gradient-fire rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="database"></i>
</div>
<div>
<h4 className="font-medium text-sm">Global Database</h4>
<p className="text-xs text-slate-400">Direct DB access</p>
</div>
</div>
<p className="text-xs text-slate-400">Execute read-only queries across all tenant databases for analytics.</p>
</div>
<div className="glass-card rounded-xl p-5 hover:border-violet-500/50 transition-colors cursor-pointer">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 gradient-aurora rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="broadcast"></i>
</div>
<div>
<h4 className="font-medium text-sm">System Broadcast</h4>
<p className="text-xs text-slate-400">Send announcements</p>
</div>
</div>
<p className="text-xs text-slate-400">Broadcast maintenance notices or updates to all tenant admins.</p>
</div>
</div>

<div className="glass-card rounded-xl p-5">
<h4 className="font-semibold tracking-tight mb-4">All Tenants Overview</h4>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-slate-800/50 rounded-lg p-4 text-center">
<p className="text-2xl font-semibold gradient-text">847</p>
<p className="text-xs text-slate-400 mt-1">Total Tenants</p>
</div>
<div className="bg-slate-800/50 rounded-lg p-4 text-center">
<p className="text-2xl font-semibold text-emerald-400">792</p>
<p className="text-xs text-slate-400 mt-1">Active</p>
</div>
<div className="bg-slate-800/50 rounded-lg p-4 text-center">
<p className="text-2xl font-semibold text-amber-400">43</p>
<p className="text-xs text-slate-400 mt-1">Trial</p>
</div>
<div className="bg-slate-800/50 rounded-lg p-4 text-center">
<p className="text-2xl font-semibold text-red-400">12</p>
<p className="text-xs text-slate-400 mt-1">Suspended</p>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="supportSection">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Support Tools</h3>
<p className="text-sm text-slate-400">Help tenants resolve issues</p>
</div>
<button className="gradient-ocean px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i>
                                New Ticket
                            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card rounded-xl p-5">
<h4 className="font-semibold tracking-tight mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="ticket"></i>
                                    Open Tickets
                                    <span className="ml-auto gradient-sunset text-xs px-2 py-0.5 rounded-full">12</span>
</h4>
<div className="space-y-3">
<div className="bg-slate-800/50 rounded-lg p-3">
<div className="flex items-start justify-between mb-2">
<span className="text-sm font-medium">KOT not printing</span>
<span className="px-2 py-0.5 text-xs rounded-full bg-red-500/20 text-red-400">Urgent</span>
</div>
<p className="text-xs text-slate-400">Spice Garden - 2 hours ago</p>
</div>
<div className="bg-slate-800/50 rounded-lg p-3">
<div className="flex items-start justify-between mb-2">
<span className="text-sm font-medium">Payment gateway error</span>
<span className="px-2 py-0.5 text-xs rounded-full bg-amber-500/20 text-amber-400">High</span>
</div>
<p className="text-xs text-slate-400">Taj Kitchen - 4 hours ago</p>
</div>
<div className="bg-slate-800/50 rounded-lg p-3">
<div className="flex items-start justify-between mb-2">
<span className="text-sm font-medium">Menu sync issue</span>
<span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-400">Normal</span>
</div>
<p className="text-xs text-slate-400">Coffee Bloom - 1 day ago</p>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-5">
<h4 className="font-semibold tracking-tight mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="terminal"></i>
                                    Remote Debug Console
                                </h4>
<div className="bg-slate-900 rounded-lg p-4 font-mono text-xs">
<p className="text-emerald-400">$ poscloud-debug --tenant spice-garden</p>
<p className="text-slate-400 mt-2">Connecting to tenant environment...</p>
<p className="text-slate-400">Session ID: DEBUG-847291</p>
<p className="text-emerald-400 mt-2">✓ Connected successfully</p>
<p className="text-slate-400 mt-2">Available commands:</p>
<p className="text-cyan-400 ml-2">logs, devices, sync, cache-clear</p>
<div className="flex items-center mt-4">
<span className="text-emerald-400">$</span>
<input className="flex-1 bg-transparent outline-none text-white ml-2 caret-emerald-400" placeholder="Enter command..." type="text"/>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="notificationsSection">
<div>
<h3 className="text-lg font-semibold tracking-tight">Notification Center</h3>
<p className="text-sm text-slate-400">Test and manage notification delivery</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass-card rounded-xl p-5">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 gradient-main rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="message-square"></i>
</div>
<div>
<h4 className="font-medium text-sm">SMS Test</h4>
<p className="text-xs text-slate-400">Twilio Gateway</p>
</div>
</div>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm mb-3" placeholder="+91 98765 43210" type="text"/>
<button className="w-full gradient-main py-2 rounded-lg text-sm font-medium">Send Test SMS</button>
</div>
<div className="glass-card rounded-xl p-5">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 gradient-cyber rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-slate-900" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-medium text-sm">WhatsApp Test</h4>
<p className="text-xs text-slate-400">Business API</p>
</div>
</div>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm mb-3" placeholder="+91 98765 43210" type="text"/>
<button className="w-full gradient-cyber text-slate-900 py-2 rounded-lg text-sm font-medium">Send Test WhatsApp</button>
</div>
<div className="glass-card rounded-xl p-5">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 gradient-ocean rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<h4 className="font-medium text-sm">Email Test</h4>
<p className="text-xs text-slate-400">SendGrid</p>
</div>
</div>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm mb-3" placeholder="test@example.com" type="email"/>
<button className="w-full gradient-ocean py-2 rounded-lg text-sm font-medium">Send Test Email</button>
</div>
</div>

<div className="glass-card rounded-xl p-5">
<h4 className="font-semibold tracking-tight mb-4">Delivery Queue</h4>
<div className="space-y-3">
<div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 gradient-main rounded-lg flex items-center justify-center">
<i className="w-4 h-4" data-lucide="message-square"></i>
</div>
<div>
<p className="text-sm font-medium">Order #4521 Confirmation</p>
<p className="text-xs text-slate-400">+91 98765 43210</p>
</div>
</div>
<span className="px-2 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400">Delivered</span>
</div>
<div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 gradient-cyber rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-slate-900" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-medium">Invoice #INV-2024-0847</p>
<p className="text-xs text-slate-400">+91 87654 32109</p>
</div>
</div>
<span className="px-2 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400">Pending</span>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="printerSection">
<div>
<h3 className="text-lg font-semibold tracking-tight">Printer &amp; ESC/POS Tester</h3>
<p className="text-sm text-slate-400">Test and configure thermal printers</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="glass-card rounded-xl p-5">
<h4 className="font-semibold tracking-tight mb-4">Print Preview</h4>
<div className="bg-white text-slate-900 rounded-lg p-6 font-mono text-xs max-w-xs mx-auto">
<div className="text-center mb-4">
<p className="font-semibold text-base">SPICE GARDEN</p>
<p>123 Main Street, Mumbai</p>
<p>Tel: +91 22 1234 5678</p>
</div>
<div className="border-t border-dashed border-slate-400 my-3"></div>
<div className="flex justify-between mb-2">
<span>Table: 05</span>
<span>KOT #127</span>
</div>
<div className="border-t border-dashed border-slate-400 my-3"></div>
<div className="space-y-1">
<div className="flex justify-between">
<span>2x Butter Chicken</span>
<span>₹640</span>
</div>
<div className="flex justify-between">
<span>3x Naan</span>
<span>₹120</span>
</div>
<div className="flex justify-between">
<span>1x Dal Makhani</span>
<span>₹220</span>
</div>
</div>
<div className="border-t border-dashed border-slate-400 my-3"></div>
<div className="flex justify-between font-semibold">
<span>TOTAL</span>
<span>₹980</span>
</div>
</div>
<button className="w-full gradient-fire py-2.5 rounded-lg text-sm font-medium mt-4 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="printer"></i>
                                    Test Print
                                </button>
</div>

<div className="glass-card rounded-xl p-5">
<h4 className="font-semibold tracking-tight mb-4">KOT Routing Configuration</h4>
<div className="space-y-4">
<div className="bg-slate-800/50 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 gradient-fire rounded-lg flex items-center justify-center">
<i className="w-4 h-4" data-lucide="flame"></i>
</div>
<span className="text-sm font-medium">Main Kitchen</span>
</div>
<label className="relative inline-flex cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-700 peer-checked:bg-violet-600 rounded-full peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
</label>
</div>
<p className="text-xs text-slate-400">Categories: Main Course, Starters, Rice</p>
<p className="text-xs text-slate-400">Printer: EPSON TM-T82</p>
</div>
<div className="bg-slate-800/50 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 gradient-aurora rounded-lg flex items-center justify-center">
<i className="w-4 h-4" data-lucide="glass-water"></i>
</div>
<span className="text-sm font-medium">Bar Counter</span>
</div>
<label className="relative inline-flex cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-700 peer-checked:bg-violet-600 rounded-full peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
</label>
</div>
<p className="text-xs text-slate-400">Categories: Beverages, Cocktails</p>
<p className="text-xs text-slate-400">Printer: STAR TSP100</p>
</div>
<div className="bg-slate-800/50 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 gradient-sunset rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-slate-900" data-lucide="cake"></i>
</div>
<span className="text-sm font-medium">Dessert Station</span>
</div>
<label className="relative inline-flex cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-700 peer-checked:bg-violet-600 rounded-full peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
</label>
</div>
<p className="text-xs text-slate-400">Categories: Desserts, Ice Cream</p>
<p className="text-xs text-slate-400">Printer: Not configured</p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="rbacSection">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">RBAC &amp; Temporary Access</h3>
<p className="text-sm text-slate-400">Manage roles and permissions</p>
</div>
<button className="gradient-royal px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i>
                                Create Role
                            </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="glass-card rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-main rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="crown"></i>
</div>
<div>
<h4 className="font-medium text-sm">Super Admin</h4>
<p className="text-xs text-slate-400">Full system access</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-xs rounded bg-violet-500/20 text-violet-400">tenants</span>
<span className="px-2 py-0.5 text-xs rounded bg-violet-500/20 text-violet-400">billing</span>
<span className="px-2 py-0.5 text-xs rounded bg-violet-500/20 text-violet-400">support</span>
<span className="px-2 py-0.5 text-xs rounded bg-violet-500/20 text-violet-400">all</span>
</div>
</div>
<div className="glass-card rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-ocean rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="headphones"></i>
</div>
<div>
<h4 className="font-medium text-sm">Support Agent</h4>
<p className="text-xs text-slate-400">Limited support access</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-xs rounded bg-blue-500/20 text-blue-400">tickets</span>
<span className="px-2 py-0.5 text-xs rounded bg-blue-500/20 text-blue-400">view-tenants</span>
<span className="px-2 py-0.5 text-xs rounded bg-blue-500/20 text-blue-400">logs</span>
</div>
</div>
<div className="glass-card rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-fire rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="credit-card"></i>
</div>
<div>
<h4 className="font-medium text-sm">Billing Admin</h4>
<p className="text-xs text-slate-400">Financial operations</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-xs rounded bg-pink-500/20 text-pink-400">invoices</span>
<span className="px-2 py-0.5 text-xs rounded bg-pink-500/20 text-pink-400">payments</span>
<span className="px-2 py-0.5 text-xs rounded bg-pink-500/20 text-pink-400">refunds</span>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-5">
<h4 className="font-semibold tracking-tight mb-4">Active Temporary Permissions</h4>
<div className="space-y-3">
<div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 gradient-sunset rounded-full flex items-center justify-center">
<span className="text-xs font-semibold text-slate-900">RK</span>
</div>
<div>
<p className="text-sm font-medium">Rahul Kumar</p>
<p className="text-xs text-slate-400">Elevated access to Spice Garden tenant</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="gradient-neon px-2 py-1 text-xs rounded-full font-medium animate-pulse">Expires in 2h 15m</span>
<button className="p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</div>
<div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 gradient-aurora rounded-full flex items-center justify-center">
<span className="text-xs font-semibold">PS</span>
</div>
<div>
<p className="text-sm font-medium">Priya Singh</p>
<p className="text-xs text-slate-400">Database read access for debugging</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="gradient-neon px-2 py-1 text-xs rounded-full font-medium animate-pulse">Expires in 45m</span>
<button className="p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="approvalsSection">
<div>
<h3 className="text-lg font-semibold tracking-tight">Approvals Center</h3>
<p className="text-sm text-slate-400">Review and approve sensitive actions</p>
</div>
<div className="space-y-4">
<div className="glass-card rounded-xl p-5 border-l-4 border-red-500">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-red-400" data-lucide="undo-2"></i>
</div>
<div>
<h4 className="font-medium text-sm">Refund Request - ₹4,850</h4>
<p className="text-xs text-slate-400 mt-1">Spice Garden Restaurant • Order #4521 • Reason: Wrong order delivered</p>
<p className="text-xs text-slate-500 mt-1">Requested by: Store Manager</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">Reject</button>
<button className="px-4 py-2 text-sm font-medium bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors">Approve</button>
</div>
</div>
</div>
<div className="glass-card rounded-xl p-5 border-l-4 border-amber-500">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-amber-400" data-lucide="trash-2"></i>
</div>
<div>
<h4 className="font-medium text-sm">Data Purge Request</h4>
<p className="text-xs text-slate-400 mt-1">Taj Kitchen Hotel • Delete sales data older than 3 years</p>
<p className="text-xs text-slate-500 mt-1">Requested by: Account Admin</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">Reject</button>
<button className="px-4 py-2 text-sm font-medium bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors">Approve</button>
</div>
</div>
</div>
<div className="glass-card rounded-xl p-5 border-l-4 border-violet-500">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-violet-400" data-lucide="toggle-right"></i>
</div>
<div>
<h4 className="font-medium text-sm">Feature Flag: Multi-Currency</h4>
<p className="text-xs text-slate-400 mt-1">Coffee Bloom Cafe • Enable multi-currency payments</p>
<p className="text-xs text-slate-500 mt-1">Requested by: Owner</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">Reject</button>
<button className="px-4 py-2 text-sm font-medium bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors">Approve</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="auditlogsSection">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Audit Logs</h3>
<p className="text-sm text-slate-400">System activity timeline</p>
</div>
<button className="glass px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i>
                                Export Logs
                            </button>
</div>
<div className="glass-card rounded-xl p-5">
<div className="relative pl-6 space-y-6">
<div className="absolute left-0 top-2 bottom-2 w-px gradient-main"></div>
<div className="relative">
<div className="absolute -left-6 w-3 h-3 gradient-main rounded-full border-2 border-slate-950"></div>
<div className="glass-dark rounded-lg p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium">New tenant created</p>
<p className="text-xs text-slate-400 mt-1">Mountain View Cafe was onboarded by Support Agent</p>
</div>
<span className="text-xs text-slate-400">2 min ago</span>
</div>
<div className="flex items-center gap-2 mt-3">
<span className="px-2 py-0.5 text-xs rounded bg-emerald-500/20 text-emerald-400">CREATE</span>
<span className="text-xs text-slate-500">IP: 103.45.67.89</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-6 w-3 h-3 gradient-neon rounded-full border-2 border-slate-950"></div>
<div className="glass-dark rounded-lg p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium">Permission escalated</p>
<p className="text-xs text-slate-400 mt-1">Rahul Kumar granted temporary DB access for debugging</p>
</div>
<span className="text-xs text-slate-400">15 min ago</span>
</div>
<div className="flex items-center gap-2 mt-3">
<span className="px-2 py-0.5 text-xs rounded bg-amber-500/20 text-amber-400">PERMISSION</span>
<span className="text-xs text-slate-500">IP: 192.168.1.45</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-6 w-3 h-3 gradient-fire rounded-full border-2 border-slate-950"></div>
<div className="glass-dark rounded-lg p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium">Refund approved</p>
<p className="text-xs text-slate-400 mt-1">₹2,340 refund processed for Spice Garden - Order #4489</p>
</div>
<span className="text-xs text-slate-400">1 hour ago</span>
</div>
<div className="flex items-center gap-2 mt-3">
<span className="px-2 py-0.5 text-xs rounded bg-red-500/20 text-red-400">FINANCIAL</span>
<span className="text-xs text-slate-500">IP: 103.45.67.89</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-6 w-3 h-3 gradient-cyber rounded-full border-2 border-slate-950"></div>
<div className="glass-dark rounded-lg p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium">System backup completed</p>
<p className="text-xs text-slate-400 mt-1">Daily backup of all tenant databases - 847 tenants</p>
</div>
<span className="text-xs text-slate-400">3 hours ago</span>
</div>
<div className="flex items-center gap-2 mt-3">
<span className="px-2 py-0.5 text-xs rounded bg-cyan-500/20 text-cyan-400">SYSTEM</span>
<span className="text-xs text-slate-500">Automated</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="tenantDetailSection">
<button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors" onclick="showSection('tenants')">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
                            Back to Tenants
                        </button>
<div className="glass-card gradient-ocean rounded-xl p-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-semibold">
                                        SG
                                    </div>
<div>
<h3 className="text-xl font-semibold tracking-tight" id="tenantDetailName">Spice Garden Restaurant</h3>
<p className="text-sm text-white/80">Mumbai, Maharashtra • Active since Jan 2023</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
<i className="w-4 h-4 inline mr-1" data-lucide="edit"></i>
                                        Edit
                                    </button>
<button className="gradient-sunset text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity" onclick="impersonateTenant('Spice Garden')">
<i className="w-4 h-4 inline mr-1" data-lucide="user-cog"></i>
                                        Impersonate
                                    </button>
</div>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden">
<div className="flex overflow-x-auto border-b border-slate-800">
<button className="tenant-tab px-4 py-3 text-sm font-medium text-white border-b-2 border-violet-500 whitespace-nowrap" onclick="showTenantTab('overview')">Overview</button>
<button className="tenant-tab px-4 py-3 text-sm font-medium text-slate-400 hover:text-white border-b-2 border-transparent whitespace-nowrap" onclick="showTenantTab('menu')">Menu &amp; Catalog</button>
<button className="tenant-tab px-4 py-3 text-sm font-medium text-slate-400 hover:text-white border-b-2 border-transparent whitespace-nowrap" onclick="showTenantTab('devices')">Devices</button>
<button className="tenant-tab px-4 py-3 text-sm font-medium text-slate-400 hover:text-white border-b-2 border-transparent whitespace-nowrap" onclick="showTenantTab('inventory')">Inventory</button>
<button className="tenant-tab px-4 py-3 text-sm font-medium text-slate-400 hover:text-white border-b-2 border-transparent whitespace-nowrap" onclick="showTenantTab('staff')">Staff</button>
<button className="tenant-tab px-4 py-3 text-sm font-medium text-slate-400 hover:text-white border-b-2 border-transparent whitespace-nowrap" onclick="showTenantTab('subscription')">Subscription</button>
<button className="tenant-tab px-4 py-3 text-sm font-medium text-slate-400 hover:text-white border-b-2 border-transparent whitespace-nowrap" onclick="showTenantTab('features')">Features</button>
</div>

<div className="p-5" id="tenantOverview">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="bg-slate-800/50 rounded-lg p-4">
<p className="text-xs text-slate-400">Total Sales</p>
<p className="text-xl font-semibold tracking-tight mt-1">₹24.7L</p>
</div>
<div className="bg-slate-800/50 rounded-lg p-4">
<p className="text-xs text-slate-400">Orders Today</p>
<p className="text-xl font-semibold tracking-tight mt-1">127</p>
</div>
<div className="bg-slate-800/50 rounded-lg p-4">
<p className="text-xs text-slate-400">Active Staff</p>
<p className="text-xl font-semibold tracking-tight mt-1">18</p>
</div>
<div className="bg-slate-800/50 rounded-lg p-4">
<p className="text-xs text-slate-400">Devices</p>
<p className="text-xl font-semibold tracking-tight mt-1">8</p>
</div>
</div>
</div>

<div className="p-5 hidden" id="tenantMenu">
<div className="flex items-center justify-between mb-4">
<h4 className="font-semibold">Menu Categories</h4>
<button className="gradient-fire px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1">
<i className="w-3 h-3" data-lucide="upload"></i>
                                        Import CSV
                                    </button>
</div>
<div className="space-y-2">
<div className="bg-slate-800/50 rounded-lg p-3 flex items-center justify-between">
<span className="text-sm">Starters</span>
<span className="text-xs text-slate-400">24 items</span>
</div>
<div className="bg-slate-800/50 rounded-lg p-3 flex items-center justify-between">
<span className="text-sm">Main Course</span>
<span className="text-xs text-slate-400">36 items</span>
</div>
<div className="bg-slate-800/50 rounded-lg p-3 flex items-center justify-between">
<span className="text-sm">Beverages</span>
<span className="text-xs text-slate-400">18 items</span>
</div>
</div>
</div>

<div className="p-5 hidden" id="tenantDevices">
<div className="space-y-3">
<div className="bg-slate-800/50 rounded-lg p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 gradient-main rounded-lg flex items-center justify-center">
<i className="w-4 h-4" data-lucide="tablet"></i>
</div>
<div>
<p className="text-sm font-medium">POS Terminal #1</p>
<p className="text-xs text-slate-400">iPad Pro • Counter</p>
</div>
</div>
<span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
</div>
<div className="bg-slate-800/50 rounded-lg p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 gradient-fire rounded-lg flex items-center justify-center">
<i className="w-4 h-4" data-lucide="printer"></i>
</div>
<div>
<p className="text-sm font-medium">KOT Printer - Kitchen</p>
<p className="text-xs text-slate-400">EPSON TM-T82</p>
</div>
</div>
<span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
</div>
</div>
</div>

<div className="p-5 hidden" id="tenantInventory">
<div className="mb-4">
<h4 className="font-semibold text-sm mb-3">Low Stock Alerts</h4>
<div className="space-y-2">
<div className="gradient-sunset rounded-lg p-3 flex items-center justify-between text-slate-900">
<span className="text-sm font-medium">Basmati Rice</span>
<span className="text-xs font-semibold">2 kg left</span>
</div>
<div className="gradient-sunset rounded-lg p-3 flex items-center justify-between text-slate-900">
<span className="text-sm font-medium">Paneer</span>
<span className="text-xs font-semibold">500g left</span>
</div>
</div>
</div>
</div>

<div className="p-5 hidden" id="tenantStaff">
<div className="space-y-3">
<div className="bg-slate-800/50 rounded-lg p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 gradient-ocean rounded-full flex items-center justify-center text-xs font-semibold">AM</div>
<div>
<p className="text-sm font-medium">Amit Mehta</p>
<p className="text-xs text-slate-400">Store Manager</p>
</div>
</div>
<span className="px-2 py-0.5 text-xs rounded bg-emerald-500/20 text-emerald-400">Active</span>
</div>
<div className="bg-slate-800/50 rounded-lg p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 gradient-fire rounded-full flex items-center justify-center text-xs font-semibold">RS</div>
<div>
<p className="text-sm font-medium">Ravi Sharma</p>
<p className="text-xs text-slate-400">Head Chef</p>
</div>
</div>
<span className="px-2 py-0.5 text-xs rounded bg-emerald-500/20 text-emerald-400">Active</span>
</div>
</div>
</div>

<div className="p-5 hidden" id="tenantSubscription">
<div className="gradient-royal rounded-xl p-5 mb-4">
<div className="flex items-center justify-between mb-3">
<span className="text-lg font-semibold">Pro Plan</span>
<span className="text-sm">₹4,999/month</span>
</div>
<p className="text-xs text-white/80">Next billing: 15 Feb 2024</p>
</div>
<h4 className="font-semibold text-sm mb-3">Recent Invoices</h4>
<div className="space-y-2">
<div className="bg-slate-800/50 rounded-lg p-3 flex items-center justify-between">
<span className="text-sm">INV-2024-0127</span>
<span className="text-xs text-emerald-400">Paid</span>
</div>
<div className="bg-slate-800/50 rounded-lg p-3 flex items-center justify-between">
<span className="text-sm">INV-2024-0089</span>
<span className="text-xs text-emerald-400">Paid</span>
</div>
</div>
</div>

<div className="p-5 hidden" id="tenantFeatures">
<h4 className="font-semibold text-sm mb-4">Feature Flags</h4>
<div className="space-y-3">
<div className="bg-slate-800/50 rounded-lg p-4 flex items-center justify-between">
<div>
<p className="text-sm font-medium">Multi-Currency</p>
<p className="text-xs text-slate-400">Accept payments in multiple currencies</p>
</div>
<label className="relative inline-flex cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-700 peer-checked:bg-violet-600 rounded-full peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
</label>
</div>
<div className="bg-slate-800/50 rounded-lg p-4 flex items-center justify-between">
<div>
<p className="text-sm font-medium">Table Reservations</p>
<p className="text-xs text-slate-400">Online booking system</p>
</div>
<label className="relative inline-flex cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-700 peer-checked:bg-violet-600 rounded-full peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
</label>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>
</div>

<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4" id="createTenantModal">
<div className="glass-card gradient-ocean rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
<div className="p-6 border-b border-white/10">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Create New Tenant</h3>
<button className="text-white/60 hover:text-white" onclick="hideModal('createTenantModal')">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
</div>
<div className="p-6 space-y-4">
<div>
<label className="block text-xs font-medium text-white/80 mb-2">Business Name</label>
<input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white/40" placeholder="Enter business name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-white/80 mb-2">Business Type</label>
<select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white/40">
<option value="">Select type</option>
<option>Restaurant</option>
<option>Hotel</option>
<option>Cafe</option>
<option>Dhaba</option>
</select>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-white/80 mb-2">City</label>
<input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white/40" placeholder="City" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-white/80 mb-2">State</label>
<input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white/40" placeholder="State" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-white/80 mb-2">Admin Email</label>
<input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white/40" placeholder="admin@business.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-white/80 mb-2">Plan</label>
<select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white/40">
<option>Starter - ₹1,999/mo</option>
<option>Basic - ₹2,999/mo</option>
<option selected="">Pro - ₹4,999/mo</option>
<option>Enterprise - ₹9,999/mo</option>
</select>
</div>
</div>
<div className="p-6 border-t border-white/10 flex justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors" onclick="hideModal('createTenantModal')">Cancel</button>
<button className="gradient-cyber text-slate-900 px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Create Tenant</button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/50 z-30 hidden lg:hidden" id="sidebarOverlay" onclick="toggleSidebar()"></div>


    </>
  );
}
