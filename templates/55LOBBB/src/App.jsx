import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Sidebar toggle
    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('hidden');
    }
    // Pie Chart on load
    window.addEventListener('DOMContentLoaded', () => {
      if(document.getElementById('pie')){
        new Chart(document.getElementById('pie'), {
          type: 'pie',
          data: {
            labels: ['Completed', 'In Progress', 'Pending'],
            datasets: [{
              data: [12, 8, 5],
              backgroundColor: ['#34d399', '#60a5fa', '#fbbf24'],
              borderWidth: 0,
            }]
          },
          options: {responsive:true, plugins:{legend:{display:false}}}
        });
      }
      if(document.getElementById('sales')){
        new Chart(document.getElementById('sales'), {
          type: 'bar',
          data: {
            labels: ['Prospect', 'Contacted', 'Demo', 'Closed'],
            datasets: [{
              label: 'Deals',
              data: [8, 5, 3, 2],
              backgroundColor: ['#fbbf24','#60a5fa','#a78bfa','#34d399']
            }]
          },
          options: {responsive:true, plugins:{legend:{display:false}}, scales:{y:{beginAtZero:true}}}
        });
      }
    });
  

feather.replace()
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm sticky top-0 z-30">
<div className="flex items-center gap-4">
<button className="md:hidden p-2 rounded hover:bg-gray-100" onclick="toggleSidebar()">
<i data-feather="menu"></i>
</button>
<img alt="Logo" className="w-8 h-8" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c8.svg"/>
<span className="text-xl font-semibold tracking-tight text-gray-800">MyCRM</span>
</div>
<ul className="hidden md:flex items-center gap-8 font-medium text-gray-600">
<li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
<li className="hover:text-blue-600 cursor-pointer">Projects</li>
<li className="hover:text-blue-600 cursor-pointer">Tasks</li>
<li className="hover:text-blue-600 cursor-pointer">Clients</li>
<li className="hover:text-blue-600 cursor-pointer">Activities</li>
</ul>
<div className="flex items-center gap-3">
<button className="rounded-full p-2 hover:bg-gray-100">
<i data-feather="bell"></i>
</button>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-blue-500" src="https://randomuser.me/api/portraits/men/75.jpg"/>
</div>
</nav>

<div className="fixed inset-y-0 left-0 w-56 bg-white border-r z-40 p-6 space-y-6 shadow-lg md:hidden hidden" id="sidebar">
<button className="absolute top-3 right-3 p-2 rounded hover:bg-gray-100" onclick="toggleSidebar()">
<i data-feather="x"></i>
</button>
<ul className="flex flex-col gap-6 text-gray-700 font-medium">
<li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
<li className="hover:text-blue-600 cursor-pointer">Projects</li>
<li className="hover:text-blue-600 cursor-pointer">Tasks</li>
<li className="hover:text-blue-600 cursor-pointer">Clients</li>
<li className="hover:text-blue-600 cursor-pointer">Activities</li>
</ul>
</div>

<main className="max-w-7xl mx-auto px-4 py-6">

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
<div>
<h1 className="text-2xl font-bold text-gray-800 mb-1">My CRM Workspace</h1>
<p className="text-gray-500">Welcome back! Here's your workspace overview.</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<input className="rounded border px-3 py-2 text-sm text-gray-700 focus:ring-blue-200 focus:border-blue-400" type="date" value="2024-06-10"/>
<input className="rounded border px-3 py-2 text-sm text-gray-700 focus:ring-blue-200 focus:border-blue-400" type="date" value="2024-06-17"/>
<div className="relative">
<input className="pl-9 pr-3 py-2 rounded border text-sm focus:ring-blue-200 focus:border-blue-400" placeholder="Search..." type="text"/>
<span className="absolute left-2 top-2 text-gray-400"><i className="w-5 h-5" data-feather="search"></i></span>
</div>
</div>
</div>

<div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

<div className="bg-white rounded-2xl shadow p-5 flex flex-col items-center">
<div className="w-full flex items-center justify-between mb-3">
<h2 className="font-semibold text-gray-700 text-lg">Task Summary</h2>
<i className="text-blue-400" data-feather="pie-chart"></i>
</div>
<canvas height="120" id="pie" width="120"></canvas>
<div className="flex justify-between w-full mt-4 text-xs">
<span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-400 rounded-full"></span>Completed</span>
<span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-400 rounded-full"></span>In Progress</span>
<span className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-400 rounded-full"></span>Pending</span>
</div>
</div>

<div className="bg-white rounded-2xl shadow p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<h2 className="font-semibold text-gray-700 text-lg">Active Projects</h2>
<i className="text-blue-400" data-feather="folder"></i>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<span className="w-2.5 h-2.5 bg-blue-400 rounded-full"></span>
<span className="font-medium text-gray-800">Website Redesign</span>
<span className="text-xs bg-blue-100 text-blue-600 px-2 rounded-full ml-auto">In Progress</span>
</li>
<li className="flex items-center gap-3">
<span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
<span className="font-medium text-gray-800">CRM Migration</span>
<span className="text-xs bg-green-100 text-green-600 px-2 rounded-full ml-auto">Completed</span>
</li>
<li className="flex items-center gap-3">
<span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
<span className="font-medium text-gray-800">Mobile App Launch</span>
<span className="text-xs bg-yellow-100 text-yellow-600 px-2 rounded-full ml-auto">Pending</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl shadow p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<h2 className="font-semibold text-gray-700 text-lg">This Week</h2>
<i className="text-blue-400" data-feather="calendar"></i>
</div>
<div className="flex justify-between items-center gap-2">
<div className="flex flex-col items-center gap-1">
<span className="text-xs text-gray-500">Mon</span>
<span className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 bg-blue-50 font-semibold">10</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-xs text-gray-500">Tue</span>
<span className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700">11</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-xs text-gray-500">Wed</span>
<span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-blue-500 font-semibold">12</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-xs text-gray-500">Thu</span>
<span className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700">13</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-xs text-gray-500">Fri</span>
<span className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700">14</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-xs text-gray-500">Sat</span>
<span className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700">15</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-xs text-gray-500">Sun</span>
<span className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700">16</span>
</div>
</div>
<div className="mt-4 text-xs text-gray-500">Upcoming: <span className="font-semibold text-blue-500">Client Demo</span> on Wed</div>
</div>

<div className="bg-white rounded-2xl shadow p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<h2 className="font-semibold text-gray-700 text-lg">Sales Pipeline</h2>
<i className="text-blue-400" data-feather="bar-chart-2"></i>
</div>
<canvas height="80" id="sales"></canvas>
</div>
</div>

<div className="bg-white rounded-2xl shadow p-5 mb-6 flex flex-col md:flex-row items-center gap-6">
<div className="flex -space-x-4">
<img className="w-10 h-10 rounded-full border-2 border-white shadow" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<img className="w-10 h-10 rounded-full border-2 border-white shadow" src="https://randomuser.me/api/portraits/men/23.jpg"/>
<img className="w-10 h-10 rounded-full border-2 border-white shadow" src="https://randomuser.me/api/portraits/men/34.jpg"/>
<img className="w-10 h-10 rounded-full border-2 border-white shadow" src="https://randomuser.me/api/portraits/women/55.jpg"/>
<span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500 border-2 border-white shadow">+2</span>
</div>
<div className="flex-1 flex flex-wrap justify-around gap-4 text-center">
<div>
<div className="text-lg font-bold text-blue-500">24</div>
<div className="text-xs text-gray-500">Tasks Today</div>
</div>
<div>
<div className="text-lg font-bold text-green-500">5</div>
<div className="text-xs text-gray-500">Projects Active</div>
</div>
<div>
<div className="text-lg font-bold text-yellow-500">12</div>
<div className="text-xs text-gray-500">Comments</div>
</div>
<div>
<div className="text-lg font-bold text-purple-500">14h</div>
<div className="text-xs text-gray-500">Time Logged</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow overflow-x-auto">
<table className="min-w-full divide-y divide-gray-100">
<thead>
<tr className="text-xs text-gray-500 uppercase bg-gray-50">
<th className="px-6 py-3 text-left">Task Name</th>
<th className="px-6 py-3 text-left">Assignee</th>
<th className="px-6 py-3 text-left">Status</th>
<th className="px-6 py-3 text-left">Priority</th>
<th className="px-6 py-3 text-left">Due Date</th>
<th className="px-6 py-3 text-left">Progress</th>
<th className="px-6 py-3 text-center"><i className="inline w-4 h-4" data-feather="message-circle"></i></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr>
<td className="px-6 py-4 font-medium text-gray-800">Design Landing Page</td>
<td className="px-6 py-4"><img className="w-7 h-7 rounded-full inline-block" src="https://randomuser.me/api/portraits/women/44.jpg"/></td>
<td className="px-6 py-4">
<select className="rounded bg-blue-100 text-blue-700 px-2 py-1 text-xs">
<option>In Progress</option>
<option>Completed</option>
<option>Pending</option>
</select>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-600">High</span></td>
<td className="px-6 py-4 text-gray-600">2024-06-14</td>
<td className="px-6 py-4">
<div className="w-24 bg-gray-200 rounded-full h-2">
<div className="bg-blue-500 h-2 rounded-full" style={{width: '70%'}}></div>
</div>
</td>
<td className="px-6 py-4 text-center">
<button className="hover:bg-gray-100 rounded-full p-1"><i className="w-4 h-4 text-gray-400" data-feather="message-circle"></i></button>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-gray-800">Backend API Integration</td>
<td className="px-6 py-4"><img className="w-7 h-7 rounded-full inline-block" src="https://randomuser.me/api/portraits/men/23.jpg"/></td>
<td className="px-6 py-4">
<select className="rounded bg-green-100 text-green-700 px-2 py-1 text-xs">
<option>Completed</option>
<option>In Progress</option>
<option>Pending</option>
</select>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-600">Medium</span></td>
<td className="px-6 py-4 text-gray-600">2024-06-12</td>
<td className="px-6 py-4">
<div className="w-24 bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
</div>
</td>
<td className="px-6 py-4 text-center">
<button className="hover:bg-gray-100 rounded-full p-1"><i className="w-4 h-4 text-gray-400" data-feather="message-circle"></i></button>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-gray-800">Client Feedback Review</td>
<td className="px-6 py-4"><img className="w-7 h-7 rounded-full inline-block" src="https://randomuser.me/api/portraits/men/34.jpg"/></td>
<td className="px-6 py-4">
<select className="rounded bg-yellow-100 text-yellow-700 px-2 py-1 text-xs">
<option>Pending</option>
<option>In Progress</option>
<option>Completed</option>
</select>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600">Low</span></td>
<td className="px-6 py-4 text-gray-600">2024-06-17</td>
<td className="px-6 py-4">
<div className="w-24 bg-gray-200 rounded-full h-2">
<div className="bg-yellow-400 h-2 rounded-full" style={{width: '20%'}}></div>
</div>
</td>
<td className="px-6 py-4 text-center">
<button className="hover:bg-gray-100 rounded-full p-1"><i className="w-4 h-4 text-gray-400" data-feather="message-circle"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</main>


    </>
  );
}
