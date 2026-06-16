import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
  document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('usageChart').getContext('2d');
    
    // Chart data
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'GPT-4',
          data: [4200, 5100, 5800, 6300, 7100, 7800, 8500],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        },
        {
          label: 'Claude',
          data: [1800, 2200, 2400, 2600, 3100, 3300, 3500],
          borderColor: '#a855f7',
          backgroundColor: 'rgba(168, 85, 247, 0.2)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }
      ]
    };
    
    // Chart config
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: '#1f2937',
            titleColor: '#f9fafb',
            bodyColor: '#f3f4f6',
            borderColor: '#374151',
            borderWidth: 1,
            padding: 8,
            displayColors: true,
            boxWidth: 8,
            boxHeight: 8,
            usePointStyle: true
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              color: '#6b7280',
              font: {
                size: 10
              }
            }
          },
          y: {
            grid: {
              color: 'rgba(75, 85, 99, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: '#6b7280',
              font: {
                size: 10
              },
              callback: function(value) {
                return value >= 1000 ? value/1000 + 'k' : value;
              }
            }
          }
        },
        elements: {
          point: {
            radius: 0,
            hoverRadius: 4
          }
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        }
      }
    };
    
    // Create chart
    new Chart(ctx, config);
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">

<div className="p-4 border-b border-gray-800">
<div className="flex justify-between items-center">
<h2 className="text-base font-medium text-white">AI Model Analytics</h2>
<span className="text-xs font-medium text-gray-400">Last 30 days</span>
</div>
</div>

<div className="grid grid-cols-3 divide-x divide-gray-800">
<div className="p-4 text-center">
<p className="text-xs text-gray-400">Requests</p>
<p className="mt-1 text-xl font-medium text-white">124.5k</p>
<div className="mt-1 flex justify-center items-center text-xs text-green-400">
<svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>12.5%</span>
</div>
</div>
<div className="p-4 text-center">
<p className="text-xs text-gray-400">Response</p>
<p className="mt-1 text-xl font-medium text-white">187ms</p>
<div className="mt-1 flex justify-center items-center text-xs text-red-400">
<svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>3.2%</span>
</div>
</div>
<div className="p-4 text-center">
<p className="text-xs text-gray-400">Success</p>
<p className="mt-1 text-xl font-medium text-white">99.8%</p>
<div className="mt-1 flex justify-center items-center text-xs text-green-400">
<svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>0.3%</span>
</div>
</div>
</div>

<div className="px-4 py-3">
<div className="h-40 bg-gray-900">
<canvas className="w-full h-full" id="usageChart"></canvas>
</div>
</div>

<div className="p-4 border-t border-gray-800">
<h3 className="text-xs font-medium text-gray-400 mb-3">MODEL USAGE</h3>

<div className="mb-3">
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-gray-300">GPT-4</span>
<span className="text-xs text-gray-300">64.2%</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '64.2%'}}></div>
</div>
</div>

<div className="mb-3">
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-gray-300">Claude</span>
<span className="text-xs text-gray-300">27.5%</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 rounded-full" style={{width: '27.5%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-gray-300">Other Models</span>
<span className="text-xs text-gray-300">8.3%</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gray-500 rounded-full" style={{width: '8.3%'}}></div>
</div>
</div>
</div>

<div className="px-4 py-3 bg-gray-950 border-t border-gray-800 flex justify-between items-center">
<span className="text-xs text-gray-500">Updated 5m ago</span>
<button className="text-xs text-blue-400 hover:text-blue-300">View details →</button>
</div>
</div>



    </>
  );
}
