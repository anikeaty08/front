import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Update date/time
        function updateDateTime() {
            const now = new Date();
            document.getElementById('currentDateTime').textContent = now.toLocaleString('en-IN', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }
        updateDateTime();
        setInterval(updateDateTime, 60000);

        // Login form handling
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('totpModal').classList.remove('hidden');
            setupTOTPInputs();
        });

        function setupTOTPInputs() {
            const inputs = document.querySelectorAll('#totpInputs input');
            inputs.forEach((input, index) => {
                input.value = '';
                input.addEventListener('input', function() {
                    if (this.value.length === 1 && index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                });
                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Backspace' && this.value === '' && index > 0) {
                        inputs[index - 1].focus();
                    }
                });
            });
            inputs[0].focus();
        }

        function verifyTOTP() {
            const inputs = document.querySelectorAll('#totpInputs input');
            const code = Array.from(inputs).map(i => i.value).join('');
            if (code === '123456' || code.length === 6) {
                document.getElementById('totpModal').classList.add('hidden');
                document.getElementById('loginScreen').classList.add('hidden');
                document.getElementById('mainApp').classList.remove('hidden');
                lucide.createIcons();
                initCharts();
                generateHeatmap();
                showToast('Welcome back, Rajesh!');
            }
        }

        function showForgotPassword() {
            document.getElementById('forgotModal').classList.remove('hidden');
        }

        function closeForgotPassword() {
            document.getElementById('forgotModal').classList.add('hidden');
        }

        function sendResetEmail() {
            closeForgotPassword();
            showToast('Reset link sent to your email');
        }

        function logout() {
            document.getElementById('mainApp').classList.add('hidden');
            document.getElementById('loginScreen').classList.remove('hidden');
            toggleUserMenu();
        }

        // Sidebar toggle
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            sidebar.classList.toggle('-translate-x-full');
            overlay.classList.toggle('hidden');
        }

        // Section navigation
        function showSection(sectionName) {
            document.querySelectorAll('.section-content').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionName + 'Section').classList.remove('hidden');
            
            document.querySelectorAll('.sidebar-item').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelector(`[data-section="${sectionName}"]`)?.classList.add('active');
            
            const titles = {
                'dashboard': 'Dashboard',
                'orders': 'Orders',
                'tables': 'Tables & Floor',
                'menu': 'Menu & QR',
                'kot': 'KOT & KDS',
                'inventory': 'Inventory',
                'staff': 'Staff & RBAC',
                'customers': 'Customers',
                'offers': 'Offers & Loyalty',
                'reports': 'Reports',
                'billing': 'Billing & POS',
                'integrations': 'Integrations',
                'approvals': 'Approvals',
                'audit': 'Audit Logs',
                'settings': 'Settings',
                'support': 'Help & Support'
            };
            document.getElementById('pageTitle').textContent = titles[sectionName] || 'Dashboard';
            
            if (window.innerWidth < 1024) {
                toggleSidebar();
            }
        }

        // Dropdown toggles
        function toggleNotifications() {
            document.getElementById('notificationsDropdown').classList.toggle('hidden');
            document.getElementById('userMenuDropdown').classList.add('hidden');
        }

        function toggleUserMenu() {
            document.getElementById('userMenuDropdown').classList.toggle('hidden');
            document.getElementById('notificationsDropdown').classList.add('hidden');
        }

        // Close dropdowns on outside click
        document.addEventListener('click', function(e) {
            if (!e.target.closest('[onclick*="toggleNotifications"]') && !e.target.closest('#notificationsDropdown')) {
                document.getElementById('notificationsDropdown').classList.add('hidden');
            }
            if (!e.target.closest('[onclick*="toggleUserMenu"]') && !e.target.closest('#userMenuDropdown')) {
                document.getElementById('userMenuDropdown').classList.add('hidden');
            }
        });

        // Toast notification
        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMessage').textContent = message;
            toast.classList.remove('hidden', 'translate-y-4', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-4', 'opacity-0');
                setTimeout(() => toast.classList.add('hidden'), 300);
            }, 3000);
        }

        // Placeholder functions
        function showQuickOrder() { showToast('Quick Order modal would open'); }
        function showTableActions(table) { showToast(`Table ${table} actions menu`); }
        function showTableEditor() { showToast('Table layout editor would open'); }
        function showAddItem() { showToast('Add item modal would open'); }
        function showCSVImport() { showToast('CSV import dialog would open'); }
        function showQRGenerator() { showToast('QR code generator would open'); }
        function selectCategory(cat) { showToast(`Selected category: ${cat}`); }
        function showPrintPreview() { showToast('Print preview would open'); }
        function showAddStaff() { showToast('Add staff modal would open'); }
        function showApprovalModal(action) { showToast(`${action} modal would open`); }
        function showSessionsModal() { showToast('Active sessions modal would open'); }
        function endImpersonation() { document.getElementById('impersonationBanner').classList.add('hidden'); }

        // Generate heatmap
        function generateHeatmap() {
            const grid = document.getElementById('heatmapGrid');
            if (!grid) return;
            grid.innerHTML = '';
            const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            for (let d = 0; d < 7; d++) {
                for (let h = 0; h < 12; h++) {
                    const intensity = Math.random();
                    const cell = document.createElement('div');
                    cell.className = 'aspect-square rounded-sm cursor-pointer hover:scale-110 transition-transform';
                    cell.style.background = `rgba(139, 92, 246, ${intensity})`;
                    cell.title = `${days[d]} ${10 + h}:00 - ₹${Math.floor(intensity * 5000)}`;
                    grid.appendChild(cell);
                }
            }
        }

        // Initialize charts
        function initCharts() {
            // Sales Chart
            const salesCtx = document.getElementById('salesChart');
            if (salesCtx) {
                new Chart(salesCtx, {
                    type: 'line',
                    data: {
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        datasets: [{
                            label: 'Sales',
                            data: [32000, 28000, 42000, 38000, 55000, 68000, 48250],
                            borderColor: '#8b5cf6',
                            backgroundColor: 'rgba(139, 92, 246, 0.1)',
                            fill: true,
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: {
                            y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#94a3b8' } },
                            x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                        }
                    }
                });
            }

            // Category Chart
            const categoryCtx = document.getElementById('categoryChart');
            if (categoryCtx) {
                new Chart(categoryCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Main Course', 'Starters', 'Beverages', 'Desserts', 'Breads'],
                        datasets: [{
                            data: [35, 25, 18, 12, 10],
                            backgroundColor: ['#8b5cf6', '#f43f5e', '#06b6d4', '#f59e0b', '#10b981']
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { position: 'right', labels: { color: '#94a3b8' } } }
                    }
                });
            }

            // Revenue Chart
            const revenueCtx = document.getElementById('revenueChart');
            if (revenueCtx) {
                const labels = Array.from({length: 30}, (_, i) => i + 1);
                const data = labels.map(() => Math.floor(Math.random() * 20000) + 8000);
                new Chart(revenueCtx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Daily Revenue',
                            data: data,
                            backgroundColor: '#8b5cf6',
                            borderRadius: 4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: {
                            y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#94a3b8' } },
                            x: { grid: { display: false }, ticks: { color: '#94a3b8', maxTicksLimit: 10 } }
                        }
                    }
                });
            }
        }

        // Offline detection
        window.addEventListener('online', () => {
            document.getElementById('offlineBanner').classList.add('hidden');
            showToast('Connection restored');
        });
        window.addEventListener('offline', () => {
            document.getElementById('offlineBanner').classList.remove('hidden');
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'k') {
                    e.preventDefault();
                    document.querySelector('input[aria-label="Search"]')?.focus();
                }
            }
            if (e.key === 'Escape') {
                document.getElementById('totpModal').classList.add('hidden');
                document.getElementById('forgotModal').classList.add('hidden');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex items-center justify-center p-4" id="loginScreen">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-20 left-20 w-72 h-72 gradient-main rounded-full opacity-20 blur-3xl animate-float"></div>
<div className="absolute bottom-20 right-20 w-96 h-96 gradient-ocean rounded-full opacity-20 blur-3xl animate-float-reverse"></div>
<div className="absolute top-1/2 left-1/2 w-64 h-64 gradient-cyber rounded-full opacity-10 blur-3xl animate-morph"></div>
</div>
<div className="glass rounded-2xl p-8 w-full max-w-md relative z-10">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-16 h-16 gradient-main rounded-2xl mb-4 animate-pulse-glow">
<span className="text-2xl font-bold tracking-tighter">PC</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight">POSCLOUD</h1>
<p className="text-slate-400 text-sm mt-1">MyPMS Solutions</p>
</div>
<form className="space-y-4" id="loginForm">
<div>
<label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="email">Email</label>
<input aria-describedby="emailHelp" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 transition" id="email" placeholder="Enter your email" required="" type="email" value="admin@spicegarden.com"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="password">Password</label>
<input className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 transition" id="password" placeholder="Enter your password" required="" type="password" value="Admin@1234"/>
</div>
<div className="flex items-center justify-between text-sm">
<label className="flex items-center gap-2 cursor-pointer">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-slate-400">Remember me</span>
</label>
<button className="text-purple-400 hover:text-purple-300 transition" onclick="showForgotPassword()" type="button">Forgot password?</button>
</div>
<button className="w-full py-3 gradient-main rounded-xl font-medium hover:opacity-90 transition transform hover:scale-[1.02] active:scale-[0.98]" type="submit">
                    Sign In
                </button>
</form>
<div className="mt-6 pt-6 border-t border-slate-700/50">
<p className="text-center text-slate-500 text-xs">Demo Credentials:</p>
<div className="mt-2 space-y-1 text-xs text-slate-400">
<p>Owner: admin@spicegarden.com / Admin@1234</p>
<p>Manager: manager@spicegarden.com / Manager@1234</p>
<p>Cashier: cashier@spicegarden.com / Cashier@1234</p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4" id="totpModal">
<div aria-labelledby="totpTitle" aria-modal="true" className="glass rounded-2xl p-6 w-full max-w-sm animate-scale-pulse" role="dialog" style={{animationIterationCount: '1'}}>
<div className="text-center mb-6">
<div className="inline-flex items-center justify-center w-12 h-12 gradient-neon rounded-xl mb-3">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h2 className="text-xl font-semibold tracking-tight" id="totpTitle">Two-Factor Authentication</h2>
<p className="text-slate-400 text-sm mt-1">Enter the 6-digit code from your authenticator</p>
</div>
<div className="flex gap-2 justify-center mb-6" id="totpInputs">
<input aria-label="TOTP digit 1" className="w-12 h-14 text-center text-xl font-semibold bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500" maxlength="1" type="text"/>
<input aria-label="TOTP digit 2" className="w-12 h-14 text-center text-xl font-semibold bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500" maxlength="1" type="text"/>
<input aria-label="TOTP digit 3" className="w-12 h-14 text-center text-xl font-semibold bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500" maxlength="1" type="text"/>
<input aria-label="TOTP digit 4" className="w-12 h-14 text-center text-xl font-semibold bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500" maxlength="1" type="text"/>
<input aria-label="TOTP digit 5" className="w-12 h-14 text-center text-xl font-semibold bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500" maxlength="1" type="text"/>
<input aria-label="TOTP digit 6" className="w-12 h-14 text-center text-xl font-semibold bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500" maxlength="1" type="text"/>
</div>
<p className="text-center text-xs text-slate-500 mb-4">Demo code: 123456</p>
<button className="w-full py-3 gradient-main rounded-xl font-medium hover:opacity-90 transition" onclick="verifyTOTP()">Verify</button>
</div>
</div>

<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4" id="forgotModal">
<div aria-labelledby="forgotTitle" aria-modal="true" className="glass rounded-2xl p-6 w-full max-w-sm" role="dialog">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-semibold tracking-tight" id="forgotTitle">Reset Password</h2>
<button aria-label="Close" className="p-2 hover:bg-white/10 rounded-lg transition" onclick="closeForgotPassword()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<p className="text-slate-400 text-sm mb-4">Enter your email to receive reset instructions</p>
<input className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 mb-4" placeholder="Enter your email" type="email"/>
<button className="w-full py-3 gradient-ocean rounded-xl font-medium hover:opacity-90 transition" onclick="sendResetEmail()">Send Reset Link</button>
</div>
</div>

<div className="hidden" id="mainApp">

<div className="hidden impersonation-banner text-white text-center py-2 text-sm font-medium" id="impersonationBanner">
<i className="w-4 h-4 inline mr-2" data-lucide="alert-triangle"></i>
            You are impersonating: Support User | <button className="underline ml-2" onclick="endImpersonation()">End Session</button>
</div>

<div className="hidden offline-banner text-white text-center py-2 text-sm font-medium" id="offlineBanner">
<i className="w-4 h-4 inline mr-2" data-lucide="wifi-off"></i>
            You are offline. Orders will sync when connection is restored.
            <span className="ml-2 px-2 py-0.5 bg-white/20 rounded" id="unsyncedCount">0 unsynced</span>
</div>
<div className="flex min-h-screen">

<aside className="w-64 gradient-hero flex-shrink-0 flex flex-col fixed lg:relative h-screen z-40 transform -translate-x-full lg:translate-x-0 transition-transform" id="sidebar">
<div className="p-4 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-main rounded-xl flex items-center justify-center">
<span className="font-bold tracking-tighter">PC</span>
</div>
<div>
<h1 className="font-semibold tracking-tight">POSCLOUD</h1>
<p className="text-xs text-slate-400">MyPMS Solutions</p>
</div>
</div>
</div>
<nav aria-label="Main navigation" className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1" role="navigation">
<button className="sidebar-item active w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="dashboard" onclick="showSection('dashboard')">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium">Dashboard</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="orders" onclick="showSection('orders')">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
<span className="text-sm font-medium">Orders</span>
<span className="ml-auto px-2 py-0.5 text-xs gradient-fire rounded-full">12</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="tables" onclick="showSection('tables')">
<i className="w-5 h-5" data-lucide="grid-3x3"></i>
<span className="text-sm font-medium">Tables &amp; Floor</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="menu" onclick="showSection('menu')">
<i className="w-5 h-5" data-lucide="utensils"></i>
<span className="text-sm font-medium">Menu &amp; QR</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="kot" onclick="showSection('kot')">
<i className="w-5 h-5" data-lucide="chef-hat"></i>
<span className="text-sm font-medium">KOT &amp; KDS</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="inventory" onclick="showSection('inventory')">
<i className="w-5 h-5" data-lucide="package"></i>
<span className="text-sm font-medium">Inventory</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="staff" onclick="showSection('staff')">
<i className="w-5 h-5" data-lucide="users"></i>
<span className="text-sm font-medium">Staff &amp; RBAC</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="customers" onclick="showSection('customers')">
<i className="w-5 h-5" data-lucide="contact"></i>
<span className="text-sm font-medium">Customers</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="offers" onclick="showSection('offers')">
<i className="w-5 h-5" data-lucide="ticket-percent"></i>
<span className="text-sm font-medium">Offers &amp; Loyalty</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="reports" onclick="showSection('reports')">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
<span className="text-sm font-medium">Reports</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="billing" onclick="showSection('billing')">
<i className="w-5 h-5" data-lucide="receipt"></i>
<span className="text-sm font-medium">Billing &amp; POS</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="integrations" onclick="showSection('integrations')">
<i className="w-5 h-5" data-lucide="plug"></i>
<span className="text-sm font-medium">Integrations</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="approvals" onclick="showSection('approvals')">
<i className="w-5 h-5" data-lucide="check-circle"></i>
<span className="text-sm font-medium">Approvals</span>
<span className="ml-auto px-2 py-0.5 text-xs gradient-sunset rounded-full">3</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="audit" onclick="showSection('audit')">
<i className="w-5 h-5" data-lucide="file-text"></i>
<span className="text-sm font-medium">Audit Logs</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="settings" onclick="showSection('settings')">
<i className="w-5 h-5" data-lucide="settings"></i>
<span className="text-sm font-medium">Settings</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left" data-section="support" onclick="showSection('support')">
<i className="w-5 h-5" data-lucide="headphones"></i>
<span className="text-sm font-medium">Support</span>
</button>
</nav>
<div className="p-4 border-t border-white/10">
<div className="glass rounded-xl p-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-ocean rounded-full flex items-center justify-center text-sm font-semibold">SG</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Spice Garden</p>
<p className="text-xs text-slate-400">Main Branch</p>
</div>
<button aria-label="Switch branch" className="p-1.5 hover:bg-white/10 rounded-lg transition">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>
</aside>

<div className="fixed inset-0 bg-black/50 z-30 hidden lg:hidden" id="sidebarOverlay" onclick="toggleSidebar()"></div>

<main className="flex-1 flex flex-col min-h-screen">

<header className="glass-dark sticky top-0 z-20 px-4 lg:px-6 py-3 flex items-center justify-between gap-4">
<div className="flex items-center gap-4">
<button aria-label="Toggle menu" className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition" onclick="toggleSidebar()">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="hidden sm:block">
<h2 className="text-lg font-semibold tracking-tight" id="pageTitle">Dashboard</h2>
<p className="text-xs text-slate-400" id="currentDateTime"></p>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-4">

<button className="hidden sm:flex items-center gap-2 px-4 py-2 gradient-main rounded-xl text-sm font-medium hover:opacity-90 transition" onclick="showQuickOrder()">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>New Order</span>
</button>

<div className="relative hidden md:block">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search"></i>
<input aria-label="Search" className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500 w-48 lg:w-64" placeholder="Search..." type="text"/>
</div>

<div className="relative">
<button aria-expanded="false" aria-haspopup="true" aria-label="Notifications" className="p-2 hover:bg-white/10 rounded-xl transition relative" onclick="toggleNotifications()">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-1 right-1 w-2 h-2 gradient-fire rounded-full"></span>
</button>
<div className="hidden absolute right-0 top-full mt-2 w-80 glass rounded-xl overflow-hidden dropdown-menu" id="notificationsDropdown" role="menu">
<div className="p-3 border-b border-white/10 flex justify-between items-center">
<h3 className="font-medium">Notifications</h3>
<button className="text-xs text-purple-400 hover:text-purple-300">Mark all read</button>
</div>
<div className="max-h-80 overflow-y-auto custom-scrollbar">
<div className="p-3 hover:bg-white/5 border-l-2 border-purple-500">
<p className="text-sm font-medium">Low Stock Alert</p>
<p className="text-xs text-slate-400 mt-0.5">Basmati Rice is below reorder level</p>
<p className="text-xs text-slate-500 mt-1">5 min ago</p>
</div>
<div className="p-3 hover:bg-white/5 border-l-2 border-amber-500">
<p className="text-sm font-medium">Pending Approval</p>
<p className="text-xs text-slate-400 mt-0.5">Refund request for Order #1234</p>
<p className="text-xs text-slate-500 mt-1">12 min ago</p>
</div>
<div className="p-3 hover:bg-white/5 border-l-2 border-green-500">
<p className="text-sm font-medium">Order Completed</p>
<p className="text-xs text-slate-400 mt-0.5">Table 5 - ₹2,450</p>
<p className="text-xs text-slate-500 mt-1">25 min ago</p>
</div>
</div>
<div className="p-3 border-t border-white/10">
<button className="w-full text-sm text-center text-purple-400 hover:text-purple-300">View All</button>
</div>
</div>
</div>

<div className="relative">
<button aria-expanded="false" aria-haspopup="true" aria-label="User menu" className="flex items-center gap-2 p-1.5 hover:bg-white/10 rounded-xl transition" onclick="toggleUserMenu()">
<div className="w-8 h-8 gradient-main rounded-lg flex items-center justify-center text-sm font-semibold">A</div>
<span className="hidden sm:block text-sm font-medium">Admin</span>
<i className="w-4 h-4 hidden sm:block" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 top-full mt-2 w-56 glass rounded-xl overflow-hidden dropdown-menu" id="userMenuDropdown" role="menu">
<div className="p-3 border-b border-white/10">
<p className="font-medium">Rajesh Kumar</p>
<p className="text-xs text-slate-400">admin@spicegarden.com</p>
<span className="inline-block mt-1 px-2 py-0.5 text-xs gradient-main rounded-full">Owner Admin</span>
</div>
<div className="py-2">
<button className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 flex items-center gap-2" onclick="showSection('settings')">
<i className="w-4 h-4" data-lucide="user"></i> Profile
                                    </button>
<button className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 flex items-center gap-2" onclick="showSessionsModal()">
<i className="w-4 h-4" data-lucide="monitor"></i> Sessions
                                    </button>
<button className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 flex items-center gap-2" onclick="showSection('settings')">
<i className="w-4 h-4" data-lucide="settings"></i> Settings
                                    </button>
</div>
<div className="border-t border-white/10 py-2">
<button className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-white/10 flex items-center gap-2" onclick="logout()">
<i className="w-4 h-4" data-lucide="log-out"></i> Sign Out
                                    </button>
</div>
</div>
</div>
</div>
</header>

<div className="flex-1 p-4 lg:p-6 overflow-y-auto custom-scrollbar">

<section className="section-content space-y-6" id="dashboardSection">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass rounded-2xl p-5 hover:scale-[1.02] transition-transform">
<div className="flex items-start justify-between">
<div>
<p className="text-slate-400 text-sm">Today's Sales</p>
<p className="text-3xl font-semibold tracking-tight mt-1">₹48,250</p>
<p className="text-green-400 text-sm mt-2 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="trending-up"></i> +12.5%
                                        </p>
</div>
<div className="w-12 h-12 gradient-main rounded-xl flex items-center justify-center">
<i className="w-6 h-6" data-lucide="indian-rupee"></i>
</div>
</div>
</div>
<div className="glass rounded-2xl p-5 hover:scale-[1.02] transition-transform">
<div className="flex items-start justify-between">
<div>
<p className="text-slate-400 text-sm">Total Orders</p>
<p className="text-3xl font-semibold tracking-tight mt-1">127</p>
<p className="text-green-400 text-sm mt-2 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="trending-up"></i> +8.2%
                                        </p>
</div>
<div className="w-12 h-12 gradient-neon rounded-xl flex items-center justify-center">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
</div>
</div>
</div>
<div className="glass rounded-2xl p-5 hover:scale-[1.02] transition-transform">
<div className="flex items-start justify-between">
<div>
<p className="text-slate-400 text-sm">Avg Order Value</p>
<p className="text-3xl font-semibold tracking-tight mt-1">₹380</p>
<p className="text-red-400 text-sm mt-2 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="trending-down"></i> -2.1%
                                        </p>
</div>
<div className="w-12 h-12 gradient-ocean rounded-xl flex items-center justify-center">
<i className="w-6 h-6" data-lucide="calculator"></i>
</div>
</div>
</div>
<div className="glass rounded-2xl p-5 hover:scale-[1.02] transition-transform">
<div className="flex items-start justify-between">
<div>
<p className="text-slate-400 text-sm">Running Tables</p>
<p className="text-3xl font-semibold tracking-tight mt-1">8/15</p>
<p className="text-slate-400 text-sm mt-2">53% occupancy</p>
</div>
<div className="w-12 h-12 gradient-sunset rounded-xl flex items-center justify-center">
<i className="w-6 h-6" data-lucide="armchair"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="glass rounded-2xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold tracking-tight">Sales Trend</h3>
<select className="bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-purple-500">
<option>Last 7 Days</option>
<option>Last 30 Days</option>
<option>This Month</option>
</select>
</div>
<div className="h-64">
<canvas id="salesChart"></canvas>
</div>
</div>

<div className="glass rounded-2xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold tracking-tight">Category Sales</h3>
<button className="text-sm text-purple-400 hover:text-purple-300">View Details</button>
</div>
<div className="h-64">
<canvas id="categoryChart"></canvas>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass rounded-2xl p-5">
<h3 className="font-semibold tracking-tight mb-4">Hourly Sales Heatmap</h3>
<div className="grid grid-cols-12 gap-1" id="heatmapGrid">

</div>
<div className="flex justify-between mt-4 text-xs text-slate-400">
<span>10 AM</span>
<span>2 PM</span>
<span>6 PM</span>
<span>10 PM</span>
</div>
</div>

<div className="glass rounded-2xl p-5">
<h3 className="font-semibold tracking-tight mb-4">Recent Activity</h3>
<div aria-label="Recent activity" className="space-y-4 max-h-64 overflow-y-auto custom-scrollbar" role="feed">
<div className="flex gap-3">
<div className="w-8 h-8 gradient-main rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
</div>
<div>
<p className="text-sm">New order #1247</p>
<p className="text-xs text-slate-400">Table 5 • ₹850</p>
</div>
<span className="text-xs text-slate-500 ml-auto">2m</span>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 gradient-ocean rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div>
<p className="text-sm">Order #1245 served</p>
<p className="text-xs text-slate-400">Table 3</p>
</div>
<span className="text-xs text-slate-500 ml-auto">5m</span>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 gradient-fire rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
</div>
<div>
<p className="text-sm">Low stock alert</p>
<p className="text-xs text-slate-400">Basmati Rice</p>
</div>
<span className="text-xs text-slate-500 ml-auto">12m</span>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 gradient-sunset rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="user-plus"></i>
</div>
<div>
<p className="text-sm">New customer registered</p>
<p className="text-xs text-slate-400">Amit Sharma</p>
</div>
<span className="text-xs text-slate-500 ml-auto">18m</span>
</div>
</div>
</div>
</div>

<div className="glass rounded-2xl p-5">
<h3 className="font-semibold tracking-tight mb-4">Active Alerts</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="flex items-start gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
<div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-red-400" data-lucide="package-x"></i>
</div>
<div>
<p className="text-sm font-medium text-red-400">Low Stock</p>
<p className="text-xs text-slate-400">5 items below reorder level</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
<div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-amber-400" data-lucide="clock"></i>
</div>
<div>
<p className="text-sm font-medium text-amber-400">Pending Approvals</p>
<p className="text-xs text-slate-400">3 items waiting review</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
<div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-purple-400" data-lucide="credit-card"></i>
</div>
<div>
<p className="text-sm font-medium text-purple-400">Subscription</p>
<p className="text-xs text-slate-400">Renews in 12 days</p>
</div>
</div>
</div>
</div>
</section>

<section className="section-content hidden space-y-6" id="ordersSection">

<div className="glass rounded-2xl p-4">
<div className="flex flex-wrap items-center gap-3">
<div className="flex gap-2">
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium">All</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Active</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Completed</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Cancelled</button>
</div>
<div className="ml-auto flex gap-2">
<input className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" type="date"/>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition flex items-center gap-2">
<i className="w-4 h-4" data-lucide="filter"></i> Filter
                                    </button>
</div>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full" role="grid">
<thead className="border-b border-white/10">
<tr className="text-left text-sm text-slate-400">
<th className="px-4 py-3 font-medium">Order ID</th>
<th className="px-4 py-3 font-medium">Table</th>
<th className="px-4 py-3 font-medium">Items</th>
<th className="px-4 py-3 font-medium">Amount</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium">Time</th>
<th className="px-4 py-3 font-medium">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5">
<td className="px-4 py-3 font-medium">#1247</td>
<td className="px-4 py-3">Table 5</td>
<td className="px-4 py-3 text-slate-300">Butter Chicken, Naan x2, Lassi</td>
<td className="px-4 py-3 font-medium">₹850</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">Preparing</span></td>
<td className="px-4 py-3 text-slate-400">2 min ago</td>
<td className="px-4 py-3">
<div className="flex gap-1">
<button aria-label="View order" className="p-1.5 hover:bg-white/10 rounded-lg transition">
<i className="w-4 h-4" data-lucide="eye"></i>
</button>
<button aria-label="Edit order" className="p-1.5 hover:bg-white/10 rounded-lg transition">
<i className="w-4 h-4" data-lucide="edit"></i>
</button>
<button aria-label="Print bill" className="p-1.5 hover:bg-white/10 rounded-lg transition">
<i className="w-4 h-4" data-lucide="printer"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3 font-medium">#1246</td>
<td className="px-4 py-3">Table 3</td>
<td className="px-4 py-3 text-slate-300">Paneer Tikka, Biryani, Raita</td>
<td className="px-4 py-3 font-medium">₹620</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400">Ready</span></td>
<td className="px-4 py-3 text-slate-400">8 min ago</td>
<td className="px-4 py-3">
<div className="flex gap-1">
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="eye"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="edit"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="printer"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3 font-medium">#1245</td>
<td className="px-4 py-3">Table 8</td>
<td className="px-4 py-3 text-slate-300">Dal Makhani, Roti x4, Salad</td>
<td className="px-4 py-3 font-medium">₹450</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Served</span></td>
<td className="px-4 py-3 text-slate-400">15 min ago</td>
<td className="px-4 py-3">
<div className="flex gap-1">
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="eye"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="edit"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="printer"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3 font-medium">#1244</td>
<td className="px-4 py-3">Takeaway</td>
<td className="px-4 py-3 text-slate-300">Chicken Curry, Rice, Papad</td>
<td className="px-4 py-3 font-medium">₹380</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400">Billing</span></td>
<td className="px-4 py-3 text-slate-400">22 min ago</td>
<td className="px-4 py-3">
<div className="flex gap-1">
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="eye"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="edit"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="printer"></i></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="section-content hidden space-y-6" id="tablesSection">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex gap-2">
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium">Main Floor</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Outdoor</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Private Dining</button>
</div>
<button className="px-4 py-2 gradient-ocean rounded-xl text-sm font-medium flex items-center gap-2" onclick="showTableEditor()">
<i className="w-4 h-4" data-lucide="edit-3"></i> Edit Layout
                            </button>
</div>

<div className="glass rounded-xl p-4 flex flex-wrap gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded table-status-free"></div>
<span className="text-sm text-slate-300">Free</span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded table-status-occupied"></div>
<span className="text-sm text-slate-300">Occupied</span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded table-status-reserved"></div>
<span className="text-sm text-slate-300">Reserved</span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded table-status-dirty"></div>
<span className="text-sm text-slate-300">Dirty</span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded table-status-billing"></div>
<span className="text-sm text-slate-300">Billing</span>
</div>
</div>

<div className="glass rounded-2xl p-6">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" id="floorPlanGrid">
<div aria-label="Table 1, Free, 4 seats" className="aspect-square glass rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform border-2 border-green-500/50" onclick="showTableActions(1)" role="button" tabindex="0">
<div className="w-10 h-10 table-status-free rounded-xl flex items-center justify-center mb-2">
<span className="font-semibold">1</span>
</div>
<p className="text-sm font-medium">Table 1</p>
<p className="text-xs text-slate-400">4 seats • Free</p>
</div>
<div className="aspect-square glass rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform border-2 border-amber-500/50" onclick="showTableActions(2)">
<div className="w-10 h-10 table-status-occupied rounded-xl flex items-center justify-center mb-2">
<span className="font-semibold">2</span>
</div>
<p className="text-sm font-medium">Table 2</p>
<p className="text-xs text-slate-400">4 seats • ₹1,250</p>
<p className="text-xs text-amber-400 mt-1">45 min</p>
</div>
<div className="aspect-square glass rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform border-2 border-amber-500/50" onclick="showTableActions(3)">
<div className="w-10 h-10 table-status-occupied rounded-xl flex items-center justify-center mb-2">
<span className="font-semibold">3</span>
</div>
<p className="text-sm font-medium">Table 3</p>
<p className="text-xs text-slate-400">6 seats • ₹620</p>
<p className="text-xs text-amber-400 mt-1">22 min</p>
</div>
<div className="aspect-square glass rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform border-2 border-purple-500/50" onclick="showTableActions(4)">
<div className="w-10 h-10 table-status-reserved rounded-xl flex items-center justify-center mb-2">
<span className="font-semibold">4</span>
</div>
<p className="text-sm font-medium">Table 4</p>
<p className="text-xs text-slate-400">2 seats • Reserved</p>
<p className="text-xs text-purple-400 mt-1">7:00 PM</p>
</div>
<div className="aspect-square glass rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform border-2 border-amber-500/50" onclick="showTableActions(5)">
<div className="w-10 h-10 table-status-occupied rounded-xl flex items-center justify-center mb-2">
<span className="font-semibold">5</span>
</div>
<p className="text-sm font-medium">Table 5</p>
<p className="text-xs text-slate-400">4 seats • ₹850</p>
<p className="text-xs text-amber-400 mt-1">12 min</p>
</div>
<div className="aspect-square glass rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform border-2 border-green-500/50" onclick="showTableActions(6)">
<div className="w-10 h-10 table-status-free rounded-xl flex items-center justify-center mb-2">
<span className="font-semibold">6</span>
</div>
<p className="text-sm font-medium">Table 6</p>
<p className="text-xs text-slate-400">6 seats • Free</p>
</div>
<div className="aspect-square glass rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform border-2 border-red-500/50" onclick="showTableActions(7)">
<div className="w-10 h-10 table-status-dirty rounded-xl flex items-center justify-center mb-2">
<span className="font-semibold">7</span>
</div>
<p className="text-sm font-medium">Table 7</p>
<p className="text-xs text-slate-400">4 seats • Dirty</p>
</div>
<div className="aspect-square glass rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform border-2 border-purple-500/50" onclick="showTableActions(8)">
<div className="w-10 h-10 table-status-billing rounded-xl flex items-center justify-center mb-2">
<span className="font-semibold">8</span>
</div>
<p className="text-sm font-medium">Table 8</p>
<p className="text-xs text-slate-400">4 seats • ₹450</p>
<p className="text-xs text-purple-400 mt-1">Billing</p>
</div>
<div className="aspect-square glass rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform border-2 border-green-500/50" onclick="showTableActions(9)">
<div className="w-10 h-10 table-status-free rounded-xl flex items-center justify-center mb-2">
<span className="font-semibold">9</span>
</div>
<p className="text-sm font-medium">Table 9</p>
<p className="text-xs text-slate-400">8 seats • Free</p>
</div>
<div className="aspect-square glass rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform border-2 border-amber-500/50" onclick="showTableActions(10)">
<div className="w-10 h-10 table-status-occupied rounded-xl flex items-center justify-center mb-2">
<span className="font-semibold">10</span>
</div>
<p className="text-sm font-medium">Table 10</p>
<p className="text-xs text-slate-400">2 seats • ₹320</p>
<p className="text-xs text-amber-400 mt-1">35 min</p>
</div>
</div>
</div>
</section>

<section className="section-content hidden space-y-6" id="menuSection">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex gap-2">
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium">Categories</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Items</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition flex items-center gap-2" onclick="showCSVImport()">
<i className="w-4 h-4" data-lucide="upload"></i> Import CSV
                                </button>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 gradient-cyber rounded-xl text-sm font-medium flex items-center gap-2 text-slate-900" onclick="showQRGenerator()">
<i className="w-4 h-4" data-lucide="qr-code"></i> Generate QR
                                </button>
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium flex items-center gap-2" onclick="showAddItem()">
<i className="w-4 h-4" data-lucide="plus"></i> Add Item
                                </button>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
<div className="glass rounded-2xl p-4 text-center cursor-pointer hover:scale-105 transition-transform border-2 border-purple-500/50" onclick="selectCategory('starters')">
<div className="w-12 h-12 gradient-main rounded-xl flex items-center justify-center mx-auto mb-2">
<span className="text-xl">🥗</span>
</div>
<p className="text-sm font-medium">Starters</p>
<p className="text-xs text-slate-400">18 items</p>
</div>
<div className="glass rounded-2xl p-4 text-center cursor-pointer hover:scale-105 transition-transform">
<div className="w-12 h-12 gradient-neon rounded-xl flex items-center justify-center mx-auto mb-2">
<span className="text-xl">🍛</span>
</div>
<p className="text-sm font-medium">Main Course</p>
<p className="text-xs text-slate-400">24 items</p>
</div>
<div className="glass rounded-2xl p-4 text-center cursor-pointer hover:scale-105 transition-transform">
<div className="w-12 h-12 gradient-ocean rounded-xl flex items-center justify-center mx-auto mb-2">
<span className="text-xl">🍚</span>
</div>
<p className="text-sm font-medium">Rice &amp; Biryani</p>
<p className="text-xs text-slate-400">12 items</p>
</div>
<div className="glass rounded-2xl p-4 text-center cursor-pointer hover:scale-105 transition-transform">
<div className="w-12 h-12 gradient-sunset rounded-xl flex items-center justify-center mx-auto mb-2">
<span className="text-xl">🫓</span>
</div>
<p className="text-sm font-medium">Breads</p>
<p className="text-xs text-slate-400">8 items</p>
</div>
<div className="glass rounded-2xl p-4 text-center cursor-pointer hover:scale-105 transition-transform">
<div className="w-12 h-12 gradient-fire rounded-xl flex items-center justify-center mx-auto mb-2">
<span className="text-xl">🥤</span>
</div>
<p className="text-sm font-medium">Beverages</p>
<p className="text-xs text-slate-400">15 items</p>
</div>
<div className="glass rounded-2xl p-4 text-center cursor-pointer hover:scale-105 transition-transform">
<div className="w-12 h-12 gradient-aurora rounded-xl flex items-center justify-center mx-auto mb-2">
<span className="text-xl">🍨</span>
</div>
<p className="text-sm font-medium">Desserts</p>
<p className="text-xs text-slate-400">10 items</p>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden">
<div className="p-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
<h3 className="font-semibold tracking-tight">Starters (18 items)</h3>
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search"></i>
<input className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500 w-48" placeholder="Search items..." type="text"/>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="border-b border-white/10">
<tr className="text-left text-sm text-slate-400">
<th className="px-4 py-3 font-medium">Item</th>
<th className="px-4 py-3 font-medium">Price</th>
<th className="px-4 py-3 font-medium">Variants</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 gradient-sunset rounded-xl flex items-center justify-center">🍢</div>
<div>
<p className="font-medium">Paneer Tikka</p>
<p className="text-xs text-slate-400">Marinated cottage cheese</p>
</div>
</div>
</td>
<td className="px-4 py-3 font-medium">₹280</td>
<td className="px-4 py-3">Half, Full</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Available</span></td>
<td className="px-4 py-3">
<div className="flex gap-1">
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="edit"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="copy"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition text-red-400"><i className="w-4 h-4" data-lucide="trash-2"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 gradient-fire rounded-xl flex items-center justify-center">🍗</div>
<div>
<p className="font-medium">Chicken 65</p>
<p className="text-xs text-slate-400">Spicy fried chicken</p>
</div>
</div>
</td>
<td className="px-4 py-3 font-medium">₹320</td>
<td className="px-4 py-3">Regular, Boneless</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Available</span></td>
<td className="px-4 py-3">
<div className="flex gap-1">
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="edit"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="copy"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition text-red-400"><i className="w-4 h-4" data-lucide="trash-2"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-white/5 opacity-60">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 gradient-ocean rounded-xl flex items-center justify-center">🍤</div>
<div>
<p className="font-medium">Prawn Koliwada</p>
<p className="text-xs text-slate-400">Crispy fried prawns</p>
</div>
</div>
</td>
<td className="px-4 py-3 font-medium">₹420</td>
<td className="px-4 py-3">—</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-400">Out of Stock</span></td>
<td className="px-4 py-3">
<div className="flex gap-1">
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="edit"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="copy"></i></button>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition text-red-400"><i className="w-4 h-4" data-lucide="trash-2"></i></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="section-content hidden space-y-6" id="kotSection">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex gap-2">
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium">KDS View</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">KOT History</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Routing Rules</button>
</div>
<div className="flex items-center gap-4">
<label className="flex items-center gap-2 cursor-pointer">
<span className="text-sm text-slate-300">Sound</span>
<div aria-checked="true" className="toggle-switch active" onclick="this.classList.toggle('active')" role="switch" tabindex="0"></div>
</label>
<button className="px-4 py-2 gradient-ocean rounded-xl text-sm font-medium flex items-center gap-2" onclick="showPrintPreview()">
<i className="w-4 h-4" data-lucide="printer"></i> Print Preview
                                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass rounded-2xl p-4">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold tracking-tight flex items-center gap-2">
<span className="w-3 h-3 bg-blue-500 rounded-full"></span> New
                                    </h3>
<span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full">3</span>
</div>
<div className="space-y-3">
<div className="glass-dark rounded-xl p-3 kot-new">
<div className="flex justify-between items-start mb-2">
<span className="font-medium">#1247</span>
<span className="text-xs text-slate-400">Table 5</span>
</div>
<div className="space-y-1 text-sm">
<p>1x Butter Chicken</p>
<p>2x Naan</p>
<p>1x Mango Lassi</p>
</div>
<div className="flex justify-between items-center mt-3 pt-2 border-t border-white/10">
<span className="text-xs text-blue-400">2 min ago</span>
<button className="px-3 py-1 text-xs gradient-main rounded-lg">Accept</button>
</div>
</div>
<div className="glass-dark rounded-xl p-3 kot-new">
<div className="flex justify-between items-start mb-2">
<span className="font-medium">#1248</span>
<span className="text-xs text-slate-400">Takeaway</span>
</div>
<div className="space-y-1 text-sm">
<p>2x Veg Biryani</p>
<p>2x Raita</p>
</div>
<div className="flex justify-between items-center mt-3 pt-2 border-t border-white/10">
<span className="text-xs text-blue-400">5 min ago</span>
<button className="px-3 py-1 text-xs gradient-main rounded-lg">Accept</button>
</div>
</div>
</div>
</div>

<div className="glass rounded-2xl p-4">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold tracking-tight flex items-center gap-2">
<span className="w-3 h-3 bg-amber-500 rounded-full"></span> Preparing
                                    </h3>
<span className="px-2 py-0.5 text-xs bg-amber-500/20 text-amber-400 rounded-full">2</span>
</div>
<div className="space-y-3">
<div className="glass-dark rounded-xl p-3 kot-preparing">
<div className="flex justify-between items-start mb-2">
<span className="font-medium">#1245</span>
<span className="text-xs text-slate-400">Table 3</span>
</div>
<div className="space-y-1 text-sm">
<p>1x Paneer Tikka</p>
<p>1x Chicken Biryani</p>
<p>1x Raita</p>
</div>
<div className="flex justify-between items-center mt-3 pt-2 border-t border-white/10">
<span className="text-xs text-amber-400">8 min</span>
<button className="px-3 py-1 text-xs gradient-sunset rounded-lg text-slate-900">Ready</button>
</div>
</div>
</div>
</div>

<div className="glass rounded-2xl p-4">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold tracking-tight flex items-center gap-2">
<span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span> Ready
                                    </h3>
<span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded-full">2</span>
</div>
<div className="space-y-3">
<div className="glass-dark rounded-xl p-3 kot-ready animate-pulse-glow">
<div className="flex justify-between items-start mb-2">
<span className="font-medium">#1244</span>
<span className="text-xs text-slate-400">Table 8</span>
</div>
<div className="space-y-1 text-sm">
<p>1x Dal Makhani</p>
<p>4x Tandoori Roti</p>
<p>1x Salad</p>
</div>
<div className="flex justify-between items-center mt-3 pt-2 border-t border-white/10">
<span className="text-xs text-green-400">Ready!</span>
<button className="px-3 py-1 text-xs bg-green-500 rounded-lg">Served</button>
</div>
</div>
</div>
</div>

<div className="glass rounded-2xl p-4">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold tracking-tight flex items-center gap-2">
<span className="w-3 h-3 bg-slate-500 rounded-full"></span> Served
                                    </h3>
<span className="px-2 py-0.5 text-xs bg-slate-500/20 text-slate-400 rounded-full">5</span>
</div>
<div className="space-y-3 opacity-60">
<div className="glass-dark rounded-xl p-3">
<div className="flex justify-between items-start mb-2">
<span className="font-medium">#1243</span>
<span className="text-xs text-slate-400">Table 2</span>
</div>
<div className="text-sm text-slate-400">3 items • ₹780</div>
<div className="text-xs text-slate-500 mt-2">Served 15 min ago</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-content hidden space-y-6" id="inventorySection">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex gap-2">
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium">Raw Materials</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Recipes/BOM</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Suppliers</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Purchase Orders</button>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 gradient-ocean rounded-xl text-sm font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i> Stock In
                                </button>
<button className="px-4 py-2 gradient-fire rounded-xl text-sm font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="minus"></i> Stock Out
                                </button>
</div>
</div>

<div className="glass rounded-2xl p-4">
<h3 className="font-semibold tracking-tight mb-3 flex items-center gap-2">
<i className="w-5 h-5 text-amber-400" data-lucide="alert-triangle"></i> Low Stock Alerts
                            </h3>
<div className="flex flex-wrap gap-3">
<div className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3">
<span className="text-sm font-medium">Basmati Rice</span>
<span className="text-xs text-red-400">5 kg left</span>
</div>
<div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-3">
<span className="text-sm font-medium">Chicken</span>
<span className="text-xs text-amber-400">3 kg left</span>
</div>
<div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-3">
<span className="text-sm font-medium">Paneer</span>
<span className="text-xs text-amber-400">2 kg left</span>
</div>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full">
<thead className="border-b border-white/10">
<tr className="text-left text-sm text-slate-400">
<th className="px-4 py-3 font-medium">Item</th>
<th className="px-4 py-3 font-medium">Current Stock</th>
<th className="px-4 py-3 font-medium">Unit</th>
<th className="px-4 py-3 font-medium">Reorder Level</th>
<th className="px-4 py-3 font-medium">Supplier</th>
<th className="px-4 py-3 font-medium">Last Updated</th>
<th className="px-4 py-3 font-medium">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 bg-red-500/5">
<td className="px-4 py-3 font-medium">Basmati Rice</td>
<td className="px-4 py-3 text-red-400 font-medium">5 kg</td>
<td className="px-4 py-3">kg</td>
<td className="px-4 py-3">20 kg</td>
<td className="px-4 py-3 text-slate-300">ABC Traders</td>
<td className="px-4 py-3 text-slate-400">2 hours ago</td>
<td className="px-4 py-3">
<button className="px-3 py-1 text-xs gradient-main rounded-lg">Reorder</button>
</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3 font-medium">Cooking Oil</td>
<td className="px-4 py-3 text-green-400 font-medium">15 L</td>
<td className="px-4 py-3">L</td>
<td className="px-4 py-3">10 L</td>
<td className="px-4 py-3 text-slate-300">XYZ Supplies</td>
<td className="px-4 py-3 text-slate-400">1 day ago</td>
<td className="px-4 py-3">
<button className="px-3 py-1 text-xs bg-slate-700 rounded-lg">Edit</button>
</td>
</tr>
<tr className="hover:bg-white/5 bg-amber-500/5">
<td className="px-4 py-3 font-medium">Chicken</td>
<td className="px-4 py-3 text-amber-400 font-medium">3 kg</td>
<td className="px-4 py-3">kg</td>
<td className="px-4 py-3">5 kg</td>
<td className="px-4 py-3 text-slate-300">Fresh Meats Co</td>
<td className="px-4 py-3 text-slate-400">6 hours ago</td>
<td className="px-4 py-3">
<button className="px-3 py-1 text-xs gradient-main rounded-lg">Reorder</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="section-content hidden space-y-6" id="staffSection">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex gap-2">
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium">Staff List</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Roles &amp; Permissions</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Shifts</button>
</div>
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium flex items-center gap-2" onclick="showAddStaff()">
<i className="w-4 h-4" data-lucide="user-plus"></i> Add Staff
                            </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
<div className="glass rounded-2xl p-5">
<div className="flex items-start justify-between mb-4">
<div className="w-14 h-14 gradient-main rounded-xl flex items-center justify-center text-xl font-semibold">RK</div>
<span className="px-2 py-1 text-xs gradient-main rounded-full">Owner Admin</span>
</div>
<h4 className="font-semibold">Rajesh Kumar</h4>
<p className="text-sm text-slate-400">admin@spicegarden.com</p>
<div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
<span className="text-xs text-green-400 flex items-center gap-1">
<span className="w-2 h-2 bg-green-400 rounded-full"></span> Online
                                    </span>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="edit"></i></button>
</div>
</div>
<div className="glass rounded-2xl p-5">
<div className="flex items-start justify-between mb-4">
<div className="w-14 h-14 gradient-ocean rounded-xl flex items-center justify-center text-xl font-semibold">PS</div>
<span className="px-2 py-1 text-xs gradient-ocean rounded-full">Manager</span>
</div>
<h4 className="font-semibold">Priya Sharma</h4>
<p className="text-sm text-slate-400">manager@spicegarden.com</p>
<div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
<span className="text-xs text-green-400 flex items-center gap-1">
<span className="w-2 h-2 bg-green-400 rounded-full"></span> Online
                                    </span>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="edit"></i></button>
</div>
</div>
<div className="glass rounded-2xl p-5">
<div className="flex items-start justify-between mb-4">
<div className="w-14 h-14 gradient-sunset rounded-xl flex items-center justify-center text-xl font-semibold">AV</div>
<span className="px-2 py-1 text-xs gradient-sunset rounded-full text-slate-900">Cashier</span>
</div>
<h4 className="font-semibold">Amit Verma</h4>
<p className="text-sm text-slate-400">cashier@spicegarden.com</p>
<div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
<span className="text-xs text-slate-400 flex items-center gap-1">
<span className="w-2 h-2 bg-slate-400 rounded-full"></span> Offline
                                    </span>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="edit"></i></button>
</div>
</div>
<div className="glass rounded-2xl p-5">
<div className="flex items-start justify-between mb-4">
<div className="w-14 h-14 gradient-fire rounded-xl flex items-center justify-center text-xl font-semibold">SK</div>
<span className="px-2 py-1 text-xs gradient-fire rounded-full">Chef</span>
</div>
<h4 className="font-semibold">Suresh Kumar</h4>
<p className="text-sm text-slate-400">chef@spicegarden.com</p>
<div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
<span className="text-xs text-green-400 flex items-center gap-1">
<span className="w-2 h-2 bg-green-400 rounded-full"></span> Online
                                    </span>
<button className="p-1.5 hover:bg-white/10 rounded-lg transition"><i className="w-4 h-4" data-lucide="edit"></i></button>
</div>
</div>
</div>

<div className="glass rounded-2xl p-5">
<h3 className="font-semibold tracking-tight mb-4">Role Permissions Matrix</h3>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead className="border-b border-white/10">
<tr className="text-left text-slate-400">
<th className="px-3 py-2 font-medium">Permission</th>
<th className="px-3 py-2 font-medium text-center">Owner</th>
<th className="px-3 py-2 font-medium text-center">Manager</th>
<th className="px-3 py-2 font-medium text-center">Cashier</th>
<th className="px-3 py-2 font-medium text-center">Waiter</th>
<th className="px-3 py-2 font-medium text-center">Chef</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr>
<td className="px-3 py-2">View Dashboard</td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" disabled="" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
</tr>
<tr>
<td className="px-3 py-2">Manage Orders</td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" disabled="" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
</tr>
<tr>
<td className="px-3 py-2">Process Refunds</td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" disabled="" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
</tr>
<tr>
<td className="px-3 py-2">Edit Menu</td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" disabled="" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
</tr>
<tr>
<td className="px-3 py-2">Manage Staff</td>
<td className="px-3 py-2 text-center"><input checked="" className="custom-checkbox" disabled="" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-3 py-2 text-center"><input className="custom-checkbox" type="checkbox"/></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="section-content hidden space-y-6" id="reportsSection">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex gap-2 flex-wrap">
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium">Sales Summary</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Category Wise</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Item Wise</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Staff Performance</button>
</div>
<div className="flex gap-2">
<input className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" type="date"/>
<input className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" type="date"/>
<button className="px-4 py-2 gradient-ocean rounded-xl text-sm font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i> Export
                                </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass rounded-2xl p-5">
<p className="text-slate-400 text-sm">Total Revenue</p>
<p className="text-2xl font-semibold tracking-tight mt-1">₹3,45,680</p>
<p className="text-green-400 text-sm mt-2">+15.2% vs last period</p>
</div>
<div className="glass rounded-2xl p-5">
<p className="text-slate-400 text-sm">Total Orders</p>
<p className="text-2xl font-semibold tracking-tight mt-1">1,247</p>
<p className="text-green-400 text-sm mt-2">+8.7% vs last period</p>
</div>
<div className="glass rounded-2xl p-5">
<p className="text-slate-400 text-sm">Avg Order Value</p>
<p className="text-2xl font-semibold tracking-tight mt-1">₹277</p>
<p className="text-red-400 text-sm mt-2">-2.3% vs last period</p>
</div>
<div className="glass rounded-2xl p-5">
<p className="text-slate-400 text-sm">Discounts Given</p>
<p className="text-2xl font-semibold tracking-tight mt-1">₹12,450</p>
<p className="text-slate-400 text-sm mt-2">3.6% of revenue</p>
</div>
</div>

<div className="glass rounded-2xl p-5">
<h3 className="font-semibold tracking-tight mb-4">Revenue Trend (Last 30 Days)</h3>
<div className="h-80">
<canvas id="revenueChart"></canvas>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="glass rounded-2xl p-5">
<h3 className="font-semibold tracking-tight mb-4">Payment Mode Breakdown</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-1">
<span>Cash</span>
<span>₹1,45,230 (42%)</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full gradient-main rounded-full" style={{width: '42%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span>UPI</span>
<span>₹1,12,450 (33%)</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full gradient-ocean rounded-full" style={{width: '33%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span>Card</span>
<span>₹68,000 (20%)</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full gradient-sunset rounded-full" style={{width: '20%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span>Wallet</span>
<span>₹20,000 (5%)</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full gradient-fire rounded-full" style={{width: '5%'}}></div>
</div>
</div>
</div>
</div>
<div className="glass rounded-2xl p-5">
<h3 className="font-semibold tracking-tight mb-4">Top Selling Items</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
<div className="flex items-center gap-3">
<span className="text-lg">🍗</span>
<div>
<p className="font-medium">Butter Chicken</p>
<p className="text-xs text-slate-400">145 orders</p>
</div>
</div>
<p className="font-medium">₹43,500</p>
</div>
<div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
<div className="flex items-center gap-3">
<span className="text-lg">🍚</span>
<div>
<p className="font-medium">Chicken Biryani</p>
<p className="text-xs text-slate-400">132 orders</p>
</div>
</div>
<p className="font-medium">₹39,600</p>
</div>
<div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
<div className="flex items-center gap-3">
<span className="text-lg">🍢</span>
<div>
<p className="font-medium">Paneer Tikka</p>
<p className="text-xs text-slate-400">98 orders</p>
</div>
</div>
<p className="font-medium">₹27,440</p>
</div>
</div>
</div>
</div>
</section>

<section className="section-content hidden space-y-6" id="approvalsSection">
<div className="flex flex-wrap items-center justify-between gap-4">
<h3 className="text-xl font-semibold tracking-tight">Pending Approvals</h3>
<div className="flex gap-2">
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium">All</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Refunds</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Discounts</button>
<button className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm font-medium hover:bg-slate-700/50 transition">Data Requests</button>
</div>
</div>

<div className="space-y-4">
<div className="glass rounded-2xl p-5 border-l-4 border-amber-500">
<div className="flex flex-wrap items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-1 text-xs bg-amber-500/20 text-amber-400 rounded-full">Refund Request</span>
<span className="text-xs text-slate-400">2 hours ago</span>
</div>
<h4 className="font-semibold">Refund for Order #1234</h4>
<p className="text-sm text-slate-400 mt-1">Amount: ₹850 • Reason: Customer dissatisfied with food quality</p>
<p className="text-xs text-slate-500 mt-2">Requested by: Amit Verma (Cashier)</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-xl text-sm font-medium hover:bg-red-500/30 transition" onclick="showApprovalModal('reject')">Reject</button>
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium" onclick="showApprovalModal('approve')">Approve</button>
</div>
</div>
</div>
<div className="glass rounded-2xl p-5 border-l-4 border-purple-500">
<div className="flex flex-wrap items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">Large Discount</span>
<span className="text-xs text-slate-400">4 hours ago</span>
</div>
<h4 className="font-semibold">25% Discount on Order #1189</h4>
<p className="text-sm text-slate-400 mt-1">Amount: ₹620 • Discount: ₹155 • Justification: Regular customer birthday</p>
<p className="text-xs text-slate-500 mt-2">Requested by: Priya Sharma (Manager)</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-xl text-sm font-medium hover:bg-red-500/30 transition">Reject</button>
<button className="px-4 py-2 gradient-main rounded-xl text-sm font-medium">Approve</button>
</div>
</div>
</div>
<div className="glass rounded-2xl p-5 border-l-4 border-red-500">
<div className="flex flex-wrap items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded-full">Data Purge</span>
<span className="text-xs text-slate-400">1 day ago</span>
</div>
<h4 className="font-semibold">Delete Customer Data Request</h4>
<p className="text-sm text-slate-400 mt-1">Customer: john@email.com • GDPR compliance request</p>
<p className="text-xs text-slate-500 mt-2">Requested by: System (Auto-generated)</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-xl text-sm font-medium hover:bg-red-500/30 transition">Reject</button>
<button className="px-4 py-2 gradient-fire rounded-xl text-sm font-medium">Approve with 2FA</button>
</div>
</div>
</div>
</div>
</section>

<section className="section-content hidden space-y-6" id="auditSection">
<div className="flex flex-wrap items-center justify-between gap-4">
<h3 className="text-xl font-semibold tracking-tight">Audit Logs</h3>
<div className="flex gap-2">
<select className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500">
<option>All Actions</option>
<option>Login/Logout</option>
<option>Orders</option>
<option>Settings</option>
<option>Staff</option>
</select>
<input className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" type="date"/>
<button className="px-4 py-2 gradient-ocean rounded-xl text-sm font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i> Export
                                </button>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full">
<thead className="border-b border-white/10">
<tr className="text-left text-sm text-slate-400">
<th className="px-4 py-3 font-medium">Timestamp</th>
<th className="px-4 py-3 font-medium">User</th>
<th className="px-4 py-3 font-medium">Action</th>
<th className="px-4 py-3 font-medium">Resource</th>
<th className="px-4 py-3 font-medium">Details</th>
<th className="px-4 py-3 font-medium">IP</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-sm">
<tr className="hover:bg-white/5">
<td className="px-4 py-3 text-slate-400">2024-01-15 14:32:15</td>
<td className="px-4 py-3">admin@spicegarden.com</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">LOGIN</span></td>
<td className="px-4 py-3">Session</td>
<td className="px-4 py-3 text-slate-300">Successful login with 2FA</td>
<td className="px-4 py-3 text-slate-400">192.168.1.105</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3 text-slate-400">2024-01-15 14:28:42</td>
<td className="px-4 py-3">manager@spicegarden.com</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">UPDATE</span></td>
<td className="px-4 py-3">Order #1234</td>
<td className="px-4 py-3 text-slate-300">Applied 15% discount</td>
<td className="px-4 py-3 text-slate-400">192.168.1.102</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3 text-slate-400">2024-01-15 14:15:30</td>
<td className="px-4 py-3">cashier@spicegarden.com</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400">CREATE</span></td>
<td className="px-4 py-3">Order #1247</td>
<td className="px-4 py-3 text-slate-300">New order created for Table 5</td>
<td className="px-4 py-3 text-slate-400">192.168.1.108</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3 text-slate-400">2024-01-15 13:45:22</td>
<td className="px-4 py-3">admin@spicegarden.com</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400">UPDATE</span></td>
<td className="px-4 py-3">Menu Item</td>
<td className="px-4 py-3 text-slate-300">Updated price for Butter Chicken</td>
<td className="px-4 py-3 text-slate-400">192.168.1.105</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3 text-slate-400">2024-01-15 13:22:18</td>
<td className="px-4 py-3">chef@spicegarden.com</td>
<td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-400">DELETE</span></td>
<td className="px-4 py-3">Stock</td>
<td className="px-4 py-3 text-slate-300">Marked 2kg Chicken as used</td>
<td className="px-4 py-3 text-slate-400">192.168.1.112</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-white/10 flex items-center justify-between">
<p className="text-sm text-slate-400">Showing 1-5 of 1,247 entries</p>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-slate-800/50 rounded-lg text-sm hover:bg-slate-700/50 transition">Previous</button>
<button className="px-3 py-1.5 gradient-main rounded-lg text-sm">1</button>
<button className="px-3 py-1.5 bg-slate-800/50 rounded-lg text-sm hover:bg-slate-700/50 transition">2</button>
<button className="px-3 py-1.5 bg-slate-800/50 rounded-lg text-sm hover:bg-slate-700/50 transition">3</button>
<button className="px-3 py-1.5 bg-slate-800/50 rounded-lg text-sm hover:bg-slate-700/50 transition">Next</button>
</div>
</div>
</div>
</section>

<section className="section-content hidden space-y-6" id="settingsSection">
<h3 className="text-xl font-semibold tracking-tight">Settings</h3>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass rounded-2xl p-4">
<nav className="space-y-1">
<button className="w-full px-4 py-3 text-left rounded-xl bg-white/10 font-medium flex items-center gap-3">
<i className="w-5 h-5" data-lucide="building"></i> Business Profile
                                    </button>
<button className="w-full px-4 py-3 text-left rounded-xl hover:bg-white/5 flex items-center gap-3">
<i className="w-5 h-5" data-lucide="credit-card"></i> Billing &amp; Subscription
                                    </button>
<button className="w-full px-4 py-3 text-left rounded-xl hover:bg-white/5 flex items-center gap-3">
<i className="w-5 h-5" data-lucide="receipt"></i> Tax Settings
                                    </button>
<button className="w-full px-4 py-3 text-left rounded-xl hover:bg-white/5 flex items-center gap-3">
<i className="w-5 h-5" data-lucide="printer"></i> Print Templates
                                    </button>
<button className="w-full px-4 py-3 text-left rounded-xl hover:bg-white/5 flex items-center gap-3">
<i className="w-5 h-5" data-lucide="bell"></i> Notifications
                                    </button>
<button className="w-full px-4 py-3 text-left rounded-xl hover:bg-white/5 flex items-center gap-3">
<i className="w-5 h-5" data-lucide="shield"></i> Security
                                    </button>
</nav>
</div>

<div className="lg:col-span-2 space-y-6">
<div className="glass rounded-2xl p-6">
<h4 className="font-semibold tracking-tight mb-4">Business Profile</h4>
<div className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Restaurant Name</label>
<input className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500" type="text" value="Spice Garden"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">GST Number</label>
<input className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500" type="text" value="29AABCU9603R1ZM"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Address</label>
<textarea className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500" rows="2">123 MG Road, Bengaluru, Karnataka 560001</textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
<input className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500" type="tel" value="+91 98765 43210"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
<input className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500" type="email" value="contact@spicegarden.com"/>
</div>
</div>
<div className="flex justify-end">
<button className="px-6 py-2.5 gradient-main rounded-xl font-medium">Save Changes</button>
</div>
</div>
</div>
<div className="glass rounded-2xl p-6">
<h4 className="font-semibold tracking-tight mb-4">Security Settings</h4>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
<div>
<p className="font-medium">Two-Factor Authentication</p>
<p className="text-sm text-slate-400">Add an extra layer of security</p>
</div>
<div className="toggle-switch active" onclick="this.classList.toggle('active')"></div>
</div>
<div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
<div>
<p className="font-medium">Session Timeout</p>
<p className="text-sm text-slate-400">Auto logout after inactivity</p>
</div>
<select className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-purple-500">
<option>15 minutes</option>
<option selected="">30 minutes</option>
<option>1 hour</option>
<option>Never</option>
</select>
</div>
<div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
<div>
<p className="font-medium">Login Notifications</p>
<p className="text-sm text-slate-400">Get notified of new logins</p>
</div>
<div className="toggle-switch active" onclick="this.classList.toggle('active')"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-content hidden space-y-6" id="supportSection">
<h3 className="text-xl font-semibold tracking-tight">Help &amp; Support</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer">
<div className="w-14 h-14 gradient-main rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-7 h-7" data-lucide="book-open"></i>
</div>
<h4 className="font-semibold mb-2">Documentation</h4>
<p className="text-sm text-slate-400">Browse our comprehensive guides</p>
</div>
<div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer">
<div className="w-14 h-14 gradient-ocean rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-7 h-7" data-lucide="message-circle"></i>
</div>
<h4 className="font-semibold mb-2">Live Chat</h4>
<p className="text-sm text-slate-400">Chat with our support team</p>
</div>
<div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer">
<div className="w-14 h-14 gradient-sunset rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-7 h-7" data-lucide="ticket"></i>
</div>
<h4 className="font-semibold mb-2">Submit Ticket</h4>
<p className="text-sm text-slate-400">Create a support request</p>
</div>
</div>
<div className="glass rounded-2xl p-6">
<h4 className="font-semibold tracking-tight mb-4">Frequently Asked Questions</h4>
<div className="space-y-3">
<details className="group bg-slate-800/30 rounded-xl">
<summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium">
                                        How do I set up table reservations?
                                        <i className="w-5 h-5 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-3 text-sm text-slate-400">
                                        Navigate to Tables &amp; Floor section, click on any table, and select "Reserve". You can set the time, customer name, and party size.
                                    </div>
</details>
<details className="group bg-slate-800/30 rounded-xl">
<summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium">
                                        How do I generate QR codes for tables?
                                        <i className="w-5 h-5 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-3 text-sm text-slate-400">
                                        Go to Menu &amp; QR section, click "Generate QR" button. You can create unique QR codes for each table that link to your digital menu.
                                    </div>
</details>
<details className="group bg-slate-800/30 rounded-xl">
<summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium">
                                        How do I process a refund?
                                        <i className="w-5 h-5 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-3 text-sm text-slate-400">
                                        Find the order in the Orders section, click the eye icon to view details, and select "Request Refund". Manager or Owner approval is required for refunds above ₹500.
                                    </div>
</details>
</div>
</div>
</section>

<section className="section-content hidden" id="customersSection">
<div className="glass rounded-2xl p-8 text-center">
<div className="w-16 h-16 gradient-ocean rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8" data-lucide="contact"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Customer Management</h3>
<p className="text-slate-400">Manage your customer database, loyalty programs, and CRM features.</p>
</div>
</section>
<section className="section-content hidden" id="offersSection">
<div className="glass rounded-2xl p-8 text-center">
<div className="w-16 h-16 gradient-sunset rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8" data-lucide="ticket-percent"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Offers &amp; Loyalty</h3>
<p className="text-slate-400">Create and manage discounts, coupons, and customer loyalty programs.</p>
</div>
</section>
<section className="section-content hidden" id="billingSection">
<div className="glass rounded-2xl p-8 text-center">
<div className="w-16 h-16 gradient-fire rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8" data-lucide="receipt"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Billing &amp; POS</h3>
<p className="text-slate-400">Process payments, generate invoices, and manage your point of sale.</p>
</div>
</section>
<section className="section-content hidden" id="integrationsSection">
<div className="glass rounded-2xl p-8 text-center">
<div className="w-16 h-16 gradient-aurora rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8" data-lucide="plug"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Integrations</h3>
<p className="text-slate-400">Connect with Swiggy, Zomato, payment gateways, and other third-party services.</p>
</div>
</section>
</div>
</main>
</div>
</div>

<div className="fixed bottom-4 right-4 glass rounded-xl p-4 flex items-center gap-3 z-50 hidden transform translate-y-4 opacity-0 transition-all" id="toast">
<div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i>
</div>
<span id="toastMessage">Action completed successfully</span>
</div>


    </>
  );
}
