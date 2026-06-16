import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
border: "hsl(var(--border))",
input: "hsl(var(--input))",
ring: "hsl(var(--ring))",
background: "hsl(var(--background))",
foreground: "hsl(var(--foreground))",
primary: {
DEFAULT: "hsl(var(--primary))",
foreground: "hsl(var(--primary-foreground))",
},
secondary: {
DEFAULT: "hsl(var(--secondary))",
foreground: "hsl(var(--secondary-foreground))",
},
destructive: {
DEFAULT: "hsl(var(--destructive))",
foreground: "hsl(var(--destructive-foreground))",
},
muted: {
DEFAULT: "hsl(var(--muted))",
foreground: "hsl(var(--muted-foreground))",
},
accent: {
DEFAULT: "hsl(var(--accent))",
foreground: "hsl(var(--accent-foreground))",
},
popover: {
DEFAULT: "hsl(var(--popover))",
foreground: "hsl(var(--popover-foreground))",
},
card: {
DEFAULT: "hsl(var(--card))",
foreground: "hsl(var(--card-foreground))",
},
},
borderRadius: {
lg: "var(--radius)",
md: "calc(var(--radius) - 2px)",
sm: "calc(var(--radius) - 4px)",
},
}
}
}



        // Icons
        lucide.createIcons();

        // Router Logic
        function setPage(pageId, event) {
            if(event) event.preventDefault();
            
            // Hide all pages
            document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
            
            // Show selected
            const target = document.getElementById('page-' + pageId);
            if(target) {
                target.classList.remove('hidden');
            } else {
                console.warn('Page not found:', pageId);
                // Fallback
                const dash = document.getElementById('page-dashboard');
                if(dash) dash.classList.remove('hidden');
            }

            // Update Sidebar Active State
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('active', 'text-accent-foreground');
                el.classList.add('text-muted-foreground');
            });
            
            const activeNav = document.getElementById('nav-' + pageId);
            if(activeNav) {
                activeNav.classList.remove('text-muted-foreground');
                activeNav.classList.add('active', 'text-accent-foreground');
            }

            // Update Breadcrumb
            const breadcrumb = document.getElementById('breadcrumb-current');
            if(breadcrumb) {
                breadcrumb.innerText = pageId.charAt(0).toUpperCase() + pageId.slice(1);
            }
        }

        // Sidebar Toggle
        const sidebar = document.getElementById('sidebar');
        const sidebarTexts = document.querySelectorAll('.sidebar-text');
        let isCollapsed = false;

        function toggleSidebar() {
            if (window.innerWidth < 768) {
                sidebar.classList.toggle('hidden');
                sidebar.classList.toggle('absolute');
                sidebar.classList.toggle('h-full');
            } else {
                isCollapsed = !isCollapsed;
                if(isCollapsed) {
                    sidebar.classList.remove('w-64');
                    sidebar.classList.add('w-20');
                    sidebarTexts.forEach(t => t.classList.add('hidden'));
                } else {
                    sidebar.classList.remove('w-20');
                    sidebar.classList.add('w-64');
                    sidebarTexts.forEach(t => t.classList.remove('hidden'));
                }
            }
        }

        // Modal Logic
        function toggleModal(id) {
            const modal = document.getElementById(id);
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
            } else {
                modal.classList.add('hidden');
            }
        }

        // Init
        // setPage('dashboard'); // Default
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen w-full" id="app">

<aside className="hidden md:flex flex-col w-64 border-r border-border bg-card transition-all duration-300 ease-in-out h-full z-30 shrink-0" id="sidebar">

<div className="h-16 flex items-center px-6 border-b border-border gap-2">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg tracking-tighter">
                    MC
                </div>
<span className="font-semibold text-lg tracking-tight sidebar-text">MedCore</span>
</div>

<div className="flex-1 overflow-y-auto py-4">
<nav className="space-y-1 px-3">

<div className="mb-4">
<h3 className="px-3 text-xs font-medium text-muted-foreground mb-2 sidebar-text">MAIN</h3>
<a className="nav-item active flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md group hover:bg-secondary/50 hover:text-foreground" href="#" id="nav-dashboard" onclick="setPage('dashboard', event)">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="sidebar-text">Dashboard</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors group" href="#" id="nav-doctors" onclick="setPage('doctors', event)">
<svg className="lucide lucide-stethoscope w-4 h-4" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
<span className="sidebar-text">Doctors</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors group" href="#" id="nav-patients" onclick="setPage('patients', event)">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="sidebar-text">Patients</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors group" href="#" id="nav-appointments" onclick="setPage('appointments', event)">
<svg className="lucide lucide-calendar-days w-4 h-4" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span className="sidebar-text">Appointments</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors group" href="#" id="nav-payments" onclick="setPage('payments', event)">
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span className="sidebar-text">Payments</span>
</a>
</div>

<div className="mb-4">
<h3 className="px-3 text-xs font-medium text-muted-foreground mb-2 sidebar-text">ACCESS CONTROL</h3>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors group" href="#" id="nav-permissions" onclick="setPage('permissions', event)">
<svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="sidebar-text">Permissions</span>
</a>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-muted-foreground mb-2 sidebar-text">SYSTEM</h3>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors group" href="#" id="nav-logs" onclick="setPage('logs', event)">
<svg className="lucide lucide-scroll-text w-4 h-4" data-lucide="scroll-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12h-5"></path><path d="M15 8h-5"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></svg>
<span className="sidebar-text">Audit Logs</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors group" href="#" id="nav-settings" onclick="setPage('settings', event)">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="sidebar-text">Settings</span>
</a>
</div>
</nav>
</div>

<div className="p-4 border-t border-border">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-700 flex items-center justify-center text-xs font-medium border border-border">
                        JW
                    </div>
<div className="flex-1 min-w-0 sidebar-text">
<p className="text-sm font-medium text-foreground truncate">James Wilson</p>
<p className="text-xs text-muted-foreground truncate">admin@clinic.com</p>
</div>
<button className="text-muted-foreground hover:text-foreground sidebar-text">
<svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-background/50">

<header className="h-16 flex items-center justify-between px-6 border-b border-border bg-card/80 backdrop-blur sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="p-2 rounded-md hover:bg-secondary text-muted-foreground" onclick="toggleSidebar()">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<div className="hidden sm:flex items-center text-sm text-muted-foreground">
<span className="hover:text-foreground cursor-pointer">Home</span>
<svg className="lucide lucide-chevron-right w-4 h-4 mx-1 opacity-50" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-foreground font-medium" id="breadcrumb-current">Dashboard</span>
</div>
</div>
<div className="flex items-center gap-3">

<div className="relative hidden sm:block">
<svg className="lucide lucide-search absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="pl-9 pr-4 h-9 w-64 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/70" placeholder="Search... (Cmd+K)" type="text"/>
<div className="absolute right-2 top-2 px-1.5 py-0.5 rounded border border-border bg-secondary text-[10px] text-muted-foreground font-mono">⌘K</div>
</div>

<button className="p-2 rounded-full hover:bg-secondary text-muted-foreground relative">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-card"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto md:p-8 scroll-smooth pt-6 pr-6 pb-6 pl-6 space-y-8" id="content-area">

<div className="page-view space-y-8" id="page-dashboard">
<div className="flex items-center justify-between">
<div className="">
<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
<p className="text-muted-foreground mt-1">Overview of clinic performance and daily activities.</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-md text-sm font-medium hover:bg-secondary/80">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Jan 20, 2024 - Feb 20, 2024</span>
</button>
<button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-colors">
                                Download Report
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="rounded-xl border border-border bg-card p-6 shadow-sm">
<div className="flex items-center justify-between space-y-0 pb-2">
<p className="text-sm font-medium text-muted-foreground">Total Patients</p>
<svg className="lucide lucide-users h-4 w-4 text-muted-foreground" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="flex items-center justify-between pt-2">
<div className="text-2xl font-bold">2,847</div>
<div className="text-xs font-medium text-emerald-500 flex items-center">
<svg className="lucide lucide-trending-up w-3 h-3 mr-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +12.5%
                                </div>
</div>
</div>

<div className="rounded-xl border border-border bg-card p-6 shadow-sm">
<div className="flex items-center justify-between space-y-0 pb-2">
<p className="text-sm font-medium text-muted-foreground">Today's Appointments</p>
<svg className="lucide lucide-calendar-check h-4 w-4 text-muted-foreground" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<div className="flex items-center justify-between pt-2">
<div className="text-2xl font-bold">24</div>
<div className="text-xs font-medium text-amber-500 flex items-center">
<svg className="lucide lucide-clock w-3 h-3 mr-1" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 3 pending
                                </div>
</div>
</div>

<div className="rounded-xl border border-border bg-card p-6 shadow-sm">
<div className="flex items-center justify-between space-y-0 pb-2">
<p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
<svg className="lucide lucide-dollar-sign h-4 w-4 text-muted-foreground" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div className="flex items-center justify-between pt-2">
<div className="text-2xl font-bold">$48,290</div>
<div className="text-xs font-medium text-emerald-500 flex items-center">
<svg className="lucide lucide-trending-up w-3 h-3 mr-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +8.2%
                                </div>
</div>
</div>

<div className="rounded-xl border border-border bg-card p-6 shadow-sm">
<div className="flex items-center justify-between space-y-0 pb-2">
<p className="text-sm font-medium text-muted-foreground">Active Doctors</p>
<svg className="lucide lucide-activity h-4 w-4 text-muted-foreground" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="flex items-center justify-between pt-2">
<div className="text-2xl font-bold">12</div>
<div className="text-xs font-medium text-blue-500 flex items-center">
<svg className="lucide lucide-user-check w-3 h-3 mr-1" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg> +2 new
                                </div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-7 gap-6">

<div className="col-span-1 lg:col-span-4 rounded-xl border border-border bg-card p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold">Revenue Overview</h3>
<div className="flex items-center gap-1 text-xs bg-secondary p-1 rounded-lg">
<button className="px-2 py-1 rounded-md bg-background shadow-sm text-foreground">Monthly</button>
<button className="px-2 py-1 rounded-md text-muted-foreground hover:text-foreground">Weekly</button>
</div>
</div>

<div className="h-[300px] w-full flex items-end justify-between gap-2 px-2 mt-8">
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[40%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$12k</div></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm h-[55%] relative group"></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[45%] relative group"></div>
<div className="w-full bg-emerald-500/40 rounded-t-sm h-[70%] relative group"></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm h-[60%] relative group"></div>
<div className="w-full bg-emerald-500/50 rounded-t-sm h-[85%] relative group"></div>
<div className="w-full bg-emerald-500/60 rounded-t-sm h-[75%] relative group"></div>
<div className="w-full bg-emerald-500/80 rounded-t-sm h-[95%] relative group"></div>
</div>
<div className="flex justify-between text-xs text-muted-foreground mt-4 px-2">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
</div>
</div>

<div className="col-span-1 lg:col-span-3 rounded-xl border border-border bg-card flex flex-col">
<div className="p-6 border-b border-border">
<h3 className="font-semibold">Recent Appointments</h3>
<p className="text-sm text-muted-foreground">You have 24 appointments today.</p>
</div>
<div className="p-0 flex-1 overflow-auto">
<table className="w-full text-sm text-left">
<tbody className="divide-y divide-border">

<tr className="hover:bg-muted/50 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium">OM</div>
<div>
<div className="font-medium">Olivia Martin</div>
<div className="text-xs text-muted-foreground">Dr. Sarah Mitchell</div>
</div>
</div>
</td>
<td className="p-4 text-right">
<div className="font-medium text-foreground">09:00 AM</div>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500">Confirmed</span>
</td>
</tr>

<tr className="hover:bg-muted/50 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium">JL</div>
<div>
<div className="font-medium">Jackson Lee</div>
<div className="text-xs text-muted-foreground">Dr. James Wilson</div>
</div>
</div>
</td>
<td className="p-4 text-right">
<div className="font-medium text-foreground">10:30 AM</div>
<span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-500">Pending</span>
</td>
</tr>

<tr className="hover:bg-muted/50 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium">IN</div>
<div>
<div className="font-medium">Isabella Nguyen</div>
<div className="text-xs text-muted-foreground">Dr. Sarah Mitchell</div>
</div>
</div>
</td>
<td className="p-4 text-right">
<div className="font-medium text-foreground">11:00 AM</div>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500">Confirmed</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-border">
<button className="w-full text-sm text-primary hover:underline text-center" onclick="setPage('appointments', event)">View all appointments</button>
</div>
</div>
</div>
</div>

<div className="page-view hidden space-y-6" id="page-appointments">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold tracking-tight">Appointments</h1>
<p className="text-muted-foreground">Manage patient appointments and schedules.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-secondary rounded-lg p-1 text-xs font-medium">
<button className="px-3 py-1.5 rounded-md bg-background shadow text-foreground">List</button>
<button className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground">Calendar</button>
</div>
<button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-all" onclick="toggleModal('modal-appointment')">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> New Appointment
                            </button>
</div>
</div>

<div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border">
<div className="relative flex-1 max-w-sm">
<svg className="lucide lucide-search absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="pl-9 h-10 w-full rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Filter patients or doctors..." type="text"/>
</div>
<div className="h-10 w-px bg-border"></div>
<button className="flex items-center gap-2 px-3 py-2 border border-dashed border-input rounded-md text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg> Status
                        </button>
<button className="flex items-center gap-2 px-3 py-2 border border-dashed border-input rounded-md text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Date Range
                        </button>
</div>

<div className="rounded-xl border border-border bg-card overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="bg-secondary/50 text-muted-foreground border-b border-border font-medium">
<tr>
<th className="h-12 px-4 w-10"><input className="rounded border-input bg-transparent text-primary focus:ring-primary" type="checkbox"/></th>
<th className="h-12 px-4">Appointment ID</th>
<th className="h-12 px-4">Patient</th>
<th className="h-12 px-4">Doctor</th>
<th className="h-12 px-4">Date &amp; Time</th>
<th className="h-12 px-4">Type</th>
<th className="h-12 px-4">Status</th>
<th className="h-12 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-border">
<tr className="hover:bg-muted/50 group transition-colors">
<td className="px-4 py-3"><input className="rounded border-input bg-transparent text-primary focus:ring-primary" type="checkbox"/></td>
<td className="px-4 py-3 font-mono text-xs text-muted-foreground">#APT-2409</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">JD</div>
<span className="font-medium">John Doe</span>
</div>
</td>
<td className="px-4 py-3 text-muted-foreground">Dr. Sarah Mitchell</td>
<td className="px-4 py-3">Jan 15, 2024 <span className="text-xs text-muted-foreground ml-1">10:00 AM</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-foreground">Consultation</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500">Confirmed</span></td>
<td className="px-4 py-3 text-right">
<button className="p-2 hover:bg-secondary rounded-md text-muted-foreground hover:text-foreground"><svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>

</tbody>
</table>
</div>
<div className="p-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
<span>Showing 1-10 of 56 appointments</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1 border border-input rounded-md hover:bg-secondary disabled:opacity-50" disabled="">Previous</button>
<button className="px-3 py-1 border border-input rounded-md hover:bg-secondary text-foreground">Next</button>
</div>
</div>
</div>
</div>

<div className="page-view hidden space-y-8" id="page-permissions">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold tracking-tight">Access Control</h1>
<p className="text-muted-foreground">Manage roles, permissions and user access.</p>
</div>
<button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">Create New Role</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl border border-border bg-card p-6 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2">
<h3 className="font-semibold text-lg">Super Admin</h3>
<svg className="lucide lucide-lock w-3 h-3 text-muted-foreground" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" title="System Role" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<p className="text-sm text-muted-foreground mt-1">Full system access control.</p>
</div>
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-medium">1</span>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between text-sm">
<span className="text-muted-foreground">Permissions</span>
<span className="font-mono text-emerald-500">ALL (42)</span>
</div>
<div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-full"></div>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 px-3 py-2 bg-secondary hover:bg-secondary/80 text-sm font-medium rounded-md transition-colors">View Access</button>
<button className="px-3 py-2 border border-border hover:bg-secondary rounded-md text-muted-foreground" disabled=""><svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
</div>
</div>

<div className="rounded-xl border border-border bg-card p-6 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-semibold text-lg">Doctor</h3>
<p className="text-sm text-muted-foreground mt-1">Manage own patients &amp; appts.</p>
</div>
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-medium">8</span>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between text-sm">
<span className="text-muted-foreground">Permissions</span>
<span className="font-mono text-blue-500">15</span>
</div>
<div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-[45%]"></div>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 px-3 py-2 bg-secondary hover:bg-secondary/80 text-sm font-medium rounded-md transition-colors">Edit Role</button>
<button className="px-3 py-2 border border-border hover:bg-secondary hover:text-destructive rounded-md text-muted-foreground transition-colors"><svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
</div>
</div>
</div>
</div>

<div className="page-view hidden space-y-8" id="page-doctors">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold tracking-tight">Doctors</h1>
<p className="text-muted-foreground">Directory of all medical staff.</p>
</div>
<button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">Add Doctor</button>
</div>
<div className="flex flex-col items-center justify-center h-64 border border-dashed border-border rounded-xl bg-card/50">
<svg className="lucide lucide-stethoscope text-muted-foreground/50 mb-4" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
<p className="text-muted-foreground font-medium">No doctors configured yet.</p>
</div>
</div>
<div className="page-view hidden space-y-8" id="page-patients">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold tracking-tight">Patients</h1>
<p className="text-muted-foreground">Manage patient records and history.</p>
</div>
<button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">Add Patient</button>
</div>
<div className="flex flex-col items-center justify-center h-64 border border-dashed border-border rounded-xl bg-card/50">
<svg className="lucide lucide-users text-muted-foreground/50 mb-4" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<p className="text-muted-foreground font-medium">Patient list is empty.</p>
</div>
</div>
<div className="page-view hidden space-y-8" id="page-payments">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold tracking-tight">Payments</h1>
<p className="text-muted-foreground">Financial records and billing.</p>
</div>
</div>
<div className="flex flex-col items-center justify-center h-64 border border-dashed border-border rounded-xl bg-card/50">
<svg className="lucide lucide-credit-card text-muted-foreground/50 mb-4" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<p className="text-muted-foreground font-medium">No transactions recorded.</p>
</div>
</div>
<div className="page-view hidden space-y-8" id="page-logs">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold tracking-tight">Audit Logs</h1>
<p className="text-muted-foreground">System activity and security logs.</p>
</div>
</div>
<div className="flex flex-col items-center justify-center h-64 border border-dashed border-border rounded-xl bg-card/50">
<svg className="lucide lucide-scroll-text text-muted-foreground/50 mb-4" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M15 12h-5"></path><path d="M15 8h-5"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></svg>
<p className="text-muted-foreground font-medium">No logs available.</p>
</div>
</div>
<div className="page-view hidden space-y-8" id="page-settings">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold tracking-tight">Settings</h1>
<p className="text-muted-foreground">General system configuration.</p>
</div>
</div>
<div className="flex flex-col items-center justify-center h-64 border border-dashed border-border rounded-xl bg-card/50">
<svg className="lucide lucide-settings text-muted-foreground/50 mb-4" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<p className="text-muted-foreground font-medium">Settings are restricted.</p>
</div>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-50 hidden" id="modal-appointment">

<div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onclick="toggleModal('modal-appointment')"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl flex flex-col max-h-[90vh]">
<div className="flex items-center justify-between px-6 py-4 border-b border-border">
<div>
<h2 className="text-lg font-semibold">Schedule Appointment</h2>
<p className="text-sm text-muted-foreground">Add a new appointment for a patient.</p>
</div>
<button className="text-muted-foreground hover:text-foreground" onclick="toggleModal('modal-appointment')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium">Patient <span className="text-red-500">*</span></label>
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="pl-9 w-full h-10 rounded-md border border-input bg-slate-950 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="Search patients..." type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Department</label>
<select className="flex h-10 w-full rounded-md border border-input bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
<option>Cardiology</option>
<option>General Practice</option>
<option>Pediatrics</option>
</select>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium">Doctor <span className="text-red-500">*</span></label>
<select className="flex h-10 w-full rounded-md border border-input bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
<option>Dr. Sarah Mitchell (Cardiology) - Available Today</option>
<option>Dr. James Wilson (General) - Available 14:00</option>
</select>
</div>

<div className="border border-border rounded-lg p-4 bg-secondary/20">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar w-4 h-4 text-primary" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-medium text-sm">January 15, 2024</span>
</div>
<span className="text-xs text-muted-foreground">Time Zone: EST</span>
</div>
<div className="space-y-2">
<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Morning</p>
<div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
<button className="px-3 py-2 text-xs font-medium rounded-md bg-secondary hover:bg-primary/20 hover:text-primary border border-transparent hover:border-primary transition-all">09:00</button>
<button className="px-3 py-2 text-xs font-medium rounded-md bg-secondary opacity-50 cursor-not-allowed decoration-slice line-through">09:30</button>
<button className="px-3 py-2 text-xs font-medium rounded-md bg-primary text-primary-foreground shadow-sm ring-2 ring-primary ring-offset-2 ring-offset-card">10:00</button>
<button className="px-3 py-2 text-xs font-medium rounded-md bg-secondary hover:bg-primary/20 hover:text-primary transition-all">10:30</button>
<button className="px-3 py-2 text-xs font-medium rounded-md bg-secondary hover:bg-primary/20 hover:text-primary transition-all">11:00</button>
<button className="px-3 py-2 text-xs font-medium rounded-md bg-secondary hover:bg-primary/20 hover:text-primary transition-all">11:30</button>
</div>
</div>
<div className="space-y-2 mt-4">
<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Afternoon</p>
<div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
<button className="px-3 py-2 text-xs font-medium rounded-md bg-secondary hover:bg-primary/20 hover:text-primary transition-all">13:00</button>
<button className="px-3 py-2 text-xs font-medium rounded-md bg-secondary hover:bg-primary/20 hover:text-primary transition-all">13:30</button>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium">Reason for Visit</label>
<textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Brief description of symptoms..."></textarea>
</div>
<div className="flex items-center space-x-2">
<input checked="" className="rounded border-input bg-transparent text-primary focus:ring-primary" id="email-notify" type="checkbox"/>
<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email-notify">Send confirmation email to patient</label>
</div>
</div>
<div className="p-6 border-t border-border flex justify-end gap-3 bg-card/50">
<button className="px-4 py-2 border border-input bg-transparent hover:bg-secondary rounded-md text-sm font-medium transition-colors" onclick="toggleModal('modal-appointment')">Cancel</button>
<button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm font-medium shadow-sm transition-colors">Confirm Booking</button>
</div>
</div>
</div>



    </>
  );
}
