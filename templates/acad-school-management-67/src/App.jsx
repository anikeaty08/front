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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex flex-shrink-0 z-20">
<div className="h-14 flex items-center px-6 border-b border-gray-100 flex-shrink-0">
<span className="text-lg font-semibold tracking-tighter text-gray-900">ACAD.</span>
</div>

<nav className="flex-1 overflow-y-auto py-5 px-3 space-y-6 custom-scrollbar">

<div className="space-y-0.5">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 tracking-wider">Overview</div>
<a className="flex items-center gap-3 px-3 py-2 bg-gray-100 text-gray-900 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Messages</span>
<span className="ml-auto bg-gray-900 text-white text-xs font-medium px-1.5 py-0.5 rounded-full">3</span>
</a>
</div>

<div className="space-y-0.5">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 tracking-wider">Academics</div>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:notebook-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Classes</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Subjects</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Schedule</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Attendance</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Assignments</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Exams &amp; Grades</span>
</a>
</div>

<div className="space-y-0.5">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 tracking-wider">People</div>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Students</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Teachers</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Parents</span>
</a>
</div>

<div className="space-y-0.5">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 tracking-wider">Administration</div>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:user-plus-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Admissions</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:library-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Library</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:bus-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Transport</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Inventory</span>
</a>
</div>

<div className="space-y-0.5">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 tracking-wider">Finance</div>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Fee Management</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:calculator-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Expenses</span>
</a>
</div>
</nav>

<div className="p-4 border-t border-gray-100 flex-shrink-0 bg-white space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:logout-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Log out</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 flex-shrink-0">
<div className="flex items-center flex-1 gap-4">
<button className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="w-full max-w-md relative hidden sm:block">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="block w-full pl-9 pr-3 py-1.5 border border-gray-200 rounded-md leading-5 bg-[#FAFAFA] text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm transition-colors" placeholder="Search students, classes..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-600 relative focus:outline-none">
<span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full bg-gray-900 ring-2 ring-white"></span>
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="h-8 w-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 cursor-pointer">
                    JW
                </div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Overview</h1>
<p className="text-sm text-gray-500 mt-1">Academic Year 2023-2024</p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center px-4 py-2 border border-gray-200 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors">
<iconify-icon className="mr-2 text-lg" icon="solar:printer-linear" strokeWidth="1.5"></iconify-icon>
                            Reports
                        </button>
<button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none transition-colors">
<iconify-icon className="mr-2 text-lg" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                            New Admission
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-gray-500">Total Students</p>
<div className="p-2 bg-gray-50 rounded-lg">
<iconify-icon className="text-gray-700 text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-baseline gap-2">
<p className="text-2xl font-medium tracking-tight text-gray-900">2,845</p>
<span className="text-xs font-medium text-gray-500 flex items-center">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
                                4.2%
                            </span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-gray-500">Teachers</p>
<div className="p-2 bg-gray-50 rounded-lg">
<iconify-icon className="text-gray-700 text-lg" icon="solar:user-hand-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-baseline gap-2">
<p className="text-2xl font-medium tracking-tight text-gray-900">142</p>
<span className="text-xs font-medium text-gray-500 flex items-center">
<iconify-icon className="mr-0.5" icon="solar:minus-linear"></iconify-icon>
                                0.0%
                            </span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-gray-500">Active Classes</p>
<div className="p-2 bg-gray-50 rounded-lg">
<iconify-icon className="text-gray-700 text-lg" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-baseline gap-2">
<p className="text-2xl font-medium tracking-tight text-gray-900">86</p>
<span className="text-xs font-medium text-gray-500 flex items-center">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
                                2.1%
                            </span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-gray-500">Avg. Attendance</p>
<div className="p-2 bg-gray-50 rounded-lg">
<iconify-icon className="text-gray-700 text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-baseline gap-2">
<p className="text-2xl font-medium tracking-tight text-gray-900">94.8%</p>
<span className="text-xs font-medium text-gray-500 flex items-center">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-down-linear"></iconify-icon>
                                0.3%
                            </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<h2 className="text-base font-medium text-gray-900">Today's Schedule</h2>
<button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">View full</button>
</div>
<div className="overflow-x-auto flex-1">
<table className="min-w-full divide-y divide-gray-100">
<thead className="bg-gray-50/50">
<tr>
<th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Time</th>
<th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Class</th>
<th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Subject</th>
<th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Room</th>
<th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Status</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-500">08:00 - 09:30</td>
<td className="px-5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Grade 10-A</td>
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-600">Advanced Mathematics</td>
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-500">Lab 302</td>
<td className="px-5 py-3 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">Completed</span>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-500">09:45 - 11:15</td>
<td className="px-5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Grade 11-B</td>
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-600">Physics</td>
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-500">Room 104</td>
<td className="px-5 py-3 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-gray-200 text-gray-900 relative">
<span className="absolute -left-1 w-2 h-2 rounded-full bg-gray-900"></span>
<span className="ml-1.5">In Progress</span>
</span>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-500">11:30 - 13:00</td>
<td className="px-5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Grade 9-C</td>
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-600">World History</td>
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-500">Room 201</td>
<td className="px-5 py-3 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-gray-500">Upcoming</span>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-500">14:00 - 15:30</td>
<td className="px-5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Grade 12-A</td>
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-600">Computer Science</td>
<td className="px-5 py-3 whitespace-nowrap text-sm text-gray-500">Lab 405</td>
<td className="px-5 py-3 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-gray-500">Upcoming</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<h2 className="text-base font-medium text-gray-900">Recent Activity</h2>
</div>
<div className="p-5 flex-1 overflow-y-auto">
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-0.5 relative">
<div className="h-8 w-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-8 left-4 bottom-[-24px] w-px bg-gray-100"></div>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Term 1 Results Published</p>
<p className="text-sm text-gray-500 mt-0.5">Grades for all senior classes have been updated.</p>
<p className="text-xs text-gray-400 mt-1">10 minutes ago</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-0.5 relative">
<div className="h-8 w-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="solar:user-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-8 left-4 bottom-[-24px] w-px bg-gray-100"></div>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">New Student Enrollment</p>
<p className="text-sm text-gray-500 mt-0.5">Sarah Jenkins enrolled in Grade 10-A.</p>
<p className="text-xs text-gray-400 mt-1">2 hours ago</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-0.5 relative">
<div className="h-8 w-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="solar:calendar-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-8 left-4 bottom-[-24px] w-px bg-gray-100 hidden"></div>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Staff Meeting Scheduled</p>
<p className="text-sm text-gray-500 mt-0.5">Monthly academic review set for Friday.</p>
<p className="text-xs text-gray-400 mt-1">Yesterday</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<style>
        /* Optional: Hide scrollbar for a cleaner look in the sidebar but keep functionality */
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #f3f4f6;
            border-radius: 20px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
            background-color: #e5e7eb;
        }
    </style>

    </>
  );
}
