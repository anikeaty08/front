import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize chart with proper sizing
        const ctx = document.getElementById('stockChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({length: 30}, (_, i) => i + 1),
                datasets: [{
                    data: [8500, 8650, 8580, 8720, 8890, 9100, 9250, 9180, 9320, 9480, 9650, 9580, 9720, 9850, 9920, 10100, 10050, 10180, 10320, 10280, 10350, 10420, 10380, 10450, 10520, 10480, 10510, 10460, 10420, 10436.28],
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2.5,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#3B82F6',
                    pointHoverBorderColor: '#FFFFFF',
                    pointHoverBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 10,
                        bottom: 10,
                        left: 5,
                        right: 5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        display: false,
                        grid: {
                            display: false
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                elements: {
                    point: {
                        hoverRadius: 5
                    }
                }
            }
        });

        function switchTab(tab) {
            console.log('Switched to:', tab);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-lg mx-auto space-y-8 px-4">

<div className="bg-white rounded-lg shadow-sm p-6">
<div className="flex justify-between items-center mb-4">
<div>
<p className="text-sm text-gray-500 mb-1">Total Portfolio Value</p>
<p className="text-3xl font-bold text-gray-900">$24,847.52</p>
<div className="flex items-center mt-2">
<span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
<svg className="w-3 h-3 mr-1" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
</svg>
                            +12.8%
                        </span>
</div>
</div>
<div className="flex space-x-4">
<button className="flex flex-col items-center justify-center text-blue-600 hover:text-blue-700 transition">
<div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mb-1">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" fill-rule="evenodd"></path>
</svg>
</div>
<span className="text-xs font-medium">Buy</span>
</button>
<button className="flex flex-col items-center justify-center text-red-600 hover:text-red-700 transition">
<div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center mb-1">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" fill-rule="evenodd"></path>
</svg>
</div>
<span className="text-xs font-medium">Sell</span>
</button>
</div>
</div>

<nav className="flex bg-gray-50 rounded-full p-1 mb-6">
<button className="text-gray-500 text-sm font-normal py-2 px-5 rounded-full hover:bg-white transition" onclick="switchTab('performance')">Performance</button>
<button className="bg-white text-gray-900 font-semibold text-sm py-2 px-5 rounded-full shadow transition" id="assetTab" onclick="switchTab('allocation')">Asset Allocation</button>
</nav>

<div className="flex h-4 rounded-full overflow-hidden mb-6">
<div className="bg-blue-500" style={{width: '42%'}}></div>
<div className="bg-green-500" style={{width: '28%'}}></div>
<div className="bg-purple-500" style={{width: '18%'}}></div>
<div className="bg-orange-500" style={{width: '12%'}}></div>
</div>

<div className="grid grid-cols-2 gap-y-4 text-xs">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="w-1 h-6 rounded bg-blue-500"></span>
<span className="text-gray-700 font-medium">Tech Stocks</span>
</div>
<span className="text-gray-400">42% $10,436</span>
</div>
<div className="flex items-center justify-between ml-2">
<div className="flex items-center space-x-2">
<span className="w-1 h-6 rounded bg-green-500"></span>
<span className="text-gray-700 font-medium">Healthcare</span>
</div>
<span className="text-gray-400">28% $6,957</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="w-1 h-6 rounded bg-purple-500"></span>
<span className="text-gray-700 font-medium">Finance</span>
</div>
<span className="text-gray-400">18% $4,473</span>
</div>
<div className="flex items-center justify-between ml-2">
<div className="flex items-center space-x-2">
<span className="w-1 h-6 rounded bg-orange-500"></span>
<span className="text-gray-700 font-medium">Energy</span>
</div>
<span className="text-gray-400">12% $2,982</span>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm p-6">
<div className="flex justify-between items-center mb-6">
<div>
<p className="text-sm text-gray-500 mb-1">Tech Stocks Value</p>
<p className="text-3xl font-bold text-gray-900">$10,436.28</p>
</div>
</div>

<nav className="flex bg-gray-50 rounded-full p-1 mb-6">
<button className="bg-white text-gray-900 font-semibold text-sm py-2 px-5 rounded-full shadow transition">Performance</button>
<button className="text-gray-500 text-sm font-normal py-2 px-5 rounded-full hover:bg-white transition">Holdings</button>
</nav>

<div className="mb-8" style={{height: '200px'}}>
<canvas id="stockChart"></canvas>
</div>

<div className="flex justify-center space-x-2 pt-4">
<button className="text-xs text-gray-400 py-2 px-3 rounded-full hover:bg-gray-100 transition">1D</button>
<button className="text-xs text-gray-400 py-2 px-3 rounded-full hover:bg-gray-100 transition">1W</button>
<button className="text-xs text-gray-900 font-semibold py-2 px-3 rounded-full bg-white shadow transition">1M</button>
<button className="text-xs text-gray-400 py-2 px-3 rounded-full hover:bg-gray-100 transition">3M</button>
<button className="text-xs text-gray-400 py-2 px-3 rounded-full hover:bg-gray-100 transition">6M</button>
<button className="text-xs text-gray-400 py-2 px-3 rounded-full hover:bg-gray-100 transition">1Y</button>
</div>
</div>
</div>


    </>
  );
}
