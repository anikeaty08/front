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



    // Initialize lucide icons with strokeWidth 1.5
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.dataset.tabTarget;

        tabButtons.forEach(btn => {
          btn.classList.remove('bg-white/10', 'ring-white/10', 'text-white');
          btn.classList.add('text-slate-400');
          btn.setAttribute('aria-selected', 'false');
        });

        button.classList.add('bg-white/10', 'text-white');
        button.classList.remove('text-slate-400');
        button.setAttribute('aria-selected', 'true');

        tabPanels.forEach(panel => {
          panel.classList.toggle('hidden', panel.dataset.tabPanel !== target);
        });
      });
    });

    // Add New dropdown
    const addNewBtn = document.getElementById('addNewBtn');
    const addNewMenu = document.getElementById('addNewMenu');
    if (addNewBtn) {
      addNewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addNewMenu.classList.toggle('hidden');
      });
      document.addEventListener('click', () => addNewMenu.classList.add('hidden'));
    }

    // Charts
    const axisStyle = {
      grid: {
        color: 'rgba(255,255,255,0.06)',
        drawBorder: false
      },
      ticks: {
        color: 'rgba(255,255,255,0.5)',
        font: { size: 11 }
      }
    };

    const baseOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(0,0,0,0.85)',
          padding: 12,
          cornerRadius: 8,
          titleColor: 'rgba(255,255,255,0.95)',
          bodyColor: 'rgba(255,255,255,0.75)',
          borderColor: 'rgba(255,255,255,0.12)',
          borderWidth: 1
        }
      },
      scales: { x: axisStyle, y: axisStyle }
    };

    // Pipeline Chart (Overview)
    const pipelineCtx = document.getElementById('pipelineChart').getContext('2d');
    new Chart(pipelineCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Leads',
            data: [62, 74, 69, 88, 93, 71, 95],
            borderColor: 'rgba(255,255,255,0.6)',
            backgroundColor: 'rgba(255,255,255,0.12)',
            borderWidth: 2,
            tension: 0.35,
            fill: true,
            pointRadius: 0
          },
          {
            label: 'Meetings',
            data: [12, 16, 14, 19, 22, 15, 24],
            borderColor: 'rgba(255,255,255,0.35)',
            backgroundColor: 'rgba(255,255,255,0.06)',
            borderWidth: 2,
            tension: 0.35,
            fill: true,
            pointRadius: 0
          }
        ]
      },
      options: baseOptions
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
      

<div className="fixed inset-0 -z-10 bg-gradient-to-b from-zinc-50 via-white to-white" style={{}}></div>
<div className="fixed inset-0 -z-10 opacity-40" style={{backgroundImage: 'radial-gradient(1200px 600px at 80% -10%, rgba(120,120,255,0.15), transparent 60%), radial-gradient(1000px 500px at 20% 110%, rgba(0,200,180,0.12), transparent 60%)'}}></div>
<div className="max-w-[1600px] mx-auto p-3 w-full">
<div className="rounded-3xl overflow-hidden ring-1 bg-zinc-50 ring-black/10" style={{}}>
<div className="grid grid-cols-12">

<aside className="col-span-12 md:col-span-3 xl:col-span-2 flex flex-col p-3 text-slate-800 bg-zinc-50" style={{}}>
<div className="rounded-2xl backdrop-blur flex-1 flex flex-col ring-1 bg-zinc-50/60 ring-black/10" style={{}}>
<div className="flex-1">

<div className="flex items-center justify-between gap-3 p-4 md:p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl flex items-center justify-center ring-1 bg-black/5 ring-black/10">
<svg className="lucide lucide-bot text-black" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="hidden md:block text-base font-semibold tracking-tight text-black">Ollie</span>
</div>
<button aria-label="Notifications" className="hidden md:flex items-center gap-2 text-xs transition text-black/70 hover:text-black">
<svg className="lucide lucide-bell" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>

<nav className="px-3 md:px-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl ring-1 bg-black/5 text-black ring-black/15" href="#">
<svg className="lucide lucide-house" data-lucide="house" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="hidden md:inline text-sm font-medium">Home</span>
<span className="ml-auto hidden md:inline text-[10px] px-2 py-0.5 rounded-md ring-1 bg-black/10 text-black ring-black/20">Live</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl ring-1 ring-transparent hover:bg-black/5 text-black/70 hover:text-black hover:ring-black/10" href="#">
<svg className="lucide lucide-inbox" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span className="hidden md:inline text-sm">Inbox</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl ring-1 ring-transparent hover:bg-black/5 text-black/70 hover:text-black hover:ring-black/10" href="#">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="hidden md:inline text-sm">Calendar</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl ring-1 ring-transparent hover:bg-black/5 text-black/70 hover:text-black hover:ring-black/10" href="#">
<svg className="lucide lucide-users" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="hidden md:inline text-sm">Leads</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl ring-1 ring-transparent hover:bg-black/5 text-black/70 hover:text-black hover:ring-black/10" href="#">
<svg className="lucide lucide-id-card" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg>
<span className="hidden md:inline text-sm">Clients</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5-white/70 ring-1 ring-transparent hover:text-black hover:ring-black/10" href="#">
<svg className="lucide lucide-megaphone" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
<span className="hidden md:inline text-sm">Campaigns</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl ring-1 ring-transparent hover:bg-black/5 text-black/70 hover:text-black hover:ring-black/10" href="#">
<svg className="lucide lucide-message-square" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="hidden md:inline text-sm">Ollie chat</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl ring-1 ring-transparent hover:bg-black/5 text-black/70 hover:text-black hover:ring-black/10" href="#">
<svg className="lucide lucide-kanban" data-lucide="kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3v14"></path><path d="M12 3v8"></path><path d="M19 3v18"></path></svg>
<span className="hidden md:inline text-sm">Project</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl ring-1 ring-transparent hover:bg-black/5 text-black/70 hover:text-black hover:ring-black/10" href="#">
<svg className="lucide lucide-check-square" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="hidden md:inline text-sm">Task</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl ring-1 ring-transparent hover:bg-black/5 text-black/70 hover:text-black hover:ring-black/10" href="#">
<svg className="lucide lucide-bar-chart-3" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="hidden md:inline text-sm">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl ring-1 ring-transparent hover:bg-black/5 text-black/70 hover:text-black hover:ring-black/10" href="#">
<svg className="lucide lucide-sliders-horizontal" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
<span className="hidden md:inline text-sm">Niche settings</span>
</a>
</nav>
</div>
<div className="border-t border-black/10"></div>

<div className="p-4 md:p-6">
<div className="flex items-center gap-3">
<img alt="Profile" className="h-9 w-9 rounded-full object-cover ring-2 ring-black/30" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=240&amp;auto=format&amp;fit=crop"/>
<div className="hidden md:flex flex-1 items-center justify-between">
<div>
<p className="text-sm font-medium text-black/90">Jamie Ortega</p>
<p className="text-xs text-black/60">Sales Lead</p>
</div>
</div>
</div>
<button className="hidden md:flex items-center gap-2 mt-4 text-xs transition text-black/60 hover:text-black">
<svg className="lucide lucide-log-out" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg> Log out
              </button>
</div>
</div>
</aside>

<main className="col-span-12 md:col-span-9 xl:col-span-10 bg-white">
<div className="p-3">
<div className="rounded-2xl backdrop-blur ring-1 bg-zinc-50/60 ring-black/10" style={{}}>

<div className="px-4 sm:px-6 pt-5 sm:pt-6 pb-4 sm:pb-6 border-b border-black/10">
<div className="flex flex-col gap-3 sm:gap-4">
<div className="flex items-center gap-3 justify-between">
<div className="text-sm text-slate-600" style={{}}>
                      Welcome back — <span className="font-medium text-black">4</span> leads need follow-up.
                      <a className="font-medium text-black hover:text-black/80" href="#">Review</a>
</div>
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center px-3 py-2 rounded-lg ring-1 bg-black/5 ring-black/10">
<svg className="lucide lucide-search text-slate-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="ml-2 bg-transparent outline-none text-sm placeholder:text-slate-500 w-48 text-black" placeholder="Search leads, clients, emails" style={{}}/>
</div>
<button aria-label="Notifications" className="inline-flex items-center justify-center h-9 w-9 rounded-lg ring-1 ring-black/10 hover:bg-black/5">
<svg className="lucide lucide-bell text-slate-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>

<div className="relative">
<button className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-lg transition ring-1 text-black bg-black/10 hover:bg-black/15 ring-black/10" id="addNewBtn">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-medium">Add new</span>
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute right-0 mt-2 w-56 rounded-xl ring-1 shadow-2xl hidden bg-zinc-100 ring-black/10" id="addNewMenu" style={{}}>
<div className="p-1">
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-black/5">
<svg className="lucide lucide-user-plus" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg> Add Lead
                            </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-black/5">
<svg className="lucide lucide-megaphone" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg> Add Campaign
                            </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-black/5">
<svg className="lucide lucide-calendar-plus" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg> New Event
                            </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-black/5">
<svg className="lucide lucide-square-plus" data-lucide="square-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg> New Task
                            </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-black/5">
<svg className="lucide lucide-scan-search" data-lucide="scan-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16-1.9-1.9"></path></svg> New Research
                            </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-black/5">
<svg className="lucide lucide-kanban" data-lucide="kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3v14"></path><path d="M12 3v8"></path><path d="M19 3v18"></path></svg> New Project
                            </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-black/5">
<svg className="lucide lucide-id-card" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg> New Client
                            </button>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-end justify-between">
<div className="">
<h1 className="text-2xl sm:text-3xl tracking-tight font-semibold text-black">Ollie Sales Dashboard</h1>
<p className="text-xs sm:text-sm text-slate-500" style={{}}>Team — Pipeline overview</p>
</div>
<button className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-slate-700" style={{}}>
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                      Last 30 days
                    </button>
</div>
</div>
</div>

<section className="px-4 sm:px-6 py-5 sm:py-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

<div className="rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full flex items-center justify-center ring-1 text-black bg-black/5 ring-black/10">
<svg className="lucide lucide-users" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</span>
<div className="">
<p className="text-[11px] uppercase tracking-wider text-slate-500" style={{}}>Leads generated</p>
<p className="text-lg font-semibold tracking-tight tabular-nums text-black">1,254</p>
</div>
</div>
<span className="text-xs inline-flex items-center gap-1 text-emerald-600" style={{}}>
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> 9%
                      </span>
</div>
</div>

<div className="rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full flex items-center justify-center ring-1 text-black bg-black/5 ring-black/10">
<svg className="lucide lucide-calendar-check-2" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
</span>
<div className="">
<p className="text-[11px] uppercase tracking-wider text-slate-500" style={{}}>Meetings booked</p>
<p className="text-lg font-semibold tracking-tight tabular-nums text-black">186</p>
</div>
</div>
<span className="text-xs inline-flex items-center gap-1 text-emerald-600" style={{}}>
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> 12%
                      </span>
</div>
</div>

<div className="rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full flex items-center justify-center ring-1 text-black bg-black/5 ring-black/10">
<svg className="lucide lucide-wallet" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</span>
<div>
<p className="text-[11px] uppercase tracking-wider text-slate-500" style={{}}>Pipeline value</p>
<p className="text-lg font-semibold tracking-tight tabular-nums text-black">$842k</p>
</div>
</div>
<span className="text-xs inline-flex items-center gap-1 text-rose-600">
<svg className="lucide lucide-arrow-down-right" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg> 2%
                      </span>
</div>
</div>

<div className="rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full flex items-center justify-center ring-1 text-black bg-black/5 ring-black/10">
<svg className="lucide lucide-target" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</span>
<div className="">
<p className="text-[11px] uppercase tracking-wider text-slate-500" style={{}}>Win rate</p>
<p className="text-lg font-semibold tracking-tight tabular-nums text-black">28.4%</p>
</div>
</div>
<span className="text-xs inline-flex items-center gap-1 text-emerald-600" style={{}}>
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> 1.1%
                      </span>
</div>
</div>
</div>
</section>

<div className="sm:px-6 pr-4 pl-4">
<div className="flex flex-wrap items-center gap-2 justify-between">

<div className="flex items-center gap-1 rounded-xl p-1 ring-1 overflow-x-auto w-full md:w-auto bg-black/5 ring-black/10">
<button aria-selected="true" className="tab-btn inline-flex items-center gap-2 h-9 px-3 rounded-lg text-sm font-medium ring-1 whitespace-nowrap text-black bg-black/10 ring-black/10" data-tab-target="overview" role="tab">
<svg className="lucide lucide-layout-dashboard" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span>Overview</span>
</button>
<button aria-selected="false" className="tab-btn inline-flex items-center gap-2 h-9 px-3 rounded-lg text-sm font-medium transition whitespace-nowrap text-slate-600 hover:text-black hover:bg-black/5" data-tab-target="calendar" role="tab" style={{}}>
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">Calendar</span>
</button>
<button aria-selected="false" className="tab-btn inline-flex items-center gap-2 h-9 px-3 rounded-lg text-sm font-medium transition whitespace-nowrap text-slate-600 hover:text-black hover:bg-black/5" data-tab-target="responses" role="tab" style={{}}>
<svg className="lucide lucide-inbox" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span className="">Responses needing attention</span>
</button>
<button aria-selected="false" className="tab-btn inline-flex items-center gap-2 h-9 px-3 rounded-lg text-sm font-medium transition whitespace-nowrap text-slate-600 hover:text-black hover:bg-black/5" data-tab-target="tasks" role="tab" style={{}}>
<svg className="lucide lucide-check-square" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="">Tasks</span>
</button>
<button aria-selected="false" className="tab-btn inline-flex items-center gap-2 h-9 px-3 rounded-lg text-sm font-medium transition whitespace-nowrap text-slate-600 hover:text-black hover:bg-black/5" data-tab-target="emails" role="tab" style={{}}>
<svg className="lucide lucide-mail" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="">Emails received</span>
</button>
<button aria-selected="false" className="tab-btn inline-flex items-center gap-2 h-9 px-3 rounded-lg text-sm font-medium transition whitespace-nowrap text-slate-600 hover:text-black hover:bg-black/5" data-tab-target="followups" role="tab" style={{}}>
<svg className="lucide lucide-clock-5" data-lucide="clock-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l2 4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="">Lead needing follow-up</span>
</button>
<button aria-selected="false" className="tab-btn inline-flex items-center gap-2 h-9 px-3 rounded-lg text-sm font-medium transition whitespace-nowrap text-slate-600 hover:text-black hover:bg-black/5" data-tab-target="pipeline" role="tab" style={{}}>
<svg className="lucide lucide-bar-chart-3" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span>Pipeline quicklook</span>
</button>
<button aria-selected="false" className="tab-btn inline-flex items-center gap-2 h-9 px-3 rounded-lg text-sm font-medium transition whitespace-nowrap text-slate-600 hover:text-black hover:bg-black/5" data-tab-target="events" role="tab" style={{}}>
<svg className="lucide lucide-calendar-days" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span className="">Calendar events</span>
</button>
</div>

<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg ring-1 ring-black/10 hover:bg-black/5 text-slate-700" style={{}}>
<svg className="lucide lucide-download" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="hidden sm:inline text-sm">Export</span>
</button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg ring-1 ring-black/10 hover:bg-black/5 text-slate-700" style={{}}>
<svg className="lucide lucide-share-2" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<span className="hidden sm:inline text-sm">Share</span>
</button>
</div>
</div>

<div className="mt-4 sm:mt-6">

<section aria-labelledby="overview" className="tab-panel grid grid-cols-12 gap-4 sm:gap-6" data-tab-panel="overview" role="tabpanel">

<div className="col-span-12 lg:col-span-8">
<div className="h-72 sm:h-80 rounded-2xl p-4 sm:p-5 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between mb-3">
<div>
<h3 className="text-sm font-semibold text-black">Pipeline performance</h3>
<p className="text-xs text-slate-500" style={{}}>Leads and meetings per week</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-slate-600" style={{}}><span className="h-2 w-2 rounded-full bg-black/60"></span> Leads</span>
<span className="inline-flex items-center gap-1 text-xs text-slate-600" style={{}}><span className="h-2 w-2 rounded-full bg-black/30"></span> Meetings</span>
</div>
</div>
<div className="relative h-[calc(100%-2.75rem)]">
<canvas className="absolute inset-0" height="236" id="pipelineChart" style={{display: 'block', boxSizing: 'border-box', height: '236px', width: '779.5px'}} width="779"></canvas>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4">
<div className="rounded-2xl p-4 sm:p-5 space-y-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-black">Hot leads</h3>
<span className="text-[11px] px-2 py-0.5 rounded-md ring-1 bg-emerald-600/10 text-emerald-600 ring-emerald-600/20" style={{}}>+6.2% WoW</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 rounded-xl ring-1 p-3 bg-black/5 ring-black/10">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<span className="text-black">Alex Johnson</span>
<span className="text-xs text-amber-700">MQL</span>
</div>
<p className="text-xs text-slate-500" style={{}}>Acme Co • Last touch 2h</p>
</div>
<button className="text-xs px-2 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Nudge</button>
</div>
<div className="flex items-center gap-3 rounded-xl ring-1 p-3 bg-black/5 ring-black/10">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<span className="text-black">Priya Singh</span>
<span className="text-xs text-emerald-700" style={{}}>SQL</span>
</div>
<p className="text-xs text-slate-500" style={{}}>Nimbus • Last touch 1d</p>
</div>
<button className="text-xs px-2 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Book</button>
</div>
<div className="flex items-center gap-3 rounded-xl ring-1 p-3 bg-black/5 ring-black/10">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<span className="text-black">Marco Rossi</span>
<span className="text-xs text-rose-700">Churn risk</span>
</div>
<p className="text-xs text-slate-500" style={{}}>Voltix • Last touch 3d</p>
</div>
<button className="text-xs px-2 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Recover</button>
</div>
</div>
</div>
</div>

<div className="col-span-12">
<div className="rounded-2xl overflow-hidden ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="px-4 sm:px-5 py-3 border-b flex items-center justify-between border-black/10">
<div className="">
<h3 className="text-sm font-semibold text-black">Recent interactions</h3>
<p className="text-xs text-slate-500" style={{}}>Latest 5 touchpoints across channels</p>
</div>
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-lg transition text-xs ring-1 bg-black/10 hover:bg-black/15 text-black ring-black/10">
                             View all
                          </button>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-black/5 text-slate-600" style={{}}>
<tr className="">
<th className="text-left font-medium px-4 sm:px-5 py-3">Lead</th>
<th className="text-left font-medium px-4 sm:px-5 py-3">Company</th>
<th className="text-left font-medium px-4 sm:px-5 py-3">Stage</th>
<th className="text-left font-medium px-4 sm:px-5 py-3">Owner</th>
<th className="text-right font-medium px-4 sm:px-5 py-3">Last touch</th>
</tr>
</thead>
<tbody className="divide-y divide-black/10">
<tr className="hover:bg-black/5">
<td className="px-4 sm:px-5 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium text-black">Alex Johnson</div>
<div className="text-xs text-slate-500" style={{}}>alex@acme.com</div>
</div>
</div>
</td>
<td className="px-4 sm:px-5 py-3 text-slate-700" style={{}}>Acme Co</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md ring-1 bg-emerald-500/10 text-emerald-600 ring-emerald-600/20" style={{}}>Qualified</span>
</td>
<td className="px-4 sm:px-5 py-3 text-slate-700" style={{}}>Jamie O.</td>
<td className="px-4 sm:px-5 py-3 text-right text-slate-600" style={{}}>2h ago</td>
</tr>
<tr className="hover:bg-black/5">
<td className="px-4 sm:px-5 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium text-black">Priya Singh</div>
<div className="text-xs text-slate-500" style={{}}>priya@nimbus.io</div>
</div>
</div>
</td>
<td className="px-4 sm:px-5 py-3 text-slate-700" style={{}}>Nimbus</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md ring-1 bg-cyan-500/10 text-cyan-600 ring-cyan-600/20" style={{}}>Meeting set</span>
</td>
<td className="px-4 sm:px-5 py-3 text-slate-700" style={{}}>Aria P.</td>
<td className="px-4 sm:px-5 py-3 text-right text-slate-600" style={{}}>Yesterday</td>
</tr>
<tr className="hover:bg-black/5">
<td className="px-4 sm:px-5 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium text-black">Marco Rossi</div>
<div className="text-xs text-slate-500" style={{}}>marco@voltix.ai</div>
</div>
</div>
</td>
<td className="px-4 sm:px-5 py-3 text-slate-700" style={{}}>Voltix</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md ring-1 bg-amber-500/10 text-amber-600 ring-amber-600/20">Negotiation</span>
</td>
<td className="px-4 sm:px-5 py-3 text-slate-700" style={{}}>Jamie O.</td>
<td className="px-4 sm:px-5 py-3 text-right text-slate-600" style={{}}>3d ago</td>
</tr>
<tr className="hover:bg-black/5">
<td className="px-4 sm:px-5 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium text-black">Chen Wei</div>
<div className="text-xs text-slate-500" style={{}}>chen@cirrus.dev</div>
</div>
</div>
</td>
<td className="px-4 sm:px-5 py-3 text-slate-700" style={{}}>Cirrus</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md ring-1 bg-rose-500/10 text-rose-600 ring-rose-600/20">Stalled</span>
</td>
<td className="px-4 sm:px-5 py-3 text-slate-700" style={{}}>Maya K.</td>
<td className="px-4 sm:px-5 py-3 text-right text-slate-600" style={{}}>5d ago</td>
</tr>
<tr className="hover:bg-black/5">
<td className="px-4 sm:px-5 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1546539782-6fc531453083?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium text-black">Sarah Lee</div>
<div className="text-xs text-slate-500" style={{}}>sarah@aurora.tech</div>
</div>
</div>
</td>
<td className="px-4 sm:px-5 py-3 text-slate-700" style={{}}>Aurora</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md ring-1 bg-emerald-500/10 text-emerald-600 ring-emerald-600/20" style={{}}>Closed Won</span>
</td>
<td className="px-4 sm:px-5 py-3 text-slate-700" style={{}}>Aria P.</td>
<td className="px-4 sm:px-5 py-3 text-right text-slate-600" style={{}}>1w ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section aria-labelledby="calendar" className="tab-panel hidden grid grid-cols-12 gap-4 sm:gap-6" data-tab-panel="calendar" role="tabpanel">
<div className="col-span-12 lg:col-span-8">
<div className="h-72 sm:h-80 rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold text-black">This week</h3>
<button className="text-xs px-3 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Create event</button>
</div>
<div className="grid grid-cols-7 gap-2 h-[calc(100%-2rem)]">
<div className="rounded-lg ring-1 p-2 bg-black/5 ring-black/10">
<p className="text-xs text-slate-500" style={{}}>Mon</p>
<div className="mt-2 space-y-2">
<div className="text-[11px] px-2 py-1 rounded-md bg-emerald-500/10 ring-1 text-emerald-700 ring-emerald-600/20" style={{}}>Demo — 10:00</div>
</div>
</div>
<div className="rounded-lg ring-1 p-2 bg-black/5 ring-black/10">
<p className="text-xs text-slate-500" style={{}}>Tue</p>
</div>
<div className="rounded-lg ring-1 p-2 bg-black/5 ring-black/10">
<p className="text-xs text-slate-500" style={{}}>Wed</p>
<div className="mt-2 space-y-2">
<div className="text-[11px] px-2 py-1 rounded-md bg-cyan-500/10 ring-1 text-cyan-700 ring-cyan-600/20" style={{}}>QBR — 14:30</div>
</div>
</div>
<div className="rounded-lg ring-1 p-2 bg-black/5 ring-black/10">
<p className="text-xs text-slate-500" style={{}}>Thu</p>
</div>
<div className="rounded-lg ring-1 p-2 bg-black/5 ring-black/10">
<p className="text-xs text-slate-500" style={{}}>Fri</p>
<div className="mt-2 space-y-2">
<div className="text-[11px] px-2 py-1 rounded-md bg-fuchsia-500/10 ring-1 text-fuchsia-700 ring-fuchsia-600/20">Roadmap — 11:45</div>
</div>
</div>
<div className="rounded-lg ring-1 p-2 bg-black/5 ring-black/10">
<p className="text-xs text-slate-500" style={{}}>Sat</p>
</div>
<div className="rounded-lg ring-1 p-2 bg-black/5 ring-black/10">
<p className="text-xs text-slate-500" style={{}}>Sun</p>
</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-4">
<div className="rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<h3 className="text-sm font-semibold mb-3 text-black">Upcoming</h3>
<div className="space-y-2">
<div className="flex items-center gap-3 p-3 rounded-xl ring-1 bg-black/5 ring-black/10">
<svg className="lucide lucide-video text-emerald-700" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<div className="flex-1">
<p className="text-sm text-black">Product demo with Acme</p>
<p className="text-xs text-slate-500" style={{}}>Mon, 10:00 — Jamie</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl ring-1 bg-black/5 ring-black/10">
<svg className="lucide lucide-users text-cyan-700" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="flex-1">
<p className="text-sm text-black">Weekly standup</p>
<p className="text-xs text-slate-500" style={{}}>Wed, 09:30 — Team</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl ring-1 bg-black/5 ring-black/10">
<svg className="lucide lucide-briefcase text-fuchsia-700" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<div className="flex-1">
<p className="text-sm text-black">Pricing review</p>
<p className="text-xs text-slate-500" style={{}}>Fri, 11:45 — Ops</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="responses" className="tab-panel hidden grid grid-cols-12 gap-4 sm:gap-6" data-tab-panel="responses" role="tabpanel">
<div className="col-span-12">
<div className="rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold text-black">Responses needing attention</h3>
<button className="text-xs px-3 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Assign</button>
</div>
<div className="divide-y divide-black/10">
<div className="flex items-start gap-3 py-3">
<svg className="lucide lucide-alert-circle mt-0.5 text-amber-700" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<div className="flex-1">
<p className="text-sm text-black">“Can we get SOC2 documentation?”</p>
<p className="text-xs text-slate-500" style={{}}>Priya Singh • 35m ago • nimbus.io</p>
</div>
<button className="text-xs px-2 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Reply</button>
</div>
<div className="flex items-start gap-3 py-3">
<svg className="lucide lucide-alert-octagon mt-0.5 text-rose-700" data-lucide="alert-octagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M12 8v4"></path><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"></path></svg>
<div className="flex-1">
<p className="text-sm text-black">“Trial expired — options?”</p>
<p className="text-xs text-slate-500" style={{}}>Marco Rossi • 1h ago • voltix.ai</p>
</div>
<button className="text-xs px-2 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Reply</button>
</div>
<div className="flex items-start gap-3 py-3">
<svg className="lucide lucide-alarm-clock mt-0.5 text-cyan-700" data-lucide="alarm-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path></svg>
<div className="flex-1">
<p className="text-sm text-black">“Reschedule Wednesday’s call”</p>
<p className="text-xs text-slate-500" style={{}}>Alex Johnson • 2h ago • acme.com</p>
</div>
<button className="text-xs px-2 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Reply</button>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="tasks" className="tab-panel hidden grid grid-cols-12 gap-4 sm:gap-6" data-tab-panel="tasks" role="tabpanel">
<div className="col-span-12 lg:col-span-6">
<div className="rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold text-black">My tasks</h3>
<button className="text-xs px-3 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">New task</button>
</div>
<div className="space-y-2">
<label className="flex items-center gap-3 p-3 rounded-xl ring-1 bg-black/5 ring-black/10">
<input className="h-4 w-4 rounded bg-transparent border-black/20 text-black" type="checkbox"/>
<div className="flex-1">
<p className="text-sm text-black">Send proposal to Nimbus</p>
<p className="text-xs text-slate-500" style={{}}>Due today • Owner: Jamie</p>
</div>
</label>
<label className="flex items-center gap-3 p-3 rounded-xl ring-1 bg-black/5 ring-black/10">
<input className="h-4 w-4 rounded bg-transparent border-black/20 text-black" type="checkbox"/>
<div className="flex-1">
<p className="text-sm text-black">Prep discovery questions</p>
<p className="text-xs text-slate-500" style={{}}>Due tomorrow • Owner: Aria</p>
</div>
</label>
<label className="flex items-center gap-3 p-3 rounded-xl ring-1 bg-black/5 ring-black/10">
<input className="h-4 w-4 rounded bg-transparent border-black/20 text-black" type="checkbox"/>
<div className="flex-1">
<p className="text-sm text-black">Update ICP notes</p>
<p className="text-xs text-slate-500" style={{}}>Due Fri • Owner: Maya</p>
</div>
</label>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-6">
<div className="rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<h3 className="text-sm font-semibold mb-3 text-black">This week progress</h3>
<div className="space-y-3">
<div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700" style={{}}>Outbound</span>
<span className="tabular-nums text-slate-600" style={{}}>62%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-black/5">
<div className="h-2 rounded-full bg-black/50" style={{width: '62%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700" style={{}}>Follow-ups</span>
<span className="tabular-nums text-slate-600" style={{}}>48%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-black/5">
<div className="h-2 rounded-full bg-black/30" style={{width: '48%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700" style={{}}>Demos</span>
<span className="tabular-nums text-slate-600" style={{}}>35%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-black/5">
<div className="h-2 rounded-full bg-black/20" style={{width: '35%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="emails" className="tab-panel hidden grid grid-cols-12 gap-4 sm:gap-6" data-tab-panel="emails" role="tabpanel">
<div className="col-span-12">
<div className="rounded-2xl ring-1 overflow-hidden bg-zinc-100/60 ring-black/10" style={{}}>
<div className="px-4 sm:px-5 py-3 border-b flex items-center justify-between border-black/10">
<div>
<h3 className="text-sm font-semibold text-black">Emails received</h3>
<p className="text-xs text-slate-500" style={{}}>People who sent you an email</p>
</div>
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-lg transition text-xs ring-1 bg-black/10 hover:bg-black/15 text-black ring-black/10">
                            View inbox
                          </button>
</div>
<div className="divide-y divide-black/10">
<div className="flex items-center gap-3 p-3 hover:bg-black/5">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm truncate text-black">Chen Wei • “Confirming agenda for Friday...”</p>
<p className="text-xs text-slate-500" style={{}}>cirrus.dev • 12:14</p>
</div>
<span className="text-[11px] px-2 py-0.5 rounded-md bg-cyan-500/10 ring-1 text-cyan-700 ring-cyan-600/20" style={{}}>New</span>
</div>
<div className="flex items-center gap-3 p-3 hover:bg-black/5">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm truncate text-black">Priya Singh • “Security checklist attached”</p>
<p className="text-xs text-slate-500" style={{}}>nimbus.io • 10:02</p>
</div>
<span className="text-[11px] px-2 py-0.5 rounded-md ring-1 bg-black/5 text-slate-700 ring-black/10" style={{}}>Read</span>
</div>
<div className="flex items-center gap-3 p-3 hover:bg-black/5">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm truncate text-black">Marco Rossi • “Trial extension request”</p>
<p className="text-xs text-slate-500" style={{}}>voltix.ai • Yesterday</p>
</div>
<span className="text-[11px] px-2 py-0.5 rounded-md bg-amber-500/10 ring-1 text-amber-700 ring-amber-600/20">Follow-up</span>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="followups" className="tab-panel hidden grid grid-cols-12 gap-4 sm:gap-6" data-tab-panel="followups" role="tabpanel">
<div className="col-span-12">
<div className="rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold text-black">Leads needing follow-up</h3>
<button className="text-xs px-3 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Batch nudge</button>
</div>
<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
<div className="p-3 rounded-xl ring-1 bg-black/5 ring-black/10">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm text-black">Alex Johnson • Acme</p>
<p className="text-xs text-slate-500" style={{}}>Last touch 3d • MQL</p>
</div>
<button className="text-xs px-2 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Ping</button>
</div>
</div>
<div className="p-3 rounded-xl ring-1 bg-black/5 ring-black/10">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm text-black">Chen Wei • Cirrus</p>
<p className="text-xs text-slate-500" style={{}}>Last touch 5d • SQL</p>
</div>
<button className="text-xs px-2 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Ping</button>
</div>
</div>
<div className="p-3 rounded-xl ring-1 bg-black/5 ring-black/10">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm text-black">Priya Singh • Nimbus</p>
<p className="text-xs text-slate-500" style={{}}>Last touch 2d • Eval</p>
</div>
<button className="text-xs px-2 py-1 rounded-lg ring-1 bg-black/10 hover:bg-black/15 ring-black/10">Ping</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="pipeline" className="tab-panel hidden grid grid-cols-12 gap-4 sm:gap-6" data-tab-panel="pipeline" role="tabpanel">
<div className="col-span-12 lg:col-span-6">
<div className="rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<h3 className="text-sm font-semibold mb-3 text-black">By stage</h3>
<div className="space-y-3">
<div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700" style={{}}>New</span>
<span className="tabular-nums text-slate-600" style={{}}>312</span>
</div>
<div className="mt-1 h-2 rounded-full bg-black/5">
<div className="h-2 rounded-full bg-black/50" style={{width: '60%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700" style={{}}>Qualified</span>
<span className="tabular-nums text-slate-600" style={{}}>208</span>
</div>
<div className="mt-1 h-2 rounded-full bg-black/5">
<div className="h-2 rounded-full bg-black/40" style={{width: '40%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700" style={{}}>Demo</span>
<span className="tabular-nums text-slate-600" style={{}}>126</span>
</div>
<div className="mt-1 h-2 rounded-full bg-black/5">
<div className="h-2 rounded-full bg-black/30" style={{width: '30%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700" style={{}}>Negotiation</span>
<span className="tabular-nums text-slate-600" style={{}}>64</span>
</div>
<div className="mt-1 h-2 rounded-full bg-black/5">
<div className="h-2 rounded-full bg-black/20" style={{width: '18%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700" style={{}}>Closed Won</span>
<span className="tabular-nums text-slate-600" style={{}}>38</span>
</div>
<div className="mt-1 h-2 rounded-full bg-black/5">
<div className="h-2 rounded-full bg-black/70" style={{width: '12%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-6">
<div className="rounded-2xl p-4 ring-1 bg-zinc-100/60 ring-black/10" style={{}}>
<h3 className="text-sm font-semibold mb-3 text-black">Top sources</h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-black/60"></span>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700" style={{}}>Inbound</span>
<span className="tabular-nums text-slate-600" style={{}}>48%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-black/5">
<div className="h-2 rounded-full bg-black/60" style={{width: '48%'}}></div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-black/40"></span>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700" style={{}}>Outbound</span>
<span className="tabular-nums text-slate-600" style={{}}>33%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-black/5">
<div className="h-2 rounded-full bg-black/40" style={{width: '33%'}}></div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-black/30"></span>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700" style={{}}>Partner</span>
<span className="tabular-nums text-slate-600" style={{}}>19%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-black/5">
<div className="h-2 rounded-full bg-black/30" style={{width: '19%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="events" className="tab-panel hidden grid grid-cols-12 gap-4 sm:gap-6" data-tab-panel="events" role="tabpanel">
<div className="col-span-12">
<div className="rounded-2xl ring-1 overflow-hidden bg-zinc-100/60 ring-black/10" style={{}}>
<div className="px-4 sm:px-5 py-3 border-b flex items-center justify-between border-black/10">
<div>
<h3 className="text-sm font-semibold text-black">Calendar events</h3>
<p className="text-xs text-slate-500" style={{}}>Meetings, demos, and reviews</p>
</div>
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-lg transition text-xs ring-1 bg-black/10 hover:bg-black/15 text-black ring-black/10">
<svg className="lucide lucide-calendar-plus" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
                            Add event
                          </button>
</div>
<div className="divide-y divide-black/10">
<div className="flex items-center gap-3 p-3">
<svg className="lucide lucide-video text-emerald-700" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<div className="flex-1">
<p className="text-sm text-black">Live demo — Aurora</p>
<p className="text-xs text-slate-500" style={{}}>Today • 3:00 PM • 45m</p>
</div>
<span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-500/10 ring-1 text-emerald-700 ring-emerald-600/20" style={{}}>Demo</span>
</div>
<div className="flex items-center gap-3 p-3">
<svg className="lucide lucide-users text-cyan-700" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="flex-1">
<p className="text-sm text-black">Stakeholder sync — Nimbus</p>
<p className="text-xs text-slate-500" style={{}}>Tomorrow • 9:30 AM • 30m</p>
</div>
<span className="text-[11px] px-2 py-0.5 rounded-md bg-cyan-500/10 ring-1 text-cyan-700 ring-cyan-600/20" style={{}}>Call</span>
</div>
<div className="flex items-center gap-3 p-3">
<svg className="lucide lucide-briefcase text-fuchsia-700" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<div className="flex-1">
<p className="text-sm text-black">Pricing review — Voltix</p>
<p className="text-xs text-slate-500" style={{}}>Fri • 11:45 AM • 60m</p>
</div>
<span className="text-[11px] px-2 py-0.5 rounded-md bg-fuchsia-500/10 ring-1 text-fuchsia-700 ring-fuchsia-600/20">Review</span>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>


    </>
  );
}
