import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<aside className="w-[260px] border-r border-gray-200 flex flex-col justify-between hidden lg:flex shrink-0 bg-[#fafafa]/50">
<div>

<div className="h-16 flex items-center px-6 gap-3 border-b border-transparent">
<div className="w-7 h-7 bg-gray-900 rounded flex items-center justify-center shrink-0">
<span className="text-white font-semibold text-sm tracking-tight">K</span>
</div>
<span className="font-semibold text-lg tracking-tight">Koli.</span>
</div>
<nav className="px-3 py-6 space-y-8 overflow-y-auto no-scrollbar">

<div>
<h3 className="px-3 text-xs font-medium text-gray-400 tracking-wider uppercase mb-3">Menu</h3>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-900 bg-white shadow-sm border border-gray-200 rounded-md transition-colors" href="#">
<iconify-icon className="text-[#7c3aed] text-lg" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Orders &amp; Purchases</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Logistics &amp; Cargos</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Clients &amp; Wallets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Inspiration Catalog</span>
</a>
</div>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-gray-400 tracking-wider uppercase mb-3">Finance</h3>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Treasury</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Net Margin</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Data &amp; Insights</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:bill-list-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Relay Billing</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Relay Directory</span>
</a>
</div>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-gray-400 tracking-wider uppercase mb-3">System</h3>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:headphones-round-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Quality &amp; Support</span>
</a>
</div>
</div>
</nav>
</div>
<div className="p-4 border-t border-gray-200 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Settings &amp; Rates</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:logout-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Log out</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 h-full bg-white relative">

<header className="h-16 px-8 flex items-center justify-between border-b border-gray-200 shrink-0">
<h1 className="text-xl font-semibold tracking-tight">Orders &amp; Purchases</h1>
<div className="flex items-center gap-5">

<div className="relative hidden md:block">
<input className="w-64 pl-9 pr-16 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 focus:bg-white transition-colors placeholder-gray-400" placeholder="Search..." type="text"/>
<iconify-icon className="absolute left-3 top-2 text-gray-400 text-base" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute right-2 top-1.5 flex gap-1">
<kbd className="px-1.5 py-0.5 text-[10px] font-sans border border-gray-200 rounded bg-white text-gray-400">⌘</kbd>
<kbd className="px-1.5 py-0.5 text-[10px] font-sans border border-gray-200 rounded bg-white text-gray-400">K</kbd>
</div>
</div>
<button className="relative text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute 1 top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="flex items-center gap-2 cursor-pointer border-l border-gray-200 pl-5">
<img alt="User" className="w-8 h-8 rounded-full border border-gray-200" src="https://i.pravatar.cc/150?img=47"/>
<span className="text-sm font-medium hidden sm:block">Khadija W.</span>
<iconify-icon className="text-gray-400 hidden sm:block" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto overflow-x-hidden p-8 pb-32">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
<div className="relative w-full sm:w-[400px]">
<iconify-icon className="absolute left-3 top-2.5 text-gray-400 text-base" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 shadow-sm placeholder-gray-400" placeholder="Search by Phone, Order ID, or Name..." type="text"/>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm w-full sm:w-auto">
<iconify-icon className="text-gray-400 text-base" icon="solar:filter-linear"></iconify-icon>
                        More Filters
                        <iconify-icon className="text-gray-400 ml-1 text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-[#7c3aed] bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap w-full sm:w-auto">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
                        Add Merchant Order
                    </button>
<button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#7c3aed] border border-transparent rounded-lg hover:bg-[#6d28d9] transition-colors shadow-sm whitespace-nowrap w-full sm:w-auto">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
                        Create Order
                    </button>
</div>
</div>

<div className="flex items-center gap-8 border-b border-gray-200 mb-6 overflow-x-auto no-scrollbar">
<button className="flex items-center gap-2 pb-4 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent transition-colors whitespace-nowrap">
                    All Orders
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-600">400</span>
</button>
<button className="flex items-center gap-2 pb-4 text-sm font-medium text-gray-900 border-b-2 border-gray-900 transition-colors whitespace-nowrap">
                    Needs Attention
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200">42</span>
</button>
<button className="flex items-center gap-2 pb-4 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent transition-colors whitespace-nowrap">
                    Ready for Cargo
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-green-50 text-green-700 border border-green-200">145</span>
</button>
<button className="flex items-center gap-2 pb-4 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent transition-colors whitespace-nowrap">
                    To Buy
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-600">12</span>
</button>
<button className="flex items-center gap-2 pb-4 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent transition-colors whitespace-nowrap">
                    Purchased
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-600">45</span>
</button>
<button className="flex items-center gap-2 pb-4 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent transition-colors whitespace-nowrap">
                    At Forwarder
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-600">28</span>
</button>
</div>

<div className="mb-8 bg-gray-50/50 p-4 rounded-xl border border-gray-200">
<div className="flex items-center justify-between mb-4 px-1">
<h2 className="text-sm font-semibold text-gray-900">Active Cargo Lots</h2>
<span className="text-xs text-gray-500">Manage capacity and assignments</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">

<div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-0.5 bg-orange-500"></div>
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-medium text-gray-900">KOLI-04</h3>
<p className="text-xs text-gray-500 mt-0.5">Air Freight • Prep</p>
</div>
<iconify-icon className="text-gray-400 text-base" icon="solar:plane-linear"></iconify-icon>
</div>
<div className="space-y-1.5">
<div className="flex justify-between text-xs">
<span className="text-gray-500">Capacity</span>
<span className="font-medium text-orange-600">495 <span className="text-gray-400 font-normal">/ 500kg</span></span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1">
<div className="bg-orange-500 h-1 rounded-full w-[99%]"></div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-medium text-gray-900">KOLI-05</h3>
<p className="text-xs text-gray-500 mt-0.5">Sea Freight • Prep</p>
</div>
<iconify-icon className="text-gray-400 text-base" icon="solar:ship-linear"></iconify-icon>
</div>
<div className="space-y-1.5">
<div className="flex justify-between text-xs">
<span className="text-gray-500">Capacity</span>
<span className="font-medium text-gray-900">120 <span className="text-gray-400 font-normal">/ 1000kg</span></span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1">
<div className="bg-gray-900 h-1 rounded-full w-[12%]"></div>
</div>
</div>
</div>

<div className="bg-gray-50 border border-gray-200 rounded-lg p-4 opacity-75">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-medium text-gray-500 line-through">KOLI-03</h3>
<p className="text-xs text-gray-500 mt-0.5">Air Freight</p>
</div>
<span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon> Delivered
                            </span>
</div>
<p className="text-xs text-gray-400 mt-4">Arrived Oct 20, 2023</p>
</div>

<button className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all h-full min-h-[100px]">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-2">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium">Create New Lot</span>
</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden overflow-x-auto relative">

<div className="bg-indigo-50/70 border-b border-indigo-100 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3 text-sm">
<span className="font-semibold text-indigo-700">2 items selected</span>
<span className="text-indigo-200">|</span>
<button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">Select all 42 "Needs Attention" items</button>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon> Resolve Selected
                        </button>
<div className="h-4 w-px bg-indigo-200 mx-1"></div>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-gray-900 border border-transparent rounded-lg hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:box-linear"></iconify-icon> Bulk Assign to Lot
                        </button>
</div>
</div>
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead>
<tr className="border-b border-gray-200 bg-gray-50/50 text-xs text-gray-500 font-medium uppercase tracking-wider">
<th className="py-3 px-4 w-12 text-center">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 absolute pointer-events-none text-xs" icon="solar:minus-square-linear"></iconify-icon>
</div>
</label>
</th>
<th className="py-3 px-4">Item &amp; Order ID</th>
<th className="py-3 px-4">Cargo Ref</th>
<th className="py-3 px-4">Arrival Date</th>
<th className="py-3 px-4">Customer</th>
<th className="py-3 px-4">Location</th>
<th className="py-3 px-4">Status</th>
<th className="py-3 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="text-sm text-gray-900 divide-y divide-gray-100">

<tr className="hover:bg-orange-50/30 transition-colors bg-orange-50/20">
<td className="py-4 px-4 text-center align-top pt-5">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 absolute pointer-events-none text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-4 align-top pt-4">
<div className="flex items-start gap-2">
<button className="mt-1 text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div>
<div className="font-semibold text-gray-900">#KOLI-8941</div>
<div className="text-xs text-gray-500 mt-0.5">Oct 23, 2023</div>
</div>
</div>
</td>
<td className="py-4 px-4 align-top pt-4">
<span className="inline-flex bg-gray-100 text-gray-600 border border-gray-200 text-xs font-medium px-2.5 py-1 rounded-md">Unassigned</span>
</td>
<td className="py-4 px-4 align-top pt-4">
<div className="text-gray-900">Oct 24, 2023</div>
<div className="text-xs text-gray-500 mt-0.5">14:35 PM</div>
</td>
<td className="py-4 px-4 align-top pt-4">
<div className="flex items-center gap-2">
<img alt="Avatar" className="w-6 h-6 rounded-full bg-gray-100" src="https://i.pravatar.cc/150?img=32"/>
<span className="font-medium text-gray-700">Mariam Diallo</span>
</div>
</td>
<td className="py-4 px-4 align-top pt-4 text-gray-500 flex items-center gap-1.5 mt-4">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
                                Shelf A-4, Bin 12
                            </td>
<td className="py-4 px-4 align-top pt-4">
<span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-2 py-1 rounded-md text-xs font-medium border border-orange-200">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span> Needs Attention
                                </span>
</td>
<td className="py-4 px-4 align-top pt-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors shadow-sm">Review</button>
<button className="p-1.5 text-orange-500 border border-orange-200 bg-orange-50 rounded hover:bg-orange-100 transition-colors">
<iconify-icon className="text-base" icon="solar:danger-triangle-linear"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="bg-gray-50/50">
<td className="p-0 border-b border-gray-200" colspan="8">
<div className="ml-14 mr-4 mb-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-sm p-5 flex flex-col lg:flex-row gap-6">

<div className="flex gap-4 lg:w-1/3">
<div className="w-20 h-20 rounded-md border border-gray-200 bg-gray-50 p-2 shrink-0 flex items-center justify-center">
<img alt="Product" className="object-cover h-full w-full rounded" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 leading-tight">MacBook Pro M3 Max 14"</h4>
<p className="text-xs text-gray-500 mt-1">Electronics • SK-9921</p>
<p className="text-xs font-medium text-gray-700 mt-2">Qty: 1</p>
</div>
</div>

<div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l border-gray-200 pt-4 lg:pt-0 lg:pl-6 space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Estimated Weight</span>
<span className="text-gray-900">2.1 kg</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Actual Weighed</span>
<span className="font-semibold text-orange-600">2.8 kg</span>
</div>
<div className="pt-3 border-t border-gray-100 flex justify-between items-center">
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Wallet Action</span>
<span className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-2 py-1 rounded text-xs font-medium border border-red-100 shadow-sm">
<iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon> $14.50 Auto-Debit
                                            </span>
</div>
</div>

<div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l border-gray-200 pt-4 lg:pt-0 lg:pl-6 flex flex-col justify-center">
<label className="text-xs font-medium text-gray-600 mb-2">Assign to Lot target</label>
<div className="relative mb-2">
<select className="w-full appearance-none bg-white border border-orange-300 ring-1 ring-orange-200 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none cursor-pointer">
<option selected="">KOLI-04 (Air Freight)</option>
<option>KOLI-05 (Sea Freight)</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-gray-400 pointer-events-none text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="flex items-start gap-2 text-xs text-orange-700 bg-orange-50 p-2.5 rounded-md border border-orange-200">
<iconify-icon className="shrink-0 text-orange-500 mt-0.5 text-sm" icon="solar:danger-circle-linear"></iconify-icon>
<span className="leading-relaxed">Adding this <b>2.8kg</b> item exceeds KOLI-04 capacity. Please assign to a different lot.</span>
</div>
</div>
</div>
</td>
</tr>

<tr className="hover:bg-orange-50/30 transition-colors bg-orange-50/20 group">
<td className="py-4 px-4 text-center">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 absolute pointer-events-none text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-4">
<div className="flex items-start gap-2">
<button className="mt-1 text-gray-400 group-hover:text-gray-900 transition-colors">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<div>
<div className="font-semibold text-gray-900">#KOLI-8942</div>
<div className="text-xs text-gray-500 mt-0.5">Oct 23, 2023</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex bg-gray-100 text-gray-600 border border-gray-200 text-xs font-medium px-2.5 py-1 rounded-md">Unassigned</span>
</td>
<td className="py-4 px-4">
<div className="text-gray-900">Oct 22, 2023</div>
<div className="text-xs text-gray-500 mt-0.5">09:15 AM</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<img alt="Avatar" className="w-6 h-6 rounded-full bg-gray-100" src="https://i.pravatar.cc/150?img=11"/>
<span className="font-medium text-gray-700">Amadou Kane</span>
</div>
</td>
<td className="py-4 px-4 text-orange-600 flex items-center gap-1.5 mt-2">
<iconify-icon className="text-sm" icon="solar:danger-circle-linear"></iconify-icon>
                                Quarantine Q-1
                            </td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-2 py-1 rounded-md text-xs font-medium border border-orange-200">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Needs Attention
                                </span>
</td>
<td className="py-4 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors shadow-sm">Review</button>
<button className="p-1.5 text-gray-400 border border-gray-200 bg-white rounded hover:bg-gray-50 transition-colors">
<iconify-icon className="text-base" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-4 px-4 text-center">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 absolute pointer-events-none text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-4">
<div className="flex items-start gap-2">
<button className="mt-1 text-gray-400 group-hover:text-gray-900 transition-colors">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<div>
<div className="font-semibold text-gray-900">#KOLI-8943</div>
<div className="text-xs text-gray-500 mt-0.5">Oct 23, 2023</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex bg-gray-900 text-white text-xs font-medium px-2.5 py-1 rounded-md">Cargo #12 - Air</span>
</td>
<td className="py-4 px-4">
<div className="text-gray-900">Oct 24, 2023</div>
<div className="text-xs text-gray-500 mt-0.5">14:30 PM</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<img alt="Avatar" className="w-6 h-6 rounded-full bg-gray-100" src="https://i.pravatar.cc/150?img=32"/>
<span className="font-medium text-gray-700">Mariam Diallo</span>
</div>
</td>
<td className="py-4 px-4 text-gray-500 flex items-center gap-1.5 mt-2">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
                                Shelf A-4, Bin 12
                            </td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-medium border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Ready for Cargo
                                </span>
</td>
<td className="py-4 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-gray-400 border border-gray-200 bg-white rounded hover:bg-gray-50 transition-colors">
<iconify-icon className="text-base" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group border-b-transparent">
<td className="py-4 px-4 text-center">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 absolute pointer-events-none text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-4">
<div className="flex items-start gap-2">
<button className="mt-1 text-gray-400 group-hover:text-gray-900 transition-colors">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<div>
<div className="font-semibold text-gray-900">#KOLI-8944</div>
<div className="text-xs text-gray-500 mt-0.5">Oct 23, 2023</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex bg-gray-900 text-white text-xs font-medium px-2.5 py-1 rounded-md">Cargo #12 - Air</span>
</td>
<td className="py-4 px-4">
<div className="text-gray-900">Oct 24, 2023</div>
<div className="text-xs text-gray-500 mt-0.5">15:10 PM</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<img alt="Avatar" className="w-6 h-6 rounded-full bg-gray-100" src="https://i.pravatar.cc/150?img=41"/>
<span className="font-medium text-gray-700">Fatou Diop</span>
</div>
</td>
<td className="py-4 px-4 text-gray-500 flex items-center gap-1.5 mt-2">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
                                Shelf B-2, Bin 04
                            </td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-medium border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Ready for Cargo
                                </span>
</td>
<td className="py-4 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-gray-400 border border-gray-200 bg-white rounded hover:bg-gray-50 transition-colors">
<iconify-icon className="text-base" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</td>
</tr>
</tbody>
</table>

<div className="border-t border-gray-200 p-4 flex items-center justify-between bg-gray-50/30">
<span className="text-sm text-gray-500">Showing 1 to 4 of 842 items</span>
<div className="flex items-center gap-1 text-sm font-medium">
<button className="p-1.5 text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon className="text-base" icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded text-gray-900 shadow-sm">1</button>
<button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded transition-colors">3</button>
<span className="px-1 text-gray-400">...</span>
<button className="p-1.5 text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>

<button className="fixed bottom-6 right-6 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors z-50">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</button>
</main>

    </>
  );
}
