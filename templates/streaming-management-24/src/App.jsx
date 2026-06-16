import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Mobile Sidebar Toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const closeMenuBtn = document.getElementById('close-mobile-menu');
            const sidebar = document.getElementById('sidebar');
            
            function toggleSidebar() {
                sidebar.classList.toggle('hidden');
            }

            if(mobileMenuBtn && sidebar) mobileMenuBtn.addEventListener('click', toggleSidebar);
            if(closeMenuBtn) closeMenuBtn.addEventListener('click', toggleSidebar);

            // User Profile Dropdown
            const userBtn = document.getElementById('user-btn');
            const userDropdown = document.getElementById('user-dropdown');
            
            if(userBtn && userDropdown) {
                userBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    userDropdown.classList.toggle('hidden');
                });
            }

            // Table Action Dropdowns
            const actionBtns = document.querySelectorAll('.action-btn');
            actionBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // Close all other open menus
                    document.querySelectorAll('.action-menu').forEach(menu => {
                        if (menu !== btn.nextElementSibling) menu.classList.add('hidden');
                    });
                    // Toggle targeted menu
                    const menu = btn.nextElementSibling;
                    if(menu) menu.classList.toggle('hidden');
                });
            });

            // Close all dropdowns when clicking outside
            document.addEventListener('click', () => {
                if(userDropdown) userDropdown.classList.add('hidden');
                document.querySelectorAll('.action-menu').forEach(menu => {
                    menu.classList.add('hidden');
                });
            });

            // Restart Services Interactive Button
            const restartBtn = document.getElementById('restart-btn');
            if(restartBtn) {
                restartBtn.addEventListener('click', function() {
                    const originalHtml = this.innerHTML;
                    
                    // Loading state
                    this.innerHTML = '<iconify-icon icon="solar:restart-linear" width="16" class="animate-spin"></iconify-icon><span>Restarting...</span>';
                    this.disabled = true;
                    this.classList.add('opacity-80', 'cursor-not-allowed');
                    
                    // Success state
                    setTimeout(() => {
                        this.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="16" class="text-emerald-400"></iconify-icon><span class="text-emerald-400">Restarted</span>';
                        
                        // Revert back
                        setTimeout(() => {
                            this.innerHTML = originalHtml;
                            this.disabled = false;
                            this.classList.remove('opacity-80', 'cursor-not-allowed');
                        }, 2000);
                        
                    }, 1500);
                });
            }
            
            // Demo Generic Buttons
            const demoButtons = document.querySelectorAll('.demo-btn');
            demoButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const btnText = btn.textContent.trim() || 'Icon Action';
                    alert('Placeholder for functionality: ' + btnText);
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-zinc-800/60 bg-[#09090b] hidden md:flex flex-col flex-shrink-0 absolute md:relative z-40 h-full inset-y-0 left-0 transition-transform" id="sidebar">

<div className="h-16 flex items-center px-6 border-b border-zinc-800/60 flex-shrink-0">
<span className="text-lg font-semibold tracking-tighter text-zinc-100 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-[#09090b]">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5px'}} width="14"></iconify-icon>
</div>
                MOTT
            </span>
<button className="md:hidden ml-auto text-zinc-400 hover:text-zinc-100" id="close-mobile-menu">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
<div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest px-3 mb-2">Overview</div>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-800/50 text-zinc-100 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:widget-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                        Analytics
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                        Resellers
                    </a>
</nav>
</div>
<div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest px-3 mb-2">Connections</div>
<nav className="space-y-0.5">
<a className="flex items-center justify-between px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 font-medium text-sm transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:transfer-horizontal-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                            Lines
                        </div>
<span className="bg-zinc-800 text-zinc-300 text-xs py-0.5 px-1.5 rounded-sm">1.2k</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:server-square-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                        MAG Devices
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:smartphone-update-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                        Enigma2
                    </a>
</nav>
</div>
<div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest px-3 mb-2">Content</div>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:tv-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                        Live TV
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:clapperboard-play-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                        VOD Movies
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:video-library-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                        TV Series
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                        Bouquets
                    </a>
</nav>
</div>
</div>

<div className="p-4 border-t border-zinc-800/60 relative">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-zinc-800/50 transition-colors text-left" id="user-btn">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-medium text-xs border border-zinc-700">
                    AD
                </div>
<div className="flex-1 overflow-hidden">
<div className="text-sm font-medium text-zinc-200 truncate">Admin User</div>
<div className="text-xs text-zinc-500 truncate">Credits: 4,500</div>
</div>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>

<div className="hidden absolute bottom-full left-4 mb-2 w-56 bg-[#18181b] border border-zinc-800 rounded-lg shadow-xl py-1 z-50 overflow-hidden origin-bottom-left transition-all" id="user-dropdown">
<a className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition-colors" href="#">My Profile</a>
<a className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition-colors" href="#">Account Settings</a>
<div className="h-px bg-zinc-800/60 my-1"></div>
<a className="block px-4 py-2 text-sm text-rose-400 hover:bg-zinc-800 hover:text-rose-300 transition-colors" href="#">Sign Out</a>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full min-w-0">

<header className="h-16 flex items-center justify-between px-4 sm:px-8 border-b border-zinc-800/60 bg-[#09090b]/80 backdrop-blur-md z-10">
<div className="flex items-center gap-4 flex-1">
<button className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</button>

<div className="relative w-full max-w-md hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full bg-zinc-900/50 border border-zinc-800/80 text-zinc-200 text-sm rounded-md pl-10 pr-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-shadow placeholder:text-zinc-600" placeholder="Search lines, users, or content..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden lg:inline-flex items-center justify-center rounded border border-zinc-800 bg-zinc-900 px-1.5 text-xs font-medium text-zinc-500">⌘</kbd>
<kbd className="hidden lg:inline-flex items-center justify-center rounded border border-zinc-800 bg-zinc-900 px-1.5 text-xs font-medium text-zinc-500">K</kbd>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="demo-btn relative text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon icon="solar:bell-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-indigo-500 border border-[#09090b]"></span>
</button>
<div className="h-5 w-px bg-zinc-800"></div>
<button className="demo-btn text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-2 text-sm font-medium">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<span className="hidden sm:inline-block">Settings</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-zinc-100 tracking-tight">Dashboard Overview</h1>
<p className="text-sm text-zinc-500 mt-1">Real-time metrics and system status.</p>
</div>
<div className="flex items-center gap-3">
<button className="demo-btn px-3 py-1.5 text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-md hover:bg-zinc-800 hover:text-zinc-100 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
                            Last 30 Days
                        </button>
<button className="demo-btn px-3 py-1.5 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors shadow-sm shadow-indigo-500/20">
                            Create Line
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between text-zinc-400 mb-4">
<span className="text-sm font-medium">Active Connections</span>
<div className="p-1.5 bg-emerald-500/10 rounded-md text-emerald-400">
<iconify-icon icon="solar:pulse-linear" width="18"></iconify-icon>
</div>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">4,291</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium text-emerald-400 flex items-center">
<iconify-icon icon="solar:arrow-up-linear" width="12"></iconify-icon>
                                    12.5%
                                </span>
<span className="text-xs text-zinc-500">vs last hour</span>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between text-zinc-400 mb-4">
<span className="text-sm font-medium">Total Lines</span>
<div className="p-1.5 bg-blue-500/10 rounded-md text-blue-400">
<iconify-icon icon="solar:transfer-horizontal-linear" width="18"></iconify-icon>
</div>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">12,845</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium text-emerald-400 flex items-center">
<iconify-icon icon="solar:arrow-up-linear" width="12"></iconify-icon>
                                    3.2%
                                </span>
<span className="text-xs text-zinc-500">this month</span>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between text-zinc-400 mb-4">
<span className="text-sm font-medium">Bandwidth Out</span>
<div className="p-1.5 bg-amber-500/10 rounded-md text-amber-400">
<iconify-icon icon="solar:sort-vertical-linear" width="18"></iconify-icon>
</div>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">8.4 Tbps</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium text-amber-400 flex items-center">
<iconify-icon icon="solar:minus-linear" width="12"></iconify-icon>
                                    Stable
                                </span>
<span className="text-xs text-zinc-500">server load 68%</span>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between text-zinc-400 mb-4">
<span className="text-sm font-medium">Expiring Soon (7d)</span>
<div className="p-1.5 bg-rose-500/10 rounded-md text-rose-400">
<iconify-icon icon="solar:danger-triangle-linear" width="18"></iconify-icon>
</div>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">342</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-500">Requires attention</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800/60 rounded-xl overflow-hidden pb-12 lg:pb-0">
<div className="p-5 border-b border-zinc-800/60 flex items-center justify-between">
<h2 className="text-base font-semibold text-zinc-100">Recent Connections</h2>
<button className="demo-btn text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors">View All</button>
</div>

<div className="overflow-x-auto lg:overflow-visible">
<table className="w-full text-sm text-left">
<thead className="text-xs text-zinc-500 bg-zinc-900/50 border-b border-zinc-800/60">
<tr>
<th className="px-5 py-3 font-medium whitespace-nowrap" scope="col">Username</th>
<th className="px-5 py-3 font-medium whitespace-nowrap" scope="col">Status</th>
<th className="px-5 py-3 font-medium whitespace-nowrap" scope="col">IP Address</th>
<th className="px-5 py-3 font-medium whitespace-nowrap" scope="col">Channel / VOD</th>
<th className="px-5 py-3 font-medium text-right whitespace-nowrap" scope="col">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50 text-zinc-300">
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-5 py-3.5 font-medium text-zinc-200">john_doe99</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online
                                            </span>
</td>
<td className="px-5 py-3.5 text-zinc-400 text-xs font-mono">192.168.1.104</td>
<td className="px-5 py-3.5 text-zinc-400 truncate max-w-[150px]">BeIN Sports 1 HD (EN)</td>
<td className="px-5 py-3.5 text-right relative">
<div className="relative inline-block text-left">
<button className="action-btn text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded-md">
<iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
<div className="action-menu hidden absolute right-0 mt-1 w-36 bg-[#18181b] border border-zinc-700 rounded-md shadow-lg py-1 z-30">
<a className="block px-4 py-1.5 text-left text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white" href="#">Edit User</a>
<a className="block px-4 py-1.5 text-left text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white" href="#">Disconnect</a>
<div className="h-px bg-zinc-800 my-1"></div>
<a className="block px-4 py-1.5 text-left text-xs text-rose-400 hover:bg-zinc-800 hover:text-rose-300" href="#">Delete</a>
</div>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-5 py-3.5 font-medium text-zinc-200">alex_stream</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online
                                            </span>
</td>
<td className="px-5 py-3.5 text-zinc-400 text-xs font-mono">84.221.14.9</td>
<td className="px-5 py-3.5 text-zinc-400 truncate max-w-[150px]">Sky Cinema Premiere</td>
<td className="px-5 py-3.5 text-right relative">
<div className="relative inline-block text-left">
<button className="action-btn text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded-md">
<iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
<div className="action-menu hidden absolute right-0 mt-1 w-36 bg-[#18181b] border border-zinc-700 rounded-md shadow-lg py-1 z-30">
<a className="block px-4 py-1.5 text-left text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white" href="#">Edit User</a>
<a className="block px-4 py-1.5 text-left text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white" href="#">Disconnect</a>
<div className="h-px bg-zinc-800 my-1"></div>
<a className="block px-4 py-1.5 text-left text-xs text-rose-400 hover:bg-zinc-800 hover:text-rose-300" href="#">Delete</a>
</div>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-5 py-3.5 font-medium text-zinc-200">m_garcia</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-medium bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span> Offline
                                            </span>
</td>
<td className="px-5 py-3.5 text-zinc-400 text-xs font-mono">--</td>
<td className="px-5 py-3.5 text-zinc-400 truncate max-w-[150px]">--</td>
<td className="px-5 py-3.5 text-right relative">
<div className="relative inline-block text-left">
<button className="action-btn text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded-md">
<iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
<div className="action-menu hidden absolute right-0 mt-1 w-36 bg-[#18181b] border border-zinc-700 rounded-md shadow-lg py-1 z-30">
<a className="block px-4 py-1.5 text-left text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white" href="#">Edit User</a>
<a className="block px-4 py-1.5 text-left text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white" href="#">Disconnect</a>
<div className="h-px bg-zinc-800 my-1"></div>
<a className="block px-4 py-1.5 text-left text-xs text-rose-400 hover:bg-zinc-800 hover:text-rose-300" href="#">Delete</a>
</div>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-5 py-3.5 font-medium text-zinc-200">test_user_24</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> Expired
                                            </span>
</td>
<td className="px-5 py-3.5 text-zinc-400 text-xs font-mono">--</td>
<td className="px-5 py-3.5 text-zinc-400 truncate max-w-[150px]">--</td>
<td className="px-5 py-3.5 text-right relative">
<div className="relative inline-block text-left">
<button className="action-btn text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded-md">
<iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
<div className="action-menu hidden absolute right-0 bottom-full mb-1 w-36 bg-[#18181b] border border-zinc-700 rounded-md shadow-lg py-1 z-30">
<a className="block px-4 py-1.5 text-left text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white" href="#">Edit User</a>
<a className="block px-4 py-1.5 text-left text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white" href="#">Disconnect</a>
<div className="h-px bg-zinc-800 my-1"></div>
<a className="block px-4 py-1.5 text-left text-xs text-rose-400 hover:bg-zinc-800 hover:text-rose-300" href="#">Delete</a>
</div>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-5 py-3.5 font-medium text-zinc-200">sarah_v</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online
                                            </span>
</td>
<td className="px-5 py-3.5 text-zinc-400 text-xs font-mono">203.45.11.89</td>
<td className="px-5 py-3.5 text-zinc-400 truncate max-w-[150px] italic">VOD: The Matrix (1999)</td>
<td className="px-5 py-3.5 text-right relative">
<div className="relative inline-block text-left">
<button className="action-btn text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded-md">
<iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
<div className="action-menu hidden absolute right-0 bottom-full mb-1 w-36 bg-[#18181b] border border-zinc-700 rounded-md shadow-lg py-1 z-30">
<a className="block px-4 py-1.5 text-left text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white" href="#">Edit User</a>
<a className="block px-4 py-1.5 text-left text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white" href="#">Disconnect</a>
<div className="h-px bg-zinc-800 my-1"></div>
<a className="block px-4 py-1.5 text-left text-xs text-rose-400 hover:bg-zinc-800 hover:text-rose-300" href="#">Delete</a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-6">

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
<h2 className="text-base font-semibold text-zinc-100 mb-5">Server Health</h2>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-zinc-300">CPU Usage</span>
<span className="text-zinc-400">42%</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '42%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-zinc-300">Memory (RAM)</span>
<span className="text-zinc-400">78%</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '78%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-zinc-300">Storage (/home)</span>
<span className="text-zinc-400">65%</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<div className="pt-2">
<button className="w-full py-2 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-md text-sm font-medium text-zinc-300 transition-colors flex items-center justify-center gap-2" id="restart-btn">
<iconify-icon icon="solar:restart-linear" width="16"></iconify-icon>
<span>Restart Services</span>
</button>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
<h2 className="text-base font-semibold text-zinc-100 mb-5">Quick Controls</h2>
<div className="space-y-4">

<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-zinc-200">Auto-Backup</div>
<div className="text-xs text-zinc-500">Daily database snapshot</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-200 after:border-zinc-500 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-zinc-200">Maintenance Mode</div>
<div className="text-xs text-zinc-500">Block new connections</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-200 after:border-zinc-500 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-zinc-200">API Access</div>
<div className="text-xs text-zinc-500">Allow external queries</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-200 after:border-zinc-500 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
</div>
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
