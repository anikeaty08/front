import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
800: '#1e40af', 900: '#1e3a8a',
},
slate: {
25: '#fcfcfd', 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0',
300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569',
700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617',
}
},
fontFamily: { sans: ['Inter', 'sans-serif'] },
fontSize: { 'xxs': '0.65rem' },
boxShadow: {
'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
'float': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
'glow': '0 0 15px rgba(59, 130, 246, 0.3)',
}
}
}
}



        function switchTab(tabId) {
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('active');
                if(el.dataset.target === tabId) {
                    el.classList.add('active');
                }
            });

            document.querySelectorAll('.view-section').forEach(el => {
                if(el.id === tabId) {
                    el.classList.remove('hidden');
                    el.classList.remove('animate-enter');
                    void el.offsetWidth; 
                    el.classList.add('animate-enter');
                } else {
                    el.classList.add('hidden');
                }
            });

            const titles = {
                'dashboard': 'Dashboard',
                'infrastructure': 'PDU-R07-A12',
                'livestream': 'Live Stream',
                'alerts': 'Events'
            };
            
            const titleEl = document.getElementById('pageTitle');
            const badgeEl = document.getElementById('pageBadge');
            const subEl = document.getElementById('pageSubtitle');
            
            titleEl.innerText = titles[tabId];

            if(tabId === 'infrastructure') {
                badgeEl.classList.remove('hidden');
                subEl.classList.remove('hidden');
            } else {
                badgeEl.classList.add('hidden');
                subEl.classList.add('hidden');
            }

            const backBtn = document.getElementById('backButton');
            if (tabId === 'infrastructure') {
                backBtn.classList.remove('hidden');
            } else {
                backBtn.classList.add('hidden');
            }
            
            // Logic to toggle menu visibility vs connection status
            const menuWrapper = document.getElementById('menuWrapper');
            const statusEl = document.getElementById('connectionStatus');

            if (tabId === 'infrastructure') {
                menuWrapper.classList.remove('hidden');
                statusEl.classList.add('hidden');
            } else {
                menuWrapper.classList.add('hidden');
                statusEl.classList.remove('hidden');
            }

            document.getElementById('contentArea').scrollTop = 0;
        }

        function toggleTheme() {
            const html = document.documentElement;
            const isDark = html.classList.contains('dark');
            
            const sunIcon = document.getElementById('icon-sun');
            const moonIcon = document.getElementById('icon-moon');

            if (isDark) {
                // Currently Dark -> Go Light
                html.classList.remove('dark');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            } else {
                // Currently Light -> Go Dark
                html.classList.add('dark');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            }

            const btn = document.getElementById('themeToggle');
            btn.classList.add('scale-90');
            setTimeout(() => btn.classList.remove('scale-90'), 150);
        }

        // Initialize Icons
        (function initThemeIcons() {
            const html = document.documentElement;
            const sunIcon = document.getElementById('icon-sun');
            const moonIcon = document.getElementById('icon-moon');

            if (html.classList.contains('dark')) {
                moonIcon.classList.remove('hidden');
            } else {
                sunIcon.classList.remove('hidden');
            }
        })();

        const menuBtn = document.getElementById('menuBtn');
        const dropdown = document.getElementById('dropdownMenu');
        let isOpen = false;

        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isOpen = !isOpen;
            if(isOpen) {
                dropdown.classList.remove('opacity-0', 'invisible', 'scale-95');
                dropdown.classList.add('opacity-100', 'visible', 'scale-100');
            } else {
                dropdown.classList.add('opacity-0', 'invisible', 'scale-95');
                dropdown.classList.remove('opacity-100', 'visible', 'scale-100');
            }
        });

        document.addEventListener('click', (e) => {
            if(isOpen && !dropdown.contains(e.target)) {
                isOpen = false;
                dropdown.classList.add('opacity-0', 'invisible', 'scale-95');
                dropdown.classList.remove('opacity-100', 'visible', 'scale-100');
            }
        });

        function showToast(message, type = 'default') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            let icon = 'solar:info-circle-linear';
            let colorClass = 'text-slate-600 dark:text-slate-200 bg-white dark:bg-slate-800';
            let iconColor = 'text-brand-500';
            
            if (type === 'error') {
                icon = 'solar:danger-circle-linear';
                colorClass = 'text-rose-600 dark:text-rose-200 bg-white dark:bg-slate-800';
                iconColor = 'text-rose-500';
            }

            toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-float ${colorClass} min-w-[300px] transform transition-all duration-300 translate-y-10 opacity-0 border border-slate-100 dark:border-slate-700`;
            toast.innerHTML = `
                <iconify-icon icon="${icon}" width="20" height="20" class="${iconColor}"></iconify-icon>
                <span class="text-xs font-medium flex-1">${message}</span>
            `;

            container.appendChild(toast);
            requestAnimationFrame(() => {
                toast.classList.remove('translate-y-10', 'opacity-0');
            });
            setTimeout(() => {
                toast.classList.add('translate-y-4', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        function confirmReset() {
            if(confirm('Are you sure you want to reset the breakers? Power output will be interrupted.')) {
                showToast('Initiating breaker reset sequence...', 'error');
            }
        }

        function createCalendarEvent() {
            // Mock .ics file creation
            const eventDetails = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//PDU Monitor//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${Date.now()}@pdumonitor.local
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${new Date(Date.now() + 3600000).toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${new Date(Date.now() + 7200000).toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Maintenance: PDU-R07-A12
DESCRIPTION:Scheduled maintenance for Eaton PDU G3.
LOCATION:DC1-R07-U12-14
END:VEVENT
END:VCALENDAR`;

            const blob = new Blob([eventDetails], { type: 'text/calendar' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'maintenance_schedule.ics';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            showToast('Opening calendar...');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0"></div>

<div className="fixed inset-0 bg-grid-blue pointer-events-none z-0 animate-wave"></div>

<div className="fixed inset-0 bg-grid-blue pointer-events-none z-0 animate-wave-delay"></div>

<aside className="w-16 bg-white/70 dark:bg-slate-900/60 flex flex-col items-center py-6 z-20 flex-shrink-0 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-800/50">
<div className="mb-10">
<button className="flex hover:scale-105 transition-transform duration-300 text-white bg-brand-500 w-9 h-9 rounded-full items-center justify-center shadow-lg shadow-brand-500/30">
<iconify-icon height="20" icon="solar:bolt-circle-bold" width="20"></iconify-icon>
</button>
</div>
<nav className="flex-1 flex flex-col gap-3 w-full px-2">

<div className="nav-item group relative flex justify-center w-full" data-target="dashboard">
<button aria-label="Dashboard" className="hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-400 rounded-xl pt-2.5 pr-2.5 pb-2.5 pl-2.5" onclick="switchTab('dashboard')">
<iconify-icon className="" height="22" icon="solar:widget-5-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-[10px] font-normal px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 tooltip-arrow shadow-xl">Dashboard</span>
</div>

<div className="nav-item active group relative flex justify-center w-full" data-target="infrastructure">
<button aria-label="Infrastructure" className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" onclick="switchTab('infrastructure')">
<iconify-icon className="" height="22" icon="solar:server-path-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-[10px] font-normal px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 tooltip-arrow shadow-xl">Infrastructure</span>
</div>

<div className="nav-item group flex w-full relative justify-center" data-target="livestream">
<button aria-label="Live Data" className="hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-400 rounded-xl pt-2.5 pr-2.5 pb-2.5 pl-2.5" onclick="switchTab('livestream')">
<iconify-icon className="" height="22" icon="solar:chart-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-[10px] font-normal px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 tooltip-arrow shadow-xl">Live Stream</span>
</div>

<div className="nav-item group relative flex justify-center w-full" data-target="alerts">
<button aria-label="Events" className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" onclick="switchTab('alerts')">
<div className="relative">
<iconify-icon height="22" icon="solar:bell-bing-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full shadow-sm ring-2 ring-white dark:ring-slate-800 transform translate-x-1/2 -translate-y-1/2"></span>
</div>
</button>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-[10px] font-normal px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 tooltip-arrow shadow-xl">Events</span>
</div>
</nav>
<div className="mt-auto flex flex-col gap-3 px-2 w-full items-center">
<div className="group relative flex justify-center w-full">
<button aria-label="Toggle Theme" className="p-2.5 rounded-xl text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" id="themeToggle" onclick="toggleTheme()">
<iconify-icon className="hidden" height="22" icon="solar:sun-2-linear" id="icon-sun" strokeWidth="1.5" width="22"></iconify-icon>
<iconify-icon className="hidden" height="22" icon="solar:moon-stars-linear" id="icon-moon" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
<button className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-normal text-slate-600 dark:text-slate-300 mt-2 hover:ring-2 hover:ring-brand-200 dark:hover:ring-brand-900 transition-all">
                JD
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">

<header className="flex sticky z-30 dark:bg-slate-950/70 bg-slate-50/70 pt-5 pr-8 pb-5 pl-8 top-0 backdrop-blur-xl items-center justify-between">
<div className="flex items-center gap-5">

<button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors -ml-2" id="backButton" onclick="history.back()">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div id="headerTextContainer">
<div className="flex items-center gap-3">
<h1 className="text-xl font-normal tracking-tight text-slate-900 dark:text-white" id="pageTitle">PDU-R07-A12</h1>
<span className="px-2 py-0.5 rounded-md text-xxs font-normal bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400 tracking-wide" id="pageBadge">G3 SERIES</span>
</div>
<p className="text-xs text-slate-400 dark:text-slate-500 font-light tracking-wide mt-1" id="pageSubtitle">SN-EAT-PDU-3PH-400A-07A12</p>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden flex items-center gap-3" id="connectionStatus">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-normal text-slate-900 dark:text-white tracking-tight">Connected</span>
</div>
<div className="relative" id="menuWrapper">
<button aria-haspopup="true" className="p-2 rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" id="menuBtn">
<iconify-icon className="transform rotate-90" height="20" icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>

<div className="absolute right-0 mt-2 w-48 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-float py-1.5 opacity-0 invisible transform scale-95 transition-all duration-200 origin-top-right z-50 border border-slate-100 dark:border-slate-700" id="dropdownMenu">
<button className="w-full text-left px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center gap-2.5 font-light">
<iconify-icon height="14" icon="solar:graph-new-linear" width="14"></iconify-icon> View Metrics
                        </button>
<button className="w-full text-left px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center gap-2.5 font-light">
<iconify-icon height="14" icon="solar:document-add-linear" width="14"></iconify-icon> Export Report
                        </button>
<div className="h-px bg-slate-100 dark:bg-slate-700/50 my-1"></div>
<button className="w-full text-left px-4 py-2.5 text-xs text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10 flex items-center gap-2.5 font-light">
<iconify-icon height="14" icon="solar:trash-bin-trash-linear" width="14"></iconify-icon> Decommission
                        </button>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto md:px-8 md:pb-8 scroll-smooth w-full pt-4 pr-4 pb-4 pl-4" id="contentArea">
<div className="max-w-6xl w-full mx-auto relative min-h-full">

<section className="view-section hidden space-y-6 animate-enter" id="dashboard">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex justify-between items-start mb-3">
<span className="text-sm font-normal text-slate-500">Real-time PUE</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white tabular-nums tracking-tight">1.18<span className="text-lg text-slate-500 ml-1">PUE</span></span>
</div>
<div className="mt-2 text-xs font-normal text-emerald-500">-2.4% vs last week</div>
</div>

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex justify-between items-start mb-3">
<span className="text-sm font-normal text-slate-500">Total Power</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white tabular-nums tracking-tight">842.5<span className="text-lg text-slate-500 ml-1">kW</span></span>
</div>
<div className="mt-2 text-xs font-normal text-slate-400">Stable load</div>
</div>

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex justify-between items-start mb-3">
<span className="text-sm font-normal text-slate-500">Breaker Load</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white tabular-nums tracking-tight">72.4<span className="text-lg text-slate-500 ml-1">%</span></span>
</div>
<div className="mt-2 text-xs font-normal text-orange-500">Approaching high</div>
</div>

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex justify-between items-start mb-3">
<span className="text-sm font-normal text-slate-500">Active Events</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white tabular-nums tracking-tight">3<span className="text-lg text-slate-500 ml-1">Evts</span></span>
</div>
<div className="mt-2 text-xs font-normal text-rose-500">1 Critical alert</div>
</div>
</div>

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 w-full animate-enter stagger-1 group transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div>
<h3 className="text-base font-normal text-slate-900 dark:text-white tracking-tight">Datacenter Efficiency (PUE)</h3>
<p className="text-xs text-slate-400 font-light mt-0.5">30-day historical trend for entire facility</p>
</div>
<div className="flex items-center gap-2">
<select className="bg-transparent border-none text-xs text-slate-600 dark:text-slate-300 rounded-lg px-3 py-1.5 focus:ring-1 focus:ring-brand-500 outline-none cursor-pointer">
<option className="bg-white dark:bg-slate-900">Last 30 Days</option>
<option className="bg-white dark:bg-slate-900">Last 90 Days</option>
<option className="bg-white dark:bg-slate-900">Year to Date</option>
</select>
</div>
</div>
<div className="w-full h-80 relative" id="pueGraphContainer">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 300">
<defs>
<lineargradient id="pueBarGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#10b981', stopOpacity: '0.8'}}></stop>
<stop offset="100%" style={{stopColor: '#10b981', stopOpacity: '0.3'}}></stop>
</lineargradient>
</defs>
<g className="stroke-slate-100 dark:stroke-slate-800" stroke-dasharray="4 4" strokeWidth="1">
<line x1="0" x2="1000" y1="225" y2="225"></line>
<line x1="0" x2="1000" y1="150" y2="150"></line>
<line x1="0" x2="1000" y1="75" y2="75"></line>
<line x1="0" x2="1000" y1="0" y2="0"></line>
</g>

<rect fill="url(#pueBarGradient)" height="120" rx="4" width="50" x="25" y="180"></rect>
<rect fill="url(#pueBarGradient)" height="125" rx="4" width="50" x="125" y="175"></rect>
<rect fill="url(#pueBarGradient)" height="140" rx="4" width="50" x="225" y="160"></rect>
<rect fill="url(#pueBarGradient)" height="132" rx="4" width="50" x="325" y="168"></rect>
<rect fill="url(#pueBarGradient)" height="150" rx="4" width="50" x="425" y="150"></rect>
<rect fill="url(#pueBarGradient)" height="172" rx="4" width="50" x="525" y="128"></rect>
<rect fill="url(#pueBarGradient)" height="165" rx="4" width="50" x="625" y="135"></rect>
<rect fill="url(#pueBarGradient)" height="180" rx="4" width="50" x="725" y="120"></rect>
<rect fill="url(#pueBarGradient)" height="195" rx="4" width="50" x="825" y="105"></rect>
<rect fill="url(#pueBarGradient)" height="210" rx="4" width="50" x="925" y="90"></rect>
</svg>
<div className="flex justify-between mt-2 text-[10px] text-slate-400 dark:text-slate-500 font-light pointer-events-none">
<span>Oct 01</span>
<span>Oct 15</span>
<span>Today</span>
</div>
</div>
</div>
</section>

<section className="view-section block animate-enter" id="infrastructure">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-2">
<span className="dark:text-slate-400 text-sm font-normal text-slate-500">Health</span>
</div>
<button className="text-slate-400 hover:text-brand-500 transition-colors">
<iconify-icon height="20" icon="solar:refresh-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="">
<div className="flex gap-3 mb-2 gap-x-3 gap-y-3 items-center">
<span className="text-3xl md:text-4xl font-light text-emerald-500 tracking-tight">Normal</span>
</div>
<p className="text-xs font-light text-slate-400">Last sync : <span className="text-slate-600 dark:text-slate-300 font-normal">2s ago</span></p>
</div>
</div>

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft col-span-1 lg:col-span-2 relative overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
<div className="">
<div className="flex items-center gap-2 mb-3">
<span className="dark:text-slate-400 text-sm font-normal text-slate-500">Total Load</span>
</div>
<div className="flex items-baseline gap-4">
<span className="text-4xl font-light text-slate-900 dark:text-white tracking-tight">287.4<span className="text-lg text-slate-500 ml-1">A</span></span>
<span className="inline-flex items-center text-[10px] uppercase dark:bg-orange-500/10 dark:text-orange-300 font-normal text-orange-700 tracking-wider bg-orange-50 rounded-full pt-1 pr-2.5 pb-1 pl-2.5">
                                            71.9% Cap
                                        </span>
</div>
</div>

<div className="h-16 w-full sm:w-64 opacity-80">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 30">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0,25 C10,22 20,28 30,18 C40,8 50,15 60,12 C70,10 80,5 90,10 L100,8" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path className="" d="M0,25 C10,22 20,28 30,18 C40,8 50,15 60,12 C70,10 80,5 90,10 L100,8 L100,35 L0,35 Z" fill="url(#gradient)" stroke="none"></path>
</svg>
</div>
</div>
<div className="mt-6 pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
<div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-light">
<span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span> Phase A: <span className="text-slate-700 dark:text-slate-200 font-normal">96A</span></span>
<span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span> Phase B: <span className="text-slate-700 dark:text-slate-200 font-normal">94A</span></span>
<span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span> Phase C: <span className="text-slate-700 dark:text-slate-200 font-normal">97A</span></span>
</div>
<button className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 text-xs font-normal flex items-center gap-1 transition-colors">
                                    Analytics <iconify-icon height="12" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="animate-enter stagger-1 mb-12 dark:bg-slate-900/80 bg-white/80 backdrop-blur-md transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 rounded-2xl shadow-soft overflow-hidden">
<div className="divide-y divide-slate-100 dark:divide-slate-800">

<div className="flex items-center justify-between px-6 py-4">
<span className="text-sm font-normal text-slate-900 dark:text-white">Schedule Maintenance</span>
<button className="px-4 py-2 rounded-lg text-xs font-normal text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 flex items-center gap-2" onclick="createCalendarEvent()">
<iconify-icon height="14" icon="solar:calendar-add-linear" width="14"></iconify-icon>
                                     Schedule
                                 </button>
</div>

<div className="flex items-center justify-between px-6 py-4">
<span className="text-sm font-normal text-slate-900 dark:text-white">Reset Breakers</span>
<button className="px-4 py-2 rounded-lg text-xs font-normal text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/10 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white transition-all border border-rose-100 dark:border-rose-900/30 flex items-center gap-2" onclick="confirmReset()">
<iconify-icon height="14" icon="solar:restart-linear" width="14"></iconify-icon>
                                     Reset
                                 </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-enter stagger-2">

<section className="flex flex-col h-full">
<h3 className="text-sm font-normal text-slate-900 dark:text-white mb-4 px-1">Unit Specifications</h3>
<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-soft overflow-hidden flex-1 flex flex-col">
<div className="grid grid-cols-1 divide-y divide-slate-50 dark:divide-slate-800 h-full">
<div className="grid grid-cols-2 px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
<dt className="flex items-center gap-2 text-xs font-light text-slate-500 dark:text-slate-500">
<iconify-icon className="text-slate-500 dark:text-slate-500" height="16" icon="solar:box-linear" width="16"></iconify-icon> Model
                                        </dt>
<dd className="text-xs font-normal text-slate-700 dark:text-slate-200 text-right">EatonPDU G3 3PH-400A</dd>
</div>
<div className="grid grid-cols-2 px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
<dt className="flex items-center gap-2 text-xs font-light text-slate-500 dark:text-slate-500">
<iconify-icon className="text-slate-500 dark:text-slate-500" height="16" icon="solar:map-point-linear" width="16"></iconify-icon> Location
                                        </dt>
<dd className="text-right"><span className="text-[10px] font-normal text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">DC1-R07-U12-14</span></dd>
</div>
<div className="grid grid-cols-2 px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
<dt className="flex gap-2 text-xs font-light text-slate-500 dark:text-slate-500 items-center">
<iconify-icon className="text-slate-500 dark:text-slate-500" height="16" icon="solar:battery-charge-linear" width="16"></iconify-icon> Input Voltage
                                        </dt>
<dd className="text-xs font-normal text-slate-700 dark:text-slate-200 text-right">400V 3Ph + N</dd>
</div>
<div className="grid grid-cols-2 px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
<dt className="flex items-center gap-2 text-xs font-light text-slate-500 dark:text-slate-500">
<iconify-icon className="text-slate-500 dark:text-slate-500" height="16" icon="solar:structure-linear" width="16"></iconify-icon> Phase Config
                                        </dt>
<dd className="text-xs font-normal text-slate-700 dark:text-slate-200 text-right">3-Phase WYE</dd>
</div>
<div className="grid grid-cols-2 px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
<dt className="flex items-center gap-2 text-xs font-light text-slate-500 dark:text-slate-500">
<iconify-icon className="text-slate-500 dark:text-slate-500" height="16" icon="solar:clock-circle-linear" width="16"></iconify-icon> Installed
                                        </dt>
<dd className="text-xs font-normal text-slate-700 dark:text-slate-200 text-right">Jun 12, 2023</dd>
</div>
</div>
</div>
</section>

<section className="flex flex-col h-full">
<h3 className="dark:text-white text-sm font-normal text-slate-900 mb-4 pr-1 pl-1">System Metrics</h3>
<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-soft overflow-hidden flex-1 flex flex-col">
<div className="grid grid-cols-1 divide-y divide-slate-50 dark:divide-slate-800 h-full">
<div className="grid grid-cols-2 px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
<dt className="flex gap-2 dark:text-slate-500 text-xs font-light text-slate-500 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-slate-500 dark:text-slate-500" height="16" icon="solar:global-linear" width="16"></iconify-icon> Management IP
                                        </dt>
<dd className="text-xs font-normal text-slate-700 dark:text-slate-200 text-right font-mono tracking-tight">10.42.7.112</dd>
</div>
<div className="grid grid-cols-2 px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
<dt className="flex items-center gap-2 text-xs font-light text-slate-500 dark:text-slate-500">
<iconify-icon className="text-slate-500 dark:text-slate-500" height="16" icon="solar:plug-circle-linear" width="16"></iconify-icon> Total Outlets
                                        </dt>
<dd className="text-xs font-normal text-slate-700 dark:text-slate-200 text-right">42x C13 + 6x C19</dd>
</div>
<div className="grid grid-cols-2 px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
<dt className="flex items-center gap-2 text-xs font-light text-slate-500 dark:text-slate-500">
<iconify-icon className="text-slate-500 dark:text-slate-500" height="16" icon="solar:pie-chart-linear" width="16"></iconify-icon> Efficiency
                                        </dt>
<dd className="text-xs font-normal text-brand-600 dark:text-brand-400 text-right">99.2% @ 50% load</dd>
</div>
<div className="grid grid-cols-2 px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
<dt className="flex items-center gap-2 text-xs font-light text-slate-500 dark:text-slate-500">
<iconify-icon className="text-slate-500 dark:text-slate-500" height="16" icon="solar:cpu-bolt-linear" width="16"></iconify-icon> Firmware
                                        </dt>
<dd className="text-xs font-normal text-slate-700 dark:text-slate-200 text-right">v4.2.1.18</dd>
</div>
<div className="grid grid-cols-2 px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
<dt className="flex items-center gap-2 text-xs font-light text-slate-500 dark:text-slate-500">
<iconify-icon className="text-slate-500 dark:text-slate-500" height="16" icon="solar:history-linear" width="16"></iconify-icon> Uptime
                                        </dt>
<dd className="text-xs font-normal text-slate-700 dark:text-slate-200 text-right">587 days 8h 14m</dd>
</div>
</div>
</div>
</section>
</div>
</section>

<section className="view-section hidden space-y-6 animate-enter" id="livestream">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex justify-between items-start mb-3">
<span className="text-sm font-normal text-slate-500">Phase A Load</span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="flex items-baseline gap-2">
<span className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white tabular-nums tracking-tight">42.5<span className="text-lg text-slate-500 ml-1">A</span></span>
</div>
<div className="mt-2 text-xs font-normal text-emerald-500">Normal</div>
</div>

<svg className="h-8 w-28 mb-1" viewbox="0 0 100 40">
<rect className="fill-emerald-500 opacity-40" height="20" rx="1" width="2" x="0" y="20"></rect>
<rect className="fill-emerald-500 opacity-40" height="15" rx="1" width="2" x="8" y="25"></rect>
<rect className="fill-emerald-500 opacity-40" height="25" rx="1" width="2" x="16" y="15"></rect>
<rect className="fill-emerald-500 opacity-40" height="18" rx="1" width="2" x="24" y="22"></rect>
<rect className="fill-emerald-500 opacity-40" height="12" rx="1" width="2" x="32" y="28"></rect>
<rect className="fill-emerald-500 opacity-40" height="20" rx="1" width="2" x="40" y="20"></rect>
<rect className="fill-emerald-500 opacity-40" height="22" rx="1" width="2" x="48" y="18"></rect>
<rect className="fill-emerald-500 opacity-40" height="30" rx="1" width="2" x="56" y="10"></rect>
<rect className="fill-emerald-500 opacity-40" height="25" rx="1" width="2" x="64" y="15"></rect>
<rect className="fill-emerald-500 opacity-40" height="15" rx="1" width="2" x="72" y="25"></rect>
<rect className="fill-emerald-500 opacity-40" height="20" rx="1" width="2" x="80" y="20"></rect>
<rect className="fill-emerald-500 opacity-40" height="22" rx="1" width="2" x="88" y="18"></rect>
<rect className="fill-emerald-500 dark:fill-emerald-400 opacity-100" height="28" rx="1" width="2" x="96" y="12"></rect>
</svg>
</div>
</div>

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex justify-between items-start mb-3">
<span className="text-sm font-normal text-slate-500">Phase B Load</span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="flex items-baseline gap-2">
<span className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white tabular-nums tracking-tight">88.2<span className="text-lg text-slate-500 ml-1">A</span></span>
</div>
<div className="mt-2 text-xs font-normal text-orange-500">Elevated</div>
</div>

<svg className="h-8 w-28 mb-1" viewbox="0 0 100 40">
<rect className="fill-emerald-500 opacity-40" height="20" rx="1" width="2" x="0" y="20"></rect>
<rect className="fill-emerald-500 opacity-40" height="22" rx="1" width="2" x="8" y="18"></rect>
<rect className="fill-emerald-500 opacity-40" height="15" rx="1" width="2" x="16" y="25"></rect>
<rect className="fill-orange-500 opacity-40" height="25" rx="1" width="2" x="24" y="15"></rect>
<rect className="fill-orange-500 opacity-40" height="28" rx="1" width="2" x="32" y="12"></rect>
<rect className="fill-orange-500 opacity-40" height="30" rx="1" width="2" x="40" y="10"></rect>
<rect className="fill-orange-500 opacity-40" height="32" rx="1" width="2" x="48" y="8"></rect>
<rect className="fill-orange-500 opacity-40" height="35" rx="1" width="2" x="56" y="5"></rect>
<rect className="fill-orange-500 opacity-40" height="25" rx="1" width="2" x="64" y="15"></rect>
<rect className="fill-orange-500 opacity-40" height="20" rx="1" width="2" x="72" y="20"></rect>
<rect className="fill-orange-500 opacity-40" height="25" rx="1" width="2" x="80" y="15"></rect>
<rect className="fill-orange-500 opacity-40" height="30" rx="1" width="2" x="88" y="10"></rect>
<rect className="fill-orange-500 dark:fill-orange-400 opacity-100" height="35" rx="1" width="2" x="96" y="5"></rect>
</svg>
</div>
</div>

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex justify-between items-start mb-3">
<span className="text-sm font-normal text-slate-500">Phase C Load</span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="flex items-baseline gap-2">
<span className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white tabular-nums tracking-tight">98.9<span className="text-lg text-slate-500 ml-1">A</span></span>
</div>
<div className="mt-2 text-xs font-normal text-rose-500">Critical</div>
</div>

<svg className="h-8 w-28 mb-1" viewbox="0 0 100 40">
<rect className="fill-orange-500 opacity-40" height="30" rx="1" width="2" x="0" y="10"></rect>
<rect className="fill-orange-500 opacity-40" height="28" rx="1" width="2" x="8" y="12"></rect>
<rect className="fill-rose-500 opacity-40" height="32" rx="1" width="2" x="16" y="8"></rect>
<rect className="fill-rose-500 opacity-40" height="35" rx="1" width="2" x="24" y="5"></rect>
<rect className="fill-rose-500 opacity-40" height="38" rx="1" width="2" x="32" y="2"></rect>
<rect className="fill-rose-500 opacity-40" height="35" rx="1" width="2" x="40" y="5"></rect>
<rect className="fill-rose-500 opacity-40" height="30" rx="1" width="2" x="48" y="10"></rect>
<rect className="fill-orange-500 opacity-40" height="25" rx="1" width="2" x="56" y="15"></rect>
<rect className="fill-rose-500 opacity-40" height="40" rx="1" width="2" x="64" y="0"></rect>
<rect className="fill-rose-500 opacity-40" height="35" rx="1" width="2" x="72" y="5"></rect>
<rect className="fill-rose-500 opacity-40" height="32" rx="1" width="2" x="80" y="8"></rect>
<rect className="fill-rose-500 opacity-40" height="35" rx="1" width="2" x="88" y="5"></rect>
<rect className="fill-rose-500 dark:fill-rose-400 opacity-100" height="40" rx="1" width="2" x="96" y="0"></rect>
</svg>
</div>
</div>
</div>

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 w-full animate-enter stagger-1 group transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-3">
<div>
<h3 className="text-base font-normal text-slate-900 dark:text-white tracking-tight">Voltage THD Stability</h3>
<p className="text-xs text-slate-400 font-light mt-0.5">24-hour Total Harmonic Distortion monitor</p>
</div>
</div>
</div>
<div className="w-full h-80 relative" id="thdGraphContainer">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 300">
<g className="stroke-slate-100 dark:stroke-slate-800" stroke-dasharray="4 4" strokeWidth="1">
<line x1="0" x2="1000" y1="250" y2="250"></line>
<line x1="0" x2="1000" y1="150" y2="150"></line>
<line x1="0" x2="1000" y1="50" y2="50"></line>
</g>


<rect fill="#8b5cf6" fillOpacity="0.8" height="120" rx="2" width="20" x="15" y="180"></rect>
<rect fill="#a78bfa" fillOpacity="0.8" height="160" rx="2" width="20" x="37" y="140"></rect>
<rect fill="#c4b5fd" fillOpacity="0.8" height="100" rx="2" width="20" x="59" y="200"></rect>

<rect fill="#8b5cf6" fillOpacity="0.8" height="180" rx="2" width="20" x="115" y="120"></rect>
<rect fill="#a78bfa" fillOpacity="0.8" height="110" rx="2" width="20" x="137" y="190"></rect>
<rect fill="#c4b5fd" fillOpacity="0.8" height="140" rx="2" width="20" x="159" y="160"></rect>

<rect fill="#8b5cf6" fillOpacity="0.8" height="90" rx="2" width="20" x="215" y="210"></rect>
<rect fill="#a78bfa" fillOpacity="0.8" height="170" rx="2" width="20" x="237" y="130"></rect>
<rect fill="#c4b5fd" fillOpacity="0.8" height="130" rx="2" width="20" x="259" y="170"></rect>

<rect fill="#8b5cf6" fillOpacity="0.8" height="150" rx="2" width="20" x="315" y="150"></rect>
<rect fill="#a78bfa" fillOpacity="0.8" height="80" rx="2" width="20" x="337" y="220"></rect>
<rect fill="#c4b5fd" fillOpacity="0.8" height="165" rx="2" width="20" x="359" y="135"></rect>

<rect fill="#8b5cf6" fillOpacity="0.8" height="105" rx="2" width="20" x="415" y="195"></rect>
<rect fill="#a78bfa" fillOpacity="0.8" height="190" rx="2" width="20" x="437" y="110"></rect>
<rect fill="#c4b5fd" fillOpacity="0.8" height="120" rx="2" width="20" x="459" y="180"></rect>

<rect fill="#8b5cf6" fillOpacity="0.8" height="140" rx="2" width="20" x="515" y="160"></rect>
<rect fill="#a78bfa" fillOpacity="0.8" height="70" rx="2" width="20" x="537" y="230"></rect>
<rect fill="#c4b5fd" fillOpacity="0.8" height="175" rx="2" width="20" x="559" y="125"></rect>

<rect fill="#8b5cf6" fillOpacity="0.8" height="160" rx="2" width="20" x="615" y="140"></rect>
<rect fill="#a78bfa" fillOpacity="0.8" height="100" rx="2" width="20" x="637" y="200"></rect>
<rect fill="#c4b5fd" fillOpacity="0.8" height="130" rx="2" width="20" x="659" y="170"></rect>

<rect fill="#8b5cf6" fillOpacity="0.8" height="115" rx="2" width="20" x="715" y="185"></rect>
<rect fill="#a78bfa" fillOpacity="0.8" height="185" rx="2" width="20" x="737" y="115"></rect>
<rect fill="#c4b5fd" fillOpacity="0.8" height="150" rx="2" width="20" x="759" y="150"></rect>

<rect fill="#8b5cf6" fillOpacity="0.8" height="170" rx="2" width="20" x="815" y="130"></rect>
<rect fill="#a78bfa" fillOpacity="0.8" height="90" rx="2" width="20" x="837" y="210"></rect>
<rect fill="#c4b5fd" fillOpacity="0.8" height="140" rx="2" width="20" x="859" y="160"></rect>

<rect fill="#8b5cf6" fillOpacity="0.8" height="125" rx="2" width="20" x="915" y="175"></rect>
<rect fill="#a78bfa" fillOpacity="0.8" height="175" rx="2" width="20" x="937" y="125"></rect>
<rect fill="#c4b5fd" fillOpacity="0.8" height="110" rx="2" width="20" x="959" y="190"></rect>
</svg>
<div className="flex justify-between mt-2 text-[10px] text-slate-400 dark:text-slate-500 font-light pointer-events-none">
<span>00:00</span>
<span>06:00</span>
<span>12:00</span>
<span>18:00</span>
<span>Now</span>
</div>
</div>
</div>
</section>

<section className="view-section hidden flex flex-col h-full animate-enter" id="alerts">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex justify-between items-start mb-3">
<span className="text-sm font-normal text-slate-500">Critical Alarms</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white tabular-nums tracking-tight">1<span className="text-lg text-slate-500 ml-1">Active</span></span>
</div>
<div className="mt-2 text-xs font-normal text-rose-500">Requires attention</div>
</div>

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex justify-between items-start mb-3">
<span className="text-sm font-normal text-slate-500">Warning Events</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white tabular-nums tracking-tight">5<span className="text-lg text-slate-500 ml-1">Total</span></span>
</div>
<div className="mt-2 text-xs font-normal text-orange-500">+2 since yesterday</div>
</div>

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1">
<div className="flex justify-between items-start mb-3">
<span className="text-sm font-normal text-slate-500">Resolution Rate</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white tabular-nums tracking-tight">98.5<span className="text-lg text-slate-500 ml-1">%</span></span>
</div>
<div className="mt-2 text-xs font-normal text-emerald-500">Within SLA</div>
</div>
</div>

<h3 className="text-base font-normal text-slate-900 dark:text-white tracking-tight mb-4 px-1">Event Log</h3>
<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-soft overflow-hidden border border-slate-100 dark:border-slate-800/50 flex-1 mb-8">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-normal text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/20">
<th className="px-6 py-3 border-r border-slate-100 dark:border-slate-800 w-32 font-normal">Priority</th>
<th className="px-6 py-3 border-r border-slate-100 dark:border-slate-800 font-normal">Event Details</th>
<th className="px-6 py-3 border-r border-slate-100 dark:border-slate-800 w-32 font-normal">Status</th>
<th className="px-6 py-3 w-40 text-right font-normal">Date</th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-slate-50 dark:divide-slate-800">
<tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-normal bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30">
                                                Critical
                                            </span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<p className="font-normal text-slate-900 dark:text-white">Phase C Overload Warning</p>
<p className="text-[10px] text-slate-400 mt-0.5">Load exceeded 98A threshold (98.9A)</p>
</div>
</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Active</td>
<td className="px-6 py-4 text-right text-slate-500 tabular-nums">10:42:15 AM</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-normal bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 border border-orange-100 dark:border-orange-900/30">
                                                Warning
                                            </span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<p className="font-normal text-slate-900 dark:text-white">High Temperature Detected</p>
<p className="text-[10px] text-slate-400 mt-0.5">Sensor B2 reading 34°C</p>
</div>
</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Monitoring</td>
<td className="px-6 py-4 text-right text-slate-500 tabular-nums">09:15:22 AM</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-normal bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 border border-orange-100 dark:border-orange-900/30">
                                                Warning
                                            </span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<p className="font-normal text-slate-900 dark:text-white">Phase B Load Variance</p>
<p className="text-[10px] text-slate-400 mt-0.5">Sudden spike detected (+15A)</p>
</div>
</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Resolved</td>
<td className="px-6 py-4 text-right text-slate-500 tabular-nums">08:58:04 AM</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-normal bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400 border border-brand-100 dark:border-brand-900/30">
                                                Info
                                            </span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<p className="font-normal text-slate-900 dark:text-white">User Login Successful</p>
<p className="text-[10px] text-slate-400 mt-0.5">Admin access from 192.168.1.14</p>
</div>
</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Logged</td>
<td className="px-6 py-4 text-right text-slate-500 tabular-nums">08:00:11 AM</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-normal bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50">
                                                System
                                            </span>
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<p className="font-normal text-slate-900 dark:text-white">NTP Synchronization</p>
<p className="text-[10px] text-slate-400 mt-0.5">Time updated successfully</p>
</div>
</td>
<td className="px-6 py-4 text-slate-600 dark:text-slate-300">Success</td>
<td className="px-6 py-4 text-right text-slate-500 tabular-nums">03:00:00 AM</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800/50 w-full">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-base font-normal text-slate-900 dark:text-white tracking-tight">Event Priority Distribution</h3>
<p className="text-xs text-slate-400 font-light mt-0.5">Volume of system events by type over last 7 days</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2 text-[10px] text-slate-500">
<span className="w-2 h-2 rounded-full bg-rose-500"></span> Critical
                                </div>
<div className="flex items-center gap-2 text-[10px] text-slate-500">
<span className="w-2 h-2 rounded-full bg-orange-500"></span> Warning
                                </div>
<div className="flex items-center gap-2 text-[10px] text-slate-500">
<span className="w-2 h-2 rounded-full bg-brand-500"></span> Info
                                </div>
</div>
</div>
<div className="w-full h-48 relative flex items-end justify-between px-2 gap-2">

<div className="absolute inset-0 w-full h-full flex flex-col justify-between pointer-events-none z-0 border-collapse">
<div className="w-full h-px border-t border-dashed border-slate-100 dark:border-slate-800"></div>
<div className="w-full h-px border-t border-dashed border-slate-100 dark:border-slate-800"></div>
<div className="w-full h-px border-t border-dashed border-slate-100 dark:border-slate-800"></div>

</div>


<div className="relative z-10 w-full h-full flex flex-col justify-end">
<div className="w-full mx-auto rounded-t-sm flex flex-col-reverse gap-0.5" style={{height: '40%'}}>
<div className="w-full bg-brand-500 h-[60%] rounded-b-sm"></div>
<div className="w-full bg-orange-500 h-[30%]"></div>
<div className="w-full bg-rose-500 h-[10%] rounded-t-sm"></div>
</div>
<div className="text-[10px] text-center text-slate-400 mt-2 font-mono">Mon</div>
</div>

<div className="relative z-10 w-full h-full flex flex-col justify-end">
<div className="w-full mx-auto rounded-t-sm flex flex-col-reverse gap-0.5" style={{height: '65%'}}>
<div className="w-full bg-brand-500 h-[50%] rounded-b-sm"></div>
<div className="w-full bg-orange-500 h-[40%]"></div>
<div className="w-full bg-rose-500 h-[10%] rounded-t-sm"></div>
</div>
<div className="text-[10px] text-center text-slate-400 mt-2 font-mono">Tue</div>
</div>

<div className="relative z-10 w-full h-full flex flex-col justify-end">
<div className="w-full mx-auto rounded-t-sm flex flex-col-reverse gap-0.5" style={{height: '30%'}}>
<div className="w-full bg-brand-500 h-[80%] rounded-b-sm"></div>
<div className="w-full bg-orange-500 h-[20%]"></div>
<div className="w-full h-0"></div> 
</div>
<div className="text-[10px] text-center text-slate-400 mt-2 font-mono">Wed</div>
</div>

<div className="relative z-10 w-full h-full flex flex-col justify-end">
<div className="w-full mx-auto rounded-t-sm flex flex-col-reverse gap-0.5" style={{height: '85%'}}>
<div className="w-full bg-brand-500 h-[30%] rounded-b-sm"></div>
<div className="w-full bg-orange-500 h-[40%]"></div>
<div className="w-full bg-rose-500 h-[30%] rounded-t-sm"></div>
</div>
<div className="text-[10px] text-center text-slate-400 mt-2 font-mono">Thu</div>
</div>

<div className="relative z-10 w-full h-full flex flex-col justify-end">
<div className="w-full mx-auto rounded-t-sm flex flex-col-reverse gap-0.5" style={{height: '45%'}}>
<div className="w-full bg-brand-500 h-[70%] rounded-b-sm"></div>
<div className="w-full bg-orange-500 h-[30%]"></div>
</div>
<div className="text-[10px] text-center text-slate-400 mt-2 font-mono">Fri</div>
</div>

<div className="relative z-10 w-full h-full flex flex-col justify-end">
<div className="w-full mx-auto rounded-t-sm flex flex-col-reverse gap-0.5" style={{height: '25%'}}>
<div className="w-full bg-brand-500 h-[100%] rounded-sm"></div>
</div>
<div className="text-[10px] text-center text-slate-400 mt-2 font-mono">Sat</div>
</div>

<div className="relative z-10 w-full h-full flex flex-col justify-end">
<div className="w-full mx-auto rounded-t-sm flex flex-col-reverse gap-0.5" style={{height: '20%'}}>
<div className="w-full bg-brand-500 h-[100%] rounded-sm"></div>
</div>
<div className="text-[10px] text-center text-slate-400 mt-2 font-mono">Sun</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none items-center" id="toast-container"></div>


    </>
  );
}
