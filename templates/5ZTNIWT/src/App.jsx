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



    // Initialize Lucide icons
    lucide.createIcons();

    // Staggered animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(0, 2rem);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    // Initialize Growth Chart
    const growthCtx = document.getElementById('growthChart').getContext('2d');
    new Chart(growthCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [65, 72, 68, 75, 81, 87, 92],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#10b981',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false,
            min: 50,
            max: 100
          }
        },
        elements: {
          point: {
            hoverRadius: 6
          }
        }
      }
    });

    // Initialize Activity Chart
    const activityCtx = document.getElementById('activityChart').getContext('2d');
    new Chart(activityCtx, {
      type: 'bar',
      data: {
        labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
        datasets: [{
          data: [12, 8, 15, 22, 18, 9],
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderRadius: 4,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            display: true,
            grid: { display: false },
            ticks: {
              font: { size: 10 },
              color: '#64748b'
            }
          },
          y: {
            display: false,
            beginAtZero: true
          }
        }
      }
    });

    // Add interactive hover effects
    document.querySelectorAll('tr').forEach(row => {
      row.addEventListener('mouseenter', () => {
        row.style.transform = 'scale(1.001)';
        row.style.transition = 'all 0.2s ease';
      });
      
      row.addEventListener('mouseleave', () => {
        row.style.transform = 'scale(1)';
      });
    });

    // Simulate real-time data updates
    setInterval(() => {
      const waterLevel = document.querySelector('.text-2xl:contains("87%")');
      if (waterLevel) {
        const randomChange = Math.floor(Math.random() * 3) - 1;
        let currentValue = parseInt(waterLevel.textContent);
        currentValue = Math.max(80, Math.min(95, currentValue + randomChange));
        waterLevel.textContent = currentValue + '%';
      }
    }, 5000);

    // Mobile menu toggle
    const menuButton = document.createElement('button');
    menuButton.className = 'lg:hidden p-2 text-white/80 hover:text-white';
    menuButton.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
    
    // Add mobile responsiveness
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1024) {
        document.querySelector('nav ul').classList.add('hidden');
      } else {
        document.querySelector('nav ul').classList.remove('hidden');
      }
    });

    // Search functionality
    const searchInput = document.querySelector('input[placeholder="Search containers..."]');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
          const containerName = row.querySelector('td:first-child span').textContent.toLowerCase();
          const plantType = row.querySelector('td:nth-child(2) span').textContent.toLowerCase();
          
          if (containerName.includes(searchTerm) || plantType.includes(searchTerm)) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    }

    // Initialize tooltips and notifications
    document.querySelectorAll('[data-tooltip]').forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg';
        tooltip.textContent = e.target.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - 30) + 'px';
      });
      
      element.addEventListener('mouseleave', () => {
        document.querySelectorAll('.absolute.z-50').forEach(tooltip => {
          tooltip.remove();
        });
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
      
<div className="min-h-screen">

<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">

<header className="relative overflow-hidden opacity-0 bg-teal-800 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0d25cfe-74e2-44ec-be70-9f0c7dfd9acf_1600w.jpg)] bg-cover rounded-3xl mb-8 shadow-2xl translate-y-4" style={{animation: 'fadeInUp 0.8s ease-out 0.1s forwards'}}>

<nav className="relative z-10 flex items-center justify-between px-6 lg:px-8 pt-6">
<div className="flex items-center space-x-8">
<div className="flex items-center space-x-3 text-white font-semibold text-xl tracking-tight">
<div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-droplets w-5 h-5" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<span className="font-geist">AquaGrow</span>
</div>
<ul className="lg:flex items-center space-x-8 text-white/90 text-sm font-medium">
<li className="flex items-center space-x-2 hover:text-white cursor-pointer transition-colors">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-geist">Dashboard</span>
</li>
<li className="flex items-center space-x-2 hover:text-white cursor-pointer transition-colors">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-geist">Analytics</span>
</li>
<li className="flex items-center space-x-2 hover:text-white cursor-pointer transition-colors">
<svg className="lucide lucide-settings-2 w-4 h-4" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
<span className="font-geist">Automation</span>
</li>
<li className="flex items-center space-x-2 hover:text-white cursor-pointer transition-colors">
</li>
</ul>
</div>
<div className="flex items-center space-x-4">
<div className="hidden md:flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
<svg className="lucide lucide-search w-4 h-4 text-white/70" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-transparent focus:outline-none placeholder:text-white/60 text-white text-sm ml-3 w-40" placeholder="Search containers..."/>
</div>
<button className="relative p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
<span className="w-1.5 h-1.5 bg-white rounded-full"></span>
</span>
</button>
<div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-colors">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</nav>

<div className="relative z-10 lg:px-8 lg:pb-32 pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
<div className="flex-1">
<h1 className="text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-3 font-jakarta font-medium" style={{}}>
                System Overview
              </h1>
<p className="text-white/80 text-lg font-light mb-12 max-w-2xl font-geist">
                Real-time monitoring and control of your hydroponic growing systems
              </p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
<div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
<div className="flex items-center space-x-3 mb-3">
<div className="w-8 h-8 bg-blue-400/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-droplet w-4 h-4 text-blue-200" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<span className="text-white/70 text-sm font-medium font-geist">Water Level</span>
</div>
<div className="text-2xl text-white font-jakarta font-medium" style={{}}>87%</div>
<div className="text-xs text-white/60 mt-1 font-geist">+2% from yesterday</div>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
<div className="flex items-center space-x-3 mb-3">
<div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-activity w-4 h-4 text-green-200" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-white/70 text-sm font-medium font-geist">pH Balance</span>
</div>
<div className="text-2xl text-white font-jakarta font-medium" style={{}}>6.2</div>
<div className="text-xs text-white/60 mt-1 font-geist">Optimal range</div>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
<div className="flex items-center space-x-3 mb-3">
<div className="w-8 h-8 bg-orange-400/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-thermometer w-4 h-4 text-orange-200" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<span className="text-white/70 text-sm font-medium font-geist">Temperature</span>
</div>
<div className="text-2xl text-white font-jakarta font-medium" style={{}}>22°C</div>
<div className="text-xs text-white/60 mt-1 font-geist">Perfect conditions</div>
</div>
</div>
</div>

<div className="hidden lg:block lg:ml-12">
<div className="w-80 h-80 flex relative overflow-hidden bg-white/5 border-white/20 border rounded-3xl backdrop-blur items-center justify-center">
<img alt="Hydroponic System" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/438c9971-2d90-4f83-8ae5-a4c720a1234a_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</div>
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="opacity-0 text-white bg-slate-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1748efa3-57d9-4fbc-bc85-6c64763cd0d6_800w.jpg)] bg-cover rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-xl translate-y-4" style={{animation: 'fadeInUp 0.8s ease-out 0.2s forwards'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="font-medium text-lg font-geist">Growth Analytics</h3>
</div>
<button className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1 rounded-full hover:bg-white/10 transition-all font-geist">
              View Details
            </button>
</div>
<div className="mb-4">
<canvas className="w-full h-40" height="320" id="growthChart" style={{display: 'block', boxSizing: 'border-box', height: '160px', width: '341px'}} width="682"></canvas>
</div>
<div className="grid grid-cols-2 gap-4 text-sm">
<div>
<div className="text-slate-400 font-geist">Weekly Growth</div>
<div className="text-xl font-semibold text-emerald-400 font-geist">+18%</div>
</div>
<div>
<div className="text-slate-400 font-geist">Yield Projection</div>
<div className="text-xl font-semibold text-blue-400 font-geist">2.4kg</div>
</div>
</div>
</div>

<div className="opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f723c55-d136-402b-895a-a5d075e17651_800w.jpg)] bg-cover rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-xl translate-y-4" style={{animation: 'fadeInUp 0.8s ease-out 0.3s forwards'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-alert-triangle w-4 h-4 text-white" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<h3 className="font-medium text-lg text-white font-geist">System Alerts</h3>
</div>
<button className="text-xs font-medium text-white/80 hover:text-white px-3 py-1 rounded-full hover:bg-white/20 transition-all font-geist">
              View All
            </button>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between py-3 px-4 bg-white/10 rounded-xl backdrop-blur">
<div className="flex items-center space-x-3">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="text-white">
<div className="font-medium font-geist">Container #07</div>
<div className="text-xs text-white/80 font-geist">Optimal growing conditions</div>
</div>
</div>
<div className="text-xs text-white/60 font-geist">2min ago</div>
</div>
<div className="flex items-center justify-between py-3 px-4 bg-white/10 rounded-xl backdrop-blur">
<div className="flex items-center space-x-3">
<svg className="lucide lucide-alert-circle w-4 h-4 text-red-300" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<div className="text-white">
<div className="font-medium font-geist">Container #12</div>
<div className="text-xs text-white/80 font-geist">Low nutrient levels detected</div>
</div>
</div>
<div className="text-xs text-white/60 font-geist">5min ago</div>
</div>
<div className="flex items-center justify-between py-3 px-4 bg-white/10 rounded-xl backdrop-blur">
<div className="flex items-center space-x-3">
<svg className="lucide lucide-info w-4 h-4 text-blue-300" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<div className="text-white">
<div className="font-medium font-geist">System Update</div>
<div className="text-xs text-white/80 font-geist">Automated pH adjustment completed</div>
</div>
</div>
<div className="text-xs text-white/60 font-geist">12min ago</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 opacity-0 translate-y-4" style={{animation: 'fadeInUp 0.8s ease-out 0.4s forwards'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-clock w-4 h-4 text-slate-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="font-medium text-lg font-geist">Recent Activity</h3>
</div>
<div className="flex space-x-1 bg-slate-100 rounded-lg p-1">
<button className="px-3 py-1 text-xs font-medium bg-white rounded-md shadow-sm font-geist">Today</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 font-geist">Week</button>
</div>
</div>
<div className="mb-4">
<canvas className="w-full h-32" height="256" id="activityChart" style={{display: 'block', boxSizing: 'border-box', height: '128px', width: '339px'}} width="678"></canvas>
</div>
<div className="space-y-4">
<div className="flex items-center space-x-3 py-2">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
<div className="flex-1">
<div className="text-sm font-medium font-geist">Nutrient Solution Refilled</div>
<div className="text-xs text-slate-500 font-geist">Container #08 • 09:30 AM</div>
</div>
<div className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full font-geist">Completed</div>
</div>
<div className="flex items-center space-x-3 py-2">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
<div className="flex-1">
<div className="text-sm font-medium font-geist">LED Schedule Adjusted</div>
<div className="text-xs text-slate-500 font-geist">Growth Chamber A • 08:15 AM</div>
</div>
<div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full font-geist">In Progress</div>
</div>
<div className="flex items-center space-x-3 py-2">
<div className="w-2 h-2 bg-amber-500 rounded-full"></div>
<div className="flex-1">
<div className="text-sm font-medium font-geist">pH Calibration Due</div>
<div className="text-xs text-slate-500 font-geist">Container #15 • Scheduled</div>
</div>
<div className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full font-geist">Pending</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-xl border border-slate-200 opacity-0 translate-y-4" style={{animation: 'fadeInUp 0.8s ease-out 0.5s forwards'}}>
<div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-5 border-b border-slate-200">
<div>
<h3 className="font-semibold text-xl tracking-tight font-geist">Active Growing Containers</h3>
<p className="text-slate-500 text-sm mt-1 font-geist">Monitor and manage your hydroponic systems</p>
</div>
<div className="flex items-center space-x-3 mt-4 sm:mt-0">
<button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
<span className="font-geist">Filter</span>
</button>
<button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="font-geist">Add Container</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="">
<tr className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider bg-slate-50" style={{transform: 'scale(1)'}}>
<th className="px-6 py-4 font-geist">Container</th>
<th className="px-6 py-4 font-geist">Plant Type</th>
<th className="px-6 py-4 font-geist">Health Score</th>
<th className="px-6 py-4 font-geist">Water Level</th>
<th className="px-6 py-4 font-geist">pH Level</th>
<th className="px-6 py-4 font-geist">EC Level</th>
<th className="px-6 py-4 font-geist">Temperature</th>
<th className="px-6 py-4 font-geist">Status</th>
<th className="px-6 py-4 font-geist">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50 transition-colors" style={{transform: 'scale(1)'}}>
<td className="px-6 py-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
<span className="text-xs font-semibold text-emerald-700 font-geist">01</span>
</div>
<span className="font-medium font-geist">Container #01</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-2">
<img alt="Lettuce" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=32&amp;h=32&amp;fit=crop&amp;crop=center"/>
<span className="text-sm font-geist">Buttercrunch Lettuce</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-medium text-emerald-600 font-geist">94%</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-2">
<div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="w-4/5 h-full bg-blue-500 rounded-full"></div>
</div>
<span className="text-sm text-slate-600 font-geist">85%</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium font-geist">6.2</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium font-geist">1.8 mS/cm</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium font-geist">22°C</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 font-geist">
<svg className="lucide lucide-check-circle w-3 h-3 mr-1" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    Optimal
                  </span>
</td>
<td className="px-6 py-4">
<button className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors font-geist">
<svg className="lucide lucide-eye w-3 h-3 mr-1" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    View Details
                  </button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
<span className="text-xs font-semibold text-amber-700 font-geist">02</span>
</div>
<span className="font-medium font-geist">Container #02</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-2">
<img alt="Tomato" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=32&amp;h=32&amp;fit=crop&amp;crop=center"/>
<span className="text-sm font-geist">Cherry Tomatoes</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-alert-triangle w-4 h-4 text-amber-500" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<span className="font-medium text-amber-600 font-geist">76%</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-2">
<div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="w-3/5 h-full bg-amber-500 rounded-full"></div>
</div>
<span className="text-sm text-slate-600 font-geist">62%</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium font-geist">7.1</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium font-geist">1.2 mS/cm</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium font-geist">19°C</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 font-geist">
<svg className="lucide lucide-alert-circle w-3 h-3 mr-1" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
                    Attention
                  </span>
</td>
<td className="px-6 py-4">
<button className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors font-geist">
<svg className="lucide lucide-eye w-3 h-3 mr-1" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    View Details
                  </button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
<span className="text-xs font-semibold text-emerald-700 font-geist">03</span>
</div>
<span className="font-medium font-geist">Container #03</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-2">
<img alt="Herbs" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=32&amp;h=32&amp;fit=crop&amp;crop=center"/>
<span className="text-sm font-geist">Fresh Basil</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-medium text-emerald-600 font-geist">91%</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center space-x-2">
<div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="w-5/6 h-full bg-blue-500 rounded-full"></div>
</div>
<span className="text-sm text-slate-600 font-geist">89%</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium font-geist">6.5</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium font-geist">1.9 mS/cm</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium font-geist">23°C</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 font-geist">
<svg className="lucide lucide-check-circle w-3 h-3 mr-1" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    Optimal
                  </span>
</td>
<td className="px-6 py-4">
<button className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors font-geist">
<svg className="lucide lucide-eye w-3 h-3 mr-1" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    View Details
                  </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>


    </>
  );
}
