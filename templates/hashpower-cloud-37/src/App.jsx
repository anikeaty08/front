import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/[0.08]">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tighter font-medium text-lg">HASHPOWER</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-4 text-sm font-medium">
<a className="text-white hover:text-white/80 transition-colors" href="#">Dashboard</a>
<a className="hover:text-white transition-colors" href="#">Nodes</a>
<a className="hover:text-white transition-colors" href="#">Activity</a>
</div>
<div className="flex items-center gap-3 pl-6 border-l border-white/[0.08]">
<div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1.5 text-sm text-white">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">$1,452.80</span>
</div>
<button className="h-8 w-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.08] transition-colors text-white">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>
<main className="max-w-6xl mx-auto px-6 w-full mt-10 flex flex-col gap-12">

<section className="flex flex-col gap-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl tracking-tight font-medium text-white">Authentication</h2>
<p className="text-sm mt-1">Manage access via secure Google integration.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="flex items-center gap-3 text-white">
<div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
<iconify-icon icon="solar:login-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium">Log In</h3>
</div>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#A1A1AA]">Email Address</label>
<input className="w-full bg-black border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors" placeholder="name@gmail.com" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-[#A1A1AA]">Password</label>
<a className="text-xs text-white hover:underline" href="#">Forgot?</a>
</div>
<input className="w-full bg-black border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors" placeholder="••••••••" type="password"/>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-2 rounded-lg hover:bg-white/90 transition-colors mt-2">Sign In</button>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-5">
<div className="flex items-center gap-3 text-white">
<div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
<iconify-icon icon="solar:user-plus-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium">Create Account</h3>
</div>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#A1A1AA]">Email Address</label>
<input className="w-full bg-black border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors" placeholder="name@gmail.com" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#A1A1AA]">Choose Password</label>
<input className="w-full bg-black border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors" placeholder="Min. 8 characters" type="password"/>
</div>
<button className="w-full bg-white/[0.04] border border-white/[0.08] text-white font-medium text-sm py-2 rounded-lg hover:bg-white/[0.08] transition-colors mt-2">Register with Gmail</button>
</div>
</div>
</div>
</section>

<div className="h-px w-full bg-white/[0.04]"></div>

<section className="flex flex-col gap-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl tracking-tight font-medium text-white flex items-center gap-2">
                        Cloud Nodes
                        <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-normal tracking-normal">
<span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span> Online
                        </span>
</h2>
<p className="text-sm mt-1">Multi-coin mining automatic to blockchain balance.</p>
</div>
<div className="hidden sm:flex items-center gap-4 text-sm bg-[#0A0A0A] border border-white/[0.08] rounded-lg p-1">
<button className="px-3 py-1 bg-white/[0.08] text-white rounded-md shadow-sm">All Nodes</button>
<button className="px-3 py-1 hover:text-white transition-colors">Active</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-5 flex flex-col relative overflow-hidden group hover:border-white/20 transition-all">

<div className="absolute top-0 left-0 w-full h-0.5 bg-white/[0.04]">
<div className="h-full bg-orange-500 w-1/3 relative overflow-hidden">
<div className="absolute inset-0 bg-white/30 animate-sweep"></div>
</div>
</div>
<div className="flex justify-between items-start mt-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
<iconify-icon className="text-xl" icon="solar:bitcoin-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Bitcoin</h4>
<span className="text-xs text-[#A1A1AA]">SHA-256 Algorithm</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 mt-6">
<div className="flex justify-between items-end">
<span className="text-xs font-medium text-[#A1A1AA]">Current Balance</span>
<span className="text-sm font-medium text-white">0.00421000 BTC</span>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-medium text-[#A1A1AA]">Hashrate</span>
<span className="text-sm font-medium text-white">124.5 TH/s</span>
</div>
</div>
<div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs">
<span className="flex items-center gap-1.5 text-[#A1A1AA]">
<iconify-icon icon="solar:transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
                            Auto-syncing to network
                        </span>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-5 flex flex-col relative overflow-hidden group hover:border-white/20 transition-all">
<div className="absolute top-0 left-0 w-full h-0.5 bg-white/[0.04]">
<div className="h-full bg-blue-500 w-1/2 relative overflow-hidden">
<div className="absolute inset-0 bg-white/30 animate-sweep" style={{animationDelay: '0.5s'}}></div>
</div>
</div>
<div className="flex justify-between items-start mt-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
<iconify-icon className="text-xl" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Ethereum</h4>
<span className="text-xs text-[#A1A1AA]">Ethash Algorithm</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 mt-6">
<div className="flex justify-between items-end">
<span className="text-xs font-medium text-[#A1A1AA]">Current Balance</span>
<span className="text-sm font-medium text-white">0.85400000 ETH</span>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-medium text-[#A1A1AA]">Hashrate</span>
<span className="text-sm font-medium text-white">850 MH/s</span>
</div>
</div>
<div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs">
<span className="flex items-center gap-1.5 text-[#A1A1AA]">
<iconify-icon icon="solar:transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
                            Auto-syncing to network
                        </span>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-5 flex flex-col relative overflow-hidden group hover:border-white/20 transition-all">
<div className="absolute top-0 left-0 w-full h-0.5 bg-white/[0.04]">
<div className="h-full bg-purple-500 w-3/4 relative overflow-hidden">
<div className="absolute inset-0 bg-white/30 animate-sweep" style={{animationDelay: '1s'}}></div>
</div>
</div>
<div className="flex justify-between items-start mt-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 border border-purple-500/20">
<iconify-icon className="text-xl" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Solana</h4>
<span className="text-xs text-[#A1A1AA]">PoH Validation</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 mt-6">
<div className="flex justify-between items-end">
<span className="text-xs font-medium text-[#A1A1AA]">Current Balance</span>
<span className="text-sm font-medium text-white">14.20000000 SOL</span>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-medium text-[#A1A1AA]">Stake Power</span>
<span className="text-sm font-medium text-white">2.5 kSOL</span>
</div>
</div>
<div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs">
<span className="flex items-center gap-1.5 text-[#A1A1AA]">
<iconify-icon icon="solar:transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
                            Auto-syncing to network
                        </span>
</div>
</div>
</div>
</section>

<div className="h-px w-full bg-white/[0.04]"></div>

<section className="flex flex-col gap-6">
<div>
<h2 className="text-xl tracking-tight font-medium text-white">Financial Operations</h2>
<p className="text-sm mt-1">Manage external transfers to crypto wallets and FaucetPay.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 text-white">
<div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
<iconify-icon icon="solar:import-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium">Deposit</h3>
</div>
<span className="text-xs bg-white/[0.04] border border-white/[0.08] px-2 py-1 rounded text-[#A1A1AA]">Min. 1 USD</span>
</div>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#A1A1AA]">Select Network Asset</label>
<div className="relative">
<select className="w-full bg-black border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white appearance-none focus:outline-none focus:border-white/30 transition-colors cursor-pointer">
<option>Tether (USDT) - TRC20</option>
<option>Bitcoin (BTC) - Network</option>
<option>Ethereum (ETH) - ERC20</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-[#A1A1AA] pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="bg-black border border-white/[0.08] rounded-xl p-5 flex flex-col items-center justify-center gap-4">
<div className="w-32 h-32 bg-white rounded-lg p-2 flex items-center justify-center">

<iconify-icon className="text-[7rem] text-black" icon="solar:qr-code-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full">
<label className="text-xs font-medium text-[#A1A1AA] mb-1 block text-center">Send exact amount to address</label>
<div className="flex items-center gap-2 bg-[#0A0A0A] border border-white/[0.08] rounded-lg p-1.5 pl-3">
<span className="text-xs font-mono text-white truncate flex-1 tracking-wider">TQ9yRzV...mP4xL1</span>
<button className="p-1.5 hover:bg-white/[0.08] rounded-md transition-colors text-white">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
<p className="text-[10px] text-center text-[#A1A1AA]">Deposits are credited automatically after blockchain confirmation.</p>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 text-white">
<div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
<iconify-icon icon="solar:export-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium">Withdraw</h3>
</div>
<span className="text-xs bg-white/[0.04] border border-white/[0.08] px-2 py-1 rounded text-[#A1A1AA]">Min. 1 USD</span>
</div>
<div className="flex flex-col gap-5">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-[#A1A1AA]">Destination Method</label>
<div className="flex p-1 bg-black border border-white/[0.08] rounded-lg">
<button className="flex-1 py-1.5 text-xs font-medium bg-white/10 text-white rounded-md shadow-sm transition-all">Crypto Wallet</button>
<button className="flex-1 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-white transition-all">FaucetPay</button>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col gap-1.5 w-1/3">
<label className="text-xs font-medium text-[#A1A1AA]">Asset</label>
<div className="relative">
<select className="w-full bg-black border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white appearance-none focus:outline-none focus:border-white/30 transition-colors cursor-pointer">
<option>USDT</option>
<option>BTC</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-[#A1A1AA] pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1.5 flex-1">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-[#A1A1AA]">Amount</label>
<span className="text-[10px] text-[#A1A1AA]">Bal: 1,452.80</span>
</div>
<div className="relative">
<input className="w-full bg-black border border-white/[0.08] rounded-lg pl-3 pr-14 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors font-mono" placeholder="0.00" type="number" value="10.00"/>
<button className="absolute right-1.5 top-1.5 text-[10px] font-medium text-black bg-white hover:bg-white/90 px-2 py-0.5 rounded transition-colors uppercase">Max</button>
</div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#A1A1AA]">Recipient Address</label>
<input className="w-full bg-black border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors" placeholder="Enter valid destination address" type="text"/>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-2 rounded-lg hover:bg-white/90 transition-colors mt-2 flex items-center justify-center gap-2">
                            Execute Withdrawal
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-[10px] text-center text-[#A1A1AA]">Transactions are recorded securely via smart contracts.</p>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
