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
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- State & Mock Data ---
        const DEFAULT_TRANSACTIONS = [
            { id: 1, title: 'AWS Cloud Services', subtitle: 'Invoice #4829', date: 'Oct 24, 2023', category: 'Software', amount: -340.00, icon: 'server-square-linear', type: 'expense' },
            { id: 2, title: 'Stripe Payout', subtitle: 'Transfer', date: 'Oct 22, 2023', category: 'Income', amount: 4200.00, icon: 'buildings-linear', type: 'income' },
            { id: 3, title: 'Figma', subtitle: 'Annual Subscription', date: 'Oct 18, 2023', category: 'Software', amount: -144.00, icon: 'pen-linear', type: 'expense' },
            { id: 4, title: 'Apple Store', subtitle: 'Equipment', date: 'Oct 15, 2023', category: 'Office Supplies', amount: -1299.00, icon: 'shop-linear', type: 'expense' }
        ];

        let state = {
            transactions: [],
            filter: { search: '', category: 'all' },
            theme: localStorage.getItem('theme') || 'light'
        };

        // --- DOM Elements ---
        const els = {
            tableBody: document.getElementById('table-body'),
            searchInput: document.getElementById('search-input'),
            categoryFilter: document.getElementById('category-filter'),
            roleSelect: document.getElementById('role-select'),
            addTxBtn: document.getElementById('add-tx-btn'),
            themeToggle: document.getElementById('theme-toggle'),
            exportBtn: document.getElementById('export-btn'),
            exportMenu: document.getElementById('export-menu'),
            exportCsv: document.getElementById('export-csv'),
            exportJson: document.getElementById('export-json'),
            cardBalance: document.getElementById('card-balance'),
            cardIncome: document.getElementById('card-income'),
            cardExpenses: document.getElementById('card-expenses'),
            html: document.documentElement
        };

        // --- Mock API & Persistence ---
        const api = {
            fetch: async () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const saved = localStorage.getItem('finflow_data');
                        resolve(saved ? JSON.parse(saved) : [...DEFAULT_TRANSACTIONS]);
                    }, 600); // Simulate network delay
                });
            },
            save: (data) => {
                localStorage.setItem('finflow_data', JSON.stringify(data));
            }
        };

        // --- Core Logic ---
        async function init() {
            applyTheme(state.theme);
            state.transactions = await api.fetch();
            render();
            setupEventListeners();
        }

        function render() {
            // Apply Filters
            let filtered = state.transactions.filter(tx => {
                const matchesSearch = tx.title.toLowerCase().includes(state.filter.search.toLowerCase()) || 
                                      tx.subtitle.toLowerCase().includes(state.filter.search.toLowerCase());
                const matchesCat = state.filter.category === 'all' || tx.category === state.filter.category;
                return matchesSearch && matchesCat;
            });

            // Render Table
            els.tableBody.innerHTML = '';
            
            if (filtered.length === 0) {
                els.tableBody.innerHTML = `
                    <tr>
                        <td colspan="4" class="px-5 py-12 text-center">
                            <div class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                                <iconify-icon icon="solar:ghost-linear" class="text-4xl mb-3"></iconify-icon>
                                <p class="text-sm font-medium text-slate-900 dark:text-white">No transactions found</p>
                                <p class="text-xs mt-1">Try adjusting your search or filters.</p>
                            </div>
                        </td>
                    </tr>`;
            } else {
                filtered.forEach((tx, index) => {
                    const isIncome = tx.type === 'income';
                    const amountStr = `${isIncome ? '+' : '-'} $${Math.abs(tx.amount).toLocaleString('en-US', {minimumFractionDigits: 2})}`;
                    const amountColor = isIncome ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white';
                    
                    let badgeClass = '';
                    if(tx.category === 'Income') badgeClass = 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400';
                    else badgeClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300';

                    const tr = document.createElement('tr');
                    tr.className = 'hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group animate-row';
                    tr.style.animationDelay = `${index * 0.05}s`; // Staggered animation
                    
                    tr.innerHTML = `
                        <td class="px-5 py-3 flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:shadow-sm border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-all">
                                <iconify-icon icon="solar:${tx.icon}"></iconify-icon>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-slate-900 dark:text-white">${tx.title}</p>
                                <p class="text-xs text-slate-500 dark:text-slate-400">${tx.subtitle}</p>
                            </div>
                        </td>
                        <td class="px-5 py-3 text-sm text-slate-600 dark:text-slate-400">${tx.date}</td>
                        <td class="px-5 py-3">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${badgeClass}">${tx.category}</span>
                        </td>
                        <td class="px-5 py-3 text-sm font-medium ${amountColor} text-right">${amountStr}</td>
                    `;
                    els.tableBody.appendChild(tr);
                });
            }

            updateSummaryCards();
        }

        function updateSummaryCards() {
            const income = state.transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
            const expenses = state.transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + Math.abs(curr.amount), 0);
            const balance = 24562.00 + income - expenses; // Using a base balance for effect

            const format = (num) => '$' + num.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            
            els.cardBalance.textContent = format(balance);
            els.cardIncome.textContent = format(income);
            els.cardExpenses.textContent = format(expenses);
        }

        // --- Theme Management ---
        function applyTheme(theme) {
            if (theme === 'dark') {
                els.html.classList.add('dark');
            } else {
                els.html.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        }

        // --- Exports ---
        function downloadData(data, filename, type) {
            const blob = new Blob([data], { type: type });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden', '');
            a.setAttribute('href', url);
            a.setAttribute('download', filename);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

        function exportCSV() {
            const headers = ['Title', 'Subtitle', 'Date', 'Category', 'Amount', 'Type'];
            const rows = state.transactions.map(t => 
                [t.title, t.subtitle, t.date, t.category, t.amount, t.type].map(v => `"${v}"`).join(',')
            );
            downloadData([headers.join(','), ...rows].join('\n'), 'transactions.csv', 'text/csv');
        }

        // --- Event Listeners ---
        function setupEventListeners() {
            // Filters
            els.searchInput.addEventListener('input', (e) => {
                state.filter.search = e.target.value;
                render();
            });

            els.categoryFilter.addEventListener('change', (e) => {
                state.filter.category = e.target.value;
                render();
            });

            // Theme Toggle
            els.themeToggle.addEventListener('click', () => {
                state.theme = state.theme === 'light' ? 'dark' : 'light';
                applyTheme(state.theme);
            });

            // Role Switcher
            els.roleSelect.addEventListener('change', (e) => {
                if (e.target.value === 'admin') {
                    els.addTxBtn.classList.remove('hidden');
                    els.addTxBtn.classList.add('flex');
                } else {
                    els.addTxBtn.classList.add('hidden');
                    els.addTxBtn.classList.remove('flex');
                }
            });

            // Add Mock Transaction
            els.addTxBtn.addEventListener('click', () => {
                const newTx = {
                    id: Date.now(),
                    title: 'New Service',
                    subtitle: 'Manual Entry',
                    date: 'Oct ' + new Date().getDate() + ', 2023',
                    category: 'Software',
                    amount: -99.00,
                    icon: 'laptop-linear',
                    type: 'expense'
                };
                state.transactions.unshift(newTx);
                api.save(state.transactions);
                render();
            });

            // Export Dropdown Logic
            els.exportBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                els.exportMenu.classList.toggle('dropdown-hidden');
            });

            document.addEventListener('click', (e) => {
                if (!els.exportMenu.contains(e.target) && !els.exportBtn.contains(e.target)) {
                    els.exportMenu.classList.add('dropdown-hidden');
                }
            });

            els.exportCsv.addEventListener('click', () => {
                exportCSV();
                els.exportMenu.classList.add('dropdown-hidden');
            });

            els.exportJson.addEventListener('click', () => {
                downloadData(JSON.stringify(state.transactions, null, 2), 'transactions.json', 'application/json');
                els.exportMenu.classList.add('dropdown-hidden');
            });
        }

        // Run
        document.addEventListener('DOMContentLoaded', init);
    
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
      

<aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col flex-shrink-0 transition-colors duration-300">
<div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800">
<span className="text-lg font-semibold tracking-tighter text-slate-900 dark:text-white font-sans">FINFLOW</span>
</div>
<nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white font-medium text-sm transition-colors font-sans" href="#">
<iconify-icon className="text-lg text-slate-700 dark:text-slate-300" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
                Overview
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white rounded-lg font-medium text-sm transition-colors font-sans" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
                Transactions
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white rounded-lg font-medium text-sm transition-colors font-sans" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                Insights
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white rounded-lg font-medium text-sm transition-colors font-sans" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                Settings
            </a>
</nav>
<div className="p-4 border-t border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-semibold text-xs tracking-tight font-sans">
                    AB
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 dark:text-white truncate font-sans">Anushka B.</p>
<p className="text-xs text-slate-500 dark:text-slate-400 truncate font-sans">anushka@example.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 lg:px-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10 flex-shrink-0 transition-colors duration-300">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-900 dark:hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<h1 className="text-xl tracking-tight text-slate-900 dark:text-white font-sans font-semibold">Dashboard</h1>
</div>
<div className="flex items-center gap-4">

<button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" id="theme-toggle">
<iconify-icon className="text-lg dark:hidden" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="hidden dark:block text-lg" height="18" icon="solar:sun-linear" strokeWidth="1.5" style={{color: 'rgb(203, 213, 225)'}} width="18"></iconify-icon>
</button>

<div className="relative flex items-center hidden sm:flex">
<label className="sr-only font-sans" htmlFor="role-select">Select Role</label>
<select className="pl-3 pr-8 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer" id="role-select">
<option className="font-sans" value="viewer">Viewer Mode</option>
<option className="font-sans" value="admin">Admin Mode</option>
</select>
</div>
<button className="relative p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
<iconify-icon className="text-lg" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white dark:ring-slate-900"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8">

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between transition-colors duration-300">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-slate-500 dark:text-slate-400 font-sans">Total Balance</h2>
<div className="w-8 h-8 rounded-md bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700">
<iconify-icon className="text-slate-400 dark:text-slate-500 text-lg" icon="solar:wallet-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<div className="text-3xl tracking-tight text-slate-900 dark:text-white font-sans font-semibold" id="card-balance">$26,979.00</div>
<div className="flex items-center gap-1 mt-2 text-sm">
<span className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded text-xs font-sans">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
                                2.5%
                            </span>
<span className="text-slate-400 dark:text-slate-500 text-xs font-sans">vs last month</span>
</div>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between transition-colors duration-300">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-slate-500 dark:text-slate-400 font-sans">Monthly Income</h2>
<div className="w-8 h-8 rounded-md bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:arrow-left-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<div className="text-3xl tracking-tight text-slate-900 dark:text-white font-sans font-semibold" id="card-income">$4,200.00</div>
<div className="flex items-center gap-1 mt-2 text-sm">
<span className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded text-xs font-sans">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
                                4.1%
                            </span>
<span className="text-slate-400 dark:text-slate-500 text-xs font-sans">vs last month</span>
</div>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between transition-colors duration-300">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-slate-500 dark:text-slate-400 font-sans">Monthly Expenses</h2>
<div className="w-8 h-8 rounded-md bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700">
<iconify-icon className="text-rose-500 text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<div className="text-3xl tracking-tight text-slate-900 dark:text-white font-sans font-semibold" id="card-expenses">$1,783.00</div>
<div className="flex items-center gap-1 mt-2 text-sm">
<span className="flex items-center text-rose-600 dark:text-rose-400 font-medium bg-rose-50 dark:bg-rose-500/10 px-1.5 py-0.5 rounded text-xs font-sans">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
                                1.2%
                            </span>
<span className="text-slate-400 dark:text-slate-500 text-xs font-sans">vs last month</span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-colors duration-300">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight font-sans">Balance Trend</h3>
<select className="text-xs text-slate-500 dark:text-slate-400 bg-transparent border-none outline-none font-medium cursor-pointer">
<option className="font-sans">Last 30 Days</option>
<option className="font-sans">This Year</option>
</select>
</div>

<div className="h-48 w-full relative flex items-end">
<div className="absolute left-0 top-0 bottom-6 w-10 flex flex-col justify-between text-xs text-slate-400 dark:text-slate-500">
<span className="font-sans">$25k</span>
<span className="font-sans">$20k</span>
<span className="font-sans">$15k</span>
</div>
<div className="ml-12 flex-1 h-full relative border-b border-l border-slate-100 dark:border-slate-800">
<div className="absolute w-full top-0 border-t border-slate-100 dark:border-slate-800 border-dashed"></div>
<div className="absolute w-full top-1/2 border-t border-slate-100 dark:border-slate-800 border-dashed"></div>
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="" d="M0,80 C20,70 40,90 60,40 C80,-10 100,20 100,20 L100,100 L0,100 Z" fill="rgba(99, 102, 241, 0.1)"></path>
<path d="M0,80 C20,70 40,90 60,40 C80,-10 100,20 100,20" fill="none" stroke="#6366f1" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
<div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-slate-400 dark:text-slate-500 mt-2">
<span className="font-sans">Oct 1</span>
<span className="font-sans">Oct 10</span>
<span className="font-sans">Oct 20</span>
<span className="font-sans">Oct 30</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="bg-indigo-900 rounded-xl p-6 text-white shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500 rounded-full opacity-20 blur-2xl"></div>
<h3 className="text-sm font-medium text-indigo-200 mb-1 flex items-center gap-2 font-sans">
<iconify-icon icon="solar:lightbulb-bolt-linear"></iconify-icon>
                            Smart Insight
                        </h3>
<p className="text-lg font-semibold tracking-tight mt-2 leading-tight font-sans">Your software subscriptions make up 35% of monthly expenses.</p>
<button className="mt-4 text-xs font-medium bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors inline-block font-sans">Review Subscriptions</button>
</div>
<div className="dark:bg-slate-900 dark:border-slate-800 flex-1 transition-colors duration-300 bg-white border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight mb-5 font-sans">Top Categories</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-slate-700 dark:text-slate-300 font-sans">Software</span>
<span className="text-slate-500 dark:text-slate-400 font-sans">$1,240</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-slate-700 dark:text-slate-300 font-sans">Marketing</span>
<span className="text-slate-500 dark:text-slate-400 font-sans">$850</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
<div className="bg-sky-500 h-1.5 rounded-full" style={{width: '30%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-slate-700 dark:text-slate-300 font-sans">Office Supplies</span>
<span className="text-slate-500 dark:text-slate-400 font-sans">$320</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '15%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-slate-900 dark:border-slate-800 overflow-visible flex flex-col transition-colors duration-300 bg-white z-0 border-slate-200 border rounded-xl relative shadow-sm">

<div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight font-sans">Recent Transactions</h3>
<div className="flex flex-wrap items-center gap-3">

<div className="relative w-full sm:w-auto">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-8 pr-4 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-md text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all w-full sm:w-48 placeholder:text-slate-400 text-slate-700 dark:text-slate-300" id="search-input" placeholder="Search..." type="text"/>
</div>

<div className="relative">
<select className="pl-3 pr-8 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer shadow-sm" id="category-filter">
<option className="font-sans" value="all">All Categories</option>
<option className="font-sans" value="Software">Software</option>
<option className="font-sans" value="Income">Income</option>
<option className="font-sans" value="Office Supplies">Office Supplies</option>
</select>
</div>

<div className="relative">
<button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-slate-900 shadow-sm font-sans" id="export-btn">
<iconify-icon icon="solar:export-linear"></iconify-icon>
                                Export
                            </button>

<div className="dropdown-content dropdown-hidden absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-slate-200 dark:border-slate-700 z-20 py-1" id="export-menu">
<button className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-sans" id="export-csv">Export CSV</button>
<button className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-sans" id="export-json">Export JSON</button>
</div>
</div>

<button className="hidden items-center gap-1.5 px-3 py-1.5 bg-slate-900 dark:bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-slate-800 dark:hover:bg-indigo-500 transition-colors shadow-sm font-sans" id="add-tx-btn">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                            New
                        </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead className="">
<tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
<th className="px-5 py-3 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider font-sans">Transaction</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider font-sans">Date</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider font-sans">Category</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right font-sans">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800/50" id="table-body"><tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group animate-row" style={{animationDelay: '0s'}}>
<td className="px-5 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:shadow-sm border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-all">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900 dark:text-white">AWS Cloud Services</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Invoice #4829</p>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-600 dark:text-slate-400">Oct 24, 2023</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Software</span>
</td>
<td className="px-5 py-3 text-sm font-medium text-slate-900 dark:text-white text-right">- $340.00</td>
</tr><tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group animate-row" style={{animationDelay: '0.05s'}}>
<td className="px-5 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:shadow-sm border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-all">
<iconify-icon icon="solar:buildings-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900 dark:text-white">Stripe Payout</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Transfer</p>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-600 dark:text-slate-400">Oct 22, 2023</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">Income</span>
</td>
<td className="px-5 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400 text-right">+ $4,200.00</td>
</tr><tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group animate-row" style={{animationDelay: '0.1s'}}>
<td className="px-5 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:shadow-sm border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-all">
<iconify-icon icon="solar:pen-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900 dark:text-white">Figma</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Annual Subscription</p>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-600 dark:text-slate-400">Oct 18, 2023</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Software</span>
</td>
<td className="px-5 py-3 text-sm font-medium text-slate-900 dark:text-white text-right">- $144.00</td>
</tr><tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group animate-row" style={{animationDelay: '0.15s'}}>
<td className="px-5 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:shadow-sm border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-all">
<iconify-icon icon="solar:shop-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900 dark:text-white">Apple Store</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Equipment</p>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-600 dark:text-slate-400">Oct 15, 2023</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Office Supplies</span>
</td>
<td className="px-5 py-3 text-sm font-medium text-slate-900 dark:text-white text-right">- $1,299.00</td>
</tr></tbody>
</table>
</div>
<div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-center">
<button className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-sans">View All Transactions</button>
</div>
</section>
<div className="h-4"></div>
</div>
</main>


    </>
  );
}
