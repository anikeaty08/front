import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function toggleMobileMenu() {
            const sidebar = document.getElementById('mobile-sidebar');
            const overlay = document.getElementById('mobile-overlay');
            const isClosed = sidebar.classList.contains('-translate-x-full');
            
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed inset-0 bg-gray-900/40 z-40 hidden lg:hidden backdrop-blur-sm transition-opacity" id="mobile-overlay" onclick="toggleMobileMenu()"></div>

<aside aria-label="Sidebar navigation" className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform -translate-x-full lg:translate-x-0 lg:static lg:flex transition-transform duration-300 shrink-0 shadow-2xl lg:shadow-none" id="mobile-sidebar">

<div className="h-16 flex items-center justify-between px-6 border-b border-gray-100 shrink-0">
<span className="text-xl font-medium tracking-tight text-blue-900 uppercase">
                B<span className="text-red-600">of</span>A
            </span>
<button aria-label="Close menu" className="lg:hidden text-gray-400 hover:text-gray-900 p-2 -mr-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors" onclick="toggleMobileMenu()" type="button">
<iconify-icon aria-hidden="true" className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 no-scrollbar" role="navigation">
<div aria-hidden="true" className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-2 px-3">Main</div>
<a aria-current="page" className="flex items-center px-3 py-2 text-sm font-normal rounded-md bg-gray-50 text-blue-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none" href="#">
<iconify-icon aria-hidden="true" className="mr-3 text-lg" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
                Overview
            </a>
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none" href="#">
<iconify-icon aria-hidden="true" className="mr-3 text-lg" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
                Accounts
            </a>
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none" href="#">
<iconify-icon aria-hidden="true" className="mr-3 text-lg" icon="solar:transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
                Transfers
            </a>
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none" href="#">
<iconify-icon aria-hidden="true" className="mr-3 text-lg" icon="solar:bill-list-linear" strokeWidth="1.5"></iconify-icon>
                Bill Pay
            </a>
<div aria-hidden="true" className="text-xs font-normal text-gray-400 uppercase tracking-wider mt-8 mb-2 px-3">Wealth</div>
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none" href="#">
<iconify-icon aria-hidden="true" className="mr-3 text-lg" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
                Investments
            </a>
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none" href="#">
<iconify-icon aria-hidden="true" className="mr-3 text-lg" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
                Mortgage
            </a>
</nav>

<div className="p-4 border-t border-gray-100 shrink-0">
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none" href="#">
<iconify-icon aria-hidden="true" className="mr-3 text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                Settings
            </a>
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors mt-1 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none" href="#">
<iconify-icon aria-hidden="true" className="mr-3 text-lg" icon="solar:logout-2-linear" strokeWidth="1.5"></iconify-icon>
                Sign Out
            </a>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 shrink-0 sticky top-0">

<button aria-controls="mobile-sidebar" aria-expanded="false" aria-label="Open navigation menu" className="lg:hidden text-gray-500 hover:text-gray-900 p-2 -ml-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors" onclick="toggleMobileMenu()" type="button">
<iconify-icon aria-hidden="true" className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>

<div className="lg:hidden flex items-center">
<span className="text-lg font-medium tracking-tight text-blue-900 uppercase">
                    B<span className="text-red-600">of</span>A
                </span>
</div>

<div className="flex-1 flex justify-end items-center space-x-4 sm:space-x-6">

<div className="hidden md:flex relative max-w-xs w-full">
<label className="sr-only" htmlFor="search-transactions">Search transactions</label>
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon aria-hidden="true" className="text-gray-400" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all" id="search-transactions" placeholder="Search transactions..." type="search"/>
</div>

<button aria-label="View notifications, 1 unread" className="text-gray-400 hover:text-gray-600 p-1.5 -m-1.5 rounded-md relative transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" type="button">
<iconify-icon aria-hidden="true" className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span aria-hidden="true" className="absolute top-1 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
</button>

<div className="flex items-center space-x-3 border-l border-gray-200 pl-4 sm:pl-6">
<div className="hidden sm:flex flex-col items-end">
<span className="text-sm font-normal text-gray-900 leading-none mb-1">Kentrell Davies</span>
<span className="text-xs text-gray-500 leading-none">Preferred Rewards</span>
</div>
<button aria-label="User profile menu" className="h-8 w-8 rounded-full bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center font-medium text-xs tracking-tight hover:bg-blue-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" type="button">
                        KD
                    </button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto bg-gray-50/50 p-4 sm:p-6 lg:p-8 no-scrollbar">
<div className="max-w-7xl mx-auto space-y-8">

<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Good morning, Kentrell</h1>
<p className="text-sm text-gray-500 mt-1">Here's what's happening with your finances today.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-sm flex flex-col relative overflow-hidden group hover:border-gray-300 transition-all focus-within:ring-2 focus-within:ring-blue-500" tabindex="0">
<div aria-hidden="true" className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-sm font-normal text-gray-900">Advantage Plus Banking</h2>
<div className="flex items-center mt-1">
<p aria-label="Account ending in 8392" className="text-xs text-gray-500 font-mono">•••• 8392</p>
<button aria-label="Copy account number" className="ml-2 text-gray-400 hover:text-gray-600 p-1 -m-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" type="button"><iconify-icon aria-hidden="true" className="text-xs" icon="solar:copy-linear"></iconify-icon></button>
</div>
</div>
<div aria-hidden="true" className="p-2 bg-gray-50 rounded-md text-gray-400 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-auto">
<p className="text-xs text-gray-500 mb-1">Available Balance</p>
<span className="text-2xl font-medium tracking-tight text-gray-900">$12,450.80</span>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-sm flex flex-col relative overflow-hidden group hover:border-gray-300 transition-all focus-within:ring-2 focus-within:ring-blue-500" tabindex="0">
<div aria-hidden="true" className="absolute top-0 left-0 w-1 h-full bg-blue-700"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-sm font-normal text-gray-900">Advantage Savings</h2>
<div className="flex items-center mt-1">
<p aria-label="Account ending in 4412" className="text-xs text-gray-500 font-mono">•••• 4412</p>
</div>
</div>
<div aria-hidden="true" className="p-2 bg-gray-50 rounded-md text-gray-400 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:safe-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-auto">
<p className="text-xs text-gray-500 mb-1">Available Balance</p>
<span className="text-2xl font-medium tracking-tight text-gray-900">$45,000.00</span>
<div className="flex items-center mt-2 text-xs">
<span className="text-green-600 font-normal flex items-center bg-green-50 px-1.5 py-0.5 rounded">
<iconify-icon aria-hidden="true" className="mr-0.5" icon="solar:arrow-right-up-linear"></iconify-icon> 4.3% APY
                                </span>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-800 p-5 sm:p-6 shadow-sm flex flex-col relative overflow-hidden group focus-within:ring-2 focus-within:ring-blue-500" tabindex="0">

<div aria-hidden="true" className="absolute -right-10 -top-10 w-40 h-40 border border-white/10 rounded-full opacity-50 pointer-events-none"></div>
<div aria-hidden="true" className="absolute -right-4 top-10 w-20 h-20 border border-white/10 rounded-full opacity-50 pointer-events-none"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div>
<h2 className="text-sm font-normal text-white">Customized Cash Rewards</h2>
<p aria-label="Card ending in 0921" className="text-xs text-gray-400 font-mono mt-1">•••• 0921</p>
</div>
<iconify-icon aria-hidden="true" className="text-gray-400 text-xl" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-auto relative z-10">
<p className="text-xs text-gray-400 mb-1">Current Balance</p>
<div className="flex items-baseline space-x-2">
<span className="text-2xl font-medium tracking-tight text-white">$1,240.55</span>
</div>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="15" className="w-full bg-gray-700 h-1.5 rounded-full mt-3 overflow-hidden" role="progressbar">
<div className="bg-blue-400 h-1.5 rounded-full" style={{width: '15%'}}></div>
</div>
<p className="text-xs text-gray-400 mt-2 flex justify-between">
<span>$8,759.45 available</span>
</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">

<div className="px-4 sm:px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-white">
<h3 className="text-base font-normal text-gray-900">Recent Transactions</h3>
<div className="flex items-center space-x-2">
<button aria-label="Filter transactions" className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" type="button">
<iconify-icon aria-hidden="true" icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="text-xs font-normal text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" href="#">View All</a>
</div>
</div>

<div className="overflow-x-auto shadow-[inset_-10px_0_10px_-10px_rgba(0,0,0,0.05)] sm:shadow-none">
<table className="w-full text-left text-sm whitespace-nowrap min-w-full">
<thead className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider">
<tr>
<th className="px-4 sm:px-5 py-3 font-normal" scope="col">Transaction</th>
<th className="px-4 sm:px-5 py-3 font-normal hidden sm:table-cell" scope="col">Date</th>
<th className="px-4 sm:px-5 py-3 font-normal text-right" scope="col">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-gray-700">
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-4 sm:px-5 py-3.5 flex items-center">
<div aria-hidden="true" className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mr-3 shrink-0">
<iconify-icon className="text-lg" icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="font-normal text-gray-900">Starbucks Store #18392</p>
<p className="text-xs text-gray-500 sm:hidden">Oct 24, 2023</p>
<p className="text-xs text-gray-400 mt-0.5">Dining</p>
</div>
</td>
<td className="px-4 sm:px-5 py-3.5 hidden sm:table-cell text-gray-500">Oct 24, 2023</td>
<td className="px-4 sm:px-5 py-3.5 text-right font-normal text-gray-900">-$6.45</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-4 sm:px-5 py-3.5 flex items-center">
<div aria-hidden="true" className="w-9 h-9 rounded-full bg-green-50 text-green-600 flex items-center justify-center mr-3 shrink-0">
<iconify-icon className="text-lg" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="font-normal text-gray-900">Acme Corp Payroll</p>
<p className="text-xs text-gray-500 sm:hidden">Oct 22, 2023</p>
<p className="text-xs text-gray-400 mt-0.5">Direct Deposit</p>
</div>
</td>
<td className="px-4 sm:px-5 py-3.5 hidden sm:table-cell text-gray-500">Oct 22, 2023</td>
<td className="px-4 sm:px-5 py-3.5 text-right font-normal text-green-600">+$4,250.00</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-4 sm:px-5 py-3.5 flex items-center">
<div aria-hidden="true" className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mr-3 shrink-0">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="font-normal text-gray-900">Amazon.com</p>
<p className="text-xs text-gray-500 sm:hidden">Oct 20, 2023</p>
<p className="text-xs text-gray-400 mt-0.5">Shopping</p>
</div>
</td>
<td className="px-4 sm:px-5 py-3.5 hidden sm:table-cell text-gray-500">Oct 20, 2023</td>
<td className="px-4 sm:px-5 py-3.5 text-right font-normal text-gray-900">-$142.80</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-4 sm:px-5 py-3.5 flex items-center">
<div aria-hidden="true" className="w-9 h-9 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mr-3 shrink-0">
<iconify-icon className="text-lg" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="font-normal text-gray-900">Pacific Gas &amp; Electric</p>
<p className="text-xs text-gray-500 sm:hidden">Oct 18, 2023</p>
<p className="text-xs text-gray-400 mt-0.5">Utilities</p>
</div>
</td>
<td className="px-4 sm:px-5 py-3.5 hidden sm:table-cell text-gray-500">Oct 18, 2023</td>
<td className="px-4 sm:px-5 py-3.5 text-right font-normal text-gray-900">-$85.00</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-4 sm:px-5 py-3.5 flex items-center">
<div aria-hidden="true" className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-3 shrink-0">
<iconify-icon className="text-lg" icon="solar:transfer-vertical-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="font-normal text-gray-900">Transfer to Savings</p>
<p className="text-xs text-gray-500 sm:hidden">Oct 15, 2023</p>
<p className="text-xs text-gray-400 mt-0.5">Internal Transfer</p>
</div>
</td>
<td className="px-4 sm:px-5 py-3.5 hidden sm:table-cell text-gray-500">Oct 15, 2023</td>
<td className="px-4 sm:px-5 py-3.5 text-right font-normal text-gray-900">-$500.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6">
<h3 className="text-base font-normal text-gray-900 mb-5">Quick Transfer</h3>
<form action="#" className="space-y-4" method="POST">
<div>
<label className="block text-xs font-normal text-gray-500 mb-1.5" htmlFor="from-account">From Account</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block px-3 py-2.5 pr-8 outline-none transition-shadow shadow-sm cursor-pointer" id="from-account" name="from-account">
<option value="checking">Advantage Plus (•••• 8392)</option>
<option value="savings">Advantage Savings (•••• 4412)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
<iconify-icon aria-hidden="true" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div aria-hidden="true" className="flex justify-center -my-2 relative z-10">
<div className="bg-white p-1 rounded-full border border-gray-100 shadow-sm text-gray-400">
<iconify-icon className="block text-sm" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-normal text-gray-500 mb-1.5" htmlFor="to-account">To Account</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block px-3 py-2.5 pr-8 outline-none transition-shadow shadow-sm cursor-pointer" id="to-account" name="to-account">
<option value="savings">Advantage Savings (•••• 4412)</option>
<option value="external">External Account...</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
<iconify-icon aria-hidden="true" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-normal text-gray-500 mb-1.5" htmlFor="transfer-amount">Amount</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span aria-hidden="true" className="text-gray-500 text-sm font-normal">$</span>
</div>
<input autocomplete="off" className="w-full pl-7 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow shadow-sm" id="transfer-amount" inputmode="decimal" name="amount" placeholder="0.00" type="text"/>
</div>
</div>
<button className="w-full flex justify-center items-center mt-2 py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-normal text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" type="submit">
                                    Review Transfer
                                </button>
</form>
</div>

<div className="bg-blue-50 rounded-xl border border-blue-100 p-5 shadow-sm flex items-start space-x-4">
<div aria-hidden="true" className="bg-blue-100 text-blue-700 p-2.5 rounded-lg shrink-0">
<iconify-icon className="text-xl" icon="solar:medal-star-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-normal text-blue-900 mb-1">Preferred Rewards</h4>
<p className="text-xs text-blue-700/80 leading-relaxed mb-3">You're close to reaching the Platinum tier. Increase your balance by $5,000 to unlock higher savings rates.</p>
<a className="text-xs font-normal text-blue-700 hover:text-blue-900 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" href="#">
                                    View Benefits <iconify-icon aria-hidden="true" className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="h-8"></div>
</div>
</main>
</div>


    </>
  );
}
