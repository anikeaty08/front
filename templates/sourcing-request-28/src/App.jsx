import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden md:flex w-64 flex-col bg-white border-r border-gray-200 h-full">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<span className="text-xl font-semibold tracking-tighter text-gray-900">SRC.</span>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900" href="#">
<iconify-icon className="text-lg text-gray-700" icon="solar:widget-5-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-600" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Requests
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-600" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Credits
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-600" icon="solar:inbox-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Messages
            </a>
</nav>

<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3 w-full cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
<div className="h-8 w-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center overflow-hidden">
<span className="text-xs font-medium text-gray-600">JD</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
<p className="text-xs text-gray-500 truncate">Acme Corp</p>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10">
<div className="flex items-center gap-4">

<button className="md:hidden text-gray-500 hover:text-gray-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<h1 className="text-lg font-medium tracking-tight text-gray-900">Overview</h1>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-600 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-gray-500">Credit Balance</h2>
<div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:wad-of-money-linear"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">2,450</span>
<span className="text-xs text-gray-500 font-medium">credits</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-gray-500">Total Requests</h2>
<div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:documents-linear"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">128</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-gray-500">Completed Requests</h2>
<div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">94</span>
<span className="text-xs text-green-600 font-medium flex items-center bg-green-50 px-1.5 py-0.5 rounded-md">
<iconify-icon className="mr-1" icon="solar:trend-up-linear"></iconify-icon> +12%
                            </span>
</div>
</div>
</div>

<div className="space-y-4">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Recent Requests</h2>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                            Submit New Request
                        </button>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200 text-left whitespace-nowrap">
<thead className="bg-gray-50/75">
<tr>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Request Title</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Status</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Target Price</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Qty</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Date</th>
<th className="relative px-6 py-3" scope="col">
<span className="sr-only">Action</span>
</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200 bg-white">

<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="text-sm font-medium text-gray-900">Custom Aluminum Extrusions</div>
<div className="text-xs text-gray-500">REQ-2023-089</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                                                Pending
                                            </span>
</td>
<td className="px-6 py-4 text-sm text-gray-700">$2.45 / unit</td>
<td className="px-6 py-4 text-sm text-gray-700">10,000</td>
<td className="px-6 py-4 text-sm text-gray-500">Oct 24, 2023</td>
<td className="px-6 py-4 text-right text-sm font-medium">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="text-sm font-medium text-gray-900">Injection Molded Casings</div>
<div className="text-xs text-gray-500">REQ-2023-088</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20">
                                                In Progress
                                            </span>
</td>
<td className="px-6 py-4 text-sm text-gray-700">$0.85 / unit</td>
<td className="px-6 py-4 text-sm text-gray-700">50,000</td>
<td className="px-6 py-4 text-sm text-gray-500">Oct 21, 2023</td>
<td className="px-6 py-4 text-right text-sm font-medium">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="text-sm font-medium text-gray-900">Organic Cotton T-Shirts</div>
<div className="text-xs text-gray-500">REQ-2023-085</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                                                Approved
                                            </span>
</td>
<td className="px-6 py-4 text-sm text-gray-700">$4.10 / unit</td>
<td className="px-6 py-4 text-sm text-gray-700">5,000</td>
<td className="px-6 py-4 text-sm text-gray-500">Oct 18, 2023</td>
<td className="px-6 py-4 text-right text-sm font-medium">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="text-sm font-medium text-gray-900">Lithium-ion Battery Packs</div>
<div className="text-xs text-gray-500">REQ-2023-072</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                Completed
                                            </span>
</td>
<td className="px-6 py-4 text-sm text-gray-700">$12.50 / unit</td>
<td className="px-6 py-4 text-sm text-gray-700">2,500</td>
<td className="px-6 py-4 text-sm text-gray-500">Sep 30, 2023</td>
<td className="px-6 py-4 text-right text-sm font-medium">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="text-sm font-medium text-gray-900">CNC Machined Prototypes</div>
<div className="text-xs text-gray-500">REQ-2023-068</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                                                Rejected
                                            </span>
</td>
<td className="px-6 py-4 text-sm text-gray-700">$150.00 / unit</td>
<td className="px-6 py-4 text-sm text-gray-700">5</td>
<td className="px-6 py-4 text-sm text-gray-500">Sep 28, 2023</td>
<td className="px-6 py-4 text-right text-sm font-medium">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-white px-6 py-3 border-t border-gray-200 flex items-center justify-between sm:px-6">
<div className="hidden sm:block text-sm text-gray-500">
                                Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">5</span> of <span className="font-medium text-gray-900">128</span> results
                            </div>
<div className="flex flex-1 justify-between sm:justify-end gap-2">
<button className="relative inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Previous</button>
<button className="relative inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Next</button>
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
