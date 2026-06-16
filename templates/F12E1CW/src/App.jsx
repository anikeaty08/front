import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Funnel Chart
    const funnelCtx = document.getElementById('funnelChart')?.getContext('2d');
    if (funnelCtx) {
      new Chart(funnelCtx, {
        type: 'bar',
        data: {
          labels: ['Visits', 'Interest', 'Cart', 'Purchase'],
          datasets: [{
            data: [148000, 89000, 28000, 3700],
            backgroundColor: [
              'rgba(71, 85, 105, 0.3)',
              'rgba(100, 116, 139, 0.3)',
              'rgba(148, 163, 184, 0.3)',
              'rgba(139, 92, 246, 0.4)'
            ],
            borderRadius: 4,
            barThickness: 12
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          scales: {
            x: { 
              display: false,
              grid: { display: false }
            },
            y: { 
              display: false,
              grid: { display: false }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          }
        }
      });
    }
  


      // Icons (set stroke width to 1.5)
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile sidebar toggle
      const btn = document.getElementById('mobileMenuBtn');
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
      }
      function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
      }
      btn && btn.addEventListener('click', () => {
        if (sidebar.classList.contains('-translate-x-full')) openSidebar(); else closeSidebar();
      });
      overlay && overlay.addEventListener('click', closeSidebar);

      // Chart.js: Revenue Line
      const revCtx = document.getElementById('revenueChart')?.getContext('2d');
      if (revCtx) {
        const gradient = revCtx.createLinearGradient(0, 0, 0, 220);
        gradient.addColorStop(0, 'rgba(129, 140, 248, 0.35)');
        gradient.addColorStop(1, 'rgba(129, 140, 248, 0.0)');

        new Chart(revCtx, {
          type: 'line',
          data: {
            labels: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'],
            datasets: [{
              label: 'Revenue',
              data: [920, 1100, 980, 1300, 1500, 1400, 1700, 1650, 1820, 1760, 1900, 2100],
              tension: 0.35,
              fill: true,
              backgroundColor: gradient,
              borderColor: '#8b5cf6',
              borderWidth: 2,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { size: 11 } } },
              y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#94a3b8', font: { size: 11 } } }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(2,6,23,0.9)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 10,
                titleColor: '#e2e8f0',
                bodyColor: '#cbd5e1'
              }
            }
          }
        });
      }

      // Chart.js: Traffic Doughnut
      const trafCtx = document.getElementById('trafficChart')?.getContext('2d');
      if (trafCtx) {
        new Chart(trafCtx, {
          type: 'doughnut',
          data: {
            labels: ['Organic','Social','Referrals'],
            datasets: [{
              data: [67, 32, 1],
              backgroundColor: ['#fb7185', '#38bdf8', '#34d399'],
              borderColor: 'transparent',
              hoverOffset: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: { legend: { display: false } }
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7726828b-4995-4410-ab5e-2ef3a9982947_3840w.jpg")'}}></div>
<div className="min-h-screen w-full flex md:p-8 pt-4 pr-4 pb-4 pl-4 items-center justify-center">

<div className="relative mx-auto w-full max-w-[1400px] rounded-2xl border bg-[#0b0b11] shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden border-white/[0.02]" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>

<div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-red-500/15 blur-3xl"></div>
<div className="pointer-events-none absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="pointer-events-none absolute top-1/3 -right-16 h-64 w-64 rounded-full bg-sky-500/5 blur-2xl"></div>

<div className="relative z-20 flex items-center justify-between px-3 py-2 bg-[#0b0b11]/80 backdrop-blur border-b border-white/[0.04]">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"></span>
<span className="h-3 w-3 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.08)] bg-pink-400"></span>
<span className="h-3 w-3 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.08)] bg-orange-400"></span>
</div>
<div className="hidden md:block text-xs tracking-tight font-sans font-light text-stone-400">Nebula — Analytical Board</div>
<div className="w-16"></div>
</div>

<header className="md:hidden sticky top-0 z-50 bg-[#0b0b11]/80 backdrop-blur border-b border-white/[0.04]">
<div className="flex items-center justify-between px-4 py-3">
<button className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.02]" id="mobileMenuBtn">
<svg className="lucide lucide-menu h-4 w-4 text-stone-400" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-gradient-to-br from-red-500/60 to-fuchsia-500/60 grid place-items-center">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-base tracking-tight font-sans font-light text-stone-100">Nebula</span>
</div>
<button className="inline-flex h-10 items-center gap-2 rounded-lg bg-gradient-to-r px-3 text-sm font-medium from-red-600/70 to-stone-600/70 border border-white/[0.04]">
<svg className="lucide lucide-plus h-4 w-4 text-stone-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="font-sans font-light text-stone-200">New Initiative</span>
</button>
</div>
</header>
<div className="flex relative z-10">

<aside className="absolute inset-y-0 left-0 z-40 w-72 -translate-x-full md:translate-x-0 md:static md:flex md:flex-col bg-[#0e0e16] border-r border-white/[0.04]" id="sidebar">
<div className="flex items-center gap-2 px-5 py-5 border-b border-white/[0.04]">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500/60 to-fuchsia-500/60 grid place-items-center">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<p className="text-lg tracking-tight font-sans font-light text-stone-100">Nebula</p>
<p className="text-xs font-sans font-light text-stone-400">Control Center</p>
</div>
</div>
<nav className="px-3 py-4 overflow-y-auto">
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 bg-white/[0.03] border-l-2 border-red-400 relative" href="#">
<svg className="lucide lucide-layout-dashboard h-4 w-4 text-stone-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="text-sm font-sans font-light text-stone-100">Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.03] border-l-2 border-transparent hover:border-white/[0.06]" href="#">
<svg className="lucide lucide-bar-chart-3 h-4 w-4 text-stone-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="text-sm font-sans font-light text-stone-300">Analytics</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.03] border-l-2 border-transparent hover:border-white/[0.06]" href="#">
<svg className="lucide lucide-cable h-4 w-4 text-stone-400" data-lucide="cable" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"></path><path d="M17 21v-2"></path><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"></path><path d="M21 21v-2"></path><path d="M3 5V3"></path><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"></path><path d="M7 5V3"></path></svg>
<span className="text-sm font-sans font-light text-stone-300">Integrations</span>
<span className="ml-auto rounded-full text-xs px-2 py-0.5 font-sans font-light bg-red-600/15 text-red-300 border border-red-500/20">New</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.03] border-l-2 border-transparent hover:border-white/[0.06]" href="#">
<svg className="lucide lucide-megaphone h-4 w-4 text-stone-400" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
<span className="text-sm font-sans font-light text-stone-300">Campaigns</span>
<span className="ml-auto text-xs rounded-full px-2 py-0.5 font-sans font-light bg-white/[0.06] text-stone-400 border border-white/[0.04]">2</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.03] border-l-2 border-transparent hover:border-white/[0.06]" href="#">
<svg className="lucide lucide-users h-4 w-4 text-stone-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-sans font-light text-stone-300">Customers</span>
</a>
</li>
</ul>
<div className="my-5 border-t border-white/[0.04]"></div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.03] border-l-2 border-transparent hover:border-white/[0.06]" href="#">
<svg className="lucide lucide-credit-card h-4 w-4 text-stone-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span className="text-sm font-sans font-light text-stone-300">Billing</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.03] border-l-2 border-transparent hover:border-white/[0.06]" href="#">
<svg className="lucide lucide-settings h-4 w-4 text-stone-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm font-sans font-light text-stone-300">Settings</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.03] border-l-2 border-transparent hover:border-white/[0.06]" href="#">
<svg className="lucide lucide-life-buoy h-4 w-4 text-stone-400" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
<span className="text-sm font-sans font-light text-stone-300">Help Center</span>
</a>
</li>
</ul>
</nav>

<div className="mt-auto p-4">
<div className="relative overflow-hidden rounded-xl border bg-gradient-to-br via-transparent border-white/[0.06] from-fuchsia-600/15 to-stone-600/15">
<img alt="3D abstract" className="absolute inset-0 h-full w-full object-cover opacity-15 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d2c474c-2678-4bd5-9368-4c18ce548d1f_800w.jpg"/>
<div className="relative p-4">
<p className="text-sm font-sans font-light text-stone-300">Advanced automations and faster growth</p>
<h4 className="mt-1 text-base tracking-tight font-sans font-light text-stone-100">AI Accelerator</h4>
<button className="mt-3 w-full rounded-lg px-3 py-2 text-sm font-sans font-light bg-white/[0.06] hover:bg-white/[0.08] border border-white/[0.04] text-stone-200">
                    Upgrade plan
                  </button>
</div>
</div>
</div>
</aside>

<main className="flex-1 md:ml-0 md:pl-0 ml-0 md:static">

<div className="hidden md:flex items-center justify-between px-6 py-5 border-b bg-[#0b0b11]/60 backdrop-blur supports-[backdrop-filter]:bg-[#0b0b11]/60 border-white/[0.04]">
<div className="flex items-center gap-3">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-2.5 h-4 w-4 text-stone-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-80 rounded-lg pl-10 pr-3 py-2.5 text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-red-600/30 bg-white/[0.03] border border-white/[0.04] text-stone-200" placeholder="Search dashboards, metrics..."/>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r px-3.5 py-2.5 text-sm font-medium from-red-600/70 to-stone-600/70 border border-white/[0.04]">
<svg className="lucide lucide-plus h-4 w-4 text-stone-200" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="font-sans font-light text-stone-100">New Initiative</span>
</button>
<button className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.02]"><svg className="lucide lucide-calendar h-4 w-4 text-stone-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg></button>
<button className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.02]"><svg className="lucide lucide-bell h-4 w-4 text-stone-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></button>
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/[0.06]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e7842fa-2930-4398-a1b1-829010b57b42_320w.jpg"/>
</div>
</div>

<section className="px-4 md:px-6 py-6">
<div className="mb-6">
<h1 className="text-3xl tracking-tight font-instrument-serif font-normal text-stone-100">Analytical Board</h1>
<p className="text-sm mt-1 font-sans font-light text-stone-400">A quick overview of your business performance</p>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
<div className="rounded-xl border p-4 border-white/[0.06] bg-white/[0.02]">
<div className="flex items-center justify-between">
<span className="text-xs font-sans font-light text-stone-400">Growth</span>
<span className="text-xs px-2 py-0.5 rounded-full font-sans font-light text-orange-400 bg-orange-400/8 border border-orange-400/15">Positive</span>
</div>
<div className="mt-2 text-2xl tracking-tight font-instrument-serif font-normal text-stone-100">+8.4%</div>
</div>
<div className="rounded-xl border p-4 border-white/[0.06] bg-white/[0.02]">
<div className="flex items-center justify-between">
<span className="text-xs font-sans font-light text-stone-400">Campaigns</span>
<span className="text-xs px-2 py-0.5 rounded-full font-sans font-light text-sky-300 bg-sky-400/8 border border-sky-400/15">Stable</span>
</div>
<div className="mt-2 text-2xl tracking-tight font-instrument-serif font-normal text-stone-100">34</div>
</div>
<div className="rounded-xl border p-4 border-white/[0.06] bg-white/[0.02]">
<div className="flex items-center justify-between">
<span className="text-xs font-sans font-light text-stone-400">Retention</span>
<span className="text-xs px-2 py-0.5 rounded-full font-sans font-light text-pink-300 bg-pink-400/8 border border-pink-400/15">Medium</span>
</div>
<div className="mt-2 text-2xl tracking-tight font-instrument-serif font-normal text-stone-100">63%</div>
</div>
<div className="rounded-xl border p-4 border-white/[0.06] bg-white/[0.02]">
<div className="flex items-center justify-between">
<span className="text-xs font-sans font-light text-stone-400">NPS</span>
<span className="text-xs bg-red-500/8 px-2 py-0.5 rounded-full font-sans font-light text-red-300 border border-red-500/15">Q3</span>
</div>
<div className="mt-2 text-2xl tracking-tight font-instrument-serif font-normal text-stone-100">48</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 rounded-2xl border bg-gradient-to-br p-5 border-white/[0.06] from-stone-600/8 via-white/[0.02] to-fuchsia-600/8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xs rounded-full px-2 py-0.5 font-sans font-light bg-white/[0.06] border border-white/[0.04] text-stone-300">Revenue</span>
<span className="text-xs font-sans font-light text-stone-400">April</span>
</div>
<div className="flex items-center gap-2">
<button className="text-xs rounded-lg px-2.5 py-1 font-sans font-light bg-white/[0.06] hover:bg-white/[0.08] border border-white/[0.04] text-stone-300">Weekly</button>
<button className="text-xs rounded-lg px-2.5 py-1 font-sans font-light bg-white/[0.06] hover:bg-white/[0.08] border border-white/[0.04] text-stone-300">Monthly</button>
</div>
</div>
<div className="mt-3 flex items-end justify-between">
<div>
<div className="text-4xl md:text-5xl tracking-tight font-instrument-serif font-normal text-stone-100">$15,200</div>
<div className="mt-1 text-xs flex items-center gap-1 text-orange-400">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-sans font-light">+13.2%</span>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-right">
<div>
<p className="text-[11px] font-sans font-light text-stone-400">AOV</p>
<p className="text-sm font-sans font-light text-stone-200">$82</p>
</div>
<div>
<p className="text-[11px] font-sans font-light text-stone-400">LTV</p>
<p className="text-sm font-sans font-light text-stone-200">$450</p>
</div>
<div className="">
<p className="text-[11px] font-sans font-light text-stone-400">AOF</p>
<p className="text-sm font-sans font-light text-stone-200">2.5</p>
</div>
</div>
</div>
<div className="mt-4">
<div className="h-56 rounded-xl border bg-[#0b0b11]/40 p-2 border-white/[0.06]">
<div className="h-full">
<div className="h-full"><canvas className="" height="412" id="revenueChart" style={{display: 'block', boxSizing: 'border-box', height: '206px', width: '642px'}} width="1285"></canvas></div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border p-5 border-white/[0.06] bg-white/[0.02]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-sans font-light text-stone-100">Conversion Studio</span>
</div>
<button className="flex items-center gap-2 text-xs rounded-lg px-2.5 py-1.5 font-sans font-light bg-white/[0.06] hover:bg-white/[0.08] border border-white/[0.04] text-stone-300">
<svg className="lucide lucide-message-square h-3.5 w-3.5 text-stone-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                      Chat
                    </button>
</div>
<div className="mt-4 space-y-4">

<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-orange-400"></span>
<div>
<p className="text-sm font-sans font-light text-stone-100">Smart Checkout Flow</p>
<p className="text-xs font-sans font-light text-stone-400">Autofill and intent-based steps</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-sans font-light text-orange-400">Impact +11.8%</span>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="w-11 h-6 rounded-full peer-checked:bg-orange-500/30 after:content-[''] after:absolute after:top-1 after:left-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5 bg-white/[0.06] border border-white/[0.04]"></span>
</label>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-sky-400"></span>
<div className="">
<p className="text-sm font-sans font-light text-stone-100">AI Item Recommender</p>
<p className="text-xs font-sans font-light text-stone-400">Real-time personalization</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-sans font-light text-orange-400">Impact +6.3%</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="w-11 h-6 rounded-full peer-checked:bg-orange-500/30 after:content-[''] after:absolute after:top-1 after:left-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5 bg-white/[0.06] border border-white/[0.04]"></span>
</label>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-red-400"></span>
<div className="">
<p className="text-sm font-sans font-light text-stone-100">Cart Recovery Reminder</p>
<p className="text-xs font-sans font-light text-stone-400">Trigger emails + SMS after drop</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-sans font-light text-rose-300">~12.2% cart loss</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="w-11 h-6 rounded-full peer-checked:bg-orange-500/30 after:content-[''] after:absolute after:top-1 after:left-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5 bg-white/[0.06] border border-white/[0.04]"></span>
</label>
</div>
</div>
</div>
</div>

<div className="border rounded-2xl pt-5 pr-5 pb-5 pl-5 bg-white/[0.02] border-white/[0.06]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-sans font-light text-stone-100">Funnel Conversion</span>
</div>
<span className="text-xs rounded-full px-2 py-0.5 font-sans font-light bg-pink-400/8 text-pink-300 border border-pink-400/15">Needs Attention</span>
</div>
<div className="mt-4">
<div className="h-24 rounded-lg border p-2 bg-white/[0.02] border-white/[0.06]">
<canvas height="156" id="funnelChart" style={{display: 'block', boxSizing: 'border-box', height: '78px', width: '283px'}} width="566"></canvas>
</div>
<div className="mt-3 grid grid-cols-3 gap-3 text-sm">
<div>
<p className="text-[11px] font-sans font-light text-stone-400">Site Visits</p>
<p className="font-sans font-light text-stone-200">148k</p>
</div>
<div>
<p className="text-[11px] font-sans font-light text-stone-400">Add to Cart</p>
<p className="font-sans font-light text-stone-200">28k</p>
</div>
<div>
<p className="text-[11px] font-sans font-light text-stone-400">Conversion Rate</p>
<p className="font-sans font-light text-stone-200">2.5%</p>
</div>
</div>
</div>

</div>
<div className="border rounded-2xl pt-5 pr-5 pb-5 pl-5 bg-white/[0.02] border-white/[0.06]">
<div className="flex items-center justify-between">
<span className="text-sm font-sans font-light text-stone-100">Traffic Sources</span>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-rose-400"></span>
<span className="h-2 w-2 rounded-full bg-sky-400"></span>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="col-span-1">
<div className="h-40">
<div className="h-full"><canvas className="" height="320" id="trafficChart" style={{display: 'block', boxSizing: 'border-box', height: '160px', width: '142px'}} width="285"></canvas></div>
</div>
</div>
<div className="col-span-1 flex flex-col justify-center gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-rose-400"></span>
<span className="text-sm font-sans font-light text-stone-200">Organic</span>
</div>
<span className="text-sm font-sans font-light text-stone-200">67%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-sky-400"></span>
<span className="text-sm font-sans font-light text-stone-200">Social</span>
</div>
<span className="text-sm font-sans font-light text-stone-200">32%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-orange-400"></span>
<span className="text-sm font-sans font-light text-stone-200">Referrals</span>
</div>
<span className="text-sm font-sans font-light text-stone-200">1%</span>
</div>
</div>
</div>
</div><div className="border rounded-2xl pt-5 pr-5 pb-5 pl-5 bg-white/[0.02] border-white/[0.06]">
<div className="flex items-center justify-between">
<span className="text-sm font-light text-stone-100">Device Analytics</span>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-red-400"></span>
<span className="h-2 w-2 rounded-full bg-pink-400"></span>
<span className="h-2 w-2 rounded-full bg-orange-400"></span>
</div>
</div>
<div className="mt-4 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
<div>
<p className="text-sm font-sans font-light text-stone-100">Desktop</p>
<p className="text-xs font-sans font-light text-stone-400">Primary platform</p>
</div>
</div>
<div className="text-right">
<p className="text-lg font-sans font-light text-stone-200">48%</p>
<p className="text-xs font-sans font-light text-red-300">+2.3%</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-pink-400"></span>
<div className="">
<p className="text-sm font-sans font-light text-stone-100">Mobile</p>
<p className="text-xs font-sans font-light text-stone-400">Growing segment</p>
</div>
</div>
<div className="text-right">
<p className="text-lg font-sans font-light text-stone-200">45%</p>
<p className="text-xs font-sans font-light text-orange-400">+5.7%</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-orange-400"></span>
<div>
<p className="text-sm font-sans font-light text-stone-100">Tablet</p>
<p className="text-xs font-sans font-light text-stone-400">Stable usage</p>
</div>
</div>
<div className="text-right">
<p className="text-lg font-sans font-light text-stone-200">7%</p>
<p className="text-xs font-sans font-light text-stone-400">-1.2%</p>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-white/[0.04]">
<p className="text-xs font-sans font-light text-stone-400">Total sessions: 148,532 this month</p>
</div>
</div>

<div className="lg:col-span-3 rounded-2xl border p-4 border-white/[0.06] bg-white/[0.02]">
<div className="flex items-center justify-between">
<span className="text-sm font-sans font-light text-stone-100">Business AI Insights</span>
<button className="text-xs rounded-lg px-2.5 py-1.5 font-sans font-light bg-white/[0.06] hover:bg-white/[0.08] border border-white/[0.04] text-stone-300">Show all</button>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-red-500/8 px-3 py-1.5 text-xs font-sans font-light text-red-200 border border-red-500/15">
<svg className="lucide lucide-bot h-3 w-3 text-red-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg> Recommender AI
                    </span>
<span className="inline-flex items-center gap-2 rounded-full bg-orange-500/8 px-3 py-1.5 text-xs font-sans font-light text-orange-200 border border-orange-500/15">
<svg className="lucide lucide-activity h-3 w-3 text-orange-300" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Product views increased 43%
                    </span>
<span className="inline-flex items-center gap-2 rounded-full bg-pink-500/8 px-3 py-1.5 text-xs font-sans font-light text-pink-200 border border-pink-500/15">
<svg className="lucide lucide-alert-triangle h-3 w-3 text-pink-300" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg> High churn segment
                    </span>
<button className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-sans font-light bg-white/[0.06] hover:bg-white/[0.08] border border-white/[0.04] text-stone-300">
<svg className="lucide lucide-sparkles h-3 w-3 text-stone-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Launch weekend promo
                    </button>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="absolute inset-0 backdrop-blur-sm hidden md:hidden z-30 bg-black/60" id="overlay"></div>
</div>
</div>


    </>
  );
}
