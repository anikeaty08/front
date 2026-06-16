import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple script to handle visual state of row when checkbox is clicked
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const row = this.closest('tr');
                const textElements = row.querySelectorAll('span.text-base.font-medium, div.flex.flex-col > span.text-sm');
                const iconContainer = row.querySelector('.w-8.h-8.rounded');
                const statusCell = row.querySelector('td:nth-last-child(2)');

                if (this.checked) {
                    // Visual changes for "Paid" state
                    textElements.forEach(el => {
                        el.classList.add('line-through', 'text-zinc-400');
                        el.classList.remove('text-zinc-200', 'text-red-400');
                    });
                    if(iconContainer) iconContainer.parentElement.classList.add('opacity-60');
                    
                    // Update Status Badge visually (demo purpose)
                    statusCell.innerHTML = `
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <iconify-icon icon="solar:check-circle-linear" class="text-sm"></iconify-icon>
                            Paid
                        </span>
                    `;
                } else {
                    // Reset to unpaid state (simplistic reset for demo)
                    textElements.forEach(el => {
                        el.classList.remove('line-through', 'text-zinc-400');
                        el.classList.add('text-zinc-200');
                    });
                    if(iconContainer) iconContainer.parentElement.classList.remove('opacity-60');
                    
                    statusCell.innerHTML = `
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-[#3f3f46]">
                            <span class="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                            Pending
                        </span>
                    `;
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-[#111113] border-r border-[#222225] hidden md:flex flex-col h-full flex-shrink-0">

<div className="h-16 flex items-center px-6 border-b border-[#222225]">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-[#d1f045] rounded flex items-center justify-center">
<iconify-icon className="text-base text-[#0a0a0b]" icon="solar:wallet-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-white tracking-tight">BillTrack</span>
</div>
<button className="ml-auto text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:double-alt-arrow-left-linear"></iconify-icon>
</button>
</div>
<div className="p-4 flex-1 overflow-y-auto space-y-6">

<div className="relative">
<iconify-icon className="text-lg absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-[#1a1a1c] border border-[#27272a] rounded-lg pl-9 pr-3 py-2 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors" placeholder="Search Anything..." type="text"/>
</div>

<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 px-2">Menu</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#1e1e21] text-zinc-100 font-medium text-sm transition-colors border border-[#2d2d31]" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear"></iconify-icon>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-[#1a1a1c] text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
                        Reminders
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-[#1a1a1c] text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
                        Analytics
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-[#1a1a1c] text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:bill-list-linear"></iconify-icon>
                        All Bills
                    </a>
</nav>
</div>

<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 px-2">Tools</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-[#1a1a1c] text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
                        Settings
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-[#1a1a1c] text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:question-circle-linear"></iconify-icon>
                        Help Center
                    </a>
</nav>
</div>
</div>

<div className="p-4 mt-auto">
<div className="relative overflow-hidden rounded-xl border border-[#27272a] bg-[#161618] p-4">
<div className="absolute inset-0 bg-gradient-to-br from-[#d1f045]/10 to-transparent opacity-50"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-[#d1f045]" icon="solar:bolt-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Upgrade Pro!</span>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<p className="text-sm text-zinc-400 mb-4 leading-relaxed">Upgrade to Pro and elevate your experience today</p>
<div className="flex items-center gap-3">
<button className="bg-[#d1f045] text-[#0a0a0b] text-sm font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5 hover:bg-[#c4e33b] transition-colors">
<iconify-icon className="text-base" icon="solar:stars-linear"></iconify-icon>
                            Upgrade
                        </button>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Learn more</a>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 h-full">

<header className="h-16 flex items-center justify-between px-6 border-b border-[#222225] bg-[#0a0a0b] flex-shrink-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<h1 className="text-lg font-medium text-white tracking-tight">Dashboard</h1>
</div>
<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded-full bg-[#111113] border border-[#222225] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#3f3f46] transition-colors">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-[#111113] border border-[#222225] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#3f3f46] transition-colors relative">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#d1f045] rounded-full"></span>
</button>
<button className="w-8 h-8 rounded-full bg-[#111113] border border-[#222225] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#3f3f46] transition-colors overflow-hidden">
<iconify-icon className="text-lg" icon="solar:user-circle-linear"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-6">

<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-2 bg-[#161618] border border-[#27272a] rounded-md text-sm text-zinc-300 hover:bg-[#1c1c1e] hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                        Generate Report
                    </button>
<button className="flex items-center gap-2 px-3 py-2 bg-[#161618] border border-[#27272a] rounded-md text-sm text-zinc-300 hover:bg-[#1c1c1e] hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:download-linear"></iconify-icon>
                        Export
                    </button>
</div>
<div className="w-full sm:w-auto relative">
<iconify-icon className="text-lg absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full sm:w-64 bg-[#161618] border border-[#27272a] rounded-md pl-9 pr-3 py-2 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors" placeholder="Search Bills..." type="text"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

<div className="bg-[#111113] border border-[#222225] rounded-xl p-5 relative overflow-hidden flex flex-col justify-between h-32">
<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
<div>
<p className="text-sm text-zinc-400 mb-1">Total Unpaid This Month</p>
<h2 className="text-2xl font-medium text-white tracking-tight">$845.00</h2>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon>
<span>3 bills pending</span>
</div>
</div>

<div className="bg-[#111113] border border-[#222225] rounded-xl p-5 relative overflow-hidden flex flex-col justify-between h-32">
<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
<div>
<p className="text-sm text-zinc-400 mb-1">Total Paid This Month</p>
<h2 className="text-2xl font-medium text-white tracking-tight">$1,230.50</h2>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
<span>5 bills settled</span>
</div>
</div>

<div className="bg-[#111113] border border-[#222225] rounded-xl p-5 relative overflow-hidden flex flex-col justify-between h-32">
<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
<div>
<p className="text-sm text-zinc-400 mb-1">Due in Next 7 Days</p>
<h2 className="text-2xl font-medium text-white tracking-tight">$145.00</h2>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-sm" icon="solar:calendar-linear"></iconify-icon>
<span>1 upcoming bill</span>
</div>
</div>
</div>

<div className="bg-[#111113] border border-[#222225] rounded-xl overflow-hidden flex flex-col">

<div className="p-5 border-b border-[#222225] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h3 className="text-base font-medium text-white tracking-tight">Upcoming &amp; Recent Bills</h3>
<p className="text-sm text-zinc-500 mt-1">Manage and track your recurring payments.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1c] border border-[#2d2d31] rounded-md text-sm text-zinc-300 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:filter-linear"></iconify-icon>
                            Filter
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-[#d1f045] text-[#0a0a0b] rounded-md text-sm font-medium hover:bg-[#c4e33b] transition-colors shadow-[0_0_15px_rgba(209,240,69,0.15)]">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                            Add Bill
                        </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-[#222225] bg-[#0a0a0b]/50">
<th className="py-3 px-5 text-sm font-medium text-zinc-500 w-12">Paid</th>
<th className="py-3 px-5 text-sm font-medium text-zinc-500">Bill Name</th>
<th className="py-3 px-5 text-sm font-medium text-zinc-500">Category</th>
<th className="py-3 px-5 text-sm font-medium text-zinc-500">Amount</th>
<th className="py-3 px-5 text-sm font-medium text-zinc-500">Due Date</th>
<th className="py-3 px-5 text-sm font-medium text-zinc-500">Status</th>
<th className="py-3 px-5 text-sm font-medium text-zinc-500 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-[#222225]">

<tr className="hover:bg-[#161618] transition-colors group">
<td className="py-4 px-5">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox" />
<div className="w-5 h-5 rounded-[4px] border border-[#3f3f46] bg-[#1a1a1c] peer-checked:bg-[#d1f045] peer-checked:border-[#d1f045] transition-all flex items-center justify-center">
<iconify-icon className="text-sm text-[#0a0a0b] opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-200" icon="solar:check-read-linear"></iconify-icon>
</div>
</input></label>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-yellow-500/10 text-yellow-500 flex items-center justify-center border border-yellow-500/20">
<iconify-icon className="text-lg" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-base text-zinc-200 font-medium">Electricity</span>
</div>
</td>
<td className="py-4 px-5 text-sm text-zinc-400">Utilities</td>
<td className="py-4 px-5 text-base text-zinc-200 font-medium">$145.00</td>
<td className="py-4 px-5">
<div className="flex flex-col">
<span className="text-sm text-zinc-200">Oct 30, 2023</span>
<span className="text-xs text-zinc-500">Every 30th</span>
</div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-[#3f3f46]">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                                        Pending
                                    </span>
</td>
<td className="py-4 px-5 text-right">
<button className="text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-xl" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-[#161618] transition-colors group">
<td className="py-4 px-5">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox" />
<div className="w-5 h-5 rounded-[4px] border border-[#3f3f46] bg-[#1a1a1c] peer-checked:bg-[#d1f045] peer-checked:border-[#d1f045] transition-all flex items-center justify-center">
<iconify-icon className="text-sm text-[#0a0a0b] opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-200" icon="solar:check-read-linear"></iconify-icon>
</div>
</input></label>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-red-500/10 text-red-500 flex items-center justify-center border border-red-500/20">
<iconify-icon className="text-lg" icon="solar:home-2-linear"></iconify-icon>
</div>
<span className="text-base text-zinc-200 font-medium">Apartment Rent</span>
</div>
</td>
<td className="py-4 px-5 text-sm text-zinc-400">Housing</td>
<td className="py-4 px-5 text-base text-zinc-200 font-medium">$700.00</td>
<td className="py-4 px-5">
<div className="flex flex-col">
<span className="text-sm text-red-400">Oct 25, 2023</span>
<span className="text-xs text-zinc-500">Every 25th</span>
</div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                        Overdue
                                    </span>
</td>
<td className="py-4 px-5 text-right">
<button className="text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-xl" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-[#161618] transition-colors group">
<td className="py-4 px-5">
<label className="relative flex items-center cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-[4px] border border-[#3f3f46] bg-[#1a1a1c] peer-checked:bg-[#d1f045] peer-checked:border-[#d1f045] transition-all flex items-center justify-center">
<iconify-icon className="text-sm text-[#0a0a0b] opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-200" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-3 opacity-60">
<div className="w-8 h-8 rounded bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
</div>
<span className="text-base text-zinc-400 font-medium line-through">Internet Bill</span>
</div>
</td>
<td className="py-4 px-5 text-sm text-zinc-500">Subscriptions</td>
<td className="py-4 px-5 text-base text-zinc-500 font-medium">$65.00</td>
<td className="py-4 px-5">
<div className="flex flex-col opacity-60">
<span className="text-sm text-zinc-400">Oct 15, 2023</span>
<span className="text-xs text-zinc-600">Paid on Oct 14</span>
</div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
                                        Paid
                                    </span>
</td>
<td className="py-4 px-5 text-right">
<button className="text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-xl" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-[#161618] transition-colors group">
<td className="py-4 px-5">
<label className="relative flex items-center cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-[4px] border border-[#3f3f46] bg-[#1a1a1c] peer-checked:bg-[#d1f045] peer-checked:border-[#d1f045] transition-all flex items-center justify-center">
<iconify-icon className="text-sm text-[#0a0a0b] opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-200" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-3 opacity-60">
<div className="w-8 h-8 rounded bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
<iconify-icon className="text-lg" icon="solar:tv-linear"></iconify-icon>
</div>
<span className="text-base text-zinc-400 font-medium line-through">Netflix</span>
</div>
</td>
<td className="py-4 px-5 text-sm text-zinc-500">Subscriptions</td>
<td className="py-4 px-5 text-base text-zinc-500 font-medium">$15.99</td>
<td className="py-4 px-5">
<div className="flex flex-col opacity-60">
<span className="text-sm text-zinc-400">Oct 12, 2023</span>
<span className="text-xs text-zinc-600">Auto-paid</span>
</div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
                                        Paid
                                    </span>
</td>
<td className="py-4 px-5 text-right">
<button className="text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-xl" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t border-[#222225] flex items-center justify-between text-sm text-zinc-500 bg-[#0a0a0b]/30">
<div>Showing 1 to 4 of 12 entries</div>
<div className="flex items-center gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#1a1a1c] hover:text-white transition-colors border border-transparent hover:border-[#2d2d31]">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1a1a1c] text-white border border-[#2d2d31]">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#1a1a1c] hover:text-white transition-colors border border-transparent hover:border-[#2d2d31]">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#1a1a1c] hover:text-white transition-colors border border-transparent hover:border-[#2d2d31]">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#1a1a1c] hover:text-white transition-colors border border-transparent hover:border-[#2d2d31]">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
