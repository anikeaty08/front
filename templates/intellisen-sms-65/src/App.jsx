import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'Inter', 'sans-serif'],
mono: ['Geist Mono', 'monospace'],
},
colors: {
primary: '#6E56CF',
cyan: {
400: '#22d3ee',
500: '#06b6d4',
600: '#0891b2',
900: '#164e63',
},
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
950: '#020617',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'glow': '0 0 15px rgba(6, 182, 212, 0.15)',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col justify-between z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-100 gap-3">
<div className="w-7 h-7 rounded bg-slate-900 flex items-center justify-center text-white font-mono text-xs font-bold shadow-md shadow-slate-900/20">I</div>
<span className="text-slate-900 font-bold tracking-tight text-sm">INTELLISEND</span>
<span className="text-[9px] bg-slate-100 text-slate-500 border border-slate-200 px-1 rounded ml-auto">ENT</span>
</div>

<nav className="p-4 space-y-0.5">
<div className="px-2 pb-3 pt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Platform</div>
<a className="sidebar-link active flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">
<i className="w-4 h-4 text-cyan-600" data-lucide="bar-chart-2"></i>
                    Analytics
                </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors text-slate-600" href="#">
<i className="w-4 h-4" data-lucide="server"></i>
                    Infrastructure
                </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors text-slate-600" href="#">
<i className="w-4 h-4" data-lucide="git-branch"></i>
                    Routing Logic
                </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors text-slate-600" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                    Audiences
                </a>
<div className="mt-6 px-2 pb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">Developers</div>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors text-slate-600" href="#">
<i className="w-4 h-4" data-lucide="terminal"></i>
                    Logs &amp; Events
                </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors text-slate-600" href="#">
<i className="w-4 h-4" data-lucide="webhook"></i>
                    Webhooks
                </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors text-slate-600" href="#">
<i className="w-4 h-4" data-lucide="key"></i>
                    API Keys
                </a>
</nav>
</div>

<div className="p-4 border-t border-slate-100 bg-slate-50/50">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-white transition-all text-left border border-transparent hover:border-slate-200 hover:shadow-sm">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-xs text-white font-medium shadow-inner">
                    LB
                </div>
<div className="flex-1 min-w-0">
<div className="text-xs font-semibold text-slate-900 truncate">Laxmi Bist</div>
<div className="text-[10px] text-slate-500 truncate font-mono">ID: 8839201</div>
</div>
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="settings-2"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-slate-50 relative">

<header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 bg-white/80 backdrop-blur-md z-30">

<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
<span className="text-slate-900">Dashboard</span>
<span className="text-slate-300">/</span>
<span>Overview</span>
</div>
<div className="h-4 w-px bg-slate-200"></div>
<div className="relative group">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="search"></i>
<input className="w-80 bg-slate-100/50 border border-transparent hover:border-slate-200 focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-md py-1.5 pl-8 pr-4 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none transition-all" placeholder="Search logs (e.g. status:failed)..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
<kbd className="hidden sm:inline-block px-1.5 font-mono text-[10px] text-slate-400 bg-white border border-slate-200 rounded shadow-sm">⌘K</kbd>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-xs font-semibold">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    System Operational
                </div>
<button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors hover:bg-slate-100 rounded-md">
<i className="w-4 h-4" data-lucide="bell"></i>
<span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-red-500 border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<h1 className="text-xl font-bold text-slate-900 tracking-tight">Performance Overview</h1>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-sm">
<button className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-900 shadow-sm border border-slate-200">1H</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50">24H</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50">7D</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50">30D</button>
</div>
<button className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
                            Export CSV
                        </button>
<button className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/10">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                            New Campaign
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-panel rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start">
<div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Total Requests</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">2.4M</div>
</div>
<span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i> 12%
                            </span>
</div>

<div className="mt-4 h-10 w-full">
<svg className="w-full h-full text-slate-900 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 20">
<path className="opacity-20" d="M0,15 Q10,5 20,12 T40,10 T60,15 T80,5 T100,10" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path className="opacity-10" d="M0,15 Q10,5 20,12 T40,10 T60,15 T80,5 T100,10" fill="url(#grad1)" stroke="none"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'currentColor', stopOpacity: '0.5'}}></stop>
<stop offset="100%" style={{stopColor: 'currentColor', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>

<div className="glass-panel rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start">
<div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Avg Latency</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">142ms</div>
</div>
<span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="check"></i> Optimal
                            </span>
</div>
<div className="mt-4 h-10 w-full flex items-end gap-1">
<div className="w-1/6 bg-slate-100 h-1/2 rounded-sm"></div>
<div className="w-1/6 bg-slate-200 h-3/4 rounded-sm"></div>
<div className="w-1/6 bg-slate-300 h-full rounded-sm"></div>
<div className="w-1/6 bg-cyan-500 h-2/3 rounded-sm"></div>
<div className="w-1/6 bg-slate-200 h-1/2 rounded-sm"></div>
<div className="w-1/6 bg-slate-100 h-1/3 rounded-sm"></div>
</div>
</div>

<div className="glass-panel rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start">
<div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Error Rate</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">0.04%</div>
</div>
<span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200 flex items-center gap-1">
                                -0.01%
                            </span>
</div>
<div className="mt-4 relative h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-[0.04%] bg-red-500"></div>
</div>
<div className="mt-2 text-[10px] text-slate-400 text-right">Threshold: 1.0%</div>
</div>

<div className="glass-panel rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start">
<div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Est. Spend</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">$8,242</div>
</div>
<span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-100 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="alert-circle"></i> Near Limit
                            </span>
</div>
<div className="mt-4 h-10 w-full">
<svg className="w-full h-full text-orange-500 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0,18 L20,16 L40,12 L60,10 L80,5 L100,2" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-xl p-6 lg:col-span-2 flex flex-col">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-sm font-bold text-slate-900">Traffic Volume</h3>
<div className="text-xs text-slate-500">Sent vs Delivered messages over time</div>
</div>
<div className="flex items-center gap-4 text-xs font-medium">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
<span>Sent</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
<span>Delivered</span>
</div>
</div>
</div>

<div className="flex-1 min-h-[300px] w-full relative group">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-slate-400 font-mono pointer-events-none pb-6 pr-4">
<div className="border-b border-dashed border-slate-100 w-full h-0 flex items-center"><span>5k</span></div>
<div className="border-b border-dashed border-slate-100 w-full h-0 flex items-center"><span>4k</span></div>
<div className="border-b border-dashed border-slate-100 w-full h-0 flex items-center"><span>3k</span></div>
<div className="border-b border-dashed border-slate-100 w-full h-0 flex items-center"><span>2k</span></div>
<div className="border-b border-dashed border-slate-100 w-full h-0 flex items-center"><span>1k</span></div>
<div className="border-b border-slate-200 w-full h-0 flex items-center"><span>0</span></div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible pb-6 pl-6" preserveaspectratio="none" viewbox="0 0 800 300">
<defs>
<lineargradient id="chartGradientCyan" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#06b6d4" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#06b6d4" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="chartGradientIndigo" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,280 L0,220 C50,220 100,180 150,190 C200,200 250,150 300,140 C350,130 400,160 450,150 C500,140 550,80 600,70 C650,60 700,90 750,80 L800,50 L800,280 Z" fill="url(#chartGradientCyan)" stroke="none"></path>
<path d="M0,280 L0,240 C50,240 100,200 150,210 C200,220 250,170 300,160 C350,150 400,180 450,170 C500,160 550,100 600,90 C650,80 700,110 750,100 L800,70 L800,280 Z" fill="url(#chartGradientIndigo)" stroke="none"></path>

<path className="chart-line" d="M0,220 C50,220 100,180 150,190 C200,200 250,150 300,140 C350,130 400,160 450,150 C500,140 550,80 600,70 C650,60 700,90 750,80 L800,50" fill="none" stroke="#06b6d4" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>
<path d="M0,240 C50,240 100,200 150,210 C200,220 250,170 300,160 C350,150 400,180 450,170 C500,160 550,100 600,90 C650,80 700,110 750,100 L800,70" fill="none" stroke="#6366f1" stroke-dasharray="4,4" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<line className="opacity-0 group-hover:opacity-100 transition-opacity" stroke="#94a3b8" stroke-dasharray="4" strokeWidth="1" x1="600" x2="600" y1="0" y2="280"></line>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity" cx="600" cy="70" fill="#06b6d4" r="4" stroke="white" strokeWidth="2"></circle>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity" cx="600" cy="90" fill="#6366f1" r="4" stroke="white" strokeWidth="2"></circle>
</svg>

<div className="absolute bottom-0 left-0 right-0 flex justify-between px-6 text-[10px] text-slate-400 font-mono pt-2">
<span>00:00</span>
<span>04:00</span>
<span>08:00</span>
<span>12:00</span>
<span>16:00</span>
<span>20:00</span>
<span>23:59</span>
</div>

<div className="absolute left-[70%] top-[20%] bg-slate-900 text-white p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-10 transform scale-95 group-hover:scale-100">
<div className="text-[10px] text-slate-400 mb-1 font-mono">Oct 24, 18:30</div>
<div className="flex justify-between gap-4 text-xs font-medium">
<span className="text-cyan-400">Sent</span>
<span>4,291</span>
</div>
<div className="flex justify-between gap-4 text-xs font-medium">
<span className="text-indigo-400">Delivered</span>
<span>4,103</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="glass-panel rounded-xl p-6 flex-1">
<h3 className="text-sm font-bold text-slate-900 mb-4">Carrier Health</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs font-medium mb-1">
<span className="text-slate-700">Twilio</span>
<span className="text-emerald-600">99.9%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[99.9%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1">
<span className="text-slate-700">MessageBird</span>
<span className="text-emerald-600">98.2%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[98.2%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1">
<span className="text-slate-700">Infobip</span>
<span className="text-orange-500">92.1%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[92.1%]"></div>
</div>
</div>
</div>

<div className="mt-8 flex items-center gap-6">
<div className="relative w-20 h-20">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">

<path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>

<path className="text-cyan-500 donut-segment" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="85, 100" strokeWidth="4"></path>
<path className="text-indigo-500 donut-segment" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="10, 100" stroke-dashoffset="-85" strokeWidth="4"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-700">95%</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="w-2 h-2 rounded-full bg-cyan-500"></span> Delivered
                                    </div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span> Bounced
                                    </div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="w-2 h-2 rounded-full bg-slate-200"></span> Pending
                                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="glass-panel rounded-xl overflow-hidden xl:col-span-2">
<div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
<h3 className="text-sm font-bold text-slate-900">Active Campaigns</h3>
<button className="text-xs font-medium text-cyan-600 hover:text-cyan-700">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-500">
<thead className="text-xs uppercase bg-slate-50 text-slate-400 font-medium">
<tr>
<th className="px-6 py-3">Campaign Name</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3">Progress</th>
<th className="px-6 py-3">Click Rate</th>
<th className="px-6 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 bg-white">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-3">
<div className="font-semibold text-slate-900 text-xs">Black Friday Warmup</div>
<div className="text-[10px] text-slate-400 font-mono">ID: 993-221</div>
</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-50 text-cyan-700 border border-cyan-100">
                                                Sending
                                            </span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="flex-1 w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 w-[45%]"></div>
</div>
<span className="text-[10px] font-mono text-slate-600">45%</span>
</div>
</td>
<td className="px-6 py-3 text-xs font-mono text-slate-700">4.2%</td>
<td className="px-6 py-3 text-right">
<i className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer ml-auto" data-lucide="more-horizontal"></i>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-3">
<div className="font-semibold text-slate-900 text-xs">Auth OTP Flow</div>
<div className="text-[10px] text-slate-400 font-mono">ID: SYS-001</div>
</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                Active
                                            </span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="flex-1 w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full"></div>
</div>
<span className="text-[10px] font-mono text-slate-600">--</span>
</div>
</td>
<td className="px-6 py-3 text-xs font-mono text-slate-700">-</td>
<td className="px-6 py-3 text-right">
<i className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer ml-auto" data-lucide="more-horizontal"></i>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-3">
<div className="font-semibold text-slate-900 text-xs">User Reactivation</div>
<div className="text-[10px] text-slate-400 font-mono">ID: 882-119</div>
</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                                                Paused
                                            </span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="flex-1 w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 w-[12%]"></div>
</div>
<span className="text-[10px] font-mono text-slate-600">12%</span>
</div>
</td>
<td className="px-6 py-3 text-xs font-mono text-slate-700">1.1%</td>
<td className="px-6 py-3 text-right">
<i className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer ml-auto" data-lucide="more-horizontal"></i>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden flex flex-col h-full">
<div className="px-6 py-4 border-b border-slate-200 bg-orange-50/30 flex items-center justify-between">
<h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="shuffle"></i>
                                Smart Routing Events
                            </h3>
</div>
<div className="flex-1 overflow-y-auto bg-white p-0">
<div className="divide-y divide-slate-100">

<div className="p-4 hover:bg-slate-50 transition-colors border-l-2 border-transparent hover:border-orange-400">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-mono text-slate-400">10:42:12 AM</span>
<span className="text-[9px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-1.5 rounded border border-orange-100">Reroute</span>
</div>
<div className="text-xs text-slate-700 font-medium mb-1">High latency detected on <span className="text-slate-900">Twilio US-East</span></div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100">
<span>402ms</span>
<i className="w-3 h-3 text-slate-300" data-lucide="arrow-right"></i>
<span className="text-emerald-600 font-medium">Infobip (85ms)</span>
</div>
</div>

<div className="p-4 hover:bg-slate-50 transition-colors border-l-2 border-transparent hover:border-red-400">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-mono text-slate-400">09:15:00 AM</span>
<span className="text-[9px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-1.5 rounded border border-red-100">Drop</span>
</div>
<div className="text-xs text-slate-700 font-medium mb-1">Invalid number format block</div>
<div className="text-[10px] text-slate-400 font-mono">
                                        Dest: +1 (000) ...
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-8 py-6 border-t border-slate-200 bg-white">
<div className="max-w-[1600px] mx-auto px-8 flex justify-between items-center text-xs text-slate-400">
<div className="flex gap-4">
<span>v2.4.0 (Build 9921)</span>
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> All Systems Normal</span>
</div>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Documentation</a>
<a className="hover:text-slate-600" href="#">API Reference</a>
<a className="hover:text-slate-600" href="#">Service Level Agreement</a>
</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
