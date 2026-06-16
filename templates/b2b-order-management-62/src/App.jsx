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
      

<header className="md:hidden flex items-center justify-between px-4 h-14 bg-white border-b border-gray-200 z-10 shrink-0">
<div className="flex items-center gap-3">
<button className="text-gray-500 hover:text-gray-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="text-base font-semibold tracking-tighter text-gray-900">OM</div>
</div>
<button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</header>

<aside className="hidden md:flex flex-col w-[240px] bg-[#F7F7F8] border-r border-gray-200 h-full shrink-0">
<div className="h-14 flex items-center px-6 border-b border-gray-200/50">
<div className="text-lg font-semibold tracking-tighter text-gray-900">OM</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-200/50 rounded-lg" href="#">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Buyers
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
                All Orders
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Form Gallery
            </a>
</nav>
<div className="p-4 border-t border-gray-200/50">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Settings
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">
<div className="flex-1 overflow-y-auto p-4 md:p-8 lg:px-12 flex flex-col lg:flex-row gap-8 items-start">

<div className="flex-1 w-full max-w-4xl space-y-8">

<div className="space-y-4">
<nav className="flex items-center text-xs text-gray-500 font-medium">
<a className="hover:text-gray-900 transition-colors" href="#">Buyers</a>
<iconify-icon className="mx-1" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="text-gray-900">Mahalaxmi Textiles</span>
</nav>
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Mahalaxmi Textiles</h1>
<p className="text-gray-500 mt-1">Added Oct 12, 2023</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:pen-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                Edit Profile
                            </button>
<button className="lg:hidden px-3 py-1.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                Add Order
                            </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
<div className="space-y-1">
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Contact</span>
<p className="text-gray-900 font-medium truncate">Rajesh Kumar</p>
</div>
<div className="space-y-1">
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Location</span>
<p className="text-gray-900 font-medium truncate">Surat, Gujarat</p>
</div>
<div className="space-y-1">
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Phone</span>
<p className="text-gray-900 font-medium truncate">+91 98765 43210</p>
</div>
<div className="space-y-1">
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email</span>
<p className="text-gray-900 font-medium truncate">info@mahalaxmi.com</p>
</div>
<div className="col-span-2 md:col-span-4 pt-2 border-t border-gray-100 mt-2 space-y-1">
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Remarks</span>
<p className="text-gray-700 text-sm leading-relaxed">Preferred transport via VRL Logistics. Needs copies of all challans via WhatsApp immediately after dispatch.</p>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Supplier Orders</h2>
<span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium">12 Total</span>
</div>

<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow shadow-sm" placeholder="Search by Supplier or Order ID..." type="text"/>
</div>
<div className="flex items-center gap-2">

<div className="relative min-w-[120px]">
<select className="appearance-none w-full px-3 py-2 pr-8 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 shadow-sm cursor-pointer">
<option value="">All Status</option>
<option value="pending">Pending</option>
<option value="confirmed">Confirmed</option>
<option value="dispatched">Dispatched</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>

<div className="relative min-w-[130px]">
<select className="appearance-none w-full px-3 py-2 pr-8 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 shadow-sm cursor-pointer">
<option value="">This Month</option>
<option value="last">Last Month</option>
<option value="all">All Time</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-3">

<div className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
<span className="text-xs font-semibold text-gray-500">SR</span>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-medium text-gray-900">Silk Route Mills</h3>
<span className="text-xs text-gray-400 font-medium">#ORD-8902</span>
</div>
<div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Ahmedabad</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> Oct 24, 2023</span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/2 pl-14 sm:pl-0 border-t border-gray-100 sm:border-0 pt-3 sm:pt-0">
<div className="space-y-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                                        Saree
                                    </span>
<p className="font-medium text-gray-900 text-right">₹1,45,000</p>
</div>
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                        Pending
                                    </span>
<button className="text-gray-400 hover:text-gray-900 transition-colors relative" title="View Order Forms">
<iconify-icon icon="solar:gallery-bold" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-gray-900 text-white text-[10px] font-medium w-4 h-4 flex items-center justify-center rounded-full border border-white">2</span>
</button>
</div>
</div>
</div>

<div className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
<span className="text-xs font-semibold text-gray-500">VF</span>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-medium text-gray-900">Vandana Fashions</h3>
<span className="text-xs text-gray-400 font-medium">#ORD-8871</span>
</div>
<div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Surat</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> Oct 18, 2023</span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/2 pl-14 sm:pl-0 border-t border-gray-100 sm:border-0 pt-3 sm:pt-0">
<div className="space-y-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                                        Lehenga
                                    </span>
<p className="font-medium text-gray-900 text-right">₹3,20,000</p>
</div>
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        Confirmed
                                    </span>
<button className="text-gray-400 hover:text-gray-900 transition-colors relative" title="View Order Forms">
<iconify-icon icon="solar:gallery-bold" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-gray-900 text-white text-[10px] font-medium w-4 h-4 flex items-center justify-center rounded-full border border-white">1</span>
</button>
</div>
</div>
</div>

<div className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
<span className="text-xs font-semibold text-gray-500">KT</span>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-medium text-gray-900">Kavya Trends</h3>
<span className="text-xs text-gray-400 font-medium">#ORD-8845</span>
</div>
<div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Delhi</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> Oct 10, 2023</span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/2 pl-14 sm:pl-0 border-t border-gray-100 sm:border-0 pt-3 sm:pt-0">
<div className="space-y-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                                        Suit
                                    </span>
<p className="font-medium text-gray-900 text-right">₹85,000</p>
</div>
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Dispatched
                                    </span>
<button className="text-gray-400 hover:text-gray-900 transition-colors relative" title="View Order Forms">
<iconify-icon icon="solar:gallery-bold" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-gray-900 text-white text-[10px] font-medium w-4 h-4 flex items-center justify-center rounded-full border border-white">3</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-gray-200/60">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Recent Order Forms</h2>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1" href="#">
                            View All <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

<div className="relative group aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer">

<div className="absolute inset-0 flex items-center justify-center text-gray-300">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white text-xs font-medium truncate">ORD-8902_pg1.jpg</p>
</div>
<div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<div className="bg-white/90 backdrop-blur text-gray-900 w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="relative group aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer">
<div className="absolute inset-0 flex items-center justify-center text-gray-300">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white text-xs font-medium truncate">ORD-8902_pg2.jpg</p>
</div>
<div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<div className="bg-white/90 backdrop-blur text-gray-900 w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="relative group aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer">
<div className="absolute inset-0 flex items-center justify-center text-gray-300">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white text-xs font-medium truncate">ORD-8871_final.pdf</p>
</div>
<div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<div className="bg-white/90 backdrop-blur text-gray-900 w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block w-[400px] shrink-0 bg-white border border-gray-200 rounded-2xl shadow-sm sticky top-0 overflow-hidden flex flex-col h-fit max-h-full">
<div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
<div>
<h2 className="text-base font-semibold tracking-tight text-gray-900">New Supplier Order</h2>
<p className="text-xs text-gray-500 mt-0.5">Auto-ID: <span className="font-medium text-gray-700">#ORD-8903</span></p>
</div>
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-5 overflow-y-auto space-y-5 flex-1">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">Supplier Name <span className="text-red-500">*</span></label>
<input className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-shadow" placeholder="e.g. Silk Route Mills" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">City</label>
<input className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-shadow" placeholder="e.g. Surat" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">Order Date</label>
<input className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-shadow" type="date" value="2023-10-25"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">Category</label>
<div className="relative">
<select className="appearance-none w-full px-3 py-2 pr-8 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 shadow-sm cursor-pointer">
<option value="saree">Saree</option>
<option value="lehenga">Lehenga</option>
<option value="suit">Suit</option>
<option value="others">Others</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">Order Value</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
<input className="w-full pl-7 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-shadow" placeholder="0.00" type="number"/>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">Status</label>
<div className="flex p-1 bg-gray-100/80 rounded-lg border border-gray-200/50">
<button className="flex-1 py-1.5 text-xs font-medium bg-white text-gray-900 rounded shadow-sm border border-gray-200/50">Pending</button>
<button className="flex-1 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900">Confirmed</button>
<button className="flex-1 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900">Dispatched</button>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">Order Forms (Images)</label>
<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-200 border-dashed rounded-xl hover:border-gray-300 hover:bg-gray-50/50 transition-colors cursor-pointer group">
<div className="space-y-1 text-center">
<iconify-icon className="mx-auto text-gray-400 group-hover:text-gray-500 transition-colors" icon="solar:gallery-add-linear" width="28"></iconify-icon>
<div className="flex text-sm text-gray-600 justify-center">
<span className="relative cursor-pointer rounded-md font-medium text-gray-900 hover:underline focus-within:outline-none">
<span>Upload files</span>
</span>
<p className="pl-1">or drag and drop</p>
</div>
<p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">Remarks</label>
<textarea className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-shadow resize-none" placeholder="Add any notes regarding this order..." rows="3"></textarea>
</div>
</div>
<div className="p-5 border-t border-gray-100 bg-gray-50/50 flex gap-3">
<button className="flex-1 px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm">Cancel</button>
<button className="flex-1 px-4 py-2 bg-gray-900 text-white font-medium text-sm rounded-lg hover:bg-gray-800 transition-colors shadow-sm">Save Order</button>
</div>
</div>
</div>
</main>

    </>
  );
}
