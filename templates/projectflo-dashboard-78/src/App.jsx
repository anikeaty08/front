import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
'mono': ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({ strokeWidth: 1.5 });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="fixed left-0 top-0 h-full w-64 bg-canvas border-r border-gray-200 z-50 fade-in">
<div className="p-6">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tight">PF</span>
</div>
<span className="font-semibold text-gray-900 tracking-tight">ProjectFlow</span>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-700 border border-blue-200 transition-colors" href="#dashboard">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover-bg text-gray-700 transition-colors" href="#projects">
<i className="w-4 h-4" data-lucide="folder"></i>
<span className="text-sm font-medium">Projects</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover-bg text-gray-700 transition-colors" href="#clients">
<i className="w-4 h-4" data-lucide="users"></i>
<span className="text-sm font-medium">Clients</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover-bg text-gray-700 transition-colors" href="#tasks">
<i className="w-4 h-4" data-lucide="check-square"></i>
<span className="text-sm font-medium">Tasks</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover-bg text-gray-700 transition-colors" href="#calendar">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span className="text-sm font-medium">Calendar</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover-bg text-gray-700 transition-colors" href="#reports">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i>
<span className="text-sm font-medium">Reports</span>
</a>
</nav>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-card p-3 rounded-md">
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Alex Chen</p>
<p className="text-xs text-gray-500">Project Manager</p>
</div>
<button className="p-1 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4 text-gray-500" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
</aside>

<main className="ml-64 min-h-screen bg-canvas">

<header className="bg-white border-b border-gray-200 p-6 slide-up delay-200">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Dashboard</h1>
<p className="text-gray-600 text-sm mt-1">Manage your website projects efficiently</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm font-medium">
<i className="w-4 h-4" data-lucide="plus"></i>
                        New Project
                    </button>
<button className="p-2 hover:bg-gray-100 rounded-md transition-colors relative border border-gray-200">
<i className="w-4 h-4 text-gray-600" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
</button>
</div>
</div>
</header>

<section className="p-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="bg-card p-6 rounded-md animate-on-scroll">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-gray-600 mb-2">Active Projects</p>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">24</p>
<div className="flex items-center gap-1 mt-2">
<i className="w-3 h-3 text-green-600" data-lucide="trending-up"></i>
<span className="text-xs text-green-600 font-medium">12% increase</span>
</div>
</div>
<div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="folder"></i>
</div>
</div>
</div>
<div className="bg-card p-6 rounded-md animate-on-scroll">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-gray-600 mb-2">Total Clients</p>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">156</p>
<div className="flex items-center gap-1 mt-2">
<i className="w-3 h-3 text-green-600" data-lucide="trending-up"></i>
<span className="text-xs text-green-600 font-medium">8% increase</span>
</div>
</div>
<div className="w-10 h-10 bg-green-50 rounded-md flex items-center justify-center">
<i className="w-5 h-5 text-green-600" data-lucide="users"></i>
</div>
</div>
</div>
<div className="bg-card p-6 rounded-md animate-on-scroll">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-gray-600 mb-2">Revenue</p>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">$48.2k</p>
<div className="flex items-center gap-1 mt-2">
<i className="w-3 h-3 text-green-600" data-lucide="trending-up"></i>
<span className="text-xs text-green-600 font-medium">23% increase</span>
</div>
</div>
<div className="w-10 h-10 bg-purple-50 rounded-md flex items-center justify-center">
<i className="w-5 h-5 text-purple-600" data-lucide="dollar-sign"></i>
</div>
</div>
</div>
<div className="bg-card p-6 rounded-md animate-on-scroll">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-gray-600 mb-2">Completion Rate</p>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">94%</p>
<div className="flex items-center gap-1 mt-2">
<i className="w-3 h-3 text-green-600" data-lucide="trending-up"></i>
<span className="text-xs text-green-600 font-medium">2% increase</span>
</div>
</div>
<div className="w-10 h-10 bg-orange-50 rounded-md flex items-center justify-center">
<i className="w-5 h-5 text-orange-600" data-lucide="trending-up"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-card p-6 rounded-md animate-on-scroll">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">View all</button>
</div>
<div className="space-y-0">
<div className="flex items-start gap-4 p-3 -mx-3 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
<div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="globe"></i>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-medium text-gray-900 mb-1">TechCorp Website Redesign</h4>
<p className="text-sm text-gray-600 mb-3">E-commerce platform with modern UI</p>
<div className="flex items-center gap-3">
<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">In Progress</span>
<span className="text-xs text-gray-500 font-mono">Due: Jan 15</span>
</div>
</div>
<div className="text-right flex-shrink-0">
<p className="text-sm font-semibold text-gray-900">$12,500</p>
<p className="text-xs text-gray-500 mt-1">75% complete</p>
</div>
</div>
<div className="flex items-start gap-4 p-3 -mx-3 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
<div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-600" data-lucide="smartphone"></i>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-medium text-gray-900 mb-1">StartupX Landing Page</h4>
<p className="text-sm text-gray-600 mb-3">Mobile-first responsive design</p>
<div className="flex items-center gap-3">
<span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">Review</span>
<span className="text-xs text-gray-500 font-mono">Due: Jan 10</span>
</div>
</div>
<div className="text-right flex-shrink-0">
<p className="text-sm font-semibold text-gray-900">$8,200</p>
<p className="text-xs text-gray-500 mt-1">90% complete</p>
</div>
</div>
<div className="flex items-start gap-4 p-3 -mx-3 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
<div className="w-10 h-10 bg-orange-100 rounded-md flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-orange-600" data-lucide="shopping-cart"></i>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-medium text-gray-900 mb-1">Fashion Store Rebuild</h4>
<p className="text-sm text-gray-600 mb-3">Full stack e-commerce solution</p>
<div className="flex items-center gap-3">
<span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">Planning</span>
<span className="text-xs text-gray-500 font-mono">Due: Feb 1</span>
</div>
</div>
<div className="text-right flex-shrink-0">
<p className="text-sm font-semibold text-gray-900">$18,900</p>
<p className="text-xs text-gray-500 mt-1">25% complete</p>
</div>
</div>
</div>
</div>

<div className="bg-card p-6 rounded-md animate-on-scroll">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-gray-900">Team Activity</h3>
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">View all</button>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<img alt="Sarah" className="w-8 h-8 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm text-gray-900">
<span className="font-medium">Sarah Johnson</span> completed the homepage design
                                </p>
<p className="text-xs text-gray-500 mt-1 font-mono">TechCorp Website • 2 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<img alt="Mike" className="w-8 h-8 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm text-gray-900">
<span className="font-medium">Mike Chen</span> deployed staging environment
                                </p>
<p className="text-xs text-gray-500 mt-1 font-mono">StartupX Landing • 4 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<img alt="Emma" className="w-8 h-8 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm text-gray-900">
<span className="font-medium">Emma Davis</span> added client feedback
                                </p>
<p className="text-xs text-gray-500 mt-1 font-mono">Fashion Store • 6 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<img alt="Alex" className="w-8 h-8 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm text-gray-900">
<span className="font-medium">Alex Chen</span> scheduled client meeting
                                </p>
<p className="text-xs text-gray-500 mt-1 font-mono">General • 8 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<img alt="David" className="w-8 h-8 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm text-gray-900">
<span className="font-medium">David Kim</span> updated project timeline
                                </p>
<p className="text-xs text-gray-500 mt-1 font-mono">TechCorp Website • Yesterday</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
