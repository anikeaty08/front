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
      

<aside className="w-64 flex flex-col justify-between hidden md:flex bg-[#232f3e] text-white">
<div>

<div className="h-16 flex items-center px-5 border-b border-[#37475A]">
<div className="flex items-center gap-2 text-white font-bold tracking-tight text-xl">
                    GIFTOS
                    <div className="flex flex-col justify-center mb-1">
<iconify-icon className="text-[#ff9900] translate-y-0.5" icon="lucide:smile" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-normal text-gray-300 ml-1 mt-1">seller</span>
</div>
</div>

<nav className="px-2 py-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-white bg-[#37475A] border-l-4 border-[#ff9900] transition-all group" href="#">
<iconify-icon className="text-white" height="18" icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#37475A] transition-all group border-l-4 border-transparent" href="#">
<iconify-icon className="text-gray-400 group-hover:text-white" height="18" icon="lucide:package" strokeWidth="1.5" width="18"></iconify-icon>
                    Inventory
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#37475A] transition-all group border-l-4 border-transparent" href="#">
<iconify-icon className="text-gray-400 group-hover:text-white" height="18" icon="lucide:shopping-cart" strokeWidth="1.5" width="18"></iconify-icon>
                    Orders
                    <span className="ml-auto text-[11px] bg-[#ff9900] text-black px-1.5 py-0.5 rounded font-bold">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#37475A] transition-all group border-l-4 border-transparent" href="#">
<iconify-icon className="text-gray-400 group-hover:text-white" height="18" icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
                    Customers
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#37475A] transition-all group border-l-4 border-transparent" href="#">
<iconify-icon className="text-gray-400 group-hover:text-white" height="18" icon="lucide:megaphone" strokeWidth="1.5" width="18"></iconify-icon>
                    Advertising
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#37475A] transition-all group border-l-4 border-transparent" href="#">
<iconify-icon className="text-gray-400 group-hover:text-white" height="18" icon="lucide:bar-chart-3" strokeWidth="1.5" width="18"></iconify-icon>
                    Reports
                </a>
</nav>
</div>

<div className="p-4 border-t border-[#37475A]">
<div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-[#37475A] cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs text-[#232f3e] font-bold border border-gray-400">
                    AS
                </div>
<div className="flex flex-col">
<span className="text-xs font-bold text-white">Arjun Singh</span>
<span className="text-[10px] text-gray-400">India Store</span>
</div>
<iconify-icon className="ml-auto text-gray-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden relative">

<header className="h-16 border-b border-gray-300 flex items-center justify-between px-6 bg-white sticky top-0 z-10 shadow-sm">
<div className="flex items-center gap-4">
<button className="md:hidden text-[#232f3e]">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="hidden sm:flex items-center gap-2 text-sm text-[#565959]">
<span className="hover:underline hover:text-[#c7511f] cursor-pointer transition-colors">Giftos.in</span>
<span className="text-gray-400">›</span>
<span className="text-[#c7511f] font-medium">Dashboard</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative group hidden sm:block">

<div className="flex h-9">
<div className="bg-gray-100 border border-gray-300 border-r-0 rounded-l px-2 flex items-center text-xs text-gray-600 border-r border-gray-300 bg-gray-50 hover:bg-gray-200 cursor-pointer">
                            All <iconify-icon className="ml-1" icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
<input className="border border-gray-300 px-3 w-64 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#e77600]/50 focus:border-[#e77600] z-10" placeholder="Search..." type="text"/>
<button className="bg-[#febd69] hover:bg-[#f3a847] border border-[#a88734] rounded-r px-3 flex items-center justify-center">
<iconify-icon className="text-[#0f1111]" icon="lucide:search" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-3 text-[#0f1111]">
<button className="relative hover:text-[#c7511f] transition-colors font-medium text-sm">
                        Messages
                    </button>
<span className="text-gray-300">|</span>
<button className="relative hover:text-[#c7511f] transition-colors font-medium text-sm">
                        Help
                    </button>
<span className="text-gray-300">|</span>
<button className="relative hover:text-[#c7511f] transition-colors font-medium text-sm">
                        Settings
                    </button>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-bold text-[#0f1111]">Store Performance</h1>
<p className="text-xs text-[#565959] mt-1">Check your sales and inventory health.</p>
</div>
<div className="flex items-center gap-3">
<div className="text-sm text-[#007185] hover:underline hover:text-[#c7511f] cursor-pointer flex items-center gap-1 font-medium">
                        View payments summary
                    </div>

<button className="flex items-center gap-2 bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] text-[#0f1111] px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-all">
<iconify-icon icon="lucide:plus" strokeWidth="2" width="16"></iconify-icon>
                        Add a Product
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white border border-gray-300 rounded p-4 hover:border-gray-400 transition-colors shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-bold text-[#0f1111]">Total Sales</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-normal text-[#0f1111]">₹4,52,310</span>
</div>
<div className="mt-2 flex items-center gap-1.5 text-xs">
<span className="text-[#007600] font-medium flex items-center">
<iconify-icon icon="lucide:arrow-up" strokeWidth="2" width="12"></iconify-icon>
                            12.5%
                        </span>
<span className="text-[#565959]">vs last week</span>
</div>
</div>

<div className="bg-white border border-gray-300 rounded p-4 hover:border-gray-400 transition-colors shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-bold text-[#0f1111]">Units Ordered</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-normal text-[#0f1111]">842</span>
</div>
<div className="mt-2 flex items-center gap-1.5 text-xs">
<span className="text-[#007600] font-medium flex items-center">
<iconify-icon icon="lucide:arrow-up" strokeWidth="2" width="12"></iconify-icon>
                            8%
                        </span>
<span className="text-[#565959]">volume increase</span>
</div>
</div>

<div className="bg-white border border-gray-300 rounded p-4 hover:border-gray-400 transition-colors shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-bold text-[#0f1111]">Order Defect Rate</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-normal text-[#0f1111]">0.12%</span>
</div>
<div className="mt-2 flex items-center gap-1.5 text-xs">
<span className="text-[#007600] font-medium">Good</span>
<span className="text-[#565959]">(Target: under 1%)</span>
</div>
</div>

<div className="bg-white border border-gray-300 rounded p-4 hover:border-gray-400 transition-colors shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-bold text-[#0f1111]">Pending Orders</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-normal text-[#0f1111]">18</span>
</div>
<div className="mt-2 flex items-center gap-1.5 text-xs">
<span className="font-bold text-[#b12704]">Action Required</span>
<span className="text-[#007185] hover:underline cursor-pointer">Ship now</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white border border-gray-300 rounded p-5 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold text-[#0f1111]">Sales Dashboard</h3>
<div className="flex gap-4">
<span className="flex items-center gap-1 text-xs text-[#565959]"><div className="w-3 h-3 bg-[#e77600]"></div>This Year</span>
<span className="flex items-center gap-1 text-xs text-[#565959]"><div className="w-3 h-3 bg-gray-300"></div>Last Year</span>
</div>
</div>

<div className="h-64 flex items-end justify-between gap-2 sm:gap-4 mt-8 px-2 border-b border-gray-200 pb-0">

<div className="w-full bg-gray-200 hover:bg-[#ffdfa0] transition-colors relative group border-t border-x border-transparent hover:border-[#e77600]" style={{height: '40%'}}></div>
<div className="w-full bg-gray-200 hover:bg-[#ffdfa0] transition-colors relative group border-t border-x border-transparent hover:border-[#e77600]" style={{height: '55%'}}></div>
<div className="w-full bg-gray-200 hover:bg-[#ffdfa0] transition-colors relative group border-t border-x border-transparent hover:border-[#e77600]" style={{height: '45%'}}></div>
<div className="w-full bg-gray-200 hover:bg-[#ffdfa0] transition-colors relative group border-t border-x border-transparent hover:border-[#e77600]" style={{height: '65%'}}></div>
<div className="w-full bg-gray-200 hover:bg-[#ffdfa0] transition-colors relative group border-t border-x border-transparent hover:border-[#e77600]" style={{height: '50%'}}></div>
<div className="w-full bg-gray-200 hover:bg-[#ffdfa0] transition-colors relative group border-t border-x border-transparent hover:border-[#e77600]" style={{height: '75%'}}></div>
<div className="w-full bg-gray-200 hover:bg-[#ffdfa0] transition-colors relative group border-t border-x border-transparent hover:border-[#e77600]" style={{height: '60%'}}></div>
<div className="w-full bg-[#e77600] relative group shadow-sm" style={{height: '90%'}}>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black border border-gray-300 shadow-md text-xs px-2 py-1 z-20 font-medium whitespace-nowrap">₹4.5L</div>
</div>
<div className="w-full bg-gray-200 hover:bg-[#ffdfa0] transition-colors relative group border-t border-x border-transparent hover:border-[#e77600]" style={{height: '80%'}}></div>
<div className="w-full bg-gray-200 hover:bg-[#ffdfa0] transition-colors relative group border-t border-x border-transparent hover:border-[#e77600]" style={{height: '65%'}}></div>
<div className="w-full bg-gray-200 hover:bg-[#ffdfa0] transition-colors relative group border-t border-x border-transparent hover:border-[#e77600]" style={{height: '55%'}}></div>
<div className="w-full bg-gray-200 hover:bg-[#ffdfa0] transition-colors relative group border-t border-x border-transparent hover:border-[#e77600]" style={{height: '45%'}}></div>
</div>
<div className="flex justify-between mt-2 text-xs text-[#565959] font-normal px-2">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
<span>Jul</span>
<span>Aug</span>
<span>Sep</span>
<span>Oct</span>
<span>Nov</span>
<span>Dec</span>
</div>
</div>

<div className="bg-white border border-gray-300 rounded shadow-sm flex flex-col">
<div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
<div>
<h3 className="text-base font-bold text-[#0f1111]">Live Order Feed</h3>
</div>
<div className="text-xs text-[#007185] hover:underline cursor-pointer font-medium">View All</div>
</div>
<div className="flex-1 overflow-y-auto p-0 no-scrollbar divide-y divide-gray-100">

<div className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group cursor-pointer">
<div className="w-12 h-12 bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-400" icon="lucide:gift" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-[#007185] font-medium truncate hover:underline hover:text-[#c7511f]">Premium Chocolate Box</p>
<p className="text-xs text-[#565959] truncate mt-0.5">Ship to: Mumbai</p>
<p className="text-[10px] text-gray-500 mt-1">Order #392-192</p>
</div>
<div className="text-right">
<p className="text-sm font-bold text-[#b12704]">₹850</p>
<p className="text-[10px] text-gray-500">2m ago</p>
</div>
</div>

<div className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group cursor-pointer">
<div className="w-12 h-12 bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-400" icon="lucide:flower-2" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-[#007185] font-medium truncate hover:underline hover:text-[#c7511f]">Red Roses Bouquet</p>
<p className="text-xs text-[#565959] truncate mt-0.5">Ship to: Delhi</p>
<p className="text-[10px] text-gray-500 mt-1">Order #392-193</p>
</div>
<div className="text-right">
<p className="text-sm font-bold text-[#b12704]">₹1,200</p>
<p className="text-[10px] text-gray-500">12m ago</p>
</div>
</div>

<div className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group cursor-pointer">
<div className="w-12 h-12 bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-400" icon="lucide:watch" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-[#007185] font-medium truncate hover:underline hover:text-[#c7511f]">Classic Analog Watch</p>
<p className="text-xs text-[#565959] truncate mt-0.5">Ship to: Bangalore</p>
<p className="text-[10px] text-gray-500 mt-1">Order #392-194</p>
</div>
<div className="text-right">
<p className="text-sm font-bold text-[#b12704]">₹3,499</p>
<p className="text-[10px] text-gray-500">45m ago</p>
</div>
</div>

<div className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group cursor-pointer">
<div className="w-12 h-12 bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-400" icon="lucide:coffee" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-[#007185] font-medium truncate hover:underline hover:text-[#c7511f]">Custom Mug Set</p>
<p className="text-xs text-[#565959] truncate mt-0.5">Ship to: Pune</p>
<p className="text-[10px] text-gray-500 mt-1">Order #392-195</p>
</div>
<div className="text-right">
<p className="text-sm font-bold text-[#b12704]">₹450</p>
<p className="text-[10px] text-gray-500">1h ago</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
<div className="px-5 py-3 border-b border-gray-200 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h3 className="text-base font-bold text-[#0f1111]">Recent Orders</h3>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-[#565959]">Last 7 days</span>
<iconify-icon className="text-gray-500" icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-200 bg-gray-50 text-xs text-[#565959] font-normal">
<th className="px-5 py-2 font-bold uppercase">Order ID</th>
<th className="px-5 py-2 font-bold uppercase">Status</th>
<th className="px-5 py-2 font-bold uppercase">Customer</th>
<th className="px-5 py-2 font-bold uppercase">Payment</th>
<th className="px-5 py-2 font-bold uppercase">Amount</th>
<th className="px-5 py-2 font-bold uppercase text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group border-b border-gray-100 hover:bg-gray-50 transition-colors">
<td className="px-5 py-3 text-[#007185] font-medium hover:underline hover:text-[#c7511f] cursor-pointer">404-9281922-111</td>
<td className="px-5 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-[#007600] border border-green-200">
                                        Shipped
                                    </span>
</td>
<td className="px-5 py-3 text-[#0f1111]">
                                    Vikram Mehta
                                </td>
<td className="px-5 py-3 text-[#565959] flex items-center gap-2">
                                    UPI
                                </td>
<td className="px-5 py-3 text-[#0f1111] font-bold">₹2,450.00</td>
<td className="px-5 py-3 text-right">
<button className="bg-white border border-gray-400 hover:bg-gray-50 text-[#0f1111] text-xs px-2 py-1 rounded shadow-sm">
                                        Track
                                    </button>
</td>
</tr>
<tr className="group border-b border-gray-100 hover:bg-gray-50 transition-colors">
<td className="px-5 py-3 text-[#007185] font-medium hover:underline hover:text-[#c7511f] cursor-pointer">404-9281922-112</td>
<td className="px-5 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-bold bg-gray-100 text-[#565959] border border-gray-300">
                                        Unshipped
                                    </span>
</td>
<td className="px-5 py-3 text-[#0f1111]">
                                    Anjali Gupta
                                </td>
<td className="px-5 py-3 text-[#565959] flex items-center gap-2">
                                    NetBanking
                                </td>
<td className="px-5 py-3 text-[#0f1111] font-bold">₹950.00</td>
<td className="px-5 py-3 text-right">
<button className="bg-[#FFD814] border border-[#FCD200] hover:bg-[#F7CA00] text-[#0f1111] text-xs px-2 py-1 rounded shadow-sm font-medium">
                                        Confirm Shipment
                                    </button>
</td>
</tr>
<tr className="group hover:bg-gray-50 transition-colors">
<td className="px-5 py-3 text-[#007185] font-medium hover:underline hover:text-[#c7511f] cursor-pointer">404-9281922-113</td>
<td className="px-5 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-bold bg-red-50 text-[#b12704] border border-red-200">
                                        Cancelled
                                    </span>
</td>
<td className="px-5 py-3 text-[#0f1111]">
                                    Rajesh Kumar
                                </td>
<td className="px-5 py-3 text-[#565959] flex items-center gap-2">
                                    Credit Card
                                </td>
<td className="px-5 py-3 text-[#0f1111] font-bold">₹1,120.00</td>
<td className="px-5 py-3 text-right">
<button className="bg-white border border-gray-400 hover:bg-gray-50 text-[#0f1111] text-xs px-2 py-1 rounded shadow-sm">
                                        Details
                                    </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

    </>
  );
}
