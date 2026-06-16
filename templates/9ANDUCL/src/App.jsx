import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="container mx-auto px-4 py-6">

<div className="mb-6">
<h1 className="text-2xl font-bold text-gray-900">White Label Settings</h1>
<p className="text-gray-600">Customize AuditPro's appearance for your clients</p>
</div>

<div className="bg-white rounded-xl shadow-sm">

<div className="flex flex-col md:flex-row">

<div className="w-full md:w-64 border-r border-gray-200">
<nav className="py-4 px-2">
<div className="px-3 pb-2 mb-2">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Settings</h3>
<ul className="mt-2 space-y-1">
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Account Settings
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded-lg bg-blue-50" href="#">
<svg className="mr-2 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    White Label
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Security
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Notifications
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Billing
                  </a>
</li>
</ul>
</div>
<div className="px-3 pb-2 mb-2 pt-4 border-t border-gray-200">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Application</h3>
<ul className="mt-2 space-y-1">
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    General
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Integrations
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Preferences
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Team Management
                  </a>
</li>
</ul>
</div>
</nav>
</div>

<div className="flex-1 p-6">
<div className="mb-6">
<h2 className="text-xl font-bold text-gray-900">White Label Settings</h2>
<p className="text-sm text-gray-600">Customize the look and feel of AuditPro for your clients</p>
</div>

<div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium text-gray-900">Enable White Labeling</h3>
<p className="text-sm text-gray-600">Remove AuditPro branding and replace with your own</p>
</div>
<div className="flex items-center">
<button aria-checked="true" className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-600" role="switch" type="button">
<span className="sr-only">Enable white labeling</span>
<span aria-hidden="true" className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
</button>
</div>
</div>
<div className="mt-2 text-sm text-blue-600">
              Your subscription plan includes white labeling features.
            </div>
</div>

<div className="mb-8">
<h3 className="text-lg font-medium text-gray-900 mb-4">Company Branding</h3>
<div className="space-y-6 bg-gray-50 p-6 rounded-lg border border-gray-200">

<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="company-name">Company Name</label>
<input className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="company-name" name="company-name" type="text" value="Acme Consulting"/>
<p className="mt-1 text-sm text-gray-500">This name will be displayed in the application header and footer.</p>
</div>

<div>
<label className="block text-sm font-medium text-gray-700">Company Logo</label>
<div className="mt-2 flex items-center space-x-6">
<div className="flex-shrink-0 h-16 w-36 bg-gray-100 rounded-md overflow-hidden border border-gray-200 flex items-center justify-center">
<img alt="Current logo" className="h-full w-full object-contain" src="https://via.placeholder.com/144x64?text=ACME"/>
</div>
<div className="flex-1">
<div className="flex items-center space-x-4">
<button className="px-4 py-2 text-sm text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="button">
                        Upload New Logo
                      </button>
<button className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="button">
                        Remove
                      </button>
</div>
<p className="mt-1 text-xs text-gray-500">Recommended size: 240px × 80px (PNG or SVG with transparent background)</p>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700">Favicon</label>
<div className="mt-2 flex items-center space-x-6">
<div className="flex-shrink-0 h-12 w-12 bg-gray-100 rounded-md overflow-hidden border border-gray-200 flex items-center justify-center">
<img alt="Current favicon" className="h-8 w-8 object-contain" src="https://via.placeholder.com/32?text=A"/>
</div>
<div className="flex-1">
<div className="flex items-center space-x-4">
<button className="px-4 py-2 text-sm text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="button">
                        Upload Favicon
                      </button>
<button className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="button">
                        Remove
                      </button>
</div>
<p className="mt-1 text-xs text-gray-500">Recommended format: 32×32 ICO, PNG, or SVG</p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-lg font-medium text-gray-900 mb-4">Color Theme</h3>
<div className="space-y-6 bg-gray-50 p-6 rounded-lg border border-gray-200">

<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="primary-color">Primary Color</label>
<div className="mt-1 flex rounded-md shadow-sm">
<div className="relative flex items-stretch flex-grow focus-within:z-10">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 sm:text-sm">#</span>
</div>
<input className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-7 sm:text-sm border-gray-300" id="primary-color" name="primary-color" type="text" value="3B82F6"/>
</div>
<div className="relative inline-flex items-center space-x-2 px-4 py-2 border border-l-0 border-gray-300 text-sm font-medium rounded-r-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
<div className="h-6 w-6 rounded-full border border-gray-300 bg-blue-600"></div>
</div>
</div>
<p className="mt-1 text-sm text-gray-500">Used for buttons, links, and interactive elements.</p>
</div>

<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="secondary-color">Secondary Color</label>
<div className="mt-1 flex rounded-md shadow-sm">
<div className="relative flex items-stretch flex-grow focus-within:z-10">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 sm:text-sm">#</span>
</div>
<input className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-7 sm:text-sm border-gray-300" id="secondary-color" name="secondary-color" type="text" value="1F2937"/>
</div>
<div className="relative inline-flex items-center space-x-2 px-4 py-2 border border-l-0 border-gray-300 text-sm font-medium rounded-r-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
<div className="h-6 w-6 rounded-full border border-gray-300 bg-gray-800"></div>
</div>
</div>
<p className="mt-1 text-sm text-gray-500">Used for headers, footers, and accent elements.</p>
</div>

<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="accent-color">Accent Color</label>
<div className="mt-1 flex rounded-md shadow-sm">
<div className="relative flex items-stretch flex-grow focus-within:z-10">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 sm:text-sm">#</span>
</div>
<input className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-7 sm:text-sm border-gray-300" id="accent-color" name="accent-color" type="text" value="10B981"/>
</div>
<div className="relative inline-flex items-center space-x-2 px-4 py-2 border border-l-0 border-gray-300 text-sm font-medium rounded-r-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
<div className="h-6 w-6 rounded-full border border-gray-300 bg-green-500"></div>
</div>
</div>
<p className="mt-1 text-sm text-gray-500">Used for success states and highlights.</p>
</div>

<div className="pt-4 border-t border-gray-200">
<label className="block text-sm font-medium text-gray-700 mb-3">Color Presets</label>
<div className="grid grid-cols-5 gap-3">
<button className="h-10 rounded-md border-2 border-blue-500 shadow-sm bg-gradient-to-r from-blue-600 to-blue-800"></button>
<button className="h-10 rounded-md border border-gray-300 shadow-sm bg-gradient-to-r from-purple-600 to-purple-800"></button>
<button className="h-10 rounded-md border border-gray-300 shadow-sm bg-gradient-to-r from-green-600 to-green-800"></button>
<button className="h-10 rounded-md border border-gray-300 shadow-sm bg-gradient-to-r from-red-600 to-red-800"></button>
<button className="h-10 rounded-md border border-gray-300 shadow-sm bg-gradient-to-r from-gray-600 to-gray-800"></button>
</div>
<p className="mt-2 text-sm text-gray-500">Select a preset or customize your own colors above.</p>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-lg font-medium text-gray-900 mb-4">Custom Domain</h3>
<div className="space-y-6 bg-gray-50 p-6 rounded-lg border border-gray-200">

<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="custom-domain">Custom Domain</label>
<div className="mt-1 flex rounded-md shadow-sm">
<span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    https://
                  </span>
<input className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300" id="custom-domain" name="custom-domain" type="text" value="audit.acmeconsulting.com"/>
</div>
<p className="mt-1 text-sm text-gray-500">
                  Clients will access AuditPro through this domain instead of the default one.
                </p>
</div>

<div className="rounded-md bg-yellow-50 p-4">
<div className="flex">
<div className="flex-shrink-0">
<svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-yellow-800">Domain Verification Required</h3>
<div className="mt-2 text-sm text-yellow-700">
<p>To verify ownership of this domain, please add the following DNS records:</p>
<div className="mt-2 overflow-x-auto">
<table className="min-w-full divide-y divide-yellow-200">
<thead className="bg-yellow-50">
<tr>
<th className="px-3 py-2 text-left text-xs font-medium text-yellow-800 uppercase tracking-wider" scope="col">Type</th>
<th className="px-3 py-2 text-left text-xs font-medium text-yellow-800 uppercase tracking-wider" scope="col">Name</th>
<th className="px-3 py-2 text-left text-xs font-medium text-yellow-800 uppercase tracking-wider" scope="col">Value</th>
</tr>
</thead>
<tbody className="bg-yellow-50 divide-y divide-yellow-200">
<tr>
<td className="px-3 py-2 whitespace-nowrap text-xs text-yellow-800">CNAME</td>
<td className="px-3 py-2 whitespace-nowrap text-xs text-yellow-800">audit</td>
<td className="px-3 py-2 whitespace-nowrap text-xs text-yellow-800">proxy.auditpro.io</td>
</tr>
<tr>
<td className="px-3 py-2 whitespace-nowrap text-xs text-yellow-800">TXT</td>
<td className="px-3 py-2 whitespace-nowrap text-xs text-yellow-800">_auditpro-verification.audit</td>
<td className="px-3 py-2 whitespace-nowrap text-xs text-yellow-800">ap-verify=a1b2c3d4e5f6g7h8i9j0</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="mt-3">
<button className="text-sm font-medium text-yellow-800 hover:text-yellow-700" type="button">
                        Verify Domain <span aria-hidden="true">→</span>
</button>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-start">
<div className="flex items-center h-5">
<input checked="" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" id="auto-ssl" name="auto-ssl" type="checkbox"/>
</div>
<div className="ml-3 text-sm">
<label className="font-medium text-gray-700" htmlFor="auto-ssl">Automatic SSL Certificate</label>
<p className="text-gray-500">We'll automatically provision and renew SSL certificates for your custom domain.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-lg font-medium text-gray-900 mb-4">Email Customization</h3></div></div></div></div></div>
    </>
  );
}
