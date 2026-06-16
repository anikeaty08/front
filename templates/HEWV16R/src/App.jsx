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

        function showModal(id) {
            document.getElementById(id).classList.remove('hidden');
        }

        function hideModal(id) {
            document.getElementById(id).classList.add('hidden');
        }

        function copyToClipboard(text) {
            navigator.clipboard.writeText(text);
            // Show toast notification
            const toast = document.createElement('div');
            toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md z-50';
            toast.textContent = 'Copied to clipboard!';
            document.body.appendChild(toast);
            setTimeout(() => document.body.removeChild(toast), 2000);
        }

        function toggleSection(id) {
            const element = document.getElementById(id);
            const button = document.querySelector(`[onclick="toggleSection('${id}')"]`);
            const icon = button.querySelector('i');
            
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
                icon.className = 'fa-solid fa-chevron-up';
            } else {
                element.classList.add('hidden');
                icon.className = 'fa-solid fa-chevron-down';
            }
        }

        function acceptSuggestion(sectionId) {
            const element = document.getElementById(sectionId);
            element.classList.add('bg-green-50', 'border-green-200');
            element.querySelector('.status-badge').className = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 status-badge';
            element.querySelector('.status-badge').innerHTML = '<i class="fa-solid fa-check mr-1"></i>Accepted';
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
</div>
</aside>
<div className="flex flex-col flex-1 overflow-hidden">

<header className="w-full">
<div className="relative z-10 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm">
<div className="flex items-center">
<button className="mr-4 p-2 text-gray-500 hover:text-gray-700 rounded-md" onclick="history.back()">
<i className="fa-solid fa-arrow-left"></i>
</button>
<div>
<h1 className="text-lg font-medium text-gray-900">Homepage Content Analysis</h1>
<p className="text-sm text-gray-500">https://example.com/</p>
</div>
<span className="ml-3 px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-800">Score: 42</span>
</div>
<div className="flex items-center space-x-3">
<button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-share mr-2"></i>
                            Share Analysis
                        </button>
<button className="flex items-center px-3 py-2 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-brand-dark">
<i className="fa-solid fa-plus mr-2"></i>
                            Create Task
                        </button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto">
<div className="px-4 py-6 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto">

<div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold text-gray-900">Content Analysis Summary</h2>
<div className="flex items-center space-x-4">
<div className="text-center">
<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
<span className="text-2xl font-bold text-red-600">42</span>
</div>
<p className="text-xs text-gray-500 mt-1">Overall Score</p>
</div>
</div>
</div>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="text-center">
<div className="w-12 h-12 bg-red-100 rounded-lg mx-auto flex items-center justify-center mb-2">
<i className="fa-solid fa-exclamation-triangle text-red-600"></i>
</div>
<p className="text-2xl font-bold text-gray-900">5</p>
<p className="text-sm text-gray-600">Critical Issues</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto flex items-center justify-center mb-2">
<i className="fa-solid fa-lightbulb text-yellow-600"></i>
</div>
<p className="text-2xl font-bold text-gray-900">3</p>
<p className="text-sm text-gray-600">Improvements</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-green-100 rounded-lg mx-auto flex items-center justify-center mb-2">
<i className="fa-solid fa-check-circle text-green-600"></i>
</div>
<p className="text-2xl font-bold text-gray-900">2</p>
<p className="text-sm text-gray-600">Good Elements</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto flex items-center justify-center mb-2">
<i className="fa-solid fa-clock text-blue-600"></i>
</div>
<p className="text-2xl font-bold text-gray-900">4.5h</p>
<p className="text-sm text-gray-600">Est. Fix Time</p>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-lg shadow-sm border border-red-200" id="hero-section">
<div className="px-6 py-5 border-b border-gray-200">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
<i className="fa-solid fa-star text-red-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">Hero Section</h3>
<p className="text-sm text-gray-500">Primary conversion area</p>
</div>
</div>
<div className="flex items-center space-x-3">
<span className="status-badge inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
<i className="fa-solid fa-exclamation-triangle mr-1"></i>
                                                Critical - Score: 28
                                            </span>
<button className="p-2 text-gray-400 hover:text-gray-600" onclick="toggleSection('hero-content')">
<i className="fa-solid fa-chevron-down"></i>
</button>
</div>
</div>
</div>
<div className="px-6 py-6" id="hero-content">

<div className="mb-8">
<h4 className="text-base font-medium text-gray-900 mb-4">Current Content Analysis</h4>
<div className="bg-gray-50 rounded-lg p-4 mb-4">
<div className="flex items-start justify-between">
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 mb-2">Current Headline:</p>
<p className="text-lg text-gray-700 italic mb-4">"Welcome to Our Platform - Your Complete Digital Solution for Modern Businesses"</p>
<p className="text-sm font-medium text-gray-900 mb-2">Current CTA:</p>
<span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white">
                                                        Learn More
                                                    </span>
</div>
<button className="ml-4 p-2 text-gray-400 hover:text-gray-600" onclick="copyToClipboard('Welcome to Our Platform - Your Complete Digital Solution for Modern Businesses')">
<i className="fa-solid fa-copy"></i>
</button>
</div>
</div>
</div>

<div className="mb-8">
<h4 className="text-base font-medium text-gray-900 mb-4">Issues Identified</h4>
<div className="space-y-4">
<div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
<div className="flex-shrink-0">
<i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
</div>
<div className="ml-3 flex-1">
<h5 className="text-sm font-medium text-red-900">Generic headline lacks specificity</h5>
<p className="text-sm text-red-700 mt-1">The headline uses generic terms like "complete digital solution" which doesn't communicate unique value or differentiate from competitors. It fails to address specific customer pain points or desired outcomes.</p>
<div className="mt-3 flex items-center space-x-4">
<span className="text-xs text-red-600 font-medium">Impact: High</span>
<span className="text-xs text-red-600">Conversion Rate Impact: -23%</span>
</div>
</div>
</div>
<div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
<div className="flex-shrink-0">
<i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
</div>
<div className="ml-3 flex-1">
<h5 className="text-sm font-medium text-red-900">Missing emotional hook and urgency</h5>
<p className="text-sm text-red-700 mt-1">No emotional connection or urgency to motivate immediate action. The copy reads like a corporate mission statement rather than compelling marketing copy.</p>
<div className="mt-3 flex items-center space-x-4">
<span className="text-xs text-red-600 font-medium">Impact: High</span>
<span className="text-xs text-red-600">Emotional Engagement: Low</span>
</div>
</div>
</div>
<div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
<div className="flex-shrink-0">
<i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
</div>
<div className="ml-3 flex-1">
<h5 className="text-sm font-medium text-red-900">Weak call-to-action button</h5>
<p className="text-sm text-red-700 mt-1">CTA "Learn More" is passive and doesn't create urgency. It suggests more reading rather than taking action, reducing conversion potential.</p>
<div className="mt-3 flex items-center space-x-4">
<span className="text-xs text-red-600 font-medium">Impact: Medium</span>
<span className="text-xs text-red-600">Click-through Rate: Below Average</span>
</div>
</div>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h4 className="text-base font-medium text-gray-900">AI-Generated Recommendations</h4>
<span className="text-xs text-gray-500">Generated with advanced copywriting AI</span>
</div>
<div className="space-y-6">

<div className="bg-green-50 rounded-lg border border-green-200 p-5">
<div className="flex items-center justify-between mb-3">
<h5 className="text-sm font-medium text-green-900">Optimized Headlines</h5>
<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">A/B Test Ready</span>
</div>
<div className="space-y-4">
<div className="bg-white rounded-md p-4 border border-green-200">
<div className="flex items-start justify-between">
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 mb-1">Option A (Results-Focused):</p>
<p className="text-lg text-gray-800">"Turn 23% More Website Visitors Into Paying Customers (In 30 Days)"</p>
<p className="text-sm text-gray-600 mt-2">✓ Specific metric ✓ Time-bound ✓ Clear outcome</p>
</div>
<div className="flex space-x-2 ml-4">
<button className="p-2 text-gray-400 hover:text-gray-600" onclick="copyToClipboard('Turn 23% More Website Visitors Into Paying Customers (In 30 Days)')">
<i className="fa-solid fa-copy"></i>
</button>
<button className="p-2 text-green-600 hover:text-green-800" onclick="acceptSuggestion('hero-section')">
<i className="fa-solid fa-check"></i>
</button>
</div>
</div>
</div>
<div className="bg-white rounded-md p-4 border border-green-200">
<div className="flex items-start justify-between">
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 mb-1">Option B (Problem-Solution):</p>
<p className="text-lg text-gray-800">"Stop Losing 67% of Your Website Traffic to Competitors"</p>
<p className="text-sm text-gray-600 mt-2">✓ Problem-focused ✓ Specific statistic ✓ Competitor angle</p>
</div>
<div className="flex space-x-2 ml-4">
<button className="p-2 text-gray-400 hover:text-gray-600" onclick="copyToClipboard('Stop Losing 67% of Your Website Traffic to Competitors')">
<i className="fa-solid fa-copy"></i>
</button>
<button className="p-2 text-green-600 hover:text-green-800" onclick="acceptSuggestion('hero-section')">
<i className="fa-solid fa-check"></i>
</button>
</div>
</div>
</div>
<div className="bg-white rounded-md p-4 border border-green-200">
<div className="flex items-start justify-between">
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 mb-1">Option C (Social Proof):</p>
<p className="text-lg text-gray-800">"Join 2,847 Businesses Already Boosting Revenue with Our Platform"</p>
<p className="text-sm text-gray-600 mt-2">✓ Social proof ✓ Specific number ✓ Revenue focus</p>
</div>
<div className="flex space-x-2 ml-4">
<button className="p-2 text-gray-400 hover:text-gray-600" onclick="copyToClipboard('Join 2,847 Businesses Already Boosting Revenue with Our Platform')">
<i className="fa-solid fa-copy"></i>
</button>
<button className="p-2 text-green-600 hover:text-green-800" onclick="acceptSuggestion('hero-section')">
<i className="fa-solid fa-check"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-blue-50 rounded-lg border border-blue-200 p-5">
<h5 className="text-sm font-medium text-blue-900 mb-3">Optimized Call-to-Action Buttons</h5>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white rounded-md p-3 border border-blue-200 text-center">
<button className="w-full bg-brand-primary text-white px-4 py-3 rounded-md font-medium hover:bg-brand-dark">
                                                            Start Your Free 14-Day Trial
                                                        </button>
<p className="text-xs text-gray-600 mt-2">Risk-free offer</p>
</div>
<div className="bg-white rounded-md p-3 border border-blue-200 text-center">
<button className="w-full bg-green-600 text-white px-4 py-3 rounded-md font-medium hover:bg-green-700">
                                                            Get My Conversion Analysis
                                                        </button>
<p className="text-xs text-gray-600 mt-2">Value-driven</p>
</div>
<div className="bg-white rounded-md p-3 border border-blue-200 text-center">
<button className="w-full bg-orange-600 text-white px-4 py-3 rounded-md font-medium hover:bg-orange-700">
                                                            See How It Works
                                                        </button>
<p className="text-xs text-gray-600 mt-2">Curiosity-driven</p>
</div>
</div>
</div>

<div className="bg-purple-50 rounded-lg border border-purple-200 p-5">
<h5 className="text-sm font-medium text-purple-900 mb-3">Supporting Subheading</h5>
<div className="bg-white rounded-md p-4 border border-purple-200">
<p className="text-gray-800">"Our AI-powered optimization platform has helped businesses like yours increase conversions by an average of 34% in just 30 days. No technical skills required."</p>
<div className="flex items-center justify-between mt-3">
<p className="text-xs text-gray-600">✓ Credibility ✓ Specific results ✓ Addresses concerns</p>
<button className="p-2 text-gray-400 hover:text-gray-600" onclick="copyToClipboard('Our AI-powered optimization platform has helped businesses like yours increase conversions by an average of 34% in just 30 days. No technical skills required.')">
<i className="fa-solid fa-copy"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-5">
<h4 className="text-base font-medium text-gray-900 mb-4">Implementation Guide</h4>
<div className="space-y-3">
<div className="flex items-center">
<div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">1</div>
<span className="text-sm text-gray-700">Replace current headline with Option A (highest conversion potential)</span>
</div>
<div className="flex items-center">
<div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">2</div>
<span className="text-sm text-gray-700">Add the supporting subheading below the main headline</span>
</div>
<div className="flex items-center">
<div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">3</div>
<span className="text-sm text-gray-700">Update CTA button to "Start Your Free 14-Day Trial"</span>
</div>
<div className="flex items-center">
<div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">4</div>
<span className="text-sm text-gray-700">Set up A/B test with Options B and C as variants</span>
</div>
</div>
<div className="mt-6 flex items-center justify-between p-4 bg-white rounded-md border border-gray-200">
<div>
<p className="text-sm font-medium text-gray-900">Estimated Impact</p>
<p className="text-xs text-gray-600">Based on similar optimization projects</p>
</div>
<div className="text-right">
<p className="text-lg font-bold text-green-600">+34%</p>
<p className="text-xs text-gray-500">Conversion Rate</p>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-6 border-t border-gray-200">
<div className="flex items-center space-x-4 text-sm text-gray-500">
<span><i className="fa-solid fa-clock mr-1"></i>Est. Time: 30 min</span>
<span><i className="fa-solid fa-user mr-1"></i>Skill Level: Easy</span>
<span><i className="fa-solid fa-trending-up mr-1"></i>Priority: High</span>
</div>
<div className="flex items-center space-x-3">
<button className="px-4 py-2 text-sm font-medium text-brand-primary border border-brand-primary rounded-md hover:bg-brand-light" onclick="showModal('create-task-modal')">
<i className="fa-solid fa-plus mr-1"></i>
                                                Create Task
                                            </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-brand-dark"></button></div></div></div></div></div></div></div></main></div></div>
    </>
  );
}
