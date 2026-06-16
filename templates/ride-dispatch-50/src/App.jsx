import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Interaction to simulate selecting a passenger
        const rows = document.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('click', () => {
                // remove selected style from all
                rows.forEach(r => {
                    r.classList.remove('bg-blue-50/30', 'border-l-[#006C35]');
                    r.classList.add('border-l-transparent');
                    r.querySelector('input[type="checkbox"]').checked = false;
                });
                // add to clicked
                row.classList.add('bg-blue-50/30', 'border-l-[#006C35]');
                row.classList.remove('border-l-transparent');
                row.querySelector('input[type="checkbox"]').checked = true;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-16 lg:w-64 bg-white border-r border-slate-200 flex flex-col z-20 transition-all duration-300">

<div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-slate-100">
<div className="w-8 h-8 rounded bg-[#006C35] flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:steering-wheel-linear" width="20"></iconify-icon>
</div>
<span className="hidden lg:block ml-3 font-semibold text-slate-900 tracking-tight">Najd Rides</span>
</div>

<nav className="flex-1 py-6 space-y-1 px-3">
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:map-point-wave-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="hidden lg:block text-sm">Live Dispatch</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="hidden lg:block text-sm">Drivers</span>
</a>

<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#006C35]/5 text-[#006C35] font-medium transition-colors" href="#">
<iconify-icon icon="solar:user-hand-up-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="hidden lg:block text-sm">Passengers</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:bill-list-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="hidden lg:block text-sm">Transactions</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="hidden lg:block text-sm">Analytics</span>
</a>
</nav>

<div className="p-4 border-t border-slate-100">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="hidden lg:block text-sm">Settings</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 shadow-sm shrink-0">

<div className="flex items-center gap-4">
<h1 className="text-lg font-semibold text-slate-900 tracking-tight">Passenger Management</h1>
<div className="h-4 w-px bg-slate-200"></div>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-500">Total Users:</span>
<span className="text-sm font-semibold text-slate-900">24,892</span>
<span className="text-xs text-[#006C35] bg-green-50 px-1.5 py-0.5 rounded ml-1">+12%</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg w-64 focus:outline-none focus:border-[#006C35] focus:ring-1 focus:ring-[#006C35] transition-all placeholder-slate-400 text-slate-700 bg-slate-50" placeholder="Search name, phone..." type="text"/>
</div>
<button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-slate-200">
<div className="h-9 w-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-medium">
                        AD
                    </div>
</div>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 flex flex-col bg-slate-50 overflow-hidden">

<div className="px-6 py-6 grid grid-cols-4 gap-4 shrink-0">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Active Today</p>
<h3 className="text-2xl font-bold text-slate-900 mt-1">1,204</h3>
</div>
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">New Signups</p>
<h3 className="text-2xl font-bold text-slate-900 mt-1">48</h3>
</div>
<div className="p-2 bg-emerald-50 text-[#006C35] rounded-lg">
<iconify-icon icon="solar:user-plus-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Avg Rating</p>
<h3 className="text-2xl font-bold text-slate-900 mt-1">4.82</h3>
</div>
<div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Churn Risk</p>
<h3 className="text-2xl font-bold text-slate-900 mt-1">2.4%</h3>
</div>
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<iconify-icon icon="solar:chart-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="px-6 pb-4 flex items-center justify-between shrink-0">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">All Users</button>
<button className="px-3 py-1.5 bg-transparent border border-transparent rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-200/50">VIP</button>
<button className="px-3 py-1.5 bg-transparent border border-transparent rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-200/50">Blocked</button>
<div className="h-4 w-px bg-slate-300 mx-1"></div>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-transparent border border-transparent rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-200/50">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
                            Filter
                        </button>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
<iconify-icon icon="solar:export-linear" width="16"></iconify-icon>
                            Export
                        </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-[#006C35] text-white rounded-lg text-sm font-medium shadow-sm hover:bg-[#00572b] transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                            Add Passenger
                        </button>
</div>
</div>

<div className="flex-1 overflow-auto px-6 pb-6">
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden min-w-[800px]">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 uppercase tracking-wider">
<th className="p-4 w-10">
<input className="custom-checkbox" type="checkbox"/>
</th>
<th className="p-4 font-semibold">User Details</th>
<th className="p-4 font-semibold">Status</th>
<th className="p-4 font-semibold">Total Rides</th>
<th className="p-4 font-semibold">Rating</th>
<th className="p-4 font-semibold">Joined Date</th>
<th className="p-4 font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="bg-blue-50/30 hover:bg-slate-50 transition-colors group cursor-pointer border-l-2 border-l-[#006C35]">
<td className="p-4">
<input checked="" className="custom-checkbox" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-200 overflow-hidden shrink-0">
<img alt="Avatar" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nora"/>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Nora Al-Fahad</p>
<p className="text-xs text-slate-500">+966 54 882 1920</p>
</div>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Active
                                        </span>
</td>
<td className="p-4">
<div className="text-sm text-slate-700 font-medium">142</div>
<div className="text-[10px] text-slate-400">Last ride 2h ago</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1 text-sm text-slate-700">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="14"></iconify-icon>
<span className="font-semibold">4.9</span>
</div>
</td>
<td className="p-4">
<span className="text-sm text-slate-600">Oct 24, 2023</span>
</td>
<td className="p-4 text-right">
<button className="text-slate-400 hover:text-[#006C35] transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors group cursor-pointer border-l-2 border-l-transparent">
<td className="p-4">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs shrink-0">
                                                OA
                                            </div>
<div>
<p className="text-sm font-semibold text-slate-900">Omar Abdullah</p>
<p className="text-xs text-slate-500">omar.ab@example.com</p>
</div>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Active
                                        </span>
</td>
<td className="p-4">
<div className="text-sm text-slate-700 font-medium">8</div>
<div className="text-[10px] text-slate-400">New user</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1 text-sm text-slate-700">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="14"></iconify-icon>
<span className="font-semibold">5.0</span>
</div>
</td>
<td className="p-4">
<span className="text-sm text-slate-600">Oct 28, 2023</span>
</td>
<td className="p-4 text-right">
<button className="text-slate-400 hover:text-[#006C35] transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors group cursor-pointer border-l-2 border-l-transparent">
<td className="p-4">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-200 overflow-hidden shrink-0">
<img alt="Avatar" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack"/>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Yousef Kamal</p>
<p className="text-xs text-slate-500">+966 56 111 2222</p>
</div>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                            Suspended
                                        </span>
</td>
<td className="p-4">
<div className="text-sm text-slate-700 font-medium">24</div>
<div className="text-[10px] text-slate-400">Payment failed</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1 text-sm text-slate-700">
<iconify-icon className="text-slate-300" icon="solar:star-bold" width="14"></iconify-icon>
<span className="font-semibold">3.2</span>
</div>
</td>
<td className="p-4">
<span className="text-sm text-slate-600">Sep 12, 2023</span>
</td>
<td className="p-4 text-right">
<button className="text-slate-400 hover:text-[#006C35] transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors group cursor-pointer border-l-2 border-l-transparent">
<td className="p-4">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs shrink-0 ring-2 ring-white ring-offset-2 ring-offset-indigo-100">
                                                LB
                                            </div>
<div>
<div className="flex items-center gap-1">
<p className="text-sm font-semibold text-slate-900">Layla Bint</p>
<iconify-icon className="text-indigo-500" icon="solar:crown-star-bold" width="12"></iconify-icon>
</div>
<p className="text-xs text-slate-500">VIP Member</p>
</div>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Active
                                        </span>
</td>
<td className="p-4">
<div className="text-sm text-slate-700 font-medium">356</div>
<div className="text-[10px] text-slate-400">Top rider</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1 text-sm text-slate-700">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="14"></iconify-icon>
<span className="font-semibold">4.95</span>
</div>
</td>
<td className="p-4">
<span className="text-sm text-slate-600">Jan 15, 2023</span>
</td>
<td className="p-4 text-right">
<button className="text-slate-400 hover:text-[#006C35] transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors group cursor-pointer border-l-2 border-l-transparent">
<td className="p-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs shrink-0">SA</div>
<div><p className="text-sm font-semibold text-slate-900">Saad Al-Ghamdi</p><p className="text-xs text-slate-500">+966 59 000 1111</p></div>
</div>
</td>
<td className="p-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Active</span></td>
<td className="p-4"><div className="text-sm text-slate-700 font-medium">45</div><div className="text-[10px] text-slate-400">Regular</div></td>
<td className="p-4"><div className="flex items-center gap-1 text-sm text-slate-700"><iconify-icon className="text-yellow-400" icon="solar:star-bold" width="14"></iconify-icon><span className="font-semibold">4.6</span></div></td>
<td className="p-4"><span className="text-sm text-slate-600">Aug 2, 2023</span></td>
<td className="p-4 text-right"><button className="text-slate-400 hover:text-[#006C35] transition-colors"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="w-96 bg-white border-l border-slate-200 z-10 flex flex-col shadow-xl">

<div className="relative h-24 bg-slate-100 border-b border-slate-200 shrink-0">
<div className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 cursor-pointer p-1">
<iconify-icon icon="solar:close-square-linear" width="20"></iconify-icon>
</div>
<div className="absolute -bottom-8 left-6">
<div className="h-16 w-16 rounded-full border-4 border-white bg-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
<img alt="Avatar" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nora"/>
</div>
</div>
</div>

<div className="mt-10 px-6 pb-6 border-b border-slate-100">
<div className="flex justify-between items-start">
<div>
<h2 className="text-xl font-bold text-slate-900">Nora Al-Fahad</h2>
<p className="text-sm text-slate-500">Riyadh, Saudi Arabia</p>
</div>
<div className="flex gap-1">
<button className="p-2 rounded-full border border-slate-200 text-slate-500 hover:text-[#006C35] hover:border-[#006C35] transition-all">
<iconify-icon icon="solar:pen-new-square-linear" width="16"></iconify-icon>
</button>
<button className="p-2 rounded-full border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all">
<iconify-icon icon="solar:chat-line-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-6">
<div className="p-3 rounded-lg border border-slate-100 bg-slate-50">
<div className="text-xs text-slate-500 mb-1">Total Spent</div>
<div className="text-sm font-bold text-slate-900">SAR 2,450</div>
</div>
<div className="p-3 rounded-lg border border-slate-100 bg-slate-50">
<div className="text-xs text-slate-500 mb-1">Rides This Month</div>
<div className="text-sm font-bold text-slate-900">12</div>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>+966 54 882 1920</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:letter-linear" width="18"></iconify-icon>
<span>nora.fahad@gmail.com</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6">

<div>
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-4">Recent Activity</h4>
<div className="relative pl-4 border-l border-slate-200 space-y-6">

<div className="relative">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-white border-2 border-emerald-500"></div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-slate-900">Ride Completed</p>
<p className="text-xs text-slate-500">To Kingdom Centre • SAR 45.00</p>
</div>
<span className="text-[10px] text-slate-400">2h ago</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-white border-2 border-slate-300"></div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-slate-900">Ride Scheduled</p>
<p className="text-xs text-slate-500">Tomorrow, 08:00 AM • Airport</p>
</div>
<span className="text-[10px] text-slate-400">5h ago</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-white border-2 border-slate-300"></div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-slate-900">Wallet Top-up</p>
<p className="text-xs text-slate-500">via Apple Pay • SAR 100.00</p>
</div>
<span className="text-[10px] text-slate-400">1d ago</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Payment Methods</h4>
<button className="text-xs text-[#006C35] hover:underline">Manage</button>
</div>
<div className="p-3 border border-slate-200 rounded-lg flex items-center gap-3">
<div className="w-10 h-7 bg-slate-100 rounded border border-slate-200 flex items-center justify-center">
<iconify-icon icon="logos:visa" width="24"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-slate-900">Visa ending in 4242</p>
<p className="text-[10px] text-slate-500">Expires 12/25</p>
</div>
<span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Default</span>
</div>
</div>

<div>
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">Staff Notes</h4>
<div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-xs text-yellow-800 leading-relaxed">
                            Customer prefers quiet rides. Usually tips well. Handle complaints with priority.
                        </div>
</div>
</div>

<div className="p-4 border-t border-slate-200 bg-slate-50 shrink-0">
<button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-red-200 text-red-600 bg-white hover:bg-red-50 text-sm font-medium transition-colors">
<iconify-icon icon="solar:forbidden-circle-linear" width="18"></iconify-icon>
                        Suspend User
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
