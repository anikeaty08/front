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

        // Navigation menu toggle functionality
        document.querySelectorAll('.nav-toggle').forEach(button => {
            button.addEventListener('click', function() {
                const submenu = this.nextElementSibling;
                const chevron = this.querySelector('[data-lucide="chevron-right"]');
                
                if (submenu.classList.contains('open')) {
                    submenu.classList.remove('open');
                    chevron.style.transform = 'rotate(0deg)';
                } else {
                    submenu.classList.add('open');
                    chevron.style.transform = 'rotate(90deg)';
                }
            });
        });

        // Add some interactive functionality for demo purposes
        document.querySelectorAll('.card-hover').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Simulate real-time updates
        setInterval(() => {
            const flames = document.querySelectorAll('.fire-animation');
            flames.forEach(flame => {
                flame.style.animation = 'none';
                setTimeout(() => {
                    flame.style.animation = 'fire 2s ease-in-out infinite';
                }, 10);
            });
        }, 3000);
    
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
      

<div className="flex min-h-screen">

<div className="w-64 bg-white border-r border-gray-200 flex flex-col slide-in">

<div className="p-6 border-b border-gray-100">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="trending-up"></i>
</div>
<div>
<h1 className="text-lg font-semibold tracking-tight text-gray-900">BettingPros</h1>
<p className="text-xs text-gray-500">Systems</p>
</div>
</div>
</div>

<nav className="flex-1 p-4 space-y-1 custom-scrollbar overflow-y-auto">
<div className="fade-in stagger-1">
<h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Betting Systems</h2>
<div className="nav-item flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg transition-colors">
<i className="w-4 h-4 mr-3" data-lucide="home"></i>
                        Systems Home
                    </div>
</div>
<div className="fade-in stagger-2">
<button className="nav-toggle flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">
<div className="flex items-center">
<i className="w-4 h-4 mr-3" data-lucide="target"></i>
                            Systems Picks
                        </div>
<i className="w-4 h-4 transition-transform duration-200" data-lucide="chevron-right"></i>
</button>
<div className="submenu ml-7 mt-1 space-y-1">
<div className="nav-item block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">Today's Picks</div>
<div className="nav-item block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">Hot Streaks</div>
<div className="nav-item block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">My System Picks</div>
</div>
</div>
<div className="fade-in stagger-3">
<button className="nav-toggle flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">
<div className="flex items-center">
<i className="w-4 h-4 mr-3" data-lucide="database"></i>
                            Systems Directory
                        </div>
<i className="w-4 h-4 transition-transform duration-200" data-lucide="chevron-right"></i>
</button>
<div className="submenu ml-7 mt-1 space-y-1">
<div className="nav-item block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">All Systems</div>
<div className="nav-item block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">Trending Systems</div>
<div className="nav-item block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">My Systems</div>
</div>
</div>
<div className="fade-in stagger-4">
<div className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">
<i className="w-4 h-4 mr-3" data-lucide="settings"></i>
                        Systems Builder
                    </div>
</div>
</nav>
</div>

<div className="flex-1 flex flex-col">

<header className="bg-white border-b border-gray-200 px-6 py-4 blur-in stagger-2">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Systems Home</h1>
<p className="text-sm text-gray-500 mt-1">Your central hub for system picks, performance tracking, and discovery</p>
</div>
<div className="flex items-center space-x-3">
<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4 mr-2" data-lucide="bell"></i>
                            Notifications
                        </button>
<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
<i className="w-4 h-4 mr-2" data-lucide="plus"></i>
                            Create System
                        </button>
</div>
</div>
</header>

<div className="flex-1 overflow-auto custom-scrollbar">
<div className="max-w-7xl mx-auto px-6 py-8 space-y-12">

<section className="slide-up stagger-3">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Today's Top System Picks</h2>
<p className="text-sm text-gray-500 mt-1">Highest confidence picks from our best-performing systems</p>
</div>
<button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All Picks →</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-gray-200 p-6 card-hover">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">NFL</span>
<span className="text-sm font-medium text-gray-500">Live</span>
</div>
<div className="text-sm font-medium text-gray-900">-110</div>
</div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-gray-900 mb-1">Cowboys vs Giants</h3>
<div className="text-2xl font-bold text-blue-600">Cowboys -7</div>
</div>
<div className="border-t border-gray-100 pt-4">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-500">System</span>
<span className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">Elite Underdog Bounce-Back</span>
</div>
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-gray-500">Recent ROI</span>
<span className="text-sm font-medium text-green-600">+18.2%</span>
</div>
<div className="flex space-x-2">
<button className="flex-1 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                            Bet Now
                                        </button>
<button className="flex-1 border border-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                                            View System
                                        </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 card-hover">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">NBA</span>
<span className="text-sm font-medium text-gray-500">7:30 PM</span>
</div>
<div className="text-sm font-medium text-gray-900">+105</div>
</div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-gray-900 mb-1">Lakers vs Celtics</h3>
<div className="text-2xl font-bold text-blue-600">Over 218.5</div>
</div>
<div className="border-t border-gray-100 pt-4">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-500">System</span>
<span className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">Total O/U Crusher</span>
</div>
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-gray-500">Recent ROI</span>
<span className="text-sm font-medium text-green-600">+12.9%</span>
</div>
<div className="flex space-x-2">
<button className="flex-1 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                            Bet Now
                                        </button>
<button className="flex-1 border border-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                                            View System
                                        </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 card-hover">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">MLB</span>
<span className="text-sm font-medium text-gray-500">8:00 PM</span>
</div>
<div className="text-sm font-medium text-gray-900">-120</div>
</div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-gray-900 mb-1">Yankees vs Red Sox</h3>
<div className="text-2xl font-bold text-blue-600">Yankees ML</div>
</div>
<div className="border-t border-gray-100 pt-4">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-500">System</span>
<span className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">Road Dog Value Hunter</span>
</div>
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-gray-500">Recent ROI</span>
<span className="text-sm font-medium text-green-600">+14.1%</span>
</div>
<div className="flex space-x-2">
<button className="flex-1 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                            Bet Now
                                        </button>
<button className="flex-1 border border-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                                            View System
                                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="slide-up stagger-4">
<div className="bg-white rounded-xl border border-gray-200 p-8">
<div className="text-center mb-8">
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Find Your Perfect System</h2>
<p className="text-sm text-gray-500">Search through 500+ winning systems or browse by category</p>
</div>
<div className="relative mb-6">
<i className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" placeholder="Search systems by name, sport, or strategy..." type="text" />
</div>
<div className="flex flex-wrap gap-3 justify-center">
<button className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
<i className="w-4 h-4 mr-2" data-lucide="zap"></i>
                                    NFL Systems
                                </button>
<button className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
<i className="w-4 h-4 mr-2" data-lucide="trending-up"></i>
                                    High ROI
                                </button>
<button className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
<i className="w-4 h-4 mr-2" data-lucide="user"></i>
                                    Player Props
                                </button>
<button className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors text-sm font-medium">
<i className="w-4 h-4 mr-2" data-lucide="activity"></i>
                                    Hot Streaks
                                </button>
</div>
</div>
</section>

<section className="slide-up stagger-5">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Hot Streak Systems</h2>
<p className="text-sm text-gray-500 mt-1">Systems currently on fire with winning streaks</p>
</div>
<button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All Hot Streaks →</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="bg-white rounded-xl border border-gray-200 p-6 card-hover">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
<i className="w-3 h-3 mr-1 fire-animation" data-lucide="flame"></i>
                                        8 Straight Wins!
                                    </span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">Elite Underdog Bounce-Back</h3>
<div className="space-y-2 mb-4">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">7-Day ROI</span>
<span className="text-sm font-bold text-green-600">+48%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Overall Win %</span>
<span className="text-sm font-medium text-gray-900">62.7%</span>
</div>
</div>
<button className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                    Follow System
                                </button>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 card-hover">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
<i className="w-3 h-3 mr-1 fire-animation" data-lucide="flame"></i>
                                        6 Straight Wins!
                                    </span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">Prime Time Favorites</h3>
<div className="space-y-2 mb-4">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">7-Day ROI</span>
<span className="text-sm font-bold text-green-600">+35%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Overall Win %</span>
<span className="text-sm font-medium text-gray-900">66.7%</span>
</div>
</div>
<button className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                    Follow System
                                </button>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 card-hover">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
<i className="w-3 h-3 mr-1 fire-animation" data-lucide="flame"></i>
                                        5 Straight Wins!
                                    </span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">Total O/U Crusher</h3>
<div className="space-y-2 mb-4">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">7-Day ROI</span>
<span className="text-sm font-bold text-green-600">+28%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Overall Win %</span>
<span className="text-sm font-medium text-gray-900">58.2%</span>
</div>
</div>
<button className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                    Follow System
                                </button>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 card-hover">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
<i className="w-3 h-3 mr-1 fire-animation" data-lucide="flame"></i>
                                        4 Straight Wins!
                                    </span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">Road Dog Value Hunter</h3>
<div className="space-y-2 mb-4">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">7-Day ROI</span>
<span className="text-sm font-bold text-green-600">+22%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Overall Win %</span>
<span className="text-sm font-medium text-gray-900">57.5%</span>
</div>
</div>
<button className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                    Follow System
                                </button>
</div>
</div>
</section>

<section className="slide-up stagger-6">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Top System Creators</h2>
<p className="text-sm text-gray-500 mt-1">Leading creators building winning systems on our platform</p>
</div>
<button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All Creators →</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="bg-white rounded-xl border border-gray-200 p-6 card-hover cursor-pointer">
<div className="flex items-center mb-4">
<img alt="Creator" className="w-12 h-12 rounded-full mr-3" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
<div>
<h3 className="font-semibold text-gray-900">Mike Chen</h3>
<p className="text-sm text-gray-500">@mikechen</p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-4">
<div className="text-center">
<div className="text-lg font-bold text-gray-900">12</div>
<div className="text-xs text-gray-500">Systems</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-green-600">+2,400</div>
<div className="text-xs text-gray-500">Units</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-blue-600">3.2K</div>
<div className="text-xs text-gray-500">Followers</div>
</div>
</div>
<button className="w-full border border-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                                    View Profile
                                </button>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 card-hover cursor-pointer">
<div className="flex items-center mb-4">
<img alt="Creator" className="w-12 h-12 rounded-full mr-3" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
<div>
<h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
<p className="text-sm text-gray-500">@sarahj</p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-4">
<div className="text-center">
<div className="text-lg font-bold text-gray-900">8</div>
<div className="text-xs text-gray-500">Systems</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-green-600">+1,850</div>
<div className="text-xs text-gray-500">Units</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-blue-600">2.8K</div>
<div className="text-xs text-gray-500">Followers</div>
</div>
</div>
<button className="w-full border border-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                                    View Profile
                                </button>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 card-hover cursor-pointer">
<div className="flex items-center mb-4">
<img alt="Creator" className="w-12 h-12 rounded-full mr-3" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" />
<div>
<h3 className="font-semibold text-gray-900">Alex Rodriguez</h3>
<p className="text-sm text-gray-500">@alexr</p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-4">
<div className="text-center">
<div className="text-lg font-bold text-gray-900">15</div>
<div className="text-xs text-gray-500">Systems</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-green-600">+3,200</div>
<div className="text-xs text-gray-500">Units</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-blue-600">4.1K</div>
<div className="text-xs text-gray-500">Followers</div>
</div>
</div>
<button className="w-full border border-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                                    View Profile
                                </button>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 card-hover cursor-pointer">
<div className="flex items-center mb-4">
<img alt="Creator" className="w-12 h-12 rounded-full mr-3" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face" />
<div>
<h3 className="font-semibold text-gray-900">Emma Davis</h3>
<p className="text-sm text-gray-500">@emmad</p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-4">
<div className="text-center">
<div className="text-lg font-bold text-gray-900">9</div>
<div className="text-xs text-gray-500">Systems</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-green-600">+2,100</div>
<div className="text-xs text-gray-500">Units</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-blue-600">2.9K</div>
<div className="text-xs text-gray-500">Followers</div>
</div>
</div>
<button className="w-full border border-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                                    View Profile
                                </button>
</div>
</div>
</section>

<section className="slide-up stagger-7">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Recent Activity</h2>
<p className="text-sm text-gray-500 mt-1">Latest wins, new systems, and community highlights</p>
</div>
<button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All Activity →</button>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-6">
<div className="space-y-4">

<div className="flex items-start space-x-3 p-4 rounded-lg bg-green-50 border border-green-200">
<div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
<div className="flex-1">
<p className="text-sm text-gray-900">
<span className="font-medium">Elite Underdog Bounce-Back</span> system just hit its <span className="font-medium text-green-600">8th straight win</span>!
                                        </p>
<p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
</div>
</div>

<div className="flex items-start space-x-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
<div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
<div className="flex-1">
<p className="text-sm text-gray-900">
<span className="font-medium">Mike Chen</span> created a new system: <span className="font-medium text-blue-600">NBA Home Court Advantage</span>
</p>
<p className="text-xs text-gray-500 mt-1">15 minutes ago</p>
</div>
</div>

<div className="flex items-start space-x-3 p-4 rounded-lg bg-purple-50 border border-purple-200">
<div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
<div className="flex-1">
<p className="text-sm text-gray-900">
<span className="font-medium">Total O/U Crusher</span> system reached <span className="font-medium text-purple-600">1000 followers</span>!
                                        </p>
<p className="text-xs text-gray-500 mt-1">1 hour ago</p>
</div>
</div>

<div className="flex items-start space-x-3 p-4 rounded-lg bg-orange-50 border border-orange-200">
<div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
<div className="flex-1">
<p className="text-sm text-gray-900">
<span className="font-medium">Sarah Johnson</span> updated her system with <span className="font-medium text-orange-600">new MLB criteria</span>
</p>
<p className="text-xs text-gray-500 mt-1">2 hours ago</p>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>



    </>
  );
}
