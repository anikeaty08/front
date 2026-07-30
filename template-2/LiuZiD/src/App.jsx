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
      
<div className="flex h-screen overflow-hidden">

<aside className="w-64 border-r border-gray-800 flex-shrink-0 hidden md:block">
<div className="p-4 border-b border-gray-800">
<div className="flex items-center">
<svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 8L17 11.5M17 11.5L13.5 15M17 11.5H7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="ml-2 font-medium">Workflow</span>
</div>
</div>
<nav className="p-2">
<div className="mb-6">
<p className="text-xs text-gray-500 font-medium px-3 py-2">WORKSPACE</p>
<a className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-800 text-gray-300 hover:text-white" href="#">
<svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                        Home
                    </a>
<a className="flex items-center px-3 py-2 text-sm rounded-md bg-gray-800 text-white" href="#">
<svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                        Issues
                    </a>
<a className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-800 text-gray-300 hover:text-white" href="#">
<svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                        Roadmap
                    </a>
<a className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-800 text-gray-300 hover:text-white" href="#">
<svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                        Analytics
                    </a>
</div>
<div className="mb-6">
<p className="text-xs text-gray-500 font-medium px-3 py-2">TEAMS</p>
<a className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-800 text-gray-300 hover:text-white" href="#">
<span className="w-4 h-4 mr-3 flex items-center justify-center text-xs bg-purple-500 rounded">D</span>
                        Design
                    </a>
<a className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-800 text-gray-300 hover:text-white" href="#">
<span className="w-4 h-4 mr-3 flex items-center justify-center text-xs bg-blue-500 rounded">E</span>
                        Engineering
                    </a>
<a className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-800 text-gray-300 hover:text-white" href="#">
<span className="w-4 h-4 mr-3 flex items-center justify-center text-xs bg-green-500 rounded">P</span>
                        Product
                    </a>
</div>
</nav>
</aside>

<div className="flex-1 flex flex-col overflow-hidden">

<header className="flex items-center justify-between border-b border-gray-800 h-14 px-4">
<div className="flex items-center">
<button className="md:hidden mr-2">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<h1 className="text-lg font-medium">Issues</h1>
</div>
<div className="flex items-center space-x-4">
<button className="p-1 rounded-full hover:bg-gray-800">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="p-1 rounded-full hover:bg-gray-800">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
<span className="text-sm font-medium">JD</span>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-4">

<div className="flex flex-wrap items-center justify-between mb-6">
<div className="flex items-center space-x-2 mb-2 md:mb-0">
<button className="px-3 py-1.5 bg-gray-800 rounded-md text-sm flex items-center">
<span>All Issues</span>
<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="px-3 py-1.5 hover:bg-gray-800 rounded-md text-sm flex items-center text-gray-400">
<span>Active</span>
</button>
<button className="px-3 py-1.5 hover:bg-gray-800 rounded-md text-sm flex items-center text-gray-400">
<span>Backlog</span>
</button>
</div>
<div className="flex items-center space-x-2">
<button className="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 rounded-md text-sm flex items-center">
<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span>New Issue</span>
</button>
</div>
</div>

<div className="border border-gray-800 rounded-lg overflow-hidden">
<div className="bg-gray-900 px-4 py-3 flex justify-between items-center border-b border-gray-800">
<div className="text-sm font-medium">All Issues (24)</div>
<div className="flex items-center space-x-2">
<button className="p-1 rounded hover:bg-gray-800">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="p-1 rounded hover:bg-gray-800">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<table className="w-full text-sm">
<thead>
<tr className="border-b border-gray-800 text-gray-500 text-left">
<th className="px-4 py-2 font-medium">Issue</th>
<th className="px-4 py-2 font-medium">Status</th>
<th className="px-4 py-2 font-medium">Priority</th>
<th className="px-4 py-2 font-medium">Assignee</th>
<th className="px-4 py-2 font-medium">Created</th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-gray-900 border-b border-gray-800">
<td className="px-4 py-3">Implement new authentication flow</td>
<td className="px-4 py-3"><span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xs">In Progress</span></td>
<td className="px-4 py-3"><span className="flex items-center text-yellow-500"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> Medium</span></td>
<td className="px-4 py-3"><div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center"><span className="text-xs font-medium">JD</span></div></td>
<td className="px-4 py-3 text-gray-500">2d ago</td>
</tr>
<tr className="hover:bg-gray-900 border-b border-gray-800">
<td className="px-4 py-3">Fix dashboard loading performance</td>
<td className="px-4 py-3"><span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded text-xs">Ready</span></td>
<td className="px-4 py-3"><span className="flex items-center text-red-500"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> High</span></td>
<td className="px-4 py-3"><div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"><span className="text-xs font-medium">TK</span></div></td>
<td className="px-4 py-3 text-gray-500">3d ago</td>
</tr>
<tr className="hover:bg-gray-900 border-b border-gray-800">
<td className="px-4 py-3">Update API documentation</td>
<td className="px-4 py-3"><span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs">Done</span></td>
<td className="px-4 py-3"><span className="flex items-center text-gray-500"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> Low</span></td>
<td className="px-4 py-3"><div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"><span className="text-xs font-medium">AL</span></div></td>
<td className="px-4 py-3 text-gray-500">5d ago</td>
</tr>
</tbody>
</table>
</div>
</main>
</div>
</div>

    </>
  );
}
