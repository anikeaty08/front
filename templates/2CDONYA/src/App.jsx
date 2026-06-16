import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      tailwind.config = {theme: {extend: {fontFamily: {sans: ['Inter', 'sans-serif']}}}}


    document.addEventListener('DOMContentLoaded', function() {
      // Initialize Lucide icons
      lucide.createIcons();
      
      // Market dropdown functionality
      const marketDropdownBtn = document.getElementById('marketDropdownBtn');
      const marketMenu = document.getElementById('marketMenu');
      const selectedMarket = document.getElementById('selectedMarket');
      
      marketDropdownBtn.addEventListener('click', function() {
        marketMenu.classList.toggle('hidden');
      });
      
      document.querySelectorAll('#marketMenu button').forEach(button => {
        button.addEventListener('click', function() {
          selectedMarket.textContent = this.dataset.market;
          marketMenu.classList.add('hidden');
        });
      });
      
      document.addEventListener('click', function(event) {
        if (!marketDropdownBtn.contains(event.target) && !marketMenu.contains(event.target)) {
          marketMenu.classList.add('hidden');
        }
      });
      
      // Initialize charts
      initCharts();
      
      // Initialize draggable and resizable elements
      initInteractJS();
    });
    
    function initCharts() {
      // Line chart
      const lineCtx = document.getElementById('lineChart').getContext('2d');
      const lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
          datasets: [{
            label: 'Profit/Loss',
            data: [1200, 1900, 800, 1400, 1800, 1350, 2100],
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              mode: 'index',
              intersect: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                drawBorder: false
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
      
      // Performance chart
      const perfCtx = document.getElementById('performanceChart').getContext('2d');
      const perfChart = new Chart(perfCtx, {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Profit/Loss',
              data: [300, -150, 600, 450, -200, 750, 400],
              backgroundColor: '#f59e0b',
              barPercentage: 0.6,
              categoryPercentage: 0.7
            },
            {
              label: 'Win Rate',
              data: [60, 40, 75, 66, 33, 80, 50],
              backgroundColor: '#10b981',
              barPercentage: 0.6,
              categoryPercentage: 0.7,
              yAxisID: 'percentage'
            },
            {
              label: 'ROI',
              data: [12, -5, 18, 14, -8, 20, 10],
              backgroundColor: '#6366f1',
              barPercentage: 0.6,
              categoryPercentage: 0.7,
              yAxisID: 'percentage'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Profit/Loss (£)'
              }
            },
            percentage: {
              position: 'right',
              beginAtZero: true,
              max: 100,
              title: {
                display: true,
                text: 'Percentage (%)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
      
      // Bar chart
      const barCtx = document.getElementById('barChart').getContext('2d');
      const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Premier', 'La Liga', 'Bundesliga', 'Serie A', 'Ligue 1', 'Championship'],
          datasets: [{
            label: 'Win Rate %',
            data: [45, 38, 52, 41, 36, 48],
            backgroundColor: [
              'rgba(245, 158, 11, 0.8)',
              'rgba(16, 185, 129, 0.8)',
              'rgba(99, 102, 241, 0.8)',
              'rgba(236, 72, 153, 0.8)',
              'rgba(6, 182, 212, 0.8)',
              'rgba(139, 92, 246, 0.8)'
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: {
                display: true,
                text: 'Win Rate (%)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
    
    function initInteractJS() {
      // Make elements resizable
      interact('.resizable').resizable({
        edges: { left: false, right: true, bottom: true, top: false },
        listeners: {
          move(event) {
            const target = event.target;
            let width = event.rect.width;
            let height = event.rect.height;
            
            // Update element dimensions
            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            
            // Resize any charts inside
            const charts = target.querySelectorAll('canvas');
            charts.forEach(chart => {
              if (chart.chart) {
                chart.chart.resize();
              }
            });
          }
        },
        modifiers: [
          interact.modifiers.restrictSize({
            min: { width: 200, height: 150 }
          })
        ]
      });
      
      // Make elements draggable
      interact('.draggable').draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        autoScroll: true,
        listeners: {
          move(event) {
            const target = event.target;
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            
            target.style.transform = `translate(${x}px, ${y}px)`;
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          }
        }
      });
      
      // Add event listeners for widget buttons
      document.querySelectorAll('.widget-resize-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const container = this.closest('.graph-container');
          const currentSize = container.getAttribute('data-size');
          
          // Cycle through sizes: sm -> md -> lg -> sm
          if (currentSize === 'sm') {
            container.setAttribute('data-size', 'md');
          } else if (currentSize === 'md') {
            container.setAttribute('data-size', 'lg');
          } else {
            container.setAttribute('data-size', 'sm');
          }
        });
      });
      
      // Edit layout button
      document.getElementById('editLayoutBtn').addEventListener('click', function() {
        document.querySelectorAll('.graph-container').forEach(container => {
          container.classList.toggle('border-2');
          container.classList.toggle('border-dashed');
          container.classList.toggle('border-yellow-400');
        });
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="w-full border-b border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
<h1 className="text-2xl md:text-3xl font-semibold italic text-yellow-600 animate-[slideInLeft_0.8s_ease-in-out_forwards]">Trade Journaling Dashboard</h1>
<div className="flex items-center gap-3 animate-[fadeIn_1s_ease-in-out_0.3s_forwards] opacity-0">
<div className="relative">
<button className="inline-flex items-center gap-x-1 text-sm md:text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md px-3 py-2 transition-all" id="marketDropdownBtn">
<i className="w-4 h-4 mr-1" data-lucide="filter"></i>
<span>Market:</span>
<span className="font-semibold" id="selectedMarket">OVER 2.5 GOALS</span>
<i className="w-4 h-4 ml-1" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black/5 z-10" id="marketMenu">
<div className="py-1 text-sm">
<button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="OVER 2.5 GOALS">
<i className="w-4 h-4 mr-2 text-yellow-600" data-lucide="trending-up"></i>OVER 2.5 GOALS
              </button>
<button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="UNDER 2.5 GOALS">
<i className="w-4 h-4 mr-2 text-indigo-600" data-lucide="trending-down"></i>UNDER 2.5 GOALS
              </button>
<button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="BOTH TEAMS TO SCORE">
<i className="w-4 h-4 mr-2 text-emerald-600" data-lucide="target"></i>BOTH TEAMS TO SCORE
              </button>
<button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="MATCH WINNER">
<i className="w-4 h-4 mr-2 text-amber-600" data-lucide="trophy"></i>MATCH WINNER
              </button>
</div>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-gray-100 hover:bg-gray-200 transition px-3 py-2 text-sm font-medium" id="downloadBtn">
<i className="w-4 h-4" data-lucide="download"></i> Download Data
        </button>
<button className="inline-flex items-center gap-2 rounded-md bg-yellow-100 hover:bg-yellow-200 transition px-3 py-2 text-sm font-medium" id="editLayoutBtn">
<i className="w-4 h-4" data-lucide="layout"></i> Edit Layout
        </button>
</div>
</div>
</header>
<main className="flex-1 py-8">
<div className="max-w-7xl mx-auto px-4 space-y-8">
<div className="grid-layout">

<div className="graph-container resizable draggable" data-position="1" data-size="lg">
<div className="widget-header">
<h2 className="text-lg font-medium">Weekly calendar tracker</h2>
<div className="widget-controls">
<button className="widget-resize-btn" title="Resize"><i className="w-4 h-4" data-lucide="maximize-2"></i></button>
<button className="widget-move-btn" title="Move"><i className="w-4 h-4" data-lucide="move"></i></button>
</div>
</div>
<div className="border rounded-xl overflow-hidden shadow-sm bg-white p-4">
<div className="grid grid-cols-7 gap-3">

<div className="text-xs font-medium text-gray-500 p-1 text-center">Mon</div>
<div className="text-xs font-medium text-gray-500 p-1 text-center">Tue</div>
<div className="text-xs font-medium text-gray-500 p-1 text-center">Wed</div>
<div className="text-xs font-medium text-gray-500 p-1 text-center">Thu</div>
<div className="text-xs font-medium text-gray-500 p-1 text-center">Fri</div>
<div className="text-xs font-medium text-gray-500 p-1 text-center">Sat</div>
<div className="text-xs font-medium text-gray-500 p-1 text-center">Sun</div>

<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-emerald-50 border border-emerald-400 text-emerald-700">
<span>1</span><span className="self-end">600.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>2</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-emerald-50 border border-emerald-400 text-emerald-700">
<span>3</span><span className="self-end">1050.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>4</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>5</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>6</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>7</span><span className="self-end">0.00</span>
</div>

<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-rose-50 border border-rose-400 text-rose-700">
<span>8</span><span className="self-end">-788.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>9</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-emerald-50 border border-emerald-400 text-emerald-700">
<span>10</span><span className="self-end">875.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-emerald-50 border border-emerald-400 text-emerald-700">
<span>11</span><span className="self-end">608.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>12</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>13</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-emerald-50 border border-emerald-400 text-emerald-700">
<span>14</span><span className="self-end">113.00</span>
</div>

<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-emerald-50 border border-emerald-400 text-emerald-700">
<span>15</span><span className="self-end">225.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>16</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-rose-50 border border-rose-400 text-rose-700">
<span>17</span><span className="self-end">-37.50</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>18</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>19</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>20</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>21</span><span className="self-end">0.00</span>
</div>

<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>22</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>23</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>24</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>25</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>26</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>27</span><span className="self-end">0.00</span>
</div>
<div className="aspect-square rounded-lg flex flex-col items-start justify-between p-2 text-xs font-medium leading-tight bg-gray-100 text-gray-500">
<span>28</span><span className="self-end">0.00</span>
</div>
</div>
</div>
</div>

<div className="graph-container resizable draggable" data-position="2" data-size="md">
<div className="widget-header">
<h3 className="text-lg font-semibold">Market Summary</h3>
<div className="widget-controls">
<button className="widget-resize-btn" title="Resize"><i className="w-4 h-4" data-lucide="maximize-2"></i></button>
<button className="widget-move-btn" title="Move"><i className="w-4 h-4" data-lucide="move"></i></button>
</div>
</div>
<div className="border rounded-xl shadow-sm bg-white p-6 flex flex-col gap-2">
<h3 className="text-lg font-semibold">Over<span className="text-emerald-500">2.5</span>goals</h3>
<p className="text-3xl font-bold text-gray-800">£ <span id="balance">5,548</span></p>
<ul className="text-sm space-y-1">
<li className="flex items-center gap-1">
<i className="w-4 h-4 text-emerald-500" data-lucide="trending-up"></i> £800 (5.04%) from last season
              </li>
<li className="flex items-center gap-1">
<i className="w-4 h-4 text-rose-500" data-lucide="trending-down"></i> £80 (-0.94%) from last GW
              </li>
</ul>
</div>
</div>

<div className="graph-container resizable draggable" data-position="3" data-size="md">
<div className="widget-header">
<h2 className="text-lg font-medium">Weekly trade performance</h2>
<div className="widget-controls">
<button className="widget-resize-btn" title="Resize"><i className="w-4 h-4" data-lucide="maximize-2"></i></button>
<button className="widget-move-btn" title="Move"><i className="w-4 h-4" data-lucide="move"></i></button>
</div>
</div>
<div className="border rounded-xl bg-white p-6 shadow-sm">
<div className="chart-container" style={{height: '250px'}}>
<canvas id="lineChart"></canvas>
</div>
</div>
</div>

<div className="graph-container resizable draggable" data-position="4" data-size="lg">
<div className="widget-header">
<h2 className="text-lg font-medium">Performance Analysis</h2>
<div className="widget-controls">
<button className="widget-resize-btn" title="Resize"><i className="w-4 h-4" data-lucide="maximize-2"></i></button>
<button className="widget-move-btn" title="Move"><i className="w-4 h-4" data-lucide="move"></i></button>
</div>
</div>
<div className="border rounded-xl bg-white shadow-sm p-6">
<div className="flex justify-between items-center mb-6">
<div className="flex gap-2">
<button className="px-3 py-1 text-xs font-medium rounded-md bg-yellow-100 text-yellow-800">Daily</button>
<button className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-800">Weekly</button>
<button className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-800">Monthly</button>
</div>
</div>
<div className="chart-container" style={{height: '300px', width: '100%'}}>
<canvas id="performanceChart"></canvas>
</div>
<div className="flex justify-between mt-4 text-sm text-gray-500">
<div className="flex items-center gap-2">
<span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
<span>Profit/Loss</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
<span>Win Rate</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block w-3 h-3 rounded-full bg-indigo-500"></span>
<span>ROI</span>
</div>
</div>
</div>
</div>

<div className="graph-container resizable draggable" data-position="5" data-size="sm">
<div className="widget-header">
<h3 className="text-base font-medium">Net P&amp;L</h3>
<div className="widget-controls">
<button className="widget-resize-btn" title="Resize"><i className="w-4 h-4" data-lucide="maximize-2"></i></button>
<button className="widget-move-btn" title="Move"><i className="w-4 h-4" data-lucide="move"></i></button>
</div>
</div>
<div className="border rounded-xl bg-white shadow-sm p-6 flex flex-col gap-4">
<span className="text-xs text-gray-400 align-middle">📈 35</span>
<p className="text-4xl font-extrabold text-emerald-600">$<span id="pnl">7,032.50</span></p>
</div>
</div>

<div className="graph-container resizable draggable" data-position="6" data-size="sm">
<div className="widget-header">
<h3 className="text-base font-medium">Success rate</h3>
<div className="widget-controls">
<button className="widget-resize-btn" title="Resize"><i className="w-4 h-4" data-lucide="maximize-2"></i></button>
<button className="widget-move-btn" title="Move"><i className="w-4 h-4" data-lucide="move"></i></button>
</div>
</div>
<div className="border rounded-xl bg-white shadow-sm p-6 flex flex-col items-center justify-center gap-4">
<div className="relative w-32 h-32 rounded-full flex items-center justify-center" id="gauge">
<span className="absolute text-lg font-semibold" id="gaugeLabel">42.42%</span>
</div>
</div>
</div>

<div className="graph-container resizable draggable" data-position="7" data-size="sm">
<div className="widget-header">
<h3 className="text-base font-medium">Odd Sweet spot</h3>
<div className="widget-controls">
<button className="widget-resize-btn" title="Resize"><i className="w-4 h-4" data-lucide="maximize-2"></i></button>
<button className="widget-move-btn" title="Move"><i className="w-4 h-4" data-lucide="move"></i></button>
</div>
</div>
<div className="border rounded-xl bg-white shadow-sm p-6 flex flex-col gap-4">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-500" data-lucide="target"></i></div>
<p className="text-3xl font-extrabold text-indigo-600">2.10</p>
</div>
</div>

<div className="graph-container resizable draggable" data-position="8" data-size="lg">
<div className="widget-header">
<h2 className="text-lg font-medium">Seasonal analysis: success rate per quarter</h2>
<div className="widget-controls">
<button className="widget-resize-btn" title="Resize"><i className="w-4 h-4" data-lucide="maximize-2"></i></button>
<button className="widget-move-btn" title="Move"><i className="w-4 h-4" data-lucide="move"></i></button>
</div>
</div>
<div className="border rounded-xl bg-white shadow-sm p-6 space-y-4">
<div className="flex flex-wrap items-center gap-3">
<label className="text-sm font-medium">Season</label>
<select className="border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500" id="seasonSelect">
<option>2024/2025</option>
<option>2023/2024</option>
<option>2022/2023</option>
</select>
</div>
<div className="grid grid-cols-12 gap-2">
<div className="col-span-1 text-center font-medium">Q1</div>
<div className="col-span-1 text-center font-medium">Q2</div>
<div className="col-span-1 text-center font-medium">Q3</div>
<div className="col-span-1 text-center font-medium">Q4</div>
<div className="col-span-1 text-center font-medium">Total</div>
<div className="col-span-1 text-center font-medium">Income</div>
<div className="col-span-1 text-center font-medium">Winning<br/>streak</div>
<div className="col-span-1 text-center font-medium">Losing<br/>streak</div>
</div>
<div className="grid grid-cols-12 gap-2" id="seasonGrid">
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="35.2%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="42.7%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="39.1%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="45.3%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="40.5%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="£2,156"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="7"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="4"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="28.9%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="31.8%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="44.2%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="38.6%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="35.8%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="£1,827"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="5"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="6"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="41.2%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="36.7%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="34.8%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="42.9%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="38.9%"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="£1,564"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="4"/>
<input className="col-span-1 border text-center rounded-md text-sm py-1" type="text" value="3"/>
</div>
</div>
</div>

<div className="graph-container resizable draggable" data-position="9" data-size="md">
<div className="widget-header">
<h2 className="text-lg font-medium">Weekly win rate per league</h2>
<div className="widget-controls">
<button className="widget-resize-btn" title="Resize"><i className="w-4 h-4" data-lucide="maximize-2"></i></button>
<button className="widget-move-btn" title="Move"><i className="w-4 h-4" data-lucide="move"></i></button>
</div>
</div>
<div className="border rounded-xl bg-white shadow-sm p-6">
<div className="chart-container" style={{height: '250px'}}>
<canvas id="barChart"></canvas>
</div>
</div>
</div>
</div>

<div className="border rounded-xl bg-white shadow-sm p-6 animate-[fadeIn_0.8s_ease-in-out_1s_forwards] opacity-0">
<h2 className="text-lg font-medium mb-6">Add a new trade</h2>
<form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="match-date">Match Date</label>
<input className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" id="match-date" type="date"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="match">Match</label>
<input className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" id="match" placeholder="Team A vs Team B" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="stake">Stake Amount</label>
<div className="relative rounded-md shadow-sm">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-events-none">
<span className="text-gray-500 sm:text-sm">£</span>
</div>
<input className="w-full pl-8 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" id="stake" min="0" placeholder="100.00" step="0.01" type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="odds">Odds</label>
<input className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" id="odds" min="1" placeholder="2.10" step="0.01" type="number"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="market">Market</label>
<select className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" id="market">
<option>OVER 2.5 GOALS</option>
<option>UNDER 2.5 GOALS</option>
<option>BOTH TEAMS TO SCORE</option>
<option>MATCH WINNER</option>
</select>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="league">League</label>
<select className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" id="league">
<option>Premier League</option>
<option>La Liga</option>
<option>Bundesliga</option>
<option>Serie A</option>
<option>Ligue 1</option>
<option>Championship</option>
</select>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="result">Result</label>
<select className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" id="result">
<option>Win</option>
<option>Loss</option>
<option>Void</option>
</select>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="profit-loss">Profit/Loss</label>
<div className="relative rounded-md shadow-sm">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 sm:text-sm">£</span>
</div>
<input className="w-full pl-8 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" id="profit-loss" placeholder="110.00" step="0.01" type="number"/>
</div>
</div>
<div className="lg:col-span-4">
<label className="block text-sm font-medium text-gray-700" htmlFor="notes">Notes</label>
<textarea className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" id="notes" placeholder="Add your notes here..." rows="3"></textarea>
</div>
<div className="lg:col-span-4 flex justify-end">
<button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors" type="button">
<i className="w-4 h-4 mr-2" data-lucide="plus"></i>
              Add Trade
            </button>
</div>
</form>
</div>
</div>
</main>
<footer className="bg-white border-t border-gray-200 mt-12">
<div className="max-w-7xl mx-auto px-4 py-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500">© 2024 Market Strategy Trade Journal. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-sm text-gray-500 hover:text-yellow-600 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-gray-500 hover:text-yellow-600 transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-gray-500 hover:text-yellow-600 transition-colors" href="#">Help Center</a>
</div>
</div>
</div>
</footer>
<style>
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideInLeft {
      from { transform: translateX(-20px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    .grid-layout {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: minmax(200px, auto);
      gap: 1.5rem;
    }
    
    .graph-container {
      background-color: #fff;
      border-radius: 0.75rem;
      transition: all 0.3s ease;
    }
    
    .graph-container[data-size="sm"] {
      grid-column: span 1;
    }
    
    .graph-container[data-size="md"] {
      grid-column: span 2;
    }
    
    .graph-container[data-size="lg"] {
      grid-column: span 3;
    }
    
    .widget-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid #f3f4f6;
    }
    
    .widget-controls {
      display: flex;
      gap: 0.5rem;
    }
    
    .widget-controls button {
      padding: 0.25rem;
      border-radius: 0.375rem;
      transition: all 0.2s ease;
    }
    
    .widget-controls button:hover {
      background-color: #f3f4f6;
    }
    
    #gauge {
      background: conic-gradient(#10b981 0% 42.42%, #e5e7eb 42.42% 100%);
    }
    
    #gauge::before {
      content: '';
      position: absolute;
      inset: 10px;
      border-radius: 50%;
      background: white;
    }
    
    .resizable {
      position: relative;
    }
    
    .draggable {
      cursor: move;
    }
  </style>


    </>
  );
}
