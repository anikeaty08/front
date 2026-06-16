import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();

    // Initialize mini charts
    const createMiniChart = (canvasId, color, data) => {
      const ctx = document.getElementById(canvasId).getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({length: 20}, (_, i) => i),
          datasets: [{
            data: data,
            borderColor: color,
            backgroundColor: color + '20',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { display: false }
          },
          elements: { point: { radius: 0 } }
        }
      });
    };

    // Generate sample data and create charts
    setTimeout(() => {
      const generateData = () => Array.from({length: 20}, () => Math.random() * 100);
      
      createMiniChart('chart1', '#10b981', generateData());
      createMiniChart('chart2', '#f43f5e', generateData());
      createMiniChart('chart3', '#06b6d4', generateData());
    }, 100);

    // Toggle functionality
    document.getElementById('autoRefreshToggle').addEventListener('change', function() {
      console.log('Auto-refresh toggled:', this.checked);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%"></iframe></div>
<div className="w-full max-w-7xl lg:rounded-3xl overflow-hidden opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border rounded-2xl shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] backdrop-blur-sm shadow-black/20 bg-gray-950/90 border-gray-800/50">

<header className="flex lg:px-8 border-b pt-4 pr-4 pb-4 pl-4 backdrop-blur items-center justify-between bg-gray-950/80 border-gray-800/50">
<div className="flex items-center gap-4">
<div className="flex items-center gap-3">
<div className="">
<span className="lg:text-xl text-lg font-semibold tracking-tight font-sans">Quant</span>
<span className="hidden sm:block text-xs -mt-1 text-gray-400 font-sans">Analytics Platform</span>
</div>
</div>
<nav className="hidden xl:flex items-center gap-1 ml-8">
<a className="px-3 py-2 rounded-lg text-sm font-medium bg-pink-500/10 ring-1 ring-pink-500/20 transition-all text-pink-400 font-sans" href="#">Dashboard</a>
<a className="px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-gray-800/60 font-sans" href="#">Market Scanner</a>
<a className="transition-all text-sm font-medium rounded-lg pt-2 pr-3 pb-2 pl-3 hover:bg-gray-800/60 font-sans" href="#">Trade Terminal</a>
<a className="transition-all text-sm font-medium rounded-lg pt-2 pr-3 pb-2 pl-3 hover:bg-gray-800/60 font-sans" href="#">Portfolio</a>
</nav>
</div>
<div className="flex items-center gap-2 lg:gap-3">
<div className="hidden lg:flex items-center gap-3">
<span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 ring-1 ring-blue-500/20 text-blue-400 font-sans">
<div className="w-2 h-2 rounded-full animate-pulse bg-blue-400"></div>
            Live Data
          </span>
<span className="text-sm text-gray-400 font-sans">|</span>
<span className="text-sm font-medium text-gray-300 font-sans">$2,847,392</span>
</div>
<button className="p-2 rounded-lg transition-colors hover:bg-gray-800/60"><svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></button>
<button className="p-2 rounded-lg transition-colors hover:bg-gray-800/60"><svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></button>
<button className="p-2 rounded-lg transition-colors hover:bg-gray-800/60"><svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
<div className="flex items-center gap-3 pl-3 border-l border-gray-700/50">
<img alt="Alex Chen" className="w-8 h-8 lg:w-9 lg:h-9 rounded-full ring-2 ring-pink-500/30 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6936fdd3-ee60-4044-8069-3086eef9d938_320w.jpg"/>
<div className="hidden sm:block">
<div className="text-sm font-medium text-gray-200 font-sans">Alya Chen</div>
<div className="text-xs text-gray-400 font-sans">Premium Trader</div>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</header>

<main className="lg:space-y-8 lg:px-8 pt-6 pr-4 pb-8 pl-4 space-y-6">

<section className="grid grid-cols-2 lg:grid-cols-4 gap-4 opacity-0 animate-[slideInUp_0.6s_ease-out_0.1s_forwards]">
<div className="bg-gradient-to-br rounded-xl p-4 lg:p-5 border transition-colors from-gray-900/80 to-gray-900/40 border-gray-800/50 hover:border-gray-700/50">
<div className="flex items-center justify-between mb-3">
<svg className="lucide lucide-trending-up w-5 h-5 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-medium bg-blue-500/10 px-2 py-1 rounded-full text-blue-400 font-sans">+2.4%</span>
</div>
<div className="text-xl lg:text-2xl mb-1 text-gray-100 font-bricolage font-semibold">$47,392</div>
<div className="text-xs text-gray-400 font-sans">Total Portfolio</div>
</div>
<div className="bg-gradient-to-br rounded-xl p-4 lg:p-5 border transition-colors from-gray-900/80 to-gray-900/40 border-gray-800/50 hover:border-gray-700/50">
<div className="flex items-center justify-between mb-3">
<svg className="lucide lucide-activity w-5 h-5 text-blue-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-xs font-medium bg-pink-500/10 px-2 py-1 rounded-full text-pink-400 font-sans">Live</span>
</div>
<div className="text-xl lg:text-2xl mb-1 text-gray-100 font-bricolage font-semibold">247</div>
<div className="text-xs text-gray-400 font-sans">Active Positions</div>
</div>
<div className="bg-gradient-to-br rounded-xl p-4 lg:p-5 border transition-colors from-gray-900/80 to-gray-900/40 border-gray-800/50 hover:border-gray-700/50">
<div className="flex items-center justify-between mb-3">
<svg className="lucide lucide-target w-5 h-5 text-orange-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-xs font-medium bg-blue-500/10 px-2 py-1 rounded-full text-blue-400 font-sans">85.2%</span>
</div>
<div className="text-xl lg:text-2xl mb-1 text-gray-100 font-bricolage font-semibold">$8,247</div>
<div className="text-xs text-gray-400 font-sans">Today's P&amp;L</div>
</div>
<div className="bg-gradient-to-br rounded-xl p-4 lg:p-5 border transition-colors from-gray-900/80 to-gray-900/40 border-gray-800/50 hover:border-gray-700/50">
<div className="flex items-center justify-between mb-3">
<svg className="lucide lucide-zap w-5 h-5 text-purple-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs font-medium bg-pink-500/10 px-2 py-1 rounded-full text-pink-400 font-sans">A+</span>
</div>
<div className="text-xl lg:text-2xl mb-1 text-gray-100 font-bricolage font-semibold">94.7</div>
<div className="text-xs text-gray-400 font-sans">Risk Score</div>
</div>
</section>

<section className="bg-gradient-to-br rounded-xl lg:rounded-2xl p-6 lg:p-8 border opacity-0 animate-[slideInUp_0.6s_ease-out_0.2s_forwards] from-gray-900/60 via-gray-900/40 to-gray-800/40 border-gray-800/50">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
<div>
<h2 className="text-xl lg:text-2xl tracking-tight mb-2 font-bricolage font-semibold">Market Sentiment Heatmap</h2>
<p className="text-sm text-gray-400 font-sans">Real-time volatility analysis across major crypto assets</p>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors border bg-gray-800/60 hover:bg-gray-800/80 border-gray-700/50 font-sans">
                Bullish/Bearish Momentum
                <svg className="lucide lucide-chevron-down w-4 h-4 opacity-70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<button className="p-2 rounded-lg transition-colors border hover:bg-gray-800/60 border-gray-700/50">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</button>
<button className="p-2 rounded-lg transition-colors border hover:bg-gray-800/60 border-gray-700/50">
<svg className="lucide lucide-refresh-cw w-4 h-4" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</button>
</div>
</div>

<div className="rounded-xl p-6 border bg-gray-950/40 border-gray-800/30">
<div className="grid grid-cols-6 lg:grid-cols-8 gap-2 mb-6">

<div className="aspect-square flex text-xs font-semibold bg-blue-600/80 rounded-lg items-center justify-center font-sans">BTC</div>
<div className="aspect-square rounded-lg bg-blue-500/60 flex items-center justify-center text-xs font-semibold font-sans">ETH</div>
<div className="aspect-square rounded-lg flex items-center justify-center text-xs font-semibold bg-purple-600/80 font-sans">ADA</div>
<div className="aspect-square rounded-lg flex items-center justify-center text-xs font-semibold bg-blue-400/40 font-sans">SOL</div>
<div className="aspect-square rounded-lg bg-purple-500/60 flex items-center justify-center text-xs font-semibold font-sans">DOT</div>
<div className="aspect-square rounded-lg flex items-center justify-center text-xs font-semibold bg-blue-600/90 font-sans">AVAX</div>
<div className="aspect-square rounded-lg flex items-center justify-center text-xs font-semibold bg-purple-400/50 font-sans">LINK</div>
<div className="aspect-square rounded-lg bg-blue-500/70 flex items-center justify-center text-xs font-semibold font-sans">MATIC</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-purple-600"></div>
<span className="text-xs text-gray-400 font-sans">Strong Bearish</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-purple-400/50"></div>
<span className="text-xs text-gray-400 font-sans">Bearish</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-blue-400/40"></div>
<span className="text-xs text-gray-400 font-sans">Bullish</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-blue-600"></div>
<span className="text-xs text-gray-400 font-sans">Strong Bullish</span>
</div>
</div>
<span className="text-xs text-gray-500 font-sans">Last updated: 2 mins ago</span>
</div>
</div>

<div className="mt-6 flex flex-col lg:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors text-sm border-gray-700/50 hover:bg-gray-800/60 font-sans">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
              Previous Period
            </button>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm border-gray-700/50 bg-gray-800/30">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<input className="focus:outline-none w-32 text-sm bg-transparent" type="date" value="2024-01-15"/>
</div>
<span className="text-gray-400 font-sans">to</span>
<div className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm border-gray-700/50 bg-gray-800/30">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<input className="focus:outline-none w-32 text-sm bg-transparent" type="date" value="2024-01-15"/>
</div>
</div>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors text-sm border-gray-700/50 hover:bg-gray-800/60 font-sans">
              Next Period
              <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-400 font-sans">Timeframe:</span>
<select className="px-3 py-1.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/40 bg-gray-800/60 border-gray-700/50">
<option className="font-sans">1 Hour</option>
<option className="font-sans">4 Hours</option>
<option className="font-sans">1 Day</option>
<option className="font-sans">1 Week</option>
</select>
</div>
</div>
</section>

<section className="bg-gradient-to-br rounded-xl lg:rounded-2xl p-6 lg:p-8 border opacity-0 animate-[slideInUp_0.6s_ease-out_0.3s_forwards] from-gray-900/60 via-gray-900/40 to-gray-800/40 border-gray-800/50">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
<div>
<h2 className="text-xl lg:text-2xl tracking-tight mb-2 font-bricolage font-semibold">Advanced Analytics Dashboard</h2>
<p className="text-sm text-gray-400 font-sans">Multi-timeframe deviation analysis with algorithmic signals</p>
</div>
<div className="flex items-center gap-4">
<label className="flex items-center gap-3 select-none cursor-pointer">
<span className="text-sm text-gray-400 font-sans">Auto-refresh data</span>
<div className="relative">
<input className="sr-only peer" id="autoRefreshToggle" type="checkbox"/>
<div className="w-11 h-6 rounded-full peer-checked:bg-pink-600 transition-colors bg-gray-700/60"></div>
<div className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5 shadow-sm bg-white"></div>
</div>
</label>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-pink-600 hover:bg-pink-700 text-white font-sans">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
              Export Data
            </button>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

<div className="group rounded-xl bg-gradient-to-br p-6 border transition-all hover:shadow-lg hover:shadow-blue-500/5 from-gray-900/80 to-gray-800/40 border-gray-800/50 hover:border-gray-700/70">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-sm font-medium text-gray-300 font-sans">1-Minute Scalping</span>
</div>
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="h-24 mb-4">
<canvas className="w-full h-full" height="192" id="chart1" style={{display: 'block', boxSizing: 'border-box', height: '96px', width: '316px'}} width="633"></canvas>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-2xl mb-1 text-blue-400 font-bricolage font-semibold">0.247</div>
<div className="text-xs text-gray-400 font-sans">Deviation Index</div>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-gray-200 font-sans">8,247</div>
<div className="text-xs text-gray-400 font-sans">Signals/Day</div>
</div>
</div>
</div>
<div className="group rounded-xl bg-gradient-to-br p-6 border transition-all hover:shadow-lg hover:shadow-rose-500/5 from-gray-900/80 to-gray-800/40 border-gray-800/50 hover:border-gray-700/70">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-rose-400"></div>
<span className="text-sm font-medium text-gray-300 font-sans">15-Minute Swing</span>
</div>
<svg className="lucide lucide-trending-down w-4 h-4 text-rose-400" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
</div>
<div className="h-24 mb-4">
<canvas className="w-full h-full" height="192" id="chart2" style={{display: 'block', boxSizing: 'border-box', height: '96px', width: '316px'}} width="633"></canvas>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-2xl mb-1 text-rose-400 font-bricolage font-semibold">0.389</div>
<div className="text-xs text-gray-400 font-sans">Deviation Index</div>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-gray-200 font-sans">4,182</div>
<div className="text-xs text-gray-400 font-sans">Signals/Day</div>
</div>
</div>
</div>
<div className="group rounded-xl bg-gradient-to-br p-6 border transition-all hover:shadow-lg hover:shadow-purple-500/5 from-gray-900/80 to-gray-800/40 border-gray-800/50 hover:border-gray-700/70">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<span className="text-sm font-medium text-gray-300 font-sans">1-Hour Trend</span>
</div>
<svg className="lucide lucide-activity w-4 h-4 text-cyan-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="h-24 mb-4">
<canvas className="w-full h-full" height="192" id="chart3" style={{display: 'block', boxSizing: 'border-box', height: '96px', width: '316px'}} width="633"></canvas>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-2xl mb-1 text-purple-400 font-bricolage font-semibold">0.672</div>
<div className="text-xs text-gray-400 font-sans">Deviation Index</div>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-gray-200 font-sans">6,847</div>
<div className="text-xs text-gray-400 font-sans">Signals/Day</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>
<style>
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  </style>


    </>
  );
}
