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
      

<div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="fixed top-[20%] right-[30%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

<div className="w-full max-w-5xl glass-panel rounded-3xl overflow-hidden relative z-10 grid grid-cols-1 lg:grid-cols-12 animate-fade-in">

<div className="lg:col-span-7 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between relative">

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-white font-medium tracking-tight">
                        NX
                    </div>
<span className="text-white font-medium tracking-tight text-lg">NexusPay</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    Secure Connection
                </div>
</div>

<div className="mb-8">
<label className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-3 block">Select Currency</label>
<div className="grid grid-cols-3 gap-3">

<button className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl glass-input hover:bg-white/5 border-indigo-500/50 bg-indigo-500/10">
<div className="absolute top-2 right-2 text-indigo-400">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-100 shadow-lg">
<iconify-icon icon="solar:star-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Ethereum</span>
</button>

<button className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl glass-input hover:bg-white/5 opacity-60 hover:opacity-100">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-100 shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bitcoin-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-300">Bitcoin</span>
</button>

<button className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl glass-input hover:bg-white/5 opacity-60 hover:opacity-100">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-100 shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:dollar-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-300">USDT</span>
</button>
</div>
</div>

<div className="space-y-6">
<div className="flex flex-col sm:flex-row gap-6">

<div className="shrink-0 flex items-center justify-center">
<div className="p-3 bg-white rounded-2xl shadow-xl shadow-indigo-500/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

<svg className="w-32 h-32 text-slate-900" fill="currentColor" viewbox="0 0 100 100">
<rect fill="white" height="100" width="100" x="0" y="0"></rect>
<path d="M10,10 h30 v30 h-30 z M50,10 h10 v10 h-10 z M70,10 h20 v20 h-20 z M10,50 h10 v10 h-10 z M30,50 h20 v20 h-20 z M60,40 h30 v50 h-30 z M10,70 h30 v20 h-30 z" fill="#0f172a"></path>
<rect fill="none" height="20" rx="2" stroke="#0f172a" strokeWidth="4" width="20" x="15" y="15"></rect>
<rect fill="#0f172a" height="10" width="10" x="75" y="15"></rect>
</svg>
</div>
</div>

<div className="flex-1 space-y-4">
<div>
<div className="flex justify-between items-center mb-2">
<label className="text-xs text-slate-500 font-medium uppercase tracking-wider">Deposit Address</label>
<span className="text-xs text-indigo-400">ERC-20 Network</span>
</div>
<div className="relative glass-input rounded-xl flex items-center p-1 group">
<input className="w-full bg-transparent border-none outline-none text-slate-300 text-sm font-mono px-3 py-2.5 truncate cursor-text" readonly="" type="text" value="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"/>
<button className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors" title="Copy Address">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
<iconify-icon className="text-orange-400" icon="solar:danger-circle-linear" width="14"></iconify-icon>
                                Send only ETH to this deposit address.
                            </p>
</div>
<div>
<label className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2 block">Amount</label>
<div className="flex items-center justify-between glass-input rounded-xl px-4 py-3">
<span className="text-white font-medium text-lg tracking-tight">0.0425</span>
<span className="text-sm text-slate-400 font-medium">ETH</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm">Rate expires in <span className="text-white font-mono">14:59</span></span>
</div>
<button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                    Need help?
                </button>
</div>
</div>

<div className="lg:col-span-5 bg-black/20 p-8 lg:p-10 flex flex-col relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<h2 className="text-white text-xl font-medium tracking-tight mb-6 relative z-10">Order Summary</h2>
<div className="space-y-4 mb-8 flex-1 relative z-10">

<div className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 items-start">
<div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-slate-200 text-sm font-medium">Enterprise License</h3>
<p className="text-xs text-slate-500 mt-1">Yearly subscription plan with full API access.</p>
</div>
</div>

<div className="space-y-3 py-4 border-y border-white/5">
<div className="flex justify-between text-sm">
<span className="text-slate-400">Subtotal</span>
<span className="text-slate-200">$1,200.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">Network Fee</span>
<span className="text-slate-200">$4.50</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">VAT (0%)</span>
<span className="text-slate-200">$0.00</span>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-slate-400 text-sm font-medium">Total to pay</span>
<div className="text-right">
<div className="text-2xl text-white font-medium tracking-tight">$1,204.50</div>
<div className="text-xs text-indigo-400">≈ 0.0425 ETH</div>
</div>
</div>
</div>
<div className="mt-auto relative z-10 space-y-4">

<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-600 bg-slate-800/50 flex items-center justify-center transition-colors group-hover:border-indigo-500/50">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-xs text-slate-400 select-none group-hover:text-slate-300">I confirm the transaction details are correct.</span>
</label>
<button className="w-full py-3.5 px-4 bg-white text-slate-950 rounded-xl font-medium text-sm hover:bg-indigo-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group transform active:scale-[0.98]">
<span>Verify Payment</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="text-center">
<button className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Cancel Order</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-[60px] pointer-events-none z-20"></div>

    </>
  );
}
