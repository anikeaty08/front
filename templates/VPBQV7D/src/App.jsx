import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    // Fade-in word by word
    document.querySelectorAll('[data-animate]').forEach(block=>{
      const spans = block.querySelectorAll('span');
      spans.forEach((span,i)=> setTimeout(()=>{span.style.opacity=1}, i*120));
    });

    // Charts
    const deptCtx = document.getElementById('deptChart');
    new Chart(deptCtx, {
      type: 'doughnut',
      data: {
        labels: ['Front Desk', 'Concierge', 'Security', 'Maintenance', 'Management'],
        datasets: [{
          data: [40, 25, 15, 10, 10],
          backgroundColor: ['#3B82F6','#A5B4FC','#60A5FA','#BFDBFE','#DBEAFE'],
          borderWidth: 0
        }]
      },
      options: {
        plugins: { legend: { position:'bottom', labels:{ boxWidth:12, color:'#64748B', font:{family:'Inter',size:12}} } },
        cutout:'65%'
      }
    });

    const hireCtx = document.getElementById('hireChart');
    new Chart(hireCtx, {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Hires',
          data: [5,8,6,7,9,3,4,6,8,5,7,4],
          backgroundColor:'#3B82F6',
          borderRadius:4
        }]
      },
      options: {
        plugins:{ legend:{ display:false } },
        scales:{
          y:{ grid:{ color:'#E2E8F0' }, ticks:{ color:'#64748B', font:{ family:'Inter' } } },
          x:{ grid:{ display:false }, ticks:{ color:'#64748B', font:{ family:'Inter' } } }
        }
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-20 bg-white flex flex-col items-center py-6 border-r border-slate-200">
<button className="mb-10">
<i className="text-blue-500 w-6 h-6" data-lucide="circle"></i>
</button>
<nav className="space-y-8">
<button aria-label="Dashboard" className="group">
<i className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" data-lucide="layout-dashboard"></i>
</button>
<button aria-label="Employees" className="group">
<i className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" data-lucide="users"></i>
</button>
<button aria-label="Reports" className="group">
<i className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" data-lucide="bar-chart-3"></i>
</button>
<button aria-label="Settings" className="group">
<i className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" data-lucide="settings"></i>
</button>
</nav>
</aside>

<main className="flex-1 overflow-y-auto p-10">

<div className="flex items-center justify-between mb-10">
<div>
<h1 className="text-5xl font-semibold tracking-tight text-slate-900 flex flex-wrap" data-animate="">
<span style={{opacity: '0', transition: 'opacity .6s ease'}}>Employee</span>
<span className="ml-2" style={{opacity: '0', transition: 'opacity .6s ease'}}>Overview</span>
</h1>
<p className="text-base text-slate-500 mt-2" data-animate="">
<span style={{opacity: '0', transition: 'opacity .6s ease'}}>HR</span>
<span className="ml-1" style={{opacity: '0', transition: 'opacity .6s ease'}}>Department</span>
<span className="ml-1" style={{opacity: '0', transition: 'opacity .6s ease'}}>Dashboard</span>
</p>
</div>
<div className="flex items-center gap-4">
<button className="relative">
<i className="w-6 h-6 text-slate-500 hover:text-blue-500 transition-colors" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-blue-500 rounded-full"></span>
</button>
<img alt="User" className="rounded-full border border-slate-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
<div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow transition-shadow">
<p className="text-sm text-slate-500 mb-1">Total Employees</p>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">1,248</h2>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow transition-shadow">
<p className="text-sm text-slate-500 mb-1">New Hires</p>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">32</h2>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow transition-shadow">
<p className="text-sm text-slate-500 mb-1">Attrition</p>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">4%</h2>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow transition-shadow">
<p className="text-sm text-slate-500 mb-1">Open Positions</p>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">12</h2>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow transition-shadow">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4">Department Distribution</h3>
<div>
<canvas id="deptChart"></canvas>
</div>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow transition-shadow">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4">Monthly Hiring</h3>
<div>
<canvas id="hireChart"></canvas>
</div>
</div>
</section>
</main>


    </>
  );
}
