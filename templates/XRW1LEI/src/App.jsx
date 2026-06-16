import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



lucide.createIcons();

const ctx = document.getElementById('usageChart');
const hours = Array.from({length: 24}, (_, i) => i + 1);
const randomSeries = () => hours.map(() => Math.floor(Math.random() * 16) + 6);

const data = {
  labels: hours,
  datasets: [
    {
      label: 'neural-forge-ai',
      backgroundColor: '#ef4444',
      data: randomSeries(),
      stack: 'combined',
      borderRadius: 2,
      barPercentage: 0.8,
      categoryPercentage: 0.9
    },
    {
      label: 'voice-synthesis',
      backgroundColor: '#f97316',
      data: randomSeries(),
      stack: 'combined',
      borderRadius: 2,
      barPercentage: 0.8,
      categoryPercentage: 0.9
    },
    {
      label: 'vision-pipeline',
      backgroundColor: '#f59e0b',
      data: randomSeries(),
      stack: 'combined',
      borderRadius: 2,
      barPercentage: 0.8,
      categoryPercentage: 0.9
    },
    {
      label: 'quantum-solver',
      backgroundColor: '#eab308',
      data: randomSeries(),
      stack: 'combined',
      borderRadius: 2,
      barPercentage: 0.8,
      categoryPercentage: 0.9
    }
  ]
};

const usageChart = new Chart(ctx, {
  type: 'bar',
  data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#171717',
        titleColor: '#ffffff',
        bodyColor: '#d4d4d4',
        borderColor: '#404040',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { 
          color: '#6b7280', 
          font: { family: 'Inter', size: 11 } 
        }
      },
      y: {
        beginAtZero: true,
        grid: { color: '#262626' },
        ticks: { 
          color: '#6b7280', 
          font: { family: 'Inter', size: 11 } 
        }
      }
    }
  }
});

const updateData = () => {
  usageChart.data.datasets.forEach(dataset => {
    dataset.data = randomSeries();
  });
  usageChart.update('none');
};

document.getElementById('range').addEventListener('change', updateData);
document.getElementById('type').addEventListener('change', updateData);

// Auto-refresh every 5 seconds
setInterval(updateData, 5000);

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 left-0 w-full h-screen -z-10 hue-rotate-15"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%"></iframe></div>
<div className="max-w-6xl mx-auto">

<div className="mb-8 fade-in" style={{animationDelay: '0.1s'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="p-2 rounded-lg bg-blue-600" style={{}}>
<svg className="lucide lucide-cpu w-5 h-5 text-white" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h1 className="pixel text-2xl lg:text-3xl tracking-tight font-space-grotesk text-white font-light" style={{}}>QUANTUM GPU</h1>
</div>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{}}></div>
<span className="text-sm font-geist text-zinc-400">Live</span>
</div>
</div>
<p className="text-sm font-geist text-zinc-400">Real-time GPU cluster monitoring and resource allocation</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="ring-1 fade-in bg-black rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-2xl ring-zinc-700/20" style={{animationDelay: '0.2s'}}>
<div className="flex items-center justify-between mb-6">
<h2 className="pixel text-xl tracking-tight font-geist text-white">RESOURCE OVERVIEW</h2>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-activity w-4 h-4 text-blue-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-sm font-geist text-zinc-400">Last updated: 2s ago</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="rounded-lg p-4 border hover:border-blue-500 transition-colors bg-zinc-800 border-zinc-800" style={{}}>
<div className="flex items-center space-x-2 mb-2">
<svg className="lucide lucide-zap w-4 h-4 text-yellow-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs uppercase tracking-wider font-geist text-zinc-400">Total GPUs</span>
</div>
<div className="text-2xl font-space-grotesk text-white font-light" style={{}}>42</div>
<div className="text-xs font-geist text-green-400" style={{}}>+3 from last hour</div>
</div>
<div className="rounded-lg p-4 border hover:border-green-500 transition-colors bg-zinc-800 border-zinc-800" style={{}}>
<div className="flex items-center space-x-2 mb-2">
<svg className="lucide lucide-server w-4 h-4 text-green-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="text-xs uppercase tracking-wider font-geist text-zinc-400">Active Units</span>
</div>
<div className="text-2xl font-space-grotesk text-white font-light" style={{}}>247</div>
<div className="text-xs font-geist text-green-400" style={{}}>89% utilization</div>
</div>
<div className="rounded-lg p-4 border hover:border-purple-500 transition-colors bg-zinc-800 border-zinc-800" style={{}}>
<div className="flex items-center space-x-2 mb-2">
<i className="w-4 h-4 text-purple-400" data-lucide="chip" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs uppercase tracking-wider font-geist text-zinc-400">A100s</span>
</div>
<div className="text-2xl font-space-grotesk text-white font-light" style={{}}>28</div>
<div className="text-xs font-geist text-blue-400" style={{}}>Premium tier</div>
</div>
<div className="rounded-lg p-4 border hover:border-red-500 transition-colors bg-zinc-800 border-zinc-800" style={{}}>
<div className="flex items-center space-x-2 mb-2">
<svg className="lucide lucide-cpu w-4 h-4 text-red-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-xs uppercase tracking-wider font-geist text-zinc-400">H100s</span>
</div>
<div className="text-2xl font-space-grotesk text-white font-light" style={{}}>14</div>
<div className="text-xs font-geist text-red-400" style={{}}>Ultra tier</div>
</div>
</div>

<div className="border rounded-lg p-4 mb-6 border-zinc-800" style={{}}>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-bar-chart-3 w-4 h-4 text-zinc-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="text-sm font-medium uppercase tracking-wider font-geist text-zinc-200">Usage Breakdown</span>
</div>
<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
<div className="relative">
<select className="appearance-none text-sm pl-3 pr-8 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white bg-zinc-800 border-zinc-800" id="range" style={{}}>
<option className="font-geist" value="24">Last 24 hours</option>
<option className="font-geist" value="168">Last 7 days</option>
<option className="font-geist" value="720">Last 30 days</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-2 top-2.5 w-4 h-4 pointer-events-none text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="relative">
<select className="appearance-none text-sm pl-3 pr-8 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white bg-zinc-800 border-zinc-800" id="type" style={{}}>
<option className="font-geist">A100 Cluster</option>
<option className="font-geist">H100 Cluster</option>
<option className="font-geist">Mixed Workload</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-2 top-2.5 w-4 h-4 pointer-events-none text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-red-500 rounded-full" style={{}}></div>
<span className="text-xs font-geist text-zinc-300">neural-forge-ai</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-orange-500 rounded-full" style={{}}></div>
<span className="text-xs font-geist text-zinc-300">voice-synthesis</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 rounded-full bg-amber-400" style={{}}></div>
<span className="text-xs font-geist text-zinc-300">vision-pipeline</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<span className="text-xs font-geist text-zinc-300">quantum-solver</span>
</div>
</div>

<div className="rounded-lg p-4 border bg-zinc-900 border-zinc-800" style={{}}>
<canvas className="w-full h-64" height="512" id="usageChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '678px'}} width="1356"></canvas>
</div>
</div>

<div className="ring-1 fade-in rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-2xl bg-black ring-zinc-700/20" style={{animationDelay: '0.4s'}}>
<h3 className="pixel text-lg text-white tracking-tight font-geist mb-4">PERFORMANCE METRICS</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg p-4 border bg-zinc-800 border-zinc-800" style={{}}>
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-geist text-zinc-400">Temperature</span>
<svg className="lucide lucide-thermometer w-4 h-4 text-blue-400" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<div className="text-xl font-medium font-geist text-white">72°C</div>
<div className="text-xs font-geist text-green-400" style={{}}>Optimal range</div>
</div>
<div className="rounded-lg p-4 border bg-zinc-800 border-zinc-800" style={{}}>
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-geist text-zinc-400">Power Draw</span>
<svg className="lucide lucide-battery-charging w-4 h-4 text-yellow-400" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
<div className="text-xl font-medium font-geist text-white">1.2MW</div>
<div className="text-xs font-geist text-yellow-400">High efficiency</div>
</div>
<div className="rounded-lg p-4 border bg-zinc-800 border-zinc-800" style={{}}>
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-geist text-zinc-400">Uptime</span>
<svg className="lucide lucide-clock w-4 h-4 text-green-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="text-xl font-medium font-geist text-white">99.9%</div>
<div className="text-xs font-geist text-green-400" style={{}}>42 days</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="ring-1 fade-in bg-black rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-2xl ring-zinc-700/20" style={{animationDelay: '0.3s'}}>
<div className="flex items-center space-x-2 mb-4">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="pixel text-lg tracking-tight font-geist text-white">SYSTEM STATUS</h3>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm font-geist text-zinc-400">Cluster Health</span>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-500 rounded-full" style={{}}></div>
<span className="text-sm font-geist text-green-400" style={{}}>Optimal</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-geist text-zinc-400">Load Balancer</span>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-500 rounded-full" style={{}}></div>
<span className="text-sm font-geist text-green-400" style={{}}>Active</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-geist text-zinc-400">Cooling System</span>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<span className="text-sm font-geist text-yellow-400">Moderate</span>
</div>
</div>
</div>
</div>

<div className="ring-1 fade-in bg-black rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-2xl ring-zinc-700/20" style={{animationDelay: '0.5s'}}>
<div className="flex items-center space-x-2 mb-4">
<svg className="lucide lucide-play-circle w-4 h-4 text-blue-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<h3 className="pixel text-lg tracking-tight font-geist text-white">ACTIVE JOBS</h3>
</div>
<div className="space-y-3">
<div className="rounded-lg p-3 border bg-zinc-800 border-zinc-800" style={{}}>
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-geist text-white">neural-forge-ai</span>
<span className="text-xs font-geist text-green-400" style={{}}>Running</span>
</div>
<div className="text-xs font-geist text-zinc-400">GPUs: 12 • ETA: 2.3h</div>
</div>
<div className="rounded-lg p-3 border bg-zinc-800 border-zinc-800" style={{}}>
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-geist text-white">vision-pipeline</span>
<span className="text-xs font-geist text-yellow-400">Queued</span>
</div>
<div className="text-xs font-geist text-zinc-400">GPUs: 8 • ETA: 1.7h</div>
</div>
<div className="rounded-lg p-3 border bg-zinc-800 border-zinc-800" style={{}}>
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-geist text-white">quantum-solver</span>
<span className="text-xs font-geist text-blue-400" style={{}}>Starting</span>
</div>
<div className="text-xs font-geist text-zinc-400">GPUs: 4 • ETA: 45m</div>
</div>
</div>
</div>

<div className="ring-1 fade-in bg-black rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-2xl ring-zinc-700/20" style={{animationDelay: '0.6s'}}>
<div className="flex items-center space-x-2 mb-4">
<svg className="lucide lucide-pie-chart w-4 h-4 text-purple-400" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<h3 className="pixel text-lg tracking-tight font-geist text-white">ALLOCATION</h3>
</div>
<div className="space-y-3">
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-geist text-zinc-400">Compute</span>
<span className="text-sm font-geist text-white">78%</span>
</div>
<div className="w-full rounded-full h-2 bg-zinc-800">
<div className="bg-blue-500 h-2 rounded-full" style={{width: '78%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-geist text-zinc-400">Memory</span>
<span className="text-sm font-geist text-white">65%</span>
</div>
<div className="w-full rounded-full h-2 bg-zinc-800">
<div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-geist text-zinc-400">Storage</span>
<span className="text-sm font-geist text-white">42%</span>
</div>
<div className="w-full rounded-full h-2 bg-zinc-800">
<div className="bg-yellow-500 h-2 rounded-full" style={{width: '42%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
