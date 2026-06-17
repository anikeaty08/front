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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    import { createIcons } from 'https://unpkg.com/lucide@latest/dist/esm/lucide.js';
    createIcons();

    const usageCtx = document.getElementById('usageChart').getContext('2d');
    const detailsCtx = document.getElementById('detailsChart').getContext('2d');
    const usageChart = new Chart(usageCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Images Generated',
            data: [12, 19, 8, 15, 25, 18, 22],
            borderColor: '#f97316',
            backgroundColor: 'rgba(249, 115, 22, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: '#f97316',
            pointHoverBackgroundColor: '#fb923c',
            cubicInterpolationMode: 'monotone'
          },
          {
            label: 'Credits Used',
            data: [8, 14, 6, 12, 20, 15, 18],
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: '#ef4444',
            pointHoverBackgroundColor: '#f87171',
            cubicInterpolationMode: 'monotone'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#d6d3d1',
              font: { family: 'Geist', weight: '500', size: 14 }
            }
          },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleFont: { family: 'Geist', weight: '600', size: 14 },
            bodyFont: { family: 'Geist', weight: '400', size: 12 },
            cornerRadius: 4,
            padding: 8,
            displayColors: false,
            mode: 'nearest',
            intersect: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#78716c',
              font: { family: 'Geist', weight: '400', size: 12 }
            },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
          },
          x: {
            ticks: {
              color: '#78716c',
              font: { family: 'Geist', weight: '400', size: 12 }
            },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
          }
        },
        interaction: {
          mode: 'nearest',
          intersect: false
        },
        animation: false,
        onClick(evt) {
          const points = this.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false);
          if (points.length) {
            const firstPoint = points[0];
            const label = this.data.labels[firstPoint.index];
            const datasetLabel = this.data.datasets[firstPoint.datasetIndex].label;
            showDetailsChart(label, datasetLabel);
          }
        }
      }
    });

    function showDetailsChart(day, datasetLabel) {
      // Data for details chart by day and label
      const detailsData = {
        'Images Generated': {
          Mon: [2, 3, 7],
          Tue: [4, 5, 10],
          Wed: [1, 3, 4],
          Thu: [3, 6, 6],
          Fri: [6, 8, 11],
          Sat: [5, 6, 7],
          Sun: [7, 8, 7]
        },
        'Credits Used': {
          Mon: [1, 3, 4],
          Tue: [2, 4, 8],
          Wed: [1, 2, 3],
          Thu: [2, 5, 5],
          Fri: [5, 7, 8],
          Sat: [4, 6, 5],
          Sun: [5, 7, 6]
        }
      };
      const labels = ['Morning', 'Afternoon', 'Evening'];
      const dataSet = detailsData[datasetLabel][day] || [0, 0, 0];

      // Hide usage chart and show details chart
      document.getElementById('usageChart').classList.add('hidden');
      document.getElementById('detailsChart').classList.remove('hidden');

      if (window.detailsChartInstance) {
        window.detailsChartInstance.destroy();
      }

      window.detailsChartInstance = new Chart(detailsCtx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: `${datasetLabel} on ${day}`,
            data: dataSet,
            backgroundColor: datasetLabel === 'Images Generated' ? 'rgba(249, 115, 22, 0.7)' : 'rgba(239, 68, 68, 0.7)',
            borderRadius: 6,
            maxBarThickness: 40
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.8)',
              titleFont: { family: 'Geist', weight: '600', size: 14 },
              bodyFont: { family: 'Geist', weight: '400', size: 12 },
              cornerRadius: 4,
              padding: 8,
              displayColors: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: '#78716c',
                font: { family: 'Geist', weight: '400', size: 12 }
              },
              grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            x: {
              ticks: {
                color: '#78716c',
                font: { family: 'Geist', weight: '400', size: 12 }
              },
              grid: { display: false }
            }
          }
        }
      });
    }

    // Clicking outside details chart returns to usage chart
    this.addEventListener('click', (evt) => {
      const detailsCanvas = document.getElementById('detailsChart');
      if (!detailsCanvas.classList.contains('hidden')) {
        const rect = detailsCanvas.getBoundingClientRect();
        if (!(evt.clientX >= rect.left && evt.clientX <= rect.right && evt.clientY >= rect.top && evt.clientY <= rect.bottom)) {
          detailsCanvas.classList.add('hidden');
          document.getElementById('usageChart').classList.remove('hidden');
          if (window.detailsChartInstance) {
            window.detailsChartInstance.destroy();
            window.detailsChartInstance = null;
          }
        }
      }
    });
  


  import { createIcons } from 'https://unpkg.com/lucide@latest/dist/esm/lucide.js';
  createIcons();

  // Usage Chart
  const ctx = document.getElementById('usageChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Images Generated',
        data: [12, 19, 8, 15, 25, 18, 22],
        borderColor: '#f97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }, {
        label: 'Credits Used',
        data: [8, 14, 6, 12, 20, 15, 18],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#d6d3d1',
            font: { family: 'Geist' }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#78716c' },
          grid: { color: 'rgba(255, 255, 255, 0.1)' }
        },
        x: {
          ticks: { color: '#78716c' },
          grid: { color: 'rgba(255, 255, 255, 0.1)' }
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
      

<div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-orange-500/10 via-red-400/5 to-red-500/10 blur-3xl opacity-60"></div>

<header className="relative z-20 border-b border-white/10 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
<a className="flex items-center gap-2 text-lg font-semibold hover:text-orange-400 transition-colors" href="#">
<i className="h-6 w-6 text-orange-400" data-lucide="sparkles"></i>
<span className="font-geist">Nexus Studio</span>
</a>
<nav className="hidden items-center gap-8 text-sm font-medium md:flex">
<a className="text-orange-400 font-geist" href="#">Dashboard</a>
<a className="hover:text-orange-400 transition-colors font-geist" href="#">Gallery</a>
<a className="hover:text-orange-400 transition-colors font-geist" href="#">Features</a>
<a className="hover:text-orange-400 transition-colors font-geist" href="#">Plans</a>
</nav>
<div className="flex items-center gap-4">
<button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 h-3 w-3 bg-orange-500 rounded-full"></span>
</button>
<div className="flex items-center gap-3">
<img alt="Profile" className="h-8 w-8 ring-2 ring-orange-400/30 object-cover rounded-full" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=800&amp;q=80"/>
<span className="hidden sm:block text-sm font-medium font-geist">Alex Chen</span>
</div>
</div>
</div>
</header>

<main className="relative z-10 max-w-7xl lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">

<div className="mb-8 opacity-0 animate-fade-in">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="">
<h1 className="text-3xl font-bold tracking-tight font-playfair">Welcome back, Alex</h1>
<p className="text-stone-400 font-geist">Here's what's happening with your creative projects today.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-medium shadow-lg transition-all hover:scale-105 font-geist">
<svg className="w-[16px] h-[16px]" data-lucide="plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"></path><circle cx="14" cy="15" r="1"></circle></svg>
        New Project
      </button>
</div>
</div>

<div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 opacity-0 animate-slide-up" style={{animationDelay: '0.2s'}}>
<div className="rounded-2xl bg-stone-900/50 p-6 ring-1 ring-white/10 backdrop-blur-xl hover:ring-white/20 transition-all">
<div className="flex items-center justify-between">
<div className="">
<p className="text-sm font-medium text-stone-400 font-geist">Total Projects</p>
<p className="text-2xl font-bold text-white">127</p>
</div>
<div className="flex h-12 w-12 bg-gray-50/10 rounded-full items-center justify-center">
<svg className="w-[24px] h-[24px]" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</div>
</div>
<div className="flex gap-2 mt-4 items-center">
<span className="text-sm text-pink-400 font-geist">+12%</span>
<span className="text-xs text-stone-400 font-geist">from last month</span>
</div>
</div>
<div className="rounded-2xl bg-stone-900/50 p-6 ring-1 ring-white/10 backdrop-blur-xl hover:ring-white/20 transition-all">
<div className="flex items-center justify-between">
<div className="">
<p className="text-sm font-medium text-stone-400 font-geist">Images Generated</p>
<p className="text-2xl font-bold text-white">2,847</p>
</div>
<div className="flex h-12 w-12 bg-gray-50/10 rounded-full items-center justify-center">
<svg className="w-[24px] h-[24px]" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="text-sm text-pink-400 font-geist">+8%</span>
<span className="text-xs text-stone-400 font-geist">from last month</span>
</div>
</div>
<div className="ring-1 ring-white/10 hover:ring-white/20 transition-all bg-stone-900/50 rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="">
<p className="text-sm font-medium text-stone-400 font-geist">Credits Used</p>
<p className="text-2xl font-bold text-white">1,523</p>
</div>
<div className="flex h-12 w-12 bg-gray-50/10 rounded-full items-center justify-center">
<svg className="w-[24px] h-[24px]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="text-sm text-orange-400 font-geist">-3%</span>
<span className="text-xs text-stone-400 font-geist">from last month</span>
</div>
</div>
<div className="rounded-2xl bg-stone-900/50 p-6 ring-1 ring-white/10 backdrop-blur-xl hover:ring-white/20 transition-all">
<div className="flex items-center justify-between">
<div className="">
<p className="text-sm font-medium text-stone-400 font-geist">Storage Used</p>
<p className="text-2xl font-bold text-white">4.2 GB</p>
</div>
<div className="flex h-12 w-12 bg-gray-50/10 rounded-full items-center justify-center">
<svg className="w-[24px] h-[24px]" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="5" rx="1" width="20" x="2" y="3"></rect><path className="" d="M4 8v11a2 2 0 0 0 2 2h2"></path><path d="M20 8v11a2 2 0 0 1-2 2h-2"></path><path className="" d="m9 15 3-3 3 3"></path><path className="" d="M12 12v9"></path></svg>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="text-sm text-pink-400 font-geist">+15%</span>
<span className="text-xs text-stone-400 font-geist">from last month</span>
</div>
</div>
</div>

<div className="grid gap-8 lg:grid-cols-3">

<div className="lg:col-span-2 space-y-8">

<div className="rounded-2xl bg-stone-900/50 p-6 ring-1 ring-white/10 backdrop-blur-xl opacity-0 animate-slide-up" style={{animationDelay: '0.4s'}}>
<div className="mb-6 flex items-center justify-between">
<h2 className="text-xl font-semibold font-geist">Recent Projects</h2>
<button className="hover:text-orange-300 transition-colors text-sm text-gray-400 font-geist">View all</button>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="group cursor-pointer rounded-xl bg-stone-800/50 p-4 ring-1 ring-white/5 transition-all hover:ring-white/20 hover:scale-[1.02]">
<img alt="Project" className="aspect-video w-full rounded-lg object-cover mb-3" src="https://cdn.midjourney.com/e5b4d02f-8d2d-461a-bda1-9da06745c53d/0_0.png"/>
<h3 className="text-sm font-medium text-white font-geist">Cyberpunk Portrait Series</h3>
<p className="text-xs text-stone-400 font-geist">Updated 2 hours ago</p>
<div className="mt-3 flex items-center gap-2">
<span className="rounded-full bg-pink-500/20 px-2 py-1 text-xs text-pink-400 font-geist">Complete</span>
<span className="text-xs text-stone-400 font-geist">24 images</span>
</div>
</div>
<div className="group cursor-pointer rounded-xl bg-stone-800/50 p-4 ring-1 ring-white/5 transition-all hover:ring-white/20 hover:scale-[1.02]">
<img alt="Project" className="aspect-video w-full rounded-lg object-cover mb-3" src="https://cdn.midjourney.com/e5b4d02f-8d2d-461a-bda1-9da06745c53d/0_1.png"/>
<h3 className="text-sm font-medium text-white font-geist">Abstract Landscapes</h3>
<p className="text-xs text-stone-400 font-geist">Updated 1 day ago</p>
<div className="mt-3 flex items-center gap-2">
<span className="rounded-full bg-orange-500/20 px-2 py-1 text-xs text-orange-400 font-geist">In Progress</span>
<span className="text-xs text-stone-400 font-geist">12 images</span>
</div>
</div>
<div className="group cursor-pointer rounded-xl bg-stone-800/50 p-4 ring-1 ring-white/5 transition-all hover:ring-white/20 hover:scale-[1.02]">
<img alt="Project" className="aspect-video w-full rounded-lg object-cover mb-3" src="https://cdn.midjourney.com/75f56835-6654-41e6-8982-4f699e4a413a/0_1.png"/>
<h3 className="text-sm font-medium text-white font-geist">Character Concepts</h3>
<p className="text-xs text-stone-400 font-geist">Updated 3 days ago</p>
<div className="mt-3 flex items-center gap-2">
<span className="rounded-full bg-orange-500/20 px-2 py-1 text-xs text-orange-400 font-geist">Review</span>
<span className="text-xs text-stone-400 font-geist">8 images</span>
</div>
</div>
<div className="group cursor-pointer rounded-xl bg-stone-800/50 p-4 ring-1 ring-white/5 transition-all hover:ring-white/20 hover:scale-[1.02]">
<img alt="Project" className="aspect-video w-full rounded-lg object-cover mb-3" src="https://cdn.midjourney.com/e5b4d02f-8d2d-461a-bda1-9da06745c53d/0_2.png"/>
<h3 className="text-sm font-medium text-white font-geist">Logo Variations</h3>
<p className="text-xs text-stone-400 font-geist">Updated 1 week ago</p>
<div className="mt-3 flex items-center gap-2">
<span className="rounded-full bg-pink-500/20 px-2 py-1 text-xs text-pink-400 font-geist">Complete</span>
<span className="text-xs text-stone-400 font-geist">16 images</span>
</div>
</div>
</div>
</div>

<div className="ring-1 ring-white/10 opacity-0 animate-slide-up bg-stone-900/50 rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl" style={{animationDelay: '0.6s'}}>
<div className="mb-6 flex items-center justify-between">
<h2 className="text-xl font-semibold font-geist">Usage Analytics</h2>
<div className="flex gap-2">
<button className="rounded-lg bg-orange-500/20 px-3 py-1 text-xs text-orange-400 font-geist">7D</button>
<button className="rounded-lg bg-stone-700/50 px-3 py-1 text-xs text-stone-400 font-geist">30D</button>
<button className="rounded-lg bg-stone-700/50 px-3 py-1 text-xs text-stone-400 font-geist">90D</button>
</div>
</div>
<div className="h-64">
<canvas className="w-full h-full bg-[url(https://cdn.midjourney.com/video/210612cc-c701-4be8-b7e2-beb7077a9ce9/3.mp4?w=800&amp;q=80)] bg-cover"></canvas>
<canvas className="w-full h-full hidden" id="detailsChart"></canvas>

</div>
</div>
</div>

<div className="space-y-8">

<div className="rounded-2xl bg-stone-900/50 p-6 ring-1 ring-white/10 backdrop-blur-xl opacity-0 animate-slide-up" style={{animationDelay: '0.5s'}}>
<h2 className="mb-4 text-lg font-semibold font-geist">Quick Actions</h2>
<div className="space-y-3">
<button className="flex w-full items-center gap-3 rounded-xl bg-stone-800/50 p-4 text-left transition-all hover:bg-stone-700/50 hover:scale-[1.02]">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-500">
<svg className="w-[20px] h-[20px]" data-lucide="wand-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white font-geist">AI Image Generator</p>
<p className="text-xs text-stone-400 font-geist">Create new artwork</p>
</div>
</button>
<button className="flex w-full items-center gap-3 rounded-xl bg-stone-800/50 p-4 text-left transition-all hover:bg-stone-700/50 hover:scale-[1.02]">
<div className="flex h-10 w-10 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center">
<svg className="w-[20px] h-[20px]" data-lucide="upload" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white font-geist">Upload &amp; Edit</p>
<p className="text-xs text-stone-400 font-geist">Enhance existing images</p>
</div>
</button>
<button className="flex w-full items-center gap-3 rounded-xl bg-stone-800/50 p-4 text-left transition-all hover:bg-stone-700/50 hover:scale-[1.02]">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500">
<svg className="w-[20px] h-[20px]" data-lucide="palette" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white font-geist">Style Transfer</p>
<p className="text-xs text-stone-400 font-geist">Apply artistic styles</p>
</div>
</button>
<button className="flex w-full items-center gap-3 rounded-xl bg-stone-800/50 p-4 text-left transition-all hover:bg-stone-700/50 hover:scale-[1.02]">
<div className="flex h-10 w-10 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-full items-center justify-center">
<svg className="w-[20px] h-[20px]" data-lucide="users" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white font-geist">Collaborate</p>
<p className="text-xs text-stone-400 font-geist">Share with team</p>
</div>
</button>
</div>
</div>

<div className="rounded-2xl bg-stone-900/50 p-6 ring-1 ring-white/10 backdrop-blur-xl opacity-0 animate-slide-up" style={{animationDelay: '0.7s'}}>
<h2 className="mb-4 text-lg font-semibold font-geist">Recent Activity</h2>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="flex h-8 w-8 flex-shrink-0 bg-gradient-to-r from-pink-500 to-emerald-500 bg-[url(https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=800&amp;q=80)] bg-cover rounded-full items-center justify-center">
</div>
<div className="flex-1">
<p className="text-sm text-white font-geist">Project "Cyberpunk Portrait Series" completed</p>
<p className="text-xs text-stone-400 font-geist">2 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex h-8 w-8 flex-shrink-0 bg-[url(https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&amp;q=80)] bg-cover rounded-full items-center justify-center">
</div>
<div className="flex-1">
<p className="text-sm text-white font-geist">12 new images uploaded to gallery</p>
<p className="text-xs text-stone-400 font-geist">4 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex h-8 w-8 flex-shrink-0 bg-gradient-to-r from-orange-500 to-red-500 bg-[url(https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80)] bg-cover rounded-full items-center justify-center">
</div>
<div className="flex-1">
<p className="text-sm text-white font-geist">Your artwork received 47 likes</p>
<p className="text-xs text-stone-400 font-geist">1 day ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex h-8 w-8 flex-shrink-0 bg-[url(https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&amp;q=80)] bg-cover rounded-full items-center justify-center">
</div>
<div className="flex-1">
<p className="text-sm text-white font-geist">3 new comments on your portfolio</p>
<p className="text-xs text-stone-400 font-geist">2 days ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex h-8 w-8 flex-shrink-0 bg-gradient-to-r from-teal-500 to-emerald-500 bg-[url(https://images.unsplash.com/photo-1678565555430-f8640bf41628?w=800&amp;q=80)] bg-cover rounded-full items-center justify-center">
</div>
<div className="flex-1">
<p className="text-sm text-white font-geist">Monthly credits refreshed (2,500 credits)</p>
<p className="text-xs text-stone-400 font-geist">3 days ago</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-stone-900/50 p-6 ring-1 ring-white/10 backdrop-blur-xl opacity-0 animate-slide-up" style={{animationDelay: '0.8s'}}>
<h2 className="mb-4 text-lg font-semibold font-geist">Storage Usage</h2>
<div className="space-y-4">
<div className="">
<div className="mb-2 flex justify-between text-sm">
<span className="text-stone-300 font-geist">Images</span>
<span className="text-white font-geist">3.2 GB</span>
</div>
<div className="h-2 rounded-full bg-stone-700">
<div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
</div>
</div>
<div className="">
<div className="mb-2 flex justify-between text-sm">
<span className="text-stone-300 font-geist">Projects</span>
<span className="text-white font-geist">0.8 GB</span>
</div>
<div className="h-2 rounded-full bg-stone-700">
<div className="h-2 w-1/5 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
</div>
</div>
<div className="">
<div className="mb-2 flex justify-between text-sm">
<span className="text-stone-300 font-geist">Cache</span>
<span className="text-white font-geist">0.2 GB</span>
</div>
<div className="h-2 rounded-full bg-stone-700">
<div className="h-2 w-1/12 bg-gradient-to-bl from-amber-400 to-red-500 rounded-full"></div>
</div>
</div>
<div className="pt-4 border-t border-white/10">
<div className="flex justify-between text-sm">
<span className="text-stone-300 font-geist">Total Used</span>
<span className="text-white font-geist">4.2 GB / 10 GB</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
