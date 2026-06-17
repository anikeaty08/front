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
      

<section className="w-full h-screen flex items-center justify-center bg-white border-b-8 border-gray-100 relative overflow-hidden">
<div className="w-full max-w-sm px-6">
<div className="flex flex-col items-center mb-8">
<div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4 text-white">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-2xl font-medium tracking-tight text-gray-800">Sourcing Platform</h1>
<p className="text-sm text-gray-500 mt-2">Manage sourcing requests efficiently</p>
</div>
<div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-800 mb-1.5">Email</label>
<input className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" placeholder="name@company.com" type="email"/>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="block text-sm font-medium text-gray-800">Password</label>
<a className="text-xs text-blue-600 hover:text-blue-700 font-medium" href="#">Forgot?</a>
</div>
<input className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center gap-2">
<input className="custom-checkbox" type="checkbox"/>
<label className="text-sm text-gray-500 cursor-pointer">Remember me for 30 days</label>
</div>
<button className="w-full h-10 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 transition-colors" type="button">
                        Sign In
                    </button>
</form>
</div>
</div>
</section>

<section className="w-full h-screen flex bg-white border-b-8 border-gray-100 relative overflow-hidden">

<aside className="w-[240px] flex-shrink-0 border-r border-gray-200 bg-white flex flex-col hidden md:flex h-full">
<div className="h-[64px] flex items-center px-6 border-b border-gray-200">
<iconify-icon className="text-blue-600 text-lg mr-2" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-medium tracking-tight">Sourcing</span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium bg-gray-50 text-gray-800" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon> Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon> My Requests
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon> Credits
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon> Messages
                </a>
</nav>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">JD</div>
<div>
<p className="text-sm font-medium text-gray-800">John Doe</p>
<p className="text-xs text-gray-500">Buyer</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-[64px] flex-shrink-0 border-b border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6 z-10 sticky top-0">
<h2 className="text-lg font-medium tracking-tight text-gray-800">Buyer Dashboard</h2>
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-600"><iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6">
<div className="max-w-6xl mx-auto space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col">
<span className="text-sm text-gray-500 mb-2">Available Credits</span>
<span className="text-2xl font-medium tracking-tight text-gray-800">1,250</span>
</div>
<div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col">
<span className="text-sm text-gray-500 mb-2">Pending Requests</span>
<span className="text-2xl font-medium tracking-tight text-gray-800">3</span>
</div>
<div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col">
<span className="text-sm text-gray-500 mb-2">Completed Requests</span>
<span className="text-2xl font-medium tracking-tight text-gray-800">12</span>
</div>
</div>

<div className="flex items-center justify-between pt-4">
<h3 className="text-base font-medium text-gray-800">Recent Requests</h3>
<button className="h-10 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 transition-colors">
<iconify-icon className="text-lg" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon> New Request
                        </button>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="px-6 py-3 font-normal text-gray-500">Request Title</th>
<th className="px-6 py-3 font-normal text-gray-500">Date</th>
<th className="px-6 py-3 font-normal text-gray-500">Status</th>
<th className="px-6 py-3 font-normal text-gray-500">Assigned Sourcer</th>
<th className="px-6 py-3 font-normal text-gray-500 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-800">Custom Aluminum Enclosures</td>
<td className="px-6 py-4 text-gray-500">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200/50">Pending</span>
</td>
<td className="px-6 py-4 text-gray-500">-</td>
<td className="px-6 py-4 text-right">
<button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-800">Ergonomic Office Chairs (Bulk)</td>
<td className="px-6 py-4 text-gray-500">Oct 21, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/50">In Progress</span>
</td>
<td className="px-6 py-4 text-gray-800">Sarah Jenkins</td>
<td className="px-6 py-4 text-right">
<button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-800">Silicone Keyboard Covers</td>
<td className="px-6 py-4 text-gray-500">Oct 15, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-200/50">Completed</span>
</td>
<td className="px-6 py-4 text-gray-800">Mike Chen</td>
<td className="px-6 py-4 text-right">
<button className="text-blue-600 hover:text-blue-800 font-medium">Results</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-800">Generic branded packaging</td>
<td className="px-6 py-4 text-gray-500">Oct 10, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-200/50">Rejected</span>
</td>
<td className="px-6 py-4 text-gray-500">-</td>
<td className="px-6 py-4 text-right">
<button className="text-blue-600 hover:text-blue-800 font-medium">Details</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="pt-12 pb-6">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Modal State Visual</h3>
<div className="relative w-full max-w-xl bg-white border border-gray-200 shadow-sm rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium tracking-tight text-gray-800">Create New Request</h3>
<button className="text-gray-400 hover:text-gray-600"><iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
<form className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-800 mb-1.5">Product Title</label>
<input className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="e.g. Custom Aluminum Enclosures" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-800 mb-1.5">Description &amp; Specs</label>
<textarea className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Provide detailed specifications, materials, etc." rows="3"></textarea>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-800 mb-1.5">Target Price ($)</label>
<input className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="0.00" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-800 mb-1.5">Target Quantity</label>
<input className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="e.g. 5000" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-800 mb-1.5">Reference Images</label>
<div className="w-full h-24 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">
<iconify-icon className="text-2xl mb-1" icon="solar:gallery-add-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Click to upload multiple images</span>
</div>
</div>
<div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
<button className="h-10 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors" type="button">Cancel</button>
<button className="h-10 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 transition-colors" type="button">Submit Request</button>
</div>
</form>
</div>
</div>
</div>
</div>
</main>
</section>

<section className="w-full h-screen flex bg-white border-b-8 border-gray-100 relative overflow-hidden">

<aside className="w-[240px] flex-shrink-0 border-r border-gray-200 bg-white flex flex-col hidden md:flex h-full">
<div className="h-[64px] flex items-center px-6 border-b border-gray-200">
<iconify-icon className="text-gray-800 text-lg mr-2" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-medium tracking-tight">Admin</span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon> Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium bg-gray-50 text-gray-800" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon> Requests
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon> Credits
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> Users
                </a>
</nav>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-700">A</div>
<div>
<p className="text-sm font-medium text-gray-800">Admin User</p>
<p className="text-xs text-gray-500">System</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-[64px] flex-shrink-0 border-b border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6 z-10 sticky top-0">
<h2 className="text-lg font-medium tracking-tight text-gray-800">Admin Dashboard</h2>
</header>

<div className="flex-1 overflow-y-auto p-6">
<div className="max-w-6xl mx-auto space-y-6">
<h3 className="text-base font-medium text-gray-800 mt-2">Pending Requests</h3>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="px-6 py-3 font-normal text-gray-500">Buyer</th>
<th className="px-6 py-3 font-normal text-gray-500">Request Title</th>
<th className="px-6 py-3 font-normal text-gray-500">Submitted Date</th>
<th className="px-6 py-3 font-normal text-gray-500">Status</th>
<th className="px-6 py-3 font-normal text-gray-500 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-800">Acme Corp</td>
<td className="px-6 py-4 text-gray-600">Custom Aluminum Enclosures</td>
<td className="px-6 py-4 text-gray-500">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200/50">Pending Approval</span>
</td>
<td className="px-6 py-4 text-right flex justify-end gap-2">
<button className="h-8 px-3 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Reject</button>
<button className="h-8 px-3 text-xs font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-colors">Approve &amp; Assign</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">

<div>
<h3 className="text-base font-medium text-gray-800 mb-4">Approved &amp; Active</h3>
<div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-2 space-y-2">
<div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-800">Ergonomic Office Chairs</p>
<p className="text-xs text-gray-500 mt-1">TechStart Inc. • Assigned to: Sarah Jenkins</p>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/50">In Progress</span>
</div>
<div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-800">LED Desk Lamps</p>
<p className="text-xs text-gray-500 mt-1">TechStart Inc. • Assigned to: Mike Chen</p>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/50">In Progress</span>
</div>
</div>
</div>

<div>
<h3 className="text-base font-medium text-gray-800 mb-4">Quick Credit Management</h3>
<div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-6">
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-800 mb-1.5">Select Buyer</label>
<div className="relative">
<select className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 pr-10">
<option>Acme Corp (Current: 1,250)</option>
<option>TechStart Inc. (Current: 400)</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-800 mb-1.5">Amount</label>
<input className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="0" type="number"/>
</div>
<div className="flex gap-3 pt-2">
<button className="flex-1 h-10 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 transition-colors">Add Credits</button>
<button className="flex-1 h-10 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">Deduct Credits</button>
</div>
</div>
</div>
</div>
</div>

<div className="pt-12 pb-6 flex gap-6 items-start">
<div className="flex-1">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Modal: Assign Sourcer</h3>
<div className="w-full bg-white border border-gray-200 shadow-sm rounded-xl p-6 relative">
<h3 className="text-lg font-medium tracking-tight text-gray-800 mb-4">Assign Sourcer</h3>
<div className="space-y-4">
<p className="text-sm text-gray-500">Select an available sourcer for "Custom Aluminum Enclosures".</p>
<div className="space-y-2">
<label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
<input checked="" className="custom-checkbox rounded-full" name="sourcer" type="radio"/>
<div className="flex-1">
<p className="text-sm font-medium text-gray-800">Sarah Jenkins</p>
<p className="text-xs text-gray-500">Active requests: 4</p>
</div>
</label>
<label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
<input className="custom-checkbox rounded-full" name="sourcer" type="radio"/>
<div className="flex-1">
<p className="text-sm font-medium text-gray-800">Mike Chen</p>
<p className="text-xs text-gray-500">Active requests: 2</p>
</div>
</label>
</div>
<div className="flex justify-end gap-3 mt-4 pt-4 border-t border-gray-100">
<button className="h-9 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors" type="button">Cancel</button>
<button className="h-9 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 transition-colors" type="button">Confirm Assignment</button>
</div>
</div>
</div>
</div>
<div className="flex-1">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Modal: Reject</h3>
<div className="w-full bg-white border border-gray-200 shadow-sm rounded-xl p-6 relative">
<h3 className="text-lg font-medium tracking-tight text-gray-800 mb-4">Reject Request</h3>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-800 mb-1.5">Reason for rejection</label>
<textarea className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Provide a reason to the buyer..." rows="3"></textarea>
</div>
<div className="flex justify-end gap-3 mt-4 pt-4 border-t border-gray-100">
<button className="h-9 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors" type="button">Cancel</button>
<button className="h-9 px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-xl hover:bg-red-700 transition-colors" type="button">Confirm Rejection</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</section>

<section className="w-full h-screen flex bg-white border-b-8 border-gray-100 relative overflow-hidden">

<aside className="w-[240px] flex-shrink-0 border-r border-gray-200 bg-white flex flex-col hidden md:flex h-full">
<div className="h-[64px] flex items-center px-6 border-b border-gray-200">
<iconify-icon className="text-gray-800 text-lg mr-2" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-medium tracking-tight">Sourcer</span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium bg-gray-50 text-gray-800" href="#">
<iconify-icon className="text-lg" icon="solar:inbox-in-linear" strokeWidth="1.5"></iconify-icon> Assigned Requests
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Completed Requests
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors mt-8" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon> Messages
                </a>
</nav>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-sm font-medium text-purple-700">SJ</div>
<div>
<p className="text-sm font-medium text-gray-800">Sarah Jenkins</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-[64px] flex-shrink-0 border-b border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6 z-10 sticky top-0">
<h2 className="text-lg font-medium tracking-tight text-gray-800">Sourcer Dashboard</h2>
</header>

<div className="flex-1 overflow-y-auto p-6">
<div className="max-w-6xl mx-auto space-y-6">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-1 space-y-6">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
<h3 className="text-sm font-medium text-gray-800">Active Assignments</h3>
</div>
<div className="divide-y divide-gray-100">
<div className="p-4 bg-blue-50/50 cursor-pointer border-l-2 border-blue-600">
<p className="text-sm font-medium text-gray-800">Ergonomic Office Chairs</p>
<p className="text-xs text-gray-500 mt-1">TechStart Inc.</p>
</div>
<div className="p-4 hover:bg-gray-50 cursor-pointer border-l-2 border-transparent">
<p className="text-sm font-medium text-gray-800">Corporate Lanyards</p>
<p className="text-xs text-gray-500 mt-1">Acme Corp</p>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm">
<h3 className="text-base font-medium text-gray-800 mb-4">Request Details</h3>
<div className="space-y-4">
<div>
<span className="block text-xs text-gray-500 mb-1">Product</span>
<span className="block text-sm font-medium text-gray-800">Ergonomic Office Chairs</span>
</div>
<div>
<span className="block text-xs text-gray-500 mb-1">Target Specs</span>
<span className="block text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-200">Mesh back, adjustable armrests, lumbar support. Need BIFMA certification.</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-3 rounded-lg border border-gray-200">
<span className="block text-xs text-gray-500 mb-1">Target Price</span>
<span className="block text-sm font-medium text-gray-800">$45.00</span>
</div>
<div className="bg-white p-3 rounded-lg border border-gray-200">
<span className="block text-xs text-gray-500 mb-1">Quantity</span>
<span className="block text-sm font-medium text-gray-800">500</span>
</div>
</div>
<div>
<span className="block text-xs text-gray-500 mb-2">Reference Images</span>
<div className="flex gap-2">
<div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
<iconify-icon className="text-xl" icon="solar:gallery-linear"></iconify-icon>
</div>
<div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
<iconify-icon className="text-xl" icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-2">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-medium text-gray-800">Sourced Suppliers (2)</h3>
<div className="flex gap-2">
<button className="h-9 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">Mark Completed</button>
<button className="h-9 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 transition-colors">
<iconify-icon className="text-lg" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon> Add Supplier
                                    </button>
</div>
</div>
<div className="space-y-4">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-4">
<div className="w-12 h-12 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-gray-800">Guangzhou Seating Co.</h4>
<div className="flex gap-3 text-xs text-gray-500 mt-1">
<span className="flex items-center gap-1"><iconify-icon icon="solar:letter-linear"></iconify-icon> contact@gzseating.com</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:phone-linear"></iconify-icon> +86 123 4567 8900</span>
</div>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</div>
<div className="grid grid-cols-3 gap-4 mb-4">
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<span className="block text-xs text-gray-500 mb-0.5">Quoted Price</span>
<span className="block text-sm font-medium text-gray-800">$42.50</span>
</div>
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<span className="block text-xs text-gray-500 mb-0.5">MOQ</span>
<span className="block text-sm font-medium text-gray-800">200 units</span>
</div>
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<span className="block text-xs text-gray-500 mb-0.5">Lead Time</span>
<span className="block text-sm font-medium text-gray-800">25 days</span>
</div>
</div>
<div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
<span className="font-medium text-gray-800">Sourcer Note:</span> Solid factory, BIFMA certified. Sent catalog, mesh quality is premium.
                                    </div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-4">
<div className="w-12 h-12 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-gray-800">Zhejiang Office Furniture</h4>
<div className="flex gap-3 text-xs text-gray-500 mt-1">
<span className="flex items-center gap-1"><iconify-icon icon="solar:letter-linear"></iconify-icon> sales@zjoffice.cn</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:phone-linear"></iconify-icon> +86 987 6543 2100</span>
</div>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600"><iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon></button>
</div>
<div className="grid grid-cols-3 gap-4 mb-4">
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<span className="block text-xs text-gray-500 mb-0.5">Quoted Price</span>
<span className="block text-sm font-medium text-gray-800">$39.00</span>
</div>
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<span className="block text-xs text-gray-500 mb-0.5">MOQ</span>
<span className="block text-sm font-medium text-gray-800">500 units</span>
</div>
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<span className="block text-xs text-gray-500 mb-0.5">Lead Time</span>
<span className="block text-sm font-medium text-gray-800">30 days</span>
</div>
</div>
<div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
<span className="font-medium text-gray-800">Sourcer Note:</span> Cheaper option but strictly adheres to 500 MOQ. Sample takes 7 days.
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</section>

<section className="w-full h-screen flex bg-white relative overflow-hidden">

<aside className="w-[240px] flex-shrink-0 border-r border-gray-200 bg-white flex flex-col hidden md:flex h-full">
<div className="h-[64px] flex items-center px-6 border-b border-gray-200">
<iconify-icon className="text-blue-600 text-lg mr-2" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-medium tracking-tight">Sourcing</span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon> Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon> My Requests
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium bg-gray-50 text-gray-800" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon> Messages
                </a>
</nav>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">JD</div>
<div>
<p className="text-sm font-medium text-gray-800">John Doe</p>
<p className="text-xs text-gray-500">Buyer</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-gray-50/50">

<header className="h-[64px] flex-shrink-0 border-b border-gray-200 bg-white/80 backdrop-blur-sm flex items-center px-6 z-10 sticky top-0">
<button className="mr-4 text-gray-500 hover:text-gray-800"><iconify-icon className="text-xl" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon></button>
<h2 className="text-lg font-medium tracking-tight text-gray-800">Supplier Conversation</h2>
</header>
<div className="flex-1 overflow-hidden flex flex-col max-w-4xl mx-auto w-full p-6 gap-4">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-center justify-between flex-shrink-0">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
<iconify-icon className="text-lg" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-800">Guangzhou Seating Co.</h3>
<p className="text-xs text-gray-500">Regarding: Ergonomic Office Chairs</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-gray-500">Quoted Price</p>
<p className="text-sm font-medium text-gray-800">$42.50 / unit</p>
</div>
</div>

<div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">

<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">
<div className="text-center">
<span className="text-xs font-medium text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">Today</span>
</div>

<div className="flex flex-col items-start max-w-lg">
<div className="flex items-baseline gap-2 mb-1 ml-1">
<span className="text-xs font-medium text-gray-600">Sarah Jenkins (Sourcer)</span>
<span className="text-xs text-gray-400">09:41 AM</span>
</div>
<div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 text-sm shadow-sm">
                                Hello! I've added Guangzhou Seating Co. as an option. They meet your target price and hold the required BIFMA certifications. Attached is their catalog. Let me know if you want to proceed with a sample.
                            </div>
</div>

<div className="flex flex-col items-end max-w-lg ml-auto">
<div className="flex items-baseline gap-2 mb-1 mr-1">
<span className="text-xs text-gray-400">10:15 AM</span>
<span className="text-xs font-medium text-gray-600">You</span>
</div>
<div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm shadow-sm">
                                Thanks Sarah! The specs look great. What are the available colors for the mesh back? Do they offer custom branding on the packaging?
                            </div>
</div>

<div className="flex flex-col items-start max-w-lg">
<div className="flex items-baseline gap-2 mb-1 ml-1">
<span className="text-xs font-medium text-gray-600">Sarah Jenkins (Sourcer)</span>
<span className="text-xs text-gray-400">11:02 AM</span>
</div>
<div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 text-sm shadow-sm">
                                I checked with the factory. Standard colors are Black, Grey, and Navy. Custom branding on boxes is included for orders over 500 units at no extra cost.
                            </div>
</div>
</div>

<div className="p-4 border-t border-gray-200 bg-white">
<div className="flex gap-2">
<button className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-gray-400 hover:text-gray-600 bg-gray-50 rounded-xl border border-gray-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:paperclip-linear"></iconify-icon>
</button>
<input className="flex-1 px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" placeholder="Type your message..." type="text"/>
<button className="px-4 py-2 flex-shrink-0 inline-flex items-center justify-center text-sm font-medium text-white bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 transition-colors">
                                Send <iconify-icon className="ml-2 text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>
</section>

    </>
  );
}
