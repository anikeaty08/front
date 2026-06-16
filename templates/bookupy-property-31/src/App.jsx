import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Functions
        function openMobileMenu() {
            document.getElementById('sidebar').classList.remove('-translate-x-full');
            document.getElementById('mobile-overlay').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMobileMenu() {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('mobile-overlay').classList.add('hidden');
            document.body.style.overflow = '';
        }
        
        // Mobile Search Toggle
        function toggleMobileSearch() {
            const searchBar = document.getElementById('mobile-search');
            searchBar.classList.toggle('hidden');
        }
        
        // User Menu Toggle
        function toggleUserMenu() {
            const userMenu = document.getElementById('user-menu');
            userMenu.classList.toggle('hidden');
        }
        
        // Navigation Click Handler
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active state from all links
                document.querySelectorAll('.nav-link').forEach(l => {
                    l.classList.remove('bg-indigo-50', 'text-indigo-700', 'font-medium', 'active');
                    l.classList.add('text-neutral-600');
                });
                
                // Add active state to clicked link
                this.classList.remove('text-neutral-600');
                this.classList.add('bg-indigo-50', 'text-indigo-700', 'font-medium', 'active');
                
                // Update page title based on section
                const section = this.getAttribute('data-section');
                const pageTitle = document.getElementById('page-title');
                
                const titles = {
                    'dashboard': { title: 'Good morning, John', subtitle: "Here's what's happening with your properties today." },
                    'properties': { title: 'Properties', subtitle: 'Manage all your property listings.' },
                    'tenants': { title: 'Tenants', subtitle: 'View and manage tenant information.' },
                    'bookings': { title: 'Bookings', subtitle: 'Handle booking requests and reservations.' },
                    'payments': { title: 'Payments', subtitle: 'Track rent payments and transactions.' },
                    'maintenance': { title: 'Maintenance', subtitle: 'Manage maintenance requests and repairs.' },
                    'visitors': { title: 'Visitors', subtitle: 'Track visitor logs and access.' },
                    'announcements': { title: 'Announcements', subtitle: 'Send notifications to tenants.' },
                    'audit-logs': { title: 'Audit Logs', subtitle: 'View system activity and changes.' },
                    'compliance': { title: 'Compliance', subtitle: 'Manage regulatory compliance.' },
                    'settings': { title: 'Settings', subtitle: 'Configure your account and preferences.' }
                };
                
                if (section && titles[section]) {
                    pageTitle.innerHTML = `
                        <h1 class="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">${titles[section].title}</h1>
                        <p class="text-sm text-neutral-500 mt-1">${titles[section].subtitle}</p>
                    `;
                }
                
                // Close mobile menu after selection
                closeMobileMenu();
            });
        });
        
        // Close user menu when clicking outside
        document.addEventListener('click', function(e) {
            const userMenu = document.getElementById('user-menu');
            if (!e.target.closest('[onclick="toggleUserMenu()"]') && !userMenu.contains(e.target)) {
                userMenu.classList.add('hidden');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 1024) {
                closeMobileMenu();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-black/50 z-40 lg:hidden hidden" id="mobile-overlay" onclick="closeMobileMenu()"></div>
<div className="flex min-h-screen">

<aside className="fixed inset-y-0 left-0 z-50 flex flex-col w-72 lg:w-64 bg-white border-r border-neutral-200 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out" id="sidebar">

<div className="flex items-center gap-2 px-6 py-5 border-b border-neutral-100">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tight">B</span>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900">Bookupy</span>
<button className="ml-auto lg:hidden p-1.5 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg" onclick="closeMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<span className="ml-auto text-xs font-medium text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded hidden lg:inline">Back</span>
</div>

<nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
<a className="nav-link active flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm bg-indigo-50 text-indigo-700 font-medium" data-section="dashboard" href="#dashboard">
<iconify-icon icon="solar:home-2-linear" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm" data-section="properties" href="#properties">
<iconify-icon icon="solar:buildings-2-linear" width="20"></iconify-icon>
                    Properties
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm" data-section="tenants" href="#tenants">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                    Tenants
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm" data-section="bookings" href="#bookings">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
                    Bookings
                    <span className="ml-auto bg-amber-100 text-amber-700 text-xs font-medium px-2 py-0.5 rounded-full">12</span>
</a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm" data-section="payments" href="#payments">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
                    Payments
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm" data-section="maintenance" href="#maintenance">
<iconify-icon icon="solar:wrench-linear" width="20"></iconify-icon>
                    Maintenance
                    <span className="ml-auto bg-rose-100 text-rose-700 text-xs font-medium px-2 py-0.5 rounded-full">3</span>
</a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm" data-section="visitors" href="#visitors">
<iconify-icon icon="solar:user-check-linear" width="20"></iconify-icon>
                    Visitors
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm" data-section="announcements" href="#announcements">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
                    Announcements
                </a>
<div className="pt-4 mt-4 border-t border-neutral-100">
<span className="px-3 text-xs font-medium text-neutral-400 uppercase tracking-wider">System</span>
</div>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm" data-section="audit-logs" href="#audit-logs">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
                    Audit Logs
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm" data-section="compliance" href="#compliance">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
                    Compliance
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm" data-section="settings" href="#settings">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
                    Settings
                </a>
</nav>

<div className="p-3 border-t border-neutral-100">
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors" onclick="toggleUserMenu()">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
<span className="text-white text-sm font-medium">JD</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900 truncate">John Doe</p>
<p className="text-xs text-neutral-500 truncate">Admin</p>
</div>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>

<div className="hidden mt-2 py-2 bg-white border border-neutral-200 rounded-lg shadow-lg" id="user-menu">
<a className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50" href="#profile">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
                        Profile
                    </a>
<a className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50" href="#account">
<iconify-icon icon="solar:settings-linear" width="16"></iconify-icon>
                        Account Settings
                    </a>
<hr className="my-2 border-neutral-100"/>
<a className="flex items-center gap-2 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50" href="#logout">
<iconify-icon icon="solar:logout-2-linear" width="16"></iconify-icon>
                        Sign Out
                    </a>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-64 w-full">

<header className="bg-white border-b border-neutral-200 sticky top-0 z-30">
<div className="flex items-center justify-between px-4 lg:px-8 py-4">

<button className="lg:hidden p-2 -ml-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg" onclick="openMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="flex items-center gap-2 lg:hidden">
<div className="w-7 h-7 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center">
<span className="text-white text-xs font-semibold tracking-tight">B</span>
</div>
<span className="text-base font-semibold tracking-tight text-neutral-900">Bookupy</span>
</div>

<div className="hidden md:flex items-center flex-1 max-w-md">
<div className="relative w-full">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 text-sm border border-neutral-200 rounded-lg bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="Search properties, tenants..." type="text"/>
</div>
</div>

<div className="flex items-center gap-1 sm:gap-2">
<button className="p-2 sm:p-2.5 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors md:hidden" onclick="toggleMobileSearch()">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="p-2 sm:p-2.5 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
</button>
<button className="hidden sm:block p-2.5 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors">
<iconify-icon icon="solar:chat-dots-linear" width="20"></iconify-icon>
</button>
<button className="ml-1 sm:ml-2 flex items-center gap-2 px-3 sm:px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
<span className="hidden sm:inline">Add Property</span>
</button>
</div>
</div>

<div className="hidden px-4 pb-4 md:hidden" id="mobile-search">
<div className="relative w-full">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 text-sm border border-neutral-200 rounded-lg bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="Search properties, tenants..." type="text"/>
</div>
</div>
</header>

<div className="p-4 lg:p-8">

<div className="mb-6 sm:mb-8" id="page-title">
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">Good morning, John</h1>
<p className="text-sm text-neutral-500 mt-1">Here's what's happening with your properties today.</p>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">

<div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-5 hover:shadow-lg hover:shadow-neutral-200/50 transition-shadow">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
<iconify-icon className="text-indigo-600 sm:hidden" icon="solar:buildings-2-linear" width="18"></iconify-icon>
<iconify-icon className="text-indigo-600 hidden sm:block" icon="solar:buildings-2-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
<iconify-icon icon="solar:arrow-up-linear" width="12"></iconify-icon>
                                12%
                            </span>
</div>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">248</p>
<p className="text-xs sm:text-sm text-neutral-500 mt-0.5">Total Properties</p>
</div>

<div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-5 hover:shadow-lg hover:shadow-neutral-200/50 transition-shadow">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-8 h-8 sm:w-10 sm:h-10 bg-violet-50 rounded-lg flex items-center justify-center">
<iconify-icon className="text-violet-600 sm:hidden" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<iconify-icon className="text-violet-600 hidden sm:block" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
<iconify-icon icon="solar:arrow-up-linear" width="12"></iconify-icon>
                                8%
                            </span>
</div>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">1,847</p>
<p className="text-xs sm:text-sm text-neutral-500 mt-0.5">Active Tenants</p>
</div>

<div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-5 hover:shadow-lg hover:shadow-neutral-200/50 transition-shadow">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
<iconify-icon className="text-emerald-600 sm:hidden" icon="solar:wallet-linear" width="18"></iconify-icon>
<iconify-icon className="text-emerald-600 hidden sm:block" icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
<iconify-icon icon="solar:arrow-up-linear" width="12"></iconify-icon>
                                23%
                            </span>
</div>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">$284K</p>
<p className="text-xs sm:text-sm text-neutral-500 mt-0.5">Monthly Revenue</p>
</div>

<div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-5 hover:shadow-lg hover:shadow-neutral-200/50 transition-shadow">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-50 rounded-lg flex items-center justify-center">
<iconify-icon className="text-amber-600 sm:hidden" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<iconify-icon className="text-amber-600 hidden sm:block" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-rose-600 bg-rose-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
<iconify-icon icon="solar:arrow-up-linear" width="12"></iconify-icon>
                                5
                            </span>
</div>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">24</p>
<p className="text-xs sm:text-sm text-neutral-500 mt-0.5">Pending Requests</p>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-4 sm:gap-6">

<div className="lg:col-span-2 bg-white rounded-xl border border-neutral-200 p-4 sm:p-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
<div>
<h3 className="text-base font-semibold text-neutral-900">Revenue Overview</h3>
<p className="text-sm text-neutral-500">Monthly revenue trend</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg">Monthly</button>
<button className="px-3 py-1.5 text-sm font-medium text-neutral-500 hover:bg-neutral-50 rounded-lg transition-colors">Yearly</button>
</div>
</div>

<div className="h-48 sm:h-64 flex items-end gap-1.5 sm:gap-2 px-2 sm:px-4">
<div className="flex-1 flex flex-col items-center gap-1.5 sm:gap-2">
<div className="w-full bg-indigo-100 rounded-t-md" style={{height: '45%'}}></div>
<span className="text-xs text-neutral-400">Jan</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1.5 sm:gap-2">
<div className="w-full bg-indigo-200 rounded-t-md" style={{height: '60%'}}></div>
<span className="text-xs text-neutral-400">Feb</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1.5 sm:gap-2">
<div className="w-full bg-indigo-300 rounded-t-md" style={{height: '55%'}}></div>
<span className="text-xs text-neutral-400">Mar</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1.5 sm:gap-2">
<div className="w-full bg-indigo-400 rounded-t-md" style={{height: '70%'}}></div>
<span className="text-xs text-neutral-400">Apr</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1.5 sm:gap-2">
<div className="w-full bg-indigo-500 rounded-t-md" style={{height: '85%'}}></div>
<span className="text-xs text-neutral-400">May</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1.5 sm:gap-2">
<div className="w-full bg-indigo-600 rounded-t-md" style={{height: '100%'}}></div>
<span className="text-xs text-neutral-600 font-medium">Jun</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-6">
<h3 className="text-base font-semibold text-neutral-900 mb-4">Quick Actions</h3>
<div className="space-y-2 sm:space-y-3">
<button className="w-full flex items-center gap-3 p-2.5 sm:p-3 rounded-lg border border-neutral-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all group">
<div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors flex-shrink-0">
<iconify-icon className="text-indigo-600" icon="solar:buildings-2-linear" width="18"></iconify-icon>
</div>
<div className="text-left min-w-0">
<p className="text-sm font-medium text-neutral-900">Add New Property</p>
<p className="text-xs text-neutral-500 hidden sm:block">List a new property</p>
</div>
<iconify-icon className="ml-auto text-neutral-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center gap-3 p-2.5 sm:p-3 rounded-lg border border-neutral-200 hover:border-violet-200 hover:bg-violet-50/50 transition-all group">
<div className="w-9 h-9 sm:w-10 sm:h-10 bg-violet-100 rounded-lg flex items-center justify-center group-hover:bg-violet-200 transition-colors flex-shrink-0">
<iconify-icon className="text-violet-600" icon="solar:user-plus-linear" width="18"></iconify-icon>
</div>
<div className="text-left min-w-0">
<p className="text-sm font-medium text-neutral-900">Add Tenant</p>
<p className="text-xs text-neutral-500 hidden sm:block">Register new tenant</p>
</div>
<iconify-icon className="ml-auto text-neutral-400 group-hover:text-violet-600 transition-colors flex-shrink-0" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center gap-3 p-2.5 sm:p-3 rounded-lg border border-neutral-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all group">
<div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors flex-shrink-0">
<iconify-icon className="text-emerald-600" icon="solar:document-add-linear" width="18"></iconify-icon>
</div>
<div className="text-left min-w-0">
<p className="text-sm font-medium text-neutral-900">Create Invoice</p>
<p className="text-xs text-neutral-500 hidden sm:block">Generate rent invoice</p>
</div>
<iconify-icon className="ml-auto text-neutral-400 group-hover:text-emerald-600 transition-colors flex-shrink-0" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center gap-3 p-2.5 sm:p-3 rounded-lg border border-neutral-200 hover:border-amber-200 hover:bg-amber-50/50 transition-all group">
<div className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors flex-shrink-0">
<iconify-icon className="text-amber-600" icon="solar:bell-bing-linear" width="18"></iconify-icon>
</div>
<div className="text-left min-w-0">
<p className="text-sm font-medium text-neutral-900">Send Announcement</p>
<p className="text-xs text-neutral-500 hidden sm:block">Notify all tenants</p>
</div>
<iconify-icon className="ml-auto text-neutral-400 group-hover:text-amber-600 transition-colors flex-shrink-0" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">

<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
<div className="flex items-center justify-between p-4 sm:p-6 pb-3 sm:pb-4">
<h3 className="text-base font-semibold text-neutral-900">Recent Bookings</h3>
<a className="nav-link text-sm text-indigo-600 hover:text-indigo-700 font-medium" data-section="bookings" href="#bookings">View all</a>
</div>
<div className="divide-y divide-neutral-100">
<div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-neutral-50 transition-colors">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0">
<span className="text-white text-xs sm:text-sm font-medium">SM</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900">Sarah Miller</p>
<p className="text-xs text-neutral-500 truncate">Unit 4B - Sunset Apartments</p>
</div>
<span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">Pending</span>
</div>
<div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-neutral-50 transition-colors">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
<span className="text-white text-xs sm:text-sm font-medium">MJ</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900">Mike Johnson</p>
<p className="text-xs text-neutral-500 truncate">Unit 12A - Ocean View</p>
</div>
<span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">Approved</span>
</div>
<div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-neutral-50 transition-colors">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center flex-shrink-0">
<span className="text-white text-xs sm:text-sm font-medium">EW</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900">Emma Wilson</p>
<p className="text-xs text-neutral-500 truncate">Unit 7C - Garden Residences</p>
</div>
<span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">Pending</span>
</div>
<div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-neutral-50 transition-colors">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center flex-shrink-0">
<span className="text-white text-xs sm:text-sm font-medium">DB</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900">David Brown</p>
<p className="text-xs text-neutral-500 truncate">Unit 2D - Metro Lofts</p>
</div>
<span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">Approved</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
<div className="flex items-center justify-between p-4 sm:p-6 pb-3 sm:pb-4">
<h3 className="text-base font-semibold text-neutral-900">Maintenance Requests</h3>
<a className="nav-link text-sm text-indigo-600 hover:text-indigo-700 font-medium" data-section="maintenance" href="#maintenance">View all</a>
</div>
<div className="divide-y divide-neutral-100">
<div className="flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-neutral-50 transition-colors">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-rose-600" icon="solar:danger-triangle-linear" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900">Water Leak - Unit 8A</p>
<p className="text-xs text-neutral-500 mt-0.5">Reported 2 hours ago</p>
</div>
<span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium bg-rose-100 text-rose-700 rounded-full flex-shrink-0">Urgent</span>
</div>
<div className="flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-neutral-50 transition-colors">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-amber-600" icon="solar:lightbulb-bolt-linear" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900">Electrical Issue - Unit 3C</p>
<p className="text-xs text-neutral-500 mt-0.5">Reported 5 hours ago</p>
</div>
<span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full flex-shrink-0">Medium</span>
</div>
<div className="flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-neutral-50 transition-colors">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-blue-600" icon="solar:snowflake-linear" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900">AC Not Working - Unit 15B</p>
<p className="text-xs text-neutral-500 mt-0.5">Reported 1 day ago</p>
</div>
<span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full flex-shrink-0">In Progress</span>
</div>
<div className="flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-neutral-50 transition-colors">
<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-neutral-600" icon="solar:key-linear" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900">Lock Replacement - Unit 6D</p>
<p className="text-xs text-neutral-500 mt-0.5">Reported 2 days ago</p>
</div>
<span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full flex-shrink-0">Completed</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200 mt-4 sm:mt-6 overflow-hidden">
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 pb-3 sm:pb-4 gap-3">
<div>
<h3 className="text-base font-semibold text-neutral-900">Property Overview</h3>
<p className="text-sm text-neutral-500 mt-0.5">Manage your property listings</p>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<div className="relative flex-1 sm:flex-none">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full sm:w-48 pl-9 pr-4 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="Search..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-700 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors flex-shrink-0">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
<span className="hidden sm:inline">Filter</span>
</button>
</div>
</div>

<div className="block sm:hidden divide-y divide-neutral-100">
<div className="p-4 hover:bg-neutral-50 transition-colors">
<div className="flex items-start gap-3 mb-3">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-indigo-600" icon="solar:buildings-2-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900">Sunset Apartments</p>
<p className="text-xs text-neutral-500">Downtown Miami • 48 Units</p>
</div>
<span className="px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">Active</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '92%'}}></div>
</div>
<span className="text-xs text-neutral-600">92%</span>
</div>
<span className="font-medium text-neutral-900">$86,400</span>
</div>
</div>
<div className="p-4 hover:bg-neutral-50 transition-colors">
<div className="flex items-start gap-3 mb-3">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-cyan-600" icon="solar:buildings-2-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900">Ocean View Tower</p>
<p className="text-xs text-neutral-500">Brickell, Miami • 124 Units</p>
</div>
<span className="px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">Active</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '78%'}}></div>
</div>
<span className="text-xs text-neutral-600">78%</span>
</div>
<span className="font-medium text-neutral-900">$142,600</span>
</div>
</div>
<div className="p-4 hover:bg-neutral-50 transition-colors">
<div className="flex items-start gap-3 mb-3">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-emerald-600" icon="solar:buildings-2-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900">Garden Residences</p>
<p className="text-xs text-neutral-500">Coral Gables • 36 Units</p>
</div>
<span className="px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">Maintenance</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '58%'}}></div>
</div>
<span className="text-xs text-neutral-600">58%</span>
</div>
<span className="font-medium text-neutral-900">$45,200</span>
</div>
</div>
</div>

<div className="hidden sm:block overflow-x-auto">
<table className="w-full">
<thead className="bg-neutral-50 border-y border-neutral-200">
<tr>
<th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">Property</th>
<th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">Location</th>
<th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">Units</th>
<th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">Occupancy</th>
<th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">Revenue</th>
<th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">Status</th>
<th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3"></th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-100">
<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center">
<iconify-icon className="text-indigo-600" icon="solar:buildings-2-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Sunset Apartments</p>
<p className="text-xs text-neutral-500">Residential Complex</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-neutral-700">Downtown Miami</p>
</td>
<td className="px-6 py-4">
<p className="text-sm text-neutral-700">48</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-20 h-2 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '92%'}}></div>
</div>
<span className="text-sm text-neutral-700">92%</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm font-medium text-neutral-900">$86,400</p>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">Active</span>
</td>
<td className="px-6 py-4">
<button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
<iconify-icon className="text-cyan-600" icon="solar:buildings-2-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Ocean View Tower</p>
<p className="text-xs text-neutral-500">Luxury Condos</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-neutral-700">Brickell, Miami</p>
</td>
<td className="px-6 py-4">
<p className="text-sm text-neutral-700">124</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-20 h-2 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '78%'}}></div>
</div>
<span className="text-sm text-neutral-700">78%</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm font-medium text-neutral-900">$142,600</p>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">Active</span>
</td>
<td className="px-6 py-4">
<button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
<iconify-icon className="text-emerald-600" icon="solar:buildings-2-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Garden Residences</p>
<p className="text-xs text-neutral-500">Family Housing</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-neutral-700">Coral Gables</p>
</td>
<td className="px-6 py-4">
<p className="text-sm text-neutral-700">36</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-20 h-2 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '58%'}}></div>
</div>
<span className="text-sm text-neutral-700">58%</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm font-medium text-neutral-900">$45,200</p>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">Maintenance</span>
</td>
<td className="px-6 py-4">
<button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-t border-neutral-200">
<p className="text-xs sm:text-sm text-neutral-500">Showing 1-3 of 248</p>
<div className="flex items-center gap-1 sm:gap-2">
<button className="p-1.5 sm:p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors disabled:opacity-50" disabled="">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm font-medium bg-indigo-600 text-white rounded-lg">1</button>
<button className="w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm font-medium text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">2</button>
<button className="hidden sm:flex w-8 h-8 text-sm font-medium text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors items-center justify-center">3</button>
<span className="text-neutral-400 hidden sm:inline">...</span>
<button className="hidden sm:flex w-8 h-8 text-sm font-medium text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors items-center justify-center">25</button>
<button className="p-1.5 sm:p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
