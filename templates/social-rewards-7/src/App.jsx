import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
blue: '#1e293b', // Based on logo text
accent: '#3b82f6',
orange: '#f97316'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Navigation Configuration ---
        const userMenu = [
            { id: 'user-dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
            { id: 'user-packages', label: 'Packages', icon: 'package' },
            { id: 'user-watch', label: 'Watch Links', icon: 'play-square' },
            { id: 'user-referrals', label: 'My Referrals', icon: 'network' },
            { id: 'user-withdraw', label: 'Withdraw', icon: 'arrow-up-right' },
            { divider: true },
            { id: 'admin-toggle', label: 'Admin Panel', icon: 'shield', role: 'admin' }
        ];

        const adminMenu = [
            { id: 'admin-dashboard', label: 'Overview', icon: 'bar-chart-2' },
            { id: 'admin-users', label: 'User Mgmt', icon: 'users' },
            { id: 'admin-deposits', label: 'Deposits', icon: 'arrow-down-to-line' },
            { id: 'admin-withdraws', label: 'Withdrawals', icon: 'arrow-up-from-line' },
            { id: 'admin-packages', label: 'Packages Mgmt', icon: 'package-plus' },
            { id: 'admin-mlm', label: 'MLM Settings', icon: 'git-merge' },
            { divider: true },
            { id: 'user-toggle', label: 'Back to App', icon: 'arrow-left' }
        ];

        let currentRole = 'user'; // 'user' or 'admin'

        // --- Core Functions ---
        
        function renderSidebar() {
            const menuContainer = document.getElementById('sidebar-menu');
            menuContainer.innerHTML = '';
            const items = currentRole === 'user' ? userMenu : adminMenu;

            items.forEach(item => {
                if (item.divider) {
                    const div = document.createElement('div');
                    div.className = 'h-px bg-slate-200 my-2 mx-2';
                    menuContainer.appendChild(div);
                    return;
                }

                const btn = document.createElement('button');
                btn.className = `w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-left menu-item-${item.id}`;
                
                // Active state logic happens in navigate()
                btn.classList.add('text-slate-600', 'hover:bg-slate-100', 'hover:text-slate-900');
                
                if(item.id === 'admin-toggle' || item.id === 'user-toggle') {
                     btn.onclick = () => switchRole(item.id === 'admin-toggle' ? 'admin' : 'user');
                } else {
                     btn.onclick = () => { navigate(item.id); toggleSidebar(false); };
                }

                btn.innerHTML = `<i data-lucide="${item.icon}" stroke-width="1.5" class="w-4 h-4"></i> ${item.label}`;
                menuContainer.appendChild(btn);
            });
            lucide.createIcons();
        }

        function switchRole(role) {
            currentRole = role;
            renderSidebar();
            navigate(role === 'admin' ? 'admin-dashboard' : 'user-dashboard');
        }

        function navigate(viewId) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
            
            // Show target
            const target = document.getElementById(`view-${viewId}`);
            if(target) {
                target.classList.add('active');
            } else {
                // Fallback for unimplemented views in this prototype
                alert(`The view '${viewId}' is under construction in this prototype.`);
                return;
            }

            // Layout switching
            const isPublic = viewId.startsWith('landing') || viewId.startsWith('auth');
            document.getElementById('public-nav').classList.toggle('hidden', !isPublic);
            document.getElementById('app-layout').classList.toggle('hidden', isPublic);

            // Update title
            const titles = {
                'user-dashboard': 'Dashboard',
                'user-packages': 'Membership Packages',
                'user-watch': 'Daily Tasks',
                'user-referrals': 'Network & Referrals',
                'user-withdraw': 'Withdrawal',
                'admin-dashboard': 'Admin Dashboard'
            };
            if(titles[viewId]) document.getElementById('page-title').innerText = titles[viewId];

            // Update sidebar active states
            if(!isPublic) {
                document.querySelectorAll('#sidebar-menu button').forEach(btn => {
                    btn.classList.remove('bg-brand-blue/5', 'text-brand-accent');
                    btn.classList.add('text-slate-600');
                    if(btn.classList.contains(`menu-item-${viewId}`)) {
                        btn.classList.add('bg-brand-blue/5', 'text-brand-accent');
                        btn.classList.remove('text-slate-600');
                    }
                });
            }

            // Re-init icons just in case new content appeared
            lucide.createIcons();
            
            // Scroll top
            document.getElementById('main-viewport')?.scrollTo(0,0);
            window.scrollTo(0,0);
        }

        function toggleSidebar(forceState) {
            const sidebar = document.getElementById('app-sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            const isOpen = forceState !== undefined ? forceState : sidebar.classList.contains('open');
            
            if (!isOpen) {
                sidebar.classList.add('open');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.remove('open');
                overlay.classList.add('hidden');
            }
        }

        // --- Interaction Simulations ---

        let isSignup = false;
        function toggleAuthMode() {
            isSignup = !isSignup;
            document.getElementById('auth-title').innerText = isSignup ? 'Create Account' : 'Welcome Back';
            document.getElementById('auth-subtitle').innerText = isSignup ? 'Sign up to start earning today' : 'Enter your details to sign in';
            document.getElementById('auth-signup-fields').classList.toggle('hidden', !isSignup);
            document.getElementById('auth-submit-btn').innerText = isSignup ? 'Sign Up' : 'Sign In';
            document.getElementById('auth-switch-text').innerText = isSignup ? 'Already have an account?' : 'Don\'t have an account?';
            document.getElementById('auth-switch-btn').innerText = isSignup ? 'Sign in' : 'Sign up';
            document.getElementById('forgot-pass-link').classList.toggle('hidden', isSignup);
        }

        function simulateAuth() {
            const btn = document.getElementById('auth-submit-btn');
            const originalText = btn.innerText;
            btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin mx-auto"></i>`;
            lucide.createIcons();
            
            setTimeout(() => {
                btn.innerText = originalText;
                navigate('user-dashboard');
            }, 1000);
        }

        function logout() {
            navigate('landing');
        }

        function copyToClipboard() {
            alert('Referral link copied to clipboard!');
        }

        function simulateWatch(btn) {
            btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Watching...`;
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            lucide.createIcons();
            
            setTimeout(() => {
                const card = btn.closest('.bg-white');
                card.classList.replace('bg-white', 'bg-slate-50');
                card.classList.add('opacity-70');
                card.querySelector('.relative').classList.add('grayscale');
                
                btn.disabled = true;
                btn.classList.replace('bg-brand-blue', 'bg-slate-200');
                btn.classList.replace('text-white', 'text-slate-500');
                btn.classList.replace('hover:bg-slate-800', 'hover:bg-slate-200');
                btn.innerHTML = `<i data-lucide="check-circle-2" stroke-width="2" class="w-4 h-4"></i> Done`;
                lucide.createIcons();
                
                // In a real app, update progress bar here
            }, 1500);
        }

        // --- Init ---
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            renderSidebar();
            navigate('landing');
            
            // Listen for specific initial routes (e.g. from buttons on landing)
            if(window.location.hash) {
                const route = window.location.hash.substring(1);
                if(route === 'signup') {
                    navigate('auth-login');
                    toggleAuthMode();
                }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 transition-all duration-300" id="public-nav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigate('landing')">

<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="w-full h-full text-brand-accent absolute rotate-45" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<rect height="8" rx="4" width="14" x="5" y="8"></rect>
</svg>
<svg className="w-full h-full text-brand-orange absolute -rotate-45 opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<rect height="8" rx="4" width="14" x="5" y="8"></rect>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight text-brand-blue">clipay</span>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="navigate('auth-login')">Sign In</button>
<button className="text-sm font-medium bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-sm" onclick="navigate('auth-signup')">Get Started</button>
</div>
</div>
</div>
</nav>

<div className="flex h-full w-full hidden pt-0" id="app-layout">

<div className="fixed inset-0 bg-slate-900/50 z-40 hidden md:hidden" id="sidebar-overlay" onclick="toggleSidebar()"></div>

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full fixed md:relative z-50" id="app-sidebar">
<div className="h-16 flex items-center px-6 border-b border-slate-200 gap-2 cursor-pointer" onclick="navigate('user-dashboard')">
<div className="relative w-6 h-6 flex items-center justify-center">
<svg className="w-full h-full text-brand-accent absolute rotate-45" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<rect height="8" rx="4" width="14" x="5" y="8"></rect>
</svg>
<svg className="w-full h-full text-brand-orange absolute -rotate-45 opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<rect height="8" rx="4" width="14" x="5" y="8"></rect>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight text-brand-blue">clipay</span>
</div>
<div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1" id="sidebar-menu">

</div>
<div className="p-4 border-t border-slate-200">
<button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-red-600 transition-colors group" onclick="logout()">
<i className="w-4 h-4 text-slate-400 group-hover:text-red-500" data-lucide="log-out" strokeWidth="1.5"></i>
                    Logout
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 z-30">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-900" onclick="toggleSidebar()">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<h1 className="text-lg font-semibold tracking-tight text-slate-900 hidden sm:block" id="page-title">Dashboard</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 shadow-sm">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-slate-700">Premium Active</span>
</div>
<button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-orange rounded-full border border-white"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-accent to-indigo-500 text-white flex items-center justify-center text-sm font-semibold shadow-sm cursor-pointer" onclick="navigate('user-profile')">
                        JD
                    </div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative" id="main-viewport">


<div className="view-section pt-16 max-w-7xl mx-auto pb-24" id="view-landing">
<div className="text-center max-w-3xl mx-auto mb-16 px-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-accent text-xs font-medium mb-6">
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i>
                            New Era of Social Rewards
                        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                            Earn Money Watching <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-indigo-600">Social Media</span> Videos
                        </h1>
<p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
                            Turn your screen time into real earnings. Purchase a package, watch daily links from top platforms, and build your network for unlimited commissions.
                        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 bg-brand-blue text-white rounded-xl font-medium shadow-sm hover:bg-slate-800 transition-all hover:-translate-y-0.5" onclick="navigate('auth-signup')">Start Earning Now</button>
<button className="w-full sm:w-auto px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium shadow-sm hover:bg-slate-50 transition-all" onclick="navigate('user-packages')">View Packages</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-24 px-4">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
<div className="w-12 h-12 bg-blue-50 text-brand-accent rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6" data-lucide="package" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">1. Choose a Package</h3>
<p className="text-sm text-slate-500">Select an earning plan that fits your goals to unlock daily viewing quotas.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
<div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">2. Watch &amp; Earn</h3>
<p className="text-sm text-slate-500">Complete your daily quota of watching videos and interacting with social links.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
<div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">3. Build Network</h3>
<p className="text-sm text-slate-500">Invite friends via our Matrix MLM system and earn commissions on their activity.</p>
</div>
</div>
</div>

<div className="view-section w-full max-w-md mx-auto mt-10 md:mt-20" id="view-auth">
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900" id="auth-title">Welcome Back</h2>
<p className="text-sm text-slate-500 mt-1" id="auth-subtitle">Enter your details to sign in to your account</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); simulateAuth();">
<div className="hidden space-y-4" id="auth-signup-fields">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent block p-2.5 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Referral ID</label>
<input className="w-full bg-slate-100 border border-slate-200 text-slate-500 text-base rounded-lg block p-2.5 cursor-not-allowed" disabled="" type="text" value="CLIPAY-AURA-992"/>
<p className="text-xs text-slate-400 mt-1">Registration requires a valid referral link.</p>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent block p-2.5 transition-colors" placeholder="name@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent block p-2.5 transition-colors" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center justify-between pt-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-slate-300 bg-white group-hover:border-brand-accent transition-colors">
<input className="peer sr-only" type="checkbox"/>
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 absolute pointer-events-none transition-opacity" data-lucide="check" strokeWidth="2.5"></i>
<div className="absolute inset-0 rounded bg-brand-accent opacity-0 peer-checked:opacity-100 transition-opacity -z-10"></div>
</div>
<span className="text-sm text-slate-600 select-none">Remember me</span>
</label>
<a className="text-sm font-medium text-brand-accent hover:text-blue-700" href="#" id="forgot-pass-link">Forgot password?</a>
</div>
<button className="w-full bg-brand-blue text-white font-medium rounded-lg text-base px-5 py-2.5 text-center hover:bg-slate-800 transition-colors shadow-sm mt-4" id="auth-submit-btn" type="submit">Sign In</button>
</form>
<div className="mt-6 text-center text-sm text-slate-500">
<span id="auth-switch-text">Don't have an account?</span>
<button className="font-medium text-brand-accent hover:text-blue-700 ml-1" id="auth-switch-btn" onclick="toggleAuthMode()">Sign up</button>
</div>
</div>
</div>

<div className="view-section max-w-6xl mx-auto space-y-6" id="view-user-dashboard">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors"></div>
<div className="flex justify-between items-start relative">
<div>
<p className="text-sm font-medium text-slate-500">Current Balance</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mt-1">$450.50</h3>
</div>
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<i className="w-5 h-5" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-4 flex items-center text-xs font-medium text-emerald-600 relative">
<i className="w-3.5 h-3.5 mr-1" data-lucide="trending-up" strokeWidth="2"></i>
                                +$12.50 today
                            </div>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-slate-500">Total Earnings</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mt-1">$1,280.00</h3>
</div>
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<i className="w-5 h-5" data-lucide="dollar-sign" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-4 text-xs text-slate-500">Lifetime platform earnings</div>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-slate-500">Total Withdrawn</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mt-1">$800.00</h3>
</div>
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-4 text-xs text-slate-500">Last withdrawal: 2 days ago</div>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-slate-500">Network Team</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mt-1">24</h3>
</div>
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-4 flex items-center text-xs font-medium text-emerald-600">
<i className="w-3.5 h-3.5 mr-1" data-lucide="user-plus" strokeWidth="2"></i>
                                +3 this week
                            </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Today's Activity</h3>
<button className="text-sm font-medium text-brand-accent hover:text-blue-700 flex items-center gap-1" onclick="navigate('user-watch')">
                                    Watch Links <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-col sm:flex-row items-center gap-6">
<div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-brand-accent transition-all duration-1000 ease-out" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="60, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute flex flex-col items-center justify-center">
<span className="text-xl font-semibold text-slate-900">6<span className="text-sm text-slate-400">/10</span></span>
</div>
</div>
<div className="flex-1 text-center sm:text-left">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-medium border border-amber-200/50 mb-2">
<i className="w-3.5 h-3.5" data-lucide="star" strokeWidth="2"></i> Premium Package
                                    </div>
<h4 className="text-base font-medium text-slate-900 mb-1">You're almost there!</h4>
<p className="text-sm text-slate-500 mb-4">Watch 4 more videos today to earn your full daily quota of $5.00.</p>
<button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm w-full sm:w-auto" onclick="navigate('user-watch')">
                                        Continue Watching
                                    </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-4">Quick Actions</h3>
<div className="grid grid-cols-2 gap-3 flex-1">
<button className="flex flex-col items-center justify-center gap-2 bg-slate-50 border border-slate-100 rounded-xl p-4 hover:bg-slate-100 hover:border-slate-200 transition-all text-slate-600 hover:text-slate-900" onclick="navigate('user-deposit')">
<i className="w-6 h-6" data-lucide="arrow-down-to-line" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Deposit</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 bg-slate-50 border border-slate-100 rounded-xl p-4 hover:bg-slate-100 hover:border-slate-200 transition-all text-slate-600 hover:text-slate-900" onclick="navigate('user-withdraw')">
<i className="w-6 h-6" data-lucide="arrow-up-from-line" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Withdraw</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 bg-slate-50 border border-slate-100 rounded-xl p-4 hover:bg-slate-100 hover:border-slate-200 transition-all text-slate-600 hover:text-slate-900" onclick="navigate('user-referrals')">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Team</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 bg-slate-50 border border-slate-100 rounded-xl p-4 hover:bg-slate-100 hover:border-slate-200 transition-all text-slate-600 hover:text-slate-900" onclick="navigate('user-packages')">
<i className="w-6 h-6" data-lucide="package" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Upgrade</span>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
<h3 className="text-base font-semibold tracking-tight text-slate-900">Recent Activity</h3>
<button className="text-sm text-slate-500 hover:text-slate-900 font-medium">View All</button>
</div>
<div className="divide-y divide-slate-100">

<div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Watched YouTube Ad</p>
<p className="text-xs text-slate-500">Today, 10:23 AM</p>
</div>
</div>
<span className="text-sm font-medium text-emerald-600">+$0.50</span>
</div>

<div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 text-brand-accent flex items-center justify-center">
<i className="w-5 h-5" data-lucide="network" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Level 1 Commission</p>
<p className="text-xs text-slate-500">Yesterday, 14:45 PM</p>
</div>
</div>
<span className="text-sm font-medium text-emerald-600">+$2.50</span>
</div>

<div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Withdrawal Request</p>
<p className="text-xs text-slate-500">Oct 24, 2023</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-slate-900">-$50.00</p>
<p className="text-xs text-amber-500 font-medium">Pending</p>
</div>
</div>
</div>
</div>
</div>

<div className="view-section max-w-5xl mx-auto space-y-8" id="view-user-packages">
<div className="text-center max-w-2xl mx-auto mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Choose Your Earning Power</h2>
<p className="text-base text-slate-500">Upgrade your package to unlock more daily ads and higher ROI. Your active package determines your earning potential.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col hover:border-slate-300 transition-colors">
<h3 className="text-lg font-medium text-slate-900 mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$20</span>
</div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> 4 Ads per day</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> $0.25 per ad</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> 30 Days duration</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Total ROI: $30</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors">Purchase</button>
</div>

<div className="bg-brand-blue rounded-2xl border border-brand-blue shadow-md p-6 flex flex-col relative transform md:-translate-y-2">
<div className="absolute top-0 right-6 transform -translate-y-1/2">
<span className="bg-brand-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Current Plan</span>
</div>
<h3 className="text-lg font-medium text-slate-300 mb-2">Premium</h3>
<div className="flex items-baseline gap-1 mb-6 text-white">
<span className="text-3xl font-semibold tracking-tight">$100</span>
</div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-brand-accent" data-lucide="check"></i> 10 Ads per day</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-brand-accent" data-lucide="check"></i> $0.50 per ad</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-brand-accent" data-lucide="check"></i> 60 Days duration</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-brand-accent" data-lucide="check"></i> Total ROI: $300</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-brand-accent" data-lucide="check"></i> Level 3 Matrix Unlock</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white/10 text-white font-medium cursor-default" disabled="">Active (45 days left)</button>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col hover:border-slate-300 transition-colors">
<h3 className="text-lg font-medium text-slate-900 mb-2">Elite</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$500</span>
</div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> 20 Ads per day</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> $1.00 per ad</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> 90 Days duration</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Total ROI: $1800</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Unlimited Matrix Levels</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors">Purchase</button>
</div>
</div>
</div>

<div className="view-section max-w-5xl mx-auto space-y-6" id="view-user-watch">

<div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Daily Quota</h3>
<p className="text-sm text-slate-500">Complete tasks to earn your daily reward.</p>
</div>
<div className="w-full sm:w-64">
<div className="flex justify-between text-sm font-medium mb-1.5">
<span className="text-brand-accent">6 Watched</span>
<span className="text-slate-500">10 Total</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-brand-accent h-2.5 rounded-full transition-all duration-500" style={{width: '60%'}}></div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
<div className="h-40 bg-slate-100 relative flex items-center justify-center">
<div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: 'url(\'data:image/svg+xml', svg xmlns=\'http: '//www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'&gt'}}></div>
<i className="w-12 h-12 text-red-500 relative z-10 group-hover:scale-110 transition-transform" data-lucide="youtube" strokeWidth="1.5"></i>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-slate-900 line-clamp-1">Product Review Video</h4>
<span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded border border-emerald-200 whitespace-nowrap">+$0.50</span>
</div>
<p className="text-xs text-slate-500 mb-4">Watch for 30 seconds</p>
<button className="w-full py-2 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" onclick="simulateWatch(this)">
<i className="w-4 h-4" data-lucide="play" strokeWidth="2"></i> Watch &amp; Earn
                                </button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
<div className="h-40 bg-slate-100 relative flex items-center justify-center">
<i className="w-12 h-12 text-blue-600 relative z-10 group-hover:scale-110 transition-transform" data-lucide="facebook" strokeWidth="1.5"></i>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-slate-900 line-clamp-1">Sponsor Advertisement</h4>
<span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded border border-emerald-200 whitespace-nowrap">+$0.50</span>
</div>
<p className="text-xs text-slate-500 mb-4">Interact with link</p>
<button className="w-full py-2 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" onclick="simulateWatch(this)">
<i className="w-4 h-4" data-lucide="play" strokeWidth="2"></i> Watch &amp; Earn
                                </button>
</div>
</div>

<div className="bg-slate-50 rounded-xl border border-slate-200 shadow-sm overflow-hidden opacity-70">
<div className="h-40 bg-slate-200 relative flex items-center justify-center grayscale">
<i className="w-12 h-12 text-pink-600 relative z-10" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-slate-900 line-clamp-1">Reel Promotion</h4>
<span className="text-slate-400 text-xs font-medium">Earned</span>
</div>
<p className="text-xs text-slate-500 mb-4">Completed</p>
<button className="w-full py-2 bg-slate-200 text-slate-500 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="check-circle-2" strokeWidth="2"></i> Done
                                </button>
</div>
</div>
</div>
</div>

<div className="view-section max-w-6xl mx-auto space-y-6" id="view-user-referrals">

<div className="bg-brand-blue rounded-2xl p-6 text-white relative overflow-hidden shadow-md">
<div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Grow Your Network</h3>
<p className="text-slate-300 text-sm mb-6 max-w-md">Earn up to 15% commission on your direct referrals' earnings, plus level commissions down your matrix.</p>
<div className="flex flex-col sm:flex-row gap-3 max-w-xl">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-slate-400" data-lucide="link" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-white/10 border border-white/20 text-white text-sm rounded-lg block pl-10 p-2.5 focus:outline-none selection:bg-white/30" readonly="" type="text" value="https://clipay.net/ref/JD-99201"/>
</div>
<button className="bg-brand-accent hover:bg-blue-600 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-center gap-2 shadow-sm" onclick="copyToClipboard()">
<i className="w-4 h-4" data-lucide="copy" strokeWidth="1.5"></i> Copy Link
                            </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Total Network</p>
<h4 className="text-2xl font-semibold text-slate-900">24</h4>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Lvl 1 (Direct)</p>
<h4 className="text-2xl font-semibold text-slate-900">8</h4>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Lvl 2 (Indirect)</p>
<h4 className="text-2xl font-semibold text-slate-900">12</h4>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Lvl 3</p>
<h4 className="text-2xl font-semibold text-slate-900">4</h4>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center">
<h3 className="text-base font-semibold tracking-tight text-slate-900">Direct Referrals</h3>

<div className="relative group">
<button className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-100">
                                    Filter by Level <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="absolute right-0 mt-1 w-40 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 py-1">
<a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#">Level 1</a>
<a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#">Level 2</a>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-600">
<thead className="bg-slate-50 text-xs uppercase text-slate-500 font-medium border-b border-slate-200">
<tr>
<th className="px-6 py-3">User</th>
<th className="px-6 py-3">Joined Date</th>
<th className="px-6 py-3">Package</th>
<th className="px-6 py-3 text-right">Commission Earned</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50">
<td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">AS</div>
                                            Ali Shah
                                        </td>
<td className="px-6 py-4">Oct 20, 2023</td>
<td className="px-6 py-4"><span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">Premium</span></td>
<td className="px-6 py-4 text-right font-medium text-emerald-600">$15.00</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">MK</div>
                                            Maria Khan
                                        </td>
<td className="px-6 py-4">Oct 22, 2023</td>
<td className="px-6 py-4"><span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Starter</span></td>
<td className="px-6 py-4 text-right font-medium text-emerald-600">$3.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section max-w-3xl mx-auto" id="view-user-withdraw">
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Withdraw Funds</h2>
<p className="text-sm text-slate-500 mt-1">Transfer your earnings to your personal wallet.</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-slate-500">Available Balance</p>
<p className="text-2xl font-semibold text-brand-blue">$450.50</p>
</div>
</div>

<div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 mb-6">
<i className="w-5 h-5 text-brand-accent shrink-0" data-lucide="info" strokeWidth="1.5"></i>
<div className="text-sm text-blue-900">
<p className="font-medium mb-1">Withdrawal Requirements:</p>
<ul className="list-disc pl-4 space-y-0.5 text-blue-800/80">
<li>Minimum withdrawal amount is $10.00.</li>
<li>You need at least 2 active direct referrals. <span className="text-emerald-600 font-medium">(You have 8 - Eligible <i className="inline w-3 h-3" data-lucide="check"></i>)</span></li>
</ul>
</div>
</div>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Select Method</label>

<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent block p-2.5 appearance-none cursor-pointer">
<option value="usdt_trc20">USDT (TRC20)</option>
<option value="usdt_bep20">USDT (BEP20)</option>
<option value="jazzcash">JazzCash</option>
</select>
<i className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Wallet Address / Account Number</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent block p-2.5" placeholder="Enter details" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Amount (USD)</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-slate-400" data-lucide="dollar-sign" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-lg focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent block pl-9 p-2.5" max="450.50" min="10" placeholder="0.00" type="number"/>
<button className="absolute inset-y-1 right-1 px-3 text-xs font-medium bg-white border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50" type="button">Max</button>
</div>
</div>
<button className="w-full bg-brand-blue text-white font-medium rounded-lg text-base px-5 py-3 text-center hover:bg-slate-800 transition-colors shadow-sm mt-2" onclick="alert('Withdrawal request submitted successfully!')" type="button">Submit Request</button>
</form>
</div>
</div>

<div className="view-section max-w-7xl mx-auto space-y-6" id="view-admin-dashboard">
<div className="bg-indigo-900 rounded-2xl p-6 text-white flex justify-between items-center shadow-md">
<div>
<h2 className="text-2xl font-semibold tracking-tight">Admin Control Panel</h2>
<p className="text-indigo-200 text-sm mt-1">Platform overview and management.</p>
</div>
<div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
<p className="text-xs text-indigo-200 uppercase tracking-wider mb-0.5">Total System Balance</p>
<p className="text-xl font-semibold">$124,500.00</p>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<p className="text-sm font-medium text-slate-500 mb-1">Total Users</p>
<h3 className="text-2xl font-semibold text-slate-900">1,245</h3>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<p className="text-sm font-medium text-slate-500 mb-1">Pending Withdrawals</p>
<h3 className="text-2xl font-semibold text-amber-600">42</h3>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<p className="text-sm font-medium text-slate-500 mb-1">Active Packages</p>
<h3 className="text-2xl font-semibold text-slate-900">856</h3>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<p className="text-sm font-medium text-slate-500 mb-1">Total Paid Out</p>
<h3 className="text-2xl font-semibold text-emerald-600">$45K</h3>
</div>
</div>
<div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm text-center">
<i className="w-16 h-16 text-slate-300 mx-auto mb-4" data-lucide="settings-2" strokeWidth="1"></i>
<h3 className="text-lg font-medium text-slate-900 mb-2">Admin modules are accessible via the sidebar.</h3>
<p className="text-sm text-slate-500">Manage users, deposits, withdrawals, MLM settings, and packages from specific dedicated views.</p>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
