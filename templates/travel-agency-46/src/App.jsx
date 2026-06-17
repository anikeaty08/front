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



        function initializeNavigation() {
            const navLinks = document.querySelectorAll('.nav-link');
            const views = document.querySelectorAll('.view-section');
            const pageTitle = document.getElementById('header-page-title');

            if (!navLinks.length) return;

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const currentLink = e.currentTarget;
                    const targetId = currentLink.getAttribute('data-target');
                    const title = currentLink.getAttribute('data-title');

                    if (!targetId) return;

                    // Update Header Title
                    if (pageTitle && title) {
                        pageTitle.textContent = title;
                    }

                    // Reset all nav links styles
                    navLinks.forEach(nav => {
                        nav.classList.remove('bg-gray-50', 'text-[#017BC5]');
                        nav.classList.add('text-gray-500', 'hover:text-gray-900', 'hover:bg-gray-50');
                    });

                    // Set active nav link style
                    currentLink.classList.remove('text-gray-500', 'hover:text-gray-900', 'hover:bg-gray-50');
                    currentLink.classList.add('bg-gray-50', 'text-[#017BC5]');

                    // Hide all views and show target view
                    views.forEach(view => {
                        if (view.id === 'view-' + targetId) {
                            view.classList.remove('hidden');
                            view.classList.add('block');
                        } else {
                            view.classList.add('hidden');
                            view.classList.remove('block');
                        }
                    });
                });
            });
        }

        // Run immediately if DOM is already parsed (common in embedded live previewers), 
        // else wait for the DOMContentLoaded event to ensure elements exist.
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeNavigation);
        } else {
            initializeNavigation();
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
      

<aside className="hidden md:flex flex-col w-64 border-r border-gray-200 bg-white flex-shrink-0">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-[#FFD530]" icon="solar:sun-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-[#017BC5]">ewakacje</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg bg-gray-50 text-[#017BC5] transition-colors" data-target="dashboard" data-title="Overview" href="#">
<iconify-icon className="text-xl" icon="solar:widget-linear"></iconify-icon>
<span className="text-base font-medium">Dashboard</span>
</a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" data-target="clients" data-title="Clients" href="#">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-base font-medium">Clients</span>
</a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" data-target="analytics" data-title="Analytics" href="#">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-base font-medium">Analytics</span>
</a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" data-target="reports" data-title="Reports" href="#">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
<span className="text-base font-medium">Reports</span>
</a>
</nav>

<div className="p-3 mt-auto border-t border-gray-100">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
<span className="text-base font-medium">Settings</span>
</a>

<div className="mt-4 flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#017BC5] font-medium text-sm">
                    MK
                </div>
<div className="flex-1 min-w-0">
<p className="text-base font-medium text-gray-900 truncate">Maciej Kowalski</p>
<p className="text-sm text-gray-500 truncate">Admin</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white overflow-hidden">

<header className="h-16 flex items-center justify-between px-6 border-b border-gray-100 flex-shrink-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500 hover:text-gray-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<h1 className="text-xl font-semibold tracking-tight text-gray-900 hidden sm:block" id="header-page-title">Overview</h1>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="text-base text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-base w-64 focus:outline-none focus:border-gray-300 focus:ring-0 transition-colors placeholder:text-gray-400" placeholder="Search..." type="text"/>
</div>
<button className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#DD1144] rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-7xl mx-auto">

<div className="view-section block space-y-8" id="view-dashboard">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Dashboard</h2>
<p className="text-base text-gray-500 mt-1">Here's what's happening with your agency today.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col justify-between h-36">
<div className="flex items-center justify-between text-gray-500">
<span className="text-sm font-medium">Total Trips Sold</span>
<iconify-icon className="text-lg" icon="solar:ticket-linear"></iconify-icon>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-gray-900">1,248</span>
</div>
<div className="flex items-center gap-1 mt-1 text-sm text-green-600 font-medium">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span>12% from last month</span>
</div>
</div>
</div>

<div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col justify-between h-36">
<div className="flex items-center justify-between text-gray-500">
<span className="text-sm font-medium">Active Clients</span>
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-gray-900">8,592</span>
</div>
<div className="flex items-center gap-1 mt-1 text-sm text-green-600 font-medium">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span>4.3% from last month</span>
</div>
</div>
</div>

<div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col justify-between h-36">
<div className="flex items-center justify-between text-gray-500">
<span className="text-sm font-medium">Total Revenue</span>
<iconify-icon className="text-lg" icon="solar:card-linear"></iconify-icon>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-gray-900">2.4M zł</span>
</div>
<div className="flex items-center gap-1 mt-1 text-sm text-green-600 font-medium">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span>18% from last month</span>
</div>
</div>
</div>

<div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col justify-between h-36">
<div className="flex items-center justify-between text-gray-500">
<span className="text-sm font-medium">Avg. Booking Value</span>
<iconify-icon className="text-lg" icon="solar:bill-list-linear"></iconify-icon>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-gray-900">4,850 zł</span>
</div>
<div className="flex items-center gap-1 mt-1 text-sm text-red-600 font-medium">
<iconify-icon icon="solar:graph-down-linear"></iconify-icon>
<span>1.2% from last month</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-96">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Trip Sales &amp; Monthly Revenue</h3>
<p className="text-sm text-gray-500">Current year overview</p>
</div>
<button className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">
<iconify-icon className="text-xl" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<div className="flex-1 flex items-end justify-between gap-2 relative">
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-gray-100"></div>
<div className="w-full h-px bg-gray-100"></div>
<div className="w-full h-px bg-gray-100"></div>
<div className="w-full h-px bg-gray-100"></div>
<div className="w-full h-px bg-gray-100"></div>
</div>
<div className="w-full bg-[#017BC5] rounded-t-sm hover:opacity-80 transition-opacity z-10" style={{height: '30%'}}></div>
<div className="w-full bg-[#017BC5] rounded-t-sm hover:opacity-80 transition-opacity z-10" style={{height: '45%'}}></div>
<div className="w-full bg-[#017BC5] rounded-t-sm hover:opacity-80 transition-opacity z-10" style={{height: '60%'}}></div>
<div className="w-full bg-[#017BC5] rounded-t-sm hover:opacity-80 transition-opacity z-10" style={{height: '50%'}}></div>
<div className="w-full bg-[#017BC5] rounded-t-sm hover:opacity-80 transition-opacity z-10" style={{height: '75%'}}></div>
<div className="w-full bg-[#017BC5] rounded-t-sm hover:opacity-80 transition-opacity z-10" style={{height: '90%'}}></div>
<div className="w-full bg-[#017BC5] rounded-t-sm hover:opacity-80 transition-opacity z-10" style={{height: '100%'}}></div>
<div className="w-full bg-[#017BC5] opacity-40 rounded-t-sm z-10" style={{height: '85%'}}></div>
<div className="w-full bg-[#017BC5] opacity-40 rounded-t-sm z-10" style={{height: '70%'}}></div>
<div className="w-full bg-[#017BC5] opacity-40 rounded-t-sm z-10" style={{height: '60%'}}></div>
</div>
<div className="flex justify-between mt-4 text-sm text-gray-400">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-96">
<div className="mb-6">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Popular Destinations</h3>
<p className="text-sm text-gray-500">Bookings by region</p>
</div>
<div className="flex-1 flex flex-col items-center justify-center relative">
<div className="w-48 h-48 rounded-full relative bg-[conic-gradient(at_center,_#017BC5_0%_45%,_#FFD530_45%_70%,_#DD1144_70%_85%,_#E5E7EB_85%_100%)] shadow-sm">
<div className="absolute inset-0 m-auto w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center">
<span className="text-2xl font-semibold tracking-tight text-gray-900">45%</span>
<span className="text-sm text-gray-500">Europe</span>
</div>
</div>
</div>
<div className="mt-6 space-y-2">
<div className="flex items-center justify-between text-base">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-[#017BC5]"></span>
<span className="text-gray-600">Europe</span>
</div>
<span className="font-medium text-gray-900">45%</span>
</div>
<div className="flex items-center justify-between text-base">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-[#FFD530]"></span>
<span className="text-gray-600">Asia</span>
</div>
<span className="font-medium text-gray-900">25%</span>
</div>
<div className="flex items-center justify-between text-base">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-[#DD1144]"></span>
<span className="text-gray-600">Americas</span>
</div>
<span className="font-medium text-gray-900">15%</span>
</div>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="px-6 py-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Recent Bookings</h3>
<p className="text-sm text-gray-500">Latest transactions and status updates.</p>
</div>
<button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                                View All
                            </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Code</th>
<th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Destination</th>
<th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Client</th>
<th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Date</th>
<th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Price</th>
<th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white text-base">
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">XYZ42069</td>
<td className="px-6 py-4 text-gray-600 whitespace-nowrap">Lloret de Mar, Spain</td>
<td className="px-6 py-4 text-gray-900 whitespace-nowrap">Jan Kowalski</td>
<td className="px-6 py-4 text-gray-500 whitespace-nowrap">Oct 18, 2024</td>
<td className="px-6 py-4 text-gray-900 whitespace-nowrap">3,120 zł</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Confirmed</span>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">TRK99210</td>
<td className="px-6 py-4 text-gray-600 whitespace-nowrap">Side, Turkey</td>
<td className="px-6 py-4 text-gray-900 whitespace-nowrap">Anna Nowak</td>
<td className="px-6 py-4 text-gray-500 whitespace-nowrap">Nov 05, 2024</td>
<td className="px-6 py-4 text-gray-900 whitespace-nowrap">4,850 zł</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200/60">Pending</span>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">EGY77421</td>
<td className="px-6 py-4 text-gray-600 whitespace-nowrap">Hurghada, Egypt</td>
<td className="px-6 py-4 text-gray-900 whitespace-nowrap">Maria Wójcik</td>
<td className="px-6 py-4 text-gray-500 whitespace-nowrap">Dec 20, 2024</td>
<td className="px-6 py-4 text-gray-900 whitespace-nowrap">2,900 zł</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">Cancelled</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden space-y-8" id="view-clients">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Clients</h2>
<p className="text-base text-gray-500 mt-1">Manage your customer base and view booking history.</p>
</div>
<button className="px-4 py-2 bg-[#017BC5] text-white text-sm font-medium rounded-lg hover:bg-opacity-90 transition-colors shadow-sm flex items-center gap-2 w-max">
<iconify-icon className="text-lg" icon="solar:user-plus-linear"></iconify-icon>
                            Add Client
                        </button>
</div>
<div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white">
<div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="relative w-full sm:w-72">
<iconify-icon className="text-base text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300 focus:ring-0 transition-colors" placeholder="Search clients..." type="text"/>
</div>
<button className="px-3 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:filter-linear"></iconify-icon>
                                Filters
                            </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Client</th>
<th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Contact</th>
<th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Trips</th>
<th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Total Value</th>
<th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-base">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#017BC5]/10 flex items-center justify-center text-[#017BC5] font-medium text-xs">JK</div>
<div className="font-medium text-gray-900">Jan Kowalski</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-600">jan.k@example.com</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-900">4</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">12,450 zł</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<button className="text-gray-400 hover:text-gray-900 p-1 rounded transition-colors"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-medium text-xs">AN</div>
<div className="font-medium text-gray-900">Anna Nowak</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-600">anna.nowak@email.com</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-900">1</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">4,850 zł</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<button className="text-gray-400 hover:text-gray-900 p-1 rounded transition-colors"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium text-xs">PW</div>
<div className="font-medium text-gray-900">Piotr Wiśniewski</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-600">piotr.w@example.com</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-900">8</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">32,100 zł</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<button className="text-gray-400 hover:text-gray-900 p-1 rounded transition-colors"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden space-y-8" id="view-analytics">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Analytics</h2>
<p className="text-base text-gray-500 mt-1">Detailed metrics and overall performance data.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">

<div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
<h3 className="text-sm font-medium text-gray-500 mb-2">Website Visitors (30d)</h3>
<div className="flex items-end justify-between">
<span className="text-3xl font-semibold tracking-tight text-gray-900">45,210</span>
<div className="flex items-center gap-1 text-sm text-green-600 font-medium mb-1">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span>24%</span>
</div>
</div>
</div>

<div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
<h3 className="text-sm font-medium text-gray-500 mb-2">Conversion Rate</h3>
<div className="flex items-end justify-between">
<span className="text-3xl font-semibold tracking-tight text-gray-900">3.2%</span>
<div className="flex items-center gap-1 text-sm text-green-600 font-medium mb-1">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span>0.4%</span>
</div>
</div>
</div>

<div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
<h3 className="text-sm font-medium text-gray-500 mb-2">Bounce Rate</h3>
<div className="flex items-end justify-between">
<span className="text-3xl font-semibold tracking-tight text-gray-900">42.1%</span>
<div className="flex items-center gap-1 text-sm text-red-600 font-medium mb-1">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span>2.1%</span>
</div>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-96 bg-white">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Traffic Sources</h3>
<p className="text-sm text-gray-500">Organic vs Paid vs Direct</p>
</div>
</div>

<div className="flex-1 w-full relative">
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
<div className="w-full h-px bg-gray-100"></div>
<div className="w-full h-px bg-gray-100"></div>
<div className="w-full h-px bg-gray-100"></div>
<div className="w-full h-px bg-gray-100"></div>
</div>

<svg className="absolute inset-0 h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="opacity-80" d="M0,80 Q20,60 40,70 T80,30 T100,20" fill="none" stroke="#017BC5" strokeWidth="2"></path>
<path className="opacity-80" d="M0,90 Q20,80 40,85 T80,60 T100,50" fill="none" stroke="#FFD530" strokeWidth="2"></path>
</svg>

<div className="absolute bottom-0 w-full flex justify-between text-sm text-gray-400">
<span>Week 1</span>
<span>Week 2</span>
<span>Week 3</span>
<span>Week 4</span>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-8" id="view-reports">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Reports</h2>
<p className="text-base text-gray-500 mt-1">Downloadable summaries and performance documents.</p>
</div>
<button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2 w-max">
<iconify-icon className="text-lg" icon="solar:add-square-linear"></iconify-icon>
                            Generate Report
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm flex items-start justify-between group hover:border-gray-300 transition-colors">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-2xl" icon="solar:file-text-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-gray-900">Q3 Financial Summary</h3>
<p className="text-sm text-gray-500 mt-1">PDF • 2.4 MB • Oct 1, 2024</p>
</div>
</div>
<button className="text-gray-400 hover:text-[#017BC5] transition-colors p-1">
<iconify-icon className="text-xl" icon="solar:download-linear"></iconify-icon>
</button>
</div>

<div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm flex items-start justify-between group hover:border-gray-300 transition-colors">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-2xl" icon="solar:documents-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-gray-900">Customer Satisfaction</h3>
<p className="text-sm text-gray-500 mt-1">XLSX • 1.1 MB • Sep 15, 2024</p>
</div>
</div>
<button className="text-gray-400 hover:text-[#017BC5] transition-colors p-1">
<iconify-icon className="text-xl" icon="solar:download-linear"></iconify-icon>
</button>
</div>

<div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm flex items-start justify-between group hover:border-gray-300 transition-colors">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-2xl" icon="solar:file-text-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-gray-900">Annual Travel Trends</h3>
<p className="text-sm text-gray-500 mt-1">PDF • 5.7 MB • Jan 5, 2024</p>
</div>
</div>
<button className="text-gray-400 hover:text-[#017BC5] transition-colors p-1">
<iconify-icon className="text-xl" icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="h-8"></div>
</div>
</div>
</main>



    </>
  );
}
