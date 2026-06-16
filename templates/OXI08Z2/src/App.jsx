import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        // Fade in animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // Sales Chart
        new Chart(document.getElementById('salesChart'), {
            type: 'bar',
            data: {
                labels: ['North', 'West', 'East', 'South'],
                datasets: [{
                    data: [75, 60, 55, 80],
                    backgroundColor: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981'],
                    borderRadius: 8,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { 
                        beginAtZero: true,
                        grid: { color: '#f1f5f9' },
                        ticks: { color: '#64748b', font: { size: 12 } }
                    },
                    x: { 
                        grid: { display: false },
                        ticks: { color: '#64748b', font: { size: 12 } }
                    }
                }
            }
        });

        // Popular Categories Chart
        new Chart(document.getElementById('popularChart'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [36, 32, 18, 10, 4],
                    backgroundColor: ['#6366f1', '#8b5cf6', '#3b82f6', '#6366f1', '#94a3b8'],
                    borderWidth: 0,
                    cutout: '70%'
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } }
            },
            plugins: [{
                id: 'centerText',
                afterDraw: (chart) => {
                    const { ctx, width, height } = chart;
                    ctx.save();
                    ctx.font = 'bold 18px Inter';
                    ctx.fillStyle = '#1f2937';
                    ctx.textAlign = 'center';
                    ctx.fillText('12,234', width / 2, height / 2);
                    ctx.restore();
                }
            }]
        });

        // Category Breakdown Chart
        new Chart(document.getElementById('breakdownChart'), {
            type: 'pie',
            data: {
                datasets: [{
                    data: [36, 32, 18, 14],
                    backgroundColor: ['#6366f1', '#8b5cf6', '#3b82f6', '#6366f1'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } }
            }
        });

        // Radar Chart
        new Chart(document.getElementById('radarChart'), {
            type: 'radar',
            data: {
                labels: ['Social', 'Entertainment', 'Productivity', 'Utilities', 'Other'],
                datasets: [
                    {
                        label: 'Teenagers',
                        data: [65, 59, 80, 81, 56],
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderColor: '#3b82f6',
                        borderWidth: 2,
                        pointBackgroundColor: '#3b82f6'
                    },
                    {
                        label: 'Adults',
                        data: [28, 48, 40, 19, 96],
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        borderColor: '#6366f1',
                        borderWidth: 2,
                        pointBackgroundColor: '#6366f1'
                    },
                    {
                        label: 'Seniors',
                        data: [35, 29, 50, 41, 36],
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderColor: '#10b981',
                        borderWidth: 2,
                        pointBackgroundColor: '#10b981'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    r: {
                        beginAtZero: true,
                        grid: { color: '#e2e8f0' },
                        angleLines: { color: '#e2e8f0' },
                        pointLabels: { 
                            color: '#64748b',
                            font: { size: 12 }
                        },
                        ticks: { display: false }
                    }
                }
            }
        });
    });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

<div className="fade-in mb-8 visible" style={{animationDelay: '0.1s'}}>
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-2">Analytics Dashboard</h1>
<p className="text-gray-600">Monitor your business performance with real-time insights</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="fade-in card-hover glass-effect rounded-2xl border border-white/20 shadow-lg p-6 visible" style={{animationDelay: '0.2s'}}>
<div className="flex items-start justify-between mb-6">
<div>
<h2 className="text-lg font-medium text-gray-900 tracking-tight flex items-center gap-2">
                            Sales by Division
                            <svg className="lucide lucide-help-circle w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</h2>
<p className="text-sm text-gray-500 mt-1">Regional performance metrics and trends</p>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-gray-500" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
<svg className="lucide lucide-more-vertical w-5 h-5 text-gray-500" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
</div>
<div className="grid grid-cols-3 gap-6 mb-8">
<div className="text-center">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Customers</p>
<h3 className="text-2xl font-semibold text-gray-900">456</h3>
<div className="flex items-center justify-center gap-1 mt-2">
<svg className="lucide lucide-trending-up w-3 h-3 text-emerald-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-sm font-medium text-emerald-600">24%</span>
</div>
</div>
<div className="text-center">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">New Customers</p>
<h3 className="text-2xl font-semibold text-gray-900">156</h3>
<div className="flex items-center justify-center gap-1 mt-2">
<svg className="lucide lucide-trending-up w-3 h-3 text-emerald-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-sm font-medium text-emerald-600">14%</span>
</div>
</div>
<div className="text-center">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Avg. Sales</p>
<h3 className="text-2xl font-semibold text-gray-900">$145.34</h3>
<div className="flex items-center justify-center gap-1 mt-2">
<svg className="lucide lucide-trending-down w-3 h-3 text-red-500" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-sm font-medium text-red-600">24%</span>
</div>
</div>
</div>
<div className="relative">
<canvas className="w-full" height="400" id="salesChart" style={{height: '200px', display: 'block', boxSizing: 'border-box', width: '546px'}} width="1092"></canvas>
</div>
</div>

<div className="fade-in card-hover glass-effect rounded-2xl border border-white/20 shadow-lg p-6 visible" style={{animationDelay: '0.3s'}}>
<div className="flex items-start justify-between mb-6">
<div>
<h2 className="text-lg font-medium text-gray-900 tracking-tight flex items-center gap-2">
                            Popular Categories
                            <svg className="lucide lucide-help-circle w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</h2>
<p className="text-sm text-gray-500 mt-1">User engagement across different categories</p>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
<svg className="lucide lucide-pie-chart w-5 h-5 text-gray-500" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
<svg className="lucide lucide-more-vertical w-5 h-5 text-gray-500" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
</div>
<div className="flex flex-col lg:flex-row items-center gap-8">
<div className="relative flex-shrink-0">
<canvas className="max-w-[200px] max-h-[200px]" height="400" id="popularChart" style={{display: 'block', boxSizing: 'border-box', height: '200px', width: '200px'}} width="400"></canvas>
</div>
<div className="flex-1 space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Daily Average</p>
<p className="text-xl font-semibold text-gray-900">5h 12m</p>
</div>
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Monthly Average</p>
<p className="text-xl font-semibold text-gray-900">145h 28m</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-indigo-600"></div>
<span className="text-sm font-medium text-gray-700">Social</span>
</div>
<span className="text-sm text-gray-500">36%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-purple-600"></div>
<span className="text-sm font-medium text-gray-700">Entertainment</span>
</div>
<span className="text-sm text-gray-500">32%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-blue-500"></div>
<span className="text-sm font-medium text-gray-700">Productivity</span>
</div>
<span className="text-sm text-gray-500">18%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-indigo-400"></div>
<span className="text-sm font-medium text-gray-700">Utilities</span>
</div>
<span className="text-sm text-gray-500">10%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-slate-400"></div>
<span className="text-sm font-medium text-gray-700">Other</span>
</div>
<span className="text-sm text-gray-500">4%</span>
</div>
</div>
</div>
</div>
</div>

<div className="fade-in card-hover glass-effect rounded-2xl border border-white/20 shadow-lg p-6 visible" style={{animationDelay: '0.4s'}}>
<div className="flex items-start justify-between mb-6">
<div>
<h2 className="text-lg font-medium text-gray-900 tracking-tight flex items-center gap-2">
                            Category Breakdown
                            <svg className="lucide lucide-help-circle w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</h2>
<p className="text-sm text-gray-500 mt-1">Product category performance analysis</p>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5 text-gray-500" data-lucide="doughnut-chart"></i>
</button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
<svg className="lucide lucide-more-vertical w-5 h-5 text-gray-500" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-6 mb-8">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Daily Average</p>
<p className="text-xl font-semibold text-gray-900">3,234</p>
</div>
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Monthly Average</p>
<p className="text-xl font-semibold text-gray-900">84,234</p>
</div>
</div>
<div className="flex justify-center mb-6">
<canvas className="max-w-[200px] max-h-[200px]" height="400" id="breakdownChart" style={{display: 'block', boxSizing: 'border-box', height: '200px', width: '200px'}} width="400"></canvas>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-indigo-600"></div>
<span className="text-sm text-gray-700">Soft Drinks</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-purple-600"></div>
<span className="text-sm text-gray-700">Bread</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-blue-500"></div>
<span className="text-sm text-gray-700">Cereal</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-indigo-400"></div>
<span className="text-sm text-gray-700">Soups</span>
</div>
</div>
</div>

<div className="fade-in card-hover glass-effect rounded-2xl border border-white/20 shadow-lg p-6 visible" style={{animationDelay: '0.5s'}}>
<div className="flex items-start justify-between mb-6">
<div>
<h2 className="text-lg font-medium text-gray-900 tracking-tight flex items-center gap-2">
                            Age Demographics
                            <svg className="lucide lucide-help-circle w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</h2>
<p className="text-sm text-gray-500 mt-1">User engagement by age group</p>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
<svg className="lucide lucide-radar w-5 h-5 text-gray-500" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
</button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
<svg className="lucide lucide-more-vertical w-5 h-5 text-gray-500" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
</div>
<div className="mb-8">
<canvas className="w-full" height="480" id="radarChart" style={{height: '240px', display: 'block', boxSizing: 'border-box', width: '546px'}} width="1092"></canvas>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="text-center">
<div className="flex items-center justify-center gap-2 mb-2">
<div className="w-3 h-3 rounded-full bg-blue-500"></div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Teenagers</p>
</div>
<h3 className="text-xl font-semibold text-gray-900">456</h3>
<div className="flex items-center justify-center gap-1 mt-1">
<svg className="lucide lucide-trending-up w-3 h-3 text-emerald-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-sm font-medium text-emerald-600">24%</span>
</div>
</div>
<div className="text-center">
<div className="flex items-center justify-center gap-2 mb-2">
<div className="w-3 h-3 rounded-full bg-indigo-500"></div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Adults</p>
</div>
<h3 className="text-xl font-semibold text-gray-900">156</h3>
<div className="flex items-center justify-center gap-1 mt-1">
<svg className="lucide lucide-trending-up w-3 h-3 text-emerald-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-sm font-medium text-emerald-600">14%</span>
</div>
</div>
<div className="text-center">
<div className="flex items-center justify-center gap-2 mb-2">
<div className="w-3 h-3 rounded-full bg-emerald-500"></div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Seniors</p>
</div>
<h3 className="text-xl font-semibold text-gray-900">324</h3>
<div className="flex items-center justify-center gap-1 mt-1">
<svg className="lucide lucide-trending-down w-3 h-3 text-red-500" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-sm font-medium text-red-600">24%</span>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
