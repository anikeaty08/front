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
      lucide.createIcons();
      /* build dataset from all team cards */
      const labels=[], scores=[];
      document.querySelectorAll('#teams > section').forEach(sec=>{
        labels.push(sec.querySelector('h3').textContent.trim());
        const top=sec.querySelector('button span.text-sm.font-medium.text-amber-400')||sec.querySelector('button span.text-sm.font-medium');
        scores.push(parseInt(top.textContent,10)||0);
      });
      const colors=['#fbbf24','#4ade80','#60a5fa','#c084fc','#f472b6','#fb923c','#34d399','#a78bfa','#f87171','#38bdf8'];
      new Chart(document.getElementById('overviewChart').getContext('2d'),{
        type:'bar',
        data:{labels,datasets:[{data:scores,backgroundColor:scores.map((_,i)=>colors[i%colors.length]),borderRadius:6,borderSkipped:false}]},
        options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:'#9ca3af',font:{size:11}},grid:{display:false}},y:{display:false,suggestedMax:100}}}
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
      
<a className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-gray-800 text-gray-100 px-3 py-2 rounded-md transition" href="#main">Skip to main content</a>
<header className="sticky top-0 z-40 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
<div className="px-4 py-4 flex items-center justify-between">
<h1 className="text-xl font-semibold tracking-tight">Leaderboard</h1>
<button aria-label="Refresh" className="relative group focus:outline-none focus-visible:ring-2 ring-amber-400">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-100 transition" data-lucide="refresh-cw"></i>
</button>
</div>
</header>
<main className="px-4 pt-4 space-y-6" id="main">

<section aria-labelledby="overview-title" className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 space-y-3" style={{animation: `fadeInUp .5s both`}}>
<h2 className="text-lg font-medium tracking-tight" id="overview-title">Overall Top Scores</h2>
<p className="text-sm text-gray-400">Highest scorer in every team at a glance</p>
<div><canvas className="w-full h-36" id="overviewChart"></canvas></div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="teams">

<section aria-labelledby="alpha-title" className="rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 overflow-hidden" style={{animation: `fadeInUp .6s both`}}>
<header className="px-4 pt-4 pb-2 flex items-center justify-between">
<h3 className="text-lg font-medium" id="alpha-title">Team Alpha</h3>
<div className="flex items-center gap-1 text-amber-400"><i className="w-5 h-5" data-lucide="trophy"></i><span className="text-sm font-medium">Top 3</span></div>
</header>
<div className="divide-y divide-gray-700/60">
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-amber-400">
<span className="w-6 text-sm text-gray-400 font-medium">1</span>
<img alt="Ava Johnson" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-amber-400" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Ava Johnson</span>
<span className="text-sm font-medium text-amber-400">98</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">2</span>
<img alt="Liam Smith" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Liam Smith</span>
<span className="text-sm font-medium">89</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">3</span>
<img alt="Oliver Davis" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Oliver Davis</span>
<span className="text-sm font-medium">84</span>
</button>
</div>
</section>

<section aria-labelledby="beta-title" className="rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 overflow-hidden" style={{animation: `fadeInUp .65s both`}}>
<header className="px-4 pt-4 pb-2 flex items-center justify-between">
<h3 className="text-lg font-medium" id="beta-title">Team Beta</h3>
<div className="flex items-center gap-1 text-amber-400"><i className="w-5 h-5" data-lucide="trophy"></i><span className="text-sm font-medium">Top 3</span></div>
</header>
<div className="divide-y divide-gray-700/60">
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-amber-400">
<span className="w-6 text-sm text-gray-400 font-medium">1</span>
<img alt="Sophia Lee" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-amber-400" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Sophia Lee</span>
<span className="text-sm font-medium text-amber-400">96</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">2</span>
<img alt="Noah Brown" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Noah Brown</span>
<span className="text-sm font-medium">90</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">3</span>
<img alt="Mia Wilson" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Mia Wilson</span>
<span className="text-sm font-medium">82</span>
</button>
</div>
</section>

<section aria-labelledby="gamma-title" className="rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 overflow-hidden" style={{animation: `fadeInUp .7s both`}}>
<header className="px-4 pt-4 pb-2 flex items-center justify-between">
<h3 className="text-lg font-medium" id="gamma-title">Team Gamma</h3>
<div className="flex items-center gap-1 text-amber-400"><i className="w-5 h-5" data-lucide="trophy"></i><span className="text-sm font-medium">Top 3</span></div>
</header>
<div className="divide-y divide-gray-700/60">
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-amber-400">
<span className="w-6 text-sm text-gray-400 font-medium">1</span>
<img alt="Ella Martinez" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-amber-400" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Ella Martinez</span>
<span className="text-sm font-medium text-amber-400">94</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">2</span>
<img alt="James Anderson" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">James Anderson</span>
<span className="text-sm font-medium">87</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">3</span>
<img alt="Lucas Thompson" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Lucas Thompson</span>
<span className="text-sm font-medium">80</span>
</button>
</div>
</section>

<section aria-labelledby="delta-title" className="rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 overflow-hidden" style={{animation: `fadeInUp .75s both`}}>
<header className="px-4 pt-4 pb-2 flex items-center justify-between">
<h3 className="text-lg font-medium" id="delta-title">Team Delta</h3>
<div className="flex items-center gap-1 text-amber-400"><i className="w-5 h-5" data-lucide="trophy"></i><span className="text-sm font-medium">Top 3</span></div>
</header>
<div className="divide-y divide-gray-700/60">
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-amber-400">
<span className="w-6 text-sm text-gray-400 font-medium">1</span>
<img alt="Grace Miller" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-amber-400" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Grace Miller</span>
<span className="text-sm font-medium text-amber-400">91</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">2</span>
<img alt="Henry Moore" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Henry Moore</span>
<span className="text-sm font-medium">84</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">3</span>
<img alt="Isabella Scott" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Isabella Scott</span>
<span className="text-sm font-medium">79</span>
</button>
</div>
</section>

<section aria-labelledby="epsilon-title" className="rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 overflow-hidden" style={{animation: `fadeInUp .8s both`}}>
<header className="px-4 pt-4 pb-2 flex items-center justify-between">
<h3 className="text-lg font-medium" id="epsilon-title">Team Epsilon</h3>
<div className="flex items-center gap-1 text-amber-400"><i className="w-5 h-5" data-lucide="trophy"></i><span className="text-sm font-medium">Top 3</span></div>
</header>
<div className="divide-y divide-gray-700/60">
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-amber-400">
<span className="w-6 text-sm text-gray-400 font-medium">1</span>
<img alt="Zoe Parker" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-amber-400" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Zoe Parker</span>
<span className="text-sm font-medium text-amber-400">93</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">2</span>
<img alt="Ethan Rivera" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Ethan Rivera</span>
<span className="text-sm font-medium">86</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">3</span>
<img alt="Chloe Ramirez" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Chloe Ramirez</span>
<span className="text-sm font-medium">78</span>
</button>
</div>
</section>

<section aria-labelledby="zeta-title" className="rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 overflow-hidden" style={{animation: `fadeInUp .85s both`}}>
<header className="px-4 pt-4 pb-2 flex items-center justify-between">
<h3 className="text-lg font-medium" id="zeta-title">Team Zeta</h3>
<div className="flex items-center gap-1 text-amber-400"><i className="w-5 h-5" data-lucide="trophy"></i><span className="text-sm font-medium">Top 3</span></div>
</header>
<div className="divide-y divide-gray-700/60">
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-amber-400">
<span className="w-6 text-sm text-gray-400 font-medium">1</span>
<img alt="Jack Hughes" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-amber-400" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Jack Hughes</span>
<span className="text-sm font-medium text-amber-400">92</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">2</span>
<img alt="Lily Foster" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Lily Foster</span>
<span className="text-sm font-medium">85</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">3</span>
<img alt="Daniel Coleman" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Daniel Coleman</span>
<span className="text-sm font-medium">77</span>
</button>
</div>
</section>

<section aria-labelledby="eta-title" className="rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 overflow-hidden" style={{animation: `fadeInUp .9s both`}}>
<header className="px-4 pt-4 pb-2 flex items-center justify-between">
<h3 className="text-lg font-medium" id="eta-title">Team Eta</h3>
<div className="flex items-center gap-1 text-amber-400"><i className="w-5 h-5" data-lucide="trophy"></i><span className="text-sm font-medium">Top 3</span></div>
</header>
<div className="divide-y divide-gray-700/60">
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-amber-400">
<span className="w-6 text-sm text-gray-400 font-medium">1</span>
<img alt="Aria Warren" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-amber-400" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Aria Warren</span>
<span className="text-sm font-medium text-amber-400">90</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">2</span>
<img alt="Wyatt Brooks" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Wyatt Brooks</span>
<span className="text-sm font-medium">83</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">3</span>
<img alt="Nova Barnes" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Nova Barnes</span>
<span className="text-sm font-medium">76</span>
</button>
</div>
</section>

<section aria-labelledby="theta-title" className="rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 overflow-hidden" style={{animation: `fadeInUp .95s both`}}>
<header className="px-4 pt-4 pb-2 flex items-center justify-between">
<h3 className="text-lg font-medium" id="theta-title">Team Theta</h3>
<div className="flex items-center gap-1 text-amber-400"><i className="w-5 h-5" data-lucide="trophy"></i><span className="text-sm font-medium">Top 3</span></div>
</header>
<div className="divide-y divide-gray-700/60">
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-amber-400">
<span className="w-6 text-sm text-gray-400 font-medium">1</span>
<img alt="Leo Barrett" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-amber-400" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Leo Barrett</span>
<span className="text-sm font-medium text-amber-400">89</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">2</span>
<img alt="Stella Price" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Stella Price</span>
<span className="text-sm font-medium">82</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">3</span>
<img alt="Hudson Perry" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Hudson Perry</span>
<span className="text-sm font-medium">75</span>
</button>
</div>
</section>

<section aria-labelledby="iota-title" className="rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 overflow-hidden" style={{animation: `fadeInUp 1s both`}}>
<header className="px-4 pt-4 pb-2 flex items-center justify-between">
<h3 className="text-lg font-medium" id="iota-title">Team Iota</h3>
<div className="flex items-center gap-1 text-amber-400"><i className="w-5 h-5" data-lucide="trophy"></i><span className="text-sm font-medium">Top 3</span></div>
</header>
<div className="divide-y divide-gray-700/60">
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-amber-400">
<span className="w-6 text-sm text-gray-400 font-medium">1</span>
<img alt="Aurora Bishop" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-amber-400" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Aurora Bishop</span>
<span className="text-sm font-medium text-amber-400">88</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">2</span>
<img alt="Caleb Lane" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Caleb Lane</span>
<span className="text-sm font-medium">81</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">3</span>
<img alt="Paisley Dean" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Paisley Dean</span>
<span className="text-sm font-medium">74</span>
</button>
</div>
</section>

<section aria-labelledby="kappa-title" className="rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 overflow-hidden" style={{animation: `fadeInUp 1.05s both`}}>
<header className="px-4 pt-4 pb-2 flex items-center justify-between">
<h3 className="text-lg font-medium" id="kappa-title">Team Kappa</h3>
<div className="flex items-center gap-1 text-amber-400"><i className="w-5 h-5" data-lucide="trophy"></i><span className="text-sm font-medium">Top 3</span></div>
</header>
<div className="divide-y divide-gray-700/60">
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-amber-400">
<span className="w-6 text-sm text-gray-400 font-medium">1</span>
<img alt="Adam Snyder" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-amber-400" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Adam Snyder</span>
<span className="text-sm font-medium text-amber-400">87</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">2</span>
<img alt="Madeline Paul" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Madeline Paul</span>
<span className="text-sm font-medium">80</span>
</button>
<button className="w-full flex items-center px-4 py-3 hover:bg-gray-700/40 transition focus:outline-none focus-visible:ring-2 ring-gray-500">
<span className="w-6 text-sm text-gray-400 font-medium">3</span>
<img alt="Sawyer Boyd" className="w-9 h-9 rounded-full object-cover mx-3 border-2 border-gray-500" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=240&q=80" />
<span className="flex-1 text-left text-sm font-medium">Sawyer Boyd</span>
<span className="text-sm font-medium">73</span>
</button>
</div>
</section>
</div>
</main>

<nav aria-label="Primary" className="fixed bottom-0 inset-x-0 z-40 bg-gray-900/90 backdrop-blur-md border-t border-gray-800">
<ul className="flex justify-around">
<li><a className="flex flex-col items-center gap-0.5 py-3 text-gray-400 hover:text-gray-100 transition focus:outline-none focus-visible:ring-2 ring-amber-400" href="#"><i className="w-5 h-5" data-lucide="home"></i><span className="text-xs font-medium">Home</span></a></li>
<li><a className="flex flex-col items-center gap-0.5 py-3 text-amber-400 focus:outline-none focus-visible:ring-2 ring-amber-400" href="#main"><i className="w-5 h-5" data-lucide="bar-chart-3"></i><span className="text-xs font-medium">Leaders</span></a></li>
<li><a className="flex flex-col items-center gap-0.5 py-3 text-gray-400 hover:text-gray-100 transition focus:outline-none focus-visible:ring-2 ring-amber-400" href="#"><i className="w-5 h-5" data-lucide="user"></i><span className="text-xs font-medium">Profile</span></a></li>
</ul>
</nav>


    </>
  );
}
