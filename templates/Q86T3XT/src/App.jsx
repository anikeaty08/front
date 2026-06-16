import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();



        lucide.createIcons();
        
        // Add custom animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                    filter: blur(4px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                    filter: blur(0);
                }
            }
            
            @keyframes fadeInRight {
                from {
                    opacity: 0;
                    transform: translateX(10px);
                    filter: blur(4px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                    filter: blur(0);
                }
            }
        `;
        document.head.appendChild(style);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="bg-white border-b border-gray-200 px-6 py-4 opacity-0 translate-y-[-10px] blur-sm animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center space-x-8">
<div className="text-xl font-semibold tracking-tight text-gray-900">Dashboard</div>
<div className="hidden md:flex items-center space-x-6">
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium" href="#">Overview</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium" href="#">Analytics</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium" href="#">Reports</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium" href="#">Settings</a>
</div>
</div>
<div className="flex items-center space-x-4">
<button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
<i className="w-5 h-5 text-gray-600" data-lucide="bell"></i>
</button>
<button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
<i className="w-5 h-5 text-gray-600" data-lucide="search"></i>
</button>
<img alt="Profile" className="w-8 h-8 rounded-full ring-2 ring-gray-200 hover:ring-gray-300 transition-all duration-200 cursor-pointer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&amp;h=32&amp;fit=crop&amp;crop=face"/>
</div>
</div>
</nav>

<div className="max-w-7xl mx-auto px-6 py-8 opacity-0 translate-y-[-10px] blur-sm animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">Good morning, Alex</h1>
<p className="text-gray-600">Here's what's happening with your projects today.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 opacity-0 translate-y-4 blur-sm animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
<div className="flex items-center justify-between mb-4">
<div className="p-2 bg-blue-50 rounded-lg">
<i className="w-5 h-5 text-blue-600" data-lucide="users"></i>
</div>
<span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">+12%</span>
</div>
<div className="space-y-1">
<p className="text-2xl font-semibold text-gray-900">2,847</p>
<p className="text-sm text-gray-600">Total Users</p>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 opacity-0 translate-y-4 blur-sm animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
<div className="flex items-center justify-between mb-4">
<div className="p-2 bg-green-50 rounded-lg">
<i className="w-5 h-5 text-green-600" data-lucide="dollar-sign"></i>
</div>
<span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">+8%</span>
</div>
<div className="space-y-1">
<p className="text-2xl font-semibold text-gray-900">$45,210</p>
<p className="text-sm text-gray-600">Revenue</p>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 opacity-0 translate-y-4 blur-sm animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
<div className="flex items-center justify-between mb-4">
<div className="p-2 bg-purple-50 rounded-lg">
<i className="w-5 h-5 text-purple-600" data-lucide="shopping-cart"></i>
</div>
<span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">+23%</span>
</div>
<div className="space-y-1">
<p className="text-2xl font-semibold text-gray-900">1,204</p>
<p className="text-sm text-gray-600">Orders</p>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 opacity-0 translate-y-4 blur-sm animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
<div className="flex items-center justify-between mb-4">
<div className="p-2 bg-orange-50 rounded-lg">
<i className="w-5 h-5 text-orange-600" data-lucide="trending-up"></i>
</div>
<span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">+5%</span>
</div>
<div className="space-y-1">
<p className="text-2xl font-semibold text-gray-900">94.3%</p>
<p className="text-sm text-gray-600">Conversion</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 opacity-0 translate-y-4 blur-sm animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]">
<div className="p-6 border-b border-gray-100">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
<button className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">View all</button>
</div>
</div>
<div className="p-6 space-y-6">
<div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
<img alt="User" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
<span className="text-xs text-gray-500">2m ago</span>
</div>
<p className="text-sm text-gray-600">Created a new project "Mobile App Redesign"</p>
<div className="flex items-center mt-2 space-x-2">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-50 text-blue-700">Design</span>
</div>
</div>
</div>
<div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
<img alt="User" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&amp;h=40&amp;fit=crop&amp;crop=face"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-gray-900">Mike Chen</p>
<span className="text-xs text-gray-500">15m ago</span>
</div>
<p className="text-sm text-gray-600">Completed 5 tasks in "E-commerce Platform"</p>
<div className="flex items-center mt-2 space-x-2">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-50 text-green-700">Development</span>
</div>
</div>
</div>
<div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
<img alt="User" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&amp;h=40&amp;fit=crop&amp;crop=face"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-gray-900">Emma Davis</p>
<span className="text-xs text-gray-500">1h ago</span>
</div>
<p className="text-sm text-gray-600">Updated team permissions for "Marketing Campaign"</p>
<div className="flex items-center mt-2 space-x-2">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-50 text-purple-700">Marketing</span>
</div>
</div>
</div>
<div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
<img alt="User" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&amp;h=40&amp;fit=crop&amp;crop=face"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-gray-900">Alex Thompson</p>
<span className="text-xs text-gray-500">3h ago</span>
</div>
<p className="text-sm text-gray-600">Added 12 new team members to workspace</p>
<div className="flex items-center mt-2 space-x-2">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-50 text-orange-700">Admin</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-xl border border-gray-200 opacity-0 translate-x-4 blur-sm animate-[fadeInRight_0.6s_ease-out_0.8s_forwards]">
<div className="p-6 border-b border-gray-100">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-gray-900">Team</h3>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
<i className="w-4 h-4 text-gray-600" data-lucide="plus"></i>
</button>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
<div className="flex items-center space-x-3">
<img alt="Team member" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
<p className="text-xs text-gray-500">Designer</p>
</div>
</div>
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
<div className="flex items-center space-x-3">
<img alt="Team member" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&amp;h=32&amp;fit=crop&amp;crop=face"/>
<div>
<p className="text-sm font-medium text-gray-900">Mike Chen</p>
<p className="text-xs text-gray-500">Developer</p>
</div>
</div>
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
<div className="flex items-center space-x-3">
<img alt="Team member" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&amp;h=32&amp;fit=crop&amp;crop=face"/>
<div>
<p className="text-sm font-medium text-gray-900">Emma Davis</p>
<p className="text-xs text-gray-500">Marketing</p>
</div>
</div>
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
<div className="flex items-center space-x-3">
<img alt="Team member" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&amp;h=32&amp;fit=crop&amp;crop=face"/>
<div>
<p className="text-sm font-medium text-gray-900">James Wilson</p>
<p className="text-xs text-gray-500">Product Manager</p>
</div>
</div>
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 opacity-0 translate-x-4 blur-sm animate-[fadeInRight_0.6s_ease-out_0.9s_forwards]">
<div className="p-6 border-b border-gray-100">
<h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
</div>
<div className="p-6 space-y-3">
<button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group">
<div className="flex items-center space-x-3">
<div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
<i className="w-4 h-4 text-blue-600" data-lucide="plus"></i>
</div>
<span className="text-sm font-medium text-gray-900">New Project</span>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" data-lucide="arrow-right"></i>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group">
<div className="flex items-center space-x-3">
<div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors duration-200">
<i className="w-4 h-4 text-green-600" data-lucide="user-plus"></i>
</div>
<span className="text-sm font-medium text-gray-900">Invite Team</span>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" data-lucide="arrow-right"></i>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group">
<div className="flex items-center space-x-3">
<div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors duration-200">
<i className="w-4 h-4 text-purple-600" data-lucide="file-text"></i>
</div>
<span className="text-sm font-medium text-gray-900">Generate Report</span>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" data-lucide="arrow-right"></i>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group">
<div className="flex items-center space-x-3">
<div className="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors duration-200">
<i className="w-4 h-4 text-orange-600" data-lucide="settings"></i>
</div>
<span className="text-sm font-medium text-gray-900">Settings</span>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
