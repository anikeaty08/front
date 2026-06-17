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



const mockData = {
'default': {
title: 'Colorado is a succession-planning market for FMI — 4 of 8 engagements involve leadership transitions.',
text: 'FMI has served 5 Colorado construction clients for $507K in revenue since 2019. Hensel Phelps is the deepest relationship ($287K, 3 engagements) with a Q3 2024 succession assessment that explicitly recommends a follow-up implementation.<span class="footnote-ref">1</span> Revenue has been episodic, but a 2023–24 cluster of 4 engagements ($310K) suggests momentum.',
stats: [
{ l: 'Engagements', v: '8' }, { l: 'Revenue', v: '$507K' }, { l: 'Clients', v: '5' }, { l: 'Documents', v: '23' }, { l: 'Contacts', v: '7' }
],
items: [
{ t: 'Succession Assessment', b: 'Won', bc: 'badge-won', s: 'Salesforce', c: 'Hensel Phelps', type: 'Org Consulting', m: '<span class="font-semibold text-slate-900">$115,000</span> <span class="text-slate-400">Q3 2024</span> <span class="text-slate-500">Lead: <span class="text-slate-900">Jennifer Reynolds</span></span>', icon: 'briefcase' },
{ t: 'Market Expansion Strategy', b: 'Won', bc: 'badge-won', s: 'Salesforce', c: 'GE Johnson', type: 'Strategy', m: '<span class="font-semibold text-slate-900">$92,000</span> <span class="text-slate-400">Q4 2023</span> <span class="text-slate-500">Lead: <span class="text-slate-900">Mark Torres</span></span>', icon: 'briefcase' },
{ t: 'Market Strategy Review', b: 'Won', bc: 'badge-won', s: 'Salesforce', c: 'Hensel Phelps', type: 'Strategy', m: '<span class="font-semibold text-slate-900">$92,000</span> <span class="text-slate-400">Q1 2023</span> <span class="text-slate-500">Lead: <span class="text-slate-900">Scott Winstead</span></span>', icon: 'briefcase' },
{ t: 'Succession Planning', b: 'Won', bc: 'badge-won', s: 'Salesforce', c: 'Saunders', type: 'Org Consulting', m: '<span class="font-semibold text-slate-900">$85,000</span> <span class="text-slate-400">Q2 2022</span> <span class="text-slate-500">Lead: <span class="text-slate-900">Jennifer Reynolds</span></span>', icon: 'briefcase' }
]
},
'proposals': {
title: 'Found 8 past proposals matching your criteria. 3 active, 5 archived.',
text: 'Recent proposal activity focuses on <strong>Strategic Planning</strong> and <strong>Operational Excellence</strong>. The acceptance rate for proposals in this sector is 65% over the last 12 months.<span class="footnote-ref">3</span>',
stats: [
{ l: 'Proposals', v: '8' }, { l: 'Win Rate', v: '65%' }, { l: 'Open', v: '3' }, { l: 'Avg Size', v: '$85K' }, { l: 'Leads', v: '4' }
],
items: [
{ t: 'Project Atlas Implementation', b: 'Draft', bc: 'bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full text-[11px] font-medium', s: 'Word', c: 'Hensel Phelps', type: 'Proposal', m: '<span class="font-semibold text-slate-900">$145,000</span> <span class="text-slate-400">Modified 2 days ago</span>', icon: 'file-text' },
{ t: '2025 Strategic Roadmap', b: 'Sent', bc: 'bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[11px] font-medium', s: 'SharePoint', c: 'GE Johnson', type: 'Proposal', m: '<span class="font-semibold text-slate-900">$85,000</span> <span class="text-slate-400">Sent Oct 1</span> <span class="text-slate-500">Lead: <span class="text-slate-900">M. Torres</span></span>', icon: 'file-text' },
{ t: 'Executive Coaching Agreement', b: 'Signed', bc: 'badge-won', s: 'Salesforce', c: 'Saunders', type: 'Contract', m: '<span class="font-semibold text-slate-900">$45,000</span> <span class="text-slate-400">Signed Sep 15</span>', icon: 'file-check' },
{ t: 'Market Expansion Proposal', b: 'Archived', bc: 'bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full text-[11px] font-medium', s: 'Box', c: 'GH Phipps', type: 'Proposal', m: '<span class="font-semibold text-slate-900">$60,000</span> <span class="text-slate-400">Aug 2023</span>', icon: 'archive' }
]
},
'clients': {
title: '3 Major Clients identified in Colorado region.',
text: 'Hensel Phelps represents the largest account by revenue, while GE Johnson shows the highest growth potential for 2025 based on recent strategic inquiries.',
stats: [
{ l: 'Clients', v: '3' }, { l: 'Total Rev', v: '$1.2M' }, { l: 'Active Opps', v: '4' }, { l: 'NPS', v: '72' }, { l: 'YoY Growth', v: '+12%' }
],
items: [
{ t: 'Hensel Phelps', b: 'Key Account', bc: 'bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full text-[11px] font-medium', s: 'Salesforce', c: 'Greeley, CO', type: 'GC', m: '<span class="text-slate-500">Last Contact: Yesterday</span> <span class="text-slate-300">•</span> <span class="text-slate-900">Rev: $287K</span>', icon: 'building-2' },
{ t: 'GE Johnson', b: 'Growth', bc: 'bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-[11px] font-medium', s: 'Salesforce', c: 'Colorado Springs', type: 'GC', m: '<span class="text-slate-500">Last Contact: 1 week ago</span> <span class="text-slate-300">•</span> <span class="text-slate-900">Rev: $145K</span>', icon: 'building-2' },
{ t: 'Saunders Construction', b: 'Active', bc: 'bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[11px] font-medium', s: 'Salesforce', c: 'Englewood, CO', type: 'GC', m: '<span class="text-slate-500">Last Contact: 3 weeks ago</span> <span class="text-slate-300">•</span> <span class="text-slate-900">Rev: $75K</span>', icon: 'building-2' }
]
},
'research': {
title: 'Market Research: 5 key documents on Colorado Construction trends.',
text: 'The 2024 Outlook highlights labor shortages and material cost stabilization as primary drivers. Water/Wastewater sector is projected to grow 8%.',
stats: [
{ l: 'Reports', v: '5' }, { l: 'Sources', v: 'Box' }, { l: 'Authors', v: '3' }, { l: 'Views', v: '124' }, { l: 'Downloads', v: '45' }
],
items: [
{ t: 'Colorado Construction Outlook 2024', b: 'Final', bc: 'bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-[11px] font-medium', s: 'PDF', c: 'Internal', type: 'Research', m: '<span class="text-slate-500">Published Jan 2024</span> <span class="text-slate-300">•</span> <span class="text-slate-900">45 pages</span>', icon: 'bar-chart' },
{ t: 'Mountain West Labor Analysis', b: 'Draft', bc: 'bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full text-[11px] font-medium', s: 'PPTX', c: 'Internal', type: 'Deck', m: '<span class="text-slate-500">Updated yesterday</span>', icon: 'presentation' },
{ t: 'Water Sector Opportunity Map', b: 'Data', bc: 'bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[11px] font-medium', s: 'Excel', c: 'Internal', type: 'Dataset', m: '<span class="text-slate-500">Live Data</span>', icon: 'table' }
]
}
};
let activeDropdown = null;
function toggleDropdown(id, event) {
event.stopPropagation();
const menu = document.getElementById(id);
if (activeDropdown && activeDropdown !== menu) {
activeDropdown.classList.add('hidden');
}
if (menu.classList.contains('hidden')) {
menu.classList.remove('hidden');
activeDropdown = menu;
} else {
menu.classList.add('hidden');
activeDropdown = null;
}
}
document.addEventListener('click', () => {
if (activeDropdown) {
activeDropdown.classList.add('hidden');
activeDropdown = null;
}
});
function triggerSearch(term) {
const landing = document.getElementById('landing-view');
const resultsView = document.getElementById('results-view');
const input = document.getElementById('main-search-input');
if (term) input.value = term;
let key = 'default';
const t = (term || '').toLowerCase();
if (t.includes('proposal')) key = 'proposals';
else if (t.includes('client')) key = 'clients';
else if (t.includes('research')) key = 'research';
const data = mockData[key] || mockData['default'];
document.getElementById('synthesis-title').innerText = data.title;
document.getElementById('synthesis-text').innerHTML = `<p>${data.text}</p>`;
document.getElementById('stats-row').innerHTML = data.stats.map(s => `
<div class="flex items-baseline gap-2">
<span class="text-lg font-semibold text-slate-900">${s.v}</span>
<span class="text-[13px] text-slate-500 font-medium">${s.l}</span>
</div>
`).join('');
document.getElementById('results-list').innerHTML = data.items.map(item => `
<div class="group py-5 border-t border-gray-100 flex gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer">
<div class="pt-1">
<div class="w-8 h-8 rounded bg-[#F8F5EE] border border-[#E7E0D3] text-[#A69374] flex items-center justify-center">
<iconify-icon icon="lucide:${item.icon}" width="16"></iconify-icon>
</div>
</div>
<div class="flex-1 min-w-0">
<div class="flex items-center gap-3 mb-1.5">
<h3 class="text-[15px] font-medium text-slate-900">${item.t}</h3>
<span class="${item.bc}">${item.b}</span>
</div>
<div class="flex items-center gap-2 text-[13px] text-slate-500 mb-1.5">
<span class="badge-salesforce">${item.s}</span>
<span class="font-medium text-slate-700">${item.c}</span>
<span class="text-slate-300">•</span>
<span>${item.type}</span>
</div>
<div class="flex items-center gap-4 text-[13px]">
${item.m}
</div>
</div>
</div>
`).join('');
landing.style.opacity = '0';
landing.style.transform = 'translateY(-10px)';
landing.style.transition = 'all 0.3s ease';
setTimeout(() => {
landing.classList.add('hidden');
resultsView.classList.remove('hidden');
resultsView.classList.add('fade-enter');
}, 300);
}
function handleKey(e) {
if (e.key === 'Enter') triggerSearch(e.target.value);
}
function toggleEvidence() {
const panel = document.getElementById('evidence-panel');
const backdrop = document.getElementById('evidence-backdrop');
if (panel.classList.contains('translate-x-full')) {
panel.classList.remove('translate-x-full');
backdrop.classList.remove('opacity-0', 'pointer-events-none');
} else {
panel.classList.add('translate-x-full');
backdrop.classList.add('opacity-0', 'pointer-events-none');
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
      

<div className="fixed inset-0 z-[-1] bg-gray-50"></div>
<div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white pointer-events-none via-gray-50 to-gray-100"></div>

<div className="fixed flex flex-col transition-all duration-300 z-50 pt-6 pr-6 pb-6 pl-6 top-0 right-0 bottom-0 left-0 items-center justify-center" id="landing-view">

<div className="absolute top-6 left-6">
<div className="flex items-center gap-2">
<img alt="FMI Logo" className="h-8 w-auto object-contain opacity-80" src="https://placehold.co/80x40/transparent/334155?text=FMI"/>
</div>
</div>
<div className="w-full max-w-3xl flex flex-col items-center">

<h1 className="text-4xl md:text-5xl mb-5 tracking-tight text-center font-poppins font-semibold text-gray-800">
          Search across FMI
        </h1>
<p className="text-lg mb-10 text-center max-w-xl font-normal leading-relaxed font-poppins text-gray-500">
          Find engagements, clients, proposals, research, and contacts — Atlas
          synthesizes what it finds.
        </p>

<div className="w-full bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] p-2 mb-8 border border-gray-200">

<div className="flex items-center px-4 py-2 gap-4">
<iconify-icon className="text-gray-400" icon="lucide:search" width="22"></iconify-icon>
<input className="flex-1 text-lg focus:outline-none bg-transparent h-12 text-gray-700 placeholder:text-gray-400" onkeydown="handleKey(event)" placeholder="Search engagements, clients, documents..." type="text"/>
<button className="flex transition-colors hover:bg-gray-900 text-white bg-cyan-800 w-10 h-10 rounded-full shadow-sm items-center justify-center" onclick="triggerSearch('Colorado construction')">
<iconify-icon className="" height="20" icon="lucide:arrow-right" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</button>
</div>

<div className="flex flex-wrap gap-2 pt-1 pr-3 pb-3 pl-3 gap-x-2 gap-y-2 items-center">
<div className="relative inline-block">
<button className="landing-chip font-poppins" onclick="toggleDropdown('land-source', event)">
                Source
                <iconify-icon className="text-gray-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
<div className="hidden absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-50 py-1 border-gray-100" id="land-source">
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  All Sources
                </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  Salesforce
                </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  Box
                </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  SharePoint
                </a>
</div>
</div>
<div className="relative inline-block">
<button className="landing-chip font-poppins" onclick="toggleDropdown('land-practice', event)">
                Practice
                <iconify-icon className="text-gray-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
<div className="hidden absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-50 py-1 border-gray-100" id="land-practice">
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  Strategy
                </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  FMI Capital Advisors
                </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  Leadership
                </a>
</div>
</div>
<div className="relative inline-block">
<button className="landing-chip font-poppins" onclick="toggleDropdown('land-geo', event)">
                Geography
                <iconify-icon className="text-gray-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
<div className="hidden absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-50 py-1 border-gray-100" id="land-geo">
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  North America
                </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  EMEA
                </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  APAC
                </a>
</div>
</div>
<div className="relative inline-block">
<button className="landing-chip font-poppins" onclick="toggleDropdown('land-date', event)">
                Date range
                <iconify-icon className="text-gray-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
<div className="hidden absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-50 py-1 border-gray-100" id="land-date">
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  Last 30 Days
                </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  Last Quarter
                </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                  Last Year
                </a>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-16">
<button className="px-5 py-2.5 bg-white border hover:shadow-sm rounded-full text-[15px] font-medium transition-all shadow-sm font-poppins border-gray-200 hover:border-gray-300 text-gray-600" onclick="triggerSearch('Past proposals')">
            Find past proposals
          </button>
<button className="px-5 py-2.5 bg-white border hover:shadow-sm rounded-full text-[15px] font-medium transition-all shadow-sm font-poppins border-gray-200 hover:border-gray-300 text-gray-600" onclick="triggerSearch('Client overview')">
            Client overview
          </button>
<button className="px-5 py-2.5 bg-white border hover:shadow-sm rounded-full text-[15px] font-medium transition-all shadow-sm font-poppins border-gray-200 hover:border-gray-300 text-gray-600" onclick="triggerSearch('Market research')">
            Market research
          </button>
<button className="px-5 py-2.5 bg-white border hover:shadow-sm rounded-full text-[15px] font-medium transition-all shadow-sm font-poppins border-gray-200 hover:border-gray-300 text-gray-600" onclick="triggerSearch('Engagement history')">
            Engagement history
          </button>
</div>

<div className="w-full max-w-2xl bg-white rounded-xl p-4 border shadow-sm border-gray-200">
<h3 className="text-xs font-semibold uppercase tracking-wider mb-2 pl-2 font-poppins text-gray-400">
            Recent Searches
          </h3>
<div className="space-y-1">
<button className="w-full flex items-center justify-between p-3 rounded-lg text-left group transition-colors hover:bg-gray-50" onclick="triggerSearch('Water/wastewater sector trends')">
<div className="flex items-center gap-4">
<iconify-icon className="transition-colors text-gray-300 group-hover:text-gray-500" icon="lucide:clock" width="18"></iconify-icon>
<span className="text-[15px] font-poppins text-gray-700">
                  Water/wastewater sector trends in Southeast
                </span>
</div>
<span className="text-xs font-normal font-poppins text-gray-400">
                2h ago
              </span>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-lg text-left group transition-colors hover:bg-gray-50" onclick="triggerSearch('Hensel Phelps')">
<div className="flex items-center gap-4">
<iconify-icon className="transition-colors text-gray-300 group-hover:text-gray-500" icon="lucide:search" width="18"></iconify-icon>
<span className="text-[15px] font-poppins text-gray-700">
                  Hensel Phelps
                </span>
</div>
<span className="text-xs font-normal font-poppins text-gray-400">
                Yesterday
              </span>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-lg text-left group transition-colors hover:bg-gray-50" onclick="triggerSearch('Succession planning proposals')">
<div className="flex items-center gap-4">
<iconify-icon className="transition-colors text-gray-300 group-hover:text-gray-500" icon="lucide:search" width="18"></iconify-icon>
<span className="text-[15px] font-poppins text-gray-700">
                  Succession planning proposals 2023–2024
                </span>
</div>
<span className="text-xs font-normal font-poppins text-gray-400">
                3 days ago
              </span>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-lg text-left group transition-colors hover:bg-gray-50" onclick="triggerSearch('GE Johnson market expansion')">
<div className="flex items-center gap-4">
<iconify-icon className="transition-colors text-gray-300 group-hover:text-gray-500" icon="lucide:search" width="18"></iconify-icon>
<span className="text-[15px] font-poppins text-gray-700">
                  GE Johnson market expansion
                </span>
</div>
<span className="text-xs font-normal font-poppins text-gray-400">
                Last week
              </span>
</button>
</div>
</div>
</div>
</div>

<div className="hidden flex flex-col min-h-screen" id="results-view">

<header className="h-16 border-b flex items-center px-6 gap-6 sticky top-0 bg-white z-30 border-gray-200">

<div className="flex-shrink-0 cursor-pointer" onclick="window.location.reload()">
<img alt="FMI Logo" className="h-8 w-auto object-contain" src="https://placehold.co/80x40/transparent/334155?text=FMI"/>
</div>

<div className="flex-1 max-w-2xl relative group">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400 transition-colors group-focus-within:text-gray-600" icon="lucide:search" width="18"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-2 border border-transparent rounded-lg text-[14px] placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 transition-all bg-gray-100 text-gray-900 focus:ring-gray-200 focus:border-gray-300" id="main-search-input" type="text" value="Colorado construction"/>
</div>

<div className="flex items-center gap-2">
<div className="relative">
<button className="px-3 py-1.5 border bg-white rounded-lg text-[13px] font-medium flex items-center gap-2 transition-colors font-poppins border-gray-200 text-gray-600 hover:bg-gray-50" onclick="toggleDropdown('res-source', event)">
              Source
              <iconify-icon className="text-gray-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
<div className="hidden absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-50 py-1 border-gray-100" id="res-source">
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                Salesforce
              </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                Box
              </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                SharePoint
              </a>
</div>
</div>
<div className="relative">
<button className="px-3 py-1.5 border bg-white rounded-lg text-[13px] font-medium flex items-center gap-2 transition-colors font-poppins border-gray-200 text-gray-600 hover:bg-gray-50" onclick="toggleDropdown('res-date', event)">
              Date range
              <iconify-icon className="text-gray-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
<div className="hidden absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-50 py-1 border-gray-100" id="res-date">
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                Last 30 Days
              </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                Last Quarter
              </a>
<a className="block px-4 py-2.5 text-sm font-poppins text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
                Last Year
              </a>
</div>
</div>
</div>
<div className="flex-1"></div>

<div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-xs font-medium cursor-pointer transition-colors font-poppins bg-gray-800 hover:bg-gray-700">
          SW
        </div>
</header>

<div className="border-b bg-white border-gray-200">
<div className="max-w-6xl mx-auto px-6">
<nav className="flex items-center gap-1 pt-4">
<button className="px-3 py-2 text-[13px] font-medium rounded-md transition-colors flex items-center gap-1.5 font-poppins text-gray-500 hover:text-gray-900">
              All results
              <span className="text-gray-400">16</span>
</button>
<button className="px-3 py-2 text-[13px] font-medium rounded-md transition-colors flex items-center gap-1.5 font-poppins text-gray-500 hover:text-gray-900">
              Documents
              <span className="text-gray-400">6</span>
</button>
<button className="px-3 py-2 text-[13px] font-medium rounded-md transition-colors flex items-center gap-1.5 font-poppins text-gray-500 hover:text-gray-900">
              Clients
              <span className="text-gray-400">3</span>
</button>
<button className="px-3 py-2 text-[13px] font-medium bg-white shadow-sm ring-1 rounded-md transition-colors flex items-center gap-1.5 font-poppins text-gray-900 ring-gray-200">
              Engagements
              <span className="text-gray-500">5</span>
</button>
<button className="px-3 py-2 text-[13px] font-medium rounded-md transition-colors flex items-center gap-1.5 font-poppins text-gray-500 hover:text-gray-900">
              Contacts
              <span className="text-gray-400">2</span>
</button>
</nav>
</div>
</div>

<main className="flex-1 overflow-y-auto">
<div className="max-w-6xl mx-auto px-6 py-8 space-y-8">

<div className="relative synthesis-card rounded-xl p-8 overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500"></div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-sky-500" icon="lucide:sparkles" width="16"></iconify-icon>
<span className="text-xs font-semibold tracking-wider uppercase font-poppins text-gray-500">
                Atlas Synthesis
              </span>
<span className="text-xs font-normal font-poppins text-gray-400">
                from 23 documents across Box &amp; Salesforce
              </span>
</div>
<h2 className="text-[22px] leading-snug font-semibold mb-4 tracking-tight font-poppins text-gray-900" id="synthesis-title">
              Colorado is a succession-planning market for FMI — 4 of 8
              engagements involve leadership transitions, and Hensel Phelps has
              a clear next engagement opportunity.
            </h2>
<div className="prose prose-sm max-w-none mb-8 leading-relaxed text-gray-600" id="synthesis-text">
<p className="font-poppins">
                FMI has served 5 Colorado construction clients for $507K in
                revenue since 2019. Hensel Phelps is the deepest relationship
                ($287K, 3 engagements) with a Q3 2024 succession assessment that
                explicitly recommends a follow-up implementation.
                <span className="footnote-ref">1</span>
<span className="footnote-ref">2</span>
                Revenue has been episodic, but a 2023–24 cluster of 4
                engagements ($310K) suggests momentum, possibly tied to IIJA
                infrastructure spending.
                <span className="footnote-ref">6</span>
                Notable gap: no DOT or water/wastewater clients despite FMI
                serving 14 nationally in that sector.
                <span className="footnote-ref">7</span>
</p>
</div>
<div className="flex items-center justify-between">
<button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-[13px] font-medium hover:shadow-sm transition-all shadow-sm font-poppins border-gray-200 text-gray-700 hover:border-gray-300" onclick="toggleEvidence()">
                View evidence
                <span className="text-gray-400">7 sources</span>
</button>
<button className="flex items-center gap-1 text-[13px] font-medium transition-colors font-poppins text-gray-500 hover:text-gray-800">
                Show full analysis
                <iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-8 py-2 px-1" id="stats-row">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold font-poppins text-gray-900">
                8
              </span>
<span className="text-[13px] font-medium font-poppins text-gray-500">
                Engagements
              </span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold font-poppins text-gray-900">
                $507K
              </span>
<span className="text-[13px] font-medium font-poppins text-gray-500">
                Revenue
              </span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold font-poppins text-gray-900">
                5
              </span>
<span className="text-[13px] font-medium font-poppins text-gray-500">
                Clients
              </span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold font-poppins text-gray-900">
                23
              </span>
<span className="text-[13px] font-medium font-poppins text-gray-500">
                Documents
              </span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold font-poppins text-gray-900">
                7
              </span>
<span className="text-[13px] font-medium font-poppins text-gray-500">
                Contacts
              </span>
</div>
</div>

<div className="space-y-0" id="results-list">

<div className="group py-5 border-t border-gray-200 flex gap-4 transition-colors cursor-pointer hover:bg-gray-50">
<div className="pt-1">
<div className="w-8 h-8 rounded bg-[#F8F5EE] border border-[#E7E0D3] text-[#A69374] flex items-center justify-center">
<iconify-icon icon="lucide:briefcase" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 mb-1.5">
<h3 className="text-[15px] font-medium font-poppins text-gray-900">
                    Succession Assessment
                  </h3>
<span className="badge-won font-poppins">Won</span>
</div>
<div className="flex items-center gap-2 text-[13px] mb-1.5 text-gray-500">
<span className="badge-salesforce font-poppins">Salesforce</span>
<span className="font-medium font-poppins text-gray-700">
                    Hensel Phelps
                  </span>
<span className="font-poppins text-gray-300">•</span>
<span className="font-poppins">Organizational Consulting</span>
</div>
<div className="flex items-center gap-4 text-[13px]">
<span className="font-semibold font-poppins text-gray-900">
                    $115,000
                  </span>
<span className="font-poppins text-gray-400">Q3 2024</span>
<span className="font-poppins text-gray-500">
                    Lead:
                    <span className="text-gray-900">Jennifer Reynolds</span>
</span>
</div>
</div>
</div>

<div className="group py-5 border-t border-gray-200 flex gap-4 transition-colors cursor-pointer hover:bg-gray-50">
<div className="pt-1">
<div className="w-8 h-8 rounded bg-[#F8F5EE] border border-[#E7E0D3] text-[#A69374] flex items-center justify-center">
<iconify-icon icon="lucide:briefcase" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 mb-1.5">
<h3 className="text-[15px] font-medium font-poppins text-gray-900">
                    Market Expansion Strategy
                  </h3>
<span className="badge-won font-poppins">Won</span>
</div>
<div className="flex items-center gap-2 text-[13px] mb-1.5 text-gray-500">
<span className="badge-salesforce font-poppins">Salesforce</span>
<span className="font-medium font-poppins text-gray-700">
                    GE Johnson
                  </span>
<span className="font-poppins text-gray-300">•</span>
<span className="font-poppins">Strategy</span>
</div>
<div className="flex items-center gap-4 text-[13px]">
<span className="font-semibold font-poppins text-gray-900">
                    $92,000
                  </span>
<span className="font-poppins text-gray-400">Q4 2023</span>
<span className="font-poppins text-gray-500">
                    Lead:
                    <span className="text-gray-900">Mark Torres</span>
</span>
</div>
</div>
</div>

<div className="group py-5 border-t border-gray-200 flex gap-4 transition-colors cursor-pointer hover:bg-gray-50">
<div className="pt-1">
<div className="w-8 h-8 rounded bg-[#F8F5EE] border border-[#E7E0D3] text-[#A69374] flex items-center justify-center">
<iconify-icon icon="lucide:briefcase" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 mb-1.5">
<h3 className="text-[15px] font-medium font-poppins text-gray-900">
                    Market Strategy Review
                  </h3>
<span className="badge-won font-poppins">Won</span>
</div>
<div className="flex items-center gap-2 text-[13px] mb-1.5 text-gray-500">
<span className="badge-salesforce font-poppins">Salesforce</span>
<span className="font-medium font-poppins text-gray-700">
                    Hensel Phelps
                  </span>
<span className="font-poppins text-gray-300">•</span>
<span className="font-poppins">Strategy</span>
</div>
<div className="flex items-center gap-4 text-[13px]">
<span className="font-semibold font-poppins text-gray-900">
                    $92,000
                  </span>
<span className="font-poppins text-gray-400">Q1 2023</span>
<span className="font-poppins text-gray-500">
                    Lead:
                    <span className="text-gray-900">Scott Winstead</span>
</span>
</div>
</div>
</div>

<div className="group py-5 border-t border-gray-200 flex gap-4 transition-colors cursor-pointer hover:bg-gray-50">
<div className="pt-1">
<div className="w-8 h-8 rounded bg-[#F8F5EE] border border-[#E7E0D3] text-[#A69374] flex items-center justify-center">
<iconify-icon icon="lucide:briefcase" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 mb-1.5">
<h3 className="text-[15px] font-medium font-poppins text-gray-900">
                    Succession Planning
                  </h3>
<span className="badge-won font-poppins">Won</span>
</div>
<div className="flex items-center gap-2 text-[13px] mb-1.5 text-gray-500">
<span className="badge-salesforce font-poppins">Salesforce</span>
<span className="font-medium font-poppins text-gray-700">
                    Saunders Construction
                  </span>
<span className="font-poppins text-gray-300">•</span>
<span className="font-poppins">Organizational Consulting</span>
</div>
<div className="flex items-center gap-4 text-[13px]">
<span className="font-semibold font-poppins text-gray-900">
                    $85,000
                  </span>
<span className="font-poppins text-gray-400">Q2 2022</span>
<span className="font-poppins text-gray-500">
                    Lead:
                    <span className="text-gray-900">Jennifer Reynolds</span>
</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
<div className="hidden" id="evidence-backdrop"></div>
<div className="fixed inset-y-0 right-0 w-[440px] bg-white shadow-2xl z-[70] transform translate-x-full transition-transform duration-300 flex flex-col border-l font-sans border-gray-200" id="evidence-panel">
<div className="p-5 border-b flex items-center justify-between border-gray-100">
<div>
<h3 className="text-base font-semibold font-poppins text-gray-800">
            Evidence &amp; Sources
          </h3>
<p className="text-xs mt-0.5 font-poppins text-gray-500">
            7 citations supporting this synthesis
          </p>
</div>
<button className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-gray-50 text-gray-400 hover:text-gray-600" onclick="toggleEvidence()">
<iconify-icon icon="lucide:x" width="18"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div className="flex gap-3 group">
<div className="flex-shrink-0 mt-0.5">
<span className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ring-1 ring-inset font-poppins bg-sky-50 ring-sky-500/20 text-sky-800">
              1
            </span>
</div>
<div>
<h4 className="text-sm font-medium transition-colors cursor-pointer font-poppins group-hover:text-sky-600 text-gray-900">
              Hensel Phelps Succession Assessment Final Report
            </h4>
<div className="flex items-center gap-2 mt-1.5 text-xs text-gray-500">
<span className="px-1.5 py-0.5 rounded font-medium font-poppins bg-gray-100 text-gray-600">
                PDF
              </span>
<span className="font-poppins">•</span>
<span className="font-poppins">Sep 12, 2024</span>
<span className="font-poppins">•</span>
<span className="font-poppins">Box</span>
</div>
<p className="text-xs mt-2 leading-relaxed p-2 rounded border font-poppins text-gray-600 bg-gray-50 border-gray-100">
              "The executive team alignment scores indicate a readiness for
              transition, but the operational tier requires a dedicated
              implementation phase..."
            </p>
</div>
</div>

<div className="flex gap-3 group">
<div className="flex-shrink-0 mt-0.5">
<span className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ring-1 ring-inset font-poppins bg-sky-50 ring-sky-500/20 text-sky-800">
              2
            </span>
</div>
<div>
<h4 className="text-sm font-medium transition-colors cursor-pointer font-poppins group-hover:text-sky-600 text-gray-900">
              Project Atlas - Implementation Phase Proposal
            </h4>
<div className="flex items-center gap-2 mt-1.5 text-xs text-gray-500">
<span className="px-1.5 py-0.5 rounded font-medium font-poppins bg-gray-100 text-gray-600">
                DOCX
              </span>
<span className="font-poppins">•</span>
<span className="font-poppins">Oct 04, 2024</span>
<span className="font-poppins">•</span>
<span className="font-poppins">SharePoint</span>
</div>
<p className="text-xs mt-2 leading-relaxed p-2 rounded border font-poppins text-gray-600 bg-gray-50 border-gray-100">
              "Based on the assessment findings (ref: HP-2024-SA), we propose a
              6-month implementation roadmap starting Q1 2025."
            </p>
</div>
</div>

<div className="flex gap-3 group">
<div className="flex-shrink-0 mt-0.5">
<span className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ring-1 ring-inset font-poppins bg-sky-50 ring-sky-500/20 text-sky-800">
              6
            </span>
</div>
<div>
<h4 className="text-sm font-medium transition-colors cursor-pointer font-poppins group-hover:text-sky-600 text-gray-900">
              Colorado Market Analysis 2023
            </h4>
<div className="flex items-center gap-2 mt-1.5 text-xs text-gray-500">
<span className="px-1.5 py-0.5 rounded font-medium font-poppins bg-gray-100 text-gray-600">
                PPTX
              </span>
<span className="font-poppins">•</span>
<span className="font-poppins">Jan 15, 2023</span>
<span className="font-poppins">•</span>
<span className="font-poppins">Box</span>
</div>
<p className="text-xs mt-2 leading-relaxed p-2 rounded border font-poppins text-gray-600 bg-gray-50 border-gray-100">
              "IIJA funding inflows are expected to peak in 2024-2025, driving
              demand for strategic planning in the Mountain West region."
            </p>
</div>
</div>

<div className="flex gap-3 group">
<div className="flex-shrink-0 mt-0.5">
<span className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ring-1 ring-inset font-poppins bg-sky-50 ring-sky-500/20 text-sky-800">
              7
            </span>
</div>
<div>
<h4 className="text-sm font-medium transition-colors cursor-pointer font-poppins group-hover:text-sky-600 text-gray-900">
              CRM Account Review: Water Sector
            </h4>
<div className="flex items-center gap-2 mt-1.5 text-xs text-gray-500">
<span className="px-1.5 py-0.5 rounded font-medium font-poppins bg-sky-50 text-sky-800">
                Salesforce
              </span>
<span className="font-poppins">•</span>
<span className="font-poppins">Live Data</span>
</div>
<p className="text-xs mt-2 leading-relaxed p-2 rounded border font-poppins text-gray-600 bg-gray-50 border-gray-100">
              "Current active opportunities in Water/Wastewater: 14 (National).
              Colorado active opps: 0."
            </p>
</div>
</div>
</div>
<div className="p-4 border-t border-gray-100 bg-gray-50">
<button className="w-full py-2 bg-white border rounded-lg text-sm font-medium shadow-sm transition-colors font-poppins border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-800">
          View all 23 documents
        </button>
</div>
</div>

    </>
  );
}
