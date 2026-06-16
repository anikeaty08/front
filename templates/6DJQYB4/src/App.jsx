import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Wait for page to load then initialize Lucide icons
    window.addEventListener('load', function() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });

    // Collapsible AI menu
    document.getElementById('aiToggle').addEventListener('click', () => {
      const menu = document.getElementById('aiMenu');
      const chevron = document.getElementById('aiChevron');
      menu.classList.toggle('hidden');
      chevron.classList.toggle('rotate-180');
    });

    // Security Chart
    const ctx1 = document.getElementById('securityChart').getContext('2d');
    const securityChart = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Protection Score',
          data: [92, 89, 94, 87, 91, 96, 93, 88, 95, 90, 97, 94],
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#8b5cf6',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { color: 'rgba(255, 255, 255, 0.6)', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { color: 'rgba(255, 255, 255, 0.6)', font: { size: 10 } },
            min: 80,
            max: 100
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        }
      }
    });

    // Budget Chart
    const ctx2 = document.getElementById('budgetChart').getContext('2d');
    const budgetChart = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'Actual Spending',
            data: [3200, 3800, 3600, 4200, 3900, 3500, 4100, 3700],
            borderColor: '#8b5cf6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            tension: 0.4,
            fill: false,
            pointBackgroundColor: '#8b5cf6',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 4
          },
          {
            label: 'Target Budget',
            data: [3500, 3500, 3800, 4000, 3800, 3600, 3900, 3800],
            borderColor: '#ec4899',
            backgroundColor: 'rgba(236, 72, 153, 0.1)',
            tension: 0.4,
            fill: false,
            pointBackgroundColor: '#ec4899',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 4,
            borderDash: [5, 5]
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: 'rgba(255, 255, 255, 0.8)',
              font: { size: 11 },
              usePointStyle: true,
              pointStyle: 'line'
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { color: 'rgba(255, 255, 255, 0.6)', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { 
              color: 'rgba(255, 255, 255, 0.6)', 
              font: { size: 10 },
              callback: function(value) {
                return '$' + value.toLocaleString();
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        }
      }
    });

    // Download HTML
    document.getElementById('downloadHtml').addEventListener('click', () => {
      const html = document.documentElement.outerHTML;
      const blob = new Blob([html], {type: 'text/html'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'financial-dashboard.html';
      a.click();
      URL.revokeObjectURL(url);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-[1440px] min-h-[600px] h-[min(900px,calc(100vh-2rem))] bg-gradient-to-br from-[#0d0b16] to-[#151226] rounded-lg overflow-hidden text-white" id="app">

<div className="flex h-full flex-col lg:flex-row">

<aside className="w-full lg:w-64 bg-gradient-to-b from-[#191428] to-[#0e0a1c] flex flex-col lg:max-h-full overflow-y-auto">

<div className="flex items-center gap-2 px-6 py-4 lg:py-6 flex-shrink-0">
<div className="w-4 h-4 bg-stone-500 rounded-full" style={{}}></div>
<span className="text-lg font-semibold tracking-tight font-geist">WealthVault</span>
</div>

<nav className="flex-1 px-4 space-y-1 overflow-y-auto">
<button className="group w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-stone-600/20 hover:bg-stone-600/30" style={{}}>
<svg className="w-[20px] h-[20px]" data-lucide="home" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-sm font-medium font-geist">Overview</span>
</button>
<button className="group w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-stone-600/20" style={{}}>
<svg className="w-[20px] h-[20px]" data-lucide="arrow-left-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
<span className="text-sm font-medium font-geist">Transfers</span>
</button>
<button className="group w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-stone-600/20" style={{}}>
<svg className="w-[20px] h-[20px]" data-lucide="chart-line" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 8h7"></path><path d="M8 12h6"></path><path d="M11 16h5"></path></svg>
<span className="text-sm font-medium font-geist">Analytics</span>
</button>
<button className="group w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-stone-600/20" style={{}}>
<svg className="w-[20px] h-[20px]" data-lucide="repeat" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 18v-1"></path><path d="M12 18v-6"></path><path d="M16 18v-3"></path></svg>
<span className="text-sm font-medium font-geist">Recurring</span>
</button>

<div className="">
<button className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-stone-600/20" id="aiToggle" style={{}}>
<div className="flex items-center gap-3">
<svg className="w-[20px] h-[20px]" data-lucide="sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 5v4"></path><rect height="6" rx="1" width="4" x="7" y="9"></rect><path d="M9 15v2"></path><path d="M17 3v2"></path><rect height="8" rx="1" width="4" x="15" y="5"></rect><path d="M17 13v3"></path><path d="M3 3v16a2 2 0 0 0 2 2h16"></path></svg>
<span className="text-sm font-medium font-geist">Smart Insights</span>
</div>
<i className="w-4 h-4 transition-transform" data-lucide="chevron-down" id="aiChevron"></i>
</button>
<div className="space-y-1 pl-11 mt-1 hidden" id="aiMenu">
<button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-stone-600/20 text-xs font-geist" style={{}}>
                Risk Monitor
              </button>
<button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-stone-600/20 text-xs font-geist" style={{}}>
                Spending Insights
              </button>
<button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-stone-600/20 text-xs font-geist" style={{}}>
                Alert Center
              </button>
</div>
</div>
</nav>

<div className="flex items-center gap-3 px-6 py-4 lg:py-6 flex-shrink-0">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/40?img=12"/>
<div className="flex-1">
<p className="text-sm font-medium font-geist">Emma Chen</p>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-600/30 hover:bg-stone-600/40" style={{}}>
<svg className="w-[16px] h-[16px]" data-lucide="log-out" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-h-0 overflow-hidden">

<div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-8 py-4 lg:py-6 border-b border-white/10 gap-4 flex-shrink-0">
<div className="">
<h1 className="text-2xl font-jakarta font-medium">Financial Overview</h1>
<p className="text-xs text-white/60 font-geist">Track expenses, detect anomalies, and manage your wealth intelligently.</p>
</div>
<div className="flex items-center gap-3">
<button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 block w-2 h-2 bg-red-500 rounded-full" style={{}}></span>
</button>
<button className="px-4 py-2 rounded-full bg-white text-sm font-medium text-black hover:bg-pink-200 font-geist" style={{}}>
              Export
            </button>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 py-4 lg:py-6">

<div className="relative bg-white/5 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d0f3c19-2547-4b20-8911-9713329c4ca6_800w.jpg)] bg-cover rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex mb-4 items-center justify-between">
<p className="text-xs text-white/60 flex items-center gap-1 font-geist">
<svg className="w-[16px] h-[16px]" data-lucide="trending-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg> 
                  Weekly Outflow
                </p>
<span className="text-xs text-orange-400 font-geist" style={{}}>-12.4%</span>
</div>
<div className="text-2xl mb-6 font-jakarta font-medium">$2,840</div>
<div className="flex items-center justify-between text-xs">
<button className="underline underline-offset-2 font-geist">View Details</button>
<button className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
<svg className="w-[16px] h-[16px]" data-lucide="external-link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative bg-white/5 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9dead2ce-9640-41bd-8153-af6e7acc42cf_800w.jpg)] bg-cover rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-center justify-between mb-4">
<p className="text-xs text-white/60 flex items-center gap-1 font-geist">
<svg className="w-[16px] h-[16px]" data-lucide="piggy-bank" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg> 
                  Savings Balance
                </p>
<span className="text-xs text-orange-400 font-geist" style={{}}>+18.7%</span>
</div>
<div className="text-2xl mb-6 font-jakarta font-medium">$12,450</div>
<div className="flex items-center justify-between text-xs">
<button className="underline underline-offset-2 font-geist">View Details</button>
<button className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
<svg className="w-[16px] h-[16px]" data-lucide="external-link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative md:col-span-2 xl:col-span-1 bg-white/5 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86c20217-e734-45e2-a50b-0e5602db415c_800w.jpg)] bg-cover rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-center justify-between mb-4">
<p className="text-xs text-white/60 flex items-center gap-1 font-geist">
<svg className="w-[16px] h-[16px]" data-lucide="receipt" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path className="" d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg> 
                  Total Volume
                </p>
<span className="text-xs text-orange-400 font-geist" style={{}}>+7.1%</span>
</div>
<div className="text-2xl mb-6 font-jakarta font-medium">$156,780</div>
<div className="flex items-center justify-between text-xs">
<button className="underline underline-offset-2 font-geist">View Details</button>
<button className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
<svg className="w-[16px] h-[16px]" data-lucide="external-link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-8">

<div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<p className="text-sm font-medium flex items-center gap-2 font-geist">
<svg className="w-[20px] h-[20px]" data-lucide="shield-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> 
                  Account Protection
                </p>
<button className="text-xs px-3 py-1 rounded-full bg-stone-600/20 hover:bg-stone-600/30 font-geist" style={{}}>Review</button>
</div>
<div className="flex-1 min-h-[180px] h-[220px]">
<canvas className="" height="360" id="securityChart" style={{display: 'block', boxSizing: 'border-box', height: '180px', width: '508px'}} width="1016"></canvas>
</div>
<div className="flex justify-end mt-4">
<button className="text-xs px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 font-geist" style={{}}>All Systems Normal</button>
</div>
</div>

<div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<p className="text-sm font-medium flex items-center gap-2 font-geist">
<svg className="w-[20px] h-[20px]" data-lucide="target" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"></path></svg> 
                  Budget Tracking
                </p>
</div>
<div className="flex-1 min-h-[180px] h-[220px]">
<canvas className="" height="448" id="budgetChart" style={{display: 'block', boxSizing: 'border-box', height: '224px', width: '508px'}} width="1016"></canvas>
</div>
</div>
</div>

<div className="px-4 sm:px-8 py-4 lg:py-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
<h2 className="text-lg font-semibold font-geist">Risk Alerts</h2>
<button className="flex items-center gap-1 text-xs hover:underline font-geist">
                Smart Filters <i className="w-3 h-3" data-lucide="filter"></i>
</button>
</div>
<div className="overflow-x-auto rounded-lg border border-white/10">
<table className="min-w-full text-xs">
<thead className="bg-white/5">
<tr className="">
<th className="px-4 py-3 text-left font-medium font-geist">Alert Type</th>
<th className="px-4 py-3 text-left font-medium font-geist">Date</th>
<th className="px-4 py-3 text-left font-medium font-geist">AI Response</th>
<th className="px-4 py-3 text-left font-medium font-geist">Origin</th>
<th className="px-4 py-3 text-left font-medium font-geist">Method</th>
</tr>
</thead>
<tbody className="">
<tr className="border-t border-white/5 hover:bg-white/5">
<td className="px-4 py-3 flex items-center gap-2 font-geist">
<svg className="w-[16px] h-[16px]" data-lucide="key" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(192, 132, 252)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
                      Access attempt
                    </td>
<td className="px-4 py-3 font-geist">Jun 15, 09:42</td>
<td className="px-4 py-3">
<span className="px-2 py-1 rounded-full bg-red-500/20 text-red-400 font-geist" style={{}}>Denied</span>
</td>
<td className="px-4 py-3 font-geist">Singapore (IP 203.*)</td>
<td className="px-4 py-3 font-geist">Safari · iOS 16</td>
</tr>
<tr className="border-t border-white/5 hover:bg-white/5">
<td className="px-4 py-3 flex items-center gap-2 font-geist">
<svg className="w-[16px] h-[16px]" data-lucide="banknote" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(192, 132, 252)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
                      Large withdrawal
                    </td>
<td className="px-4 py-3 font-geist">Jun 14, 16:22</td>
<td className="px-4 py-3">
<span className="px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 font-geist" style={{}}>Under Review</span>
</td>
<td className="px-4 py-3 font-geist">Unknown Location</td>
<td className="px-4 py-3 font-geist">MasterCard · Google Pay</td>
</tr>
<tr className="border-t border-white/5 hover:bg-white/5">
<td className="px-4 py-3 flex items-center gap-2 font-geist">
<svg className="w-[16px] h-[16px]" data-lucide="refresh-cw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(192, 132, 252)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
                      Scheduled payment
                    </td>
<td className="px-4 py-3 font-geist">Jun 13, 08:00</td>
<td className="px-4 py-3">
<span className="px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 font-geist" style={{}}>Processed</span>
</td>
<td className="px-4 py-3 font-geist">Canada (IP 142.*)</td>
<td className="px-4 py-3 font-geist">MoneyFlow App</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
</div>





    </>
  );
}
