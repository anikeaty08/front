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
      
<div className="flex h-screen">

<aside className="w-64 bg-white border-r border-gray-100 flex flex-col">
<div className="p-6 border-b border-gray-100">
<a className="text-2xl font-bold text-indigo-600" href="#">angle</a>
</div>
<nav className="flex-1 p-4">
<div className="mb-6">
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Main</p>
<ul className="space-y-1">
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md" href="#">
<i className="fas fa-home w-5 h-5 mr-2"></i>
                Dashboard
              </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md" href="#">
<i className="fas fa-layer-group w-5 h-5 mr-2"></i>
                Projects
              </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md" href="#">
<i className="fas fa-puzzle-piece w-5 h-5 mr-2"></i>
                Components
              </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md" href="#">
<i className="fas fa-palette w-5 h-5 mr-2"></i>
                Templates
              </a>
</li>
</ul>
</div>
<div className="mb-6">
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Resources</p>
<ul className="space-y-1">
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md" href="#">
<i className="fas fa-book w-5 h-5 mr-2"></i>
                Documentation
              </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md" href="#">
<i className="fas fa-video w-5 h-5 mr-2"></i>
                Tutorials
              </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md" href="#">
<i className="fas fa-question-circle w-5 h-5 mr-2"></i>
                Support
              </a>
</li>
</ul>
</div>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center">
<img alt="User" className="w-8 h-8 rounded-full mr-3" src="https://randomuser.me/api/portraits/men/32.jpg" />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Alex Johnson</p>
<p className="text-xs text-gray-500 truncate">alex@company.com</p>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i className="fas fa-cog"></i>
</button>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col overflow-hidden">

<header className="bg-white border-b border-gray-100 py-4 px-6">
<div className="flex items-center justify-between">
<div>
<h1 className="text-lg font-semibold">Dashboard</h1>
<p className="text-sm text-gray-500">Welcome to your new project</p>
</div>
<div className="flex items-center space-x-4">
<button className="text-gray-500 hover:text-gray-700">
<i className="fas fa-bell"></i>
</button>
<button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 flex items-center">
<i className="fas fa-plus mr-2"></i> New Project
            </button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6">
<div className="mb-8">
<div className="bg-indigo-600 text-white p-6 rounded-lg">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl font-semibold mb-2">🎉 Project created successfully!</h2>
<p className="mb-4">Your dashboard project is ready. Here are some next steps to get started.</p>
<button className="px-4 py-2 bg-white text-indigo-600 rounded-md font-medium hover:bg-indigo-50">
                  View project
                </button>
</div>
<button className="text-indigo-200 hover:text-white">
<i className="fas fa-times"></i>
</button>
</div>
</div>
</div>
<div className="mb-8">
<h2 className="text-lg font-semibold mb-4">Getting Started</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
<i className="fas fa-book text-indigo-600"></i>
</div>
<h3 className="font-medium mb-2">Read the docs</h3>
<p className="text-sm text-gray-600 mb-4">Explore our documentation to learn how to use Angle components.</p>
<a className="text-sm text-indigo-600 font-medium hover:text-indigo-700" href="#">View documentation →</a>
</div>
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
<i className="fas fa-code text-indigo-600"></i>
</div>
<h3 className="font-medium mb-2">Browse components</h3>
<p className="text-sm text-gray-600 mb-4">Discover our library of ready-to-use UI components.</p>
<a className="text-sm text-indigo-600 font-medium hover:text-indigo-700" href="#">View components →</a>
</div>
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
<i className="fas fa-users text-indigo-600"></i>
</div>
<h3 className="font-medium mb-2">Invite team members</h3>
<p className="text-sm text-gray-600 mb-4">Collaborate with your team by inviting them to your project.</p>
<a className="text-sm text-indigo-600 font-medium hover:text-indigo-700" href="#">Invite team →</a>
</div>
</div>
</div>
<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold">Your Projects</h2>
<button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View all</button>
</div>
<div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Name</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Type</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Status</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Created</th>
<th className="relative px-6 py-3" scope="col"><span className="sr-only">Actions</span></th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-600">
<i className="fas fa-columns"></i>
</div>
<div className="ml-4">
<div className="text-sm font-medium text-gray-900">My Awesome Project</div>
<div className="text-sm text-gray-500">Dashboard</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-gray-900">Web Application</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Just now
                  </td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a className="text-indigo-600 hover:text-indigo-700" href="#">Edit</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
