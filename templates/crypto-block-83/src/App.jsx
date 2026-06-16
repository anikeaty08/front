import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Typing Simulation for Bottom Terminals
        const typeText = async (elementId, text, speed = 50) => {
            const el = document.getElementById(elementId);
            if (!el) return;
            
            // Type
            for (let i = 0; i < text.length; i++) {
                el.textContent = text.substring(0, i + 1);
                await new Promise(r => setTimeout(r, speed + Math.random() * 30));
            }
            
            // Wait
            await new Promise(r => setTimeout(r, 2000));
            
            // Delete
            for (let i = text.length; i >= 0; i--) {
                el.textContent = text.substring(0, i);
                await new Promise(r => setTimeout(r, 30));
            }
        };

        const runTerminalLoop = async (id, commands) => {
            while (true) {
                const cmd = commands[Math.floor(Math.random() * commands.length)];
                await typeText(id, cmd);
                await new Promise(r => setTimeout(r, 1000 + Math.random() * 2000));
            }
        };

        // Start animations with different commands for each panel
        runTerminalLoop('terminal-1', [
            'tail -f /var/log/blocks.log',
            'syncing --mode=fast',
            'verifying signatures...',
            'indexing height: 12345679',
            'ping mainnet-node-1'
        ]);

        runTerminalLoop('terminal-2', [
            'grep "0x89" mempool.dat',
            'analyzing gas fees...',
            'trace_transaction 0x89sk...23fw',
            'websocket connection stable',
            'exporting csv...'
        ]);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="scanlines"></div>

<div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black opacity-40"></div>

<div className="fixed bottom-0 left-0 right-0 h-[400px] z-[-1] pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_top,black,transparent)] opacity-20"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:linear-gradient(to_top,black,transparent)] opacity-10"></div>

<div className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/10 blur-[120px] rounded-full"></div>
</div>

<nav className="w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
<div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">

<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-green-500 text-2xl" icon="solar:box-linear"></iconify-icon>
<span className="text-lg font-bold text-white tracking-tight">TxFlow</span>
</a>

<div className="hidden xl:flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Trade</a>
<a className="hover:text-white transition-colors" href="#">Vaults</a>
<a className="hover:text-white transition-colors" href="#">Portfolio</a>
<a className="hover:text-white transition-colors" href="#">Referrals</a>
<a className="text-green-400" href="#">Explorer</a>
<a className="hover:text-white transition-colors" href="#">Testnet</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Points</a>
</div>
</div>

<div className="flex items-center gap-4">
<button className="bg-green-400 hover:bg-green-300 text-black px-4 py-1.5 text-xs font-bold rounded-sm transition-colors uppercase tracking-wide">
                    Deposit
                </button>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-white/10 hover:border-white/20 transition-colors cursor-pointer bg-zinc-900/50">
<span className="text-xs text-zinc-300">0xEbbe...3EDC</span>
<iconify-icon className="text-zinc-500 text-sm" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="p-2 rounded-sm border border-white/10 hover:border-white/20 hover:text-white transition-colors flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:wallet-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-1 pt-16 pb-32 px-6 max-w-[1800px] mx-auto w-full z-10">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
<h1 className="text-3xl font-medium text-white flex items-center gap-3">
<span className="text-zinc-600 text-2xl">&gt;</span> EXPLORER
            </h1>
<div className="w-full md:w-[480px] relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-green-500 transition-colors flex items-center">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="w-full bg-zinc-900/30 border border-white/10 text-sm text-zinc-300 pl-10 pr-4 py-3 focus:outline-none focus:border-green-500/50 focus:bg-zinc-900/50 transition-all placeholder-zinc-700" placeholder="Search by block, transaction hash, or user address" type="text"/>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

<div className="border border-white/10 bg-black/60 backdrop-blur-sm flex flex-col h-[700px] shadow-2xl shadow-black/50">

<div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-zinc-900/20">
<h2 className="text-sm font-medium text-white tracking-wider">LATEST BLOCKS</h2>
<span className="text-xs text-zinc-600">Showing 10/888</span>
</div>

<div className="flex-1 overflow-auto">
<table className="w-full text-left text-xs">
<thead className="sticky top-0 bg-black/90 backdrop-blur-md z-10 text-zinc-600 border-b border-white/5">
<tr>
<th className="pl-6 py-3 font-medium w-32">BLOCK</th>
<th className="py-3 font-medium w-32">TIME</th>
<th className="py-3 font-medium w-32">TXNS</th>
<th className="py-3 font-medium w-40">PROPOSER</th>
<th className="pr-6 py-3 font-medium text-right">HASH</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4">
<div className="flex items-center gap-2 text-green-500 group-hover:text-green-400">
<iconify-icon className="text-base" icon="solar:box-linear"></iconify-icon>
<span>12345678</span>
</div>
</td>
<td className="py-4 text-zinc-300">0sec ago</td>
<td className="py-4 text-zinc-300">2379</td>
<td className="py-4 text-zinc-500">0xd98s...234s</td>
<td className="pr-6 py-4 text-right text-zinc-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4">
<div className="flex items-center gap-2 text-green-500 group-hover:text-green-400">
<iconify-icon className="text-base" icon="solar:box-linear"></iconify-icon>
<span>12345678</span>
</div>
</td>
<td className="py-4 text-zinc-300">0sec ago</td>
<td className="py-4 text-zinc-300">1892</td>
<td className="py-4 text-zinc-500">0xd98s...234s</td>
<td className="pr-6 py-4 text-right text-zinc-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4">
<div className="flex items-center gap-2 text-green-500 group-hover:text-green-400">
<iconify-icon className="text-base" icon="solar:box-linear"></iconify-icon>
<span>12345678</span>
</div>
</td>
<td className="py-4 text-zinc-300">1sec ago</td>
<td className="py-4 text-zinc-300">2452</td>
<td className="py-4 text-zinc-500">0xd98s...234s</td>
<td className="pr-6 py-4 text-right text-zinc-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4">
<div className="flex items-center gap-2 text-green-500 group-hover:text-green-400">
<iconify-icon className="text-base" icon="solar:box-linear"></iconify-icon>
<span>12345678</span>
</div>
</td>
<td className="py-4 text-zinc-300">1sec ago</td>
<td className="py-4 text-zinc-300">6752</td>
<td className="py-4 text-zinc-500">0xd98s...234s</td>
<td className="pr-6 py-4 text-right text-zinc-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4">
<div className="flex items-center gap-2 text-green-500 group-hover:text-green-400">
<iconify-icon className="text-base" icon="solar:box-linear"></iconify-icon>
<span>12345678</span>
</div>
</td>
<td className="py-4 text-zinc-300">2sec ago</td>
<td className="py-4 text-zinc-300">6752</td>
<td className="py-4 text-zinc-500">0xd98s...234s</td>
<td className="pr-6 py-4 text-right text-zinc-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4">
<div className="flex items-center gap-2 text-green-500 group-hover:text-green-400">
<iconify-icon className="text-base" icon="solar:box-linear"></iconify-icon>
<span>12345678</span>
</div>
</td>
<td className="py-4 text-zinc-300">3sec ago</td>
<td className="py-4 text-zinc-300">6752</td>
<td className="py-4 text-zinc-500">0xd98s...234s</td>
<td className="pr-6 py-4 text-right text-zinc-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4">
<div className="flex items-center gap-2 text-green-500 group-hover:text-green-400">
<iconify-icon className="text-base" icon="solar:box-linear"></iconify-icon>
<span>12345678</span>
</div>
</td>
<td className="py-4 text-zinc-300">3sec ago</td>
<td className="py-4 text-zinc-300">3124</td>
<td className="py-4 text-zinc-500">0xd98s...234s</td>
<td className="pr-6 py-4 text-right text-zinc-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4">
<div className="flex items-center gap-2 text-green-500 group-hover:text-green-400">
<iconify-icon className="text-base" icon="solar:box-linear"></iconify-icon>
<span>12345678</span>
</div>
</td>
<td className="py-4 text-zinc-300">4sec ago</td>
<td className="py-4 text-zinc-300">1255</td>
<td className="py-4 text-zinc-500">0xd98s...234s</td>
<td className="pr-6 py-4 text-right text-zinc-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4">
<div className="flex items-center gap-2 text-green-500 group-hover:text-green-400">
<iconify-icon className="text-base" icon="solar:box-linear"></iconify-icon>
<span>12345678</span>
</div>
</td>
<td className="py-4 text-zinc-300">4sec ago</td>
<td className="py-4 text-zinc-300">3321</td>
<td className="py-4 text-zinc-500">0xd98s...234s</td>
<td className="pr-6 py-4 text-right text-zinc-500 font-mono">0x1234...5678</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-3 border-t border-white/10 bg-black/80 text-[11px] font-mono text-zinc-500 flex items-center">
<span className="text-green-800 mr-2">root@sys:~#</span>
<span className="text-zinc-400 min-h-[1rem]" id="terminal-1">_</span>
<span className="cursor-blink ml-0.5 w-1.5 h-3 bg-green-500/50 block"></span>
</div>
</div>

<div className="border border-white/10 bg-black/60 backdrop-blur-sm flex flex-col h-[700px] shadow-2xl shadow-black/50">

<div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-zinc-900/20">
<h2 className="text-sm font-medium text-white tracking-wider">LATEST TRANSACTIONS</h2>
<span className="text-xs text-zinc-600">Showing 10/888</span>
</div>

<div className="flex-1 overflow-auto">
<table className="w-full text-left text-xs">
<thead className="sticky top-0 bg-black/90 backdrop-blur-md z-10 text-zinc-600 border-b border-white/5">
<tr>
<th className="pl-6 py-3 font-medium w-32">HASH</th>
<th className="py-3 font-medium w-32">ACTION</th>
<th className="py-3 font-medium w-28">BLOCK</th>
<th className="py-3 font-medium w-24">TIME</th>
<th className="pr-6 py-3 font-medium text-right">USER</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4 text-green-500 group-hover:text-green-400 font-mono">0x89sk...23fw</td>
<td className="py-4 text-zinc-300">CancelByCloid</td>
<td className="py-4 text-zinc-300">923899031</td>
<td className="py-4 text-zinc-300">0sec ago</td>
<td className="pr-6 py-4 text-right text-green-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4 text-green-500 group-hover:text-green-400 font-mono">0x89sk...23fw</td>
<td className="py-4 text-zinc-300">CancelByCloid</td>
<td className="py-4 text-zinc-300">923899031</td>
<td className="py-4 text-zinc-300">0sec ago</td>
<td className="pr-6 py-4 text-right text-green-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4 text-green-500 group-hover:text-green-400 font-mono">0x89sk...23fw</td>
<td className="py-4 text-zinc-300">Execute</td>
<td className="py-4 text-zinc-300">923899031</td>
<td className="py-4 text-zinc-300">0sec ago</td>
<td className="pr-6 py-4 text-right text-green-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4 text-green-500 group-hover:text-green-400 font-mono">0x89sk...23fw</td>
<td className="py-4 text-zinc-300">Transfer</td>
<td className="py-4 text-zinc-300">923899031</td>
<td className="py-4 text-zinc-300">1sec ago</td>
<td className="pr-6 py-4 text-right text-green-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4 text-green-500 group-hover:text-green-400 font-mono">0x89sk...23fw</td>
<td className="py-4 text-zinc-300">Swap</td>
<td className="py-4 text-zinc-300">923899031</td>
<td className="py-4 text-zinc-300">2sec ago</td>
<td className="pr-6 py-4 text-right text-green-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4 text-green-500 group-hover:text-green-400 font-mono">0x89sk...23fw</td>
<td className="py-4 text-zinc-300">Approve</td>
<td className="py-4 text-zinc-300">923899031</td>
<td className="py-4 text-zinc-300">2sec ago</td>
<td className="pr-6 py-4 text-right text-green-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4 text-green-500 group-hover:text-green-400 font-mono">0x89sk...23fw</td>
<td className="py-4 text-zinc-300">CancelByCloid</td>
<td className="py-4 text-zinc-300">923899031</td>
<td className="py-4 text-zinc-300">3sec ago</td>
<td className="pr-6 py-4 text-right text-green-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4 text-green-500 group-hover:text-green-400 font-mono">0x89sk...23fw</td>
<td className="py-4 text-zinc-300">Mint</td>
<td className="py-4 text-zinc-300">923899031</td>
<td className="py-4 text-zinc-300">4sec ago</td>
<td className="pr-6 py-4 text-right text-green-500 font-mono">0x1234...5678</td>
</tr>
<tr className="hover:bg-green-500/5 transition-colors group cursor-pointer">
<td className="pl-6 py-4 text-green-500 group-hover:text-green-400 font-mono">0x89sk...23fw</td>
<td className="py-4 text-zinc-300">Execute</td>
<td className="py-4 text-zinc-300">923899031</td>
<td className="py-4 text-zinc-300">4sec ago</td>
<td className="pr-6 py-4 text-right text-green-500 font-mono">0x1234...5678</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-3 border-t border-white/10 bg-black/80 text-[11px] font-mono text-zinc-500 flex items-center">
<span className="text-zinc-600 mr-2">root@sys:~#</span>
<span className="text-zinc-400 min-h-[1rem]" id="terminal-2">_</span>
<span className="cursor-blink ml-0.5 w-1.5 h-3 bg-green-500/50 block"></span>
</div>
</div>
</div>
</main>


    </>
  );
}
