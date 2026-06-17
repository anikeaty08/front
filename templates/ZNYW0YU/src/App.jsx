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



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            primary: '#4984FF',
                            light: '#EBF2FF',
                            dark: '#3570F4'
                        }
                    }
                }
            }
        }
    
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

<aside className="hidden md:flex md:flex-shrink-0">
<div className="flex flex-col w-64 bg-white border-r border-gray-200 shadow-sm">
<div className="flex items-center justify-center h-16 px-4 border-b border-gray-100">
<span className="text-xl font-bold text-brand-primary">AuditPro</span>
</div>
<div className="flex flex-col flex-1 overflow-y-auto">
<nav className="flex-1 px-2 py-4 space-y-1">
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#dashboard">
<i className="fa-solid fa-gauge-high mr-3"></i>
<span>Dashboard</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#all-audits">
<i className="fa-solid fa-list-check mr-3"></i>
<span>All Audits</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#new-audit">
<i className="fa-solid fa-plus mr-3"></i>
<span>New Audit</span>
</a>
<a className="flex items-center px-4 py-3 text-white bg-brand-primary rounded-md" href="#audit-results">
<i className="fa-solid fa-chart-simple mr-3"></i>
<span>Audit Results</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#report-generator">
<i className="fa-solid fa-file-lines mr-3"></i>
<span>Report Generator</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#white-label">
<i className="fa-solid fa-tag mr-3"></i>
<span>White Label Settings</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#tasks">
<i className="fa-solid fa-list-check mr-3"></i>
<span>Tasks</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#team">
<i className="fa-solid fa-users mr-3"></i>
<span>Team</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#billing">
<i className="fa-solid fa-credit-card mr-3"></i>
<span>Billing</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#settings">
<i className="fa-solid fa-gear mr-3"></i>
<span>Settings</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center">
<img alt="User avatar" className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">Prince Reuben</p>
<p className="text-xs text-gray-500">Pro Plan</p>
</div>
</div>
</div>
</div>
</aside>
<div className="flex flex-col flex-1 overflow-hidden">

<header className="w-full">
<div className="relative z-10 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm">
<button className="px-4 text-gray-500 md:hidden">
<i className="fa-solid fa-bars"></i>
</button>
<div className="flex items-center">
<h1 className="text-lg font-medium text-gray-900">example.com - Audit Results</h1>
<span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completed</span>
</div>
<div className="flex items-center space-x-4">
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-download mr-1.5"></i>
                            Export
                        </button>
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-brand-dark">
<i className="fa-solid fa-file-lines mr-1.5"></i>
                            Generate Report
                        </button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto">

<div className="px-4 py-5 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
<div>
<h2 className="text-2xl font-bold text-gray-900">Audit Results</h2>
<p className="mt-1 text-sm text-gray-500">Analyzed on August 15, 2023 • Last updated 2 hours ago</p>
</div>
<div className="mt-4 md:mt-0 flex space-x-3">
<button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-rotate mr-2"></i>
                                    Re-run Audit
                                </button>
<button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-share-nodes mr-2"></i>
                                    Share
                                </button>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Overall Performance</h3>
</div>
<div className="px-6 py-5">
<div className="flex flex-col lg:flex-row">
<div className="flex-1 flex flex-col items-center justify-center p-6">
<div className="relative w-40 h-40">

<svg className="w-full h-full" viewbox="0 0 36 36">
<path className="stroke-current text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
<path className="stroke-current text-brand-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="75, 100" strokeLinecap="round" strokeWidth="3"></path>
<text className="text-5xl font-bold text-gray-800" text-anchor="middle" x="18" y="20.5">75</text>
</svg>
</div>
<div className="mt-4 text-center">
<h4 className="text-xl font-semibold text-gray-900">Overall Score</h4>
<p className="text-sm text-gray-500">Good performance</p>
</div>
</div>
<div className="flex-1 lg:border-l lg:border-gray-200 p-6">
<div className="grid grid-cols-2 gap-4">
<div>
<h4 className="text-sm font-medium text-gray-500">SEO Score</h4>
<div className="mt-1 flex items-center">
<span className="text-2xl font-bold text-gray-900">82</span>
<span className="ml-2 flex items-center text-sm font-medium text-green-600">
<i className="fa-solid fa-arrow-up mr-0.5"></i>
                                                        5%
                                                    </span>
</div>
<div className="mt-1 w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '82%'}}></div>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-gray-500">Performance</h4>
<div className="mt-1 flex items-center">
<span className="text-2xl font-bold text-gray-900">68</span>
<span className="ml-2 flex items-center text-sm font-medium text-yellow-600">
<i className="fa-solid fa-arrow-down mr-0.5"></i>
                                                        2%
                                                    </span>
</div>
<div className="mt-1 w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-500 h-2 rounded-full" style={{width: '68%'}}></div>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-gray-500">Accessibility</h4>
<div className="mt-1 flex items-center">
<span className="text-2xl font-bold text-gray-900">91</span>
<span className="ml-2 flex items-center text-sm font-medium text-green-600">
<i className="fa-solid fa-arrow-up mr-0.5"></i>
                                                        8%
                                                    </span>
</div>
<div className="mt-1 w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '91%'}}></div>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-gray-500">Best Practices</h4>
<div className="mt-1 flex items-center">
<span className="text-2xl font-bold text-gray-900">77</span>
<span className="ml-2 flex items-center text-sm font-medium text-green-600">
<i className="fa-solid fa-arrow-up mr-0.5"></i>
                                                        3%
                                                    </span>
</div>
<div className="mt-1 w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '77%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden">
<div className="border-b border-gray-200">
<nav className="flex -mb-px overflow-x-auto">
<button className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary">
                                        Overview
                                    </button>
<button className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                                        SEO Analysis
                                    </button>
<button className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                                        Performance
                                    </button>
<button className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                                        Accessibility
                                    </button>
<button className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                                        Best Practices
                                    </button>
<button className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                                        Content Analysis
                                    </button>
<button className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                                        AI Recommendations
                                    </button>
</nav>
</div>

<div className="px-6 py-5">
<h3 className="text-lg font-medium text-gray-900 mb-4">Critical Issues (3)</h3>
<div className="space-y-4">

<div className="bg-red-50 border border-red-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 flex justify-between items-center bg-red-100 border-b border-red-200">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-circle-exclamation text-red-600"></i>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-red-800">Slow Page Load Time</h4>
</div>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Performance
                                                </span>
</div>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-700">Your homepage takes 5.2 seconds to load, which is significantly above the recommended 2-second threshold. This can lead to high bounce rates and poor user experience.</p>
<div className="mt-3 border-t border-red-200 pt-3">
<h5 className="text-sm font-medium text-gray-700 mb-1">Recommendation:</h5>
<p className="text-sm text-gray-700">Optimize images, minimize JavaScript, and consider implementing lazy loading for below-the-fold content. Consider using a CDN to improve delivery speed.</p>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-500">Impact: High</span>
</div>
<button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                                                    Add to Tasks
                                                </button>
</div>
</div>
</div>

<div className="bg-red-50 border border-red-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 flex justify-between items-center bg-red-100 border-b border-red-200">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-circle-exclamation text-red-600"></i>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-red-800">Missing Meta Descriptions</h4>
</div>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    SEO
                                                </span>
</div>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-700">12 pages on your site are missing meta descriptions. Search engines use these to display preview snippets in search results, and they're important for click-through rates.</p>
<div className="mt-2 bg-white p-2 rounded border border-red-200">
<ul className="text-xs text-gray-600 space-y-1">
<li>/about-us.html</li>
<li>/services/consulting.html</li>
<li>/blog/article-1.html</li>
<li className="text-gray-400">+9 more pages</li>
</ul>
</div>
<div className="mt-3 border-t border-red-200 pt-3">
<h5 className="text-sm font-medium text-gray-700 mb-1">Recommendation:</h5>
<p className="text-sm text-gray-700">Add unique, descriptive meta descriptions to each page, keeping them between 120-158 characters. Focus on value proposition and include relevant keywords naturally.</p>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-500">Impact: Medium</span>
</div>
<button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                                                    Add to Tasks
                                                </button>
</div>
</div>
</div>

<div className="bg-red-50 border border-red-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 flex justify-between items-center bg-red-100 border-b border-red-200">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-circle-exclamation text-red-600"></i>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-red-800">No HTTPS Implementation</h4>
</div>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Security
                                                </span>
</div>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-700">Your website is not served over HTTPS. This poses security risks for your users and negatively impacts SEO as Google gives preference to secure sites.</p>
<div className="mt-3 border-t border-red-200 pt-3">
<h5 className="text-sm font-medium text-gray-700 mb-1">Recommendation:</h5>
<p className="text-sm text-gray-700">Install an SSL certificate and implement a 301 redirect from HTTP to HTTPS. Many hosting providers offer free SSL certificates through Let's Encrypt.</p>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-500">Impact: Critical</span>
</div>
<button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                                                    Add to Tasks
                                                </button>
</div>
</div>
</div>
</div>

<h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Moderate Issues (8)</h3>
<div className="space-y-4">

<div className="bg-yellow-50 border border-yellow-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 flex justify-between items-center bg-yellow-100 border-b border-yellow-200">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-triangle-exclamation text-yellow-600"></i>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-yellow-800">Low Text-to-HTML Ratio</h4>
</div>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    Content
                                                </span>
</div>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-700">Your text-to-HTML ratio is 14.2%, which is below the recommended minimum of 25%. This suggests that your pages have too much code compared to actual content.</p>
<div className="mt-3 border-t border-yellow-200 pt-3">
<h5 className="text-sm font-medium text-gray-700 mb-1">Recommendation:</h5>
<p className="text-sm text-gray-700">Add more valuable text content to your pages and optimize your HTML by removing unnecessary code, comments, and whitespace.</p>
</div>
</div>
</div>

<div className="bg-yellow-50 border border-yellow-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 flex justify-between items-center bg-yellow-100 border-b border-yellow-200">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-triangle-exclamation text-yellow-600"></i>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-yellow-800">Image Accessibility Issues</h4>
</div>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    Accessibility
                                                </span>
</div>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-700">27 images on your site are missing alt text. Alt text is essential for screen readers and helps with SEO by providing context to search engines.</p>
<div className="mt-3 border-t border-yellow-200 pt-3">
<h5 className="text-sm font-medium text-gray-700 mb-1">Recommendation:</h5>
<p className="text-sm text-gray-700">Add descriptive alt text to all images. Keep it concise but informative, describing what's in the image and its purpose on the page.</p>
</div>
</div>
</div>
</div>

<div className="mt-6 text-center">
<button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                        View 6 More Moderate Issues
                                        <i className="fa-solid fa-chevron-down ml-2"></i>
</button>
</div>

<h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Passed Checks (42)</h3>
<div className="bg-green-50 border border-green-200 rounded-lg p-4">
<div className="flex">
<div className="flex-shrink-0">
<i className="fa-solid fa-circle-check text-green-500"></i>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-green-800">Your website passed 42 checks</h4>
<div className="mt-2 text-sm text-green-700">
<p>These include proper header structure, responsive design, valid HTML, good mobile viewport configuration, and more.</p>
</div>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Mobile Friendly
                                        </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Proper Header Tags
                                        </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Valid HTML
                                        </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Robots.txt Present
                                        </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            No Broken Links
                                        </span>
</div></div></div></div></div></div></main></div></div>
    </>
  );
}
