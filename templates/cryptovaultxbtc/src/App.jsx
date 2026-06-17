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
      

<div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.08)_0,rgba(212,160,23,0)_60%)] rounded-full blur-3xl opacity-70"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.05)_0,rgba(212,160,23,0)_60%)] rounded-full blur-3xl opacity-70"></div>
</div>

<header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-100/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-2 h-2 rounded-full bg-[#d4a017]"></div>
                    CVX
                </a>
<nav className="hidden md:flex items-center gap-6 text-sm font-light text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#invest">Invest</a>
<a className="hover:text-zinc-900 transition-colors" href="#exchange">Exchange</a>
<a className="hover:text-zinc-900 transition-colors" href="#lend">Lend</a>
<a className="hover:text-zinc-900 transition-colors" href="#funding">Funding</a>
</nav>
</div>
<div className="flex items-center gap-4 text-sm font-light">
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#auth">Sign in</a>
<a className="bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#auth">Get Started</a>
</div>
</div>
</header>
<main className="max-w-6xl mx-auto px-6 py-16 space-y-32">

<section className="grid lg:grid-cols-2 gap-16 items-start" id="auth">
<div className="space-y-8 pt-8">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-zinc-900">
                    Institutional-grade <br/>
<span className="text-[#d4a017]">crypto operations.</span>
</h1>
<p className="text-base font-light text-zinc-500 max-w-md leading-relaxed">
                    Access deep liquidity, secure lending protocols, and structured investment products through a unified, high-performance interface.
                </p>
<div className="flex items-center gap-6 text-sm font-light text-zinc-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-[#d4a017]" icon="solar:shield-check-linear"></iconify-icon>
                        Bank-grade Security
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-[#d4a017]" icon="solar:bolt-linear"></iconify-icon>
                        Instant Execution
                    </div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-b from-[#d4a017]/5 to-transparent rounded-3xl -m-1"></div>
<div className="relative bg-white border border-zinc-100 rounded-2xl shadow-[0_8px_40px_rgb(0,0,0,0.02)] overflow-hidden">

<div className="p-8 border-b border-zinc-50">
<h2 className="text-lg font-medium tracking-tight mb-6">Create Account</h2>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 pl-1">Username</label>
<input className="w-full bg-zinc-50/50 border border-zinc-100 rounded-xl px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[#d4a017]/30 focus:ring-1 focus:ring-[#d4a017]/30 transition-all placeholder:text-zinc-400" placeholder="johndoe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 pl-1">Email</label>
<input className="w-full bg-zinc-50/50 border border-zinc-100 rounded-xl px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[#d4a017]/30 focus:ring-1 focus:ring-[#d4a017]/30 transition-all placeholder:text-zinc-400" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 pl-1">Password</label>
<input className="w-full bg-zinc-50/50 border border-zinc-100 rounded-xl px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[#d4a017]/30 focus:ring-1 focus:ring-[#d4a017]/30 transition-all placeholder:text-zinc-400" placeholder="••••••••" type="password"/>
</div>
<div className="pt-2 space-y-1.5">
<label className="text-xs font-medium text-zinc-500 pl-1 flex items-center gap-1">
<iconify-icon icon="solar:wallet-linear"></iconify-icon> Linked Wallet (Withdrawals)
                                </label>
<div className="flex gap-2">
<select className="bg-zinc-50/50 border border-zinc-100 rounded-xl px-3 py-2.5 text-sm font-light focus:outline-none focus:border-[#d4a017]/30 w-1/3">
<option>BTC</option>
<option>ETH</option>
<option>USDT</option>
</select>
<input className="w-full bg-zinc-50/50 border border-zinc-100 rounded-xl px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[#d4a017]/30 focus:ring-1 focus:ring-[#d4a017]/30 transition-all placeholder:text-zinc-400 font-mono text-xs" placeholder="0x..." type="text"/>
</div>
</div>
<button className="w-full mt-4 bg-zinc-900 text-white rounded-xl py-3 text-sm font-light hover:bg-zinc-800 transition-colors" type="button">
                                Register
                            </button>
</form>
</div>

<div className="p-8 bg-zinc-50/30">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium tracking-tight text-zinc-800">Security Verification</h2>
<span className="text-xs font-light text-[#d4a017] bg-[#d4a017]/10 px-2 py-1 rounded-md">Action Required</span>
</div>
<p className="text-xs font-light text-zinc-500 mb-4">Enter the 5-digit shortcode sent to your registered email to authorize access.</p>
<div className="flex gap-2 justify-between max-w-[280px]">
<input className="w-12 h-14 bg-white border border-zinc-200 rounded-xl text-center text-lg font-medium focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017] transition-all shadow-sm" maxlength="1" type="text"/>
<input className="w-12 h-14 bg-white border border-zinc-200 rounded-xl text-center text-lg font-medium focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017] transition-all shadow-sm" maxlength="1" type="text"/>
<input className="w-12 h-14 bg-white border border-zinc-200 rounded-xl text-center text-lg font-medium focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017] transition-all shadow-sm" maxlength="1" type="text"/>
<input className="w-12 h-14 bg-white border border-zinc-200 rounded-xl text-center text-lg font-medium focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017] transition-all shadow-sm" maxlength="1" type="text"/>
<input className="w-12 h-14 bg-white border border-zinc-200 rounded-xl text-center text-lg font-medium focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017] transition-all shadow-sm" maxlength="1" type="text"/>
</div>
<button className="text-xs font-light text-zinc-400 mt-4 hover:text-zinc-600 transition-colors">Resend code</button>
</div>
</div>
</div>
</section>

<section className="space-y-8" id="invest">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Structured Investments</h2>
<p className="text-sm font-light text-zinc-500 mt-1">Algorithmic yield generation across multiple risk profiles.</p>
</div>
<a className="text-sm font-light text-[#d4a017] hover:text-[#b88a14] transition-colors flex items-center gap-1" href="#">
                    View performance <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative p-6 bg-white border border-zinc-100 rounded-2xl hover:border-[#d4a017]/30 hover:shadow-lg hover:shadow-[#d4a017]/5 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-[#d4a017] group-hover:bg-[#d4a017]/10 transition-colors">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900">Genesis Plan</h3>
<div className="mt-2 mb-4">
<span className="text-2xl font-medium tracking-tight text-[#d4a017]">4.5%</span>
<span className="text-xs font-light text-zinc-500">APY</span>
</div>
<ul className="space-y-2 mb-6">
<li className="text-xs font-light text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Min. $500 Deposit
                        </li>
<li className="text-xs font-light text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> 30-day lock period
                        </li>
</ul>
<button className="w-full py-2 px-4 rounded-lg border border-zinc-100 text-sm font-light text-zinc-600 group-hover:border-[#d4a017]/20 group-hover:bg-[#d4a017]/5 transition-colors">Select Plan</button>
</div>

<div className="group relative p-6 bg-white border border-zinc-100 rounded-2xl hover:border-[#d4a017]/30 hover:shadow-lg hover:shadow-[#d4a017]/5 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-[#d4a017] group-hover:bg-[#d4a017]/10 transition-colors">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900">Momentum</h3>
<div className="mt-2 mb-4">
<span className="text-2xl font-medium tracking-tight text-[#d4a017]">8.2%</span>
<span className="text-xs font-light text-zinc-500">APY</span>
</div>
<ul className="space-y-2 mb-6">
<li className="text-xs font-light text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Min. $5,000 Deposit
                        </li>
<li className="text-xs font-light text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> 90-day lock period
                        </li>
</ul>
<button className="w-full py-2 px-4 rounded-lg border border-zinc-100 text-sm font-light text-zinc-600 group-hover:border-[#d4a017]/20 group-hover:bg-[#d4a017]/5 transition-colors">Select Plan</button>
</div>

<div className="group relative p-6 bg-white border border-[#d4a017]/30 shadow-lg shadow-[#d4a017]/5 rounded-2xl transition-all duration-300">
<div className="absolute top-0 right-0 bg-[#d4a017] text-white text-[10px] uppercase tracking-wider font-medium px-3 py-1 rounded-bl-lg rounded-tr-xl">Popular</div>
<div className="w-10 h-10 rounded-full bg-[#d4a017]/10 flex items-center justify-center mb-4 text-[#d4a017]">
<iconify-icon className="text-xl" icon="solar:crown-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900">Quantum Pro</h3>
<div className="mt-2 mb-4">
<span className="text-2xl font-medium tracking-tight text-[#d4a017]">14.5%</span>
<span className="text-xs font-light text-zinc-500">APY</span>
</div>
<ul className="space-y-2 mb-6">
<li className="text-xs font-light text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-[#d4a017]" icon="solar:check-circle-linear"></iconify-icon> Min. $25,000 Deposit
                        </li>
<li className="text-xs font-light text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-[#d4a017]" icon="solar:check-circle-linear"></iconify-icon> 180-day lock period
                        </li>
</ul>
<button className="w-full py-2 px-4 rounded-lg bg-zinc-900 text-white text-sm font-light hover:bg-zinc-800 transition-colors">Select Plan</button>
</div>

<div className="group relative p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white">Institutional</h3>
<div className="mt-2 mb-4">
<span className="text-2xl font-medium tracking-tight text-white">22.0%</span>
<span className="text-xs font-light text-zinc-400">APY</span>
</div>
<ul className="space-y-2 mb-6">
<li className="text-xs font-light text-zinc-400 flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Min. $100,000 Deposit
                        </li>
<li className="text-xs font-light text-zinc-400 flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> 365-day lock period
                        </li>
</ul>
<button className="w-full py-2 px-4 rounded-lg border border-zinc-700 text-white text-sm font-light hover:bg-zinc-800 transition-colors">Contact Sales</button>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 gap-8">

<div className="p-6 sm:p-8 bg-white border border-zinc-100 rounded-2xl shadow-sm" id="exchange">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Fast Exchange</h2>
<iconify-icon className="text-xl text-zinc-400" icon="solar:transfer-horizontal-linear"></iconify-icon>
</div>
<div className="space-y-4 relative">

<div className="p-4 bg-zinc-50/80 rounded-xl border border-zinc-100/50 hover:border-zinc-200 transition-colors focus-within:border-[#d4a017]/30 focus-within:ring-1 focus-within:ring-[#d4a017]/10">
<label className="text-xs font-medium text-zinc-500 mb-1 block">You Pay</label>
<div className="flex items-center justify-between gap-4">
<input className="w-full bg-transparent text-2xl font-light text-zinc-900 focus:outline-none placeholder:text-zinc-300" placeholder="0.00" type="number" value="1.5"/>
<div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-zinc-100 shadow-sm shrink-0">
<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-medium">B</div>
<span className="text-sm font-medium">BTC</span>
<iconify-icon className="text-zinc-400 text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-zinc-100 rounded-full flex items-center justify-center text-zinc-400 hover:text-[#d4a017] cursor-pointer shadow-sm z-10 transition-colors">
<iconify-icon icon="solar:round-arrow-down-linear"></iconify-icon>
</div>

<div className="p-4 bg-zinc-50/80 rounded-xl border border-zinc-100/50 hover:border-zinc-200 transition-colors focus-within:border-[#d4a017]/30 focus-within:ring-1 focus-within:ring-[#d4a017]/10">
<label className="text-xs font-medium text-zinc-500 mb-1 block">You Receive</label>
<div className="flex items-center justify-between gap-4">
<input className="w-full bg-transparent text-2xl font-light text-zinc-900 focus:outline-none placeholder:text-zinc-300" placeholder="0.00" type="number" value="98450.20"/>
<div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-zinc-100 shadow-sm shrink-0">
<div className="w-5 h-5 rounded-full bg-[#26a17b]/10 text-[#26a17b] flex items-center justify-center text-[10px] font-medium">T</div>
<span className="text-sm font-medium">USDT</span>
<iconify-icon className="text-zinc-400 text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between text-xs font-light text-zinc-500 mb-6">
<span>1 BTC = 65,633.46 USDT</span>
<span>Fee: 0.1%</span>
</div>
<button className="w-full py-3.5 rounded-xl bg-zinc-900 text-white text-sm font-light hover:bg-zinc-800 transition-colors">
                    Preview Swap
                </button>
</div>

<div className="p-6 sm:p-8 bg-white border border-zinc-100 rounded-2xl shadow-sm" id="lend">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Crypto Lending</h2>
<iconify-icon className="text-xl text-zinc-400" icon="solar:safe-2-linear"></iconify-icon>
</div>
<div className="space-y-6">
<div>
<label className="text-xs font-medium text-zinc-500 mb-2 block">Collateral Asset</label>
<div className="flex gap-2">
<select className="w-1/3 bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-light focus:outline-none focus:border-[#d4a017]/30 transition-all">
<option>ETH</option>
<option>BTC</option>
</select>
<input className="w-2/3 bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-light focus:outline-none focus:border-[#d4a017]/30 transition-all placeholder:text-zinc-400" placeholder="Amount (e.g. 10)" type="number"/>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium text-zinc-500 mb-2">
<label>Loan to Value (LTV)</label>
<span className="text-[#d4a017]">50%</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-[#d4a017] w-1/2 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#d4a017] rounded-full shadow-sm translate-x-1.5 cursor-pointer"></div>
</div>
</div>
<div className="flex justify-between text-[10px] font-light text-zinc-400 mt-2">
<span>Safer</span>
<span>Riskier</span>
</div>
</div>
<div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
<label className="text-xs font-medium text-zinc-500 mb-1 block">Borrow Amount</label>
<div className="flex items-center gap-2">
<span className="text-xl font-light text-zinc-900">17,450.00</span>
<span className="text-sm font-medium text-zinc-500">USDC</span>
</div>
<div className="mt-3 pt-3 border-t border-zinc-200/60 flex justify-between text-xs font-light text-zinc-500">
<span>Interest Rate</span>
<span className="text-zinc-900 font-medium">3.5% APR</span>
</div>
</div>
<button className="w-full py-3.5 rounded-xl border border-zinc-200 text-zinc-900 text-sm font-light hover:bg-zinc-50 transition-colors">
                        Request Loan
                    </button>
</div>
</div>
</section>

<section className="space-y-8" id="funding">
<div className="max-w-2xl">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Fund Your Account</h2>
<p className="text-sm font-light text-zinc-500 mt-1">Send assets to the unique addresses below to credit your portfolio. Minimum deposit equivalents apply.</p>
</div>
<div className="grid md:grid-cols-2 gap-4">

<div className="flex items-center justify-between p-4 bg-white border border-zinc-100 rounded-xl hover:border-zinc-200 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-700">
<span className="font-medium text-sm">BTC</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Bitcoin</div>
<div className="text-xs text-zinc-400 font-mono mt-0.5 truncate max-w-[180px] sm:max-w-xs">1DEribmB5nTrYALcoyEgT7srX96PwgVQnS</div>
</div>
</div>
<button className="p-2 text-zinc-400 hover:text-[#d4a017] bg-zinc-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all" title="Copy Address">
<iconify-icon className="text-lg" icon="solar:copy-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-4 bg-white border border-zinc-100 rounded-xl hover:border-zinc-200 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-700">
<span className="font-medium text-sm">ETH</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Ethereum</div>
<div className="text-xs text-zinc-400 font-mono mt-0.5 truncate max-w-[180px] sm:max-w-xs">0x01c78d19a764d4e09f5f3134183e69f387ecb7d3</div>
</div>
</div>
<button className="p-2 text-zinc-400 hover:text-[#d4a017] bg-zinc-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon className="text-lg" icon="solar:copy-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-4 bg-white border border-zinc-100 rounded-xl hover:border-zinc-200 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-700">
<span className="font-medium text-[10px]">USDT</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Tether <span className="text-[10px] font-light text-zinc-400 ml-1 px-1.5 py-0.5 bg-zinc-100 rounded">ERC-20</span></div>
<div className="text-xs text-zinc-400 font-mono mt-0.5 truncate max-w-[180px] sm:max-w-xs">0x01c78d19a764d4e09f5f3134183e69f387ecb7d3</div>
</div>
</div>
<button className="p-2 text-zinc-400 hover:text-[#d4a017] bg-zinc-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon className="text-lg" icon="solar:copy-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-4 bg-white border border-zinc-100 rounded-xl hover:border-zinc-200 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-700">
<span className="font-medium text-sm">BNB</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Binance Coin</div>
<div className="text-xs text-zinc-400 font-mono mt-0.5 truncate max-w-[180px] sm:max-w-xs">bnb16xcmk4vv52kwjeq6muup0jsp29wcsqu20v8dxy</div>
</div>
</div>
<button className="p-2 text-zinc-400 hover:text-[#d4a017] bg-zinc-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon className="text-lg" icon="solar:copy-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-4 bg-white border border-zinc-100 rounded-xl hover:border-zinc-200 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-700">
<span className="font-medium text-sm">LTC</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Litecoin</div>
<div className="text-xs text-zinc-400 font-mono mt-0.5 truncate max-w-[180px] sm:max-w-xs">LZjkaAKMcw3Co4QXbio9jzdkNuRZCcyERD</div>
</div>
</div>
<button className="p-2 text-zinc-400 hover:text-[#d4a017] bg-zinc-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon className="text-lg" icon="solar:copy-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-4 bg-white border border-zinc-100 rounded-xl hover:border-zinc-200 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-700">
<span className="font-medium text-sm">TRX</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Tron</div>
<div className="text-xs text-zinc-400 font-mono mt-0.5 truncate max-w-[180px] sm:max-w-xs">TKtJUHtd6XGgj5JTZcoHUdNRpKAE2YfhSb</div>
</div>
</div>
<button className="p-2 text-zinc-400 hover:text-[#d4a017] bg-zinc-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon className="text-lg" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="space-y-8">
<div className="flex items-end justify-between border-b border-zinc-100 pb-4">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Market Intelligence</h2>
<a className="text-sm font-light text-zinc-500 hover:text-zinc-900 transition-colors" href="#">View all</a>
</div>
<div className="grid md:grid-cols-3 gap-8">
<article className="group cursor-pointer">
<div className="text-xs font-medium text-[#d4a017] mb-2 flex items-center gap-2">
<iconify-icon icon="solar:feed-linear"></iconify-icon> CoinDesk • 2h ago
                    </div>
<h3 className="text-base font-medium text-zinc-900 leading-snug group-hover:text-[#d4a017] transition-colors line-clamp-2">
                        Institutional Capital Flows Accelerate into Spot Bitcoin ETFs Following Market Correction
                    </h3>
<p className="text-sm font-light text-zinc-500 mt-2 line-clamp-2">
                        Recent SEC filings indicate a surge in institutional allocations, primarily driven by pension funds and legacy asset managers seeking uncorrelated returns.
                    </p>
</article>
<article className="group cursor-pointer">
<div className="text-xs font-medium text-[#d4a017] mb-2 flex items-center gap-2">
<iconify-icon icon="solar:feed-linear"></iconify-icon> Bloomberg Crypto • 5h ago
                    </div>
<h3 className="text-base font-medium text-zinc-900 leading-snug group-hover:text-[#d4a017] transition-colors line-clamp-2">
                        Ethereum Network Upgrade Significantly Reduces Layer 2 Transaction Costs
                    </h3>
<p className="text-sm font-light text-zinc-500 mt-2 line-clamp-2">
                        The successful deployment of EIP-4844 has resulted in a 90% reduction in gas fees across major rollup networks, paving the way for broader decentralized application adoption.
                    </p>
</article>
<article className="group cursor-pointer">
<div className="text-xs font-medium text-[#d4a017] mb-2 flex items-center gap-2">
<iconify-icon icon="solar:feed-linear"></iconify-icon> The Block • 12h ago
                    </div>
<h3 className="text-base font-medium text-zinc-900 leading-snug group-hover:text-[#d4a017] transition-colors line-clamp-2">
                        DeFi Lending Protocols See Record Total Value Locked as Yields Stabilize
                    </h3>
<p className="text-sm font-light text-zinc-500 mt-2 line-clamp-2">
                        Stablecoin yields in major lending markets have found equilibrium, attracting conservative capital back into the decentralized finance ecosystem after a volatile quarter.
                    </p>
</article>
</div>
</section>
</main>

<footer className="border-t border-zinc-100 bg-zinc-50/50 mt-16">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
<span className="text-xl font-medium tracking-tighter text-[#d4a017]">CVX</span>
</div>
<p className="text-xs font-light text-zinc-400">
                © 2024 CVX Digital Assets. All rights reserved.
            </p>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:shield-warning-linear"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
