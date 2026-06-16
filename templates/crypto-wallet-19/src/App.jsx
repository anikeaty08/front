import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const solSendToggle = document.getElementById('sol-send-toggle');
    const solSendForm = document.getElementById('sol-send-form');

    if (solSendToggle && solSendForm) {
      solSendToggle.addEventListener('click', () => {
        solSendForm.classList.toggle('hidden');
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-md mx-auto px-4 py-8 sm:px-6">

<header className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-slate-800 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-slate-100">WL</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-100">Wallet</span>
<span className="text-xs text-slate-400">Multi-asset overview</span>
</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 hover:bg-slate-900 transition-colors">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
        Connected
      </button>
</header>

<section className="mb-6">
<div className="rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-[0_18px_45px_rgba(15,23,42,0.8)] overflow-hidden">
<div className="flex flex-col gap-3 px-5 py-5">
<div className="flex items-center justify-between">
<span className="text-xs font-medium tracking-tight text-slate-400 uppercase">Total Balance</span>
<span className="text-[0.7rem] font-medium text-slate-500">0x12...a9f</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">0</span>
<span className="text-sm font-medium text-slate-400">USDT</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/5 text-emerald-400 border border-emerald-500/20 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Live
            </span>
<span>Updated just now</span>
</div>
</div>

<div className="border-t border-slate-800/90 bg-slate-950/80 px-5 py-3 flex items-center justify-between gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500/90 hover:bg-sky-400 text-slate-950 text-xs font-semibold tracking-tight py-2.5 transition-colors">
<iconify-icon className="text-sm" icon="solar:paper-plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Send</span>
</button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold tracking-tight text-slate-100 py-2.5 transition-colors">
<iconify-icon className="text-sm" icon="solar:transfer-horizontal-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Swap</span>
</button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold tracking-tight text-slate-100 py-2.5 transition-colors">
<iconify-icon className="text-sm" icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Deposit</span>
</button>
</div>
</div>
</section>

<section className="space-y-3">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium tracking-tight text-slate-400 uppercase">Assets</span>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-800 px-2.5 py-1 text-[0.7rem] text-slate-300 hover:bg-slate-900 transition-colors">
<iconify-icon className="text-xs" icon="solar:slider-vertical-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Manage</span>
</button>
</div>

<div className="rounded-2xl border border-slate-900 bg-slate-950/70 hover:border-slate-700/80 transition-colors px-4 py-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-slate-950">SOL</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-100">Solana</span>
<span className="text-sm text-slate-400">0.000 SOL</span>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs text-slate-500">≈ 0.00 USDT</span>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/70 px-2.5 py-1 text-[0.7rem] text-slate-200 hover:bg-slate-900 transition-colors" id="sol-send-toggle" type="button">
<iconify-icon className="text-xs" icon="solar:paper-plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Send
            </button>
</div>
</div>

<div className="mt-3 space-y-2 rounded-xl border border-slate-800/80 bg-slate-950/80 px-3 py-3 hidden" id="sol-send-form">
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-slate-300">Solana wallet address</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500" id="sol-address-input" placeholder="Enter Solana (SOL) address" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-slate-300">Amount</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500" id="sol-amount-input" min="0" placeholder="0.0000" step="0.00000001" type="number"/>
</div>
<button className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500/90 hover:bg-sky-400 text-slate-950 text-xs font-semibold tracking-tight py-2 transition-colors" id="sol-withdraw-btn" type="button">
<iconify-icon className="text-sm" icon="solar:arrow-to-down-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Withdraw
          </button>
</div>
</div>

<div className="rounded-2xl border border-slate-900 bg-slate-950/70 hover:border-slate-700/80 transition-colors px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-slate-950">SOP</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-100">SOP Token</span>
<span className="text-sm text-slate-400">10.000 SOP</span>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs text-slate-500">≈ 0.00 USDT</span>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/70 px-2.5 py-1 text-[0.7rem] text-slate-200 hover:bg-slate-900 transition-colors">
<iconify-icon className="text-xs" icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Deposit
          </button>
</div>
</div>
</section>

<footer className="mt-8 flex items-center justify-between text-[0.7rem] text-slate-500">
<span>Network: Solana</span>
<button className="inline-flex items-center gap-1 hover:text-slate-300 transition-colors">
<iconify-icon className="text-xs" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>View history</span>
</button>
</footer>
</div>


    </>
  );
}
