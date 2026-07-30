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
      

<div aria-labelledby="modal-title" aria-modal="true" className="relative z-10" role="dialog">

<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">

<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
<div className="sm:flex sm:items-start">
<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
<i className="fa-solid fa-xmark text-red-600"></i>
</div>
<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
<h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Missing Alt Text on Images</h3>
<div className="mt-2">
<p className="text-sm text-gray-500">
                                        We found 12 images without alt text, which makes them inaccessible to screen reader users.
                                    </p>
</div>
</div>
<div className="ml-auto">
<button className="rounded-md bg-white text-gray-400 hover:text-gray-500" type="button">
<span className="sr-only">Close</span>
<i className="fa-solid fa-xmark text-lg"></i>
</button>
</div>
</div>
</div>

<div className="bg-gray-50 px-4 py-3 sm:px-6">
<div className="flex mb-3 border-b border-gray-200 pb-3">
<div className="w-1/3 pr-4">
<div className="flex flex-col space-y-2">
<div>
<span className="text-xs font-medium text-gray-500">WCAG Criteria:</span>
<span className="text-sm font-medium text-gray-900 ml-1">1.1.1 Non-text Content (Level A)</span>
</div>
<div>
<span className="text-xs font-medium text-gray-500">Impact:</span>
<span className="text-sm font-medium text-red-600 ml-1">High</span>
</div>
<div>
<span className="text-xs font-medium text-gray-500">Occurrences:</span>
<span className="text-sm font-medium text-gray-900 ml-1">12</span>
</div>
</div>
</div>
<div className="w-2/3">
<p className="text-sm text-gray-600">
<span className="font-medium">Why this matters:</span> Alt text provides a textual alternative to non-text content in web pages. It helps users who cannot see images understand what the image conveys. Screen readers announce alt text to their users, and it's displayed when images fail to load.
                                </p>
</div>
</div>

<div className="mt-4">
<h4 className="font-medium text-gray-900 mb-3">All Occurrences</h4>
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-100">
<tr>
<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Location</th>
<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Element</th>
<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Preview</th>
<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Actions</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
<tr>
<td className="px-4 py-3 text-sm text-gray-900">Homepage (Header)</td>
<td className="px-4 py-3">
<code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-800">{"<"}img src="/images/hero-banner.jpg"{">"}</code>
</td>
<td className="px-4 py-3">
<div className="h-12 w-16 bg-gray-200 rounded overflow-hidden">
<img alt="" className="h-full w-full object-cover" src="https://via.placeholder.com/160x120" />
</div>
</td>
<td className="px-4 py-3 text-sm">
<button className="text-brand-primary hover:text-brand-dark font-medium">Fix</button>
</td>
</tr>
<tr>
<td className="px-4 py-3 text-sm text-gray-900">Products (Product Card)</td>
<td className="px-4 py-3">
<code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-800">{"<"}img src="/images/product-1.jpg"{">"}</code>
</td>
<td className="px-4 py-3">
<div className="h-12 w-16 bg-gray-200 rounded overflow-hidden">
<img alt="" className="h-full w-full object-cover" src="https://via.placeholder.com/160x120" />
</div>
</td>
<td className="px-4 py-3 text-sm">
<button className="text-brand-primary hover:text-brand-dark font-medium">Fix</button>
</td>
</tr>
<tr>
<td className="px-4 py-3 text-sm text-gray-900">Services (Icon)</td>
<td className="px-4 py-3">
<code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-800">{"<"}img src="/images/icon-service.png"{">"}</code>
</td>
<td className="px-4 py-3">
<div className="h-12 w-16 bg-gray-200 rounded overflow-hidden">
<img alt="" className="h-full w-full object-cover" src="https://via.placeholder.com/160x120" />
</div>
</td>
<td className="px-4 py-3 text-sm">
<button className="text-brand-primary hover:text-brand-dark font-medium">Fix</button>
</td>
</tr>
<tr>
<td className="px-4 py-3 text-sm text-gray-900">About (Team Member)</td>
<td className="px-4 py-3">
<code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-800">{"<"}img src="/images/team-1.jpg"{">"}</code>
</td>
<td className="px-4 py-3">
<div className="h-12 w-16 bg-gray-200 rounded overflow-hidden">
<img alt="" className="h-full w-full object-cover" src="https://via.placeholder.com/160x120" />
</div>
</td>
<td className="px-4 py-3 text-sm">
<button className="text-brand-primary hover:text-brand-dark font-medium">Fix</button>
</td>
</tr>
<tr>
<td className="px-4 py-3 text-sm text-gray-900">Gallery (Image 1)</td>
<td className="px-4 py-3">
<code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-800">{"<"}img src="/images/gallery-1.jpg"{">"}</code>
</td>
<td className="px-4 py-3">
<div className="h-12 w-16 bg-gray-200 rounded overflow-hidden">
<img alt="" className="h-full w-full object-cover" src="https://via.placeholder.com/160x120" />
</div>
</td>
<td className="px-4 py-3 text-sm">
<button className="text-brand-primary hover:text-brand-dark font-medium">Fix</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between mt-4">
<div className="flex items-center">
<span className="text-sm text-gray-700">Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">12</span> results</span>
</div>
<div className="flex items-center space-x-2">
<button className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50" disabled>
<i className="fa-solid fa-chevron-left mr-1.5 text-xs"></i>
                                        Previous
                                    </button>
<button className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                                        Next
                                        <i className="fa-solid fa-chevron-right ml-1.5 text-xs"></i>
</button>
</div>
</div>
</div>

<div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
<h4 className="font-medium text-gray-900 mb-3">How to Fix This Issue</h4>
<div className="text-sm text-gray-600">
<p className="mb-2">Add descriptive alt text to all images using the alt attribute:</p>
<div className="bg-gray-50 rounded px-3 py-2 font-mono text-xs text-gray-800 mb-3">
<p className="text-red-500">❌ {"<"}img src="/images/product-1.jpg"{">"}</p>
<p className="text-green-500 mt-1">✅ {"<"}img src="/images/product-1.jpg" alt="Premium office chair with ergonomic design"{">"}</p>
</div>
<p className="mb-2">Guidelines for good alt text:</p>
<ul className="list-disc list-inside space-y-1">
<li>Be specific and descriptive</li>
<li>Keep it concise (under 125 characters)</li>
<li>Don't include "image of" or "picture of"</li>
<li>For decorative images, use alt="" (empty alt)</li>
</ul>
</div>
</div>
</div>

<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-200">
<button className="inline-flex w-full justify-center rounded-md border border-transparent bg-brand-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-brand-dark sm:ml-3 sm:w-auto sm:text-sm" type="button">
                            Fix All Issues
                        </button>
<button className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm" type="button">
                            Mark as Reviewed
                        </button>
<button className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm sm:mr-auto" type="button">
                            Export Issues
                        </button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
