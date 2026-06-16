import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const amountInput = document.getElementById('initial-amount');
            const yearsSlider = document.getElementById('years-slider');
            const yearsDisplay = document.getElementById('years-display');
            const yearsText = document.getElementById('years-text');
            const futureBalance = document.getElementById('future-balance');
            const totalProfit = document.getElementById('total-profit');
            const chartContainer = document.getElementById('chart-container');

            // Fixed APY as per request
            const APY = 0.226; 

            function formatCurrency(num) {
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);
            }

            function updateCalculator() {
                const P = parseFloat(amountInput.value) || 0;
                const t = parseInt(yearsSlider.value);

                // Update UI Texts
                yearsDisplay.textContent = t + (t === 1 ? ' Year' : ' Years');
                yearsText.textContent = t;

                // Compounding Formula: A = P * (1 + r)^t
                const A = P * Math.pow((1 + APY), t);
                const profit = A - P;

                futureBalance.textContent = formatCurrency(A);
                totalProfit.textContent = '+' + formatCurrency(profit) + ' Profit';

                // Regenerate Chart Bars
                chartContainer.innerHTML = '';
                
                // We create a visual curve. The chart scales its maximum height to the final year's value
                // so the growth is always visually maximized in the container.
                const numberOfBars = t;
                
                for (let i = 1; i <= t; i++) {
                    const val = P * Math.pow((1 + APY), i);
                    // Percentage of the final value (A)
                    const heightPercentage = (val / A) * 100;
                    
                    const bar = document.createElement('div');
                    // Style the bar with brand color and dynamic opacity for depth
                    bar.className = 'w-full rounded-t-sm transition-all duration-300 hover:opacity-100 relative group';
                    
                    // Create a slight gradient effect using opacity from left to right
                    const opacity = 0.4 + (0.6 * (i / t));
                    bar.style.backgroundColor = `rgba(71, 77, 239, ${opacity})`;
                    bar.style.height = `${heightPercentage}%`;
                    
                    // Simple tooltip logic via title for accessibility/hover
                    bar.title = `Year ${i}: ${formatCurrency(val)}`;
                    
                    chartContainer.appendChild(bar);
                }
            }

            // Event Listeners
            amountInput.addEventListener('input', updateCalculator);
            yearsSlider.addEventListener('input', updateCalculator);

            // Initialize
            updateCalculator();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<span className="w-6 h-6 bg-[#474DEF] rounded-full flex items-center justify-center text-white text-[10px] font-bold">D</span>
                Deploy
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-[#474DEF] transition-colors" href="#">Docs</a>
<a className="hover:text-[#474DEF] transition-colors" href="#">Blog</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#474DEF] transition-colors" href="#">
                    Contact Us
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#474DEF]/10 to-transparent rounded-full blur-3xl opacity-50"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium text-[#474DEF] mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#474DEF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#474DEF]"></span>
</span>
                Live on Mainnet
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Turn Perps Motion into <br className="hidden md:block"/> <span className="text-[#474DEF]">Productive Capital</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Building the next generation of income-generating base assets, powered by the only scalable decentralized delta-neutral yield engine.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#474DEF] text-white font-medium rounded-lg hover:bg-[#363BB5] transition-all shadow-lg shadow-[#474DEF]/20 flex items-center justify-center gap-2 group" href="#">
<span className="iconify" data-icon="lucide:send" data-width="18"></span>
                    Register Interest
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#">
                    Partner With Us
                </a>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-slate-200/50 border-x border-slate-200/50">
<div className="py-6 px-4 text-center lg:text-left">
<div className="text-xs font-medium text-slate-400 mb-1">Avg APY (12m)</div>
<div className="text-2xl font-medium tracking-tight text-[#474DEF]">22.6%</div>
</div>
<div className="py-6 px-4 text-center lg:text-left">
<div className="text-xs font-medium text-slate-400 mb-1">Sharpe Ratio</div>
<div className="text-2xl font-medium tracking-tight text-slate-900">6.1</div>
</div>
<div className="py-6 px-4 text-center lg:text-left">
<div className="text-xs font-medium text-slate-400 mb-1">Real Yield Paid</div>
<div className="text-2xl font-medium tracking-tight text-slate-900">$1.6M</div>
</div>
<div className="py-6 px-4 text-center lg:text-left">
<div className="text-xs font-medium text-slate-400 mb-1">Executed Vol</div>
<div className="text-2xl font-medium tracking-tight text-slate-900">200M+</div>
</div>
<div className="py-6 px-4 text-center lg:text-left">
<div className="text-xs font-medium text-slate-400 mb-1">Perp DEX Growth</div>
<div className="text-2xl font-medium tracking-tight text-slate-900">+100%</div>
</div>
<div className="py-6 px-4 text-center lg:text-left">
<div className="text-xs font-medium text-slate-400 mb-1">Loss Events</div>
<div className="text-2xl font-medium tracking-tight text-slate-900">0</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="why-now">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/50 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-6">
                        Why Now
                    </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
                        Perpetual markets are exploding in popularity.
                    </h2>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-6">
                        And they are about to break out of crypto. No one is capturing the structural returns embedded in their motion. Deploy exists for this moment.
                    </p>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-6">
                        We transform perpetual market funding rates into sustainable, attractive yield for all.
                    </p>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                        As global fintechs and brokerages embed perps into consumer apps, open interest expands and multiplies the basis trade that powers Deploy.
                    </p>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#474DEF]/20 to-transparent rounded-2xl blur-2xl transform rotate-3 scale-95 opacity-50"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-xl shadow-slate-200/50">
<div className="mb-8">
<h3 className="text-xl font-medium text-slate-900 mb-2">Quant Execution at Scale</h3>
<p className="text-sm text-slate-500 leading-relaxed">As quantitative traders, we deliver stable, repeatable carry rather than directional speculation.</p>
</div>
<div className="grid gap-4">
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#474DEF]/30 transition-colors">
<div className="flex items-center gap-3 mb-2">
<span className="iconify text-[#474DEF]" data-icon="lucide:globe" data-width="18"></span>
<h4 className="font-medium text-slate-900 text-sm">Market-Wide Capture</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed">Cross-venue, neutral carry program harvesting structural funding spreads from Hyperliquid and beyond.</p>
</div>
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#474DEF]/30 transition-colors">
<div className="flex items-center gap-3 mb-2">
<span className="iconify text-[#474DEF]" data-icon="lucide:bar-chart-2" data-width="18"></span>
<h4 className="font-medium text-slate-900 text-sm">Sharpe 6.1 Profile</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed">Live strategy delivering institutional-grade returns. Stable, repeatable carry.</p>
</div>
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#474DEF]/30 transition-colors">
<div className="flex items-center gap-3 mb-2">
<span className="iconify text-[#474DEF]" data-icon="lucide:key" data-width="18"></span>
<h4 className="font-medium text-slate-900 text-sm">Zero Custody</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed">Your keys stay with you. Our execution layer manages hedging without taking possession.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="calculator">
<div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -z-10"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12 md:text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#474DEF]/10 border border-[#474DEF]/20 text-xs font-medium text-[#474DEF] mb-6">
<span className="iconify" data-icon="lucide:calculator" data-width="14"></span>
                    Yield Simulator
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">Compounding Power</h2>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                    Visualize how the structural edge of 22.6% APY transforms your capital over time compared to traditional assets.
                </p>
</div>

<div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden max-w-5xl mx-auto">
<div className="grid lg:grid-cols-2">

<div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between">
<div className="space-y-8">
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Initial Deposit</label>
<div className="relative group">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-light text-xl group-focus-within:text-[#474DEF] transition-colors">$</span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-10 pr-4 text-2xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#474DEF]/20 focus:border-[#474DEF] transition-all placeholder:text-slate-300" id="initial-amount" placeholder="0" type="number" value="10000"/>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-4">
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Time Horizon</label>
<span className="text-xl font-medium text-[#474DEF] tabular-nums" id="years-display">10 Years</span>
</div>
<input className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#474DEF] hover:accent-[#363BB5] transition-all" id="years-slider" max="30" min="1" step="1" type="range" value="10"/>
<div className="flex justify-between text-xs text-slate-400 mt-3 font-medium px-1">
<span>1 Year</span>
<span>30 Years</span>
</div>
</div>
</div>
<div className="mt-8 p-5 rounded-2xl bg-[#474DEF]/5 border border-[#474DEF]/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#474DEF]/10 flex items-center justify-center text-[#474DEF]">
<span className="iconify" data-icon="lucide:percent" data-width="20"></span>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Historical APY</div>
<div className="text-xs text-slate-500">Based on 12m average</div>
</div>
</div>
<div className="text-2xl font-bold tracking-tight text-[#474DEF]">22.6%</div>
</div>
</div>

<div className="bg-slate-50/50 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#474DEF 1px, transparent 1px), linear-gradient(90deg, #474DEF 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 mb-8">
<div className="text-sm font-medium text-slate-500 mb-2">Future Balance</div>
<div className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-3 tabular-nums" id="future-balance">$76,824</div>
<div className="flex items-center gap-2 text-sm">
<span className="text-[#474DEF] font-medium bg-[#474DEF]/10 px-2 py-0.5 rounded text-xs tabular-nums" id="total-profit">+$66,824 Profit</span>
<span className="text-slate-400">in <span id="years-text">10</span> years</span>
</div>
</div>

<div className="h-48 flex items-end justify-between gap-1 relative z-10" id="chart-container">

</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100 border-t border-slate-100 bg-white">
<div className="p-6 text-center group hover:bg-slate-50 transition-colors">
<div className="text-[10px] font-bold uppercase tracking-widest text-[#474DEF] mb-1">Deploy</div>
<div className="text-xl font-semibold tracking-tight text-slate-900">22.6%</div>
</div>
<div className="p-6 text-center group hover:bg-slate-50 transition-colors">
<div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">S&amp;P 500</div>
<div className="text-xl font-semibold tracking-tight text-slate-500">10.5%</div>
</div>
<div className="p-6 text-center group hover:bg-slate-50 transition-colors">
<div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Real Estate</div>
<div className="text-xl font-semibold tracking-tight text-slate-500">4.2%</div>
</div>
<div className="p-6 text-center group hover:bg-slate-50 transition-colors">
<div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Savings</div>
<div className="text-xl font-semibold tracking-tight text-slate-500">0.5%</div>
</div>
</div>
</div>
<div className="mt-6 text-center">
<p className="text-xs text-slate-400 font-light max-w-2xl mx-auto">
                    *Projections are hypothetical based on historical 12-month average APY of 22.6%. Past performance is not indicative of future results. Rates for traditional assets based on 20-year historical averages.
                </p>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-slate-50/30 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 mb-6 text-center">
<p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Trusted by Industry Leaders</p>
</div>
<div className="marquee-container relative w-full overflow-hidden">
<div className="marquee-content flex gap-16 w-max items-center whitespace-nowrap">

<span className="text-xl font-bold tracking-tighter text-slate-300">LLOYDS BANK*</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">HALBORN</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">FORDEFI</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">QUILL</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">PAXOS</span>

<span className="text-xl font-bold tracking-tighter text-slate-300">LLOYDS BANK*</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">HALBORN</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">FORDEFI</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">QUILL</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">PAXOS</span>

<span className="text-xl font-bold tracking-tighter text-slate-300">LLOYDS BANK*</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">HALBORN</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">FORDEFI</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">QUILL</span>
<span className="text-xl font-bold tracking-tighter text-slate-300">PAXOS</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="dusd">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16">
<div>
<h2 className="text-sm font-semibold tracking-wider text-[#474DEF] uppercase mb-3">Coming Soon</h2>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4">
                        dUSD: A Productive Dollar
                    </h3>
<p className="text-slate-500 mt-2 max-w-xl text-lg font-light">
                        Our first product, dUSD, has achieved <span className="font-semibold text-slate-700">22.6% average APY</span> at size during the 6-month beta, with a max drawdown of just 2%.
                    </p>
</div>
<div className="text-right flex flex-col items-end gap-3">
<p className="text-sm text-slate-400">Rolling out in coming months to select users</p>
<div className="flex gap-3">
<button className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#474DEF] transition-colors flex items-center gap-2">
                            Notify me
                            <span className="iconify" data-icon="lucide:bell" data-width="14"></span>
</button>
<a className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2" href="#">
                            Join TG
                            <span className="iconify" data-icon="lucide:send" data-width="14"></span>
</a>
</div>
</div>
</div>

<div className="h-64 md:h-80 w-full flex items-end justify-between gap-1 md:gap-2 px-2">
<div className="w-full bg-[#474DEF] opacity-20 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-[#474DEF] opacity-30 h-[48%] rounded-t-sm"></div>
<div className="w-full bg-[#474DEF] opacity-25 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-[#474DEF] opacity-40 h-[55%] rounded-t-sm"></div>
<div className="w-full bg-[#474DEF] opacity-30 h-[52%] rounded-t-sm"></div>
<div className="w-full bg-[#474DEF] opacity-50 h-[65%] rounded-t-sm"></div>
<div className="w-full bg-[#474DEF] opacity-40 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-[#474DEF] opacity-60 h-[75%] rounded-t-sm"></div>
<div className="w-full bg-[#474DEF] opacity-50 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-[#474DEF] opacity-80 h-[85%] rounded-t-sm"></div>
<div className="w-full bg-[#474DEF] opacity-70 h-[82%] rounded-t-sm"></div>
<div className="w-full bg-[#474DEF] opacity-100 h-[92%] rounded-t-sm shadow-[0_0_20px_rgba(71,77,239,0.3)]"></div>
</div>
<div className="flex justify-between mt-4 text-xs font-medium text-slate-400 uppercase tracking-wide">
<span>Beta Start</span>
<span>Current</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border-b border-slate-100 pb-4">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<span className="text-lg">What is Deploy?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 font-light">
                        A self-custodial execution engine that turns idle capital into productive base assets.
                    </p>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border-b border-slate-100 pb-4">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<span className="text-lg">What is dUSD?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 font-light">
                        A high-yield, productive dollar that earns through basis funding spreads.
                    </p>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border-b border-slate-100 pb-4">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<span className="text-lg">Where does yield come from?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 font-light">
                        dUSD earns by capturing perpetual funding spreads — a persistent, market-structural source of return, not dependent on token incentives or price direction.
                    </p>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border-b border-slate-100 pb-4">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<span className="text-lg">How do I know funds are safe?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 font-light">
                        No pooled custody. Positions remain user-owned, transparently observable on-chain.
                    </p>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border-b border-slate-100 pb-4">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<span className="text-lg">Who is the team?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 font-light">
                        Deploy is built by the ex-founding team of a quant fund managing over $100m in TVL, and ex-Lloyds Bank.
                    </p>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border-b border-slate-100 pb-4">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<span className="text-lg">What makes this robust?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 font-light">
                        Live since 2018. Survived every major volatility cycle with consistent performance.
                    </p>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border-b border-slate-100 pb-4">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<span className="text-lg">Is dUSD audited?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 font-light">
                        Yes — Halborn. Additional audit partners in progress.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[#474DEF] -z-10"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
<div className="max-w-4xl mx-auto px-6 text-center text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-indigo-100 mb-8">
                Build With Us
            </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                Envisioning a future of <br/> tokenized strategies
            </h2>
<p className="text-lg md:text-xl text-indigo-100 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                We envision a future where fintechs around the world become major distributors of institutional-grade products directly to global consumers. If you agree, get in touch.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto bg-white text-[#474DEF] font-medium px-8 py-3.5 rounded-lg hover:bg-indigo-50 transition-colors shadow-xl" href="#">
                    Get in touch
                </a>
</div>
<div className="border-t border-white/20 pt-8">
<p className="text-xs uppercase tracking-widest text-indigo-200 mb-6">Audited By</p>
<div className="flex justify-center gap-12 text-white/80">
<span className="text-lg font-bold tracking-tighter">HALBORN</span>
<span className="text-lg font-bold tracking-tighter">QUILL</span>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-4" href="#">
<span className="w-5 h-5 bg-[#474DEF] rounded-full flex items-center justify-center text-white text-[9px] font-bold">D</span>
                        Deploy
                    </a>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        The timing is now: tokenization, regulatory clarity, and perpification are converging. The era of idle capital is over.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#474DEF]" href="#">dUSD</a></li>
<li><a className="hover:text-[#474DEF]" href="#">Yield Sources</a></li>
<li><a className="hover:text-[#474DEF]" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#474DEF]" href="#">About Us</a></li>
<li><a className="hover:text-[#474DEF]" href="#">Blog</a></li>
<li><a className="hover:text-[#474DEF]" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Social</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#474DEF]" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-[#474DEF]" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-[#474DEF]" href="#">
<span className="iconify" data-icon="lucide:github" data-width="20"></span>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-light">
<p>© 2024 Deploy Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
