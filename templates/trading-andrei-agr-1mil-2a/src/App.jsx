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



        let chartInstance = null;

        // Formatting Helpers
        const fmtMoney = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
        const fmtPct = (val) => new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 2 }).format(val);

        // Update Slider Display
        function updateDisplay(id, suffix) {
            const val = document.getElementById(id).value;
            const displayEl = document.getElementById('disp-' + id);
            
            if(id === 'start') {
                displayEl.innerText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
            } else {
                displayEl.innerText = val + suffix;
            }
            
            // Debounce for performance if needed, but modern browsers handle this fine usually
        }

        // Logic Translation
        function runSimulation() {
            // 1. Get Values
            const start = parseFloat(document.getElementById('start').value);
            const days = parseInt(document.getElementById('days').value);
            const sims = parseInt(document.getElementById('sims').value);
            const winProb = parseFloat(document.getElementById('win').value) / 100;
            const avgWin = parseFloat(document.getElementById('avg-win').value) / 100;
            const avgLoss = parseFloat(document.getElementById('avg-loss').value) / 100 * -1; // Negative
            const risk = parseFloat(document.getElementById('risk').value) / 100;

            let allResults = [];
            let allDrawdowns = [];
            let trajectories = []; 

            // Limit trajectories for chart performance, but calc all stats
            const maxChartLines = 50; 
            
            for (let i = 0; i < sims; i++) {
                let equity = start;
                let peak = start;
                let maxDD = 0;
                let path = [];
                
                // Only store path if we are going to chart it
                let keepPath = i < maxChartLines;
                if(keepPath) path.push(start);

                for (let d = 0; d < days; d++) {
                    const isWin = Math.random() < winProb;
                    const ret = isWin ? avgWin : avgLoss;
                    
                    // Logic from python: equity *= (1 + risk * (ret/abs(avg_win) if ret > 0 else ret/abs(avg_loss)))
                    // Note: avgWin is positive, avgLoss is negative.
                    // If win: ret/avgWin = 1. Multiplier = 1 + risk * 1.
                    // If loss: ret/abs(avgLoss) = -1. Multiplier = 1 + risk * -1 = 1 - risk.
                    
                    // Simplified based on python logic interpretation:
                    // If win: equity = equity * (1 + risk)
                    // If loss: equity = equity * (1 - risk)
                    // Wait, Python code: ret/abs(avg_win) -> if ret=0.015, avg_win=0.015 -> 1. 
                    // This implies position sizing adjusts based on target?
                    // Let's implement EXACTLY as python logic provided:
                    
                    let position_size_factor = 0;
                    if(ret > 0) {
                        position_size_factor = ret / Math.abs(avgWin);
                    } else {
                        position_size_factor = ret / Math.abs(avgLoss);
                    }
                    
                    equity *= (1 + risk * position_size_factor);

                    if (equity > peak) peak = equity;
                    let dd = (peak - equity) / peak;
                    if (dd > maxDD) maxDD = dd;

                    if(keepPath) path.push(equity);
                }
                
                allResults.push(equity);
                allDrawdowns.push(maxDD);
                if(keepPath) trajectories.push(path);
            }

            // 2. Calculate Stats
            allResults.sort((a, b) => a - b);
            const medianRes = allResults[Math.floor(allResults.length * 0.5)];
            const worstRes = allResults[0];
            const bestRes = allResults[allResults.length - 1];
            
            // Average Max Drawdown
            const avgMaxDD = allDrawdowns.reduce((a, b) => a + b, 0) / allDrawdowns.length;
            
            // Probability of Profit
            const profitable = allResults.filter(r => r > start).length;
            const probProfit = profitable / sims;

            // CAGR Calculation (approximation assuming 252 trading days = 1 year)
            // (End/Start)^(252/Days) - 1
            const years = days / 252;
            const cagr = Math.pow(medianRes / start, 1 / (years || 1)) - 1;

            // 3. Update DOM
            document.getElementById('res-median').innerText = fmtMoney(medianRes);
            
            const medianReturn = (medianRes - start) / start;
            const elMedPct = document.getElementById('res-median-pct');
            elMedPct.innerText = `${(medianReturn * 100).toFixed(1)}% Return`;
            elMedPct.className = medianReturn >= 0 ? "text-xs text-emerald-500 mt-1" : "text-xs text-rose-500 mt-1";

            document.getElementById('res-cagr').innerText = fmtPct(cagr);
            document.getElementById('res-dd').innerText = fmtPct(avgMaxDD);
            document.getElementById('res-prob').innerText = fmtPct(probProfit);

            // Update Table (90th, 75th, 50th, 25th, 10th percentiles)
            const percentiles = [0.9, 0.75, 0.5, 0.25, 0.1];
            const tableBody = document.getElementById('stats-table');
            tableBody.innerHTML = '';
            
            percentiles.forEach(p => {
                const idx = Math.floor(allResults.length * p);
                const val = allResults[idx];
                const ret = (val - start) / start;
                
                // Find approximate MaxDD for this outcome (this is a simplification, ideally we map result to specific run)
                // We will just leave DD blank in table for aggregate stats or show "-"
                
                const tr = document.createElement('tr');
                tr.className = "hover:bg-neutral-900 transition-colors";
                tr.innerHTML = `
                    <td class="px-5 py-3 font-medium text-neutral-400">${(p * 100).toFixed(0)}th</td>
                    <td class="px-5 py-3 font-medium text-white">${fmtMoney(val)}</td>
                    <td class="px-5 py-3 ${ret >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${(ret*100).toFixed(1)}%</td>
                    <td class="px-5 py-3 text-right text-neutral-500">-</td>
                `;
                tableBody.appendChild(tr);
            });


            // 4. Update Chart
            updateChart(trajectories, days);
        }

        function updateChart(trajectories, days) {
            const ctx = document.getElementById('mcChart').getContext('2d');
            
            // Labels: Day 0 to Day N
            const labels = Array.from({length: trajectories[0].length}, (_, i) => i);

            // Prepare datasets
            // We want mostly thin grey lines, but maybe highlight the median one roughly?
            // Actually random selection is fine for the "Cloud" look.
            
            const datasets = trajectories.map((data, index) => {
                return {
                    label: `Sim ${index}`,
                    data: data,
                    borderColor: index === 0 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.05)',
                    borderWidth: index === 0 ? 2 : 1,
                    pointRadius: 0,
                    fill: false,
                    tension: 0.1
                };
            });

            if (chartInstance) {
                chartInstance.destroy();
            }

            Chart.defaults.font.family = "'Inter', sans-serif";
            Chart.defaults.color = "#525252";
            
            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: datasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 0 // Disable animation for performance
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false } // Custom tooltip or disable for perf
                    },
                    scales: {
                        x: {
                            grid: { display: false, drawBorder: false },
                            ticks: { maxTicksLimit: 6 }
                        },
                        y: {
                            grid: { color: '#262626', drawBorder: false },
                            ticks: { 
                                callback: function(value) { return '$' + value / 1000 + 'k'; }
                            }
                        }
                    },
                    interaction: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false
                    }
                }
            });
        }

        // Initialize on load
        window.addEventListener('load', () => {
            runSimulation();
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
      

<nav className="border-b border-neutral-800 bg-neutral-950/50 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:trending-up" data-width="14"></span>
</div>
<span className="font-medium tracking-tight text-white">MonteCarlo<span className="text-neutral-500">Sim</span></span>
</div>
<div className="flex items-center gap-4">
<a className="text-neutral-400 hover:text-white transition-colors text-xs font-medium" href="#">Documentation</a>
<button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded text-xs font-medium hover:bg-neutral-200 transition-colors" onclick="runSimulation()">
<span className="iconify" data-icon="lucide:play" data-width="12"></span>
                    Run Simulation
                </button>
</div>
</div>
</nav>
<main className="max-w-7xl mx-auto px-6 pt-8">

<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Simulation Dashboard</h1>
<p className="text-neutral-400 max-w-2xl text-sm leading-relaxed">
                Configure your trading strategy parameters below. The model simulates thousands of possible market scenarios to estimate expected returns and maximum drawdown risks.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-3 space-y-6">

<div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 shadow-sm">
<div className="flex items-center gap-2 mb-4 text-neutral-200">
<span className="iconify" data-icon="lucide:sliders" data-width="16"></span>
<h2 className="font-medium text-xs uppercase tracking-wider">Parameters</h2>
</div>
<div className="space-y-5">

<div className="group">
<label className="flex justify-between text-xs font-medium text-neutral-400 mb-2">
                                Start Capital
                                <span className="text-white" id="disp-start">$10,000</span>
</label>
<input id="start" max="100000" min="1000" oninput="updateDisplay('start', '$')" step="1000" type="range" value="10000"/>
</div>

<div className="group">
<label className="flex justify-between text-xs font-medium text-neutral-400 mb-2">
                                Trading Days
                                <span className="text-white" id="disp-days">252</span>
</label>
<input id="days" max="1000" min="30" oninput="updateDisplay('days', '')" step="10" type="range" value="252"/>
</div>

<div className="group">
<label className="flex justify-between text-xs font-medium text-neutral-400 mb-2">
                                Simulations
                                <span className="text-white" id="disp-sims">1000</span>
</label>
<input id="sims" max="5000" min="100" oninput="updateDisplay('sims', '')" step="100" type="range" value="1000"/>
</div>
<div className="h-px bg-neutral-800 my-4"></div>

<div className="group">
<label className="flex justify-between text-xs font-medium text-neutral-400 mb-2">
                                Win Rate
                                <span className="text-white" id="disp-win">55%</span>
</label>
<input id="win" max="99" min="1" oninput="updateDisplay('win', '%')" step="1" type="range" value="55"/>
</div>

<div className="group">
<label className="flex justify-between text-xs font-medium text-neutral-400 mb-2">
                                Avg Win
                                <span className="text-white" id="disp-avg-win">2.0%</span>
</label>

<input id="avg-win" max="100" min="0.1" oninput="updateDisplay('avg-win', '%')" step="0.1" type="range" value="2.0"/>
</div>

<div className="group">
<label className="flex justify-between text-xs font-medium text-neutral-400 mb-2">
                                Avg Loss
                                <span className="text-white" id="disp-avg-loss">1.0%</span>
</label>
<input id="avg-loss" max="10" min="0.1" oninput="updateDisplay('avg-loss', '%')" step="0.1" type="range" value="1.0"/>
</div>

<div className="group">
<label className="flex justify-between text-xs font-medium text-neutral-400 mb-2">
                                Risk per Trade
                                <span className="text-white" id="disp-risk">1.0%</span>
</label>
<input id="risk" max="5" min="0.1" oninput="updateDisplay('risk', '%')" step="0.1" type="range" value="1.0"/>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
<div className="flex gap-3">
<div className="mt-0.5 text-neutral-400">
<span className="iconify" data-icon="lucide:info" data-width="16"></span>
</div>
<div className="text-xs text-neutral-400 leading-relaxed">
                            Simulations use a standard geometric Brownian motion model adapted for discrete trading events.
                        </div>
</div>
</div>
</div>

<div className="lg:col-span-9 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg">
<div className="flex items-center justify-between mb-3">
<span className="text-neutral-500 text-xs font-medium">Median Equity</span>
<span className="iconify text-neutral-600" data-icon="lucide:dollar-sign" data-width="14"></span>
</div>
<div className="text-xl font-semibold text-white tracking-tight" id="res-median">--</div>
<div className="text-xs text-neutral-500 mt-1" id="res-median-pct">--</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg">
<div className="flex items-center justify-between mb-3">
<span className="text-neutral-500 text-xs font-medium">CAGR (Median)</span>
<span className="iconify text-neutral-600" data-icon="lucide:percent" data-width="14"></span>
</div>
<div className="text-xl font-semibold text-white tracking-tight" id="res-cagr">--</div>
<div className="text-xs text-emerald-500 mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="10"></span> Annualized
                        </div>
</div>

<div className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg">
<div className="flex items-center justify-between mb-3">
<span className="text-neutral-500 text-xs font-medium">Max Drawdown</span>
<span className="iconify text-neutral-600" data-icon="lucide:arrow-down-circle" data-width="14"></span>
</div>
<div className="text-xl font-semibold text-white tracking-tight" id="res-dd">--</div>
<div className="text-xs text-neutral-500 mt-1">Average Worst Case</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg">
<div className="flex items-center justify-between mb-3">
<span className="text-neutral-500 text-xs font-medium">Win Probability</span>
<span className="iconify text-neutral-600" data-icon="lucide:target" data-width="14"></span>
</div>
<div className="text-xl font-semibold text-white tracking-tight" id="res-prob">--</div>
<div className="text-xs text-neutral-500 mt-1">Ending &gt; Start</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-lg p-1 relative h-[450px]">
<canvas id="mcChart"></canvas>
<div className="absolute top-6 right-6 flex items-center gap-4 bg-neutral-950/80 p-2 rounded border border-neutral-800 backdrop-blur-sm">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-neutral-400">Best Case</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-neutral-500"></div>
<span className="text-xs text-neutral-400">Median</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-rose-500"></div>
<span className="text-xs text-neutral-400">Worst Case</span>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-800 flex justify-between items-center">
<h3 className="font-medium text-xs text-white">Percentile Analysis</h3>
<button className="text-xs text-neutral-500 hover:text-white transition-colors">Export CSV</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs">
<thead className="bg-neutral-950/50 text-neutral-400">
<tr>
<th className="px-5 py-3 font-medium">Percentile</th>
<th className="px-5 py-3 font-medium">Equity Result</th>
<th className="px-5 py-3 font-medium">Total Return</th>
<th className="px-5 py-3 font-medium text-right">Max Drawdown</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800 text-neutral-300" id="stats-table">

</tbody>
</table>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
