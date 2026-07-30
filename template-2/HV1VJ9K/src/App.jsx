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

    const leagueMarketData = {
      "Premier League": {
        labels: ['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
        datasets: [
          { label: 'Under 2.5 goals', data: [10, 15, 18, 14, 20, 25, 22, 30, 28, 35], borderColor: '#064e3b', backgroundColor: 'rgba(6,78,59,0.08)' },
          { label: 'Under 6 goals', data: [5, 10, 8, 15, 12, 18, 20, 17, 22, 24], borderColor: '#6b7280', backgroundColor: 'rgba(107,114,128,0.08)' },
          { label: 'Over 2.5 goals', data: [8, 12, 19, 23, 25, 28, 24, 27, 30, 32], borderColor: '#854d0e', backgroundColor: 'rgba(133,77,14,0.08)' },
          { label: 'Over 1.5 goals', data: [12, 18, 24, 22, 26, 30, 35, 38, 40, 42], borderColor: '#65a30d', backgroundColor: 'rgba(101,163,13,0.08)' },
          { label: 'Over 7 corners', data: [7, 14, 20, 18, 24, 22, 27, 32, 35, 38], borderColor: '#047857', backgroundColor: 'rgba(4,120,87,0.08)' }
        ]
      },
      "La Liga": {
        labels: ['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
        datasets: [
          { label: 'Under 2.5 goals', data: [12, 16, 20, 18, 22, 25, 28, 24, 30, 32], borderColor: '#064e3b', backgroundColor: 'rgba(6,78,59,0.08)' },
          { label: 'Under 6 goals', data: [8, 14, 12, 16, 20, 24, 22, 26, 28, 30], borderColor: '#6b7280', backgroundColor: 'rgba(107,114,128,0.08)' },
          { label: 'Over 2.5 goals', data: [15, 18, 22, 24, 28, 32, 30, 35, 38, 40], borderColor: '#854d0e', backgroundColor: 'rgba(133,77,14,0.08)' },
          { label: 'Over 1.5 goals', data: [18, 22, 26, 30, 34, 38, 36, 40, 44, 48], borderColor: '#65a30d', backgroundColor: 'rgba(101,163,13,0.08)' },
          { label: 'Over 7 corners', data: [10, 15, 18, 22, 26, 24, 28, 32, 36, 40], borderColor: '#047857', backgroundColor: 'rgba(4,120,87,0.08)' }
        ]
      },
      "Serie A": {
        labels: ['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
        datasets: [
          { label: 'Under 2.5 goals', data: [11, 14, 18, 20, 22, 24, 25, 29, 32, 33], borderColor: '#064e3b', backgroundColor: 'rgba(6,78,59,0.08)' },
          { label: 'Under 6 goals', data: [6, 9, 11, 13, 17, 20, 21, 23, 24, 26], borderColor: '#6b7280', backgroundColor: 'rgba(107,114,128,0.08)' },
          { label: 'Over 2.5 goals', data: [13, 15, 18, 22, 24, 26, 29, 33, 36, 38], borderColor: '#854d0e', backgroundColor: 'rgba(133,77,14,0.08)' },
          { label: 'Over 1.5 goals', data: [14, 18, 21, 25, 28, 31, 34, 36, 39, 41], borderColor: '#65a30d', backgroundColor: 'rgba(101,163,13,0.08)' },
          { label: 'Over 7 corners', data: [9, 13, 16, 20, 23, 25, 27, 30, 33, 35], borderColor: '#047857', backgroundColor: 'rgba(4,120,87,0.08)' }
        ]
      },
      "Bundesliga": {
        labels: ['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
        datasets: [
          { label: 'Under 2.5 goals', data: [9, 13, 17, 15, 19, 23, 25, 28, 31, 34], borderColor: '#064e3b', backgroundColor: 'rgba(6,78,59,0.08)' },
          { label: 'Under 6 goals', data: [7, 11, 14, 16, 19, 21, 23, 25, 28, 29], borderColor: '#6b7280', backgroundColor: 'rgba(107,114,128,0.08)' },
          { label: 'Over 2.5 goals', data: [17, 21, 25, 29, 32, 35, 38, 40, 43, 45], borderColor: '#854d0e', backgroundColor: 'rgba(133,77,14,0.08)' },
          { label: 'Over 1.5 goals', data: [20, 24, 29, 32, 36, 40, 44, 47, 51, 54], borderColor: '#65a30d', backgroundColor: 'rgba(101,163,13,0.08)' },
          { label: 'Over 7 corners', data: [12, 17, 21, 24, 28, 30, 33, 36, 39, 42], borderColor: '#047857', backgroundColor: 'rgba(4,120,87,0.08)' }
        ]
      }
    };

    function filterDataByTimeframe(data, timeframe) {
      let count = data.labels.length;
      switch (timeframe) {
        case "1M":
          count = 1; break;
        case "3M":
          count = 3; break;
        case "6M":
          count = 6; break;
        default:
          count = data.labels.length; break;
      }
      return {
        labels: data.labels.slice(-count),
        datasets: data.datasets.map(ds => ({
          ...ds,
          data: ds.data.slice(-count)
        }))
      };
    }

    const ctx = document.getElementById('footballLineChart').getContext('2d');
    let footballChart = new Chart(ctx, {
      type: 'line',
      data: filterDataByTimeframe(leagueMarketData["Premier League"], "3M"),
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: { color: 'white', font: { size: 10 } }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: £${context.raw}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: 'white', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.08)' },
            ticks: {
              callback: function (value) { return '£' + value; },
              color: 'white',
              font: { size: 10 }
            }
          }
        },
        elements: {
          line: { tension: 0.4 },
          point: { radius: 3, hoverRadius: 5 }
        },
        interaction: { mode: 'index', intersect: false }
      }
    });

    function updateChart() {
      const league = document.getElementById('league-select').value;
      const timeframe = document.getElementById('timeframe-select').value;
      const data = leagueMarketData[league] ? leagueMarketData[league] : leagueMarketData["Premier League"];
      footballChart.data = filterDataByTimeframe(data, timeframe);
      footballChart.update();
    }

    document.getElementById('league-select').addEventListener('change', updateChart);
    document.getElementById('timeframe-select').addEventListener('change', updateChart);
  
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
      
<div className="min-h-full flex flex-col md:py-10 md:px-8 lg:px-20 gap-6 pt-4 pr-2 pb-4 pl-2 items-center justify-start">

<h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight">
      Simplifi Football Markets Dashboard
    </h1>

<p className="max-w-2xl text-sm sm:text-base text-slate-300 mb-2 sm:mb-4">
      The graph below shows what football markets are profitable in any particular league allowing you to decide what markets to invest on depending on the league. Below it is the list of all available markets for you to explore and view market analysis
    </p>

<div className="w-full max-w-6xl flex flex-col gap-3 sm:gap-4 md:gap-6">

<div className="w-full bg-[#111111] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-inner flex flex-col gap-3 sm:gap-4 md:gap-6">

<div className="w-full flex flex-col md:flex-row md:items-end gap-3 sm:gap-4 md:gap-6 mb-2 sm:mb-4">

<div className="flex flex-col w-full md:w-auto">
<label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1" htmlFor="league-select">League</label>
<select className="w-full md:w-40 appearance-none pl-3 pr-8 py-2 rounded-lg border border-zinc-700 bg-black text-xs sm:text-sm font-medium text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none" id="league-select">
<option selected value="Premier League">Premier League</option>
<option value="La Liga">La Liga</option>
<option value="Serie A">Serie A</option>
<option value="Bundesliga">Bundesliga</option>
<option value="Ligue 1">Ligue 1</option>
<option value="Eredivisie">Eredivisie</option>
<option value="Primeira Liga">Primeira Liga</option>
<option value="MLS">MLS</option>
<option value="Scottish Prem.">Scottish Prem.</option>
</select>
</div>
<div className="hidden md:block h-9 border-l border-zinc-800 mx-2"></div>

<div className="flex flex-col w-full md:w-auto">
<label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1" htmlFor="timeframe-select">Timeframe</label>
<select className="w-full md:w-32 appearance-none pl-3 pr-8 py-2 rounded-lg border border-zinc-700 bg-black text-xs sm:text-sm font-medium text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none" id="timeframe-select">
<option value="1M">1M</option>
<option selected value="3M">3M</option>
<option value="6M">6M</option>
<option value="1Y">1Y</option>
<option value="All">All</option>
</select>
</div>
<div className="hidden md:block h-9 border-l border-zinc-800 mx-2"></div>

<div className="flex flex-col w-full md:w-auto">
<label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1" htmlFor="capital-input">Capital</label>
<div className="relative">
<input className="w-full md:w-28 pl-3 pr-10 py-2 rounded-lg border border-zinc-700 bg-black text-xs sm:text-sm font-medium text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none" id="capital-input" min="0" placeholder="£2,000" type="number" value="2000" />
<span className="absolute inset-y-0 right-3 flex items-center text-gray-400 font-medium pointer-events-none">£</span>
</div>
</div>
<div className="hidden md:block h-9 border-l border-zinc-800 mx-2"></div>

<div className="flex flex-col w-full md:w-auto">
<label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1" htmlFor="risk-select">Risk/Trade</label>
<select className="w-full md:w-24 appearance-none pl-3 pr-8 py-2 rounded-lg border border-zinc-700 bg-black text-xs sm:text-sm font-medium text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none" id="risk-select">
<option value="1%">1%</option>
<option selected value="2%">2%</option>
<option value="5%">5%</option>
<option value="7%">7%</option>
<option value="10%">10%</option>
</select>
</div>
</div>

<div className="w-full" style={{position: `relative`, height: `260px`}}>
<canvas id="footballLineChart"></canvas>
</div>
</div>
</div>

<section className="bg-[#111111] rounded-xl sm:rounded-2xl shadow-innerBorder p-3 sm:p-6 mt-6 sm:mt-8 max-w-6xl w-full">
<h2 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6" id="markets-list-title">
        Available Football Markets
      </h2>
<div className="overflow-x-auto -mx-2">
<table className="min-w-[600px] w-full text-left text-white text-xs sm:text-sm" id="markets-table">
<thead>
<tr className="font-semibold uppercase tracking-wider border-b border-zinc-800">
<th className="py-2 pr-4 sm:py-3 sm:pr-8">Markets</th>
<th className="py-2 pr-4 sm:py-3 sm:pr-8">Longest Win</th>
<th className="py-2 pr-4 sm:py-3 sm:pr-8">Longest Loss</th>
<th className="py-2 pr-4 sm:py-3 sm:pr-8">Success</th>
<th className="py-2 sm:py-3">Income</th>
</tr>
</thead>
<tbody>

<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="UK flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border border-zinc-700" src="https://flagcdn.com/gb.svg" />
                    Over 7 Corners (Premier League)
                  </span>
<span className="text-xs text-gray-400">Active since Aug 2022</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">15</span>
<div className="text-xs text-gray-400">2023/24</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">5</span>
<div className="text-xs text-gray-400">2022/23</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">78%</span>
<div className="text-xs text-gray-400">Last 50</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£2,300</span>
<div className="text-xs text-gray-400">@£25</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Spain flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border border-zinc-700" src="https://flagcdn.com/es.svg" />
                    Under 2.5 Goals (La Liga)
                  </span>
<span className="text-xs text-gray-400">Active since Feb 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">12</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">6</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">72%</span>
<div className="text-xs text-gray-400">Last 60</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,850</span>
<div className="text-xs text-gray-400">@£20</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Germany flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border border-zinc-700" src="https://flagcdn.com/de.svg" />
                    Over 2.5 Goals (Bundesliga)
                  </span>
<span className="text-xs text-gray-400">Active since Jan 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">10</span>
<div className="text-xs text-gray-400">2024</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">4</span>
<div className="text-xs text-gray-400">2024</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">69%</span>
<div className="text-xs text-gray-400">Last 40</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,420</span>
<div className="text-xs text-gray-400">@£18</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Italy flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border border-zinc-700" src="https://flagcdn.com/it.svg" />
                    Both Teams to Score (Serie A)
                  </span>
<span className="text-xs text-gray-400">Active since Sep 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">8</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">3</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">73%</span>
<div className="text-xs text-gray-400">Last 30</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£870</span>
<div className="text-xs text-gray-400">@£15</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="France flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border border-zinc-700" src="https://flagcdn.com/fr.svg" />
                    Under 6 Goals (Ligue 1)
                  </span>
<span className="text-xs text-gray-400">Active since Jun 2022</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">11</span>
<div className="text-xs text-gray-400">2022</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">5</span>
<div className="text-xs text-gray-400">2022</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">74%</span>
<div className="text-xs text-gray-400">Last 38</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,200</span>
<div className="text-xs text-gray-400">@£16</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Netherlands flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border border-zinc-700" src="https://flagcdn.com/nl.svg" />
                    Over 1.5 Goals (Eredivisie)
                  </span>
<span className="text-xs text-gray-400">Active since Mar 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">13</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">6</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">77%</span>
<div className="text-xs text-gray-400">Last 35</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,600</span>
<div className="text-xs text-gray-400">@£21</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="USA flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border border-zinc-700" src="https://flagcdn.com/us.svg" />
                    Double Chance (MLS)
                  </span>
<span className="text-xs text-gray-400">Active since Apr 2022</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">9</span>
<div className="text-xs text-gray-400">2024</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">4</span>
<div className="text-xs text-gray-400">2024</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">70%</span>
<div className="text-xs text-gray-400">Last 28</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£980</span>
<div className="text-xs text-gray-400">@£14</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Portugal flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border border-zinc-700" src="https://flagcdn.com/pt.svg" />
                    Asian Handicap -1 (Primeira Liga)
                  </span>
<span className="text-xs text-gray-400">Active since Nov 2022</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">10</span>
<div className="text-xs text-gray-400">2022</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">3</span>
<div className="text-xs text-gray-400">2022</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">75%</span>
<div className="text-xs text-gray-400">Last 29</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,100</span>
<div className="text-xs text-gray-400">@£17</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Scotland flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border border-zinc-700" src="https://flagcdn.com/gb-sct.svg" />
                    Draw No Bet (Scottish Prem.)
                  </span>
<span className="text-xs text-gray-400">Active since May 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">7</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">5</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">68%</span>
<div className="text-xs text-gray-400">Last 20</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£560</span>
<div className="text-xs text-gray-400">@£12</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>


    </>
  );
}
