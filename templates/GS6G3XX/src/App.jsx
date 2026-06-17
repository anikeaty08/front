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



tailwind.config = {
theme: {
extend: {
colors: {
dark: '#000000',
light: '#ffffff',
subtle: 'rgba(255,255,255,0.1)'
},
fontFamily: {
sans: ['Inter', 'sans-serif']
}
}
}
}



    // Initialize icons
    lucide.createIcons();

    // Portfolio Chart
    const ctx = document.getElementById('portfolioChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Portfolio Value',
          data: [750000, 820000, 795000, 847000, 825000, 862000, 847392],
          borderColor: 'rgba(255, 255, 255, 0.8)',
          backgroundColor: gradient,
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: 'white',
          pointHoverBorderColor: 'rgba(255, 255, 255, 0.8)',
          pointHoverBorderWidth: 2,
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
            grid: { display: false },
            ticks: { 
              color: 'rgba(255, 255, 255, 0.6)',
              font: { size: 12 }
            }
          },
          y: {
            grid: { 
              color: 'rgba(255, 255, 255, 0.1)',
              borderDash: [5, 5]
            },
            ticks: { 
              color: 'rgba(255, 255, 255, 0.6)',
              font: { size: 12 },
              callback: function(value) {
                return '$' + (value / 1000) + 'K';
              }
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
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
      
<div className="relative min-h-screen overflow-hidden">

<div className="fixed inset-0 z-0">
<iframe className="w-full h-full" frameborder="0" height="100%" src="https://my.spline.design/thresholddarkambientui-v0gkZCfi6zXm69kE0wccy70f/" width="100%"></iframe>
</div>

<nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-opacity-5 border-opacity-10 bg-white border-white border rounded-full pt-3 pr-4 pb-3 pl-4 shadow-xl backdrop-blur-md">
<div className="flex items-center justify-between">
<div className="flex items-center">
<i className="w-6 h-6" data-lucide="zap"></i>
<span className="ml-2 text-sm font-medium">Nexus</span>
</div>
<div className="hidden md:flex items-center space-x-6 text-xs text-gray-300 ml-8">
<a className="hover:text-white transition-colors" href="#">Portfolio</a>
<a className="hover:text-white transition-colors" href="#">Assets</a>
<a className="hover:text-white transition-colors" href="#">Analytics</a>
<a className="hover:text-white transition-colors" href="#">DeFi</a>
<a className="hover:text-white transition-colors" href="#">Settings</a>
</div>
<div className="flex items-center space-x-3 ml-8">
<a className="hidden md:inline-block text-xs font-medium hover:text-white transition-colors" href="#">Connect</a>
<a className="hover:bg-gray-200 transition-colors text-xs font-medium text-black bg-white rounded-full pt-1.5 pr-3 pb-1.5 pl-3" href="#">Add Asset</a>
</div>
</div>
</nav>

<div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-32 md:pt-40 md:pb-40 text-center min-h-screen">
<div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
<span className="px-3 py-1 text-xs font-medium text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-full mb-8 border border-white border-opacity-20">Portfolio Active</span>
<h1 className="md:text-6xl max-w-4xl leading-tight text-4xl font-medium tracking-tighter">
        $847,392
      </h1>
<p className="md:text-xl max-w-2xl text-lg text-neutral-300 mt-6">
        +12.47% ($96,840) today across 47 assets on 8 networks
      </p>
<div className="mt-12 flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl" href="#">
          View Assets
        </a>
<a className="px-8 py-3 bg-white bg-opacity-10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20" href="#">
          Export Report
        </a>
</div>

<div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
<div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-2xl border border-white border-opacity-10 p-6">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-gray-300 mb-1">Assets</p>
<p className="text-2xl font-medium">47</p>
</div>
<i className="w-6 h-6 text-white opacity-30" data-lucide="wallet"></i>
</div>
</div>
<div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-2xl border border-white border-opacity-10 p-6">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-gray-300 mb-1">Networks</p>
<p className="text-2xl font-medium">8</p>
</div>
<i className="w-6 h-6 text-white opacity-30" data-lucide="layers"></i>
</div>
</div>
<div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-2xl border border-white border-opacity-10 p-6">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-gray-300 mb-1">All Time</p>
<p className="text-2xl font-medium">+127%</p>
</div>
<i className="w-6 h-6 text-white opacity-30" data-lucide="trending-up"></i>
</div>
</div>
<div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-2xl border border-white border-opacity-10 p-6">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-gray-300 mb-1">DeFi Rewards</p>
<p className="text-2xl font-medium">$12.4K</p>
</div>
<i className="w-6 h-6 text-white opacity-30" data-lucide="zap"></i>
</div>
</div>
</div>

<div className="mt-20 w-full max-w-6xl">
<div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-2xl border border-white border-opacity-10 overflow-hidden">
<div className="h-8 border-b border-white border-opacity-10 flex items-center px-4">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-white bg-opacity-30"></div>
<div className="w-3 h-3 rounded-full bg-white bg-opacity-30"></div>
<div className="w-3 h-3 rounded-full bg-white bg-opacity-30"></div>
</div>
<span className="ml-4 text-xs text-gray-300">Performance Analytics</span>
</div>
<div className="p-6">
<div className="h-[300px]">
<canvas id="portfolioChart"></canvas>
</div>
</div>
</div>
</div>

<div className="mt-20 w-full max-w-6xl">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-medium">Your Assets</h2>
<div className="flex items-center space-x-4">
<div className="relative">
<input className="pl-10 pr-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30" placeholder="Search..." type="text"/>
<i className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" data-lucide="search"></i>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-2xl border border-white border-opacity-10 p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
<i className="w-4 h-4" data-lucide="bitcoin"></i>
</div>
<div>
<p className="font-medium">Bitcoin</p>
<p className="text-xs text-gray-300">BTC</p>
</div>
</div>
<div className="text-right">
<p className="text-sm text-gray-300">2.847</p>
<p className="text-xs text-green-400">+5.2%</p>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-300">$67,420</span>
<span className="text-lg font-medium">$192,048</span>
</div>
</div>

<div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-2xl border border-white border-opacity-10 p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
<i className="w-4 h-4" data-lucide="hexagon"></i>
</div>
<div>
<p className="font-medium">Ethereum</p>
<p className="text-xs text-gray-300">ETH</p>
</div>
</div>
<div className="text-right">
<p className="text-sm text-gray-300">48.2</p>
<p className="text-xs text-green-400">+8.7%</p>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-300">$3,247</span>
<span className="text-lg font-medium">$156,506</span>
</div>
</div>

<div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-2xl border border-white border-opacity-10 p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
<i className="w-4 h-4" data-lucide="circle"></i>
</div>
<div>
<p className="font-medium">Solana</p>
<p className="text-xs text-gray-300">SOL</p>
</div>
</div>
<div className="text-right">
<p className="text-sm text-gray-300">1,240</p>
<p className="text-xs text-red-400">-2.1%</p>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-300">$98.60</span>
<span className="text-lg font-medium">$122,264</span>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
