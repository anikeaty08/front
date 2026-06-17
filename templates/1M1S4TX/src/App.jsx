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
      

<aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col justify-between z-20">
<div>
<div className="flex items-center gap-2 px-6 py-6 border-b">
<div className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-lg text-white font-bold text-xl">AI</div>
<span className="font-bold text-lg text-gray-700">AuditTool</span>
</div>
<nav className="mt-5 flex-1">
<ul className="space-y-1">
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 7v4a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1zm0 6v4a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1zm8-6v4a1 1 0 001 1h7a1 1 0 001-1V7a1 1 0 00-1-1h-7a1 1 0 00-1 1zm0 6v4a1 1 0 001 1h7a1 1 0 001-1v-4a1 1 0 00-1-1h-7a1 1 0 00-1 1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Dashboard
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-l-lg font-medium" href="#">
<svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>My Audits
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>New Audit
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h4l2 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Billing
            </a>
</li>
</ul>
</nav>
</div>
<div className="px-6 py-4 border-t">
<div className="flex items-center gap-2">
<img alt="User Avatar" className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<p className="font-semibold text-gray-800 text-sm">Prince Reuben</p>
<p className="text-xs text-gray-400">Pro Plan</p>
</div>
<button className="ml-auto text-gray-400 hover:text-blue-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</aside>

<main className="ml-64 px-8 py-10">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
<div>
<h1 className="text-3xl font-bold text-gray-900">My Audits</h1>
<p className="text-gray-500 mt-1">All your website audit reports in one place.</p>
</div>
<button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition mt-4 sm:mt-0">New Audit</button>
</div>

<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
<div className="flex gap-3 items-center">
<input className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm w-64" placeholder="Search website or URL..." type="text"/>
<select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
<option>Status: All</option>
<option>Passed</option>
<option>Needs Improvement</option>
<option>Failed</option>
</select>
<select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
<option>Sort by: Date (Newest)</option>
<option>Date (Oldest)</option>
<option>Score (High-Low)</option>
<option>Score (Low-High)</option>
</select>
</div>
<div>
<span className="text-xs text-gray-400">Showing <span className="font-semibold text-gray-600">6</span> of <span className="font-semibold text-gray-600">6</span> audits</span>
</div>
</div>

<div className="bg-white rounded-lg shadow overflow-x-auto">
<table className="min-w-full text-sm text-left">
<thead className="bg-gray-50">
<tr>
<th className="py-3 px-6 text-gray-700 font-semibold">Website</th>
<th className="py-3 px-6 text-gray-700 font-semibold">Date</th>
<th className="py-3 px-6 text-gray-700 font-semibold">Status</th>
<th className="py-3 px-6 text-gray-700 font-semibold">Score</th>
<th className="py-3 px-6 text-gray-700 font-semibold">Audited By</th>
<th className="py-3 px-6 text-gray-700 font-semibold">Actions</th>
</tr>
</thead>
<tbody>
<tr className="border-t hover:bg-blue-50 transition">
<td className="py-3 px-6">example.com</td>
<td className="py-3 px-6">2024-06-15</td>
<td className="py-3 px-6">
<span className="inline-block px-2 py-1 rounded text-xs bg-green-100 text-green-700 font-medium">Passed</span>
</td>
<td className="py-3 px-6"><span className="font-bold text-green-700">82</span></td>
<td className="py-3 px-6">Prince Reuben</td>
<td className="py-3 px-6 flex gap-2">
<button className="text-blue-600 hover:underline text-xs">View</button>
<button className="text-gray-400 hover:text-red-600" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="text-gray-400 hover:text-green-600" title="Download">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>
<tr className="border-t hover:bg-blue-50 transition">
<td className="py-3 px-6">mysite.org</td>
<td className="py-3 px-6">2024-06-12</td>
<td className="py-3 px-6">
<span className="inline-block px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-700 font-medium">Needs Improvement</span>
</td>
<td className="py-3 px-6"><span className="font-bold text-yellow-700">73</span></td>
<td className="py-3 px-6">Prince Reuben</td>
<td className="py-3 px-6 flex gap-2">
<button className="text-blue-600 hover:underline text-xs">View</button>
<button className="text-gray-400 hover:text-red-600" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="text-gray-400 hover:text-green-600" title="Download">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>
<tr className="border-t hover:bg-blue-50 transition">
<td className="py-3 px-6">demo.site</td>
<td className="py-3 px-6">2024-06-10</td>
<td className="py-3 px-6">
<span className="inline-block px-2 py-1 rounded text-xs bg-red-100 text-red-700 font-medium">Failed</span>
</td>
<td className="py-3 px-6"><span className="font-bold text-red-700">58</span></td>
<td className="py-3 px-6">Prince Reuben</td>
<td className="py-3 px-6 flex gap-2">
<button className="text-blue-600 hover:underline text-xs">View</button>
<button className="text-gray-400 hover:text-red-600" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="text-gray-400 hover:text-green-600" title="Download">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>
<tr className="border-t hover:bg-blue-50 transition">
<td className="py-3 px-6">coolnew.com</td>
<td className="py-3 px-6">2024-06-08</td>
<td className="py-3 px-6">
<span className="inline-block px-2 py-1 rounded text-xs bg-green-100 text-green-700 font-medium">Passed</span>
</td>
<td className="py-3 px-6"><span className="font-bold text-green-700">90</span></td>
<td className="py-3 px-6">Prince Reuben</td>
<td className="py-3 px-6 flex gap-2">
<button className="text-blue-600 hover:underline text-xs">View</button>
<button className="text-gray-400 hover:text-red-600" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="text-gray-400 hover:text-green-600" title="Download">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>
<tr className="border-t hover:bg-blue-50 transition">
<td className="py-3 px-6">webplus.io</td>
<td className="py-3 px-6">2024-06-05</td>
<td className="py-3 px-6">
<span className="inline-block px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-700 font-medium">Needs Improvement</span>
</td>
<td className="py-3 px-6"><span className="font-bold text-yellow-700">69</span></td>
<td className="py-3 px-6">Prince Reuben</td>
<td className="py-3 px-6 flex gap-2">
<button className="text-blue-600 hover:underline text-xs">View</button>
<button className="text-gray-400 hover:text-red-600" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="text-gray-400 hover:text-green-600" title="Download">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>
<tr className="border-t hover:bg-blue-50 transition">
<td className="py-3 px-6">landingz.com</td>
<td className="py-3 px-6">2024-06-01</td>
<td className="py-3 px-6">
<span className="inline-block px-2 py-1 rounded text-xs bg-green-100 text-green-700 font-medium">Passed</span>
</td>
<td className="py-3 px-6"><span className="font-bold text-green-700">88</span></td>
<td className="py-3 px-6">Prince Reuben</td>
<td className="py-3 px-6 flex gap-2">
<button className="text-blue-600 hover:underline text-xs">View</button>
<button className="text-gray-400 hover:text-red-600" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="text-gray-400 hover:text-green-600" title="Download">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>
</tbody>
</table>
<div className="px-6 py-4 bg-gray-50 text-xs text-gray-400">Showing 1-6 of 6</div>
</div>
</main>

    </>
  );
}
