import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- View Logic ---
        function switchView(viewName) {
            const list = document.getElementById('listView');
            const form = document.getElementById('formView');
            
            if (viewName === 'form') {
                list.classList.add('hidden');
                form.classList.remove('hidden');
                form.classList.add('fade-in');
            } else {
                form.classList.add('hidden');
                list.classList.remove('hidden');
                list.classList.add('fade-in');
            }
        }

        // --- Form Interaction Logic ---

        // 1. Pricing Type Toggle
        function togglePricing(type) {
            const hourly = document.getElementById('hourly-fields');
            const fixed = document.getElementById('fixed-fields');
            const subscription = document.getElementById('subscription-fields');

            // Reset all to hidden/flex default state first
            hourly.classList.add('hidden');
            fixed.classList.remove('grid'); fixed.classList.add('hidden');
            subscription.classList.remove('grid'); subscription.classList.add('hidden');

            // Show selected
            if (type === 'Hourly') {
                hourly.classList.remove('hidden');
                hourly.classList.add('grid', 'fade-in');
            } else if (type === 'Fixed') {
                fixed.classList.remove('hidden');
                fixed.classList.add('grid', 'fade-in');
            } else if (type === 'Subscription') {
                subscription.classList.remove('hidden');
                subscription.classList.add('grid', 'fade-in');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex z-20">
<div className="h-14 flex items-center px-4 border-b border-gray-100">
<div className="flex items-center gap-2 tracking-tight font-semibold text-sm">
<div className="w-6 h-6 bg-gray-900 text-white flex items-center justify-center rounded text-xs">D</div>
<span>Deliverables</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-2 space-y-0.5">
<a className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span>
                Dashboard
            </a>
<a className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:box" data-width="16"></span>
                Products
            </a>
<a className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-900 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:briefcase" data-width="16"></span>
                Services
            </a>
<a className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
                Invoices
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">JD</div>
<div className="text-xs">
<p className="font-medium text-gray-900">Jane Doe</p>
<p className="text-gray-500">Admin</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-gray-50 relative overflow-hidden">

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
<div className="flex flex-col">
<h1 className="text-sm font-semibold tracking-tight text-gray-900 flex items-center gap-2">
                        Services
                    </h1>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-50 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
</button>
<button className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-50 transition-colors">
<span className="iconify" data-icon="lucide:help-circle" data-width="18"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-8 relative">

<div className="fade-in max-w-6xl mx-auto space-y-6" id="listView">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-lg font-semibold tracking-tight text-gray-900">All Services</h2>
<p className="text-sm text-gray-500 mt-1">Manage non-stock services that can be sold, billed, and reported.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-200 transition-all">
                            Export
                        </button>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 transition-all flex items-center gap-2" onclick="switchView('form')">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
                            Add Service
                        </button>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1 sm:max-w-xs">
<span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</span>
<input className="pl-9 pr-3 py-1.5 w-full text-sm bg-white border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all" placeholder="Search services..." type="text"/>
</div>
<div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 border-dashed rounded-md hover:bg-gray-50 hover:border-gray-300 transition-all">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
                                Type
                                <span className="text-gray-400" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 border-dashed rounded-md hover:bg-gray-50 hover:border-gray-300 transition-all">
<span className="iconify" data-icon="lucide:check-circle" data-width="14"></span>
                                Status
                                <span className="text-gray-400" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-gray-50/50 border-b border-gray-100 text-gray-500 font-medium">
<tr>
<th className="px-4 py-3 cursor-pointer hover:text-gray-700">Service Name <span className="iconify inline align-text-bottom" data-icon="lucide:arrow-down" data-width="12"></span></th>
<th className="px-4 py-3">Type</th>
<th className="px-4 py-3">Pricing</th>
<th className="px-4 py-3">Status</th>
<th className="px-4 py-3">Last Updated</th>
<th className="px-4 py-3 text-right"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50 transition-colors cursor-pointer" onclick="switchView('form')">
<td className="px-4 py-3 font-medium text-gray-900">Website Design</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                            Hourly
                                        </span>
</td>
<td className="px-4 py-3 text-gray-600">$150.00 <span className="text-gray-400 text-xs">/hr</span></td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-gray-700">Active</span>
</div>
</td>
<td className="px-4 py-3 text-gray-500">Oct 24, 2023</td>
<td className="px-4 py-3 text-right">
<button className="p-1 text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity" onclick="event.stopPropagation()">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors cursor-pointer" onclick="switchView('form')">
<td className="px-4 py-3 font-medium text-gray-900">SEO Audit</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                                            Fixed
                                        </span>
</td>
<td className="px-4 py-3 text-gray-600">$2,400.00</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-gray-700">Active</span>
</div>
</td>
<td className="px-4 py-3 text-gray-500">Sep 12, 2023</td>
<td className="px-4 py-3 text-right">
<button className="p-1 text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity" onclick="event.stopPropagation()">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors cursor-pointer" onclick="switchView('form')">
<td className="px-4 py-3 font-medium text-gray-900">Maintenance Basic</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                                            Subscription
                                        </span>
</td>
<td className="px-4 py-3 text-gray-600">$99.00 <span className="text-gray-400 text-xs">/mo</span></td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
<span className="text-gray-500">Inactive</span>
</div>
</td>
<td className="px-4 py-3 text-gray-500">Aug 01, 2023</td>
<td className="px-4 py-3 text-right">
<button className="p-1 text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity" onclick="event.stopPropagation()">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-4 py-3 border-t border-gray-200 bg-gray-50/50 flex items-center justify-between">
<span className="text-xs text-gray-500">Showing 1-3 of 12 services</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded text-gray-400 cursor-not-allowed"><span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span></button>
<button className="p-1 rounded text-gray-600 hover:bg-gray-200"><span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span></button>
</div>
</div>
</div>
</div>

<div className="hidden fade-in max-w-3xl mx-auto pb-20" id="formView">

<div className="mb-6 flex items-center gap-2">
<button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors" onclick="switchView('list')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="16"></span>
                        Back to Services
                    </button>
</div>
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">New Service</h2>
<p className="text-sm text-gray-500 mt-1">Configure service details and pricing.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-all" onclick="switchView('list')">
                            Cancel
                        </button>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm hover:bg-gray-800 transition-all">
                            Save Service
                        </button>
</div>
</div>
<form className="space-y-8" onsubmit="event.preventDefault();">

<section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
<div className="md:col-span-1">
<h3 className="text-sm font-medium text-gray-900">Basic Information</h3>
<p className="text-xs text-gray-500 mt-1">General details used to identify the service.</p>
</div>
<div className="md:col-span-2 space-y-4 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Service Name <span className="text-red-500">*</span></label>
<input className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow shadow-sm placeholder-gray-400" placeholder="e.g. Website Design" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Service Code / SKU</label>
<input className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow shadow-sm placeholder-gray-400" placeholder="SRV-WEB-001" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Category</label>
<div className="relative">
<select className="w-full pl-3 pr-8 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow shadow-sm appearance-none cursor-pointer">
<option>Design</option>
<option>Development</option>
<option>Marketing</option>
<option>Consulting</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Description</label>
<textarea className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow shadow-sm placeholder-gray-400 resize-none" rows="3"></textarea>
<p className="text-xs text-gray-400 mt-1.5">Shown in estimations, invoices, and payment links.</p>
</div>
</div>
</div>
</section>
<div className="w-full h-px bg-gray-200"></div>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
<div className="md:col-span-1">
<h3 className="text-sm font-medium text-gray-900">Pricing &amp; Billing</h3>
<p className="text-xs text-gray-500 mt-1">Define how you charge for this service.</p>
</div>
<div className="md:col-span-2 space-y-4 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div>
<label className="block text-xs font-medium text-gray-700 mb-2">Service Type <span className="text-red-500">*</span></label>
<div className="grid grid-cols-3 gap-3">

<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="service_type" onchange="togglePricing('Hourly')" type="radio" value="Hourly"/>
<div className="px-3 py-2.5 text-center rounded-md border border-gray-200 bg-white hover:bg-gray-50 peer-checked:bg-gray-50 peer-checked:border-gray-900 peer-checked:ring-1 peer-checked:ring-gray-900 transition-all">
<div className="text-sm font-medium text-gray-700 peer-checked:text-gray-900">Hourly</div>
</div>
</label>

<label className="cursor-pointer group">
<input className="peer sr-only" name="service_type" onchange="togglePricing('Fixed')" type="radio" value="Fixed"/>
<div className="px-3 py-2.5 text-center rounded-md border border-gray-200 bg-white hover:bg-gray-50 peer-checked:bg-gray-50 peer-checked:border-gray-900 peer-checked:ring-1 peer-checked:ring-gray-900 transition-all">
<div className="text-sm font-medium text-gray-700 peer-checked:text-gray-900">Fixed</div>
</div>
</label>

<label className="cursor-pointer group">
<input className="peer sr-only" name="service_type" onchange="togglePricing('Subscription')" type="radio" value="Subscription"/>
<div className="px-3 py-2.5 text-center rounded-md border border-gray-200 bg-white hover:bg-gray-50 peer-checked:bg-gray-50 peer-checked:border-gray-900 peer-checked:ring-1 peer-checked:ring-gray-900 transition-all">
<div className="text-sm font-medium text-gray-700 peer-checked:text-gray-900">Subscription</div>
</div>
</label>
</div>
</div>

<div className="grid grid-cols-2 gap-4 fade-in" id="hourly-fields">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Hourly Rate</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 text-sm">$</span>
</div>
<input className="w-full pl-7 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow shadow-sm" placeholder="0.00" type="text"/>
</div>
</div>
</div>
<div className="hidden grid-cols-2 gap-4" id="fixed-fields">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Fixed Price</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 text-sm">$</span>
</div>
<input className="w-full pl-7 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow shadow-sm" placeholder="0.00" type="text"/>
</div>
</div>
</div>
<div className="hidden grid-cols-2 gap-4" id="subscription-fields">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Price</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 text-sm">$</span>
</div>
<input className="w-full pl-7 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow shadow-sm" placeholder="0.00" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Billing Cycle</label>
<div className="relative">
<select className="w-full pl-3 pr-8 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow shadow-sm appearance-none cursor-pointer">
<option>Monthly</option>
<option>Quarterly</option>
<option>Yearly</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
</div>
</div>
</section>
</form>
</div>
</div>
</main>


    </>
  );
}
