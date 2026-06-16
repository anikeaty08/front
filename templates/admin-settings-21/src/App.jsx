import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between flex-shrink-0 hidden md:flex">
<div>

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<span className="text-xl font-semibold tracking-tighter text-gray-900">KOLI</span>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-purple-50 text-purple-700" href="#general">
<iconify-icon className="text-lg" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    General &amp; Profile
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#financial">
<iconify-icon className="text-lg" icon="solar:wad-of-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Financial &amp; Logistics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#team">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Team &amp; Security
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#maintenance">
<iconify-icon className="text-lg" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    App Maintenance
                </a>
</nav>
</div>

<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold text-xs">
                    JD
                </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">John Doe</span>
<span className="text-xs text-gray-500">Super Admin</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 flex-shrink-0 z-10 shadow-sm shadow-gray-100/50">
<h1 className="text-lg font-semibold tracking-tight text-gray-900">Master Control Center</h1>
<div className="flex items-center gap-4">
<span className="text-sm text-gray-500 hidden sm:inline-block">Unsaved changes</span>
<button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                    Save Changes
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 pb-24 scroll-smooth">
<div className="max-w-5xl mx-auto space-y-16">

<section className="space-y-6" id="general">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Personal Control</h2>
<p className="text-sm text-gray-500 mt-1">Manage your admin profile and security credentials.</p>
</div>
<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="p-6 sm:p-8">
<div className="flex flex-col sm:flex-row gap-8 items-start">

<div className="relative group cursor-pointer flex-shrink-0">
<div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<iconify-icon className="text-white text-xl" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700">Full Name</label>
<input className="block w-full rounded-md border-gray-300 border py-2 px-3 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-shadow" type="text" value="John Doe Admin"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700">Professional Email</label>
<input className="block w-full rounded-md border-gray-300 border py-2 px-3 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-shadow" type="email" value="admin@koli.com"/>
</div>
<div className="space-y-2 md:col-span-2 lg:col-span-1">
<label className="block text-sm font-medium text-gray-700">Phone Number</label>
<div className="flex rounded-md shadow-sm border border-gray-300 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-shadow">
<span className="inline-flex items-center px-3 rounded-l-md border-r border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                +237
                                            </span>
<input className="flex-1 block w-full rounded-none rounded-r-md border-0 py-2 px-3 text-sm text-gray-900 outline-none" type="tel" value="655 12 34 56"/>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 px-6 py-5 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3 w-full sm:w-auto">
<iconify-icon className="text-gray-400 text-lg" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
<p className="text-xs text-gray-500">Add an extra layer of security to your account.</p>
</div>
</div>
<div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Change Password</button>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
</label>
</div>
</div>
</div>
</section>
<hr className="border-gray-200"/>

<section className="space-y-6" id="financial">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Financial Rates &amp; Logistics</h2>
<p className="text-sm text-gray-500 mt-1">Configure exchange rates, shipping tariffs, and service commissions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-gray-400 text-lg" icon="solar:calculator-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900">Exchange Engine</h3>
</div>
<div className="space-y-3">
<div>
<label className="block text-xs text-gray-500 mb-1">1 RMB to FCFA</label>
<div className="relative">
<input className="block w-full rounded-md border-gray-300 border py-2 pl-3 pr-12 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none" type="number" value="85.50"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<span className="text-xs text-gray-500 font-medium">XAF</span>
</div>
</div>
</div>
<div>
<label className="block text-xs text-gray-500 mb-1">1 USD to FCFA</label>
<div className="relative">
<input className="block w-full rounded-md border-gray-300 border py-2 pl-3 pr-12 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none" type="number" value="610.00"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<span className="text-xs text-gray-500 font-medium">XAF</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-gray-400 text-lg" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900">Logistics Tariffs (per KG)</h3>
</div>
<div className="space-y-3">
<div>
<label className="block text-xs text-gray-500 mb-1">Air Cargo</label>
<div className="relative">
<input className="block w-full rounded-md border-gray-300 border py-2 pl-3 pr-12 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none" type="number" value="8500"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<span className="text-xs text-gray-500 font-medium">XAF</span>
</div>
</div>
</div>
<div>
<label className="block text-xs text-gray-500 mb-1">Sea Cargo</label>
<div className="relative">
<input className="block w-full rounded-md border-gray-300 border py-2 pl-3 pr-12 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none" type="number" value="3500"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<span className="text-xs text-gray-500 font-medium">XAF</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-gray-400 text-lg" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900">Global Service Fee</h3>
</div>
<div className="space-y-3">
<div>
<label className="block text-xs text-gray-500 mb-1">Koli Commission</label>
<div className="relative">
<input className="block w-full rounded-md border-gray-300 border py-2 pl-3 pr-8 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none" type="number" value="8.0"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<span className="text-sm text-gray-500 font-medium">%</span>
</div>
</div>
<p className="text-xs text-gray-400 mt-2 leading-relaxed">Added automatically to every imported Shein/Alibaba link total.</p>
</div>
</div>
</div>
</div>
</section>
<hr className="border-gray-200"/>

<section className="space-y-6" id="team">
<div className="flex items-end justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Team &amp; Security</h2>
<p className="text-sm text-gray-500 mt-1">Manage staff access and monitor system activities.</p>
</div>
<button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 text-sm font-medium py-1.5 px-3 rounded-md shadow-sm transition-all flex items-center gap-1.5">
<iconify-icon icon="solar:user-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Invite Admin
                        </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-orange-50/50 border border-orange-200 rounded-xl p-5 flex items-start sm:items-center justify-between gap-4">
<div className="flex gap-3 items-start">
<div className="p-2 bg-orange-100 text-orange-600 rounded-lg flex-shrink-0 mt-0.5 sm:mt-0">
<iconify-icon className="text-lg" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900">Critical Action Approval</h4>
<p className="text-sm text-gray-600 mt-0.5 leading-relaxed">Require Super-Admin approval for Refunds or Weight Changes exceeding <span className="font-medium text-gray-900">50,000 FCFA</span>.</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500"></div>
</label>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-gray-500">
<thead className="bg-gray-50/50 text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200">
<tr>
<th className="px-6 py-3 font-medium" scope="col">Admin Detail</th>
<th className="px-6 py-3 font-medium" scope="col">Role</th>
<th className="px-6 py-3 font-medium" scope="col">Last Login</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-medium text-xs">JD</div>
<div>
<div className="font-medium text-gray-900">John Doe</div>
<div className="text-xs text-gray-500">admin@koli.com</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700 ring-1 ring-inset ring-purple-600/10">Super Admin</span>
</td>
<td className="px-6 py-4 text-xs">Today, 09:41 AM</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium text-xs">AS</div>
<div>
<div className="font-medium text-gray-900">Alice Smith</div>
<div className="text-xs text-gray-500">alice@koli.com</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/10">Finance</span>
</td>
<td className="px-6 py-4 text-xs">Yesterday, 14:30 PM</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium text-xs">MK</div>
<div>
<div className="font-medium text-gray-900">Mark K.</div>
<div className="text-xs text-gray-500">mark@koli.com</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/10">Logistics</span>
</td>
<td className="px-6 py-4 text-xs">Oct 24, 08:15 AM</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-[400px]">
<div className="p-4 border-b border-gray-200 flex items-center gap-2 flex-shrink-0">
<iconify-icon className="text-gray-500" icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900">System Audit Log</h3>
</div>
<div className="p-5 flex-1 overflow-y-auto scrollbar-hide">
<div className="relative space-y-6 before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">

<div className="relative flex items-start gap-4">
<div className="absolute left-0 h-4 w-4 rounded-full bg-white border-2 border-purple-500 mt-1 flex-shrink-0 z-10"></div>
<div className="ml-8 space-y-1">
<p className="text-sm text-gray-600">Admin <span className="font-medium text-gray-900">Alice Smith</span> changed RMB rate to <span className="font-medium text-gray-900">85.50 FCFA</span>.</p>
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Today, 10:45 AM
                                            </span>
</div>
</div>

<div className="relative flex items-start gap-4">
<div className="absolute left-0 h-4 w-4 rounded-full bg-white border-2 border-gray-300 mt-1 flex-shrink-0 z-10"></div>
<div className="ml-8 space-y-1">
<p className="text-sm text-gray-600">Admin <span className="font-medium text-gray-900">John Doe</span> approved refund #RF-2093 for <span className="font-medium text-gray-900">75,000 FCFA</span>.</p>
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Yesterday, 16:20 PM
                                            </span>
</div>
</div>

<div className="relative flex items-start gap-4">
<div className="absolute left-0 h-4 w-4 rounded-full bg-white border-2 border-gray-300 mt-1 flex-shrink-0 z-10"></div>
<div className="ml-8 space-y-1">
<p className="text-sm text-gray-600">Admin <span className="font-medium text-gray-900">Mark K.</span> updated Air Cargo tariff to <span className="font-medium text-gray-900">8,500 FCFA</span>.</p>
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Oct 24, 09:12 AM
                                            </span>
</div>
</div>

<div className="relative flex items-start gap-4">
<div className="absolute left-0 h-4 w-4 rounded-full bg-white border-2 border-gray-300 mt-1 flex-shrink-0 z-10"></div>
<div className="ml-8 space-y-1">
<p className="text-sm text-gray-600">System generated weekly financial report.</p>
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Oct 23, 00:00 AM
                                            </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<hr className="border-gray-200"/>

<section className="space-y-6" id="maintenance">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">App Maintenance</h2>
<p className="text-sm text-gray-500 mt-1">Control customer-facing configurations and emergency states.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-red-50/30 border border-red-100 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-red-100 opacity-50 pointer-events-none">
<iconify-icon className="text-9xl" icon="solar:danger-triangle-bold"></iconify-icon>
</div>
<div className="relative z-10 max-w-sm space-y-2">
<h3 className="text-base font-semibold text-red-900 flex items-center gap-2">
<iconify-icon icon="solar:siren-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Maintenance Mode
                                </h3>
<p className="text-sm text-red-700/80 leading-relaxed">Activating this will temporarily suspend access to the mobile app for all customers, displaying a maintenance screen.</p>
</div>
<div className="relative z-10 flex-shrink-0 bg-white p-2 rounded-xl shadow-sm border border-red-100">

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-red-500"></div>
</label>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
<div className="flex items-center gap-2 border-b border-gray-100 pb-4">
<iconify-icon className="text-gray-400 text-lg" icon="solar:chat-round-call-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900">Customer Support Links</h3>
</div>
<div className="space-y-4">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:phone-linear"></iconify-icon> WhatsApp Support Number
                                    </label>
<input className="block w-full rounded-md border-gray-300 border py-2 px-3 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none" type="text" value="+237 655 00 00 00"/>
<p className="text-xs text-gray-400">Linked directly from the app's help center.</p>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:letter-linear"></iconify-icon> Support Email Address
                                    </label>
<input className="block w-full rounded-md border-gray-300 border py-2 px-3 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none" type="email" value="support@koli.com"/>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

    </>
  );
}
