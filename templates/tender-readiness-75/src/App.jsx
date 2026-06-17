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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-slate-900 font-semibold tracking-tighter text-lg">Tenderboss</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#system">The System</a>
<a className="hover:text-slate-900 transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Value</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 hidden sm:block" href="#">Log in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors shadow-sm ring-1 ring-slate-900/5" href="#">
                    Start Assessment
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">System Status: Active</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Be ready before the<br className="hidden md:block"/> opportunity exists.
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
                Tenderboss is the operating system that keeps your business in control of tender readiness. We don't just write bids; we install the architecture to win them.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200/50">
<span>Install the System</span>
<span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all">
                    How it works
                </button>
</div>

<div className="relative max-w-5xl mx-auto mt-12 rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/40 overflow-hidden delay-100 animate-fade-in text-left">
<div className="border-b border-slate-100 bg-slate-50/50 p-4 flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="h-6 w-px bg-slate-200 mx-2"></div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
                        Assets Synced
                    </div>
</div>
<div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white">

<div className="p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-slate-900">Core Asset Library</h3>
<span className="text-xs text-slate-400">Live</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
<div className="p-1.5 bg-white border border-slate-200 rounded text-slate-500">
<span className="iconify" data-icon="lucide:file-text" data-width="14"></span>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-slate-200 rounded mb-1.5"></div>
<div className="h-1.5 w-12 bg-slate-100 rounded"></div>
</div>
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2" data-width="14"></span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
<div className="p-1.5 bg-white border border-slate-200 rounded text-slate-500">
<span className="iconify" data-icon="lucide:shield" data-width="14"></span>
</div>
<div className="flex-1">
<div className="h-2 w-20 bg-slate-200 rounded mb-1.5"></div>
<div className="h-1.5 w-16 bg-slate-100 rounded"></div>
</div>
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2" data-width="14"></span>
</div>
</div>
</div>

<div className="p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-slate-900">Gap Detection</h3>
<span className="text-xs text-amber-500 font-medium">1 Attention</span>
</div>
<div className="space-y-4">
<div className="p-3 rounded-lg border border-amber-100 bg-amber-50/50">
<div className="flex items-start gap-2 mb-2">
<span className="iconify text-amber-500 mt-0.5" data-icon="lucide:alert-triangle" data-width="14"></span>
<p className="text-xs text-amber-900 font-medium leading-relaxed">ISO Certification expires in 45 days. Update asset to maintain readiness.</p>
</div>
<button className="text-xs bg-white border border-amber-200 text-amber-700 px-2 py-1 rounded hover:bg-amber-50 transition-colors">Resolve</button>
</div>
</div>
</div>

<div className="p-6 bg-slate-50/30">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-slate-900">Readiness Score</h3>
</div>
<div className="flex flex-col items-center justify-center py-4">
<div className="relative flex items-center justify-center w-24 h-24 rounded-full border-4 border-slate-100 mb-3">
<svg className="absolute w-24 h-24 transform -rotate-90 text-slate-900" viewbox="0 0 100 100">
<circle className="opacity-100" cx="50" cy="50" fill="none" r="46" stroke="currentColor" stroke-dasharray="289" stroke-dashoffset="30" strokeWidth="8"></circle>
</svg>
<span className="text-2xl font-medium text-slate-900 tracking-tight">92%</span>
</div>
<p className="text-xs text-slate-500 text-center">System primed for<br/>Government &amp; Enterprise</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">
                        The Blank Page Panic.
                    </h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Most organisations don't lose because they are unqualified. They lose because readiness only happens <em>after</em> an opportunity appears. Assets are scattered, drafting is rushed, and compliance is stressful.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-600 text-sm">
<span className="iconify text-slate-400 mt-0.5" data-icon="lucide:x" data-width="16"></span>
                            Scattered assets across folders and personnel
                        </li>
<li className="flex items-start gap-3 text-slate-600 text-sm">
<span className="iconify text-slate-400 mt-0.5" data-icon="lucide:x" data-width="16"></span>
                            Inconsistent submissions and tone
                        </li>
</ul>
</div>
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">
                        The Tenderboss Protocol.
                    </h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        We remove the chaos by installing a system that is always on. A centralised asset intelligence that improves over time, ensuring you are ready to respond in a day, not scrambling for weeks.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-600 text-sm">
<span className="iconify text-emerald-500 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Centralised, structured asset system
                        </li>
<li className="flex items-start gap-3 text-slate-600 text-sm">
<span className="iconify text-emerald-500 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Review drafts before you even click apply
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden" id="workflow">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 block">The Workflow</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">
                    The Universal Opportunity Inbox.
                </h2>
<p className="text-slate-500">
                    Stop monitoring ten different portals. Tenderboss ingests opportunities from everywhere, centralises them, and manages the lifecycle from identification to submission.
                </p>
</div>

<div className="relative grid lg:grid-cols-12 gap-6 items-center">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-px border-t border-dashed border-slate-200 -z-10"></div>

<div className="lg:col-span-3 space-y-3 z-10">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 pl-1">Input Sources</div>
<div className="group flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:globe" data-width="16"></span>
</div>
<span className="text-sm font-medium text-slate-700">Gov Portals</span>
</div>
<span className="iconify text-slate-300 group-hover:text-slate-500 transition-colors" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
<div className="group flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
</div>
<span className="text-sm font-medium text-slate-700">Email Direct</span>
</div>
<span className="iconify text-slate-300 group-hover:text-slate-500 transition-colors" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
<div className="group flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:radar" data-width="16"></span>
</div>
<span className="text-sm font-medium text-slate-700">Market Scanners</span>
</div>
<span className="iconify text-slate-300 group-hover:text-slate-500 transition-colors" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>

<div className="lg:col-span-1 flex justify-center py-4 lg:py-0">
<span className="iconify text-slate-300 rotate-90 lg:rotate-0" data-icon="lucide:chevron-right" data-width="24"></span>
</div>

<div className="lg:col-span-4 z-10">
<div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/50 overflow-hidden">

<div className="bg-slate-50/80 backdrop-blur border-b border-slate-100 p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-slate-900" data-icon="lucide:inbox" data-width="16"></span>
<span className="text-sm font-semibold text-slate-900">Universal Inbox</span>
</div>
<div className="flex gap-1">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<span className="text-[10px] font-medium text-slate-500 uppercase">Live</span>
</div>
</div>

<div className="divide-y divide-slate-50">

<div className="p-4 hover:bg-slate-50 transition-colors cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">New</span>
<span className="text-xs text-slate-400">2m ago</span>
</div>
<h4 className="text-sm font-medium text-slate-900 truncate">Dept of Transport - Cloud Migration</h4>
<p className="text-xs text-slate-500 mt-1 truncate">Source: AusTender • Match Score: 94%</p>
</div>

<div className="p-4 bg-slate-50/50">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">Processing</span>
<span className="text-xs text-slate-400">1h ago</span>
</div>
<h4 className="text-sm font-medium text-slate-700 truncate">Regional Council - Legal Services</h4>
<p className="text-xs text-slate-500 mt-1 truncate">Source: Email • Analyzing Gaps...</p>
</div>

<div className="p-4">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Ready</span>
<span className="text-xs text-slate-400">4h ago</span>
</div>
<h4 className="text-sm font-medium text-slate-700 truncate">Health Logistics Panel RFP</h4>
<p className="text-xs text-slate-500 mt-1 truncate">Draft generated based on assets.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 flex justify-center py-4 lg:py-0">
<span className="iconify text-slate-300 rotate-90 lg:rotate-0" data-icon="lucide:chevron-right" data-width="24"></span>
</div>

<div className="lg:col-span-3 z-10">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 pl-1">Execution Pipeline</div>
<div className="relative pl-6 space-y-6 border-l border-slate-200 ml-3">

<div className="relative">
<div className="absolute -left-[31px] bg-white p-1">
<div className="w-4 h-4 rounded-full border-2 border-slate-300 bg-white"></div>
</div>
<h4 className="text-sm font-medium text-slate-900">Identify &amp; Qualify</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                AI parses docs to flag risks and confirm asset readiness instantly.
                            </p>
</div>

<div className="relative">
<div className="absolute -left-[31px] bg-white p-1">
<div className="w-4 h-4 rounded-full border-2 border-slate-300 bg-white"></div>
</div>
<h4 className="text-sm font-medium text-slate-900">Manage &amp; Draft</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                System auto-populates responses using your validated asset library.
                            </p>
</div>

<div className="relative">
<div className="absolute -left-[31px] bg-white p-1">
<div className="w-4 h-4 rounded-full border-2 border-slate-900 bg-slate-900 shadow-sm"></div>
</div>
<h4 className="text-sm font-medium text-slate-900">Submit</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                Final review and export. Consistent, compliant, and on time.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-slate-100">
<div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-slate-800/50 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
                    Ownership stays with you.
                </h2>
<p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
                    Generic tools create dependency. Tenderboss creates capability. We do not write or submit on your behalf. We provide the infrastructure that makes your team elite, consistent, and continuously ready.
                </p>
<div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-300">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span>
                        Data Privacy First
                    </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700">
<span className="iconify" data-icon="lucide:users" data-width="12"></span>
                        For Internal Teams
                    </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700">
<span className="iconify" data-icon="lucide:history" data-width="12"></span>
                        Improves Over Time
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">
                        Invest in continuity, not just output.
                    </h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Tenderboss is not a one-off service. It is a one-time implementation to install the system, followed by a low-maintenance subscription to keep your readiness operational.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex gap-4 items-start">
<div className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center shrink-0 text-slate-600 mt-0.5">
<span className="text-xs font-bold">1</span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Implementation</h4>
<p className="text-sm text-slate-500 mt-1">We structure your existing chaos into the system.</p>
</div>
</div>
<div className="h-6 w-px bg-slate-200 ml-3"></div>
<div className="flex gap-4 items-start">
<div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center shrink-0 text-white mt-0.5">
<span className="text-xs font-bold">2</span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Ongoing Readiness</h4>
<p className="text-sm text-slate-500 mt-1">Maintenance and optimization from under <span className="text-slate-900 font-semibold">$20 per day</span>.</p>
</div>
</div>
</div>
</div>

<div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40">
<div className="absolute top-0 right-0 p-6 opacity-10">
<span className="iconify" data-icon="lucide:infinity" data-width="64"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Enterprise Operating Role</h3>
<p className="text-sm text-slate-500 mb-8">For operationally mature teams competing for high-value contracts.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-slate-400" data-icon="lucide:check" data-width="16"></span>
                            Full Asset System Implementation
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-slate-400" data-icon="lucide:check" data-width="16"></span>
                            AI Gap Detection &amp; Guidance
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-slate-400" data-icon="lucide:check" data-width="16"></span>
                            Unlimited Draft Structuring
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-slate-400" data-icon="lucide:check" data-width="16"></span>
                            Continuous Optimisation
                        </div>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-sm py-3 rounded-lg hover:bg-slate-800 transition-colors">
                        Qualify your business
                    </button>
<p className="text-center text-xs text-slate-400 mt-4">
                        We prioritize qualification over sales.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-16 px-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<span className="text-slate-900 font-semibold tracking-tighter text-lg block mb-4">Tenderboss</span>
<p className="text-sm text-slate-500 max-w-sm">
                    The operating system that keeps your business in control of tender readiness — before opportunities appear.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">The System</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Asset Management</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Login</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Tenderboss Systems. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
