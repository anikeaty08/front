import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Mobile Menu Toggle
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const closeBtn = document.getElementById('close-sidebar');
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');

            function toggleMenu() {
                const isClosed = sidebar.classList.contains('-translate-x-full');
                if (isClosed) {
                    sidebar.classList.remove('-translate-x-full');
                    overlay.classList.remove('hidden');
                    setTimeout(() => overlay.classList.remove('opacity-0'), 10); 
                    overlay.classList.add('pointer-events-auto');
                } else {
                    sidebar.classList.add('-translate-x-full');
                    overlay.classList.add('opacity-0');
                    overlay.classList.remove('pointer-events-auto');
                    setTimeout(() => overlay.classList.add('hidden'), 300);
                }
            }

            mobileBtn.addEventListener('click', toggleMenu);
            closeBtn.addEventListener('click', toggleMenu);
            overlay.addEventListener('click', toggleMenu);

            // 2. Navigation Switching logic
            const navLinks = document.querySelectorAll('.nav-link');
            const viewSections = document.querySelectorAll('.view-section');
            const pageTitle = document.getElementById('page-title');

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();

                    navLinks.forEach(l => {
                        l.className = 'nav-link flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors font-medium text-sm text-slate-400 group';
                        l.querySelector('.nav-icon').className = 'text-slate-500 group-hover:text-slate-300 nav-icon';
                    });

                    link.className = 'nav-link active flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800/50 text-white font-medium text-sm group';
                    link.querySelector('.nav-icon').className = 'text-emerald-500 nav-icon';

                    const targetId = link.getAttribute('data-target');
                    viewSections.forEach(section => {
                        if(section.id === targetId) {
                            section.classList.remove('hidden');
                        } else {
                            section.classList.add('hidden');
                        }
                    });

                    pageTitle.textContent = link.getAttribute('data-title');

                    if(window.innerWidth < 768 && !sidebar.classList.contains('-translate-x-full')) {
                        toggleMenu();
                    }
                });
            });

            // 3. Sub/Main Meter Form Tabs
            const tabSub = document.getElementById('tab-sub');
            const tabMain = document.getElementById('tab-main');
            const viewSub = document.getElementById('readings-sub');
            const viewMain = document.getElementById('readings-main');

            if(tabSub && tabMain) {
                tabSub.addEventListener('click', () => {
                    tabSub.className = 'px-3 py-1 text-xs font-medium bg-white text-slate-900 rounded shadow-sm transition-all';
                    tabMain.className = 'px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 transition-all';
                    viewSub.classList.remove('hidden');
                    viewMain.classList.add('hidden');
                });

                tabMain.addEventListener('click', () => {
                    tabMain.className = 'px-3 py-1 text-xs font-medium bg-white text-slate-900 rounded shadow-sm transition-all';
                    tabSub.className = 'px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 transition-all';
                    viewMain.classList.remove('hidden');
                    viewSub.classList.add('hidden');
                });
            }

            // 4. User Dropdown Menu Logic
            const userBtn = document.getElementById('user-menu-btn');
            const userDropdown = document.getElementById('user-dropdown');
            const userChevron = document.getElementById('user-menu-chevron');

            userBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isClosed = userDropdown.classList.contains('opacity-0');
                if (isClosed) {
                    userDropdown.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
                    userChevron.classList.add('rotate-180');
                    userBtn.classList.add('bg-slate-800', 'border-slate-700');
                } else {
                    closeUserDropdown();
                }
            });

            function closeUserDropdown() {
                userDropdown.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
                userChevron.classList.remove('rotate-180');
                userBtn.classList.remove('bg-slate-800', 'border-slate-700');
            }

            document.addEventListener('click', (e) => {
                if (!userDropdown.contains(e.target) && !userBtn.contains(e.target)) {
                    closeUserDropdown();
                }
            });

            // 5. Custom Toggles Logic (Settings view)
            const toggles = document.querySelectorAll('.custom-toggle');
            toggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const isChecked = toggle.getAttribute('aria-checked') === 'true';
                    const span = toggle.querySelector('span');
                    
                    if (isChecked) {
                        toggle.setAttribute('aria-checked', 'false');
                        toggle.classList.remove('bg-emerald-500');
                        toggle.classList.add('bg-slate-200');
                        span.classList.remove('translate-x-4');
                        span.classList.add('translate-x-0');
                    } else {
                        toggle.setAttribute('aria-checked', 'true');
                        toggle.classList.remove('bg-slate-200');
                        toggle.classList.add('bg-emerald-500');
                        span.classList.remove('translate-x-0');
                        span.classList.add('translate-x-4');
                    }
                });
            });
        });

        // 6. Global Toast Notification Function
        let toastTimeout;
        window.showToast = function(message) {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toast-message');
            
            clearTimeout(toastTimeout);
            toastMessage.textContent = message;
            
            toast.classList.remove('translate-y-12', 'opacity-0');
            
            toastTimeout = setTimeout(() => {
                toast.classList.add('translate-y-12', 'opacity-0');
            }, 3000);
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-slate-900/50 z-40 hidden md:hidden transition-opacity opacity-0 pointer-events-none" id="sidebar-overlay"></div>

<aside className="w-64 bg-[#0f172a] text-slate-300 flex-shrink-0 flex flex-col fixed inset-y-0 left-0 z-50 transform -translate-x-full md:relative md:translate-x-0 transition-transform duration-200 ease-in-out h-full border-r border-slate-800" id="sidebar">

<div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-emerald-500" height="24" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="font-semibold tracking-tighter text-lg">EBILL<span className="text-emerald-500">SYS</span></span>
</div>
<button className="md:hidden text-slate-400 hover:text-white" id="close-sidebar">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800/50 text-white font-medium text-sm group" data-target="view-dashboard" data-title="Overview" href="#">
<iconify-icon className="text-emerald-500 nav-icon" height="20" icon="solar:widget-5-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                Dashboard
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors font-medium text-sm text-slate-400 group" data-target="view-readings" data-title="Meter Readings" href="#">
<iconify-icon className="text-slate-500 group-hover:text-slate-300 nav-icon" height="20" icon="solar:speedometer-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                Meter Readings
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors font-medium text-sm text-slate-400 group" data-target="view-recharges" data-title="Recharges" href="#">
<iconify-icon className="text-slate-500 group-hover:text-slate-300 nav-icon" height="20" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                Recharges
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors font-medium text-sm text-slate-400 group" data-target="view-reports" data-title="Reports" href="#">
<iconify-icon className="text-slate-500 group-hover:text-slate-300 nav-icon" height="20" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                Reports
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors font-medium text-sm text-slate-400 group mt-8" data-target="view-settings" data-title="Settings" href="#">
<iconify-icon className="text-slate-500 group-hover:text-slate-300 nav-icon" height="20" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                Settings
            </a>
</nav>

<div className="relative mt-auto mx-3 mb-3">

<div className="absolute bottom-full left-0 w-full mb-2 bg-slate-800 border border-slate-700 rounded-xl shadow-lg opacity-0 pointer-events-none transition-all duration-200 translate-y-2 z-50" id="user-dropdown">
<div className="p-1.5 space-y-0.5">
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors text-left">
<iconify-icon height="18" icon="solar:user-circle-linear" width="18"></iconify-icon> My Profile
                    </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors text-left">
<iconify-icon height="18" icon="solar:shield-keyhole-linear" width="18"></iconify-icon> Security
                    </button>
<div className="h-px bg-slate-700 my-1"></div>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-400/10 rounded-lg transition-colors text-left" onclick="showToast('Logging out...')">
<iconify-icon height="18" icon="solar:logout-2-linear" width="18"></iconify-icon> Log Out
                    </button>
</div>
</div>

<button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700 group text-left" id="user-menu-btn">
<div className="flex items-center gap-3 overflow-hidden">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-emerald-500 font-semibold text-xs border border-slate-700 flex-shrink-0">
                        AD
                    </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Admin User</p>
<p className="text-xs text-slate-500 truncate group-hover:text-slate-400 transition-colors">admin@ebillsys.com</p>
</div>
</div>
<iconify-icon className="text-slate-500 flex-shrink-0 transition-transform duration-200" height="16" icon="solar:alt-arrow-up-linear" id="user-menu-chevron" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 bg-white border-b border-slate-200 flex-shrink-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-900 transition-colors" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<h1 className="text-xl font-semibold tracking-tight text-slate-900" id="page-title">Overview</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
<iconify-icon height="16" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Current Period: <span className="font-medium text-slate-700">Oct 2023</span></span>
</div>
<button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm" onclick="showToast('New entry dialog opened.')">
<iconify-icon height="18" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    New Entry
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6">
<div className="max-w-7xl mx-auto">

<div className="view-section space-y-8" id="view-dashboard">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm relative overflow-hidden group">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Available Balance</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mt-1">$450.00</h3>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon height="20" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
<span className="flex items-center text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">
<iconify-icon height="12" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
                                    Sufficient
                                </span>
<span>Main prepaid meter</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Est. Cost Per Unit</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mt-1">$0.15</h3>
</div>
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon height="20" icon="solar:calculator-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
<span>Based on 3000 Units / $450 Rech.</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Total Units (Main)</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mt-1">1,240</h3>
</div>
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon height="20" icon="solar:bolt-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-xs">
<span className="text-slate-500">Sum of subs: 1,190</span>
<span className="text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded font-medium border border-amber-100">Mismatch: 50</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Total Recharge</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mt-1">$800.00</h3>
</div>
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon height="20" icon="solar:bill-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
<span>Current billing period</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Record Meter Readings</h2>
<div className="flex space-x-1 bg-slate-100 p-1 rounded-md border border-slate-200">
<button className="px-3 py-1 text-xs font-medium bg-white text-slate-900 rounded shadow-sm transition-all" id="tab-sub">Sub Meters</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 transition-all" id="tab-main">Main Meter</button>
</div>
</div>
<div className="p-5 flex-1">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="readings-sub">
<div className="space-y-4 p-4 rounded-lg border border-slate-100 bg-slate-50/50">
<h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:shop-linear"></iconify-icon>
                                            Gadget And Play
                                        </h4>
<div className="space-y-3">
<div>
<label className="block text-xs font-medium text-slate-600 mb-1.5">Previous Reading</label>
<input className="block w-full rounded-md border-0 py-2 px-3 text-slate-500 bg-slate-100 shadow-sm ring-1 ring-inset ring-slate-200 sm:text-sm outline-none cursor-not-allowed" disabled="" type="text" value="15,420"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Current Reading</label>
<input className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm outline-none transition-shadow" placeholder="Enter reading" type="number"/>
</div>
</div>
</div>
<div className="space-y-4 p-4 rounded-lg border border-slate-100 bg-slate-50/50">
<h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:shop-2-linear"></iconify-icon>
                                            Hello Boss
                                        </h4>
<div className="space-y-3">
<div>
<label className="block text-xs font-medium text-slate-600 mb-1.5">Previous Reading</label>
<input className="block w-full rounded-md border-0 py-2 px-3 text-slate-500 bg-slate-100 shadow-sm ring-1 ring-inset ring-slate-200 sm:text-sm outline-none cursor-not-allowed" disabled="" type="text" value="8,105"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Current Reading</label>
<input className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm outline-none transition-shadow" placeholder="Enter reading" type="number"/>
</div>
</div>
</div>
</div>

<div className="hidden" id="readings-main">
<div className="space-y-4 p-4 rounded-lg border border-slate-100 bg-slate-50/50 w-full sm:w-1/2">
<h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:bolt-circle-linear"></iconify-icon>
                                            Main Complex Meter
                                        </h4>
<div className="space-y-3">
<div>
<label className="block text-xs font-medium text-slate-600 mb-1.5">Previous Reading</label>
<input className="block w-full rounded-md border-0 py-2 px-3 text-slate-500 bg-slate-100 shadow-sm ring-1 ring-inset ring-slate-200 sm:text-sm outline-none cursor-not-allowed" disabled="" type="text" value="42,100"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Current Reading</label>
<input className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm outline-none transition-shadow" placeholder="Enter reading" type="number"/>
</div>
</div>
</div>
</div>
</div>
<div className="px-5 py-4 border-t border-slate-100 bg-slate-50 flex justify-end">
<button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm" onclick="showToast('Meter readings saved successfully!')">
                                    Save Readings
                                </button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="px-5 py-4 border-b border-slate-200 bg-slate-50/50">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Add Recharge</h2>
</div>
<div className="p-5 flex-1 space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Date</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<iconify-icon className="text-slate-400" icon="solar:calendar-linear"></iconify-icon>
</div>
<input className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm outline-none transition-shadow" type="date"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Amount ($)</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<span className="text-slate-500 sm:text-sm">$</span>
</div>
<input className="block w-full rounded-md border-0 py-2 pl-8 pr-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm outline-none transition-shadow" placeholder="0.00" type="number"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Note (Optional)</label>
<textarea className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm outline-none transition-shadow resize-none" placeholder="Reference or details" rows="2"></textarea>
</div>
</div>
<div className="px-5 py-4 border-t border-slate-100 bg-slate-50">
<button className="w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm" onclick="showToast('Recharge added to balance successfully!')">
                                    Submit Recharge
                                </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-900">Current Period Billing Breakdown</h2>
<p className="text-xs text-slate-500 mt-1">Automatic proportional distribution based on Main Meter difference.</p>
</div>
<button className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto" onclick="showToast('Report export started.')">
<iconify-icon height="16" icon="solar:printer-linear" width="16"></iconify-icon>
                                Export
                            </button>
</div>
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-slate-200">
<thead className="bg-slate-50/80">
<tr>
<th className="py-3.5 pl-5 pr-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Shop / Entity</th>
<th className="px-3 py-3.5 text-right text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Raw Units</th>
<th className="px-3 py-3.5 text-right text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Distribution %</th>
<th className="px-3 py-3.5 text-right text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Adj. Units</th>
<th className="px-3 py-3.5 text-right text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Rate</th>
<th className="py-3.5 pl-3 pr-5 text-right text-xs font-medium uppercase tracking-wider text-slate-900" scope="col">Calculated Bill</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 bg-white">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="whitespace-nowrap py-3 pl-5 pr-3 text-sm">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="font-medium text-slate-900">Gadget And Play</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right text-slate-600">650</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right text-slate-500">54.6%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right font-medium text-slate-700 bg-slate-50">677.3</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right text-slate-500">$0.15</td>
<td className="whitespace-nowrap py-3 pl-3 pr-5 text-sm text-right font-semibold text-slate-900">$101.60</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="whitespace-nowrap py-3 pl-5 pr-3 text-sm">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
<span className="font-medium text-slate-900">Hello Boss</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right text-slate-600">540</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right text-slate-500">45.4%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right font-medium text-slate-700 bg-slate-50">562.7</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right text-slate-500">$0.15</td>
<td className="whitespace-nowrap py-3 pl-3 pr-5 text-sm text-right font-semibold text-slate-900">$84.40</td>
</tr>
<tr className="bg-slate-50 border-t border-slate-200">
<td className="whitespace-nowrap py-3.5 pl-5 pr-3 text-sm font-semibold text-slate-900">
                                            Total (Main Meter Match)
                                        </td>
<td className="whitespace-nowrap px-3 py-3.5 text-sm text-right font-medium text-slate-600">1,190</td>
<td className="whitespace-nowrap px-3 py-3.5 text-sm text-right text-slate-500">-</td>
<td className="whitespace-nowrap px-3 py-3.5 text-sm text-right font-semibold text-emerald-600">1,240</td>
<td className="whitespace-nowrap px-3 py-3.5 text-sm text-right text-slate-500">-</td>
<td className="whitespace-nowrap py-3.5 pl-3 pr-5 text-sm text-right font-semibold tracking-tight text-slate-900">$186.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden space-y-6" id="view-readings">
<div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-sm">
<div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-500 mx-auto mb-4">
<iconify-icon height="32" icon="solar:speedometer-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Meter Readings History</h3>
<p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto">View and manage all historical meter readings across your properties in this detailed view.</p>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm" onclick="showToast('Downloading CSV...')">
                            Download Complete Log (CSV)
                        </button>
</div>
</div>

<div className="view-section hidden space-y-6" id="view-recharges">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Recharge History</h2>
<p className="text-sm text-slate-500">Manage and view all main meter prepaid recharges.</p>
</div>
<button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm" onclick="showToast('Opening add recharge form...')">
<iconify-icon height="18" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Add Token
                        </button>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-slate-200">
<thead className="bg-slate-50/80">
<tr>
<th className="py-3.5 pl-5 pr-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Date</th>
<th className="px-3 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Token / Reference</th>
<th className="px-3 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Payment Method</th>
<th className="px-3 py-3.5 text-right text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Units Added</th>
<th className="px-3 py-3.5 text-right text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Amount</th>
<th className="py-3.5 pl-3 pr-5 text-right text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 bg-white">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="whitespace-nowrap py-3 pl-5 pr-3 text-sm text-slate-600">Oct 12, 2023</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-slate-900">#TRX-9982-1</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-500">Bank Transfer</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right text-slate-600">3,000</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right font-medium text-slate-900">$450.00</td>
<td className="whitespace-nowrap py-3 pl-3 pr-5 text-sm text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Success</span>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="whitespace-nowrap py-3 pl-5 pr-3 text-sm text-slate-600">Sep 28, 2023</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-slate-900">#TRX-8124-4</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-500">Credit Card</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right text-slate-600">2,500</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right font-medium text-slate-900">$350.00</td>
<td className="whitespace-nowrap py-3 pl-3 pr-5 text-sm text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Success</span>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="whitespace-nowrap py-3 pl-5 pr-3 text-sm text-slate-600">Sep 05, 2023</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-slate-900">#TRX-7751-2</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-500">Cash</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right text-slate-600">1,200</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-right font-medium text-slate-900">$200.00</td>
<td className="whitespace-nowrap py-3 pl-3 pr-5 text-sm text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">Processed</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden space-y-6" id="view-reports">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Reports &amp; Analytics</h2>
<p className="text-sm text-slate-500">Generate, view and export comprehensive billing summaries.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col hover:border-emerald-500 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
<iconify-icon height="20" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Monthly Tenant Bills</h3>
<p className="text-xs text-slate-500 mb-4 flex-1">Generates individual PDF statements for each registered sub-meter.</p>
<button className="text-sm font-medium text-emerald-600 flex items-center gap-1 group-hover:text-emerald-700" onclick="showToast('Generating Tenant Bills PDF...')">
                                Generate <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col hover:border-emerald-500 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
<iconify-icon height="20" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Usage Analytics</h3>
<p className="text-xs text-slate-500 mb-4 flex-1">View comprehensive consumption trends and discrepancy tracking over time.</p>
<button className="text-sm font-medium text-emerald-600 flex items-center gap-1 group-hover:text-emerald-700" onclick="showToast('Opening Analytics Dashboard...')">
                                View Dashboard <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col hover:border-emerald-500 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
<iconify-icon height="20" icon="solar:database-export-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Full Ledger Export</h3>
<p className="text-xs text-slate-500 mb-4 flex-1">Download raw CSV data containing all readings, recharges, and rates.</p>
<button className="text-sm font-medium text-emerald-600 flex items-center gap-1 group-hover:text-emerald-700" onclick="showToast('Downloading Ledger CSV...')">
                                Export CSV <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="view-section hidden space-y-6" id="view-settings">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900">System Settings</h2>
<p className="text-sm text-slate-500">Configure billing rules, properties, and overall system preferences.</p>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden max-w-3xl">

<div className="px-6 py-5 border-b border-slate-200">
<h3 className="text-base font-semibold text-slate-900">Billing Preferences</h3>
<p className="text-sm text-slate-500 mt-1 mb-5">Manage how costs are calculated and distributed.</p>
<div className="space-y-5">
<div className="flex items-center justify-between">
<div>
<label className="block text-sm font-medium text-slate-900">Auto-Proportional Distribution</label>
<p className="text-xs text-slate-500 mt-0.5">Automatically distribute main meter uncounted units across sub-meters.</p>
</div>
<button aria-checked="true" className="custom-toggle relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-emerald-500 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
<span aria-hidden="true" className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<label className="block text-sm font-medium text-slate-900">Fixed Rate Billing</label>
<p className="text-xs text-slate-500 mt-0.5">Use a hardcoded rate instead of calculating from recharge cost.</p>
</div>
<button aria-checked="false" className="custom-toggle relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
<span aria-hidden="true" className="translate-x-0 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
</div>
</div>

<div className="px-6 py-5 bg-slate-50/50">
<h3 className="text-base font-semibold text-slate-900 mb-4">Localization</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Currency Setup</label>
<div className="relative">
<select className="block w-full appearance-none rounded-md border-0 py-2 pl-3 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm outline-none transition-shadow bg-white">
<option>USD ($)</option>
<option>EUR (€)</option>
<option>GBP (£)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Timezone</label>
<div className="relative">
<select className="block w-full appearance-none rounded-md border-0 py-2 pl-3 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm outline-none transition-shadow bg-white">
<option>UTC (Coordinated Universal Time)</option>
<option>EST (Eastern Standard Time)</option>
<option>PST (Pacific Standard Time)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end">
<button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm" onclick="showToast('Settings saved successfully.')">
                                Save Preferences
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 transform translate-y-12 opacity-0 transition-all duration-300 z-[60] pointer-events-none" id="toast">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium" id="toast-message">Action successful</span>
</div>



    </>
  );
}
