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
      fontFamily: { sans: ['Inter','sans-serif'] },
      colors: {
        bg: '#0f0f23',
        card: '#1a1a2e',
        accent: '#00d4ff',
        accent2: '#0ea5e9'
      }
    }
  }
}



// Initialize Chart.js Bar Chart
const ctx = document.getElementById('revenueChart').getContext('2d');

// Create gradient for bars
const gradient = ctx.createLinearGradient(0, 0, 0, 160);
gradient.addColorStop(0, '#00d4ff');
gradient.addColorStop(1, '#0ea5e9');

const gradientNormal = ctx.createLinearGradient(0, 0, 0, 160);
gradientNormal.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
gradientNormal.addColorStop(1, 'rgba(255, 255, 255, 0.1)');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            data: [35, 45, 25, 55, 65, 90, 80],
            backgroundColor: (ctx) => {
                return ctx.dataIndex === 5 ? gradient : gradientNormal;
            },
            borderColor: (ctx) => {
                return ctx.dataIndex === 5 ? '#00d4ff' : 'transparent';
            },
            borderWidth: (ctx) => {
                return ctx.dataIndex === 5 ? 2 : 0;
            },
            borderRadius: 6,
            borderSkipped: false,
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
                backgroundColor: 'rgba(26, 26, 46, 0.95)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#00d4ff',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    label: function(context) {
                        return '$' + (context.parsed.y * 100).toLocaleString();
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.4)',
                    font: {
                        size: 10,
                        family: 'Inter'
                    }
                },
                border: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                },
                border: {
                    display: false
                }
            }
        },
        animation: {
            duration: 800,
            easing: 'easeOutQuart'
        },
        interaction: {
            intersect: false,
            mode: 'index'
        }
    }
});

// Range button functionality
document.querySelectorAll('.range-btn').forEach(btn=>{
  btn.addEventListener('click',e=>{
    document.querySelectorAll('.range-btn').forEach(b=>{
      b.classList.remove('bg-gradient-to-r','from-accent/20','to-accent2/20','text-accent','border','border-accent/30','shadow-lg');
      b.classList.add('text-white/60','hover:text-white','hover:bg-white/5');
    });
    btn.classList.remove('text-white/60','hover:text-white','hover:bg-white/5');
    btn.classList.add('bg-gradient-to-r','from-accent/20','to-accent2/20','text-accent','border','border-accent/30','shadow-lg');
  });
});

// Initialize Lucide icons
lucide.createIcons();

// Add subtle animations on load
window.addEventListener('load', () => {
  document.querySelectorAll('.metric-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
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
      
<div className="max-w-sm w-full">
<div className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/50 ring-1 ring-white/10 overflow-hidden">

<div className="flex lg:p-8 pt-6 pr-6 pb-6 pl-6 space-x-2 items-center justify-between">
<div className="metric-card" style={{animationDelay: `0s`}}>
<div className="flex items-center space-x-2 mb-1">
<svg className="lucide lucide-trending-up w-4 h-4 text-accent" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<p className="text-sm text-white/60">SaaS Revenue - Q3</p>
</div>
<div className="flex items-baseline space-x-3">
<h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">$47,892</h1>
<span className="text-emerald-400 font-semibold text-sm flex items-center">
<svg className="lucide lucide-arrow-up-right w-4 h-4 mr-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            +23.8%
          </span>
</div>
<p className="text-xs text-white/40 mt-1">vs. previous quarter</p>
</div>
<div className="flex space-x-2">
<button className="hover:bg-white/10 transition-all duration-200 group rounded-xl pt-2.5 pr-2.5 pb-2.5 pl-2.5">
<svg className="lucide lucide-share-2 w-5 h-5 text-white/70 group-hover:text-white" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>
</div>

<div className="px-6 lg:px-8 pb-4">
<div className="grid grid-cols-2 gap-4">
<div className="bg-bg/40 rounded-xl p-3 metric-card border border-white/5" style={{animationDelay: `0.1s`}}>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-users w-4 h-4 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-xs text-white/60">Active Users</span>
</div>
<p className="text-lg font-semibold mt-1">12,847</p>
<p className="text-xs text-green-400">+5.2%</p>
</div>
<div className="bg-bg/40 rounded-xl p-3 metric-card border border-white/5" style={{animationDelay: `0.2s`}}>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-shopping-cart w-4 h-4 text-purple-400" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="text-xs text-white/60">Conversions</span>
</div>
<p className="text-lg font-semibold mt-1">1,264</p>
<p className="text-xs text-green-400">+12.1%</p>
</div>
</div>
</div>

<div className="relative px-6 lg:px-8">
<div className="flex items-center justify-between mb-4">
<span className="text-xs tracking-wide text-white/40">MONTHLY BREAKDOWN</span>
<span className="text-xs text-white/60">TOTAL SALES: <span className="text-accent font-medium">892</span></span>
</div>
<div className="bg-gradient-to-t from-bg/20 to-transparent rounded-xl p-4 border border-white/5">
<canvas className="w-full h-32 lg:h-40" id="revenueChart"></canvas>
</div>
</div>

<div className="mt-8 px-6 lg:px-8">
<div className="bg-bg/50 backdrop-blur-sm rounded-2xl p-1.5 flex gap-1 border border-white/5">
<button className="range-btn flex-1 transition-all duration-200 text-accent border-accent/30 text-xs bg-gradient-to-r from-accent/20 to-accent2/20 border rounded-xl pt-2.5 pb-2.5 shadow-lg">7D</button>
<button className="range-btn flex-1 text-xs py-2.5 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200">1M</button>
<button className="range-btn flex-1 text-xs py-2.5 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200">3M</button>
<button className="range-btn flex-1 py-2.5 text-xs rounded-xl text-white/60 hover:text-white hover:bg-white/5">6M</button>
<button className="range-btn flex-1 transition-all duration-200 text-xs rounded-xl pt-2.5 pb-2.5 text-white/60 hover:text-white hover:bg-white/5">1Y</button>
<button className="range-btn flex-1 transition-all duration-200 text-xs rounded-xl pt-2.5 pb-2.5 text-white/60 hover:text-white hover:bg-white/5">ALL</button>
</div>
</div>

<div className="mt-8 px-6 lg:px-8 pb-8">
<div className="flex items-center justify-between mb-6">
<p className="text-xs tracking-wider text-white/40 font-medium">RECENT TRANSACTIONS</p>
<button className="text-xs text-accent hover:text-accent/80 transition-colors">View all</button>
</div>
<ul className="space-y-5">
<li className="flex items-center justify-between group hover:bg-white/5 -mx-2 px-2 py-2 rounded-xl transition-all duration-200 border border-white/5">
<div className="flex items-center space-x-4">
<div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-zap h-5 w-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<p className="text-sm font-medium leading-tight">TechFlow Pro License</p>
<div className="flex items-center space-x-2 mt-0.5">
<p className="text-xs text-white/50">Stripe Payment</p>
<span className="w-1 h-1 bg-white/30 rounded-full"></span>
<p className="text-xs text-white/50">Enterprise</p>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold">$299.00</p>
<p className="text-xs text-white/40">2h ago</p>
</div>
</li>
<li className="flex items-center justify-between group hover:bg-white/5 -mx-2 px-2 py-2 rounded-xl transition-all duration-200 border border-white/5">
<div className="flex items-center space-x-4">
<div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-lg shadow-lg">
              N
            </div>
<div className="">
<p className="text-sm font-medium leading-tight">Advanced Analytics Course</p>
<div className="flex items-center space-x-2 mt-0.5">
<p className="text-xs text-white/50">PayPal</p>
<span className="w-1 h-1 bg-white/30 rounded-full"></span>
<p className="text-xs text-white/50">Premium</p>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold">$149.99</p>
<p className="text-xs text-white/40">5h ago</p>
</div>
</li>
<li className="flex items-center justify-between group hover:bg-white/5 -mx-2 px-2 py-2 rounded-xl transition-all duration-200 border border-white/5">
<div className="flex items-center space-x-4">
<div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-smartphone h-5 w-5 text-white" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium leading-tight">Mobile App Subscription</p>
<div className="flex items-center space-x-2 mt-0.5">
<p className="text-xs text-white/50">Apple Pay</p>
<span className="w-1 h-1 bg-white/30 rounded-full"></span>
<p className="text-xs text-white/50">Monthly</p>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold">$29.99</p>
<p className="text-xs text-white/40">1d ago</p>
</div>
</li>
</ul>
</div>
</div>
</div>


    </>
  );
}
