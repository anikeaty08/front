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
      

<div className="mx-auto max-w-2xl min-h-screen bg-zinc-50 sm:border-x sm:border-zinc-200 sm:bg-white sm:shadow-sm pb-24">

<header className="sticky top-0 z-30 flex items-center justify-between bg-zinc-50/80 px-5 py-4 backdrop-blur-md sm:bg-white/80">
<div className="flex items-center gap-3">
<button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-zinc-200">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<h1 className="text-lg font-medium tracking-tight text-zinc-900">Wallet</h1>
</div>
<button className="relative flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-zinc-50 sm:border-white"></span>
</button>
</header>
<main className="px-5 py-4 space-y-8">

<section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2D1B69] via-[#1E1045] to-[#0F0826] p-6 sm:p-8 shadow-xl shadow-indigo-900/10">

<div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center justify-between">
<span className="text-xs font-light tracking-wide text-indigo-200/80 uppercase">Available for Withdrawal</span>
<iconify-icon className="text-xl text-indigo-300/50" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="mt-3 flex items-baseline gap-2">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">45,200</h2>
<span className="text-lg font-light text-indigo-300">FCFA</span>
</div>

<div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-indigo-200">
<iconify-icon className="text-xl" icon="solar:lock-password-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-xs font-light text-indigo-200/80">Locked in Escrow</p>
<p className="text-sm font-medium tracking-tight text-white mt-0.5">5,000 FCFA</p>
</div>
</div>
<div className="flex items-center gap-1.5 rounded-full bg-indigo-500/20 px-2.5 py-1 text-xs font-light text-indigo-200">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
                            Pending
                        </div>
</div>
</div>
</section>

<section className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium tracking-tight text-zinc-900">Withdraw to</h3>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors">Manage</button>
</div>

<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">

<label className="relative flex min-w-[160px] cursor-pointer flex-col rounded-2xl border-2 border-indigo-600 bg-indigo-50/30 p-4 transition-all hover:bg-indigo-50/50">
<input checked="" className="peer sr-only" name="payment_method" type="radio"/>
<div className="mb-3 flex items-start justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white shadow-sm">
<iconify-icon className="text-sm" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
</div>
<p className="text-sm font-medium text-zinc-900">Orange Money</p>
<p className="text-xs font-light text-zinc-500 mt-0.5">**** 4920</p>
</label>

<label className="relative flex min-w-[160px] cursor-pointer flex-col rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-300 hover:bg-zinc-50">
<input className="peer sr-only" name="payment_method" type="radio"/>
<div className="mb-3 flex items-start justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
<iconify-icon className="text-xl" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="hidden h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white peer-checked:flex">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<p className="text-sm font-medium text-zinc-900">MTN MoMo</p>
<p className="text-xs font-light text-zinc-500 mt-0.5">**** 8112</p>
</label>

<label className="relative flex min-w-[160px] cursor-pointer flex-col rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-300 hover:bg-zinc-50">
<input className="peer sr-only" name="payment_method" type="radio"/>
<div className="mb-3 flex items-start justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600">
<iconify-icon className="text-xl" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="hidden h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white peer-checked:flex">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<p className="text-sm font-medium text-zinc-900">Ecobank</p>
<p className="text-xs font-light text-zinc-500 mt-0.5">**** 0041</p>
</label>
</div>

<div className="pt-2">
<button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-4 py-4 text-sm font-medium text-white transition-transform active:scale-[0.98] shadow-lg shadow-zinc-900/20 hover:bg-zinc-800">
<iconify-icon className="text-lg" icon="solar:card-send-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Request Payout
                    </button>
</div>
</section>

<section className="space-y-4 pt-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium tracking-tight text-zinc-900">Recent Ledger</h3>
<div className="flex items-center gap-2 text-xs font-light text-zinc-500">
<span>Sort by</span>
<button className="flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1.5 font-medium text-zinc-900 hover:bg-zinc-200 transition-colors">
                            Latest
                            <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
<ul className="divide-y divide-zinc-100">

<li className="flex items-center justify-between p-4 transition-colors hover:bg-zinc-50/50">
<div className="flex items-center gap-3.5">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
<iconify-icon className="text-xl" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<p className="text-sm font-medium text-zinc-900">Handover <span className="font-light text-zinc-400">#KLI-8941</span></p>
<p className="text-xs font-light text-zinc-500">Today, 10:42 AM</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<p className="text-sm font-medium text-emerald-600">+150 <span className="font-light text-xs">FCFA</span></p>
<div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-emerald-700">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                                    Verified
                                </div>
</div>
</li>

<li className="flex items-center justify-between p-4 transition-colors hover:bg-zinc-50/50">
<div className="flex items-center gap-3.5">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
<iconify-icon className="text-xl" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<p className="text-sm font-medium text-zinc-900">Handover <span className="font-light text-zinc-400">#KLI-8802</span></p>
<p className="text-xs font-light text-zinc-500">Yesterday, 4:15 PM</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<p className="text-sm font-medium text-emerald-600">+150 <span className="font-light text-xs">FCFA</span></p>
<div className="flex items-center gap-1.5 rounded-full bg-amber-50 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-amber-700">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                    Pending
                                </div>
</div>
</li>

<li className="flex items-center justify-between p-4 transition-colors hover:bg-zinc-50/50">
<div className="flex items-center gap-3.5">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
<iconify-icon className="text-xl" icon="solar:card-send-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<p className="text-sm font-medium text-zinc-900">Withdrawal Request</p>
<p className="text-xs font-light text-zinc-500">Oct 12, 09:00 AM</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<p className="text-sm font-medium text-zinc-900">-10,000 <span className="font-light text-xs">FCFA</span></p>
<div className="flex items-center gap-1.5 rounded-full bg-indigo-50 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-indigo-700">
<iconify-icon className="animate-spin" icon="solar:refresh-circle-linear"></iconify-icon>
                                    Processing
                                </div>
</div>
</li>
</ul>
</div>

<div className="flex justify-center pt-2">
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Load more activity</button>
</div>
</section>
</main>
</div>

    </>
  );
}
