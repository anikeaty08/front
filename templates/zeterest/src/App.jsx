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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/60 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold tracking-tighter text-sm">Z</span>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">Zero Interest Fund</span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#mission">Mission</a>
<a className="hover:text-zinc-900 transition-colors" href="#model">The Model</a>
<a className="hover:text-zinc-900 transition-colors" href="#roadmap">Roadmap</a>
<a className="hover:text-zinc-900 transition-colors" href="#partners">Partners</a>
</div>
<a className="text-xs font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#contact">
                Partner with us
            </a>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-40 pointer-events-none">
<div className="absolute top-[10%] left-[10%] w-64 h-64 bg-zinc-200 rounded-full blur-3xl"></div>
<div className="absolute top-[20%] right-[10%] w-96 h-96 bg-zinc-200 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600">Pilot Phase 2026-2028</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Capital for <span className="text-zinc-400">Housing Security</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-10">
                A zero-interest banking initiative empowering social entrepreneurs, foster youth, and the underserved to build housing-backed businesses and sovereign communities.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group">
                    View the Roadmap
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-zinc-200 text-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all">
                    Read the Manifesto
                </button>
</div>
</div>
</header>

<section className="py-24 border-t border-zinc-200 bg-white" id="mission">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

<div className="relative">
<div className="absolute -left-4 -top-4 w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pl-12">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">The Challenge</h3>
<p className="text-zinc-500 leading-relaxed mb-6">
                            Traditional financing is extractive. Social entrepreneurs, especially marginalized leaders, lack stable capital and housing. Philanthropy often excludes salaries and sustainability, leaving change-makers without a stable operating base to empower the underserved.
                        </p>
</div>
</div>

<div className="relative">
<div className="absolute -left-4 -top-4 w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pl-12">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">The Solution</h3>
<p className="text-zinc-500 leading-relaxed mb-6">
                            A zero-interest fund treating homes as business entities. We pair housing with income-generating ventures (senior care, agri-tech) to repay loans and contribute back to the fund. This creates a circular economy of housing sovereignty for foster youth, orphans, and entrepreneurs.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6 mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Strategic Goals</h2>
<p className="text-zinc-500 mt-2">Building an ecosystem of care and capital.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon icon="solar:hand-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Zero-Interest Capital</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-prose">
                    Providing stable funding prioritizing foster youth, orphans, and those with special needs. Once loans are repaid, recipients own their base and are encouraged to contribute back to the fund.
                </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">RayNari Ventures</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Construction and Architecture services acting as the engine for capital fund development and housing creation.
                </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">ISEED University</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    A JD cohort apprenticeship program driving capital development and capacity building for local communities through education.
                </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Trust &amp; Coalition</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-prose">
                    Creating a Financial &amp; Land Trust for the vulnerable. Building a coalition of Mayors, investors, faith-based agencies, and corporations to secure the future.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200" id="model">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Housing-Backed Businesses</h2>
<p className="text-zinc-500 mt-4">We finance homes that double as operational bases for high-impact social services.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-100 bg-zinc-50 text-center group hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 mb-3 transition-colors" icon="solar:wheelchair-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-semibold text-zinc-900">Senior Care</span>
</div>
<div className="flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-100 bg-zinc-50 text-center group hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 mb-3 transition-colors" icon="solar:face-scan-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-semibold text-zinc-900">Childcare</span>
</div>
<div className="flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-100 bg-zinc-50 text-center group hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 mb-3 transition-colors" icon="solar:chef-hat-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-semibold text-zinc-900">Food Innovation</span>
</div>
<div className="flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-100 bg-zinc-50 text-center group hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 mb-3 transition-colors" icon="solar:sprout-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-semibold text-zinc-900">Agri-Production</span>
</div>
<div className="flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-100 bg-zinc-50 text-center group hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 mb-3 transition-colors" icon="solar:map-point-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-semibold text-zinc-900">Eco-Tourism</span>
</div>
<div className="flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-100 bg-zinc-50 text-center group hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 mb-3 transition-colors" icon="solar:home-smile-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-semibold text-zinc-900">Resilient Build</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white" id="roadmap">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Capital Outlook</h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                        From a pilot program in Washington and Michigan to a global ecosystem of 100+ social entrepreneurs.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Seattle, Bellevue, Redmond, WA</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Detroit &amp; Ann Arbor, MI</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon icon="solar:globe-linear" width="18"></iconify-icon>
<span>Global Hubs</span>
</div>
</div>
</div>
<div className="lg:col-span-2 space-y-12 relative pl-8 border-l border-zinc-800">

<div className="relative">
<span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-zinc-900 bg-emerald-500"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
<span className="text-emerald-400 font-mono text-lg font-medium">2026</span>
<span className="text-2xl font-semibold tracking-tight">$5-10 Million</span>
</div>
<p className="text-zinc-400 text-sm mb-4">Pilot Phase</p>
<ul className="text-zinc-500 text-sm space-y-2">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                5 Homes for social entrepreneurs in WA.
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                10 Homes in Detroit (~50k each).
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Site acquisition in Ann Arbor for RayNari Wellness EcoResort &amp; Lab.
                            </li>
</ul>
</div>

<div className="relative">
<span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-zinc-900 bg-zinc-700"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
<span className="text-zinc-500 font-mono text-lg font-medium">2027</span>
<span className="text-2xl font-semibold tracking-tight">$10 Million</span>
</div>
<p className="text-zinc-400 text-sm mb-4">Expansion</p>
<p className="text-zinc-500 text-sm">Expand to 10 social entrepreneurs and refine program model and partnerships.</p>
</div>

<div className="relative">
<span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-zinc-900 bg-zinc-700"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
<span className="text-zinc-500 font-mono text-lg font-medium">2028</span>
<span className="text-2xl font-semibold tracking-tight">$100 Million</span>
</div>
<p className="text-zinc-400 text-sm mb-4">Scale</p>
<p className="text-zinc-500 text-sm">Scale program to support 100+ social entrepreneurs empowering the underserved.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200" id="partners">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Ecosystem Partners</h2>
<p className="text-zinc-500 text-sm mt-2">Collaborating with global leaders in education, government, and service.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8">

<div className="col-span-2 md:col-span-4 lg:col-span-5 border-b border-zinc-100 pb-2 mb-2">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Research &amp; Education</span>
</div>
<div className="text-sm font-medium text-zinc-700">UW Climate Justice</div>
<div className="text-sm font-medium text-zinc-700">Harvard University</div>
<div className="text-sm font-medium text-zinc-700">Yale University</div>
<div className="text-sm font-medium text-zinc-700">Wayne State</div>
<div className="text-sm font-medium text-zinc-700">Foster School of Business</div>

<div className="col-span-2 md:col-span-4 lg:col-span-5 border-b border-zinc-100 pb-2 mb-2 mt-4">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Government &amp; Agencies</span>
</div>
<div className="text-sm font-medium text-zinc-700">US Dept of Commerce</div>
<div className="text-sm font-medium text-zinc-700">WA Dept of Agriculture</div>
<div className="text-sm font-medium text-zinc-700">FAO (UN)</div>
<div className="text-sm font-medium text-zinc-700">Yunus Centre</div>
<div className="text-sm font-medium text-zinc-700">Humanitarian Tracker</div>

<div className="col-span-2 md:col-span-4 lg:col-span-5 border-b border-zinc-100 pb-2 mb-2 mt-4">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Service &amp; Private Sector</span>
</div>
<div className="text-sm font-medium text-zinc-700">Global Social Business Partners</div>
<div className="text-sm font-medium text-zinc-700">RayNari Construction</div>
<div className="text-sm font-medium text-zinc-700">Rotary International</div>
<div className="text-sm font-medium text-zinc-700">Healthquest Chiropractic</div>
<div className="text-sm font-medium text-zinc-700">Friends of the Village</div>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<span className="font-semibold tracking-tighter text-xs">Z</span>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">Zero Interest Fund</span>
</div>
<p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                    Organized by RayNari and Global Social Business Partners (GSBP). 
                    <br/>Est. 2010.
                </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="font-semibold text-sm text-zinc-900 mb-4">Organization</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">About RayNari</a></li>
<li><a className="hover:text-zinc-900" href="#">ISEED University</a></li>
<li><a className="hover:text-zinc-900" href="#">GSBP History</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-zinc-900 mb-4">Connect</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Partner Inquiry</a></li>
<li><a className="hover:text-zinc-900" href="#">Investor Relations</a></li>
<li><a className="hover:text-zinc-900" href="#">Community</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-200 flex justify-between items-center text-xs text-zinc-400">
<p>© 2026 Zero Interest Fund. All rights reserved.</p>
<p>Designed for impact.</p>
</div>
</footer>

    </>
  );
}
