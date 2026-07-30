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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      const ctxRadar = document.getElementById('radarChart');
      new Chart(ctxRadar, {
        type: 'polarArea',
        data: {
          labels: ['BTC', 'ETH', 'ADA', 'DOT', 'LINK', 'UNI', 'AAVE', 'SOL'],
          datasets: [{
            data: [35, 25, 12, 8, 7, 5, 4, 4],
            backgroundColor: [
              'rgba(249, 115, 22, 0.6)',
              'rgba(99, 102, 241, 0.6)', 
              'rgba(59, 130, 246, 0.6)',
              'rgba(236, 72, 153, 0.6)',
              'rgba(34, 197, 94, 0.6)',
              'rgba(168, 85, 247, 0.6)',
              'rgba(14, 165, 233, 0.6)',
              'rgba(139, 92, 246, 0.6)'
            ],
            borderColor: [
              'rgba(249, 115, 22, 1)',
              'rgba(99, 102, 241, 1)',
              'rgba(59, 130, 246, 1)', 
              'rgba(236, 72, 153, 1)',
              'rgba(34, 197, 94, 1)',
              'rgba(168, 85, 247, 1)',
              'rgba(14, 165, 233, 1)',
              'rgba(139, 92, 246, 1)'
            ],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1,
          scales: { 
            r: { 
              grid: { color: 'rgba(255,255,255,0.08)' }, 
              angleLines: { color: 'rgba(255,255,255,0.08)' }, 
              ticks: { display: false }, 
              pointLabels: { 
                display: true,
                color: 'rgba(255,255,255,0.8)',
                font: { size: 11, family: 'Inter' }
              } 
            } 
          },
          plugins: { 
            legend: { display: false }, 
            tooltip: { enabled: true } 
          }
        }
      });

      const ctxLine = document.getElementById('lineChart');
      new Chart(ctxLine, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            data: [42100, 43200, 41800, 44500, 43900, 45100, 43800],
            borderColor: '#f97316',
            backgroundColor: 'rgba(249, 115, 22, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#f97316',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2.5,
          scales: {
            x: { 
              grid: { display: false }, 
              ticks: { 
                color: '#64748b', 
                font: { family: 'Inter', size: 11 } 
              } 
            },
            y: { 
              display: false,
              min: 40000,
              max: 46000
            }
          },
          plugins: { 
            legend: { display: false }, 
            tooltip: { 
              enabled: true,
              backgroundColor: 'rgba(0,0,0,0.8)',
              titleColor: '#ffffff',
              bodyColor: '#ffffff'
            } 
          }
        }
      });
    });
  
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
      
<div className="flex gap-6 min-w-max justify-center h-screen items-center">

<div className="w-80 sm:w-96 h-[700px] flex-shrink-0 h-[720px] bg-gradient-to-br from-slate-800/85 to-indigo-900/85 border-white/10 border rounded-3xl shadow-2xl backdrop-blur-lg">
<div className="flex items-center justify-between px-6 pt-6">
<button className="p-2 rounded-full hover:bg-white/10 transition-all duration-200">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<div className="text-center">
<p className="text-xs text-slate-400">Total Portfolio</p>
<p className="text-lg font-bold">$47,832.56</p>
</div>
<button className="p-2 rounded-full hover:bg-white/10 transition-all duration-200">
<svg className="lucide lucide-bell w-6 h-6" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
<div className="px-6 mt-8">
<h2 className="text-2xl font-bold">Market Analysis</h2>
<p className="text-sm text-slate-400 mt-1">Asset allocation & performance</p>
<div className="flex items-center gap-2 mt-3">
<div className="flex items-center gap-1">
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-emerald-400 text-sm font-semibold">+12.4%</span>
</div>
<span className="text-slate-400 text-sm">24h change</span>
</div>
</div>
<div className="mt-6 px-6">
<div className="h-64 w-full justify-center">
<canvas className="w-full h-full ml-auto mr-auto" height="512" id="radarChart" style={{display: `block`, boxSizing: `border-box`, height: `256px`, width: `256px`}} width="512"></canvas>
</div>
</div>
<div className="px-6 mt-6">
<div className="grid grid-cols-2 gap-4 text-center">
<div className="bg-white/5 rounded-xl p-3">
<p className="text-xs text-slate-400">Top Performer</p>
<p className="font-semibold text-sm">Ethereum</p>
<p className="text-emerald-400 text-xs">+24.5%</p>
</div>
<div className="bg-white/5 rounded-xl p-3">
<p className="text-xs text-slate-400">Holdings</p>
<p className="font-semibold text-sm">8 Assets</p>
<p className="text-blue-400 text-xs">Diversified</p>
</div>
</div>
</div>
<div className="flex mt-8 pr-8 pl-8 items-center justify-between">
<button className="p-3 rounded-full hover:bg-white/10 transition-all duration-200 group">
<svg className="lucide lucide-wallet w-6 h-6 group-hover:scale-110 transition-transform" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</button>
<button className="p-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-xl hover:scale-110 transition-all duration-200">
<svg className="lucide lucide-plus w-6 h-6 text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="p-3 rounded-full hover:bg-white/10 transition-all duration-200 group">
<svg className="lucide lucide-settings w-6 h-6 group-hover:rotate-45 transition-transform" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>

<div className="w-80 sm:w-96 h-[840px] overflow-hidden flex-shrink-0 bg-gradient-to-br from-slate-800/95 to-indigo-900/95 border-white/10 border rounded-3xl shadow-2xl backdrop-blur-lg">
<div className="flex pt-6 pr-6 pl-6 items-center justify-between">
<button className="p-2 rounded-full hover:bg-white/10 transition-all duration-200">
<svg className="lucide lucide-arrow-left w-6 h-6" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="text-center">
<p className="text-xs text-slate-400">Current Price</p>
<p className="text-sm font-bold">$43,247.89</p>
</div>
<button className="p-2 rounded-full hover:bg-white/10 transition-all duration-200">
<svg className="lucide lucide-share w-6 h-6" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
</button>
</div>
<div className="flex gap-4 mt-6 pr-6 pl-6 items-center">
<div className="p-4 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl shadow-lg">
<svg className="lucide lucide-bitcoin w-12 h-12 text-white" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
</div>
<div className="flex-1">
<h3 className="font-bold text-xl">Bitcoin</h3>
<p className="text-sm text-slate-400 max-w-[200px] leading-relaxed">The world's first cryptocurrency and digital gold standard</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs font-medium">BTC</span>
<span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-md text-xs font-medium">Bullish</span>
</div>
</div>
</div>
<div className="px-6 mt-6 flex items-center justify-between text-sm">
<span className="text-slate-400">01 / 08 Assets</span>
<div className="flex gap-1">
<div className="h-1 w-6 bg-orange-500 rounded-full"></div>
<div className="h-1 w-2 bg-slate-600 rounded-full"></div>
<div className="h-1 w-2 bg-slate-600 rounded-full"></div>
</div>
</div>
<div className="px-6 mt-6">
<h4 className="font-bold text-xl">Performance Analytics</h4>
<p className="mt-1 text-sm text-slate-400">7-day price movement & market sentiment</p>
<div className="flex items-center gap-1 mt-3">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-slate-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="ml-2 text-xs text-slate-400">4.2/5 Investor Rating</span>
</div>
</div>
<div className="mt-6 pr-6 pl-6">
<div className="h-40 w-full">
<canvas className="w-full h-full" height="267" id="lineChart" style={{display: `block`, boxSizing: `border-box`, height: `133px`, width: `334px`}} width="668"></canvas>
</div>
</div>
<div className="px-6 mt-6 flex items-center justify-between">
<h4 className="font-bold text-xl">Key Metrics</h4>
<div className="flex gap-1">
<button className="h-2 w-2 rounded-full bg-orange-500"></button>
<button className="h-2 w-2 rounded-full bg-slate-500"></button>
<button className="h-2 w-2 rounded-full bg-slate-500"></button>
</div>
</div>
<div className="grid grid-cols-3 gap-3 mt-4 pr-6 pl-6">
<div className="p-4 bg-slate-800/80 rounded-xl border border-white/5">
<p className="text-xs text-slate-400">24h Volume</p>
<p className="font-bold text-sm mt-1">$28.4B</p>
<p className="text-emerald-400 text-xs mt-1 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>+5.2%
          </p>
</div>
<div className="p-4 bg-slate-800/80 rounded-xl border border-white/5">
<p className="text-xs text-slate-400">Market Cap</p>
<p className="font-bold text-sm mt-1">$847B</p>
<p className="text-orange-400 text-xs mt-1 flex items-center gap-1">
<svg className="lucide lucide-minus w-3 h-3" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>Stable
          </p>
</div>
<div className="p-4 bg-slate-800/80 rounded-xl border border-white/5">
<p className="text-xs text-slate-400">Your Holdings</p>
<p className="font-bold text-sm mt-1">0.285 BTC</p>
<p className="text-emerald-400 text-xs mt-1 flex items-center gap-1">
<svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>+$1,247
          </p>
</div>
</div>
<div className="px-6 mt-6">
<button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          Trade Bitcoin
        </button>
</div>
</div>
</div>


    </>
  );
}
