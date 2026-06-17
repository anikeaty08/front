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
      
<div className="container mx-auto px-4 py-6">

<div className="mb-6">
<h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
<p className="text-gray-600">Manage and filter all your audit tasks</p>
</div>

<div className="bg-white rounded-xl shadow-sm">

<div className="border-b border-gray-200">
<div className="flex flex-col md:flex-row items-stretch md:items-center justify-between p-4 space-y-4 md:space-y-0">

<div className="relative w-full md:w-64">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<input className="pl-10 w-full h-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search tasks..." type="text"/>
</div>

<div className="flex items-center space-x-2">
<button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
<svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Filter</span>
</button>
<button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
<svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Sort</span>
</button>
<button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
<svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Export</span>
</button>
<button className="flex items-center px-3 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>New Task</span>
</button>
</div>
</div>

<div className="p-4 bg-gray-50 border-t border-gray-200">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">All</button>
<button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">To Do</button>
<button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">In Progress</button>
<button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Review</button>
<button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Completed</button>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
<div className="relative">
<select className="w-full h-9 pl-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
<option value="">Any Priority</option>
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
<div className="relative">
<select className="w-full h-9 pl-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
<option value="">All Categories</option>
<option value="SEO">SEO</option>
<option value="Performance">Performance</option>
<option value="Content">Content</option>
<option value="Accessibility">Accessibility</option>
<option value="Security">Security</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
<div className="relative">
<select className="w-full h-9 pl-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
<option value="">All Websites</option>
<option value="example.com">example.com</option>
<option value="myshop.io">myshop.io</option>
<option value="widgetco.com">widgetco.com</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
<div className="relative">
<select className="w-full h-9 pl-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
<option value="">Anyone</option>
<option value="prince">Prince Reuben</option>
<option value="john">John Doe</option>
<option value="jane">Jane Smith</option>
<option value="unassigned">Unassigned</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
<div className="relative">
<select className="w-full h-9 pl-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
<option value="">Any Time</option>
<option value="today">Today</option>
<option value="this-week">This Week</option>
<option value="next-week">Next Week</option>
<option value="this-month">This Month</option>
<option value="overdue">Overdue</option>
<option value="custom">Custom Range...</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4">
<label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
<div className="flex flex-wrap gap-2">
<div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
<span>SEO</span>
<button className="ml-1.5 text-gray-500 hover:text-gray-700">×</button>
</div>
<div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
<span>Bug Fix</span>
<button className="ml-1.5 text-gray-500 hover:text-gray-700">×</button>
</div>
<div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
<span>Critical</span>
<button className="ml-1.5 text-gray-500 hover:text-gray-700">×</button>
</div>
<button className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-600 border border-blue-300 rounded-full hover:bg-blue-50">
                + Add Tag
              </button>
</div>
</div>

<div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
<div className="flex items-center space-x-2">
<span className="text-sm text-gray-600">Active Filters:</span>
<div className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                Status: To Do
                <button className="ml-1 text-blue-600">×</button>
</div>
<div className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                Priority: High
                <button className="ml-1 text-blue-600">×</button>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="text-sm text-gray-500 hover:text-gray-700">Clear All</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Apply Filters
              </button>
</div>
</div>
</div>
</div>

<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
<div className="flex items-center">
<input className="h-4 w-4 text-blue-600 border-gray-300 rounded" type="checkbox"/>
<span className="ml-3">Task</span>
</div>
</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                Status
              </th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                Priority
              </th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                Category
              </th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                Assigned To
              </th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                Due Date
              </th>
<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                Actions
              </th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">

<tr className="hover:bg-gray-50">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<input className="h-4 w-4 text-blue-600 border-gray-300 rounded" type="checkbox"/>
<div className="ml-3">
<div className="text-sm font-medium text-gray-900">Fix meta description on homepage</div>
<div className="text-xs text-gray-500">example.com</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  In Progress
                </span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  High
                </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                SEO
              </td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
<img alt="Profile" src="https://via.placeholder.com/40"/>
</div>
<div className="ml-2">
<div className="text-sm font-medium text-gray-900">Prince Reuben</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Jul 28, 2023
              </td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<button className="text-blue-600 hover:text-blue-900">Edit</button>
</td>
</tr>

</tbody>
</table>
</div>

<div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
<div>
<p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">45</span> results
            </p>
</div>
<div>
<nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
<a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
<span className="sr-only">Previous</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100" href="#">
                1
              </a>
<a className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
                2
              </a>
<a className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
                3
              </a>
<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
<a className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
                5
              </a>
<a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
<span className="sr-only">Next</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
</svg>
</a>
</nav>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
