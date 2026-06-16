import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.tailwind = {
config: {
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
}
},
fontSize: {
xxs: '0.65rem',
}
}
}
}
}



// Safer View Switching Logic
function switchView(viewId, btnElement) {
try {
// Hide all views
const views = document.querySelectorAll('.app-view');
views.forEach(view => {
view.classList.add('hidden');
view.classList.remove('flex');
});
// Show selected view
const targetView = document.getElementById(viewId);
if (targetView) {
targetView.classList.remove('hidden');
targetView.classList.add('flex');
} else {
console.error('Target view not found:', viewId);
return;
}
// Reset Nav Styles
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
item.classList.remove('bg-zinc-100', 'text-zinc-900');
item.classList.add('text-zinc-500', 'hover:text-zinc-900', 'hover:bg-zinc-50');
const icon = item.querySelector('i');
if(icon) {
icon.classList.remove('text-zinc-600');
}
});
// Set Active Nav Style
if (btnElement) {
btnElement.classList.remove('text-zinc-500', 'hover:text-zinc-900', 'hover:bg-zinc-50');
btnElement.classList.add('bg-zinc-100', 'text-zinc-900');
const activeIcon = btnElement.querySelector('i');
if(activeIcon) activeIcon.classList.add('text-zinc-600');
}
// Re-render icons just in case
if(window.lucide) {
window.lucide.createIcons();
}
} catch (error) {
console.error('Navigation error:', error);
}
}



        if (window.lucide) {
            lucide.createIcons();
        } else {
            console.error('Lucide library failed to load.');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex h-screen w-full flex-col md:flex-row overflow-hidden">

<aside className="w-full md:w-64 flex-shrink-0 border-r border-zinc-200 bg-white flex flex-col justify-between z-20">
<div className="p-6">
<div className="flex items-center gap-2 mb-8">
<div className="h-8 w-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg shadow-sm">
<span className="font-semibold tracking-tighter">UJ</span>
</div>
<div>
<h1 className="text-sm font-semibold tracking-tight text-zinc-900">URBAN JUNGLE</h1>
<p className="text-xs text-zinc-500 tracking-tight">STUDIOS INC.</p>
</div>
</div>
<nav className="space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md transition-colors text-left outline-none focus:ring-2 focus:ring-zinc-200" onclick="switchView('view-underwriting', this)">
<i className="w-4 h-4 text-zinc-600" data-lucide="calculator"></i>
                        Underwriting
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors text-left outline-none focus:ring-2 focus:ring-zinc-200" onclick="switchView('view-portfolio', this)">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
                        Portfolio Rank
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors text-left outline-none focus:ring-2 focus:ring-zinc-200" onclick="switchView('view-active-deals', this)">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                        Active Deals
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors text-left outline-none focus:ring-2 focus:ring-zinc-200" onclick="switchView('view-reports', this)">
<i className="w-4 h-4" data-lucide="file-text"></i>
                        Reports
                    </button>
</nav>
</div>
<div className="p-4 border-t border-zinc-200">
<div className="flex items-center gap-3 cursor-pointer hover:bg-zinc-50 p-2 rounded-md transition-colors">
<div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-medium border border-indigo-200">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900">John Doe</span>
<span className="text-xs text-zinc-500">CIO • Urban Jungle</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<div className="app-view flex flex-col h-full" id="view-underwriting">

<header className="h-16 border-b border-zinc-200 bg-white flex items-center justify-between px-6 flex-shrink-0">
<div className="flex items-center gap-4">
<h2 className="text-sm font-medium text-zinc-500">Assessment ID: #UJ-2023-849</h2>
<span className="h-4 w-px bg-zinc-200"></span>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="map-pin"></i>
<span className="text-sm font-medium text-zinc-900">42 Camps Bay Drive, Cape Town</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-600 border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="share"></i>
                            Share
                        </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 border border-zinc-900 rounded-md hover:bg-zinc-800 shadow-sm transition-colors">
<i className="w-3.5 h-3.5" data-lucide="save"></i>
                            Save Model
                        </button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-zinc-50 p-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 space-y-6">

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-zinc-100 flex justify-between items-center">
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Acquisition Parameters</h3>
<i className="w-4 h-4 text-zinc-400" data-lucide="home"></i>
</div>
<div className="p-5 space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Purchase Price (ZAR)</label>
<div className="relative">
<span className="absolute left-3 top-2 text-zinc-400 text-sm">R</span>
<input className="w-full pl-7 pr-3 py-2 text-sm border border-zinc-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-zinc-900 font-medium" type="text" value="4,500,000"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Deposit (%)</label>
<div className="flex items-center">
<input className="w-full px-3 py-2 text-sm border border-zinc-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" type="number" value="30"/>
<span className="ml-2 text-xs text-zinc-400">%</span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Rate (%)</label>
<div className="flex items-center">
<input className="w-full px-3 py-2 text-sm border border-zinc-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" type="number" value="11.75"/>
<span className="ml-2 text-xs text-zinc-400">%</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-zinc-100">
<h4 className="text-xs font-medium text-zinc-900 mb-3 uppercase tracking-wider">Capex &amp; Fit-out</h4>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1.5">
<label className="text-xs text-zinc-500">Renovation Budget</label>
<span className="text-xs font-medium text-zinc-900">R 650,000</span>
</div>
<input className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" max="2000000" min="0" type="range" value="650000"/>
</div>
<div>
<div className="flex justify-between mb-1.5">
<label className="text-xs text-zinc-500">Furniture &amp; Staging</label>
<span className="text-xs font-medium text-zinc-900">R 250,000</span>
</div>
<input className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" max="1000000" min="0" type="range" value="250000"/>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Hospitality Model</h3>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-300 checked:border-indigo-600 transition-all duration-300" id="mode-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-300 cursor-pointer" htmlFor="mode-toggle"></label>
</input></div>
</div>
<div className="p-5 space-y-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Short-Term (STR) Active</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Avg Nightly Rate (ADR)</label>
<div className="relative">
<span className="absolute left-3 top-2 text-zinc-400 text-sm">R</span>
<input className="w-full pl-7 pr-3 py-2 text-sm border border-zinc-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-zinc-900" type="text" value="3,200"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Occupancy</label>
<div className="flex items-center">
<input className="w-full px-3 py-2 text-sm border border-zinc-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" type="number" value="68"/>
<span className="ml-2 text-xs text-zinc-400">%</span>
</div>
</div>
</div>
<div className="pt-3 border-t border-zinc-100 grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">OpEx (Monthly)</label>
<input className="w-full px-3 py-2 text-sm border border-zinc-200 rounded-md bg-zinc-50 text-zinc-700" type="text" value="12,500"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Mgmt Fee</label>
<div className="flex items-center">
<input className="w-full px-3 py-2 text-sm border border-zinc-200 rounded-md bg-zinc-50 text-zinc-700" type="number" value="15"/>
<span className="ml-2 text-xs text-zinc-400">%</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-zinc-100 flex justify-between items-center">
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Risk Factors</h3>
<i className="w-4 h-4 text-zinc-400" data-lucide="alert-triangle"></i>
</div>
<div className="p-5 space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">Renovation Complexity</label>
<div className="flex gap-2">
<button className="flex-1 py-1.5 text-xs border border-zinc-200 rounded bg-white text-zinc-600 hover:bg-zinc-50">Low</button>
<button className="flex-1 py-1.5 text-xs border border-indigo-600 bg-indigo-50 text-indigo-700 font-medium rounded">Medium</button>
<button className="flex-1 py-1.5 text-xs border border-zinc-200 rounded bg-white text-zinc-600 hover:bg-zinc-50">High</button>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">Regulatory/Zoning Risk</label>
<div className="flex gap-2">
<button className="flex-1 py-1.5 text-xs border border-emerald-500 bg-emerald-50 text-emerald-700 font-medium rounded">Low</button>
<button className="flex-1 py-1.5 text-xs border border-zinc-200 rounded bg-white text-zinc-600 hover:bg-zinc-50">Medium</button>
<button className="flex-1 py-1.5 text-xs border border-zinc-200 rounded bg-white text-zinc-600 hover:bg-zinc-50">High</button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 space-y-6">

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10">
<i className="w-32 h-32 text-emerald-600" data-lucide="check-circle-2"></i>
</div>
<div className="flex justify-between items-start relative z-10">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                                                RECOMMENDATION: GO
                                            </span>
<span className="text-xs text-zinc-400">Confidence: High</span>
</div>
<h2 className="text-xl font-semibold text-zinc-900 tracking-tight mb-1">Strong Cash Flow Potential</h2>
<p className="text-sm text-zinc-500 max-w-lg leading-relaxed">
                                            Property exceeds IRR threshold of 15% in Year 1. Hospitality conversion shows 35% premium over long-term rental yield. Break-even occupancy (42%) provides significant safety margin.
                                        </p>
</div>
<div className="text-right">
<div className="text-3xl font-bold text-zinc-900 tracking-tight">18.4%</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Projected IRR (5yr)</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-zinc-500 font-medium">Net Yield</span>
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="trending-up"></i>
</div>
<div className="text-xl font-semibold text-zinc-900">11.2%</div>
<div className="text-xxs text-zinc-400 mt-1">Target: &gt;9%</div>
</div>

<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-zinc-500 font-medium">Cash-on-Cash</span>
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="banknote"></i>
</div>
<div className="text-xl font-semibold text-zinc-900">14.8%</div>
<div className="text-xxs text-zinc-400 mt-1">Year 1 Projection</div>
</div>

<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-zinc-500 font-medium">Cap Rate</span>
<i className="w-3.5 h-3.5 text-indigo-500" data-lucide="percent"></i>
</div>
<div className="text-xl font-semibold text-zinc-900">9.4%</div>
<div className="text-xxs text-zinc-400 mt-1">Market Avg: 8.1%</div>
</div>

<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-zinc-500 font-medium">DSCR</span>
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="shield-check"></i>
</div>
<div className="text-xl font-semibold text-zinc-900">1.45x</div>
<div className="text-xxs text-zinc-400 mt-1">Healthy (&gt;1.25x)</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-900">Level-1 Proforma (Annualized)</h3>
<div className="flex gap-2">
<span className="text-xs px-2 py-1 bg-zinc-100 rounded text-zinc-600">ZAR</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-zinc-500 bg-zinc-50 uppercase font-medium">
<tr>
<th className="px-6 py-3">Item</th>
<th className="px-6 py-3 text-right">Monthly</th>
<th className="px-6 py-3 text-right">Annual</th>
<th className="px-6 py-3 text-right hidden md:table-cell">% Gross</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="px-6 py-3 font-medium text-zinc-900">Gross Rental Income</td>
<td className="px-6 py-3 text-right">R 66,240</td>
<td className="px-6 py-3 text-right font-medium">R 794,880</td>
<td className="px-6 py-3 text-right text-zinc-500 hidden md:table-cell">100%</td>
</tr>
<tr className="text-zinc-600">
<td className="px-6 py-2 pl-8 text-xs relative">
<span className="absolute left-6 top-1/2 -translate-y-1/2 w-1 h-1 bg-zinc-300 rounded-full"></span>
                                                    Vacancy Allowance (5%)
                                                </td>
<td className="px-6 py-2 text-right text-xs">(R 3,312)</td>
<td className="px-6 py-2 text-right text-xs">(R 39,744)</td>
<td className="px-6 py-2 text-right text-xs hidden md:table-cell">5%</td>
</tr>
<tr>
<td className="px-6 py-3 font-medium text-zinc-700">Effective Gross Income</td>
<td className="px-6 py-3 text-right">R 62,928</td>
<td className="px-6 py-3 text-right">R 755,136</td>
<td className="px-6 py-3 text-right text-zinc-500 hidden md:table-cell">95%</td>
</tr>
<tr>
<td className="px-6 py-3 text-zinc-700">Operating Expenses</td>
<td className="px-6 py-3 text-right text-rose-600">(R 22,500)</td>
<td className="px-6 py-3 text-right text-rose-600">(R 270,000)</td>
<td className="px-6 py-3 text-right text-zinc-500 hidden md:table-cell">34%</td>
</tr>
<tr className="bg-indigo-50/30">
<td className="px-6 py-3 font-semibold text-indigo-900">Net Operating Income (NOI)</td>
<td className="px-6 py-3 text-right font-semibold text-indigo-700">R 40,428</td>
<td className="px-6 py-3 text-right font-semibold text-indigo-700">R 485,136</td>
<td className="px-6 py-3 text-right text-indigo-400 hidden md:table-cell">61%</td>
</tr>
<tr>
<td className="px-6 py-3 text-zinc-700">Debt Service (Mortgage)</td>
<td className="px-6 py-3 text-right text-zinc-500">(R 27,850)</td>
<td className="px-6 py-3 text-right text-zinc-500">(R 334,200)</td>
<td className="px-6 py-3 text-right text-zinc-500 hidden md:table-cell">-</td>
</tr>
<tr className="bg-emerald-50/50">
<td className="px-6 py-3 font-bold text-emerald-900">Cash Flow (Pre-Tax)</td>
<td className="px-6 py-3 text-right font-bold text-emerald-700">R 12,578</td>
<td className="px-6 py-3 text-right font-bold text-emerald-700">R 150,936</td>
<td className="px-6 py-3 text-right text-emerald-600 hidden md:table-cell">19%</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-5">
<h3 className="text-sm font-medium text-zinc-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="bar-chart-2"></i>
                                        Sensitivity (Occupancy)
                                    </h3>
<div className="space-y-4">

<div className="space-y-1">
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-500">Worst Case (50% Occ)</span>
<span className="text-zinc-900 font-medium">Yield: 5.2%</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-rose-400 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-500">Base Case (68% Occ)</span>
<span className="text-zinc-900 font-medium">Yield: 11.2%</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-500">Best Case (85% Occ)</span>
<span className="text-zinc-900 font-medium">Yield: 16.8%</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
</div>
<div className="mt-5 pt-4 border-t border-zinc-100 flex justify-between items-center">
<span className="text-xs text-zinc-500">Break-even Occupancy</span>
<span className="text-xs font-bold text-zinc-900 bg-zinc-100 px-2 py-1 rounded">42%</span>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-5">
<h3 className="text-sm font-medium text-zinc-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="activity"></i>
                                        Risk &amp; Capital
                                    </h3>
<div className="space-y-3">
<div className="flex justify-between items-center py-2 border-b border-zinc-50">
<span className="text-xs text-zinc-500">Total Acquisition Cost (TAC)</span>
<span className="text-sm font-medium text-zinc-900">R 5,640,000</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-zinc-50">
<span className="text-xs text-zinc-500">Loan-to-Value (LTV)</span>
<span className="text-sm font-medium text-zinc-900">70%</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-zinc-50">
<span className="text-xs text-zinc-500">Payback Period</span>
<span className="text-sm font-medium text-zinc-900">7.2 Years</span>
</div>
<div className="flex justify-between items-center py-2">
<span className="text-xs text-zinc-500">Suburb Liquidity Score</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div className="w-2 h-2 rounded-full bg-zinc-200"></div>
<div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 text-center pb-6">
<p className="text-xxs text-zinc-400">Urban Jungle Studios Inc. Confidential. Generated for internal use only.</p>
</div>
</div>
</div>

<div className="app-view hidden flex-col h-full" id="view-portfolio">
<header className="h-16 border-b border-zinc-200 bg-white flex items-center justify-between px-6 flex-shrink-0">
<div className="flex items-center gap-4">
<h2 className="text-sm font-medium text-zinc-900 tracking-tight">Portfolio Performance</h2>
<span className="px-2 py-0.5 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600">8 Assets</span>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<i className="w-3.5 h-3.5 absolute left-3 top-2.5 text-zinc-400" data-lucide="search"></i>
<input className="pl-8 pr-3 py-1.5 text-xs border border-zinc-200 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-300 w-64" placeholder="Search assets..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-600 border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
                            Export
                        </button>
</div>
</header>
<div className="flex-1 overflow-y-auto bg-zinc-50 p-6">
<div className="max-w-7xl mx-auto bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-sm text-left">
<thead className="text-xs text-zinc-500 bg-zinc-50/50 uppercase font-medium border-b border-zinc-100">
<tr>
<th className="px-6 py-3 font-medium">Asset Name</th>
<th className="px-6 py-3 font-medium text-right">Current Value</th>
<th className="px-6 py-3 font-medium text-right">Net Yield</th>
<th className="px-6 py-3 font-medium text-right">Occupancy</th>
<th className="px-6 py-3 font-medium">Performance</th>
<th className="px-6 py-3 font-medium">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-400">
<i className="w-4 h-4" data-lucide="building"></i>
</div>
<div>
<div className="font-medium text-zinc-900">The Silo Apartments</div>
<div className="text-xs text-zinc-500">Cape Town • Residential</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-right font-medium text-zinc-900">R 8,250,000</td>
<td className="px-6 py-4 text-right text-emerald-600 font-medium">12.4%</td>
<td className="px-6 py-4 text-right text-zinc-600">94%</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Outperforming</span>
</div>
</td>
<td className="px-6 py-4">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-400">
<i className="w-4 h-4" data-lucide="home"></i>
</div>
<div>
<div className="font-medium text-zinc-900">Green Point Villa</div>
<div className="text-xs text-zinc-500">Cape Town • STR</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-right font-medium text-zinc-900">R 5,100,000</td>
<td className="px-6 py-4 text-right text-emerald-600 font-medium">14.8%</td>
<td className="px-6 py-4 text-right text-zinc-600">82%</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Outperforming</span>
</div>
</td>
<td className="px-6 py-4">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-400">
<i className="w-4 h-4" data-lucide="building-2"></i>
</div>
<div>
<div className="font-medium text-zinc-900">Observatory Student Hub</div>
<div className="text-xs text-zinc-500">Cape Town • Student Acc.</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-right font-medium text-zinc-900">R 12,400,000</td>
<td className="px-6 py-4 text-right text-zinc-600 font-medium">8.2%</td>
<td className="px-6 py-4 text-right text-zinc-600">98%</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex w-2 h-2 rounded-full bg-amber-400"></span>
<span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">Stable</span>
</div>
</td>
<td className="px-6 py-4">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-400">
<i className="w-4 h-4" data-lucide="warehouse"></i>
</div>
<div>
<div className="font-medium text-zinc-900">Woodstock Loft</div>
<div className="text-xs text-zinc-500">Cape Town • Commercial</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-right font-medium text-zinc-900">R 3,200,000</td>
<td className="px-6 py-4 text-right text-rose-600 font-medium">5.4%</td>
<td className="px-6 py-4 text-right text-zinc-600">45%</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex w-2 h-2 rounded-full bg-rose-500"></span>
<span className="text-xs text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">Underperforming</span>
</div>
</td>
<td className="px-6 py-4">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="app-view hidden flex-col h-full" id="view-active-deals">
<header className="h-16 border-b border-zinc-200 bg-white flex items-center justify-between px-6 flex-shrink-0">
<h2 className="text-sm font-medium text-zinc-900 tracking-tight">Deal Pipeline</h2>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 border border-zinc-900 rounded-md hover:bg-zinc-800 shadow-sm transition-colors">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                        New Deal
                    </button>
</header>
<div className="flex-1 overflow-y-auto bg-zinc-50 p-6">
<div className="max-w-7xl mx-auto space-y-6">

<div>
<div className="flex items-center justify-between mb-3 px-1">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Underwriting (2)</h3>
</div>
<div className="space-y-3">

<div className="bg-white border border-zinc-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center group">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded flex items-center justify-center font-bold text-xs">U</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">42 Camps Bay Drive</h4>
<p className="text-xs text-zinc-500 mt-0.5">Single Family • ZAR 4.5M</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs font-medium text-zinc-900">18.4% IRR</div>
<div className="text-xxs text-zinc-400">Projected</div>
</div>
<div className="h-8 w-px bg-zinc-100"></div>
<span className="text-xs px-2 py-1 rounded bg-zinc-100 text-zinc-600 font-medium">Draft</span>
<i className="w-4 h-4 text-zinc-300" data-lucide="chevron-right"></i>
</div>
</div>

<div className="bg-white border border-zinc-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center group">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded flex items-center justify-center font-bold text-xs">U</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">108 Bree Street Loft</h4>
<p className="text-xs text-zinc-500 mt-0.5">Commercial • ZAR 2.8M</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs font-medium text-zinc-900">11.2% IRR</div>
<div className="text-xxs text-zinc-400">Projected</div>
</div>
<div className="h-8 w-px bg-zinc-100"></div>
<span className="text-xs px-2 py-1 rounded bg-zinc-100 text-zinc-600 font-medium">Review</span>
<i className="w-4 h-4 text-zinc-300" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3 px-1 mt-8">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Due Diligence (1)</h3>
</div>
<div className="space-y-3">

<div className="bg-white border border-zinc-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center group">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-amber-50 text-amber-600 rounded flex items-center justify-center font-bold text-xs">DD</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">Seapoint Promenade Block</h4>
<p className="text-xs text-zinc-500 mt-0.5">Multi-Family • ZAR 18.5M</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs font-medium text-zinc-900">45 Days</div>
<div className="text-xxs text-zinc-400">Remaining</div>
</div>
<div className="h-8 w-px bg-zinc-100"></div>
<span className="text-xs px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-100 font-medium">In Progress</span>
<i className="w-4 h-4 text-zinc-300" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden flex-col h-full" id="view-reports">
<header className="h-16 border-b border-zinc-200 bg-white flex items-center justify-between px-6 flex-shrink-0">
<h2 className="text-sm font-medium text-zinc-900 tracking-tight">Report Library</h2>
<div className="flex gap-2">
<select className="text-xs border border-zinc-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-zinc-300">
<option>All Reports</option>
<option>Monthly</option>
<option>Quarterly</option>
<option>Tax</option>
</select>
</div>
</header>
<div className="flex-1 overflow-y-auto bg-zinc-50 p-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:border-indigo-300 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-rose-50 rounded-lg text-rose-600">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<i className="w-4 h-4 text-zinc-300" data-lucide="more-horizontal"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 group-hover:text-indigo-600">Q3 2023 Portfolio Summary</h3>
<p className="text-xs text-zinc-500 mb-4">Generated on Oct 1, 2023</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50">
<span className="text-xxs text-zinc-400">PDF • 2.4 MB</span>
<span className="text-xs font-medium text-zinc-600 flex items-center gap-1">Download <i className="w-3 h-3" data-lucide="download"></i></span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:border-indigo-300 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<i className="w-5 h-5" data-lucide="pie-chart"></i>
</div>
<i className="w-4 h-4 text-zinc-300" data-lucide="more-horizontal"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 group-hover:text-indigo-600">October 2023 Occupancy</h3>
<p className="text-xs text-zinc-500 mb-4">Generated on Nov 2, 2023</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50">
<span className="text-xxs text-zinc-400">XLSX • 850 KB</span>
<span className="text-xs font-medium text-zinc-600 flex items-center gap-1">Download <i className="w-3 h-3" data-lucide="download"></i></span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:border-indigo-300 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-100 rounded-lg text-zinc-600">
<i className="w-5 h-5" data-lucide="file-signature"></i>
</div>
<i className="w-4 h-4 text-zinc-300" data-lucide="more-horizontal"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 group-hover:text-indigo-600">2022 Annual Tax Packet</h3>
<p className="text-xs text-zinc-500 mb-4">Generated on Feb 15, 2023</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50">
<span className="text-xxs text-zinc-400">ZIP • 14.2 MB</span>
<span className="text-xs font-medium text-zinc-600 flex items-center gap-1">Download <i className="w-3 h-3" data-lucide="download"></i></span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
