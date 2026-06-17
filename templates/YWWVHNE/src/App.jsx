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
      

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a className="flex items-center space-x-2 group" href="#dashboard">
<div className="h-8 w-8 rounded-md bg-gray-900 text-white flex items-center justify-center shadow-sm">
<span className="text-sm font-semibold tracking-tight">CA</span>
</div>
<span className="text-base font-semibold tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors">CallAI</span>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors" data-link="dashboard" href="#dashboard">Dashboard</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors" data-link="leads" href="#leads">Leads</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors" data-link="campaigns" href="#campaigns">Campaigns</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors" data-link="reports" href="#reports">Reports</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors" data-link="settings" href="#settings">Settings</a>
</nav>

<div className="flex items-center gap-2">

<details className="relative md:hidden">
<summary aria-label="Open menu" className="list-none rounded-md p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-center">
<i className="w-5 h-5 text-gray-700" data-lucide="menu"></i>
</summary>
<div className="absolute right-0 mt-2 w-64 rounded-lg bg-white shadow-lg ring-1 ring-gray-200 p-2">
<div className="grid">
<a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="#dashboard">Dashboard</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="#leads">Leads</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="#campaigns">Campaigns</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="#reports">Reports</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="#settings">Settings</a>
</div>
<div className="my-2 border-t border-gray-200"></div>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="#profile">
<i className="w-4 h-4" data-lucide="user"></i>
                Profile
              </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" href="#billing">
<i className="w-4 h-4" data-lucide="credit-card"></i>
                Billing
              </a>
</div>
</details>

<details className="relative">
<summary className="list-none flex items-center gap-3 cursor-pointer px-2 py-1.5 rounded-md hover:bg-gray-100 transition-colors">
<div className="h-8 w-8 rounded-full bg-gray-200 ring-1 ring-gray-300 overflow-hidden">
<img alt="User" className="h-8 w-8 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="hidden sm:flex flex-col leading-tight">
<span className="text-sm font-medium text-gray-900">Alex Morgan</span>
<span className="text-xs text-gray-500">Admin</span>
</div>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-down"></i>
</summary>
<div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-gray-200 overflow-hidden">
<div className="p-2">
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900" href="#profile">
<i className="w-4 h-4" data-lucide="user"></i>
                  Profile
                </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900" href="#settings">
<i className="w-4 h-4" data-lucide="settings"></i>
                  Preferences
                </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900" href="#billing">
<i className="w-4 h-4" data-lucide="credit-card"></i>
                  Billing
                </a>
</div>
<div className="border-t border-gray-200"></div>
<button className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50">
<i className="w-4 h-4" data-lucide="log-out"></i>
                Sign out
              </button>
</div>
</details>
</div>
</div>
</div>
</header>
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

<div className="space-y-8" data-route="" id="page-dashboard">

<section className="mb-8">
<div className="relative overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm">
<div className="p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
<div className="flex-1">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">AI That Schedules Calls For You</h1>
<p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
                Upload leads, and let AI call them like a real human to set up appointments.
              </p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2.5 text-sm font-medium hover:bg-blue-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 shadow-sm" href="#campaigns">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Create Campaign
                </a>
<button className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2.5 text-sm font-medium ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300" id="openAddLeadFromHero">
<i className="w-4 h-4" data-lucide="upload"></i>
                  Add Leads
                </button>
</div>
</div>
<div className="w-full md:w-80 lg:w-96">
<div className="rounded-lg ring-1 ring-gray-200 bg-gray-50 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center ring-1 ring-blue-200">
<i className="w-5 h-5" data-lucide="phone-call"></i>
</div>
<div className="flex-1">
<p className="text-sm text-gray-600">Today’s preview</p>
<p className="text-base font-medium text-gray-900">42 calls in queue</p>
</div>
</div>
<div className="mt-4 grid grid-cols-3 divide-x divide-gray-200 rounded-md overflow-hidden ring-1 ring-gray-200 bg-white">
<div className="p-3">
<p className="text-xs text-gray-500">Connected</p>
<p className="text-lg font-semibold text-gray-900">19</p>
</div>
<div className="p-3">
<p className="text-xs text-gray-500">Voicemail</p>
<p className="text-lg font-semibold text-gray-900">14</p>
</div>
<div className="p-3">
<p className="text-xs text-gray-500">Scheduled</p>
<p className="text-lg font-semibold text-emerald-600">9</p>
</div>
</div>
<p className="mt-3 text-xs text-gray-500">Auto-dialing pauses during quiet hours and respects local timezones.</p>
</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-blue-600/0"></div>
</div>
</section>

<section className="mb-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group rounded-xl bg-white ring-1 ring-gray-200 shadow-sm p-4 hover:shadow transition-shadow">
<div className="flex items-center justify-between">
<p className="text-sm text-gray-500">Total Leads Added</p>
<span className="h-8 w-8 rounded-md bg-gray-50 ring-1 ring-gray-200 text-gray-700 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<i className="w-4 h-4" data-lucide="users"></i>
</span>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">12,483</p>
<p className="mt-1 text-xs text-gray-500">+321 this week</p>
</div>

<div className="group rounded-xl bg-white ring-1 ring-gray-200 shadow-sm p-4 hover:shadow transition-shadow">
<div className="flex items-center justify-between">
<p className="text-sm text-gray-500">Calls Made Today</p>
<span className="h-8 w-8 rounded-md bg-blue-50 ring-1 ring-blue-200 text-blue-700 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
<i className="w-4 h-4" data-lucide="phone"></i>
</span>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">97</p>
<p className="mt-1 text-xs text-gray-500">Active 4 campaigns</p>
</div>

<div className="group rounded-xl bg-white ring-1 ring-gray-200 shadow-sm p-4 hover:shadow transition-shadow">
<div className="flex items-center justify-between">
<p className="text-sm text-gray-500">Appointments Scheduled</p>
<span className="h-8 w-8 rounded-md bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
<i className="w-4 h-4" data-lucide="calendar-check"></i>
</span>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">28</p>
<p className="mt-1 text-xs text-gray-500">Today</p>
</div>

<div className="group rounded-xl bg-white ring-1 ring-gray-200 shadow-sm p-4 hover:shadow transition-shadow">
<div className="flex items-center justify-between">
<p className="text-sm text-gray-500">Success Rate</p>
<span className="h-8 w-8 rounded-md bg-gray-50 ring-1 ring-gray-200 text-gray-700 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</span>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">38%</p>
<p className="mt-1 text-xs text-gray-500">Last 24 hours</p>
</div>
</div>
</section>

<section className="mb-8">
<div className="rounded-xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Recent Leads</h2>
<p className="text-sm text-gray-600">Preview of your latest uploads and outcomes</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-3 py-2 text-sm font-medium ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400">
<i className="w-4 h-4" data-lucide="list-filter"></i>
                Filters
              </button>
<button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800">
<i className="w-4 h-4" data-lucide="download"></i>
                Export
              </button>
</div>
</div>
<div className="border-t border-gray-200"></div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Name</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Property</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Cost</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Phone</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Next Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr className="hover:bg-gray-50">
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<p className="text-sm font-medium text-gray-900">Jordan Lee</p>
<p className="text-xs text-gray-500">jordan@example.com</p>
</div>
</div>
</td>
<td className="px-6 py-3">
<p className="text-sm text-gray-900">Maple St, Unit 4B</p>
<p className="text-xs text-gray-500">Austin, TX</p>
</td>
<td className="px-6 py-3 text-sm text-gray-900">$320</td>
<td className="px-6 py-3 text-sm text-gray-900">(512) 555-0198</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1 ring-1 ring-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i>
                      Scheduled
                    </span>
</td>
<td className="px-6 py-3">
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800">
<i className="w-4 h-4" data-lucide="calendar"></i>
                      View
                    </button>
</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<p className="text-sm font-medium text-gray-900">Taylor Kim</p>
<p className="text-xs text-gray-500">taylor@company.com</p>
</div>
</div>
</td>
<td className="px-6 py-3">
<p className="text-sm text-gray-900">Cedar Ave, 102</p>
<p className="text-xs text-gray-500">Denver, CO</p>
</td>
<td className="px-6 py-3 text-sm text-gray-900">$280</td>
<td className="px-6 py-3 text-sm text-gray-900">(303) 555-0149</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-yellow-50 text-yellow-700 text-xs font-medium px-2 py-1 ring-1 ring-yellow-200">
<i className="w-3.5 h-3.5" data-lucide="phone-missed"></i>
                      No Answer
                    </span>
</td>
<td className="px-6 py-3">
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900">
<i className="w-4 h-4" data-lucide="clock"></i>
                      Reschedule
                    </button>
</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<p className="text-sm font-medium text-gray-900">Priya Nair</p>
<p className="text-xs text-gray-500">priya@homes.io</p>
</div>
</div>
</td>
<td className="px-6 py-3">
<p className="text-sm text-gray-900">Oak Dr, 55</p>
<p className="text-xs text-gray-500">San Jose, CA</p>
</td>
<td className="px-6 py-3 text-sm text-gray-900">$350</td>
<td className="px-6 py-3 text-sm text-gray-900">(669) 555-0132</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 ring-1 ring-blue-200">
<i className="w-3.5 h-3.5" data-lucide="loader"></i>
                      In Progress
                    </span>
</td>
<td className="px-6 py-3">
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800">
<i className="w-4 h-4" data-lucide="eye"></i>
                      View
                    </button>
</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<p className="text-sm font-medium text-gray-900">Chris Parker</p>
<p className="text-xs text-gray-500">chris@realestate.com</p>
</div>
</div>
</td>
<td className="px-6 py-3">
<p className="text-sm text-gray-900">Pine St, 8A</p>
<p className="text-xs text-gray-500">Nashville, TN</p>
</td>
<td className="px-6 py-3 text-sm text-gray-900">$305</td>
<td className="px-6 py-3 text-sm text-gray-900">(615) 555-0117</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-rose-50 text-rose-700 text-xs font-medium px-2 py-1 ring-1 ring-rose-200">
<i className="w-3.5 h-3.5" data-lucide="x-circle"></i>
                      Do Not Call
                    </span>
</td>
<td className="px-6 py-3">
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900">
<i className="w-4 h-4" data-lucide="slash"></i>
                      Archive
                    </button>
</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<p className="text-sm font-medium text-gray-900">Amelia Chen</p>
<p className="text-xs text-gray-500">amelia@listing.co</p>
</div>
</div>
</td>
<td className="px-6 py-3">
<p className="text-sm text-gray-900">Birch Ln, 12</p>
<p className="text-xs text-gray-500">Seattle, WA</p>
</td>
<td className="px-6 py-3 text-sm text-gray-900">$290</td>
<td className="px-6 py-3 text-sm text-gray-900">(206) 555-0181</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1 ring-1 ring-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i>
                      Scheduled
                    </span>
</td>
<td className="px-6 py-3">
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800">
<i className="w-4 h-4" data-lucide="calendar"></i>
                      View
                    </button>
</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<p className="text-sm font-medium text-gray-900">Ravi Singh</p>
<p className="text-xs text-gray-500">ravi@properties.io</p>
</div>
</div>
</td>
<td className="px-6 py-3">
<p className="text-sm text-gray-900">Elm St, 77</p>
<p className="text-xs text-gray-500">Chicago, IL</p>
</td>
<td className="px-6 py-3 text-sm text-gray-900">$315</td>
<td className="px-6 py-3 text-sm text-gray-900">(312) 555-0106</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 ring-1 ring-blue-200">
<i className="w-3.5 h-3.5" data-lucide="loader"></i>
                      In Progress
                    </span>
</td>
<td className="px-6 py-3">
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900">
<i className="w-4 h-4" data-lucide="clock"></i>
                      Reschedule
                    </button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 bg-gray-50 flex items-center justify-between">
<p className="text-xs text-gray-500">Showing 6 of 2,140</p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900" href="#leads">
              View all leads
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="mb-8">
<div className="rounded-xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Campaign Activity</h2>
<p className="text-sm text-gray-600">Monitor how your campaigns are performing</p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-3 py-2 text-sm font-medium ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400" href="#campaigns">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                New Campaign
              </a>
<a className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800" href="#reports">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i>
                View Reports
              </a>
</div>
</div>
<div className="border-t border-gray-200"></div>
<ul className="divide-y divide-gray-200">
<li className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-blue-50 text-blue-700 ring-1 ring-blue-200 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="target"></i>
</span>
<div>
<p className="text-sm font-medium text-gray-900">Campaign #12</p>
<p className="text-xs text-gray-500">120 calls, 30 appointments booked</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1 ring-1 ring-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
                  Completed
                </span>
<button className="p-2 rounded-md hover:bg-gray-100">
<i className="w-4 h-4 text-gray-600" data-lucide="more-vertical"></i>
</button>
</div>
</li>
<li className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-blue-50 text-blue-700 ring-1 ring-blue-200 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="waves"></i>
</span>
<div>
<p className="text-sm font-medium text-gray-900">Campaign #13</p>
<p className="text-xs text-gray-500">In progress, 54 calls made</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 ring-1 ring-blue-200">
<i className="w-3.5 h-3.5" data-lucide="loader-2"></i>
                  Running
                </span>
<button className="p-2 rounded-md hover:bg-gray-100">
<i className="w-4 h-4 text-gray-600" data-lucide="more-vertical"></i>
</button>
</div>
</li>
<li className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-gray-50 text-gray-600 ring-1 ring-gray-200 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="pause-circle"></i>
</span>
<div>
<p className="text-sm font-medium text-gray-900">Campaign #11</p>
<p className="text-xs text-gray-500">Paused, 88 calls made</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 ring-1 ring-gray-200">
<i className="w-3.5 h-3.5" data-lucide="pause"></i>
                  Paused
                </span>
<button className="p-2 rounded-md hover:bg-gray-100">
<i className="w-4 h-4 text-gray-600" data-lucide="more-vertical"></i>
</button>
</div>
</li>
</ul>
<div className="px-6 py-3 bg-gray-50">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900" href="#campaigns">
              Manage campaigns
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="mb-16">
<div className="rounded-xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden">
<div className="px-6 py-6 sm:px-8">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">How It Works</h3>
<p className="text-sm text-gray-600">Three simple steps to start booking more appointments</p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="group rounded-lg ring-1 ring-gray-200 p-4 hover:shadow-sm transition">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-gray-50 ring-1 ring-gray-200 text-gray-700 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="upload-cloud"></i>
</span>
<div>
<p className="text-sm font-medium text-gray-900">Upload your leads</p>
<p className="mt-1 text-sm text-gray-600">
                      Import a CSV, connect your CRM, or paste from a spreadsheet. We validate numbers, deduplicate, and enrich automatically.
                    </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-gray-200">CSV</span>
<span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-gray-200">CRM</span>
<span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-gray-200">Sheets</span>
</div>
</div>
</div>
</div>
<div className="group rounded-lg ring-1 ring-gray-200 p-4 hover:shadow-sm transition">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-blue-50 ring-1 ring-blue-200 text-blue-700 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="message-square-text"></i>
</span>
<div>
<p className="text-sm font-medium text-gray-900">Customize voice and script</p>
<p className="mt-1 text-sm text-gray-600">
                      Pick a natural voice, tone, and languages. Add your qualifying questions and fallback responses with smart branching.
                    </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-blue-200">Voice</span>
<span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-blue-200">Language</span>
<span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-blue-200">Compliance</span>
</div>
</div>
</div>
</div>
<div className="group rounded-lg ring-1 ring-emerald-200 p-4 hover:shadow-sm transition bg-white">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="phone-outgoing"></i>
</span>
<div>
<p className="text-sm font-medium text-gray-900">Launch and-schedule</p>
<p className="mt-1 text-sm text-gray-600">
                      Start calling with smart retries and timezone rules. The AI books calendar slots, sends confirmations, and logs outcomes.
                    </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">Timezone aware</span>
<span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">Smart retries</span>
<span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">Calendar sync</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 border-t border-gray-200 pt-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-gray-50 ring-1 ring-gray-200 text-gray-700 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="life-buoy"></i>
</span>
<div>
<p className="text-sm font-medium text-gray-900">Need a hand getting set up?</p>
<p className="mt-1 text-sm text-gray-600">
                      Our team offers live onboarding and best practices. Average response time: under 1 hour during business days.
                    </p>
<div className="mt-2 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        All systems normal
                      </span>
<span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                        Mon–Fri 8am–6pm
                      </span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-3 py-2 text-sm font-medium ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400" href="#reports">
<i className="w-4 h-4" data-lucide="book-open-text"></i>
                    Read Docs
                  </a>
<a className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800" href="#settings">
<i className="w-4 h-4" data-lucide="mail"></i>
                    Contact Support
                  </a>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden space-y-6" data-route="" id="page-leads">
<section>
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Leads</h1>
<p className="text-sm text-gray-600">Manage and track your leads</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2.5 text-sm font-medium hover:bg-blue-700 shadow-sm" id="openAddLead">
<i className="w-4 h-4" data-lucide="user-plus"></i>
              Add Lead
            </button>
<button className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-3 py-2 text-sm font-medium ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400">
<i className="w-4 h-4" data-lucide="upload"></i>
              Import CSV
            </button>
</div>
</div>
</section>

<section className="rounded-xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-gray-900">All Leads</h2>
<p className="text-sm text-gray-600">Your lead database</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-3 py-2 text-sm font-medium ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400">
<i className="w-4 h-4" data-lucide="list-filter"></i>
              Filters
            </button>
<button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800">
<i className="w-4 h-4" data-lucide="download"></i>
              Export
            </button>
</div>
</div>
<div className="border-t border-gray-200"></div>
<div className="overflow-x-auto">

<table className="w-full text-left">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Name</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Email</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Phone</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Type</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Lead</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr className="hover:bg-gray-50">
<td className="px-6 py-3 text-sm text-gray-900">Jordan Lee</td>
<td className="px-6 py-3 text-sm text-gray-600">jordan@example.com</td>
<td className="px-6 py-3 text-sm text-gray-900">(512) 555-0198</td>
<td className="px-6 py-3 text-sm text-gray-900">Seller</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1 ring-1 ring-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="flame"></i>
                    Hot
                  </span>
</td>
<td className="px-6 py-3">
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800">
<i className="w-4 h-4" data-lucide="eye"></i>
                    View
                  </button>
</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-3 text-sm text-gray-900">Priya Nair</td>
<td className="px-6 py-3 text-sm text-gray-600">priya@homes.io</td>
<td className="px-6 py-3 text-sm text-gray-900">(669) 555-0132</td>
<td className="px-6 py-3 text-sm text-gray-900">Buyer</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 rounded-md bg-yellow-50 text-yellow-700 text-xs font-medium px-2 py-1 ring-1 ring-yellow-200">
<i className="w-3.5 h-3.5" data-lucide="sun"></i>
                    Warm
                  </span>
</td>
<td className="px-6 py-3">
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
                    More
                  </button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 bg-gray-50 flex items-center justify-between">
<p className="text-xs text-gray-500">Showing 2 of 2,140</p>
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800" id="openAddLeadFooter">
            Add new
            <i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</section>
</div>

<div className="hidden space-y-6" data-route="" id="page-campaigns">
<section>
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Campaigns</h1>
<p className="text-sm text-gray-600">Create, monitor and optimize outbound calling campaigns</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2.5 text-sm font-medium hover:bg-blue-700 shadow-sm">
<i className="w-4 h-4" data-lucide="play-circle"></i>
              New Campaign
            </button>
</div>
</div>
</section>
<section className="rounded-xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden">
<div className="px-6 py-4">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Active Campaigns</h2>
<p className="text-sm text-gray-600">Overview of live and queued campaigns</p>
</div>
<div className="border-t border-gray-200"></div>
<ul className="divide-y divide-gray-200">
<li className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-blue-50 text-blue-700 ring-1 ring-blue-200 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="radio"></i>
</span>
<div>
<p className="text-sm font-medium text-gray-900">Spring Seller Outreach</p>
<p className="text-xs text-gray-500">1,200 leads • 420 connected • 98 scheduled</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 ring-1 ring-blue-200">
<i className="w-3.5 h-3.5 animate-spin" data-lucide="loader-2"></i>
                Running
              </span>
<button className="p-2 rounded-md hover:bg-gray-100">
<i className="w-4 h-4 text-gray-600" data-lucide="more-vertical"></i>
</button>
</div>
</li>
<li className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-gray-50 text-gray-700 ring-1 ring-gray-200 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="pause-circle"></i>
</span>
<div>
<p className="text-sm font-medium text-gray-900">Investor Follow-up</p>
<p className="text-xs text-gray-500">340 leads • 110 connected • 34 scheduled</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 ring-1 ring-gray-200">
<i className="w-3.5 h-3.5" data-lucide="pause"></i>
                Paused
              </span>
<button className="p-2 rounded-md hover:bg-gray-100">
<i className="w-4 h-4 text-gray-600" data-lucide="more-vertical"></i>
</button>
</div>
</li>
</ul>
</section>
</div>

<div className="hidden space-y-6" data-route="" id="page-reports">
<section>
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Reports</h1>
<p className="text-sm text-gray-600">Analyze performance and outcomes</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-3 py-2 text-sm font-medium ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Last 30 days
            </button>
<button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800">
<i className="w-4 h-4" data-lucide="download"></i>
              Export
            </button>
</div>
</div>
</section>
<section className="rounded-xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden">
<div className="px-6 py-8 text-center">
<div className="mx-auto h-12 w-12 rounded-full bg-gray-50 ring-1 ring-gray-200 flex items-center justify-center">
<i className="w-5 h-5 text-gray-600" data-lucide="bar-chart-3"></i>
</div>
<h2 className="mt-3 text-lg font-semibold tracking-tight text-gray-900">No reports yet</h2>
<p className="mt-1 text-sm text-gray-600">Run a campaign to see detailed analytics.</p>
</div>
</section>
</div>

<div className="hidden space-y-6" data-route="" id="page-settings">
<section>
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Settings</h1>
<p className="text-sm text-gray-600">Manage preferences and account configuration</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800">
<i className="w-4 h-4" data-lucide="save"></i>
              Save
            </button>
</div>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-xl bg-white ring-1 ring-gray-200 shadow-sm">
<div className="px-6 py-4 border-b border-gray-200">
<h2 className="text-base font-semibold tracking-tight text-gray-900">Notifications</h2>
<p className="text-sm text-gray-600">Choose how you want to be notified</p>
</div>
<div className="px-6 py-6 space-y-4">
<label className="flex items-center justify-between rounded-lg ring-1 ring-gray-200 px-4 py-3 bg-gray-50">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="mail"></i>
<span className="text-sm text-gray-900">Email notifications</span>
</div>
<input className="h-4 w-7 appearance-none rounded-full bg-gray-200 relative cursor-pointer outline-none transition-colors peer" type="checkbox"/>
</label>
<label className="flex items-center justify-between rounded-lg ring-1 ring-gray-200 px-4 py-3 bg-gray-50">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="phone"></i>
<span className="text-sm text-gray-900">SMS notifications</span>
</div>
<input className="h-4 w-7 appearance-none rounded-full bg-gray-200 relative cursor-pointer outline-none transition-colors peer" type="checkbox"/>
</label>
</div>
</div>
<div className="rounded-xl bg-white ring-1 ring-gray-200 shadow-sm">
<div className="px-6 py-4 border-b border-gray-200">
<h2 className="text-base font-semibold tracking-tight text-gray-900">Security</h2>
<p className="text-sm text-gray-600">Keep your account protected</p>
</div>
<div className="px-6 py-6 space-y-4">
<button className="w-full inline-flex items-center justify-between rounded-md ring-1 ring-gray-200 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50">
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="key-round"></i>
                Change password
              </span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-right"></i>
</button>
<button className="w-full inline-flex items-center justify-between rounded-md ring-1 ring-gray-200 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50">
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                Two-factor authentication
              </span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>
</div>

<div className="hidden space-y-6" data-route="" id="page-profile">
<section>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="Profile" className="h-14 w-14 rounded-full ring-1 ring-gray-200 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Profile</h1>
<p className="text-sm text-gray-600">Manage your personal information</p>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800">
<i className="w-4 h-4" data-lucide="save"></i>
            Save
          </button>
</div>
</section>
<section className="rounded-xl bg-white ring-1 ring-gray-200 shadow-sm">
<div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-gray-700 mb-1">Full name</label>
<input className="w-full rounded-md ring-1 ring-gray-300 px-3 py-2 text-sm bg-white focus:ring-gray-400 outline-none" placeholder="Alex Morgan" type="text" />
</input></div>
<div>
<label className="block text-sm text-gray-700 mb-1">Email</label>
<input className="w-full rounded-md ring-1 ring-gray-300 px-3 py-2 text-sm bg-white focus:ring-gray-400 outline-none" placeholder="alex@company.com" type="email" />
</input></div>
<div>
<label className="block text-sm text-gray-700 mb-1">Role</label>
<input className="w-full rounded-md ring-1 ring-gray-300 px-3 py-2 text-sm bg-white focus:ring-gray-400 outline-none" placeholder="Admin" type="text"/>
</div>
<div>
<label className="block text-sm text-gray-700 mb-1">Phone</label>
<input className="w-full rounded-md ring-1 ring-gray-300 px-3 py-2 text-sm bg-white focus:ring-gray-400 outline-none" placeholder="(555) 555-5555" type="tel"/>
</div>
</div>
</section>
</div>

<div className="hidden space-y-6" data-route="" id="page-billing">
<section>
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Billing</h1>
<p className="text-sm text-gray-600">Manage plan and payment methods</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800">
<i className="w-4 h-4" data-lucide="file-text"></i>
            Download invoice
          </button>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-xl bg-white ring-1 ring-gray-200 shadow-sm lg:col-span-2">
<div className="px-6 py-4 border-b border-gray-200">
<h2 className="text-base font-semibold tracking-tight text-gray-900">Current Plan</h2>
<p className="text-sm text-gray-600">Pro — $49/month</p>
</div>
<div className="px-6 py-6">
<button className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-3 py-2 text-sm font-medium ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
              Upgrade plan
            </button>
</div>
</div>
<div className="rounded-xl bg-white ring-1 ring-gray-200 shadow-sm">
<div className="px-6 py-4 border-b border-gray-200">
<h2 className="text-base font-semibold tracking-tight text-gray-900">Payment Method</h2>
<p className="text-sm text-gray-600">Visa ending in 4242</p>
</div>
<div className="px-6 py-6">
<button className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-3 py-2 text-sm font-medium ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400">
<i className="w-4 h-4" data-lucide="credit-card"></i>
              Update card
            </button>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-gray-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
</div></footer>
    </>
  );
}
