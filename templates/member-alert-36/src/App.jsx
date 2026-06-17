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



        // Initialize Lucide icons
        lucide.createIcons();
    
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
      

<aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col hidden lg:flex">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight">FitPulse</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="layout-grid" strokeWidth="1.5"></i>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base bg-blue-600 text-white font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
                Members
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="calendar-check" strokeWidth="1.5"></i>
                Attendance
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="credit-card" strokeWidth="1.5"></i>
                Payments
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
                Notifications
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
                Messages
            </a>
</nav>

<div className="p-4 border-t border-gray-100 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="settings" strokeWidth="1.5"></i>
                Settings
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="log-out" strokeWidth="1.5"></i>
                Logout
            </a>
</div>
</aside>

<aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col hidden md:flex">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<a className="flex items-center gap-2 text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="chevron-left" strokeWidth="1.5"></i>
                Back to Members
            </a>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8">

<div>
<h3 className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Member Record</h3>
<h4 className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-4">Overview</h4>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i>
                        Profile
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="w-4 h-4" data-lucide="activity" strokeWidth="1.5"></i>
                        Activity
                    </a>
</div>
</div>

<div>
<h4 className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Membership</h4>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i>
                        Agreement
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="w-4 h-4" data-lucide="layers" strokeWidth="1.5"></i>
                        Services
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="w-4 h-4" data-lucide="credit-card" strokeWidth="1.5"></i>
                        Billing
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="w-4 h-4" data-lucide="dollar-sign" strokeWidth="1.5"></i>
                        Invoices
                    </a>
</div>
</div>

<div>
<h4 className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Engagement</h4>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
                        Events
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base bg-blue-600 text-white font-medium" href="#">
<i className="w-4 h-4" data-lucide="bell" strokeWidth="1.5"></i>
                        Alerts
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="w-4 h-4" data-lucide="sticky-note" strokeWidth="1.5"></i>
                        Notes
                    </a>
</div>
</div>

<div>
<h4 className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Admin</h4>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="w-4 h-4" data-lucide="history" strokeWidth="1.5"></i>
                        Check-in History
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="w-4 h-4" data-lucide="list" strokeWidth="1.5"></i>
                        Custom Fields
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<i className="w-4 h-4" data-lucide="folder" strokeWidth="1.5"></i>
                        Documents
                    </a>
</div>
</div>
</nav>
</aside>

<main className="flex-1 flex flex-col overflow-y-auto w-full">

<div className="p-6 lg:p-8 pb-4">
<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

<div className="flex items-center gap-5">
<div className="w-16 h-16 bg-blue-50 text-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-8 h-8" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">TEST KRISHNA</h1>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-gray-500 mb-2">
<span>Member ID • 0643826263</span>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium">BASIC</span>
<span className="inline-flex items-center px-2 py-1 rounded bg-red-50 text-red-700 text-xs font-medium">Inactive</span>
<span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-600 text-xs font-medium uppercase">3XS6IEQFNZJAX7R</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
<button className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
<i className="w-4 h-4 text-gray-500" data-lucide="settings" strokeWidth="1.5"></i>
                        Preferences
                    </button>
<button className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
<i className="w-4 h-4" data-lucide="list" strokeWidth="1.5"></i>
                        View Alerts
                    </button>
</div>
</div>
</div>

<div className="px-6 lg:px-8 pb-8 flex-1 max-w-5xl">
<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

<div className="px-6 py-5 border-b border-gray-200 flex items-center gap-3">
<i className="w-5 h-5 text-blue-600" data-lucide="bell-plus" strokeWidth="1.5"></i>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Create New Alert</h2>
</div>

<form className="p-6 sm:p-8 space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-8">

<div className="md:col-span-2">
<label className="block text-base font-medium text-gray-700 mb-2" htmlFor="alert-title">Alert Title</label>
<input className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2.5 px-3 border outline-none transition-colors" id="alert-title" name="alert-title" placeholder="e.g., Missing Payment Document" type="text"/>
</div>

<div className="md:col-span-2">
<label className="block text-base font-medium text-gray-700 mb-3">Priority Level</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none has-[:checked]:border-blue-600 has-[:checked]:ring-1 has-[:checked]:ring-blue-600 hover:bg-gray-50">
<input className="sr-only" name="priority" type="radio" value="info"/>
<span className="flex flex-1">
<span className="flex flex-col">
<span className="block text-base font-medium text-gray-900 flex items-center gap-2">
<i className="w-4 h-4 text-gray-500" data-lucide="info" strokeWidth="1.5"></i>
                                                Info
                                            </span>
<span className="mt-1 flex items-center text-base text-gray-500">General updates or notes.</span>
</span>
</span>
</label>

<label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none has-[:checked]:border-orange-500 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 hover:bg-gray-50">
<input className="sr-only" name="priority" type="radio" value="warning"/>
<span className="flex flex-1">
<span className="flex flex-col">
<span className="block text-base font-medium text-gray-900 flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="triangle-alert" strokeWidth="1.5"></i>
                                                Warning
                                            </span>
<span className="mt-1 flex items-center text-base text-gray-500">Needs attention soon.</span>
</span>
</span>
</label>

<label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none has-[:checked]:border-red-600 has-[:checked]:ring-1 has-[:checked]:ring-red-600 hover:bg-gray-50">
<input checked="" className="sr-only" name="priority" type="radio" value="critical"/>
<span className="flex flex-1">
<span className="flex flex-col">
<span className="block text-base font-medium text-gray-900 flex items-center gap-2">
<i className="w-4 h-4 text-red-600" data-lucide="octagon-alert" strokeWidth="1.5"></i>
                                                Critical
                                            </span>
<span className="mt-1 flex items-center text-base text-gray-500">Immediate action required.</span>
</span>
</span>
</label>
</div>
</div>

<div>
<label className="block text-base font-medium text-gray-700 mb-2" htmlFor="category">Category</label>
<div className="relative">
<select className="appearance-none block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2.5 pl-3 pr-10 border outline-none bg-white" id="category" name="category">
<option>Payment &amp; Billing</option>
<option>Attendance</option>
<option>Membership Contract</option>
<option>Health &amp; Safety</option>
<option>General Account</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div>
<label className="block text-base font-medium text-gray-700 mb-2" htmlFor="assignee">Assign To</label>
<div className="relative">
<select className="appearance-none block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2.5 pl-3 pr-10 border outline-none bg-white" id="assignee" name="assignee">
<option>Billing System (Auto)</option>
<option>Front Desk Team</option>
<option>Sarah Jenkins (Manager)</option>
<option>Unassigned</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="md:col-span-2">
<label className="block text-base font-medium text-gray-700 mb-2" htmlFor="description">Alert Details</label>
<textarea className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2.5 px-3 border outline-none transition-colors resize-y" id="description" name="description" placeholder="Provide full context and required actions..." rows="4"></textarea>
</div>

<div className="md:col-span-2 space-y-5 border-t border-gray-100 pt-6">

<div className="flex items-center justify-between">
<div>
<label className="text-base font-medium text-gray-900">Requires Action</label>
<p className="text-base text-gray-500">Flag this alert as needing specific resolution.</p>
</div>

<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-200 appearance-none cursor-pointer transition-all duration-300 z-10 top-0 left-0 m-0" id="toggle-action" name="toggle-action" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer transition-colors duration-300" htmlFor="toggle-action"></label>
</input></div>
</div>

<div className="flex items-center justify-between">
<div>
<label className="text-base font-medium text-gray-900">Notify Assignee</label>
<p className="text-base text-gray-500">Send an immediate email notification to the assigned user or team.</p>
</div>

<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-200 appearance-none cursor-pointer transition-all duration-300 z-10 top-0 left-0 m-0" id="toggle-notify" name="toggle-notify" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer transition-colors duration-300" htmlFor="toggle-notify"></label>
</input></div>
</div>
</div>
</div>

<div className="pt-6 border-t border-gray-200 flex items-center justify-end gap-3 mt-8">
<button className="px-5 py-2.5 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" type="button">
                            Cancel
                        </button>
<button className="px-5 py-2.5 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" type="submit">
                            Create Alert
                        </button>
</div>
</form>
</div>
</div>
</main>


    </>
  );
}
