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
      
    // Particles
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 65, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00C896" },
        "opacity": { "value": 0.2, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 1.2 }
      },
      "interactivity": { "events": { "onhover": { "enable": false } } },
      "retina_detect": true
    });

    // Lucide icons
    lucide.createIcons();

    // Spending Chart
    const spendCtx = document.getElementById('spendChart').getContext('2d');
    new Chart(spendCtx, {
      type: 'doughnut',
      data: {
        labels: ['Housing', 'Food', 'Transport', 'Entertainment', 'Other'],
        datasets: [{
          data: [35, 20, 15, 10, 20],
          backgroundColor: ['#00C896', '#00A97F', '#008F6C', '#00725A', '#005A47'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '65%',
        plugins: { legend: { display: false } }
      }
    });

    // Credit Utilization Chart
    const creditCtx = document.getElementById('creditChart').getContext('2d');
    new Chart(creditCtx, {
      type: 'line',
      data: {
        labels: ['W1','W2','W3','W4','W5','W6'],
        datasets: [{
          label: 'Utilization %',
          data: [40, 38, 42, 37, 35, 33],
          borderColor: '#00C896',
          backgroundColor: 'rgba(0,200,150,0.1)',
          tension: 0.4,
          fill: true,
          pointRadius: 0
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false, suggestedMin: 0, suggestedMax: 100 }
        }
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
<h1 className="text-[28px] font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">ClariFi</h1>
<button className="relative p-2 rounded-full backdrop-blur-lg bg-white/5 hover:ring-2 hover:ring-teal-500 transition">
<i className="w-5 h-5 text-teal-300" data-lucide="user"></i>
</button>
</header>

<section className="px-5">
<div className="flex space-x-4 overflow-x-auto pb-2">

<button className="shrink-0 h-32 w-32 rounded-full bg-white/5 backdrop-blur-lg flex flex-col items-center justify-center hover:scale-105 transition relative">
<span className="text-teal-400 text-[18px] font-medium">Balance</span>
<span className="text-[22px] font-semibold tracking-tight">$8,250</span>
<span className="absolute inset-0 rounded-full bg-teal-500/20 blur-xl opacity-20 -z-10"></span>
</button>
<button className="shrink-0 h-32 w-32 rounded-full bg-white/5 backdrop-blur-lg flex flex-col items-center justify-center hover:scale-105 transition relative">
<span className="text-teal-400 text-[18px] font-medium">Credit</span>
<span className="text-[22px] font-semibold tracking-tight">712</span>
<span className="absolute inset-0 rounded-full bg-teal-500/20 blur-xl opacity-20 -z-10"></span>
</button>
<button className="shrink-0 h-32 w-32 rounded-full bg-white/5 backdrop-blur-lg flex flex-col items-center justify-center hover:scale-105 transition relative">
<span className="text-teal-400 text-[18px] font-medium">Budget</span>
<span className="text-[22px] font-semibold tracking-tight">62%</span>
<span className="absolute inset-0 rounded-full bg-teal-500/20 blur-xl opacity-20 -z-10"></span>
</button>
</div>
</section>

<main className="px-5 space-y-4 pt-4 pb-24">

<div className="rounded-2xl p-5 bg-white/5 backdrop-blur-lg">
<div className="flex items-center justify-between mb-3">
<h2 className="text-[22px] font-medium tracking-tight">Spending Breakdown</h2>
<button className="p-1 rounded hover:bg-white/10 transition"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>
<div>
<canvas className="mx-auto max-h-48" id="spendChart"></canvas>
</div>
</div>

<div className="rounded-2xl p-5 bg-white/5 backdrop-blur-lg">
<div className="flex items-center justify-between mb-3">
<h2 className="text-[22px] font-medium tracking-tight">Credit Utilization</h2>
<button className="p-1 rounded hover:bg-white/10 transition"><i className="w-5 h-5" data-lucide="trending-up"></i></button>
</div>
<div>
<canvas className="mx-auto max-h-40" id="creditChart"></canvas>
</div>
</div>
</main>

<nav className="fixed bottom-0 inset-x-0 px-6 py-3 bg-white/5 backdrop-blur-lg flex justify-between items-center">
<button className="flex flex-col items-center gap-1 group">
<i className="w-5 h-5 text-teal-400" data-lucide="home"></i>
<span className="text-[12px] text-teal-400">Home</span>
</button>
<button className="flex flex-col items-center gap-1 group">
<i className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition" data-lucide="activity"></i>
<span className="text-[12px] text-gray-400 group-hover:text-teal-400 transition">Insights</span>
</button>
<button className="flex flex-col items-center gap-1 group">
<i className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition" data-lucide="file-text"></i>
<span className="text-[12px] text-gray-400 group-hover:text-teal-400 transition">Statements</span>
</button>
<button className="flex flex-col items-center gap-1 group">
<i className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition" data-lucide="user"></i>
<span className="text-[12px] text-gray-400 group-hover:text-teal-400 transition">Profile</span>
</button>
</nav>



    </>
  );
}
