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
dark: {
900: '#0B0E11',
800: '#15191E',
700: '#1E2329',
600: '#2A3038',
},
accent: {
blue: '#2962FF',
purple: '#7C3AED',
teal: '#14B8A6',
}
},
}
}
}



        Chart.defaults.color = '#6B7280';
        Chart.defaults.scale.grid.color = 'transparent';
        
        const ctxBalance = document.getElementById('balanceChart').getContext('2d');
        const gradientBalance = ctxBalance.createLinearGradient(0, 0, 0, 200);
        gradientBalance.addColorStop(0, 'rgba(41, 98, 255, 0.3)');
        gradientBalance.addColorStop(1, 'rgba(41, 98, 255, 0)');

        new Chart(ctxBalance, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    data: [140000, 142000, 148000, 146000, 155000, 158000, 164802],
                    borderColor: '#2962FF',
                    backgroundColor: gradientBalance,
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#2962FF',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { display: false },
                    y: { display: false, min: 130000 }
                },
                interaction: { mode: 'index', intersect: false }
            }
        });

        const createSparkline = (id, data, isPositive = true) => {
            const ctx = document.getElementById(id).getContext('2d');
            const color = isPositive ? '#10B981' : '#EF4444';

            return new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map((_, i) => i),
                    datasets: [{
                        data: data,
                        borderColor: color,
                        borderWidth: 1.5,
                        tension: 0.4,
                        fill: false,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { display: false },
                        y: { display: false }
                    }
                }
            });
        };

        createSparkline('btcChart', [50, 52, 51, 54, 53, 56, 58, 55, 60, 57], true);
        createSparkline('ethChart', [40, 39, 38, 36, 37, 35, 36, 34, 33, 35], false);
        createSparkline('solChart', [60, 58, 55, 52, 54, 50, 48, 49, 46, 47], false);
        createSparkline('marketChart1', [10, 12, 11, 14, 13, 15, 16], true);
        createSparkline('marketChart2', [15, 14, 13, 13.5, 12, 11, 12], false);
        createSparkline('marketChart3', [20, 18, 17, 15, 16, 14, 13], false);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<aside className="w-64 flex-shrink-0 flex flex-col h-full bg-dark-900 border-r border-dark-700/50 hidden md:flex">
<div className="h-20 flex items-center px-6 gap-3">
<div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-dark-900">
<iconify-icon height="20" icon="solar:wallet-bold" width="20"></iconify-icon>
</div>
<div>
<span className="text-white font-semibold text-base tracking-tight block leading-tight">CryptoLink</span>
<span className="text-gray-500 text-xs">Dashboard</span>
</div>
</div>
<div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 bg-dark-800 text-white rounded-xl border border-dark-700/50" href="#">
<iconify-icon height="20" icon="solar:widget-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="font-medium text-sm">Dashboard</span>
</a>
<div className="pt-2 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-800/50 rounded-xl transition-all" href="#">
<iconify-icon height="20" icon="solar:coin-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm">My Coins</span>
</a>
<a className="flex items-center justify-between px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-800/50 rounded-xl transition-all" href="#">
<div className="flex items-center gap-3">
<iconify-icon height="20" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm">Markets</span>
</div>
<span className="bg-red-500/20 text-red-400 text-xs font-medium px-1.5 py-0.5 rounded">2</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-800/50 rounded-xl transition-all" href="#">
<iconify-icon height="20" icon="solar:transfer-horizontal-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm">Trading</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-800/50 rounded-xl transition-all" href="#">
<iconify-icon height="20" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm">Transactions</span>
</a>
<a className="flex items-center justify-between px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-800/50 rounded-xl transition-all" href="#">
<div className="flex items-center gap-3">
<iconify-icon height="20" icon="solar:square-academic-cap-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm">Academy</span>
</div>
<span className="bg-blue-600 text-white text-xs font-medium px-1.5 py-0.5 rounded">PRO</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-800/50 rounded-xl transition-all" href="#">
<iconify-icon height="20" icon="solar:database-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm">API Data</span>
</a>
</div>
<div className="mt-8 rounded-2xl glass-panel p-4 border border-white/5">
<div className="flex items-center gap-2 mb-2 text-white">
<iconify-icon className="text-amber-400" height="16" icon="solar:cookie-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm font-medium">Cookies</span>
</div>
<p className="text-xs text-gray-400 leading-relaxed mb-3">
                    We use cookies to customize content and ads.
                </p>
<div className="flex gap-2">
<button className="flex-1 bg-dark-900 border border-dark-600 text-xs py-2 rounded-lg hover:bg-dark-700 transition text-gray-300">Deny</button>
<button className="flex-1 bg-white text-dark-900 font-medium text-xs py-2 rounded-lg hover:bg-gray-100 transition">Accept</button>
</div>
</div>
<div className="mt-4 bg-dark-800 p-1 rounded-xl flex border border-dark-700/50">
<button className="flex-1 bg-dark-600 text-white text-xs py-2 rounded-lg font-medium">Wallet</button>
<button className="flex-1 text-gray-500 text-xs py-2 hover:text-white transition">Pools</button>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col h-full overflow-hidden">
<header className="h-20 flex items-center justify-between px-6 lg:px-8 bg-dark-900 border-b border-dark-700/30 shrink-0">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Profile" className="w-10 h-10 rounded-full border-2 border-dark-700 object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-dark-900 rounded-full"></div>
</div>
<div className="hidden sm:block">
<div className="text-xs text-gray-500 flex items-center gap-1">
                        @anthony23 <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded ml-1 font-medium">PRO</span>
</div>
<div className="text-sm text-white font-medium">Anthony Marcelo</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="relative p-2.5 text-gray-400 hover:text-white transition rounded-xl border border-dark-700 bg-dark-800/50">
<iconify-icon height="18" icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">2</span>
</button>
<div className="relative hidden lg:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" height="16" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<input className="bg-dark-800 border border-dark-700 text-sm rounded-xl pl-10 pr-4 py-2.5 w-56 focus:outline-none focus:border-dark-600 placeholder-gray-600 text-gray-300" placeholder="Search..." type="text"/>
</div>
<button className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-gray-400 bg-dark-800 border border-dark-700 rounded-xl hover:text-white hover:bg-dark-700 transition">
<iconify-icon height="16" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="hidden sm:inline">Settings</span>
</button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-4 lg:p-8">
<div className="max-w-7xl mx-auto space-y-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-5 bg-dark-800 rounded-2xl p-6 border border-dark-700/50">
<div className="flex justify-between items-start mb-6">
<div>
<div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
<iconify-icon height="14" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                    All Assets
                                </div>
<h2 className="text-lg text-white font-medium tracking-tight">My Balance</h2>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 bg-dark-700 text-xs text-gray-300 rounded-lg border border-dark-600 flex items-center gap-1">
                                    24h
                                    <iconify-icon height="14" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
<button className="p-1.5 text-gray-500 hover:text-white transition">
<iconify-icon height="18" icon="solar:eye-closed-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<div className="mb-4">
<h3 className="text-3xl font-semibold text-white tracking-tight">$164,802.43</h3>
<div className="flex items-center gap-3 mt-2">
<span className="flex items-center gap-1 bg-blue-500/10 text-blue-400 text-xs font-medium px-2 py-1 rounded-lg">
<iconify-icon height="14" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                    +$3,948.23 (17.03%)
                                </span>
<span className="text-xs text-gray-500">vs last week</span>
</div>
</div>
<div className="h-44 w-full mt-4">
<canvas id="balanceChart"></canvas>
</div>
</div>
<div className="lg:col-span-7 bg-dark-800 rounded-2xl p-6 border border-dark-700/50">
<div className="flex justify-between items-center mb-6">
<div>
<div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
<iconify-icon height="14" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                    Last 24 hours
                                </div>
<div className="flex items-center gap-3">
<h2 className="text-lg text-white font-medium tracking-tight">Top Coins</h2>
<span className="bg-dark-700 text-gray-400 text-xs px-2 py-1 rounded-lg border border-dark-600">3 Assets</span>
</div>
</div>
<button className="px-3 py-2 bg-blue-600/10 text-blue-400 border border-blue-600/20 text-xs font-medium rounded-lg hover:bg-blue-600 hover:text-white transition flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Add to watchlist
                            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-dark-900/50 rounded-xl p-4 border border-dark-700 hover:border-dark-600 transition">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-amber-500/15 rounded-xl flex items-center justify-center text-amber-500">
<iconify-icon height="24" icon="solar:bitcoin-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-500">BTC</div>
<div className="text-sm font-medium text-white">Bitcoin</div>
</div>
</div>
<div className="flex justify-between items-end mb-3">
<div>
<div className="text-lg font-semibold text-white">0.8230</div>
<div className="text-xs text-gray-500">$57,096.48</div>
</div>
<span className="text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg text-xs font-medium">+1.63%</span>
</div>
<div className="h-12 w-full">
<canvas id="btcChart"></canvas>
</div>
</div>
<div className="bg-dark-900/50 rounded-xl p-4 border border-dark-700 hover:border-dark-600 transition">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-violet-500/15 rounded-xl flex items-center justify-center text-violet-400">
<iconify-icon height="24" icon="solar:diamond-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-500">ETH</div>
<div className="text-sm font-medium text-white">Ethereum</div>
</div>
</div>
<div className="flex justify-between items-end mb-3">
<div>
<div className="text-lg font-semibold text-white">2.9383</div>
<div className="text-xs text-gray-500">$10,793.64</div>
</div>
<span className="text-red-400 bg-red-500/10 px-2 py-1 rounded-lg text-xs font-medium">-0.84%</span>
</div>
<div className="h-12 w-full">
<canvas id="ethChart"></canvas>
</div>
</div>
<div className="bg-dark-900/50 rounded-xl p-4 border border-dark-700 hover:border-dark-600 transition">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-teal-400/20 rounded-xl flex items-center justify-center">
<span className="font-semibold text-xs bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">SOL</span>
</div>
<div>
<div className="text-xs text-gray-500">SOL</div>
<div className="text-sm font-medium text-white">Solana</div>
</div>
</div>
<div className="flex justify-between items-end mb-3">
<div>
<div className="text-lg font-semibold text-white">419.68</div>
<div className="text-xs text-gray-500">$67,108.32</div>
</div>
<span className="text-red-400 bg-red-500/10 px-2 py-1 rounded-lg text-xs font-medium">-3.09%</span>
</div>
<div className="h-12 w-full">
<canvas id="solChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6">
<div className="lg:col-span-5 bg-dark-800 rounded-2xl p-6 border border-dark-700/50">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg text-white font-medium tracking-tight">Markets</h2>
<button className="text-xs text-gray-500 hover:text-white transition">View all</button>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-xl hover:bg-dark-700/30 transition cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-amber-500/15 rounded-lg flex items-center justify-center text-amber-500">
<iconify-icon height="20" icon="solar:bitcoin-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Bitcoin</div>
<div className="text-xs text-gray-500">BTC</div>
</div>
</div>
<div className="w-20 h-8">
<canvas id="marketChart1"></canvas>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$66,971.32</div>
<div className="text-xs text-emerald-400">+1.63%</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl hover:bg-dark-700/30 transition cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-violet-500/15 rounded-lg flex items-center justify-center text-violet-400">
<iconify-icon height="20" icon="solar:diamond-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Ethereum</div>
<div className="text-xs text-gray-500">ETH</div>
</div>
</div>
<div className="w-20 h-8">
<canvas id="marketChart2"></canvas>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$3,481.47</div>
<div className="text-xs text-red-400">-0.69%</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl hover:bg-dark-700/30 transition cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-emerald-500/15 rounded-lg flex items-center justify-center text-emerald-500 font-medium text-xs">
                                        BCH
                                    </div>
<div>
<div className="text-sm font-medium text-white">Bitcoin Cash</div>
<div className="text-xs text-gray-500">BCH</div>
</div>
</div>
<div className="w-20 h-8">
<canvas id="marketChart3"></canvas>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$430.66</div>
<div className="text-xs text-red-400">-3.95%</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 bg-dark-800 rounded-2xl p-6 border border-dark-700/50">
<div className="flex justify-between items-center mb-6">
<h2 className="text-lg text-white font-medium tracking-tight">Quick Swap</h2>
<button className="p-1.5 text-gray-500 hover:text-white transition">
<iconify-icon height="16" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
<div className="bg-dark-900 rounded-xl p-4 border border-dark-700">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-500">Send</span>
<span className="text-xs text-gray-500">Balance: 219.48</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon height="16" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-white flex items-center gap-1">
                                        TON
                                        <iconify-icon className="text-gray-500" height="14" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</span>
</div>
<span className="text-xl font-semibold text-white">54.87</span>
</div>
</div>
<div className="py-6 relative">
<input className="w-full" max="100" min="0" type="range" value="25"/>
<div className="flex justify-between text-xs text-gray-600 mt-2">
<span>0%</span>
<span className="text-white font-medium">25%</span>
<span>50%</span>
<span>75%</span>
<span>100%</span>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
<button className="bg-dark-600 border border-dark-700 p-2 rounded-xl text-gray-300 hover:text-white transition">
<iconify-icon height="16" icon="solar:sort-vertical-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
<div className="bg-dark-900 rounded-xl p-4 border border-dark-700">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-500">Receive</span>
<span className="text-xs text-gray-500">Balance: 16,203.85</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-teal-500 rounded-lg flex items-center justify-center text-white font-semibold text-xs">T</div>
<span className="text-sm font-medium text-white flex items-center gap-1">
                                        USDT
                                        <iconify-icon className="text-gray-500" height="14" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</span>
</div>
<span className="text-xl font-semibold text-white">436.16</span>
</div>
</div>
</div>
<div className="lg:col-span-3 rounded-2xl p-6 border border-dark-700/50 gradient-promo flex flex-col items-center text-center justify-center relative overflow-hidden">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-4 border border-white/10 relative z-10">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-base mb-2 relative z-10 tracking-tight">AI Trading Bots</h3>
<p className="text-xs text-gray-400 mb-6 relative z-10 leading-relaxed">
                            Access staking, smart swap and exclusive features in beta.
                        </p>
<button className="bg-white text-dark-900 font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-gray-100 transition relative z-10 flex items-center gap-2">
                            Try Now
                            <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
