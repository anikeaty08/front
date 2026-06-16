import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Binary/Hacker Code Animation
        const container = document.getElementById('binary-code');
        const rows = 20;
        const width = 32;
        
        function generateLine() {
            let line = '';
            for(let i = 0; i < width; i++) {
                // Mix of binary and hex for texture
                if(Math.random() > 0.95) line += '0x' + Math.floor(Math.random()*255).toString(16).toUpperCase();
                else line += Math.random() > 0.5 ? '1' : '0';
                line += ' ';
            }
            return line;
        }

        // Initialize
        let content = [];
        for(let i=0; i<rows; i++) content.push(generateLine());
        
        // Animation Loop
        setInterval(() => {
            // Remove first line, add new line at end
            content.shift();
            content.push(generateLine());
            container.innerText = content.join('\n');
        }, 100); // Speed of updates
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 right-0 z-0 pointer-events-none select-none overflow-hidden w-[400px] h-[400px] mask-gradient opacity-40 mix-blend-screen">
<div className="text-[10px] leading-[14px] text-emerald-500/40 text-right font-mono p-6 whitespace-pre" id="binary-code"></div>
</div>

<div className="absolute top-0 right-0 -z-10 w-[800px] h-[600px] overflow-visible opacity-30 pointer-events-none">
<div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-900/40 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-[0%] right-[20%] w-96 h-96 bg-blue-900/40 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute top-[20%] right-[10%] w-96 h-96 bg-indigo-900/40 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
</div>

<nav className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#">
<div className="w-5 h-5 bg-white text-black flex items-center justify-center rounded-sm">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="square" strokeLinejoin="square" strokeWidth="4" viewbox="0 0 24 24" width="12">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<span className="font-semibold tracking-tight text-white text-base">TxFlow</span>
</a>
<div className="hidden lg:flex items-center gap-6 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Trade</a>
<a className="text-white" href="#">Vaults</a>
<a className="hover:text-white transition-colors" href="#">Portfolio</a>
<a className="hover:text-white transition-colors" href="#">Explorer</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex bg-white text-black px-4 py-1.5 text-xs font-semibold hover:bg-zinc-200 transition-colors relative z-10">
                    Connect Wallet
                </button>
</div>
</div>
</nav>
<main className="max-w-[1600px] mx-auto px-6 py-12 space-y-8 relative z-10">

<div>
<h1 className="text-4xl font-semibold text-white tracking-tight">Vaults</h1>
</div>

<div className="w-full bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-sm">
<div className="flex flex-col gap-2">
<span className="text-sm text-zinc-500 font-medium">Total Value Locked</span>
<span className="text-3xl text-white tracking-tight">$1,203,999,999</span>
</div>
</div>

<div className="w-full bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-sm">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl text-white font-medium tracking-tight">Protocol Vaults</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 text-xs text-zinc-600">
<th className="pb-4 font-normal w-1/6">Vault</th>
<th className="pb-4 font-normal w-1/6">Leader</th>
<th className="pb-4 font-normal w-1/6">APR</th>
<th className="pb-4 font-normal w-1/6">TVL</th>
<th className="pb-4 font-normal w-1/6">Your Deposit</th>
<th className="pb-4 font-normal w-1/12">Age (days)</th>
<th className="pb-4 font-normal w-1/6 text-right">Snapshot</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0">
<td className="py-5 text-white">Liquidity Provider</td>
<td className="py-5 text-zinc-500">0x95a4...0f14</td>
<td className="py-5 text-red-500">-0.0500%</td>
<td className="py-5 text-white">$1,203,999,999.29</td>
<td className="py-5 text-zinc-500">$0.00</td>
<td className="py-5 text-zinc-500">85</td>
<td className="py-5">
<div className="flex justify-end">
<svg className="stroke-red-500 fill-none stroke-[1.5]" height="24" style={{filter: 'drop-shadow(0 0 2px rgba(239, 68, 68, 0.2))'}} width="100">

<path d="M0 5 L60 5 Q70 5 75 10 T90 20"></path>
</svg>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="w-full bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-sm">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl text-white font-medium tracking-tight">User Vaults</h2>

<div className="flex gap-3">
<button className="p-1.5 text-zinc-600 hover:text-white transition-colors">
<iconify-icon height="18" icon="solar:magnifer-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 text-zinc-600 hover:text-white transition-colors">
<iconify-icon height="18" icon="solar:filter-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 text-xs text-zinc-600">
<th className="pb-4 font-normal w-1/6">Vault</th>
<th className="pb-4 font-normal w-1/6">Leader</th>
<th className="pb-4 font-normal w-1/6">APR</th>
<th className="pb-4 font-normal w-1/6">TVL</th>
<th className="pb-4 font-normal w-1/6">Your Deposit</th>
<th className="pb-4 font-normal w-1/12">Age (days)</th>
<th className="pb-4 font-normal w-1/6 text-right">Snapshot</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="group hover:bg-white/[0.02] transition-colors border-b border-white/5">
<td className="py-5 text-white">0xAtlas</td>
<td className="py-5 text-zinc-500">0xc886...3dba</td>
<td className="py-5 text-zinc-500">--</td>
<td className="py-5 text-white">$0.00</td>
<td className="py-5 text-zinc-500">$0.00</td>
<td className="py-5 text-zinc-500">85</td>
<td className="py-5">
<div className="flex justify-end">
<svg className="stroke-emerald-900/60 fill-none stroke-[1.5]" height="24" width="100">
<path d="M0 20 L100 20"></path>
</svg>
</div>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors border-b border-white/5">
<td className="py-5 text-white">dev-vault-01</td>
<td className="py-5 text-zinc-500">0x6a38...bb8d</td>
<td className="py-5 text-zinc-500">--</td>
<td className="py-5 text-white">$0.00</td>
<td className="py-5 text-zinc-500">$0.00</td>
<td className="py-5 text-zinc-500">85</td>
<td className="py-5">
<div className="flex justify-end">
<svg className="stroke-emerald-900/60 fill-none stroke-[1.5]" height="24" width="100">
<path d="M0 20 L100 20"></path>
</svg>
</div>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors border-b border-white/5">
<td className="py-5 text-white">test-vault-01</td>
<td className="py-5 text-zinc-500">0x08d8...2795</td>
<td className="py-5 text-zinc-500">--</td>
<td className="py-5 text-white">$0.00</td>
<td className="py-5 text-zinc-500">$0.00</td>
<td className="py-5 text-zinc-500">85</td>
<td className="py-5">
<div className="flex justify-end">
<svg className="stroke-emerald-900/60 fill-none stroke-[1.5]" height="24" width="100">
<path d="M0 20 L100 20"></path>
</svg>
</div>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0">
<td className="py-5 text-white">test-vault-02</td>
<td className="py-5 text-zinc-500">0xfb22...1f0b</td>
<td className="py-5 text-zinc-500">--</td>
<td className="py-5 text-white">$0.00</td>
<td className="py-5 text-zinc-500">$0.00</td>
<td className="py-5 text-zinc-500">85</td>
<td className="py-5">
<div className="flex justify-end">
<svg className="stroke-emerald-900/60 fill-none stroke-[1.5]" height="24" width="100">
<path d="M0 20 L100 20"></path>
</svg>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="mt-4 pt-4 border-t border-white/5 flex justify-end">
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center text-zinc-600 hover:text-white hover:bg-white/5 rounded-sm transition-colors">
<iconify-icon height="18" icon="solar:alt-arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center text-zinc-600 hover:text-white hover:bg-white/5 rounded-sm transition-colors">
<iconify-icon height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</main>


    </>
  );
}
