import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



function switchTab(tabName) {
// Hide all views
const views = document.querySelectorAll('.dashboard-view');
views.forEach(view => view.classList.add('hidden'));
// Show selected view
const selectedView = document.getElementById('view-' + tabName);
if(selectedView) {
selectedView.classList.remove('hidden');
selectedView.classList.add('tab-content');
}
// Update Sidebar State
const items = document.querySelectorAll('.sidebar-item');
items.forEach(item => {
item.classList.remove('bg-slate-100', 'text-slate-900', 'font-semibold');
item.classList.add('text-slate-500', 'font-medium');
});
// Set Active State
const activeItem = document.getElementById('tab-' + tabName);
if(activeItem) {
activeItem.classList.remove('text-slate-500', 'font-medium');
activeItem.classList.add('bg-slate-100', 'text-slate-900', 'font-semibold');
}
}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-gradient-brand flex items-center justify-center shadow-md shadow-[#b11fff]/20 group-hover:scale-105 transition-transform duration-300">
<div className="w-2.5 h-2.5 bg-white/90 rounded-[1px]"></div>
</div>
<span className="font-semibold text-base tracking-tight text-slate-900">FuseHealth</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#platform">Platform</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#providers">Network</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#compliance">Compliance</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Log in</a>
<a className="text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 px-3.5 py-2 rounded-md transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20" href="#">
                    Start Building
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full -z-10 mesh-gradient"></div>
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#ff751f]/10 to-[#b11fff]/10 rounded-[100%] blur-[80px] opacity-60"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200/60 shadow-sm mb-8 backdrop-blur-sm animate-fade-in-up hover:border-[#b11fff]/30 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b11fff] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#b11fff]"></span>
</span>
<span className="text-[11px] font-semibold text-slate-600 tracking-wide uppercase">Infrastructure for Modern Care</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                    The Operating System for <br/>
<span className="text-gradient">Peptide Telehealth</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                    Launch a fully compliant GLP-1 or peptide brand in days. We handle the licensed provider network, async prescriptions, and pharmacy routing.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#0F172A] text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2 group" href="#">
                        Launch Dashboard
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="2" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-center gap-2" href="#">
                        View Documentation
                        <span className="iconify text-slate-400" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-12 perspective-[2000px] group">

<div className="absolute -inset-1 bg-gradient-brand opacity-20 blur-2xl rounded-[2rem] group-hover:opacity-25 transition-opacity duration-700"></div>

<div className="relative bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden transform transition-transform duration-700 dashboard-shadow">

<div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 justify-between">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
</div>
<div className="bg-slate-200/50 px-3 py-1 rounded text-[10px] text-slate-500 font-mono flex items-center gap-2">
<span className="iconify" data-icon="lucide:lock" data-width="10"></span>
                            fusehealth.app/dashboard
                        </div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 text-slate-400"><span className="iconify" data-icon="lucide:bell" data-width="14"></span></div>
</div>
</div>
<div className="flex h-[500px] md:h-[600px]">

<div className="w-16 md:w-60 border-r border-slate-100 bg-[#fafafa] flex flex-col justify-between hidden sm:flex">
<div className="p-4 space-y-6">
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 bg-white border border-slate-200/60 rounded-lg shadow-sm hover:border-[#b11fff]/30 transition-colors text-left">
<div className="w-5 h-5 rounded bg-gradient-brand flex items-center justify-center text-[10px] text-white font-bold">V</div>
<span className="text-xs font-semibold text-slate-800 truncate">Vitality Meds</span>
<span className="iconify ml-auto text-slate-400" data-icon="lucide:chevron-down" data-width="12"></span>
</button>
</div>
<div className="space-y-1">
<div className="px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Workspace</div>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-900 bg-slate-100 rounded-md transition-all" id="tab-overview" onclick="switchTab('overview')">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span>
                                        Overview
                                    </button>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md cursor-pointer transition-all" id="tab-patients" onclick="switchTab('patients')">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
                                        Patients
                                        <span className="ml-auto bg-slate-200 text-slate-600 text-[9px] font-bold px-1.5 py-0.5 rounded-full">1.2k</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md cursor-pointer transition-all" id="tab-prescriptions" onclick="switchTab('prescriptions')">
<span className="iconify" data-icon="lucide:stethoscope" data-width="16"></span>
                                        Prescriptions
                                        <span className="ml-auto bg-[#ff751f]/10 text-[#ff751f] text-[9px] font-bold px-1.5 py-0.5 rounded-full">12</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md cursor-pointer transition-all" id="tab-orders" onclick="switchTab('orders')">
<span className="iconify" data-icon="lucide:package" data-width="16"></span>
                                        Orders
                                    </button>
</div>
<div className="space-y-1">
<div className="px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Settings</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md cursor-pointer transition-all">
<span className="iconify" data-icon="lucide:shield-check" data-width="16"></span>
                                        Compliance
                                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md cursor-pointer transition-all">
<span className="iconify" data-icon="lucide:credit-card" data-width="16"></span>
                                        Billing
                                    </button>
</div>
</div>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 border border-slate-200"></div>
<div className="overflow-hidden">
<div className="text-xs font-medium text-slate-900 truncate">Dr. Sarah C.</div>
<div className="text-[10px] text-slate-500 truncate">Medical Director</div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-white p-6 md:p-8 overflow-hidden relative overflow-y-auto">

<div className="dashboard-view h-full flex flex-col" id="view-overview">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold text-slate-900">Dashboard Overview</h2>
<div className="flex gap-2">
<select className="bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-md px-2 py-1 focus:outline-none">
<option>Last 7 days</option>
<option>Last 30 days</option>
</select>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-slate-200 transition-colors">
<div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-1">Active Patients</div>
<div className="text-2xl font-semibold text-slate-900">1,284</div>
<div className="text-[10px] text-emerald-600 flex items-center gap-1 mt-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span> +12% this week
                                        </div>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-slate-200 transition-colors">
<div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-1">Pending Rx</div>
<div className="text-2xl font-semibold text-slate-900">42</div>
<div className="text-[10px] text-[#ff751f] flex items-center gap-1 mt-1">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> Needs review
                                        </div>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-slate-200 transition-colors">
<div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-1">Fulfillment</div>
<div className="text-2xl font-semibold text-slate-900">98.2%</div>
<div className="text-[10px] text-slate-400 mt-1">SLA met</div>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-slate-200 transition-colors">
<div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-1">Revenue</div>
<div className="text-2xl font-semibold text-slate-900">$124k</div>
<div className="text-[10px] text-emerald-600 mt-1">On track</div>
</div>
</div>
<div className="grid grid-cols-3 gap-6 h-full">

<div className="col-span-2 rounded-xl border border-slate-100 bg-white shadow-sm overflow-hidden flex flex-col">
<div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<h3 className="text-xs font-semibold text-slate-900">Live Intake Feed</h3>
<div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100/50">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[9px] font-bold uppercase tracking-wide">Live</span>
</div>
</div>
<div className="flex-1 overflow-y-auto">
<table className="w-full text-left">
<tbody className="text-xs">
<tr className="group hover:bg-slate-50 transition-colors border-b border-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">John Doe</td>
<td className="px-4 py-3 text-slate-500">Semaglutide .25</td>
<td className="px-4 py-3 text-right text-slate-400 text-[10px]">2m ago</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors border-b border-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">Alice Smith</td>
<td className="px-4 py-3 text-slate-500">Tirzepatide 2.5</td>
<td className="px-4 py-3 text-right text-slate-400 text-[10px]">5m ago</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors border-b border-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">Mike Ross</td>
<td className="px-4 py-3 text-slate-500">Sermorelin</td>
<td className="px-4 py-3 text-right text-slate-400 text-[10px]">12m ago</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors border-b border-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">Sarah Connor</td>
<td className="px-4 py-3 text-slate-500">Semaglutide .50</td>
<td className="px-4 py-3 text-right text-slate-400 text-[10px]">18m ago</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="col-span-1 space-y-4">
<div className="rounded-xl border border-slate-100 bg-slate-50 p-4 h-full flex flex-col justify-center items-center text-center">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#b11fff] mb-2 shadow-sm">
<span className="iconify" data-icon="lucide:map-pin" data-width="18"></span>
</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">50</div>
<div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">States Covered</div>
</div>
</div>
</div>
</div>

<div className="dashboard-view hidden h-full flex flex-col" id="view-patients">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg font-semibold text-slate-900">Patient Directory</h2>
<p className="text-xs text-slate-500">Manage patient records and statuses.</p>
</div>
<button className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span> Add Patient
                                    </button>
</div>
<div className="bg-slate-50 p-2 rounded-lg border border-slate-200 mb-4 flex items-center gap-2">
<span className="iconify text-slate-400 ml-2" data-icon="lucide:search" data-width="14"></span>
<input className="bg-transparent text-xs text-slate-900 w-full focus:outline-none placeholder:text-slate-400" placeholder="Search by name, email or ID..." type="text"/>
</div>
<div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden flex-1">
<table className="w-full text-left">
<thead className="bg-slate-50 border-b border-slate-200">
<tr className="text-[10px] text-slate-500 uppercase tracking-wider">
<th className="px-4 py-3 font-medium">Patient</th>
<th className="px-4 py-3 font-medium">Plan</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium">Next Refill</th>
<th className="px-4 py-3 font-medium text-right"></th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="px-4 py-3">
<div className="font-medium text-slate-900">Davina Claire</div>
<div className="text-[10px] text-slate-500">davina@example.com</div>
</td>
<td className="px-4 py-3 text-slate-600">Semaglutide (Monthly)</td>
<td className="px-4 py-3"><span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-medium border border-emerald-200">Active</span></td>
<td className="px-4 py-3 text-slate-500">Oct 24, 2024</td>
<td className="px-4 py-3 text-right"><span className="iconify text-slate-400 hover:text-slate-900 cursor-pointer" data-icon="lucide:more-horizontal" data-width="16"></span></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3">
<div className="font-medium text-slate-900">Marcel Gerard</div>
<div className="text-[10px] text-slate-500">marcel@example.com</div>
</td>
<td className="px-4 py-3 text-slate-600">Tirzepatide (3 Mo)</td>
<td className="px-4 py-3"><span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-medium border border-emerald-200">Active</span></td>
<td className="px-4 py-3 text-slate-500">Nov 01, 2024</td>
<td className="px-4 py-3 text-right"><span className="iconify text-slate-400 hover:text-slate-900 cursor-pointer" data-icon="lucide:more-horizontal" data-width="16"></span></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3">
<div className="font-medium text-slate-900">Camille O.</div>
<div className="text-[10px] text-slate-500">cami@example.com</div>
</td>
<td className="px-4 py-3 text-slate-600">Consultation Only</td>
<td className="px-4 py-3"><span className="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-medium border border-amber-200">Pending</span></td>
<td className="px-4 py-3 text-slate-500">—</td>
<td className="px-4 py-3 text-right"><span className="iconify text-slate-400 hover:text-slate-900 cursor-pointer" data-icon="lucide:more-horizontal" data-width="16"></span></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3">
<div className="font-medium text-slate-900">Klaus M.</div>
<div className="text-[10px] text-slate-500">klaus@example.com</div>
</td>
<td className="px-4 py-3 text-slate-600">Semaglutide</td>
<td className="px-4 py-3"><span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-medium border border-slate-200">Paused</span></td>
<td className="px-4 py-3 text-slate-500">—</td>
<td className="px-4 py-3 text-right"><span className="iconify text-slate-400 hover:text-slate-900 cursor-pointer" data-icon="lucide:more-horizontal" data-width="16"></span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="dashboard-view hidden h-full flex flex-col" id="view-prescriptions">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold text-slate-900">Review Queue</h2>
<div className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">12 Pending</div>
</div>
<div className="flex-1 space-y-3 overflow-y-auto">

<div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#b11fff]/30 hover:shadow-md transition-all group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">JD</div>
<div>
<div className="text-sm font-semibold text-slate-900">Jane Doe</div>
<div className="text-[10px] text-slate-400">ID: #RX-9928 • 34F • TX</div>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-[10px] font-medium border border-amber-100">Review Needed</span>
</div>
<div className="grid grid-cols-3 gap-4 mb-4 bg-slate-50/50 p-3 rounded-lg border border-slate-100">
<div>
<div className="text-[9px] text-slate-400 uppercase tracking-wide">Request</div>
<div className="text-xs font-medium text-slate-900">Semaglutide 0.25mg</div>
</div>
<div>
<div className="text-[9px] text-slate-400 uppercase tracking-wide">BMI</div>
<div className="text-xs font-medium text-slate-900">31.2 (Obese)</div>
</div>
<div>
<div className="text-[9px] text-slate-400 uppercase tracking-wide">History</div>
<div className="text-xs font-medium text-slate-900">None reported</div>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-1.5 rounded bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors">Approve &amp; Sign</button>
<button className="px-3 py-1.5 rounded border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50">Flag</button>
<button className="px-3 py-1.5 rounded border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50"><span className="iconify" data-icon="lucide:message-square" data-width="14"></span></button>
</div>
</div>

<div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#b11fff]/30 hover:shadow-md transition-all group opacity-75">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">RM</div>
<div>
<div className="text-sm font-semibold text-slate-900">Robert M.</div>
<div className="text-[10px] text-slate-400">ID: #RX-9929 • 45M • NY</div>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium border border-slate-200">Queued</span>
</div>
<div className="grid grid-cols-3 gap-4 mb-2">
<div>
<div className="text-[9px] text-slate-400 uppercase tracking-wide">Request</div>
<div className="text-xs font-medium text-slate-900">Tirzepatide 5mg</div>
</div>
</div>
</div>
</div>
</div>

<div className="dashboard-view hidden h-full flex flex-col" id="view-orders">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold text-slate-900">Fulfillment Status</h2>
<button className="text-xs text-[#b11fff] font-medium hover:underline">Download CSV</button>
</div>
<div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden flex-1">
<div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
<div className="w-1/4">Order ID</div>
<div className="w-1/4">Date</div>
<div className="w-1/4">Status</div>
<div className="w-1/4 text-right">Tracking</div>
</div>
<div className="divide-y divide-slate-100">

<div className="px-4 py-3 flex items-center text-xs hover:bg-slate-50 transition-colors">
<div className="w-1/4 font-mono text-slate-900">#ORD-2839</div>
<div className="w-1/4 text-slate-500">Oct 20, 10:23 AM</div>
<div className="w-1/4">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="font-medium text-slate-700">Shipped</span>
</div>
</div>
<div className="w-1/4 text-right font-mono text-slate-400">1Z9928...</div>
</div>

<div className="px-4 py-3 flex items-center text-xs hover:bg-slate-50 transition-colors">
<div className="w-1/4 font-mono text-slate-900">#ORD-2840</div>
<div className="w-1/4 text-slate-500">Oct 20, 11:05 AM</div>
<div className="w-1/4">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="font-medium text-slate-700">Shipped</span>
</div>
</div>
<div className="w-1/4 text-right font-mono text-slate-400">1Z9928...</div>
</div>

<div className="px-4 py-3 flex items-center text-xs hover:bg-slate-50 transition-colors">
<div className="w-1/4 font-mono text-slate-900">#ORD-2841</div>
<div className="w-1/4 text-slate-500">Oct 20, 12:45 PM</div>
<div className="w-1/4">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
<span className="font-medium text-slate-700">Processing</span>
</div>
</div>
<div className="w-1/4 text-right font-mono text-slate-400">—</div>
</div>

<div className="px-4 py-3 flex items-center text-xs hover:bg-slate-50 transition-colors">
<div className="w-1/4 font-mono text-slate-900">#ORD-2842</div>
<div className="w-1/4 text-slate-500">Oct 20, 01:12 PM</div>
<div className="w-1/4">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
<span className="font-medium text-slate-700">Queued</span>
</div>
</div>
<div className="w-1/4 text-right font-mono text-slate-400">—</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="platform">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Everything needed to launch</h2>
<p className="text-slate-500 mt-2">Modular components for the modern healthcare stack.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl border border-slate-200 bg-white p-1 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full bg-white rounded-xl p-6 flex flex-col z-10">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-[#ff751f] flex items-center justify-center mb-6 ring-1 ring-orange-100">
<span className="iconify" data-icon="lucide:clipboard-list" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Smart Intake Forms</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">High-conversion, clinical-grade intake forms that dynamically adjust based on patient responses.</p>

<div className="mt-auto bg-slate-50 rounded-lg border border-slate-100 p-4 shadow-sm relative overflow-hidden group-hover:bg-white group-hover:shadow-md transition-all duration-300">

<div className="flex justify-between items-center mb-3">
<span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Step 3: Medical History</span>
<span className="text-[9px] text-slate-400 font-medium">45%</span>
</div>

<div className="text-[10px] font-medium text-slate-800 mb-3 leading-snug">Have you previously taken GLP-1 medications?</div>

<div className="space-y-1.5">
<div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded text-[10px] text-slate-500 shadow-sm opacity-60">
<div className="w-2.5 h-2.5 rounded-full border border-slate-300"></div> Yes
                                </div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#ff751f] rounded text-[10px] text-slate-900 shadow-sm relative">
<div className="w-2.5 h-2.5 rounded-full border-[3px] border-[#ff751f]"></div> No
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ff751f]">
<span className="iconify" data-icon="lucide:check" data-width="10"></span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-1 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden md:-mt-8 md:mb-8 border-[#b11fff]/20 ring-4 ring-[#b11fff]/5 flex flex-col">
<div className="relative h-full bg-gradient-to-b from-[#b11fff]/5 to-white rounded-xl p-6 flex flex-col z-10">
<div className="w-10 h-10 rounded-lg bg-[#b11fff] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#b11fff]/30">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Async Telehealth</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Connect with licensed providers in 50 states via asynchronous review. No video calls required.</p>

<div className="mt-auto bg-white rounded-lg border border-[#b11fff]/20 p-0 shadow-md overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-300">

<div className="bg-[#b11fff]/5 px-3 py-2 border-b border-[#b11fff]/10 flex justify-between items-center">
<div className="flex items-center gap-1.5">
<span className="iconify text-[#b11fff]" data-icon="lucide:file-text" data-width="10"></span>
<span className="text-[9px] font-semibold text-[#b11fff] uppercase tracking-wide">Async Case #921</span>
</div>
<div className="flex items-center gap-1">
<span className="w-1 h-1 bg-amber-400 rounded-full animate-pulse"></span>
<span className="text-[9px] font-medium text-amber-600">Pending</span>
</div>
</div>

<div className="p-3 space-y-2.5">
<div className="flex items-start gap-2">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-500">JD</div>
<div className="flex-1">
<div className="text-[10px] font-semibold text-slate-900">John Doe <span className="text-slate-400 font-normal">32M</span></div>
<div className="text-[9px] text-slate-500">BMI: 28.5 • No history</div>
</div>
</div>
<div className="h-[1px] bg-slate-100 w-full"></div>
<div className="flex justify-between items-end">
<div>
<div className="text-[9px] text-slate-400 uppercase tracking-wide mb-0.5">Contraindications</div>
<div className="text-[10px] font-medium text-slate-700">None detected</div>
</div>
<div className="bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded text-emerald-700 text-[9px] font-medium flex items-center gap-1">
<span className="iconify" data-icon="lucide:check" data-width="10"></span> Safe
                                    </div>
</div>
<div className="flex gap-1.5 pt-1">
<div className="flex-1 bg-[#b11fff] hover:bg-[#9d1be3] text-white text-[9px] font-medium py-1.5 rounded text-center shadow-sm shadow-[#b11fff]/20 cursor-pointer transition-colors">Approve Rx</div>
<div className="px-2 bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-400 rounded flex items-center cursor-pointer transition-colors"><span className="iconify" data-icon="lucide:more-horizontal" data-width="10"></span></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-1 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full bg-white rounded-xl p-6 flex flex-col z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 ring-1 ring-indigo-100">
<span className="iconify" data-icon="lucide:truck" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Pharmacy Network</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Automatic routing to accredited compounding pharmacies for rapid fulfillment.</p>

<div className="mt-auto bg-slate-50 rounded-lg border border-slate-100 p-4 relative group-hover:bg-white group-hover:shadow-md transition-all duration-300">
<div className="relative pl-3 space-y-4">

<div className="absolute left-[3.5px] top-1.5 bottom-8 w-[1px] bg-indigo-200"></div>
<div className="absolute left-[3.5px] top-auto bottom-1.5 h-6 w-[1px] bg-slate-200"></div>

<div className="relative flex items-center gap-3">
<div className="absolute left-[-13.5px] w-2 h-2 rounded-full bg-indigo-500 border-2 border-white shadow-sm z-10 ring-1 ring-indigo-100"></div>
<div className="flex-1">
<div className="flex justify-between items-center">
<div className="text-[9px] font-semibold text-slate-900">Rx Received</div>
<div className="text-[9px] text-slate-400 font-mono">10:02am</div>
</div>
</div>
</div>

<div className="relative flex items-center gap-3">
<div className="absolute left-[-13.5px] w-2 h-2 rounded-full bg-indigo-500 border-2 border-white shadow-sm z-10 ring-1 ring-indigo-100"></div>
<div className="flex-1">
<div className="flex justify-between items-center">
<div className="text-[9px] font-semibold text-slate-900">Compounding</div>
<div className="text-[9px] text-slate-400 font-mono">02:15pm</div>
</div>
<div className="text-[9px] text-slate-500">Quality check passed</div>
</div>
</div>

<div className="relative flex items-center gap-3 opacity-50">
<div className="absolute left-[-13.5px] w-2 h-2 rounded-full bg-white border border-slate-300 z-10"></div>
<div className="text-[9px] font-medium text-slate-500">Shipped</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
                        Provider Workspace <br/><span className="text-slate-400">Designed for speed &amp; safety</span>
</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        For medical providers, our platform offers a streamlined "Open Loop" workspace. Review charts, check interactions, and issue prescriptions in a fraction of the time of traditional EMRs.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-[#b11fff] group-hover:text-[#b11fff] transition-colors">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Clinical Decision Support</h4>
<p className="text-xs text-slate-500 mt-1">Automated flags for contraindications based on patient history.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-[#b11fff] group-hover:text-[#b11fff] transition-colors">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Smart Templates</h4>
<p className="text-xs text-slate-500 mt-1">Pre-built titration schedules for GLP-1 therapies.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-[#b11fff] group-hover:text-[#b11fff] transition-colors">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">E-Prescribe Integration</h4>
<p className="text-xs text-slate-500 mt-1">Direct connection to Surescripts and partner pharmacies.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="absolute inset-0 bg-gradient-brand opacity-10 blur-[80px] rounded-full"></div>

<div className="relative bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden dashboard-shadow">

<div className="bg-white border-b border-slate-100 px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">JD</div>
<div>
<div className="text-xs font-semibold text-slate-900">Jane Doe <span className="text-slate-400 font-normal">| F, 34</span></div>
<div className="text-[10px] text-slate-400">ID: #99281</div>
</div>
</div>
<div className="px-2 py-1 rounded bg-amber-50 border border-amber-100 text-[10px] font-medium text-amber-600 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                Pending Review
                            </div>
</div>
<div className="grid grid-cols-12 h-[320px]">

<div className="col-span-7 border-r border-slate-100 p-4 overflow-y-auto bg-[#fafafa]">
<div className="mb-4">
<h5 className="text-[10px] uppercase font-semibold text-slate-400 mb-2">Intake Responses</h5>
<div className="space-y-2">
<div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
<div className="text-[10px] text-slate-500 mb-0.5">Current BMI</div>
<div className="text-xs font-medium text-slate-900">31.2 (Obese Class I)</div>
</div>
<div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
<div className="text-[10px] text-slate-500 mb-0.5">Medical Conditions</div>
<div className="text-xs font-medium text-slate-900">None reported</div>
</div>
<div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
<div className="text-[10px] text-slate-500 mb-0.5">Current Medications</div>
<div className="text-xs font-medium text-slate-900">Multivitamin</div>
</div>
</div>
</div>
</div>

<div className="col-span-5 bg-white p-4 flex flex-col">
<h5 className="text-[10px] uppercase font-semibold text-slate-400 mb-3">Prescription</h5>
<div className="flex-1">
<div className="mb-3">
<label className="block text-[10px] font-medium text-slate-700 mb-1">Medication</label>
<div className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-900 flex justify-between items-center">
                                            Semaglutide
                                            <span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="12"></span>
</div>
</div>
<div className="mb-3">
<label className="block text-[10px] font-medium text-slate-700 mb-1">Dosage</label>
<div className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-900">
                                            0.25mg Weekly
                                        </div>
</div>
<div className="mb-3">
<label className="block text-[10px] font-medium text-slate-700 mb-1">Quantity</label>
<div className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-900">
                                            1 Vial (4 weeks)
                                        </div>
</div>
</div>
<button className="w-full py-2 bg-[#b11fff] hover:bg-[#9d1be3] text-white rounded text-xs font-medium shadow-md shadow-[#b11fff]/20 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:send" data-width="12"></span>
                                    Sign &amp; Send Rx
                                </button>
</div>
</div>
</div>

<div className="absolute -right-4 top-12 bg-white p-2 rounded-lg border border-slate-200 shadow-lg flex items-center gap-2 animate-bounce" style={{animationDuration: '3s'}}>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-[10px] font-medium text-slate-600">License Verified: NY, CA, TX</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-[#ff751f]/30 transition-all overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#ff751f]/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-[#ff751f]/10 transition-colors"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-[#ff751f]"></span>
<span className="text-xs font-semibold uppercase tracking-wide text-slate-500">For Brands</span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Launch a Peptide Clinic</h3>
<p className="text-slate-500 mb-8 leading-relaxed text-sm">You handle the marketing and customer acquisition. We provide the white-label medical infrastructure, providers, and pharmacy fulfillment.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-[#ff751f]" data-icon="lucide:check-circle-2" data-width="18"></span>
                                No medical license required
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-[#ff751f]" data-icon="lucide:check-circle-2" data-width="18"></span>
                                Fully white-labeled patient portal
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-[#ff751f]" data-icon="lucide:check-circle-2" data-width="18"></span>
                                Revenue share model
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-[#ff751f] hover:text-orange-700 transition-colors" href="#">
                            Start a Brand <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>

<div className="group relative bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-[#b11fff]/30 transition-all overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#b11fff]/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-[#b11fff]/10 transition-colors"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-[#b11fff]"></span>
<span className="text-xs font-semibold uppercase tracking-wide text-slate-500">For Providers</span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Join the Network</h3>
<p className="text-slate-500 mb-8 leading-relaxed text-sm">Monetize your medical license by reviewing async cases from top wellness brands. Work from anywhere, entirely on your schedule.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-[#b11fff]" data-icon="lucide:check-circle-2" data-width="18"></span>
                                Malpractice insurance included
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-[#b11fff]" data-icon="lucide:check-circle-2" data-width="18"></span>
                                Flexible async workload
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-[#b11fff]" data-icon="lucide:check-circle-2" data-width="18"></span>
                                Guaranteed payouts
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-[#b11fff] hover:text-purple-800 transition-colors" href="#">
                            Apply as Provider <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="coverage">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                Licensed Coverage in All 50 States
            </h2>
<p className="text-slate-500 max-w-2xl mx-auto mb-16">
                Our distributed network ensures your patients are covered nationwide. Live network activity shown below.
            </p>
<div className="relative w-full max-w-4xl mx-auto">
<div className="relative aspect-[1.6/1] w-full select-none">


<svg className="w-full h-full text-slate-200 fill-current" viewbox="0 0 800 500">

<circle cx="50" cy="50" r="4"></circle><circle cx="80" cy="40" r="4"></circle><circle cx="60" cy="80" r="4"></circle><circle cx="90" cy="80" r="4"></circle>
<circle cx="50" cy="150" r="4"></circle><circle cx="80" cy="150" r="4"></circle><circle cx="60" cy="200" r="4"></circle>
<circle cx="50" cy="250" r="4"></circle><circle cx="80" cy="240" r="4"></circle><circle cx="60" cy="300" r="4"></circle><circle cx="90" cy="320" r="4"></circle><circle cx="120" cy="350" r="4"></circle>

<circle cx="150" cy="80" r="4"></circle><circle cx="180" cy="90" r="4"></circle><circle cx="200" cy="150" r="4"></circle><circle cx="180" cy="200" r="4"></circle><circle cx="220" cy="220" r="4"></circle>
<circle cx="250" cy="180" r="4"></circle><circle cx="280" cy="240" r="4"></circle><circle cx="250" cy="300" r="4"></circle><circle cx="300" cy="350" r="4"></circle><circle cx="160" cy="300" r="4"></circle>

<circle cx="350" cy="100" r="4"></circle><circle cx="380" cy="120" r="4"></circle><circle cx="400" cy="150" r="4"></circle><circle cx="350" cy="200" r="4"></circle><circle cx="420" cy="200" r="4"></circle>
<circle cx="450" cy="220" r="4"></circle><circle cx="480" cy="180" r="4"></circle><circle cx="500" cy="210" r="4"></circle><circle cx="520" cy="250" r="4"></circle><circle cx="450" cy="280" r="4"></circle><circle cx="480" cy="300" r="4"></circle>

<circle cx="400" cy="350" r="4"></circle><circle cx="450" cy="360" r="4"></circle><circle cx="500" cy="350" r="4"></circle><circle cx="550" cy="340" r="4"></circle><circle cx="600" cy="350" r="4"></circle>
<circle cx="420" cy="400" r="4"></circle><circle cx="460" cy="420" r="4"></circle>

<circle cx="600" cy="100" r="4"></circle><circle cx="650" cy="120" r="4"></circle><circle cx="700" cy="100" r="4"></circle><circle cx="720" cy="80" r="4"></circle>
<circle cx="680" cy="150" r="4"></circle><circle cx="710" cy="160" r="4"></circle><circle cx="730" cy="140" r="4"></circle>
<circle cx="680" cy="200" r="4"></circle><circle cx="700" cy="220" r="4"></circle><circle cx="660" cy="250" r="4"></circle><circle cx="690" cy="280" r="4"></circle>
<circle cx="650" cy="300" r="4"></circle><circle cx="680" cy="320" r="4"></circle><circle cx="700" cy="350" r="4"></circle><circle cx="660" cy="380" r="4"></circle>

<circle cx="680" cy="420" r="4"></circle><circle cx="700" cy="450" r="4"></circle><circle cx="720" cy="480" r="4"></circle>
</svg>


<div className="absolute left-[7%] top-[50%] group z-10">
<div className="relative flex items-center justify-center w-3 h-3 text-[#b11fff] cursor-pointer map-pulse">
<span className="w-2 h-2 rounded-full bg-current"></span>
</div>

<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<div className="bg-white/90 backdrop-blur border border-slate-200 shadow-xl rounded-lg py-2 px-3 text-left">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-semibold text-slate-800 uppercase tracking-wide">Live Activity</span>
</div>
<div className="text-xs font-medium text-slate-900">Dr. Chen approved Rx</div>
<div className="text-[10px] text-slate-500">Los Angeles, CA • 2m ago</div>
</div>
<div className="w-2 h-2 bg-white border-r border-b border-slate-200 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
</div>
</div>

<div className="absolute left-[88%] top-[25%] group z-10">
<div className="relative flex items-center justify-center w-3 h-3 text-[#ff751f] cursor-pointer map-pulse" style={{animationDelay: '0.5s'}}>
<span className="w-2 h-2 rounded-full bg-current"></span>
</div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<div className="bg-white/90 backdrop-blur border border-slate-200 shadow-xl rounded-lg py-2 px-3 text-left">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-semibold text-slate-800 uppercase tracking-wide">New Order</span>
</div>
<div className="text-xs font-medium text-slate-900">Tirzepatide Shipped</div>
<div className="text-[10px] text-slate-500">New York, NY • Just now</div>
</div>
<div className="w-2 h-2 bg-white border-r border-b border-slate-200 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
</div>
</div>

<div className="absolute left-[48%] top-[70%] group z-10">
<div className="relative flex items-center justify-center w-3 h-3 text-[#b11fff] cursor-pointer map-pulse" style={{animationDelay: '1.2s'}}>
<span className="w-2 h-2 rounded-full bg-current"></span>
</div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<div className="bg-white/90 backdrop-blur border border-slate-200 shadow-xl rounded-lg py-2 px-3 text-left">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-semibold text-slate-800 uppercase tracking-wide">Network</span>
</div>
<div className="text-xs font-medium text-slate-900">Provider Online</div>
<div className="text-[10px] text-slate-500">Austin, TX</div>
</div>
<div className="w-2 h-2 bg-white border-r border-b border-slate-200 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
</div>
</div>

<div className="absolute left-[80%] top-[85%] group z-10">
<div className="relative flex items-center justify-center w-3 h-3 text-slate-400 hover:text-[#ff751f] transition-colors cursor-pointer">
<span className="w-2 h-2 rounded-full bg-current"></span>
</div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<div className="bg-white/90 backdrop-blur border border-slate-200 shadow-xl rounded-lg py-2 px-3 text-left">
<div className="text-xs font-medium text-slate-900">Pharmacy Active</div>
<div className="text-[10px] text-slate-500">Miami, FL</div>
</div>
<div className="w-2 h-2 bg-white border-r border-b border-slate-200 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
</div>
</div>

<div className="absolute left-[62%] top-[35%] group z-10">
<div className="relative flex items-center justify-center w-3 h-3 text-[#ff751f] cursor-pointer map-pulse" style={{animationDelay: '0.8s'}}>
<span className="w-2 h-2 rounded-full bg-current"></span>
</div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<div className="bg-white/90 backdrop-blur border border-slate-200 shadow-xl rounded-lg py-2 px-3 text-left">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-semibold text-slate-800 uppercase tracking-wide">Intake</span>
</div>
<div className="text-xs font-medium text-slate-900">New Patient Started</div>
<div className="text-[10px] text-slate-500">Chicago, IL • 5m ago</div>
</div>
<div className="w-2 h-2 bg-white border-r border-b border-slate-200 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
</div>
</div>
</div>
</div>
<div className="mt-8 flex justify-center gap-6 text-xs text-slate-500">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#ff751f]"></span> Active Prescriptions
                </div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#b11fff]"></span> Online Providers
                </div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-slate-200"></span> Licensed States
                </div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[#0F172A]"></div>
<div className="absolute inset-0 bg-gradient-brand opacity-10"></div>

<div className="absolute top-0 right-0 w-full h-full opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Ready to build the future of care?
            </h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                Join the platform powering the fastest growing peptide brands in the country.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors shadow-lg shadow-white/10" href="#">
                    Get Started
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 bg-transparent text-white font-medium hover:bg-white/5 transition-colors" href="#">
                    Talk to Sales
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 rounded bg-gradient-brand flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div>
</div>
<span className="font-semibold text-slate-900">FuseHealth</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed">
                        The comprehensive infrastructure layer for modern peptide telehealth brands.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-xs mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">Intake Forms</a></li>
<li><a className="hover:text-slate-900" href="#">Async Reviews</a></li>
<li><a className="hover:text-slate-900" href="#">Pharmacy Network</a></li>
<li><a className="hover:text-slate-900" href="#">API Docs</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-xs mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">About</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Legal</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-xs mb-4">Social</h4>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-[#ff751f]" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="hover:text-[#b11fff]" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
<a className="hover:text-slate-900" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[11px] text-slate-400">
                    © 2024 FuseHealth Inc. All rights reserved.
                </div>
<div className="flex gap-6 text-[11px] text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
