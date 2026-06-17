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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchTab(tabId) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            // Show target view
            document.getElementById(`view-${tabId}`).classList.remove('hidden');
            document.getElementById(`view-${tabId}`).classList.add('block');

            // Reset nav styles
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('brand-text', 'bg-blue-50/50', 'font-medium');
                el.classList.add('text-gray-700', 'hover:bg-gray-50');
                
                const icon = el.querySelector('.nav-icon');
                if(icon) icon.classList.add('text-gray-500');
            });

            // Activate current nav
            const activeNav = document.getElementById(`nav-${tabId}`);
            if(activeNav) {
                activeNav.classList.remove('text-gray-700', 'hover:bg-gray-50');
                activeNav.classList.add('brand-text', 'bg-blue-50/50', 'font-medium');
                
                const icon = activeNav.querySelector('.nav-icon');
                if(icon) icon.classList.remove('text-gray-500');
            }
        }

        const modalBackdrop = document.getElementById('modal-backdrop');
        const modalPanel = document.getElementById('modal-panel');
        const modalTitle = document.getElementById('modal-title');

        function openModal(type) {
            // Set dynamic title
            modalTitle.textContent = type === 'user' ? 'Add New User' : 'Add New Company';
            
            // Show modal
            modalBackdrop.classList.remove('hidden');
            
            // Trigger animations
            setTimeout(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalPanel.classList.remove('scale-95');
            }, 10);
        }

        function closeModal() {
            // Reverse animations
            modalBackdrop.classList.add('opacity-0');
            modalPanel.classList.add('scale-95');
            
            // Hide after transition
            setTimeout(() => {
                modalBackdrop.classList.add('hidden');
            }, 300);
        }
    
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
      

<aside className="w-64 flex-shrink-0 border-r flex flex-col hidden lg:flex z-20 border-gray-200 bg-white">

<div className="h-16 flex items-center px-6 border-b shrink-0 border-gray-200">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg brand-bg flex items-center justify-center shadow-sm text-white">
<iconify-icon className="text-xl text-white/80" icon="solar:hexagon-linear"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-gray-900">NovaCore</span>
</div>
</div>

<div className="flex-1 overflow-y-auto py-6 px-3 space-y-8">

<div>
<h3 className="text-xs font-medium text-gray-500 mb-3 px-3 tracking-wider uppercase">Overview</h3>
<nav className="space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm brand-text font-medium transition-colors text-left bg-blue-50/50" id="nav-dashboard" onclick="switchTab('dashboard')">
<iconify-icon className="text-lg" icon="solar:widget-linear"></iconify-icon>
                        Dashboard
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left text-gray-700 hover:bg-gray-50">
<iconify-icon className="text-lg text-gray-500" icon="solar:chart-square-linear"></iconify-icon>
                        System Metrics
                    </button>
</nav>
</div>

<div>
<h3 className="text-xs font-medium text-gray-500 mb-3 px-3 tracking-wider uppercase">Management</h3>
<nav className="space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left text-gray-700 hover:bg-gray-50" id="nav-companies" onclick="switchTab('companies')">
<iconify-icon className="text-lg text-gray-500 nav-icon" icon="solar:buildings-linear"></iconify-icon>
                        Companies
                        <span className="ml-auto text-gray-500 py-0.5 px-2 rounded-full text-xs bg-gray-100">1.2k</span>
</button>
<button className="nav-item w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors group cursor-pointer text-left text-gray-700 hover:bg-gray-50" id="nav-users" onclick="switchTab('users')">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-gray-500 nav-icon" icon="solar:users-group-rounded-linear"></iconify-icon>
                            Users
                        </div>
<span className="text-gray-500 py-0.5 px-2 rounded-full text-xs bg-gray-100">45k</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left text-gray-700 hover:bg-gray-50">
<iconify-icon className="text-lg text-gray-500" icon="solar:shield-warning-linear"></iconify-icon>
                        Risk Center
                    </button>
</nav>
</div>

<div>
<h3 className="text-xs font-medium text-gray-500 mb-3 px-3 tracking-wider uppercase">Settings</h3>
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left text-gray-700 hover:bg-gray-50">
<iconify-icon className="text-lg text-gray-500" icon="solar:settings-linear"></iconify-icon>
                        Global Configuration
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left text-gray-700 hover:bg-gray-50">
<iconify-icon className="text-lg text-gray-500" icon="solar:key-minimalistic-linear"></iconify-icon>
                        API Keys
                    </button>
</nav>
</div>
</div>

<div className="p-4 border-t border-gray-200">
<button className="flex items-center gap-3 w-full p-2 rounded-lg transition-colors text-left hover:bg-gray-50">
<img alt="Admin" className="w-9 h-9 rounded-full object-cover border border-gray-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-gray-900">Eleanor Pena</p>
<p className="text-xs text-gray-500 truncate">Super Admin</p>
</div>
<iconify-icon className="text-lg text-gray-400" icon="solar:logout-2-linear"></iconify-icon>
</button>
</div>
</aside>

<div className="flex-1 flex flex-col h-screen min-w-0 relative">

<header className="h-16 border-b flex items-center justify-between px-4 sm:px-8 shrink-0 z-10 bg-white border-gray-200">

<div className="flex items-center gap-4 flex-1">
<button className="lg:hidden p-2 text-gray-500 rounded-lg transition-colors hover:bg-gray-50">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<div className="hidden sm:flex items-center relative w-full max-w-md">
<iconify-icon className="text-lg absolute left-3 text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:brand-ring focus:border-transparent transition-all placeholder-gray-400 bg-gray-50 border-gray-200 text-gray-900" placeholder="Search companies, users or metrics..." type="text"/>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-4 shrink-0">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors border border-transparent hover:bg-gray-50 hover:border-gray-200">
<img alt="US" className="w-5 h-auto rounded-sm" src="https://flagcdn.com/w20/us.png"/>
<span className="text-sm font-normal text-gray-700">ENG</span>
<iconify-icon className="text-sm text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="p-2 text-gray-500 rounded-lg transition-colors relative hover:bg-gray-50">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="w-px h-6 hidden sm:block bg-gray-200"></div>
<img alt="Admin" className="w-8 h-8 rounded-full object-cover border sm:hidden border-gray-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
</header>

<main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-gray-50/50">
<div className="max-w-7xl mx-auto">

<div className="view-section space-y-6 block" id="view-dashboard">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-3xl font-medium tracking-tight text-gray-900">System Overview</h1>
<p className="text-sm text-gray-500 mt-1">Monitor high-level metrics across all registered organizations.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors shadow-sm text-sm font-normal bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
<iconify-icon className="text-lg text-gray-500" icon="solar:calendar-linear"></iconify-icon>
                                Last 30 Days
                                <iconify-icon className="text-sm ml-1 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-4 py-2 brand-bg rounded-lg transition-colors shadow-sm text-sm font-normal text-white hover:bg-blue-700">
<iconify-icon className="text-lg" icon="solar:download-minimalistic-linear"></iconify-icon>
                                Export Report
                            </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
<div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col bg-white border-gray-200">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center brand-text bg-blue-50">
<iconify-icon className="text-xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<button className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-50">
<iconify-icon className="text-xl" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<p className="text-sm text-gray-500 font-normal mb-1">Total Companies</p>
<div className="flex items-end gap-3 mt-auto">
<h2 className="text-3xl font-medium tracking-tight text-gray-900">1,248</h2>
<div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md mb-1 text-green-600 bg-green-50">
<iconify-icon className="text-sm" icon="solar:graph-up-linear"></iconify-icon>
                                    +12%
                                </div>
</div>
</div>
<div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col bg-white border-gray-200">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-50 text-purple-600">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<button className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-50">
<iconify-icon className="text-xl" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<p className="text-sm text-gray-500 font-normal mb-1">Total Active Users</p>
<div className="flex items-end gap-3 mt-auto">
<h2 className="text-3xl font-medium tracking-tight text-gray-900">45,291</h2>
<div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md mb-1 text-green-600 bg-green-50">
<iconify-icon className="text-sm" icon="solar:graph-up-linear"></iconify-icon>
                                    +8.4%
                                </div>
</div>
</div>
<div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col bg-white border-gray-200">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-orange-50 text-orange-600">
<iconify-icon className="text-xl" icon="solar:pulse-linear"></iconify-icon>
</div>
<button className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-50">
<iconify-icon className="text-xl" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<p className="text-sm text-gray-500 font-normal mb-1">Avg Attrition Risk</p>
<div className="flex items-end gap-3 mt-auto">
<h2 className="text-3xl font-medium tracking-tight text-gray-900">14.2%</h2>
<div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md mb-1 text-green-600 bg-green-50" title="Lower is better">
<iconify-icon className="text-sm" icon="solar:graph-down-linear"></iconify-icon>
                                    -2.1%
                                </div>
</div>
</div>
<div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col bg-white border-gray-200">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-red-50 text-red-600">
<iconify-icon className="text-xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<button className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-50">
<iconify-icon className="text-xl" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<p className="text-sm text-gray-500 font-normal mb-1">High Risk Users</p>
<div className="flex items-end gap-3 mt-auto">
<h2 className="text-3xl font-medium tracking-tight text-gray-900">342</h2>
<div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md mb-1 text-red-600 bg-red-50">
<iconify-icon className="text-sm" icon="solar:graph-up-linear"></iconify-icon>
                                    +14
                                </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 border rounded-xl p-5 shadow-sm flex flex-col h-[420px] bg-white border-gray-200">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-medium text-gray-900">Risk Trends Over Time</h3>
<p className="text-xs text-gray-500 mt-1">System-wide weighted risk score index</p>
</div>
<div className="flex items-center gap-2">
<span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
<span className="w-2 h-2 rounded-full brand-bg"></span> Index Score
                                    </span>
</div>
</div>

<div className="flex-1 w-full relative mt-4">
<div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-xs text-right pr-2 text-gray-400">
<span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
</div>
<div className="absolute left-8 right-0 top-1 bottom-6 border-b border-gray-200">
<div className="absolute w-full h-full flex flex-col justify-between">
<div className="w-full border-t border-dashed h-0 border-gray-100"></div>
<div className="w-full border-t border-dashed h-0 border-gray-100"></div>
<div className="w-full border-t border-dashed h-0 border-gray-100"></div>
<div className="w-full border-t border-dashed h-0 border-gray-100"></div>
<div className="w-full h-0"></div>
</div>
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 300">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#2a85ff" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#2a85ff" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,250 C100,200 200,280 300,180 C400,80 500,220 600,150 C700,80 800,120 900,50 C950,20 1000,80 1000,80 L1000,300 L0,300 Z" fill="url(#chartGradient)"></path>
<path d="M0,250 C100,200 200,280 300,180 C400,80 500,220 600,150 C700,80 800,120 900,50 C950,20 1000,80 1000,80" fill="none" stroke="#2a85ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<circle className="brand-border border-2 cursor-pointer transition-all duration-200 fill-white" cx="300" cy="180" r="4"></circle>
<circle className="brand-border border-2 cursor-pointer transition-all duration-200 fill-white" cx="600" cy="150" r="4"></circle>
<circle className="brand-bg border-4 shadow-sm cursor-pointer border-white" cx="900" cy="50" r="6"></circle>
</svg>
</div>
<div className="absolute left-8 right-0 bottom-0 h-6 flex justify-between items-end text-xs px-2 text-gray-400">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
</div>
</div>
</div>
<div className="border rounded-xl p-5 shadow-sm flex flex-col h-[420px] bg-white border-gray-200">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-gray-900">Risk Distribution</h3>
<button className="text-gray-400 hover:text-gray-600">
<iconify-icon className="text-xl" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<p className="text-sm text-gray-500 mb-6">Current breakdown of organizations by assigned risk tier.</p>
<div className="flex-1 flex flex-col justify-center space-y-6">
<div>
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-700">Low Risk</span>
</div>
<div className="text-right">
<span className="text-sm font-medium text-gray-900">842</span>
<span className="text-xs text-gray-500 ml-1">(67%)</span>
</div>
</div>
<div className="w-full rounded-full h-2 overflow-hidden bg-gray-100">
<div className="bg-green-500 h-2 rounded-full" style={{width: '67%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-gray-700">Medium Risk</span>
</div>
<div className="text-right">
<span className="text-sm font-medium text-gray-900">315</span>
<span className="text-xs text-gray-500 ml-1">(25%)</span>
</div>
</div>
<div className="w-full rounded-full h-2 overflow-hidden bg-gray-100">
<div className="bg-orange-500 h-2 rounded-full" style={{width: '25%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-sm font-medium text-gray-700">High Risk</span>
</div>
<div className="text-right">
<span className="text-sm font-medium text-gray-900">91</span>
<span className="text-xs text-gray-500 ml-1">(8%)</span>
</div>
</div>
<div className="w-full rounded-full h-2 overflow-hidden bg-gray-100">
<div className="bg-red-500 h-2 rounded-full" style={{width: '8%'}}></div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-gray-100">
<button className="w-full py-2 flex items-center justify-center gap-2 text-sm font-medium brand-text rounded-lg transition-colors hover:bg-blue-50">
                                    View all high risk companies
                                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-6" id="view-companies">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-3xl font-medium tracking-tight text-gray-900">Companies</h1>
<p className="text-sm text-gray-500 mt-1">Manage and monitor enrolled organizations.</p>
</div>
<button className="flex items-center gap-2 px-4 py-2 brand-bg rounded-lg transition-colors shadow-sm text-sm font-normal text-white hover:bg-blue-700" onclick="openModal('company')">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                            Add Company
                        </button>
</div>
<div className="border rounded-xl overflow-hidden shadow-sm bg-white border-gray-200">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b text-xs text-gray-500 font-medium uppercase tracking-wider bg-gray-50/50 border-gray-200">
<th className="px-6 py-4">Company Name</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Risk Tier</th>
<th className="px-6 py-4">Active Users</th>
<th className="px-6 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y text-sm divide-gray-100 text-gray-700">
<tr className="transition-colors hover:bg-gray-50/50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded flex items-center justify-center font-medium text-xs bg-blue-100 text-blue-600">S</div>
<div>
<p className="font-medium text-gray-900">Stripe</p>
<p className="text-xs text-gray-500">stripe.com</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                                            </span>
</td>
<td className="px-6 py-4"><span className="text-gray-600">Low</span></td>
<td className="px-6 py-4">1,420</td>
<td className="px-6 py-4 text-right">
<button className="hover:brand-text transition-colors p-1 text-gray-400"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="transition-colors hover:bg-gray-50/50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded flex items-center justify-center font-medium text-xs bg-gray-900 text-white">V</div>
<div>
<p className="font-medium text-gray-900">Vercel</p>
<p className="text-xs text-gray-500">vercel.com</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                                            </span>
</td>
<td className="px-6 py-4"><span className="text-gray-600">Low</span></td>
<td className="px-6 py-4">892</td>
<td className="px-6 py-4 text-right">
<button className="hover:brand-text transition-colors p-1 text-gray-400"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="transition-colors hover:bg-gray-50/50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded flex items-center justify-center font-medium text-xs bg-red-100 text-red-600">A</div>
<div>
<p className="font-medium text-gray-900">Acme Corp</p>
<p className="text-xs text-gray-500">acme.com</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Inactive
                                            </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700">
<iconify-icon className="text-sm" icon="solar:danger-triangle-linear"></iconify-icon> High
                                            </span>
</td>
<td className="px-6 py-4">12</td>
<td className="px-6 py-4 text-right">
<button className="hover:brand-text transition-colors p-1 text-gray-400"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t flex items-center justify-between border-gray-200">
<span className="text-xs text-gray-500">Showing 1 to 3 of 1,248</span>
<div className="flex gap-1">
<button className="px-3 py-1 border rounded text-xs font-medium text-gray-500 border-gray-200 hover:bg-gray-50" disabled="">Prev</button>
<button className="px-3 py-1 border rounded text-xs font-medium border-gray-200 text-gray-700 hover:bg-gray-50">Next</button>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-6" id="view-users">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-3xl font-medium tracking-tight text-gray-900">Users</h1>
<p className="text-sm text-gray-500 mt-1">Manage platform access and permissions.</p>
</div>
<button className="flex items-center gap-2 px-4 py-2 brand-bg rounded-lg transition-colors shadow-sm text-sm font-normal text-white hover:bg-blue-700" onclick="openModal('user')">
<iconify-icon className="text-lg" icon="solar:user-plus-linear"></iconify-icon>
                            Add User
                        </button>
</div>
<div className="border rounded-xl overflow-hidden shadow-sm bg-white border-gray-200">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b text-xs text-gray-500 font-medium uppercase tracking-wider bg-gray-50/50 border-gray-200">
<th className="px-6 py-4">User</th>
<th className="px-6 py-4">Role</th>
<th className="px-6 py-4">Company</th>
<th className="px-6 py-4">Access</th>
<th className="px-6 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y text-sm divide-gray-100 text-gray-700">
<tr className="transition-colors hover:bg-gray-50/50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Eleanor" className="w-8 h-8 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div>
<p className="font-medium text-gray-900">Eleanor Pena</p>
<p className="text-xs text-gray-500">eleanor@novacore.com</p>
</div>
</div>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded text-xs font-medium bg-purple-50 text-purple-700">Super Admin</span></td>
<td className="px-6 py-4">NovaCore</td>
<td className="px-6 py-4">

<button aria-pressed="true" className="w-8 h-4 rounded-full brand-bg relative transition-colors focus:outline-none focus:ring-2 focus:brand-ring focus:ring-offset-1">
<span className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full transition-transform translate-x-4 bg-white"></span>
</button>
</td>
<td className="px-6 py-4 text-right">
<button className="hover:brand-text transition-colors p-1 text-gray-400"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="transition-colors hover:bg-gray-50/50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Albert" className="w-8 h-8 rounded-full object-cover" src="https://i.pravatar.cc/150?u=b042581f4e29026704e"/>
<div>
<p className="font-medium text-gray-900">Albert Flores</p>
<p className="text-xs text-gray-500">albert@stripe.com</p>
</div>
</div>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">Admin</span></td>
<td className="px-6 py-4">Stripe</td>
<td className="px-6 py-4">
<button aria-pressed="true" className="w-8 h-4 rounded-full brand-bg relative transition-colors focus:outline-none focus:ring-2 focus:brand-ring focus:ring-offset-1">
<span className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full transition-transform translate-x-4 bg-white"></span>
</button>
</td>
<td className="px-6 py-4 text-right">
<button className="hover:brand-text transition-colors p-1 text-gray-400"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="h-8"></div>
</div>
</main>
</div>

<div className="fixed inset-0 backdrop-blur-sm z-50 hidden flex items-center justify-center opacity-0 transition-opacity duration-300 bg-gray-900/40" id="modal-backdrop">

<div className="rounded-xl shadow-xl w-full max-w-md p-6 transform scale-95 transition-transform duration-300 bg-white" id="modal-panel">
<div className="flex items-center justify-between mb-5">
<h2 className="text-lg font-medium text-gray-900" id="modal-title">Add New Record</h2>
<button className="transition-colors rounded-lg p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50" onclick="closeModal()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); closeModal();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700">First Name</label>
<input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:brand-ring focus:border-transparent transition-all bg-white border-gray-200 text-gray-900" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700">Last Name</label>
<input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:brand-ring focus:border-transparent transition-all bg-white border-gray-200 text-gray-900" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700">Email Address</label>
<input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:brand-ring focus:border-transparent transition-all bg-white border-gray-200 text-gray-900" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700">Role Allocation</label>

<div className="relative cursor-pointer group">
<div className="w-full flex items-center justify-between px-3 py-2 border rounded-lg text-sm group-hover:border-gray-300 transition-colors bg-white border-gray-200 text-gray-900">
<span>Standard User</span>
<iconify-icon className="text-sm text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="pt-4 flex items-center justify-end gap-3 border-t mt-6 border-gray-100">
<button className="px-4 py-2 text-sm font-medium rounded-lg transition-colors border border-transparent text-gray-700 hover:bg-gray-50" onclick="closeModal()" type="button">
                        Cancel
                    </button>
<button className="px-4 py-2 text-sm font-medium brand-bg rounded-lg transition-colors shadow-sm text-white hover:bg-blue-700" type="submit">
                        Save Details
                    </button>
</div>
</form>
</div>
</div>



    </>
  );
}
