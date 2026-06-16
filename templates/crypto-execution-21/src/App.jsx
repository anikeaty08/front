import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<aside className="w-64 border-r border-zinc-800/50 flex flex-col bg-[#09090b] hidden md:flex z-20 shrink-0">
<div className="h-16 flex items-center px-6 border-b border-zinc-800/50">
<span className="text-zinc-100 font-medium tracking-tighter text-lg">KTKT-001</span>
</div>
<div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
<div className="px-3 pb-2 pt-1">
<span className="text-xs text-zinc-500 tracking-tight font-medium uppercase">Engine</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800/40 text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg opacity-80" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800/40 text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg opacity-80" icon="solar:link-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Webhooks</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-800/40 text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-lg opacity-80" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">DEX Routing</span>
</a>
<div className="px-3 pb-2 pt-6">
<span className="text-xs text-zinc-500 tracking-tight font-medium uppercase">System</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800/40 text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg opacity-80" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Execution Logs</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800/40 text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg opacity-80" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Settings</span>
</a>
</div>
<div className="p-4 border-t border-zinc-800/50">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 tracking-tighter text-xs font-medium border border-zinc-700/50">
                    AX
                </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">Alex</span>
<span className="text-xs text-zinc-500">Free Tier</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#09090b] relative">

<header className="h-16 border-b border-zinc-800/50 flex items-center justify-between px-6 lg:px-10 shrink-0 bg-[#09090b]/80 backdrop-blur-md z-10">
<h1 className="text-xl font-medium tracking-tight text-zinc-100">DEX Routing</h1>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800/60 bg-zinc-900/30">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse"></div>
<span className="text-xs font-medium text-zinc-300 tracking-tight">System Operational</span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10">
<div className="max-w-5xl mx-auto flex flex-col gap-8">

<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<h2 className="text-2xl font-medium tracking-tight text-zinc-100">Routing Configuration</h2>
<p className="text-sm text-zinc-400">Manage liquidity sources, slippage limits, and path priorities for executions.</p>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-[#09090b] rounded-lg text-sm font-medium hover:bg-white transition-colors shadow-sm">
<iconify-icon className="text-lg" icon="solar:diskette-linear"></iconify-icon>
                        Save Configuration
                    </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<section className="rounded-xl border border-zinc-800/60 bg-[#0f0f11] overflow-hidden flex flex-col">
<div className="p-5 border-b border-zinc-800/50 flex flex-col gap-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-zinc-100">
<iconify-icon className="text-lg" icon="solar:tuning-square-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium tracking-tight">Global Parameters</h3>
</div>
</div>
<p className="text-xs text-zinc-500">Default constraints applied to all outgoing swaps.</p>
</div>
<div className="p-5 flex flex-col gap-5">
<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-zinc-300">Base Slippage Tolerance</span>
<span className="text-xs text-zinc-500">Maximum allowed price impact</span>
</div>
<div className="relative w-24">
<input className="w-full bg-[#18181b] border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:outline-none focus:border-zinc-600 block p-2 font-mono tracking-tight text-right pr-7" type="text" value="0.5"/>
<span className="absolute inset-y-0 right-0 flex items-center pr-2.5 text-xs text-zinc-500">%</span>
</div>
</div>
<div className="h-px w-full bg-zinc-800/50"></div>
<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-zinc-300">Max Priority Fee</span>
<span className="text-xs text-zinc-500">Miner tip for faster inclusion</span>
</div>
<div className="relative w-24">
<input className="w-full bg-[#18181b] border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:outline-none focus:border-zinc-600 block p-2 font-mono tracking-tight text-right pr-9" type="text" value="2.0"/>
<span className="absolute inset-y-0 right-0 flex items-center pr-2.5 text-xs text-zinc-500">gw</span>
</div>
</div>
<div className="h-px w-full bg-zinc-800/50"></div>
<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-zinc-300">Auto-Retry on Revert</span>
<span className="text-xs text-zinc-500">Attempt alternative route if swap fails</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4.5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[14px] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-zinc-200 peer-checked:after:bg-[#09090b]"></div>
</label>
</div>
</div>
</section>

<section className="rounded-xl border border-zinc-800/60 bg-[#0f0f11] overflow-hidden flex flex-col">
<div className="p-5 border-b border-zinc-800/50 flex flex-col gap-1">
<div className="flex items-center gap-2 text-zinc-100">
<iconify-icon className="text-lg" icon="solar:branching-paths-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium tracking-tight">Aggregator Engine</h3>
</div>
<p className="text-xs text-zinc-500">Optimization strategy when using liquidity aggregators.</p>
</div>
<div className="p-5 flex flex-col gap-5">

<div className="flex flex-col gap-3">
<label className="flex items-start gap-3 p-3 rounded-lg border border-zinc-700/80 bg-[#18181b]/50 cursor-pointer hover:bg-[#18181b] transition-colors relative">
<input checked="" className="sr-only peer" name="routing_strategy" type="radio"/>
<div className="w-4 h-4 rounded-full border border-zinc-600 mt-0.5 peer-checked:border-zinc-300 flex items-center justify-center after:content-[''] after:w-2 after:h-2 after:bg-zinc-300 after:rounded-full after:opacity-0 peer-checked:after:opacity-100 transition-all shrink-0"></div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-zinc-200">Optimize for Return</span>
<span className="text-xs text-zinc-500">Finds the absolute best price, ignoring gas costs. Slower execution times.</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border border-zinc-800/60 bg-transparent cursor-pointer hover:bg-[#18181b]/30 transition-colors relative">
<input className="sr-only peer" name="routing_strategy" type="radio"/>
<div className="w-4 h-4 rounded-full border border-zinc-600 mt-0.5 peer-checked:border-zinc-300 flex items-center justify-center after:content-[''] after:w-2 after:h-2 after:bg-zinc-300 after:rounded-full after:opacity-0 peer-checked:after:opacity-100 transition-all shrink-0"></div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-zinc-400 peer-checked:text-zinc-200">Optimize for Speed &amp; Gas</span>
<span className="text-xs text-zinc-600 peer-checked:text-zinc-500">Minimizes contract hops to save gas and ensure fast finality.</span>
</div>
</label>
</div>
<div className="flex items-center gap-2 mt-2 px-3 py-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/40">
<iconify-icon className="text-sm text-zinc-500" icon="solar:info-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400">Aggregators will split trades across multiple pools if volume exceeds $10k.</span>
</div>
</div>
</section>
</div>

<section className="rounded-xl border border-zinc-800/60 bg-[#0f0f11] overflow-hidden flex flex-col">
<div className="p-5 border-b border-zinc-800/50 flex items-center justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-zinc-100">
<iconify-icon className="text-lg" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium tracking-tight">Liquidity Sources</h3>
</div>
<p className="text-xs text-zinc-500">Enable and prioritize specific decentralized exchanges.</p>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-md text-xs font-medium transition-colors border border-zinc-700/50">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
                            Add Source
                        </button>
</div>

<div className="grid grid-cols-12 gap-4 p-4 border-b border-zinc-800/50 bg-[#18181b]/30">
<div className="col-span-4 text-xs font-medium text-zinc-500 uppercase tracking-tight">Protocol</div>
<div className="col-span-4 text-xs font-medium text-zinc-500 uppercase tracking-tight">Router Address</div>
<div className="col-span-2 text-xs font-medium text-zinc-500 uppercase tracking-tight">Fee Tiers</div>
<div className="col-span-2 text-xs font-medium text-zinc-500 uppercase tracking-tight text-right">Status</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-zinc-800/50 hover:bg-zinc-900/20 transition-colors">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-medium text-xs border border-zinc-700/50 shrink-0">
                                U3
                            </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">Uniswap V3</span>
<span className="text-xs text-zinc-500">Direct Pool Access</span>
</div>
</div>
<div className="col-span-4 flex items-center">
<div className="flex items-center gap-2 px-2 py-1 bg-[#18181b] border border-zinc-800/80 rounded w-fit group">
<span className="text-xs text-zinc-400 font-mono tracking-tight">0x68b346...4311</span>
<button className="text-zinc-500 hover:text-zinc-200 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="col-span-2 flex items-center gap-1.5">
<span className="text-xs px-1.5 py-0.5 rounded bg-zinc-800/60 text-zinc-300 font-mono border border-zinc-700/50">0.05%</span>
<span className="text-xs px-1.5 py-0.5 rounded bg-zinc-800/60 text-zinc-300 font-mono border border-zinc-700/50">0.3%</span>
</div>
<div className="col-span-2 flex items-center justify-end gap-4">
<button className="text-zinc-500 hover:text-zinc-200 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon>
</button>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4.5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[14px] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-zinc-200 peer-checked:after:bg-[#09090b]"></div>
</label>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-zinc-800/50 hover:bg-zinc-900/20 transition-colors">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-medium text-xs border border-zinc-700/50 shrink-0">
                                SS
                            </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">SushiSwap</span>
<span className="text-xs text-zinc-500">V2 Liquidity</span>
</div>
</div>
<div className="col-span-4 flex items-center">
<div className="flex items-center gap-2 px-2 py-1 bg-[#18181b] border border-zinc-800/80 rounded w-fit group">
<span className="text-xs text-zinc-400 font-mono tracking-tight">0xd9e1cE...23b4</span>
<button className="text-zinc-500 hover:text-zinc-200 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="col-span-2 flex items-center gap-1.5">
<span className="text-xs px-1.5 py-0.5 rounded bg-zinc-800/60 text-zinc-300 font-mono border border-zinc-700/50">0.3%</span>
</div>
<div className="col-span-2 flex items-center justify-end gap-4">
<button className="text-zinc-500 hover:text-zinc-200 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon>
</button>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4.5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[14px] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-zinc-200 peer-checked:after:bg-[#09090b]"></div>
</label>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-zinc-900/20 transition-colors opacity-60">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-400 font-medium text-xs border border-zinc-800 shrink-0">
                                1I
                            </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-400">1inch Aggregator</span>
<span className="text-xs text-zinc-600">Smart Router V5</span>
</div>
</div>
<div className="col-span-4 flex items-center">
<div className="flex items-center gap-2 px-2 py-1 bg-[#18181b]/50 border border-zinc-800/50 rounded w-fit group">
<span className="text-xs text-zinc-500 font-mono tracking-tight">0x111111...1111</span>
<button className="text-zinc-600 hover:text-zinc-400 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="col-span-2 flex items-center gap-1.5">
<span className="text-xs text-zinc-500">Dynamic</span>
</div>
<div className="col-span-2 flex items-center justify-end gap-4">
<button className="text-zinc-600 hover:text-zinc-400 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon>
</button>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4.5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[14px] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-500 after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-zinc-200 peer-checked:after:bg-[#09090b]"></div>
</label>
</div>
</div>
</section>
</div>
</div>
</main>

    </>
  );
}
