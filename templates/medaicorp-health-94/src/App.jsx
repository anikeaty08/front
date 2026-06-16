import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Navigation Logic
        function navigate(viewId) {
            // Update Menu Active State
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-slate-50', 'text-blue-600');
                el.classList.add('text-slate-600');
            });
            document.getElementById('nav-' + viewId).classList.add('bg-slate-50', 'text-blue-600');
            document.getElementById('nav-' + viewId).classList.remove('text-slate-600');

            // Hide all sections
            document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
            // Show target section
            document.getElementById(viewId).classList.add('active');

            // Update Title
            const titles = {
                'dashboard': 'Dashboard Overview',
                'employees': 'Employee Management',
                'schedule': 'MCU Scheduling',
                'reports': 'Medical Reports Repository'
            };
            document.getElementById('page-title').innerText = titles[viewId];
        }

        // Modal Logic
        function openModal() {
            document.getElementById('add-modal').classList.remove('hidden');
        }
        function closeModal() {
            document.getElementById('add-modal').classList.add('hidden');
        }

        // Toast Logic
        function showToast(message) {
            const toast = document.getElementById('toast-container');
            document.getElementById('toast-message').innerText = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between h-full z-20 shrink-0">
<div>
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-blue-600">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-lg font-medium tracking-tight text-slate-900">MedAI<span className="text-slate-400">Corp</span></span>
</div>
</div>
<nav className="p-4 space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors bg-slate-50 text-blue-600" id="nav-dashboard" onclick="navigate('dashboard')">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Dashboard
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" id="nav-employees" onclick="navigate('employees')">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Employees &amp; MCU
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" id="nav-schedule" onclick="navigate('schedule')">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Scheduling
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" id="nav-reports" onclick="navigate('reports')">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    AI Reports
                </button>
</nav>
</div>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium">JD</div>
<div className="text-xs">
<p className="font-medium text-slate-900">Dr. John Doe</p>
<p className="text-slate-500">Chief Medical Officer</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
<div className="flex items-center gap-4">
<h2 className="text-lg font-medium tracking-tight text-slate-900" id="page-title">Dashboard Overview</h2>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-64 placeholder:text-slate-400" placeholder="Search data..." type="text"/>
</div>
<button className="relative text-slate-500 hover:text-slate-700">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-slate-50 p-8">

<div className="view-section active" id="dashboard">

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 text-blue-600 rounded-md">
<iconify-icon icon="solar:user-plus-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400">Real-time</span>
</div>
<p className="text-slate-500 text-sm font-medium">Pending Registrations</p>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mt-1">12</h3>
</div>
<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-md">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600">+4% vs last mth</span>
</div>
<p className="text-slate-500 text-sm font-medium">FIT Status</p>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mt-1">842</h3>
</div>
<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-amber-50 text-amber-600 rounded-md">
<iconify-icon icon="solar:clipboard-list-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400">Needs Review</span>
</div>
<p className="text-slate-500 text-sm font-medium">FIT with Notes</p>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mt-1">156</h3>
</div>
<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-rose-50 text-rose-600 rounded-md">
<iconify-icon icon="solar:danger-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-rose-600">Action Req.</span>
</div>
<p className="text-slate-500 text-sm font-medium">UNFIT Status</p>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mt-1">18</h3>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-medium text-slate-900">AI Health Analysis Trends</h3>
<div className="flex gap-2">
<span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>FIT</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-2 h-2 rounded-full bg-amber-400"></span>Notes</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-2 h-2 rounded-full bg-rose-500"></span>UNFIT</span>
</div>
</div>

<div className="h-48 flex items-end justify-between gap-2 px-2">
<div className="w-full flex flex-col gap-1 items-center">
<div className="w-full flex flex-col gap-[2px] h-full justify-end">
<div className="bg-emerald-500 w-full h-[60%] rounded-sm opacity-90"></div>
<div className="bg-amber-400 w-full h-[20%] rounded-sm opacity-90"></div>
<div className="bg-rose-500 w-full h-[5%] rounded-sm opacity-90"></div>
</div>
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Mon</span>
</div>
<div className="w-full flex flex-col gap-1 items-center">
<div className="w-full flex flex-col gap-[2px] h-full justify-end">
<div className="bg-emerald-500 w-full h-[55%] rounded-sm opacity-90"></div>
<div className="bg-amber-400 w-full h-[25%] rounded-sm opacity-90"></div>
<div className="bg-rose-500 w-full h-[8%] rounded-sm opacity-90"></div>
</div>
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Tue</span>
</div>
<div className="w-full flex flex-col gap-1 items-center">
<div className="w-full flex flex-col gap-[2px] h-full justify-end">
<div className="bg-emerald-500 w-full h-[70%] rounded-sm opacity-90"></div>
<div className="bg-amber-400 w-full h-[15%] rounded-sm opacity-90"></div>
<div className="bg-rose-500 w-full h-[2%] rounded-sm opacity-90"></div>
</div>
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Wed</span>
</div>
<div className="w-full flex flex-col gap-1 items-center">
<div className="w-full flex flex-col gap-[2px] h-full justify-end">
<div className="bg-emerald-500 w-full h-[45%] rounded-sm opacity-90"></div>
<div className="bg-amber-400 w-full h-[35%] rounded-sm opacity-90"></div>
<div className="bg-rose-500 w-full h-[10%] rounded-sm opacity-90"></div>
</div>
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Thu</span>
</div>
<div className="w-full flex flex-col gap-1 items-center">
<div className="w-full flex flex-col gap-[2px] h-full justify-end">
<div className="bg-emerald-500 w-full h-[65%] rounded-sm opacity-90"></div>
<div className="bg-amber-400 w-full h-[10%] rounded-sm opacity-90"></div>
<div className="bg-rose-500 w-full h-[5%] rounded-sm opacity-90"></div>
</div>
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Fri</span>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-medium text-slate-900">Today's Schedule</h3>
<button className="text-xs text-blue-600 font-medium hover:underline" onclick="navigate('schedule')">View All</button>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
<div className="text-xs font-medium text-slate-500 w-10 pt-1">09:00</div>
<div>
<p className="text-sm font-medium text-slate-900">Eng. Sarah Connor</p>
<p className="text-xs text-slate-400">Annual Checkup • Room 302</p>
</div>
</div>
<div className="flex items-start gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
<div className="text-xs font-medium text-slate-500 w-10 pt-1">10:30</div>
<div>
<p className="text-sm font-medium text-slate-900">Mr. Anderson</p>
<p className="text-xs text-slate-400">Follow-up • Room 104</p>
</div>
</div>
<div className="flex items-start gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
<div className="text-xs font-medium text-slate-500 w-10 pt-1">13:00</div>
<div>
<p className="text-sm font-medium text-slate-900">Des. Ellen Ripley</p>
<p className="text-xs text-slate-400">Cardio Screen • Lab A</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section" id="employees">
<div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded hover:bg-white transition-colors">All</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors">Pending</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors">Completed</button>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors shadow-sm" onclick="openModal()">
<iconify-icon icon="solar:user-plus-linear" width="16"></iconify-icon>
                                Register Employee
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 uppercase tracking-wider">
<th className="px-6 py-3 font-medium">Employee</th>
<th className="px-6 py-3 font-medium">Department</th>
<th className="px-6 py-3 font-medium">Schedule Date</th>
<th className="px-6 py-3 font-medium">AI Status</th>
<th className="px-6 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-medium">AJ</div>
<div>
<p className="text-sm font-medium text-slate-900">Alex Johnson</p>
<p className="text-xs text-slate-500">ID: #MK-8821</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-500">Engineering</td>
<td className="px-6 py-4 text-sm text-slate-500">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> FIT
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-xs font-medium text-blue-600 hover:text-blue-700" onclick="navigate('reports')">View Report</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-medium">MR</div>
<div>
<p className="text-sm font-medium text-slate-900">Maria Rodriguez</p>
<p className="text-xs text-slate-500">ID: #MK-9002</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-500">Marketing</td>
<td className="px-6 py-4 text-sm text-slate-500">Oct 25, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Notes
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-xs font-medium text-blue-600 hover:text-blue-700" onclick="navigate('reports')">View Report</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-medium">DT</div>
<div>
<p className="text-sm font-medium text-slate-900">David Tan</p>
<p className="text-xs text-slate-500">ID: #MK-1120</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-500">Operations</td>
<td className="px-6 py-4 text-sm text-slate-500">
<span className="text-slate-400 italic">Not Scheduled</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
                                            Pending
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-md" onclick="navigate('schedule')">Schedule MCU</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
<span className="text-xs text-slate-500">Showing 3 of 124 employees</span>
<div className="flex gap-1">
<button className="px-2 py-1 text-slate-400 hover:text-slate-600 disabled:opacity-50"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="px-2 py-1 text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="view-section" id="schedule">
<div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)]">

<div className="flex-1 bg-white rounded-lg border border-slate-200 shadow-sm p-6 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-medium text-slate-900">October 2023</h3>
<div className="flex gap-2">
<button className="p-1.5 hover:bg-slate-50 rounded text-slate-500"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="p-1.5 hover:bg-slate-50 rounded text-slate-500"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-7 gap-px bg-slate-100 border border-slate-100 rounded-lg overflow-hidden flex-1">

<div className="bg-slate-50 p-2 text-center text-[10px] font-medium text-slate-500 uppercase">Sun</div>
<div className="bg-slate-50 p-2 text-center text-[10px] font-medium text-slate-500 uppercase">Mon</div>
<div className="bg-slate-50 p-2 text-center text-[10px] font-medium text-slate-500 uppercase">Tue</div>
<div className="bg-slate-50 p-2 text-center text-[10px] font-medium text-slate-500 uppercase">Wed</div>
<div className="bg-slate-50 p-2 text-center text-[10px] font-medium text-slate-500 uppercase">Thu</div>
<div className="bg-slate-50 p-2 text-center text-[10px] font-medium text-slate-500 uppercase">Fri</div>
<div className="bg-slate-50 p-2 text-center text-[10px] font-medium text-slate-500 uppercase">Sat</div>

<div className="bg-white p-2 min-h-[80px]"></div>
<div className="bg-white p-2 min-h-[80px]"></div>

<div className="bg-white p-2 min-h-[80px] hover:bg-slate-50 cursor-pointer relative group">
<span className="text-xs font-medium text-slate-700">1</span>
</div>

<div className="bg-white p-2 min-h-[80px] hover:bg-slate-50 cursor-pointer">
<span className="text-xs font-medium text-slate-700">2</span>
<div className="mt-1 p-1 bg-emerald-50 border-l-2 border-emerald-500 text-[10px] text-emerald-700 rounded-r truncate">5 MCU</div>
</div>
<div className="bg-white p-2 min-h-[80px] hover:bg-slate-50 cursor-pointer">
<span className="text-xs font-medium text-slate-700">3</span>
</div>
<div className="bg-white p-2 min-h-[80px] hover:bg-slate-50 cursor-pointer">
<span className="text-xs font-medium text-slate-700">4</span>
</div>
<div className="bg-white p-2 min-h-[80px] hover:bg-slate-50 cursor-pointer">
<span className="text-xs font-medium text-slate-700">5</span>
<div className="mt-1 p-1 bg-blue-50 border-l-2 border-blue-500 text-[10px] text-blue-700 rounded-r truncate">12 MCU</div>
</div>

<div className="bg-blue-50/30 p-2 min-h-[80px] hover:bg-slate-50 cursor-pointer ring-inset ring-2 ring-blue-500/20">
<span className="text-xs font-bold text-blue-700">6</span>
<div className="mt-1 p-1 bg-indigo-50 border-l-2 border-indigo-500 text-[10px] text-indigo-700 rounded-r truncate">8 MCU</div>
</div>

<div className="bg-white p-2 min-h-[80px]"><span className="text-xs font-medium text-slate-700">7</span></div>
<div className="bg-white p-2 min-h-[80px]"><span className="text-xs font-medium text-slate-700">8</span></div>
<div className="bg-white p-2 min-h-[80px]"><span className="text-xs font-medium text-slate-700">9</span></div>
<div className="bg-white p-2 min-h-[80px]"><span className="text-xs font-medium text-slate-700">10</span></div>
<div className="bg-white p-2 min-h-[80px]"><span className="text-xs font-medium text-slate-700">11</span></div>
<div className="bg-white p-2 min-h-[80px]"><span className="text-xs font-medium text-slate-700">12</span></div>
<div className="bg-white p-2 min-h-[80px]"><span className="text-xs font-medium text-slate-700">13</span></div>
</div>
</div>

<div className="w-full lg:w-80 bg-white rounded-lg border border-slate-200 shadow-sm p-6 overflow-y-auto">
<h4 className="text-sm font-medium text-slate-900 mb-4">Slots: Oct 6, 2023</h4>
<div className="space-y-3">
<div className="p-3 border border-slate-200 rounded-md hover:border-blue-300 transition-colors cursor-pointer bg-slate-50 opacity-60">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-slate-500 strike-through">09:00 - 09:30</span>
<span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Booked</span>
</div>
<p className="text-xs text-slate-400">Reserved by HR</p>
</div>
<div className="p-3 border border-blue-200 bg-blue-50/50 rounded-md cursor-pointer relative">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-slate-900">09:30 - 10:00</span>
<span className="text-[10px] font-medium text-blue-600 bg-white px-1.5 py-0.5 rounded border border-blue-100">Available</span>
</div>
<button className="mt-2 w-full text-xs bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 transition-colors" onclick="showToast('Slot reserved for David Tan')">Book Slot</button>
</div>
<div className="p-3 border border-slate-200 rounded-md hover:border-blue-400 transition-colors cursor-pointer group">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-slate-700">10:00 - 10:30</span>
<span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600">Available</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section" id="reports">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
<div className="col-span-1 lg:col-span-2 bg-white rounded-lg border border-slate-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-medium text-slate-900">Generated AI Reports</h3>
<button className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors" onclick="showToast('Generating Bulk Report...')">Generate Company Recap</button>
</div>
<div className="space-y-1">

<div className="grid grid-cols-12 px-4 py-2 text-xs font-medium text-slate-500 uppercase">
<div className="col-span-4">Employee Name</div>
<div className="col-span-3">Checkup Date</div>
<div className="col-span-2">Score</div>
<div className="col-span-3 text-right">Action</div>
</div>

<div className="grid grid-cols-12 items-center px-4 py-3 bg-white border border-transparent hover:border-slate-200 hover:bg-slate-50 rounded-md transition-all group">
<div className="col-span-4 flex items-center gap-3">
<iconify-icon className="text-slate-400 group-hover:text-blue-500" icon="solar:file-text-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Alex Johnson</span>
</div>
<div className="col-span-3 text-sm text-slate-500">Oct 24, 2023</div>
<div className="col-span-2">
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">98/100</span>
</div>
<div className="col-span-3 text-right">
<button className="text-xs text-slate-500 hover:text-blue-600 font-medium px-2 py-1 rounded hover:bg-blue-50 transition-colors" onclick="showToast('Downloading PDF for Alex Johnson...')">Download PDF</button>
</div>
</div>
<div className="grid grid-cols-12 items-center px-4 py-3 bg-white border border-transparent hover:border-slate-200 hover:bg-slate-50 rounded-md transition-all group">
<div className="col-span-4 flex items-center gap-3">
<iconify-icon className="text-slate-400 group-hover:text-amber-500" icon="solar:file-text-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Maria Rodriguez</span>
</div>
<div className="col-span-3 text-sm text-slate-500">Oct 25, 2023</div>
<div className="col-span-2">
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">72/100</span>
</div>
<div className="col-span-3 text-right">
<button className="text-xs text-slate-500 hover:text-blue-600 font-medium px-2 py-1 rounded hover:bg-blue-50 transition-colors" onclick="showToast('Downloading PDF for Maria Rodriguez...')">Download PDF</button>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-lg shadow-md p-6 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10">
<iconify-icon icon="solar:graph-up-linear" width="100"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-1">Company Health Recap</h3>
<p className="text-slate-400 text-xs mb-6">Q3 2023 Summary</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-300">Overall Wellness</span>
<span className="font-medium text-emerald-400">88%</span>
</div>
<div className="w-full bg-slate-700 rounded-full h-1.5">
<div className="bg-emerald-400 h-1.5 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
<div className="flex gap-4 pt-4">
<div>
<p className="text-2xl font-light">12</p>
<p className="text-[10px] text-slate-400 uppercase tracking-wide">Cases Flagged</p>
</div>
<div>
<p className="text-2xl font-light">450</p>
<p className="text-[10px] text-slate-400 uppercase tracking-wide">Hours Saved</p>
</div>
</div>
</div>
<button className="mt-8 w-full bg-white text-slate-900 py-2 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors" onclick="showToast('Downloading Executive Summary...')">Download Executive PDF</button>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 hidden" id="add-modal">
<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-xl shadow-xl border border-slate-200 p-6 transform transition-all scale-100">
<div className="flex items-center justify-between mb-5">
<h3 className="text-lg font-medium text-slate-900">Register New Employee</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="closeModal()"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); closeModal(); showToast('Employee registered successfully');">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
<input className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g. Sarah Connor" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Employee ID</label>
<input className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="MK-XXXX" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Department</label>
<select className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
<option>Engineering</option>
<option>Marketing</option>
<option>Operations</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">MCU Package</label>
<div className="flex gap-3">
<label className="flex items-center gap-2 border border-slate-200 p-2 rounded-md cursor-pointer hover:border-blue-400 w-full">
<input checked="" className="accent-blue-600" name="package" type="radio"/>
<span className="text-sm text-slate-600">Standard</span>
</label>
<label className="flex items-center gap-2 border border-slate-200 p-2 rounded-md cursor-pointer hover:border-blue-400 w-full">
<input className="accent-blue-600" name="package" type="radio"/>
<span className="text-sm text-slate-600">Executive</span>
</label>
</div>
</div>
<div className="pt-2 flex gap-3">
<button className="flex-1 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-50 rounded-md hover:bg-slate-100" onclick="closeModal()" type="button">Cancel</button>
<button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-sm" type="submit">Register</button>
</div>
</form>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50" id="toast-container">
<div className="bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span id="toast-message">Action Successful</span>
</div>
</div>


    </>
  );
}
