import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Theme toggle functionality
        function toggleTheme() {
            const body = document.body;
            const isDark = body.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                body.removeAttribute('data-theme');
                document.querySelector('#theme-toggle i').setAttribute('data-lucide', 'moon');
            } else {
                body.setAttribute('data-theme', 'dark');
                document.querySelector('#theme-toggle i').setAttribute('data-lucide', 'sun');
            }
            
            lucide.createIcons();
        }
        
        // Deal modal functionality
        function openDealModal(dealId) {
            const modal = document.getElementById('dealModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            
            // Analytics event
            console.log('Analytics: view_deal', { deal_id: dealId });
        }
        
        function closeDealModal() {
            const modal = document.getElementById('dealModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }
        
        // Close modal on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeDealModal();
            }
        });
        
        // Close modal on background click
        document.getElementById('dealModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeDealModal();
            }
        });
        
        // Initialize price trend chart
        const ctx = document.getElementById('priceChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Median Price',
                    data: [385000, 392000, 398000, 405000, 418000, 425000],
                    borderColor: '#2E5BFF',
                    backgroundColor: 'rgba(46, 91, 255, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
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
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000) + 'K';
                            }
                        }
                    }
                }
            }
        });
        
        // Filter chip interactions
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.addEventListener('click', function() {
                // Toggle active state within the same group
                const siblings = this.parentElement.querySelectorAll('.filter-chip');
                siblings.forEach(sibling => sibling.classList.remove('active'));
                this.classList.add('active');
                
                // Analytics event
                console.log('Analytics: apply_filter', { 
                    filter_type: this.textContent,
                    filter_group: this.parentElement.querySelector('.text-muted').textContent
                });
            });
        });
        
        // Search input analytics
        document.querySelector('.search-input').addEventListener('input', function() {
            // Debounce search analytics
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                if (this.value.length > 2) {
                    console.log('Analytics: search_query', { query: this.value });
                }
            }, 500);
        });
        
        // Property card click analytics
        document.querySelectorAll('.property-card').forEach(card => {
            card.addEventListener('click', function() {
                const price = this.querySelector('h3').textContent;
                const address = this.querySelector('p').textContent;
                console.log('Analytics: view_property', { price, address });
            });
        });
        
        // Simulate real-time data updates
        setInterval(function() {
            // Update property count with slight variation
            const countElement = document.querySelector('header span');
            const currentCount = parseInt(countElement.textContent.replace(/[^\d]/g, ''));
            const newCount = currentCount + Math.floor(Math.random() * 3) - 1;
            countElement.textContent = `${newCount.toLocaleString()} properties`;
        }, 30000);
        
        // Add hover effects to navigation items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                console.log('Analytics: navigation', { page: this.textContent.trim() });
            });
        });
        
        // Initialize tooltips
        document.querySelectorAll('.tooltip').forEach(tooltip => {
            tooltip.addEventListener('mouseenter', function() {
                console.log('Analytics: tooltip_view', { tooltip: this.getAttribute('data-tooltip') });
            });
        });
        
        // Copilot interaction
        document.querySelectorAll('[data-lucide="sparkles"]').forEach(button => {
            button.parentElement.addEventListener('click', function() {
                console.log('Analytics: open_copilot');
            });
        });
        
        console.log('Realtyze app initialized - Demo mode active');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-warning text-white px-4 py-2 text-center text-sm animate-fade-in">
<i className="inline w-4 h-4 mr-2" data-lucide="alert-triangle"></i>
        Demo data - Connect your data sources in Settings for live market data
    </div>

<div className="flex h-screen">

<div className="w-64 bg-surface border-r border-default flex flex-col animate-slide-up">

<div className="p-6 border-b border-default">
<div className="logo text-xl">Realtyze</div>
<div className="text-muted text-sm mt-1">Invest intelligently</div>
</div>

<nav className="flex-1 p-4">
<div className="space-y-2">
<div className="nav-item active delay-100 animate-slide-up">
<i className="inline w-4 h-4 mr-3" data-lucide="search"></i>Discover
                    </div>
<div className="nav-item delay-200 animate-slide-up">
<i className="inline w-4 h-4 mr-3" data-lucide="target"></i>Matches
                    </div>
<div className="nav-item delay-300 animate-slide-up">
<i className="inline w-4 h-4 mr-3" data-lucide="calculator"></i>Underwrite
                    </div>
<div className="nav-item delay-400 animate-slide-up">
<i className="inline w-4 h-4 mr-3" data-lucide="briefcase"></i>Portfolio
                    </div>
<div className="border-t border-default my-4"></div>
<div className="nav-item animate-slide-up" style={{animationDelay: '500ms'}}>
<i className="inline w-4 h-4 mr-3" data-lucide="folder"></i>Deal Rooms
                    </div>
<div className="nav-item animate-slide-up" style={{animationDelay: '600ms'}}>
<i className="inline w-4 h-4 mr-3" data-lucide="settings"></i>Settings
                    </div>
</div>
</nav>

<div className="p-4 border-t border-default animate-fade-in" style={{animationDelay: '700ms'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-medium flex items-center justify-center">
                        JD
                    </div>
<div className="flex-1">
<div className="text-sm font-medium">John Doe</div>
<div className="text-muted text-xs">Accredited Investor</div>
</div>
<button className="text-muted hover:text-primary">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden">

<header className="bg-surface border-b border-default px-6 py-4 animate-fade-in">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<h1 className="text-xl font-semibold tracking-tight">Discover Properties</h1>
<div className="flex items-center gap-2">
<span className="text-sm text-muted">1,247 properties</span>
<div className="badge badge-success">
<i className="w-3 h-3" data-lucide="trending-up"></i>
                                Market Active
                            </div>
</div>
</div>
<div className="flex items-center gap-4">

<div className="relative">
<i className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" data-lucide="search"></i>
<input className="search-input pl-10 w-80" placeholder="Search properties, markets..." type="text"/>
</div>

<button className="p-2 text-muted hover:text-primary transition-colors" id="theme-toggle" onclick="toggleTheme()">
<i className="w-4 h-4" data-lucide="moon"></i>
</button>

<button className="btn-primary">
<i className="w-4 h-4 mr-2" data-lucide="sparkles"></i>
                            Copilot
                        </button>
</div>
</div>
</header>

<div className="bg-surface border-b border-default px-6 py-4 animate-slide-up delay-100">
<div className="flex items-center gap-4 flex-wrap">

<div className="flex items-center gap-2">
<span className="text-sm text-muted">Asset Type:</span>
<div className="filter-chip active">SFR</div>
<div className="filter-chip">Multifamily</div>
<div className="filter-chip">Industrial</div>
<div className="filter-chip">Office</div>
</div>
<div className="w-px h-6 bg-border"></div>

<div className="flex items-center gap-2">
<span className="text-sm text-muted">Market:</span>
<div className="filter-chip active">Dallas</div>
<div className="filter-chip">Austin</div>
<div className="filter-chip">Houston</div>
</div>
<div className="w-px h-6 bg-border"></div>

<div className="flex items-center gap-2">
<span className="text-sm text-muted">Cap Rate:</span>
<div className="filter-chip">5%+</div>
<div className="filter-chip active">6%+</div>
<div className="filter-chip">7%+</div>
</div>
<div className="flex-1"></div>

<div className="flex bg-surface border border-default rounded-lg p-1">
<button className="p-2 rounded text-muted hover:text-primary bg-primary text-white">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
</button>
<button className="p-2 rounded text-muted hover:text-primary">
<i className="w-4 h-4" data-lucide="list"></i>
</button>
<button className="p-2 rounded text-muted hover:text-primary">
<i className="w-4 h-4" data-lucide="map"></i>
</button>
</div>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 p-6 overflow-y-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="property-card animate-slide-up delay-200" onclick="openDealModal('deal-1')">
<div className="relative">
<img alt="Property" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&amp;h=250&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<div className="badge badge-success">New Listing</div>
</div>
<div className="absolute top-4 right-4">
<button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
<i className="w-4 h-4 text-gray-600" data-lucide="heart"></i>
</button>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="font-semibold text-lg">$485,000</h3>
<p className="text-muted text-sm">1247 Oak Street, Dallas, TX 75201</p>
</div>
<div className="text-right">
<div className="text-accent font-semibold">6.2%</div>
<div className="text-muted text-xs">Cap Rate</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-4 text-sm">
<div>
<div className="text-muted">Beds</div>
<div className="font-medium">3</div>
</div>
<div>
<div className="text-muted">Baths</div>
<div className="font-medium">2</div>
</div>
<div>
<div className="text-muted">Sq Ft</div>
<div className="font-medium">1,850</div>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-default">
<div className="flex gap-3">
<div className="tooltip" data-tooltip="Debt Service Coverage Ratio">
<div className="text-success font-medium text-sm">1.35 DSCR</div>
</div>
<div className="tooltip" data-tooltip="Cash on Cash Return">
<div className="text-primary font-medium text-sm">8.4% CoC</div>
</div>
</div>
<div className="text-muted text-xs">2 days ago</div>
</div>
</div>
</div>

<div className="property-card animate-slide-up delay-300" onclick="openDealModal('deal-2')">
<div className="relative">
<img alt="Property" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&amp;h=250&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<div className="badge badge-warning">Price Drop</div>
</div>
<div className="absolute top-4 right-4">
<button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
<i className="w-4 h-4 text-red-500 fill-current" data-lucide="heart"></i>
</button>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="font-semibold text-lg">$320,000</h3>
<p className="text-muted text-sm">5678 Pine Ave, Austin, TX 78701</p>
</div>
<div className="text-right">
<div className="text-accent font-semibold">7.1%</div>
<div className="text-muted text-xs">Cap Rate</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-4 text-sm">
<div>
<div className="text-muted">Beds</div>
<div className="font-medium">2</div>
</div>
<div>
<div className="text-muted">Baths</div>
<div className="font-medium">1.5</div>
</div>
<div>
<div className="text-muted">Sq Ft</div>
<div className="font-medium">1,200</div>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-default">
<div className="flex gap-3">
<div className="tooltip" data-tooltip="Debt Service Coverage Ratio">
<div className="text-success font-medium text-sm">1.42 DSCR</div>
</div>
<div className="tooltip" data-tooltip="Cash on Cash Return">
<div className="text-primary font-medium text-sm">9.2% CoC</div>
</div>
</div>
<div className="text-muted text-xs">5 days ago</div>
</div>
</div>
</div>

<div className="property-card animate-slide-up delay-400" onclick="openDealModal('deal-3')">
<div className="relative">
<img alt="Property" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&amp;h=250&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<div className="badge badge-primary">Hot Market</div>
</div>
<div className="absolute top-4 right-4">
<button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
<i className="w-4 h-4 text-gray-600" data-lucide="heart"></i>
</button>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="font-semibold text-lg">$675,000</h3>
<p className="text-muted text-sm">9012 Maple Dr, Houston, TX 77001</p>
</div>
<div className="text-right">
<div className="text-accent font-semibold">5.8%</div>
<div className="text-muted text-xs">Cap Rate</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-4 text-sm">
<div>
<div className="text-muted">Beds</div>
<div className="font-medium">4</div>
</div>
<div>
<div className="text-muted">Baths</div>
<div className="font-medium">3</div>
</div>
<div>
<div className="text-muted">Sq Ft</div>
<div className="font-medium">2,400</div>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-default">
<div className="flex gap-3">
<div className="tooltip" data-tooltip="Debt Service Coverage Ratio">
<div className="text-success font-medium text-sm">1.28 DSCR</div>
</div>
<div className="tooltip" data-tooltip="Cash on Cash Return">
<div className="text-primary font-medium text-sm">7.6% CoC</div>
</div>
</div>
<div className="text-muted text-xs">1 week ago</div>
</div>
</div>
</div>

<div className="property-card animate-slide-up" style={{animationDelay: '500ms'}}>
<div className="skeleton h-48 mb-4"></div>
<div className="p-4 space-y-3">
<div className="skeleton h-6 w-32"></div>
<div className="skeleton h-4 w-48"></div>
<div className="grid grid-cols-3 gap-4">
<div className="skeleton h-8"></div>
<div className="skeleton h-8"></div>
<div className="skeleton h-8"></div>
</div>
<div className="skeleton h-4 w-full"></div>
</div>
</div>
</div>

<div className="mt-8 text-center animate-fade-in" style={{animationDelay: '600ms'}}>
<button className="btn-secondary">
                            Load More Properties
                            <i className="w-4 h-4 ml-2" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="w-80 bg-surface border-l border-default p-6 overflow-y-auto animate-slide-up delay-300">
<h3 className="font-semibold mb-4">Market Insights</h3>

<div className="space-y-4 mb-6">
<div className="metric-card">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-muted">Avg Cap Rate</span>
<i className="w-4 h-4 text-success" data-lucide="trending-up"></i>
</div>
<div className="text-2xl font-semibold text-accent">6.4%</div>
<div className="text-xs text-success">+0.3% vs last month</div>
</div>
<div className="metric-card">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-muted">Median Price</span>
<i className="w-4 h-4 text-primary" data-lucide="home"></i>
</div>
<div className="text-2xl font-semibold text-primary">$425K</div>
<div className="text-xs text-success">+2.1% vs last month</div>
</div>
<div className="metric-card">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-muted">Days on Market</span>
<i className="w-4 h-4 text-warning" data-lucide="clock"></i>
</div>
<div className="text-2xl font-semibold text-warning">23</div>
<div className="text-xs text-danger">+5 vs last month</div>
</div>
</div>

<div className="mb-6">
<h4 className="font-medium mb-3">Price Trends</h4>
<div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-default">
<canvas height="200" id="priceChart" width="280"></canvas>
</div>
</div>

<div className="mb-6">
<h4 className="font-medium mb-3">Saved Searches</h4>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
<div>
<div className="font-medium text-sm">Dallas SFR 6%+</div>
<div className="text-xs text-muted">12 new results</div>
</div>
<button className="text-primary hover:text-primary-700">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
<div>
<div className="font-medium text-sm">Austin &lt;$400K</div>
<div className="text-xs text-muted">3 new results</div>
</div>
<button className="text-muted hover:text-primary">
<i className="w-4 h-4" data-lucide="bell-off"></i>
</button>
</div>
</div>
</div>

<div className="border border-default rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-primary" data-lucide="sparkles"></i>
<span className="font-medium text-sm">AI Copilot</span>
</div>
<div className="space-y-2 mb-3">
<button className="w-full text-left p-2 text-xs bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                "Find 6%+ cap in DFW near logistics hubs"
                            </button>
<button className="w-full text-left p-2 text-xs bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                "Show me trending neighborhoods in Austin"
                            </button>
<button className="w-full text-left p-2 text-xs bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                "Compare multifamily vs SFR returns"
                            </button>
</div>
<div className="flex gap-2">
<input className="flex-1 text-xs p-2 border border-default rounded" placeholder="Ask anything..." type="text"/>
<button className="p-2 bg-primary text-white rounded">
<i className="w-3 h-3" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center" id="dealModal">
<div className="bg-surface rounded-lg w-full max-w-6xl h-5/6 m-4 flex overflow-hidden animate-slide-up">

<div className="flex-1 p-6 overflow-y-auto">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">1247 Oak Street, Dallas, TX</h2>
<button className="p-2 text-muted hover:text-danger" onclick="closeDealModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="mb-6">
<img alt="Property" className="w-full h-64 object-cover rounded-lg" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&amp;h=400&amp;fit=crop"/>
</div>

<div className="grid grid-cols-2 gap-6 mb-6">
<div>
<h3 className="font-semibold mb-3">Property Details</h3>
<div className="space-y-2 text-sm">
<div className="flex justify-between">
<span className="text-muted">Property Type:</span>
<span>Single Family Residence</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Year Built:</span>
<span>2018</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Lot Size:</span>
<span>7,200 sq ft</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Parking:</span>
<span>2-car garage</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Condition:</span>
<span className="text-success">Excellent (9/10)</span>
</div>
</div>
</div>
<div>
<h3 className="font-semibold mb-3">Market Data</h3>
<div className="space-y-2 text-sm">
<div className="flex justify-between">
<span className="text-muted">Rent Growth (YoY):</span>
<span className="text-success">+4.2%</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Population Growth:</span>
<span className="text-success">+2.8%</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Job Growth:</span>
<span className="text-success">+3.1%</span>
</div>
<div className="flex justify-between">
<span className="text-muted">School Rating:</span>
<span>8.5/10</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Walkability:</span>
<span>72/100</span>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="font-semibold mb-3">Comparable Properties</h3>
<div className="grid grid-cols-3 gap-4">
<div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
<div className="font-medium">$472K</div>
<div className="text-xs text-muted">0.3 mi • 3/2 • 1,820 sqft</div>
<div className="text-xs text-success mt-1">+$13K adj.</div>
</div>
<div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
<div className="font-medium">$498K</div>
<div className="text-xs text-muted">0.5 mi • 3/2 • 1,900 sqft</div>
<div className="text-xs text-danger mt-1">-$8K adj.</div>
</div>
<div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
<div className="font-medium">$465K</div>
<div className="text-xs text-muted">0.7 mi • 2/2 • 1,750 sqft</div>
<div className="text-xs text-success mt-1">+$18K adj.</div>
</div>
</div>
</div>
</div>

<div className="w-96 bg-gray-50 dark:bg-gray-900 p-6 overflow-y-auto">
<h3 className="font-semibold mb-4">Underwriting Analysis</h3>

<div className="space-y-4 mb-6">
<div className="bg-surface p-4 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-muted">Net Operating Income</span>
<div className="tooltip" data-tooltip="Gross Rental Income - Operating Expenses">
<i className="w-4 h-4 text-muted" data-lucide="info"></i>
</div>
</div>
<div className="text-2xl font-semibold text-success">$28,440</div>
<div className="text-xs text-muted">Annual</div>
</div>
<div className="bg-surface p-4 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-muted">Cap Rate</span>
<div className="tooltip" data-tooltip="NOI / Purchase Price">
<i className="w-4 h-4 text-muted" data-lucide="info"></i>
</div>
</div>
<div className="text-2xl font-semibold text-accent">6.2%</div>
<div className="text-xs text-success">Above market avg (5.9%)</div>
</div>
<div className="bg-surface p-4 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-muted">Cash-on-Cash</span>
<div className="tooltip" data-tooltip="Annual Cash Flow / Cash Invested">
<i className="w-4 h-4 text-muted" data-lucide="info"></i>
</div>
</div>
<div className="text-2xl font-semibold text-primary">8.4%</div>
<div className="text-xs text-success">Strong return</div>
</div>
<div className="bg-surface p-4 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-muted">5-Year IRR</span>
<div className="tooltip" data-tooltip="Internal Rate of Return over 5 years">
<i className="w-4 h-4 text-muted" data-lucide="info"></i>
</div>
</div>
<div className="text-2xl font-semibold text-primary">12.3%</div>
<div className="text-xs text-success">Including appreciation</div>
</div>
</div>

<div className="mb-6">
<h4 className="font-medium mb-3">Scenario Analysis</h4>
<div className="space-y-2">
<div className="flex bg-surface rounded-lg p-1">
<button className="flex-1 py-2 px-3 text-sm bg-primary text-white rounded">Base</button>
<button className="flex-1 py-2 px-3 text-sm text-muted">Bear</button>
<button className="flex-1 py-2 px-3 text-sm text-muted">Bull</button>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="flex justify-between text-sm">
<span className="text-muted">Rent Growth:</span>
<span>3.0% annually</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-muted">Vacancy:</span>
<span>5%</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-muted">Exit Cap Rate:</span>
<span>6.5%</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-muted">Hold Period:</span>
<span>5 years</span>
</div>
</div>
</div>

<div className="mb-6">
<h4 className="font-medium mb-3">Monthly Cash Flow</h4>
<div className="space-y-2 text-sm">
<div className="flex justify-between">
<span className="text-muted">Gross Rent:</span>
<span className="text-success">$2,850</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Vacancy (5%):</span>
<span className="text-danger">-$143</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Property Tax:</span>
<span className="text-danger">-$485</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Insurance:</span>
<span className="text-danger">-$125</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Maintenance:</span>
<span className="text-danger">-$285</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Property Mgmt:</span>
<span className="text-danger">-$271</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Mortgage P&amp;I:</span>
<span className="text-danger">-$1,124</span>
</div>
<div className="border-t border-default pt-2 flex justify-between font-medium">
<span>Net Cash Flow:</span>
<span className="text-success">$417</span>
</div>
</div>
</div>

<div className="space-y-3">
<button className="btn-primary w-full">
<i className="w-4 h-4 mr-2" data-lucide="heart"></i>
                        Save Property
                    </button>
<button className="btn-secondary w-full">
<i className="w-4 h-4 mr-2" data-lucide="download"></i>
                        Export Analysis
                    </button>
<button className="btn-secondary w-full">
<i className="w-4 h-4 mr-2" data-lucide="share"></i>
                        Share Deal
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
