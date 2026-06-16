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
      

<main className="w-full max-w-[375px] bg-gray-50 min-h-screen sm:min-h-[812px] sm:h-[812px] sm:rounded-[40px] shadow-2xl overflow-y-auto relative flex flex-col sm:border-[8px] border-gray-900">

<header className="px-5 pt-12 pb-2 flex items-center justify-between sticky top-0 bg-gray-50/90 backdrop-blur-md z-40">
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-transform active:scale-95">
<iconify-icon height="20" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<h1 className="text-base font-semibold tracking-tight text-gray-900">Withdrawal</h1>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon height="24" icon="solar:menu-dots-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</header>
<div className="flex-1 px-5 pb-32">

<section className="mt-4 mb-8">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-800 p-6 shadow-[0_12px_24px_-8px_rgba(79,70,229,0.4)]">

<div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div className="absolute -left-8 -bottom-8 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl"></div>
<div className="absolute right-10 bottom-4">
<iconify-icon className="text-white/5" height="80" icon="solar:wallet-money-linear" width="80"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<p className="text-xs font-medium text-indigo-100 mb-1.5 uppercase tracking-widest">Current Balance</p>
<div className="flex items-baseline gap-1.5 mb-2">
<h2 className="text-4xl font-semibold text-white tracking-tighter">45,200</h2>
<span className="text-lg font-medium text-indigo-200">FCFA</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/10 backdrop-blur-sm border border-white/10">
<iconify-icon className="text-indigo-200" height="12" icon="solar:info-circle-linear" width="12"></iconify-icon>
<p className="text-[10px] font-medium text-indigo-100 uppercase tracking-wide">Min. withdrawal: 5,000 FCFA</p>
</div>
</div>
</div>
</section>

<section className="mb-8">
<h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight px-1">Transfer to</h3>
<div className="space-y-3">

<label className="group relative flex items-center justify-between p-4 bg-white border-2 border-indigo-600 rounded-2xl shadow-sm cursor-pointer transition-all">
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 border border-orange-100 shadow-inner">
<span className="text-xs font-semibold tracking-tighter">ORG</span>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Marc Antoine</p>
<p className="text-xs font-medium text-gray-500 mt-0.5 tracking-wide">•••• 2145</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600 ring-1 ring-inset ring-emerald-500/20 uppercase tracking-wide">Primary</span>
<div className="w-5 h-5 rounded-full border-[5px] border-indigo-600 bg-white"></div>
</div>
</label>

<label className="group relative flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl shadow-sm cursor-pointer hover:border-gray-300 transition-all">
<div className="flex items-center gap-3.5 opacity-80 group-hover:opacity-100">
<div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600 border border-yellow-100 shadow-inner">
<span className="text-xs font-semibold tracking-tighter">MTN</span>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Marc Antoine</p>
<p className="text-xs font-medium text-gray-500 mt-0.5 tracking-wide">•••• 8890</p>
</div>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors" type="button">
<iconify-icon height="18" icon="solar:pen-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</label>

<button className="w-full flex items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-200 rounded-2xl bg-transparent text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 hover:bg-white transition-all" type="button">
<iconify-icon height="20" icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Add New Payout Method
                    </button>
</div>
</section>

<section className="mb-10">
<h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight px-1">Amount details</h3>
<div className="space-y-5 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">

<div>
<div className="relative flex items-center">
<input className="block w-full rounded-2xl border-0 py-4 pl-5 pr-16 bg-gray-50 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl font-semibold tracking-tight transition-all" placeholder="0" type="number" value="10000"/>
<div className="pointer-events-none absolute right-5 flex items-center">
<span className="text-sm font-medium text-gray-400">FCFA</span>
</div>
</div>

<div className="flex gap-2 mt-3 px-1">
<button className="flex-1 py-2 text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors" type="button">5,000</button>
<button className="flex-1 py-2 text-xs font-semibold bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 rounded-xl transition-colors" type="button">10,000</button>
<button className="flex-1 py-2 text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors" type="button">All</button>
</div>
</div>

<div>
<div className="relative">
<div className="absolute top-3.5 left-4 text-gray-400">
<iconify-icon height="18" icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<textarea className="block w-full rounded-2xl border-0 py-3.5 pl-11 pr-4 bg-gray-50 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm transition-all resize-none" placeholder="Add a note (Optional)" rows="2"></textarea>
</div>
</div>
</div>
</section>

<section className="mb-4">
<div className="flex items-center justify-between mb-4 px-1">
<h3 className="text-sm font-semibold text-gray-900 tracking-tight">Recent Appeals</h3>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">View All</button>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-3.5 bg-white rounded-2xl shadow-sm border border-gray-100">
<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
<iconify-icon height="20" icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">10,000 FCFA</p>
<p className="text-xs font-medium text-gray-400 mt-0.5">Oct 28 • Bank Transfer</p>
</div>
</div>
<span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-600 ring-1 ring-inset ring-blue-500/20 uppercase tracking-wide">Processing</span>
</div>

<div className="flex items-center justify-between p-3.5 bg-white rounded-2xl shadow-sm border border-gray-100">
<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
<iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">15,000 FCFA</p>
<p className="text-xs font-medium text-gray-400 mt-0.5">Oct 20 • Bank Transfer</p>
</div>
</div>
<span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600 ring-1 ring-inset ring-emerald-500/20 uppercase tracking-wide">Completed</span>
</div>
</div>
</section>
</div>

<div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent pb-8 sm:pb-6 z-50">

<button className="group w-full relative flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 rounded-2xl text-sm font-semibold shadow-[0_8px_20px_-6px_rgba(79,70,229,0.5)] transition-all active:scale-[0.98] overflow-hidden">
<span className="relative z-10 flex items-center gap-2 group-active:opacity-0 transition-opacity">
                    Submit Withdrawal Appeal
                    <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</span>

<span className="absolute inset-0 flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity gap-2">
<iconify-icon className="animate-spin" height="20" icon="solar:refresh-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Processing...
                </span>
</button>
</div>
</main>

    </>
  );
}
