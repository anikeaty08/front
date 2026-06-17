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
      
        // Initialize Lucide icons
        lucide.createIcons();

        // Chat toggle functionality
        function toggleChat() {
            const chatInterface = document.getElementById('chatInterface');
            const fullBodyAvatar = document.getElementById('fullBodyAvatar');
            const isVisible = chatInterface.classList.contains('scale-100');
            
            if (isVisible) {
                // Hide chat interface
                chatInterface.classList.remove('scale-100', 'opacity-100');
                chatInterface.classList.add('scale-0', 'opacity-0');
                
                // Move avatar back to original position
                fullBodyAvatar.style.transform = 'translateX(0px)';
            } else {
                // Show chat interface
                chatInterface.classList.remove('scale-0', 'opacity-0');
                chatInterface.classList.add('scale-100', 'opacity-100');
                
                // Move avatar to the left to make room for chat interface
                fullBodyAvatar.style.transform = 'translateX(-220px)';
            }
        }

        // Portfolio Performance Chart
        const portfolioCtx = document.getElementById('portfolioChart').getContext('2d');
        new Chart(portfolioCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Portfolio Value',
                    data: [750000, 780000, 760000, 820000, 810000, 847562],
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
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000) + 'K';
                            }
                        }
                    }
                }
            }
        });

        // Asset Allocation Chart
        const allocationCtx = document.getElementById('allocationChart').getContext('2d');
        new Chart(allocationCtx, {
            type: 'doughnut',
            data: {
                labels: ['Stocks', 'Bonds', 'Real Estate', 'Crypto', 'Cash'],
                datasets: [{
                    data: [45, 25, 15, 10, 5],
                    backgroundColor: [
                        '#3B82F6',
                        '#10B981',
                        '#F59E0B',
                        '#8B5CF6',
                        '#6B7280'
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
                            usePointStyle: true,
                            padding: 20
                        }
                    }
                }
            }
        });

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes fade-in-up {
                from { 
                    opacity: 0; 
                    transform: translateY(20px); 
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
            }
            
            @keyframes slide-in-left {
                from { 
                    opacity: 0; 
                    transform: translateX(-20px); 
                }
                to { 
                    opacity: 1; 
                    transform: translateX(0); 
                }
            }
            
            .animate-fade-in {
                animation: fade-in 0.6s ease-out;
            }
            
            .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out;
            }
            
            .animate-slide-in-left {
                animation: slide-in-left 0.6s ease-out;
            }
        `;
        document.head.appendChild(style);
    
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
      

<div className="fixed bottom-6 right-6 z-50 animate-fade-in-up" style={{animationDelay: '2s', animationFillMode: 'both'}}>
<div className="relative flex items-end space-x-4">

<div className="relative transition-all duration-500 ease-in-out" id="fullBodyAvatar">
<div className="w-48 h-72 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl">

<div className="relative w-full h-full">
<img alt="Amira Al-Hassan" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=400&amp;h=600&amp;fit=crop&amp;crop=face"/>

<div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-purple-500/10 to-transparent mix-blend-overlay"></div>

<div className="absolute inset-0 overflow-hidden">
<div className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
<div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{top: '40%', right: '20%', animationDelay: '1s'}}></div>
<div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{top: '60%', left: '25%', animationDelay: '2s'}}></div>
<div className="absolute w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{top: '80%', right: '30%', animationDelay: '0.5s'}}></div>
</div>

<div className="absolute top-4 left-4 flex flex-col space-y-2">
<div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-white text-xs font-medium">Online</span>
</div>
<div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-white text-xs font-medium">AI Active</span>
</div>
</div>

<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
<div className="w-1 bg-blue-400 rounded-full animate-bounce" style={{height: '8px', animationDelay: '0s'}}></div>
<div className="w-1 bg-blue-400 rounded-full animate-bounce" style={{height: '12px', animationDelay: '0.1s'}}></div>
<div className="w-1 bg-blue-400 rounded-full animate-bounce" style={{height: '6px', animationDelay: '0.2s'}}></div>
<div className="w-1 bg-blue-400 rounded-full animate-bounce" style={{height: '10px', animationDelay: '0.3s'}}></div>
<div className="w-1 bg-blue-400 rounded-full animate-bounce" style={{height: '8px', animationDelay: '0.4s'}}></div>
</div>

<div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
<p className="text-white text-xs font-medium">Amira</p>
<p className="text-blue-300 text-xs">Financial AI</p>
</div>
</div>
</div>
</div>

<div className="relative">

<div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 p-0.5 shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105" onclick="toggleChat()">
<div className="w-full h-full rounded-full overflow-hidden bg-white">
<img alt="Financial Assistant" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>

<div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
</div>

<div className="absolute bottom-24 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 transform scale-0 origin-bottom-right transition-all duration-500 opacity-0" id="chatInterface">

<div className="flex items-center justify-between p-4 border-b border-gray-100">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full overflow-hidden">
<img alt="Assistant" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div>
<h4 className="font-medium text-gray-900 text-sm">Amira Al-Hassan</h4>
<p className="text-xs text-green-600">Online</p>
</div>
</div>
<button className="p-1 hover:bg-gray-100 rounded-lg transition-colors" onclick="toggleChat()">
<i className="w-4 h-4 text-gray-500" data-lucide="x"></i>
</button>
</div>

<div className="h-64 overflow-y-auto p-4 space-y-3">
<div className="flex items-start space-x-2">
<div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
<img alt="Assistant" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs">
<p className="text-sm text-gray-800">Hello! I'm Amira, your financial assistant. How can I help you analyze your portfolio today?</p>
</div>
</div>
<div className="flex items-start space-x-2 justify-end">
<div className="bg-blue-600 rounded-2xl rounded-tr-md px-4 py-2 max-w-xs">
<p className="text-sm text-white">Show me the performance summary</p>
</div>
</div>
<div className="flex items-start space-x-2">
<div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
<img alt="Assistant" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs">
<p className="text-sm text-gray-800">Your portfolio is up 12.5% this month! Tech stocks are performing exceptionally well. Would you like detailed insights?</p>
</div>
</div>
</div>

<div className="p-4 border-t border-gray-100">
<div className="flex items-center space-x-2">
<input className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ask me anything..." type="text"/>
<button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex h-screen bg-gray-50">

<div className="w-64 bg-white border-r border-gray-200 flex flex-col animate-slide-in-left">
<div className="p-6 border-b border-gray-200">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tight">FA</span>
</div>
<h1 className="text-xl font-semibold text-gray-900 tracking-tight">FinAnalytics</h1>
</div>
</div>
<nav className="flex-1 p-6">
<div className="space-y-1">
<a className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
<span>Dashboard</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>Portfolio</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i>
<span>Analytics</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="wallet"></i>
<span>Transactions</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="bell"></i>
<span>Alerts</span>
</a>
</div>
</nav>
<div className="p-6 border-t border-gray-200">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&amp;h=32&amp;fit=crop&amp;crop=face"/>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Ahmed Hassan</p>
<p className="text-xs text-gray-500">Premium Account</p>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden">

<header className="bg-white border-b border-gray-200 px-6 py-4 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Financial Dashboard</h2>
<p className="text-sm text-gray-600">Monitor your portfolio performance and market insights</p>
</div>
<div className="flex items-center space-x-4">
<button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5 text-gray-500" data-lucide="search"></i>
</button>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
<i className="w-5 h-5 text-gray-500" data-lucide="bell"></i>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Total Balance</p>
<p className="text-2xl font-semibold text-gray-900 mt-1">$847,562</p>
<div className="flex items-center mt-2">
<i className="w-4 h-4 text-green-500 mr-1" data-lucide="trending-up"></i>
<span className="text-sm text-green-600 font-medium">+12.5%</span>
</div>
</div>
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="dollar-sign"></i>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Monthly Profit</p>
<p className="text-2xl font-semibold text-gray-900 mt-1">$24,847</p>
<div className="flex items-center mt-2">
<i className="w-4 h-4 text-green-500 mr-1" data-lucide="trending-up"></i>
<span className="text-sm text-green-600 font-medium">+8.2%</span>
</div>
</div>
<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-green-600" data-lucide="trending-up"></i>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Active Investments</p>
<p className="text-2xl font-semibold text-gray-900 mt-1">47</p>
<div className="flex items-center mt-2">
<i className="w-4 h-4 text-blue-500 mr-1" data-lucide="plus"></i>
<span className="text-sm text-blue-600 font-medium">3 new</span>
</div>
</div>
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-purple-600" data-lucide="pie-chart"></i>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Risk Score</p>
<p className="text-2xl font-semibold text-gray-900 mt-1">7.2</p>
<div className="flex items-center mt-2">
<i className="w-4 h-4 text-orange-500 mr-1" data-lucide="shield"></i>
<span className="text-sm text-orange-600 font-medium">Moderate</span>
</div>
</div>
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-orange-600" data-lucide="shield"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.7s', animationFillMode: 'both'}}>
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-gray-900">Portfolio Performance</h3>
<select className="text-sm border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
<option>Last 30 days</option>
<option>Last 90 days</option>
<option>Last year</option>
</select>
</div>
<div className="h-64">
<canvas id="portfolioChart"></canvas>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
<h3 className="text-lg font-semibold text-gray-900 mb-6">Asset Allocation</h3>
<div className="h-64">
<canvas id="allocationChart"></canvas>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.9s', animationFillMode: 'both'}}>
<div className="p-6 border-b border-gray-200">
<h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
</div>
<div className="divide-y divide-gray-200">
<div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-green-600" data-lucide="arrow-up"></i>
</div>
<div>
<p className="font-medium text-gray-900">Apple Inc. (AAPL)</p>
<p className="text-sm text-gray-500">Buy • 50 shares</p>
</div>
</div>
<div className="text-right">
<p className="font-medium text-gray-900">$8,750.00</p>
<p className="text-sm text-gray-500">2 hours ago</p>
</div>
</div>
<div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-red-600" data-lucide="arrow-down"></i>
</div>
<div>
<p className="font-medium text-gray-900">Tesla Inc. (TSLA)</p>
<p className="text-sm text-gray-500">Sell • 25 shares</p>
</div>
</div>
<div className="text-right">
<p className="font-medium text-gray-900">$6,200.00</p>
<p className="text-sm text-gray-500">5 hours ago</p>
</div>
</div>
<div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="dollar-sign"></i>
</div>
<div>
<p className="font-medium text-gray-900">Dividend Payment</p>
<p className="text-sm text-gray-500">Microsoft Corporation</p>
</div>
</div>
<div className="text-right">
<p className="font-medium text-gray-900">$450.00</p>
<p className="text-sm text-gray-500">1 day ago</p>
</div>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
