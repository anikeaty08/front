import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-white/5 bg-zinc-950 flex flex-col h-full hidden md:flex transition-all duration-300">

<div className="h-14 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2 text-zinc-100">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black text-xs font-bold tracking-tighter">
                    EC
                </div>
<span className="font-medium tracking-tight text-sm">ESL Cafeteria</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
<div className="px-3 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Operations</div>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-100 bg-white/5 rounded-md border border-white/5 shadow-sm" href="#">
<span className="iconify text-zinc-100" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="16"></span>
                Dashboard
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify group-hover:text-zinc-100 transition-colors" data-icon="lucide:receipt" data-strokeWidth="1.5" data-width="16"></span>
                Daily Transactions
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify group-hover:text-zinc-100 transition-colors" data-icon="lucide:landmark" data-strokeWidth="1.5" data-width="16"></span>
                Bank Feeds
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify group-hover:text-zinc-100 transition-colors" data-icon="lucide:arrow-left-right" data-strokeWidth="1.5" data-width="16"></span>
                Reconciliation
                <span className="ml-auto bg-zinc-800 text-zinc-300 text-[10px] px-1.5 py-0.5 rounded-full">3</span>
</a>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Accounting</div>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify group-hover:text-zinc-100 transition-colors" data-icon="lucide:pie-chart" data-strokeWidth="1.5" data-width="16"></span>
                P&amp;L Reports
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify group-hover:text-zinc-100 transition-colors" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="16"></span>
                Vendor Invoices
            </a>
</nav>

<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-white/5 transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-900 to-emerald-700 flex items-center justify-center text-xs text-emerald-100 font-medium border border-white/10">
                    MK
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate group-hover:text-white">Manager Key</p>
<p className="text-xs text-zinc-500 truncate">admin@eslcafeteria.com</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-black relative">

<header className="h-14 flex items-center justify-between px-6 border-b border-white/5 bg-black/50 backdrop-blur-xl z-20">

<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
<nav className="hidden md:flex items-center text-sm text-zinc-500 gap-2">
<span className="hover:text-zinc-300 transition-colors cursor-pointer">Cafeteria</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-zinc-200 font-medium">Daily Ledger</span>
</nav>
<div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>

<div className="hidden md:flex items-center gap-2 bg-emerald-900/10 border border-emerald-900/20 px-2 py-0.5 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 live-indicator"></div>
<span className="text-[10px] font-medium text-emerald-500 tracking-wide uppercase">Connected: us-east-1</span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="relative group">
<span className="absolute left-2.5 top-1.5 text-zinc-500 group-focus-within:text-zinc-300">
<span className="iconify" data-icon="lucide:search" data-width="14"></span>
</span>
<input className="h-8 w-64 bg-zinc-900/50 border border-white/10 rounded-md pl-8 pr-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all" placeholder="Search invoices, dates, amounts..." type="text"/>
</div>
<div className="h-4 w-[1px] bg-white/10 mx-1"></div>
<button className="relative p-1.5 text-zinc-400 hover:text-zinc-100 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="16"></span>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-black"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-xl font-semibold text-white tracking-tight">Financial Overview</h1>
<p className="text-sm text-zinc-500 mt-1">Daily cafeteria sales, expenses, and reconciliation status.</p>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-md border border-white/10 bg-zinc-900/50 text-xs font-medium text-zinc-300 hover:bg-zinc-800 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:terminal-square" data-width="14"></span>
                            SQL Console
                        </button>
<button className="h-8 px-3 rounded-md border border-white/10 bg-zinc-900/50 text-xs font-medium text-zinc-300 hover:bg-zinc-800 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:file-spreadsheet" data-width="14"></span>
                            Export Report
                        </button>
<button className="h-8 px-3 rounded-md bg-white text-black text-xs font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                            Log Transaction
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-5 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Today's Sales</span>
<span className="iconify text-zinc-600 group-hover:text-zinc-400 transition-colors" data-icon="lucide:utensils" data-width="16"></span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">$2,845.50</span>
<span className="text-xs font-medium text-emerald-500 flex items-center">
<span className="iconify mr-0.5" data-icon="lucide:trending-up" data-width="12"></span>
                                +12% vs avg
                            </span>
</div>
<div className="mt-4 flex gap-1 h-1">
<div className="bg-emerald-500/80 w-[70%] rounded-full" title="Lunch"></div>
<div className="bg-emerald-500/40 w-[20%] rounded-full" title="Breakfast"></div>
<div className="bg-emerald-500/20 w-[10%] rounded-full" title="Snacks"></div>
</div>
</div>

<div className="p-5 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/10 rounded-bl-full -mr-2 -mt-2 blur-xl"></div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Unreconciled</span>
<span className="iconify text-zinc-600 group-hover:text-orange-400 transition-colors" data-icon="lucide:alert-circle" data-width="16"></span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">3 Items</span>
<span className="text-xs font-medium text-orange-400">Needs attention</span>
</div>
<p className="text-[11px] text-zinc-500 mt-4 font-mono">
                            Last sync: 10 mins ago
                        </p>
</div>

<div className="p-5 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">MTD Food Cost</span>
<span className="iconify text-zinc-600 group-hover:text-zinc-400 transition-colors" data-icon="lucide:truck" data-width="16"></span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">$14,200</span>
<span className="text-xs font-medium text-zinc-500">62% of budget</span>
</div>
<div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-100 w-[62%] rounded-full"></div>
</div>
</div>
</div>

<div className="border border-white/10 rounded-xl bg-black overflow-hidden flex flex-col h-[500px]">

<div className="p-3 border-b border-white/5 flex items-center justify-between gap-2 bg-zinc-900/20">
<div className="flex items-center gap-2">

<div className="relative group">
<button className="h-7 px-2.5 rounded hover:bg-white/5 flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors border border-transparent hover:border-white/5">
<span className="iconify" data-icon="lucide:database" data-width="14"></span>
<span>PrimaryDB.public</span>
<span className="iconify opacity-50" data-icon="lucide:chevron-down" data-width="12"></span>
</button>
</div>
<div className="h-4 w-[1px] bg-white/10 mx-1"></div>

<button className="h-7 px-2 rounded-md bg-zinc-900 border border-white/10 text-xs text-zinc-300 flex items-center gap-1.5 hover:border-zinc-700 transition-all">
<span className="iconify text-zinc-500" data-icon="lucide:calendar-days" data-width="12"></span>
                                This Month
                            </button>
<button className="h-7 px-2 rounded-md border border-dashed border-zinc-800 text-xs text-zinc-500 flex items-center gap-1.5 hover:text-zinc-300 hover:border-zinc-700 transition-all">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="12"></span>
                                Reconciled Status
                            </button>
</div>
<div className="flex items-center gap-2">
<button className="h-7 px-2.5 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 text-xs font-medium transition-colors flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:play" data-width="10"></span>
                                Run Query
                            </button>
<div className="h-4 w-[1px] bg-white/10 mx-1"></div>
<button className="h-7 w-7 flex items-center justify-center rounded hover:bg-white/5 text-zinc-500 hover:text-zinc-200" title="Refresh Bank Feed">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="14"></span>
</button>
</div>
</div>

<div className="flex-1 overflow-auto relative">
<table className="w-full text-left border-collapse">
<thead className="bg-zinc-950 sticky top-0 z-10">
<tr>
<th className="py-2.5 pl-4 pr-3 border-b border-white/10 w-10">
<label className="custom-checkbox flex items-center justify-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-zinc-700 rounded bg-transparent transition-colors flex items-center justify-center hover:border-zinc-500">
<svg className="w-2.5 h-2.5 text-black hidden" fill="none" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</th>
<th className="py-2.5 px-3 border-b border-white/10 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Ref ID</th>
<th className="py-2.5 px-3 border-b border-white/10 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Date</th>
<th className="py-2.5 px-3 border-b border-white/10 text-[10px] font-medium text-zinc-500 uppercase tracking-wider w-1/3">Description</th>
<th className="py-2.5 px-3 border-b border-white/10 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Method</th>
<th className="py-2.5 px-3 border-b border-white/10 text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-right">Amount</th>
<th className="py-2.5 px-3 border-b border-white/10 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Bank Status</th>
<th className="py-2.5 px-3 border-b border-white/10 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-xs text-zinc-400">

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-4 pr-3">
<label className="custom-checkbox flex items-center justify-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-zinc-800 rounded bg-transparent transition-colors flex items-center justify-center group-hover:border-zinc-600">
<svg className="w-2.5 h-2.5 text-black hidden" fill="none" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</td>
<td className="px-3 font-mono text-zinc-600">SLS-1024</td>
<td className="px-3">Oct 24, 2023</td>
<td className="px-3 text-zinc-200 font-medium">Daily Lunch Sales - Terminal 1-3</td>
<td className="px-3">
<div className="inline-flex items-center gap-1.5 text-zinc-400">
<span className="iconify" data-icon="lucide:credit-card" data-width="12"></span>
                                            POS System
                                        </div>
</td>
<td className="px-3 text-right font-medium text-emerald-400">+$2,150.00</td>
<td className="px-3">
<div className="flex items-center gap-1.5 text-emerald-400">
<span className="iconify" data-icon="lucide:check-check" data-width="14"></span>
<span>Matched</span>
</div>
</td>
<td className="px-3 text-right">
<button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-all text-zinc-500 hover:text-zinc-200">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="14"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-4 pr-3">
<label className="custom-checkbox flex items-center justify-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-zinc-800 rounded bg-transparent transition-colors flex items-center justify-center group-hover:border-zinc-600">
<svg className="w-2.5 h-2.5 text-black hidden" fill="none" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</td>
<td className="px-3 font-mono text-zinc-600">INV-8922</td>
<td className="px-3">Oct 24, 2023</td>
<td className="px-3 text-zinc-200 font-medium">Sysco Food Services - Inv #9982</td>
<td className="px-3">
<div className="inline-flex items-center gap-1.5 text-zinc-400">
<span className="iconify" data-icon="lucide:file-text" data-width="12"></span>
                                            Invoice
                                        </div>
</td>
<td className="px-3 text-right font-medium text-zinc-200">-$1,240.50</td>
<td className="px-3">
<div className="flex items-center gap-1.5 text-orange-400">
<span className="iconify" data-icon="lucide:clock-4" data-width="14"></span>
<span>Pending Bank</span>
</div>
</td>
<td className="px-3 text-right">
<button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-all text-zinc-500 hover:text-zinc-200">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="14"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-4 pr-3">
<label className="custom-checkbox flex items-center justify-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-zinc-800 rounded bg-transparent transition-colors flex items-center justify-center group-hover:border-zinc-600">
<svg className="w-2.5 h-2.5 text-black hidden" fill="none" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</td>
<td className="px-3 font-mono text-zinc-600">CSH-0021</td>
<td className="px-3">Oct 23, 2023</td>
<td className="px-3 text-zinc-200 font-medium">Safe Drop - Cash Deposit (Tuck Shop)</td>
<td className="px-3">
<div className="inline-flex items-center gap-1.5 text-zinc-400">
<span className="iconify" data-icon="lucide:banknote" data-width="12"></span>
                                            Cash
                                        </div>
</td>
<td className="px-3 text-right font-medium text-emerald-400">+$450.00</td>
<td className="px-3">
<div className="flex items-center gap-1.5 text-emerald-400">
<span className="iconify" data-icon="lucide:check-check" data-width="14"></span>
<span>Matched</span>
</div>
</td>
<td className="px-3 text-right">
<button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-all text-zinc-500 hover:text-zinc-200">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="14"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-4 pr-3">
<label className="custom-checkbox flex items-center justify-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-zinc-800 rounded bg-transparent transition-colors flex items-center justify-center group-hover:border-zinc-600">
<svg className="w-2.5 h-2.5 text-black hidden" fill="none" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</td>
<td className="px-3 font-mono text-zinc-600">EXP-1102</td>
<td className="px-3">Oct 23, 2023</td>
<td className="px-3 text-zinc-200 font-medium">EcoPackaging Solutions - Cups/Cutlery</td>
<td className="px-3">
<div className="inline-flex items-center gap-1.5 text-zinc-400">
<span className="iconify" data-icon="lucide:credit-card" data-width="12"></span>
                                            Corp Card
                                        </div>
</td>
<td className="px-3 text-right font-medium text-zinc-200">-$299.50</td>
<td className="px-3">
<div className="flex items-center gap-1.5 text-emerald-400">
<span className="iconify" data-icon="lucide:check-check" data-width="14"></span>
<span>Matched</span>
</div>
</td>
<td className="px-3 text-right">
<button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-all text-zinc-500 hover:text-zinc-200">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="14"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-4 pr-3">
<label className="custom-checkbox flex items-center justify-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-zinc-800 rounded bg-transparent transition-colors flex items-center justify-center group-hover:border-zinc-600">
<svg className="w-2.5 h-2.5 text-black hidden" fill="none" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</td>
<td className="px-3 font-mono text-zinc-600">VND-0055</td>
<td className="px-3">Oct 22, 2023</td>
<td className="px-3 text-zinc-200 font-medium">Vending Machine Restock &amp; Revenue</td>
<td className="px-3">
<div className="inline-flex items-center gap-1.5 text-zinc-400">
<span className="iconify" data-icon="lucide:coins" data-width="12"></span>
                                            Coin Collection
                                        </div>
</td>
<td className="px-3 text-right font-medium text-emerald-400">+$180.25</td>
<td className="px-3">
<div className="flex items-center gap-1.5 text-orange-400">
<span className="iconify" data-icon="lucide:alert-circle" data-width="14"></span>
<span>Variance ($5)</span>
</div>
</td>
<td className="px-3 text-right">
<button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-all text-zinc-500 hover:text-zinc-200">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="14"></span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-3 border-t border-white/5 bg-zinc-900/10 flex items-center justify-between">
<span className="text-[10px] text-zinc-500">Displaying recent 5 of 842 records</span>
<div className="flex items-center gap-1">
<button className="h-6 px-2 rounded hover:bg-white/5 text-[10px] text-zinc-400 hover:text-zinc-200 disabled:opacity-50">Previous</button>
<button className="h-6 px-2 rounded hover:bg-white/5 text-[10px] text-zinc-400 hover:text-zinc-200">Next</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-500 pt-8 pb-4">
<div className="flex gap-4">
<a className="hover:text-zinc-300" href="#">Financial Reports</a>
<a className="hover:text-zinc-300" href="#">Inventory Logs</a>
</div>
<div className="md:text-right">
                        Accounting Period: <span className="text-zinc-300">Oct 1 - Oct 31</span>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
