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
      

<aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 px-6 py-6 border-b">
<div className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-lg text-white font-bold text-xl">AI</div>
<span className="font-bold text-lg text-gray-700">AuditTool</span>
</div>
<nav className="mt-5 flex-1">
<ul className="space-y-1">
<li>
<a className="flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-l-lg font-medium" href="#">
<svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 7v4a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1zm0 6v4a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1zm8-6v4a1 1 0 001 1h7a1 1 0 001-1V7a1 1 0 00-1-1h-7a1 1 0 00-1 1zm0 6v4a1 1 0 001 1h7a1 1 0 001-1v-4a1 1 0 00-1-1h-7a1 1 0 00-1 1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Dashboard
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>My Audits
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>New Audit
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h4l2 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Billing
            </a>
</li>
</ul>
</nav>
</div>
<div className="px-6 py-4 border-t">
<div className="flex items-center gap-2">
<img alt="User Avatar" className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" />
<div>
<p className="font-semibold text-gray-800 text-sm">Prince Reuben</p>
<p className="text-xs text-gray-400">Pro Plan</p>
</div>
<button className="ml-auto text-gray-400 hover:text-blue-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</aside>

<main className="ml-64 p-10">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
<div>
<h1 className="text-3xl font-bold text-gray-900">AI Website Audit Tool</h1>
<p className="text-gray-500 mt-1">Analyze, optimize, and elevate your website with actionable AI insights.</p>
</div>
<div className="flex gap-2 mt-4 sm:mt-0">
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">New Audit</button>
<button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50">Upgrade Plan</button>
</div>
</div>

<section className="bg-white rounded-lg shadow mb-8 p-6 flex flex-col md:flex-row gap-6 items-center">
<div className="flex-1 w-full">
<label className="block text-gray-700 font-bold mb-2" htmlFor="website-url">Enter Website URL</label>
<div className="flex">
<input className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm" id="website-url" placeholder="https://yourwebsite.com" type="text" />
<button className="bg-blue-600 text-white px-6 rounded-r-lg font-semibold hover:bg-blue-700 transition">Audit</button>
</div>
<p className="text-xs text-gray-400 mt-1">Or <a className="underline text-blue-500" href="#">Paste HTML</a></p>
</div>
<div className="flex flex-col items-center gap-2">
<div className="flex items-center gap-1">
<span className="text-xs text-gray-500">Audits left this month:</span>
<span className="font-bold text-blue-600">2/3</span>
</div>
<div className="flex gap-1">
<span className="inline-block w-3 h-3 rounded-full bg-blue-600"></span>
<span className="inline-block w-3 h-3 rounded-full bg-blue-600"></span>
<span className="inline-block w-3 h-3 rounded-full bg-gray-300"></span>
</div>
</div>
</section>

<section>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

<div className="bg-white p-6 rounded-lg shadow flex flex-col">
<div className="flex items-center mb-4">
<span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-2">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<h2 className="text-lg font-bold text-gray-900">Website Audit Score</h2>
</div>
<div className="flex flex-wrap gap-4 mt-2">
<div className="flex flex-col items-center">
<span className="text-2xl font-bold text-green-500">85</span>
<span className="text-xs text-gray-500">Performance</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-bold text-yellow-500">74</span>
<span className="text-xs text-gray-500">SEO</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-bold text-blue-500">90</span>
<span className="text-xs text-gray-500">Design</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-bold text-red-500">62</span>
<span className="text-xs text-gray-500">Accessibility</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-bold text-gray-800">80</span>
<span className="text-xs text-gray-500">Content</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-lg shadow flex flex-col">
<div className="flex items-center mb-4">
<span className="bg-yellow-100 text-yellow-600 rounded-full p-2 mr-2">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<h2 className="text-lg font-bold text-gray-900">Key Issues & Recommendations</h2>
</div>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<span className="text-red-500 mt-1">•</span>
<div>
<span className="font-semibold">SEO:</span> Missing meta descriptions on 5 pages.<br />
<span className="text-blue-500 cursor-pointer underline text-xs">View Recommendation</span>
</div>
</li>
<li className="flex items-start gap-2">
<span className="text-yellow-500 mt-1">•</span>
<div>
<span className="font-semibold">Performance:</span> Images not optimized (2MB total savings).<br />
<span className="text-blue-500 cursor-pointer underline text-xs">View Recommendation</span>
</div>
</li>
<li className="flex items-start gap-2">
<span className="text-green-500 mt-1">•</span>
<div>
<span className="font-semibold">Accessibility:</span> Low contrast on primary buttons.<br />
<span className="text-blue-500 cursor-pointer underline text-xs">View Recommendation</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="flex gap-4 mb-8">
<button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-1">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        Download PDF
      </button>
<button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold flex items-center gap-1 hover:bg-gray-300">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 8a3 3 0 01-6 0m6 8H9a3 3 0 01-3-3V7a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        Share Link
      </button>
<button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold flex items-center gap-1 hover:bg-blue-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 12a4 4 0 01-8 0m4-4v4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        Send via Email
      </button>
</section>

<section>
<h2 className="text-xl font-semibold mb-4 text-gray-800">Audit History</h2>
<div className="bg-white rounded-lg shadow overflow-x-auto">
<table className="min-w-full text-left">
<thead className="bg-gray-50">
<tr>
<th className="py-3 px-6 font-semibold text-gray-700">Website</th>
<th className="py-3 px-6 font-semibold text-gray-700">Date</th>
<th className="py-3 px-6 font-semibold text-gray-700">Overall Score</th>
<th className="py-3 px-6 font-semibold text-gray-700">Actions</th>
</tr>
</thead>
<tbody>
<tr className="border-t">
<td className="py-3 px-6">example.com</td>
<td className="py-3 px-6">2024-06-15</td>
<td className="py-3 px-6"><span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold text-xs">82</span></td>
<td className="py-3 px-6 flex gap-2">
<button className="text-blue-500 hover:underline text-xs">View</button>
<button className="text-gray-400 hover:text-red-600" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="text-gray-400 hover:text-green-600" title="Download">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>
<tr>
<td className="py-3 px-6">mysite.org</td>
<td className="py-3 px-6">2024-06-12</td>
<td className="py-3 px-6"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold text-xs">73</span></td>
<td className="py-3 px-6 flex gap-2">
<button className="text-blue-500 hover:underline text-xs">View</button>
<button className="text-gray-400 hover:text-red-600" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="text-gray-400 hover:text-green-600" title="Download">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>
</tbody>
</table>
<div className="px-6 py-4 bg-gray-50 text-xs text-gray-400">Showing 1-2 of 2</div>
</div>
</section>
</main>

    </>
  );
}
