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
      
    // Icons
    lucide.createIcons({strokeWidth:1.5});

    // Intersection animation
    const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('animate-show');observer.unobserve(e.target)}})},{threshold:.1});
    document.querySelectorAll('tbody tr, .animate-show').forEach(el=>{el.classList.remove('animate-show');observer.observe(el)});

    // Chart.js
    const ctx=document.getElementById('teamChart');
    let chart;
    const chartData={
      astro:[8,10,12,9,11],
      velocity:[9,9,11,10,12],
      phantom:[7,8,10,9,9]
    };
    function renderChart(team){
      if(chart)chart.destroy();
      chart=new Chart(ctx,{type:'bar',
        data:{labels:['M1','M2','M3','M4','M5'],
          datasets:[{label:'Points',data:chartData[team],backgroundColor:'#6366F1',borderRadius:4,barThickness:30}]},
        options:{responsive:true,maintainAspectRatio:false,scales:{y:{grid:{color:'rgba(255,255,255,.05)'},ticks:{color:'#a1a1aa'}},x:{grid:{display:false},ticks:{color:'#a1a1aa'}}},plugins:{legend:{display:false}}}});
    }
    renderChart('astro');
    document.getElementById('teamSelector').addEventListener('change',e=>renderChart(e.target.value));
  
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
      

<header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-white/10">
<div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
<h1 className="text-2xl tracking-tight font-semibold flex items-center gap-2">
<span className="rounded border border-indigo-400/30 px-2 py-0.5">LX</span>
<span>Leaderboard</span>
</h1>

<button className="p-2 hover:bg-white/5 rounded transition">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="sun"></i>
</button>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 pb-16 pt-10 space-y-12">

<section className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">League Standings</h2>
<span className="text-sm text-zinc-400">Updated 2 min ago</span>
</div>
<div className="overflow-x-auto rounded-lg border border-white/10">
<table className="min-w-full divide-y divide-white/10 text-left">
<thead className="bg-white/5">
<tr>
<th className="px-4 py-3 text-xs font-medium uppercase tracking-wider">#</th>
<th className="px-4 py-3 text-xs font-medium uppercase tracking-wider">Club</th>
<th className="px-4 py-3 text-xs font-medium uppercase tracking-wider hidden sm:table-cell">W</th>
<th className="px-4 py-3 text-xs font-medium uppercase tracking-wider hidden sm:table-cell">L</th>
<th className="px-4 py-3 text-xs font-medium uppercase tracking-wider">Pts</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">

<tr className="hover:bg-white/5 transition animate-show">
<td className="px-4 py-3 font-medium">1 <i className="inline w-4 h-4 stroke-amber-400 ml-1" data-lucide="trophy"></i></td>
<td className="px-4 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-semibold">AL</div>
                Astro Legends
              </td>
<td className="px-4 py-3 hidden sm:table-cell">14</td>
<td className="px-4 py-3 hidden sm:table-cell">2</td>
<td className="px-4 py-3 font-semibold">42</td>
</tr>
<tr className="hover:bg-white/5 transition animate-show" style={{animationDelay: `.05s`}}>
<td className="px-4 py-3 font-medium">2</td>
<td className="px-4 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-xs font-semibold">VR</div>
                Velocity Riders
              </td>
<td className="px-4 py-3 hidden sm:table-cell">12</td>
<td className="px-4 py-3 hidden sm:table-cell">4</td>
<td className="px-4 py-3 font-semibold">36</td>
</tr>
<tr className="hover:bg-white/5 transition animate-show" style={{animationDelay: `.1s`}}>
<td className="px-4 py-3 font-medium">3</td>
<td className="px-4 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-xs font-semibold">PH</div>
                Phantom Hawks
              </td>
<td className="px-4 py-3 hidden sm:table-cell">11</td>
<td className="px-4 py-3 hidden sm:table-cell">5</td>
<td className="px-4 py-3 font-semibold">33</td>
</tr>

</tbody>
</table>
</div>
</section>

<section className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">Team Performance</h2>
<div className="flex items-center gap-2">
<label className="text-sm text-zinc-400 hidden sm:block" htmlFor="teamSelector">Team</label>
<select className="bg-zinc-900 border border-white/10 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-indigo-600" id="teamSelector">
<option value="astro">Astro Legends</option>
<option value="velocity">Velocity Riders</option>
<option value="phantom">Phantom Hawks</option>
</select>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-8 items-start">

<div className="bg-white/5 p-6 rounded-lg border border-white/10 animate-show" style={{animationDelay: `.15s`}}>
<h3 className="text-base font-medium mb-4 flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bar-chart-3"></i>
            Last 5 Matches (PTS)
          </h3>
<div className="relative">
<canvas className="h-60" id="teamChart"></canvas>
</div>
</div>

<div className="bg-white/5 p-6 rounded-lg border border-white/10 space-y-4 animate-show" style={{animationDelay: `.2s`}}>
<h3 className="text-base font-medium flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="users"></i>
            Active Roster
          </h3>
<ul className="divide-y divide-white/10">
<li className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<span>Jordan Pike</span>
</div>
<span className="text-sm text-zinc-400">Support</span>
</li>
<li className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<span>Alexia Stone</span>
</div>
<span className="text-sm text-zinc-400">Carry</span>
</li>
<li className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<span>Reid Neal</span>
</div>
<span className="text-sm text-zinc-400">Mid</span>
</li>
</ul>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 py-6 text-center text-sm text-zinc-500">
    © 2024 LX League. All rights reserved.
  </footer>



    </>
  );
}
