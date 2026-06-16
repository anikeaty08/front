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
      
<div className="flex h-screen w-full">

<aside className="w-20 lg:w-64 border-r border-slate-100 flex flex-col bg-white">
<div className="p-6">
<h1 className="text-xl font-semibold tracking-tighter text-slate-900">HD<span className="hidden lg:inline">POS</span></h1>
</div>
<nav className="flex-1 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 bg-slate-50 text-slate-900 rounded-lg group" href="#">
<iconify-icon icon="solar:widget-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors group" href="#">
<iconify-icon icon="solar:shop-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Point of Sale</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors group" href="#">
<iconify-icon icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Inventory</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors group" href="#">
<iconify-icon icon="solar:bill-list-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Orders</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors group" href="#">
<iconify-icon icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Customers</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors group" href="#">
<iconify-icon icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Debts &amp; Credit</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors group" href="#">
<iconify-icon icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Reports</span>
</a>
</nav>
<div className="p-4 border-t border-slate-100">
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Settings</span>
</a>
<div className="mt-4 flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
<span className="text-xs font-semibold">AD</span>
</div>
<div className="hidden lg:block">
<p className="text-xs font-medium text-slate-900 leading-none">Admin User</p>
<p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Manager</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden">

<header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8">
<div className="flex items-center gap-4 flex-1">
<div className="relative max-w-md w-full">
<span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-slate-200 outline-none" placeholder="Search products, barcode, or SKU..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex bg-slate-100 p-1 rounded-lg">
<button className="px-3 py-1 text-xs font-medium bg-white rounded-md shadow-sm">USD</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500">SLSH</button>
</div>
<button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-lg">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 border-2 border-white rounded-full"></span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">New Transaction</span>
</button>
</div>
</header>

<div className="flex-1 overflow-auto p-8 bg-[#fcfcfc]">
<div className="max-w-7xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-5 rounded-xl border border-slate-100 custom-shadow">
<div className="flex justify-between items-start">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<iconify-icon icon="solar:card-2-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12.5%</span>
</div>
<div className="mt-4">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Today's Sales</p>
<h3 className="text-2xl font-semibold mt-1 tracking-tight">$4,280.00</h3>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 custom-shadow">
<div className="flex justify-between items-start">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<iconify-icon icon="solar:bag-heart-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">142 orders</span>
</div>
<div className="mt-4">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Net Profit</p>
<h3 className="text-2xl font-semibold mt-1 tracking-tight">$1,120.50</h3>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 custom-shadow">
<div className="flex justify-between items-start">
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<iconify-icon icon="solar:archive-check-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">8 items</span>
</div>
<div className="mt-4">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Low Stock</p>
<h3 className="text-2xl font-semibold mt-1 tracking-tight">24 Items</h3>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 custom-shadow">
<div className="flex justify-between items-start">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">New Today</span>
</div>
<div className="mt-4">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Customers</p>
<h3 className="text-2xl font-semibold mt-1 tracking-tight">1,842</h3>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

<div className="xl:col-span-8 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Product Catalog</h2>
<div className="flex gap-2">
<button className="text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-md hover:bg-slate-50">All Items</button>
<button className="text-xs px-3 py-1.5 text-slate-500 hover:bg-slate-50 rounded-md">Food</button>
<button className="text-xs px-3 py-1.5 text-slate-500 hover:bg-slate-50 rounded-md">Drinks</button>
<button className="text-xs px-3 py-1.5 text-slate-500 hover:bg-slate-50 rounded-md">Gadgets</button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

<div className="bg-white border border-slate-100 p-4 rounded-xl custom-shadow hover:border-slate-300 transition-all cursor-pointer group">
<div className="aspect-square bg-slate-50 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform" icon="solar:laptop-linear" width="48"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">SKU: 9021</p>
<h4 className="text-sm font-medium text-slate-900 mt-1 line-clamp-1">MacBook Air M2</h4>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm font-semibold">$1,299.00</span>
<span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded">12 In Stock</span>
</div>
</div>

<div className="bg-white border border-slate-100 p-4 rounded-xl custom-shadow hover:border-slate-300 transition-all cursor-pointer group">
<div className="aspect-square bg-slate-50 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform" icon="solar:headphones-round-linear" width="48"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">SKU: 4421</p>
<h4 className="text-sm font-medium text-slate-900 mt-1 line-clamp-1">Sony WH-1000XM5</h4>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm font-semibold">$349.00</span>
<span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded">5 In Stock</span>
</div>
</div>

<div className="bg-white border border-slate-100 p-4 rounded-xl custom-shadow hover:border-slate-300 transition-all cursor-pointer group">
<div className="aspect-square bg-slate-50 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform" icon="solar:watch-square-minimalistic-linear" width="48"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">SKU: 3209</p>
<h4 className="text-sm font-medium text-slate-900 mt-1 line-clamp-1">Apple Watch S8</h4>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm font-semibold">$399.00</span>
<span className="text-[10px] bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded">2 Low Stock</span>
</div>
</div>

<div className="bg-white border border-slate-100 p-4 rounded-xl custom-shadow hover:border-slate-300 transition-all cursor-pointer group">
<div className="aspect-square bg-slate-50 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform" icon="solar:iphone-linear" width="48"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">SKU: 1102</p>
<h4 className="text-sm font-medium text-slate-900 mt-1 line-clamp-1">iPhone 14 Pro</h4>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm font-semibold">$999.00</span>
<span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded">8 In Stock</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 custom-shadow overflow-hidden">
<div className="p-5 border-b border-slate-50 flex items-center justify-between">
<h3 className="text-sm font-semibold">Recent Transactions</h3>
<button className="text-xs text-blue-600 font-medium">View All History</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead>
<tr className="bg-slate-50/50 text-slate-500 font-medium border-b border-slate-50">
<th className="px-6 py-3 font-medium">Invoice</th>
<th className="px-6 py-3 font-medium">Customer</th>
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Method</th>
<th className="px-6 py-3 font-medium">Total</th>
<th className="px-6 py-3 font-medium">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">#INV-8902</td>
<td className="px-6 py-4">Ahmed Jama</td>
<td className="px-6 py-4 text-slate-500">Oct 24, 14:20</td>
<td className="px-6 py-4"><span className="flex items-center gap-1.5"><iconify-icon icon="solar:smartphone-linear" width="14"></iconify-icon> Zaad</span></td>
<td className="px-6 py-4 font-medium">$840.00</td>
<td className="px-6 py-4"><span className="bg-emerald-50 text-emerald-600 text-[10px] px-2 py-1 rounded-full font-medium">Completed</span></td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">#INV-8901</td>
<td className="px-6 py-4">Sarah Wilson</td>
<td className="px-6 py-4 text-slate-500">Oct 24, 13:45</td>
<td className="px-6 py-4"><span className="flex items-center gap-1.5"><iconify-icon icon="solar:card-linear" width="14"></iconify-icon> Cash</span></td>
<td className="px-6 py-4 font-medium">$120.00</td>
<td className="px-6 py-4"><span className="bg-orange-50 text-orange-600 text-[10px] px-2 py-1 rounded-full font-medium">Pending</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="xl:col-span-4">
<div className="bg-white border border-slate-100 rounded-2xl custom-shadow flex flex-col h-[calc(100vh-12rem)] sticky top-8">
<div className="p-6 border-b border-slate-50 flex items-center justify-between">
<h3 className="text-md font-semibold tracking-tight">Current Cart</h3>
<button className="text-slate-400 hover:text-rose-500"><iconify-icon icon="solar:trash-bin-trash-linear" width="20"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-4">

<div className="flex items-center gap-4 group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-400" icon="solar:laptop-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-slate-900 leading-tight">MacBook Air M2</h4>
<p className="text-xs text-slate-400 mt-0.5">$1,299.00 x 1</p>
</div>
<div className="flex items-center gap-2">
<button className="w-6 h-6 border border-slate-200 rounded flex items-center justify-center hover:bg-slate-50">-</button>
<span className="text-sm font-medium">1</span>
<button className="w-6 h-6 border border-slate-200 rounded flex items-center justify-center hover:bg-slate-50">+</button>
</div>
</div>

<div className="flex items-center gap-4 group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-400" icon="solar:iphone-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-slate-900 leading-tight">iPhone 14 Pro</h4>
<p className="text-xs text-slate-400 mt-0.5">$999.00 x 2</p>
</div>
<div className="flex items-center gap-2">
<button className="w-6 h-6 border border-slate-200 rounded flex items-center justify-center hover:bg-slate-50">-</button>
<span className="text-sm font-medium">2</span>
<button className="w-6 h-6 border border-slate-200 rounded flex items-center justify-center hover:bg-slate-50">+</button>
</div>
</div>
</div>

<div className="p-6 bg-slate-50/50 space-y-4">
<div className="space-y-2">
<div className="flex justify-between text-sm">
<span className="text-slate-500">Subtotal</span>
<span className="font-medium">$3,297.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Tax (5%)</span>
<span className="font-medium">$164.85</span>
</div>
<div className="flex justify-between text-sm pt-2 border-t border-slate-200">
<span className="font-semibold text-slate-900">Total</span>
<span className="font-semibold text-slate-900">$3,461.85</span>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mt-4">
<button className="p-3 border border-slate-200 rounded-xl flex flex-col items-center gap-1 hover:border-slate-400 transition-all bg-white">
<iconify-icon icon="solar:card-linear" width="20"></iconify-icon>
<span className="text-[10px] font-medium uppercase">Cash</span>
</button>
<button className="p-3 border border-slate-200 rounded-xl flex flex-col items-center gap-1 hover:border-slate-400 transition-all bg-white">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon>
<span className="text-[10px] font-medium uppercase">Zaad / Edahab</span>
</button>
</div>
<button className="w-full py-4 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                                        Complete Sale &amp; Print
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="fixed bottom-6 right-6 flex flex-col gap-3">
<div className="bg-white border border-slate-100 p-4 rounded-xl shadow-2xl flex items-center gap-4 min-w-[300px]">
<div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center shrink-0">
<iconify-icon icon="solar:danger-triangle-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Low Stock Alert</p>
<p className="text-xs text-slate-500">Apple Watch S8 is below threshold (2 units left)</p>
</div>
<button className="ml-auto text-slate-300 hover:text-slate-500">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
</button>
</div>
</div>

    </>
  );
}
