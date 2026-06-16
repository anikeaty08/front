import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function showDetail() {
            document.getElementById('feed-view').classList.add('hidden');
            document.getElementById('detail-view').classList.remove('hidden');
            document.getElementById('header-title').innerText = 'Topic Details';
            document.getElementById('main-scroll-area').scrollTo(0, 0);
        }

        function showFeed() {
            document.getElementById('detail-view').classList.add('hidden');
            document.getElementById('feed-view').classList.remove('hidden');
            document.getElementById('header-title').innerText = 'Topic Intelligence';
            document.getElementById('main-scroll-area').scrollTo(0, 0);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-neutral-900 bg-neutral-950 flex flex-col shrink-0 hidden md:flex">
<div className="h-16 flex items-center px-6 border-b border-neutral-900">
<div className="text-xl font-semibold tracking-tighter text-neutral-100 flex items-center gap-2">
<div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-neutral-950">
<iconify-icon height="1.2em" icon="solar:globus-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</div>
                CNI
            </div>
</div>
<nav className="flex-1 overflow-y-auto p-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-purple-500/10 text-purple-400 font-medium text-sm transition-colors" onclick="showFeed()">
<iconify-icon height="1.2em" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                Topic Feed
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 font-medium text-sm transition-colors">
<iconify-icon height="1.2em" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                Categories
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 font-medium text-sm transition-colors">
<iconify-icon height="1.2em" icon="solar:bookmark-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                Saved Intel
            </button>
</nav>
<div className="p-4 border-t border-neutral-900">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 font-medium text-sm transition-colors">
<iconify-icon height="1.2em" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                Settings
            </button>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-neutral-950 relative scroll-smooth" id="main-scroll-area">

<header className="h-16 sticky top-0 z-10 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 flex items-center justify-between px-6 md:px-8">
<div className="flex items-center gap-4">
<h1 className="text-lg font-semibold tracking-tight text-neutral-100" id="header-title">Topic Intelligence</h1>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" height="1.2em" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
<input className="bg-neutral-900 border border-neutral-800 text-sm rounded-full pl-9 pr-4 py-1.5 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-neutral-200 placeholder:text-neutral-600 transition-all w-64" placeholder="Search topics..." type="text"/>
</div>
</div>
</header>

<div className="p-6 md:p-8 max-w-7xl mx-auto space-y-10 animate-[fadeIn_0.3s_ease-in-out]" id="feed-view">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 -mb-1">
<button className="px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-950 text-xs font-medium whitespace-nowrap transition-colors">All Topics</button>
<button className="px-3 py-1.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 text-xs font-medium whitespace-nowrap transition-colors">Cryptocurrency</button>
<button className="px-3 py-1.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 text-xs font-medium whitespace-nowrap transition-colors">DeFi</button>
<button className="px-3 py-1.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 text-xs font-medium whitespace-nowrap transition-colors">Exchange &amp; ETF</button>
<button className="px-3 py-1.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 text-xs font-medium whitespace-nowrap transition-colors">Regulation &amp; Policy</button>
<button className="px-3 py-1.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 text-xs font-medium whitespace-nowrap transition-colors">On-Chain</button>
</div>
<div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg shrink-0 border border-neutral-800">
<button className="px-3 py-1 rounded bg-neutral-800 text-neutral-100 text-xs font-medium shadow-sm">Hot</button>
<button className="px-3 py-1 rounded text-neutral-400 hover:text-neutral-200 text-xs font-medium transition-colors">Latest</button>
</div>
</div>

<section>
<h2 className="text-sm font-medium text-neutral-500 mb-4 tracking-tight uppercase">Trending Intelligence</h2>
<div className="relative rounded-2xl overflow-hidden border border-neutral-800 group cursor-pointer block hover:border-neutral-600 transition-colors" onclick="showDetail()">
<div className="absolute inset-0 bg-neutral-900">
<img alt="SEC Building" className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500 mix-blend-luminosity" src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&amp;fit=crop&amp;q=80&amp;w=1200&amp;h=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
</div>
<div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-6 min-h-[240px]">
<div className="max-w-2xl space-y-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500 text-xs font-medium border border-rose-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
                                    Critical Topic
                                </span>
<span className="text-xs font-medium text-neutral-400 bg-neutral-800/50 px-2 py-0.5 rounded-full backdrop-blur-sm border border-neutral-700/50">Regulation &amp; Policy</span>
<span className="text-xs font-medium text-neutral-400 bg-neutral-800/50 px-2 py-0.5 rounded-full backdrop-blur-sm border border-neutral-700/50">Exchange &amp; ETF</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-50 leading-tight">SEC Delays Decision on Major Ethereum Spot ETF Applications</h3>
<p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">Multiple sources indicate the SEC is pushing back deadlines for leading asset managers seeking to launch Ethereum-based exchange-traded funds, citing the need for further review on proof-of-stake mechanics.</p>
</div>
<div className="flex md:flex-col items-center md:items-end gap-4 shrink-0 bg-neutral-950/50 p-4 rounded-xl backdrop-blur-md border border-neutral-800">
<div className="flex items-center gap-2 text-rose-400">
<iconify-icon height="1.2em" icon="solar:graph-down-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
<span className="text-sm font-medium">Negative Sentiment</span>
</div>
<div className="w-px h-8 bg-neutral-800 md:hidden"></div>
<div className="text-right">
<div className="text-2xl font-semibold tracking-tighter text-neutral-100">142</div>
<div className="text-xs text-neutral-500 font-medium">Articles clustered</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-4">
<h2 className="text-sm font-medium text-neutral-500 tracking-tight uppercase">Active Topics</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="group bg-neutral-900/40 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 hover:bg-neutral-900/60 transition-all cursor-pointer flex flex-col" onclick="showDetail()">
<div className="h-32 overflow-hidden relative border-b border-neutral-800 bg-neutral-900">
<img alt="Bitcoin" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity mix-blend-luminosity duration-500" src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=300"/>
<div className="absolute top-3 left-3 flex gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium border border-orange-500/20 backdrop-blur-md uppercase tracking-wider">High Priority</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col justify-between space-y-4">
<div className="space-y-3">
<div className="flex flex-wrap gap-1.5">
<span className="text-xs font-medium text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">Cryptocurrency</span>
<span className="text-xs font-medium text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">On-Chain</span>
</div>
<h3 className="text-base font-medium tracking-tight text-neutral-100 leading-snug group-hover:text-purple-400 transition-colors">Bitcoin Halving Anticipation Drives Miner Accumulation</h3>
</div>
<div className="flex items-center justify-between pt-4 border-t border-neutral-800/50">
<div className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
<iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                                    Positive
                                </div>
<div className="flex items-center gap-1.5 text-neutral-400 text-xs font-medium">
<iconify-icon height="1.2em" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                                    86 Articles
                                </div>
</div>
</div>
</div>

<div className="group bg-neutral-900/40 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 hover:bg-neutral-900/60 transition-all cursor-pointer flex flex-col" onclick="showDetail()">
<div className="h-32 overflow-hidden relative border-b border-neutral-800 bg-neutral-900">
<img alt="DeFi" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity mix-blend-luminosity duration-500" src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=300"/>
<div className="absolute top-3 left-3 flex gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium border border-amber-500/20 backdrop-blur-md uppercase tracking-wider">Medium Priority</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col justify-between space-y-4">
<div className="space-y-3">
<div className="flex flex-wrap gap-1.5">
<span className="text-xs font-medium text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">DeFi</span>
<span className="text-xs font-medium text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">Stablecoin</span>
</div>
<h3 className="text-base font-medium tracking-tight text-neutral-100 leading-snug group-hover:text-purple-400 transition-colors">Major Lending Protocol Integrates New Yield-Bearing Stablecoin</h3>
</div>
<div className="flex items-center justify-between pt-4 border-t border-neutral-800/50">
<div className="flex items-center gap-1.5 text-neutral-400 text-xs font-medium">
<iconify-icon height="1.2em" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                                    Neutral
                                </div>
<div className="flex items-center gap-1.5 text-neutral-400 text-xs font-medium">
<iconify-icon height="1.2em" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                                    34 Articles
                                </div>
</div>
</div>
</div>

<div className="group bg-neutral-900/40 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 hover:bg-neutral-900/60 transition-all cursor-pointer flex flex-col" onclick="showDetail()">
<div className="h-32 overflow-hidden relative border-b border-neutral-800 bg-neutral-900">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/20 to-neutral-900"></div>
<div className="absolute top-3 left-3 flex gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500 text-xs font-medium border border-rose-500/20 backdrop-blur-md uppercase tracking-wider">Critical Priority</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col justify-between space-y-4">
<div className="space-y-3">
<div className="flex flex-wrap gap-1.5">
<span className="text-xs font-medium text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">War &amp; Conflict</span>
<span className="text-xs font-medium text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">Economic Data</span>
</div>
<h3 className="text-base font-medium tracking-tight text-neutral-100 leading-snug group-hover:text-purple-400 transition-colors">Geopolitical Tensions Spark Crypto Market Sell-Off Amidst Inflation Fears</h3>
</div>
<div className="flex items-center justify-between pt-4 border-t border-neutral-800/50">
<div className="flex items-center gap-1.5 text-rose-400 text-xs font-medium">
<iconify-icon height="1.2em" icon="solar:arrow-right-down-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                                    Negative
                                </div>
<div className="flex items-center gap-1.5 text-neutral-400 text-xs font-medium">
<iconify-icon height="1.2em" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                                    112 Articles
                                </div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden p-6 md:p-8 max-w-5xl mx-auto space-y-8 pb-24 animate-[fadeIn_0.3s_ease-in-out]" id="detail-view">

<button className="flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors mb-6 cursor-pointer" onclick="showFeed()">
<iconify-icon height="1.2em" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                Back to Feed
            </button>

<header className="space-y-6">
<div className="space-y-4">
<div className="flex flex-wrap gap-2">
<span className="text-xs font-medium text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800">Regulation &amp; Policy</span>
<span className="text-xs font-medium text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800">Exchange &amp; ETF</span>
</div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-50 leading-tight">SEC Delays Decision on Major Ethereum Spot ETF Applications</h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5">
<div className="text-xs font-medium text-neutral-500 mb-1 flex items-center gap-1.5">
<iconify-icon height="1.2em" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                            Total Coverage
                        </div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-neutral-100">142</span>
<span className="text-xs text-neutral-500">articles</span>
</div>
<div className="mt-3 text-xs text-neutral-500 font-medium opacity-80">Last updated 12 mins ago</div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 md:col-span-2 flex flex-col justify-center">
<div className="text-xs font-medium text-neutral-500 mb-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<iconify-icon height="1.2em" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                                Aggregate AI Sentiment
                            </div>
<span className="text-rose-400 font-medium">Dominant: Negative</span>
</div>
<div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden flex">
<div className="h-full bg-emerald-500" style={{width: '15%'}}></div>
<div className="h-full bg-neutral-500" style={{width: '25%'}}></div>
<div className="h-full bg-rose-500" style={{width: '60%'}}></div>
</div>
<div className="flex justify-between mt-2 text-xs font-medium opacity-80">
<span className="text-emerald-500">15% Pos</span>
<span className="text-neutral-500">25% Neu</span>
<span className="text-rose-500">60% Neg</span>
</div>
</div>
</div>
</header>

<div className="space-y-8 mt-12">

<div className="space-y-4">
<h3 className="text-xs font-medium text-neutral-500 tracking-tight uppercase flex items-center gap-4">
                        Today
                        <div className="h-px flex-1 bg-neutral-800"></div>
</h3>
<div className="space-y-3 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-neutral-800">

<article className="relative pl-8 group">

<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-neutral-950 flex items-center justify-center border border-neutral-800 group-hover:border-rose-500/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div>
</div>
<div className="bg-neutral-900/30 border border-neutral-800/80 rounded-xl p-4 hover:bg-neutral-900/60 transition-colors cursor-pointer">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div className="space-y-2 flex-1">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<span className="text-xs font-medium text-rose-500 uppercase tracking-wider">Critical Impact</span>
<span className="text-xs text-neutral-500">•</span>
<span className="text-xs font-medium text-neutral-300">CoinDesk</span>
<span className="text-xs text-neutral-500">•</span>
<span className="text-xs text-neutral-500">2 hours ago</span>
</div>
<h4 className="text-sm font-medium text-neutral-100 leading-tight">SEC Officially Postpones BlackRock and Fidelity Ether ETF Decisions</h4>

<div className="mt-3 pl-3 border-l-2 border-purple-500/30">
<div className="text-xs font-medium text-purple-400 mb-1 flex items-center gap-1">
<iconify-icon height="1.2em" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                                                AI Summary
                                            </div>
<p className="text-xs text-neutral-400 leading-relaxed">The SEC has extended the review period for major Ethereum spot ETF filings until May. Analysts suggest the commission is analyzing the implications of staking mechanisms unique to Ethereum's proof-of-stake network before approving.</p>
</div>
</div>
<div className="shrink-0 flex items-center gap-1 text-rose-400 text-xs font-medium bg-rose-500/10 px-2 py-1 rounded">
<iconify-icon height="1.2em" icon="solar:arrow-right-down-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                                        Negative
                                    </div>
</div>
</div>
</article>

<article className="relative pl-8 group">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-neutral-950 flex items-center justify-center border border-neutral-800">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
</div>
<div className="py-3 px-4 rounded-lg hover:bg-neutral-900/40 transition-colors -mx-4 sm:mx-0 cursor-pointer">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div className="space-y-1 flex-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="text-xs font-medium text-neutral-300">Bloomberg Crypto</span>
<span className="text-xs text-neutral-500">•</span>
<span className="text-xs text-neutral-500">5 hours ago</span>
<span className="text-xs text-neutral-500">•</span>
<span className="text-xs text-neutral-500">By Sarah Kopit</span>
</div>
<h4 className="text-sm font-medium text-neutral-200 leading-tight">Ether Drops 4% Following SEC Delay Notices</h4>
</div>
<div className="shrink-0 flex items-center gap-1 text-rose-400 text-xs font-medium">
                                        Negative
                                    </div>
</div>
</div>
</article>

<article className="relative pl-8 group">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-neutral-950 flex items-center justify-center border border-neutral-800">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
</div>
<div className="py-3 px-4 rounded-lg hover:bg-neutral-900/40 transition-colors -mx-4 sm:mx-0 cursor-pointer">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div className="space-y-1 flex-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="text-xs font-medium text-neutral-300">The Block</span>
<span className="text-xs text-neutral-500">•</span>
<span className="text-xs text-neutral-500">7 hours ago</span>
</div>
<h4 className="text-sm font-medium text-neutral-200 leading-tight">What the Latest SEC Delay Means for ETH Options Markets</h4>
</div>
<div className="shrink-0 flex items-center gap-1 text-neutral-400 text-xs font-medium">
                                        Neutral
                                    </div>
</div>
</div>
</article>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-medium text-neutral-500 tracking-tight uppercase flex items-center gap-4">
                        Yesterday
                        <div className="h-px flex-1 bg-neutral-800"></div>
</h3>
<div className="space-y-3 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-neutral-800">

<article className="relative pl-8 group">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-neutral-950 flex items-center justify-center border border-neutral-800">
<div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.4)]"></div>
</div>
<div className="py-3 px-4 rounded-lg hover:bg-neutral-900/40 transition-colors -mx-4 sm:mx-0 cursor-pointer">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div className="space-y-1 flex-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="text-xs font-medium text-orange-500 uppercase tracking-wider">High Impact</span>
<span className="text-xs text-neutral-500">•</span>
<span className="text-xs font-medium text-neutral-300">Decrypt</span>
<span className="text-xs text-neutral-500">•</span>
<span className="text-xs text-neutral-500">Yesterday, 14:30</span>
</div>
<h4 className="text-sm font-medium text-neutral-200 leading-tight">Analysts Lower Odds of May Approval for Ethereum ETFs to 30%</h4>
<p className="text-xs text-neutral-400 mt-2 line-clamp-1">Bloomberg analysts Eric Balchunas and James Seyffart significantly reduced their probability estimate...</p>
</div>
<div className="shrink-0 flex items-center gap-1 text-rose-400 text-xs font-medium">
                                        Negative
                                    </div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
