import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Main Navigation Logic
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
                tab.classList.add('hidden');
            });
            const activeTab = document.getElementById('screen-' + tabId);
            activeTab.classList.remove('hidden');
            setTimeout(() => activeTab.classList.add('active'), 10);

            document.querySelectorAll('nav button').forEach(btn => {
                const icon = btn.querySelector('.iconify');
                btn.classList.remove('bg-gray-50', 'text-gray-900');
                btn.classList.add('text-gray-600');
                if(icon) {
                    icon.classList.remove('text-gray-900');
                    icon.classList.add('text-gray-400');
                }
            });

            const activeNav = document.getElementById('nav-' + tabId);
            activeNav.classList.add('bg-gray-50', 'text-gray-900');
            activeNav.classList.remove('text-gray-600');
            const activeIcon = activeNav.querySelector('.iconify');
            if(activeIcon) {
                activeIcon.classList.remove('text-gray-400');
                activeIcon.classList.add('text-gray-900');
            }
        }

        // Category Toggle Logic (Included vs Library)
        function switchCategoryView(view) {
            const includedBtn = document.getElementById('filter-included');
            const availableBtn = document.getElementById('filter-available');
            const includedView = document.getElementById('view-included');
            const availableView = document.getElementById('view-available');

            if(view === 'included') {
                includedBtn.classList.remove('text-gray-500', 'hover:text-gray-900', 'bg-transparent');
                includedBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                includedBtn.querySelector('span').classList.replace('bg-gray-200', 'bg-gray-100');
                includedBtn.querySelector('span').classList.replace('text-gray-500', 'text-gray-600');
                
                availableBtn.classList.add('text-gray-500', 'hover:text-gray-900');
                availableBtn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                availableBtn.querySelector('span').classList.replace('bg-gray-100', 'bg-gray-200');
                availableBtn.querySelector('span').classList.replace('text-gray-600', 'text-gray-500');

                includedView.classList.remove('hidden');
                availableView.classList.add('hidden');
            } else {
                availableBtn.classList.remove('text-gray-500', 'hover:text-gray-900');
                availableBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                availableBtn.querySelector('span').classList.replace('bg-gray-200', 'bg-gray-100');
                availableBtn.querySelector('span').classList.replace('text-gray-600', 'text-gray-500');

                includedBtn.classList.add('text-gray-500', 'hover:text-gray-900');
                includedBtn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                includedBtn.querySelector('span').classList.replace('bg-gray-100', 'bg-gray-200');
                includedBtn.querySelector('span').classList.replace('text-gray-600', 'text-gray-500');

                availableView.classList.remove('hidden');
                includedView.classList.add('hidden');
            }
        }

        // Modal Logic
        const modal = document.getElementById('confirm-modal');
        const modalCategoryName = document.getElementById('modal-category-name');

        function openConfirmModal(categoryName) {
            modalCategoryName.textContent = categoryName;
            modal.classList.add('open');
        }

        function closeConfirmModal() {
            modal.classList.remove('open');
        }

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeConfirmModal();
        });

        // Initialize first tab
        switchTab('dashboard');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-14 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 md:hidden">
<div className="font-semibold tracking-tight text-lg text-gray-900">QUIZFLOW.</div>
<button className="text-gray-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-full fixed left-0 top-0 z-40">
<div className="h-14 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 font-semibold tracking-tight text-lg text-gray-900">
<div className="w-5 h-5 bg-gray-900 rounded-md"></div>
                QUIZFLOW.
            </div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Analytics</div>
<button className="flex hover:bg-gray-50 hover:text-gray-900 transition-colors group text-gray-900 bg-gray-50 w-full rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-3 gap-y-3 items-center" id="nav-dashboard" onclick="switchTab('dashboard')">
<svg className="iconify group-hover:text-gray-900 transition-colors text-gray-900" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="font-medium">Dashboard</span>
</button>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Management</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors group" id="nav-bank" onclick="switchTab('bank')">
<svg className="iconify text-gray-400 group-hover:text-gray-900 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
<span className="font-medium">Question Bank</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors group" id="nav-widget" onclick="switchTab('widget')">
<svg className="iconify text-gray-400 group-hover:text-gray-900 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium">Quiz Widget</span>
</button>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Account</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors group" id="nav-company" onclick="switchTab('company')">
<svg className="iconify text-gray-400 group-hover:text-gray-900 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18"></path><path d="M5 21V7l8-4 8 4v14"></path><path d="M17 21v-8H7v8"></path></svg>
<span className="font-medium">Company Profile</span>
</button>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                    AC
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900">Acme Corp.</span>
<span className="text-[10px] text-gray-500">Business Plan</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 md:ml-64 h-full overflow-y-auto bg-gray-50 pt-14 md:pt-0">

<div className="tab-content p-6 md:p-10 max-w-7xl mx-auto space-y-8" id="screen-dashboard">
<header>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Performance Overview</h1>
<p className="text-gray-500 mt-1 text-sm">Real-time metrics from your embedded quiz widget.</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12.5%</span>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">8,249</div>
<div className="text-xs text-gray-500 mt-1">Total Quiz Views</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="M22 4 12 14.01l-3-3"></path></svg>
</div>
<span className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+4.2%</span>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">64.8%</div>
<div className="text-xs text-gray-500 mt-1">Completion Rate</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" x2="20" y1="8" y2="14"></line><line x1="23" x2="17" y1="11" y2="11"></line></svg>
</div>
<span className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+28%</span>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">1,024</div>
<div className="text-xs text-gray-500 mt-1">Leads Collected</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">1m 42s</div>
<div className="text-xs text-gray-500 mt-1">Avg. Engagement Time</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<h3 className="text-base font-semibold text-gray-900 mb-4">Recent Leads</h3>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-gray-500 border-b border-gray-100">
<th className="font-medium py-3 pl-2">Email</th>
<th className="font-medium py-3">Score</th>
<th className="font-medium py-3">Date</th>
<th className="font-medium py-3 pr-2 text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group hover:bg-gray-50 transition-colors border-b border-gray-50">
<td className="py-3 pl-2 font-medium text-gray-900">sarah.j@gmail.com</td>
<td className="py-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">92%</span></td>
<td className="py-3 text-gray-500">2 mins ago</td>
<td className="py-3 pr-2 text-right"><button className="text-xs text-indigo-600 hover:text-indigo-800">Export</button></td>
</tr>
<tr className="group hover:bg-gray-50 transition-colors border-b border-gray-50">
<td className="py-3 pl-2 font-medium text-gray-900">mike.brown@outlook.com</td>
<td className="py-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-medium">65%</span></td>
<td className="py-3 text-gray-500">14 mins ago</td>
<td className="py-3 pr-2 text-right"><button className="text-xs text-indigo-600 hover:text-indigo-800">Export</button></td>
</tr>
<tr className="group hover:bg-gray-50 transition-colors">
<td className="py-3 pl-2 font-medium text-gray-900">david.w@company.co</td>
<td className="py-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">88%</span></td>
<td className="py-3 text-gray-500">1 hour ago</td>
<td className="py-3 pr-2 text-right"><button className="text-xs text-indigo-600 hover:text-indigo-800">Export</button></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
<h3 className="text-base font-semibold text-gray-900 mb-6">Views by Day</h3>
<div className="flex-1 flex items-end justify-between gap-2 h-48">

<div className="w-full bg-gray-100 rounded-t-sm h-[40%] hover:bg-indigo-100 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">40</div></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[65%] hover:bg-indigo-100 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">65</div></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[45%] hover:bg-indigo-100 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">45</div></div>
<div className="w-full bg-indigo-600 rounded-t-sm h-[80%] relative group shadow-sm"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">80</div></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[55%] hover:bg-indigo-100 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">55</div></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[70%] hover:bg-indigo-100 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">70</div></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[60%] hover:bg-indigo-100 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">60</div></div>
</div>
<div className="flex justify-between mt-3 text-[10px] text-gray-400 font-medium uppercase">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
</div>
</div>

<div className="tab-content hidden p-6 md:p-10 max-w-7xl mx-auto space-y-8" id="screen-bank">
<header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Question Bank</h1>
<p className="text-gray-500 mt-1">Manage the content displayed in your integration.</p>
</div>

<div className="bg-gray-200/50 p-1 rounded-lg flex items-center gap-1">
<button className="px-4 py-1.5 rounded-md text-sm font-medium transition-all shadow-sm bg-white text-gray-900" id="filter-included" onclick="switchCategoryView('included')">
                        My Questions <span className="ml-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full text-gray-600">24</span>
</button>
<button className="px-4 py-1.5 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 transition-all" id="filter-available" onclick="switchCategoryView('available')">
                        Template Library <span className="ml-1 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full text-gray-500">All</span>
</button>
</div>
</header>

<div className="block" id="view-included">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Active Categories</h3>
<button className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                         Create New
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all relative">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="flex gap-1">
<button className="text-gray-400 hover:text-gray-900 p-1.5 hover:bg-gray-50 rounded"><svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg></button>
</div>
</div>
<h3 className="font-semibold text-gray-900">Technical Assessment</h3>
<p className="text-xs text-gray-500 mt-1 mb-4">Core questions for engineering candidates.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600">Active</span>
</div>
<span className="text-xs text-gray-400">12 Questions</span>
</div>
</div>

<div className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all relative">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect></svg>
</div>
<div className="flex gap-1">
<button className="text-gray-400 hover:text-gray-900 p-1.5 hover:bg-gray-50 rounded"><svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg></button>
</div>
</div>
<h3 className="font-semibold text-gray-900">Company Culture</h3>
<p className="text-xs text-gray-500 mt-1 mb-4">Questions about Acme Corp values.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
<span className="text-xs font-medium text-gray-600">Draft</span>
</div>
<span className="text-xs text-gray-400">8 Questions</span>
</div>
</div>
</div>
</div>

<div className="hidden" id="view-available">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Industry Templates</h3>
<div className="relative">
<svg className="absolute left-3 top-2 text-gray-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="pl-9 pr-3 py-1.5 text-xs border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 w-48 bg-white" placeholder="Search templates..." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l5 5a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828z"></path><path d="M7 7h.01"></path></svg>
</div>
<button className="w-8 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-900 hover:text-white hover:border-gray-900 flex items-center justify-center text-gray-400 transition-all" onclick="openConfirmModal('Product Knowledge')">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<h3 className="font-semibold text-gray-900">Product Knowledge</h3>
<p className="text-xs text-gray-500 mt-1 mb-4">Standard SaaS product questions.</p>
<div className="pt-4 border-t border-gray-100">
<span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-600 text-[10px] font-medium uppercase tracking-wide">15 Questions</span>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden p-6 md:p-10 max-w-7xl mx-auto h-[calc(100vh-4rem)] flex flex-col" id="screen-widget">
<header className="mb-6 flex-none">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Widget Configuration</h1>
<p className="text-gray-500 mt-1 text-sm">Customize how the quiz appears on your website.</p>
</header>
<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-0">

<div className="lg:col-span-5 flex flex-col gap-6 overflow-y-auto pr-2 pb-10">

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
<svg className="text-gray-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="13.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="10.5" r="2.5"></circle><circle cx="8.5" cy="7.5" r="2.5"></circle><circle cx="6.5" cy="12.5" r="2.5"></circle><path d="M12 12c-3 1-6 2-10 7a13.3 13.3 0 0 1 20 0c-4-5-7-6-10-7Z"></path></svg>
                            Appearance
                        </h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Widget Title</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all" type="text" value="Technical Assessment"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-2">Primary Color</label>
<div className="flex gap-2">
<button className="w-6 h-6 rounded-full bg-gray-900 ring-2 ring-offset-2 ring-gray-900"></button>
<button className="w-6 h-6 rounded-full bg-indigo-600 hover:ring-2 hover:ring-offset-2 hover:ring-gray-300"></button>
<button className="w-6 h-6 rounded-full bg-blue-600 hover:ring-2 hover:ring-offset-2 hover:ring-gray-300"></button>
<button className="w-6 h-6 rounded-full bg-green-600 hover:ring-2 hover:ring-offset-2 hover:ring-gray-300"></button>
<button className="w-6 h-6 rounded-full bg-red-600 hover:ring-2 hover:ring-offset-2 hover:ring-gray-300"></button>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
<svg className="text-gray-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                Lead Generation
                            </h3>
<div className="relative inline-block w-8 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-gray-200 appearance-none cursor-pointer transition-all duration-300 ease-in-out left-0" id="toggle-lead" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-gray-900 cursor-pointer transition-colors duration-300" htmlFor="toggle-lead"></label>
</div>
</div>
<p className="text-xs text-gray-500 mb-4">Collect emails before showing results.</p>
<div className="space-y-3">
<label className="flex items-center gap-2 text-sm text-gray-700">
<input checked="" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" type="checkbox"/>
                                Require Email Address
                            </label>
<label className="flex items-center gap-2 text-sm text-gray-700">
<input className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" type="checkbox"/>
                                Require Name
                            </label>
</div>
</div>

<div className="bg-gray-900 rounded-xl p-5 shadow-sm text-white">
<div className="flex justify-between items-center mb-3">
<h3 className="text-sm font-semibold text-gray-100">Integration Code</h3>
<button className="text-[10px] bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded text-gray-300 transition-colors">Copy</button>
</div>
<div className="bg-black/30 p-3 rounded-lg overflow-x-auto border border-gray-800">
<pre className="text-[10px] text-green-400">&lt;script src="https://quizflow.com/v1/widget.js"&gt;&lt;/script&gt;
&lt;div id="quiz-root" data-id="acme_83Xk29"&gt;&lt;/div&gt;</pre>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-gray-100 rounded-2xl border border-gray-200 flex flex-col items-center justify-center p-8 relative">
<div className="absolute top-4 right-4 bg-white/50 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-500">Live Preview</div>

<div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col relative">

<div className="p-6 border-b border-gray-100">
<div className="flex justify-between items-end mb-2">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Acme Corp.</span>
<span className="text-[10px] font-medium text-gray-400">Question 2/5</span>
</div>
<div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gray-900 w-[40%] rounded-full"></div>
</div>
</div>

<div className="p-6 flex-1">
<div className="mb-6">
<h2 className="text-lg font-semibold text-gray-900 leading-snug">What is the primary function of the Virtual DOM in React?</h2>
</div>
<div className="space-y-2">
<label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all">
<div className="w-4 h-4 rounded-full border border-gray-300 mr-3 shrink-0"></div>
<span className="text-xs text-gray-700">Directly update HTML</span>
</label>
<label className="flex items-center p-3 border border-gray-900 bg-gray-50 rounded-lg cursor-pointer transition-all">
<div className="w-4 h-4 rounded-full border border-gray-900 flex items-center justify-center mr-3 shrink-0">
<div className="w-2 h-2 rounded-full bg-gray-900"></div>
</div>
<span className="text-xs text-gray-900 font-medium">Performance optimization</span>
</label>
<label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all">
<div className="w-4 h-4 rounded-full border border-gray-300 mr-3 shrink-0"></div>
<span className="text-xs text-gray-700">Database management</span>
</label>
</div>
</div>

<div className="p-4 border-t border-gray-100 bg-gray-50/30 flex justify-end">
<button className="bg-gray-900 text-white font-medium text-xs px-4 py-2 rounded-lg shadow-sm">Next</button>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden p-6 md:p-10 max-w-5xl mx-auto" id="screen-company">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Company Settings</h1>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1">
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
<div className="w-24 h-24 rounded-xl bg-indigo-600 mx-auto flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-sm">
                            AC
                        </div>
<h2 className="text-lg font-semibold text-gray-900">Acme Corporation</h2>
<p className="text-sm text-gray-500 mb-4">Enterprise Plan</p>
<div className="border-t border-gray-100 pt-4 text-left space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Subscription</span>
<span className="font-medium text-green-600">Active</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Next Billing</span>
<span className="font-medium text-gray-900">Oct 24, 2023</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-6">

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<h3 className="text-base font-semibold text-gray-900 mb-6">Business Details</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Company Name</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all" type="text" value="Acme Corporation"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Support Email</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all" type="email" value="support@acme.com"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Website Domain</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all" type="text" value="https://acmecorp.com"/>
<p className="text-[10px] text-gray-400 mt-1">Domain whitelist for widget security.</p>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="text-base font-semibold text-gray-900">API Credentials</h3>
<button className="text-xs text-indigo-600 font-medium">Regenerate</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Public Key (Client-side)</label>
<div className="flex gap-2">
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-gray-500" readonly="" type="text" value="pk_live_51M3P2..."/>
<button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Secret Key (Server-side)</label>
<div className="flex gap-2">
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-gray-500" readonly="" type="password" value="sk_live_29s83..."/>
<button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="modal fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm" id="confirm-modal">
<div className="modal-content bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 border border-gray-200">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 mx-auto">
<svg className="text-gray-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
</div>
<div className="text-center">
<h3 className="text-lg font-semibold text-gray-900 mb-1">Use Template?</h3>
<p className="text-sm text-gray-500 mb-6">Import <span className="font-medium text-gray-900" id="modal-category-name">Category Name</span> into your question bank?</p>
<div className="grid grid-cols-2 gap-3">
<button className="w-full py-2.5 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors" onclick="closeConfirmModal()">Cancel</button>
<button className="w-full py-2.5 px-4 bg-gray-900 rounded-lg text-sm font-medium text-white hover:bg-gray-800 transition-colors shadow-sm" onclick="closeConfirmModal()">Import</button>
</div>
</div>
</div>
</div>


    </>
  );
}
