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
      

<div className="bg-white rounded-xl shadow-lg w-full max-w-2xl">

<div className="border-b px-6 py-4 flex items-center justify-between">
<h2 className="text-xl font-bold text-gray-900">Add New Task</h2>
<button className="text-gray-400 hover:text-gray-600">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="p-6">
<form>

<div className="space-y-4 mb-8">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Task Details</h3>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="task-name">Task Name</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="task-name" name="task-name" placeholder="Enter task name..." type="text" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="task-description">Description</label>
<textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="task-description" name="task-description" placeholder="Enter task details..." rows="3"></textarea>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="website">Website</label>
<div className="relative">
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none" id="website" name="website">
<option disabled selected value="">Select website</option>
<option value="example.com">example.com</option>
<option value="myshop.io">myshop.io</option>
<option value="widgetco.com">widgetco.com</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="category">Category</label>
<div className="relative">
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none" id="category" name="category">
<option disabled selected value="">Select category</option>
<option value="SEO">SEO</option>
<option value="Performance">Performance</option>
<option value="Content">Content</option>
<option value="Accessibility">Accessibility</option>
<option value="Security">Security</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4 mb-8">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Scheduling</h3>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="priority">Priority</label>
<div className="relative">
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none" id="priority" name="priority">
<option disabled selected value="">Select priority</option>
<option className="text-red-600" value="high">High</option>
<option className="text-yellow-600" value="medium">Medium</option>
<option className="text-green-600" value="low">Low</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="status">Status</label>
<div className="relative">
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none" id="status" name="status">
<option selected value="todo">To Do</option>
<option value="in-progress">In Progress</option>
<option value="review">Review</option>
<option value="completed">Completed</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="due-date">Due Date</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="due-date" name="due-date" type="date" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="estimated-time">Estimated Time (hours)</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="estimated-time" min="0" name="estimated-time" placeholder="0.0" step="0.5" type="number" />
</div>
</div>
</div>

<div className="space-y-4 mb-8">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Assignment</h3>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="assignee">Assigned To</label>
<div className="relative">
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none" id="assignee" name="assignee">
<option disabled selected value="">Select team member</option>
<option value="prince">Prince Reuben</option>
<option value="john">John Doe</option>
<option value="jane">Jane Smith</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="flex items-center">
<input className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" id="notify-assignee" name="notify-assignee" type="checkbox" />
<label className="ml-2 block text-sm text-gray-700" htmlFor="notify-assignee">
              Send email notification to assignee
            </label>
</div>
</div>

<div className="space-y-4">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Additional Settings</h3>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="task-tags">Tags</label>
<div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-lg">
<div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-medium">
                SEO
                <button className="ml-1.5 text-blue-600">×</button>
</div>
<div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-medium">
                Bug Fix
                <button className="ml-1.5 text-purple-600">×</button>
</div>
<input className="flex-grow outline-none text-sm py-1 px-2" placeholder="Add tag..." type="text" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="related-audit">Related Audit</label>
<div className="relative">
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none" id="related-audit" name="related-audit">
<option disabled selected value="">Select audit</option>
<option value="audit-1">Q2 2023 SEO Audit - example.com</option>
<option value="audit-2">Performance Review - myshop.io</option>
<option value="audit-3">Security Assessment - widgetco.com</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="attachments">Attachments</label>
<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
<div className="space-y-1 text-center">
<svg aria-hidden="true" className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
<path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="flex text-sm text-gray-600">
<label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500" htmlFor="file-upload">
<span>Upload files</span>
<input className="sr-only" id="file-upload" multiple="" name="file-upload" type="file" />
</label>
<p className="pl-1">or drag and drop</p>
</div>
<p className="text-xs text-gray-500">PNG, JPG, PDF, DOC up to 10MB</p>
</div>
</div>
</div>
</div>
</form>
</div>

<div className="border-t px-6 py-4 flex justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
        Cancel
      </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Create Task
      </button>
</div>
</div>

    </>
  );
}
