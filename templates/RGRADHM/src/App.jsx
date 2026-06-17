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
      
    document.addEventListener('DOMContentLoaded', () => {

      /* Reveal on scroll */
      const observe = (selector) => {
        const els = document.querySelectorAll(selector);
        const io = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.remove('opacity-0', 'translate-y-4');
              io.unobserve(e.target);
            }
          });
        }, { threshold: 0.2 });
        els.forEach(el => io.observe(el));
      };
      observe('.transition.transform');

      /* Render lucide icons */
      lucide.createIcons();

      /* Inject indicators from JSON-like data */
      const indicators = [
        {
          title: 'Avg Lines per PR',
          value: '220 LOC',
          trend: '↓ Safer if small',
          icon: 'file-text',
          desc: 'Smaller PRs are easier to understand and modify safely. Encourage chunked changes.',
          color: 'sky'
        },
        {
          title: 'Merged Without AI Review',
          value: '32.5 %',
          trend: '↓ Lower is better',
          icon: 'alert-triangle',
          desc: 'Indicates how many PRs skipped review. High values = risky. Reinforce review policies.',
          color: 'yellow'
        },
        {
          title: 'Buggy Deploys After Skip',
          value: '7.3 %',
          trend: '↓ Lower is better',
          icon: 'alert-octagon',
          desc: 'Represents PRs merged without review that led to failures. Highlights unsafe merge risk.',
          color: 'rose'
        },
        {
          title: 'AI Suggestions Accepted',
          value: '58.1 %',
          trend: '↑ Higher is better',
          icon: 'bot',
          desc: 'Shows developer trust in AI suggestions. Strong adoption = better code clarity.',
          color: 'purple'
        }
      ];

      const grid = document.querySelector('.grid .grid');
      const tmpl = document.getElementById('indicatorTemplate').content;

      indicators.forEach(kpi => {
        const node = tmpl.cloneNode(true);
        node.querySelector('.indicator-title').textContent = kpi.title;
        node.querySelector('.indicator-value').textContent = kpi.value;
        node.querySelector('.indicator-trend').textContent = kpi.trend;
        node.querySelector('.indicator-desc').textContent = kpi.desc;
        node.querySelector('.indicator-icon').innerHTML = `<i data-lucide="${kpi.icon}" class="w-4 h-4 text-${kpi.color}-400"></i>`;
        grid.appendChild(node);
      });

      lucide.createIcons(); // re-render for injected nodes

      /* History toggle */
      const toggleBtn = document.getElementById('toggleHistory');
      const wrapper  = document.getElementById('historyWrapper');
      let opened = false;
      toggleBtn.addEventListener('click', () => {
        opened = !opened;
        wrapper.style.maxHeight = opened ? wrapper.scrollHeight + 'px' : '0px';
        toggleBtn.classList.toggle('text-yellow-300', opened);
      });

      /* History line chart */
      const historyCtx = document.getElementById('historyChart').getContext('2d');
      new Chart(historyCtx, {
        type: 'line',
        data: {
          labels: ['Week-1', 'Week-2', 'Week-3', 'Week-4'],
          datasets: [{
            label: 'MRS',
            data: [74, 73, 72, 72],
            fill: false,
            borderColor: '#facc15',
            tension: 0.35,
            pointRadius: 4,
            pointBackgroundColor: '#facc15'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#9ca3af', font: { family: 'Inter', size: 11 } }
            },
            y: {
              beginAtZero: true,
              grid: { color: '#374151' },
              ticks: { color: '#9ca3af', font: { family: 'Inter', size: 11 } }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              bodyFont: { family: 'Inter', weight: 500 }
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
      
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl">

<div className="relative col-span-1 sm:col-span-2 lg:col-span-4 border border-gray-800 bg-gray-800/60 rounded-lg p-6 backdrop-blur-md shadow-sm transition transform opacity-0 translate-y-4 duration-700 ease-out hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 ring-yellow-500">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-white/0 rounded-lg"></div>

<div className="flex items-center justify-between mb-6">
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-white flex items-center gap-2">
<span>🛡️</span> Modifiability Risk Score (MRS)
        </h2>

<div className="relative group">
<button aria-label="MRS formula &amp; weights" className="p-1 rounded-md hover:bg-gray-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500">
<i className="w-5 h-5 text-gray-400 group-hover:text-yellow-400" data-lucide="info"></i>
</button>
<div className="absolute z-10 top-full right-0 mt-2 w-80 bg-gray-800/90 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 backdrop-blur-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all origin-top-right">
<p className="mb-2">
<span className="font-medium text-yellow-300">Formula:</span><br/>
              MRS = (W1 × LOC) + (W2 × Skipped Review) + (W3 × Buggy Deploys) – (W4 × AI Accept Rate)
            </p>
<div className="space-y-1">
<p><span className="text-gray-400">W1 (Avg LOC):</span> 25 %</p>
<p><span className="text-gray-400">W2 (Skipped Review):</span> 30 %</p>
<p><span className="text-gray-400">W3 (Buggy Deploys):</span> 30 %</p>
<p><span className="text-gray-400">W4 (AI Accept Rate):</span> 15 %</p>
</div>
<p className="mt-3 text-xs text-gray-500">Weights can be edited in v2. Currently fixed.</p>
</div>
</div>
</div>

<div className="flex flex-wrap items-end gap-4">
<div className="flex items-end space-x-3">
<span className="text-7xl lg:text-8xl font-semibold text-yellow-400 leading-none">72</span>
<div>
<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-900/40 text-yellow-300 gap-1">
<i className="w-3.5 h-3.5" data-lucide="trending-up"></i> Stable
            </span>
</div>
</div>

<div className="flex items-center gap-2 mt-4 sm:mt-0">
<button aria-describedby="editWeightsTip" className="px-3 py-1.5 rounded-md bg-gray-700/60 text-gray-500 cursor-not-allowed border border-gray-700 flex items-center gap-1 text-xs font-medium" disabled="">
<i className="w-4 h-4" data-lucide="settings"></i> Edit Weights
          </button>
<span className="sr-only" id="editWeightsTip">Editing weights is planned for v2. Default weights are currently used.</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

<template id="indicatorTemplate">
<div className="relative rounded-lg border border-gray-800 bg-gray-800/60 p-4 overflow-hidden backdrop-blur-md group">
<h3 className="text-base font-medium text-gray-200 mb-1 flex items-center gap-2">
<span className="indicator-icon text-xl"></span><span className="indicator-title flex-1"></span>
</h3>
<div className="flex items-end space-x-2 mb-1">
<span className="text-2xl font-semibold indicator-value"></span>
</div>
<p className="text-xs text-gray-400 indicator-trend mb-2"></p>
<p className="text-xs text-gray-500 indicator-desc leading-snug"></p>

<div className="absolute inset-0 pointer-events-none rounded-lg ring-0 ring-yellow-500 transition group-hover:ring-2"></div>
</div>
</template>
</div>

<div className="border-t border-gray-800 mt-8 pt-4 flex items-center justify-between">
<button className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500" id="toggleHistory">
<i className="w-4 h-4" data-lucide="timeline"></i> 4-week History
        </button>
<span className="text-xs text-gray-500">Track trends over time</span>
</div>

<div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out" id="historyWrapper">
<div className="mt-6">
<div>
<canvas className="w-full h-64" id="historyChart"></canvas>
</div>
</div>
</div>
</div>


</div>



    </>
  );
}
