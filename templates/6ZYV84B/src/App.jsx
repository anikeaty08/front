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
      
    // ParticlesJS
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 }},
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.15, "random": true },
        "size": { "value": 2, "random": true },
        "move": { "enable": true, "speed": 0.4 }
      },
      "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false } } },
      "retina_detect": true
    });

    // Lucide Icons
    lucide.createIcons();

    // Chart.js – Spending Breakdown
    const spendCtx = document.getElementById('spendChart').getContext('2d');
    new Chart(spendCtx, {
      type: 'doughnut',
      data: {
        labels: ['Groceries','Utilities','Rent','Dining'],
        datasets: [{
          data: [320, 150, 600, 250],
          backgroundColor: ['#00C896','rgba(59,130,246,0.8)','rgba(99,102,241,0.8)','rgba(244,63,94,0.8)'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '68%',
        plugins: { legend: { display:false } },
        layout:{padding:0}
      }
    });

    // Chart.js – Credit Utilization Line
    const creditCtx = document.getElementById('creditChart').getContext('2d');
    new Chart(creditCtx, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
          data: [35,40,38,34,30,28],
          tension: 0.4,
          borderColor: '#00C896',
          borderWidth: 2,
          fill: true,
          backgroundColor: 'rgba(0,200,150,0.08)',
          pointRadius: 0
        }]
      },
      options: {
        plugins:{ legend:{display:false} },
        scales:{ x:{display:false}, y:{display:false}}
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
      

<div className="absolute inset-0 -z-10" id="particles-js"></div>

<header className="flex items-center justify-between px-5 pt-6 pb-4">
<h1 className="text-3xl font-semibold tracking-tight" style={{color: '#00C896'}}>ClariFi</h1>
<button aria-label="profile" className="relative">
<img alt="User Avatar" className="h-10 w-10 rounded-full ring-2 ring-[#00C896]/60 object-cover" src="https://source.unsplash.com/48x48/?face"/>
</button>
</header>

<main className="pb-28 space-y-6 px-4">

<section className="grid grid-cols-2 gap-4">

<button className="relative aspect-square rounded-full bg-white/5 backdrop-blur-lg ring-1 ring-white/10 overflow-hidden transition-all duration-300 ease-in-out hover:ring-[#00C896]/70 active:scale-95" id="balanceOrb">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent mix-blend-overlay pointer-events-none"></div>
<div className="flex flex-col items-center justify-center h-full space-y-1">
<span className="text-sm text-white/70">Total Balance</span>
<span className="text-2xl font-semibold tracking-tight">$8,420</span>
</div>
</button>

<button className="relative aspect-square rounded-full bg-white/5 backdrop-blur-lg ring-1 ring-white/10 overflow-hidden transition-all duration-300 ease-in-out hover:ring-[#00C896]/70 active:scale-95" id="creditOrb">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent mix-blend-overlay pointer-events-none"></div>
<div className="flex flex-col items-center justify-center h-full space-y-1">
<span className="text-sm text-white/70">Credit Score</span>
<span className="text-2xl font-semibold tracking-tight">712</span>
</div>
</button>

<button className="relative aspect-square rounded-full bg-white/5 backdrop-blur-lg ring-1 ring-white/10 overflow-hidden transition-all duration-300 ease-in-out hover:ring-[#00C896]/70 active:scale-95 col-span-2" id="spendingOrb">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent mix-blend-overlay pointer-events-none"></div>
<div className="flex flex-col items-center justify-center h-full space-y-1">
<span className="text-sm text-white/70">Monthly Spend</span>
<span className="text-2xl font-semibold tracking-tight">$1,320</span>
</div>
</button>
</section>

<section className="space-y-4">

<div className="relative rounded-3xl p-5 bg-white/5 backdrop-blur-lg ring-1 ring-white/10 overflow-hidden">
<div className="absolute -top-16 -left-16 w-60 h-60 rounded-full bg-[#00C896]/20 blur-3xl"></div>
<h2 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="activity" style={{color: '#00C896'}}></i>
          Spending Breakdown
        </h2>
<div className="flex items-center justify-center">
<canvas className="max-w-[220px]" id="spendChart"></canvas>
</div>
<ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
<li className="flex items-center gap-2">
<span className="inline-block w-3 h-3 rounded-full" style={{background: '#00C896'}}></span>
            Groceries
          </li>
<li className="flex items-center gap-2">
<span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
            Utilities
          </li>
<li className="flex items-center gap-2">
<span className="inline-block w-3 h-3 rounded-full bg-indigo-500"></span>
            Rent
          </li>
<li className="flex items-center gap-2">
<span className="inline-block w-3 h-3 rounded-full bg-rose-500"></span>
            Dining
          </li>
</ul>
</div>

<div className="relative rounded-3xl p-5 bg-white/5 backdrop-blur-lg ring-1 ring-white/10 overflow-hidden">
<div className="absolute -bottom-16 -right-16 w-60 h-60 rounded-full bg-[#00C896]/20 blur-3xl"></div>
<h2 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="credit-card" style={{color: '#00C896'}}></i>
          Credit Utilization
        </h2>
<div className="flex items-center justify-center">
<canvas className="max-w-[260px]" id="creditChart"></canvas>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm rounded-full bg-white/5 backdrop-blur-lg ring-1 ring-white/10 flex justify-around py-3">
<button className="group flex flex-col items-center gap-1">
<i className="w-5 h-5 text-white/70 group-hover:text-[#00C896] transition-colors" data-lucide="home"></i>
<span className="text-[11px] group-hover:text-[#00C896]">Home</span>
</button>
<button className="group flex flex-col items-center gap-1">
<i className="w-5 h-5 text-white/70 group-hover:text-[#00C896] transition-colors" data-lucide="bar-chart-2"></i>
<span className="text-[11px] group-hover:text-[#00C896]">Insights</span>
</button>
<button className="group flex flex-col items-center gap-1">
<i className="w-5 h-5 text-white/70 group-hover:text-[#00C896] transition-colors" data-lucide="file-text"></i>
<span className="text-[11px] group-hover:text-[#00C896]">Statements</span>
</button>
<button className="group flex flex-col items-center gap-1">
<i className="w-5 h-5 text-white/70 group-hover:text-[#00C896] transition-colors" data-lucide="user"></i>
<span className="text-[11px] group-hover:text-[#00C896]">Profile</span>
</button>
</nav>



    </>
  );
}
