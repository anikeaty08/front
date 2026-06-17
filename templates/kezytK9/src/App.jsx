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
      
      let periodA = {from: new Date('2024-06-01'), to: new Date('2024-06-10')};
      let periodB = {from: new Date('2024-05-01'), to: new Date('2024-05-10')};
      let pickerTarget = null;

      function formatDate(d) {
        return d.toISOString().slice(0,10);
      }

      function labelRange(p) {
        return formatDate(p.from) + " to " + formatDate(p.to);
      }

      function genData(start, end) {
        const arr = [];
        let current = new Date(start);
        while (current <= end) {
          arr.push({
            date: new Date(current),
            value: Math.floor(400 + Math.random() * 200)
          });
          current.setDate(current.getDate() + 1);
        }
        return arr;
      }

      function updateDashboard() {
        const dataA = genData(periodA.from, periodA.to);
        const dataB = genData(periodB.from, periodB.to);

        const labelsA = dataA.map(d => `${d.date.getMonth()+1}/${d.date.getDate()}`);
        const valuesA = dataA.map(d => d.value);
        const labelsB = dataB.map(d => `${d.date.getMonth()+1}/${d.date.getDate()}`);
        const valuesB = dataB.map(d => d.value);

        const labels = labelsA.length > labelsB.length ? labelsA : labelsB;
        window.analyticsChart.data.labels = labels;
        window.analyticsChart.data.datasets[0].data = valuesA;
        window.analyticsChart.data.datasets[1].data = valuesB;
        window.analyticsChart.update();

        // Table values
        document.getElementById('pa-label').innerText = labelRange(periodA);
        document.getElementById('pb-label').innerText = labelRange(periodB);
        document.getElementById('pa-users').innerText = valuesA.reduce((a,b)=>a+b,0);
        document.getElementById('pb-users').innerText = valuesB.reduce((a,b)=>a+b,0);
        document.getElementById('delta-users').innerText = (valuesA.reduce((a,b)=>a+b,0) - valuesB.reduce((a,b)=>a+b,0));
        document.getElementById('periodA-preview').innerText = labelRange(periodA);
        document.getElementById('periodB-preview').innerText = labelRange(periodB);
      }

      function openPicker(target) {
        pickerTarget = target;
        document.getElementById('picker-modal').classList.remove('hidden');
        let p = target === 'A' ? periodA : periodB;
        document.getElementById('picker-from').value = formatDate(p.from);
        document.getElementById('picker-to').value = formatDate(p.to);
        document.getElementById('picker-title').innerText = "Select Period " + target;
      }

      function closePicker() {
        document.getElementById('picker-modal').classList.add('hidden');
      }

      function applyPicker() {
        const from = new Date(document.getElementById('picker-from').value);
        const to = new Date(document.getElementById('picker-to').value);
        if (pickerTarget === 'A') periodA = {from,to};
        else periodB = {from,to};
        closePicker();
        updateDashboard();
      }

      window.addEventListener('DOMContentLoaded', ()=>{
        const ctx = document.getElementById('analytics-chart').getContext('2d');
        window.analyticsChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [],
            datasets: [
              {label:"Period A", data:[], borderColor:'#14b8a6', backgroundColor:'rgba(20,184,166,0.15)', fill:true, tension:0.4},
              {label:"Period B", data:[], borderColor:'#6366f1', backgroundColor:'rgba(99,102,241,0.15)', fill:true, tension:0.4}
            ]
          },
          options: {
            responsive:true,
            plugins:{legend:{display:false}},
            scales:{
              y:{beginAtZero:true,ticks:{color:'#64748b'},grid:{color:'#e5e7eb'}},
              x:{ticks:{color:'#64748b'},grid:{display:false}}
            }
          }
        });
        updateDashboard();
      })
    
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
      
<div className="min-h-screen flex">

<aside className="w-64 bg-white border-r flex flex-col px-0 py-6">

<div className="flex items-center gap-2 px-7 mb-9">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-teal-400 to-purple-600 flex items-center justify-center"></div>
<span className="text-2xl font-bold text-gray-800 tracking-tight">Crufts</span>
</div>
<nav className="flex-1">

<ul>
<li>
<a className="flex items-center font-medium gap-3 px-7 py-2 rounded-lg bg-gray-100 text-teal-700" href="#">
<svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Dashboard
              </a>
</li>
<li className="mt-2">
<a className="flex items-center font-medium gap-3 px-7 py-2 rounded-lg text-gray-900 bg-teal-50 border-r-4 border-teal-600" href="#">
<svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 17v-6a2 2 0 012-2h6m4 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Analytics
              </a>
</li>

</ul>
</nav>
</aside>

<main className="flex-1 flex flex-col">

<header className="sticky top-0 z-20 bg-white border-b shadow-sm flex items-center justify-between px-10 h-20">
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Analytics</h1>
<div className="flex gap-2 ml-8">
<button className="px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 font-medium">Acquire</button>
<button className="px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 font-medium">Activate</button>
<button className="px-4 py-2 text-black font-semibold border-b-2 border-teal-600">Engage</button>
<button className="px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 font-medium">Activate</button>
</div>
<div className="flex items-center gap-5 ml-auto">
<div>
<label className="text-xs font-medium mb-1 text-gray-600 ml-1 block">Period A</label>
<button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium hover:bg-gray-100 focus:outline-none w-44 text-left" onclick="openPicker('A')">
<span id="periodA-preview"></span>
</button>
</div>
<div>
<label className="text-xs font-medium mb-1 text-gray-600 ml-1 block">Period B</label>
<button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium hover:bg-gray-100 focus:outline-none w-44 text-left" onclick="openPicker('B')">
<span id="periodB-preview"></span>
</button>
</div>
</div>
</header>
<section className="flex-1 px-10 py-8 overflow-y-auto">
<div className="bg-white rounded-xl shadow-md p-6 pb-4 w-full max-w-5xl mx-auto">
<div className="flex items-center justify-between mb-5">
<div>
<h2 className="text-lg font-semibold text-gray-800">Period A vs Period B</h2>
<span className="flex flex-col sm:flex-row items-start sm:items-center mt-2">
<span className="text-sm text-slate-500 break-all"> <span id="pa-label"></span> </span>
<span className="mx-2 text-slate-300 hidden sm:inline">|</span>
<span className="text-sm text-slate-500 break-all"> <span id="pb-label"></span> </span>
</span>
</div>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2 text-teal-700 text-sm">
<span className="h-3 w-3 rounded-full bg-teal-400"></span>
                  Period A
                </span>
<span className="flex items-center gap-2 text-indigo-600 text-sm">
<span className="h-3 w-3 rounded-full bg-indigo-300"></span>
                  Period B
                </span>
</div>
</div>
<div className="relative w-full h-56 mb-6 bg-slate-100 rounded-lg flex items-center justify-center">
<canvas className="w-full h-full" id="analytics-chart"></canvas>
</div>
<div className="overflow-x-auto border-t pt-5">
<table className="min-w-full text-left">
<thead>
<tr className="text-gray-600 text-sm font-semibold">
<th className="px-3 py-2">Comparators</th>
<th className="px-3 py-2">New users</th>
<th className="px-3 py-2">Revenue</th>
<th className="px-3 py-2">Engagement</th>
<th className="px-3 py-2">Metric X</th>
<th className="px-3 py-2">Metric Y</th>
<th className="px-3 py-2">Metric Z</th>
<th className="px-3 py-2">Status</th>
</tr>
</thead>
<tbody className="text-gray-900 text-base">
<tr>
<td className="px-3 py-2 font-medium">Period A<br/><span className="text-xs text-gray-400">Auto Range</span></td>
<td className="px-3 py-2" id="pa-users"></td>
<td className="px-3 py-2">£10,000</td>
<td className="px-3 py-2">75%</td>
<td className="px-3 py-2">75%</td>
<td className="px-3 py-2">75%</td>
<td className="px-3 py-2">75%</td>
<td className="px-3 py-2">
<span className="inline-block bg-gray-200 text-sm px-3 py-1 rounded-2xl font-medium text-gray-700">Improved</span>
</td>
</tr>
<tr>
<td className="px-3 py-2 font-medium">Period B<br/><span className="text-xs text-gray-400">Auto Range</span></td>
<td className="px-3 py-2" id="pb-users"></td>
<td className="px-3 py-2">£12,000</td>
<td className="px-3 py-2">80%</td>
<td className="px-3 py-2">80%</td>
<td className="px-3 py-2">80%</td>
<td className="px-3 py-2">80%</td>
<td className="px-3 py-2">
<span className="inline-block bg-gray-200 text-sm px-3 py-1 rounded-2xl font-medium text-gray-700">Improved</span>
</td>
</tr>
<tr className="border-t border-gray-200">
<td className="px-3 py-2 font-medium">Delta</td>
<td className="px-3 py-2 text-teal-700 font-semibold" id="delta-users"></td>
<td className="px-3 py-2 text-teal-700 font-semibold">+£2,000</td>
<td className="px-3 py-2 text-teal-700 font-semibold">+5%</td>
<td className="px-3 py-2 text-teal-700 font-semibold">+5%</td>
<td className="px-3 py-2 text-teal-700 font-semibold">+5%</td>
<td className="px-3 py-2 text-teal-700 font-semibold">+5%</td>
<td className="px-3 py-2">
<span className="inline-block bg-gray-200 text-sm px-3 py-1 rounded-2xl font-medium text-gray-700">Improved</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50 hidden" id="picker-modal">
<div className="bg-white w-80 rounded-lg shadow-lg p-5">
<div className="text-lg font-bold mb-2" id="picker-title">Select Period</div>
<div className="flex gap-2 mb-3">
<div className="flex-1">
<label className="text-xs text-slate-500 font-medium">From</label>
<input className="w-full border rounded mt-1 px-2 py-1.5 text-sm" id="picker-from" type="date"/>
</div>
<div className="flex-1">
<label className="text-xs text-slate-500 font-medium">To</label>
<input className="w-full border rounded mt-1 px-2 py-1.5 text-sm" id="picker-to" type="date"/>
</div>
</div>
<div className="flex justify-end gap-2 mt-6">
<button className="px-4 py-2 rounded border font-semibold" onclick="closePicker()">Cancel</button>
<button className="bg-teal-600 px-5 py-2 rounded text-white font-semibold hover:bg-teal-700" onclick="applyPicker()">Apply</button>
</div>
</div>
</div>

    </>
  );
}
