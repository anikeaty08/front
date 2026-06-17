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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Login Logic ---
            const loginView = document.getElementById('login-view');
            const appView = document.getElementById('app-view');
            const loginForm = document.getElementById('login-form');
            const loginNameInput = document.getElementById('login-name');
            const profileNames = document.querySelectorAll('.profile-name');
            const profileInitials = document.querySelectorAll('.profile-initials');

            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const fullName = loginNameInput.value.trim();
                if (!fullName) return;

                // Extract Initials
                let initials = fullName.substring(0, 2).toUpperCase();
                if (fullName.includes(' ')) {
                    const parts = fullName.split(' ');
                    initials = (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
                }

                // Update UI
                profileNames.forEach(el => el.textContent = fullName);
                profileInitials.forEach(el => el.textContent = initials);

                // Transition views
                loginView.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => {
                    loginView.classList.add('hidden');
                    appView.classList.remove('hidden');
                }, 300);
            });

            // --- Navigation Logic ---
            const navLinks = document.querySelectorAll('.nav-link');
            const viewSections = document.querySelectorAll('.view-section');
            const pageTitle = document.getElementById('page-title');
            const pageDesc = document.getElementById('page-desc');

            const viewMeta = {
                'dashboard': { title: 'Overview', desc: 'Track your spending and optimize your golf budget.' },
                'expenses': { title: 'Expenses', desc: 'Manage and log your recent transactions.' },
                'budgets': { title: 'Budgets', desc: 'Monitor your category limits and savings.' },
                'reports': { title: 'Reports', desc: 'Analyze your spending trends and habits.' },
                'gear': { title: 'Gear Checker', desc: 'Discover smart alternatives for your equipment.' }
            };

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('data-target');

                    // Update Navigation Active State
                    navLinks.forEach(nav => {
                        nav.classList.remove('bg-gray-50', 'text-emerald-600');
                        nav.classList.add('text-gray-600');
                        const icon = nav.querySelector('iconify-icon');
                        if(icon) icon.classList.add('text-gray-400');
                    });
                    
                    link.classList.remove('text-gray-600');
                    link.classList.add('bg-gray-50', 'text-emerald-600');
                    const activeIcon = link.querySelector('iconify-icon');
                    if(activeIcon) activeIcon.classList.remove('text-gray-400');

                    // Switch Views
                    viewSections.forEach(view => {
                        if (view.id === 'view-' + targetId) {
                            view.classList.remove('hidden');
                            view.classList.add('block');
                        } else {
                            view.classList.add('hidden');
                            view.classList.remove('block');
                        }
                    });

                    // Update Page Header
                    if (viewMeta[targetId]) {
                        pageTitle.textContent = viewMeta[targetId].title;
                        pageDesc.textContent = viewMeta[targetId].desc;
                    }

                    // Close mobile sidebar if open
                    closeMobileSidebar();
                });
            });

            // --- Mobile Sidebar Logic ---
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const closeSidebarBtn = document.getElementById('close-sidebar-btn');
            const sidebar = document.getElementById('sidebar');
            const mobileBackdrop = document.getElementById('mobile-backdrop');

            function openMobileSidebar() {
                sidebar.classList.remove('-translate-x-full');
                mobileBackdrop.classList.remove('hidden');
                setTimeout(() => mobileBackdrop.classList.add('opacity-100'), 10);
            }

            function closeMobileSidebar() {
                sidebar.classList.add('-translate-x-full');
                mobileBackdrop.classList.remove('opacity-100');
                setTimeout(() => mobileBackdrop.classList.add('hidden'), 200);
            }

            mobileMenuBtn.addEventListener('click', openMobileSidebar);
            closeSidebarBtn.addEventListener('click', closeMobileSidebar);
            mobileBackdrop.addEventListener('click', closeMobileSidebar);

            // --- Expense Logging Logic ---
            const expenseForms = document.querySelectorAll('.add-expense-form');
            const transactionLists = document.querySelectorAll('.transactions-list');

            expenseForms.forEach(form => {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    const name = form.querySelector('.expense-name').value;
                    const category = form.querySelector('.expense-category').value;
                    const costRaw = form.querySelector('.expense-cost').value;
                    let dateStr = form.querySelector('.expense-date').value;

                    if (!name || !costRaw) return;

                    const cost = parseFloat(costRaw).toFixed(2);
                    let displayDate = 'Today';

                    if (dateStr) {
                        const d = new Date(dateStr);
                        displayDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
                    }

                    const newExpenseHtml = `
                        <div class="flex items-center justify-between pb-4 border-b border-gray-50 last:border-0 last:pb-0 animate-fade-in">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                    <iconify-icon icon="solar:wallet-money-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-900">${name}</p>
                                    <p class="text-xs text-gray-500">${category} • ${displayDate}</p>
                                </div>
                            </div>
                            <span class="text-sm font-medium text-gray-900">-$${cost}</span>
                        </div>
                    `;

                    // Add new item to all transaction lists across views
                    transactionLists.forEach(list => {
                        list.insertAdjacentHTML('afterbegin', newExpenseHtml);
                    });

                    form.reset();
                });
            });

        });
    
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
      

<div className="fixed inset-0 z-50 bg-gray-50 flex flex-col items-center justify-center p-4 transition-opacity duration-300" id="login-view">
<div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm w-full max-w-sm">
<div className="flex items-center gap-2 mb-6 justify-center">
<span className="text-2xl font-semibold tracking-tighter text-emerald-600">FF.</span>
</div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900 text-center mb-1">Welcome back</h2>
<p className="text-sm text-gray-500 text-center mb-6">Enter your details to access your dashboard.</p>
<form className="space-y-4" id="login-form">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
<input className="w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors" id="login-name" placeholder="e.g. Tiger Woods" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
<input className="w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors" placeholder="tiger@example.com" type="email"/>
</div>
<button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors mt-2" type="submit">
                    Access Dashboard
                </button>
</form>
</div>
</div>

<div className="hidden flex h-screen w-full" id="app-view">

<div className="fixed inset-0 bg-gray-900/50 z-30 hidden lg:hidden transition-opacity" id="mobile-backdrop"></div>

<aside className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform -translate-x-full transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 flex flex-col flex-shrink-0" id="sidebar">
<div className="h-16 flex items-center px-6 border-b border-gray-100 justify-between">
<span className="text-xl font-semibold tracking-tighter text-emerald-600">FF.</span>
<button className="lg:hidden text-gray-500 hover:text-gray-900" id="close-sidebar-btn">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-gray-50 text-emerald-600" data-target="dashboard" href="#">
<iconify-icon className="text-lg" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
                    Dashboard
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" data-target="expenses" href="#">
<iconify-icon className="text-lg text-gray-400" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
                    Expenses
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" data-target="budgets" href="#">
<iconify-icon className="text-lg text-gray-400" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
                    Budgets
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" data-target="reports" href="#">
<iconify-icon className="text-lg text-gray-400" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                    Reports
                </a>
<div className="pt-4 pb-2">
<p className="px-3 text-xs font-semibold text-gray-400 tracking-wider uppercase">Insights</p>
</div>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" data-target="gear" href="#">
<iconify-icon className="text-lg text-gray-400" icon="solar:tag-price-linear" strokeWidth="1.5"></iconify-icon>
                    Gear Checker
                </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="profile-initials w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-medium text-sm">
                        AJ
                    </div>
<div>
<p className="profile-name text-sm font-medium text-gray-900 w-32 truncate">Alex Junior</p>
<p className="text-xs text-gray-500">Hdcp: 12.4</p>
</div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="lg:hidden bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 flex-shrink-0">
<div className="flex items-center gap-3">
<button className="text-gray-500 hover:text-gray-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<span className="text-lg font-semibold tracking-tighter text-emerald-600">FF.</span>
</div>
<div className="profile-initials w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-medium text-sm">
                    AJ
                </div>
</header>

<main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative">
<div className="max-w-6xl mx-auto space-y-6 lg:space-y-8">

<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900" id="page-title">Overview</h1>
<p className="text-sm text-gray-500 mt-1" id="page-desc">Track your spending and optimize your golf budget.</p>
</div>

<div className="view-section space-y-6 lg:space-y-8 block animate-fade-in" id="view-dashboard">
<div className="bg-amber-50 border border-amber-200/60 rounded-xl p-4 flex items-start gap-3 shadow-sm shadow-amber-100/50">
<iconify-icon className="text-xl text-amber-600 mt-0.5 flex-shrink-0" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-amber-800">Budget Warning: Tournament Fees</h3>
<p className="text-xs text-amber-700 mt-1">You have spent $250 of your $300 monthly limit for tournament entries. Consider skipping the local qualifier to stay on track.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-gray-500">Total Spent (YTD)</h2>
<iconify-icon className="text-gray-400 text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">$1,240.50</span>
</div>
<div className="mt-2 text-xs text-emerald-600 flex items-center gap-1 font-medium">
<iconify-icon icon="solar:arrow-right-down-linear" strokeWidth="1.5"></iconify-icon>
                                    12% less than last year
                                </div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-gray-500">Monthly Budget Left</h2>
<iconify-icon className="text-gray-400 text-lg" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">$85.00</span>
<span className="text-xs text-gray-500">/ $400.00</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
<div className="bg-gray-900 h-1.5 rounded-full" style={{width: '78%'}}></div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm sm:col-span-2 lg:col-span-1">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-gray-500">Smart Savings</h2>
<iconify-icon className="text-gray-400 text-lg" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-emerald-600">$320.00</span>
</div>
<p className="mt-2 text-xs text-gray-500">Saved by choosing recommended alternatives this season.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm lg:col-span-2 flex flex-col">
<h2 className="text-sm font-medium text-gray-900 mb-4">Monthly Spending Trend</h2>
<div className="flex-1 flex items-end gap-2 sm:gap-4 h-40 mt-auto">
<div className="relative flex-1 bg-gray-100 rounded-t-sm h-[40%] hover:bg-gray-200 transition-colors group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Jan</span></div>
<div className="relative flex-1 bg-gray-100 rounded-t-sm h-[60%] hover:bg-gray-200 transition-colors group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Feb</span></div>
<div className="relative flex-1 bg-gray-100 rounded-t-sm h-[30%] hover:bg-gray-200 transition-colors group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Mar</span></div>
<div className="relative flex-1 bg-gray-100 rounded-t-sm h-[80%] hover:bg-gray-200 transition-colors group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Apr</span></div>
<div className="relative flex-1 bg-emerald-500 rounded-t-sm h-[100%] hover:bg-emerald-600 transition-colors group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-emerald-600 opacity-100">May</span></div>
<div className="relative flex-1 bg-gray-50 rounded-t-sm h-[10%] group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Jun</span></div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col">
<h2 className="text-sm font-medium text-gray-900 mb-4">By Category</h2>
<div className="flex-1 flex flex-col justify-center gap-4">
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-gray-600">Green Fees &amp; Tournaments</span>
<span className="font-medium text-gray-900">45%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '45%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-gray-600">Coaching</span>
<span className="font-medium text-gray-900">30%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5"><div className="bg-gray-800 h-1.5 rounded-full" style={{width: '30%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-gray-600">Equipment (Balls/Clubs)</span>
<span className="font-medium text-gray-900">15%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5"><div className="bg-gray-400 h-1.5 rounded-full" style={{width: '15%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-gray-600">Clothing &amp; Accessories</span>
<span className="font-medium text-gray-900">10%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5"><div className="bg-gray-200 h-1.5 rounded-full" style={{width: '10%'}}></div></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section space-y-6 lg:space-y-8 hidden animate-fade-in" id="view-expenses">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm lg:col-span-1 h-fit">
<h2 className="text-sm font-medium text-gray-900 mb-4">Log Expense</h2>
<form className="add-expense-form space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Item Name</label>
<input className="expense-name w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors placeholder:text-gray-400" placeholder="e.g. Dozen Pro V1s" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Category</label>
<div className="relative">
<select className="expense-category w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 appearance-none transition-colors text-gray-700">
<option>Balls &amp; Tees</option>
<option>Clubs &amp; Bags</option>
<option>Clothing &amp; Shoes</option>
<option>Coaching &amp; Lessons</option>
<option>Tournament Fees</option>
<option>Green Fees</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Cost ($)</label>
<input className="expense-cost w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors placeholder:text-gray-400" min="0" placeholder="0.00" required="" step="0.01" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Date</label>
<input className="expense-date w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-gray-700" type="date"/>
</div>
</div>
<button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors mt-2" type="submit">
                                        Add Expense
                                    </button>
</form>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm lg:col-span-2 min-h-[400px]">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-gray-900">Transaction History</h2>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filter
                                    </button>
</div>
<div className="transactions-list space-y-4">
<div className="flex items-center justify-between pb-4 border-b border-gray-50 last:border-0 last:pb-0">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">State Junior Qualifier</p>
<p className="text-xs text-gray-500">Tournament Fees • Today</p>
</div>
</div>
<span className="text-sm font-medium text-gray-900">-$120.00</span>
</div>
<div className="flex items-center justify-between pb-4 border-b border-gray-50 last:border-0 last:pb-0">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:t-shirt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Golf Polo (Sale)</p>
<p className="text-xs text-gray-500">Clothing • May 14</p>
</div>
</div>
<span className="text-sm font-medium text-gray-900">-$45.00</span>
</div>
<div className="flex items-center justify-between pb-4 border-b border-gray-50 last:border-0 last:pb-0">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:user-speak-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Swing Lesson (Coach Mike)</p>
<p className="text-xs text-gray-500">Coaching • May 10</p>
</div>
</div>
<span className="text-sm font-medium text-gray-900">-$80.00</span>
</div>
</div>
</div>
</div>
</div>

<div className="view-section space-y-6 lg:space-y-8 hidden animate-fade-in" id="view-budgets">
<div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col items-center justify-center min-h-[300px] text-center">
<div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-4">
<iconify-icon className="text-2xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">Budget Details</h3>
<p className="text-xs text-gray-500 mt-2 max-w-sm">Detailed budget configuration and historical budget limits will appear here.</p>
</div>
</div>

<div className="view-section space-y-6 lg:space-y-8 hidden animate-fade-in" id="view-reports">
<div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col items-center justify-center min-h-[300px] text-center">
<div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-4">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">Advanced Reports</h3>
<p className="text-xs text-gray-500 mt-2 max-w-sm">Deeper insights, CSV exports, and yearly comparison charts will appear here.</p>
</div>
</div>

<div className="view-section space-y-6 lg:space-y-8 hidden animate-fade-in" id="view-gear">
<div className="pt-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-base font-semibold tracking-tight text-gray-900">Smart Gear Insights</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white border border-gray-200 rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium bg-red-50 text-red-700">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> Overpriced for Level
                                            </span>
</div>
<h3 className="text-sm font-medium text-gray-900 mt-2">Premium Tour Golf Balls</h3>
<p className="text-xs text-gray-500 mt-1 leading-relaxed">At a 12.4 handicap, spending $55/dozen on tour-level balls offers minimal performance gain. The high spin can actually exaggerate slices or hooks.</p>
<div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
<span className="text-xs font-medium text-gray-900">Avg Cost: $55.00</span>
</div>
</div>
</div>
<div className="bg-white border border-emerald-200 rounded-xl p-5 relative overflow-hidden group shadow-sm shadow-emerald-100/50">
<div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Better Value Alternative
                                            </span>
</div>
<h3 className="text-sm font-medium text-gray-900 mt-2">Urethane Mid-Tier Balls</h3>
<p className="text-xs text-gray-500 mt-1 leading-relaxed">Try options like Srixon Q-Star Tour or TaylorMade Tour Response. They offer similar greenside control (urethane cover) but cost significantly less per dozen.</p>
<div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
<span className="text-xs font-medium text-gray-900">Avg Cost: $35.00</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Save ~$20/dz</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-8"></div>
</div>
</main>
</div>
</div>



    </>
  );
}
