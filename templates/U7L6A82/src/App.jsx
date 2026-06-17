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
      
    // Initialize lucide icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
        }
      });
      
      // Initialize the chart with first dataset
      initializeChart();
      
      // Generate summary
      updateSummary();
      
      // Add event listeners to dropdowns
      document.getElementById('risk').addEventListener('change', fetchDataAndUpdateChart);
      document.getElementById('league').addEventListener('change', fetchDataAndUpdateChart);
      document.getElementById('timeframe').addEventListener('change', fetchDataAndUpdateChart);
      document.getElementById('capital').addEventListener('input', fetchDataAndUpdateChart);
    });

    // Sort menu toggle
    document.getElementById('sortBtn').addEventListener('click', function() {
      document.getElementById('sortMenu').classList.toggle('hidden');
    });
    
    // Close sort menu when clicking outside
    window.addEventListener('click', function(e) {
      if (!document.getElementById('sortBtn').contains(e.target)) {
        document.getElementById('sortMenu').classList.add('hidden');
      }
    });

    // In a real application, this would be an API call to fetch data based on selections
    function fetchDataAndUpdateChart() {
      const league = document.getElementById('league').value;
      const timeFrame = document.getElementById('timeframe').value;
      const risk = document.getElementById('risk').value;
      const capital = document.getElementById('capital').value;
      
      console.log(`Fetching data for: ${league}, ${timeFrame}, ${risk}, £${capital}`);
      
      // Simulate API call with setTimeout
      document.getElementById('lineChart').style.opacity = 0.5;
      
      setTimeout(() => {
        // In a real app, this would be the response from your backend API
        // The data structure would depend on your specific requirements
        const newData = getDataForLeague(league);
        updateChartWithNewData(newData);
        updateSummary();
        document.getElementById('lineChart').style.opacity = 1;
      }, 500);
    }
    
    // This function simulates different data for different leagues
    function getDataForLeague(league) {
      // This is where you would normally have different datasets for different leagues
      // Either stored client-side or fetched from a server
      
      const dataLibrary = {
        "Premier League": {
          labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              label: 'Under 2.5 goals',
              data: [10, 15, 18, 14, 20, 25, 22, 30, 28, 35],
              borderColor: '#064e3b',
              backgroundColor: 'rgba(6, 78, 59, 0.1)'
            },
            {
              label: 'Under 6 goals',
              data: [5, 10, 8, 15, 12, 18, 20, 17, 22, 24],
              borderColor: '#6b7280',
              backgroundColor: 'rgba(107, 114, 128, 0.1)'
            },
            {
              label: 'Over 2.5 goals',
              data: [8, 12, 19, 23, 25, 28, 24, 27, 30, 32],
              borderColor: '#854d0e',
              backgroundColor: 'rgba(133, 77, 14, 0.1)'
            },
            {
              label: 'Over 1.5 goals',
              data: [12, 18, 24, 22, 26, 30, 35, 38, 40, 42],
              borderColor: '#65a30d',
              backgroundColor: 'rgba(101, 163, 13, 0.1)'
            },
            {
              label: 'Over 7 corners',
              data: [7, 14, 20, 18, 24, 22, 27, 32, 35, 38],
              borderColor: '#047857',
              backgroundColor: 'rgba(4, 120, 87, 0.1)'
            }
          ]
        },
        "La Liga": {
          labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              label: 'Under 2.5 goals',
              data: [12, 16, 20, 18, 22, 25, 28, 24, 30, 32],
              borderColor: '#064e3b',
              backgroundColor: 'rgba(6, 78, 59, 0.1)'
            },
            {
              label: 'Under 6 goals',
              data: [8, 14, 12, 16, 20, 24, 22, 26, 28, 30],
              borderColor: '#6b7280',
              backgroundColor: 'rgba(107, 114, 128, 0.1)'
            },
            {
              label: 'Over 2.5 goals',
              data: [15, 18, 22, 24, 28, 32, 30, 35, 38, 40],
              borderColor: '#854d0e',
              backgroundColor: 'rgba(133, 77, 14, 0.1)'
            },
            {
              label: 'Over 1.5 goals',
              data: [18, 22, 26, 30, 34, 38, 36, 40, 44, 48],
              borderColor: '#65a30d',
              backgroundColor: 'rgba(101, 163, 13, 0.1)'
            },
            {
              label: 'Over 7 corners',
              data: [10, 15, 18, 22, 26, 24, 28, 32, 36, 40],
              borderColor: '#047857',
              backgroundColor: 'rgba(4, 120, 87, 0.1)'
            }
          ]
        }
      };
      
      // Return data for the requested league, or default to Premier League if not found
      return dataLibrary[league] || dataLibrary["Premier League"];
    }
    
    // Initialize the chart
    function initializeChart() {
      const ctx = document.getElementById('lineChart').getContext('2d');
      window.myChart = new Chart(ctx, {
        type: 'line',
        data: getDataForLeague("Premier League"),
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
              callbacks: {
                label: function(context) {
                  return `${context.dataset.label}: £${context.raw}`;
                }
              }
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
      

<div className="max-w-7xl mx-auto px-6 py-10">

<header className="mb-8">
<h1 className="text-4xl font-extrabold text-yellow-700">Market movement page</h1>
<p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
        This page displays the markets movements. It allows users know what market is profitable in different leagues. The main graph will display how different markets perform in a particular league. User will be able to change which league to display by clicking the filter button. The list of all available markets displayed singularly will follow, just like in stock apps.
      </p>
</header>

<section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">

<div className="col-span-1">
<label className="block text-sm font-medium text-slate-600 mb-1" htmlFor="capital">Input Capital</label>
<div className="relative">
<span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-slate-400" data-lucide="dollar-sign"></i>
</span>
<input className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm font-medium text-slate-800" id="capital" min="0" step="50" type="number" value="1000"/>
</div>
</div>

<div className="col-span-1">
<label className="block text-sm font-medium text-slate-600 mb-1" htmlFor="risk">Risk / trade</label>
<div className="relative">
<select className="w-full appearance-none pl-3 pr-8 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm font-medium text-slate-800" id="risk">
<option value="1%">1%</option>
<option value="2%">2%</option>
<option selected="" value="5%">5%</option>
<option value="10%">10%</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="col-span-1">
<label className="block text-sm font-medium text-slate-600 mb-1" htmlFor="league">League</label>
<div className="relative">
<select className="w-full appearance-none pl-3 pr-8 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm font-medium text-slate-800" id="league">
<option selected="" value="Premier League">Premier League</option>
<option value="La Liga">La Liga</option>
<option value="Serie A">Serie A</option>
<option value="Bundesliga">Bundesliga</option>
<option value="Ligue 1">Ligue 1</option>
<option value="Eredivisie">Eredivisie</option>
<option value="Primeira Liga">Primeira Liga</option>
<option value="MLS">MLS</option>
<option value="Scottish Prem.">Scottish Prem.</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="col-span-1">
<label className="block text-sm font-medium text-slate-600 mb-1" htmlFor="timeframe">Time frame</label>
<div className="relative">
<select className="w-full appearance-none pl-3 pr-8 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm font-medium text-slate-800" id="timeframe">
<option selected="" value="All time">All time</option>
<option value="Last 2 seasons">Last 2 seasons</option>
<option value="Last season">Last season</option>
<option value="Current season">Current season</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</section>

<section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
<div className="col-span-1 lg:col-span-3">
<div style={{position: 'relative', height: '400px', width: '100%'}}>
<canvas id="lineChart"></canvas>
</div>
<div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-700"></span> Under 2.5 goals</div>
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gray-500"></span> Under 6 goals</div>
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-700"></span> Over 2.5 goals</div>
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-lime-600"></span> Over 1.5 goals</div>
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-700"></span> Over 7 corners</div>
</div>
</div>
<div className="col-span-1">
<h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-lime-600" data-lucide="trending-up"></i> Summary
          </h2>
<ul className="space-y-3 text-sm" id="summary"></ul>
</div>
</div>
</section>

<section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 mt-10" id="markets-list-section">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold text-yellow-700 tracking-tight">Available Market list</h2>
<div className="relative">
<button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 focus:outline-none" id="sortBtn">
<span>Sort by</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg" id="sortMenu">
<ul className="py-1">
<li><button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-sort="0">Market</button></li>
<li><button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-sort="1">Longest win streak</button></li>
<li><button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-sort="2">Longest loss streak</button></li>
<li><button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-sort="3">Success rate</button></li>
<li><button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-sort="4">All-time income</button></li>
</ul>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-left" id="marketTable">
<thead>
<tr className="text-sm font-semibold text-slate-600 uppercase tracking-wider border-b border-slate-200">
<th className="py-3 pr-8">Markets</th>
<th className="py-3 pr-8">Longest winning streak</th>
<th className="py-3 pr-8">Longest losing streak</th>
<th className="py-3 pr-8">Success rate</th>
<th className="py-3">All-time income</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-lg">

<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="UK" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/gb.png"/>
<span className="font-medium">Over 7 Corners (Premier League)</span>
</td><td className="py-5 pr-8">15</td><td className="py-5 pr-8">5</td><td className="py-5 pr-8">78%</td><td className="py-5 font-medium">£2,300</td>
</tr>
<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="UK" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/gb.png"/>
<span className="font-medium">Under 2.5 Goals (Premier League)</span>
</td><td className="py-5 pr-8">11</td><td className="py-5 pr-8">6</td><td className="py-5 pr-8">71%</td><td className="py-5 font-medium">£1,740</td>
</tr>

<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Spain" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/es.png"/>
<span className="font-medium">Over 2.5 Goals (La Liga)</span>
</td><td className="py-5 pr-8">13</td><td className="py-5 pr-8">4</td><td className="py-5 pr-8">75%</td><td className="py-5 font-medium">£2,020</td>
</tr>
<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Spain" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/es.png"/>
<span className="font-medium">Both Teams To Score (La Liga)</span>
</td><td className="py-5 pr-8">10</td><td className="py-5 pr-8">7</td><td className="py-5 pr-8">68%</td><td className="py-5 font-medium">£1,560</td>
</tr>

<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Italy" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/it.png"/>
<span className="font-medium">Under 1.5 Goals (Serie A)</span>
</td><td className="py-5 pr-8">9</td><td className="py-5 pr-8">8</td><td className="py-5 pr-8">66%</td><td className="py-5 font-medium">£1,320</td>
</tr>
<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Italy" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/it.png"/>
<span className="font-medium">Over 7 Corners (Serie A)</span>
</td><td className="py-5 pr-8">12</td><td className="py-5 pr-8">5</td><td className="py-5 pr-8">73%</td><td className="py-5 font-medium">£1,890</td>
</tr>

<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Germany" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/de.png"/>
<span className="font-medium">Over 3.5 Goals (Bundesliga)</span>
</td><td className="py-5 pr-8">14</td><td className="py-5 pr-8">4</td><td className="py-5 pr-8">80%</td><td className="py-5 font-medium">£2,450</td>
</tr>
<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Germany" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/de.png"/>
<span className="font-medium">Both Teams To Score (Bundesliga)</span>
</td><td className="py-5 pr-8">11</td><td className="py-5 pr-8">6</td><td className="py-5 pr-8">72%</td><td className="py-5 font-medium">£1,780</td>
</tr>

<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="France" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/fr.png"/>
<span className="font-medium">Over 2.5 Goals (Ligue 1)</span>
</td><td className="py-5 pr-8">12</td><td className="py-5 pr-8">5</td><td className="py-5 pr-8">74%</td><td className="py-5 font-medium">£1,960</td>
</tr>
<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="France" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/fr.png"/>
<span className="font-medium">Under 2.5 Goals (Ligue 1)</span>
</td><td className="py-5 pr-8">10</td><td className="py-5 pr-8">7</td><td className="py-5 pr-8">69%</td><td className="py-5 font-medium">£1,540</td>
</tr>

<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Netherlands" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/nl.png"/>
<span className="font-medium">Over 1.5 Goals (Eredivisie)</span>
</td><td className="py-5 pr-8">16</td><td className="py-5 pr-8">3</td><td className="py-5 pr-8">82%</td><td className="py-5 font-medium">£2,610</td>
</tr>
<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Netherlands" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/nl.png"/>
<span className="font-medium">Both Teams To Score (Eredivisie)</span>
</td><td className="py-5 pr-8">13</td><td className="py-5 pr-8">4</td><td className="py-5 pr-8">78%</td><td className="py-5 font-medium">£2,020</td>
</tr>

<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Portugal" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/pt.png"/>
<span className="font-medium">Over 7 Corners (Primeira Liga)</span>
</td><td className="py-5 pr-8">11</td><td className="py-5 pr-8">6</td><td className="py-5 pr-8">70%</td><td className="py-5 font-medium">£1,720</td>
</tr>
<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Portugal" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/pt.png"/>
<span className="font-medium">Under 2.5 Goals (Primeira Liga)</span>
</td><td className="py-5 pr-8">10</td><td className="py-5 pr-8">7</td><td className="py-5 pr-8">67%</td><td className="py-5 font-medium">£1,480</td>
</tr>

<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="USA" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/us.png"/>
<span className="font-medium">Over 2.5 Goals (MLS)</span>
</td><td className="py-5 pr-8">14</td><td className="py-5 pr-8">4</td><td className="py-5 pr-8">79%</td><td className="py-5 font-medium">£2,320</td>
</tr>
<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="USA" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/us.png"/>
<span className="font-medium">Both Teams To Score (MLS)</span>
</td><td className="py-5 pr-8">12</td><td className="py-5 pr-8">5</td><td className="py-5 pr-8">74%</td><td className="py-5 font-medium">£1,980</td>
</tr>

<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Scotland" className="w-8 h-6 object-cover rounded-sm" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="font-medium">Over 1.5 Goals (Scottish Prem.)</span>
</td><td className="py-5 pr-8">13</td><td className="py-5 pr-8">5</td><td className="py-5 pr-8">77%</td><td className="py-5 font-medium">£2,040</td>
</tr>
<tr>
<td className="py-5 pr-8 flex items-center gap-3">
<img alt="Scotland" className="w-8 h-6 object-cover rounded-sm" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="font-medium">Under 2.5 Goals (Scottish Prem.)</span>
</td><td className="py-5 pr-8">9</td><td className="py-5 pr-8">8</td><td className="py-5 pr-8">65%</td><td className="py-5 font-medium">£1,280</td>
</tr>
</tbody>
</table>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">

<div className="flex flex-col items-center text-center text-xs md:text-sm text-slate-600">
<i className="w-6 h-6 mb-2" data-lucide="arrow-down"></i>
<p>This will be a list of all the available markets we have on our database. This item will be clickable. The next page will give more details for the item</p>
</div>
<div className="flex flex-col items-center text-center text-xs md:text-sm text-slate-600">
<i className="w-6 h-6 mb-2" data-lucide="arrow-down"></i>
<p>Unclickable. This will calculate the longest winning streak achieved within the chosen time frame</p>
</div>
<div className="flex flex-col items-center text-center text-xs md:text-sm text-slate-600">
<i className="w-6 h-6 mb-2" data-lucide="arrow-down"></i>
<p>Unclickable. This will calculate the longest losing streak achieved within the chosen time frame</p>
</div>
<div className="flex flex-col items-center text-center text-xs md:text-sm text-slate-600">
<i className="w-6 h-6 mb-2" data-lucide="arrow-down"></i>
<p>This will calculate the % times the market successfully hits during the timeframe</p>
</div>
<div className="flex flex-col items-center text-center text-xs md:text-sm text-slate-600">
<i className="w-6 h-6 mb-2" data-lucide="arrow-down"></i>
<p>The total amount made during the chosen timeframe</p>
</div>
</div>
<div className="mt-12">
<button className="inline-flex items-center px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-700" id="downloadBtn">
<i className="w-4 h-4 mr-2" data-lucide="download"></i>
          Download HTML
        </button>
</div>
</section>
</div>

    </>
  );
}
