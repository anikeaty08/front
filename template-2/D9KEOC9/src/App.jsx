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
      
    // Lucide Icons
    lucide.createIcons();

    // Spending Breakdown Chart
    const ctx = document.getElementById('spendingChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Rent', 'Groceries', 'Transport', 'Dining', 'Others'],
        datasets: [{
          data: [1200, 450, 150, 320, 180],
          backgroundColor: ['#2B5CE6','#00C896','#6B5DD3','#F6AD55','#718096'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        plugins: {legend: {display:false}},
        animation: {duration:800, easing:'easeInOutCubic'}
      }
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
      

<header className="flex items-center justify-between px-4 pt-6 pb-4 animate__animated animate__fadeInDown" style={{animationDelay: `.1s`}}>
<h1 className="text-[32px] font-semibold tracking-tight">ClariFi</h1>
<button aria-label="Profile" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md border border-white/30 shadow cursor-pointer hover:ring-2 hover:ring-[#2B5CE6]/40 transition">
<i className="text-[#2B5CE6]" data-lucide="user"></i>
</button>
</header>

<section className="px-4 space-y-4 animate__animated animate__fadeInUp" style={{animationDelay: `.15s`}}>
<div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">

<div className="flex-1 bg-white/60 backdrop-blur-md border border-white/30 shadow rounded-2xl p-6">
<p className="text-sm text-[#718096] mb-1">Total Balance</p>
<p className="text-[24px] font-semibold tracking-tight">$8,450.23</p>
</div>

<div className="flex-1 bg-white/60 backdrop-blur-md border border-white/30 shadow rounded-2xl p-6">
<p className="text-sm text-[#718096] mb-1">Credit Score</p>
<p className="text-[24px] font-semibold tracking-tight">743</p>
</div>
</div>
</section>

<main className="px-4 mt-6 pb-24 space-y-6">

<div className="bg-white/60 backdrop-blur-md border border-white/30 shadow rounded-2xl p-6 animate__animated animate__fadeInUp" style={{animationDelay: `.2s`}}>
<h2 className="text-[18px] font-semibold tracking-tight mb-4">Spending Breakdown</h2>
<div className="relative w-full h-48">
<canvas className="w-full h-full" id="spendingChart"></canvas>
</div>
</div>

<div className="bg-white/60 backdrop-blur-md border border-white/30 shadow rounded-2xl p-6 animate__animated animate__fadeInUp" style={{animationDelay: `.25s`}}>
<h3 className="text-[18px] font-semibold tracking-tight mb-4">Credit Utilization</h3>
<div className="flex items-center justify-between mb-2">
<span className="text-[16px] font-medium">28%</span>
<span className="text-[14px] text-[#00A76F]">Good</span>
</div>
<div className="w-full bg-gray-200/70 h-3 rounded-full overflow-hidden">
<div className="h-full bg-[#2B5CE6] w-1/3"></div>
</div>
</div>

<div className="bg-white/60 backdrop-blur-md border border-white/30 shadow rounded-2xl p-6 animate__animated animate__fadeInUp" style={{animationDelay: `.3s`}}>
<h3 className="text-[18px] font-semibold tracking-tight mb-4">Budgeting Progress</h3>
<div className="flex items-center justify-between mb-2">
<span className="text-[16px] font-medium">$1,200 / $2,000</span>
<span className="text-[14px] text-[#E53E3E]">60% used</span>
</div>
<div className="w-full bg-gray-200/70 h-3 rounded-full overflow-hidden">
<div className="h-full bg-[#6B5DD3] w-3/5"></div>
</div>
</div>
</main>

<nav className="fixed bottom-0 inset-x-0 h-16 bg-white/80 backdrop-blur-md border-t border-gray-200 flex justify-around items-center animate__animated animate__fadeInUp" style={{animationDelay: `.35s`}}>
<button className="flex flex-col items-center text-[#2B5CE6]">
<i className="w-6 h-6" data-lucide="home"></i>
<span className="text-[12px] mt-1">Home</span>
</button>
<button className="flex flex-col items-center text-[#718096] hover:text-[#2B5CE6] transition">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
<span className="text-[12px] mt-1">Insights</span>
</button>
<button className="flex flex-col items-center text-[#718096] hover:text-[#2B5CE6] transition">
<i className="w-6 h-6" data-lucide="file-text"></i>
<span className="text-[12px] mt-1">Statements</span>
</button>
<button className="flex flex-col items-center text-[#718096] hover:text-[#2B5CE6] transition">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="text-[12px] mt-1">Profile</span>
</button>
</nav>



    </>
  );
}
