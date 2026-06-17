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



lucide.createIcons();
function switchView(viewName) {
const titles = {
'dashboard': 'Dashboard Overview',
'employees': 'Employees & MCU',
'scheduling': 'Scheduling Management',
'reports': 'AI Analysis Reports',
'settings': 'System Settings'
};
const titleEl = document.getElementById('page-title');
if(titleEl) titleEl.innerText = titles[viewName] || 'Dashboard';
['dashboard', 'employees', 'scheduling', 'reports', 'settings'].forEach(id => {
const el = document.getElementById('view-' + id);
if (el) el.classList.add('hidden');
});
const target = document.getElementById('view-' + viewName);
if (target) target.classList.remove('hidden');
document.querySelectorAll('nav a').forEach(el => {
if(el.dataset.view === viewName) {
el.className = 'flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg group transition-colors cursor-pointer';
} else {
el.className = 'flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-gray-50 hover:text-slate-900 rounded-lg group transition-colors cursor-pointer';
}
});
lucide.createIcons();
}
function downloadReport(type) {
const btnText = type === 'monthly' ? 'Monthly Recap' : 'Individual Reports';
const toast = document.createElement('div');
toast.className = 'fixed top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-xl text-sm font-medium z-50 flex items-center gap-2 animate-bounce';
toast.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Generating ${btnText}...`;
document.body.appendChild(toast);
lucide.createIcons();
setTimeout(() => {
toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i> ${btnText} Downloaded`;
lucide.createIcons();
setTimeout(() => toast.remove(), 2000);
}, 1500);
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide Icons
      lucide.createIcons();

      // Prototype Logic
      function downloadReport(type) {
          const btnText = type === 'monthly' ? 'Monthly Recap' : 'Individual Reports';

          // Simple toast simulation
          const toast = document.createElement('div');
          toast.className = 'fixed top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-xl text-sm font-medium z-50 flex items-center gap-2 animate-bounce';
          toast.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Generating ${btnText}...`;
          document.body.appendChild(toast);
          lucide.createIcons();

          setTimeout(() => {
              toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i> ${btnText} Downloaded`;
              lucide.createIcons();
              setTimeout(() => {
                  toast.remove();
              }, 2000);
          }, 1500);
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
      

<aside className="w-72 bg-white border-r border-gray-200 flex flex-col h-full shrink-0 hidden md:flex z-20">

<div className="h-20 flex items-center px-8 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="bg-blue-600 rounded-lg p-1.5 text-white">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<span className="text-xl font-medium text-slate-900 tracking-tight">
            MedAI
            <span className="text-slate-400 font-normal">Corp</span>
</span>
</div>
</div>

<nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg group transition-colors cursor-pointer" data-view="dashboard" onclick="switchView('dashboard')">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
<span className="font-medium text-base">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-gray-50 hover:text-slate-900 rounded-lg group transition-colors cursor-pointer" data-view="employees" onclick="switchView('employees')">
<i className="w-5 h-5 group-hover:text-slate-700" data-lucide="users"></i>
<span className="font-medium text-base">Employees &amp; MCU</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-gray-50 hover:text-slate-900 rounded-lg group transition-colors cursor-pointer" data-view="scheduling" onclick="switchView('scheduling')">
<i className="w-5 h-5 group-hover:text-slate-700" data-lucide="calendar"></i>
<span className="font-medium text-base">Scheduling</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-gray-50 hover:text-slate-900 rounded-lg group transition-colors cursor-pointer" data-view="reports" onclick="switchView('reports')">
<i className="w-5 h-5 group-hover:text-slate-700" data-lucide="file-text"></i>
<span className="font-medium text-base">AI Reports</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-gray-50 hover:text-slate-900 rounded-lg group transition-colors cursor-pointer" data-view="settings" onclick="switchView('settings')">
<i className="w-5 h-5 group-hover:text-slate-700" data-lucide="settings"></i>
<span className="font-medium text-base">Settings</span>
</a>
</nav>

<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
<div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm">
            JD
          </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">
              Dr. John Doe
            </p>
<p className="text-xs text-slate-500 truncate">Chief Medical Officer</p>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 z-10">
<h1 className="text-2xl font-medium text-slate-900 tracking-tight" id="page-title">
          Dashboard Overview
        </h1>
<div className="flex items-center gap-6">

<div className="relative w-80 hidden md:block">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all" placeholder="Search employee, ID, or report..." type="text"/>
</div>

<button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-gray-50 p-8">
<div className="max-w-7xl mx-auto space-y-8" id="view-dashboard">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div className="flex items-center gap-3">
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-gray-50 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="filter"></i>
<span>Filter Dept</span>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-down"></i>
</button>

<div className="absolute top-full mt-1 left-0 w-40 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-focus-within:block py-1 z-20">
<a className="block px-4 py-2 text-sm hover:bg-gray-50" href="#">
                    Engineering
                  </a>
<a className="block px-4 py-2 text-sm hover:bg-gray-50" href="#">
                    Sales
                  </a>
<a className="block px-4 py-2 text-sm hover:bg-gray-50" href="#">
                    HR
                  </a>
</div>
</div>
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-gray-50 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="calendar-days"></i>
<span>This Month</span>
</button>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm" onclick="downloadReport('monthly')">
<i className="w-4 h-4" data-lucide="download"></i>
                Download Recap
              </button>
<button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm shadow-slate-200" onclick="downloadReport('individual')">
<i className="w-4 h-4" data-lucide="file-down"></i>
                Export Reports
              </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-blue-50 rounded-lg text-blue-600">
<i className="w-5 h-5" data-lucide="user-plus"></i>
</div>
<span className="text-xs font-medium text-slate-400">
                  Real-time
                </span>
</div>
<h3 className="text-sm font-medium text-slate-500 mb-1">
                Pending Registrations
              </h3>
<p className="text-3xl font-medium text-slate-900 tracking-tight">
                12
              </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-600">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  +4% vs last mth
                </span>
</div>
<h3 className="text-sm font-medium text-slate-500 mb-1">
                FIT Status
              </h3>
<p className="text-3xl font-medium text-slate-900 tracking-tight">
                842
              </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-amber-50 rounded-lg text-amber-600">
<i className="w-5 h-5" data-lucide="clipboard-list"></i>
</div>
<span className="text-xs font-medium text-slate-400">
                  Needs Review
                </span>
</div>
<h3 className="text-sm font-medium text-slate-500 mb-1">
                FIT with Notes
              </h3>
<p className="text-3xl font-medium text-slate-900 tracking-tight">
                156
              </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-rose-50 rounded-lg text-rose-600 group-hover:bg-rose-100 transition-colors">
<i className="w-5 h-5" data-lucide="alert-circle"></i>
</div>
<span className="text-xs font-medium text-rose-600">
                  Action Req.
                </span>
</div>
<h3 className="text-sm font-medium text-slate-500 mb-1">
                UNFIT Status
              </h3>
<p className="text-3xl font-medium text-slate-900 tracking-tight">
                18
              </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
<div className="flex justify-between items-center mb-8">
<h3 className="text-lg font-medium text-slate-900">
                  AI Health Analysis Trends
                </h3>
<div className="flex gap-4 text-xs font-medium text-slate-500">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    FIT
                  </div>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    Notes
                  </div>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-rose-400"></span>
                    UNFIT
                  </div>
</div>
</div>

<div className="h-64 flex items-end justify-between px-2 md:px-6 gap-2 md:gap-8">

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer relative">
<div className="w-full max-w-[40px] flex flex-col gap-1 h-40">
<div className="bg-rose-400 h-[10%] w-full rounded-sm opacity-90 chart-bar"></div>
<div className="bg-amber-400 h-[20%] w-full rounded-sm opacity-90 chart-bar"></div>
<div className="bg-emerald-400 h-[70%] w-full rounded-sm opacity-90 chart-bar"></div>
</div>
<span className="text-xs font-medium text-slate-400">MON</span>

<div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap z-10">
                    Total: 142
                  </div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer relative">
<div className="w-full max-w-[40px] flex flex-col gap-1 h-48">
<div className="bg-rose-400 h-[5%] w-full rounded-sm opacity-90 chart-bar"></div>
<div className="bg-amber-400 h-[25%] w-full rounded-sm opacity-90 chart-bar"></div>
<div className="bg-emerald-400 h-[70%] w-full rounded-sm opacity-90 chart-bar"></div>
</div>
<span className="text-xs font-medium text-slate-400">TUE</span>
<div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap z-10">
                    Total: 168
                  </div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer relative">
<div className="w-full max-w-[40px] flex flex-col gap-1 h-36">
<div className="bg-rose-400 h-[12%] w-full rounded-sm opacity-90 chart-bar"></div>
<div className="bg-amber-400 h-[18%] w-full rounded-sm opacity-90 chart-bar"></div>
<div className="bg-emerald-400 h-[70%] w-full rounded-sm opacity-90 chart-bar"></div>
</div>
<span className="text-xs font-medium text-slate-400">WED</span>
<div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap z-10">
                    Total: 135
                  </div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer relative">
<div className="w-full max-w-[40px] flex flex-col gap-1 h-56">
<div className="bg-rose-400 h-[4%] w-full rounded-sm opacity-90 chart-bar"></div>
<div className="bg-amber-400 h-[16%] w-full rounded-sm opacity-90 chart-bar"></div>
<div className="bg-emerald-400 h-[80%] w-full rounded-sm opacity-90 chart-bar"></div>
</div>
<span className="text-xs font-medium text-slate-400">THU</span>
<div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap z-10">
                    Total: 189
                  </div>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer relative">
<div className="w-full max-w-[40px] flex flex-col gap-1 h-44">
<div className="bg-rose-400 h-[8%] w-full rounded-sm opacity-90 chart-bar"></div>
<div className="bg-amber-400 h-[22%] w-full rounded-sm opacity-90 chart-bar"></div>
<div className="bg-emerald-400 h-[70%] w-full rounded-sm opacity-90 chart-bar"></div>
</div>
<span className="text-xs font-medium text-slate-400">FRI</span>
<div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap z-10">
                    Total: 154
                  </div>
</div>
</div>
</div>

<div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-slate-900">
                  Today's Schedule
                </h3>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline">
                  View All
                </button>
</div>
<div className="space-y-6 overflow-y-auto max-h-[300px] pr-2">

<div className="flex gap-4 group cursor-pointer hover:bg-gray-50 -mx-2 p-2 rounded-lg transition-colors">
<div className="pt-0.5">
<p className="text-sm font-medium text-slate-500 font-mono">
                      09:00
                    </p>
</div>
<div className="flex-1 relative pl-4 border-l-2 border-emerald-400">
<h4 className="text-base font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                      Eng. Sarah Connor
                    </h4>
<p className="text-sm text-slate-500 mt-0.5">
                      Annual Checkup • Room 302
                    </p>
<div className="absolute right-0 top-0">
<button className="p-1 hover:bg-gray-200 rounded text-slate-400 hover:text-slate-600" title="Download Report">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
</button>
</div>
</div>
</div>

<div className="flex gap-4 group cursor-pointer hover:bg-gray-50 -mx-2 p-2 rounded-lg transition-colors">
<div className="pt-0.5">
<p className="text-sm font-medium text-slate-500 font-mono">
                      10:30
                    </p>
</div>
<div className="flex-1 relative pl-4 border-l-2 border-blue-400">
<h4 className="text-base font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                      Mr. Anderson
                    </h4>
<p className="text-sm text-slate-500 mt-0.5">
                      Follow-up • Room 104
                    </p>
<div className="absolute right-0 top-0">
<button className="p-1 hover:bg-gray-200 rounded text-slate-400 hover:text-slate-600" title="Download Report">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
</button>
</div>
</div>
</div>

<div className="flex gap-4 group cursor-pointer hover:bg-gray-50 -mx-2 p-2 rounded-lg transition-colors">
<div className="pt-0.5">
<p className="text-sm font-medium text-slate-500 font-mono">
                      13:00
                    </p>
</div>
<div className="flex-1 relative pl-4 border-l-2 border-amber-400">
<h4 className="text-base font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                      Des. Ellen Ripley
                    </h4>
<p className="text-sm text-slate-500 mt-0.5">
                      Cardio Screen • Lab A
                    </p>
<div className="absolute right-0 top-0">
<button className="p-1 hover:bg-gray-200 rounded text-slate-400 hover:text-slate-600" title="Download Report">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
</button>
</div>
</div>
</div>

<div className="flex gap-4 group cursor-pointer hover:bg-gray-50 -mx-2 p-2 rounded-lg transition-colors">
<div className="pt-0.5">
<p className="text-sm font-medium text-slate-500 font-mono">
                      14:15
                    </p>
</div>
<div className="flex-1 relative pl-4 border-l-2 border-emerald-400">
<h4 className="text-base font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                      Dr. Emmet Brown
                    </h4>
<p className="text-sm text-slate-500 mt-0.5">
                      Neuro Scan • Room 201
                    </p>
<div className="absolute right-0 top-0">
<button className="p-1 hover:bg-gray-200 rounded text-slate-400 hover:text-slate-600" title="Download Report">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6">
<div className="bg-slate-900 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-medium border border-slate-700 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
<span>
                MedAI
                <span className="text-slate-400">System</span>
                v2.0
              </span>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto space-y-6 hidden" id="view-employees">
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
<h3 className="text-lg font-medium text-slate-900">
                Employee Directory
              </h3>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Add Employee
              </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-slate-500 uppercase bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 font-medium">Employee</th>
<th className="px-6 py-3 font-medium">Role</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Last MCU</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr className="hover:bg-gray-50">
<td className="px-6 py-4 font-medium text-slate-900">
                      Sarah Connor
                    </td>
<td className="px-6 py-4 text-slate-500">Engineer</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                        Active
                      </span>
</td>
<td className="px-6 py-4 text-slate-500">Oct 24, 2023</td>
<td className="px-6 py-4 text-right text-blue-600 hover:underline cursor-pointer">
                      View
                    </td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-4 font-medium text-slate-900">
                      John Smith
                    </td>
<td className="px-6 py-4 text-slate-500">Technician</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                        On Leave
                      </span>
</td>
<td className="px-6 py-4 text-slate-500">Sep 12, 2023</td>
<td className="px-6 py-4 text-right text-blue-600 hover:underline cursor-pointer">
                      View
                    </td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-gray-200 bg-gray-50 text-xs text-slate-500 flex justify-between">
<span>Showing 2 of 145 employees</span>
<div className="flex gap-2">
<button className="hover:text-slate-900">Previous</button>
<button className="hover:text-slate-900">Next</button>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto space-y-6 hidden" id="view-scheduling">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-slate-900">
                  Monthly Schedule
                </h3>
<div className="flex gap-2">
<button className="p-1.5 hover:bg-gray-100 rounded text-slate-500">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<span className="text-sm font-medium text-slate-900 py-1.5">
                    November 2023
                  </span>
<button className="p-1.5 hover:bg-gray-100 rounded text-slate-500">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-7 gap-2 mb-2">
<div className="text-center text-xs font-medium text-slate-400 py-2">
                  Mon
                </div>
<div className="text-center text-xs font-medium text-slate-400 py-2">
                  Tue
                </div>
<div className="text-center text-xs font-medium text-slate-400 py-2">
                  Wed
                </div>
<div className="text-center text-xs font-medium text-slate-400 py-2">
                  Thu
                </div>
<div className="text-center text-xs font-medium text-slate-400 py-2">
                  Fri
                </div>
<div className="text-center text-xs font-medium text-slate-400 py-2">
                  Sat
                </div>
<div className="text-center text-xs font-medium text-slate-400 py-2">
                  Sun
                </div>
</div>
<div className="grid grid-cols-7 gap-2 h-64">
<div className="bg-gray-50 rounded-lg p-2 text-xs text-slate-400">
                  29
                </div>
<div className="bg-gray-50 rounded-lg p-2 text-xs text-slate-400">
                  30
                </div>
<div className="bg-blue-50 border border-blue-100 rounded-lg p-2 text-xs text-blue-600 font-medium relative">
                  1
                  <span className="block w-1.5 h-1.5 bg-blue-500 rounded-full absolute top-2 right-2"></span>
</div>
<div className="bg-white border border-gray-100 rounded-lg p-2 text-xs text-slate-600 hover:border-blue-200 transition-colors">
                  2
                </div>
<div className="bg-white border border-gray-100 rounded-lg p-2 text-xs text-slate-600 hover:border-blue-200 transition-colors">
                  3
                </div>
<div className="bg-gray-50 rounded-lg p-2 text-xs text-slate-400">
                  4
                </div>
<div className="bg-gray-50 rounded-lg p-2 text-xs text-slate-400">
                  5
                </div>

</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
<h3 className="text-lg font-medium text-slate-900 mb-4">
                Upcoming Events
              </h3>
<div className="space-y-4">
<div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
<div className="bg-white p-2 rounded border border-gray-200 text-center min-w-[3rem]">
<span className="block text-xs text-slate-500 uppercase">
                      Nov
                    </span>
<span className="block text-lg font-bold text-slate-900">
                      08
                    </span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">
                      General Health Screening
                    </h4>
<p className="text-xs text-slate-500 mt-1">
                      09:00 AM - Lobby A
                    </p>
</div>
</div>
<div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
<div className="bg-white p-2 rounded border border-gray-200 text-center min-w-[3rem]">
<span className="block text-xs text-slate-500 uppercase">
                      Nov
                    </span>
<span className="block text-lg font-bold text-slate-900">
                      15
                    </span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">
                      Vaccination Drive
                    </h4>
<p className="text-xs text-slate-500 mt-1">
                      10:00 AM - Room 304
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto space-y-6 hidden" id="view-reports">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="more-vertical"></i>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                Annual Health Summary
              </h3>
<p className="text-sm text-slate-500 mb-4">
                Comprehensive analysis of all employee health data for FY 2023.
              </p>
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Updated 2 days ago</span>
<span className="flex items-center gap-1 text-slate-600">
<i className="w-3 h-3" data-lucide="file"></i>
                  2.4 MB
                </span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="more-vertical"></i>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                Fitness Fit-for-Work
              </h3>
<p className="text-sm text-slate-500 mb-4">
                Detailed report on fit vs unfit status distribution by
                department.
              </p>
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Updated 5 hours ago</span>
<span className="flex items-center gap-1 text-slate-600">
<i className="w-3 h-3" data-lucide="file"></i>
                  1.1 MB
                </span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-amber-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="alert-triangle"></i>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="more-vertical"></i>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                Risk Assessment
              </h3>
<p className="text-sm text-slate-500 mb-4">
                AI-generated risk predictions based on recent health trends.
              </p>
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Updated Just now</span>
<span className="flex items-center gap-1 text-slate-600">
<i className="w-3 h-3" data-lucide="file"></i>
                  856 KB
                </span>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto space-y-6 hidden" id="view-settings">
<div className="bg-white rounded-xl border border-gray-200 shadow-sm max-w-2xl">
<div className="p-6 border-b border-gray-200">
<h3 className="text-lg font-medium text-slate-900">
                General Settings
              </h3>
<p className="text-sm text-slate-500">
                Manage your account preferences and system configurations.
              </p>
</div>
<div className="p-6 space-y-6">
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium text-slate-900">
                    Email Notifications
                  </h4>
<p className="text-xs text-slate-500">
                    Receive daily summaries of MCU reports.
                  </p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium text-slate-900">Dark Mode</h4>
<p className="text-xs text-slate-500">
                    Toggle dark theme for the dashboard.
                  </p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
</label>
</div>
<div className="pt-4 border-t border-gray-100">
<button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                  Save Changes
                </button>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
