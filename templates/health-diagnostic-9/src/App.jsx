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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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

<aside className="hidden md:flex flex-col w-64 bg-white border-r border-zinc-200 h-full">
<div className="p-6 flex items-center">
<span className="text-xl font-semibold tracking-tighter text-zinc-900">N O V A</span>
</div>
<nav className="flex-1 px-4 space-y-1 overflow-y-auto">
<p className="px-2 text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2 mt-4">Main</p>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg bg-zinc-100 text-zinc-900 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon>
                    Book Test
                </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                    Appointments
                </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                    My Reports
                </a>
<p className="px-2 text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2 mt-8">Account</p>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                    Family Members
                </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
                    Billing &amp; Orders
                </a>
</nav>
<div className="p-4 border-t border-zinc-200">
<button className="flex items-center gap-3 w-full px-2 py-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 text-sm font-medium transition-colors">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                    Settings
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden">

<header className="bg-white border-b border-zinc-200 px-4 md:px-8 py-4 flex items-center justify-between z-10 sticky top-0">
<div className="flex items-center gap-4 md:hidden">
<button className="text-zinc-500 hover:text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<span className="text-lg font-semibold tracking-tighter text-zinc-900">N O V A</span>
</div>
<div className="hidden md:flex items-center max-w-md w-full relative">
<iconify-icon className="absolute left-3 text-zinc-400 text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-zinc-400 text-zinc-900" placeholder="Search tests, packages, or labs..." type="text"/>
</div>
<div className="flex items-center gap-4 ml-auto">
<button className="relative p-2 text-zinc-500 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-50">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full border border-white"></span>
</button>
<div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium text-sm border border-indigo-200 cursor-pointer">
                        JD
                    </div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">
<div className="max-w-5xl mx-auto space-y-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Good morning, Julian</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your health tests and view latest reports.</p>
</div>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2">
<iconify-icon className="text-lg" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Book New Test
                        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Home Collection</h3>
<p className="text-xs text-zinc-500 mb-4 flex-1">Schedule a phlebotomist to collect samples from your home.</p>
<span className="text-xs font-medium text-indigo-600 flex items-center gap-1 mt-auto">
                                Schedule now <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:upload-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Upload Prescription</h3>
<p className="text-xs text-zinc-500 mb-4 flex-1">Upload your doctor's prescription and we'll build your cart.</p>
<span className="text-xs font-medium text-emerald-600 flex items-center gap-1 mt-auto">
                                Upload file <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Visit Center</h3>
<p className="text-xs text-zinc-500 mb-4 flex-1">Find a diagnostic center near you to walk in for tests.</p>
<span className="text-xs font-medium text-orange-600 flex items-center gap-1 mt-auto">
                                Find location <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Active Order</h2>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700" href="#">View details</a>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
<div className="flex items-start justify-between mb-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 text-zinc-600">
<iconify-icon className="text-xl" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900">Comprehensive Full Body Panel</h3>
<p className="text-xs text-zinc-500 mt-1">Home Collection • Order #ORD-8921</p>
<div className="flex items-center gap-2 mt-2">
<iconify-icon className="text-zinc-400 text-sm" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-zinc-700">Tomorrow, 08:00 AM - 09:00 AM</span>
</div>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                                            In Progress
                                        </span>
</div>

<div className="relative pt-2">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-zinc-200"></div>
</div>
<div className="relative flex justify-between">
<div className="flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-4 ring-white">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-4 ring-white">
<iconify-icon className="text-white text-xs" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center justify-center w-6 h-6 bg-white border-2 border-zinc-300 rounded-full ring-4 ring-white">
<div className="w-2 h-2 bg-transparent rounded-full"></div>
</div>
<div className="flex items-center justify-center w-6 h-6 bg-white border-2 border-zinc-300 rounded-full ring-4 ring-white"></div>
</div>
</div>
<div className="flex justify-between mt-3 text-xs text-zinc-500">
<span className="text-zinc-900 font-medium">Booked</span>
<span className="text-zinc-900 font-medium text-center">Agent Assigned<br/><span className="text-zinc-500 font-normal">Michael T.</span></span>
<span className="text-center">Sample<br/>Collected</span>
<span className="text-right">Report<br/>Ready</span>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Recent Reports</h2>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900" href="#">View all</a>
</div>
<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<ul className="divide-y divide-zinc-100">
<li className="p-4 hover:bg-zinc-50 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:file-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Complete Blood Count (CBC)</p>
<p className="text-xs text-zinc-500 mt-0.5">Oct 12, 2023 • Self</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:inline-flex items-center px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
                                                    Ready
                                                </span>
<button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors" title="Download PDF">
<iconify-icon className="text-lg" icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</li>
<li className="p-4 hover:bg-zinc-50 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:file-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Lipid Profile</p>
<p className="text-xs text-zinc-500 mt-0.5">Sep 05, 2023 • Self</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:inline-flex items-center px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
                                                    Ready
                                                </span>
<button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors" title="Download PDF">
<iconify-icon className="text-lg" icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</li>
<li className="p-4 hover:bg-zinc-50 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-zinc-100 text-zinc-500 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:file-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Thyroid Profile (T3, T4, TSH)</p>
<p className="text-xs text-zinc-500 mt-0.5">Aug 20, 2023 • Martha (Mother)</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:inline-flex items-center px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
                                                    Ready
                                                </span>
<button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors" title="Download PDF">
<iconify-icon className="text-lg" icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</li>
</ul>
</div>
</section>
</div>

<div className="space-y-6">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900 mb-4">Recommended Packages</h2>
<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm relative overflow-hidden group hover:border-indigo-200 transition-colors">
<div className="absolute top-0 right-0 p-3">
<span className="bg-indigo-50 text-indigo-700 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded">Popular</span>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 pr-12">Essential Health Check</h3>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-xs text-zinc-600">
<iconify-icon className="text-emerald-500 text-sm flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                        Includes 65 parameters (CBC, Lipid, Liver, Kidney)
                                    </li>
<li className="flex items-start gap-2 text-xs text-zinc-600">
<iconify-icon className="text-emerald-500 text-sm flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                        Free Home Sample Collection
                                    </li>
<li className="flex items-start gap-2 text-xs text-zinc-600">
<iconify-icon className="text-emerald-500 text-sm flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                        Reports in 24 hrs
                                    </li>
</ul>
<div className="flex items-center justify-between border-t border-zinc-100 pt-4 mt-auto">
<div>
<span className="text-lg font-semibold tracking-tight text-zinc-900">$89</span>
<span className="text-xs text-zinc-400 line-through ml-1">$120</span>
</div>
<button className="px-3 py-1.5 bg-zinc-100 text-zinc-900 text-xs font-medium rounded hover:bg-zinc-200 transition-colors">Add</button>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm relative overflow-hidden group hover:border-indigo-200 transition-colors">
<h3 className="text-base font-medium text-zinc-900 mb-2">Vitamin Profile</h3>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-xs text-zinc-600">
<iconify-icon className="text-emerald-500 text-sm flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                        Vitamin D &amp; B12 Levels
                                    </li>
<li className="flex items-start gap-2 text-xs text-zinc-600">
<iconify-icon className="text-emerald-500 text-sm flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                        Fasting not required
                                    </li>
</ul>
<div className="flex items-center justify-between border-t border-zinc-100 pt-4 mt-auto">
<div>
<span className="text-lg font-semibold tracking-tight text-zinc-900">$45</span>
</div>
<button className="px-3 py-1.5 bg-zinc-100 text-zinc-900 text-xs font-medium rounded hover:bg-zinc-200 transition-colors">Add</button>
</div>
</div>

<div className="rounded-xl p-5 bg-gradient-to-br from-indigo-900 to-zinc-900 text-white relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-sm font-medium mb-1 text-indigo-100">Family Health Plan</h3>
<p className="text-xs text-zinc-300 mb-4 opacity-90 leading-relaxed">Add up to 4 family members and get flat 20% off on all routine tests.</p>
<button className="text-xs font-medium bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded text-white inline-flex items-center gap-1 backdrop-blur-sm border border-white/10">
                                        Explore Plan <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<iconify-icon className="absolute -bottom-4 -right-4 text-8xl text-white/5" icon="solar:shield-star-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
