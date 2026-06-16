import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function showTab(tabName) {
      // Hide all tabs
      document.getElementById('seo-tab').classList.add('hidden');
      document.getElementById('performance-tab').classList.add('hidden');
      document.getElementById('accessibility-tab').classList.add('hidden');
      
      // Remove active state from all buttons
      document.querySelectorAll('nav button').forEach(btn => {
        btn.className = 'py-4 border-b-2 border-transparent text-gray-500 hover:text-gray-700';
      });
      
      // Show selected tab
      document.getElementById(tabName + '-tab').classList.remove('hidden');
      
      // Add active state to clicked button
      event.target.className = 'py-4 border-b-2 border-blue-600 text-blue-600 font-medium';
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
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
<main className="ml-64 px-8 py-8 min-h-screen">

<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-3xl font-bold text-gray-900">Audit Results</h1>
<p className="text-gray-500 mt-1">yourdomain.com • Completed 2 hours ago</p>
</div>
<div className="flex gap-3">
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">Download PDF</button>
<button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition">Share Report</button>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl font-bold text-gray-900 mb-2">Overall Score</h2>
<p className="text-gray-500">Based on SEO, Performance, and Accessibility</p>
</div>
<div className="flex items-center gap-6">
<div className="relative w-32 h-32">
<svg className="w-32 h-32 transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f3f4f6" strokeWidth="2"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" stroke-dasharray="75, 100" strokeWidth="2"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-3xl font-bold text-gray-900">75</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg mb-8">
<div className="border-b border-gray-200">
<nav className="flex space-x-8 px-8">
<button className="py-4 border-b-2 border-blue-600 text-blue-600 font-medium" onclick="showTab('seo')">SEO Analysis</button>
<button className="py-4 border-b-2 border-transparent text-gray-500 hover:text-gray-700" onclick="showTab('performance')">Performance</button>
<button className="py-4 border-b-2 border-transparent text-gray-500 hover:text-gray-700" onclick="showTab('accessibility')">Accessibility</button>
</nav>
</div>

<div className="p-8" id="seo-tab">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-gray-900">SEO Analysis</h3>
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-green-500 rounded-full"></div>
<span className="font-semibold text-green-600">Score: 82/100</span>
</div>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
</div>
<div>
<h4 className="font-semibold text-green-800">Title Tags Optimized</h4>
<p className="text-green-700 text-sm mt-1">All pages have unique and descriptive title tags within the recommended length.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
<div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 20 20"><path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92z"></path></svg>
</div>
<div>
<h4 className="font-semibold text-yellow-800">Missing Meta Descriptions</h4>
<p className="text-yellow-700 text-sm mt-1">3 pages are missing meta descriptions. Add compelling descriptions to improve click-through rates.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
<div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"></path></svg>
</div>
<div>
<h4 className="font-semibold text-red-800">Broken Internal Links</h4>
<p className="text-red-700 text-sm mt-1">Found 5 broken internal links that need to be fixed to improve user experience and SEO.</p>
</div>
</div>
</div>
</div>

<div className="p-8 hidden" id="performance-tab">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-gray-900">Performance Analysis</h3>
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
<span className="font-semibold text-yellow-600">Score: 68/100</span>
</div>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
</div>
<div>
<h4 className="font-semibold text-green-800">Good Server Response Time</h4>
<p className="text-green-700 text-sm mt-1">Server responds in 180ms, which is excellent for user experience.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
<div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 20 20"><path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92z"></path></svg>
</div>
<div>
<h4 className="font-semibold text-yellow-800">Large Image Sizes</h4>
<p className="text-yellow-700 text-sm mt-1">Several images are over 1MB. Consider compressing images to improve load times.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
<div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"></path></svg>
</div>
<div>
<h4 className="font-semibold text-red-800">Render-Blocking Resources</h4>
<p className="text-red-700 text-sm mt-1">CSS and JavaScript files are blocking page rendering. Consider minifying and deferring non-critical resources.</p>
</div>
</div>
</div>
</div>

<div className="p-8 hidden" id="accessibility-tab">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-gray-900">Accessibility Analysis</h3>
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-green-500 rounded-full"></div>
<span className="font-semibold text-green-600">Score: 91/100</span>
</div>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
</div>
<div>
<h4 className="font-semibold text-green-800">Proper Heading Structure</h4>
<p className="text-green-700 text-sm mt-1">Website uses a logical heading hierarchy (H1-H6) that helps screen readers navigate content.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
</div>
<div>
<h4 className="font-semibold text-green-800">Good Color Contrast</h4>
<p className="text-green-700 text-sm mt-1">Text has sufficient contrast ratio for readability by users with visual impairments.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
<div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 20 20"><path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92z"></path></svg>
</div>
<div>
<h4 className="font-semibold text-yellow-800">Missing Alt Text</h4>
<p className="text-yellow-700 text-sm mt-1">2 images are missing alt text descriptions for screen readers.</p>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
