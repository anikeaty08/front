import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        // Sample system data
        const systemsData = [
            {
                id: 1,
                name: "Elite Road Dogs",
                sport: "NFL",
                market: "Spread",
                roi: 28.4,
                winRate: 67.2,
                picks: 143,
                streak: 8,
                streakType: "W",
                type: "premium",
                verified: true,
                description: "Target underdog teams playing on the road in specific situations"
            },
            {
                id: 2,
                name: "Over/Under Specialist",
                sport: "NBA",
                market: "Total",
                roi: 22.1,
                winRate: 71.4,
                picks: 89,
                streak: 4,
                streakType: "W",
                type: "public",
                verified: true,
                description: "Advanced totals betting system for NBA games"
            },
            {
                id: 3,
                name: "Divisional Dogs",
                sport: "NHL",
                market: "Spread",
                roi: 31.7,
                winRate: 64.8,
                picks: 76,
                streak: 6,
                streakType: "W",
                type: "premium",
                verified: true,
                description: "Underdog teams in divisional matchups"
            },
            {
                id: 4,
                name: "Prime Time Favorites",
                sport: "NFL",
                market: "Moneyline",
                roi: 18.9,
                winRate: 58.3,
                picks: 234,
                streak: 2,
                streakType: "L",
                type: "public",
                verified: false,
                description: "Favorite teams in primetime games"
            },
            {
                id: 5,
                name: "Home Court Advantage",
                sport: "NBA",
                market: "Spread",
                roi: 15.6,
                winRate: 62.1,
                picks: 178,
                streak: 3,
                streakType: "W",
                type: "trending",
                verified: true,
                description: "Home teams in specific scheduling situations"
            }
        ];

        let currentPage = 1;
        const itemsPerPage = 25;
        let filteredSystems = [...systemsData];
        let currentSort = 'roi-desc';

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            lucide.createIcons();
            renderSystemsTable();
            setupEventListeners();
        });

        function setupEventListeners() {
            // Navigation
            document.getElementById('nav-home').addEventListener('click', (e) => {
                e.preventDefault();
                showPage('systems-home');
            });

            document.getElementById('nav-all-systems').addEventListener('click', (e) => {
                e.preventDefault();
                showPage('systems-directory');
            });

            // Mobile menu
            document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
            document.getElementById('mobile-overlay').addEventListener('click', toggleMobileMenu);

            // Advanced filters
            document.getElementById('advanced-filters-btn').addEventListener('click', toggleAdvancedFilters);
            document.getElementById('close-advanced-filters').addEventListener('click', toggleAdvancedFilters);

            // Filter dropdowns
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const dropdown = btn.nextElementSibling;
                    closeAllDropdowns();
                    dropdown.classList.toggle('active');
                });
            });

            // Sort select
            document.getElementById('sort-select').addEventListener('change', (e) => {
                currentSort = e.target.value;
                applySortAndFilter();
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', closeAllDropdowns);

            // Table sorting
            document.querySelectorAll('.table-sort').forEach(header => {
                header.addEventListener('click', () => {
                    const sortKey = header.dataset.sort;
                    handleTableSort(sortKey);
                });
            });
        }

        function showPage(pageId) {
            document.querySelectorAll('[id$="-home"], [id$="-directory"]').forEach(page => {
                page.classList.add('hidden');
            });
            document.getElementById(pageId).classList.remove('hidden');

            // Update nav active state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-blue-600', 'bg-blue-50');
                link.classList.add('text-gray-700');
            });

            if (pageId === 'systems-home') {
                document.getElementById('nav-home').classList.add('text-blue-600', 'bg-blue-50');
                document.getElementById('nav-home').classList.remove('text-gray-700');
                document.getElementById('page-title').textContent = 'Systems Home';
                document.getElementById('page-subtitle').textContent = 'Discover and track profitable betting systems';
            } else if (pageId === 'systems-directory') {
                document.getElementById('nav-all-systems').classList.add('text-blue-600', 'bg-blue-50');
                document.getElementById('nav-all-systems').classList.remove('text-gray-700');
                document.getElementById('page-title').textContent = 'Systems Directory';
                document.getElementById('page-subtitle').textContent = 'Browse all available betting systems';
            }
        }

        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-overlay');
            
            sidebar.classList.toggle('-translate-x-full');
            overlay.classList.toggle('hidden');
        }

        function toggleSubmenu(submenuId) {
            const submenu = document.getElementById(submenuId + '-submenu');
            const chevron = document.getElementById(submenuId + '-chevron');
            
            submenu.classList.toggle('hidden');
            chevron.classList.toggle('rotate-180');
        }

        function toggleAdvancedFilters() {
            const panel = document.getElementById('advanced-filters-panel');
            panel.classList.toggle('active');
        }

        function closeAllDropdowns() {
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }

        function renderSystemsTable() {
            const tbody = document.getElementById('systems-table-body');
            tbody.innerHTML = '';

            filteredSystems.forEach(system => {
                const row = document.createElement('tr');
                row.className = 'hover:bg-gray-50';
                
                const roiColor = system.roi >= 20 ? 'text-green-600' : system.roi >= 10 ? 'text-blue-600' : 'text-gray-600';
                const winRateColor = system.winRate >= 65 ? 'text-green-600' : system.winRate >= 55 ? 'text-blue-600' : 'text-gray-600';
                const streakColor = system.streakType === 'W' && system.streak >= 5 ? 'text-orange-600' : system.streakType === 'W' ? 'text-green-600' : 'text-red-600';
                
                row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div>
                                <div class="text-sm font-medium text-gray-900">${system.name}</div>
                                <div class="text-sm text-gray-500">${system.description}</div>
                            </div>
                            ${system.verified ? '<i data-lucide="check-circle" class="h-4 w-4 text-blue-600 ml-2"></i>' : ''}
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${getSportColor(system.sport)}-100 text-${getSportColor(system.sport)}-800">
                            ${system.sport}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${system.market}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ${roiColor}">+${system.roi}%</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ${winRateColor}">${system.winRate}%</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${system.picks}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="text-sm font-medium ${streakColor}">
                            ${system.streak}${system.streakType}
                            ${system.streakType === 'W' && system.streak >= 5 ? '<i data-lucide="flame" class="h-4 w-4 inline ml-1 text-orange-500"></i>' : ''}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div class="flex gap-2">
                            <button class="follow-btn px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs">
                                Follow
                            </button>
                            <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 text-xs">
                                View
                            </button>
                        </div>
                    </td>
                `;
                
                tbody.appendChild(row);
            });

            // Recreate icons for the new content
            lucide.createIcons();
            
            // Update results count
            document.getElementById('results-count').textContent = filteredSystems.length;
        }

        function getSportColor(sport) {
            const colors = {
                'NFL': 'blue',
                'NBA': 'green',
                'NHL': 'purple',
                'MLB': 'orange',
                'NCAAF': 'red',
                'NCAAB': 'yellow'
            };
            return colors[sport] || 'gray';
        }

        function handleTableSort(sortKey) {
            const header = document.querySelector(`[data-sort="${sortKey}"]`);
            const currentDirection = header.classList.contains('asc') ? 'asc' : 'desc';
            const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
            
            // Remove all sort classes
            document.querySelectorAll('.table-sort').forEach(h => {
                h.classList.remove('asc', 'desc');
            });
            
            // Add new sort class
            header.classList.add(newDirection);
            
            // Sort the data
            filteredSystems.sort((a, b) => {
                let aVal = a[sortKey];
                let bVal = b[sortKey];
                
                if (typeof aVal === 'string') {
                    aVal = aVal.toLowerCase();
                    bVal = bVal.toLowerCase();
                }
                
                if (newDirection === 'asc') {
                    return aVal > bVal ? 1 : -1;
                } else {
                    return aVal < bVal ? 1 : -1;
                }
            });
            
            renderSystemsTable();
        }

        function applySortAndFilter() {
            // Apply current filters and sort
            renderSystemsTable();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen">

<button className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200" id="mobile-menu-btn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>

<aside className="fixed lg:relative inset-y-0 left-0 z-40 w-64 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 bg-white border-r border-gray-200 overflow-y-auto" id="sidebar">
<div className="p-6">
<div className="flex items-center gap-3 mb-8">
<div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
<i className="h-5 w-5 text-white" data-lucide="trending-up"></i>
</div>
<span className="text-xl font-semibold tracking-tight">BettingPros</span>
</div>
<nav className="space-y-1">
<div className="text-sm font-medium text-gray-500 mb-3">BETTING SYSTEMS</div>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg" href="#" id="nav-home">
<i className="h-4 w-4" data-lucide="home"></i>
                        Systems Home
                    </a>
<div className="space-y-1">
<button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg w-full" onclick="toggleSubmenu('picks')">
<i className="h-4 w-4" data-lucide="target"></i>
<span className="flex-1 text-left">Systems Picks</span>
<i className="h-4 w-4 transform transition-transform" data-lucide="chevron-down" id="picks-chevron"></i>
</button>
<div className="ml-7 space-y-1 hidden" id="picks-submenu">
<a className="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg" href="#">Today's Picks</a>
<a className="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg" href="#">Hot Streaks</a>
<a className="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg" href="#">My System Picks</a>
</div>
</div>
<div className="space-y-1">
<button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg w-full" onclick="toggleSubmenu('directory')">
<i className="h-4 w-4" data-lucide="database"></i>
<span className="flex-1 text-left">Systems Directory</span>
<i className="h-4 w-4 transform transition-transform" data-lucide="chevron-down" id="directory-chevron"></i>
</button>
<div className="ml-7 space-y-1 hidden" id="directory-submenu">
<a className="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg" href="#" id="nav-all-systems">All Systems</a>
<a className="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg" href="#">Trending Systems</a>
<a className="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg" href="#">My Systems</a>
</div>
</div>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg" href="#">
<i className="h-4 w-4" data-lucide="settings"></i>
                        Systems Builder
                    </a>
</nav>
</div>
</aside>

<div className="fixed inset-0 bg-black/50 z-30 lg:hidden hidden" id="mobile-overlay"></div>

<div className="flex-1 flex flex-col overflow-hidden">

<header className="bg-white border-b border-gray-200 px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="lg:hidden w-8"></div>
<div>
<h1 className="text-2xl font-semibold tracking-tight" id="page-title">Systems Home</h1>
<p className="text-sm text-gray-600" id="page-subtitle">Discover and track profitable betting systems</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<input className="w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search systems..." type="text"/>
<i className="h-4 w-4 absolute left-3 top-3 text-gray-400" data-lucide="search"></i>
</div>
<button className="relative p-2 text-gray-400 hover:text-gray-600">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
</button>
<div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
<span className="text-white text-sm font-medium">BP</span>
</div>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto">

<div className="p-6" id="systems-home">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Active Systems</p>
<p className="text-2xl font-semibold">247</p>
<p className="text-sm text-green-600">+12 this week</p>
</div>
<div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="h-6 w-6 text-blue-600" data-lucide="database"></i>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Today's Picks</p>
<p className="text-2xl font-semibold">43</p>
<p className="text-sm text-blue-600">8 premium picks</p>
</div>
<div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
<i className="h-6 w-6 text-green-600" data-lucide="target"></i>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Hot Streaks</p>
<p className="text-2xl font-semibold">18</p>
<p className="text-sm text-orange-600">5+ win streaks</p>
</div>
<div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
<i className="h-6 w-6 text-orange-600" data-lucide="flame"></i>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Avg ROI</p>
<p className="text-2xl font-semibold">+14.2%</p>
<p className="text-sm text-green-600">Last 30 days</p>
</div>
<div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
<i className="h-6 w-6 text-purple-600" data-lucide="trending-up"></i>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 mb-8">
<div className="p-6 border-b border-gray-200">
<h2 className="text-lg font-semibold">Today's Top System Picks</h2>
<p className="text-sm text-gray-600">Premium picks from our highest-performing systems</p>
</div>
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">NFL</span>
<span className="text-xs text-gray-500">Elite Road Dogs</span>
</div>
<div className="mb-3">
<p className="font-semibold">Cowboys @ Eagles</p>
<p className="text-sm text-gray-600">Cowboys +7.5 (-110)</p>
</div>
<div className="flex items-center justify-between text-xs text-gray-500 mb-3">
<span>ROI: +28.4%</span>
<span>6 game streak</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors">Bet Now</button>
<button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">View System</button>
</div>
</div>
<div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">NBA</span>
<span className="text-xs text-gray-500">Home Favorites</span>
</div>
<div className="mb-3">
<p className="font-semibold">Lakers vs Celtics</p>
<p className="text-sm text-gray-600">Under 218.5 (-105)</p>
</div>
<div className="flex items-center justify-between text-xs text-gray-500 mb-3">
<span>ROI: +22.1%</span>
<span>4 game streak</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors">Bet Now</button>
<button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">View System</button>
</div>
</div>
<div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">NHL</span>
<span className="text-xs text-gray-500">Divisional Dogs</span>
</div>
<div className="mb-3">
<p className="font-semibold">Rangers @ Bruins</p>
<p className="text-sm text-gray-600">Rangers +1.5 (-140)</p>
</div>
<div className="flex items-center justify-between text-xs text-gray-500 mb-3">
<span>ROI: +31.7%</span>
<span>8 game streak</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors">Bet Now</button>
<button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">View System</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 mb-8">
<div className="p-6 border-b border-gray-200">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold">Hot Streak Systems</h2>
<p className="text-sm text-gray-600">Systems currently on significant winning runs</p>
</div>
<a className="text-sm text-blue-600 hover:text-blue-800" href="#">View All</a>
</div>
</div>
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="border border-gray-200 rounded-lg p-4">
<div className="flex items-center gap-2 mb-2">
<i className="h-4 w-4 text-orange-500" data-lucide="flame"></i>
<span className="text-sm font-medium text-orange-600">8 Straight Wins!</span>
</div>
<h3 className="font-semibold mb-2">Elite Underdog Bounce-Back</h3>
<p className="text-sm text-gray-600 mb-3">+48% ROI (Last 7 Days)</p>
<div className="text-xs text-gray-500 mb-3">Overall: 67% Win Rate</div>
<button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors">Follow System</button>
</div>
<div className="border border-gray-200 rounded-lg p-4">
<div className="flex items-center gap-2 mb-2">
<i className="h-4 w-4 text-orange-500" data-lucide="flame"></i>
<span className="text-sm font-medium text-orange-600">6 Straight Wins!</span>
</div>
<h3 className="font-semibold mb-2">Over/Under Specialist</h3>
<p className="text-sm text-gray-600 mb-3">+35% ROI (Last 7 Days)</p>
<div className="text-xs text-gray-500 mb-3">Overall: 71% Win Rate</div>
<button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors">Follow System</button>
</div>
<div className="border border-gray-200 rounded-lg p-4">
<div className="flex items-center gap-2 mb-2">
<i className="h-4 w-4 text-orange-500" data-lucide="flame"></i>
<span className="text-sm font-medium text-orange-600">5 Straight Wins!</span>
</div>
<h3 className="font-semibold mb-2">Prime Time Favorites</h3>
<p className="text-sm text-gray-600 mb-3">+42% ROI (Last 7 Days)</p>
<div className="text-xs text-gray-500 mb-3">Overall: 64% Win Rate</div>
<button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors">Follow System</button>
</div>
<div className="border border-gray-200 rounded-lg p-4">
<div className="flex items-center gap-2 mb-2">
<i className="h-4 w-4 text-orange-500" data-lucide="flame"></i>
<span className="text-sm font-medium text-orange-600">7 Straight Wins!</span>
</div>
<h3 className="font-semibold mb-2">Totals Momentum</h3>
<p className="text-sm text-gray-600 mb-3">+52% ROI (Last 7 Days)</p>
<div className="text-xs text-gray-500 mb-3">Overall: 69% Win Rate</div>
<button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors">Follow System</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200">
<div className="p-6 border-b border-gray-200">
<h2 className="text-lg font-semibold mb-4">Systems Directory</h2>
<div className="relative mb-4">
<input className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search all systems..." type="text"/>
<i className="h-4 w-4 absolute left-3 top-4 text-gray-400" data-lucide="search"></i>
</div>
<div className="flex flex-wrap gap-2">
<button className="filter-chip bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-100">NFL Systems</button>
<button className="filter-chip bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-100">High ROI</button>
<button className="filter-chip bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-purple-100">Player Props</button>
<button className="filter-chip bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-100">Hot Streaks</button>
</div>
</div>
</div>
</div>

<div className="hidden" id="systems-directory">
<div className="bg-white border-b border-gray-200 p-6">

<div className="relative mb-6">
<input className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="directory-search" placeholder="Search systems by name..." type="text"/>
<i className="h-4 w-4 absolute left-3 top-4 text-gray-400" data-lucide="search"></i>
</div>

<div className="flex flex-wrap gap-4 mb-4">
<div className="filter-dropdown">
<button className="filter-btn flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" data-filter="sport">
<span>Sport</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-content absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-48">
<div className="p-2 space-y-1">
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="all">All Sports</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="nfl">NFL</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="nba">NBA</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="mlb">MLB</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="nhl">NHL</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="ncaaf">NCAAF</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="ncaab">NCAAB</button>
</div>
</div>
</div>
<div className="filter-dropdown">
<button className="filter-btn flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" data-filter="market">
<span>Market</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-content absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-48">
<div className="p-2 space-y-1">
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="all">All Markets</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="spread">Spread</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="moneyline">Moneyline</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="total">Total</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="props">Props</button>
</div>
</div>
</div>
<div className="filter-dropdown">
<button className="filter-btn flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" data-filter="performance">
<span>Performance</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-content absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-64">
<div className="p-4 space-y-3">
<div>
<label className="block text-sm font-medium mb-2">ROI Range</label>
<div className="flex gap-2">
<input className="w-full px-3 py-2 border border-gray-300 rounded text-sm" placeholder="Min %" type="number"/>
<input className="w-full px-3 py-2 border border-gray-300 rounded text-sm" placeholder="Max %" type="number"/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2">Win Rate Range</label>
<div className="flex gap-2">
<input className="w-full px-3 py-2 border border-gray-300 rounded text-sm" placeholder="Min %" type="number"/>
<input className="w-full px-3 py-2 border border-gray-300 rounded text-sm" placeholder="Max %" type="number"/>
</div>
</div>
</div>
</div>
</div>
<div className="filter-dropdown">
<button className="filter-btn flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" data-filter="system-type">
<span>System Type</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-content absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-48">
<div className="p-2 space-y-1">
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="all">All Systems</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100rounded text-sm" data-value="trending">Trending</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="premium">Premium</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="public">Public</button>
<button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" data-value="verified">Verified</button>
</div>
</div>
</div>
<button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" id="advanced-filters-btn">
<i className="h-4 w-4" data-lucide="sliders"></i>
                                Advanced Filters
                            </button>
</div>

<div className="flex flex-wrap gap-2 mb-4 hidden" id="active-filters">
<div className="text-sm text-gray-600">Active Filters:</div>

</div>
</div>

<div className="bg-white border-b border-gray-200 px-6 py-4">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">
                                Showing <span id="results-count">247</span> systems
                            </div>
<div className="flex items-center gap-4">
<select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" id="sort-select">
<option value="roi-desc">Highest ROI</option>
<option value="roi-asc">Lowest ROI</option>
<option value="winrate-desc">Highest Win Rate</option>
<option value="winrate-asc">Lowest Win Rate</option>
<option value="picks-desc">Most Picks</option>
<option value="picks-asc">Fewest Picks</option>
<option value="recent">Most Recent</option>
<option value="name-asc">Name A-Z</option>
<option value="name-desc">Name Z-A</option>
</select>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg hover:bg-gray-100" id="view-grid">
<i className="h-4 w-4" data-lucide="grid-3x3"></i>
</button>
<button className="p-2 rounded-lg bg-gray-100" id="view-list">
<i className="h-4 w-4" data-lucide="list"></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-gray-50">
<tr>
<th className="table-sort px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" data-sort="name">
                                            System Name
                                        </th>
<th className="table-sort px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" data-sort="sport">
                                            Sport
                                        </th>
<th className="table-sort px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" data-sort="market">
                                            Market
                                        </th>
<th className="table-sort px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" data-sort="roi">
                                            ROI
                                        </th>
<th className="table-sort px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" data-sort="winrate">
                                            Win Rate
                                        </th>
<th className="table-sort px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" data-sort="picks">
                                            Picks
                                        </th>
<th className="table-sort px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" data-sort="streak">
                                            Streak
                                        </th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200" id="systems-table-body">

</tbody>
</table>
</div>
</div>

<div className="bg-white border-t border-gray-200 px-6 py-4">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">
                                Showing <span id="page-start">1</span> to <span id="page-end">25</span> of <span id="total-results">247</span> results
                            </div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" id="prev-page">
                                    Previous
                                </button>
<div className="flex gap-1" id="page-numbers">

</div>
<button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50" id="next-page">
                                    Next
                                </button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

<div className="advanced-filters-panel fixed right-0 top-0 h-full w-96 bg-white border-l border-gray-200 shadow-xl z-50 overflow-y-auto" id="advanced-filters-panel">
<div className="p-6 border-b border-gray-200">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">Advanced Filters</h3>
<button className="p-2 hover:bg-gray-100 rounded-lg" id="close-advanced-filters">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
</div>
<div className="p-6 space-y-6">

<div>
<h4 className="text-sm font-medium text-gray-900 mb-3">Performance Metrics</h4>
<div className="space-y-4">
<div>
<label className="block text-sm text-gray-700 mb-2">ROI Range (%)</label>
<div className="flex gap-2">
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Min" type="number"/>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Max" type="number"/>
</div>
</div>
<div>
<label className="block text-sm text-gray-700 mb-2">Win Rate Range (%)</label>
<div className="flex gap-2">
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Min" type="number"/>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Max" type="number"/>
</div>
</div>
<div>
<label className="block text-sm text-gray-700 mb-2">Minimum Picks</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="e.g., 50" type="number"/>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-gray-900 mb-3">Time Period</h4>
<div className="space-y-2">
<label className="flex items-center">
<input checked="" className="mr-2" name="time-period" type="radio" value="all"/>
<span className="text-sm">All Time</span>
</label>
<label className="flex items-center">
<input className="mr-2" name="time-period" type="radio" value="season"/>
<span className="text-sm">Current Season</span>
</label>
<label className="flex items-center">
<input className="mr-2" name="time-period" type="radio" value="month"/>
<span className="text-sm">Last 30 Days</span>
</label>
<label className="flex items-center">
<input className="mr-2" name="time-period" type="radio" value="week"/>
<span className="text-sm">Last 7 Days</span>
</label>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-gray-900 mb-3">System Status</h4>
<div className="space-y-2">
<label className="flex items-center">
<input checked="" className="mr-2" type="checkbox"/>
<span className="text-sm">Active Systems</span>
</label>
<label className="flex items-center">
<input className="mr-2" type="checkbox"/>
<span className="text-sm">Hot Streaks (5+ wins)</span>
</label>
<label className="flex items-center">
<input className="mr-2" type="checkbox"/>
<span className="text-sm">Recently Updated</span>
</label>
<label className="flex items-center">
<input className="mr-2" type="checkbox"/>
<span className="text-sm">Verified Systems</span>
</label>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-gray-900 mb-3">Current Streak</h4>
<div className="space-y-2">
<label className="flex items-center">
<input className="mr-2" type="checkbox"/>
<span className="text-sm">3+ Win Streak</span>
</label>
<label className="flex items-center">
<input className="mr-2" type="checkbox"/>
<span className="text-sm">5+ Win Streak</span>
</label>
<label className="flex items-center">
<input className="mr-2" type="checkbox"/>
<span className="text-sm">10+ Win Streak</span>
</label>
</div>
</div>
</div>
<div className="border-t border-gray-200 p-6">
<div className="flex gap-3">
<button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors" id="apply-filters">
                    Apply Filters
                </button>
<button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" id="reset-filters">
                    Reset
                </button>
</div>
</div>
</div>


    </>
  );
}
