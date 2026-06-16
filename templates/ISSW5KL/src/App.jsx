import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif']
},
colors: {
olive: {
700: '#3D9970'
}
}
}
}
}



document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons with 1.5 stroke width
  lucide.createIcons({
    attrs: {
      'stroke-width': 1.5
    }
  });

  // Add event listeners to the league selectors
  const primaryLeague = document.getElementById('primaryLeague');
  const comparisonLeague = document.getElementById('comparisonLeague');
  const timeframe = document.getElementById('timeframe');
  
  // Update chart title when leagues change
  function updateChartTitle() {
    const chartTitle = document.querySelector('.text-sm.text-gray-500.mb-4 span');
    chartTitle.textContent = `League Comparison: ${primaryLeague.value} vs ${comparisonLeague.value}`;
  }
  
  primaryLeague.addEventListener('change', updateChartTitle);
  comparisonLeague.addEventListener('change', updateChartTitle);
  timeframe.addEventListener('change', () => {
    // In a real app, this would update the data based on the timeframe
    console.log('Timeframe changed to:', timeframe.value);
  });

  // Line Chart - now with only 2 datasets for comparison
  const ctx = document.getElementById('lineChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Premier League',
          data: [15, 22, 28, 25, 30, 32, 35, 38, 40, 42],
          borderColor: '#b45309',
          backgroundColor: 'rgba(180, 83, 9, 0.1)',
          borderWidth: 2,
          pointBackgroundColor: '#b45309',
          tension: 0.4
        },
        {
          label: 'La Liga',
          data: [12, 18, 24, 22, 28, 30, 32, 35, 38, 40],
          borderColor: '#047857',
          backgroundColor: 'rgba(4, 120, 87, 0.1)',
          borderWidth: 2,
          pointBackgroundColor: '#047857',
          tension: 0.4
        }
      ]
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
          intersect: false,
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: £${context.raw}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            callback: function(value) {
              return '£' + value;
            }
          }
        }
      },
      interaction: {
        mode: 'index',
        intersect: false
      },
      elements: {
        point: {
          radius: 3,
          hoverRadius: 5
        }
      }
    }
  });
  
  // Simulated data for different leagues
  const leagueData = {
    'Premier League': [15, 22, 28, 25, 30, 32, 35, 38, 40, 42],
    'La Liga': [12, 18, 24, 22, 28, 30, 32, 35, 38, 40],
    'Serie A': [10, 16, 20, 24, 26, 28, 30, 32, 34, 37],
    'Bundesliga': [14, 20, 26, 24, 30, 33, 36, 39, 42, 45],
    'Ligue 1': [11, 17, 22, 20, 25, 28, 30, 33, 36, 38]
  };
  
  // League colors
  const leagueColors = {
    'Premier League': '#b45309',
    'La Liga': '#047857',
    'Serie A': '#1d4ed8',
    'Bundesliga': '#b91c1c',
    'Ligue 1': '#4338ca'
  };
  
  // Update chart when leagues change
  function updateChart() {
    const primary = primaryLeague.value;
    const comparison = comparisonLeague.value;
    
    chart.data.datasets[0].label = primary;
    chart.data.datasets[0].data = leagueData[primary];
    chart.data.datasets[0].borderColor = leagueColors[primary];
    chart.data.datasets[0].pointBackgroundColor = leagueColors[primary];
    
    chart.data.datasets[1].label = comparison;
    chart.data.datasets[1].data = leagueData[comparison];
    chart.data.datasets[1].borderColor = leagueColors[comparison];
    chart.data.datasets[1].pointBackgroundColor = leagueColors[comparison];
    
    // Update legend colors
    const legendItems = document.querySelectorAll('.flex.flex-wrap.items-center.gap-6.mt-6.text-sm .flex.items-center.gap-2');
    legendItems[0].querySelector('span:first-child').style.backgroundColor = leagueColors[primary];
    legendItems[0].querySelector('span:last-child').textContent = primary;
    legendItems[1].querySelector('span:first-child').style.backgroundColor = leagueColors[comparison];
    legendItems[1].querySelector('span:last-child').textContent = comparison;
    
    chart.update();
  }
  
  primaryLeague.addEventListener('change', updateChart);
  comparisonLeague.addEventListener('change', updateChart);
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl mx-auto p-6 space-y-8">

<header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 animate-[fadeIn_0.6s_ease-in-out]" style={{animationFillMode: 'both'}}>

<div>
<h1 className="text-2xl font-semibold">Over 2.5 Goals</h1>
<p className="text-3xl font-bold mt-1">£ 5,548</p>
<div className="mt-2 space-y-1 text-sm">
<div className="flex items-center gap-1 text-emerald-600">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>£800 (5.04%) from last season</span>
</div>
<div className="flex items-center gap-1 text-rose-600">
<i className="w-4 h-4" data-lucide="trending-down"></i>
<span>£80 (-0.94%) from last GW</span>
</div>
</div>
</div>

<div className="text-center md:text-left animate-[fadeIn_0.6s_0.1s_ease-in-out]" style={{animationFillMode: 'both'}}>
<div className="flex items-center gap-3">
<div>
<label className="block text-sm font-medium text-gray-500" htmlFor="inputCapital">Input Capital</label>
<input className="mt-1 p-2 block border border-gray-300 rounded-md text-lg font-semibold focus:ring-yellow-500 focus:border-yellow-500" id="inputCapital" type="text" value="£1000"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-500" htmlFor="riskTrade">Risk/trade</label>
<div className="relative mt-1">
<select className="block appearance-none p-2 border border-gray-300 rounded-md text-lg font-semibold focus:ring-yellow-500 focus:border-yellow-500 pr-8" id="riskTrade">
<option>5%</option>
<option>10%</option>
<option>15%</option>
<option>20%</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-3 ml-auto animate-[fadeIn_0.6s_0.2s_ease-in-out]" style={{animationFillMode: 'both'}}>
<div className="text-right">
<p className="font-semibold">Anna Katrina Marchesi</p>
<span className="inline-flex items-center gap-1 text-xs bg-yellow-700 text-white px-2 py-0.5 rounded-md">
<i className="w-3 h-3" data-lucide="shield"></i> Head of Administrator
        </span>
</div>
<img alt="" className="w-12 h-12 rounded-full object-cover ring-2 ring-yellow-100" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
</div>
</header>

<div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm font-medium animate-[fadeIn_0.6s_0.3s_ease-in-out]" style={{animationFillMode: 'both'}}>
<span className="text-gray-600">Select leagues to compare:</span>
<div className="relative">
<select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1.5 pr-8 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" id="primaryLeague">
<option selected="">Premier League</option>
<option>La Liga</option>
<option>Serie A</option>
<option>Bundesliga</option>
<option>Ligue 1</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<span className="text-gray-600">vs</span>
<div className="relative">
<select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1.5 pr-8 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" id="comparisonLeague">
<option>Premier League</option>
<option selected="">La Liga</option>
<option>Serie A</option>
<option>Bundesliga</option>
<option>Ligue 1</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<div className="relative ml-4">
<select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1.5 pr-8 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" id="timeframe">
<option selected="">All time</option>
<option>Last season</option>
<option>Last 3 seasons</option>
<option>Last 5 seasons</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 animate-[fadeIn_0.6s_0.4s_ease-in-out]" style={{animationFillMode: 'both'}}>
<div className="text-sm text-gray-500 mb-4 flex justify-between items-center">
<span>League Comparison: Premier League vs La Liga</span>
<div className="flex gap-2">
<button className="p-1 rounded-md hover:bg-gray-100 transition">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
<button className="p-1 rounded-md hover:bg-gray-100 transition">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
</button>
</div>
</div>
<div style={{height: '300px', position: 'relative'}}>
<canvas id="lineChart"></canvas>
</div>

<div className="flex flex-wrap items-center gap-6 mt-6 text-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-yellow-700"></span>
<span>Premier League</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-green-700"></span>
<span>La Liga</span>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 animate-[fadeIn_0.6s_0.5s_ease-in-out]" style={{animationFillMode: 'both'}}>
<h2 className="font-semibold mb-4">Seasonal analysis: success rate per quarter</h2>
<div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
<table className="min-w-full text-sm">
<thead className="bg-gray-50 text-gray-600">
<tr>
<th className="px-4 py-3 text-left font-medium">Season</th>
<th className="px-4 py-3 text-center font-medium">Q1</th>
<th className="px-4 py-3 text-center font-medium">Q2</th>
<th className="px-4 py-3 text-center font-medium">Q3</th>
<th className="px-4 py-3 text-center font-medium">Q4</th>
<th className="px-4 py-3 text-center font-medium">Total Income</th>
<th className="px-4 py-3 text-center font-medium">Winning Streak</th>
<th className="px-4 py-3 text-center font-medium">Losing Streak</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200 font-medium">
<tr className="hover:bg-gray-50 transition">
<td className="px-4 py-3 text-left">2024/2025</td>
<td className="px-4 py-3 text-center text-emerald-600">76%</td>
<td className="px-4 py-3 text-center">—</td>
<td className="px-4 py-3 text-center">—</td>
<td className="px-4 py-3 text-center">—</td>
<td className="px-4 py-3 text-center">£780</td>
<td className="px-4 py-3 text-center">6</td>
<td className="px-4 py-3 text-center">2</td>
</tr>
<tr className="hover:bg-gray-50 transition">
<td className="px-4 py-3 text-left">2023/2024</td>
<td className="px-4 py-3 text-center text-emerald-600">82%</td>
<td className="px-4 py-3 text-center text-emerald-600">78%</td>
<td className="px-4 py-3 text-center text-rose-600">64%</td>
<td className="px-4 py-3 text-center text-emerald-600">77%</td>
<td className="px-4 py-3 text-center">£2,450</td>
<td className="px-4 py-3 text-center">12</td>
<td className="px-4 py-3 text-center">5</td>
</tr>
<tr className="hover:bg-gray-50 transition">
<td className="px-4 py-3 text-left">2022/2023</td>
<td className="px-4 py-3 text-center text-emerald-600">79%</td>
<td className="px-4 py-3 text-center text-emerald-600">75%</td>
<td className="px-4 py-3 text-center text-emerald-600">71%</td>
<td className="px-4 py-3 text-center text-emerald-600">74%</td>
<td className="px-4 py-3 text-center">£2,320</td>
<td className="px-4 py-3 text-center">9</td>
<td className="px-4 py-3 text-center">4</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col animate-[fadeIn_0.6s_0.6s_ease-in-out]" style={{animationFillMode: 'both'}}>
<div className="flex items-start justify-between mb-4">
<span className="font-medium">Success Rate over the timeframe</span>
<button className="p-1 rounded-md hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-yellow-500">
<i className="w-5 h-5 text-gray-500" data-lucide="more-vertical"></i>
</button>
</div>
<div className="flex flex-col items-center justify-center flex-grow py-6">
<svg className="w-40 h-20" viewbox="0 0 36 18">
<path d="M2 16a16 16 0 0 1 32 0" fill="none" stroke="#e5e7eb" strokeLinecap="round" strokeWidth="4"></path>
<path d="M2 16a16 16 0 0 1 27 0" fill="none" stroke="#b45309" stroke-dasharray="100" stroke-dashoffset="25" strokeLinecap="round" strokeWidth="4"></path>
</svg>
<p className="text-3xl font-bold -mt-2">75%</p>
<p className="text-sm text-gray-500 mt-1">All-time success rate</p>
</div>
<div className="mt-6 space-y-4 text-sm">
<div className="flex items-center justify-between">
<span className="text-gray-600">Total games analyzed:</span>
<span className="font-medium">248</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-600">Average odds:</span>
<span className="font-medium">1.85</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-600">Return on investment:</span>
<span className="font-medium text-emerald-600">+38.75%</span>
</div>
</div>
</div>
</div>

<div className="animate-[fadeIn_0.6s_0.7s_ease-in-out]" style={{animationFillMode: 'both'}}>
<h2 className="font-semibold mb-4">Team Performance (Over 2.5 Goals)</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition">
<div className="flex items-center gap-3 mb-2">
<img alt="Manchester City" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1617507429086-e70f7f586c28?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div>
<h3 className="font-medium">Manchester City</h3>
<p className="text-xs text-gray-500">Premier League</p>
</div>
<span className="ml-auto text-2xl font-semibold text-emerald-600">86%</span>
</div>
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full" style={{width: '86%'}}></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition">
<div className="flex items-center gap-3 mb-2">
<img alt="Bayern Munich" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1608311397908-844047941428?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div>
<h3 className="font-medium">Bayern Munich</h3>
<p className="text-xs text-gray-500">Bundesliga</p>
</div>
<span className="ml-auto text-2xl font-semibold text-emerald-600">83%</span>
</div>
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full" style={{width: '83%'}}></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition">
<div className="flex items-center gap-3 mb-2">
<img alt="Barcelona" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div>
<h3 className="font-medium">Barcelona</h3>
<p className="text-xs text-gray-500">La Liga</p>
</div>
<span className="ml-auto text-2xl font-semibold text-emerald-600">79%</span>
</div>
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full" style={{width: '79%'}}></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition">
<div className="flex items-center gap-3 mb-2">
<img alt="Liverpool" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div>
<h3 className="font-medium">Liverpool</h3>
<p className="text-xs text-gray-500">Premier League</p>
</div>
<span className="ml-auto text-2xl font-semibold text-emerald-600">77%</span>
</div>
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full" style={{width: '77%'}}></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition">
<div className="flex items-center gap-3 mb-2">
<img alt="PSG" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div>
<h3 className="font-medium">PSG</h3>
<p className="text-xs text-gray-500">Ligue 1</p>
</div>
<span className="ml-auto text-2xl font-semibold text-emerald-600">76%</span>
</div>
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full" style={{width: '76%'}}></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition">
<div className="flex items-center gap-3 mb-2">
<img alt="Napoli" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1511426463457-0571e247d816?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div>
<h3 className="font-medium">Napoli</h3>
<p className="text-xs text-gray-500">Serie A</p>
</div>
<span className="ml-auto text-2xl font-semibold text-emerald-600">74%</span>
</div>
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full" style={{width: '74%'}}></div>
</div>
</div>
</div>
</div>

<div className="mt-10 animate-[fadeIn_0.6s_0.8s_ease-in-out]" style={{animationFillMode: 'both'}}>
<a className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" href="index.html">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
      Back to markets overview
    </a>
</div>
</div>


    </>
  );
}
