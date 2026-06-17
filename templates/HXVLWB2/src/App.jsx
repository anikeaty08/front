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

    // Toggle switch functionality
    function toggleSwitch(element) {
      element.classList.toggle('active');
      const knob = element.querySelector('.toggle-knob');
      if (element.classList.contains('active')) {
        element.classList.add('bg-gradient-to-r', 'from-green-500', 'to-emerald-500');
        element.classList.remove('bg-gray-600');
        knob.style.transform = 'translateX(16px)';
      } else {
        element.classList.remove('bg-gradient-to-r', 'from-green-500', 'to-emerald-500');
        element.classList.add('bg-gray-600');
        knob.style.transform = 'translateX(0px)';
      }
    }

    // Enhanced Energy Chart
    const ctx = document.getElementById('energyChart').getContext('2d');
    
    // Create gradients
    const primaryGradient = ctx.createLinearGradient(0, 0, 0, 160);
    primaryGradient.addColorStop(0, 'rgba(59, 130, 246, 0.6)');
    primaryGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

    const secondaryGradient = ctx.createLinearGradient(0, 0, 0, 160);
    secondaryGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
    secondaryGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
        datasets: [{
          label: 'Today',
          data: [2.1, 3.8, 4.2, 3.1, 5.4, 4.8],
          borderColor: '#3B82F6',
          backgroundColor: primaryGradient,
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBorderWidth: 2,
          pointHoverBorderColor: '#3B82F6',
          pointHoverBackgroundColor: '#ffffff',
        }, {
          label: 'Yesterday',
          data: [2.8, 4.1, 4.8, 4.2, 6.1, 5.5],
          borderColor: 'rgba(255, 255, 255, 0.3)',
          backgroundColor: secondaryGradient,
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 4,
          borderDash: [5, 5],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            cornerRadius: 12,
            displayColors: false,
            callbacks: {
              title: function(context) {
                return context[0].label;
              },
              label: function(context) {
                return `${context.parsed.y} kWh`;
              }
            }
          }
        },
        scales: {
          x: {
            display: true,
            grid: { 
              display: false,
              drawBorder: false
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.6)',
              font: { size: 10 }
            }
          },
          y: {
            display: false,
            grid: { display: false }
          }
        },
        elements: {
          line: {
            borderCapStyle: 'round',
            borderJoinStyle: 'round'
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
      
<div className="min-h-screen relative">

<div className="fixed inset-0 animate-blur-in delay-100">
<img alt="Cozy modern home interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc673ecb-d2ff-41e7-b415-17f32b9884bf_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70"></div>
<div className="floating-orb"></div>
<div className="floating-orb"></div>
<div className="floating-orb"></div>

<div className="sparkle"></div>
<div className="sparkle"></div>
<div className="sparkle"></div>
<div className="sparkle"></div>
<div className="sparkle"></div>
</div>

<header className="relative z-50 p-6 animate-slide-right delay-200">
<div className="flex items-center justify-between max-w-7xl mx-auto">
<div className="flex items-center space-x-4 animate-scale-in delay-300">
<div className="relative">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg animate-pulse-glow hover-scale cursor-pointer">
<svg className="lucide lucide-home w-5 h-5 text-white icon-hover" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
</div>
<div>
<h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-hover cursor-pointer">HomeOS</h1>
<p className="text-xs text-white/50">Smart Home Control</p>
</div>
</div>
<nav className="hidden md:flex items-center space-x-1 glass-card rounded-2xl p-2 animate-fade-in delay-400 hover-glow">
<button className="nav-item px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white text-sm font-medium button-hover border border-white/10">Dashboard</button>
<button className="nav-item px-6 py-3 rounded-xl text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white">Rooms</button>
<button className="nav-item px-6 py-3 rounded-xl text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white">Devices</button>
<button className="nav-item px-6 py-3 rounded-xl text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white">Settings</button>
</nav>
<div className="flex items-center space-x-4 animate-fade-in delay-500">
<button className="relative p-3 rounded-xl glass-card hover-lift hover:bg-white/15 hover:shadow-lg hover:shadow-blue-500/20 group">
<svg className="lucide lucide-bell w-5 h-5 text-white group-hover:scale-110 transition-transform" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse group-hover:scale-125"></div>
</button>
<div className="relative hover-scale cursor-pointer">
<img alt="Profile" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20 transition-all hover:ring-white/50 hover:ring-4" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46ced6a9-43d9-4cb3-9d41-e60c4df9040e_320w.jpg"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black hover:scale-110 transition-transform"></div>
</div>
</div>
</div>
</header>

<main className="relative z-40 px-6 pb-6">
<div className="max-w-7xl mx-auto">

<div className="mb-12 animate-slide-up delay-300">
<div className="relative">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-6 leading-tight cursor-default">
              Good evening,<br/>Dania.
            </h1>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10 animate-pulse"></div>
</div>
<p className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed animate-fade-in delay-600 hover:text-white/90 transition-colors duration-500">
            Your home is running efficiently. <span className="text-green-400 font-semibold hover:text-green-300 transition-colors cursor-pointer">3 automations active</span>, energy usage optimal.
          </p>
<div className="flex items-center space-x-6 mt-6 animate-slide-right delay-700">
<div className="flex items-center space-x-2 hover-lift cursor-pointer group">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
<span className="text-sm text-white/60 group-hover:text-white/90 transition-colors">All systems online</span>
</div>
<div className="flex items-center space-x-2 hover-lift cursor-pointer group">
<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
<span className="text-sm text-white/60 group-hover:text-white/90 transition-colors">12 devices connected</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<div className="glass-card glass-card-hover rounded-2xl p-6 animate-scale-in delay-400 transition-all duration-500 group relative overflow-hidden card-hover-gradient cursor-pointer" style={{'--hover-gradient': 'linear-gradient(135deg, rgba(251, 113, 133, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)'}}>
<div className="relative z-10">
<div className="flex items-start justify-between mb-6">
<div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
<svg className="lucide lucide-thermometer w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<div className="relative group-hover:scale-110 transition-transform">
<svg className="w-12 h-12 animate-rotate" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="4"></circle>
<circle className="progress-ring" cx="50" cy="50" fill="none" r="40" stroke="#fb7185" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs font-medium text-white/80 number-digit group-hover:scale-125 transition-transform" style={{'--digit-delay': '1.3s'}}>75%</span>
</div>
</div>
</div>
<div className="space-y-2">
<p className="text-sm text-white/60 font-medium group-hover:text-white/80 transition-colors">Living Room</p>
<p className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
<span className="number-digit" style={{'--digit-delay': '1s'}}>2</span><span className="number-digit" style={{'--digit-delay': '1.1s'}}>2</span><span className="number-digit" style={{'--digit-delay': '1.2s'}}>°</span><span className="number-digit" style={{'--digit-delay': '1.3s'}}>C</span>
</p>
<div className="flex items-center space-x-2">
<span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">Target: 21°C</span>
<div className="flex space-x-1">
<div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse group-hover:scale-150"></div>
<div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-100 group-hover:scale-150"></div>
<div className="w-1 h-1 bg-orange-400/50 rounded-full animate-pulse delay-200 group-hover:scale-150"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card glass-card-hover rounded-2xl p-6 animate-scale-in delay-500 transition-all duration-500 group relative overflow-hidden card-hover-gradient cursor-pointer" style={{'--hover-gradient': 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)'}}>
<div className="relative z-10">
<div className="flex items-start justify-between mb-6">
<div className="p-3 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex items-center space-x-2 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-trending-down w-4 h-4 text-green-400" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full font-medium hover:bg-green-500/30 transition-colors">-12%</span>
</div>
</div>
<div className="space-y-4">
<p className="text-sm text-white/60 font-medium group-hover:text-white/80 transition-colors">Energy Usage</p>
<p className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
<span className="number-digit" style={{'--digit-delay': '1s'}}>1</span><span className="number-digit" style={{'--digit-delay': '1.1s'}}>.</span><span className="number-digit" style={{'--digit-delay': '1.2s'}}>2</span><span className="number-digit" style={{'--digit-delay': '1.3s'}}>k</span><span className="number-digit" style={{'--digit-delay': '1.4s'}}>W</span>
</p>
<div className="space-y-2 progress-hover">
<div className="w-full bg-white/10 rounded-full h-2 overflow-hidden group-hover:h-3 transition-all">
<div className="progress-bar bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full animate-progress-fill group-hover:h-3 transition-all" style={{'--progress-width': '35%'}}></div>
</div>
<div className="flex justify-between text-xs text-white/50 group-hover:text-white/70 transition-colors">
<span>0kW</span>
<span>3.5kW max</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card glass-card-hover rounded-2xl p-6 animate-scale-in delay-600 transition-all duration-500 group relative overflow-hidden card-hover-gradient cursor-pointer" style={{'--hover-gradient': 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)'}}>
<div className="relative z-10">
<div className="flex items-start justify-between mb-6">
<div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-check w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="flex items-center space-x-2 group-hover:scale-110 transition-transform">
<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125"></div>
<span className="text-xs text-green-400 font-medium number-digit hover:text-green-300 transition-colors" style={{'--digit-delay': '1.2s'}}>ACTIVE</span>
</div>
</div>
<div className="space-y-2">
<p className="text-sm text-white/60 font-medium group-hover:text-white/80 transition-colors">Security System</p>
<p className="text-2xl font-bold tracking-tight text-white animate-counter group-hover:scale-105 transition-transform">Armed - Home</p>
<div className="flex items-center space-x-4 mt-4">
<div className="flex items-center space-x-1 hover-lift cursor-pointer">
<div className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></div>
<span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
<span className="number-digit" style={{'--digit-delay': '1.4s'}}>8</span> sensors
                    </span>
</div>
<div className="flex items-center space-x-1 hover-lift cursor-pointer">
<div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
<span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
<span className="number-digit" style={{'--digit-delay': '1.5s'}}>4</span> cameras
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card glass-card-hover rounded-2xl p-6 animate-scale-in delay-700 transition-all duration-500 group relative overflow-hidden card-hover-gradient cursor-pointer" style={{'--hover-gradient': 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%)'}}>
<div className="relative z-10">
<div className="flex items-start justify-between mb-6">
<div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
<svg className="lucide lucide-lightbulb w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors group-hover:scale-110">
<span className="number-digit" style={{'--digit-delay': '1.3s'}}>6</span> of <span className="number-digit" style={{'--digit-delay': '1.4s'}}>12</span> on
                </span>
</div>
<div className="space-y-4">
<p className="text-sm text-white/60 font-medium group-hover:text-white/80 transition-colors">Smart Lighting</p>
<p className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
<span className="number-digit" style={{'--digit-delay': '1s'}}>7</span><span className="number-digit" style={{'--digit-delay': '1.1s'}}>5</span><span className="number-digit" style={{'--digit-delay': '1.2s'}}>%</span>
</p>
<div className="flex items-center space-x-2 mt-4">
<div className="flex space-x-1 group-hover:scale-110 transition-transform">
<div className="w-2 h-8 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-full animate-pulse group-hover:scale-125"></div>
<div className="w-2 h-6 bg-gradient-to-t from-yellow-400/60 to-yellow-300/60 rounded-full animate-pulse delay-100 group-hover:scale-125"></div>
<div className="w-2 h-4 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors"></div>
<div className="w-2 h-3 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors"></div>
</div>
<span className="text-xs text-white/50 ml-2 group-hover:text-white/70 transition-colors">Adaptive brightness</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<div className="glass-card rounded-3xl p-8 animate-slide-up delay-800 transition-all duration-500 hover:bg-white/8 hover:shadow-2xl hover:shadow-blue-500/10">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-2xl font-bold tracking-tight mb-2 text-hover">Room Controls</h3>
<p className="text-white/60 hover:text-white/80 transition-colors">Manage all your smart rooms</p>
</div>
<button className="text-sm text-blue-400 hover:text-blue-300 transition-all bg-blue-500/10 px-4 py-2 rounded-xl hover:bg-blue-500/20 hover:scale-105 button-hover">View All</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="room-card bg-white/5 rounded-2xl p-6 border border-white/5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-4">
<div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 icon-hover">
<svg className="lucide lucide-chef-hat w-5 h-5 text-purple-400" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
</div>
<div>
<span className="font-semibold text-lg hover:text-purple-300 transition-colors cursor-pointer">Kitchen</span>
<p className="text-xs text-white/60">
<span className="number-digit" style={{'--digit-delay': '1.6s'}}>3</span> devices active
                        </p>
</div>
</div>
<div className="toggle-switch w-12 h-6 relative cursor-pointer bg-gray-600 rounded-full" onclick="toggleSwitch(this)">
<div className="toggle-knob absolute right-1 top-1 w-4 h-4 bg-white rounded-full transform translate-x-4" style={{transform: 'translateX(0px)'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="w-full bg-white/10 rounded-full h-1 hover:h-2 transition-all">
<div className="bg-gradient-to-r from-purple-400 to-pink-400 h-1 rounded-full animate-progress-fill delay-1400 hover:h-2 transition-all" style={{'--progress-width': '80%'}}></div>
</div>
<p className="text-xs text-white/50 hover:text-white/70 transition-colors">Cooking mode active</p>
</div>
</div>

<div className="room-card bg-white/5 rounded-2xl p-6 border border-white/5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-4">
<div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 icon-hover">
<svg className="lucide lucide-bed w-5 h-5 text-blue-400" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
</div>
<div>
<span className="font-semibold text-lg hover:text-blue-300 transition-colors cursor-pointer">Bedroom</span>
<p className="text-xs text-white/60">Sleep mode</p>
</div>
</div>
<div className="toggle-switch w-12 h-6 relative cursor-pointer active bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" onclick="toggleSwitch(this)">
<div className="toggle-knob absolute left-1 top-1 w-4 h-4 bg-white rounded-full" style={{transform: 'translateX(16px)'}}></div>
</div>
</div>
<div className="flex items-center space-x-3 hover-lift cursor-pointer group">
<svg className="lucide lucide-moon w-4 h-4 text-blue-300 group-hover:scale-110 transition-transform" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">Night mode until <span className="number-digit" style={{'--digit-delay': '1.8s'}}>7</span>:00 AM</span>
</div>
</div>

<div className="room-card bg-white/5 rounded-2xl p-6 border border-white/5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-4">
<div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 icon-hover">
<svg className="lucide lucide-tv w-5 h-5 text-orange-400" data-lucide="tv" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2-5 5-5-5"></path><rect height="15" rx="2" width="20" x="2" y="7"></rect></svg>
</div>
<div>
<span className="font-semibold text-lg hover:text-orange-300 transition-colors cursor-pointer">Living Room</span>
<p className="text-xs text-white/60">Entertainment mode</p>
</div>
</div>
<div className="toggle-switch w-12 h-6 relative cursor-pointer bg-gray-600 rounded-full" onclick="toggleSwitch(this)">
<div className="toggle-knob absolute right-1 top-1 w-4 h-4 bg-white rounded-full transform translate-x-4" style={{transform: 'translateX(0px)'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="w-full bg-white/10 rounded-full h-1 hover:h-2 transition-all">
<div className="bg-gradient-to-r from-orange-400 to-red-400 h-1 rounded-full animate-progress-fill delay-1600 hover:h-2 transition-all" style={{'--progress-width': '60%'}}></div>
</div>
<p className="text-xs text-white/50 hover:text-white/70 transition-colors">Movie night preset</p>
</div>
</div>

<div className="room-card bg-white/5 rounded-2xl p-6 border border-white/5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-4">
<div className="p-3 rounded-xl bg-gradient-to-br from-gray-500/20 to-slate-500/20 icon-hover">
<svg className="lucide lucide-monitor w-5 h-5 text-gray-400" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<div>
<span className="font-semibold text-lg hover:text-gray-300 transition-colors cursor-pointer">Office</span>
<p className="text-xs text-white/60">Away mode</p>
</div>
</div>
<div className="toggle-switch w-12 h-6 bg-gray-600 rounded-full relative cursor-pointer" onclick="toggleSwitch(this)">
<div className="toggle-knob absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center space-x-3 hover-lift cursor-pointer group">
<div className="w-2 h-2 bg-gray-400 rounded-full group-hover:scale-150 transition-transform"></div>
<span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">Auto-schedule active</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 animate-slide-up delay-900 transition-all duration-500 hover:bg-white/8 hover:shadow-2xl hover:shadow-green-500/10">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-xl font-bold tracking-tight mb-2 text-hover">Energy Analytics</h3>
<p className="text-white/60 text-sm hover:text-white/80 transition-colors">Today's consumption</p>
</div>
<div className="flex items-center space-x-2 text-xs bg-green-500/20 text-green-400 px-3 py-2 rounded-xl hover:bg-green-500/30 hover:scale-105 transition-all cursor-pointer">
<svg className="lucide lucide-trending-down w-3 h-3" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="font-semibold number-digit" style={{'--digit-delay': '2s'}}>-12%</span>
</div>
</div>
<div className="h-40 mb-6 hover:scale-105 transition-transform">
<canvas className="w-full h-full" height="320" id="energyChart" style={{display: 'block', boxSizing: 'border-box', height: '160px', width: '339px'}} width="678"></canvas>
</div>
<div className="text-center space-y-3">
<p className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">
<span className="number-digit" style={{'--digit-delay': '2.2s'}}>2</span><span className="number-digit" style={{'--digit-delay': '2.3s'}}>4</span><span className="number-digit" style={{'--digit-delay': '2.4s'}}>.</span><span className="number-digit" style={{'--digit-delay': '2.5s'}}>8</span> kWh
              </p>
<p className="text-sm text-white/60 hover:text-white/80 transition-colors">vs <span className="number-digit" style={{'--digit-delay': '2.6s'}}>28.2</span> kWh yesterday</p>
<div className="flex items-center justify-center space-x-4 text-xs">
<div className="flex items-center space-x-2 hover-lift cursor-pointer group">
<div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
<span className="text-white/60 group-hover:text-white/80 transition-colors">Today</span>
</div>
<div className="flex items-center space-x-2 hover-lift cursor-pointer group">
<div className="w-2 h-2 bg-white/30 rounded-full group-hover:scale-150 transition-transform"></div>
<span className="text-white/60 group-hover:text-white/80 transition-colors">Yesterday</span>
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
