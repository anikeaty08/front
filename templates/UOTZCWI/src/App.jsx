import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        // Initialize Lucide icons
        lucide.createIcons();

        // Sidebar toggle
        document.getElementById('sidebarToggle').addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('-translate-x-full');
        });

        // Radar Chart
        const ctx = document.getElementById('radarChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Technical', 'Delivery', 'Human', 'Customer Centricity', 'Culture'],
                    datasets: [{
                        label: 'Current Level',
                        data: [60, 65, 70, 55, 50],
                        backgroundColor: 'rgba(37, 99, 235, 0.2)',
                        borderColor: '#2563eb',
                        borderWidth: 2
                    }, {
                        label: 'Required',
                        data: [80, 80, 80, 80, 80],
                        borderDash: [4, 4],
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        borderColor: '#22c55e',
                        borderWidth: 2
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        r: {
                            angleLines: {
                                color: '#e5e7eb'
                            },
                            grid: {
                                color: '#e5e7eb'
                            },
                            pointLabels: {
                                font: {
                                    size: 11
                                },
                                color: '#6b7280'
                            },
                            ticks: {
                                display: false,
                                min: 0,
                                max: 100,
                                stepSize: 20
                            }
                        }
                    }
                }
            });
        }

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(e) {
            const sidebar = document.getElementById('sidebar');
            const toggle = document.getElementById('sidebarToggle');
            
            if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
                sidebar.classList.add('-translate-x-full');
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
<div className="flex items-center gap-3">
<button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" id="sidebarToggle">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
<span className="text-white font-bold text-sm">CP</span>
</div>
<h1 className="text-xl font-semibold text-gray-900 tracking-tight">ClarityPath</h1>
</div>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="calendar"></i>
                    Schedule 1:1
                </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-emerald-500 text-white rounded-lg hover:brightness-110 transition-all">
<i className="w-4 h-4" data-lucide="check-circle"></i>
                    Start Assessment
                </button>
<button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
<i className="w-5 h-5 text-gray-600" data-lucide="bell"></i>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
</button>
<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-gray-600" data-lucide="user"></i>
</div>
</div>
</div>
</header>
<div className="flex h-screen">

<aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto transform transition-transform duration-300 lg:translate-x-0 -translate-x-full lg:static fixed inset-y-0 z-50 animate-slide-in" id="sidebar">
<nav className="py-4">
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-6 py-3 text-sm font-medium rounded-lg mx-3 bg-blue-50 text-blue-600" href="#">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
                            Dashboard
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg mx-3 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="layers"></i>
                            Career Framework
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg mx-3 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="clipboard-list"></i>
                            Self Assessment
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg mx-3 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="trophy"></i>
                            Brag Document
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg mx-3 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="check-square"></i>
                            Goals &amp; Actions
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg mx-3 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-square"></i>
                            1:1 Conversations
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg mx-3 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="briefcase"></i>
                            Manager Dashboard
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg mx-3 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="award"></i>
                            Performance Reviews
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg mx-3 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
                            Analytics
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg mx-3 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="calendar"></i>
                            Calendar
                        </a>
</li>
</ul>
</nav>
</aside>

<main className="flex-1 overflow-y-auto p-4 lg:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight flex items-center gap-2">
                        Welcome back, John! 
                        <span className="text-2xl">👋</span>
</h1>
<p className="text-gray-600 mt-1">Here's your career progression overview for this week.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
<div className="bg-white rounded-lg border border-gray-200 p-5 card-hover">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-500">Current Level</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-right"></i>
</div>
<div className="text-lg font-semibold text-gray-900">Senior IC</div>
<div className="text-sm text-gray-500">Software Engineering</div>
<div className="text-xs text-emerald-600 font-medium mt-1">+12% skill growth</div>
</div>
<div className="bg-white rounded-lg border border-gray-200 p-5 card-hover">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-500">1:1 Meetings</span>
<i className="w-4 h-4 text-gray-400" data-lucide="message-square"></i>
</div>
<div className="text-lg font-semibold text-gray-900">3</div>
<div className="text-sm text-gray-500">This month</div>
<div className="text-xs text-emerald-600 font-medium mt-1">+50% vs last month</div>
</div>
<div className="bg-white rounded-lg border border-gray-200 p-5 card-hover">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-500">Team Members</span>
<i className="w-4 h-4 text-gray-400" data-lucide="users"></i>
</div>
<div className="text-lg font-semibold text-gray-900">8</div>
<div className="text-sm text-gray-500">Direct reports</div>
</div>
<div className="bg-white rounded-lg border border-gray-200 p-5 card-hover">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-500">Next Review</span>
<i className="w-4 h-4 text-gray-400" data-lucide="clipboard"></i>
</div>
<div className="text-lg font-semibold text-gray-900">6 weeks</div>
<div className="text-sm text-gray-500">Q1 Performance Review</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-in" style={{animationDelay: '0.3s'}}>

<div className="bg-white rounded-lg border border-gray-200 p-6 card-hover">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-blue-600" data-lucide="brain"></i>
<h3 className="font-semibold text-lg text-gray-900">Skill Development</h3>
</div>
<p className="text-sm text-gray-500 mb-4">Skills gaps for next career level</p>
<div className="flex justify-center items-center mb-4">
<div style={{width: '220px', height: '220px'}}>
<canvas height="220" id="radarChart" width="220"></canvas>
</div>
</div>
<p className="text-sm text-gray-500 mb-4">Progress toward Staff Engineer</p>
<button className="flex items-center gap-2 text-sm px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            View Skill Details
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6 card-hover">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-blue-600" data-lucide="clock"></i>
<h3 className="font-semibold text-lg text-gray-900">Recent Activity</h3>
</div>
<p className="text-sm text-gray-500 mb-4">Latest updates and achievements</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="check-circle"></i>
<div>
<p className="text-sm font-medium text-gray-900">Completed Technical Assessment</p>
<span className="text-xs text-gray-500">2 days ago</span>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-0.5" data-lucide="star"></i>
<div>
<p className="text-sm font-medium text-gray-900">Received peer feedback</p>
<span className="text-xs text-gray-500">1 week ago</span>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-600 mt-0.5" data-lucide="message-circle"></i>
<div>
<p className="text-sm font-medium text-gray-900">1:1 with Sarah completed</p>
<span className="text-xs text-gray-500">1 week ago</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6 card-hover">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-blue-600" data-lucide="zap"></i>
<h3 className="font-semibold text-lg text-gray-900">Quick Actions</h3>
</div>
<p className="text-sm text-gray-500 mb-4">Continue your development journey</p>
<div className="space-y-3">
<button className="flex items-center gap-2 w-full text-sm px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="clipboard-check"></i>
                                Update Self Assessment
                            </button>
<button className="flex items-center gap-2 w-full text-sm px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="calendar"></i>
                                Schedule Team 1:1
                            </button>
<button className="flex items-center gap-2 w-full text-sm px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="target"></i>
                                Manage Goals &amp; Actions
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-blue-600" data-lucide="calendar-days"></i>
<h3 className="font-semibold text-lg text-gray-900">Upcoming This Week</h3>
</div>
<p className="text-sm text-gray-500 mb-6">Don't miss these important items</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="border border-gray-200 rounded-lg p-4 bg-white card-hover">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-blue-600" data-lucide="message-square"></i>
<h4 className="font-medium text-gray-900">1:1 with Alex</h4>
</div>
<p className="text-sm text-gray-500 mb-2">Tomorrow, 2:00 PM</p>
<span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">Recurring</span>
</div>
<div className="border border-gray-200 rounded-lg p-4 bg-white card-hover">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-emerald-600" data-lucide="target"></i>
<h4 className="font-medium text-gray-900">Q1 Goal Review</h4>
</div>
<p className="text-sm text-gray-500 mb-2">Friday, 10:00 AM</p>
<span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full">Important</span>
</div>
<div className="border border-gray-200 rounded-lg p-4 bg-white card-hover">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-amber-500" data-lucide="clipboard-list"></i>
<h4 className="font-medium text-gray-900">Skill Assessment Due</h4>
</div>
<p className="text-sm text-gray-500 mb-2">Next Monday</p>
<span className="text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded-full">Deadline</span>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
