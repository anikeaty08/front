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
      

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col justify-between z-20 flex-shrink-0">
<div>

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white shadow-sm ring-1 ring-gray-900/5 transition-transform group-hover:scale-105">
<iconify-icon icon="lucide:layers" width="16"></iconify-icon>
</div>
<span className="text-gray-900 font-semibold tracking-tight text-lg">NEXUS</span>
</a>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="lucide:layout-dashboard" width="18"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="lucide:users" width="18"></iconify-icon>
                    Customers
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="lucide:box" width="18"></iconify-icon>
                    Inventory
                </a>

<div className="pt-6 pb-2">
<div className="px-3 text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Proposal</div>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg transition-all" href="#">
<iconify-icon className="text-gray-900" icon="lucide:file-input" width="18"></iconify-icon>
                            RFQs
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="lucide:calculator" width="18"></iconify-icon>
                            Estimation
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="lucide:file-check" width="18"></iconify-icon>
                            Active Quotes
                        </a>
</div>
</div>

<div className="pt-2">
<div className="px-3 text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">System</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="lucide:settings" width="18"></iconify-icon>
                        Settings
                    </a>
</div>
</nav>
</div>

<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-600 font-medium text-xs shadow-sm">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
<p className="text-xs text-gray-500 truncate group-hover:text-gray-700">Sales Manager</p>
</div>
<iconify-icon className="text-gray-400" icon="lucide:chevrons-up-down" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-white md:bg-gray-50">

<div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:layers" width="16"></iconify-icon>
</div>
<span className="font-semibold text-gray-900 tracking-tight">NEXUS</span>
</div>
<button className="text-gray-500 hover:text-gray-900">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>

<header className="bg-white border-b border-gray-200 px-6 py-6 z-10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">RFQs</h1>
<p className="text-sm text-gray-500 mt-1">Manage and convert customer requests into estimates.</p>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
                        Export
                    </button>
</div>
</div>

<div className="mt-8 flex flex-col md:flex-row gap-4">
<div className="relative flex-1 max-w-lg group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400 group-focus-within:text-gray-600 transition-colors" icon="lucide:search" width="16"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-900/5 focus:border-gray-300 text-sm transition-all shadow-sm" placeholder="Search by name, user ID, product..." type="text"/>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
<iconify-icon icon="lucide:filter" width="14"></iconify-icon>
                        Filter
                        <iconify-icon className="text-gray-400 ml-1" icon="lucide:chevron-down" width="12"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="flex-1 p-0 md:p-6 overflow-hidden flex flex-col">

<div className="bg-white border-y md:border border-gray-200 md:rounded-xl shadow-sm flex flex-col h-full overflow-hidden">
<div className="overflow-auto flex-1">
<table className="min-w-full divide-y divide-gray-100">
<thead className="bg-gray-50/75 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<tr>
<th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap" scope="col">Customer Name</th>
<th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap" scope="col">User ID</th>
<th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap" scope="col">Email ID</th>
<th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap" scope="col">Phone Number</th>
<th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap" scope="col">Date</th>
<th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap" scope="col">Time</th>
<th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]" scope="col">Product / Service</th>
<th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap min-w-[150px]" scope="col">Other Req.</th>
<th className="px-6 py-3.5 text-right text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap" scope="col">Total Amount</th>
<th className="px-6 py-3.5 text-right text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap sticky right-0 bg-gray-50/95 backdrop-blur-sm border-l border-gray-200" scope="col">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white">

<tr className="group hover:bg-gray-50/80 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-xs border border-gray-200">AI</div>
<span className="text-sm font-medium text-gray-900">Acme Industries</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-xs font-mono text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">UID-9482</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">sarah@acme.com</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">+1 (555) 012-3456</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">Oct 24, 2023</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-500">10:42 AM</span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col gap-2">

<div className="flex items-start gap-2">
<span className="text-xs font-medium text-gray-400 mt-0.5">1.</span>
<div className="text-sm text-gray-900 leading-tight">
                                                PVC Signs <span className="text-gray-400 font-normal ml-1">(x50)</span>
<div className="text-[10px] text-gray-500 mt-0.5">Outdoor, 3mm Thick</div>
</div>
</div>

<div className="flex items-start gap-2">
<span className="text-xs font-medium text-gray-400 mt-0.5">2.</span>
<div className="text-sm text-gray-900 leading-tight">
                                                Vinyl Stickers <span className="text-gray-400 font-normal ml-1">(x200)</span>
<div className="text-[10px] text-gray-500 mt-0.5">Die-cut, Glossy finish</div>
</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<iconify-icon icon="lucide:map-pin" width="10"></iconify-icon>
                                        Site Visit Req
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<span className="text-sm font-semibold text-gray-900 tabular-nums">$2,500.00</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right sticky right-0 bg-white group-hover:bg-gray-50/80 border-l border-gray-100 transition-colors">
<div className="flex items-center justify-end gap-3">
<button className="text-gray-400 hover:text-gray-700 transition-colors flex items-center gap-1.5 text-xs font-medium px-2 py-1.5 rounded hover:bg-gray-100">
<iconify-icon icon="lucide:eye" width="14"></iconify-icon>
<span className="hidden xl:inline">Details</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow-sm shadow-indigo-200 transition-all">
                                            Convert
                                        </button>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-xs border border-gray-200">GC</div>
<span className="text-sm font-medium text-gray-900">Globex Corp</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-xs font-mono text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">UID-2219</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">mark@globex.io</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">+1 (555) 987-6543</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">Oct 24, 2023</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-500">09:15 AM</span>
</td>
<td className="px-6 py-4">
<div className="flex items-start gap-2">
<span className="text-xs font-medium text-gray-400 mt-0.5">1.</span>
<div className="text-sm text-gray-900 leading-tight">
                                            Mesh Banner <span className="text-gray-400 font-normal ml-1">(x12)</span>
<div className="text-[10px] text-gray-500 mt-0.5">Wind Resistant, Reinforced</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-gray-400 text-xs">-</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<span className="text-sm font-semibold text-gray-900 tabular-nums">$4,200.00</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right sticky right-0 bg-white group-hover:bg-gray-50/80 border-l border-gray-100 transition-colors">
<div className="flex items-center justify-end gap-3">
<button className="text-gray-400 hover:text-gray-700 transition-colors flex items-center gap-1.5 text-xs font-medium px-2 py-1.5 rounded hover:bg-gray-100">
<iconify-icon icon="lucide:eye" width="14"></iconify-icon>
<span className="hidden xl:inline">Details</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow-sm shadow-indigo-200 transition-all">
                                            Convert
                                        </button>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-xs border border-gray-200">TI</div>
<span className="text-sm font-medium text-gray-900">TechFlow Inc.</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-xs font-mono text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">UID-7331</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">jason@techflow.net</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">+44 20 7946 0958</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">Oct 23, 2023</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-500">04:30 PM</span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col gap-2">

<div className="flex items-start gap-2">
<span className="text-xs font-medium text-gray-400 mt-0.5">1.</span>
<div className="text-sm text-gray-900 leading-tight">
                                                Business Cards <span className="text-gray-400 font-normal ml-1">(x1000)</span>
<div className="text-[10px] text-gray-500 mt-0.5">Matte, Gold Foil</div>
</div>
</div>

<div className="flex items-start gap-2">
<span className="text-xs font-medium text-gray-400 mt-0.5">2.</span>
<div className="text-sm text-gray-900 leading-tight">
                                                Letterheads <span className="text-gray-400 font-normal ml-1">(x500)</span>
<div className="text-[10px] text-gray-500 mt-0.5">Premium Bond Paper</div>
</div>
</div>

<div className="flex items-start gap-2">
<span className="text-xs font-medium text-gray-400 mt-0.5">3.</span>
<div className="text-sm text-gray-900 leading-tight">
                                                Envelopes <span className="text-gray-400 font-normal ml-1">(x500)</span>
</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
<iconify-icon icon="lucide:hammer" width="10"></iconify-icon>
                                        Installation
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<span className="text-sm font-semibold text-gray-900 tabular-nums">$1,850.00</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right sticky right-0 bg-white group-hover:bg-gray-50/80 border-l border-gray-100 transition-colors">
<div className="flex items-center justify-end gap-3">
<button className="text-gray-400 hover:text-gray-700 transition-colors flex items-center gap-1.5 text-xs font-medium px-2 py-1.5 rounded hover:bg-gray-100">
<iconify-icon icon="lucide:eye" width="14"></iconify-icon>
<span className="hidden xl:inline">Details</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow-sm shadow-indigo-200 transition-all">
                                            Convert
                                        </button>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-xs border border-gray-200">SC</div>
<span className="text-sm font-medium text-gray-900">Soylent Corp</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-xs font-mono text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">UID-1102</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">bruce@soylent.com</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">+1 (202) 555-0192</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-600">Oct 23, 2023</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm text-gray-500">02:15 PM</span>
</td>
<td className="px-6 py-4">
<div className="flex items-start gap-2">
<span className="text-xs font-medium text-gray-400 mt-0.5">1.</span>
<div className="text-sm text-gray-900 leading-tight">
                                            Retractable Stand <span className="text-gray-400 font-normal ml-1">(x5)</span>
<div className="text-[10px] text-gray-500 mt-0.5">Premium Base</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-gray-400 text-xs">-</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<span className="text-sm font-semibold text-gray-900 tabular-nums">$1,050.00</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right sticky right-0 bg-white group-hover:bg-gray-50/80 border-l border-gray-100 transition-colors">
<div className="flex items-center justify-end gap-3">
<button className="text-gray-400 hover:text-gray-700 transition-colors flex items-center gap-1.5 text-xs font-medium px-2 py-1.5 rounded hover:bg-gray-100">
<iconify-icon icon="lucide:eye" width="14"></iconify-icon>
<span className="hidden xl:inline">Details</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow-sm shadow-indigo-200 transition-all">
                                            Convert
                                        </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="flex items-center justify-between px-4 py-4 sm:px-0 mt-auto pt-4 border-t border-gray-200">
<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
<div>
<p className="text-sm text-gray-500">
                            Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">4</span> of <span className="font-medium text-gray-900">24</span> results
                        </p>
</div>
<div>
<nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
<a className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" href="#">
<span className="sr-only">Previous</span>
<iconify-icon icon="lucide:chevron-left" width="16"></iconify-icon>
</a>
<a aria-current="page" className="relative z-10 inline-flex items-center bg-gray-900 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900" href="#">1</a>
<a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" href="#">2</a>
<a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" href="#">3</a>
<a className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" href="#">
<span className="sr-only">Next</span>
<iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</nav>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
