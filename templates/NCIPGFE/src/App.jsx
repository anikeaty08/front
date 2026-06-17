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
      
      lucide.createIcons();
      // Chart.js stats
      setTimeout(() => {
        const ctx = document.getElementById('statsChart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
              data: [40, 52, 36, 60, 48, 72, 66],
              borderColor: '#6EE7B7',
              backgroundColor: 'rgba(110,231,183,0.05)',
              tension: 0.5,
              pointBackgroundColor: '#3B82F6',
              pointRadius: 4,
              pointHoverRadius: 6,
              fill: true,
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { display: false },
              y: { display: false, min: 20, max: 80 }
            },
            elements: { line: { borderWidth: 3 } },
            responsive: true,
            maintainAspectRatio: false,
          }
        });
      }, 600);
    
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
      

<header className="w-full max-w-5xl flex items-center justify-between mb-10 animate-fade-in-down" style={{animationDelay: '0.1s'}}>
<div className="flex items-center space-x-2 font-semibold tracking-tight text-2xl select-none">
<span className="bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] bg-clip-text text-transparent">B</span>
<span className="tracking-tight text-white">etify</span>
</div>
<nav className="flex items-center space-x-4 text-sm font-medium">
<a className="hover:text-[#6EE7B7] transition-colors duration-150" href="#">Sports</a>
<a className="hover:text-[#3B82F6] transition-colors duration-150" href="#">Casino</a>
<a className="hover:text-[#6EE7B7] transition-colors duration-150" href="#">Promotions</a>
<a className="hover:text-[#3B82F6] transition-colors duration-150" href="#">Support</a>
</nav>
<div className="flex items-center space-x-2">
<button className="px-4 py-2 rounded-lg bg-[#21212b] hover:bg-[#232334] font-semibold transition-colors duration-150 outline-none border border-[#232334] hover:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]">Log In</button>
<button className="px-4 py-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563eb] font-semibold transition-colors duration-150 outline-none">Sign Up</button>
</div>
</header>
<main className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">

<section className="md:col-span-2 bg-[#18181b] rounded-2xl p-8 shadow-xl border border-[#232334] animate-fade-in-up" style={{animationDelay: '0.3s'}}>

<div className="flex items-center mb-10">
<div className="flex items-center">
<div className="w-8 h-8 bg-[#3B82F6] text-white flex items-center justify-center rounded-full font-semibold shadow-md border-2 border-[#3B82F6]">1</div>
<span className="mx-2 text-[#3B82F6] font-medium">Select Game</span>
</div>
<div className="w-10 h-0.5 bg-[#232334] mx-3"></div>
<div className="flex items-center">
<div className="w-8 h-8 bg-[#232334] text-white flex items-center justify-center rounded-full font-semibold border-2 border-[#232334]">2</div>
<span className="mx-2 text-[#a1a1aa] font-medium">Place Bet</span>
</div>
<div className="w-10 h-0.5 bg-[#232334] mx-3"></div>
<div className="flex items-center">
<div className="w-8 h-8 bg-[#232334] text-white flex items-center justify-center rounded-full font-semibold border-2 border-[#232334]">3</div>
<span className="mx-2 text-[#a1a1aa] font-medium">Payment</span>
</div>
</div>

<div className="space-y-6 animate-fade-in-right" style={{animationDelay: '0.4s'}}>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Live Sports</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

<div className="group cursor-pointer bg-[#232334] p-5 rounded-xl border border-[#232334] hover:border-[#3B82F6] hover:shadow-lg transition-all duration-150 outline-none animate-fade-in-up" style={{animationDelay: '0.45s'}}>
<div className="flex items-center space-x-2 mb-4">
<img alt="football" className="w-10 h-10 rounded-full object-cover shadow border border-[#18181b]" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&amp;fit=facearea&amp;w=48&amp;h=48&amp;facepad=2"/>
<span className="text-lg font-semibold tracking-tight">Football</span>
</div>
<div className="flex flex-col space-y-1 mb-3">
<span className="text-sm text-[#a1a1aa]">Champions League</span>
<span className="text-base font-medium text-[#e0e7ef]">Real Madrid vs Man City</span>
</div>
<div className="flex space-x-3">
<button className="flex-1 px-3 py-1 rounded-lg bg-[#3B82F6] hover:bg-[#2563eb] text-white font-medium transition-colors duration-150 outline-none">Bet</button>
<button className="flex items-center px-2 py-1 rounded-lg hover:bg-[#232334] text-[#a1a1aa] transition-colors duration-150 outline-none" title="View Odds">
<svg className="w-5 h-5" data-lucide="bar-chart-3" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
</div>

<div className="group cursor-pointer bg-[#232334] p-5 rounded-xl border border-[#232334] hover:border-[#6EE7B7] hover:shadow-lg transition-all duration-150 outline-none animate-fade-in-up" style={{animationDelay: '0.5s'}}>
<div className="flex items-center space-x-2 mb-4">
<img alt="basketball" className="w-10 h-10 rounded-full object-cover shadow border border-[#18181b]" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=facearea&amp;w=48&amp;h=48&amp;facepad=2"/>
<span className="text-lg font-semibold tracking-tight">Basketball</span>
</div>
<div className="flex flex-col space-y-1 mb-3">
<span className="text-sm text-[#a1a1aa]">NBA Finals</span>
<span className="text-base font-medium text-[#e0e7ef]">Lakers vs Celtics</span>
</div>
<div className="flex space-x-3">
<button className="flex-1 px-3 py-1 rounded-lg bg-[#6EE7B7] hover:bg-[#4ADE80] text-[#18181b] font-medium transition-colors duration-150 outline-none">Bet</button>
<button className="flex items-center px-2 py-1 rounded-lg hover:bg-[#232334] text-[#a1a1aa] transition-colors duration-150 outline-none" title="View Odds">
<svg className="w-5 h-5" data-lucide="bar-chart-3" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
</div>

<div className="group cursor-pointer bg-[#232334] p-5 rounded-xl border border-[#232334] hover:border-[#a78bfa] hover:shadow-lg transition-all duration-150 outline-none animate-fade-in-up" style={{animationDelay: '0.55s'}}>
<div className="flex items-center space-x-2 mb-4">
<img alt="casino" className="w-10 h-10 rounded-full object-cover shadow border border-[#18181b]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="text-lg font-semibold tracking-tight">Casino</span>
</div>
<div className="flex flex-col space-y-1 mb-3">
<span className="text-sm text-[#a1a1aa]">Live Roulette</span>
<span className="text-base font-medium text-[#e0e7ef]">Vegas Royale</span>
</div>
<div className="flex space-x-3">
<button className="flex-1 px-3 py-1 rounded-lg bg-[#a78bfa] hover:bg-[#8b5cf6] text-white font-medium transition-colors duration-150 outline-none">Play</button>
<button className="flex items-center px-2 py-1 rounded-lg hover:bg-[#232334] text-[#a1a1aa] transition-colors duration-150 outline-none" title="View Odds">
<svg className="w-5 h-5" data-lucide="bar-chart-3" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<aside className="bg-[#18181b] rounded-2xl p-8 shadow-xl border border-[#232334] flex flex-col animate-fade-in-left" style={{animationDelay: '0.6s'}}>
<h3 className="text-xl font-semibold tracking-tight mb-5">Betting Summary</h3>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between">
<span className="text-[#a1a1aa]">Selected Game:</span>
<span className="font-medium text-[#e0e7ef]">Football: Real vs Man City</span>
</div>
<div className="flex items-center justify-between">
<span className="text-[#a1a1aa]">Bet Type:</span>
<span className="font-medium text-[#e0e7ef]">Win</span>
</div>
<div className="flex items-center justify-between">
<span className="text-[#a1a1aa]">Stake</span>
<span className="font-medium text-[#e0e7ef]">$50.00</span>
</div>
<div className="flex items-center justify-between border-t border-[#232334] pt-3">
<span className="text-[#a1a1aa]">Potential Return</span>
<span className="font-semibold text-[#6EE7B7]">$120.00</span>
</div>
</div>
<button className="w-full py-3 rounded-lg bg-[#3B82F6] hover:bg-[#2563eb] font-semibold transition-colors duration-150 outline-none mb-8">Proceed to Payment</button>
<div className="divider border-t border-[#232334] my-4"></div>
<h4 className="text-base font-semibold tracking-tight mb-4">Your Weekly Stats</h4>
<div>
<div className="w-full h-32 bg-[#232334] rounded-lg flex items-center justify-center mb-2 p-2">
<div className="w-full">
<canvas id="statsChart"></canvas>
</div>
</div>
<div className="flex items-center justify-between text-xs text-[#a1a1aa]">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</aside>
</main>

<style>
      @keyframes fade-in-down { 0%{opacity:0;transform:translateY(-24px) scale(.95);} 100%{opacity:1;transform:none;} }
      @keyframes fade-in-up { 0%{opacity:0;transform:translateY(24px) scale(.95);} 100%{opacity:1;transform:none;} }
      @keyframes fade-in-left { 0%{opacity:0;transform:translateX(-24px) scale(.95);} 100%{opacity:1;transform:none;} }
      @keyframes fade-in-right { 0%{opacity:0;transform:translateX(24px) scale(.95);} 100%{opacity:1;transform:none;} }
      .animate-fade-in-down { animation: fade-in-down 0.75s cubic-bezier(.22,1,.36,1) both; }
      .animate-fade-in-up { animation: fade-in-up 0.75s cubic-bezier(.22,1,.36,1) both; }
      .animate-fade-in-left { animation: fade-in-left 0.75s cubic-bezier(.22,1,.36,1) both; }
      .animate-fade-in-right { animation: fade-in-right 0.75s cubic-bezier(.22,1,.36,1) both; }
    </style>


    </>
  );
}
