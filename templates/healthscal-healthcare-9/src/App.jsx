import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
slate: { 850: '#151e2e', 950: '#020617' },
brand: { 50: '#EEF2FF', 100: '#E0E7FF', 500: '#6366F1', 600: '#4F46E5', 700: '#4338ca', 900: '#312e81' }
},
fontSize: { xxs: '0.65rem' },
boxShadow: { 'glow': '0 0 15px rgba(99, 102, 241, 0.15)', 'inner-light': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)' }
}
}
}



        // Init Icons
        lucide.createIcons({ attrs: { 'stroke-width': 1.5, 'class': "lucide" } });

        // Logic
        const ui = {
            toggleMobileMenu: () => {
                const sidebar = document.getElementById('sidebar');
                const overlay = document.getElementById('mobile-overlay');
                if (sidebar.classList.contains('-translate-x-full')) {
                    sidebar.classList.remove('-translate-x-full');
                    overlay.classList.remove('hidden');
                    setTimeout(() => overlay.classList.remove('opacity-0'), 10);
                } else {
                    sidebar.classList.add('-translate-x-full');
                    overlay.classList.add('opacity-0');
                    setTimeout(() => overlay.classList.add('hidden'), 300);
                }
            },
            toggleUserMenu: () => {
                const menu = document.getElementById('user-menu');
                menu.classList.toggle('hidden');
            },
            toggleNotifications: () => {
                const panel = document.getElementById('notifications-panel');
                panel.classList.toggle('hidden');
            },
            toggleCmdPalette: () => {
                const palette = document.getElementById('cmd-palette');
                if (palette.classList.contains('hidden')) {
                    palette.classList.remove('hidden');
                    // Focus input
                    setTimeout(() => palette.querySelector('input').focus(), 50);
                } else {
                    palette.classList.add('hidden');
                }
            },
            toggleDrawer: () => {
                const drawer = document.getElementById('right-drawer');
                if (drawer.classList.contains('translate-x-full')) {
                    drawer.classList.remove('translate-x-full');
                    // Simulate loading data
                    setTimeout(() => ui.toast('Tenant data loaded'), 200);
                } else {
                    drawer.classList.add('translate-x-full');
                }
            },
            toast: (message) => {
                const container = document.getElementById('toast-container');
                const toast = document.createElement('div');
                toast.className = 'bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl text-xs font-medium flex items-center gap-3 animate-toast';
                toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i> ${message}`;
                container.appendChild(toast);
                lucide.createIcons();
                setTimeout(() => {
                    toast.style.opacity = '0';
                    setTimeout(() => toast.remove(), 300);
                }, 3000);
            }
        };

        const router = {
            pages: ['dashboard', 'tenants', 'patients', 'medical', 'analytics'],
            navigate: (pageId) => {
                // Sidebar Active State
                router.pages.forEach(p => {
                    const el = document.getElementById(`nav-${p}`);
                    const content = document.getElementById(`page-${p}`);
                    
                    if(el) {
                        if(p === pageId) {
                            el.classList.remove('text-slate-500', 'hover:text-slate-900', 'hover:bg-slate-50');
                            el.classList.add('text-brand-700', 'bg-brand-50');
                            
                            // Handle Indicator for Analytics specifically, or generalized
                            const indicator = el.querySelector('.indicator');
                            if(indicator) indicator.style.display = 'block';
                            
                        } else {
                            el.classList.add('text-slate-500', 'hover:text-slate-900', 'hover:bg-slate-50');
                            el.classList.remove('text-brand-700', 'bg-brand-50');
                            
                            const indicator = el.querySelector('.indicator');
                            if(indicator) indicator.style.display = 'none';
                        }
                    }

                    if(content) {
                        if(p === pageId) content.classList.remove('hidden');
                        else content.classList.add('hidden');
                    }
                });

                // Update Header Breadcrumb
                const titles = {
                    'dashboard': 'Configuration',
                    'analytics': 'Deep Analytics',
                    'tenants': 'Tenant Management',
                    'patients': 'Patient Profile',
                    'medical': 'Provider Schedule'
                };
                
                const section = pageId === 'tenants' || pageId === 'dashboard' ? 'Platform' : 'Clinical';
                document.getElementById('breadcrumb-section').innerText = section;
                document.getElementById('breadcrumb-page').innerText = titles[pageId] || 'Overview';
                
                // Close Mobile Menu if open
                if(window.innerWidth < 768) {
                    const sidebar = document.getElementById('sidebar');
                    if(!sidebar.classList.contains('-translate-x-full')) ui.toggleMobileMenu();
                }

                // Close Notifications if open
                const notifPanel = document.getElementById('notifications-panel');
                if(!notifPanel.classList.contains('hidden')) notifPanel.classList.add('hidden');
            }
        };
        
        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                ui.toggleCmdPalette();
            }
            if (e.key === 'Escape') {
                document.getElementById('cmd-palette').classList.add('hidden');
                document.getElementById('right-drawer').classList.add('translate-x-full');
                document.getElementById('notifications-panel').classList.add('hidden');
                document.getElementById('user-menu').classList.add('hidden');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 hidden transition-opacity opacity-0" id="mobile-overlay" onclick="ui.toggleMobileMenu()"></div>

<div className="fixed inset-0 z-[100] hidden" id="cmd-palette" onclick="if(event.target === this) ui.toggleCmdPalette()">
<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px]"></div>
<div className="relative w-full max-w-xl mx-auto mt-20 md:mt-32 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-pop flex flex-col max-h-[60vh]">
<div className="flex items-center px-4 py-3 border-b border-slate-100">
<i className="w-5 h-5 text-slate-400 mr-3" data-lucide="search"></i>
<input autofocus="" className="flex-1 bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 text-sm h-6" placeholder="Type a command or search..." type="text"/>
<div className="text-xs font-mono text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">ESC</div>
</div>
<div className="overflow-y-auto p-2">
<div className="text-xs font-semibold text-slate-400 px-3 py-2 uppercase tracking-wider">Navigation</div>
<button className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 group transition-colors" onclick="router.navigate('dashboard'); ui.toggleCmdPalette()">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-700" data-lucide="layout-grid"></i>
<span className="text-sm text-slate-700 group-hover:text-slate-900">Go to Dashboard</span>
</button>
<button className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 group transition-colors" onclick="router.navigate('analytics'); ui.toggleCmdPalette()">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-700" data-lucide="bar-chart-2"></i>
<span className="text-sm text-slate-700 group-hover:text-slate-900">Go to Analytics</span>
</button>
<button className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 group transition-colors" onclick="router.navigate('tenants'); ui.toggleCmdPalette()">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-700" data-lucide="building-2"></i>
<span className="text-sm text-slate-700 group-hover:text-slate-900">Manage Tenants</span>
</button>
<div className="text-xs font-semibold text-slate-400 px-3 py-2 uppercase tracking-wider mt-2">System Actions</div>
<button className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 group transition-colors">
<i className="w-4 h-4 text-slate-400 group-hover:text-brand-600" data-lucide="plus-circle"></i>
<span className="text-sm text-slate-700 group-hover:text-slate-900">Create New Tenant</span>
<span className="ml-auto text-xxs font-medium text-slate-400 group-hover:text-slate-600">PRO</span>
</button>
<button className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 group transition-colors">
<i className="w-4 h-4 text-slate-400 group-hover:text-brand-600" data-lucide="download-cloud"></i>
<span className="text-sm text-slate-700 group-hover:text-slate-900">Export All Data</span>
</button>
</div>
<div className="bg-slate-50 border-t border-slate-100 px-4 py-2 flex items-center justify-between text-xs text-slate-400">
<span><strong className="font-medium text-slate-500">244</strong> results</span>
<div className="flex gap-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="arrow-up"></i><i className="w-3 h-3" data-lucide="arrow-down"></i> Navigate</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="corner-down-left"></i> Select</span>
</div>
</div>
</div>
</div>

<div className="fixed inset-y-0 right-0 z-[60] w-full md:w-[480px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out border-l border-slate-200 flex flex-col" id="right-drawer">

<div className="h-16 px-6 border-b border-slate-100 flex items-center justify-between bg-white z-10">
<div>
<h3 className="text-sm font-bold text-slate-900">Acme Healthcare System</h3>
<p className="text-xs text-slate-500">ID: TEN-8821-X</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="external-link"></i>
</button>
<button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onclick="ui.toggleDrawer()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F8FAFC]">

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold text-slate-500 uppercase">System Health</span>
<span className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Operational
                    </span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="text-xs text-slate-500 mb-1">API Latency</div>
<div className="text-lg font-semibold text-slate-900">24ms</div>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="text-xs text-slate-500 mb-1">Error Rate</div>
<div className="text-lg font-semibold text-slate-900">0.01%</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<h4 className="text-xs font-semibold text-slate-900">Configuration</h4>
<button className="text-xs text-brand-600 font-medium">Edit</button>
</div>
<div className="divide-y divide-slate-100">
<div className="px-4 py-3 flex justify-between items-center">
<span className="text-xs text-slate-600">Data Residency</span>
<span className="text-xs font-medium text-slate-900">US-East (N. Virginia)</span>
</div>
<div className="px-4 py-3 flex justify-between items-center">
<span className="text-xs text-slate-600">SSO Enforcement</span>
<div className="w-8 h-4 bg-brand-600 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="px-4 py-3 flex justify-between items-center">
<span className="text-xs text-slate-600">Audit Logging</span>
<span className="text-xs font-medium text-slate-900">Enabled (90 Days)</span>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-slate-500 mb-3 ml-1">RECENT AUDIT LOGS</h4>
<div className="space-y-2">
<div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex gap-3 items-start">
<div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
<div>
<p className="text-xs text-slate-900 font-medium">User Provisioning</p>
<p className="text-xs text-slate-500 mt-0.5">Added 5 new seats to Nursing Dept.</p>
<p className="text-xxs text-slate-400 mt-1.5">2 mins ago • admin@acme.com</p>
</div>
</div>
<div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex gap-3 items-start">
<div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></div>
<div>
<p className="text-xs text-slate-900 font-medium">Policy Update</p>
<p className="text-xs text-slate-500 mt-0.5">Changed password rotation policy.</p>
<p className="text-xxs text-slate-400 mt-1.5">4 hours ago • sys_admin</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-200 bg-white">
<button className="w-full flex justify-center items-center gap-2 py-2 border border-slate-200 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 hover:border-red-100 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="shield-alert"></i> Suspend Tenant Access
            </button>
</div>
</div>

<aside className="w-64 bg-white border-r border-slate-200/80 flex-shrink-0 flex flex-col h-full z-50 fixed md:relative transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out" id="sidebar">

<div className="h-16 flex items-center px-6 border-b border-slate-100/80 justify-between">
<div className="flex items-center gap-3 text-slate-900 group cursor-pointer" onclick="router.navigate('analytics')">
<div className="w-7 h-7 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-200 group-hover:scale-105 transition-transform duration-300">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
<div className="flex flex-col">
<span className="font-bold tracking-tight text-sm leading-none">HEALTHSCALE</span>
<span className="text-xxs font-medium text-slate-400 tracking-wide mt-0.5">ENTERPRISE</span>
</div>
</div>
<button className="md:hidden text-slate-400 hover:text-slate-600" onclick="ui.toggleMobileMenu()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">

<div>
<h3 className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    Platform <span className="w-full h-px bg-slate-100"></span>
</h3>
<div className="space-y-1">
<button className="w-full group flex items-center justify-between px-3 py-2 text-sm font-medium text-brand-700 bg-brand-50 rounded-lg transition-all duration-200" id="nav-analytics" onclick="router.navigate('analytics')">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-600" data-lucide="bar-chart-2"></i> Analytics
                         </div>
<div className="indicator w-1.5 h-1.5 rounded-full bg-brand-500 shadow-glow"></div>
</button>
<button className="w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200" id="nav-tenants" onclick="router.navigate('tenants')">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="building-2"></i> Tenants
                    </button>
<button className="w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200" id="nav-dashboard" onclick="router.navigate('dashboard')">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="settings-2"></i> Configuration
                    </button>
</div>
</div>

<div>
<h3 className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    Clinical Care <span className="w-full h-px bg-slate-100"></span>
</h3>
<div className="space-y-1">
<button className="w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200" id="nav-patients" onclick="router.navigate('patients')">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="contact"></i> Patients (EMR)
                    </button>
<button className="w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200" id="nav-medical" onclick="router.navigate('medical')">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="stethoscope"></i> Provider Schedule
                    </button>
</div>
</div>

<div className="px-3 pt-2 mt-auto">
<div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl p-3 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-12 h-12 text-indigo-600" data-lucide="trophy"></i>
</div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-indigo-900">Q3 Audit Goal</span>
<span className="text-xxs font-bold text-indigo-600">92%</span>
</div>
<div className="w-full h-1.5 bg-indigo-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-indigo-500 w-[92%] rounded-full relative"></div>
</div>
<p className="text-xxs text-indigo-700 font-medium">Platform compliance high.</p>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-100 bg-slate-50/50 relative">

<div className="hidden absolute bottom-full left-4 right-4 mb-2 bg-white rounded-xl shadow-xl border border-slate-200 p-1 animate-pop origin-bottom z-50" id="user-menu">
<div className="px-3 py-2 border-b border-slate-100">
<p className="text-xs font-bold text-slate-900">Admin System</p>
<p className="text-xxs text-slate-500">admin@healthscale.io</p>
</div>
<div className="p-1 space-y-0.5">
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-colors">
<i className="w-3.5 h-3.5" data-lucide="user"></i> Profile Settings
                    </button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-colors" onclick="ui.toggleUserMenu()">
<i className="w-3.5 h-3.5" data-lucide="moon"></i> Dark Mode <span className="ml-auto text-xxs bg-slate-100 px-1 rounded">Off</span>
</button>
</div>
</div>
<div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white cursor-pointer transition-all border border-transparent hover:border-slate-200 hover:shadow-sm group" onclick="ui.toggleUserMenu()">
<div className="relative">
<div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-white font-medium text-xs shadow-md">AS</div>
<div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
<i className="w-2 h-2 text-white" data-lucide="check"></i>
</div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold text-slate-900 truncate">Admin System</p>
<p className="text-xs text-slate-400 truncate group-hover:text-brand-600 transition-colors">Super Admin</p>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevrons-up-down"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#F8FAFC]">

<header className="h-16 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 flex items-center justify-between px-6 sticky top-0 z-30 transition-all">

<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-900" onclick="ui.toggleMobileMenu()">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<nav className="hidden md:flex items-center text-sm text-slate-400 font-medium">
<div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-slate-50 transition-colors cursor-pointer">
<i className="w-3.5 h-3.5" data-lucide="layers"></i>
<span id="breadcrumb-section">Platform</span>
</div>
<i className="w-3.5 h-3.5 mx-1 opacity-50" data-lucide="chevron-right"></i>
<span className="text-slate-900 font-semibold bg-slate-100/50 px-2 py-1 rounded-md" id="breadcrumb-page">Deep Analytics</span>
</nav>
</div>

<div className="flex items-center gap-4">

<button className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500 hover:border-slate-300 hover:text-slate-700 transition-colors shadow-inner-light" onclick="ui.toggleCmdPalette()">
<i className="w-3.5 h-3.5" data-lucide="search"></i>
<span className="mr-4">Search...</span>
<kbd className="hidden xl:inline-block font-sans bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[10px] leading-none text-slate-400">⌘K</kbd>
</button>
<div className="h-6 w-px bg-slate-200 hidden md:block"></div>
<div className="flex items-center gap-3">
<button className="relative w-9 h-9 flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
<i className="w-5 h-5" data-lucide="help-circle"></i>
</button>

<div className="relative">
<button className="relative w-9 h-9 flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors" onclick="ui.toggleNotifications()">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
</button>

<div className="absolute top-full right-0 mt-3 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-slate-200 hidden animate-pop z-50 origin-top-right" id="notifications-panel">
<div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
<h3 className="text-sm font-semibold text-slate-900">Notifications</h3>
<button className="text-xs text-brand-600 hover:text-brand-700 font-medium">Mark all read</button>
</div>

<div className="flex px-2 pt-2 border-b border-slate-100">
<button className="flex-1 pb-2 text-xs font-medium text-brand-600 border-b-2 border-brand-600">All</button>
<button className="flex-1 pb-2 text-xs font-medium text-slate-500 hover:text-slate-700">Mentions</button>
<button className="flex-1 pb-2 text-xs font-medium text-slate-500 hover:text-slate-700">Alerts</button>
</div>
<div className="max-h-[320px] overflow-y-auto">

<div className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 flex gap-3 relative">
<div className="mt-1 w-2 h-2 rounded-full bg-brand-500 absolute left-1.5 top-4"></div>
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
<i className="w-4 h-4" data-lucide="file-text"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Lab Results Available</p>
<p className="text-xs text-slate-500 mt-0.5">Patient <span className="font-medium text-slate-700">Jane Cooper</span> has new blood work results ready for review.</p>
<p className="text-xxs text-slate-400 mt-1">10 mins ago</p>
</div>
</div>

<div className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 flex gap-3 relative">
<div className="mt-1 w-2 h-2 rounded-full bg-brand-500 absolute left-1.5 top-4"></div>
<div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">System Maintenance</p>
<p className="text-xs text-slate-500 mt-0.5">Scheduled downtime for update v4.3 starting at 2:00 AM UTC.</p>
<p className="text-xxs text-slate-400 mt-1">1 hour ago</p>
</div>
</div>

<div className="px-4 py-3 hover:bg-slate-50 cursor-pointer flex gap-3 opacity-60 hover:opacity-100 transition-opacity">
<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Export Complete</p>
<p className="text-xs text-slate-500 mt-0.5">Your monthly analytics report is ready to download.</p>
<p className="text-xxs text-slate-400 mt-1">Yesterday</p>
</div>
</div>
</div>
<div className="p-2 border-t border-slate-100 bg-slate-50 rounded-b-xl text-center">
<button className="text-xs font-medium text-slate-600 hover:text-brand-600 transition-colors">View all notifications</button>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth relative" id="main-scroll-area">
<div className="max-w-[1600px] mx-auto min-h-full">

<div className="space-y-6 animate-enter" id="page-analytics">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Performance Intelligence</h1>
<p className="text-sm text-slate-500 mt-1">Real-time insight into clinical operations and revenue streams.</p>
</div>
<div className="flex items-center gap-3">

<div className="hidden lg:flex items-center gap-4 mr-4 pr-4 border-r border-slate-200">
<div className="text-right">
<div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">CPU</div>
<div className="text-xs font-mono text-slate-700">24%</div>
</div>
<div className="w-16 h-8 flex items-end gap-0.5">
<div className="w-1 bg-slate-200 h-[30%]"></div>
<div className="w-1 bg-slate-200 h-[50%]"></div>
<div className="w-1 bg-slate-200 h-[40%]"></div>
<div className="w-1 bg-brand-500 h-[60%]"></div>
<div className="w-1 bg-brand-500 h-[45%]"></div>
</div>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition-all hover-lift">
<i className="w-3.5 h-3.5" data-lucide="download"></i> Report
                            </button>
<button className="flex items-center gap-2 px-4 py-2 bg-brand-600 border border-transparent rounded-lg text-xs font-semibold text-white hover:bg-brand-700 shadow-lg shadow-brand-500/20 transition-all hover-lift">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> Custom Query
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-default">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Recurring Revenue</p>
<h3 className="text-2xl font-bold text-slate-900 mt-1">$4.2M</h3>
</div>
<span className="bg-emerald-50 text-emerald-700 text-xxs font-bold px-2 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> 12.5%
                                </span>
</div>

<div className="h-10 w-full flex items-end gap-1">
<div className="w-1/12 bg-slate-100 h-[40%] rounded-t-sm group-hover:bg-brand-100 transition-colors"></div>
<div className="w-1/12 bg-slate-100 h-[50%] rounded-t-sm group-hover:bg-brand-200 transition-colors"></div>
<div className="w-1/12 bg-slate-100 h-[45%] rounded-t-sm group-hover:bg-brand-200 transition-colors"></div>
<div className="w-1/12 bg-slate-100 h-[60%] rounded-t-sm group-hover:bg-brand-300 transition-colors"></div>
<div className="w-1/12 bg-slate-100 h-[55%] rounded-t-sm group-hover:bg-brand-300 transition-colors"></div>
<div className="w-1/12 bg-slate-100 h-[70%] rounded-t-sm group-hover:bg-brand-400 transition-colors"></div>
<div className="w-1/12 bg-slate-100 h-[65%] rounded-t-sm group-hover:bg-brand-400 transition-colors"></div>
<div className="w-1/12 bg-slate-100 h-[80%] rounded-t-sm group-hover:bg-brand-500 transition-colors"></div>
<div className="w-1/12 bg-slate-100 h-[75%] rounded-t-sm group-hover:bg-brand-500 transition-colors"></div>
<div className="w-1/12 bg-brand-600 h-[90%] rounded-t-sm shadow-[0_0_8px_rgba(79,70,229,0.3)]"></div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Patient Churn</p>
<h3 className="text-2xl font-bold text-slate-900 mt-1">2.1%</h3>
</div>
<span className="bg-emerald-50 text-emerald-700 text-xxs font-bold px-2 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-down"></i> 0.4%
                                </span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mt-auto">
<div className="bg-slate-400 h-1.5 rounded-full" style={{width: '2.1%'}}></div>
</div>
<p className="text-xs text-slate-400 mt-2">Target: &lt; 3.0%</p>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Active Providers</p>
<h3 className="text-2xl font-bold text-slate-900 mt-1">842</h3>
</div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">SJ</div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">DK</div>
<div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs text-slate-400 font-bold">+</div>
</div>
</div>
<p className="text-xs text-slate-500">Currently active across 12 regions.</p>
</div>

<div className="bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-xl border border-slate-700 shadow-lg text-white">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Avg. Wait Time</p>
<h3 className="text-2xl font-bold text-white mt-1">14m</h3>
</div>
<i className="text-slate-500 w-5 h-5" data-lucide="clock"></i>
</div>
<div className="flex items-center gap-2 text-xs text-emerald-400">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Optimal Levels
                            </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-base font-semibold text-slate-900">Patient Visit Volume</h3>
<p className="text-sm text-slate-500">Comparative analysis vs Previous Period</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-brand-500"></span>
<span className="text-xs text-slate-600 font-medium">Current</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-slate-300 dashed-border"></span>
<span className="text-xs text-slate-400 font-medium">Previous</span>
</div>
</div>
</div>

<div className="relative h-[300px] w-full">

<div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-300">
<div className="border-b border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-100 w-full h-0"></div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">

<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366F1" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#6366F1" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,250 C100,240 200,200 300,220 S500,180 600,200 S800,150 1000,180" fill="none" stroke="#CBD5E1" stroke-dasharray="5,5" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<path d="M0,200 C150,180 300,100 450,150 S700,50 900,80 L900,300 L0,300 Z" fill="url(#chartGradient)" stroke="none" vector-effect="non-scaling-stroke"></path>

<path className="drop-shadow-lg" d="M0,200 C150,180 300,100 450,150 S700,50 900,80" fill="none" stroke="#6366F1" strokeLinecap="round" strokeWidth="3" vector-effect="non-scaling-stroke"></path>

<g className="group cursor-pointer">
<circle className="group-hover:scale-125 transition-transform" cx="450" cy="150" fill="#fff" r="6" stroke="#6366F1" strokeWidth="3"></circle>

<foreignobject className="chart-tooltip" height="50" width="100" x="400" y="90">
<div className="bg-slate-800 text-white text-xs rounded py-1 px-2 text-center shadow-xl">
<div className="font-bold">2,402 Visits</div>
<div className="text-slate-400">Oct 12</div>
</div>
</foreignobject>
</g>
</svg>
</div>

<div className="flex justify-between mt-2 text-xs text-slate-400 px-2">
<span>Oct 01</span>
<span>Oct 05</span>
<span>Oct 10</span>
<span>Oct 15</span>
<span>Oct 20</span>
<span>Oct 25</span>
<span>Oct 30</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
<h3 className="text-base font-semibold text-slate-900 mb-6">Patient Demographics</h3>
<div className="relative flex-1 flex items-center justify-center">

<svg className="w-48 h-48 transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#F1F5F9" strokeWidth="12"></circle>

<circle className="donut-segment hover:opacity-80 cursor-pointer" cx="50" cy="50" fill="transparent" r="40" stroke="#6366F1" stroke-dasharray="251.2" stroke-dashoffset="100" strokeWidth="12"></circle>

<circle className="donut-segment hover:opacity-80 cursor-pointer" cx="50" cy="50" fill="transparent" r="40" stroke="#0EA5E9" stroke-dasharray="251.2" stroke-dashoffset="188.4" strokeWidth="12" style={{transformOrigin: 'center', transform: 'rotate(216deg)'}}></circle>

<circle className="donut-segment hover:opacity-80 cursor-pointer" cx="50" cy="50" fill="transparent" r="40" stroke="#F43F5E" stroke-dasharray="251.2" stroke-dashoffset="213.5" strokeWidth="12" style={{transformOrigin: 'center', transform: 'rotate(306deg)'}}></circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="text-2xl font-bold text-slate-900">24k</span>
<span className="text-xxs text-slate-400 uppercase tracking-wide">Total</span>
</div>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500"></span> <span className="text-slate-600">Adult (18-65)</span></div>
<span className="font-semibold text-slate-900">60%</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-500"></span> <span className="text-slate-600">Senior (65+)</span></div>
<span className="font-semibold text-slate-900">25%</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-500"></span> <span className="text-slate-600">Pediatric (0-18)</span></div>
<span className="font-semibold text-slate-900">15%</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 overflow-hidden">
<div className="flex justify-between items-center mb-6">
<h3 className="text-base font-semibold text-slate-900">Patient Retention Cohort</h3>
<button className="text-xs text-brand-600 font-medium hover:underline">View Details</button>
</div>
<div className="overflow-x-auto">
<div className="min-w-[500px]">

<div className="grid grid-cols-6 gap-1 mb-2 text-xs font-semibold text-slate-500 text-center">
<div className="text-left pl-2">Cohort</div>
<div>Wk 0</div>
<div>Wk 1</div>
<div>Wk 2</div>
<div>Wk 3</div>
<div>Wk 4</div>
</div>

<div className="space-y-1">

<div className="grid grid-cols-6 gap-1 text-xs">
<div className="flex items-center text-slate-600 font-medium pl-2">Aug 28</div>
<div className="bg-brand-600 text-white rounded py-2 text-center cohort-cell transition-all">100%</div>
<div className="bg-brand-500 text-white rounded py-2 text-center cohort-cell transition-all">42%</div>
<div className="bg-brand-400 text-white rounded py-2 text-center cohort-cell transition-all">28%</div>
<div className="bg-brand-300 text-white rounded py-2 text-center cohort-cell transition-all">25%</div>
<div className="bg-brand-300 text-white rounded py-2 text-center cohort-cell transition-all">22%</div>
</div>

<div className="grid grid-cols-6 gap-1 text-xs">
<div className="flex items-center text-slate-600 font-medium pl-2">Sep 04</div>
<div className="bg-brand-600 text-white rounded py-2 text-center cohort-cell transition-all">100%</div>
<div className="bg-brand-500 text-white rounded py-2 text-center cohort-cell transition-all">45%</div>
<div className="bg-brand-400 text-white rounded py-2 text-center cohort-cell transition-all">32%</div>
<div className="bg-brand-400 text-white rounded py-2 text-center cohort-cell transition-all">29%</div>
<div className="bg-slate-100 text-slate-300 rounded py-2 text-center"></div>
</div>

<div className="grid grid-cols-6 gap-1 text-xs">
<div className="flex items-center text-slate-600 font-medium pl-2">Sep 11</div>
<div className="bg-brand-600 text-white rounded py-2 text-center cohort-cell transition-all">100%</div>
<div className="bg-brand-500 text-white rounded py-2 text-center cohort-cell transition-all">48%</div>
<div className="bg-brand-400 text-white rounded py-2 text-center cohort-cell transition-all">35%</div>
<div className="bg-slate-100 text-slate-300 rounded py-2 text-center"></div>
<div className="bg-slate-100 text-slate-300 rounded py-2 text-center"></div>
</div>

<div className="grid grid-cols-6 gap-1 text-xs">
<div className="flex items-center text-slate-600 font-medium pl-2">Sep 18</div>
<div className="bg-brand-600 text-white rounded py-2 text-center cohort-cell transition-all">100%</div>
<div className="bg-brand-500 text-white rounded py-2 text-center cohort-cell transition-all">52%</div>
<div className="bg-slate-100 text-slate-300 rounded py-2 text-center"></div>
<div className="bg-slate-100 text-slate-300 rounded py-2 text-center"></div>
<div className="bg-slate-100 text-slate-300 rounded py-2 text-center"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h3 className="text-base font-semibold text-slate-900 mb-6">Top Performing Regions</h3>
<div className="space-y-5">

<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-700 flex items-center gap-2">
<span className="text-lg">🇺🇸</span> New York (East)
                                        </span>
<span className="font-semibold text-slate-900">$1.2M</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-slate-800 h-2 rounded-full w-[85%] group-hover:bg-brand-600 transition-colors duration-300"></div>
</div>
</div>

<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-700 flex items-center gap-2">
<span className="text-lg">🇬🇧</span> London (UK)
                                        </span>
<span className="font-semibold text-slate-900">$850k</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-slate-800 h-2 rounded-full w-[65%] group-hover:bg-brand-600 transition-colors duration-300"></div>
</div>
</div>

<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-700 flex items-center gap-2">
<span className="text-lg">🇨🇦</span> Toronto (CAN)
                                        </span>
<span className="font-semibold text-slate-900">$620k</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-slate-800 h-2 rounded-full w-[45%] group-hover:bg-brand-600 transition-colors duration-300"></div>
</div>
</div>

<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-700 flex items-center gap-2">
<span className="text-lg">🇩🇪</span> Berlin (EU)
                                        </span>
<span className="font-semibold text-slate-900">$410k</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-slate-800 h-2 rounded-full w-[30%] group-hover:bg-brand-600 transition-colors duration-300"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6 animate-enter" id="page-tenants">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Tenant Management</h1>
<p className="text-sm text-slate-500 mt-1">Manage enterprise instances, licenses, and billing.</p>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 w-64 shadow-sm" placeholder="Filter tenants..." type="text"/>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg text-xs font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20">
<i className="w-4 h-4" data-lucide="plus"></i> Add Tenant
                            </button>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-2">
<button className="px-3 py-1.5 bg-slate-800 text-white rounded-md text-xs font-medium whitespace-nowrap">All Tenants</button>
<button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-md text-xs font-medium hover:bg-slate-50 whitespace-nowrap">Active (128)</button>
<button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-md text-xs font-medium hover:bg-slate-50 whitespace-nowrap">Provisioning (4)</button>
<button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-md text-xs font-medium hover:bg-slate-50 whitespace-nowrap">Suspended (2)</button>
<div className="w-px h-6 bg-slate-200 mx-2"></div>
<button className="px-3 py-1.5 bg-white border border-dashed border-slate-300 text-slate-500 rounded-md text-xs font-medium hover:text-slate-700 hover:border-slate-400 whitespace-nowrap flex items-center gap-1">
<i className="w-3 h-3" data-lucide="filter"></i> More Filters
                        </button>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-slate-50/75 border-b border-slate-200">
<tr>
<th className="w-8 px-4 py-3"><input className="rounded border-slate-300 text-brand-600 focus:ring-0" type="checkbox"/></th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-700">Tenant Name</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-700">Status</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Health</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Usage</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">MRR</th>
<th className="w-12 px-4 py-3"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="group hover:bg-slate-50 transition-colors cursor-pointer" onclick="ui.toggleDrawer()">
<td className="px-4 py-4"><input className="rounded border-slate-300 text-brand-600 focus:ring-0" type="checkbox"/></td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">AH</div>
<div>
<div className="text-sm font-semibold text-slate-900">Acme Healthcare System</div>
<div className="text-xs text-slate-500">us-east-1 • v4.2</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                                            </span>
</td>
<td className="px-4 py-4">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[98%]"></div>
</div>
<span className="text-xxs text-slate-400 mt-1 block">99.9% Uptime</span>
</td>
<td className="px-4 py-4 text-right">
<div className="text-sm text-slate-900 font-medium">1,240</div>
<div className="text-xs text-slate-500">users</div>
</td>
<td className="px-4 py-4 text-right">
<div className="text-sm text-slate-900 font-medium">$42,000</div>
</td>
<td className="px-4 py-4">
<button className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors cursor-pointer" onclick="ui.toggleDrawer()">
<td className="px-4 py-4"><input className="rounded border-slate-300 text-brand-600 focus:ring-0" type="checkbox"/></td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-xs">SV</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sierra Vista Medical</div>
<div className="text-xs text-slate-500">eu-west-2 • v4.1</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Maintenance
                                            </span>
</td>
<td className="px-4 py-4">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="bg-amber-500 h-full w-[80%]"></div>
</div>
<span className="text-xxs text-slate-400 mt-1 block">Degraded API</span>
</td>
<td className="px-4 py-4 text-right">
<div className="text-sm text-slate-900 font-medium">850</div>
<div className="text-xs text-slate-500">users</div>
</td>
<td className="px-4 py-4 text-right">
<div className="text-sm text-slate-900 font-medium">$28,500</div>
</td>
<td className="px-4 py-4">
<button className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors cursor-pointer" onclick="ui.toggleDrawer()">
<td className="px-4 py-4"><input className="rounded border-slate-300 text-brand-600 focus:ring-0" type="checkbox"/></td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">GC</div>
<div>
<div className="text-sm font-semibold text-slate-900">Grand City Hospital</div>
<div className="text-xs text-slate-500">us-west-1 • v4.2</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> Provisioning
                                            </span>
</td>
<td className="px-4 py-4">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="bg-slate-300 h-full w-[0%]"></div>
</div>
<span className="text-xxs text-slate-400 mt-1 block">Initializing...</span>
</td>
<td className="px-4 py-4 text-right">
<div className="text-sm text-slate-900 font-medium">-</div>
<div className="text-xs text-slate-500">users</div>
</td>
<td className="px-4 py-4 text-right">
<div className="text-sm text-slate-900 font-medium">$12,000</div>
</td>
<td className="px-4 py-4">
<button className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-white px-4 py-3 border-t border-slate-200 flex items-center justify-between">
<div className="text-xs text-slate-500">
                                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">128</span> results
                            </div>
<div className="flex gap-1">
<button className="px-3 py-1 border border-slate-200 rounded text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled="">Previous</button>
<button className="px-3 py-1 border border-slate-200 rounded text-xs text-slate-600 hover:bg-slate-50">Next</button>
</div>
</div>
</div>
</div>

<div className="hidden animate-enter space-y-6" id="page-patients">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<div className="flex flex-col md:flex-row gap-6 items-start">
<div className="relative group">
<img alt="Jane Cooper" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
<span className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</span>
</div>
<div className="flex-1 w-full">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<div className="flex items-center gap-3">
<h1 className="text-2xl font-bold text-slate-900">Jane Cooper</h1>
<span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider border border-slate-200">Inpatient</span>
</div>
<div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="user"></i> Female, 45y</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="hash"></i> MRN: JC-9921-X</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="calendar"></i> DOB: Mar 12, 1978</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 shadow-sm transition-all hover-lift flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="message-square"></i> Message
                                        </button>
<button className="px-4 py-2 bg-brand-600 text-white rounded-lg text-xs font-semibold hover:bg-brand-700 shadow-lg shadow-brand-500/20 transition-all hover-lift flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i> Edit Profile
                                        </button>
</div>
</div>

<div className="flex items-center gap-6 mt-8 border-b border-slate-100">
<button className="pb-3 text-xs font-semibold text-brand-600 border-b-2 border-brand-600">Overview</button>
<button className="pb-3 text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors">Clinical Timeline</button>
<button className="pb-3 text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors">Care Team</button>
<button className="pb-3 text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors">Documents</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="space-y-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-brand-500" data-lucide="activity"></i> Latest Vitals
                                </h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
<span className="text-xs text-slate-500">Blood Pressure</span>
<div className="text-right">
<div className="text-sm font-bold text-slate-900">120/80</div>
<div className="text-xxs text-emerald-600">Normal</div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
<span className="text-xs text-slate-500">Heart Rate</span>
<div className="text-right">
<div className="text-sm font-bold text-slate-900">72 <span className="text-xs font-normal text-slate-500">bpm</span></div>
<div className="text-xxs text-emerald-600">Normal</div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
<span className="text-xs text-slate-500">SpO2</span>
<div className="text-right">
<div className="text-sm font-bold text-slate-900">98%</div>
<div className="text-xxs text-emerald-600">Optimal</div>
</div>
</div>
</div>

<div className="mt-4 h-16 w-full relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none">
<path d="M0,50 L20,50 L30,20 L40,80 L50,50 L80,50 L90,10 L100,60 L120,50 L150,50" fill="none" stroke="#6366F1" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Insurance Coverage</h3>
<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 text-white shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-10"><i className="w-16 h-16 text-white" data-lucide="shield"></i></div>
<div className="relative z-10">
<p className="text-xs text-slate-300 uppercase tracking-wider">Primary Payer</p>
<p className="text-lg font-bold mt-1">BlueCross BlueShield</p>
<p className="text-xs text-slate-300 mt-4">ID: XJ-992-221-00</p>
<div className="mt-3 flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xxs font-bold border border-emerald-500/30">ACTIVE</span>
<span className="text-xxs text-slate-400">Exp: 12/25</span>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-2 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-slate-900">Active Conditions</h3>
<button className="text-xs text-brand-600 hover:underline">View All</button>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
<span className="text-sm font-medium text-slate-700">Type 2 Diabetes</span>
</div>
<span className="text-xs text-slate-400">Diagnosed 2018</span>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-slate-700">Hypertension</span>
</div>
<span className="text-xs text-slate-400">Diagnosed 2020</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-slate-900">Current Medications</h3>
<button className="text-xs text-brand-600 hover:underline">Re-order</button>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="w-8 h-8 rounded bg-brand-50 flex items-center justify-center text-brand-600">
<i className="w-4 h-4" data-lucide="pill"></i>
</div>
<div>
<p className="text-xs font-bold text-slate-800">Metformin</p>
<p className="text-xxs text-slate-500">500mg • 2x Daily</p>
</div>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="w-8 h-8 rounded bg-brand-50 flex items-center justify-center text-brand-600">
<i className="w-4 h-4" data-lucide="pill"></i>
</div>
<div>
<p className="text-xs font-bold text-slate-800">Lisinopril</p>
<p className="text-xxs text-slate-500">10mg • 1x Daily</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h3 className="text-sm font-semibold text-slate-900 mb-6">Recent Clinical Activity</h3>
<div className="relative pl-4 border-l border-slate-200 space-y-8">

<div className="relative">
<div className="absolute -left-[21px] top-1 w-3 h-3 bg-brand-600 rounded-full border-2 border-white shadow-sm"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
<span className="text-sm font-semibold text-slate-900">Primary Care Visit</span>
<span className="text-xs text-slate-400">Oct 12, 2023 • 09:30 AM</span>
</div>
<p className="text-sm text-slate-600">Routine checkup. BP slightly elevated. Adjusted medication dosage.</p>
<div className="mt-3 flex gap-2">
<span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs border border-slate-200">Dr. Sarah Smith</span>
<span className="px-2 py-1 bg-brand-50 text-brand-700 rounded text-xs border border-brand-100">General Practice</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 w-3 h-3 bg-slate-300 rounded-full border-2 border-white shadow-sm"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
<span className="text-sm font-semibold text-slate-900">Lab Results: Lipid Panel</span>
<span className="text-xs text-slate-400">Oct 10, 2023 • 02:15 PM</span>
</div>
<p className="text-sm text-slate-600">Results reviewed. LDL levels within normal range. Report attached.</p>
<div className="mt-2">
<button className="flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700">
<i className="w-3 h-3" data-lucide="file-text"></i> View Report
                                            </button>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 w-3 h-3 bg-slate-300 rounded-full border-2 border-white shadow-sm"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
<span className="text-sm font-semibold text-slate-900">Prescription Renewal</span>
<span className="text-xs text-slate-400">Sep 28, 2023 • 11:00 AM</span>
</div>
<p className="text-sm text-slate-600">Automated renewal for Metformin 500mg via Pharmacy Portal.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-8 animate-enter" id="page-dashboard">
<div className="text-center py-20">
<div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-slate-400" data-lucide="settings-2"></i>
</div>
<h2 className="text-xl font-medium text-slate-900">System Configuration</h2>
<p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">Global platform settings and feature flags are managed here. Use the sidebar to navigate back to Analytics.</p>
<button className="mt-6 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors" onclick="router.navigate('analytics')">
                            Return to Analytics
                        </button>
</div>
</div>

<div className="hidden animate-enter" id="page-medical"><div className="p-8 text-center text-slate-400">Medical Module</div></div>
</div>

<footer className="mt-12 mb-6 border-t border-slate-200/60 pt-8 text-center text-xs text-slate-400">
<p>HealthScale Platform v4.2.1 • 2024</p>
</footer>
</div>

<div className="absolute bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>
</main>


    </>
  );
}
