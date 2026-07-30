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

    // Evaluations Chart
    const ctx1 = document.getElementById('evaluationsChart').getContext('2d');
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Evaluations',
          data: [320000, 285000, 390000, 420000, 380000, 450000, 480000],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return value / 1000 + 'k';
              }
            }
          }
        }
      }
    });

    // Toggle Creation Chart
    const ctx2 = document.getElementById('toggleCreationChart').getContext('2d');
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Flags Created',
          data: [2, 0, 3, 1, 2, 0, 0],
          backgroundColor: '#10b981',
          borderColor: '#059669',
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              callback: function(value) {
                return value;
              }
            }
          }
        }
      }
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
      
<div className="flex h-full">

<aside className="hidden lg:flex flex-col w-60 border-r shadow-sm bg-white border-neutral-200">
<div className="flex items-center h-16 px-6 border-b border-neutral-100">
<div className="flex items-center gap-3">
<div className="w-9 h-9 logo-rocket flex items-center justify-center relative">
<svg className="relative z-10" fill="none" height="16" viewBox="0 0 16 16" width="16">
<path d="M8 1L10.5 5.5L15 6L11.5 9.5L12.5 15L8 12.5L3.5 15L4.5 9.5L1 6L5.5 5.5L8 1Z" fill="white" stroke="white" strokeLinejoin="round" strokeWidth="0.5"></path>
<circle cx="8" cy="8" fill="rgba(255,255,255,0.8)" r="1"></circle>
</svg>
<div className="rocket-trail"></div>
</div>
<span className="text-lg font-semibold tracking-tight">Launch Cheaply</span>
</div>
</div>
<nav className="flex-1 px-3 py-4 space-y-1">
<div className="text-xs font-medium uppercase text-neutral-500 px-3 mt-2 mb-3 tracking-wide">Main</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium border animate-fade-in stagger-1 bg-indigo-50 text-indigo-700 border-indigo-100" href="#">
<i className="w-4 h-4" data-lucide="home"></i>
          Dashboard
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-2 hover:bg-neutral-50 text-neutral-700" href="#">
<i className="w-4 h-4" data-lucide="flag"></i>
          Feature Flags
          <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">2</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-3 hover:bg-neutral-50 text-neutral-700" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
          Segments
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-4 hover:bg-neutral-50 text-neutral-700" href="#">
<i className="w-4 h-4" data-lucide="layers"></i>
          Environments
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-5 hover:bg-neutral-50 text-neutral-700" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i>
          Audit Logs
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-6 hover:bg-neutral-50 text-neutral-700" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
          Team
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-7 hover:bg-neutral-50 text-neutral-700" href="#">
<i className="w-4 h-4" data-lucide="key"></i>
          API Keys
        </a>
</nav>
<div className="p-4 border-t border-neutral-100">
<div className="flex items-center gap-3 mb-3">
<img alt="Profile" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-neutral-900">Ryan Tomlinson</p>
<p className="text-xs text-neutral-500 truncate">ryan@example.com</p>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-neutral-700 hover:bg-neutral-50">
<i className="w-4 h-4" data-lucide="log-out"></i>
          Sign out
        </button>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-neutral-50">
<div className="px-6 py-6 lg:px-8">

<div className="flex items-center justify-between mb-8 animate-slide-up stagger-1">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Dashboard</h1>
<p className="mt-2 text-sm text-neutral-600">Monitor your feature flags and system performance at a glance.</p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors duration-200 bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-50">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Last 7 days
            </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm bg-indigo-600 hover:bg-indigo-700 text-white">
<i className="w-4 h-4" data-lucide="plus"></i>
              Create Flag
            </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="p-6 rounded-xl border shadow-sm animate-fade-in stagger-2 bg-white border-neutral-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-neutral-600">Total Flags</p>
<p className="text-2xl font-semibold mt-1 text-neutral-900">42</p>
<p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i>
                  +12% from last month
                </p>
</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-50">
<i className="w-5 h-5 text-cyan-600" data-lucide="flag"></i>
</div>
</div>
</div>
<div className="p-6 rounded-xl border shadow-sm animate-fade-in stagger-3 bg-white border-neutral-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-neutral-600">Active Flags</p>
<p className="text-2xl font-semibold mt-1 text-neutral-900">28</p>
<p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i>
                  +8% from last week
                </p>
</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
<i className="w-5 h-5 text-blue-600" data-lucide="check-circle"></i>
</div>
</div>
</div>
<div className="p-6 rounded-xl border shadow-sm animate-fade-in stagger-4 bg-white border-neutral-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-neutral-600">Evaluations</p>
<p className="text-2xl font-semibold mt-1 text-neutral-900">2.4M</p>
<p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i>
                  +23% from last week
                </p>
</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
<i className="w-5 h-5 text-blue-600" data-lucide="activity"></i>
</div>
</div>
</div>
<div className="p-6 rounded-xl border shadow-sm animate-fade-in stagger-5 bg-white border-neutral-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-neutral-600">Avg Toggle Lifespan</p>
<p className="text-2xl font-semibold mt-1 text-neutral-900">14 days</p>
<p className="text-xs text-amber-600 mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i>
                  +3 days from last month
                </p>
</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-50">
<i className="w-5 h-5 text-purple-600" data-lucide="calendar"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

<div className="border rounded-xl p-6 shadow-sm animate-slide-up stagger-6 bg-white border-neutral-200">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-neutral-900">Flag Evaluations</h3>
<div className="flex items-center gap-2 text-sm text-neutral-500">
<div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                Last 7 days
              </div>
</div>
<div className="h-64">
<canvas id="evaluationsChart"></canvas>
</div>
</div>

<div className="border rounded-xl p-6 shadow-sm animate-slide-up stagger-7 bg-white border-neutral-200">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-neutral-900">Toggle Creation</h3>
<div className="flex items-center gap-2 text-sm text-neutral-500">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                8 flags this week
              </div>
</div>
<div className="h-64">
<canvas id="toggleCreationChart"></canvas>
</div>
</div>
</div>

<div className="border rounded-xl p-6 mb-8 shadow-sm animate-slide-up stagger-8 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-100">
<i className="w-5 h-5 text-amber-600" data-lucide="alert-triangle"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-amber-900">Flag Hygiene Alert</h3>
<p className="text-sm text-amber-700 mt-1">3 flags haven't been updated in over 90 days and may need attention</p>
<div className="flex items-center gap-3 mt-4">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 bg-amber-600 hover:bg-amber-700 text-white">
<i className="w-4 h-4" data-lucide="eye"></i>
                  Review Flags
                </button>
<button className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors duration-200 border-amber-300 text-amber-700 hover:bg-amber-100">
<i className="w-4 h-4" data-lucide="x"></i>
                  Dismiss
                </button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 border rounded-xl p-6 shadow-sm animate-slide-up stagger-9 bg-white border-neutral-200">
<h3 className="text-lg font-semibold text-neutral-900 mb-4">Recent Activity</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
<i className="w-4 h-4 text-indigo-600" data-lucide="flag"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">Advanced Analytics enabled in Production</p>
<p className="text-xs text-neutral-500 mt-1">Ryan Tomlinson • 2 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-600" data-lucide="plus"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">New flag "Dark Mode Toggle" created</p>
<p className="text-xs text-neutral-500 mt-1">Sarah Chen • 4 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
<i className="w-4 h-4 text-amber-600" data-lucide="alert-circle"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">Mews BI Beta Flag reached 10k evaluations</p>
<p className="text-xs text-neutral-500 mt-1">System • 6 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
<i className="w-4 h-4 text-red-600" data-lucide="archive"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">Legacy Payment Flag archived</p>
<p className="text-xs text-neutral-500 mt-1">Ryan Tomlinson • 1 day ago</p>
</div>
</div>
</div>
</div>

<div className="border rounded-xl p-6 shadow-sm animate-slide-up stagger-10 bg-white border-neutral-200">
<h3 className="text-lg font-semibold text-neutral-900 mb-4">Top Flags by Usage</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">Advanced Analytics</p>
<p className="text-xs text-neutral-500">892k evaluations</p>
</div>
<div className="w-16 bg-neutral-200 rounded-full h-2">
<div className="bg-indigo-500 h-2 rounded-full" style={{width: `95%`}}></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">Dark Mode Toggle</p>
<p className="text-xs text-neutral-500">645k evaluations</p>
</div>
<div className="w-16 bg-neutral-200 rounded-full h-2">
<div className="bg-blue-500 h-2 rounded-full" style={{width: `72%`}}></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">Mews BI Beta</p>
<p className="text-xs text-neutral-500">324k evaluations</p>
</div>
<div className="w-16 bg-neutral-200 rounded-full h-2">
<div className="bg-cyan-500 h-2 rounded-full" style={{width: `36%`}}></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">New Checkout</p>
<p className="text-xs text-neutral-500">156k evaluations</p>
</div>
<div className="w-16 bg-neutral-200 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: `17%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>




    </>
  );
}
