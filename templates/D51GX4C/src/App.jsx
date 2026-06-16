import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: {
50: '#EDF2FF',
100: '#BBD0FF',
200: '#7FA7F8',
300: '#4984FF',
400: '#3A6AD1',
500: '#254AA9',
},
success: {
50: '#ECFDF5',
500: '#10B981',
600: '#34D399',
},
warning: {
50: '#FFFEEB',
500: '#F59E0B',
600: '#FBBF24',
},
danger: {
50: '#FEE2E2',
500: '#EF4444',
600: '#F87171',
},
gray: {
50: '#F5F7FA',
100: '#E2E8F0',
300: '#A0AEC0',
500: '#718096',
600: '#4A5568',
900: '#1A202C',
}
}
}
}
}



        // Initialize Lucide icons
        lucide.createIcons();

        // Fade in animation
        function initAnimations() {
            const fadeElements = document.querySelectorAll('.fade-in');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            });

            fadeElements.forEach((el) => {
                observer.observe(el);
            });
        }

        // Modal functions
        function openReportModal(type) {
            const modal = document.getElementById('reportModal');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            // Initialize chart after modal opens
            setTimeout(() => {
                initPerformanceChart();
            }, 100);
        }

        function closeReportModal() {
            const modal = document.getElementById('reportModal');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Performance chart
        function initPerformanceChart() {
            const ctx = document.getElementById('performanceChart');
            if (!ctx) return;

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['0s', '0.5s', '1.0s', '1.5s', '2.0s', '2.5s', '3.0s'],
                    datasets: [{
                        label: 'Load Progress',
                        data: [0, 25, 60, 80, 95, 98, 100],
                        borderColor: '#4984FF',
                        backgroundColor: 'rgba(73, 132, 255, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
        }

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeReportModal();
            }
        });

        // Close modal on backdrop click
        document.getElementById('reportModal').addEventListener('click', (e) => {
            if (e.target.id === 'reportModal') {
                closeReportModal();
            }
        });

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', () => {
            initAnimations();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen overflow-hidden">

<div className="w-64 bg-white border-r border-gray-100 flex flex-col fade-in">

<div className="p-6 border-b border-gray-100">
<div className="flex items-center">
<div className="w-8 h-8 bg-primary-300 rounded-lg flex items-center justify-center mr-3">
<span className="text-white font-bold text-sm tracking-tight">AI</span>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">AuditAI</span>
</div>
</div>

<nav className="flex-1 px-4 py-6 space-y-2">
<a className="sidebar-item flex items-center px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 transition-all duration-200" href="#dashboard">
<i className="w-5 h-5 mr-3" data-lucide="layout-dashboard" style={{strokeWidth: '1.5'}}></i>
                    Dashboard
                </a>
<a className="sidebar-item flex items-center px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 transition-all duration-200" href="#audit-history">
<i className="w-5 h-5 mr-3" data-lucide="history" style={{strokeWidth: '1.5'}}></i>
                    Audit History
                </a>
<a className="sidebar-item flex items-center px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 transition-all duration-200" href="#tasks">
<i className="w-5 h-5 mr-3" data-lucide="check-square" style={{strokeWidth: '1.5'}}></i>
                    Tasks
                </a>
<a className="sidebar-item flex items-center px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 transition-all duration-200" href="#new-audit">
<i className="w-5 h-5 mr-3" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
                    New Audit
                </a>
<a className="sidebar-item flex items-center px-4 py-3 rounded-lg bg-primary-50 text-primary-300 border border-primary-100 transition-all duration-200" href="#reports">
<i className="w-5 h-5 mr-3" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
                    Reports
                </a>
<a className="sidebar-item flex items-center px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 transition-all duration-200" href="#analytics">
<i className="w-5 h-5 mr-3" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
                    Analytics
                </a>
<div className="pt-4 border-t border-gray-100 mt-4">
<a className="sidebar-item flex items-center px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 transition-all duration-200" href="#settings">
<i className="w-5 h-5 mr-3" data-lucide="settings" style={{strokeWidth: '1.5'}}></i>
                        Settings
                    </a>
<a className="sidebar-item flex items-center px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 transition-all duration-200" href="#help">
<i className="w-5 h-5 mr-3" data-lucide="help-circle" style={{strokeWidth: '1.5'}}></i>
                        Help &amp; Support
                    </a>
</div>
</nav>

<div className="p-4 border-t border-gray-100">
<div className="flex items-center">
<img alt="User" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&amp;h=40&amp;fit=crop&amp;crop=face"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">John Smith</p>
<p className="text-xs text-gray-500 truncate">Pro Plan</p>
</div>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden">

<header className="bg-white border-b border-gray-100 px-6 py-4 fade-in">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Reports</h1>
<p className="text-gray-500 text-sm mt-1">Generate comprehensive audit reports and insights</p>
</div>
<div className="flex items-center space-x-4">
<button className="flex items-center px-4 py-2 bg-white border border-gray-100 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200">
<i className="w-4 h-4 mr-2" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
                            Export All
                        </button>
<button className="flex items-center px-4 py-2 bg-primary-300 text-white rounded-lg hover:bg-primary-400 transition-colors duration-200">
<i className="w-4 h-4 mr-2" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
                            New Report
                        </button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6">

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="bg-white rounded-xl border border-gray-100 p-6 fade-in">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-primary-300" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm text-success-500 font-medium">+5 this week</span>
</div>
<div className="text-2xl font-semibold text-gray-900 mb-1">47</div>
<div className="text-sm text-gray-500">Total Reports</div>
</div>
<div className="bg-white rounded-xl border border-gray-100 p-6 fade-in">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-success-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-success-500" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm text-success-500 font-medium">95%</span>
</div>
<div className="text-2xl font-semibold text-gray-900 mb-1">45</div>
<div className="text-sm text-gray-500">Completed</div>
</div>
<div className="bg-white rounded-xl border border-gray-100 p-6 fade-in">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-warning-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-warning-500" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm text-warning-500 font-medium">4%</span>
</div>
<div className="text-2xl font-semibold text-gray-900 mb-1">2</div>
<div className="text-sm text-gray-500">Processing</div>
</div>
<div className="bg-white rounded-xl border border-gray-100 p-6 fade-in">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-gray-500" data-lucide="share" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm text-primary-300 font-medium">+23%</span>
</div>
<div className="text-2xl font-semibold text-gray-900 mb-1">134</div>
<div className="text-sm text-gray-500">Shared</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 fade-in">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
<div className="flex flex-col sm:flex-row gap-4 flex-1">
<div className="relative flex-1 max-w-md">
<i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
<input className="pl-10 pr-4 py-2 w-full border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300" placeholder="Search reports..." type="text"/>
</div>
<select className="px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300">
<option value="">All Types</option>
<option value="performance">Performance</option>
<option value="seo">SEO Analysis</option>
<option value="security">Security Audit</option>
<option value="accessibility">Accessibility</option>
<option value="comprehensive">Comprehensive</option>
</select>
<select className="px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300">
<option value="">All Time</option>
<option value="today">Today</option>
<option value="week">This Week</option>
<option value="month">This Month</option>
<option value="quarter">This Quarter</option>
</select>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center px-3 py-2 text-sm border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4 mr-2" data-lucide="filter" style={{strokeWidth: '1.5'}}></i>
                                Filter
                            </button>
<button className="flex items-center px-3 py-2 text-sm border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4 mr-2" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
                                Date Range
                            </button>
</div>
</div>
</div>

<div className="mb-8 fade-in">
<h2 className="text-lg font-semibold text-gray-900 mb-4">Report Templates</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="report-card bg-white rounded-xl border border-gray-100 p-6 transition-all duration-200 cursor-pointer">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-primary-300" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="px-2 py-1 bg-primary-50 text-primary-300 text-xs font-medium rounded-full">Popular</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Report</h3>
<p className="text-sm text-gray-500 mb-4">Comprehensive analysis of site speed, Core Web Vitals, and optimization opportunities.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">~15 min to generate</span>
<button className="px-3 py-1.5 bg-primary-300 text-white text-sm rounded-lg hover:bg-primary-400 transition-colors">
                                    Generate
                                </button>
</div>
</div>
<div className="report-card bg-white rounded-xl border border-gray-100 p-6 transition-all duration-200 cursor-pointer">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-success-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-success-500" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="px-2 py-1 bg-success-50 text-success-500 text-xs font-medium rounded-full">Trending</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Analysis</h3>
<p className="text-sm text-gray-500 mb-4">In-depth SEO audit with keyword analysis, meta tags review, and search visibility insights.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">~20 min to generate</span>
<button className="px-3 py-1.5 bg-success-500 text-white text-sm rounded-lg hover:bg-success-600 transition-colors">
                                    Generate
                                </button>
</div>
</div>
<div className="report-card bg-white rounded-xl border border-gray-100 p-6 transition-all duration-200 cursor-pointer">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-danger-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-danger-500" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Security Audit</h3>
<p className="text-sm text-gray-500 mb-4">Security vulnerabilities scan, SSL analysis, and protection recommendations.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">~10 min to generate</span>
<button className="px-3 py-1.5 bg-danger-500 text-white text-sm rounded-lg hover:bg-danger-600 transition-colors">
                                    Generate
                                </button>
</div>
</div>
<div className="report-card bg-white rounded-xl border border-gray-100 p-6 transition-all duration-200 cursor-pointer">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-warning-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-warning-500" data-lucide="eye" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility Check</h3>
<p className="text-sm text-gray-500 mb-4">WCAG compliance review, screen reader compatibility, and accessibility improvements.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">~12 min to generate</span>
<button className="px-3 py-1.5 bg-warning-500 text-white text-sm rounded-lg hover:bg-warning-600 transition-colors">
                                    Generate
                                </button>
</div>
</div>
<div className="report-card bg-white rounded-xl border border-gray-100 p-6 transition-all duration-200 cursor-pointer">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-gray-500" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Pro</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Audit</h3>
<p className="text-sm text-gray-500 mb-4">Complete website analysis including all metrics, detailed recommendations, and action plan.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">~45 min to generate</span>
<button className="px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors">
                                    Generate
                                </button>
</div>
</div>
<div className="report-card bg-white rounded-xl border border-gray-100 border-dashed p-6 transition-all duration-200 cursor-pointer flex items-center justify-center">
<div className="text-center">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-gray-500" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Report</h3>
<p className="text-sm text-gray-500">Create a custom report template tailored to your specific needs.</p>
</div>
</div>
</div>
</div>

<div className="fade-in">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold text-gray-900">Recent Reports</h2>
<div className="flex items-center space-x-2">
<button className="p-2 rounded-lg bg-primary-50 text-primary-300 border border-primary-100">
<i className="w-4 h-4" data-lucide="grid-3x3" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 rounded-lg text-gray-500 hover:bg-gray-50 border border-gray-100">
<i className="w-4 h-4" data-lucide="list" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-200">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center">
<div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mr-3">
<i className="w-5 h-5 text-primary-300" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="font-semibold text-gray-900">Performance Report</h3>
<p className="text-sm text-gray-500">example.com • Generated 2 hours ago</p>
</div>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-50 text-success-500">
                                        Completed
                                    </span>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-4">
<div className="text-center">
<div className="text-lg font-semibold text-success-500">94</div>
<div className="text-xs text-gray-500">Performance</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-primary-300">2.1s</div>
<div className="text-xs text-gray-500">Load Time</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-warning-500">5</div>
<div className="text-xs text-gray-500">Issues</div>
</div>
</div>

<div className="flex gap-2 pt-4 border-t border-gray-100">
<button className="flex-1 px-3 py-2 text-sm bg-primary-50 text-primary-300 rounded-lg hover:bg-primary-100 transition-colors" onclick="openReportModal('performance')">
                                    View Report
                                </button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="share" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-200">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center">
<div className="w-10 h-10 bg-success-50 rounded-lg flex items-center justify-center mr-3">
<i className="w-5 h-5 text-success-500" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="font-semibold text-gray-900">SEO Analysis</h3>
<p className="text-sm text-gray-500">mystore.com • Generated 4 hours ago</p>
</div>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-50 text-success-500">
                                        Completed
                                    </span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-4">
<div className="text-center">
<div className="text-lg font-semibold text-warning-500">76</div>
<div className="text-xs text-gray-500">SEO Score</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-success-500">23</div>
<div className="text-xs text-gray-500">Keywords</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-danger-500">12</div>
<div className="text-xs text-gray-500">Issues</div>
</div>
</div>
<div className="flex gap-2 pt-4 border-t border-gray-100">
<button className="flex-1 px-3 py-2 text-sm bg-success-50 text-success-500 rounded-lg hover:bg-success-100 transition-colors" onclick="openReportModal('seo')">
                                    View Report
                                </button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="share" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-200">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center">
<div className="w-10 h-10 bg-danger-50 rounded-lg flex items-center justify-center mr-3">
<i className="w-5 h-5 text-danger-500" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="font-semibold text-gray-900">Security Audit</h3>
<p className="text-sm text-gray-500">techsite.com • Generated 1 day ago</p>
</div>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning-50 text-warning-500">
                                        Processing
                                    </span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-4">
<div className="text-center">
<div className="text-lg font-semibold text-success-500">98</div>
<div className="text-xs text-gray-500">Security Score</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-success-500">A+</div>
<div className="text-xs text-gray-500">SSL Rating</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-success-500">2</div>
<div className="text-xs text-gray-500">Warnings</div>
</div>
</div>
<div className="flex gap-2 pt-4 border-t border-gray-100">
<button className="flex-1 px-3 py-2 text-sm bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed">
                                    Processing...
                                </button>
<button className="p-2 text-gray-400 cursor-not-allowed rounded-lg">
<i className="w-4 h-4" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 text-gray-400 cursor-not-allowed rounded-lg">
<i className="w-4 h-4" data-lucide="share" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-200">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center">
<div className="w-10 h-10 bg-warning-50 rounded-lg flex items-center justify-center mr-3">
<i className="w-5 h-5 text-warning-500" data-lucide="eye" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="font-semibold text-gray-900">Accessibility Check</h3>
<p className="text-sm text-gray-500">portfolio.dev • Generated 3 days ago</p>
</div>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-50 text-success-500">
                                        Completed
                                    </span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-4">
<div className="text-center">
<div className="text-lg font-semibold text-warning-500">82</div>
<div className="text-xs text-gray-500">Accessibility</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-success-500">AA</div>
<div className="text-xs text-gray-500">WCAG Level</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-danger-500">8</div>
<div className="text-xs text-gray-500">Issues</div>
</div>
</div>
<div className="flex gap-2 pt-4 border-t border-gray-100">
<button className="flex-1 px-3 py-2 text-sm bg-warning-50 text-warning-500 rounded-lg hover:bg-warning-100 transition-colors" onclick="openReportModal('accessibility')">
                                    View Report
                                </button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="share" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

<div className="fixed inset-0 z-50 hidden overflow-y-auto modal-backdrop bg-black bg-opacity-50" id="reportModal">
<div className="flex min-h-screen items-center justify-center p-4">
<div className="modal-enter bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">

<div className="flex items-center justify-between p-6 border-b border-gray-100">
<div className="flex items-center">
<div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mr-3">
<i className="w-5 h-5 text-primary-300" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h2 className="text-xl font-semibold text-gray-900">Performance Report</h2>
<p className="text-sm text-gray-500">example.com • Generated 2 hours ago</p>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="share" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors" onclick="closeReportModal()">
<i className="w-5 h-5" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="text-center">
<div className="relative w-24 h-24 mx-auto mb-3">
<svg className="w-24 h-24 transform -rotate-90">
<circle cx="48" cy="48" fill="none" r="40" stroke="#E2E8F0" strokeWidth="8"></circle>
<circle className="transition-all duration-1000" cx="48" cy="48" fill="none" r="40" stroke="#10B981" stroke-dasharray="251.2" stroke-dashoffset="15.072" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-2xl font-bold text-success-500">94</span>
</div>
</div>
<div className="font-medium text-gray-900">Performance Score</div>
<div className="text-sm text-gray-500">Excellent</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-primary-300 mb-2">2.1s</div>
<div className="font-medium text-gray-900">Load Time</div>
<div className="text-sm text-success-500">Good</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-success-500 mb-2">0.8s</div>
<div className="font-medium text-gray-900">First Paint</div>
<div className="text-sm text-success-500">Excellent</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-warning-500 mb-2">5</div>
<div className="font-medium text-gray-900">Issues Found</div>
<div className="text-sm text-warning-500">Needs attention</div>
</div>
</div>

<div className="bg-gray-50 rounded-xl p-6 mb-8">
<h3 className="text-lg font-semibold text-gray-900 mb-4">Core Web Vitals</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white rounded-lg p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-600">Largest Contentful Paint</span>
<span className="px-2 py-1 bg-success-50 text-success-500 text-xs font-medium rounded-full">Good</span>
</div>
<div className="text-2xl font-bold text-gray-900">1.2s</div>
<div className="text-xs text-gray-500 mt-1">Target: &lt; 2.5s</div>
</div>
<div className="bg-white rounded-lg p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-600">First Input Delay</span>
<span className="px-2 py-1 bg-success-50 text-success-500 text-xs font-medium rounded-full">Good</span>
</div>
<div className="text-2xl font-bold text-gray-900">45ms</div>
<div className="text-xs text-gray-500 mt-1">Target: &lt; 100ms</div>
</div>
<div className="bg-white rounded-lg p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-600">Cumulative Layout Shift</span>
<span className="px-2 py-1 bg-warning-50 text-warning-500 text-xs font-medium rounded-full">Needs Improvement</span>
</div>
<div className="text-2xl font-bold text-gray-900">0.15</div>
<div className="text-xs text-gray-500 mt-1">Target: &lt; 0.1</div>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-lg font-semibold text-gray-900 mb-4">Issues &amp; Recommendations</h3>
<div className="space-y-4">
<div className="bg-white border border-gray-100 rounded-lg p-4">
<div className="flex items-start">
<div className="w-8 h-8 bg-danger-50 rounded-lg flex items-center justify-center mr-3 mt-1">
<i className="w-4 h-4 text-danger-500" data-lucide="alert-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<h4 className="font-semibold text-gray-900 mb-1">Optimize Images</h4>
<p className="text-sm text-gray-600 mb-3">Large images are significantly impacting your page load time. Consider using modern formats like WebP.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Impact: High • Time to fix: 30 minutes</span>
<span className="px-2 py-1 bg-danger-50 text-danger-500 text-xs font-medium rounded-full">Critical</span>
</div>
</div>
</div>
</div>
<div className="bg-white border border-gray-100 rounded-lg p-4">
<div className="flex items-start">
<div className="w-8 h-8 bg-warning-50 rounded-lg flex items-center justify-center mr-3 mt-1">
<i className="w-4 h-4 text-warning-500" data-lucide="alert-triangle" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<h4 className="font-semibold text-gray-900 mb-1">Minimize JavaScript</h4>
<p className="text-sm text-gray-600 mb-3">Remove unused JavaScript to improve load performance and reduce bundle size.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Impact: Medium • Time to fix: 2 hours</span>
<span className="px-2 py-1 bg-warning-50 text-warning-500 text-xs font-medium rounded-full">Warning</span>
</div>
</div>
</div>
</div>
<div className="bg-white border border-gray-100 rounded-lg p-4">
<div className="flex items-start">
<div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center mr-3 mt-1">
<i className="w-4 h-4 text-primary-300" data-lucide="info" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<h4 className="font-semibold text-gray-900 mb-1">Enable Text Compression</h4>
<p className="text-sm text-gray-600 mb-3">Enable gzip or brotli compression to reduce the size of text-based resources.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Impact: Low • Time to fix: 15 minutes</span>
<span className="px-2 py-1 bg-primary-50 text-primary-300 text-xs font-medium rounded-full">Info</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Timeline</h3>
<div className="bg-gray-50 rounded-xl p-6">
<canvas height="200" id="performanceChart" width="400"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
