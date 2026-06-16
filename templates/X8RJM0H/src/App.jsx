import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="dashboard.html">
<i className="fa-solid fa-gauge-high mr-3"></i>
<span>Dashboard</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="all-audits.html">
<i className="fa-solid fa-list-check mr-3"></i>
<span>All Audits</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="new-audit.html">
<i className="fa-solid fa-plus mr-3"></i>
<span>New Audit</span>
</a>
<a className="flex items-center px-4 py-3 bg-brand-light text-brand-primary rounded-md" href="audit-results.html">
<i className="fa-solid fa-chart-simple mr-3"></i>
<span>Audit Results</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="report-generator.html">
<i className="fa-solid fa-file-lines mr-3"></i>
<span>Report Generator</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="white-label.html">
<i className="fa-solid fa-tag mr-3"></i>
<span>White Label Settings</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="tasks.html">
<i className="fa-solid fa-list-check mr-3"></i>
<span>Tasks</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="team.html">
<i className="fa-solid fa-users mr-3"></i>
<span>Team</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="billing.html">
<i className="fa-solid fa-credit-card mr-3"></i>
<span>Billing</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="settings.html">
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
<div className="flex items-center">
<button className="mr-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md" onclick="history.back()">
<i className="fa-solid fa-arrow-left"></i>
</button>
<div className="flex items-center">
<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
<i className="fa-solid fa-exclamation text-red-600 text-sm"></i>
</div>
<div>
<h1 className="text-lg font-medium text-gray-900">Add Missing Meta Description</h1>
<p className="text-sm text-gray-500">Critical SEO Issue • example.com</p>
</div>
</div>
</div>
<div className="flex items-center space-x-3">
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-plus mr-1.5"></i>
                            Add to Tasks
                        </button>
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
<i className="fa-solid fa-check mr-1.5"></i>
                            Mark as Fixed
                        </button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto">
<div className="px-4 py-6 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto">

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5">
<div className="flex items-start justify-between mb-6">
<div className="flex-1">
<div className="flex items-center mb-3">
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mr-3">
                                                Critical Priority
                                            </span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                SEO Category
                                            </span>
</div>
<h2 className="text-xl font-semibold text-gray-900 mb-2">Missing Meta Description</h2>
<p className="text-gray-600 leading-relaxed">
                                            Your homepage is missing a meta description tag. Meta descriptions are crucial for SEO as they appear in search engine results and influence click-through rates. Without a meta description, search engines will generate their own snippet, which may not effectively represent your page content.
                                        </p>
</div>
<div className="ml-6 bg-red-50 border border-red-200 rounded-lg p-4 text-center min-w-[120px]">
<div className="text-2xl font-bold text-red-600 mb-1">-15</div>
<div className="text-xs text-red-700 font-medium">SEO Impact</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-gray-50 rounded-lg p-4">
<div className="flex items-center mb-2">
<i className="fa-solid fa-chart-line text-red-500 mr-2"></i>
<span className="text-sm font-medium text-gray-900">Impact Level</span>
</div>
<div className="text-lg font-semibold text-red-600">High</div>
<div className="text-xs text-gray-600 mt-1">Affects search rankings</div>
</div>
<div className="bg-gray-50 rounded-lg p-4">
<div className="flex items-center mb-2">
<i className="fa-solid fa-clock text-green-500 mr-2"></i>
<span className="text-sm font-medium text-gray-900">Time to Fix</span>
</div>
<div className="text-lg font-semibold text-green-600">5 minutes</div>
<div className="text-xs text-gray-600 mt-1">Quick implementation</div>
</div>
<div className="bg-gray-50 rounded-lg p-4">
<div className="flex items-center mb-2">
<i className="fa-solid fa-wrench text-blue-500 mr-2"></i>
<span className="text-sm font-medium text-gray-900">Difficulty</span>
</div>
<div className="text-lg font-semibold text-blue-600">Easy</div>
<div className="text-xs text-gray-600 mt-1">No technical skills needed</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Technical Details</h3>
</div>
<div className="px-6 py-5">
<div className="space-y-6">

<div>
<h4 className="text-md font-medium text-gray-900 mb-3">Current State</h4>
<div className="bg-red-50 border border-red-200 rounded-lg p-4">
<div className="flex items-start">
<i className="fa-solid fa-times-circle text-red-500 mt-1 mr-3"></i>
<div className="flex-1">
<p className="text-sm font-medium text-red-900">No meta description found</p>
<p className="text-sm text-red-700 mt-1">The &lt;meta name="description"&gt; tag is missing from your homepage.</p>
<div className="mt-3 bg-white border border-red-300 rounded p-3">
<code className="text-sm text-gray-700">&lt;head&gt;<br/>  &lt;title&gt;Your Website Title&lt;/title&gt;<br/>  &lt;!-- Meta description is missing here --&gt;<br/>&lt;/head&gt;</code>
</div>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-md font-medium text-gray-900 mb-3">Recommended Solution</h4>
<div className="bg-green-50 border border-green-200 rounded-lg p-4">
<div className="flex items-start">
<i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
<div className="flex-1">
<p className="text-sm font-medium text-green-900">Add a compelling meta description</p>
<p className="text-sm text-green-700 mt-1">Create a 150-160 character description that summarizes your page content.</p>
<div className="mt-3 bg-white border border-green-300 rounded p-3">
<code className="text-sm text-gray-700">&lt;meta name="description" content="Discover premium web solutions and digital marketing services that help your business grow online. Get expert consultation and custom strategies today."&gt;</code>
</div>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-md font-medium text-gray-900 mb-3">Pages Affected</h4>
<div className="border border-gray-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-gray-900">1 page needs attention</span>
<span className="text-sm text-red-600 font-medium">Missing Meta Description</span>
</div>
</div>
<div className="px-4 py-3">
<div className="flex items-center">
<i className="fa-solid fa-home text-gray-400 mr-3"></i>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Homepage</p>
<p className="text-sm text-gray-500">https://example.com/</p>
</div>
<button className="text-sm text-brand-primary hover:text-brand-dark">
                                                        View Page →
                                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Step-by-Step Fix Guide</h3>
<p className="text-sm text-gray-500 mt-1">Follow these steps to resolve this issue</p>
</div>
<div className="px-6 py-5">
<div className="space-y-6">

<div className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                                            1
                                        </div>
<div className="ml-4 flex-1">
<h4 className="text-md font-medium text-gray-900">Write Your Meta Description</h4>
<p className="text-sm text-gray-600 mt-1">Create a compelling 150-160 character description that summarizes your page content and includes your main keyword.</p>
<div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
<p className="text-sm font-medium text-gray-900 mb-2">Example for your homepage:</p>
<div className="bg-white border border-gray-300 rounded p-3">
<p className="text-sm text-gray-700">"Discover premium web solutions and digital marketing services that help your business grow online. Get expert consultation and custom strategies today."</p>
</div>
<p className="text-xs text-gray-500 mt-2">Character count: 156 (Perfect length)</p>
</div>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                                            2
                                        </div>
<div className="ml-4 flex-1">
<h4 className="text-md font-medium text-gray-900">Access Your Website's HTML</h4>
<p className="text-sm text-gray-600 mt-1">Log into your website's admin panel, theme editor, or contact your developer to add the meta tag.</p>
<div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
<p className="text-sm font-medium text-blue-900">WordPress</p>
<p className="text-xs text-blue-700 mt-1">Use Yoast SEO or similar plugin</p>
</div>
<div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
<p className="text-sm font-medium text-purple-900">Shopify</p>
<p className="text-xs text-purple-700 mt-1">Online Store → Preferences</p>
</div>
<div className="bg-green-50 border border-green-200 rounded-lg p-3">
<p className="text-sm font-medium text-green-900">Custom HTML</p>
<p className="text-xs text-green-700 mt-1">Add to &lt;head&gt; section</p>
</div>
</div>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                                            3
                                        </div>
<div className="ml-4 flex-1">
<h4 className="text-md font-medium text-gray-900">Add the Meta Tag</h4>
<p className="text-sm text-gray-600 mt-1">Insert the meta description tag in the &lt;head&gt; section of your homepage.</p>
<div className="mt-3 bg-gray-900 rounded-lg p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-gray-400">HTML CODE</span>
<button className="text-xs text-blue-400 hover:text-blue-300">Copy</button>
</div>
<code className="text-sm text-green-400">
                                                    &lt;meta name="description" content="Your meta description here"&gt;
                                                </code>
</div>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                                            4
                                        </div>
<div className="ml-4 flex-1">
<h4 className="text-md font-medium text-gray-900">Test and Verify</h4>
<p className="text-sm text-gray-600 mt-1">Save your changes and test that the meta description appears correctly.</p>
<div className="mt-3 flex space-x-3">
<button className="flex items-center px-3 py-2 text-sm font-medium text-brand-primary bg-brand-light border border-brand-primary rounded-md hover:bg-brand-primary hover:text-white">
<i className="fa-solid fa-search mr-1.5"></i>
                                                    Test with Google
                                                </button>
<button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-code mr-1.5"></i>
                                                    View Source
                                                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Why This Matters</h3>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
<div className="flex items-center mb-3">
<i className="fa-solid fa-search text-blue-600 mr-2"></i>
<h4 className="text-md font-medium text-blue-900">Search Engine Visibility</h4>
</div>
<p className="text-sm text-blue-800">
                                            Meta descriptions appear in search results and influence whether users click on your link. A well-written description can improve your click-through rate by up to 30%.
                                        </p>
</div>
<div className="bg-green-50 border border-green-200 rounded-lg p-4">
<div className="flex items-center mb-3">
<i className="fa-solid fa-users text-green-600 mr-2"></i>
<h4 className="text-md font-medium text-green-900">User Experience</h4>
</div>
<p className="text-sm text-green-800">
                                            Users can quickly understand what your page offers before clicking, leading to more qualified traffic and lower bounce rates.
                                        </p>
</div>
<div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
<div className="flex items-center mb-3">
<i className="fa-solid fa-share text-purple-600 mr-2"></i>
<h4 className="text-md font-medium text-purple-900">Social Sharing</h4>
</div>
<p className="text-sm text-purple-800">
                                            When your page is shared on social media, the meta description often appears as the preview text, making your content more appealing.
                                        </p>
</div>
<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
<div className="flex items-center mb-3">
<i className="fa-solid fa-chart-line text-yellow-600 mr-2"></i>
<h4 className="text-md font-medium text-yellow-900">SEO Rankings</h4>
</div>
<p className="text-sm text-yellow-800">
                                            While not a direct ranking factor, meta descriptions influence user behavior, which search engines use as quality signals for rankings.
                                        </p>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Related Issues</h3>
<p className="text-sm text-gray-500 mt-1">Other SEO issues found on your website</p>
</div>
<div className="divide-y divide-gray-200">
<div className="px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<i className="fa-solid fa-exclamation text-yellow-600 text-xs"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Missing Alt Text on Images</p>
<p className="text-xs text-gray-500">8 images without alt text found</p>
</div>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                                Medium
                                            </span>
<button className="text-sm text-brand-primary hover:text-brand-dark">View</button>
</div>
</div>
</div>
<div className="px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
<i className="fa-solid fa-exclamation text-red-600 text-xs"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">No H1 Tag Found</p>
<p className="text-xs text-gray-500">Main heading structure missing</p>
</div>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">
                                                Critical
                                            </span>
<button className="text-sm text-brand-primary hover:text-brand-dark">View</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
