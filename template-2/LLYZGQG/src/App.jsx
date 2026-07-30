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



    lucide.createIcons();

    // Chart.js Bar Chart with solid colors
    const ctx = document.getElementById('financeChart').getContext('2d');
    const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Today'];
    const incomeData = [1100, 1350, 980, 1200, 1450, 1280, 1150];
    const expenseData = [800, 900, 750, 1050, 950, 870, 900];

    let financeChart;

    function renderFinanceChart() {
      if (financeChart) financeChart.destroy();
      financeChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Income',
              data: incomeData,
              backgroundColor: '#05daff',
              borderRadius: 6,
              barThickness: 18
            },
            {
              label: 'Expenses',
              data: expenseData,
              backgroundColor: '#7300ff',
              borderRadius: 6,
              barThickness: 18
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => `${ctx.dataset.label}: $${ctx.parsed.y}`
              },
              backgroundColor: '#232746',
              titleColor: '#fff',
              bodyColor: '#fff',
              borderColor: 'rgba(255,255,255,0.15)',
              borderWidth: 1
            }
          },
          scales: {
            y: {
              ticks: { color: 'rgba(255,255,255,0.6)', callback: v => `$${v}` },
              grid: { color: 'rgba(255,255,255,0.07)' },
              beginAtZero: true
            },
            x: {
              ticks: { color: 'rgba(255,255,255,0.6)' },
              grid: { display: false }
            }
          }
        }
      });
    }

    window.addEventListener('resize', () => renderFinanceChart());
    renderFinanceChart();
  
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
      
<div className="spline-container fixed top-0 w-full h-screen -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/untitled-f680ea749fc30deeb5eff5a8b15b2f63" width="100%"></iframe>
</div>

<header className="max-w-7xl mx-auto pt-6 pb-1 flex flex-col md:flex-row items-center justify-between gap-4" style={{animation: `fadeBlurIn 0.75s cubic-bezier(.55,.09,.68,.53) 0.1s both`}}>
<div className="flex items-center gap-2 select-none">
<span className="text-2xl font-bricolage tracking-tighter">Pulseboard</span>
</div>
<nav className="flex items-center gap-8 text-sm font-medium">
<a className="text-white/80 hover:text-white transition focus:outline-none focus:text-white font-sans tracking-tight" href="#">Overview</a>
<a className="text-white/80 hover:text-white transition focus:outline-none focus:text-white font-sans tracking-tight" href="#">Wallets</a>
<a className="text-white/80 hover:text-white transition focus:outline-none focus:text-white font-sans tracking-tight" href="#">Reports</a>
<a className="text-white/80 hover:text-white transition focus:outline-none focus:text-white font-sans tracking-tight" href="#">Automation</a>
<a className="hidden sm:inline text-white/80 hover:text-white transition focus:outline-none focus:text-white font-sans tracking-tight" href="#">Support</a>
</nav>
<div className="flex items-center gap-3 mt-3 md:mt-0">
<a className="flex items-center gap-1 text-white/80 hover:text-white text-sm rounded transition focus:outline-none font-sans tracking-tight" href="#">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        Sign in
      </a>
<a className="inline-flex items-center gap-2 hover:bg-indigo-700 focus:outline-none transition text-white tracking-tight bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-[#05daff] to-[#7300ff] rounded-md pt-2.5 pr-5 pb-2.5 pl-5 shadow" href="#">
<svg className="lucide lucide-arrow-big-right w-5 h-5" data-lucide="arrow-big-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9h6V5l7 7-7 7v-4H6V9z"></path></svg>
        Try Free
      </a>
</div>
</header>
<div className="border-t border-white/10 max-w-7xl mx-auto"></div>

<section className="max-w-3xl mx-auto text-center mt-12 mb-10 px-2" style={{animation: `slideUpFadeBlurIn 0.9s cubic-bezier(.24,.8,.36,1.05) 0.5s both`}}>
<h1 className="text-4xl sm:text-5xl mb-2 font-bricolage tracking-tighter">Instant Access to your <span className="tracking-tighter font-bricolage" style={{background: `linear-gradient(90deg, #05daff, #7300ff)`, webkitBackgroundClip: `text`, webkitTextFillColor: `transparent`}}>Financial Pulse</span></h1>
<p className="text-lg text-white/80 mb-5 font-sans tracking-tight">Monitor all your digital wallets and cards, review spending in real time, and unlock insights for smarter decisions.</p>
<a className="inline-flex items-center gap-2 hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#181a27] font-semibold text-white tracking-tight bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-[#05daff] to-[#7300ff] rounded-lg pt-3 pr-6 pb-3 pl-6 shadow" href="#">
<span className="font-sans tracking-tight">Connect Wallet</span>
</a>
</section>

<main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

<section className="flex flex-col gap-6" style={{animation: `slideLeftFadeBlurIn 1s cubic-bezier(.42,0,.58,1) 1.1s both`}}>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
<div className="flex items-center gap-2 mb-7">
<svg className="lucide lucide-wallet-cards w-5 h-5 text-indigo-400" data-lucide="wallet-cards" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path></svg>
<span className="text-xs text-white/60 font-sans tracking-tight">DIGITAL WALLET</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div>
<div className="text-lg font-sans tracking-tight">BitFlux Wallet</div>
<div className="text-sm text-white/60 font-sans tracking-tight">0x4e...9a21</div>
</div>
</div>
<span className="px-3 py-1 text-xs rounded-full bg-green-600/80 flex items-center gap-1 font-sans tracking-tight">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
            ACTIVE
          </span>
</div>
<div className="mt-6">
<div className="font-sans tracking-tight">Avery Chen</div>
<div className="text-sm text-white/60 font-sans tracking-tight">Multi-asset, 2FA enabled</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
<div className="flex items-center gap-2 mb-7">
<svg className="lucide lucide-credit-card w-5 h-5 text-indigo-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span className="text-xs text-white/60 font-sans tracking-tight">CARD</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div>
<div className="text-lg font-sans tracking-tight">VitaCard</div>
<div className="text-sm text-white/60 font-sans tracking-tight">•••• 1123</div>
</div>
</div>
<span className="px-3 py-1 text-xs rounded-full bg-indigo-500/80 flex items-center gap-1 font-sans tracking-tight">
<svg className="lucide lucide-repeat w-4 h-4" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
            AUTO-PAY
          </span>
</div>
<div className="mt-6 flex justify-between items-end">
<div>
<div className="font-sans tracking-tight">Limit</div>
<div className="text-sm text-white/60 font-sans tracking-tight">$10,000</div>
</div>
<div className="text-right">
<div className="text-lg font-sans tracking-tight">05/2027</div>
<div className="text-sm text-white/60 font-sans tracking-tight">Expires</div>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
<div className="flex items-center gap-2 mb-7">
<svg className="lucide lucide-bitcoin w-5 h-5 text-indigo-400" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
<span className="text-xs text-white/60 font-sans tracking-tight">CRYPTO ACCOUNT</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div>
<div className="text-lg font-sans tracking-tight">Satoshi Vault</div>
<div className="text-sm text-white/60 font-sans tracking-tight">bc1q...7zhp</div>
</div>
</div>
<span className="px-3 py-1 text-xs rounded-full bg-yellow-400/80 text-black flex items-center gap-1 font-sans tracking-tight">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            PRIMARY
          </span>
</div>
<div className="mt-6">
<div className="font-sans tracking-tight">Balance</div>
<div className="text-sm text-white/60 font-sans tracking-tight">0.3125 BTC · $13,800</div>
</div>
</div>
</section>

<section className="flex flex-col gap-8 bg-white/5 border-white/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{animation: `slideRightFadeBlurIn 1s cubic-bezier(.42,0,.58,1) 1.25s both`}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-indigo-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-xs text-white/60 font-sans tracking-tight">OVERVIEW</span>
</div>

<div className="flex flex-col sm:flex-row justify-between gap-6">
<div>
<div className="flex items-center gap-1 text-sm text-white/60 font-sans tracking-tight">
            Today's Net Flow 
            <svg className="lucide lucide-help-circle w-3 h-3" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="text-5xl sm:text-6xl font-bricolage tracking-tighter">$<span className="font-bricolage tracking-tighter" id="todayNet">1,150</span></div>
<div className="flex gap-1 text-xs text-green-400 tracking-tight mt-2 items-center"><svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +5.4%</div>
</div>
<div className="sm:text-right">
<div className="flex items-center gap-1 text-sm text-white/60 font-sans tracking-tight">
            Month Estimate
            <svg className="lucide lucide-help-circle w-3 h-3" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="text-2xl font-bricolage tracking-tighter">$29,500</div>
<div className="flex items-center gap-1 mt-2 text-yellow-300 text-xs font-sans tracking-tight"><svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Forecast</div>
</div>
</div>

<div>
<div className="border border-white/10 rounded-lg overflow-hidden p-4 bg-white/5">
<div className="relative h-56 sm:h-40 md:h-48">
<canvas id="financeChart" style={{maxHeight: `200px`, display: `block`, boxSizing: `border-box`, height: `192px`, width: `476px`}}></canvas>
</div>
<div className="flex justify-between text-xs text-white/60 mt-3">
<span className="flex items-center gap-1 font-sans tracking-tight"><svg className="lucide lucide-arrow-down-right w-3 h-3" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>Expenses</span>
<span className="flex items-center gap-1 font-sans tracking-tight"><svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>Income</span>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-3 text-xs text-white/60 font-sans tracking-tight">
<svg className="lucide lucide-history w-4 h-4 text-indigo-400" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg> RECENT ACTIVITY
        </div>
<ul className="divide-y divide-white/10">
<li className="flex items-center py-2 gap-4">
<div className="flex-shrink-0 w-9 h-9 rounded-md bg-pink-500/20 flex items-center justify-center">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-pink-300" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div className="flex-1">
<div className="font-sans tracking-tight">GroceryMart</div>
<div className="text-xs text-white/60 font-sans tracking-tight">Card · 9:30 AM</div>
</div>
<div className="text-right">
<span className="text-pink-300 font-sans tracking-tight">- $74.22</span>
</div>
</li>
<li className="flex items-center py-2 gap-4">
<div className="flex-shrink-0 w-9 h-9 rounded-md bg-green-500/20 flex items-center justify-center">
<svg className="lucide lucide-badge-dollar-sign w-5 h-5 text-green-300" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<div className="flex-1">
<div className="font-sans tracking-tight">Freelance Payment</div>
<div className="text-xs text-white/60 font-sans tracking-tight">BitFlux · 7:10 AM</div>
</div>
<div className="text-right">
<span className="text-green-300 font-sans tracking-tight">+ $600.00</span>
</div>
</li>
<li className="flex items-center py-2 gap-4">
<div className="flex-shrink-0 w-9 h-9 rounded-md bg-indigo-400/20 flex items-center justify-center">
<svg className="lucide lucide-cloud w-5 h-5 text-indigo-200" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<div className="flex-1">
<div className="font-sans tracking-tight">Cloud Service</div>
<div className="text-xs text-white/60 font-sans tracking-tight">VitaCard · Yesterday</div>
</div>
<div className="text-right">
<span className="text-indigo-200 font-sans tracking-tight">- $42.00</span>
</div>
</li>
</ul>
</div>
</section>
</main>



    </>
  );
}
