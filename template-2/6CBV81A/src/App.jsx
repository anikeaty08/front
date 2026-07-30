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
      
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize revenue chart with ML forecast
    const ctx = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Actual Revenue',
          data: [450, 520, 480, 650, 720, 680, 800, 850, 920, 1100, 1200, 1050],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.4,
          fill: true
        }, {
          label: 'ML Forecast',
          data: [null, null, null, null, null, null, null, null, null, 1100, 1180, 1250],
          borderColor: '#3b82f6',
          borderDash: [5, 5],
          tension: 0.4,
          pointBackgroundColor: '#3b82f6'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#e2e8f0' }
          }
        },
        scales: {
          y: {
            ticks: { color: '#94a3b8' },
            grid: { color: 'rgba(148, 163, 184, 0.1)' }
          },
          x: {
            ticks: { color: '#94a3b8' },
            grid: { color: 'rgba(148, 163, 184, 0.1)' }
          }
        }
      }
    });

    // Animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade-in').forEach(el => {
      observer.observe(el);
    });

    // Drill-down functionality
    document.querySelectorAll('.drill-down').forEach(element => {
      element.addEventListener('click', function() {
        // Simulate drill-down navigation
        console.log('Drill-down clicked:', this.textContent.trim());
        // In real implementation, this would navigate to detailed view
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
      

<header className="glass-effect bg-slate-800/50 border-b border-slate-700/50 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="trending-up"></i>
</div>
<div>
<h1 className="text-xl font-semibold tracking-tight">FinanceCore</h1>
<p className="text-xs text-slate-400">Enterprise Dashboard</p>
</div>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-emerald-400 border-b-2 border-emerald-400 pb-1" href="#">Overview</a>
<a className="text-sm text-slate-400 hover:text-slate-200 transition-colors" href="#">Analytics</a>
<a className="text-sm text-slate-400 hover:text-slate-200 transition-colors" href="#">Reports</a>
<a className="text-sm text-slate-400 hover:text-slate-200 transition-colors" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm">
<div className="w-2 h-2 bg-emerald-400 rounded-full status-indicator"></div>
<span className="text-slate-300">Live Data</span>
</div>
<button className="glass-effect bg-slate-700/50 p-2 rounded-lg hover:bg-slate-600/50 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
<div className="flex items-center gap-3">
<img alt="CFO" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" />
<div className="hidden sm:block">
<p className="text-sm font-medium">David Wilson</p>
<p className="text-xs text-slate-400">Chief Financial Officer</p>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 py-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<div className="animate-fade-in glass-effect bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 metric-card">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-blue-400" data-lucide="dollar-sign"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-300">Cash Flow</h3>
<p className="text-2xl font-semibold text-white">$2.4M</p>
</div>
</div>
<div className="flex items-center gap-1 text-emerald-400 text-sm">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>+12.5%</span>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-400">3-Month Forecast</span>
<span className="text-slate-200">$7.8M</span>
</div>
<div className="w-full bg-slate-700 rounded-full h-2">
<div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full" style={{width: `75%`}}></div>
</div>
</div>
</div>

<div className="animate-fade-in glass-effect bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 metric-card" style={{animationDelay: `0.1s`}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-emerald-400" data-lucide="bar-chart-3"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-300">Net Profit</h3>
<p className="text-2xl font-semibold text-white">$1.8M</p>
</div>
</div>
<div className="flex items-center gap-1 text-emerald-400 text-sm">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>+8.3%</span>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-400">vs Last Period</span>
<span className="text-emerald-400">+$142K</span>
</div>
<div className="text-xs text-slate-500">Margin: 18.7%</div>
</div>
</div>

<div className="animate-fade-in glass-effect bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 metric-card" style={{animationDelay: `0.2s`}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-purple-400" data-lucide="pie-chart"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-300">EBITDA</h3>
<p className="text-2xl font-semibold text-white">$3.2M</p>
</div>
</div>
<div className="flex items-center gap-1 text-emerald-400 text-sm">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>+15.2%</span>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-400">Margin</span>
<span className="text-slate-200">32.5%</span>
</div>
<div className="text-xs text-slate-500">Product A: 45% | Product B: 28%</div>
</div>
</div>

<div className="animate-fade-in glass-effect bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 metric-card" style={{animationDelay: `0.3s`}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-orange-400" data-lucide="shield-alert"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-300">D/E Ratio</h3>
<p className="text-2xl font-semibold text-white">0.42</p>
</div>
</div>
<div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
            LOW RISK
          </div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-400">Industry Avg</span>
<span className="text-slate-200">0.65</span>
</div>
<div className="text-xs text-emerald-400">Optimal leverage position</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

<div className="animate-fade-in glass-effect bg-slate-800/50 border border-slate-700/50 rounded-xl p-6" style={{animationDelay: `0.4s`}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Revenue Trend & ML Forecast</h3>
<p className="text-sm text-slate-400">12-month projection with confidence intervals</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">AI Enabled</button>
<button className="glass-effect bg-slate-700/50 p-1 rounded">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
<div className="chart-container">
<canvas id="revenueChart"></canvas>
</div>
</div>

<div className="animate-fade-in glass-effect bg-slate-800/50 border border-slate-700/50 rounded-xl p-6" style={{animationDelay: `0.5s`}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Customer Value Analysis</h3>
<p className="text-sm text-slate-400">LTV vs ARPU segmentation</p>
</div>
<button className="glass-effect bg-slate-700/50 p-1 rounded">
<i className="w-4 h-4" data-lucide="filter"></i>
</button>
</div>
<div className="space-y-4">
<div className="drill-down p-4 rounded-lg border border-slate-700/30 hover:border-emerald-500/30 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-white">Enterprise Clients</span>
<span className="text-emerald-400 text-sm">$12.5K LTV</span>
</div>
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>ARPU: $2,100</span>
<span>Count: 127</span>
</div>
<div className="w-full bg-slate-700 rounded-full h-2">
<div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: `85%`}}></div>
</div>
</div>
<div className="drill-down p-4 rounded-lg border border-slate-700/30 hover:border-emerald-500/30 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-white">SMB Clients</span>
<span className="text-blue-400 text-sm">$4.2K LTV</span>
</div>
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>ARPU: $650</span>
<span>Count: 543</span>
</div>
<div className="w-full bg-slate-700 rounded-full h-2">
<div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: `68%`}}></div>
</div>
</div>
<div className="drill-down p-4 rounded-lg border border-slate-700/30 hover:border-emerald-500/30 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-white">Startup Tier</span>
<span className="text-orange-400 text-sm">$1.8K LTV</span>
</div>
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>ARPU: $280</span>
<span>Count: 892</span>
</div>
<div className="w-full bg-slate-700 rounded-full h-2">
<div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{width: `42%`}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

<div className="animate-fade-in glass-effect bg-slate-800/50 border border-slate-700/50 rounded-xl p-6" style={{animationDelay: `0.6s`}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Channel ROI</h3>
<p className="text-sm text-slate-400">Profitability by sales channel</p>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 drill-down rounded-lg">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
<span className="text-sm text-slate-200">Direct Sales</span>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">340%</div>
<div className="text-xs text-slate-400">$2.1M revenue</div>
</div>
</div>
<div className="flex items-center justify-between p-3 drill-down rounded-lg">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
<span className="text-sm text-slate-200">Partner Channel</span>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">285%</div>
<div className="text-xs text-slate-400">$1.7M revenue</div>
</div>
</div>
<div className="flex items-center justify-between p-3 drill-down rounded-lg">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-purple-500 rounded-full"></div>
<span className="text-sm text-slate-200">Digital Marketing</span>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">195%</div>
<div className="text-xs text-slate-400">$980K revenue</div>
</div>
</div>
</div>
</div>

<div className="animate-fade-in glass-effect bg-slate-800/50 border border-slate-700/50 rounded-xl p-6" style={{animationDelay: `0.7s`}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white">KPI Alerts</h3>
<p className="text-sm text-slate-400">Real-time threshold monitoring</p>
</div>
<div className="w-2 h-2 bg-red-400 rounded-full status-indicator"></div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
<i className="w-4 h-4 text-red-400" data-lucide="alert-triangle"></i>
<div className="flex-1">
<div className="text-sm font-medium text-white">Cash Burn Rate</div>
<div className="text-xs text-red-400">15% above target</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
<i className="w-4 h-4 text-yellow-400" data-lucide="clock"></i>
<div className="flex-1">
<div className="text-sm font-medium text-white">Collection Period</div>
<div className="text-xs text-yellow-400">42 days (target: 35)</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle"></i>
<div className="flex-1">
<div className="text-sm font-medium text-white">Gross Margin</div>
<div className="text-xs text-emerald-400">Within target range</div>
</div>
</div>
</div>
</div>

<div className="animate-fade-in glass-effect bg-slate-800/50 border border-slate-700/50 rounded-xl p-6" style={{animationDelay: `0.8s`}}>
<div className="mb-6">
<h3 className="text-lg font-semibold text-white">Quick Actions</h3>
<p className="text-sm text-slate-400">Export & reporting tools</p>
</div>
<div className="space-y-3">
<button className="w-full flex items-center gap-3 p-3 glass-effect bg-slate-700/30 hover:bg-slate-600/30 rounded-lg transition-colors">
<i className="w-4 h-4 text-blue-400" data-lucide="file-text"></i>
<span className="text-sm text-slate-200">Generate PDF Report</span>
</button>
<button className="w-full flex items-center gap-3 p-3 glass-effect bg-slate-700/30 hover:bg-slate-600/30 rounded-lg transition-colors">
<i className="w-4 h-4 text-emerald-400" data-lucide="download"></i>
<span className="text-sm text-slate-200">Export to Excel</span>
</button>
<button className="w-full flex items-center gap-3 p-3 glass-effect bg-slate-700/30 hover:bg-slate-600/30 rounded-lg transition-colors">
<i className="w-4 h-4 text-purple-400" data-lucide="mail"></i>
<span className="text-sm text-slate-200">Email Stakeholders</span>
</button>
<button className="w-full flex items-center gap-3 p-3 glass-effect bg-slate-700/30 hover:bg-slate-600/30 rounded-lg transition-colors">
<i className="w-4 h-4 text-orange-400" data-lucide="settings"></i>
<span className="text-sm text-slate-200">Dashboard Settings</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="animate-fade-in glass-effect bg-slate-800/50 border border-slate-700/50 rounded-xl p-6" style={{animationDelay: `0.9s`}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white">System Integrations</h3>
<p className="text-sm text-slate-400">Real-time data sync status</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 border border-slate-700/30 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-slate-200">ERP System</span>
<div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
</div>
<div className="text-xs text-slate-400">Last sync: 2 min ago</div>
</div>
<div className="p-4 border border-slate-700/30 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-slate-200">Banking API</span>
<div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
</div>
<div className="text-xs text-slate-400">Last sync: 5 min ago</div>
</div>
<div className="p-4 border border-slate-700/30 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-slate-200">CRM Integration</span>
<div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
</div>
<div className="text-xs text-slate-400">Last sync: 1 min ago</div>
</div>
<div className="p-4 border border-slate-700/30 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-slate-200">HR System</span>
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
</div>
<div className="text-xs text-slate-400">Syncing...</div>
</div>
</div>
</div>

<div className="animate-fade-in glass-effect bg-slate-800/50 border border-slate-700/50 rounded-xl p-6" style={{animationDelay: `1s`}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Security & Compliance</h3>
<p className="text-sm text-slate-400">GDPR compliant with enterprise security</p>
</div>
<div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
            SECURE
          </div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-200">2FA Authentication</span>
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle"></i>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-200">Data Encryption</span>
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle"></i>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-200">Activity Logging</span>
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle"></i>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-200">GDPR Compliance</span>
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle"></i>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
