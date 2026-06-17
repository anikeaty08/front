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



                    document.querySelectorAll('[data-nav-link]').forEach(link => {
                        link.addEventListener('click', function(e) {
                            document.querySelectorAll('[data-nav-link]').forEach(l => {
                                l.classList.remove('text-neutral-100', 'bg-white/5', 'border', 'border-white/5', 'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]');
                                l.classList.add('text-neutral-400');
                                l.querySelector('svg').classList.remove('text-indigo-400');
                                l.querySelector('svg').classList.add('text-neutral-500');
                            });
                            this.classList.remove('text-neutral-400');
                            this.classList.add('text-neutral-100', 'bg-white/5', 'border', 'border-white/5', 'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]');
                            this.querySelector('svg').classList.remove('text-neutral-500');
                            this.querySelector('svg').classList.add('text-indigo-400');
                        });
                    });
                


        // Icon Initialization
        lucide.createIcons();

        // Account Switcher Logic
        function toggleAccountMenu() {
            const menu = document.getElementById('account-menu');
            const chevron = document.getElementById('account-chevron');
            menu.classList.toggle('hidden');
            if (menu.classList.contains('hidden')) {
                chevron.style.transform = 'rotate(0deg)';
            } else {
                chevron.style.transform = 'rotate(180deg)';
            }
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const btn = document.getElementById('account-btn');
            const menu = document.getElementById('account-menu');
            if (!btn.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.add('hidden');
                document.getElementById('account-chevron').style.transform = 'rotate(0deg)';
            }
        });

        // Modal Logic
        const modalBackdrop = document.getElementById('modal-backdrop');
        const modalContent = document.getElementById('modal-content');

        function openModal() {
            modalBackdrop.classList.remove('hidden');
            // Add slight delay for animation
            setTimeout(() => {
                modalContent.classList.add('modal-enter-active');
                modalContent.classList.remove('modal-enter');
            }, 10);
        }

        function closeModal() {
            modalContent.classList.add('modal-exit-active');
            setTimeout(() => {
                modalBackdrop.classList.add('hidden');
                modalContent.classList.remove('modal-exit-active');
            }, 200);
        }

        // Mobile Sidebar Logic
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        function toggleSidebar() {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }

        // Checkbox Logic
        const selectAll = document.getElementById('select-all');
        const rowCheckboxes = document.querySelectorAll('.row-checkbox');

        selectAll.addEventListener('change', function() {
            rowCheckboxes.forEach(cb => {
                cb.checked = selectAll.checked;
            });
        });

        rowCheckboxes.forEach(cb => {
            cb.addEventListener('change', function() {
                const allChecked = Array.from(rowCheckboxes).every(c => c.checked);
                selectAll.checked = allChecked;
            });
        });

        // Set current date in modal
        const dateInput = document.querySelector('input[type="datetime-local"]');
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        dateInput.value = now.toISOString().slice(0,16);

    
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
      
<div className="flex h-screen overflow-hidden relative">

<div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm hidden md:hidden transition-opacity" id="sidebar-overlay" onclick="toggleSidebar()"></div>

<aside className="w-64 fixed md:static inset-y-0 left-0 z-50 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col border-r backdrop-blur-xl border-white/5 bg-neutral-950/80 md:bg-neutral-950/50" id="sidebar">

<div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
<div className="flex items-center gap-2 font-medium tracking-tighter text-lg text-white">
<div className="w-5 h-5 bg-gradient-to-tr to-neutral-500 rounded-sm from-white"></div>
                    FX.JRNL
                </div>
<button className="md:hidden text-neutral-400 hover:text-white" onclick="toggleSidebar()">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<nav className="flex-1 overflow-y-auto pt-6 pr-3 pb-6 pl-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all text-neutral-100 bg-white/5 border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]" data-nav-link="dashboard" href="#dashboard">
<svg className="lucide lucide-layout-grid w-4 h-4 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all group hover:text-neutral-100 hover:bg-white/5 text-neutral-400" data-nav-link="journal" href="#journal">
<svg className="lucide lucide-book w-4 h-4 group-hover:text-indigo-400 text-neutral-500 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
                    Journal
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all group hover:text-neutral-100 hover:bg-white/5 text-neutral-400" data-nav-link="analytics" href="#analytics">
<svg className="lucide lucide-bar-chart-2 w-4 h-4 group-hover:text-indigo-400 text-neutral-500 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all group hover:text-neutral-100 hover:bg-white/5 text-neutral-400" data-nav-link="calendar" href="#calendar">
<svg className="lucide lucide-calendar w-4 h-4 group-hover:text-indigo-400 text-neutral-500 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                    Calendar
                </a>
<div className="pt-6 pb-2 px-3 text-xs font-medium uppercase tracking-widest text-neutral-600">
                    Accounts
                </div>

<div className="relative px-3">
<button className="w-full flex items-center justify-between p-2 rounded-md hover:bg-white/5 transition-colors border border-transparent hover:border-white/5" id="account-btn" onclick="toggleAccountMenu()">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></span>
<span className="text-sm text-neutral-300">Live #8821</span>
</div>
<svg className="lucide lucide-chevron-down w-3 h-3 text-neutral-500 transition-transform duration-200" fill="none" height="24" id="account-chevron" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="hidden absolute top-full left-3 right-3 mt-1 rounded-lg border border-white/10 bg-neutral-900 shadow-xl z-20 overflow-hidden" id="account-menu">
<a className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-white/5" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                            Live #8821
                        </a>
<a className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                            Demo #0042
                        </a>
<div className="h-px bg-white/5 my-1"></div>
<a className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-neutral-500 hover:text-indigo-400 transition-colors" href="#">
<svg className="lucide lucide-plus" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            Add Account
                        </a>
</div>
</div>

</nav>

<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full p-2 rounded-md transition-colors text-left hover:bg-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-medium text-white shadow-lg">JD</div>
<div className="flex-1">
<div className="text-xs font-medium text-neutral-200">John Doe</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wide">Pro Plan</div>
</div>
<svg className="lucide lucide-settings-2 w-4 h-4 text-neutral-500 hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-grid relative bg-black">
<div className="absolute inset-0 bg-gradient-to-b from-transparent pointer-events-none via-black/80 to-black z-0"></div>
<div className="md:px-12 md:py-10 max-w-7xl mx-auto pt-6 pr-6 pb-8 pl-6 relative z-10">

<header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
<div className="flex items-center gap-4">
<button className="md:hidden p-2 -ml-2 text-neutral-400 hover:text-white" onclick="toggleSidebar()">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
<div>
<h1 className="text-2xl font-semibold tracking-tight text-white">Overview</h1>
<p className="text-sm text-neutral-500 mt-1">Market analysis and performance metrics for October.</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="h-9 px-4 rounded-md border text-xs font-medium transition-all flex items-center gap-2 border-white/10 bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800 hover:border-white/20 active:scale-95">
<svg className="lucide lucide-download w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            Export
                        </button>
<button className="h-9 px-4 rounded-md text-xs font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 bg-neutral-100 text-black hover:bg-white hover:scale-105 active:scale-95" onclick="openModal()">
<svg className="lucide lucide-plus w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            Log Trade
                        </button>
</div>
</header>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="p-5 rounded-xl border backdrop-blur-sm transition-colors group relative overflow-hidden border-white/5 bg-neutral-900/40 hover:border-white/10 hover:bg-neutral-900/60">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">Net Profit</div>
<div className="text-2xl font-medium tracking-tight flex items-baseline gap-2 text-white">
                            $12,450.00
                            <span className="text-xs text-emerald-400 font-normal bg-emerald-500/10 border border-emerald-500/10 px-1.5 py-0.5 rounded">+12.5%</span>
</div>
</div>
<div className="p-5 rounded-xl border backdrop-blur-sm transition-colors border-white/5 bg-neutral-900/40 hover:border-white/10 hover:bg-neutral-900/60">
<div className="text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">Win Rate</div>
<div className="text-2xl font-medium tracking-tight flex items-baseline gap-2 text-white">
                            68.4%
                            <span className="text-xs font-normal text-neutral-600">Last 30 days</span>
</div>

<div className="w-full h-1 rounded-full mt-4 overflow-hidden bg-neutral-800">
<div className="h-full bg-indigo-500 w-[68%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
<div className="p-5 rounded-xl border backdrop-blur-sm transition-colors border-white/5 bg-neutral-900/40 hover:border-white/10 hover:bg-neutral-900/60">
<div className="text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">Profit Factor</div>
<div className="text-2xl font-medium tracking-tight text-white">
                            2.45
                        </div>
<p className="text-[10px] text-neutral-500 mt-2">Gross Profit / Gross Loss</p>
</div>
<div className="p-5 rounded-xl border backdrop-blur-sm transition-colors border-white/5 bg-neutral-900/40 hover:border-white/10 hover:bg-neutral-900/60">
<div className="text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">Open Trades</div>
<div className="text-2xl font-medium tracking-tight flex items-center gap-2 text-white">
                            3
                            <span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
</div>
<p className="text-[10px] text-neutral-500 mt-2">2 Long, 1 Short</p>
</div>
</div>

<div className="w-full h-80 rounded-xl border backdrop-blur-sm p-6 mb-8 relative overflow-hidden border-white/5 bg-neutral-900/40">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-neutral-300">Equity Curve</h3>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-xs text-neutral-500">Balance</span>
</div>

<div className="flex bg-neutral-900 rounded-md p-0.5 border border-white/5">
<button className="px-2 py-0.5 text-[10px] rounded hover:bg-white/5 text-neutral-400 transition-colors">1W</button>
<button className="px-2 py-0.5 text-[10px] rounded bg-white/10 text-white font-medium shadow-sm transition-colors">1M</button>
<button className="px-2 py-0.5 text-[10px] rounded hover:bg-white/5 text-neutral-400 transition-colors">3M</button>
<button className="px-2 py-0.5 text-[10px] rounded hover:bg-white/5 text-neutral-400 transition-colors">YTD</button>
</div>
</div>
</div>

<div className="relative h-full w-full pr-4 pb-8 group">

<div className="absolute inset-0 flex flex-col justify-between text-xs pointer-events-none text-neutral-700">
<div className="border-b border-dashed w-full h-0 border-neutral-800/50"></div>
<div className="border-b border-dashed w-full h-0 border-neutral-800/50"></div>
<div className="border-b border-dashed w-full h-0 border-neutral-800/50"></div>
<div className="border-b border-dashed w-full h-0 border-neutral-800/50"></div>
<div className="border-b border-dashed w-full h-0 border-neutral-800/50"></div>
</div>

<svg className="absolute inset-0 w-full h-[85%] overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="transition-opacity duration-300" d="M0 150 C 50 150, 100 160, 150 140 C 200 120, 250 130, 300 100 C 350 70, 400 90, 450 60 C 500 30, 550 40, 600 20 C 650 0, 700 10, 750 30 L 750 200 L 0 200 Z" fill="url(#gradient)" stroke="none"></path>
<path className="drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]" d="M0 150 C 50 150, 100 160, 150 140 C 200 120, 250 130, 300 100 C 350 70, 400 90, 450 60 C 500 30, 550 40, 600 20 C 650 0, 700 10, 750 30" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<line stroke="#3f3f46" stroke-dasharray="4 4" strokeWidth="1" x1="600" x2="600" y1="0" y2="200"></line>
<circle cx="600" cy="20" fill="#09090b" r="4" stroke="#6366f1" strokeWidth="2"></circle>
<g transform="translate(550, -30)">
<rect fill="#18181b" height="36" rx="6" stroke="#3f3f46" width="100"></rect>
<text fill="#a1a1aa" fontFamily="Inter" fontSize="10" font-weight="500" text-anchor="middle" x="50" y="16">Oct 24, 2023</text>
<text fill="#fff" fontFamily="Inter" fontSize="11" font-weight="600" text-anchor="middle" x="50" y="28">$12,450.00</text>
</g>
</g>
</svg>
</div>
</div>

<div className="rounded-xl border backdrop-blur-sm overflow-hidden border-white/5 bg-neutral-900/40">
<div className="px-6 py-4 border-b flex items-center justify-between border-white/5">
<h3 className="text-sm font-medium text-neutral-300">Recent Trades</h3>
<div className="flex gap-2">
<div className="relative group">
<button className="h-7 px-3 rounded border text-[10px] transition-colors flex items-center gap-1.5 bg-neutral-900 border-white/10 text-neutral-400 hover:text-white hover:border-white/20">
                                    Filter <svg className="lucide lucide-filter w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs">
<thead className="">
<tr className="border-b text-neutral-500 uppercase tracking-wider border-white/5 bg-white/[0.01]">
<th className="px-6 py-4 font-medium w-10">
<label className="custom-checkbox cursor-pointer">
<input className="hidden" id="select-all" type="checkbox"/>
<div className="w-3.5 h-3.5 border rounded flex items-center justify-center transition-all border-neutral-700 bg-neutral-900/50 hover:border-neutral-500">
<svg className="w-2.5 h-2.5 hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</th>
<th className="px-6 py-4 font-medium">Pair</th>
<th className="px-6 py-4 font-medium">Date &amp; Time</th>
<th className="px-6 py-4 font-medium">Type</th>
<th className="px-6 py-4 font-medium">Lots</th>
<th className="px-6 py-4 font-medium">Price In</th>
<th className="px-6 py-4 font-medium">Price Out</th>
<th className="px-6 py-4 font-medium text-right">P&amp;L</th>
<th className="px-6 py-4 font-medium text-center">Setup</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-neutral-400">

<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-4">
<label className="custom-checkbox cursor-pointer">
<input className="hidden row-checkbox" type="checkbox"/>
<div className="w-3.5 h-3.5 border rounded flex items-center justify-center transition-all group-hover:border-neutral-500 border-neutral-700 bg-neutral-900/50">
<svg className="w-2.5 h-2.5 hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full flex items-center justify-center border text-[8px] bg-neutral-800 border-black text-white">€</div>
<div className="w-5 h-5 rounded-full flex items-center justify-center border text-[8px] bg-neutral-700 border-black text-white">$</div>
</div>
<span className="font-medium text-neutral-200">EURUSD</span>
</div>
</td>
<td className="px-6 py-4 text-neutral-500">Oct 24, 14:30</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_8px_rgba(99,102,241,0.15)]">LONG</span>
</td>
<td className="px-6 py-4 text-neutral-300">1.50</td>
<td className="px-6 py-4">1.05432</td>
<td className="px-6 py-4">1.05680</td>
<td className="px-6 py-4 text-right font-medium text-indigo-400">+$372.00</td>
<td className="px-6 py-4 text-center">
<button className="transition-colors text-neutral-600 hover:text-white">
<svg className="lucide lucide-image w-4 h-4 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-4">
<label className="custom-checkbox cursor-pointer">
<input className="hidden row-checkbox" type="checkbox"/>
<div className="w-3.5 h-3.5 border rounded flex items-center justify-center transition-all group-hover:border-neutral-500 border-neutral-700 bg-neutral-900/50">
<svg className="w-2.5 h-2.5 hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full flex items-center justify-center border text-[8px] bg-neutral-800 border-black text-white">£</div>
<div className="w-5 h-5 rounded-full flex items-center justify-center border text-[8px] bg-neutral-700 border-black text-white">¥</div>
</div>
<span className="font-medium text-neutral-200">GBPJPY</span>
</div>
</td>
<td className="px-6 py-4 text-neutral-500">Oct 24, 09:15</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_8px_rgba(248,113,113,0.15)]">SHORT</span>
</td>
<td className="px-6 py-4 text-neutral-300">2.00</td>
<td className="px-6 py-4">182.450</td>
<td className="px-6 py-4">182.600</td>
<td className="px-6 py-4 text-right font-medium text-red-400">-$280.50</td>
<td className="px-6 py-4 text-center">
<button className="transition-colors text-neutral-600 hover:text-white">
<svg className="lucide lucide-image w-4 h-4 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-4">
<label className="custom-checkbox cursor-pointer">
<input className="hidden row-checkbox" type="checkbox"/>
<div className="w-3.5 h-3.5 border rounded flex items-center justify-center transition-all group-hover:border-neutral-500 border-neutral-700 bg-neutral-900/50">
<svg className="w-2.5 h-2.5 hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full flex items-center justify-center border text-[8px] bg-neutral-800 border-black text-white">X</div>
<div className="w-5 h-5 rounded-full flex items-center justify-center border text-[8px] bg-neutral-700 border-black text-white">$</div>
</div>
<span className="font-medium text-neutral-200">XAUUSD</span>
</div>
</td>
<td className="px-6 py-4 text-neutral-500">Oct 23, 20:00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_8px_rgba(99,102,241,0.15)]">LONG</span>
</td>
<td className="px-6 py-4 text-neutral-300">0.50</td>
<td className="px-6 py-4">1980.50</td>
<td className="px-6 py-4">1995.00</td>
<td className="px-6 py-4 text-right font-medium text-indigo-400">+$725.00</td>
<td className="px-6 py-4 text-center">
<button className="transition-colors text-neutral-600 hover:text-white">
<svg className="lucide lucide-image w-4 h-4 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-4">
<label className="custom-checkbox cursor-pointer">
<input className="hidden row-checkbox" type="checkbox"/>
<div className="w-3.5 h-3.5 border rounded flex items-center justify-center transition-all group-hover:border-neutral-500 border-neutral-700 bg-neutral-900/50">
<svg className="w-2.5 h-2.5 hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full flex items-center justify-center border text-[8px] bg-neutral-800 border-black text-white">€</div>
<div className="w-5 h-5 rounded-full flex items-center justify-center border text-[8px] bg-neutral-700 border-black text-white">¥</div>
</div>
<span className="font-medium text-neutral-200">EURJPY</span>
</div>
</td>
<td className="px-6 py-4 text-neutral-500">Oct 23, 11:45</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_8px_rgba(248,113,113,0.15)]">SHORT</span>
</td>
<td className="px-6 py-4 text-neutral-300">1.00</td>
<td className="px-6 py-4">158.20</td>
<td className="px-6 py-4">158.50</td>
<td className="px-6 py-4 text-right font-medium text-red-400">-$210.00</td>
<td className="px-6 py-4 text-center">
<button className="transition-colors text-neutral-600 hover:text-white">
<svg className="lucide lucide-image w-4 h-4 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 border-t flex items-center justify-between text-[10px] text-neutral-500 border-white/5">
<span>Showing 1-4 of 124 trades</span>
<div className="flex items-center gap-2">
<button className="px-2 py-1 rounded disabled:opacity-50 transition-colors hover:bg-white/5" disabled="">Prev</button>
<button className="px-2 py-1 rounded transition-colors bg-white/10 text-white shadow-sm border border-white/5">1</button>
<button className="px-2 py-1 rounded transition-colors hover:bg-white/5 hover:text-neutral-300">2</button>
<button className="px-2 py-1 rounded transition-colors hover:bg-white/5 hover:text-neutral-300">3</button>
<span>...</span>
<button className="px-2 py-1 rounded transition-colors hover:bg-white/5 hover:text-neutral-300">Next</button>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-4" id="modal-backdrop" onclick="if(event.target === this) closeModal()">
<div className="w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl transform transition-all flex flex-col max-h-[90vh]" id="modal-content">
<div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
<h2 className="text-sm font-semibold text-white tracking-tight">Log New Trade</h2>
<button className="text-neutral-500 hover:text-white transition-colors" onclick="closeModal()">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-6 overflow-y-auto custom-scrollbar space-y-5">

<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Instrument</label>
<div className="relative">
<select className="w-full h-10 bg-neutral-900/50 border border-white/10 rounded-lg px-3 text-sm text-white appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all">
<option>EURUSD</option>
<option>GBPJPY</option>
<option>XAUUSD</option>
<option>NAS100</option>
<option>BTCUSD</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-500">
<svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Direction</label>
<div className="flex bg-neutral-900 rounded-lg p-1 border border-white/10 h-10 relative">

<label className="flex-1 text-center cursor-pointer relative z-10">
<input checked="" className="peer hidden" name="direction" type="radio"/>
<div className="w-full h-full flex items-center justify-center text-xs font-medium rounded text-neutral-400 peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:shadow-sm transition-all">Long</div>
</label>
<label className="flex-1 text-center cursor-pointer relative z-10">
<input className="peer hidden" name="direction" type="radio"/>
<div className="w-full h-full flex items-center justify-center text-xs font-medium rounded text-neutral-400 peer-checked:bg-red-500 peer-checked:text-white peer-checked:shadow-sm transition-all">Short</div>
</label>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Position Size (Lots)</label>
<input className="w-full h-10 bg-neutral-900/50 border border-white/10 rounded-lg px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-neutral-600" step="0.01" type="number" value="1.00"/>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Entry Price</label>
<input className="w-full h-10 bg-neutral-900/50 border border-white/10 rounded-lg px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-neutral-600" placeholder="0.0000" type="number"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Stop Loss</label>
<input className="w-full h-10 bg-neutral-900/50 border border-white/10 rounded-lg px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500/50 focus:border-red-500/50 transition-all placeholder-neutral-600" placeholder="0.0000" type="number"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Date &amp; Time</label>
<input className="w-full h-10 bg-neutral-900/50 border border-white/10 rounded-lg px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all [color-scheme:dark]" type="datetime-local"/>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Notes / Analysis</label>
<textarea className="w-full h-24 bg-neutral-900/50 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-neutral-600 resize-none" placeholder="Enter trade rationale..."></textarea>
</div>

<div className="border border-dashed border-white/10 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-image-plus text-neutral-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path><line x1="16" x2="22" y1="5" y2="5"></line><line x1="19" x2="19" y1="2" y2="8"></line><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<p className="text-xs text-neutral-400"><span className="text-indigo-400 hover:underline">Click to upload</span> or drag and drop</p>
<p className="text-[10px] text-neutral-600 mt-1">PNG, JPG up to 10MB</p>
</div>
</div>
<div className="px-6 py-4 border-t border-white/5 bg-neutral-900/30 flex items-center justify-end gap-3">
<button className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-400 hover:text-white transition-colors" onclick="closeModal()">Cancel</button>
<button className="px-4 py-2 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 transition-all active:scale-95" onclick="closeModal()">Save Trade</button>
</div>
</div>
</div>


    </>
  );
}
