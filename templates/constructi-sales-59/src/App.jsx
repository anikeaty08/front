import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function switchView(viewName) {
            // Navigation Styling
            document.querySelectorAll('.nav-btn').forEach(btn => {
                // Reset to default slate-400
                btn.className = 'nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-400 rounded-lg hover:bg-slate-800 hover:text-white transition-all group';
                
                // Reset Icon
                const icon = btn.querySelector('i');
                if(icon) {
                    icon.classList.remove('text-indigo-400');
                    icon.classList.add('text-slate-500');
                }
            });

            // Activate Current
            const activeBtn = document.getElementById(`nav-${viewName}`);
            if(activeBtn) {
                // Apply active styles (Indigo bg with light text)
                activeBtn.className = 'nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all group bg-indigo-600/10 text-indigo-400 border border-indigo-500/20';
                
                // Active Icon
                const icon = activeBtn.querySelector('i');
                if(icon) {
                    icon.classList.remove('text-slate-500');
                    // Text color is inherited from parent, no need to add text-indigo-400 explicitly to icon if parent has it
                }
            }

            // Title Update
            const titles = {
                'dashboard': 'Dashboard',
                'pricing': 'Pricing Engine',
                'finance': 'Smart Finance',
                'subs': 'Sub Manager',
                'presentation': 'Client Deck'
            };
            document.getElementById('page-title').textContent = titles[viewName];

            // Toggle Views
            const views = ['dashboard', 'pricing', 'finance', 'subs', 'presentation'];
            views.forEach(v => {
                document.getElementById(`view-${v}`).classList.add('hidden');
            });
            
            const viewEl = document.getElementById(`view-${viewName}`);
            viewEl.classList.remove('hidden');
            viewEl.classList.add('animate-fade-in');
        }

        switchView('dashboard');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-[#0F1117] flex flex-col justify-between flex-shrink-0 text-slate-300 border-r border-slate-800 relative z-20">
<div>
<div className="h-16 flex items-center px-6 border-b border-slate-800/50">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold tracking-tight text-white leading-none">CONSTRUCT</span>
<span className="text-[10px] font-medium text-indigo-400 tracking-wider">AI PILOT</span>
</div>
</div>
</div>
<div className="p-4 space-y-1">
<p className="px-3 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Workspace</p>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all group bg-indigo-600/10 text-indigo-400 border border-indigo-500/20" id="nav-dashboard" onclick="switchView('dashboard')">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
                    Job Hub
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-400 rounded-lg hover:bg-slate-800 hover:text-white transition-all group" id="nav-pricing" onclick="switchView('pricing')">
<i className="w-4 h-4 text-slate-500 group-hover:text-slate-300" data-lucide="calculator"></i>
                    Pricing &amp; Deal
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-400 rounded-lg hover:bg-slate-800 hover:text-white transition-all group" id="nav-finance" onclick="switchView('finance')">
<i className="w-4 h-4 text-slate-500 group-hover:text-slate-300" data-lucide="wallet"></i>
                    Financing
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-400 rounded-lg hover:bg-slate-800 hover:text-white transition-all group" id="nav-subs" onclick="switchView('subs')">
<i className="w-4 h-4 text-slate-500 group-hover:text-slate-300" data-lucide="hard-hat"></i>
                    Sub Manager
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-400 rounded-lg hover:bg-slate-800 hover:text-white transition-all group" id="nav-presentation" onclick="switchView('presentation')">
<i className="w-4 h-4 text-slate-500 group-hover:text-slate-300" data-lucide="projection"></i>
                    Client Deck
                </button>
</div>
</div>

<div className="p-4">
<div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-4 border border-indigo-500/20 relative overflow-hidden group cursor-pointer hover:border-indigo-500/40 transition-colors">
<div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/20 blur-2xl rounded-full"></div>
<div className="flex items-start gap-3 relative z-10">
<div className="p-1.5 bg-indigo-50 rounded-md text-white">
<i className="w-3.5 h-3.5 animate-pulse" data-lucide="sparkles"></i>
</div>
<div>
<p className="text-xs font-semibold text-white">AI Suggestion</p>
<p className="text-[10px] text-indigo-200 mt-1 leading-relaxed">Increase margin on Smith Job. Material costs dropped 4%.</p>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-medium text-white">SW</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Shavan W.</span>
<span className="text-[10px] text-slate-500">Sales Rep</span>
</div>
<button className="ml-auto text-slate-500 hover:text-white"><i className="w-4 h-4" data-lucide="settings"></i></button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50 relative">

<div className="absolute inset-0 z-0 opacity-[0.4]" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<header className="h-16 border-b border-slate-200 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md z-10 sticky top-0">
<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="hover:text-slate-900 cursor-pointer transition-colors">Jobs</span>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
<span className="font-semibold text-slate-900" id="page-title">Dashboard</span>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden md:block">
<i className="absolute left-2.5 top-2 w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="pl-9 pr-4 py-1.5 text-xs font-medium bg-slate-100 border-none rounded-full w-64 focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" placeholder="Ask AI about your pipeline..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="bell"></i>
<span className="relative flex h-2 w-2 -ml-1 -mt-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
</button>
<button className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    New Job
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 relative z-0">

<div className="space-y-8 animate-fade-in block max-w-7xl mx-auto" id="view-dashboard">

<div className="grid grid-cols-1 md:grid-cols-4 gap-5">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Pipeline Value</p>
<p className="text-2xl font-bold tracking-tight text-slate-900 mt-1">$142,500</p>
</div>
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-600">
<i className="w-3 h-3" data-lucide="trending-up"></i>
<span>+12.5%</span>
<span className="text-slate-400 font-normal">vs last month</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Pending Subs</p>
<p className="text-2xl font-bold tracking-tight text-slate-900 mt-1">3</p>
</div>
<div className="p-2 bg-amber-50 rounded-lg text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-amber-600">
<span>Requires Attention</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border-l-4 border-indigo-500 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute top-0 right-0 p-2 opacity-50">
<i className="w-12 h-12 text-indigo-100" data-lucide="sparkles"></i>
</div>
<div className="relative z-10">
<p className="text-xs font-bold text-indigo-600 uppercase tracking-wide flex items-center gap-1">
<i className="w-3 h-3" data-lucide="zap"></i> AI Forecast
                             </p>
<p className="text-2xl font-bold tracking-tight text-slate-900 mt-1">68% <span className="text-sm font-normal text-slate-400">Win Probability</span></p>
<p className="text-xs text-slate-500 mt-2">Based on 14 similar projects in Glendora.</p>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Avg Margin</p>
<p className="text-2xl font-bold tracking-tight text-emerald-600 mt-1">32.4%</p>
</div>
<div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="percent"></i>
</div>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-base font-semibold text-slate-900">Revenue Performance</h3>
<p className="text-xs text-slate-500">Live data updated 2m ago</p>
</div>
<div className="flex gap-2">
<select className="text-xs border-slate-200 rounded-md py-1 px-2 focus:ring-indigo-500">
<option>This Month</option>
<option>This Quarter</option>
</select>
</div>
</div>

<div className="h-64 w-full relative">

<div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400">
<div className="border-b border-dashed border-slate-100 w-full h-0"></div>
<div className="border-b border-dashed border-slate-100 w-full h-0"></div>
<div className="border-b border-dashed border-slate-100 w-full h-0"></div>
<div className="border-b border-dashed border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-200 w-full h-0"></div>
</div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#6366f1', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0,50 L0,35 Q10,25 20,30 T40,20 T60,25 T80,10 L100,15 L100,50 Z" fill="url(#gradient)"></path>
<path className="chart-line" d="M0,35 Q10,25 20,30 T40,20 T60,25 T80,10 L100,15" fill="none" stroke="#6366f1" strokeWidth="0.8"></path>

<circle cx="20" cy="30" fill="#fff" r="1" stroke="#6366f1" strokeWidth="0.5"></circle>
<circle cx="40" cy="20" fill="#fff" r="1" stroke="#6366f1" strokeWidth="0.5"></circle>
<circle cx="60" cy="25" fill="#fff" r="1" stroke="#6366f1" strokeWidth="0.5"></circle>
<circle cx="80" cy="10" fill="#fff" r="1" stroke="#6366f1" strokeWidth="0.5"></circle>

<g transform="translate(70, 0)">
<rect fill="#1e293b" height="8" rx="2" width="22" x="0" y="0"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="3" text-anchor="middle" x="11" y="5">$42k</text>
<line stroke="#1e293b" strokeWidth="0.5" x1="10" x2="10" y1="10" y2="8"></line>
</g>
</svg>
</div>
</div>

<div className="bg-gradient-to-b from-indigo-900 to-slate-900 rounded-xl p-6 text-white relative overflow-hidden shadow-lg">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-indigo-300" data-lucide="bot"></i>
<h3 className="font-semibold tracking-tight">AI Copilot Insights</h3>
</div>
<div className="space-y-4 relative z-10">
<div className="p-3 bg-white/10 rounded-lg border border-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors">
<div className="flex items-start gap-3">
<div className="w-2 h-2 mt-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
<div>
<p className="text-xs font-medium text-indigo-100">Upsell Opportunity</p>
<p className="text-sm font-semibold mt-0.5">The Johnsons</p>
<p className="text-[10px] text-slate-400 mt-1">Yard size suggests adding lighting package (+ $2.4k).</p>
</div>
</div>
</div>
<div className="p-3 bg-white/10 rounded-lg border border-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors">
<div className="flex items-start gap-3">
<div className="w-2 h-2 mt-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
<div>
<p className="text-xs font-medium text-indigo-100">Margin Risk</p>
<p className="text-sm font-semibold mt-0.5">Miller Estate</p>
<p className="text-[10px] text-slate-400 mt-1">Concrete prices trending up 5% next week.</p>
</div>
</div>
</div>
</div>
<button className="mt-6 w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="zap"></i> Auto-Optimize Pipeline
                        </button>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Active Jobs</h3>
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Client</th>
<th className="px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Project</th>
<th className="px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Status</th>
<th className="px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Value</th>
<th className="px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="group hover:bg-slate-50/80 transition-colors cursor-pointer" onclick="switchView('pricing')">
<td className="px-5 py-4 font-medium text-slate-900">Smith Residence</td>
<td className="px-5 py-4 text-slate-500">Backyard Turf &amp; Pavers</td>
<td className="px-5 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">Drafting</span></td>
<td className="px-5 py-4 text-slate-900 font-medium">$24,500</td>
<td className="px-5 py-4 text-right text-slate-400 group-hover:text-indigo-600"><i className="w-5 h-5 ml-auto" data-lucide="chevron-right"></i></td>
</tr>
<tr className="group hover:bg-slate-50/80 transition-colors">
<td className="px-5 py-4 font-medium text-slate-900">Miller Estate</td>
<td className="px-5 py-4 text-slate-500">Full Driveway Concrete</td>
<td className="px-5 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">Sub Pricing</span></td>
<td className="px-5 py-4 text-slate-900 font-medium">$18,200</td>
<td className="px-5 py-4 text-right text-slate-400 group-hover:text-indigo-600"><i className="w-5 h-5 ml-auto" data-lucide="chevron-right"></i></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="hidden space-y-6 max-w-7xl mx-auto" id="view-pricing">
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-3 mb-1">
<h2 className="text-xl font-bold text-slate-900 tracking-tight">Smith Residence</h2>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500 uppercase">Draft #4</span>
</div>
<p className="text-xs text-slate-500">Configure scope and margins.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg hover:bg-indigo-100 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="wand-2"></i> AI Auto-Fill
                         </button>
<button className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-md" onclick="switchView('finance')">Save &amp; Finance</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-4">
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
<div className="bg-slate-50/50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
<span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Scope of Work</span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-xs text-slate-500">Live Sync</span>
</div>
</div>
<div className="p-5 space-y-4">

<div className="grid grid-cols-12 gap-3 items-end p-3 rounded-lg border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all">
<div className="col-span-5">
<label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Item</label>
<select className="w-full text-sm font-medium border-slate-200 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 bg-white">
<option>Turf - Premium Synthetic</option>
<option>Pavers - Belgard Catalina</option>
</select>
</div>
<div className="col-span-2">
<label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Qty</label>
<input className="w-full text-sm font-medium border-slate-200 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 text-center" type="number" value="950"/>
</div>
<div className="col-span-2">
<label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Unit ($)</label>
<input className="w-full text-sm font-medium border-slate-200 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 text-center" type="number" value="8.50"/>
</div>
<div className="col-span-2">
<label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Total</label>
<div className="w-full py-2 px-3 bg-slate-100 text-slate-900 text-sm font-bold rounded-lg border border-slate-200 text-right">$8,075</div>
</div>
<div className="col-span-1 flex justify-center pb-2">
<button className="text-slate-400 hover:text-red-500 transition-colors"><i className="w-4 h-4" data-lucide="trash-2"></i></button>
</div>
</div>
<button className="w-full py-2 border border-dashed border-slate-300 rounded-lg text-xs font-semibold text-slate-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all flex items-center justify-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> Add Line Item
                                </button>
</div>
</div>
</div>

<div className="space-y-4">
<div className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">Project Economics</h3>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-sm text-slate-600">Material Cost</span>
<span className="text-sm font-medium text-slate-900">$3,850.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-slate-600">Labor Estimate</span>
<span className="text-sm font-medium text-slate-900">$2,400.00</span>
</div>
<div className="flex justify-between items-center pt-3 border-t border-slate-100">
<span className="text-base font-bold text-slate-900">Total Price</span>
<span className="text-xl font-bold text-slate-900 tracking-tight">$9,515.00</span>
</div>
</div>
</div>

<div className="ai-border p-5 rounded-xl bg-white shadow-sm">
<div className="flex items-center gap-2 mb-3">
<div className="p-1 bg-indigo-100 rounded text-indigo-600">
<i className="w-3.5 h-3.5" data-lucide="bot"></i>
</div>
<h3 className="text-xs font-bold text-indigo-900 uppercase">Margin Optimizer</h3>
</div>
<div className="flex justify-between text-xs mb-2">
<span className="text-slate-500">Current Margin</span>
<span className="font-bold text-emerald-600">34.3%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 mb-3 overflow-hidden">
<div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{width: '34.3%'}}></div>
</div>
<div className="p-3 bg-indigo-50/50 rounded border border-indigo-100">
<p className="text-[10px] text-indigo-700 leading-relaxed">
<span className="font-bold">Suggestion:</span> Increase labor buffer by 5%. Similar jobs in this area averaged 12% longer install times.
                                </p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-8 max-w-5xl mx-auto" id="view-finance">
<div className="text-center">
<h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Smart Financing Options</h2>
<p className="text-sm text-slate-500">Project Total: <span className="font-medium text-slate-900">$9,515.00</span></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all cursor-pointer group shadow-sm opacity-80 hover:opacity-100 scale-95 hover:scale-100">
<div className="flex justify-between items-start mb-6">
<span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600 uppercase tracking-wide">Aggressive</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" data-lucide="zap"></i>
</div>
<div className="mb-6">
<span className="text-3xl font-bold text-slate-900 tracking-tight">$198</span>
<span className="text-sm text-slate-500 font-medium">/mo</span>
</div>
<ul className="space-y-3 text-xs text-slate-500">
<li className="flex justify-between"><span>Term</span> <span className="font-medium text-slate-900">60 Months</span></li>
<li className="flex justify-between"><span>APR</span> <span className="font-medium text-slate-900">8.99%</span></li>
</ul>
</div>

<div className="bg-white border-2 border-indigo-500 rounded-2xl p-8 shadow-xl relative transform scale-105 z-10">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-lg flex items-center gap-1">
<i className="w-3 h-3" data-lucide="sparkles"></i> AI Recommended
                        </div>
<div className="flex justify-between items-start mb-6">
<span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700 uppercase tracking-wide">Balanced</span>
<i className="w-5 h-5 text-indigo-500" data-lucide="check-circle-2"></i>
</div>
<div className="mb-8">
<span className="text-5xl font-bold text-slate-900 tracking-tight">$125</span>
<span className="text-sm text-slate-500 font-medium">/mo</span>
</div>
<ul className="space-y-3 text-sm text-slate-500 mb-8">
<li className="flex justify-between pb-2 border-b border-slate-50"><span>Term</span> <span className="font-bold text-slate-900">120 Months</span></li>
<li className="flex justify-between pb-2 border-b border-slate-50"><span>APR</span> <span className="font-bold text-slate-900">9.99%</span></li>
<li className="flex justify-between"><span>Approval Odds</span> <span className="font-bold text-emerald-600">High (98%)</span></li>
</ul>
<button className="w-full py-3 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">Select This Plan</button>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all cursor-pointer group shadow-sm opacity-80 hover:opacity-100 scale-95 hover:scale-100">
<div className="flex justify-between items-start mb-6">
<span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600 uppercase tracking-wide">Low Payment</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" data-lucide="piggy-bank"></i>
</div>
<div className="mb-6">
<span className="text-3xl font-bold text-slate-900 tracking-tight">$102</span>
<span className="text-sm text-slate-500 font-medium">/mo</span>
</div>
<ul className="space-y-3 text-xs text-slate-500">
<li className="flex justify-between"><span>Term</span> <span className="font-medium text-slate-900">180 Months</span></li>
<li className="flex justify-between"><span>APR</span> <span className="font-medium text-slate-900">10.99%</span></li>
</ul>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col max-w-7xl mx-auto space-y-6" id="view-subs">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-center justify-between">
<div>
<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Crews</p>
<p className="text-2xl font-bold text-slate-900 mt-1">4</p>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="truck"></i>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-center justify-between">
<div>
<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Pending Bids</p>
<p className="text-2xl font-bold text-slate-900 mt-1">2</p>
</div>
<div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-center justify-between">
<div>
<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Est. Payouts</p>
<p className="text-2xl font-bold text-slate-900 mt-1">$12.4k</p>
</div>
<div className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="dollar-sign"></i>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

<div className="lg:col-span-2 space-y-6">

<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                    Open Bid Requests
                                </h3>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">View All</button>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-slate-700">Miller Estate - Driveway</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-200 text-slate-600">Concrete</span>
</div>
<span className="text-[10px] text-slate-400">Due in 2 days</span>
</div>
<div className="divide-y divide-slate-100">

<div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">CK</div>
<div>
<div className="flex items-center gap-2">
<p className="text-sm font-semibold text-slate-900">Concrete Kings</p>
<div className="flex text-amber-400"><i className="w-3 h-3 fill-current" data-lucide="star"></i><span className="text-[10px] text-slate-400 ml-1">4.8</span></div>
</div>
<p className="text-xs text-slate-500">Available: Next Mon</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-slate-900">$4,200</p>
<div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-green-50 text-green-700 border border-green-100 mt-1">
<i className="w-2.5 h-2.5" data-lucide="sparkles"></i> Best Value
                                            </div>
</div>
<div className="flex gap-2 ml-4">
<button className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"><i className="w-4 h-4" data-lucide="message-square"></i></button>
<button className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors">Approve</button>
</div>
</div>

<div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between opacity-70">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold">SF</div>
<div>
<div className="flex items-center gap-2">
<p className="text-sm font-semibold text-slate-900">Solid Foundations</p>
<div className="flex text-amber-400"><i className="w-3 h-3 fill-current" data-lucide="star"></i><span className="text-[10px] text-slate-400 ml-1">4.5</span></div>
</div>
<p className="text-xs text-slate-500">Available: Tomorrow</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-slate-900">$4,850</p>
<p className="text-[10px] text-red-500 mt-1">+15% over budget</p>
</div>
<div className="flex gap-2 ml-4">
<button className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"><i className="w-4 h-4" data-lucide="message-square"></i></button>
<button className="px-3 py-1.5 border border-slate-200 hover:border-slate-300 text-slate-600 text-xs font-medium rounded-lg transition-colors">Review</button>
</div>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                Live Field Status
                            </h3>
<div className="grid gap-3">

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&amp;w=1978&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Green Thumb Landscape</p>
<p className="text-xs text-slate-500 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
                                                Smith Residence • 12:45 PM Check-in
                                            </p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right hidden sm:block">
<p className="text-xs font-medium text-slate-900">Task: Turf Install</p>
<div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
<div className="bg-indigo-500 h-full rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all">
<i className="w-4 h-4" data-lucide="phone"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-xl p-5 text-white shadow-lg">
<h3 className="font-bold text-sm mb-1">Need a trade?</h3>
<p className="text-xs text-slate-300 mb-4">AI can match you with 3 verified subs in minutes.</p>
<div className="relative">
<i className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="w-full bg-white/10 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Electrician for Lighting..." type="text"/>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Top Subs</h3>
<i className="w-4 h-4 text-slate-400" data-lucide="users"></i>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">VL</div>
<div>
<p className="text-xs font-bold text-slate-900">Valdez Landscaping</p>
<p className="text-[10px] text-slate-500">Softscape • Tier 1</p>
</div>
</div>
<span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Available</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">EP</div>
<div>
<p className="text-xs font-bold text-slate-900">Elite Pavers</p>
<p className="text-[10px] text-slate-500">Hardscape • Tier 1</p>
</div>
</div>
<span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">Busy</span>
</div>
</div>
<button className="w-full mt-4 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">Manage Network</button>
</div>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col" id="view-presentation">
<div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-lg overflow-y-auto max-w-5xl mx-auto w-full relative">

<div className="h-64 bg-slate-900 relative overflow-hidden">
<img alt="Modern Landscape" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1558905540-21290194ae9b?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-12 text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium border border-white/20 mb-4">
<i className="w-3 h-3 text-indigo-400" data-lucide="sparkles"></i>
                                Generated by DesignAI
                             </div>
<h1 className="text-4xl font-bold tracking-tight mb-2">Smith Residence Transformation</h1>
<p className="text-slate-300">Modern Low-Maintenance Oasis</p>
</div>
</div>
<div className="p-12">

<div className="grid grid-cols-2 gap-8 mb-12">
<div className="space-y-4">
<h2 className="text-xl font-bold text-slate-900">Vision Board</h2>
<p className="text-sm text-slate-600 leading-relaxed">
                                    Our AI analysis of your property suggests a geometric hardscape paired with high-grade synthetic turf to maximize usable space and reduce water costs by 65%.
                                </p>
<div className="grid grid-cols-2 gap-2">
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative group">
<img className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative group">
<img className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1621503939626-d62f40cb732b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
<h2 className="text-xl font-bold text-slate-900 mb-4">Scope Summary</h2>
<ul className="space-y-4">
<li className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">1</div>
<div>
<p className="font-semibold text-slate-900 text-sm">Synthetic Turf Install</p>
<p className="text-xs text-slate-500 mt-1">950 sq ft of Premium 80oz turf with Microban technology.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">2</div>
<div>
<p className="font-semibold text-slate-900 text-sm">Hardscape Border</p>
<p className="text-xs text-slate-500 mt-1">Belgard Catalina pavers in Soldier Course pattern.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">3</div>
<div>
<p className="font-semibold text-slate-900 text-sm">Site Preparation</p>
<p className="text-xs text-slate-500 mt-1">Complete demo, grading, and 3" Class II base compaction.</p>
</div>
</li>
</ul>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
<div className="flex justify-between items-end relative z-10">
<div>
<p className="text-slate-400 text-sm font-medium mb-1">Total Project Investment</p>
<p className="text-4xl font-bold tracking-tight">$9,515</p>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-indigo-300">
<i className="w-3 h-3" data-lucide="check-circle"></i> Price locked for 7 days
                                     </div>
</div>
<div>
<button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
                                         Sign Agreement
                                     </button>
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
