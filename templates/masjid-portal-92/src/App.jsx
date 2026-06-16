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
      

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col flex-shrink-0 z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold text-sm tracking-tighter">
                    MP
                </div>
<span className="font-semibold text-gray-900 tracking-tight">Masjid Portal</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="solar:home-smile-linear" width="20"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="solar:notes-linear" width="20"></iconify-icon>
                Registration Form
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                Committee
            </a>
<div className="pt-4 pb-2">
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Inventory &amp; Funds</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
                Stock Details
            </a>

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-gray-50 text-emerald-700 group" href="#">
<iconify-icon className="text-emerald-600" icon="solar:hand-money-linear" width="20"></iconify-icon>
                Distribution
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors">
<iconify-icon icon="solar:logout-2-linear" width="20"></iconify-icon>
                Logout
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 md:px-8 z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-sm text-gray-500">
<span className="hover:text-gray-900 cursor-pointer">Funds</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="font-semibold text-gray-900 tracking-tight">Distribution Logs</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-1.5 rounded-lg shadow-sm transition-colors flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                    New Distribution
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-gray-50">
<div className="max-w-6xl mx-auto px-6 py-8 md:px-8 md:py-10 space-y-8">

<div className="flex flex-col gap-1">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Distribution Records</h1>
<p className="text-sm text-gray-500">Manage charity (Zakat, Sadaqah) distributions and assistance records.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Funds Distributed</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">$12,450</h3>
<p className="text-xs text-emerald-600 mt-2 flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
<span>+18% vs last month</span>
</p>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Families Aided</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">84</h3>
<p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
<span>Across 4 neighborhoods</span>
</p>
</div>
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Pending Approval</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">6</h3>
<p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
<span>Requires committee review</span>
</p>
</div>
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
<iconify-icon icon="solar:clipboard-list-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">

<div className="px-5 py-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">

<div className="relative w-full md:w-80">
<iconify-icon className="absolute left-3 top-2.5 text-gray-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all" placeholder="Search recipient or file number..." type="text"/>
</div>

<div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
<button className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-medium whitespace-nowrap">All Records</button>
<button className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-50 text-xs font-medium border border-transparent hover:border-gray-200 transition-all whitespace-nowrap">Zakat</button>
<button className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-50 text-xs font-medium border border-transparent hover:border-gray-200 transition-all whitespace-nowrap">Sadaqah</button>
<button className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-50 text-xs font-medium border border-transparent hover:border-gray-200 transition-all whitespace-nowrap">Food Packs</button>
<div className="h-4 w-px bg-gray-200 mx-1"></div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-medium transition-all">
<iconify-icon icon="solar:calendar-date-linear" width="14"></iconify-icon>
                                Date
                            </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-100 text-xs font-medium text-gray-500 uppercase tracking-wider">
<th className="px-6 py-3">Recipient</th>
<th className="px-6 py-3">Type</th>
<th className="px-6 py-3">Date</th>
<th className="px-6 py-3">Amount / Items</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="table-row-hover group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center border border-gray-200 font-semibold text-xs">
                                                AH
                                            </div>
<div>
<p className="text-sm font-medium text-gray-900">Ahmed Hassan</p>
<p className="text-xs text-gray-400">File: ZK-2023-04</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                            Zakat Fund
                                        </span>
</td>
<td className="px-6 py-4">
<p className="text-sm text-gray-600">Oct 24, 2023</p>
</td>
<td className="px-6 py-4">
<p className="text-sm font-medium text-gray-900">$450.00</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Distributed
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors p-1">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="table-row-hover group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center border border-gray-200 font-semibold text-xs">
                                                FK
                                            </div>
<div>
<p className="text-sm font-medium text-gray-900">Fatima Karim</p>
<p className="text-xs text-gray-400">File: SD-2023-11</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                            Medical Aid
                                        </span>
</td>
<td className="px-6 py-4">
<p className="text-sm text-gray-600">Oct 23, 2023</p>
</td>
<td className="px-6 py-4">
<p className="text-sm font-medium text-gray-900">$120.00</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                            Processing
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors p-1">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="table-row-hover group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center border border-gray-200 font-semibold text-xs">
                                                MO
                                            </div>
<div>
<p className="text-sm font-medium text-gray-900">Mohammed Omar</p>
<p className="text-xs text-gray-400">File: FP-2023-08</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                                            Food Pack
                                        </span>
</td>
<td className="px-6 py-4">
<p className="text-sm text-gray-600">Oct 22, 2023</p>
</td>
<td className="px-6 py-4">
<p className="text-sm font-medium text-gray-900">2 <span className="text-gray-400 font-normal text-xs">Large Packs</span></p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Collected
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors p-1">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="table-row-hover group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center border border-gray-200 font-semibold text-xs">
                                                YA
                                            </div>
<div>
<p className="text-sm font-medium text-gray-900">Yusuf Ali</p>
<p className="text-xs text-gray-400">File: ZK-2023-05</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                            Zakat Fund
                                        </span>
</td>
<td className="px-6 py-4">
<p className="text-sm text-gray-600">Oct 20, 2023</p>
</td>
<td className="px-6 py-4">
<p className="text-sm font-medium text-gray-900">$800.00</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                            Pending Review
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="text-gray-400 hover:text-emerald-600 transition-colors p-1">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-gray-900 transition-colors p-1">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="table-row-hover group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center border border-gray-200 font-semibold text-xs">
                                                SB
                                            </div>
<div>
<p className="text-sm font-medium text-gray-900">Sarah Bilal</p>
<p className="text-xs text-gray-400">File: FP-2023-09</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                                            Food Pack
                                        </span>
</td>
<td className="px-6 py-4">
<p className="text-sm text-gray-600">Oct 19, 2023</p>
</td>
<td className="px-6 py-4">
<p className="text-sm font-medium text-gray-900">1 <span className="text-gray-400 font-normal text-xs">Standard Pack</span></p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Distributed
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors p-1">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
<span className="text-xs text-gray-500">Showing 1 to 5 of 84 records</span>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-lg border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-300 disabled:opacity-50 transition-all">
<iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-lg border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-300 transition-all">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>
</div>
</div>
</main>

    </>
  );
}
