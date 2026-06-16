import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
slate: {
850: '#1e293b',
}
},
fontSize: {
xxs: '0.65rem',
}
}
}
}



        // Toggle Views
        function showStudentView(name) {
            document.getElementById('dashboard-view').classList.add('hidden');
            document.getElementById('student-view').classList.remove('hidden');
            document.getElementById('breadcrumb-current').innerText = 'Student Details';
            if(name) document.getElementById('student-name-display').innerText = name;
            document.getElementById('main-scroll').scrollTop = 0;
            // Reset tabs
            switchTab('tab-summary', document.querySelector('#student-tabs button:first-child'));
        }

        function showDashboard() {
            document.getElementById('student-view').classList.add('hidden');
            document.getElementById('dashboard-view').classList.remove('hidden');
            document.getElementById('breadcrumb-current').innerText = 'Performance Overview';
        }

        // Tab Switching
        function switchTab(tabId, btnElement) {
            // Hide all contents
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            // Show target content
            document.getElementById(tabId).classList.remove('hidden');
            
            // Reset all buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('border-slate-900', 'text-slate-900');
                btn.classList.add('border-transparent', 'text-slate-500');
            });
            // Active button style
            btnElement.classList.remove('border-transparent', 'text-slate-500');
            btnElement.classList.add('border-slate-900', 'text-slate-900');
        }

        // Modal Logic
        function toggleReportModal() {
            const modal = document.getElementById('report-modal');
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
            } else {
                modal.classList.add('hidden');
            }
        }

        // Toast Simulation
        function generateReport() {
            toggleReportModal();
            const toast = document.getElementById('toast');
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col hidden md:flex">
<div className="h-14 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900 font-semibold tracking-tight">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="lucide:graduation-cap" width="16"></iconify-icon>
</div>
                Academia OS
            </div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<div className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Analytics</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-slate-50 text-slate-900 ring-1 ring-slate-200/50" href="#">
<iconify-icon icon="lucide:bar-chart-2" width="18"></iconify-icon>
                Performance
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50" href="#">
<iconify-icon icon="lucide:users" width="18"></iconify-icon>
                Students
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50" href="#">
<iconify-icon icon="lucide:file-text" width="18"></iconify-icon>
                Transcripts
            </a>
<div className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 mt-6">Management</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50" href="#">
<iconify-icon icon="lucide:send" width="18"></iconify-icon>
                Published Reports
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50" href="#">
<iconify-icon icon="lucide:shield-check" width="18"></iconify-icon>
                Audit Logs
            </a>
</nav>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=teacher"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Sarah Jenkins</p>
<p className="text-xs text-slate-400 truncate">Head of Science</p>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="lucide:settings" width="16"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50/50">

<header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
<nav className="flex text-sm font-medium text-slate-500 items-center gap-2">
<span className="hover:text-slate-900 cursor-pointer" onclick="showDashboard()">Dashboard</span>
<iconify-icon className="text-slate-300" icon="lucide:chevron-right" width="14"></iconify-icon>
<span className="text-slate-900" id="breadcrumb-current">Performance Overview</span>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="lucide:search" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-100 w-64 transition-all" placeholder="Search student..." type="text"/>
</div>
<button className="p-2 text-slate-400 hover:text-slate-600 relative">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth" id="main-scroll">

<div className="max-w-7xl mx-auto space-y-6" id="dashboard-view">

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
<div className="flex flex-wrap gap-3 w-full md:w-auto">
<select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-slate-400 cursor-pointer">
<option>Class 10-A</option>
<option>Class 10-B</option>
<option>Class 11-A</option>
</select>
<select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-slate-400 cursor-pointer">
<option>2023 - 2024</option>
<option>2022 - 2023</option>
</select>
<select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-slate-400 cursor-pointer">
<option>Term 2</option>
<option>Term 1</option>
</select>
<select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-slate-400 cursor-pointer">
<option>All Subjects</option>
<option>Mathematics</option>
<option>Physics</option>
</select>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm transition-all" onclick="toggleReportModal()">
<iconify-icon icon="lucide:file-plus" width="16"></iconify-icon>
                            Generate Report
                        </button>
<button className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-900 rounded-lg text-sm font-medium text-white hover:bg-slate-800 shadow-sm transition-all">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
                            Export
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-semibold text-slate-900">Score Distribution</h3>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="lucide:more-horizontal"></iconify-icon></button>
</div>
<div className="flex items-center gap-6">
<div className="w-32 h-32 flex-shrink-0">
<div className="chart-donut"></div>
</div>
<div className="flex flex-col gap-2 text-xs">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Exams (40%)</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Projects (35%)</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Tests (15%)</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> HW (10%)</div>
</div>
</div>
</div>

<div className="md:col-span-5 bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
<div className="flex justify-between items-start mb-6">
<h3 className="text-sm font-semibold text-slate-900">Term Comparison</h3>
<div className="flex gap-1">
<span className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600">Avg Score</span>
</div>
</div>
<div className="flex-1 flex items-end justify-between gap-4 px-2">
<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="w-full bg-slate-100 rounded-t-sm h-32 relative overflow-hidden group-hover:bg-slate-200 transition-colors">
<div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm" style={{height: '65%'}}></div>
</div>
<span className="text-xs text-slate-500 font-medium">Term 1</span>
</div>
<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="w-full bg-slate-100 rounded-t-sm h-32 relative overflow-hidden group-hover:bg-slate-200 transition-colors">
<div className="absolute bottom-0 w-full bg-indigo-600 rounded-t-sm" style={{height: '72%'}}></div>
</div>
<span className="text-xs text-slate-500 font-medium">Term 2</span>
</div>
<div className="flex flex-col items-center gap-2 w-full group cursor-pointer opacity-50">
<div className="w-full bg-slate-100 rounded-t-sm h-32 border-t border-x border-dashed border-slate-300"></div>
<span className="text-xs text-slate-400 font-medium">Term 3</span>
</div>
</div>
</div>

<div className="md:col-span-3 space-y-4">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-10">
<iconify-icon className="text-emerald-600" icon="lucide:trending-up" width="60"></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-500 mb-1">Best Performing</p>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight">Physics</h4>
<div className="flex items-center gap-1 mt-2 text-emerald-600 text-xs font-medium">
<iconify-icon icon="lucide:arrow-up" width="12"></iconify-icon>
<span>12% vs last term</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-10">
<iconify-icon className="text-rose-600" icon="lucide:alert-circle" width="60"></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-500 mb-1">Needs Attention</p>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight">Chemistry</h4>
<div className="flex items-center gap-1 mt-2 text-rose-600 text-xs font-medium">
<iconify-icon icon="lucide:arrow-down" width="12"></iconify-icon>
<span>5% vs last term</span>
</div>
</div>
<div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex gap-3 items-start">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:sparkles" width="16"></iconify-icon>
<p className="text-xs text-indigo-900 leading-relaxed">
<strong>AI Insight:</strong> Class 10-A shows a 15% drop in Homework completion. Consider reviewing workload for Week 4.
                             </p>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<h3 className="text-sm font-semibold text-slate-900">Score Breakdown</h3>
<div className="flex gap-2">
<div className="relative">
<input className="pl-8 pr-3 py-1 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-slate-400" placeholder="Filter..." type="text"/>
<iconify-icon className="absolute left-2.5 top-1.5 text-slate-400" icon="lucide:filter" width="12"></iconify-icon>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-slate-50 text-xs font-medium text-slate-500 uppercase tracking-wider sticky top-0 z-10">
<tr>
<th className="px-6 py-3 border-b border-slate-200 cursor-pointer hover:text-slate-700 group">
                                        Student Name <iconify-icon className="inline ml-1 opacity-0 group-hover:opacity-100" icon="lucide:arrow-down-up" width="12"></iconify-icon>
</th>
<th className="px-6 py-3 border-b border-slate-200 text-right">Class Work (20%)</th>
<th className="px-6 py-3 border-b border-slate-200 text-right">Homework (10%)</th>
<th className="px-6 py-3 border-b border-slate-200 text-right">Project (20%)</th>
<th className="px-6 py-3 border-b border-slate-200 text-right">Tests (20%)</th>
<th className="px-6 py-3 border-b border-slate-200 text-right">Exam (30%)</th>
<th className="px-6 py-3 border-b border-slate-200 text-right font-semibold text-slate-700">Total</th>
<th className="px-6 py-3 border-b border-slate-200"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm">
<tr className="hover:bg-slate-50 group transition-colors">
<td className="px-6 py-3 font-medium text-slate-900">
<button className="hover:underline underline-offset-2 decoration-slate-400 flex items-center gap-3" onclick="showStudentView('Alex Morgan')">
<span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xxs font-bold text-slate-600">AM</span>
                                            Alex Morgan
                                        </button>
</td>
<td className="px-6 py-3 text-right text-slate-600">18/20</td>
<td className="px-6 py-3 text-right text-slate-600">9/10</td>
<td className="px-6 py-3 text-right text-slate-600">19/20</td>
<td className="px-6 py-3 text-right text-slate-600">17/20</td>
<td className="px-6 py-3 text-right text-slate-600">28/30</td>
<td className="px-6 py-3 text-right font-semibold text-slate-900">91%</td>
<td className="px-6 py-3 text-right">
<button className="text-slate-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" onclick="showStudentView('Alex Morgan')">
<span className="text-xs font-medium">View</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 group transition-colors">
<td className="px-6 py-3 font-medium text-slate-900">
<button className="hover:underline underline-offset-2 decoration-slate-400 flex items-center gap-3" onclick="showStudentView('Bianca Rossi')">
<span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-xxs font-bold text-orange-600">BR</span>
                                            Bianca Rossi
                                        </button>
</td>
<td className="px-6 py-3 text-right text-slate-600">15/20</td>
<td className="px-6 py-3 text-right text-slate-600">8/10</td>
<td className="px-6 py-3 text-right text-slate-600">16/20</td>
<td className="px-6 py-3 text-right text-slate-600">14/20</td>
<td className="px-6 py-3 text-right text-slate-600">22/30</td>
<td className="px-6 py-3 text-right font-semibold text-slate-900">75%</td>
<td className="px-6 py-3 text-right">
<button className="text-slate-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" onclick="showStudentView('Bianca Rossi')">
<span className="text-xs font-medium">View</span>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50 group transition-colors bg-rose-50/30">
<td className="px-6 py-3 font-medium text-slate-900">
<button className="hover:underline underline-offset-2 decoration-slate-400 flex items-center gap-3" onclick="showStudentView('Charlie Davis')">
<span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xxs font-bold text-slate-600">CD</span>
                                            Charlie Davis
                                            <iconify-icon className="text-rose-500" icon="lucide:alert-circle" width="14"></iconify-icon>
</button>
</td>
<td className="px-6 py-3 text-right text-slate-600">10/20</td>
<td className="px-6 py-3 text-right text-slate-600">5/10</td>
<td className="px-6 py-3 text-right text-slate-600">12/20</td>
<td className="px-6 py-3 text-right text-slate-600">11/20</td>
<td className="px-6 py-3 text-right text-slate-600">15/30</td>
<td className="px-6 py-3 text-right font-semibold text-rose-600">53%</td>
<td className="px-6 py-3 text-right">
<button className="text-slate-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" onclick="showStudentView('Charlie Davis')">
<span className="text-xs font-medium">View</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 border-t border-slate-100 bg-slate-50 flex justify-between items-center text-xs text-slate-500">
<span>Showing 1-3 of 28 students</span>
<div className="flex gap-1">
<button className="px-2 py-1 border border-slate-200 rounded bg-white disabled:opacity-50" disabled="">Prev</button>
<button className="px-2 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50">Next</button>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto hidden space-y-6" id="student-view">

<div className="flex justify-between items-center">
<button className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors" onclick="showDashboard()">
<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon>
                        Back to Class Performance
                    </button>
<div className="flex gap-2">
<button className="p-2 bg-white border border-slate-200 rounded-md text-slate-600 hover:text-slate-900 shadow-sm" title="Email Parent">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</button>
<button className="p-2 bg-white border border-slate-200 rounded-md text-slate-600 hover:text-slate-900 shadow-sm" title="Print Report">
<iconify-icon icon="lucide:printer" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
<img alt="Student" className="w-20 h-20 rounded-full border-2 border-white shadow-md" src="https://i.pravatar.cc/150?u=student"/>
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h2 className="text-2xl font-bold text-slate-900 tracking-tight" id="student-name-display">Alex Morgan</h2>
<span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">Grade A</span>
</div>
<div className="flex flex-wrap gap-4 text-sm text-slate-500">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:layout-grid" width="14"></iconify-icon> Class 10-A</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="14"></iconify-icon> Term 2, 2024</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:hash" width="14"></iconify-icon> ID: #88210</span>
</div>
</div>
<div className="flex gap-6 border-l border-slate-100 pl-6">
<div className="text-center">
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Total</p>
<p className="text-xl font-bold text-slate-900">91%</p>
</div>
<div className="text-center">
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Rank</p>
<p className="text-xl font-bold text-slate-900">3<span className="text-xs text-slate-400 font-normal">/28</span></p>
</div>
<div className="text-center">
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Attendance</p>
<p className="text-xl font-bold text-slate-900">98%</p>
</div>
</div>
</div>

<div className="border-b border-slate-200">
<nav className="flex gap-6" id="student-tabs">
<button className="pb-3 border-b-2 border-slate-900 text-sm font-medium text-slate-900 tab-btn" onclick="switchTab('tab-summary', this)">Summary</button>
<button className="pb-3 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 tab-btn" onclick="switchTab('tab-termly', this)">Termly Performance</button>
<button className="pb-3 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 tab-btn" onclick="switchTab('tab-breakdown', this)">Scores Breakdown</button>
<button className="pb-3 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 tab-btn" onclick="switchTab('tab-qualitative', this)">Qualitative</button>
<button className="pb-3 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 tab-btn" onclick="switchTab('tab-comments', this)">Remarks</button>
</nav>
</div>

<div className="min-h-[400px]">

<div className="tab-content grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" id="tab-summary">

<div className="md:col-span-2 grid grid-cols-2 gap-4">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<p className="text-xs text-slate-500 mb-2">Strongest Subject</p>
<div className="flex justify-between items-end">
<h3 className="text-lg font-semibold text-slate-900">Mathematics</h3>
<span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-medium">98%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mt-3">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '98%'}}></div>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<p className="text-xs text-slate-500 mb-2">Area for Improvement</p>
<div className="flex justify-between items-end">
<h3 className="text-lg font-semibold text-slate-900">History</h3>
<span className="text-rose-600 bg-rose-50 px-2 py-1 rounded text-xs font-medium">72%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mt-3">
<div className="bg-rose-500 h-1.5 rounded-full" style={{width: '72%'}}></div>
</div>
</div>

<div className="col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Monthly Progress Trend</h3>
<div className="h-40 flex items-end justify-between gap-2 px-2">

<div className="flex flex-col items-center gap-1 w-full"><div className="w-full bg-indigo-200 rounded-t-sm h-[40%]"></div><span className="text-xxs text-slate-400">Sep</span></div>
<div className="flex flex-col items-center gap-1 w-full"><div className="w-full bg-indigo-300 rounded-t-sm h-[55%]"></div><span className="text-xxs text-slate-400">Oct</span></div>
<div className="flex flex-col items-center gap-1 w-full"><div className="w-full bg-indigo-400 rounded-t-sm h-[50%]"></div><span className="text-xxs text-slate-400">Nov</span></div>
<div className="flex flex-col items-center gap-1 w-full"><div className="w-full bg-indigo-500 rounded-t-sm h-[75%]"></div><span className="text-xxs text-slate-400">Dec</span></div>
<div className="flex flex-col items-center gap-1 w-full"><div className="w-full bg-indigo-600 rounded-t-sm h-[85%]"></div><span className="text-xxs text-slate-400">Jan</span></div>
<div className="flex flex-col items-center gap-1 w-full"><div className="w-full bg-indigo-500 rounded-t-sm h-[91%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xxs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">91%</div>
</div><span className="text-xxs text-slate-900 font-medium">Feb</span></div>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
<h3 className="text-sm font-semibold text-slate-900 mb-6 w-full text-left">Grade Composition</h3>
<div className="relative w-40 h-40">

<div className="w-full h-full rounded-full" style={{background: 'conic-gradient(#3b82f6 0% 20%, #8b5cf6 20% 40%, #10b981 40% 100%)'}}></div>
<div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center">
<span className="text-3xl font-bold text-slate-900">A</span>
<span className="text-xs text-slate-400">Overall</span>
</div>
</div>
<div className="w-full mt-6 space-y-2">
<div className="flex justify-between text-xs"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Exam (60%)</span> <span className="font-medium">94/100</span></div>
<div className="flex justify-between text-xs"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet-500"></span> Projects (20%)</span> <span className="font-medium">88/100</span></div>
<div className="flex justify-between text-xs"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Class (20%)</span> <span className="font-medium">85/100</span></div>
</div>
</div>
</div>

<div className="tab-content hidden" id="tab-termly">
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-xs text-slate-500 uppercase font-medium border-b border-slate-200">
<tr>
<th className="px-6 py-4">Subject</th>
<th className="px-6 py-4 text-center">Term 1</th>
<th className="px-6 py-4 text-center">Term 2</th>
<th className="px-6 py-4 text-center">Trend</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Mathematics</td>
<td className="px-6 py-4 text-center text-slate-500">88%</td>
<td className="px-6 py-4 text-center font-semibold text-slate-900">98%</td>
<td className="px-6 py-4 text-center"><span className="inline-flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-medium">+10%</span></td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Physics</td>
<td className="px-6 py-4 text-center text-slate-500">82%</td>
<td className="px-6 py-4 text-center font-semibold text-slate-900">85%</td>
<td className="px-6 py-4 text-center"><span className="inline-flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-medium">+3%</span></td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">English</td>
<td className="px-6 py-4 text-center text-slate-500">90%</td>
<td className="px-6 py-4 text-center font-semibold text-slate-900">89%</td>
<td className="px-6 py-4 text-center"><span className="inline-flex items-center text-slate-500 bg-slate-100 px-2 py-1 rounded text-xs font-medium">-1%</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="tab-content hidden" id="tab-qualitative">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-6">Behavioral &amp; Soft Skills</h3>
<div className="space-y-6 max-w-2xl">
<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-slate-700">Punctuality</label>
<span className="text-sm font-semibold text-emerald-600">Excellent</span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-slate-700">Class Participation</label>
<span className="text-sm font-semibold text-blue-600">Good</span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-3/4"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-slate-700">Discipline</label>
<span className="text-sm font-semibold text-emerald-600">Excellent</span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[95%]"></div>
</div>
</div>
<div className="pt-4 mt-4 border-t border-slate-100">
<label className="text-sm font-medium text-slate-700 mb-2 block">Teacher Notes</label>
<textarea className="w-full border border-slate-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-slate-200 focus:outline-none" rows="3">Alex is consistently on time and helps organize class materials. Shows great leadership potential.</textarea>
</div>
</div>
</div>
</div>

<div className="tab-content hidden" id="tab-comments">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-fit">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Add Remark</h3>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Author</label>
<select className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-slate-50">
<option>Class Teacher</option>
<option>Head Teacher</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Comment</label>
<textarea className="w-full border border-slate-200 rounded-md p-3 text-sm h-32 resize-none focus:ring-2 focus:ring-slate-200 focus:outline-none" placeholder="Write academic feedback..."></textarea>
</div>
<button className="w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800" type="button">Save Remark</button>
</form>
</div>
<div className="space-y-4">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">CT</div>
<span className="text-sm font-semibold text-slate-900">Class Teacher</span>
</div>
<span className="text-xs text-slate-400">Feb 12, 2024</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">Alex has shown remarkable improvement in Mathematics this term. I encourage him to maintain this momentum.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm opacity-75">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold">HM</div>
<span className="text-sm font-semibold text-slate-900">Head Master</span>
</div>
<span className="text-xs text-slate-400">Jan 10, 2024</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">A very disciplined student. Keep up the good work.</p>
</div>
</div>
</div>
</div>

<div className="tab-content hidden" id="tab-breakdown">
<div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm text-center">
<iconify-icon className="text-slate-300 mb-3" icon="lucide:table" width="40"></iconify-icon>
<p className="text-slate-500 text-sm">Detailed weighted breakdown table is available in the exported PDF.</p>
<button className="mt-4 px-4 py-2 bg-white border border-slate-200 rounded text-sm text-slate-700 font-medium hover:bg-slate-50">Download Full Breakdown</button>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 hidden flex items-center justify-center" id="report-modal">
<div className="bg-white w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Generate Report</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="toggleReportModal()"><iconify-icon icon="lucide:x" width="20"></iconify-icon></button>
</div>
<div className="p-6 space-y-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Template Style</label>
<div className="grid grid-cols-2 gap-3">
<div className="border-2 border-slate-900 rounded-lg p-3 cursor-pointer bg-slate-50 text-center">
<span className="text-sm font-semibold text-slate-900 block">Modern</span>
<span className="text-xs text-slate-500">Clean, chart-heavy</span>
</div>
<div className="border border-slate-200 rounded-lg p-3 cursor-pointer hover:border-slate-300 text-center">
<span className="text-sm font-medium text-slate-600 block">Classic</span>
<span className="text-xs text-slate-400">Table-focused</span>
</div>
</div>
</div>
<div className="space-y-3 pt-2">
<div className="flex items-center justify-between">
<label className="text-sm text-slate-700">Include Performance Graphs</label>
<input checked="" className="accent-slate-900 w-4 h-4" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<label className="text-sm text-slate-700">Include Teacher Remarks</label>
<input checked="" className="accent-slate-900 w-4 h-4" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<label className="text-sm text-slate-700">Compare with Class Average</label>
<input className="accent-slate-900 w-4 h-4" type="checkbox"/>
</div>
</div>
<div className="pt-4 flex gap-3">
<button className="flex-1 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" onclick="generateReport()">Generate PDF</button>
<button className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors" onclick="toggleReportModal()">Cancel</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg transform translate-y-20 opacity-0 transition-all duration-300 flex items-center gap-3 z-50" id="toast">
<iconify-icon className="text-emerald-400" icon="lucide:check-circle" width="20"></iconify-icon>
<div>
<p className="text-sm font-medium">Success</p>
<p className="text-xs text-slate-300">Reports generated successfully.</p>
</div>
</div>


    </>
  );
}
