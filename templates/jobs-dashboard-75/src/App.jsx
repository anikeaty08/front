import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        // View navigation
        const views = {
          dashboard: document.getElementById('view-dashboard'),
          jobs: document.getElementById('view-jobs'),
          projects: document.getElementById('view-projects'),
          proposals: document.getElementById('view-proposals'),
        };
        function showView(id) {
          Object.values(views).forEach(v => v.classList.add('hidden'));
          views[id]?.classList.remove('hidden');
          document.querySelectorAll('.nav-link').forEach(b => {
            if (b.dataset.nav === id) {
              b.classList.add('bg-gray-900/5','text-gray-900','font-semibold');
            } else {
              b.classList.remove('bg-gray-900/5','text-gray-900','font-semibold');
              b.classList.add('text-gray-700','font-medium');
            }
          });
          lucide.createIcons();
        }
        // Default view
        showView('jobs');

        document.querySelectorAll('[data-nav]').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.dataset.nav;
            showView(id);
            closeKbar();
          });
        });

        // Like buttons toggle
        document.querySelectorAll('.like-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const icon = btn.querySelector('svg');
            const isActive = btn.classList.toggle('text-rose-600');
            btn.classList.toggle('bg-rose-50', isActive);
            icon.setAttribute('fill', isActive ? 'currentColor' : 'none');
            icon.setAttribute('stroke', 'currentColor');
          });
        });

        // Apply toggle
        document.querySelectorAll('[data-apply]').forEach(btn => {
          btn.addEventListener('click', () => {
            const applied = btn.dataset.state === 'applied';
            if (!applied) {
              btn.dataset.state = 'applied';
              btn.classList.remove('bg-gray-900','hover:bg-gray-800','text-white');
              btn.classList.add('bg-violet-600','hover:bg-violet-500','text-white');
              btn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Applied';
            } else {
              btn.dataset.state = '';
              btn.classList.add('bg-gray-900','hover:bg-gray-800','text-white');
              btn.classList.remove('bg-violet-600','hover:bg-violet-500');
              btn.innerHTML = '<i data-lucide="plus" class="w-4 h-4"></i> Apply';
            }
            lucide.createIcons();
          });
        });

        // Details panel
        const panel = document.getElementById('detailsPanel');
        const openers = document.querySelectorAll('.open-panel');
        const closePanel = document.getElementById('closePanel');
        openers.forEach(b => b.addEventListener('click', () => panel.classList.remove('hidden')));
        closePanel.addEventListener('click', () => panel.classList.add('hidden'));
        panel.addEventListener('click', (e) => { if (e.target === panel) panel.classList.add('hidden'); });

        // Settings panel
        const settings = document.getElementById('settingsPanel');
        document.getElementById('openSettings').addEventListener('click', () => settings.classList.remove('hidden'));
        document.getElementById('closeSettings').addEventListener('click', () => settings.classList.add('hidden'));
        settings.addEventListener('click', (e) => { if (e.target === settings) settings.classList.add('hidden'); });

        // Custom radio buttons
        document.querySelectorAll('.radio-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const group = btn.parentElement;
            group.querySelectorAll('.radio-btn').forEach(b => {
              const i = b.querySelector('.indicator');
              i.className = 'indicator h-4 w-4 rounded-full border border-gray-300';
            });
            const indicator = btn.querySelector('.indicator');
            indicator.className = 'indicator h-4 w-4 rounded-full border-2 border-violet-600';
            indicator.innerHTML = '<span class="block h-2 w-2 rounded-full bg-violet-600 mx-auto mt-[2px]"></span>';
          });
        });

        // Chip buttons toggle
        document.querySelectorAll('.chip-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const active = btn.classList.toggle('bg-violet-50');
            btn.classList.toggle('border-violet-200', active);
            btn.classList.toggle('text-violet-700', active);
          });
        });

        // Toggle switches
        document.querySelectorAll('.toggle-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const track = btn.querySelector('.toggle-indicator');
            const knob = btn.querySelector('.knob');
            const isOn = track.classList.toggle('bg-emerald-500');
            if (isOn) {
              knob.style.left = 'calc(100% - 1.25rem)';
            } else {
              knob.style.left = '0.25rem';
            }
          });
        });

        // Command palette
        const kbar = document.getElementById('kbar');
        const input = document.getElementById('kbarInput');
        function openKbar() { kbar.classList.remove('hidden'); input.focus(); }
        function closeKbar() { kbar.classList.add('hidden'); }
        document.getElementById('openKbar').addEventListener('click', openKbar);
        document.addEventListener('keydown', (e) => {
          if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault(); openKbar();
          }
          if (e.key === 'Escape') closeKbar();
        });
        kbar.addEventListener('click', (e) => { if (e.target === kbar) closeKbar(); });

        // Charts
        const lineCtx = document.getElementById('lineChart');
        const doughCtx = document.getElementById('doughnutChart');

        new Chart(lineCtx, {
          type: 'line',
          data: {
            labels: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'],
            datasets: [
              {
                label: 'Applications',
                data: [5,7,6,9,12,10,14,13,16,17,18,20],
                borderColor: '#7c3aed',
                backgroundColor: 'rgba(124, 58, 237, 0.12)',
                fill: true,
                tension: 0.4,
                pointRadius: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#6b7280', font: { size: 11 } } },
              y: { grid: { color: '#f1f5f9' }, ticks: { color: '#6b7280', font: { size: 11 } } }
            }
          }
        });

        new Chart(doughCtx, {
          type: 'doughnut',
          data: {
            labels: ['Mobile','Web','AI','Design'],
            datasets: [{
              data: [35, 30, 25, 10],
              backgroundColor: ['#6366f1','#7c3aed','#06b6d4','#f59e0b'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, color: '#374151' } } }
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen grid grid-cols-1 lg:grid-cols-[280px_1fr_340px]">

<aside className="hidden lg:flex flex-col bg-white/70 border-gray-200 border-r backdrop-blur-sm">
<div className="px-5 py-4 flex items-center gap-2">
<div className="xl:bg-gradient-to-r xl:from-slate-900 xl:to-slate-700 bg-gradient-to-tr from-indigo-500 via-violet-500 to-sky-500 w-9 h-9 rounded-xl shadow-sm"></div>
<div className="font-semibold tracking-tight text-xl">WorkHub</div>
</div>
<div className="px-5 pt-2 pb-5">
<div className="flex items-center gap-3 p-3 rounded-2xl border shadow-sm border-gray-200 bg-white">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-sm font-medium">Ognjen</div>
<div className="text-xs text-gray-500 flex items-center gap-1">
<span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 border bg-emerald-50 text-emerald-600 border-emerald-100 xl:text-[#0063F8] xl:bg-[#0063F8]/50">Pro</span>
<span className="">• 0 Projects</span>
</div>
</div>
<button className="p-2 rounded-xl hover:bg-gray-100" title="Profile">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</div>
</div>
<nav className="px-3 space-y-1 text-sm">
<button className="nav-link w-full flex items-center gap-3 px-3 py-2 rounded-xl font-medium hover:bg-gray-100 text-gray-300 text-gray-700" data-nav="dashboard">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span>Dashboard</span>
</button>
<button className="nav-link w-full flex items-center gap-3 px-3 py-2 rounded-xl font-semibold bg-gray-100/5 text-gray-100 bg-gray-900/5 text-gray-900" data-nav="jobs">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span>Jobs</span>
</button>
<button className="nav-link w-full flex items-center gap-3 px-3 py-2 rounded-xl font-medium hover:bg-gray-100 text-gray-300 text-gray-700" data-nav="projects">
<svg className="lucide lucide-kanban w-4 h-4" data-lucide="kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3v14"></path><path d="M12 3v8"></path><path d="M19 3v18"></path></svg>
<span>Projects</span>
</button>
<button className="nav-link w-full flex items-center gap-3 px-3 py-2 rounded-xl font-medium hover:bg-gray-100 text-gray-300 text-gray-700" data-nav="proposals">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="">Proposals</span>
</button>
</nav>
<div className="mt-auto px-5 py-6 space-y-3">
<div className="p-4 rounded-2xl border bg-gradient-to-br border-gray-200 from-gray-50 to-white">
<div className="flex items-center gap-3">
<svg className="lucide lucide-sparkles w-4 h-4 text-violet-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<div className="text-sm font-medium">Upgrade</div>
</div>
<p className="text-xs text-gray-500 mt-2">Get AI match, instant apply, and analytics.</p>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium active:scale-[.99] transition text-white hover:bg-[#0063F8] bg-[#0063F8]">
              Upgrade Pro
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm hover:bg-gray-100 text-gray-700">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>Settings</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm hover:bg-gray-100 text-gray-700">
<i className="w-4 h-4" data-lucide="lifebuoy"></i>
<span>Help Center</span>
</button>
</div>
</aside>

<main className="flex flex-col">

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b bg-white/70 border-gray-200">
<div className="lg:px-6 flex pt-3 pr-4 pb-3 pl-4 gap-x-3 gap-y-3 items-center">

<button className="lg:hidden p-2 rounded-xl hover:bg-gray-100" id="openSidebar">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<div className="relative flex-1 max-w-2xl">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-9 pr-24 py-2.5 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 text-sm border-gray-200 bg-white" id="globalSearch" placeholder="Search jobs..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-lg border text-xs text-gray-500 inline-flex items-center gap-1 border-gray-200 hover:bg-gray-50" id="openKbar">
<svg className="lucide lucide-command w-3.5 h-3.5" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg> K
              </button>
</div>
<div className="flex items-center gap-1.5">
<button className="p-2 rounded-xl hover:bg-gray-100" title="Notifications">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="p-2 rounded-xl hover:bg-gray-100" id="openSettings" title="Settings">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<img alt="user" className="h-8 w-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</header>

<section className="hidden px-4 lg:px-6 py-6 space-y-6" id="view-dashboard">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Overview</h1>
<p className="text-sm text-gray-500 mt-1">Key metrics across your workspace</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="rounded-2xl border p-4 shadow-sm border-gray-200 bg-white">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-500">Open Jobs</div>
<svg className="lucide lucide-briefcase w-4 h-4 text-violet-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">128</div>
<div className="mt-1 text-xs text-emerald-600">+8% this week</div>
</div>
<div className="rounded-2xl border p-4 shadow-sm border-gray-200 bg-white">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-500">Applied</div>
<svg className="lucide lucide-send w-4 h-4 text-sky-600" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">34</div>
<div className="mt-1 text-xs text-emerald-600">+2 this week</div>
</div>
<div className="rounded-2xl border p-4 shadow-sm border-gray-200 bg-white">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-500">Interviews</div>
<svg className="lucide lucide-calendar w-4 h-4 text-indigo-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">6</div>
<div className="mt-1 text-xs text-gray-500">2 upcoming</div>
</div>
<div className="rounded-2xl border p-4 shadow-sm border-gray-200 bg-white">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-500">Hires</div>
<svg className="lucide lucide-trophy w-4 h-4 text-amber-600" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">3</div>
<div className="mt-1 text-xs text-emerald-600">+1 this month</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
<div className="xl:col-span-2 rounded-2xl border p-4 shadow-sm border-gray-200 bg-white">
<div className="flex items-start justify-between">
<div>
<h3 className="font-medium tracking-tight">Applications Trend</h3>
<p className="text-xs text-gray-500">Last 12 weeks</p>
</div>
<button className="text-xs px-2 py-1 rounded-lg border border-gray-200 hover:bg-gray-50">Download</button>
</div>
<div className="mt-3">
<div className="h-64 rounded-xl bg-gradient-to-b p-2 from-violet-50 to-white">
<div className="h-full">
<canvas height="0" id="lineChart" style={{display: 'block', boxSizing: 'border-box', height: '0px', width: '0px'}} width="0"></canvas>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border p-4 shadow-sm border-gray-200 bg-white">
<h3 className="font-medium tracking-tight">Top Categories</h3>
<p className="text-xs text-gray-500">Share of applied roles</p>
<div className="mt-3">
<div className="h-64 rounded-xl bg-gradient-to-b p-2 from-sky-50 to-white">
<div className="h-full">
<canvas height="0" id="doughnutChart" style={{display: 'block', boxSizing: 'border-box', height: '0px', width: '0px'}} width="0"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border shadow-sm overflow-hidden border-gray-200 bg-white">
<div className="px-4 py-3 flex items-center justify-between">
<div>
<h3 className="font-medium tracking-tight">Recent Proposals</h3>
<p className="text-xs text-gray-500">Last updated today</p>
</div>
<button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border text-sm border-gray-200 hover:bg-gray-50">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> New
              </button>
</div>
<div className="divide-y divide-gray-100">
<div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs text-gray-500">
<div className="col-span-6">Title</div>
<div className="col-span-2">Status</div>
<div className="col-span-2">Budget</div>
<div className="col-span-2 text-right">Actions</div>
</div>
<div className="divide-y text-sm divide-gray-100">
<div className="grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-gray-50/60">
<div className="col-span-6 font-medium">CRM Revamp for Fintech</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs bg-amber-50 text-amber-700 border-amber-100" style={{}}>Pending</span>
</div>
<div className="col-span-2">$3,000</div>
<div className="col-span-2 text-right">
<button className="px-2 py-1 rounded-lg hover:bg-gray-100">View</button>
</div>
</div>
<div className="grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-gray-50/60">
<div className="col-span-6 font-medium">AI Chatbot for Support</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs bg-emerald-50 text-emerald-700 border-emerald-100">Accepted</span>
</div>
<div className="col-span-2">$8,000</div>
<div className="col-span-2 text-right">
<button className="px-2 py-1 rounded-lg hover:bg-gray-100">View</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 lg:px-6 py-6 space-y-5" id="view-jobs">
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-2 text-gray-700">
<svg className="lucide lucide-briefcase w-5 h-5 text-violet-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Jobs</h1>
</div>
<p className="text-sm text-gray-500 mt-1">Discover job deal opportunities.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm border-gray-200 hover:bg-gray-50">
<svg className="lucide lucide-inbox w-4 h-4" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg> All Jobs
              </button>
<button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white hover:bg-[#0063F8] bg-[#0063F8]">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> Favorites
              </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

<article className="rounded-2xl border shadow-sm p-4 border-gray-200 bg-white">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full flex items-center justify-center font-medium bg-indigo-100 text-indigo-700" style={{}}>A</div>
<div>
<div className="text-sm font-medium">Albert BOLD</div>
<div className="text-xs text-gray-500">4mo ago</div>
</div>
</div>
<button aria-label="Favorite" className="like-btn p-2 rounded-xl hover:bg-gray-100">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight">BOLD App</h3>
<div className="mt-1 text-xs text-gray-500 inline-flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Los Mochis, Sinaloa, Mexico
              </div>
<p className="mt-3 text-sm line-clamp-3 text-gray-600">An app for training and engagement with messaging integrations and automation.</p>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-gray-50 border-gray-200 text-gray-700">
<svg className="lucide lucide-shield w-3.5 h-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Payment Unverified
                </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-emerald-50 border-emerald-100 text-emerald-700">Small Project</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-sky-50 border-sky-100 text-sky-700">Budget: $500</span>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="text-xs inline-flex px-2 py-0.5 rounded-full border bg-gray-100 text-gray-700 border-gray-200">Adaptable</span>
<span className="text-xs inline-flex px-2 py-0.5 rounded-full border bg-gray-100 text-gray-700 border-gray-200">Proactive</span>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="open-panel flex-1 inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm border-gray-200 hover:bg-gray-50" data-panel="details">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> More Info
                </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm active:scale-[.99] transition text-white hover:bg-[#0063F8] bg-[#0063F8]" data-apply="">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Apply
                </button>
</div>
</article>

<article className="rounded-2xl border shadow-sm p-4 border-gray-200 bg-white">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Up Nomada</div>
<div className="text-xs text-gray-500">4mo ago</div>
</div>
</div>
<button className="like-btn p-2 rounded-xl hover:bg-gray-100">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight">Platform To Sell Dig</h3>
<div className="mt-1 text-xs text-gray-500 inline-flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Mexico City, Mexico
              </div>
<p className="mt-3 text-sm line-clamp-3 text-gray-600">A platform for creators to sell digital goods and build communities.</p>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-gray-50 border-gray-200 text-gray-700">
<svg className="lucide lucide-shield w-3.5 h-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Payment Unverified
                </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-emerald-50 border-emerald-100 text-emerald-700">Small Project</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-sky-50 border-sky-100 text-sky-700">Budget: $500</span>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="text-xs inline-flex px-2 py-0.5 rounded-full border bg-gray-100 text-gray-700 border-gray-200">Reliable</span>
<span className="text-xs inline-flex px-2 py-0.5 rounded-full border bg-gray-100 text-gray-700 border-gray-200">Creative</span>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="open-panel flex-1 inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm border-gray-200 hover:bg-gray-50" data-panel="details">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> More Info
                </button>
<button className="flex-1 inline-flex active:scale-[.99] transition hover:bg-[#0063F8] text-sm rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center justify-center" data-apply="" data-state="applied"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Applied</button>
</div>
</article>

<article className="rounded-2xl border shadow-sm p-4 border-gray-200 bg-white">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Fran Bevanda</div>
<div className="text-xs text-gray-500">4mo ago</div>
</div>
</div>
<button className="like-btn p-2 rounded-xl hover:bg-gray-100">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight">AI Dog Training App</h3>
<div className="mt-1 text-xs text-gray-500 inline-flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Zagreb, Croatia
              </div>
<p className="mt-3 text-sm line-clamp-3 text-gray-600">Mobile app leveraging AI for personalized dog training programs.</p>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-emerald-50 border-emerald-100 text-emerald-700">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Payment Verified
                </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-emerald-50 border-emerald-100 text-emerald-700">Small Project</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-sky-50 border-sky-100 text-sky-700">Budget: $2,000</span>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="text-xs inline-flex px-2 py-0.5 rounded-full border bg-gray-100 text-gray-700 border-gray-200">Reliable</span>
<span className="text-xs inline-flex px-2 py-0.5 rounded-full border bg-gray-100 text-gray-700 border-gray-200">Creative</span>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="open-panel flex-1 inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm border-gray-200 hover:bg-gray-50" data-panel="details">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> More Info
                </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm active:scale-[.99] transition text-white hover:bg-[#0063F8] bg-[#0063F8]" data-apply="">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Apply
                </button>
</div>
</article>
</div>

<div className="flex items-center justify-between border-t pt-4 border-gray-200">
<div className="text-sm text-gray-500">Showing 1–9 of 128</div>
<div className="flex items-center gap-1">
<button className="px-3 py-2 rounded-xl border text-sm border-gray-200 hover:bg-gray-50">Prev</button>
<button className="px-3 py-2 rounded-xl text-sm text-white hover:bg-[#0063F8] bg-[#0063F8]">1</button>
<button className="px-3 py-2 rounded-xl border text-sm border-gray-200 hover:bg-gray-50">2</button>
<button className="px-3 py-2 rounded-xl border text-sm border-gray-200 hover:bg-gray-50">3</button>
<button className="px-3 py-2 rounded-xl border text-sm border-gray-200 hover:bg-gray-50">Next</button>
</div>
</div>
</section>

<section className="hidden px-4 lg:px-6 py-6 space-y-5" id="view-projects">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h1>
<div className="rounded-2xl border p-6 text-sm shadow-sm border-gray-200 bg-white text-gray-600">
            Keep your ongoing projects organized. Create boards, track milestones, and manage deliverables.
          </div>
</section>

<section className="hidden px-4 lg:px-6 py-6 space-y-5" id="view-proposals">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Proposals</h1>
<div className="rounded-2xl border p-6 text-sm shadow-sm border-gray-200 bg-white text-gray-600">
            Draft, send, and track proposals with version history and quick templates.
          </div>
</section>
</main>

<aside className="hidden xl:block border-l backdrop-blur-sm border-gray-200 bg-white/70">
<div className="px-5 py-4 flex items-center justify-between">
<div className="font-medium tracking-tight">Filters</div>
<button className="text-sm text-gray-500">Reset</button>
</div>
<div className="px-5 pb-6 space-y-6 text-sm">

<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="text-xs uppercase tracking-wide text-gray-500">Sort</div>
<button className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-gray-200 hover:bg-gray-50">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Newest
              </button>
</div>
</div>

<div className="">
<div className="text-xs uppercase tracking-wide text-gray-500 mb-3">Category</div>
<div className="grid grid-cols-2 gap-2">
<button className="chip-btn inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50">Mobile</button>
<button className="chip-btn inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50">Web</button>
<button className="chip-btn inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50">AI</button>
<button className="chip-btn inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50">Design</button>
</div>
</div>

<div className="">
<div className="text-xs uppercase tracking-wide text-gray-500 mb-3">Job Size</div>
<div className="space-y-2">
<button className="radio-btn w-full flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>Any Job Type</span>
<span className="indicator h-4 w-4 rounded-full border border-gray-300"></span>
</button>
<button className="radio-btn w-full flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>Small Project</span>
<span className="indicator h-4 w-4 rounded-full border border-gray-300"></span>
</button>
<button className="radio-btn w-full flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>Medium Project</span>
<span className="indicator h-4 w-4 rounded-full border border-gray-300"></span>
</button>
<button className="radio-btn w-full flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>Big Project</span>
<span className="indicator h-4 w-4 rounded-full border border-gray-300"></span>
</button>
</div>
</div>

<div>
<div className="text-xs uppercase tracking-wide text-gray-500 mb-3">Experience Level</div>
<div className="space-y-2">
<button className="radio-btn w-full flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>Any Experience Level</span>
<span className="indicator h-4 w-4 rounded-full border border-gray-300"></span>
</button>
<button className="radio-btn w-full flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>Experienced</span>
<span className="indicator h-4 w-4 rounded-full border border-gray-300"></span>
</button>
<button className="radio-btn w-full flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>Intermediate</span>
<span className="indicator h-4 w-4 rounded-full border border-gray-300"></span>
</button>
<button className="radio-btn w-full flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>Expert</span>
<span className="indicator h-4 w-4 rounded-full border border-gray-300"></span>
</button>
</div>
</div>

<div>
<div className="text-xs uppercase tracking-wide text-gray-500 mb-3">Budget</div>
<div className="grid grid-cols-1 gap-2">
<button className="chip-btn inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>Any Budget</span> <span className="text-gray-400">$</span>
</button>
<button className="chip-btn inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>$500–$1,000</span>
<span className="text-gray-400">$</span>
</button>
<button className="chip-btn inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>$1,000–$5,000</span>
<span className="text-gray-400">$$</span>
</button>
<button className="chip-btn inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>$5,000–$10,000</span>
<span className="text-gray-400">$$$</span>
</button>
</div>
</div>
<div className="pt-2">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm text-white hover:bg-[#0063F8] bg-[#0063F8]">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg> Apply Filters
            </button>
</div>
</div>
</aside>
</div>

<div className="fixed inset-0 z-40 hidden" id="detailsPanel">
<div className="absolute inset-0 bg-gray-900/30"></div>
<div className="absolute right-0 top-0 h-full w-full sm:w-[480px] shadow-2xl rounded-none sm:rounded-l-2xl overflow-hidden flex flex-col bg-white">
<div className="px-5 py-4 border-b flex items-center justify-between border-gray-200">
<div className="font-medium tracking-tight">Job Details</div>
<button className="p-2 rounded-xl hover:bg-gray-100" id="closePanel">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-5 space-y-4 overflow-y-auto">
<div className="flex items-center gap-3">
<img alt="cover" className="h-12 w-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-lg font-semibold tracking-tight">BOLD App</div>
<div className="text-xs text-gray-500 flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-emerald-50 border-emerald-100 text-emerald-700">Small Project</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-sky-50 border-sky-100 text-sky-700">Budget: $500</span>
</div>
</div>
</div>
<div className="rounded-2xl border p-4 border-gray-200">
<div className="text-sm font-medium">Overview</div>
<p className="text-sm mt-2 text-gray-600">We’re seeking a developer to build a messaging-integrated app with modular architecture, analytics, and secure authentication.</p>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-2xl border p-3 border-gray-200">
<div className="text-xs text-gray-500">Location</div>
<div className="text-sm font-medium mt-1">Mexico</div>
</div>
<div className="rounded-2xl border p-3 border-gray-200">
<div className="text-xs text-gray-500">Payment</div>
<div className="text-sm font-medium mt-1">Unverified</div>
</div>
</div>
<div className="flex gap-2">
<span className="text-xs inline-flex px-2 py-0.5 rounded-full border bg-gray-100 text-gray-700 border-gray-200">React Native</span>
<span className="text-xs inline-flex px-2 py-0.5 rounded-full border bg-gray-100 text-gray-700 border-gray-200">API</span>
<span className="text-xs inline-flex px-2 py-0.5 rounded-full border bg-gray-100 text-gray-700 border-gray-200">Auth</span>
</div>
<div className="flex items-center gap-2 pt-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm border-gray-200 hover:bg-gray-50">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg> Save
            </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm text-white hover:bg-[#0063F8] bg-[#0063F8]">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Apply Now
            </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="settingsPanel">
<div className="absolute inset-0 bg-gray-900/30"></div>
<div className="absolute right-0 top-0 h-full w-full sm:w-[440px] shadow-2xl rounded-none sm:rounded-l-2xl overflow-hidden flex flex-col bg-white">
<div className="px-5 py-4 border-b flex items-center justify-between border-gray-200">
<div className="font-medium tracking-tight">Settings</div>
<button className="p-2 rounded-xl hover:bg-gray-100" id="closeSettings">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-5 space-y-4 overflow-y-auto text-sm">
<div className="rounded-2xl border p-4 border-gray-200">
<div className="text-sm font-medium">Profile</div>
<div className="mt-3 space-y-3">
<label className="block">
<span className="text-xs text-gray-500">Full Name</span>
<input className="mt-1 w-full px-3 py-2 rounded-xl border focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 border-gray-200" type="text" value="Ognjen"/>
</label>
<label className="block">
<span className="text-xs text-gray-500">Email</span>
<input className="mt-1 w-full px-3 py-2 rounded-xl border focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 border-gray-200" type="email" value="ognjen@example.com"/>
</label>
</div>
</div>
<div className="rounded-2xl border p-4 border-gray-200">
<div className="text-sm font-medium">Notifications</div>
<div className="mt-3 space-y-2">
<button className="toggle-btn w-full flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>Job recommendations</span>
<span className="toggle-indicator inline-flex items-center w-10 h-6 rounded-full relative bg-gray-200">
<span className="knob absolute left-1 top-1 h-4 w-4 rounded-full shadow bg-white"></span>
</span>
</button>
<button className="toggle-btn w-full flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
<span>Weekly digest</span>
<span className="toggle-indicator inline-flex items-center w-10 h-6 rounded-full relative bg-gray-200">
<span className="knob absolute left-1 top-1 h-4 w-4 rounded-full shadow bg-white"></span>
</span>
</button>
</div>
</div>
<div className="flex items-center justify-end gap-2">
<button className="px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">Cancel</button>
<button className="px-3 py-2 rounded-xl text-white hover:bg-[#0063F8] bg-[#0063F8]">Save Changes</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="kbar">
<div className="absolute inset-0 bg-gray-900/30"></div>
<div className="absolute left-1/2 top-24 -translate-x-1/2 w-[92%] max-w-xl rounded-2xl border shadow-2xl overflow-hidden border-gray-200 bg-white">
<div className="px-4 py-3 flex items-center gap-2">
<svg className="lucide lucide-search w-4 h-4 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="flex-1 outline-none text-sm" id="kbarInput" placeholder="Type a command or search…"/>
<span className="text-xs px-1.5 py-0.5 rounded border text-gray-400 border-gray-200">esc</span>
</div>
<div className="border-t border-gray-100">
<button className="kbar-item w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50" data-nav="dashboard">
<div className="flex items-center gap-2">
<svg className="lucide lucide-layout-dashboard w-4 h-4 text-violet-600" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg> Dashboard
            </div>
<span className="text-xs text-gray-400">Go</span>
</button>
<button className="kbar-item w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50" data-nav="jobs">
<div className="flex items-center gap-2">
<svg className="lucide lucide-briefcase w-4 h-4 text-violet-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> Jobs
            </div>
<span className="text-xs text-gray-400">Go</span>
</button>
</div>
</div>
</div>


    </>
  );
}
