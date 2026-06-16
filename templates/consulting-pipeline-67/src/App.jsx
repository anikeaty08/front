import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // MOCK DATABASE
        const db = [
            { id: 'LEAD-001', company: 'Acme Corp', website: 'acmecorp.com', contact: 'John Doe', initials: 'AC', color: 'indigo', status: 'Onboarded', statusColor: 'emerald', emp: 240, growth: 75, lastContact: 'Oct 24 • 10:00 AM', value: '$12,500' },
            { id: 'LEAD-002', company: 'Stark Tech', website: 'stark.io', contact: 'Tony Stark', initials: 'ST', color: 'neutral', status: 'Rejected', statusColor: 'red', emp: 1200, growth: 40, lastContact: 'None', value: '$45,000' },
            { id: 'LEAD-003', company: 'Globex Inc', website: 'globex.com', contact: 'Hank Scorpio', initials: 'GL', color: 'blue', status: 'Negotiation', statusColor: 'blue', emp: 55, growth: 90, lastContact: 'Oct 26 • 2:30 PM', value: '$8,200' },
            { id: 'LEAD-004', company: 'Cyberdyne', website: 'cyberdyne.net', contact: 'Miles Dyson', initials: 'CY', color: 'purple', status: 'Discovery', statusColor: 'amber', emp: 540, growth: 15, lastContact: '2 days ago', value: '$110,000' },
            { id: 'LEAD-005', company: 'Massive Dynamic', website: 'massive.com', contact: 'Nina Sharp', initials: 'MD', color: 'neutral', status: 'Discovery', statusColor: 'amber', emp: 8900, growth: 60, lastContact: '1 week ago', value: '$250,000' },
            { id: 'LEAD-006', company: 'Hooli', website: 'hooli.xyz', contact: 'Gavin Belson', initials: 'HO', color: 'rose', status: 'Rejected', statusColor: 'red', emp: 3500, growth: 25, lastContact: 'Sep 12', value: '$95,000' },
            { id: 'LEAD-007', company: 'Initech', website: 'initech.com', contact: 'Peter Gibbons', initials: 'IN', color: 'green', status: 'Proposal', statusColor: 'blue', emp: 45, growth: 5, lastContact: 'Yesterday', value: '$5,000' },
            { id: 'LEAD-008', company: 'Umbrella Corp', website: 'umbrella.com', contact: 'Albert Wesker', initials: 'UC', color: 'red', status: 'Onboarded', statusColor: 'emerald', emp: 15000, growth: 88, lastContact: 'Oct 20', value: '$500,000' }
        ];

        lucide.createIcons();

        // INIT
        window.onload = function() {
            renderDashboard();
            renderDatabase();
        }

        function renderDashboard() {
            const tbody = document.getElementById('dashboard-table-body');
            tbody.innerHTML = '';
            
            // Render first 3 for dashboard overview
            db.slice(0, 3).forEach(item => {
                const tr = document.createElement('tr');
                tr.className = 'group hover:bg-neutral-900/40 transition-colors';
                
                // Status Badge Logic
                let badgeClass = '';
                if(item.statusColor === 'emerald') badgeClass = 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
                else if(item.statusColor === 'red') badgeClass = 'bg-red-500/10 text-red-400 border-red-500/20';
                else if(item.statusColor === 'blue') badgeClass = 'bg-blue-500/10 text-blue-400 border-blue-500/20';
                else badgeClass = 'bg-amber-500/10 text-amber-500 border-amber-500/20';

                // Initial Color Logic
                let bgClass = item.color === 'neutral' ? 'bg-neutral-800 border-neutral-700 text-neutral-400' : `bg-${item.color}-500/20 border-${item.color}-500/30 text-${item.color}-300`;
                // Tailwind dynamic classes fix (simulated)
                if(item.initials === 'ST' || item.initials === 'MD') bgClass = 'bg-neutral-800 border-neutral-700 text-neutral-400';
                if(item.initials === 'AC') bgClass = 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300';
                if(item.initials === 'GL') bgClass = 'bg-blue-500/20 border-blue-500/30 text-blue-300';

                tr.innerHTML = `
                    <td class="py-3 pl-4 pr-2 align-middle"><input type="checkbox" class="custom-checkbox"></td>
                    <td class="py-3 px-4 align-middle">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded border flex items-center justify-center text-xs font-medium ${bgClass}">${item.initials}</div>
                            <div>
                                <div class="text-white font-medium">${item.company}</div>
                                <div class="text-xs text-neutral-500">${item.website}</div>
                            </div>
                        </div>
                    </td>
                    <td class="py-3 px-4 align-middle">
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-1.5 text-neutral-300 text-xs">
                                <i data-lucide="reply" class="w-3 h-3 text-neutral-500"></i> Replied
                            </div>
                            <span class="text-xs text-neutral-500">Recently</span>
                        </div>
                    </td>
                    <td class="py-3 px-4 align-middle">
                        <div class="flex flex-col gap-1.5">
                            <span class="text-xs text-neutral-400">${item.emp.toLocaleString()} Emp</span>
                            <div class="w-24 h-1 bg-neutral-800 rounded-full overflow-hidden"><div class="h-full bg-${item.statusColor}-500 w-[${item.growth}%]"></div></div>
                        </div>
                    </td>
                    <td class="py-3 px-4 align-middle"><span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${badgeClass}">${item.status}</span></td>
                    <td class="py-3 px-4 align-middle"><span class="text-white text-xs font-medium">${item.lastContact}</span></td>
                    <td class="py-3 px-4 text-right align-middle"><button class="text-neutral-600 hover:text-white"><i data-lucide="more-vertical" class="w-4 h-4"></i></button></td>
                `;
                tbody.appendChild(tr);
            });
            lucide.createIcons();
        }

        function renderDatabase() {
            const tbody = document.getElementById('database-table-body');
            tbody.innerHTML = '';
            
            db.forEach(item => {
                const tr = document.createElement('tr');
                tr.className = 'group hover:bg-neutral-900/30 transition-colors';
                
                let badgeClass = '';
                if(item.statusColor === 'emerald') badgeClass = 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
                else if(item.statusColor === 'red') badgeClass = 'text-red-400 bg-red-500/10 border-red-500/20';
                else if(item.statusColor === 'blue') badgeClass = 'text-blue-400 bg-blue-500/10 border-blue-500/20';
                else badgeClass = 'text-amber-500 bg-amber-500/10 border-amber-500/20';

                tr.innerHTML = `
                    <td class="py-3 px-4 text-neutral-500 font-mono text-xs">${item.id}</td>
                    <td class="py-3 px-4">
                         <div class="flex items-center gap-2">
                             <div class="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-neutral-800 text-neutral-400">${item.initials}</div>
                             <span class="text-neutral-300 font-medium">${item.company}</span>
                        </div>
                    </td>
                    <td class="py-3 px-4 text-neutral-400">${item.contact}</td>
                    <td class="py-3 px-4"><span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border ${badgeClass}">${item.status}</span></td>
                    <td class="py-3 px-4 text-neutral-300 font-mono text-right">${item.value}</td>
                    <td class="py-3 px-4 text-neutral-500">${item.lastContact}</td>
                    <td class="py-3 px-4">
                        <div class="flex -space-x-2">
                            <div class="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900 flex items-center justify-center text-[10px] text-white">AC</div>
                        </div>
                    </td>
                `;
                tbody.appendChild(tr);
            });
            document.getElementById('db-count').innerText = `Showing ${db.length} records`;
        }

        function navigateTo(viewId) {
            // Hide all views
            const views = document.querySelectorAll('.view-section');
            views.forEach(view => view.classList.add('hidden'));

            // Show selected view
            const selectedView = document.getElementById('view-' + viewId);
            if (selectedView) {
                selectedView.classList.remove('hidden');
            }

            // Update Sidebar Styles
            // Reset all
            const navButtons = document.querySelectorAll('aside nav button');
            navButtons.forEach(btn => {
                btn.className = "w-full flex items-center gap-3 px-2 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md transition-colors group";
                // reset icon color
                const icon = btn.querySelector('svg');
                if(icon) {
                    icon.classList.remove('text-neutral-400');
                    icon.classList.add('text-neutral-500');
                }
            });

            // Set active
            const activeBtn = document.getElementById('nav-' + viewId);
            if (activeBtn) {
                activeBtn.className = "w-full flex items-center gap-3 px-2 py-2 text-sm text-white bg-neutral-900 rounded-md ring-1 ring-white/5 transition-all";
                 const icon = activeBtn.querySelector('svg');
                if(icon) {
                    icon.classList.remove('text-neutral-500');
                    icon.classList.add('text-neutral-400');
                }
            }

            // Update Header Title
            const titles = {
                'dashboard': 'Dashboard',
                'database': 'Leads Database',
                'inbox': 'Inbox & Replies',
                'meetings': 'Meetings',
                'onboarded': 'Onboarded Clients',
                'rejected': 'Rejected Leads',
                'performance': 'Performance',
                'settings': 'Settings'
            };
            document.getElementById('header-title').innerText = titles[viewId] || 'Dashboard';
        }

        function exportReport() {
            // Use real DB data
            let csvContent = "data:text/csv;charset=utf-8,ID,Company,Contact,Status,Value\n" 
                + db.map(e => `${e.id},${e.company},${e.contact},${e.status},"${e.value}"`).join("\n");
            
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "nexus_database_export.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 hidden md:flex flex-col border-r border-neutral-800 bg-neutral-950/50 backdrop-blur-xl h-full z-20">
<div className="flex h-16 border-neutral-800 border-b pr-6 pl-6 items-center">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigateTo('dashboard')">
<div className="flex bg-white w-6 h-6 rounded-md items-center justify-center">
<div className="bg-neutral-950 w-3 h-3 rounded-none"></div>
</div>
<span className="font-medium text-white tracking-tight" style={{}}>VARD CONSULTING</span>
</div>
</div>
<div className="p-4 space-y-8 overflow-y-auto">

<div className="">
<h3 className="px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Overview</h3>
<nav className="space-y-0.5">
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-white bg-neutral-900 rounded-md ring-1 ring-white/5 transition-all" id="nav-dashboard" onclick="navigateTo('dashboard')">
<svg className="lucide lucide-layout-grid w-4 h-4 text-neutral-400" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                        Dashboard
                    </button>

<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md transition-colors group" id="nav-database" onclick="navigateTo('database')">
<svg className="lucide lucide-database w-4 h-4 text-neutral-500 group-hover:text-neutral-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                        Database
                    </button>
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md transition-colors group" id="nav-inbox" onclick="navigateTo('inbox')">
<svg className="lucide lucide-inbox w-4 h-4 text-neutral-500 group-hover:text-neutral-400" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                        Inbox &amp; Replies
                        <span className="ml-auto text-xs bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20">4</span>
</button>
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md transition-colors group" id="nav-meetings" onclick="navigateTo('meetings')">
<svg className="lucide lucide-calendar-days w-4 h-4 text-neutral-500 group-hover:text-neutral-400" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                        Meetings
                    </button>
</nav>
</div>

<div className="">
<h3 className="px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Reports</h3>
<nav className="space-y-0.5">
<button className="flex hover:text-white hover:bg-neutral-900/50 transition-colors group text-sm text-neutral-400 w-full rounded-md pt-2 pr-2 pb-2 pl-2 gap-x-3 gap-y-3 items-center" id="nav-onboarded" onclick="navigateTo('onboarded')">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500/70 group-hover:text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                        Onboarded Clients
                    </button>
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md transition-colors group" id="nav-rejected" onclick="navigateTo('rejected')">
<svg className="lucide lucide-x-circle w-4 h-4 text-red-500/70 group-hover:text-red-400" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                        Rejected Leads
                    </button>
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md transition-colors group" id="nav-performance" onclick="navigateTo('performance')">
<svg className="lucide lucide-bar-chart-3 w-4 h-4 text-neutral-500 group-hover:text-neutral-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                        Performance YoY
                    </button>
</nav>
</div>

<div className="pt-4 border-t border-neutral-800">
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md transition-colors group" id="nav-settings" onclick="navigateTo('settings')">
<svg className="lucide lucide-settings-2 w-4 h-4 text-neutral-500 group-hover:text-neutral-400" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                    Settings
                </button>
</div>
</div>

<div className="mt-auto p-4 border-t border-neutral-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 border border-neutral-600 flex items-center justify-center text-xs font-bold text-white">AC</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Alex Consult</span>
<span className="text-xs text-neutral-500">Head of Growth</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative bg-neutral-950">

<header className="h-16 border-b border-neutral-800 flex items-center justify-between px-6 md:px-8 shrink-0 bg-neutral-950/80 backdrop-blur-md z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-neutral-400">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<nav className="hidden md:flex items-center gap-2 text-sm text-neutral-500">
<span className="hover:text-neutral-300 cursor-pointer" onclick="navigateTo('dashboard')">Pipeline</span>
<svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-700" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-white font-medium" id="header-title">Dashboard</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative group hidden sm:block">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-hover:text-neutral-400 transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-neutral-900/50 border border-neutral-800 text-sm rounded-md pl-9 pr-4 py-1.5 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 w-64 text-neutral-300 placeholder:text-neutral-600 transition-all" placeholder="Search companies..." type="text"/>
</div>
<div className="h-4 w-px bg-neutral-800 hidden sm:block"></div>
<button className="relative text-neutral-400 hover:text-white transition-colors" onclick="navigateTo('inbox')">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth relative">

<div className="view-section" id="view-dashboard">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div className="">
<h1 className="text-2xl text-white font-medium tracking-tight">Outreach Performance</h1>
<p className="text-sm text-neutral-500 mt-1">Track engagement, onboarding status, and upcoming strategy sessions.</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500">Last 30 days</span>
<button className="flex items-center gap-2 bg-white text-neutral-950 text-xs font-medium px-3 py-1.5 rounded hover:bg-neutral-200 transition-colors shadow-sm hover:shadow" onclick="exportReport()">
<svg className="lucide lucide-download w-3 h-3" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            Export Report
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/20 flex flex-col gap-3 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Emails Sent</span>
<svg className="lucide lucide-send w-4 h-4 text-neutral-600" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl text-white font-medium tracking-tight">1,248</span>
<span className="text-xs text-emerald-500 mb-1">+12%</span>
</div>
</div>
<div className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/20 flex flex-col gap-3 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Reply Rate</span>
<svg className="lucide lucide-message-circle w-4 h-4 text-neutral-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl text-white font-medium tracking-tight">24.3%</span>
<span className="text-xs text-emerald-500 mb-1">+4.1%</span>
</div>
</div>
<div className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/20 flex flex-col gap-3 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Onboarded</span>
<svg className="lucide lucide-check-check w-4 h-4 text-neutral-600" data-lucide="check-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl text-white font-medium tracking-tight">18</span>
<span className="text-xs text-neutral-500 mb-1">This month</span>
</div>
</div>
<div className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/20 flex flex-col gap-3 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Rejection Rate</span>
<svg className="lucide lucide-alert-circle w-4 h-4 text-neutral-600" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl text-white font-medium tracking-tight">8.5%</span>
<span className="text-xs text-emerald-500 mb-1">-2.3%</span>
</div>
</div>
</div>

<div className="border border-neutral-800 rounded-lg bg-neutral-900/10 overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900/30">
<div className="flex items-center gap-1">
<button className="px-3 py-1 text-xs font-medium text-white bg-neutral-800 rounded border border-neutral-700">All Leads</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-neutral-300 rounded hover:bg-neutral-800/50 transition-colors" onclick="navigateTo('onboarded')">Onboarded</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-neutral-300 rounded hover:bg-neutral-800/50 transition-colors">In Negotiation</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-neutral-300 rounded hover:bg-neutral-800/50 transition-colors" onclick="navigateTo('rejected')">Rejected</button>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-neutral-800 rounded text-neutral-500 transition-colors">
<svg className="lucide lucide-filter w-3.5 h-3.5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse" id="dashboard-table">
<thead className="">
<tr className="border-b border-neutral-800 bg-neutral-900/20">
<th className="py-3 pl-4 pr-2 w-8"><input className="custom-checkbox" type="checkbox"/></th>
<th className="py-3 px-4 text-xs font-medium text-neutral-500 uppercase tracking-wider w-64">Company</th>
<th className="py-3 px-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Outreach Status</th>
<th className="py-3 px-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Metrics (YoY)</th>
<th className="py-3 px-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Process Stage</th>
<th className="py-3 px-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Next Meeting</th>
<th className="py-3 px-4 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800/50 text-sm" id="dashboard-table-body"><tr className="group hover:bg-neutral-900/40 transition-colors">
<td className="py-3 pl-4 pr-2 align-middle"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-4 align-middle">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded border flex items-center justify-center text-xs font-medium bg-indigo-500/20 border-indigo-500/30 text-indigo-300">AC</div>
<div>
<div className="text-white font-medium">Acme Corp</div>
<div className="text-xs text-neutral-500">acmecorp.com</div>
</div>
</div>
</td>
<td className="py-3 px-4 align-middle">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-neutral-300 text-xs">
<svg className="lucide lucide-reply w-3 h-3 text-neutral-500" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg> Replied
                            </div>
<span className="text-xs text-neutral-500">Recently</span>
</div>
</td>
<td className="py-3 px-4 align-middle">
<div className="flex flex-col gap-1.5">
<span className="text-xs text-neutral-400">240 Emp</span>
<div className="w-24 h-1 bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-[75%]"></div></div>
</div>
</td>
<td className="py-3 px-4 align-middle"><span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Onboarded</span></td>
<td className="py-3 px-4 align-middle"><span className="text-white text-xs font-medium">Oct 24 • 10:00 AM</span></td>
<td className="py-3 px-4 text-right align-middle"><button className="text-neutral-600 hover:text-white"><svg className="lucide lucide-more-vertical w-4 h-4" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button></td>
</tr><tr className="group hover:bg-neutral-900/40 transition-colors">
<td className="py-3 pl-4 pr-2 align-middle"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-4 align-middle">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded border flex items-center justify-center text-xs font-medium bg-neutral-800 border-neutral-700 text-neutral-400">ST</div>
<div>
<div className="text-white font-medium">Stark Tech</div>
<div className="text-xs text-neutral-500">stark.io</div>
</div>
</div>
</td>
<td className="py-3 px-4 align-middle">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-neutral-300 text-xs">
<svg className="lucide lucide-reply w-3 h-3 text-neutral-500" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg> Replied
                            </div>
<span className="text-xs text-neutral-500">Recently</span>
</div>
</td>
<td className="py-3 px-4 align-middle">
<div className="flex flex-col gap-1.5">
<span className="text-xs text-neutral-400">1 200 Emp</span>
<div className="w-24 h-1 bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-red-500 w-[40%]"></div></div>
</div>
</td>
<td className="py-3 px-4 align-middle"><span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border bg-red-500/10 text-red-400 border-red-500/20">Rejected</span></td>
<td className="py-3 px-4 align-middle"><span className="text-white text-xs font-medium">None</span></td>
<td className="py-3 px-4 text-right align-middle"><button className="text-neutral-600 hover:text-white"><svg className="lucide lucide-more-vertical w-4 h-4" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button></td>
</tr><tr className="group hover:bg-neutral-900/40 transition-colors">
<td className="py-3 pl-4 pr-2 align-middle"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-4 align-middle">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded border flex items-center justify-center text-xs font-medium bg-blue-500/20 border-blue-500/30 text-blue-300">GL</div>
<div>
<div className="text-white font-medium">Globex Inc</div>
<div className="text-xs text-neutral-500">globex.com</div>
</div>
</div>
</td>
<td className="py-3 px-4 align-middle">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-neutral-300 text-xs">
<svg className="lucide lucide-reply w-3 h-3 text-neutral-500" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg> Replied
                            </div>
<span className="text-xs text-neutral-500">Recently</span>
</div>
</td>
<td className="py-3 px-4 align-middle">
<div className="flex flex-col gap-1.5">
<span className="text-xs text-neutral-400">55 Emp</span>
<div className="w-24 h-1 bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[90%]"></div></div>
</div>
</td>
<td className="py-3 px-4 align-middle"><span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border bg-blue-500/10 text-blue-400 border-blue-500/20">Negotiation</span></td>
<td className="py-3 px-4 align-middle"><span className="text-white text-xs font-medium">Oct 26 • 2:30 PM</span></td>
<td className="py-3 px-4 text-right align-middle"><button className="text-neutral-600 hover:text-white"><svg className="lucide lucide-more-vertical w-4 h-4" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button></td>
</tr></tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden" id="view-database">
<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-2xl text-white font-medium tracking-tight">Leads Database</h1>
<p className="text-sm text-neutral-500 mt-1">Raw pipeline data and complete contact registry.</p>
</div>
<div className="flex items-center gap-2">
<button className="text-neutral-400 hover:text-white p-2">
<svg className="lucide lucide-columns w-4 h-4" data-lucide="columns" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M12 3v18"></path></svg>
</button>
<button className="text-neutral-400 hover:text-white p-2">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
<button className="bg-blue-600 text-white text-xs font-medium px-3 py-2 rounded hover:bg-blue-500 transition-colors flex items-center gap-2">
<svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            Add Record
                        </button>
</div>
</div>
<div className="border border-neutral-800 rounded-lg bg-neutral-900/10 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead className="bg-neutral-900/30">
<tr className="border-b border-neutral-800">
<th className="py-2.5 px-4 text-xs font-medium text-neutral-500 font-mono w-16">ID</th>
<th className="py-2.5 px-4 text-xs font-medium text-neutral-500">Company Name</th>
<th className="py-2.5 px-4 text-xs font-medium text-neutral-500">Primary Contact</th>
<th className="py-2.5 px-4 text-xs font-medium text-neutral-500">Status</th>
<th className="py-2.5 px-4 text-xs font-medium text-neutral-500 text-right">Deal Value</th>
<th className="py-2.5 px-4 text-xs font-medium text-neutral-500">Last Activity</th>
<th className="py-2.5 px-4 text-xs font-medium text-neutral-500">Assigned</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800/50 text-sm" id="database-table-body"><tr className="group hover:bg-neutral-900/30 transition-colors">
<td className="py-3 px-4 text-neutral-500 font-mono text-xs">LEAD-001</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-neutral-800 text-neutral-400">AC</div>
<span className="text-neutral-300 font-medium">Acme Corp</span>
</div>
</td>
<td className="py-3 px-4 text-neutral-400">John Doe</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border text-emerald-500 bg-emerald-500/10 border-emerald-500/20">Onboarded</span></td>
<td className="py-3 px-4 text-neutral-300 font-mono text-right">$12,500</td>
<td className="py-3 px-4 text-neutral-500">Oct 24 • 10:00 AM</td>
<td className="py-3 px-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900 flex items-center justify-center text-[10px] text-white">AC</div>
</div>
</td>
</tr><tr className="group hover:bg-neutral-900/30 transition-colors">
<td className="py-3 px-4 text-neutral-500 font-mono text-xs">LEAD-002</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-neutral-800 text-neutral-400">ST</div>
<span className="text-neutral-300 font-medium">Stark Tech</span>
</div>
</td>
<td className="py-3 px-4 text-neutral-400">Tony Stark</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border text-red-400 bg-red-500/10 border-red-500/20">Rejected</span></td>
<td className="py-3 px-4 text-neutral-300 font-mono text-right">$45,000</td>
<td className="py-3 px-4 text-neutral-500">None</td>
<td className="py-3 px-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900 flex items-center justify-center text-[10px] text-white">AC</div>
</div>
</td>
</tr><tr className="group hover:bg-neutral-900/30 transition-colors">
<td className="py-3 px-4 text-neutral-500 font-mono text-xs">LEAD-003</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-neutral-800 text-neutral-400">GL</div>
<span className="text-neutral-300 font-medium">Globex Inc</span>
</div>
</td>
<td className="py-3 px-4 text-neutral-400">Hank Scorpio</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border text-blue-400 bg-blue-500/10 border-blue-500/20">Negotiation</span></td>
<td className="py-3 px-4 text-neutral-300 font-mono text-right">$8,200</td>
<td className="py-3 px-4 text-neutral-500">Oct 26 • 2:30 PM</td>
<td className="py-3 px-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900 flex items-center justify-center text-[10px] text-white">AC</div>
</div>
</td>
</tr><tr className="group hover:bg-neutral-900/30 transition-colors">
<td className="py-3 px-4 text-neutral-500 font-mono text-xs">LEAD-004</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-neutral-800 text-neutral-400">CY</div>
<span className="text-neutral-300 font-medium">Cyberdyne</span>
</div>
</td>
<td className="py-3 px-4 text-neutral-400">Miles Dyson</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border text-amber-500 bg-amber-500/10 border-amber-500/20">Discovery</span></td>
<td className="py-3 px-4 text-neutral-300 font-mono text-right">$110,000</td>
<td className="py-3 px-4 text-neutral-500">2 days ago</td>
<td className="py-3 px-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900 flex items-center justify-center text-[10px] text-white">AC</div>
</div>
</td>
</tr><tr className="group hover:bg-neutral-900/30 transition-colors">
<td className="py-3 px-4 text-neutral-500 font-mono text-xs">LEAD-005</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-neutral-800 text-neutral-400">MD</div>
<span className="text-neutral-300 font-medium">Massive Dynamic</span>
</div>
</td>
<td className="py-3 px-4 text-neutral-400">Nina Sharp</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border text-amber-500 bg-amber-500/10 border-amber-500/20">Discovery</span></td>
<td className="py-3 px-4 text-neutral-300 font-mono text-right">$250,000</td>
<td className="py-3 px-4 text-neutral-500">1 week ago</td>
<td className="py-3 px-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900 flex items-center justify-center text-[10px] text-white">AC</div>
</div>
</td>
</tr><tr className="group hover:bg-neutral-900/30 transition-colors">
<td className="py-3 px-4 text-neutral-500 font-mono text-xs">LEAD-006</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-neutral-800 text-neutral-400">HO</div>
<span className="text-neutral-300 font-medium">Hooli</span>
</div>
</td>
<td className="py-3 px-4 text-neutral-400">Gavin Belson</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border text-red-400 bg-red-500/10 border-red-500/20">Rejected</span></td>
<td className="py-3 px-4 text-neutral-300 font-mono text-right">$95,000</td>
<td className="py-3 px-4 text-neutral-500">Sep 12</td>
<td className="py-3 px-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900 flex items-center justify-center text-[10px] text-white">AC</div>
</div>
</td>
</tr><tr className="group hover:bg-neutral-900/30 transition-colors">
<td className="py-3 px-4 text-neutral-500 font-mono text-xs">LEAD-007</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-neutral-800 text-neutral-400">IN</div>
<span className="text-neutral-300 font-medium">Initech</span>
</div>
</td>
<td className="py-3 px-4 text-neutral-400">Peter Gibbons</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border text-blue-400 bg-blue-500/10 border-blue-500/20">Proposal</span></td>
<td className="py-3 px-4 text-neutral-300 font-mono text-right">$5,000</td>
<td className="py-3 px-4 text-neutral-500">Yesterday</td>
<td className="py-3 px-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900 flex items-center justify-center text-[10px] text-white">AC</div>
</div>
</td>
</tr><tr className="group hover:bg-neutral-900/30 transition-colors">
<td className="py-3 px-4 text-neutral-500 font-mono text-xs">LEAD-008</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-neutral-800 text-neutral-400">UC</div>
<span className="text-neutral-300 font-medium">Umbrella Corp</span>
</div>
</td>
<td className="py-3 px-4 text-neutral-400">Albert Wesker</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border text-emerald-500 bg-emerald-500/10 border-emerald-500/20">Onboarded</span></td>
<td className="py-3 px-4 text-neutral-300 font-mono text-right">$500,000</td>
<td className="py-3 px-4 text-neutral-500">Oct 20</td>
<td className="py-3 px-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900 flex items-center justify-center text-[10px] text-white">AC</div>
</div>
</td>
</tr></tbody>
</table>
</div>
<div className="flex items-center justify-between px-4 py-2 border-t border-neutral-800 bg-neutral-900/30">
<span className="text-xs text-neutral-500" id="db-count">Showing 8 records</span>
<div className="flex gap-1">
<button className="p-1 rounded hover:bg-neutral-800 text-neutral-500"><svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="p-1 rounded hover:bg-neutral-800 text-neutral-500"><svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-inbox">
<h1 className="text-2xl text-white font-medium tracking-tight mb-6">Inbox &amp; Replies</h1>
<div className="border border-neutral-800 rounded-lg bg-neutral-900/10 divide-y divide-neutral-800">

<div className="p-4 hover:bg-neutral-900/30 cursor-pointer transition-colors flex gap-4">
<div className="mt-1 relative">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-medium text-white">JD</div>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-neutral-950"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-white">John Doe (Acme Corp)</span>
<span className="text-xs text-neutral-500">10m ago</span>
</div>
<p className="text-sm text-neutral-400 font-medium">Re: Strategy Kickoff</p>
<p className="text-xs text-neutral-500 mt-1 line-clamp-1">Sounds great, Alex. I'll bring the technical team to the meeting as discussed...</p>
</div>
</div>

<div className="p-4 hover:bg-neutral-900/30 cursor-pointer transition-colors flex gap-4 bg-neutral-900/10">
<div className="mt-1 relative">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300">AS</div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-neutral-300">Alice Smith (Globex)</span>
<span className="text-xs text-neutral-500">2h ago</span>
</div>
<p className="text-sm text-neutral-500">Re: Proposal Review</p>
<p className="text-xs text-neutral-600 mt-1 line-clamp-1">We've reviewed the numbers. Can we schedule a quick call to discuss term 3.b?</p>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-meetings">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl text-white font-medium tracking-tight">Upcoming Meetings</h1>
<button className="text-xs bg-white text-neutral-950 px-3 py-1.5 rounded font-medium hover:bg-neutral-200">New Event</button>
</div>
<div className="space-y-4">
<div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/10 flex gap-4 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
<div className="flex flex-col items-center justify-center w-16 border-r border-neutral-800 pr-4">
<span className="text-xs text-neutral-500 uppercase font-medium">OCT</span>
<span className="text-xl text-white font-bold">24</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Acme Corp Kickoff</h3>
<span className="text-xs text-neutral-500">10:00 AM - 11:00 AM</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Strategy onboarding and Q4 planning.</p>
<div className="flex items-center gap-2 mt-3">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900"></div>
<div className="w-6 h-6 rounded-full bg-neutral-600 border border-neutral-900"></div>
</div>
<span className="text-xs text-neutral-500">+3 attendees</span>
</div>
</div>
</div>
<div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/10 flex gap-4 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
<div className="flex flex-col items-center justify-center w-16 border-r border-neutral-800 pr-4">
<span className="text-xs text-neutral-500 uppercase font-medium">OCT</span>
<span className="text-xl text-white font-bold">26</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Globex Negotiation</h3>
<span className="text-xs text-neutral-500">2:30 PM - 3:15 PM</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Finalizing contract terms.</p>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-onboarded">
<h1 className="text-2xl text-white font-medium tracking-tight mb-6">Onboarded Clients</h1>
<div className="border border-neutral-800 rounded-lg bg-neutral-900/10 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-neutral-800 bg-neutral-900/20">
<th className="py-3 px-4 text-xs font-medium text-neutral-500 uppercase">Company</th>
<th className="py-3 px-4 text-xs font-medium text-neutral-500 uppercase">Status</th>
<th className="py-3 px-4 text-xs font-medium text-neutral-500 uppercase">Revenue</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800/50 text-sm">
<tr>
<td className="py-3 px-4 text-white">Acme Corp</td>
<td className="py-3 px-4"><span className="text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded text-xs border border-emerald-500/20">Active</span></td>
<td className="py-3 px-4 text-neutral-400">$12,500/mo</td>
</tr>
<tr>
<td className="py-3 px-4 text-white">Beta LLC</td>
<td className="py-3 px-4"><span className="text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded text-xs border border-emerald-500/20">Active</span></td>
<td className="py-3 px-4 text-neutral-400">$8,000/mo</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden" id="view-rejected">
<h1 className="text-2xl text-white font-medium tracking-tight mb-6">Rejected Leads</h1>
<div className="border border-neutral-800 rounded-lg bg-neutral-900/10 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-neutral-800 bg-neutral-900/20">
<th className="py-3 px-4 text-xs font-medium text-neutral-500 uppercase">Company</th>
<th className="py-3 px-4 text-xs font-medium text-neutral-500 uppercase">Reason</th>
<th className="py-3 px-4 text-xs font-medium text-neutral-500 uppercase">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800/50 text-sm">
<tr>
<td className="py-3 px-4 text-neutral-400">Stark Tech</td>
<td className="py-3 px-4"><span className="text-red-400">Budget Constraints</span></td>
<td className="py-3 px-4 text-neutral-500">Oct 12</td>
</tr>
<tr>
<td className="py-3 px-4 text-neutral-400">Wayne Ent</td>
<td className="py-3 px-4"><span className="text-red-400">Competitor Selected</span></td>
<td className="py-3 px-4 text-neutral-500">Sep 28</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden" id="view-performance">
<h1 className="text-2xl text-white font-medium tracking-tight mb-6">Performance Year over Year</h1>
<div className="grid gap-6">
<div className="p-6 border border-neutral-800 rounded-lg bg-neutral-900/10">
<h3 className="text-sm text-neutral-500 mb-4 uppercase font-medium">Revenue Growth</h3>
<div className="flex items-end gap-4 h-48 border-b border-neutral-800 pb-2 px-2">
<div className="w-full bg-neutral-800 rounded-t relative group">
<div className="absolute bottom-0 w-full bg-blue-600/50 rounded-t h-[40%] transition-all group-hover:bg-blue-500"></div>
<div className="absolute -top-6 w-full text-center text-xs text-neutral-500">Q1</div>
</div>
<div className="w-full bg-neutral-800 rounded-t relative group">
<div className="absolute bottom-0 w-full bg-blue-600/50 rounded-t h-[55%] transition-all group-hover:bg-blue-500"></div>
<div className="absolute -top-6 w-full text-center text-xs text-neutral-500">Q2</div>
</div>
<div className="w-full bg-neutral-800 rounded-t relative group">
<div className="absolute bottom-0 w-full bg-blue-600/50 rounded-t h-[75%] transition-all group-hover:bg-blue-500"></div>
<div className="absolute -top-6 w-full text-center text-xs text-neutral-500">Q3</div>
</div>
<div className="w-full bg-neutral-800 rounded-t relative group">
<div className="absolute bottom-0 w-full bg-blue-600 rounded-t h-[90%] transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"></div>
<div className="absolute -top-6 w-full text-center text-xs text-white font-bold">Q4</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden" id="view-settings">
<h1 className="text-2xl text-white font-medium tracking-tight mb-6">Account Settings</h1>
<div className="max-w-2xl space-y-8">

<div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/10">
<h3 className="text-lg font-medium text-white mb-4">Profile Information</h3>
<div className="grid gap-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Full Name</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:border-neutral-600 focus:outline-none" type="text" value="Alex Consult"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Email Address</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:border-neutral-600 focus:outline-none" type="email" value="alex@nexus.com"/>
</div>
</div>
</div>

<div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/10">
<h3 className="text-lg font-medium text-white mb-4">Notifications</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-white">Email Alerts</div>
<div className="text-xs text-neutral-500">Receive digests on daily progress</div>
</div>
<div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-white">Lead Status Changes</div>
<div className="text-xs text-neutral-500">Notify when a lead is onboarded or rejected</div>
</div>
<div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
