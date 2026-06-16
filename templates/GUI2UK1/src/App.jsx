import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#audit-results">
<i className="fa-solid fa-chart-simple mr-3"></i>
<span>Audit Results</span>
</a>
<a className="flex items-center px-4 py-3 text-white bg-brand-primary rounded-md" href="#best-practices">
<i className="fa-solid fa-check-double mr-3"></i>
<span>Best Practices</span>
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
<div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
<div className="max-w-lg w-full lg:max-w-xs">
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-3">
<i className="fa-solid fa-search text-gray-400"></i>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary sm:text-sm" placeholder="Search best practices" type="search"/>
</div>
</div>
</div>
<div className="flex items-center">
<button className="p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
<i className="fa-solid fa-bell"></i>
</button>
<button className="p-1 ml-3 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
<i className="fa-solid fa-question-circle"></i>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto bg-gray-50">

<div className="py-6 px-4 sm:px-6 lg:px-8" id="best-practices">
<div className="mb-8 flex justify-between items-center">
<div>
<h1 className="text-2xl font-bold text-gray-900">Best Practices</h1>
<p className="mt-1 text-sm text-gray-500">Recommendations and standards for optimal website performance</p>
</div>
<button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
<i className="fa-solid fa-plus mr-2"></i> Add Custom Practice
                        </button>
</div>

<div className="bg-white p-4 rounded-lg shadow mb-6">
<h2 className="text-sm font-medium text-gray-700 mb-3">Filter by Category</h2>
<div className="flex flex-wrap gap-2">
<button className="inline-flex items-center px-3 py-1.5 bg-brand-primary text-white text-sm font-medium rounded-full">
                                All <span className="ml-1 bg-white text-brand-primary rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">42</span>
</button>
<button className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium rounded-full">
                                SEO <span className="ml-1 bg-white text-gray-600 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">12</span>
</button>
<button className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium rounded-full">
                                Performance <span className="ml-1 bg-white text-gray-600 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">8</span>
</button>
<button className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium rounded-full">
                                Security <span className="ml-1 bg-white text-gray-600 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">7</span>
</button>
<button className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium rounded-full">
                                Accessibility <span className="ml-1 bg-white text-gray-600 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">9</span>
</button>
<button className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium rounded-full">
                                UI/UX <span className="ml-1 bg-white text-gray-600 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">6</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-lg shadow overflow-hidden">
<div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
<div className="flex items-center">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 mr-2">
<i className="fa-solid fa-chart-line"></i>
</span>
<span className="font-medium text-gray-900">SEO</span>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        High Impact
                                    </span>
</div>
</div>
<div className="px-4 py-4">
<h3 className="text-lg font-medium text-gray-900">Optimize Meta Titles &amp; Descriptions</h3>
<p className="mt-2 text-sm text-gray-600">Every page should have unique, descriptive meta titles (50-60 characters) and meta descriptions (150-160 characters) that include relevant keywords.</p>
<div className="mt-4 border-t border-gray-200 pt-4">
<h4 className="text-sm font-medium text-gray-700">Implementation Checklist:</h4>
<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Include primary keyword in meta title</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Keep titles under 60 characters</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Write compelling meta descriptions with call-to-action</span>
</li>
</ul>
</div>
</div>
<div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-book-open mr-1.5"></i> Learn More
                                </button>
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-clipboard-check mr-1.5"></i> Apply to Site
                                </button>
</div>
</div>

<div className="bg-white rounded-lg shadow overflow-hidden">
<div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
<div className="flex items-center">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-2">
<i className="fa-solid fa-bolt"></i>
</span>
<span className="font-medium text-gray-900">Performance</span>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        High Impact
                                    </span>
</div>
</div>
<div className="px-4 py-4">
<h3 className="text-lg font-medium text-gray-900">Optimize Image Size &amp; Format</h3>
<p className="mt-2 text-sm text-gray-600">Compress images and use modern formats (WebP) to reduce page load times. Implement lazy loading for images below the fold to improve initial page load.</p>
<div className="mt-4 border-t border-gray-200 pt-4">
<h4 className="text-sm font-medium text-gray-700">Implementation Checklist:</h4>
<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Compress all images without quality loss</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Convert to WebP with PNG/JPG fallbacks</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Add lazy loading attributes to images</span>
</li>
</ul>
</div>
</div>
<div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-book-open mr-1.5"></i> Learn More
                                </button>
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-clipboard-check mr-1.5"></i> Apply to Site
                                </button>
</div>
</div>

<div className="bg-white rounded-lg shadow overflow-hidden">
<div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
<div className="flex items-center">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-600 mr-2">
<i className="fa-solid fa-universal-access"></i>
</span>
<span className="font-medium text-gray-900">Accessibility</span>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Medium Impact
                                    </span>
</div>
</div>
<div className="px-4 py-4">
<h3 className="text-lg font-medium text-gray-900">Provide Proper Color Contrast</h3>
<p className="mt-2 text-sm text-gray-600">Ensure sufficient color contrast between text and background (4.5:1 for normal text, 3:1 for large text) to improve readability for all users, including those with visual impairments.</p>
<div className="mt-4 border-t border-gray-200 pt-4">
<h4 className="text-sm font-medium text-gray-700">Implementation Checklist:</h4>
<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Test all text against WCAG AA standards</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Adjust text or background colors as needed</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Verify contrast in different viewport sizes</span>
</li>
</ul>
</div>
</div>
<div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-book-open mr-1.5"></i> Learn More
                                </button>
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-clipboard-check mr-1.5"></i> Apply to Site
                                </button>
</div>
</div>

<div className="bg-white rounded-lg shadow overflow-hidden">
<div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
<div className="flex items-center">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 mr-2">
<i className="fa-solid fa-shield-alt"></i>
</span>
<span className="font-medium text-gray-900">Security</span>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        Critical
                                    </span>
</div>
</div>
<div className="px-4 py-4">
<h3 className="text-lg font-medium text-gray-900">Implement HTTPS Across All Pages</h3>
<p className="mt-2 text-sm text-gray-600">Secure all website pages with HTTPS to protect user data, improve trust signals, and comply with modern browser security requirements.</p>
<div className="mt-4 border-t border-gray-200 pt-4">
<h4 className="text-sm font-medium text-gray-700">Implementation Checklist:</h4>
<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Install SSL certificate on server</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Set up 301 redirects from HTTP to HTTPS</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Update internal links to use HTTPS</span>
</li>
</ul>
</div>
</div>
<div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-book-open mr-1.5"></i> Learn More
                                </button>
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-clipboard-check mr-1.5"></i> Apply to Site
                                </button>
</div>
</div>

<div className="bg-white rounded-lg shadow overflow-hidden">
<div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
<div className="flex items-center">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-orange-100 text-orange-600 mr-2">
<i className="fa-solid fa-palette"></i>
</span>
<span className="font-medium text-gray-900">UI/UX</span>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Medium Impact
                                    </span>
</div>
</div>
<div className="px-4 py-4">
<h3 className="text-lg font-medium text-gray-900">Optimize Mobile Navigation</h3>
<p className="mt-2 text-sm text-gray-600">Implement a mobile-friendly navigation system that is intuitive, easy to use with one hand, and provides clear visual feedback for interactive elements.</p>
<div className="mt-4 border-t border-gray-200 pt-4">
<h4 className="text-sm font-medium text-gray-700">Implementation Checklist:</h4>
<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Use hamburger menu for smaller screens</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Make touch targets at least 44×44px</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Implement smooth transitions for menu open/close</span>
</li>
</ul>
</div>
</div>
<div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-book-open mr-1.5"></i> Learn More
                                </button>
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-clipboard-check mr-1.5"></i> Apply to Site
                                </button>
</div>
</div>

<div className="bg-white rounded-lg shadow overflow-hidden">
<div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
<div className="flex items-center">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 mr-2">
<i className="fa-solid fa-chart-line"></i>
</span>
<span className="font-medium text-gray-900">SEO</span>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Medium Impact
                                    </span>
</div>
</div>
<div className="px-4 py-4">
<h3 className="text-lg font-medium text-gray-900">Implement Proper Header Structure</h3>
<p className="mt-2 text-sm text-gray-600">Use a logical hierarchy of heading tags (H1-H6) to improve content structure, accessibility, and search engine understanding of your content.</p>
<div className="mt-4 border-t border-gray-200 pt-4">
<h4 className="text-sm font-medium text-gray-700">Implementation Checklist:</h4>
<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Use only one H1 tag per page</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Maintain hierarchical structure (H2, then H3, etc.)</span>
</li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-500 mt-0.5 mr-2"></i>
<span>Include keywords in heading tags where relevant</span>
</li>
</ul>
</div>
</div>
<div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-book-open mr-1.5"></i> Learn More
                                </button>
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium flex items-center">
<i className="fa-solid fa-clipboard-check mr-1.5"></i> Apply to Site
                                </button>
</div>
</div>
</div>

</div></main></div></div>
    </>
  );
}
