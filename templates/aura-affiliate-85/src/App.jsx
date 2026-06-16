import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function switchTab(tabId) {
            // Hide all views
            const views = document.querySelectorAll('.view-section');
            views.forEach(view => {
                view.classList.add('hidden');
            });

            // Show selected view
            const selectedView = document.getElementById('view-' + tabId);
            if(selectedView) {
                selectedView.classList.remove('hidden');
            }

            // Update Nav Styles
            const navButtons = document.querySelectorAll('aside nav button');
            navButtons.forEach(btn => {
                // Reset to inactive style
                btn.className = "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors border border-transparent";
                
                // Remove the active orange icon color class from specific icons inside buttons if needed,
                // but simpler to just reset the button classes.
                const icon = btn.querySelector('svg');
                if(icon) icon.classList.remove('text-orange-500');
            });

            // Set active style
            const activeBtn = document.getElementById('nav-' + tabId);
            if(activeBtn) {
                activeBtn.className = "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/5 rounded-md border border-white/5 transition-all";
                const icon = activeBtn.querySelector('svg');
                if(icon) icon.classList.add('text-orange-500');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-neutral-950/50 flex flex-col shrink-0 sticky top-0 z-50 h-auto md:h-screen">
<div className="p-6 flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center text-white font-semibold tracking-tighter shadow-lg shadow-orange-900/20">
                A
            </div>
<span className="text-white font-medium tracking-tight text-lg">AURA</span>
</div>
<nav className="flex-1 overflow-y-auto pt-4 pr-4 pb-4 pl-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/5 rounded-md border border-white/5 transition-all" id="nav-dashboard" onclick="switchTab('dashboard')">
<i className="w-4 h-4 text-orange-500" data-lucide="layout-dashboard"></i>
                Dashboard
            </button>
<button className="w-full flex items-center gap-3 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium text-neutral-400 rounded-md py-2 px-3 border border-transparent" id="nav-payouts" onclick="switchTab('payouts')">
<i className="w-4 h-4" data-lucide="wallet"></i>
                Payouts
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors border border-transparent" id="nav-affiliates" onclick="switchTab('affiliates')">
<i className="w-4 h-4" data-lucide="users"></i>
                Affiliates
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors border border-transparent" id="nav-reports" onclick="switchTab('reports')">
<i className="w-4 h-4" data-lucide="pie-chart"></i>
                Reports
            </button>
<div className="pt-4 mt-4 border-t border-white/5">
<p className="px-3 text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Settings</p>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors border border-transparent" id="nav-settings" onclick="switchTab('settings')">
<i className="w-4 h-4" data-lucide="settings"></i>
                    General
                </button>
</div>
</nav>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs text-white">
                    JD
                </div>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-white">John Doe</span>
<span className="text-[10px] text-neutral-500">Premium Partner</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto h-screen scroll-smooth">
<div className="max-w-7xl mx-auto p-4 md:p-8">

<div className="view-section space-y-8 fade-in" id="view-dashboard">

<section className="rounded-xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 md:p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h2 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-2">Welcome back, John</h2>
<p className="text-sm text-neutral-400 max-w-xl">Your affiliate performance is trending up this week.</p>
</div>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                            Copy Link <i className="w-4 h-4" data-lucide="copy"></i>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
<h3 className="text-xs text-neutral-500 mb-1">Clicks Today</h3>
<div className="text-xl font-medium text-white">1,240</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
<h3 className="text-xs text-neutral-500 mb-1">Signups</h3>
<div className="text-xl font-medium text-white">42</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
<h3 className="text-xs text-neutral-500 mb-1">Pending Comm.</h3>
<div className="text-xl font-medium text-white">$340.50</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
<h3 className="text-xs text-neutral-500 mb-1">Next Payout</h3>
<div className="text-xl font-medium text-white">Nov 30</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-panel rounded-lg p-5">
<div className="flex justify-between items-start mb-4">
<p className="text-xs font-medium text-neutral-500">Total Earnings</p>
<span className="inline-flex items-center text-xs text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded">+12.5%</span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">$12,450.00</div>
</div>
<div className="glass-panel rounded-lg p-5">
<div className="flex justify-between items-start mb-4">
<p className="text-xs font-medium text-neutral-500">Conversions</p>
<span className="inline-flex items-center text-xs text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">+4.2%</span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">843</div>
</div>
<div className="glass-panel rounded-lg p-5">
<div className="flex justify-between items-start mb-4">
<p className="text-xs font-medium text-neutral-500">Total Clicks</p>
<span className="inline-flex items-center text-xs text-neutral-500 bg-neutral-500/10 px-1.5 py-0.5 rounded">0.0%</span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">45.2k</div>
</div>
<div className="glass-panel rounded-lg p-5">
<div className="flex justify-between items-start mb-4">
<p className="text-xs font-medium text-neutral-500">Conversion Rate</p>
<span className="inline-flex items-center text-xs text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">+1.1%</span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">1.86%</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 glass-panel rounded-xl p-6 flex flex-col h-full">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Revenue Overview</h3>
<div className="flex bg-neutral-900 rounded-md p-0.5 border border-white/5">
<button className="px-3 py-1 text-xs font-medium text-white bg-neutral-800 rounded shadow-sm">30d</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-neutral-300">3m</button>
</div>
</div>
<div className="relative flex-1 w-full min-h-[250px] flex items-end gap-1">
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
</div>
<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#f97316" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#f97316" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 200 C 50 200, 100 150, 150 160 S 250 220, 300 180 S 400 80, 500 100 S 600 140, 700 80 S 800 20, 1000 50 L 1000 250 L 0 250 Z" fill="url(#gradient)" stroke="none"></path>
<path d="M0 200 C 50 200, 100 150, 150 160 S 250 220, 300 180 S 400 80, 500 100 S 600 140, 700 80 S 800 20, 1000 50" fill="none" stroke="#f97316" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
<div className="flex justify-between text-[10px] text-neutral-600 mt-4 px-2">
<span>Nov 1</span><span>Nov 10</span><span>Nov 20</span><span>Nov 30</span>
</div>
</div>
<div className="lg:col-span-1 space-y-4">
<div className="glass-panel rounded-xl p-6 relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-sm font-medium text-neutral-400 mb-1">Available Balance</h3>
<div className="text-3xl font-medium text-white tracking-tight mb-6">$3,420.50</div>
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-emerald-500 uppercase tracking-wide">Cashout Available</span>
</div>
<button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium py-3 rounded-lg shadow-lg shadow-orange-900/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2" onclick="switchTab('payouts')">
                                    Withdraw Funds <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
<div className="glass-panel rounded-xl p-6">
<h3 className="text-sm font-medium text-white mb-3">Your Referral Link</h3>
<div className="flex gap-2">
<div className="relative flex-1 group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-neutral-500" data-lucide="link"></i>
</div>
<input className="w-full pl-9 pr-4 py-2.5 bg-neutral-900/50 border border-white/10 rounded-lg text-sm text-neutral-300 focus:outline-none focus:border-orange-500/50 transition-all font-mono" readonly="" type="text" value="aura.build/ref/johndoe88"/>
</div>
<button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg transition-colors flex items-center justify-center group">
<i className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" data-lucide="copy"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-8 fade-in" id="view-payouts">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">Payouts</h2>
<p className="text-sm text-neutral-400">Manage your withdrawal methods and view history.</p>
</div>
<button className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-orange-900/20 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i> Request Payout
                    </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 glass-panel rounded-xl p-6">
<h3 className="text-sm font-medium text-white mb-4">Active Payout Method</h3>
<div className="p-4 rounded-lg bg-neutral-900/50 border border-white/10 mb-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<i className="w-5 h-5" data-lucide="bitcoin"></i>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-white">USDT (TRC20)</p>
<p className="text-xs text-neutral-500 truncate font-mono">TVj...8xPz</p>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
<button className="w-full py-2 text-xs font-medium text-neutral-400 hover:text-white border border-white/5 hover:bg-white/5 rounded-lg transition-colors">
                            Change Method
                        </button>
</div>

<div className="lg:col-span-2 glass-panel rounded-xl p-6 flex items-center justify-between gap-4">
<div className="flex-1">
<p className="text-xs text-neutral-500 mb-1">Pending Amount</p>
<p className="text-2xl font-medium text-white">$2,100.00</p>
</div>
<div className="w-px h-12 bg-white/5"></div>
<div className="flex-1">
<p className="text-xs text-neutral-500 mb-1">Total Withdrawn</p>
<p className="text-2xl font-medium text-white">$45,230.50</p>
</div>
<div className="w-px h-12 bg-white/5"></div>
<div className="flex-1">
<p className="text-xs text-neutral-500 mb-1">Last Payout</p>
<p className="text-2xl font-medium text-white">Oct 24</p>
</div>
</div>
</div>

<div className="glass-panel rounded-xl border border-white/10 overflow-hidden">
<div className="p-6 border-b border-white/5">
<h3 className="text-sm font-medium text-white">Withdrawal History</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-white/[0.02] border-b border-white/5">
<th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">ID</th>
<th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
<th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Amount</th>
<th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider text-right">Invoice</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-xs font-mono text-neutral-500">#TRX-8823</td>
<td className="px-6 py-4 text-sm text-neutral-300">Oct 24, 2023</td>
<td className="px-6 py-4 text-sm font-medium text-white">$1,250.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Paid</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-neutral-500 hover:text-white"><i className="w-4 h-4" data-lucide="download"></i></button>
</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-xs font-mono text-neutral-500">#TRX-7741</td>
<td className="px-6 py-4 text-sm text-neutral-300">Oct 10, 2023</td>
<td className="px-6 py-4 text-sm font-medium text-white">$850.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Paid</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-neutral-500 hover:text-white"><i className="w-4 h-4" data-lucide="download"></i></button>
</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-xs font-mono text-neutral-500">#TRX-6620</td>
<td className="px-6 py-4 text-sm text-neutral-300">Sep 28, 2023</td>
<td className="px-6 py-4 text-sm font-medium text-white">$2,100.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">Processing</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-neutral-500 hover:text-white"><i className="w-4 h-4" data-lucide="download"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden space-y-8 fade-in" id="view-affiliates">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">Referrals</h2>
<p className="text-sm text-neutral-400">Track users who signed up using your link.</p>
</div>
<div className="relative w-full md:w-64">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" data-lucide="search"></i>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-colors" placeholder="Search user or email..." type="text"/>
</div>
</div>
<div className="glass-panel rounded-xl border border-white/10 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-white/[0.02] border-b border-white/5">
<th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">User</th>
<th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Date Joined</th>
<th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Plan</th>
<th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Lifetime Rev.</th>
<th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Commission</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-medium">JD</div>
<div className="flex flex-col">
<span className="text-sm text-white">james.d@example.com</span>
<span className="text-[10px] text-neutral-500">ID: 88321</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-neutral-400">Nov 12, 2023</td>
<td className="px-6 py-4"><span className="text-xs bg-white/10 text-white px-2 py-1 rounded">Pro</span></td>
<td className="px-6 py-4 text-sm text-neutral-300">$2,400</td>
<td className="px-6 py-4 text-sm font-medium text-emerald-500">+$240.00</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-medium">SK</div>
<div className="flex flex-col">
<span className="text-sm text-white">sarah.k@example.com</span>
<span className="text-[10px] text-neutral-500">ID: 99421</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-neutral-400">Nov 10, 2023</td>
<td className="px-6 py-4"><span className="text-xs bg-white/10 text-white px-2 py-1 rounded">Starter</span></td>
<td className="px-6 py-4 text-sm text-neutral-300">$150</td>
<td className="px-6 py-4 text-sm font-medium text-emerald-500">+$15.00</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-medium">MK</div>
<div className="flex flex-col">
<span className="text-sm text-white">mike.k@example.com</span>
<span className="text-[10px] text-neutral-500">ID: 77210</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-neutral-400">Nov 08, 2023</td>
<td className="px-6 py-4"><span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded border border-orange-500/20">Enterprise</span></td>
<td className="px-6 py-4 text-sm text-neutral-300">$12,000</td>
<td className="px-6 py-4 text-sm font-medium text-emerald-500">+$1,200.00</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden space-y-8 fade-in" id="view-reports">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">Reports</h2>
<p className="text-sm text-neutral-400">Deep dive into your traffic and conversion metrics.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel rounded-xl p-6">
<h3 className="text-sm font-medium text-white mb-6">Traffic Sources</h3>
<div className="space-y-4">
<div className="flex items-center gap-4">
<span className="text-sm text-neutral-400 w-24">Direct</span>
<div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[65%]"></div>
</div>
<span className="text-sm text-white font-medium">65%</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm text-neutral-400 w-24">Social</span>
<div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-600/60 w-[20%]"></div>
</div>
<span className="text-sm text-white font-medium">20%</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm text-neutral-400 w-24">Organic</span>
<div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-700/40 w-[10%]"></div>
</div>
<span className="text-sm text-white font-medium">10%</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm text-neutral-400 w-24">Referral</span>
<div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-700 w-[5%]"></div>
</div>
<span className="text-sm text-white font-medium">5%</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6 flex flex-col justify-between">
<div>
<h3 className="text-sm font-medium text-white mb-2">Conversion Funnel</h3>
<p className="text-xs text-neutral-500 mb-6">Last 30 days performance</p>
</div>
<div className="flex items-end justify-between gap-2 h-40">
<div className="w-full bg-neutral-800/50 rounded-t-sm h-[100%] relative group">
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">45k</div>
</div>
<div className="w-full bg-neutral-800/50 rounded-t-sm h-[60%] relative group">
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">25k</div>
</div>
<div className="w-full bg-orange-900/30 rounded-t-sm h-[30%] relative group">
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">12k</div>
</div>
<div className="w-full bg-orange-600/80 rounded-t-sm h-[15%] relative group">
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">843</div>
</div>
</div>
<div className="flex justify-between text-[10px] text-neutral-500 mt-2">
<span>Views</span>
<span>Clicks</span>
<span>Signups</span>
<span>Paid</span>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-8 fade-in" id="view-settings">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">Settings</h2>
<p className="text-sm text-neutral-400">Manage account preferences and security.</p>
</div>
<div className="max-w-2xl space-y-6">

<div className="glass-panel rounded-xl p-6">
<h3 className="text-sm font-medium text-white mb-6 pb-4 border-b border-white/5">Profile Information</h3>
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xl text-white">
                                JD
                            </div>
<div className="flex-1 space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">First Name</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-colors" type="text" value="John"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Last Name</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-colors" type="text" value="Doe"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Email Address</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-colors" type="email" value="john.doe@example.com"/>
</div>
<div className="pt-2">
<button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-neutral-200 transition-colors">Save Changes</button>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6">
<h3 className="text-sm font-medium text-white mb-6 pb-4 border-b border-white/5">Notifications</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-white">Email Notifications</p>
<p className="text-xs text-neutral-500">Receive emails about new payouts.</p>
</div>
<div className="w-10 h-6 bg-orange-600 rounded-full p-1 cursor-pointer flex justify-end">
<div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-white">Marketing Updates</p>
<p className="text-xs text-neutral-500">Receive news about product updates.</p>
</div>
<div className="w-10 h-6 bg-neutral-800 rounded-full p-1 cursor-pointer flex justify-start">
<div className="w-4 h-4 bg-neutral-500 rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
