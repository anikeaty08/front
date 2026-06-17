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
      
    // Activate Lucide icons
    lucide.createIcons();

    // Bar Chart
    const ctx = document.getElementById('spendingChart');
    const spendingChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Groceries', 'Transport', 'Entertainment', 'Bills'],
        datasets: [{
          label: 'Amount',
          data: [450, 150, 200, 500],
          backgroundColor: ['#2B5CE6', '#4B7BF5', '#2B5CE6', '#4B7BF5'],
          borderRadius: 6,
          barThickness: 32
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1A1F36',
            titleFont: { size: 14, weight: 600, family: 'Roboto' },
            bodyFont: { size: 14, weight: 400, family: 'Roboto' },
            padding: 8,
            displayColors: false,
            callbacks: {
              label: ctx => `$${ctx.parsed.y}`
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Roboto', size: 14 } } },
          y: { display: false }
        }
      }
    });

    // Fade-in staggered animation
    window.addEventListener('load', () => {
      document.querySelectorAll('.stagger-fade').forEach((el, i) => {
        setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-4');
          el.classList.add('transition-all', 'duration-500');
        }, i * 120);
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
      

<div className="relative w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[34px] bg-black/90 rounded-b-xl z-20"></div>

<div className="absolute inset-0 flex flex-col">

<header className="flex items-center justify-between px-6 pt-6 pb-4 backdrop-blur-sm">
<h1 className="text-[32px] font-semibold tracking-tight text-[#2B5CE6] stagger-fade opacity-0 translate-y-4">ClariFi</h1>
<button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#F0F3FA] transition-colors active:scale-95">
<i className="w-7 h-7 text-neutral-400" data-lucide="bell"></i>
</button>
</header>

<main className="flex-1 overflow-y-auto px-6 space-y-6 pb-28">

<section className="bg-white rounded-2xl shadow-sm p-4 stagger-fade opacity-0 translate-y-4">
<h2 className="text-[24px] font-semibold tracking-tight mb-2">Monthly Spending</h2>
<div className="h-56 relative">
<canvas id="spendingChart"></canvas>
</div>
</section>

<section className="grid grid-cols-2 gap-4 stagger-fade opacity-0 translate-y-4">

<div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col justify-between">
<h3 className="text-[18px] font-semibold mb-1">Current Balance</h3>
<p className="text-[24px] font-semibold text-[#00C896]">$5,230.50</p>
</div>

<div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col justify-between">
<h3 className="text-[18px] font-semibold mb-1">Budget Remaining</h3>
<p className="text-[24px] font-semibold text-[#2B5CE6]">$750.00</p>
</div>
</section>

<section className="stagger-fade opacity-0 translate-y-4">
<h2 className="text-[24px] font-semibold tracking-tight mb-4">Recent Activity</h2>
<ul className="bg-white rounded-2xl shadow-sm divide-y divide-[#E5EAF2]">

<li className="flex items-center justify-between px-4 py-3">
<div>
<p className="text-[16px]">Starbucks</p>
<p className="text-[14px] text-neutral-500">Jun 22</p>
</div>
<p className="text-[16px] font-medium text-[#1A1F36]">-$5.75</p>
</li>
<li className="flex items-center justify-between px-4 py-3">
<div>
<p className="text-[16px]">Grocery Store</p>
<p className="text-[14px] text-neutral-500">Jun 21</p>
</div>
<p className="text-[16px] font-medium text-[#1A1F36]">-$78.20</p>
</li>
<li className="flex items-center justify-between px-4 py-3">
<div>
<p className="text-[16px]">Netflix</p>
<p className="text-[14px] text-neutral-500">Jun 19</p>
</div>
<p className="text-[16px] font-medium text-[#1A1F36]">-$15.99</p>
</li>
<li className="flex items-center justify-between px-4 py-3">
<div>
<p className="text-[16px]">Salary</p>
<p className="text-[14px] text-neutral-500">Jun 16</p>
</div>
<p className="text-[16px] font-medium text-[#00C896]">+$3,200.00</p>
</li>
<li className="flex items-center justify-between px-4 py-3">
<div>
<p className="text-[16px]">Uber</p>
<p className="text-[14px] text-neutral-500">Jun 15</p>
</div>
<p className="text-[16px] font-medium text-[#1A1F36]">-$24.50</p>
</li>
</ul>
</section>
</main>

<nav className="absolute bottom-0 left-0 right-0 bg-white shadow-[0_-2px_6px_rgba(0,0,0,0.05)]">
<div className="grid grid-cols-4">

<button aria-label="Dashboard" className="flex flex-col items-center justify-center py-3 active:scale-95">
<i className="w-7 h-7 text-[#2B5CE6]" data-lucide="home"></i>
<span className="text-[16px] font-medium text-[#2B5CE6]">Dashboard</span>
</button>

<button aria-label="Transactions" className="flex flex-col items-center justify-center py-3 active:scale-95">
<i className="w-7 h-7 text-neutral-400" data-lucide="list"></i>
<span className="text-[16px] font-medium text-neutral-400">Transactions</span>
</button>

<button aria-label="Budgets" className="flex flex-col items-center justify-center py-3 active:scale-95">
<i className="w-7 h-7 text-neutral-400" data-lucide="pie-chart"></i>
<span className="text-[16px] font-medium text-neutral-400">Budgets</span>
</button>

<button aria-label="Profile" className="flex flex-col items-center justify-center py-3 active:scale-95">
<i className="w-7 h-7 text-neutral-400" data-lucide="user"></i>
<span className="text-[16px] font-medium text-neutral-400">Profile</span>
</button>
</div>
</nav>
</div>
</div>



    </>
  );
}
