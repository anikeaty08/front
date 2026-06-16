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
      
<div className="flex min-h-screen w-full">

<aside className="fixed left-0 top-0 z-50 h-screen w-20 flex-col items-center border-r border-slate-800 bg-[#0B1120] py-6 transition-all hover:w-72 group lg:flex">

<div className="mb-10 flex w-full items-center justify-center px-4 group-hover:justify-start group-hover:px-6">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
<span className="text-xl font-bold tracking-tighter">P</span>
</div>
<div className="ml-3 hidden opacity-0 transition-all duration-300 group-hover:block group-hover:opacity-100">
<h1 className="text-sm font-bold uppercase tracking-tight text-white">Prestigious</h1>
<p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Placement</p>
</div>
</div>

<nav className="flex w-full flex-1 flex-col gap-2 px-3">
<a className="flex items-center rounded-xl px-3 py-3 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white" href="#">
<iconify-icon className="shrink-0" height="20" icon="solar:widget-linear" width="20"></iconify-icon>
<span className="ml-3 hidden whitespace-nowrap text-sm font-medium transition-all group-hover:block">Dashboard</span>
</a>
<div className="my-2 h-px w-full bg-slate-800"></div>
<a className="relative flex items-center rounded-xl bg-indigo-600/10 px-3 py-3 text-indigo-400" href="#">
<div className="absolute inset-y-0 left-0 w-1 rounded-r-lg bg-indigo-500"></div>
<iconify-icon className="shrink-0" height="20" icon="solar:scale-linear" width="20"></iconify-icon>
<span className="ml-3 hidden whitespace-nowrap text-sm font-medium transition-all group-hover:block">Master Reconciliation</span>
</a>
<a className="flex items-center rounded-xl px-3 py-3 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white" href="#">
<iconify-icon className="shrink-0" height="20" icon="solar:bill-list-linear" width="20"></iconify-icon>
<span className="ml-3 hidden whitespace-nowrap text-sm font-medium transition-all group-hover:block">Invoices</span>
</a>
</nav>

<div className="mt-auto w-full px-3">
<a className="flex items-center rounded-xl bg-slate-800 p-2 transition-colors hover:bg-slate-700" href="#">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-xs font-bold text-white">MK</div>
</a>
</div>
</aside>

<main className="mesh-bg min-h-screen w-full pl-20 transition-all">
<div className="mx-auto w-full p-6 lg:p-6">

<header className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
<div>
<div className="flex items-center gap-2 text-slate-400 mb-2">
<span className="text-xs font-medium uppercase tracking-wider">Finance</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider text-slate-900">Master Reconciliation</span>
</div>
<h1 className="text-2xl font-bold tracking-tight text-slate-900">Payroll vs Billing vs LDR Audit</h1>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
<iconify-icon className="text-slate-400" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-700">741 Headcount</span>
</div>
<button className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800">
<iconify-icon icon="solar:export-linear"></iconify-icon>
<span>Export Full Sheet</span>
</button>
</div>
</header>

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">

<div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
<div className="flex items-center gap-3">
<div className="relative w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-4 text-xs font-medium focus:border-indigo-500 focus:outline-none" placeholder="Filter by customer or dept..." type="text"/>
</div>
<div className="h-6 w-px bg-slate-200"></div>
<div className="flex items-center gap-4">
<label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer">
<input className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
                                    Show Variances Only
                                </label>
</div>
</div>
<div className="flex items-center gap-3 text-xs">
<span className="text-slate-400 font-medium">Color Legend:</span>
<div className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-rose-400"></span><span className="text-slate-600">Batch</span></div>
<div className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-sky-400"></span><span className="text-slate-600">Billing</span></div>
<div className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-violet-400"></span><span className="text-slate-600">LDR (ADP)</span></div>
</div>
</div>

<div className="table-container w-full overflow-x-auto rounded-b-2xl bg-white pb-2">
<table className="w-full border-collapse text-left">
<thead>

<tr className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
<th className="sticky-col sticky-shadow min-w-[240px] border-b border-r border-slate-200 bg-slate-50 px-4 py-2">
                                        Client Information
                                    </th>

<th className="border-b border-r border-slate-200 bg-rose-50/40 px-2 py-2 text-center text-rose-800" colspan="5">
                                        Payroll Batch
                                    </th>

<th className="border-b border-r border-slate-200 bg-sky-50/40 px-2 py-2 text-center text-sky-800" colspan="4">
                                        Billing Report
                                    </th>

<th className="border-b border-r border-slate-200 bg-violet-50/40 px-2 py-2 text-center text-violet-800" colspan="9">
                                        Labor Distribution (ADP)
                                    </th>

<th className="border-b border-r border-slate-200 bg-slate-100/50 px-2 py-2 text-center text-slate-700" colspan="5">
                                        Audit: Batch vs Billing
                                    </th>

<th className="border-b border-r border-slate-200 bg-slate-100/50 px-2 py-2 text-center text-slate-700" colspan="4">
                                        Audit: LDR vs Batch
                                    </th>

<th className="border-b border-slate-200 bg-slate-100/50 px-2 py-2 text-center text-slate-700" colspan="5">
                                        Audit: Billing vs LDR
                                    </th>
</tr>

<tr className="border-b border-slate-200 text-[10px] font-bold uppercase tracking-wide text-slate-400">

<th className="sticky-col sticky-shadow bg-white px-4 py-3">
<div className="flex items-center justify-between">
<span>Customer Details</span>
<span className="text-[9px] text-slate-400">Dept / Name</span>
</div>
</th>

<th className="bg-rose-50/10 px-3 py-3 text-right text-rose-900/60">Reg Hrs</th>
<th className="bg-rose-50/10 px-3 py-3 text-right text-rose-900/60">OT Hrs</th>
<th className="bg-rose-50/10 px-3 py-3 text-right text-rose-900/60 font-bold">Tot Hrs</th>
<th className="bg-rose-50/10 px-3 py-3 text-right text-rose-900/60">Act Payroll</th>
<th className="border-r border-slate-200 bg-rose-50/10 px-3 py-3 text-right text-rose-900/60">Proj Bill</th>

<th className="bg-sky-50/10 px-3 py-3 text-right text-sky-900/60">Reg Hrs</th>
<th className="bg-sky-50/10 px-3 py-3 text-right text-sky-900/60">OT Hrs</th>
<th className="bg-sky-50/10 px-3 py-3 text-right text-sky-900/60 font-bold">Tot Hrs</th>
<th className="border-r border-slate-200 bg-sky-50/10 px-3 py-3 text-right text-sky-900/60">Act Billing</th>

<th className="bg-violet-50/10 px-3 py-3 text-right text-violet-900/60">Reg Hrs</th>
<th className="bg-violet-50/10 px-3 py-3 text-right text-violet-900/60">OT Hrs</th>
<th className="bg-violet-50/10 px-3 py-3 text-right text-violet-900/60 font-bold">Tot Hrs</th>
<th className="bg-violet-50/10 px-3 py-3 text-right text-violet-900/60">Reg Gross</th>
<th className="bg-violet-50/10 px-3 py-3 text-right text-violet-900/60">OT Gross</th>
<th className="bg-violet-50/10 px-3 py-3 text-right text-violet-900/60 font-bold">Tot Gross</th>
<th className="bg-violet-50/10 px-3 py-3 text-right text-violet-900/60">Reg Bill</th>
<th className="bg-violet-50/10 px-3 py-3 text-right text-violet-900/60">OT Bill</th>
<th className="border-r border-slate-200 bg-violet-50/10 px-3 py-3 text-right text-violet-900/60">Tot Proj Bill</th>

<th className="bg-slate-50 px-3 py-3 text-right">Reg Hrs</th>
<th className="bg-slate-50 px-3 py-3 text-right">OT Hrs</th>
<th className="bg-slate-50 px-3 py-3 text-right">Tot Hrs</th>
<th className="bg-slate-50 px-3 py-3 text-right">Onsites</th>
<th className="border-r border-slate-200 bg-slate-50 px-3 py-3 text-right font-bold text-slate-700">Variance</th>

<th className="bg-slate-50 px-3 py-3 text-right">Reg Hrs</th>
<th className="bg-slate-50 px-3 py-3 text-right">OT Hrs</th>
<th className="bg-slate-50 px-3 py-3 text-right">Tot Hrs</th>
<th className="border-r border-slate-200 bg-slate-50 px-3 py-3 text-right font-bold text-slate-700">Proj Gross</th>

<th className="bg-slate-50 px-3 py-3 text-right">Reg Hrs</th>
<th className="bg-slate-50 px-3 py-3 text-right">OT Hrs</th>
<th className="bg-slate-50 px-3 py-3 text-right">Tot Hrs</th>
<th className="bg-slate-50 px-3 py-3 text-right">Onsites</th>
<th className="bg-slate-50 px-3 py-3 text-right font-bold text-slate-700">Bill Var</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-[11px] font-medium text-slate-600">

<tr className="group hover:bg-slate-50">

<td className="sticky-col sticky-shadow group-hover:bg-slate-50 px-4 py-3 bg-white">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold text-slate-500">MFG</span>
<span className="font-bold text-slate-900">Smith Manufacturing</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-slate-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="12"></iconify-icon>
<span>42 Employees</span>
</div>
</div>
</td>

<td className="bg-rose-50/5 px-3 py-3 text-right font-mono">1,680.00</td>
<td className="bg-rose-50/5 px-3 py-3 text-right font-mono">42.50</td>
<td className="bg-rose-50/5 px-3 py-3 text-right font-mono font-semibold text-rose-900">1,722.50</td>
<td className="bg-rose-50/5 px-3 py-3 text-right font-mono">$34,450.00</td>
<td className="border-r border-slate-100 bg-rose-50/5 px-3 py-3 text-right font-mono">$48,230.00</td>

<td className="bg-sky-50/5 px-3 py-3 text-right font-mono">1,680.00</td>
<td className="bg-sky-50/5 px-3 py-3 text-right font-mono">42.50</td>
<td className="bg-sky-50/5 px-3 py-3 text-right font-mono font-semibold text-sky-900">1,722.50</td>
<td className="border-r border-slate-100 bg-sky-50/5 px-3 py-3 text-right font-mono">$48,230.00</td>

<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">1,680.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">42.50</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono font-semibold text-violet-900">1,722.50</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">$33,600.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">$850.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono font-semibold">$34,450.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">$47,040.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">$1,190.00</td>
<td className="border-r border-slate-100 bg-violet-50/5 px-3 py-3 text-right font-mono">$48,230.00</td>

<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">-</td>
<td className="border-r border-slate-100 px-3 py-3 text-right font-mono font-bold text-emerald-600">OK</td>

<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="border-r border-slate-100 px-3 py-3 text-right font-mono font-bold text-emerald-600">OK</td>

<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">-</td>
<td className="px-3 py-3 text-right font-mono font-bold text-emerald-600">OK</td>
</tr>

<tr className="group hover:bg-slate-50">
<td className="sticky-col sticky-shadow group-hover:bg-slate-50 px-4 py-3 bg-white">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="rounded bg-indigo-100 px-1.5 py-0.5 text-[9px] font-bold text-indigo-700">LOG</span>
<span className="font-bold text-slate-900">Apex Logistics</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-slate-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="12"></iconify-icon>
<span>128 Employees</span>
</div>
</div>
</td>

<td className="bg-rose-50/5 px-3 py-3 text-right font-mono">4,100.00</td>
<td className="bg-rose-50/5 px-3 py-3 text-right font-mono">0.00</td>
<td className="bg-rose-50/5 px-3 py-3 text-right font-mono font-semibold text-rose-900">4,100.00</td>
<td className="bg-rose-50/5 px-3 py-3 text-right font-mono">$61,500.00</td>
<td className="border-r border-slate-100 bg-rose-50/5 px-3 py-3 text-right font-mono">$86,100.00</td>

<td className="bg-sky-50/5 px-3 py-3 text-right font-mono text-red-500 font-bold">4,090.00</td>
<td className="bg-sky-50/5 px-3 py-3 text-right font-mono">0.00</td>
<td className="bg-sky-50/5 px-3 py-3 text-right font-mono font-semibold text-red-500">4,090.00</td>
<td className="border-r border-slate-100 bg-sky-50/5 px-3 py-3 text-right font-mono text-red-500">$85,890.00</td>

<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">4,100.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">0.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono font-semibold text-violet-900">4,100.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">$61,500.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">0.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono font-semibold">$61,500.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">$86,100.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">0.00</td>
<td className="border-r border-slate-100 bg-violet-50/5 px-3 py-3 text-right font-mono">$86,100.00</td>

<td className="px-3 py-3 text-right font-mono text-red-600 font-bold">10.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-red-600 font-bold">10.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">-</td>
<td className="border-r border-slate-100 px-3 py-3 text-right font-mono font-bold text-red-600">$210.00</td>

<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="border-r border-slate-100 px-3 py-3 text-right font-mono font-bold text-emerald-600">OK</td>

<td className="px-3 py-3 text-right font-mono text-red-600 font-bold">-10.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-red-600 font-bold">-10.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">-</td>
<td className="px-3 py-3 text-right font-mono font-bold text-red-600">-$210.00</td>
</tr>

<tr className="group hover:bg-slate-50">
<td className="sticky-col sticky-shadow group-hover:bg-slate-50 px-4 py-3 bg-white">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">ADM</span>
<span className="font-bold text-slate-900">TechSystems Inc</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-slate-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="12"></iconify-icon>
<span>15 Employees</span>
</div>
</div>
</td>

<td className="bg-rose-50/5 px-3 py-3 text-right font-mono">600.00</td>
<td className="bg-rose-50/5 px-3 py-3 text-right font-mono">20.00</td>
<td className="bg-rose-50/5 px-3 py-3 text-right font-mono font-semibold text-rose-900">620.00</td>
<td className="bg-rose-50/5 px-3 py-3 text-right font-mono">$18,600.00</td>
<td className="border-r border-slate-100 bg-rose-50/5 px-3 py-3 text-right font-mono">$26,040.00</td>

<td className="bg-sky-50/5 px-3 py-3 text-right font-mono">600.00</td>
<td className="bg-sky-50/5 px-3 py-3 text-right font-mono">20.00</td>
<td className="bg-sky-50/5 px-3 py-3 text-right font-mono font-semibold text-sky-900">620.00</td>
<td className="border-r border-slate-100 bg-sky-50/5 px-3 py-3 text-right font-mono">$26,040.00</td>

<td className="bg-violet-50/5 px-3 py-3 text-right font-mono text-amber-600">598.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">20.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono font-semibold text-amber-600">618.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">$17,940.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">$900.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono font-semibold">$18,840.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">$25,116.00</td>
<td className="bg-violet-50/5 px-3 py-3 text-right font-mono">$1,260.00</td>
<td className="border-r border-slate-100 bg-violet-50/5 px-3 py-3 text-right font-mono">$26,376.00</td>

<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">-</td>
<td className="border-r border-slate-100 px-3 py-3 text-right font-mono font-bold text-emerald-600">OK</td>

<td className="px-3 py-3 text-right font-mono text-amber-600 font-bold">-2.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-amber-600 font-bold">-2.00</td>
<td className="border-r border-slate-100 px-3 py-3 text-right font-mono font-bold text-amber-600">+$240.00</td>

<td className="px-3 py-3 text-right font-mono text-amber-600 font-bold">2.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">0.00</td>
<td className="px-3 py-3 text-right font-mono text-amber-600 font-bold">2.00</td>
<td className="px-3 py-3 text-right font-mono text-slate-300">-</td>
<td className="px-3 py-3 text-right font-mono font-bold text-amber-600">-$336.00</td>
</tr>

</tbody>
</table>
</div>

<div className="flex flex-col gap-4 border-t border-slate-200 bg-slate-50 px-6 py-4 md:flex-row md:items-center md:justify-between">
<div className="text-xs text-slate-500">
                            Showing data for <span className="font-bold text-slate-900">3 Customers</span> out of 42 active.
                        </div>
<div className="flex gap-2">
<button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 hover:bg-slate-100 disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 font-medium hover:bg-slate-100">1</button>
<button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 hover:bg-slate-100">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
