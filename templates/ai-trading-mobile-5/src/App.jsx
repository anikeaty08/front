import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchTab(screenId) {
            // Hide all screens
            const screens = ['home', 'scanner', 'news', 'signals'];
            screens.forEach(s => {
                document.getElementById('screen-' + s).classList.add('hidden');
                document.getElementById('screen-' + s).classList.remove('fade-in');
            });

            // Show selected screen
            const target = document.getElementById('screen-' + screenId);
            target.classList.remove('hidden');
            void target.offsetWidth; // trigger reflow
            target.classList.add('fade-in');

            // Update Nav Icons
            const navs = ['home', 'scanner', 'news', 'signals'];
            navs.forEach(n => {
                const icon = document.querySelector(`#nav-${n} iconify-icon`);
                if(icon) {
                    // Reset to gray, except for the FAB (signals) which is handled differently usually, but for this simplified logic:
                    if(n === 'signals') {
                        // FAB logic stays constant (black bg)
                    } else {
                        icon.className = "text-zinc-300 group-hover:text-zinc-600 transition-colors duration-200";
                    }
                }
            });

            // Set active color
            if (screenId !== 'signals') {
                const activeIcon = document.querySelector(`#nav-${screenId} iconify-icon`);
                if(activeIcon) activeIcon.className = "text-gold transition-colors duration-200";
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[400px] h-[850px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-zinc-200">

<div className="h-12 w-full flex items-center justify-between px-6 pt-2 z-20 bg-white/90 backdrop-blur-md sticky top-0">
<span className="text-xs font-medium text-zinc-400">9:41</span>
<div className="flex space-x-1.5">
<div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
</div>
</div>

<main className="flex-1 overflow-y-auto no-scrollbar pb-24 relative" id="app-content">

<section className="fade-in p-6" id="screen-home">

<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
<span className="font-serif italic font-bold">D</span>
</div>
<h1 className="text-lg font-semibold tracking-tighter text-zinc-900">DORA</h1>
</div>
<button className="p-2 rounded-full hover:bg-zinc-50 transition">
<iconify-icon className="text-zinc-400" height="20" icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="relative bg-white rounded-3xl p-6 shadow-xl shadow-zinc-200/50 border border-zinc-100 mb-8 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10">
<iconify-icon className="text-gold" height="80" icon="lucide:zap" width="80"></iconify-icon>
</div>
<p className="text-zinc-400 text-xs font-medium tracking-wide mb-1 uppercase">Total Balance</p>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-1">$42,853.40</h2>
<div className="flex items-center gap-2 mb-6">
<span className="text-emerald-500 text-sm font-medium flex items-center">
<iconify-icon className="mr-0.5" icon="lucide:arrow-up-right" width="16"></iconify-icon>
                            +$1,240.50
                        </span>
<span className="text-zinc-300 text-xs">|</span>
<span className="text-emerald-500 text-xs bg-emerald-50 px-2 py-0.5 rounded-full">+2.4% today</span>
</div>

<div className="w-full h-16 relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#C5A059', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#fff', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0,35 Q10,30 20,32 T40,25 T60,15 T80,20 T100,5" fill="url(#grad1)" stroke="none"></path>
<path d="M0,35 Q10,30 20,32 T40,25 T60,15 T80,20 T100,5" fill="none" stroke="#C5A059" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<div className="absolute right-0 top-0 bg-black text-white text-[10px] px-2 py-1 rounded-full -mt-2">Live</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<button className="group p-4 rounded-2xl bg-zinc-50 hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300 text-left border border-zinc-100" onclick="switchTab('signals')">
<div className="bg-white group-hover:bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-sm border border-zinc-100 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-gold" icon="lucide:sparkles" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="block text-sm font-medium">AI Signals</span>
<span className="text-xs text-zinc-400 group-hover:text-zinc-400">High probability</span>
</button>
<button className="group p-4 rounded-2xl bg-zinc-50 hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300 text-left border border-zinc-100" onclick="switchTab('scanner')">
<div className="bg-white group-hover:bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-sm border border-zinc-100 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-zinc-900 group-hover:text-white" icon="lucide:radar" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="block text-sm font-medium">Scanner</span>
<span className="text-xs text-zinc-400 group-hover:text-zinc-400">Find assets</span>
</button>
<button className="group p-4 rounded-2xl bg-zinc-50 hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300 text-left border border-zinc-100" onclick="switchTab('news')">
<div className="bg-white group-hover:bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-sm border border-zinc-100 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-zinc-900 group-hover:text-white" icon="lucide:newspaper" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="block text-sm font-medium">News</span>
<span className="text-xs text-zinc-400 group-hover:text-zinc-400">Market updates</span>
</button>
<button className="group p-4 rounded-2xl bg-zinc-50 hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300 text-left border border-zinc-100">
<div className="bg-white group-hover:bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-sm border border-zinc-100 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-zinc-900 group-hover:text-white" icon="lucide:bar-chart-2" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="block text-sm font-medium">Markets</span>
<span className="text-xs text-zinc-400 group-hover:text-zinc-400">Global view</span>
</button>
</div>
</section>

<section className="fade-in p-6 hidden" id="screen-scanner">
<div className="sticky top-0 bg-white/95 backdrop-blur z-10 pb-4">
<h2 className="text-xl font-semibold tracking-tight mb-4">Market Scanner</h2>

<div className="relative mb-4">
<iconify-icon className="absolute left-4 top-3.5 text-zinc-400" icon="lucide:search" width="18"></iconify-icon>
<input className="w-full bg-zinc-50 border border-zinc-100 rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all placeholder:text-zinc-400" placeholder="Search symbol, asset, or theme" type="text"/>
</div>

<div className="flex space-x-2 overflow-x-auto no-scrollbar pb-2">
<button className="flex-shrink-0 px-4 py-2 bg-black text-white text-xs font-medium rounded-full">Trend</button>
<button className="flex-shrink-0 px-4 py-2 bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-medium rounded-full">Breakouts</button>
<button className="flex-shrink-0 px-4 py-2 bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-medium rounded-full">Oversold</button>
<button className="flex-shrink-0 px-4 py-2 bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-medium rounded-full">AI Rating</button>
</div>
</div>

<div className="space-y-4 mt-2">

<div className="flex items-center justify-between p-4 rounded-2xl border border-zinc-100 shadow-sm bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs font-bold">NVDA</div>
<div>
<h3 className="font-semibold text-sm">Nvidia</h3>
<p className="text-xs text-zinc-400">Vol: 42M</p>
</div>
</div>
<div className="w-16 h-8">
<svg className="w-full h-full stroke-emerald-500 fill-none" strokeWidth="1.5" viewbox="0 0 50 20">
<path d="M0,15 L10,12 L20,16 L30,5 L40,8 L50,2"></path>
</svg>
</div>
<div className="text-right">
<p className="text-sm font-medium">$482.12</p>
<div className="flex items-center justify-end gap-1">
<span className="bg-emerald-50 text-emerald-600 text-[10px] px-1.5 py-0.5 rounded font-medium">+1.2%</span>
<span className="text-[10px] text-gold font-semibold">AI 9.8</span>
</div>
</div>
</div>

<div className="flex items-center justify-between p-4 rounded-2xl border border-zinc-100 shadow-sm bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">BTC</div>
<div>
<h3 className="font-semibold text-sm">Bitcoin</h3>
<p className="text-xs text-zinc-400">Vol: 18B</p>
</div>
</div>
<div className="w-16 h-8">
<svg className="w-full h-full stroke-emerald-500 fill-none" strokeWidth="1.5" viewbox="0 0 50 20">
<path d="M0,18 L10,15 L20,10 L30,12 L40,5 L50,0"></path>
</svg>
</div>
<div className="text-right">
<p className="text-sm font-medium">$64,230</p>
<div className="flex items-center justify-end gap-1">
<span className="bg-emerald-50 text-emerald-600 text-[10px] px-1.5 py-0.5 rounded font-medium">+3.4%</span>
<span className="text-[10px] text-gold font-semibold">AI 9.2</span>
</div>
</div>
</div>

<div className="flex items-center justify-between p-4 rounded-2xl border border-zinc-100 shadow-sm bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">TSLA</div>
<div>
<h3 className="font-semibold text-sm">Tesla</h3>
<p className="text-xs text-zinc-400">Vol: 21M</p>
</div>
</div>
<div className="w-16 h-8">
<svg className="w-full h-full stroke-rose-500 fill-none" strokeWidth="1.5" viewbox="0 0 50 20">
<path d="M0,5 L10,8 L20,5 L30,12 L40,15 L50,18"></path>
</svg>
</div>
<div className="text-right">
<p className="text-sm font-medium">$198.50</p>
<div className="flex items-center justify-end gap-1">
<span className="bg-rose-50 text-rose-500 text-[10px] px-1.5 py-0.5 rounded font-medium">-0.8%</span>
<span className="text-[10px] text-zinc-400 font-semibold">AI 4.1</span>
</div>
</div>
</div>
</div>
</section>

<section className="fade-in p-6 hidden" id="screen-news">
<div className="sticky top-0 bg-white/95 backdrop-blur z-10 pb-4">
<h2 className="text-xl font-semibold tracking-tight mb-4">Insights</h2>

<div className="flex justify-between border-b border-zinc-100 pb-2 mb-4">
<button className="text-sm font-medium text-zinc-900 border-b-2 border-gold pb-2 -mb-2.5">All</button>
<button className="text-sm font-medium text-zinc-400 hover:text-zinc-600 transition">Market</button>
<button className="text-sm font-medium text-zinc-400 hover:text-zinc-600 transition">Economy</button>
<button className="text-sm font-medium text-zinc-400 hover:text-zinc-600 transition">AI Reports</button>
</div>
</div>
<div className="space-y-6">

<article className="flex gap-4 group cursor-pointer">
<div className="w-24 h-24 rounded-xl bg-zinc-200 flex-shrink-0 overflow-hidden relative">
<img alt="news" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="flex flex-col justify-between py-1">
<div>
<span className="text-[10px] font-semibold text-gold tracking-wider uppercase mb-1 block">AI Report</span>
<h3 className="text-sm font-semibold leading-snug line-clamp-2">Algorithmic trading volume surges 200% as institutional adoption grows.</h3>
</div>
<span className="text-xs text-zinc-400">2h ago • Dora Intelligence</span>
</div>
</article>

<article className="flex gap-4 group cursor-pointer">
<div className="w-24 h-24 rounded-xl bg-zinc-200 flex-shrink-0 overflow-hidden relative">
<img alt="news" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col justify-between py-1">
<div>
<span className="text-[10px] font-semibold text-zinc-400 tracking-wider uppercase mb-1 block">Market</span>
<h3 className="text-sm font-semibold leading-snug line-clamp-2">Federal Reserve signals potential rate pause in upcoming meeting.</h3>
</div>
<span className="text-xs text-zinc-400">4h ago • Bloomberg</span>
</div>
</article>

<article className="flex gap-4 group cursor-pointer">
<div className="w-24 h-24 rounded-xl bg-zinc-200 flex-shrink-0 overflow-hidden relative">
<img alt="news" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="flex flex-col justify-between py-1">
<div>
<span className="text-[10px] font-semibold text-zinc-400 tracking-wider uppercase mb-1 block">Crypto</span>
<h3 className="text-sm font-semibold leading-snug line-clamp-2">Ethereum upgrade successful: What this means for gas fees.</h3>
</div>
<span className="text-xs text-zinc-400">6h ago • CoinDesk</span>
</div>
</article>
</div>
</section>

<section className="fade-in p-6 hidden" id="screen-signals">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight">AI Signals</h2>
<div className="flex gap-1 bg-zinc-100 p-1 rounded-lg">
<button className="bg-white shadow-sm px-3 py-1 rounded-md text-xs font-medium text-zinc-900">All</button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-zinc-500">Crypto</button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-zinc-500">Stocks</button>
</div>
</div>

<div className="flex overflow-x-auto no-scrollbar gap-2 mb-6">
<span className="px-3 py-1.5 border border-gold text-gold bg-gold/5 rounded-full text-xs font-medium whitespace-nowrap">Strong Buy</span>
<span className="px-3 py-1.5 border border-zinc-200 text-zinc-500 rounded-full text-xs font-medium whitespace-nowrap">Neutral</span>
<span className="px-3 py-1.5 border border-zinc-200 text-zinc-500 rounded-full text-xs font-medium whitespace-nowrap">Sell</span>
<span className="px-3 py-1.5 border border-zinc-200 text-zinc-500 rounded-full text-xs font-medium whitespace-nowrap">Algorithmic</span>
</div>
<div className="space-y-4">

<div className="bg-zinc-900 rounded-3xl p-5 text-white shadow-gold relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-3xl rounded-full -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/10">
<span className="font-bold text-xs">ETH</span>
</div>
<div>
<h3 className="font-semibold text-sm">Ethereum</h3>
<p className="text-xs text-zinc-400">Smart Contract</p>
</div>
</div>
<div className="text-right">
<span className="block text-gold font-bold text-sm tracking-wide">STRONG BUY</span>
<span className="text-[10px] text-zinc-400">Prob: 94%</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mb-4 relative z-10">
<div className="bg-white/5 rounded-xl p-2 text-center">
<p className="text-[10px] text-zinc-400 mb-0.5">Entry</p>
<p className="text-sm font-medium text-white">2,450</p>
</div>
<div className="bg-white/5 rounded-xl p-2 text-center border border-emerald-500/30">
<p className="text-[10px] text-zinc-400 mb-0.5">Target</p>
<p className="text-sm font-medium text-emerald-400">2,800</p>
</div>
<div className="bg-white/5 rounded-xl p-2 text-center">
<p className="text-[10px] text-zinc-400 mb-0.5">Stop</p>
<p className="text-sm font-medium text-rose-400">2,380</p>
</div>
</div>
<div className="flex items-center justify-between relative z-10">
<div className="h-6 w-24">
<svg className="w-full h-full stroke-gold fill-none" strokeWidth="2" viewbox="0 0 50 20">
<path d="M0,15 L10,12 L20,14 L30,8 L40,10 L50,4"></path>
</svg>
</div>
<button className="bg-gold hover:bg-yellow-600 text-black text-xs font-semibold px-4 py-2 rounded-full transition">Execute</button>
</div>
</div>

<div className="bg-white border border-zinc-100 rounded-3xl p-5 shadow-sm relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 text-zinc-900">
<span className="font-bold text-xs">AMD</span>
</div>
<div>
<h3 className="font-semibold text-sm">AMD</h3>
<p className="text-xs text-zinc-400">Tech</p>
</div>
</div>
<div className="text-right">
<span className="block text-emerald-600 font-bold text-sm tracking-wide">BUY</span>
<span className="text-[10px] text-zinc-400">Prob: 78%</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mb-2">
<div className="p-2 text-center">
<p className="text-[10px] text-zinc-400 mb-0.5">Entry</p>
<p className="text-sm font-medium text-zinc-900">112.4</p>
</div>
<div className="p-2 text-center">
<p className="text-[10px] text-zinc-400 mb-0.5">Target</p>
<p className="text-sm font-medium text-emerald-600">125.0</p>
</div>
<div className="p-2 text-center">
<p className="text-[10px] text-zinc-400 mb-0.5">Stop</p>
<p className="text-sm font-medium text-rose-500">108.0</p>
</div>
</div>
</div>
</div>
</section>
</main>

<nav className="bg-white border-t border-zinc-100 px-6 py-4 flex justify-between items-center z-30">
<button className="flex flex-col items-center justify-center gap-1 w-12 group" id="nav-home" onclick="switchTab('home')">
<iconify-icon className="text-gold transition-colors duration-200" icon="lucide:layout-grid" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="flex flex-col items-center justify-center gap-1 w-12 group" id="nav-scanner" onclick="switchTab('scanner')">
<iconify-icon className="text-zinc-300 group-hover:text-zinc-600 transition-colors duration-200" icon="lucide:radar" strokeWidth="1.5" width="22"></iconify-icon>
</button>

<button className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg shadow-zinc-300 -mt-8 border-4 border-white" id="nav-signals" onclick="switchTab('signals')">
<iconify-icon className="text-gold" icon="lucide:cpu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="flex flex-col items-center justify-center gap-1 w-12 group" id="nav-news" onclick="switchTab('news')">
<iconify-icon className="text-zinc-300 group-hover:text-zinc-600 transition-colors duration-200" icon="lucide:newspaper" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="flex flex-col items-center justify-center gap-1 w-12 group">
<iconify-icon className="text-zinc-300 group-hover:text-zinc-600 transition-colors duration-200" icon="lucide:user" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</nav>
</div>


    </>
  );
}
