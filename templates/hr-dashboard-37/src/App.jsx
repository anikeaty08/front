import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchView(viewId) {
            // Hide all views
            document.getElementById('dashboard-view').classList.add('hidden');
            document.getElementById('add-employee-view').classList.add('hidden');
            
            // Show the target view
            document.getElementById(viewId).classList.remove('hidden');

            // Manage nav state and top button visibility
            const navDashboard = document.getElementById('nav-dashboard');
            const headerBtn = document.getElementById('header-onboard-btn');

            if (viewId === 'add-employee-view') {
                navDashboard.classList.remove('bg-blue-50', 'text-[#2563EB]');
                navDashboard.classList.add('text-gray-500', 'hover:bg-gray-50', 'hover:text-[#1E293B]');
                headerBtn.classList.add('hidden'); // Hide onboard button when already onboarding
            } else {
                navDashboard.classList.add('bg-blue-50', 'text-[#2563EB]');
                navDashboard.classList.remove('text-gray-500', 'hover:bg-gray-50', 'hover:text-[#1E293B]');
                headerBtn.classList.remove('hidden'); 
                // We ensure it gets its sm:flex back by just stripping 'hidden' as tailwind will handle the sm breakpoint for display
                headerBtn.className = "hidden sm:flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm transition-all active:scale-95";
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-[#E5E7EB] flex flex-col hidden lg:flex shrink-0 z-20">

<div className="h-16 flex items-center px-6 border-b border-[#E5E7EB]">
<div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center mr-3">
<span className="text-white text-base font-semibold tracking-tighter">HR</span>
</div>
<span className="text-lg font-semibold tracking-tight text-[#1E293B]">SYSTEM</span>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Main Menu</p>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-[#2563EB] text-sm font-medium transition-colors" href="#" id="nav-dashboard" onclick="switchView('dashboard-view')">
<iconify-icon icon="solar:widget-5-linear" width="20"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1E293B] text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                Employees
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1E293B] text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:calendar-mark-linear" width="20"></iconify-icon>
                Attendance
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1E293B] text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
                Leave Requests
                <span className="ml-auto bg-amber-100 text-amber-700 py-0.5 px-2 rounded-full text-xs font-medium">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1E293B] text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
                Payroll
            </a>
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 mt-6">Organization</p>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1E293B] text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:buildings-2-linear" width="20"></iconify-icon>
                Departments
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1E293B] text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:bell-bing-linear" width="20"></iconify-icon>
                Notices
            </a>
</nav>

<div className="p-4 border-t border-[#E5E7EB] mt-auto">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors text-left text-sm">
<img alt="Admin Profile" className="w-9 h-9 rounded-full border border-gray-200" src="https://ui-avatars.com/api/?name=Admin+User&amp;background=F3F4F6&amp;color=1E293B"/>
<div className="flex-1 min-w-0">
<p className="font-medium text-[#1E293B] truncate">Admin User</p>
<p className="text-xs text-gray-500 truncate">HR Director</p>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 bg-white border-b border-[#E5E7EB] flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 z-10">

<div className="flex items-center gap-4 flex-1">
<button className="lg:hidden text-gray-500 hover:text-[#1E293B]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="hidden sm:flex items-center gap-2 text-gray-400 bg-[#F8FAFC] px-3 py-2 rounded-lg border border-[#E5E7EB] w-72 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-all">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-[#1E293B] w-full placeholder-gray-400" placeholder="Search employees, ID, or department..." type="text"/>
</div>
</div>

<div className="flex items-center gap-3 sm:gap-5">
<button className="flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-[#1E293B] transition-colors border border-gray-200 px-3 py-1.5 rounded-lg">
<iconify-icon icon="solar:qr-code-linear" width="16"></iconify-icon>
                    QR Scanner
                </button>
<div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
<button className="relative text-gray-400 hover:text-[#1E293B] transition-colors">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-0 right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm transition-all active:scale-95" id="header-onboard-btn" onclick="switchView('add-employee-view')">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                    Onboard Employee
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8" id="dashboard-view">

<div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-[#1E293B]">Overview</h1>
<p className="text-sm text-gray-500 mt-1">Monitor daily attendance, leave requests, and workforce metrics.</p>
</div>
<div className="flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-lg p-1 shadow-sm">
<button className="px-3 py-1.5 text-xs font-medium bg-[#F8FAFC] text-[#1E293B] rounded-md border border-gray-200 shadow-sm">Today</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-[#1E293B] rounded-md transition-colors">7 Days</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-[#1E293B] rounded-md transition-colors">30 Days</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">

<div className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-500">Total Employees</h3>
<div className="p-2 bg-blue-50 text-[#2563EB] rounded-lg">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex items-end gap-3 mt-auto">
<p className="text-3xl font-semibold tracking-tight text-[#1E293B]">125</p>
<span className="text-xs font-medium text-emerald-600 flex items-center bg-emerald-50 px-1.5 py-0.5 rounded-md mb-1">+4 this month</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-500">Present Today</h3>
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<iconify-icon icon="solar:user-check-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex items-end gap-3 mt-auto">
<p className="text-3xl font-semibold tracking-tight text-[#1E293B]">112</p>
<span className="text-sm font-medium text-gray-400 mb-1">/ 125</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mt-4">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '89%'}}></div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-500">On Leave</h3>
<div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
<iconify-icon icon="solar:bed-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex items-end gap-3 mt-auto">
<p className="text-3xl font-semibold tracking-tight text-[#1E293B]">8</p>
<span className="text-xs font-medium text-gray-500 mb-1">3 pending approval</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-500">Late Arrivals</h3>
<div className="p-2 bg-red-50 text-red-600 rounded-lg">
<iconify-icon icon="solar:history-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex items-end gap-3 mt-auto">
<p className="text-3xl font-semibold tracking-tight text-[#1E293B]">5</p>
<span className="text-xs font-medium text-red-600 flex items-center bg-red-50 px-1.5 py-0.5 rounded-md mb-1">+2 from yesterday</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E5E7EB] shadow-sm lg:col-span-2 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-semibold tracking-tight text-[#1E293B]">Attendance Trend</h3>
<div className="relative">
<select className="appearance-none text-xs font-medium border border-gray-200 rounded-lg pl-3 pr-8 py-1.5 bg-white text-gray-500 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 cursor-pointer">
<option>This Week</option>
<option>Last Week</option>
</select>
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-2 h-48 mt-auto pt-4 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-dashed border-gray-100"></div>
</div>

<div className="w-full flex justify-between items-end h-full z-10 px-2 sm:px-6">
<div className="flex flex-col items-center gap-2 group w-1/12">
<div className="w-full bg-blue-100 rounded-t-sm h-[80%] relative group-hover:bg-blue-200 transition-colors">
<div className="absolute bottom-0 w-full bg-[#2563EB] rounded-t-sm h-[90%] group-hover:bg-blue-700 transition-colors"></div>
</div>
<span className="text-xs text-gray-400">Mon</span>
</div>
<div className="flex flex-col items-center gap-2 group w-1/12">
<div className="w-full bg-blue-100 rounded-t-sm h-[95%] relative group-hover:bg-blue-200 transition-colors">
<div className="absolute bottom-0 w-full bg-[#2563EB] rounded-t-sm h-[98%] group-hover:bg-blue-700 transition-colors"></div>
</div>
<span className="text-xs text-gray-400">Tue</span>
</div>
<div className="flex flex-col items-center gap-2 group w-1/12">
<div className="w-full bg-blue-100 rounded-t-sm h-[85%] relative group-hover:bg-blue-200 transition-colors">
<div className="absolute bottom-0 w-full bg-[#2563EB] rounded-t-sm h-[95%] group-hover:bg-blue-700 transition-colors"></div>
</div>
<span className="text-xs text-gray-400 text-[#1E293B] font-medium">Wed</span>
</div>
<div className="flex flex-col items-center gap-2 group w-1/12">
<div className="w-full bg-blue-100 rounded-t-sm h-[90%] relative group-hover:bg-blue-200 transition-colors">
<div className="absolute bottom-0 w-full bg-[#2563EB] rounded-t-sm h-[92%] group-hover:bg-blue-700 transition-colors"></div>
</div>
<span className="text-xs text-gray-400">Thu</span>
</div>
<div className="flex flex-col items-center gap-2 group w-1/12">
<div className="w-full bg-blue-100 rounded-t-sm h-[75%] relative group-hover:bg-blue-200 transition-colors">
<div className="absolute bottom-0 w-full bg-[#2563EB] rounded-t-sm h-[85%] group-hover:bg-blue-700 transition-colors"></div>
</div>
<span className="text-xs text-gray-400">Fri</span>
</div>
<div className="flex flex-col items-center gap-2 group w-1/12">
<div className="w-full bg-gray-100 rounded-t-sm h-[10%] relative group-hover:bg-gray-200 transition-colors">
<div className="absolute bottom-0 w-full bg-gray-300 rounded-t-sm h-[50%]"></div>
</div>
<span className="text-xs text-gray-400">Sat</span>
</div>
<div className="flex flex-col items-center gap-2 group w-1/12">
<div className="w-full bg-gray-100 rounded-t-sm h-[5%] relative group-hover:bg-gray-200 transition-colors">
<div className="absolute bottom-0 w-full bg-gray-300 rounded-t-sm h-[0%]"></div>
</div>
<span className="text-xs text-gray-400">Sun</span>
</div>
</div>
</div>
</div>

<div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E5E7EB] shadow-sm flex flex-col">
<h3 className="text-base font-semibold tracking-tight text-[#1E293B] mb-6">Headcount by Department</h3>
<div className="flex flex-col gap-4 mt-auto">

<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-[#1E293B]">Engineering</span>
<span className="text-gray-500">45</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-[#2563EB] h-2 rounded-full" style={{width: '36%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-[#1E293B]">Sales &amp; Marketing</span>
<span className="text-gray-500">32</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-indigo-500 h-2 rounded-full" style={{width: '25%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-[#1E293B]">Operations</span>
<span className="text-gray-500">28</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-sky-500 h-2 rounded-full" style={{width: '22%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-[#1E293B]">HR &amp; Admin</span>
<span className="text-gray-500">20</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-slate-400 h-2 rounded-full" style={{width: '16%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">

<div className="bg-white border border-[#E5E7EB] shadow-sm rounded-xl overflow-hidden flex flex-col">
<div className="px-5 py-4 border-b border-[#E5E7EB] flex justify-between items-center bg-white">
<h3 className="text-base font-semibold tracking-tight text-[#1E293B]">Recent Check-ins</h3>
<a className="text-xs font-medium text-[#2563EB] hover:text-blue-700 transition-colors" href="#">View All</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-[#F8FAFC] text-gray-500 font-medium border-b border-[#E5E7EB]">
<tr>
<th className="px-5 py-3 font-medium text-xs uppercase tracking-wider">Employee</th>
<th className="px-5 py-3 font-medium text-xs uppercase tracking-wider">Time</th>
<th className="px-5 py-3 font-medium text-xs uppercase tracking-wider">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-5 py-3 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Sarah+Connor&amp;background=E0F2FE&amp;color=0369A1"/>
<div>
<p className="font-medium text-[#1E293B] text-sm">Sarah Connor</p>
<p className="text-xs text-gray-500">EMP-1042</p>
</div>
</td>
<td className="px-5 py-3 text-[#1E293B] text-sm">08:45 AM</td>
<td className="px-5 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            On Time
                                        </span>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-5 py-3 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Michael+Chen&amp;background=FEF3C7&amp;color=B45309"/>
<div>
<p className="font-medium text-[#1E293B] text-sm">Michael Chen</p>
<p className="text-xs text-gray-500">EMP-1089</p>
</div>
</td>
<td className="px-5 py-3 text-[#1E293B] text-sm">09:15 AM</td>
<td className="px-5 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                            Late
                                        </span>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-5 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-medium">JD</div>
<div>
<p className="font-medium text-[#1E293B] text-sm">John Doe</p>
<p className="text-xs text-gray-500">EMP-1102</p>
</div>
</td>
<td className="px-5 py-3 text-[#1E293B] text-sm">08:55 AM</td>
<td className="px-5 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            On Time
                                        </span>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-5 py-3 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Emma+Wilson&amp;background=F3E8FF&amp;color=7E22CE"/>
<div>
<p className="font-medium text-[#1E293B] text-sm">Emma Wilson</p>
<p className="text-xs text-gray-500">EMP-1145</p>
</div>
</td>
<td className="px-5 py-3 text-gray-400 text-sm">--:--</td>
<td className="px-5 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                            Absent
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white border border-[#E5E7EB] shadow-sm rounded-xl overflow-hidden flex flex-col">
<div className="px-5 py-4 border-b border-[#E5E7EB] flex justify-between items-center bg-white">
<div className="flex items-center gap-2">
<h3 className="text-base font-semibold tracking-tight text-[#1E293B]">Pending Leaves</h3>
<span className="bg-amber-100 text-amber-700 py-0.5 px-2 rounded-full text-[10px] font-semibold">3</span>
</div>
<a className="text-xs font-medium text-[#2563EB] hover:text-blue-700 transition-colors" href="#">Manage</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-[#F8FAFC] text-gray-500 font-medium border-b border-[#E5E7EB]">
<tr>
<th className="px-5 py-3 font-medium text-xs uppercase tracking-wider">Employee</th>
<th className="px-5 py-3 font-medium text-xs uppercase tracking-wider">Dates</th>
<th className="px-5 py-3 font-medium text-xs uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-5 py-3">
<p className="font-medium text-[#1E293B] text-sm">David Miller</p>
<p className="text-xs text-gray-500">Sick Leave</p>
</td>
<td className="px-5 py-3 text-sm text-[#1E293B]">Oct 12 - Oct 14</td>
<td className="px-5 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors border border-transparent hover:border-emerald-200" title="Approve">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors border border-transparent hover:border-red-200" title="Reject">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-5 py-3">
<p className="font-medium text-[#1E293B] text-sm">Lisa Wang</p>
<p className="text-xs text-gray-500">Annual Leave</p>
</td>
<td className="px-5 py-3 text-sm text-[#1E293B]">Nov 01 - Nov 05</td>
<td className="px-5 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors border border-transparent hover:border-emerald-200" title="Approve">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors border border-transparent hover:border-red-200" title="Reject">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-5 py-3">
<p className="font-medium text-[#1E293B] text-sm">James Taylor</p>
<p className="text-xs text-gray-500">Casual Leave</p>
</td>
<td className="px-5 py-3 text-sm text-[#1E293B]">Oct 15</td>
<td className="px-5 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors border border-transparent hover:border-emerald-200" title="Approve">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors border border-transparent hover:border-red-200" title="Reject">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 hidden bg-[#F8FAFC]" id="add-employee-view">
<div className="max-w-3xl mx-auto">

<div className="mb-8">
<button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-[#1E293B] transition-colors mb-4" onclick="switchView('dashboard-view')">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
                        Back to Dashboard
                    </button>
<h1 className="text-2xl font-semibold tracking-tight text-[#1E293B]">Onboard New Employee</h1>
<p className="text-sm text-gray-500 mt-1">Enter the employee's personal and professional details.</p>
</div>

<div className="bg-white border border-[#E5E7EB] shadow-sm rounded-xl p-6 mb-6">
<h2 className="text-base font-semibold text-[#1E293B] mb-5">Personal Information</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-[#1E293B]">First Name</label>
<input className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-sm text-[#1E293B] outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all bg-white placeholder-gray-400" placeholder="e.g. Jane" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-[#1E293B]">Last Name</label>
<input className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-sm text-[#1E293B] outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all bg-white placeholder-gray-400" placeholder="e.g. Doe" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-[#1E293B]">Email Address</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-gray-400" icon="solar:letter-linear" width="18"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 border border-[#E5E7EB] rounded-lg text-sm text-[#1E293B] outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all bg-white placeholder-gray-400" placeholder="jane.doe@company.com" type="email"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-[#1E293B]">Phone Number</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-gray-400" icon="solar:phone-linear" width="18"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 border border-[#E5E7EB] rounded-lg text-sm text-[#1E293B] outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all bg-white placeholder-gray-400" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
</div>
</div>

<div className="bg-white border border-[#E5E7EB] shadow-sm rounded-xl p-6 mb-8">
<h2 className="text-base font-semibold text-[#1E293B] mb-5">Employment Details</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-[#1E293B]">Employee ID</label>
<input className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-sm text-gray-500 bg-gray-50 outline-none cursor-not-allowed font-medium" disabled="" type="text" value="EMP-1146"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-[#1E293B]">Department</label>
<div className="relative">
<select className="w-full appearance-none px-3 py-2 border border-[#E5E7EB] rounded-lg text-sm text-[#1E293B] outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all bg-white cursor-pointer">
<option disabled="" selected="" value="">Select department...</option>
<option>Engineering</option>
<option>Sales &amp; Marketing</option>
<option>Operations</option>
<option>HR &amp; Admin</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-[#1E293B]">Job Title</label>
<input className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-sm text-[#1E293B] outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all bg-white placeholder-gray-400" placeholder="e.g. Senior Product Designer" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-[#1E293B]">Start Date</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-gray-400" icon="solar:calendar-linear" width="18"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 border border-[#E5E7EB] rounded-lg text-sm text-[#1E293B] outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all bg-white" type="date"/>
</div>
</div>
</div>

<div className="flex flex-col gap-3">
<label className="text-sm font-medium text-[#1E293B]">Employment Type</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="relative flex items-start gap-3 p-3 border border-[#E5E7EB] rounded-lg cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
<input checked="" className="peer sr-only" name="emp_type" type="radio"/>
<div className="w-4 h-4 rounded-full border border-gray-300 mt-0.5 peer-checked:border-blue-500 peer-checked:border-[4.5px] bg-white transition-all flex-shrink-0"></div>
<div>
<p className="text-sm font-medium text-[#1E293B]">Full-time</p>
<p className="text-xs text-gray-500 mt-0.5">Regular 40 hours/week</p>
</div>
</label>
<label className="relative flex items-start gap-3 p-3 border border-[#E5E7EB] rounded-lg cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
<input className="peer sr-only" name="emp_type" type="radio"/>
<div className="w-4 h-4 rounded-full border border-gray-300 mt-0.5 peer-checked:border-blue-500 peer-checked:border-[4.5px] bg-white transition-all flex-shrink-0"></div>
<div>
<p className="text-sm font-medium text-[#1E293B]">Part-time</p>
<p className="text-xs text-gray-500 mt-0.5">Flexible hours</p>
</div>
</label>
<label className="relative flex items-start gap-3 p-3 border border-[#E5E7EB] rounded-lg cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
<input className="peer sr-only" name="emp_type" type="radio"/>
<div className="w-4 h-4 rounded-full border border-gray-300 mt-0.5 peer-checked:border-blue-500 peer-checked:border-[4.5px] bg-white transition-all flex-shrink-0"></div>
<div>
<p className="text-sm font-medium text-[#1E293B]">Contract</p>
<p className="text-xs text-gray-500 mt-0.5">Fixed term agreement</p>
</div>
</label>
</div>
</div>
</div>

<div className="flex items-center justify-end gap-3 pt-2 border-t border-gray-200">
<button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm" onclick="switchView('dashboard-view')" type="button">
                        Cancel
                    </button>
<button className="px-5 py-2 text-sm font-medium text-white bg-[#2563EB] rounded-lg hover:bg-blue-700 transition-colors shadow-sm active:scale-95" onclick="switchView('dashboard-view')" type="button">
                        Save Employee
                    </button>
</div>
</div>
</div>
</main>



    </>
  );
}
