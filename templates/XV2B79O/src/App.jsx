import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        // Initialize Lucide icons
        lucide.createIcons();

        // Navigation functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Get all navigation items
            const navItems = document.querySelectorAll('.nav-item');
            const navToggles = document.querySelectorAll('.nav-toggle');
            const pages = document.querySelectorAll('[id*="-page"]');

            // Handle navigation menu toggles
            navToggles.forEach(toggle => {
                toggle.addEventListener('click', function() {
                    const submenu = this.nextElementSibling;
                    const chevron = this.querySelector('i[data-lucide="chevron-right"]');
                    
                    submenu.classList.toggle('open');
                    chevron.style.transform = submenu.classList.contains('open') ? 'rotate(90deg)' : 'rotate(0deg)';
                });
            });

            // Handle page navigation
            function showPage(pageId) {
                pages.forEach(page => {
                    if (page.id === pageId) {
                        page.classList.remove('page-hidden');
                        page.classList.add('page-visible');
                    } else {
                        page.classList.add('page-hidden');
                        page.classList.remove('page-visible');
                    }
                });
            }

            // Navigation event listeners
            document.getElementById('nav-home').addEventListener('click', () => showPage('systems-home-page'));
            document.getElementById('nav-all-systems').addEventListener('click', () => showPage('systems-directory-page'));

            // Filter dropdown functionality
            const filterDropdowns = document.querySelectorAll('.filter-dropdown');
            filterDropdowns.forEach(dropdown => {
                dropdown.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const menu = this.nextElementSibling;
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.dropdown-menu').forEach(otherMenu => {
                        if (otherMenu !== menu) {
                            otherMenu.classList.remove('open');
                        }
                    });
                    
                    menu.classList.toggle('open');
                });
            });

            // Handle dropdown item selection
            document.querySelectorAll('.dropdown-item').forEach(item => {
                item.addEventListener('click', function() {
                    const dropdown = this.closest('.dropdown-menu').previousElementSibling;
                    const valueSpan = dropdown.querySelector('.filter-value');
                    
                    valueSpan.textContent = this.textContent;
                    this.closest('.dropdown-menu').classList.remove('open');
                });
            });

            // Advanced filters toggle
            const advancedToggle = document.getElementById('advanced-filters-toggle');
            const advancedPanel = document.getElementById('advanced-filters-panel');
            const chevronIcon = advancedToggle.querySelector('i[data-lucide="chevron-down"]');

            advancedToggle.addEventListener('click', function() {
                advancedPanel.classList.toggle('hidden');
                chevronIcon.style.transform = advancedPanel.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            });

            // Star rating functionality
            document.querySelectorAll('.star-rating').forEach(rating => {
                const stars = rating.querySelectorAll('.star');
                stars.forEach(star => {
                    star.addEventListener('click', function() {
                        const ratingValue = parseInt(this.getAttribute('data-rating'));
                        stars.forEach((s, index) => {
                            if (index < ratingValue) {
                                s.classList.add('active');
                            } else {
                                s.classList.remove('active');
                            }
                        });
                    });
                });
            });

            // Search functionality
            const searchInput = document.getElementById('search-input');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                // Add search logic here
                console.log('Searching for:', searchTerm);
            });

            // Clear filters functionality
            document.getElementById('clear-filters').addEventListener('click', function() {
                // Reset all filter dropdowns
                document.querySelectorAll('.filter-value').forEach(value => {
                    const filterType = value.closest('.relative').querySelector('label').textContent;
                    switch(filterType) {
                        case 'Sport':
                            value.textContent = 'All Sports';
                            break;
                        case 'Market':
                            value.textContent = 'All Markets';
                            break;
                        case 'Performance':
                            value.textContent = 'All Performance';
                            break;
                        case 'System Type':
                            value.textContent = 'All Systems';
                            break;
                        case 'Net Units':
                            value.textContent = 'All Units';
                            break;
                        case 'Sort By':
                            value.textContent = 'ROI (High to Low)';
                            break;
                    }
                });
                
                // Reset search
                searchInput.value = '';
                
                // Reset advanced filters
                advancedPanel.classList.add('hidden');
                chevronIcon.style.transform = 'rotate(0deg)';
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.relative')) {
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        menu.classList.remove('open');
                    });
                }
            });

            // Open the Systems Directory submenu by default
            const systemsDirectoryToggle = document.querySelector('.nav-toggle:nth-child(3)');
            if (systemsDirectoryToggle) {
                const submenu = systemsDirectoryToggle.nextElementSibling;
                const chevron = systemsDirectoryToggle.querySelector('i[data-lucide="chevron-right"]');
                
                submenu.classList.add('open');
                chevron.style.transform = 'rotate(90deg)';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
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
<div className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors" id="nav-home">
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
<div className="nav-item block px-3 py-2 text-sm text-gray-600 rounded-lg transition-colors">Today's Picks</div>
<div className="nav-item block px-3 py-2 text-sm text-gray-600 rounded-lg transition-colors">Hot Streaks</div>
<div className="nav-item block px-3 py-2 text-sm text-gray-600 rounded-lg transition-colors">My System Picks</div>
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
<div className="nav-item block px-3 py-2 text-sm text-white bg-blue-600 rounded-lg transition-colors active" id="nav-all-systems">All Systems</div>
<div className="nav-item block px-3 py-2 text-sm text-gray-600 rounded-lg transition-colors">Trending Systems</div>
<div className="nav-item block px-3 py-2 text-sm text-gray-600 rounded-lg transition-colors">My Systems</div>
</div>
</div>
<div className="fade-in stagger-4">
<div className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors">
<i className="w-4 h-4 mr-3" data-lucide="settings"></i>
                        Systems Builder
                    </div>
</div>
</nav>
</div>

<div className="flex-1 main-content">

<div className="page-container page-transition page-hidden" id="systems-home-page">

<header className="bg-white border-b border-gray-200 px-6 py-4 blur-in stagger-1">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Systems Home</h1>
<p className="text-sm text-gray-500 mt-1">Your central hub for all betting systems and performance tracking</p>
</div>
<div className="flex items-center space-x-3">
<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
<i className="w-4 h-4 mr-2" data-lucide="plus"></i>
                                Create System
                            </button>
</div>
</div>
</header>

<div className="flex-1 overflow-auto custom-scrollbar">
<div className="max-w-full px-6 py-6 space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 slide-up stagger-2">
<div className="bg-white p-6 rounded-lg border border-gray-200 card-hover">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-blue-600" data-lucide="target"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">Active Systems</p>
<p className="text-2xl font-semibold text-gray-900">542</p>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-lg border border-gray-200 card-hover">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-green-600" data-lucide="trending-up"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">Profitable Systems</p>
<p className="text-2xl font-semibold text-gray-900">387</p>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-lg border border-gray-200 card-hover">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-orange-600" data-lucide="fire"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">Hot Streaks</p>
<p className="text-2xl font-semibold text-gray-900">23</p>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-lg border border-gray-200 card-hover">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-purple-600" data-lucide="star"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">Top Rated</p>
<p className="text-2xl font-semibold text-gray-900">156</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6 slide-up stagger-3">
<h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<button className="nav-item flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-5 h-5 text-blue-600 mr-3" data-lucide="database"></i>
<div className="text-left">
<div className="text-sm font-medium text-gray-900">Browse All Systems</div>
<div className="text-xs text-gray-500">Explore 500+ betting systems</div>
</div>
</button>
<button className="nav-item flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-5 h-5 text-green-600 mr-3" data-lucide="trending-up"></i>
<div className="text-left">
<div className="text-sm font-medium text-gray-900">View Today's Picks</div>
<div className="text-xs text-gray-500">12 systems have picks today</div>
</div>
</button>
<button className="nav-item flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-5 h-5 text-purple-600 mr-3" data-lucide="settings"></i>
<div className="text-left">
<div className="text-sm font-medium text-gray-900">Create New System</div>
<div className="text-xs text-gray-500">Build your own system</div>
</div>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="page-container page-transition page-visible" id="systems-directory-page">

<header className="bg-white border-b border-gray-200 px-6 py-4 blur-in stagger-1">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Systems Directory</h1>
<p className="text-sm text-gray-500 mt-1">Discover, compare, and manage all available betting systems</p>
</div>
<div className="flex items-center space-x-3">
<div className="flex items-center space-x-2 text-sm text-gray-500">
<span>Showing 1-20 of 542 systems</span>
</div>
<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4 mr-2" data-lucide="download"></i>
                                Export
                            </button>
</div>
</div>
</header>

<div className="bg-white border-b border-gray-200 px-6 py-4 slide-up stagger-2">

<div className="mb-4">
<div className="relative">
<i className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" id="search-input" placeholder="Search by system name or keyword..." type="text"/>
</div>
</div>

<div className="flex flex-wrap items-center gap-4 mb-4">

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-1">Sport</label>
<button className="filter-dropdown flex items-center px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 min-w-24">
<span className="filter-value">All Sports</span>
<i className="w-4 h-4 ml-2" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-menu absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
<div className="p-1">
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="all">All Sports</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="nfl">NFL</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="nba">NBA</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="mlb">MLB</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="nhl">NHL</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="ncaaf">NCAAF</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="ncaab">NCAAB</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="soccer">Soccer</div>
</div>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-1">Market</label>
<button className="filter-dropdown flex items-center px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 min-w-24">
<span className="filter-value">All Markets</span>
<i className="w-4 h-4 ml-2" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-menu absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
<div className="p-1">
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="all">All Markets</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="moneyline">Moneyline</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="spread">Spread</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="total">Total</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="player-prop">Player Prop</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="team-prop">Team Prop</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="futures">Futures</div>
</div>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-1">Performance</label>
<button className="filter-dropdown flex items-center px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 min-w-32">
<span className="filter-value">All Performance</span>
<i className="w-4 h-4 ml-2" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-menu absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
<div className="p-1">
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="all">All Performance</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="overall-roi">Overall ROI Range</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="30day-roi">Last 30-Day ROI</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="win-rate">Win Rate Range</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="star-rating">Star Rating</div>
</div>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-1">System Type</label>
<button className="filter-dropdown flex items-center px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 min-w-32">
<span className="filter-value">All Systems</span>
<i className="w-4 h-4 ml-2" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-menu absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
<div className="p-1">
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="all">All Systems</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="official">BettingPros Official</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="community">Community Systems</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="my-created">My Created Systems</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="my-tracked">My Tracked Systems</div>
</div>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-1">Net Units</label>
<button className="filter-dropdown flex items-center px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 min-w-24">
<span className="filter-value">All Units</span>
<i className="w-4 h-4 ml-2" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-menu absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
<div className="p-1">
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="all">All Units</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="50">+50 Units</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="100">+100 Units</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="250">+250 Units</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="custom">Custom Range</div>
</div>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-1">Sort By</label>
<button className="filter-dropdown flex items-center px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 min-w-32">
<span className="filter-value">ROI (High to Low)</span>
<i className="w-4 h-4 ml-2" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-menu absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lgz-10">
<div className="p-1">
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="roi-high">ROI (High to Low)</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="roi-low">ROI (Low to High)</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="units-high">Net Units (High to Low)</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="units-low">Net Units (Low to High)</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="win-rate">Win Rate</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="rating">Star Rating</div>
<div className="dropdown-item px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer" data-value="name">System Name</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between">
<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" id="advanced-filters-toggle">
<i className="w-4 h-4 mr-2" data-lucide="filter"></i>
                            Advanced Filters
                            <i className="w-4 h-4 ml-2 transition-transform duration-200" data-lucide="chevron-down"></i>
</button>
<button className="text-sm text-gray-500 hover:text-gray-700" id="clear-filters">Clear All Filters</button>
</div>

<div className="hidden mt-4 p-4 bg-gray-50 rounded-lg space-y-4" id="advanced-filters-panel">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">ROI Range (%)</label>
<div className="flex items-center space-x-2">
<input className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Min" type="number"/>
<span className="text-gray-500">to</span>
<input className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Max" type="number"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Win Rate Range (%)</label>
<div className="flex items-center space-x-2">
<input className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Min" type="number"/>
<span className="text-gray-500">to</span>
<input className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Max" type="number"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Minimum Bets</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., 100" type="number"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
<select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
<option value="all">All Time</option>
<option value="last-30">Last 30 Days</option>
<option value="last-90">Last 90 Days</option>
<option value="current-season">Current Season</option>
<option value="last-season">Last Season</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Minimum Star Rating</label>
<div className="star-rating">
<i className="star w-5 h-5" data-lucide="star" data-rating="1"></i>
<i className="star w-5 h-5" data-lucide="star" data-rating="2"></i>
<i className="star w-5 h-5" data-lucide="star" data-rating="3"></i>
<i className="star w-5 h-5" data-lucide="star" data-rating="4"></i>
<i className="star w-5 h-5" data-lucide="star" data-rating="5"></i>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
<select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
<option value="all">All Systems</option>
<option value="active">Active Only</option>
<option value="inactive">Inactive Only</option>
<option value="hot-streak">Hot Streak</option>
</select>
</div>
</div>
<div className="flex justify-end space-x-3">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Reset</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">Apply Filters</button>
</div>
</div>
</div>

<div className="flex-1 overflow-auto custom-scrollbar">
<div className="px-6 py-6">
<div className="space-y-4 slide-up stagger-3">

<div className="bg-white rounded-lg border border-gray-200 p-6 card-hover">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center space-x-3 mb-3">
<h3 className="text-lg font-semibold text-gray-900">NFL Home Dog System</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                Official
                                            </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
<i className="w-3 h-3 mr-1" data-lucide="fire"></i>
                                                Hot Streak
                                            </span>
</div>
<p className="text-sm text-gray-600 mb-4">Bet on home teams getting 7+ points in NFL games when they're coming off a loss.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
<div className="text-center">
<div className="text-2xl font-bold text-green-600">+24.7%</div>
<div className="text-xs text-gray-500">ROI</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-gray-900">+187.5</div>
<div className="text-xs text-gray-500">Net Units</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-gray-900">58.3%</div>
<div className="text-xs text-gray-500">Win Rate</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-gray-900">342</div>
<div className="text-xs text-gray-500">Total Bets</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-1">
<div className="star-rating">
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star active w-4 h-4" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-500">(4.8)</span>
</div>
<div className="flex items-center space-x-2 text-sm text-gray-500">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Last pick: 2 days ago</span>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                    Details
                                                </button>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                                                    Track System
                                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6 card-hover">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center space-x-3 mb-3">
<h3 className="text-lg font-semibold text-gray-900">NBA Over/Under Value</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Community
                                            </span>
</div>
<p className="text-sm text-gray-600 mb-4">Target overs when teams score 10+ points above season average in last 3 games.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
<div className="text-center">
<div className="text-2xl font-bold text-green-600">+18.2%</div>
<div className="text-xs text-gray-500">ROI</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-gray-900">+94.3</div>
<div className="text-xs text-gray-500">Net Units</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-gray-900">54.7%</div>
<div className="text-xs text-gray-500">Win Rate</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-gray-900">218</div>
<div className="text-xs text-gray-500">Total Bets</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-1">
<div className="star-rating">
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star w-4 h-4" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-500">(4.2)</span>
</div>
<div className="flex items-center space-x-2 text-sm text-gray-500">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Last pick: 1 day ago</span>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                    Details
                                                </button>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                                                    Track System
                                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6 card-hover">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center space-x-3 mb-3">
<h3 className="text-lg font-semibold text-gray-900">MLB Fade the Public</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                Official
                                            </span>
</div>
<p className="text-sm text-gray-600 mb-4">Bet against teams with 75%+ public backing in divisional games.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
<div className="text-center">
<div className="text-2xl font-bold text-green-600">+15.8%</div>
<div className="text-xs text-gray-500">ROI</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-gray-900">+76.2</div>
<div className="text-xs text-gray-500">Net Units</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-gray-900">52.1%</div>
<div className="text-xs text-gray-500">Win Rate</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-gray-900">489</div>
<div className="text-xs text-gray-500">Total Bets</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-1">
<div className="star-rating">
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star active w-4 h-4" data-lucide="star"></i>
<i className="star w-4 h-4" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-500">(4.1)</span>
</div>
<div className="flex items-center space-x-2 text-sm text-gray-500">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Last pick: 4 days ago</span>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                    Details
                                                </button>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                                                    Track System
                                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center mt-8">
<button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4 mr-2" data-lucide="refresh-cw"></i>
                                    Load More Systems
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
