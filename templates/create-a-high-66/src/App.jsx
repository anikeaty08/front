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
      

<header className="h-16 shrink-0 bg-white border-b border-[#E6E9ED] flex items-center justify-between px-6 z-10 relative">
<div className="flex items-center gap-3">

<svg aria-hidden="true" className="shrink-0" fill="none" height="28" viewbox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
<g transform="skewX(-22) translate(8, 0)">

<rect fill="#C41230" height="2" width="10" x="8" y="4"></rect>
<rect fill="#C41230" height="2" width="10" x="8" y="7"></rect>

<rect fill="#012169" height="2" width="16" x="2" y="12"></rect>
<rect fill="#012169" height="2" width="16" x="2" y="15"></rect>

<rect fill="#C41230" height="3" width="20" x="-2" y="20"></rect>
<rect fill="#C41230" height="3" width="20" x="-2" y="24"></rect>
</g>
</svg>
<span className="text-lg font-semibold tracking-tight text-[#012169]">BOA</span>
</div>
<div className="flex items-center gap-5">
<button aria-label="Notifications" className="relative text-[#6B7280] hover:text-[#1A1A1A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0052A5] rounded-full p-1">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C41230] rounded-full border border-white"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-[#1A1A1A] cursor-pointer hover:bg-gray-300 transition-colors border border-[#E6E9ED]">
                MR
            </div>
</div>
</header>

<main className="flex-1 grid grid-cols-5 gap-5 px-6 py-4 min-h-0 overflow-hidden">

<section className="col-span-3 flex flex-col gap-4 overflow-hidden">

<div className="bg-white rounded-xl shadow-sm border border-[#E6E9ED] p-4 shrink-0 transition-shadow hover:shadow-md">
<h1 className="text-base font-semibold tracking-tight text-[#1A1A1A]">Hello, Michael Reynolds</h1>
<p className="text-xs text-[#6B7280] mt-0.5">Here’s your financial overview</p>
</div>

<button className="bg-white rounded-xl shadow-sm border border-[#E6E9ED] p-4 shrink-0 flex items-center justify-between group transition-all hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0052A5] focus:ring-offset-1 text-left w-full">
<div>
<h2 className="text-sm font-semibold text-[#012169] flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:target-linear"></iconify-icon>
                        BOA Financial Life Plan
                    </h2>
<p className="text-xs text-[#6B7280] mt-0.5">Your next steps are ready. Let’s go</p>
</div>
<iconify-icon className="text-[#6B7280] text-lg group-hover:translate-x-1 transition-transform duration-150" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>

<div className="flex flex-col gap-3 shrink-0 mt-1">
<div className="flex items-end justify-between px-1">
<h3 className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">Banking</h3>
<div className="text-right flex items-end gap-2">
<span className="text-xs text-[#6B7280] font-medium pb-1">Total Balance</span>
<span className="text-2xl font-semibold tracking-tight text-[#012169]">$63,200.00</span>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-[#E6E9ED] overflow-hidden flex flex-col transition-shadow hover:shadow-md">
<a className="flex items-center justify-between p-3 border-b border-[#E6E9ED] hover:bg-gray-50 transition-colors group focus:outline-none focus:bg-gray-50" href="#">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052A5] flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-[#1A1A1A]">Business Checking</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-[#1A1A1A]">$41,200.00</span>
<iconify-icon className="text-[#E6E9ED] group-hover:text-[#6B7280] transition-colors text-lg group-hover:translate-x-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</a>
<a className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors group focus:outline-none focus:bg-gray-50" href="#">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052A5] flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:safe-square-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-[#1A1A1A]">Corporate Savings</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-[#1A1A1A]">$22,000.00</span>
<iconify-icon className="text-[#E6E9ED] group-hover:text-[#6B7280] transition-colors text-lg group-hover:translate-x-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>

<div className="grid grid-cols-2 gap-4 shrink-0 mt-1">
<div className="flex flex-col gap-2">
<h3 className="text-xs font-semibold uppercase tracking-wide text-[#6B7280] px-1">Investments</h3>
<div className="bg-white rounded-xl shadow-sm border border-[#E6E9ED] overflow-hidden transition-shadow hover:shadow-md h-full">
<a className="flex h-full items-center justify-between p-3 hover:bg-gray-50 transition-colors group focus:outline-none focus:bg-gray-50" href="#">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-blue-50 text-[#0052A5] flex items-center justify-center shrink-0">
<iconify-icon className="text-base" icon="solar:chart-square-linear"></iconify-icon>
</div>
<p className="text-xs font-medium text-[#1A1A1A] truncate w-24">Corporate Investment Fund</p>
</div>
<span className="text-xs font-semibold text-[#1A1A1A]">$22,300</span>
</a>
</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-xs font-semibold uppercase tracking-wide text-[#6B7280] px-1">Portfolio</h3>
<div className="bg-white rounded-xl shadow-sm border border-[#E6E9ED] overflow-hidden transition-shadow hover:shadow-md h-full">
<a className="flex h-full items-center justify-between p-3 hover:bg-gray-50 transition-colors group focus:outline-none focus:bg-gray-50" href="#">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-blue-50 text-[#0052A5] flex items-center justify-center shrink-0">
<iconify-icon className="text-base" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<p className="text-xs font-medium text-[#1A1A1A]">Managed Assets</p>
</div>
<span className="text-xs font-semibold text-[#1A1A1A]">$18,400</span>
</a>
</div>
</div>
</div>
</section>

<section className="col-span-2 flex flex-col gap-5 overflow-hidden relative">

<div className="bg-white rounded-xl shadow-sm border border-[#E6E9ED] p-5 shrink-0 transition-shadow hover:shadow-md flex flex-col relative overflow-hidden animate-[slideDown_200ms_ease-out]">

<div className="absolute top-0 left-0 w-full h-[3px] bg-[#C41230]"></div>
<div className="flex gap-3 items-start">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-[#DC2626] mt-0.5">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-[#1A1A1A]">Transfer could not be completed</h4>
<p className="text-xs text-[#6B7280] mt-1 leading-relaxed">We’re unable to process your request at this time. For further assistance, please contact BOA Customer Service.</p>
<div className="bg-[#F2F4F7] rounded-lg p-3 grid grid-cols-2 gap-y-2 gap-x-4 mt-3">
<div>
<span className="block text-xs uppercase tracking-wide text-[#6B7280] font-medium scale-90 origin-left">Recipient</span>
<span className="block text-xs font-medium text-[#1A1A1A]">Ricardo P Mendoza</span>
</div>
<div>
<span className="block text-xs uppercase tracking-wide text-[#6B7280] font-medium scale-90 origin-left">Routing Number</span>
<span className="block text-xs font-medium text-[#1A1A1A]">****0248</span>
</div>
<div>
<span className="block text-xs uppercase tracking-wide text-[#6B7280] font-medium scale-90 origin-left">Transfer Type</span>
<span className="block text-xs font-medium text-[#1A1A1A]">Domestic Wire</span>
</div>
<div>
<span className="block text-xs uppercase tracking-wide text-[#6B7280] font-medium scale-90 origin-left">Attempted</span>
<span className="block text-xs font-medium text-[#1A1A1A]">Apr 18, 2026</span>
</div>
</div>
<div className="flex items-center gap-2 mt-4">
<button className="bg-[#0052A5] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#004080] transition-colors active:scale-95 focus:ring-2 focus:ring-[#0052A5] focus:ring-offset-2 outline-none">Try Again</button>
<button className="text-[#6B7280] text-xs font-medium px-4 py-2 rounded-lg hover:text-[#1A1A1A] hover:bg-gray-100 transition-colors active:scale-95 focus:ring-2 focus:ring-gray-200 outline-none">Cancel</button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2 flex-1 min-h-0">
<h3 className="text-xs font-semibold uppercase tracking-wide text-[#6B7280] px-1">Recent Activity</h3>
<div className="bg-white rounded-xl shadow-sm border border-[#E6E9ED] flex flex-col h-full overflow-hidden transition-shadow hover:shadow-md">

<div className="grid grid-cols-12 gap-2 px-4 py-2.5 border-b border-[#E6E9ED] bg-gray-50/50 shrink-0">
<div className="col-span-2 text-xs uppercase tracking-wide font-medium text-[#6B7280] scale-90 origin-left">Date</div>
<div className="col-span-5 text-xs uppercase tracking-wide font-medium text-[#6B7280] scale-90 origin-left">Description</div>
<div className="col-span-3 text-xs uppercase tracking-wide font-medium text-[#6B7280] text-right scale-90 origin-right">Amount</div>
<div className="col-span-2 text-xs uppercase tracking-wide font-medium text-[#6B7280] text-right scale-90 origin-right">Status</div>
</div>

<div className="flex flex-col flex-1">
<div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[#E6E9ED] items-center hover:bg-gray-50 transition-colors cursor-default">
<div className="col-span-2 text-xs text-[#6B7280]">Apr 17</div>
<div className="col-span-5 text-xs font-medium text-[#1A1A1A] truncate pr-2">ACH Credit – Global Supply Chain Inc</div>
<div className="col-span-3 text-xs font-semibold text-[#16A34A] text-right">+$12,500.00</div>
<div className="col-span-2 flex justify-end">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20 scale-90 origin-right">Completed</span>
</div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[#E6E9ED] items-center hover:bg-gray-50 transition-colors cursor-default">
<div className="col-span-2 text-xs text-[#6B7280]">Apr 16</div>
<div className="col-span-5 text-xs font-medium text-[#1A1A1A] truncate pr-2">Wire Transfer – Apex Industrial Ltd</div>
<div className="col-span-3 text-xs font-medium text-[#1A1A1A] text-right">-$8,200.00</div>
<div className="col-span-2 flex justify-end">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20 scale-90 origin-right">Completed</span>
</div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[#E6E9ED] items-center hover:bg-gray-50 transition-colors cursor-default">
<div className="col-span-2 text-xs text-[#6B7280]">Apr 15</div>
<div className="col-span-5 text-xs font-medium text-[#1A1A1A] truncate pr-2">Payroll Processing – Internal Disbursement</div>
<div className="col-span-3 text-xs font-medium text-[#1A1A1A] text-right">-$15,000.00</div>
<div className="col-span-2 flex justify-end">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/20 scale-90 origin-right">Pending</span>
</div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[#E6E9ED] items-center hover:bg-gray-50 transition-colors cursor-default">
<div className="col-span-2 text-xs text-[#6B7280]">Apr 14</div>
<div className="col-span-5 text-xs font-medium text-[#1A1A1A] truncate pr-2">Vendor Payment – Summit Logistics LLC</div>
<div className="col-span-3 text-xs font-medium text-[#1A1A1A] text-right">-$3,450.00</div>
<div className="col-span-2 flex justify-end">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-red-50 text-[#DC2626] ring-1 ring-inset ring-red-600/20 scale-90 origin-right">Failed</span>
</div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 py-3 items-center hover:bg-gray-50 transition-colors cursor-default h-full">
<div className="col-span-2 text-xs text-[#6B7280]">Apr 12</div>
<div className="col-span-5 text-xs font-medium text-[#1A1A1A] truncate pr-2">Incoming Wire – Orion Manufacturing Co</div>
<div className="col-span-3 text-xs font-semibold text-[#16A34A] text-right">+$9,800.00</div>
<div className="col-span-2 flex justify-end">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20 scale-90 origin-right">Completed</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<style>
        /* Smooth subtle entrance for the error notification to mimic application realism */
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>

    </>
  );
}
