import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchView(viewId, title) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(function(el) {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            
            // Show target view
            const targetView = document.getElementById('view-' + viewId);
            if(targetView) {
                targetView.classList.remove('hidden');
                targetView.classList.add('block');
            }

            // Update sidebar nav styling
            document.querySelectorAll('.nav-link').forEach(function(el) {
                el.classList.remove('bg-gray-100', 'text-gray-900', 'font-medium');
                el.classList.add('text-gray-600', 'hover:bg-gray-50', 'hover:text-gray-900');
            });
            
            const activeLink = document.querySelector('.nav-link[data-view="' + viewId + '"]');
            if(activeLink) {
                activeLink.classList.remove('text-gray-600', 'hover:bg-gray-50', 'hover:text-gray-900');
                activeLink.classList.add('bg-gray-100', 'text-gray-900', 'font-medium');
            }

            // Update Header Title
            const headerTitle = document.getElementById('header-title');
            if(headerTitle) {
                headerTitle.innerText = title;
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col hidden md:flex">

<div className="h-16 flex items-center px-6 border-b border-gray-200 shrink-0">
<div className="flex items-center gap-2 text-gray-900 font-medium tracking-tighter text-lg">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
<span>YOUTH IT</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 flex flex-col gap-1 px-3">
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm bg-gray-100 text-gray-900 font-medium rounded-md transition-colors" data-view="dashboard" href="#" onclick="switchView('dashboard', 'Dashboard')">
<iconify-icon height="20" icon="solar:widget-5-linear" width="20"></iconify-icon>
                Dashboard
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" data-view="templates" href="#" onclick="switchView('templates', 'Templates')">
<iconify-icon height="20" icon="solar:document-linear" width="20"></iconify-icon>
                Templates
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" data-view="clients" href="#" onclick="switchView('clients', 'Clients')">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                Clients
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" data-view="plans" href="#" onclick="switchView('plans', 'Plans')">
<iconify-icon height="20" icon="solar:clipboard-list-linear" width="20"></iconify-icon>
                Plans
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" data-view="staff" href="#" onclick="switchView('staff', 'Staff')">
<iconify-icon height="20" icon="solar:user-settings-linear" width="20"></iconify-icon>
                Staff
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" data-view="seo" href="#" onclick="switchView('seo', 'SEO Analysis')">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
                SEO
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors mb-4" data-view="domain" href="#" onclick="switchView('domain', 'Domains')">
<iconify-icon height="20" icon="solar:global-linear" width="20"></iconify-icon>
                Domain
            </a>
<div className="mt-auto border-t border-gray-100 pt-4">
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors relative" data-view="settings" href="#" onclick="switchView('settings', 'Settings')">
<iconify-icon height="20" icon="solar:settings-linear" width="20"></iconify-icon>
                    Settings
                </a>
</div>
</nav>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-gray-50/50">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0">
<div className="flex items-center gap-2 text-gray-500 md:hidden">
<button className="p-2 -ml-2 rounded-md hover:bg-gray-100">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
<div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
<span className="hover:text-gray-900 cursor-pointer transition-colors">Youth IT</span>
<iconify-icon className="text-gray-400" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="text-gray-900" id="header-title">Dashboard</span>
</div>
<div className="flex items-center gap-4 ml-auto">
<button className="text-gray-400 hover:text-gray-500 transition-colors">
<iconify-icon height="20" icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<div className="flex items-center gap-3 border-l border-gray-200 pl-4">
<div className="flex flex-col items-end">
<span className="text-sm font-medium text-gray-900">Aakash Chaudhary</span>
<span className="text-xs text-gray-500">Super Admin</span>
</div>
<div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-medium text-sm">
                        AC
                    </div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

<div className="view-section block space-y-8" id="view-dashboard">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Dashboard</h1>
<p className="mt-1 text-sm text-gray-500">Overview of your workspace performance.</p>
</div>
<button className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2">
<iconify-icon height="16" icon="solar:download-linear" width="16"></iconify-icon>
                            Export
                        </button>
</div>

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between text-gray-500 mb-4">
<span className="text-sm font-medium">Total Revenue</span>
<iconify-icon height="20" icon="solar:dollar-linear" width="20"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-gray-900">$24,500</div>
<div className="mt-1 flex items-center text-xs text-green-600 font-medium">
<iconify-icon className="mr-1" height="14" icon="solar:trend-up-linear" width="14"></iconify-icon>
                                +12.5% from last month
                            </div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between text-gray-500 mb-4">
<span className="text-sm font-medium">Active Clients</span>
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-gray-900">142</div>
<div className="mt-1 flex items-center text-xs text-green-600 font-medium">
<iconify-icon className="mr-1" height="14" icon="solar:trend-up-linear" width="14"></iconify-icon>
                                +4 new this week
                            </div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between text-gray-500 mb-4">
<span className="text-sm font-medium">Active Domains</span>
<iconify-icon height="20" icon="solar:global-linear" width="20"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-gray-900">89</div>
<div className="mt-1 flex items-center text-xs text-gray-500 font-medium">
                                99.9% uptime
                            </div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between text-gray-500 mb-4">
<span className="text-sm font-medium">Avg SEO Score</span>
<iconify-icon height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-gray-900">86/100</div>
<div className="mt-1 flex items-center text-xs text-green-600 font-medium">
<iconify-icon className="mr-1" height="14" icon="solar:trend-up-linear" width="14"></iconify-icon>
                                +2 pts improvement
                            </div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
<h2 className="text-sm font-medium text-gray-900">Recent Clients</h2>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#" onclick="switchView('clients', 'Clients')">View all</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left whitespace-nowrap">
<thead className="text-xs text-gray-500 bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 font-medium" scope="col">Client</th>
<th className="px-6 py-3 font-medium" scope="col">Plan</th>
<th className="px-6 py-3 font-medium" scope="col">Status</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Date Added</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium text-xs">NL</div>
<div>
<div className="font-medium text-gray-900">Nexus Logistics</div>
<div className="text-xs text-gray-500">contact@nexus.com</div>
</div>
</td>
<td className="px-6 py-3 text-gray-600">Enterprise</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
</td>
<td className="px-6 py-3 text-right text-gray-500">Today</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-medium text-xs">V</div>
<div>
<div className="font-medium text-gray-900">Vertex Solutions</div>
<div className="text-xs text-gray-500">hello@vertex.io</div>
</div>
</td>
<td className="px-6 py-3 text-gray-600">Pro</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
</td>
<td className="px-6 py-3 text-right text-gray-500">Yesterday</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-medium text-xs">MC</div>
<div>
<div className="font-medium text-gray-900">Moonlight Cafe</div>
<div className="text-xs text-gray-500">info@moonlight.com</div>
</div>
</td>
<td className="px-6 py-3 text-gray-600">Basic</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20">Pending</span>
</td>
<td className="px-6 py-3 text-right text-gray-500">Oct 24, 2023</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden space-y-8" id="view-templates">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Templates</h1>
<p className="mt-1 text-sm text-gray-500">Manage and deploy website templates.</p>
</div>
<button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
<iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
                            New Template
                        </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group hover:border-gray-300 transition-colors cursor-pointer">
<div className="aspect-video bg-gray-100 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
<iconify-icon className="text-gray-300" height="32" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-gray-900 text-sm">SaaS Startup Boilerplate</h3>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">Technology</span>
</div>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">A clean, high-converting template for modern SaaS companies.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-3">
<span className="text-xs text-gray-500">Used 42 times</span>
<span className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors">Use Template →</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group hover:border-gray-300 transition-colors cursor-pointer">
<div className="aspect-video bg-gray-100 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
<iconify-icon className="text-gray-300" height="32" icon="solar:shop-linear" width="32"></iconify-icon>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-gray-900 text-sm">E-commerce Minimal</h3>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">Retail</span>
</div>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Minimalist storefront optimized for boutique brands and fashion.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-3">
<span className="text-xs text-gray-500">Used 18 times</span>
<span className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors">Use Template →</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group hover:border-gray-300 transition-colors cursor-pointer">
<div className="aspect-video bg-gray-100 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
<iconify-icon className="text-gray-300" height="32" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-gray-900 text-sm">Creative Portfolio</h3>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">Agency</span>
</div>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Showcase work with large imagery and smooth scroll animations.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-3">
<span className="text-xs text-gray-500">Used 29 times</span>
<span className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors">Use Template →</span>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-8" id="view-clients">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Clients</h1>
<p className="mt-1 text-sm text-gray-500">Manage your client list and accounts.</p>
</div>
<button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
<iconify-icon height="16" icon="solar:user-plus-linear" width="16"></iconify-icon>
                            Add Client
                        </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-200 flex gap-4">
<div className="relative flex-1 max-w-md">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<iconify-icon className="text-gray-400" height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<input className="block w-full rounded-md border-0 py-1.5 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" placeholder="Search clients..." type="text"/>
</div>
<button className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2">
<iconify-icon height="16" icon="solar:filter-linear" width="16"></iconify-icon>
                                Filter
                            </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left whitespace-nowrap">
<thead className="text-xs text-gray-500 bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 font-medium" scope="col">Company</th>
<th className="px-6 py-3 font-medium" scope="col">Contact</th>
<th className="px-6 py-3 font-medium" scope="col">Plan</th>
<th className="px-6 py-3 font-medium" scope="col">Status</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-6 py-4 font-medium text-gray-900">Acme Corp</td>
<td className="px-6 py-4 text-gray-500">sarah@acme.com</td>
<td className="px-6 py-4 text-gray-600">Enterprise</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon height="20" icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-6 py-4 font-medium text-gray-900">Globex Inc</td>
<td className="px-6 py-4 text-gray-500">john@globex.com</td>
<td className="px-6 py-4 text-gray-600">Pro</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon height="20" icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-6 py-4 font-medium text-gray-900">Stark Industries</td>
<td className="px-6 py-4 text-gray-500">tony@stark.com</td>
<td className="px-6 py-4 text-gray-600">Basic</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20">Past Due</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon height="20" icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden space-y-8" id="view-plans">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Plans</h1>
<p className="mt-1 text-sm text-gray-500">Configure pricing tiers and features.</p>
</div>
<button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors">
                            Create Plan
                        </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
<h3 className="text-lg font-medium text-gray-900">Basic</h3>
<p className="mt-2 text-sm text-gray-500 line-clamp-2">Perfect for small businesses getting started online.</p>
<div className="my-6 flex items-baseline text-4xl font-medium tracking-tight text-gray-900">
                                $29<span className="text-sm font-normal text-gray-500 ml-1">/mo</span>
</div>
<ul className="flex-1 space-y-4 text-sm text-gray-600 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-gray-900" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    1 Custom Domain
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gray-900" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Basic Templates
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gray-900" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Email Support
                                </li>
</ul>
<button className="w-full rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-colors">Edit Plan</button>
</div>

<div className="bg-gray-900 rounded-2xl border border-gray-900 p-8 shadow-lg flex flex-col relative">
<div className="absolute top-0 right-6 transform -translate-y-1/2">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500 text-white tracking-wide">POPULAR</span>
</div>
<h3 className="text-lg font-medium text-white">Pro</h3>
<p className="mt-2 text-sm text-gray-400 line-clamp-2">Advanced features for growing companies.</p>
<div className="my-6 flex items-baseline text-4xl font-medium tracking-tight text-white">
                                $79<span className="text-sm font-normal text-gray-400 ml-1">/mo</span>
</div>
<ul className="flex-1 space-y-4 text-sm text-gray-300 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    5 Custom Domains
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Premium Templates
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Priority 24/7 Support
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Basic SEO Tools
                                </li>
</ul>
<button className="w-full rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors">Edit Plan</button>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
<h3 className="text-lg font-medium text-gray-900">Enterprise</h3>
<p className="mt-2 text-sm text-gray-500 line-clamp-2">Custom solutions for large scale operations.</p>
<div className="my-6 flex items-baseline text-4xl font-medium tracking-tight text-gray-900">
                                $299<span className="text-sm font-normal text-gray-500 ml-1">/mo</span>
</div>
<ul className="flex-1 space-y-4 text-sm text-gray-600 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-gray-900" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Unlimited Domains
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gray-900" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Custom Templates
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gray-900" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Dedicated Account Manager
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gray-900" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Advanced SEO &amp; Analytics
                                </li>
</ul>
<button className="w-full rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-colors">Edit Plan</button>
</div>
</div>
</div>

<div className="view-section hidden space-y-8" id="view-staff">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Staff Members</h1>
<p className="mt-1 text-sm text-gray-500">Manage team access and permissions.</p>
</div>
<button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
<iconify-icon height="16" icon="solar:user-plus-linear" width="16"></iconify-icon>
                            Invite Staff
                        </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<ul className="divide-y divide-gray-100">
<li className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-medium text-sm">AC</div>
<div>
<div className="font-medium text-sm text-gray-900">Aakash Chaudhary <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">You</span></div>
<div className="text-xs text-gray-500 mt-0.5">aakash@youthit.com</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-sm text-gray-600">Super Admin</span>
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon height="18" icon="solar:pen-linear" width="18"></iconify-icon>
</button>
</div>
</li>
<li className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
<div className="flex items-center gap-4">
<img alt="" className="w-10 h-10 rounded-full bg-gray-100" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div>
<div className="font-medium text-sm text-gray-900">Sarah Jenkins</div>
<div className="text-xs text-gray-500 mt-0.5">sarah@youthit.com</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-sm text-gray-600">Editor</span>
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon height="18" icon="solar:pen-linear" width="18"></iconify-icon>
</button>
</div>
</li>
<li className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium text-sm">MW</div>
<div>
<div className="font-medium text-sm text-gray-900">Mike Wallace</div>
<div className="text-xs text-gray-500 mt-0.5">mike@youthit.com <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20">Pending</span></div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-sm text-gray-600">Viewer</span>
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon height="18" icon="solar:pen-linear" width="18"></iconify-icon>
</button>
</div>
</li>
</ul>
</div>
</div>

<div className="view-section hidden space-y-8" id="view-seo">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">SEO Analysis</h1>
<p className="mt-1 text-sm text-gray-500">Monitor health scores across client domains.</p>
</div>
<button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2">
<iconify-icon height="16" icon="solar:refresh-linear" width="16"></iconify-icon>
                            Run Global Scan
                        </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left whitespace-nowrap">
<thead className="text-xs text-gray-500 bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 font-medium" scope="col">Domain</th>
<th className="px-6 py-3 font-medium" scope="col">Health Score</th>
<th className="px-6 py-3 font-medium" scope="col">Critical Issues</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Last Scanned</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">nexuslogistics.com</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-full bg-gray-200 rounded-full h-1.5 max-w-[100px]">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
</div>
<span className="text-xs font-medium text-green-600">92/100</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500">0</td>
<td className="px-6 py-4 text-right text-gray-500 text-xs">2 hours ago</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">vertexsolutions.io</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-full bg-gray-200 rounded-full h-1.5 max-w-[100px]">
<div className="bg-yellow-500 h-1.5 rounded-full" style={{width: '76%'}}></div>
</div>
<span className="text-xs font-medium text-yellow-600">76/100</span>
</div>
</td>
<td className="px-6 py-4 text-gray-900 font-medium">2</td>
<td className="px-6 py-4 text-right text-gray-500 text-xs">5 hours ago</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">starkindustries.com</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-full bg-gray-200 rounded-full h-1.5 max-w-[100px]">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
<span className="text-xs font-medium text-red-600">45/100</span>
</div>
</td>
<td className="px-6 py-4 text-gray-900 font-medium">8</td>
<td className="px-6 py-4 text-right text-gray-500 text-xs">1 day ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden space-y-8" id="view-domain">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Domains</h1>
<p className="mt-1 text-sm text-gray-500">Manage connected custom domains and SSL.</p>
</div>
<button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
<iconify-icon height="16" icon="solar:link-linear" width="16"></iconify-icon>
                            Connect Domain
                        </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<ul className="divide-y divide-gray-100">
<li className="p-4 sm:px-6 hover:bg-gray-50/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-2">
<span className="font-medium text-sm text-gray-900">nexuslogistics.com</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 uppercase tracking-wider">Primary</span>
</div>
<div className="text-xs text-gray-500 mt-1 flex items-center gap-3">
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Valid SSL</span>
<span className="flex items-center gap-1"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> DNS Configured</span>
</div>
</div>
<button className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-colors">Manage</button>
</li>
<li className="p-4 sm:px-6 hover:bg-gray-50/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-2">
<span className="font-medium text-sm text-gray-900">vertexsolutions.io</span>
</div>
<div className="text-xs text-gray-500 mt-1 flex items-center gap-3">
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Valid SSL</span>
<span className="flex items-center gap-1"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> DNS Configured</span>
</div>
</div>
<button className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-colors">Manage</button>
</li>
<li className="p-4 sm:px-6 hover:bg-gray-50/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-2">
<span className="font-medium text-sm text-gray-900">moonlightcafe.com</span>
</div>
<div className="text-xs text-gray-500 mt-1 flex items-center gap-3">
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></div> Generating SSL</span>
<span className="flex items-center gap-1 text-yellow-600"><iconify-icon icon="solar:danger-circle-linear"></iconify-icon> Pending DNS</span>
</div>
</div>
<button className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-colors">Manage</button>
</li>
</ul>
</div>
</div>

<div className="view-section hidden space-y-8" id="view-settings">
<div className="mb-8">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Settings</h1>
<p className="mt-2 text-sm text-gray-500">Manage your account settings and preferences.</p>
</div>
<div className="mb-8 border-b border-gray-200">
<nav className="-mb-px flex space-x-8">
<a className="border-gray-900 text-gray-900 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" href="#">
                                General
                            </a>
<a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors" href="#">
                                Security
                            </a>
<a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors" href="#">
                                Notifications
                            </a>
<a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors" href="#">
                                Billing
                            </a>
</nav>
</div>
<div className="space-y-8">

<section className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
<div className="px-6 py-5 border-b border-gray-200">
<h2 className="text-base font-medium text-gray-900">Profile Information</h2>
<p className="mt-1 text-sm text-gray-500">Update your account's profile information and email address.</p>
</div>
<div className="px-6 py-6">
<form className="space-y-6" onsubmit="event.preventDefault();">

<div className="flex items-center gap-x-6">
<div className="w-16 h-16 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xl font-medium border border-gray-200">
                                            AC
                                        </div>
<button className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-colors" type="button">
                                            Change avatar
                                        </button>
</div>
<div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="first-name">First name</label>
<input className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm transition-shadow" id="first-name" name="first-name" type="text" value="Aakash"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="last-name">Last name</label>
<input className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm transition-shadow" id="last-name" name="last-name" type="text" value="Chaudhary"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Email address</label>
<input className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm transition-shadow" id="email" name="email" type="email" value="aakash.chaudhary@gmail.com"/>
</div>
</div>
</form>
</div>
<div className="px-6 py-4 bg-gray-50/50 border-t border-gray-200 flex justify-end gap-3">
<button className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-colors" type="button">
                                    Discard
                                </button>
<button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors" type="button">
                                    Save Changes
                                </button>
</div>
</section>

<section className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
<div className="px-6 py-5 border-b border-gray-200">
<h2 className="text-base font-medium text-gray-900">Preferences</h2>
<p className="mt-1 text-sm text-gray-500">Manage your workspace preferences and regional settings.</p>
</div>
<div className="px-6 py-6 space-y-6">
<div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="language">Language</label>
<div className="relative">
<select className="block w-full appearance-none rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm bg-white transition-shadow" id="language" name="language">
<option>English (United States)</option>
<option>English (UK)</option>
<option>Spanish</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="timezone">Timezone</label>
<div className="relative">
<select className="block w-full appearance-none rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm bg-white transition-shadow" id="timezone" name="timezone">
<option>Asia/Kathmandu (NPT)</option>
<option>Pacific Time (US &amp; Canada)</option>
<option>Eastern Time (US &amp; Canada)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-100 pt-6">
<ul className="space-y-5">
<li className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Show Beta Features</span>
<span className="text-sm text-gray-500 mt-0.5">Get early access to new templates and tools.</span>
</div>
<button aria-checked="true" className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" role="switch" type="button">
<span aria-hidden="true" className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</li>
<li className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Compact Table View</span>
<span className="text-sm text-gray-500 mt-0.5">Reduce padding in data tables to see more rows.</span>
</div>
<button aria-checked="false" className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" role="switch" type="button">
<span aria-hidden="true" className="translate-x-0 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</li>
</ul>
</div>
</div>
</section>
</div>
</div>

<div className="h-12"></div>
</div>
</div>
</main>



    </>
  );
}
