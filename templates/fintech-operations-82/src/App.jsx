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
      

<input checked="" className="sr-only-radio" id="tabOps" name="tab" type="radio"/>
<input className="sr-only-radio" id="tabSpecs" name="tab" type="radio"/>

<input className="sr-only-radio" id="reqNone" name="req" type="radio"/>
<input checked="" className="sr-only-radio" id="req8821" name="req" type="radio"/>
<input className="sr-only-radio" id="req8822" name="req" type="radio"/>
<input className="sr-only-radio" id="req8705" name="req" type="radio"/>
<div className="app h-screen flex overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-200">

<aside className="w-14 border-r border-neutral-900 flex flex-col items-center py-4 bg-[#050505] z-30 shrink-0">
<a className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-xs font-bold mb-8 shadow-[0_0_15px_rgba(16,185,129,0.2)]" href="/">V</a>
<nav className="flex flex-col gap-3 w-full px-2">
<a className="w-full aspect-square flex items-center justify-center rounded-md text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors" href="/">
<iconify-icon icon="lucide:layout-grid" width="18"></iconify-icon>
</a>
<a className="w-full aspect-square flex items-center justify-center rounded-md text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors" href="/shipments">
<iconify-icon icon="lucide:package" width="18"></iconify-icon>
</a>
<div className="w-full aspect-square flex items-center justify-center rounded-md bg-neutral-800 text-white relative group border border-neutral-700 shadow-sm">
<iconify-icon icon="lucide:credit-card" width="18"></iconify-icon>
</div>
<a className="w-full aspect-square flex items-center justify-center rounded-md text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors" href="/db">
<iconify-icon icon="lucide:database" width="18"></iconify-icon>
</a>
</nav>
<div className="mt-auto">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] text-neutral-400">ADM</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#050505]">

<header className="h-14 border-b border-neutral-900 flex items-center justify-between px-6 bg-[#050505]/80 backdrop-blur-md z-20 shrink-0">
<div className="flex items-center gap-4">
<h1 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
<span className="text-emerald-500"><iconify-icon icon="lucide:shield-check" width="16"></iconify-icon></span>
            Paid Customs &amp; Credit Ledger
          </h1>
<div className="h-4 w-px bg-neutral-800"></div>

<div className="flex p-0.5 bg-neutral-900/50 rounded-lg border border-neutral-800">
<label className="px-3 py-1 text-[11px] font-medium rounded transition-all flex items-center gap-2 cursor-pointer" htmlFor="tabOps" style={{color: 'white', background: '#262626'}}>
<iconify-icon icon="lucide:activity" width="12"></iconify-icon> Live Operations
            </label>
<label className="px-3 py-1 text-[11px] font-medium text-neutral-500 hover:text-neutral-300 rounded transition-all flex items-center gap-2 cursor-pointer" htmlFor="tabSpecs">
<iconify-icon icon="lucide:code-2" width="12"></iconify-icon> Stage 5 Specs
            </label>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded text-[10px] text-amber-500">
<iconify-icon icon="lucide:alert-circle" width="12"></iconify-icon>
<span>iOS Payment Disabled</span>
</div>
<a className="bg-white text-black hover:bg-neutral-200 text-[11px] font-medium px-3 py-1.5 rounded transition-colors shadow-[0_0_10px_rgba(255,255,255,0.05)]" href="/pricing">
            Config Pricing
          </a>
</div>
</header>

<div className="tab-content flex-1 overflow-hidden flex" id="tab-ops">

<div className="flex-1 flex flex-col border-r border-neutral-900 relative">
<div className="h-10 border-b border-neutral-900 flex items-center gap-2 px-4 bg-neutral-900/20">
<iconify-icon className="text-neutral-600" icon="lucide:filter" width="12"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-600">Requests</span>
<input className="bg-transparent border-none text-xs text-neutral-600 placeholder-neutral-700 focus:outline-none w-64 ml-2" disabled="" placeholder="Search disabled in no-JS prototype" type="text"/>
</div>
<div className="flex-1 overflow-y-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-neutral-900/30 text-[10px] text-neutral-500 uppercase font-semibold tracking-wider sticky top-0 z-10 backdrop-blur-sm">
<tr>
<th className="px-4 py-2 border-b border-neutral-900">Status</th>
<th className="px-4 py-2 border-b border-neutral-900">Request ID / Batch</th>
<th className="px-4 py-2 border-b border-neutral-900">Platform</th>
<th className="px-4 py-2 border-b border-neutral-900">Amount</th>
<th className="px-4 py-2 border-b border-neutral-900">Created</th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-neutral-900">
<tr className="row-REQ-8821 border-l-2 border-l-transparent bg-emerald-900/5">
<td className="px-0 py-0">
<label className="px-4 py-3" htmlFor="req8821">
<div className="flex items-center gap-1.5 text-emerald-500">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> PAID
                      </div>
</label>
</td>
<td className="px-0 py-0">
<label className="px-4 py-3 font-mono text-neutral-300" htmlFor="req8821">
                      REQ-8821
                      <div className="text-[10px] text-neutral-600">Batch: SHP-2024-001</div>
</label>
</td>
<td className="px-0 py-0">
<label className="px-4 py-3 text-neutral-400 flex items-center gap-1" htmlFor="req8821">
<iconify-icon icon="lucide:smartphone" width="12"></iconify-icon> Android
                    </label>
</td>
<td className="px-0 py-0"><label className="px-4 py-3 text-white font-mono" htmlFor="req8821">¥ 299.00</label></td>
<td className="px-0 py-0"><label className="px-4 py-3 text-neutral-500" htmlFor="req8821">2 mins ago</label></td>
</tr>
<tr className="row-REQ-8822 border-l-2 border-l-transparent">
<td className="px-0 py-0">
<label className="px-4 py-3" htmlFor="req8822">
<div className="flex items-center gap-1.5 text-amber-500">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div> READY (iOS)
                      </div>
</label>
</td>
<td className="px-0 py-0">
<label className="px-4 py-3 font-mono text-neutral-300" htmlFor="req8822">
                      REQ-8822
                      <div className="text-[10px] text-neutral-600">Batch: SHP-2024-052</div>
</label>
</td>
<td className="px-0 py-0">
<label className="px-4 py-3 text-neutral-400 flex items-center gap-1" htmlFor="req8822">
<iconify-icon icon="lucide:apple" width="12"></iconify-icon> iOS
                    </label>
</td>
<td className="px-0 py-0"><label className="px-4 py-3 text-neutral-500 font-mono italic" htmlFor="req8822">Unpaid</label></td>
<td className="px-0 py-0"><label className="px-4 py-3 text-neutral-500" htmlFor="req8822">15 mins ago</label></td>
</tr>
<tr className="row-REQ-8705 border-l-2 border-l-transparent opacity-60">
<td className="px-0 py-0">
<label className="px-4 py-3" htmlFor="req8705">
<div className="flex items-center gap-1.5 text-neutral-600">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div> EXPIRED
                      </div>
</label>
</td>
<td className="px-0 py-0">
<label className="px-4 py-3 font-mono text-neutral-300" htmlFor="req8705">
                      REQ-8705
                      <div className="text-[10px] text-neutral-600">Batch: SHP-2023-991</div>
</label>
</td>
<td className="px-0 py-0">
<label className="px-4 py-3 text-neutral-400 flex items-center gap-1" htmlFor="req8705">
<iconify-icon icon="lucide:globe" width="12"></iconify-icon> Web
                    </label>
</td>
<td className="px-0 py-0"><label className="px-4 py-3 text-neutral-500 font-mono" htmlFor="req8705">¥ 299.00</label></td>
<td className="px-0 py-0"><label className="px-4 py-3 text-neutral-500" htmlFor="req8705">2 days ago</label></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="w-[400px] bg-[#080808] border-l border-neutral-900 flex flex-col z-10 shadow-2xl" id="details-panel">
<div className="h-10 border-b border-neutral-900 flex items-center justify-between px-4 bg-neutral-900/20">
<span className="text-[10px] font-mono text-neutral-500">
              DETAILS:
              <span className="detail-id id-8821 text-neutral-300">REQ-8821</span>
<span className="detail-id id-8822 text-neutral-300">REQ-8822</span>
<span className="detail-id id-8705 text-neutral-300">REQ-8705</span>
</span>

<label className="text-neutral-500 hover:text-white cursor-pointer" htmlFor="reqNone">
<iconify-icon icon="lucide:x" width="14"></iconify-icon>
</label>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div className="detail-block space-y-6" id="detail-REQ-8821">
<div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Payment Successful</div>
<div className="text-[10px] text-neutral-500">WeChat Pay • 2 mins ago</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-mono text-white">¥ 299.00</div>
<div className="text-[10px] text-neutral-600">TX: 992817721</div>
</div>
</div>
<a className="w-full py-1.5 rounded bg-neutral-800 text-[10px] text-neutral-400 border border-neutral-700 hover:border-neutral-600 hover:text-white transition-colors flex items-center justify-center gap-2" href="/receipt/REQ-8821">
<iconify-icon icon="lucide:download" width="12"></iconify-icon> Download Receipt PDF
                </a>
</div>
<div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800">
<div className="text-[11px] uppercase tracking-wide text-neutral-500 font-semibold mb-3">Credit Ledger</div>
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-wider text-neutral-600">Available credit</span>
<span className="text-xs font-mono font-medium text-emerald-400">¥ 4,701.00</span>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-wider text-neutral-600">Deducted on contract</span>
<span className="text-xs font-mono text-red-400">- ¥ 299.00</span>
</div>
</div>
<div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800 font-mono text-[11px] text-neutral-300 space-y-1">
<div className="text-[11px] uppercase tracking-wide text-neutral-500 font-semibold mb-2 font-sans">Payload Hash (preview)</div>
<div>gw: <span className="text-neutral-200">24500</span></div>
<div>dest: <span className="text-neutral-200">"Moscow"</span></div>
<div>hs: <span className="text-neutral-200">"854231aa99"</span></div>
</div>
</div>

<div className="detail-block space-y-6" id="detail-REQ-8822">
<div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-amber-500/10 flex items-center justify-center text-amber-500">
<iconify-icon icon="lucide:loader" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Waiting for Payment</div>
<div className="text-[10px] text-neutral-500">iOS payment disabled • 15 mins ago</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-mono text-neutral-400">Pending</div>
</div>
</div>
<a className="w-full py-1.5 rounded bg-neutral-800 text-[10px] text-neutral-400 border border-neutral-700 hover:border-neutral-600 hover:text-white transition-colors flex items-center justify-center gap-2" href="/pay/REQ-8822">
<iconify-icon icon="lucide:external-link" width="12"></iconify-icon> Open payment instructions
                </a>
</div>
<div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800">
<div className="text-[11px] uppercase tracking-wide text-neutral-500 font-semibold mb-3">Credit Ledger</div>
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-wider text-neutral-600">Available credit</span>
<span className="text-xs font-mono font-medium text-neutral-500">¥ 5,000.00</span>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-wider text-neutral-600">Deducted on contract</span>
<span className="text-xs font-mono text-neutral-600">- ¥ 0.00</span>
</div>
</div>
<div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800 font-mono text-[11px] text-neutral-300 space-y-1">
<div className="text-[11px] uppercase tracking-wide text-neutral-500 font-semibold mb-2 font-sans">Payload Hash (preview)</div>
<div>gw: <span className="text-neutral-200">1200</span></div>
<div>dest: <span className="text-neutral-200">"St. Petersburg"</span></div>
<div>hs: <span className="text-neutral-200">"pending..."</span></div>
</div>
</div>

<div className="detail-block space-y-6" id="detail-REQ-8705">
<div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-neutral-500">
<iconify-icon icon="lucide:x" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-neutral-400">Request Expired</div>
<div className="text-[10px] text-neutral-500">Timeout • 2 days ago</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-mono text-neutral-600 line-through">¥ 299.00</div>
</div>
</div>
<a className="w-full py-1.5 rounded bg-neutral-800 text-[10px] text-neutral-400 border border-neutral-700 hover:border-neutral-600 hover:text-white transition-colors flex items-center justify-center gap-2" href="/retry/REQ-8705">
<iconify-icon icon="lucide:refresh-cw" width="12"></iconify-icon> Retry request
                </a>
</div>
<div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800">
<div className="text-[11px] uppercase tracking-wide text-neutral-500 font-semibold mb-3">Credit Ledger</div>
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-wider text-neutral-600">Available credit</span>
<span className="text-xs font-mono font-medium text-neutral-500">¥ 5,000.00</span>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-wider text-neutral-600">Deducted on contract</span>
<span className="text-xs font-mono text-neutral-600">- ¥ 0.00</span>
</div>
</div>
<div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800 font-mono text-[11px] text-neutral-300 space-y-1">
<div className="text-[11px] uppercase tracking-wide text-neutral-500 font-semibold mb-2 font-sans">Payload Hash (preview)</div>
<div>gw: <span className="text-neutral-200">5000</span></div>
<div>dest: <span className="text-neutral-200">"Minsk"</span></div>
<div>hs: <span className="text-neutral-200">"err_timeout"</span></div>
</div>
</div>
</div>
<div className="p-4 border-t border-neutral-900 bg-neutral-900/30">
<a className="w-full py-2 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors flex items-center justify-center" href="/trace">
              View Full Trace Log
            </a>
</div>
</div>
</div>

<div className="tab-content flex-1 overflow-auto" id="tab-specs">
<div className="p-6 text-xs text-neutral-400">
          Stage 5 specs placeholder.
          <div className="mt-2 text-neutral-600">This tab switches without JS (radio + CSS).</div>
</div>
</div>
</main>
</div>

    </>
  );
}
