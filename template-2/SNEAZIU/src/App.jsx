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
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
inter: ['Inter', 'sans-serif'],
code: ['Fira Code', 'monospace']
},
colors: {
brand: {
50:'#f0f7ff',100:'#dce9ff',200:'#b8d4ff',300:'#8bb8ff',
400:'#5c9bff',500:'#307dff',600:'#1163ff',700:'#054fdb',
800:'#023da8',900:'#012a75'
}
},
animation: {
'fade-up':'fadeUp .7s ease-out both',
'slide-up':'slideUp .7s ease-out both'
},
keyframes:{
fadeUp:{'0%':{opacity:0,transform:'translateY(40px)'},'100%':{opacity:1,transform:'translateY(0)'}},
slideUp:{'0%':{opacity:0,transform:'translateY(60px) scale(.95)'},'100%':{opacity:1,transform:'translateY(0) scale(1)'}}
}
}
}
}



  lucide.createIcons();

  // Chart.js
  document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('rollout-chart');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['0h','4h','8h','12h','16h','20h','24h'],
          datasets: [
            {
              label: 'Users on v2',
              data: [0,10,25,45,60,78,90],
              borderColor: '#307dff',
              backgroundColor: 'rgba(48,125,255,0.15)',
              tension: .4,
              fill: true
            }
          ]
        },
        options: {
          plugins:{legend:{display:false}},
          scales:{x:{display:false},y:{display:false}},
          responsive:true,
          maintainAspectRatio:false
        }
      });
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
      

<header className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-800/50 bg-gray-950/80">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
<a className="text-xl lg:text-2xl font-semibold tracking-tight hover:text-brand-400 transition-colors" href="#">LaunchCheaply</a>
<nav className="hidden md:flex gap-6 text-sm">
<a className="text-gray-400 hover:text-white flex items-center gap-2" href="#features"><svg className="lucide lucide-toggle-right w-4 h-4" data-lucide="toggle-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="12" r="3"></circle><rect height="14" rx="7" width="20" x="2" y="5"></rect></svg>Features</a>
<a className="text-gray-400 hover:text-white flex items-center gap-2" href="#pricing"><svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>Pricing</a>
<a className="text-gray-400 hover:text-white flex items-center gap-2" href="#docs"><svg className="lucide lucide-book w-4 h-4" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>Docs</a>
<a className="text-gray-400 hover:text-white flex items-center gap-2" href="#security"><svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>Security</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 text-sm text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800/50 transition"><svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>Sign in</button>
<button className="text-sm font-semibold bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded-lg shadow-lg transition flex items-center gap-2"><svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>Start Free</button>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-transparent to-transparent"></div>
<div className="max-w-7xl sm:px-6 lg:px-8 lg:pt-24 relative z-10 text-center mr-auto ml-auto pt-16 pr-4 pl-4">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-900/60 border border-brand-800 text-brand-300 rounded-full text-sm font-medium mb-8 backdrop-blur-md animate-fade-up">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
      Launch feature flags 10× cheaper than the market leader
    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight font-inter animate-fade-up" style={{animationDelay: `.1s`}}>
      Feature flags<br className="hidden sm:block" />
      for every team,<br className="hidden sm:block" />
<span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-purple-500">and every budget</span>
</h1>
<p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-relaxed animate-fade-up" style={{animationDelay: `.2s`}}>
      Toggle new code paths on or off without redeploying. Ship experiments, staged rollouts and A/B tests—pay only for what you use.
    </p>

<form className="max-w-lg mx-auto mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up" style={{animationDelay: `.3s`}}>
<input className="flex-1 bg-gray-800/60 border border-gray-700 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:ring-2 focus:ring-brand-600 focus:outline-none" placeholder="you@startup.com" required type="email" />
<button className="flex items-center gap-2 font-semibold bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-lg transition" type="submit"><span>Get Early Access</span><svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</form>

<div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-400 animate-fade-up" style={{animationDelay: `.4s`}}>
<span className="flex items-center gap-2 hover:text-green-400 transition"><svg className="lucide lucide-shield-check w-4 h-4 text-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>SOC 2 Type II</span>
<span className="flex items-center gap-2 hover:text-blue-400 transition"><svg className="lucide lucide-server w-4 h-4 text-blue-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>99.99% uptime</span>
<span className="flex items-center gap-2 hover:text-purple-400 transition"><svg className="lucide lucide-activity w-4 h-4 text-purple-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>500M flags/day</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="features">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="relative p-6 border border-gray-700/50 rounded-2xl bg-gray-900/40 backdrop-blur-md hover:bg-gray-900/60 transition group animate-slide-up">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold">Production Toggles</h3>
<span className="text-xs text-green-400 flex items-center gap-1"><svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Live</span>
</div>

<div className="space-y-3 text-sm">
<div className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-800 hover:border-brand-500/40 transition">
<span>new_dashboard</span>
<button className="relative inline-flex items-center h-5 w-10 cursor-pointer">
<span className="absolute inset-0 bg-gray-700 rounded-full transition group-hover:bg-gray-600"></span>
<span className="inline-block h-4 w-4 transform translate-x-1 bg-white rounded-full transition"></span>
</button>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-800 hover:border-brand-500/40 transition">
<span>checkout_v2</span>
<button className="relative inline-flex items-center h-5 w-10 cursor-pointer">
<span className="absolute inset-0 bg-brand-600 rounded-full transition"></span>
<span className="inline-block h-4 w-4 transform translate-x-5 bg-white rounded-full transition"></span>
</button>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-800 hover:border-brand-500/40 transition">
<span>beta_search</span>
<button className="relative inline-flex items-center h-5 w-10 cursor-pointer">
<span className="absolute inset-0 bg-gray-700 rounded-full transition group-hover:bg-gray-600"></span>
<span className="inline-block h-4 w-4 transform translate-x-1 bg-white rounded-full transition"></span>
</button>
</div>
</div>
<button className="mt-6 w-full flex items-center justify-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition"><svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Add Flag</button>
</div>

<div className="relative p-6 border border-brand-500/30 rounded-2xl bg-gradient-to-br from-brand-500/10 to-purple-600/10 backdrop-blur-md hover:from-brand-500/20 hover:to-purple-600/20 transition group animate-slide-up" style={{animationDelay: `.1s`}}>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-600 to-purple-600"><svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div>
<div>
<h3 className="font-semibold">Rollout Insights</h3>
<p className="text-xs text-gray-400">Last 24 hours</p>
</div>
</div>
<div>

<div className="h-40">
<canvas height="320" id="rollout-chart" style={{display: `block`, boxSizing: `border-box`, height: `160px`, width: `270px`}} width="540"></canvas>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4 text-center text-xs text-gray-300">
<div className="bg-white/5 rounded-lg p-3"><div className="text-lg font-semibold text-green-400">+23%</div>Conversion</div>
<div className="bg-white/5 rounded-lg p-3"><div className="text-lg font-semibold text-red-400">-11%</div>Error Rate</div>
</div>
</div>

<div className="relative p-6 border border-gray-700/50 rounded-2xl bg-gray-900/40 backdrop-blur-md hover:bg-gray-900/60 transition group animate-slide-up" style={{animationDelay: `.2s`}}>
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold">Environments</h3>
<svg className="lucide lucide-layers w-5 h-5 text-gray-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="space-y-3">
<button className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-600 rounded-lg bg-brand-600/20 hover:bg-brand-600/30 transition">
<span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full"></span>Production</span>
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<button className="flex items-center justify-between w-full px-3 py-2 text-sm border border-gray-800 rounded-lg hover:border-brand-500/40 hover:bg-gray-800 transition">
<span className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>Staging</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-gray-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="flex items-center justify-between w-full px-3 py-2 text-sm border border-gray-800 rounded-lg hover:border-brand-500/40 hover:bg-gray-800 transition">
<span className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-400 rounded-full"></span>Development</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-gray-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<button className="mt-6 w-full flex items-center justify-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition"><svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Add Environment</button>
</div>
</div>
</section>

<footer className="border-t border-gray-800/50 py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
<p>© 2024 LaunchCheaply Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Status</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Security</a>
</div>
</div>
</footer>



    </>
  );
}
