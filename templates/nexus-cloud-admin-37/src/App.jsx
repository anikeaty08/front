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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
navy: {
950: '#020408',
900: '#050a14',
800: '#0b1221',
700: '#162036',
},
cyan: {
400: '#22d3ee',
500: '#06b6d4',
900: '#083344',
}
},
boxShadow: {
'glow': '0 0 15px rgba(34, 211, 238, 0.15)',
'glow-sm': '0 0 8px rgba(34, 211, 238, 0.2)',
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Tab Switching Logic
        function switchTab(tabId) {
            // Hide all views
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show selected view
            const targetView = document.getElementById('view-' + tabId);
            if(targetView) {
                targetView.classList.add('active');
            }

            // Update Breadcrumb
            const breadcrumb = document.getElementById('breadcrumb-current');
            breadcrumb.innerText = tabId.charAt(0).toUpperCase() + tabId.slice(1);

            // Update Nav Styles
            document.querySelectorAll('.nav-item').forEach(btn => {
                // Reset to default
                btn.classList.remove('text-cyan-400', 'bg-cyan-900/10', 'border-cyan-400');
                btn.classList.add('text-slate-400', 'border-transparent');
            });

            // Set Active State
            const activeBtn = document.getElementById('nav-' + tabId);
            if(activeBtn) {
                activeBtn.classList.remove('text-slate-400', 'border-transparent');
                activeBtn.classList.add('text-cyan-400', 'bg-cyan-900/10', 'border-cyan-400');
            }

            // Mobile menu close logic
            if(window.innerWidth < 768) {
                const sidebar = document.getElementById('sidebar');
                if(!sidebar.classList.contains('-translate-x-full')) {
                    sidebar.classList.add('-translate-x-full');
                }
            }
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
            } else {
                sidebar.classList.add('-translate-x-full');
            }
        }
    
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
      

<div className="scanlines absolute inset-0 pointer-events-none fixed z-50"></div>

<header className="md:hidden flex items-center justify-between p-4 bg-navy-900 border-b border-white/10 z-40 fixed w-full top-0">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-cyan-500/20 border border-cyan-500 flex items-center justify-center rounded-sm">
<span className="text-cyan-400 font-bold text-xs">N</span>
</div>
<span className="text-white tracking-widest font-bold text-sm">NEXUS</span>
</div>
<button className="text-slate-400 hover:text-white" onclick="toggleMobileMenu()">
<i data-lucide="menu"></i>
</button>
</header>

<aside className="w-64 bg-navy-900/90 backdrop-blur-md border-r border-white/5 flex-col flex fixed md:relative h-full z-40 -translate-x-full md:translate-x-0 transition-transform duration-300 pt-16 md:pt-0" id="sidebar">

<div className="h-16 flex items-center px-6 border-b border-white/5 shrink-0 hidden md:flex">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-8 h-8 bg-cyan-900/20 border border-cyan-500/50 flex items-center justify-center shadow-glow-sm transform rotate-45">
<span className="text-cyan-400 font-bold text-lg -rotate-45 font-mono">N</span>
</div>
</div>
<div>
<h1 className="text-white tracking-[0.2em] font-bold text-sm">NEXUS</h1>
<p className="text-[10px] text-slate-500 tracking-wider uppercase">Console v4.2</p>
</div>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<p className="px-3 text-[10px] uppercase tracking-widest text-slate-600 font-semibold mb-2 mt-2">Platform</p>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-sm text-cyan-400 bg-cyan-900/10 border-l-2 border-cyan-400 transition-all group" id="nav-dashboard" onclick="switchTab('dashboard')">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
                Dashboard
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-sm text-slate-400 hover:text-cyan-200 hover:bg-white/5 border-l-2 border-transparent transition-all group" id="nav-services" onclick="switchTab('services')">
<i className="w-4 h-4 group-hover:text-cyan-400 transition-colors" data-lucide="box"></i>
                Services
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-sm text-slate-400 hover:text-cyan-200 hover:bg-white/5 border-l-2 border-transparent transition-all group" id="nav-infrastructure" onclick="switchTab('infrastructure')">
<i className="w-4 h-4 group-hover:text-cyan-400 transition-colors" data-lucide="cpu"></i>
                Infrastructure
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-sm text-slate-400 hover:text-cyan-200 hover:bg-white/5 border-l-2 border-transparent transition-all group" id="nav-storage" onclick="switchTab('storage')">
<i className="w-4 h-4 group-hover:text-cyan-400 transition-colors" data-lucide="database"></i>
                Storage
                <span className="ml-auto text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-white/5">98%</span>
</button>
<p className="px-3 text-[10px] uppercase tracking-widest text-slate-600 font-semibold mb-2 mt-6">Management</p>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-sm text-slate-400 hover:text-cyan-200 hover:bg-white/5 border-l-2 border-transparent transition-all group" id="nav-billing" onclick="switchTab('billing')">
<i className="w-4 h-4 group-hover:text-cyan-400 transition-colors" data-lucide="credit-card"></i>
                Billing
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-sm text-slate-400 hover:text-cyan-200 hover:bg-white/5 border-l-2 border-transparent transition-all group" id="nav-security" onclick="switchTab('security')">
<i className="w-4 h-4 group-hover:text-cyan-400 transition-colors" data-lucide="shield-check"></i>
                Security
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-sm text-slate-400 hover:text-cyan-200 hover:bg-white/5 border-l-2 border-transparent transition-all group" id="nav-logs" onclick="switchTab('logs')">
<i className="w-4 h-4 group-hover:text-cyan-400 transition-colors" data-lucide="terminal-square"></i>
                Logs &amp; Monitoring
            </button>
<div className="mt-8 pt-6 border-t border-white/5 px-3">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-sm text-slate-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent transition-all" id="nav-settings" onclick="switchTab('settings')">
<i className="w-4 h-4" data-lucide="settings"></i>
                    Settings
                </button>
</div>
</nav>

<div className="p-4 border-t border-white/5 bg-navy-950/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-900 to-slate-800 border border-white/10 flex items-center justify-center text-xs text-white font-mono">DX</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-white truncate">DevOps Lead</p>
<p className="text-[10px] text-slate-500 truncate">admin@nexus.io</p>
</div>
<i className="w-4 h-4 text-slate-600" data-lucide="chevron-up"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-[#020408]">

<header className="h-16 border-b border-white/5 bg-navy-900/50 backdrop-blur-sm flex items-center justify-between px-6 shrink-0 pt-16 md:pt-0">

<div className="flex items-center gap-4 w-full max-w-xl">
<div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-500">
<span className="text-cyan-500">NEXUS</span>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-slate-300" id="breadcrumb-current">Dashboard</span>
</div>
<div className="h-6 w-[1px] bg-white/10 hidden md:block"></div>
<div className="relative flex-1 group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" data-lucide="search"></i>
<input className="w-full bg-navy-950 border border-white/10 text-xs text-white pl-9 pr-4 py-2 focus:outline-none focus:border-cyan-500/50 focus:shadow-glow-sm transition-all placeholder:text-slate-700 font-mono rounded-none" placeholder="CMD + K to search resources..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
<span className="text-[10px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-slate-500 font-mono">CMD</span>
<span className="text-[10px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-slate-500 font-mono">K</span>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<button className="relative p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-sm transition-colors border border-transparent hover:border-white/5">
<i className="w-4 h-4" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-glow-sm"></span>
</button>
<button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium hover:bg-cyan-500/20 transition-all shadow-glow-sm">
<i className="w-3 h-3" data-lucide="plus"></i>
                    CREATE SERVICE
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 relative">

<div className="tab-content active space-y-6 max-w-7xl mx-auto" id="view-dashboard">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl text-white font-semibold tracking-tight">System Overview</h2>
<p className="text-xs text-slate-500 mt-1 font-mono">Last updated: <span className="text-cyan-500/80">LIVE</span></p>
</div>
<div className="flex gap-2">
<div className="flex items-center gap-2 px-3 py-1 bg-navy-800 border border-white/5 rounded-none text-xs text-slate-400">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                             All Systems Operational
                         </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">


<div className="glass-panel p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-12 h-12 text-cyan-500" data-lucide="server"></i>
</div>
<h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Active Instances</h3>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-mono font-light">14</span>
<span className="text-xs text-emerald-400 font-mono flex items-center">
<i className="w-3 h-3 mr-0.5" data-lucide="arrow-up"></i>2
                            </span>
</div>
<div className="mt-3 w-full bg-navy-950 h-1 rounded-full overflow-hidden">
<div className="bg-cyan-500 h-full w-[70%] shadow-glow-sm"></div>
</div>
</div>

<div className="glass-panel p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-12 h-12 text-purple-500" data-lucide="activity"></i>
</div>
<h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Global Latency</h3>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-mono font-light">24<span className="text-sm text-slate-500 ml-1">ms</span></span>
</div>
<div className="mt-3 flex gap-0.5 h-3 items-end">
<div className="w-1 h-2 bg-navy-800"></div>
<div className="w-1 h-3 bg-navy-800"></div>
<div className="w-1 h-4 bg-purple-500 shadow-glow-sm"></div>
<div className="w-1 h-2 bg-navy-800"></div>
<div className="w-1 h-3 bg-purple-500/50"></div>
</div>
</div>

<div className="glass-panel p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-12 h-12 text-amber-500" data-lucide="hard-drive"></i>
</div>
<h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Storage Used</h3>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-mono font-light">8.4<span className="text-sm text-slate-500 ml-1">TB</span></span>
<span className="text-xs text-slate-500 font-mono">/ 10TB</span>
</div>
<div className="mt-3 w-full bg-navy-950 h-1 rounded-full overflow-hidden">
<div className="bg-amber-500 h-full w-[84%] shadow-glow-sm"></div>
</div>
</div>

<div className="glass-panel p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-12 h-12 text-emerald-500" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Est. Cost</h3>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-mono font-light">$1,240</span>
<span className="text-xs text-slate-500 font-mono">+12%</span>
</div>
<p className="text-[10px] text-slate-600 mt-2 font-mono">Next invoice: Nov 01</p>
</div>
</div>

<div className="glass-panel p-6 border border-white/5">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="bar-chart-2"></i>
                            Traffic Volume
                        </h3>
<div className="flex bg-navy-950 border border-white/10 rounded-none p-0.5">
<button className="px-3 py-1 text-[10px] font-medium text-white bg-white/10 rounded-sm">1H</button>
<button className="px-3 py-1 text-[10px] font-medium text-slate-500 hover:text-white transition-colors">24H</button>
<button className="px-3 py-1 text-[10px] font-medium text-slate-500 hover:text-white transition-colors">7D</button>
</div>
</div>

<div className="relative h-64 w-full border-b border-l border-white/10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]">
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#22d3ee', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#22d3ee', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0,180 C50,160 100,190 150,150 C200,110 250,130 300,100 C350,70 400,90 450,60 C500,30 550,50 600,40 C650,30 700,50 750,80 C800,110 850,90 900,120 L900,256 L0,256 Z" fill="url(#gradient)"></path>
<path className="drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" d="M0,180 C50,160 100,190 150,150 C200,110 250,130 300,100 C350,70 400,90 450,60 C500,30 550,50 600,40 C650,30 700,50 750,80 C800,110 850,90 900,120" fill="none" stroke="#22d3ee" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
<div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 bg-navy-900 border border-cyan-500/50 p-2 rounded shadow-glow-sm pointer-events-none">
<p className="text-[10px] text-slate-400 font-mono">REQ/S</p>
<p className="text-lg text-white font-mono font-bold">2,405</p>
</div>
</div>
</div>
</div>


<div className="tab-content space-y-6 max-w-7xl mx-auto" id="view-services">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div>
<h2 className="text-xl text-white font-semibold tracking-tight">Active Services</h2>
<p className="text-xs text-slate-500 mt-1">Manage compute instances and containers.</p>
</div>
<div className="flex gap-3">
<button className="px-3 py-1.5 border border-white/10 bg-navy-800 text-xs text-slate-300 hover:text-white hover:border-white/30 transition-all flex items-center gap-2">
<i className="w-3 h-3" data-lucide="filter"></i> Filter
                         </button>
<button className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium shadow-glow-sm transition-all flex items-center gap-2">
<i className="w-3 h-3" data-lucide="plus"></i> Deploy New
                         </button>
</div>
</div>

<div className="glass-panel border border-white/5 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-xs">
<thead className="bg-navy-950 border-b border-white/10 uppercase font-mono text-slate-500 tracking-wider">
<tr>
<th className="p-4 w-10">
<div className="w-4 h-4 border border-slate-600 rounded-sm cursor-pointer"></div>
</th>
<th className="p-4 font-medium">Service Name</th>
<th className="p-4 font-medium">Region</th>
<th className="p-4 font-medium">Status</th>
<th className="p-4 font-medium">Type</th>
<th className="p-4 font-medium text-right">CPU / RAM</th>
<th className="p-4 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">

<tr className="hover:bg-white/[0.02] group transition-colors">
<td className="p-4">
<div className="w-4 h-4 border border-slate-600 rounded-sm cursor-pointer hover:border-cyan-400"></div>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-cyan-900/30 rounded border border-cyan-500/20 text-cyan-400">
<i className="w-4 h-4" data-lucide="box"></i>
</div>
<div>
<p className="text-white font-medium">core-api-v2</p>
<p className="text-slate-600 font-mono text-[10px]">id-492a-31b</p>
</div>
</div>
</td>
<td className="p-4 text-slate-400 font-mono">us-east-1</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase font-bold tracking-wide shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Running
                                        </span>
</td>
<td className="p-4 text-slate-400">t3.large</td>
<td className="p-4 text-right font-mono text-slate-300">
                                        45% / 2.1GB
                                        <div className="w-full h-1 bg-navy-950 mt-1 rounded-full overflow-hidden">
<div className="w-[45%] h-full bg-cyan-600"></div>
</div>
</td>
<td className="p-4 text-right">
<button className="text-slate-500 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>


<div className="tab-content space-y-6 max-w-7xl mx-auto" id="view-infrastructure">
<div className="flex items-center justify-between mb-2">
<div>
<h2 className="text-xl text-white font-semibold tracking-tight">Infrastructure Map</h2>
<p className="text-xs text-slate-500 mt-1">Physical and virtual node topology.</p>
</div>
<button className="px-3 py-1.5 bg-navy-800 border border-white/10 text-xs text-slate-300 hover:text-white flex items-center gap-2">
<i className="w-3 h-3" data-lucide="refresh-cw"></i> Refresh Topology
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-4 border border-white/5">
<div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">US-East Cluster</span>
<span className="text-[10px] text-emerald-400 font-mono">HEALTHY</span>
</div>
<div className="space-y-3">

<div className="bg-navy-950 p-3 border border-white/5 hover:border-cyan-500/30 transition-colors group">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
<span className="text-xs text-white font-mono">node-01</span>
</div>
<span className="text-[10px] text-slate-500">10.0.1.42</span>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-slate-500"><span>CPU</span><span>82%</span></div>
<div className="h-1 w-full bg-navy-800 overflow-hidden"><div className="h-full bg-cyan-500 w-[82%]"></div></div>
</div>
</div>

<div className="bg-navy-950 p-3 border border-white/5 hover:border-cyan-500/30 transition-colors group">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
<span className="text-xs text-white font-mono">node-02</span>
</div>
<span className="text-[10px] text-slate-500">10.0.1.43</span>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-slate-500"><span>CPU</span><span>45%</span></div>
<div className="h-1 w-full bg-navy-800 overflow-hidden"><div className="h-full bg-cyan-500 w-[45%]"></div></div>
</div>
</div>
</div>
</div>

<div className="glass-panel p-4 border border-white/5">
<div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">EU-West Cluster</span>
<span className="text-[10px] text-emerald-400 font-mono">HEALTHY</span>
</div>
<div className="space-y-3">

<div className="bg-navy-950 p-3 border border-white/5 hover:border-cyan-500/30 transition-colors group">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
<span className="text-xs text-white font-mono">eu-node-01</span>
</div>
<span className="text-[10px] text-slate-500">172.16.0.5</span>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-slate-500"><span>CPU</span><span>22%</span></div>
<div className="h-1 w-full bg-navy-800 overflow-hidden"><div className="h-full bg-purple-500 w-[22%]"></div></div>
</div>
</div>
</div>
</div>

<div className="glass-panel p-4 border border-white/5">
<div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Edge Network</span>
<span className="text-[10px] text-emerald-400 font-mono">ACTIVE</span>
</div>
<div className="relative h-40 flex items-center justify-center">
<div className="absolute w-24 h-24 rounded-full border border-cyan-500/20 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-16 h-16 rounded-full border border-cyan-500/40 animate-[spin_5s_linear_infinite_reverse]"></div>
<div className="text-center">
<h4 className="text-2xl text-white font-mono">14ms</h4>
<p className="text-[10px] text-slate-500">Avg Latency</p>
</div>
</div>
</div>
</div>
</div>


<div className="tab-content space-y-6 max-w-7xl mx-auto" id="view-storage">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-xl text-white font-semibold tracking-tight">Object Storage</h2>
<p className="text-xs text-slate-500 mt-1">Buckets, volumes and backups.</p>
</div>
<button className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium shadow-glow-sm transition-all flex items-center gap-2">
<i className="w-3 h-3" data-lucide="plus"></i> Create Bucket
                    </button>
</div>

<div className="glass-panel p-4 mb-6">
<div className="flex justify-between text-xs mb-2">
<span className="text-white">Total Storage Used</span>
<span className="text-slate-400 font-mono">8.4 TB / 10 TB</span>
</div>
<div className="h-2 w-full bg-navy-950 rounded-full overflow-hidden flex">
<div className="h-full bg-cyan-500 w-[40%]"></div>
<div className="h-full bg-purple-500 w-[30%]"></div>
<div className="h-full bg-emerald-500 w-[14%]"></div>
</div>
<div className="flex gap-4 mt-3">
<div className="flex items-center gap-2 text-[10px] text-slate-400">
<div className="w-2 h-2 rounded-full bg-cyan-500"></div> Media
                        </div>
<div className="flex items-center gap-2 text-[10px] text-slate-400">
<div className="w-2 h-2 rounded-full bg-purple-500"></div> Logs
                        </div>
<div className="flex items-center gap-2 text-[10px] text-slate-400">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div> Backups
                        </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="glass-panel p-4 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-navy-950 border border-white/10 rounded text-cyan-400">
<i className="w-5 h-5" data-lucide="folder"></i>
</div>
<i className="w-4 h-4 text-slate-600 group-hover:text-white" data-lucide="more-vertical"></i>
</div>
<h3 className="text-sm text-white font-medium">assets-production</h3>
<p className="text-xs text-slate-500 mt-1">12,402 files</p>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-400">
<span>us-east-1</span>
<span>4.2 TB</span>
</div>
</div>
<div className="glass-panel p-4 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-navy-950 border border-white/10 rounded text-purple-400">
<i className="w-5 h-5" data-lucide="archive"></i>
</div>
<i className="w-4 h-4 text-slate-600 group-hover:text-white" data-lucide="more-vertical"></i>
</div>
<h3 className="text-sm text-white font-medium">system-logs-archive</h3>
<p className="text-xs text-slate-500 mt-1">842 files</p>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-400">
<span>us-east-1</span>
<span>3.1 TB</span>
</div>
</div>
<div className="glass-panel p-4 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-navy-950 border border-white/10 rounded text-emerald-400">
<i className="w-5 h-5" data-lucide="database-backup"></i>
</div>
<i className="w-4 h-4 text-slate-600 group-hover:text-white" data-lucide="more-vertical"></i>
</div>
<h3 className="text-sm text-white font-medium">db-snapshots-daily</h3>
<p className="text-xs text-slate-500 mt-1">45 files</p>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-400">
<span>eu-west-2</span>
<span>1.1 TB</span>
</div>
</div>
</div>
</div>


<div className="tab-content space-y-6 max-w-7xl mx-auto" id="view-billing">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-2 glass-panel p-6 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
<h3 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">Current Period Usage</h3>
<div className="flex items-end gap-2 mb-2">
<h2 className="text-4xl text-white font-mono font-light">$1,240.52</h2>
<p className="text-sm text-slate-400 mb-1">USD</p>
</div>
<p className="text-xs text-slate-500 mb-6">Forecasted total: <span className="text-white">$1,450.00</span></p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-300">Compute (EC2)</span>
<span className="text-white">$840.20</span>
</div>
<div className="h-1.5 w-full bg-navy-950 rounded-full"><div className="h-full bg-cyan-500 w-[65%] shadow-glow-sm"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-300">Database (RDS)</span>
<span className="text-white">$210.00</span>
</div>
<div className="h-1.5 w-full bg-navy-950 rounded-full"><div className="h-full bg-purple-500 w-[20%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-300">Data Transfer</span>
<span className="text-white">$190.32</span>
</div>
<div className="h-1.5 w-full bg-navy-950 rounded-full"><div className="h-full bg-amber-500 w-[15%]"></div></div>
</div>
</div>
</div>
<div className="glass-panel p-6 border border-white/5 flex flex-col justify-between">
<div>
<h3 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">Payment Method</h3>
<div className="bg-gradient-to-br from-navy-800 to-navy-950 border border-white/10 p-4 rounded-lg relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="flex justify-between items-start mb-6">
<i className="text-cyan-400 w-6 h-6" data-lucide="credit-card"></i>
<span className="text-xs text-slate-400 font-mono">VISA</span>
</div>
<div className="text-white font-mono text-lg tracking-widest mb-2">**** **** **** 4242</div>
<div className="flex justify-between text-[10px] text-slate-500 uppercase">
<span>Expires</span>
<span>12/26</span>
</div>
</div>
</div>
<button className="w-full mt-4 py-2 border border-white/10 text-xs text-slate-300 hover:bg-white/5 transition-colors">Manage Payment Methods</button>
</div>
</div>
<div className="glass-panel border border-white/5">
<div className="p-4 border-b border-white/5">
<h3 className="text-sm font-medium text-white">Invoice History</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs">
<thead className="bg-navy-950 text-slate-500 uppercase">
<tr>
<th className="p-4 font-medium">Invoice ID</th>
<th className="p-4 font-medium">Date</th>
<th className="p-4 font-medium">Amount</th>
<th className="p-4 font-medium">Status</th>
<th className="p-4 font-medium text-right">Download</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/[0.02]">
<td className="p-4 text-cyan-400 font-mono">INV-2023-001</td>
<td className="p-4 text-slate-300">Oct 01, 2023</td>
<td className="p-4 text-white">$1,105.00</td>
<td className="p-4"><span className="text-emerald-400 px-1.5 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20 text-[10px] uppercase">Paid</span></td>
<td className="p-4 text-right"><i className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer ml-auto" data-lucide="download"></i></td>
</tr>
<tr className="hover:bg-white/[0.02]">
<td className="p-4 text-cyan-400 font-mono">INV-2023-002</td>
<td className="p-4 text-slate-300">Sep 01, 2023</td>
<td className="p-4 text-white">$980.50</td>
<td className="p-4"><span className="text-emerald-400 px-1.5 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20 text-[10px] uppercase">Paid</span></td>
<td className="p-4 text-right"><i className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer ml-auto" data-lucide="download"></i></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>


<div className="tab-content space-y-6 max-w-7xl mx-auto" id="view-security">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<div>
<h2 className="text-xl text-white font-semibold tracking-tight">Security Center</h2>
<p className="text-xs text-slate-500 mt-1">Identity Access Management &amp; Threat Detection.</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400">Security Score:</span>
<div className="h-2 w-24 bg-navy-950 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[92%] shadow-glow-sm"></div>
</div>
<span className="text-xs text-emerald-400 font-bold">92/100</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="glass-panel border border-white/5">
<div className="p-4 border-b border-white/5 flex justify-between items-center">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="alert-triangle"></i>
                                Recent Alerts
                            </h3>
</div>
<div className="p-0">
<div className="p-4 border-b border-white/5 hover:bg-white/[0.02]">
<div className="flex justify-between items-start mb-1">
<span className="text-xs text-white font-medium">Unusual Login Attempt</span>
<span className="text-[10px] text-slate-500">2 min ago</span>
</div>
<p className="text-[10px] text-slate-400 mb-2">Failed login from IP 45.22.19.112 (CN). Blocked by firewall.</p>
<span className="px-1.5 py-0.5 bg-amber-500/10 text-amber-500 text-[10px] border border-amber-500/20 rounded">Medium Severity</span>
</div>
<div className="p-4 hover:bg-white/[0.02]">
<div className="flex justify-between items-start mb-1">
<span className="text-xs text-white font-medium">Policy Update</span>
<span className="text-[10px] text-slate-500">1 hour ago</span>
</div>
<p className="text-[10px] text-slate-400 mb-2">IAM role 'admin' modified by user 'DevOps Lead'.</p>
<span className="px-1.5 py-0.5 bg-cyan-500/10 text-cyan-500 text-[10px] border border-cyan-500/20 rounded">Info</span>
</div>
</div>
</div>

<div className="glass-panel border border-white/5">
<div className="p-4 border-b border-white/5 flex justify-between items-center">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="lock"></i>
                                Active Firewall Rules
                            </h3>
<button className="text-[10px] text-cyan-400 hover:text-white">Edit Rules</button>
</div>
<table className="w-full text-left text-xs">
<thead className="bg-navy-950 text-slate-500">
<tr>
<th className="p-3 font-medium">Type</th>
<th className="p-3 font-medium">Port</th>
<th className="p-3 font-medium">Source</th>
<th className="p-3 font-medium">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr>
<td className="p-3 text-slate-300">SSH</td>
<td className="p-3 text-slate-400 font-mono">22</td>
<td className="p-3 text-slate-400 font-mono">10.0.0.0/16</td>
<td className="p-3"><span className="text-emerald-400">ALLOW</span></td>
</tr>
<tr>
<td className="p-3 text-slate-300">HTTPS</td>
<td className="p-3 text-slate-400 font-mono">443</td>
<td className="p-3 text-slate-400 font-mono">0.0.0.0/0</td>
<td className="p-3"><span className="text-emerald-400">ALLOW</span></td>
</tr>
<tr>
<td className="p-3 text-slate-300">Database</td>
<td className="p-3 text-slate-400 font-mono">5432</td>
<td className="p-3 text-slate-400 font-mono">Any</td>
<td className="p-3"><span className="text-red-400">DENY</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>


<div className="tab-content space-y-6 max-w-7xl mx-auto h-full pb-20" id="view-logs">
<div className="flex items-center justify-between mb-2">
<div>
<h2 className="text-xl text-white font-semibold tracking-tight">Real-time Logs</h2>
<p className="text-xs text-slate-500 mt-1">Live stream from production cluster.</p>
</div>
<div className="flex items-center gap-2">
<span className="flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-emerald-400 font-mono">CONNECTED</span>
</div>
</div>

<div className="flex gap-4 p-4 glass-panel border border-white/5">
<div className="flex-1">
<label className="text-[10px] uppercase text-slate-500 font-bold mb-1 block">Search Query</label>
<input className="w-full bg-navy-950 border border-white/10 text-xs text-white p-2 rounded-sm font-mono focus:border-cyan-500/50 outline-none" placeholder='level:error service:"api"' type="text"/>
</div>
<div className="w-40">
<label className="text-[10px] uppercase text-slate-500 font-bold mb-1 block">Time Range</label>
<select className="w-full bg-navy-950 border border-white/10 text-xs text-white p-2 rounded-sm outline-none">
<option>Last 15m</option>
<option>Last Hour</option>
<option>Last 24h</option>
</select>
</div>
</div>

<div className="bg-[#0a0e17] border border-white/10 rounded-sm shadow-inner p-4 font-mono text-xs overflow-y-auto h-[500px] relative">
<div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0a0e17] to-transparent pointer-events-none"></div>
<div className="space-y-1.5 pb-4">
<div className="flex gap-4 opacity-50 hover:opacity-100 hover:bg-white/5 p-1 rounded transition-opacity">
<span className="text-slate-500 w-32 shrink-0">Oct 24 10:45:11</span>
<span className="text-emerald-500 w-16 shrink-0">INFO</span>
<span className="text-cyan-400 w-24 shrink-0">auth-svc</span>
<span className="text-slate-300">Token validated for user_id: 9921</span>
</div>
<div className="flex gap-4 hover:bg-white/5 p-1 rounded transition-opacity border-l-2 border-red-500 bg-red-500/5">
<span className="text-slate-500 w-32 shrink-0">Oct 24 10:45:12</span>
<span className="text-red-500 w-16 shrink-0">ERROR</span>
<span className="text-cyan-400 w-24 shrink-0">pay-gateway</span>
<span className="text-red-200">Payment rejected: Insufficient funds (txn_id: x991)</span>
</div>
<div className="flex gap-4 opacity-70 hover:opacity-100 hover:bg-white/5 p-1 rounded transition-opacity">
<span className="text-slate-500 w-32 shrink-0">Oct 24 10:45:15</span>
<span className="text-emerald-500 w-16 shrink-0">INFO</span>
<span className="text-cyan-400 w-24 shrink-0">frontend</span>
<span className="text-slate-300">Asset rendered: main.bundle.js (24ms)</span>
</div>
<div className="flex gap-4 opacity-70 hover:opacity-100 hover:bg-white/5 p-1 rounded transition-opacity">
<span className="text-slate-500 w-32 shrink-0">Oct 24 10:45:18</span>
<span className="text-amber-500 w-16 shrink-0">WARN</span>
<span className="text-cyan-400 w-24 shrink-0">db-replica</span>
<span className="text-amber-200">Slow query detected on table "orders" (1.2s)</span>
</div>
<div className="flex gap-4 opacity-70 hover:opacity-100 hover:bg-white/5 p-1 rounded transition-opacity">
<span className="text-slate-500 w-32 shrink-0">Oct 24 10:45:20</span>
<span className="text-emerald-500 w-16 shrink-0">INFO</span>
<span className="text-cyan-400 w-24 shrink-0">lb-main</span>
<span className="text-slate-300">Redirecting traffic to us-east-1c due to load balancing rules.</span>
</div>

<div className="flex gap-4 opacity-40 hover:opacity-100 hover:bg-white/5 p-1 rounded transition-opacity">
<span className="text-slate-500 w-32 shrink-0">Oct 24 10:45:22</span>
<span className="text-emerald-500 w-16 shrink-0">INFO</span>
<span className="text-cyan-400 w-24 shrink-0">metrics</span>
<span className="text-slate-300">Scraping node-exporter targets...</span>
</div>
</div>

<div className="mt-2 flex items-center gap-2">
<span className="text-cyan-500 animate-pulse">▋</span>
</div>
</div>
</div>


<div className="tab-content space-y-6 max-w-4xl mx-auto" id="view-settings">
<h2 className="text-xl text-white font-semibold tracking-tight mb-6">Account Settings</h2>
<div className="glass-panel border border-white/5 p-6 space-y-6">
<div>
<h3 className="text-sm font-medium text-white mb-4">General Configuration</h3>
<div className="space-y-4">
<div>
<label className="text-xs text-slate-500 uppercase font-bold block mb-1.5">Project Name</label>
<input className="w-full bg-navy-950 border border-white/10 text-sm text-white px-3 py-2 rounded-sm focus:border-cyan-500/50 outline-none" type="text" value="Nexus Primary"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs text-slate-500 uppercase font-bold block mb-1.5">Environment</label>
<select className="w-full bg-navy-950 border border-white/10 text-sm text-white px-3 py-2 rounded-sm outline-none">
<option>Production</option>
<option>Staging</option>
<option>Development</option>
</select>
</div>
<div>
<label className="text-xs text-slate-500 uppercase font-bold block mb-1.5">Region</label>
<select className="w-full bg-navy-950 border border-white/10 text-sm text-white px-3 py-2 rounded-sm outline-none">
<option>US-East (N. Virginia)</option>
<option>EU-West (Ireland)</option>
</select>
</div>
</div>
</div>
</div>
<div className="pt-6 border-t border-white/5">
<h3 className="text-sm font-medium text-white mb-4">API Access</h3>
<div className="bg-navy-950 border border-white/10 p-4 rounded-sm flex items-center justify-between">
<div>
<p className="text-xs text-white font-mono">nx_live_8829a991823...</p>
<p className="text-[10px] text-slate-500 mt-1">Last used 2 hours ago</p>
</div>
<button className="text-xs text-cyan-400 hover:text-white border border-cyan-500/20 px-3 py-1.5 rounded-sm hover:bg-cyan-500/10 transition-all">Revoke</button>
</div>
<button className="mt-4 text-xs bg-white/5 hover:bg-white/10 text-white px-3 py-2 rounded-sm border border-white/10 transition-all">Generate New Token</button>
</div>
<div className="pt-6 border-t border-white/5">
<h3 className="text-sm font-medium text-red-400 mb-2">Danger Zone</h3>
<p className="text-xs text-slate-500 mb-4">Irreversible actions for this project.</p>
<button className="text-xs border border-red-500/30 text-red-500 hover:bg-red-500/10 px-4 py-2 rounded-sm transition-all">Delete Project</button>
</div>
</div>
</div>

</div>
</main>


    </>
  );
}
