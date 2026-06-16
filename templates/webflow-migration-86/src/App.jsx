import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchTab(tabName) {
            const chatgptView = document.getElementById('view-chatgpt');
            const claudeView = document.getElementById('view-claude');
            const chatgptBtn = document.getElementById('tab-chatgpt');
            const claudeBtn = document.getElementById('tab-claude');

            // Reset classes
            const activeBtnClass = "text-neutral-900 bg-white shadow-sm ring-1 ring-neutral-200";
            const inactiveBtnClass = "text-neutral-500 hover:text-neutral-900 bg-transparent shadow-none ring-0";

            if (tabName === 'chatgpt') {
                chatgptView.classList.remove('hidden');
                chatgptView.classList.add('block');
                claudeView.classList.add('hidden');
                claudeView.classList.remove('block');

                chatgptBtn.className = `relative z-10 px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-out ${activeBtnClass}`;
                claudeBtn.className = `relative z-10 px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-out ${inactiveBtnClass}`;
            } else {
                claudeView.classList.remove('hidden');
                claudeView.classList.add('block');
                chatgptView.classList.add('hidden');
                chatgptView.classList.remove('block');

                claudeBtn.className = `relative z-10 px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-out ${activeBtnClass}`;
                chatgptBtn.className = `relative z-10 px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-out ${inactiveBtnClass}`;
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-header border-b border-neutral-200/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-900 rounded-md flex items-center justify-center text-white text-xs font-semibold tracking-tighter">
                    CB
                </div>
<span className="text-sm font-semibold tracking-tight text-neutral-900">Custom Boxez Ltd</span>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:block text-xs font-medium text-neutral-400 bg-neutral-100 px-2 py-1 rounded-full">Webflow Migration Proposal</span>
<a className="text-xs font-medium text-neutral-900 hover:text-neutral-600 transition-colors" href="#">Download PDF</a>
</div>
</div>
</nav>
<main className="pt-28 pb-24 px-4 sm:px-6">
<div className="max-w-3xl mx-auto">

<div className="text-center mb-10 space-y-4">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Website Redevelopment</h1>
<p className="text-neutral-500 max-w-lg mx-auto text-sm leading-relaxed">
                    A comprehensive proposal to migrate Custom Boxez Limited from WordPress to Webflow, focusing on performance, scalability, and modern aesthetics.
                </p>
</div>

<div className="flex justify-center mb-12">
<div className="inline-flex bg-neutral-100 p-1 rounded-lg border border-neutral-200/50 relative">
<button className="relative z-10 px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-out text-neutral-900 bg-white shadow-sm ring-1 ring-neutral-200" id="tab-chatgpt" onclick="switchTab('chatgpt')">
                        Lean &amp; Agile (ChatGPT)
                    </button>
<button className="relative z-10 px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-out text-neutral-500 hover:text-neutral-900" id="tab-claude" onclick="switchTab('claude')">
                        Structured Phase (Claude)
                    </button>
</div>
</div>

<div className="fade-in block" id="view-chatgpt">

<div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 mb-8 shadow-sm">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
<div>
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-amber-500" icon="lucide:zap" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Approach</span>
</div>
<h2 className="text-lg font-semibold text-neutral-900 tracking-tight">Direct-to-Webflow Design</h2>
</div>
<div className="text-right">
<p className="text-2xl font-semibold text-neutral-900 tracking-tight">$6,700 – $9,150</p>
<p className="text-xs text-neutral-400 font-medium">Est. 6–8 Weeks</p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed border-t border-neutral-100 pt-4">
                        A streamlined scope that bypasses traditional wireframing to design directly inside Webflow. This approach prioritizes a modern, conversion-focused UI with a faster time-to-market.
                    </p>
</div>

<div className="space-y-4">

<div className="group bg-white rounded-lg border border-neutral-200 p-5 hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-xs font-medium text-neutral-600">1</span>
</div>
<h3 className="text-sm font-semibold text-neutral-900">Discovery &amp; Strategy</h3>
</div>
<span className="text-xs font-medium text-neutral-500 tabular-nums">$400–$600</span>
</div>
<ul className="pl-9 space-y-1.5 list-none">
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="mt-0.5 text-neutral-300" icon="lucide:check" width="14"></iconify-icon>
                                Audit UX, navigation, SEO &amp; technical integrations
                            </li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="mt-0.5 text-neutral-300" icon="lucide:check" width="14"></iconify-icon>
                                Define sitemap, CMS models &amp; lead capture workflow
                            </li>
</ul>
</div>

<div className="group bg-white rounded-lg border border-neutral-200 p-5 hover:border-neutral-300 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-neutral-50 to-transparent -mr-4 -mt-4 rounded-bl-3xl z-0"></div>
<div className="flex justify-between items-start mb-3 relative z-10">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
<span className="text-xs font-medium text-white">2</span>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900">UI Design &amp; Webflow Build</h3>
<p className="text-xs text-neutral-400 mt-1">Core Deliverable</p>
</div>
</div>
<span className="text-xs font-medium text-neutral-900 tabular-nums">$4,800–$6,200</span>
</div>
<div className="pl-9 relative z-10">
<p className="text-xs text-neutral-500 mb-3 leading-relaxed">
                                Modern redesign directly in Webflow Designer. Mobile-first structure, interactive UI, pixel-perfect layout.
                            </p>
<div className="grid grid-cols-2 gap-2 mb-3">
<div className="bg-neutral-50 rounded border border-neutral-100 px-2 py-1.5 text-[10px] font-medium text-neutral-500">Homepage &amp; About</div>
<div className="bg-neutral-50 rounded border border-neutral-100 px-2 py-1.5 text-[10px] font-medium text-neutral-500">Products &amp; Industry CMS</div>
<div className="bg-neutral-50 rounded border border-neutral-100 px-2 py-1.5 text-[10px] font-medium text-neutral-500">Case Studies &amp; Blog</div>
<div className="bg-neutral-50 rounded border border-neutral-100 px-2 py-1.5 text-[10px] font-medium text-neutral-500">Contact/RFQ Flow</div>
</div>
</div>
</div>

<div className="group bg-white rounded-lg border border-neutral-200 p-5 hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-xs font-medium text-neutral-600">3</span>
</div>
<h3 className="text-sm font-semibold text-neutral-900">Content Migration</h3>
</div>
<span className="text-xs font-medium text-neutral-500 tabular-nums">$600–$900</span>
</div>
<ul className="pl-9 space-y-1.5 list-none">
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="mt-0.5 text-neutral-300" icon="lucide:arrow-right-left" width="14"></iconify-icon>
                                Transfer WordPress content to Webflow CMS
                            </li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="mt-0.5 text-neutral-300" icon="lucide:image" width="14"></iconify-icon>
                                Image compression &amp; accessibility tagging
                            </li>
<li className="flex items-start gap-2 text-xs text-neutral-500">
<iconify-icon className="mt-0.5 text-neutral-300" icon="lucide:link" width="14"></iconify-icon>
                                URL structure replication &amp; 301 redirects
                            </li>
</ul>
</div>

<div className="group bg-white rounded-lg border border-neutral-200 p-5 hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-xs font-medium text-neutral-600">4</span>
</div>
<h3 className="text-sm font-semibold text-neutral-900">QA &amp; Performance</h3>
</div>
<span className="text-xs font-medium text-neutral-500 tabular-nums">$450–$650</span>
</div>
<p className="pl-9 text-xs text-neutral-500 leading-relaxed">
                            Cross-browser testing, Lighthouse performance tuning, SEO meta setup, and CRM routing verification.
                        </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white rounded-lg border border-neutral-200 p-5">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-neutral-900">5. Launch Prep</span>
<span className="text-xs text-neutral-500">$150–$300</span>
</div>
<p className="text-xs text-neutral-400">DNS config, backups, final SEO audit.</p>
</div>
<div className="bg-white rounded-lg border border-neutral-200 p-5">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-neutral-900">6. Post-Launch</span>
<span className="text-xs text-neutral-500">$300–$500</span>
</div>
<p className="text-xs text-neutral-400">14-day monitoring + Team Training.</p>
</div>
</div>
</div>
</div>

<div className="hidden fade-in" id="view-claude">

<div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 mb-8 shadow-sm">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
<div>
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-indigo-500" icon="lucide:layers" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Approach</span>
</div>
<h2 className="text-lg font-semibold text-neutral-900 tracking-tight">Design System &amp; Discovery First</h2>
</div>
<div className="text-right">
<p className="text-2xl font-semibold text-neutral-900 tracking-tight">$7,800 – $10,400</p>
<p className="text-xs text-neutral-400 font-medium">Est. 9–10 Weeks</p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed border-t border-neutral-100 pt-4">
                        A traditional, highly structured workflow beginning with a deep discovery phase, followed by a dedicated visual design phase before development begins. Best for complex stakeholder needs.
                    </p>
</div>

<div className="space-y-6 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[1px] before:bg-neutral-200">

<div className="relative pl-10">
<div className="absolute left-3 top-1.5 w-2.5 h-2.5 bg-white border-2 border-neutral-300 rounded-full z-10"></div>
<div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
<div className="flex justify-between mb-2">
<h3 className="text-sm font-semibold text-neutral-900">Phase 1: Discovery &amp; Strategy</h3>
<span className="text-xs font-medium text-neutral-500">$800–$1,000</span>
</div>
<p className="text-xs text-neutral-500 mb-3">Comprehensive audit, SEO analysis, and technical requirements documentation.</p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Site Audit</span>
<span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Migration Map</span>
<span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Timeline</span>
</div>
</div>
</div>

<div className="relative pl-10">
<div className="absolute left-3 top-1.5 w-2.5 h-2.5 bg-indigo-600 border-2 border-white ring-1 ring-indigo-600 rounded-full z-10 shadow-sm"></div>
<div className="bg-white rounded-lg border border-indigo-100 ring-1 ring-indigo-50 p-5 shadow-sm">
<div className="flex justify-between mb-2">
<h3 className="text-sm font-semibold text-neutral-900">Phase 2: UI Design &amp; Direction</h3>
<span className="text-xs font-semibold text-indigo-600">$1,500–$2,000</span>
</div>
<p className="text-xs text-neutral-500 mb-3">Create modern, conversion-focused design system and interactive prototypes.</p>
<ul className="space-y-1">
<li className="text-xs text-neutral-500 flex items-center gap-2"><iconify-icon icon="lucide:layout-template" width="12"></iconify-icon> Homepage &amp; Service Templates</li>
<li className="text-xs text-neutral-500 flex items-center gap-2"><iconify-icon icon="lucide:palette" width="12"></iconify-icon> Style Guide &amp; Design System</li>
</ul>
</div>
</div>

<div className="relative pl-10">
<div className="absolute left-3 top-1.5 w-2.5 h-2.5 bg-white border-2 border-neutral-300 rounded-full z-10"></div>
<div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
<div className="flex justify-between mb-2">
<h3 className="text-sm font-semibold text-neutral-900">Phase 3: Webflow Development</h3>
<span className="text-xs font-medium text-neutral-500">$2,500–$3,500</span>
</div>
<p className="text-xs text-neutral-500 mb-3">Responsive, pixel-perfect build with CMS setup for Products, Industries, Blog, and Case Studies.</p>
<div className="grid grid-cols-2 gap-2">
<div className="p-2 bg-neutral-50 rounded text-[10px] text-neutral-600">Advanced CMS Setup</div>
<div className="p-2 bg-neutral-50 rounded text-[10px] text-neutral-600">Custom Interactions</div>
<div className="p-2 bg-neutral-50 rounded text-[10px] text-neutral-600">Lead Capture Routing</div>
<div className="p-2 bg-neutral-50 rounded text-[10px] text-neutral-600">Speed Optimization</div>
</div>
</div>
</div>

<div className="relative pl-10">
<div className="absolute left-3 top-1.5 w-2.5 h-2.5 bg-white border-2 border-neutral-300 rounded-full z-10"></div>
<div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
<div className="flex justify-between mb-2">
<h3 className="text-sm font-semibold text-neutral-900">Phase 4: Content &amp; SEO Migration</h3>
<span className="text-xs font-medium text-neutral-500">$1,200–$1,500</span>
</div>
<p className="text-xs text-neutral-500">Transfer content, 301 redirect mapping, image optimization and metadata review.</p>
</div>
</div>

<div className="relative pl-10">
<div className="absolute left-3 top-1.5 w-2.5 h-2.5 bg-white border-2 border-neutral-300 rounded-full z-10"></div>
<div className="grid gap-3">
<div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm flex justify-between items-center">
<div>
<h3 className="text-xs font-semibold text-neutral-900">Phase 5: QA &amp; Testing</h3>
<p className="text-[10px] text-neutral-400">Cross-browser &amp; device checks</p>
</div>
<span className="text-xs font-medium text-neutral-500">$600–$800</span>
</div>
<div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm flex justify-between items-center">
<div>
<h3 className="text-xs font-semibold text-neutral-900">Phase 6: Pre-Launch</h3>
<p className="text-[10px] text-neutral-400">DNS &amp; Go-Live</p>
</div>
<span className="text-xs font-medium text-neutral-500">$400–$600</span>
</div>
<div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm flex justify-between items-center">
<div>
<h3 className="text-xs font-semibold text-neutral-900">Phase 7: Support</h3>
<p className="text-[10px] text-neutral-400">Training &amp; 14-day monitoring</p>
</div>
<span className="text-xs font-medium text-neutral-500">$800–$1,000</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center border-t border-neutral-200 pt-10">
<p className="text-sm text-neutral-500 mb-6">Ready to proceed with the modern B2B transformation?</p>
<button className="bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium py-3 px-8 rounded-full shadow-lg shadow-neutral-200 transition-all transform hover:-translate-y-0.5">
                    Schedule Kick-off Call
                </button>
</div>
</div>
</main>
<footer className="bg-white border-t border-neutral-200 py-12">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 Custom Boxez Limited Proposal. Confidential.</p>
<div className="flex gap-6">
<a className="text-xs text-neutral-400 hover:text-neutral-900" href="#">Terms</a>
<a className="text-xs text-neutral-400 hover:text-neutral-900" href="#">Privacy</a>
</div>
</div>
</footer>


    </>
  );
}
