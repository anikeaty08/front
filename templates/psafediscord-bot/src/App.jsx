import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        function switchTab(pageName) {
            // Hide all pages
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('block'); // ensure block is removed
                if(pageName !== 'home') page.classList.remove('flex'); // remove flex from dashboard/others if set
            });

            // Show target page
            const targetPage = document.getElementById(pageName + '-page');
            if (targetPage) {
                targetPage.classList.remove('hidden');
                
                // Dashboard needs flex display, others usually block
                if (pageName === 'dashboard') {
                    targetPage.classList.add('flex');
                } else {
                    targetPage.classList.add('block');
                }
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update Nav State
            document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active-nav'));
            
            // Handle Dashboard Button Active State
            if (pageName === 'dashboard') {
                const dashBtn = document.getElementById('nav-dashboard');
                dashBtn.classList.add('ring-2', 'ring-indigo-500', 'ring-offset-2');
                dashBtn.classList.remove('text-gray-600');
                dashBtn.classList.add('text-indigo-600', 'bg-indigo-50');
            } else {
                const dashBtn = document.getElementById('nav-dashboard');
                dashBtn.classList.remove('ring-2', 'ring-indigo-500', 'ring-offset-2');
                dashBtn.classList.add('text-gray-600');
                dashBtn.classList.remove('text-indigo-600', 'bg-indigo-50');
                
                const activeBtn = document.getElementById('nav-' + pageName);
                if (activeBtn) activeBtn.classList.add('active-nav');
            }

            lucide.createIcons();
        }

        // Dashboard Internal Navigation
        function switchDashTab(viewName) {
            // Hide all dashboard views
            document.querySelectorAll('.dash-view').forEach(view => {
                view.classList.add('hidden');
                view.classList.remove('block');
            });

            // Show target view
            const targetView = document.getElementById('dash-view-' + viewName);
            if (targetView) {
                targetView.classList.remove('hidden');
                targetView.classList.add('block');
            }

            // Update Sidebar Active State
            document.querySelectorAll('.dash-sidebar-link').forEach(link => {
                link.classList.remove('active');
                link.classList.remove('bg-indigo-50', 'text-indigo-700'); // Clean up specific classes
            });

            const activeLink = document.getElementById('dash-link-' + viewName);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // Update Header Title
            const titles = {
                'overview': 'Velocity HQ Overview',
                'moderation': 'Moderation Settings',
                'economy': 'Economy Management',
                'music': 'Music Player Config',
                'leveling': 'Leveling System',
                'analytics': 'Server Analytics',
                'audit': 'Audit Logs'
            };
            document.getElementById('dash-header-title').innerText = titles[viewName] || 'Dashboard';
            document.getElementById('dash-header-crumb').innerText = viewName.charAt(0).toUpperCase() + viewName.slice(1);
            
            lucide.createIcons();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[1600px] bg-white rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-white flex flex-col min-h-[95vh]">

<nav className="absolute top-0 left-0 right-0 z-[60] px-4 md:px-8 py-6 flex justify-between items-start pointer-events-none">

<div className="hidden lg:flex items-center gap-3 pointer-events-auto">
<button className="px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition text-sm font-medium tracking-wide glass-panel font-geist mix-blend-difference" id="nav-features" onclick="switchTab('features')">Features</button>
<button className="px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition text-sm font-medium tracking-wide glass-panel font-geist mix-blend-difference" id="nav-commands" onclick="switchTab('commands')">Commands</button>
<button className="px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition text-sm font-medium tracking-wide glass-panel font-geist mix-blend-difference" id="nav-premium" onclick="switchTab('premium')">Premium</button>
</div>

<button className="lg:hidden p-3 rounded-full glass-panel text-white pointer-events-auto mix-blend-difference">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>

<button className="pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 bg-white px-12 py-5 rounded-b-[2.5rem] shadow-lg flex flex-col items-center justify-center z-50 hover:bg-gray-50 transition border-b border-r border-l border-gray-100" onclick="switchTab('home')">
<div className="w-6 h-6 border-2 border-indigo-600 rounded-full flex items-center justify-center mb-1">
<i className="w-3 h-3 text-indigo-600" data-lucide="zap"></i>
</div>
<span className="text-black font-semibold tracking-tight text-sm font-geist">Velocity Bot</span>
</button>

<div className="flex items-center gap-3 pointer-events-auto">

<a className="flex items-center gap-3 bg-indigo-600 text-white pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:bg-indigo-500 transition font-geist shadow-lg shadow-indigo-900/20 group" href="#">
                    Add to Server
                    <span className="bg-white text-indigo-600 p-1.5 rounded-full transition-transform group-hover:rotate-90">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</a>

<button className="group flex items-center justify-center w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition shadow-lg relative overflow-hidden" id="nav-dashboard" onclick="switchTab('dashboard')" title="Dashboard">
<i className="w-5 h-5 relative z-10" data-lucide="layout-dashboard"></i>
<div className="absolute inset-0 bg-indigo-100/50 scale-0 group-hover:scale-100 transition-transform rounded-full origin-center duration-300"></div>
</button>
</div>
</nav>

<div className="page-content block" id="home-page">

<div className="relative w-full h-[95vh] bg-indigo-950 overflow-hidden shrink-0">

<div className="absolute inset-0">
<img alt="Abstract 3D Shape" className="w-full h-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=3200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 to-transparent mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-black/60 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative w-full h-full pt-32 pb-12 px-8 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 pointer-events-none">

<div className="col-span-12 md:col-span-4 flex flex-col pointer-events-auto h-full justify-between">
<div className="mt-8 space-y-6">
<div className="flex -space-x-3">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-indigo-900 object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&amp;q=80"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-indigo-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;q=80"/>
<div className="w-12 h-12 rounded-full border-2 border-indigo-900 bg-indigo-600 flex items-center justify-center text-white text-xs font-bold font-geist">+20k</div>
</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
</span>
<p className="text-indigo-200 text-sm font-medium tracking-wide font-geist">Trusted by 50,000+ communities</p>
</div>
</div>
<div className="mt-auto pb-4 md:pb-10">
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight font-jakarta mb-4 drop-shadow-xl">
                                Automate. Moderate.<br/>Elevate.
                            </h1>
<p className="text-indigo-200/80 text-lg md:text-xl font-light max-w-xl leading-relaxed font-geist">
                                The all-in-one Discord bot for modern communities. Music, moderation, leveling, and economy in one powerful package.
                            </p>
</div>
</div>

<div className="hidden md:block md:col-span-5"></div>

<div className="col-span-12 md:col-span-3 flex flex-col items-end pointer-events-auto h-full relative">
<div className="flex flex-col gap-3 mt-8 items-end">
<a className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/20 transition shadow-lg font-geist flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
                                Open Source
                            </a>
<a className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-500 transition shadow-lg font-geist flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="message-circle"></i>
                                Support Server
                            </a>
</div>
<div className="mt-auto flex flex-col items-end gap-6 w-full pb-4 md:pb-10">

<div className="glass-panel p-6 rounded-3xl w-full max-w-xs shadow-2xl backdrop-blur-xl border-white/10">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider font-geist">Now Playing</span>
<div className="flex gap-1">
<span className="w-1 h-3 bg-green-400 rounded-full animate-pulse"></span>
<span className="w-1 h-5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></span>
<span className="w-1 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
</div>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 border border-white/10">
<i className="w-6 h-6 text-indigo-300" data-lucide="music"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium font-jakarta truncate w-32">Lo-Fi Beats</h4>
<p className="text-white/50 text-xs font-geist">Velocity Radio</p>
</div>
</div>
<div className="w-full bg-white/10 rounded-full h-1 mb-2">
<div className="bg-indigo-400 h-1 rounded-full w-2/3 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>

<div className="page-content hidden bg-gray-50 flex-1 h-full overflow-y-auto" id="features-page">

<div className="bg-indigo-950 text-white pt-40 pb-16 px-8 md:px-16 rounded-b-[2.5rem] mb-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10 max-w-4xl">
<span className="text-indigo-300 font-semibold tracking-wide text-xs uppercase font-geist mb-3 block">Features</span>
<h2 className="text-5xl lg:text-6xl font-medium tracking-tight font-jakarta mb-6">Built for Super Communities.</h2>
<p className="text-indigo-200 text-lg font-light max-w-2xl font-geist">Explore the powerful modules that make Velocity the #1 choice for community management.</p>
</div>
</div>

</div>

<div className="page-content hidden h-[95vh] flex flex-row bg-white overflow-hidden relative" id="dashboard-page">

<aside className="w-64 border-r border-gray-100 bg-white flex flex-col pt-24 pb-6 px-4 shrink-0 z-40">

<div className="mb-8 px-2">
<button className="w-full flex items-center gap-3 p-2 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition bg-gray-50/50 group">
<div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold font-jakarta shadow-sm">
                            V
                        </div>
<div className="text-left flex-1 min-w-0">
<h4 className="text-sm font-semibold text-gray-900 truncate font-jakarta">Velocity HQ</h4>
<p className="text-xs text-gray-500 font-geist">Manage Server</p>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-indigo-500" data-lucide="chevron-down"></i>
</button>
</div>

<nav className="space-y-1 flex-1 font-geist">
<p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-4">General</p>
<a className="dash-sidebar-link active" href="#" id="dash-link-overview" onclick="switchDashTab('overview')">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i> Overview
                    </a>
<a className="dash-sidebar-link" href="#" id="dash-link-analytics" onclick="switchDashTab('analytics')">
<i className="w-4 h-4" data-lucide="pie-chart"></i> Analytics
                    </a>
<a className="dash-sidebar-link" href="#" id="dash-link-audit" onclick="switchDashTab('audit')">
<i className="w-4 h-4" data-lucide="list-video"></i> Audit Log
                    </a>
<p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-6">Modules</p>
<a className="dash-sidebar-link" href="#" id="dash-link-moderation" onclick="switchDashTab('moderation')">
<i className="w-4 h-4" data-lucide="shield"></i> Moderation
                    </a>
<a className="dash-sidebar-link" href="#" id="dash-link-economy" onclick="switchDashTab('economy')">
<i className="w-4 h-4" data-lucide="coins"></i> Economy
                    </a>
<a className="dash-sidebar-link" href="#" id="dash-link-music" onclick="switchDashTab('music')">
<i className="w-4 h-4" data-lucide="music-2"></i> Music Player
                    </a>
<a className="dash-sidebar-link" href="#" id="dash-link-leveling" onclick="switchDashTab('leveling')">
<i className="w-4 h-4" data-lucide="award"></i> Leveling
                    </a>
<p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-6">Settings</p>
<a className="dash-sidebar-link" href="#">
<i className="w-4 h-4" data-lucide="settings"></i> Bot Settings
                    </a>
<a className="dash-sidebar-link text-red-600 hover:text-red-700 hover:bg-red-50" href="#">
<i className="w-4 h-4" data-lucide="log-out"></i> Logout
                    </a>
</nav>
</aside>

<main className="flex-1 bg-gray-50/50 overflow-y-auto relative pt-24 pb-12 px-8">

<header className="mb-8 flex justify-between items-center">
<div>
<div className="flex items-center gap-2 text-sm text-gray-500 font-geist mb-1">
<span>Dashboard</span>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium" id="dash-header-crumb">Overview</span>
</div>
<h1 className="text-2xl font-semibold text-gray-900 font-jakarta tracking-tight" id="dash-header-title">Velocity HQ Overview</h1>
</div>

<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 font-geist shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="refresh-cw"></i> Sync
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-500 font-geist shadow-sm shadow-indigo-200">
<i className="w-3.5 h-3.5" data-lucide="save"></i> Save Changes
                        </button>
</div>
</header>


<div className="dash-view block space-y-8" id="dash-view-overview">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-gray-400 uppercase font-geist">Total Members</span>
<i className="w-4 h-4 text-gray-400" data-lucide="users"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-bold text-gray-900 font-jakarta">12,403</span>
<span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+12%</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-gray-400 uppercase font-geist">Commands Today</span>
<i className="w-4 h-4 text-gray-400" data-lucide="terminal"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-bold text-gray-900 font-jakarta">8,920</span>
<span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+5%</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-gray-400 uppercase font-geist">Server Level</span>
<i className="w-4 h-4 text-gray-400" data-lucide="zap"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-bold text-gray-900 font-jakarta">Premium</span>
<span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">Tier 2</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-gray-400 uppercase font-geist">Uptime</span>
<i className="w-4 h-4 text-gray-400" data-lucide="clock"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-bold text-gray-900 font-jakarta">99.9%</span>
<span className="text-xs font-medium text-gray-500 font-geist">Stable</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
<h3 className="text-base font-semibold text-gray-900 font-jakarta mb-4">Quick Module Toggle</h3>
<div className="space-y-4">

<div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
<i className="w-5 h-5" data-lucide="shield-alert"></i>
</div>
<div>
<h4 className="font-medium text-gray-900 font-jakarta">Auto Moderation</h4>
<p className="text-xs text-gray-500 font-geist">Protect chat from spam and raids.</p>
</div>
</div>
<input checked="" className="toggle-switch" type="checkbox"/>
</div>

<div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
<i className="w-5 h-5" data-lucide="music"></i>
</div>
<div>
<h4 className="font-medium text-gray-900 font-jakarta">Music System</h4>
<p className="text-xs text-gray-500 font-geist">High quality audio streaming.</p>
</div>
</div>
<input checked="" className="toggle-switch" type="checkbox"/>
</div>

<div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-5 h-5" data-lucide="coins"></i>
</div>
<div>
<h4 className="font-medium text-gray-900 font-jakarta">Economy</h4>
<p className="text-xs text-gray-500 font-geist">Global currency and shops.</p>
</div>
</div>
<input className="toggle-switch" type="checkbox"/>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col">
<h3 className="text-base font-semibold text-gray-900 font-jakarta mb-4">Recent Audit Logs</h3>
<div className="space-y-4 flex-1 overflow-y-auto max-h-[300px] pr-2">
<div className="flex gap-3 items-start">
<div className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
<div>
<p className="text-sm text-gray-900 font-medium font-geist">User Banned</p>
<p className="text-xs text-gray-500 font-geist">@SpamBot was banned by AutoMod.</p>
<span className="text-[10px] text-gray-400 mt-1 block">2 mins ago</span>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
<div>
<p className="text-sm text-gray-900 font-medium font-geist">Settings Changed</p>
<p className="text-xs text-gray-500 font-geist">Prefix changed to '!' by Admin.</p>
<span className="text-[10px] text-gray-400 mt-1 block">15 mins ago</span>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
<div>
<p className="text-sm text-gray-900 font-medium font-geist">Bot Added</p>
<p className="text-xs text-gray-500 font-geist">Velocity added to #general.</p>
<span className="text-[10px] text-gray-400 mt-1 block">1 hour ago</span>
</div>
</div>
</div>
<button className="mt-4 w-full py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition font-geist">View Full Log</button>
</div>
</div>
</div>

<div className="dash-view hidden space-y-8" id="dash-view-moderation">

<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
<div className="p-6 border-b border-gray-100">
<h2 className="text-lg font-semibold text-gray-900 font-jakarta">Automod Configuration</h2>
<p className="text-sm text-gray-500 font-geist">Configure how the bot handles spam and bad behavior.</p>
</div>
<div className="p-6 grid gap-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 font-geist mb-2">Anti-Spam Sensitivity</label>
<select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none font-geist">
<option>Low (Allow some repetition)</option>
<option selected="">Medium (Standard)</option>
<option>High (Strict)</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 font-geist mb-2">Max Mentions</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none font-geist" type="number" value="5"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 font-geist mb-2">Blacklisted Words (Comma separated)</label>
<textarea className="w-full h-24 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none font-geist resize-none" placeholder="badword1, badword2..."></textarea>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900 font-jakarta">Delete Invite Links</p>
<p className="text-xs text-gray-500 font-geist">Automatically delete Discord server invites.</p>
</div>
<input checked="" className="toggle-switch" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900 font-jakarta">Ignore Admins</p>
<p className="text-xs text-gray-500 font-geist">Admins bypass all filters.</p>
</div>
<input checked="" className="toggle-switch" type="checkbox"/>
</div>
</div>
</div>
</div>
</div>

<div className="dash-view hidden space-y-8" id="dash-view-music">

<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
<div className="p-6 border-b border-gray-100 flex justify-between items-center">
<div>
<h2 className="text-lg font-semibold text-gray-900 font-jakarta">Music Player Settings</h2>
<p className="text-sm text-gray-500 font-geist">Control audio quality and default behaviors.</p>
</div>
<div className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold font-geist border border-indigo-100">PRO FEATURE</div>
</div>
<div className="p-6 grid gap-8">

<div className="space-y-6">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900 font-jakarta">24/7 Mode</p>
<p className="text-xs text-gray-500 font-geist">Bot stays in voice channel even when music stops.</p>
</div>
<input className="toggle-switch" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900 font-jakarta">Default Volume</p>
<p className="text-xs text-gray-500 font-geist">Set the startup volume for the bot.</p>
</div>
<div className="flex items-center gap-3 w-1/3">
<i className="w-4 h-4 text-gray-400" data-lucide="volume-2"></i>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" type="range" value="50"/>
<span className="text-sm font-medium text-gray-700 w-8">50%</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900 font-jakarta">Announce Songs</p>
<p className="text-xs text-gray-500 font-geist">Post a message when a new song starts.</p>
</div>
<input checked="" className="toggle-switch" type="checkbox"/>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="page-content hidden bg-cyan-50 flex-1 overflow-y-auto" id="premium-page">

<div className="md:px-16 w-full pt-40 pr-8 pb-24 pl-8 relative">
<div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
<span className="text-indigo-600 font-semibold tracking-wide text-xs uppercase font-geist mb-3 block">Premium</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-blue-900 font-jakarta mb-4">Simple pricing.</h2>
<p className="text-blue-500 text-lg font-light font-geist">Start for free, upgrade as you grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

<div className="bg-white rounded-[2rem] p-8 border border-cyan-100 shadow-sm">
<h3 className="text-lg font-medium text-blue-900 font-jakarta mb-2">Pro</h3>
<span className="text-4xl font-semibold tracking-tight text-blue-900 font-jakarta">$4.99</span>
<ul className="mt-6 space-y-3">
<li className="flex gap-2 text-sm text-blue-600 font-geist"><i className="w-4 h-4" data-lucide="check"></i> High Quality Audio</li>
<li className="flex gap-2 text-sm text-blue-600 font-geist"><i className="w-4 h-4" data-lucide="check"></i> Custom Branding</li>
</ul>
</div>

</div>
</div>
</div>
<div className="page-content hidden bg-white flex-1 overflow-y-auto" id="commands-page">

<div className="bg-zinc-900 text-white pt-40 pb-16 px-8 md:px-16 rounded-b-[2.5rem] mb-12">
<h2 className="text-5xl font-medium tracking-tight font-jakarta mb-4">Commands</h2>
</div>
<div className="px-8 md:px-16 pb-24 max-w-5xl mx-auto">
<div className="border border-gray-200 rounded-3xl overflow-hidden">
<div className="p-6 border-b border-gray-100 flex justify-between"><code className="text-indigo-600">/play</code> <span>Music</span></div>
<div className="p-6 border-b border-gray-100 flex justify-between"><code className="text-indigo-600">/ban</code> <span>Mod</span></div>
</div>
</div>
</div>
</div>


    </>
  );
}
