import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
ripple: {
cyan: '#00b7eb',
blue: '#00d4ff',
dark: '#001f3f',
midnight: '#0d1b2a',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Icons
        lucide.createIcons();

        // TradingView Chart Logic
        document.addEventListener('DOMContentLoaded', () => {
            const chartContainer = document.getElementById('chart-container');
            const chart = LightweightCharts.createChart(chartContainer, {
                layout: {
                    background: { type: 'solid', color: 'transparent' },
                    textColor: '#a1a1aa',
                },
                grid: {
                    vertLines: { color: 'rgba(255, 255, 255, 0.05)' },
                    horzLines: { color: 'rgba(255, 255, 255, 0.05)' },
                },
                rightPriceScale: {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                },
                timeScale: {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                },
                height: chartContainer.clientHeight,
            });

            const candlestickSeries = chart.addCandlestickSeries({
                upColor: '#00b7eb', // Ripple Cyan
                downColor: '#ef4444',
                borderVisible: false,
                wickUpColor: '#00b7eb',
                wickDownColor: '#ef4444',
            });

            // Mock Data Generation for Visuals (since we can't fetch live without proxy/key in static html)
            const initialData = [];
            let time = new Date(Date.now() - 100 * 24 * 60 * 60 * 1000).getTime() / 1000;
            let price = 2.0;
            for (let i = 0; i < 100; i++) {
                const open = price;
                const close = price + (Math.random() - 0.45) * 0.1;
                const high = Math.max(open, close) + Math.random() * 0.05;
                const low = Math.min(open, close) - Math.random() * 0.05;
                initialData.push({ time, open, high, low, close });
                time += 24 * 60 * 60;
                price = close;
            }
            candlestickSeries.setData(initialData);

            // Resize Observer
            new ResizeObserver(entries => {
                if (entries.length === 0 || entries[0].target !== chartContainer) { return; }
                const newRect = entries[0].contentRect;
                chart.applyOptions({ width: newRect.width, height: newRect.height });
            }).observe(chartContainer);
        });

        // Countdown Timer (72 hours from now)
        const deadline = new Date(Date.now() + 72 * 60 * 60 * 1000).getTime();
        const timerElement = document.getElementById('countdown');

        setInterval(() => {
            const now = new Date().getTime();
            const t = deadline - now;
            
            if (t < 0) {
                timerElement.innerHTML = "00:00:00";
                return;
            }

            const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((t % (1000 * 60)) / 1000);

            // Add total hours (e.g. 71 instead of resetting at 24 for effect)
            const totalHours = Math.floor(t / (1000 * 60 * 60));

            timerElement.innerHTML = 
                (totalHours < 10 ? '0' + totalHours : totalHours) + ":" + 
                (minutes < 10 ? '0' + minutes : minutes) + ":" + 
                (seconds < 10 ? '0' + seconds : seconds);
        }, 1000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cosmic-bg">
<div className="cosmic-particles"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-ripple-cyan/50 flex items-center justify-center bg-ripple-cyan/10">
<span className="text-ripple-cyan font-semibold tracking-tighter text-xs">FB</span>
</div>
<span className="text-sm tracking-tight text-gray-300 font-medium uppercase">FirstBlock Capital</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs tracking-wide text-gray-400">
<a className="hover:text-white transition-colors" href="#overview">SPV Overview</a>
<a className="hover:text-white transition-colors" href="#risks">Risks</a>
<a className="hover:text-white transition-colors" href="mailto:peter@firstblockcap.com">Contact Peter Janssen</a>
</div>
<button className="text-xs border border-white/20 px-4 py-2 rounded-full hover:bg-white/5 transition-colors text-gray-300">
                Login (Supabase)
            </button>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mb-32">

<div className="mb-12 animate-float">
<svg className="text-white drop-shadow-[0_0_15px_rgba(0,183,235,0.6)]" fill="none" height="96" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="96">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>

<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[1.1] glow-text max-w-5xl">
                The Final Pre-IPO Entry Into <span className="text-ripple-cyan">Ripple</span>—Before Institutions Lock It Out Forever
            </h1>
<p className="text-lg md:text-3xl text-gray-300 font-light tracking-tight max-w-4xl mb-10 leading-snug">
                Fortress &amp; Citadel secured at <span className="text-white font-normal">$250/share</span> ($40B val). 
                Your exclusive SPV block: <span className="text-ripple-cyan font-normal">$150/share</span> ($25B val)—72% below Ripple's $90B+ XRP treasury alone.
            </p>

<div className="flex flex-wrap justify-center gap-4 mb-12">
<div className="px-4 py-1.5 rounded-full border border-red-500/30 bg-red-900/10 text-red-400 text-xs tracking-wide uppercase font-medium flex items-center gap-2 animate-pulse-slow">
<i className="w-3 h-3" data-lucide="clock"></i> 72 Hours to Close
                </div>
<div className="px-4 py-1.5 rounded-full border border-ripple-cyan/30 bg-ripple-cyan/10 text-ripple-cyan text-xs tracking-wide uppercase font-medium flex items-center gap-2">
<i className="w-3 h-3" data-lucide="users"></i> 100 Members Max
                </div>
<div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs tracking-wide uppercase font-medium">
                    RIA/FO: Tiered Carry Up to 3%
                </div>
<div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs tracking-wide uppercase font-medium">
                    Accredited Institutions Only
                </div>
</div>

<a className="group relative inline-flex items-center gap-3 px-10 py-5 bg-ripple-cyan text-white rounded-full text-lg md:text-xl font-medium tracking-tight glow-button overflow-hidden" href="#accredited-form">
<span className="relative z-10">Reserve $100K+ Allocation at $150/Share</span>
<i className="w-5 h-5 relative z-10 group-hover:fill-white transition-colors" data-lucide="zap"></i>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</a>
<p className="mt-6 text-xs text-gray-500 tracking-wide uppercase">
                Reg D 506(c) Compliant <span className="mx-2">|</span> Delaware Series LLC <span className="mx-2">|</span> Not Advice—Consult Counsel
            </p>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-panel rounded-2xl p-1 overflow-hidden flex flex-col h-[500px]">
<div className="px-6 py-4 border-b border-white/5 bg-black/20 flex justify-between items-center">
<div>
<h3 className="text-lg font-medium tracking-tight text-white flex items-center gap-2">
                                XRP Live Market
                                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
</h3>
<p className="text-xs text-gray-400">Ripple's Treasury Anchor ($125B Cap)</p>
</div>
<div className="text-right">
<span className="block text-xl font-medium text-white">$2.20</span>
<span className="text-xs text-green-400">+4.2% (24h)</span>
</div>
</div>
<div className="w-full flex-grow bg-black/40 relative" id="chart-container"></div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col justify-between h-[500px]">
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-6 border-b border-white/10 pb-4">Secondary Market Bids (Last 24h)</h3>
<div className="space-y-6">
<div className="flex justify-between items-center group">
<div>
<div className="text-sm text-gray-300 font-medium">Hiive</div>
<div className="text-xs text-gray-500">113 Live Orders</div>
</div>
<div className="text-right">
<div className="text-2xl font-semibold text-ripple-cyan tracking-tight">$161.08</div>
<div className="text-xs text-gray-400">Weighted Avg</div>
</div>
</div>
<div className="flex justify-between items-center opacity-80">
<div>
<div className="text-sm text-gray-300 font-medium">Forge Global</div>
<div className="text-xs text-gray-500">Volume: $2.4M</div>
</div>
<div className="text-right">
<div className="text-xl font-medium text-white tracking-tight">$172.16</div>
<div className="text-xs text-red-400">-$4.21 (-2.39%)</div>
</div>
</div>
<div className="flex justify-between items-center opacity-60">
<div>
<div className="text-sm text-gray-300 font-medium">EquityZen</div>
<div className="text-xs text-gray-500">Standard Lot</div>
</div>
<div className="text-right">
<div className="text-lg font-medium text-gray-300 tracking-tight">$165.00</div>
<div className="text-xs text-gray-500">Avg Bid</div>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<div className="flex justify-between items-end mb-2">
<span className="text-sm text-gray-400">Your SPV Exclusive</span>
<span className="text-4xl font-semibold text-white tracking-tight relative">
                                $150.00
                                <div className="absolute -bottom-1 left-0 w-full h-1 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
</span>
</div>
<p className="text-right text-xs text-red-400 font-medium mt-2">40% Below Market Mean</p>
</div>
<div className="bg-ripple-cyan/5 border border-ripple-cyan/20 rounded-lg p-4 mt-6">
<p className="text-sm text-ripple-cyan/90 leading-relaxed">
<span className="font-semibold">Teaser:</span> Why $150? Q2 Tender at $175. Circle comps imply $650+. Institutions paying premiums—you enter first.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-ripple-cyan/10 flex items-center justify-center text-ripple-cyan mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="tag"></i>
</div>
<h4 className="text-lg font-semibold text-white mb-2">72% Asymmetry</h4>
<p className="text-sm text-gray-400 leading-relaxed">
                        Ripple's 41B XRP ($90B) / 166M Shares = $540 Implied. SPV at $150 = XRP at $0.61 Effective.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<h4 className="text-lg font-semibold text-white mb-2">Circle 25x Revenue</h4>
<p className="text-sm text-gray-400 leading-relaxed">
                        Ripple at 4.6x = $650/Share Upside. Hidden Road + RLUSD (BNY Mellon) Fuel 30% CAGR.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<h4 className="text-lg font-semibold text-white mb-2">Fortress Balance Sheet</h4>
<p className="text-sm text-gray-400 leading-relaxed">
                        $4B Cash | Zero Debt | $680M Portfolio. Regulatory Moat: SEC Win + GENIUS Act.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="network"></i>
</div>
<h4 className="text-lg font-semibold text-white mb-2">RIA/FO Perks</h4>
<p className="text-sm text-gray-400 leading-relaxed">
                        Refer $5M+? Tier 1: 0.25% Upfront + 2% Carry Share. Retention: 1.75% Fee + 18% Carry.
                    </p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-24" id="accredited-form">
<div className="glass-panel rounded-3xl p-1 border border-red-500/20 shadow-[0_0_60px_-15px_rgba(239,68,68,0.15)]">
<div className="bg-black/60 backdrop-blur-3xl rounded-[20px] p-8 md:p-12 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                        Allocations Exhausting: Secure Before Close
                    </h2>
<div className="text-4xl md:text-6xl font-mono text-white mb-6 tracking-widest tabular-nums" id="countdown">
                        72:00:00
                    </div>
<p className="text-lg md:text-xl text-gray-400 mb-10 font-light">
                        Verify Accreditation in 90s → Instant PPM Access + $100K Wire Instructions.<br/>
<span className="text-white/80">For HNWIs/FOs/RIAs Only.</span>
</p>
<form className="max-w-xl mx-auto space-y-4 text-left">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-ripple-cyan/50 focus:bg-white/10 transition-all text-sm" placeholder="Full Name" required="" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-ripple-cyan/50 focus:bg-white/10 transition-all text-sm" placeholder="Firm / Family Office" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-ripple-cyan/50 focus:bg-white/10 transition-all text-sm" placeholder="Professional Email" required="" type="email"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-ripple-cyan/50 focus:bg-white/10 transition-all text-sm" placeholder="Phone Number" type="tel"/>
</div>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ripple-cyan/50 focus:bg-white/10 transition-all text-sm appearance-none cursor-pointer">
<option className="text-gray-500" disabled="" selected="" value="">Expected Allocation</option>
<option className="bg-gray-900" value="100k">$100K - $1M</option>
<option className="bg-gray-900" value="1m">$1M - $5M</option>
<option className="bg-gray-900" value="5m">$5M+</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="mt-1 w-4 h-4 rounded border-gray-600 bg-white/5 text-ripple-cyan focus:ring-ripple-cyan/50 cursor-pointer" id="accreditation" required="" type="checkbox"/>
<label className="text-xs text-gray-400 leading-normal cursor-pointer select-none" htmlFor="accreditation">
                                I Confirm Accredited Status (Net Worth $1M+ excl. home / $200K Income) per Reg D 506(c). I understand this is for institutional/sophisticated investors only.
                            </label>
</div>
<button className="w-full mt-6 bg-gradient-to-r from-red-600 to-ripple-cyan text-white rounded-lg py-4 text-lg font-medium tracking-tight hover:scale-[1.01] transition-transform duration-200 shadow-[0_0_20px_rgba(0,183,235,0.4)]" type="submit">
                            Unlock PPM &amp; Lock $150/Share
                        </button>
</form>
<p className="mt-6 text-[10px] text-gray-500 uppercase tracking-wider">
                        Post-Verification: Full Term Sheet <span className="mx-1">•</span> Exit Scenarios (2x-9x Illustrative) <span className="mx-1">•</span> Referral Tiers
                    </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black text-center py-12 relative z-10">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-center items-center gap-6 text-xs text-gray-600 mb-6">
<span>FirstBlock Capital Series LLC</span>
<span className="hidden md:inline text-gray-800">|</span>
<span>Delaware</span>
<span className="hidden md:inline text-gray-800">|</span>
<span>Peter K. Janssen, Director</span>
<span className="hidden md:inline text-gray-800">|</span>
<a className="hover:text-gray-400" href="mailto:peter@firstblockcap.com">peter@firstblockcap.com</a>
<span className="hidden md:inline text-gray-800">|</span>
<span>+1 (516) 502-5247</span>
</div>
<p className="text-[10px] text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Confidential—Accredited Only. This is not an offer to sell securities. Securities are offered only through the Confidential Private Placement Memorandum (PPM) to accredited investors. Wilson Sonsini-Compliant Structure. Past performance (including secondary market data from Hiive/Forge) does not guarantee future results. © 2025 FirstBlock Capital.
            </p>
</div>
</footer>



    </>
  );
}
