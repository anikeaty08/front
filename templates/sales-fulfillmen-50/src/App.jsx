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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
elevate: {
dark: '#0D0D0D',
card: '#161616',
border: '#262626',
}
},
backgroundImage: {
'brand-gradient': 'linear-gradient(to right, #4D00FF, #00E0FF, #FF00C8)',
'brand-gradient-vertical': 'linear-gradient(to bottom, #4D00FF, #00E0FF)',
'glow': 'radial-gradient(circle at center, rgba(77,0,255,0.15) 0%, transparent 70%)',
}
}
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
      

<aside className="w-64 h-full flex flex-col border-r border-[#262626] bg-[#0D0D0D] z-50">

<div className="h-16 flex items-center px-6 border-b border-[#262626]">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-brand-gradient flex items-center justify-center shadow-[0_0_15px_rgba(0,224,255,0.4)]">
<span className="iconify text-white" data-icon="lucide:zap" data-width="14"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-white">ELEVATE</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">

<div className="px-3 mb-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">Intelligence</div>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-white/5 text-white border border-white/5 shadow-sm relative overflow-hidden" href="#">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-gradient"></div>
<span className="iconify text-[#00E0FF]" data-icon="lucide:layout-dashboard" data-width="18"></span>
                Marketing Performance
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="iconify group-hover:text-[#FF00C8] transition-colors" data-icon="lucide:users" data-width="18"></span>
                Sales &amp; Funnel
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="iconify group-hover:text-[#4D00FF] transition-colors" data-icon="lucide:bar-chart-3" data-width="18"></span>
                Pipeline Forecast
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="iconify text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" data-icon="lucide:sparkles" data-width="18"></span>
                AI Insights Center
                <span className="ml-auto bg-brand-gradient text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">NEW</span>
</a>

<div className="px-3 mt-8 mb-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">Workspace</div>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:layers" data-width="18"></span>
                Integrations
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:settings" data-width="18"></span>
                Settings
            </a>
</nav>

<div className="p-4 border-t border-[#262626]">
<button className="flex items-center gap-3 w-full p-2 hover:bg-white/5 rounded-lg transition-colors text-left">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-medium text-white">
                        JD
                    </div>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#0D0D0D]"></div>
</div>
<div className="flex-1 overflow-hidden">
<div className="text-sm font-medium truncate">John Doe</div>
<div className="text-xs text-neutral-500 truncate">CEO • ArchiTech</div>
</div>
<span className="iconify text-neutral-500" data-icon="lucide:chevron-up" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#0D0D0D] relative">

<div className="absolute top-0 left-0 w-full h-96 bg-glow pointer-events-none opacity-20"></div>

<header className="h-16 flex items-center justify-between px-8 border-b border-[#262626] backdrop-blur-sm z-40 bg-[#0D0D0D]/80">

<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm text-neutral-400">
<span className="hover:text-white cursor-pointer transition-colors">Workspace</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span>
<span className="text-white font-medium">Marketing Overview</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 iconify text-neutral-500 group-focus-within:text-[#00E0FF] transition-colors" data-icon="lucide:search" data-width="16"></span>
<input className="bg-[#161616] border border-[#262626] text-sm text-white rounded-full pl-9 pr-4 py-1.5 w-64 focus:outline-none focus:border-[#00E0FF] focus:ring-1 focus:ring-[#00E0FF] transition-all placeholder:text-neutral-600" placeholder="Ask AI about lead trends..." type="text"/>
</div>
<button className="relative p-2 text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="20"></span>
<span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FF00C8]"></span>
</button>
<div className="h-6 w-[1px] bg-[#262626]"></div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#262626] bg-[#161616] hover:border-neutral-600 transition-colors">
<span className="iconify text-[#00E0FF]" data-icon="lucide:calendar" data-width="14"></span>
<span className="text-xs font-medium text-neutral-300">Last 30 Days</span>
<span className="iconify text-neutral-500" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 scroll-smooth">

<div className="grid grid-cols-12 gap-6 mb-8">

<div className="col-span-12 md:col-span-6 lg:col-span-3 glass-panel rounded-2xl p-6 relative group overflow-hidden">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-[#4D00FF] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-[#262626] border border-white/5">
<span className="iconify text-[#4D00FF]" data-icon="lucide:dollar-sign" data-width="20"></span>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span> 12.5%
                        </span>
</div>
<h3 className="text-neutral-400 text-xs font-medium uppercase tracking-wider mb-1">Total Spend</h3>
<div className="text-3xl font-semibold tracking-tight text-white">$42,590</div>
<div className="mt-2 h-1 w-full bg-[#262626] rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#4D00FF] to-[#00E0FF] w-[75%]"></div>
</div>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-3 glass-panel rounded-2xl p-6 relative group overflow-hidden">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-[#00E0FF] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-[#262626] border border-white/5">
<span className="iconify text-[#00E0FF]" data-icon="lucide:users" data-width="20"></span>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-rose-400 bg-rose-400/10 px-2 py-1 rounded-full border border-rose-400/20">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span> $4.20
                        </span>
</div>
<h3 className="text-neutral-400 text-xs font-medium uppercase tracking-wider mb-1">Avg. CPL</h3>
<div className="text-3xl font-semibold tracking-tight text-white">$18.50</div>
<p className="text-xs text-neutral-500 mt-2">Target: $22.00</p>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-3 glass-panel rounded-2xl p-6 relative group overflow-hidden">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-[#FF00C8] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-[#262626] border border-white/5">
<span className="iconify text-[#FF00C8]" data-icon="lucide:target" data-width="20"></span>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span> 5.2%
                        </span>
</div>
<h3 className="text-neutral-400 text-xs font-medium uppercase tracking-wider mb-1">Qualified Rate</h3>
<div className="text-3xl font-semibold tracking-tight text-white">34.8%</div>
<p className="text-xs text-neutral-500 mt-2">124 High-intent leads</p>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-2xl p-[1px] bg-brand-gradient relative overflow-hidden">
<div className="absolute inset-0 bg-brand-gradient opacity-20 blur-xl"></div>
<div className="h-full w-full bg-[#161616] rounded-2xl p-6 relative z-10">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="16"></span>
<span className="text-xs font-bold bg-clip-text text-transparent bg-brand-gradient uppercase tracking-wider">AI Score</span>
</div>
</div>
<div className="flex items-end gap-3">
<div className="text-5xl font-bold tracking-tighter text-white">92</div>
<span className="text-sm text-neutral-400 mb-1.5">/ 100</span>
</div>
<p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                            Campaigns are performing <span className="text-white font-medium">15% above benchmark</span>. Creative set B is driving highest ROI.
                        </p>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-6 mb-8">

<div className="col-span-12 lg:col-span-8 glass-panel rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg font-semibold tracking-tight text-white">Lead Generation Trend</h2>
<p className="text-xs text-neutral-400">Comparative analysis across platforms</p>
</div>
<div className="flex gap-2">
<div className="flex items-center gap-2 px-3 py-1 rounded bg-[#262626] border border-white/5 text-xs text-neutral-400">
<div className="w-2 h-2 rounded-full bg-[#4D00FF]"></div> Facebook
                            </div>
<div className="flex items-center gap-2 px-3 py-1 rounded bg-[#262626] border border-white/5 text-xs text-neutral-400">
<div className="w-2 h-2 rounded-full bg-[#00E0FF]"></div> Google
                            </div>
</div>
</div>

<div className="h-64 w-full relative">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-neutral-600">
<div className="border-b border-[#262626] pb-1 w-full">100</div>
<div className="border-b border-[#262626] pb-1 w-full">75</div>
<div className="border-b border-[#262626] pb-1 w-full">50</div>
<div className="border-b border-[#262626] pb-1 w-full">25</div>
<div className="border-b border-[#262626] pb-1 w-full">0</div>
</div>

<svg className="absolute inset-0 w-full h-full pt-4" preserveaspectratio="none" viewbox="0 0 100 100">

<defs>
<lineargradient id="gradientLine1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#4D00FF"></stop>
<stop offset="100%" stop-color="#00E0FF"></stop>
</lineargradient>
<filter id="glowLine1">
<fegaussianblur result="coloredBlur" stddeviation="1.5"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<path className="animate-path" d="M0,80 Q10,75 20,60 T40,50 T60,30 T80,40 T100,20" fill="none" filter="url(#glowLine1)" stroke="url(#gradientLine1)" strokeWidth="0.8"></path>

<path d="M0,90 Q10,85 20,80 T40,65 T60,60 T80,55 T100,45" fill="none" stroke="#262626" stroke-dasharray="2,2" strokeWidth="0.8"></path>
</svg>

<div className="absolute bottom-[-20px] left-0 w-full flex justify-between text-[10px] text-neutral-500 font-medium">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

<div className="glass-panel rounded-2xl p-6 border-l-2 border-[#00E0FF]">
<div className="flex items-center gap-2 mb-3">
<span className="iconify text-[#00E0FF]" data-icon="lucide:zap" data-width="16"></span>
<h3 className="text-sm font-semibold text-white">Opportunity Detected</h3>
</div>
<p className="text-sm text-neutral-400 mb-4">
                            "Modern Villa" campaign has 22% lower CPL on TikTok than Instagram. Reallocating budget could yield +14 leads/week.
                        </p>
<button className="w-full py-2 rounded-lg bg-[#262626] hover:bg-[#333] border border-white/10 text-xs font-medium text-white transition-colors">
                            Apply Budget Shift
                        </button>
</div>

<div className="glass-panel rounded-2xl p-6 border-l-2 border-[#FF00C8]">
<div className="flex items-center gap-2 mb-3">
<span className="iconify text-[#FF00C8]" data-icon="lucide:alert-triangle" data-width="16"></span>
<h3 className="text-sm font-semibold text-white">Sales Velocity Alert</h3>
</div>
<p className="text-sm text-neutral-400">
                            Response time for 'Luxury Interior' leads increased to 4h 12m. Conversion risk high.
                        </p>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-6 mb-8">

<div className="col-span-12 lg:col-span-5 glass-panel rounded-2xl p-6">
<h2 className="text-lg font-semibold tracking-tight text-white mb-6">Sales Funnel</h2>
<div className="space-y-4">

<div className="relative">
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>Total Leads</span>
<span className="text-white">1,240</span>
</div>
<div className="h-2 w-full bg-[#262626] rounded-full overflow-hidden">
<div className="h-full bg-[#4D00FF] w-full rounded-full"></div>
</div>
</div>

<div className="flex justify-center -my-2 opacity-30"><div className="h-4 w-0.5 bg-neutral-600"></div></div>

<div className="relative">
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>Qualified</span>
<span className="text-white">430 (34%)</span>
</div>
<div className="h-2 w-full bg-[#262626] rounded-full overflow-hidden">
<div className="h-full bg-[#4D00FF] w-[34%] rounded-full shadow-[0_0_10px_#4D00FF]"></div>
</div>
</div>

<div className="flex justify-center -my-2 opacity-30"><div className="h-4 w-0.5 bg-neutral-600"></div></div>

<div className="relative">
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>Appointment</span>
<span className="text-white">125 (10%)</span>
</div>
<div className="h-2 w-full bg-[#262626] rounded-full overflow-hidden">
<div className="h-full bg-[#00E0FF] w-[10%] rounded-full shadow-[0_0_10px_#00E0FF]"></div>
</div>
</div>

<div className="flex justify-center -my-2 opacity-30"><div className="h-4 w-0.5 bg-neutral-600"></div></div>

<div className="relative">
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>Proposal Sent</span>
<span className="text-white">64 (5%)</span>
</div>
<div className="h-2 w-full bg-[#262626] rounded-full overflow-hidden">
<div className="h-full bg-[#FF00C8] w-[5%] rounded-full shadow-[0_0_10px_#FF00C8]"></div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7 glass-panel rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold tracking-tight text-white">Team Performance</h2>
<button className="text-xs text-[#00E0FF] hover:text-white transition-colors">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-xs text-neutral-500 uppercase tracking-wider border-b border-[#262626]">
<th className="pb-3 font-medium">Agent</th>
<th className="pb-3 font-medium">Leads</th>
<th className="pb-3 font-medium">Conv. Rate</th>
<th className="pb-3 font-medium text-right">Revenue</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-[#262626] group table-row-hover transition-all">
<td className="py-3 pr-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-bold">AS</div>
<span className="text-white font-medium">Alex Smith</span>
</div>
</td>
<td className="py-3 text-neutral-400">142</td>
<td className="py-3">
<div className="flex items-center gap-2">
<span className="text-white">24%</span>
<div className="w-16 h-1 bg-[#262626] rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[24%]"></div>
</div>
</div>
</td>
<td className="py-3 text-right font-medium text-white">$124,000</td>
</tr>
<tr className="border-b border-[#262626] group table-row-hover transition-all">
<td className="py-3 pr-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-[10px] font-bold">JL</div>
<span className="text-white font-medium">Jessica Lee</span>
</div>
</td>
<td className="py-3 text-neutral-400">98</td>
<td className="py-3">
<div className="flex items-center gap-2">
<span className="text-white">31%</span>
<div className="w-16 h-1 bg-[#262626] rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[31%]"></div>
</div>
</div>
</td>
<td className="py-3 text-right font-medium text-white">$98,500</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-6 mb-8">
<div className="col-span-12 glass-panel rounded-2xl p-6">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
<div>
<h2 className="text-lg font-semibold tracking-tight text-white">Revenue Projection (90 Days)</h2>
<p className="text-xs text-neutral-400">Based on weighted pipeline probability</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-[#4D00FF]"></span>
<span className="text-xs text-neutral-400">Design</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-[#00E0FF]"></span>
<span className="text-xs text-neutral-400">Construction</span>
</div>
</div>
</div>

<div className="h-48 flex items-end justify-between gap-2 md:gap-4 w-full px-2">

<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="relative w-full max-w-[40px] h-32 bg-[#262626] rounded-t-sm overflow-hidden flex flex-col justify-end transition-all group-hover:opacity-80">
<div className="w-full h-[40%] bg-[#00E0FF]"></div>
<div className="w-full h-[30%] bg-[#4D00FF]"></div>
</div>
<span className="text-[10px] text-neutral-500">Aug</span>
</div>

<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="relative w-full max-w-[40px] h-40 bg-[#262626] rounded-t-sm overflow-hidden flex flex-col justify-end transition-all group-hover:opacity-80">
<div className="w-full h-[45%] bg-[#00E0FF]"></div>
<div className="w-full h-[35%] bg-[#4D00FF]"></div>
</div>
<span className="text-[10px] text-neutral-500">Sep</span>
</div>

<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="relative w-full max-w-[40px] h-56 bg-[#262626] rounded-t-sm overflow-hidden flex flex-col justify-end ring-1 ring-white/20 transition-all group-hover:opacity-80">
<div className="w-full h-[50%] bg-[#00E0FF]"></div>
<div className="w-full h-[40%] bg-[#4D00FF]"></div>
</div>
<span className="text-[10px] text-white font-medium">Oct</span>
</div>

<div className="flex flex-col items-center gap-2 w-full group cursor-pointer opacity-70">
<div className="relative w-full max-w-[40px] h-64 bg-[#262626] rounded-t-sm overflow-hidden flex flex-col justify-end border-t border-dashed border-white/30 transition-all group-hover:opacity-80">
<div className="w-full h-[55%] bg-[#00E0FF]"></div>
<div className="w-full h-[45%] bg-[#4D00FF]"></div>
</div>
<span className="text-[10px] text-neutral-500">Nov (Est)</span>
</div>

<div className="flex flex-col items-center gap-2 w-full group cursor-pointer opacity-70">
<div className="relative w-full max-w-[40px] h-48 bg-[#262626] rounded-t-sm overflow-hidden flex flex-col justify-end border-t border-dashed border-white/30 transition-all group-hover:opacity-80">
<div className="w-full h-[60%] bg-[#00E0FF]"></div>
<div className="w-full h-[20%] bg-[#4D00FF]"></div>
</div>
<span className="text-[10px] text-neutral-500">Dec (Est)</span>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-4">Active Integrations</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-4 rounded-xl border border-[#262626] bg-[#161616] flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#1877F2]/10 flex items-center justify-center">
<span className="iconify text-[#1877F2]" data-icon="lucide:facebook" data-width="16"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Meta Ads</div>
<div className="text-[10px] text-green-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Synced
                                </div>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#262626] appearance-none cursor-pointer transition-all duration-300 ease-in-out" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#262626] cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>

<div className="p-4 rounded-xl border border-[#262626] bg-[#161616] flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:database" data-width="16"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Lark CRM</div>
<div className="text-[10px] text-green-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Synced
                                </div>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#262626] appearance-none cursor-pointer transition-all duration-300 ease-in-out" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#262626] cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
</div>
</div>
</div>
</main>

<button className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center shadow-[0_0_30px_rgba(77,0,255,0.5)] hover:scale-110 transition-transform z-50 group">
<span className="iconify text-white group-hover:rotate-12 transition-transform" data-icon="lucide:sparkles" data-width="20"></span>
</button>

    </>
  );
}
