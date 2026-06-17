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



      // Initialize Bitcoin trading chart
      const tradingCtx = document.getElementById('btcTradingChart');
      if (tradingCtx && window.Chart) {
        new Chart(tradingCtx, {
          type: 'line',
          data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
            datasets: [{
              label: 'BTC Price',
              data: [42645, 43120, 43850, 44200, 43750, 43892, 43892],
              borderColor: '#34C759',
              backgroundColor: 'rgba(52, 199, 89, 0.1)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointBackgroundColor: '#34C759',
              pointBorderColor: '#ffffff',
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 6
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
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: '#374151',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                  label: function(context) {
                    return '$' + context.raw.toLocaleString();
                  }
                }
              }
            },
            scales: {
              x: { 
                display: true,
                grid: {
                  display: false
                },
                ticks: {
                  color: '#9CA3AF',
                  font: {
                    size: 10
                  }
                }
              },
              y: { 
                display: false,
                min: 42000,
                max: 45000
              }
            },
            interaction: {
              intersect: false,
              mode: 'index'
            }
          }
        });
      }
    


      // Initialize Lucide icons
      lucide.createIcons();

      // Bitcoin price chart
      const btcCtx = document.getElementById('btcPriceChart');
      if (btcCtx) {
        new Chart(btcCtx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 24 }, (_, i) => i),
            datasets: [{
              data: [45000,45200,45800,46100,46400,46200,46800,47200,47000,47400,47100,47300,47600,47200,47500,47800,47400,47600,47900,47300,47500,47800,47200,47124],
              borderColor: '#34C759',
              backgroundColor: 'rgba(52, 199, 89, 0.1)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false }
            },
            scales: {
              x: { display: false },
              y: { display: false }
            },
            elements: {
              point: { radius: 0 }
            }
          }
        });
      }
    
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b083a7c7-cf05-44c1-8ab6-231d584ab9d0_3840w.jpg")'}}></div>
<main className="mx-auto max-w-7xl px-6 py-8 md:py-12">
<section className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">

<div className="relative">
<div className="w-[393px] h-[854px] bg-black rounded-[39px] shadow-[0_8px_30px_rgba(0,0,0,0.8)] overflow-hidden relative">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] dynamic-island z-50"></div>

<div className="absolute top-2 left-6 text-white text-sm font-medium z-50 font-sans" style={{}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1 z-50">
<svg className="lucide lucide-signal w-4 h-4 text-white" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-white" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-4 h-4 text-white" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="h-full scrollable-content pt-14 pb-32">
<div className="px-4">

<div className="flex mb-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/80aff1f9-dccb-4b5d-8dc6-89e37c211930_320w.jpg"/>
</div>
<div className="">
<p className="text-xl font-light tracking-tight font-inter font-sans">Good morning,</p>
<p className="text-xl font-light text-gray-400 tracking-tight font-inter font-sans">Elena Rodriguez</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 ios-secondary-card rounded-xl flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</button>
</div>
</div>

<div className="border border-gray-800 bg-gray-900/50 backdrop-blur-xl rounded-xl mb-6 p-6">
<div className="flex items-center justify-between mb-4">
<div className="">
<p className="text-gray-400 text-sm font-medium font-inter font-sans" style={{}}>Total Balance</p>
<p className="text-3xl mt-1 tracking-tight font-manrope font-medium" style={{}}>$48,327.85</p>
</div>
<div className="flex items-center gap-1 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-lg">
<svg className="lucide lucide-trending-up w-3 h-3 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-green-400 text-xs font-medium font-inter font-sans" style={{}}>+12.8%</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-white text-black rounded-lg py-3 flex items-center justify-center gap-2 font-medium transition-colors hover:bg-gray-100 font-inter">
<svg className="lucide lucide-arrow-up w-4 h-4" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
<span className="font-sans" style={{}}>Send</span>
</button>
<button className="flex-1 border border-gray-700 rounded-lg py-3 flex items-center justify-center gap-2 text-white font-medium transition-colors hover:bg-gray-800 font-inter">
<svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
<span className="font-sans" style={{}}>Receive</span>
</button>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold font-inter font-sans" style={{}}>Holdings</h3>
<button className="text-gray-400 text-sm font-medium font-inter font-sans" style={{}}>View All</button>
</div>

<div className="space-y-3 mb-8">

<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm flex gap-4 rounded-xl p-4 items-center">
<div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-bitcoin w-5 h-5 text-white" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Bitcoin</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>0.724 BTC</p>
</div>
<div className="text-right">
<p className="font-medium font-inter font-sans" style={{}}>$31,425.68</p>
<div className="flex items-center gap-1 justify-end">
<svg className="lucide lucide-trending-up w-3 h-3 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-green-400 text-sm font-inter font-sans" style={{}}>+3.2%</span>
</div>
</div>
</div>

<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm flex gap-4 rounded-xl p-4 items-center">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-diamond w-5 h-5 text-white" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Ethereum</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>4.12 ETH</p>
</div>
<div className="text-right">
<p className="font-medium font-inter font-sans" style={{}}>$11,730.24</p>
<div className="flex items-center gap-1 justify-end">
<svg className="lucide lucide-trending-down w-3 h-3 text-red-400" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-red-400 text-sm font-inter font-sans" style={{}}>-0.8%</span>
</div>
</div>
</div>

<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm flex gap-4 rounded-xl p-4 items-center">
<div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-coins w-5 h-5 text-white" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Cardano</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>1,250 ADA</p>
</div>
<div className="text-right">
<p className="font-medium font-inter font-sans" style={{}}>$5,171.93</p>
<div className="flex items-center gap-1 justify-end">
<svg className="lucide lucide-trending-up w-3 h-3 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-green-400 text-sm font-inter font-sans" style={{}}>+7.4%</span>
</div>
</div>
</div>

<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm flex gap-4 rounded-xl p-4 items-center">
<div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Solana</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>45.6 SOL</p>
</div>
<div className="text-right">
<p className="font-medium font-inter font-sans" style={{}}>$3,420.15</p>
<div className="flex items-center gap-1 justify-end">
<svg className="lucide lucide-trending-up w-3 h-3 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-green-400 text-sm font-inter font-sans" style={{}}>+5.1%</span>
</div>
</div>
</div>

<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm flex gap-4 rounded-xl p-4 items-center">
<div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-hexagon w-5 h-5 text-white" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Polygon</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>2,850 MATIC</p>
</div>
<div className="text-right">
<p className="font-medium font-inter font-sans" style={{}}>$2,562.30</p>
<div className="flex items-center gap-1 justify-end">
<svg className="lucide lucide-trending-down w-3 h-3 text-red-400" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-red-400 text-sm font-inter font-sans" style={{}}>-2.1%</span>
</div>
</div>
</div>

<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm flex gap-4 rounded-xl p-4 items-center">
<div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-link w-5 h-5 text-white" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Chainlink</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>125 LINK</p>
</div>
<div className="text-right">
<p className="font-medium font-inter font-sans" style={{}}>$1,875.00</p>
<div className="flex items-center gap-1 justify-end">
<svg className="lucide lucide-trending-up w-3 h-3 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-green-400 text-sm font-inter font-sans" style={{}}>+1.8%</span>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-4 mt-8">
<h3 className="text-lg font-semibold font-inter font-sans" style={{}}>Recent Activity</h3>
<button className="text-gray-400 text-sm font-medium font-inter font-sans" style={{}}>View All</button>
</div>

<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-arrow-down-left w-5 h-5 text-green-400" data-lucide="arrow-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Received Bitcoin</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>Today, 2:15 PM</p>
</div>
<div className="text-right">
<p className="font-medium text-green-400 font-inter font-sans" style={{}}>+0.125 BTC</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>$5,486.56</p>
</div>
</div>

<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-red-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Sent Ethereum</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>Yesterday, 6:30 PM</p>
</div>
<div className="text-right">
<p className="font-medium text-red-400 font-inter font-sans" style={{}}>-0.5 ETH</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>$1,425.00</p>
</div>
</div>

<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-repeat w-5 h-5 text-blue-400" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Swapped SOL → USDC</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>Dec 15, 11:45 AM</p>
</div>
<div className="text-right">
<p className="font-medium font-inter font-sans" style={{}}>15 SOL</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>$1,125.00</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-2 right-2 ios-blur rounded-xl p-2">
<div className="flex items-center justify-around py-2">
<div className="flex flex-col items-center gap-1">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
<svg className="lucide lucide-home w-4 h-4 text-black" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<span className="text-xs text-white font-medium font-inter font-sans" style={{}}>Wallet</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-trending-up w-6 h-6 text-gray-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs text-gray-500 font-inter font-sans" style={{}}>Markets</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-repeat w-6 h-6 text-gray-500" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
<span className="text-xs text-gray-500 font-inter font-sans" style={{}}>Exchange</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-clock w-6 h-6 text-gray-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs text-gray-500 font-inter font-sans" style={{}}>History</span>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
</div>
</div>

<div className="relative">
<div className="w-[393px] h-[854px] bg-black rounded-[39px] shadow-[0_8px_30px_rgba(0,0,0,0.8)] overflow-hidden relative">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] dynamic-island"></div>

<div className="absolute top-2 left-6 text-white text-sm font-medium font-sans" style={{}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1">
<svg className="lucide lucide-signal w-4 h-4 text-white" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-white" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-4 h-4 text-white" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="absolute inset-0">
<img alt="" className="w-full h-full object-cover opacity-100" src="https://cdn.midjourney.com/8b2a5372-e14f-4d8f-b6e4-a33db0db718c/0_0.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
</div>

<div className="relative z-10 h-full flex flex-col pt-14 pr-6 pl-6">

<div className="flex gap-2 mt-8 items-center justify-center">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
<svg className="lucide lucide-shield w-6 h-6 text-black" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<span className="text-2xl tracking-tight font-manrope font-medium" style={{}}>CryptoVault</span>
</div>
<div className="flex-1 flex flex-col pr-4 pl-4 items-end justify-center">
<div className="text-center mb-12">
<h1 className="text-4xl mb-4 leading-tight tracking-tight font-manrope font-medium" style={{}}>
                    Secure Crypto
                    <span className="text-white tracking-tight font-manrope font-medium" style={{}}>Trading Hub</span>
</h1>
<p className="text-gray-300 text-lg leading-relaxed font-inter font-sans" style={{}}>
                    Buy, sell, and manage your cryptocurrency portfolio with military-grade protection.
                  </p>
</div>
</div>

<div className="space-y-4 mb-8">
<button className="w-full bg-white text-black rounded-xl py-4 text-lg font-medium shadow-lg font-inter font-sans" style={{}}>
                  Create Account
                </button>
<button className="w-full border border-gray-700 rounded-xl py-4 text-white text-lg font-medium font-inter font-sans" style={{}}>
                  Log In
                </button>
</div>

<p className="text-xs text-gray-500 text-left mb-6 font-inter font-sans" style={{}}>
                By continuing, you agree to our 
                <span className="text-white font-inter font-sans" style={{}}>Terms of Use</span> and 
                <span className="text-white font-inter font-sans" style={{}}>Privacy Policy</span>
</p>

<div className="w-32 h-1 bg-gray-600 rounded-full mx-auto mb-2"></div>
</div>
</div>
</div>

<div className="relative">
<div className="w-[393px] h-[854px] bg-black rounded-[39px] shadow-[0_8px_30px_rgba(0,0,0,0.8)] overflow-hidden relative">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] dynamic-island z-50"></div>

<div className="absolute top-2 left-6 text-white text-sm font-medium z-50 font-sans" style={{}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1 z-50">
<svg className="lucide lucide-signal w-4 h-4 text-white" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-white" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-4 h-4 text-white" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="h-full scrollable-content pt-14 pb-32">
<div className="px-4">

<div className="flex items-center justify-between mb-6">
<button className="w-8 h-8 border border-gray-700 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-chevron-left w-5 h-5 text-white" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h1 className="text-lg font-semibold font-inter font-sans" style={{}}>Bitcoin</h1>
<button className="w-8 h-8 border border-gray-700 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-more-horizontal w-5 h-5 text-white" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="bg-gray-900/50 border-gray-800 border rounded-xl mb-6 pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-bitcoin w-6 h-6 text-white" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
</div>
<div className="">
<p className="text-xl font-semibold font-inter font-sans" style={{}}>$43,892.47</p>
<div className="flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-green-400 text-sm font-inter font-sans" style={{}}>+$1,247.23 (2.93%)</span>
</div>
</div>
</div>

<div className="h-32 rounded-xl mb-4">
<canvas className="w-full h-full" height="256" id="btcTradingChart" style={{display: 'block', boxSizing: 'border-box', height: '128px', width: '311px'}} width="622"></canvas>

</div>

<div className="flex items-center justify-between">
<div className="flex bg-gray-800 rounded-lg p-1">
<button className="text-sm text-gray-400 font-inter pt-1 pr-3 pb-1 pl-3 font-sans" style={{}}>1H</button>
<button className="px-3 py-1 text-sm bg-white text-black rounded-md font-inter font-sans" style={{}}>24H</button>
<button className="px-3 py-1 text-sm text-gray-400 font-inter font-sans" style={{}}>1W</button>
<button className="px-3 py-1 text-sm text-gray-400 font-inter font-sans" style={{}}>1M</button>
</div>
<button className="text-gray-400 font-medium font-inter font-sans" style={{}}>Full Chart</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<button className="bg-green-500 rounded-xl py-6 flex flex-col items-center gap-2">
<svg className="lucide lucide-trending-up w-6 h-6 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-white font-medium font-inter font-sans" style={{}}>Buy BTC</span>
</button>
<button className="bg-red-500 rounded-xl py-6 flex flex-col items-center gap-2">
<svg className="lucide lucide-trending-down w-6 h-6 text-white" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-white font-medium font-inter font-sans" style={{}}>Sell BTC</span>
</button>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold font-inter font-sans" style={{}}>Recent Activity</h3>
<button className="text-gray-400 font-medium font-inter font-sans" style={{}}>View All</button>
</div>
<div className="space-y-3">
<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-plus w-5 h-5 text-green-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Purchased Bitcoin</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>Today, 2:15 PM</p>
</div>
<div className="text-right">
<p className="font-medium font-inter font-sans" style={{}}>+0.125 BTC</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>$5,486.56</p>
</div>
</div>
<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-minus w-5 h-5 text-red-400" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Sold Ethereum</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>Yesterday, 4:30 PM</p>
</div>
<div className="text-right">
<p className="font-medium font-inter font-sans" style={{}}>-2.5 ETH</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>$7,125.00</p>
</div>
</div>
<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-repeat w-5 h-5 text-blue-400" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Swapped ADA → SOL</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>Dec 14, 1:20 PM</p>
</div>
<div className="text-right">
<p className="font-medium font-inter font-sans" style={{}}>500 ADA</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>$1,650.00</p>
</div>
</div>
<div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-arrow-down-left w-5 h-5 text-green-400" data-lucide="arrow-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-inter font-sans" style={{}}>Received Transfer</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>Dec 13, 9:45 AM</p>
</div>
<div className="text-right">
<p className="font-medium text-green-400 font-inter font-sans" style={{}}>+50 MATIC</p>
<p className="text-gray-400 text-sm font-inter font-sans" style={{}}>$45.00</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-2 right-2 ios-blur rounded-xl p-2">
<div className="flex items-center justify-around py-2">
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-home w-6 h-6 text-gray-500" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs text-gray-500 font-inter font-sans" style={{}}>Wallet</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-trending-up w-6 h-6 text-gray-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs text-gray-500 font-inter font-sans" style={{}}>Markets</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
<svg className="lucide lucide-repeat w-4 h-4 text-black" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<span className="text-xs text-white font-medium font-inter font-sans" style={{}}>Exchange</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-clock w-6 h-6 text-gray-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs text-gray-500 font-inter font-sans" style={{}}>History</span>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
</div>
</div>
</section>
</main>


    </>
  );
}
