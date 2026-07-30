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


// Initialize lucide icons
lucide.createIcons();



// Chart configurations
function createLine(ctx, data, color) {
  return {
    label: '',
    data,
    borderColor: color,
    borderWidth: 2,
    tension: 0.4,
    fill: false,
    pointRadius: 0,
    pointHoverRadius: 4
  };
}

// Trading activity chart
new Chart(document.getElementById('freqChart'), {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
    datasets: [createLine(null,[28,52,38,67,71,48,56,78,62,85,92],'#8b5cf6')]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{legend:{display:false}},
    scales:{x:{display:false},y:{display:false}},
    interaction: { intersect: false }
  }
});

// Asset distribution chart
new Chart(document.getElementById('donutChart'), {
  type: 'doughnut',
  data: {
    labels: ['Tech Stocks','Index Funds','Bonds','Crypto'],
    datasets: [{
      data:[45,28,18,9],
      backgroundColor:['#8b5cf6','#3b82f6','#10b981','#f59e0b'],
      borderWidth:0,
      borderRadius:4
    }]
  },
  options:{
    responsive: true,
    maintainAspectRatio: false,
    cutout:'70%',
    plugins:{legend:{display:false}}
  }
});

// Performance tracking chart
new Chart(document.getElementById('balanceChart'), {
  type: 'bar',
  data: {
    labels:['Jun','Jul','Aug','Sep','Oct','Nov'],
    datasets:[{
      type:'bar',
      data:[42,48,38,52,68,75],
      backgroundColor:'#3b82f6',
      borderRadius:6,
      order:2
    },
    {
      type:'line',
      data:[35,52,41,58,48,62],
      borderColor:'#10b981',
      tension:0.4,
      borderWidth:3,
      fill:false,
      pointBackgroundColor:'#10b981',
      pointRadius:4,
      order:1
    }]
  },
  options:{
    responsive: true,
    maintainAspectRatio: false,
    plugins:{legend:{display:false}},
    scales:{x:{display:false},y:{display:false}}
  }
});

// Market analytics chart
new Chart(document.getElementById('statsChart'),{
  type:'line',
  data:{
    labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
    datasets:[
      createLine(null,[18000,19200,18750,21400,23100,22800,24200,26300,25900,27800,29500],'#8b5cf6'),
      createLine(null,[2800,3100,2950,3250,3400,3300,3150,3500,3200,3400,3250],'#f59e0b'),
      createLine(null,[15200,16100,15800,18150,19700,19500,21050,22800,22700,24400,26250],'#10b981')
    ]
  },
  options:{
    responsive: true,
    maintainAspectRatio: false,
    plugins:{legend:{display:false}},
    scales:{x:{display:false},y:{display:false}},
    interaction: { intersect: false }
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
      
<header className="border-b opacity-0 animate-fadeup border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-gradient-to-br from-red-500 rounded-lg flex items-center justify-center to-red-600" style={{}}>
<svg className="lucide lucide-trending-up w-4 h-4 stroke-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h1 className="text-lg font-semibold tracking-tight font-geist">InvestPro Analytics</h1>
</div>
<div className="flex items-center space-x-2">
<button className="h-10 w-10 grid place-items-center rounded-lg transition-colors duration-200 bg-white/10 hover:bg-white/20">
<svg className="lucide lucide-search w-5 h-5 stroke-white" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="h-10 w-10 grid place-items-center rounded-lg transition-colors duration-200 bg-white/10 hover:bg-white/20">
<svg className="lucide lucide-bell w-5 h-5 stroke-white" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
</div>
</header>
<main className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">

<section className="sm:col-span-2 lg:col-span-4 sm:p-6 transition-colors duration-200 opacity-0 animate-fadeup animate-delay-100 hover:border-white/10 bg-[#141416] border-white/5 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start justify-between">
<div className="">
<p className="text-sm text-white/60 font-geist">Portfolio Allocation | <span className="text-white font-geist">3 accounts</span></p>
</div>
<button className="p-1.5 rounded-md transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-settings w-4 h-4 stroke-white/70" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
<div className="mt-6 space-y-4">
<div className="">
<div className="flex items-center justify-between mb-1">
<p className="text-xs font-geist">Growth Portfolio</p>
<span className="text-xs text-white/60 font-geist">68%</span>
</div>
<div className="w-full h-3 rounded-full overflow-hidden bg-white/10">
<div className="h-full bg-gradient-to-r from-stone-500 to-orange-500" style={{width: `68%`}}></div>
</div>
<p className="text-xs mt-1 text-white/60 font-geist">$34,576 / $50,000</p>
</div>
<div className="">
<div className="flex items-center justify-between mb-1">
<p className="text-xs font-geist">Conservative Portfolio</p>
<span className="text-xs text-white/60 font-geist">31%</span>
</div>
<div className="w-full h-3 rounded-full overflow-hidden bg-white/10">
<div className="h-full bg-gradient-to-r from-pink-500 to-orange-500" style={{width: `31%`}}></div>
</div>
<p className="text-xs mt-1 text-white/60 font-geist">$9,320 / $30,000</p>
</div>
</div>
</section>

<section className="sm:col-span-1 lg:col-span-3 bg-[#141416] rounded-2xl p-4 sm:p-6 border transition-colors duration-200 opacity-0 animate-fadeup animate-delay-200 border-white/5 hover:border-white/10">
<div className="flex items-start justify-between">
<div className="">
<h2 className="text-sm font-medium font-geist">Trading Activity</h2>
<p className="text-xs text-white/60 font-geist">Monthly transaction volume</p>
</div>
<button className="p-1.5 rounded-md transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-bar-chart-3 w-4 h-4 stroke-white/70" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</button>
</div>
<div className="mt-6">
<canvas className="w-full h-32" height="256" id="freqChart" style={{display: `block`, boxSizing: `border-box`, height: `128px`, width: `240px`}} width="480"></canvas>
</div>
</section>

<section className="sm:col-span-1 lg:col-span-2 bg-[#141416] rounded-2xl p-4 sm:p-6 flex flex-col border transition-colors duration-200 opacity-0 animate-fadeup animate-delay-300 border-white/5 hover:border-white/10">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium font-geist">Asset Distribution</h2>
<button className="p-1.5 rounded-md transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-pie-chart w-4 h-4 stroke-white/70" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</button>
</div>
<div className="mt-4 flex-1 flex items-center justify-center">
<canvas className="w-full h-40" height="320" id="donutChart" style={{display: `block`, boxSizing: `border-box`, height: `160px`, width: `135px`}} width="270"></canvas>
</div>
<ul className="mt-6 space-y-3 text-xs">
<li className="flex justify-between"><span className="flex items-center font-geist"><span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2" style={{}}></span>Tech Stocks</span></li>
<li className="flex justify-between"><span className="flex items-center font-geist"><span className="inline-block w-2 h-2 rounded-full bg-pink-500 mr-2" style={{}}></span>Index Funds</span></li>
<li className="flex justify-between"><span className="flex items-center font-geist"><span className="inline-block w-2 h-2 rounded-full bg-stone-500 mr-2" style={{}}></span>Bonds</span></li>
<li className="flex justify-between"><span className="flex items-center font-geist"><span className="inline-block w-2 h-2 rounded-full bg-pink-500 mr-2" style={{}}></span>Crypto</span></li>
</ul>
</section>

<section className="sm:col-span-2 lg:col-span-3 bg-[#141416] rounded-2xl p-4 sm:p-6 border transition-colors duration-200 opacity-0 animate-fadeup animate-delay-400 border-white/5 hover:border-white/10">
<div className="flex items-start justify-between">
<h2 className="text-sm font-medium font-geist">Performance Tracking</h2>
<button className="p-1.5 rounded-md transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-trending-up w-4 h-4 stroke-white/70" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</button>
</div>
<div className="mt-6">
<canvas className="w-full h-40" height="320" id="balanceChart" style={{display: `block`, boxSizing: `border-box`, height: `160px`, width: `240px`}} width="480"></canvas>
</div>
<div className="mt-6 text-xs space-y-1">
<div className="flex justify-between py-1 border-t border-white/5"><span className="font-geist">November</span><span className="text-stone-400 font-geist" style={{}}>+$18,342.50</span></div>
<div className="flex justify-between py-1"><span className="font-geist">October</span><span className="text-stone-400 font-geist" style={{}}>+$14,225.75</span></div>
<div className="flex justify-between py-1 border-b border-white/5"><span className="font-geist">September</span><span className="text-red-400 font-geist" style={{}}>-$6,890.25</span></div>
</div>
</section>

<section className="sm:col-span-1 lg:col-span-4 sm:p-6 flex flex-col transition-colors duration-200 opacity-0 animate-fadeup animate-delay-500 bg-[#141416] border rounded-2xl pt-4 pr-4 pb-4 pl-4 hover:border-white/10 border-white/5">
<div className="flex items-start justify-between">
<h2 className="text-sm font-medium font-geist">Dividend Tracker</h2>
<button className="p-1.5 rounded-md transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-calendar w-4 h-4 stroke-white/70" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
</div>
<div className="mt-4 flex items-center space-x-2">
<span className="text-xs rounded-full px-2 py-0.5 bg-white/10 font-geist">This quarter</span>
</div>
<div className="mt-6 flex items-baseline space-x-2">
<p className="text-4xl font-space-grotesk font-semibold">8</p>
<span className="text-sm text-stone-400 font-geist" style={{}}>+2</span>
</div>
<p className="text-xs text-white/60 font-geist">Dividend payments</p>
<div className="mt-auto grid grid-cols-7 gap-1">
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20] bg-gradient-to-br from-stone-500 to-orange-500" style={{}}></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20] bg-gradient-to-br from-stone-500 to-orange-500" style={{}}></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20] bg-gradient-to-br from-stone-500 to-orange-500" style={{}}></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20] bg-gradient-to-br from-stone-500 to-orange-500" style={{}}></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20] bg-gradient-to-br from-stone-500 to-orange-500" style={{}}></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20] bg-gradient-to-br from-stone-500 to-orange-500" style={{}}></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20] bg-gradient-to-br from-stone-500 to-orange-500" style={{}}></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20] bg-gradient-to-br from-stone-500 to-orange-500" style={{}}></div>
<div className="w-4 h-4 sm:w-6 sm:h-6 rounded-[4px] bg-[#1d1d20]"></div>
</div>
</section>

<section className="sm:col-span-1 lg:col-span-4 sm:p-6 flex hover:border-red-500/30 transition-colors duration-200 opacity-0 animate-fadeup animate-delay-600 bg-[url(https://images.unsplash.com/photo-1687392946860-5231d4b3c604?w=800&q=80)] bg-cover border-red-500/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 items-center" style={{}}>
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 rounded-xl flex items-center justify-center to-red-600" style={{}}>
<svg className="lucide lucide-wallet w-5 h-5 sm:w-6 sm:h-6 stroke-white" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div className="ml-4">
<p className="text-xs mb-1 text-white/60 font-geist">Growth Account</p>
<h3 className="text-xl sm:text-2xl font-space-grotesk font-semibold">$94,750.25</h3>
</div>
</section>
<section className="sm:col-span-1 lg:col-span-4 sm:p-6 flex hover:border-pink-500/30 transition-colors duration-200 opacity-0 animate-fadeup animate-delay-700 bg-[url(https://images.unsplash.com/photo-1687804446688-d455c357385d?w=800&q=80)] bg-cover border-pink-500/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 items-center" style={{}}>
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center" style={{}}>
<svg className="lucide lucide-shield w-5 h-5 sm:w-6 sm:h-6 stroke-white" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="ml-4">
<p className="text-xs mb-1 text-white/60 font-geist">Conservative Account</p>
<h3 className="text-xl sm:text-2xl font-space-grotesk font-semibold">$52,480.50</h3>
</div>
</section>

<section className="sm:col-span-2 lg:col-span-7 bg-[#141416] rounded-2xl p-4 sm:p-6 border transition-colors duration-200 opacity-0 animate-fadeup animate-delay-800 border-white/5 hover:border-white/10">
<div className="flex items-start justify-between">
<h2 className="text-sm font-medium font-geist">Market Analytics</h2>
<button className="p-1.5 rounded-md transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-activity w-4 h-4 stroke-white/70" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</button>
</div>
<div className="flex items-center justify-end mt-2">
<div className="flex space-x-1">
<span className="text-xs bg-red-500/20 rounded-full px-2 py-0.5 text-red-300 font-geist" style={{}}>6M</span>
<span className="text-xs rounded-full px-2 py-0.5 bg-white/10 font-geist">1Y</span>
</div>
</div>
<div className="mt-4">
<canvas className="w-full h-48 sm:h-56" height="448" id="statsChart" style={{display: `block`, boxSizing: `border-box`, height: `224px`, width: `658px`}} width="1317"></canvas>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-sm">
<div>
<p className="text-white/60 font-geist">Portfolio Growth</p>
<p className="flex items-baseline space-x-2"><span className="text-2xl font-space-grotesk font-semibold">$24,890.75</span><span className="text-xs text-stone-400 font-geist" style={{}}>▲ 18.2%</span></p>
</div>
<div>
<p className="text-white/60 font-geist">Monthly Expenses</p>
<p className="flex items-baseline space-x-2"><span className="text-2xl font-space-grotesk font-semibold">$3,247.50</span><span className="text-xs text-red-400 font-geist" style={{}}>▼ 5.1%</span></p>
</div>
</div>
</section>

<section className="sm:col-span-2 lg:col-span-5 sm:p-6 flex flex-col opacity-0 animate-fadeup animate-delay-800 bg-[url(https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?w=800&q=80)] bg-cover border-white/5 border rounded-2xl pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-stone-500/20 to-orange-500/20 rounded-full flex items-center justify-center mb-4" style={{}}>
<svg className="lucide lucide-brain w-8 h-8 stroke-emerald-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2 font-geist">Market Sentiment</h3>
<p className="text-sm mb-4 text-white/40 font-geist">AI-powered analysis coming soon</p>
<div className="flex items-center justify-center space-x-2">
<div className="w-2 h-2 bg-stone-500 rounded-full animate-pulse" style={{}}></div>
<div className="w-2 h-2 bg-stone-500 rounded-full animate-pulse" style={{animationDelay: `0.2s`}}></div>
<div className="w-2 h-2 bg-stone-500 rounded-full animate-pulse" style={{animationDelay: `0.4s`}}></div>
</div>
</div>
</section>
</main>


    </>
  );
}
