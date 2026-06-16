import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Initialize Lucide icons
    lucide.createIcons();

    // Growth Chart
    const growthCtx = document.getElementById('growthChart').getContext('2d');
    new Chart(growthCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Employees',
          data: [1180, 1195, 1210, 1225, 1235, 1247],
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: false,
            grid: { color: '#F1F5F9' },
            ticks: { color: '#64748B', font: { family: 'Inter', size: 12 } }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#64748B', font: { family: 'Inter', size: 12 } }
          }
        }
      }
    });

    // Department Chart
    const deptCtx = document.getElementById('departmentChart').getContext('2d');
    new Chart(deptCtx, {
      type: 'doughnut',
      data: {
        labels: ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance', 'Operations'],
        datasets: [{
          data: [425, 285, 195, 85, 125, 132],
          backgroundColor: [
            '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              color: '#64748B',
              font: { family: 'Inter', size: 12 },
              padding: 15
            }
          }
        },
        cutout: '65%'
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-gray-200 px-6 py-4 animate-fade-in">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="users"></i>
</div>
<h1 className="text-xl font-semibold tracking-tight">HR Dashboard</h1>
</div>
<div className="flex items-center space-x-4">
<button className="relative p-2 text-gray-500 hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
</button>
<div className="flex items-center space-x-3">
<img alt="Profile" className="w-8 h-8 rounded-full border-2 border-gray-200" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div>
<p className="text-sm font-medium">Sarah Johnson</p>
<p className="text-xs text-gray-500">HR Manager</p>
</div>
</div>
</div>
</div>
</header>
<div className="flex">

<aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
<nav className="p-6 space-y-2">
<div className="mb-8">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Main</h2>
<ul className="space-y-1">
<li><a className="flex items-center px-3 py-2 text-sm font-medium bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors" href="#"><i className="w-4 h-4 mr-3" data-lucide="layout-dashboard"></i>Dashboard</a></li>
<li><a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#"><i className="w-4 h-4 mr-3" data-lucide="users"></i>Employees</a></li>
<li><a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#"><i className="w-4 h-4 mr-3" data-lucide="user-plus"></i>Recruitment</a></li>
<li><a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#"><i className="w-4 h-4 mr-3" data-lucide="calendar"></i>Attendance</a></li>
</ul>
</div>
<div className="mb-8">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Management</h2>
<ul className="space-y-1">
<li><a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#"><i className="w-4 h-4 mr-3" data-lucide="dollar-sign"></i>Payroll</a></li>
<li><a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#"><i className="w-4 h-4 mr-3" data-lucide="star"></i>Performance</a></li>
<li><a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#"><i className="w-4 h-4 mr-3" data-lucide="graduation-cap"></i>Training</a></li>
<li><a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#"><i className="w-4 h-4 mr-3" data-lucide="bar-chart-3"></i>Reports</a></li>
</ul>
</div>
<div>
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Settings</h2>
<ul className="space-y-1">
<li><a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#"><i className="w-4 h-4 mr-3" data-lucide="settings"></i>Settings</a></li>
<li><a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#"><i className="w-4 h-4 mr-3" data-lucide="help-circle"></i>Help</a></li>
</ul>
</div>
</nav>
</aside>

<main className="flex-1 p-8">

<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Workforce Overview</h1>
<p className="text-gray-600 mt-1">Monitor your team's performance, attendance, and key metrics</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-600">Total Employees</p>
<p className="text-2xl font-semibold text-gray-900 mt-2">1,247</p>
<p className="text-xs text-green-600 mt-1">↑ 2.1% from last month</p>
</div>
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="users"></i>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-600">Present Today</p>
<p className="text-2xl font-semibold text-gray-900 mt-2">1,189</p>
<p className="text-xs text-green-600 mt-1">95.3% attendance</p>
</div>
<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-green-600" data-lucide="calendar-check"></i>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-600">New Hires</p>
<p className="text-2xl font-semibold text-gray-900 mt-2">28</p>
<p className="text-xs text-blue-600 mt-1">This month</p>
</div>
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-purple-600" data-lucide="user-plus"></i>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-600">Avg Satisfaction</p>
<p className="text-2xl font-semibold text-gray-900 mt-2">4.2/5</p>
<p className="text-xs text-green-600 mt-1">↑ 0.3 from last quarter</p>
</div>
<div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-yellow-600" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-gray-900">Employee Growth</h3>
<div className="flex space-x-2">
<button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">6M</button>
<button className="px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">1Y</button>
</div>
</div>
<div className="h-64">
<canvas id="growthChart"></canvas>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200">
<h3 className="text-lg font-semibold text-gray-900 mb-6">Department Breakdown</h3>
<div className="h-64">
<canvas id="departmentChart"></canvas>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1 bg-white p-6 rounded-xl border border-gray-200">
<h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-green-600" data-lucide="user-plus"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">New employee onboarded</p>
<p className="text-xs text-gray-500">Michael Chen joined Engineering</p>
<p className="text-xs text-gray-400 mt-1">2 hours ago</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-blue-600" data-lucide="calendar"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Training session completed</p>
<p className="text-xs text-gray-500">Security Training - 15 participants</p>
<p className="text-xs text-gray-400 mt-1">4 hours ago</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-yellow-600" data-lucide="star"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Performance review due</p>
<p className="text-xs text-gray-500">Q4 reviews for 12 employees</p>
<p className="text-xs text-gray-400 mt-1">1 day ago</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-gray-900">Top Performers This Month</h3>
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="border-b border-gray-100">
<th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Employee</th>
<th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Department</th>
<th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Rating</th>
<th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Projects</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50">
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-4">
<div className="flex items-center space-x-3">
<img alt="Employee" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium text-gray-900">Emily Rodriguez</p>
<p className="text-xs text-gray-500">Senior Developer</p>
</div>
</div>
</td>
<td className="py-4 text-sm text-gray-600">Engineering</td>
<td className="py-4">
<div className="flex items-center space-x-1">
<span className="text-sm font-medium text-gray-900">4.9</span>
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
</div>
</td>
<td className="py-4 text-sm text-gray-600">8 completed</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-4">
<div className="flex items-center space-x-3">
<img alt="Employee" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div>
<p className="text-sm font-medium text-gray-900">David Kim</p>
<p className="text-xs text-gray-500">Product Manager</p>
</div>
</div>
</td>
<td className="py-4 text-sm text-gray-600">Product</td>
<td className="py-4">
<div className="flex items-center space-x-1">
<span className="text-sm font-medium text-gray-900">4.8</span>
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
</div>
</td>
<td className="py-4 text-sm text-gray-600">6 completed</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-4">
<div className="flex items-center space-x-3">
<img alt="Employee" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div>
<p className="text-sm font-medium text-gray-900">Sarah Wilson</p>
<p className="text-xs text-gray-500">UX Designer</p>
</div>
</div>
</td>
<td className="py-4 text-sm text-gray-600">Design</td>
<td className="py-4">
<div className="flex items-center space-x-1">
<span className="text-sm font-medium text-gray-900">4.7</span>
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
</div>
</td>
<td className="py-4 text-sm text-gray-600">5 completed</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
