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
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between flex-shrink-0 z-20 hidden md:flex">
<div>
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<span className="text-lg font-semibold tracking-tighter">MYOOO</span>
</div>
<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:gift-linear" width="20"></iconify-icon>
                    Campaigns
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
                    Orders
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                    Merchants
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
                    Analytics
                </a>
</nav>
</div>
<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
<div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">JD</div>
<span>Jane Doe</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
<div className="flex items-center gap-4">
<nav className="flex text-sm text-gray-500">
<span className="hover:text-gray-900 cursor-pointer">Campaigns</span>
<span className="mx-2 text-gray-300">/</span>
<span className="text-gray-900 font-medium">Reward Wheel (Post-Checkout)</span>
</nav>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-gray-500 font-medium">Last synced: Just now</span>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-all">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon>
                    Preview Wheel
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-6xl mx-auto space-y-8">

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Campaign Settings</h2>
<div className="flex items-center gap-2">

<div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full py-1 pl-3 pr-1 shadow-sm">
<span className="text-xs font-medium text-green-600 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Active
                                </span>
<div className="relative inline-flex h-5 w-9 cursor-pointer items-center rounded-full bg-gray-900 transition-colors">
<span className="inline-block h-3.5 w-3.5 transform translate-x-4 rounded-full bg-white transition-transform"></span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2 text-gray-500">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wide">Schedule</span>
</div>
<button className="text-xs text-indigo-600 font-medium hover:underline">Edit</button>
</div>
<div className="space-y-1">
<p className="text-sm text-gray-900 font-medium">Oct 1, 2023 — Indefinite</p>
<p className="text-xs text-gray-500">Run continuously</p>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2 text-gray-500">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wide">Eligibility</span>
</div>
<button className="text-xs text-indigo-600 font-medium hover:underline">Edit</button>
</div>
<div className="space-y-1">
<p className="text-sm text-gray-900 font-medium">All completed orders</p>
<p className="text-xs text-gray-500">1 play per order • 15min redemption window</p>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2 text-gray-500">
<iconify-icon icon="solar:shield-warning-linear" width="18"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wide">Fallback</span>
</div>
<button className="text-xs text-indigo-600 font-medium hover:underline">Edit</button>
</div>
<div className="space-y-1">
<p className="text-sm text-gray-900 font-medium">Free Shipping Coupon</p>
<p className="text-xs text-gray-500">Triggered if rewards OOS or caps reached</p>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Rewards</h2>
<div className="h-6 w-px bg-gray-200"></div>

<div className="flex space-x-1 bg-gray-100 p-0.5 rounded-lg">
<button className="px-3 py-1 text-xs font-medium text-gray-900 bg-white rounded shadow-sm">Configuration</button>
<button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">Issued Audit</button>
</div>
</div>
<div className="flex items-center gap-2">
<div className="relative group">
<iconify-icon className="absolute left-2.5 top-2 text-gray-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 w-48 placeholder-gray-400 transition-all" placeholder="Search rewards..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md shadow hover:bg-gray-800 transition-all">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                                Add Reward
                            </button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-100 bg-gray-50/50">
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide w-10">Status</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Reward &amp; Product</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Merchant</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide text-right">Weight</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide text-right">Daily Cap</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide text-right">Total Cap</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide w-12"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50 transition-colors">
<td className="py-3 px-4">
<div className="w-2 h-2 rounded-full bg-green-500 mx-auto" title="Active"></div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded border border-gray-200 bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-400">
<iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">50% Off Ceramic Vase</div>
<div className="text-xs text-gray-500 flex items-center gap-1">
<iconify-icon icon="solar:tag-price-linear" width="12"></iconify-icon>
                                                    Discount • SKU: VS-001
                                                </div>
</div>
</div>
</td>
<td className="py-3 px-4">
<div className="text-sm text-gray-600">Pottery Barns</div>
</td>
<td className="py-3 px-4 text-right">
<span className="text-sm font-mono text-gray-700">25</span>
</td>
<td className="py-3 px-4 text-right">
<span className="text-sm font-mono text-gray-700">50</span>
<span className="text-xs text-gray-400 block">/ 100</span>
</td>
<td className="py-3 px-4 text-right">
<span className="text-sm font-mono text-gray-700">450</span>
<span className="text-xs text-gray-400 block">/ 1000</span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors bg-gray-50/30">
<td className="py-3 px-4">
<div className="w-2 h-2 rounded-full bg-green-500 mx-auto" title="Active"></div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded border border-gray-200 bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-400">
<iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Free Tote Bag</div>
<div className="text-xs text-gray-500 flex items-center gap-1">
<iconify-icon icon="solar:gift-linear" width="12"></iconify-icon>
                                                    Free Product • SKU: TB-992
                                                </div>
</div>
</div>
</td>
<td className="py-3 px-4">
<div className="text-sm text-gray-600">Myooo Official</div>
</td>
<td className="py-3 px-4 text-right">
<span className="text-sm font-mono text-gray-700">5</span>
</td>
<td className="py-3 px-4 text-right">
<span className="text-sm font-mono text-gray-700">10</span>
<span className="text-xs text-gray-400 block">/ 10</span>
</td>
<td className="py-3 px-4 text-right">
<span className="text-sm font-mono text-gray-700">100</span>
<span className="text-xs text-gray-400 block">/ 500</span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors opacity-60">
<td className="py-3 px-4">
<div className="w-2 h-2 rounded-full bg-gray-300 mx-auto" title="Paused"></div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded border border-gray-200 bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-400">
<iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">20% Off All Sneakers</div>
<div className="text-xs text-gray-500 flex items-center gap-1">
<iconify-icon icon="solar:tag-price-linear" width="12"></iconify-icon>
                                                    Discount • SKU: --
                                                </div>
</div>
</div>
</td>
<td className="py-3 px-4">
<div className="text-sm text-gray-600">Kicks Lab</div>
</td>
<td className="py-3 px-4 text-right">
<span className="text-sm font-mono text-gray-700">0</span>
</td>
<td className="py-3 px-4 text-right">
<span className="text-sm font-mono text-gray-700">-</span>
</td>
<td className="py-3 px-4 text-right">
<span className="text-sm font-mono text-gray-700">-</span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>

<div className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
<span className="text-xs text-gray-500">Showing 3 of 12 rewards</span>
<div className="flex gap-1">
<button className="p-1 text-gray-400 hover:text-gray-900 disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="p-1 text-gray-400 hover:text-gray-900">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="opacity-50 pointer-events-none filter blur-[1px]">
<div className="mt-8 mb-4">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Recent Activity</h2>
</div>
<div className="bg-white border border-gray-200 rounded-lg h-24 flex items-center justify-center">
<span className="text-gray-400 text-sm">Audit logs view</span>
</div>
</section>
</div>
</div>


<div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[1px] z-30"></div>

<div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-40 flex flex-col transform transition-transform duration-300 border-l border-gray-200">

<div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0 bg-white">
<div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Edit Reward</h3>
<p className="text-xs text-gray-500 mt-0.5">Configure reward details and limits.</p>
</div>
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">

<div className="space-y-3">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Reward Type</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="reward_type" type="radio"/>
<div className="p-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 peer-checked:border-indigo-600 peer-checked:bg-indigo-50/30 peer-checked:text-indigo-700 hover:bg-gray-100 transition-all text-center">
<iconify-icon className="mb-1 mx-auto" icon="solar:tag-price-linear" width="24"></iconify-icon>
<span className="text-xs font-medium block">Discount</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="reward_type" type="radio"/>
<div className="p-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 peer-checked:border-indigo-600 peer-checked:bg-indigo-50/30 peer-checked:text-indigo-700 hover:bg-gray-100 transition-all text-center">
<iconify-icon className="mb-1 mx-auto" icon="solar:gift-linear" width="24"></iconify-icon>
<span className="text-xs font-medium block">Free Product</span>
</div>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Product</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-gray-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" type="text" value="Modern Ceramic Vase"/>
<div className="absolute right-2 top-2">
<img className="w-6 h-6 rounded object-cover border border-gray-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon icon="solar:shop-linear" width="14"></iconify-icon>
<span>Pottery Barns</span>
</div>
</div>

<div className="space-y-4 pt-2">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">User-facing Label</label>
<input className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-200 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" type="text" value="50% Off Special"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
<input className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-200 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" type="text" value="Get this limited edition vase for half price."/>
</div>
</div>

<div className="p-4 bg-gray-50 rounded-lg border border-gray-100 space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Pricing Rule</span>
<div className="flex bg-white rounded border border-gray-200 p-0.5">
<button className="px-2 py-0.5 text-xs font-medium bg-gray-100 rounded text-gray-900 shadow-sm">Fixed</button>
<button className="px-2 py-0.5 text-xs font-medium text-gray-500 hover:text-gray-900">% Off</button>
</div>
</div>
<div className="flex gap-4">
<div className="w-1/2">
<label className="block text-xs text-gray-500 mb-1">Original Price</label>
<div className="text-sm font-medium text-gray-400 line-through">$80.00</div>
</div>
<div className="w-1/2">
<label className="block text-xs text-gray-900 font-medium mb-1">New Price</label>
<div className="relative">
<span className="absolute left-3 top-2 text-gray-500">$</span>
<input className="w-full pl-6 pr-3 py-1.5 text-sm font-semibold text-green-600 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500" type="number" value="40.00"/>
</div>
</div>
</div>
<div className="flex items-start gap-2 pt-1">
<div className="relative inline-flex h-4 w-7 flex-shrink-0 cursor-pointer items-center rounded-full bg-indigo-600 transition-colors mt-0.5">
<span className="inline-block h-2.5 w-2.5 transform translate-x-3.5 rounded-full bg-white transition-transform"></span>
</div>
<span className="text-xs text-gray-600">Prevent applying if item is already on sale</span>
</div>
</div>

<div className="space-y-4 border-t border-gray-100 pt-4">
<h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Limits &amp; Availability</h4>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Weight (Chance)</label>
<input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:border-indigo-500" type="number" value="25"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Per User Cap</label>
<input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:border-indigo-500" placeholder="Optional" type="number"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Daily Cap</label>
<input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:border-indigo-500" type="number" value="100"/>
<div className="text-[10px] text-orange-500 mt-1">85% claimed today</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Total Cap</label>
<input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:border-indigo-500" type="number" value="1000"/>
</div>
</div>
<div className="bg-amber-50 border border-amber-100 rounded-md p-3 flex gap-2">
<iconify-icon className="text-amber-600 flex-shrink-0" icon="solar:info-circle-linear" width="16"></iconify-icon>
<p className="text-xs text-amber-700 leading-tight">If stock runs out or cap is reached, the "Free Shipping Coupon" fallback reward will be issued.</p>
</div>
</div>
</div>

<div className="p-6 border-t border-gray-100 bg-gray-50 flex items-center justify-between flex-shrink-0">
<button className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">Delete</button>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-all">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md shadow hover:bg-gray-800 transition-all">Save Changes</button>
</div>
</div>
</div>
</main>

    </>
  );
}
