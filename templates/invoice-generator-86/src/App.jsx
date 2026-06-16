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
      

<nav className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 text-white rounded-md flex items-center justify-center font-semibold tracking-tighter text-sm">
                    INV
                </div>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    Pending
                </span>
</div>
</div>
</nav>

<main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex flex-col gap-8">

<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Invoice Generator</h1>
<p className="text-sm text-zinc-500 mt-1">Create, manage, and send professional invoices.</p>
</div>
<div className="flex flex-wrap items-center gap-2 sm:gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/20 shadow-sm">
<iconify-icon className="text-lg" icon="solar:diskette-linear" strokeWidth="1.5"></iconify-icon>
                    Save
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/20 shadow-sm">
<iconify-icon className="text-lg" icon="solar:download-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                    PDF
                </button>
</div>
</header>

<div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden relative">

<div className="h-1 w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200 opacity-20"></div>

<div className="p-6 sm:p-8 grid md:grid-cols-2 gap-8 lg:gap-12 border-b border-zinc-100">

<div className="flex flex-col gap-4">
<h2 className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Bill To</h2>
<div className="space-y-3">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full pl-10 pr-3 py-2 bg-zinc-50/50 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all hover:bg-zinc-50" placeholder="Client Name" type="text" value="Acme Corporation"/>
</div>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full pl-10 pr-3 py-2 bg-zinc-50/50 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all hover:bg-zinc-50" placeholder="Email Address" type="email" value="billing@acmecorp.com"/>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<h2 className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Details</h2>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 block">Invoice Number</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 bg-zinc-100/50 border border-zinc-200 rounded-lg text-sm text-zinc-600 focus:outline-none cursor-default" readonly="" type="text" value="INV-84920"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 block">Currency</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
<select className="w-full pl-9 pr-8 py-2 bg-zinc-50/50 border border-zinc-200 rounded-lg text-sm text-zinc-900 appearance-none focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all hover:bg-zinc-50">
<option value="USD">USD ($)</option>
<option value="EUR">EUR (€)</option>
<option value="GBP">GBP (£)</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 sm:p-8">

<div className="hidden sm:grid grid-cols-12 gap-3 pb-3 border-b border-zinc-100 text-xs font-medium text-zinc-400 uppercase tracking-wider">
<div className="col-span-6">Service / Item</div>
<div className="col-span-2 text-right">Qty</div>
<div className="col-span-3 text-right">Price</div>
<div className="col-span-1"></div>
</div>

<div className="flex flex-col gap-3 mt-3 sm:mt-4">

<div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start sm:items-center group">
<div className="col-span-1 sm:col-span-6">
<input className="w-full px-3 py-2 bg-transparent border border-transparent hover:border-zinc-200 focus:border-zinc-300 focus:bg-white rounded-md text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none transition-colors" placeholder="Description of service or product" type="text" value="Web App Development - Phase 1"/>
</div>
<div className="col-span-1 sm:col-span-2 flex items-center gap-2 sm:block">
<label className="sm:hidden text-xs text-zinc-400 w-12">Qty:</label>
<input className="w-full px-3 py-2 bg-transparent border border-transparent hover:border-zinc-200 focus:border-zinc-300 focus:bg-white rounded-md text-sm text-zinc-900 sm:text-right placeholder:text-zinc-300 focus:outline-none transition-colors" placeholder="0" type="number" value="1"/>
</div>
<div className="col-span-1 sm:col-span-3 flex items-center gap-2 sm:block relative">
<label className="sm:hidden text-xs text-zinc-400 w-12">Price:</label>
<span className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 text-sm hidden sm:block pointer-events-none opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">$</span>
<input className="w-full px-3 py-2 sm:pl-6 bg-transparent border border-transparent hover:border-zinc-200 focus:border-zinc-300 focus:bg-white rounded-md text-sm text-zinc-900 sm:text-right placeholder:text-zinc-300 focus:outline-none transition-colors" placeholder="0.00" type="number" value="4500.00"/>
</div>
<div className="col-span-1 flex justify-end sm:justify-center">
<button className="p-1.5 text-zinc-300 hover:text-red-500 rounded-md hover:bg-red-50 transition-colors focus:outline-none opacity-0 group-hover:opacity-100 focus-within:opacity-100">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start sm:items-center group">
<div className="col-span-1 sm:col-span-6">
<input className="w-full px-3 py-2 bg-transparent border border-transparent hover:border-zinc-200 focus:border-zinc-300 focus:bg-white rounded-md text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none transition-colors" placeholder="Description of service or product" type="text" value="UI/UX Design Consultation"/>
</div>
<div className="col-span-1 sm:col-span-2 flex items-center gap-2 sm:block">
<label className="sm:hidden text-xs text-zinc-400 w-12">Qty:</label>
<input className="w-full px-3 py-2 bg-transparent border border-transparent hover:border-zinc-200 focus:border-zinc-300 focus:bg-white rounded-md text-sm text-zinc-900 sm:text-right placeholder:text-zinc-300 focus:outline-none transition-colors" placeholder="0" type="number" value="10"/>
</div>
<div className="col-span-1 sm:col-span-3 flex items-center gap-2 sm:block relative">
<label className="sm:hidden text-xs text-zinc-400 w-12">Price:</label>
<span className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 text-sm hidden sm:block pointer-events-none opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">$</span>
<input className="w-full px-3 py-2 sm:pl-6 bg-transparent border border-transparent hover:border-zinc-200 focus:border-zinc-300 focus:bg-white rounded-md text-sm text-zinc-900 sm:text-right placeholder:text-zinc-300 focus:outline-none transition-colors" placeholder="0.00" type="number" value="150.00"/>
</div>
<div className="col-span-1 flex justify-end sm:justify-center">
<button className="p-1.5 text-zinc-300 hover:text-red-500 rounded-md hover:bg-red-50 transition-colors focus:outline-none opacity-0 group-hover:opacity-100 focus-within:opacity-100">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-4 border-t border-dashed border-zinc-200 pt-4">
<button className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none group">
<div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
<iconify-icon className="text-sm" icon="solar:add-linear" strokeWidth="2"></iconify-icon>
</div>
                        Add Line Item
                    </button>
</div>
</div>

<div className="bg-zinc-50/80 p-6 sm:p-8 border-t border-zinc-200 flex flex-col sm:flex-row justify-between gap-6">

<div className="w-full sm:w-1/2">
<label className="text-xs font-medium text-zinc-500 block mb-2">Notes / Payment Terms</label>
<textarea className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all resize-none" placeholder="Thank you for your business." rows="3"></textarea>
</div>

<div className="w-full sm:w-1/3 flex flex-col gap-3">
<div className="flex items-center justify-between text-sm text-zinc-500">
<span>Subtotal</span>
<span className="font-medium text-zinc-900">$6,000.00</span>
</div>
<div className="flex items-center justify-between text-sm text-zinc-500">
<span>Tax (0%)</span>
<span className="font-medium text-zinc-900">$0.00</span>
</div>
<div className="h-px w-full bg-zinc-200 my-1"></div>
<div className="flex items-end justify-between">
<span className="text-sm font-medium text-zinc-900">Total Due</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">USD $6,000.00</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-2">
<button className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/20 shadow-sm">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                Send Email
            </button>
<button className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-2.5 bg-zinc-900 border border-zinc-900 rounded-lg text-sm font-medium text-white hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/20 shadow-sm shadow-zinc-900/20">
<iconify-icon className="text-lg" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
                Pay with PayPal
            </button>
</div>

<div className="mt-8 pt-8 w-full">
<div className="w-full h-24 rounded-xl border border-dashed border-zinc-300 bg-zinc-50/50 flex flex-col items-center justify-center text-zinc-400 space-y-1">
<iconify-icon className="text-xl" icon="solar:ad-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Advertisement</span>
</div>
</div>
</main>

    </>
  );
}
