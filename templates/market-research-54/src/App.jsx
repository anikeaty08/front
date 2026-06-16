import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Toggle category function
        function toggleCategory(categoryId) {
            const content = document.getElementById('content-' + categoryId);
            const icon = document.getElementById('icon-' + categoryId);
            
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                icon.classList.remove('rotated');
            } else {
                content.classList.add('expanded');
                icon.classList.add('rotated');
            }
        }
        
        // Modal functions
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            if(modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
        
        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            if(modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
        
        // Close modal when clicking outside
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal(this.id);
                }
            });
        });
        
        // Update pricing based on region filter
        function updatePricing() {
            const region = document.getElementById('regionFilter').value;
            const prices = document.querySelectorAll('.report-price');
            
            prices.forEach(price => {
                const newPrice = price.getAttribute('data-' + region);
                if (newPrice) {
                    price.textContent = '$' + newPrice;
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-3 py-2 rounded-lg shadow-sm">
<span className="text-lg font-semibold tracking-tight">RW</span>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900">ResearchWire</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-blue-600" href="#">Reports</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Industries</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Resources</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Contact</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
<iconify-icon className="text-gray-400" icon="solar:phone-linear"></iconify-icon>
<span className="font-medium">+1 617-765-2493</span>
</div>
<button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
                        Contact Us
                    </button>
</div>
</div>
</div>
</header>

<section className="relative bg-white pt-16 pb-20 overflow-hidden border-b border-gray-100">

<div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-bl from-blue-100/60 to-purple-100/40 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-teal-50/60 to-blue-50/40 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 mb-6 backdrop-blur-sm shadow-sm">
<iconify-icon className="text-blue-600 text-sm" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-xs font-medium text-blue-700 tracking-wide">Market Intelligence Platform</span>
</div>

<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-5 leading-[1.15]">
                        Explore 20,000+ Global Market Research Reports
                    </h1>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Find industry insights, market forecasts, competitive analysis, and growth opportunities across 15+ sectors.
                    </p>

<div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:document-text-linear"></iconify-icon>
<span className="font-medium text-gray-900">20,000+</span> Reports
                        </div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden sm:block"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600 text-lg" icon="solar:buildings-linear"></iconify-icon>
<span className="font-medium text-gray-900">120+</span> Industries
                        </div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden sm:block"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-purple-600 text-lg" icon="solar:global-linear"></iconify-icon>
<span className="font-medium text-gray-900">50+</span> Countries Covered
                        </div>
</div>

<div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200 mb-5 relative z-10 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
<div className="flex-1 flex items-center pl-3">
<iconify-icon className="text-gray-400 text-xl" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full px-3 py-2.5 text-sm text-gray-900 focus:outline-none bg-transparent placeholder-gray-400" placeholder="Search market reports, industries, or keywords..." type="text"/>
</div>
<div className="h-8 w-px bg-gray-200 mx-1 hidden sm:block"></div>
<button className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
<iconify-icon className="text-lg" icon="solar:tuning-linear"></iconify-icon>
                            Advanced Filters
                        </button>
<button className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                            Search
                        </button>
</div>

<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="text-gray-500 font-medium mr-1">Popular:</span>
<a className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-gray-600 transition-colors" href="#">AI Market</a>
<a className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-gray-600 transition-colors" href="#">EV Battery</a>
<a className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-gray-600 transition-colors" href="#">Healthcare Analytics</a>
<a className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-gray-600 transition-colors" href="#">Semiconductors</a>
</div>
</div>

<div className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-dashed border-blue-200/50 rounded-full -z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-dashed border-purple-200/50 rounded-full -z-10"></div>

<div className="w-full max-w-[300px] bg-white/70 backdrop-blur-xl rounded-2xl border border-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-6 z-10 animate-float">
<div className="flex items-center justify-between mb-8">
<div>
<p className="text-xs font-medium text-gray-500 mb-1">Global AI Market Size</p>
<p className="text-3xl font-semibold tracking-tight text-gray-900">$24.8B</p>
</div>
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:cpu-linear"></iconify-icon>
</div>
</div>

<div className="flex items-end justify-between gap-2 h-24 mb-2">
<div className="w-full bg-blue-100 rounded-t-md h-[30%]"></div>
<div className="w-full bg-blue-200 rounded-t-md h-[45%]"></div>
<div className="w-full bg-blue-300 rounded-t-md h-[60%]"></div>
<div className="w-full bg-blue-400 rounded-t-md h-[80%]"></div>
<div className="w-full bg-blue-600 rounded-t-md h-[100%] relative shadow-[0_0_15px_rgba(37,99,235,0.3)]">
<div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded shadow-lg whitespace-nowrap">2024</div>
</div>
</div>
</div>

<div className="absolute top-[15%] left-[5%] md:-left-[5%] bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-100 z-20 animate-float-delayed">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
<iconify-icon className="text-green-600 text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-500">CAGR</p>
<p className="text-lg font-semibold text-gray-900 leading-tight">8.5%</p>
</div>
</div>
</div>

<div className="absolute bottom-[20%] right-[0%] md:-right-[10%] bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-100 z-20 animate-float">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
<iconify-icon className="text-purple-600 text-xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-500">Growth Forecast</p>
<p className="text-lg font-semibold text-gray-900 leading-tight">Positive</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-b border-gray-200 py-5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2 flex-shrink-0">
<iconify-icon className="text-orange-500 text-lg" icon="solar:fire-linear"></iconify-icon>
                    Trending Reports
                </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

<a className="group flex items-center justify-between p-3 bg-gray-50/80 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all" href="#">
<span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors truncate pr-3">Electric Vehicle Battery Market</span>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="px-2 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-md">2030</span>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md">14.7% CAGR</span>
</div>
</a>

<a className="group flex items-center justify-between p-3 bg-gray-50/80 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all" href="#">
<span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors truncate pr-3">AI Semiconductor Market</span>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="px-2 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-md">2032</span>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md">22.4% CAGR</span>
</div>
</a>

<a className="group flex items-center justify-between p-3 bg-gray-50/80 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all" href="#">
<span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors truncate pr-3">Green Hydrogen Market</span>
<div className="flex items-center gap-2 flex-shrink-0">
<span className="px-2 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-md">2030</span>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md">39.5% CAGR</span>
</div>
</a>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex gap-8">

<aside className="w-80 flex-shrink-0 sticky top-24 self-start hidden lg:block">
<div className="bg-white rounded-xl border border-gray-200 p-6">
<h2 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
<iconify-icon className="text-blue-600 text-xl" icon="solar:folder-with-files-linear"></iconify-icon>
                        Industries
                    </h2>
<div className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">

<div className="category-item">
<button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 text-left" onclick="toggleCategory('aerospace')">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-500 text-lg" icon="solar:rocket-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Aerospace &amp; Defense</span>
</div>
<iconify-icon className="text-gray-400 category-icon" icon="solar:alt-arrow-down-linear" id="icon-aerospace"></iconify-icon>
</button>
<div className="category-content ml-7 mt-1" id="content-aerospace">
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Aircraft Manufacturing</a>
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Defense Systems</a>
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Space Technology</a>
</div>
</div>

<div className="category-item">
<button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-blue-50 text-left" onclick="toggleCategory('automotive')">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-lg" icon="solar:steering-wheel-linear"></iconify-icon>
<span className="text-sm font-medium text-blue-600">Automotive</span>
</div>
<iconify-icon className="text-blue-600 category-icon rotated" icon="solar:alt-arrow-down-linear" id="icon-automotive"></iconify-icon>
</button>
<div className="category-content expanded ml-7 mt-1" id="content-automotive">
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Electric Vehicles</a>
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Auto Components</a>
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Autonomous Driving</a>
</div>
</div>

<div className="category-item">
<button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 text-left" onclick="toggleCategory('healthcare')">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-500 text-lg" icon="solar:heart-pulse-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Healthcare</span>
</div>
<iconify-icon className="text-gray-400 category-icon" icon="solar:alt-arrow-down-linear" id="icon-healthcare"></iconify-icon>
</button>
<div className="category-content ml-7 mt-1" id="content-healthcare">
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Pharmaceuticals</a>
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Medical Devices</a>
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Biotechnology</a>
</div>
</div>

<div className="category-item">
<button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 text-left" onclick="toggleCategory('technology')">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-500 text-lg" icon="solar:laptop-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Technology</span>
</div>
<iconify-icon className="text-gray-400 category-icon" icon="solar:alt-arrow-down-linear" id="icon-technology"></iconify-icon>
</button>
<div className="category-content ml-7 mt-1" id="content-technology">
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Cloud Computing</a>
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Artificial Intelligence</a>
<a className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#">Cybersecurity</a>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1">

<div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Filter Results</h2>
<span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">40 Reports</span>
</div>

<div className="flex flex-wrap gap-3">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:global-linear"></iconify-icon>
<select className="pl-9 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none cursor-pointer" id="regionFilter" onchange="updatePricing()">
<option value="global">Global Region</option>
<option value="north-america">North America</option>
<option value="europe">Europe</option>
<option value="asia-pacific">Asia Pacific</option>
<option value="latin-america">Latin America</option>
<option value="middle-east">Middle East &amp; Africa</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:buildings-linear"></iconify-icon>
<select className="pl-9 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none cursor-pointer">
<option>All Industries</option>
<option>Automotive</option>
<option>Healthcare</option>
<option>Technology</option>
<option>Energy</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="report-card bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<div className="flex flex-col md:flex-row gap-6">

<div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-50 rounded-lg border border-gray-200 p-4 flex items-center justify-center">
<div className="grid grid-cols-2 gap-2 w-full max-w-[120px] mx-auto">
<div className="bg-white border border-gray-200 rounded p-1.5 flex items-center justify-center shadow-sm">
<iconify-icon className="text-gray-400 text-xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 rounded p-1.5 flex items-center justify-center shadow-sm">
<iconify-icon className="text-gray-400 text-xl" icon="solar:smart-home-linear"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 rounded p-1.5 flex items-center justify-center shadow-sm">
<iconify-icon className="text-gray-400 text-xl" icon="solar:home-2-linear"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 rounded p-1.5 flex items-center justify-center shadow-sm">
<iconify-icon className="text-gray-400 text-xl" icon="solar:box-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-4">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 leading-tight flex-1">Real Estate Investment Software Market</h3>
<div className="sm:text-right flex-shrink-0">
<p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Starting from</p>
<p className="text-2xl font-semibold tracking-tight text-blue-600 report-price" data-asia-pacific="3,450" data-europe="3,950" data-global="4,950" data-latin-america="2,850" data-middle-east="2,950" data-north-america="3,750">$4,950</p>
</div>
</div>

<div className="flex flex-wrap items-center gap-4 mb-3 bg-gray-50 py-2 px-3 rounded-lg border border-gray-100 inline-flex">
<div className="flex items-center gap-1.5 text-sm">
<iconify-icon className="text-green-600 text-lg" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-gray-500">CAGR:</span>
<span className="font-medium text-gray-900">11.85%</span>
</div>
<div className="w-px h-4 bg-gray-300"></div>
<div className="flex items-center gap-1.5 text-sm">
<iconify-icon className="text-blue-600 text-lg" icon="solar:calendar-linear"></iconify-icon>
<span className="text-gray-500">Period:</span>
<span className="font-medium text-gray-900">2019 - 2030</span>
</div>
<div className="w-px h-4 bg-gray-300"></div>
<div className="flex items-center gap-1.5 text-sm">
<iconify-icon className="text-purple-600 text-lg" icon="solar:document-text-linear"></iconify-icon>
<span className="text-gray-500">Pages:</span>
<span className="font-medium text-gray-900">287</span>
</div>
</div>

<p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    Comprehensive analysis of the real estate investment software market covering market dynamics, key players, regional insights, and growth opportunities through 2030.
                                </p>

<div className="mb-5">
<p className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">Major Players</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 border border-gray-200 bg-white text-gray-700 rounded-md text-xs font-medium">Altus Group Limited</span>
<span className="px-2.5 py-1 border border-gray-200 bg-white text-gray-700 rounded-md text-xs font-medium">Yardi Systems Inc.</span>
<span className="px-2.5 py-1 border border-gray-200 bg-white text-gray-700 rounded-md text-xs font-medium">MRI Software LLC</span>
<span className="px-2.5 py-1 border border-gray-200 bg-white text-gray-700 rounded-md text-xs font-medium">RealPage Inc.</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
<button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 transition-colors" onclick="openModal('requestSample')">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                                        Request Sample
                                    </button>
<button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 transition-colors" onclick="openModal('downloadSample')">
<iconify-icon className="text-lg" icon="solar:download-linear"></iconify-icon>
                                        Download Sample
                                    </button>
<button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 transition-colors" onclick="openModal('requestCustomization')">
<iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon>
                                        Customize
                                    </button>
<button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm flex items-center gap-2 ml-auto transition-colors" onclick="openModal('buyNow')">
<iconify-icon className="text-lg" icon="solar:cart-large-linear"></iconify-icon>
                                        Buy Now
                                    </button>
</div>
</div>
</div>
</div>

<div className="report-card bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<div className="flex flex-col md:flex-row gap-6">

<div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-50 rounded-lg border border-gray-200 p-4 flex items-center justify-center">
<div className="grid grid-cols-2 gap-2 w-full max-w-[120px] mx-auto">
<div className="bg-white border border-gray-200 rounded p-1.5 flex items-center justify-center shadow-sm">
<iconify-icon className="text-gray-400 text-xl" icon="solar:steering-wheel-linear"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 rounded p-1.5 flex items-center justify-center shadow-sm">
<iconify-icon className="text-gray-400 text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 rounded p-1.5 flex items-center justify-center shadow-sm">
<iconify-icon className="text-gray-400 text-xl" icon="solar:battery-charge-linear"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 rounded p-1.5 flex items-center justify-center shadow-sm">
<iconify-icon className="text-gray-400 text-xl" icon="solar:plug-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-4">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 leading-tight flex-1">Electric Vehicle Battery Market</h3>
<div className="sm:text-right flex-shrink-0">
<p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Starting from</p>
<p className="text-2xl font-semibold tracking-tight text-blue-600 report-price" data-asia-pacific="3,750" data-europe="4,350" data-global="5,450" data-latin-america="3,150" data-middle-east="3,350" data-north-america="4,150">$5,450</p>
</div>
</div>

<div className="flex flex-wrap items-center gap-4 mb-3 bg-gray-50 py-2 px-3 rounded-lg border border-gray-100 inline-flex">
<div className="flex items-center gap-1.5 text-sm">
<iconify-icon className="text-green-600 text-lg" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-gray-500">CAGR:</span>
<span className="font-medium text-gray-900">14.7%</span>
</div>
<div className="w-px h-4 bg-gray-300"></div>
<div className="flex items-center gap-1.5 text-sm">
<iconify-icon className="text-blue-600 text-lg" icon="solar:calendar-linear"></iconify-icon>
<span className="text-gray-500">Period:</span>
<span className="font-medium text-gray-900">2025 - 2030</span>
</div>
<div className="w-px h-4 bg-gray-300"></div>
<div className="flex items-center gap-1.5 text-sm">
<iconify-icon className="text-purple-600 text-lg" icon="solar:document-text-linear"></iconify-icon>
<span className="text-gray-500">Pages:</span>
<span className="font-medium text-gray-900">342</span>
</div>
</div>

<p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    Comprehensive analysis of the EV battery market including lithium-ion technologies, solid-state batteries, charging infrastructure, and sustainability initiatives.
                                </p>

<div className="mb-5">
<p className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">Major Players</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 border border-gray-200 bg-white text-gray-700 rounded-md text-xs font-medium">Tesla Inc.</span>
<span className="px-2.5 py-1 border border-gray-200 bg-white text-gray-700 rounded-md text-xs font-medium">LG Energy Solution</span>
<span className="px-2.5 py-1 border border-gray-200 bg-white text-gray-700 rounded-md text-xs font-medium">CATL</span>
<span className="px-2.5 py-1 border border-gray-200 bg-white text-gray-700 rounded-md text-xs font-medium">Panasonic</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
<button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 transition-colors" onclick="openModal('requestSample')">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                                        Request Sample
                                    </button>
<button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 transition-colors" onclick="openModal('downloadSample')">
<iconify-icon className="text-lg" icon="solar:download-linear"></iconify-icon>
                                        Download Sample
                                    </button>
<button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 transition-colors" onclick="openModal('requestCustomization')">
<iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon>
                                        Customize
                                    </button>
<button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm flex items-center gap-2 ml-auto transition-colors" onclick="openModal('buyNow')">
<iconify-icon className="text-lg" icon="solar:cart-large-linear"></iconify-icon>
                                        Buy Now
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-6">
<div className="text-sm text-gray-600">
                        Showing <span className="font-medium text-gray-900">1-2</span> of <span className="font-medium text-gray-900">20,000+</span> reports
                    </div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" disabled="">
                            Previous
                        </button>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-sm transition-colors">1</button>
<button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">2</button>
<button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">3</button>
<span className="px-2 text-gray-500">...</span>
<button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            Next
                        </button>
</div>
</div>
</main>
</div>
</div>

<div className="modal items-center justify-center p-4" id="requestSample">
<div className="modal-content bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
<div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl z-10">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Request Sample Report</h2>
<p className="text-sm text-gray-600 mt-1">Get a free sample to evaluate before purchasing</p>
</div>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" onclick="closeModal('requestSample')">
<iconify-icon className="text-gray-500 text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>
<div className="px-8 py-6">
<form className="space-y-6">
<div>
<h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:user-linear"></iconify-icon>
                            Personal Information
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" placeholder="John" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" placeholder="Doe" required="" type="text"/>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:letter-linear"></iconify-icon>
                            Contact Information
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Business Email *</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" placeholder="john.doe@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:buildings-linear"></iconify-icon>
                            Company Information
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" placeholder="Acme Corporation" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" placeholder="Research Manager" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
<select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" required="">
<option value="">Select Country</option>
<option value="us">United States</option>
<option value="uk">United Kingdom</option>
<option value="ca">Canada</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
<select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" required="">
<option value="">Select Industry</option>
<option value="automotive">Automotive</option>
<option value="healthcare">Healthcare</option>
<option value="technology">Technology</option>
</select>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:document-add-linear"></iconify-icon>
                            Sample Format
                        </h3>
<div className="space-y-3">
<label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all">
<input checked="" className="radio-custom" name="sampleFormat" type="radio" value="pdf"/>
<div className="flex items-center gap-3 flex-1">
<iconify-icon className="text-red-500 text-xl" icon="solar:document-text-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-gray-900">PDF Format</p>
<p className="text-xs text-gray-500">Download sample in PDF format (Recommended)</p>
</div>
</div>
</label>
</div>
</div>
<div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
<label className="flex items-start gap-3 cursor-pointer">
<input className="checkbox-custom mt-0.5" required="" type="checkbox"/>
<p className="text-xs text-gray-600 leading-relaxed">I agree to receive communications from ResearchWire and understand that I can opt out at any time. By submitting this form, I acknowledge that I have read and understood the <a className="text-blue-600 hover:underline" href="#">Privacy Policy</a>.</p>
</label>
</div>
</form>
</div>
<div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-6 rounded-b-2xl">
<div className="flex items-center justify-between">
<p className="text-sm text-gray-600 flex items-center gap-1.5">
<iconify-icon className="text-green-600 text-lg" icon="solar:shield-check-linear"></iconify-icon>
                        Your information is secure
                    </p>
<div className="flex gap-3">
<button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors" onclick="closeModal('requestSample')" type="button">
                            Cancel
                        </button>
<button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm" type="submit">
                            Request Sample
                        </button>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-gray-900 text-gray-300 mt-16 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="bg-blue-600 text-white px-2.5 py-1.5 rounded-lg shadow-sm">
<span className="text-base font-semibold tracking-tight">RW</span>
</div>
<span className="text-lg font-semibold tracking-tight text-white">ResearchWire</span>
</div>
<p className="text-sm text-gray-400 leading-relaxed">
                        Leading provider of market intelligence and business research reports across industries worldwide.
                    </p>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Industries</h3>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#">Automotive</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Healthcare</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Technology</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Energy &amp; Power</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Our Team</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Contact</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 text-lg flex-shrink-0 mt-0.5" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm">+1 617-765-2493</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 text-lg flex-shrink-0 mt-0.5" icon="solar:letter-linear"></iconify-icon>
<span className="text-sm">info@researchwire.com</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 text-lg flex-shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm">Boston, MA, USA</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">© 2025 ResearchWire Platform. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
