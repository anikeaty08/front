import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const planBtns = document.querySelectorAll('.plan-btn');
        planBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                planBtns.forEach(b => {
                    if (b.dataset.type === 'primary') {
                        b.className = 'plan-btn w-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg py-2 transition-all duration-200';
                        b.innerHTML = 'Select Plan';
                    } else {
                        b.className = 'plan-btn w-full border border-slate-300 hover:bg-slate-50 text-slate-900 text-sm rounded-lg py-2 transition-all duration-200';
                        b.innerHTML = 'Select Plan';
                    }
                });
                
                const target = e.currentTarget;
                target.className = 'plan-btn w-full bg-emerald-500 text-white border border-transparent text-sm font-medium rounded-lg py-2 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm';
                target.innerHTML = '<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Selected';
            });
        });

        const swapPayInput = document.getElementById('swap-pay');
        const swapReceiveInput = document.getElementById('swap-receive');
        const swapSlippageSelect = document.getElementById('swap-slippage');
        const swapMinReceive = document.getElementById('swap-min-receive');
        const swapRate = document.getElementById('swap-rate');
        const swapUpdated = document.getElementById('swap-updated');
        const swapStatus = document.getElementById('swap-status');

        let exchangeRate = null;

        function formatTime(date) {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }

        function calculateSwap() {
            const payAmount = parseFloat(swapPayInput.value) || 0;
            const slippage = parseFloat(swapSlippageSelect.value);

            if (!exchangeRate) {
                swapReceiveInput.value = '';
                swapMinReceive.innerHTML = '';
                return;
            }
            
            const receiveAmount = payAmount * exchangeRate;
            swapReceiveInput.value = receiveAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            
            const minReceiveAmount = receiveAmount * (1 - slippage);
            if (payAmount > 0) {
                swapMinReceive.innerHTML = `Min Received: ${minReceiveAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT`;
            } else {
                swapMinReceive.innerHTML = '';
            }
        }

        async function fetchLiveRate() {
            swapStatus.textContent = 'Fetching market price...';
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                if (!response.ok) throw new Error('Rate request failed');
                const data = await response.json();
                if (!data.bitcoin || !data.bitcoin.usd) throw new Error('Invalid rate data');

                exchangeRate = Number(data.bitcoin.usd);
                swapRate.textContent = `1 BTC = ${exchangeRate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT`;
                swapUpdated.textContent = `Updated ${formatTime(new Date())}`;
                swapStatus.textContent = 'Live market data';
                calculateSwap();
            } catch (error) {
                swapStatus.textContent = 'Live rate unavailable';
                if (!exchangeRate) {
                    swapRate.textContent = 'Unable to load live rate';
                    swapUpdated.textContent = '';
                    swapReceiveInput.value = '';
                    swapMinReceive.innerHTML = '';
                }
            }
        }

        swapPayInput.addEventListener('input', calculateSwap);
        swapSlippageSelect.addEventListener('change', calculateSwap);

        fetchLiveRate();
        setInterval(fetchLiveRate, 30000);

        const tabSupply = document.getElementById('tab-supply');
        const tabBorrow = document.getElementById('tab-borrow');
        const contentSupply = document.getElementById('content-supply');
        const contentBorrow = document.getElementById('content-borrow');
        const liquidityTotalLabel = document.getElementById('liquidity-total-label');

        tabSupply.addEventListener('click', () => {
            tabSupply.className = 'flex-1 text-sm text-slate-900 bg-white border border-slate-200/50 rounded-md py-1.5 font-medium shadow-sm transition-all duration-200';
            tabBorrow.className = 'flex-1 text-sm text-slate-500 hover:text-slate-900 py-1.5 transition-all duration-200 border border-transparent';
            contentSupply.classList.remove('hidden');
            contentSupply.classList.add('block');
            contentBorrow.classList.remove('block');
            contentBorrow.classList.add('hidden');
            liquidityTotalLabel.textContent = 'Total Supplied';
        });

        tabBorrow.addEventListener('click', () => {
            tabBorrow.className = 'flex-1 text-sm text-slate-900 bg-white border border-slate-200/50 rounded-md py-1.5 font-medium shadow-sm transition-all duration-200';
            tabSupply.className = 'flex-1 text-sm text-slate-500 hover:text-slate-900 py-1.5 transition-all duration-200 border border-transparent';
            contentBorrow.classList.remove('hidden');
            contentBorrow.classList.add('block');
            contentSupply.classList.remove('block');
            contentSupply.classList.add('hidden');
            liquidityTotalLabel.textContent = 'Total Borrowed';
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="sticky top-0 z-50 w-full border-b border-indigo-200/50 bg-[#fdfaf0]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-indigo-900 text-lg tracking-tighter font-medium flex items-center gap-2" href="#">
<iconify-icon className="text-blue-500" icon="solar:box-minimalistic-linear"></iconify-icon>
                    CRYPTOVX
                </a>
<div className="hidden md:flex items-center gap-6 text-sm">
<a className="hover:text-indigo-900 transition-colors" href="#plans">Plans</a>
<a className="hover:text-indigo-900 transition-colors" href="#exchange">Exchange</a>
<a className="hover:text-indigo-900 transition-colors" href="#lend">Lend &amp; Borrow</a>
<a className="hover:text-indigo-900 transition-colors" href="#funding">Funding</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm hover:text-indigo-900 transition-colors" href="#">Log in</a>
</div>
</div>
</nav>
<main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-32">
<section className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-700 text-xs font-medium">
<iconify-icon icon="solar:start-linear"></iconify-icon>
                    Next-Gen Crypto Wealth
                </div>
<h1 className="text-4xl md:text-5xl text-indigo-900 tracking-tight font-medium leading-tight">
                    Scale your digital assets with institutional precision.
                </h1>
<p className="text-base text-indigo-600 leading-relaxed max-w-md">
                    Access premium investment yields, seamless multi-chain exchange, and sophisticated lending protocols all from one unified interface.
                </p>
<div className="flex gap-4 pt-4">
<div className="flex flex-col gap-1">
<span className="text-2xl text-indigo-900 tracking-tight font-medium">$4.2B+</span>
<span className="text-xs uppercase tracking-widest text-indigo-500">Volume</span>
</div>
<div className="w-px h-12 bg-indigo-200"></div>
<div className="flex flex-col gap-1">
<span className="text-2xl text-indigo-900 tracking-tight font-medium">150k+</span>
<span className="text-xs uppercase tracking-widest text-indigo-500">Users</span>
</div>
</div>
</div>
<div className="bg-white/50 border border-indigo-200 rounded-2xl p-8 backdrop-blur-sm">
<h2 className="text-xl text-indigo-900 tracking-tight font-medium mb-6">Create your account</h2>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-indigo-600 pl-1">Username</label>
<input className="w-full bg-white border border-indigo-200 rounded-lg px-3 py-2.5 text-sm text-indigo-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-indigo-400" placeholder="johndoe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-indigo-600 pl-1">Email</label>
<input className="w-full bg-white border border-indigo-200 rounded-lg px-3 py-2.5 text-sm text-indigo-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-indigo-400" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-indigo-600 pl-1">Password</label>
<input className="w-full bg-white border border-indigo-200 rounded-lg px-3 py-2.5 text-sm text-indigo-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-indigo-400" placeholder="••••••••" type="password"/>
</div>
<div className="space-y-1.5 pt-2">
<label className="text-xs text-indigo-600 pl-1">Primary Withdrawal Address</label>
<div className="flex gap-2">
<select className="w-1/3 bg-white border border-indigo-200 rounded-lg px-3 py-2.5 pr-8 text-sm text-indigo-900 focus:outline-none focus:border-blue-500 transition-all">
<option>BTC</option>
<option>ETH</option>
<option>USDT</option>
</select>
<input className="w-2/3 bg-white border border-indigo-200 rounded-lg px-3 py-2.5 text-sm text-indigo-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-indigo-400" placeholder="Wallet Address" type="text"/>
</div>
</div>
<button className="w-full bg-indigo-900 text-white hover:bg-indigo-800 font-medium text-sm rounded-lg py-2.5 mt-4 transition-colors flex items-center justify-center gap-2" type="button">
                        Register Now
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</section>
<section className="space-y-12" id="plans">
<div className="text-center space-y-4">
<h2 className="text-3xl text-indigo-900 tracking-tight font-medium">Investment Strategies</h2>
<p className="text-sm max-w-xl mx-auto">Algorithmic trading and staking pools designed for consistent yield generation across market cycles.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group border border-indigo-200 bg-white/40 rounded-2xl p-6 hover:border-indigo-300 transition-all relative overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-5 transition-opacity pointer-events-none">
<iconify-icon className="text-6xl text-indigo-900" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="text-lg text-indigo-900 font-medium mb-1">Starter Pool</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl text-indigo-900 tracking-tight font-medium">1.5%</span>
<span className="text-xs text-indigo-500">/ daily</span>
</div>
<ul className="space-y-3 text-sm mb-8 text-indigo-600 flex-grow">
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Min Deposit: $100</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Max Deposit: $4,999</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Duration: 30 Days</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Principal Return: Yes</li>
</ul>
<button className="plan-btn w-full border border-indigo-300 hover:bg-indigo-50 text-indigo-900 text-sm rounded-lg py-2 transition-all duration-200" data-type="secondary">Select Plan</button>
</div>
<div className="group border border-blue-500/30 bg-blue-500/5 rounded-2xl p-6 relative overflow-hidden flex flex-col">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
<iconify-icon className="text-6xl text-blue-500" icon="solar:rocket-linear"></iconify-icon>
</div>
<div className="items-start flex mb-3">
<span className="inline-block px-2 py-0.5 bg-blue-500/10 text-blue-700 text-[10px] uppercase tracking-wider rounded">Most Popular</span>
</div>
<h3 className="text-lg text-indigo-900 font-medium mb-1">Advanced Yield</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl text-indigo-900 tracking-tight font-medium">2.2%</span>
<span className="text-xs text-indigo-500">/ daily</span>
</div>
<ul className="space-y-3 text-sm mb-8 text-indigo-600 flex-grow">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Min Deposit: $5,000</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Max Deposit: $19,999</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Duration: 45 Days</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Principal Return: Yes</li>
</ul>
<button className="plan-btn w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg py-2 transition-all duration-200" data-type="primary">Select Plan</button>
</div>
<div className="group border border-indigo-200 bg-white/40 rounded-2xl p-6 hover:border-indigo-300 transition-all relative overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-5 transition-opacity pointer-events-none">
<iconify-icon className="text-6xl text-indigo-900" icon="solar:crown-star-linear"></iconify-icon>
</div>
<h3 className="text-lg text-indigo-900 font-medium mb-1">Institutional</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl text-indigo-900 tracking-tight font-medium">3.5%</span>
<span className="text-xs text-indigo-500">/ daily</span>
</div>
<ul className="space-y-3 text-sm mb-8 text-indigo-600 flex-grow">
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Min Deposit: $20,000</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Max Deposit: Unlimited</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Duration: 60 Days</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Principal Return: Yes</li>
</ul>
<button className="plan-btn w-full border border-indigo-300 hover:bg-indigo-50 text-indigo-900 text-sm rounded-lg py-2 transition-all duration-200" data-type="secondary">Select Plan</button>
</div>
</div>
</section>
<section className="grid md:grid-cols-2 gap-8">
<div className="border border-indigo-200 bg-white/40 rounded-2xl p-8" id="exchange">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl text-indigo-900 tracking-tight font-medium flex items-center gap-2">
<iconify-icon icon="solar:transfer-horizontal-linear"></iconify-icon> Quick Swap
                    </h2>
<div className="flex items-center gap-2 bg-white/80 border border-indigo-200 px-2 py-1 rounded-lg">
<span className="text-xs text-indigo-500">Slippage:</span>
<select className="text-xs text-indigo-900 bg-transparent outline-none cursor-pointer pr-6 font-medium" id="swap-slippage">
<option value="0.001">0.1%</option>
<option selected="" value="0.005">0.5%</option>
<option value="0.01">1.0%</option>
<option value="0.02">2.0%</option>
</select>
</div>
</div>
<div className="space-y-2 relative">
<div className="bg-white border border-indigo-200 rounded-xl p-4 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
<label className="text-xs text-indigo-500 block mb-2">You Pay</label>
<div className="flex items-center justify-between">
<input className="bg-transparent text-2xl text-indigo-900 outline-none w-1/2" id="swap-pay" step="0.01" type="number" value="1.5"/>
<div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-indigo-100 transition-colors">
<span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-medium">B</span>
<span className="text-sm text-indigo-900 font-medium">BTC</span>
<iconify-icon className="text-indigo-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="text-xs text-indigo-500 mt-2">Balance: 2.45 BTC</div>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-[#fdfaf0] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-indigo-50 transition-colors z-10 shadow-sm">
<iconify-icon className="text-indigo-900" icon="solar:arrow-down-up-linear"></iconify-icon>
</div>
<div className="bg-white border border-indigo-200 rounded-xl p-4 shadow-sm">
<label className="text-xs text-indigo-500 block mb-2">You Receive</label>
<div className="flex items-center justify-between">
<input className="bg-transparent text-2xl text-indigo-900 outline-none w-1/2" id="swap-receive" readonly="" type="text"/>
<div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-indigo-100 transition-colors">
<span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white font-medium">T</span>
<span className="text-sm text-indigo-900 font-medium">USDT</span>
<iconify-icon className="text-indigo-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between mt-2 gap-4">
<div className="text-xs text-indigo-500" id="swap-rate">Loading live rate...</div>
<div className="text-xs text-cyan-600 font-medium" id="swap-min-receive"></div>
</div>
<div className="flex items-center justify-between mt-2 gap-4">
<div className="text-xs text-indigo-400" id="swap-updated"></div>
<div className="text-xs text-indigo-400" id="swap-status"></div>
</div>
</div>
</div>
<button className="w-full bg-indigo-900 text-white font-medium text-sm rounded-lg py-3 mt-6 hover:bg-indigo-800 transition-colors">Swap Assets</button>
</div>
<div className="border border-indigo-200 bg-white/40 rounded-2xl p-8 flex flex-col" id="lend">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl text-indigo-900 tracking-tight font-medium flex items-center gap-2">
<iconify-icon icon="solar:safe-2-linear"></iconify-icon> Liquidity Markets
                    </h2>
</div>
<div className="flex p-1 bg-indigo-100/50 rounded-lg mb-6 border border-indigo-200">
<button className="flex-1 text-sm text-indigo-900 bg-white border border-indigo-200/50 rounded-md py-1.5 font-medium shadow-sm transition-all duration-200" id="tab-supply">Supply</button>
<button className="flex-1 text-sm text-indigo-500 hover:text-indigo-900 py-1.5 transition-all duration-200 border border-transparent" id="tab-borrow">Borrow</button>
</div>
<div className="space-y-4 flex-grow block" id="content-supply">
<div className="flex justify-between items-center p-4 border border-indigo-200 rounded-xl bg-white hover:border-indigo-300 transition-colors cursor-pointer shadow-sm">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 font-medium">E</span>
<div>
<div className="text-sm text-indigo-900 font-medium">Ethereum</div>
<div className="text-xs text-indigo-500">ETH</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-cyan-600 font-medium">4.2% APY</div>
<div className="text-xs text-indigo-500">Supply Rate</div>
</div>
</div>
<div className="flex justify-between items-center p-4 border border-indigo-200 rounded-xl bg-white hover:border-indigo-300 transition-colors cursor-pointer shadow-sm">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 font-medium">U</span>
<div>
<div className="text-sm text-indigo-900 font-medium">Tether</div>
<div className="text-xs text-indigo-500">USDT</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-cyan-600 font-medium">8.5% APY</div>
<div className="text-xs text-indigo-500">Supply Rate</div>
</div>
</div>
</div>
<div className="space-y-4 flex-grow hidden" id="content-borrow">
<div className="flex justify-between items-center p-4 border border-indigo-200 rounded-xl bg-white hover:border-indigo-300 transition-colors cursor-pointer shadow-sm">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-600 font-medium">B</span>
<div>
<div className="text-sm text-indigo-900 font-medium">Bitcoin</div>
<div className="text-xs text-indigo-500">BTC</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-blue-600 font-medium">5.1% APY</div>
<div className="text-xs text-indigo-500">Borrow Rate</div>
</div>
</div>
<div className="flex justify-between items-center p-4 border border-indigo-200 rounded-xl bg-white hover:border-indigo-300 transition-colors cursor-pointer shadow-sm">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 font-medium">U</span>
<div>
<div className="text-sm text-indigo-900 font-medium">Tether</div>
<div className="text-xs text-indigo-500">USDT</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-blue-600 font-medium">9.8% APY</div>
<div className="text-xs text-indigo-500">Borrow Rate</div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-indigo-200 flex justify-between items-center">
<div>
<div className="text-xs text-indigo-500 mb-1" id="liquidity-total-label">Total Supplied</div>
<div className="text-lg text-indigo-900 font-medium">$0.00</div>
</div>
<button className="border border-indigo-300 hover:bg-indigo-50 text-indigo-900 text-sm px-4 py-2 rounded-lg transition-colors shadow-sm">Manage Positions</button>
</div>
</div>
</section>
<section className="space-y-8" id="funding">
<div className="flex items-center justify-between border-b border-indigo-200 pb-4">
<h2 className="text-2xl text-indigo-900 tracking-tight font-medium flex items-center gap-2">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> Official Deposit Addresses
                </h2>
<span className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-600 rounded border border-cyan-500/20">Verify before sending</span>
</div>
<p className="text-sm text-indigo-600 max-w-3xl">
                To fund your account and activate investment plans, please remit your funds solely to the cryptographic addresses listed below. Do not send unsupported networks.
            </p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-white/40 border border-indigo-200 rounded-xl p-5 flex flex-col justify-between group hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-600 text-xs font-medium">B</span>
<span className="text-sm text-indigo-900 font-medium">Bitcoin (BTC)</span>
</div>
<div className="bg-white p-3 rounded-lg flex items-center justify-between border border-indigo-200 group-hover:border-indigo-300 transition-colors shadow-sm">
<code className="text-xs text-indigo-700 font-mono truncate mr-2">1DEribmB5nTrYALcoyEgT7srX96PwgVQnS</code>
<button className="text-indigo-400 hover:text-indigo-900 transition-colors" title="Copy Address">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="bg-white/40 border border-indigo-200 rounded-xl p-5 flex flex-col justify-between group hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 text-xs font-medium">E</span>
<span className="text-sm text-indigo-900 font-medium">Ethereum (ETH)</span>
</div>
<div className="bg-white p-3 rounded-lg flex items-center justify-between border border-indigo-200 group-hover:border-indigo-300 transition-colors shadow-sm">
<code className="text-xs text-indigo-700 font-mono truncate mr-2">0x01c78d19a764d4e09f5f3134183e69f387ecb7d3</code>
<button className="text-indigo-400 hover:text-indigo-900 transition-colors" title="Copy Address">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="bg-white/40 border border-indigo-200 rounded-xl p-5 flex flex-col justify-between group hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-xs font-medium">T</span>
<span className="text-sm text-indigo-900 font-medium">USDT (ERC-20)</span>
</div>
<div className="bg-white p-3 rounded-lg flex items-center justify-between border border-indigo-200 group-hover:border-indigo-300 transition-colors shadow-sm">
<code className="text-xs text-indigo-700 font-mono truncate mr-2">0x01c78d19a764d4e09f5f3134183e69f387ecb7d3</code>
<button className="text-indigo-400 hover:text-indigo-900 transition-colors" title="Copy Address">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="bg-white/40 border border-indigo-200 rounded-xl p-5 flex flex-col justify-between group hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-600 text-xs font-medium">B</span>
<span className="text-sm text-indigo-900 font-medium">Binance Coin (BNB)</span>
</div>
<div className="bg-white p-3 rounded-lg flex items-center justify-between border border-indigo-200 group-hover:border-indigo-300 transition-colors shadow-sm">
<code className="text-xs text-indigo-700 font-mono truncate mr-2">bnb16xcmk4vv52kwjeq6muup0jsp29wcsqu20v8dxy</code>
<button className="text-indigo-400 hover:text-indigo-900 transition-colors" title="Copy Address">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="bg-white/40 border border-indigo-200 rounded-xl p-5 flex flex-col justify-between group hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-6 rounded-full bg-indigo-400/10 flex items-center justify-center text-indigo-500 text-xs font-medium">L</span>
<span className="text-sm text-indigo-900 font-medium">Litecoin (LTC)</span>
</div>
<div className="bg-white p-3 rounded-lg flex items-center justify-between border border-indigo-200 group-hover:border-indigo-300 transition-colors shadow-sm">
<code className="text-xs text-indigo-700 font-mono truncate mr-2">LZjkaAKMcw3Co4QXbio9jzdkNuRZCcyERD</code>
<button className="text-indigo-400 hover:text-indigo-900 transition-colors" title="Copy Address">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="bg-white/40 border border-indigo-200 rounded-xl p-5 flex flex-col justify-between group hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-600 text-xs font-medium">T</span>
<span className="text-sm text-indigo-900 font-medium">Tron (TRX)</span>
</div>
<div className="bg-white p-3 rounded-lg flex items-center justify-between border border-indigo-200 group-hover:border-indigo-300 transition-colors shadow-sm">
<code className="text-xs text-indigo-700 font-mono truncate mr-2">TKtJUHtd6XGgj5JTZcoHUdNRpKAE2YfhSb</code>
<button className="text-indigo-400 hover:text-indigo-900 transition-colors" title="Copy Address">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-indigo-200 mt-12 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-indigo-900 text-lg tracking-tighter font-medium flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:box-minimalistic-linear"></iconify-icon>
                CRYPTOVX
            </div>
<div className="text-xs text-indigo-500">
                © 2024 CryptoVX Protocol. All rights reserved. Secure environment.
            </div>
</div>
</footer>


    </>
  );
}
