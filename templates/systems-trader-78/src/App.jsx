import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<main className="bg-[#f4f4f5] max-w-3xl w-full border border-zinc-400 shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-sm p-6 md:p-12 flex flex-col gap-12 relative">

<div className="absolute top-0 left-0 w-full h-[1px] bg-white opacity-50"></div>

<header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-300 pb-4">
<div className="font-medium text-xl tracking-tight uppercase tracking-widest flex items-center gap-2">
<span className="w-3 h-3 bg-zinc-900 inline-block"></span>
                M.V.
            </div>
<div className="flex items-center gap-3 text-xs text-zinc-600 font-mono bg-zinc-200/50 px-2 py-1 rounded-sm border border-zinc-300">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>SYS.SYNCED: 09:30 EST</span>
</div>
</header>

<section className="flex flex-col gap-5">
<h1 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.15]">
                Exploiting market inefficiencies through systematic execution.
            </h1>
<p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                Independent proprietary trader focused on mean-reversion and momentum algorithms across liquid futures. Capital preservation above all else.
            </p>
</section>

<section className="flex flex-col gap-3">
<div className="flex justify-between items-end">
<h2 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Current State</h2>
<span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900 animate-pulse"></span> LIVE
                </span>
</div>
<div className="bg-zinc-400 grid grid-cols-2 md:grid-cols-4 gap-px border border-zinc-400">

<div className="bg-[#f4f4f5] p-4 flex flex-col gap-2">
<span className="text-xs text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon> Exposure
                    </span>
<span className="font-mono text-xl text-zinc-900 tracking-tight">42.5%</span>
</div>

<div className="bg-[#f4f4f5] p-4 flex flex-col gap-2">
<span className="text-xs text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
<iconify-icon icon="solar:sort-vertical-linear" strokeWidth="1.5"></iconify-icon> Bias
                    </span>
<span className="font-mono text-xl text-zinc-900 tracking-tight">SHORT</span>
</div>

<div className="bg-[#f4f4f5] p-4 flex flex-col gap-2">
<span className="text-xs text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon> Volatility
                    </span>
<span className="font-mono text-xl text-zinc-900 tracking-tight">HIGH</span>
</div>

<div className="bg-[#f4f4f5] p-4 flex flex-col gap-2">
<span className="text-xs text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon> Risk/Trade
                    </span>
<span className="font-mono text-xl text-zinc-900 tracking-tight">1.0R</span>
</div>
</div>
</section>

<section className="border border-zinc-300 p-4 md:p-6 bg-zinc-100/50 flex flex-col gap-4 rounded-sm">
<h2 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">Terminal Settings</h2>
<div className="flex items-center justify-between pb-4 border-b border-zinc-300 border-dashed">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-zinc-600" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Algorithmic Execution</span>
</div>

<div className="w-10 h-5 bg-zinc-900 rounded-full flex items-center p-1 cursor-pointer">
<div className="w-3.5 h-3.5 bg-zinc-50 rounded-full transform translate-x-4.5 transition-transform"></div>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-zinc-600" icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Alert Level</span>
</div>

<div className="border border-zinc-400 px-3 py-1.5 text-xs font-mono flex items-center gap-8 bg-[#f4f4f5] cursor-pointer">
<span>STRICT (ONLY A+)</span>
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</section>

<section className="flex flex-col gap-8">
<h2 className="text-2xl font-medium tracking-tight border-b border-zinc-900 pb-2 inline-block self-start">Core Directives</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
<div className="flex flex-col gap-3">
<h3 className="text-base font-semibold flex items-center gap-2 tracking-tight border-b border-zinc-300 pb-1">
                        Asymmetric Risk
                    </h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        Positions are structured to risk exactly 1R. Upside potential must mathematically exceed 3R based on historical backtesting to trigger entry parameters.
                    </p>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-base font-semibold flex items-center gap-2 tracking-tight border-b border-zinc-300 pb-1">
                        Mechanical Execution
                    </h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        Discretion is removed at the moment of entry. Algorithms manage stop-losses and trailing exits to prevent emotional interference and secure paper profits.
                    </p>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-base font-semibold flex items-center gap-2 tracking-tight border-b border-zinc-300 pb-1">
                        Volume Confirmation
                    </h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        Price action without volume is noise. Entries require institutional footprint verification via VWAP deviations and real-time order flow analysis.
                    </p>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-base font-semibold flex items-center gap-2 tracking-tight border-b border-zinc-300 pb-1">
                        Cash is a Position
                    </h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        When edge is absent, capital preservation takes precedence. Sitting on hands is an active, deliberate, and highly profitable long-term strategy.
                    </p>
</div>
</div>
</section>

<section className="flex flex-col gap-4">
<div className="flex justify-between items-end border-b border-zinc-300 pb-2">
<h2 className="text-xl font-medium tracking-tight">System Logs</h2>
<a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest flex items-center gap-1" href="#">
                    Archive <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="flex flex-col font-mono text-sm">

<a className="group flex flex-col md:flex-row md:items-center py-3 border-b border-zinc-200 border-dashed hover:bg-zinc-200/50 transition-colors" href="#">
<div className="w-32 text-zinc-500">2023.10.24</div>
<div className="flex-1 text-zinc-800 group-hover:text-black truncate pr-4">NQ Long: Mean Reversion on CPI Miss</div>
<div className="text-zinc-900 mt-2 md:mt-0 font-semibold text-right">+2.4R</div>
</a>

<a className="group flex flex-col md:flex-row md:items-center py-3 border-b border-zinc-200 border-dashed hover:bg-zinc-200/50 transition-colors" href="#">
<div className="w-32 text-zinc-500">2023.10.22</div>
<div className="flex-1 text-zinc-800 group-hover:text-black truncate pr-4">System Review: Adjusting Volatility Bands</div>
<div className="text-zinc-500 mt-2 md:mt-0 text-right">NOTE</div>
</a>

<a className="group flex flex-col md:flex-row md:items-center py-3 border-b border-zinc-200 border-dashed hover:bg-zinc-200/50 transition-colors" href="#">
<div className="w-32 text-zinc-500">2023.10.18</div>
<div className="flex-1 text-zinc-800 group-hover:text-black truncate pr-4">ES Short: Failed Breakout Structure</div>
<div className="text-zinc-500 mt-2 md:mt-0 text-right">-1.0R</div>
</a>

<a className="group flex flex-col md:flex-row md:items-center py-3 hover:bg-zinc-200/50 transition-colors" href="#">
<div className="w-32 text-zinc-500">2023.10.12</div>
<div className="flex-1 text-zinc-800 group-hover:text-black truncate pr-4">GC Long: Safe Haven Bid Validation</div>
<div className="text-zinc-900 mt-2 md:mt-0 font-semibold text-right">+1.8R</div>
</a>
</div>
</section>

<footer className="mt-8 pt-6 border-t border-zinc-400 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-500 font-mono">
<div className="flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
                KERNEL v4.2.0
            </div>
<div className="flex gap-6">
<a className="hover:text-zinc-900 border-b border-transparent hover:border-zinc-900 transition-colors pb-0.5" href="#">X/TWITTER</a>
<a className="hover:text-zinc-900 border-b border-transparent hover:border-zinc-900 transition-colors pb-0.5" href="#">SUBSTACK</a>
<a className="hover:text-zinc-900 border-b border-transparent hover:border-zinc-900 transition-colors pb-0.5" href="#">CONTACT</a>
</div>
</footer>
</main>

    </>
  );
}
