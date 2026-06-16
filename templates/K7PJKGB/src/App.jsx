import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            primary: '#4984FF',
                            light: '#EBF2FF',
                            dark: '#3570F4'
                        }
                    }
                }
            }
        }

        function showModal(id) {
            document.getElementById(id).classList.remove('hidden');
        }

        function hideModal(id) {
            document.getElementById(id).classList.add('hidden');
        }

        function copyToClipboard(text) {
            navigator.clipboard.writeText(text);
            const toast = document.createElement('div');
            toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md z-50';
            toast.textContent = 'Copied to clipboard!';
            document.body.appendChild(toast);
            setTimeout(() => document.body.removeChild(toast), 2000);
        }

        function initCharts() {
            // Overall Score Chart
            const ctx1 = document.getElementById('overallScoreChart').getContext('2d');
            new Chart(ctx1, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [67, 33],
                        backgroundColor: ['#4984FF', '#E5E7EB'],
                        borderWidth: 0
                    }]
                },
                options: {
                    cutout: '70%',
                    plugins: { legend: { display: false } }
                }
            });

            // Category Scores Chart
            const ctx2 = document.getElementById('categoryChart').getContext('2d');
            new Chart(ctx2, {
                type: 'radar',
                data: {
                    labels: ['SEO', 'Performance', 'Design', 'Content', 'Security', 'Accessibility'],
                    datasets: [{
                        data: [45, 78, 62, 41, 89, 56],
                        backgroundColor: 'rgba(73, 132, 255, 0.2)',
                        borderColor: '#4984FF',
                        borderWidth: 2,
                        pointBackgroundColor: '#4984FF'
                    }]
                },
                options: {
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100,
                            ticks: { display: false },
                            grid: { color: '#E5E7EB' }
                        }
                    },
                    plugins: { legend: { display: false } }
                }
            });

            // Performance Trend Chart
            const ctx3 = document.getElementById('trendChart').getContext('2d');
            new Chart(ctx3, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        data: [45, 52, 48, 61, 58, 67],
                        borderColor: '#4984FF',
                        backgroundColor: 'rgba(73, 132, 255, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, max: 100 }
                    }
                }
            });
        }

        function expandCard(id) {
            const card = document.getElementById(id);
            const content = card.querySelector('.expandable-content');
            const button = card.querySelector('.expand-btn');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                button.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
            } else {
                content.classList.add('hidden');
                button.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
            }
        }

        window.onload = initCharts;
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen overflow-hidden">

<aside className="hidden md:flex md:flex-shrink-0">
<div className="flex flex-col w-64 bg-white border-r border-gray-200 shadow-sm">
<div className="flex items-center justify-center h-16 px-4 border-b border-gray-100">
<span className="text-xl font-bold text-brand-primary">AuditPro</span>
</div>
<div className="flex flex-col flex-1 overflow-y-auto">
<nav className="flex-1 px-2 py-4 space-y-1">
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="dashboard.html">
<i className="fa-solid fa-gauge-high mr-3"></i>
<span>Dashboard</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="all-audits.html">
<i className="fa-solid fa-list-check mr-3"></i>
<span>All Audits</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="new-audit.html">
<i className="fa-solid fa-plus mr-3"></i>
<span>New Audit</span>
</a>
<a className="flex items-center px-4 py-3 bg-brand-light text-brand-primary rounded-md" href="audit-results.html">
<i className="fa-solid fa-chart-simple mr-3"></i>
<span>Audit Results</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="report-generator.html">
<i className="fa-solid fa-file-lines mr-3"></i>
<span>Report Generator</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="white-label.html">
<i className="fa-solid fa-tag mr-3"></i>
<span>White Label Settings</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="tasks.html">
<i className="fa-solid fa-list-check mr-3"></i>
<span>Tasks</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="team.html">
<i className="fa-solid fa-users mr-3"></i>
<span>Team</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="billing.html">
<i className="fa-solid fa-credit-card mr-3"></i>
<span>Billing</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="settings.html">
<i className="fa-solid fa-gear mr-3"></i>
<span>Settings</span>
</a>
</nav>
</div>
</div>
</aside>
<div className="flex flex-col flex-1 overflow-hidden">

<header className="w-full">
<div className="relative z-10 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm">
<div className="flex items-center">
<button className="mr-4 p-2 text-gray-500 hover:text-gray-700 rounded-md" onclick="history.back()">
<i className="fa-solid fa-arrow-left"></i>
</button>
<div>
<h1 className="text-lg font-medium text-gray-900">Audit Results - Overview</h1>
<p className="text-sm text-gray-500">https://example.com/ • Analyzed 2 hours ago</p>
</div>
<span className="ml-3 px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-800">Score: 67</span>
</div>
<div className="flex items-center space-x-3">
<button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50" onclick="showModal('share-modal')">
<i className="fa-solid fa-share mr-2"></i>
                            Share Report
                        </button>
<button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50" onclick="showModal('export-modal')">
<i className="fa-solid fa-download mr-2"></i>
                            Export PDF
                        </button>
<button className="flex items-center px-3 py-2 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-brand-dark">
<i className="fa-solid fa-rotate mr-2"></i>
                            Re-run Audit
                        </button>
</div>
</div>
</header>

<div className="bg-white border-b border-gray-200">
<nav className="px-4 sm:px-6 lg:px-8">
<div className="flex space-x-8">
<a className="border-b-2 border-brand-primary text-brand-primary py-4 px-1 text-sm font-medium" href="#">
                            Overview
                        </a>
<a className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-sm font-medium" href="#">
                            SEO Analysis
                        </a>
<a className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-sm font-medium" href="#">
                            Performance
                        </a>
<a className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-sm font-medium" href="#">
                            Design &amp; UX
                        </a>
<a className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-sm font-medium" href="#">
                            Content Analysis
                        </a>
<a className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-sm font-medium" href="#">
                            Security
                        </a>
<a className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-sm font-medium" href="#">
                            Accessibility
                        </a>
</div>
</nav>
</div>

<main className="flex-1 overflow-y-auto">
<div className="px-4 py-6 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">

<div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
<div className="px-6 py-5">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="text-center">
<div className="relative w-32 h-32 mx-auto mb-4">
<canvas id="overallScoreChart"></canvas>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="text-3xl font-bold text-gray-900">67</div>
<div className="text-sm text-gray-500">Overall Score</div>
</div>
</div>
</div>
<p className="text-sm text-gray-600">Needs Improvement</p>
<div className="mt-2 text-xs text-gray-500">
                                            Previous: 61 (+6 improvement)
                                        </div>
</div>

<div className="lg:col-span-2">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="text-center p-4 bg-red-50 rounded-lg">
<div className="w-8 h-8 bg-red-100 rounded-full mx-auto flex items-center justify-center mb-2">
<i className="fa-solid fa-exclamation-triangle text-red-600 text-sm"></i>
</div>
<div className="text-2xl font-bold text-gray-900">12</div>
<div className="text-sm text-gray-600">Critical Issues</div>
</div>
<div className="text-center p-4 bg-yellow-50 rounded-lg">
<div className="w-8 h-8 bg-yellow-100 rounded-full mx-auto flex items-center justify-center mb-2">
<i className="fa-solid fa-exclamation-circle text-yellow-600 text-sm"></i>
</div>
<div className="text-2xl font-bold text-gray-900">8</div>
<div className="text-sm text-gray-600">Warnings</div>
</div>
<div className="text-center p-4 bg-green-50 rounded-lg">
<div className="w-8 h-8 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
<i className="fa-solid fa-check-circle text-green-600 text-sm"></i>
</div>
<div className="text-2xl font-bold text-gray-900">15</div>
<div className="text-sm text-gray-600">Passed Tests</div>
</div>
<div className="text-center p-4 bg-blue-50 rounded-lg">
<div className="w-8 h-8 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-2">
<i className="fa-solid fa-lightbulb text-blue-600 text-sm"></i>
</div>
<div className="text-2xl font-bold text-gray-900">23</div>
<div className="text-sm text-gray-600">Recommendations</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

<div className="bg-white rounded-lg shadow-sm border border-gray-200">
<div className="px-6 py-4 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Score Breakdown</h3>
</div>
<div className="p-6">
<div className="flex justify-center mb-6">
<div className="w-64 h-64">
<canvas id="categoryChart"></canvas>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
<span className="text-sm text-gray-700">SEO</span>
</div>
<span className="text-sm font-medium text-gray-900">45/100</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
<span className="text-sm text-gray-700">Performance</span>
</div>
<span className="text-sm font-medium text-gray-900">78/100</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
<span className="text-sm text-gray-700">Design &amp; UX</span>
</div>
<span className="text-sm font-medium text-gray-900">62/100</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
<span className="text-sm text-gray-700">Content</span>
</div>
<span className="text-sm font-medium text-gray-900">41/100</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
<span className="text-sm text-gray-700">Security</span>
</div>
<span className="text-sm font-medium text-gray-900">89/100</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
<span className="text-sm text-gray-700">Accessibility</span>
</div>
<span className="text-sm font-medium text-gray-900">56/100</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-200">
<div className="px-6 py-4 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Performance Trend</h3>
<p className="text-sm text-gray-500">Overall score over time</p>
</div>
<div className="p-6">
<canvas className="w-full h-64" id="trendChart"></canvas>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
<div className="px-6 py-4 border-b border-gray-200">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-gray-900">Priority Issues</h3>
<span className="text-sm text-gray-500">Issues requiring immediate attention</span>
</div>
</div>
<div className="divide-y divide-gray-200">

<div className="p-6" id="issue-1">
<div className="flex items-start justify-between">
<div className="flex items-start">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-exclamation-triangle text-red-600 text-sm"></i>
</div>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center">
<h4 className="text-base font-medium text-gray-900">Missing Meta Description</h4>
<span className="ml-2 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Critical</span>
<span className="ml-2 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">SEO</span>
</div>
<p className="mt-1 text-sm text-gray-600">Your homepage is missing a meta description, which is crucial for search engine rankings and click-through rates.</p>
<div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
<span><i className="fa-solid fa-clock mr-1"></i>Est. fix: 5 min</span>
<span><i className="fa-solid fa-trending-up mr-1"></i>Impact: High</span>
</div>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="expand-btn p-2 text-gray-400 hover:text-gray-600" onclick="expandCard('issue-1')">
<i className="fa-solid fa-chevron-down"></i>
</button>
</div>
</div>
<div className="expandable-content hidden mt-4 ml-12">
<div className="bg-gray-50 rounded-lg p-4">
<h5 className="text-sm font-medium text-gray-900 mb-2">Recommended Action:</h5>
<p className="text-sm text-gray-700 mb-3">Add a compelling meta description (150-160 characters) that summarizes your page content and includes your target keywords.</p>
<div className="bg-white rounded border p-3">
<p className="text-sm font-mono text-gray-800">&lt;meta name="description" content="Professional website audit tool that analyzes SEO, performance, and user experience. Get actionable insights to improve your online presence."&gt;</p>
</div>
<div className="mt-3 flex items-center space-x-3">
<button className="text-sm text-brand-primary hover:text-brand-dark" onclick="copyToClipboard('Professional website audit tool that analyzes SEO, performance, and user experience. Get actionable insights to improve your online presence.')">
<i className="fa-solid fa-copy mr-1"></i>Copy Code
                                                </button>
<button className="text-sm text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-plus mr-1"></i>Create Task
                                                </button>
</div>
</div>
</div>
</div>

<div className="p-6" id="issue-2">
<div className="flex items-start justify-between">
<div className="flex items-start">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-image text-red-600 text-sm"></i>
</div>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center">
<h4 className="text-base font-medium text-gray-900">Large Unoptimized Images</h4>
<span className="ml-2 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Critical</span>
<span className="ml-2 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Performance</span>
</div>
<p className="mt-1 text-sm text-gray-600">Found 8 images over 1MB that are significantly slowing down page load times.</p>
<div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
<span><i className="fa-solid fa-clock mr-1"></i>Est. fix: 30 min</span>
<span><i className="fa-solid fa-trending-up mr-1"></i>Impact: High</span>
</div>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="expand-btn p-2 text-gray-400 hover:text-gray-600" onclick="expandCard('issue-2')">
<i className="fa-solid fa-chevron-down"></i>
</button>
</div>
</div>
<div className="expandable-content hidden mt-4 ml-12">
<div className="bg-gray-50 rounded-lg p-4">
<h5 className="text-sm font-medium text-gray-900 mb-2">Affected Images:</h5>
<div className="space-y-2 mb-3">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-700">hero-banner.jpg</span>
<span className="text-red-600 font-medium">2.3 MB</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-700">product-showcase.png</span>
<span className="text-red-600 font-medium">1.8 MB</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-700">team-photo.jpg</span>
<span className="text-red-600 font-medium">1.5 MB</span>
</div>
</div>
<p className="text-sm text-gray-700 mb-3">Recommended: Compress images to under 200KB each and convert to WebP format for 60-80% file size reduction.</p>
<div className="flex items-center space-x-3">
<button className="text-sm text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-external-link mr-1"></i>View All Images
                                                </button>
<button className="text-sm text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-plus mr-1"></i>Create Task
                                                </button>
</div>
</div>
</div>
</div>

<div className="p-6" id="issue-3">
<div className="flex items-start justify-between">
<div className="flex items-start">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-exclamation-circle text-yellow-600 text-sm"></i>
</div>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center">
<h4 className="text-base font-medium text-gray-900">Low Color Contrast</h4>
<span className="ml-2 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Warning</span>
<span className="ml-2 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Accessibility</span>
</div>
<p className="mt-1 text-sm text-gray-600">Some text elements have insufficient color contrast, affecting readability for users with</p></div></div></div></div></div></div></div></div></main></div></div>
    </>
  );
}
